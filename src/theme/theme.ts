import { MD3LightTheme, MD3DarkTheme, type MD3Theme } from "react-native-paper";

export type ThemeId =
  | "soft-peach"
  | "earthy-beige"
  | "cloud-blue"
  | "sage-fresh"
  | "crimson-velvet"
  | "deep-dark";

export const DEFAULT_THEME_ID: ThemeId = "soft-peach";

export const THEME_LABELS_TR: Record<ThemeId, string> = {
  "soft-peach": "Pudra & Şeftali",
  "earthy-beige": "Bej & Sıcak Casual",
  "cloud-blue": "Bebek Mavisi & Pastel Buz",
  "sage-fresh": "Adaçayı & Nane Yeşili",
  "crimson-velvet": "Bordo & Kırmızı Vurgulu",
  "deep-dark": "Derin Koyu Mod",
};

export const THEME_DESCRIPTIONS_TR: Record<ThemeId, string> = {
  "soft-peach": "Kirli beyaz zemin, pudra pembesi ve şeftali aksanlar.",
  "earthy-beige": "Sıcak yulaf/keten zemin, toprak ve vizon tonları.",
  "cloud-blue": "Açık buz mavisi zemin, gök mavisi ve pastel indigo aksanlar.",
  "sage-fresh": "Mentol/adaçayı zemin, taze nane ve okaliptüs tonları.",
  "crimson-velvet": "Krem zemin üzerinde derin bordo ve canlı mercan kırmızısı.",
  "deep-dark": "Gece mavisi/mat grafit zemin, neon indigo aksanlar.",
};

/** Ayarlar'daki yatay tema seçici daireleri için: [zemin, primary, ikincil vurgu]. */
export const THEME_PREVIEW_SWATCHES: Record<ThemeId, [string, string, string]> = {
  "soft-peach": ["#FDFBF9", "#E89A8A", "#D9776E"],
  "earthy-beige": ["#F7F4EE", "#A98F72", "#7C6349"],
  "cloud-blue": ["#F2F6FB", "#7EA0D6", "#5C7CFA"],
  "sage-fresh": ["#F1F6F3", "#7CA982", "#4F8B63"],
  "crimson-velvet": ["#F7F3EE", "#9E2A2B", "#E63946"],
  "deep-dark": ["#12141D", "#5C7CFA", "#8C7BF0"],
};

/** Kart tasarım dili: yüksek köşe yuvarlaklığı + yumuşak dağınık gölge (Structured ilhamı).
 * Değerler ui-ux-pro-max skill'inin "Soft UI Evolution" stil kılavuzuna göre kalibre
 * edildi: düz/keskin değil ama neumorphism kadar da ağır olmayan, geniş/dağınık/düşük
 * opaklıklı "premium float" gölgesi (bkz. design-system/skinloop/MASTER.md). */
export const CARD_RADIUS = 26;
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
  "soft-peach": ["#E6A08F", "#C9635A"],
  "earthy-beige": ["#B79A79", "#8F7455"],
  "cloud-blue": ["#7EA0D6", "#4863E0"],
  "sage-fresh": ["#7CA982", "#3D7350"],
  "crimson-velvet": ["#C33E44", "#7E2022"],
  "deep-dark": ["#6E5CE0", "#8C7BF0"],
};

/** Pudra & Şeftali — varsayılan tema. Kirli beyaz zemin, pudra pembesi/şeftali aksanlar. */
const softPeachTheme: MD3Theme = {
  ...MD3LightTheme,
  roundness: 16,
  colors: {
    ...MD3LightTheme.colors,
    primary: "#D9776E",
    onPrimary: "#FFFFFF",
    primaryContainer: "#F6DFDA",
    onPrimaryContainer: "#4A231E",

    secondary: "#E89A8A",
    onSecondary: "#FFFFFF",
    secondaryContainer: "#FAE6E0",
    onSecondaryContainer: "#4A2A23",

    tertiary: "#C9A876",
    onTertiary: "#FFFFFF",
    tertiaryContainer: "#F3E9D8",
    onTertiaryContainer: "#4A3B1F",

    background: "#FDFBF9",
    onBackground: "#3A3532",

    surface: "#FFFFFF",
    onSurface: "#3A3532",
    surfaceVariant: "#F5EDEA",
    onSurfaceVariant: "#6B615D",
    surfaceDisabled: "rgba(58, 53, 50, 0.12)",

    error: "#B3261E",
    onError: "#FFFFFF",
    errorContainer: "#F9DEDC",
    onErrorContainer: "#410E0B",

    outline: "#DDCFCA",
    outlineVariant: "#EBE1DD",

    inverseSurface: "#332F2A",
    inverseOnSurface: "#F7F1E7",
    inversePrimary: "#F6C4BB",

    backdrop: "rgba(58, 53, 50, 0.4)",
  },
};

/** Bej & Sıcak Casual — sıcak yulaf/keten zemin, toprak/vizon tonları. */
const earthyBeigeTheme: MD3Theme = {
  ...MD3LightTheme,
  roundness: 16,
  colors: {
    ...MD3LightTheme.colors,
    primary: "#A98F72",
    onPrimary: "#FFFFFF",
    primaryContainer: "#EAE0D2",
    onPrimaryContainer: "#3B2E1D",

    secondary: "#7C6349",
    onSecondary: "#FFFFFF",
    secondaryContainer: "#E3D6C4",
    onSecondaryContainer: "#332813",

    tertiary: "#8A9A7E",
    onTertiary: "#FFFFFF",
    tertiaryContainer: "#E1E8D9",
    onTertiaryContainer: "#2C3524",

    background: "#F7F4EE",
    onBackground: "#3A342C",

    surface: "#FCFAF6",
    onSurface: "#3A342C",
    surfaceVariant: "#ECE4D5",
    onSurfaceVariant: "#6B6459",

    surfaceDisabled: "rgba(58, 52, 44, 0.12)",

    error: "#B3261E",
    onError: "#FFFFFF",
    errorContainer: "#F9DEDC",
    onErrorContainer: "#410E0B",

    outline: "#D6C9B5",
    outlineVariant: "#E6DCC9",

    inverseSurface: "#332E26",
    inverseOnSurface: "#F7F1E7",
    inversePrimary: "#D5C4AC",

    backdrop: "rgba(58, 52, 44, 0.4)",
  },
};

/** Bebek Mavisi & Pastel Buz — ferah, temiz buz mavisi zemin. */
const cloudBlueTheme: MD3Theme = {
  ...MD3LightTheme,
  roundness: 16,
  colors: {
    ...MD3LightTheme.colors,
    primary: "#5C7CFA",
    onPrimary: "#FFFFFF",
    primaryContainer: "#DDE6FB",
    onPrimaryContainer: "#1B2A5C",

    secondary: "#7EA0D6",
    onSecondary: "#FFFFFF",
    secondaryContainer: "#E0EAF7",
    onSecondaryContainer: "#1F3350",

    tertiary: "#8C7BF0",
    onTertiary: "#FFFFFF",
    tertiaryContainer: "#E3DEFF",
    onTertiaryContainer: "#241A42",

    background: "#F2F6FB",
    onBackground: "#232A38",

    surface: "#FFFFFF",
    onSurface: "#232A38",
    surfaceVariant: "#E7EEF7",
    onSurfaceVariant: "#5A6779",

    surfaceDisabled: "rgba(35, 42, 56, 0.12)",

    error: "#B3261E",
    onError: "#FFFFFF",
    errorContainer: "#F9DEDC",
    onErrorContainer: "#410E0B",

    outline: "#C7D4E6",
    outlineVariant: "#DDE6F2",

    inverseSurface: "#232A38",
    inverseOnSurface: "#EAF2FA",
    inversePrimary: "#B4C4F7",

    backdrop: "rgba(35, 42, 56, 0.4)",
  },
};

/** Adaçayı & Nane Yeşili — mentol/adaçayı zemin, botanik his. */
const sageFreshTheme: MD3Theme = {
  ...MD3LightTheme,
  roundness: 16,
  colors: {
    ...MD3LightTheme.colors,
    primary: "#4F8B63",
    onPrimary: "#FFFFFF",
    primaryContainer: "#DBEBDE",
    onPrimaryContainer: "#173323",

    secondary: "#7CA982",
    onSecondary: "#FFFFFF",
    secondaryContainer: "#E1EDE2",
    onSecondaryContainer: "#22331F",

    tertiary: "#6FA8A0",
    onTertiary: "#FFFFFF",
    tertiaryContainer: "#DCEEEB",
    onTertiaryContainer: "#1B3532",

    background: "#F1F6F3",
    onBackground: "#28312B",

    surface: "#FBFDFB",
    onSurface: "#28312B",
    surfaceVariant: "#E4EEE5",
    onSurfaceVariant: "#5A695D",

    surfaceDisabled: "rgba(40, 49, 43, 0.12)",

    error: "#B3261E",
    onError: "#FFFFFF",
    errorContainer: "#F9DEDC",
    onErrorContainer: "#410E0B",

    outline: "#C4D6C7",
    outlineVariant: "#DDE9DE",

    inverseSurface: "#28312B",
    inverseOnSurface: "#EAF5EC",
    inversePrimary: "#A6D3AE",

    backdrop: "rgba(40, 49, 43, 0.4)",
  },
};

/** Bordo & Kırmızı Vurgulu — krem zemin üzerinde iddialı bordo/mercan aksanlar. */
const crimsonVelvetTheme: MD3Theme = {
  ...MD3LightTheme,
  roundness: 16,
  colors: {
    ...MD3LightTheme.colors,
    primary: "#9E2A2B",
    onPrimary: "#FFFFFF",
    primaryContainer: "#F4D9D9",
    onPrimaryContainer: "#3A0F10",

    secondary: "#E63946",
    onSecondary: "#FFFFFF",
    secondaryContainer: "#FBDBDD",
    onSecondaryContainer: "#410408",

    tertiary: "#B08968",
    onTertiary: "#FFFFFF",
    tertiaryContainer: "#F0E0D0",
    onTertiaryContainer: "#4A2F1C",

    background: "#F7F3EE",
    onBackground: "#332524",

    surface: "#FFFFFF",
    onSurface: "#332524",
    surfaceVariant: "#EFE1DE",
    onSurfaceVariant: "#6E5C5A",

    surfaceDisabled: "rgba(51, 37, 36, 0.12)",

    error: "#9E2A2B",
    onError: "#FFFFFF",
    errorContainer: "#F4D9D9",
    onErrorContainer: "#3A0F10",

    outline: "#DDC7C4",
    outlineVariant: "#EDDEDC",

    inverseSurface: "#332524",
    inverseOnSurface: "#FBEEEC",
    inversePrimary: "#E8A6A6",

    backdrop: "rgba(51, 37, 36, 0.4)",
  },
};

/** Derin Koyu Mod — mat gece mavisi/grafit zemin, neon indigo aksanlar. */
const deepDarkTheme: MD3Theme = {
  ...MD3DarkTheme,
  roundness: 16,
  colors: {
    ...MD3DarkTheme.colors,
    primary: "#5C7CFA",
    onPrimary: "#FFFFFF",
    primaryContainer: "#2B3466",
    onPrimaryContainer: "#DCE2FF",

    secondary: "#8C7BF0",
    onSecondary: "#FFFFFF",
    secondaryContainer: "#362F5C",
    onSecondaryContainer: "#E3DEFF",

    tertiary: "#7EA0D6",
    onTertiary: "#0F1A2E",
    tertiaryContainer: "#243352",
    onTertiaryContainer: "#D9E2F7",

    background: "#12141D",
    onBackground: "#E8E9F0",

    surface: "#1C202C",
    onSurface: "#E8E9F0",
    surfaceVariant: "#292E3D",
    onSurfaceVariant: "#B4B8C8",

    surfaceDisabled: "rgba(232, 233, 240, 0.12)",

    error: "#F2B8B5",
    onError: "#601410",
    errorContainer: "#8C1D18",
    onErrorContainer: "#F9DEDC",

    outline: "#474C5E",
    outlineVariant: "#343949",

    inverseSurface: "#E8E9F0",
    inverseOnSurface: "#1C202C",
    inversePrimary: "#3A4FA0",

    backdrop: "rgba(0, 0, 0, 0.6)",
  },
};

export const THEMES: Record<ThemeId, MD3Theme> = {
  "soft-peach": softPeachTheme,
  "earthy-beige": earthyBeigeTheme,
  "cloud-blue": cloudBlueTheme,
  "sage-fresh": sageFreshTheme,
  "crimson-velvet": crimsonVelvetTheme,
  "deep-dark": deepDarkTheme,
};
