import type { LocaleId } from "@/i18n/locales";
import { de } from "@/i18n/translations/de";
import { en } from "@/i18n/translations/en";
import { es } from "@/i18n/translations/es";
import { fr } from "@/i18n/translations/fr";
import { ko } from "@/i18n/translations/ko";
import { ru } from "@/i18n/translations/ru";
import { tr, type Translations } from "@/i18n/translations/tr";
import { zh } from "@/i18n/translations/zh";

export type { Translations };

export const TRANSLATIONS: Record<LocaleId, Translations> = { tr, en, es, de, fr, ko, ru, zh };
