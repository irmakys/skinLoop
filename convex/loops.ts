import { getAuthUserId } from "@convex-dev/auth/server";
import { v } from "convex/values";

import { mutation, query } from "./_generated/server";

const loopTypeValidator = v.union(
  v.literal("morning"),
  v.literal("evening"),
  v.literal("weekly"),
  v.literal("monthly"),
);

export const listLoops = query({
  args: {},
  handler: async (ctx) => {
    const userId = await getAuthUserId(ctx);
    if (!userId) {
      return [];
    }

    const loops = await ctx.db
      .query("loops")
      .withIndex("by_user", (q) => q.eq("userId", userId))
      .collect();

    return Promise.all(
      loops.map(async (loop) => {
        const steps = await ctx.db
          .query("loopSteps")
          .withIndex("by_loop", (q) => q.eq("loopId", loop._id))
          .collect();
        steps.sort((a, b) => a.order - b.order);
        return { ...loop, steps };
      }),
    );
  },
});

export const createLoop = mutation({
  args: {
    type: loopTypeValidator,
    name: v.string(),
    steps: v.array(
      v.object({
        productId: v.id("products"),
        order: v.number(),
        isOptional: v.boolean(),
      }),
    ),
    reminderEnabled: v.optional(v.boolean()),
    reminderHour: v.optional(v.number()),
    reminderMinute: v.optional(v.number()),
    reminderWeekday: v.optional(v.number()),
    reminderDay: v.optional(v.number()),
  },
  handler: async (ctx, args) => {
    const userId = await getAuthUserId(ctx);
    if (!userId) {
      throw new Error("Oturum açmış kullanıcı bulunamadı.");
    }

    const loopId = await ctx.db.insert("loops", {
      userId,
      type: args.type,
      name: args.name,
      stepOrder: [],
      createdAt: Date.now(),
      reminderEnabled: args.reminderEnabled ?? false,
      reminderHour: args.reminderHour,
      reminderMinute: args.reminderMinute,
      reminderWeekday: args.reminderWeekday,
      reminderDay: args.reminderDay,
    });

    const stepIds = [];
    for (const step of args.steps) {
      const stepId = await ctx.db.insert("loopSteps", {
        loopId,
        productId: step.productId,
        order: step.order,
        lastCompletedAt: null,
        missingProduct: false,
        isOptional: step.isOptional,
      });
      stepIds.push(stepId);
    }

    await ctx.db.patch(loopId, { stepOrder: stepIds });

    return loopId;
  },
});

export const deleteLoop = mutation({
  args: { loopId: v.id("loops") },
  handler: async (ctx, args) => {
    const userId = await getAuthUserId(ctx);
    if (!userId) {
      throw new Error("Oturum açmış kullanıcı bulunamadı.");
    }

    const loop = await ctx.db.get(args.loopId);
    if (!loop || loop.userId !== userId) {
      throw new Error("Rutin bulunamadı.");
    }

    const steps = await ctx.db
      .query("loopSteps")
      .withIndex("by_loop", (q) => q.eq("loopId", args.loopId))
      .collect();

    for (const step of steps) {
      const completions = await ctx.db
        .query("loopStepCompletions")
        .withIndex("by_step_and_day", (q) => q.eq("stepId", step._id))
        .collect();
      for (const completion of completions) {
        await ctx.db.delete(completion._id);
      }
      await ctx.db.delete(step._id);
    }

    await ctx.db.delete(args.loopId);
  },
});

export const replaceStepProduct = mutation({
  args: { stepId: v.id("loopSteps"), productId: v.id("products") },
  handler: async (ctx, args) => {
    const userId = await getAuthUserId(ctx);
    if (!userId) {
      throw new Error("Oturum açmış kullanıcı bulunamadı.");
    }

    const step = await ctx.db.get(args.stepId);
    if (!step) {
      throw new Error("Adım bulunamadı.");
    }

    const loop = await ctx.db.get(step.loopId);
    if (!loop || loop.userId !== userId) {
      throw new Error("Adım bulunamadı.");
    }

    const product = await ctx.db.get(args.productId);
    if (!product || product.userId !== userId) {
      throw new Error("Ürün bulunamadı.");
    }

    await ctx.db.patch(args.stepId, {
      productId: args.productId,
      missingProduct: false,
    });
  },
});

/** Var olan bir rutine sonradan yeni bir ürün/adım ekler. */
export const addLoopStep = mutation({
  args: { loopId: v.id("loops"), productId: v.id("products"), isOptional: v.boolean() },
  handler: async (ctx, args) => {
    const userId = await getAuthUserId(ctx);
    if (!userId) {
      throw new Error("Oturum açmış kullanıcı bulunamadı.");
    }

    const loop = await ctx.db.get(args.loopId);
    if (!loop || loop.userId !== userId) {
      throw new Error("Rutin bulunamadı.");
    }

    const product = await ctx.db.get(args.productId);
    if (!product || product.userId !== userId) {
      throw new Error("Ürün bulunamadı.");
    }

    const existingSteps = await ctx.db
      .query("loopSteps")
      .withIndex("by_loop", (q) => q.eq("loopId", args.loopId))
      .collect();
    const nextOrder = existingSteps.length === 0 ? 0 : Math.max(...existingSteps.map((s) => s.order)) + 1;

    const stepId = await ctx.db.insert("loopSteps", {
      loopId: args.loopId,
      productId: args.productId,
      order: nextOrder,
      lastCompletedAt: null,
      missingProduct: false,
      isOptional: args.isOptional,
    });

    await ctx.db.patch(args.loopId, { stepOrder: [...loop.stepOrder, stepId] });

    return stepId;
  },
});

/** Bir rutinden bir adımı (ve o adıma ait tamamlanma kayıtlarını) kaldırır. */
export const removeLoopStep = mutation({
  args: { stepId: v.id("loopSteps") },
  handler: async (ctx, args) => {
    const userId = await getAuthUserId(ctx);
    if (!userId) {
      throw new Error("Oturum açmış kullanıcı bulunamadı.");
    }

    const step = await ctx.db.get(args.stepId);
    if (!step) {
      throw new Error("Adım bulunamadı.");
    }
    const loop = await ctx.db.get(step.loopId);
    if (!loop || loop.userId !== userId) {
      throw new Error("Adım bulunamadı.");
    }

    const completions = await ctx.db
      .query("loopStepCompletions")
      .withIndex("by_step_and_day", (q) => q.eq("stepId", args.stepId))
      .collect();
    for (const completion of completions) {
      await ctx.db.delete(completion._id);
    }

    await ctx.db.patch(step.loopId, {
      stepOrder: loop.stepOrder.filter((id) => id !== args.stepId),
    });
    await ctx.db.delete(args.stepId);
  },
});

/** Bir rutinin hatırlatıcı zamanını/gününü günceller (Ayarlar > Rutin Hatırlatıcıları'ndan bağımsız, rutine özel). */
export const updateLoopReminder = mutation({
  args: {
    loopId: v.id("loops"),
    reminderEnabled: v.boolean(),
    reminderHour: v.number(),
    reminderMinute: v.number(),
    reminderWeekday: v.optional(v.number()),
    reminderDay: v.optional(v.number()),
    reminderNotificationId: v.optional(v.string()),
  },
  handler: async (ctx, args) => {
    const userId = await getAuthUserId(ctx);
    if (!userId) {
      throw new Error("Oturum açmış kullanıcı bulunamadı.");
    }

    const loop = await ctx.db.get(args.loopId);
    if (!loop || loop.userId !== userId) {
      throw new Error("Rutin bulunamadı.");
    }

    await ctx.db.patch(args.loopId, {
      reminderEnabled: args.reminderEnabled,
      reminderHour: args.reminderHour,
      reminderMinute: args.reminderMinute,
      reminderWeekday: args.reminderWeekday,
      reminderDay: args.reminderDay,
      reminderNotificationId: args.reminderNotificationId,
    });
  },
});

/** Bir adımın belirli bir gündeki tamamlanma durumunu açar/kapatır (Planlayıcı). */
export const toggleStepCompletion = mutation({
  args: { stepId: v.id("loopSteps"), dayKey: v.string() },
  handler: async (ctx, args) => {
    const userId = await getAuthUserId(ctx);
    if (!userId) {
      throw new Error("Oturum açmış kullanıcı bulunamadı.");
    }

    const step = await ctx.db.get(args.stepId);
    if (!step) {
      throw new Error("Adım bulunamadı.");
    }
    const loop = await ctx.db.get(step.loopId);
    if (!loop || loop.userId !== userId) {
      throw new Error("Adım bulunamadı.");
    }

    const existing = await ctx.db
      .query("loopStepCompletions")
      .withIndex("by_step_and_day", (q) => q.eq("stepId", args.stepId).eq("dayKey", args.dayKey))
      .unique();

    if (existing) {
      await ctx.db.delete(existing._id);
      return { completed: false };
    }

    await ctx.db.insert("loopStepCompletions", {
      userId,
      stepId: args.stepId,
      dayKey: args.dayKey,
      completedAt: Date.now(),
    });
    return { completed: true };
  },
});

/** `startDayKey`–`endDayKey` (dahil) aralığındaki tüm tamamlanma kayıtlarını döner (Haftalık Uyum Skoru). */
export const listCompletionsInRange = query({
  args: { startDayKey: v.string(), endDayKey: v.string() },
  handler: async (ctx, args) => {
    const userId = await getAuthUserId(ctx);
    if (!userId) {
      return [];
    }

    return ctx.db
      .query("loopStepCompletions")
      .withIndex("by_user_and_day", (q) =>
        q.eq("userId", userId).gte("dayKey", args.startDayKey).lte("dayKey", args.endDayKey),
      )
      .collect();
  },
});
