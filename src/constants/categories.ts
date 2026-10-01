import type * as React from "react";

import type { TranslationKey } from "@/i18n/LocaleContext";

export const CATEGORIES = [
  "cleanser",
  "toner",
  "serum",
  "moisturizer",
  "spf",
  "eye-care",
  "hair-care",
  "body-care",
  "other",
] as const;

export type Category = (typeof CATEGORIES)[number];

/** Kategori adları artık i18n anahtarı — UI'da `t(CATEGORY_LABEL_KEYS[category])` ile çevrilir. */
export const CATEGORY_LABEL_KEYS: Record<Category, TranslationKey> = {
  cleanser: "categories.cleanser",
  toner: "categories.toner",
  serum: "categories.serum",
  moisturizer: "categories.moisturizer",
  spf: "categories.spf",
  "eye-care": "categories.eyeCare",
  "hair-care": "categories.hairCare",
  "body-care": "categories.bodyCare",
  other: "categories.other",
};

type MaterialCommunityIconName = React.ComponentProps<
  typeof import("@expo/vector-icons/MaterialCommunityIcons").default
>["name"];

/** MaterialCommunityIcons adları — kategori kartlarında küçük simge olarak kullanılır. */
export const CATEGORY_ICONS: Record<Category, MaterialCommunityIconName> = {
  cleanser: "water-outline",
  toner: "spray-bottle",
  serum: "eyedropper-variant",
  moisturizer: "lotion-outline",
  spf: "weather-sunny",
  "eye-care": "eye-outline",
  "hair-care": "hair-dryer",
  "body-care": "hand-heart-outline",
  other: "dots-horizontal-circle-outline",
};
