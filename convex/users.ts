import { getAuthUserId } from "@convex-dev/auth/server";
import { v } from "convex/values";

import { mutation, query } from "./_generated/server";
import { KVKK_CONSENT_VERSION } from "./legalConsent";

export const getCurrentUser = query({
  args: {},
  handler: async (ctx) => {
    const userId = await getAuthUserId(ctx);
    if (!userId) {
      return null;
    }

    const user = await ctx.db.get(userId);
    if (!user) {
      return null;
    }
    return {
      email: user.email ?? null,
      name: user.name ?? null,
      image: user.image ?? null,
      kvkkConsent: user.kvkkConsent ?? false,
      kvkkConsentVersion: user.kvkkConsentVersion ?? null,
    };
  },
});

/**
 * Google/Apple ile ilk kez giriş yapan (veya bu özellikten önce şifreyle
 * kaydolmuş) kullanıcıların girişten hemen sonra zorunlu KVKK/açık rıza
 * onayını vermesi için — bkz. src/features/auth/LegalConsentGate.tsx.
 * Şifreyle kayıtta bu adıma gerek yok çünkü onay `convex/auth.ts`'teki
 * Password `profile` callback'i tarafından hesap oluşturulurken zaten
 * zorunlu kılınıyor.
 */
export const acceptKvkkConsent = mutation({
  args: {},
  handler: async (ctx) => {
    const userId = await getAuthUserId(ctx);
    if (!userId) {
      throw new Error("Oturum açmış kullanıcı bulunamadı.");
    }

    await ctx.db.patch(userId, {
      kvkkConsent: true,
      kvkkConsentDate: new Date().toISOString(),
      kvkkConsentVersion: KVKK_CONSENT_VERSION,
    });
  },
});

/** Profil ekranındaki özet istatistik kartları için: toplam ürün/rutin/tamamlama sayısı. */
export const getProfileStats = query({
  args: {},
  handler: async (ctx) => {
    const userId = await getAuthUserId(ctx);
    if (!userId) {
      return { totalProducts: 0, totalLoops: 0, totalCompletions: 0 };
    }

    const products = await ctx.db
      .query("products")
      .withIndex("by_user", (q) => q.eq("userId", userId))
      .collect();

    const loops = await ctx.db
      .query("loops")
      .withIndex("by_user", (q) => q.eq("userId", userId))
      .collect();

    const completions = await ctx.db
      .query("loopStepCompletions")
      .withIndex("by_user_and_day", (q) => q.eq("userId", userId))
      .collect();

    return {
      totalProducts: products.length,
      totalLoops: loops.length,
      totalCompletions: completions.length,
    };
  },
});

/** Profil adı/kullanıcı adını günceller. */
export const updateProfileName = mutation({
  args: { name: v.string() },
  handler: async (ctx, args) => {
    const userId = await getAuthUserId(ctx);
    if (!userId) {
      throw new Error("Oturum açmış kullanıcı bulunamadı.");
    }

    await ctx.db.patch(userId, { name: args.name.trim() || undefined });
  },
});

/** Profil fotoğrafı yüklemesi için imzalı, tek seferlik bir yükleme URL'i üretir. */
export const generateAvatarUploadUrl = mutation({
  args: {},
  handler: async (ctx) => {
    const userId = await getAuthUserId(ctx);
    if (!userId) {
      throw new Error("Oturum açmış kullanıcı bulunamadı.");
    }
    return ctx.storage.generateUploadUrl();
  },
});

/** Yüklenen dosyayı profil fotoğrafı olarak ayarlar. */
export const updateProfileImage = mutation({
  args: { storageId: v.id("_storage") },
  handler: async (ctx, args) => {
    const userId = await getAuthUserId(ctx);
    if (!userId) {
      throw new Error("Oturum açmış kullanıcı bulunamadı.");
    }

    const url = await ctx.storage.getUrl(args.storageId);
    if (!url) {
      throw new Error("Fotoğraf yüklenemedi.");
    }
    await ctx.db.patch(userId, { image: url });
  },
});

/** KVKK/GDPR "veri taşınabilirliği" — kullanıcının Convex'te tuttuğumuz tüm verisini döner. */
export const exportMyData = query({
  args: {},
  handler: async (ctx) => {
    const userId = await getAuthUserId(ctx);
    if (!userId) {
      throw new Error("Oturum açmış kullanıcı bulunamadı.");
    }

    const user = await ctx.db.get(userId);

    const products = await ctx.db
      .query("products")
      .withIndex("by_user", (q) => q.eq("userId", userId))
      .collect();

    const loops = await ctx.db
      .query("loops")
      .withIndex("by_user", (q) => q.eq("userId", userId))
      .collect();

    const loopsWithSteps = await Promise.all(
      loops.map(async (loop) => {
        const steps = await ctx.db
          .query("loopSteps")
          .withIndex("by_loop", (q) => q.eq("loopId", loop._id))
          .collect();
        return { ...loop, steps };
      }),
    );

    return {
      exportedAt: Date.now(),
      email: user?.email ?? null,
      products,
      loops: loopsWithSteps,
    };
  },
});

/**
 * KVKK/GDPR "silme hakkı" — kullanıcının Convex'te tuttuğumuz tüm verisini
 * (ürünler, rutinler, hesap/oturum kayıtları) kalıcı olarak siler. Journal
 * fotoğrafları zaten yalnızca cihazda tutulduğundan (Constitution İlke I)
 * burada yer almaz; istemci tarafında ayrıca temizlenir.
 */
export const deleteMyAccount = mutation({
  args: {},
  handler: async (ctx) => {
    const userId = await getAuthUserId(ctx);
    if (!userId) {
      throw new Error("Oturum açmış kullanıcı bulunamadı.");
    }

    const products = await ctx.db
      .query("products")
      .withIndex("by_user", (q) => q.eq("userId", userId))
      .collect();
    for (const product of products) {
      await ctx.db.delete(product._id);
    }

    const loops = await ctx.db
      .query("loops")
      .withIndex("by_user", (q) => q.eq("userId", userId))
      .collect();
    for (const loop of loops) {
      const steps = await ctx.db
        .query("loopSteps")
        .withIndex("by_loop", (q) => q.eq("loopId", loop._id))
        .collect();
      for (const step of steps) {
        await ctx.db.delete(step._id);
      }
      await ctx.db.delete(loop._id);
    }

    const accounts = await ctx.db
      .query("authAccounts")
      .withIndex("userIdAndProvider", (q) => q.eq("userId", userId))
      .collect();
    for (const account of accounts) {
      await ctx.db.delete(account._id);
    }

    const sessions = await ctx.db
      .query("authSessions")
      .withIndex("userId", (q) => q.eq("userId", userId))
      .collect();
    for (const session of sessions) {
      const tokens = await ctx.db
        .query("authRefreshTokens")
        .withIndex("sessionId", (q) => q.eq("sessionId", session._id))
        .collect();
      for (const token of tokens) {
        await ctx.db.delete(token._id);
      }
      await ctx.db.delete(session._id);
    }

    await ctx.db.delete(userId);
  },
});
