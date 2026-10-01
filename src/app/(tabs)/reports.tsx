import { api } from "@convex/_generated/api";
import { useQuery } from "convex/react";
import { useMemo, useState } from "react";
import { ScrollView, View } from "react-native";
import { BarChart } from "react-native-gifted-charts";
import { SegmentedButtons, Text, useTheme } from "react-native-paper";

import { AmbientBackground } from "@/components/AmbientBackground";
import { GlassCard } from "@/components/GlassCard";
import { useBottomClearance } from "@/hooks/useBottomClearance";
import { useLocale } from "@/i18n/LocaleContext";
import { SHORT_WEEKDAY_SUNDAY_FIRST_KEYS, toDayKey } from "@/lib/dateKeys";
import { FONT_DISPLAY_BOLD } from "@/theme/fonts";

type Range = "week" | "month";

function lastNDays(n: number): Date[] {
  const today = new Date();
  return Array.from({ length: n }, (_, index) => {
    const date = new Date(today);
    date.setDate(today.getDate() - (n - 1 - index));
    return date;
  });
}

function StatTile({ label, value, color }: { label: string; value: string | number; color: string }) {
  const theme = useTheme();
  return (
    <GlassCard padding={18} style={{ flex: 1, alignItems: "center", gap: 2 }}>
      <Text style={{ fontFamily: FONT_DISPLAY_BOLD, fontSize: 26, letterSpacing: -0.4, color }}>
        {value}
      </Text>
      <Text
        style={{
          fontSize: 10.5,
          fontWeight: "600",
          letterSpacing: 0.3,
          color: theme.colors.onSurfaceVariant,
          textAlign: "center",
          marginTop: 2,
        }}
      >
        {label}
      </Text>
    </GlassCard>
  );
}

/**
 * Rutin uyumunu grafiklerle gösteren rapor ekranı — Ayarlar'daki "Rutin
 * Raporu" butonundan açılır. Yalnızca zaten var olan `loopStepCompletions`
 * verisini (Haftalık Uyum Skoru'nda da kullanılan aynı kaynak) haftalık/
 * aylık gruplayarak görselleştirir, yeni bir veri modeli gerekmez.
 */
export default function ReportsScreen() {
  const theme = useTheme();
  const { t } = useLocale();
  const bottomClearance = useBottomClearance();
  const [range, setRange] = useState<Range>("week");

  const days = useMemo(() => lastNDays(range === "week" ? 7 : 28), [range]);
  const startDayKey = toDayKey(days[0]);
  const endDayKey = toDayKey(days[days.length - 1]);

  const completions = useQuery(api.loops.listCompletionsInRange, { startDayKey, endDayKey });

  const chartData = useMemo(() => {
    if (!completions) {
      return [];
    }
    const counts = new Map<string, number>();
    for (const completion of completions) {
      counts.set(completion.dayKey, (counts.get(completion.dayKey) ?? 0) + 1);
    }

    if (range === "week") {
      return days.map((date) => ({
        value: counts.get(toDayKey(date)) ?? 0,
        label: t(SHORT_WEEKDAY_SUNDAY_FIRST_KEYS[date.getDay()]),
        frontColor: theme.colors.primary,
      }));
    }

    // Aylık görünüm: 28 günü 4 haftalık kovaya toplayarak 4 çubukla gösterir.
    const buckets = [0, 0, 0, 0];
    days.forEach((date, index) => {
      const bucketIndex = Math.min(3, Math.floor(index / 7));
      buckets[bucketIndex] += counts.get(toDayKey(date)) ?? 0;
    });
    return buckets.map((value, index) => ({
      value,
      label: t("reports.weekLabel", { number: index + 1 }),
      frontColor: theme.colors.primary,
    }));
  }, [completions, days, range, theme.colors.primary, t]);

  const total = chartData.reduce((sum, item) => sum + item.value, 0);
  const best = chartData.reduce((max, item) => Math.max(max, item.value), 0);
  const average = chartData.length > 0 ? (total / chartData.length).toFixed(1) : "0";

  return (
    <AmbientBackground>
      <ScrollView contentContainerStyle={{ padding: 20, paddingBottom: bottomClearance, gap: 20 }}>
        <SegmentedButtons
          value={range}
          onValueChange={(value) => setRange(value as Range)}
          buttons={[
            { value: "week", label: t("reports.thisWeek") },
            { value: "month", label: t("reports.thisMonth") },
          ]}
        />

        <GlassCard padding={22}>
          <Text style={{ fontFamily: FONT_DISPLAY_BOLD, fontSize: 19, color: theme.colors.onSurface, marginBottom: 18 }}>
            {range === "week" ? t("reports.dailyCompletion") : t("reports.weeklyCompletion")}
          </Text>
          {completions === undefined ? (
            <Text style={{ color: theme.colors.onSurfaceVariant }}>{t("reports.loading")}</Text>
          ) : (
            <BarChart
              data={chartData}
              barWidth={range === "week" ? 26 : 40}
              spacing={range === "week" ? 20 : 28}
              roundedTop
              hideRules
              xAxisThickness={0}
              yAxisThickness={0}
              yAxisTextStyle={{ color: theme.colors.onSurfaceVariant, fontSize: 11 }}
              xAxisLabelTextStyle={{ color: theme.colors.onSurfaceVariant, fontSize: 11 }}
              noOfSections={4}
              maxValue={Math.max(best, 4)}
              isAnimated
            />
          )}
        </GlassCard>

        <View style={{ flexDirection: "row", gap: 14 }}>
          <StatTile label={t("reports.totalCompletions")} value={total} color={theme.colors.primary} />
          <StatTile
            label={range === "week" ? t("reports.bestDay") : t("reports.bestWeek")}
            value={best}
            color={theme.colors.tertiary}
          />
          <StatTile label={t("reports.average")} value={average} color={theme.colors.secondary} />
        </View>
      </ScrollView>
    </AmbientBackground>
  );
}
