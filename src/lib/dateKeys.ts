import type { TranslationKey } from "@/i18n/LocaleContext";

/** Yerel "YYYY-MM-DD" gün anahtarı — Planlayıcı'daki günlük tamamlanma kayıtları için. */
export function toDayKey(date: Date): string {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

/** Verilen tarihin içinde bulunduğu haftanın Pazartesi'sini döner. */
export function startOfWeek(date: Date): Date {
  const result = new Date(date);
  const jsWeekday = result.getDay(); // 0 = Pazar
  const daysSinceMonday = jsWeekday === 0 ? 6 : jsWeekday - 1;
  result.setDate(result.getDate() - daysSinceMonday);
  result.setHours(0, 0, 0, 0);
  return result;
}

/** Pazartesi'den başlayan 7 günlük hafta (Date dizisi). */
export function getWeekDates(anchorDate: Date): Date[] {
  const monday = startOfWeek(anchorDate);
  return Array.from({ length: 7 }, (_, index) => {
    const date = new Date(monday);
    date.setDate(monday.getDate() + index);
    return date;
  });
}

/** Pazartesi'den başlayan kısa gün adları — i18n anahtarı olarak; `t(WEEKDAY_KEYS[index])` ile çevrilir. */
export const WEEKDAY_KEYS: TranslationKey[] = [
  "dateKeys.mon",
  "dateKeys.tue",
  "dateKeys.wed",
  "dateKeys.thu",
  "dateKeys.fri",
  "dateKeys.sat",
  "dateKeys.sun",
];

export const MONTH_KEYS: TranslationKey[] = [
  "dateKeys.jan",
  "dateKeys.feb",
  "dateKeys.mar",
  "dateKeys.apr",
  "dateKeys.may",
  "dateKeys.jun",
  "dateKeys.jul",
  "dateKeys.aug",
  "dateKeys.sep",
  "dateKeys.oct",
  "dateKeys.nov",
  "dateKeys.dec",
];

/** `Date.getDay()` (0=Pazar) sırasına göre çok kısa gün adları — reports.tsx grafik eksen etiketleri için. */
export const SHORT_WEEKDAY_SUNDAY_FIRST_KEYS: TranslationKey[] = [
  "dateKeys.shortSun",
  "dateKeys.shortMon",
  "dateKeys.shortTue",
  "dateKeys.shortWed",
  "dateKeys.shortThu",
  "dateKeys.shortFri",
  "dateKeys.shortSat",
];

export function isSameDay(a: Date, b: Date): boolean {
  return toDayKey(a) === toDayKey(b);
}

export function isSameMonth(a: Date, b: Date): boolean {
  return a.getFullYear() === b.getFullYear() && a.getMonth() === b.getMonth();
}

/** Ay takvimi için Pazartesi başlangıçlı, tam haftalara tamamlanmış 6 haftalık (42 günlük) grid. */
export function getMonthGridDates(anchorDate: Date): Date[] {
  const firstOfMonth = new Date(anchorDate.getFullYear(), anchorDate.getMonth(), 1);
  const gridStart = startOfWeek(firstOfMonth);
  return Array.from({ length: 42 }, (_, index) => {
    const date = new Date(gridStart);
    date.setDate(gridStart.getDate() + index);
    return date;
  });
}
