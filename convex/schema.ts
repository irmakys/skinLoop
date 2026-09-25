import { authTables } from "@convex-dev/auth/server";
import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
  ...authTables,

  /**
   * `authTables.users`'ı KVKK/açık rıza damgası alanlarıyla genişletir.
   * `@convex-dev/auth`'un kendi `users` tanımı sabit bir TableDefinition
   * olduğundan (spread ile alan eklenemez), tabloyu kütüphanenin orijinal
   * alanlarını (name/image/email/...) birebir koruyarak burada yeniden
   * tanımlamak gerekiyor — bu, Convex Auth'un "ek kullanıcı verisi saklama"
   * için belgelenen resmi özelleştirme yöntemidir. Bu satır `...authTables`
   * spread'inden SONRA geldiği için üzerine yazar.
   */
  users: defineTable({
    name: v.optional(v.string()),
    image: v.optional(v.string()),
    email: v.optional(v.string()),
    emailVerificationTime: v.optional(v.number()),
    phone: v.optional(v.string()),
    phoneVerificationTime: v.optional(v.number()),
    isAnonymous: v.optional(v.boolean()),
    /**
     * KVKK/açık rıza damgası. Şifreyle kayıt olan kullanıcılar için
     * `convex/auth.ts`'teki Password `profile` callback'i bunu zorunlu
     * kılar (onay olmadan hesap oluşturulmaz). Google/Apple ile ilk kez
     * giriş yapanlarda bu alan boş gelir; `LegalConsentGate` bileşeni bu
     * durumu yakalayıp girişten hemen sonra zorunlu onay ekranı gösterir
     * (bkz. src/features/auth/LegalConsentGate.tsx). Eski kayıtlarda da
     * yoktur, bu yüzden `v.optional` — "zorunlu" kural şema değil, iş
     * mantığı seviyesinde (profile callback + gate) uygulanır.
     */
    kvkkConsent: v.optional(v.boolean()),
    /** ISO 8601 zaman damgası — sunucu tarafında üretilir, istemciden gelmez. */
    kvkkConsentDate: v.optional(v.string()),
    /** Onaylanan metin sürümü (bkz. convex/legalConsent.ts). */
    kvkkConsentVersion: v.optional(v.string()),
    /**
     * E-posta OTP doğrulaması (sahte hesapları engellemek için). Şifreyle
     * kayıt akışı artık hesap oluşturulmadan ÖNCE e-postayı doğruluyor
     * (bkz. convex/emailVerification.ts + convex/auth.ts Password
     * `profile` callback'i) — yani hesap her zaman `true` ile oluşur, bu
     * alan yalnızca bilgi amaçlıdır ve hiçbir yerde erişim engellemek için
     * kullanılmaz. Google/Apple'da da e-posta sağlayıcı tarafından zaten
     * doğrulanmış kabul edilir.
     */
    isEmailVerified: v.optional(v.boolean()),
  })
    .index("email", ["email"])
    .index("phone", ["phone"]),

  /**
   * Kayıt akışının e-posta doğrulama adımı — HENÜZ hesabı olmayan bir
   * e-posta için OTP tutar (kullanıcıya değil, e-postaya bağlıdır). Hesap
   * yalnızca burada `verified:true` olan bir kayıt varsa oluşturulabilir
   * (bkz. convex/auth.ts Password `profile` callback'i); başarılı kayıttan
   * hemen sonra silinir.
   */
  emailVerificationRequests: defineTable({
    email: v.string(),
    otp: v.string(),
    otpExpiresAt: v.number(),
    verified: v.boolean(),
  }).index("by_email", ["email"]),

  /**
   * Paylaşılan barkod→ürün kataloğu (kullanıcıya özel değil — bir barkod
   * fiziksel ürünün kendisini tanımlar, kim taradığından bağımsızdır).
   * Barkod tarama akışında Open Beauty Facts'e gitmeden önce ilk bakılan
   * yerel kaynak; Gratis CSV seed'i ve API'den önbelleğe alınan sonuçlar
   * burada birikir. `products` tablosuyla karıştırılmamalı: o, kullanıcının
   * kendi envanterindeki (açılmış/PAO takipli) ürünleri tutar.
   */
  productCatalog: defineTable({
    name: v.string(),
    barcode: v.string(),
    brand: v.optional(v.string()),
    source: v.union(v.literal("local_gratis"), v.literal("open_beauty_facts")),
    createdAt: v.number(),
  }).index("by_barcode", ["barcode"]),

  products: defineTable({
    userId: v.id("users"),
    name: v.string(),
    brand: v.optional(v.string()),
    barcode: v.optional(v.string()),
    category: v.union(
      v.literal("cleanser"),
      v.literal("toner"),
      v.literal("serum"),
      v.literal("moisturizer"),
      v.literal("spf"),
      v.literal("eye-care"),
      v.literal("hair-care"),
      v.literal("body-care"),
      v.literal("other"),
    ),
    source: v.union(v.literal("barcode"), v.literal("manual")),
    openedAt: v.number(),
    paoMonths: v.number(),
    expiresAt: v.number(),
    createdAt: v.number(),
  })
    .index("by_user", ["userId"])
    .index("by_user_and_expiresAt", ["userId", "expiresAt"])
    .index("by_user_and_barcode", ["userId", "barcode"]),

  loops: defineTable({
    userId: v.id("users"),
    type: v.union(
      v.literal("morning"),
      v.literal("evening"),
      v.literal("weekly"),
      v.literal("monthly"),
    ),
    name: v.string(),
    stepOrder: v.array(v.id("loopSteps")),
    createdAt: v.number(),
    /** Hatırlatıcı ayarları — eski kayıtlarda yok, yoksa hatırlatıcı kapalı kabul edilir. */
    reminderEnabled: v.optional(v.boolean()),
    reminderHour: v.optional(v.number()),
    reminderMinute: v.optional(v.number()),
    /** Yalnızca haftalık rutinler için: 0=Pzt ... 6=Paz (bkz. WEEKDAY_LABELS_TR). */
    reminderWeekday: v.optional(v.number()),
    /** Yalnızca aylık rutinler için: ayın günü (1-31). */
    reminderDay: v.optional(v.number()),
    /** Cihazda zamanlanan bildirimi iptal/yeniden zamanlamak için expo-notifications kimliği. */
    reminderNotificationId: v.optional(v.string()),
  }).index("by_user", ["userId"]),

  loopSteps: defineTable({
    loopId: v.id("loops"),
    productId: v.id("products"),
    order: v.number(),
    lastCompletedAt: v.union(v.number(), v.null()),
    missingProduct: v.boolean(),
    /** "Tembel Mod"da filtrelenen opsiyonel adımlar (ör. serum, göz kremi). Eski kayıtlarda yok → `false` kabul edilir. */
    isOptional: v.optional(v.boolean()),
  })
    .index("by_loop", ["loopId"])
    .index("by_product", ["productId"]),

  /** Adımın belirli bir güne ait tamamlanma kaydı — günlük bazlı Planlayıcı takibi için. */
  loopStepCompletions: defineTable({
    userId: v.id("users"),
    stepId: v.id("loopSteps"),
    /** "YYYY-MM-DD" biçiminde yerel gün anahtarı. */
    dayKey: v.string(),
    completedAt: v.number(),
  })
    .index("by_step_and_day", ["stepId", "dayKey"])
    .index("by_user_and_day", ["userId", "dayKey"]),
});
