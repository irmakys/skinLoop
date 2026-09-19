# Data Model: skinLoop v1 MVP

Convex şemasında tutulan varlıklar (`convex/schema.ts`). Journal bu şemaya
**dahil değildir** — bkz. Constitution İlke I ve bu dosyanın sonundaki not.

## User

Convex Auth tarafından yönetilir; ayrı bir uygulama tablosu gerekmez, Convex
Auth'un `users` tablosu temel alınır.

| Alan | Tip | Not |
|------|-----|-----|
| email | string | benzersiz, zorunlu |
| passwordHash | (Convex Auth tarafından yönetilir) | |
| linkedProviders | string[] (`google`, `apple`) | isteğe bağlı, Ayarlar'dan eklenir |

## Product (Vanity kalemi)

| Alan | Tip | Kural |
|------|-----|-------|
| userId | Id\<"users"\> | zorunlu, sahiplik |
| name | string | zorunlu |
| brand | string | opsiyonel |
| barcode | string | opsiyonel; girilmişse aynı `userId` için benzersiz (tekilleştirme) |
| category | union (sabit enum) | zorunlu — bkz. Category |
| source | union("barcode" \| "manual") | zorunlu |
| openedAt | number (epoch ms) | zorunlu |
| paoMonths | number | zorunlu (ay cinsinden kullanım ömrü) |
| expiresAt | number (epoch ms, türetilmiş) | `openedAt + paoMonths` — yazma anında hesaplanıp saklanır (sorgu performansı için) |
| createdAt | number | zorunlu |

**Türetilmiş durum**: `expiresAt < now` ise ürün "süresi doldu" rozetiyle
gösterilir (FR-009); kayıt silinmez.

**İlişkiler**: Bir Product, sıfır veya daha fazla LoopStep tarafından
referans alınabilir.

## Category

Sabit enum (kod içinde `src/constants/categories.ts` ve
`convex/schema.ts`'de birebir aynı değerlerle tutulur):

`cleanser | toner | serum | moisturizer | spf | eye-care | hair-care | body-care | other`

*(Tam Türkçe etiketler implementasyon sırasında UI katmanında eşlenir;
enum değerleri sabit kalır.)*

## Loop (Rutin)

| Alan | Tip | Kural |
|------|-----|-------|
| userId | Id\<"users"\> | zorunlu |
| type | union("morning" \| "evening" \| "weekly") | zorunlu |
| name | string | zorunlu |
| stepOrder | Id\<"loopSteps"\>[] | adım sırasını belirler |
| createdAt | number | zorunlu |

## LoopStep

| Alan | Tip | Kural |
|------|-----|-------|
| loopId | Id\<"loops"\> | zorunlu |
| productId | Id\<"products"\> | zorunlu (FR-011: her adım bir ürüne bağlı) |
| order | number | Loop içindeki sıra |
| lastCompletedAt | number \| null | son tamamlanma zaman damgası |
| missingProduct | boolean | ürün silinirse `true` olur (FR-017) |

**Durum geçişi**: `productId` referans ettiği Product silindiğinde,
LoopStep otomatik olarak `missingProduct: true` işaretlenir; kullanıcı yeni
bir ürün seçene kadar bu adım "eksik" gösterilir.

## NotificationSchedule (cihaz-yerel, Convex'te saklanmaz)

Sunucu şeması yok. Client, Loop/Product verisinden türeterek
`expo-notifications` ile cihazda zamanlar:
- Her Loop `type`'ı için günlük/haftalık tekrarlayan bildirim (DAILY/WEEKLY trigger).
- Her Product'ın `expiresAt` alanına göre tek seferlik hatırlatma (DATE trigger,
  süre dolmadan birkaç gün önce).

## JournalEntry (yalnızca cihazda, Convex şemasının dışında)

| Alan | Tip | Not |
|------|-----|-----|
| id | string (yerel UUID) | cihaz-yerel birincil anahtar |
| date | number (epoch ms) | |
| encryptedFilePath | string | `expo-file-system` özel dizinindeki şifreli dosya yolu |
| note | string \| null | opsiyonel |

Bu kayıtlar **hiçbir Convex tablosunda veya mutation'ında yer almaz**; yerel
depolama mekanizması `research.md §3`'te tanımlanmıştır. Kullanıcı hesabı
silindiğinde sunucu tarafında silinecek Journal verisi yoktur (zaten hiç
gönderilmemiştir).
