import { useMemo, useState } from "react";
import { Pressable, View } from "react-native";
import { IconButton, Text, useTheme } from "react-native-paper";
import { useQuery } from "convex/react";

import { AppDialog } from "@/components/AppDialog";
import { api } from "@convex/_generated/api";
import { useLocale } from "@/i18n/LocaleContext";
import {
  MONTH_KEYS,
  WEEKDAY_KEYS,
  getMonthGridDates,
  isSameDay,
  isSameMonth,
  toDayKey,
} from "@/lib/dateKeys";

type MonthCalendarDialogProps = {
  visible: boolean;
  selectedDate: Date;
  onDismiss: () => void;
  onSelectDate: (date: Date) => void;
};

/**
 * Planlayıcı'nın haftalık şeridinden ayrı, ay görünümlü takvim seçici.
 * Rutin adımı tamamlanan günler altlarında küçük bir nokta ile işaretlenir.
 */
export function MonthCalendarDialog({ visible, selectedDate, onDismiss, onSelectDate }: MonthCalendarDialogProps) {
  const theme = useTheme();
  const { t } = useLocale();
  const [viewedMonth, setViewedMonth] = useState(() => new Date(selectedDate));

  const gridDates = useMemo(() => getMonthGridDates(viewedMonth), [viewedMonth]);
  const monthStartKey = toDayKey(gridDates[0]);
  const monthEndKey = toDayKey(gridDates[gridDates.length - 1]);

  const completions = useQuery(
    api.loops.listCompletionsInRange,
    visible ? { startDayKey: monthStartKey, endDayKey: monthEndKey } : "skip",
  );

  const markedDayKeys = useMemo(
    () => new Set((completions ?? []).map((completion) => completion.dayKey)),
    [completions],
  );

  const today = new Date();

  function goToPreviousMonth() {
    setViewedMonth((current) => new Date(current.getFullYear(), current.getMonth() - 1, 1));
  }

  function goToNextMonth() {
    setViewedMonth((current) => new Date(current.getFullYear(), current.getMonth() + 1, 1));
  }

  return (
    <AppDialog visible={visible} onDismiss={onDismiss} contentGap={8}>
      <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between" }}>
        <IconButton icon="chevron-left" onPress={goToPreviousMonth} />
        <Text variant="titleMedium" style={{ fontWeight: "700" }}>
          {t(MONTH_KEYS[viewedMonth.getMonth()])} {viewedMonth.getFullYear()}
        </Text>
        <IconButton icon="chevron-right" onPress={goToNextMonth} />
      </View>

      <View style={{ flexDirection: "row" }}>
        {WEEKDAY_KEYS.map((key) => (
          <View key={key} style={{ flex: 1, alignItems: "center", paddingVertical: 4 }}>
            <Text variant="labelSmall" style={{ color: theme.colors.onSurfaceVariant }}>
              {t(key)}
            </Text>
          </View>
        ))}
      </View>

      <View style={{ flexDirection: "row", flexWrap: "wrap" }}>
        {gridDates.map((date) => {
          const inMonth = isSameMonth(date, viewedMonth);
          const isToday = isSameDay(date, today);
          const isSelected = isSameDay(date, selectedDate);
          const hasMark = markedDayKeys.has(toDayKey(date));

          return (
            <Pressable
              key={date.toISOString()}
              onPress={() => {
                onSelectDate(date);
                onDismiss();
              }}
              style={{ width: `${100 / 7}%`, alignItems: "center", paddingVertical: 6 }}
            >
              <View
                style={{
                  width: 32,
                  height: 32,
                  borderRadius: 16,
                  alignItems: "center",
                  justifyContent: "center",
                  backgroundColor: isSelected ? theme.colors.primary : "transparent",
                  borderWidth: isToday && !isSelected ? 1 : 0,
                  borderColor: theme.colors.primary,
                }}
              >
                <Text
                  style={{
                    fontSize: 13,
                    fontWeight: isSelected || isToday ? "700" : "400",
                    color: isSelected
                      ? theme.colors.onPrimary
                      : inMonth
                        ? theme.colors.onSurface
                        : theme.colors.outline,
                  }}
                >
                  {date.getDate()}
                </Text>
              </View>
              <View
                style={{
                  width: 4,
                  height: 4,
                  borderRadius: 2,
                  marginTop: 2,
                  backgroundColor: hasMark ? theme.colors.tertiary : "transparent",
                }}
              />
            </Pressable>
          );
        })}
      </View>
    </AppDialog>
  );
}
