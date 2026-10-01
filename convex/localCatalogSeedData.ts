// Bu dosya otomatik üretildi (bkz. scratchpad/mergeCatalog.mjs) — elle düzenlenmez.
// Kaynak: Gratis, Rossmann, Watsons cilt & saç bakım barkod listeleri.
// Aynı barkodun birden fazla mağaza dosyasında geçtiği durumlarda ilk karşılaşılan kayıt korunmuştur.
import type { Doc } from "./_generated/dataModel";

export type LocalCatalogSeedEntry = {
  name: string;
  barcode: string;
  source: Doc<"productCatalog">["source"];
};

export const LOCAL_CATALOG_SEED_PRODUCTS: LocalCatalogSeedEntry[] = [
  {
    "barcode": "0000002148991",
    "name": "Superdrug Saç Köpüğü Extra Firm 300 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "0000007681172",
    "name": "Solait Yaşlanma Karşıtı Hassas Yüz Güneş Koruyucu Losyon SPF30 50 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "0000007696702",
    "name": "Solait Yaşlanma Karşıtı Yüz Güneş Kremi Spf 30 50 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "0000007697006",
    "name": "Solait Kids Trigger 50+ 200 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "0000008055248",
    "name": "Superdrug B. Nemlendirici Temizleme Balm 65 g",
    "source": "local_watsons"
  },
  {
    "barcode": "0000008057952",
    "name": "Superdrug B. Nemlendirici Gündüz Kremi 75 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "0000008058027",
    "name": "Superdrug B. Yoğun Nemlendirici Serum 30 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "0000008060051",
    "name": "Superdrug Saç Maskesi Hindistan Cevizi Yağı",
    "source": "local_watsons"
  },
  {
    "barcode": "0000008060068",
    "name": "Superdrug Saç Maskesi Aloe Vera",
    "source": "local_watsons"
  },
  {
    "barcode": "0000008060082",
    "name": "Superdrug Saç Maskesi Avokado",
    "source": "local_watsons"
  },
  {
    "barcode": "0000008136436",
    "name": "Superdrug Facial Cleansing Wipes Sensitive Skin 25 Adet",
    "source": "local_watsons"
  },
  {
    "barcode": "0000008136460",
    "name": "Superdrug Facial Cleansing Wipes Normal Skin 25 Adet",
    "source": "local_watsons"
  },
  {
    "barcode": "0000008136474",
    "name": "Superdrug Micellar Water Facial Cleansing Wipes 25 Adet",
    "source": "local_watsons"
  },
  {
    "barcode": "0000008338502",
    "name": "Solait Yaşlanma Karşıtı Yüz Güneş Koruyucu SPF50+ 50 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "0000008338549",
    "name": "Solait Çocuk Sprey Vücut Güneş Kremi SPF50+ 250 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "0000008338687",
    "name": "Solait Çocuk Vücut Güneş Koruyucu Losyon SPF50 200 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "0000008338761",
    "name": "Solait Nemlendirici Vücut Güneş Koruyucu Losyon SPF30 200 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "0000008338778",
    "name": "Solait Nemlendirici Güneş Losyonu Spf 50 200 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "0000008338846",
    "name": "Solait Vücut Güneş Kremi Sprey SPF30 200 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "0000040060491",
    "name": "Nivea Yüz Kremi Yaşlanma Karşıtı 100 ml",
    "source": "local_rossmann"
  },
  {
    "barcode": "0000040063928",
    "name": "Nivea Hafif Dokulu Cilt Tonu Eşitleyici Yüz Bakım Kremi 100 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "0000042242215",
    "name": "Nivea Roll On Double Effect 50 ml",
    "source": "local_rossmann"
  },
  {
    "barcode": "0000042300205",
    "name": "Nivea Creme Nemlendirici El, Yüz ve Vücut Bakım Kremi 30 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "0000042348450",
    "name": "Isana Dudak Balmı Hassas Cilt 4,8 g",
    "source": "local_rossmann"
  },
  {
    "barcode": "0000042360070",
    "name": "Isana Dudak Balmı Balmumu ve Avokado Yağı 4,8 gr",
    "source": "local_rossmann"
  },
  {
    "barcode": "0000042360414",
    "name": "Nivea Hafif Dokulu Yaşlanma Karşıtı Yüz Bakım Kremi 100 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "0000042360698",
    "name": "Nivea Sun Kids Hassas Koruma Güneş Roll-on SPF50 50 ml",
    "source": "local_rossmann"
  },
  {
    "barcode": "0000042368649",
    "name": "Isana Dudak Balmı Kiraz Özü ve Hindistan Cevizi 4,8 gr",
    "source": "local_rossmann"
  },
  {
    "barcode": "0000042397847",
    "name": "Nivea Roll On Fresh Cherry 50 ml",
    "source": "local_rossmann"
  },
  {
    "barcode": "0000042417712",
    "name": "Nivea Yoğun Nemlendirici El Bakım Kremi 75 ml (Kuru Ciltler)",
    "source": "local_gratis"
  },
  {
    "barcode": "0000042423126",
    "name": "Isana Dudak Balmı Berry Love 4,8 gr",
    "source": "local_rossmann"
  },
  {
    "barcode": "0000042428268",
    "name": "Hipp Dudak Nemlendirici Organik 4.8 gr",
    "source": "local_rossmann"
  },
  {
    "barcode": "0000042429227",
    "name": "Nivea Men Stick Deodorant Silver Protect 50 ml",
    "source": "local_rossmann"
  },
  {
    "barcode": "0000042429272",
    "name": "Nivea Stick Deodorant Black&White Invisible İpeksi Pürüzsüzlük Women 50 ml",
    "source": "local_rossmann"
  },
  {
    "barcode": "0000042441717",
    "name": "Isana Dudak Peelingi Hindistan Cevizi Kavanoz 15 gr",
    "source": "local_rossmann"
  },
  {
    "barcode": "0000042441724",
    "name": "Isana Soft & Glossy Dudak Bakım Kremi 15 gr",
    "source": "local_rossmann"
  },
  {
    "barcode": "0000042453321",
    "name": "Isana Dudak Balm Badem Yağı & Balmumu 4,8 g",
    "source": "local_rossmann"
  },
  {
    "barcode": "0000042453345",
    "name": "Isana Dudak Balm Yaban Gülü Yağı 4,8 g",
    "source": "local_rossmann"
  },
  {
    "barcode": "0000042482802",
    "name": "Isana Dudak Bakım Kremi Peptit & Squalen, 10 ml",
    "source": "local_rossmann"
  },
  {
    "barcode": "0000042490159",
    "name": "Isana Dudak Bakım Kremi Nude Tint, 10 ml",
    "source": "local_rossmann"
  },
  {
    "barcode": "0000042494881",
    "name": "Nivea Sun SPF50 Yüksek Güneş Korumalı Stick Yüz Güneş Kremi",
    "source": "local_rossmann"
  },
  {
    "barcode": "0000042495079",
    "name": "Nivea Men Fresh Sensation Erkek Roll on Deodorant 50 ml",
    "source": "local_rossmann"
  },
  {
    "barcode": "0000042513858",
    "name": "Nivea C Vitamini İçeren Ultra Hafif Enerji Nemlendirici Yüz Bakım Kremi 100 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "0000043004171",
    "name": "Isana Dudak Balmı İnci Parlak 4,8 gr",
    "source": "local_rossmann"
  },
  {
    "barcode": "0000086900058",
    "name": "Arko Classic Yağlı Krem 20 cc",
    "source": "local_gratis"
  },
  {
    "barcode": "0000086916134",
    "name": "Hobby Naturel Form Tüp Briyantin 70 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "0041388001715",
    "name": "Blistex MedPlus Kavanoz SPF 15 - Kuruyan ve Çatlayan Dudaklara Yoğun Dudak Bakımı 7 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "0041388003092",
    "name": "Blistex Sensitive - Hassas Dudaklar için Dudak Bakımı 4.25 gr",
    "source": "local_gratis"
  },
  {
    "barcode": "0041388210216",
    "name": "Blistex Lip Relief Cream SPF 15 Dudak Bakım Kremi & Ruj Öncesi Balsam 6 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "0041388220611",
    "name": "Blistex Klasik Dudak Koruyucusu SPF 10 - Classic Lip Protector 4.25 gr",
    "source": "local_gratis"
  },
  {
    "barcode": "0041388260013",
    "name": "Blistex Yoğun Nemlendirici Günlük Bakım Kremi SPF15 7 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "0050051119091",
    "name": "Lip Smacker Rapunzel Magical Glow Dudak Kremi",
    "source": "local_gratis"
  },
  {
    "barcode": "0050051119114",
    "name": "Lip Smacker Coca Cola Dudak Kremi",
    "source": "local_gratis"
  },
  {
    "barcode": "0050051119435",
    "name": "Lip Smacker Çilekli Fanta Dudak Kremi",
    "source": "local_gratis"
  },
  {
    "barcode": "0050051119466",
    "name": "Lip Smacker Dudak Kremi Kedi",
    "source": "local_gratis"
  },
  {
    "barcode": "0050051119473",
    "name": "Lip Smacker Dudak Kremi Unicorn",
    "source": "local_gratis"
  },
  {
    "barcode": "0050051119497",
    "name": "Lip Smacker Fanta Dudak Kremi",
    "source": "local_gratis"
  },
  {
    "barcode": "0050051119626",
    "name": "Lip Smacker Dudak Kremi Elsa",
    "source": "local_gratis"
  },
  {
    "barcode": "0050051120998",
    "name": "Lip Smacker Sprite Dudak Kremi",
    "source": "local_gratis"
  },
  {
    "barcode": "0050051122046",
    "name": "Lip Smacker Disney Elsa/Anna Dudak Kremi",
    "source": "local_gratis"
  },
  {
    "barcode": "0050051122077",
    "name": "Lip Smacker Çilekli Dudak Kremi",
    "source": "local_gratis"
  },
  {
    "barcode": "0050051122084",
    "name": "Lip Smacker Tropikal Kokteyl Dudak Kremi",
    "source": "local_gratis"
  },
  {
    "barcode": "0050051405187",
    "name": "Lip Smacker Dudak Kremi Pamuk Prenses",
    "source": "local_gratis"
  },
  {
    "barcode": "0071164301111",
    "name": "Hask Çay Ağacı Özlü Şampuan 355 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "0071164301166",
    "name": "Hask Repair Series Saç Bakım Spreyi 120 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "0071164301210",
    "name": "Hask Çay Ağacı Özlü Saç Kremi 355 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "0071164301265",
    "name": "Hask Repair Series Saç Bakım Yağı 120 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "0071164301357",
    "name": "Hask Repair Series Saç Derisi Serumu 100 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "0071164322161",
    "name": "Hask Repair Series Durulanmayan Saç Bakım Kremi 100 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "0071164323175",
    "name": "Hask Keratin Protein Saç Bakım Yağı 18 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "0071164333075",
    "name": "Hask Keratin Protein Saç Bakım Kremi Paket 50 gr",
    "source": "local_gratis"
  },
  {
    "barcode": "0071164333464",
    "name": "Hask Repair Series Saç Bakım Kremi 236 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "0071164343173",
    "name": "Hask Keratin Protein Şampuan 355 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "0071164343272",
    "name": "Hask Keratin Protein Saç Kremi 355 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "0077315009042",
    "name": "Dax Wave and Groom Wax 99 gr",
    "source": "local_gratis"
  },
  {
    "barcode": "0077315009059",
    "name": "Dax Short and Neat Saç Şekillendirici 99 gr",
    "source": "local_gratis"
  },
  {
    "barcode": "0077315009103",
    "name": "Dax Supergro Saç Bakım Yağı 198 gr",
    "source": "local_gratis"
  },
  {
    "barcode": "0077315009104",
    "name": "Dax Supergro Saç Bakım Yağı 198 gr",
    "source": "local_watsons"
  },
  {
    "barcode": "0077315009110",
    "name": "Dax Supergro Erkekler İçin Saç Bakım Yağı 198 gr",
    "source": "local_gratis"
  },
  {
    "barcode": "0079400204455",
    "name": "Toni&Guy Saç Kremi Blonde Hair 250 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "0083078001445",
    "name": "Carmex Vişne Dudak Balmı 10 g",
    "source": "local_watsons"
  },
  {
    "barcode": "0083078001902",
    "name": "Carmex Çilek Dudak Balmı 10 g",
    "source": "local_watsons"
  },
  {
    "barcode": "0083078007133",
    "name": "Carmex Stick Dudak Balmı Şeftali ve Mango Spf15 10 g",
    "source": "local_watsons"
  },
  {
    "barcode": "0083078421144",
    "name": "Carmex Orijinal Dudak Balmı 10 g",
    "source": "local_watsons"
  },
  {
    "barcode": "0083078911171",
    "name": "Carmex Stick Dudak Balmı Klasik Spf15 4.25 g",
    "source": "local_watsons"
  },
  {
    "barcode": "0083800047840",
    "name": "M.Jeunesse Animal Yüz Maskesi Panda",
    "source": "local_watsons"
  },
  {
    "barcode": "0083800052714",
    "name": "M.Jeunesse Animal Yüz Maskesi Unicorn",
    "source": "local_watsons"
  },
  {
    "barcode": "0083800061358",
    "name": "M.Jeunesse Marshmallow Fluff Yüz Maskesi",
    "source": "local_watsons"
  },
  {
    "barcode": "0086001105228",
    "name": "Resh Lab Airy Waterproof Sun Stick 22 gr",
    "source": "local_rossmann"
  },
  {
    "barcode": "0309970197841",
    "name": "Revlon ColorSilk Beautiful Color Saç Boyası 66 Vişne Kırmızı",
    "source": "local_gratis"
  },
  {
    "barcode": "0309976623054",
    "name": "Revlon ColorSilk Beautiful Color Saç Boyası 05 Ultra Açık Küllü Sarı",
    "source": "local_gratis"
  },
  {
    "barcode": "0309976623122",
    "name": "Revlon ColorSilk Beautiful Color Saç Boyası 12 Mavi Siyah",
    "source": "local_gratis"
  },
  {
    "barcode": "0309976623481",
    "name": "Revlon ColorSilk Beautiful Color Saç Boyası 48 Bordo",
    "source": "local_gratis"
  },
  {
    "barcode": "0309976623498",
    "name": "Revlon ColorSilk Beautiful Color Saç Boyası 49 Kızıl Kahve",
    "source": "local_gratis"
  },
  {
    "barcode": "0309976623610",
    "name": "Revlon ColorSilk Beautiful Color Saç Boyası 61 Koyu Sarı",
    "source": "local_gratis"
  },
  {
    "barcode": "0309976623818",
    "name": "Revlon ColorSilk Beautiful Color Saç Boyası 81 Açık Sarı",
    "source": "local_gratis"
  },
  {
    "barcode": "0309977326039",
    "name": "Revlon ColorSilk Beautiful Color Saç Boyası 03 Ultra Açık Güneş Sarısı",
    "source": "local_gratis"
  },
  {
    "barcode": "0309977326046",
    "name": "Revlon ColorSilk Beautiful Color Saç Boyası 04 Ultra Açık Doğal Sarı",
    "source": "local_gratis"
  },
  {
    "barcode": "0309978456278",
    "name": "Revlon ColorSilk Beautiful Color Saç Boyası 27 Yoğun Koyu Kahve",
    "source": "local_gratis"
  },
  {
    "barcode": "0309978456377",
    "name": "Revlon ColorSilk Beautiful Color Saç Boyası 37 Koyu Altın Kahve",
    "source": "local_gratis"
  },
  {
    "barcode": "0309978456575",
    "name": "Revlon ColorSilk Beautiful Color Saç Boyası 57 Ultra Açık Altın Kahve",
    "source": "local_gratis"
  },
  {
    "barcode": "0309978695103",
    "name": "Revlon ColorSilk Beautiful Color Saç Boyası 10 Siyah",
    "source": "local_gratis"
  },
  {
    "barcode": "0309978695110",
    "name": "Revlon ColorSilk Beautiful Color Saç Boyası 11 Siyah",
    "source": "local_gratis"
  },
  {
    "barcode": "0309978695202",
    "name": "Revlon ColorSilk Beautiful Color Saç Boyası 20 Kahverengi Siyah",
    "source": "local_gratis"
  },
  {
    "barcode": "0309978695301",
    "name": "Revlon ColorSilk Beautiful Color Saç Boyası 30 Koyu Kahve",
    "source": "local_gratis"
  },
  {
    "barcode": "0309978695318",
    "name": "Revlon ColorSilk Beautiful Color Saç Boyası 31 Koyu Kızıl Kahve",
    "source": "local_gratis"
  },
  {
    "barcode": "0309978695325",
    "name": "Revlon ColorSilk Beautiful Color Saç Boyası 32 Koyu Maun Kahve",
    "source": "local_gratis"
  },
  {
    "barcode": "0309978695332",
    "name": "Revlon ColorSilk Beautiful Color Saç Boyası 33 Koyu Doğal Kahve",
    "source": "local_gratis"
  },
  {
    "barcode": "0309978695349",
    "name": "Revlon ColorSilk Beautiful Color Saç Boyası 34 Kadife Bordo",
    "source": "local_gratis"
  },
  {
    "barcode": "0309978695400",
    "name": "Revlon ColorSilk Beautiful Color Saç Boyası 40 Orta Küllü Kahve",
    "source": "local_gratis"
  },
  {
    "barcode": "0309978695417",
    "name": "Revlon ColorSilk Beautiful Color Saç Boyası 41 Sıcak Kahve",
    "source": "local_gratis"
  },
  {
    "barcode": "0309978695424",
    "name": "Revlon ColorSilk Beautiful Color Saç Boyası 42 Orta Kızıl",
    "source": "local_gratis"
  },
  {
    "barcode": "0309978695431",
    "name": "Revlon ColorSilk Beautiful Color Saç Boyası 43 Orta Altın Kahve",
    "source": "local_gratis"
  },
  {
    "barcode": "0309978695448",
    "name": "Revlon ColorSilk Beautiful Color Saç Boyası 44 Orta Kızıl Kahve",
    "source": "local_gratis"
  },
  {
    "barcode": "0309978695455",
    "name": "Revlon ColorSilk Beautiful Color Saç Boyası 45 Canlı Kızıl",
    "source": "local_gratis"
  },
  {
    "barcode": "0309978695462",
    "name": "Revlon ColorSilk Beautiful Color Saç Boyası 46 Sıcak Kestane",
    "source": "local_gratis"
  },
  {
    "barcode": "0309978695479",
    "name": "Revlon ColorSilk Beautiful Color Saç Boyası 47 Yoğun Orta Kahve",
    "source": "local_gratis"
  },
  {
    "barcode": "0309978695509",
    "name": "Revlon ColorSilk Beautiful Color Saç Boyası 50 Açık Küllü Kahve",
    "source": "local_gratis"
  },
  {
    "barcode": "0309978695516",
    "name": "Revlon ColorSilk Beautiful Color Saç Boyası 51 Açık Kahve",
    "source": "local_gratis"
  },
  {
    "barcode": "0309978695530",
    "name": "Revlon ColorSilk Beautiful Color Saç Boyası 53 Açık Kızıl",
    "source": "local_gratis"
  },
  {
    "barcode": "0309978695547",
    "name": "Revlon ColorSilk Beautiful Color Saç Boyası 54 Açık Altın Kahve",
    "source": "local_gratis"
  },
  {
    "barcode": "0309978695554",
    "name": "Revlon ColorSilk Beautiful Color Saç Boyası 55 Açık Kızıl Kahve",
    "source": "local_gratis"
  },
  {
    "barcode": "0309978695608",
    "name": "Revlon ColorSilk Beautiful Color Saç Boyası 60 Koyu Küllü Sarı",
    "source": "local_gratis"
  },
  {
    "barcode": "0309978695707",
    "name": "Revlon ColorSilk Beautiful Color Saç Boyası 70 Küllü Sarı",
    "source": "local_gratis"
  },
  {
    "barcode": "0309978695714",
    "name": "Revlon ColorSilk Beautiful Color Saç Boyası 71 Altın Sarısı",
    "source": "local_gratis"
  },
  {
    "barcode": "0309978695738",
    "name": "Revlon ColorSilk Beautiful Color Saç Boyası 73 Şampanya Sarısı",
    "source": "local_gratis"
  },
  {
    "barcode": "0309978695745",
    "name": "Revlon ColorSilk Beautiful Color Saç Boyası 74 Doğal Orta Sarı",
    "source": "local_gratis"
  },
  {
    "barcode": "0610696515797",
    "name": "Blistex MedPlus Stick SPF 15 - Kuruyan ve Çatlayan Dudaklara Yoğun Dudak Bakımı 4.25 gr",
    "source": "local_gratis"
  },
  {
    "barcode": "0637740948370",
    "name": "Blistex Ultra 50+SPF Yüksek Koruma & Nemlendirme Vitamin ve Antioksidan İçerikli Dudak Kremi 4.25 gr",
    "source": "local_gratis"
  },
  {
    "barcode": "0637740948387",
    "name": "Blistex Lip Infusions Restore Yenileyici Dudak Bakım Kremi 3.7 gr",
    "source": "local_gratis"
  },
  {
    "barcode": "0637740948394",
    "name": "Blistex Lip Revitalizer Yenileyici & Dolgun Görünüm Sağlayan Dudak Kremi 3.7 gr",
    "source": "local_gratis"
  },
  {
    "barcode": "0637740949155",
    "name": "Blistex Lip Infusions Hydration SPF15 Dudak Bakım Kremi 3,7 gr",
    "source": "local_gratis"
  },
  {
    "barcode": "0637740949162",
    "name": "Eyewake Yaşlanma Karşıtı Göz Çevresi Bakım Jeli 30 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "0637740949384",
    "name": "Stick on Spots Sos Band - 15 Adet Akne Patch",
    "source": "local_gratis"
  },
  {
    "barcode": "0637740949414",
    "name": "Blistex Dudak Koruyucu Agave Rescue 3.7 Gr",
    "source": "local_rossmann"
  },
  {
    "barcode": "0637740949421",
    "name": "Blistex Nane ve Kavun Aromalı Dudak Bakım Kremi 4.25 gr",
    "source": "local_gratis"
  },
  {
    "barcode": "0667803002993",
    "name": "Toni&Guy Doğal Ve Mat Görünüm Veren Şekillendirici Krem Wax 75 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "0690120616192",
    "name": "Eklips Saç Fırçası Natural ZC9210B",
    "source": "local_gratis"
  },
  {
    "barcode": "0731509661026",
    "name": "Ruby Kisses Pot O’Miracle Lip Emollient Coconut 10 gr",
    "source": "local_rossmann"
  },
  {
    "barcode": "0731509668803",
    "name": "Ruby Kisses Stix O’Miracle Lip Elixir Rosehip 4.5 gr",
    "source": "local_rossmann"
  },
  {
    "barcode": "0742271477159",
    "name": "Q+A Hyalüronik Asit Serum 30 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "0792850140004",
    "name": "Burt's Bees Beeswax Lip Balm Doğal Nane Ferahlığı Dudak Bakım Kremi 4,25 gr",
    "source": "local_gratis"
  },
  {
    "barcode": "0792850892309",
    "name": "Burt's Bees Vanilla Lip Balm 4.25 gr",
    "source": "local_gratis"
  },
  {
    "barcode": "0792850906815",
    "name": "Burt's Bees Watermelon Lip Balm Dudak Bakım Kremi 4.25 gr",
    "source": "local_gratis"
  },
  {
    "barcode": "0800897271046",
    "name": "Nyx Professional Makeup Soft Matte Smushy Dudak Balmı Sassy Stuff 10",
    "source": "local_watsons"
  },
  {
    "barcode": "0800897271053",
    "name": "Nyx Professional Makeup Soft Matte Smushy Dudak Balmı Squeeze N' Sizzle 11",
    "source": "local_watsons"
  },
  {
    "barcode": "0800897271084",
    "name": "Nyx Professional Makeup Soft Matte Smushy Dudak Balmı Snuggle Szn 05",
    "source": "local_watsons"
  },
  {
    "barcode": "0800897271107",
    "name": "Nyx Professional Makeup Soft Matte Smushy Dudak Balmı She's Serving 04",
    "source": "local_watsons"
  },
  {
    "barcode": "0800897271145",
    "name": "Nyx Professional Makeup Soft Matte Smushy Dudak Balmı Silly Sippin' 12",
    "source": "local_watsons"
  },
  {
    "barcode": "0838000478887",
    "name": "TH Heaven Tiger Yüz Maskesi",
    "source": "local_watsons"
  },
  {
    "barcode": "0838000649847",
    "name": "TH Heaven Llamacorn Yüz Maskesi",
    "source": "local_watsons"
  },
  {
    "barcode": "0838000694917",
    "name": "Heaven Animal Gökkuşağı Leopar Maske 1 Adet",
    "source": "local_watsons"
  },
  {
    "barcode": "0850022820656",
    "name": "Vaseline Lip Therapy Dudak Bakım Kremi Cherry Blush 4.8 gr",
    "source": "local_gratis"
  },
  {
    "barcode": "0850066327715",
    "name": "Dermal PDRN Deep Collagen Ampoule Yüz Maskesi 23 gr",
    "source": "local_gratis"
  },
  {
    "barcode": "0860011052234",
    "name": "Resh Lab Unscented Cica Calming Daily Cream 50 ml",
    "source": "local_rossmann"
  },
  {
    "barcode": "0860011052258",
    "name": "Resh Lab Green Gentle Gel Cleanser 120 ml",
    "source": "local_rossmann"
  },
  {
    "barcode": "0860011052265",
    "name": "Resh Lab Peptide Retinol Serum 30 ml",
    "source": "local_rossmann"
  },
  {
    "barcode": "0860011052272",
    "name": "Resh Lab Daily Watery Sun Cream SPF50+ 50 ml",
    "source": "local_rossmann"
  },
  {
    "barcode": "0860012612123",
    "name": "Resh Lab Zero Balance Sensitive Balm 100 ml",
    "source": "local_rossmann"
  },
  {
    "barcode": "0860012612130",
    "name": "Resh Lab Peptide Retinol Cream 50 ml",
    "source": "local_rossmann"
  },
  {
    "barcode": "0860012612147",
    "name": "Resh Lab Dark Circle Eye Cream 20 ml",
    "source": "local_rossmann"
  },
  {
    "barcode": "0860012612161",
    "name": "Resh Lab Pearly Glow Tinted SPF50+ PA+++ Light 50 ml",
    "source": "local_rossmann"
  },
  {
    "barcode": "0860012612178",
    "name": "Resh Lab Pearly Glow Tinted SPF50+ PA+++ Dark 50 ml",
    "source": "local_rossmann"
  },
  {
    "barcode": "0882502230952",
    "name": "Eklips Natural Saç Fırçası B-1718",
    "source": "local_gratis"
  },
  {
    "barcode": "1210000800046",
    "name": "RoC Retinol Correxion Kırışıklık Giderici Serum 30 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "1210000800060",
    "name": "RoC Hassas Ciltler İçin Yüz Güneş Koruyucu SPF50 + 50 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "1210000800077",
    "name": "RoC Kırışıklık Karşıtı Yüz Güneş Koruyucu SPF50 + 50 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "1210000800084",
    "name": "RoC Leke Karşıtı Yüz Güneş Kremi SPF50+ 50 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "1210000800152",
    "name": "RoC Yüz Temizleme Köpüğü 150 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "1210000800169",
    "name": "RoC Çift Etkili Göz Makyajı Temizleyici 125 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "1210000800176",
    "name": "RoC 3’ü 1 Arada Makyaj Çıkarma Sütü 400 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "1210000800299",
    "name": "RoC Nem ve Canlılık Veren Nemlendirici 30 SPF 50 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "1210000800428",
    "name": "RoC Retinol Correxion Kırışıklık Giderici Gündüz Kremi SPF30 30 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "1210000801173",
    "name": "RoC C Vitaminli Leke Karşıtı ve Ton Eşitleyici Yüz Güneş Kremi SPF50 50 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "2050000082672",
    "name": "Eklips Natural Fön Fırçası 221",
    "source": "local_gratis"
  },
  {
    "barcode": "2050000082696",
    "name": "Eklips Natural Fön Fırçası 224",
    "source": "local_gratis"
  },
  {
    "barcode": "2050000162701",
    "name": "Eklips Siyah Profesyonel Saç Açma Fırçası",
    "source": "local_gratis"
  },
  {
    "barcode": "2050000521706",
    "name": "Life In Shea Butter Vücut Yağı 150 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "2050001222268",
    "name": "Benri Çilek Poke Cake Vücut Losyonu 500 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "2050001222275",
    "name": "Benri Ballı Layer Cake Vücut Losyonu 500 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "2050001222282",
    "name": "Benri Şeftali Pie Pops Vücut Losyonu 500 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "2050001222299",
    "name": "Benri Vanilya Iced Latte Vücut Losyonu 500 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "2050001377760",
    "name": "Bee Beauty Micellar Makyaj Temizleme Suyu Yağlı ve Karma Ciltler 400 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "2050001377777",
    "name": "Bee Beauty Micellar Makyaj Temizleme Suyu Tüm Ciltler İçin 400 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "2050001377845",
    "name": "Bee Beauty Micellar Makyaj Temizleme Suyu Hassas Ciltler İçin 400 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "2050001946041",
    "name": "Bee Beauty Wonder Food Watermelon Drop Saç Maskesi 300 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "2050001946058",
    "name": "Bee Beauty Wonder Food Aloe Vera Juice Saç Maskesi 300 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "2050002057722",
    "name": "Bee Beauty 3 Adımda Canlandırıcı Maske 13 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "2050002085381",
    "name": "Eklips Hava Basınçlı Saç Fırçası 9551B-B",
    "source": "local_gratis"
  },
  {
    "barcode": "2050002106376",
    "name": "Bee Beauty Saç Parfümü 160 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "2050002106383",
    "name": "Bee Beauty Intense Saç Parfümü 160 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "2050002321977",
    "name": "Eklips Düğüm Açıcı Saç Fırçası BD1920 (Asortili)",
    "source": "local_gratis"
  },
  {
    "barcode": "2050002710054",
    "name": "Hask Morocco Argan Yağlı Onarıcı Saç Bakım Yağı 18 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "2050002710061",
    "name": "Hask Argan Yağlı Saç Bakım Kremi Paket 50 gr",
    "source": "local_gratis"
  },
  {
    "barcode": "2050002710078",
    "name": "Hask Morocco Argan Yağlı Onarıcı Saç Kremi 355 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "2050002710085",
    "name": "Hask Argan Yağlı Şampuan 355 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "2050002710092",
    "name": "Hask Biotin Boost Hacim Saç Kremi 355 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "2050002718807",
    "name": "Hask Biotin Dolgunlaştırıcı Şampuan 355 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "2050002718814",
    "name": "Hask Bukleli Saçlar İçin Nemlendirici Saç Kremi 355 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "2050002741423",
    "name": "Bee Beauty Altın Soyulabilir Maske 10 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "2050002741430",
    "name": "Bee Beauty Mor Soyulabilir Maske 10 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "2050002741447",
    "name": "Bee Beauty Pembe Soyulabilir Maske 10 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "2050002791947",
    "name": "Eklips 3D Saç Fırçası Lila PTD3027-1",
    "source": "local_gratis"
  },
  {
    "barcode": "2050002791985",
    "name": "Eklips 3D Saç Fırçası Pembe PTD3027-3",
    "source": "local_gratis"
  },
  {
    "barcode": "2050002898394",
    "name": "Bee Beauty Kolajen Yüz Kremi Zeytin Ekstresi 50 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "2050002929616",
    "name": "Bee Beauty Kivi Hidrojel Göz Maskesi",
    "source": "local_gratis"
  },
  {
    "barcode": "2050002929623",
    "name": "Bee Beauty Kafein Hidrojel Göz Maskesi",
    "source": "local_gratis"
  },
  {
    "barcode": "2050002929630",
    "name": "Bee Beauty Karpuz Hidrojel Dudak Maskesi",
    "source": "local_gratis"
  },
  {
    "barcode": "2050002929647",
    "name": "Bee Beauty Vişne Hidrojel Dudak ve Göz Maske Seti",
    "source": "local_gratis"
  },
  {
    "barcode": "2050002929753",
    "name": "Bee Beauty Manikür Maskesi 2 x 5 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "2050002930384",
    "name": "Eklips Konik Uçlu Saç Masaj Fırçası (Asortili)",
    "source": "local_gratis"
  },
  {
    "barcode": "2050002937987",
    "name": "Bee Beauty Uyku Maskesi 2 x 5 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "2050002943704",
    "name": "Eklips Yuvarlak Saç Fırçası",
    "source": "local_gratis"
  },
  {
    "barcode": "2050002943711",
    "name": "Eklips Desenli Saç Fırçası",
    "source": "local_gratis"
  },
  {
    "barcode": "2050002944138",
    "name": "Eklips Saç Masaj Fırçası",
    "source": "local_gratis"
  },
  {
    "barcode": "2050002944145",
    "name": "Eklips Hava Basınçlı Saç Fırçası Mor",
    "source": "local_gratis"
  },
  {
    "barcode": "2050002944152",
    "name": "Eklips Üç Boyutlu Saç Fırçası Mor",
    "source": "local_gratis"
  },
  {
    "barcode": "2050002944169",
    "name": "Eklips Dalgalı Saç Tarağı",
    "source": "local_gratis"
  },
  {
    "barcode": "2050002944176",
    "name": "Eklips Üç Boyutlu Saç Fırçası Pembe",
    "source": "local_gratis"
  },
  {
    "barcode": "2050002944183",
    "name": "Eklips Hava Basınçlı Saç Fırçası Pembe",
    "source": "local_gratis"
  },
  {
    "barcode": "2050002944190",
    "name": "Eklips Fön Fırçası",
    "source": "local_gratis"
  },
  {
    "barcode": "2050002944206",
    "name": "Eklips 3'ü 1 Arada Fön Fırçası",
    "source": "local_gratis"
  },
  {
    "barcode": "2050002946095",
    "name": "Eklips Kenar Kontrol Fırçası",
    "source": "local_gratis"
  },
  {
    "barcode": "2050002948624",
    "name": "Eklips Süngerli Bigudi 10'lu",
    "source": "local_gratis"
  },
  {
    "barcode": "2050002952416",
    "name": "Eklips Isısız Saç Şekillendirme Seti",
    "source": "local_gratis"
  },
  {
    "barcode": "2050002952485",
    "name": "Eklips Kafesli Bigudi 10'lu",
    "source": "local_gratis"
  },
  {
    "barcode": "2050002952614",
    "name": "Eklips Kolay Temizlenebilir Tarak",
    "source": "local_gratis"
  },
  {
    "barcode": "2050002979000",
    "name": "Eklips Summer Saç Fırçası ve Tarak Seti (Asortili)",
    "source": "local_gratis"
  },
  {
    "barcode": "2050002981232",
    "name": "Eklips Kıvırcık Saç Fırçası",
    "source": "local_gratis"
  },
  {
    "barcode": "2050002996861",
    "name": "Eklips Saç Boyama Seti",
    "source": "local_gratis"
  },
  {
    "barcode": "2050003008952",
    "name": "Eklips Gül Aromalı Saç Açma Fırçası",
    "source": "local_gratis"
  },
  {
    "barcode": "2050003009843",
    "name": "Eklips Geniş Dişli Saç Tarağı",
    "source": "local_gratis"
  },
  {
    "barcode": "2050003013147",
    "name": "Eklips Vanilya & Karamel Kokulu Saç Açma Fırçası",
    "source": "local_gratis"
  },
  {
    "barcode": "2050003017497",
    "name": "Eklips Biyo 2'li Saç Fırçası ve Tarak",
    "source": "local_gratis"
  },
  {
    "barcode": "2050003017503",
    "name": "Eklips Slick Bun Saç Topuz Seti",
    "source": "local_gratis"
  },
  {
    "barcode": "2050003017640",
    "name": "Eklips Saç Boyama Fırçası Siyah",
    "source": "local_gratis"
  },
  {
    "barcode": "2392020006710",
    "name": "Watsons El ve Vücut Kremi Majesty 250 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "2392020007144",
    "name": "Watsons Micellar Makyaj Temizleme Suyu 400 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "2392020014395",
    "name": "Watsons Çift Fazlı Micellar Su 390 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "2392020014548",
    "name": "Watsons El Ve Vücut Kremi 220 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "2392020015866",
    "name": "Youpick Lotus Toka Büyük",
    "source": "local_watsons"
  },
  {
    "barcode": "2392020016955",
    "name": "Watsons Yoğun Onarıcı Çift Fazlı Saç Kremi 200 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "2392020017068",
    "name": "Watsons Çarkıfelek El ve Vücut Losyonu 100 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "2392020017617",
    "name": "Watsons Refresh Me Kuru Şampuan 200 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "2392020018065",
    "name": "Watsons Blossom Me Kuru Şampuan 200 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "2392020018171",
    "name": "Watsons Parlaklık Veren Besleyici Çift Fazlı Saç Kremi 200 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "2392020018256",
    "name": "Watsons Aloe Vera Jel 150 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "2392020018508",
    "name": "Watsons Yüz Temizleme Yağı 105 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "2392020018607",
    "name": "Watsons Organik Micellar Temizleme Suyu 390 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "2392020020006",
    "name": "Watsons Bronzlaştırıcı Yağ SPF10 150 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "2392020020297",
    "name": "Watsons El Kremi Ruby 50 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "2392020020686",
    "name": "Watsons Bronzlaştırıcı Sprey Hindistan Cevizi 150 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "2392020020860",
    "name": "Watsons Avokado El ve Vücut Losyonu 100 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "2392020021515",
    "name": "Watsons Love Is In The Hair Saç Spreyi Güçlü 250 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "2392020021621",
    "name": "Watsons Love Is In The Hair Milk Şampuan 300 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "2392020021706",
    "name": "Watsons Love Is In The Hair Saç Spreyi Orta Güçlü 250 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "2392020022024",
    "name": "Watsons Love Is In The Hair Milk Fön Sütü 250 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "2392020022048",
    "name": "Watsons Renew Me Kuru Şampuan 200 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "2392020022215",
    "name": "Watsons Bronzlaştırıcı Sprey Kakao Yağı 150 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "2392020025773",
    "name": "Watsons El Kremi Diamond 50 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "2392020025858",
    "name": "Watsons El Kremi Amethyst 50 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "2392020026664",
    "name": "Watsons Üzüm Çekirdeği El ve Vücut Losyonu 100 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "2392020026718",
    "name": "Watsons Love Is In The Hair Milk Kuru Şampuan 200 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "2392020026923",
    "name": "Watsons El Kremi Pearl  50 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "2392020027180",
    "name": "Watsons Love Is In The Hair Milk Saç Köpüğü 200 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "2392020027388",
    "name": "Watsons Micellar Temizleme Suyu Seyahat Boy 100 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "2392020028804",
    "name": "Watsons Bronzlaştırıcı Sprey Havuç 150 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "2392020030340",
    "name": "Watsons Saç Spreyi Ultra Güçlü 250 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "2392020030463",
    "name": "Watsons Saç Köpüğü Bukle Belirginleştirici 200 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "2392020040004",
    "name": "Unfilter Beauty Peeling Serum 30 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "2392020040011",
    "name": "Unfilter Beauty Nemlendirici Serum 30 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "2392020040028",
    "name": "Unfilter Beauty Leke Karşıtı Serum 30 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "2392020040035",
    "name": "Unfilter Beauty Canlandırıcı Göz Serumu 30 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "2392020040042",
    "name": "Unfilter Beauty Aydınlatıcı Serum 30 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "2392020040059",
    "name": "Watsons Micellar Temizleyici Jel 200 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "2392020040066",
    "name": "Watsons Micellar Arındırıcı Tonik 200 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "2392020040073",
    "name": "Watsons Tone Up Yüz Güneş Kremi SPF50+ 50 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "2392020040080",
    "name": "Watsons Çocuk Vücut Güneş Kremi Sprey SPF50+ 150 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "2392020040097",
    "name": "Watsons Vücut Vücut Güneş Kremi Sprey SPF30 150 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "2392020040103",
    "name": "Watsons Vücut Vücut Güneş Kremi Sprey SPF50+ 150 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "2392020040110",
    "name": "Watsons Sun Yüz Güneş Kremi SPF50 50 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "2392020040141",
    "name": "Watsons Yüz Temizleme Yağı 300 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "2392020040332",
    "name": "Watsons Love Is In The Hair Güçlü & Parlak Saç Bakım Kremi 250 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "2392020040349",
    "name": "Watsons Love Is In The Hair Yoğun Onarıcı Saç Bakım Kremi 250 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "2392020040387",
    "name": "Watsons Love Is In The Hair Güçlü & Parlak Şampuan 250 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "2392020040394",
    "name": "Watsons Love Is In The Hair Yoğun Onarıcı Şampuan 250 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "2392020042558",
    "name": "Watsons Dudak Bakım Kremi Blackberry Kiss 5 g",
    "source": "local_watsons"
  },
  {
    "barcode": "2392020042565",
    "name": "Watsons Dudak Bakım Kremi Cherry Kiss 5 g",
    "source": "local_watsons"
  },
  {
    "barcode": "2392020042794",
    "name": "Watsons Dudak Bakım Kremi Original 30Spf 5Gr",
    "source": "local_watsons"
  },
  {
    "barcode": "2392020042909",
    "name": "Watsons Love Is In The Hair Deniz Tuzu Şekillendirici Saç Spreyi 200 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "2392020045115",
    "name": "Watsons Saç Bakım Yağı Macademia Güçlü & Parlak 100 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "2392020045122",
    "name": "Watsons Saç Bakım Yağı Keratin Yoğun Onarıcı 100 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "2392020049137",
    "name": "Unfilter Beauty Dudak Yağı No: 02 Shiny Whisper",
    "source": "local_watsons"
  },
  {
    "barcode": "2392020049144",
    "name": "Unfilter Beauty Dudak Yağı No: 06 Glass Kiss",
    "source": "local_watsons"
  },
  {
    "barcode": "2392020049151",
    "name": "Unfilter Beauty Dudak Yağı No: 37 Pink Theory",
    "source": "local_watsons"
  },
  {
    "barcode": "2392020049168",
    "name": "Unfilter Beauty Dudak Yağı No: 71 Love Crime",
    "source": "local_watsons"
  },
  {
    "barcode": "2392020049175",
    "name": "Unfilter Beauty Dudak Yağı No: 91 Cocoa Secret",
    "source": "local_watsons"
  },
  {
    "barcode": "2392020049250",
    "name": "Watsons Bronzlaştırıcı Sprey Havuç Yağı 150 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "2392020049267",
    "name": "Watsons Bronzlaştırıcı Sprey Kakao Yağı 150 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "2399900854317",
    "name": "Watsons Vazelin Orijinal 100 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "2399900854324",
    "name": "Watsons Parfümlü Vazelin 100 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "2399900859565",
    "name": "Watsons Kuru Şampuan Fresh 200 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "2399900859572",
    "name": "Watsons Kuru Şampuan Coconut 200 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "2399900859589",
    "name": "Watsons Kuru Şampuan Tropik 200 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "2399900859596",
    "name": "Watsons Kuru Şampuan Volumizer 200 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "2399900925260",
    "name": "Watsons Çilekli Köpük Losyon 75 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "2399900925314",
    "name": "Watsons Vanilyalı Köpük Losyon 75 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "2399900967277",
    "name": "Watsons Oksidasyon Losyonu %6 50 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "2399900967284",
    "name": "Watsons Oksidasyon Losyonu %9 50 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "2399900994136",
    "name": "Watsons Saç Boyası Çıkarıcı Mendil 6 Adet",
    "source": "local_watsons"
  },
  {
    "barcode": "3086123363816",
    "name": "Bic Pure 3 Lady 3 Bıçaklı Kullan-At Kadın Tıraş Bıçağı 4'lü Paket",
    "source": "local_gratis"
  },
  {
    "barcode": "3086123519176",
    "name": "Bic Miss Soleil Sensitive 3 Bıçaklı Kadın Tıraş Bıçağı 3'lü Paket",
    "source": "local_gratis"
  },
  {
    "barcode": "3086123568365",
    "name": "Bic Miss Soleil Sensitive Aqua 3 Bıçaklı Tıraş Bıçağı 3'lü Paket",
    "source": "local_gratis"
  },
  {
    "barcode": "3086123644953",
    "name": "Bic Soleil Click 3 Sistem Kadın Tıraş Bıçağı 1+2 Kartuş",
    "source": "local_gratis"
  },
  {
    "barcode": "3086123710856",
    "name": "Bic Soleil Escape 3 Bıçaklı Tıraş Bıçağı 3'lü Paket",
    "source": "local_gratis"
  },
  {
    "barcode": "3086127500934",
    "name": "Bic Twin Lady 2 Bıçaklı Kullan-At Kadın Tıraş Bıçağı 5'li Paket",
    "source": "local_gratis"
  },
  {
    "barcode": "3401348840422",
    "name": "Bioderma Sebium Hydra Kurutucu Akne Tedavisi Gören Ciltler Seramid İçeren Yoğun Nemlendirici Bakım Kremi 40 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "3401360157514",
    "name": "BIODERMA SEBIUM GÖZENEK SIKILAŞTIRICI TONİK 200 ML",
    "source": "local_watsons"
  },
  {
    "barcode": "3401381507565",
    "name": "Bioderma Sensibio Foaming Gel Hassas ve Normal Ciltler için Durulanan Micellar Yüz Temizleme Jeli 200 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "3500465001446",
    "name": "Guinot Hydra Yüz Temizleme Kremi 150 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "3500465002009",
    "name": "Guinot Hydra Nemlendirici Temizleme Sütü 200 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "3500465002108",
    "name": "Guinot Hydra Normal Ciltler İçin Tonik Losyon 200 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "3500465003020",
    "name": "Guinot Hydra Yüz Temizleme Sütü 200 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "3500465003129",
    "name": "Guinot Hydra Kuru Ciltler İçin Tonik Losyon 200 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "3500465003259",
    "name": "Guinot Microbiotic Yüz Temizleme Köpüğü 150 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "3500465003303",
    "name": "Guinot Hydra Yüz Temizleme Jeli 125 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "3500465004508",
    "name": "Guinot Bioxygene Oksijenlendirici Yüz Kremi 50 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "3500465004607",
    "name": "Guinot Bioxygene Oksijenlendirici Yüz Maskesi 50 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "3500465005505",
    "name": "Guinot Dynamisant Anti-Fatigue Yüz Maskesi 50 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "3500465006502",
    "name": "Guinot Bioxygene Yüz Temizleme Köpüğü 150 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "3500465008001",
    "name": "Guinot Fermete Firming Yoğun Sıkılaştırıcı Yüz Kremi 50 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "3500465009503",
    "name": "Guinot Confort Levres Dudak Balmı 15 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "3500465014279",
    "name": "Guinot Microbiotic Arındırıcı Yüz Losyonu 200 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "3500465015450",
    "name": "Guinot NeuroLife Influx Konsantre Yüz Serumu 30 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "3500465015528",
    "name": "Guinot Longue Vie+ Anti-Aging Yüz Serumu 30 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "3500465015603",
    "name": "Guinot Leke Karşıtı Konsantre Yüz Serumu 30 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "3500465015733",
    "name": "Guinot Nouvelle Vie Yüz Serumu 30 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "3500465015825",
    "name": "Guinot Age Logic Gece Yüz Serumu 30 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "3500465017003",
    "name": "Guinot Fermete Firming Sıkılaştırıcı Yüz Kremi 50 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "3500465018505",
    "name": "Guinot Longue Vie+ Erkek Yüz Kremi 50 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "3500465022106",
    "name": "Guinot Express Yeux Eye Göz Makyaj Temizleyici 125 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "3500465027231",
    "name": "Guinot Age Logic Yüz Kremi 50 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "3500465027705",
    "name": "Guinot Onarıcı Koruyucu Yüz Kremi 50 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "3500465027804",
    "name": "Guinot Red Logic Kızarıklık Karşıtı Yüz Kremi 30 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "3500465027941",
    "name": "Guinot Nutrizone Besleyici Yüz Kremi 50 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "3500465028030",
    "name": "Guinot Hydra Beaute Yüz Kremi 50 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "3500465028344",
    "name": "Guinot Nutri Confort Besleyici Yüz Kremi 50 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "3500465029334",
    "name": "Guinot Pleine Vie Yüz Kremi 50 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "3500465029532",
    "name": "Guinot Pure Balance Dengeleyici Yüz Kremi 50 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "3500465034000",
    "name": "Guinot Nouvelle Vie Yüz Kremi 50 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "3500465034253",
    "name": "Guinot Longue Vie+ Kırışıklık Karşıtı Yüz Maskesi 50 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "3500465034260",
    "name": "Guinot Longue Vie+ Yüz Kremi 50 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "3500465036226",
    "name": "Guinot Biologic Peeling Jeli 50 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "3500465036400",
    "name": "Guinot Eclat Parfait Peeling Kremi 50 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "3500465037865",
    "name": "Guinot Nutri Confort Besleyici Yüz Maskesi 50 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "3500465038015",
    "name": "Guinot Age Logic Zengin Yüz Kremi 50 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "3500465038237",
    "name": "Guinot Kırışıklık Karşıtı Yüz Maskesi 50 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "3500465038244",
    "name": "Guinot Pure Balance Dengeleyici Yüz Maskesi 50 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "3500465038442",
    "name": "Guinot Hydra Beaute Yüz Maskesi 50 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "3500465045006",
    "name": "Guinot Kırışıklık Karşıtı Yüz Kremi 50 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "3500465046003",
    "name": "Guinot Yoğun Kırışıklık Karşıtı Yüz Kremi 50 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "3500465048731",
    "name": "Guinot Lift Eclat Aydınlatıcı Konsantre Yüz Serumu 2 Ampul x 1 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "3500465049608",
    "name": "Guinot Liftosome Yüz Kremi 50 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "3500465050505",
    "name": "Guinot Nutri Cellulaire Yüz Serumu 30 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "3500465051007",
    "name": "Guinot Newhite Aydınlatıcı Tonik Losyon 200 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "3500465054008",
    "name": "Guinot Newhite Aydınlatıcı Yüz Gece Kremi 50 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "3500465055005",
    "name": "Guinot Newhite Aydınlatıcı SPF30 Yüz Gündüz Kremi 50 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "3500465055302",
    "name": "Guinot Hydra Peeling Konsantre Yüz Serumu 4 x 3 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "3500465059003",
    "name": "Guinot Misel Yüz ve Göz Temizleme Suyu 200 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "3500465060443",
    "name": "Guinot Hydrazone Yüz Kremi 50 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "3500465060658",
    "name": "Guinot Hydrazone Nemlendirici Yüz Kremi 50 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "3500465062003",
    "name": "Guinot Newhite Aydınlatıcı Yüz Temizleme Köpüğü 150 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "3500465068708",
    "name": "Guinot Hydra Finish SPF15 Yüz Kremi 30 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "3500465068951",
    "name": "Guinot Hydra Summum Yüz Maskesi 50 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "3500465069002",
    "name": "Guinot Hydra Summum Yüz Kremi 50 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "3500465069200",
    "name": "Guinot Youth Perfect Finish SPF50 Yüz Kremi 30 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "3500465069309",
    "name": "Guinot Cover Finish Kapatıcı Yüz Kremi 15 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "3500465071005",
    "name": "Guinot Bioxygene Oksijenlendirici Yüz Serumu 30 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "3500465072002",
    "name": "Guinot Hydrazone Akışkan Yüz Kremi 50 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "3500465073009",
    "name": "Guinot Age Summum Yüz Kremi 50 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "3500465073108",
    "name": "Guinot Age Immune Yüz Serumu 30 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "3500465073207",
    "name": "Guinot Age Summum Anti-Ageing Yüz Maskesi 50 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "3500465073306",
    "name": "Guinot Age Summum Yüz Peelingi 50 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "3500465073405",
    "name": "Guinot Life Influx Yeux Eye Göz Konsantre Serum 15 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "3500465073504",
    "name": "Guinot Hydrazone Yüz Serumu 30 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "3500465074006",
    "name": "Guinot Pur Confort SPF15 Besleyici Yüz Kremi 50 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "3500465074600",
    "name": "Guinot Night Logic Yüz Gece Kremi 50 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "3500465075201",
    "name": "Guinot Beaute Neuve Yenileyici Yüz Kremi 50 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "3500465075409",
    "name": "Guinot Beaute Neuve Yenileyici Yüz Maskesi 50 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "3500465122653",
    "name": "Guinot Longue Vie Mains El Kremi 75 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "3500465122806",
    "name": "Guinot Longue Vie Pieds Ayak Kremi 125 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "3500465170104",
    "name": "Guinot Longue Vie Soleil SPF15 Vücut Güneş Losyonu 150 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "3500465170203",
    "name": "Guinot Hydrazone Yatıştırıcı Nemlendirici Vücut Jeli 150 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "3500465170302",
    "name": "Guinot Hydrazone Kademeli Bronzlaştırıcı Yüz Kremi 50 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "3500465273539",
    "name": "Guinot Longue Vie+ Göz Kremi 15 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "3500465273607",
    "name": "Guinot Eye Summum Göz Balmı 15 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "3500465273812",
    "name": "Guinot Hydrazone Göz Krem Serumu 15 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "3500465273928",
    "name": "Guinot Anti-Fatigue Yeux Eye Göz Maskesi 30 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "3500465273935",
    "name": "Guinot Age Logic Göz Maskesi 4 Saşe",
    "source": "local_gratis"
  },
  {
    "barcode": "3500465274437",
    "name": "Guinot Hydra Yeux Nazik Göz Temizleme Jeli 125 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "3500465274536",
    "name": "Guinot Longue Vie Levres Dudak Balmı 15 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "3500465275106",
    "name": "Guinot Eye Fresh Göz Kremi 15 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "3500465275533",
    "name": "Guinot Longue Vie Cou Boyun Kremi 30 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "3500465275854",
    "name": "Guinot Hydra Sensitive Hassas Cilt Yüz Kremi 50 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "3500465275908",
    "name": "Guinot Hydra Sensitive Hassas Cilt Yüz Maskesi 50 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "3500465276226",
    "name": "Guinot Hydra Sensitive Hassas Cilt Yüz Serumu 30 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "3500465276301",
    "name": "Guinot Liftosome Yüz Serumu 30 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "3500465279142",
    "name": "Guinot Longue Vie+ Corps Vücut Kremi 200 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "3500465282005",
    "name": "Guinot Mirific Anti-Age Vücut Yağı 90 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "3500465282012",
    "name": "Guinot Jambes Legeres Bacaklar İçin Bakım Jeli 150 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "3500465282111",
    "name": "Guinot Slim Thermic+ Vücut Kremi 125 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "3500465282203",
    "name": "Guinot Firm Logic Sıkılaştırıcı Vücut Kremi 200 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "3500465282302",
    "name": "Guinot Slim Firm Vücut Bakım Konsantre Seti 2 x 80 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "3500465282609",
    "name": "Guinot Peau D'Orange Peel Skin Vücut Peelingi 200 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "3500465282708",
    "name": "Guinot Hydrazone Nemlendirici Vücut Losyonu 200 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "3500465282807",
    "name": "Guinot Hydrazone Vücut Balmı 200 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "3500465290321",
    "name": "Guinot Age Logic Göz Kremi 15 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "3500465290918",
    "name": "Guinot Acnilogic Yüz Serum-Kremi 30 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "3500465306305",
    "name": "Guinot Lift Summum Yüz Serumu 30 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "3500465492220",
    "name": "Guinot Lift Summum Yüz Kremi 50 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "3500465705108",
    "name": "Guinot Slim Logic Sıkılaştırıcı Vücut Kremi 125 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "3574660085563",
    "name": "Neutrogena Limited Edition Dudak Nemlendiricisi 4,8 gr",
    "source": "local_gratis"
  },
  {
    "barcode": "3574661287218",
    "name": "Neutrogena Yüz Kremi Hydro Boost Water gel Nemlendirici Normal Ciltler İçin 50 ml",
    "source": "local_rossmann"
  },
  {
    "barcode": "3574661332529",
    "name": "Neutrogena Sivilce Karşıtı Peeling Arındırıcı Yüz Temizleme Jeli 150 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "3574661392448",
    "name": "Neutrogena Hydro Boost Jel Vücut Kremi 200 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "3574661420547",
    "name": "Neutrogena Hızlı Emilen Vücut Spreyi 200 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "3574661430720",
    "name": "Neutrogena Skin Detox Serinletici Peeling Jel 150 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "3574661430768",
    "name": "Neutrogena Skin Detox Arındırıcı Kil Maskesi 150 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "3574661450933",
    "name": "Neutrogena Hydro Boost Micellar Water Makyaj Temizleme Suyu 400 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "3574661498478",
    "name": "Neutrogena Visibly Clear Siyah Nokta Temizleyici Peeling 150 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "3574661504889",
    "name": "Neutrogena Canlandırıcı Yüz Temizleme Jeli 200 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "3574661526065",
    "name": "Neutrogena Hydro Boost Jel El Kremi 75 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "3574661527062",
    "name": "Neutrogena Soothing Clear Yüz Temizleme Köpüğü 150 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "3574661533544",
    "name": "Neutrogena Yüz Kremi Kuru Cilt Hydro Boost 50 ml",
    "source": "local_rossmann"
  },
  {
    "barcode": "3574661533551",
    "name": "Neutrogena Hydro Boost Konsantre Nemlendirici Krem 50 ml Yoğun Yüz Kremi",
    "source": "local_watsons"
  },
  {
    "barcode": "3574661543833",
    "name": "Neutrogena Canlandırıcı Günlük Peeling Jel 150 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "3574661552293",
    "name": "Neutrogena Hydro Boost Water Gel Nemlendirici Normal Ciltler İçin 50 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "3574661552880",
    "name": "Neutrogena Skin Detox Üç Etkili Micellar Temizleme Suyu 400 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "3574661610344",
    "name": "Neutrogena Besleyici Bakım El & Vücut Kremi 300 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "3574661614380",
    "name": "OGX Besleyici Coconut Milk Şampuan 385 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "3574661632926",
    "name": "Neutrogena Hydro Boost Hyaluronik Konsantre Serum 15 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "3574661648316",
    "name": "Neutrogena Dudak Nemlendiricisi SPF20",
    "source": "local_gratis"
  },
  {
    "barcode": "3574661650760",
    "name": "Neutrogena Sivilce Karşıtı Temizleme Jeli 200 ml",
    "source": "local_rossmann"
  },
  {
    "barcode": "3574661651675",
    "name": "Neutrogena Retinol Boost Yaşlanma Karşıtı Göz Kremi",
    "source": "local_rossmann"
  },
  {
    "barcode": "3574661651699",
    "name": "Neutrogena Retinal Boost Yaşlanma Karşıtı Serum",
    "source": "local_rossmann"
  },
  {
    "barcode": "3574661657387",
    "name": "Neutrogena Retinol Boost Yaşlanma Karşıtı Gündüz SPF15",
    "source": "local_rossmann"
  },
  {
    "barcode": "3574661685953",
    "name": "Neutrogena Norveç Formülü El Kremi 50 ml (Parfümlü)",
    "source": "local_gratis"
  },
  {
    "barcode": "3574661685991",
    "name": "Neutrogena El Kremi Parfümlü 75 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "3574661686509",
    "name": "Neutrogena Norveç Formülü El Kremi (Parfümsüz) 75 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "3574661687001",
    "name": "Neutrogena Norveç Formülü Hızlı Emilen El Kremi 75 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "3574661687032",
    "name": "Neutrogena El ve Tırnak Bakım Kremi 75 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "3574661688015",
    "name": "Neutrogena Retinol Boost+ Yoğun Gece Serumu 30 ml",
    "source": "local_rossmann"
  },
  {
    "barcode": "3574661688022",
    "name": "Neutrogena Retinol Boost+ Yenileyici Bakım Kremi 50 ml",
    "source": "local_rossmann"
  },
  {
    "barcode": "3574661749525",
    "name": "Neutrogena Sivilce Karşıtı Yağsız Yüz Nemlendiricisi 50 ml",
    "source": "local_rossmann"
  },
  {
    "barcode": "3574661751672",
    "name": "Neutrogena Yağ İle Zenginleştirilmiş Losyon 400 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "3574661751689",
    "name": "Neutrogena Yağ İle Zenginleştirilmiş Vücut Losyonu 250 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "3574661751818",
    "name": "Neutrogena Sivilce Karşıtı Tonik 125 ml",
    "source": "local_rossmann"
  },
  {
    "barcode": "3574661754352",
    "name": "Neutrogena Norveç Formülü Visibly Renew Sıkılaştırıcı El Kremi 75 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "3574661754369",
    "name": "Neutrogena Bakım Kremi Norveç Formülü Hızlı Emilen 200 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "3574661754390",
    "name": "Neutrogena Besleyici Bakım Kremi 200 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "3574661755328",
    "name": "Neutrogena Besleyici Bakım Kremi Norveç Formülü 300 ml",
    "source": "local_rossmann"
  },
  {
    "barcode": "3574661755397",
    "name": "Neutrogena Yoğun Bakım Kremi 200 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "3574661755403",
    "name": "Neutrogena Hızlı Emilen El ve Vücut Bakım Kremi 300 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "3574661755410",
    "name": "Neutrogena Yoğun Nemlendirici Bakım Kremi Norveç Formülü 300 ml",
    "source": "local_rossmann"
  },
  {
    "barcode": "3574661755427",
    "name": "Neutrogena Yoğun Nemlendirici Vücut Losyonu 75 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "3574661755793",
    "name": "Neutrogena Vücut Losyonu Hydroboost 400 ml",
    "source": "local_rossmann"
  },
  {
    "barcode": "3574661765976",
    "name": "Neutrogena El Kremi Parfümsüz 50 ml",
    "source": "local_rossmann"
  },
  {
    "barcode": "3574661769080",
    "name": "Neutrogena Hydro Boost Gece Kremi 50 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "3574661774633",
    "name": "Neutrogena Hydro Boost Ultra Nemlendirici Serum 30 ml",
    "source": "local_rossmann"
  },
  {
    "barcode": "3574661774671",
    "name": "Neutrogena Hydro Boost SPF 50 Güneş Koruyucu Nemlendirici 50 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "3574661783369",
    "name": "Neutrogena Yoğun Nemlendirici Vücut Losyonu 250 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "3574661789941",
    "name": "Neutrogena Hydro Boost Parfümsüz Jel Temizleyici 200 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "3574661794402",
    "name": "Neutrogena Göz Kremi Hydroboost 15 ml",
    "source": "local_rossmann"
  },
  {
    "barcode": "3574661794587",
    "name": "Aveeno Rahatlatıcı ve Onarıcı El Kremi Kuru Ciltler 75 ml",
    "source": "local_rossmann"
  },
  {
    "barcode": "3574661795522",
    "name": "Ogx Kuru Ve Sertleşmiş Saçlar İçin Yenileyici Extra Argan Yağ 100 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "3574661797625",
    "name": "Neutrogena Yüz Temizleme Jeli Deep Clean 200 ml",
    "source": "local_rossmann"
  },
  {
    "barcode": "3574661797632",
    "name": "Neutrogena Soothing Clear Micellar Makyaj Temizleme Jeli 200 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "3574661797656",
    "name": "Neutrogena Soothing Clear Zerdeçal Temizleme Köpüğü",
    "source": "local_watsons"
  },
  {
    "barcode": "3574661799032",
    "name": "Neutrogena Visibly Clear Siyah Nokta Temizleyici Peeling 150 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "3574661799735",
    "name": "Neutrogena Akne Karşıtı Yağsız Yüz Nemlendirici 50 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "3574661799759",
    "name": "Neutrogena Sivilce Karşıtı Serum 30 ml",
    "source": "local_rossmann"
  },
  {
    "barcode": "3574661799780",
    "name": "Neutrogena Deep Clean Ferahlatıcı Peeling Jel 150 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "3574661800783",
    "name": "Neutrogena Onarıcı Bakım Cica El Kremi 50 ml",
    "source": "local_rossmann"
  },
  {
    "barcode": "3574661803296",
    "name": "Neutrogena Visibly Clear Siyah Nokta Karşıtı Tonik 200 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "3574661804132",
    "name": "Neutrogena Akne Karşıtı Yağsız Yüz Temizleme Jeli 200 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "3574661805290",
    "name": "Neutrogena Yoğun Nem Vücut Losyonu Parfümlü 400 ml",
    "source": "local_rossmann"
  },
  {
    "barcode": "3574661805405",
    "name": "Neutrogena Deep Moisture Parfümsüz Vücut Losyonu 400 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "3574661805412",
    "name": "Neutrogena Cica Onarıcı Bakım Vücut Losyonu 400 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "3574661805429",
    "name": "Neutrogena Norveç Formülü Visibly Renew Sıkılaştırıcı Vücut Losyonu 400 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "3574661805900",
    "name": "OGX Saç Kremi Rosemary Mint 385 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "3574661805931",
    "name": "Ogx Şampuan Rosemary Mint, 385 ml",
    "source": "local_rossmann"
  },
  {
    "barcode": "3574661813868",
    "name": "Neutrogena Hydro Boost Niacinamide Serum 30 ml",
    "source": "local_rossmann"
  },
  {
    "barcode": "3574661814766",
    "name": "OGX Saç Bakım Maskesi Brazilian Keratin Smooth 300 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "3574661818344",
    "name": "Neutrogena Hydro Boost Temizleme Jeli 200 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "3574661818450",
    "name": "Ogx Bond Protein Repair Bağ Onarıcı Şampuan 385 ml",
    "source": "local_rossmann"
  },
  {
    "barcode": "3574661818467",
    "name": "Ogx Bond Protein Repair Bağ Onarıcı Saç Kremi 385 ml",
    "source": "local_rossmann"
  },
  {
    "barcode": "3574661818474",
    "name": "Ogx Bond Protein Repair Bağ Onarıcı Saç Bakım Serumu 50 ml",
    "source": "local_rossmann"
  },
  {
    "barcode": "3574661818481",
    "name": "Ogx Bond Protein Repair 3 Etkili Sprey Yağ 50 ml",
    "source": "local_rossmann"
  },
  {
    "barcode": "3574661818924",
    "name": "OGX Saç Bakım Maskesi Bond Protein Repair 200 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "3574661821276",
    "name": "Neutrogena Onarıcı Çok Amaçlı CICA Bakım El ve Vücut Kremi 400 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "3574661824086",
    "name": "Ogx Argan Oil of Morocco Ekstra Güçlü Nemlendirici ve Canlandırıcı Şampuan, 385 ml",
    "source": "local_rossmann"
  },
  {
    "barcode": "3574661824093",
    "name": "Ogx Argan Oil of Morocco Ekstra Güçlü Nemlendirici ve Canlandırıcı Saç Kremi, 385 ml",
    "source": "local_rossmann"
  },
  {
    "barcode": "3574661825618",
    "name": "OGX Kırılma Karşıtı Keratin Oil Şampuan 385 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "3574661826653",
    "name": "Ogx Dolgunlaştırıcı Biotin ve Kolajen Bakım Kremi, 385 ml",
    "source": "local_rossmann"
  },
  {
    "barcode": "3574661829470",
    "name": "Ogx Coconut Curl Şampuan, 385 ml",
    "source": "local_rossmann"
  },
  {
    "barcode": "3574661831008",
    "name": "Ogx Dolgunlaştırıcı Biotin ve Kolajen Şampuan, 385 ml",
    "source": "local_rossmann"
  },
  {
    "barcode": "3574661831435",
    "name": "Ogx Isıya Karşı Koruyucu Sprey Bond Protein Repair 193 ml",
    "source": "local_rossmann"
  },
  {
    "barcode": "3574661833583",
    "name": "Neutrogena Onarıcı Bakım Dudak Kremi 15 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "3574661836553",
    "name": "Ogx Düzleştirici Brazilian Keratin Smooth Bakım Kremi, 385 ml",
    "source": "local_rossmann"
  },
  {
    "barcode": "3574661839271",
    "name": "Neutrogena Clear & Defend Ultra Thin Blemish Patch Sivilce Bandı 24’lü",
    "source": "local_rossmann"
  },
  {
    "barcode": "3574661839424",
    "name": "Ogx Düzleştirici Brazilian Keratin Smooth Şampuan, 385 ml",
    "source": "local_rossmann"
  },
  {
    "barcode": "3574661840314",
    "name": "Neutrogena Collagen Bank Nemlendirici Gece Kremi 50 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "3574661840376",
    "name": "Neutrogena Collagen Bank Nemlendirici Gündüz Kremi 30SPF 50 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "3574661843797",
    "name": "Neutrogena Sivilce Karşıtı SOS Sivilce Jeli 15 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "3574661852034",
    "name": "Ogx Yıpranma Karşıtı Coconut Miracle Oil Şampuan, 385 ml",
    "source": "local_rossmann"
  },
  {
    "barcode": "3574661864297",
    "name": "Neutrogena Collagen Bank Canlandırıcı Jel Göz Kremi 15 gr",
    "source": "local_gratis"
  },
  {
    "barcode": "3574661867946",
    "name": "Ogx Biotin ve Collagen Dolgunlaştırıcı Şampuan + Argan Oil of Morocco Saç Bakım Yağı Set, 1 Adet",
    "source": "local_rossmann"
  },
  {
    "barcode": "3574661867953",
    "name": "Ogx Argan Oil of Morocco Onarıcı Şampuan + Argan Oil of Morocco Saç Bakım Yağı Set, 1 Adet",
    "source": "local_rossmann"
  },
  {
    "barcode": "3574661868370",
    "name": "Ogx Brezilya Keratin Şampuan & Argan Yağı, 385 ml + 100 ml",
    "source": "local_rossmann"
  },
  {
    "barcode": "3574661870328",
    "name": "OGX Pro Growth Peptide Dökülme Karşıtı Saç Derisi Serumu 10 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "3574661874890",
    "name": "Neutrogena Ultra Sheer Yüz Güneş Fluid SPF50 Yaşlanma Karşıtı 50 ml",
    "source": "local_rossmann"
  },
  {
    "barcode": "3574661875132",
    "name": "Neutrogena Ultra Sheer Nemlendirici SPF50 Yüz Güneş Kremi 50 ml",
    "source": "local_rossmann"
  },
  {
    "barcode": "3574661875170",
    "name": "Neutrogena Ultra Sheer Yüz Güneş Kremi Fluid SPF50 Nemlendirici 50 ml",
    "source": "local_rossmann"
  },
  {
    "barcode": "3574661875262",
    "name": "Neutrogena Ultra Sheer Yüz Güneş Kremi Fluid SPF50 Yağlanma Karşıtı 50 ml",
    "source": "local_rossmann"
  },
  {
    "barcode": "3574661875279",
    "name": "Neutrogena Ultra Sheer Vücut Güneş Losyon SPF30 Nemlenlendirici 200 ml",
    "source": "local_rossmann"
  },
  {
    "barcode": "3574661875439",
    "name": "Neutrogena Ultra Sheer Vücut Güneş Losyon SPF50 Nemlendirici 200 ml",
    "source": "local_rossmann"
  },
  {
    "barcode": "3574661876412",
    "name": "OGX Pro Growth Peptide Dökülme Karşıtı Bakım Kremi 385 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "3574661876450",
    "name": "OGX Pro Growth Peptide Dökülme Karşıtı Şampuan 385 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "3574661876740",
    "name": "Neutrogena Makyaj Temizleme Mendili 25'li",
    "source": "local_gratis"
  },
  {
    "barcode": "3574661876832",
    "name": "Neutrogena Hydro Boost Makyaj Temizleme Mendili 25 Adet",
    "source": "local_gratis"
  },
  {
    "barcode": "3574661879093",
    "name": "OGX Sprey Serum Pürüzsüzleştirici 193 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "3574661881607",
    "name": "OGX Pro Growth Peptide Dökülme Karşıtı Sprey Serum 193 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "3574661881614",
    "name": "OGX Sprey Serum Dolgunlaştırıcı 193 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "3574661891873",
    "name": "Aveeno Rahatlatıcı Bakım Vücut Losyonu 300 ml",
    "source": "local_rossmann"
  },
  {
    "barcode": "3574661895802",
    "name": "Johnson's Baby Bebek Yağı 200 ml",
    "source": "local_rossmann"
  },
  {
    "barcode": "3574661897943",
    "name": "Neutrogena Collagen Bank Dudak Dolgunlaştırıcı Balm 12 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "3574669907224",
    "name": "Johnson's Baby Şampuan Işıldayan Parlaklık 500 ml",
    "source": "local_rossmann"
  },
  {
    "barcode": "3600522029946",
    "name": "L'Oreal Paris Age Perfect Intense Gündüz Kremi 50 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "3600522365044",
    "name": "Loreal Paris Revitalift Lazer X3 Yoğun Yaşlanma Karşıtı Gündüz Bakım Kremi 50 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "3600522480082",
    "name": "Loreal Paris Revitalift Lazer X3 Yoğun Yaşlanma Karşıtı Gece Bakım Kremi 50 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "3600523036332",
    "name": "Loreal Paris Elseve Mucizevi Yağ Saç Güzelleştirici Krem 150 ml (Kuru ve Sert Saçlar)",
    "source": "local_gratis"
  },
  {
    "barcode": "3600523036349",
    "name": "Loreal Paris Elseve Mucizevi Yağ Saç Güzelleştirici Krem 150 ml (Her Saç Tipi)",
    "source": "local_gratis"
  },
  {
    "barcode": "3600523193332",
    "name": "Loreal Paris Magic Retouch Beyazlar İçin Anında Kapatıcı Sprey Siyah 75 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "3600523193349",
    "name": "Loreal Paris Magic Retouch Beyazlar İçin Anında Kapatıcı Sprey Koyu Kahverengi 75 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "3600523193356",
    "name": "Loreal Paris Magic Retouch Beyazlar İçin Anında Kapatıcı Sprey Kahverengi 75 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "3600523193363",
    "name": "Loreal Paris Magic Retouch Beyazlar İçin Anında Kapatıcı Sprey Kumral 75 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "3600523388158",
    "name": "Loreal Paris Magic Retouch Beyazlar İçin Anında Kapatıcı Sprey Altın Kahve 75 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "3600523424894",
    "name": "Loreal Paris Nem Terapisi Aloe Vera Suyu Normalden Karmaya Ciltler 70 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "3600523424900",
    "name": "Loreal Paris Nem Terapisi Aloe Vera Suyu Normalden Kuruya Ciltler 70 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "3600523436088",
    "name": "Loreal Paris Revitalift Lazer X3 Yaşlanma Karşıtı Göz Bakım Kremi 15 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "3600523456253",
    "name": "Loreal Paris Revitalift Lazer X3 Leke ve Kırışıklık Karşıtı Bakım Kremi 25GKF 50 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "3600523464692",
    "name": "Loreal Paris Nem Terapisi Aloe Vera Suyu Kuru ve Hassas Ciltler 70 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "3600523473960",
    "name": "Loreal Paris Yaş Uzmanı 35+ Kırışıklık Karşıtı Nemlendirici Krem 50 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "3600523473977",
    "name": "Loreal Paris Yaş Uzmanı 45+ Kırışıklık Karşıtı Sıkılaştırıcı Krem 50 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "3600523699148",
    "name": "Loreal Paris Elseve Turunculaşma Karşıtı Mor Şampuan 200 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "3600523763856",
    "name": "Elseve Maske Dream Long Uzun Saç Kurtarıcı 300ml",
    "source": "local_rossmann"
  },
  {
    "barcode": "3600523763863",
    "name": "Loreal Paris Elseve Dream Long Bye-Bye Makas Saç Bakım Kremi 200 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "3600523913350",
    "name": "Elseve Mor Maske 150 ml",
    "source": "local_rossmann"
  },
  {
    "barcode": "3600523916429",
    "name": "Elseve Saç Bakım Kremi Bukle Belirginleştirici 200 ml",
    "source": "local_rossmann"
  },
  {
    "barcode": "3600523970926",
    "name": "Loreal Paris Elseve Dream Long Mükemmel Düz Pürüzsüzleştirici Saç Serumu 100 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "3600523972029",
    "name": "Loreal Paris Revitalift Lazer Saf Retinol Gece Serumu 30 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "3600523996933",
    "name": "Loreal Paris Yaş Uzmanı 55+ Kırışıklık Karşıtı Yenileyici Krem 50 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "3600523997299",
    "name": "Loreal Paris Yaş Uzmanı 65+ Kırışıklık Karşıtı Besleyici Krem 50 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "3600523998784",
    "name": "Loreal Paris Excellence Creme Nude Renkler Saç Boyası - 3U Nude Koyu Kahve",
    "source": "local_gratis"
  },
  {
    "barcode": "3600523998791",
    "name": "Loreal Paris Excellence Creme Nude Renkler Saç Boyası - 4U Nude Kahve",
    "source": "local_gratis"
  },
  {
    "barcode": "3600523998814",
    "name": "Loreal Paris Excellence Creme Nude Renkler Saç Boyası - 6U Nude Koyu Kumral",
    "source": "local_gratis"
  },
  {
    "barcode": "3600523998838",
    "name": "Loreal Paris Excellence Creme Nude Renkler Saç Boyası - 7U Nude Kumral",
    "source": "local_gratis"
  },
  {
    "barcode": "3600523998845",
    "name": "Loreal Paris Excellence Creme Nude Renkler Saç Boyası - 8U Nude Koyu Sarı",
    "source": "local_gratis"
  },
  {
    "barcode": "3600523998869",
    "name": "Loreal Paris Excellence Creme Nude Renkler Saç Boyası - 10U Nude Açık Sarı",
    "source": "local_gratis"
  },
  {
    "barcode": "3600524000028",
    "name": "Loreal Paris Elseve Mucizevi Yağ Canlandırıcı Saç Serumu 100 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "3600524000035",
    "name": "Loreal Paris Elseve Mucizevi Yağ Besleyici Saç Serumu 100 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "3600524003036",
    "name": "L’Oréal Paris Dermo Revitalift Filler Göz Kremi 15 ml",
    "source": "local_rossmann"
  },
  {
    "barcode": "3600524003050",
    "name": "Loreal Paris Revitalift Filler Yoğun Dolgunlaştırıcı Hyaluronik Asit Yaşlanma Karşıtı Gündüz Kremi 5",
    "source": "local_gratis"
  },
  {
    "barcode": "3600524003067",
    "name": "L'Oreal Paris Revitalift Filler Yaşlanma Karşıtı Serum 30 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "3600524042615",
    "name": "Loreal Paris Yaş Uzmanı 50+ Kırışıklık Karşıtı Yenileyici Gece Kremi 50 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "3600524042622",
    "name": "Loreal Paris Yaş Uzmanı 45+ Kırışıklık Karşıtı Sıkılaştırıcı Gece Kremi 50 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "3600524055059",
    "name": "Loreal Paris Revitalift Filler Göz Serumu 20 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "3600524059149",
    "name": "Loreal Paris Elseve Hydra Hyaluronic 72 Saat Nem İle Dolgunlaştıran Maske 300 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "3600524059156",
    "name": "Loreal Paris Elseve Hydra Hyaluronic Nem İle Dolgunlaştıran Serum 150 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "3600524061265",
    "name": "Loreal Paris Üç Etkili Nemlendirici Krem 50 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "3600524067328",
    "name": "L'Oreal Paris Wrinkle Expert Gündüz Kremi 50 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "3600524069728",
    "name": "L’Oréal Paris Revitalift Clinical Güneş Kremi SPF 50+50 ml",
    "source": "local_rossmann"
  },
  {
    "barcode": "3600524069780",
    "name": "Loreal Paris Revitalift Clinical %12 Saf C Vitamini Aydınlatıcı Serum 30 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "3600524070090",
    "name": "Loreal Paris Revitalift Clinical Anında Aydınlatıcı C Vitamini Serum Maske",
    "source": "local_gratis"
  },
  {
    "barcode": "3600524076061",
    "name": "Loreal Paris Revitalift Clinical C Vitamini + Salisilik Asit Aydınlatıcı ve Gözenek Karşıtı Köpük Te",
    "source": "local_gratis"
  },
  {
    "barcode": "3600524099442",
    "name": "Elseve Şampuan Komple Onarıcı 5 Extreme 300 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "3600524103934",
    "name": "Loreal Paris Revitalift %5 Saf Glikolik Asit Peeling Etkili Tonik 180 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "3600524105297",
    "name": "Elseve 10 Etki 1 Arada Saç Güzelleştirici Sprey Serum 150 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "3600524119904",
    "name": "Loreal Paris Bright Reveal Güneş, Yaşlanma Lekelerinde Etkili Koyu Leke Karşıtı Serum 30 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "3600524121945",
    "name": "Loreal Paris Excellence Cool Creme Saç Boyası 5.11 Ekstra Küllü Açık Kahve",
    "source": "local_gratis"
  },
  {
    "barcode": "3600524121952",
    "name": "Loreal Paris Excellence Cool Creme Saç Boyası 6.11 Ekstra Küllü Koyu Kumral",
    "source": "local_gratis"
  },
  {
    "barcode": "3600524121969",
    "name": "Loreal Paris Excellence Cool Creme Saç Boyası 7.11 Ekstra Küllü Kumral",
    "source": "local_gratis"
  },
  {
    "barcode": "3600524121976",
    "name": "Loreal Paris Excellence Cool Creme Saç Boyası 8.11 Ekstra Küllü Sarı",
    "source": "local_gratis"
  },
  {
    "barcode": "3600524121983",
    "name": "Loreal Paris Excellence Cool Creme Saç Boyası 3.11 Ekstra Küllü Koyu Kahve",
    "source": "local_gratis"
  },
  {
    "barcode": "3600524121990",
    "name": "Loreal Paris Excellence Cool Creme Saç Boyası 4.11 Ekstra Küllü Kahve",
    "source": "local_gratis"
  },
  {
    "barcode": "3600524122065",
    "name": "L’Oréal Paris Excellence Pure Blonde Saç Boyası Ultra Açık Küllü Sarı 03",
    "source": "local_rossmann"
  },
  {
    "barcode": "3600524122072",
    "name": "Loreal Paris Excellence Pure Blonde Saç Boyası - 01 Ultra Açık Doğal Sarı",
    "source": "local_gratis"
  },
  {
    "barcode": "3600524122096",
    "name": "Loreal Paris Excellence Creme Saç Boyası - 6 Açık Kahve",
    "source": "local_gratis"
  },
  {
    "barcode": "3600524122102",
    "name": "Loreal Paris Excellence Creme Saç Boyası - 5 Kahve",
    "source": "local_gratis"
  },
  {
    "barcode": "3600524122119",
    "name": "Loreal Paris Excellence Creme Saç Boyası - 4 Koyu Kahve",
    "source": "local_gratis"
  },
  {
    "barcode": "3600524122126",
    "name": "Loreal Paris Excellence Creme Saç Boyası - 2 Siyah",
    "source": "local_gratis"
  },
  {
    "barcode": "3600524122133",
    "name": "L’Oréal Paris Excellence Creme Saç Boyası Altın Açık Kahve 6.32",
    "source": "local_rossmann"
  },
  {
    "barcode": "3600524122157",
    "name": "Loreal Paris Excellence Creme Saç Boyası - 1.01 Derin Siyah",
    "source": "local_gratis"
  },
  {
    "barcode": "3600524122164",
    "name": "Loreal Paris Excellence Creme Saç Boyası - 7.43 Sultan Bakırı",
    "source": "local_gratis"
  },
  {
    "barcode": "3600524122171",
    "name": "L’Oréal Paris Excellence Creme Saç Boyası Büyüleyici Kahve 4.15",
    "source": "local_rossmann"
  },
  {
    "barcode": "3600524122188",
    "name": "Loreal Paris Excellence Creme Saç Boyası - 7.31 Bal Köpüğü",
    "source": "local_gratis"
  },
  {
    "barcode": "3600524122195",
    "name": "Loreal Paris Excellence Creme Saç Boyası - 6.35 Çikolata Kahve",
    "source": "local_gratis"
  },
  {
    "barcode": "3600524122201",
    "name": "Loreal Paris Excellence Creme Saç Boyası - 5.15 Efsanevi Türk Kahvesi",
    "source": "local_gratis"
  },
  {
    "barcode": "3600524122218",
    "name": "Loreal Paris Excellence Creme Saç Boyası - 10 Açık Sarı",
    "source": "local_gratis"
  },
  {
    "barcode": "3600524122232",
    "name": "Loreal Paris Excellence Creme Saç Boyası - 6.1 Küllü Açık Kahve",
    "source": "local_gratis"
  },
  {
    "barcode": "3600524122249",
    "name": "Loreal Paris Excellence Creme Saç Boyası - 9.1 Sarı Küllü",
    "source": "local_gratis"
  },
  {
    "barcode": "3600524122256",
    "name": "Loreal Paris Excellence Creme Saç Boyası - 8 Koyu Sarı",
    "source": "local_gratis"
  },
  {
    "barcode": "3600524122263",
    "name": "Loreal Paris Excellence Creme Saç Boyası - 7.1 Küllü Kumral",
    "source": "local_gratis"
  },
  {
    "barcode": "3600524122287",
    "name": "Loreal Paris Excellence Creme Saç Boyası - 9 Sarı",
    "source": "local_gratis"
  },
  {
    "barcode": "3600524122294",
    "name": "Loreal Paris Excellence Creme Saç Boyası - 8.1 Küllü Koyu Sarı",
    "source": "local_gratis"
  },
  {
    "barcode": "3600524122300",
    "name": "Loreal Paris Excellence Creme Saç Boyası - 7 Kumral",
    "source": "local_gratis"
  },
  {
    "barcode": "3600524122317",
    "name": "Loreal Paris Excellence Creme Saç Boyası - 7.3 Altın Kumral",
    "source": "local_gratis"
  },
  {
    "barcode": "3600524122324",
    "name": "Loreal Paris Excellence Creme Saç Boyası - 3 Koyu Kestane",
    "source": "local_gratis"
  },
  {
    "barcode": "3600524122331",
    "name": "Loreal Paris Excellence Creme Saç Boyası - 6.41 Fındık Kahve",
    "source": "local_gratis"
  },
  {
    "barcode": "3600524122737",
    "name": "L'Oréal Paris Bright Reveal Spf 50+ Koyu Leke Karşıtı Yüz Güneş Kremi 50 ml",
    "source": "local_rossmann"
  },
  {
    "barcode": "3600524135744",
    "name": "Loreal Paris Elseve Ultimate Glycolic Gloss Mükemmel Parlaklık İçin Pürüzsüzleştirici Saç Kremi 150",
    "source": "local_gratis"
  },
  {
    "barcode": "3600524144210",
    "name": "Loreal Paris Elseve Ultimate Glycolic Gloss Parlaklığı Saça Mühürleyen Laminasyon 200 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "3600524144227",
    "name": "Loreal Paris Elseve Ultimate Glycolic Gloss Mükemmel Parlaklık İçin Bakım Yapan Şampuan 200 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "3600524162511",
    "name": "L'Oreal Paris Age Perfect Duo Yaşlanma Karşıtı Serum 30 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "3600524165161",
    "name": "Loreal Paris Revitalift Cilt Yenileme Etkili Temizleme Jeli 150 ml (Glikolik Asit)",
    "source": "local_gratis"
  },
  {
    "barcode": "3600524165246",
    "name": "Loreal Paris Revitalift Dolgunlaştırıcı Temizleme Jeli 150 ml (Hyaluronik Asit)",
    "source": "local_gratis"
  },
  {
    "barcode": "3600524169688",
    "name": "Loreal Paris Revitalift Clinical Aydınlatıcı & Gözenek Pürüzsüzleştirici C Vitamini Krem 50 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "3600524172275",
    "name": "Loreal Paris Elseve Hydra Hyaluronic Pure Salisilik Asit İçeren Yağlanma Karşıtı Arındırıcı Şampuan 300 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "3600524172282",
    "name": "Loreal Paris Elseve Hydra Hyaluronic Pure Salisilik Asit İçeren Yağlanma Karşıtı Nemlendirici Saç Ba",
    "source": "local_gratis"
  },
  {
    "barcode": "3600524172718",
    "name": "L'Oreal Paris Plump Ambition Hyaluron Dudak Yağı No: 101",
    "source": "local_watsons"
  },
  {
    "barcode": "3600524172732",
    "name": "L'Oreal Paris Plump Ambition Hyaluron Dudak Yağı No: 601",
    "source": "local_watsons"
  },
  {
    "barcode": "3600524172749",
    "name": "L'Oreal Paris Plump Ambition Hyaluron Dudak Yağı No: 641",
    "source": "local_watsons"
  },
  {
    "barcode": "3600524172787",
    "name": "L'Oreal Paris Plump Ambition Hyaluron Dudak Yağı No: 380",
    "source": "local_watsons"
  },
  {
    "barcode": "3600524172794",
    "name": "L'Oreal Paris Plump Ambition Hyaluron Dudak Yağı No: 390",
    "source": "local_watsons"
  },
  {
    "barcode": "3600524172800",
    "name": "L'Oreal Paris Plump Ambition Hyaluron Dudak Yağı No: 510",
    "source": "local_watsons"
  },
  {
    "barcode": "3600524185411",
    "name": "L’Oréal Paris Serum Dermo Collagen Expert 30 ml",
    "source": "local_rossmann"
  },
  {
    "barcode": "3600524186234",
    "name": "Loreal Paris Revitalift Lazer Eyebag Instant Eraser Göz Altı Torba Görünümüne Karşı Etkili Göz Kremi",
    "source": "local_gratis"
  },
  {
    "barcode": "3600524186852",
    "name": "L'Oreal Paris Bright Reveal Renkli Yüz Güneş Kremi SPF50+ 50 ml Light Koyu Leke Karşıtı",
    "source": "local_watsons"
  },
  {
    "barcode": "3600524186968",
    "name": "L’Oréal Paris Bright Reveal Spf 50+ Koyu Leke Karşıtı Fluid Günlük Yüz Güneş Kremi Medium 50ml",
    "source": "local_rossmann"
  },
  {
    "barcode": "3600524187064",
    "name": "L'Oreal Paris Bright Reveal SPF50+ Ultra Kremi Ultra Pratik Yüz Stick Güneş Koruyucu 9 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "3600524192044",
    "name": "Loreal Paris Revitalift C Vitamini Gözenek Görünümü Karşıtı Peeling Etkili Tonik 180 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "3600524196554",
    "name": "Loreal Paris Elseve Growth Booster Dökülme Karşıtı Şampuan 200 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "3600524197643",
    "name": "Loreal Paris Revitalift Lazer Yaşlanma Belirtileri Karşıtı Üçlü Peptit Bakım Serumu 30 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "3600524205935",
    "name": "Loreal Paris Magic Retouch Beyazlar İçin Anında Kapatıcı Sprey Sarı 75 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "3600524213244",
    "name": "Loreal Paris Elseve Dream Long 230 Derece Isıya Karşı Koruyucu & Pürüzsüzleştirici Sprey Serum 150 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "3600524216559",
    "name": "Loreal Paris Excellence Creme Saç Boyası - 5.02 Bronz Kahve",
    "source": "local_gratis"
  },
  {
    "barcode": "3600524216566",
    "name": "Loreal Paris Excellence Creme Saç Boyası - 200 Yoğun Siyah",
    "source": "local_gratis"
  },
  {
    "barcode": "3600524216610",
    "name": "Loreal Paris Excellence Creme Saç Boyası - 6.3 Açık Karamel",
    "source": "local_gratis"
  },
  {
    "barcode": "3600524216627",
    "name": "Loreal Paris Excellence Creme Nude Renkler Saç Boyası - 5UR Nude Kızıl",
    "source": "local_gratis"
  },
  {
    "barcode": "3600524216634",
    "name": "Loreal Paris Excellence Creme Nude Renkler Saç Boyası - 4UR Nude Koyu Kızıl",
    "source": "local_gratis"
  },
  {
    "barcode": "3600524216658",
    "name": "Loreal Paris Excellence Creme Saç Boyası - 6.54 Açık Kızıl Kahve",
    "source": "local_gratis"
  },
  {
    "barcode": "3600524216665",
    "name": "Loreal Paris Excellence Creme Saç Boyası - 4.54 Koyu Kızıl",
    "source": "local_gratis"
  },
  {
    "barcode": "3600524216672",
    "name": "Loreal Paris Excellence Creme Saç Boyası - 5.3 Koyu Karamel",
    "source": "local_gratis"
  },
  {
    "barcode": "3600524223175",
    "name": "Loreal Paris Elseve Komple Direnç Dökülme Karşıtı Bakım Şampuanı 300 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "3600524223182",
    "name": "Loreal Paris Elseve Hydra Hyaluronic Nem Dolduran Bakım Şampuanı 300 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "3600524223199",
    "name": "Loreal Paris Elseve Komple Direnç Dökülme Karşıtı Saç Bakım Kremi 250 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "3600524223205",
    "name": "Loreal Paris Elseve Komple Onarıcı 5 Yapılandırıcı Saç Bakım Kremi 250 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "3600524223229",
    "name": "Loreal Paris Elseve Mucizevi Yağ Besleyici Saç Bakım Kremi 250 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "3600524223236",
    "name": "Loreal Paris Elseve Hydra Hyaluronic Nem Dolduran Saç Bakım Kremi 250 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "3600524223243",
    "name": "Loreal Paris Elseve Dream Long Kolay Tarama Saç Bakım Kremi 250 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "3600524223267",
    "name": "Loreal Paris Elseve Colorvive Renk Koruyucu Saç Bakım Kremi 250 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "3600524223298",
    "name": "Loreal Paris Elseve Komple Onarıcı 5 Yapılandırıcı Bakım Şampuanı 300 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "3600524223304",
    "name": "Loreal Paris Elseve Mucizevi Yağ Besleyici Bakım Şampuanı 300 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "3600524223311",
    "name": "Loreal Paris Elseve Dream Long Kırık Uç Onarıcı Bakım Şampuanı 300 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "3600524223328",
    "name": "Loreal Paris Elseve Color Vive Renk Koruyucu Bakım Şampuanı 300 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "3600524227586",
    "name": "L'Oreal Paris Age Perfect Kolajen Yüz Temizleme Jeli 150 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "3600524229023",
    "name": "Loreal Paris Elseve Glycolic Gloss Mükemmel Parlaklık Veren Saç Bakım Sprey Serumu 150 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "3600524237202",
    "name": "Loreal Paris Elseve Glycolic Gloss Parlaklık Veren Bakım Şampuanı 300 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "3600524237219",
    "name": "Loreal Paris Elseve Glycolic Gloss Parlaklık Veren Saç Bakım Kremi 250 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "3600524240653",
    "name": "Loreal Paris Elseve Growth Booster Dökülme Karşıtı Saç Bakım Kremi 150 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "3600524240684",
    "name": "Loreal Paris Elseve Growth Booster Dökülme Karşıtı Saç Derisi Serumu 102 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "3600524244422",
    "name": "Loreal Paris Revitalift Filler Glassy Skin Cam Cilt Görünümü Veren Nemlendirici Yüz Kremi 50 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "3600524244583",
    "name": "Loreal Dermo Revitalift Filler Hyaluronik Asit Krem Spf30 40 ml",
    "source": "local_rossmann"
  },
  {
    "barcode": "3600524244668",
    "name": "Loreal Paris Revitalift Clinical C Vitamini İçeren Renkli Işıltılı SPF30 Nemlendirici Yüz Güneş Kremi 40 ml",
    "source": "local_rossmann"
  },
  {
    "barcode": "3600524246693",
    "name": "Loreal Paris Elseve Mucizevi Yağ Besleyici Saç Bakım Maskesi 300 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "3600524246884",
    "name": "Loreal Paris Elseve Glycolic Gloss Mükemmel Parlaklık Veren Saç Bakım Maskesi 300 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "3600524250232",
    "name": "Loreal Paris Elseve Collagen Lifter (Kolajen Peptitleri) İçeren Hacim Veren Yenileyici Saç Spreyi 20",
    "source": "local_gratis"
  },
  {
    "barcode": "3600524251468",
    "name": "Loreal Paris Elseve Collagen Lifter (Kolajen Peptitleri) İçeren Hacim Veren Saç Bakım Şampuanı 300 m",
    "source": "local_gratis"
  },
  {
    "barcode": "3600524251574",
    "name": "Loreal Paris Elseve Collagen Lifter (Kolajen Peptitleri) İçeren Hacim Veren Saç Bakım Kremi 250 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "3600524259686",
    "name": "Loreal Paris Revitalift Glassy Skin Cam Cilt Görünümü Etkili Şeffaflaşan Işıltı & Nem Veren Hidrojel",
    "source": "local_gratis"
  },
  {
    "barcode": "3600524282189",
    "name": "L'Oreal Paris Elseve Dream Long Kırık Uç Onarıcı Şampuan 700 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "3600524282202",
    "name": "Elseve Hydra Hyaluronic Nem Dolduran Bakım Şampuanı",
    "source": "local_rossmann"
  },
  {
    "barcode": "3600524282240",
    "name": "L'Oreal Paris Elseve Mucizevi Yağ Besleyici Bakım Şampuanı 700 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "3600524294120",
    "name": "Loreal Paris Revitalift Filler Hyalüronik Asit +PDRN İçeren Dolgunlaştırıcı Yenileyici Nemlendirici Yüz Serumu 30 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "3600531700379",
    "name": "Maybelline Grippy Cilde Makyajı Sabitleyen Serum Makyaj Bazı 30 ml",
    "source": "local_rossmann"
  },
  {
    "barcode": "3600531721428",
    "name": "MAYBELLINE FACE SUMMER SHOT INT",
    "source": "local_rossmann"
  },
  {
    "barcode": "3600540685100",
    "name": "Garnier Saf & Temiz 3'ü 1 Arada Peeling 150 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "3600541181045",
    "name": "Garnier Ambre Solaire Yüz ve Vücut Seyahat Boy Güneş Koruyucu Süt SPF30 50 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "3600541358553",
    "name": "Garnier Micellar Kusursuz Makyaj Temizleme Suyu 400 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "3600541361331",
    "name": "Garnier Göz Makyaj Temizleyici 125 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "3600541744486",
    "name": "Garnier Çift Fazlı Micellar Kusursuz Makyaj Temizleme Suyu 400 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "3600541938533",
    "name": "Garnier Micellar Makyaj Temizleme Suyu 700 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "3600542098113",
    "name": "Garnier Besleyici Çift Fazlı Micellar Temizleme Suyu 400 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "3600542154840",
    "name": "Garnier Nem Bombası Göz Altı Torbalarına Karşı Kağıt Göz Maskesi",
    "source": "local_gratis"
  },
  {
    "barcode": "3600542326858",
    "name": "Garnier Micellar Gül Suyu Kusursuz Makyaj Temizleme & Işıltı 400 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "3600542365956",
    "name": "Garnier Arındırıcı Micellar Makyaj Temizleme Suyu 400 ml",
    "source": "local_rossmann"
  },
  {
    "barcode": "3600542380492",
    "name": "Garnier C Vitamini Parlaklık Verici Kağıt Yüz Maskesi 28 gr",
    "source": "local_gratis"
  },
  {
    "barcode": "3600542384254",
    "name": "Garnier Çarpıcı Renkler Saç Boyası 3.0 Çarpıcı Kahve",
    "source": "local_watsons"
  },
  {
    "barcode": "3600542384339",
    "name": "Garnier Çarpıcı Renkler Saç Boyası Buzlu Kestane No: 4,15",
    "source": "local_watsons"
  },
  {
    "barcode": "3600542384377",
    "name": "Garnier Çarpıcı Renkler Saç Boyası Yoğun Koyu Kızıl No: 4,60",
    "source": "local_watsons"
  },
  {
    "barcode": "3600542384414",
    "name": "Garnier Çarpıcı Renkler Saç Boyası Parlak Açık Kahve No: 5,0",
    "source": "local_watsons"
  },
  {
    "barcode": "3600542384452",
    "name": "Garnier Çarpıcı Renkler Saç Boyası Parlak Lal Kızılı No: 5,62",
    "source": "local_watsons"
  },
  {
    "barcode": "3600542384490",
    "name": "Garnier Çarpıcı Renkler Saç Boyası Yoğun Koyu Kumral No: 6,0",
    "source": "local_watsons"
  },
  {
    "barcode": "3600542384537",
    "name": "Garnier Çarpıcı Renkler Saç Boyası 6.35 Çarpıcı Altın Kahve",
    "source": "local_watsons"
  },
  {
    "barcode": "3600542384698",
    "name": "Garnier Çarpıcı Renkler Saç Boyası 111 Ekstra Açık Gümüş Sarısı",
    "source": "local_watsons"
  },
  {
    "barcode": "3600542384773",
    "name": "Garnier Çarpıcı Renkler Saç Boyası Yoğun Kumral No: 7",
    "source": "local_watsons"
  },
  {
    "barcode": "3600542384810",
    "name": "Garnier Çarpıcı Renkler Saç Boyası 8 Parlak Koyu Sarı",
    "source": "local_watsons"
  },
  {
    "barcode": "3600542384865",
    "name": "Garnier Çarpıcı Renkler Saç Boyası 1.0 Ekstra Yoğun Siyah",
    "source": "local_watsons"
  },
  {
    "barcode": "3600542385312",
    "name": "Garnier Nem Bombası Canlandırıcı Kağıt Maske 28 gr",
    "source": "local_gratis"
  },
  {
    "barcode": "3600542385329",
    "name": "Garnier Nem Bombası Ferahlatıcı Kağıt Maske 28 gr",
    "source": "local_gratis"
  },
  {
    "barcode": "3600542385336",
    "name": "Garnier Nem Bombası Dinlendirici Kağıt Maske 28 gr",
    "source": "local_gratis"
  },
  {
    "barcode": "3600542387323",
    "name": "Garnier Çarpıcı Renkler Saç Boyası Yoğun Kahve No: 4,0",
    "source": "local_watsons"
  },
  {
    "barcode": "3600542396592",
    "name": "Garnier Hyaluron Micellar Kusursuz Makyaj Temizleme Suyu 400 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "3600542413619",
    "name": "Garnier Dudak Nemlendirici Bakım Maskesi",
    "source": "local_gratis"
  },
  {
    "barcode": "3600542433341",
    "name": "Garnier C Vitamini Parlak Süper Aydınlatıcı Serum 30 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "3600542449601",
    "name": "Garnier C Vitamini  3 Etki 1 Arada SPF 25 Serum Krem 50 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "3600542461696",
    "name": "Garnier 2 Milyon Probiyotik Türevi İçeren Onarıcı Kağıt Yüz Maskesi",
    "source": "local_gratis"
  },
  {
    "barcode": "3600542461740",
    "name": "Garnier 1/2 Milyon Probiyotik Türevi İçeren Onarıcı Kağıt Göz Maskesi",
    "source": "local_gratis"
  },
  {
    "barcode": "3600542467667",
    "name": "Garnier Micellar C Vitamini Kusursuz Makyaj Temizleme Suyu 400 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "3600542488082",
    "name": "Garnier Saf&Temiz Nemlendiren Temizleyici 250 ml",
    "source": "local_rossmann"
  },
  {
    "barcode": "3600542497947",
    "name": "Garnier AHA + BHA Kömür Cilt Kusurlarına Karşı Serum 30 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "3600542500517",
    "name": "Garnier Hyaluronik Kriyojel Yorgunluk Karşıtı Soğutucu Göz Maskesi",
    "source": "local_gratis"
  },
  {
    "barcode": "3600542500586",
    "name": "Garnier Hyaluronik Kriyojel Yorgunluk Karşıtı Soğutucu Yüz Maskesi",
    "source": "local_gratis"
  },
  {
    "barcode": "3600542514170",
    "name": "Garnier C Vitamini Parlak Aydınlatıcı Göz Kremi 15 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "3600542541633",
    "name": "Garnier C Vitamini Süper Aydınlatıcı Gece Serumu 30 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "3600542545259",
    "name": "Garnier Pro-Retinol Pürüzsüzleştirici Kağıt Maske",
    "source": "local_gratis"
  },
  {
    "barcode": "3600542568685",
    "name": "Garnier Micellar Kusursuz Makyaj Temizleme Suyu 100 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "3600542569040",
    "name": "Garnier C Vitamini Parlak Aydınlatıcı Göz Maskesi",
    "source": "local_gratis"
  },
  {
    "barcode": "3600542572934",
    "name": "Garnier C Vitamini Parlak Günlük Güneş Koruyucu Görünmez Doku SPF50+ 40 ml",
    "source": "local_rossmann"
  },
  {
    "barcode": "3600542573030",
    "name": "Garnier C Vitamini Parlak Günlük Güneş Koruyucu Işıltılı Doku SPF50+ 40 ml",
    "source": "local_rossmann"
  },
  {
    "barcode": "3600542586047",
    "name": "Garnier Hyalüronik Aloe Nemlendiren ve Yatıştıran Temizleyici 250 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "3600542586078",
    "name": "Garnier C Vitamini Parlaklık Veren Temizleyici 250 ml",
    "source": "local_rossmann"
  },
  {
    "barcode": "3600542597814",
    "name": "Garnier Saf ve Temiz BHA Niasinamid Günlük Yüz Güneş Kremi SPF50+ 40 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "3600542612937",
    "name": "Garnier C Vitamini Parlak Günlük Aydınlatıcı Nemlendirici Krem 50ml",
    "source": "local_watsons"
  },
  {
    "barcode": "3600542620376",
    "name": "Garnier Color Shampoo Retouch Şampuan Kolaylığında Dip Boyası Sarı 7.0 1 Adet",
    "source": "local_rossmann"
  },
  {
    "barcode": "3600542620383",
    "name": "Garnier Color Shampoo Retouch Şampuan Kolaylığında Dip Boyası Siyah 2.0 1 Adet",
    "source": "local_rossmann"
  },
  {
    "barcode": "3600542620390",
    "name": "Garnier Color Shampoo Retouch Şampuan Kolaylığında Dip Boyası Kahve 4.0 1 Adet",
    "source": "local_rossmann"
  },
  {
    "barcode": "3600542620406",
    "name": "Garnier Color Shampoo Retouch Şampuan Kolaylığında Dip Boyası Açık Kahve 5.0 1 adet",
    "source": "local_rossmann"
  },
  {
    "barcode": "3600542626941",
    "name": "Garnier Color Sensation Saç Boyası 8.11 Küllü İnci Kumral",
    "source": "local_rossmann"
  },
  {
    "barcode": "3600542626958",
    "name": "Garnier Color Sensation Saç Boyası 7.40 Tarçın Bakır",
    "source": "local_rossmann"
  },
  {
    "barcode": "3600542628419",
    "name": "Garnier Vitamin C Parlaklık Etkili Tonik 120 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "3600542628501",
    "name": "Garnier Hyaluron Bariyer Onarıcı Tonik 120 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "3600542628600",
    "name": "Garnier Saf & Temiz Salisilik Sivilce İzi Karşıtı Gözenek Sıkılaştırıcı Peeling Tonik 120 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "3600542629805",
    "name": "Garnier Color Sensation Saç Boyası HL1 Açık Kumral",
    "source": "local_rossmann"
  },
  {
    "barcode": "3600542629812",
    "name": "Garnier Color Sensation Saç Boyası HL2 Koyu Sarı",
    "source": "local_rossmann"
  },
  {
    "barcode": "3600542629829",
    "name": "Garnier Color Sensation Saç Boyası HL3 Sarı",
    "source": "local_rossmann"
  },
  {
    "barcode": "3600542630337",
    "name": "Garnier Color Sensation Saç Boyası S9 Küllü Platin Sarı",
    "source": "local_rossmann"
  },
  {
    "barcode": "3600542630344",
    "name": "Garnier Color Sensation Saç Boyası 112 5.35 Çikolata Kahve",
    "source": "local_rossmann"
  },
  {
    "barcode": "3600542630351",
    "name": "Garnier Color Sensation Saç Boyası 7.11 Küllü Kumral",
    "source": "local_rossmann"
  },
  {
    "barcode": "3600542630368",
    "name": "Garnier Color Sensation Saç Boyası 7.3 Altın Kumral",
    "source": "local_rossmann"
  },
  {
    "barcode": "3600542637558",
    "name": "Garnier Hyalüron+ Bariyer Onarıcı Serum Yüz Maskesi 28 gr",
    "source": "local_gratis"
  },
  {
    "barcode": "3600542658195",
    "name": "Garnier Salisilik Clinical Sivilce Karşıtı Serum 30 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "3600542658416",
    "name": "Garnier C Vitamini Wonder Tint 3 Etki 1 Arada Renkli Nemlendirici Açık Ton SPF50 40 ml",
    "source": "local_rossmann"
  },
  {
    "barcode": "3600542658492",
    "name": "Garnier C Vitamini Wonder Tint 3 Etki 1 Arada Renkli Nemlendirici Orta Ton SPF50 40 ml",
    "source": "local_rossmann"
  },
  {
    "barcode": "3600542658881",
    "name": "Garnier Salisilik Serum Maske Cilt Kusurları Karşıtı, 1 Adet",
    "source": "local_rossmann"
  },
  {
    "barcode": "3600542661706",
    "name": "Garnier Salisilik Micellar Makyaj Temizleme Suyu 400 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "3600542663069",
    "name": "Garnier C Vitamini Fresh & Bright Aydınlatıcı Sorbe Yüz Kremi 85 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "3600542663250",
    "name": "Garnier Hyaluron Fresh & Plump Dolgunlaştıran Nemlendirici Sorbe Yüz Kremi 85 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "3600542663342",
    "name": "Garnier Salisilik Fresh & Matte Sivilce İzi Karşıtı Nemlendirici Sorbe Yüz Kremi 85 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "3614229714029",
    "name": "Wella Koleston Naturals Saç Boyası Çarpıcı Bakır 6/34",
    "source": "local_watsons"
  },
  {
    "barcode": "3614229714074",
    "name": "Koleston Naturals Saç Boyası 3/66 Kızıl Kestane 115 ml",
    "source": "local_rossmann"
  },
  {
    "barcode": "3614229714081",
    "name": "Wella Koleston Naturals Saç Boyası 5/37 Orta Kestane",
    "source": "local_gratis"
  },
  {
    "barcode": "3614229714111",
    "name": "Wella Koleston Naturals Saç Boyası 3/4 Koyu Kestane",
    "source": "local_gratis"
  },
  {
    "barcode": "3614229714128",
    "name": "Wella Koleston Naturals Saç Boyası 4/0 Kahve",
    "source": "local_gratis"
  },
  {
    "barcode": "3614229714135",
    "name": "Wella Koleston Naturals Saç Boyası 2/8 Böğürtlen Siyahı",
    "source": "local_gratis"
  },
  {
    "barcode": "3614229714142",
    "name": "Wella Koleston Naturals Saç Boyası 5/0 Açık Kahve",
    "source": "local_gratis"
  },
  {
    "barcode": "3614229714159",
    "name": "Wella Koleston Naturals Saç Boyası 7/3 Karamel Kumral",
    "source": "local_gratis"
  },
  {
    "barcode": "3614229714166",
    "name": "Wella Koleston Naturals Saç Boyası 11/7 Vanilya Sarısı",
    "source": "local_gratis"
  },
  {
    "barcode": "3614229714173",
    "name": "Wella Koleston Naturals Saç Boyası 6/0 Koyu Kumral",
    "source": "local_gratis"
  },
  {
    "barcode": "3614229714180",
    "name": "Wella Koleston Naturals Saç Boyası 8/1 Açık Küllü Kumral",
    "source": "local_gratis"
  },
  {
    "barcode": "3614229714197",
    "name": "Wella Koleston Naturals Saç Boyası 7/1 Küllü Kumral",
    "source": "local_gratis"
  },
  {
    "barcode": "3614229714203",
    "name": "Wella Koleston Naturals Saç Boyası 2/0 Siyah",
    "source": "local_gratis"
  },
  {
    "barcode": "3614229714210",
    "name": "Wella Koleston Naturals Saç Boyası 7/0 Kumral",
    "source": "local_gratis"
  },
  {
    "barcode": "3614229714227",
    "name": "Wella Koleston Naturals Saç Boyası 3/0 Koyu Kahve",
    "source": "local_gratis"
  },
  {
    "barcode": "3616300100240",
    "name": "Wella Koleston Naturals Saç Boyası 6/1 Büyüleyici Kahve",
    "source": "local_gratis"
  },
  {
    "barcode": "3616300100295",
    "name": "Wella Koleston Naturals Saç Boyası 8/0 Açık Kumral",
    "source": "local_gratis"
  },
  {
    "barcode": "3616300100349",
    "name": "Wella Koleston Naturals Saç Boyası 6/73 Ayışığı Kahvesi",
    "source": "local_gratis"
  },
  {
    "barcode": "3616300100394",
    "name": "Wella Koleston Naturals Saç Boyası 6/7 Çikolata Kahve",
    "source": "local_gratis"
  },
  {
    "barcode": "3616305729347",
    "name": "Rimmel London Omg Dudak Balmı 001 Latte Delight",
    "source": "local_watsons"
  },
  {
    "barcode": "3616305729354",
    "name": "Rimmel London Omg Dudak Balmı 002 Bubble Gum",
    "source": "local_watsons"
  },
  {
    "barcode": "3616305729361",
    "name": "Rimmel London Omg Dudak Balmı 005 Coral Breeze",
    "source": "local_watsons"
  },
  {
    "barcode": "3616305729378",
    "name": "Rimmel London Omg Dudak Balmı 000 Vanilla Frost",
    "source": "local_watsons"
  },
  {
    "barcode": "3616305729385",
    "name": "Rimmel London Omg Dudak Balmı 003 Mellow Mocha",
    "source": "local_watsons"
  },
  {
    "barcode": "3616305729392",
    "name": "Rimmel London Omg Dudak Balmı 004 Red Velvet",
    "source": "local_watsons"
  },
  {
    "barcode": "3616306130159",
    "name": "Calvin Klein Euphoria Kadın Parfüm Seti 100 ml EDP + 10 ml EDP + 200 ml Body Lotion",
    "source": "local_rossmann"
  },
  {
    "barcode": "3701129800553",
    "name": "Bioderma Pigmentbio Leke Karşıtı ve Peeling Etkili Aydınlatıcı Yıkama Jeli 500 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "3701129805329",
    "name": "Bioderma Atoderm Nemlendirici Krem 200 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "3701129805343",
    "name": "Bioderma Atoderm Cream Ultra Normal Kuru Cilt Yüz ve Vücut Nemlendirici Krem 500 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "3701129807385",
    "name": "Bioderma Photoderm Aquafluid Yüz Güneş Kremi SPF50+ PA++++ 40 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "3701129810033",
    "name": "Bioderma Photoderm Spot Leke Karşıtı Yüz Güneş Kremi SPF50+ PA++++ 150 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "3701129812068",
    "name": "Bioderma Sensibio H2O Hassas ve Normal Ciltler için Micellar Arındırıcı Makyaj Temizleme Suyu 250 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "3701129813614",
    "name": "Bioderma Photoderm XDefense SPF50+ Hassas&Tüm Ciltler Antioksidan Etkili Yüz Güneş Kremi PA++++ 40 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "3701129814420",
    "name": "Bioderma Sensibio H2O Hassas ve Normal Ciltler için Micellar Arındırıcı Makyaj Temizleme Suyu 500 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "3760407199628",
    "name": "Note Nemlendirici Daily Skin Perfector SPF 50 Tint 140",
    "source": "local_rossmann"
  },
  {
    "barcode": "3760407199680",
    "name": "Note Nemlendirici Daily Skin Perfector SPF 50 Tint 120",
    "source": "local_rossmann"
  },
  {
    "barcode": "3760407199741",
    "name": "Note Nemlendirici Daily Skin Perfector SPF 50 Tint 100",
    "source": "local_rossmann"
  },
  {
    "barcode": "3760420010177",
    "name": "Note Lip Oil Nemlendirici ve Parlatıcı Dudak Bakım Yağı 10 Baby Pink Pembe",
    "source": "local_watsons"
  },
  {
    "barcode": "3760420010207",
    "name": "Note Lip Oil Nemlendirici ve Parlatıcı Dudak Bakım Yağı 20 Pink For Me Pembe",
    "source": "local_watsons"
  },
  {
    "barcode": "3760420010238",
    "name": "Note Lip Oil Nemlendirici ve Parlatıcı Dudak Bakım Yağı 50 Creamy Caramel Kahverengi",
    "source": "local_watsons"
  },
  {
    "barcode": "3760420010290",
    "name": "Note Lip Oil Nemlendirici ve Parlatıcı Dudak Bakım Yağı 30 Deep Berry Mor",
    "source": "local_watsons"
  },
  {
    "barcode": "3760420010320",
    "name": "Note Lip Oil Nemlendirici ve Parlatıcı Dudak Bakım Yağı 60 Mocha Kiss Kahverengi",
    "source": "local_watsons"
  },
  {
    "barcode": "3760420010412",
    "name": "Note Lip Oil Nemlendirici ve Parlatıcı Dudak Bakım Yağı 40 Sugar Red Kırmızı",
    "source": "local_watsons"
  },
  {
    "barcode": "3760420011433",
    "name": "Note Peptide Glow SPF 30 Nemlendirici ve Parlatıcı Renkli Dudak Balmı Berry 04",
    "source": "local_watsons"
  },
  {
    "barcode": "3760420011464",
    "name": "Note Peptide Glow SPF 30 Nemlendirici ve Parlatıcı Renkli Dudak Balmı Pink Sugar 03",
    "source": "local_watsons"
  },
  {
    "barcode": "3760420011495",
    "name": "Note Peptide Glow SPF 30 Nemlendirici ve Parlatıcı Renkli Dudak Balmı Fun Day 02",
    "source": "local_watsons"
  },
  {
    "barcode": "3760420011525",
    "name": "Note Peptide Glow SPF 30 Nemlendirici ve Parlatıcı Renkli Dudak Balmı Caramel 01",
    "source": "local_watsons"
  },
  {
    "barcode": "3838824355887",
    "name": "Root Retoucher Saç Boyası Kumral 120 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "3838824355917",
    "name": "Root Retoucher Saç Boyası Kahve 120 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "3838824355948",
    "name": "Root Retoucher Saç Boyası Koyu Kahve 120 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "3838824390307",
    "name": "Palette Kalıcı Doğal Renkler Saç Boyası 4-60 Altın Kahve",
    "source": "local_gratis"
  },
  {
    "barcode": "3838824390420",
    "name": "Palette Kalıcı Doğal Renkler Saç Boyası 1-1 Gece Mavisi",
    "source": "local_gratis"
  },
  {
    "barcode": "3838824390666",
    "name": "Palette Kalıcı Doğal Renkler Saç Boyası 7-5 Açık Karamel",
    "source": "local_gratis"
  },
  {
    "barcode": "3838824408972",
    "name": "Palette Kalıcı Doğal Renkler Saç Boyası 4-0 Kahve",
    "source": "local_gratis"
  },
  {
    "barcode": "3838824409016",
    "name": "Palette Kalıcı Doğal Renkler Saç Boyası 5-0 Açık Kahve",
    "source": "local_gratis"
  },
  {
    "barcode": "3838824409054",
    "name": "Palette Kalıcı Doğal Renkler Saç Boyası 8-0 Bal Köpüğü",
    "source": "local_gratis"
  },
  {
    "barcode": "3838824409092",
    "name": "Palette Kalıcı Doğal Renkler Saç Boyası 6-0 Koyu Kumral",
    "source": "local_gratis"
  },
  {
    "barcode": "3838824409139",
    "name": "Palette Kalıcı Doğal Renkler Saç Boyası 12-1 Küllü Buzul Sarısı",
    "source": "local_gratis"
  },
  {
    "barcode": "3838824409214",
    "name": "Palette Kalıcı Doğal Renkler Saç Boyası 1-0 Siyah",
    "source": "local_gratis"
  },
  {
    "barcode": "3838824409252",
    "name": "Palette Kalıcı Doğal Renkler Saç Boyası 3-68 Kızıl Çikolata",
    "source": "local_gratis"
  },
  {
    "barcode": "3838824409290",
    "name": "Palette Kalıcı Doğal Renkler Saç Boyası 10-4 Papatya",
    "source": "local_gratis"
  },
  {
    "barcode": "3838824409375",
    "name": "Palette Kalıcı Doğal Renkler Saç Boyası 7-0 Kumral",
    "source": "local_gratis"
  },
  {
    "barcode": "3838824409412",
    "name": "Palette Saç Boyası Natural Colors 7-5 Açık Karamel 1 adet",
    "source": "local_rossmann"
  },
  {
    "barcode": "3838824409450",
    "name": "Palette Kalıcı Doğal Renkler Saç Boyası 3-0 Koyu Kahve",
    "source": "local_gratis"
  },
  {
    "barcode": "3838824409498",
    "name": "Palette Kalıcı Doğal Renkler Saç Boyası 10-0 Açık Sarı",
    "source": "local_gratis"
  },
  {
    "barcode": "3838824409535",
    "name": "Palette Kalıcı Doğal Renkler Saç Boyası 8-77 Tarçın Bakır",
    "source": "local_gratis"
  },
  {
    "barcode": "3838824409610",
    "name": "Palette Kalıcı Doğal Renkler Saç Boyası 8-16 Küllü Sarı",
    "source": "local_gratis"
  },
  {
    "barcode": "3838824409658",
    "name": "Palette Kalıcı Doğal Renkler Saç Boyası 7-60 Fındık Kahve",
    "source": "local_gratis"
  },
  {
    "barcode": "3838824409696",
    "name": "Palette Kalıcı Doğal Renkler Saç Boyası 9-7 Doğal Açık Bakır",
    "source": "local_gratis"
  },
  {
    "barcode": "3838824414539",
    "name": "Palette Göz Alıcı Renkler Saç Boyası 7-0 Kumral",
    "source": "local_gratis"
  },
  {
    "barcode": "3838824414614",
    "name": "Palette Saç Boyası Göz Alıcı Renkler 1-1 Gece Mavisi 110 ml",
    "source": "local_rossmann"
  },
  {
    "barcode": "3838824414652",
    "name": "Palette Göz Alıcı Renkler Saç Boyası 3-65 Çikolata Kahve",
    "source": "local_gratis"
  },
  {
    "barcode": "3838824414690",
    "name": "Palette Göz Alıcı Renkler Saç Boyası 1-0 Siyah",
    "source": "local_gratis"
  },
  {
    "barcode": "3838824414775",
    "name": "Palette Göz Alıcı Renkler Saç Boyası 5-68 Kestane",
    "source": "local_gratis"
  },
  {
    "barcode": "3838824414812",
    "name": "Palette Saç Boyası Göz Alıcı Renkler 8-0 Koyu Sarı",
    "source": "local_rossmann"
  },
  {
    "barcode": "3838824414836",
    "name": "Palette Göz Alıcı Renkler Saç Boyası 8-0 Koyu Sarı",
    "source": "local_gratis"
  },
  {
    "barcode": "3838824414850",
    "name": "Palette Göz Alıcı Renkler Saç Boyası 7-77 Yoğun Bakır",
    "source": "local_gratis"
  },
  {
    "barcode": "3838824414935",
    "name": "Palette Göz Alıcı Renkler Saç Boyası 3-0 Koyu Kahve",
    "source": "local_gratis"
  },
  {
    "barcode": "3838824415017",
    "name": "Palette Göz Alıcı Renkler Saç Boyası 7-1 Küllü Kumral",
    "source": "local_gratis"
  },
  {
    "barcode": "3838824415055",
    "name": "Palette Göz Alıcı Renkler Saç Boyası 10-1 Küllü Açık Sarı",
    "source": "local_gratis"
  },
  {
    "barcode": "3838824415093",
    "name": "Palette Göz Alıcı Renkler Renk Açıcı 12-21 Gümüş Sarı",
    "source": "local_gratis"
  },
  {
    "barcode": "3838824415130",
    "name": "Palette Göz Alıcı Renkler Saç Boyası 6-88 Yoğun Kızıl",
    "source": "local_gratis"
  },
  {
    "barcode": "3838824421377",
    "name": "Gliss Split Hair Miracle Sıvı Saç Kremi 200 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "3838824421414",
    "name": "Gliss Aqua Revive Nemlendirici Sıvı Saç Bakım Kremi Hyaluron ve Deniz Yosunu Özü ile 200 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "3838824421438",
    "name": "Gliss Aqua Revive Nemlendirici Sıvı Saç Bakım Kremi - Hyaluron ve Deniz Yosunu Özü ile 200 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "3838824421476",
    "name": "Gliss Supreme Length Sıvı Saç Kremi 200 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "3838824421513",
    "name": "Gliss Ultimate Repair Sıvı Saç Bakım Kremi 200 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "3838824421551",
    "name": "Gliss Oil Nutritive Sıvı Saç Bakım Kremi 200 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "3838824421599",
    "name": "Gliss Sıvı Saç Kremi Serum Deep Repair 200 ml",
    "source": "local_rossmann"
  },
  {
    "barcode": "3838824421612",
    "name": "Gliss Serum Deep Repair Onarıcı Sıvı Saç Bakım Kremi - Protein Kompleksi ve Hint İnciri ile 200 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "3838824421711",
    "name": "Gliss Ultimate Repair 4’ü 1 Arada Onarıcı & Yeniden Yapılandırıcı Bakım Maskesi 400 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "3838824421759",
    "name": "Gliss Oil Nutritive 4’ü 1 Arada Besleyici & Yeniden Yapılandırıcı Yağ Maskesi 400 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "3838824421797",
    "name": "Gliss Aqua Revive 4'ü 1 Arada Nemlendirici & Yeniden Yapılandırıcı Bakım Maskesi 400 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "3838824431178",
    "name": "Palette Deluxe Saç Boyası Blond Yoğun Renk Açıcı 50 ml",
    "source": "local_rossmann"
  },
  {
    "barcode": "3838824431291",
    "name": "Palette Deluxe Saç Boyası Elmas Grisi No: U71 50 ml",
    "source": "local_rossmann"
  },
  {
    "barcode": "3838824431352",
    "name": "Palette Deluxe Saç Boyası 6-7 Bakır Kahve 50 ml",
    "source": "local_rossmann"
  },
  {
    "barcode": "3838824431475",
    "name": "Palette Deluxe Saç Boyası Kahve No: 4-0 50 ml",
    "source": "local_rossmann"
  },
  {
    "barcode": "3838824431536",
    "name": "Palette Deluxe Saç Boyası Kahve No: 3-0 50 ml",
    "source": "local_rossmann"
  },
  {
    "barcode": "3838824431598",
    "name": "Palette Deluxe Saç Boyası Çikolata Kahve No: 3-65 50 ml",
    "source": "local_rossmann"
  },
  {
    "barcode": "3838824431659",
    "name": "Palette Deluxe Saç Boyası Siyah No: 1-0 50 ml",
    "source": "local_rossmann"
  },
  {
    "barcode": "3838824431710",
    "name": "Palette Deluxe Saç Boyası Büyüleyici Kahve No: 4-65 50 ml",
    "source": "local_rossmann"
  },
  {
    "barcode": "3838824431833",
    "name": "Palette Deluxe Saç Boyası Küllü Açık Sarı No: 10-1 50 ml",
    "source": "local_rossmann"
  },
  {
    "barcode": "3838824432014",
    "name": "Palette Deluxe Saç Boyası Gece Mavisi No: 1-1 50 ml",
    "source": "local_rossmann"
  },
  {
    "barcode": "3838824432076",
    "name": "Palette Deluxe Saç Boyası Yoğun Parlak Bakır No: 7-77 50 ml",
    "source": "local_rossmann"
  },
  {
    "barcode": "3838824432137",
    "name": "Palette Deluxe Saç Boyası Sıcak Çikolata No: 5-60 50 ml",
    "source": "local_rossmann"
  },
  {
    "barcode": "3838824432199",
    "name": "Palette Deluxe Saç Boyası Bal Köpüğü No: 8-0 50 ml",
    "source": "local_rossmann"
  },
  {
    "barcode": "3838824432250",
    "name": "Palette Deluxe Saç Boyası Şarap Kızıl No:5-889 50 ml",
    "source": "local_rossmann"
  },
  {
    "barcode": "3838824432434",
    "name": "Palette Deluxe Saç Boyası Koyu Kumral No: 6-0 50 ml",
    "source": "local_rossmann"
  },
  {
    "barcode": "3838824432496",
    "name": "Palette Deluxe Saç Boyası Yakut Kızılı No: 6-888 50 ml",
    "source": "local_rossmann"
  },
  {
    "barcode": "3838824432557",
    "name": "Palette Deluxe Saç Boyası Patlıcan Moru No: 4-99 50 ml",
    "source": "local_rossmann"
  },
  {
    "barcode": "3838824432618",
    "name": "Palette Deluxe Saç Boyası Altın Parıltı No: 6-65 50 ml",
    "source": "local_rossmann"
  },
  {
    "barcode": "3838824432670",
    "name": "Palette Deluxe Saç Boyası Asil Kumral No: 7-1 50 ml",
    "source": "local_rossmann"
  },
  {
    "barcode": "3838824432731",
    "name": "Palette Deluxe Yoğun Renkler Saç Boyası 8-01 Küllü Açık Kumral",
    "source": "local_gratis"
  },
  {
    "barcode": "3838824432854",
    "name": "Palette Deluxe Saç Boyası Kumral No: 7-0 50 ml",
    "source": "local_rossmann"
  },
  {
    "barcode": "3838824439556",
    "name": "Palette Deluxe Saç Boyası 8-5 Bej Sarı 115 ml",
    "source": "local_rossmann"
  },
  {
    "barcode": "3838824439617",
    "name": "Palette Deluxe Saç Boyası 6-11 Küllü Çikolata Kahve",
    "source": "local_gratis"
  },
  {
    "barcode": "3838824439679",
    "name": "Palette Deluxe Saç Boyası 9-5 Doğal Sarı 115 ml",
    "source": "local_rossmann"
  },
  {
    "barcode": "3838824439730",
    "name": "Palette Deluxe Saç Boyası 8-11 Küllü Soğuk Kumral",
    "source": "local_gratis"
  },
  {
    "barcode": "3838824439792",
    "name": "Palette Deluxe Saç Boyası 9-7 Açık Bakır",
    "source": "local_gratis"
  },
  {
    "barcode": "3838824439853",
    "name": "Palette Deluxe Saç Boyası 10-0 Açık Sarı 115 ml",
    "source": "local_rossmann"
  },
  {
    "barcode": "3838824441368",
    "name": "Gliss Summer Repair Sıvı Saç Kremi 200 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "3838824441443",
    "name": "Palette Işıltılı Transparan Renkler Siyah 1-0",
    "source": "local_watsons"
  },
  {
    "barcode": "3838824441481",
    "name": "Palette Işıltılı Transparan Renkler Bal Köpüğü 8-0",
    "source": "local_watsons"
  },
  {
    "barcode": "3838824441528",
    "name": "Palette Işıltılı Transparan Renkler Çikolata Kahve 3-65",
    "source": "local_watsons"
  },
  {
    "barcode": "3838824441566",
    "name": "Palette Işıltılı Transparan Renkler Kahve 4-0",
    "source": "local_watsons"
  },
  {
    "barcode": "3838824441603",
    "name": "Palette Işıltılı Transparan Renkler Vişne  Kahve 5-8",
    "source": "local_watsons"
  },
  {
    "barcode": "3838824441641",
    "name": "Palette Işıltılı Transparan Renkler Kızıl Kahve 5-8",
    "source": "local_watsons"
  },
  {
    "barcode": "3838824441689",
    "name": "Palette Işıltılı Transparan Renkler Koyu Kumral 6-0",
    "source": "local_watsons"
  },
  {
    "barcode": "3838824441801",
    "name": "Palette Işıltılı Transparan Renkler Fındık Kumral 6-5",
    "source": "local_watsons"
  },
  {
    "barcode": "3838824442167",
    "name": "Palette Saç Boyası Natural Colors 4-60 Altın Kahve",
    "source": "local_rossmann"
  },
  {
    "barcode": "3838824442648",
    "name": "Palette Saç Boyası Natural Colors 10-4 Papatya",
    "source": "local_rossmann"
  },
  {
    "barcode": "3838824442723",
    "name": "Palette Saç Boyası Natural Colors 1-1 Gece Mavisi 30 ml",
    "source": "local_rossmann"
  },
  {
    "barcode": "4005800098833",
    "name": "Nivea Q10 Sıkılaştırıcı ve Nemlendirici Vücut Bakım Sütü 400 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "4005808236879",
    "name": "Nivea Vücut Sütü 400 ml",
    "source": "local_rossmann"
  },
  {
    "barcode": "4005808237548",
    "name": "Nivea Q10 Sıkılaştırıcı Vücut Losyonu 400 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "4005808282456",
    "name": "Nivea Nemlendirici Vücut Sütü Smooth Sensation 250 ml Kuru Ciltler, Shea Yağı",
    "source": "local_watsons"
  },
  {
    "barcode": "4005808357369",
    "name": "Nivea Yatıştırıcı ve Nemlendirici El Bakım Kremi Aloe Vera 75 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "4005808669233",
    "name": "Nivea Canlandırıcı Yüz Temizleme Jeli 150 ml (Normal ve Karma Ciltler İçin)",
    "source": "local_gratis"
  },
  {
    "barcode": "4005808692569",
    "name": "Nivea Yatıştırıcı Yüz Temizleme Köpüğü 150 ml (Kuru ve Hassas Ciltler)",
    "source": "local_gratis"
  },
  {
    "barcode": "4005808702145",
    "name": "Nivea Body Express Hydration Vücut Losyonu 250 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "4005808704880",
    "name": "Nivea Vücut Losyonu Repair&Care Yoğun Nemlendirici 400ml",
    "source": "local_rossmann"
  },
  {
    "barcode": "4005808780563",
    "name": "Nivea Express Hydration El ve Vücut Bakım Kremi 400 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "4005808857951",
    "name": "Nivea Koruyucu ve Nemlendirici El Bakım Kremi Bal Mumu 75 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "4005808984763",
    "name": "Nivea Sun Serum Spf50+ Protect and Light Feel 90 ml",
    "source": "local_rossmann"
  },
  {
    "barcode": "4005900008862",
    "name": "Nivea Soft Nemlendirici Jojoba Yağı Bakım Kremi 75 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "4005900009135",
    "name": "Nivea Soft Nemlendirici Bakım Kremi 100 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "4005900009371",
    "name": "Nivea Soft Nemlendirici Bakım Kremi 300 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "4005900103017",
    "name": "Nivea Göz Makyaj Temizleyici Çift Fazlı 125 ml",
    "source": "local_rossmann"
  },
  {
    "barcode": "4005900103024",
    "name": "Nivea Çift Fazlı Göz Makyaj Temizleyici 125 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "4005900191861",
    "name": "Nivea Visage Yatıştırıcı Gündüz Bakım Kremi 50 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "4005900237460",
    "name": "Nivea Yoğun Besleyici ve Nemlendirici Vücut Sütü 400 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "4005900253217",
    "name": "Nivea Sun Koruma ve Nem Güneş Losyonu SPF 30 Nemlendirici Güneş Kremi, Yüksek Koruma 200 ml",
    "source": "local_rossmann"
  },
  {
    "barcode": "4005900253248",
    "name": "Nivea Sun Koruma ve Nem Güneş Losyonu SPF 50+ Nemlendirici Güneş Kremi, Çok Yüksek Koruma 200 ml",
    "source": "local_rossmann"
  },
  {
    "barcode": "4005900253330",
    "name": "Nivea Sun Koruma ve Bakım Hassas Cilt Çocuk Güneş Spreyi SPF50+ Çok Yüksek Güneş Koruyucu 200 ml",
    "source": "local_rossmann"
  },
  {
    "barcode": "4005900253484",
    "name": "Nivea Sun Güneş Sonrası Nemlendirici Sprey Aloe Vera Özlü 200 ml",
    "source": "local_rossmann"
  },
  {
    "barcode": "4005900253637",
    "name": "Nivea Sun Koruma ve Nem Nemlendirici Güneş Kremi Sprey SPF 30 Yüksek Koruma 200 ml",
    "source": "local_rossmann"
  },
  {
    "barcode": "4005900253668",
    "name": "Nivea Sun Yüksek Güneş Koruyucu Ve Nemlendirici Vücut Spreyi SPF 50+ 200ml",
    "source": "local_rossmann"
  },
  {
    "barcode": "4005900253750",
    "name": "Nivea Sun Koruma ve Bronzluk Güneş Spreyi SPF 50 Çok Yüksek Güneş Koruması ve Doğal Bronzlaştırıcı 200 ml",
    "source": "local_rossmann"
  },
  {
    "barcode": "4005900253972",
    "name": "Nivea Sun Koruma & Bakım Çocuk Güneş Spreyi SPF 50+ Çok Yüksek Güneş Koruyucu 200 ml",
    "source": "local_rossmann"
  },
  {
    "barcode": "4005900289025",
    "name": "Nivea Canlandırıcı Yüz Temizleme ve Yıkama Köpüğü 150 ml (Normal & Karma Cilt)",
    "source": "local_gratis"
  },
  {
    "barcode": "4005900289056",
    "name": "Nivea Yatıştırıcı Yüz Yıkama Köpüğü Kuru Ciltler 150 ml",
    "source": "local_rossmann"
  },
  {
    "barcode": "4005900297099",
    "name": "Nivea Repair & Care Yoğun Bakım Vücut Losyonu 400 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "4005900308801",
    "name": "Nivea Creme Yoğun Nemlendirici El ve Vücut Bakım Kremi 150 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "4005900308832",
    "name": "Nivea Creme Nemlendirici El, Yüz ve Vücut Bakım Kremi 250 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "4005900308863",
    "name": "Nivea Creme Yoğun Nemlendirici Vücut Bakım Kremi 75 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "4005900333513",
    "name": "Nivea Yatıştırıcı Micellar Makyaj Temizleme Suyu 400 ml (Hassas Cilt)",
    "source": "local_gratis"
  },
  {
    "barcode": "4005900333544",
    "name": "Nivea Canlandırıcı Micellar Makyaj Temizleme Suyu 400 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "4005900385727",
    "name": "Nivea Sun SPF 50+ Hassas Anında Koruma Güneş Kremi 200 ml Sprey",
    "source": "local_watsons"
  },
  {
    "barcode": "4005900396037",
    "name": "Nivea Değerli Yağlar İçeren Kiraz Çiçeği Vücut Losyonu 400 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "4005900424648",
    "name": "Nivea Aqua Rose Micellar Gül Suyu İçeren Çift Fazlı Makyaj Temizleme Suyu 400 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "4005900424679",
    "name": "Nivea Makyaj Temizleme Jeli Aqua Rose Organik Gül Suyu 150 ml",
    "source": "local_rossmann"
  },
  {
    "barcode": "4005900477255",
    "name": "Nivea Hyaluron Cellular Filler Sıkılaştırıcı ve Yaşlanma Karşıtı Göz Kremi 15 ml",
    "source": "local_rossmann"
  },
  {
    "barcode": "4005900489883",
    "name": "Nivea Men Dry Fresh Deodorant Anti-Perspirant 150 ml",
    "source": "local_rossmann"
  },
  {
    "barcode": "4005900499486",
    "name": "Nivea Men Yüz Temizleme Jeli Deep Dimension 100 ml",
    "source": "local_rossmann"
  },
  {
    "barcode": "4005900512161",
    "name": "Nivea Q10 Sıkılaştırıcı Nemlendirici Vücut Losyonu 250 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "4005900525017",
    "name": "Nivea 45+ Yaş Kırışıklık Karşıtı + Sıkılaştırıcı Yüz Bakım Kremi 50 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "4005900525352",
    "name": "Nivea 55+ Yaş Kırışıklık Karşıtı + Canlandırıcı Yüz Bakım Kremi 50 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "4005900541253",
    "name": "Nivea Zeytinyağı Nemlendirici El Bakım Kremi 75 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "4005900545701",
    "name": "Nivea Q10 Power Kırışıklık Karşıtı ve Sıkılaştırıcı Göz Bakım Kremi 15 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "4005900546272",
    "name": "Nivea Q10 Power Kırışıklık Karşıtı ve Sıkılaştırıcı Gündüz Yüz Bakım Kremi 50 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "4005900556523",
    "name": "Nivea Aloe Vera 72 Saat Nemlendirici Vücut Losyonu 400 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "4005900615701",
    "name": "Nivea Sun Güneş Alerjisine Karşı Anında Hassas Koruma Güneş Spreyi SPF 50+ Çok Yüksek Güneş Koruyucu 200 ml",
    "source": "local_rossmann"
  },
  {
    "barcode": "4005900659873",
    "name": "Nivea Q10 Ekstra Besleyici Gündüz Bakım Kremi SPF 15 Argan Yağı 50 ml",
    "source": "local_rossmann"
  },
  {
    "barcode": "4005900695253",
    "name": "Nivea Sun SPF30 Yüksek Vücut Güneş Kremi ve Ferahlatıcı Krem 175 ml UVA UVB Koruması",
    "source": "local_watsons"
  },
  {
    "barcode": "4005900704733",
    "name": "Nivea Sun Güneş Sonrası Nemlendirici Vücut Spreyi 200 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "4005900704764",
    "name": "Nivea Sun Güneş Koruyucu Vücut Spreyi SPF30 Koruma ve Ferahlık Transparan 200 ml",
    "source": "local_rossmann"
  },
  {
    "barcode": "4005900704795",
    "name": "Nivea Sun SPF50 Koruma ve Ferahlık Güneş Spreyi 200 ml",
    "source": "local_rossmann"
  },
  {
    "barcode": "4005900785121",
    "name": "Nivea Luminous630 Thiamidol Etkili Leke Karşıtı Serum 30 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "4005900786968",
    "name": "Nivea Luminous630 Güneş Korumalı Leke Karşıtı SPF50 Gündüz Yüz Kremi 40 ml Hyaluronik Asit, E Vitamini",
    "source": "local_watsons"
  },
  {
    "barcode": "4005900800237",
    "name": "Nivea Men Fresh Active Deodorant 150 ml + Hediye Fresh Active Roll-On 25 ml",
    "source": "local_rossmann"
  },
  {
    "barcode": "4005900805607",
    "name": "Nivea Nemlendirici Jel Krem Aqua Rose 50 ml",
    "source": "local_rossmann"
  },
  {
    "barcode": "4005900810557",
    "name": "Nivea Cellular Expert Lift Doğal Retinol Alternatifi Saf Bakuchiol ve Hyaluronik Asit içeren Gündüz Kremi 50 ml",
    "source": "local_rossmann"
  },
  {
    "barcode": "4005900810588",
    "name": "Nivea Cellular Expert Lift Doğal Retinol Alternatifi Saf Bakuchiol ve Hyaluronik Asit içeren Gece Kremi 50ml",
    "source": "local_rossmann"
  },
  {
    "barcode": "4005900836151",
    "name": "Nivea Siyah Nokta Temizleyici ve Gözenek Arındırıcı Burun T-Bant 1 Kutu",
    "source": "local_gratis"
  },
  {
    "barcode": "4005900870001",
    "name": "Nivea Men Cool Kick Fresh Deodorant Anti-Perspirant 150 ml",
    "source": "local_rossmann"
  },
  {
    "barcode": "4005900871824",
    "name": "Nivea Men Roll On Cool Kick Fresh 50 ml",
    "source": "local_rossmann"
  },
  {
    "barcode": "4005900886644",
    "name": "Nivea Luminous630 Thiamidol Etkili Koyu Halka Karşıtı Göz Bakım Kremi 15 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "4005900897305",
    "name": "Nivea Cellular Expert Finish 3in1 Cushion Renkli Açık Ton Yüz Bakım Kremi 01 15 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "4005900897336",
    "name": "Nivea Cellular Expert Finish 3in1 Cushion Renkli Orta Ton Yüz Bakım Kremi 02 15 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "4005900897848",
    "name": "Nivea Besleyici ve Nemlendirici Yüz Bakım Kremi 100 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "4005900954763",
    "name": "Nivea Cellular Expert Filler Yoğun Yaşlanma Karşıtı Gündüz Bakım Yüz Kremi 50 ml, SPF30",
    "source": "local_rossmann"
  },
  {
    "barcode": "4005900970398",
    "name": "Nivea Aqua Rose Organik Gül Suyu İçeren Yüz Yıkama Köpüğü 150 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "4005900972095",
    "name": "Nivea Derma Skin Clear Sivilce Karşıtı Yüz Temizleyici Peeling 150 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "4005900974396",
    "name": "Nivea Derma Skin Sivilce Karşıtı Yüz Temizleme Jeli 150 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "4005900974839",
    "name": "Nivea Derma Skin Clear Sivilce Karşıtı Tonik 200 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "4005900975591",
    "name": "Nivea Derma Skin Clear Exfoliator Sivilce Karşıtı Gece Arındırıcı Krem 40 ml, Yağlı Cilt",
    "source": "local_rossmann"
  },
  {
    "barcode": "4006000002033",
    "name": "Nivea Böğürtlen Dudak Bakım Kremi 4,8 gr",
    "source": "local_gratis"
  },
  {
    "barcode": "4006000002057",
    "name": "Nivea Original Care Dudak Bakım Kremi 4,8 gr",
    "source": "local_gratis"
  },
  {
    "barcode": "4006000002071",
    "name": "Nivea Kiraz Renkli Nemlendirici Dudak Bakım Kremi ve Parlatıcısı 4.8 gr",
    "source": "local_gratis"
  },
  {
    "barcode": "4006000002095",
    "name": "Nivea Çilek Renkli Nemlendirici Dudak Bakım Kremi ve Parlatıcısı 4.8 gr",
    "source": "local_gratis"
  },
  {
    "barcode": "4006000002118",
    "name": "Nivea Renksiz Nemlendirici Dudak Bakım Kremi Med Repair 4.8 gr",
    "source": "local_gratis"
  },
  {
    "barcode": "4006000002132",
    "name": "Nivea Şeftali Dudak Bakım Kremi 4,8 gr",
    "source": "local_gratis"
  },
  {
    "barcode": "4006000002156",
    "name": "Nivea Hydro Care Nemlendirici Renksiz Dudak Bakım Kremi",
    "source": "local_gratis"
  },
  {
    "barcode": "4006000011394",
    "name": "Nivea Cellular Luminous630 Sivilce Lekesi Karşıtı Serum 30 ml",
    "source": "local_rossmann"
  },
  {
    "barcode": "4006000011400",
    "name": "Nivea Luminous630 Thiamidol Etkili Leke ve Yaşlanma Karşıtı Serum 30 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "4006000013183",
    "name": "Nivea Fresh Sensation Kadın Roll On Deodorant 50 ml",
    "source": "local_rossmann"
  },
  {
    "barcode": "4006000019857",
    "name": "Nivea Q10 Ekstra Besleyici Gece Bakım Kremi Argan Yağı 50 ml",
    "source": "local_rossmann"
  },
  {
    "barcode": "4006000019925",
    "name": "Nivea Micellar Besleyici Yüz Göz ve Dudak için Makyaj Temizleme Suyu 400 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "4006000022871",
    "name": "Nivea Makyaj Temizleme Mendili 25 Adet (Yüz, Göz ve Normal Ciltler İçin)",
    "source": "local_gratis"
  },
  {
    "barcode": "4006000043487",
    "name": "Nivea Luminous630 Çatlak Karşıtı Vücut Yağ Serumu 100 ml",
    "source": "local_rossmann"
  },
  {
    "barcode": "4006000043524",
    "name": "Nivea Luminous Leke ve İz Karşıtı Nemlendirici Vücut Bakım Kremi 200 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "4006000060958",
    "name": "Nivea Soft Krem 2'li",
    "source": "local_rossmann"
  },
  {
    "barcode": "4006000064123",
    "name": "Nivea Men Erkek El ve Vücut Bakım Kremi Deep Impact 400ml",
    "source": "local_rossmann"
  },
  {
    "barcode": "4006000068572",
    "name": "Nivea Q10 Kırışıklık Karşıtı Çift Etkili Cilt Serum 30 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "4006000076607",
    "name": "Nivea Serum İçerikli Aydınlatıcı Micellar Makyaj Temizleme Suyu 400 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "4006000076638",
    "name": "Nivea Serum İçerikli Yenileyici Micellar Makyaj Temizleme Suyu 400 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "4006000085074",
    "name": "Nivea Q10 Power Kırışıklık Karşıtı ve Yenileyici Gece Yüz Kremi 50 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "4006000085289",
    "name": "Nivea Q10 Energy C Vitamini Kırışıklık Karşıtı Nemlendirici Gece Bakım Kremi 50 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "4006000085517",
    "name": "Nivea SPF15 Q10 Energy C Vitamini Kırışıklık Karşıtı Gündüz Kremi 50 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "4006000098791",
    "name": "Nivea Renkli Dudak Bakım Kremi Kırmızı 4,8 gr",
    "source": "local_gratis"
  },
  {
    "barcode": "4006000098814",
    "name": "Nivea Renkli Dudak Bakım Kremi Pembe",
    "source": "local_rossmann"
  },
  {
    "barcode": "4006000099408",
    "name": "Nivea Renkli Dudak Bakım Kremi Ten Rengi 4.8 gr",
    "source": "local_rossmann"
  },
  {
    "barcode": "4006000099415",
    "name": "Nivea Renkli Dudak Bakım Kremi Rose 4,8 gr",
    "source": "local_gratis"
  },
  {
    "barcode": "4006000102184",
    "name": "Nivea Renkli Dudak Bakım Kremi Mercan SPF30 Doğal E Vitamini Dudak ve Yanaklar İçin 4.8 g",
    "source": "local_watsons"
  },
  {
    "barcode": "4006000104607",
    "name": "Nivea Sun Hafif Dokulu Güneş Koruyucu Yüz Kremi SPF 50 40 ml",
    "source": "local_rossmann"
  },
  {
    "barcode": "4006000114620",
    "name": "Nivea Luminous630 Thiamidol Etkili Leke Karşıtı Gece Yüz Bakım Kremi 50 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "4006000131702",
    "name": "Nivea Sun Nemlendirici Primer Serum SPF50 30 ml",
    "source": "local_rossmann"
  },
  {
    "barcode": "4006000137193",
    "name": "Nivea Derma Skin Clear Dengeleyici ve Sivilce Karşıtı Serum 30 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "4006000155319",
    "name": "Nivea Cellular Expert Filler Hyaluronik Asit Dolgunlaştırıcı Cilt Serum 30 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "4006000160092",
    "name": "Nivea Q10 Sıkılaştırıcı ve Bronzlaştırıcı Vücut Losyonu 250ml",
    "source": "local_rossmann"
  },
  {
    "barcode": "4006000165325",
    "name": "Nivea Doğal Retinol Alternatifi Bakuchiol Cilt Bakım Serumu Cellular Expert Lift 30 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "4006000166599",
    "name": "Nivea Q10 SPF50 Yüksek Güneş Korumalı Kırışıklık Karşıtı Gündüz Kremi 40 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "4006000174686",
    "name": "Nivea Krem Derma Skin Clear Uv Fluid Spf50 40 ml",
    "source": "local_rossmann"
  },
  {
    "barcode": "4006000174716",
    "name": "Nivea Derma Skin Clear Serum Etkili Çift Fazlı Micellar Makyaj Temizleme Suyu 400 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "4006000179155",
    "name": "Nivea Luminous630 Skin Glow Anında Aydınlatıcı Serum 15 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "4006000179186",
    "name": "Nivea Luminous630 Skin Glow Peeling Etkili Tonik 100 ml",
    "source": "local_rossmann"
  },
  {
    "barcode": "4006000179216",
    "name": "Nivea Luminous630 Skin Glow Aydınlatıcı Serum 30 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "4006000180762",
    "name": "Nivea Smooth Sensation El ve Vücut Bakım Kremi 400 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "4006000180793",
    "name": "Nivea El ve Vücut Bakım Kremi Yoğun Nemlendirici 400 ml",
    "source": "local_rossmann"
  },
  {
    "barcode": "4006000180847",
    "name": "Nivea Cocoa Butter El Ve Vücut Bakım Kremi 400 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "4006000182933",
    "name": "Nivea Q10 Kırışıklık Karşıtı Çift Etkili Cilt Serumu 30 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "4006000184258",
    "name": "Nivea Cellular Epigenetics Rejuvenating Yaşlanma Karşıtı Cilt Serumu 30 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "4006000196695",
    "name": "Nivea Yoğun Besleyici ve Nemlendirici Vücut Bakım Sütü 200 ml",
    "source": "local_rossmann"
  },
  {
    "barcode": "4006000196725",
    "name": "Nivea Cocoa Butter Vücut Losyonu 200 ml",
    "source": "local_rossmann"
  },
  {
    "barcode": "4006000200088",
    "name": "Nivea Cellular Epigenetics Rejuvenating Yaşlanma Karşıtı Cilt Serumu 15 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "4006000200989",
    "name": "Nivea Q10 Energy C Vitamini Canlandırıcı Göz Bakım Kremi 15 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "4006000205144",
    "name": "Nivea Serum Etkili Aydınlatıcı Micellar Makyaj Temizleme Suyu 200 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "4006000205175",
    "name": "Nivea Serum Etkili Derma Skin Clear Micellar Makyaj Temizleme Suyu 200 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "4006000207995",
    "name": "Nivea Yatıştırıcı Micellar Makyaj Temizleme Suyu 400 ml + Böğürtlen Nemlendirici Dudak Bakım Kremi 4,8 g Set",
    "source": "local_watsons"
  },
  {
    "barcode": "4006000210353",
    "name": "Nivea Micellar Makyaj Temizleme Suyu Hassas Ciltler 200 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "4006000217468",
    "name": "Nivea Fresh Sensation Kadın Sprey Deodorant 150 ml",
    "source": "local_rossmann"
  },
  {
    "barcode": "4006000217529",
    "name": "Nivea Men Fresh Sensation Erkek Sprey Deodorant 150 ml",
    "source": "local_rossmann"
  },
  {
    "barcode": "4006000217703",
    "name": "Nivea Deodorant Pearly Beauty Fine Fragrance 150 ml",
    "source": "local_rossmann"
  },
  {
    "barcode": "4006000217734",
    "name": "Nivea Sprey Deodorant Fresh Cherry 150 ml",
    "source": "local_rossmann"
  },
  {
    "barcode": "4006000217826",
    "name": "Nivea Men Fresh Power Deodorant Hızlı Kuruma 150 ml",
    "source": "local_rossmann"
  },
  {
    "barcode": "4006000237879",
    "name": "Nivea Sun Hassas Yatıştıran Nemlendirici Güneş Yüz Kremi SPF 50 Çok Yüksek Güneş Koruma 50 ml",
    "source": "local_rossmann"
  },
  {
    "barcode": "4006000242828",
    "name": "Nivea Canlandırıcı ve Nemlendirici Tonik 200 ml (Normal & Karma Ciltler)",
    "source": "local_gratis"
  },
  {
    "barcode": "4006000244075",
    "name": "Nivea Sun Ferahlatıcı Sprey Spf50 Koruma ve Nem 200 ml",
    "source": "local_rossmann"
  },
  {
    "barcode": "4006000245973",
    "name": "Nivea Sun SPF50 Çocuklar İçin Vücut Güneş Koruyucu Losyon 150 ml Suya Dayanıklı",
    "source": "local_watsons"
  },
  {
    "barcode": "4006000246031",
    "name": "Nivea Sun Çocuklar İçin Yüksek Güneş Korumalı Yüz ve Vücut Güneş Kremi SPF50 100 ml",
    "source": "local_rossmann"
  },
  {
    "barcode": "4006000246819",
    "name": "Nivea Sun Kids & Baby Güneş Koruyucu Sprey Hassas Koruma 270 ml",
    "source": "local_rossmann"
  },
  {
    "barcode": "4006000246820",
    "name": "Nivea Sun Bebek ve Çocuk Sprey Güneş Kremi Spf50+ 270 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "4006000246864",
    "name": "Nivea Sun Yoğun Bronzlaştırıcı Güneş Yağ Sprey SPF 6 Karoten Özlü, E Vitamini İçerir 200 ml",
    "source": "local_rossmann"
  },
  {
    "barcode": "4006000252650",
    "name": "Nivea Çift Etkili Göz Makyaj Temizleyici 125 ml + Böğürtlen Renkli Dudak Bakım Kremi",
    "source": "local_gratis"
  },
  {
    "barcode": "4006000263168",
    "name": "Nivea Skin Glow Günlük UV Fluid Krem Spf50 40 ML",
    "source": "local_rossmann"
  },
  {
    "barcode": "4006000265148",
    "name": "Nivea Luminous630 Skin Glow Aydınlatıcı Yüz Temizleme Jeli 150 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "4006000269535",
    "name": "Nivea Luminous630 Thiamidol Etkili Leke Karşıtı Gündüz Yüz Kremi 40 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "4006000280424",
    "name": "Nivea Luminous630 Skin Glow Parlaklık Etkili Micellar Makyaj Temizleme Suyu 400 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "4006000320687",
    "name": "Nivea Kiraz Çiçeği ve Jojoba Yağı Vücut Losyonu 400 ml Normal ve Kuru Ciltler 24 Saat Nemlendirme",
    "source": "local_watsons"
  },
  {
    "barcode": "4006000376813",
    "name": "Nivea Glowy Lips Nemlendirici Dudak Parlatıcısı ve Bakım Kremi 10 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "4006000376837",
    "name": "Nivea SPF30 Glowy Lips Berry Nemlendirici Dudak Parlatıcısı ve Bakım Kremi 10 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "4015000975940",
    "name": "Palette Deluxe Saç Boyası 1-1 Gece Mavisi",
    "source": "local_gratis"
  },
  {
    "barcode": "4015100323764",
    "name": "Palette Deluxe Saç Boyası U71 Elmas Grisi",
    "source": "local_gratis"
  },
  {
    "barcode": "4015100717853",
    "name": "Palette Kalıcı Doğal Renkler Renk Açıcı Sprey 150 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "4015100810042",
    "name": "Taft Saç Köpüğü Volume 150 ml",
    "source": "local_rossmann"
  },
  {
    "barcode": "4015100810202",
    "name": "Taft Powerful Age Saç Köpüğü 150 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "4015100810363",
    "name": "Taft x Gliss Saç Spreyi 250 ml",
    "source": "local_rossmann"
  },
  {
    "barcode": "4015100810547",
    "name": "Taft Volume Saç Spreyi 250 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "4015100811292",
    "name": "Taft Saç Köpüğü Curl & Flex 150 ml",
    "source": "local_rossmann"
  },
  {
    "barcode": "4015100811315",
    "name": "Taft Saç Köpüğü Power Cashmere 150 ml",
    "source": "local_rossmann"
  },
  {
    "barcode": "4015100811339",
    "name": "Taft Saç Spreyi Powerful Age 5 250 ml",
    "source": "local_rossmann"
  },
  {
    "barcode": "4015100811353",
    "name": "Taft Saç Şekillendirici Sprey Power Express 250 ml",
    "source": "local_rossmann"
  },
  {
    "barcode": "4015100811377",
    "name": "Taft Saç Spreyi Ultimate 250 ml",
    "source": "local_rossmann"
  },
  {
    "barcode": "4015100811391",
    "name": "Taft Saç Spreyi Keratin 250 ml",
    "source": "local_rossmann"
  },
  {
    "barcode": "4015100811414",
    "name": "Taft Power Kaşmir Saç Spreyi 250 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "4015100811490",
    "name": "Taft Saç Spreyi Caffeine Mega Güçlü 250 ml",
    "source": "local_rossmann"
  },
  {
    "barcode": "4015100811513",
    "name": "Taft Saç Spreyi Ekstra Güçlü 250 ml",
    "source": "local_rossmann"
  },
  {
    "barcode": "4015100811551",
    "name": "Taft Wax Caffeine 75 ml",
    "source": "local_rossmann"
  },
  {
    "barcode": "4015100812879",
    "name": "Gliss Blonde Perfector Turunculaşma Karşıtı Onarıcı Şampuan Peptit ve Yaban Mersini Özü ile 250 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "4015100814071",
    "name": "Gliss Anında Besleyici Sos Bakım Maske 15 ml",
    "source": "local_rossmann"
  },
  {
    "barcode": "4015100815078",
    "name": "Gliss Ultimate Repair Güçlendirici Saç Bakım Kremi 360 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "4015100815115",
    "name": "Gliss Split Hair Miracle Kırık Uçları Mühürleyen Saç Bakım Kremi - İyonik Kompleks ve Üzüm Çekirdeği",
    "source": "local_gratis"
  },
  {
    "barcode": "4015100815116",
    "name": "Gliss Split Hair Miracle Kırık Uçları Mühürleyen Saç Bakım Kremi İyonik Kompleks ve Üzüm Çekirdeği Yağı ile 360 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "4015100815153",
    "name": "Gliss Aqua Revive Nemlendirici Saç Bakım Kremi - Hyaluron ve Deniz Yosunu Özü ile 360 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "4015100815177",
    "name": "Gliss Oil Nutritive Besleyici Saç Bakım Kremi 360 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "4015100815178",
    "name": "Gliss Ultimate Oil Elixir Besleyici Saç Bakım Kremi Aminoasit ve Argan Yağı ile 360 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "4015100815191",
    "name": "Gliss Supreme Length Saç Kremi 360 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "4015100815627",
    "name": "Taft x Gliss Hacim Spreyi 150 ml",
    "source": "local_rossmann"
  },
  {
    "barcode": "4015100816624",
    "name": "Schwarzkopf Root Retoucher Black 100 ml",
    "source": "local_rossmann"
  },
  {
    "barcode": "4015100816662",
    "name": "Schwarzkopf Kapatıcı Root Retoucher Kahverengi 100 ml",
    "source": "local_rossmann"
  },
  {
    "barcode": "4015100816709",
    "name": "Schwarzkopf Kapatıcı Root Retoucher Koyu Kahverengi 100 ml",
    "source": "local_rossmann"
  },
  {
    "barcode": "4015100830408",
    "name": "Taft Volume Saç Köpüğü 150 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "4015100834598",
    "name": "Taft Curl & Flex Saç Köpüğü 150 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "4015100834611",
    "name": "Taft Power Kaşmir Saç Köpüğü 150 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "4015100850123",
    "name": "Root Retoucher Saç Boyası Siyah 120 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "4015100861846",
    "name": "Schwarzkopf Creme Supreme Yoğun Bakım Full Kit Saç Boyası 1-1 Soğuk Siyah",
    "source": "local_gratis"
  },
  {
    "barcode": "4015100861884",
    "name": "Schwarzkopf Creme Supreme Yoğun Bakım Full Kit Saç Boyası 1-0 Siyah",
    "source": "local_gratis"
  },
  {
    "barcode": "4015100861945",
    "name": "Schwarzkopf Creme Supreme Yoğun Bakım Full Kit Saç Boyası 5-1 Soğuk Kahve",
    "source": "local_gratis"
  },
  {
    "barcode": "4015100861969",
    "name": "Schwarzkopf Creme Supreme Yoğun Bakım Full Kit Saç Boyası 6-0 Açık Kahve",
    "source": "local_gratis"
  },
  {
    "barcode": "4015100862003",
    "name": "Schwarzkopf Creme Supreme Yoğun Bakım Full Kit Saç Boyası 6-16 Küllü Soğuk Açık Kahve",
    "source": "local_gratis"
  },
  {
    "barcode": "4015100862041",
    "name": "Schwarzkopf Creme Supreme Yoğun Bakım Full Kit Saç Boyası 3-0 Koyu Kestane",
    "source": "local_gratis"
  },
  {
    "barcode": "4015100862089",
    "name": "Schwarzkopf Creme Supreme Yoğun Bakım Full Kit Saç Boyası 8-16 Küllü Soğuk Koyu Sarı",
    "source": "local_gratis"
  },
  {
    "barcode": "4015100862126",
    "name": "Schwarzkopf Creme Supreme Yoğun Bakım Full Kit Saç Boyası 7-16 Küllü Soğuk Kumral",
    "source": "local_gratis"
  },
  {
    "barcode": "4015100862164",
    "name": "Schwarzkopf Creme Supreme Yoğun Bakım Full Kit Saç Boyası 7-0 Kumral",
    "source": "local_gratis"
  },
  {
    "barcode": "4015100862201",
    "name": "Schwarzkopf Creme Supreme Yoğun Bakım Full Kit Saç Boyası 9-16 Küllü Soğuk Sarı",
    "source": "local_gratis"
  },
  {
    "barcode": "4015100862249",
    "name": "Schwarzkopf Creme Supreme Yoğun Bakım Full Kit Saç Boyası 7-7 Sıcak Bakır",
    "source": "local_gratis"
  },
  {
    "barcode": "4015100862287",
    "name": "Schwarzkopf Creme Supreme Yoğun Bakım Full Kit Saç Boyası 8-0 Koyu Sarı",
    "source": "local_gratis"
  },
  {
    "barcode": "4015100862324",
    "name": "Schwarzkopf Creme Supreme Yoğun Bakım Full Kit L1++ Ultra Yoğun Renk Açıcı",
    "source": "local_gratis"
  },
  {
    "barcode": "4015100862768",
    "name": "Gliss Full Hair Wonder Saç Maskesi 400 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "4015100862782",
    "name": "Gliss Full Hair Wonder Sıvı Saç Bakım Kremi 200 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "4015100862966",
    "name": "Gliss Full Hair Wonder Saç Bakım Kremi 360 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "4015100863000",
    "name": "Gliss Full Hair Wonder Şampuan 400 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "4015100864410",
    "name": "Gliss Serum Deep Repair Saç Kremi 360 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "4015100891751",
    "name": "Palette Saç Boyası ICC Toner Altın Kahve 150 ml",
    "source": "local_rossmann"
  },
  {
    "barcode": "4015100891775",
    "name": "Palette Göz Alıcı Renkler Saç Boyası 6-12 Soğuk Koyu Kumral",
    "source": "local_gratis"
  },
  {
    "barcode": "4015100891836",
    "name": "Gliss Liquid Silk Saç Bakım Kremi 360 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "4015100891850",
    "name": "Palette Göz Alıcı Renkler Saç Boyası 9-50 Altın Sarı",
    "source": "local_gratis"
  },
  {
    "barcode": "4015100891874",
    "name": "Gliss Liquid Silk Sıvı Saç Bakım Kremi 200 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "4015100891898",
    "name": "Gliss Anında Güçlendirici Sos Bakım Maskesi 15 ml",
    "source": "local_rossmann"
  },
  {
    "barcode": "4015100891935",
    "name": "Gliss Saç Maskesi Sos Oil Nutritive 15 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "4015100891973",
    "name": "Palette Göz Alıcı Renkler Saç Boyası 5-50 Açık Altın Kahve",
    "source": "local_gratis"
  },
  {
    "barcode": "4015100892888",
    "name": "Gliss Scalp Balance Nazik Bakım Şampuanı 200 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "4015100892901",
    "name": "Gliss Scalp Balance Arındırıcı Saç Serumu 100 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "4015100892925",
    "name": "Gliss Scalp Balance Saç Derisi Spreyi 100 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "4015100894820",
    "name": "Palette Küllü Sarı Toner 150 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "4015100895803",
    "name": "Got2b Curlz Bukle Belirginleştirici Saç Spreyi 200 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "4015100896107",
    "name": "Got2b Kuru Şampuan Ekstra Ferahlık 200 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "4015100896121",
    "name": "Got2b Chaotic Şekillendirici Saç Sakızı 100 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "4015100896145",
    "name": "Got2b Kaş ve Bebek Saçları İçin 2’si Bir Arada Sabitleyici Maskara 16 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "4015100896183",
    "name": "Got2b Glued Ultra Güçlü Sabitleyici Saç Spreyi 300 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "4015100896206",
    "name": "Got2b Twisted Bukle Belirginleştirici Saç Bakım Köpüğü 250 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "4015100896220",
    "name": "Got2b Gloss Parlaklık Veren Saç Spreyi 200 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "4015100896244",
    "name": "Got2b Glued Wax Stick 50 gr",
    "source": "local_gratis"
  },
  {
    "barcode": "4027800114337",
    "name": "Wilkinson Sword Quattro 4 Bıçaklı Kadın Sistem Tıraş Bıçağı + 3 Yedek",
    "source": "local_gratis"
  },
  {
    "barcode": "4027800138005",
    "name": "Wilkinson Sword Quattro 4 Bıçaklı Kadın Sistem Tıraş Bıçağı",
    "source": "local_gratis"
  },
  {
    "barcode": "4027800276028",
    "name": "Wilkinson Extra 2 Kullan At Tıraş Bıçağı 5'li",
    "source": "local_gratis"
  },
  {
    "barcode": "4027800319107",
    "name": "Wilkinson Extra 3 Kullan At Tıraş Bıçağı",
    "source": "local_gratis"
  },
  {
    "barcode": "4027800319626",
    "name": "Wilkinson Sword Xtreme3 Comfort Coconut Delight Tıraş Bıçağı 3'lü",
    "source": "local_gratis"
  },
  {
    "barcode": "4027800427604",
    "name": "Wilkinson Sword Quattro Smooth Sensitive Kullan At Tıraş Bıçağı",
    "source": "local_gratis"
  },
  {
    "barcode": "4027800429103",
    "name": "Wilkinson Sword Quattro Smooth Sensitive Kullan At Tıraş Bıçağı 3’lü",
    "source": "local_gratis"
  },
  {
    "barcode": "4027800518838",
    "name": "Wilkinson Duplo Beauty Tıraş Bıçağı 5'li",
    "source": "local_gratis"
  },
  {
    "barcode": "4027800718108",
    "name": "Wilkinson Extra 2 Beauty Çift Bıçaklı Kullan At Tıraş Bıçağı",
    "source": "local_gratis"
  },
  {
    "barcode": "4040943000558",
    "name": "Janssen Cosmetics Detoks Etkili Krem 50 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "4040943000688",
    "name": "Janssen Cosmetics Yaşlılık Lekeleri Karşıtı Serum 30 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "4040943000824",
    "name": "Janssen Cosmetics Göz Çevresi Roll-On Bakım Eliksiri 15 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "4040943000831",
    "name": "Janssen Cosmetics Işıltı Etkili Krem 50 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "4040943000855",
    "name": "Janssen Cosmetics Işıltı Serumu 30 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "4040943000923",
    "name": "Janssen Cosmetics Probiyotik Dijital Yaşlanma Karşıtı Serum 30 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "4040943000947",
    "name": "Janssen Cosmetics Face Guard Advanced SPF30 Güneş Korumalı Işıltı Veren Serum Etkili Nemlendirici 50",
    "source": "local_gratis"
  },
  {
    "barcode": "4040943001579",
    "name": "Janssen Cosmetics Tüm Ciltler Peeling 50 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "4040943001593",
    "name": "Janssen Cosmetics Nemlendirici Krem 50 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "4040943001616",
    "name": "Janssen Cosmetics Yüksek Sebumlu Kuru Cilt Nemlendiricisi 50 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "4040943001678",
    "name": "Janssen Cosmetics Yüksek Nem Sağlayıcı Konsantre Serum 30 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "4040943001692",
    "name": "Janssen Cosmetics Göz Çevresi Kırışıklıkları ve Halka Giderici Göz Bakım Jeli 15 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "4040943001715",
    "name": "Janssen Cosmetics Nemlendirici Yosun İçerikli Jel Maske 75 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "4040943002170",
    "name": "Janssen Cosmetics Günlük Hassas Cilt Temizleyici Köpük 150 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "4040943002194",
    "name": "Janssen Cosmetics Hassas Ciltler Yatıştırıcı Tonik Jel 200 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "4040943002293",
    "name": "Janssen Cosmetics Yatıştırıcı Bakım Losyonu 50 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "4040943002347",
    "name": "Janssen Cosmetics Hassas Ciltler Günlük Yatıştırıcı Yoğun Bakım Kremi 50 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "4040943002361",
    "name": "Janssen Cosmetics Hassas Ciltler İçin Rahatlatıcı Serum 30 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "4040943003528",
    "name": "Janssen Cosmetics Karma Ciltler Toz Temizleyici 100 gr",
    "source": "local_gratis"
  },
  {
    "barcode": "4040943003542",
    "name": "Janssen Cosmetics Yağlı ve Karma Ciltler Dengeleyici Krem 50 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "4040943005218",
    "name": "Janssen Cosmetics Hücre Yenileyici Anti Age Krem 50 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "4040943005270",
    "name": "Janssen Cosmetics Cilt Yapılandırıcı Yoğun Bakım Kremi 50 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "4040943005294",
    "name": "Janssen Cosmetics Light Tightening Sıkılaştırıcı Bakım Kremi 50 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "4040943005324",
    "name": "Janssen Cosmetics Aydınlatıcı ve Temizleyici Losyon 200 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "4040943005331",
    "name": "Janssen Cosmetics Aydınlatıcı Anti Age Tonik 200 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "4040943005386",
    "name": "Janssen Cosmetics Kolajen ve Elastin Sentez C Vitamini Kremi 50 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "4040943005416",
    "name": "Janssen Cosmetics Göz Çevresi Çizgi Açıcı Krem 15 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "4040943006161",
    "name": "Janssen Cosmetics Leke Karşıtı Renk Açıcı Krem 50 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "4040943006185",
    "name": "Janssen Cosmetics Melanin Dengeleyici Gece Bakım Kremi 50 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "4040943006208",
    "name": "Janssen Cosmetics Aydınlatıcı Leke Serumu 30 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "4040943006222",
    "name": "Janssen Cosmetics Göz Çevresi Halka ve Morluk Giderici Leke Kremi 15 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "4040943006512",
    "name": "Janssen Cosmetics Onarıcı Gece Dudak Maskesi 15 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "4040943006529",
    "name": "Janssen Cosmetics Siyah Havyar İçeren Lüks Anti-Age Krem 50 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "4040943006680",
    "name": "Janssen Cosmetics Doku Yenileyici ve 24 Saat Etkili Bakım Kremi 75 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "4040943009131",
    "name": "Janssen Cosmetics El Maskesi 75 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "4040943009292",
    "name": "Janssen Cosmetics Deniz Kolajenli Anti-Age Günlük Krem 50 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "4040943015026",
    "name": "Janssen Cosmetics Temizleyici Pudra 60 gr",
    "source": "local_gratis"
  },
  {
    "barcode": "4040943015033",
    "name": "Janssen Cosmetics Tüm Ciltler Aydınlatıcı Tonik 100 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "4040943015040",
    "name": "Janssen Cosmetics Brightening Exfoliator Lekeli Ciltler İçin Peeling 50 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "4040943023243",
    "name": "Janssen Cosmetics Günlük Derin Yağlı Cilt Temizleyici 200 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "4040943023267",
    "name": "Janssen Cosmetics Temizleyici Tonik 200 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "4040943023328",
    "name": "Janssen Cosmetics Enzim Peeling Temizleyici Toz 50 gr",
    "source": "local_gratis"
  },
  {
    "barcode": "4040943023342",
    "name": "Janssen Cosmetics Sebum ve Leke Karşıtı Matlaştırıcı Cilt Kremi 50 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "4040943023403",
    "name": "Janssen Cosmetics AHA Face Cream Soyucu Özellikli Nemlendirici 50 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "4040943023427",
    "name": "Janssen Cosmetics Sebum Karşıtı Matlaştırıcı Cilt Serumu 30 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "4040943023465",
    "name": "Janssen Cosmetics Gözenek Sıkılaştırıcı Maske 75 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "4040943117058",
    "name": "Janssen Cosmetics C Vitamini Aydınlatıcı Ampul 3'lü",
    "source": "local_gratis"
  },
  {
    "barcode": "4040947897803",
    "name": "Janssen Cosmetics Yaşlanma Karşıtı Cilt Bakım Seti",
    "source": "local_gratis"
  },
  {
    "barcode": "4040947897804",
    "name": "Janssen Cosmetics Leke Karşıtı Tam Cilt Bakım Seti",
    "source": "local_gratis"
  },
  {
    "barcode": "4045787723250",
    "name": "Bonacure Clean Renk Koruyucu Şampuan 250 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "4045787726077",
    "name": "Bonacure Clean Renk Koruyucu Saç Kremi 200 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "4045787936414",
    "name": "Osis Air Whip Hacim ve Tutuş Veren Esnek Köpük 200 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "4045787936452",
    "name": "Osis Bounty Balm Bukle Kremi 150 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "4045787999327",
    "name": "Osis Flex Wax Ultra Güçlü Krem Wax 85 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "4045787999525",
    "name": "Osis Dust It Güçlü Tutuş Mat Hacim Saç Pudrası 10 gr",
    "source": "local_gratis"
  },
  {
    "barcode": "4045787999594",
    "name": "Osis Rock Hard Ultra Güçlü Macun 150 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "4045787999754",
    "name": "Osis Glow Elektriklenme Karşıtı Parlaklık Serumu 50 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "4045787999839",
    "name": "Osis Mess Up Mat Şekillendirici Macun 100 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "4047196056677",
    "name": "Isana Göz Makyajı Temizlemeyici Seyahat Boy 50 ml",
    "source": "local_rossmann"
  },
  {
    "barcode": "4047196057490",
    "name": "Isana Yüz Bakım Maskesi Pure Nemlendirme 16 ml",
    "source": "local_rossmann"
  },
  {
    "barcode": "4047196057506",
    "name": "Isana Aktif Kömür Arındırıcı Maske Tüm Cilt Tipleri 2x8 ml",
    "source": "local_rossmann"
  },
  {
    "barcode": "4047196057674",
    "name": "Isana Men Şampuan Fresh Power 300 ml",
    "source": "local_rossmann"
  },
  {
    "barcode": "4047196057971",
    "name": "Isana Kapsül Serum Anti Age Kırışıklık Karşıtı 7x0,38 ml",
    "source": "local_rossmann"
  },
  {
    "barcode": "4047196057988",
    "name": "Isana Kapsül Serum Hydro Booster Yoğun Nem Etkili 7x0,38 ml",
    "source": "local_rossmann"
  },
  {
    "barcode": "4047196057995",
    "name": "Isana Kapsül Serum Perfect Teint 7x0,38 ml",
    "source": "local_rossmann"
  },
  {
    "barcode": "4047196058015",
    "name": "Isana Kapsül Serum Q10 Kırışıklık Önleyici 7x0,38 ml",
    "source": "local_rossmann"
  },
  {
    "barcode": "4047196058022",
    "name": "Isana Kapsül Serum Retinol Booster Night & Beauty 7x0,38 ml",
    "source": "local_rossmann"
  },
  {
    "barcode": "4047196058268",
    "name": "Isana Reine Haut Nemlendirici Krem 24H- Yağlı Ciltler İçin 50 ml",
    "source": "local_rossmann"
  },
  {
    "barcode": "4047196058725",
    "name": "Isana Bakım Ampulü Hyaluron Intense 7x2 ml",
    "source": "local_rossmann"
  },
  {
    "barcode": "4047196059333",
    "name": "Isana Yağ Bazlı Göz Makyaj Temizleyici 100 ml",
    "source": "local_rossmann"
  },
  {
    "barcode": "4047196065754",
    "name": "Isana Love Your Skin Vücut Peeling Serumu AHA 100 ml",
    "source": "local_rossmann"
  },
  {
    "barcode": "4049639411609",
    "name": "M.Asam Aqua Intense Hyaluron Yüz Temizleme Jeli 200 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "4049639412903",
    "name": "M.Asam Vinolift Temizleme Kremi 200 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "4049639414228",
    "name": "M.Asam Clear Skin Kil Maskesi 100 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "4049639418776",
    "name": "M.Asam Vinolift Kırışıklık Karşıtı Göz Kremi 30 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "4049639419728",
    "name": "M.Asam Vinolift Sıkılaştırıcı Yüz Kremi 50 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "4049639422971",
    "name": "M.Asam Collagen Lift Yüz Kremi 100 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "4049639423015",
    "name": "M.Asam Collagen Lift Göz Kremi 30 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "4049639449503",
    "name": "M.Asam Clear Skin Yüz Temizleme Jeli 200 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "4049639451803",
    "name": "M.Asam Aqua Intense Supreme Hyaluron Yüz Kremi 50 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "4056800114047",
    "name": "Wellaflex Saç Spreyi Ultra Güçlü İpeksi Bitiş 250 ml",
    "source": "local_rossmann"
  },
  {
    "barcode": "4056800114061",
    "name": "Wellaflex Invisible Spray Extra Güçlü 250 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "4056800114726",
    "name": "Wella Wellaflex Silk Finish & Hold İpeksi Bitiş ve Tutuş Sağlayan Saç Köpüğü Ultra Strong Hold 200 ml - 5/5 Hold",
    "source": "local_gratis"
  },
  {
    "barcode": "4056800114733",
    "name": "Wella Wellaflex Invisible Hold Görünmez Tutuş Sağlayan Saç Köpüğü Extra Strong Hold 200 ml - 4/5 Hold",
    "source": "local_gratis"
  },
  {
    "barcode": "4056800565801",
    "name": "Wellaflex Saç Köpüğü Bukle Güçlü Tutuş 200 ml",
    "source": "local_rossmann"
  },
  {
    "barcode": "4056800627998",
    "name": "Wella Koleston Single Tüp Boya 9/0 Sarı",
    "source": "local_gratis"
  },
  {
    "barcode": "4056800628001",
    "name": "Wella Koleston Single Tüp Boya 8/0 Açık Kumral",
    "source": "local_gratis"
  },
  {
    "barcode": "4056800628049",
    "name": "Wella Koleston Single Tüp Boya 7/0 Kumral",
    "source": "local_gratis"
  },
  {
    "barcode": "4056800628087",
    "name": "Wella Koleston Single Tüp Boya 6/0 Koyu Kumral",
    "source": "local_gratis"
  },
  {
    "barcode": "4056800628124",
    "name": "Wella Koleston Single Tüp Boya 5/0 Açık Kahve",
    "source": "local_gratis"
  },
  {
    "barcode": "4056800628162",
    "name": "Wella Koleston Single Tüp Boya 4/0 Kahve",
    "source": "local_gratis"
  },
  {
    "barcode": "4056800628209",
    "name": "Wella Koleston Single Tüp Boya 3/0 Koyu Kahve",
    "source": "local_gratis"
  },
  {
    "barcode": "4056800628247",
    "name": "Wella Koleston Single Tüp Boya 2/0 Siyah",
    "source": "local_gratis"
  },
  {
    "barcode": "4056800628285",
    "name": "Wella Koleston Single Tüp Boya 7/1 Küllü Kumral",
    "source": "local_gratis"
  },
  {
    "barcode": "4056800628445",
    "name": "Koleston Tüp Saç Boyası Patlıcan Moru 3/66 1 adet",
    "source": "local_rossmann"
  },
  {
    "barcode": "4056800628483",
    "name": "Wella Koleston Single Tüp Boya 3/4 Koyu Kestane",
    "source": "local_gratis"
  },
  {
    "barcode": "4056800628568",
    "name": "Wella Koleston Single Tüp Boya 8/1 Açık Küllü Kumral",
    "source": "local_gratis"
  },
  {
    "barcode": "4056800628643",
    "name": "Wella Koleston Single Tüp Boya 9/3 Altın Sarısı",
    "source": "local_gratis"
  },
  {
    "barcode": "4056800628728",
    "name": "Wella Koleston Single Tüp Boya 7/3 Fındık Kabuğu",
    "source": "local_gratis"
  },
  {
    "barcode": "4056800628803",
    "name": "Wella Koleston Single Tüp Boya 6/7 Çikolata Kahve",
    "source": "local_gratis"
  },
  {
    "barcode": "4056800628889",
    "name": "Koleston Tüp Saç Boyası Şarap Kızılı 5/66 1 adet",
    "source": "local_rossmann"
  },
  {
    "barcode": "4056800628926",
    "name": "Wella Koleston Single Tüp Boya 55/46 Kızıl Büyü",
    "source": "local_gratis"
  },
  {
    "barcode": "4056800628964",
    "name": "Wella Koleston Single Tüp Boya 4/77 Kadife Kahve",
    "source": "local_gratis"
  },
  {
    "barcode": "4056800629022",
    "name": "Wella Koleston Single Tüp Boya 6/35 Elegan Kahve",
    "source": "local_gratis"
  },
  {
    "barcode": "4056800629084",
    "name": "Koleston Tüp Saç Boyası Kor Ateşi Kızılı 77/44 1 adet",
    "source": "local_rossmann"
  },
  {
    "barcode": "4056800629206",
    "name": "Wella Koleston Single Tüp Boya 66/46 Aşk Alevi",
    "source": "local_gratis"
  },
  {
    "barcode": "4056800629244",
    "name": "Koleston Tüp Saç Boyası Kışkırtıcı Kahve 5/37 1 adet",
    "source": "local_rossmann"
  },
  {
    "barcode": "4056800644520",
    "name": "Wella Koleston Single Tüp Boya 7/77 Işıltılı Kahve",
    "source": "local_gratis"
  },
  {
    "barcode": "4056800674107",
    "name": "Wellaflex Saç Köpüğü Extra Güçlü Hacim 200 ml",
    "source": "local_rossmann"
  },
  {
    "barcode": "4056800674305",
    "name": "Wellaflex Saç Spreyi Güçlü Hacim 2 Gün 250 ml",
    "source": "local_rossmann"
  },
  {
    "barcode": "4056800706198",
    "name": "Wella Wellaflex Silk Finish & Hold İpeksi Bitiş ve Tutuş Sağlayan Saç Spreyi Ultra Strong Hold 400 ml - 5/5 Hold",
    "source": "local_gratis"
  },
  {
    "barcode": "4056800811526",
    "name": "Koleston Tüp Saç Boyası Açık Küllü Sarı 11/1 1 adet",
    "source": "local_rossmann"
  },
  {
    "barcode": "4059729421937",
    "name": "Essence Hydra Kiss Dudak Yağı 03 Pink Champagne",
    "source": "local_rossmann"
  },
  {
    "barcode": "4059729422064",
    "name": "Essence Hydra Kiss Dudak Yağı 01 Kiss From A Rose",
    "source": "local_rossmann"
  },
  {
    "barcode": "4059729490490",
    "name": "Essence Juicy Bomb Glossy Butter Balm 02",
    "source": "local_watsons"
  },
  {
    "barcode": "4059729518712",
    "name": "Essence Hydra Kiss Dudak Yağı 06",
    "source": "local_watsons"
  },
  {
    "barcode": "4059729518736",
    "name": "Essence Hydra Kiss Dudak Yağı 08",
    "source": "local_watsons"
  },
  {
    "barcode": "4059729593634",
    "name": "Essence The Super Peptide Glossy Lip Treatment 07, 1 Adet",
    "source": "local_rossmann"
  },
  {
    "barcode": "4064666035673",
    "name": "Wella Professionals Elements Yatıştırıcı Serum 100 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "4064666041025",
    "name": "Wella Professionals Nutricurls Dolaşıklık Açıcı Saç Kremi 200 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "4064666041049",
    "name": "Wella Professionals Nutricurls Dalgalı & Kıvırcık Saçlar İçin Saç Maskesi 150 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "4064666041476",
    "name": "Wella Professionals Oil Reflections Işıltı Sağlayan Hafif Saç Yağı 100 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "4064666041568",
    "name": "Wella Professionals Nutricurls Curlixir Kıvırcık Saçlar İçin Bukle Belirginleştirici Balm 150 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "4064666041575",
    "name": "Wella Professionals Nutricurls Milky Waves Besleyici Durulanmayan Bakım Spreyi 150 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "4064666043722",
    "name": "Wella Professionals Oil Reflections Işıltı Sağlayan Saç Kremi 200 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "4064666102726",
    "name": "Wella Professionals Elements Yenileyici Saç Maskesi 150 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "4064666102740",
    "name": "Wella Professionals Oil Reflections Işıltı Sağlayan Saç Maskesi 150 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "4064666218090",
    "name": "Wella Professionals Elements Yenileyici Durulanmayan Bakım Kremi 150 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "4064666219561",
    "name": "Wella Professionals Oil Reflections Işıltı Sağlayan Pürüzsüzleştirici Saç Yağı 100 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "4064666315676",
    "name": "Wella Professionals Color Motion+ Renk Koruyucu Saç Kremi 200 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "4064666315713",
    "name": "Wella Professionals Fusion Yoğun Onarıcı Saç Kremi 200 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "4064666316147",
    "name": "Wella Professionals Color Motion+ Renk Koruyucu Saç Maskesi 150 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "4064666316208",
    "name": "Wella Professionals Fusion Yoğun Onarıcı Saç Maskesi 150 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "4064666337579",
    "name": "Wella Professionals Color Motion+ Renk Koruyucu Şampuan 250 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "4064666337845",
    "name": "Wella Professionals Elements Yenileyici Şampuan 250 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "4064666339139",
    "name": "Wella Professionals Invigo Nutri Enrich Elektriklenmeyi Önleyici Saç Bakım Kremi 150 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "4064666339269",
    "name": "Wella Professionals Invigo Brilliance İnce Telli Saçlar İçin Renk Koruyucu Şampuan 300 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "4064666339368",
    "name": "Wella Professionals Invigo Brilliance İnce Telli Saçlar İçin Renk Koruyucu Saç Bakım Kremi 200 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "4064666339917",
    "name": "Wella Koleston 7 Kit Sonsuz Işıltılı Küllü Tonlar 4/1 Gizemli Küllü Kahve",
    "source": "local_gratis"
  },
  {
    "barcode": "4064666339924",
    "name": "Wella Koleston 7 Kit Sonsuz Işıltılı Küllü Tonlar 7/18 Işıltılı İnci Küllü Kumral",
    "source": "local_gratis"
  },
  {
    "barcode": "4064666339931",
    "name": "Wella Koleston 7 Kit Sonsuz Işıltılı Küllü Tonlar 8/18 Açık İnci Küllü Kumral",
    "source": "local_gratis"
  },
  {
    "barcode": "4064666341637",
    "name": "Wella Koleston Supreme Saç Boyası 3/0 Koyu Kahve",
    "source": "local_gratis"
  },
  {
    "barcode": "4064666341644",
    "name": "Wella Koleston Supreme Saç Boyası 2/0 Siyah",
    "source": "local_gratis"
  },
  {
    "barcode": "4064666341668",
    "name": "Koleston Wella Supreme Saç Boyası 4/6 Kızıl Viyole",
    "source": "local_rossmann"
  },
  {
    "barcode": "4064666341675",
    "name": "Wella Koleston Supreme Saç Boyası 3/66 Patlıcan Moru",
    "source": "local_gratis"
  },
  {
    "barcode": "4064666341682",
    "name": "Wella Koleston Supreme Saç Boyası 6/73 Toffee Çikolata Kahvesi",
    "source": "local_gratis"
  },
  {
    "barcode": "4064666341705",
    "name": "Wella Koleston Supreme Saç Boyası 5/37 Kışkırtıcı Kahve",
    "source": "local_gratis"
  },
  {
    "barcode": "4064666341712",
    "name": "Wella Koleston Supreme Saç Boyası 5/0 Açık Kahve",
    "source": "local_gratis"
  },
  {
    "barcode": "4064666341736",
    "name": "Koleston Wella Supreme Saç Boyası 66/46 Aşk Alevi",
    "source": "local_rossmann"
  },
  {
    "barcode": "4064666341743",
    "name": "Wella Koleston Supreme Saç Boyası 6/7 Çikolata Kahve",
    "source": "local_gratis"
  },
  {
    "barcode": "4064666341750",
    "name": "Wella Koleston Supreme Saç Boyası 7/77 Işıltılı Kahve",
    "source": "local_gratis"
  },
  {
    "barcode": "4064666341774",
    "name": "Wella Koleston Supreme Saç Boyası 7/3 Fındık Kabuğu",
    "source": "local_gratis"
  },
  {
    "barcode": "4064666341781",
    "name": "Koleston Wella Supreme Saç Boyası 44/46 Koyu Ateşli Kızıl",
    "source": "local_rossmann"
  },
  {
    "barcode": "4064666341798",
    "name": "Wella Koleston Supreme Saç Boyası 55/46 Kızıl Büyü",
    "source": "local_gratis"
  },
  {
    "barcode": "4064666341804",
    "name": "Wella Koleston Supreme Saç Boyası 2/8 Mavi Siyah",
    "source": "local_gratis"
  },
  {
    "barcode": "4064666341811",
    "name": "Wella Koleston Supreme Saç Boyası 5/4 Açık Kestane",
    "source": "local_gratis"
  },
  {
    "barcode": "4064666341828",
    "name": "Wella Koleston Supreme Saç Boyası 3/4 Koyu Kestane",
    "source": "local_gratis"
  },
  {
    "barcode": "4064666341835",
    "name": "Wella Koleston Supreme Saç Boyası 8/0 Açık Kumral",
    "source": "local_gratis"
  },
  {
    "barcode": "4064666341842",
    "name": "Wella Koleston Supreme Saç Boyası 77/44 Kor Ateş Kızılı",
    "source": "local_gratis"
  },
  {
    "barcode": "4064666341859",
    "name": "Wella Koleston Supreme Saç Boyası 4/0 Kahve",
    "source": "local_gratis"
  },
  {
    "barcode": "4064666341866",
    "name": "Koleston Wella Supreme Saç Boyası 8/74 Gizemli Kahve",
    "source": "local_rossmann"
  },
  {
    "barcode": "4064666341873",
    "name": "Koleston Wella Supreme Saç Boyası 9/1 Özel Açık Kül Sarısı",
    "source": "local_rossmann"
  },
  {
    "barcode": "4064666341910",
    "name": "Wella Koleston Supreme Saç Boyası 9/0 Sarı",
    "source": "local_gratis"
  },
  {
    "barcode": "4064666341934",
    "name": "Wella Koleston Supreme Saç Boyası 12/0 Çok Açık Doğal Sarı",
    "source": "local_gratis"
  },
  {
    "barcode": "4064666341941",
    "name": "Wella Koleston Kit Saç Boyası Extra Intense Ash Blonde 12/11",
    "source": "local_watsons"
  },
  {
    "barcode": "4064666341958",
    "name": "Koleston Saç Boyası 12/1 Küllü Sarı 218 ml",
    "source": "local_rossmann"
  },
  {
    "barcode": "4064666576701",
    "name": "Wella Koleston Intense Saç Boyası 10/0 Çok Açık Sarı",
    "source": "local_gratis"
  },
  {
    "barcode": "4064666576718",
    "name": "Wella Koleston Intense Saç Boyası 9/3 Açık Altın Sarısı",
    "source": "local_gratis"
  },
  {
    "barcode": "4064666576725",
    "name": "Wella Koleston Intense Saç Boyası 9/0 Sarı",
    "source": "local_gratis"
  },
  {
    "barcode": "4064666576732",
    "name": "Wella Koleston Intense Saç Boyası 8/0 Açık Kumral",
    "source": "local_gratis"
  },
  {
    "barcode": "4064666576749",
    "name": "Wella Koleston Intense Saç Boyası 7/3 Fındık Kabuğu",
    "source": "local_gratis"
  },
  {
    "barcode": "4064666576756",
    "name": "Wella Koleston Intense Saç Boyası 7/0 Kumral",
    "source": "local_gratis"
  },
  {
    "barcode": "4064666576763",
    "name": "Wella Koleston Intense Saç Boyası 6/7 Çikolata Kahve",
    "source": "local_gratis"
  },
  {
    "barcode": "4064666576770",
    "name": "Wella Koleston Intense Saç Boyası 6/0 Koyu Kumral",
    "source": "local_gratis"
  },
  {
    "barcode": "4064666576787",
    "name": "Wella Koleston Intense Saç Boyası 5/66 Patlıcan Moru",
    "source": "local_gratis"
  },
  {
    "barcode": "4064666576794",
    "name": "Wella Koleston Intense Saç Boyası 5/4 Açık Kestane",
    "source": "local_gratis"
  },
  {
    "barcode": "4064666576800",
    "name": "Wella Koleston Intense Saç Boyası 3/0 Koyu Kahve",
    "source": "local_gratis"
  },
  {
    "barcode": "4064666576817",
    "name": "Wella Koleston Intense Saç Boyası 1/0 Mavi Siyah",
    "source": "local_gratis"
  },
  {
    "barcode": "4064666576824",
    "name": "Wella Koleston Intense Saç Boyası 10/81 Çok Açık Küllü İnci Sarısı",
    "source": "local_gratis"
  },
  {
    "barcode": "4064666576831",
    "name": "Wella Koleston Intense Saç Boyası 8/11 Ekstra Açık Küllü Kumral",
    "source": "local_gratis"
  },
  {
    "barcode": "4064666576848",
    "name": "Wella Koleston Intense Saç Boyası 7/11 Ekstra Küllü Kumral",
    "source": "local_gratis"
  },
  {
    "barcode": "4064666576855",
    "name": "Wella Koleston Intense Saç Boyası 5/1 Açık Küllü Kahve",
    "source": "local_gratis"
  },
  {
    "barcode": "4064666576862",
    "name": "Wella Koleston Intense Saç Boyası 4/1 Küllü Kahve",
    "source": "local_gratis"
  },
  {
    "barcode": "4064666576879",
    "name": "Wella Koleston Intense Saç Boyası 7/17 Buzlu Çikolata",
    "source": "local_gratis"
  },
  {
    "barcode": "4064666582931",
    "name": "Wella Professionals Fusion Yoğun Onarıcı Şampuan 250 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "4064666583259",
    "name": "Wella Professionals Oil Reflections Işıltı Sağlayan Şampuan 250 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "4064666583648",
    "name": "Wella Professionals Elements Yatıştırıcı Şampuan 250 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "4064666585307",
    "name": "Wella Professionals Invigo Balance Derinlemesine Temizleyici Şampuan 300 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "4064666585314",
    "name": "Wella Professionals Invigo Balance Yatıştırıcı Parfümsüz Saç Maskesi 150 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "4064666585376",
    "name": "Wella Professionals Invigo Volume Boost Hacim Kazandıran Saç Bakım Spreyi 150 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "4064666585451",
    "name": "Wella Professionals Invigo Volume Boost Hacim Kazandıran Şampuan 300 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "4064666585543",
    "name": "Wella Professionals Invigo Nutri Enrich Derinlemesine Besleyici Şampuan 300 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "4064666585567",
    "name": "Wella Professionals Invigo Nutri Enrich Derinlemesine Besleyici Saç Bakım Kremi 200 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "4064666585598",
    "name": "Wella Professionals Invigo Nutri Enrich Derinlemesine Besleyici Saç Maskesi 150 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "4064666585741",
    "name": "Wella Professionals Invigo Brilliance İnce Telli Saçlar İçin Renk Koruyucu Saç Maskesi 150 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "4064666587585",
    "name": "Wella Wellaflex Men Express Fix Ekspres Sabit Tutucu Saç Spreyi Ultra Strong Hold 250 ml",
    "source": "local_rossmann"
  },
  {
    "barcode": "4064666587592",
    "name": "Wellaflex Men Wax Matte Paste Ultra Güçlü 75 ml",
    "source": "local_rossmann"
  },
  {
    "barcode": "4064666587608",
    "name": "Wella Wellaflex Men Full Boost Thickening Daha Kalın Telli Ve Dolgun Görünümlü Saçlar İçin Kafein İçeren Güçlü Jel Saç Spreyi Strong Hold 150 ml",
    "source": "local_rossmann"
  },
  {
    "barcode": "4064666594590",
    "name": "Wella Wellaflex 2 Days Volume 2 Gün Boyunca Hacim Veren Saç Spreyi Extra Strong Hold 400 ml - 4/5 Hold",
    "source": "local_gratis"
  },
  {
    "barcode": "4064666594606",
    "name": "Wella Wellaflex Invisible Hold Görünmez Tutuş Sağlayan Saç Spreyi Extra Strong Hold 400 ml - 4/5 Hold",
    "source": "local_gratis"
  },
  {
    "barcode": "4064666622804",
    "name": "Wella Professionals Elements Yenileyici Bakım Kremi 200 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "4064666717944",
    "name": "Wella Professionals Nutricurls Kıvırcık Saçlar İçin Micellar Şampuan 250 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "4064666726793",
    "name": "Wella Koleston Supreme Saç Boyası 7/1 Küllü Kumral (Sonsuz Işıltılı Küllü Tonlar)",
    "source": "local_gratis"
  },
  {
    "barcode": "4064666726847",
    "name": "Wella Koleston Supreme Saç Boyası 6/0 Koyu Kumral",
    "source": "local_gratis"
  },
  {
    "barcode": "4064666726892",
    "name": "Wella Koleston Supreme Saç Boyası 7/0 Kumral",
    "source": "local_gratis"
  },
  {
    "barcode": "4064666726946",
    "name": "Koleston Wella Supreme Sonsuz Işıltılı Küllü Tonlar Saç Boyası 6/1 Koyu Küllü Kumral",
    "source": "local_rossmann"
  },
  {
    "barcode": "4064666726991",
    "name": "Wella Koleston Supreme Saç Boyası 8/1 Açık Küllü Kumral (Sonsuz Işıltılı Küllü Tonlar)",
    "source": "local_gratis"
  },
  {
    "barcode": "4064666802282",
    "name": "Wella Wellaflex Invisible Hold Görünmez Tutuş Sağlayan Saç Spreyi Extra Strong Hold 75 ml - 4/5 Hold",
    "source": "local_gratis"
  },
  {
    "barcode": "4064666943022",
    "name": "Wella Deluxe Isıya Karşı Koruyucu Sprey 150 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "4064666943206",
    "name": "Wella Deluxe Kolay Tarama & Güçlendirici Serum 100 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "4064666943213",
    "name": "Wella Deluxe Root Lift (Kök Hacim) Losyon 100 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "4064666943220",
    "name": "Wella Deluxe Elektriklenme Karşıtı Pürüzsüzleştirici Saç Bakım Kremi 150 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "4064666943237",
    "name": "Wella Deluxe Bukle Canlandırıcı Köpük 200 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "4067971109732",
    "name": "Bonacure Clean Nem Yükleme Kremi 200 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "4067971109817",
    "name": "Bonacure Clean Nem Yükleme Şampuanı 250 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "4067971110257",
    "name": "Bonacure Clean Nem Yükleme Kürü 200 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "4067971163857",
    "name": "Bonacure Clean Acil Kurtarma Şampuanı 250 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "4067971163932",
    "name": "Bonacure Clean Acil Kurtarma Saç Kremi 200 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "4067971164052",
    "name": "Bonacure Clean Acil Kurtarma Kürü 200 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "4067971177328",
    "name": "Osis G. Force Strong Control Gel Güçlü Tutucu Saç Jölesi 150 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "4067971178110",
    "name": "Bonacure Clean Renk Koruyucu Kür 200 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "4067971185361",
    "name": "Osis Thrill Elastik Lifli Gum Şekillendirici 100 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "4068134000507",
    "name": "Isana Professional Saç Maskesi Soğuk Sarı 150 ml",
    "source": "local_rossmann"
  },
  {
    "barcode": "4068134002327",
    "name": "Isana Professional Tonik Biberiye 100 ml",
    "source": "local_rossmann"
  },
  {
    "barcode": "4068134005724",
    "name": "For Your Beauty Saç Açıcı Tarak Geri Dönüşümlü 1 adet",
    "source": "local_rossmann"
  },
  {
    "barcode": "4068134005946",
    "name": "For Your Beauty Volkan Taşı Roller Yağ Emici",
    "source": "local_rossmann"
  },
  {
    "barcode": "4068134006424",
    "name": "Isana Kavanoz Vücut Kremi %5 Üre ve Cica 400 ml",
    "source": "local_rossmann"
  },
  {
    "barcode": "4068134009579",
    "name": "Alterra Saç Yağı Biberiye 50 ml",
    "source": "local_rossmann"
  },
  {
    "barcode": "4068134009791",
    "name": "Sunozon Yüz Kremi Glow Vitamin C+E SPF50 50 ml",
    "source": "local_rossmann"
  },
  {
    "barcode": "4068134014634",
    "name": "For Your Beauty Gua Sha Masaj Taşı Kelebek 1 adet",
    "source": "local_rossmann"
  },
  {
    "barcode": "4068134014658",
    "name": "Isana Professional Plex Renk Koruyucu Krem Turunculaştırma Karşıtı 20 ml",
    "source": "local_rossmann"
  },
  {
    "barcode": "4068134014740",
    "name": "Sunozon Güneş Koruyucu Stick SPF50+ 20 gr",
    "source": "local_rossmann"
  },
  {
    "barcode": "4068134015952",
    "name": "For Your Beauty Roller Çift Toplu Çinko",
    "source": "local_rossmann"
  },
  {
    "barcode": "4068134022776",
    "name": "Isana Göz Altı Pedi Hidrojel Vitamin C",
    "source": "local_rossmann"
  },
  {
    "barcode": "4068134023001",
    "name": "Isana Vücut Losyonu Sıkılaştırıcı Q10 C Vitamini 300 ml",
    "source": "local_rossmann"
  },
  {
    "barcode": "4068134023452",
    "name": "Isana Tropical Dream Vücut Spreyi Limited Edition 200 ml",
    "source": "local_rossmann"
  },
  {
    "barcode": "4068134024947",
    "name": "Isana Professional Argan Yağı İçerikli Saç Bakım Yağı, Kuru ve Çok Yıpranmış Saçlar 100 ml",
    "source": "local_rossmann"
  },
  {
    "barcode": "4068134028129",
    "name": "Isana Hydro Booster Kağıt Yüz Maskesi, Nemsiz Cilt Tekli",
    "source": "local_rossmann"
  },
  {
    "barcode": "4068134030849",
    "name": "Isana Love Your Skin Yüz Temizleme Köpüğü AHA 150 ml",
    "source": "local_rossmann"
  },
  {
    "barcode": "4068134031273",
    "name": "Isana Kids Kolay Saç Tarama Spreyi Meyveli Koku 150 ml",
    "source": "local_rossmann"
  },
  {
    "barcode": "4068134031921",
    "name": "Isana Kids Kolay Tarama Şampuanı Meyveli Koku 300 ml",
    "source": "local_rossmann"
  },
  {
    "barcode": "4068134031945",
    "name": "Isana Kids Şampuan ve Duş Jeli 2'si Bir Arada, Çok Hassas Cilt 200 ml",
    "source": "local_rossmann"
  },
  {
    "barcode": "4068134031976",
    "name": "Isana Kids Duş Jeli ve Şampuan 2'si 1 Arada Dinozor Arkadaşlar 300 ml",
    "source": "local_rossmann"
  },
  {
    "barcode": "4068134031990",
    "name": "Isana Kids Duş Jeli ve Şampuan 3'ü 1 Arada Foto Star Meyvemsi 300 ml",
    "source": "local_rossmann"
  },
  {
    "barcode": "4068134032003",
    "name": "Isana Kids Saç Bakım Spreyi Unicorn 200 ml",
    "source": "local_rossmann"
  },
  {
    "barcode": "4068134036117",
    "name": "Isana Love Your Skin Yüz Temizleme Balmı 100 ml",
    "source": "local_rossmann"
  },
  {
    "barcode": "4068134039743",
    "name": "Isana Med Şampuan Ultra Hassas 400 ml",
    "source": "local_rossmann"
  },
  {
    "barcode": "4068134039859",
    "name": "Sunozon Güneş Sütü SPF 30 Glow, 200 ml",
    "source": "local_rossmann"
  },
  {
    "barcode": "4068134042859",
    "name": "Sunozon Hydro Yüz Kremi SPF 30 50 ml",
    "source": "local_rossmann"
  },
  {
    "barcode": "4068134042866",
    "name": "Sunozon Yüz Kremi SPF 50+ Sensitive 50 ml",
    "source": "local_rossmann"
  },
  {
    "barcode": "4068134043313",
    "name": "Isana Yüz Yıkama Kremi Pure 150 ml",
    "source": "local_rossmann"
  },
  {
    "barcode": "4068134045881",
    "name": "Isana Love Your Skin Göz Kremi Peptit 15 ml",
    "source": "local_rossmann"
  },
  {
    "barcode": "4068134045898",
    "name": "Isana Love Your Skin Tonik Sprey Glow 100 ml",
    "source": "local_rossmann"
  },
  {
    "barcode": "4068134046413",
    "name": "For Your Beauty Roller Kaplan Gözü Kuvars",
    "source": "local_rossmann"
  },
  {
    "barcode": "4068134047359",
    "name": "Isana Love Your Skin Serum Seramid Niacinamid 30 ml",
    "source": "local_rossmann"
  },
  {
    "barcode": "4068134047779",
    "name": "Isana Peeling Kremi C Vitamini 75 ml",
    "source": "local_rossmann"
  },
  {
    "barcode": "4068134049971",
    "name": "Isana Eldiven El Maskesi Şeftali 1 Adet",
    "source": "local_rossmann"
  },
  {
    "barcode": "4068134055118",
    "name": "Isana Yüz Temizleme Köpüğü Bakım Etkili 165 ml",
    "source": "local_rossmann"
  },
  {
    "barcode": "4068134055200",
    "name": "Isana Wax Stick 25 ml",
    "source": "local_rossmann"
  },
  {
    "barcode": "4068134055224",
    "name": "Isana Isı Koruyucu Sprey OMG 200 ml",
    "source": "local_rossmann"
  },
  {
    "barcode": "4068134055231",
    "name": "Isana Kuru Şampuan Amour Cherry 200 ml",
    "source": "local_rossmann"
  },
  {
    "barcode": "4068134055248",
    "name": "Isana Kuru Şampuan Hassas 200 ml",
    "source": "local_rossmann"
  },
  {
    "barcode": "4068134055255",
    "name": "Isana Kuru Şampuan Köpük 200 ml",
    "source": "local_rossmann"
  },
  {
    "barcode": "4068134055279",
    "name": "Isana Kıvırcık Saç Şekillendirici Jel 150 ml",
    "source": "local_rossmann"
  },
  {
    "barcode": "4068134057389",
    "name": "Altapharma At Kestanesi Balsamı 200 ml",
    "source": "local_rossmann"
  },
  {
    "barcode": "4068134060556",
    "name": "Isana Professional Plex Saç Bakım Yağı 50 ml",
    "source": "local_rossmann"
  },
  {
    "barcode": "4068134060563",
    "name": "Isana Professional Plex Saç Serumu 100 ml",
    "source": "local_rossmann"
  },
  {
    "barcode": "4068134063557",
    "name": "For Your Beauty Glow Yüz Küpü Buz",
    "source": "local_rossmann"
  },
  {
    "barcode": "4068134067845",
    "name": "Isana Kağıt Maske Retinol Power",
    "source": "local_rossmann"
  },
  {
    "barcode": "4068134070760",
    "name": "Isana Aktif Kömür Peeling 100 ml",
    "source": "local_rossmann"
  },
  {
    "barcode": "4068134070982",
    "name": "For Your Beauty Spiral Tarak Kırışıklık Açıcı 1 adet",
    "source": "local_rossmann"
  },
  {
    "barcode": "4068134071118",
    "name": "Isana Şampuan Marula Yağı 300 ml",
    "source": "local_rossmann"
  },
  {
    "barcode": "4068134071125",
    "name": "Isana Saç Kremi Marula Yağı 300 ml",
    "source": "local_rossmann"
  },
  {
    "barcode": "4068134071132",
    "name": "Isana Şampuan Nemlendirici 300 ml",
    "source": "local_rossmann"
  },
  {
    "barcode": "4068134071842",
    "name": "For Your Beauty Saç Tokası French",
    "source": "local_rossmann"
  },
  {
    "barcode": "4068134074638",
    "name": "Isana Professional Plex Kuru Şampuan 200 ml",
    "source": "local_rossmann"
  },
  {
    "barcode": "4068134074829",
    "name": "Isana Med Yüz Ve Vücut Yağı Ultra Sensitive 150 ml",
    "source": "local_rossmann"
  },
  {
    "barcode": "4068134075857",
    "name": "Isana Reine Haut Yüz Yıkama Köpüğü Sali̇si̇li̇k Asit, 165 ml",
    "source": "local_rossmann"
  },
  {
    "barcode": "4068134079534",
    "name": "Isana Serum Aktif Kömür 30 ml",
    "source": "local_rossmann"
  },
  {
    "barcode": "4068134079732",
    "name": "Isana Göz Makyajı Temizleme Suyu Yağ İçerikli 100 ml",
    "source": "local_rossmann"
  },
  {
    "barcode": "4068134081742",
    "name": "Isana Professional Saç Bakım Kremi Argan Durulanmayan 100 ml",
    "source": "local_rossmann"
  },
  {
    "barcode": "4068134081810",
    "name": "Isana Göz Altı Pedi Hidrojel Hyaluron & Yeşil Çay 30 Çift",
    "source": "local_rossmann"
  },
  {
    "barcode": "4068134082282",
    "name": "Isana Rainbow Clouds Kuru Şampuan 150 ml",
    "source": "local_rossmann"
  },
  {
    "barcode": "4068134083036",
    "name": "Sunozon Güneş Spreyi̇ Transparan Spf50+ Hassas, 200 ml",
    "source": "local_rossmann"
  },
  {
    "barcode": "4068134086686",
    "name": "Isana Saç Spreyi Güçlü Tutuş, UV Filtreli 250 ml",
    "source": "local_rossmann"
  },
  {
    "barcode": "4068134086693",
    "name": "Isana Saç Spreyi Ekstra Güçlü Tutuş, UV Filtreli 250 ml",
    "source": "local_rossmann"
  },
  {
    "barcode": "4068134087058",
    "name": "Isana OMG Glow Saç Spreyi 250 ml",
    "source": "local_rossmann"
  },
  {
    "barcode": "4068134087652",
    "name": "For Your Beauty Göz Altı Pedi Yeniden Kullanılabilir Self Love",
    "source": "local_rossmann"
  },
  {
    "barcode": "4068134088864",
    "name": "Isana Serum C Vitamini Gece&Gündüz 30 ml",
    "source": "local_rossmann"
  },
  {
    "barcode": "4068134089489",
    "name": "Isana Gece Bakım Kremi Retinal 50 ml",
    "source": "local_rossmann"
  },
  {
    "barcode": "4068134090041",
    "name": "For Your Beauty Saç Fırçası Sleek Look",
    "source": "local_rossmann"
  },
  {
    "barcode": "4068134090195",
    "name": "For Your Beauty Gua Sha Love",
    "source": "local_rossmann"
  },
  {
    "barcode": "4068134099792",
    "name": "Isana Tonik Ped C Vitamini 60'lı",
    "source": "local_rossmann"
  },
  {
    "barcode": "4068134100023",
    "name": "Isana Professional Saç Derisi Peeling 150 ml",
    "source": "local_rossmann"
  },
  {
    "barcode": "4068134100030",
    "name": "Isana Professional Saç Derisi Serumu 150 ml",
    "source": "local_rossmann"
  },
  {
    "barcode": "4068134101068",
    "name": "Isana Göz Altı Pedi Hidrojel Fruit Jelly",
    "source": "local_rossmann"
  },
  {
    "barcode": "4068134101075",
    "name": "Isana Göz Altı Pedi Hidrojel Espresso Yourself",
    "source": "local_rossmann"
  },
  {
    "barcode": "4068134101105",
    "name": "Isana Kağıt Maske Peptit&Nar",
    "source": "local_rossmann"
  },
  {
    "barcode": "4068134101129",
    "name": "Isana Kağıt Maske Retinol Acai",
    "source": "local_rossmann"
  },
  {
    "barcode": "4068134101150",
    "name": "Isana Kağıt Maske Hyaluron Deep Breathe",
    "source": "local_rossmann"
  },
  {
    "barcode": "4068134101167",
    "name": "Isana Kağıt Maske Cica Pawsitive Vibes",
    "source": "local_rossmann"
  },
  {
    "barcode": "4068134103802",
    "name": "Sunozon Yüz Kremi Leke Karşıtı Spf50+ 50 ml",
    "source": "local_rossmann"
  },
  {
    "barcode": "4068134103826",
    "name": "Sunozon Güneş Sonrası Bakım Yağı Glow, 100 ml",
    "source": "local_rossmann"
  },
  {
    "barcode": "4068134104311",
    "name": "Isana Hydro Bakım Jeli Aloe Vera Yüzde 99 200 ml",
    "source": "local_rossmann"
  },
  {
    "barcode": "4068134104496",
    "name": "Isana Jelly Serum Glow Melon Dream 30 ml",
    "source": "local_rossmann"
  },
  {
    "barcode": "4068134104502",
    "name": "Isana Jelly Kağıt Maske Melon Dream",
    "source": "local_rossmann"
  },
  {
    "barcode": "4068134104670",
    "name": "Rival Loves Me Dudak Serumu",
    "source": "local_rossmann"
  },
  {
    "barcode": "4068134104922",
    "name": "Isana Vücut Yağı Lumiskin 90 ml",
    "source": "local_rossmann"
  },
  {
    "barcode": "4068134106995",
    "name": "Isana Oriental Kuru Şampuan 200 ml",
    "source": "local_rossmann"
  },
  {
    "barcode": "4068134107978",
    "name": "Isana Makyaj Temizleme Suyu Misel 200 ml",
    "source": "local_rossmann"
  },
  {
    "barcode": "4068134110596",
    "name": "Isana Eldiven El Maskesi Üre",
    "source": "local_rossmann"
  },
  {
    "barcode": "4068134110671",
    "name": "Isana Lift Triple Serum Retinol 30ml",
    "source": "local_rossmann"
  },
  {
    "barcode": "4068134111142",
    "name": "Isana El Kremi Yoğun Bakım 100 ml",
    "source": "local_rossmann"
  },
  {
    "barcode": "4068134111159",
    "name": "Isana El Kremi Q10 C Vitamini 100 ml",
    "source": "local_rossmann"
  },
  {
    "barcode": "4068134111166",
    "name": "Isana El Kremi Onarıcı & Hızlı Emilen 100 ml",
    "source": "local_rossmann"
  },
  {
    "barcode": "4068134111173",
    "name": "Isana El Kremi Hassas 100 ml",
    "source": "local_rossmann"
  },
  {
    "barcode": "4068134111234",
    "name": "Isana Vücut Peelingi Epilasyon Mango & Papaya 175 ml",
    "source": "local_rossmann"
  },
  {
    "barcode": "4068134111401",
    "name": "Isana Coco Crush Aydınlatıcı Vücut Kremi 100 ml",
    "source": "local_rossmann"
  },
  {
    "barcode": "4068134115355",
    "name": "Isana Tonik Sprey Reine Haut 100 ml",
    "source": "local_rossmann"
  },
  {
    "barcode": "4068134116345",
    "name": "Isana Professional Saç Kremi Hyaluronik Asit 200 ml",
    "source": "local_rossmann"
  },
  {
    "barcode": "4068134116550",
    "name": "Isana Med Yüz Yıkama Yağı Ultra Hassas 100 ml",
    "source": "local_rossmann"
  },
  {
    "barcode": "4068134116673",
    "name": "Isana Kağıt Maske Choco Berry Dream",
    "source": "local_rossmann"
  },
  {
    "barcode": "4068134118981",
    "name": "Isana Lift Triple Gündüz Kremi Besleyici ve Sıkılaştırıcı Etki SPF15 50 ml",
    "source": "local_rossmann"
  },
  {
    "barcode": "4068134118998",
    "name": "Isana Lift Triple Gece Kremi Besleyici ve Sıkılaştırıcı Etki 50 ml",
    "source": "local_rossmann"
  },
  {
    "barcode": "4068134119001",
    "name": "Isana Lift Triple Göz Kremi 40-60 Yaş 15ml",
    "source": "local_rossmann"
  },
  {
    "barcode": "4068134123329",
    "name": "Isana OMG Hacimlendirici Saç Köpüğü 150 ml",
    "source": "local_rossmann"
  },
  {
    "barcode": "4068134123459",
    "name": "Isana Kuru Şampuan Bloom Boost 200 ml",
    "source": "local_rossmann"
  },
  {
    "barcode": "4068134124364",
    "name": "Isana Hediye Seti Spa Serisi",
    "source": "local_rossmann"
  },
  {
    "barcode": "4068134124722",
    "name": "Isana Akne Bandı Hidrokolloid 32'li",
    "source": "local_rossmann"
  },
  {
    "barcode": "4068134125262",
    "name": "Isana Siyah Nokta Bandı Çay Ağacı 6'lı",
    "source": "local_rossmann"
  },
  {
    "barcode": "4068134127402",
    "name": "Isana Professional Molecular Repair Şampuan 250 ml",
    "source": "local_rossmann"
  },
  {
    "barcode": "4068134127419",
    "name": "Isana Professional Molecular Repair Saç Bakım Kremi 250 ml",
    "source": "local_rossmann"
  },
  {
    "barcode": "4068134127426",
    "name": "Isana Professional Molecular Repair Durulanmayan Saç Serumu 100 ml",
    "source": "local_rossmann"
  },
  {
    "barcode": "4068134127433",
    "name": "Isana Professional Molecular Repair Saç Yağı 75 ml",
    "source": "local_rossmann"
  },
  {
    "barcode": "4068134127440",
    "name": "Isana Professional Molecular Repair Saç Bakım Spreyi Durulanmayan Sprey 150 ml",
    "source": "local_rossmann"
  },
  {
    "barcode": "4068134127556",
    "name": "Isana Kağıt Maske Love Coffee 1 Adet",
    "source": "local_rossmann"
  },
  {
    "barcode": "4068134128492",
    "name": "Isana Korean Skincare Köpük Temizleyici Kremsi Cica & BHA 150 ml",
    "source": "local_rossmann"
  },
  {
    "barcode": "4068134128515",
    "name": "Isana Korean Skincare Nemlendirici Krem Cica & Panthenol 50 ml",
    "source": "local_rossmann"
  },
  {
    "barcode": "4068134128706",
    "name": "Isana Korean Skincare Akne Bandı Cica & Hidrokolloid 30'lu",
    "source": "local_rossmann"
  },
  {
    "barcode": "4068134128898",
    "name": "For Your Beauty Roller Bambu",
    "source": "local_rossmann"
  },
  {
    "barcode": "4068134129246",
    "name": "Isana Professional Hacim Pudrası Maxi Efekt Rose 10 gr",
    "source": "local_rossmann"
  },
  {
    "barcode": "4068134129390",
    "name": "Alterra Saç Serumu Nemlendirici 100 ml",
    "source": "local_rossmann"
  },
  {
    "barcode": "4068134129413",
    "name": "Isana Vücut Losyonu Glow Gül Kuvars 200 ml",
    "source": "local_rossmann"
  },
  {
    "barcode": "4068134131195",
    "name": "Alterra Saç Kremi Biotin&Kafein 200 ml",
    "source": "local_rossmann"
  },
  {
    "barcode": "4068134135490",
    "name": "Isana Professional Şampuan Mentol & Biberiye 250 ml",
    "source": "local_rossmann"
  },
  {
    "barcode": "4068134137036",
    "name": "Alterra Şampuan Kepek Karşıtı Aloe Vera 200 ml",
    "source": "local_rossmann"
  },
  {
    "barcode": "4068134137098",
    "name": "Isana Med Akne Karşıtı Krem Ultra Hassas 50 ml",
    "source": "local_rossmann"
  },
  {
    "barcode": "4068134137708",
    "name": "Isana Serum Illuminous Touch Leke Karşıtı 30 ml",
    "source": "local_rossmann"
  },
  {
    "barcode": "4068134137715",
    "name": "Isana Serum Illuminous Touch Yaşlanma Leke Karşıtı 30 ml",
    "source": "local_rossmann"
  },
  {
    "barcode": "4068134137722",
    "name": "Isana Gündüz Kremi Illuminous Touch Leke Karşıtı Spf 50 30 ml",
    "source": "local_rossmann"
  },
  {
    "barcode": "4068134142429",
    "name": "Isana Vücut Losyonu Mystic Beauty 150 ml",
    "source": "local_rossmann"
  },
  {
    "barcode": "4068134142580",
    "name": "Isana El Losyonu Mystic Beauty 200 ml",
    "source": "local_rossmann"
  },
  {
    "barcode": "4068134142672",
    "name": "Alterra Saç ve Saç Derisi Toniği Biberiye 150 ml",
    "source": "local_rossmann"
  },
  {
    "barcode": "4068134143051",
    "name": "Isana Hidrojel Nemlendirici Stick 2 In1",
    "source": "local_rossmann"
  },
  {
    "barcode": "4068134143808",
    "name": "Isana Saç Kremi Bukle Belirginleştirici 150 ml",
    "source": "local_rossmann"
  },
  {
    "barcode": "4068134146861",
    "name": "Alterra Çi̇ft Fazllı Serum Gül Özlü 30 ml",
    "source": "local_rossmann"
  },
  {
    "barcode": "4068134148469",
    "name": "Isana Med Yüz Kremi Bariyer Koruyucu 50 ml",
    "source": "local_rossmann"
  },
  {
    "barcode": "4068134149343",
    "name": "Isana Saç ve Vücut Spreyi Fragrance 50 ml",
    "source": "local_rossmann"
  },
  {
    "barcode": "4068134151247",
    "name": "Isana Gözenek Arındırıcı Bant Clear Up 1 adet",
    "source": "local_rossmann"
  },
  {
    "barcode": "4068134151278",
    "name": "Isana Professional Saç Bakım Kremi Express Onarım 150 ml",
    "source": "local_rossmann"
  },
  {
    "barcode": "4068134152718",
    "name": "Isana Clear Skin Akne Bandı Mikro İğne 6'lı",
    "source": "local_rossmann"
  },
  {
    "barcode": "4068134152893",
    "name": "Isana Med Serum Ultra Hassas Rahatlatıcı 30 ml",
    "source": "local_rossmann"
  },
  {
    "barcode": "4068134152923",
    "name": "Isana Hidrojel Gece Maskesi Kolajen, 1 Adet",
    "source": "local_rossmann"
  },
  {
    "barcode": "4068134156501",
    "name": "Isana Kağıt Maske Dream Cloud, 1 Adet",
    "source": "local_rossmann"
  },
  {
    "barcode": "4068134156525",
    "name": "Isana Clear Skin Serum Akne Karşıtı, 30 ml",
    "source": "local_rossmann"
  },
  {
    "barcode": "4068134156532",
    "name": "Isana Clear Skin Maske Sivilce Karşıtı, 2x8ml",
    "source": "local_rossmann"
  },
  {
    "barcode": "4068134157003",
    "name": "Isana Duş Kopüğü ve Vücut Losyonu Diamond Blossom, 200 ml",
    "source": "local_rossmann"
  },
  {
    "barcode": "4068134157201",
    "name": "Isana Dudak Bakım Kremi̇ Soft Rose 12 ml",
    "source": "local_rossmann"
  },
  {
    "barcode": "4068134157218",
    "name": "Isana Vücut Peelingi Sweet Donut 250 ml",
    "source": "local_rossmann"
  },
  {
    "barcode": "4068134158321",
    "name": "Isana Saç Spreyi̇ Isı Koruyucu ve Sleek Look Omg, 200 ml",
    "source": "local_rossmann"
  },
  {
    "barcode": "4068134160812",
    "name": "Isana Pure Yüz Temi̇zleme Yağı 100 ml",
    "source": "local_rossmann"
  },
  {
    "barcode": "4068134160829",
    "name": "Isana Pure Bakım Ampulü, 3x2ml",
    "source": "local_rossmann"
  },
  {
    "barcode": "4068134160836",
    "name": "Isana Pure Gündüz Kremi Spf50, 50 ml",
    "source": "local_rossmann"
  },
  {
    "barcode": "4068134160843",
    "name": "Isana Pure Vücut Losyonu 200 ml",
    "source": "local_rossmann"
  },
  {
    "barcode": "4068134160850",
    "name": "Isana Pure Vücut Peelingi Kremsi 250 ml",
    "source": "local_rossmann"
  },
  {
    "barcode": "4068134162625",
    "name": "Isana Korean Skincare Nemlendirici Göz Serumu, 15 ml",
    "source": "local_rossmann"
  },
  {
    "barcode": "4068134162991",
    "name": "Isana El Losyonu Diamond Blossom, 200 ml",
    "source": "local_rossmann"
  },
  {
    "barcode": "4068134163417",
    "name": "Isana Vücut Kremi Kavanoz Vanilya 500 ml",
    "source": "local_rossmann"
  },
  {
    "barcode": "4068134168283",
    "name": "Isana Vücut Spreyi Fragrance Vanilla 200 ml",
    "source": "local_rossmann"
  },
  {
    "barcode": "4068134170026",
    "name": "Isana Kuru Şampuan Orange Harmony 200 ml",
    "source": "local_rossmann"
  },
  {
    "barcode": "4068134170033",
    "name": "Isana Haci̇m Pudrası Orange Harmony, 10 gr",
    "source": "local_rossmann"
  },
  {
    "barcode": "4068134170040",
    "name": "Isana Saç Parfümü Orange Harmony 100 ml",
    "source": "local_rossmann"
  },
  {
    "barcode": "4068134173973",
    "name": "Isana Mikrofiber Yüz Temizlik Pedi 2'li",
    "source": "local_rossmann"
  },
  {
    "barcode": "4068134174529",
    "name": "Isana Korean Skincare Tonik Ped Cica & AHA/PHA 60'lı",
    "source": "local_rossmann"
  },
  {
    "barcode": "4068134174536",
    "name": "Isana Korean Skin Care Power Serum Cica & Niacinamide 30 ml",
    "source": "local_rossmann"
  },
  {
    "barcode": "4068134174543",
    "name": "Isana Korean Skincare Göz Altı Pedi Hidrojel Cica & Hyaluron 30 Çift",
    "source": "local_rossmann"
  },
  {
    "barcode": "4068134177186",
    "name": "Isana Korean Skincare Kağıt Maske Glass Skin 1 Adet",
    "source": "local_rossmann"
  },
  {
    "barcode": "4068134177445",
    "name": "Sunozon Güneş Sütü SPF30 200 ml",
    "source": "local_rossmann"
  },
  {
    "barcode": "4068134179746",
    "name": "Sunozon Çocuk Güneş Koruyucu Sprey 50SPF Hassas Cilt 250 ml",
    "source": "local_rossmann"
  },
  {
    "barcode": "4068134179807",
    "name": "Sunozon Transparan Güneş Koruyucu Sprey 50+SPF 200 ml",
    "source": "local_rossmann"
  },
  {
    "barcode": "4068134179838",
    "name": "Sunozon Güneş Koruyucu Sprey 30SPF Hassas Cilt 200 ml",
    "source": "local_rossmann"
  },
  {
    "barcode": "4068134179876",
    "name": "Sunozon Güneş Koruyucu Sprey SPF 50+ 200 ml",
    "source": "local_rossmann"
  },
  {
    "barcode": "4068134180230",
    "name": "Isana Epilasyon Yağı Tropical Sunset 100 ml",
    "source": "local_rossmann"
  },
  {
    "barcode": "4068134180315",
    "name": "Isana El Kremi Sweet Lemon 100 ml",
    "source": "local_rossmann"
  },
  {
    "barcode": "4068134181329",
    "name": "Isana Vücut Spreyi Fragrance Ocean 200 ml",
    "source": "local_rossmann"
  },
  {
    "barcode": "4068134183286",
    "name": "Alterra Şampuan Biberiye ve Kafein 200 ml",
    "source": "local_rossmann"
  },
  {
    "barcode": "4068134183712",
    "name": "Isana Kids Duş Jeli ve Şampuan 3'ü 1 Arada Futbol Starı Meyvemsi 300 ml",
    "source": "local_rossmann"
  },
  {
    "barcode": "4068134186751",
    "name": "Isana Şampuan Ve Saç Kremi 2in1 Ocean 100 ml",
    "source": "local_rossmann"
  },
  {
    "barcode": "4068134186775",
    "name": "Isana Güneş Öncesi Bakım Spreyi Ocean 200 ml",
    "source": "local_rossmann"
  },
  {
    "barcode": "4068134186942",
    "name": "Isana Bronze And Glow Bronzlaştırıcı Krem 175 ml",
    "source": "local_rossmann"
  },
  {
    "barcode": "4068134186959",
    "name": "Isana Bronze And Glow Bronzlaştırıcı Yağ 75 ml",
    "source": "local_rossmann"
  },
  {
    "barcode": "4068134186966",
    "name": "Isana Bronze And Glow Bronzlaştırıcı Yüz Kremi 25 ml",
    "source": "local_rossmann"
  },
  {
    "barcode": "4068134187024",
    "name": "Isana Saç Parfümü Amor De Sol 100 ml",
    "source": "local_rossmann"
  },
  {
    "barcode": "4068134187055",
    "name": "Isana Kağıt Maske Strawberry Matcha Latte, 1 adet",
    "source": "local_rossmann"
  },
  {
    "barcode": "4068134187086",
    "name": "Isana Dudak Bakım Kremi Strawberry Matcha 4 ml",
    "source": "local_rossmann"
  },
  {
    "barcode": "4068134187123",
    "name": "Isana Saç Maskesi Yoğun Nem 250 ml",
    "source": "local_rossmann"
  },
  {
    "barcode": "4068359038125",
    "name": "Wella Koleston Deluxe Amonyaksız Kit Saç Boyası 10/1 Ektsra Açık Küllü Kumral",
    "source": "local_gratis"
  },
  {
    "barcode": "4068359038132",
    "name": "Wella Koleston Deluxe Amonyaksız Kit Saç Boyası 2/0 Siyah",
    "source": "local_gratis"
  },
  {
    "barcode": "4068359038149",
    "name": "Wella Koleston Deluxe Amonyaksız Kit Saç Boyası 3/0 Koyu Kahve",
    "source": "local_gratis"
  },
  {
    "barcode": "4068359038156",
    "name": "Wella Koleston Deluxe Amonyaksız Kit Saç Boyası 4/0 Kahve",
    "source": "local_gratis"
  },
  {
    "barcode": "4068359038163",
    "name": "Wella Koleston Deluxe Amonyaksız Kit Saç Boyası 4/15 Koyu Küllü Kahve",
    "source": "local_gratis"
  },
  {
    "barcode": "4068359038170",
    "name": "Wella Koleston Deluxe Amonyaksız Kit Saç Boyası 4/63 Koyu Gül Kahvesi",
    "source": "local_gratis"
  },
  {
    "barcode": "4068359038187",
    "name": "Wella Koleston Deluxe Amonyaksız Kit Saç Boyası 5/0 Açık Kahve",
    "source": "local_gratis"
  },
  {
    "barcode": "4068359038194",
    "name": "Wella Koleston Deluxe Amonyaksız Kit Saç Boyası 5/3 Açık Altın Kahve",
    "source": "local_gratis"
  },
  {
    "barcode": "4068359038200",
    "name": "Wella Koleston Deluxe Amonyaksız Kit Saç Boyası 6/0 Koyu Kumral",
    "source": "local_gratis"
  },
  {
    "barcode": "4068359038217",
    "name": "Wella Koleston Deluxe Amonyaksız Kit Saç Boyası 6/7 Çikolata Kahve",
    "source": "local_gratis"
  },
  {
    "barcode": "4068359038224",
    "name": "Wella Koleston Deluxe Amonyaksız Kit Saç Boyası 7/0 Kumral",
    "source": "local_gratis"
  },
  {
    "barcode": "4068359038231",
    "name": "Wella Koleston Deluxe Amonyaksız Kit Saç Boyası 7/1 Küllü Kumral",
    "source": "local_gratis"
  },
  {
    "barcode": "4068359038248",
    "name": "Wella Koleston Deluxe Amonyaksız Kit Saç Boyası 8/0 Açık Kumral",
    "source": "local_gratis"
  },
  {
    "barcode": "4068359038255",
    "name": "Wella Koleston Deluxe Amonyaksız Kit Saç Boyası 8/1 Açık Küllü Kumral",
    "source": "local_gratis"
  },
  {
    "barcode": "4068359038262",
    "name": "Wella Koleston Deluxe Amonyaksız Kit Saç Boyası 8/63 Açık Gül Altın Sarısı",
    "source": "local_gratis"
  },
  {
    "barcode": "4075700044483",
    "name": "Krauterhof At Kestanesi Masaj Jeli 250 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "4075700044537",
    "name": "Krauterhof Jel Aloe Vera 250 ml",
    "source": "local_rossmann"
  },
  {
    "barcode": "4075700104156",
    "name": "Krauterhof Anti Selülit Serum 100 ml",
    "source": "local_rossmann"
  },
  {
    "barcode": "4075700104569",
    "name": "Krauterhof Anti-Cellulite Jel 250 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "4075700104774",
    "name": "Krauterhof Vücut Kremi %10 Üre 200 ml",
    "source": "local_rossmann"
  },
  {
    "barcode": "4084500065567",
    "name": "Pantene Kıvırcık Şekillendirici Durulanmayan Krem 300 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "4103040002952",
    "name": "Sebamed Saç Dökülmesine Karşı Şampuan 400 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "4103040033482",
    "name": "Sebamed Wrinkle Filler Kırışık Karşıtı Dolgunlaştırıcı Krem 50 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "4103040047380",
    "name": "Sebamed Koruyucu Dudak Bakım Kremi SPF 30 1 adet",
    "source": "local_rossmann"
  },
  {
    "barcode": "4103040048981",
    "name": "Sebamed Wrinkle Filler Göz Kremi 15 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "4103040050168",
    "name": "Sebamed Anti Ageing Lifting Serum 30 ml",
    "source": "local_rossmann"
  },
  {
    "barcode": "4103040051257",
    "name": "Sebamed Clear Face Temizleyici Yüz Toniği 200 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "4103040053510",
    "name": "Sebamed Baby SPF 50+ %98 UVA Korumalı UVB Filtreli Parfümsüz Bebek Güneş Kremi Sprey 200 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "4103040053718",
    "name": "Sebamed Likit Yüz Ve Vücut Temizleyici 750 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "4103040053848",
    "name": "Sebamed Şampuan Saç Dökülmesine Karşı 400 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "4103040054784",
    "name": "Sebamed Likit Yüz Ve Vücut Temizleyici 300 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "4103040110893",
    "name": "Sebamed Nemlendirici Krem Hassas Ciltler İçin 50 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "4103040111364",
    "name": "Sebamed Kompakt Temizleyici 100 gr",
    "source": "local_gratis"
  },
  {
    "barcode": "4103040113474",
    "name": "Sebamed Nemlendirici Kavanoz Gündüz Kremi 75 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "4103040115362",
    "name": "Sebamed Likit Yüz & Vücut Temizleyici 200 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "4103040117731",
    "name": "Sebamed Şampuan Kepek Önleyici 400 ml",
    "source": "local_rossmann"
  },
  {
    "barcode": "4103040134509",
    "name": "Sebamed Likit Yüz & Vücut Temizleme Jeli 1000 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "4103040160249",
    "name": "Sebamed Yıpranma Karşıtı Şampuan 200 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "4103040160430",
    "name": "Sebamed Her Gün Kullanım Şampuan 400 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "4103040169594",
    "name": "Sebamed Q10 Krem Yaşlanma Karşıtı Koruyucu Krem 50 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "4103040187031",
    "name": "Sebamed Yıpranma Karşıtı Şampuan 400 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "4103040898531",
    "name": "Sebamed Sun Cream Spf 50 75 ml",
    "source": "local_rossmann"
  },
  {
    "barcode": "4103040898630",
    "name": "Sebamed Sun After Sun Lotion 150 ml",
    "source": "local_rossmann"
  },
  {
    "barcode": "4103040898654",
    "name": "Sebamed Sun Baby Spf 50 Spray 200 ml",
    "source": "local_rossmann"
  },
  {
    "barcode": "4103040898715",
    "name": "Sebamed Sun Baby Spf 50+ Krem 75 ml",
    "source": "local_rossmann"
  },
  {
    "barcode": "4103040898753",
    "name": "Sebamed Sun Spray Spf 30 150 ml",
    "source": "local_rossmann"
  },
  {
    "barcode": "4103040898777",
    "name": "Sebamed Sun Lotion Spf 50+ 150 ml",
    "source": "local_rossmann"
  },
  {
    "barcode": "4103040905543",
    "name": "Sebamed Dudak Koruyucu Stick 30 Faktör",
    "source": "local_gratis"
  },
  {
    "barcode": "4103040905659",
    "name": "Sebamed Sun Baby Spf 50+ Lotion 150 ml",
    "source": "local_rossmann"
  },
  {
    "barcode": "4103040907745",
    "name": "Sebamed Clear Face Kompakt Yüz Temizleme Sabunu 100 gr",
    "source": "local_gratis"
  },
  {
    "barcode": "4103040907769",
    "name": "Sebamed Clear Face Temizleyici Yüz Toniği 150 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "4103040907806",
    "name": "Sebamed Clear Face Bakım Jeli 50 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "4103040907820",
    "name": "Sebamed Clear Face Temizleme Köpüğü 150 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "4260756570219",
    "name": "Mamaaura Purify Me Kepek ve Kaşıntı Karşıtı Şampuan 250 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "4260756570226",
    "name": "Mamaaura Fortify Me Saç Dökülme Karşıtı Serum 50 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "4260756570257",
    "name": "Mamaaura Fortify Me Saç Dökülme Karşıtı Şampuan 250 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "4260756570264",
    "name": "Mamaaura Hydrate Me Nemlendirici Şampuan 250 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "4260756570714",
    "name": "Mamaaura Fortify Me Saç Dökülme Karşıtı Set (Şampuan 250 ml + Serum 50 ml)",
    "source": "local_gratis"
  },
  {
    "barcode": "4262391990018",
    "name": "Bali Curls Bukle Belirginleştirici Jel 150 ml",
    "source": "local_rossmann"
  },
  {
    "barcode": "4262391990025",
    "name": "Bali Curls Nemlendirici Bukle Kremi 150 ml",
    "source": "local_rossmann"
  },
  {
    "barcode": "4262391990032",
    "name": "Bali Curls Bukle Hacim Sprey 150 ml",
    "source": "local_rossmann"
  },
  {
    "barcode": "4262391990049",
    "name": "Bali Curls Şampuan Besleyici 250 ml",
    "source": "local_rossmann"
  },
  {
    "barcode": "4262391990056",
    "name": "Bali Curls Nemlendirici Saç Kremi 250 ml",
    "source": "local_rossmann"
  },
  {
    "barcode": "4262391990483",
    "name": "Bali Curls Saç Toniği Biberiye 100 ml",
    "source": "local_rossmann"
  },
  {
    "barcode": "4262391990506",
    "name": "Bali Curls Bukle Hacim Köpüğü 150 ml",
    "source": "local_rossmann"
  },
  {
    "barcode": "4262391990513",
    "name": "Bali Curls Saç Yağı Bonding 30 ml",
    "source": "local_rossmann"
  },
  {
    "barcode": "4262391991695",
    "name": "Bali Curls Bonding Repair Şampuan 200 ml",
    "source": "local_rossmann"
  },
  {
    "barcode": "4262391991718",
    "name": "Bali Curls Bonding Repair Krem 200 ml",
    "source": "local_rossmann"
  },
  {
    "barcode": "4262391991732",
    "name": "Bali Curls Bonding Repair Leave In Krem 150 ml",
    "source": "local_rossmann"
  },
  {
    "barcode": "4262391991756",
    "name": "Bali Curls Bonding Repair Gece Bakımı 100 ml",
    "source": "local_rossmann"
  },
  {
    "barcode": "4305615304212",
    "name": "Alterra Gündüz Kremi Organik Aloe Vera & Buzul Suyu İçerikli 50 ml",
    "source": "local_rossmann"
  },
  {
    "barcode": "4305615304304",
    "name": "Alterra Gündüz Bakım Kremi Su Bazlı Üzüm & Beyaz Çay İçerikli 50 ml",
    "source": "local_rossmann"
  },
  {
    "barcode": "4305615304335",
    "name": "Alterra Yaşlanma Karşıtı Q10 Gündüz Krem Organik E Vitaminli 50 ml",
    "source": "local_rossmann"
  },
  {
    "barcode": "4305615304342",
    "name": "Alterra Yaşlanma Karşıtı Gece Kremi Organik Argan Yağlı ve Orkide Özlü 50 ml",
    "source": "local_rossmann"
  },
  {
    "barcode": "4305615304397",
    "name": "Alterra Yaşlanma Karşıtı Göz Kremi Orkide İçerikli 15 ml",
    "source": "local_rossmann"
  },
  {
    "barcode": "4305615304410",
    "name": "Alterra Göz Çevresi Jeli Organik Aloe Vera& Buzul Suyu İçerikli 15 ml",
    "source": "local_rossmann"
  },
  {
    "barcode": "4305615304427",
    "name": "Alterra Su Bazlı Göz Kremi Üzüm & Beyaz Çay İçerikli 15 ml",
    "source": "local_rossmann"
  },
  {
    "barcode": "4305615304441",
    "name": "Alterra Yaşlanma Karşıtı Serum Orkide İçerikli 30 ml",
    "source": "local_rossmann"
  },
  {
    "barcode": "4305615307718",
    "name": "Alterra Şampuan Nar ve Aloe Vera Özlü Nemlendirici 200 ml",
    "source": "local_rossmann"
  },
  {
    "barcode": "4305615307763",
    "name": "Alterra Şampuan Kafein&Biyotin İçerikli 200 ml",
    "source": "local_rossmann"
  },
  {
    "barcode": "4305615327198",
    "name": "For Your Beauty Tarak Krepe Yapımı İçin Siyah Tarak",
    "source": "local_rossmann"
  },
  {
    "barcode": "4305615327204",
    "name": "For Your Beauty Tarak Siyah 12 cm",
    "source": "local_rossmann"
  },
  {
    "barcode": "4305615327235",
    "name": "For Your Beauty Siyah Tarak 18,5 cm",
    "source": "local_rossmann"
  },
  {
    "barcode": "4305615327273",
    "name": "For Your Beauty Tarak Geniş Dişli",
    "source": "local_rossmann"
  },
  {
    "barcode": "4305615327280",
    "name": "For Your Beauty Tarak Kalın Ve İnce Dişli Tarak",
    "source": "local_rossmann"
  },
  {
    "barcode": "4305615327334",
    "name": "For Your Beauty Tarak El Yapımı 12 cm",
    "source": "local_rossmann"
  },
  {
    "barcode": "4305615327372",
    "name": "For Your Beauty Kısa Tarak Geniş Dişli El Yapımı 10 cm",
    "source": "local_rossmann"
  },
  {
    "barcode": "4305615347813",
    "name": "Isana Şampuan Kafein, Saçın Uzamasına Yardımcı 250 ml",
    "source": "local_rossmann"
  },
  {
    "barcode": "4305615348018",
    "name": "Isana Saç Bakım Toniği AnaGain ve Kafein 150 ml",
    "source": "local_rossmann"
  },
  {
    "barcode": "4305615426839",
    "name": "Alterra Kirpik Bakım Serumu 10 ml",
    "source": "local_rossmann"
  },
  {
    "barcode": "4305615426860",
    "name": "Alterra Kirpik Kürü 5 ml",
    "source": "local_rossmann"
  },
  {
    "barcode": "4305615431604",
    "name": "For Your Beauty Saç Fırçası Temizleyici",
    "source": "local_rossmann"
  },
  {
    "barcode": "4305615460734",
    "name": "Alterra Şampuan Organik Portakal & Organik Kivi Ekstreli 300 ml",
    "source": "local_rossmann"
  },
  {
    "barcode": "4305615467795",
    "name": "Alterra Saç Köpüğü Organik Papaya & Bambu Ekstresi İçeren Hacim Sağlayıcı 150 ml",
    "source": "local_rossmann"
  },
  {
    "barcode": "4305615467801",
    "name": "Alterra Şekillendirici Jöle Organik Papaya & Bambu Ekstresi İçeren 150 ml",
    "source": "local_rossmann"
  },
  {
    "barcode": "4305615477565",
    "name": "For Your Beauty Saç Fırçası Hamburg- Kare",
    "source": "local_rossmann"
  },
  {
    "barcode": "4305615477572",
    "name": "For Your Beauty Saç Fırçası Arizona",
    "source": "local_rossmann"
  },
  {
    "barcode": "4305615477589",
    "name": "For Your Beauty Fön Fırçası Bremen",
    "source": "local_rossmann"
  },
  {
    "barcode": "4305615477596",
    "name": "For Your Beauty Saç Fırçası Nurnberg",
    "source": "local_rossmann"
  },
  {
    "barcode": "4305615477602",
    "name": "For Your Beauty Saç Fırçası Basic-Florenz",
    "source": "local_rossmann"
  },
  {
    "barcode": "4305615477640",
    "name": "For Your Beauty Fön Fırçası Frankfurt Model, Yuvarlak, Siyah",
    "source": "local_rossmann"
  },
  {
    "barcode": "4305615477657",
    "name": "For Your Beauty Fön Fırçası Arktis",
    "source": "local_rossmann"
  },
  {
    "barcode": "4305615481579",
    "name": "Isana Q10 Gece Kremi Kırışıklık Karşıtı 50 ml",
    "source": "local_rossmann"
  },
  {
    "barcode": "4305615481586",
    "name": "Isana Q10 Göz Çevresi Kremi Kırışıklık Karşıtı 15 ml",
    "source": "local_rossmann"
  },
  {
    "barcode": "4305615481593",
    "name": "Isana Intensiv Serum Q10 Kırışıklık Önleyici 30 ml",
    "source": "local_rossmann"
  },
  {
    "barcode": "4305615481616",
    "name": "Isana Q10 Göz Altı Pedleri Kırışıklık Karşıtı & Canlandırıcı, 6x2 ped",
    "source": "local_rossmann"
  },
  {
    "barcode": "4305615481883",
    "name": "Isana Bakım Ampulü Q10 Kırışıklık Karşıtı 7x2 ml",
    "source": "local_rossmann"
  },
  {
    "barcode": "4305615490168",
    "name": "Isana Vücut Losyonu Argan ve Badem Yağlı 200 ml",
    "source": "local_rossmann"
  },
  {
    "barcode": "4305615527628",
    "name": "For Your Beauty Göz Altı Maskesi Jel Soğuk Sıcak Kullanım",
    "source": "local_rossmann"
  },
  {
    "barcode": "4305615547909",
    "name": "Isana Professional Saç Kapatıcı Sprey Siyah 75 ml",
    "source": "local_rossmann"
  },
  {
    "barcode": "4305615547916",
    "name": "Isana Professional Saç Kapatıcı Sprey Koyu Kahverengi 75 ml",
    "source": "local_rossmann"
  },
  {
    "barcode": "4305615547923",
    "name": "Isana Professional Saç Kapatıcı Sprey Kahverengi 75 ml",
    "source": "local_rossmann"
  },
  {
    "barcode": "4305615551074",
    "name": "Isana Q10 Gündüz Kremi Kırışıklık Karşıtı-SPF30 50 ml",
    "source": "local_rossmann"
  },
  {
    "barcode": "4305615551463",
    "name": "Isana Gold Brilliance Gündüz Kremi Yoğun Bakım-SPF20 50 ml",
    "source": "local_rossmann"
  },
  {
    "barcode": "4305615551470",
    "name": "Isana Gold Brilliance Gece Kremi Yoğun Bakım Etkili 50 ml",
    "source": "local_rossmann"
  },
  {
    "barcode": "4305615551487",
    "name": "Isana Göz Kremi Gold Brilliance 15 ml",
    "source": "local_rossmann"
  },
  {
    "barcode": "4305615554532",
    "name": "Isana Kuru Şampuan Normal ve Yağlı Saçlar İçin 200 ml",
    "source": "local_rossmann"
  },
  {
    "barcode": "4305615566115",
    "name": "Isana Şampuan ve Saç Kremi Ebegümeci ve Acai Çileği 300 ml",
    "source": "local_rossmann"
  },
  {
    "barcode": "4305615566122",
    "name": "Isana Şampuan Papatya ve Adaçayı 300 ml",
    "source": "local_rossmann"
  },
  {
    "barcode": "4305615566146",
    "name": "Isana Şampuan Su Nanesi ve Aventurin 300 ml",
    "source": "local_rossmann"
  },
  {
    "barcode": "4305615566153",
    "name": "Isana Şampuan Nar ve Guarana 300 ml",
    "source": "local_rossmann"
  },
  {
    "barcode": "4305615566160",
    "name": "Isana Şampuan İpeksi Parlaklık Manolya ve Lotus 300 ml",
    "source": "local_rossmann"
  },
  {
    "barcode": "4305615566184",
    "name": "Isana Şampuan Pamuk ve Mavi Kantaron 300 ml",
    "source": "local_rossmann"
  },
  {
    "barcode": "4305615566207",
    "name": "Isana Saç Kremi İpeksi Parlaklık Manolya ve Lotus 300 ml",
    "source": "local_rossmann"
  },
  {
    "barcode": "4305615569253",
    "name": "Alterra Göz Makyaj Temizleyici 100 ml",
    "source": "local_rossmann"
  },
  {
    "barcode": "4305615569666",
    "name": "Alterra Dudak Balmı Doğal Nar 5 gr",
    "source": "local_rossmann"
  },
  {
    "barcode": "4305615569680",
    "name": "Alterra Dudak Yağı No:02 Doğal Ahududu 7 ml",
    "source": "local_rossmann"
  },
  {
    "barcode": "4305615570686",
    "name": "Alterra Dudak Balmı Doğal Kakao 5 gr",
    "source": "local_rossmann"
  },
  {
    "barcode": "4305615571034",
    "name": "For Your Beauty Wellness Masaj Roller Şeffaf 1 adet",
    "source": "local_rossmann"
  },
  {
    "barcode": "4305615595177",
    "name": "For Your Beauty Siyah Nokta Temizleyici Aparat 1 adet",
    "source": "local_rossmann"
  },
  {
    "barcode": "4305615595641",
    "name": "For Your Beauty Profesyonel Yuvarlak Saç Fırçası Arjantin Model, Saç Şekillendirici 35mm",
    "source": "local_rossmann"
  },
  {
    "barcode": "4305615595726",
    "name": "For Your Beauty Profesyonel Masaj Özellikli Saç Fırçası Jamaika Model",
    "source": "local_rossmann"
  },
  {
    "barcode": "4305615595818",
    "name": "For Your Beauty Profesyonel Saç Fırçası Karışıklığı Açıcı Özellikli",
    "source": "local_rossmann"
  },
  {
    "barcode": "4305615608549",
    "name": "Isana Reine Haut Sebum Dengeleyici Tonik Yağlı Ciltler İçin 200 ml",
    "source": "local_rossmann"
  },
  {
    "barcode": "4305615608570",
    "name": "Isana Reine Haut Sebum Dengeleyici Yıkama Jeli Yağlı Ciltler İçin 150 ml",
    "source": "local_rossmann"
  },
  {
    "barcode": "4305615608594",
    "name": "Isana Reine Haut Sebum Dengeleyici Bandı Yağlı Ciltler İçin 36'lı",
    "source": "local_rossmann"
  },
  {
    "barcode": "4305615608624",
    "name": "Isana Reine Haut Sebum Dengeleyici Jel Yağlı Ciltler İçin 15 ml",
    "source": "local_rossmann"
  },
  {
    "barcode": "4305615608679",
    "name": "Isana Aktif Kömür Gözenek Arındırıcı Burun Bandı",
    "source": "local_rossmann"
  },
  {
    "barcode": "4305615608914",
    "name": "Isana MED Vücut Losyonu Ölü Deniz Tuzu 250ml",
    "source": "local_rossmann"
  },
  {
    "barcode": "4305615608921",
    "name": "Isana Med Vücut Kremi Ölü Deniz Tuzu 150 ml",
    "source": "local_rossmann"
  },
  {
    "barcode": "4305615609997",
    "name": "Isana El Kremi Çok Kuru Cilt, %5 Üre 100 ml",
    "source": "local_rossmann"
  },
  {
    "barcode": "4305615610030",
    "name": "Isana El ve Tırnak Kremi Aloe Vera 100 ml",
    "source": "local_rossmann"
  },
  {
    "barcode": "4305615611204",
    "name": "Isana Aqua Yüz Spreyi Ferahlatıcı 150 ml",
    "source": "local_rossmann"
  },
  {
    "barcode": "4305615612300",
    "name": "Isana Saç Spreyi Tüm Saçlar İçin 150 ml",
    "source": "local_rossmann"
  },
  {
    "barcode": "4305615612379",
    "name": "Isana Wax Saç Şekillendirici 5 Numara 100 ml",
    "source": "local_rossmann"
  },
  {
    "barcode": "4305615616117",
    "name": "Isana Anti-Selülit Krem Jel 200 ml",
    "source": "local_rossmann"
  },
  {
    "barcode": "4305615619507",
    "name": "Altapharma Aynısefa Çiçeği Özlü Merhem 100 ml",
    "source": "local_rossmann"
  },
  {
    "barcode": "4305615620442",
    "name": "Isana Vücut Kremi Shea ve Kakao Yağlı 500 ml",
    "source": "local_rossmann"
  },
  {
    "barcode": "4305615620473",
    "name": "Isana Vazelin Yoğun Bakım 125 ml",
    "source": "local_rossmann"
  },
  {
    "barcode": "4305615620916",
    "name": "Isana Soğuk Ağda Bandı Yüz ve Bikini Bölgesi İçin 20'li",
    "source": "local_rossmann"
  },
  {
    "barcode": "4305615624877",
    "name": "Isana Professional Argan Yağı İçerikli Şampuan, Çok Yıpranmış Kuru Saçlar İçin 250 ml",
    "source": "local_rossmann"
  },
  {
    "barcode": "4305615624914",
    "name": "Isana Professional Sarı ve Parlak Şampuan Doğal Sarışın ve Boyalı Sarı Saçlar 250 ml",
    "source": "local_rossmann"
  },
  {
    "barcode": "4305615624921",
    "name": "Isana Professional Gümüş ve Parlak Şampuan 250 ml",
    "source": "local_rossmann"
  },
  {
    "barcode": "4305615624938",
    "name": "Isana Professional Şampuan Kahverengi ve Parlak Şampuan 250 ml",
    "source": "local_rossmann"
  },
  {
    "barcode": "4305615624945",
    "name": "Isana Professional Argan Yağı İçerikli Saç Kremi, Çok Yıpranmış Kuru Saçlar 200 ml",
    "source": "local_rossmann"
  },
  {
    "barcode": "4305615624976",
    "name": "Isana Professional Sarı ve Parlak Saç Kremi Doğal Sarı ve Sarı Renkli Boyalı Saçlar İçin 200 ml",
    "source": "local_rossmann"
  },
  {
    "barcode": "4305615624983",
    "name": "Isana Professional Gümüş ve Parlak Saç Kremi 200 ml",
    "source": "local_rossmann"
  },
  {
    "barcode": "4305615624990",
    "name": "Isana Professional Kahverengi ve Parlak Saç Kremi 200 ml",
    "source": "local_rossmann"
  },
  {
    "barcode": "4305615625010",
    "name": "Isana Professional Nemlendirici ve Yoğun Bakım Saç Maskesi Kuru ve Cansız Saçlar İçin 250 ml",
    "source": "local_rossmann"
  },
  {
    "barcode": "4305615625027",
    "name": "Isana Professional Argan Yağı İçerikli Saç Maskesi Yıpranmış ve Kuru Saçlar İçin 250 ml",
    "source": "local_rossmann"
  },
  {
    "barcode": "4305615625041",
    "name": "Isana Professional Gümüş ve Parlak Saç Kürü 20 ml",
    "source": "local_rossmann"
  },
  {
    "barcode": "4305615625546",
    "name": "Isana Professional Renk ve Parlaklık Şampuan 250 ml",
    "source": "local_rossmann"
  },
  {
    "barcode": "4305615625560",
    "name": "Isana Professional Renk ve Parlaklık Saç Kremi Boyalı Saçlara Özel 200 ml",
    "source": "local_rossmann"
  },
  {
    "barcode": "4305615625584",
    "name": "Isana Professional Nemlendirici ve Yoğun Bakım Saç Bakım Kürü 13'ü 1 Arada 100 ml",
    "source": "local_rossmann"
  },
  {
    "barcode": "4305615627427",
    "name": "Isana Saç Bakım Kürü Argan Yağı 25 ml",
    "source": "local_rossmann"
  },
  {
    "barcode": "4305615627434",
    "name": "Isana Kuru Saç Spreyi Hair Express Anti Frizz 200 ml",
    "source": "local_rossmann"
  },
  {
    "barcode": "4305615627458",
    "name": "Isana Saç Maskesi 3in1 İpeksi Parlaklık 250 ml",
    "source": "local_rossmann"
  },
  {
    "barcode": "4305615628851",
    "name": "Isana MED Vücut Losyonu Üre İçerikli 250 ml",
    "source": "local_rossmann"
  },
  {
    "barcode": "4305615628875",
    "name": "Isana Med Vücut Losyonu Ultra Hassas Ciltler 250 ml",
    "source": "local_rossmann"
  },
  {
    "barcode": "4305615628882",
    "name": "Isana Med Serum %5 Üre Akut Nemlendirici 100 ml",
    "source": "local_rossmann"
  },
  {
    "barcode": "4305615629018",
    "name": "Isana Med Dudak Balmı Organik Zeytinyağlı 4,5 g",
    "source": "local_rossmann"
  },
  {
    "barcode": "4305615629025",
    "name": "Isana MED Yüz Bakım Sabunu Hassas Ciltler 100 gr",
    "source": "local_rossmann"
  },
  {
    "barcode": "4305615629094",
    "name": "Isana Med Yıkama Losyonu Hassas Ciltler 300 ml",
    "source": "local_rossmann"
  },
  {
    "barcode": "4305615629100",
    "name": "Isana Med Yüz & Vücut Yıkama Losyonu Yedek 500 ml",
    "source": "local_rossmann"
  },
  {
    "barcode": "4305615629209",
    "name": "Isana MED Şampuan Kepek Karşıtı Kafeinli 200 ml",
    "source": "local_rossmann"
  },
  {
    "barcode": "4305615629216",
    "name": "Isana Med Şampuan Ph 5.5 Günlük 200 ml",
    "source": "local_rossmann"
  },
  {
    "barcode": "4305615629223",
    "name": "Isana Med Şampuan Ultra Hassas 200 ml",
    "source": "local_rossmann"
  },
  {
    "barcode": "4305615629230",
    "name": "Isana MED Şampuan Ölü Deniz Tuzu 200 ml",
    "source": "local_rossmann"
  },
  {
    "barcode": "4305615630069",
    "name": "Isana Saç Spreyi Ekstra Güçlü Tutuş, UV Filtreli 250 ml",
    "source": "local_rossmann"
  },
  {
    "barcode": "4305615630083",
    "name": "Isana Saç Spreyi Süper Güçlü Tutuş, UV Filtreli 250 ml",
    "source": "local_rossmann"
  },
  {
    "barcode": "4305615630090",
    "name": "Isana Saç Spreyi Hassas 250 ml",
    "source": "local_rossmann"
  },
  {
    "barcode": "4305615630106",
    "name": "Isana Saç Köpüğü Kıvırcık ve Dalgalı Saçlar, 48 Saate Kadar Etkili 150 ml",
    "source": "local_rossmann"
  },
  {
    "barcode": "4305615630113",
    "name": "Isana Saç Köpüğü Hacim Verici, 48 Saate Kadar Etkili 150 ml",
    "source": "local_rossmann"
  },
  {
    "barcode": "4305615630120",
    "name": "Isana Color Glanz Saç Köpüğü 48 Saate Kadar Etkili, Ekstra Güçlü Tutuş 150 ml",
    "source": "local_rossmann"
  },
  {
    "barcode": "4305615630137",
    "name": "Isana Power Ultra Saç Köpüğü 48 Saate Kadar Etkili, UV-Filtreli 150 ml",
    "source": "local_rossmann"
  },
  {
    "barcode": "4305615633428",
    "name": "Isana Men Şampuan Kafein ve Keratin İnce Telli Saçlar İçin 300 ml",
    "source": "local_rossmann"
  },
  {
    "barcode": "4305615634081",
    "name": "Isana Vazelin Parfümsüz Tüp 75 ml",
    "source": "local_rossmann"
  },
  {
    "barcode": "4305615636863",
    "name": "For Your Beauty Ahşap Mini Tarak Ahşap Mini Tarak",
    "source": "local_rossmann"
  },
  {
    "barcode": "4305615640181",
    "name": "Isana Saç Spreyi 48 Saat Hacim Veren Ekstra Güçlü Tutuş-Seyahat Boy 75 ml",
    "source": "local_rossmann"
  },
  {
    "barcode": "4305615640211",
    "name": "Isana Kuru Şampuan Tüm Saç Tipleri İçin 75 ml",
    "source": "local_rossmann"
  },
  {
    "barcode": "4305615642468",
    "name": "Isana Kavanoz Jöle Parlaklık Etkili 75 ml",
    "source": "local_rossmann"
  },
  {
    "barcode": "4305615643410",
    "name": "Isana Power Ultra Saç Köpüğü Ultra Güçlü, Seyahat Boy 50 ml",
    "source": "local_rossmann"
  },
  {
    "barcode": "4305615652283",
    "name": "Isana Vücut Bakım Yağı Spreyi Q10 & 6 Kat Etkili Bitkisel Yağ Kompleksi 150 ml",
    "source": "local_rossmann"
  },
  {
    "barcode": "4305615652962",
    "name": "For Your Beauty Profesyonel Ara Makas Çelik",
    "source": "local_rossmann"
  },
  {
    "barcode": "4305615652979",
    "name": "For Your Beauty Profesyonel Makas Çelik",
    "source": "local_rossmann"
  },
  {
    "barcode": "4305615654249",
    "name": "Isana Professional Multi Effekt Kuru Şampuan 200 ml",
    "source": "local_rossmann"
  },
  {
    "barcode": "4305615657226",
    "name": "Isana Peeling Kremi Kayısı Özlü ve Badem Yağı içerikli Kuru ve Hassas Ciltler 75 ml",
    "source": "local_rossmann"
  },
  {
    "barcode": "4305615657318",
    "name": "Isana Yüz Temizleme Mendili 3'in1 Limited Edition 25'li",
    "source": "local_rossmann"
  },
  {
    "barcode": "4305615657325",
    "name": "Isana Yüz Temizleme Mendili 3'in1 Kuru ve Hassas Ciltler İçin 25'li",
    "source": "local_rossmann"
  },
  {
    "barcode": "4305615657332",
    "name": "Isana Makyaj Temizleyici 3'ü 1 Arada Misel Su Alkolsüz Kuru&Hassas Ciltler 400ml",
    "source": "local_rossmann"
  },
  {
    "barcode": "4305615659480",
    "name": "For Your Beauty Wellness Masaj Küresi Siyah 1 adet",
    "source": "local_rossmann"
  },
  {
    "barcode": "4305615668772",
    "name": "Isana Power Serum Hyaluron Shot 10 ml",
    "source": "local_rossmann"
  },
  {
    "barcode": "4305615672328",
    "name": "For Your Beauty Saç Fırçası Costa Rica Stili 1 adet",
    "source": "local_rossmann"
  },
  {
    "barcode": "4305615672342",
    "name": "For Your Beauty Saç Fırçası Dalgalı Uçlu 1 adet",
    "source": "local_rossmann"
  },
  {
    "barcode": "4305615674629",
    "name": "Alterra Yüz Serumu C Vitamin Booster 15 ml",
    "source": "local_rossmann"
  },
  {
    "barcode": "4305615674735",
    "name": "Alterra Hyaluron Konsantre Ampül Kürü Neme İhtiyacı Olan Cilt Tipleri İçin 7x1 ml",
    "source": "local_rossmann"
  },
  {
    "barcode": "4305615679426",
    "name": "Isana Islak Kozmetik Mendili 25'li",
    "source": "local_rossmann"
  },
  {
    "barcode": "4305615683058",
    "name": "Isana Hyaluron Intense Yüz Bakım Serumu 30 ml",
    "source": "local_rossmann"
  },
  {
    "barcode": "4305615684611",
    "name": "Rival de Loop Dudak Yağı No:03 Gül 4.5 ml",
    "source": "local_rossmann"
  },
  {
    "barcode": "4305615687155",
    "name": "Alterra Şampuan Bitki Özlü 200 ml",
    "source": "local_rossmann"
  },
  {
    "barcode": "4305615703145",
    "name": "Rival Loves Me Dudak Bakım Yağı Vitaminli 5.5 ml",
    "source": "local_rossmann"
  },
  {
    "barcode": "4305615709574",
    "name": "For Your Beauty Kids Tarak Mini Desenli",
    "source": "local_rossmann"
  },
  {
    "barcode": "4305615709864",
    "name": "Isana Reine Haut Peeling Arındırıcı 3İn1 150 ml",
    "source": "local_rossmann"
  },
  {
    "barcode": "4305615711478",
    "name": "Isana Vücut Peelingi Ölü Deniz Tuzu 300 gr",
    "source": "local_rossmann"
  },
  {
    "barcode": "4305615716237",
    "name": "Isana Katı Şampuan Hindistan Cevizi - Mango Kokulu 65 g",
    "source": "local_rossmann"
  },
  {
    "barcode": "4305615716244",
    "name": "Isana Katı Şampuan Nar Kokulu-Normal Saçlar 65 g",
    "source": "local_rossmann"
  },
  {
    "barcode": "4305615716480",
    "name": "Isana Professional Bambu Saç Spreyi 250 ml",
    "source": "local_rossmann"
  },
  {
    "barcode": "4305615726205",
    "name": "Isana Dudak Bakım Kalemi Color 2 Care, Nude 1 adet",
    "source": "local_rossmann"
  },
  {
    "barcode": "4305615726847",
    "name": "Isana Prokolajen Filler Power Shot 15 ml",
    "source": "local_rossmann"
  },
  {
    "barcode": "4305615733371",
    "name": "Isana Professional Gümüş ve Parlak Renk Koruyucu Köpük 100 ml",
    "source": "local_rossmann"
  },
  {
    "barcode": "4305615736952",
    "name": "Isana Med El Kremi Ölü Deniz Tuzu 100 ml",
    "source": "local_rossmann"
  },
  {
    "barcode": "4305615738277",
    "name": "Isana Yüz & Vücut Yağı Marula 100 ml",
    "source": "local_rossmann"
  },
  {
    "barcode": "4305615738789",
    "name": "For Your Beauty Gua Sha Kalp",
    "source": "local_rossmann"
  },
  {
    "barcode": "4305615759968",
    "name": "Isana Glow Maske Avokado 2 x 8 ml",
    "source": "local_rossmann"
  },
  {
    "barcode": "4305615760889",
    "name": "Rival de Loop Hyaluron Yüz Serumu 30 ml",
    "source": "local_rossmann"
  },
  {
    "barcode": "4305615764375",
    "name": "For Your Beauty Saç Fırçası Mini Paddle 1 adet",
    "source": "local_rossmann"
  },
  {
    "barcode": "4305615765310",
    "name": "Alterra Day 'n' Night Dudak Maskesi No:01 Çilek 6 gr",
    "source": "local_rossmann"
  },
  {
    "barcode": "4305615765327",
    "name": "Alterra Day 'n' Night Dudak Maskesi No:02 Bal Arısı 6 gr",
    "source": "local_rossmann"
  },
  {
    "barcode": "4305615765396",
    "name": "Alterra Renkli Gündüz Kremi No:01 Light 30 ml",
    "source": "local_rossmann"
  },
  {
    "barcode": "4305615765402",
    "name": "Alterra Renkli Gündüz Kremi No:02 Medium 30 ml",
    "source": "local_rossmann"
  },
  {
    "barcode": "4305615766904",
    "name": "For Your Beauty Pembe Kuvars Roller Çift Taraflı 1 adet",
    "source": "local_rossmann"
  },
  {
    "barcode": "4305615771793",
    "name": "Isana Kadınlara Özel Şampuan Kafein Aktif 250 ml",
    "source": "local_rossmann"
  },
  {
    "barcode": "4305615774220",
    "name": "Isana Night & Beauty Yüz Serumu Gece 30 ml",
    "source": "local_rossmann"
  },
  {
    "barcode": "4305615779256",
    "name": "Isana Hyaluron Intense Gündüz Kremi Spf 30 50 ml",
    "source": "local_rossmann"
  },
  {
    "barcode": "4305615779263",
    "name": "Isana Hyaluron Intense Gece Kremi 50 ml",
    "source": "local_rossmann"
  },
  {
    "barcode": "4305615783611",
    "name": "Isana Yüz Maskesi Peel Off Pink Pearl 2x8 ml",
    "source": "local_rossmann"
  },
  {
    "barcode": "4305615783963",
    "name": "Alterra Gül Suyu 150 ml",
    "source": "local_rossmann"
  },
  {
    "barcode": "4305615791586",
    "name": "For Your Beauty Prof Saç Fırçası Parlaklık Etkili",
    "source": "local_rossmann"
  },
  {
    "barcode": "4305615791913",
    "name": "Isana Hyaluron Intense Göz Kremi 15 ml",
    "source": "local_rossmann"
  },
  {
    "barcode": "4305615791920",
    "name": "Isana Love Your Skin Serum Peeling AHA Glikolik Asit 30 ml",
    "source": "local_rossmann"
  },
  {
    "barcode": "4305615797076",
    "name": "Isana Hidrojel Göz Altı Pedi Aloe Vera 1 adet",
    "source": "local_rossmann"
  },
  {
    "barcode": "4305615797243",
    "name": "Isana Tüp El Kremi Night & Beauty 100 ml",
    "source": "local_rossmann"
  },
  {
    "barcode": "4305615798462",
    "name": "Alterra Bioalg Peeling Kremi 50 ml",
    "source": "local_rossmann"
  },
  {
    "barcode": "4305615798509",
    "name": "Alterra Bioalg Yıkama Jeli Misel 125 ml",
    "source": "local_rossmann"
  },
  {
    "barcode": "4305615826950",
    "name": "Isana Vücut Losyonu %5 Üre 300 ml",
    "source": "local_rossmann"
  },
  {
    "barcode": "4305615827339",
    "name": "Sunozon Güneş Yağı Sprey SPF 6 Normal Ciltler İçin, 150 ml",
    "source": "local_rossmann"
  },
  {
    "barcode": "4305615827407",
    "name": "Sunozon Güneş Koruyucu Yüz Kremi Anti-Age 50SPF 50 ml",
    "source": "local_rossmann"
  },
  {
    "barcode": "4305615827711",
    "name": "Sunozon MED Güneş Koruyucu Sprey 50+SPF 200 ml",
    "source": "local_rossmann"
  },
  {
    "barcode": "4305615827766",
    "name": "Sunozon Çocuk Güneş Koruyucu Antisand Losyon 50SPF Hassas Cilt 200 ml",
    "source": "local_rossmann"
  },
  {
    "barcode": "4305615827780",
    "name": "Sunozon Çocuk Güneş Koruyucu Süt 50+SPF Hassas Cilt 200 ml",
    "source": "local_rossmann"
  },
  {
    "barcode": "4305615827841",
    "name": "Sunozon Dudak Balmı SPF 50+ 4,8 gr",
    "source": "local_rossmann"
  },
  {
    "barcode": "4305615828206",
    "name": "Alterra Aloe Vera Jel 100 ml",
    "source": "local_rossmann"
  },
  {
    "barcode": "4305615830940",
    "name": "Isana Professional Keratin ve Onarım Şampuan 250 ml",
    "source": "local_rossmann"
  },
  {
    "barcode": "4305615830957",
    "name": "Isana Professional Keratin ve Onarım Saç Kremi 200 ml",
    "source": "local_rossmann"
  },
  {
    "barcode": "4305615830988",
    "name": "Sunozon MED Güneş Koruyucu Yüz Kremi 50SPF 50 ml",
    "source": "local_rossmann"
  },
  {
    "barcode": "4305615835051",
    "name": "Isana Prokolajen Performance Gündüz Kremi SPF15 50 ml",
    "source": "local_rossmann"
  },
  {
    "barcode": "4305615835068",
    "name": "Isana Prokolajen Performance Gece Kremi 50 ml",
    "source": "local_rossmann"
  },
  {
    "barcode": "4305615835075",
    "name": "Isana Prokolajen Enerji Yoğun Serum 30 ml",
    "source": "local_rossmann"
  },
  {
    "barcode": "4305615835082",
    "name": "Isana Prokolajen Enerji Göz Kremi 15 ml",
    "source": "local_rossmann"
  },
  {
    "barcode": "4305615835242",
    "name": "Isana Bakım Ampulü Vitamin C 3x2 ml",
    "source": "local_rossmann"
  },
  {
    "barcode": "4305615835259",
    "name": "Isana Intensiv Serum %10 C Vitamini 30 ml",
    "source": "local_rossmann"
  },
  {
    "barcode": "4305615835839",
    "name": "Alterra Saç Yağı Nutricare 50 ml",
    "source": "local_rossmann"
  },
  {
    "barcode": "4305615835853",
    "name": "Isana Professional Phyto Keratin Saç Bakım Spreyi 150 ml",
    "source": "local_rossmann"
  },
  {
    "barcode": "4305615838274",
    "name": "Isana Hydro Booster Nemlendirici Jel Krem, Yoğun Bakım Etkili 50 ml",
    "source": "local_rossmann"
  },
  {
    "barcode": "4305615838281",
    "name": "Isana Hydro Booster Lifting Power Göz Çevresi Roll On 15ml",
    "source": "local_rossmann"
  },
  {
    "barcode": "4305615838304",
    "name": "Isana Hydro Booster Göz Çevresi Bakım Pedi, Yoğun Nem Etkili 6x2'li",
    "source": "local_rossmann"
  },
  {
    "barcode": "4305615838311",
    "name": "Isana Hydro Booster Hyaluron Serum 30 ml",
    "source": "local_rossmann"
  },
  {
    "barcode": "4305615846941",
    "name": "Isana Professional Güçlü Bukleler Şampuan 250 ml",
    "source": "local_rossmann"
  },
  {
    "barcode": "4305615846958",
    "name": "Isana Professional Güçlü Bukleler Saç Kremi 200 ml",
    "source": "local_rossmann"
  },
  {
    "barcode": "4305615846965",
    "name": "Isana Professional Güçlü Bukleler Saç Maskesi Kıvırcık ve Dalgalı Saçlar İçin 250 ml",
    "source": "local_rossmann"
  },
  {
    "barcode": "4305615846972",
    "name": "Isana Professional Güçlü Bukleler Şekillendirici Kremi 150 ml",
    "source": "local_rossmann"
  },
  {
    "barcode": "4305615846989",
    "name": "Isana Professional Güçlü Bukleler Saç Spreyi Styling 150 ml",
    "source": "local_rossmann"
  },
  {
    "barcode": "4305615847542",
    "name": "Isana Dudak Bakım Kalemi Color 2 Care, Berry 1 adet",
    "source": "local_rossmann"
  },
  {
    "barcode": "4305615848938",
    "name": "Isana Pure Yüz Yıkama Köpüğü Niacinamide 150 ml",
    "source": "local_rossmann"
  },
  {
    "barcode": "4305615848945",
    "name": "Isana Pure Nemlendirici Serum 30 ml",
    "source": "local_rossmann"
  },
  {
    "barcode": "4305615848952",
    "name": "Isana Pure Nemlendirici Krem 24H Niacinamide 50 ml",
    "source": "local_rossmann"
  },
  {
    "barcode": "4305615848969",
    "name": "Isana Pure Göz Kremi 15 ml",
    "source": "local_rossmann"
  },
  {
    "barcode": "4305615865614",
    "name": "Alterra Şampuan Kıvırcık Saçlar 200 ml",
    "source": "local_rossmann"
  },
  {
    "barcode": "4305615865621",
    "name": "Alterra Saç Kremi Kıvırcık Saçlar 200 ml",
    "source": "local_rossmann"
  },
  {
    "barcode": "4305615865638",
    "name": "Alterra Saç Bakım Kremi Kıvırcık Saçlar 200 ml",
    "source": "local_rossmann"
  },
  {
    "barcode": "4305615875651",
    "name": "Isana Kapsül Serum Vitamin C & Maracuja Yağı 7x0,38 ml",
    "source": "local_rossmann"
  },
  {
    "barcode": "4305615875675",
    "name": "Isana Professional Saç Spreyi Keratin & Style 250 ml",
    "source": "local_rossmann"
  },
  {
    "barcode": "4305615875682",
    "name": "Isana Professional Keratin ve Style Saç Köpüğü 150 ml",
    "source": "local_rossmann"
  },
  {
    "barcode": "4305615878218",
    "name": "Isana Baby Hair Stik 10 ml",
    "source": "local_rossmann"
  },
  {
    "barcode": "4305615879161",
    "name": "Isana Lash Color Kaş ve Kirpik Boyası Siyah 10 ml",
    "source": "local_rossmann"
  },
  {
    "barcode": "4305615879178",
    "name": "Isana Lash Color Kaş ve Kirpik Boyası Kahverengi 10 ml",
    "source": "local_rossmann"
  },
  {
    "barcode": "4305615879369",
    "name": "Isana Hyaluron Renkli Nemlendirici SPF15 No 01 15 gr",
    "source": "local_rossmann"
  },
  {
    "barcode": "4305615883267",
    "name": "Isana Saç Toniği Canlandırıcı Kayın Ağacı 500 ml",
    "source": "local_rossmann"
  },
  {
    "barcode": "4305615884097",
    "name": "Isana Professional Muhteşem Uzunluk Şampuan 250 ml",
    "source": "local_rossmann"
  },
  {
    "barcode": "4305615884103",
    "name": "Isana Professional Muhteşem Uzunluk Saç Kremi 200 ml",
    "source": "local_rossmann"
  },
  {
    "barcode": "4305615886503",
    "name": "Isana Med Yüz Kremi Intensive Üre 50 ml",
    "source": "local_rossmann"
  },
  {
    "barcode": "4305615886572",
    "name": "For Your Beauty Saç Boyama Fırçası Set 2'li",
    "source": "local_rossmann"
  },
  {
    "barcode": "4305615886602",
    "name": "Isana Professional Wunder Express Saç Bakım Suyu Parlaklık ve Pürüzsüzlük Etkili 200 ml",
    "source": "local_rossmann"
  },
  {
    "barcode": "4305615887135",
    "name": "For Your Beauty Bigudi 13 mm Ebatında Bükülür 15 cm Uzunluğunda Renkli Sünger 5'li",
    "source": "local_rossmann"
  },
  {
    "barcode": "4305615892566",
    "name": "Isana Love Your Skin Serum Balance Panthenol Squalan 30 ml",
    "source": "local_rossmann"
  },
  {
    "barcode": "4305615892726",
    "name": "Isana Professional Saç Kapatıcı Sprey Koyu Sarı 100 ml",
    "source": "local_rossmann"
  },
  {
    "barcode": "4305615897646",
    "name": "Rival de Loop Serum Perfect Teint B3 30 ml",
    "source": "local_rossmann"
  },
  {
    "barcode": "4305615898353",
    "name": "For Your Beauty Pamuklu Eldiven El Bakımı İçin",
    "source": "local_rossmann"
  },
  {
    "barcode": "4305615900728",
    "name": "For Your Beauty Fırça Bambu Wonder Karışıklık Açıcı",
    "source": "local_rossmann"
  },
  {
    "barcode": "4305615900759",
    "name": "Isana Love Your Skin Serum Overnight Niacinamide Gliser 30 ml",
    "source": "local_rossmann"
  },
  {
    "barcode": "4305615904597",
    "name": "Isana Vücut Losyonu Parfum & Glow 200 ml",
    "source": "local_rossmann"
  },
  {
    "barcode": "4305615907581",
    "name": "Isana Professional Saç Spreyi Sleek Look 150 ml",
    "source": "local_rossmann"
  },
  {
    "barcode": "4305615908892",
    "name": "For Your Beauty Temizleme ve Peeling Süngeri 2'li",
    "source": "local_rossmann"
  },
  {
    "barcode": "4305615911052",
    "name": "Isana Med Nemlendirici El Kremi % 5.5 Urea & Cica Hassas ve Kuru Ciltler İçin 100 ml",
    "source": "local_rossmann"
  },
  {
    "barcode": "4305615915029",
    "name": "Isana Pure Tonik 200 ml",
    "source": "local_rossmann"
  },
  {
    "barcode": "4305615917924",
    "name": "Alterra Serum Hyaluron 30 ml",
    "source": "local_rossmann"
  },
  {
    "barcode": "4305615917931",
    "name": "Alterra Serum Vitamin C 30 ml",
    "source": "local_rossmann"
  },
  {
    "barcode": "4305615918082",
    "name": "Isana Love Your Skin Nemlendirici Likit 100 ml",
    "source": "local_rossmann"
  },
  {
    "barcode": "4305615919577",
    "name": "Alterra Yüz Bakım Krem Parfümsüz, Çok Hassas Ciltler İçin 50 ml",
    "source": "local_rossmann"
  },
  {
    "barcode": "4305615919584",
    "name": "Alterra Göz Kremi Parfümsüz 15 ml",
    "source": "local_rossmann"
  },
  {
    "barcode": "4305615923499",
    "name": "Isana Professional Saç Bakım Yağı 6 in 1 Rose 100 ml",
    "source": "local_rossmann"
  },
  {
    "barcode": "4305615923505",
    "name": "Isana Professional Güçlü Bukleler Saç Spreyi 250 ml",
    "source": "local_rossmann"
  },
  {
    "barcode": "4305615924526",
    "name": "Alterra Serum Retinol Etkili Renkli 30 ml",
    "source": "local_rossmann"
  },
  {
    "barcode": "4305615929125",
    "name": "Isana Professional Hyaluronik Asit İçerikli Şampuan 250 ml",
    "source": "local_rossmann"
  },
  {
    "barcode": "4305615933498",
    "name": "Isana Love Your Skin Bakım Ampulü Retinol 7x2 ml",
    "source": "local_rossmann"
  },
  {
    "barcode": "4305615936611",
    "name": "Alterra Saç Toniği Kafein 150 ml",
    "source": "local_rossmann"
  },
  {
    "barcode": "4305615936673",
    "name": "Isana Vücut Peelingi Doğayı Sev Argan Yağ 230 gr",
    "source": "local_rossmann"
  },
  {
    "barcode": "4305615944449",
    "name": "For Your Beauty Saç Derisi Masaj Aparatı Ahşap",
    "source": "local_rossmann"
  },
  {
    "barcode": "4305615944470",
    "name": "For Your Beauty Masaj Küresi Cryo",
    "source": "local_rossmann"
  },
  {
    "barcode": "4305615946733",
    "name": "Isana Professional Hyaluron Asit İçerikli Saç Bakım Kremi Leave In 100 ml",
    "source": "local_rossmann"
  },
  {
    "barcode": "4305615951362",
    "name": "Isana Love Your Skin Serum Peptit Kolajen 30 ml",
    "source": "local_rossmann"
  },
  {
    "barcode": "4305615951379",
    "name": "Isana Love Your Skin Serum Bakuchiol Retinol 30 ml",
    "source": "local_rossmann"
  },
  {
    "barcode": "4305615951386",
    "name": "Isana Love Your Skin Yüz Temizleme Jeli AHA PHA 125 ml",
    "source": "local_rossmann"
  },
  {
    "barcode": "4305615951393",
    "name": "Isana Love Your Skin Krem Seramid Panthenol 50 ml",
    "source": "local_rossmann"
  },
  {
    "barcode": "4305615951409",
    "name": "Isana Love Your Skin Serum Gliserin Amino Asit 30 ml",
    "source": "local_rossmann"
  },
  {
    "barcode": "4305615951423",
    "name": "Isana Love Your Skin Serum Azelaik Asit 30 ml",
    "source": "local_rossmann"
  },
  {
    "barcode": "4305615951430",
    "name": "Isana Love Your Skin Serum Niacinamid 30 ml",
    "source": "local_rossmann"
  },
  {
    "barcode": "4305615956251",
    "name": "Alterra Şampuan Phyto Kolajen 200 ml",
    "source": "local_rossmann"
  },
  {
    "barcode": "4305615959757",
    "name": "Sunozon Yüz Kremi Glow Vitamin C+E SPF30 50 ml",
    "source": "local_rossmann"
  },
  {
    "barcode": "4305615964164",
    "name": "For Your Beauty Pens Toka 3'lü Jenner",
    "source": "local_rossmann"
  },
  {
    "barcode": "4305615968452",
    "name": "Alterra Onarıcı Saç Serumu Papatya 100 ml",
    "source": "local_rossmann"
  },
  {
    "barcode": "4305615975917",
    "name": "Isana Professional Plex Şampuan 250 ml",
    "source": "local_rossmann"
  },
  {
    "barcode": "4305615975924",
    "name": "Isana Professional Plex Saç Kremi 250 ml",
    "source": "local_rossmann"
  },
  {
    "barcode": "4305615975931",
    "name": "Isana Professional Plex Yıkama Öncesi Bakım 100 ml",
    "source": "local_rossmann"
  },
  {
    "barcode": "4305615975948",
    "name": "Isana Professional Plex Maske 125 ml",
    "source": "local_rossmann"
  },
  {
    "barcode": "4305615976778",
    "name": "Sunozon Bronzlaştırıcı Yüz Spreyi, 150 ml",
    "source": "local_rossmann"
  },
  {
    "barcode": "4305615982250",
    "name": "Isana Med Vücut Sütü Üre Yüzde 10 250 ml",
    "source": "local_rossmann"
  },
  {
    "barcode": "4305615986227",
    "name": "Isana Men Şampuan Kepek Karşıtı, 250 ml",
    "source": "local_rossmann"
  },
  {
    "barcode": "4305615989525",
    "name": "Isana Vücut Kremi Kavanoz Floral Blossom 500 ml",
    "source": "local_rossmann"
  },
  {
    "barcode": "4305615993782",
    "name": "Alterra Göz Kremi Bakuchiol 15 ml",
    "source": "local_rossmann"
  },
  {
    "barcode": "4743318101552",
    "name": "Organic Shop Citrus Vücut Scrubı 360 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "4743318101576",
    "name": "Organic Shop Lychee & Bubble Gum Vücut Scrubı 360 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "4743318182919",
    "name": "Organic Shop Hindistan Cevizi & Shea Yağlı Saç Maskesi 250 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "4743318182933",
    "name": "Organic Shop Argan & Amla Saç Maskesi 250 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "4751015928006",
    "name": "Himalaya Besleyici Dudak Kremi 4.5 gr",
    "source": "local_gratis"
  },
  {
    "barcode": "4751015928013",
    "name": "Himalaya Çilek Dudak Kremi 4.5 gr",
    "source": "local_gratis"
  },
  {
    "barcode": "4751015928105",
    "name": "Himalaya Yoğun Kakao Içeren Dudak Kremi 4,5 g",
    "source": "local_watsons"
  },
  {
    "barcode": "4894532932047",
    "name": "Pure Beauty Youth Restore Göz Serumu Yaşlanma Karşıtı 15 gr",
    "source": "local_watsons"
  },
  {
    "barcode": "4894532975150",
    "name": "Target Pro By Watsons Hydration Nemlendiri Serum 30 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "4894532975167",
    "name": "Target Pro By Watsons Whitening Aydınlatıcı Serum 30 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "4894532975174",
    "name": "Target Pro By Watsons Age Defense Yaşlanma Karşıtı Serum 30 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "4894532979042",
    "name": "Watsons Topuz Fırçası",
    "source": "local_watsons"
  },
  {
    "barcode": "4894532979059",
    "name": "Watsons Geniş Dişli Tarak",
    "source": "local_watsons"
  },
  {
    "barcode": "4894532980949",
    "name": "Watsons Fruity Maske Gold Kiwi Aydınlatıcı 1 Adet",
    "source": "local_watsons"
  },
  {
    "barcode": "4894532982578",
    "name": "Target Pro By Watsons Beyazlatıcı Göz Kremi 12 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "4894532988952",
    "name": "Pure Beauty Glow On Intensive Serum 30 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "4894532991518",
    "name": "Collagen By Watsons Moisturising Tonik 150 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "4894532995073",
    "name": "Watsons Kolajen & Hyalüronik Asit Yenileyici Kağıt Maske 1 Adet",
    "source": "local_watsons"
  },
  {
    "barcode": "4894532995103",
    "name": "Watsons Double HA Yoğun Nemlendirici Maske 1 Adet",
    "source": "local_watsons"
  },
  {
    "barcode": "4894532995134",
    "name": "Watsons Black Pearl Hyaluronik Asit Maske 1 Adet",
    "source": "local_watsons"
  },
  {
    "barcode": "4894532995226",
    "name": "Watsons Silk Protein Onarıcı Hyaluronik Asit Maske 1 Adet",
    "source": "local_watsons"
  },
  {
    "barcode": "4894532995288",
    "name": "Watsons Hyalüronik Asit Antioksidan Kağıt Maske 1 Adet",
    "source": "local_watsons"
  },
  {
    "barcode": "4894532996131",
    "name": "Watsons Treatment Plus Dudak Balmı SPF 30",
    "source": "local_watsons"
  },
  {
    "barcode": "4894532998081",
    "name": "Naturals By Watsons Conditioner Saç Kremi Coffee 490 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "4894819269804",
    "name": "Watsons Saç Maskesi Argan Yağı 500 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "4894819269989",
    "name": "Watsons Saç Maskesi Hindistan Cevizi 500 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "4894819270077",
    "name": "Watsons Saç Maskesi Aloe Vera 500 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "4894819271456",
    "name": "Target Pro By Watsons Age Defense Göz Kremi 12 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "4894819413030",
    "name": "Pure Beauty Pomegranate Hydro Glow Arındırıcı Tonik 150 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "4894819413047",
    "name": "Pure Beauty Pomegranate Hydro Glow Makyaj Temizleme Mendili 20 Adet",
    "source": "local_watsons"
  },
  {
    "barcode": "4894819413054",
    "name": "Pure Beauty Pomegranate Hydro Glow Vitamin C Serum 30 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "4894819413061",
    "name": "Pure Beauty Pomegranate Hydro Glow Renewal Gece Kremi 50 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "4894819413443",
    "name": "Watsons Silky Glow El Maskesi 1 Çift",
    "source": "local_watsons"
  },
  {
    "barcode": "4894819422414",
    "name": "Miine Saç Fırçası Ombre",
    "source": "local_watsons"
  },
  {
    "barcode": "4894819549869",
    "name": "Collagen By Watsons Youth Secret Gündüz Kremi 50 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "4894819549876",
    "name": "Collagen By Watsons Youth Secret Retinol Serum 35 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "4894819549883",
    "name": "Collagen By Watsons Youth Secret Göz Kremi 20 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "4894819550186",
    "name": "Pink By Pure Beauty Glow On Göz Çevresi Roll On 15 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "4894819551268",
    "name": "Watsons Gözenek Temizleyici Kil Maske 100 g",
    "source": "local_watsons"
  },
  {
    "barcode": "4894819551275",
    "name": "Watsons Aydınlatıcı Kil Maske 100 g",
    "source": "local_watsons"
  },
  {
    "barcode": "4894819552548",
    "name": "Pink By Pure Beauty Bye Bye Pores Tonik 250 ml S24",
    "source": "local_watsons"
  },
  {
    "barcode": "4894819552555",
    "name": "Pink By Pure Beauty Bye Bye Pores Temizleyici Köpük 125 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "4894819552562",
    "name": "Pink By Pure Beauty Bye Bye Pores Serum 30 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "4894819552623",
    "name": "Collagen By Watsons Moisturising Göz Roll On 15 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "4894819552647",
    "name": "Collagen By Watsons Moisturising Serum 30 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "4894819553811",
    "name": "Watsons Yüz Yağ Emici Mendil 100'lü",
    "source": "local_watsons"
  },
  {
    "barcode": "4894819559677",
    "name": "Miine Şampuan Saç Fırçası",
    "source": "local_watsons"
  },
  {
    "barcode": "4894819559684",
    "name": "Miine Shine Şampuan Fırçası",
    "source": "local_watsons"
  },
  {
    "barcode": "4894819559707",
    "name": "Miine Sparkling Saç Fırçası",
    "source": "local_watsons"
  },
  {
    "barcode": "4894819622890",
    "name": "Watsons Nolja Aloe Vera Yatıştırıcı Yüz Maskesi 1 Adet",
    "source": "local_watsons"
  },
  {
    "barcode": "4894819622906",
    "name": "Watsons Nolja Avokado Elastik Yüz Maskesi 1 Adet",
    "source": "local_watsons"
  },
  {
    "barcode": "4894819622913",
    "name": "Watsons Nolja Mango Canlandırıcı Yüz Maskesi 1 Adet",
    "source": "local_watsons"
  },
  {
    "barcode": "4894819622920",
    "name": "Watsons Nolja Acai Berry Sıkılaştırıcı Yüz Maskesi 1 Adet",
    "source": "local_watsons"
  },
  {
    "barcode": "4894819623712",
    "name": "Collagen By Watsons White Regeneration Temizleyici 125 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "4894819623729",
    "name": "Collagen By Watsons White Regeneration Arındırıcı Peeling Jel 100 g",
    "source": "local_watsons"
  },
  {
    "barcode": "4894819623774",
    "name": "Collagen By Watsons White Regeneration Yoğun Serum 35 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "4894819623781",
    "name": "Collagen By Watsons White Regeneration Işıltılı Göz Jeli 20 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "4894819623811",
    "name": "Collagen By Watsons White Regeneration Aydınlatıcı Yüz Güneş Koruyucu Losyon SPF50 PA++++ 50 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "4894819702004",
    "name": "Pure Beauty Brighten Up Yüz Güneş Kremi SPF50 PA++++ 50 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "4894819702011",
    "name": "Pure Beauty Brighten Up Temizleme Köpüğü 125 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "4894819702035",
    "name": "Pure Beauty Brighten Up Niacinamide-Glutathione Luminous Krem 50 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "4894819702042",
    "name": "Pure Beauty Brighten Up Niacinamide-Glutathione Luminous Serum 30 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "4894819702066",
    "name": "Pure Beauty Brighten Up Nem Veren Tonik 140 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "4894819702134",
    "name": "Watsons Derinlemesine Temizlik Burun Bandı Charcoal Powder 10'lu",
    "source": "local_watsons"
  },
  {
    "barcode": "4894819702158",
    "name": "Watsons Yağ Kontrol Burun Bandı AHA&BHA 10'lu",
    "source": "local_watsons"
  },
  {
    "barcode": "4894819702707",
    "name": "Collagen By Watsons Hydro Balance Temizleme Köpüğü 125 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "4894819702721",
    "name": "Collagen By Watsons Hydro Balance Nem Bombasi 50 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "4894819702745",
    "name": "Collagen By Watsons Hydro Balance Gece Kremi 50 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "4894819702752",
    "name": "Collagen By Watsons Hydro Balance Yoğun Serum 35 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "4894819702769",
    "name": "Collagen By Watsons Hydro Balance Göz Kremi 20 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "4894819703032",
    "name": "Watsons Cicare Pro+ Yatıştırıcı Maske 30 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "4894819703117",
    "name": "Watsons Gözenek Sıkılaştırıcı Essence Maske 23 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "4894819703308",
    "name": "Watsons Serum Maske Nemlendirici/Hya-B5 + Glycerın",
    "source": "local_watsons"
  },
  {
    "barcode": "4894819703315",
    "name": "Watsons Serum Maske Beyazlatıcı/ Vita-Cinamide+Aha",
    "source": "local_watsons"
  },
  {
    "barcode": "4894819703353",
    "name": "Watsons Serum Maske Antı Akne/Niacin-Cica + Pha",
    "source": "local_watsons"
  },
  {
    "barcode": "4894819703940",
    "name": "Naturals By Watsons Aloe Vera Saç Kremi 490 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "4894819703957",
    "name": "Naturals By Watsons Aloe Vera Saç Kremi Refill 450 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "4894819704015",
    "name": "Naturals By Watsons Aloe Vera Şampuan 490 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "4894819704022",
    "name": "Naturals By Watsons Aloe Vera Şampuan Refill 450 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "4894819704084",
    "name": "Naturals By Watsons Argan Vücut Losyonu 490 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "4894819704091",
    "name": "Naturals By Watsons Argan Vücut Scrub 200G",
    "source": "local_watsons"
  },
  {
    "barcode": "4894819704107",
    "name": "Naturals By Watsons Argan Saç Kremi 100 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "4894819704114",
    "name": "Naturals By Watsons Argan Saç Kremi 490 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "4894819704121",
    "name": "Naturals By Watsons Argan Saç Kremi Refill 450 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "4894819704138",
    "name": "Naturals By Watsons Argan Saç Maskesi 200 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "4894819704145",
    "name": "Naturals By Watsons Argan Saç Yağı 100 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "4894819704152",
    "name": "Naturals By Watsons Argan El Kremi 30 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "4894819704169",
    "name": "Naturals By Watsons Argan Şampuan 100 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "4894819704176",
    "name": "Naturals By Watsons Argan Şampuan 490 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "4894819704183",
    "name": "Naturals By Watsons Argan Şampuan Refill 450 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "4894819704237",
    "name": "Naturals By Watsons Argan Seyahat Seti 100 ml x3",
    "source": "local_watsons"
  },
  {
    "barcode": "4894819704282",
    "name": "Naturals By Watsons Sakura Vücut Losyonu 490 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "4894819704299",
    "name": "Naturals By Watsons Sakura Vücut Scrub 200 g",
    "source": "local_watsons"
  },
  {
    "barcode": "4894819704305",
    "name": "Naturals By Watsons Sakura El Kremi 30 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "4894819704329",
    "name": "Naturals By Watsons Coconut Saç Kremi 490 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "4894819704367",
    "name": "Naturals By Watsons Coconut Saç Serumu 100 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "4894819704374",
    "name": "Naturals By Watsons Hindistan Cevizli Şampuan 490 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "4894819704398",
    "name": "Naturals By Watsons Coffee Saç Kremi 490 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "4894819704411",
    "name": "Naturals By Watsons Coffee Şampuan 490 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "4894819704442",
    "name": "Naturals By Watsons Coffee Sugar Vücut Scrub 200 g",
    "source": "local_watsons"
  },
  {
    "barcode": "4894819704541",
    "name": "Naturals By Watsons Lavanta El Kremi 30 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "4894819704626",
    "name": "Naturals By Watsons Olive Vücut Losyonu 490 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "4894819704633",
    "name": "Naturals By Watsons Olive Vücut Scrub 200 g",
    "source": "local_watsons"
  },
  {
    "barcode": "4894819704640",
    "name": "Naturals By Watsons Olive Saç Kremi 100 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "4894819704657",
    "name": "Naturals By Watsons Olive Saç Kremi 490 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "4894819706057",
    "name": "Naturals By Watsons Olive Saç Maskesi 200 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "4894819706064",
    "name": "Naturals By Watsons Olive Saç Yağı 100 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "4894819706071",
    "name": "Naturals By Watsons Olive El Kremi 30 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "4894819706088",
    "name": "Naturals By Watsons Olive Şampuan 100 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "4894819706095",
    "name": "Naturals By Watsons Olive Şampuan 490 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "4894819706248",
    "name": "Naturals By Watsons Rosemary Saç Kremi 490 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "4894819706262",
    "name": "Naturals By Watsons Rosemary Şampuan 490 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "4894819706309",
    "name": "Naturals By Watsons Tea Tree Şampuan 490 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "4894819707740",
    "name": "Pure Beauty Cica Soothe Maske 20 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "4894819707757",
    "name": "Pure Beauty Pomegranate Hydro Glow Maske 20 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "4894819707764",
    "name": "Pure Beauty Niacin-Gluta Brighten Up Maske 20 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "4894819707795",
    "name": "Pure Beauty Youth Restore Nemlendirici Gece Kremi 50 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "4894819707818",
    "name": "Pure Beauty Youth Restore Contour Perfect Serum 15 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "4894819707825",
    "name": "Pure Beauty Youth Restore Nemlendirici Gündüz Kremi 50 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "4894819707849",
    "name": "Pure Beauty Youth Restore Sıkılaştırıcı Göz Krem 15 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "4894819707856",
    "name": "Pure Beauty Youth Restore Milky Mist 100 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "4894819707863",
    "name": "Pure Beauty Youth Restore Facial Serum 30 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "4894819708044",
    "name": "Target Pro By Watsons Active Biome Temizleyici 120G",
    "source": "local_watsons"
  },
  {
    "barcode": "4894819708068",
    "name": "Target Pro By Watsons Active Biome Tonik 150Ml",
    "source": "local_watsons"
  },
  {
    "barcode": "4894819708075",
    "name": "Target Pro By Watsons Active Biome Nemlendirici 50Ml",
    "source": "local_watsons"
  },
  {
    "barcode": "4894819708570",
    "name": "Pink By Pure Beauty Bye Bye Pores Kil Maskesi 100 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "4894819708617",
    "name": "Watsons Nemlendirici Essence Maske 23 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "4894819708624",
    "name": "Watsons Essence Maske Niacinamide Beyazlatıcı 1 Adet",
    "source": "local_watsons"
  },
  {
    "barcode": "4894819708631",
    "name": "Watsons Yoğun Onarım Essence Maske 23 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "4894819713611",
    "name": "Watsons 2'li Yüz Temizleme Sünger Seti",
    "source": "local_watsons"
  },
  {
    "barcode": "4894819713642",
    "name": "Watsons Silikon Yüz Pedi",
    "source": "local_watsons"
  },
  {
    "barcode": "4894819713895",
    "name": "Watsons Yüz Temizleme Süngeri",
    "source": "local_watsons"
  },
  {
    "barcode": "4894819746220",
    "name": "Miine Ice Saç Fırçası",
    "source": "local_watsons"
  },
  {
    "barcode": "4894819771178",
    "name": "Miine Yılbaşı Saç Tokası Geyik",
    "source": "local_watsons"
  },
  {
    "barcode": "4894819771192",
    "name": "Miine Yılbaşı Saç Tokası Santa",
    "source": "local_watsons"
  },
  {
    "barcode": "4894819771208",
    "name": "Miine Yılbaşı Saç Tokası Parlak Çam",
    "source": "local_watsons"
  },
  {
    "barcode": "4894819771215",
    "name": "Miine Yılbaşı Saç Tacı Santa",
    "source": "local_watsons"
  },
  {
    "barcode": "4894819771222",
    "name": "Miine Yılbaşı Saç Tacı Elf",
    "source": "local_watsons"
  },
  {
    "barcode": "4894819779631",
    "name": "Miine Bigudi Tokali Mor 3'lü",
    "source": "local_watsons"
  },
  {
    "barcode": "4894819781917",
    "name": "Miine Basic Bağlama Tokası 24'lü Pembe",
    "source": "local_watsons"
  },
  {
    "barcode": "4894819781948",
    "name": "Miine Basic Tel Toka 60'lı",
    "source": "local_watsons"
  },
  {
    "barcode": "4894819784376",
    "name": "Miine Cherry Pop Silikon Göz Bandı",
    "source": "local_watsons"
  },
  {
    "barcode": "4894819784406",
    "name": "Miine Cherry Pop Volkanik Taş",
    "source": "local_watsons"
  },
  {
    "barcode": "4894819794603",
    "name": "Miine Topuz Fırçası",
    "source": "local_watsons"
  },
  {
    "barcode": "4894819796195",
    "name": "Watsons Aqua Hydra Tonik Ped 30 Adet",
    "source": "local_watsons"
  },
  {
    "barcode": "4894819796201",
    "name": "Watsons Glow Whiten Tonik Ped 30 Adet",
    "source": "local_watsons"
  },
  {
    "barcode": "4894819796881",
    "name": "Target Pro By Watsons Vitamin C 15% Serum Konsantre 30 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "4894819888548",
    "name": "Target Pro By Watsons Nemlendirci Konsantre Serum 30 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "4894819888555",
    "name": "Target Pro By Watsons Beyazlatıcı Serum Konsantre 30 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "4894819888562",
    "name": "Target Pro By Watsons Yaşlanma Karşıtı Konsantre Serum 30 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "4894819888579",
    "name": "TARGET PRO BY WATSONS GÖZENEK BKM KON. SERUM 30ML",
    "source": "local_watsons"
  },
  {
    "barcode": "4894819890671",
    "name": "Collagen By Watsons White Regeneration Koyu Leke Serumu 30 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "4894819890718",
    "name": "Collagen By Watsons Yaşlanma Karşıtı Güneş Koruyucu SPF50 PA+++ 18 g",
    "source": "local_watsons"
  },
  {
    "barcode": "4894819893948",
    "name": "Pink By Pure Beauty Glow On Aydınlatıcı Yüz Güneş Koruyucu Losyon SPF50+ PA++++ 25 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "4894819893955",
    "name": "Pink By Pure Beauty Glow On Işıltı Veren Nemlendirici Güneş Koruyucu Losyon SPF50+ PA++++ 50 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "4894819894501",
    "name": "Watsons Niacinamide+Glutatyon Beyazlatıcı Maske 25 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "4894819894518",
    "name": "Watsons Niacinamide+Hyaluronic Acid Nemlendirici Maske 25 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "4894819894525",
    "name": "Watsons Niacinamide+C Vitamini Aydınlatıcı Maske 25 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "4894819894532",
    "name": "Watsons Niacinamide+Retinol Sıkılaştırıcı Maske 25 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "4894819894594",
    "name": "Watsons Pudding Maske Seramid Nemlendiren 25 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "4894819894600",
    "name": "Watsons Pudding Maske Niasinamid Beyazlatan 25 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "4894819894617",
    "name": "Watsons Pudding Maske Peptid Sıkılaştıran 25 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "4894819894624",
    "name": "Watsons Pudding Maske Çay Ağacı Yağ Dengesi 25 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "4894819895201",
    "name": "Pure Beauty Kombucha The First Esans 150 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "4894819896017",
    "name": "Pure Beauty Yüz Güneş Koruyucu Serum SPF50+ 40 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "4894819896024",
    "name": "Pure Beauty Mat Yüz Stick Güneş Koruyucu SPF50+ 17 g",
    "source": "local_watsons"
  },
  {
    "barcode": "4894819896055",
    "name": "Pink By Pure Beauty Bye Bye Pores Peeling Pad 70'li",
    "source": "local_watsons"
  },
  {
    "barcode": "4894819896109",
    "name": "Watsons Fruity Aloe Vera Işıltı Veren Maske 30 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "4894819896116",
    "name": "Watsons Fruity Salatalık Ferahlatıcı Maske 30 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "4894819896130",
    "name": "Watsons Fruity Karpuz Rahatlatıcı Maske 30 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "4894819896147",
    "name": "Watsons Fruity Jeju Portakal Aydınlatıcı Maske 30 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "4894819896161",
    "name": "Watsons Fruity Sivilce Karşıtı Çayağaç Maske 30 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "4894819896420",
    "name": "Pure Beauty Cushion Yüz Güneş Kremi SPF50 14 g",
    "source": "local_watsons"
  },
  {
    "barcode": "4894819899049",
    "name": "Pink By Pure Beauty Rahatlatıcı Günlük Maske 30'lu",
    "source": "local_watsons"
  },
  {
    "barcode": "4894819899056",
    "name": "Pink By Pure Beauty Aydınlatıcı Günlük Maske 30'lu",
    "source": "local_watsons"
  },
  {
    "barcode": "4894819899988",
    "name": "Pure Beauty Matte Cushion 01 Ivory SPF50 PA++++ 12 g",
    "source": "local_watsons"
  },
  {
    "barcode": "4894819899995",
    "name": "Pure Beauty Cushion Krem Natural 12 g",
    "source": "local_watsons"
  },
  {
    "barcode": "4894819900004",
    "name": "Pure Beauty Cushion Krem Ivory Refill 12 g",
    "source": "local_watsons"
  },
  {
    "barcode": "4894819900011",
    "name": "Pure Beauty Cushion Krem Natural Refill 12 g",
    "source": "local_watsons"
  },
  {
    "barcode": "4894819900370",
    "name": "Pink By Pure Beauty Glow On Temizleme Köpüğü 100 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "4894819900394",
    "name": "Pink By Pure Beauty Glow On Milky Tonik 100 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "4894819900424",
    "name": "Pink By Pure Beauty Glow On Pudding Krem 50 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "4894819992672",
    "name": "Collagen By Watsons White Regeneration Tonik Ped 90'lı",
    "source": "local_watsons"
  },
  {
    "barcode": "4894819995116",
    "name": "Pure Beauty Ci-Care Krem Temizleyici 125 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "4894819995123",
    "name": "Pure Beauty Ci-Care Tonik 150 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "4894819995130",
    "name": "Pure Beauty Ci-Care Kapsül Serum 30 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "4894819995147",
    "name": "Pure Beauty Ci-Care Yüz Kremi 50 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "4894819995161",
    "name": "Pure Beauty Ci-Care Leke Karşıtı Serum 30 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "4894819995178",
    "name": "Pure Beauty Ci-Care Cilt Tonu Eşitleyici Krem 30 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "4894819995697",
    "name": "Pure Beauty Ceramoist Yüz Temizleme Köpüğü 125 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "4894819995710",
    "name": "Pure Beauty Ceramoist Jelly Krem 50 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "4894819995734",
    "name": "Pure Beauty Ceramoist Kağıt Maske 20 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "4894819996311",
    "name": "Watsons Onarıcı Keratin Kapsül Saç Serumu 6 Adet",
    "source": "local_watsons"
  },
  {
    "barcode": "4894819997561",
    "name": "Pure Beauty Brighten Up Makyaj Temizleme Mendili 20 Adet",
    "source": "local_watsons"
  },
  {
    "barcode": "4894819997578",
    "name": "Pure Beauty Ceramoist Makyaj Temizleme Mendili 20 Adet",
    "source": "local_watsons"
  },
  {
    "barcode": "4895175201231",
    "name": "Himalaya Arındırıcı Kağıt Maske 30 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "4895175201248",
    "name": "Himalaya Detoks Kömür ve Yeşil Çay Etkili Kağıt Maske 30 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "4895175201255",
    "name": "Himalaya Aydınlatıcı Kağıt Maske 30 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "4896012005432",
    "name": "Miine Basic Bağlama Tokası Siyah 70'li",
    "source": "local_watsons"
  },
  {
    "barcode": "4896012005449",
    "name": "Miine Basic Bağlama Tokası Siyah 14'lü",
    "source": "local_watsons"
  },
  {
    "barcode": "4896012005456",
    "name": "Miine Basic Bağlama Tokası Krem 24'lü",
    "source": "local_watsons"
  },
  {
    "barcode": "4896012005463",
    "name": "Miine Basic Bağlama Tokası Bordo 24'lü",
    "source": "local_watsons"
  },
  {
    "barcode": "4896012005470",
    "name": "Miine Basic Bağlama Tokası Pembe 24'lü",
    "source": "local_watsons"
  },
  {
    "barcode": "4896012005487",
    "name": "Miine Basic Bağlama Tokası Siyah 24'lü",
    "source": "local_watsons"
  },
  {
    "barcode": "4896012005494",
    "name": "Miine Basic Tel Toka Siyah 60'lı",
    "source": "local_watsons"
  },
  {
    "barcode": "4896012040037",
    "name": "WATSONS SİYAH NOKTA GİDERİCİ",
    "source": "local_watsons"
  },
  {
    "barcode": "4896012063616",
    "name": "Miine Sevgililer Günü Detangle Saç Fırçası",
    "source": "local_watsons"
  },
  {
    "barcode": "4896012064088",
    "name": "Miine Bağlama Tokası Siyah 3'lü",
    "source": "local_watsons"
  },
  {
    "barcode": "4896012064095",
    "name": "Miine Bağlama Tokası Leopar 3'lü",
    "source": "local_watsons"
  },
  {
    "barcode": "4896012064101",
    "name": "Miine Bağlama Tokası Renkli İncili 5'li",
    "source": "local_watsons"
  },
  {
    "barcode": "4896012064118",
    "name": "Miine Bağlama Tokası Büyük Beyaz",
    "source": "local_watsons"
  },
  {
    "barcode": "4896012064125",
    "name": "Miine Bağlama Tokası Büyük Siyah",
    "source": "local_watsons"
  },
  {
    "barcode": "4896012064163",
    "name": "Miine Mandal Toka Sarı Çiçek",
    "source": "local_watsons"
  },
  {
    "barcode": "4896012064170",
    "name": "Miine Mandal Toka Pembe Kurdele",
    "source": "local_watsons"
  },
  {
    "barcode": "4896012064187",
    "name": "Miine Mandal Toka Sarı Kurdele",
    "source": "local_watsons"
  },
  {
    "barcode": "4896012064194",
    "name": "Miine Saç Bandı 2'li",
    "source": "local_watsons"
  },
  {
    "barcode": "4896012064200",
    "name": "Miine Bağlama Tokası Meyve 2'li",
    "source": "local_watsons"
  },
  {
    "barcode": "4896012064217",
    "name": "Miine Toka Küçük Kurdele 3'lü",
    "source": "local_watsons"
  },
  {
    "barcode": "4896012064224",
    "name": "Miine Bağlama Tokası Renkli Kareli",
    "source": "local_watsons"
  },
  {
    "barcode": "4896012064231",
    "name": "Miine Bağlama Tokası Renkli 5'li",
    "source": "local_watsons"
  },
  {
    "barcode": "4896012064248",
    "name": "Miine Toka Seti Renkli 36'lı",
    "source": "local_watsons"
  },
  {
    "barcode": "4896012064255",
    "name": "Miine Bağlama Tokası Mavi 3'lü",
    "source": "local_watsons"
  },
  {
    "barcode": "4896012064262",
    "name": "Miine Bağlama Tokası Çiçek",
    "source": "local_watsons"
  },
  {
    "barcode": "4896012064279",
    "name": "Miine Bağlama Tokası Saten",
    "source": "local_watsons"
  },
  {
    "barcode": "4896012064286",
    "name": "Miine Bağlama Tokası Çilek 4'lü",
    "source": "local_watsons"
  },
  {
    "barcode": "4896012064293",
    "name": "Miine Toka Seti Limon 4'lü",
    "source": "local_watsons"
  },
  {
    "barcode": "4896012064309",
    "name": "Miine Toka Seti Meyveli 12'li",
    "source": "local_watsons"
  },
  {
    "barcode": "4896012066235",
    "name": "Collagen By Watsons Pdrn Jel Maske 1 Adet",
    "source": "local_watsons"
  },
  {
    "barcode": "4896012066242",
    "name": "Collagen By Watsons Pdrn Göz Kremi 15 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "4896012066259",
    "name": "Collagen By Watsons %99 Pdrn Ampul Serum 10'lu",
    "source": "local_watsons"
  },
  {
    "barcode": "4896012066266",
    "name": "Collagen By Watsons Pdrn Jel Tonik Ped 60'lı",
    "source": "local_watsons"
  },
  {
    "barcode": "4896012067997",
    "name": "Watsons Kolay Kavramalı Saç Fırçası",
    "source": "local_watsons"
  },
  {
    "barcode": "4896012068000",
    "name": "Watsons Islak Kuru Saç Fırçası",
    "source": "local_watsons"
  },
  {
    "barcode": "4896012068017",
    "name": "Watsons Aynalı Katlanabilir Saç Fırçası",
    "source": "local_watsons"
  },
  {
    "barcode": "4896012068024",
    "name": "Watsons Yuvarlak Saç Fırçası",
    "source": "local_watsons"
  },
  {
    "barcode": "4896012068048",
    "name": "Watsons Detangle Saç Fırçası",
    "source": "local_watsons"
  },
  {
    "barcode": "4896012068062",
    "name": "Watsons Topuz Fırçası",
    "source": "local_watsons"
  },
  {
    "barcode": "4896012068079",
    "name": "Watsons Geniş Dişli Tarak",
    "source": "local_watsons"
  },
  {
    "barcode": "4896012068154",
    "name": "Watsons Şampuan Fırçası",
    "source": "local_watsons"
  },
  {
    "barcode": "4896012068161",
    "name": "Watsons Fön Fırçası",
    "source": "local_watsons"
  },
  {
    "barcode": "4896012068178",
    "name": "Watsons Hava Basınçlı Saç Fırçası",
    "source": "local_watsons"
  },
  {
    "barcode": "4896012068185",
    "name": "Watsons Üç Boyutlu Saç Fırçası",
    "source": "local_watsons"
  },
  {
    "barcode": "4896012068208",
    "name": "Watsons Açma Tarama Saç Fırçası",
    "source": "local_watsons"
  },
  {
    "barcode": "4896012129350",
    "name": "Miine Mandal Toka Charmlı Beyaz",
    "source": "local_watsons"
  },
  {
    "barcode": "4896012129367",
    "name": "Miine Mandal Toka Charmlı Pembe",
    "source": "local_watsons"
  },
  {
    "barcode": "4896012129374",
    "name": "Miine Mandal Toka Charmlı Mavi",
    "source": "local_watsons"
  },
  {
    "barcode": "4896012129497",
    "name": "Miine Basic Bigudi Tokalı Pembe 12'li",
    "source": "local_watsons"
  },
  {
    "barcode": "4896012129503",
    "name": "Miine Basic Bigudi Tokalı Pembe 2'li",
    "source": "local_watsons"
  },
  {
    "barcode": "4896012129510",
    "name": "Miine Basic Saç Sosis Seti 3'lü",
    "source": "local_watsons"
  },
  {
    "barcode": "4896012132824",
    "name": "MIINE HALLOWEEN KEDİ KULAKLI TAÇ",
    "source": "local_watsons"
  },
  {
    "barcode": "4896012132831",
    "name": "Miine Halloween Cadı Şapkalı Taç",
    "source": "local_watsons"
  },
  {
    "barcode": "4896012132848",
    "name": "Miine Halloween İskelet El Saç Tokası",
    "source": "local_watsons"
  },
  {
    "barcode": "4896012132855",
    "name": "Miine Halloween Yarasa Kanadı Saç Tokası",
    "source": "local_watsons"
  },
  {
    "barcode": "4896012132862",
    "name": "Miine Halloween Turuncu Bağlama Tokası",
    "source": "local_watsons"
  },
  {
    "barcode": "4896012132879",
    "name": "Miine Halloween Mor Bağlama Tokası",
    "source": "local_watsons"
  },
  {
    "barcode": "5010724000762",
    "name": "Batiste Kuru Şampuan Sensitive Fragranced 200 ml",
    "source": "local_rossmann"
  },
  {
    "barcode": "5010724527375",
    "name": "Batiste Kuru Şampuan Blush 200 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "5010724527399",
    "name": "Batiste Kuru Şampuan Blush Seyahat Boy 50 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "5010724527450",
    "name": "Batiste Fresh Kuru Şampuan 200 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "5010724527481",
    "name": "Batiste Original Kuru Şampuan 200 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "5010724527504",
    "name": "Batiste Original Kuru Şampuan 50 ml (Seyahat Boy)",
    "source": "local_gratis"
  },
  {
    "barcode": "5010724527511",
    "name": "Batiste Kuru Şampuan Tropical 200 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "5010724528426",
    "name": "Batiste Kuru Şampuan Floral 200 ml",
    "source": "local_rossmann"
  },
  {
    "barcode": "5010724529072",
    "name": "Batiste XXL Ekstra Hacim Kuru Şampuan 200 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "5010724529836",
    "name": "Batiste Kuru Şampuan Bare 200 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "5010724530467",
    "name": "Batiste Kuru Şampuan Rose Gold 200 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "5011408095579",
    "name": "Loreal Paris Revitalift Filler Dolgunlaştırıcı Serum Maske 28 gr",
    "source": "local_gratis"
  },
  {
    "barcode": "5011451103849",
    "name": "Simple Kind to Skin Arındırıcı Temizleme Losyonu 200 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "5011451103856",
    "name": "Simple Kind to Skin Yatıştırıcı Yüz Tonik 200 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "5011451103863",
    "name": "Simple Kind To Skin Ferahlatıcı Yüz Temizleme Jeli 150 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "5011451103870",
    "name": "Simple Kind To Skin Nemlendirici Yüz Temizleme Jeli 150 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "5011451103917",
    "name": "Simple Kind To Skin Hasas Göz Makyaj Temizleyici 125 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "5011451103931",
    "name": "Simple Kind To Skin Su Bazlı Nemlendirici 125 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "5011451103948",
    "name": "Simple Yenileyici Nemlendirici Krem 125 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "5011451104020",
    "name": "Simple Regeneration Yaşlanma Karşıtı Yüz Yıkama Jeli 150 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "5012008592505",
    "name": "Inecto Hindistan Cevizi Yağlı Şampuan 500 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "5012008743105",
    "name": "Inecto Hindistan Cevizi Yağlı Saç Bakım Yağı 100 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "5012251012249",
    "name": "Beauty Formulas Charcoal Facial Scrub 150 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "5012251012256",
    "name": "Beauty Formulas Charcoal Aktif Kömürlü Yüz Temizleyici 150 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "5012251012263",
    "name": "Beauty Formulas Charcoal Clay Aktif Kömürlü Kil Maskesi 100 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "5012251012638",
    "name": "Beauty Formulas Bubble Aktif Kömürlü Maske Arındırıcı 1 Adet",
    "source": "local_watsons"
  },
  {
    "barcode": "5012251012645",
    "name": "Beauty Formulas Kömürlü Burun Bandı 6 Adet",
    "source": "local_watsons"
  },
  {
    "barcode": "5012251013000",
    "name": "Beauty Formulas Gold Burun Bandı Siyah Nokta Temizleyici 6 Adet",
    "source": "local_watsons"
  },
  {
    "barcode": "5012251013871",
    "name": "Beauty Formulas Hyalronic Hydro Jel Göz Maskesi 6'lı",
    "source": "local_watsons"
  },
  {
    "barcode": "5017634020804",
    "name": "John Frieda Frizz Ease Touch Up Son Dokunuş Saç Kremi 100 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "5037156097603",
    "name": "John Frieda Sheer Blonde Go Blonder Sarı Saçlara Özel Işıltı Veren Şampuan 250 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "5037156227567",
    "name": "John Frieda Brilliant Brunette Colour Vibrancy Renk Canlandırıcı Şampuan 250 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "5037156278286",
    "name": "John Frieda Frizz Ease Original Serum 50 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "5037156279177",
    "name": "John Frieda Vibrant Shine Şampuan 250 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "5037156279207",
    "name": "John Frieda Vibrant Shine Saç Kremi 250 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "5037156292190",
    "name": "John Frieda Şampuan Blonde+ Repair 250 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "5037156292220",
    "name": "John Frieda Saç Kremi Blonde+Repair 250 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "5037156295351",
    "name": "John Frieda Dream Curls Canladırıcı Sprey 150 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "5037156295382",
    "name": "John Frieda Dream Curls Nemlendirici Jel 200 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "5037156295504",
    "name": "John Frieda Frizz Ease İpeksi Yumuşaklık İçin Nemlendirici Saç Bakım Suyu 200 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "5037156295924",
    "name": "John Frieda Renk Açıcı Toner Champagne Blonde 120 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "5037156297546",
    "name": "John Frieda Sheer Blonde Highlight Activating Canlı Işıltılar Şampuan 250 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "5037156297614",
    "name": "John Frieda Sheer Blonde Go Blonder Sarı Saçlara Özel Işıltı Veren Saç Kremi 250 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "5037156297621",
    "name": "John Frieda Sheer Blonde Go Blonder Sarı Saçlara Özel Renk Açıcı Saç Spreyi 100 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "5037156297669",
    "name": "John Frieda Sheer Blonde Go Blonder Seyahat Boy Şampuan 75 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "5037156297676",
    "name": "John Frieda Sheer Blonde Go Blonder Seyahat Boy Saç Kremi 75 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "5037156297683",
    "name": "John Frieda Violet Crush Mor Şampuan 250 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "5037156298147",
    "name": "John Frieda Frizz Ease Dream Curls Belirgin Bukleler İçin Nemlendirici Jel 200 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "5037156298185",
    "name": "John Frieda Frizz Ease Dream Curls Kusursuz Bukleler Yağ Bazlı Canlandırıcı Sprey 150 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "5037156298284",
    "name": "John Frieda Frizz Ease Dream Curls Kusursuz Bukleler Saç Köpüğü 200 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "5037156298338",
    "name": "John Frieda İpeksi Düzlük Şampuan 250 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "5037156298383",
    "name": "John Frieda İpeksi Düzlük Saç Kremi 250 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "5037156298444",
    "name": "John Frieda Frizz Ease Dream Curls Kusursuz Bukleler Şampuan 250 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "5037156298468",
    "name": "John Frieda Frizz Ease Dream Curls Seyahat Boy Şampuan 75 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "5037156298512",
    "name": "John Frieda Frizz Ease Dream Curls Kusursuz Bukleler Saç Bakım Kremi 250 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "5037156298543",
    "name": "John Frieda Frizz Ease Dream Curls Seyahat Boy Saç Bakım Kremi 75 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "5037156298598",
    "name": "John Frieda Frizz Ease Dream Curls Kusursuz Bukleler Saç Bakım Maskesi 250 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "5037156298611",
    "name": "John Frieda Frizz Ease Miraculous Recovery Mucivezi Onarım Şampuan 250 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "5037156298635",
    "name": "John Frieda Frizz Ease Miraculous Recovery Mini Şampuan 75 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "5037156298680",
    "name": "John Frieda Frizz Ease Miraculous Recovery Mucizevi Onarım Saç Bakım Kremi 250 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "5037156298703",
    "name": "John Frieda Frizz Ease Miraculous Recovery Mini Saç Bakım Kremi 75 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "5037156298772",
    "name": "John Frieda Miraculous Recovery Saç Bakım Maskesi 250 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "5037156298857",
    "name": "John Frieda Frizz Ease Kalın ve İnatçı Saçlar İçin Ekstra Güç Saç Serumu 50 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "5037156298895",
    "name": "John Frieda Frizz Ease Serum 50 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "5037156298949",
    "name": "John Frieda Brilliant Brunnette Colour Vibrancy Renk Canlandırıcı Şampuan 250 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "5037156298987",
    "name": "John Frieda Brilliant Brunnette Colour Vibrancy Renk Canlandırıcı Saç Kremi 250 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "5037156299076",
    "name": "Jonh Frieda Volume Lift Hacim Veren Saç Bakım Kremi 250 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "5037156299090",
    "name": "John Frieda Volume Lift Hacim Veren Şampuan 250 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "5037156299243",
    "name": "John Frieda Volume Lift Hacim Veren Saç Spreyi 250 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "5037156299267",
    "name": "John Frieda PROfiller+ For Fine Hair Hair Hacim Veren Şampuan 250 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "5037156299274",
    "name": "John Frieda PROfiller+ For Fine Hair Hacim Veren Saç Kremi 250 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "5037156299427",
    "name": "John Frieda PROfiller+ For Fine Hair Hacim Veren Durulanmayan Saç Bakım Spreyi 150 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "5037156299601",
    "name": "John Frieda Blonde+ Bakım Şampuanı 250 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "5037156299618",
    "name": "John Frieda Blonde+ Saç Bakım Kremi 250 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "5037156301243",
    "name": "John Frieda Hacim Veren Kuru Şampuan 200 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "5037156302301",
    "name": "John Frieda İpeksi Düzlük Şampuan Seyahat Boy 75 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "5037156302318",
    "name": "John Frieda İpeksi Düzlük Bakım Kremi Seyahat Boy 75 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "5037200081565",
    "name": "Oh K! Vitamin C Göz Maskesi 2 Adet",
    "source": "local_watsons"
  },
  {
    "barcode": "5037200101706",
    "name": "Oh K! Dudak Maskesi Hidrojel 1 Adet",
    "source": "local_watsons"
  },
  {
    "barcode": "5037200109238",
    "name": "Oh K! Kafein Göz Maskesi 2 Adet",
    "source": "local_watsons"
  },
  {
    "barcode": "5056217801133",
    "name": "Nip+Fab Teen Skin Yüz Pedi Salisilik Asit 80 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "5057566518130",
    "name": "Relove By Revolution Baby Dudak Yağı Papaya",
    "source": "local_watsons"
  },
  {
    "barcode": "5057566518147",
    "name": "Relove By Revolution Baby Dudak Yağı Tonka Bean",
    "source": "local_watsons"
  },
  {
    "barcode": "5057566518178",
    "name": "Relove By Revolution Baby Dudak Yağı Matcha",
    "source": "local_watsons"
  },
  {
    "barcode": "5057566585453",
    "name": "Relove By Revolution %10 Niasinamid Serum 18 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "5057566585460",
    "name": "Relove By Revolution %5 Kafein Serum 18 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "5057566587419",
    "name": "I Heart Revolution Tasty Tropik Dudak Yağı Papaya",
    "source": "local_watsons"
  },
  {
    "barcode": "5057566587426",
    "name": "I Heart Revolution Tasty Tropik Dudak Yağı Pomegranate",
    "source": "local_watsons"
  },
  {
    "barcode": "5057566605755",
    "name": "I Heart Revolution Looney Tunes Dudak Yağı Bugs",
    "source": "local_watsons"
  },
  {
    "barcode": "5057566631397",
    "name": "Revolution Skincare Leke ve Gözenek Arındırıcı Serum 30 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "5057566631656",
    "name": "Revolution Skincare Göz Serumu Kafein ve Hyaluronik Asit 30 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "5057566674744",
    "name": "Revolution Pout Balm Pink Shine",
    "source": "local_watsons"
  },
  {
    "barcode": "5057566674768",
    "name": "Revolution Pout Balm Fuchsia Shine",
    "source": "local_watsons"
  },
  {
    "barcode": "5057566674775",
    "name": "Revolution Pout Balm Rose Shine",
    "source": "local_watsons"
  },
  {
    "barcode": "5057566691759",
    "name": "Revolution Skincare Vitamin C Micellar Su 400 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "5057566817912",
    "name": "I Heart Revolution Sweet Chilli Dolgunlaştırıcı Dudak Yağı Clear",
    "source": "local_watsons"
  },
  {
    "barcode": "5057566817943",
    "name": "I Heart Revolution Sweet Chilli Dudak Maskesi",
    "source": "local_watsons"
  },
  {
    "barcode": "5057566817950",
    "name": "I Heart Revolution Sweet Chilli Plumping Dudak Peelingi",
    "source": "local_watsons"
  },
  {
    "barcode": "5057566823586",
    "name": "Revolution Juicy Peptide Lip Balm Nude Spice",
    "source": "local_watsons"
  },
  {
    "barcode": "5057566823593",
    "name": "Revolution Juicy Peptide Lip Balm Pink Strawberry",
    "source": "local_watsons"
  },
  {
    "barcode": "5057566823609",
    "name": "Revolution Juicy Peptide Lip Balm Nude Latte",
    "source": "local_watsons"
  },
  {
    "barcode": "5057566823616",
    "name": "Revolution Juicy Peptide Lip Balm Clear Ice",
    "source": "local_watsons"
  },
  {
    "barcode": "5057566828239",
    "name": "I Heart Revolution Pop Gloss Balm Watermelon Pink",
    "source": "local_watsons"
  },
  {
    "barcode": "5057566828246",
    "name": "I Heart Revolution Pop Gloss Balm Cherry Red",
    "source": "local_watsons"
  },
  {
    "barcode": "5057566828260",
    "name": "I Heart Revolution Pop Gloss Balm Coconut Brown",
    "source": "local_watsons"
  },
  {
    "barcode": "5057566828277",
    "name": "I Heart Revolution Pop Gloss Balm Plum Purple",
    "source": "local_watsons"
  },
  {
    "barcode": "5057566832250",
    "name": "I Heart Revolution Swirl Dudak Balmı Cheesecake",
    "source": "local_watsons"
  },
  {
    "barcode": "5057566832267",
    "name": "I Heart Revolution Swirl Dudak Balmı Peach Melba",
    "source": "local_watsons"
  },
  {
    "barcode": "5057566832274",
    "name": "I Heart Revolution Swirl Dudak Balmı Cookies&Cream",
    "source": "local_watsons"
  },
  {
    "barcode": "5057566832281",
    "name": "I Heart Revolution Swirl Dudak Balmı Lemonmeringue",
    "source": "local_watsons"
  },
  {
    "barcode": "5057566832298",
    "name": "I Heart Revolution Swirl Dudak Balmı Blueberry",
    "source": "local_watsons"
  },
  {
    "barcode": "5057566833172",
    "name": "Revolution Clearly Me Arındırıcı Temizleme Jeli 150 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "5057566833196",
    "name": "Revolution Milky Away Nemlendirici Temizleme Sütü 150 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "5057566833202",
    "name": "Revolution Jelly Gleam Aydınlatıcı Temizleme Jeli 150 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "5057566833219",
    "name": "Revolution Pore Player Arındırıcı Tonik 150  ml",
    "source": "local_watsons"
  },
  {
    "barcode": "5057566833226",
    "name": "Revolution Glyco Glow Aydınlatıcı Tonik 150  ml",
    "source": "local_watsons"
  },
  {
    "barcode": "5057566833240",
    "name": "Revolution Bouncy Drops Nemlendirici Tonik Essence 150  ml",
    "source": "local_watsons"
  },
  {
    "barcode": "5057566833264",
    "name": "Revolution Clear Canvas Arındırıcı Serum 30  ml",
    "source": "local_watsons"
  },
  {
    "barcode": "5057566833271",
    "name": "Revolution Dewy Drench Nemlendirici Serum 30 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "5057566833325",
    "name": "Revolution Hydra Heist Nemlendirici 50 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "5057566833363",
    "name": "Revolution Plump-Tide Yatıştıran Nemlendirici 50 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "5057566833370",
    "name": "Revolution Espresso Eye Lift Göz Serumu 15  ml",
    "source": "local_watsons"
  },
  {
    "barcode": "5057566836616",
    "name": "Revolution Pout Dudak Yağı Glam Pink Shimmer",
    "source": "local_watsons"
  },
  {
    "barcode": "5057566852487",
    "name": "Revolution Must Be Mucin Yatıştırıcı Serum 30  ml",
    "source": "local_watsons"
  },
  {
    "barcode": "5057566852494",
    "name": "Revolution Cloud Clear Arındıran Nemlendirici 50 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "5057566853347",
    "name": "Revolution Pout Dudak Yağı Watermelon Pink",
    "source": "local_watsons"
  },
  {
    "barcode": "5057566858977",
    "name": "I Heart Revolution Juicy Heart Lip Serum Grey",
    "source": "local_watsons"
  },
  {
    "barcode": "5057566859066",
    "name": "I Heart Revolution Citrus Zing Dudak Yağı",
    "source": "local_watsons"
  },
  {
    "barcode": "5057566864329",
    "name": "Revolution Jelly Popsicle Peach Dudak Yağı",
    "source": "local_watsons"
  },
  {
    "barcode": "5057566864336",
    "name": "Revolution Jelly Candy Ice Pink Dudak Yağı",
    "source": "local_watsons"
  },
  {
    "barcode": "5057566864343",
    "name": "Revolution Jelly Watermelon Crush Dudak Yağı",
    "source": "local_watsons"
  },
  {
    "barcode": "5057566864374",
    "name": "Revolution Jelly Crystal Clear Ph Dudak Yağı",
    "source": "local_watsons"
  },
  {
    "barcode": "5057566875622",
    "name": "I Heart Revolution Midnight Cherry Lip Treatment",
    "source": "local_watsons"
  },
  {
    "barcode": "5057566877992",
    "name": "Revolution Pout Dudak Yağı Bitten Cherry",
    "source": "local_watsons"
  },
  {
    "barcode": "5057566878005",
    "name": "Revolution Pout Dudak Yağı Midnight Black",
    "source": "local_watsons"
  },
  {
    "barcode": "5059018381095",
    "name": "Avon True Dudak Bakım Yağı Blossom",
    "source": "local_watsons"
  },
  {
    "barcode": "5059018381101",
    "name": "Avon True Dudak Bakım Yağı Shimmering Petal",
    "source": "local_watsons"
  },
  {
    "barcode": "5059018545733",
    "name": "Avon Argan Yağı Besleyici Saç Serumu 30 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "5059018628993",
    "name": "Avon Argan&Hindistan Cevizi Saç Bakım Yağı 100 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "5060372800085",
    "name": "Dr. Pawpaw Ultimate Kırmızı Dudak Balm 25 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "5060372800542",
    "name": "Dr. Pawpaw Tinted Peach Pink Balm 10 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "5060372800566",
    "name": "Dr. Pawpaw Tinted Ultimate Red Balm 10 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "5060372800689",
    "name": "Dr. Pawpaw Tinted Rich Mocha Balm 10 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "5060630040185",
    "name": "Tangle Teezer Saç Fırçası Mini Turkuaz",
    "source": "local_watsons"
  },
  {
    "barcode": "5060630042998",
    "name": "Tangle Teezer Saç Fırçası Mini Pembe",
    "source": "local_watsons"
  },
  {
    "barcode": "5060926684567",
    "name": "Tangle Teezer Saç Fırçası Mini Turuncu Baskılı",
    "source": "local_watsons"
  },
  {
    "barcode": "5060926686837",
    "name": "Tangle Teezer Saç Fırçası Mini Sarı",
    "source": "local_watsons"
  },
  {
    "barcode": "5099821002817",
    "name": "Hawaiian Tropic Glowing Protection Vücut Güneş Koruyucu Losyon SPF50 170 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "5099821128740",
    "name": "Hawaiian Tropic Aerosol Vücut Güneş Kremi Sprey SPF50 220 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "5410091732936",
    "name": "Syoss Saç Köpüğü Bukle Kontrolü 250 ml",
    "source": "local_rossmann"
  },
  {
    "barcode": "5410091767334",
    "name": "Gliss Night Elixir Onarıcı Gece Saç Bakım Serumu Çok Yıpranmış ve Kuru Saçlar 100 ml",
    "source": "local_rossmann"
  },
  {
    "barcode": "5410091774035",
    "name": "Gliss Liquid Silk Parlaklık Veren Saç Serumu 100 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "5900525075819",
    "name": "Cashmere Nemlendirici Hidrojel Makyaj Bazı 30 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "5900525078674",
    "name": "Hada Labo Tokyo Yoğun Nemlendiricili Kırışıklık Karşıtı Jel 50 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "5900525078681",
    "name": "Hada Labo Tokyo Kırışıklık Karşıtı Jel Losyon 150 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "5900525078698",
    "name": "Hada Labo Tokyo Arındırıcı Yüz Temizleme Jeli 150 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "5900525078704",
    "name": "Hada Labo Tokyo Pürüzsüzleştirici ve Nemlendirici Gündüz ve Gece Kremi 50 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "5900525078735",
    "name": "Hada Labo Tokyo Kırışıklık Karşıtı Nemlendirici Serum 30 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "5900525078759",
    "name": "Hada Labo Tokyo Yoğun Nemlendiricili Kırışıklık Karşıtı Hidro Krem 50 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "5900525078773",
    "name": "Hada Labo Tokyo Göz ve Ağız Çevresi Kırışıklık Karşıtı Krem 15 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "5900525078803",
    "name": "Hada Labo Tokyo Kırışıklık Karşıtı Gündüz Kremi 50 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "5900525078988",
    "name": "Hada Labo Kırışıklık Karşıtı Losyon 150 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "5900525078995",
    "name": "Hada Labo Yoğun Nemlendirici Kırışıklık Karşıtı Gündüz & Gece Kremi 50 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "5900525079138",
    "name": "Hada Labo Tokyo Premium Gündüz Kremi 50 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "5900525082398",
    "name": "Hada Labo Tokyo Glow Nemlendirici Gece ve Gündüz Kremi 50 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "5900525082404",
    "name": "Hada Labo Tokyo Aydınlatıcı & Canlandırıcı Hidrojel Gece ve Gündüz Kremi 50 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "5900525084446",
    "name": "Hada Labo Anti-Aging Yüz Bakım Seti",
    "source": "local_gratis"
  },
  {
    "barcode": "5900525095121",
    "name": "Yoskine Japon Pure Pirinç Serumu 30 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "5900525095183",
    "name": "Yoskine Japon Pure Yoğun Kıvamlı Yüz Peelingi 75 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "5900525095190",
    "name": "Yoskine Japon Pure Pirinç Misel Suyu 400 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "5900525095206",
    "name": "Yoskine Japan Pure Aydınlatıcı Tonik 400 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "5900525095213",
    "name": "Yoskine Japon Pure Yağ Bazlı Makyaj Temizleyici 400 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "5900525097996",
    "name": "Yoskine Zen Lift Hafif Dokulu Yaşlanma Karşıtı Yüz Kremi 50 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "5900525098009",
    "name": "Yoksine Zen Lift Zengin İçerikli Sıkılaştırıcı Yüz Kremi 50 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "5900525098016",
    "name": "Yoskine Zen Lift Yaşlanma Karşıtı Yüz Serumu 30 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "5900525098023",
    "name": "Yoskine Zen Lift Blur Esans 200 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "5900525098030",
    "name": "Yoskine Zen Lift Göz ve Ağız Çevresi Pürüzsüzleştirici Krem 30 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "5900525099112",
    "name": "Planet Essence Perfect Skin Yüz Serumu 30 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "5900525099129",
    "name": "Planet Essence Perfect Skin Göz Serumu 15 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "5900525099136",
    "name": "Planet Essence Perfect Skin Nemlendirici Yüz Kremi 50 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "5900525099150",
    "name": "Planet Essence Gold Peeling 75 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "5900525099167",
    "name": "Planet Essence Gold Tonik 200 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "5900525099440",
    "name": "Planet Essence Gold Nemlendirici Makyaj Temizleme Suyu 400 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "5901887001738",
    "name": "Ziaja Keçi Sütü Gündüz Kremi 50 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "5901887010739",
    "name": "Ziaja Karpuz Aromalı Vücut Kremi 160 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "5901887010746",
    "name": "Ziaja Karpuz Aromalı Vücut Scrub 160 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "5901887010760",
    "name": "Ziaja Sarı Erik Aromalı Vücut Kremi 160 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "5901887010838",
    "name": "Ziaja Sarı Erik Aromalı Vücut Scrub 160 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "5901887011026",
    "name": "Ziaja Satin Glow Işıltı Veren Vücut Köpüğü 350 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "5901887011071",
    "name": "Ziaja Satin Glow Işıltı Veren El Bakım İksiri 50 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "5901887011224",
    "name": "Ziaja Satin Glow Nemlendirici ve Işıltı Veren Tonik Sprey 200 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "5901887011231",
    "name": "Ziaja Satin Glow Nemlendirici SPF30 Gündüz Kremi 50 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "5901887011460",
    "name": "Ziaja Keçi Sütü Şampuan Keçi Sütü & Keratin İçerikli 400 ml",
    "source": "local_rossmann"
  },
  {
    "barcode": "5901887013082",
    "name": "Ziaja Keçi Sütü Ultra Hafif Temizleme Sütü 200 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "5901887013083",
    "name": "Ziaja Keçi Sütü Yüz Temizleme Sütü 200 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "5901887013358",
    "name": "Ziaja Multivitamin Nemlendirici Yüz Kremi 50 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "5901887016229",
    "name": "Ziaja Portakal Yağı Migrogranüllü Vücut Peelingi 200 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "5901887018224",
    "name": "Ziaja Keçi Sütü Vücut Losyonu 400 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "5901887021681",
    "name": "Ziaja Gül Yağı Nemlendirici Gündüz Kremi 50 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "5901887021698",
    "name": "Ziaja Gül Yağı Kırışıklık Karşıtı Gece Kremi 50 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "5901887023104",
    "name": "Ziaja Portakal Yağlı Vücut Losyonu 400 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "5901887029649",
    "name": "Ziaja Manuka Tonik Yağlı ve Karma Cilt, Manuka Ağacı Yaprağı Özlü 200 ml",
    "source": "local_rossmann"
  },
  {
    "barcode": "5901887029657",
    "name": "Ziaja Manuka Akneli Cilt Temizleme Jeli 200 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "5901887029663",
    "name": "Ziaja Manuka Gündüz Kremi Yağlı ve Karma Cilt, Manuka Ağacı Yaprağı Özlü 50 ml",
    "source": "local_rossmann"
  },
  {
    "barcode": "5901887031161",
    "name": "Ziaja Gözaltı Morluk Kremi Antishadow Mavi Kantaron 15 ml",
    "source": "local_rossmann"
  },
  {
    "barcode": "5901887032199",
    "name": "Ziaja Keçi Sütü El ve Tırnak Kremi 80 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "5901887032205",
    "name": "Ziaja Keçi Sütü Süt+Tonik 200 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "5901887032274",
    "name": "Ziaja Keçi Sütü Nemlendirici Gündüz Kremi 50 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "5901887032281",
    "name": "Ziaja Keçi Sütü Gece Kremi Kuru ve Kırışma Eğilimli Cilt, Keçi Sütü İçerikli 50 ml",
    "source": "local_rossmann"
  },
  {
    "barcode": "5901887032298",
    "name": "Ziaja Keçi Sütü Süt + Tonik 200 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "5901887032311",
    "name": "Ziaja Keçi Sütü Vücut Losyonu 400 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "5901887033356",
    "name": "Ziaja Zeytinyağlı Vücut Losyonu 400 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "5901887036074",
    "name": "Ziaja Salatalık Bakım Serisi Yüz Kremi 50 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "5901887038351",
    "name": "Ziaja Yağlı ve Karma Ciltler Doğal Ton BB Krem 50 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "5901887038368",
    "name": "Ziaja Normal, Kuru ve Hassas Ciltler Doğal Ton BB Krem 50 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "5901887038405",
    "name": "Ziaja Normal, Kuru ve Hassas Ciltler Açık Ton BB Krem 50 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "5901887042204",
    "name": "Ziaja Manuka Akneli Cilt Sıkılaştırıcı Tonik 200 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "5901887042205",
    "name": "Ziaja Manuka Akneli Cilt Tonik 200 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "5901887042211",
    "name": "Ziaja Manuka Akneli Cilt Yüz Temizleme Jeli 200 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "5901887042228",
    "name": "Ziaja Manuka Akneli Cilt Arındırıcı Peeling 75 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "5901887042229",
    "name": "Ziaja Manuka Akneli Cilt Peelingi 75 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "5901887042242",
    "name": "Ziaja Acai Meyvesi Özlü Misel Yüz Temizleme Scrub Jel 200 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "5901887042259",
    "name": "Ziaja Acai Meyvesi Özlü Hyaluronik Asitli Tonik 200 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "5901887045632",
    "name": "Ziaja Lemon Cake Şeker Vücut Peeling 300 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "5901887048190",
    "name": "Ziaja Tucuma Yağı Pürüzsüzleştirici El Kremi %3 Üre 80 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "5901887048206",
    "name": "Ziaja Ucuuba Yağı Nemlendirici El Kremi %5 Üre 80 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "5901887050018",
    "name": "Ziaja Nemlendirici Misel Temizleme Suyu Kuru Ciltler İçin 390 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "5901887050025",
    "name": "Ziaja Yatıştırıcı Misel Temizleme Suyu Hassas Ciltler İçin 390 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "5901887050032",
    "name": "Ziaja Kirlilik Karşıtı Misel Su Yüz Göz ve Dudaklar İçin Makyaj Temizleyici 390 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "5901887050049",
    "name": "Ziaja Yüz Temizleme Köpüğü Normal Ciltler İçin 150 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "5901887050056",
    "name": "Ziaja Yüz Temizleme Köpüğü Hassas & Kızarıklığa Meyilli Ciltler İçin 150 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "5901887051893",
    "name": "Ziaja Ananas Özlü Vücut Scrub 160 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "5901887053958",
    "name": "Ziaja Marshmallow Vücut Peeling 300 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "5901887053996",
    "name": "Ziaja Chocolate Fusion Şeker Vücut Peeling 300 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "5901887056171",
    "name": "Ziaja Vitamin C.B3 Niacinamide Gece Kremi 50 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "5901887056201",
    "name": "Ziaja C Vitamini B3 Niacinamide Yüz Toniği 190 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "5901887056218",
    "name": "Ziaja Vitamin C.B3 Niacinamide Asitli Yüz Toniği 120 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "5901887056225",
    "name": "Ziaja C Vitamini B3 Niacinamide Yüz Temizleme Jeli 190 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "5901887942429",
    "name": "Ziaja Gri Kil İçeren Temizleyici & Arındırıcı Yüz Maskesi 7 ml (Yağlı, Karma ve Akneye Eğilimli Cilt",
    "source": "local_gratis"
  },
  {
    "barcode": "5901887942436",
    "name": "Ziaja Pembe Kil İçeren Yatıştırıcı Yüz Maskesi 7 ml (Hassas Ciltler)",
    "source": "local_gratis"
  },
  {
    "barcode": "5901887942443",
    "name": "Ziaja Sarı Kil İçeren Anti-Stres Yüz Maskesi 7 ml (Tüm Ciltler)",
    "source": "local_gratis"
  },
  {
    "barcode": "5901887942450",
    "name": "Ziaja Yeşil Kil İçeren Nemlendirici Yüz Maskesi 7 ml (Kuru & Normal Ciltler)",
    "source": "local_gratis"
  },
  {
    "barcode": "5901887942467",
    "name": "Ziaja Kahverengi Kil İçeren Yenileyici Yüz Maskesi 7 ml (Tüm Cilt Tipleri)",
    "source": "local_gratis"
  },
  {
    "barcode": "5901887946212",
    "name": "Ziaja Ferahlatıcı Dengeleyici Nemlendirici Yüz Maskesi 7 ml (Kuru Ciltler)",
    "source": "local_gratis"
  },
  {
    "barcode": "5901887946243",
    "name": "Ziaja Ferahlatıcı Dengeleyici Yağsız Yüz Maskesi 7 ml (Yağlı Ciltler)",
    "source": "local_gratis"
  },
  {
    "barcode": "5901887946274",
    "name": "Ziaja Ferahlatıcı Dengeleyici Yatıştırıcı Yüz Maskesi 7 ml (Hassas Ciltler)",
    "source": "local_gratis"
  },
  {
    "barcode": "5901887946328",
    "name": "Ziaja Karahindiba Balı İçeren Yatıştırıcı Yüz Maskesi 7 ml (Normal Ciltler)",
    "source": "local_gratis"
  },
  {
    "barcode": "5901887946342",
    "name": "Ziaja Tapioka Balı İçeren Pürüzsüzleştirici Yüz Maskesi 7 ml (Kuru & Hassas Ciltler)",
    "source": "local_gratis"
  },
  {
    "barcode": "5904365746519",
    "name": "Hairmate Sacrum Saç Serumu 50 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "5904365746670",
    "name": "Hairmate Hydrate Şampuan 250 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "5904365746687",
    "name": "Hairmate Hydrate Saç Kremi 250 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "5904365746700",
    "name": "Hairmate Kissy Şampuan 250 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "5904365746717",
    "name": "Hairmate Kissy Saç Kremi 250 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "5904365746724",
    "name": "Hairmate Repair Şampuan 250 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "5904365746731",
    "name": "Hairmate Repair Saç Kremi 250 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "5905359800576",
    "name": "Much More Than Seramid ve Prebiyotik İçerikli Sıkılaştırıcı Vücut Losyonu 170 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "5905359800668",
    "name": "Much More Than Ay Taşı Özütü İçerikli Boyun ve Dekolte Kremi 130 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "5905359800682",
    "name": "Much More Than Kakao Yağı ve Kafein İçerikli Sıkılaştırıcı Vücut Yağı 170 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "5905359801405",
    "name": "Much More Than Hardal Özü ve Kafein İçerikli Sıkılaştırıcı Vücut Serumu 170 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "5908272824346",
    "name": "Planet Essence Botulux Kağıt Maske 20 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "5908272824537",
    "name": "Planet Essence Botulux 30+ Gündüz ve Gece Kremi 50 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "5908272824544",
    "name": "Planet Essence Botulux 40+ Gündüz ve Gece Kremi 50 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "5908272824551",
    "name": "Planet Essence Botulux 30/40+ Göz Kremi 15 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "5908272825299",
    "name": "Planet Essence Fenomen C Peeling Micro Granül Yüz Temizleme Jeli 200 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "5908272825305",
    "name": "Planet Essence Fenomen C 40+ Gündüz ve Gece Kremi 50 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "5908272825312",
    "name": "Planet Essence Fenomen C 30+ Gündüz ve Gece Kremi 50 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "5908272827309",
    "name": "Cashmere Pürüzsüzleştirici Makyaj Bazı 30 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "5908272827316",
    "name": "Cashmere Pürüzsüzleştirici ve Aydınlatıcı Makyaj Bazı 30 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "6001051005383",
    "name": "Nivea Besleyici Makyaj Temizleme Mendili 25 Adet (Yüz, Göz ve Kuru Ciltler İçin)",
    "source": "local_gratis"
  },
  {
    "barcode": "6001051006502",
    "name": "Nivea Luminous630 Skin Glow Parlaklık Etkili Aydınlatıcı Yüz Temizleme Köpüğü 100 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "6001159117766",
    "name": "Bio Oil Cilt Bakım Yağı 60 ml",
    "source": "local_rossmann"
  },
  {
    "barcode": "6001159117773",
    "name": "Bio-Oil Cilt Bakım Yağı 125 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "6001159121510",
    "name": "Bio-Oil Kuru Ciltler İçin Nemlendirici Jel Krem 100 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "6001159128083",
    "name": "Bio-Oil Cilt Bakım Yağı Natural 60 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "6001159128090",
    "name": "Bio-Oil Doğal Cilt Bakım Yağı 125 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "6001159130925",
    "name": "Bio-Oil Nemlendirici Vücut Losyonu 250 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "6060201601011",
    "name": "Janssen Cosmetics Leke Açıcı ve Renk Dengeleyici Ampul 3'lü",
    "source": "local_gratis"
  },
  {
    "barcode": "6060201601035",
    "name": "Janssen Cosmetics Havyar İçerikli Ampul 3'lü",
    "source": "local_gratis"
  },
  {
    "barcode": "6060201601059",
    "name": "Janssen Cosmetics Kızarıklık Karşıtı Ampul 3'lü",
    "source": "local_gratis"
  },
  {
    "barcode": "6060201601073",
    "name": "Janssen Cosmetics Çizgi Açıcı Kırışıklık Karşıtı Ampul 3'lü",
    "source": "local_gratis"
  },
  {
    "barcode": "6060201601097",
    "name": "Janssen Cosmetics Kök Hücre Anti-Age Ampul 3'lü",
    "source": "local_gratis"
  },
  {
    "barcode": "6060201601110",
    "name": "Janssen Cosmetics Yüksek Nem Sağlamaya Yardımcı Ampul 3'lü",
    "source": "local_gratis"
  },
  {
    "barcode": "6060201601134",
    "name": "Janssen Cosmetics Akne Karşıtı Yağlı Cilt Ampulü 3'lü",
    "source": "local_gratis"
  },
  {
    "barcode": "6060201601158",
    "name": "Janssen Cosmetics Detox Özellikli Ampul 3'lü",
    "source": "local_gratis"
  },
  {
    "barcode": "6060201601172",
    "name": "Janssen Cosmetics Göz Çevresi Kırışıklık Karşıtı Ampul 3'lü",
    "source": "local_gratis"
  },
  {
    "barcode": "6060201601196",
    "name": "Janssen Cosmetics Toparlamaya Yardımcı Ampul 3'lü",
    "source": "local_gratis"
  },
  {
    "barcode": "6060201601219",
    "name": "Janssen Cosmetics Yüksek Anti-Age Lux Ampul 3'lü",
    "source": "local_gratis"
  },
  {
    "barcode": "6224000851217",
    "name": "Dabur Amla Saç Bakım Yağı 180 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "6281006610811",
    "name": "Vaseline Nemlendirici Jel Original 100 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "6281006612129",
    "name": "Vaseline Nemlendirici Jel Baby 100 ml",
    "source": "local_rossmann"
  },
  {
    "barcode": "6281006612130",
    "name": "Vaseline Nemlendirici Jel Baby 100 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "6281031271254",
    "name": "Palette Deluxe Saç Boyası 4-65 Büyüleyici Kahve",
    "source": "local_gratis"
  },
  {
    "barcode": "6281031271315",
    "name": "Palette Deluxe Saç Boyası 1-0 Siyah",
    "source": "local_gratis"
  },
  {
    "barcode": "6281031271407",
    "name": "Palette Deluxe Yoğun Renkler Saç Boyası 7-887 Ateş Kızılı",
    "source": "local_gratis"
  },
  {
    "barcode": "6281031271469",
    "name": "Palette Deluxe Saç Boyası 6-888 Yakut Kızılı",
    "source": "local_gratis"
  },
  {
    "barcode": "6281031271551",
    "name": "Palette Deluxe Yoğun Renkler Saç Boyası 7-3 Küllü Yoğun Kumral",
    "source": "local_gratis"
  },
  {
    "barcode": "6281031271674",
    "name": "Palette Deluxe Saç Boyası 3-0 Koyu Kahve",
    "source": "local_gratis"
  },
  {
    "barcode": "6281031271858",
    "name": "Palette Deluxe Saç Boyası 5-889 Şarap Kızılı",
    "source": "local_gratis"
  },
  {
    "barcode": "6281031271940",
    "name": "Palette Deluxe Saç Boyası 7-0 Kumral",
    "source": "local_gratis"
  },
  {
    "barcode": "6281031272060",
    "name": "Palette Deluxe Saç Boyası 6-70 Kahve Bakır",
    "source": "local_gratis"
  },
  {
    "barcode": "6281031272091",
    "name": "Palette Deluxe Saç Boyası 8-0 Bal Köpüğü",
    "source": "local_gratis"
  },
  {
    "barcode": "6281031286463",
    "name": "Taft Power Kafein Saç Spreyi 250 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "6281031300824",
    "name": "Gliss Summer Repair Saç Bakım Kremi 360 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "6281031300923",
    "name": "Gliss Full Hair Wonder Şampuan 400 ml + Sıvı Saç Bakım Kremi 200 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "6281031300985",
    "name": "Gliss Ultimate Repair Şampuan 400 ml + Sıvı Saç Bakım Kremi 200 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "6281031301029",
    "name": "Gliss Sıvı Saç Kremi 200 ml + Serum 100 ml Full Hair Wonder, 1 Adet",
    "source": "local_rossmann"
  },
  {
    "barcode": "6281031301067",
    "name": "Gliss Ultimate Repair Sıvı Saç Bakım Kremi 200 ml + Oil Nutritive Sıvı Saç Bakım Kremi 200 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "6281031301104",
    "name": "Gliss Full Hair Wonder Sıvı Saç Bakım Kremi 200 ml + Liquid Silk Sıvı Saç Bakım Kremi 200 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "6291107220178",
    "name": "Himalaya Siyah Nokta Karşıtı Ceviz Özlü Scrub 75 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "6291107221106",
    "name": "Himalaya Nemlendirici Aloe Vera Özlü Yüz ve Vücut Jeli 300 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "6291107222493",
    "name": "Himalaya Aydınlatıcı Yüz Temizleyici Peeling 75 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "6291107225081",
    "name": "Himalaya Gül Özlü Işıltı Veren Micellar Yüz Temizleme Köpüğü 150 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "6291107225098",
    "name": "Himalaya Gül Özlü Işıltı Veren Micellar Yüz Temizleme Jeli 150 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "6291107225654",
    "name": "Himalaya Böğürtlen Dudak Bakım Kremi 4.5 gr",
    "source": "local_gratis"
  },
  {
    "barcode": "6291107225661",
    "name": "Himalaya Kiraz Dudak Bakım Kremi 4.5 gr",
    "source": "local_gratis"
  },
  {
    "barcode": "6291107225678",
    "name": "Himalaya Nemlendirici Aloe Vera Özlü Yüz ve Vücut Jeli 500 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "6291107225951",
    "name": "Himalaya Leke Karşıtı Zerdeçal Özlü Peeling 75 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "6291107225999",
    "name": "Himalaya Leke Karşıtı Zerdeçal Özlü Serum 30 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "6291107226255",
    "name": "Himalaya Derin Temizleme Etkili Kahve Özlü Peeling 75 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "6291107226682",
    "name": "Himalaya Parlaklık Veren Vitamin C Portakal Özlü Yüz Temizleyici 100 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "6291107226699",
    "name": "Himalaya Parlaklık Veren Aydınlatıcı Vitamin C Portakal Özlü Serum 30 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "6291107226705",
    "name": "Himalaya Parlaklık Veren Aydınlatıcı Vitamin C Portakal Özlü Serum Krem 50 gr",
    "source": "local_gratis"
  },
  {
    "barcode": "6291107226996",
    "name": "Himalaya Parlaklık Veren Aydınlatıcı C Vitaminli Yüz ve Vücut Jeli 300 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "6291107227665",
    "name": "Himalaya Aloe Vera Köpük Yüz Temizleme Köpüğü 150 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "6291107227818",
    "name": "Himalaya Sivilce Karşıtı Neem Özlü Arındırıcı Yüz Yıkama Jeli 150 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "6291107227819",
    "name": "Himalaya Neem Öz Arındırıcı Yüz Yıkama Jeli 150 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "6291107227825",
    "name": "Himalaya Nemlendirici El Kremi 75 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "6291107227955",
    "name": "Himalaya Sivilce Karşıtı Arındırıcı Neem Ekstreli Yüz Serumu 30 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "6291107228075",
    "name": "Himalaya Leke Karşıtı Zerdeçal Özlü Serum İçerikli Yüz Temizleyici 180 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "6291107228099",
    "name": "Himalaya Leke Karşıtı Zerdeçal Özlü SPF30 Serum Yüz Kremi 50 gr",
    "source": "local_gratis"
  },
  {
    "barcode": "6297000713168",
    "name": "Himalaya Besleyici El Kremi 75 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "6950858220585",
    "name": "WATSONS AKNE BANDI KARMA 24AD",
    "source": "local_watsons"
  },
  {
    "barcode": "6950858220592",
    "name": "Watsons Akne Bandı Standart 24 Adet",
    "source": "local_watsons"
  },
  {
    "barcode": "6953395534073",
    "name": "Getwell Göğüs Şekillendirici Bant 1 Adet",
    "source": "local_rossmann"
  },
  {
    "barcode": "6971823041034",
    "name": "Arganmidas Moroccan Argan Yağı Nemlendirici Şampuan 450ml",
    "source": "local_rossmann"
  },
  {
    "barcode": "6971823041102",
    "name": "Arganmidas Moroccan Argan Yağı 100ml",
    "source": "local_rossmann"
  },
  {
    "barcode": "6971823042222",
    "name": "Arganmidas Anti-Hair Loss Şampuan 300ml",
    "source": "local_rossmann"
  },
  {
    "barcode": "6971823042291",
    "name": "Arganmidas Besleyici Bukle Açıcı Saç Spreyi 250ml",
    "source": "local_rossmann"
  },
  {
    "barcode": "6971823042529",
    "name": "Arganmidas Canlandırıcı Şampuan Biberiye & Nane 450ml",
    "source": "local_rossmann"
  },
  {
    "barcode": "6971823043113",
    "name": "Arganmidas Keratin Saç Maskesi 300ml",
    "source": "local_rossmann"
  },
  {
    "barcode": "6971823043137",
    "name": "Arganmidas Canlandırıcı Saç Kremi Biberiye & Nane 450ml",
    "source": "local_rossmann"
  },
  {
    "barcode": "6971823043755",
    "name": "Arganmidas Besleyici Bukle Esansı 200ml",
    "source": "local_rossmann"
  },
  {
    "barcode": "6971823045469",
    "name": "Arganmidas Canlandırıcı Saç Derisi Peelingi Biberiye & Nane 300g",
    "source": "local_rossmann"
  },
  {
    "barcode": "6971823045520",
    "name": "Arganmidas Kıvırcık Saçlar İçin Besleyici Saç Kremi 450ml",
    "source": "local_rossmann"
  },
  {
    "barcode": "6971823045667",
    "name": "Arganmidas Canlandırıcı Saç Bakım Yağı Biberiye & Nane 100ml",
    "source": "local_rossmann"
  },
  {
    "barcode": "6971823046886",
    "name": "Arganmidas Moroccan Argan Yağı Nemlendirici Saç Kremi 450ml",
    "source": "local_rossmann"
  },
  {
    "barcode": "6971823048224",
    "name": "Arganmidas Canlandırıcı Saç Maskesi Biberiye Nane 300 ml",
    "source": "local_rossmann"
  },
  {
    "barcode": "6971823048774",
    "name": "Arganmidas Kıvırcık Saçlar İçin Besleyici Şampuan 450ml",
    "source": "local_rossmann"
  },
  {
    "barcode": "6971823049146",
    "name": "Arganmidas Keratin Şampuan 450ml",
    "source": "local_rossmann"
  },
  {
    "barcode": "6971823049498",
    "name": "Arganmidas Besleyici Saç Yağı Bukleli Saçlar 100ml",
    "source": "local_rossmann"
  },
  {
    "barcode": "6976436775567",
    "name": "Judydoll Göz ve Dudak Makyaj Temizleyici 200 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "7332531119290",
    "name": "Taft Saç Köpüğü Ultra Güçlü 150 ml",
    "source": "local_rossmann"
  },
  {
    "barcode": "7332531120265",
    "name": "Taft Ultra Saç Köpüğü 150 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "7350087734507",
    "name": "Decubal Klinik Krem Nemlendirici Kuru & Hassas Ciltler İçin 250 gr",
    "source": "local_rossmann"
  },
  {
    "barcode": "7350087734545",
    "name": "Decubal Basic Dudak ve Kuru Bölge Balmı 30 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "7350087738338",
    "name": "Decubal Face Vital Kuru ve Hassas Ciltler İçin Ekstra Besleyici Yüz Kremi 50 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "7350087738352",
    "name": "Decubal Face Wash Hassas ve Kuru Ciltler İçin Yüz Temizleme Köpüğü 150 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "7350092133814",
    "name": "Foreo Ufo Make My Day 7'li Maske",
    "source": "local_gratis"
  },
  {
    "barcode": "7350092133821",
    "name": "Foreo Ufo Call It a Night 7'li Maske",
    "source": "local_gratis"
  },
  {
    "barcode": "7350104242688",
    "name": "Bionnex Rensaderm Canlandırıcı Tonik 200 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "7350104242695",
    "name": "Bionnex Pigmentia Cilt Tonu Eşitleyici Krem 50 ml (Hassas Bölgeler)",
    "source": "local_gratis"
  },
  {
    "barcode": "7350104242701",
    "name": "Bionnex Pigmentia Yüz ve Boyun Bölgesi İçin Cilt Tonu Eşitleyici Krem 30+SPF 30 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "7350104242718",
    "name": "Bionnex Pigmentia Cilt Tonu Eşitleyici ve Onarıcı Gece Serumu 30 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "7350104242725",
    "name": "Bionnex Pigmentia Göz Çevresi Bakım Kremi 15 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "7350104242978",
    "name": "Bionnex Nordea Niacinamide %10 + Hyaluronic Acid %2 Serum 30 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "7350104244484",
    "name": "Celenes Nordicoil Tüm Cilt Yüz Temizleme Yağı 250 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "7350104244514",
    "name": "Celenes Nordicoil Ultra Nemlendirici Serum 30 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "7350104244828",
    "name": "Celenes Nordic Goji Berry Stick Lip Balm Lip & Cheek, 4.8 gr",
    "source": "local_rossmann"
  },
  {
    "barcode": "7350104244835",
    "name": "Celenes Nordic Blueberry Stick Lip Balm Lip & Cheek 4,8 gr",
    "source": "local_gratis"
  },
  {
    "barcode": "7350104244842",
    "name": "Celenes Thermal Hydro Care Stick Lip Balm 4,8 gr",
    "source": "local_gratis"
  },
  {
    "barcode": "7350104244873",
    "name": "Celenes Derma Yuz Yıkama Jeli Sivilce Karşıtı, 250 ml",
    "source": "local_rossmann"
  },
  {
    "barcode": "7350104244880",
    "name": "Celenes Derma Nemlendirici Yüz Yıkama Jeli 250 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "7350104244897",
    "name": "Celenes Derma Yuz Yıkama Jeli Leke Karşıtı 250 ml",
    "source": "local_rossmann"
  },
  {
    "barcode": "7350104244989",
    "name": "Celenes Thermal Misel Temizleme Suyu Kuru & Hassas Ciltler 400 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "7350104244996",
    "name": "Celenes Thermal Micellar Makyaj Temizleme Suyu Yağlı/Karma Ciltler, 400 ml",
    "source": "local_rossmann"
  },
  {
    "barcode": "7350104245009",
    "name": "Celenes Sea Buckthorn Misel Temizleme Suyu 400 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "7350104245016",
    "name": "Celenes Cloudberry Misel Temizleme Suyu 400 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "7350104245641",
    "name": "Celenes Somon DNA Yüz Toniği 200 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "7350104245658",
    "name": "Celenes Somon DNA Yüz Yıkama Jeli 250 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "7350104245665",
    "name": "Celenes Somon DNA Active Yüz Serumu 30 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "7350104245672",
    "name": "Celenes Somon DNA Pdrn Jel Kapsül Krem 50 ml",
    "source": "local_rossmann"
  },
  {
    "barcode": "7350104245689",
    "name": "Celenes Somon DNA Cica Yüz Kremi 50 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "7350104248024",
    "name": "Celenes Aqua Thermal Spray 150 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "7350104248055",
    "name": "Celenes Cloudberry Yatıştırıcı Yüz Bakım Kremi 50 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "7350104248079",
    "name": "Celenes Sea Buckthorn Aydınlatıcı ve Dengeleyici Yüz Bakım Kremi 50 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "7350104248093",
    "name": "Celenes Thermal Nemlendirici ve Canlandırıcı Yüz Temizleme Jeli Yağlı ve Karma Ciltler 250 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "7350104248116",
    "name": "Celenes Thermal Nemlendirici ve Canlandırıcı Yüz Temizleme Jeli Kuru ve Hassas Ciltler 250 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "7350104248130",
    "name": "Celenes Sea Buckthorn Yaşlanma Karşıtı El Bakım Kremi 75 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "7350104248147",
    "name": "Celenes Cloudberry Yoğun Nemlendirici El Bakım Kremi 75 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "7350104248161",
    "name": "Celenes Thermal 3'ü 1 Arada Yıkama Peeling Maske 150 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "7350104248277",
    "name": "Celenes Vücut Güneş Kremi Sprey SPF50+ PA++++ 150 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "7350104248284",
    "name": "Celenes Çocuk Vücut Güneş Koruyucu Losyon SPF50+ PA++++ 150 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "7350104248536",
    "name": "Celenes Cloudberry Yoğun Nemlendirici ve Yatıştırıcı Yüz Yıkama Jeli 250 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "7350104248543",
    "name": "Celenes Sea Buckthorn Yüz Yıkama Jeli 250 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "7350104249137",
    "name": "Celenes Dry Touch Mat Yüz Güneş Koruyucu Losyon SPF50+ PA++++ 50 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "7350104249311",
    "name": "Bionnex Nordea Hyaluronic Acid %2 + Arctic Algae + B5 Serum 30 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "7350104249359",
    "name": "Bionnex Nordea Vitamin C %15 + Ferulic Acid %0,5 + Arbutin + Burdock Serum 30 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "7350104249366",
    "name": "Bionnex Nordea Retinol %1 Serum 30 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "7350104249373",
    "name": "Bionnex Nordea Caffeine %5 + Angelica Serum 30 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "7350104249380",
    "name": "Celenes Thermal Nemlendirici ve Canlandırıcı Thermal Günlük Yüz Bakım Kremi 50 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "7350104249564",
    "name": "Celenes Thermal Arındırıcı ve Canlandırıcı Tonik 200 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "7350104249571",
    "name": "Celenes Rahatlatıcı ve Canlandırıcı Thermal Lip Balm 10 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "7350104249588",
    "name": "Celenes Sea Buckthorn Leke Giderici ve Aydınlatıcı Tonik 200 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "7350104249595",
    "name": "Celenes Cloudberry Yoğun Nemlendirici ve Yatıştırıcı Tonik 200 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "7350104249601",
    "name": "Celenes Cloudberry Yoğun Nemlendirici ve Yatıştırıcı Lip Balm 10 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "7350104249618",
    "name": "Celenes Herbal Defence Güneş Koruyuculu 15SPF Lip Balm 10 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "7350104250003",
    "name": "Celenes Herbal Renkli Yüz Güneş Kremi SPF50+ PA++++ 50 ml Light",
    "source": "local_watsons"
  },
  {
    "barcode": "7350120790866",
    "name": "Foreo Luna Ultra Nourishing Temizleyici Balsam 75 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "7350120791214",
    "name": "Foreo Luna Micro Foam Temizleyici 100 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "7350120791221",
    "name": "Foreo Luna Micro Foam Temizleyici 20 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "7350120791580",
    "name": "Foreo Ufo 3 Go Evergreen Akıllı Maske Cihazı",
    "source": "local_gratis"
  },
  {
    "barcode": "7350120791597",
    "name": "Foreo Ufo 3 Go Lavender Akıllı Maske Cihazı",
    "source": "local_gratis"
  },
  {
    "barcode": "7350120791603",
    "name": "Foreo Ufo 3 Go Pistachio Akıllı Maske Cihazı",
    "source": "local_gratis"
  },
  {
    "barcode": "7350120792747",
    "name": "Foreo Luna 4 Play Tickle Me Pink! Yüz Temizleme Cihazı",
    "source": "local_gratis"
  },
  {
    "barcode": "7350120792754",
    "name": "Foreo Luna 4 Play Mint For You! Yüz Temizleme Cihazı",
    "source": "local_gratis"
  },
  {
    "barcode": "7350120792761",
    "name": "Foreo Luna 4 Play Cherry Up! Yüz Temizleme Cihazı",
    "source": "local_gratis"
  },
  {
    "barcode": "7702018016808",
    "name": "Gillette Venus Riviera 3 Bıçaklı Kullan At Kadın Tıraş Bıçağı 2'li",
    "source": "local_gratis"
  },
  {
    "barcode": "7702018334919",
    "name": "Gillette Venus ComfortGlide Breeze Tıraş Makinesi + 1 Yedek Tıraş Bıçağı",
    "source": "local_gratis"
  },
  {
    "barcode": "7702018400997",
    "name": "Gillette Venus Swirl Flexiball Kadın Tıraş Makinesi",
    "source": "local_gratis"
  },
  {
    "barcode": "7702018450886",
    "name": "Gillette Venus Renkli 3 Bıçaklı Kullan At Kadın Tıraş Bıçağı 4 + 2 Adet",
    "source": "local_gratis"
  },
  {
    "barcode": "7702018465675",
    "name": "Gillette Simply Venus 3 Kullan At Kadın Tıraş Bıçağı 4'lü Paket",
    "source": "local_gratis"
  },
  {
    "barcode": "7702018491544",
    "name": "Gillette Venus Sensitive Kadın Tıraş Makinesi 3'lü",
    "source": "local_gratis"
  },
  {
    "barcode": "7702018591381",
    "name": "Gillette Venus ComfortGlide Snap Breeze Tıraş Makinesi (Seyahat Boyu)",
    "source": "local_gratis"
  },
  {
    "barcode": "7702018615001",
    "name": "Gillette Simply Venus 3 Dragonfruit Kullan At Tıraş Bıçağı 3'lü",
    "source": "local_gratis"
  },
  {
    "barcode": "7702018886364",
    "name": "Gillette Venus ComfortGlide Breeze Yedek Kadın Tıraş Bıçağı 4'lü Paket",
    "source": "local_gratis"
  },
  {
    "barcode": "7702018886432",
    "name": "Gillette Venus Comfortglide Olay Yedek Tıraş Bıçağı 2’li",
    "source": "local_gratis"
  },
  {
    "barcode": "7750075023932",
    "name": "Kativa Güçlendirici Bitkisel Keratin Yağı 60 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "7750075049314",
    "name": "Kativa Brazilian Saç Düzleştirme Seti 225 ml",
    "source": "local_rossmann"
  },
  {
    "barcode": "7750075058002",
    "name": "Kativa Keratinli Vegan Saç Bakım Kremi 355 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "7750075058361",
    "name": "Kativa Keratinli Vegan Şampuan 355 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "7750075058811",
    "name": "Kativa Güçlendirici Keratinli Saç Bakım Maskesi 300 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "7750075060692",
    "name": "Kativa Hyalüronik Nemlendirici Kırılma Önleyici Saç Kremi 355 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "7750075060715",
    "name": "Kativa Hyalüronik Nemlendirici Kırılma Önleyici Saç Bakım Maskesi 300 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "7750075060746",
    "name": "Kativa Hyalüronik Nemlendirici Kırılma Önleyici Şampuan 355 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "7750075063044",
    "name": "Kativa Total Plex Yeniden Yapılandırma Bakım Kiti 130 ml",
    "source": "local_rossmann"
  },
  {
    "barcode": "7750075066779",
    "name": "Kativa Curly Plex Bukle Belirginleştirici & Bağ Onarıcı Şampuan 355 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "7750075066786",
    "name": "Kativa Curly Plex Bukle Belirginleştirici Saç Kremi & Maske 450 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "7750075066793",
    "name": "Kativa Curly Plex Bukle Yenileyici Sprey 225 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "7750075066809",
    "name": "Kativa Curly Plex Bukle Belirginleştirici Şekillendirici Krem 240 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "7750075066816",
    "name": "Kativa Curly Plex Güçlü Bukle Belirginleştirici Şekillendirici Jel Krem 240 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "7750075067202",
    "name": "Kativa Curly Plex Bukle Onarıcı & Parlatıcı Kıvırcık Saç Bakım Yağı 110 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8001841555881",
    "name": "Aussie Sos Heat Defence Saç Spreyi 100 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "8004395096817",
    "name": "Schultz Canlandırıcı Şampuan 250 ml",
    "source": "local_rossmann"
  },
  {
    "barcode": "8004395096824",
    "name": "Schultz Onarıcı & Yenileyici Şampuan 250 ml",
    "source": "local_rossmann"
  },
  {
    "barcode": "8004395096831",
    "name": "Schultz Saç Kremi 200 ml",
    "source": "local_rossmann"
  },
  {
    "barcode": "8004395096886",
    "name": "Schultz Saç Açıcı Sprey Losyon 150 ml",
    "source": "local_rossmann"
  },
  {
    "barcode": "8006530003872",
    "name": "Head&Shoulders Klasik Bakım 2'si 1 Arada Kepeğe Karşı Etkili Şampuan 250 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "8006530003926",
    "name": "Head&Shoulders Mentol Ferahlığı Kepek Karşıtı Şampuan 250 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "8006530020015",
    "name": "Gillette Venus Extra Smooth Swirl Kadın Tıraş Bıçakları + 3 Yedek Kartuş",
    "source": "local_gratis"
  },
  {
    "barcode": "8006530050975",
    "name": "Pantene Pro-V Sunkiss Glow Güneş Koruyucu Saç Spreyi 200 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8006530059077",
    "name": "Pantene Grow Abundant Saç Dökülmesine Karşı Saç Maskesi 300 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8006530059268",
    "name": "Pantene Grow Abundant Saç Dökülmesine Karşı Saç Kremi 250 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8006530060158",
    "name": "Pantene Grow Abundant Saç Dökülmesine Karşı Şampuan 290 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8006530060721",
    "name": "Pantene Grow Abundant Saç Dökülmesine Karşı Saç Derisi Serumu 60 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8006530075572",
    "name": "Herbal Essences Derin Onarım Argan Saç Bakım Yağı 95 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8006530085724",
    "name": "Aussie Sos Super Serum Durulanmayan Serum 160 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "8006530085793",
    "name": "Aussie Sos Supercharged Hydration Saç Maskesi 500 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "8006530085915",
    "name": "Aussie Sos Repair Revive Şampuan 500 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "8006530085953",
    "name": "Aussie Sos Blonde Hydrate Saç Kremi 350 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "8006530085960",
    "name": "Aussie Sos Kuru Yıpranmış Saçlar için Saç Maskesi 500 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "8006530086011",
    "name": "Aussie Sos Repair Revive Saç Kremi 350 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "8006530086073",
    "name": "Aussie Work That Curl Durulanmayan Saç Kremi 160 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "8006530086080",
    "name": "Aussie Sos Blonde Hydrate Mor Şampuan 500 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "8006530123051",
    "name": "Herbal Essences Şampuan Lime Arındırıcı ve Parlak, 350 ml",
    "source": "local_rossmann"
  },
  {
    "barcode": "8006530123402",
    "name": "Herbal Essences Saç Kremi Lime Arındırıcı ve Parlak, 250 ml",
    "source": "local_rossmann"
  },
  {
    "barcode": "8006530171212",
    "name": "Head & Shoulders Biberiye Özlü Gür ve Güçlü Saçlar Kepeğe Karşı Etkili Şampuan 330 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8006530206945",
    "name": "Head & Shoulders Clinical Strength Dry Scalp Rescue Kuru Saç Derisine Özel Şampuan 400 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8006530273046",
    "name": "Pantene Amor Pro-V Keratin Koruması Saç Maskesi 300 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8006530274814",
    "name": "Pantene Şampuan Love Onarıcı Koruyucu 250 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "8006530274920",
    "name": "Pantene Saç Yağı Love Keratin Koruması 100 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "8006530275071",
    "name": "Pantene Maske Love Onarıcı Koruyucu 300 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "8006530275477",
    "name": "Pantene Saç Kremi Love Derin Bakım 220 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "8006530365734",
    "name": "Head & Shoulders Classic Clean Kepeğe Karşı Etkili Şampuan 95 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8006530367202",
    "name": "Head & Shoulders Men Dökülme Karşıtı Kafein ile Kepeğe Karşı Etkili Erkek Şampuan 330 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8006530367240",
    "name": "Head & Shoulders Men Old Spice Kepeğe Karşı Etkili Erkek Şampuan 330 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8006530367288",
    "name": "Head & Shoulders Men Spor Ferahlığı Ferahlatıcı Mentol Kepeğe Karşı Etkili Erkek Şampuan 330 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8006530423458",
    "name": "Pantene Pro-V Glowtox Saç Bakım Kremi 275 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8006530423557",
    "name": "Pantene Pro-V Glowtox Arındırıcı Şampuan 400 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8006530423601",
    "name": "Pantene Pro-V Glowtox Parlaklık Veren Saç Maskesi 300 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8006530423632",
    "name": "Pantene Pro-V Glowtox Durulanmayan Saç Spreyi 200 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8006530423700",
    "name": "Pantene Pro-V Glowtox Yıkama Öncesi ve Sonrası Saç Bakım Yağı 100 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8006530496599",
    "name": "H&S ŞAMPUAN BUZLU MENTOL KAŞINTI GİDERİCİ 800ML",
    "source": "local_watsons"
  },
  {
    "barcode": "8006530499415",
    "name": "Head & Shoulders Buzlu Menthol Ferahlığı Kepek Karşıtı Şampuan 625 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8006530499477",
    "name": "Head & Shoulders Buzlu Menthol Ferahlığı Kepek Karşıtı Şampuan 330 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8006530508452",
    "name": "Pantene Onarıcı ve Koruyucu Şampuan 400 ml + Argan Özlü Saç Bakım Yağı 100 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8006540004876",
    "name": "Aussie Sos Hair Rescue All In One Saç Yağı 100 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "8006540818824",
    "name": "Old Spice Captain Erkek Duş Jeli ve Şampuan XXL Büyük Boy 1000 ml",
    "source": "local_rossmann"
  },
  {
    "barcode": "8006540818862",
    "name": "Old Spice Whitewater Erkek Duş Jeli ve Şampuan XXL Büyük Boy 1000 ml",
    "source": "local_rossmann"
  },
  {
    "barcode": "8006540838914",
    "name": "Old Spice Captain Erkek Duş Jeli ve Şampuan 400 ml",
    "source": "local_rossmann"
  },
  {
    "barcode": "8006540902769",
    "name": "Head & Shoulders DermaXPro Yatıştırıcı Kepek Karşıtı Şampuan Aloe Vera Özü ve Seramid İle 300 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8006540944660",
    "name": "Old Spice Duş Jeli & Şampuan Bearglove 400 ml",
    "source": "local_rossmann"
  },
  {
    "barcode": "8009518391886",
    "name": "Bio-Etyc Kırışıklık Karşıtı Serum 30 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "8009518391909",
    "name": "Bio-Etyc Aydınlatıcı Yüz Bakım Yağı 30 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "8032274012320",
    "name": "milk_shake Milk Color Şampuan 250 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8032274012344",
    "name": "milk_shake Magic Milk Durulanmayan Bakım Sütü 150 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8032274185901",
    "name": "milk_shake Sun & More All Over Şampuan 250 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8032274185918",
    "name": "milk_shake Sun & More Beauty Saç Maskesi 200 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8032274185925",
    "name": "milk_shake Sun & More Incredible Milk Saç Bakım Sütü 140 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8032274185932",
    "name": "milk_shake Sun & More B-Phase Leave in Conditioner Saç Kremi 250 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8053288572778",
    "name": "360 Hair Professional Be Fill Saç Maskesi 500 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8053288576134",
    "name": "360 Hair Professional Be Volume Şampuan 450 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8053288576158",
    "name": "360 Hair Professional Be Volume Saç Kremi 300 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8053288576820",
    "name": "360 Hair Professional Be Fill Lamellar Saç Bakım Suyu 250 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8436570020810",
    "name": "Cocunat Curl Booster Bukle Belirginleştirici Jel 250 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8436570020872",
    "name": "Cocunat Rich Shampoo Kuru Saçlar İçin Güçlendirici Şampuan 200 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8436570021077",
    "name": "Cocunat Pure Shampoo Yağlı Saçlar İçin Dengeleyici Şampuan 200 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8680145080383",
    "name": "TTO Thermal Nemlendirici Tonik 120 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "8680145084794",
    "name": "TTO Thermal Nemlendirici Yüz Temizleme Jeli 200 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "8680145085142",
    "name": "TTO Thermal Klinik Nemlendirici Losyon 200 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "8680145085159",
    "name": "TTO Soft Göz Çevresi Aplikatörlü Temizleme Köpüğü 150 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "8680512600022",
    "name": "Bioblas Botanic Oils Sarımsak Şampuanı 360 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8680512601326",
    "name": "Bioblas Professional Onarıcı Phytokeratin Şampuanı 1000 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8680512607144",
    "name": "Bioblas Botanic Oils Argan Saç Bakım Yağı 100 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8680512607687",
    "name": "Restorex Sağlıklı Uzama Etkili Sıvı Saç Bakım Kremi 200 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8680512611554",
    "name": "Bioxcin Şampuan Forte 300+300 ml",
    "source": "local_rossmann"
  },
  {
    "barcode": "8680512611967",
    "name": "Bioxcin Quantum Bio-Activ Serum 15 x 6 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8680512627371",
    "name": "Bioblas Botanic Oils Argan Yağlı Şampuan 360 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8680512627432",
    "name": "Bioblas Botanic Oils Argan Yağlı Sıvı Saç Kremi 200 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8680512628118",
    "name": "Bioxcin Biotin Şampuan 300 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8680512628119",
    "name": "Bioxcin Biotin Şampuan 300 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "8680512628132",
    "name": "Bioxcin Siyah Sarımsak Şampuan 300 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8680512628163",
    "name": "Bioblas Professional Siyah Sarımsak Şampuanı 1000 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8680512628484",
    "name": "Bioblas Şampuan Kolajen & Keratin Dolgunlaştırıcı 360 ml",
    "source": "local_rossmann"
  },
  {
    "barcode": "8680512628637",
    "name": "Bioblas Forte Şampuan 360 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8680512629177",
    "name": "Bioxcin Acnium Nemlendirici Krem 50 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8680512630272",
    "name": "Bioxcin Kaş ve Kirpik Serumu 3 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8680512630609",
    "name": "Restorex Kolajen & Biotin Dolgunlaştırıcı ve Onarıcı Saç Bakım Kremi 250 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8680512630616",
    "name": "Restorex Kolajen & Biotin Dolgunlaştırıcı Saç Bakım Şampuanı 500 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8680512630630",
    "name": "Restorex Kolajen & Biotin Dolgunlaştırıcı Sıvı Saç Bakım Kremi 200 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8680512630722",
    "name": "Bioblas Men Kepek + Saç Dökülmesine Karşı Şampuan 360 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8680512630920",
    "name": "Restorex Keratin & Argan Onarıcı Saç Bakım Şampuanı 500 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8680512630937",
    "name": "Restorex 7 Besleyici Yağ Besleyici Saç Bakım Şampuanı 500 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8680512631606",
    "name": "Bioxcin Collagen & Biotin Hacim Şampuanı 300 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8680512631613",
    "name": "Bioxcin Keratin & Argan Onarıcı Şampuan 300 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8680512631637",
    "name": "Bioxcin Keratin & Argan Onarıcı Saç Bakım Yağı 150 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8680512631644",
    "name": "Bioxcin Saç Bakım Kremi Keratin & Argan 250 ml",
    "source": "local_rossmann"
  },
  {
    "barcode": "8680512632801",
    "name": "Restorex Speed & Strong Sağlıklı Uzama Etkili Saç Bakım Kremi 250 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8680512632948",
    "name": "Bioxcin Acnium Yüz Yıkama Jeli 200 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8680512632955",
    "name": "Bioxcin Gold on Skin Simli Kuru Vücut Yağı 100 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8680512632986",
    "name": "Restorex Keratin & Argan Onarıcı Sıvı Saç Bakım Kremi 200 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8680512632993",
    "name": "Restorex Keratin & Argan Onarıcı Saç Bakım Kremi 250 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8680512633082",
    "name": "Bioxcin Hydra Micel Su 500 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8680512633433",
    "name": "Bioxcin Collagen&Biotin Saç Bakım Kremi 250 ml",
    "source": "local_rossmann"
  },
  {
    "barcode": "8680512633693",
    "name": "Restorex Saç Kremi 7 Besleyici Yağ 250 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "8680512633709",
    "name": "Restorex Sıvı Saç Kremi 7 Besleyici Yağ 200 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "8680512633778",
    "name": "Bioxcin Besleyici Yağlar Saç Bakım Şampuanı 300 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8680512633785",
    "name": "Bioxcin Besleyici Yağlar Sıvı Saç Kremi 200 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8680512633792",
    "name": "Bioxcin Besleyici Yağlar Saç Bakım Kremi 250 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8680512633808",
    "name": "Bioxcin Besleyici Yağlar Saç Bakım Yağı 150 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8680512633822",
    "name": "Bioxcin Collagen & Biotin Saç Serumu 100 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8680512633853",
    "name": "Bioxcin Keratin & Argan Onarıcı Saç Bakım Maskesi 225 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8680512634133",
    "name": "Bioblas Biotin & Kafein Tonik 200 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8680512634294",
    "name": "Bioxcin Şampuan Biotin Collagen 300+300 ml",
    "source": "local_rossmann"
  },
  {
    "barcode": "8680512634362",
    "name": "Restorex Keratin & Argan Onarıcı Saç Bakım Maskesi 300 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8680512634386",
    "name": "Bioxcin Gold on Skin Simsiz Kuru Vücut Yağı 100 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8680512634454",
    "name": "Bioxcin Hydra Nemlendirici Yüz Kremi 50 ml (Kuru ve Normal Ciltler İçin)",
    "source": "local_gratis"
  },
  {
    "barcode": "8680512634461",
    "name": "Bioxcin Hydra Nemlendirici Yüz Kremi 50 ml (Karma ve Yağlı Ciltler İçin)",
    "source": "local_gratis"
  },
  {
    "barcode": "8680512634560",
    "name": "Restorex Hyaluronic & Glycolic Acid Nemlendirici Canlandırıcı Saç Bakım Şampuanı 500 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8680512635222",
    "name": "Bioxcin Gold On Skin Işıltılı Nemlendirici Yüz Kremi 50 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8680512635383",
    "name": "Restorex Onarıcı Saç Bakım Yağı 80 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8680512635406",
    "name": "Bioxcin Keratin & Argan Onarıcı Sıvı Saç Kremi 200 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8680512635413",
    "name": "Bioxcin Collagen & Biotin Hacim Verici Sıvı Saç Kremi 200 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8680512635468",
    "name": "Bioblas Saç Bakım Yağı Keratin & Kolajen 100 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8680512635567",
    "name": "Bioblas Kolajen & Keratin Sıvı Saç Kremi 200 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8680512635568",
    "name": "Bioblas Sıvı Saç Kremi Kolajen ve Keratin 200 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "8680512635574",
    "name": "Bioblas Kolajen & Keratin Saç Kremi 250 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8680512635575",
    "name": "Bioblas Saç Kremi Kolajen&Keratin 250 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "8680512635581",
    "name": "Bioblas Kolajen + Keratin Şampuan 360 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8680512635582",
    "name": "Bioblas Collagen and Keratin Şampuan 360 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "8680512635734",
    "name": "Bioxcin Yoğun Saç Dökülmesine Karşı Forte Saç Bakım Toniği 200 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8680512635895",
    "name": "Restorex Hyaluronic & Glycolic Acid Nemlendirici Canlandırıcı Sıvı Saç Kremi 200 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8680512635901",
    "name": "Bioxcin Şampuan Kepek ve Saç Dökülmesi 500 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "8680512636168",
    "name": "Bioblas Biotin & Kafein Şampuan 400 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8680512640820",
    "name": "Bioblas Saç Dökülmesine Karşı Şekillendirici Krem 250 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8680512640821",
    "name": "Bioblas Şekillendirici Krem Kolajen ve Keratin 250 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "8680512656678",
    "name": "Bioxcin Caffein & Arginine Saç Dökülmesine Karşı Şampuan 500 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8680512660101",
    "name": "Restorex Keratin & Argan Onarıcı Saç Bakım Şampuanı 900 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8680512660118",
    "name": "Restorex 7 Besleyici Yağ Saç Bakım Şampuanı 900 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8680512660309",
    "name": "Restorex Kolajen & Biotin Dolgunlaştırıcı Saç Bakım Şampuanı 900 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8680512660330",
    "name": "Bioxcin Şampuan Besleyici 300+300 ml",
    "source": "local_rossmann"
  },
  {
    "barcode": "8680624093705",
    "name": "Swissoderm Dökülme Karşıtı Şampuan Yağlı Saçlar 300 ml",
    "source": "local_rossmann"
  },
  {
    "barcode": "8680624093712",
    "name": "Swissoderm Dökülme Karşıtı Şampuan Normal Kuru Saçlar İçin 300 ml",
    "source": "local_rossmann"
  },
  {
    "barcode": "8680624093750",
    "name": "Swissoderm Canlandırıcı Saç Kremi 300 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8680624093767",
    "name": "Swissoderm Kepek Karşıtı Şampuan 300 ml",
    "source": "local_rossmann"
  },
  {
    "barcode": "8680678189706",
    "name": "Eda Taşpınar Yoğun Bronz Yağ 200 ml",
    "source": "local_rossmann"
  },
  {
    "barcode": "8680678189713",
    "name": "Eda Taşpınar Bronzlaştırıcı Yağ Spf 15 200 ml",
    "source": "local_rossmann"
  },
  {
    "barcode": "8680678189720",
    "name": "Eda Taşpınar Bronzluk Koruyucu Losyon 200 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "8680678189737",
    "name": "Eda Taşpınar Yoğun Bronz Sprey 200 ml",
    "source": "local_rossmann"
  },
  {
    "barcode": "8680678189744",
    "name": "Eda Taşpınar Doğal At Kılı Fırçası 1 adet",
    "source": "local_rossmann"
  },
  {
    "barcode": "8680678189775",
    "name": "Eda Taşpınar Güneş Sonrası Serinletici Jel 200 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "8680678800052",
    "name": "Morfose Milk Therapy Saç Köpüğü 200 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8680678830493",
    "name": "Morfose Milk Therapy Chocolate Saç Köpüğü 200 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8680690700408",
    "name": "Urban Care Expert Biotin & Caffein Dökülme Karşıtı Hızlı Uzamaya Yardımcı Saç Bakım Toniği 200 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8680690700798",
    "name": "Urban Care Intense & Keratin Hasar Onarımı ve Parlaklık Veren Sıvı Saç Bakım Kremi 200 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8680690702174",
    "name": "Urban Care Its So High Kuru Şampuan 200 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8680690702198",
    "name": "Urban Care Go Nuts with Coconut Kuru Şampuan 200 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8680690702280",
    "name": "Urban Care Expert Serisi Biotin & Kafein Dökülme Karşıtı Peeling Şampuan 200 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8680690702297",
    "name": "Urban Care Expert Serisi Biotin & Kafein Dökülme Karşıtı Saç Bakım Şampuanı 350 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8680690702983",
    "name": "Urban Care Argan Yağı & Keratin Besleyici ve Kırılma Karşıtı Durulanmayan Saç Bakım Kremi 150 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8680690703133",
    "name": "Urban Care Tropical Paradise Jungle Kuru Şampuan 200 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8680690703615",
    "name": "Urban Care Argan Oil Saç Bakım Serumu 75 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "8680690703782",
    "name": "Urban Care Biotin & Kafein Saç ve Saç Derisi Kremi 200 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8680690703867",
    "name": "Urban Care Twisted Curls Hibiscus & Shea Butter Bukle Belirginleştirici Durulanmayan Saç Bakım Kremi 175 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8680690703874",
    "name": "Urban Care Twisted Curls Hibiscus & Shea Butter Bukle Belirginleştirici Sıvı Saç Bakım Kremi 200 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8680690705021",
    "name": "Urban Care Hyaluronic Acid & Collagen Kuru ve Cansız Saçlara Özel Duş Öncesi Saç Bakım Maskesi 50 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8680690705038",
    "name": "Urban Care Oil in Cream Hyaluronic Acid & Collagen 150 ml",
    "source": "local_rossmann"
  },
  {
    "barcode": "8680690705045",
    "name": "Urban Care Hyaluronic Acid & Collagen Kuru ve Cansız Saçlara Özel Sıvı Saç Kremi 200 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8680690705298",
    "name": "Urban Care Monoi Oil & Ylang Ylang Güneş Sonrası Koruyucu Duş Öncesi Saç Bakım Maskesi 50 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8680690705311",
    "name": "Urban Care Summer Glow Aşamalı Renk Açıcı Sprey 150 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8680690705472",
    "name": "Urban Care Argan Oil & Keratin Duş Öncesi Saç Bakım Maskesi 50 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8680690705489",
    "name": "Urban Care Intense Keratin Hasar Onarımı ve Parlaklık Veren Duş Öncesi Saç Bakım Maskesi 50 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8680690705816",
    "name": "Urban Care Style Guide Deniz Tuzu Saç Köpüğü 200 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8680690705854",
    "name": "Urban Care Style Guide Iconic Curl Saç Köpüğü 200 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8680690705885",
    "name": "Urban Care Style Guide Elastic Curl Saç Köpüğü 200 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8680690705915",
    "name": "Urban Care Style Guide Wax Matte 100 ml",
    "source": "local_rossmann"
  },
  {
    "barcode": "8680690705946",
    "name": "Urban Care Style Guide Aqua Wax (Islak & Sert) 100 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8680690705977",
    "name": "Urban Care Style Guide Deniz Tuzu Saç Spreyi 200 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8680690706585",
    "name": "Urban Care Twisted Curls Hibiscus ve Shea Yağı Bukle Belirginleştirici Duş Öncesi Saç Bakım Maskesi 50 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8680690706714",
    "name": "Urban Care Style Guide Elastic Curl Saç Jölesi 150 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8680690706715",
    "name": "Urban Care Jöle Style Guide Elastic Curl 150 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "8680690706851",
    "name": "Urban Care Argan Oil Besleyici ve Kırılma Karşıtı Sıvı Saç Kremi 200 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8680690706852",
    "name": "Urban Care Argan Oil Sıvı Saç Kremi 200 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "8680690707155",
    "name": "Urban Care Hibiscus & Shea Butter Yoğun Saç Bakım Maskesi 230 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8680690707230",
    "name": "Urban Care Sabitleyici Maksimum Tutuş Saç Spreyi 250 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8680690707231",
    "name": "Urban Care Style Guide Max Hold Saç Spreyi 250 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "8680690707346",
    "name": "Urban Care Coconut Coffee Vücut Kremi 200 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8680690707445",
    "name": "Urban Care Turmeric Honey Vücut Losyonu 250 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8680690707759",
    "name": "Urban Care Monoi & Ylang Ylang Kuru Şampuan 200 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8680690707773",
    "name": "Urban Care Twisted Curls Hibiscus & Shea Butter Bukleli Saçlar İçin Onarıcı Saç Bakım Köpüğü 150 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8680690707810",
    "name": "Urban Care Argan Oil & Keratin Yoğun Saç Bakım Maskesi 230 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8680690707811",
    "name": "Urban Care Argan Oil ve Keratin Günlük Yoğun Saç Bakım Kremi",
    "source": "local_watsons"
  },
  {
    "barcode": "8680690707834",
    "name": "Urban Care Intense Keratin Yoğun Saç Bakım Maskesi 230 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8680690707896",
    "name": "Urban Care No:1 Bond Plex Maske 50 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8680690707919",
    "name": "Urban Care No:2 Bond Plex Şampuan 350 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8680690707933",
    "name": "Urban Care No:3 Bond Plex Saç Kremi 250 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8680690707957",
    "name": "Urban Care No:4 Bond Plex Onarıcı Maske 230 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8680690707971",
    "name": "Urban Care No:5 Bond Plex Saç Bakım Sütü 200 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8680690707995",
    "name": "Urban Care No:6 Bond Plex Saç Bakım Yağı 100 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8680690709975",
    "name": "Urban Care No.3 Expert Apple Cider Kepek Karşıtı Şampuan 350 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8680690710315",
    "name": "Urban Care Argan Yağı & Keratin Kolay Kırılan Saçlara Özel Sıvı Saç Bakım Kremi 100 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "8680690710742",
    "name": "Urban Care Biberiye Şampuan Rosemary Clove 350 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "8680690710759",
    "name": "Urban Care Biberiye Saç Bakım Sütü Rosemary Clove 200 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "8680690710766",
    "name": "Urban Care Biberiye Saç Bakım Suyu Rosemary Clove 150 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "8680690710773",
    "name": "Urban Care Biberiye Saç Bakım Yağı Rosemary Clove 100 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "8680690710827",
    "name": "Urban Care Kind Rituals Şampuan Kinoa&Almond 400 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "8680690710834",
    "name": "Urban Care Kind Rituals Saç Kremi Kinoa&Almond 250 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "8680690710841",
    "name": "Urban Care Kind Rituals Saç Toniği Kinoa&Almond 200 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "8680690710858",
    "name": "Urban Care Kind Rituals Saç Maskesi Kinoa&Almond 230 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "8680690710902",
    "name": "Urban Care Kind Rituals Şampuan Rose Water 400 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "8680690710919",
    "name": "Urban Care Kind Rituals Saç Kremi Rose Water 250 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "8680690710926",
    "name": "Urban Care Kind Rituals Saç Serumu Rose Water100 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "8680690710933",
    "name": "Urban Care Kind Rituals Saç Maskesi Rose Water230 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "8680690711008",
    "name": "Urban Care Saç Parfümü Pink Allure 50 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "8680690711145",
    "name": "Urban Care Style Guide Stick Wax 35 gr",
    "source": "local_gratis"
  },
  {
    "barcode": "8680690711305",
    "name": "Urban Care Sıvı Saç Kremi Argan Oil&Keratin 150 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "8680690711312",
    "name": "Urban Care Sıvı Saç Kremi Hibiscus&Shea 150 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "8680690711329",
    "name": "Urban Care Sıvı Saç Kremi Hyaluronic & Collagen 150 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "8680690711831",
    "name": "Urban Care Brazilian Keratin Düzleştirici Etkili Duş Öncesi Saç Bakım Maskesi 50 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8680690711886",
    "name": "Urban Care Şampuan Argan Yağı & Keratin 250 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "8680690711909",
    "name": "Urban Care Şampuan Hyaluronic Acid & Collagen 250 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "8680690711916",
    "name": "Urban Care Şampuan Intense & Keratin 250 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "8680690712036",
    "name": "Urban Care Mor Şampuan 250 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8680690712241",
    "name": "Urban Care Intense Keratin Onarıcı ve Yapılandırıcı Saç Bakım Kremi 250 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8680690712258",
    "name": "Urban Care Hyaluronic & Collagen Nemlendirici ve Dolgunlaştırıcı Saç Bakım Kremi 250 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8680690712265",
    "name": "Urban Care Argan Oil & Keratin Kırılma Karşıtı ve Besleyici Saç Bakım Kremi 250 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8680690712272",
    "name": "Urban Care Hibiscus & Shea Butter Bukle Belirginleştici Saç Bakım Kremi 250 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8680690712555",
    "name": "Urban Care Hibiscus & Shea Butter Kıvırcık ve Dalgalı Saçlara Özel Bukle Belirginleştirici Saç Bakım Şampuanı 350 ml ve Sıvı Saç Bakım Kremi 150 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "8680690712623",
    "name": "Urban Care Turunculaşma Karşıtı Duş Öncesi Mor Saç Bakım Maskesi 50 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8680690712678",
    "name": "Urban Care Hibiscus & Shea Butter Şampuan 700 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "8680690712715",
    "name": "Urban Care Expert Series Biotin & Kafein Dökülme Karşıtı Şampuan 700 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8680690712739",
    "name": "Urban Care No.1 Glycolic Retinol Parlaklık Etkili Pre-Wash Saç Bakım Maskesi 50 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8680690712746",
    "name": "Urban Care No.2 Glycolic Retinol Parlaklık Etkili Onarıcı Saç Bakım Şampuanı 350 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8680690712753",
    "name": "Urban Care No.3 Glycolic Retinol Parlaklık Etkili Onarıcı Saç Kremi 250 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8680690712760",
    "name": "Urban Care No.4 Glycolic Retinol Parlaklık Etkili Onarıcı Saç Bakım Sütü 200 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8680690712791",
    "name": "Urban Care No.5 Glycolic Retinol Parlaklık Etkili Onarıcı Saç Bakım Serumu 100 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8680690712937",
    "name": "Urban Care Style Guide Cream Wax 100 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8680690712944",
    "name": "Urban Care Style Guide Fiber Gum 100 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8680690713019",
    "name": "Urban Care Expert Biotin & Kafein Dökülme Karşıtı Saç Toniği 2x200 ml Set",
    "source": "local_watsons"
  },
  {
    "barcode": "8680690713033",
    "name": "Urban Care Hibiscus & Shea Butter Elektriklenme Karşıtı Saç Bakım Köpüğü 200 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8680690713040",
    "name": "Urban Care Hibiscus & Shea Butter Kıvırcık ve Dalgalı Saçlar Bukle Belirginleştirici Durulanmayan Sa",
    "source": "local_gratis"
  },
  {
    "barcode": "8680690713071",
    "name": "Urban Care Style Guide Isıya Karşı Saç Koruma Spreyi 200 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8680690713101",
    "name": "Urban Care Style Guide Ekstra Dolgunlaştırıcı Saç Hacim Köpüğü 200 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8680690713163",
    "name": "Urban Care Summer Glow Aşamalı Renk Açıcı Jel 100 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8680690713187",
    "name": "Urban Care Perfecting Besleyici Parlaklık Veren Saç Bakım Kremi 150 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8680690713194",
    "name": "Urban Care Perfecting Besleyici Parlaklık Veren Saç Bakım Yağı 100 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8680690713255",
    "name": "Urban Care Şampuan 350 ml + Krem 175 ml Hibiscus Set",
    "source": "local_watsons"
  },
  {
    "barcode": "8680690720000",
    "name": "Urban Care Sparling Lychee Breeze Hacimlendirici Kuru Şampuan 200 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8680690720024",
    "name": "Urban Care Peonies Roses Bouquet Hacimlendirici Kuru Şampuan 200 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8680690720062",
    "name": "Hawaiian Tropic Bronzlaştırıcı Yağı 200 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "8680690720154",
    "name": "Urban Care Brazilian Keratin Düzleştirici Etkili Saç Bakım Şampuanı 350 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8680690720161",
    "name": "Urban Care Brazilian Keratin Düzleştirici Etkili Saç Bakım Kremi 200 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8680690720178",
    "name": "Urban Care Brazilian Keratin Düzleştirici Etkili Keratin Bakım Sütü 200 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8680690720185",
    "name": "Urban Care Brazilian Keratin Düzleştirici Etkili Yoğun Saç Bakım Maskesi 230 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8680690720192",
    "name": "Urban Care Brazilian Keratin Düzleştirici Etkili Keratin Bakım Kürü 75 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8680690720314",
    "name": "Urban Care Shake N Repair 7/24 Kabaran ve Bukleli Saçlara Özel Saç Bakım Köpüğü 150 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8680690720321",
    "name": "Urban Care Shake N Repair 7/24 Düzleştirici Etkili Saç Bakım Köpüğü 150 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8680690720376",
    "name": "Urban Care Expert Biotin Caffeine Dökülme Karşıtı Saç Bakım Serumu 50 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8680690720499",
    "name": "Urban Care Shake N Repair 10 in 1 Onarıcı Etkili Durulanmayan Saç Bakım Spreyi 200 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8680690720505",
    "name": "Urban Care Shake N Repair 7/24 Gloss Laminasyon Parlaklık Etkili Durulanan Bakım Kremi 200 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8680690720628",
    "name": "Urban Care Intense Keratin Yoğun Hasar Onarıcı Saç Bakım Şampuanı 350 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8680690720642",
    "name": "Urban Care Argan Oil & Keratin Besleyici ve Kırılma Karşıtı Saç Bakım Şampuanı 350 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8680690720659",
    "name": "Urban Care Hyaluronic & Collagen Ekstra Dolgunlaştırıcı Saç Bakım Şampuanı 350 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8680690720666",
    "name": "Urban Care Hibiscus & Shea Butter Bukle Belirginleştirici Saç Bakım Şampuanı 350 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8680690720888",
    "name": "Urban Care Monoi Ylang Ylang Güneşten Yıpranmış Mat Saçlara Özel Saç Bakım Sütü 200 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8680690720895",
    "name": "Urban Care Monoi Ylang Ylang Güneşten Yıpranmış Mat Saçlara Özel Saç Bakım Şampuanı 350 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8680690720901",
    "name": "Urban Care Monoi Ylang Ylang Güneşten Yıpranmış Mat Saçlara Özel Bakım Saç Serumu 75 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8680742403523",
    "name": "Nascita Kıl Alma Yayı Epilatör 1 adet",
    "source": "local_rossmann"
  },
  {
    "barcode": "8680742415205",
    "name": "Nascita Krepe Tarağı",
    "source": "local_watsons"
  },
  {
    "barcode": "8680742420209",
    "name": "Nascita Pro Üç Boyutlu Saç Fırçası 01",
    "source": "local_gratis"
  },
  {
    "barcode": "8680742420216",
    "name": "Nascita Pro Üç Boyutlu Oval Saç Fırçası 02",
    "source": "local_gratis"
  },
  {
    "barcode": "8680742425716",
    "name": "Nascita Ustura & Kaş Makası Seti 2'li",
    "source": "local_rossmann"
  },
  {
    "barcode": "8680742425878",
    "name": "Nascita Pro Saç Fırçası Kare",
    "source": "local_watsons"
  },
  {
    "barcode": "8680742426966",
    "name": "Nascita Kaş Şekillendirme Seti 3'lü",
    "source": "local_rossmann"
  },
  {
    "barcode": "8680742426980",
    "name": "Nascita Ustura Seti 2'li",
    "source": "local_rossmann"
  },
  {
    "barcode": "8680742427970",
    "name": "Nascita Pro Üç Boyutlu Oval Saç Fırçası 05 Beyaz",
    "source": "local_gratis"
  },
  {
    "barcode": "8680742428083",
    "name": "Nascita Saç Fırçası Pro 6 1 adet",
    "source": "local_rossmann"
  },
  {
    "barcode": "8680742428366",
    "name": "Nascita Saç Fırçası Pro 1 adet",
    "source": "local_rossmann"
  },
  {
    "barcode": "8680742428410",
    "name": "Nascita Pro Lollipop Açma Tarama Fırçası Pembe",
    "source": "local_watsons"
  },
  {
    "barcode": "8680742428717",
    "name": "Nascita Silikon Maske Ve Yüz Yıkama Fırçası",
    "source": "local_watsons"
  },
  {
    "barcode": "8680742428816",
    "name": "Nascita Bit Tarağı",
    "source": "local_gratis"
  },
  {
    "barcode": "8680742429189",
    "name": "Nascita Beyaz Mermer Pro Saç Fırçası",
    "source": "local_gratis"
  },
  {
    "barcode": "8680742429233",
    "name": "Nascita Promax Üç Boyutlu Oval Saç Fırçası",
    "source": "local_gratis"
  },
  {
    "barcode": "8680742429981",
    "name": "Nascita Açılır Kapanır Kaş Usturası 2'li",
    "source": "local_rossmann"
  },
  {
    "barcode": "8680742430239",
    "name": "Nascita Pro Saç Fırçası Pembe",
    "source": "local_watsons"
  },
  {
    "barcode": "8680742430987",
    "name": "Nascita Pro Saç Fırçası Mor - 19",
    "source": "local_gratis"
  },
  {
    "barcode": "8680742432066",
    "name": "Nascita Geri Dönüşümlü Saç Fırçası PRO'2G",
    "source": "local_gratis"
  },
  {
    "barcode": "8680742433087",
    "name": "Nascita Geri Dönüşümlü Şampuan Fırçası Bambu (Asortili)",
    "source": "local_gratis"
  },
  {
    "barcode": "8680742433100",
    "name": "Nascita Geri Dönüşümlü Şampuan Fırçası Bambu Pembe",
    "source": "local_watsons"
  },
  {
    "barcode": "8680742433117",
    "name": "Nascita Şampuan Masaj Fırçası Bambu",
    "source": "local_rossmann"
  },
  {
    "barcode": "8680742435111",
    "name": "Nascita Eco At Kılı Selülit Fırçası",
    "source": "local_watsons"
  },
  {
    "barcode": "8680742436866",
    "name": "Nascita 3D Flexi Kontrol Açma Tarama Saç Fırçası Gümüş",
    "source": "local_gratis"
  },
  {
    "barcode": "8680742437399",
    "name": "Nascita Pro Saç Fırçası Nar Çiçeği",
    "source": "local_watsons"
  },
  {
    "barcode": "8680742437412",
    "name": "Nascita 3D Çocuk Saç Fırçası Lila",
    "source": "local_gratis"
  },
  {
    "barcode": "8680742437757",
    "name": "Nascita 3D Flexi Kontrol Açma Tarama Saç Fırçası Pembe",
    "source": "local_gratis"
  },
  {
    "barcode": "8680742440573",
    "name": "Nascita Topuz Fırçası",
    "source": "local_rossmann"
  },
  {
    "barcode": "8680742440574",
    "name": "Nascita Ahşap Topuz Fırçası",
    "source": "local_watsons"
  },
  {
    "barcode": "8680742442652",
    "name": "Nascita Ahşap Topuz Fırçası",
    "source": "local_rossmann"
  },
  {
    "barcode": "8680742444199",
    "name": "Nascita Bigudi Hacim Verici Klipsli 2'li",
    "source": "local_rossmann"
  },
  {
    "barcode": "8680742444366",
    "name": "Nascita Cırtlı Bigudi 8'li",
    "source": "local_watsons"
  },
  {
    "barcode": "8680742457618",
    "name": "Nascita Aç Kapa Saç Fırçası Turuncu",
    "source": "local_watsons"
  },
  {
    "barcode": "8680742457625",
    "name": "Nascita Saç Fırçası Aç-Kapa",
    "source": "local_rossmann"
  },
  {
    "barcode": "8680742457632",
    "name": "Nascita Aç Kapa Saç Fırçası",
    "source": "local_gratis"
  },
  {
    "barcode": "8680742458301",
    "name": "Nascita Magical Curl Saç Fırçası - 52",
    "source": "local_gratis"
  },
  {
    "barcode": "8680742458325",
    "name": "Nascita Magical Curl Saç Fırçası - 54",
    "source": "local_gratis"
  },
  {
    "barcode": "8680742458332",
    "name": "Nascita Magical Curls Saç Fırçası",
    "source": "local_watsons"
  },
  {
    "barcode": "8680742458356",
    "name": "Nascita Magical Curls Saç Fırçası (Küçük Boy)",
    "source": "local_gratis"
  },
  {
    "barcode": "8680742458363",
    "name": "Nascita Saç Fırçası Magical Bukle",
    "source": "local_rossmann"
  },
  {
    "barcode": "8680742458660",
    "name": "Nascita Saç Fırçası Twistlo Açık Pembe",
    "source": "local_rossmann"
  },
  {
    "barcode": "8680742458707",
    "name": "Nascita Saç Fırçası Aksesuar Seti Twistlo Yeşil 4'lü",
    "source": "local_rossmann"
  },
  {
    "barcode": "8680742458714",
    "name": "Nascita Saç Fırçası Aksesuar Seti Twistlo Kırmızı 4'lü",
    "source": "local_rossmann"
  },
  {
    "barcode": "8680742458721",
    "name": "Nascita Saç Fırçası Aksesuar Seti Twistlo Lila 4'lü",
    "source": "local_rossmann"
  },
  {
    "barcode": "8680742458738",
    "name": "Nascita Saç Fırçası Aksesuar Seti Twistlo Açık Pembe 4'lü",
    "source": "local_rossmann"
  },
  {
    "barcode": "8680742458745",
    "name": "Nascita Saç Fırçası Aksesuar Seti Twistlo Sarı 4'lü",
    "source": "local_rossmann"
  },
  {
    "barcode": "8680742458752",
    "name": "Nascita Saç Fırçası Aksesuar Seti Twistlo Pembe 4'lü",
    "source": "local_rossmann"
  },
  {
    "barcode": "8680742459087",
    "name": "Nascita Şampuan Masaj Fırçası Çift Taraflı",
    "source": "local_rossmann"
  },
  {
    "barcode": "8680742459940",
    "name": "Nascita Sosis Bigudi (3'lü Set) (Asortili)",
    "source": "local_gratis"
  },
  {
    "barcode": "8680742460038",
    "name": "Nascita Saç Fırçası Twistlo Mavi",
    "source": "local_rossmann"
  },
  {
    "barcode": "8680742460045",
    "name": "Nascita Twistlo Aksesuar Seti Mint Yeşili",
    "source": "local_gratis"
  },
  {
    "barcode": "8680742460052",
    "name": "Nascita Saç Fırçası Aksesuar Seti Twistlo Turuncu 4'lü",
    "source": "local_rossmann"
  },
  {
    "barcode": "8680742461745",
    "name": "Nascita Yıkanabilir Makyaj Temizleme Havlusu 7'li",
    "source": "local_rossmann"
  },
  {
    "barcode": "8680742461769",
    "name": "Nascita Yıkanabilir Makyaj Temizleme Havlusu 2'li",
    "source": "local_rossmann"
  },
  {
    "barcode": "8680742462032",
    "name": "Fenda Saç Fırçası , 1 Adet",
    "source": "local_rossmann"
  },
  {
    "barcode": "8680742465576",
    "name": "Nascita Pixypop Girls Lulu Ustura , 1 Adet",
    "source": "local_rossmann"
  },
  {
    "barcode": "8680972081157",
    "name": "Lole's Doğal Şampuan Sabunu Argan Yağı 100 Gr",
    "source": "local_rossmann"
  },
  {
    "barcode": "8680972081225",
    "name": "Lole's Doğal Bebek Şampuan Sabunu Hindistan Cevizi Yağı 100 Gr",
    "source": "local_rossmann"
  },
  {
    "barcode": "8680976438506",
    "name": "Beemedic Yüz Masaj Aleti 1 adet",
    "source": "local_rossmann"
  },
  {
    "barcode": "8681065108270",
    "name": "Duaderm Retinoid Yaş Karşıtı Serum 30 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "8681065108294",
    "name": "Duaderm Koyu Halka Giderici Göz Çevresi Serum Vitamin K2 30 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "8681065108621",
    "name": "Duaderm Intense Repair Ozonize Cilt Bakım Serumu 50 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "8681127023633",
    "name": "milk_shake Chantilly Saç Köpüğü 150 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8681127034462",
    "name": "milk_shake Milk Color Eko Kalıcı Saç Boyası Seti 1 Siyah",
    "source": "local_gratis"
  },
  {
    "barcode": "8681127034479",
    "name": "milk_shake Milk Color Eko Kalıcı Saç Boyası Seti 3 Koyu Kestane",
    "source": "local_gratis"
  },
  {
    "barcode": "8681127034486",
    "name": "milk_shake Milk Color Eko Kalıcı Saç Boyası Seti 4 Orta Kestane",
    "source": "local_gratis"
  },
  {
    "barcode": "8681127034493",
    "name": "milk_shake Milk Color Eko Kalıcı Saç Boyası Seti 5 Açık Kestane",
    "source": "local_gratis"
  },
  {
    "barcode": "8681127034509",
    "name": "milk_shake Milk Color Eko Kalıcı Saç Boyası Seti 6 Koyu Kumral",
    "source": "local_gratis"
  },
  {
    "barcode": "8681127034516",
    "name": "milk_shake Milk Color Eko Kalıcı Saç Boyası Seti 7 Orta Kumral",
    "source": "local_gratis"
  },
  {
    "barcode": "8681127034523",
    "name": "milk_shake Milk Color Eko Kalıcı Saç Boyası Seti 8 Açık Kumral",
    "source": "local_gratis"
  },
  {
    "barcode": "8681127034530",
    "name": "milk_shake Milk Color Eko Kalıcı Saç Boyası Seti 9 Sarı",
    "source": "local_gratis"
  },
  {
    "barcode": "8681127034547",
    "name": "milk_shake Milk Color Eko Kalıcı Saç Boyası Seti 7.1 Orta Kumral Küllü",
    "source": "local_gratis"
  },
  {
    "barcode": "8681127034554",
    "name": "milk_shake Milk Color Eko Kalıcı Saç Boyası Seti 8.1 Açık Kumral Küllü",
    "source": "local_gratis"
  },
  {
    "barcode": "8681127034561",
    "name": "milk_shake Milk Color Eko Kalıcı Saç Boyası Seti 5.3 Açık Kestane Dore",
    "source": "local_gratis"
  },
  {
    "barcode": "8681127034578",
    "name": "milk_shake Milk Color Eko Kalıcı Saç Boyası Seti 7.3 Orta Kumral Dore",
    "source": "local_gratis"
  },
  {
    "barcode": "8681127034585",
    "name": "milk_shake Milk Color Eko Kalıcı Saç Boyası Seti 5e Açık Kestane Egzotik",
    "source": "local_gratis"
  },
  {
    "barcode": "8681127034592",
    "name": "milk_shake Milk Color Eko Kalıcı Saç Boyası Seti 6E Koyu Kumral Egzotik",
    "source": "local_gratis"
  },
  {
    "barcode": "8681127034608",
    "name": "milk_shake Milk Color Eko Kalıcı Saç Boyası Seti 7E Orta Kumral Egzotik",
    "source": "local_gratis"
  },
  {
    "barcode": "8681127034615",
    "name": "milk_shake Milk Color Eko Kalıcı Saç Boyası Seti 7.43 Orta Kumral Bakır Dore",
    "source": "local_gratis"
  },
  {
    "barcode": "8681127034622",
    "name": "milk_shake Milk Color Eko Kalıcı Saç Boyası Seti 5.66 Açık Kestane Yoğun Kızıl",
    "source": "local_gratis"
  },
  {
    "barcode": "8681127034639",
    "name": "milk_shake Milk Color Eko Kalıcı Saç Boyası Seti 900 Ultra Blond Açık Sarı",
    "source": "local_gratis"
  },
  {
    "barcode": "8681285114549",
    "name": "Getwell Göğüs Ucu Gizleme Bandı 1 Adet",
    "source": "local_rossmann"
  },
  {
    "barcode": "8681406360169",
    "name": "Avofarm Organik Hindistan Cevizi Yağı 150 ml",
    "source": "local_rossmann"
  },
  {
    "barcode": "8681410000358",
    "name": "Cire Aseptine Klasik Çiçek Özlü Yoğun Bakım Kremi 150 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8681410000723",
    "name": "Cire Aseptine Klasik Çiçek Özlü Yoğun Bakım Kremi 30 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8681410000921",
    "name": "Cire Aseptine Çiçek Özlü Nemlendirici Krem 30 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8681425002781",
    "name": "Eda Taşpınar Güneş Sprey Bronzing Bomb 200 ml",
    "source": "local_rossmann"
  },
  {
    "barcode": "8681425002798",
    "name": "Eda Taşpınar Bronzlaştırıcı Yağ Yoğun Işıltı 200 ml",
    "source": "local_rossmann"
  },
  {
    "barcode": "8681511096915",
    "name": "Siveno %100 Doğal Biberiye Suyu Saç Dökülmesi Karşıtı ve Hızlı Saç Uzatma Etkili Saç Toniği 150 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8681511098285",
    "name": "Siveno %100 Doğal Yaşlanma Karşıtı & Yenileyici Yüz Kremi 30 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8681511098292",
    "name": "Siveno %100 Doğal Beyazlatıcı Yüz Kremi 30 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8681529832550",
    "name": "Bade Natural Lavanta Uçucu Yağı %100 Saf 10 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8681529832581",
    "name": "Bade Natural Biberiye Uçucu Yağı %100 Saf 10 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8681529833830",
    "name": "Bade Natural Lavanta Suyu Canlandırıcı ve Besleyici Etkili Tonik %100 Doğal ve Saf 100 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8681529833847",
    "name": "Bade Natural Saf Gül Suyu Nemlendirici ve Ferahlatıcı 100 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "8681529835216",
    "name": "Bade Natural C Vitamini Yüz Serumu Aydınlatıcı, Ton Eşitleyici ve Leke Karşıtı 30 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8681529835223",
    "name": "Bade Natural Bitkisel Kolajen Yüz Serumu Yaşlanma ve Kırışıklık Karşıtı 30 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8681529835247",
    "name": "Bade Natural Bitkisel Hyalüronik Asit Yüz Serumu Nemlendirici ve Canlandırıcı 30 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8681529835575",
    "name": "Bade Natural Gül Yağı Rahatlatıcı ve Antioksidan Yüz Serumu 30 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8681529835643",
    "name": "Bade Natural Ametist Roll On Yüz Masaj Serumu Arındırıcı Etkili 10 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "8681529835650",
    "name": "Bade Natural Pembe Kuvars Roll On Antioksidan Yüz Masaj Serumu 10 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8681529835834",
    "name": "Bade Natural Çay Ağacı Hızlı Etkili Akne Karşıtı Roll On Serum 10 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8681529836022",
    "name": "Bade Natural Kuşburnu Aydınlatıcı ve Leke Karşıtı Tonik 100 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8681529836039",
    "name": "Bade Natural Çay Ağacı Akne Karşıtı ve Gözenek Sıkılaştırıcı Arındırıcı Tonik 100 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8681529836305",
    "name": "Bade Natural Nioli Uçucu Yağı %100 Saf 10 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8681529836336",
    "name": "Bade Natural Hint Yağı Soğuk Sıkım %100 Saf 30 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8681529837029",
    "name": "Bade Natural Biberiye Suyu Dökülme Karşıtı ve Saç Uzamasını Destekleyici Saç Toniği 100 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8681529837432",
    "name": "Bade Natural Saç Toniği Refill Biberiye Suyu 200 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "8681529837456",
    "name": "Bade Natural Biberiye Yağı ve Biotin Complex Saç Dökülmesi ve Yıpranmış Saçlar için Saç Bakım Serumu 50 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8681529837777",
    "name": "Bade Natural Saç Toniği Biberiye Suyu 30 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "8681529837784",
    "name": "Bade Natural Gül Suyu Gözenek Sıkılaştırıcı Aydınlatıcı ve Arındırıcı Tonik %100 Doğal ve Saf 30 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8681529837968",
    "name": "Bade Natural Biberiye Suyu Saç Toniği 100 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8681529837975",
    "name": "Bade Natural Saç Bakım Sütü Biberiye 100 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "8681529838163",
    "name": "Bade Natural Şampuan Dökülme Karşıtı Biberiye 250 ml",
    "source": "local_rossmann"
  },
  {
    "barcode": "8681529838248",
    "name": "Bade Natural Biberiye Arındırıcı ve Canlandırıcı Saç Sirkesi 250 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8681529838286",
    "name": "Bade Natural Biberiye Besleyici ve Güçlendirici Saç Maskesi 25 ml x 4",
    "source": "local_gratis"
  },
  {
    "barcode": "8681644702189",
    "name": "Beeo Apicare Dudak Koruyucu Krem Kara Mürver 10 ml",
    "source": "local_rossmann"
  },
  {
    "barcode": "8681644702196",
    "name": "Beeo Apricare Dudak Koruyucu Krem Ham Bal 10 ml",
    "source": "local_rossmann"
  },
  {
    "barcode": "8681689314811",
    "name": "Toni&Guy Onarıcı Şampuan + Saç Kremi Set 2x 250 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "8681701000050",
    "name": "Morfose Kolajen Çift Fazlı Fön Suyu Seyahat Boy 50 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "8681701000067",
    "name": "Morfose Milk Therapy Çift Fazlı Fön Suyu 50 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8681701000074",
    "name": "Morfose Milk Therapy Kremsi Süt Şampuan Seyahat Boy 50 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "8681701000661",
    "name": "Morfose Milk Therapy Kremsi Süt Maskesi 75 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "8681701001637",
    "name": "Morfose Bitkisel Tuzsuz Saç Şampuanı 500 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8681701001651",
    "name": "Morfose Keratin Saç Şampuanı 500 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8681701001668",
    "name": "Morfose Argan Saç Şampuanı 500 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8681701001675",
    "name": "Morfose Milk Therapy Saç Şampuanı 500 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8681701002030",
    "name": "Morfose Kolajen Saç Maskesi 250 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8681701002047",
    "name": "Morfose Biotin Saç Maskesi 250 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8681701002061",
    "name": "Morfose Ultra Strong Saç Spreyi 300 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8681701002078",
    "name": "Morfose Extra Strong Saç Spreyi 300 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8681701002108",
    "name": "Morfose Kolajen Saç Şampuanı 50 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8681701002115",
    "name": "Morfose Keratin Şampuan 50 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "8681701002184",
    "name": "Morfose Keratin Çift Fazlı Fön Suyu 50 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8681701003150",
    "name": "Morfose Ultra Strong Saç Spreyi 250 ml",
    "source": "local_rossmann"
  },
  {
    "barcode": "8681701003167",
    "name": "Morfose Extra Strong Saç Spreyi 250 ml",
    "source": "local_rossmann"
  },
  {
    "barcode": "8681701003334",
    "name": "Morfose Biotin Çift Fazlı Fön Suyu 240 ml",
    "source": "local_rossmann"
  },
  {
    "barcode": "8681701003341",
    "name": "Morfose Keratin Çift Fazlı Fön Suyu 240 ml",
    "source": "local_rossmann"
  },
  {
    "barcode": "8681701003358",
    "name": "Morfose Kolajen Çift Fazlı Fön Suyu 240 ml",
    "source": "local_rossmann"
  },
  {
    "barcode": "8681701003365",
    "name": "Morfose Milk Therapy Çift Fazlı Fön Sütü 240 ml",
    "source": "local_rossmann"
  },
  {
    "barcode": "8681701004249",
    "name": "Morfose Extra Strong Saç Köpüğü 200 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8681701004256",
    "name": "Morfose Ultra Strong Saç Köpüğü 200 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8681701004263",
    "name": "Morfose Milk Therapy Saç Serumu 100 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8681701004850",
    "name": "Morfose Keratin Saç Spreyi 300 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8681701004867",
    "name": "Morfose Argan Saç Spreyi 300 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8681701004874",
    "name": "Morfose Milk Therapy Saç Spreyi 300 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8681701006823",
    "name": "Morfose Silver Şampuan 500 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8681701007905",
    "name": "Morfose Milk Therapy Butter Mucizevi Saç Bakım Yağı 200 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8681701007929",
    "name": "Morfose Keratin Saç Spreyi 250 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8681701007943",
    "name": "Morfose Keratin Saç Köpüğü 200 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8681701007974",
    "name": "Morfose Ossion 10x Strong Saç Spreyi 300 ml",
    "source": "local_rossmann"
  },
  {
    "barcode": "8681701008629",
    "name": "Morfose Keratin Çift Fazlı Fön Suyu 220 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8681701008636",
    "name": "Morfose Kolajen Çift Fazlı Fön Suyu 220 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8681701008643",
    "name": "Morfose Milk Therapy Çift Fazlı Fön Sütü 220 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8681701008704",
    "name": "Morfose Extra Strong Saç Spreyi 270 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "8681701008711",
    "name": "Morfose Ultra Strong Saç Spreyi 270 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "8681701009909",
    "name": "Morfose Milk Keratin Şampuan 500 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "8681701011780",
    "name": "Morfose Milk Therapy Kuru Şampuan 200 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8681701012145",
    "name": "Morfose Ekstra Hacim Kuru Şampuan 200 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8681701012146",
    "name": "Morfose Ekstra Hacim Kuru Şampuan 200 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "8681701012381",
    "name": "Morfose Milk Therapy Kremsi Süt Maskesi Seyahat Boy 25 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "8681701012398",
    "name": "Morfose Keratin Saç Maskesi 25 ml",
    "source": "local_rossmann"
  },
  {
    "barcode": "8681701012459",
    "name": "Morfose Ultra Strong Saç Spreyi 75 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "8681701013142",
    "name": "Morfose Ossion Mat Pomade Wax 100 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8681701013159",
    "name": "Morfose Ossion Mat Putty Wax 100 ml",
    "source": "local_rossmann"
  },
  {
    "barcode": "8681701013906",
    "name": "Morfose Ossion Dökülme Karşıtı Saç Toniği 300 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8681701013913",
    "name": "Morfose Saç Toniği Kinoa&Kenevir 300 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "8681701014200",
    "name": "Morfose Milk Therapy Saç Parfümü 100 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8681701014392",
    "name": "Morfose Supreme Saç Bakım Sütü 300 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8681701014507",
    "name": "Morfose Milk Therapy Saç Spreyi 75 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8681701014620",
    "name": "Morfose Deniz Tuzu Spreyi 250 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "8681701014668",
    "name": "Morfose Milk Therapy Oval Saç Tarağı",
    "source": "local_watsons"
  },
  {
    "barcode": "8681701014729",
    "name": "Morfose Stick Wax 55 gr",
    "source": "local_gratis"
  },
  {
    "barcode": "8681701014804",
    "name": "Morfose Supreme Çift Fazlı Fön Suyu 240 ml",
    "source": "local_rossmann"
  },
  {
    "barcode": "8681701014811",
    "name": "Morfose Çift Fazli Sıvı Saç Kremi Kinoa&Kenevir 240 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "8681701014828",
    "name": "Morfose Çift Fazli Sıvı Saç Krem Süt Bal 240 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "8681701014835",
    "name": "Morfose Supreme Çift Fazlı Fön Suyu 220 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8681701014842",
    "name": "Morfose Kinoa Kenevir Çift Fazlı Fön Suyu 220 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8681701014859",
    "name": "Morfose Süt Bal Çift Fazlı Fön Suyu 220 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8681701014873",
    "name": "Morfose Supreme Saç Parfümü 100 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8681701014874",
    "name": "Morfose Supreme Saç Parfümü 100 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "8681701015085",
    "name": "Morfose Ultra Strong Saç Spreyi 90 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8681701015139",
    "name": "Morfose Supreme Supreme Saç Köpüğü 200 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8681701015146",
    "name": "Morfose Supreme Saç Serumu 100 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8681701015153",
    "name": "Morfose Supreme Saç Şampuanı 500 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8681701015160",
    "name": "Morfose Supreme Saç Spreyi 250 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8681701015375",
    "name": "Morfose Kolajen Saç Maskesi 25 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "8681701015436",
    "name": "Morfose Milk Therapy Kuru Şampuan 90 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8681701015443",
    "name": "Morfose Ekstra Hacim Kuru Şampuan 90 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8681701015450",
    "name": "Morfose Ossion Putty Matte Wax 60 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8681701015474",
    "name": "Morfose Supreme Saç Maskesi Seyahat Boy 25 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "8681701015566",
    "name": "Morfose Nox Saç Spreyi 250 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8681701015580",
    "name": "Morfose Nox Saç Köpüğü 200 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8681701015658",
    "name": "Morfose Saç Bakım Köpüğü Kinoa&Kenevir 200 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "8681701015689",
    "name": "Morfose Saç Bakım Şampuani Kinoa&Kenevir 500 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "8681701015702",
    "name": "Morfose Saç Maskesi Sache Kinoa&Kenevir 25 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "8681701015740",
    "name": "Morfose Saç Spreyi Kinoa&Kenevir 250 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "8681701015795",
    "name": "Morfose Saç Maskesi Üçgen Milk Therapy 25 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "8681701016006",
    "name": "Morfose Saç Maskesi Süt Bal 25 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "8681701016440",
    "name": "Morfose Milk Therapy Saç Şampuanı 700 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8681701016594",
    "name": "Morfose Color Şampuan Siyah 10'lu",
    "source": "local_watsons"
  },
  {
    "barcode": "8681701016655",
    "name": "Morfose Saç Bakım Yağı Acıbadem 100 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "8681701016662",
    "name": "Morfose Butter Saç Bakım Maske Acıbadem 200 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "8681701016679",
    "name": "Morfose Fön Suyu Acıbadem 240 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "8681701016723",
    "name": "Morfose Milk Therapy Saç Spreyi 250 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "8681701016815",
    "name": "Morfose Saç Maskesi Acıbadem 75 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "8681701016822",
    "name": "Morfose Saç Köpüğü Acıbadem 200 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "8681701016860",
    "name": "Morfose Saç Maskesi Acıbadem 25 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "8681701016914",
    "name": "Morfose Ossion Islak Görünümlü Kremsi Wax 100 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "8681701016945",
    "name": "Morfose Metamorfose Bond Care Onarıcı Bakım İki Fazlı Saç Kondisyoneri 200 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8681701016952",
    "name": "Morfose Metamorfose Glossy Touch Parlaklık Verici Bakım İki Fazlı Saç Kondisyoneri 200 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8681701016969",
    "name": "Morfose Metamorfose Moist Boost Nemlendirici Bakım İki Fazlı Saç Kondisyoneri 200 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8681701016976",
    "name": "Morfose Metamorfose Pure Detox Arındırıcı Bakım İki Fazlı Saç Kondisyoneri 200 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8681701016983",
    "name": "Morfose Metamorfose Bond Care Onarıcı Bakım Şampuan 400 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8681701016990",
    "name": "Morfose Metamorfose Glossy Touch Parlaklık Verici Bakım Şampuan 400 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8681701017003",
    "name": "Morfose Metamorfose Moist Boost Nemlendirici Bakım Şampuan 400 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8681701017010",
    "name": "Morfose Metamorfose Pure Detox Arındırıcı Bakım Şampuan 400 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8681701017027",
    "name": "Morfose Metamorfose Bond Care Onarıcı Bakım Saç Kremi 250 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8681701017034",
    "name": "Morfose Metamorfose Glossy Touch Parlaklık Verici Bakım Saç Kremi 250 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8681701017041",
    "name": "Morfose Metamorfose Moist Boost Nemlendirici Bakım Saç Kremi 250 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8681701017058",
    "name": "Morfose Metamorfose Bond Care Onarıcı Bakım Saç Maskesi 75 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8681701017065",
    "name": "Morfose Metamorfose Glossy Touch Parlaklık Verici Bakım Saç Maskesi 75 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8681701017072",
    "name": "Morfose Metamorfose Moist Boost Nemlendirici Bakım Saç Maskesi 75 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8681701017089",
    "name": "Morfose Metamorfose Pure Detox Arındırıcı Bakım Saç Maskesi 75 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8681701017096",
    "name": "Morfose Metamorfose Bond Care Onarıcı Bakım Saç Serumu 100 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8681701017102",
    "name": "Morfose Metamorfose Onarıcı Bakım Şampuanı 10 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "8681701017515",
    "name": "Morfose Süt Bal Çift Fazlı Fön Suyu 50 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8681701017522",
    "name": "Morfose Kinoa Kenevir Çift Fazlı Fön Suyu 50 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8681701017546",
    "name": "Morfose Şampuan Milk Therapy 750 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "8681701017577",
    "name": "Morfose Ossion Night Out Kremsi Saç Bakım Köpük 200 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "8681701019908",
    "name": "Morfose Metamorfose Bukle Belirginleştirici Saç Köpüğü 200 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8681701019922",
    "name": "Morfose Metamorfose Bukle Belirginleştirici Saç Kondisyoneri 200 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8681701019946",
    "name": "Morfose Metamorfose Bukle Belirginleştirici Durulanmayan Nemlendirici Saç Kremi 250 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8681701019960",
    "name": "Morfose Metamorfose Bukle Belirginleştirici Durulanan Saç Kremi 250 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8681701019984",
    "name": "Morfose Metamorfose Bukle Belirginleştirici Şampuan 400 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8681717006794",
    "name": "Ph Lab Kojiso Leke Karşıtı Temizleme Bar 50 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "8681717006800",
    "name": "Ph Lab Collagen Night Soyulabilir Maske 50 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "8681717006817",
    "name": "PHLAB KOJISO LEKE SERUM 30 ML",
    "source": "local_watsons"
  },
  {
    "barcode": "8681717006824",
    "name": "Ph Lab Anti Akne Temizleme Bar 50 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "8681717006862",
    "name": "Ph Lab Zero Pore Temizleme Bar 50 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "8681717006879",
    "name": "Ph Lab Collagen Night Temizleme Bar 50 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "8681717006886",
    "name": "PHLAB ANTI ACNE SERUM 30 ML",
    "source": "local_watsons"
  },
  {
    "barcode": "8681717006923",
    "name": "Ph Lab Collagen Night Cilt Yenileyici Serum 50 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "8681717007067",
    "name": "Epify Glutatyon Beyazlatma Krem 75 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "8681717008279",
    "name": "Ph Lab Anti Akne 30'lu Maske 360 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "8681717008286",
    "name": "Ph Lab Retinage 30'lu Maske 360 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "8681717008842",
    "name": "Ph Lab Kojiso Toner Pad 60'lı 200 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "8681717008897",
    "name": "Ph Lab Zore Pore Toner Pad 200 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "8681717008910",
    "name": "PHLAB COLLAGEN NEMLENDIRICI JEL KREM 50 ML",
    "source": "local_watsons"
  },
  {
    "barcode": "8681717009399",
    "name": "Ph Lab Fermente Pirinç Suyu & Protein Complex Saç Maskesi 200 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "8681717009405",
    "name": "Ph Lab Fermente Pirinç Suyu & Protein Complex Saç Sütü 100 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "8681717009474",
    "name": "Ph Lab Micro Spicule NAD+PDRN Shot 15 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "8681717009481",
    "name": "Ph Lab Micro Spicule Retinal PDRN Shot 15 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "8681717009542",
    "name": "Ph Lab Scalp Shot PDRN 15 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "8681717009603",
    "name": "Epify Anti Selülit Jel Krem 150 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "8681717009627",
    "name": "Ph Lab Somon DNA + Succinic Asit Dual Phase Serum 30 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "8681717009634",
    "name": "Ph-Lab Cica + Azelaic Asit Çift Fazlı Serum 30 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "8681717009641",
    "name": "Ph Lab Somon DNA + TXA Serum 30 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "8681717009658",
    "name": "Ph Lab Serum PDRN Hair Brush Serum 90 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "8681763366514",
    "name": "Eda Taşpınar Yoğun Bronzlaştırıcı Yağ 50 ml",
    "source": "local_rossmann"
  },
  {
    "barcode": "8681863078652",
    "name": "Clasy Care Aloevera Jel Maske 20x10 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "8681863079857",
    "name": "Clasy Care Face Up Skin Sivilce Kremi 40 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "8681863079864",
    "name": "Clasy Care Face Up Skin Göz Altı Kremi 40 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "8681863079871",
    "name": "Clasy Care Face Up Skin Leke Kremi 40 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "8681863079888",
    "name": "Clasy Care Face Up Skin Onarıcı Krem 40 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "8681925600777",
    "name": "Sinoz Vücut Peelingi 300 gr",
    "source": "local_gratis"
  },
  {
    "barcode": "8681925600778",
    "name": "Sinoz Arındırıcı Nemlendirici Vücut Peelingi 300 g",
    "source": "local_watsons"
  },
  {
    "barcode": "8681925603243",
    "name": "Sinoz Ultra Yüksek Koruyucu ve Nemlendirici Güneş Krem Sprey Spf50 200 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "8681925603518",
    "name": "Sinoz Pink Touch Tiger Grass Anında Cilt Tonu Eşitleyici Onarıcı Yüz Bakım Kremi 15 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8681925603525",
    "name": "Sinoz Çift Fazlı Micellar Makyaj Temizleme Suyu 200 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8681925603679",
    "name": "Sinoz Akne Karşıtı Vücut Temizleme Jeli 400 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8681925605666",
    "name": "Sinoz Spf 50+ Leke Karşıtı Krem 50 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "8681925606069",
    "name": "Sinoz Leke Kremi Vitamin C 3% + Niacinamide 2% 40 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "8681925607060",
    "name": "Sinoz No: 16 Mucizevi Bakım Yağı 100 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "8681925607240",
    "name": "Sinoz Glow Tonik 200 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8681925607257",
    "name": "Sinoz Pink Touch Ton Eşitleyici Yüz Güneş Kremi Spf50 50 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "8681925607455",
    "name": "Sinoz Kusursuz Bronzlaştırıcı Güneş Yağı Sprey 200 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "8681925607486",
    "name": "Sinoz Yağlı ve Karma Ciltler İçin Yüz Temizleme Jeli 400 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8681925607516",
    "name": "Sinoz Cica Onarıcı Bakım Kremi 50 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "8681925607547",
    "name": "Sinoz Vücut Peelingi No:16 300 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "8681925607561",
    "name": "Sinoz No:16 Shimmer Oil 100 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "8681925608032",
    "name": "Sinoz Pure Cica Tiger Grass Yüz Kremi 15 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8681925608033",
    "name": "Sinoz Cica Ton Eşitleyici Onarıcı Bakım Krem 15 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "8681925608407",
    "name": "Sinoz Kuru ve Hassas Ciltler İçin Yüz Temizleme Jeli 400 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8681925608537",
    "name": "Sinoz Günlük Kullanım Yüz Güneş Koruyucu Losyon SPF50+ 50 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "8681925608698",
    "name": "Sinoz Kuru ve Hassas Ciltler Yüz Temizleme Jeli 200 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "8681925608773",
    "name": "Sinoz Pure Cica Ultra Onarıcı ve Besleyici Bakım Serumu 30 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8681925608797",
    "name": "Sinoz Cica Ton Eşitleyici Yüz Güneş Koruyucu Losyon SPF50+ 50 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "8681925608810",
    "name": "Sinoz Hydrapro Nemlendirici Yüz Kremi 50 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8681925609282",
    "name": "Sinoz Pink Touch Ton Eşitleyici Yüz Güneş Kremi SPF50+ 50 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "8681925609481",
    "name": "Sinoz Günlük Kullanım Yüz Stick Güneş Koruyucu SPF50+",
    "source": "local_watsons"
  },
  {
    "barcode": "8681925609572",
    "name": "Sinoz Vitamin Cocktail Nemlendirici Yüz Kremi 50 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8681925609596",
    "name": "Sinoz Avocado Bomb Canlandırıcı Göz Çevresi Bakım Kremi 15 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8681925609633",
    "name": "Sinoz Vanilya Vücut Peelingi 300 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "8681925609800",
    "name": "Sinoz Avocado Bomb Nemlendirici ve Arındırıcı Vücut Peelingi 300 gr",
    "source": "local_gratis"
  },
  {
    "barcode": "8681925609886",
    "name": "Sinoz Avocado Bomb Nemlendirici ve Canlandırıcı Yüz Kremi 50 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8682009361027",
    "name": "True Bee Daily Dream Care Rosemary Miracle Biberiye Bakımı 3'lü Set (Tonik + Serum)",
    "source": "local_gratis"
  },
  {
    "barcode": "8682009361034",
    "name": "True Bee Daily Dream Care Biberiye Saç Toniği 250 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8682009361041",
    "name": "True Bee Daily Dream Care Superactive Saç Spreyi Tonik 250 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8682009361140",
    "name": "True Bee Daily Dream Pumpkin Şampuan 400 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8682009361157",
    "name": "True Bee Daily Dream Amla Şampuan 400 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8682009361300",
    "name": "True Bee Daily Dream Rose Oil Yaban Turpu İle Güçlendirilmiş Gül Yağı 100 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8682009361393",
    "name": "True Bee Rosemary Leave - In Butter Durulanmayan Saç Bakım Kremi 220 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8682009361409",
    "name": "True Bee Rosemary Saç Maskesi 220 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8682009361454",
    "name": "True Bee Karanfil Çam Terebentin & Karanfil Dökülme Önleyici & Güçlendirici Tonik 250 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8682009361461",
    "name": "True Bee Karanfil Çam Terebentin & Karanfil Dökülme Önleyici & Güçlendirici Saç Bakım Yağı 100 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8682009361478",
    "name": "True Bee Karanfil Çam Terebentin & Karanfil Dökülme Önleyici & Güçlendirici Şampuan 400 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8682009361584",
    "name": "True Bee Pamuk Sütü & Moringa Kompleks Şampuan 400 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8682009361591",
    "name": "True Bee Pamuk Sütü & Moringa Kompleks Saç Maskesi 220 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8682009361607",
    "name": "True Bee Pamuk Sütü & Moringa Kompleks Saç Bakım Yağı 100 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8682009361621",
    "name": "True Bee Pamuk Sütü & Moringa Dökülme Karşıtı Çift Fazlı Fön Sütü Sprey 200 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8682009368941",
    "name": "True Bee Daily Dream Amla Kompleks Yağ 100 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8682009368958",
    "name": "True Bee Daily Dream Biberiye Kompleks Yağ 100 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8682009368989",
    "name": "True Bee Daily Dream Mucize Biberiye Kompleks Şampuan 400 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8682035034018",
    "name": "Gülbirlik Güllsuyu Sprey 125 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "8682035034025",
    "name": "Gülbirlik Rosense Gülsuyu 250 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "8682190064004",
    "name": "Claderm Pure Arındırıcı Kil Maskesi 20 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8682190064011",
    "name": "Claderm Arındırıcı Kil Maskesi Tea Tree 20 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8682190064028",
    "name": "Claderm Arındırıcı Kil Maskesi Propolis 20 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8682190064042",
    "name": "Claderm Arındırıcı Kil Maskesi Aloe Vera 20 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8682190064097",
    "name": "Claderm Sade Killi Yüz Maskesi 50 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8682190064103",
    "name": "Claderm Nar Killi Yüz Maskesi 50 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8682190064110",
    "name": "Claderm Aloe Vera Killi Yüz Maskesi 50 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8682190064165",
    "name": "Claderm Coffee Killi Yüz Maskesi 50 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8682190064240",
    "name": "Claderm Arındırıcı Kil Maskesi Coffee 20 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8682190064851",
    "name": "Claderm Arındırıcı Kil Maskesi Çayağacı 50 ml",
    "source": "local_rossmann"
  },
  {
    "barcode": "8682190064875",
    "name": "Claderm Arındırıcı Kil Maskesi Collagen 50 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8682190064882",
    "name": "Claderm Aloevera Jel 300 ml",
    "source": "local_rossmann"
  },
  {
    "barcode": "8682257731306",
    "name": "Queen Doğal At Kılı Selülit Fırçası",
    "source": "local_watsons"
  },
  {
    "barcode": "8682276600560",
    "name": "Cire Aseptine Gül Vazelin 150 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8682276600584",
    "name": "Cire Aseptine Aloe Vera Vazelin 150 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8682276602427",
    "name": "Cire Aseptine Soft Aloe Vera Özlü Rahatlatıcı Besleyici Prebiyotikli Krem 30 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8682276602434",
    "name": "Cire Aseptine Soft Aloe Vera Özlü Rahatlatıcı Besleyici Prebiyotikli Krem 75 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8682276602441",
    "name": "Cire Aseptine Soft Aloe Vera Özlü Rahatlatıcı Besleyici Prebiyotikli Krem 100 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8682276602458",
    "name": "Cire Aseptine Soft Aloe Vera Özlü Rahatlatıcı Besleyici Prebiyotikli Krem 200 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8682276602465",
    "name": "Cire Aseptine Soft Aloe Vera Özlü Rahatlatıcı Besleyici Prebiyotikli Krem 300 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8682276602472",
    "name": "Cire Aseptine Soft Avokado Özlü Yoğun Nemlendirici Prebiyotikli Krem 30 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8682276602489",
    "name": "Cire Aseptine Soft Avokado Özlü Yoğun Nemlendirici Prebiyotikli Krem 75 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8682276602496",
    "name": "Cire Aseptine Soft Avokado Özlü Yoğun Nemlendirici Prebiyotikli Krem 100 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8682276602502",
    "name": "Cire Aseptine Soft Avokado Özlü Yoğun Nemlendirici Prebiyotikli Krem 200 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8682276602519",
    "name": "Cire Aseptine Soft Avokado Özlü Yoğun Nemlendirici Prebiyotikli Krem 300 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8682276602526",
    "name": "Cire Aseptine Soft Gül Özlü Nem Dengeleyici ve Besleyici Prebiyotikli Krem 30 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8682276602533",
    "name": "Cire Aseptine Soft Gül Özlü Nem Dengeleyici ve Besleyici Prebiyotikli Krem 75 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8682276602540",
    "name": "Cire Aseptine Soft Gül Özlü Nem Dengeleyici ve Besleyici Prebiyotikli Krem 100 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8682276602557",
    "name": "Cire Aseptine Soft Gül Özlü Nem Dengeleyici ve Besleyici Prebiyotikli Krem 200 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8682276602564",
    "name": "Cire Aseptine Soft Gül Özlü Nem Dengeleyici ve Besleyici Prebiyotikli Krem 300 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8682276602571",
    "name": "Cire Aseptine Soft Papatya Özlü Besleyici Prebiyotikli Krem 30 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8682276602588",
    "name": "Cire Aseptine Soft Papatya Özlü Besleyici Prebiyotikli Krem 75 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8682276602595",
    "name": "Cire Aseptine Soft Papatya Özlü Besleyici Prebiyotikli Krem 100 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8682276602601",
    "name": "Cire Aseptine Soft Papatya Özlü Besleyici Prebiyotikli Krem 200 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8682276602618",
    "name": "Cire Aseptine Soft Papatya Özlü Besleyici Prebiyotikli Krem 300 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8682276602625",
    "name": "Cire Aseptine Soft Zeytinyağlı Nemlendirici Pürüzsüzleştirici Prebiyotikli Krem 30 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8682276602632",
    "name": "Cire Aseptine Soft Zeytinyağlı Nemlendirici Pürüzsüzleştirici Prebiyotikli Krem 75 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8682276602649",
    "name": "Cire Aseptine Soft Zeytinyağlı Nemlendirici Pürüzsüzleştirici Prebiyotikli Krem 100 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8682276602656",
    "name": "Cire Aseptine Soft Zeytinyağlı Nemlendirici Pürüzsüzleştirici Prebiyotikli Krem 200 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8682276602663",
    "name": "Cire Aseptine Soft Zeytinyağlı Nemlendirici Pürüzsüzleştirici Prebiyotikli Krem 300 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8682276603721",
    "name": "Bee Beauty Aloe Vera Jel 300 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8682276604841",
    "name": "Cire Aseptine Bronzlaştırıcı Güneş Yağı 0 SPF 90 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "8682276604940",
    "name": "Cire Aseptine Bronzlaştırıcı Kakao Yağı 100 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "8682276604958",
    "name": "Cire Aseptine Bronzlaştırıcı Havuç Yağı 100 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "8682276605627",
    "name": "CireAseptine Yüz Güneş Kremi Ton Dengeleyici ve Aydınlatıcı Pembe 50 SPF 50ml",
    "source": "local_watsons"
  },
  {
    "barcode": "8682276606051",
    "name": "Cire Aseptine Güneş Kremi Baby 50 SPF 200 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "8682276606739",
    "name": "Cire Aseptine Strawberry Nemlendirici Renkli Dudak Bakım Kremi",
    "source": "local_gratis"
  },
  {
    "barcode": "8682276606746",
    "name": "Cire Aseptine Cherry Nemlendirici Renkli Dudak Bakım Kremi",
    "source": "local_gratis"
  },
  {
    "barcode": "8682276606760",
    "name": "Cire Aseptine Madberry Nemlendirici Renkli Dudak Bakım Kremi",
    "source": "local_gratis"
  },
  {
    "barcode": "8682276606777",
    "name": "Cire Aseptine Bubble Gum Nemlendirici Renkli Dudak Bakım Kremi",
    "source": "local_gratis"
  },
  {
    "barcode": "8682276606852",
    "name": "Cire Aseptine Vazelin Pure 150 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8682276606869",
    "name": "Cire Aseptine Vazelin Avokado 150 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8682276606890",
    "name": "Cire Aseptine Soft Çilek Prebiyotikli Krem 30 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8682276606906",
    "name": "Cire Aseptine Soft Çilek Prebiyotikli Krem 75 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8682276606920",
    "name": "Cire Aseptine Soft Hindistan Cevizi Prebiyotikli El, Vücut ve Yüz Kremi 30 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8682276606937",
    "name": "Cire Aseptine Soft Hindistan Cevizi Prebiyotikli Krem 75 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8682276607156",
    "name": "Cire Aseptine Vitamin-C Brightening Özel Bakım Kremi 75 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8682276607163",
    "name": "Cire Aseptine Hyaluron Moisturizing Özel Bakım Kremi 75 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8682276607170",
    "name": "Cire Aseptine Anti Age Panthenol Özel Bakım Kremi 75 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8682276607835",
    "name": "Cire Aseptine Şeffaf Aerosol Vücut Güneş Kremi Sprey SPF50+ PA++++ 200 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "8682276607842",
    "name": "Cire Aseptine Şeffaf Aero Bebek Vücut Güneş Kremi Sprey SPF50+ PA++++ 200 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "8682276607859",
    "name": "Cire Aseptine Bronzlaştırıcı Sprey Güneş Yağı 200 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "8682276607866",
    "name": "Cire Aseptine Işıltılı Sprey Güneş Yağı SPF0 200 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "8682276608825",
    "name": "Cire Aseptine Çilek Vazelin 150 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8682287370117",
    "name": "Loshel Lash & Brow Serum Kaş ve Kirpik Serumu 5 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8682287370124",
    "name": "Loshel Lash & Brow Keratin Kompleks Kaş ve Kirpik Keratini 5 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8682287371732",
    "name": "Loshel Body Peeling Çilek 250 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8682287371749",
    "name": "Loshel Body Peeling Limon 250 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8682287371763",
    "name": "Loshel Body Peeling Vanilya 250 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8682287371770",
    "name": "Loshel Body Peeling Coffee Coconut 250 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8682287374139",
    "name": "Loshel Keratin Saç Serumu 100 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8682287374320",
    "name": "Loshel Keratin Protein Yoğun Onarıcı Saç Maskesi 250 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8682287374474",
    "name": "Loshel Body Peeling Bubble Gum 250 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8682340342631",
    "name": "Derminix Peeling Serum 30 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "8682340342723",
    "name": "Derminix Cilt Bakım Ampulü Vitamin C 6 Adet",
    "source": "local_watsons"
  },
  {
    "barcode": "8682397030642",
    "name": "Maruderm Leke Karşıtı ve Beyazlatıcı Cilt Bakım Serumu 30 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8682397030659",
    "name": "Maruderm Gözenek Sıkılaştırıcı BHA ve Peptit Cilt Bakım Serumu 30 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8682397030666",
    "name": "Maruderm Kolajen ve Hyalüronik Asit Cilt Bakım Serumu 30 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8682397030673",
    "name": "Maruderm C Vitamini ve Peptid Aydınlatıcı Cilt Bakım Serumu 30 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8682397030680",
    "name": "Maruderm Leke Karşıtı Cilt Beyazlatıcı Bakım Kremi 200 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8682397030697",
    "name": "Maruderm Hyalüronik Asit Nemlendirici Yüz ve Vücut Cilt Bakım Kremi 200 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8682397030703",
    "name": "Maruderm Karma ve Yağlı Ciltlere Özel Salisilik Asit BHA Yüz Temizleme Jeli 400 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8682397030710",
    "name": "Maruderm Hassas ve Atopik Ciltler İçin Yüz Yıkama Jeli 400 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8682397030734",
    "name": "Maruderm Gözenek Sıkılaştırıcı, Siyah Nokta ve Akne Karşıtı BHA Tonik 250 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8682397030741",
    "name": "Maruderm Peeling AHA %10 + BHA %2 Maske Serumu 30 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "8682397030758",
    "name": "Maruderm Kafein %5 + Peptit + Hyalüronik Asit Göz Çevresi Serumu 30 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8682397030772",
    "name": "Maruderm Niacinamide %10 + Hyalüronik Asit + Panthenol Cilt Bakım Serumu 30 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8682397030796",
    "name": "Maruderm Retinol 0.5% Cilt Yenileyici Bakım Serumu 30 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8682397030819",
    "name": "Maruderm Cica Centella Cilt Bakım Kremi 200 ml",
    "source": "local_rossmann"
  },
  {
    "barcode": "8682397030826",
    "name": "Maruderm Bariyer Onarıcı & Güçlendirici Ceramide Cilt Bakım Kremi 200 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8682397030833",
    "name": "Maruderm Niacinamide %10 Leke Karşıtı ve Gözenek Sıkılaştırıcı Krem 200 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8682397030864",
    "name": "Maruderm Azelaik Asit %10 Aydınlatıcı Leke Karşıtı Cilt Bakım Serumu 30 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8682397030871",
    "name": "Maruderm Milk Serum Centella Asiatica Yatıştırıcı Nemlendirici 30 ml",
    "source": "local_rossmann"
  },
  {
    "barcode": "8682397030888",
    "name": "Maruderm Glutatyon Beyazlatıcı & Leke Karşıtı Milk Serum 30 ml",
    "source": "local_rossmann"
  },
  {
    "barcode": "8682397030895",
    "name": "Maruderm Tonik Centella Asiatica Yatıştırıcı & Ceramide Nemlendirici 250 ml",
    "source": "local_rossmann"
  },
  {
    "barcode": "8682397030901",
    "name": "Maruderm Glycolic Acid %7 Aydınlatıcı ve Leke Karşıtı Tonik 250 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8682397030925",
    "name": "Maruderm Yağ Bazlı Temizleyici Yüz ve Vücut İçin Temizleme Yağı 400 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8682397030932",
    "name": "Maruderm Karma ve Yağlı Ciltlere Özel Salisilik Asit Yüz Yıkama Jeli 200 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8682397030949",
    "name": "Maruderm Yağ Bazlı Temizleyici Yüz ve Vücut İçin Temizleme Yağı 200 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8682397030956",
    "name": "Maruderm Hassas ve Atopik Ciltler İçin Yüz Yıkama Jeli 200 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8682397030994",
    "name": "Maruderm Kepek Karşıtı Şampuan 400 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "8682397031021",
    "name": "Maruderm Onarıcı Şampuan 400 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "8682397031090",
    "name": "Maruderm Onarıcı Saç Yağı 100 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "8682397031114",
    "name": "Maruderm Ginseng Özü + Jojoba Yağı Besleyici Kil Maskesi 105 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "8682397031120",
    "name": "Maruderm Salisilik Asit + Çay Ağacı Yağı Kil Maskesi 100 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8682397031121",
    "name": "Maruderm Salisilik Asit + Çay Ağacı Yağı Kil Maskesi 105 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "8682397031151",
    "name": "Maruderm Pirinç Suyu AHA + Hyalüronik Asit Vücut Peelingi 250 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8682397031168",
    "name": "Maruderm Vücut Scrub Kahve ve Yeşil Çay 250 ml",
    "source": "local_rossmann"
  },
  {
    "barcode": "8682397031175",
    "name": "Maruderm Himalaya Tuzu Vücut Peelingi Squalane & Hindistan Cevizi Yağı 250 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8682397031182",
    "name": "Maruderm SPF+50 Mineral Filtre Yüz Güneş Kremi 50 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "8682397031199",
    "name": "Maruderm SPF+ 50 Pembe Ton Eşitleyici Yüz Güneş Kremi 50 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "8682397031205",
    "name": "Maruderm SPF+ 50 Leke Karşıtı Yüz Güneş Kremi 50 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "8682397031212",
    "name": "Maruderm SPF+50 Nemlendirici Yüz Güneş Kremi 50 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "8682397031359",
    "name": "Maruderm %10 Urea (Üre) Yoğun Nemlendirici Vücut Kremi 400 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8682397031366",
    "name": "Maruderm Vücut Kremi Centella Repair 400 ml",
    "source": "local_rossmann"
  },
  {
    "barcode": "8682397031373",
    "name": "Maruderm Hyalüronik Asit Nemlendirici Vücut Kremi 400 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8682397031403",
    "name": "Maruderm C Vitamini Yüz Yıkama Jeli 200 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8682397031410",
    "name": "Maruderm Yenileyici Toz Peeling 2 gr x 30 Adet",
    "source": "local_gratis"
  },
  {
    "barcode": "8682397031427",
    "name": "Maruderm Arındırıcı Toz Peeling 2 gr x 30 Adet",
    "source": "local_gratis"
  },
  {
    "barcode": "8682397031434",
    "name": "Maruderm Aydınlatıcı Toz Peeling 2 gr x 30 Adet",
    "source": "local_gratis"
  },
  {
    "barcode": "8682397031458",
    "name": "Maruderm Tonik %96 Salyangoz Özlü 100 ml",
    "source": "local_rossmann"
  },
  {
    "barcode": "8682397031465",
    "name": "Maruderm %92 Salyangoz Özlü Onarıcı Krem 100 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8682397031472",
    "name": "Maruderm Retinol 0.3 Cilt Yenileyici Bakım Serumu 30 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8682397031533",
    "name": "Maruderm Biberiye Şampuan 400 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "8682397031632",
    "name": "Maruderm Avokado Kırışıklık Karşıtı Göz Çevresi Kremi 15 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8682397031649",
    "name": "Maruderm Sun Mineral Hassas Vücut Güneş Kremi Sprey SPF50+ PA++++ 200 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "8682397031885",
    "name": "Maruderm Aydınlatıcı (Radiance Boost) Tonik Ped 100 Adet",
    "source": "local_gratis"
  },
  {
    "barcode": "8682397031892",
    "name": "Maruderm Sıkılaştırıcı ve Yenileyici (Glow Renewal) Tonik Ped 100 Adet",
    "source": "local_gratis"
  },
  {
    "barcode": "8682397031908",
    "name": "Maruderm Arındırıcı ve Dengeleyici (Clarify Balance) Tonik Ped 100 Adet",
    "source": "local_gratis"
  },
  {
    "barcode": "8682397031915",
    "name": "Maruderm Yatıştırıcı ve Onarıcı (Calme & Restore) Tonik Ped 100 Adet",
    "source": "local_gratis"
  },
  {
    "barcode": "8682397031922",
    "name": "Maruderm Cica Cilt Tonu Eşitleyici Krem 15 SPF 15 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "8682397031939",
    "name": "Maruderm Cica Cilt Tonu Eşitleyici 15SPF Krem 30 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8682397031946",
    "name": "Maruderm Güneş Kremi Cica Cilt Tonu Eşitleyici Spf50+ 50 ml",
    "source": "local_rossmann"
  },
  {
    "barcode": "8682397031960",
    "name": "Maruderm Pirinç Özlü Aydınlatıcı Yüz Temizleme Jeli 200 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8682397031977",
    "name": "Maruderm Pirinç Özlü Aydınlatıcı & Nemlendirici Krem 50 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8682397031984",
    "name": "Maruderm Pirinç Özlü Aydınlatıcı Tonik 250 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8682397032585",
    "name": "Maruderm E Vitamini ile Güçlendirilmiş Kaş & Kirpik Serumu 6.5 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8682397032868",
    "name": "Maruderm Glikolik Asit %5 Kil Yüz Maskesi 100 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8682397032875",
    "name": "Maruderm Retinol %0,3 Yaşlanma Karşıtı Gece Kremi 50 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8682397032882",
    "name": "Maruderm Tranexamic Asit Yüz Bakım Serumu 30 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "86823970332585",
    "name": "Maruderm Kaş & Kirpik Serumu E Vitamini ile Güçlendirilmiş 6.5 ml",
    "source": "local_rossmann"
  },
  {
    "barcode": "8682397033384",
    "name": "Maruderm Bakuchiol Yüz Bakım Kremi 50 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8682397547010",
    "name": "Revox Şampuan At Kuyruğu Özlü 360 ml",
    "source": "local_rossmann"
  },
  {
    "barcode": "8682397547034",
    "name": "Revox Şampuan Biotin ve Collagen 360 ml",
    "source": "local_rossmann"
  },
  {
    "barcode": "8682397547058",
    "name": "Revox Şampuan Men 360 ml",
    "source": "local_rossmann"
  },
  {
    "barcode": "8682397547072",
    "name": "Revox Saç Bakım Şampuanı Biberiye Bitki Özlü 400 ml",
    "source": "local_rossmann"
  },
  {
    "barcode": "8682397547096",
    "name": "Revox Şampuan Aminoacid 400 ml",
    "source": "local_rossmann"
  },
  {
    "barcode": "8682397547218",
    "name": "Revox Keratin Saç Bakım Sütü Aminoacid 200 ml",
    "source": "local_rossmann"
  },
  {
    "barcode": "8682397547355",
    "name": "Revox Şampuan Keratin ve Ozon Yağı E Vitamini Bakımı 360 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "8682397547584",
    "name": "Revox Şampuan 14 Bitki Özlü 400 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "8682397547676",
    "name": "Revox Saç Toniği Biberiye Bitki Özlü Dökülme Karşıtı 200 ml",
    "source": "local_rossmann"
  },
  {
    "barcode": "8682538400471",
    "name": "Arifoğlu Sarımsak Yağı 20 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8682538400501",
    "name": "Arifoğlu Papatya Suyu Şişe Sprey 100 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8682538400549",
    "name": "Arifoğlu Kaş Kirpik Bakım Yağı 10 ml + 10 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8682538403007",
    "name": "Arifoğlu Mavi Anemon Çiçeği Yağı 20 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8682538417264",
    "name": "Arifoğlu Biberiye Suyu Saç Spreyi 100 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8682644280431",
    "name": "Centesol Onarıcı Cı̇lt Bakım Kremı̇ (Cica Krem) 30 gr",
    "source": "local_gratis"
  },
  {
    "barcode": "8682644280462",
    "name": "Centesol Onarıcı Göz Çevresı̇ Bakım Kremı̇ 15 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8682644280622",
    "name": "Centesol Onarıcı Yoğun Nemlendirici Cica Cilt Bakım Kremi 50 gr",
    "source": "local_gratis"
  },
  {
    "barcode": "8682644280646",
    "name": "Centesol Arındırıcı Canlandırıcı Yüz Temizleme Jeli 200 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8682644280684",
    "name": "Centesol Onarıcı Yoğun Nemlendirici Gece Bakım Kremi 50 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8682644280707",
    "name": "Centesol Onarıcı Yoğun Nemlendirici Cica Pomad Cilt Bakım Merhemi 30 gr",
    "source": "local_gratis"
  },
  {
    "barcode": "8682644280721",
    "name": "Centesol Onarıcı Nemlendirici Canlandırıcı Yüz Bakım Kremi 50 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8682662859022",
    "name": "Ashley Joy Yoğun Onarıcı Bakım Saç Maskesi 200 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8682662859053",
    "name": "Ashley Joy Argan Saç Bakım Serumu 100 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8682662859121",
    "name": "Ashley Joy Platin ve Sarı Saçlar İçin Turunculaşma Karşıtı Keratin İçerikli Mor Şampuan 250 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8682662859138",
    "name": "Ashley Joy Saç Maskesi Bukle Kontrol 30 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8682662859152",
    "name": "Ashley Joy Saç Maskesi Onarıcı 30 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "8682662859169",
    "name": "Ashley Joy Saç Maskesi Canlandırıcı 30 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8682662859176",
    "name": "Ashley Joy Saç Maskesi Arındırıcı 30 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8682662859183",
    "name": "Ashley Joy Saç Maskesi Güçlendirici & Dolgunlaştırıcı 30 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8682662859190",
    "name": "Ashley Joy Renk Açıcı Sprey 110 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8682662859213",
    "name": "Ashley Joy Kaş & Kirpik Serumu 6 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8682662859220",
    "name": "Ashley Joy Hacim Veren Şampuan 400 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8682662859237",
    "name": "Ashley Joy Hacim Veren Saç Kremi 250 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8682662859244",
    "name": "Ashley Joy Saç Bakım Spreyi Hacim Veren 150 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8682662859282",
    "name": "Ashley Joy Durulanmayan Saç Bakım Kremi 150 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8682662859283",
    "name": "Ashley Joy Durulanmayan Saç Bakım Kremi 150 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "8682662859299",
    "name": "Ashley Joy Saç Bakım Serumu 100 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "8682662859305",
    "name": "Ashley Joy Kuru Şampuan Volumizing Aqua Bubble 200 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8682662859374",
    "name": "Ashley Joy Boyalı Saçlar İçin Boya Koruyucu Sprey 150 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8682662859411",
    "name": "Ashley Joy Çift Fazlı Bakım & Kolay Tarama Saç Spreyi 150 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8682662859428",
    "name": "Ashley Joy Yoğun Onarıcı Şampuan 400 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8682662859429",
    "name": "Ashley Joy Yoğun Onarıcı Şampuan 400 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "8682662859460",
    "name": "Ashley Joy Banana Şampuan 400 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "8682662859467",
    "name": "Ashley Joy Banana Saç Kremi 250 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "8682662859498",
    "name": "Ashley Joy Banana Koruyucu Saç Bakım Sprey 150 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "8682662859510",
    "name": "Ashley Joy Feminine Aura Saç Parfümü Etkili Hacim Kuru Şampuan 200 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8682662859527",
    "name": "Ashley Joy Bukle Belirginleştirici Kıvırcık ve Dalgalı Saçlara Özel Şampuan 400 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8682662859534",
    "name": "Ashley Joy Bukle Belirginleştirici Kıvırcık ve Dalgalı Saçlara Özel Saç Kremi 250 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8682662859541",
    "name": "Ashley Joy Bukle Belirginleştirici Kıvırcık ve Dalgalı Saçlara Özel Durulanmayan Saç Bakım Kremi 150 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8682662859558",
    "name": "Ashley Joy Feminine Aura Summer Saç Parfümü Etkili Kuru Şampuan 200 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8682662859565",
    "name": "Ashley Joy Feminine Aura Sport Saç Parfümü Etkili Kuru Şampuan 200 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8682662859671",
    "name": "Ashley Joy Kuru ve Hassas Saçlar İçin Propolis Şampuan 400 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8682662859688",
    "name": "Ashley Joy Kuru ve Hassas Saçlar İçin Propolis Saç Kremi 250 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8682662859695",
    "name": "Ashley Joy Kuru ve Hassas Saçlar İçin Propolis Saç Bakım Sütü 150 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8682662859992",
    "name": "Ashley Joy Matcha Gloss Glikolik Asit İçeren Işıltı ve Parlaklık Veren Şampuan 400 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "8682711000030",
    "name": "Eda Taşpınar Güneşsiz Bronzlaştırıcı Self Tanning Medium 200 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "8682711000047",
    "name": "Eda Taşpınar Güneşsiz Bronzlaştırıcı Self Tanning Dark 200 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "8682711000894",
    "name": "Eda Taşpınar Güneş Krem SPF50+ Seyahat Boy 50 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "8682711006186",
    "name": "Eda Taşpınar Yaz Işıltısı Bronzluk Seti SPF50+ Vücut Güneş Kremi & Bronzlaştırıcı Yağ & Body Mist",
    "source": "local_watsons"
  },
  {
    "barcode": "8682711006193",
    "name": "Eda Taşpınar Selülit Karşıtı Fit Vücut Bakım Seti",
    "source": "local_watsons"
  },
  {
    "barcode": "8682711006711",
    "name": "Eda Taşpınar Yoğun Bronzluk Güneş Seti SP50+ Vücut Güneş Kremi & Yoğun Bronzlaştırıcı Sprey & Kalıcı Bronzluk Losyonu",
    "source": "local_watsons"
  },
  {
    "barcode": "8682773091007",
    "name": "The Purest Solutions Gözenek Siyah Nokta ve Sivilce Oluşumunu Gidermeye Yardımcı Serum 30 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8682773091014",
    "name": "The Purest Solutions Canlandırıcı & Cilt Tonu Eşitleyici Yüz Peeling Serum 30 ml",
    "source": "local_rossmann"
  },
  {
    "barcode": "8682773091021",
    "name": "The Purest Solutions Yoğun Nemlendirici Bakım Serumu 30 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8682773091038",
    "name": "The Purest Solutions Leke Gidermeye Yardımcı Cilt Tonu Eşitleyici Cilt Bakım Serumu 30 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8682773091045",
    "name": "The Purest Solutions Gözenek Sıkılaştırıcı ve Arındırıcı Tonik 200 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8682773091052",
    "name": "The Purest Solutions Göz Altı Torbalanma Ve Morluk Karşıtı Bakım Serumu 30 ml",
    "source": "local_rossmann"
  },
  {
    "barcode": "8682773091069",
    "name": "The Purest Solutions Peptit İçerikli Yaşlanma Karşıtı Cilt Bakım Serumu 30 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8682773091250",
    "name": "The Purest Solutions Meyve Asitleri İçeren Toz Peeling 55 gr",
    "source": "local_gratis"
  },
  {
    "barcode": "8682773091267",
    "name": "The Purest Solutions Meyve Asitleri İçeren Toz Temizleyici 55 gr",
    "source": "local_gratis"
  },
  {
    "barcode": "8682773091274",
    "name": "The Purest Solutions BHA %2 Siyah Nokta Hedefli Yağlanma Dengeleyici Tonik 200 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8682773091281",
    "name": "The Purest Solutions Postbiyotik İçerikli Multifonksiyonel Arındırıcı Temizleme Yağı 150 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8682773091298",
    "name": "The Purest Solutions Vitamin C Serum, 30 ml",
    "source": "local_rossmann"
  },
  {
    "barcode": "8682773091304",
    "name": "The Purest Solutions Vita A Serum Ceramide & Retinol 30 ml",
    "source": "local_rossmann"
  },
  {
    "barcode": "8682773091311",
    "name": "The Purest Solutions 24 Saat Etkili Günlük Yoğun Nemlendirici Bakım Kremi 50 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8682773091328",
    "name": "The Purest Solutions T-Bölgesi Matlaştırıcı Maske 10 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8682773091335",
    "name": "The Purest Solutions Yüz Güneş Kremi Spf 50+ 50 ml",
    "source": "local_rossmann"
  },
  {
    "barcode": "8682773091342",
    "name": "The Purest Solutions Vita-B Complex Bariyer Güçlenmeye Yardımcı Serum 30 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8682773091618",
    "name": "The Purest Solutions Refill Gözenek Sıkılaştırıcı Tonik 400 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "8682773091687",
    "name": "The Purest Solutions Yüz Güneş Kremi SPF50+ Lekeli Cilt 50 ml",
    "source": "local_rossmann"
  },
  {
    "barcode": "8682773091694",
    "name": "The Purest Solutions Yüz Güneş Kremi SPF50+ Yağlı Cilt",
    "source": "local_rossmann"
  },
  {
    "barcode": "8682773091953",
    "name": "The Purest Solutions Yağlı Cilt Temizleme Jeli 200 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8682773091960",
    "name": "The Purest Solutions Karma ve Kuru Cilt Temizleme Jeli 200 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8682887940178",
    "name": "Bee Beauty Aloe Vera Siyah Nokta Bandı 6'lı",
    "source": "local_gratis"
  },
  {
    "barcode": "8682887940536",
    "name": "Bee Beauty Güneş Sonrası Aloe Veralı Kağıt Maske 25 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8682887940574",
    "name": "Bee Beauty Aktif Karbon Siyah Nokta Bandı 6'lı",
    "source": "local_gratis"
  },
  {
    "barcode": "8682887941649",
    "name": "Bee Beauty Kağıt Maske 3'lü 25 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8682887941809",
    "name": "Bee Beauty Leke Karşıtı Kağıt Maske 25 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8682887941977",
    "name": "Bee Beauty Haftalık Bakım Seti 7 x Maske",
    "source": "local_gratis"
  },
  {
    "barcode": "8682887942103",
    "name": "Bee Beauty Butterfly Kağıt Maske 25 gr",
    "source": "local_gratis"
  },
  {
    "barcode": "8682887942110",
    "name": "Bee Beauty Rabbit Kağıt Maske 25 gr",
    "source": "local_gratis"
  },
  {
    "barcode": "8682887942127",
    "name": "Bee Beauty Tiger Kağıt Maske 25 gr",
    "source": "local_gratis"
  },
  {
    "barcode": "8682887942165",
    "name": "Bee Beauty Buhar Terapisi Saç Derisi Bakımı Bone Maske",
    "source": "local_gratis"
  },
  {
    "barcode": "8682887942332",
    "name": "Bee Beauty Buhar Terapisi Onarıcı Bakım Bone Maske",
    "source": "local_gratis"
  },
  {
    "barcode": "8682887942349",
    "name": "Bee Beauty Buhar Terapisi Saç Teli Bakımı Bone Maske",
    "source": "local_gratis"
  },
  {
    "barcode": "8682887942370",
    "name": "Bee Beauty During Party Kağıt Maske",
    "source": "local_gratis"
  },
  {
    "barcode": "8682887942448",
    "name": "Bee Beauty Karpuz Desenli Kağıt Yüz Maskesi",
    "source": "local_gratis"
  },
  {
    "barcode": "8682887942455",
    "name": "Bee Beauty Kivi Desenli Kağıt Yüz Maskesi",
    "source": "local_gratis"
  },
  {
    "barcode": "8682887942462",
    "name": "Bee Beauty Limon Desenli Kağıt Yüz Maskesi",
    "source": "local_gratis"
  },
  {
    "barcode": "8682887942615",
    "name": "Bee Beauty After Party Kağıt Maske",
    "source": "local_gratis"
  },
  {
    "barcode": "8682887942707",
    "name": "Bee Beauty Superfood Yaban Mersini Kağıt Maske",
    "source": "local_gratis"
  },
  {
    "barcode": "8682887942752",
    "name": "Bee Beauty Before Make-Up Kağıt Maske",
    "source": "local_gratis"
  },
  {
    "barcode": "8682887942790",
    "name": "Bee Beauty 7'li Kağıt Yüz Maskesi",
    "source": "local_gratis"
  },
  {
    "barcode": "8682887944046",
    "name": "Bee Beauty Akne Yara Bandı 36 Adet",
    "source": "local_gratis"
  },
  {
    "barcode": "8682887945463",
    "name": "The Purest Solutions Mikroiğneli Akne Bandı 9 Adet",
    "source": "local_rossmann"
  },
  {
    "barcode": "8682887945464",
    "name": "The Purest Solutions Microneedle Akne Patch 9 Adet",
    "source": "local_watsons"
  },
  {
    "barcode": "8682887945753",
    "name": "Mia Klinika Şeffaf Akne Yara Bandı 36 Adet",
    "source": "local_gratis"
  },
  {
    "barcode": "8682887945760",
    "name": "Bee Beauty Ayıcık Desenli Akne Bandı 20 Adet",
    "source": "local_gratis"
  },
  {
    "barcode": "8682887945845",
    "name": "Ice Queen Collagen C Vitamin Masaj Uçlu Krem 80 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "8682887945852",
    "name": "Ice Queen Collagen C Vitamin Masaj Uçlu Krem 40 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "8682887945869",
    "name": "Ice Queen Hyaluronic Matrix Masaj Uçlu Krem 80 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "8682887945876",
    "name": "Ice Queen Hyaluronic Matrix Masaj Uçlu Krem 40 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "8682887945883",
    "name": "Ice Queen Niacinamide Masaj Uçlu Krem 40 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "8682887945890",
    "name": "Ice Queen Niacinamide Kafein Göz Kremi 15 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "8682887945906",
    "name": "Ice Queen Peptide Masaj Uçlu Krem 40 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "8682887945913",
    "name": "Ice Queen Peptide Hyaluronic Acid Göz Kremi 15 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "8682887945968",
    "name": "The Purest Solutions Hydrocolloid Akne Patch 36'lı",
    "source": "local_gratis"
  },
  {
    "barcode": "8682887945969",
    "name": "The Purest Solutions Hidrokolloid Akne Karşıtı & Yatıştırıcı Bant 36'lı",
    "source": "local_watsons"
  },
  {
    "barcode": "8682887946000",
    "name": "Mia Klinika Akne Bandı",
    "source": "local_watsons"
  },
  {
    "barcode": "8682887946002",
    "name": "Mia Klinika Sivilce Karşıtı Kedili Akne Bandı 20 Adet",
    "source": "local_gratis"
  },
  {
    "barcode": "8682887946200",
    "name": "The Purest Solutions Microneedle Teknolojili Sıkılaştırıcı ve İnce Çizgi Karşıtı Alın Bölgesi Patch Bakım Bandı 2 Adet",
    "source": "local_gratis"
  },
  {
    "barcode": "8682887946217",
    "name": "The Purest Solutions Microneedle Teknolojili Aydınlatıcı ve İnce Çizgi Karşıtı Göz Altı Patch Bakım Bandı 4 Adet",
    "source": "local_gratis"
  },
  {
    "barcode": "8682887946316",
    "name": "Good Sense Saç Vitamini Dolgunlaştırıcı",
    "source": "local_watsons"
  },
  {
    "barcode": "8682887946323",
    "name": "Good Sense Saç Vitamini Onarıcı & Besleyici",
    "source": "local_watsons"
  },
  {
    "barcode": "8682887946330",
    "name": "Good Sense Saç Vitamini Nemlendirici",
    "source": "local_watsons"
  },
  {
    "barcode": "8682887946347",
    "name": "Good Sense Saç Stick Wax 35 g",
    "source": "local_watsons"
  },
  {
    "barcode": "8682887946355",
    "name": "Good Sense Panda Collagen Yüz Maskesi",
    "source": "local_watsons"
  },
  {
    "barcode": "8682887946362",
    "name": "Good Sense Tiger Niacinamide Kağıt Yüz Maskesi",
    "source": "local_watsons"
  },
  {
    "barcode": "8682887946379",
    "name": "Good Sense Rabbit Ceramide Kağıt Yüz Maskesi",
    "source": "local_watsons"
  },
  {
    "barcode": "8682887946668",
    "name": "Mia Klinika XL Yüz ve Vücut Akne Bandı 6'lı",
    "source": "local_rossmann"
  },
  {
    "barcode": "8682887946675",
    "name": "Mia Klinika Leke Karşıtı Mikro İğneli Akne Bandı 6'lı",
    "source": "local_rossmann"
  },
  {
    "barcode": "8682887946835",
    "name": "Bee Beauty Akne Vücut Yara Bandı 4 Adet",
    "source": "local_gratis"
  },
  {
    "barcode": "8682887947191",
    "name": "Good Sense Ginseng Kokteyli Kağıt Yüz Maskesi",
    "source": "local_watsons"
  },
  {
    "barcode": "8682887947207",
    "name": "Good Sense Matcha & Yeşil Çay Kokteyli Kağıt Yüz Maskesi",
    "source": "local_watsons"
  },
  {
    "barcode": "8682887947214",
    "name": "Good Sense Serinletici Kokteyl Kağıt Yüz Maskesi",
    "source": "local_watsons"
  },
  {
    "barcode": "8682887947221",
    "name": "Good Sense C Vitamini Kokteyli Kağıt Yüz Maskesi",
    "source": "local_watsons"
  },
  {
    "barcode": "8682887947269",
    "name": "Good Sense Akne Patch Desenli 12'li",
    "source": "local_watsons"
  },
  {
    "barcode": "8682887947306",
    "name": "Good Sense Saç Sakızı 90 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "8682887947344",
    "name": "Good Sense Saç Maskesi 25 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "8682887947597",
    "name": "Good Sense %5 Üre İçeren Vücut Losyonu 200 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "8682943165057",
    "name": "Rimu Health Brightening Leke Karşıtı Aydınlatıcı Yüz Toniği 200 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8682943165064",
    "name": "Rimu Health Mild Glow Hassas Ciltler İçin Yenileyici PHA Yüz Toniği 200 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8682943165125",
    "name": "Rimu Health Sebum Control Akne Karşıtı Arındırıcı Yüz Toniği 200 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8682943165156",
    "name": "Rimu Health Brightening Leke Karşıtı Bariyer Onarıcı Aydınlatıcı Krem 50 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8682943165163",
    "name": "Rimu Health Retinal Boost Longevity Etkili Yaşlanma Karşıtı Krem 50 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8682943165170",
    "name": "Rimu Health PDRN Sodium DNA'lı Yoğun Onarıcı & Elastikiyet Kazandırıcı Yüz Serumu 30 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8682943165200",
    "name": "Rimu Health Cica Leke Karşıtı 50+SPF Ton Eşitleyici BB Krem 50 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8682974924050",
    "name": "The Bath Factory Vücut Losyonu Sweet Vanilla 200 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8682974924074",
    "name": "The Bath Factory Vücut Losyonu Gold Aura 200 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8682974924401",
    "name": "The Bath Factory Vücut Peelingi Liberty 300 gr",
    "source": "local_gratis"
  },
  {
    "barcode": "8682974924418",
    "name": "The Bath Factory Vücut Peelingi Gold Aura 300 gr",
    "source": "local_gratis"
  },
  {
    "barcode": "8682983380090",
    "name": "Claderm Arındırıcı Kil Maskesi Collagen 20 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8682983380311",
    "name": "Claderm Kil Olive Bacak Maskesi 30 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8682983380427",
    "name": "Claderm Pomegranate El Kremi 50 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8682983380434",
    "name": "Claderm Collagen El Kremi 50 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8682983380700",
    "name": "Claderm Rice Arındırıcı Kil Maskesi 20 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8682983380717",
    "name": "Claderm C Vitamini Arındırıcı Kil Maskesi 20 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8682983380731",
    "name": "Claderm Aloe Vera Jel 50 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8682983380960",
    "name": "Claderm Mentollü Tüp Kil Ayak Maskesi 50 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8682983381196",
    "name": "Claderm Maske 10'lu Karma Paketli 20 ml",
    "source": "local_rossmann"
  },
  {
    "barcode": "8682983382407",
    "name": "Pure Korean 5'li Yüz Maske Seti (Collagen, Nar, Vitamin C, Bakuchiol, Anti-Aging)",
    "source": "local_gratis"
  },
  {
    "barcode": "8683036297044",
    "name": "the fair. Arbutin Cilt Bakım Serumu 30 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8683036297686",
    "name": "Dermal Kolajen 5'li Maske Seti 23 gr x 5",
    "source": "local_gratis"
  },
  {
    "barcode": "8683071840496",
    "name": "Mixup! Magic Butter Saç Bakım Kremi 250 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8683071841844",
    "name": "Mixup! Hair Stick Wax 35 gr",
    "source": "local_gratis"
  },
  {
    "barcode": "8683071842339",
    "name": "Mixup! Stick Wax Super Energizing Hair Stick Wax 35 gr",
    "source": "local_gratis"
  },
  {
    "barcode": "8683071842612",
    "name": "Botanica Comfort Austrian Tea Tree Scalp Detox Kepek Karşıtı Sakinleştici Şampuan 400 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8683071842629",
    "name": "Botanica Comfort Austrian Tea Tree Scalp Detox Kepek Karşıtı Sakinleştici Saç Toniği 250 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8683071843008",
    "name": "Mixup Butter Cocobamboo 200 ml",
    "source": "local_rossmann"
  },
  {
    "barcode": "8683071843022",
    "name": "Mixup! CocoBamboo Hair Stick Wax 35 gr",
    "source": "local_gratis"
  },
  {
    "barcode": "8683071843039",
    "name": "Mixup! Cocobamboo Smooth Milk Çift Fazlı Fön Sütü 200 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8683071843077",
    "name": "Mixup! CocoBamboo Hair Styling Mascara 12 ml (Transparan)",
    "source": "local_gratis"
  },
  {
    "barcode": "8683071843107",
    "name": "Mixup! Aquatique Blue Aqua Wax 150 ml (Orta Tutuş)",
    "source": "local_gratis"
  },
  {
    "barcode": "8683071843114",
    "name": "Mixup! Aquatique Red Aqua Wax 150 ml (Güçlü Tutuş)",
    "source": "local_gratis"
  },
  {
    "barcode": "8683071843183",
    "name": "Botanica Comfort Luxury Hair Spa Ultimate Precious Oil Complex 100 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8683071843329",
    "name": "Hello Jeju Amla Yağı Şampuan 400 ml",
    "source": "local_rossmann"
  },
  {
    "barcode": "8683071843336",
    "name": "Hello Jeju Amla Yağı Tonik 250 ml",
    "source": "local_rossmann"
  },
  {
    "barcode": "8683071843343",
    "name": "Hello Jeju Amla Saç Yağı 100 ml",
    "source": "local_rossmann"
  },
  {
    "barcode": "8683071843527",
    "name": "Botanica Comfort Eternisse Bliss Luxury Oil Saç Yağı 100 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8683071843961",
    "name": "Mixup! CocoBamboo Vanilla Muse Saç Parfümü 100 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8683071843978",
    "name": "Mixup! CocoBamboo Mystic Petals Saç Parfümü 100 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8683071844067",
    "name": "Botanica Comfort Ultimate Precious Luxury Saç Bakım Maskesi 50 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8683071844074",
    "name": "Botanica Comfort Eternisse Bliss Luxury Saç Bakım Maskesi 50 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8683071844104",
    "name": "Botanica Comfort Eternisse Bliss Şampuan 500 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8683071844111",
    "name": "Botanica Comfort Eternisse Bliss Saç Bakım Kremi 300 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8683071844128",
    "name": "Botanica Comfort Ultimate Precious Şampuan 500 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8683071844135",
    "name": "Botanica Comfort Ultimate Precious Saç Bakım Kremi 300 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8683071844159",
    "name": "Hello Jeju Rooted Hair Saç Yağı 100 ml",
    "source": "local_rossmann"
  },
  {
    "barcode": "8683105621923",
    "name": "Maxx Deluxe Saç Boyası 5.65 Nar Kızılı",
    "source": "local_gratis"
  },
  {
    "barcode": "8683105621978",
    "name": "Maxx Deluxe Saç Boyası 6.7 Çikolata Kahve",
    "source": "local_gratis"
  },
  {
    "barcode": "8683105621992",
    "name": "Maxx Deluxe Saç Boyası 7.1 Küllü Kumral",
    "source": "local_gratis"
  },
  {
    "barcode": "8683105622296",
    "name": "Sea Color Home Colorist Set Boya 7.0 Kum Fırtınası",
    "source": "local_gratis"
  },
  {
    "barcode": "8683105622302",
    "name": "Sea Color Home Colorist Set Boya 8.0 Bebek Kumralı",
    "source": "local_gratis"
  },
  {
    "barcode": "8683105623583",
    "name": "Sea Color Yoğun Saç Açıcı 185 ml",
    "source": "local_rossmann"
  },
  {
    "barcode": "8683105627208",
    "name": "Master Colorist Premium Krem Saç Boyası 1.0 Siyah",
    "source": "local_gratis"
  },
  {
    "barcode": "8683105627215",
    "name": "Master Colorist Premium Krem Saç Boyası 3.0 Koyu Kahve",
    "source": "local_gratis"
  },
  {
    "barcode": "8683105627246",
    "name": "Master Colorist Premium Krem Saç Boyası 6.0 Koyu Kumral",
    "source": "local_gratis"
  },
  {
    "barcode": "8683105627253",
    "name": "Master Colorist Premium Krem Saç Boyası 7.0 Kumral",
    "source": "local_gratis"
  },
  {
    "barcode": "8683105627260",
    "name": "Master Colorist Premium Krem Saç Boyası 8.0 Açık Kumral",
    "source": "local_gratis"
  },
  {
    "barcode": "8683105627321",
    "name": "Master Colorist Premium Krem Saç Boyası 7.1 Küllü Kumral",
    "source": "local_gratis"
  },
  {
    "barcode": "8683105627376",
    "name": "Master Colorist Premium Krem Saç Boyası 8.3 Bal Köpüğü",
    "source": "local_gratis"
  },
  {
    "barcode": "8683105627437",
    "name": "Master Colorist Premium Krem Saç Boyası 5.65 Çilek Kırmızı",
    "source": "local_gratis"
  },
  {
    "barcode": "8683105628618",
    "name": "Sea Color Toner Ombre Cilası 9.1A Küllü Sarı",
    "source": "local_gratis"
  },
  {
    "barcode": "8683105628625",
    "name": "Sea Color Toner Ombre Cilası 9.3H Bal Işıltısı",
    "source": "local_gratis"
  },
  {
    "barcode": "8683105628632",
    "name": "Sea Color Toner Ombre Cilası 10.21B Parlak Bej",
    "source": "local_gratis"
  },
  {
    "barcode": "8683105628649",
    "name": "Sea Color Toner Ombre Cilası 9.2P Pembe İnci",
    "source": "local_gratis"
  },
  {
    "barcode": "8683105629257",
    "name": "Sea Color Transparan Rötuş Boyası Kumral Tonlar",
    "source": "local_gratis"
  },
  {
    "barcode": "8683105629264",
    "name": "Sea Color Transparan Rötuş Boyası Siyah Tonlar",
    "source": "local_gratis"
  },
  {
    "barcode": "8683105629332",
    "name": "Sea Color Şampuan Express Saç Boyası 1.0 Siyah",
    "source": "local_gratis"
  },
  {
    "barcode": "8683105629349",
    "name": "Sea Color Şampuan Express Saç Boyası 3.0 Koyu Kahve",
    "source": "local_gratis"
  },
  {
    "barcode": "8683105629356",
    "name": "Sea Color Şampuan Express Saç Boyası 4.0 Kahve",
    "source": "local_gratis"
  },
  {
    "barcode": "8683105629363",
    "name": "Sea Color Şampuan Express Saç Boyası 5.0 Açık Kahve",
    "source": "local_gratis"
  },
  {
    "barcode": "8683105629370",
    "name": "Sea Color Şampuan Express Saç Boyası 6.0 Koyu Kumral",
    "source": "local_gratis"
  },
  {
    "barcode": "8683105629387",
    "name": "Sea Color Şampuan Express Saç Boyası 7.0 Kumral",
    "source": "local_gratis"
  },
  {
    "barcode": "8683105629394",
    "name": "Sea Color Şampuan Express Boya Tarçın Bakır 8.45",
    "source": "local_watsons"
  },
  {
    "barcode": "8683105629431",
    "name": "Sea Color Şampuan Express Saç Boyası 6.7 Çikolta Kahve",
    "source": "local_gratis"
  },
  {
    "barcode": "8683105629448",
    "name": "Sea Color Şampuan Express Boya Çilek Kırmızısı 5.65",
    "source": "local_watsons"
  },
  {
    "barcode": "8683130013137",
    "name": "Dove Saç Bakım Şampuanı Argan Yağı Onarıcı Bakım 400 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "8683130015674",
    "name": "Elidor Saç Bakım Yağı Hindistan Cevizi 80 ml",
    "source": "local_rossmann"
  },
  {
    "barcode": "8683130018331",
    "name": "Dove Şampuan Yoğun Onarıcı 400 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "8683130023823",
    "name": "Elidor Doğanın Enerjisi Saç Bakım Kremi Argan Yağı ve Hibiskus Özü 350 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "8683130024394",
    "name": "Elidor Doğanın Enerjisi Saç Bakım Kremi Avokado ve Üzüm Çekirdeği Yağı 350 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "8683130024410",
    "name": "Elidor Doğanın Enerjisi Saç Bakım Kremi Hindistan Cevizi Yağı 350 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "8683130040676",
    "name": "Clear Women Şampuan Yumuşak&Parlak 500 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "8683130040706",
    "name": "Clear Men Kepeğe Karşı Şampuan Cool Sport Menthol 500 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8683130040775",
    "name": "Clear Women Kepeğe Karşı Etkili Şampuan Saç Dökülmesine Karşı 350 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "8683130040782",
    "name": "Clear Women Kepeğe Karşı Etkili Şampuan Kil Terapisi 350 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "8683130040805",
    "name": "Clear Women Kepeğe Karşı Etkili Şampuan Bitkisel Sentez 350 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "8683130040812",
    "name": "Clear Women Şampuan Yumuşak Parlak Kiraz Çiçeği Esansı & Keratin 350 ml",
    "source": "local_rossmann"
  },
  {
    "barcode": "8683130040829",
    "name": "Clear Men Kepeğe Karşı Etkili Şampuan Cool Sport Menthol 350 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "8683130040836",
    "name": "Clear Men Kepeğe Karşı Etkili Şampuan Günlük Arınma ve Ferahlık 350 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "8683130040843",
    "name": "Clear Men Kepeğe Karşı Etkili Şampuan Saç Dökülmesine Karşı 350 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "8683130040850",
    "name": "Clear Men Kepeğe Karşı Etkili Şampuan Yoğun Arındırıcı 350 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "8683130040867",
    "name": "Clear Men Kepeğe Karşı Etkili Şampuan Hızlı Stil 2si 1 Arada 350 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "8683130040874",
    "name": "Clear Men Kepeğe Karşı Etkili Şampuan Legend By CR7 350 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "8683130040881",
    "name": "Clear Men Kepeğe Karşı Etkili Şampuan Maksimum Ferahlık 350 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "8683130040942",
    "name": "Clear Scalpceuticals Saç Dökülmesine Karşı Saç Bakım Kremi 170 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "8683130040959",
    "name": "Clear Şampuan Dökülme Karşıtı 300 ml",
    "source": "local_rossmann"
  },
  {
    "barcode": "8683130041017",
    "name": "Clear Men Şampuan Dökülmeye Karşı Güçlendirici 300 ml",
    "source": "local_rossmann"
  },
  {
    "barcode": "8683130041321",
    "name": "Clear Women Kepeğe Karşı Etkili Şampuan Saç Dökülmesine Karşı Zencefil Özü 350 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8683130041345",
    "name": "Clear Women Kepeğe Karşı Etkili Şampuan Kil Terapisi Arınmış ve Yumuşak Saçlar 350 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8683130041406",
    "name": "Clear Women Kepeğe Karşı Etkili Şampuan Yumuşak Parlak Kiraz Çiçeği Esansı & Keratin 350 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8683130041543",
    "name": "Clear Men Kepeğe Karşı Etkili Şampuan Cool Sport Menthol Ferahlatıcı Mentol Etkisi 350 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8683130041567",
    "name": "Clear Men Kepeğe Karşı Etkili Şampuan Günlük Arınma ve Ferahlık Sedir Ağacı ve Okaliptus Özleri 350 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8683130041581",
    "name": "Clear Men Kepeğe Karşı Etkili Şampuan Saç Dökülmesine Karşı Kahve Çekirdeği Özü 350 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8683130041604",
    "name": "Clear Men Kepeğe Karşı Etkili Şampuan Yoğun Arındırıcı Kömür İle 350 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8683130041642",
    "name": "Clear Men Kepeğe Karşı Etkili Şampuan Legend By CR7 Cristiano Ronaldo 350 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8683130041666",
    "name": "Clear Men Kepeğe Karşı Etkili Şampuan Maksimum Ferahlık Yağlı Saç Derisi İçin Limon Özlü 350 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8683130049389",
    "name": "Elidor Doğanın Enerjisi Saç Bakım Şampuanı Hindistan Cevizi Yağı Onarıcı & Yıpranma Karşıtı 400 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "8683130053799",
    "name": "Elidor Doğanın Enerjisi Saç Bakım Şampuanı Argan Yağı & Hibiskus Özü Dökülme Karşıtı & Güçlü Uzamayı Destekleyici 400 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "8683130059203",
    "name": "Elidor Brezilya Keratin Terapisi Keratin Bakım Kürü 90 ml",
    "source": "local_rossmann"
  },
  {
    "barcode": "8683130060506",
    "name": "Elidor Superblend Sıvı Saç Bakım Kremi Anında Onarıcı C Vitamini Keratin Seramid 200 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "8683130064238",
    "name": "Vaseline Nemlendirici Jel Krem Original 50 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8683130064252",
    "name": "Vaseline Nemlendirici Jel Cocoa Butter 100 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8683130064253",
    "name": "Vaseline Nemlendirici Jel Cocoa Butter 100 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "8683130064481",
    "name": "Clear Scalpceuticals Saç Bakım Şampuanı Saç Dökülmesine Karşı 300 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8683130065082",
    "name": "Clear Men Kepeğe Karşı Etkili Şampuan Hızlı Stil 2'si 1 Arada Kolay Şekil Alan Saçlar 350 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8683130067308",
    "name": "Clear Men 3in1 Şampuan ve Duş Jeli Ferahlatıcı Mentol 350 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "8683130067314",
    "name": "Clear Men 3 in 1 Şampuan & Duş Jeli Arındırıcı Kömür Saç Yüz Vücut İçin 350 ml",
    "source": "local_rossmann"
  },
  {
    "barcode": "8683130067315",
    "name": "Clear Men 3in1 Şampuan ve Duş Jeli Arındırıcı Kömür 350 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "8683130067321",
    "name": "Clear Men 3 in 1 Şampuan & Duş Jeli Arındırıcı Kömür 350 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8683130067345",
    "name": "Clear Men 3 in 1 Şampuan & Duş Jeli Ferahlatıcı Mentol 350 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8683130069004",
    "name": "Clear Men Kepeğe Karşı Etkili Şampuan Saç Dökülmesine Karşı 350 ml + 180 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8683130069028",
    "name": "Clear Women Kepeğe Karşı Etkili Şampuan Saç Dökülmesine Karşı 350 ml + 180 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8683130069042",
    "name": "Clear Men Kepeğe Karşı Etkili Şampuan Cool Sport Menthol 350 ml + 180 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8683130076620",
    "name": "Vaseline Vücut Losyonu Hassas Bakım Kuru Çok Kuru ve Hassas Ciltler İçin 200 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8683130076637",
    "name": "Vaseline Vücut Losyonu Aloe Vera Ferahlığı Kuru Ciltler İçin 200 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8683130076651",
    "name": "Vaseline Vücut Losyonu Kakao Işıltısı Parlaklığını Kaybetmiş ve Kuru Ciltler İçin 200 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8683130076699",
    "name": "Vaseline Vücut Losyonu Temel Onarım Kuru Ciltler İçin 200 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8683130082690",
    "name": "Clear Women Kepeğe Karşı Etkili Saç Bakım Şampuanı Hyaluron Nem Terapisi 350 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8683130082706",
    "name": "Clear Women Kepeğe Karşı Etkili Saç Bakım Serumu Hyaluron Nem Terapisi 90 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "8683130083024",
    "name": "Elidor Summer Rescue Saç Sütü 200 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8683130084151",
    "name": "Dove Saç Bakım Maskesi 10'u 1 Arada Bond Intense Repair + Peptid Kompleksi 265 ml",
    "source": "local_rossmann"
  },
  {
    "barcode": "8683130085066",
    "name": "Vaseline Lip Therapy Dudak Bakım Kremi Aloe Vera 4.8 gr",
    "source": "local_gratis"
  },
  {
    "barcode": "8683130085080",
    "name": "Vaseline Lip Therapy Dudak Bakım Kremi Cocoa Butter 4.8 gr",
    "source": "local_gratis"
  },
  {
    "barcode": "8683130085103",
    "name": "Vaseline Lipstick Mint Etkili 4.8 g",
    "source": "local_watsons"
  },
  {
    "barcode": "8683130085127",
    "name": "Vaseline Lip Therapy Dudak Bakım Kremi Original 4.8 gr",
    "source": "local_gratis"
  },
  {
    "barcode": "8683130085158",
    "name": "Vaseline Lip Therapy Dudak Bakım Kremi Rosy Lips 4.8 gr",
    "source": "local_gratis"
  },
  {
    "barcode": "8683130086254",
    "name": "Elidor Brezilya Keratin Terapisi Seyahat Boy Şampuan 90 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8683130086261",
    "name": "Elidor Brezilya Keratin Terapisi Seyahat Boy Sıvı Saç Bakım Sütü 90 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8683130086285",
    "name": "Elidor Brezilya Keratin Terapisi Seyahat Boy Serum Bakım Kremi 90 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8683130086292",
    "name": "Clear Men 3in1 Ferahlatıcı Mentol Seyahat Boy Şampuan & Duş Jeli 90 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8683130089743",
    "name": "Clear Men Legends Vinicius Junior Şampuan 350 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8683130095805",
    "name": "Elidor Ultra Işıltı Yoğun Parlaklık Saç Kurtarıcı Sprey 200 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8683130095812",
    "name": "Elidor Ultra Işıltı Yoğun Parlaklık Işıltı Serumu 90 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8683130095829",
    "name": "Elidor Ultra Işıltı Yoğun Parlaklık Saç Bakım Şampuanı 400 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8683130095836",
    "name": "Elidor Ultra Işıltı Yoğun Parlaklık Yoğun Onarıcı Maske 220 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8683130095843",
    "name": "Elidor Ultra Işıltı Yoğun Parlaklık Saç Bakım Kremi 350 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8683130097915",
    "name": "Clear Men 3in1 Yağlanma Karşıtı Lime Özü Şampuan & Duş Jeli 350 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8683130108000",
    "name": "Clear Men Şampuan Ronaldo 500 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "8683130108505",
    "name": "Elidor Şampuan Anında Onarıcı 650 ml",
    "source": "local_rossmann"
  },
  {
    "barcode": "8683130108506",
    "name": "Elidor Şampuan Anında Onarıcı 650 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "8683130108529",
    "name": "Elidor Superblend Şampuan Anında Onarıcı Bakım 500 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8683130108537",
    "name": "Elidor Şampuan Onarıcı Bakım 325 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "8683130108543",
    "name": "Elidor Anında Onarıcı Saç Bakım Şampuanı 400 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8683130108598",
    "name": "Elidor Belirgin Bukleler Şampuan 400 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8683130108604",
    "name": "Elidor Şampuan ve Saç Bakım Kremi Güçlü ve Parlak 400 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8683130108635",
    "name": "Elidor Şampuan Güçlü Parlak 500 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "8683130108642",
    "name": "Elidor Şampuan Güçlü Parlak 650 ml",
    "source": "local_rossmann"
  },
  {
    "barcode": "8683130108643",
    "name": "Elidor Şampuan Güçlü Parlak 650 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "8683130108674",
    "name": "Elidor Şampuan Güçlü ve Parlak 325 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "8683130108680",
    "name": "Elidor Güçlü ve Parlak Saç Bakım Şampuanı 400 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8683130108741",
    "name": "Elidor İpek Terapisi Şampuan 400 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8683130108758",
    "name": "Elidor Şampuan ve Saç Bakım Kremi Kepeğe Karşı Etkili 400 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8683130108772",
    "name": "Elidor Brezilya Keratin Terapisi Saç Bakım Şampuanı 400 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8683130108773",
    "name": "Elidor Saç Bakım Şampuanı Brezilya Keratin Terapisi 400 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "8683130108819",
    "name": "Elidor Şampuan Seyahat Boy Keratin 90 ml",
    "source": "local_rossmann"
  },
  {
    "barcode": "8683130108826",
    "name": "Elidor Saç Bakım Şampuanı Saç Dökülmelerine Karşı 400 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8683130110973",
    "name": "Elidor Anında Onarıcı Saç Maskesi 220 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8683130110980",
    "name": "Elidor Anında Onarıcı Sıvı Saç Bakım Kremi 200 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8683130110997",
    "name": "Elidor Anında Onarıcı Yıpranmış Saçlar İçin Kurtarıcı Saç Bakım Kremi 240 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8683130110998",
    "name": "Elidor 7/24 Kurtarıcı Saç Bakım Kremi Anında Onarıcı Yıpranmış Saçlar 240 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "8683130111017",
    "name": "Elidor Avokado ve Castor Yağı Nemlendirici Etki Saç Bakım Yağı 80 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8683130111024",
    "name": "Elidor Belirgin Bukleler Şekillendirici Saç Bakım Kremi Dalgalı ve Kıvırcık Saçlar 240 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8683130111025",
    "name": "Elidor 7/24 Şekillendirici Bakım Kremi Belirgin Bukleler 240 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "8683130111031",
    "name": "Elidor Belirgin Bukleler Deniz Tuzu Etkili Saç Spreyi 190 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8683130111048",
    "name": "Elidor Güçlü ve Parlak Yoğun Saç Bakım Maskesi 220 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8683130111055",
    "name": "Elidor Güçlü ve Parlak Sıvı Saç Bakım Kremi 200 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8683130111062",
    "name": "Elidor Güçlü ve Parlak Kuru ve Mat Saçlar İçin Şekillendirici Saç Bakım Kremi 240 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8683130111063",
    "name": "Elidor 7/24 Şekillendirici Saç Bakım Kremi Güçlü ve Parlak Kuru ve Mat Saçlar 240 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "8683130111079",
    "name": "Elidor Hindistan Cevizi Yumuşaklığı Saç Bakım Yağı 80 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8683130111093",
    "name": "Elidor İpek Terapisi Elektriklenme Karşıtı Saç Bakım Serumu 80 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8683130111109",
    "name": "Elidor Brezilya Keratin Terapisi Yoğun Onarıcı Saç Bakım Maskesi 220 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8683130111110",
    "name": "Elidor Brezilya Keratin Terapisi Yoğun Onarıcı Saç Maskesi 220 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "8683130111116",
    "name": "Elidor Brezilya Keratin Terapisi Keratin Bakım Kürü 90 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8683130111117",
    "name": "Elidor Isı İle Aktifleşen Keratin Bakım Kürü Brezilya Keratin Terapisi Hidrolize Keratin Marula Yağı E Vitamini 90 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "8683130111130",
    "name": "Elidor Superblend Sıvı Saç Bakım Kremi Sağlıklı Uzayan Saçlar Biotin Argan Yağı Arjinin 200 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "8683130111161",
    "name": "Elidor Saç Dökülmelerine Karşı Tonik 90 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8683130111178",
    "name": "Elidor Sıvı Saç Bakım Sütü Keratin 90 ml",
    "source": "local_rossmann"
  },
  {
    "barcode": "8683130111192",
    "name": "Elidor Brezilya Keratin Terapisi Sıvı Saç Bakım Sütü 200 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8683130111193",
    "name": "Elidor Sıvı Saç Bakım Sütü Brezilya Keratin Terapisi Hidrolize Keratin Marula Yağı E Vitamini 200 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "8683130111819",
    "name": "Elidor Avokado ve Castor Yağı Nemlendirici Etki Saç Bakım Kremi 350 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8683130111833",
    "name": "Elidor İpek Terapisi Saç Bakım Kremi 350 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8683130111840",
    "name": "Elidor Biberiye Dökülme Karşıtı Saç Bakım Kremi 350 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8683130111888",
    "name": "Elidor Belirgin Bukleler Saç Bakım Kremi 350 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8683130111896",
    "name": "Elidor Saç Kremi Keratin 90 ml Seyahat Boy",
    "source": "local_watsons"
  },
  {
    "barcode": "8683130111925",
    "name": "Elidor Anında Onarıcı Saç Bakım Kremi 350 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8683130111949",
    "name": "Elidor Brezilya Keratin Terapisi Saç Bakım Kremi 350 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8683130111950",
    "name": "Elidor Serum Bakım Kremi Brezilya Keratin Terapisi Hidrolize Keratin Marula Yağı E Vitamini 350 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "8683130111956",
    "name": "Elidor Hindistan Cevizi Yumuşaklığı Saç Kremi 350 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8683130111963",
    "name": "Elidor Saç Bakım Kremi Saç Dökülmelerine Karşı 350 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8683130111987",
    "name": "Elidor Güçlü ve Parlak Saç Bakım Kremi 350 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8683130117323",
    "name": "Vaseline Vücut Losyonu Aloe Vera Ferahlığı Kuru Ciltler İçin 400 ml",
    "source": "local_rossmann"
  },
  {
    "barcode": "8683130117439",
    "name": "Vaseline Vücut Losyonu Kakao Işıltısı Parlaklığını Kaybetmiş ve Kuru Ciltler İçin 400 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8683130120057",
    "name": "Clear Men Kepeğe Karşı Etkili Şampuan Scalp Maxcharge Oracle Red Bull Racing 330 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8683130125748",
    "name": "Clear Men Legends Kenan Yıldız Ultra Hacim Şampuan 350 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8683130125960",
    "name": "Elidor Biberiye Dökülme Karşıtı Saç Bakım Yağı 80 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8683130125984",
    "name": "Elidor Biberiye Dökülme Karşıtı Tonik 90 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8683130126004",
    "name": "Elidor Hindistan Cevizi Yumuşaklığı Fön Sütü 190 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8683130126721",
    "name": "Elidor Keratin Saç Bakım Seti Seyahat Boy",
    "source": "local_watsons"
  },
  {
    "barcode": "8683130127032",
    "name": "Elidor Biberiye Dökülme Karşıtı Şampuan 400 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8683130127049",
    "name": "Elidor Avokado ve Castor Yağı Nemlendirici Etki Şampuan 400 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8683130127056",
    "name": "Elidor Hindistan Cevizi Yumuşaklığı Şampuan 400 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8683130127827",
    "name": "Dove Peptit Bond Repair Çift Fazlı Saç Serumu 80 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8683130127841",
    "name": "Dove Peptit Bond Repair Saç Bakım Kremi 150 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8683130127872",
    "name": "Dove Coconut Oil Besleyici Terapi Saç Güzelleştirici Krem 150 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8683130127889",
    "name": "Dove Amino Serum Yoğun Onarıcı Saç Bakım Kremi 150 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8683130127896",
    "name": "Dove Keratin Uzun Saç Terapisi Saç Bakım Kremi 350 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8683130127902",
    "name": "Dove Peptit Bond Repair Saç Bakım Maskesi 265 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8683130127919",
    "name": "Dove Amino Serum Yoğun Onarıcı Saç Bakım Maskesi 265 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8683130127926",
    "name": "Dove Amino Serum Yoğun Onarıcı Çift Fazlı Saç Serumu 80 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8683130127933",
    "name": "Dove Coconut Oil Besleyici Terapi Saç Bakım Kremi 350 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8683130127940",
    "name": "Dove Amino Serum Yoğun Onarıcı Saç Bakım Kremi 350 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8683130127957",
    "name": "Dove Avocado Dökülme Karşıtı Saç Bakım Kremi 350 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8683130127964",
    "name": "Dove Coconut Oil Besleyici Terapi Saç Bakım Maskesi 265 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8683130127971",
    "name": "Dove Amino Serum Yoğun Onarıcı Şampuan 375 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8683130127988",
    "name": "Dove Avocado Dökülme Karşıtı Şampuan 375 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8683130127995",
    "name": "Dove Coconut Oil Besleyici Terapi Şampuan 375 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8683130128008",
    "name": "Dove Keratin Uzun Saç Terapisi Şampuan 375 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8683130128015",
    "name": "Dove Peptit Bond Repair Şampuan 375 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8683130129234",
    "name": "Dove Keratin Uzun Saç Terapisi Kırık Önleyici Krem 150 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8683130129241",
    "name": "Dove Peptit Bond Repair Kurtarıcı Onarıcı Saç Bakım Kremi 250 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8683130129258",
    "name": "Dove Amino Serum Yoğun Onarıcı Şampuan 600 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8683130129357",
    "name": "Vaseline Colour Care Renkli Dudak Bakım Kremi Kissing Red",
    "source": "local_gratis"
  },
  {
    "barcode": "8683130129395",
    "name": "Vaseline Colour Care Renkli Dudak Bakım Kremi Mellow Rose",
    "source": "local_gratis"
  },
  {
    "barcode": "8683130129418",
    "name": "Vaseline Colour Care Renkli Dudak Bakım Kremi Blooming Pink",
    "source": "local_gratis"
  },
  {
    "barcode": "8683130137314",
    "name": "Elidor İpek Terapisi Saç Güzelleştirici Bakım Kremi 130 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8683130137321",
    "name": "Elidor Anında Onarıcı SOS Kurtarıcı Saç Bakım Kremi 130 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8683130139646",
    "name": "Clear Men Special Edition FIFA World Cup Kepeğe Karşı Etkili Şampuan 330 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8683130139684",
    "name": "Vaseline Gluta Hya Serum Etkili Lip Gloss Cherry Crush 10 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8683130139721",
    "name": "Vaseline Gluta Hya Serum Etkili Lip Gloss Juicy Peach 10 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8683130139769",
    "name": "Vaseline Gluta Hya Serum Etkili Lip Gloss Rosy Pink 10 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8683130143155",
    "name": "Clear Şampuan Legend Kenan 500+350 ml Set",
    "source": "local_watsons"
  },
  {
    "barcode": "8683130145753",
    "name": "Vaseline Gluta Hya Serum Etkili Lip Gloss Royal Plum 10 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8683130231425",
    "name": "Vaseline Cloud Soft Nemlendirici Krem 300 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "8683130231463",
    "name": "Vaseline Cloud Soft Nemlendirici Krem 200 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "8683130232132",
    "name": "Elidor Brezilya Keratin Terapisi Saç Bakım Şampuanı 500 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8683130232156",
    "name": "Elidor Ultra Işıltı Yoğun Parlaklık Saç Bakım Şampuanı 500 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8683130232361",
    "name": "Dove Amino Serum Yoğun Onarıcı Şampuan 375 ml + Saç Bakım Kremi 200 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8683130232477",
    "name": "Clear Men Cool Sport Menthol Kepeğe Karşı Etkili Ekstra Büyük Boy Şampuan 895 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8683130232491",
    "name": "Clear Men Kepeğe ve Saç Dökülmesine Karşı Etkili Ekstra Büyük Boy Şampuan 895 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8683130232514",
    "name": "Clear Men Kenan Yıldız Ultra Hacim Kepeğe Karşı Etkili Ekstra Büyük Boy Şampuan 895 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8683130232828",
    "name": "Dove Yoğun Onarıcı Seyahat Boy Şampuan 90 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8683130232842",
    "name": "Dove Yoğun Onarıcı Seyahat Boy Saç Bakım Kremi 90 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8683130232881",
    "name": "Elidor Şampuan Onarıcı 650+325 ml Set",
    "source": "local_watsons"
  },
  {
    "barcode": "8683130232927",
    "name": "Elidor Anında Onarıcı Bakım Şampuan 400 ml + Serum Bakım Kremi 200 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8683130232941",
    "name": "Elidor Güçlü ve Parlak Şampuan 400 ml + Serum Bakım Kremi 200 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8683130232965",
    "name": "Elidor Şampuan Anında Onarıcı 880 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "8683130232989",
    "name": "Elidor Şampuan Güçlü Parlak 880 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "8683130234853",
    "name": "Elidor Belirgin Bukleler 7/24 Şekillendirici Saç Bakım Kremi 240 ml x 2",
    "source": "local_gratis"
  },
  {
    "barcode": "8683270542016",
    "name": "Korelya Gözenek Sıkılaştırıcı Yüz Serumu 30 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8683270542986",
    "name": "Korelya Gözenek Sıkılaştırıcı Tonik 200 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8683288543173",
    "name": "She Vec Just Protected From Sun 50Spf 50 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "8683288543333",
    "name": "She Vec Any Time Of Day 48 Saat Etkili Su Bazlı Nemlendirici Yüz Kremi 50 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8683288543334",
    "name": "She Vec Any Time Of Day Nemlendirici Krem 50 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "8683288543364",
    "name": "She Vec Glyc-Alright Gözenek Sıkılaştırıcı ve Leke Karşıtı Tonik 200 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8683288543365",
    "name": "She Vec Glyc Alright Gözenek Sıkılaştırıcı Tonik 200 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "8683288543371",
    "name": "She Vec Slyc-Alright Akne ve Siyah Nokta Karşıtı Gözenek Sıkılaştırıcı Tonik 200 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8683288543372",
    "name": "She Vec Slyc Alright Salisilik Asit Tonik 200 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "8683288543388",
    "name": "She Vec Rice Rice Baby Aydınlatıcı ve Nemlendirici Leke Karşıtı Tonik 200 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8683288543389",
    "name": "She Vec Rice Rice Baby Aydınlatıcı Tonik 200 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "8683288543396",
    "name": "She Vec Rice Vibes Only Aydınlatıcı Maske 50 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "8683288543402",
    "name": "She Vec Rice You Up Aydınlatıcı Serum 30 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "8683288543418",
    "name": "She Vec Hi Girls Bye Pores Gözenek Sıkılaştırıcı ve Leke Karşıtı Yüz Serumu 30 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8683288543419",
    "name": "She Vec Hi Girls By Pores Akne ve Leke Karşıtı Serum 30 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "8683288543425",
    "name": "She Vec Glow Me Like You Do Aydınlatıcı, Leke Karşıtı ve Ton Eşitleyici Yüz Serumu 30 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8683288543426",
    "name": "She Vec Glow Me Like You Do C Vitaminli Aydınlatıcı Serum 30 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "8683288543450",
    "name": "She Vec Hydra Back Baby Nemlendirici Serum 30 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "8683288543463",
    "name": "She Vec Power De-Puff Girls Göz Altı Torbalanma ve Koyu Halka Karşıtı Göz Çevresi Serumu 30 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8683288543586",
    "name": "She Vec Tonik Rice Rice Baby Aydınlatıcı 200 ml",
    "source": "local_rossmann"
  },
  {
    "barcode": "8683288559587",
    "name": "Intenpure Mor Argan Saç Bakım Yağı 30 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8683348001254",
    "name": "Bee Beauty Orman Meyveli Sirke ve Saç Toniği 400 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8683348001551",
    "name": "Agiss Sir Ağda Bantları 55'li Ekonomik Paket (Tüm Vücut)",
    "source": "local_gratis"
  },
  {
    "barcode": "8683348001605",
    "name": "Agiss Tüy Dökücü Krem Sprey 175 ml (Hassas Ciltler)",
    "source": "local_gratis"
  },
  {
    "barcode": "8683348001612",
    "name": "Agiss Tüy Dökücü Krem Sprey 175 ml (Normal Ciltler)",
    "source": "local_gratis"
  },
  {
    "barcode": "8683348002275",
    "name": "Agiss Sir Ağda Bantları 40'lı Ekonomik Paket (Yüz - Koltuk Altı - Bikini)",
    "source": "local_gratis"
  },
  {
    "barcode": "8683348003999",
    "name": "Agiva Care&Beauty Ylang Ylang Lipozomed C Saç Köpüğü Flexıble Hold 200 ml",
    "source": "local_rossmann"
  },
  {
    "barcode": "8683348004125",
    "name": "Agiva Care&Beauty Ylang Ylang Lipozomed C Saç Spreyi Maximum Hold 250 ml",
    "source": "local_rossmann"
  },
  {
    "barcode": "8683348004385",
    "name": "Agiva Ylang Ylang Lipozomed C Miracle Saç Pudrası 20 gr",
    "source": "local_gratis"
  },
  {
    "barcode": "8683348004392",
    "name": "Agiva Milk Protein Miracle Saç Pudrası 20 gr",
    "source": "local_gratis"
  },
  {
    "barcode": "8683348004927",
    "name": "Agiva Care & Beauty Vücut Losyonu Mango Papaya 500 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8683348004958",
    "name": "Agiva Care & Beauty Vücut Losyonu Dubai Chocolate 500 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8683348004972",
    "name": "Agiva Care & Beauty Vücut Peeling Mango Papaya 300 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8683348004989",
    "name": "Agiva Care & Beauty Dubai Chocolate Vücut Peeling 300 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8683348004996",
    "name": "Agiva Care & Beauty Vücut Peeling Mandarin Waffle 300 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8683348005740",
    "name": "Agiva AHA Mango Şeftali Vücut Peelingi 300 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "8683348005757",
    "name": "Agiva AHA Çilek Vücut Peeling 300 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "8683348005764",
    "name": "Agiva Nemleyici Besleyici Vücut Losyonu Mango Şeftali 300 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "8683348005771",
    "name": "Agiva Nemleyici Besleyici Vücut Losyonu Çilek 300 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "8683420170588",
    "name": "Soho N.Y.C. Saç Bakım Spreyi Yıpranmış Saçlar İçin 245 ml",
    "source": "local_rossmann"
  },
  {
    "barcode": "8683517124036",
    "name": "Skin Sensual Vita-C Ton Eşitleyici Serum 30 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "8683517124099",
    "name": "Skin Sensual Adios Dark Circle Göz Altı Serum 30 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "8683517124227",
    "name": "Skin Sensual Magic Milk Baz Nemlendirici Maske 50 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "8683517124723",
    "name": "Skin Sensual Jojoba Oil Shea Butter 24 Saat Etkili Nemlendirici 50 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "8683517124839",
    "name": "Skin Sensual Magic Eye Duo Göz Kremi Light To Medium 15 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "8683517124846",
    "name": "Skin Sensual Magic Eye Duo Göz Kremi Medium To Dark 15 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "8683517124852",
    "name": "Skin Sensual Deep & Soothing Temizleme Yağı 200 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "8683548273024",
    "name": "Rimu Health Canlandırıcı ve Cilt Tonu Eşitleyici Yüz Peeling Serum 30 ml (AHA %10 + BHA %2)",
    "source": "local_gratis"
  },
  {
    "barcode": "8683548273031",
    "name": "Rimu Health Gözenek Sıkılaştırıcı Siyah Nokta ve Sivilce Karşıtı Serum 30 ml (Niacinamide %6 + Zinc",
    "source": "local_gratis"
  },
  {
    "barcode": "8683548273048",
    "name": "Rimu Health Cilt Tonu Eşitleyici ve Lekeli Ciltler İçin Yüz Serumu 30 ml (Arbutin %2 + Hyaluronic Ac",
    "source": "local_gratis"
  },
  {
    "barcode": "8683548273055",
    "name": "Rimu Health Gözenek Sıkılaştırıcı ve Arındırıcı Tonik 200 ml (Glycolic Acid %6 AHA BHA)",
    "source": "local_gratis"
  },
  {
    "barcode": "8683548273116",
    "name": "Rimu Health Tüm Cilt Tipleri İçin Parfümsüz Yoğun Nemlendirici Serum 30 ml (Hyaluronic Acid %2 + B5)",
    "source": "local_gratis"
  },
  {
    "barcode": "8683548273192",
    "name": "Rimu Health Göz Altı Aydınlatıcı Ve Kırışıklık Karşıtı Bakım Serumu 30 ml (Caffeine %6 - Regu Age)",
    "source": "local_gratis"
  },
  {
    "barcode": "8683548273314",
    "name": "Rimu Health Cilt Tonu Eşitleyici ve Yoğun Nemlendirici Yüz Kremi 50 ml (Hyaluronic Acid - Niacinamid",
    "source": "local_gratis"
  },
  {
    "barcode": "8683561170010",
    "name": "Pure Choice Aydınlatıcı C Vitamini Bakım Serumu 30 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8683561170027",
    "name": "Pure Choice Yoğun Nemlendirici ve Onarıcı Bakım Serumu 30 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8683561170034",
    "name": "Pure Choice Leke Karşıtı Cilt Beyazlatıcı Serum 30 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8683561170041",
    "name": "Pure Choice Akne Karşıtı Gözenek Sıkılaştırıcı Tonik 200 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8683561170058",
    "name": "Pure Choice Leke Karşıtı Cilt Beyazlatıcı Tonik 200 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8683561170065",
    "name": "Pure Choice Ginseng Bakım Serumu 30 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8683561170089",
    "name": "Pure Choice Gözenek Sıkılaştırıcı Yüz ve Cilt Bakım Serumu 30 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8683561170096",
    "name": "Pure Choice Hassas Ciltler İçin Yüz Temizleme Jeli 400 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8683561170102",
    "name": "Pure Choice Karma ve Yağlı Ciltler İçin Yüz Temizleme Jeli 400 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8683561170119",
    "name": "Pure Choice Leke Karşıtı Cilt Bakım Kremi 75 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8683561170126",
    "name": "Pure Choice Aydınlatıcı ve Canlandırıcı Cilt Bakım Kremi 75 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8683561170133",
    "name": "Pure Choice Yoğun Nemlendirici ve Besleyici Cilt Bakım Kremi 75 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8683561170157",
    "name": "Pure Choice Azelaik Asit Serum 30 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8683561170164",
    "name": "Pure Choice X Çisem Çakır Bariyer Güçlendirici Cilt Bakım Kremi 75 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8683561170188",
    "name": "Pure Choice Retinol Serum 30 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8683561170201",
    "name": "Pure Choice Hassas Ciltler İçin Yüz Temizleme Jeli 200 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8683561170218",
    "name": "Pure Choice Karma ve Yağlı Ciltler İçin Yüz Temizleme Jeli 200 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8683561170225",
    "name": "Pure Choice Yüz ve Vücut İçin Temizleme Yağı 200 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8683561170232",
    "name": "Pure Choice Çift Fazlı Nemlendirici Sprey Tonik 200 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8683561170249",
    "name": "Pure Choice Peptit Kompleks Serum 30 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8683583823062",
    "name": "Intenpure Argan Yağlı Onarıcı & Nemlendirici Saç Maskesi 300 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8683583823116",
    "name": "Intenpure Onarıcı & Nemlendirici Saç Vitamini 10 Kapsül",
    "source": "local_gratis"
  },
  {
    "barcode": "8683583823215",
    "name": "Intenpure Kabarık Saç Şekillendirici Saç Vitamini 10 Kapsül",
    "source": "local_gratis"
  },
  {
    "barcode": "8683583823222",
    "name": "Intenpure Nemlendirici Saç Vitamini 10 Kapsül",
    "source": "local_gratis"
  },
  {
    "barcode": "8683583823307",
    "name": "Cheeky Chic Step 3 Repair Leave-In Treatment Durulanmayan Yapılandırıcı Saç Bakım Kremi 100 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8683583823314",
    "name": "Cheeky Chic Step 1 Repair Shampoo Onarıcı ve Güçlendirici Şampuan 250 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8683583823321",
    "name": "Cheeky Chic Step 2 Repair Conditioner Onarıcı Saç Kremi 250 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8683583823338",
    "name": "Cheeky Chic Step 4 Repair Oil Onarıcı ve Güçlendirici Saç Bakım Yağı 100 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8683723517011",
    "name": "Derminix Vitamin Bomb Serum 30 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "8683723517110",
    "name": "Derminix Yüz Temizleme Yağı 100 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "8683723517127",
    "name": "Derminix Yüz ve Vücut Güneş Kremi Sprey SPF50+ 150 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "8683723517141",
    "name": "Derminix Yüz Vücut Güneş Kremi Sprey SPF50+ 75 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "8683723517370",
    "name": "Derminix Nemlendirici Kağıt Maske Salatalık Özü 1 Adet",
    "source": "local_watsons"
  },
  {
    "barcode": "8683723517387",
    "name": "Derminix Arındırıcı Kağıt Maske Aktif Karbon ve Zencefil 1 Adet",
    "source": "local_watsons"
  },
  {
    "barcode": "8683723517394",
    "name": "Derminix Leke Önleyici Kağıt Maske Aloe Vera ve Amino Asit 1 Adet",
    "source": "local_watsons"
  },
  {
    "barcode": "8683723517400",
    "name": "Derminix Sıkılaştırıcı Kağıt Maske Rezene ve D-Panthenol 1 Adet",
    "source": "local_watsons"
  },
  {
    "barcode": "8683767633005",
    "name": "Cream Co. Hyaluronic Acid Peptide İnce Çizgi & Kırışıklık Karşıtı Yüz Serumu 30 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8683767633012",
    "name": "Cream Co. Moisturizer Leke Karşıtı Yüz Nemlendirici 50 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8683767633265",
    "name": "Cream Co. SOS Leke Karşıtı Yüz Serumu 30 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8683767633425",
    "name": "Cream Co. BHA/PHA Niacinamide Akne & Gözenek Karşıtı Tonik 200 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8683767633548",
    "name": "Cream Co. Cloud Moisturizer Bariyer Güçlendirici Yüz Nemlendirici 50 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8683767633692",
    "name": "Cream Co. Cloud Milk Bariyer Güçlendirici Yüz Serumu 30 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8683767633777",
    "name": "Cream Co. Tek Adımda Çift Aşamalı Temizlik Sağlayan Cream Temizleyici 150 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8683767633791",
    "name": "Cream Co. Yağ Bazlı Yüz Temizleyici 100 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8683767633876",
    "name": "Cream Co. Tea Tree Balance Akne & Gözenek Karşıtı Temizleme Jeli 400 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8683767633890",
    "name": "Cream Co. Hyaluronic Acid Glow Leke Karşıtı Temizleme Jeli 400 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8683767633906",
    "name": "Cream Co. Tea Tree Balance Akne & Gözenek Karşıtı Temizleme Jeli 100 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8683767633913",
    "name": "Cream Co. Hyaluronic Acid Glow Leke Karşıtı Temizleme Jeli 100 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8683767633982",
    "name": "Cream Co. Peptide Glow Kırışıklık Karşıtı Göz Kremi 15 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8683789032558",
    "name": "Torima H5 Saç Kurutma Makinesi Güçlü Saç Şekillendirici Pembe 1 Adet",
    "source": "local_rossmann"
  },
  {
    "barcode": "8683801151533",
    "name": "Edenland Saç Parfümü Bloom Aura 30 ml",
    "source": "local_rossmann"
  },
  {
    "barcode": "8683801151540",
    "name": "Edenland Saç Parfümü Serene Whisper 30 ml",
    "source": "local_rossmann"
  },
  {
    "barcode": "8683801151557",
    "name": "Edenland Saç Parfümü Golden Dew 30 ml",
    "source": "local_rossmann"
  },
  {
    "barcode": "8683801151571",
    "name": "Gelee Body Mist 626 Man, 1 Adet",
    "source": "local_rossmann"
  },
  {
    "barcode": "8683801152790",
    "name": "Newall Floral Satin Saç Parfümü 50 ml",
    "source": "local_rossmann"
  },
  {
    "barcode": "8683801152813",
    "name": "Newall Saç Parfümü Glow Shell 50 ml",
    "source": "local_rossmann"
  },
  {
    "barcode": "8683801152820",
    "name": "Newall Saç Parfümü Velvet Latte 50 ml",
    "source": "local_rossmann"
  },
  {
    "barcode": "8683801152837",
    "name": "Newall Saç Parfümü Choco Creme 50 ml",
    "source": "local_rossmann"
  },
  {
    "barcode": "8683801152844",
    "name": "Newall Saç Parfümü Berry Dream 50 ml",
    "source": "local_rossmann"
  },
  {
    "barcode": "8683801152974",
    "name": "More Conscius Living Matcha Pure Glow Cleansing Gel 200 ml",
    "source": "local_rossmann"
  },
  {
    "barcode": "8683801153001",
    "name": "More Conscius Living Matcha Niasinamide Glow Serum 30 ml",
    "source": "local_rossmann"
  },
  {
    "barcode": "8683801153032",
    "name": "More Conscius Living Matcha Light Balance Moisturizing Cream, 1 Adet",
    "source": "local_rossmann"
  },
  {
    "barcode": "8683801153063",
    "name": "More Conscius Living Matcha Enzyme Peeling Gel 150 ml",
    "source": "local_rossmann"
  },
  {
    "barcode": "8683801153094",
    "name": "More Conscius Living Matcha Refreshing Face Mist 100 ml",
    "source": "local_rossmann"
  },
  {
    "barcode": "8683801153124",
    "name": "More Conscius Living Matcha Pure Glow Toner 200 ml",
    "source": "local_rossmann"
  },
  {
    "barcode": "8683829431105",
    "name": "Duaderm Lipozom Gece Kremi 50 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "8683829431181",
    "name": "Duaderm Anti Brown Spot Yüz Güneş Kremi Spf50 50 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "8683829431211",
    "name": "Duaderm Arındırıcı ve Aydınlatıcı Peeling 55 g",
    "source": "local_watsons"
  },
  {
    "barcode": "8683829431243",
    "name": "Duaderm Serum Collagen 30 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "8683829431303",
    "name": "Duaderm Yüz Detoks Krem 50 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "8683829431365",
    "name": "Duaderm Kolajen Peptid Krem 50 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "8683829431372",
    "name": "Duaderm Bariyer Peptit Sprey Serum 50 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "8683829431390",
    "name": "Duaderm Natural Yoğun Bakım Kremi 50 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "8683829431396",
    "name": "D'Feys Nemlendirici & Yaşlanma Karşıtı Gündüz - Gece Bakım Yüz Kremi 50 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "8683829431402",
    "name": "D'Feys Ferahlatıcı ve Canlandırıcı Ginseng Serum 30 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "8683829431457",
    "name": "D'FEYS ARINDIRICI & LEKE KARŞITI TONİK 200ML",
    "source": "local_watsons"
  },
  {
    "barcode": "8683829431488",
    "name": "D'Feys Temizleyici ve Rahatlatıcı Micellar Makyaj Temizleme Suyu 200 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "8683829431501",
    "name": "Duaderm Natural Yüz&Vücut Güneş Kremi SPF50 100 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "8683829431525",
    "name": "D'Feys Nemlendirici Yüz Güneş Kremi Yüz ve Vücut Spreyi 50 SPF+ 100 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "8683829431556",
    "name": "Duaderm Yağ Bazlı Temzileyici 200 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "8683829431588",
    "name": "Duaderm Yüz ve Vücut Güneş Kremi Spf30 100 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "8683829431595",
    "name": "Duaderm Natural Göz Çevresi Bakım Kremi 15 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "8683829431617",
    "name": "Duaderm Arındırıcı ve Yatıştırıcı Yüz Temizleme Jeli 100 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "8683829431624",
    "name": "Duaderm Ton Eşitleyici Glycolic Tonic (Glycolic Acid 5% + BHA) 100 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "8683829431723",
    "name": "Duaderm Natural Yoğun Bronzlaştırıcı Yağ 200 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "8683829431747",
    "name": "Duaderm Natural Yüz ve Vücut Güneş Kremi Sprey SPF50 75 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "8683829431761",
    "name": "Duaderm Lipozom Yüz Temizleme Jeli 200 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "8683829431779",
    "name": "Duaderm Lipozom Glikolik Asitli Tonik 200 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "8683829431915",
    "name": "Duaderm Lipozom Niacinamide Serum 30 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "8683829431922",
    "name": "Duaderm Lipozom Göz Serumu 30 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "8683829431938",
    "name": "Duaderm %0,1 Retinol Serum 30 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "8683829431945",
    "name": "Duaderm Natural Bariyer Krem Koruyucu&Onarıcı 50 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "8683829431990",
    "name": "Duaderm Cilt Temizleme Köpüğü 150 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "8683835110179",
    "name": "Chi Infra Şampuan 355 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8683835110186",
    "name": "Chi Infra Treatment Saç Bakım Kremi 355 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8683835110193",
    "name": "Chi Infra Silk Infusion Saç Serumu 177 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8683835110209",
    "name": "Chi Keratin Şampuan 355 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8683835110216",
    "name": "Chi Keratin Saç Kremi 355 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8683835110223",
    "name": "Chi Keratin Silk Infusion Saç Serumu 177 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8683835110360",
    "name": "Chi Saç Serumu Infra Silk Infusion 177 ml",
    "source": "local_rossmann"
  },
  {
    "barcode": "8683835110377",
    "name": "Chi Saç Serumu Keratin Silk Infusion 177 ml",
    "source": "local_rossmann"
  },
  {
    "barcode": "8683835110384",
    "name": "Chi Argan Yağı ve Moringa Yağı Karışımı Şampuan 340 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8683835110391",
    "name": "Chi Argan Yağı ve Moringa Yağı Karışımı Saç Kremi 340 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8683835110407",
    "name": "Chi Çay Ağacı Yağı Karışımı Şampuan 340 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8683835110414",
    "name": "Chi Çay Ağacı Yağı Karışımı Saç Kremi 340 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8683873581054",
    "name": "Jowe Saç Mayonezi Maskesi 170 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8683873581184",
    "name": "Jowe Yenileyici ve Nemlendirici Çatlak Kremi 100 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8683873581214",
    "name": "Jowe Professional Nourishing Lip Oil, 6 ml",
    "source": "local_rossmann"
  },
  {
    "barcode": "8683873581221",
    "name": "Jowe Skin Clear Yüz Temizleme Jeli 200 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8683873581849",
    "name": "Jowe Bebek Saçı Şekillendirici Wax",
    "source": "local_gratis"
  },
  {
    "barcode": "8683989540006",
    "name": "Cosmogenesis Labs Vitamin C Yüz Serumu 30 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8683989540013",
    "name": "Cosmogenesis Labs Niacinamide Yüz Serumu 30 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8683989540020",
    "name": "Cosmogenesis Labs Retinol Yüz Serumu 30 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8683989540037",
    "name": "Cosmogenesis Labs Bitkisel Kolajen Yüz Serumu 30 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8683989540044",
    "name": "Cosmogenesis Labs Hyalüronik Asit Yüz Serumu 30 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8683989540051",
    "name": "Cosmogenesis Labs AHA+BHA Yüz Serumu 30 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8683989540068",
    "name": "Cosmogenesis Labs Ginseng Yüz Serumu 30 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8683989540082",
    "name": "Cosmogenesis Labs Arbutin Yüz Kremi 50 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8683989540099",
    "name": "Cosmogenesis Labs Yaşlanma Karşıtı ve Nemlendirici Gece Kremi 50 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8683989540105",
    "name": "Cosmogenesis Labs Ton Eşitleyici Vitamin C Krem Yüz Maskesi 50 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8683989540112",
    "name": "Cosmogenesis Labs Gözenek Sıkılaştırıcı ve Vitamin B3 Krem Yüz Maskesi 50 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8683989540129",
    "name": "Cosmogenesis Labs Kırışıklık Karşıtı Vitamin A Krem Yüz Maskesi 50 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8683989540136",
    "name": "Cosmogenesis Labs Yenileyici ve Bariyer Güçlendirici Ginseng Krem Yüz Maskesi 50 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8683989540143",
    "name": "Cosmogenesis Labs Sıkılaştırıcı ve Çatlak Karşıtı Selülit Kremi 300 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8683989540150",
    "name": "Cosmogenesis Labs Karma ve Yağlı Ciltler İçin Arındırıcı Sebum Dengeleyici Yüz Temizleme Jeli 400 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8683989540167",
    "name": "Cosmogenesis Labs AHA+BHA Yüz Toniği 200 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8683989540174",
    "name": "Cosmogenesis Labs Dolgunlaştırıcı ve Güçlendirici Kaş & Kirpik Serumu 3 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8683989540204",
    "name": "Cosmogenesis Labs Yüz ve Makyaj Temizleme Yağı 400 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8683989540389",
    "name": "Cosmogenesis Labs Hassas Ciltler İçin Nemlendirici Yüz Kremi 50 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8683989540396",
    "name": "Cosmogenesis Labs Akne Karşıtı Losyon 30 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8683989540402",
    "name": "Cosmogenesis Labs Parlatıcı ve Nemlendirici Kaş & Kirpik Maskesi 9,5 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8683989540419",
    "name": "Cosmogenesis Labs Bariyer Güçlendirici ve Nemlendirici Yüz Kremi 50 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8683989540426",
    "name": "Cosmogenesis Labs Göz Altı Aydınlatıcı Krem 20 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8683989540464",
    "name": "Cosmogenesis Labs Kuru ve Hassas Ciltler İçin Yüz Temizleme Jeli 400 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8683989540471",
    "name": "Cosmogenesis Labs Tiger Grass Cica Krem 15 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8684076786000",
    "name": "Ethereal Micellar Makyaj Temizleme Suyu 250 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8684076786017",
    "name": "Ethereal Yüz Toniği 200 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8684076786024",
    "name": "Ethereal Yüz Yıkama Jeli 150 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8684076786031",
    "name": "Ethereal Pro-Complex Yaşlanma Karşıtı Krem 50 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8684076786048",
    "name": "Ethereal Pro-Complex Yüz Serumu 30 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8684083320006",
    "name": "The Purest Solutions Refill Yağ.Dengeleyici Tonik 400 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "8684083320013",
    "name": "The Purest Solutions Refill Temizleme Jeli Nemlendirici 400 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "8684083320020",
    "name": "The Purest Solutions Refill Temizleme Jeli Arındırıcı 400 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "8684083320358",
    "name": "The Purest Solutions Hydration-Infused Smooth Temizleme Balmı 85 gr",
    "source": "local_gratis"
  },
  {
    "barcode": "8684083320525",
    "name": "The Purest Solutions Karma ve Kuru Cilt Temizleme Jeli 400 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8684083320570",
    "name": "The Purest Solutions Yağlı Cilt Temizleme Jeli 400 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8684083320624",
    "name": "The Purest Solutions Stick Yüksek Güneş Koruyucu SPF50+ Bariyer Onarıcı ve Yatıştırıcı 17 gr",
    "source": "local_rossmann"
  },
  {
    "barcode": "8684083320631",
    "name": "The Purest Solutions Bariyer Onarıcı Cica Serum 30 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8684083320648",
    "name": "The Purest Solutions Yenileyici & Yaşlanma Karşıtı 20+ Lipozomal Retinol Gece Serumu 30 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8684083320730",
    "name": "The Purest Solutions 72 Saat Etkili Sebum Dengeleyici Su Bazlı Günlük Nemlendirici Krem 50 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8684083320808",
    "name": "The Purest Solutions Aydınlatıcı PHA Tonik 200 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8684083320822",
    "name": "The Purest Solutions Kırışıklık Karşıtı Göz Çevresi Bakım Kremi 12 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8684083321423",
    "name": "The Purest Solutions Yüz Güneş Kremi SPF30 Mineral Filtreli 40 ml",
    "source": "local_rossmann"
  },
  {
    "barcode": "8684093480233",
    "name": "Hoito Superfood Leave-in Besleyici Durulanmayan Saç Bakım Maskesi 100 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8684093480356",
    "name": "Hoito Superfood Saç Dökülmesi Karşıtı Biberiye & Nane İçeren Saç ve Saç Derisi Bakım Yağı 50 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8684093480363",
    "name": "Hoito Superfood Dökülme Karşıtı Yoğun Parlaklık ve Hızlı Uzama Saç Bakım Şampuanı 250 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8684093480370",
    "name": "Hoito Superfood Saç Dökülmesi Karşıtı Organik Biberiye Suyu Saç ve Saç Derisi Bakım Toniği 200 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8684093480387",
    "name": "Hoito HelioMist Güneşin Zararlı Etkilerinden ve UV Işınlarına Karşı Koruma Sağlayan Saç Bakım Spreyi",
    "source": "local_gratis"
  },
  {
    "barcode": "8684093480394",
    "name": "Hoito Superfood Yoğun Nemlendirici Saç Bakım Şampuanı 250 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8684093480400",
    "name": "Hoito Superfood Saç Dökülmesi Karşıtı Karanfil Suyu & Posbiyotik Saç & Saç Derisi Bakım Toniği 200 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8684093480417",
    "name": "Hoito Superfood Bal & Posbiyotik & Bal Kabağı Yağı Durulanmayan Saç Bakım Sütü 150 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8684093480424",
    "name": "Hoito Silkproof Su ve Neme Karşı Dayanıklı Saç Bakım Spreyi 150 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8684149130020",
    "name": "The Ceel Biberiye Yağı 50 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8684149130051",
    "name": "The Ceel Vitamin C Serum 30 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8684149130112",
    "name": "The Ceel Ton Eşitleyici Pembe Yüz Güneş Kremi SPF50+ 50 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "8684149130334",
    "name": "The Ceel Gül Suyu Tonik 100 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8684149130983",
    "name": "The Ceel Biberiye Suyu Saç Toniği 100 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8684149130990",
    "name": "The Ceel Akne Karşıtı Serum 30 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8684149131140",
    "name": "The Ceel Cilt Beyazlatıcı Krem 50 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8684149131141",
    "name": "The Ceel Cilt Beyazlatıcı Krem 50 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "8684149131157",
    "name": "The Ceel Gözenek Sıkılaştırıcı & Arındırıcı Tonik 200 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8684149131165",
    "name": "The Ceel Leke Karşıtı Yüz Güneş Kremi SPF50+ 50 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "8684149131171",
    "name": "The Ceel Yoğun Onarıcı Nemlendirici Krem 50 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8684149131188",
    "name": "The Ceel Leke Karşıtı Bakım Serumu 30 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8684149131201",
    "name": "The Ceel Retinol Serum 30 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8684149131232",
    "name": "The Ceel Q10 Peeling Jel 100 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8684149131256",
    "name": "The Ceel Tüy İnceltici Süt 60 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8684149131508",
    "name": "The Ceel Göz Çevresi Bakım Kremi 12 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8684149131546",
    "name": "The Ceel Biberiye Şampuanı Dökülme Karşıtı ve Hızlı Uzamaya Yardımcı 250 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8684149132178",
    "name": "The Ceel Salisilik Asitli Niacinamide & Green Tea Yüz Toniği 200 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8684149132901",
    "name": "The Ceel Yoğun Nemlendirici Kolajen Maske 50 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8684149133045",
    "name": "The Ceel Kolay Taramaya Yardımcı Biberiye Saç Bakım Sütü Çift Fazlı 150 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8684149133052",
    "name": "The Ceel Besleyici ve Onarmaya Yardımcı Biberiye Saç Bakım Maskesi Shea Yağı Özlü 250 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8684149133601",
    "name": "The Ceel Saf Papatya Çiçeği Suyu 100 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8684149134127",
    "name": "The Ceel Retinal Shot Tightening Booster Retinal Yüz Kremi 15 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8684149134318",
    "name": "The Ceel Hydra Pro Intense Moisturizing Cream Yoğun Nemlendirici Yüz Kremi 50 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8684149134455",
    "name": "The Ceel Salmon DNA PDRN Onarıcı Nemlendirici Yüz Kremi 50 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8684149134462",
    "name": "The Ceel Salmon DNA PDRN Yoğun Nem ve Cilt Bakım Serumu 30 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8684149134554",
    "name": "The Ceel Salmon DNA PDRN Facial Cleanser Gel Yüz Temizleme Jeli 400 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8684149134561",
    "name": "The Ceel Salmon DNA PDRN Arındırıcı ve Dengeleyici Tonik 200 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8684149134622",
    "name": "The Ceel Akne Karşıtı Yüz Kremi 50 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8684149134639",
    "name": "The Ceel Pirinç Sütü Beyazlatıcı, Aydınlatıcı ve Nemlendirici Cilt Tonu Eşitleyici Yüz Toniği 200 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8684149134646",
    "name": "The Ceel Pirinç Sütü Nemlendirici Aydınlatıcı ve Leke Karşıtı Ton Eşitleyici 50+SPF Yüz Güneş Kremi",
    "source": "local_gratis"
  },
  {
    "barcode": "8684149134653",
    "name": "The Ceel Pirinç Sütü Beyazlatıcı Leke Karşıtı Aydınlatıcı ve Nemlendirici Yüz Kremi 50 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8684149134660",
    "name": "The Ceel Pirinç Sütü Aydınlatıcı ve Nemlendirici Leke Karşıtı Cilt Tonu Eşitleyici Yüz Serumu 30 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8684149134677",
    "name": "The Ceel Pirinç Sütü Aydınlatıcı ve Nemlendirici Yüz Temizleme Jeli 400 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8684184600090",
    "name": "Cosmed Temizleme Jeli Day to Day Hassas 200 ml",
    "source": "local_rossmann"
  },
  {
    "barcode": "8684184600144",
    "name": "Cosmed Ultra Nemlendirici ve Besleyici Krem Day to Day 40 ml",
    "source": "local_rossmann"
  },
  {
    "barcode": "8684184600145",
    "name": "Cosmed Day-To-Day Ultra Nemlendirici ve Besleyici Krem 40 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "8684184600175",
    "name": "Cosmed Complete Benefit Purifying Facial Cleanser Yağlı ve Akne Eğilimli Ciltlere Özel 200 ml",
    "source": "local_rossmann"
  },
  {
    "barcode": "8684184600199",
    "name": "Cosmed Complete Benefit Matifying & Rebalancing Cream 40 ml",
    "source": "local_rossmann"
  },
  {
    "barcode": "8684184600200",
    "name": "Cosmed Complete Benefit Dengeleyici Krem 40 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "8684184600205",
    "name": "Cosmed Complete Benefit Spot Control Gel 15 ml",
    "source": "local_rossmann"
  },
  {
    "barcode": "8684184600282",
    "name": "Cosmed Revolution Nemlendirici Göz Çevresi Kremi 15 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "8684184600342",
    "name": "Cosmed Atopia Cleansing Oil Yüz Temizleme Yağı 400 ml",
    "source": "local_rossmann"
  },
  {
    "barcode": "8684184600343",
    "name": "Cosmed Atopia Temizleme Yağı 400 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "8684184600427",
    "name": "Cosmed Atopia Lip Balm 15 ML",
    "source": "local_rossmann"
  },
  {
    "barcode": "8684184600434",
    "name": "Cosmed Atopia 4C Cica Cream Onarıcı Bakım 40 ml",
    "source": "local_rossmann"
  },
  {
    "barcode": "8684184600435",
    "name": "Cosmed Atopia 4C Cica Krem 40 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "8684184600618",
    "name": "Cosmed Sun Essential Dry Touch Cream Gel SPF50 40 ml",
    "source": "local_rossmann"
  },
  {
    "barcode": "8684184600694",
    "name": "Cosmed Sun Essential Invisible Sun Stick SPF50 20 gr",
    "source": "local_rossmann"
  },
  {
    "barcode": "8684184600779",
    "name": "Cosmed Day to Day C Vitamini ve Bromelain İçeren Temizleme Balmı 150 ml",
    "source": "local_rossmann"
  },
  {
    "barcode": "8684184601387",
    "name": "Cosmed Atopia Cleasing Oil Refill 400 ml",
    "source": "local_rossmann"
  },
  {
    "barcode": "8684184601684",
    "name": "Beauty Squad Jelly Cleanser Yağlı ve Akneli Ciltler İçin 350 ml",
    "source": "local_rossmann"
  },
  {
    "barcode": "8684184602377",
    "name": "Beauty Squad Salicylic Acid Anti Pollution Serum 30 ml",
    "source": "local_rossmann"
  },
  {
    "barcode": "8684184602940",
    "name": "Cosmed Alight Toz Enzim Peeling Arındırıcı ve Aydınlatıcı 19 gr",
    "source": "local_rossmann"
  },
  {
    "barcode": "8684190135265",
    "name": "Olalab Arındırıcı Bariyer Onarıcı Probiyotik İçerikli Makyaj Yüz Temizleme Jeli 200 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8684190135272",
    "name": "Olalab Akne, Siyah Nokta ve Leke Karşıtı Aydınlatıcı Sıkılaştırıcı %5 Glikolik Asit Tonik 200 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8684190135296",
    "name": "Olalab C Vitaminli Aydınlatıcı Leke Karşıtı Günlük Su Bazlı Nemlendirici Krem 50 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8684190135302",
    "name": "Olalab Leke Karşıtı Aydınlatıcı Alpha Arbutin Cilt Serumu 30 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8684190135319",
    "name": "Olalab Akne ve Siyah Nokta Karşıtı Gözenek Sıkılaştırıcı Niacinamide Cilt Serumu 30 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8684190135326",
    "name": "Olalab Yaşlanma Karşıtı Onarıcı Cilt Yenileyici Retinol Peptit Cilt Serumu 30 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8684190135357",
    "name": "Olalab Arındırıcı Makyaj Temizleyici Çift Aşamalı Yüz Temizleme Yağı 200 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8684190135364",
    "name": "Olalab Aydınlatıcı Bariyer Onarıcı Nemlendirici Ceramide & Vitamin C & Cica Serum 30 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8684190135371",
    "name": "Olalab Torbalanma Koyu Halka Karşıtı Aydınlatıcı Vitamin C & Peptit Göz Kremi 15 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8684190135388",
    "name": "Olalab İnce Çizgi Kırışıklık Karşıtı Sıkılaştırıcı Mikro-Alg & Peptit Göz Kremi 15 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8684190135395",
    "name": "Olalab Yaşlanma Karşıtı Yenileyici Nemlendirici Retinol Gece Yüz Kremi 50 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8684190750338",
    "name": "Panorama Professional Bond Plex Yoğun Onarıcı Çift Fazlı Sıvı Saç Bakım Kremi 400 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8684190750352",
    "name": "Panorama Professional Kırılma ve Hasar Önleyici Saç Bakım Maskesi 500 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8684190750413",
    "name": "Panorama Professional Kırılma ve Hasar Önleyici Çift Fazlı Sıvı Saç Bakım Kremi 400 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8684190750420",
    "name": "Panorama Professional Mega Hold Saç Köpüğü (6) 200 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8684190750451",
    "name": "Panorama Professional Ultra Hold Saç Spreyi (5) 400 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8684190750468",
    "name": "Panorama Professional Mega Hold Saç Spreyi (6) 400 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8684221140022",
    "name": "Skin401 -%2 Salisilik Asit BHA Arındırıcı, Gözenek Sıkılaştırıcı Siyah Nokta Karşıtı Tonik 200 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "8684221140039",
    "name": "Skin401 -%5 Glikolik Asit Aydınlatıcı Etkili & Leke Karşıtı Tonik Tonik 200 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "8684221140053",
    "name": "Skin401 Nemlendirici Yüz Temizleme Jeli 200 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "8684221140060",
    "name": "Skin401 Yoğun Nemlendirici Bariyer Güçlendirici Onarıcı Bakım Kremi 50 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "8684221140077",
    "name": "Skin401 Multipeptit Bakuchiol (Vegan Retinol) Yaşlanma ve Kırışıklık Karşıtı Krem 50 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "8684221140084",
    "name": "Skin401 Niacinamide Canlandırıcı ve Aydınlatıcı Krem 50 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "8684221140091",
    "name": "Skin401 Yatıştırıcı ve Onarıcı Cica Krem 50 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "8684221140107",
    "name": "Skin401 %10 Niacinamide Canlandırıcı ve Aydınlatıcı Serum 30 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "8684221140114",
    "name": "Skin401 %10 Vitamin C Aydınlatıcı Renk Tonu Eşitleyici Serum 30 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "8684221140121",
    "name": "Skin401 Arbutin %2 Cilt Tonu Eşitleyici Leke Karşıtı Serum 30 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "8684221140145",
    "name": "Skin401 SPF50+ Leke Karşıtı Aloe Vera Nemlendiricili Yüz Güneş Kremi 50 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "8684221140152",
    "name": "Skin401 Renewal Hyalüronik Asit + Peptide Serum 30 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "8684221140169",
    "name": "Skin401 Kalendula Özlü Yüz Temizleme Yağı 200 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "8684221140190",
    "name": "Skin401 %5 Azelaik Asit Serum 30 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "8684221140206",
    "name": "Skin401 %0.3 Retinol Serum 30 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "8684221140213",
    "name": "Skin401 Nemlendirici & Tazeleyici Yüz Güneş Kremi 50+ SPF50 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "8684221140220",
    "name": "Skin401 50+ SPF Pembe Ton Eşitleyici Yüz Güneş Kremi 50 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "8684221140237",
    "name": "Skin401 Mineral Filtre Yüz Güneş Kremi SPF50 50 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "8684221140312",
    "name": "Skin401 Göz Çevresi Retinol Bakım Kremi 20 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "8684221140329",
    "name": "Skin401 Arındırıcı Sülfür & Kömür Maskesi 75 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "8684221140336",
    "name": "Skin401 Biotin Keratin Kaş Kirpik Serumu 6,5 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "8684221140367",
    "name": "Skin401 Pirinç Özü Yüz Temizleme Jeli 200 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "8684221140374",
    "name": "Skin401 Pirinç Özü Dengeleyici Tonik 200 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "8684221140398",
    "name": "Skin401 Pirinç Özü Nemlendirici İpeksi Krem 50 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "8684221140404",
    "name": "Skin401 Aydınlatıcı ve Pürüzsüzleştirici Meyve Enzim Jel Maskesi 100 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "8684221140411",
    "name": "Skin401 Cica Yatıştırıcı Aydınlatıcı Tonik Ped 100 Adet",
    "source": "local_watsons"
  },
  {
    "barcode": "8684221140442",
    "name": "Skin401 Moisture Boost Ultra Nemlendirici Göz Kremi 20 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "8684221140459",
    "name": "Skin401 Hydra Care Yoğun Nemlendirici Yüz Vücut Losyonu 100 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "8684221390168",
    "name": "Bilge Öztürk Ton Eşitleyici Yüz Bakım Kremi SPF30 50 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "8684221509058",
    "name": "Anyong Cilt Tonu Eşitleyici Seti (Tonik 50 ml + Krem 20 ml + Serum 12 ml)",
    "source": "local_gratis"
  },
  {
    "barcode": "8684221509065",
    "name": "Anyong Akne Karşıtı Set (Tonik 50 ml + Krem 20 ml + Serum 12 ml)",
    "source": "local_gratis"
  },
  {
    "barcode": "8684221509072",
    "name": "Anyong Bariyer Onarıcı Set (Tonik 50 ml + Krem 20 ml + Serum 12 ml)",
    "source": "local_gratis"
  },
  {
    "barcode": "8684221509089",
    "name": "Anyong Nem Işıltısı Seti (Tonik 50 ml + Krem 20 ml + Serum 12 ml)",
    "source": "local_gratis"
  },
  {
    "barcode": "8684221509102",
    "name": "Anyong Nem Onarıcı Gece Yüz Maskesi 100 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8684221509119",
    "name": "Anyong Cilt ve Makyaj Temizleme Yağı 200 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8684221509126",
    "name": "Anyong Centalla Cica Arındırıcı Nazik Temizleme Jeli 200 ml",
    "source": "local_rossmann"
  },
  {
    "barcode": "8684221509270",
    "name": "Anyong Nemlendirici Krem Advanced Blemish Defense 50 ml",
    "source": "local_rossmann"
  },
  {
    "barcode": "8684221509300",
    "name": "Anyong Nemlendirici Krem Clarify Oil Free 50 ml",
    "source": "local_rossmann"
  },
  {
    "barcode": "8684221509317",
    "name": "Anyong Bariyer Destekleyici Tonik 200 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8684221509324",
    "name": "Anyong Bariyer Onarıcı Yüz Serumu 30 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8684221509331",
    "name": "Anyong Bariyer Yenileyici Gece Kremi 50 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8684221509362",
    "name": "Anyong Yoğun Nem Kremi 50 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8684221509430",
    "name": "Anyong Cica Rice Tonik Ped Leke Karşıtı 100'lü",
    "source": "local_rossmann"
  },
  {
    "barcode": "8684221509447",
    "name": "Anyong Tea Tree Bha Tonik Ped Gözenek Karşıtı 100'lü",
    "source": "local_rossmann"
  },
  {
    "barcode": "8684221509591",
    "name": "Anyong Saf Işıltı Makyaj ve Yüz Temizleme Balmı 50 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8684221509607",
    "name": "Anyong AHA %12 Vücut Losyonu 250 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8684221509638",
    "name": "Anyong Tırnak Bakım Seti (Bakım Serumu 20 ml + Peeling Serumu 20 ml)",
    "source": "local_gratis"
  },
  {
    "barcode": "8684221509652",
    "name": "Anyong Enzim Peeling Seti (Solüsyon 50 ml + Peeling Tozu 2 gr)",
    "source": "local_gratis"
  },
  {
    "barcode": "8684221509669",
    "name": "Anyong Cica Tiger Grass Ton Eşitleyici ve Kızarıklık Karşıtı Krem Light, 20 SPF 30 ml",
    "source": "local_rossmann"
  },
  {
    "barcode": "8684221509676",
    "name": "Anyong Cica Tiger Grass Ton Eşitleyici ve Kızarıklık Karşıtı Krem Medium, 20 SPF 30 ml",
    "source": "local_rossmann"
  },
  {
    "barcode": "8684221509683",
    "name": "Anyong Akne Karşıtı Losyon 30 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8684221509812",
    "name": "Anyong Timeless Glow Göz Kremi, 15 ml",
    "source": "local_rossmann"
  },
  {
    "barcode": "8684221509836",
    "name": "Anyong Yüz Maskesi Kil Gözenek Arındırıcı 7 ml",
    "source": "local_rossmann"
  },
  {
    "barcode": "8684221509843",
    "name": "Anyong Yüz Maskesi Soyulabilir Kolajen 7 ml",
    "source": "local_rossmann"
  },
  {
    "barcode": "8684221509850",
    "name": "Anyong Aydınlatıcı C Vitamini Soyulabilir Maske, 7 ml",
    "source": "local_rossmann"
  },
  {
    "barcode": "8684221509867",
    "name": "Anyong Nemlendirici Hyaluron Gece Maskesi, 7 ml",
    "source": "local_rossmann"
  },
  {
    "barcode": "8684221509874",
    "name": "Anyong Gözenek Arındırıcı Kil Yüz Maskesi 7 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8684221509881",
    "name": "Anyong Dolgunlaştırıcı Soyulabilir Kolajen Yüz Maskesi 7 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8684221509898",
    "name": "Anyong Aydınlatıcı C Vitamini Soyulabilir Yüz Maskesi 7 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8684221509904",
    "name": "Anyong Nemlendirici Hyalüron Gece Makesi 7 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8684221509911",
    "name": "Anyong PDRN 30.000 Somon DNA Yoğun Onarıcı Krem, 50 ml",
    "source": "local_rossmann"
  },
  {
    "barcode": "8684221509997",
    "name": "Anyong V Shape Multi Peptide Sıkılaştırıcı Roller Cream 100 ml",
    "source": "local_rossmann"
  },
  {
    "barcode": "8684221587094",
    "name": "Stick On Spots SOS Band Maxi Yüz ve Vücut 6'lı",
    "source": "local_rossmann"
  },
  {
    "barcode": "8684221587100",
    "name": "Stick on Spots Mixy Akne Bandı 24'lü",
    "source": "local_gratis"
  },
  {
    "barcode": "8684221587117",
    "name": "Stick on Spots Fun 20’li Akne Bandı",
    "source": "local_gratis"
  },
  {
    "barcode": "8684225875142",
    "name": "Pure Lueur Uçucu Yağ Limon 10 ml",
    "source": "local_rossmann"
  },
  {
    "barcode": "8684225875166",
    "name": "Pure Lueur Uçucu Yağ Lavanta 10 ml",
    "source": "local_rossmann"
  },
  {
    "barcode": "8684225875173",
    "name": "Pure Lueur Uçucu Yağ Biberiye 10 ml",
    "source": "local_rossmann"
  },
  {
    "barcode": "8684225875197",
    "name": "Pure Lueur Uçucu Yağ Nane 10 ml",
    "source": "local_rossmann"
  },
  {
    "barcode": "8684225875210",
    "name": "Pure Lueur Uçucu Yağ Kekik 10 ml",
    "source": "local_rossmann"
  },
  {
    "barcode": "8684225875241",
    "name": "Pure Lueur Uçucu Yağ Çay Ağacı 10 ml",
    "source": "local_rossmann"
  },
  {
    "barcode": "8684225875258",
    "name": "Pure Lueur Uçucu Yağ Gül 10 ml",
    "source": "local_rossmann"
  },
  {
    "barcode": "8684225875272",
    "name": "Pure Lueur Uçucu Yağ Aura Arttırıcı 10 ml",
    "source": "local_rossmann"
  },
  {
    "barcode": "8684225875289",
    "name": "Pure Lueur Uçucu Yağ Hürrem Intense 10 ml",
    "source": "local_rossmann"
  },
  {
    "barcode": "8684225890138",
    "name": "Thalia Vitamin C Vücut Serumu 50 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8684225890145",
    "name": "Thalia Leke Karşıtı Vücut Serumu 50 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8684225890152",
    "name": "Thalia Işıldayan Vücut Serumu 50 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8684225890169",
    "name": "Thalia Selülit Karşıtı Vücut Serumu 50 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8684225890244",
    "name": "Thalia Işıltılı Kuru Vücut Yağı 50 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8684225890251",
    "name": "Thalia After Epilation Body Gel Vücut Losyonu 150 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8684225890312",
    "name": "Thalia Saç Kremi Coconut Milk & Ananas Kuru & Yıpranmış Saçlar 150 ml",
    "source": "local_rossmann"
  },
  {
    "barcode": "8684225890459",
    "name": "Thalia Kokteyl Vücut Peelingi Elma 300 gr",
    "source": "local_gratis"
  },
  {
    "barcode": "8684225890466",
    "name": "Thalia Kokteyl Vücut Peelingi Hindistan Cevizi 300 gr",
    "source": "local_gratis"
  },
  {
    "barcode": "8684225890473",
    "name": "Thalia Kokteyl Vücut Peelingi Ahududu 300 gr",
    "source": "local_gratis"
  },
  {
    "barcode": "8684225890480",
    "name": "Thalia Kokteyl Vücut Peelingi Papaya 300 gr",
    "source": "local_gratis"
  },
  {
    "barcode": "8684225890572",
    "name": "Thalia Kokteyl Vücut Losyonu Elma 250 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8684225890589",
    "name": "Thalia Kokteyl Vücut Losyonu Hindistan Cevizi 250 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8684225890596",
    "name": "Thalia Kokteyl Vücut Losyonu Ahududu 250 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8684225890602",
    "name": "Thalia Kokteyl Vücut Losyonu Papaya 250 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8684225891395",
    "name": "Thalia Stick Güneş Kremi 50 SPF BB Ton Eşitleyici Açık Ten 20 ml",
    "source": "local_rossmann"
  },
  {
    "barcode": "8684225891418",
    "name": "Thalia Stick Güneş Kremi 50 SPF Yeni Nesil Filtreli Aydınlatıcı 20 ml",
    "source": "local_rossmann"
  },
  {
    "barcode": "8684225891456",
    "name": "Thalia Su Bazlı Güneş Kremi 50 SPF Yeni Nesil Hibrit Filtreli 50 ml",
    "source": "local_rossmann"
  },
  {
    "barcode": "8684225891883",
    "name": "Thalia The C'urea El Bakım Kremi 75 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8684225891937",
    "name": "Thalia Salisilik Asit Yüz Temizleme Jeli 200 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8684225891944",
    "name": "Thalia Hyaluronik Asit & Seramid İçerikli Yüz Temizleme Jeli 200 ml",
    "source": "local_rossmann"
  },
  {
    "barcode": "8684225891951",
    "name": "Thalia Bisabolol Yüz Temizleme Jeli 200 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8684225892101",
    "name": "Thalia Gül Yağı & E Vitamini Vücut Losyonu 400 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8684225892613",
    "name": "Thalia Gül Yağı & Panthenol Yüz Temizleme Köpüğü 150 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8684225892941",
    "name": "Thalia Saç Bakım Yağı Organik Argan 50 ml",
    "source": "local_rossmann"
  },
  {
    "barcode": "8684225892965",
    "name": "Thalia Saç Bakım Yağı Coconut 100 ml",
    "source": "local_rossmann"
  },
  {
    "barcode": "8684225892972",
    "name": "Thalia Saç Bakım Yağı Keratin 100 ml",
    "source": "local_rossmann"
  },
  {
    "barcode": "8684225892989",
    "name": "Thalia Saç Bakım Yağı Argan 100 ml",
    "source": "local_rossmann"
  },
  {
    "barcode": "8684225893160",
    "name": "Thalia Lip Gloss Tropic Pop 15 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8684225893177",
    "name": "Thalia Lip Gloss Mocha Breeze 15 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8684225893184",
    "name": "Thalia Lip Gloss Juicy Peach 15 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8684225893191",
    "name": "Thalia Lip Gloss Vanilla Creamy 15 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8684225893207",
    "name": "Thalia Lip Gloss Watermelon 15 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8684225893214",
    "name": "Thalia Lip Gloss Strawberry Pie 15 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8684225893238",
    "name": "Thalia Clay Stick Yüz Maskesi Charcool 30 gr",
    "source": "local_gratis"
  },
  {
    "barcode": "8684225893245",
    "name": "Thalia Clay Stick Yüz Maskesi Calmpink 30 gr",
    "source": "local_gratis"
  },
  {
    "barcode": "8684225893252",
    "name": "Thalia Pepthhydra Day Cream SPF20 Yüz Kremi 50 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8684225893269",
    "name": "Thalia Pepthydra Eye Cream Göz Kremi 15 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8684225893276",
    "name": "Thalia Pepthydra Night Cream Yüz Gece Kremi 50 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8684225893283",
    "name": "Thalia Pepthydra Yüz Serumu 30 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8684225893290",
    "name": "Thalia Barrier Boosting Gel Yüz Serumu 30 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8684225893306",
    "name": "Thalia Barrier Boosting Nemlendirici Yüz Kremi 50 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8684225893313",
    "name": "Thalia Barrier Boosting Makyaj Temizleme Suyu 200 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8684225893320",
    "name": "Thalia Barrier Boosting Tonik 200 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8684225893337",
    "name": "Thalia Barrier Boosting Yüz Temizleme Jeli 300 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8684225893351",
    "name": "Thalia Body Lotion Vücut Losyonu Nia-Squa 180 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8684225893368",
    "name": "Thalia Body Lotion Vücut Losyonu Cica-Squa 180 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8684225893375",
    "name": "Thalia Body Lotion Vücut Losyonu Aqua-Squa 180 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8684225893382",
    "name": "Thalia Body Lotion Vücut Losyonu Vita-Squa 180 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8684225893399",
    "name": "Thalia Pictachio Dream Saç Parfümü 100 ml",
    "source": "local_rossmann"
  },
  {
    "barcode": "8684225893405",
    "name": "Thalia Sparkling Vanilla Saç Parfümü 100 ml",
    "source": "local_rossmann"
  },
  {
    "barcode": "8684225893412",
    "name": "Thalia Sunny Bliss Saç Parfümü 100 ml",
    "source": "local_rossmann"
  },
  {
    "barcode": "8684225893429",
    "name": "Thalia Pink Lollies Saç Parfümü 100 ml",
    "source": "local_rossmann"
  },
  {
    "barcode": "8684225893436",
    "name": "Thalia Midnigt Muse Saç Parfümü 100 ml",
    "source": "local_rossmann"
  },
  {
    "barcode": "8684225893443",
    "name": "Thalia Parfüm Mist Golden Blossom 30 ml",
    "source": "local_rossmann"
  },
  {
    "barcode": "8684225893474",
    "name": "Thalia Parfüm Mist Glow Rush 30 ml",
    "source": "local_rossmann"
  },
  {
    "barcode": "8684225893481",
    "name": "Thalia Parfüm Mist Shock Vibe 30 ml",
    "source": "local_rossmann"
  },
  {
    "barcode": "8684232440005",
    "name": "Clara Hygienics Calming Cica Leke Karşıtı Tonik 400 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8684232440012",
    "name": "Clara Hygienics Niacinamide Booster Gözenek Sıkılaştırıcı Tonik 400 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8684232440043",
    "name": "Clara Hygienics Rosemary Touch Temizleme Jeli 400 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8684232440050",
    "name": "Clara Hygienics Chamomile Gleam Temizleme Yağı 400 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8684232440074",
    "name": "Clara Hygienics Hydrating Jojoba Nemlendirici Günlük Vücut Losyonu 200 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8684232440081",
    "name": "Clara Hygienics %5 Glikolik Asit Leke Giderici ve Aydınlatıcı Etkili Tonik 200 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8684232610309",
    "name": "Bolbe Pirinç Özlü, Arındırıcı, Aydınlatıcı, Günlük Yüz Temizleme Jeli 200 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8684232610316",
    "name": "Bolbe Hassas Ciltler İçin Yatıştırıcı, Bariyer Destekleyici Nem Toniği 200 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8684232610323",
    "name": "Bolbe Aydınlatıcı, Cilt Tonu Eşitleyici Leke ve Kırışıklık Karşıtı %6 C Vitamini Yüz Serumu 30 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8684232610330",
    "name": "Bolbe Yoğun Nemlendirici, Onarıcı ve Besleyici, Prebiyotikli Yüz Kremi 50 ml (Hyalüronik Asit)",
    "source": "local_gratis"
  },
  {
    "barcode": "8684232610347",
    "name": "Bolbe Hassas Ciltler İçin Yatıştırıcı, Bariyer Destekleyici Nem Yüz Maskesi 50 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8684232610354",
    "name": "Bolbe Dolgunlaştırıcı, Onarıcı ve Elastikiyet Arttırıcı Multi Peptit Kompleksli Krem Yüz Maskesi 50",
    "source": "local_gratis"
  },
  {
    "barcode": "8684232610361",
    "name": "Bolbe Aydınlatıcı, Cilt Tonu Eşitleyici Leke ve Kırışıklık Karşıtı %2 C Vitamini Krem Maske 50 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8684232610385",
    "name": "Bolbe 24 Saat Etkili Nemlendirici Yüz ve Vücut Losyonu 200 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8684232610392",
    "name": "Bolbe Kırışıklık Karşıtı, Sıkılaştırıcı ve Yenileyici Retinol Gece Serumu 30 ml (A Vitamini)",
    "source": "local_gratis"
  },
  {
    "barcode": "8684232610408",
    "name": "Bolbe Gözenek Sıkılaştırıcı, Aydınlatıcı, Bariyer Güçlendirici Niacinamide Yüz Serumu 30 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8684232610415",
    "name": "Bolbe Yoğun Nemlendirici, Dolgunlaştırıcı, Kırışıklık Karşıtı Peptitli Hyalüronik Asit Yüz Serumu 30",
    "source": "local_gratis"
  },
  {
    "barcode": "8684232610422",
    "name": "Bolbe Göz Altı Torbalanma ve Koyu Halka Karşıtı, Kafein İçeren Göz Çevresi Serumu 30 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8684232610446",
    "name": "Bolbe Peeling Etkili, Canlandırıcı, Cilt Tonu Eşitleyici, Gözenek Sıkılaştırıcı AHA-BHA Tonik 200 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8684232610453",
    "name": "Bolbe Shine Drop Aydınlatıcı, Leke Karşıtı, Niacinamide İçeren Işıltı Veren Yüz Serumu 30 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8684232610460",
    "name": "Bolbe Yoğun Nemlendirici, Kırışıklık ve Koyu Halka Karşıtı Peptit İçeren Göz Çevresi Kremi 30 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8684232610477",
    "name": "Bolbe Parlaklık Sağlayan Makyaj ve Cilt Temizleyici Balm 100 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8684232610637",
    "name": "Bolbe Arındırıcı Papaya Enzim Peeling 2 ml x 15 Adet",
    "source": "local_gratis"
  },
  {
    "barcode": "8684252200085",
    "name": "Bee Beauty Besleyici Aloe Vera Özlü Kil Maskesi",
    "source": "local_gratis"
  },
  {
    "barcode": "8684252200092",
    "name": "Bee Beauty Arındırıcı Çay Ağacı Yağı Kil Maskesi",
    "source": "local_gratis"
  },
  {
    "barcode": "8684252200108",
    "name": "Bee Beauty Sıkılaştırıcı Kolajen Kil Maskesi",
    "source": "local_gratis"
  },
  {
    "barcode": "8684252200115",
    "name": "Bee Beauty Yenileyici Nar Özlü Kil Maskesi",
    "source": "local_gratis"
  },
  {
    "barcode": "8684252200337",
    "name": "Bee Beauty Milk Sıvı Saç Kremi 200 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8684252200429",
    "name": "Bee Beauty Crystal Peeling Ped 5'li",
    "source": "local_gratis"
  },
  {
    "barcode": "8684252200436",
    "name": "Bee Beauty AHA Peeling Tonik Ped 5'li",
    "source": "local_gratis"
  },
  {
    "barcode": "8684252200573",
    "name": "Bee Beauty Serinletici Roll-On Göz Jeli 15 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8684252200955",
    "name": "Bee Beauty Çay Ağacı Arındırıcı Yüz Toniği 250 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8684252201297",
    "name": "Bee Beauty Fresh El Kremi Green Tea 30 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8684252201303",
    "name": "Bee Beauty Fresh El Kremi Ocean 30 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8684252201310",
    "name": "Bee Beauty Fresh El Kremi Pink Peach 30 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8684252201747",
    "name": "Bee Beauty AHA + BHA Aydınlatıcı Tonik 250 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8684252201792",
    "name": "Bee Beauty Poudre De Fleurs Saç Parfümü 160 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8684252201815",
    "name": "Bee Beauty Kuru Şampuan Orange Bliss Extra Volume 200 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8684252201822",
    "name": "Bee Beauty Fruit Paradise Kuru Şampuan 200 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8684252201839",
    "name": "Bee Beauty Kuru Şampuan Tropical Breeze 200 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8684252201846",
    "name": "Bee Beauty Orange Bliss Extra Volume Kuru Şampuan Seyahat Boy 75 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8684252201921",
    "name": "Bee Beauty Yüz & Vücut Temizleme Yağı 390 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8684252202362",
    "name": "Bee Beauty Wonder Food Karpuz Buhar Terapisi Kepeklenme ve Yağlanma Karşıtı Bone Maske",
    "source": "local_gratis"
  },
  {
    "barcode": "8684252202386",
    "name": "Bee Beauty Wonder Food Kakao Buhar Terapisi Güçlendirici ve Dökülme Önleyici Bone Maske",
    "source": "local_gratis"
  },
  {
    "barcode": "8684252202393",
    "name": "Bee Beauty Wonder Food Aloe Vera Buhar Terapisi Hacim Veren Bone Maske",
    "source": "local_gratis"
  },
  {
    "barcode": "8684252202553",
    "name": "Bee Beauty Serinletici Jel Yüz Maskesi 20 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8684252202577",
    "name": "Bee Beauty Serinletici Jel Göz Maskesi",
    "source": "local_gratis"
  },
  {
    "barcode": "8684252202621",
    "name": "Hyp Me Keratin Onarıcı Saç Bakım Yağı 100 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8684252202638",
    "name": "Hyp Me Aloe Vera Dolgunlaştırıcı Saç Maskesi 50 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8684252202645",
    "name": "Hyp Me Biotin Dökülme Karşıtı Saç Maskesi 50 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8684252202652",
    "name": "Hyp Me Hyaluron Nemlendirici Saç Maskesi 50 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8684252202669",
    "name": "Hyp Me Keratin Onarıcı Saç Maskesi 50 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8684252202874",
    "name": "Bee Beauty Superfood Üzüm Maskesi 25 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8684252202881",
    "name": "Orien Men 2'si 1 Arada Kepek Karşıtı Şampuan & Duş Jeli 400 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8684252202898",
    "name": "Orien Men 2'si 1 Arada Dökülme Karşıtı Şampuan & Duş Jeli 400 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8684252202904",
    "name": "Hyp Me Onarıcı Durulanmayan Saç Bakım Kremi 150 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8684252202911",
    "name": "Hyp Me Nemlendirici Durulanmayan Saç Bakım Kremi 150 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8684252204281",
    "name": "Bee Beauty Çift Fazlı Göz Makyaj Temizleyicisi 150 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8684252204298",
    "name": "Bee Beauty Çift Fazlı Yüz Makyaj Temizleyicisi 150 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8684252204304",
    "name": "Bee Beauty Silikonsuz Sıvı Saç Kremi 50 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8684252204311",
    "name": "Bee Beauty Saç Parfümü Intense 50 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8684252204328",
    "name": "Bee Beauty Saç Parfümü 50 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8684252204359",
    "name": "Bee Beauty Argan Saç Bakım Yağı 75 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8684252204366",
    "name": "Bee Beauty Keratin Saç Bakım Yağı 75 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8684252204373",
    "name": "Bee Beauty Süt Şampuan 500 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8684252204427",
    "name": "Bee Beauty Beyaz Kapatıcı Sprey Kumral 75 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8684252204434",
    "name": "Bee Beauty Beyaz Kapatıcı Sprey Kahve 75 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8684252204441",
    "name": "Bee Beauty Beyaz Kapatıcı Sprey Koyu Kahve 75 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8684252204908",
    "name": "Bee Beauty Prebiyotik Gündüz & Gece Kremi 50 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8684252204915",
    "name": "Bee Beauty Hindistan Cevizi Saç Bakım Yağı 75 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8684252204922",
    "name": "Bee Beauty Mor Şampuan 250 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8684252204946",
    "name": "Bee Beauty Mor Sıvı Saç Kremi 150 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8684252204953",
    "name": "Bee Beauty Mor Saç Kremi 150 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8684252204960",
    "name": "Bee Beauty Milk Plus Saç Bakım Köpüğü Süt Proteini 200 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8684252204977",
    "name": "Bee Beauty Saç Bakım Köpüğü Vanilya Kokulu 200 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8684252204984",
    "name": "Bee Beauty Saç Bakım Köpüğü Çikolata Kokulu 200 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8684252204991",
    "name": "Bee Beauty Deluxe Color Kit Saç Boyası 1.1 Mavi Siyah",
    "source": "local_gratis"
  },
  {
    "barcode": "8684252205028",
    "name": "Bee Beauty Saç Boyası Tüp 50 ml 1.1 Mavi Siyah",
    "source": "local_gratis"
  },
  {
    "barcode": "8684252205035",
    "name": "Bee Beauty Saç Boyası Tüp 50 ml 1.0 Siyah",
    "source": "local_gratis"
  },
  {
    "barcode": "8684252205042",
    "name": "Bee Beauty Saç Boyası Tüp 50 ml 3.0 Koyu Kahve",
    "source": "local_gratis"
  },
  {
    "barcode": "8684252205059",
    "name": "Bee Beauty Saç Boyası Tüp 50 ml 4.0 Kahve",
    "source": "local_gratis"
  },
  {
    "barcode": "8684252205066",
    "name": "Bee Beauty Saç Boyası Tüp 50 ml 6.0 Koyu Kumral",
    "source": "local_gratis"
  },
  {
    "barcode": "8684252205073",
    "name": "Bee Beauty Saç Boyası Tüp 50 ml 7.0 Kumral",
    "source": "local_gratis"
  },
  {
    "barcode": "8684252205080",
    "name": "Bee Beauty Saç Boyası Tüp 50 ml 8.0 Açık Kumral",
    "source": "local_gratis"
  },
  {
    "barcode": "8684252205097",
    "name": "Bee Beauty Saç Boyası Tüp 50 ml 9.0 Sarı",
    "source": "local_gratis"
  },
  {
    "barcode": "8684252205103",
    "name": "Bee Beauty Saç Boyası Tüp 50 ml 7.1 Küllü Kumral",
    "source": "local_gratis"
  },
  {
    "barcode": "8684252205110",
    "name": "Bee Beauty Saç Boyası Tüp 50 ml 9.1 Küllü Sarı",
    "source": "local_gratis"
  },
  {
    "barcode": "8684252205127",
    "name": "Bee Beauty Saç Boyası Tüp 50 ml 8.73 Sıcak Kapuçino Kahve",
    "source": "local_gratis"
  },
  {
    "barcode": "8684252205134",
    "name": "Bee Beauty Saç Boyası Tüp 50 ml 6.35 Çikolata Kahve",
    "source": "local_gratis"
  },
  {
    "barcode": "8684252205141",
    "name": "Bee Beauty Saç Boyası Tüp 50 ml 7.44 Yoğun Bakır Kumral",
    "source": "local_gratis"
  },
  {
    "barcode": "8684252205158",
    "name": "Bee Beauty Saç Boyası Tüp 50 ml 7.7 Sıcak Karamel Kahve",
    "source": "local_gratis"
  },
  {
    "barcode": "8684252205165",
    "name": "Bee Beauty Saç Boyası Tüp 50 ml 5.6 Şarap Kızılı",
    "source": "local_gratis"
  },
  {
    "barcode": "8684252205172",
    "name": "Bee Beauty Saç Boyası Tüp 50 ml 6.34 Bakır Kahve",
    "source": "local_gratis"
  },
  {
    "barcode": "8684252205189",
    "name": "Bee Beauty Deluxe Color Kit Saç Boyası 1.0 Siyah",
    "source": "local_gratis"
  },
  {
    "barcode": "8684252205196",
    "name": "Bee Beauty Deluxe Color Kit Saç Boyası 3.0 Koyu Kahve",
    "source": "local_gratis"
  },
  {
    "barcode": "8684252205202",
    "name": "Bee Beauty Deluxe Color Kit Saç Boyası 4.0 Kahve",
    "source": "local_gratis"
  },
  {
    "barcode": "8684252205219",
    "name": "Bee Beauty Deluxe Color Kit Saç Boyası 6.0 Koyu Kumral",
    "source": "local_gratis"
  },
  {
    "barcode": "8684252205226",
    "name": "Bee Beauty Deluxe Color Kit Saç Boyası 7.0 Kumral",
    "source": "local_gratis"
  },
  {
    "barcode": "8684252205233",
    "name": "Bee Beauty Deluxe Color Kit Saç Boyası 8.0 Açık Kumral",
    "source": "local_gratis"
  },
  {
    "barcode": "8684252205240",
    "name": "Bee Beauty Deluxe Color Kit Saç Boyası 9.0 Sarı",
    "source": "local_gratis"
  },
  {
    "barcode": "8684252205257",
    "name": "Bee Beauty Deluxe Color Kit Saç Boyası 7.1 Küllü Kumral",
    "source": "local_gratis"
  },
  {
    "barcode": "8684252205264",
    "name": "Bee Beauty Deluxe Color Kit Saç Boyası 9.1 Ekstra Açık Küllü Sarı",
    "source": "local_gratis"
  },
  {
    "barcode": "8684252205271",
    "name": "Bee Beauty Deluxe Color Kit Saç Boyası 8.73 Sıcak Kapuçino Kahve",
    "source": "local_gratis"
  },
  {
    "barcode": "8684252205288",
    "name": "Bee Beauty Deluxe Color Kit Saç Boyası 6.35 Çikolata Kahve",
    "source": "local_gratis"
  },
  {
    "barcode": "8684252205295",
    "name": "Bee Beauty Deluxe Color Kit Saç Boyası 6.34 Bakır Kahve",
    "source": "local_gratis"
  },
  {
    "barcode": "8684252205301",
    "name": "Bee Beauty Deluxe Color Kit Saç Boyası 5.6 Şarap Kızılı",
    "source": "local_gratis"
  },
  {
    "barcode": "8684252205318",
    "name": "Bee Beauty Deluxe Color Kit Saç Boyası 7.7 Sıcak Karamel Kahve",
    "source": "local_gratis"
  },
  {
    "barcode": "8684252205325",
    "name": "Bee Beauty Deluxe Color Kit Saç Boyası 7.44 Yoğun Bakır Kumral",
    "source": "local_gratis"
  },
  {
    "barcode": "8684252205622",
    "name": "Bee Beauty Nemlendirici Kolajen Manikür El Maskesi",
    "source": "local_gratis"
  },
  {
    "barcode": "8684252206377",
    "name": "Bee Beauty Oksidasyon Kremi 30 Vol %9 50 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8684252206384",
    "name": "Bee Beauty Oksidasyon Kremi 20 Vol %6 50 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8684252206407",
    "name": "Bee Beauty Micellar Temizleme Suyu 100 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8684252206421",
    "name": "Bee Beauty Micellar Çift Fazlı Makyaj Temizleme Suyu 400 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8684252206605",
    "name": "Bee Beauty Micellar Temizleme Suyu 740 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8684252206629",
    "name": "Bee Beauty Pirinç Peeling Jel 40 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8684252207220",
    "name": "Bee Beauty Aydınlatıcı 7'li Kapsül Serum",
    "source": "local_gratis"
  },
  {
    "barcode": "8684252207237",
    "name": "Bee Beauty Nemlendirici 7'li Kapsül Serum",
    "source": "local_gratis"
  },
  {
    "barcode": "8684252207244",
    "name": "Bee Beauty Yaşlanma Karşıtı 7'li Kapsül Serum",
    "source": "local_gratis"
  },
  {
    "barcode": "8684252207442",
    "name": "Benri Argan Yağlı Yoğun Nemlendirici El & Vücut Kremi 500 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8684252207619",
    "name": "Bee Beauty Çilekli Vücut Peeling Jeli 250 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8684252207718",
    "name": "Hyp Me Curl Saç Maskesi 50 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8684252208234",
    "name": "Bee Beauty Yüz ve Koltuk Altı İçin Ağda Bandı 16'lı",
    "source": "local_gratis"
  },
  {
    "barcode": "8684252208265",
    "name": "Hyp Me Hacim Veren Etki Saç Serumu 6’lı",
    "source": "local_gratis"
  },
  {
    "barcode": "8684252208272",
    "name": "Hyp Me Kopma & Kırılma Karştı Saç Serumu 6'lı",
    "source": "local_gratis"
  },
  {
    "barcode": "8684252208289",
    "name": "Hyp Me Boyalı Saçlar Saç Serumu 6’lı",
    "source": "local_gratis"
  },
  {
    "barcode": "8684252208340",
    "name": "Bee Beauty Vişneli Dudak Peelingi 13 gr",
    "source": "local_gratis"
  },
  {
    "barcode": "8684252208364",
    "name": "Bee Beauty Çilekli Dudak Peelingi 13 gr",
    "source": "local_gratis"
  },
  {
    "barcode": "8684252208388",
    "name": "Bee Beauty Deniz Tuzu Spreyi 150 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8684252208623",
    "name": "Hyp Me Saç Sabitleme Stick Wax 35 gr",
    "source": "local_gratis"
  },
  {
    "barcode": "8684252208760",
    "name": "Bee Beauty Hyalüronik Asitli Yağsız Jel Krem 50 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8684252208999",
    "name": "Bee Beauty Micellar Makyaj Temizleme Suyu 400 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8684252209019",
    "name": "Bee Beauty %5 Üre Vücut Losyonu 300 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8684252209026",
    "name": "Bee Beauty %5 Glikolik Asitli Tonik 200 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8684252209033",
    "name": "Bee Beauty Serum Maske Niasinamid",
    "source": "local_gratis"
  },
  {
    "barcode": "8684252209040",
    "name": "Bee Beauty Serum Maske C Vitamini",
    "source": "local_gratis"
  },
  {
    "barcode": "8684252209057",
    "name": "Bee Beauty Serum Maske Arbutin",
    "source": "local_gratis"
  },
  {
    "barcode": "8684252209064",
    "name": "Bee Beauty Ton Eşitleyici Kapsül Serum 7'li",
    "source": "local_gratis"
  },
  {
    "barcode": "8684252209071",
    "name": "Bee Beauty Vazelin Gül 90 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8684252209125",
    "name": "Bee Beauty Glutatyonlu Yüz Kremi 100 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8684252209248",
    "name": "Bee Beauty Hacimlendirici Saç Spreyi 200 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8684252209620",
    "name": "Bee Beauty Saç Maskarası Açık Kahve",
    "source": "local_gratis"
  },
  {
    "barcode": "8684252209637",
    "name": "Hyp Me Bebek Saç Maskarası 7 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8684252209644",
    "name": "Bee Beauty Saç Maskarası Koyu Kahve",
    "source": "local_gratis"
  },
  {
    "barcode": "8684252209651",
    "name": "Bee Beauty Saç Maskarası Siyah",
    "source": "local_gratis"
  },
  {
    "barcode": "8684252209859",
    "name": "Bee Beauty 3'ü 1 Arada Seyahat Seti 3 x 10 ml (Şampuan + Saç Kremi + Saç Sütü)",
    "source": "local_gratis"
  },
  {
    "barcode": "8684252210404",
    "name": "Benri Avokado Saç Kremi 700 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8684252210411",
    "name": "Benri Argan & Melek Otu Saç Kremi 700 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8684252210428",
    "name": "Benri Yasemin Kokulu Saç Kremi 700 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8684252210435",
    "name": "Benri Argan & Melek Otu Şampuan 750 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8684252210442",
    "name": "Benri Yasemin Kokulu Şampuan 750 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8684252210459",
    "name": "Benri Avokado Yağlı Şampuan 750 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8684252210466",
    "name": "Hyp Me Nemlendirici Şampuan 350 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8684252210473",
    "name": "Hyp Me Onarıcı Şampuan 350 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8684252210480",
    "name": "Hyp Me Dökülme Karşıtı Şampuan 350 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8684252210497",
    "name": "Hyp Me Dolgunlaştırıcı Şampuan 350 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8684252210503",
    "name": "Hyp Me Nemlendirici Saç Kremi 275 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8684252210510",
    "name": "Hyp Me Onarıcı Saç Kremi 275 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8684252210527",
    "name": "Hyp Me Dökülme Karşıtı Saç Kremi 275 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8684252210534",
    "name": "Hyp Me Dolgunlaştırıcı Saç Kremi 275 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8684252210770",
    "name": "Bee Beauty Yüz Yağı Kontrol Kağıdı 50 Adet",
    "source": "local_gratis"
  },
  {
    "barcode": "8684252210787",
    "name": "Bee Beauty Yüz Temizleme Sütü 200 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8684252210879",
    "name": "Bee Beauty Hyaluron & Argan Saç Bakım Kürü 25 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8684252210886",
    "name": "Bee Beauty Protein & Kakao Saç Bakım Kürü 25 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8684252210985",
    "name": "Bee Beauty Arındırıcı Temizleme Jeli 400 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8684252211272",
    "name": "Bee Beauty Sütlü Saç Maskesi 50 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8684252211487",
    "name": "Benri Besleyici Bakım El ve Vücut Kremi 300 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8684252211494",
    "name": "Benri Nemlendirici Bakım El ve Vücut Kremi 300 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8684252211500",
    "name": "Benri Coconut Oil El Krem 75 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8684252211517",
    "name": "Benri Berry Pie El Kremi 75 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8684252211524",
    "name": "Benri Peach Scent El Kremi 75 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8684252211531",
    "name": "Benri Olive Care El Kremi 75 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8684252211777",
    "name": "Bee Beauty Klasik El Ağdası",
    "source": "local_gratis"
  },
  {
    "barcode": "8684252211784",
    "name": "Bee Beauty Rulo Ağda Bezi 10 Metre",
    "source": "local_gratis"
  },
  {
    "barcode": "8684252211890",
    "name": "Bee Beauty Milk Saç Parfümü 100 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8684252212262",
    "name": "Bee Beauty Glossy Shine Şampuan 250 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8684252213085",
    "name": "Bee Beauty Vücut Ağda Bandı Şeftali 24'lü",
    "source": "local_gratis"
  },
  {
    "barcode": "8684252213856",
    "name": "Bee Beauty Pirinç Yüz Maskesi 25 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8684252214136",
    "name": "Bee Beauty Ahududu Aromalı Dudak Kremi 5 gr",
    "source": "local_gratis"
  },
  {
    "barcode": "8684252214150",
    "name": "Bee Beauty Şeftali Aromalı Dudak Kremi 5 gr",
    "source": "local_gratis"
  },
  {
    "barcode": "8684252214167",
    "name": "Bee Beauty Karpuz Aromalı Dudak Kremi 5 gr",
    "source": "local_gratis"
  },
  {
    "barcode": "8684252214273",
    "name": "Bee Beauty Kolajen İçerikli Kağıt Yüz Maskesi 25 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8684252214433",
    "name": "Bee Beauty Vazelin Klasik 90 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8684252214792",
    "name": "Bee Beauty Argan Yağlı Esnek Tutuş Saç Spreyi 300 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8684252214808",
    "name": "Bee Beauty Keratin Güçlü Tutuş Saç Spreyi 300 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8684252214815",
    "name": "Bee Beauty Hacim Ekstra Güçlü Tutuş Saç Spreyi 300 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8684252215041",
    "name": "Bee Beauty 3'ü 1 Arada Yüz Temizleyici 150 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8684252215140",
    "name": "Bee Beauty Argan Yağlı Esnek Tutuş Saç Köpüğü 225 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8684252215157",
    "name": "Bee Beauty Keratin Güçlü Tutuş Saç Köpüğü 225 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8684252215164",
    "name": "Bee Beauty Hacim Ekstra Güçlü Tutuş Saç Köpüğü 225 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8684252215195",
    "name": "Bee Beauty Lumina Saç Parfümü 100 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8684252215201",
    "name": "Bee Beauty Arındırıcı Yüz Temizleme Köpüğü 150 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8684252215317",
    "name": "Authoriderm %10 Niasinamid & %1 Çinko PCA İçerikli Dengeleyici Yüz Serumu 30 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8684252215331",
    "name": "Authoriderm %2 Alfa Arbutin & Hyalüronik Asit İçerikli Ton Eşitleyici Yüz Serumu 30 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8684252215348",
    "name": "Authoriderm Cilt Yenileyici AHA Tonik 200 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8684252215355",
    "name": "Authoriderm Nazik Köpüren Yüz Temizleyici Köpük 150 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8684252215362",
    "name": "Authoriderm Nemlendirici Yüz Kremi 50 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8684252215379",
    "name": "Authoriderm Nemlendirme Özellikli Temizleyici Jel 50 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8684252215539",
    "name": "Authoriderm Pantenol %9 Cilt Bakım Kremi 30 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8684252215546",
    "name": "Authoriderm Pantenol %9 Cilt Bakım Kremi 100 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8684252215553",
    "name": "Authoriderm Pantenol %9 Nemlendirici Vücut Losyonu 400 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8684252215560",
    "name": "Authoriderm Pantenol %9 Arındırıcı ve Canlandırıcı Yüz Temizleme Jeli 200 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8684252215720",
    "name": "Hyp Me Keratin Onarıcı Şampuan 75 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8684252215737",
    "name": "Hyp Me Keratin Onarıcı Saç Kremi 75 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8684252215744",
    "name": "Hyp Me Aloe Vera Dolgunlaştırıcı Saç Kremi 75 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8684252215751",
    "name": "Hyp Me Aloe Vera Dolgunlaştırıcı Şampuan 75 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8684252215881",
    "name": "Authoriderm Argan Saç Bakım Yağı 100 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8684252216130",
    "name": "Bee Beauty Aloe Vera Yatıştırıcı Jel 200 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8684252216147",
    "name": "Bee Beauty Vitamin C Göz Kremi 15 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8684252216208",
    "name": "Authoriderm %3,5 Askorbil Glukozit İçerikli Aydınlatıcı Yüz Serumu 30 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8684252216673",
    "name": "Authoriderm Biotin & Kolajen Dolgunlaştırıcı Şampuan 500 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8684252216680",
    "name": "Authoriderm Biotin & Kolajen Dolgunlaştırıcı Saç Kremi 400 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8684252216697",
    "name": "Authoriderm Brezilya Keratin Düzleştirici Şampuan 500 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8684252216703",
    "name": "Authoriderm Brezilya Keratin Düzleştirici Saç Kremi 400 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8684252216802",
    "name": "Hyp Me Saç Sabitleme Stick Wax Coconut 35 gr",
    "source": "local_gratis"
  },
  {
    "barcode": "8684252216819",
    "name": "Bee Beauty Active Line Vücut Losyonu 200 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8684252216826",
    "name": "Bee Beauty Active Line Yüz Spreyi 100 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8684252217397",
    "name": "Life In Hindistan Cevizi Yağı 330 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8684252217540",
    "name": "Bee Beauty Gül Suyu Yüz Spreyi 100 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8684252217557",
    "name": "Bee Beauty Hydro Glow Yüz Spreyi 100 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8684255820006",
    "name": "The Fine Organics Hint Dutu Özlü Beyazlatıcı Yüz ve Vücut Kremi 100 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8684255820013",
    "name": "The Fine Organics Papaya Özlü Kırışıklık ve Torbalanma Karşıtı Göz Çevresi Bakım Kremi 20 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8684255820037",
    "name": "The Fine Organics Guava Özlü Collagen + Retinol Yaşlanma Karşıtı Yüz Serumu 30 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8684255820044",
    "name": "The Fine Organics Gül Suyu & Aloe Vera Özlü Gözenek Sıkılaştırıcı ve Arındırıcı Tonik 150 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8684255820068",
    "name": "The Fine Organics Barbados Kirazı Özlü Aydınlatıcı ve C Vitamini Yüz Serumu 30 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8684255820075",
    "name": "The Fine Organics Avustralya Havyar Limonu Özlü Arındırıcı Yüz ve Vücut Peelingi 100 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8684255820129",
    "name": "The Fine Organics Liçi Özlü Arındırıcı ve Sebum Dengeleyici Yüz Temizleme Jeli 150 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8684255820143",
    "name": "The Fine Organics Minyatür Altın Karpuz Özlü Besleyici ve Arındırıcı Batık Karşıtı Vücut Peelingi 300 gr",
    "source": "local_gratis"
  },
  {
    "barcode": "8684255820211",
    "name": "The Fine Organics MadeFine Yenileyici ve Onarıcı Cilt Bakım Kremi 50 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8684255820372",
    "name": "The Fine Organics Tazmanya Biberi Özlü AHA %30 + BHA %2 Cilt Tonu Eşitleyici ve Arındırıcı Kırmızı Peeling Serum 30 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8684255820389",
    "name": "The Fine Organics Jak Meyvesi Özlü Centella Asiatica Hyaluronic Acid Onarıcı, Yatıştırıcı ve Nemlendirici Serum 30 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8684255820396",
    "name": "The Fine Organics Turna Yemişi Özlü Niacinamide & Çinko Koyu Leke Karşıtı ve Aydınlatıcı Serum 30 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8684255820716",
    "name": "The Fine Organics Isırgan Otu Özlü Tüy İnceltici ve Nemlendirici Vücut Bakım Sütü 50 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8684255820754",
    "name": "The Fine Organics Serrano Biberi Özlü Sıkılaştırıcı, Bölgesel İncelme, Selülit ve Çatlak Karşıtı Soğuk Lipoliz Jel 250 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8684255820921",
    "name": "The Fine Organics Grenada Narı Özlü Yoğun Nemlendirici, Aydınlatıcı, Ton Eşitleyici Su Bazlı Yüz Kremi 50 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8684255820983",
    "name": "The Fine Organics AHA %9 Akne, Leke, Kararma ve Batık Karşıtı Arındırıcı ve Aydınlatıcı Vücut Peeling Losyonu 300 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8684255821089",
    "name": "The Fine Organics Niacinamide & Ceramide NP Soyulabilir Kolajen Cam Cilt Maskesi 60 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8684255821096",
    "name": "The Fine Organics Kojik Asit İçeren Leke ve Kararma Karşıtı Makyaj Temizleme Sabunu 65 gr",
    "source": "local_gratis"
  },
  {
    "barcode": "8684255821102",
    "name": "The Fine Organics GlamorPH pH Değişimli Dudak Bakım Yağı 5 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8684264709477",
    "name": "ProCo Beauty Aynalı Saç Fırçası Makaron",
    "source": "local_rossmann"
  },
  {
    "barcode": "8684264709668",
    "name": "ProCo Beauty Pro Puf Saç Fırçası",
    "source": "local_rossmann"
  },
  {
    "barcode": "8684264709699",
    "name": "Proco Beauty Saç Fırçası 3D Esnek Love",
    "source": "local_rossmann"
  },
  {
    "barcode": "8684264709729",
    "name": "Proco Beauty Saç Fırçası Pro Curly",
    "source": "local_rossmann"
  },
  {
    "barcode": "8684264709781",
    "name": "Proco Beauty Saç Fırçası Kids Kitty",
    "source": "local_rossmann"
  },
  {
    "barcode": "8684264709903",
    "name": "Proco Beauty Saç Fırçası Beauty Shiny Kendini Temizleyen",
    "source": "local_rossmann"
  },
  {
    "barcode": "8684264709965",
    "name": "Proco Beauty Pro Kendini Temizleyen Saç Fırçası",
    "source": "local_rossmann"
  },
  {
    "barcode": "8684266264219",
    "name": "True Bee Daily Dream Pumpkin Seed Kompleks Yağ 100 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8684266264264",
    "name": "True Bee Daily Dream Amla Kompleks Saç Toniği 250 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8684266264271",
    "name": "True Bee Daily Dream Pumpkin Seed Kompleks Saç Toniği 250 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8684272600094",
    "name": "Acqua Perfection Aydınlatıcı ve Leke Karşıtı Serum 30 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "8684272600117",
    "name": "Acqua Perfection Sebum Dengeleyici Serum 30 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "8684272600131",
    "name": "Acqua Perfection Cilt Tonu Eşitleyici ve Yenileyici Peeling Serum 30 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "8684272600340",
    "name": "Acqua Perfection Aydınlatıcı ve Renk Tonu Eşitleyici C Vitamini Serum 30 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "8684272600858",
    "name": "Acqua Perfection Collagen Wrapping Mask Kolajen Soyulabilen Cilt Bakım Maskesi 70 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "8684272601084",
    "name": "Acqua Perfection Hydratox Hyaluronic Acid Nemlendirici ve Kırışıklık Karşıtı Soyulabilir Yüz Maskesi 70 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "8684272601091",
    "name": "Acqua Perfection Derma Pure Arındırıcı ve Gözenek Sıkılaştırıcı  Siyah Nokta Akne Soyulabilir Yüz Maskesi 70 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "8684272601107",
    "name": "Acqua Perfection Multi Vitamin C B5 B3 Cilt Aydınlatıcı ve Leke Karşıtı Soyulabilir Yüz Maskesi 70 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "8684272601398",
    "name": "Acqua Perfection Phytox Cica B5 Yatıştırıcı ve Onarıcı Soyulabilir Yüz Maskesi 70 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "8684274005293",
    "name": "Callista Aydınlatıcı Krem All I Need Radiant Skin Tint SPF 50 Işıltılı",
    "source": "local_rossmann"
  },
  {
    "barcode": "8684278084164",
    "name": "Eloque Saç Parfümü Argan 100 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "8684278084171",
    "name": "Eloque Saç Parfümü Hyaluronic Acid 100 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "8684306079322",
    "name": "Calliel Leke Karşıtı Gözenek Sıkılaştırıcı Glikolik Asit Tonik 200 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8684306079339",
    "name": "Calliel Akne ve Siyah Nokta Karşıtı Arındırıcı Salisilik Asit Tonik 200 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8684306079353",
    "name": "Calliel Siyah Nokta Karşıtı Onarıcı Bubble Blackhead 120 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8684306079360",
    "name": "Calliel Leke Karşıtı Etkili Aydınlatıcı Cilt Tonu Eşitleyici Bubble Blemish 120 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8684306079377",
    "name": "Calliel Aydınlatıcı Leke Karşıtı Cilt Tonu Eşitleyici ve Aydınlatıcı Rice Tonik 200 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8684306079414",
    "name": "Calliel Anti-Aging Etkili Sıkılaştırıcı Dolgunlaştırıcı PHA Tonik 200 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8684306079421",
    "name": "Calliel Nemlendirici Özellikli Gözenek Küçültücü Yaşlanma Karşıtı Hassas İçerikli LHA Tonik 200 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8684306079438",
    "name": "Calliel Ton Eşitleyici Gözenek Sıkılaştırıcı Mandelik Asit Tonik 200 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8684306079445",
    "name": "Calliel Aydınlatıcı Leke ve Siyah Nokta Karşıtı Kojik Asit Tonik 200 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8684306079452",
    "name": "Calliel Hassas Ciltler İçin Yatıştırıcı Cilt Bariyeri Onarıcı Cica Tonik 200 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8684306079537",
    "name": "Calliel Cilde Nüfuzu Kolaylaştıran Pamuk Tonik Pad 160 Adet",
    "source": "local_gratis"
  },
  {
    "barcode": "8684306079605",
    "name": "Calliel 72 Saat Yoğun Nemlendirme Etikili 4D Hyaluronic Acid ve Cica Complex Bariyer Destekleyici Nemlendirici Yüz Kremi 90 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8684306079612",
    "name": "Calliel Tint Repair Centella Özlü Bariyer Onarıcı Yatıştırıcı Kızarıklık Karşıtı Ton Eşitleyici Yüz Kremi 50 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8684308956027",
    "name": "Yoon Biotin B7 & Kolajen İçeren Nemlendiren Besleyici ve Onarıcı Vegan Saç Bakım Kremi 200 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8684308956041",
    "name": "Yoon Keratin Saç Spreyi 250 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "8684308956065",
    "name": "Yoon Brezilya Fönü Saç Düzleştirme & Keratin Botoks Güçlendirici ve Besleyici Evde Keratin Bakım Seti (3 x 100 ml)",
    "source": "local_gratis"
  },
  {
    "barcode": "8684308956294",
    "name": "Yoon Saç Dökülme Karşıtı Hızlı Saç Uzamasına Yardımcı 7 Aktifli Biberiyeli Tuzsuz Şampuan 400 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8684308956300",
    "name": "Yoon Saç Dökülme Karşıtı Hızlı Saç Uzamasına Yardımcı 7 Aktifli Biberiyeli Saç Bakım Scalp Serumu 50 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8684308956553",
    "name": "Yoon Rosemary & E Vitamini Saç Bakım Maskesi 250 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8684308956683",
    "name": "Yoon Mor Şampuan 400 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "8684349014793",
    "name": "Solasta Leke Karşıtı Serum 30 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "8684378716286",
    "name": "Let'scrub Antioxidant Body Scrub Üzüm Çekirdekli Sıkılaştırıcı ve Nemlendirici Vücut Peelingi 280 gr",
    "source": "local_gratis"
  },
  {
    "barcode": "8684378716293",
    "name": "Let'scrub Cold Effect Body Scrub Mentollü Sıkılaştırıcı ve Nemlendirici Vücut Peelingi 280 gr",
    "source": "local_gratis"
  },
  {
    "barcode": "8684378716330",
    "name": "Let'scrub Moisturizing Lip Exfoliator Sweet Kisses Besleyici ve Nemlendirici Dudak Peelingi 30 gr",
    "source": "local_gratis"
  },
  {
    "barcode": "8684378716347",
    "name": "Let'scrub Enzyme Peeling Powder Arındırıcı ve Yenileyici Enzim Peeling Tozu 75 gr",
    "source": "local_gratis"
  },
  {
    "barcode": "8684378716354",
    "name": "Let'scrub 24H Silky Body Yogurt Selülit Önleyici Sıkılaştırıcı Shea Yağlı Nemlendirici Vücut Yoğurdu",
    "source": "local_gratis"
  },
  {
    "barcode": "8684378716361",
    "name": "Let'scrub Doğal Retinol Alternatifi Bakuchiol Çatlak Karşıtı Cilt Bakım Yağı 100 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8684378760128",
    "name": "Youpick Mandal Toka Dikdörtgen Siyah",
    "source": "local_watsons"
  },
  {
    "barcode": "8684378760272",
    "name": "Youpick Mandal Toka Siyah 4'lü",
    "source": "local_watsons"
  },
  {
    "barcode": "8684378760296",
    "name": "Youpick Tüp Toka Büyük Siyah",
    "source": "local_watsons"
  },
  {
    "barcode": "8684378760302",
    "name": "Youpick Mandal Toka Siyah 2'li",
    "source": "local_watsons"
  },
  {
    "barcode": "8684378760326",
    "name": "Youpick Mandal Toka Siyah 9'lu",
    "source": "local_watsons"
  },
  {
    "barcode": "8684378760333",
    "name": "Youpick Siyah İncili Havlu Toka 5'li",
    "source": "local_watsons"
  },
  {
    "barcode": "8684378760340",
    "name": "Youpick Renkli İncili Havlu Toka 5'li",
    "source": "local_watsons"
  },
  {
    "barcode": "8684378760609",
    "name": "Youpick Tel Toka Siyah 24'lü",
    "source": "local_watsons"
  },
  {
    "barcode": "8684378760647",
    "name": "Youpick Havlu Toka Siyah 6'lı",
    "source": "local_watsons"
  },
  {
    "barcode": "8684378760661",
    "name": "Youpick Havlu Toka Desenli 5'li",
    "source": "local_watsons"
  },
  {
    "barcode": "8684378760678",
    "name": "Youpick Mandal Toka Büyük Siyah",
    "source": "local_watsons"
  },
  {
    "barcode": "8684378760692",
    "name": "Youpick Mini Havlu Toka 50'li Set",
    "source": "local_watsons"
  },
  {
    "barcode": "8684378760708",
    "name": "Youpick Mandal Toka Fiyonk",
    "source": "local_watsons"
  },
  {
    "barcode": "8684378760753",
    "name": "Youpick Çıt Çıt Toka Yıldız Büyük",
    "source": "local_watsons"
  },
  {
    "barcode": "8684378760760",
    "name": "Youpick Lastik Toka Kutulu",
    "source": "local_watsons"
  },
  {
    "barcode": "8684378761125",
    "name": "YOUPICK HAVLU TOKA KULAKLI",
    "source": "local_watsons"
  },
  {
    "barcode": "8684378761132",
    "name": "Youpick Mandal Toka Yarım Ay",
    "source": "local_watsons"
  },
  {
    "barcode": "8684382192329",
    "name": "Matsu Mystique Blossom Saç Parfümü 50 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "8684382192336",
    "name": "Matsu Harmony Saç Parfümü 50 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "8684382192366",
    "name": "Matsu Saç Parfümü Myth 50 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "8684382192373",
    "name": "Matsu Saç Parfümü Salted Spirit 50 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "8684382192427",
    "name": "Matsu Peachy Dudak Balm 15 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "8684382192564",
    "name": "Matsu Saç Toniği Rosemary Scalpify 100 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "8684382192571",
    "name": "Matsu Şampuan Rosemary Scalpify 350 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "8684382192588",
    "name": "Matsu Saç Serumu Rosemary Scalpify 50 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "8684382192595",
    "name": "Matsu Saç Yağı Rosemary Scalpify 50 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "8684382192601",
    "name": "Matsu Saç Bakım Gloss Pop 50 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "8684382192862",
    "name": "Matsu Bonding Bakım Şampuanı 350 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "8684382192879",
    "name": "Matsu Bonding Saç Bakım Maskesi 350 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "8684382192885",
    "name": "MATSU BONDING KIRILMA KARŞITI SERUM 50ML",
    "source": "local_watsons"
  },
  {
    "barcode": "8684382192893",
    "name": "Matsu Intensive Repair Yıpranmış Saçlar Şampuan 350 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "8684382192909",
    "name": "Matsu Intensive Repair Yıpranmış Saçlar Maske 350 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "8684382192923",
    "name": "Matsu Şampuan Yoğun Nem Bakımı 350 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "8684382192940",
    "name": "Matsu Saç Maskesi Yoğun Nem Bakımı 350 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "8684407910180",
    "name": "La Faé Watermelon Candy Peptide Lip Balm",
    "source": "local_watsons"
  },
  {
    "barcode": "8684407910197",
    "name": "La Faé Mocha Chocolate Peptide Lip Balm",
    "source": "local_watsons"
  },
  {
    "barcode": "8684438670008",
    "name": "Mia Klinika Bariyer Güçlendirici Onarıcı Canlandırıcı ve Nemlendirici Krem 50 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8684438670009",
    "name": "Mia Klinika Onarıcı Canlandırıcı Bakım Kremi 50 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "8684438670015",
    "name": "Mia Klinika Cilt Beyazlatıcı Ton Eşitlemeye Yardımcı Leke Kremi 50 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8684438670022",
    "name": "Mia Klinika Gözenek Sıkılaştırıcı ve Yüz Temizleyici Tonik 200 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8684438670023",
    "name": "Mia Klinika Gözenek Sıkılaştırıcı Tonik 200 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "8684438670039",
    "name": "Mia Klinika Retinol ve Kolajen İçeren Yaşlanma Karşıtı Krem 50 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8684438670040",
    "name": "Mia Klinika Retinol ve Kolajen İçeren Yaşlanma Karşıtı Krem 50 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "8684438670046",
    "name": "Mia Klinika Hassas ve Kuru Ciltler İçin Yüz Yıkama Jeli 200 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8684438670060",
    "name": "Mia Klinika Aydınlatıcı Göz Çevresi Bakım Serumu 30 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8684438670061",
    "name": "Mia Klinika Canlandırıcı Göz Altı Serumu 30 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "8684438670077",
    "name": "Mia Klinika Gözenek Siyah Nokta Sivilce Gidermeye Yardımcı Serum 30 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8684438670078",
    "name": "Mia Klinika Gözenek ve Siyah Nokta Serumu 30 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "8684438670084",
    "name": "Mia Klinika Yaşlanma Karşıtı Bariyer Onarıcı Serum 30 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8684438670085",
    "name": "Mia Klinika Yaşlanma Karşıtı Bariyer Onarıcı Serum 30 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "8684438670091",
    "name": "Mia Klinika Sivilce ve Leke Karşıtı Azelaik Asit Serumu 30 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8684438670092",
    "name": "Mia Klinika Azelaik Asit Serum 30 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "8684438670114",
    "name": "Mia Klinika Gözenek ve Siyah Nokta Gidermeye Yardımcı Aydınlatıcı C Vitamini Serumu 30 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8684438670115",
    "name": "Mia Klinika Aydınlatıcı C Vitamin Serum Gözenek Siyah Nokta ve Sivilce Karşıtı 30 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "8684438670121",
    "name": "Mia Klinika Nemlendirici Hyalüronik Asit ve Kolajen Serum 30 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8684438670122",
    "name": "Mia Klinika Yaşlanma Karşıtı Nemlendirici Hyalüronik Asit ve Kolajen Serum 30 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "8684438670138",
    "name": "Mia Klinika Leke Görünümü Karşıtı ve Cilt Tonu Eşitlemeye Yardımcı Serum 30 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8684438670139",
    "name": "Mia Klinika Leke Karşıtı Ton Eşitleyici Serum 30 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "8684438670152",
    "name": "Mia Klinika Koyu Leke Kırışıklık ve Morluk Karşıtı Kolajen ve Peptit İçeren Göz Çevresi Bakım Kremi",
    "source": "local_gratis"
  },
  {
    "barcode": "8684438670153",
    "name": "Mia Klinika Kolajen Peptid Göz Kremi 20 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "8684438670170",
    "name": "Mia Klinika 50 Spf+ Kırışıklık ve Leke Karşıtı Anti-Pigment Yüz Güneş Kremi 50 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "8684438670177",
    "name": "Mia Klinika Ton Eşitleyici Pembe Güneş Kremi 50 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "8684438670183",
    "name": "Mia Klinika Panthenol Bal ve Cicalı Leke & Kırışıklık Karşıtı Işıltı Veren Nemlendirici Yüz Maskesi",
    "source": "local_gratis"
  },
  {
    "barcode": "8684438670190",
    "name": "Mia Klinika Sivilce ve Akne Karşıtı Bariyer Güçlendirici Nemlendirici Krem 50 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8684438670191",
    "name": "Mia Klinika Sivilce ve Akne Karşıtı Kremi 50 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "8684438670206",
    "name": "Mia Klinika Yağlı ve Sivilceli Ciltler İçin Yüz Yıkama Jeli 200 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8684438670207",
    "name": "Mia Klinika Yağlı Cilt Yüz Temizleme Jeli 200 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "8684438670213",
    "name": "Mia Klinika SPF 50+ Bariyer Onarıcı Güneş Kremi 50 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "8684438670244",
    "name": "Mia Klinika Akne Kurutucu Losyon 30 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8684438670251",
    "name": "Mia Klinika Kaş Kirpik Serumu 6 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8684438670329",
    "name": "Mia Klinika Bentonitli Pembe Kil Maskesi 15 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "8684438670336",
    "name": "Mia Klinika Aydınlatıcı ve Beyazlatıcı Pirinç Peeling 15 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "8684438670343",
    "name": "Mia Klinika %7 Glikolik Asitli Arındırıcı ve Gözenek Sıkılaştırıcı Tonik 200 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8684438670350",
    "name": "Mia Klinika Tiger Grass Ton Eşitleyici 50 SPF+ Cica Krem 30 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "8684438670367",
    "name": "Mia Klinika Yüz ve Vücut Parlatıcı Stick 17 g",
    "source": "local_watsons"
  },
  {
    "barcode": "8684438670435",
    "name": "MIA KLINIKA VOLKANİK KİL MASKE 25GR",
    "source": "local_watsons"
  },
  {
    "barcode": "8684438670442",
    "name": "MIA KLINIKA SALİSİLİK ASİT KİL MASKE 25GR",
    "source": "local_watsons"
  },
  {
    "barcode": "8684438670459",
    "name": "Mia Klinika 72 Saat Etkili Su Bazlı Yoğun Nemlendirici Krem 50 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8684438670466",
    "name": "Mia Klinika Arındırıcı & Aydınlatıcı Toz Enzim Peeling 40 gr",
    "source": "local_gratis"
  },
  {
    "barcode": "8684438670480",
    "name": "Mia Klinika %7 Glikolik Asit Tonik 200 ml + 50+SPF Leke Karşıtı Güneş Kremi 50 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8684438670527",
    "name": "Mia Klinika Azelaik Kil Maskesi 7 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "8684441800218",
    "name": "Clasy Care Cilt Beyazlatıcı Ton Eşitleyici Krem 100 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "8684441800837",
    "name": "Clasy Care Aha Gözenek Sıkılaştırıcı Tonik 200 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "8684441801161",
    "name": "Clasy Care Working Hands El Kremi 100 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "8684521245021",
    "name": "Clooe Yoğun Nem Serumu 30 ml",
    "source": "local_rossmann"
  },
  {
    "barcode": "8684521245045",
    "name": "Clooe Kolajen Serum 30 ml",
    "source": "local_rossmann"
  },
  {
    "barcode": "8684521245076",
    "name": "Clooe Yüz Temizleme Köpüğü Organik 150 ml",
    "source": "local_rossmann"
  },
  {
    "barcode": "8684521245090",
    "name": "Clooe El Temizleme Köpüğü Organik 300 ml",
    "source": "local_rossmann"
  },
  {
    "barcode": "8684576000965",
    "name": "TTO Thermal Nemlendirici Yüz Temizleme Köpüğü 200 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "8684576002969",
    "name": "TTO Thermal Yüz Temizleme Köpüğü 150 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "8684663291573",
    "name": "Zhene V-Lift Pro Yüz Germe Bandı 40 Adet",
    "source": "local_watsons"
  },
  {
    "barcode": "8684853800158",
    "name": "Proco Beauty Saç Fırçası Miracle Pro",
    "source": "local_rossmann"
  },
  {
    "barcode": "8684853800189",
    "name": "Proco Beauty Saç Fırçası Jelly Pro",
    "source": "local_rossmann"
  },
  {
    "barcode": "8684853800219",
    "name": "Proco Beauty Saç Fırçası Premium Kolay Temizlik",
    "source": "local_rossmann"
  },
  {
    "barcode": "8684853800240",
    "name": "Proco Beauty Saç Fırçası Premium Twisty Masaj",
    "source": "local_rossmann"
  },
  {
    "barcode": "8684853800271",
    "name": "Proco Beauty Saç Fırçası Makaron Altın Sarısı",
    "source": "local_rossmann"
  },
  {
    "barcode": "8684853800301",
    "name": "Proco Beauty Saç Fırçası Makaron Su Yeşili",
    "source": "local_rossmann"
  },
  {
    "barcode": "8684853800370",
    "name": "Proco Beauty Saç Fırçası Multy Brush Pro",
    "source": "local_rossmann"
  },
  {
    "barcode": "8684853800523",
    "name": "ProCo Zigzag Bigudi 12'li",
    "source": "local_rossmann"
  },
  {
    "barcode": "8684853800554",
    "name": "ProCo Hacim Veren Bigudi 2'li",
    "source": "local_rossmann"
  },
  {
    "barcode": "8684880890085",
    "name": "Korelya Akneli Ciltler İçin Yüz Temizleme Jeli 200 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8684880890139",
    "name": "Korelya Soyulabilir Salyangoz Yüz Maskesi 50 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8684917025152",
    "name": "Lionesse Sprey Saç Fırçası",
    "source": "local_watsons"
  },
  {
    "barcode": "8684939930007",
    "name": "Duaderm Serum Vitamin C 30 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "8684939930021",
    "name": "Duaderm Anti Akne & Anti Blemish Serum 30 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "8684939930039",
    "name": "Duaderm Lipozom Gündüz Kremi 50 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "8684939930052",
    "name": "Duaderm Hassas Ciltler Nemlendirici Tonik 100 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "8684939930106",
    "name": "Duaderm Vegan Collagen Serum 30 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "8684939930151",
    "name": "Duaderm Bio Collagen Real Deep Maske 1 Adet",
    "source": "local_watsons"
  },
  {
    "barcode": "8684939930175",
    "name": "Duaderm Bio-Collagen Real Deep Maske Set 3'lü 34 g",
    "source": "local_watsons"
  },
  {
    "barcode": "8684952301600",
    "name": "La Faé Black Coffee Peptide Lip Balm",
    "source": "local_watsons"
  },
  {
    "barcode": "8684952301686",
    "name": "La Faé  Lip Peptide Oil Golden Nude",
    "source": "local_watsons"
  },
  {
    "barcode": "8684952843162",
    "name": "Intenpure Yıpranmış Saçlar İçin Onarıcı Saç Vitamini 30 Kapsül",
    "source": "local_gratis"
  },
  {
    "barcode": "8684985130000",
    "name": "Monalisa Isısız Saç Şekillendirme Seti",
    "source": "local_rossmann"
  },
  {
    "barcode": "8684990000008",
    "name": "The Purest Solutions Lekeli Ciltler İçin Cilt Tonu Eşitleyici BB Krem 50+SPF 40 ml (Açık-Orta Ton)",
    "source": "local_gratis"
  },
  {
    "barcode": "8684990000015",
    "name": "The Purest Solutions Lekeli Ciltler İçin Cilt Tonu Eşitleyici BB Krem 50+SPF 40 ml (Orta-Koyu Ton)",
    "source": "local_gratis"
  },
  {
    "barcode": "8684990000022",
    "name": "The Purest Solutions Kuru ve Karma Ciltler İçin Yoğun Nemlendirici BB Krem 50+SPF 40 ml (Açık-Orta Ton)",
    "source": "local_gratis"
  },
  {
    "barcode": "8684990000039",
    "name": "The Purest Solutions Kuru ve Karma Ciltler İçin Yoğun Nemlendirici BB Krem 50+SPF 40 ml (Orta-Koyu Ton)",
    "source": "local_gratis"
  },
  {
    "barcode": "8684990000046",
    "name": "The Purest Solutions Yağlı ve Karma Ciltler İçin Matlaştırıcı BB Krem 50+SPF 40 ml (Açık-Orta Ton)",
    "source": "local_gratis"
  },
  {
    "barcode": "8684990000053",
    "name": "The Purest Solutions Yağlı ve Karma Ciltler İçin Matlaştırıcı BB Krem 50+SPF 40 ml (Orta-Koyu Ton)",
    "source": "local_gratis"
  },
  {
    "barcode": "8684990000060",
    "name": "The Purest Solutions Tone Serum Fondöten Light 30 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "8684990000077",
    "name": "The Purest Solutions Tone Serum Fondöten Medium 30 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "8684990000084",
    "name": "The Purest Solutions Hydra Serum Fondöten Light 30 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "8684990000091",
    "name": "The Purest Solutions Hydra Serum Fondöten Medium 30 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "8684990000107",
    "name": "The Purest Solutions Mat Serum Fondöten Light 30 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "8684990000114",
    "name": "The Purest Solutions Mat Serum Fondöten Medium 30 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "8684990001180",
    "name": "The Purest Solutions Hydraclean Micellar Suyu 400 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "8684990001388",
    "name": "The Purest Solutions Cilt Bakım Seti",
    "source": "local_watsons"
  },
  {
    "barcode": "8684990001395",
    "name": "The Purest Solutions Arındırıcı & Yenileyici Vücut Peelingi 210 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8684990001401",
    "name": "The Purest Solutions Cilt Bariyerini Destekleyen Yenileyici Vücut Losyonu 210 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8685043530008",
    "name": "Juene V-Lift Pro Yüz Germe Bandı 40'lı",
    "source": "local_rossmann"
  },
  {
    "barcode": "8685043530046",
    "name": "Juene Silikon Vakumlu Goğüs Ucu Gizleyici, 1 Adet",
    "source": "local_rossmann"
  },
  {
    "barcode": "8685048300027",
    "name": "Matsu Sun Day Isıya Karşı Saç Bakım Spreyi 200 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "8685048300034",
    "name": "Matsu Luxeoil Argan Saç Bakım Yağı 50 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "8685048300057",
    "name": "Matsu Silk Glaze Isı Koruyucu Sprey 200 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "8685048300064",
    "name": "Matsu Turkish Delight Saç Parfümü 50 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "8685048300125",
    "name": "Matsu Pillow Saç Parfümü & Body Mist 50 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "8685048775008",
    "name": "Baga Kırmızı Kil Özlü Derinlemesine Temizleyici Yüz Yıkama Jeli 200 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8685048775015",
    "name": "Baga AHA+BHA Peeling Etkili Canlandırıcı ve Gözenek Sıkılaştırıcı Cilt Temizleme Solüsyonu 200 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8685048775022",
    "name": "Baga Kırmızı Kil Maskesi 100 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8685048775039",
    "name": "Baga Botoks Etkili Nemlendirici Vitamin Complex Krem 50 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8685048775060",
    "name": "Baga Nemlendirici Vitamin Kompleks Serum 30 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8685048775084",
    "name": "Baga Aydınlatıcı Yoğun Nemlendirici Peeling Krem 200 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8685048775107",
    "name": "Baga Çay Ağacı Yağı Kremi 50 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8685048775121",
    "name": "Baga Anti Dark Cilt Rengini Açıcı & Aydınlatıcı Leke Kremi 50 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8685080100004",
    "name": "The Bath Factory Vücut Losyonu Liberty 200 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8685080100011",
    "name": "The Bath Factory Vücut Peelingi Sweet Vanilla 300 gr",
    "source": "local_gratis"
  },
  {
    "barcode": "8685080100059",
    "name": "The Bath Factory Nemlendirici ve Arındırıcı Dolche Lychee Vücut Peelingi 300 gr",
    "source": "local_gratis"
  },
  {
    "barcode": "8685094104005",
    "name": "Ashley Joy Matcha Gloss Glikolik Asit İçeren Işıltı ve Parlaklık Veren Saç Bakım Kremi 250 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "8685094104029",
    "name": "Ashley Joy Matcha Gloss Glikolik Asit İçeren Işıltı ve Parlaklık Veren Saç Bakım Sütü 150 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "8685094104067",
    "name": "Ashley Joy 7 Etkili Saç Koruycu Saç Spreyi 150 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8685094104135",
    "name": "Ashley Joy Bitkisel Eksozom Destekli Dökülme Karşıtı Tonik Saç Spreyi 150 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8685094104142",
    "name": "Ashley Joy Şekillendirici Saç Sakızı 90 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8685094104159",
    "name": "Ashley Joy Dalga Veren & Şekillendirici Etkili Deniz Tuzu Saç Spreyi 150 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8685210680130",
    "name": "Sea Color Toz Saç Boyası Siyah 1.0",
    "source": "local_watsons"
  },
  {
    "barcode": "8685210680147",
    "name": "Sea Color Aqua Hair Dye Kalıcı Toz Saç Boyası 1.1 Mavi Siyah",
    "source": "local_gratis"
  },
  {
    "barcode": "8685210680154",
    "name": "Sea Color Aqua Hair Dye Kalıcı Toz Saç Boyası 3.0 Koyu Kahve",
    "source": "local_gratis"
  },
  {
    "barcode": "8685210680161",
    "name": "Sea Color Aqua Hair Dye Kalıcı Toz Saç Boyası 4.0 Kahve",
    "source": "local_gratis"
  },
  {
    "barcode": "8685210680178",
    "name": "Sea Color Aqua Hair Dye Kalıcı Toz Saç Boyası 5.0 Açık Kahve",
    "source": "local_gratis"
  },
  {
    "barcode": "8685210680192",
    "name": "Sea Color Aqua Hair Dye Kalıcı Toz Saç Boyası 6.0 Koyu Kumral",
    "source": "local_gratis"
  },
  {
    "barcode": "8685210680208",
    "name": "Sea Color Aqua Hair Dye Kalıcı Toz Saç Boyası 6.7 Çikolata Kahve",
    "source": "local_gratis"
  },
  {
    "barcode": "8690088010590",
    "name": "Softem Kaş Kirpik Bakım Yağı 20 ml",
    "source": "local_rossmann"
  },
  {
    "barcode": "8690088018619",
    "name": "Shiffa Home Hindistan Cevizi Yağı 150 gr",
    "source": "local_rossmann"
  },
  {
    "barcode": "8690088034008",
    "name": "Softem Lavanta Yağı 20 ml",
    "source": "local_rossmann"
  },
  {
    "barcode": "8690138230060",
    "name": "Softem Çay Ağacı Yağı 20 ml",
    "source": "local_rossmann"
  },
  {
    "barcode": "8690506487980",
    "name": "Arko Nem Değerli Yağlar Avokado Krem 60 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8690506487997",
    "name": "Arko Nem Değerli Yağlar Avokado Krem 250 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8690506492069",
    "name": "Arko Nem Değerli Yağlar Hindistan Cevizi Krem 250 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8690506492083",
    "name": "Arko Nem Değerli Yağlar El ve Vücut Krem Zeytinyağlı, 250 ml",
    "source": "local_rossmann"
  },
  {
    "barcode": "8690506492090",
    "name": "Arko Nem Değerli Yağlar Zeytinyağlı Krem 60 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8690506507350",
    "name": "Arko Nem Prebiyotik Badem Sütü Krem 60 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8690506507367",
    "name": "Arko Nem Prebiyotik Badem Sütü Krem 250 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8690506520045",
    "name": "Arko Nem Soft Touch Nemlendirici 250 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8690506520046",
    "name": "Arko Nem Soft Touch Nemlendirici Bakım Kremi 250 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "8690506520052",
    "name": "Arko Nem Ekstra Nemlendirici 250 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8690506520083",
    "name": "Arko Nem Ekstra Nemlendirici 60 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8690506520084",
    "name": "Arko Nem Gliserinli El Kremi 60 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "8690506522599",
    "name": "Arko Nem Soft Touch Nemlendirici 60 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8690506553968",
    "name": "Arko Nem Su Bazlı Nemlendirici Jel Krem 250 ml",
    "source": "local_rossmann"
  },
  {
    "barcode": "8690506554019",
    "name": "Arko Nem Hyalüronik Asit Yoğun Bakım Kremi 250 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8690506556501",
    "name": "Arko Nem Hyalüronik Asit Yoğun Bakım Kremi 60 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8690506564582",
    "name": "Duru Nem Bombası Güçlü & Parlak Şampuan 600 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8690506564612",
    "name": "Duru Nem Bombası Güçlü & Parlak Saç Kremi 385 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8690506564629",
    "name": "Duru Nem Bombası Yoğun Onarım Saç Kremi 385 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8690506564636",
    "name": "Duru Sıvı Saç Kremi Yoğun Onarım Ve Nem 200 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "8690506564643",
    "name": "Duru Nem Bombası Yoğun Onarım Saç Bakım Maskesi 200 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8690506565183",
    "name": "Duru Nem Bombası Güçlü & Parlak Şampuan 400 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8690506565190",
    "name": "Duru Nem Bombası Yoğun Onarım Şampuan 400 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8690506565206",
    "name": "Duru Nem Bombası Dökülme Karşıtı Şampuan 400 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8690506565213",
    "name": "Duru Nem Bombası Arındırıcı ve Hacim Veren Şampuan 400 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8690506565220",
    "name": "Duru Nem Bombası Kepeğe Karşı Şampuan 400 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8690506567101",
    "name": "Arko Nem Extra Serum Leke Karşıtı Losyon 200 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "8690506567118",
    "name": "Arko Nem Extra Serum Yatıştırıcı Losyon 200 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "8690506567125",
    "name": "Arko Nem Extra Serum Sıkılaştırıcı Losyon 200 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "8690506567224",
    "name": "Arko Nem Hyaluronik Asit Yoğun Bakım Kremi 400 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "8690506571238",
    "name": "Arko Nem Extra Serum Bariyer Onarıcı Krem 300 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "8690506571245",
    "name": "Arko Nem Extra Serum Aydınlatıcı Krem 300 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "8690506571252",
    "name": "ARKO NEM EXTRA SERUM BARİYER ONARICI KREMİ 75ML",
    "source": "local_watsons"
  },
  {
    "barcode": "8690506571269",
    "name": "ARKO NEM EXTRA SERUM AYDINLATICI KREMİ 75ML",
    "source": "local_watsons"
  },
  {
    "barcode": "8690506574109",
    "name": "Duru Sıvı Saç Kremi Yoğun Onarım 190 ml",
    "source": "local_rossmann"
  },
  {
    "barcode": "8690529009701",
    "name": "Dalan d'Olive Besleyici Krem 20 ml",
    "source": "local_rossmann"
  },
  {
    "barcode": "8690529009718",
    "name": "Dalan D'Olive Organik Zeytinyağı Besleyici Krem 60 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8690529009733",
    "name": "Dalan Besleyici Hızlı Emilen Krem 250 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "8690529009855",
    "name": "Dalan D'Olive Doğal Zeytinyağı Onarıcı Yoğun Bakım Kremi 20 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8690529010363",
    "name": "Dalan d'Olive Besleyici Losyon 400 ml",
    "source": "local_rossmann"
  },
  {
    "barcode": "8690529010370",
    "name": "Dalan D'Olive Doğal Zeytinyağlı Onarıcı Vücut Yağı 200 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8690529011117",
    "name": "Dalan D'Olive Rahatlatıcı Aloe Vera Günlük Bakım Kremi 60 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8690529011148",
    "name": "Dalan D'Olive Organik Zeytinyağı Besleyici Krem 250 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8690529011179",
    "name": "Dalan D'Olive Doğal Zeytinyağı Onarıcı Yoğun Bakım Kremi 250 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8690529011186",
    "name": "Dalan D'Olive Organik Avokado Yağı Besleyici Krem 250 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8690529011193",
    "name": "Dalan D'Olive Rahatlatıcı Aloe Vera Günlük Bakım Kremi 250 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8690529011698",
    "name": "Dalan D'Olive Vitamin Kompleks Hindistan Cevizi Bakım Kremi 60 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "8690529012367",
    "name": "Dalan D'Olive Vitamin Kompleks Hindistan Cevizi Canlandırıcı Krem 250 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8690530024008",
    "name": "Egos Islak Sert Jöle 250 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "8690530024038",
    "name": "Egos Shine Islak & Sert Jöle 150 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8690530024069",
    "name": "Egos Islak Sert Jöle 400 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8690530024070",
    "name": "Egos Islak ve Sert Jöle 400 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "8690530024151",
    "name": "Egos Jöle Ultra Güçlü Tutuş 400 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8690530024152",
    "name": "Egos Ultra Güçlü Tutuş Jöle 400 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "8690530037441",
    "name": "John Frieda Şampuan Kusursuz Bukleler İçin 250 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "8690530037695",
    "name": "John Frieda Frizz Ease Curl Reviver Styling Mousse Saç Köpüğü",
    "source": "local_watsons"
  },
  {
    "barcode": "8690530038326",
    "name": "John Frieda Frizz Ease Saç Kremi Kuru ve Hasar Görmüş Saçlar İçin 250 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "8690530038395",
    "name": "John Frieda Şampuan Kuru ve Hasar Görmüş Saçlar İçin 250 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "8690530041578",
    "name": "Egos Wax Göz Alıcı Parlaklık 100 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "8690530041608",
    "name": "Egos Sert Wax 100 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "8690530077614",
    "name": "Uni Baby Sensitive Şampuan 500 ml",
    "source": "local_rossmann"
  },
  {
    "barcode": "8690530077645",
    "name": "Uni Baby Sensitive Şampuan 700 ml",
    "source": "local_rossmann"
  },
  {
    "barcode": "8690530077669",
    "name": "Uni Baby Sensitive Şampuan 900 ml",
    "source": "local_rossmann"
  },
  {
    "barcode": "8690530079618",
    "name": "Uni Baby Soft Care Şampuan Hindistan Cevizli 700 ml",
    "source": "local_rossmann"
  },
  {
    "barcode": "8690530079632",
    "name": "Uni Baby Soft Care Şampuan Zeytinyağlı 700 ml",
    "source": "local_rossmann"
  },
  {
    "barcode": "8690570553307",
    "name": "Veet Pure Ağda Bandı Bacak & Vücut Bölgesi Hassas Ciltler 20'li",
    "source": "local_gratis"
  },
  {
    "barcode": "8690570553314",
    "name": "Veet Pure Yüz Ağda Bandı Hassas Ciltler 20'li",
    "source": "local_gratis"
  },
  {
    "barcode": "8690570554519",
    "name": "Veet Yüz İçin Ağda Bandı 20'li 1 adet",
    "source": "local_rossmann"
  },
  {
    "barcode": "8690570554731",
    "name": "Veet Tüy Dökücü Krem Sprey 150 ml Hassas Ciltler İçin",
    "source": "local_gratis"
  },
  {
    "barcode": "8690570555219",
    "name": "Veet Mucizevi Yağ Yüz & Vücut 100 ml",
    "source": "local_rossmann"
  },
  {
    "barcode": "8690570555639",
    "name": "Veet Profesyonel Ağda Bandı Normal Ciltler 12'li",
    "source": "local_gratis"
  },
  {
    "barcode": "8690570555646",
    "name": "Veet Profesyonel Ağda Bandı Normal Ciltler 20'li",
    "source": "local_gratis"
  },
  {
    "barcode": "8690570555660",
    "name": "Veet Profesyonel Ağda Bandı Hassas Ciltler 12'li",
    "source": "local_gratis"
  },
  {
    "barcode": "8690570555677",
    "name": "Veet Profesyonel Ağda Bandı Hassas Ciltler 20'li",
    "source": "local_gratis"
  },
  {
    "barcode": "8690570555691",
    "name": "Veet Profesyonel Tüy Dökücü Krem Tüm Ciltler 100 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8690570555707",
    "name": "Veet Profesyonel Tüy Dökücü Krem Tüm Ciltler 200 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8690570555899",
    "name": "Veet Profesyonel Yüz Ağda Bandı Normal Ciltler 20'li",
    "source": "local_gratis"
  },
  {
    "barcode": "8690570555912",
    "name": "Veet Profesyonel Yüz Ağda Bandı Hassas Ciltler 20'li",
    "source": "local_gratis"
  },
  {
    "barcode": "8690570556216",
    "name": "Veet Pure Tüy Dökücü Krem Normal Ciltler 100 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8690570556223",
    "name": "Veet Pure Tüy Dökücü Krem Normal Ciltler 200 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8690570556230",
    "name": "Veet Pure Tüy Dökücü Krem Hassas Ciltler 100 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8690570556254",
    "name": "Veet Pure Tüy Dökücü Krem Hassas Ciltler 200 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8690570556940",
    "name": "Veet Profesyonel Bikini Tüy Dökücü Krem Seti 50 ml + 50 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8690572780893",
    "name": "Palette Deluxe Saç Boyası 3-65 Çikolata Kahve",
    "source": "local_gratis"
  },
  {
    "barcode": "8690572781197",
    "name": "Palette Deluxe Yoğun Renkler Saç Boyası 7-1 Asil Kumral",
    "source": "local_gratis"
  },
  {
    "barcode": "8690572781371",
    "name": "Palette Deluxe Saç Boyası 10-1 Küllü Açık Sarı",
    "source": "local_gratis"
  },
  {
    "barcode": "8690572781555",
    "name": "Palette Deluxe Saç Boyası UIL Ultra Yoğun Renk Açıcı",
    "source": "local_gratis"
  },
  {
    "barcode": "8690572792674",
    "name": "Gliss Supreme Length Şampuan 400 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8690572792780",
    "name": "Palette Deluxe Saç Boyası 6-0 Koyu Kumral",
    "source": "local_gratis"
  },
  {
    "barcode": "8690572793053",
    "name": "Palette Deluxe Saç Boyası 5-60 Sıcak Çikolata",
    "source": "local_gratis"
  },
  {
    "barcode": "8690572793954",
    "name": "Palette Deluxe Saç Boyası 7-77 Yoğun Parlak Bakır",
    "source": "local_gratis"
  },
  {
    "barcode": "8690572802229",
    "name": "Palette Deluxe Saç Boyası 4-99 Ametist Moru",
    "source": "local_gratis"
  },
  {
    "barcode": "8690572813119",
    "name": "Taft Power Express Saç Spreyi 250 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8690572813157",
    "name": "Taft Powerful Age Saç Spreyi 250 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8690572813195",
    "name": "Taft Ultimate Saç Spreyi 250 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8690572813232",
    "name": "Taft Keratin Saç Spreyi 250 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8690572813270",
    "name": "Taft Classic Ekstra Güçlü Saç Spreyi 250 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8690572813317",
    "name": "Taft Ultra Saç Spreyi 250 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8690572813676",
    "name": "Gliss Oil Nutritive Şampuan 400 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8690572813713",
    "name": "Gliss Ultimate Repair Şampuan 400 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8690572813751",
    "name": "Gliss Şampuan Supreme Length 400 ml",
    "source": "local_rossmann"
  },
  {
    "barcode": "8690572813799",
    "name": "Gliss Aqua Revive Şampuan 400 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8690572813800",
    "name": "Gliss Aqua Revive Nemlendirici Şampuan Hyaluron ve Deniz Yosunu Özü ile 400 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "8690572813836",
    "name": "Gliss Split Hair Miracle Şampuan 400 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8690572814208",
    "name": "Gliss Serum Deep Repair Şampuan 400 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8690572814209",
    "name": "Gliss Şampuan Deep Repair 400 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "8690572814277",
    "name": "Gliss Liquid Silk Şampuan 400 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8690572814666",
    "name": "Gliss Summer Repair Onarıcı Şampuan 400 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8690572917060",
    "name": "Taft Power Kafein Wax 75 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8690595206738",
    "name": "Garnier Işıltılı Doku Güneş Kremi+Micellar Makyaj Temizleme Suyu",
    "source": "local_watsons"
  },
  {
    "barcode": "8690595211459",
    "name": "Garnier Pimple Patch Sivilce Bandı 22'li - Hidrokolloid Bant",
    "source": "local_gratis"
  },
  {
    "barcode": "8690595230504",
    "name": "Loreal Paris Yaş Uzmanı 45+ Kırışıklık Karşıtı Nemlendirici Krem 50 ml + Bright Reveal Koyu Lekelere",
    "source": "local_gratis"
  },
  {
    "barcode": "8690595230566",
    "name": "Loreal Paris Yaş Uzmanı 35+ Kırışıklık Karşıtı Nemlendirici Krem 50 ml + Bright Reveal Koyu Lekelere",
    "source": "local_gratis"
  },
  {
    "barcode": "8690595231686",
    "name": "Elseve Şampuan Glycolic Gloss Core 300 ml + 150 ml Sıvı Sprey",
    "source": "local_rossmann"
  },
  {
    "barcode": "8690595235462",
    "name": "L'Oreal Paris Elseve Dream Long Şampuan 300 ml + Serum 100 ml Set",
    "source": "local_watsons"
  },
  {
    "barcode": "8690605035228",
    "name": "Dalin Klasik Vazelin 100 ml",
    "source": "local_rossmann"
  },
  {
    "barcode": "8690605042288",
    "name": "Sesu Ağda Bezi 10 Metre",
    "source": "local_gratis"
  },
  {
    "barcode": "8690605062170",
    "name": "Dalin Kolay Tarama Spreyi 50 ml",
    "source": "local_rossmann"
  },
  {
    "barcode": "8690605072957",
    "name": "Sesu Soft Roll-On Sir Ağda 100 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8690605073015",
    "name": "Sesu Tüy Dökücü Krem Hassas Ciltler 100 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8690605073091",
    "name": "Sesu Tüy Dökücü Krem Normal Ciltler 100 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8690605073374",
    "name": "Sesu Ağda Bandı Yüz Hassas Ciltler 20'li",
    "source": "local_gratis"
  },
  {
    "barcode": "8690605073503",
    "name": "Sesu Sir Ağda Sonrası Temizleyici Bakım Yağı 150 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8690605073695",
    "name": "Sesu Boncuk Sir Ağda Ağdaya İlk Adım 250 gr",
    "source": "local_gratis"
  },
  {
    "barcode": "8690605073718",
    "name": "Sesu Soft Boncuk Ağda 250 gr",
    "source": "local_gratis"
  },
  {
    "barcode": "8690605073787",
    "name": "Sesu Tüy Dökücü Krem Ağdaya İlk Adım 100 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8690605073947",
    "name": "Sesu Roll-on Sir Ağda 100 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8690605078218",
    "name": "Sesu El & Vücut Peelingi 250 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8690605078393",
    "name": "Sesu Hassas Ciltlere Özel Ağda Bandı 12'li",
    "source": "local_gratis"
  },
  {
    "barcode": "8690605078775",
    "name": "Sesu Ağdaya İlk Adım Seti 24'lü",
    "source": "local_gratis"
  },
  {
    "barcode": "8690605078782",
    "name": "Sesu Soft Ağda Bandı 32'li",
    "source": "local_gratis"
  },
  {
    "barcode": "8690605078799",
    "name": "Sesu Soft Yüz Ağda Bandı 12'li",
    "source": "local_gratis"
  },
  {
    "barcode": "8690605078805",
    "name": "Sesu Hassas Ciltlere Özel Ağda Bandı 20'li",
    "source": "local_gratis"
  },
  {
    "barcode": "8690605078812",
    "name": "Sesu Hassas Ciltlere Özel Maxi Set Ağda Bandı 40'lı",
    "source": "local_gratis"
  },
  {
    "barcode": "8690605082901",
    "name": "Sesu Ilık Ağda Turuncu 250 gr",
    "source": "local_gratis"
  },
  {
    "barcode": "8690605083274",
    "name": "Sesu Pembe Ilık Ağda 250 gr",
    "source": "local_gratis"
  },
  {
    "barcode": "8690605083397",
    "name": "Sesu Ağdaya İlk Adım Roll-On Ağda 100 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8690605083403",
    "name": "Sesu Roll-On Sir Ağda Hassas Ciltler 100 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8690605088637",
    "name": "Dalin Kolay Trama Spreyi Peri Işıltısı 200 ml",
    "source": "local_rossmann"
  },
  {
    "barcode": "8690605089061",
    "name": "Sesu Yüz Sir Ağda Bantları Ağdaya İlk Adım Seti 20'li",
    "source": "local_gratis"
  },
  {
    "barcode": "8690605670023",
    "name": "Sesu Klasik Ağda 250 gr",
    "source": "local_gratis"
  },
  {
    "barcode": "8690605670108",
    "name": "Sesu Tüy Sarartıcı Krem 35 gr + 18 gr",
    "source": "local_gratis"
  },
  {
    "barcode": "8690637789359",
    "name": "Toni&Guy Deniz Tuzu Etkili Sprey 200 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "8690637945145",
    "name": "Toni&Guy Yıpranmış Saçlar İçin Özel Bakım Şampuanı 250 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "8690637960131",
    "name": "Toni&Guy Yoğun Arındırıcı Şampuan 250 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "8690644008535",
    "name": "Pastel Keratinli Güçlendirici Tırnak Bakımı",
    "source": "local_watsons"
  },
  {
    "barcode": "8690644117015",
    "name": "Pastellab. Culticle Nail Care Cream Tırnak ve Tırnak Eti Bakım Kremi",
    "source": "local_watsons"
  },
  {
    "barcode": "8690644146015",
    "name": "Pastel Cilt Serumu Profashion Glassy Glow",
    "source": "local_rossmann"
  },
  {
    "barcode": "8690644159015",
    "name": "Pastellab. Lip Renewal Fresh Mint Scrub Yenileyici Dudak Bakım Scrub",
    "source": "local_watsons"
  },
  {
    "barcode": "8690644161216",
    "name": "Pastellab. Lip Sleeping Mask Dudak Bakım Maskesi Peach",
    "source": "local_watsons"
  },
  {
    "barcode": "8690644161230",
    "name": "Pastellab. Lip Sleeping Mask Dudak Bakım Maskesi Blueberry",
    "source": "local_watsons"
  },
  {
    "barcode": "8690644162015",
    "name": "Pastellab. Pure Face Peeling Gel Arındırıcı ve Tazeleyici Yüz Peeling Gel",
    "source": "local_watsons"
  },
  {
    "barcode": "8690644356100",
    "name": "Pastel X Arzu Sabancı Face and Body ve Hair Illumizing, 1 Adet",
    "source": "local_rossmann"
  },
  {
    "barcode": "8690691089921",
    "name": "Sesu El & Vücut Peelingi Aqua Fresh 250 gr",
    "source": "local_gratis"
  },
  {
    "barcode": "8690694089959",
    "name": "Sesu El & Vücut Peelingi Blueberry 250 gr",
    "source": "local_gratis"
  },
  {
    "barcode": "8690812020857",
    "name": "Kuaf Saç Kırıkları Giderici Serum 40 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8690812113856",
    "name": "Kuaf Tuzsuz Keratin Saç Bakım Şampuanı 1000 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8690812113900",
    "name": "Kuaf Tuzsuz Keratin Saç Bakım Şampuanı 500 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8690812125132",
    "name": "Kuaf Keratin Saç Bakım Maskesi 500 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8690812125149",
    "name": "Kuaf Argan Saç Bakım Maskesi 500 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8690841010034",
    "name": "Bebak Acı Badem Kremi Kavanoz 70 gr",
    "source": "local_rossmann"
  },
  {
    "barcode": "8690841010720",
    "name": "Bebak Bacak ve Vücut Fondöteni 2 Numara Medium 75 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "8690841017477",
    "name": "Bebak Acı Badem Sütlü Makyaj Temizleme Mendili 20'li",
    "source": "local_gratis"
  },
  {
    "barcode": "8690841018047",
    "name": "Bebak Bacak ve Vücut Fondöteni Extra Light Açık 0 Numara 75 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "8690841020064",
    "name": "Bebak Acı Badem Sütü Büyük 215 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8690885222721",
    "name": "Derby Lady 2 Kadın Tıraş Bıçağı 5'li Poşet",
    "source": "local_gratis"
  },
  {
    "barcode": "8690885224770",
    "name": "Derby Lady Kadın Tıraş Bıçağı 10+4 Poşetli",
    "source": "local_gratis"
  },
  {
    "barcode": "8690885241371",
    "name": "Derby Lady Neon Kadın Tıraş Bıçağı 10'lu",
    "source": "local_gratis"
  },
  {
    "barcode": "8690885241692",
    "name": "Derby Lady Platinum 3 Blister 4'lü Tıraş Bıçağı",
    "source": "local_gratis"
  },
  {
    "barcode": "8690937009355",
    "name": "Hobby Çocuk Saç Jölesi 150 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8690937009393",
    "name": "Hobby Mermaid Deniz Tuzu Saç Spreyi 250 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8690937009614",
    "name": "Hobby Ultra Güçlü Saç Spreyi 250 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8690937009713",
    "name": "Hobby Islak Jöle Style & Protect, 24 Saat Etkili 250 ml",
    "source": "local_rossmann"
  },
  {
    "barcode": "8690937009874",
    "name": "Hobby Style & Protect Matte Wax 100 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8690937010719",
    "name": "Hobby Crazy Extra Sert Jöle 700 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8690937010733",
    "name": "Hobby Kıvırcık Saç Köpüğü 150 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8690937010962",
    "name": "Hobby Keratin Saç Spreyi 250 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8690937010993",
    "name": "Hobby Kıvırcık Şampuan 250 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8690937011648",
    "name": "Hobby Classic Nemlendirici El ve Vücut Losyonu 300 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8690937012263",
    "name": "Hobby Keratin Saç Köpüğü 150 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8690937012355",
    "name": "Hobby Kıvır Kıvır Jöle 150 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8690937013031",
    "name": "Hobby Kıvırcık Saç Şekillendirici Krem 150 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8690937013147",
    "name": "Hobby Isıya Karşı Koruyucu Saç Spreyi 250 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8690937013154",
    "name": "Hobby Bitki Özlü Saç Şekillendirici Jöle Aloe Vera & Ada Çayı 150 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8690937013161",
    "name": "Hobby Bitki Özlü Saç Şekillendirici Jöle Isırgan & Papatya 150 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8690937013246",
    "name": "Hobby Kıvır Kıvır Bukle Saç Jölesi 250 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8690937013642",
    "name": "Hobby Volume Up Saç Köpüğü 150 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8690937013802",
    "name": "Hobby Volume Up Saç Spreyi 250 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8690937014144",
    "name": "Hobby Klasik Saç Kremi 500 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8690937014731",
    "name": "Hobby Shea Yağı Vücut Losyonu 400 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8690937014885",
    "name": "Hobby Şampuan Argan Papatya 500 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8690937014908",
    "name": "Hobby Şampuan Isırgan 2'si 1 Arada 500 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8690937014991",
    "name": "Hobby Style & Protect Carbon Jöle 400 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8690937015011",
    "name": "Hobby Style & Protect Islak Sert Jöle 400 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8690937015028",
    "name": "Hobby Style & Protect Islak Jöle 400 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8690937015035",
    "name": "Hobby Style & Protect Ultra Sert Carbon Jöle 250 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8690937015073",
    "name": "Hobby Style & Protect Sert Jöle 250 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8690937015608",
    "name": "Hobby Gliserin Yoğun Nemlendirici El ve Vücut Kremi 250 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8690937015660",
    "name": "Hobby Crazy Islak Sert Jöle 700 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8690937990486",
    "name": "Hobby Style & Protect Ekstra Hacim Saç Köpüğü 150 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8690937990493",
    "name": "Hobby Style & Protect İpeksi Dokunuş Saç Köpüğü 150 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8690937990523",
    "name": "Hobby Carbon Wax Style & Protect, 24 Saat Etkili 125 ml",
    "source": "local_rossmann"
  },
  {
    "barcode": "8690937990547",
    "name": "Hobby Mermaid Sıvı Saç Bakım Kremi 240 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8690973376961",
    "name": "Ashley Joy Saç Bakım Yağı 100 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8690973378835",
    "name": "Ashley Joy Argan & Zeytinyağlı Şampuan 400 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8690973380869",
    "name": "Ashley Joy Elektriklenme Karşıtı Şampuan 400 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8690973382917",
    "name": "Ashley Joy Onarıcı Saç Kremi 250 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8690973384515",
    "name": "Ashley Joy Güçlendirici Dökülme Karşıtı Şampuan 400 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8690973384522",
    "name": "Ashley Joy Kepek Önleyici ve Dökülme Karşıtı Erkek Şampuanı 400 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "8691190067144",
    "name": "Golden Rose Beyaz Saç Kapatıcı Stick No.02 Dark Brown",
    "source": "local_rossmann"
  },
  {
    "barcode": "8691190067588",
    "name": "Golden Rose Beyaz Saç Kapatıcı Stick No.05 Brown 1 adet",
    "source": "local_rossmann"
  },
  {
    "barcode": "8691190440787",
    "name": "Golden Rose Glow Kiss Tinted Lip Balm No: 01",
    "source": "local_watsons"
  },
  {
    "barcode": "8691190440794",
    "name": "Golden Rose Glow Kiss Tinted Lip Balm No: 02",
    "source": "local_watsons"
  },
  {
    "barcode": "8691190440800",
    "name": "Golden Rose Glow Kiss Tinted Lip Balm No: 03",
    "source": "local_watsons"
  },
  {
    "barcode": "8691190440817",
    "name": "Golden Rose Glow Kiss Tinted Lip Balm No: 04",
    "source": "local_watsons"
  },
  {
    "barcode": "8691190440824",
    "name": "Golden Rose Glow Kiss Tinted Lip Balm No: 05",
    "source": "local_watsons"
  },
  {
    "barcode": "8691190440831",
    "name": "Golden Rose Glow Kiss Tinted Lip Balm No: 06",
    "source": "local_watsons"
  },
  {
    "barcode": "8691190441807",
    "name": "Golden Rose Miss Beauty Tint Lip Oil 01 Strawberry Renklendirici Dudak Yağı",
    "source": "local_rossmann"
  },
  {
    "barcode": "8691190441814",
    "name": "Golden Rose Miss Beauty Tint Lip Oil 02 Cherry Renklendirici Dudak Yağı",
    "source": "local_rossmann"
  },
  {
    "barcode": "8691190442972",
    "name": "Golden Rose Keratin Oje Color Clear",
    "source": "local_watsons"
  },
  {
    "barcode": "8691190443160",
    "name": "Golden Rose Keratin Oje No: 01",
    "source": "local_watsons"
  },
  {
    "barcode": "8691190443177",
    "name": "Golden Rose Keratin Oje No: 02",
    "source": "local_watsons"
  },
  {
    "barcode": "8691190443191",
    "name": "Golden Rose Keratin Oje No: 04",
    "source": "local_watsons"
  },
  {
    "barcode": "8691190443207",
    "name": "Golden Rose Keratin Oje No: 05",
    "source": "local_watsons"
  },
  {
    "barcode": "8691190443313",
    "name": "Golden Rose Keratin Oje No: 16",
    "source": "local_watsons"
  },
  {
    "barcode": "8691190443467",
    "name": "Golden Rose Keratin Oje No: 31",
    "source": "local_watsons"
  },
  {
    "barcode": "8691190443528",
    "name": "Golden Rose Keratin Oje No: 37",
    "source": "local_watsons"
  },
  {
    "barcode": "8691190443535",
    "name": "Golden Rose Keratin Oje No: 38",
    "source": "local_watsons"
  },
  {
    "barcode": "8691190443542",
    "name": "Golden Rose Keratin Oje No: 39",
    "source": "local_watsons"
  },
  {
    "barcode": "8691190443566",
    "name": "Golden Rose Keratin Oje No: 41",
    "source": "local_watsons"
  },
  {
    "barcode": "8691190443573",
    "name": "Golden Rose Keratin Oje No: 42",
    "source": "local_watsons"
  },
  {
    "barcode": "8691190443610",
    "name": "Golden Rose Keratin Oje No: 46",
    "source": "local_watsons"
  },
  {
    "barcode": "8691190443634",
    "name": "Golden Rose Keratin Oje No: 48",
    "source": "local_watsons"
  },
  {
    "barcode": "8691190443832",
    "name": "Golden Rose Keratin Oje No: 68",
    "source": "local_watsons"
  },
  {
    "barcode": "8691190443931",
    "name": "Golden Rose Keratin Oje No: 78",
    "source": "local_watsons"
  },
  {
    "barcode": "8691190443962",
    "name": "Golden Rose Keratin Oje No: 81",
    "source": "local_watsons"
  },
  {
    "barcode": "8691190469856",
    "name": "Golden Rose Keratin Oje No: 219",
    "source": "local_watsons"
  },
  {
    "barcode": "8691190486969",
    "name": "Golden Rose Keratin Glitter Oje No: 402",
    "source": "local_watsons"
  },
  {
    "barcode": "8691190486983",
    "name": "Golden Rose Keratin Glitter Oje No: 404",
    "source": "local_watsons"
  },
  {
    "barcode": "8691190487034",
    "name": "Golden Rose Keratin Glitter Oje No: 409",
    "source": "local_watsons"
  },
  {
    "barcode": "8691190487041",
    "name": "Golden Rose Keratin Glitter Oje No: 410",
    "source": "local_watsons"
  },
  {
    "barcode": "8691190487089",
    "name": "Golden Rose Keratin Oje Glitter No: 414",
    "source": "local_watsons"
  },
  {
    "barcode": "8691190535322",
    "name": "Golden Rose Keratin Oje No: 124",
    "source": "local_watsons"
  },
  {
    "barcode": "8691190535339",
    "name": "Golden Rose Keratin Oje No: 125",
    "source": "local_watsons"
  },
  {
    "barcode": "8691190535346",
    "name": "Golden Rose Keratin Oje No: 126",
    "source": "local_watsons"
  },
  {
    "barcode": "8691190535353",
    "name": "Golden Rose Keratin Oje No: 127",
    "source": "local_watsons"
  },
  {
    "barcode": "8691190535377",
    "name": "Golden Rose Keratin Oje No: 129",
    "source": "local_watsons"
  },
  {
    "barcode": "8691190535384",
    "name": "Golden Rose Keratin Oje No: 130",
    "source": "local_watsons"
  },
  {
    "barcode": "8691190539795",
    "name": "Golden Rose Miss Beauty Tint Lip Oil 03 Green Apple Renklendirici Dudak Yağı",
    "source": "local_rossmann"
  },
  {
    "barcode": "8691190539801",
    "name": "Golden Rose Miss Beauty Tint Lip Oil 04 Lemon Renklendirici Dudak Yağı",
    "source": "local_rossmann"
  },
  {
    "barcode": "8691190539900",
    "name": "Golden Rose Keratin Oje No: 131",
    "source": "local_watsons"
  },
  {
    "barcode": "8691190539917",
    "name": "Golden Rose Keratin Oje No: 132",
    "source": "local_watsons"
  },
  {
    "barcode": "8691190539924",
    "name": "Golden Rose Keratin Oje No: 133",
    "source": "local_watsons"
  },
  {
    "barcode": "8691190562403",
    "name": "Golden Rose Keratin Oje No: 134",
    "source": "local_watsons"
  },
  {
    "barcode": "8691190562410",
    "name": "Golden Rose Keratin Oje No: 135",
    "source": "local_watsons"
  },
  {
    "barcode": "8691190562427",
    "name": "Golden Rose Keratin Oje No: 136",
    "source": "local_watsons"
  },
  {
    "barcode": "8691190562434",
    "name": "Golden Rose Keratin Oje No: 137",
    "source": "local_watsons"
  },
  {
    "barcode": "8691190562441",
    "name": "Golden Rose Keratin Oje No: 138",
    "source": "local_watsons"
  },
  {
    "barcode": "8691400510163",
    "name": "Balmy Vücut Peeling Çilekli Limonata 250 gr",
    "source": "local_gratis"
  },
  {
    "barcode": "8691400510187",
    "name": "Balmy Vücut Peelingi Mango Ananas 250 gr",
    "source": "local_gratis"
  },
  {
    "barcode": "8691400510200",
    "name": "Balmy Vücut Peeling Hindistan Cevizi 250 gr",
    "source": "local_gratis"
  },
  {
    "barcode": "8691400510255",
    "name": "Balmy Vücut Losyonu Harmonia 200 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8691400510262",
    "name": "Balmy Vücut Losyonu Carmenta 200 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8691400510279",
    "name": "Balmy Vücut Losyonu Feronia 200 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8691685005972",
    "name": "Eyüp Sabri Tuncer Doğal Zeytinyağlı Şampuan 600 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8691685013182",
    "name": "Eyüp Sabri Tuncer Doğal Argan Yağlı Şampuan 600 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8691685023433",
    "name": "Eyüp Sabri Tuncer Frambuazlı Sirke ve Saç Toniği 500 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8691988005235",
    "name": "Benri Saç Jölesi 50 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8691988005242",
    "name": "Benri Killi Mat Wax 100 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8691988006768",
    "name": "Benri Saç Jölesi 250 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8691988009431",
    "name": "Bee Beauty Biotin & Keratin Saç Bakım Maskesi 300 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8691988010369",
    "name": "Benri Saç Maskesi İncir & Zeytinyağı 500 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8691988010376",
    "name": "Benri Saç Maskesi Angelica & Argan 500 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8691988010383",
    "name": "Benri Saç Maskesi Shea Butter & Avokado 500 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8691988011427",
    "name": "Bee Beauty Biotin Sıvı Saç Kremi 200 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8691988011434",
    "name": "Bee Beauty Keratin Sıvı Saç Kremi 200 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8691988011441",
    "name": "Bee Beauty Kolajen Sıvı Saç Kremi 200 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8691988011502",
    "name": "Bee Beauty Saç Maskesi Hindistan Cevizi 25 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8691988011519",
    "name": "Bee Beauty Saç Maskesi Hacim Kazandırıcı 25 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8691988011526",
    "name": "Bee Beauty Saç Maskesi Renk Koruyucu 25 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8691988011533",
    "name": "Bee Beauty Saç Maskesi Bukle Belirginleştirici 25 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8691988011540",
    "name": "Bee Beauty Saç Maskesi Keratin 25 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8691988011564",
    "name": "Bee Beauty Saç Maskesi Argan 25 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8692186880013",
    "name": "Bee Beauty Lip Balm Strawberry Kiss",
    "source": "local_gratis"
  },
  {
    "barcode": "8692186880020",
    "name": "Bee Beauty Lip Balm Cherry Kiss",
    "source": "local_gratis"
  },
  {
    "barcode": "8692186880051",
    "name": "Bee Beauty Lip Balm Sugar Kiss",
    "source": "local_gratis"
  },
  {
    "barcode": "8692641043205",
    "name": "Benri Saç Spreyi Ultra Güçlü Tutuş 75 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8692641043229",
    "name": "Benri Saç Köpüğü 100 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8693347000790",
    "name": "Rosense Temizleme Köpüğü 80 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "8693347001711",
    "name": "Rosense Sıkılaştırıcı Tonik 200 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "8693347007638",
    "name": "Rosense Cilt Bakım Yağı 30 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "8694965544901",
    "name": "Dp Pro Detox Şampuanı 500 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8694965546288",
    "name": "Dp Pro Durulanmayan Sıvı Saç Kremi 200 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8694965546325",
    "name": "Dp Şampuan Pamuk Sütü ve Buğday Proteini 425 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8694965546332",
    "name": "Dp Şampuan Çam Terebentin 425 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8694965546349",
    "name": "Dp Şampuan Çörek Otu Yağı 425 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8694965546356",
    "name": "Dp Şampuan Kantaron 425 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8694965546363",
    "name": "Dp Şampuan Karanfil Özlü 425 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8694965546370",
    "name": "Dp Şampuan Mentol 425 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8694965546387",
    "name": "Dp Şampuan Moringa 425 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8694965547001",
    "name": "Daily Perfection Pro Reactivatör Şampuan 450 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8694965547148",
    "name": "Daily Perfection Pro Onarıcı Bakım Vitamin Serum Shot 2*6=12 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8694965549715",
    "name": "Dp Şampuan Kepek Önleyici 425 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8694965549722",
    "name": "Dp Şampuan Hyalüronik Asit 425 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8694965549739",
    "name": "Dp Şampuan Bond Repair 425 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8694965552005",
    "name": "Dp Saç Kremi 400 ml Pamuk Sütü & Hindistan Cevizi",
    "source": "local_gratis"
  },
  {
    "barcode": "8694965552012",
    "name": "Dp Saç Kremi 400 ml Çam Terebentin",
    "source": "local_gratis"
  },
  {
    "barcode": "8694965552579",
    "name": "Dp Daily Perfection Argan Yağlı ve E Vitaminli Yoğun Onarıcı Saç Bakım Yağı 100 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8694965553057",
    "name": "Dp Daily Perfection Karanfil Özlü Saç Bakım Kremi 400 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8694965553484",
    "name": "Dp Saç Bakım Kremi Çörek Otu Yağı 400 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8694965553507",
    "name": "Dp Durulanmayan Dolgunlaştırıcı Sıvı Saç Kremi Pamuk Sütü 200 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8694965553514",
    "name": "Dp Durulanmayan Yoğun Onarıcı Sıvı Saç Kremi Çam Terebentin 200 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8694965553521",
    "name": "Dp Durulanmayan Kırık Onarıcı Sıvı Saç Kremi Karanfil 200 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8694965553538",
    "name": "Dp Durulanmayan Sıvı Saç Bakım Kremi Çörek Otu Yağı 200 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8694965554092",
    "name": "Dp Daily Perfection Pamuk Sütlü Çift Fazlı Fön Suyu 200 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8697415100894",
    "name": "Nascita Saç Fırçası Side Askılı 1 adet",
    "source": "local_rossmann"
  },
  {
    "barcode": "8697415100948",
    "name": "Nascita Saç Fırçası Side Fön 03A 1 adet",
    "source": "local_rossmann"
  },
  {
    "barcode": "8697415100962",
    "name": "Nascita Saç Fırçası Side Fön 05 1 adet",
    "source": "local_rossmann"
  },
  {
    "barcode": "8697415100963",
    "name": "Nascita Fön Fırçası Side05A",
    "source": "local_watsons"
  },
  {
    "barcode": "8697415102584",
    "name": "Nascita Saç Fırçası Truva Ahşap",
    "source": "local_rossmann"
  },
  {
    "barcode": "8697415102608",
    "name": "Nascita Saç Açma Fırçası Ahşap 2133A",
    "source": "local_watsons"
  },
  {
    "barcode": "8697422250018",
    "name": "Vi-Vet Yüz, Kol ve Bacaklar İçin Tüy Sarartıcı Krem 70 ml + Aktivatör Krem 35 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8697422250025",
    "name": "Vi-Vet Unisex Tüy Dökücü Krem 100 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8697422250360",
    "name": "Vi-Vet Kartuş Sir Ağda Naturel 100 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8697422250377",
    "name": "Vi-Vet Kartuş Sir Ağda Azulen 100 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8697422250384",
    "name": "Vi-Vet Kartuş Sir Ağda Pudralı 100 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8697422251275",
    "name": "Vi-Vet Ağda Bezi Rulo 10 Metre",
    "source": "local_gratis"
  },
  {
    "barcode": "8697422251305",
    "name": "Vi-Vet Granül Sir El Ağdası Siyah 250 gr (Güçlü Tutuş)",
    "source": "local_gratis"
  },
  {
    "barcode": "8697422251466",
    "name": "Vi-Vet Sir Ağda Bant Seti Azulen 41'li (20 Vücut Bandı + 8 Yüz Bandı + 8 Koltuk Altı Bandı + 5 Temizleme Mendili)",
    "source": "local_gratis"
  },
  {
    "barcode": "8697422251480",
    "name": "Vi-Vet Yüz İçin Sir Ağda Bant Seti Azulen 27'li (24 Yüz Bandı + 3 Temizleme Mendili)",
    "source": "local_gratis"
  },
  {
    "barcode": "8697422251497",
    "name": "Vi-Vet Yüz İçin Sir Ağda Bant Seti Portakal 27'li (24 Yüz Bandı + 3 Temizleme Mendili)",
    "source": "local_gratis"
  },
  {
    "barcode": "8697422251695",
    "name": "Vi-Vet Sir Ağda Bant Seti Pudralı 41'li (20 Vücut Bandı + 8 Yüz Bandı + 8 Koltuk Altı Bandı + 5 Temizleme Mendili)",
    "source": "local_gratis"
  },
  {
    "barcode": "8697422251831",
    "name": "Vi-Vet Yüz İçin Sir Ağda Bant Seti Pudralı 27'li (24 Yüz Bandı + 3 Temizleme Mendili)",
    "source": "local_gratis"
  },
  {
    "barcode": "8697422259011",
    "name": "Vi-Vet Ağda Bezi 2 metre + Spatula (10 Adet 20 cm Dilimli Ağda Bezi + 1 Spatula)",
    "source": "local_gratis"
  },
  {
    "barcode": "8697429642374",
    "name": "Revox X-Treme Dökülen ve Geç Uzayan Saçlar için Şampuan 400 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "8697432090260",
    "name": "Bioxcin Saç Dökülmesine Karşı Bitkisel Klasik Şampuan Yağlı Saçlar 300 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8697432090277",
    "name": "Bioxcin Saç Dökülmesine Karşı Bitkisel Klasik Şampuan Kuru ve Normal Saçlar 300 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8697432091755",
    "name": "Bioxcin Forte Saç Dökülmesine Karşı Bitkisel Şampuan Tüm Saç Tipleri 300 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8697432094008",
    "name": "Bioblas Çinko + Mentol Saç Dökülmesi ve Kepeğe Karşı Şampuan 360 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8697432094015",
    "name": "Bioblas Botanic Oils Isırgan Yağlı Şampuan 360 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8697432094039",
    "name": "Bioblas Procyanidin Saç Dökülmesine & Yağlanmaya Karşı Şampuan 360 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8697432094268",
    "name": "Bioblas Argan Saç Bakım Kremi 250 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8697432096187",
    "name": "Bioblas Procyanidin Saç Dökülmesine Karşı Anti-Stress Şampuan 360 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8697432096453",
    "name": "Restorex Uzama Etkili Kuru ve Yıpranmış Saçlar için Saç Bakım Şampuanı 500 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8697432096460",
    "name": "Restorex Sağlıklı Uzama Etkili Yağlı Saçlar için Saç Bakım Şampuanı 500 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8697432096477",
    "name": "Restorex Sağlıklı Uzama Etkili Saç Dökülmesine Karşı Şampuan 500 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8697623901757",
    "name": "Tresan Saç Toniği Güçlendiren ve Canlandıran 125 ml",
    "source": "local_rossmann"
  },
  {
    "barcode": "8697623901801",
    "name": "Tresan Papatya Yumuşatıcı Bakım Şampuanı 300 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8697623901818",
    "name": "Tresan Biberiye Canlandırıcı Bakım Şampuanı 300 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8697623902075",
    "name": "Tresan Dökülme Karşıtı Isırgan Otu Güçlendirici Bakım Şampuanı Yağlı Saçlar 300 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8697623902082",
    "name": "Tresan Dökülme Karşıtı Isırgan Otu Güçlendirici Bakım Şampuanı Normal ve Kuru Saçlar 300 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8697623902099",
    "name": "Tresan Sarımsak Özlü Onarıcı Bakım Şampuanı 300 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8697623902105",
    "name": "Tresan 6 Bitki Kepek Karşıtı Bakım Şampuanı 300 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8697623902136",
    "name": "Tresan Argan Yağı & Phytokeratin Besleyici ve Kırılma Karşıtı Bakım Şampuanı 300 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8697623902143",
    "name": "Tresan Atkuyruğu & Phytocomplex Hacimlendirici Bakım Şampuanı 300 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8697623902327",
    "name": "Tresan Kayın Ağacı Güçlendirici ve Canlandırıcı Saç Toniği 125 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8697623902808",
    "name": "Tresan Kafein & Peptit Dökülme Karşıtı Saç Bakım Şampuanı 300 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8697623902822",
    "name": "Tresan Kafein & Peptit Dökülme Karşıtı Saç Toniği 125 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8697623902839",
    "name": "Tresan Biberiye Canlandırıcı Sülfatsız Bakım Saç Kremi 300 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8697623902846",
    "name": "Tresan Bal Kabağı Çekirdeği Onarıcı Sülfatsız Bakım Şampuanı 300 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8697623902853",
    "name": "Tresan Bal Kabağı Çekirdeği Onarıcı Sülfatsız Bakım Saç Kremi 300 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8697623902860",
    "name": "Tresan Meyan Kökü Yoğun Nemlendirici Sülfatsız Bakım Şampuanı 300 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8697623902877",
    "name": "Tresan Meyan Kökü Yoğun Nemlendirici Sülfatsız Bakım Saç Kremi 300 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8697623902884",
    "name": "Tresan Çemen Otu Güçlendirici Sülfatsız Bakım Şampuanı 300 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8697623902891",
    "name": "Tresan Çemen Otu Güçlendirici Sülfatsız Bakım Saç Kremi 300 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8697623903485",
    "name": "Tresan Organik Biberiye & Nane Dökülme ve Yıpranma Karşıtı Saç Toniği 125 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8697623903492",
    "name": "Tresan Kafein & Peptit Dökülme Karşıtı Saç Bakım Kremi 300 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8697623903638",
    "name": "Tresan Castor Oil Saç Bakım Toniği 125 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8697623903645",
    "name": "Tresan Castor Oil Güçlendirici Saç Bakım Yağı Kompleksi 50 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8697623903652",
    "name": "Tresan Hindistan Cevizi & Avokado Onarıcı ve Extra Nemlendirici Çift Fazlı Durulanmayan Sıvı Saç Kre",
    "source": "local_gratis"
  },
  {
    "barcode": "8697623903669",
    "name": "Tresan Bal & Süt Besleyici Extra Nemlendirici Çift Fazlı Durulanmayan Sıvı Saç Kremi 250 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8697623903720",
    "name": "Tresan Organik Biberiye & Nane Dökülme ve Yıpranma Karşıtı Saç Bakım Yağı Kompleksi 50 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8697659238483",
    "name": "Ashley Joy Ekstra Hacim Kuru Şampuan 200 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "8697659238490",
    "name": "Ashley Joy Kuru Şampuan Fresh & Up Pure Flower 200 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8697711703010",
    "name": "Herbaderm Hyaluronic Hydration Micellar Makyaj Temizleme Suyu 500 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8697711703034",
    "name": "Herbaderm Ceramide Booster Micellar Makyaj Temizleme Suyu 500 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8697711740220",
    "name": "Herbaderm Ultra Güçlü Aydınlatıcı Sprey Serum 80 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8697711740237",
    "name": "Herbaderm Bariyer Güçlendirici Sprey Serum 80 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8697711740244",
    "name": "Herbaderm Güçlü Dolgunlaştırıcı Sprey Serum 80 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8697711740251",
    "name": "Herbaderm Yağlanma Karşıtı Sprey Serum 80 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8697711740817",
    "name": "Herbaderm Niacinamide Clarity Akne Karşıtı Micellar Makyaj Temizleme Suyu 500 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8697711741319",
    "name": "Herbaderm Parlak Dudak Balmı Pembe Greyfurt Aromalı 10 ml (Anahtarlık Hediyeli)",
    "source": "local_gratis"
  },
  {
    "barcode": "8697711741326",
    "name": "Herbaderm Parlak Dudak Balmı Nar Aromalı 10 ml (Anahtarlık Hediyeli)",
    "source": "local_gratis"
  },
  {
    "barcode": "8697711741333",
    "name": "Herbaderm Parlak Dudak Balmı Limonata Aromalı 10 ml (Anahtarlık Hediyeli)",
    "source": "local_gratis"
  },
  {
    "barcode": "8697711741340",
    "name": "Herbaderm Parlak Dudak Balmı Coco Vanilya Aromalı 10 ml (Anahtarlık Hediyeli)",
    "source": "local_gratis"
  },
  {
    "barcode": "8697711741357",
    "name": "Herbaderm Parlak Dudak Balmı Pamuk Şekeri Aromalı 10 ml (Anahtarlık Hediyeli)",
    "source": "local_gratis"
  },
  {
    "barcode": "8697711741364",
    "name": "Herbaderm Parlak Dudak Balmı Birthday Cake Aromalı 10 ml (Anahtarlık Hediyeli)",
    "source": "local_gratis"
  },
  {
    "barcode": "8697711741418",
    "name": "Herbaderm Dudak Peelingi Mango Aromalı 15 ml (Anahtarlık Hediyeli)",
    "source": "local_gratis"
  },
  {
    "barcode": "8697711741517",
    "name": "Herbaderm Turmeric Bright Aqua Yüz Temizleme Jeli 250 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8697711741524",
    "name": "Herbaderm Cica Soothe Milky Yüz Temizleme Jeli 250 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8697711741531",
    "name": "Herbaderm Acid Clarity Yüz Temizleme Jeli 250 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8697711741913",
    "name": "Herbaderm %77 Leke Azaltıcı 30SPF Yüz Kremi 55 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8697711741920",
    "name": "Herbaderm %77 Leke Azaltıcı Vücut Kremi 60 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8697888011284",
    "name": "Hydra Boya Seti 1 adet",
    "source": "local_rossmann"
  },
  {
    "barcode": "8697888017869",
    "name": "Lionesse İnce Topuz Fırçası",
    "source": "local_rossmann"
  },
  {
    "barcode": "8697888020606",
    "name": "Lionesse Saç Fırçası 6416 Mavi",
    "source": "local_rossmann"
  },
  {
    "barcode": "8697888020869",
    "name": "Lionesse Kalın Topuz Fırçası",
    "source": "local_rossmann"
  },
  {
    "barcode": "8697888023288",
    "name": "Lionesse Bigudi 6'lı",
    "source": "local_watsons"
  },
  {
    "barcode": "8697888023325",
    "name": "Lionesse Bigudi 6'lı 1113",
    "source": "local_watsons"
  },
  {
    "barcode": "8697888060596",
    "name": "Hydra Prof Ahşap Topuz Fırçası Hd-2113",
    "source": "local_watsons"
  },
  {
    "barcode": "8697888061296",
    "name": "Hydra Prof Sakal Fırçası",
    "source": "local_watsons"
  },
  {
    "barcode": "8697888061807",
    "name": "Hydra Seramik Fön Fırçası 25 mm",
    "source": "local_watsons"
  },
  {
    "barcode": "8697888061814",
    "name": "Hydra Seramik Fön Fırçası 33 mm",
    "source": "local_watsons"
  },
  {
    "barcode": "8697888121341",
    "name": "Lionesse Saç Bonesi",
    "source": "local_rossmann"
  },
  {
    "barcode": "8697903237712",
    "name": "Talya Hidrolize Kollajen İçeren Takviye Edici Gıda 60 Tablet",
    "source": "local_gratis"
  },
  {
    "barcode": "8697903237903",
    "name": "Talya Çay Ağacı Uçucu Yağı 10 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8697903239501",
    "name": "Life In Çam Terebentin Yağı 50 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8697903239518",
    "name": "Life In Tatlı Badem Yağı 50 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8697903239525",
    "name": "Life In Hint Yağı 50 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8697903239549",
    "name": "Life In Avokado Yağı 125 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8697903239556",
    "name": "Life In Gliserin 50 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8697903239570",
    "name": "Life In Sarı Kantaron Yağı 20 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8697903239587",
    "name": "Life In Çörek Otu Yağı 20 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8697903239600",
    "name": "Life In Jojoba Yağı 20 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8697903239648",
    "name": "Life In Acı Badem Yağı 20 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8697916006862",
    "name": "Bee Beauty Multi Vitaminli Leke Karşıtı Maske 75 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8697916006879",
    "name": "Bee Beauty Havyarlı Siyah Kil Maskesi 75 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8697916011668",
    "name": "Dermokil C Vitamini Kağıt Serum Kağıt Maske",
    "source": "local_gratis"
  },
  {
    "barcode": "8697916011675",
    "name": "Dermokil Kolajen İçerikli Kağıt Serum Maske",
    "source": "local_gratis"
  },
  {
    "barcode": "8697916011682",
    "name": "Dermokil Hyalüronik Asit Serum Kağıt Yüz Maskesi 23 gr",
    "source": "local_gratis"
  },
  {
    "barcode": "8697916011880",
    "name": "Dermokil Doğal Mango Özlü El Kremi 30 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8697916011897",
    "name": "Dermokil Doğal Kiraz Çiçeği El Kremi 30 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8697916011903",
    "name": "Dermokil Doğal Avokado Yağlı El Kremi 30 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8697916012962",
    "name": "Bee Beauty Doğal Mango Özlü El Kremi 75 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8697916012986",
    "name": "Bee Beauty Doğal Kiraz Çiçeği Özü El Kremi 75 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8697916012993",
    "name": "Bee Beauty Doğal Avokado Yağlı El Kremi 75 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8697916013020",
    "name": "Bee Beauty Parıltılı Soyulabilir Mor Maske 50 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8697916013372",
    "name": "Bee Beauty Bukle Belirginleştirici Saç Bakım Kremi 300 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8697916013501",
    "name": "Bee Beauty Seyahat Boyu Argan Özlü Şampuan 100 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8697916013518",
    "name": "Bee Beauty Seyahat Boyu Argan Saç Kremi 100 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8697916013624",
    "name": "Dermokil Onarıcı El Maskesi 30 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8697916013631",
    "name": "Dermokil Yoğun Nemlendirici Ayak Maskesi 30 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8697916013648",
    "name": "Dermokil Peeling Etkili (Soyulabilir) Ayak Maskesi 30 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8697916013976",
    "name": "Dermokil Frambuazlı ve Sirkeli Saç Toniği 400 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8697916014225",
    "name": "Dermokil Pure Clean 3in1 Kağıt Maske 23 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8697916015963",
    "name": "Dermokil Strawberry Lip Balm 15 gr",
    "source": "local_gratis"
  },
  {
    "barcode": "8697916017394",
    "name": "Dermokil Kırmızı Kil Maskesi 2 x 7,5 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8697916017400",
    "name": "Dermokil Yeşil Kil Maskesi 2 x 7,5 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8697916017417",
    "name": "Dermokil Pembe Kil Maskesi 2 x 7,5 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8697916017424",
    "name": "Dermokil Beyaz Kil Maskesi 2 x 7,5 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8697916017554",
    "name": "Dermokil Kuru Ciltler İçin Yoğurt Kağıt Maske 20 gr",
    "source": "local_gratis"
  },
  {
    "barcode": "8697916017561",
    "name": "Dermokil Pirinç Maskesi 20 gr (Lekeli Ciltler İçin)",
    "source": "local_gratis"
  },
  {
    "barcode": "8697916017578",
    "name": "Dermokil İnci Maskesi 20 gr (Hassas Ciltler İçin)",
    "source": "local_gratis"
  },
  {
    "barcode": "8697916017585",
    "name": "Dermokil Yumurta Maskesi 20 gr (Aknejenik ve Yağlı Ciltler için)",
    "source": "local_gratis"
  },
  {
    "barcode": "8697916017608",
    "name": "Dermokil Mat Görünümlü Ciltler İçin Bal Maskesi 20 gr",
    "source": "local_gratis"
  },
  {
    "barcode": "8697916017615",
    "name": "Dermokil Kırmızı Ginseng Maskesi (Karma Ciltler için) 20 gr",
    "source": "local_gratis"
  },
  {
    "barcode": "8697916019121",
    "name": "Dermokil Blackberry Lip Balm 15 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8697916019138",
    "name": "Dermokil Watermelon Lip Balm 15 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8697916019671",
    "name": "Dermokil Akne ve Siyah Nokta Karşıtı Kil Maskesi 50 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8697916019688",
    "name": "Dermokil Gözenek Sıkılaştırıcı Kil Maskesi 50 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8697916019695",
    "name": "Dermokil Kırışıklık Karşıtı Kil Maskesi 50 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8697916019701",
    "name": "Dermokil Leke Karşıtı Kil Maskesi 50 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8697916019725",
    "name": "Dermokil Papatya Özlü El ve Vücut Kremi 30 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8697916020158",
    "name": "Dermokil Special Gold Maske 15 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8697916020165",
    "name": "Dermokil Hologram Aydınlatıcı ve Canlandırıcı Soyulabilir Maske 15 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8697916020172",
    "name": "Dermokil Soyulabilir Havyarlı Siyah Kil Maskesi 15 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8697916020189",
    "name": "Dermokil Aydınlatıcı Maske Leke Karşıtı 2x7,5 ml",
    "source": "local_rossmann"
  },
  {
    "barcode": "8697916020196",
    "name": "Dermokil Siyah Nokta ve Pürüz Karşıtı Maske 15 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8697916022077",
    "name": "Dermokil %100 Doğal Gül Suyu Sprey 50 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8697916022091",
    "name": "Dermokil %100 Doğal Gül Yüz Temizleme Jeli 200 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8697916022107",
    "name": "Dermokil %100 Doğal Gül Suyu Tonik Etkili 200 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8697916022312",
    "name": "Dermokil Güneş Koruyucu & Leke Karşıtı El Maskesi Vitamin C 30 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8697916022329",
    "name": "Dermokil Topuk Çatlak Bakımı & Nemlendirici Ayak Maskesi %10 Üre 30 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8697916023371",
    "name": "Dermokil Kojik Asit C Vitamini Leke Karşıtı Yüz Spreyi 50 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8697916023388",
    "name": "Dermokil Kojik Asit C Vitamini Leke Karşıtı Arındırıcı Yüz Temizleme Jeli 200 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8697916023395",
    "name": "Dermokil Kojik Asit C Vitamini Leke Karşıtı Tonik 200 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8697916023661",
    "name": "Dermokil Kojik Asit C Vitamini Leke Karşıtı Yenileyici Twister Vücut Losyonu 200 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8697916023678",
    "name": "Dermokil %100 Doğal Gül Suyu Canlandırıcı Yoğun Nemlendirici Twister Vücut Losyonu 200 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8697916023685",
    "name": "Dermokil Vanilya Shea Yağı Nemlendirici ve Besleyici Twister Vücut Losyonu 200 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8697916024170",
    "name": "Dermokil Hyalüronik Asit Yoğun Nem ve Besleyici Bakım Kremi 250 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8697916024187",
    "name": "Dermokil C Vitamini & Niasinamid Leke Karşıtı Bakım Kremi 250 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8697916024194",
    "name": "Dermokil D-Panthenol Yoğun Nemlendirici Onarıcı Krem 250 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8697916024453",
    "name": "Dermokil %100 Doğal Gül Suyu Çift Fazlı Micellar Makyaj Temizleme Suyu 150 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8697916024606",
    "name": "Dermokil Aydınlatıcı C Vitamini Hyalüronik Asit Hidrojel Göz Altı Maskesi 7 gr",
    "source": "local_gratis"
  },
  {
    "barcode": "8697916024613",
    "name": "Dermokil Canlandırıcı Kafein Hyalüronik Asit Hidrojel Göz Altı Maskesi 7 gr",
    "source": "local_gratis"
  },
  {
    "barcode": "8697916024620",
    "name": "Dermokil Yaşlanma Karşıtı Kolajen Hyalüronik Asit Hidrojel Göz Altı Maskesi 7 gr",
    "source": "local_gratis"
  },
  {
    "barcode": "8697916024811",
    "name": "Dermokil Matcha Özlü Kil Yüz Maskesi 50 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8697916024828",
    "name": "Dermokil Kojik Asit Leke Karşıtı Kil Yüz Maskesi 50 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8697916024835",
    "name": "Dermokil Pirinç Özlü Beyazlatıcı Kil Yüz Maskesi 50 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8697916024873",
    "name": "Dermokil Matcha Özlü Kil Maskesi 9 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8697916024880",
    "name": "Dermokil Leke Karşıtı Kojik Asit Kil Maskesi 9 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8697916024897",
    "name": "Dermokil Beyazlatıcı Pirinç Özlü Kil Maskesi 9 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8697916024958",
    "name": "Dermokil Soyulabilir Hologram Kil Maskesi 50 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8697916024965",
    "name": "Dermokil Soyulabilir Siyah Kil Maskesi 50 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8697916024972",
    "name": "Dermokil Soyulabilir Altın Kil Maskesi 50 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8697916025030",
    "name": "Dermokil Pirinç Mayası Beyazlatıcı Yüz Temizleme Jeli 200 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8697916025047",
    "name": "Dermokil Pirinç Mayası Beyazlatıcı Yüz Toniği 200 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8697916025054",
    "name": "Dermokil Pirinç Mayası Beyazlatıcı Yüz Sprey Tonik 50 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8697916025245",
    "name": "Dermokil Akne Karşıtı Çay Ağacı Yağı Yüz Temizleme Jeli 200 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8697916025252",
    "name": "Dermokil Akne Karşıtı Çay Ağacı Yağı Tonik 200 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8697916025269",
    "name": "Dermokil Akne Karşıtı Çay Ağacı Yağı Yüz Spreyi Tonik 50 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8697916025320",
    "name": "Dermokil Latte Lip Balm 4,8 gr",
    "source": "local_gratis"
  },
  {
    "barcode": "8697916025337",
    "name": "Dermokil Matcha Mint Lip Balm 4,8 gr",
    "source": "local_gratis"
  },
  {
    "barcode": "8697916026938",
    "name": "Dermokil %99 Purity PDRN (Sodium DNA) & Cica & Centella Skin Barrier Kağıt Jel Maske 25 gr",
    "source": "local_gratis"
  },
  {
    "barcode": "8697916026945",
    "name": "Dermokil %99 Purity PDRN (Sodium DNA) & Kolajen & Gingseng Skin Barrier Kağıt Jel Maske 25 gr",
    "source": "local_gratis"
  },
  {
    "barcode": "8697916026952",
    "name": "Dermokil %99 Purity PDRN (Sodium DNA) & Rose & Ceramide Skin Barrier Kağıt Jel Maske 25 gr",
    "source": "local_gratis"
  },
  {
    "barcode": "8697916026990",
    "name": "Dermokil %99 Purity PDRN (Sodium DNA) & Madecassoside Skin Barrier Kağıt Jel Maske 25 gr",
    "source": "local_gratis"
  },
  {
    "barcode": "8697926006005",
    "name": "Redist Full Force Saç Köpüğü 300 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8697926025655",
    "name": "Redist Full Force Saç Spreyi 250 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8697926026294",
    "name": "Redist Seyahat Boy Saç Spreyi 75 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8697926028458",
    "name": "Redist Keratin Kompleks Saç Spreyi 250 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8698583110012",
    "name": "Morfose Barcelino Botanica Saç Bakım Yağı 150 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8698605061261",
    "name": "Bee Beauty Yüz Ağda Bandı İnatçı Sık 24'lü",
    "source": "local_gratis"
  },
  {
    "barcode": "8698605061285",
    "name": "Bee Beauty Vücut Ağda Bandı İnatçı Sık 24'lü",
    "source": "local_gratis"
  },
  {
    "barcode": "8698605061308",
    "name": "Bee Beauty Maxi Ağda Seti İnatçı Sık 54'lü",
    "source": "local_gratis"
  },
  {
    "barcode": "8698605061322",
    "name": "Bee Beauty Yüz Ağda Bandı Aloe Vera 24'lü",
    "source": "local_gratis"
  },
  {
    "barcode": "8698605061346",
    "name": "Bee Beauty Vücut Ağda Bandı Aloe Vera 24'lü",
    "source": "local_gratis"
  },
  {
    "barcode": "8698605061360",
    "name": "Bee Beauty Maxi Ağda Seti Aloe Vera 54'lü",
    "source": "local_gratis"
  },
  {
    "barcode": "8698605061384",
    "name": "Bee Beauty Bikini Koltuk Altı Ağda Bandı İnatçı Sık 24'lü",
    "source": "local_gratis"
  },
  {
    "barcode": "8698605061520",
    "name": "Remove Care Roll On Ağda Azulen 100 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8698605061544",
    "name": "Remove Care Maxi Set Hassas Ciltler Sir Ağda Bandı 52'li",
    "source": "local_gratis"
  },
  {
    "barcode": "8698605061551",
    "name": "Remove Care Maxi Set İnatçı ve Sık Tüyler Sir Ağda Bandı 52'li",
    "source": "local_gratis"
  },
  {
    "barcode": "8698605061568",
    "name": "Remove Care Tüy Dökücü Krem Hassas Ciltler 2 x 100 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8698605061575",
    "name": "Remove Care Tüy Dökücü Krem İnatçı Tüyler 2 x 100 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8698605061605",
    "name": "Remove Tüy Sarartıcı Krem 70 ml + 35 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8698605061636",
    "name": "Remove Care Ağda Kalemi Hassas Ciltler 4 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8698605061643",
    "name": "Remove Care Ağda Kalemi İnatçı Tüyler 4 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8698605061650",
    "name": "Remove Care Roll On Ağda Hassas Ciltler 100 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8698605061681",
    "name": "Remove Care Yüz Ağda Bandı İnatçı Tüyler 24'lü",
    "source": "local_gratis"
  },
  {
    "barcode": "8698605061704",
    "name": "Remove Care Ağda Bezi 10 Metre",
    "source": "local_gratis"
  },
  {
    "barcode": "8698605061728",
    "name": "Remove Care Vücut Ağda Bandı İnatçı ve Sık Tüyler 24'lü",
    "source": "local_gratis"
  },
  {
    "barcode": "8698605061735",
    "name": "Remove Care Vücut Ağda Bandı Hassas Ciltler 24'lü",
    "source": "local_gratis"
  },
  {
    "barcode": "8698605061742",
    "name": "Remove Care Yüz Ağda Bandı Hassas Ciltler 24'lü",
    "source": "local_gratis"
  },
  {
    "barcode": "8698605061971",
    "name": "Remove Care Yüz İçin Tüy Dökücü Krem 25 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8698605063081",
    "name": "Remove Care Siyah Nokta Burun Bandı 6'lı",
    "source": "local_gratis"
  },
  {
    "barcode": "8698605063425",
    "name": "Remove Care Tanışma Paketi Plaja Hazırlık Kiti: 40’lı Vücut Ağda Bandı + 10 SPF Bronzlaştırıcı Yağ 100 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8698605066730",
    "name": "Remove Care Tüy Dökücü Jel Kırmızı Meyveler 100 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8698605066754",
    "name": "Remove Care Tüy Dökücü Jel Avokado 100 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8698636612821",
    "name": "Neva Root Touch-Up Kapatıcı Sprey Sari 75 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "8698636613064",
    "name": "Neva Root Touch-Up Kapatıcı Sprey Koyu Kumral 75 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "8698636613071",
    "name": "Neva Root Touch-Up Kapatıcı Sprey Koyu Kahve 75 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "8698636615785",
    "name": "Neva Color Premium Saç Boyası Siyah 1.0",
    "source": "local_watsons"
  },
  {
    "barcode": "8698636615792",
    "name": "Neva Color Premium Saç Boyası Koyu Siyah 1.1",
    "source": "local_watsons"
  },
  {
    "barcode": "8698636621403",
    "name": "Neva Saç Boyası Çıkarıcı",
    "source": "local_watsons"
  },
  {
    "barcode": "8698636626576",
    "name": "Neva Root Touch-Up Kapatıcı Sprey Küllü Kumral 75 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "8698636630559",
    "name": "Neva Evolution PDRN Intensive Scalp Care Serum 15 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "8698636630641",
    "name": "Neva Evolution PDRN Şampuan 250 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "8698636630665",
    "name": "Neva Color Şampuan 2.0 Siyah",
    "source": "local_watsons"
  },
  {
    "barcode": "8698636630672",
    "name": "Neva Color Şampuan 4.0 Kahverengi",
    "source": "local_watsons"
  },
  {
    "barcode": "8698636630696",
    "name": "Neva Color Şampuan 7.0 Blonde",
    "source": "local_watsons"
  },
  {
    "barcode": "8698655383696",
    "name": "Morfose Argan Saç Serumu 75 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "8698655383702",
    "name": "Morfose Keratin Saç Serumu 75 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "8698655389971",
    "name": "Morfose Bitkisel Saç Yağı Argan 100 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8698703020528",
    "name": "Agiss Roll-On Sir Ağda Normal Ciltler İçin (Natural) 100 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8698703020535",
    "name": "Agiss Roll-On Sir Ağda Tüm Ciltler İçin (Azulen) 100 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8698703020672",
    "name": "Agiss Roll-On Sir Ağda Hassas Ciltler İçin (Pudralı) 100 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8698703020894",
    "name": "Agiss Sir Ağda Bantları Vücut, Koltuk Altı, Bikini ve Yüz Bölgesi 41'li (Hassas Ciltler İçin)",
    "source": "local_gratis"
  },
  {
    "barcode": "8698703020917",
    "name": "Agiss Sir Ağda Bantları Vücut, Koltuk Altı, Bikini ve Yüz Bölgesi 41'li (Normal Ciltler İçin)",
    "source": "local_gratis"
  },
  {
    "barcode": "8698703021136",
    "name": "Agiss Tüy Dökücü Krem Hassas Ciltler İçin 100 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8698703021150",
    "name": "Agiss Tüy Dökücü Krem Normal Ciltler İçin 100 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8698703021600",
    "name": "Agiss Sirli Yüz Ağda Bantları 28'li (Hassas Ciltler İçin)",
    "source": "local_gratis"
  },
  {
    "barcode": "8698703021624",
    "name": "Agiss Sirli Yüz Ağda Bantları 28'li (Normal Ciltler İçin)",
    "source": "local_gratis"
  },
  {
    "barcode": "8698703022058",
    "name": "Agiss Sir Ağda Bantları Bacak & Vücut Bölgesi 24'lü (Normal Ciltler İçin)",
    "source": "local_gratis"
  },
  {
    "barcode": "8698703022065",
    "name": "Agiss Sir Ağda Bantları Bacak & Vücut Bölgesi 24'lü (Hassas Ciltler İçin)",
    "source": "local_gratis"
  },
  {
    "barcode": "8698703022447",
    "name": "Agiss Ağda Bezi 25 m Rulo",
    "source": "local_gratis"
  },
  {
    "barcode": "8698703025288",
    "name": "Agiss Roll-On Sir Ağda Isıtıcılı Pratik Set",
    "source": "local_gratis"
  },
  {
    "barcode": "8698703025851",
    "name": "Agiva Esnek Tutuş 01 Toz Wax 20 gr",
    "source": "local_gratis"
  },
  {
    "barcode": "8698703025868",
    "name": "Agiva Güçlü Şekillendirme 02 Toz Wax 20 gr",
    "source": "local_gratis"
  },
  {
    "barcode": "8698703025875",
    "name": "Agiva Extra Güçlü Şekillendirme 03 Toz Wax 20 gr",
    "source": "local_gratis"
  },
  {
    "barcode": "8698703025998",
    "name": "Agiva Renkli Wax Saç Şekillendirici Pink 120 ml",
    "source": "local_rossmann"
  },
  {
    "barcode": "8698703026735",
    "name": "Agiss Boncuk Ağda Normal Ciltler İçin (Natural) 220 gr",
    "source": "local_gratis"
  },
  {
    "barcode": "8698703026742",
    "name": "Agiss Boncuk Ağda Tüm Ciltler İçin (Azulen) 220 gr",
    "source": "local_gratis"
  },
  {
    "barcode": "8698703026759",
    "name": "Agiss Boncuk Sir Ağda Hassas Ciltler İçin (Pudralı) 220 gr",
    "source": "local_gratis"
  },
  {
    "barcode": "8698753381808",
    "name": "Sea Color Set Boya 1.0 Siyah",
    "source": "local_gratis"
  },
  {
    "barcode": "8698753381815",
    "name": "Sea Color Set Boya 3.0 Koyu Kahve",
    "source": "local_gratis"
  },
  {
    "barcode": "8698753381860",
    "name": "Sea Color Set Boya 6.7 Çikolata Kahve",
    "source": "local_gratis"
  },
  {
    "barcode": "8698753381877",
    "name": "Sea Color Kit Boya 7.7 Koyu Karamel 1 adet",
    "source": "local_rossmann"
  },
  {
    "barcode": "8698753381914",
    "name": "Sea Color Kit Boya 5.65 Çilek Kırmızısı 1 adet",
    "source": "local_rossmann"
  },
  {
    "barcode": "8698753381945",
    "name": "Sea Color Kit Boya 66.46 Ateş Kızılı 1 adet",
    "source": "local_rossmann"
  },
  {
    "barcode": "8698753381983",
    "name": "Sea Color Set Boya 0.1 Platin Sarısı",
    "source": "local_gratis"
  },
  {
    "barcode": "8698753382010",
    "name": "Sea Color Set Boya 8.3 Bal Köpüğü",
    "source": "local_gratis"
  },
  {
    "barcode": "8698753382027",
    "name": "Sea Color Kit Boya 6.0 Koyu Kumral 1 adet",
    "source": "local_rossmann"
  },
  {
    "barcode": "8698753382034",
    "name": "Sea Color Set Boya 7.0 Kumral",
    "source": "local_gratis"
  },
  {
    "barcode": "8698753382041",
    "name": "Sea Color Set Boya 8.0 Açık Kumral",
    "source": "local_gratis"
  },
  {
    "barcode": "8698753382096",
    "name": "Sea Color Set Boya 1.1 Mavi Siyah",
    "source": "local_gratis"
  },
  {
    "barcode": "8698753384014",
    "name": "Sea Color Smooth Effect Yoğun Saç Açıcı",
    "source": "local_gratis"
  },
  {
    "barcode": "8698753387268",
    "name": "Sea Color Kit Boya Füme Gri 1 adet",
    "source": "local_rossmann"
  },
  {
    "barcode": "8698753388777",
    "name": "Maxx Deluxe Golden Beauty Saç Boyası 1.0 Siyah",
    "source": "local_gratis"
  },
  {
    "barcode": "8698753388876",
    "name": "Maxx Deluxe Golden Beauty Saç Boyası 0.2 Buzul Sarısı",
    "source": "local_gratis"
  },
  {
    "barcode": "8698753388883",
    "name": "Maxx Deluxe Golden Beauty Saç Boyası 1.1 Mavi Siyah",
    "source": "local_gratis"
  },
  {
    "barcode": "8698753388890",
    "name": "Maxx Deluxe Golden Beauty Saç Boyası 0.01 Füme Gri",
    "source": "local_gratis"
  },
  {
    "barcode": "8698753388913",
    "name": "Maxx Deluxe Golden Beauty Saç Boyası 8.3 Bal Köpüğü",
    "source": "local_gratis"
  },
  {
    "barcode": "8698753389019",
    "name": "Maxx Deluxe Golden Beauty Saç Boyası 5.65 Çilek Kırmızısı",
    "source": "local_gratis"
  },
  {
    "barcode": "8698753389057",
    "name": "Maxx Deluxe Golden Beauty Saç Boyası 8.45 Tarçın Bakır",
    "source": "local_gratis"
  },
  {
    "barcode": "8698753389644",
    "name": "Sea Color Amonyaksız Saç Boyası 1.0 Siyah",
    "source": "local_gratis"
  },
  {
    "barcode": "8698753389699",
    "name": "Sea Color Amonyaksız Saç Boyası 7.0 Kumral",
    "source": "local_gratis"
  },
  {
    "barcode": "8698753389705",
    "name": "Sea Color Amonyaksız Saç Boyası 8.0 Açık Kumral",
    "source": "local_gratis"
  },
  {
    "barcode": "8698753389736",
    "name": "Sea Color Amonyaksız Saç Boyası 0.1 Platin Sarısı",
    "source": "local_gratis"
  },
  {
    "barcode": "8698753389743",
    "name": "Sea Color Amonyaksız Saç Boyası 1.1 Mavi Siyah",
    "source": "local_gratis"
  },
  {
    "barcode": "8698753389798",
    "name": "Sea Color Amonyaksız Saç Boyası 6.7 Çikolata Kahve",
    "source": "local_gratis"
  },
  {
    "barcode": "8698753389859",
    "name": "Sea Color Amonyaksız Saç Boyası 8.3 Bal Köpüğü",
    "source": "local_gratis"
  },
  {
    "barcode": "8698997411958",
    "name": "Kifidis Ayak Çatlak Kremi 50 ml",
    "source": "local_rossmann"
  },
  {
    "barcode": "8699009429619",
    "name": "Morfose Ossion Mat Wax 100 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8699009429620",
    "name": "Morfose Ossion Mat Styling Wax 100 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "8699089480081",
    "name": "HC Care Doping Dökülme Karşıtı Bakım Serumu 100 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "8699089480111",
    "name": "HC Care Complex Bitkisel Saç Bakım Kompleksi 100 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "8699089480210",
    "name": "HC Care Maske Ovex Saç Kurtarma ve Canlandırma 200 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "8699089480227",
    "name": "HC Care Tria Keratin Destekli Tarama Spreyi 150 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "8699089480722",
    "name": "HC Care Saç Bakım Yağı Bitkisel 200 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "8699089480740",
    "name": "HC Care Ovex Keratin & Biotin Saç Bakım Sütü 150 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "8699089480777",
    "name": "HC Care Saç Bakım Maskesi Duo 40 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "8699089480808",
    "name": "HC Care Normal ve Kuru Saçlar İçin Şampuan 340 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "8699089480822",
    "name": "HC Care Kepekli Saçlar İçin Şampuan 340 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "8699089480839",
    "name": "HC Care Volume Hacim Şampuanı 340 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "8699089480853",
    "name": "HC Care Yoğun Vitamin Destekli Saç Kremi 340 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "8699089481118",
    "name": "HC Care Saç Kremi Vita Therapy 300 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "8699089481200",
    "name": "HC Care Saç Bakım Serumu Dökülme Karşıtı 100 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "8699367121385",
    "name": "Green Therapy Krem Saç Boyası 6.78 Çikolata Karamel",
    "source": "local_gratis"
  },
  {
    "barcode": "8699367121392",
    "name": "Green Therapy Krem Saç Boyası 8.3 Açık Karamel",
    "source": "local_gratis"
  },
  {
    "barcode": "8699367121408",
    "name": "Biomagic Premium Saç Boyası 9/28 Sarı İnci Küllü",
    "source": "local_watsons"
  },
  {
    "barcode": "8699367124379",
    "name": "Biomagic Premium Saç Boyası 10/28 Açık Sarı İnci Küllü",
    "source": "local_watsons"
  },
  {
    "barcode": "8699367125475",
    "name": "Biomagic Premium Saç Boyası 5/28 Açık Kahve İnci Küllü",
    "source": "local_watsons"
  },
  {
    "barcode": "8699367125482",
    "name": "Biomagic Premium Saç Boyası 8/28 Açık Kumral İnci Küllü",
    "source": "local_watsons"
  },
  {
    "barcode": "8699367125499",
    "name": "Biomagic Premium Saç Boyası 7/28 Kumral İnci Küllü",
    "source": "local_watsons"
  },
  {
    "barcode": "8699367125505",
    "name": "Biomagic Saç Boyası Siyah No: 1",
    "source": "local_watsons"
  },
  {
    "barcode": "8699367125512",
    "name": "Biomagic Saç Boyası Koyu Kahve No: 3.00",
    "source": "local_watsons"
  },
  {
    "barcode": "8699367125529",
    "name": "Biomagic Saç Boyası Kahve No: 4.00",
    "source": "local_watsons"
  },
  {
    "barcode": "8699367125536",
    "name": "Biomagic Saç Boyası Açık Kahve No: 5.00",
    "source": "local_watsons"
  },
  {
    "barcode": "8699367125543",
    "name": "Biomagic Saç Boyası Koyu Kumral No: 6.00",
    "source": "local_watsons"
  },
  {
    "barcode": "8699367125550",
    "name": "Biomagic Saç Boyası Kumral No: 7.00",
    "source": "local_watsons"
  },
  {
    "barcode": "8699367125567",
    "name": "Biomagic Saç Boyası Açık Kumral No: 8.00",
    "source": "local_watsons"
  },
  {
    "barcode": "8699367125574",
    "name": "Biomagic Saç Boyası Sarı No: 9.00",
    "source": "local_watsons"
  },
  {
    "barcode": "8699367125604",
    "name": "Biomagic Saç Boyası Boyası Fındık Kabuğu No: 5.03",
    "source": "local_watsons"
  },
  {
    "barcode": "8699367125611",
    "name": "Biomagic Saç Boyası Kahve Köpüğü No: 6.03",
    "source": "local_watsons"
  },
  {
    "barcode": "8699367125628",
    "name": "Biomagic Saç Boyası Karamel No: 7.03",
    "source": "local_watsons"
  },
  {
    "barcode": "8699367125659",
    "name": "Biomagic Saç Boyası Moka Kahve No: 44.07",
    "source": "local_watsons"
  },
  {
    "barcode": "8699367125666",
    "name": "Biomagic Saç Boyası Yoğun Çikolata Kahve No: 55.07",
    "source": "local_watsons"
  },
  {
    "barcode": "8699367125673",
    "name": "Biomagic Saç Boyası Çikolata Kahve No: 66.07",
    "source": "local_watsons"
  },
  {
    "barcode": "8699367125727",
    "name": "Biomagic Saç Boyası Koyu Küllü Kumral No: 6.72",
    "source": "local_watsons"
  },
  {
    "barcode": "8699367125734",
    "name": "Biomagic Saç Boyası Küllü Kumral No: 7.72",
    "source": "local_watsons"
  },
  {
    "barcode": "8699367125741",
    "name": "Biomagic Saç Boyası Açık Küllü Kumral No: 8.72",
    "source": "local_watsons"
  },
  {
    "barcode": "8699367125765",
    "name": "Biomagic Saç Boyası Şarap Kızılı No: 55.55",
    "source": "local_watsons"
  },
  {
    "barcode": "8699367125789",
    "name": "Biomagic Saç Boyası Tarçın No: 77.66",
    "source": "local_watsons"
  },
  {
    "barcode": "8699367125857",
    "name": "Biomagic Saç Boyası Boyası Fildişi Sarısı No: 11.00",
    "source": "local_watsons"
  },
  {
    "barcode": "8699367125963",
    "name": "Biomagic Saç Boyası Çikolata Karamel No: 66.78",
    "source": "local_watsons"
  },
  {
    "barcode": "8699367125987",
    "name": "Biomagic Saç Boyası Kestane No: 44.43",
    "source": "local_watsons"
  },
  {
    "barcode": "8699367125994",
    "name": "Biomagic Saç Boyası Koyu Kumral Kızıl Bakır No: 66.43",
    "source": "local_watsons"
  },
  {
    "barcode": "8699367127684",
    "name": "Biomagic Premium Saç Boyası 6/28 Koyu Kumral İnci Küllü",
    "source": "local_watsons"
  },
  {
    "barcode": "8699367127738",
    "name": "Green Therapy Krem Saç Boyası 6.7 Çikolata Kahve",
    "source": "local_gratis"
  },
  {
    "barcode": "8699367127752",
    "name": "Green Therapy Krem Saç Boyası 3.0 Koyu Kahve",
    "source": "local_gratis"
  },
  {
    "barcode": "8699367127783",
    "name": "Green Therapy Krem Saç Boyası 6.0 Koyu Kumral",
    "source": "local_gratis"
  },
  {
    "barcode": "8699367127790",
    "name": "Green Therapy Krem Saç Boyası 7.0 Kumral",
    "source": "local_gratis"
  },
  {
    "barcode": "8699367127806",
    "name": "Green Therapy Krem Saç Boyası 8.0 Açık Kumral",
    "source": "local_gratis"
  },
  {
    "barcode": "8699367127813",
    "name": "Green Therapy Krem Saç Boyası 9.0 Sarı",
    "source": "local_gratis"
  },
  {
    "barcode": "8699367127820",
    "name": "Green Therapy Krem Saç Boyası 6.1 Koyu Küllü Kumral",
    "source": "local_gratis"
  },
  {
    "barcode": "8699367127837",
    "name": "Green Therapy Krem Saç Boyası 7.1 Küllü Kumral",
    "source": "local_gratis"
  },
  {
    "barcode": "8699367127868",
    "name": "Green Therapy Krem Saç Boyası 7.3 Karamel",
    "source": "local_gratis"
  },
  {
    "barcode": "8699367127875",
    "name": "Green Therapy Krem Saç Boyası 6.43 Kızıl Bakır",
    "source": "local_gratis"
  },
  {
    "barcode": "8699367127899",
    "name": "Green Therapy Krem Saç Boyası 4.7 Bitter",
    "source": "local_gratis"
  },
  {
    "barcode": "8699367127905",
    "name": "Green Therapy Krem Saç Boyası 5.7 Türk Kahvesi",
    "source": "local_gratis"
  },
  {
    "barcode": "8699367127912",
    "name": "Green Therapy Krem Saç Boyası 7.7 Latte",
    "source": "local_gratis"
  },
  {
    "barcode": "8699367127929",
    "name": "Green Therapy Krem Saç Boyası 7.63 Tarçın Bakır",
    "source": "local_gratis"
  },
  {
    "barcode": "8699367127936",
    "name": "Natura Balance Krem Saç Boyası Siyah 1 1 adet",
    "source": "local_rossmann"
  },
  {
    "barcode": "8699367127943",
    "name": "Natura Balance Krem Saç Boyası Koyu Kahve 3 1 adet",
    "source": "local_rossmann"
  },
  {
    "barcode": "8699367127950",
    "name": "Natura Balance Krem Saç Boyası Kahve 4 1 adet",
    "source": "local_rossmann"
  },
  {
    "barcode": "8699367127967",
    "name": "Natura Balance Krem Saç Boyası Açık Kahve 5 1 adet",
    "source": "local_rossmann"
  },
  {
    "barcode": "8699367127974",
    "name": "Natura Balance Krem Saç Boyası Koyu Kumral 6 1 adet",
    "source": "local_rossmann"
  },
  {
    "barcode": "8699367127981",
    "name": "Natura Balance Krem Saç Boyası Kumral 7 1 adet",
    "source": "local_rossmann"
  },
  {
    "barcode": "8699367127998",
    "name": "Natura Balance Krem Saç Boyası Açık Kumral 8 1 adet",
    "source": "local_rossmann"
  },
  {
    "barcode": "8699367128001",
    "name": "Natura Balance Krem Saç Boyası Çok Açık Kumral 9 1 adet",
    "source": "local_rossmann"
  },
  {
    "barcode": "8699367128018",
    "name": "Natura Balance Krem Saç Boyası Küllü Koyu Kumral 6.1 1 adet",
    "source": "local_rossmann"
  },
  {
    "barcode": "8699367128025",
    "name": "Natura Balance Krem Saç Boyası Küllü Kumral 7.1 1 adet",
    "source": "local_rossmann"
  },
  {
    "barcode": "8699367128032",
    "name": "Natura Balance Krem Saç Boyası Küllü Açık Kumral 8.1 1 adet",
    "source": "local_rossmann"
  },
  {
    "barcode": "8699367128049",
    "name": "Natura Balance Krem Saç Boyası Tütün 6.37 1 adet",
    "source": "local_rossmann"
  },
  {
    "barcode": "8699367128056",
    "name": "Natura Balance Krem Saç Boyası Badem 7.37 1 adet",
    "source": "local_rossmann"
  },
  {
    "barcode": "8699367128063",
    "name": "Natura Balance Krem Saç Boyası Kumral Bakır 7.43 1 adet",
    "source": "local_rossmann"
  },
  {
    "barcode": "8699367128070",
    "name": "Natura Balance Krem Saç Boyası Şarap Kızılı 5.66 1 adet",
    "source": "local_rossmann"
  },
  {
    "barcode": "8699367128087",
    "name": "Natura Balance Krem Saç Boyası Kahve 4.45 1 adet",
    "source": "local_rossmann"
  },
  {
    "barcode": "8699367128094",
    "name": "Natura Balance Krem Saç Boyası Kakao 5.23 1 adet",
    "source": "local_rossmann"
  },
  {
    "barcode": "8699367128100",
    "name": "Natura Balance Krem Saç Boyası Çikolata Kahve 5.34 1 adet",
    "source": "local_rossmann"
  },
  {
    "barcode": "8699367128155",
    "name": "Biomagic Saç Boyası Açık Sarı No: 10.00",
    "source": "local_watsons"
  },
  {
    "barcode": "8699367128971",
    "name": "Biomagic Saç Boyası Derin Mavi Siyah No: 1.01",
    "source": "local_watsons"
  },
  {
    "barcode": "8699367128988",
    "name": "Biomagic Saç Boyası Yoğun Küllü Koyu Kumral No: 6.11",
    "source": "local_watsons"
  },
  {
    "barcode": "8699367128995",
    "name": "Biomagic Saç Boyası Yoğun Küllü Kumral No: 7.11",
    "source": "local_watsons"
  },
  {
    "barcode": "8699367129008",
    "name": "Biomagic Saç Boyası Yoğun Küllü Açık Kumral No: 811",
    "source": "local_watsons"
  },
  {
    "barcode": "8699367129183",
    "name": "Biomagic Saç Boyası 7/77 Yoğun Bakır",
    "source": "local_watsons"
  },
  {
    "barcode": "8699367129268",
    "name": "Natura Balance Krem Saç Boyası Buzlu Kahve 5.7 1 adet",
    "source": "local_rossmann"
  },
  {
    "barcode": "8699367129640",
    "name": "Green Therapy Krem Saç Boyası 4.4 Kestane",
    "source": "local_gratis"
  },
  {
    "barcode": "8699367129657",
    "name": "Green Therapy Krem Saç Boyası 5.4 Açık Kestane",
    "source": "local_gratis"
  },
  {
    "barcode": "8699367129671",
    "name": "Green Therapy Krem Saç Boyası 9.1 Küllü Sarı",
    "source": "local_gratis"
  },
  {
    "barcode": "8699367129688",
    "name": "Green Therapy Krem Saç Boyası 5.15 Buzlu Kahve",
    "source": "local_gratis"
  },
  {
    "barcode": "8699367129695",
    "name": "Green Therapy Krem Saç Boyası 6.15 Buzlu Çikolata Kahve",
    "source": "local_gratis"
  },
  {
    "barcode": "8699367129702",
    "name": "Biomagic Saç Boyası Yoğun Küllü Sarı No: 9.11",
    "source": "local_watsons"
  },
  {
    "barcode": "8699367129718",
    "name": "Biomagic Saç Boyası Küllü Sarı No: 9.72",
    "source": "local_watsons"
  },
  {
    "barcode": "8699367129749",
    "name": "Green Therapy Krem Saç Boyası 1.10 Mavi Siyah",
    "source": "local_gratis"
  },
  {
    "barcode": "8699367129756",
    "name": "Green Therapy Krem Saç Boyası 5.3 Fındık Kahve",
    "source": "local_gratis"
  },
  {
    "barcode": "8699375052282",
    "name": "Clooe Yaşlanma Karşıtı Serum 30 ml",
    "source": "local_rossmann"
  },
  {
    "barcode": "8699375052824",
    "name": "Bee Beauty Organik Sertifikalı Beyazlatıcı Günlük Krem 50 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8699375052879",
    "name": "Bee Beauty Organik Sertifikalı Gül Yüz Temizleme Köpüğü 150 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8699375053227",
    "name": "Bee Beauty Vücut Yağı 190 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8699490315910",
    "name": "Thalia Traditional Rose Water Gül Suyu 250 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8699490315927",
    "name": "Thalia Traditional Rose Oil Gül Suyu 30 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8699490316740",
    "name": "Bee Beauty Gül Suyu 250 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8699490316931",
    "name": "Thalia 3 in 1 Deep Cleansing Peeling Yüz Maskesi 15 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8699490316955",
    "name": "Thalia Collagen Sleeping Yüz Maskesi 15 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8699490317020",
    "name": "Bee Beauty Alpha Arbutin Aydınlatıcı Yüz Serumu 30 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8699490317051",
    "name": "Bee Beauty Vitamin C Antioksidan Yüz Serumu 30 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8699490317068",
    "name": "Bee Beauty Kolajen Yaşlanma Karşıtı Yüz Serumu 30 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8699490317082",
    "name": "Bee Beauty Pembe Greyfurt Canlandırıcı Yüz Tonik 250 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8699490317631",
    "name": "Thalia Parfümlü El Kremi White Flowers 60 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8699490317648",
    "name": "Thalia Parfümlü El Kremi Iris Touch 60 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8699490317655",
    "name": "Thalia Parfümlü El Kremi Tsubaki Blossom 60 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8699490317662",
    "name": "Thalia Parfümlü El Kremi Gardenia Soul 60 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8699490318355",
    "name": "Bee Beauty Vitamin C Gündüz Kremi 50 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8699490318362",
    "name": "Bee Beauty Vitamin C Gece Kremi 50 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8699490318553",
    "name": "Thalia Marjoram Yağı & Çay Ağacı Yüz Temizleme Jeli 200 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8699490318560",
    "name": "Thalia Marjoram Yağı & Çay Ağacı Matlaştırıcı Yüz Toniği 200 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8699490318577",
    "name": "Thalia Marjoram Yağı & Çay Ağacı Matlaştırıcı Yüz Kremi 50 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8699490318591",
    "name": "Thalia Marjoram Yağı & Çay Ağacı Katı Yüz Yıkama Sabunu 120 gr",
    "source": "local_gratis"
  },
  {
    "barcode": "8699490319925",
    "name": "Thalia Saç Yağı Combo Butter 190 ml",
    "source": "local_rossmann"
  },
  {
    "barcode": "8699512002255",
    "name": "Otacı Güllü Su 250 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8699512004679",
    "name": "Otacı Lab No:1 Nemlendirici Onarıcı Şampuan 250 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8699512004686",
    "name": "Otacı Lab No:2 Hacim ve Dolgunlaştırıcı Şampuan 250 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8699512004709",
    "name": "Otacı Lab No:4 Uzama ve Dökülme Karşıtı Şampuan 250 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8699512007113",
    "name": "Otacı Gül Kürü Doğal Gül Suyu 150 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8699512007114",
    "name": "Otacı Botanics+ %100 Doğal Gül Suyu 150 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "8699512007144",
    "name": "Otacı Gül Kürü Yüz Temizleme Köpüğü 150 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8699512007168",
    "name": "Otacı Gül Kürü Gül Suyu Yüz Spreyi 50 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8699512010144",
    "name": "Otacı Bitkisel Saç Şekillendirici Yumuşak-Orta 150 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8699512010151",
    "name": "Otacı Bitkisel Saç Şekillendirici Orta-Sert 150 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8699512010229",
    "name": "Otacı Naturway Şampuan Sarımsaklı 500 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8699512011691",
    "name": "Otacı Gül Kürü Gül Suyu Bazlı Doğal Micellar Makyaj Temizleme Suyu 400 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8699512011769",
    "name": "Otacı Naturway Bitki Özlü Sarımsaklı Saç Kremi 300 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8699512011868",
    "name": "Otacı Naturway Kepek ve Dökülme Karşıtı Sarımsaklı Şampuan 500 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8699512011869",
    "name": "Naturway Şampuan Sarımsak Özlü Dökülme ve Kepek Karşıtı 500 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "8699512011899",
    "name": "Otacı Gül Kürü Yüz ve Boyun Kremi 50 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8699512012056",
    "name": "Otacı Botanics+ Kepek Karşıtı Bitkisel Bakım Şampuanı Duvar Sarmaşığı ve Çinko 375 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8699512012063",
    "name": "Otacı Botanics+ Yağlanma Karşıtı Bitkisel Bakım Şampuanı Isırgan Otu ve Salisilik Asit 375 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8699512012070",
    "name": "Otacı Botanics+ Canlandırıcı Bitkisel Bakım Şampuanı 10 Bitki ve Biotin 375 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8699512012087",
    "name": "Otacı Botanics+ Canlandırıcı Bitkisel Saç Bakım Kremi 10 Bitki ve Biotin 375 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8699512012094",
    "name": "Otacı Botanics+ Dolgunluk ve Hacim Veren Bitkisel Bakım Şampuanı Bitkisel Keratin ve Arnika 375 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8699512012100",
    "name": "Otacı Botanics+ Onarıcı ve Güçlendirici Bitkisel Bakım Şampuanı Bal Kabağı ve Bitkisel Keratin 375 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8699512012117",
    "name": "Otacı Botanics+ Onarıcı ve Güçlendirici Bitkisel Saç Bakım Kremi Bal Kabağı ve Bitkisel Keratin 375",
    "source": "local_gratis"
  },
  {
    "barcode": "8699512012131",
    "name": "Otacı Botanics Nemlendirici & Canlandırıcı Bitkisel Saç Bakım Maskesi 200 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8699512012148",
    "name": "Otacı Botanics Onarıcı ve Güçlendirici Bitkisel Saç Bakım Maskesi 200 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8699512012155",
    "name": "Otacı Botanics Onarıcı ve Güçlendirici Bitkisel Saç Bakım Serumu 100 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8699512012162",
    "name": "Otacı Botanics Işıltılı Parlaklık Sağlayan Bitkisel Saç Bakım Yağı 100 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8699512012209",
    "name": "Otacı Naturway Sarımsak Özlü Dökülme Karşıtı Saç Bakım Serumu 100 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8699512012216",
    "name": "Otacı Botanics Saf Biberiye Suyu Tonik 150 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8699512012803",
    "name": "Otacı Botanics Bitkisel Şekillendirici Saç Köpüğü 150 ml (Yumuşak & Orta Tutuş)",
    "source": "local_gratis"
  },
  {
    "barcode": "8699512012810",
    "name": "Otacı Botanics Bitkisel Şekillendirici Saç Köpüğü 150 ml (Orta & Sert  Tutuş)",
    "source": "local_gratis"
  },
  {
    "barcode": "8699512849201",
    "name": "Otacı Botanics+ Nemlendirici ve Aydınlatıcı Yüz Bakım Serumu 30 ml",
    "source": "local_rossmann"
  },
  {
    "barcode": "8699514350491",
    "name": "Hametol Onarıcı Bakım Kremi 30 gr",
    "source": "local_gratis"
  },
  {
    "barcode": "8699514350507",
    "name": "Hametol Cilt Bakım Kremi 30 g",
    "source": "local_watsons"
  },
  {
    "barcode": "8699546340071",
    "name": "Bepanthol Derma Yüz Temizleme Jeli Arındırıcı 200 ml",
    "source": "local_rossmann"
  },
  {
    "barcode": "8699546340125",
    "name": "Bepanthol Derma Arındırıcı ve Canlandırıcı Yüz Temizleme Jeli 200 ml + Dudak Bakım Kremi 7.5 ml",
    "source": "local_rossmann"
  },
  {
    "barcode": "8699546348947",
    "name": "Bepanthol Sensidaily Yüz ve Vücut Temizleme Jeli 200 ml",
    "source": "local_rossmann"
  },
  {
    "barcode": "8699546350209",
    "name": "Bepanthol Dudak Bakım Kremi 7.5 ml",
    "source": "local_rossmann"
  },
  {
    "barcode": "8699546350210",
    "name": "Bepanthol Dudak Bakım Kremi 7,5 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "8699546358625",
    "name": "Bepanthol Cilt Bakım Kremi 30 ml",
    "source": "local_rossmann"
  },
  {
    "barcode": "8699546358626",
    "name": "Bepanthol Cilt Bakım Kremi 30 gr",
    "source": "local_watsons"
  },
  {
    "barcode": "8699546358632",
    "name": "Bepanthol Cilt Bakım Kremi 100 ml",
    "source": "local_rossmann"
  },
  {
    "barcode": "8699546358633",
    "name": "Bepanthol Cilt Bakım Kremi 100 gr",
    "source": "local_watsons"
  },
  {
    "barcode": "8699546358687",
    "name": "Bepanthol Derma Onarıcı Bakım Merhemi 50 gr ve Cilt Bakım Kremi 30 gr Set",
    "source": "local_rossmann"
  },
  {
    "barcode": "8699546358694",
    "name": "Bepanthol Cilt Bakım Kremi 50 ml",
    "source": "local_rossmann"
  },
  {
    "barcode": "8699546358700",
    "name": "Bepanthol Vücut Kremi Sensidaily 400 ml",
    "source": "local_rossmann"
  },
  {
    "barcode": "8699546358779",
    "name": "Bepanthol Derma Gece Bakım Kremi Yoğun Nemlendirici 50 ml",
    "source": "local_rossmann"
  },
  {
    "barcode": "8699546358823",
    "name": "Bepanthol Sensidaily Vücut Kremi 200 ml",
    "source": "local_rossmann"
  },
  {
    "barcode": "8699546358908",
    "name": "Bepanthol Derma Yüz Bakım Kremi Nemlendirici Spf 25 50 ml",
    "source": "local_rossmann"
  },
  {
    "barcode": "8699546358909",
    "name": "Bepanthol Derma Yüz Bakım Kremi Nemlendirici ve Besleyici Spf 25 50 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "8699546358953",
    "name": "Bepanthol Derma Expert Yüz Bakım Kremi Canlandırıcı 50 ml",
    "source": "local_rossmann"
  },
  {
    "barcode": "8699546358977",
    "name": "Bepanthol Derma Expert Yüz Bakım Kremi Kırışıklık Karşı 50 ml",
    "source": "local_rossmann"
  },
  {
    "barcode": "8699546358984",
    "name": "Bepanthol Derma Expert Yüz Bakım Kremi Aydınlatıcı 50 ml",
    "source": "local_rossmann"
  },
  {
    "barcode": "8699546359035",
    "name": "Bepanthol 3'lü Set Derma Onarıcı Merhem 30 g + Cilt Bakım Kremi 30 g + Dudak Bakım Kremi 7,5 g",
    "source": "local_watsons"
  },
  {
    "barcode": "8699546370412",
    "name": "Bepanthol Onarıcı Bakım Merhemi 50 gr",
    "source": "local_rossmann"
  },
  {
    "barcode": "8699546370580",
    "name": "Bepanthol Onarıcı Bakım Merhemi 30 ml",
    "source": "local_rossmann"
  },
  {
    "barcode": "8699546370581",
    "name": "Bepanthol Onarıcı Bakım Merhemi 30 gr",
    "source": "local_watsons"
  },
  {
    "barcode": "8699546370603",
    "name": "Bepanthol Tattoo Dövme Bakım Merhemi 50 gr",
    "source": "local_rossmann"
  },
  {
    "barcode": "8699546485246",
    "name": "Bepanthol Derma Temel Nemlendirici Losyon 200 ml",
    "source": "local_rossmann"
  },
  {
    "barcode": "8699546485253",
    "name": "Bepanthol Derma Yoğun Nemlendirici Losyon 200 ml",
    "source": "local_rossmann"
  },
  {
    "barcode": "8699546485260",
    "name": "Bepanthol Derma Vücut Losyonu Hydrating 400 ml",
    "source": "local_rossmann"
  },
  {
    "barcode": "8699546485277",
    "name": "Bepanthol Derma Vücut Losyonu Regenerating 400 ml",
    "source": "local_rossmann"
  },
  {
    "barcode": "8699546630011",
    "name": "Bepanthol Dudak Bakım Kremi SPF 30 Koruyucu 4.5 gr",
    "source": "local_rossmann"
  },
  {
    "barcode": "8699568501108",
    "name": "Wella Koleston Peroksit 6% Sıvı Oksidasyon Kremi",
    "source": "local_gratis"
  },
  {
    "barcode": "8699568501115",
    "name": "Wella Koleston Peroksit 9% Sıvı Oksidasyon Kremi",
    "source": "local_gratis"
  },
  {
    "barcode": "8699568534298",
    "name": "Wella Wellaflex 2 Days Volume 2 Gün Boyunca Hacim Veren Saç Spreyi Extra Strong Hold 75 ml - 4/5 Hold",
    "source": "local_gratis"
  },
  {
    "barcode": "8699649008007",
    "name": "Dermoten Repage Kolajen & Kırmızı Yosun Yaşlanma Karşıtı Cilt Bakım Kremi 50 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8699649008014",
    "name": "Dermoten Besleyici ve Güçlendirici Kaş Kirpik Serumu 20 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8699649008182",
    "name": "Dermoten Arındırıcı Makyaj Temizleme Balmı 50 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8699649008199",
    "name": "Dermoten %10 Üre İçeren Nemlendirici Vücut Bakım Sütü 250 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8699649122918",
    "name": "Dermoten Kolajen İçerikli Yüz Temizleme Jeli 275 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8699649122925",
    "name": "Dermoten Kırışıklık Karşıtı ve Aydınlatıcı Göz Çevresi Göz Altı Kremi 15 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8699649122932",
    "name": "Dermoten Niacinamide ve Çay Ağacı Yağı İçeren Akne Karşıtı Cilt Bakım Serumu 30 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8699649122949",
    "name": "Dermoten Nemlendirici E Vitamini Serumu 30 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8699649122956",
    "name": "Dermoten Hyalüronik Asit ve Dunaliella Salina Özlü Göz Çevresi Göz Altı Serumu 30 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8699649122963",
    "name": "Dermoten Nemlendirici Hyalüronik Asit Serumu 30 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8699649122970",
    "name": "Dermoten Aydınlatıcı C Vitaminli Leke Karşıtı Cilt Bakım Serumu 30 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8699649122987",
    "name": "Dermoten Kolajen Yaşlanma Karşıtı Cilt Bakım Serumu 30 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8699649122994",
    "name": "Dermoten Kırmızı Yosun ve Üzüm Çekirdeği İçeren Sıvı Peeling 150 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8699649123021",
    "name": "Dermoten Arındırıcı Kırmızı Peeling Serum 30 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8699649123458",
    "name": "Dermoten 72 Saat Etkili Yoğun Nemlendirici Cilt Bakım Kremi 50 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8699649123465",
    "name": "Dermoten StemAge Aydınlatıcı ve Nemlendirici Eksozom Gündüz Kremi 50 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8699649123472",
    "name": "Dermoten StemAge Onarıcı Eksozom Gece Kremi 50 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8699649123489",
    "name": "Dermoten StemAge Sıkılaştırıcı Boyun ve Dekolte Eksozom Kremi 50 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8699649123496",
    "name": "Dermoten StemAge Aydınlatıcı ve Ton Eşitleyici Eksozom Yüz Serumu 30 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8699649129276",
    "name": "Dermoten Aydınlatıcı Leke Karşıtı Bakım Kremi 50 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8699863452396",
    "name": "Bee Beauty Serum C Maske 8 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8699863452471",
    "name": "Bee Beauty Termal Kil Yüz Maskesi 2 x 5 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8699863452488",
    "name": "Benri Makyaj Temizleme Mendili Normal ve Karma Ciltler İçin 25'li",
    "source": "local_gratis"
  },
  {
    "barcode": "8699863452495",
    "name": "Benri Makyaj Temizleme Mendili Kuru ve Hassas Ciltler İçin 25'li",
    "source": "local_gratis"
  },
  {
    "barcode": "8699863453379",
    "name": "Bee Beauty Micellar Makyaj Temizleme Mendili 25'li",
    "source": "local_gratis"
  },
  {
    "barcode": "8699863453881",
    "name": "Bee Beauty Yüz İçin Ağda Bandı 24'lü",
    "source": "local_gratis"
  },
  {
    "barcode": "8699863453935",
    "name": "Eklips Krepe Tarak",
    "source": "local_gratis"
  },
  {
    "barcode": "8699863454208",
    "name": "Eklips Saç Boya Fırçası Siyah",
    "source": "local_gratis"
  },
  {
    "barcode": "8699863454239",
    "name": "Eklips Saç Boyama Seti Siyah",
    "source": "local_gratis"
  },
  {
    "barcode": "8699863457704",
    "name": "Eklips Saç Masaj Aleti B80007",
    "source": "local_gratis"
  },
  {
    "barcode": "8699863457834",
    "name": "Bee Beauty Toz Kahve Vücut Peeling 200 gr",
    "source": "local_gratis"
  },
  {
    "barcode": "8699863457841",
    "name": "Bee Beauty Kahveli Jel Vücut Peeling 200 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8699863458992",
    "name": "Eklips Krepe Fırçası",
    "source": "local_gratis"
  },
  {
    "barcode": "8699863459128",
    "name": "Eklips Ultra Saplı Tarak 150",
    "source": "local_gratis"
  },
  {
    "barcode": "8699863459753",
    "name": "Bee Beauty Kolajen Yüz Kremi Aloe Vera 50 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8699863459777",
    "name": "Bee Beauty Kolajen Yüz Kremi Keçi Sütü 50 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8699863459876",
    "name": "Bee Beauty Bant Ağda Maxi Kit 54'lü",
    "source": "local_gratis"
  },
  {
    "barcode": "8699863459883",
    "name": "Bee Beauty Vücut Ağda Bandı 24'lü",
    "source": "local_gratis"
  },
  {
    "barcode": "8699863459906",
    "name": "Bee Beauty Tüy Dökücü Krem Hassas Ciltler 100 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8699863459951",
    "name": "Bee Beauty Ağda Temizleme Yağı 150 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8699872931905",
    "name": "StopEver Pore Strip Siyah Nokta Bandı 6'lı",
    "source": "local_gratis"
  },
  {
    "barcode": "8699872932322",
    "name": "StopEver Charcoal Pore Strip Kömürlü Siyah Nokta Bandı 6'lı",
    "source": "local_gratis"
  },
  {
    "barcode": "8699872933107",
    "name": "StopEver Clearly Spot Patch 24'lü",
    "source": "local_gratis"
  },
  {
    "barcode": "8699872933824",
    "name": "StopEver Skin Solu Deep Collagen Eriyen Sıkılaştırıcı & Nemlendirici Yüz Maskesi",
    "source": "local_gratis"
  },
  {
    "barcode": "8699872933831",
    "name": "StopEver Skin Solu Glow Kağıt C Vitaminli Göz Altı Maskesi",
    "source": "local_gratis"
  },
  {
    "barcode": "8699872933848",
    "name": "StopEver Skin Solu Hydrate Kağıt Yoğun Nemlendirici Göz Altı Maskesi",
    "source": "local_gratis"
  },
  {
    "barcode": "8699872933879",
    "name": "StopEver Holografik Magic Akne Bandı 20'li",
    "source": "local_gratis"
  },
  {
    "barcode": "8699885903609",
    "name": "Mara Saç Maskarası Siyah",
    "source": "local_rossmann"
  },
  {
    "barcode": "8699885903616",
    "name": "Mara Saç Maskarası Koyu Kahve",
    "source": "local_rossmann"
  },
  {
    "barcode": "8699885903623",
    "name": "Mara Saç Maskarası Açık Kahve",
    "source": "local_rossmann"
  },
  {
    "barcode": "8699885903624",
    "name": "Mara Açık Kahve Saç Maskarası",
    "source": "local_watsons"
  },
  {
    "barcode": "8699885903630",
    "name": "Mara Açık Kumral Saç Maskarası",
    "source": "local_watsons"
  },
  {
    "barcode": "8699885907133",
    "name": "Mara Saç Şekillendirici Stick Maskara 70 ml",
    "source": "local_rossmann"
  },
  {
    "barcode": "8699885907639",
    "name": "Mara Babyhair Styling Saç Maskarası",
    "source": "local_watsons"
  },
  {
    "barcode": "8699885907646",
    "name": "Mara Babyhair Styling Stick Wax 50 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "8699885908710",
    "name": "WeMara Hyalüronik Asit & Nemlendirici Göz Bakım Kremi 18 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8699885908734",
    "name": "WeMara Vitamin C & Aydınlatıcı Göz Bakım Kremi 18 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8699885908741",
    "name": "WeMara Collagen Youth Face Yoga & Yüz ve Boyun Kremi 80 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8699885908758",
    "name": "WeMara Collagen Lifting Face Yoga & Yüz ve Boyun Kremi 80 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8699885908994",
    "name": "WeMara Ton Eşitleyici 50+SPF Güneş Koruyucu Yüz Kremi Koyu Tenliler İçin 50 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8699885909007",
    "name": "WeMara Ton Eşitleyici 50+SPF Güneş Koruyucu Yüz Kremi Açık Tenliler İçin 50 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8699885909700",
    "name": "WeMara Matcha & Zen Serum Dokulu Krem 40 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8699941253006",
    "name": "For Your Beauty Toka Kancalı Havlu Siyah KHTK1 4'lü",
    "source": "local_rossmann"
  },
  {
    "barcode": "8699941253020",
    "name": "For Your Beauty Toka Havlu Mandal Set 4H1M HMTK1 1 adet",
    "source": "local_rossmann"
  },
  {
    "barcode": "8699941253129",
    "name": "For Your Beauty Toka Havlu Siyah S HVLTK 2 16'lı",
    "source": "local_rossmann"
  },
  {
    "barcode": "8699941253136",
    "name": "For Your Beauty Toka Havlu Renkli S HVLTK 3 16'lı",
    "source": "local_rossmann"
  },
  {
    "barcode": "8699941253143",
    "name": "For Your Beauty Toka Havlu Siyah M HVLTK 4 12'li",
    "source": "local_rossmann"
  },
  {
    "barcode": "8699941253150",
    "name": "For Your Beauty Toka Havlu Renkli M HVLTK 6 12'li",
    "source": "local_rossmann"
  },
  {
    "barcode": "8699941253167",
    "name": "For Your Beauty Toka Havlu Siyah L HVLTK 7 10'lu",
    "source": "local_rossmann"
  },
  {
    "barcode": "8699941253174",
    "name": "For Your Beauty Toka Havlu Renkli L HVLTK 8 10'lu",
    "source": "local_rossmann"
  },
  {
    "barcode": "8699941253181",
    "name": "For Your Beauty Toka Kablo Siyah KBLTK1 4'lü",
    "source": "local_rossmann"
  },
  {
    "barcode": "8699941253204",
    "name": "For Your Beauty Toka Kablo Mini Siyah KBLTK3 5'li",
    "source": "local_rossmann"
  },
  {
    "barcode": "8699941253211",
    "name": "For Your Beauty Toka Kablo Mini Renkli KBLTK4 5'li",
    "source": "local_rossmann"
  },
  {
    "barcode": "8699941253259",
    "name": "For Your Beauty Toka Lastik Kalın LSTK1 8'li",
    "source": "local_rossmann"
  },
  {
    "barcode": "8699941253266",
    "name": "For Your Beauty Mandal Toka 4 Dişli Siyah MNDTK4D 1 adet",
    "source": "local_rossmann"
  },
  {
    "barcode": "8699941253327",
    "name": "For Your Beauty Mandal Toka 7 Dişli Siyah MNDTK7D 1 adet",
    "source": "local_rossmann"
  },
  {
    "barcode": "8699941253365",
    "name": "For Your Beauty Mandal Toka Taşlı Siyah 6 Dişli MNDTKTS6D2 2'li",
    "source": "local_rossmann"
  },
  {
    "barcode": "8699941253372",
    "name": "For Your Beauty Mandal Toka Taşlı Siyah 6 Dişli MNDTKTS6D 1 adet",
    "source": "local_rossmann"
  },
  {
    "barcode": "8699941253570",
    "name": "For Your Beauty Tel Toka Siyah TELTKS1 30'lu",
    "source": "local_rossmann"
  },
  {
    "barcode": "8699941253624",
    "name": "For Your Beauty Pens Toka Hamur HMRPNSTK1 3'lü",
    "source": "local_rossmann"
  },
  {
    "barcode": "8699941253631",
    "name": "For Your Beauty Lastik Toka Figürlü FGRLKTK1 2'li",
    "source": "local_rossmann"
  },
  {
    "barcode": "8699941253648",
    "name": "For Your Beauty Toka Çocuk Tüylü Simit CCKTYSMT1 1 adet",
    "source": "local_rossmann"
  },
  {
    "barcode": "8699954306843",
    "name": "Bee Beauty Pembe Marshmallow Krem Maske 50 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8699954705639",
    "name": "Petite Maison Nemlendirici Matlaştırıcı Süt Serum 30 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8699956513713",
    "name": "Bioderma Sebium Foaming Jel 500 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "8700216079389",
    "name": "Head & Shoulders Derinlemesine Temiz Kaşıntı Giderici Kepeğe Karşı Etkili Şampuan 300 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8700216079390",
    "name": "Head&Shoulders Derinlemesine Temiz Kaşıntı Giderici Nane 300 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "8700216079457",
    "name": "Head & Shoulders Derinlemesine Temiz Yağlanma Kontrolü Kepeğe Karşı Etkili Şampuan 300 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8700216079458",
    "name": "Head&Shoulders Derinlemesine Temiz Yağlanma Kontrolü Limon 300 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "8700216079471",
    "name": "Head & Shoulders Derinlemesine Temiz Saç Derisi Detoksu Kepeğe Karşı Etkili Şampuan 300 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8700216079472",
    "name": "Head&Shoulders Derinlemesine Temiz Yoğun Ferahlık Deniz Mineralleri 300 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "8700216130516",
    "name": "Gillette Venus Comfort Glide Sugarberry Tıraş Makinesi + 1 Adet Başlık",
    "source": "local_gratis"
  },
  {
    "barcode": "8700216143653",
    "name": "Gillette Simply Venus 2 Kullan At Kadın Tıraş Bıçağı 2'li",
    "source": "local_gratis"
  },
  {
    "barcode": "8700216143714",
    "name": "Gillette Simply Venus 2 Kullan At Kadın Tıraş Bıçağı 4'lü Paket",
    "source": "local_gratis"
  },
  {
    "barcode": "8700216211635",
    "name": "Herbal Essences Kadifemsi Yumuşaklık Gül Kokulu Saç Bakım Maskesi 300 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8700216211659",
    "name": "Herbal Essences Nemlendirici Hindistan Cevizi Kokulu Saç Bakım Maskesi 300 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8700216212069",
    "name": "Herbal Essences Kabarıklık Önleyici Lavanta Kokulu Saç Bakım Kremi 250 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "8700216212212",
    "name": "Herbal Essences Kadifemsi Yumuşaklık Gül Kokulu Saç Bakım Kremi 250 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8700216212236",
    "name": "Herbal Essences Nemlendirici Hindistan Cevizi Kokulu Saç Bakım Kremi 250 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8700216212298",
    "name": "Herbal Essences Onarıcı Argan Yağı Saç Bakım Maskesi 300 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8700216212373",
    "name": "Herbal Essences Yatıştırıcı Aloe İçeren Sülfatsız Saç Bakım Kremi 250 ml",
    "source": "local_rossmann"
  },
  {
    "barcode": "8700216212519",
    "name": "Herbal Essences Kadifemsi Yumuşaklık Gül Kokulu Şampuan 350 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8700216212526",
    "name": "Herbal Essences Nemlendirici Hindistan Cevizi Kokulu Şampuan 350 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8700216212595",
    "name": "Herbal Essences Yatıştırıcı Aloe İçeren Sülfatsız Şampuan 350 ml",
    "source": "local_rossmann"
  },
  {
    "barcode": "8700216212687",
    "name": "Herbal Essences Onarıcı Argan Yağı Saç Bakım Kremi 250 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8700216212854",
    "name": "Herbal Essences Onarıcı Argan Yağı Şampuan 350 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8700216233460",
    "name": "Pantene Pro-V Miracles Molecular Bond Repair Yenileyici Saç Maskesi Besleyici İnci İle 300 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8700216258204",
    "name": "Head&Shoulders Erkeklere Özel Kafeinli Dökülme ve Kepek Karşıtı Şampuan 330 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "8700216258487",
    "name": "Head&Shoulders Derin Nemlendirici Kepek Hindistan Cevizi Yağlı Günlük Kullanım Şampuan 330 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "8700216258494",
    "name": "Head & Shoulders Derinlemesine Nemlendirici Kepeğe Karşı Karşı Etkili Şampuan 330 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8700216259880",
    "name": "Head & Shoulders Ekstra Hacim Dolgunluk Kepeğe Karşı Etkili Şampuan 330 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8700216259903",
    "name": "Head & Shoulders Ekstra Hacim Kepek Karşıtı Günlük Kullanım Şampuan 330 ml",
    "source": "local_rossmann"
  },
  {
    "barcode": "8700216259910",
    "name": "Head & Shoulders Limon Ferahlığı Kepeğe Karşı Etkili Şampuan 330 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8700216259965",
    "name": "Head & Shoulders 2'si 1 Arada İpeksi Yumuşaklık Kepek Karşıtı Şampuan 300 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8700216260008",
    "name": "Head & Shoulders Klasik Bakım Kepek Karşıtı  Günlük Kullanım Şampuan 330 ml",
    "source": "local_rossmann"
  },
  {
    "barcode": "8700216260022",
    "name": "Head & Shoulders Klasik Bakım Kepeğe Karşı Etkili Şampuan 330 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8700216260053",
    "name": "Head & Shoulders Kadınlara Özel Dökülme Karşıtı Kepeğe Karşı Etkili Şampuan 330 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8700216260121",
    "name": "Head & Shoulders 2'si 1 Arada Klasik Bakım Kepek Karşıtı Şampuan 300 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8700216260152",
    "name": "Head & Shoulders Mentol Ferahlığı Kepek Karşıtı Şampuan 300 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8700216269988",
    "name": "Pantene Pro-V Miracles Frizz No More Kıvırcık Saçlar İçin Saç Bakım Kremi 275 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8700216270731",
    "name": "Pantene Pro-V Miracles Frizz No More Kıvırcık Saçlar İçin Maske 300 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8700216270830",
    "name": "Pantene Pro-V Miracles Molecular Bond Repair Yoğun Uygulama Kürü Pro-V Besleyici İnci İle 150 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8700216343923",
    "name": "Pantene Miracle Serum Onarıcı & Koruyucu Şampuan Emily in Paris Özel Seri 250 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "8700216416191",
    "name": "Pantene Anında Onarıcı ve Nemlendirici Krem 300 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8700216422192",
    "name": "Pantene Pro-V Onarıcı & Koruyucu Şampuan 625 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8700216422222",
    "name": "Pantene Onarıcı Bakım Saç Bakım Kremi 275 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8700216422223",
    "name": "Pantene Onarıcı ve Koruyucu Saç Bakım Kremi 275 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "8700216422284",
    "name": "Pantene Onarıcı & Koruyucu Şampuan 400 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8700216447867",
    "name": "Pantene Pro-V Miracles Molecular Bond Repair Şampuan Yıpranmış Saçlar İçin 250 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8700216452168",
    "name": "Pantene Pro-V Miracles Molecular Bond Repair Saç Bakım Kremi Yıpranmış Saçlar İçin 160 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8700216471336",
    "name": "Pantene Pro-V Miracles Frizz No More Kıvırcık Saçlar İçin Şampuan 325 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8700216480000",
    "name": "Gillette Venus Bikini Bölgesi Tıraş Makinesi",
    "source": "local_gratis"
  },
  {
    "barcode": "8700216480031",
    "name": "Gillette Venus Bikini Bölgesine Özel 3 Adet Yedek Başlık",
    "source": "local_gratis"
  },
  {
    "barcode": "8700216500630",
    "name": "Pantene Miracle Serum Onarıcı & Koruyucu Saç Kremi 220 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8700216530521",
    "name": "Head & Shoulders DermaXPRO Yatıştırıcı Kepek Karşıtı Şampuan 300 ml",
    "source": "local_rossmann"
  },
  {
    "barcode": "8700216530583",
    "name": "Head & Shoulders DermaXPro Scalp & Hair Revitaliser Dökülme ve Kepek Karşıtı Şampuan Kafein ve Seramid İle 300 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8700216530620",
    "name": "Head & Shoulders Dermaxpro Scalp Revitalizer Saç Dökülme Karşıtı Saç Kremi 220 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8700216530644",
    "name": "Head & Shoulders DermaXPRO Yatıştırıcı Saç ve Saç Derisi Bakım Kremi 220 ml",
    "source": "local_rossmann"
  },
  {
    "barcode": "8700216530712",
    "name": "Head & Shoulders DermaXPRO Anında Yatıştırıcı Durulanan Saç Derisi Balsamı 145 ml",
    "source": "local_rossmann"
  },
  {
    "barcode": "8700216530835",
    "name": "Head & Shoulders Dermaxpro Scalp Revitalizer Saç Dökülme Karşıtı Saç Bakım Serumu 145 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8700216530836",
    "name": "Head&Shoulders Dermaxpro Scalp Saç Serumu 145 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "8700216546775",
    "name": "Pantene Miracle Serum Güç & Parlaklık Saç Kremi 220 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8700216547444",
    "name": "Pantene Pro-V Derinlemesine Nemlendirme Hindistan Cevizi Özlü Saç Bakım Yağı 100 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8700216547445",
    "name": "Pantene Pro-V Saç Bakım Yağı Hindistan Cevizi Özlü 100 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "8700216547529",
    "name": "Pantene Pro-V İpeksi Yumuşaklık ve Parlaklık Argan Özlü Saç Bakım Yağı 100 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8700216547635",
    "name": "Pantene Pro-V E Vitaminli Keratin Koruyucu Yoğun Onarıcı Saç Bakım Yağı 100 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8700216547727",
    "name": "Pantene Pro-V Zayıf ve Yıpranmış Saçlar için Onarım ve Koruma Keratin Saç Maskesi 200 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8700216547728",
    "name": "Pantene Pro-V Keratin Koruyucu Maske 200 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "8700216555258",
    "name": "Pantene Dökülme Karşıtı Şampuan 400 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8700216555319",
    "name": "Pantene Temel Bakım Şampuan 400 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8700216555371",
    "name": "Pantene Kepek Karşıtı Şampuan 400 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8700216556170",
    "name": "Pantene Pro-V Dökülme Karşıtı Saç Bakım Kremi 275 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8700216556171",
    "name": "Pantene Dökülme Karşıtı Saç Bakım Kremi 275 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "8700216556355",
    "name": "Pantene Doğal Sentez Yağ Terapisi Saç Kremi 275 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "8700216556408",
    "name": "Pantene Doğal Sentez Güç ve Parlaklık Saç Kremi 275 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8700216556409",
    "name": "Pantene Doğal Sentez Güç Parlak Saç Kremi 275 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "8700216556607",
    "name": "Pantene Temel Bakım Saç Bakım Kremi 275 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "8700216556835",
    "name": "Pantene Güç & Parlaklık Şampuan 400 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8700216556880",
    "name": "Pantene Onarıcı & Koruyucu 3'ü 1 Arada Şampuan 400 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8700216556958",
    "name": "Pantene Güç & Parlaklık 3'ü 1 Arada Şampuan 400 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8700216557061",
    "name": "Pantene Pro-V Güç & Parlaklık Şampuan 625 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8700216557184",
    "name": "Pantene Onarıcı & Koruyucu Saç Bakım Kremi 500 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8700216557245",
    "name": "Pantene Güç ve Parlaklık Şampuan 800 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8700216557290",
    "name": "Pantene Güç ve Parlaklık Saç Bakım Kremi 500 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8700216557351",
    "name": "Pantene Şampuan Temel Bakım 3'ü 1 Arada 625 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "8700216557405",
    "name": "Pantene Onarıcı & Koruyucu Şampuan 800 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8700216562577",
    "name": "Herbal Essences Hacim Portakal Kokulu Saç Kremi 250 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "8700216610933",
    "name": "Old Spice Bearglove Erkek Duş Jeli ve Şampuan XXL Büyük Boy 1000 ml",
    "source": "local_rossmann"
  },
  {
    "barcode": "8700216631815",
    "name": "Herbal Essences Kadifemsi Yumuşaklık Gül Kokulu Hepsi Bir Arada Sıvı Saç Kremi 145 ml",
    "source": "local_rossmann"
  },
  {
    "barcode": "8700216631914",
    "name": "Herbal Essences Parlak ve Pürüzsüz Papatya Kokulu Hepsi Bir Arada Ağırlaştırmayan Sıvı Saç Kremi 145",
    "source": "local_gratis"
  },
  {
    "barcode": "8700216637244",
    "name": "Pantene Bond Repair Mucize Saç Bakım Kremi 90 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8700216657235",
    "name": "Head&Shoulders Mentol Ferahlığı Kepek Karşıtı Şampuan 800 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "8700216657280",
    "name": "Head&Shoulders Klasik Bakım Şampuan 800 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "8700216658003",
    "name": "Head&Shoulders Arındırma ve Parlaklık Kepek Karşıtı Şampuan Elma Sirkesi 800 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "8700216661751",
    "name": "Head & Shoulders Arındırma ve Parlaklık Kepek Karşıtı Şampuan Elma Sirkesi ile 330 ml",
    "source": "local_rossmann"
  },
  {
    "barcode": "8700216664141",
    "name": "Head & Shoulders 2'si 1 Arada Klasik Bakım Kepek Karşıtı Şampuan 300 ml",
    "source": "local_rossmann"
  },
  {
    "barcode": "8700216664257",
    "name": "Head & Shoulders Mentol Ferahlığı Kepek Karşıtı Şampuan 300 ml",
    "source": "local_rossmann"
  },
  {
    "barcode": "8700216664288",
    "name": "Head & Shoulders 2'si 1 Arada İpeksi Yumuşaklık Kepek Karşıtı Şampuan 300 ml",
    "source": "local_rossmann"
  },
  {
    "barcode": "8700216674164",
    "name": "Gillette Venus ComfortGlide Sugarberry Kokulu Miami Kadın Tıraş Makinesi (3 Yedek Başlık)",
    "source": "local_gratis"
  },
  {
    "barcode": "8700216674195",
    "name": "Gillette Venus ComfortGlide Sugarberry Kokulu Miami Kadın 5 Bıçaklı Tıraş Makinesi",
    "source": "local_gratis"
  },
  {
    "barcode": "8700216677653",
    "name": "Head & Shoulders Klasik Bakım 2’si 1 Arada Kepek Şampuanı ve Saç Kremi 625 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8700216677660",
    "name": "Head&Shoulders Şampuan 2'si 1 Arada Mentol 625 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "8700216756884",
    "name": "Gillette Venus Smooth Miami Kadın Tıraş Bıçakları 3'lü Kadın Kullan At Tıraş Bıçakları",
    "source": "local_gratis"
  },
  {
    "barcode": "8700216839303",
    "name": "Head & Shoulders Clinical Strength Advanced Oil Control Yağ Dengeleyici Şampuan 400 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8700216839327",
    "name": "Head & Shoulders Clinical Strength Cooling Itch Rescue Kaşıntı Karşıtı Şampuan 400 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8700216878333",
    "name": "Gillette Simply Venus 3 Miami Tıraş Makinesi Gövdesi + 4 Bıçak",
    "source": "local_gratis"
  },
  {
    "barcode": "8700216920001",
    "name": "Aussie Miracle Moist Nemlendirici Şampuan 1 lt",
    "source": "local_watsons"
  },
  {
    "barcode": "8700216938884",
    "name": "Pantene Kesintisiz Nem Takviyesi Saç Bakım Kremi 275 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8700216938914",
    "name": "Pantene Kesintisiz Nem Takviyesi Keratin Koruyucu Maske 300 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8700216939058",
    "name": "Pantene Miracle Serum Kesintisiz Nem Takviyesi Saç Bakım Kremi 220 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8700216939126",
    "name": "Pantene Isıyla Aktifleşen Kesintisiz Nem Takviyesi Durulanmayan Saç Bakım Kremi 135 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8700216939546",
    "name": "Pantene Kesintisiz Nem Takviyesi Şampuan 400 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8700216967488",
    "name": "Aussie Miracle Moist Nemlendirici Saç Kremi 1 lt",
    "source": "local_watsons"
  },
  {
    "barcode": "8700216967525",
    "name": "Aussie Bouncy Curls Nemlendiren Saç Kremi 1 lt",
    "source": "local_watsons"
  },
  {
    "barcode": "8700216967587",
    "name": "Aussie Bouncy Curls Arındıran Nemlendiren Şampuan 1 lt",
    "source": "local_watsons"
  },
  {
    "barcode": "8710447217054",
    "name": "Dove Vücut Peelingi Macademia Fındığı & Pirinç Sütü 225 ml",
    "source": "local_rossmann"
  },
  {
    "barcode": "8710447257265",
    "name": "Dove Vücut Peelingi Nar Çekirdeği & Shea Yağı 225 ml",
    "source": "local_rossmann"
  },
  {
    "barcode": "8710447474419",
    "name": "Simple Günlük Cilt Detoksu Arındırıcı Yüz Temizleme Jeli 150 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8710447474426",
    "name": "Simple Daily Skin Detox Gözenek Arındırıcı Peeling 150 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8710908435812",
    "name": "Simple Güneş Koruyucu SPF15 Nemlendirici Krem 125 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8710908710773",
    "name": "Simple Water Boost Micellar Yüz Temizleme Jeli 150 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8710908711619",
    "name": "Simple Water Boost Micellar Makyaj Temizleme Suyu 400 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8712561669825",
    "name": "Simple Kind to Skin B3+C Vitaminli Micellar Su 200 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8718951749924",
    "name": "Palmolive Duş Jeli Men Sport 750 ml",
    "source": "local_rossmann"
  },
  {
    "barcode": "8718951753761",
    "name": "Palmolive Duş Jeli Men Pure Arctic 500 ml",
    "source": "local_rossmann"
  },
  {
    "barcode": "8720181698972",
    "name": "Vaseline Gluta Hya Serum Etkili Yoğun Nemlendirici Gece Losyonu 200 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8800240569969",
    "name": "Medicube Zero Pore Soğutucu Maske 1 Adet",
    "source": "local_watsons"
  },
  {
    "barcode": "8800240573188",
    "name": "Medicube Glutathione Glow Kapsul Krem 50 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "8800245031331",
    "name": "Elensilia PDRN Somon DNA Kırışıklık Karşıtı Pdr-Lagen Göz Kremi 30 g",
    "source": "local_watsons"
  },
  {
    "barcode": "8800248701577",
    "name": "Banila Co Hello Sunny Yüz Güneş Kremi SPF50+ PA++++ 50 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "8800248701584",
    "name": "Banila Co Hello Sunny Yüz Stick Güneş Koruyucu SPF50+ PA++++ 18g",
    "source": "local_watsons"
  },
  {
    "barcode": "8800248705536",
    "name": "Banila Co Clean It Zero Yağ Bazlı Yüz Temizleyici Balm Orijinal Powerpuff 100 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "8800248706663",
    "name": "Banila Co Clean It Zero Yağ Bazlı Yüz Temizleyici Balm Orijinal Snoopy 100 ml Charm Hediyeli",
    "source": "local_watsons"
  },
  {
    "barcode": "8800248706687",
    "name": "Banila Co Clean It Zero Yağ Bazlı Yüz Temizleyici Balm Gözenek Kontrol Snoopy 100 ml Charm Hediyeli",
    "source": "local_watsons"
  },
  {
    "barcode": "8800250591974",
    "name": "Frankly PDRN Bounce Ball Serum 30 ml",
    "source": "local_rossmann"
  },
  {
    "barcode": "8800250592919",
    "name": "Frankly PDRN Bounce Ball Cream 50 ml",
    "source": "local_rossmann"
  },
  {
    "barcode": "8800256108046",
    "name": "Medicube PDRN Somon DNA Pink Kolajen Gel Maske 1 Adet",
    "source": "local_watsons"
  },
  {
    "barcode": "8800256108053",
    "name": "Medicube PDRN Somon DNA Pink Peptide Serum 30 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "8800256109661",
    "name": "Medicube Deep C Vitamini Tonik Pad 150 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "8800256112159",
    "name": "Medicube Exosome Cica Tonik 210 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "8800256112227",
    "name": "Medicube Kolajen Jelly Krem 50 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "8800256113217",
    "name": "Medicube Kolajen Gece Maskesi 75 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "8800256114313",
    "name": "Medicube Kolajen Üçlü Krem 50 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "8800256114666",
    "name": "Medicube Zero Pore Pad 2.0 155 g",
    "source": "local_watsons"
  },
  {
    "barcode": "8800256114740",
    "name": "Medicube Age-R Booster Pro Mini Beyaz",
    "source": "local_watsons"
  },
  {
    "barcode": "8800256119401",
    "name": "Medicube Age-R Booster Pro Siyah",
    "source": "local_watsons"
  },
  {
    "barcode": "8800256119418",
    "name": "Medicube Age-R Booster Pro Pembe",
    "source": "local_watsons"
  },
  {
    "barcode": "8800256119653",
    "name": "Medicube PDRN Somon DNA Pembe Niasinamid Sütlü Tonik 150 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "8800274070028",
    "name": "Dermal Korea Vitamin Hidrojel Eriyen Yüz Maskesi 34 gr",
    "source": "local_gratis"
  },
  {
    "barcode": "8800274070134",
    "name": "Dermal Peeling Apple Toner Pad Yüz Gözenek Bakım Tonik Ped 8 Adet",
    "source": "local_gratis"
  },
  {
    "barcode": "8800274070141",
    "name": "Dermal Cleansing Rice Bubble Pad Pirinç Özlü Yüz Gözenek Temizleme Pedi 8 Adet",
    "source": "local_gratis"
  },
  {
    "barcode": "8800274070189",
    "name": "Dermal PDRN Hidrojel Eriyen Maske 34 gr",
    "source": "local_gratis"
  },
  {
    "barcode": "8800274070424",
    "name": "Dermal PDRN Yüz Temizleme Ped 12 Adet",
    "source": "local_gratis"
  },
  {
    "barcode": "8800274070608",
    "name": "Dermal Rice Ceramide Glow Hydrogel Melting Yüz Maskesi 34 gr",
    "source": "local_gratis"
  },
  {
    "barcode": "8800274071001",
    "name": "Dermal PDRN Rice Skin Glow Yüz Kremi 50 gr",
    "source": "local_gratis"
  },
  {
    "barcode": "8800280691903",
    "name": "Abib Glow Collagen Mask Glutathione Film 38 gr",
    "source": "local_rossmann"
  },
  {
    "barcode": "8800280691941",
    "name": "Abib Glow Collagen Mask Glutathione Film 152 gr",
    "source": "local_rossmann"
  },
  {
    "barcode": "8800280692283",
    "name": "Abib Pdrn Retinal Eye Patch Glow Jelly 60'lı",
    "source": "local_rossmann"
  },
  {
    "barcode": "8800280693570",
    "name": "Abib Retinal Eye Serum Lifting Roller 15 ml",
    "source": "local_rossmann"
  },
  {
    "barcode": "8800280693839",
    "name": "Abib Jericho Rose Firming Sheet Mask Daily Pick 30 Sheets",
    "source": "local_rossmann"
  },
  {
    "barcode": "8800280694256",
    "name": "Abib Glutathione Vita Sheet Mask Daily Pick 30 Sheets",
    "source": "local_rossmann"
  },
  {
    "barcode": "8800283646603",
    "name": "Mamonde Flora Glow Rose Ball Maske 3,5 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8800283647235",
    "name": "Mamonde Flora Glow Rose Uyku Maskesi 80 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8800283647266",
    "name": "Mamonde Flora Glow Rose Hidrojel Yüz Maskesi 42 gr",
    "source": "local_gratis"
  },
  {
    "barcode": "8800283655117",
    "name": "Mamonde Amazing Deep Mint Charcoal-ate Yüz Temizleme Balmı 90 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8800283655773",
    "name": "Mamonde Amazing Deep Mint Charcoal-ate Yüz Temizleyici 135 gr",
    "source": "local_gratis"
  },
  {
    "barcode": "8800288647223",
    "name": "Tırtır Matcha Temizleyici Maske 120 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "8800288647247",
    "name": "Tırtır Matcha Cilt Toniği 150 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "8800288647254",
    "name": "Tırtır Matcha PDRN - Somon DNA Yatıştırıcı Krem 50 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "8800289467715",
    "name": "MEDICUBE PDRN PINK KOLAJEN KAPSUL KREM 55GR",
    "source": "local_watsons"
  },
  {
    "barcode": "8800289469078",
    "name": "Medicube Red Akne Vücut Temizleyici Jel 400 g",
    "source": "local_watsons"
  },
  {
    "barcode": "8800289470165",
    "name": "Medicube PDRN Somon DNA Pink Vita Coating Maske 1 Adet",
    "source": "local_watsons"
  },
  {
    "barcode": "8800289473395",
    "name": "Medicube Azelaic Asit Temizleme Köpüğü 120 g",
    "source": "local_watsons"
  },
  {
    "barcode": "8800289473838",
    "name": "Medicube Azelaic Asit Maske",
    "source": "local_watsons"
  },
  {
    "barcode": "8800289474859",
    "name": "Medicube Kojic Wrapping Maske 75 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "8800289474958",
    "name": "Medicube Kojic Temizleme Jeli 120 g",
    "source": "local_watsons"
  },
  {
    "barcode": "8800289475023",
    "name": "Medicube Kojic Tonik 250 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "8800289475344",
    "name": "Medicube Azelaic Asit Tonik 250 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "8800289477416",
    "name": "Medicube Kojic Serum 30 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "8800289479083",
    "name": "Medicube Azelaic Asit Serum 30 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "8800289479588",
    "name": "Medicube Kojic Kapsül Krem 53 g",
    "source": "local_watsons"
  },
  {
    "barcode": "8800294997022",
    "name": "Innisfree Gözenek Bakımı Yapan Kil Yüz Maskesi 100 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8800307371252",
    "name": "Anua PDRN - Somon DNA Hyaluronik Asit Nemlendirici Krem 60 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "8800307371276",
    "name": "Anua Zero Cast Nemlendirici Güneş Kremi 50 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "8800307373065",
    "name": "Anua PDRN - Somon DNA Hyaluronik Asit Temizleme Köpüğü 150 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "8800307373393",
    "name": "Anua PDRN - Somon DNA Hyaluronik Hydrating Kapsül Mist 100 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "8800307374680",
    "name": "Anua Heartleaf 77 Soothing Maske 25 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "8800307374697",
    "name": "Anua Peach 70 Niacin Serum Yüz Maskesi 25 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "8800307374710",
    "name": "Anua PDRN - Somon DNA Hyaluronik Kapsül 100 Serum Maske 23 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "88003120603701",
    "name": "Numbuzin No.9 3days Eye Care Kit, 1 Adet",
    "source": "local_rossmann"
  },
  {
    "barcode": "8800330330011",
    "name": "Dr. Rejuall Advanced Pdrn Rejuvenating Cream 20 ml",
    "source": "local_rossmann"
  },
  {
    "barcode": "8800330330110",
    "name": "Dr. Reju-All Advanced Lc Ceramide Bariyer Krem 50 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "8801619048504",
    "name": "Vaseline Güneş Koruyucu Stick SPF 50+ 15 gr",
    "source": "local_rossmann"
  },
  {
    "barcode": "8803348030133",
    "name": "Frudia Pomegranate Besleyici Ve Kırışıklık Karşıtı Krem 55 g",
    "source": "local_watsons"
  },
  {
    "barcode": "8803348030140",
    "name": "Frudia Citrus Aydınlatıcı Krem 55 g",
    "source": "local_watsons"
  },
  {
    "barcode": "8803348030157",
    "name": "Frudia Green Grape Gözenek Kontrol Krem 55 g",
    "source": "local_watsons"
  },
  {
    "barcode": "8803348030164",
    "name": "Frudia Blueberry Nemlendirici Krem 55 g",
    "source": "local_watsons"
  },
  {
    "barcode": "8803348030171",
    "name": "Frudia Pomegranate Besleyici Ve Kırışıklık Karşıtı Serum 50 g",
    "source": "local_watsons"
  },
  {
    "barcode": "8803348030188",
    "name": "Frudia Citrus Aydınlatıcı Serum 50 gr",
    "source": "local_watsons"
  },
  {
    "barcode": "8803348030195",
    "name": "Frudia Blueberry Nemlendirici Serum 50 g",
    "source": "local_watsons"
  },
  {
    "barcode": "8803348031062",
    "name": "Frudia Pomegranate Besleyici Ve Kırışıklık Karşıtı Tonik 195 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "8803348031079",
    "name": "Frudia Citrus Aydınlatıcı Tonik 195 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "8803348031086",
    "name": "Frudia Green Grape Gözenek Kontrol Tonik 195 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "8803348032069",
    "name": "Frudia Pomegranate Besleyici Mini Krem 10 g",
    "source": "local_watsons"
  },
  {
    "barcode": "8803348033240",
    "name": "Frudia Mango Honey Dudak Bakım Maskesi 10g",
    "source": "local_watsons"
  },
  {
    "barcode": "8803348033257",
    "name": "Frudia Coconut Honey Dudak Kremi 10g",
    "source": "local_watsons"
  },
  {
    "barcode": "8803348033264",
    "name": "Frudia Grape Honey Renkli Dudak Yağı 10g",
    "source": "local_watsons"
  },
  {
    "barcode": "8803348033509",
    "name": "Frudia Aydınlatıcı Micro Temizleyici 145 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "8803348033516",
    "name": "Frudia Pomegranate Besleyici Ve Kırışıklık Karşıtı Jel Temizleyici 145 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "8803348033523",
    "name": "Frudia Green Grape Köpük Gözenek Kontrol Temizleyici 145 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "8803348033561",
    "name": "Frudia Green Grape Gözenek Kontrol Serum 50 g",
    "source": "local_watsons"
  },
  {
    "barcode": "8803348033745",
    "name": "Frudia Blueberry Nemlendirici Tonik 195 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "8803348033752",
    "name": "Frudia Blueberry Yoğun Nemlendirici Krem 55 g",
    "source": "local_watsons"
  },
  {
    "barcode": "8803348033776",
    "name": "Frudia Blueberry Nemlendirici Jel Temizleyici 145 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "8803348035114",
    "name": "Frudia Green Grape Gözenek Kontrol Mini Krem 10 g",
    "source": "local_watsons"
  },
  {
    "barcode": "8803348035565",
    "name": "Frudia My Orchard El Kremi Hindistan Cevizi 30 g",
    "source": "local_watsons"
  },
  {
    "barcode": "8803348035572",
    "name": "Frudia My Orchard El Kremi Mango 30 g",
    "source": "local_watsons"
  },
  {
    "barcode": "8803348035596",
    "name": "Frudia My Orchard El Kremi Şeftali 30 g",
    "source": "local_watsons"
  },
  {
    "barcode": "8803348035718",
    "name": "Frudia Blueberry Dudak Balmı Nemlendirici 10 g",
    "source": "local_watsons"
  },
  {
    "barcode": "8803348036241",
    "name": "Frudia Blueberry Nemlendirici Mini Krem 10 g",
    "source": "local_watsons"
  },
  {
    "barcode": "8803348036272",
    "name": "Frudia My Orchard El Kremi Ayva 30g",
    "source": "local_watsons"
  },
  {
    "barcode": "8803348036289",
    "name": "Frudia My Orchard El Kremi Ananas 30 g",
    "source": "local_watsons"
  },
  {
    "barcode": "8803348036296",
    "name": "Frudia My Orchard El Kremi Shea Yağı 30g",
    "source": "local_watsons"
  },
  {
    "barcode": "8803348036302",
    "name": "Frudia My Orchard El Kremi Çarkıfelek 30 g",
    "source": "local_watsons"
  },
  {
    "barcode": "8803348036326",
    "name": "Frudia My Orchard El Kremi Ahududu 30g",
    "source": "local_watsons"
  },
  {
    "barcode": "8803348036333",
    "name": "Frudia My Orchard El Kremi Mangostan 30g",
    "source": "local_watsons"
  },
  {
    "barcode": "8803348036340",
    "name": "Frudia My Orchard El Kremi Kaktüs 30g",
    "source": "local_watsons"
  },
  {
    "barcode": "8803348039198",
    "name": "Frudia Air Watery 3 Katlı Nemlendirme Etkili Maske 25 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "8803348039211",
    "name": "Frudia Air Snowy Dengeleyici Maske 25 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "8803348039914",
    "name": "Frudia My Orchard Aloe Vera Real Soothing Vücut Losyonu 300 g",
    "source": "local_watsons"
  },
  {
    "barcode": "8803348039938",
    "name": "Frudia UV Shield Nemlendirici Yüz Güneş Kremi SPF50+ PA++++ 50g",
    "source": "local_watsons"
  },
  {
    "barcode": "8803348039945",
    "name": "Frudia Ton Eşitleyici Yüz Güneş Kremi SPF50+ PA+++ 50g",
    "source": "local_watsons"
  },
  {
    "barcode": "8803348040200",
    "name": "Frudia My Orchard Maske Ahududu 1 Adet",
    "source": "local_watsons"
  },
  {
    "barcode": "8803348040231",
    "name": "Frudia My Orchard Maske Şeftali 1 Adet",
    "source": "local_watsons"
  },
  {
    "barcode": "8803348040248",
    "name": "Frudia My Orchard Maske Mango 1 Adet",
    "source": "local_watsons"
  },
  {
    "barcode": "8803348040323",
    "name": "Frudia My Orchard Temizleme Köpüğü Mango",
    "source": "local_watsons"
  },
  {
    "barcode": "8803348040330",
    "name": "Frudia My Orchard Temizleme Köpüğü Açai Üzüm 120 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "8803348040347",
    "name": "Frudia My Orchard Temizleme Köpüğü Shea Yağı 120 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "8803348040361",
    "name": "Frudia My Orchard Temizleme Köpüğü Şeftali",
    "source": "local_watsons"
  },
  {
    "barcode": "8803348040378",
    "name": "Frudia My Orchard Temizleme Köpüğü Çarkıfelek Meyvesi",
    "source": "local_watsons"
  },
  {
    "barcode": "8803348040897",
    "name": "Frudia Green Grape Sebum Kontrolü Sağlayan Serinletici Yüz Güneş Kremi SPF50+ PA++++ 50g",
    "source": "local_watsons"
  },
  {
    "barcode": "8803348041924",
    "name": "Frudia Green Grape Pore Peeling Ped Gözenek Kontrol 70 Adet",
    "source": "local_watsons"
  },
  {
    "barcode": "8803348041931",
    "name": "Frudia Green Grape Pore Peeling Ped Gözenek Kontrol 1 Adet",
    "source": "local_watsons"
  },
  {
    "barcode": "8803348042020",
    "name": "Frudia My Orchard El Kremi Muz 30 g",
    "source": "local_watsons"
  },
  {
    "barcode": "8803348042525",
    "name": "Frudia Pomegranate Dudak Balmı 10 g",
    "source": "local_watsons"
  },
  {
    "barcode": "8803348045335",
    "name": "Frudia Avocado Relief Yüz Maskesi 1 Adet",
    "source": "local_watsons"
  },
  {
    "barcode": "8803348045342",
    "name": "Frudia Blueberry Nemlendirici Yüz Maskesi 1 Adet",
    "source": "local_watsons"
  },
  {
    "barcode": "8803348045359",
    "name": "Frudia Pomegranate Besleyici Yüz Maskesi 1 Adet",
    "source": "local_watsons"
  },
  {
    "barcode": "8803348045366",
    "name": "Frudia Citrus Aydınlatıcı Yüz Maskesi 1 Adet",
    "source": "local_watsons"
  },
  {
    "barcode": "8803348045373",
    "name": "Frudia Green Grape Gözenek Kontrol Yüz Maskesi 1 Adet",
    "source": "local_watsons"
  },
  {
    "barcode": "8803348047194",
    "name": "Frudia Pomegranate Besleyici ve Kırışıklık Karşıtı Göz Kremi 40 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "8803348048756",
    "name": "Frudia Velvet Fit Yüz Güneş Kremi Makyaj Bazı SPF50+ PA++++ 40g",
    "source": "local_watsons"
  },
  {
    "barcode": "8803348049692",
    "name": "Frudia What's Wrong Cicaderm Yüz Güneş Kremi SPF50 50g",
    "source": "local_watsons"
  },
  {
    "barcode": "8803348049746",
    "name": "Frudia Avocado Cica Dudak Balmı 10 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "8803348050315",
    "name": "Frudia Green Grape Gözenek Kontrol Soyulabilir Burun Maskesi 60 g",
    "source": "local_watsons"
  },
  {
    "barcode": "8803348050407",
    "name": "Frudia Re:Proust Dudak&Göz Makyaj Temizleyici 300 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "8803348050919",
    "name": "Frudia Blueberry Nemlendirici Hafif Yapılı Yüz Güneş Kremi SPF50 PA++++ 50g",
    "source": "local_watsons"
  },
  {
    "barcode": "8803348051091",
    "name": "Frudia What's Wrong Ac Clear Arındıcı Ped 2 Adet",
    "source": "local_watsons"
  },
  {
    "barcode": "8803348051183",
    "name": "Frudia Bare Skin Fondöten Etkili Renkli Yüz Güneş Kremi SPF50 PA++++ 40 g",
    "source": "local_watsons"
  },
  {
    "barcode": "8803348051893",
    "name": "Frudia Citrus Vitamin C Aydınlatıcı Toning Ped 2 Adet",
    "source": "local_watsons"
  },
  {
    "barcode": "8803348051909",
    "name": "Frudia Blueberry Honey Nemlendirici Dudak Balmı 10 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "8803463003685",
    "name": "VT Cosmetics Pro Cica Reedle Shot 100 Yüz Kremi 50 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8803463003692",
    "name": "VT Cosmetics Kolajen İçerikli Reedle Shot 100 Yüz Kremi 50 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8803463004286",
    "name": "VT Cosmetics PDRN 100 Yüz Serumu 30 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8803463004552",
    "name": "VT Cosmetics Reedle Shot Vita-Light Göz Kremi 15 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8803463004637",
    "name": "VT Cosmetics Reedle Shot Vita-Light Yüz Kremi 50 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8803463005733",
    "name": "VT Cosmetics Kolajen Reedle Shot 300 Yüz Kremi 50 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8803463005740",
    "name": "VT Cosmetics Kolajen Reedle Shot 700 Yüz Kremi 30 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8803463006020",
    "name": "VT Cosmetics Reedle Shot 50 2 Aşamalı Kağıt Maske",
    "source": "local_gratis"
  },
  {
    "barcode": "8803463006037",
    "name": "VT Cosmetics Reedle Shot 100 2 Aşamalı Kağıt Maske",
    "source": "local_gratis"
  },
  {
    "barcode": "8803463006044",
    "name": "VT Cosmetics Reedle Shot 300 2 Aşamalı Kağıt Maske",
    "source": "local_gratis"
  },
  {
    "barcode": "8803463006396",
    "name": "VT Cosmetics Reti-A Reedle Shot 100 Yüz Kremi 50 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8803463006501",
    "name": "VT Cosmetics Reedle Shot Lip Plumper Dudak Parlatıcı Bakım Kremi 4,3 gr",
    "source": "local_gratis"
  },
  {
    "barcode": "8803463006518",
    "name": "VT Cosmetics Reedle Shot Başlangıç Aşaması Lip Plumper / Dudak Parlatıcı Bakım Kremi 4,3 gr",
    "source": "local_gratis"
  },
  {
    "barcode": "8803463006655",
    "name": "VT Cosmetics PDRN 100 Yüz Kremi 50 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8803463006853",
    "name": "VT Cosmetics PDRN Reedle Shot 100 Yüz Kremi 50 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8803463007249",
    "name": "VT Cosmetics Reti-A Reedle Shot 100 Yüz Kremi 2 ml x 10 Adet",
    "source": "local_gratis"
  },
  {
    "barcode": "8803463007294",
    "name": "VT Cosmetics Reedle Shot 100 Yüz Kremi 2 ml x 10 Adet",
    "source": "local_gratis"
  },
  {
    "barcode": "8803463007300",
    "name": "VT Cosmetics Reedle Shot 300 Yüz Kremi 2 ml x 10 Adet",
    "source": "local_gratis"
  },
  {
    "barcode": "8803463007317",
    "name": "VT Cosmetics Kolajen Reedle Shot 100 Yüz Kremi 2 ml x 10 Adet",
    "source": "local_gratis"
  },
  {
    "barcode": "8803463007324",
    "name": "VT Cosmetics 100 Pro Cica Reedle Shot Yüz Kremi 2 ml x 10 Adet",
    "source": "local_gratis"
  },
  {
    "barcode": "8803463007454",
    "name": "VT Cosmetics TX-Toning Esans 1000 Shot 30 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8803463007478",
    "name": "VT Cosmetics TX-Toning Esans 2000 Shot 30 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8803463007546",
    "name": "VT Cosmetics Hydrop Reedle Shot 100hL Yüz Kremi 50 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8803463007553",
    "name": "VT Cosmetics Hydrop Reedle Shot 300hL Yüz Kremi 50 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8803463007560",
    "name": "VT Cosmetics Hydrop Reedle Shot 700hL Yüz Kremi 30 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8803463007768",
    "name": "VT Cosmetics TX-Toning Tonik 200 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8803463007782",
    "name": "VT Cosmetics TX-Toning Yüz Kremi 50 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8803463009175",
    "name": "VT Cosmetics Red Booster Reedle Shot 100 Yüz Kremi 50 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8803463009182",
    "name": "VT Cosmetics Salyangoz İçerikli Reedle Shot 100B Yüz Kremi 50 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8803463009687",
    "name": "VT Cosmetics PDRN Işıltı Verici Yüz Serumu 100 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8803463010867",
    "name": "VT Cosmetics Black Truffle Reedle Shot 100 Yüz Kremi 50 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8803463020507",
    "name": "VT Cosmetics Vita-Light Reedle Shot 100 Yüz Kremi 50 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8803463020736",
    "name": "VT Cosmetics Vita-Light Reedle Shot 100 Yüz Kremi 2 ml x 10 Adet",
    "source": "local_gratis"
  },
  {
    "barcode": "8806050298525",
    "name": "Celimax Yüz Temizleme Yağı Nature Fresh Siyah Nokta Jojoba 150 ml",
    "source": "local_rossmann"
  },
  {
    "barcode": "8806109101158",
    "name": "Centellian24 360 Shot PDRN Active Serum 50 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "8806109101257",
    "name": "Centellian24 Madeca Krem Time Reverse 50 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "8806109101264",
    "name": "Centellian24 Madeca Krem Time Reverse 15 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "8806109106733",
    "name": "Centellian24 Madeca Krem PDRN Active Renew 50 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "8806109107358",
    "name": "Centellian24 360 Shot PDRN Lifting Göz Kremi 30 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "8806109108133",
    "name": "Centellian24 Madeca Mela Capture Ampul Serum 30 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "8806109186773",
    "name": "Centellian24 Lifting Peptide Göz Kremi 15 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "8806109186780",
    "name": "Centellian24 Lifting Peptide Krem 65 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "8806135244911",
    "name": "Isntree TW Besleyici Göz Kremi 30 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8806135245765",
    "name": "Isntree TW Bifida İçerikli Cilt Bariyeri Destekleyici Yüz Serumu 50 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8808033024183",
    "name": "Lador Keratinli Çift Faz Isı Kory Saç Spreyi 130 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "8809030734174",
    "name": "Abib Quick Sunstick Protection Bar 22 gr",
    "source": "local_rossmann"
  },
  {
    "barcode": "8809032673761",
    "name": "Skinfood Rice Yüz Bakım Maskesi 120 gr",
    "source": "local_rossmann"
  },
  {
    "barcode": "8809032673778",
    "name": "Skinfood Egg White Pore Çok Kullanımlık Yüz Bakım Maskesi 120 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8809032676953",
    "name": "Skinfood Salmon Brightening Spot Eye Cream 30 ml",
    "source": "local_rossmann"
  },
  {
    "barcode": "8809115027917",
    "name": "Axis-Y Artichoke Cilt Bariyeri Onarıcı Ampul 30 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "8809115027924",
    "name": "Axis-Y Salisilik Asit Arındırıcı Tonik 200 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "8809187041552",
    "name": "Cosnori Niasinamid İçerikli Ton Eşitleyici Yüz Kremi 50 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8809187049350",
    "name": "Isntree C Vitamini İçerikli Canlandırıcı Yüz Serumu 50 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8809187049428",
    "name": "Isntree C Vitamini İçerikli Nemlendirici Yüz Kremi 50 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8809220800017",
    "name": "Mjcare 8'li Yüz Maskesi ve Burun Bandı Seti",
    "source": "local_watsons"
  },
  {
    "barcode": "8809220800139",
    "name": "Mjcare Kolajen Özlü Yüz Maskesi 22 g",
    "source": "local_watsons"
  },
  {
    "barcode": "8809220800153",
    "name": "Mjcare Arbutin Özlü Yüz Maskesi 22 g",
    "source": "local_watsons"
  },
  {
    "barcode": "8809220800214",
    "name": "Mjcare İnci Özlü Yüz Maskesi 22 g",
    "source": "local_watsons"
  },
  {
    "barcode": "8809220804779",
    "name": "Mjcare Aydınlatıcı ve Nemlendirici Göz Maskesi 9 g",
    "source": "local_watsons"
  },
  {
    "barcode": "8809220807060",
    "name": "Mjcare Siyah Nokta Gözenek Temizleme Burun Bandı 10 adet",
    "source": "local_watsons"
  },
  {
    "barcode": "8809220807961",
    "name": "Mjcare Soyulan El Peeling Maske 18 g",
    "source": "local_watsons"
  },
  {
    "barcode": "8809220808470",
    "name": "Mjcare Hydrojel Şeffaflaşan Eriyen Maske 39 g",
    "source": "local_watsons"
  },
  {
    "barcode": "8809220808692",
    "name": "Mjcare Pirinç Özlü Yüz Maskesi 22 g",
    "source": "local_watsons"
  },
  {
    "barcode": "8809222840577",
    "name": "D'Alba Waterfull Essence Aydınlatıcı & Yaşlanma KarşıtıYüz Güneş Kremi SPF50+ PA++++ 35 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "8809222847101",
    "name": "D'Alba Waterfull Essence Aydınlatıcı & Yaşlanma Karşıtı Yüz Güneş Kremi SPF50+ PA++++ 50 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "8809240769362",
    "name": "Deoproce Korea Snail Recovery Aydınlatıcı Ampul 30 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "8809273161911",
    "name": "Pure Korean Peeling Ayak Çorabı",
    "source": "local_gratis"
  },
  {
    "barcode": "8809273162529",
    "name": "Pure Korean Heel Peeling Mask",
    "source": "local_gratis"
  },
  {
    "barcode": "8809273162536",
    "name": "Pure Korean Shea Butter Foot Moisturizing Mask",
    "source": "local_gratis"
  },
  {
    "barcode": "8809326333661",
    "name": "Some By Mi AHA BHA PHA Tonik 150 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8809326334224",
    "name": "Some By Mi AHA BHA PHA Krem 60 gr",
    "source": "local_gratis"
  },
  {
    "barcode": "8809331317182",
    "name": "Dermafactory Kırışıklık Karştı Peptit Bakım Serum 30 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "8809369850248",
    "name": "Dermal Aydınlatıcı Nemlendirici İnci Özlü Kolajen Gece Maske 23 gr",
    "source": "local_gratis"
  },
  {
    "barcode": "8809369850262",
    "name": "Dermal Kırmızı Ginseng Özlü Kolajen Maske 23 gr",
    "source": "local_gratis"
  },
  {
    "barcode": "8809369850279",
    "name": "Dermal Beyazlatıcı Nemlendirici ve Arındırıcı Arbutin Kolajen Maske 23 gr",
    "source": "local_gratis"
  },
  {
    "barcode": "8809369850316",
    "name": "Dermal Kolajen Kağıt Maske Q10 23 gr",
    "source": "local_rossmann"
  },
  {
    "barcode": "8809369850439",
    "name": "Dermal Kolajen Kağıt Maske Salatalık Özlü 23 gr",
    "source": "local_rossmann"
  },
  {
    "barcode": "8809369850538",
    "name": "Dermal Salyangoz Özlü Kolajen Maskesi 23 gr",
    "source": "local_gratis"
  },
  {
    "barcode": "8809369850545",
    "name": "Dermal Kolajen Kağıt Maske Platinum 23 gr",
    "source": "local_rossmann"
  },
  {
    "barcode": "8809369850552",
    "name": "Dermal Sıkılaştırıcı Yaşlanma Karşıtı Syn-ake Kolajen Maske 23 gr",
    "source": "local_gratis"
  },
  {
    "barcode": "8809410030230",
    "name": "Elensilia Kırışıklık Karşıtı Sıkılaştırıcı %80 Kolajen Krem 50 g",
    "source": "local_watsons"
  },
  {
    "barcode": "8809410032395",
    "name": "Deoproce Kore Snail Sabun 100 g",
    "source": "local_watsons"
  },
  {
    "barcode": "8809416470009",
    "name": "Cosrx Snail96 Salyangoz Özlü Besleyici Tonik 100 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "8809416470016",
    "name": "Cosrx Advanced Snail 92 All In One Cream Jar 100 g",
    "source": "local_watsons"
  },
  {
    "barcode": "8809416470030",
    "name": "Cosrx Aha-Bha İçeren Arındırıcı Tonik 150 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "8809416470047",
    "name": "Cosrx Aha %7 Whitehead Arındırıcı Etkili Tonik 100 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "8809416470054",
    "name": "Cosrx Bha Blackhead Siyah Nokta Peeling 100 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "8809416470511",
    "name": "Cosrx Low Ph Morning Arındırıcı Yüz Temizleme Jeli 150 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "8809416470559",
    "name": "Cosrx Oil Free Ultra Yüz Nemlendirici Losyon 100 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "8809416471113",
    "name": "Cosrx Salisilik Asit Nazik Yüz Temizleme Köpüğü 150 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "8809440684403",
    "name": "Pure Korean Akne Sivilce Şeffaf Bakım Bandı",
    "source": "local_gratis"
  },
  {
    "barcode": "8809440684410",
    "name": "Pure Korean Burun Maskesi",
    "source": "local_gratis"
  },
  {
    "barcode": "8809440684427",
    "name": "Pure Korean Hyaluronic Acid Göz Altı Maskesi",
    "source": "local_gratis"
  },
  {
    "barcode": "8809440684434",
    "name": "Pure Korean Kolajen Göz Altı Maskesi",
    "source": "local_gratis"
  },
  {
    "barcode": "8809440685523",
    "name": "Pure Korean Hydrogel Lip Mask",
    "source": "local_gratis"
  },
  {
    "barcode": "8809440685899",
    "name": "Pure Korean Collagen Patch Alın",
    "source": "local_watsons"
  },
  {
    "barcode": "8809440685905",
    "name": "Pure Korean Collagen Patch Yanak",
    "source": "local_watsons"
  },
  {
    "barcode": "8809440686490",
    "name": "Pure Korean Melting Hydrogel Maske",
    "source": "local_gratis"
  },
  {
    "barcode": "8809440686971",
    "name": "Pure Korean Glutathione Melting Hydrogel Yüz Maskesi",
    "source": "local_gratis"
  },
  {
    "barcode": "8809440686995",
    "name": "Pure Korean V-Line Lifting Glutathione X Collagen Yüz Çene Maskesi 15 gr",
    "source": "local_gratis"
  },
  {
    "barcode": "8809443285850",
    "name": "Pure Korean Egg White Pore Çok Kullanımlık Yüz Maskesi 100 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8809447251400",
    "name": "Dr Althea Amino ACID Gentle Bubble Cleanser 140 ml",
    "source": "local_rossmann"
  },
  {
    "barcode": "8809447251745",
    "name": "Dr Althea Rapid Firm Sculpting Cream 45 ml",
    "source": "local_rossmann"
  },
  {
    "barcode": "8809447255071",
    "name": "Dr.Althea Pure Grinding Temizleme Balsamı 50 ml",
    "source": "local_rossmann"
  },
  {
    "barcode": "8809447255583",
    "name": "Dr Althea Gentle Pore Cleasing Oil 150 ml",
    "source": "local_rossmann"
  },
  {
    "barcode": "8809447255743",
    "name": "Dr Althea Jelly Seal Dewy Mask 28x4 gr",
    "source": "local_rossmann"
  },
  {
    "barcode": "8809447255804",
    "name": "Dr Althea Vita Glow Mask 28x4 gr",
    "source": "local_rossmann"
  },
  {
    "barcode": "8809447255828",
    "name": "Dr Althea Aqua Glowing Sunscreen 45 ml",
    "source": "local_rossmann"
  },
  {
    "barcode": "8809447255835",
    "name": "Dr Althea Green Tea Fresh Sunscreen 45 ml",
    "source": "local_rossmann"
  },
  {
    "barcode": "8809447256085",
    "name": "Dr. Althea Aqua Marine Watery Cream 50 ml",
    "source": "local_rossmann"
  },
  {
    "barcode": "8809447256115",
    "name": "Dr. Althea 345 Relief Cream Mist, 100 ml",
    "source": "local_rossmann"
  },
  {
    "barcode": "8809447256122",
    "name": "Dr. Althea 345 Relief Cream Mist 60 ml",
    "source": "local_rossmann"
  },
  {
    "barcode": "8809447256184",
    "name": "Dr. Althea Aqua Marine Jelly Mist 100 ml",
    "source": "local_rossmann"
  },
  {
    "barcode": "8809447256221",
    "name": "Dr. Althea Krem 345 50 ml",
    "source": "local_rossmann"
  },
  {
    "barcode": "8809447256238",
    "name": "Dr Althea Abc Glow Whipped Serum 100 ml",
    "source": "local_rossmann"
  },
  {
    "barcode": "8809447256283",
    "name": "Dr. Althea 345 Relief Krem Maske 28 g",
    "source": "local_watsons"
  },
  {
    "barcode": "8809447256290",
    "name": "Dr Althea 345 Relief Cream Mask 28x4 gr",
    "source": "local_rossmann"
  },
  {
    "barcode": "8809447256306",
    "name": "Dr Althea Stretchfit Calming Pad 50'li",
    "source": "local_rossmann"
  },
  {
    "barcode": "8809447256412",
    "name": "Dr. Althea Pdrn Reju 5000 Cream 20 gr",
    "source": "local_rossmann"
  },
  {
    "barcode": "8809447256658",
    "name": "Dr. Althea Retinol Flat Iron Eye Roller 25 ml",
    "source": "local_rossmann"
  },
  {
    "barcode": "8809447256795",
    "name": "Dr. Althea Krem 147 50 ml",
    "source": "local_rossmann"
  },
  {
    "barcode": "8809447256796",
    "name": "Dr Althea 147 Bariyer Krem 50 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "8809447257020",
    "name": "Dr Althea Melaclear Cream 20 gr",
    "source": "local_rossmann"
  },
  {
    "barcode": "8809447257021",
    "name": "DR.ALTHEA MELACLEAR LEKE KARŞITI KREM 20GR",
    "source": "local_watsons"
  },
  {
    "barcode": "8809447257051",
    "name": "Dr Althea 345 Relief Serum 30 ml",
    "source": "local_rossmann"
  },
  {
    "barcode": "8809447257068",
    "name": "Dr Althea Pure Retinol 0.15% Cream 20 gr",
    "source": "local_rossmann"
  },
  {
    "barcode": "8809447257440",
    "name": "Dr. Althea Rapid Akne Mist 60 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "8809463992615",
    "name": "Celimax Jiwoogae Heartleaf BHA Peeling Tonik Ped, 60'lı",
    "source": "local_rossmann"
  },
  {
    "barcode": "8809463992707",
    "name": "Celimax One Step Body Brightening Pad 60 Pads",
    "source": "local_rossmann"
  },
  {
    "barcode": "8809463992738",
    "name": "Celimax Ji Woo Gae Heartleaf Bha Body Mist 150 ml",
    "source": "local_rossmann"
  },
  {
    "barcode": "8809474498151",
    "name": "Isntree Hyalüronik Asit İçerikli Yüz Nemlendirici Sprey 100 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8809486361276",
    "name": "Banobagi Milk Thistle Yenileyici Toner 200 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "8809486367163",
    "name": "Banobagi Dx Maske Anti Sebum&Pore 1 Adet",
    "source": "local_watsons"
  },
  {
    "barcode": "8809500811015",
    "name": "Lador Hidrolize Kolajenli Kuru &Hassas Şampuan 150 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "8809500817581",
    "name": "Lador Hassas&Yıpranmış Saç Nemmlendrci Şampuan 100 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "8809500817598",
    "name": "Lador Hassas&Yıpranmış Saç Nemlendrci Saç Kremi 100 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "8809517411345",
    "name": "Medicube Red Temizleme Köpüğü 120 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "8809517411741",
    "name": "Medicube Kolajen Lifting Maske 1Ad",
    "source": "local_watsons"
  },
  {
    "barcode": "8809517460909",
    "name": "Nacific Fresh Herb Origin Kırışıklık ve Gözenek Serumu 50 ml",
    "source": "local_rossmann"
  },
  {
    "barcode": "8809517460916",
    "name": "Nacific Fresh Herb Origin Nemlendirici Krem 50 ml",
    "source": "local_rossmann"
  },
  {
    "barcode": "8809517460923",
    "name": "Nacific Fresh Herb Origin Nemlendirici Tonik 150 ml",
    "source": "local_rossmann"
  },
  {
    "barcode": "8809517461050",
    "name": "Nacific Fresh Herb Origin Yüksek Korumalı Güneş Kremi 50 ml",
    "source": "local_rossmann"
  },
  {
    "barcode": "8809517461364",
    "name": "Nacific Fresh Herb Origin Şeffaf Sivilce Bandı 29 Adet",
    "source": "local_rossmann"
  },
  {
    "barcode": "8809517461913",
    "name": "Nacific Blackhead All Kill Pack 40 ml",
    "source": "local_rossmann"
  },
  {
    "barcode": "8809517461920",
    "name": "Nacific Pink AHA/BHA Serum 50 ml",
    "source": "local_rossmann"
  },
  {
    "barcode": "8809517461937",
    "name": "Nacific Pink AHA/BHA Toner 150 ml",
    "source": "local_rossmann"
  },
  {
    "barcode": "8809517461944",
    "name": "Nacific Pink AHA/BHA Cream 50 ml",
    "source": "local_rossmann"
  },
  {
    "barcode": "8809517462347",
    "name": "Nacific Blackhead All Kill Bubble Cleansing Pack 140 ml",
    "source": "local_rossmann"
  },
  {
    "barcode": "8809517463498",
    "name": "Nacific Salicylic Acid Toner Origin Red 150 ml",
    "source": "local_rossmann"
  },
  {
    "barcode": "8809517463504",
    "name": "Nacific Salicylic Acid Serum Origin Red 50 ml",
    "source": "local_rossmann"
  },
  {
    "barcode": "8809517463511",
    "name": "Nacific Salicylic Acid Spot Cream Origin Red 20 ml",
    "source": "local_rossmann"
  },
  {
    "barcode": "8809517465539",
    "name": "Nacific Toner Pad Fresh Herb Origin 180 ml",
    "source": "local_rossmann"
  },
  {
    "barcode": "8809517465881",
    "name": "Nacific Şeffaflaşan Kolajen Jel Maske",
    "source": "local_rossmann"
  },
  {
    "barcode": "8809517466055",
    "name": "Nacific Yüz Maskesi Collagen Peel-Off Rice Pepta 70 g",
    "source": "local_rossmann"
  },
  {
    "barcode": "8809517466796",
    "name": "Nacific Cica PDRN First Toner 150 ml",
    "source": "local_rossmann"
  },
  {
    "barcode": "8809517466819",
    "name": "Nacific Cica PDRN Barrier Cream 50 g",
    "source": "local_rossmann"
  },
  {
    "barcode": "8809525242764",
    "name": "Some By Mi AHA BHA PHA Serum 50 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8809532220908",
    "name": "Haruharu Black Rice Hyaluron Serum 50 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "8809532220946",
    "name": "Haruharu Black Bamboo Mist 80 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "8809532221349",
    "name": "Haruharu Black Rice Nemlendirici Temizleme Yaği 150 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "8809532221356",
    "name": "Haruharu Black Rice Nemlendirici Temizleme Jeli 100 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "8809532221462",
    "name": "Haruharu Black Rice Hyaluronic Tonik 150 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "8809532221523",
    "name": "Haruharu Black Rice Bakuchiol Göz Kremi 20 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "8809532221646",
    "name": "Haruharu Cica %3 Pha Hassas Peeling Serum 120 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "8809532221691",
    "name": "HARUHARU BLACK RICE MINERAL GÜNEŞ KREMİ SPF50 50ML",
    "source": "local_watsons"
  },
  {
    "barcode": "8809532221707",
    "name": "Haruharu Black Rice Airyfit Yüz Güneş Kremi SPF50 50 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "8809532221738",
    "name": "Haruharu Black Rice 10 Hyaluronic Krem 50 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "8809532221745",
    "name": "Haruharu Black Rice 10 Hyaluronic Krem 90 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "8809532221783",
    "name": "Haruharu Black Rice Aha Temizleyici Jel 100 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "8809532221813",
    "name": "Haruharu Centella %4 Txa Leke Önleyici Serum 30 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "8809532221929",
    "name": "Haruharu Black Bamboo Yüz Stick Güneş Koruyucu SPF50+ 20 g",
    "source": "local_watsons"
  },
  {
    "barcode": "8809532221936",
    "name": "Haruharu Centella Sunflower Temizleyici Balm 100 g",
    "source": "local_watsons"
  },
  {
    "barcode": "8809532221998",
    "name": "Haruharu Centella %5 Niacinamide Aydınlatıcı Krem 90 g",
    "source": "local_watsons"
  },
  {
    "barcode": "8809532222155",
    "name": "Haruharu Centella %5 Niacinamide Aydınlatıcı Krem 40 g",
    "source": "local_watsons"
  },
  {
    "barcode": "8809540516765",
    "name": "JKosmec Hydrating Green Tea Kore Yüz Maskesi 25 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8809540516772",
    "name": "JKosmec Hydrating Aloe Vera Kore Yüz Maskesi 25 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8809540516796",
    "name": "JKosmec Hydrating Snail Kore Yüz Maskesi 25 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8809540516802",
    "name": "JKosmec Hydrating Vitamin Kore Yüz Maskesi 25 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8809540516826",
    "name": "JKosmec Hydrating Nar Kore Yüz Maskesi 25 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8809540517540",
    "name": "Isntree Hyalüronik Asit İçerikli Tonik 400 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8809540519018",
    "name": "JKosmec Skin Solution Hyaluron Kore Yüz Maskesi 25 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8809540519025",
    "name": "JKosmec Kağıt Maske Snail 1 adet",
    "source": "local_rossmann"
  },
  {
    "barcode": "8809540519032",
    "name": "JKosmec Skin Solution Collagen Kore Yüz Maskesi 25 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8809541190254",
    "name": "Isntree Yeşil Çay İçerikli Nemlendirici Emülsiyon 120 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8809541190421",
    "name": "Isntree Yeşil Çay Özlü Aydınlatıcı Tonik 200 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8809541379468",
    "name": "Celimax The Real Noni Acne Bubble Cleanser, 155 ml",
    "source": "local_rossmann"
  },
  {
    "barcode": "8809548093054",
    "name": "SNP Collagen Bounce Up Hyperactive Jel Maske 25 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "8809550641648",
    "name": "SNP Prep Vitaronic Ampul Maske 25 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "8809550645899",
    "name": "SNP Prep Salironic Tonik 220 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "8809550645905",
    "name": "SNP Prep Salironic Serum 110 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "8809550645936",
    "name": "SNP Prep Salironic Temizleme Köpüğü 180 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "8809550646759",
    "name": "SNP Prep Peptaronic Nemlendirici Göz Kremi 50 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "8809550647565",
    "name": "SNP Gold Collagen Ampul Serum 50 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "8809550647749",
    "name": "SNP Prep Peptaronic Nemlendirici Tonik 320 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "8809550647879",
    "name": "SNP Gold Collagen Tonik 200 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "8809550647887",
    "name": "SNP Prep Peptaronic Nemlendirici Serum 220 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "8809550647894",
    "name": "SNP Prep Peptaronic Nemlendirici Krem 55 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "8809550647909",
    "name": "SNP Prep Vitaronic Aydınlatıcı Maske 25 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "8809550648845",
    "name": "SNP Prep Cicaronic Yatıştırıcı Maske 20 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "8809550649934",
    "name": "SNP Skin Return Soothing Essence Maske",
    "source": "local_watsons"
  },
  {
    "barcode": "8809550649958",
    "name": "SNP Skin Return Water Essence Maske",
    "source": "local_watsons"
  },
  {
    "barcode": "8809550649972",
    "name": "SNP Skin Return Lifting Essence Maske",
    "source": "local_watsons"
  },
  {
    "barcode": "8809559626196",
    "name": "VT Cosmetics Reedle Shot 50 Yüz Kremi 50 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8809560220062",
    "name": "Banila Co Clean It Zero Yüz Yıkama Köpüğü 150 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "8809562190738",
    "name": "Arencia Yüz Temizleyici Fresh Green Rice Mochi 120 g",
    "source": "local_rossmann"
  },
  {
    "barcode": "8809562190745",
    "name": "Arencia Yüz Temizleyici Fresh Rosehip Rice Mochi 120 g",
    "source": "local_rossmann"
  },
  {
    "barcode": "8809562190820",
    "name": "Arencia Holy Hyssop Yatıştırıcı ve Aydınlatıcı Bakım Serumu 30 50 g",
    "source": "local_watsons"
  },
  {
    "barcode": "8809562191971",
    "name": "Arencia Temizleyici Green Tea & LHA Deep Pore Rice Cake 150 ml",
    "source": "local_rossmann"
  },
  {
    "barcode": "8809562192763",
    "name": "Arencia Retinal Booster Shot 30 ml",
    "source": "local_rossmann"
  },
  {
    "barcode": "8809562192770",
    "name": "Arencia Vitamin C Booster Shot 30 ml",
    "source": "local_rossmann"
  },
  {
    "barcode": "8809562193173",
    "name": "Arencia PDRN Booster Shot 30 ml",
    "source": "local_rossmann"
  },
  {
    "barcode": "8809562193302",
    "name": "Arencia Glikolik Asit Gözenek Arındırıcı Bakım Kremi 30 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "8809562193326",
    "name": "Arencia TXA İçeren Leke Karşıtı ve Ton Eşitleyici Bakım Serumu 30 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "8809562193487",
    "name": "Arencia NAD+ İçeren Onarıcı Bakım Kremi 30 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "8809562558514",
    "name": "Abib Glutathiosome Dark Spot Serum Vita Drop 50 ml",
    "source": "local_rossmann"
  },
  {
    "barcode": "8809562558842",
    "name": "Abib Mild Acidic pH Sheet Mask Glutathiosome Fit 30 ml",
    "source": "local_rossmann"
  },
  {
    "barcode": "8809562559290",
    "name": "Abib Collagen Gel Mask Jericho Rose Jelly 140 gr",
    "source": "local_rossmann"
  },
  {
    "barcode": "8809562559313",
    "name": "Abib Collagen Gel Mask Heartleaf Jelly 140 gr",
    "source": "local_rossmann"
  },
  {
    "barcode": "8809562559924",
    "name": "Abib Pdrn Collagen Lip Mask Glazed Jell 11 gr",
    "source": "local_rossmann"
  },
  {
    "barcode": "8809562559993",
    "name": "Abib Jericho Rose Mist Serum Glow Spray 100 ml",
    "source": "local_rossmann"
  },
  {
    "barcode": "8809563067770",
    "name": "D'Alba Aromatic Sprey Serum 60 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "8809563068753",
    "name": "D'Alba White Truffle Spray Serum 100 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "8809567920446",
    "name": "Deoproce Kore Snail Recovery Göz Kremi 40 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "8809576260441",
    "name": "Skin1004 Madagascar Centella Krem 75 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8809576260496",
    "name": "Skin1004 Madagascar Centella Serum İçerikli Kağıt Maske",
    "source": "local_gratis"
  },
  {
    "barcode": "8809576260601",
    "name": "Skin1004 Madagascar Centella Serum 55 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8809576260618",
    "name": "Skin1004 Madagascar Centella Yüz Serumu 30 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8809576260663",
    "name": "Skin1004 Madagascar Centella Yüz Serumu 100 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8809576260717",
    "name": "Skin1004 Madagascar Centella Hyalu-Cica Mavi Serum 50 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8809576260724",
    "name": "Skin1004 Madagascar Centella Hyalu-Cica Uyku Maskesi 100 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8809576261110",
    "name": "Skin1004 Madagascar Centella Light Temizleyici Yağ 200 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8809576261127",
    "name": "Skin1004 Madagascar Centella Temizleme Köpüğü 125 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8809576261134",
    "name": "Skin1004 Madagascar Centella Nemlendirici Krem 75 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8809576261141",
    "name": "Skin1004 Madagascar Centella Ton Eşitleyici Tonik 210 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8809576261189",
    "name": "Skin1004 Madagascar Centella Ton Eşitleyici Temizleme Köpüğü 125 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8809576261387",
    "name": "Skin1004 Madagascar Centella Tonik Ped 70 Adet",
    "source": "local_gratis"
  },
  {
    "barcode": "8809576261417",
    "name": "Skin1004 Madagascar Centella Ton Eşitleyici Kapsül Serum 30 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8809576261455",
    "name": "Skin1004 Madagascar Centella Gözenek Bakımı Yapan Tonik 210 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8809576261462",
    "name": "Skin1004 Madagascar Centella Gözenek Bakımı Yapan Yüz Serumu 100 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8809576261493",
    "name": "Skin1004 Madagascar Centella Hyalu-Cica Nemlendirici Yüz Kremi 75 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8809576261646",
    "name": "Skin1004 Gözenek Bakımı Yapan Jel Yapılı Yüz Kremi 75 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8809576261653",
    "name": "Skin1004 Gözenek Bakımı Yapan Yüz Temizleme Köpüğü 125 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8809576261738",
    "name": "Skin1004 Madagascar Centella Probio-Cica Tonik 210 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8809576261752",
    "name": "Skin1004 Madagascar Centella Probio-Cica Yüz Serumu 50 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8809576261769",
    "name": "Skin1004 Madagascar Centella Probio-Cica Yüz Kremi 50 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8809576261875",
    "name": "Skin1004 Gözenek Bakımı Yapan Serum 30 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8809581076341",
    "name": "Isntree Hyalüronik Asit İçerikli Gece Maskesi 100 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8809583810349",
    "name": "Cosnori Pembe Renkli Ton Eşitleyici Yüz Kremi 50 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8809583810356",
    "name": "Cosnori Yeşil Renkli Ton Eşitleyici Yüz Kremi 50 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8809583810790",
    "name": "Cosnori Micro Active Dudak ve Göz Makyaj Temizleme Suyu 100 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8809583811018",
    "name": "Cosnori Long Active Kirpik Serumu 9 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8809583811209",
    "name": "Cosnori Avokado Göz Kremi 30 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8809583811865",
    "name": "Cosnori Micro Active Yüz Temizleme Köpüğü 150 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8809583813753",
    "name": "Cosnori PDRN-Shot 675 Serum 50 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8809583813876",
    "name": "Cosnori PDRN Günlük Yenileyici Kağıt Maske 30 Adet",
    "source": "local_gratis"
  },
  {
    "barcode": "8809583814545",
    "name": "Cosnori PDRN Yenileyici Yüz Kremi 70 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8809583815146",
    "name": "Cosnori PDRN Yenileyici Yüz Serumu 50 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8809587521807",
    "name": "Mizon Snail Repair Intensive Gold Jel Göz Altı Ped 60 Adet",
    "source": "local_watsons"
  },
  {
    "barcode": "8809598451071",
    "name": "Cosrx Snail Peptit Salyangoz Özlü Göz Kremi 25 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "8809598452351",
    "name": "Cosrx Snail Salyangoz Özlü Yüz Temizleme Jeli 150 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "8809598454324",
    "name": "Cosrx Propolis Özlü Besleyici Krem 65 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "8809598454355",
    "name": "Cosrx Aloe Vera Özlü Yatıştırıcı Yüz Güneş Kremi SPF50+ PA+++ 50 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "8809598455658",
    "name": "Cosrx The 6 Peptide Cilt Güçlendirici Serum 150 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "8809598455726",
    "name": "Cosrx Master Patch Original Fit Akne Bandı 24 Adet",
    "source": "local_watsons"
  },
  {
    "barcode": "8809606773163",
    "name": "Meditherapy Shumage Gold Seal Sıkılaştırıcı ve Toparlayıcı Bakım Kremi, 50 ml",
    "source": "local_rossmann"
  },
  {
    "barcode": "8809606776850",
    "name": "Meditherapy Arbutin Aydınlatıcı ve Ton Eşitleyici Bakım Serumu, 150 ml",
    "source": "local_rossmann"
  },
  {
    "barcode": "8809606776867",
    "name": "Meditherapy Tranexamic Acid Ton Eşitleyici ve Aydınlatıcı Bakım Kremi, 100 ml",
    "source": "local_rossmann"
  },
  {
    "barcode": "8809606777277",
    "name": "Meditherapy Shumage Gold Seal Sıkılaştırıcı Bakım Kremi ve EMS Cihazı, 50 ml",
    "source": "local_rossmann"
  },
  {
    "barcode": "8809606777284",
    "name": "Meditherapy PDRN Skin Booster Nemlendirici Cilt Serumu, 100 ml",
    "source": "local_rossmann"
  },
  {
    "barcode": "8809606850475",
    "name": "Celimax Dual Barrier Toner - Onarıcı Peptit Tonik 150 ml",
    "source": "local_rossmann"
  },
  {
    "barcode": "8809606851663",
    "name": "Beauty Of Joseon Radiance Cleasing Balm 100 ml",
    "source": "local_rossmann"
  },
  {
    "barcode": "8809624723119",
    "name": "Round Lab Birch Juice Maske 1 Adet",
    "source": "local_watsons"
  },
  {
    "barcode": "8809624726370",
    "name": "Round Lab Soybean Tonik 300 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "8809624726417",
    "name": "Round Lab Soybean Krem 80 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "8809626566431",
    "name": "Isntree Hyalüronik Asitli Su Bazlı Serum 50 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8809634610027",
    "name": "Axis-Y Quinoa Ph Dengeliyici Yüz Yıkama Jeli 180 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "8809634610034",
    "name": "Axis-Y Leke Önleyici ve Aydınlatıcı Serum 50 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "8809634610058",
    "name": "Axis-Y Mini Glow Cilt Bakım Seti",
    "source": "local_watsons"
  },
  {
    "barcode": "8809634610102",
    "name": "Axis-Y Mugwort Gözenek Arındıran Kil Maskesi 100 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "8809634610119",
    "name": "Axis-Y Yüz Güneş Kremi SPF 50+ PA+++ 50 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "8809634610218",
    "name": "Axis-Y Heartleaf Yatıştırıcı Krem 60 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "8809634610249",
    "name": "Axis-Y Akne ve Gözenek Karşıtı Serum 15 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "8809634610294",
    "name": "Axis-Y Biome Comforting Infused Tonik 200 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "8809634610508",
    "name": "Axis-Y Biome Onarıcı Makyaj Temizleme Yağı 200 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "8809634610539",
    "name": "Axis-Y LHA Peel&Fill Gözenek Sıkılaştırıcı Krem 50 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "8809634610546",
    "name": "Axis-Y Calamine Gözenek Kontrol Kapsül Serum 50 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "8809634610881",
    "name": "Axis-Y Nemlendirici ve Kırışıklık Karşıtı Göz Serumu 10 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "8809634610959",
    "name": "Axis-Y Leke Önleyici ve Aydınlatıcı Tonik 125 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "8809634610966",
    "name": "Axis-Y Leke Önleyici ve Aydınlatıcı Yüz Kremi 50 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "8809635232754",
    "name": "Frankly Butter So Much Cream 80 ml",
    "source": "local_rossmann"
  },
  {
    "barcode": "8809640735289",
    "name": "Anua Peach 70 Niacin Serum 30 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "8809640735623",
    "name": "Anua Heartleaf Quercetinol Temizleme Köpüğü 150 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "8809640735640",
    "name": "Anua Peach %77 Niacin Essence Tonik 250 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "8809640735647",
    "name": "Anua Peach %77 Niacin Bakım Sütü 250 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "8809640735654",
    "name": "Anua Peach %77 Niacin Enriched Krem 50 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "8809640735784",
    "name": "Anua Heartleaf %77 Tonik Ped 70 Adet",
    "source": "local_watsons"
  },
  {
    "barcode": "8809640735821",
    "name": "Anua Niacinamide %10 + TXA %+ Serum 30 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "8809640736026",
    "name": "Anua Heartleaf %77 Soothing Tonik 250 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "8809640736125",
    "name": "Anua Rice %70 Glow Milky Tonik 250 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "8809640736132",
    "name": "Anua Rice Ceramide Nemlendirici Bariyer Serum 50 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "8809640736149",
    "name": "Anua Rice Enzyme Brightening Toz Temizleyici 40 g",
    "source": "local_watsons"
  },
  {
    "barcode": "8809640738456",
    "name": "Anua PDRN - Somon DNA 1000 Hyaluronik Asit Glow Ped 60 Adet",
    "source": "local_watsons"
  },
  {
    "barcode": "8809640738616",
    "name": "Anua PDRN - Somon DNA Hyaluronik Asit Kapsül 100 Serum 30 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "8809647110538",
    "name": "Dermal It's Real Superfood Pirinç Aydınlatıcı Yüz Maskesi",
    "source": "local_gratis"
  },
  {
    "barcode": "8809647110897",
    "name": "Dermal Gold Flash Foil Göz Maskesi 4 gr",
    "source": "local_gratis"
  },
  {
    "barcode": "8809647110903",
    "name": "Dermal Rose Gold Glitter Foil Göz Maskesi 4 gr",
    "source": "local_gratis"
  },
  {
    "barcode": "8809647113072",
    "name": "Dermal Cica Kolajen Maskesi 23 gr",
    "source": "local_gratis"
  },
  {
    "barcode": "8809647113096",
    "name": "Dermal Pirinç Özlü Kolajen Maske 23 gr",
    "source": "local_gratis"
  },
  {
    "barcode": "8809647115090",
    "name": "Dermal Cica x Mide Toner Centella Asiatica ve Seramid Özlü Sakinleştirici Tonik 200 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8809647115106",
    "name": "Dermal Cica x Mide Cleanser Oil Centella Asiatica ve Seramid Özlü Temizleme Yağı 150 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8809647115113",
    "name": "Dermal Cica x Mide Serum Centella Asiatica ve Seramid Özlü Serum 50 gr",
    "source": "local_gratis"
  },
  {
    "barcode": "8809647115120",
    "name": "Dermal Cica x Mide Aydınlatıcı ve Kırışıklık Bakımı Yüz Kremi 75 gr",
    "source": "local_gratis"
  },
  {
    "barcode": "8809647115137",
    "name": "Dermal Cica x Mide Centella Asiatica ve Seramid Özlü Eye Cream Göz Çevresi Kremi 40 gr",
    "source": "local_gratis"
  },
  {
    "barcode": "8809647116127",
    "name": "Dermal Hydrate Kağıt Yüz Maske Seti 7'li",
    "source": "local_gratis"
  },
  {
    "barcode": "8809647118787",
    "name": "Dermal Madecassoside Blemish Control Pad Kızarıklık Karşıtı Ton Eşitleyici Ped 12 Adet",
    "source": "local_gratis"
  },
  {
    "barcode": "8809647118824",
    "name": "Dermal Retinol Peptide Lifting Pad Elastikiyeti Artırıcı Tonik Yüz Temizleme Pedi 12 Adet",
    "source": "local_gratis"
  },
  {
    "barcode": "8809647119319",
    "name": "Dermal Korea Seoul Face Collagen Hydrogel Eriyen Yüz Maskesi 34 gr",
    "source": "local_gratis"
  },
  {
    "barcode": "8809647119326",
    "name": "Dermal Korea Seoul Face Hyaluronic Hydrogel Eriyen Yüz Maskesi 34 gr",
    "source": "local_gratis"
  },
  {
    "barcode": "8809647390008",
    "name": "Some By Mi AHA BHA PHA Seyahat Bakım Seti (Tonik 30 ml, Serum 10 ml, Krem 20 gr, Sabun 30 gr)",
    "source": "local_gratis"
  },
  {
    "barcode": "8809647390091",
    "name": "Some By Mi AHA BHA PHA Temizleme Köpüğü 100 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8809647390114",
    "name": "Some By Mi Galactomyces C Vitaminli Aydınlatıcı Serum 30 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8809647390244",
    "name": "Some By Mi Yeşil Çay İçerikli Gözenek Bakımı Yapan Yüz Temizleyici Köpük 120 gr",
    "source": "local_gratis"
  },
  {
    "barcode": "8809647390671",
    "name": "Some By Mi AHA BHA PHA İçerikli Yüz Temizleyici Ped 70 Adet",
    "source": "local_gratis"
  },
  {
    "barcode": "8809647391463",
    "name": "Some By Mi Glutatyon İçerikli Kağıt Yüz Maskesi 20 gr",
    "source": "local_gratis"
  },
  {
    "barcode": "8809647391487",
    "name": "Some By Mi Aloe Vera İçerikli Kağıt Yüz Maskesi 20 gr",
    "source": "local_gratis"
  },
  {
    "barcode": "8809647391524",
    "name": "Some By Mi Matcha İçerikli Kağıt Yüz Maskesi 20 gr",
    "source": "local_gratis"
  },
  {
    "barcode": "8809647391531",
    "name": "Some By Mi Bal Özlü Kağıt Yüz Maskesi 20 gr",
    "source": "local_gratis"
  },
  {
    "barcode": "8809647391548",
    "name": "Some By Mi Salyangoz Musini İçerikli Kağıt Yüz Maskesi 20 gr",
    "source": "local_gratis"
  },
  {
    "barcode": "8809647392583",
    "name": "Some By Mi Retinol ve Retinal İçerikli Göz Kremi 30 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8809647392637",
    "name": "Some By Mi Retinol İçerikli Kağıt Maske 22 gr",
    "source": "local_gratis"
  },
  {
    "barcode": "8809647392668",
    "name": "Some By Mi Retinol İçerikli Yüz Serumu 30 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8809647392828",
    "name": "Some By Mi Retinol Seyahat Bakım Seti (Göz Kremi 10 ml, Yüz Bakım Serumu 10 ml)",
    "source": "local_gratis"
  },
  {
    "barcode": "8809647393757",
    "name": "Some By Mi Retinol İçerikli Kağıt Yüz Maskesi 30 Adet",
    "source": "local_gratis"
  },
  {
    "barcode": "8809647394136",
    "name": "Some By Mi Galactomyces Glutatyonlu Aydınlatıcı Kağıt Maske 22 gr",
    "source": "local_gratis"
  },
  {
    "barcode": "8809647394143",
    "name": "Some By Mi Galactomyces Glutatyon İçerikli Aydınlatıcı Kağıt Yüz Maskesi 30 Adet",
    "source": "local_gratis"
  },
  {
    "barcode": "8809647394396",
    "name": "Some By Mi Galactomyces ve Glutatyon İçerikli Aydınlatıcı Krem 40 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8809647394464",
    "name": "Some By Mi Galactomyces ve Glutatyon İçerikli Aydınlatıcı Süt Yapılı Tonik 200 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8809647394723",
    "name": "Some By Mi Galactomyces Seyahat Bakım Seti (Göz Kremi 10 ml, Serum 10 ml)",
    "source": "local_gratis"
  },
  {
    "barcode": "8809647395447",
    "name": "Some By Mi PDRN Spirulina İçerikli Şerbet Yüz Maskesi 1 gr x 10 Adet",
    "source": "local_gratis"
  },
  {
    "barcode": "8809647395454",
    "name": "Some By Mi PDRN Spirulina İçerikli Yüz Serumu 50 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8809647395461",
    "name": "Some By Mi PDRN Spirulina İçerikli Gözenek Bakımı Yapan Baz 10 gr",
    "source": "local_gratis"
  },
  {
    "barcode": "8809652580272",
    "name": "Numbuzin No.3 Tingle-pore Softening Sheet Mask, 1 Adet",
    "source": "local_rossmann"
  },
  {
    "barcode": "8809652581774",
    "name": "Numbuzin No.5+ Glutathione Vitamin Concentrated Serum 30 ml",
    "source": "local_rossmann"
  },
  {
    "barcode": "8809652581781",
    "name": "Numbuzin No.5+ Glutathione Vitamin Concentrated Toner Pads 70'li",
    "source": "local_rossmann"
  },
  {
    "barcode": "8809652582221",
    "name": "Numbuzin No.5+ Glutathione Vitamin Concentrated Mask, 1 Adet",
    "source": "local_rossmann"
  },
  {
    "barcode": "8809652585055",
    "name": "Numbuzin No.5 Vitamin Glutathione Dark Spot Laser Cream 30 ml",
    "source": "local_rossmann"
  },
  {
    "barcode": "8809652587639",
    "name": "Numbuzin No. 9 Nad Bio Lifting-sil Essence 50 ml",
    "source": "local_rossmann"
  },
  {
    "barcode": "8809652587646",
    "name": "Numbuzin No.9 Nad Bio Lifting-sil Full Face Pack Sheet, 1 Adet",
    "source": "local_rossmann"
  },
  {
    "barcode": "8809652588728",
    "name": "Numbuzin No.1 Pantothenic B5 Hyaluronic Active Clear Mask, 1 Adet",
    "source": "local_rossmann"
  },
  {
    "barcode": "8809652589527",
    "name": "Numbuzin No.2 Rose Pdrn Overnight Collagen Mask, 1 Adet",
    "source": "local_rossmann"
  },
  {
    "barcode": "8809652589619",
    "name": "Numbuzin No.9 Nad+ Collagen Under Eye Patches 5'li",
    "source": "local_rossmann"
  },
  {
    "barcode": "8809652589718",
    "name": "Numbuzin No.2 Rose Pdrn Collagen Plumping Serum 30 ml",
    "source": "local_rossmann"
  },
  {
    "barcode": "8809652589725",
    "name": "Numbuzin No.2 Rose Pdrn Collagen 2x Plumping Serum 30 ml",
    "source": "local_rossmann"
  },
  {
    "barcode": "8809652589732",
    "name": "Numbuzin No.3 Blue Bio Retinol Pore Refining Serum 30 ml",
    "source": "local_rossmann"
  },
  {
    "barcode": "8809652589800",
    "name": "Numbuzin No.9 Nad+ Retinol Volumetox Eye Cream 10 ml",
    "source": "local_rossmann"
  },
  {
    "barcode": "8809655950188",
    "name": "Jumiso Hyalüronik Asitli Tonik 250 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8809655950195",
    "name": "Jumiso Su Bazlı Hyalüronik Asitli Krem 50 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8809655950898",
    "name": "Jumiso Salyangoz Özlü ve Peptit İçerikli Yüz Serumu 140 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8809655951260",
    "name": "Jumiso Aydınlatıcı ve Dengeleyici Serum 50 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8809655951345",
    "name": "Jumiso Salyangoz ve Peptit Serum 50 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8809655951376",
    "name": "Jumiso Salisilik Asitli Yüz Temizleme Köpüğü 120 gr",
    "source": "local_gratis"
  },
  {
    "barcode": "8809655951451",
    "name": "Jumiso Salyangoz Özlü ve Peptit İçerikli Yüz Kremi 100 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8809655951635",
    "name": "Jumiso Gözenek Temizleyici Yağ 200 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8809655952236",
    "name": "Jumiso %20 Niasinamid Yüz Serumu 40 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8809655952359",
    "name": "Jumiso %10 Niasinamid Yüz Serumu 40 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8809655952458",
    "name": "Jumiso %2 Niasinamid Gözenek Pürüzsüzleştirici Tonik 205 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8809655952465",
    "name": "Jumiso %2 Niasinamid Sebum Kontrol Yüz Kremi 80 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8809655952472",
    "name": "Jumiso %5 Niasinamid Gece Kremi 50 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8809657114632",
    "name": "Round Lab 1025 Dokdo Göz Kremi 30 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "8809657114731",
    "name": "Round Lab 1025 Dokdo Tonik 200 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "8809657114779",
    "name": "Round Lab 1025 Dokdo Losyon 200 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "8809657114960",
    "name": "Beauty of Joseon Glow Serum Propolis + Niacinamide 30 ml",
    "source": "local_rossmann"
  },
  {
    "barcode": "8809657115387",
    "name": "Round Lab 1025 Dokdo Tonik 100 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "8809663751500",
    "name": "Mizon Collagen Power Firming Göz Kremi 25 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "8809663751647",
    "name": "Mizon All In One Snail Repair Krem 35 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "8809663751661",
    "name": "Mizon Collagen Power Firming Krem 50 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "8809663751708",
    "name": "Mizon Snail Repair Göz Kremi 15 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "8809663752590",
    "name": "Mizon Only One Göz Kremi 30 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "8809663753153",
    "name": "Mizon Snail Repair Perfect Krem 50 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "8809663755560",
    "name": "MIZON HYALUGEN ÇİFT FAZLI MİST 100ML",
    "source": "local_watsons"
  },
  {
    "barcode": "8809663757328",
    "name": "Mizon 7 Vegan Peptit Booster Serum 150 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "8809668018929",
    "name": "Etude Moistfull Kolajen İçerikli Nemlendirici Yüz Kremi 75 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8809668018936",
    "name": "Etude Moistfull Kolajen İçerikli Nemlendirici Emülsiyon Yüz Kremi 180 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8809668018943",
    "name": "Etude Moistfull Kolajen İçerikli Nemlendirici Tonik 200 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8809668018981",
    "name": "Etude Moistfull Kolajen İçerikli Nemlendirici Göz Kremi 28 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8809668018998",
    "name": "Etude Kolajen İçerikli Nemlendirici Temizleme Köpüğü 150 gr",
    "source": "local_gratis"
  },
  {
    "barcode": "8809668028041",
    "name": "Etude Kabartma Tozu İçerikli Yüz Temizleme Köpüğü 160 gr",
    "source": "local_gratis"
  },
  {
    "barcode": "8809670680787",
    "name": "Mary & May Centella Asiatica İçerikli Yüz Serumu 30 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8809670680794",
    "name": "Mary & May Houttuynia Cordata ve Çay Ağacı İçerikli Yüz Serumu 30 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8809670680800",
    "name": "Mary & May Deniz Kolajeni İçerikli Yüz Serumu 30 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8809670680817",
    "name": "Mary & May Hyalüronik Asit İçeren  Yüz Serumu 30 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8809670680824",
    "name": "Mary & May 6 Peptit Kompleksi İçeren Yüz Serumu 30 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8809670680831",
    "name": "Mary & May Idebenon ve Böğürtlen Kompleksi İçeren Yüz Serumu 30 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8809670680848",
    "name": "Mary & May Niasinamid ve Chaenomeles Sinensis İçerikli Yüz Serumu 30 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8809670680862",
    "name": "Mary & May Hassas Ciltler İçin Nemlendirici Jel Yüz Kremi 70 gr",
    "source": "local_gratis"
  },
  {
    "barcode": "8809670680879",
    "name": "Mary & May Idebenon ve Böğürtlen İçerikli Yoğun Nemlendirici Yüz Kremi 70 gr",
    "source": "local_gratis"
  },
  {
    "barcode": "8809670680961",
    "name": "Mary & May Beyaz Kolajen İçerikli Yüz Temizleme Köpüğü 150 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8809670680978",
    "name": "Mary & May Houttuynia Cordata ve Çay Ağacı İçerikli Yüz Temizleme Köpüğü 150 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8809670681111",
    "name": "Mary & May Kolajen Booster Yüz Losyonu 120 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8809670681128",
    "name": "Mary & May C Vitamini ve Bifida İçerikli Yüz Losyonu 120 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8809670681135",
    "name": "Mary & May B5 Vitamini ve Bifida İçerikli Yüz Toniği 120 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8809670681159",
    "name": "Mary & May Traneksamik Asit ve Glutatyon İçerikli Göz Kremi 30 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8809670681395",
    "name": "Mary & May Cica Houttuynia ve Çay Ağacı İçerikli Kağıt Yüz Maskesi 30 Adet",
    "source": "local_gratis"
  },
  {
    "barcode": "8809670681401",
    "name": "Mary & May Niasinamid ve C Vitamini İçerikli Aydınlatıcı Kağıt Yüz Maskesi 30 Adet",
    "source": "local_gratis"
  },
  {
    "barcode": "8809670681517",
    "name": "Mary & May Kolajen ve Peptit İçerikli Vital Kağıt Yüz Maskesi 30 Adet",
    "source": "local_gratis"
  },
  {
    "barcode": "8809670681524",
    "name": "Mary & May Hyalüronik Asit ve Pantenol İçerikli Kağıt Yüz Maskesi 30 Adet",
    "source": "local_gratis"
  },
  {
    "barcode": "8809670681579",
    "name": "Mary & May Cica ve Çay Ağacı Özlü Kil Maskesi 125 gr",
    "source": "local_gratis"
  },
  {
    "barcode": "8809670681586",
    "name": "Mary & May Gül Suyu ve Hyalüronik Asit İçerikli Kil Maskesi 125 gr",
    "source": "local_gratis"
  },
  {
    "barcode": "8809670681593",
    "name": "Mary & May Limon ve Niasinamid İçerikli Kil Yüz Maskesi 125 gr",
    "source": "local_gratis"
  },
  {
    "barcode": "8809670681685",
    "name": "Mary & May Cica Çay Ağacı ve AHA PHA İçerikli Yüz Toniği 200 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8809670681692",
    "name": "Mary & May Böğürtlen Kompleksi Özü İçeren Çift Fazlı Yoğun Kıvamlı Yüz Krem Esansı 140 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8809670682064",
    "name": "Mary & May Idebenon ve Böğürtlen Kompleksi Özü İçeren Yüz Maskesi 20 Adet",
    "source": "local_gratis"
  },
  {
    "barcode": "8809670682071",
    "name": "Mary & May Böğürtlen Kompleksi İçerikli Kil Yüz Maskesi 125 gr",
    "source": "local_gratis"
  },
  {
    "barcode": "8809670682088",
    "name": "Mary & May Kalendula ve Peptit İçerikli Uyku Maskesi 110 gr",
    "source": "local_gratis"
  },
  {
    "barcode": "8809670682255",
    "name": "Mary & May Traneksamik Asit ve Glutatyon İçerikli Göz Kremi Seti (Göz Kremi 30 ml + 12 ml x 2)",
    "source": "local_gratis"
  },
  {
    "barcode": "8809670682682",
    "name": "Mary & May Pirinç Özü ve Niasinamid İçerikli Yüz Serumu 80 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8809670682699",
    "name": "Mary & May %0,1 Retinol ve Bakuchiol Cica İçeren Yüz Serumu 80 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8809670682712",
    "name": "Mary & May Idebenon ve Böğürtlen Kompleksi İçeren Yüz Serumu 80 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8809670682880",
    "name": "Mary & May Pirinç Glutatyon ve LHA İçerikli Yüz Temizleme Yağı 200 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8809670682897",
    "name": "Mary & May Centella Asiatica İçerikli Yüz Serumu 80 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8809670682941",
    "name": "Mary & May 6 Peptit Kompleksi İçeren Yüz Serumu 80 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8809670682958",
    "name": "Mary & May Hyalüronik Asit İçeren Yüz Serumu 80 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8809670683320",
    "name": "Mary & May Spikül Kolajen PDRN Güçlendirici Yüz Bakım Kremi 15 gr",
    "source": "local_gratis"
  },
  {
    "barcode": "8809670683429",
    "name": "Mary & May Spikül Azelaik PDRN Leke Kremi 15 gr",
    "source": "local_gratis"
  },
  {
    "barcode": "8809679690039",
    "name": "Tırtır Cilt Tazeleyici Kırışıklık Karşıtı Nemlendirici Sos Serum 50 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "8809679690725",
    "name": "Tırtır Seramik Cilt Tazeleyici Krem 100 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "8809679692514",
    "name": "Tırtır Collagen Lifting Göz Çevresi Kremi 15 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "8809679698813",
    "name": "Tırtır Seramik Milk Ampoule Serum Seramid ve Peptit İçerikli 40 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "8809684000182",
    "name": "Elensilia Aydınlatıcı Sıkılaştırıcı Arbutin Serum 50 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "8809684000540",
    "name": "Elensilia %80 Fransız Kolajeni Ve Haloxyl Içeren Kırışıklık Karşıtı Göz Kremi 10 g",
    "source": "local_watsons"
  },
  {
    "barcode": "8809684000657",
    "name": "Elensilia Yatıştırıcı Onarıcı ve Canlandırıcı %80 Cica Krem 50 g",
    "source": "local_watsons"
  },
  {
    "barcode": "8809684000885",
    "name": "Elensilia CPP+ Premium Kolajen Peptide Göz Kremi 30 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "8809684001128",
    "name": "Elensilia CPP Kolajen Kırışıklık Karşıtı Göz Kremi 20 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "8809686383559",
    "name": "Isntree Hyalüronik Asitli Nemlendirici Krem 100 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8809686383566",
    "name": "Isntree Hyalüronik Asitli Aqua Jel Krem 100 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8809686385676",
    "name": "D'Alba Mild Hassas Ciltler İçin %100 Mineral Filtreli Nemlendirici Yüz Güneş Kremi SPF50+ PA++++ 50 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "8809686389391",
    "name": "Isntree Hyalüronik Asit İçerikli Yüz Temizleme Köpüğü 150 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8809689370211",
    "name": "Mizon Hyaluronic Acid El Ayak Kremi 100 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "8809689371027",
    "name": "Mizon White Flower Snow Beyazlatıcı Krem 150 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "8809695678363",
    "name": "VT Cosmetics Reedle Shot 100 Yüz Kremi 50 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8809695678431",
    "name": "VT Cosmetics Reedle Shot 300 Yüz Kremi 50 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8809695678448",
    "name": "VT Cosmetics Reedle Shot 700 Yüz Kremi 30 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8809695679520",
    "name": "VT Cosmetics Reedle Shot Lifting Yüz Serumu 30 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8809695679537",
    "name": "VT Cosmetics Reedle Shot Lifting Yüz Kremi 50 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8809695679544",
    "name": "VT Cosmetics Reedle Shot Lifting Göz Kremi 15 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8809700320805",
    "name": "Celimax Serum Retinol Shot Tightening 30 ml",
    "source": "local_rossmann"
  },
  {
    "barcode": "8809700320812",
    "name": "Celimax Krem Retinal Shot Tightening Booster 15 ml",
    "source": "local_rossmann"
  },
  {
    "barcode": "8809700321703",
    "name": "Celimax Retinal Shot Tightening Dual Cream 50 ml",
    "source": "local_rossmann"
  },
  {
    "barcode": "8809700321888",
    "name": "Celimax Retinol Shot 30 ml & Retinal Shot 15 ml + 3 ml Set, 1 Adet",
    "source": "local_rossmann"
  },
  {
    "barcode": "8809726430004",
    "name": "JKosmec Skin Solution Kağıt Maske Ceramide 1 adet",
    "source": "local_rossmann"
  },
  {
    "barcode": "8809729430011",
    "name": "JKosmec Skin Solution Kağıt Maske Peptide 1 adet",
    "source": "local_rossmann"
  },
  {
    "barcode": "8809729430028",
    "name": "JKosmec Skin Solution Kağıt Maske Cica 1 adet",
    "source": "local_rossmann"
  },
  {
    "barcode": "8809729430103",
    "name": "5C Cure Avocado Kore Yüz Maskesi 25 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8809729430110",
    "name": "5C Cure Ampul Kağıt Maske Banana 25 ml",
    "source": "local_rossmann"
  },
  {
    "barcode": "8809729430127",
    "name": "5C Cure Ampul Kağıt Maske Coconut 25 ml",
    "source": "local_rossmann"
  },
  {
    "barcode": "8809729430622",
    "name": "JKosmec Skin Solution Collagen Göz Bölgesi Maskesi 30 Adet",
    "source": "local_gratis"
  },
  {
    "barcode": "8809729430646",
    "name": "JKosmec Skin Solution Vitamin C Maske",
    "source": "local_gratis"
  },
  {
    "barcode": "8809729430707",
    "name": "JKosmec Skin Solution Vitamin Eye Zone Mask",
    "source": "local_gratis"
  },
  {
    "barcode": "8809729430714",
    "name": "JKosmec Skin Solution Sıkılaştırıcı Serum (Collagen) 32 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8809736650037",
    "name": "Luvum Calming Repair Cica Şeffaflaşan Jel Maske 33 g",
    "source": "local_watsons"
  },
  {
    "barcode": "8809736650259",
    "name": "Luvum Phyto Collagen Şeffaflaşan Jel Maske 38 g",
    "source": "local_watsons"
  },
  {
    "barcode": "8809736650334",
    "name": "Luvum Pore Reset Çamur Maske 16 g",
    "source": "local_watsons"
  },
  {
    "barcode": "8809736650662",
    "name": "Luvum Afterglow Yuja Şeffaflaşan Jel Maske 33 g",
    "source": "local_watsons"
  },
  {
    "barcode": "8809736650976",
    "name": "Luvum Green Citrus Vitamin C Şeffaflaşan Jel Maske",
    "source": "local_watsons"
  },
  {
    "barcode": "8809738310960",
    "name": "Beauty of Joseon Ginseng Essence Water 150 ml",
    "source": "local_rossmann"
  },
  {
    "barcode": "8809738312729",
    "name": "Beauty Of Joseon Glow Deep Serum Rice Arbutin 30 ml",
    "source": "local_rossmann"
  },
  {
    "barcode": "8809738315590",
    "name": "Deoproce Kore Snail Recovery Tonik 210 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "8809738315804",
    "name": "Deoproce Kore Snail Recovery Krem 30 g",
    "source": "local_watsons"
  },
  {
    "barcode": "8809738316146",
    "name": "Beauty of Joseon Eye Serum Ginseng + Retinal 30 ml",
    "source": "local_rossmann"
  },
  {
    "barcode": "8809738317020",
    "name": "Elensilia 4 Haftada Etkili %80 Fransız Kolajeni Kırışıklık Karşıtı CPP %80 Baby Collagen Göz Kremi 30 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "8809738318646",
    "name": "Deoproce Korea UV Yüz Stick Güneş Koruyucu Hafif SPF50+ PA++++ 18 g",
    "source": "local_watsons"
  },
  {
    "barcode": "8809738319018",
    "name": "Deoproce Korea Superberry Stemcell Göz Boyun Kremi 10 g",
    "source": "local_watsons"
  },
  {
    "barcode": "8809738322154",
    "name": "Isntree Yeşil Çay Özlü Aydınlatıcı Serum 50 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8809738600214",
    "name": "Round Lab Birch Juice Tonik 300 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "8809738600221",
    "name": "Round Lab Birch Juice Krem 80 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "8809738600239",
    "name": "Round Lab Birch Juice Yüz Temizleme Jeli 150 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "8809738600245",
    "name": "Round Lab 1025 Dokdo Krem 80 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "8809738604755",
    "name": "ROUND LAB 1025 DOKDO KİL MASKESİ 100ML",
    "source": "local_watsons"
  },
  {
    "barcode": "8809738605226",
    "name": "Frankly Closer Serum 30 ml",
    "source": "local_rossmann"
  },
  {
    "barcode": "8809738605677",
    "name": "Round Lab 1025 Dokdo Temizleme Yağı 200 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "8809738605714",
    "name": "Round Lab Mugwort Tonik 300 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "8809738605721",
    "name": "Round Lab Mugwort Krem 80 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "8809738608364",
    "name": "Round Lab 1025 Dokdo Yüz Temizleme Köpüğü 150 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "8809750462708",
    "name": "Round Lab Pine Calming Cica Ped 50'li",
    "source": "local_watsons"
  },
  {
    "barcode": "8809751801353",
    "name": "tfit Deep Clear Cleansing Oil 150 ml",
    "source": "local_rossmann"
  },
  {
    "barcode": "8809751802602",
    "name": "Tfit Deep Clear Cleansing Balm 80 gr",
    "source": "local_rossmann"
  },
  {
    "barcode": "8809759903066",
    "name": "Banila Co Dear Hydration Tonik 200 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "8809759903173",
    "name": "Banila Co Clean It Zero Yağ Bazlı Yüz Temizleyici Balm Aydınlatıcı 100 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "8809759908383",
    "name": "Banila.Co Clean It Zero Yağ Bazlı Temizleyici Balm Orijinal 180 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "8809759908400",
    "name": "Banila Co Clean It Zero Yağ Bazlı Yüz Temizleyici Balm Orijinal 100 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "8809759908405",
    "name": "Banila Co Clean It Zero Yağ Bazlı Yüz Temizleyici Balm Gözenek Kontrol 100 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "8809759908412",
    "name": "Banila Co Clean It Zero Yağ Bazlı Yüz Temizleyici Balm Yatıştırıcı Cica 100 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "8809759908529",
    "name": "Banila Co Clean It Zero Yağ Bazlı Yüz Temizleyici Balm Orijinal Mini 50 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "8809759908535",
    "name": "Banila Co Clean It Zero Balm Orijinal Seyahat Boy 25 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "8809759908542",
    "name": "Banila Co Clean It Zero Yağ Bazlı Yüz Temizleyici Balm Pore Kontrol 180 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "8809759908559",
    "name": "Banila Co Clean It Zero Balm Pore Kontrol Mini 50 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "8809759908580",
    "name": "Banila Co Clean It Zero Mini Balm 2'li Set 2x7 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "8809759908597",
    "name": "Banila Co Clean It Zero Mini Balm 4'lü Set 4x7 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "8809782551814",
    "name": "Round Lab Birch Juice Nemlendirici Aydınlatıcı Yüz Güneş Kremi 50 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "8809782553009",
    "name": "Round Lab Birch Juice Serum 50 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "8809782554884",
    "name": "D'Alba Ton Eşitleyici Nemlendirici Yüz Güneş Kremi SPF50+ 50 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "8809782555508",
    "name": "Beauty of Joseon Relief Sun Rice + Probiotics SPF50+ 50 ml",
    "source": "local_rossmann"
  },
  {
    "barcode": "8809783322635",
    "name": "Isntree Soğan İçerikli Yenileyici Jel Krem 50 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8809783322642",
    "name": "Isntree Soğan İçerikli Yüz Toniği 200 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8809783322666",
    "name": "Isntree At Kestanesi Özü ve %2 Salisilik Asit (BHA) İçerikli Tonik 100 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8809800940125",
    "name": "Isntree Yam Kökü İçerikli Vegan Yüz Temizleme Sütü 220 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8809800940149",
    "name": "Isntree At Kestanesi Özü ve %8 AHA İçerikli Esans 100 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8809800940637",
    "name": "Isntree Ultra Düşük Moleküllü Hyalüronik Asit İçerikli Tonik 300 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8809800940644",
    "name": "Isntree Ultra Düşük Moleküllü Hyalüronik Asit İçerikli Serum 50 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8809800940668",
    "name": "Isntree Ultra Düşük Moleküllü Hyalüronik Asit İçerikli Yüz Maskesi 25 gr",
    "source": "local_gratis"
  },
  {
    "barcode": "8809800941252",
    "name": "Isntree Ultra Düşük Moleküllü Hyalüronik Asit ve Çinko İçerikli Tonik Ped 60 Adet",
    "source": "local_gratis"
  },
  {
    "barcode": "8809800941429",
    "name": "Isntree Ultra Düşük Moleküllü Çinko İçerikli Yüz Kremi 80 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8809800941597",
    "name": "Isntree Peptid İçerikli Destekleyici Yüz Serumu 50 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8809800941634",
    "name": "Isntree Soğan İçerikli Yüz Serumu 50 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8809800941887",
    "name": "Isntree İki Parça Eriyen Jel Yüz Maskesi 30 gr",
    "source": "local_gratis"
  },
  {
    "barcode": "8809800941900",
    "name": "Isntree İki Parça Eriyen Jel Yüz Maskesi 30 gr x 4 Adet",
    "source": "local_gratis"
  },
  {
    "barcode": "8809800941917",
    "name": "Isntree GIM PDRN İçerikli Nemlendirici Yüz Serumu 50 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8809800941924",
    "name": "Isntree GIM PDRN İçerikli Gece Bakım Maskesi 80 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8809820683118",
    "name": "Etude Kabartma Tozu İçerikli Gözenek Peelingi 200 gr",
    "source": "local_gratis"
  },
  {
    "barcode": "8809820688076",
    "name": "Etude Soonjung Nemlendirici Emülsiyon Yüz Kremi 130 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8809820688090",
    "name": "Etude Soonjung Yüz Bariyer Kremi 75 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8809820688618",
    "name": "Etude Soonjung 2x Yoğun Yüz Bariyer Kremi 60 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8809820693490",
    "name": "Etude Soonjung pH 5.5 Tonik 350 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8809820696538",
    "name": "Etude Soonjung pH 6.5 Yüz Köpük Temizleyici 150 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8809820696569",
    "name": "Etude Soonjung Panthensoside ve Cica İçerikli Yüz Balmı 50 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8809820696637",
    "name": "Etude Soonjung pH 5.5 Yüz Temizleme Köpüğü 150 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8809820698358",
    "name": "Etude Soonjung Panthensoside İçerikli Kağıt Maske 25 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8809820698846",
    "name": "Etude Gözenek Görünümü Önleyici Pudra Peeling 4 gr",
    "source": "local_gratis"
  },
  {
    "barcode": "8809820699249",
    "name": "Etude Çay Ağacı Özlü Nemlendirici Kağıt Maske 20 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8809820699263",
    "name": "Etude İnci İçerikli Aydınlatıcı Kağıt Maske 20 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8809820699287",
    "name": "Etude Hyalüronik Asit İçerikli Nemlendirici Kağıt Maske 20 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8809820699300",
    "name": "Etude Kolajen İçerikli Sıkılaştırıcı Kağıt Maske 20 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8809820699317",
    "name": "Etude Salyangoz Müsini İçerikli Sıkılaştırıcı Kağıt Maske 20 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8809820699324",
    "name": "Etude Seramid İçerikli Nemlendirici Kağıt Maske 20 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8809820700181",
    "name": "Etude Arındırıcı Yüz Temizleme Köpüğü 150 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8809820708972",
    "name": "Etude Kolajen İçerikli Nemlendirici Kağıt Maske 25 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8809840600195",
    "name": "odiD Süt Proteini Yoğun Bakım Saç Yağı Florist & Garden 100 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8809840600294",
    "name": "odiD Süt Proteini Yoğun Bakım Şampuanı Florist & Garden 500 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8809840600324",
    "name": "odiD Süt Proteini Yoğun Bakım Şampuanı Sandalwood & Fig 500 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8809840600355",
    "name": "odiD Süt Proteini Yoğun Bakım Saç Yağı Sandalwood & Fig 100 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8809840602021",
    "name": "odiD Onarıcı Bakım Şampuanı 500 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8809840602038",
    "name": "odiD Onarıcı Saç Bakım Kürü 300 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8809843682259",
    "name": "Innisfree Kiraz Çiçeği İçerikli Yüz Temizleme Jeli 150 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8809843683218",
    "name": "Innisfree BHA İçerikli Gözenek Bakımı Yapan Yüz Temizleme Köpüğü 150 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8809843683270",
    "name": "Innisfree Yeşil Çay ve Kafein İçerikli Aydınlatıcı Göz Serumu 10 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8809843683287",
    "name": "Innisfree Yeşil Çay ve Hyalüronik Asit İçerikli Yüz Toniği 150 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8809843683591",
    "name": "Innisfree Yeşil Çay ve C Vitamini İçerikli Aydınlatıcı Yüz Serumu 30 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8809843684178",
    "name": "Innisfree Yeşil Çay ve Amino Asit İçerikli Yüz Temizleme Köpüğü 150 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8809843684192",
    "name": "Innisfree Yeşil Çay ve Amino Asit İçerikli Yüz Temizleme Yağı 150 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8809843684208",
    "name": "Innisfree Yeşil Çay Çekirdeği ve Hyalüronik Asit İçerikli Yüz Kremi 50 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8809843685519",
    "name": "Innisfree Yeşil Çay Çekirdeği ve Hyalüronik Asit İçerikli Yüz Serumu 80 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8809843688602",
    "name": "Innisfree Kiraz Çiçeği İçerikli Işıltı Verici Jel Yüz Kremi 50 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8809843699462",
    "name": "Innisfree Gözenek Bakımı Yapan Mineral Pudra Yüz Peelingi 5 gr",
    "source": "local_gratis"
  },
  {
    "barcode": "8809843699813",
    "name": "Innisfree Yeşil Çay ve C Vitamini İçerikli Aydınlatıcı Tonik Ped 60 Adet",
    "source": "local_gratis"
  },
  {
    "barcode": "8809843702551",
    "name": "Innisfree Retinol ve Salisilik Asit İçerikli Yüz Serumu 30 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8809843704883",
    "name": "Innisfree Gözenek Bakımı Yapan Çift Fazlı Yüz Maskesi 110 gr",
    "source": "local_gratis"
  },
  {
    "barcode": "8809864752313",
    "name": "Abib Collagen Gel Mask Heartleaf Jelly 35 gr",
    "source": "local_rossmann"
  },
  {
    "barcode": "8809864760615",
    "name": "Abib Airy Sunstick Smoothing Bar 23 gr",
    "source": "local_rossmann"
  },
  {
    "barcode": "8809864762275",
    "name": "Abib Collagen Gel Mask Sedum Jelly 35 gr",
    "source": "local_rossmann"
  },
  {
    "barcode": "8809864762299",
    "name": "Abib Collagen Gel Mask Jericho Rose Jelly 35 gr",
    "source": "local_rossmann"
  },
  {
    "barcode": "8809864768123",
    "name": "Abib Collagen Eye Patch Jericho Rose Jelly 60'lı",
    "source": "local_rossmann"
  },
  {
    "barcode": "8809875453193",
    "name": "Eqqualberry Swimming Pool Daily Facial Tonik, 300 ml",
    "source": "local_rossmann"
  },
  {
    "barcode": "8809875456347",
    "name": "Eqqualberry Bakuchiol Plumping Capsule Cream Geniş Gözenek ve Sarkma Karşıtı Krem, 50 ml",
    "source": "local_rossmann"
  },
  {
    "barcode": "8809875456477",
    "name": "Eqqualberry Vitamin Illuminating Serum, 30 ml",
    "source": "local_rossmann"
  },
  {
    "barcode": "8809875456484",
    "name": "Eqqualberry Bakuchiol Plumping Serum Kırışıklık ve Geniş Gözenek Önleyici, 30 ml",
    "source": "local_rossmann"
  },
  {
    "barcode": "8809875457801",
    "name": "Eqqualberry NAD+ Peptide Boosting Serum İnce Çizgi ve Elastikiyet Kaybı Önleyici, 30 ml",
    "source": "local_rossmann"
  },
  {
    "barcode": "8809875457894",
    "name": "Eqqualberry Nad+peptide Boosting Cream 50 ml",
    "source": "local_rossmann"
  },
  {
    "barcode": "8809875900215",
    "name": "Frankly Retinol 0.1% Cream 30 ml",
    "source": "local_rossmann"
  },
  {
    "barcode": "8809875904343",
    "name": "Frankly Retinol 0.3% Cream 20 ml",
    "source": "local_rossmann"
  },
  {
    "barcode": "8809875904459",
    "name": "Round Lab Birch Juice Serinletici Nemlendirici Yüksek UV Korumalı Yüz Stick Güneş Koruyucu 19 gr",
    "source": "local_watsons"
  },
  {
    "barcode": "8809875906774",
    "name": "Frankly Cicahae Sunscreen Spf50+ 50 ml",
    "source": "local_rossmann"
  },
  {
    "barcode": "8809875906811",
    "name": "Celimax Heart Pink Tone-Up Sun Güneş Kremi, 40ml",
    "source": "local_rossmann"
  },
  {
    "barcode": "8809875907795",
    "name": "Celimax Noni II Calming Radiance Serum, 30 ml",
    "source": "local_rossmann"
  },
  {
    "barcode": "8809891183678",
    "name": "Biodance Sea Kelp Gel Toner Ped 60 Adet",
    "source": "local_watsons"
  },
  {
    "barcode": "8809891183685",
    "name": "Biodance Vita Niacinamide Gel Toner Ped 60 Adet",
    "source": "local_watsons"
  },
  {
    "barcode": "8809891187461",
    "name": "Biodance Revitalizing Caviar PDRN Mask – Besleyici ve Canlandırıcı 34 g",
    "source": "local_rossmann"
  },
  {
    "barcode": "8809891187462",
    "name": "Biodance Revitinating Cavior Pdrn Real Deep Maske 34 g",
    "source": "local_watsons"
  },
  {
    "barcode": "8809913830085",
    "name": "Skin1004 Gözenek Bakımı Yapan Stick Kil Maskesi 27 gr",
    "source": "local_gratis"
  },
  {
    "barcode": "8809913830139",
    "name": "Skin1004 Madagascar Centella Hyalu-Cica Günlük Serum 50 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8809913830146",
    "name": "Skin1004 Madagascar Centella Probio-Cica Yüz Serumu 95 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8809913830177",
    "name": "Skin1004 Madagascar Centella Probio-Cica Göz Kremi 20 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8809913830191",
    "name": "Skin1004 Madagascar Centella Hyalu-Cica Yüz Mist 120 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8809913830245",
    "name": "Skin1004 Madagascar Centella Probio-Cica Yüz Kremi 15 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8809913830627",
    "name": "Skin1004 Madagascar Centella Ton Eşitleyici Kapsül Yüz Serumu 50 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8809913830634",
    "name": "Skin1004 Madagascar Centella Probio-Cica Yüz Serumu 30 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8809921774258",
    "name": "Medicube Red Serum 30 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "8809925103696",
    "name": "Pure Korean Snail Yüz Maskesi",
    "source": "local_gratis"
  },
  {
    "barcode": "8809925103702",
    "name": "Pure Korean Pomegrenate Yüz Maskesi",
    "source": "local_gratis"
  },
  {
    "barcode": "8809925103719",
    "name": "Pure Korean Avocado Yüz Maskesi",
    "source": "local_gratis"
  },
  {
    "barcode": "8809925103726",
    "name": "Pure Korean Collagen Yüz Maskesi",
    "source": "local_gratis"
  },
  {
    "barcode": "8809925103733",
    "name": "Pure Korean Multi-Vitamin Strawberry Yüz Maskesi",
    "source": "local_gratis"
  },
  {
    "barcode": "8809925103740",
    "name": "Pure Korean Multi-Vitamin Mango Yüz Maskesi",
    "source": "local_gratis"
  },
  {
    "barcode": "8809925103757",
    "name": "Pure Korean Multi-Vitamin C Yüz Maskesi",
    "source": "local_gratis"
  },
  {
    "barcode": "8809925103764",
    "name": "Pure Korean Pore Yüz Maskesi",
    "source": "local_gratis"
  },
  {
    "barcode": "8809925103788",
    "name": "Pure Korean Bakuchiol Yüz Maskesi",
    "source": "local_gratis"
  },
  {
    "barcode": "8809925103801",
    "name": "Pure Korean Anti-Aging Yüz Maskesi",
    "source": "local_gratis"
  },
  {
    "barcode": "8809925105553",
    "name": "Pure Korean Ayak Kremi Papaya 100 ml",
    "source": "local_rossmann"
  },
  {
    "barcode": "8809925106796",
    "name": "Pure Korean Maske Firming Eye Collagen & Seaweed 30'lu",
    "source": "local_rossmann"
  },
  {
    "barcode": "8809925106802",
    "name": "Pure Korean Elasticity Göz Maskesi",
    "source": "local_watsons"
  },
  {
    "barcode": "8809925106819",
    "name": "Pure Korean Cooling Göz Maskesi 30 ml (Hyaluron & Caffeine)",
    "source": "local_gratis"
  },
  {
    "barcode": "8809925106826",
    "name": "Pure Korean Anti-Wrinkle Göz Maskesi 30 ml (Peptides Complex & Q10)",
    "source": "local_gratis"
  },
  {
    "barcode": "8809925108660",
    "name": "Pure Korean Salmon Yüz Maskesi",
    "source": "local_gratis"
  },
  {
    "barcode": "8809925108677",
    "name": "Pure Korean Caviar Yüz Maskesi",
    "source": "local_gratis"
  },
  {
    "barcode": "8809925108684",
    "name": "Pure Korean Collagen Peel off Pack Yüz Maskesi 100 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8809925108820",
    "name": "Pure Korean Hyaluronic Acid Serum Yüz Maskesi",
    "source": "local_gratis"
  },
  {
    "barcode": "8809925108837",
    "name": "Pure Korean Centella x Niacin Serum Yüz Maskesi",
    "source": "local_gratis"
  },
  {
    "barcode": "8809925108844",
    "name": "Pure Korean Aloe Vera Yüz Maskesi",
    "source": "local_gratis"
  },
  {
    "barcode": "8809925108851",
    "name": "Pure Korean Ginseng Yüz Maskesi",
    "source": "local_gratis"
  },
  {
    "barcode": "8809925109308",
    "name": "Pure Korean Collagen Plus 3x Active Yüz Maskesi",
    "source": "local_gratis"
  },
  {
    "barcode": "8809925109445",
    "name": "Pure Korean AHA BHA Serum Maske 1 Adet",
    "source": "local_rossmann"
  },
  {
    "barcode": "8809925109452",
    "name": "Pure Korean Glutathione x Collagen Serum Yüz Maskesi",
    "source": "local_gratis"
  },
  {
    "barcode": "8809925109469",
    "name": "Pure Korean Egg White Pore Maske",
    "source": "local_rossmann"
  },
  {
    "barcode": "8809925109810",
    "name": "Pure Korean Multivitamin Vitamin C Maske",
    "source": "local_rossmann"
  },
  {
    "barcode": "8809925129634",
    "name": "Mamonde Pore Shrinker Gözenek Bakımı Yapan Bakuchiol Yüz Kremi 60 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8809925134522",
    "name": "Mamonde Amazing Deep Mint Yüz Temizleme Balmı 90 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8809925148222",
    "name": "Mamonde Pore Shrinker Gözenek Bakımı Yapan Bakuchiol Yüz Serumu 50 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8809925149465",
    "name": "Mamonde Amazing Deep Mint Yüz Temizleme Köpüğü 120 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8809925151260",
    "name": "Mamonde Skin Barrier Probiyotik ve Seramid İçerikli Tonik 200 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8809925151277",
    "name": "Mamonde Skin Barrier Probiyotik ve Seramid İçerikli Nemlendirici Emülsiyon 150 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8809925151284",
    "name": "Mamonde Skin Barrier Probiyotik ve Seramid İçerikli Nemlendirici Yüz Kremi 60 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8809925151307",
    "name": "Mamonde Skin Barrier Seramidli Amino Yüz Köpük Temizleyici 120 gr",
    "source": "local_gratis"
  },
  {
    "barcode": "8809925152106",
    "name": "Mamonde Skin Barrier Probiyotik ve Seramid İçerikli Ampul Kağıt Yüz Maskesi 23 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8809925152601",
    "name": "Mamonde Flora Glow Rose Yüz Kremi 50 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8809925165175",
    "name": "Mamonde Calming Shot Aydınlatıcı ve Nemlendirici Azulen Yüz Serumu 50 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8809925165182",
    "name": "Mamonde Calming Shot Aydınlatıcı ve Nemlendirici Azulen Tonik 300 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8809925165199",
    "name": "Mamonde Calming Shot Aydınlatıcı ve Nemlendirici Azulen Yüz Kremi 60 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8809925165250",
    "name": "Mamonde Calming Shot Azulen Ampul Kağıt Yüz Maskesi 23 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8809925189232",
    "name": "Mamonde Pore Shrinker Gözenek Bakımı Yapan Bakuchiol Tonik 200 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8809925195035",
    "name": "Mamonde Flora Glow Rose Water Tonik 300 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8809925196315",
    "name": "Mamonde Flora Glow Rose Sıvı Maske 80 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8809928131153",
    "name": "Tırtır Milk Canlandırıcı Cilt Toniği 150 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "8809928133812",
    "name": "Tırtır Milk Canlandırıcı Cilt Toniği Light 150 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "8809937360629",
    "name": "Biodance Hydro Cera-Nol Real Deep Mask 34 g",
    "source": "local_rossmann"
  },
  {
    "barcode": "8809937360834",
    "name": "Biodance Bio Collagen Real Deep Mask",
    "source": "local_rossmann"
  },
  {
    "barcode": "8809937361190",
    "name": "Biodance Collagen Gel Toner Pad – Nemlendirici ve Dolgunlaştırıcı 60 Adet",
    "source": "local_rossmann"
  },
  {
    "barcode": "8809937361206",
    "name": "Biodance Cera-Nol Gel Toner Ped 60 Adet",
    "source": "local_watsons"
  },
  {
    "barcode": "8809937361459",
    "name": "Biodance Radiant Vita Niacinamide Real Deep Mask Aydınlatıcı ve Ton Dengeleyici Kağıt Maske",
    "source": "local_rossmann"
  },
  {
    "barcode": "8809937361473",
    "name": "Biodance Refreshing Sea Kelp Mask – Ferahlatıcı ve Arındırıcı 34 g",
    "source": "local_rossmann"
  },
  {
    "barcode": "8809949480360",
    "name": "Ourwhy Kalendula İçerikli Aydınlatıcı Serum 40 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8809949480377",
    "name": "Ourwhy Heartleaf İçerikli Nemlendirici Krem 50 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8809949480384",
    "name": "Ourwhy Heartleaf İçerikli Nemlendirici Serum 40 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8809949480414",
    "name": "Ourwhy Yulaf İçerikli Cilt Bariyerini Destekleyen Tonik 175 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8809949480421",
    "name": "Ourwhy Heartleaf İçerikli Nemlendirici Tonik 175 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8809949484634",
    "name": "farm Rx Super Greens Yüz Temizleme Jeli 240 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8809949485808",
    "name": "farm Rx Ananas ve C Vitamini İçerikli Aydınlatıcı Serum 30 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8809949485822",
    "name": "farm Rx Ananas ve C Vitamini İçerikli Peeling Ped 70 Adet",
    "source": "local_gratis"
  },
  {
    "barcode": "8809954941467",
    "name": "Frankly Sunday Glow Serum 37 ml",
    "source": "local_rossmann"
  },
  {
    "barcode": "8809954943911",
    "name": "Frankly Closer Toner Pad 70'li",
    "source": "local_rossmann"
  },
  {
    "barcode": "8809954945908",
    "name": "Frankly Closer Sheet Mask 22 ml",
    "source": "local_rossmann"
  },
  {
    "barcode": "8809954946134",
    "name": "Frankly Closer Sheet Mask 10'lu",
    "source": "local_rossmann"
  },
  {
    "barcode": "8809954949227",
    "name": "Celimax The Vita-a Retinal Shot Tightening 2-step Gel Mask, 1 Adet",
    "source": "local_rossmann"
  },
  {
    "barcode": "8809960356170",
    "name": "Medicube Red Peeling Pad 155 g",
    "source": "local_watsons"
  },
  {
    "barcode": "8809960356569",
    "name": "Medicube Red Tonik 100 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "8809960356620",
    "name": "Medicube Deep Vita A Retinol Serum 30 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "8809960356767",
    "name": "Medicube Zero Pore Blackhead Çamur Maskesi 100 g",
    "source": "local_watsons"
  },
  {
    "barcode": "8809971484503",
    "name": "Celimax Pore Dark Spot Leke Karşıtı Krem, 35 ml",
    "source": "local_rossmann"
  },
  {
    "barcode": "8809971484510",
    "name": "Celimax Pore+dark Spot Sunscreen Brightening 50 ml",
    "source": "local_rossmann"
  },
  {
    "barcode": "8809975198192",
    "name": "Celimax Txa Body Clarifying Pad 50 Pads",
    "source": "local_rossmann"
  },
  {
    "barcode": "8809981334928",
    "name": "Medicube Pore Exosome Shot 2000 30 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "8809981339206",
    "name": "Medicube Kolajen Glow Booster Shot Serum 15 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "8809982769866",
    "name": "Medicube Deep Vita C Kapsul Krem 55 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "8809982982655",
    "name": "Lador Hidrolize Kolajen Kuru&Hassas Saç Kremi 150 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "8850029036564",
    "name": "Nivea Super10 Serum Etkili Aydınlatıcı ve Nemlendirici Vücut Losyonu 170 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8850029043364",
    "name": "Nivea Vücut Losyonu Super10 Serum Etkili Aydınlatıcı ve Sıkılaştırıcı 170 ml",
    "source": "local_rossmann"
  },
  {
    "barcode": "8851932473446",
    "name": "Vaseline Gluta-Hya Serum Etkili Vücut Losyonu Pürüzsüzleştirici 170 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8851932473484",
    "name": "Vaseline Gluta-Hya Güneş Koruyucu Vücut Losyonu 200 ml",
    "source": "local_rossmann"
  },
  {
    "barcode": "8852788064543",
    "name": "Dermaction Plus By Watsons Güneş Yüz Kremi Spf50 50 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "8901138500054",
    "name": "Himalaya Aloe Vera Özlü Nemlendirici Yüz Temizleyici 150 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8901138500061",
    "name": "Himalaya Limon Özlü Yüz Temizleyici Yağ Dengeleyici Jel 150 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8901138506377",
    "name": "Himalaya Besleyici El & Vücut Kremi Kavanoz 50 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8901138506384",
    "name": "Himalaya Besleyici Krem 150 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "8901138511784",
    "name": "Himalaya Yüz Temizleyici Jel Sivilce Karşıtı Arındırıcı Neem Özlü 150 ml",
    "source": "local_rossmann"
  },
  {
    "barcode": "8901138512811",
    "name": "Himalaya Neem Özlü Arındırıcı Yüz Temizleme Köpüğü 150 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "8901138711900",
    "name": "Himalaya Kayısılı Peeling Etkili Hassas Yüz Yıkama Jeli 150 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8901138713881",
    "name": "Himalaya Yoğun Nemlendirici Krem Kavanoz 150 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8901138819668",
    "name": "Himalaya Natural Glow Doğal Işıltı Yüz Yıkama Jeli 100 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8901138819965",
    "name": "Himalaya Aydınlatıcı Yüz Temizleyici 150 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8901138825492",
    "name": "Himalaya Limon Özlü Yüz Temizleme Köpüğü Yağ Dengeleyici 150 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8901138834777",
    "name": "Himalaya Aydınlatıcı Gündüz Kremi 50 gr",
    "source": "local_gratis"
  },
  {
    "barcode": "8993417200014",
    "name": "Ellips Smooth & Shiny Yumuşaklık ve Işıltı Veren Saç Vitamini 6'lı Blister",
    "source": "local_gratis"
  },
  {
    "barcode": "8993417200021",
    "name": "Ellips Treatment Besleyici Saç Vitamini 6'lı Blister",
    "source": "local_gratis"
  },
  {
    "barcode": "8993417200038",
    "name": "Ellips Nutri Color Boyalı Saçlara Özel Saç Vitamini 6'lı Blister",
    "source": "local_gratis"
  },
  {
    "barcode": "8993417200052",
    "name": "Ellips Vitality Canlandırıcı Saç Vitamini 6'lı Blister",
    "source": "local_gratis"
  },
  {
    "barcode": "8993417309410",
    "name": "Ellips Saç Vitamini Yumuşaklık Ve Işıltı Veren 30x1 ml",
    "source": "local_rossmann"
  },
  {
    "barcode": "8993417309427",
    "name": "Ellips Saç Vitamini Hair Treatment Zayıf Saçlar İçin Besleyici 30x1 ml",
    "source": "local_rossmann"
  },
  {
    "barcode": "8993417309458",
    "name": "Ellips Saç Vitamini Hair Vitality Canlandırıcı 30x1 ml",
    "source": "local_rossmann"
  },
  {
    "barcode": "8994993022823",
    "name": "L'Oreal Paris Revitalift Yağ Karşıtı Gece Serumu 30 ml",
    "source": "local_watsons"
  },
  {
    "barcode": "8999999581930",
    "name": "Vaseline Gluta-Hya Serum Etkili UV Leke Karşıtı & Aydınlatıcı Losyon 200 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "8999999581947",
    "name": "Vaseline Gluta-Hya Serum Etkili Canlandırıcı Vücut Losyonu 200 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "9000101735710",
    "name": "Taft x Gliss Çok Amaçlı Sprey 150 ml",
    "source": "local_rossmann"
  },
  {
    "barcode": "9000101749373",
    "name": "Gliss Full Hair Wonder Saç Serumu 100 ml",
    "source": "local_gratis"
  },
  {
    "barcode": "9005800367590",
    "name": "Nivea Arındırıcı Micellar Makyaj Temizleme Suyu 400 ml (Yağlı ve Karma Cilt)",
    "source": "local_gratis"
  },
  {
    "barcode": "9310714206119",
    "name": "Men Perfect Saç Boyası Açık Kahve 50 50 ml",
    "source": "local_rossmann"
  },
  {
    "barcode": "9310714206126",
    "name": "Men Perfect Saç Boyası Kahve 60 50 ml",
    "source": "local_rossmann"
  },
  {
    "barcode": "9310714206133",
    "name": "Men Perfect Saç Boyası Koyu Kahve 70 50 ml",
    "source": "local_rossmann"
  },
  {
    "barcode": "9310714206140",
    "name": "Men Perfect Saç Boyası Kahve Siyah 80 50 ml",
    "source": "local_rossmann"
  },
  {
    "barcode": "9310714206157",
    "name": "Men Perfect Saç Boyası Siyah 90 50 ml",
    "source": "local_rossmann"
  },
  {
    "barcode": "9556126672542",
    "name": "Vaseline Gluta-Hya Serum Etkili Vücut Losyonu Sıkılaştırıcı 200 ml",
    "source": "local_gratis"
  }
];
