import { LinearGradient } from "expo-linear-gradient";
import { Pressable, View } from "react-native";
import { Text, useTheme } from "react-native-paper";

import { useLocale } from "@/i18n/LocaleContext";
import { WEEKDAY_KEYS, isSameDay } from "@/lib/dateKeys";
import { THEME_GRADIENTS, glowShadow } from "@/theme/theme";
import { useAppTheme } from "@/theme/ThemeContext";

type DayStripProps = {
  weekDates: Date[];
  selectedDate: Date;
  onSelect: (date: Date) => void;
};

export function DayStrip({ weekDates, selectedDate, onSelect }: DayStripProps) {
  const theme = useTheme();
  const { themeId } = useAppTheme();
  const { t } = useLocale();
  const today = new Date();

  return (
    <View style={{ flexDirection: "row", justifyContent: "space-between", paddingHorizontal: 16, gap: 4 }}>
      {weekDates.map((date, index) => {
        const selected = isSameDay(date, selectedDate);
        const isToday = isSameDay(date, today);

        const pillStyle = {
          alignItems: "center" as const,
          justifyContent: "center" as const,
          gap: 4,
          paddingVertical: 8,
          paddingHorizontal: 6,
          borderRadius: 16,
          minWidth: 44,
          minHeight: 52,
        };

        const dayContent = (
          <>
            <Text
              variant="labelSmall"
              style={{ color: selected ? "#FFFFFF" : theme.colors.onSurfaceVariant }}
            >
              {t(WEEKDAY_KEYS[index])}
            </Text>
            <Text
              variant="titleMedium"
              style={{
                fontWeight: "700",
                color: selected
                  ? "#FFFFFF"
                  : isToday
                    ? theme.colors.primary
                    : theme.colors.onSurface,
              }}
            >
              {date.getDate()}
            </Text>
          </>
        );

        if (selected) {
          return (
            <Pressable
              key={date.toISOString()}
              onPress={() => onSelect(date)}
              hitSlop={{ top: 4, bottom: 4, left: 2, right: 2 }}
              style={({ pressed }) => [
                glowShadow(THEME_GRADIENTS[themeId][1], 0.4),
                { opacity: pressed ? 0.75 : 1 },
              ]}
            >
              <LinearGradient
                colors={THEME_GRADIENTS[themeId]}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 1 }}
                style={[pillStyle, { overflow: "hidden" }]}
              >
                {/* Üstte hafif ışık yansıması — cam yüzeyde parıldayan bir sheen hissi */}
                <View
                  pointerEvents="none"
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    right: 0,
                    height: "50%",
                    backgroundColor: "rgba(255,255,255,0.16)",
                  }}
                />
                {dayContent}
              </LinearGradient>
            </Pressable>
          );
        }

        return (
          <Pressable
            key={date.toISOString()}
            onPress={() => onSelect(date)}
            hitSlop={{ top: 4, bottom: 4, left: 2, right: 2 }}
            style={({ pressed }) => [pillStyle, { opacity: pressed ? 0.6 : 1 }]}
          >
            {dayContent}
          </Pressable>
        );
      })}
    </View>
  );
}
