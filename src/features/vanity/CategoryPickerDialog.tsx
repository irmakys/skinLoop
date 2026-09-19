import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { View } from "react-native";
import { Dialog, Portal, Text, TouchableRipple, useTheme } from "react-native-paper";

import { CATEGORIES, CATEGORY_ICONS, CATEGORY_LABELS_TR, type Category } from "@/constants/categories";

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

  return (
    <Portal>
      <Dialog visible={visible} onDismiss={onDismiss}>
        <Dialog.Title>Kategori Seç</Dialog.Title>
        <Dialog.Content style={{ gap: 2, paddingHorizontal: 0 }}>
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
                      fontWeight: selected ? "700" : "400",
                      color: selected ? theme.colors.onPrimaryContainer : theme.colors.onSurface,
                    }}
                  >
                    {CATEGORY_LABELS_TR[category]}
                  </Text>
                  {selected ? (
                    <MaterialCommunityIcons name="check" size={18} color={theme.colors.onPrimaryContainer} />
                  ) : null}
                </View>
              </TouchableRipple>
            );
          })}
        </Dialog.Content>
      </Dialog>
    </Portal>
  );
}
