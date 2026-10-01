import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { useState } from "react";
import { Pressable, View } from "react-native";
import { Button, Text, useTheme } from "react-native-paper";

import { AppDialog } from "@/components/AppDialog";
import { LeopardPattern } from "@/components/LeopardPattern";
import { useLocale } from "@/i18n/LocaleContext";
import {
  LEOPARD_PATTERN_BORDER,
  LEOPARD_PATTERN_FILL,
  THEME_DESCRIPTION_KEYS,
  THEME_LABEL_KEYS,
  THEME_PREVIEW_SWATCHES,
  isPatternedTheme,
  type ThemeId,
} from "@/theme/theme";
import { useAppTheme } from "@/theme/ThemeContext";

const THEME_IDS: ThemeId[] = [
  "leopard",
  "nude-rose-gold",
  "emerald-champagne",
  "titanium-graphite",
];

function ThemeCircle({ themeId, selected, size = 56 }: { themeId: ThemeId; selected: boolean; size?: number }) {
  const theme = useTheme();
  const [background, primary, accent] = THEME_PREVIEW_SWATCHES[themeId];

  return (
    <View
      style={{
        width: size,
        height: size,
        borderRadius: size / 2,
        backgroundColor: background,
        borderWidth: selected ? 3 : 1,
        borderColor: selected ? theme.colors.primary : theme.colors.outline,
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
      }}
    >
      {isPatternedTheme(themeId) ? (
        <LeopardPattern
          borderColor={LEOPARD_PATTERN_BORDER}
          fillColor={LEOPARD_PATTERN_FILL}
          opacity={0.9}
          tileSize={34}
          style={{ position: "absolute", top: 0, left: 0, right: 0, bottom: 0 }}
        />
      ) : null}
      <View
        style={{
          position: "absolute",
          bottom: 5,
          right: 5,
          width: 16,
          height: 16,
          borderRadius: 8,
          backgroundColor: accent,
          borderWidth: 1,
          borderColor: background,
        }}
      />
      <View style={{ width: 24, height: 24, borderRadius: 12, backgroundColor: primary }} />
      {selected ? (
        <View
          style={{
            position: "absolute",
            top: -4,
            right: -4,
            backgroundColor: theme.colors.primary,
            borderRadius: 10,
            width: 20,
            height: 20,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <MaterialCommunityIcons name="check" size={14} color={theme.colors.onPrimary} />
        </View>
      ) : null}
    </View>
  );
}

/**
 * Ayarlar'da tema seçici — artık tüm temaları yan yana dizen bir şerit değil:
 * yalnızca AKTİF temanın küçük önizlemesi + adı gösterilir, yanında "Tema
 * Değiştir" butonu bulunur. Butona basılınca diğer 6 seçeneğin listelendiği
 * ayrı bir pencere (Dialog) açılır; seçim yapılınca pencere kendiliğinden kapanır.
 */
export function ThemePicker() {
  const theme = useTheme();
  const { themeId, setThemeId } = useAppTheme();
  const { t } = useLocale();
  const [pickerVisible, setPickerVisible] = useState(false);

  return (
    <View style={{ paddingHorizontal: 16, paddingBottom: 16, gap: 4 }}>
      <View style={{ flexDirection: "row", alignItems: "center", gap: 14 }}>
        <ThemeCircle themeId={themeId} selected={false} />
        <View style={{ flex: 1, gap: 2 }}>
          <Text variant="labelMedium" style={{ color: theme.colors.onSurfaceVariant }}>
            {t("settings.activeTheme")}
          </Text>
          <Text style={{ fontWeight: "700", color: theme.colors.onSurface }}>{t(THEME_LABEL_KEYS[themeId])}</Text>
        </View>
        <Button mode="contained-tonal" onPress={() => setPickerVisible(true)}>
          {t("settings.changeTheme")}
        </Button>
      </View>

      <AppDialog
        visible={pickerVisible}
        onDismiss={() => setPickerVisible(false)}
        title={t("settings.chooseTheme")}
        contentGap={12}
        contentPaddingHorizontal={16}
        actions={<Button onPress={() => setPickerVisible(false)}>{t("common.close")}</Button>}
      >
        <View style={{ width: "100%", flexDirection: "row", flexWrap: "wrap" }}>
          {THEME_IDS.map((id) => {
            const selected = id === themeId;
            return (
              <Pressable
                key={id}
                onPress={() => {
                  setThemeId(id);
                  setPickerVisible(false);
                }}
                style={{ alignItems: "center", gap: 6, width: "50%", paddingHorizontal: 4, paddingVertical: 10 }}
              >
                <ThemeCircle themeId={id} selected={selected} />
                <Text
                  variant="labelSmall"
                  numberOfLines={2}
                  style={{
                    width: "100%",
                    textAlign: "center",
                    fontWeight: selected ? "700" : "400",
                    color: selected ? theme.colors.primary : theme.colors.onSurfaceVariant,
                  }}
                >
                  {t(THEME_LABEL_KEYS[id])}
                </Text>
              </Pressable>
            );
          })}
        </View>

        <Text variant="bodySmall" style={{ color: theme.colors.onSurfaceVariant }}>
          {t(THEME_DESCRIPTION_KEYS[themeId])}
        </Text>
      </AppDialog>
    </View>
  );
}
