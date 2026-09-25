import { api } from "@convex/_generated/api";
import { useQuery } from "convex/react";
import { useMemo, useState } from "react";
import { ScrollView, View } from "react-native";
import { BarChart } from "react-native-gifted-charts";
import { SegmentedButtons, Text, useTheme } from "react-native-paper";

import { AmbientBackground } from "@/components/AmbientBackground";
import { useBottomClearance } from "@/hooks/useBottomClearance";
import { toDayKey } from "@/lib/dateKeys";
import { FONT_DISPLAY_BOLD } from "@/theme/fonts";
import { CARD_RADIUS, CARD_SHADOW } from "@/theme/theme";

type Range = "week" | "month";

/** `Date.getDay()` (0=Pazar) sırasına göre kısa Türkçe gün etiketleri. */
const SHORT_WEEKDAY_TR = ["Pz", "Pt", "Sa", "Ça", "Pe", "Cu", "Ct"];

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
    <View
      style={{
        flex: 1,
        backgroundColor: theme.colors.surface,
        borderRadius: CARD_RADIUS,
        padding: 14,
        alignItems: "center",
        gap: 4,
        ...CARD_SHADOW,
      }}
    >
      <Text style={{ fontFamily: FONT_DISPLAY_BOLD, fontSize: 22, color }}>{value}</Text>
      <Text variant="labelSmall" style={{ color: theme.colors.onSurfaceVariant, textAlign: "center" }}>
        {label}
      </Text>
    </View>
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
        label: SHORT_WEEKDAY_TR[date.getDay()],
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
      label: `${index + 1}. Hf.`,
      frontColor: theme.colors.primary,
    }));
  }, [completions, days, range, theme.colors.primary]);

  const total = chartData.reduce((sum, item) => sum + item.value, 0);
  const best = chartData.reduce((max, item) => Math.max(max, item.value), 0);
  const average = chartData.length > 0 ? (total / chartData.length).toFixed(1) : "0";

  return (
    <AmbientBackground>
      <ScrollView contentContainerStyle={{ padding: 16, paddingBottom: bottomClearance, gap: 16 }}>
        <SegmentedButtons
          value={range}
          onValueChange={(value) => setRange(value as Range)}
          buttons={[
            { value: "week", label: "Bu Hafta" },
            { value: "month", label: "Bu Ay" },
          ]}
        />

        <View
          style={{
            backgroundColor: theme.colors.surface,
            borderRadius: CARD_RADIUS,
            padding: 20,
            ...CARD_SHADOW,
          }}
        >
          <Text style={{ fontFamily: FONT_DISPLAY_BOLD, fontSize: 18, color: theme.colors.onSurface, marginBottom: 16 }}>
            {range === "week" ? "Günlük Tamamlama" : "Haftalık Tamamlama"}
          </Text>
          {completions === undefined ? (
            <Text style={{ color: theme.colors.onSurfaceVariant }}>Yükleniyor…</Text>
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
        </View>

        <View style={{ flexDirection: "row", gap: 12 }}>
          <StatTile label="Toplam Tamamlama" value={total} color={theme.colors.primary} />
          <StatTile
            label={range === "week" ? "En İyi Gün" : "En İyi Hafta"}
            value={best}
            color={theme.colors.tertiary}
          />
          <StatTile label="Ortalama" value={average} color={theme.colors.secondary} />
        </View>
      </ScrollView>
    </AmbientBackground>
  );
}
