# skinLoop — Proje Durumu

**Son güncelleme**: 2026-09-18
**Aşama**: Planlama tamamlandı (Spec-Kit: constitution → specify → plan → tasks). Implementasyon henüz başlamadı.

Bu dosya, planlama görüşmesinde varılan tüm kararların, varsayımların ve
üretilen Spec-Kit dokümanlarının tek bakışta özetidir. Ayrıntılı/kanonik
kaynaklar `specs/001-skinloop-mvp/` ve `.specify/memory/constitution.md`
altındadır; bu dosya onların yerini almaz, bir gezinme haritasıdır.

## Ürün Özeti

skinLoop; kullanıcıların cilt/saç bakım ürünlerini israf etmeden, son
kullanma tarihlerini (PAO/SKT) kaçırmadan ve tutarlı rutinlerle (Loops)
kullanmasını sağlayan minimalist, reklamsız, gizlilik odaklı bir mobil
uygulama. Tıbbi teşhis/tavsiye içermez.

## Kapsam (v1)

**Dahil**: E-posta/şifre auth (+ Ayarlar'da isteğe bağlı Google/Apple
bağlama) · Vanity (barkod/manuel ürün ekleme, sabit kategori, tarih bazlı
PAO takibi) · Loops (ürüne bağlı adımlar, cihaz-yerel bildirim) · Journal
(cihaz-yerel şifreli depo tek doğruluk kaynağı, senkronsuz; kullanıcı
tercihiyle ayrıca sistem galerisine düz kopya — `expo-media-library`,
fotoğraflar isteğe bağlı bir Loop'a `loopId` ile bağlanabilir, "Cilt
Günlüğü" albümü + iki fotoğrafı yan yana Önce/Sonra kıyaslama) · Sentry
crash izleme.

**Hariç (v1 dışı)**: Ödeme/abonelik, sunucu taraflı push bildirim, çoklu
cihaz Journal senkronu, kullanıcı tanımlı kategoriler, kalan miktar/yüzde
takibi, otomatik ürün arşivleme, Rutin Kodları / sosyal özellikler
(v2 adayı).

## Mimari Kararlar

| Katman | Karar |
|---|---|
| İstemci | Expo (SDK 57) + Expo Router + React Native Paper |
| Backend/Auth/DB | Convex (Auth + reaktif Product/Loop/LoopStep verisi) |
| Kamera/Barkod | `expo-camera` (`CameraView` + `useCameraPermissions` + `onBarcodeScanned`) — SDK 57'de ayrı `expo-barcode-scanner` yok |
| Barkod veri kaynağı | Open Beauty Facts REST API v2 (`/api/v2/product/{barcode}.json`), ücretsiz, anahtarsız; bulunamazsa manuel giriş |
| Bildirimler | `expo-notifications`, tamamen cihaz-yerel (DATE/DAILY/WEEKLY trigger), sunucu push yok |
| Journal şifreleme | `expo-file-system` (yeni `File` API, özel sandbox dizini) + `expo-crypto` native AES-GCM (`aesEncryptAsync`/`aesDecryptAsync`) + anahtar `expo-secure-store`'da — üçüncü taraf kripto kütüphanesi gerekmiyor |
| Hata izleme | `@sentry/react-native` (Expo config plugin) |
| Dağıtım | EAS Build (iOS + Android) + Convex dev/prod ortam ayrımı |
| Proje yapısı | Tek repo: `convex/` (backend) + `src/` (Expo Router istemci); Journal Convex şemasının tamamen dışında |

Kaynak: `specs/001-skinloop-mvp/research.md` (Expo SDK 57 resmi
dokümantasyonundan doğrulanmıştır), `specs/001-skinloop-mvp/plan.md`.

## Veri Modeli (özet)

- **User** — Convex Auth yönetir; e-posta + opsiyonel bağlı Google/Apple.
- **Product (Vanity)** — ad, marka, barkod?, sabit kategori, kaynak
  (barkod/manuel), açılış tarihi, PAO ayı, `expiresAt` (sunucuda
  hesaplanır).
- **Category** — sabit enum: `cleanser | toner | serum | moisturizer |
  spf | eye-care | hair-care | body-care | other`.
- **Loop** — tip (morning/evening/weekly), ad, sıralı adım listesi.
- **LoopStep** — bağlı `productId` (zorunlu), sıra, tamamlanma durumu,
  `missingProduct` bayrağı (bağlı ürün silinirse).
- **JournalEntry** — yalnızca cihazda (tarih, şifreli dosya yolu, not);
  **Convex şemasında yer almaz**.

Kaynak: `specs/001-skinloop-mvp/data-model.md`,
`specs/001-skinloop-mvp/contracts/convex-functions.md`.

## Kullanıcı Hikayeleri (öncelik sırası)

1. **P1 — Hesap Oluşturma ve Giriş**: e-posta/şifre zorunlu, misafir modu yok; Google/Apple bağlama yalnızca Ayarlar'da.
2. **P2 — Ürün Envanteri ve PAO Takibi**: barkod veya manuel ekleme; süresi dolan ürün silinmez, rozetle işaretlenir.
3. **P3 — Rutin Döngüleri**: her adım bir ürüne bağlı; cihaz-yerel hatırlatıcı.
4. **P4 — Gizlilik Odaklı Journal**: fotoğraf yalnızca cihazda, senkronsuz.

Kaynak: `specs/001-skinloop-mvp/spec.md` (18 işlevsel gereksinim, 6 ölçülebilir başarı kriteri, kenar durumlar dahil).

## Anayasa İlkeleri (`.specify/memory/constitution.md`, v1.0.0)

I. Gizlilik-Öncelikli Journal · II. Tıbbi İddia Yok · III. Minimalist/Reklamsız
Tasarım · IV. Sabit Teknoloji Yığını (NON-NEGOTIABLE) · V. Sürüm Doğruluğu
(Expo SDK 57 — kod yazmadan önce https://docs.expo.dev/versions/v57.0.0/
teyit edilir).

## Varsayımlar

- Journal senkronsuz, yalnızca cihazda kalır (yeni cihazda boş başlar).
- Barkod kaynağı Open Beauty Facts; bulunamazsa manuel giriş.
- Bildirimler tamamen cihaz-yerel.
- v1'de gelir modeli yok; uygulama tamamen ücretsiz.
- v1 hedefi iOS + Android birlikte.
- Loop adımları her zaman bir Vanity ürününe bağlı (serbest metin adım yok).
- Kategori listesi sabit/önceden tanımlı.
- Dağıtım: EAS Build + Convex dev/prod ortam ayrımı en baştan kurulu.
- Auth v1'de yalnızca e-posta/şifre; magic link yok.
- "Tamamlandı" tanımı: kritik akışlarda (auth, ürün ekleme, rutin
  tamamlama) temel otomatik test + geri kalanında manuel QA.
- Bütçe/kota sınırı yok; Convex ve Open Beauty Facts free tier ile başlanır.
- Ürün envanterinde yalnızca tarih bazlı takip (miktar/yüzde takibi yok).
- Süresi dolmuş ürünler otomatik arşivlenmez/silinmez.
- Google/Apple hesap bağlama yalnızca Ayarlar'da, isteğe bağlı.
- (Doğrulanmadı, düşük risk) Uygulama dili birincil olarak Türkçe.
- Nihai teknik doküman formatı GitHub Spec-Kit şemasına uyacak — **artık
  gerçek CLI ile kuruldu**, bu varsayım kapandı.

## Çözülen Açık Riskler (araştırma ile kapatıldı)

- ~~Journal için şifreleme yaklaşımı seçilmedi~~ → `expo-crypto` native
  AES-GCM ile çözüldü (research.md §3).
- ~~Expo SDK 57 API farkları belirsiz~~ → kamera/bildirim/kripto API'leri
  resmi dokümandan teyit edildi (research.md §1-3).
- ~~Convex Auth'un native Google/Apple desteği belirsiz~~ → Convex Auth,
  React Native + Google/Apple OAuth'u resmi olarak destekliyor
  (research.md §4).
- ~~Open Beauty Facts endpoint formatı belirsiz~~ →
  `/api/v2/product/{barcode}.json` doğrulandı (research.md §5).
- ~~Spec-Kit/Graphify repoda kurulu değildi~~ → Spec-Kit gerçek CLI ile
  kuruldu; **Graphify'ın ne olduğu hâlâ netleşmedi** (bkz. aşağıdaki
  kalan riskler).

## Kalan Açık Riskler / Bilinmeyenler

- **Graphify**: Kimliği/amacı hâlâ netleşmedi — repoda hiçbir iz yok,
  kullanıcıdan ayrıca açıklama bekleniyor.
- **Convex Auth hesap bağlama detayı**: Mevcut e-posta/şifre hesabına
  sonradan Google/Apple bağlama akışının tam API'si implementasyon
  başında Convex Auth dokümantasyonundan teyit edilmeli (research.md §4
  "Open follow-up").
- **Open Beauty Facts kapsamı**: Türkiye/bölgesel ürün verisi eksik
  olabilir; sık manuel-giriş düşüşü "aha" anını zayıflatabilir.
- **Sabit kategori listesinin tam Türkçe UI etiketleri**: enum değerleri
  sabit, ama kullanıcıya gösterilecek Türkçe karşılıkları implementasyon
  sırasında netleştirilecek.
- **Dil/i18n**: Türkçe dışında dil desteği gerekip gerekmediği teyit
  edilmedi.
- **Hedef minimum iOS/Android sürümleri**: Expo SDK 57'nin desteklediği
  minimum sürümler implementasyon başında `expo-doctor` ile teyit
  edilecek (düşük risk, plan.md'de not edildi).

## Kurulu Araçlar / Repo Durumu

- Git deposu başlatıldı (`git init`); henüz commit atılmadı.
- GitHub Spec-Kit CLI (`uv`/`uvx` üzerinden) kuruldu; `.claude/skills/speckit-*`
  ve `.specify/` dizini projeye entegre edildi.
- `.gitignore`'a `.claude/settings.local.json` eklendi (kimlik bilgisi
  sızıntısını önlemek için).

## Spec-Kit Doküman Haritası

```
.specify/memory/constitution.md          # Proje ilkeleri (v1.0.0)
specs/001-skinloop-mvp/
├── spec.md                              # Kullanıcı hikayeleri, gereksinimler, başarı kriterleri
├── research.md                          # Phase 0 — teknik kararlar + kaynaklar
├── data-model.md                        # Phase 1 — varlıklar/alanlar/kurallar
├── contracts/convex-functions.md        # Phase 1 — istemcinin bağımlı olduğu Convex arayüzü
├── quickstart.md                        # Phase 1 — uçtan uca doğrulama senaryoları
├── checklists/requirements.md           # Spec kalite kontrol listesi (tüm maddeler geçti)
└── tasks.md                             # Phase 2 — 36 görev, US1-US4 + Setup/Foundational/Polish
```

## Sıradaki Adım

`specs/001-skinloop-mvp/tasks.md` içindeki **T001**'den başlayarak
implementasyona geçilebilir. Önerilen sıralama: Setup (T001-T005) →
Foundational (T006-T011) → US1 (Auth, MVP) → US2 (Vanity) → US3 (Loops) →
US4 (Journal) → Polish.
