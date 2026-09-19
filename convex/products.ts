import { getAuthUserId } from "@convex-dev/auth/server";
import { v } from "convex/values";

import { action, internalMutation, internalQuery, mutation, query } from "./_generated/server";
import { internal } from "./_generated/api";

const categoryValidator = v.union(
  v.literal("cleanser"),
  v.literal("toner"),
  v.literal("serum"),
  v.literal("moisturizer"),
  v.literal("spf"),
  v.literal("eye-care"),
  v.literal("hair-care"),
  v.literal("body-care"),
  v.literal("other"),
);

export const listProducts = query({
  args: {},
  handler: async (ctx) => {
    const userId = await getAuthUserId(ctx);
    if (!userId) {
      return [];
    }

    return ctx.db
      .query("products")
      .withIndex("by_user_and_expiresAt", (q) => q.eq("userId", userId))
      .order("asc")
      .collect();
  },
});

export const addProduct = mutation({
  args: {
    name: v.string(),
    brand: v.optional(v.string()),
    barcode: v.optional(v.string()),
    category: categoryValidator,
    source: v.union(v.literal("barcode"), v.literal("manual")),
    openedAt: v.number(),
    paoMonths: v.number(),
  },
  handler: async (ctx, args) => {
    const userId = await getAuthUserId(ctx);
    if (!userId) {
      throw new Error("Oturum açmış kullanıcı bulunamadı.");
    }

    const now = Date.now();
    const expiresAt = args.openedAt + args.paoMonths * 30 * 24 * 60 * 60 * 1000;

    return ctx.db.insert("products", {
      userId,
      name: args.name,
      brand: args.brand,
      barcode: args.barcode,
      category: args.category,
      source: args.source,
      openedAt: args.openedAt,
      paoMonths: args.paoMonths,
      expiresAt,
      createdAt: now,
    });
  },
});

export const updateProduct = mutation({
  args: {
    productId: v.id("products"),
    name: v.string(),
    brand: v.optional(v.string()),
    category: categoryValidator,
    paoMonths: v.number(),
  },
  handler: async (ctx, args) => {
    const userId = await getAuthUserId(ctx);
    if (!userId) {
      throw new Error("Oturum açmış kullanıcı bulunamadı.");
    }

    const product = await ctx.db.get(args.productId);
    if (!product || product.userId !== userId) {
      throw new Error("Ürün bulunamadı.");
    }

    const expiresAt = product.openedAt + args.paoMonths * 30 * 24 * 60 * 60 * 1000;

    await ctx.db.patch(args.productId, {
      name: args.name,
      brand: args.brand,
      category: args.category,
      paoMonths: args.paoMonths,
      expiresAt,
    });
  },
});

export const deleteProduct = mutation({
  args: { productId: v.id("products") },
  handler: async (ctx, args) => {
    const userId = await getAuthUserId(ctx);
    if (!userId) {
      throw new Error("Oturum açmış kullanıcı bulunamadı.");
    }

    const product = await ctx.db.get(args.productId);
    if (!product || product.userId !== userId) {
      throw new Error("Ürün bulunamadı.");
    }

    const affectedSteps = await ctx.db
      .query("loopSteps")
      .withIndex("by_product", (q) => q.eq("productId", args.productId))
      .collect();

    for (const step of affectedSteps) {
      await ctx.db.patch(step._id, { missingProduct: true });
    }

    await ctx.db.delete(args.productId);
  },
});

/** Yalnızca rakamları bırakır ve GTIN-13 biçimine solda sıfırla tamamlar (UPC-A/EAN-8 taramalarını da eşleştirmek için). */
function normalizeBarcode(raw: string): string {
  return raw.replace(/\D/g, "").padStart(13, "0");
}

export const getCatalogEntryByBarcode = internalQuery({
  args: { barcode: v.string() },
  handler: async (ctx, args) => {
    return ctx.db
      .query("productCatalog")
      .withIndex("by_barcode", (q) => q.eq("barcode", args.barcode))
      .unique();
  },
});

export const cacheCatalogEntry = internalMutation({
  args: { name: v.string(), barcode: v.string(), brand: v.optional(v.string()) },
  handler: async (ctx, args) => {
    const existing = await ctx.db
      .query("productCatalog")
      .withIndex("by_barcode", (q) => q.eq("barcode", args.barcode))
      .unique();
    if (existing) {
      return;
    }

    await ctx.db.insert("productCatalog", {
      name: args.name,
      barcode: args.barcode,
      brand: args.brand,
      source: "open_beauty_facts",
      createdAt: Date.now(),
    });
  },
});

type OpenBeautyFactsResponse = {
  status: number;
  product?: { product_name?: string; brands?: string };
};

export type BarcodeLookupResult =
  | { found: true; name: string; brand?: string; source: "local_gratis" | "open_beauty_facts" }
  | { found: false };

/**
 * Barkod tarama önceliği: 1) yerel Gratis kataloğu (`productCatalog`),
 * 2) Open Beauty Facts API (bulunursa sonraki aramalar için önbelleğe
 * alınır). `fetch` yalnızca action'larda çalıştığından bu bir action'dır;
 * DB erişimi için internal query/mutation'lara `ctx.runQuery`/`ctx.runMutation`
 * ile delege eder.
 */
export const lookupBarcode = action({
  args: { barcode: v.string() },
  handler: async (ctx, args): Promise<BarcodeLookupResult> => {
    const barcode = normalizeBarcode(args.barcode);

    const local = await ctx.runQuery(internal.products.getCatalogEntryByBarcode, { barcode });
    if (local) {
      return { found: true, name: local.name, brand: local.brand, source: local.source };
    }

    try {
      const response = await fetch(
        `https://world.openbeautyfacts.org/api/v0/product/${encodeURIComponent(barcode)}.json`,
      );
      if (!response.ok) {
        return { found: false };
      }

      const data = (await response.json()) as OpenBeautyFactsResponse;
      if (data.status !== 1 || !data.product?.product_name) {
        return { found: false };
      }

      const name = data.product.product_name;
      const brand = data.product.brands;

      await ctx.runMutation(internal.products.cacheCatalogEntry, { name, barcode, brand });

      return { found: true, name, brand, source: "open_beauty_facts" };
    } catch {
      return { found: false };
    }
  },
});
