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

/**
 * Standart UPC-A/EAN-13 kontrol hanesi (check digit) hesaplar. `digits`
 * kontrol hanesi HARİÇ 11 (UPC-A) veya 12 (EAN-13) haneli olmalı; soldan
 * 1. hane tek (weight×3), 2. hane çift (weight×1) sırasıyla devam eder.
 */
function computeCheckDigit(digits: string): string {
  let sum = 0;
  for (let i = 0; i < digits.length; i++) {
    const weight = i % 2 === 0 ? 3 : 1;
    sum += Number(digits[i]) * weight;
  }
  return String((10 - (sum % 10)) % 10);
}

/**
 * UPC-E (6 haneli sıkıştırılmış format — küçük paketli ürünlerde yaygın,
 * ör. dudak kremi/göz bakım kitleri) kodunu standart 12 haneli UPC-A'ya
 * genişletir (11 haneli gövde + hesaplanan kontrol hanesi). Number-system
 * hanesi burada her zaman "0" kabul edilir (kozmetik/perakende
 * ürünlerinde neredeyse istisnasız durum budur). Gövde açılımı GS1'in
 * resmi UPC-E→UPC-A genişletme tablosuna dayanır — son hane (d6) hangi
 * sıkıştırma kuralının uygulandığını belirler.
 */
function expandUpcEToUpcA(sixDigits: string): string {
  const [d1, d2, d3, d4, d5, d6] = sixDigits.split("");
  let manufacturer: string;
  let product: string;

  if (d6 === "0" || d6 === "1" || d6 === "2") {
    manufacturer = `${d1}${d2}${d6}00`;
    product = `00${d3}${d4}${d5}`;
  } else if (d6 === "3") {
    manufacturer = `${d1}${d2}${d3}00`;
    product = `000${d4}${d5}`;
  } else if (d6 === "4") {
    manufacturer = `${d1}${d2}${d3}${d4}0`;
    product = `0000${d5}`;
  } else {
    manufacturer = `${d1}${d2}${d3}${d4}${d5}`;
    product = `0000${d6}`;
  }

  const body = `0${manufacturer}${product}`; // 11 hane: number-system + mfr(5) + product(5)
  return `${body}${computeCheckDigit(body)}`; // 12 hane: UPC-A
}

/**
 * Kameradan/istemciden gelen ham barkodu kataloğun kullandığı kanonik
 * biçime (13 haneli, solda sıfırla tamamlanmış GTIN-13) çevirir. Tüm
 * boşluk/satır sonu/görünmez karakterler ve rakam-dışı her şey önce
 * atılır — bu yüzden istemci tarafındaki trim/sanitization eksik veya
 * hatalı olsa bile burası tek gerçek kaynak (source of truth) olarak
 * kalır. `scanType === "upc_e"` ise önce UPC-A'ya genişletilir (bkz.
 * expandUpcEToUpcA) — aksi halde 6-8 haneli bir UPC-E kodu, kataloğun
 * sakladığı 13 haneli tam koda hiçbir zaman zaten eşleşemez.
 */
export function normalizeBarcode(raw: string, scanType?: string): string {
  const digitsOnly = raw.replace(/\D/g, "");

  if (scanType === "upc_e" && (digitsOnly.length === 6 || digitsOnly.length === 7 || digitsOnly.length === 8)) {
    // 8 haneli ise number-system + check digit dahildir, orta 6 haneyi al.
    // 7 haneli ise number-system hanesi dahildir, son 6 haneyi al.
    const sixDigits =
      digitsOnly.length === 8 ? digitsOnly.slice(1, 7) : digitsOnly.length === 7 ? digitsOnly.slice(1) : digitsOnly;
    return expandUpcEToUpcA(sixDigits).padStart(13, "0");
  }

  return digitsOnly.padStart(13, "0");
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
  | {
      found: true;
      name: string;
      brand?: string;
      source: "local_gratis" | "local_rossmann" | "local_watsons" | "open_beauty_facts";
    }
  | { found: false };

/**
 * Barkod tarama önceliği: 1) yerel katalog (`productCatalog` — Gratis,
 * Rossmann, Watsons seed'leri), 2) Open Beauty Facts API (bulunursa
 * sonraki aramalar için önbelleğe alınır). `fetch` yalnızca action'larda
 * çalıştığından bu bir action'dır; DB erişimi için internal query/mutation'lara
 * `ctx.runQuery`/`ctx.runMutation` ile delege eder.
 */
export const lookupBarcode = action({
  args: { barcode: v.string(), scanType: v.optional(v.string()) },
  handler: async (ctx, args): Promise<BarcodeLookupResult> => {
    const barcode = normalizeBarcode(args.barcode, args.scanType);
    // eslint-disable-next-line no-console -- barkod eşleşmezliklerini teşhis edebilmek için kasıtlı
    console.log(
      `[BarcodeScan] ham="${args.barcode}" tip=${args.scanType ?? "?"} normalize edilmiş="${barcode}"`,
    );

    const local = await ctx.runQuery(internal.products.getCatalogEntryByBarcode, { barcode });
    if (local) {
      // eslint-disable-next-line no-console -- barkod eşleşmezliklerini teşhis edebilmek için kasıtlı
      console.log(`[BarcodeScan] yerel katalogda bulundu: "${local.name}" (kaynak: ${local.source})`);
      return { found: true, name: local.name, brand: local.brand, source: local.source };
    }
    // eslint-disable-next-line no-console -- barkod eşleşmezliklerini teşhis edebilmek için kasıtlı
    console.log(`[BarcodeScan] yerel katalogda yok, Open Beauty Facts'e soruluyor: "${barcode}"`);

    try {
      const response = await fetch(
        `https://world.openbeautyfacts.org/api/v0/product/${encodeURIComponent(barcode)}.json`,
      );
      if (!response.ok) {
        // eslint-disable-next-line no-console -- barkod eşleşmezliklerini teşhis edebilmek için kasıtlı
        console.log(`[BarcodeScan] Open Beauty Facts HTTP ${response.status} — bulunamadı olarak dönülüyor`);
        return { found: false };
      }

      const data = (await response.json()) as OpenBeautyFactsResponse;
      if (data.status !== 1 || !data.product?.product_name) {
        // eslint-disable-next-line no-console -- barkod eşleşmezliklerini teşhis edebilmek için kasıtlı
        console.log(`[BarcodeScan] Open Beauty Facts'te de yok (status=${data.status}): "${barcode}"`);
        return { found: false };
      }

      const name = data.product.product_name;
      const brand = data.product.brands;

      await ctx.runMutation(internal.products.cacheCatalogEntry, { name, barcode, brand });
      // eslint-disable-next-line no-console -- barkod eşleşmezliklerini teşhis edebilmek için kasıtlı
      console.log(`[BarcodeScan] Open Beauty Facts'te bulundu ve önbelleğe alındı: "${name}"`);

      return { found: true, name, brand, source: "open_beauty_facts" };
    } catch (err) {
      // eslint-disable-next-line no-console -- barkod eşleşmezliklerini teşhis edebilmek için kasıtlı
      console.log(`[BarcodeScan] Open Beauty Facts isteği başarısız: ${err instanceof Error ? err.message : String(err)}`);
      return { found: false };
    }
  },
});
