import { mutation } from "./_generated/server";
import { GRATIS_SEED_PRODUCTS } from "./gratisSeedData";

/**
 * Gratis'ten kazınıp temizlenmiş ~620 ürünlük barkod kataloğunu
 * `productCatalog` tablosuna aktarır. Barkoda göre idempotent'tir —
 * zaten var olan barkodlar atlanır, bu yüzden birden fazla kez
 * çalıştırmak güvenlidir (ör. veri seti güncellenip tekrar seed edilirse).
 *
 * Çalıştırmak için:
 *   npx convex run seed:seedGratisProducts
 */
export const seedGratisProducts = mutation({
  args: {},
  handler: async (ctx) => {
    let inserted = 0;
    let skipped = 0;

    for (const product of GRATIS_SEED_PRODUCTS) {
      const existing = await ctx.db
        .query("productCatalog")
        .withIndex("by_barcode", (q) => q.eq("barcode", product.barcode))
        .unique();

      if (existing) {
        skipped++;
        continue;
      }

      await ctx.db.insert("productCatalog", {
        name: product.name,
        barcode: product.barcode,
        source: "local_gratis",
        createdAt: Date.now(),
      });
      inserted++;
    }

    return { inserted, skipped, total: GRATIS_SEED_PRODUCTS.length };
  },
});
