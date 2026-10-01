import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { View } from "react-native";
import { Text, TouchableRipple, useTheme } from "react-native-paper";

import { AppDialog } from "@/components/AppDialog";
import { CATEGORIES, CATEGORY_ICONS, CATEGORY_LABEL_KEYS, type Category } from "@/constants/categories";
import { useLocale } from "@/i18n/LocaleContext";

type CategoryPickerDialogProps = {
  visible: boolean;
  value: Category;
  onDismiss: () => void;
  onSelect: (category: Category) => void;
};

/**
 * Kategori seçimi için Dialog tabanlı liste. react-native-paper'ın anchor'lı
 * Menu bileşeni bazı cihazlarda dokunuşa tepki vermediği için (bkz. Vanity
 * "Diğer" kategori butonu hata raporu), daha güvenilir bir Portal+Dialog
 * yaklaşımı kullanılıyor.
 */
export function CategoryPickerDialog({ visible, value, onDismiss, onSelect }: CategoryPickerDialogProps) {
  const theme = useTheme();
  const { t } = useLocale();

  return (
    <AppDialog
      visible={visible}
      onDismiss={onDismiss}
      title={t("vanity.categoryPickerTitle")}
      contentGap={2}
      contentPaddingHorizontal={0}
    >
      {CATEGORIES.map((category) => {
        const selected = category === value;
        return (
          <TouchableRipple
            key={category}
            onPress={() => {
              onSelect(category);
              onDismiss();
            }}
          >
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                gap: 12,
                paddingHorizontal: 24,
                paddingVertical: 12,
                backgroundColor: selected ? theme.colors.primaryContainer : "transparent",
              }}
            >
              <MaterialCommunityIcons
                name={CATEGORY_ICONS[category]}
                size={20}
                color={selected ? theme.colors.onPrimaryContainer : theme.colors.onSurfaceVariant}
              />
              <Text
                style={{
                  flex: 1,
                  flexShrink: 1,
                  fontWeight: selected ? "700" : "400",
                  color: selected ? theme.colors.onPrimaryContainer : theme.colors.onSurface,
                }}
              >
                {t(CATEGORY_LABEL_KEYS[category])}
              </Text>
              {selected ? (
                <MaterialCommunityIcons name="check" size={18} color={theme.colors.onPrimaryContainer} />
              ) : null}
            </View>
          </TouchableRipple>
        );
      })}
    </AppDialog>
  );
}
