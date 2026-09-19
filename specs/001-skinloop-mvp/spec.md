# Feature Specification: skinLoop v1 MVP

**Feature Branch**: `001-skinloop-mvp`

**Created**: 2026-09-18

**Status**: Draft

**Input**: User description: "Minimalist, reklamsız, gizlilik odaklı bir cilt ve saç bakımı rutin takip ve ürün envanter yönetim mobil uygulaması. Kullanıcının mevcut ürünlerini israf etmeden, son kullanma tarihlerini (PAO) kaçırmadan ve tutarlı döngülerle (loops) kullanmasını hedefler. Misafir modu yok; e-posta/şifre ile hesap zorunlu, Google/Apple hesap bağlama isteğe bağlı. v1 kapsamı: ürün envanteri (Vanity), rutin döngüleri (Loops), gizlilik odaklı ilerleme günlüğü (Journal, yalnızca cihazda)."

## User Scenarios & Testing *(mandatory)*

### User Story 1 - Hesap Oluşturma ve Giriş (Priority: P1)

Yeni bir kullanıcı uygulamayı ilk açtığında, e-posta ve şifresiyle bir hesap
oluşturur veya mevcut hesabına giriş yapar. Misafir modu olmadığından bu
adım, uygulamanın diğer tüm özelliklerine erişimin ön koşuludur.

**Why this priority**: Hesap olmadan hiçbir kişisel veri (envanter, rutin)
oluşturulamaz; tüm diğer kullanıcı hikayeleri buna bağımlıdır.

**Independent Test**: Bir e-posta/şifre ile kayıt olup oturum açarak ve
ardından uygulamayı kapatıp yeniden açarak oturumun korunduğu doğrulanabilir.

**Acceptance Scenarios**:

1. **Given** kayıtlı olmayan bir kullanıcı, **When** e-posta ve şifresiyle
   kayıt olur, **Then** hesabı oluşturulur ve ana ekrana yönlendirilir.
2. **Given** kayıtlı bir kullanıcı, **When** doğru e-posta/şifre ile giriş
   yapar, **Then** kendi verilerine (envanter, rutinler) erişir.
3. **Given** giriş yapmış bir kullanıcı, **When** Ayarlar ekranından Google
   veya Apple hesabını bağlar, **Then** sonraki girişlerini o sağlayıcıyla
   da yapabilir hale gelir.

---

### User Story 2 - Ürün Envanteri ve Son Kullanma Takibi (Priority: P2)

Kullanıcı, sahip olduğu bakım ürünlerini barkod tarayarak veya manuel arama
ile envanterine (Vanity) ekler; açılış tarihini ve ürünün kullanım ömrünü
(PAO/SKT) kaydeder. Uygulama, süresi yaklaşan/dolan ürünleri görsel olarak
işaretler.

**Why this priority**: Ürün israfını önleme, uygulamanın temel değer
önerisidir ve rutin oluşturmadan bağımsız olarak tek başına fayda sağlar.

**Independent Test**: Bir ürün barkod veya manuel arama ile eklenip açılış
tarihi girildiğinde, ürünün envanter listesinde PAO/SKT bilgisiyle
göründüğü ve süresi dolduğunda görsel rozetle işaretlendiği doğrulanabilir.

**Acceptance Scenarios**:

1. **Given** envanter ekranı, **When** kullanıcı bir ürünün barkodunu
   tarar ve ürün veritabanında bulunur, **Then** marka/isim/kategori
   otomatik doldurulur ve kullanıcı yalnızca açılış tarihini onaylar.
2. **Given** envanter ekranı, **When** taranan barkod veritabanında
   bulunamaz, **Then** kullanıcı ürünü manuel olarak (isim, marka,
   kategori) ekleyebilir.
3. **Given** açılış tarihi girilmiş bir ürün, **When** ürünün PAO/SKT
   süresi dolar, **Then** ürün envanterden kaldırılmadan listede "süresi
   doldu" rozetiyle gösterilir.

---

### User Story 3 - Rutin Döngüleri Oluşturma ve Tamamlama (Priority: P3)

Kullanıcı, sabah/akşam veya haftalık bir bakım rutini (Loop) oluşturur ve
her adımı envanterindeki belirli bir ürünle ilişkilendirir. Günlük
kullanımda adımları sırayla tamamlar; uygulama cihaz üzerinde hatırlatıcı
bildirim gönderir.

**Why this priority**: Tutarlılık, ürünün ikinci temel değer önerisidir;
ancak envanterde ürün bulunmasına bağımlı olduğundan P2'den sonra gelir.

**Independent Test**: Envanterde en az bir ürün varken bir Loop oluşturulup
bir adım o ürüne bağlandığında ve adım "tamamlandı" olarak işaretlendiğinde,
tamamlanma durumunun kaydedildiği ve bir sonraki hatırlatıcının
zamanlandığı doğrulanabilir.

**Acceptance Scenarios**:

1. **Given** envanterinde en az bir ürünü olan bir kullanıcı, **When** yeni
   bir Loop oluşturup adımları ürünlerle eşleştirir, **Then** Loop
   kaydedilir ve ana ekranda günlük/haftalık plana göre listelenir.
2. **Given** günün rutini, **When** kullanıcı bir adımı tamamlandı olarak
   işaretler, **Then** o adımın durumu güncellenir ve rutin ilerlemesi
   görsel olarak yansır.
3. **Given** hatırlatıcı zamanı gelen bir Loop, **When** cihaz bildirim
   izni verilmişse, **Then** kullanıcıya cihaz-yerel bir hatırlatma
   bildirimi gönderilir.

---

### User Story 4 - Gizlilik Odaklı İlerleme Günlüğü (Priority: P4)

Kullanıcı, cilt/saç durumunu zaman içinde takip etmek için fotoğraf
ekleyebilir. Bu fotoğraflar yalnızca cihazda, güvenli/şifreli bir alanda
saklanır ve hiçbir zaman buluta yüklenmez.

**Why this priority**: Güçlü bir farklılaştırıcı ve gizlilik vaadidir, ancak
günlük rutin akışının işlevsel çekirdeği değildir; bu nedenle en düşük
öncelikli fakat yine de v1 kapsamındaki bir kullanıcı hikayesidir.

**Independent Test**: Bir fotoğraf Journal'a eklendiğinde yalnızca cihaz
üzerinde saklandığı ve uygulamanın ağ trafiğinde bu fotoğrafın sunucuya
gönderilmediği doğrulanabilir.

**Acceptance Scenarios**:

1. **Given** Journal ekranı, **When** kullanıcı bir fotoğraf ekler,
   **Then** fotoğraf tarih etiketiyle yerel günlük listesine eklenir.
2. **Given** cihazda kayıtlı Journal fotoğrafları, **When** kullanıcı
   farklı bir cihazdan aynı hesaba giriş yapar, **Then** önceki cihazdaki
   Journal fotoğrafları yeni cihazda görünmez (senkronize edilmez).

---

### Edge Cases

- Taranan barkod ürün veritabanında bulunamazsa kullanıcı manuel giriş
  akışına yönlendirilir.
- PAO/SKT süresi dolan bir ürün envanterden otomatik silinmez veya
  arşivlenmez; kullanıcı kararına bırakılan görsel bir rozetle işaretlenir.
- Kullanıcı bildirim iznini reddederse, hatırlatıcılar gösterilmez ancak
  kullanıcı süresi yaklaşan ürünleri/rutinleri uygulama içinde manuel
  olarak görebilir.
- Kullanıcı kamera iznini reddederse, ürün ekleme akışı manuel
  arama/girişe düşer.
- Kullanıcı yeni bir cihazdan aynı hesaba giriş yaparsa envanter ve
  rutinler senkronize görünür, ancak Journal fotoğrafları görünmez (yeni
  cihazda Journal boş başlar).
- Kullanıcı hesabını silerse, sunucuda saklanan envanter/rutin verisi
  silinir; Journal zaten yalnızca cihazda tutulduğundan bu işlemden
  etkilenmez.
- Bir Loop adımına bağlı ürün envanterden silinirse, o adım "ürün
  eksik/silinmiş" olarak işaretlenir ve kullanıcıdan yeni bir ürün
  seçmesi istenir.

## Requirements *(mandatory)*

### Functional Requirements

- **FR-001**: Sistem, kullanıcıların e-posta ve şifre ile hesap
  oluşturmasına izin VERMELİDİR.
- **FR-002**: Sistem, kayıtlı kullanıcıların e-posta/şifre ile oturum
  açmasına izin VERMELİDİR.
- **FR-003**: Sistem, misafir/hesapsız kullanım sunMAMALIDIR.
- **FR-004**: Kullanıcılar, oturum açtıktan sonra Ayarlar ekranından
  Google veya Apple hesabını mevcut hesaplarına bağlayabilMELİDİR.
- **FR-005**: Kullanıcılar, bir ürünü barkod tarayarak envanterlerine
  ekleyebilMELİDİR; sistem barkodu tanınan bir ürün veritabanında
  aratMALIDIR.
- **FR-006**: Barkod bulunamadığında veya kullanıcı tercih ettiğinde,
  sistem ürünün manuel olarak (isim, marka, kategori) eklenmesine izin
  VERMELİDİR.
- **FR-007**: Sistem, her ürün için sabit/önceden tanımlı bir kategori
  listesinden seçim yapılmasını iste MELİDİR.
- **FR-008**: Sistem, her ürün için açılış tarihi ve kullanım
  ömrü/PAO-SKT bilgisini kaydet MELİDİR ve kalan süreyi hesaplaMALIDIR.
- **FR-009**: Sistem, süresi dolan ürünleri envanterden kaldırmadan
  görsel olarak (rozet/etiket ile) işaretleMELİDİR.
- **FR-010**: Kullanıcılar, sabah/akşam/haftalık tipte bir veya daha
  fazla rutin döngüsü (Loop) oluşturabilMELİDİR.
- **FR-011**: Her Loop adımı, envanterdeki belirli bir ürüne
  bağlanMALIDIR (serbest metin adım desteklenMEZ).
- **FR-012**: Kullanıcılar, bir Loop'un adımlarını tek tek tamamlandı
  olarak işaretleyebilMELİDİR ve sistem tamamlanma durumunu
  saklaMALIDIR.
- **FR-013**: Sistem, yaklaşan rutin zamanları ve yaklaşan/dolan PAO
  süreleri için cihaz üzerinde yerel hatırlatıcı bildirimleri
  göndermeLİDİR (bildirim izni verildiğinde).
- **FR-014**: Kullanıcılar, ilerleme takibi için fotoğraf ekleyerek bir
  Journal girişi oluşturabilMELİDİR.
- **FR-015**: Sistem, Journal fotoğraflarını yalnızca cihazın yerel
  güvenli/şifreli deposunda saklaMALIDIR ve bu fotoğrafları hiçbir
  sunucuya veya buluta AKTARMAMALIDIR.
- **FR-016**: Sistem, Journal verisini cihazlar arasında
  senkronize ETMEMELİDİR.
- **FR-017**: Bir Loop adımına bağlı ürün envanterden silindiğinde,
  sistem ilgili adımı "ürün eksik" olarak işaretleMELİDİR ve kullanıcıdan
  yeni bir ürün seçmesini isteMELİDİR.
- **FR-018**: Sistem herhangi bir tıbbi teşhis, tedavi önerisi veya
  doğrulanmamış bakım iddiası SUNMAMALIDIR.

### Key Entities *(include if feature involves data)*

- **Kullanıcı Hesabı**: E-posta, şifre (özet olarak), isteğe bağlı bağlı
  Google/Apple kimlikleri. Envanter ve rutinlerin sahibidir.
- **Ürün (Vanity Kalemi)**: Ad, marka, barkod (opsiyonel), sabit
  kategori, açılış tarihi, PAO/SKT süresi, kaynak (barkod/manuel).
  Kullanıcıya ait.
- **Kategori**: Sabit, önceden tanımlı bir listeden bir değer (ör.
  Temizleyici, Serum, Nemlendirici, SPF, Saç Bakımı).
- **Rutin (Loop)**: Tip (sabah/akşam/haftalık), ad, sıralı adım listesi.
  Kullanıcıya ait.
- **Rutin Adımı (LoopStep)**: Sıra numarası, bağlı olduğu Ürün,
  tamamlanma durumu/geçmişi.
- **Günlük Girişi (JournalEntry)**: Tarih, fotoğraf (yalnızca cihazda),
  opsiyonel not. Kullanıcıya ait ancak sunucuda saklanmaz.

## Success Criteria *(mandatory)*

### Measurable Outcomes

- **SC-001**: Yeni bir kullanıcı, hesap oluşturmayı 1 dakikadan kısa
  sürede tamamlayabilir.
- **SC-002**: Kullanıcı, barkodu tanınan bir ürünü tarayarak 15 saniyeden
  kısa sürede envantere ekleyebilir.
- **SC-003**: Kullanıcıların en az %90'ı, uygulamayı açtıktan sonra
  günlük rutinlerindeki bir adımı 3 dokunuştan az işlemle
  tamamlayabilir.
- **SC-004**: Bildirim izni açık olan kullanıcılar, bir ürünün PAO/SKT
  süresi dolmadan önce %100 oranında en az bir hatırlatıcı bildirim
  alır.
- **SC-005**: Journal fotoğrafları, hiçbir senaryoda cihaz dışına
  aktarılmaz (uygulamanın ağ trafiği denetiminde Journal verisi içeren
  sıfır giden istek gözlemlenir).
- **SC-006**: Kullanıcıların en az %80'i, envanterine ekledikleri bir
  ürünü en az bir rutin adımına bağlar (envanter–rutin bütünleşmesinin
  benimsendiğinin göstergesi).

## Assumptions

- Kullanıcılar iOS veya Android çalıştıran kişisel akıllı telefonlar
  kullanıyor ve genellikle internet bağlantısına sahip (envanter/rutin
  senkronu için); Journal özelliği çevrimdışı da çalışır.
- v1'de yalnızca e-posta/şifre kimlik doğrulama akışı sunulur; magic
  link v1 kapsamı dışındadır.
- v1'de gelir modeli veya ödeme akışı yoktur; uygulama tamamen
  ücretsizdir.
- Uygulamanın birincil dili Türkçedir.
- Ürün kategorileri sabit/önceden tanımlı bir listeden seçilir; kullanıcı
  tanımlı serbest kategori desteklenmez.
- Ürün miktarı/kalan yüzdesi takip edilmez; yalnızca tarih bazlı
  (açılış + PAO/SKT) takip yapılır.
- "Rutin Kodları" (içerik üretici paylaşım özelliği) ve sosyal özellikler
  v1 kapsamı dışındadır, v2'ye ertelenmiştir.
