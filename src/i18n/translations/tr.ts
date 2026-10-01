/**
 * Uygulama içi statik UI metinlerinin TÜM dillerin uyması gereken kaynak
 * (Türkçe) sözlüğü — bu dosyanın şekli (`Translations` tipi) her dil dosyası
 * için zorunlu sözleşmedir; bir dilde anahtar eksikse TypeScript derleme
 * hatası verir. Veritabanından gelen ürün adı/marka gibi DİNAMİK içerik
 * kesinlikle burada yer almaz ve asla çevrilmez.
 *
 * `{{param}}` biçimindeki yer tutucular `t(key, { param: değer })` ile
 * doldurulur (bkz. LocaleContext.tsx). Her dil bu şablonu kendi dil bilgisi
 * kurallarına göre yeniden sıralayabilir; önemli olan aynı `{{param}}`
 * adlarının tüm dillerde bulunması.
 */
/**
 * Şekil (hangi anahtarlar zorunlu) sözleşmesi — leaf'ler bilerek `string`'e
 * genişletilir (literal tutulmaz), aksi halde her dilin TR ile birebir aynı
 * metni kullanması zorunlu olurdu. `tr` sabiti bu tipe `satisfies` ile
 * uyar; diğer dosyalar da aynı deseni izler (bkz. en.ts, es.ts, ...).
 */
export type Translations = {
  tabs: {
    planner: string;
    loops: string;
    vanity: string;
    journal: string;
    settings: string;
    addProduct: string;
    capturePhoto: string;
    compare: string;
    routineReport: string;
  };
  common: {
    cancel: string;
    save: string;
    delete: string;
    close: string;
    add: string;
    edit: string;
    signOut: string;
    areYouSure: string;
    grantPermission: string;
    takePhoto: string;
    or: string;
    saveFailed: string;
  };
  settings: {
    appearanceSection: string;
    notificationSection: string;
    dataSection: string;
    supportSection: string;
    dangerZoneSection: string;
    languageSection: string;
    changeLanguage: string;
    activeLanguage: string;
    chooseLanguage: string;
    activeTheme: string;
    changeTheme: string;
    chooseTheme: string;
    deleteAccountTitle: string;
    deleteAccountBody: string;
    deleteAccountButton: string;
    skincareLevelLabel: string;
    viewReport: string;
    levelMaster: string;
    levelExpert: string;
    levelSteady: string;
    levelDeveloping: string;
    levelBeginner: string;
    completionsProgress: string;
    loopReminders: string;
    loopRemindersDesc: string;
    expiryReminders: string;
    expiryRemindersDesc: string;
    notificationSound: string;
    notificationSoundDesc: string;
    sendTestNotification: string;
    batteryOptimization: string;
    batteryOptimizationDesc: string;
    openAppSettings: string;
    notificationPermissionDenied: string;
    testNotificationSent: string;
    exportFailed: string;
    deleteAccountFailed: string;
    exportData: string;
    exportDataDesc: string;
    exportButton: string;
    deleteAccountListTitle: string;
    deleteAccountListDesc: string;
    deleteAccountCta: string;
    contactUsTitle: string;
    contactUsDesc: string;
    contactUsCta: string;
    contactUsFailed: string;
  };
  vanity: {
    emptyState: string;
    deleteProductTitle: string;
    deleteProductBody: string;
    scanBarcode: string;
    manualAdd: string;
    backToScan: string;
    nameRequired: string;
    paoInvalid: string;
    addSaveFailed: string;
    updateSaveFailed: string;
    addProductTitle: string;
    editProductTitle: string;
    nameLabel: string;
    brandLabel: string;
    paoLabel: string;
    categoryPickerTitle: string;
    cameraPermissionNeeded: string;
    expired: string;
  };
  loops: {
    emptyState: string;
    addProductFailed: string;
    addProductToLoopTitle: string;
    optionalStep: string;
    noMoreProducts: string;
    nameRequired: string;
    selectAtLeastOneProduct: string;
    invalidReminderTime: string;
    notificationPermissionDeniedTitle: string;
    notificationPermissionDeniedBody: string;
    saveFailed: string;
    createTitle: string;
    nameLabel: string;
    frequency: string;
    typeMorning: string;
    typeEvening: string;
    typeWeekly: string;
    typeMonthly: string;
    morningRoutine: string;
    eveningRoutine: string;
    stepsLabel: string;
    addProductsFirst: string;
    reminderUpdateFailed: string;
    editReminderTitle: string;
    reminderOff: string;
    everyDayAt: string;
    monthlyOn: string;
    weeklyAt: string;
    skinDiary: string;
    productMissing: string;
    productMissingShort: string;
    productLoading: string;
    optionalBadge: string;
    addProduct: string;
    sectionProgress: string;
  };
  journal: {
    emptyState: string;
    deletePhotosTitle: string;
    editTitle: string;
    noteLabel: string;
    linkedLoop: string;
    noneOption: string;
    deselectAll: string;
    selectAll: string;
    select: string;
    compareCount: string;
    deleteCount: string;
    deletePhotosBody: string;
    before: string;
    after: string;
  };
  capture: {
    cameraPermissionNeeded: string;
    captureFailed: string;
    saveFailed: string;
    noteLabel: string;
    captureAndSave: string;
  };
  reminder: {
    title: string;
    hourLabel: string;
    minuteLabel: string;
    timeRangeError: string;
    whichDay: string;
    dayOfMonthLabel: string;
    dayOfMonthError: string;
  };
  planner: {
    todayProgress: string;
    activeLoops: string;
    productCount: string;
    lazyMode: string;
    emptyState: string;
    weeklyScoreTitle: string;
    weeklyScoreDesc: string;
  };
  reports: {
    thisWeek: string;
    thisMonth: string;
    dailyCompletion: string;
    weeklyCompletion: string;
    loading: string;
    weekLabel: string;
    totalCompletions: string;
    bestDay: string;
    bestWeek: string;
    average: string;
  };
  auth: {
    continueWithGoogle: string;
    continueWithApple: string;
    signIn: string;
    signUpTab: string;
    registerSubmit: string;
    sendCode: string;
    resendCode: string;
    email: string;
    password: string;
    emailRequired: string;
    emailInvalid: string;
    passwordRequired: string;
    passwordTooShort: string;
    mustAcceptLegalForm: string;
    verificationNotFound: string;
    tagline: string;
    otpSent: string;
    resendCooldown: string;
    emailVerified: string;
    checkSpamNote: string;
    errors: {
      invalidCredentials: string;
      emailAlreadyRegistered: string;
      tooManyAttempts: string;
      mustAcceptLegal: string;
      emailNotVerified: string;
      signInCancelled: string;
      providerUnavailable: string;
      networkError: string;
      generic: string;
      genericRetry: string;
      otpExpired: string;
      otpInvalid: string;
      otpNotRequested: string;
      otpTooManyAttempts: string;
      otpResendCooldown: string;
      emailSendFailed: string;
    };
  };
  legal: {
    gateTitle: string;
    gateBodyBefore: string;
    gateBodyBetween: string;
    gateBodyAfter: string;
    gateAccept: string;
    gateReject: string;
    termsLink: string;
    kvkkLink: string;
    consentBefore: string;
    consentBetween: string;
    consentAfter: string;
    kvkkModalTitle: string;
    termsModalTitle: string;
    draftNotice: string;
  };
  categories: {
    cleanser: string;
    toner: string;
    serum: string;
    moisturizer: string;
    spf: string;
    eyeCare: string;
    hairCare: string;
    bodyCare: string;
    other: string;
  };
  themes: {
    leopardLabel: string;
    leopardDescription: string;
    nudeRoseGoldLabel: string;
    nudeRoseGoldDescription: string;
    emeraldChampagneLabel: string;
    emeraldChampagneDescription: string;
    titaniumGraphiteLabel: string;
    titaniumGraphiteDescription: string;
  };
  profile: {
    nameRequired: string;
    galleryPermissionDenied: string;
    avatarUploadFailed: string;
    unnamedUser: string;
    statProducts: string;
    statLoops: string;
    statCompletions: string;
    editNameTitle: string;
    nameLabel: string;
  };
  dateKeys: {
    mon: string;
    tue: string;
    wed: string;
    thu: string;
    fri: string;
    sat: string;
    sun: string;
    jan: string;
    feb: string;
    mar: string;
    apr: string;
    may: string;
    jun: string;
    jul: string;
    aug: string;
    sep: string;
    oct: string;
    nov: string;
    dec: string;
    shortSun: string;
    shortMon: string;
    shortTue: string;
    shortWed: string;
    shortThu: string;
    shortFri: string;
    shortSat: string;
  };
};

export const tr = {
  tabs: {
    planner: "Planlayıcı",
    loops: "Rutinler",
    vanity: "Ürünlerim",
    journal: "Galeri",
    settings: "Ayarlar",
    addProduct: "Ürün Ekle",
    capturePhoto: "Fotoğraf Çek",
    compare: "Karşılaştır",
    routineReport: "Rutin Raporu",
  },
  common: {
    cancel: "Vazgeç",
    save: "Kaydet",
    delete: "Sil",
    close: "Kapat",
    add: "Ekle",
    edit: "Düzenle",
    signOut: "Çıkış Yap",
    areYouSure: "Emin misin?",
    grantPermission: "İzin Ver",
    takePhoto: "Fotoğraf Çek",
    or: "veya",
    saveFailed: "Kaydedilemedi.",
  },
  settings: {
    appearanceSection: "Görünüm ve Tema",
    notificationSection: "Bildirim Tercihleri",
    dataSection: "Veri Yönetimi",
    supportSection: "Destek",
    dangerZoneSection: "Tehlikeli Bölge",
    languageSection: "Dil Seçimi",
    changeLanguage: "Dil Değiştir",
    activeLanguage: "Aktif Dil",
    chooseLanguage: "Dil Seç",
    activeTheme: "Aktif Tema",
    changeTheme: "Tema Değiştir",
    chooseTheme: "Tema Seç",
    deleteAccountTitle: "Emin misin?",
    deleteAccountBody:
      "Hesabın, tüm ürünlerin, rutinlerin ve cihazdaki Journal fotoğrafların kalıcı olarak silinecek. Bu işlem geri alınamaz.",
    deleteAccountButton: "Kalıcı Olarak Sil",
    skincareLevelLabel: "Cilt Bakım Seviyen",
    viewReport: "Rutin Raporunu Gör",
    levelMaster: "Usta",
    levelExpert: "Uzman",
    levelSteady: "Kararlı",
    levelDeveloping: "Gelişiyor",
    levelBeginner: "Başlangıç",
    completionsProgress:
      "Tamamladığın her rutin adımı seni bir sonraki seviyeye taşıyor — şu ana kadar {{count}} adım tamamladın.",
    loopReminders: "Rutin Hatırlatıcıları",
    loopRemindersDesc: "Sabah/akşam/haftalık rutin bildirimleri",
    expiryReminders: "Ürün Süre Hatırlatıcıları",
    expiryRemindersDesc: "PAO/SKT yaklaşınca bildirim",
    notificationSound: "Bildirim Sesi",
    notificationSoundDesc: "Kapalıyken bildirimler yalnızca yazılı gelir, ses/titreşim olmaz",
    sendTestNotification: "Test Bildirimi Gönder (5 sn)",
    batteryOptimization: "Pil Optimizasyonu",
    batteryOptimizationDesc:
      "Bazı Android cihazlarda pil tasarrufu modu zamanlanmış bildirimleri geciktirebilir/engelleyebilir. Güvenilir hatırlatıcılar için BeautyLoop'u pil optimizasyonundan hariç tut.",
    openAppSettings: "Uygulama Ayarlarını Aç",
    notificationPermissionDenied: "Bildirim izni verilmedi veya bu ortamda (Expo Go) bildirimler desteklenmiyor.",
    testNotificationSent: "Gönderildi — 5 saniye içinde gelmesi gerekiyor.",
    exportFailed: "Veri dışa aktarılamadı.",
    deleteAccountFailed: "Hesap silinemedi.",
    exportData: "Verilerimi Dışa Aktar",
    exportDataDesc: "Vanity, Loops ve Journal kayıtlarını JSON olarak indir",
    exportButton: "Dışa Aktar",
    deleteAccountListTitle: "Hesabımı ve Verilerimi Sil",
    deleteAccountListDesc:
      "Bu işlem geri alınamaz — tüm sunucu verisi ve cihazdaki Journal fotoğrafları kalıcı olarak silinir (KVKK/GDPR)",
    deleteAccountCta: "Hesabı Sil",
    contactUsTitle: "Bize Ulaşın",
    contactUsDesc: "Sorularınız veya destek talepleriniz için bize e-posta gönderin",
    contactUsCta: "Destek E-postası Gönder",
    contactUsFailed: "E-posta uygulaması açılamadı.",
  },
  vanity: {
    emptyState: "Henüz ürün eklenmedi.",
    deleteProductTitle: "Ürünü Sil",
    deleteProductBody:
      'Bu ürünü silmek istediğine emin misin? Ürünü kullanan rutin adımları "ürün eksik" olarak işaretlenecek.',
    scanBarcode: "Barkod Tara",
    manualAdd: "Manuel Ekle",
    backToScan: "Barkoda dön",
    nameRequired: "Ürün adı zorunludur.",
    paoInvalid: "PAO süresi (ay) geçerli bir sayı olmalı.",
    addSaveFailed: "Ürün kaydedilemedi.",
    updateSaveFailed: "Ürün güncellenemedi.",
    addProductTitle: "Ürün Ekle",
    editProductTitle: "Ürünü Düzenle",
    nameLabel: "Ürün Adı",
    brandLabel: "Marka",
    paoLabel: "PAO (ay)",
    categoryPickerTitle: "Kategori Seç",
    cameraPermissionNeeded: "Barkod taramak için kamera izni gerekiyor.",
    expired: "Süresi doldu",
  },
  loops: {
    emptyState: "Henüz bir rutin oluşturulmadı.",
    addProductFailed: "Ürün eklenemedi.",
    addProductToLoopTitle: "Rutine Ürün Ekle",
    optionalStep: "Opsiyonel adım (Tembel Mod'da atlanır)",
    noMoreProducts: "Eklenebilecek başka ürün yok — önce Ürünlerim'e yeni ürün ekle.",
    nameRequired: "Rutin adı zorunludur.",
    selectAtLeastOneProduct: "En az bir ürün seçmelisin.",
    invalidReminderTime: "Hatırlatıcı saati geçerli değil.",
    notificationPermissionDeniedTitle: "Bildirim izni verilmedi",
    notificationPermissionDeniedBody:
      "Hatırlatıcı saatte tetiklenmeyecek çünkü bildirim izni verilmedi. Cihaz ayarlarından BeautyLoop'a bildirim izni verebilirsin.",
    saveFailed: "Rutin kaydedilemedi.",
    createTitle: "Rutin Oluştur",
    nameLabel: "Rutin Adı",
    frequency: "Sıklık",
    typeMorning: "Sabah",
    typeEvening: "Akşam",
    typeWeekly: "Haftalık",
    typeMonthly: "Aylık",
    morningRoutine: "Sabah Rutini",
    eveningRoutine: "Akşam Rutini",
    stepsLabel: "Adımlar (ürünler)",
    addProductsFirst: "Önce Ürünlerim'e bir ürün eklemelisin.",
    reminderUpdateFailed: "Hatırlatıcı güncellenemedi.",
    editReminderTitle: "Hatırlatıcıyı Düzenle",
    reminderOff: "Hatırlatıcı kapalı",
    everyDayAt: "Her gün {{time}}",
    monthlyOn: "Ayın {{day}}. günü {{time}}",
    weeklyAt: "{{weekday}} {{time}}",
    skinDiary: "Cilt Günlüğü",
    productMissing: "Ürün eksik — yeniden seçilmeli",
    productMissingShort: "Ürün eksik",
    productLoading: "Ürün yükleniyor...",
    optionalBadge: "Opsiyonel",
    addProduct: "Ürün Ekle",
    sectionProgress: "{{done}}/{{total}} tamamlandı",
  },
  journal: {
    emptyState: "Henüz bir Journal fotoğrafı yok.",
    deletePhotosTitle: "Fotoğrafları Sil",
    editTitle: "Fotoğrafı Düzenle",
    noteLabel: "Not",
    linkedLoop: "Bağlı rutin",
    noneOption: "Yok",
    deselectAll: "Seçimi Kaldır",
    selectAll: "Tümünü Seç",
    select: "Seç",
    compareCount: "Kıyasla ({{count}}/2)",
    deleteCount: "Sil ({{count}})",
    deletePhotosBody: "{{count}} fotoğraf kalıcı olarak silinecek. Bu işlem geri alınamaz.",
    before: "Önce",
    after: "Sonra",
  },
  capture: {
    cameraPermissionNeeded: "Fotoğraf çekmek için kamera izni gerekiyor.",
    captureFailed: "Fotoğraf çekilemedi. Lütfen tekrar dene.",
    saveFailed: "Fotoğraf kaydedilirken bir hata oluştu.",
    noteLabel: "Not (opsiyonel)",
    captureAndSave: "Fotoğraf Çek ve Kaydet",
  },
  reminder: {
    title: "Hatırlatıcı",
    hourLabel: "Saat (0-23)",
    minuteLabel: "Dakika (0-59)",
    timeRangeError: "Saat 0-23, dakika 0-59 aralığında olmalı.",
    whichDay: "Hangi gün?",
    dayOfMonthLabel: "Ayın günü (1-31)",
    dayOfMonthError: "Ayın günü 1-31 aralığında olmalı.",
  },
  planner: {
    todayProgress: "Bugünkü İlerleme",
    activeLoops: "Aktif Rutin",
    productCount: "Ürün Sayısı",
    lazyMode: "Tembel Mod",
    emptyState: "Henüz bir rutin oluşturulmadı. Rutinler sekmesinden başlayabilirsin.",
    weeklyScoreTitle: "Haftalık Uyum Skoru",
    weeklyScoreDesc: "Bu hafta tamamladığın adımların rutinlerine oranı.",
  },
  reports: {
    thisWeek: "Bu Hafta",
    thisMonth: "Bu Ay",
    dailyCompletion: "Günlük Tamamlama",
    weeklyCompletion: "Haftalık Tamamlama",
    loading: "Yükleniyor…",
    weekLabel: "{{number}}. Hf.",
    totalCompletions: "Toplam Tamamlama",
    bestDay: "En İyi Gün",
    bestWeek: "En İyi Hafta",
    average: "Ortalama",
  },
  auth: {
    continueWithGoogle: "Google ile Giriş Yap",
    continueWithApple: "Apple ile Giriş Yap",
    signIn: "Giriş Yap",
    signUpTab: "Kayıt Ol",
    registerSubmit: "Kaydol",
    sendCode: "Kod Gönder",
    resendCode: "Kodu Tekrar Gönder",
    email: "E-posta",
    password: "Şifre",
    emailRequired: "E-posta zorunludur.",
    emailInvalid: "Geçerli bir e-posta adresi gir.",
    passwordRequired: "Şifre zorunludur.",
    passwordTooShort: "Şifre en az 6 karakter olmalı.",
    mustAcceptLegalForm: "Lütfen devam etmeden önce KVKK metnini ve kullanıcı sözleşmesini onaylayın.",
    verificationNotFound: "E-posta doğrulaması bulunamadı. Lütfen baştan dene.",
    tagline: "Cilt bakım rutinini takip et",
    otpSent: "{{email}} adresine gönderilen 6 haneli kodu gir.",
    resendCooldown: "{{time}} saniye sonra tekrar gönderebilirsin",
    emailVerified: "{{email}} doğrulandı. Şimdi bir şifre belirle.",
    checkSpamNote: "Kodu birkaç dakika içinde göremezsen, lütfen spam/gereksiz klasörünü kontrol etmeyi unutma.",
    errors: {
      invalidCredentials: "Hatalı e-posta veya şifre.",
      emailAlreadyRegistered: "Bu e-posta zaten kayıtlı. Giriş yapmayı dene.",
      tooManyAttempts: "Çok fazla başarısız deneme. Lütfen daha sonra tekrar dene.",
      mustAcceptLegal: "Devam etmeden önce KVKK metnini ve kullanıcı sözleşmesini onaylamalısın.",
      emailNotVerified: "E-postanı doğrulamadan hesap oluşturulamaz.",
      signInCancelled: "Giriş iptal edildi.",
      providerUnavailable: "Bu giriş yöntemi şu anda kullanılamıyor. Lütfen e-posta ile giriş yap.",
      networkError: "Bağlantı hatası. İnternet bağlantını kontrol et.",
      generic: "Bir şeyler ters gitti.",
      genericRetry: "Bir şeyler ters gitti. Lütfen tekrar dene.",
      otpExpired: "Kodun süresi doldu. Yeni bir kod iste.",
      otpInvalid: "Girdiğin kod hatalı. Lütfen tekrar dene.",
      otpNotRequested: "Önce bir doğrulama kodu istemelisin.",
      otpTooManyAttempts: "Çok fazla yanlış deneme yaptın. Yeni bir kod iste.",
      otpResendCooldown: "Çok sık kod istedin. Lütfen biraz bekleyip tekrar dene.",
      emailSendFailed: "Doğrulama kodu gönderilemedi. Lütfen tekrar dene.",
    },
  },
  legal: {
    gateTitle: "Devam Etmeden Önce",
    gateBodyBefore: "BeautyLoop'u kullanmaya devam edebilmen için ",
    gateBodyBetween: "'ni ve ",
    gateBodyAfter: "'ni okuyup kişisel verilerinin işlenmesini onaylaman gerekiyor.",
    gateAccept: "Okudum, Onaylıyorum ve Devam Et",
    gateReject: "Reddet ve Çıkış Yap",
    termsLink: "Kullanıcı Sözleşmesi",
    kvkkLink: "KVKK Aydınlatma Metni",
    consentBefore: "",
    consentBetween: "'ni ve ",
    consentAfter: "'ni okudum, kişisel verilerimin işlenmesini onaylıyorum.",
    kvkkModalTitle: "KVKK Aydınlatma Metni",
    termsModalTitle: "Kullanıcı Sözleşmesi & Açık Rıza Metni",
    draftNotice:
      "Bu metin bir taslaktır; köşeli parantez içindeki alanlar yayına almadan önce doldurulmalı ve bir hukuk danışmanına onaylatılmalıdır.",
  },
  categories: {
    cleanser: "Temizleyici",
    toner: "Tonik",
    serum: "Serum",
    moisturizer: "Nemlendirici",
    spf: "Güneş Koruyucu",
    eyeCare: "Göz Bakımı",
    hairCare: "Saç Bakımı",
    bodyCare: "Vücut Bakımı",
    other: "Diğer",
  },
  themes: {
    leopardLabel: "Leopar Glam",
    leopardDescription: "Koyu vizon/siyah zemin, tozlu gül (dusty rose) aksanlar ve yoğun, belirgin leopar dokusu.",
    nudeRoseGoldLabel: "Nude & Rose Gold",
    nudeRoseGoldDescription:
      "Sıcak pudra terracotta ve şeftali tonlarında, ferah ve organik bir cilt bakımı hissiyatı.",
    emeraldChampagneLabel: "Zümrüt & Şampanya Gold",
    emeraldChampagneDescription:
      "Derin zümrüt yeşili zemin üzerinde şampanya altın vurgular — lüks dermokozmetik/spa hissiyatı.",
    titaniumGraphiteLabel: "Titanyum & Grafit",
    titaniumGraphiteDescription:
      "Füme arduvaz grisi zemin, soğuk metalik gümüş vurgular — minimalist, medikal ve unisex bir görünüm.",
  },
  profile: {
    nameRequired: "Kullanıcı adı boş olamaz.",
    galleryPermissionDenied: "Galeriye erişim izni verilmedi.",
    avatarUploadFailed: "Fotoğraf yüklenemedi.",
    unnamedUser: "İsimsiz Kullanıcı",
    statProducts: "Ürün",
    statLoops: "Rutin",
    statCompletions: "Tamamlanan",
    editNameTitle: "Kullanıcı Adını Düzenle",
    nameLabel: "Kullanıcı Adı",
  },
  dateKeys: {
    mon: "Pzt",
    tue: "Sal",
    wed: "Çar",
    thu: "Per",
    fri: "Cum",
    sat: "Cmt",
    sun: "Paz",
    jan: "Ocak",
    feb: "Şubat",
    mar: "Mart",
    apr: "Nisan",
    may: "Mayıs",
    jun: "Haziran",
    jul: "Temmuz",
    aug: "Ağustos",
    sep: "Eylül",
    oct: "Ekim",
    nov: "Kasım",
    dec: "Aralık",
    shortSun: "Pz",
    shortMon: "Pt",
    shortTue: "Sa",
    shortWed: "Ça",
    shortThu: "Pe",
    shortFri: "Cu",
    shortSat: "Ct",
  },
} satisfies Translations;
