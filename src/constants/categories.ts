import type * as React from "react";

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

export const CATEGORY_LABELS_TR: Record<Category, string> = {
  cleanser: "Temizleyici",
  toner: "Tonik",
  serum: "Serum",
  moisturizer: "Nemlendirici",
  spf: "Güneş Koruyucu",
  "eye-care": "Göz Bakımı",
  "hair-care": "Saç Bakımı",
  "body-care": "Vücut Bakımı",
  other: "Diğer",
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
