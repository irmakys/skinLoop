import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { Pressable, ScrollView, View } from "react-native";
import { Text, useTheme } from "react-native-paper";

import {
  THEME_DESCRIPTIONS_TR,
  THEME_LABELS_TR,
  THEME_PREVIEW_SWATCHES,
  type ThemeId,
} from "@/theme/theme";
import { useAppTheme } from "@/theme/ThemeContext";

const THEME_IDS: ThemeId[] = [
  "soft-peach",
  "earthy-beige",
  "cloud-blue",
  "sage-fresh",
  "crimson-velvet",
  "deep-dark",
];

function ThemeCircle({ themeId, selected }: { themeId: ThemeId; selected: boolean }) {
  const theme = useTheme();
  const [background, primary, accent] = THEME_PREVIEW_SWATCHES[themeId];
  const size = 56;

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
      }}
    >
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

export function ThemePicker() {
  const theme = useTheme();
  const { themeId, setThemeId } = useAppTheme();

  return (
    <View style={{ gap: 12 }}>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ gap: 16, paddingHorizontal: 16, paddingVertical: 4 }}
      >
        {THEME_IDS.map((id) => {
          const selected = id === themeId;
          return (
            <Pressable
              key={id}
              onPress={() => setThemeId(id)}
              style={{ alignItems: "center", gap: 6, width: 72 }}
            >
              <ThemeCircle themeId={id} selected={selected} />
              <Text
                variant="labelSmall"
                numberOfLines={2}
                style={{
                  textAlign: "center",
                  fontWeight: selected ? "700" : "400",
                  color: selected ? theme.colors.primary : theme.colors.onSurfaceVariant,
                }}
              >
                {THEME_LABELS_TR[id]}
              </Text>
            </Pressable>
          );
        })}
      </ScrollView>

      <Text variant="bodySmall" style={{ color: theme.colors.onSurfaceVariant, paddingHorizontal: 16 }}>
        {THEME_DESCRIPTIONS_TR[themeId]}
      </Text>
    </View>
  );
}
