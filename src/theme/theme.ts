import { MD3LightTheme, MD3DarkTheme, type MD3Theme } from "react-native-paper";

import type { TranslationKey } from "@/i18n/LocaleContext";

export type ThemeId = "leopard" | "nude-rose-gold" | "emerald-champagne" | "titanium-graphite";

export const DEFAULT_THEME_ID: ThemeId = "nude-rose-gold";

/** Sadece "Leopar Glam" temasında zemin/kart katmanlarına hafif desen basılır. */
export function isPatternedTheme(themeId: ThemeId): boolean {
  return themeId === "leopard";
}

/** Tema adları artık i18n anahtarı — UI'da `t(THEME_LABEL_KEYS[themeId])` ile çevrilir. */
export const THEME_LABEL_KEYS: Record<ThemeId, TranslationKey> = {
  leopard: "themes.leopardLabel",
  "nude-rose-gold": "themes.nudeRoseGoldLabel",
  "emerald-champagne": "themes.emeraldChampagneLabel",
  "titanium-graphite": "themes.titaniumGraphiteLabel",
};

export const THEME_DESCRIPTION_KEYS: Record<ThemeId, TranslationKey> = {
  leopard: "themes.leopardDescription",
  "nude-rose-gold": "themes.nudeRoseGoldDescription",
  "emerald-champagne": "themes.emeraldChampagneDescription",
  "titanium-graphite": "themes.titaniumGraphiteDescription",
};

/** Ayarlar'daki yatay tema seçici daireleri için: [zemin, primary, ikincil vurgu]. */
export const THEME_PREVIEW_SWATCHES: Record<ThemeId, [string, string, string]> = {
  leopard: ["#1A1013", "#D69AA0", "#9C6066"],
  "nude-rose-gold": ["#FAF5F2", "#DF8B77", "#F3D0C2"],
  "emerald-champagne": ["#184A45", "#CEAA84", "#F7E5CF"],
  "titanium-graphite": ["#4B5360", "#C8D3DF", "#8A99A8"],
};

/** "Leopar Glam" kartlarında/zeminde kullanılan ince tozlu gül ışıltı kenarlığı. */
export const LEOPARD_BORDER = "rgba(214, 154, 160, 0.4)";

/** Gerçekçi leopar rozetinin kendi rengi — UI vurgu rengi (gül/rose) ne olursa
 * olsun SABİT kalır; desen her zaman doğal bakır/kahve + neredeyse-siyah kenar
 * olarak görünür, UI'ın pembe/gül aksanına asla boyanmaz. */
export const LEOPARD_PATTERN_FILL = "#7A4F30";
export const LEOPARD_PATTERN_BORDER = "#0D0805";

/** Kart tasarım dili: yüksek köşe yuvarlaklığı + yumuşak dağınık gölge (Structured ilhamı).
 * Değerler ui-ux-pro-max skill'inin "Soft UI Evolution" stil kılavuzuna göre kalibre
 * edildi: düz/keskin değil ama neumorphism kadar da ağır olmayan, geniş/dağınık/düşük
 * opaklıklı "premium float" gölgesi (bkz. design-system/skinloop/MASTER.md). */
export const CARD_RADIUS = 26;

/**
 * Modal/Dialog/Alert köşe yuvarlaklığı. React Native Paper MD3'te Dialog'un
 * kendi varsayılanı `roundness * 7` (bu projede 16 * 7 = 112px!) — bir
 * kutuyu neredeyse elips/blob'a dönüştüren, aşırı yuvarlak bir değer. Tüm
 * Dialog'larda (bkz. AppDialog.tsx) bunun yerine bu daha ölçülü, modern
 * değer kullanılır.
 */
export const DIALOG_RADIUS = 20;

export const CARD_SHADOW = {
  shadowColor: "#000",
  shadowOffset: { width: 0, height: 6 },
  shadowOpacity: 0.06,
  shadowRadius: 16,
  elevation: 3,
} as const;

/** `#RRGGBB` rengini `rgba(...)`'ya çevirir — yarı saydam yüzeyler (buzlu cam tab bar, degrade blob'lar) için. */
export function hexToRgba(hex: string, alpha: number): string {
  const normalized = hex.replace("#", "");
  const r = parseInt(normalized.substring(0, 2), 16);
  const g = parseInt(normalized.substring(2, 4), 16);
  const b = parseInt(normalized.substring(4, 6), 16);
  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
}

/** FAB'ın sabit alt sekme çubuğunun hemen üzerinde durması için taban `bottom` değeri —
 * cihazın gerçek alt güvenli alanı (`insets.bottom`) her kullanım yerinde ayrıca eklenir. */
export const FAB_BOTTOM_OFFSET = 16;

/** Daha belirgin, "kaldırılmış" kartlar için (ör. üst başlık bloğu, öne çıkan istatistik kartları).
 * Yüksek offset + geniş/düşük opaklıklı blur = sert değil, yayılmış/premium bir "yüzen kart" hissi. */
export const ELEVATED_SHADOW = {
  shadowColor: "#000",
  shadowOffset: { width: 0, height: 14 },
  shadowOpacity: 0.12,
  shadowRadius: 28,
  elevation: 8,
} as const;

/** Tema fark etmeksizin, "başarı/premium" anlarını (tamamlanan adım, ulaşılan
 * seviye, yıldızlar) işaretlemek için kullanılan sabit rose-gold degrade —
 * markanın kendi tema rengini boğmadan nadiren, bilinçli bir vurgu olarak. */
export const PREMIUM_ACCENT: [string, string] = ["#F3D2C1", "#C98A6B"];

/** Düz siyah gölge yerine, verilen rengin kendisinden yayılan yumuşak/geniş bir
 * "glow" — ışığı ve derinliği vurgulayan premium kart/rozet efektleri için. */
export function glowShadow(hex: string, opacity = 0.24) {
  return {
    shadowColor: hex,
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: opacity,
    shadowRadius: 24,
    elevation: 6,
  } as const;
}

/**
 * Üst başlık bloğu ve öne çıkan vurgu alanları için iki durak (2-stop)
 * degrade renkleri — düz `primary` doldurma yerine hafif bir derinlik/hareket
 * hissi verir. Her tema kendi paletine uygun, primary'den bir ton daha
 * doygun/koyu bir ikinci durakla eşleşir.
 */
export const THEME_GRADIENTS: Record<ThemeId, [string, string]> = {
  leopard: ["#E3AEB3", "#B97880"],
  "nude-rose-gold": ["#DF8B77", "#9C5443"],
  "emerald-champagne": ["#CEAA84", "#8A6F4E"],
  "titanium-graphite": ["#C8D3DF", "#5C6B7A"],
};

/**
 * Nude & Rose Gold — varsayılan tema. Sıcak pudra terracotta ve şeftali
 * tonlarında, ferah/organik bir cilt bakımı hissiyatı. Marka logosunun
 * yeni renk paletiyle eşleşen ilk yeni tema.
 */
const nudeRoseGoldTheme: MD3Theme = {
  ...MD3LightTheme,
  roundness: 16,
  colors: {
    ...MD3LightTheme.colors,
    primary: "#DF8B77",
    onPrimary: "#FFFFFF",
    primaryContainer: "#F6DCD3",
    onPrimaryContainer: "#3E2723",

    secondary: "#F3D0C2",
    onSecondary: "#3E2723",
    secondaryContainer: "#FDF1EB",
    onSecondaryContainer: "#3E2723",

    tertiary: "#9C5443",
    onTertiary: "#FFFFFF",
    tertiaryContainer: "#E8D3CB",
    onTertiaryContainer: "#3E2723",

    background: "#FAF5F2",
    onBackground: "#3E2723",

    surface: "#FFFFFF",
    onSurface: "#3E2723",
    surfaceVariant: "#FDF1EB",
    onSurfaceVariant: "#9C5443",
    surfaceDisabled: "rgba(62, 39, 35, 0.12)",

    error: "#B3261E",
    onError: "#FFFFFF",
    errorContainer: "#F9DEDC",
    onErrorContainer: "#410E0B",

    outline: "#E8D3CB",
    outlineVariant: "#F3E4DE",

    inverseSurface: "#3E2723",
    inverseOnSurface: "#FAF5F2",
    inversePrimary: "#F6C4BB",

    backdrop: "rgba(62, 39, 35, 0.4)",
  },
};

/**
 * Zümrüt & Şampanya Gold — lüks dermokozmetik/spa hissiyatı veren koyu mod.
 * Derin zümrüt yeşili zemin üzerinde şampanya altın vurgular; metin rengi
 * yüksek kontrast için kırık beyaz/altın tonlarında.
 */
const emeraldChampagneTheme: MD3Theme = {
  ...MD3DarkTheme,
  roundness: 16,
  colors: {
    ...MD3DarkTheme.colors,
    primary: "#CEAA84",
    onPrimary: "#0C2B28",
    primaryContainer: "#3D3423",
    onPrimaryContainer: "#F7E5CF",

    secondary: "#9FB8A8",
    onSecondary: "#0C2B28",
    secondaryContainer: "#26433D",
    onSecondaryContainer: "#DCEDE5",

    tertiary: "#F7E5CF",
    onTertiary: "#0C2B28",
    tertiaryContainer: "#3D3423",
    onTertiaryContainer: "#F7E5CF",

    background: "#184A45",
    onBackground: "#FFFFFF",

    surface: "#215852",
    onSurface: "#FFFFFF",
    surfaceVariant: "#0C2B28",
    onSurfaceVariant: "#CEAA84",
    surfaceDisabled: "rgba(255, 255, 255, 0.12)",

    error: "#F2B8B5",
    onError: "#601410",
    errorContainer: "#8C1D18",
    onErrorContainer: "#F9DEDC",

    /** "Derinlik/kontrast gölgesi" — verilen koyu yeşil ton doğrudan kenarlık/gölge rengi olarak kullanılır. */
    outline: "#0C2B28",
    outlineVariant: "#12352F",

    inverseSurface: "#F7E5CF",
    inverseOnSurface: "#184A45",
    inversePrimary: "#8A6F4E",

    backdrop: "rgba(12, 43, 40, 0.75)",
  },
};

/**
 * Titanyum & Grafit — minimalist, medikal, modern ve unisex bir his. Füme
 * arduvaz grisi zemin üzerinde soğuk metalik gümüş vurgular; yüksek
 * okunabilirlik için açık gri-beyaz metin.
 */
const titaniumGraphiteTheme: MD3Theme = {
  ...MD3DarkTheme,
  roundness: 16,
  colors: {
    ...MD3DarkTheme.colors,
    primary: "#C8D3DF",
    onPrimary: "#1E232B",
    primaryContainer: "#2A303A",
    onPrimaryContainer: "#C8D3DF",

    secondary: "#8A99A8",
    onSecondary: "#1E232B",
    secondaryContainer: "#2A303A",
    onSecondaryContainer: "#C8D3DF",

    tertiary: "#AAB8C5",
    onTertiary: "#1E232B",
    tertiaryContainer: "#2A303A",
    onTertiaryContainer: "#F0F4F8",

    background: "#4B5360",
    onBackground: "#F0F4F8",

    surface: "#373E49",
    onSurface: "#F0F4F8",
    surfaceVariant: "#2A303A",
    onSurfaceVariant: "#C8D3DF",
    surfaceDisabled: "rgba(240, 244, 248, 0.12)",

    error: "#F2B8B5",
    onError: "#601410",
    errorContainer: "#8C1D18",
    onErrorContainer: "#F9DEDC",

    /** "Siyah-gri kontrast kenarlık/gölge" isteği doğrudan outline'a taşındı. */
    outline: "#1E232B",
    outlineVariant: "#262B33",

    inverseSurface: "#F0F4F8",
    inverseOnSurface: "#2A303A",
    inversePrimary: "#5C6B7A",

    backdrop: "rgba(30, 35, 43, 0.75)",
  },
};

/** Leopar Glam — couture/glam: sıcak vizon/bej zemin, altın amber aksanlar,
 * espresso koyu metin. Zemin ve kartlara `LeopardPattern` ile hafif bir
 * leopar dokusu bindirilir (bkz. AmbientBackground, GlassCard). */
const leopardTheme: MD3Theme = {
  ...MD3DarkTheme,
  roundness: 16,
  colors: {
    ...MD3DarkTheme.colors,
    primary: "#D69AA0",
    onPrimary: "#FFFFFF",
    primaryContainer: "#4A2B30",
    onPrimaryContainer: "#EFC7CB",

    secondary: "#C98089",
    onSecondary: "#FFFFFF",
    secondaryContainer: "#3D242A",
    onSecondaryContainer: "#EFC7CB",

    tertiary: "#9C6066",
    onTertiary: "#FFFFFF",
    tertiaryContainer: "#3D242A",
    onTertiaryContainer: "#EFC7CB",

    background: "#1A1013",
    onBackground: "#F5EAEA",

    surface: "#26161A",
    onSurface: "#F5EAEA",
    surfaceVariant: "#331E22",
    onSurfaceVariant: "#C9A8AC",

    surfaceDisabled: "rgba(245, 234, 234, 0.12)",

    error: "#F2B8B5",
    onError: "#601410",
    errorContainer: "#8C1D18",
    onErrorContainer: "#F9DEDC",

    outline: "#5C3A40",
    outlineVariant: "#4A2B30",

    inverseSurface: "#F5EAEA",
    inverseOnSurface: "#26161A",
    inversePrimary: "#9C6066",

    backdrop: "rgba(10, 6, 7, 0.65)",
  },
};

export const THEMES: Record<ThemeId, MD3Theme> = {
  leopard: leopardTheme,
  "nude-rose-gold": nudeRoseGoldTheme,
  "emerald-champagne": emeraldChampagneTheme,
  "titanium-graphite": titaniumGraphiteTheme,
};
