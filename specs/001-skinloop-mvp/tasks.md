---

description: "Task list template for feature implementation"
---

# Tasks: skinLoop v1 MVP

**Input**: Design documents from `/specs/001-skinloop-mvp/`

**Prerequisites**: plan.md, spec.md, research.md, data-model.md, contracts/, quickstart.md

**Tests**: Constitution'daki "v1 tamamlandı tanımı" gereği yalnızca kritik
akışlarda (auth, ürün ekleme, rutin adımı tamamlama) entegrasyon testi
istenmiştir; bu üç görev grubunda test task'ları dahil edilmiştir. Journal
(US4) ve Polish aşaması manuel QA ile doğrulanır (tasks.md T033).

**Organization**: Görevler spec.md'deki 4 kullanıcı hikayesine göre
gruplanmıştır (P1→P4).

## Format: `[ID] [P?] [Story] Description`

- **[P]**: Paralel çalıştırılabilir (farklı dosyalar, bağımlılık yok)
- **[Story]**: Hangi kullanıcı hikayesine ait (US1-US4)
- Dosya yolları açıkça belirtilmiştir

## Path Conventions

Bu proje tek bir Expo Router mobil istemci + aynı repodaki Convex backend
kullanır (plan.md "Structure Decision"): `convex/`, `src/`, `tests/`.

---

## Phase 1: Setup (Shared Infrastructure)

**Purpose**: Proje bağımlılıkları ve dış servis kurulumu

- [x] T001 Convex projesini başlat: `npx convex dev` ile dev deployment oluştur; prod deployment için ayrı bir Convex deployment yapılandır (plan.md Constraints — dev/prod ayrımı)
- [x] T002 [P] Gerekli Expo paketlerini kur: `npx expo install expo-camera expo-notifications expo-crypto expo-secure-store` (research.md §1-3)
- [x] T003 [P] Convex + Convex Auth bağımlılıklarını kur (`convex`, Convex Auth paketi) ve `convex/` dizinini oluştur
- [x] T004 [P] `@sentry/react-native` kurulumu ve `app.json` içinde Expo config plugin yapılandırması (research.md §6)
- [x] T005 [P] Sabit kategori listesini oluştur: `src/constants/categories.ts` — değerler data-model.md ile birebir aynı: `cleanser | toner | serum | moisturizer | spf | eye-care | hair-care | body-care | other`

---

## Phase 2: Foundational (Blocking Prerequisites)

**Purpose**: Tüm kullanıcı hikayelerinin bağımlı olduğu ortak altyapı

**⚠️ CRITICAL**: Bu faz tamamlanmadan hiçbir US fazına başlanamaz

- [x] T006 Convex şemasını tanımla: `convex/schema.ts` — `products` (userId, name, brand?, barcode?, category enum, source: "barcode"|"manual", openedAt: number, paoMonths: number, expiresAt: number, createdAt), `loops` (userId, type: "morning"|"evening"|"weekly", name, stepOrder: Id<"loopSteps">[], createdAt), `loopSteps` (loopId, productId, order, lastCompletedAt: number|null, missingProduct: boolean) — data-model.md'deki tüm alan/kural tanımlarıyla birebir
- [x] T007 [P] `src/lib/convexClient.ts` oluştur ve `src/app/_layout.tsx` içine `ConvexProvider`/Convex Auth provider'ı ekle
- [x] T008 [P] `src/lib/journalStorage.ts` iskeletini oluştur: `expo-file-system` (yeni `File` API) ile özel dizine yazma + `expo-crypto` `aesEncryptAsync`/`aesDecryptAsync` (AES-GCM) ile şifreleme + `expo-secure-store`'da anahtar saklama (research.md §3)
- [x] T009 [P] `src/lib/notifications.ts` oluştur: `expo-notifications` izin isteme (`getPermissionsAsync`/`requestPermissionsAsync`) ve `setNotificationHandler` kurulumu (research.md §2)
- [x] T010 [P] `src/lib/openBeautyFacts.ts` oluştur: `fetchProductByBarcode(barcode: string)` — `GET https://world.openbeautyfacts.org/api/v2/product/{barcode}.json`, bulunamazsa `null` döner (contracts/convex-functions.md)
- [x] T011 Expo Router temel navigasyon iskeletini kur: `src/app/(auth)/` ve `src/app/(tabs)/` route grupları + `src/app/_layout.tsx` yönlendirme mantığı (oturum yoksa `(auth)`'a yönlendirme)

**Checkpoint**: Temel altyapı hazır — US fazlarına paralel başlanabilir

---

## Phase 3: User Story 1 - Hesap Oluşturma ve Giriş (Priority: P1) 🎯 MVP

**Goal**: Kullanıcı e-posta/şifre ile hesap oluşturabilir, giriş yapabilir ve isteğe bağlı olarak Google/Apple hesabını bağlayabilir (FR-001 – FR-004).

**Independent Test**: Kayıt ol → uygulamayı kapat/aç → oturumun korunduğunu doğrula (spec.md US1 Acceptance Scenarios).

### Tests for User Story 1

- [ ] T012 [P] [US1] Kritik akış entegrasyon testi: kayıt → giriş → oturum kalıcılığı — `tests/integration/auth.test.ts`

### Implementation for User Story 1

- [ ] T013 [US1] `convex/auth.ts`: e-posta/şifre sağlayıcısı (TAMAMLANDI) + Google/Apple OAuth sağlayıcı yapılandırması (research.md §4, henüz eklenmedi — T017 ile birlikte yapılacak) — depends on T003, T006
- [x] T014 [P] [US1] `src/app/(auth)/sign-up.tsx` — kayıt ekranı (FR-001)
- [x] T015 [P] [US1] `src/app/(auth)/sign-in.tsx` — giriş ekranı (FR-002); misafir modu seçeneği YOK (FR-003)
- [x] T016 [US1] `src/features/auth/useSession.ts` — oturum durumu hook'u (Convex Auth React entegrasyonu)
- [ ] T017 [US1] `src/app/(tabs)/settings.tsx` içinde Google/Apple hesap bağlama bölümü — yalnızca Ayarlar'da, isteğe bağlı (FR-004)

**Checkpoint**: US1 bağımsız olarak çalışır ve test edilebilir durumda

---

## Phase 4: User Story 2 - Ürün Envanteri ve Son Kullanma Takibi (Priority: P2)

**Goal**: Kullanıcı barkod tarayarak veya manuel olarak ürün ekler; açılış tarihi + PAO/SKT takip edilir, süresi dolan ürünler rozetle işaretlenir (FR-005 – FR-009).

**Independent Test**: Bir ürünü barkodla/manuel ekle → envanter listesinde PAO/SKT ile göründüğünü ve süre dolunca rozet çıktığını doğrula (spec.md US2 Acceptance Scenarios).

### Tests for User Story 2

- [ ] T018 [P] [US2] Kritik akış entegrasyon testi: barkod bulunamayan bir ürün için manuel ekleme akışı — `tests/integration/add-product.test.ts`

### Implementation for User Story 2

- [x] T019 [US2] `convex/products.ts`: `listProducts` (expiresAt'e göre sıralı), `addProduct` (expiresAt = openedAt + paoMonths sunucuda hesaplanır, FR-008), `deleteProduct` — depends on T006
- [x] T020 [P] [US2] `src/features/vanity/BarcodeScanner.tsx` — `CameraView` + `useCameraPermissions` + `onBarcodeScanned` (research.md §1), tarama sonucu `openBeautyFacts.ts`'e (T010) iletilir
- [x] T021 [US2] `src/features/vanity/AddProductForm.tsx` — barkod bulunamazsa/tercih edilirse manuel giriş (isim, marka, kategori) (FR-006), kategori seçimi `src/constants/categories.ts`'den (FR-007)
- [x] T022 [P] [US2] `src/features/vanity/ProductList.tsx` — `expiresAt < now` olan ürünler için "süresi doldu" rozeti, ürün silinmez (FR-009)
- [x] T023 [US2] `src/app/(tabs)/vanity/index.tsx` ve `src/app/(tabs)/vanity/add.tsx` route'ları — T020-T022'yi bağlar

**Checkpoint**: US1 ve US2 birlikte bağımsız çalışır

---

## Phase 5: User Story 3 - Rutin Döngüleri Oluşturma ve Tamamlama (Priority: P3)

**Goal**: Kullanıcı sabah/akşam/haftalık bir Loop oluşturur, adımları ürünlere bağlar, adımları tamamlar ve cihaz-yerel hatırlatıcı alır (FR-010 – FR-013, FR-017).

**Independent Test**: Envanterde ürün varken bir Loop oluştur → bir adımı tamamlandı işaretle → durumun kaydedildiğini ve hatırlatıcının zamanlandığını doğrula (spec.md US3 Acceptance Scenarios).

### Tests for User Story 3

- [ ] T024 [P] [US3] Kritik akış entegrasyon testi: Loop oluşturma → adım tamamlama → durum güncellemesi — `tests/integration/complete-loop-step.test.ts`

### Implementation for User Story 3

- [x] T025 [US3] `convex/loops.ts`: `listLoops`, `createLoop` (her adım zorunlu `productId` taşır, FR-011), `completeStep` (FR-012), `replaceStepProduct` (bağlı ürün silinince `missingProduct=true`, FR-017) — depends on T006, T019
- [x] T026 [P] [US3] `src/features/loops/CreateLoopForm.tsx` — Loop tipi seçimi (morning/evening/weekly) + adımları envanterdeki ürünlerle eşleştirme
- [x] T027 [P] [US3] `src/features/loops/LoopRunner.tsx` — günün rutinini gösterme, adım tamamlama UI'ı, "ürün eksik" durumunun gösterimi
- [x] T028 [US3] `src/lib/notifications.ts` içine Loop tipine göre DAILY/WEEKLY tekrarlayan hatırlatıcı + `Product.expiresAt`'e göre tek seferlik DATE hatırlatıcı zamanlama ekle (FR-013) — depends on T009, T019, T025
- [x] T029 [US3] `src/app/(tabs)/loops/index.tsx` route'u — T026-T027'yi bağlar

**Checkpoint**: US1, US2, US3 birlikte bağımsız çalışır

---

## Phase 6: User Story 4 - Gizlilik Odaklı İlerleme Günlüğü (Priority: P4)

**Goal**: Kullanıcı ilerleme fotoğrafı ekler; fotoğraf yalnızca cihazda şifreli saklanır, hiçbir zaman sunucuya gönderilmez, cihazlar arası senkronize edilmez (FR-014 – FR-016).

**Independent Test**: Fotoğraf ekle → yerel galeri listesinde göründüğünü ve ağ trafiğinde bu veriye ait giden istek olmadığını doğrula (spec.md US4 Acceptance Scenarios, SC-005).

### Implementation for User Story 4

- [x] T030 [P] [US4] `src/features/journal/CapturePhoto.tsx` — kamera ile fotoğraf çekme, `journalStorage.ts` (T008) ile şifreli kayıt (FR-014, FR-015)
- [x] T031 [P] [US4] `src/features/journal/JournalGallery.tsx` — yerel şifreli fotoğrafları listeleme/deşifreleyerek gösterme; hiçbir Convex sorgusu/mutation'ı çağırmaz (FR-016)
- [x] T032 [US4] `src/app/(tabs)/journal/index.tsx` route'u — T030-T031'i bağlar; kod incelemesinde bu dosyanın hiçbir ağ isteği yapmadığını doğrula (Constitution İlke I)

**Checkpoint**: Tüm kullanıcı hikayeleri (US1-US4) bağımsız çalışır durumda

---

## Phase 7: Polish & Cross-Cutting Concerns

**Purpose**: Tüm hikayeleri etkileyen son işler

- [ ] T033 [P] `quickstart.md`'deki 4 uçtan uca senaryoyu (Auth, Barkod ekleme, Rutin tamamlama, Journal ağ trafiği kontrolü) manuel QA ile doğrula
- [ ] T034 [P] EAS Build yapılandırması (`eas.json`) oluştur; Convex dev/prod deployment URL'lerinin build profilleri arasında doğru ayrıldığını doğrula
- [ ] T035 [P] React Native Paper bileşenlerinin varsayılan kontrast/erişilebilirlik ayarlarını gözden geçir (Constitution İlke III — minimalist tasarım)
- [x] T036 `npm run lint` ve `tsc --noEmit` ile tüm kod tabanını doğrula; hata varsa düzelt

### Ek Kapsam: Settings & Veri Yönetimi (orijinal spec.md'de yoktu, sonradan eklendi)

- [x] T037 `convex/users.ts`: `getCurrentUser` (profil e-postası), `exportMyData` (Vanity+Loops JSON export), `deleteMyAccount` (KVKK/GDPR — products/loops/loopSteps/authAccounts/authSessions/authRefreshTokens/users kaydını siler)
- [x] T038 `src/lib/preferences.ts` — cihaz-yerel bildirim tercihleri (`loopRemindersEnabled`, `expiryRemindersEnabled`); `CreateLoopForm.tsx` artık zamanlamadan önce bu tercihi kontrol ediyor
- [x] T039 `src/lib/journalStorage.ts`: `clearAllJournalData()` — hesap silme akışında cihazdaki Journal dizinini tamamen temizler
- [x] T040 `src/app/(tabs)/settings.tsx` — Profil, Bildirim Tercihleri, Veri Dışa Aktarma (`expo-sharing` ile JSON paylaşımı), Tehlikeli Bölge (onay diyaloğuyla hesap silme) bölümleri

---

## Dependencies & Execution Order

### Phase Dependencies

- **Setup (Phase 1)**: Bağımsız, hemen başlanabilir
- **Foundational (Phase 2)**: Setup'a bağlı — tüm US fazlarını BLOKLAR
- **User Stories (Phase 3-6)**: Foundational tamamlanmadan başlanamaz; öncelik sırasına göre (P1→P2→P3→P4) veya paralel ekiple eş zamanlı ilerleyebilir
- **Polish (Phase 7)**: İstenen tüm US fazları tamamlandıktan sonra

### User Story Dependencies

- **US1 (P1)**: Foundational sonrası başlar, başka hikayeye bağımlı değil
- **US2 (P2)**: Foundational sonrası başlar; kullanıcı için pratikte US1 sonrası anlamlıdır (oturum gerektirir) ama kod olarak bağımsız test edilebilir
- **US3 (P3)**: US2'nin `products` verisine (T019) bağımlıdır — Loop adımları ürüne bağlanmak zorunda (FR-011)
- **US4 (P4)**: Diğer hikayelerden bağımsız; yalnızca Foundational'daki T008'e bağlıdır

### Parallel Opportunities

- Phase 1'deki [P] görevler birlikte çalıştırılabilir (T002-T005)
- Phase 2'deki [P] görevler birlikte çalıştırılabilir (T007-T010)
- Foundational tamamlandıktan sonra US1 ve US4 tamamen paralel ilerleyebilir; US2 US1'den bağımsız kodlanabilir ama gerçek kullanım için oturum gerektirir; US3, US2'nin `convex/products.ts`'ine (T019) bağımlıdır

---

## Parallel Example: User Story 1

```bash
# US1 testini ve ekranlarını paralel başlat:
Task: "Kritik akış entegrasyon testi: kayıt → giriş → oturum kalıcılığı - tests/integration/auth.test.ts"
Task: "src/app/(auth)/sign-up.tsx kayıt ekranı"
Task: "src/app/(auth)/sign-in.tsx giriş ekranı"
```

---

## Implementation Strategy

### MVP First (User Story 1 Only)

1. Phase 1: Setup'ı tamamla
2. Phase 2: Foundational'ı tamamla (KRİTİK — tüm hikayeleri bloklar)
3. Phase 3: User Story 1'i tamamla
4. **DUR ve DOĞRULA**: US1'i bağımsız test et (kayıt/giriş/oturum kalıcılığı)
5. Hazırsa demo/dahili dağıtım yap

### Incremental Delivery

1. Setup + Foundational → temel hazır
2. US1 ekle → bağımsız test et → demo (gerçek MVP: hesap sistemi)
3. US2 ekle → bağımsız test et → demo (envanter + PAO takibi canlı)
4. US3 ekle → bağımsız test et → demo (rutinler + hatırlatıcılar canlı)
5. US4 ekle → bağımsız test et → demo (Journal ile v1 tamamlanır)
6. Polish fazıyla kapat

---

## Ek Kapsam: Planlayıcı / Rutinler Ayrımı (orijinal spec.md'de yoktu, wireframe'e göre sonradan eklendi)

- [x] T041 `convex/schema.ts`: `loops.type`'a `monthly` eklendi, `loopSteps.isOptional` (Tembel Mod filtresi) eklendi, yeni `loopStepCompletions` tablosu (günlük bazlı tamamlama geçmişi, `by_step_and_day` + `by_user_and_day` index)
- [x] T042 `convex/loops.ts`: `createLoop` artık `isOptional` kabul ediyor; `completeStep` kaldırıldı, yerine `toggleStepCompletion` (günlük bazlı) ve `listCompletionsInRange` (haftalık skor) eklendi; `deleteLoop` eklendi
- [x] T043 `src/lib/dateKeys.ts` — gün anahtarı/hafta hesaplama yardımcıları; `src/lib/notifications.ts`'e `scheduleMonthlyLoopReminder` eklendi
- [x] T044 `src/features/planner/DayStrip.tsx` + `DailyPlanner.tsx` — yeni **Planlayıcı** sekmesi: haftalık gün şeridi, Sabah/Akşam/Diğer rutin bölümleri, günlük bazlı checkbox (geçmiş günler korunur), Tembel Mod toggle'ı, Haftalık Uyum Skoru kartı
- [x] T045 `src/features/loops/LoopRunner.tsx` sadeleştirildi — artık yalnızca **Rutinler** (şablon yönetimi: oluşturma/silme, adım sırası, fotoğraf/albüm bağlantısı); günlük tamamlama mantığı Planlayıcı'ya taşındı. `CreateLoopForm.tsx`'e "Aylık" sıklık seçeneği ve adım bazlı "Opsiyonel" işaretleme eklendi
- [x] T046 `src/app/(tabs)/_layout.tsx` — 5 sekmeye çıkarıldı: Planlayıcı, Rutinler, Vanity, Journal, Ayarlar; varsayılan giriş sonrası yönlendirme artık Planlayıcı

## Notes

- [P] görevler farklı dosyalarda ve bağımsızdır
- [Story] etiketi görevi ilgili kullanıcı hikayesine bağlar (izlenebilirlik)
- Her görev, ek bağlam gerekmeden tamamlanabilecek kadar somut dosya yolu içerir
- Test görevleri yalnızca constitution'da belirtilen kritik akışlar (auth, ürün ekleme, rutin tamamlama) için var; US4 ve Polize manuel QA ile doğrulanır
- Her mantıksal görev grubundan sonra commit atılması önerilir
