# Implementation Plan: skinLoop v1 MVP

**Branch**: `001-skinloop-mvp` | **Date**: 2026-09-18 | **Spec**: [spec.md](./spec.md)

**Input**: Feature specification from `/specs/001-skinloop-mvp/spec.md`

**Note**: This template is filled in by the `/speckit-plan` command; its definition describes the execution workflow.

## Summary

Kullanıcının bakım ürünlerini (barkod/manuel) envanterine ekleyip PAO/SKT
takibi yaptığı, bu ürünleri sabah/akşam/haftalık rutin adımlarına bağlayıp
tamamladığı ve isteğe bağlı olarak yalnızca cihazda şifreli tutulan ilerleme
fotoğrafları ekleyebildiği bir Expo (React Native) mobil uygulaması. Backend
ve auth Convex üzerinde; Journal verisi hiçbir zaman Convex'e ulaşmaz.
Teknik yaklaşım Phase 0 araştırmasıyla (research.md) doğrulanmıştır.

## Technical Context

**Language/Version**: TypeScript 6.0 (proje `tsconfig.json`), React 19.2,
React Native 0.86 — Expo SDK 57 (bkz. AGENTS.md: SDK 57 önemli ölçüde
değişti, API'ler versiyonlu dokümandan teyit edildi).

**Primary Dependencies**: Expo Router, React Native Paper, `expo-camera`
(CameraView + barkod tarama), `expo-notifications` (cihaz-yerel hatırlatma),
`expo-file-system` (yeni `File` API) + `expo-crypto` (AES-GCM) +
`expo-secure-store` (Journal şifreli depolama), Convex + Convex Auth
(backend/auth/veri), `@sentry/react-native` (hata izleme).

**Storage**: Convex (User/Product/Category/Loop/LoopStep — reaktif sorgular)
+ cihaz-yerel şifreli dosya deposu (Journal fotoğrafları, yalnızca cihazda,
Convex şemasına dahil değil).

**Testing**: `jest-expo` + React Native Testing Library — kritik akışlarda
(auth, ürün ekleme, rutin adımı tamamlama) entegrasyon testi; kalanı manuel
QA (bkz. constitution "v1 tamamlandı tanımı").

**Target Platform**: iOS ve Android (Expo SDK 57'nin desteklediği minimum
sürümler — implementasyon başında `npx expo install` ve `expo-doctor`
çıktısıyla teyit edilecek; NEEDS CLARIFICATION değil, düşük riskli bir
kurulum-zamanı doğrulaması).

**Project Type**: mobile-app (Expo Router istemci) + Convex backend (aynı
repoda `convex/` dizini, ayrı bir sunucu projesi gerekmiyor).

**Performance Goals**: Standart mobil uygulama beklentileri — soğuk başlangıç
<3s, ekran geçişleri/dokunma tepkisi <100ms algılanan gecikme (makul
varsayım; spec'te SC-002/SC-003 ile hizalı).

**Constraints**: Journal tamamen çevrimdışı çalışabilmeli (yerel depoya
bağımlı, ağ gerektirmez). Vanity/Loops verisi Convex'in reaktif
senkronuna bağlıdır; kısa süreli çevrimdışı kullanım Convex'in yerleşik
önbelleğiyle tolere edilir, uzun süreli tam çevrimdışı destek v1 kapsamı
dışındadır (Assumptions).

**Scale/Scope**: Kişisel/tekil kullanıcı ölçeğinde (single-tenant); v1'de
belirli bir eşzamanlı kullanıcı hedefi yok. Kapsam: ~4 ana akış (Auth,
Vanity, Loops, Journal) + Ayarlar; specs/001-skinloop-mvp/spec.md'deki 4
kullanıcı hikayesi.

## Constitution Check

*GATE: Must pass before Phase 0 research. Re-check after Phase 1 design.*

| İlke | Durum | Not |
|------|-------|-----|
| I. Gizlilik-Öncelikli Journal | PASS | Journal, Convex şemasının tamamen dışında; yalnızca cihaz-yerel şifreli dosya deposu (research.md §3). Hiçbir ağ isteği Journal verisini taşımaz. |
| II. Tıbbi İddia Yok | PASS | Spec'te (FR-018) ve kullanıcı hikayelerinde teşhis/tedavi önerisi yok. |
| III. Minimalist/Reklamsız Tasarım | PASS | Yalnızca React Native Paper bileşenleri; reklam/gamification öğesi planlanmadı. |
| IV. Sabit Teknoloji Yığını | PASS | Expo+Paper (istemci) + Convex (backend) aynen kullanılıyor; üçüncü taraf ekler (expo-crypto, Sentry) yığını değiştirmiyor, tamamlıyor. |
| V. Sürüm Doğruluğu (SDK 57) | PASS | Phase 0'da kamera/bildirim/kripto API'leri resmi SDK 57 dokümanından teyit edildi (research.md §1-3). |

Gate ihlali yok; Complexity Tracking bölümü gerekmiyor.

**Phase 1 sonrası yeniden değerlendirme**: data-model.md ve contracts/
tasarımı yukarıdaki 5 ilkeyle çelişmiyor — Journal hâlâ Convex şemasının
tamamen dışında (I), yeni entegrasyonlar (expo-crypto, Sentry) sabit
yığını değiştirmiyor (IV). Gate hâlâ PASS.

## Project Structure

### Documentation (this feature)

```text
specs/[###-feature]/
├── plan.md              # This file (/speckit-plan command output)
├── research.md          # Phase 0 output (/speckit-plan command)
├── data-model.md        # Phase 1 output (/speckit-plan command)
├── quickstart.md        # Phase 1 output (/speckit-plan command)
├── contracts/           # Phase 1 output (/speckit-plan command)
└── tasks.md             # Phase 2 output (/speckit-tasks command - NOT created by /speckit-plan)
```

### Source Code (repository root)

```text
convex/
├── schema.ts        # Product, Category, Loop, LoopStep tabloları (User: Convex Auth yönetir)
├── auth.ts          # Convex Auth yapılandırması (e-posta/şifre + Google/Apple)
├── products.ts      # Vanity query/mutation'ları (ekleme, PAO hesap, listeleme)
├── loops.ts         # Loop/LoopStep query/mutation'ları (oluşturma, adım tamamlama)
└── lib/             # paylaşılan sunucu yardımcıları (PAO hesaplama vb.)

src/
├── app/                    # Expo Router dosya tabanlı route'lar
│   ├── (auth)/              # kayıt, giriş, hesap bağlama ekranları
│   ├── (tabs)/               # Vanity, Loops, Journal, Ayarlar sekmeleri
│   └── _layout.tsx
├── components/               # paylaşılan UI (React Native Paper tabanlı)
├── features/
│   ├── vanity/                # ürün listesi/detay/ekleme bileşen+hook'ları
│   ├── loops/                 # rutin oluşturma/tamamlama bileşen+hook'ları
│   ├── journal/                # yerel foto çekme/galeri + şifreleme entegrasyonu
│   └── auth/                    # kayıt/giriş/hesap bağlama UI
├── lib/
│   ├── convexClient.ts
│   ├── notifications.ts         # expo-notifications zamanlama sarmalayıcısı
│   ├── openBeautyFacts.ts       # barkod lookup client + manuel giriş fallback
│   └── journalStorage.ts        # expo-file-system + expo-crypto + expo-secure-store
└── constants/
    └── categories.ts             # sabit kategori listesi

tests/
├── unit/
└── integration/                  # kritik akışlar: auth, ürün ekleme, rutin tamamlama
```

**Structure Decision**: Tek repo içinde Expo Router mobil istemci (`src/`)
+ Convex backend (`convex/`, repo kökünde — Convex CLI'nin standart
konumu). Ayrı bir `backend/`/`frontend/` bölünmesi gerekmiyor çünkü Convex
fonksiyonları doğrudan `convex/` dizininden deploy edilir ve istemci
`convex/react` ile reaktif olarak bağlanır. Journal, kasıtlı olarak Convex
şemasının tamamen dışında tutulmuştur (Constitution I).

## Complexity Tracking

> **Fill ONLY if Constitution Check has violations that must be justified**

| Violation | Why Needed | Simpler Alternative Rejected Because |
|-----------|------------|-------------------------------------|
| [e.g., 4th project] | [current need] | [why 3 projects insufficient] |
| [e.g., Repository pattern] | [specific problem] | [why direct DB access insufficient] |
