import { mutation } from "./_generated/server";
import { GRATIS_SEED_PRODUCTS } from "./gratisSeedData";
import { LOCAL_CATALOG_SEED_PRODUCTS } from "./localCatalogSeedData";
import { normalizeBarcode } from "./products";

/**
 * Seed dosyalarındaki barkodu kataloğun/tarayıcının kullandığı kanonik
 * biçimle (bkz. `normalizeBarcode` — 13 haneli, solda sıfırla tamamlanmış)
 * karşılaştırır. CSV'den elle/betikle aktarılan veride görünmez boşluk,
 * rakam-dışı karakter veya (nadiren) 13 haneden UZUN bozuk kayıtlar
 * (`normalizeBarcode` bunları KISALTMAZ, yalnızca kısaları tamamlar)
 * sessizce veritabanına girmesin diye burada tespit edilip uyarı olarak
 * loglanır — kayıt yine de eklenir (aksi halde ürün tamamen kaybolur),
 * ama hangi barkodların taramada asla eşleşmeyeceği açıkça görünür olur.
 */
function validateSeedBarcode(rawBarcode: string, productName: string): string {
  const normalized = normalizeBarcode(rawBarcode);
  if (normalized !== rawBarcode || normalized.length !== 13) {
    // eslint-disable-next-line no-console -- seed verisindeki bozuk barkodları teşhis edebilmek için kasıtlı
    console.warn(
      `[seed] Şüpheli barkod — "${productName}": ham="${rawBarcode}" (${rawBarcode.length} hane) normalize edilmiş="${normalized}" (${normalized.length} hane). ` +
        (rawBarcode.replace(/\D/g, "").length > 13
          ? "13 haneden UZUN — otomatik düzeltilemez, kaynak veriyi elle kontrol et."
          : "Kaydediliyor ama kaynak veriyi doğrulamak faydalı olur."),
    );
  }
  return normalized;
}

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
      const barcode = validateSeedBarcode(product.barcode, product.name);
      const existing = await ctx.db
        .query("productCatalog")
        .withIndex("by_barcode", (q) => q.eq("barcode", barcode))
        .unique();

      if (existing) {
        skipped++;
        continue;
      }

      await ctx.db.insert("productCatalog", {
        name: product.name,
        barcode,
        source: "local_gratis",
        createdAt: Date.now(),
      });
      inserted++;
    }

    return { inserted, skipped, total: GRATIS_SEED_PRODUCTS.length };
  },
});

/**
 * Gratis, Rossmann ve Watsons cilt & saç bakım barkod listelerinden
 * (bkz. localCatalogSeedData.ts) birleştirilip barkoda göre tekilleştirilmiş
 * ~6.400 ürünlük kataloğu `productCatalog` tablosuna aktarır. Barkoda göre
 * idempotent'tir — zaten var olan barkodlar (ör. `seedGratisProducts`'ın
 * daha önce eklediği eski ~620 kayıt) atlanır, bu yüzden birden fazla kez
 * çalıştırmak güvenlidir.
 *
 * Çalıştırmak için:
 *   npx convex run seed:seedLocalCatalog
 */
export const seedLocalCatalog = mutation({
  args: {},
  handler: async (ctx) => {
    let inserted = 0;
    let skipped = 0;

    for (const product of LOCAL_CATALOG_SEED_PRODUCTS) {
      const barcode = validateSeedBarcode(product.barcode, product.name);
      const existing = await ctx.db
        .query("productCatalog")
        .withIndex("by_barcode", (q) => q.eq("barcode", barcode))
        .unique();

      if (existing) {
        skipped++;
        continue;
      }

      await ctx.db.insert("productCatalog", {
        name: product.name,
        barcode,
        source: product.source,
        createdAt: Date.now(),
      });
      inserted++;
    }

    return { inserted, skipped, total: LOCAL_CATALOG_SEED_PRODUCTS.length };
  },
});
