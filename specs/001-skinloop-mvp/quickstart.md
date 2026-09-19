# Quickstart: skinLoop v1 MVP Doğrulama

## Ön Koşullar

- Node.js + npm kurulu; proje bağımlılıkları `npm install` ile yüklü.
- Convex CLI erişimi: `npx convex dev` çalıştırılabilir bir Convex hesabı.
- Fiziksel cihaz veya simülatör/emülatör (kamera/barkod testleri için
  fiziksel cihaz önerilir — simülatörde kamera çalışmaz).

## Kurulum

```bash
npm install
npx convex dev          # convex/ şemasını dev deployment'a push eder
npx expo start          # Metro bundler'ı başlatır
```

`npx expo start` çıktısındaki seçeneklerden bir development build, Android
emulator veya iOS simulator açın (Expo Go, `expo-camera`'nın bazı native
API'leri için yetersiz kalabilir — development build önerilir).

## Uçtan Uca Doğrulama Senaryoları

Her senaryo, `spec.md`'deki ilgili User Story'nin Acceptance Scenarios'una
karşılık gelir.

### 1. Hesap oluşturma (US1)
1. Uygulamayı aç → Kayıt Ol.
2. E-posta + şifre gir → gönder.
3. **Beklenen**: Ana ekrana yönlendirilir, oturum kalıcıdır (uygulamayı
   kapatıp aç, tekrar giriş istenmemeli).

### 2. Barkod ile ürün ekleme (US2)
1. Vanity sekmesi → "Ürün Ekle" → barkod tara.
2. Bilinen bir kozmetik barkodu tara (Open Beauty Facts'te kayıtlı).
3. **Beklenen**: Marka/isim/kategori otomatik dolar; açılış tarihini
   onayla → ürün listede PAO/SKT ile görünür.
4. Bilinmeyen bir barkod tara → **Beklenen**: manuel giriş formuna
   yönlendirilir.

### 3. Rutin oluşturma ve tamamlama (US3)
1. Loops sekmesi → yeni "Sabah" rutini oluştur → US2'de eklenen ürünü bir
   adıma bağla.
2. Ana ekranda günün rutinini aç → adımı "tamamlandı" işaretle.
3. **Beklenen**: Adım durumu güncellenir; bildirim izni verilmişse bir
   sonraki hatırlatıcının zamanlandığı (cihaz bildirim ayarlarından)
   doğrulanabilir.

### 4. Journal — yerel şifreli depolama (US4)
1. Journal sekmesi → fotoğraf ekle.
2. **Beklenen**: Fotoğraf yerel galeri listesinde görünür.
3. Cihazın ağ trafiğini bir proxy (ör. mitmproxy) ile izleyerek fotoğraf
   ekleme anında hiçbir giden isteğin fotoğraf verisi taşımadığını
   doğrula (SC-005).
4. Farklı bir cihazdan aynı hesaba giriş yap → **Beklenen**: Journal boş
   görünür (senkronize değildir).

## Kritik Akış Testleri (otomatik)

```bash
npm test               # jest-expo ile unit + tests/integration altındaki
                        # auth / ürün ekleme / rutin tamamlama testleri
```

## Notlar

- Barkod/kamera testleri fiziksel cihaz gerektirir.
- Journal şifreleme doğrulaması için ek olarak: cihazın dosya sistemine
  (ör. `adb shell` veya Xcode cihaz konteyneri) erişilip fotoğrafın
  düz metin/okunabilir bir görsel olarak DEĞİL, şifreli baytlar olarak
  saklandığı manuel kontrol edilebilir.
