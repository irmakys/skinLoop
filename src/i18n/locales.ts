export type LocaleId = "tr" | "en" | "es" | "de" | "fr" | "ko" | "ru" | "zh";

export const DEFAULT_LOCALE_ID: LocaleId = "tr";

export const LOCALE_IDS: LocaleId[] = ["tr", "en", "es", "de", "fr", "ko", "ru", "zh"];

/** Dil seçici listesinde her dilin kendi alfabesiyle (native) adı — kullanıcı kendi dilini görsel olarak hemen tanır. */
export const LOCALE_NATIVE_LABELS: Record<LocaleId, string> = {
  tr: "Türkçe",
  en: "English",
  es: "Español",
  de: "Deutsch",
  fr: "Français",
  ko: "한국어",
  ru: "Русский",
  zh: "中文",
};

/** Dil seçici dairelerinde bayrak yerine kullanılan kısa kod. */
export const LOCALE_SHORT_CODES: Record<LocaleId, string> = {
  tr: "TR",
  en: "EN",
  es: "ES",
  de: "DE",
  fr: "FR",
  ko: "KO",
  ru: "RU",
  zh: "ZH",
};
