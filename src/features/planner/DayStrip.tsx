import { Pressable, View } from "react-native";
import { Text, useTheme } from "react-native-paper";

import { WEEKDAY_LABELS_TR, isSameDay } from "@/lib/dateKeys";

type DayStripProps = {
  weekDates: Date[];
  selectedDate: Date;
  onSelect: (date: Date) => void;
};

export function DayStrip({ weekDates, selectedDate, onSelect }: DayStripProps) {
  const theme = useTheme();
  const today = new Date();

  return (
    <View style={{ flexDirection: "row", justifyContent: "space-between", paddingHorizontal: 12 }}>
      {weekDates.map((date, index) => {
        const selected = isSameDay(date, selectedDate);
        const isToday = isSameDay(date, today);

        return (
          <Pressable
            key={date.toISOString()}
            onPress={() => onSelect(date)}
            style={{
              alignItems: "center",
              justifyContent: "center",
              gap: 4,
              paddingVertical: 8,
              paddingHorizontal: 6,
              borderRadius: 14,
              minWidth: 40,
              backgroundColor: selected ? theme.colors.primary : "transparent",
            }}
          >
            <Text
              variant="labelSmall"
              style={{ color: selected ? theme.colors.onPrimary : theme.colors.onSurfaceVariant }}
            >
              {WEEKDAY_LABELS_TR[index]}
            </Text>
            <Text
              variant="titleMedium"
              style={{
                fontWeight: "700",
                color: selected
                  ? theme.colors.onPrimary
                  : isToday
                    ? theme.colors.primary
                    : theme.colors.onSurface,
              }}
            >
              {date.getDate()}
            </Text>
          </Pressable>
        );
      })}
    </View>
  );
}
