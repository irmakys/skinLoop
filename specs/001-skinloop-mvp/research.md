# Phase 0 Research: skinLoop v1 MVP

Constitution Principle V ("Sürüm Doğruluğu") gereği, aşağıdaki kararlar
Expo SDK 57'nin güncel resmi dokümantasyonu (https://docs.expo.dev/versions/v57.0.0/)
ve ilgili sağlayıcı dokümantasyonları taranarak doğrulanmıştır; hafızaya
güvenilmemiştir.

## 1. Kamera ve Barkod Tarama

- **Decision**: `expo-camera` paketinin `CameraView` bileşeni + `useCameraPermissions`
  hook'u + `onBarcodeScanned` callback'i kullanılacak.
- **Rationale**: SDK 57'de barkod tarama artık ayrı bir `expo-barcode-scanner`
  paketi yerine `expo-camera` içine entegre edilmiş durumda
  (`barcodeScannerSettings`, `onBarcodeScanned`, `scanFromURLAsync`).
  İzin yönetimi `useCameraPermissions()` ile standartlaştırılmış.
  iOS için `Info.plist`'te `NSCameraUsageDescription` gerekiyor; `app.json`
  içinde `cameraPermission` alanı üzerinden yapılandırılabiliyor.
- **Alternatives considered**: Eski `expo-barcode-scanner` paketi —
  SDK 57'de bu paket kullanılmamalı; `expo-camera`'ya taşınmış.
- **Source**: https://docs.expo.dev/versions/v57.0.0/sdk/camera/

## 2. Cihaz-Yerel Bildirimler

- **Decision**: `expo-notifications` paketi; `Notifications.scheduleNotificationAsync`
  ile `SchedulableTriggerInputTypes.DATE` (PAO/SKT son tarih hatırlatıcısı) ve
  `DAILY`/`WEEKLY` trigger tipleri (rutin hatırlatıcıları) kullanılacak.
- **Rationale**: Tamamen cihaz-yerel, sunucu bağımlılığı yok (Assumptions ile
  uyumlu). `getPermissionsAsync`/`requestPermissionsAsync` ile izin akışı
  standart. Uygulama ön plandayken bildirim göstermek için
  `setNotificationHandler` tanımlanmalı.
- **Alternatives considered**: Sunucu taraflı push (Convex scheduled
  functions + Expo Push Service) — kullanıcı tarafından v1 için reddedildi
  (bkz. ilk soru turu, "Bildirimler" kararı).
- **Source**: https://docs.expo.dev/versions/v57.0.0/sdk/notifications/

## 3. Journal — Yerel Şifreli Fotoğraf Depolama

- **Decision**: Fotoğraflar `expo-file-system`'in SDK 57 `File` API'siyle
  uygulamanın özel (sandboxed) belge dizinine yazılır; yazmadan önce
  `expo-crypto`'nun native `aesEncryptAsync`/`aesDecryptAsync` (AES-GCM)
  fonksiyonlarıyla şifrelenir. Şifreleme anahtarı `expo-crypto.getRandomBytesAsync`
  ile üretilip `expo-secure-store`'da (Android Keystore / iOS Keychain
  destekli) saklanır.
- **Rationale**: SDK 57 itibarıyla `expo-crypto` AES-GCM şifreleme/deşifrelemeyi
  (128/192/256 bit anahtar, AAD desteği) birinci taraf olarak sağladığından,
  üçüncü taraf bir şifreleme kütüphanesi (ör. react-native-aes-crypto)
  gerekmiyor — bu, "yerel şifreli depolama yaklaşımı henüz seçilmedi" açık
  riskini kapatır. `expo-secure-store` yalnızca küçük anahtar/değerler için
  uygundur (iOS'te ~2048 bayt sınırı olabilir), bu yüzden fotoğraf
  dosyalarının kendisi değil yalnızca AES anahtarı orada tutulur.
- **Alternatives considered**: Üçüncü taraf `react-native-aes-crypto` veya
  `rn-encryption` (yeni mimari/Turbo Modules) — expo-crypto'nun birinci
  taraf desteği yeterli olduğundan gereksiz ek bağımlılık.
- **Source**: https://docs.expo.dev/versions/v57.0.0/sdk/crypto/,
  https://docs.expo.dev/versions/v57.0.0/sdk/securestore/, npm expo-crypto.

## 4. Kimlik Doğrulama ve Hesap Bağlama

- **Decision**: Convex Auth; e-posta/şifre sağlayıcı + Google/Apple OAuth
  sağlayıcıları. Kimlik doğrulama token'ları React Native'de
  `expo-secure-store` sarmalayıcısıyla saklanır (Convex Auth'un RN için
  resmi önerisi).
- **Rationale**: Convex Auth, React Native mobil uygulamaları ve
  Google/Apple dahil OAuth sağlayıcılarını resmi olarak destekliyor.
- **Open follow-up (implementasyon sırasında doğrulanacak)**: Mevcut bir
  e-posta/şifre hesabına *sonradan* Google/Apple bağlama (account linking)
  akışının tam API'si (Convex Auth'un `signIn` fonksiyonunun linking
  modunda çağrılması) implementasyon başında Convex Auth dokümantasyonundan
  teyit edilmeli; bu bir mimari risk değil, doğrulanması gereken bir
  entegrasyon detayıdır.
- **Alternatives considered**: Better Auth + Convex — proje kapsamında
  zaten Convex Auth kararlaştırıldığından değerlendirilmedi.
- **Source**: https://labs.convex.dev/auth, https://docs.convex.dev/auth/convex-auth

## 5. Barkod Veri Kaynağı

- **Decision**: Open Beauty Facts REST API v2 —
  `GET https://world.openbeautyfacts.org/api/v2/product/{barcode}.json`.
  Ücretsiz, kimlik doğrulama gerektirmez. Ürün bulunamazsa (404 / `status: 0`)
  manuel giriş akışına düşülür (spec FR-006).
- **Rationale**: Kozmetiğe özel açık veritabanı; API anahtarı/kota yönetimi
  gerekmiyor, v1 bütçe kısıtı olmaması kararıyla uyumlu.
- **Alternatives considered**: Ücretli barkod API'leri — kullanıcı
  tarafından reddedildi (bkz. ilk soru turu, "Barkod API" kararı).
- **Source**: https://world.openbeautyfacts.org/data

## 6. Hata İzleme

- **Decision**: `@sentry/react-native`, Expo config plugin ile entegre
  edilecek (`npx expo install @sentry/react-native` + `sentry-expo`
  yapılandırması EAS Build ile uyumlu).
- **Rationale**: Kullanıcı tarafından onaylanan v1 kapsamı; Expo/EAS Build
  ile resmi olarak desteklenen, düşük kurulum maliyetli standart çözüm.
- **Alternatives considered**: Yalnızca Convex fonksiyon logları — client
  crash'leri yakalamadığından yetersiz bulundu.

## 7. Test Yaklaşımı

- **Decision**: `jest-expo` preset'i ile birim testleri, React Native
  Testing Library ile kritik akış (auth, ürün ekleme, rutin adımı
  tamamlama) entegrasyon testleri; kalan akışlar manuel QA.
- **Rationale**: Constitution'daki "v1 tamamlandı tanımı" ile birebir
  uyumlu; kapsamlı e2e (Detox/Maestro) v1 için kullanıcı tarafından
  reddedildi.
