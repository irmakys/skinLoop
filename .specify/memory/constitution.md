<!--
Sync Impact Report
- Version change: (none) → 1.0.0
- Modified principles: n/a (initial ratification)
- Added sections: Core Principles (I–V), Ek Kısıtlamalar, Geliştirme İş Akışı, Governance
- Removed sections: none
- Follow-up TODOs: none
-->

# skinLoop Constitution

## Core Principles

### I. Gizlilik-Öncelikli Journal
Journal (cilt/saç ilerleme fotoğrafları) hiçbir koşulda buluta veya herhangi bir
sunucuya yüklenmez; yalnızca cihazın yerel, şifreli/güvenli deposunda saklanır.
Cihazlar arası senkronizasyon YOKTUR — kullanıcı yeni bir cihaza geçtiğinde Journal
boş başlar. Bu, uygulamanın gizlilik odaklı konumlandırmasının temelidir ve
implementasyonda hiçbir ağ çağrısı Journal fotoğraf verisini taşıyamaz.

### II. Tıbbi İddia Yok
Uygulama tıbbi teşhis, tedavi önerisi veya doğrulanmamış bakım iddiası içermez.
Tüm metinler ve özellikler yalnızca takip/hatırlatma/organizasyon işlevine
hizmet eder; "bu ürün cildinizi iyileştirir" türü ifadeler veya AI destekli
teşhis özellikleri kapsam dışıdır.

### III. Minimalist ve Reklamsız Tasarım
Uygulama reklam, influencer/pazarlama içeriği veya dikkat dağıtıcı gamification
öğeleri barındırmaz. Her yeni ekran/özellik "sade ve net mi" sorusuyla
değerlendirilir; React Native Paper'ın minimalist bileşen dili korunur.

### IV. Sabit Teknoloji Yığını (NON-NEGOTIABLE)
İstemci: React Native (Expo) + React Native Paper. Backend/Auth/Veritabanı:
Convex. Bu araçlar proje başlangıcında kararlaştırılmış ve pazarlığa kapalıdır;
değiştirilmeleri ancak açık kullanıcı onayıyla ve bu doküma
mn güncellenmesiyle mümkündür.

### V. Sürüm Doğruluğu (Expo SDK 57)
Expo yakın zamanda önemli ölçüde değişmiştir. Kamera, barkod tarama, bildirim
ve güvenli depolama gibi native API'lerle ilgili herhangi bir kod yazılmadan
önce https://docs.expo.dev/versions/v57.0.0/ adresindeki güncel dokümantasyon
teyit edilir; eğitim verisine/hafızaya güvenilerek API varsayımı yapılmaz.

## Ek Kısıtlamalar

- Misafir modu yoktur; uygulamayı kullanmak için e-posta/şifre ile hesap
  oluşturma veya giriş zorunludur. Google/Apple hesap bağlama yalnızca
  Ayarlar ekranında, isteğe bağlı bir sonraki adımdır.
- v1'de gelir modeli/ödeme altyapısı yoktur; uygulama tamamen ücretsizdir.
- Ürün kategorileri sabit, önceden tanımlı bir listeden seçilir; kullanıcı
  tanımlı serbest kategori v1 kapsamı dışındadır.
- Rutin (Loop) adımları her zaman envanterdeki (Vanity) bir ürüne bağlıdır.
- Bildirimler tamamen cihaz-yerel zamanlanır (Expo Local Notifications);
  sunucu taraflı push bildirim v1 kapsamı dışındadır.
- Barkod verisi Open Beauty Facts'ten alınır; bulunamazsa kullanıcı manuel
  giriş yapar.

## Geliştirme İş Akışı

- Özellik geliştirme Spec-Kit akışını izler: `/speckit-constitution` →
  `/speckit-specify` → (opsiyonel `/speckit-clarify`) → `/speckit-plan` →
  `/speckit-tasks` → (opsiyonel `/speckit-analyze`) → `/speckit-implement`.
- Dağıtım: EAS Build (iOS + Android) ve Convex dev/prod ortam ayrımı ile
  yapılır; prod ortamına doğrudan, teyit edilmemiş değişiklik yapılmaz.
- v1 "tamamlandı" tanımı: kritik akışlarda (auth, ürün ekleme, rutin
  tamamlama) temel otomatik test + geri kalan akışlarda manuel QA.

## Governance

Bu anayasa, projedeki diğer tüm pratiklerin üzerindedir; çelişen bir karar
alınacaksa önce bu doküman güncellenmelidir. Değişiklikler (amendments)
gerekçelendirilmeli, sürüm numarası semantik versiyonlamaya göre artırılmalı
(MAJOR: ilke kaldırma/yeniden tanımlama, MINOR: yeni ilke/bölüm ekleme,
PATCH: netleştirme/yazım düzeltmesi) ve bu dosyaya işlenmelidir. Her
`/speckit-plan` çalıştırmasında uyumluluk bu anayasaya göre doğrulanır.

**Version**: 1.0.0 | **Ratified**: 2026-09-18 | **Last Amended**: 2026-09-18
