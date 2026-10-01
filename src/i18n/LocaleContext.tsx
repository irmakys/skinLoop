import AsyncStorage from "@react-native-async-storage/async-storage";
import { createContext, useContext, useEffect, useMemo, useState, type ReactNode } from "react";

import { DEFAULT_LOCALE_ID, LOCALE_IDS, type LocaleId } from "@/i18n/locales";
import { TRANSLATIONS, type Translations } from "@/i18n/translations";

const LOCALE_STORAGE_KEY = "skinloop.localeId";

/** "tabs.planner" gibi noktalı yolları, iç içe Translations objesinin gerçek anahtarlarıyla sınırlar. */
type DotPath<T, Prefix extends string = ""> = {
  [K in keyof T & string]: T[K] extends string
    ? `${Prefix}${K}`
    : T[K] extends Record<string, unknown>
      ? DotPath<T[K], `${Prefix}${K}.`>
      : never;
}[keyof T & string];

export type TranslationKey = DotPath<Translations>;

export type TranslationParams = Record<string, string | number>;

function lookup(dictionary: Translations, key: TranslationKey): string | undefined {
  const value = key.split(".").reduce<unknown>((acc, segment) => {
    if (acc && typeof acc === "object" && segment in acc) {
      return (acc as Record<string, unknown>)[segment];
    }
    return undefined;
  }, dictionary);

  return typeof value === "string" ? value : undefined;
}

/**
 * Eksik çeviri koruması: seçili dilde anahtar bulunamazsa (`satisfies
 * Translations` bunu derleme zamanında engeller, ama çalışma zamanında yine
 * de savunma amaçlı) önce İngilizce, sonra Türkçe sözlüğe düşülür; ikisinde
 * de yoksa arayüz boş kalmasın diye ham anahtar döndürülür — asla `undefined`
 * veya boş string değil.
 */
function resolveKey(dictionaries: { active: Translations; en: Translations; tr: Translations }, key: TranslationKey): string {
  return lookup(dictionaries.active, key) ?? lookup(dictionaries.en, key) ?? lookup(dictionaries.tr, key) ?? key;
}

/** "{{name}}" yer tutucularını verilen değerlerle değiştirir. */
function interpolate(template: string, params?: TranslationParams): string {
  if (!params) {
    return template;
  }
  return template.replace(/\{\{(\w+)\}\}/g, (match, paramName: string) =>
    paramName in params ? String(params[paramName]) : match,
  );
}

type LocaleContextValue = {
  localeId: LocaleId;
  setLocaleId: (localeId: LocaleId) => void;
  isLoaded: boolean;
};

const LocaleContext = createContext<LocaleContextValue | null>(null);

/**
 * Uygulama dili sağlayıcısı — `ThemeContext.tsx`'teki tema kalıcılığı ile
 * birebir aynı desen: AsyncStorage'dan tek seferlik okuma, değişiklikte
 * hem state hem storage güncellemesi. Yalnızca statik UI metinleri (bkz.
 * src/i18n/translations) bu sistemden çevrilir; Convex'ten gelen ürün
 * adı/marka gibi dinamik içerik ASLA buradan geçmez, orijinal haliyle kalır.
 */
export function AppLocaleProvider({ children }: { children: ReactNode }) {
  const [localeId, setLocaleIdState] = useState<LocaleId>(DEFAULT_LOCALE_ID);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    AsyncStorage.getItem(LOCALE_STORAGE_KEY)
      .then((stored) => {
        if (stored && LOCALE_IDS.includes(stored as LocaleId)) {
          setLocaleIdState(stored as LocaleId);
        }
      })
      .finally(() => setIsLoaded(true));
  }, []);

  function setLocaleId(next: LocaleId) {
    setLocaleIdState(next);
    AsyncStorage.setItem(LOCALE_STORAGE_KEY, next).catch(() => {});
  }

  const value = useMemo(() => ({ localeId, setLocaleId, isLoaded }), [localeId, isLoaded]);

  return <LocaleContext.Provider value={value}>{children}</LocaleContext.Provider>;
}

export function useLocale() {
  const context = useContext(LocaleContext);
  if (!context) {
    throw new Error("useLocale, AppLocaleProvider içinde kullanılmalı.");
  }

  const dictionaries = { active: TRANSLATIONS[context.localeId], en: TRANSLATIONS.en, tr: TRANSLATIONS.tr };
  const t = (key: TranslationKey, params?: TranslationParams): string =>
    interpolate(resolveKey(dictionaries, key), params);

  return { ...context, t };
}
