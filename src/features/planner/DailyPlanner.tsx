import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { useMutation, useQuery } from "convex/react";
import { LinearGradient } from "expo-linear-gradient";
import { useMemo, useState } from "react";
import type * as React from "react";
import { Pressable, ScrollView, View } from "react-native";
import { Chip, IconButton, Switch, Text, useTheme } from "react-native-paper";

import { api } from "@convex/_generated/api";
import type { Doc, Id } from "@convex/_generated/dataModel";
import { CircularProgress } from "@/components/CircularProgress";
import { GlassCard } from "@/components/GlassCard";
import { DayStrip } from "@/features/planner/DayStrip";
import { MonthCalendarDialog } from "@/features/planner/MonthCalendarDialog";
import { getWeekDates, toDayKey } from "@/lib/dateKeys";
import { FONT_DISPLAY_BOLD } from "@/theme/fonts";
import { PREMIUM_ACCENT, THEME_GRADIENTS, glowShadow, hexToRgba } from "@/theme/theme";
import { useAppTheme } from "@/theme/ThemeContext";
import { useBottomClearance } from "@/hooks/useBottomClearance";

type LoopWithSteps = Doc<"loops"> & { steps: Doc<"loopSteps">[] };

const LOOP_TYPE_LABELS_TR: Record<string, string> = {
  morning: "Sabah Rutini",
  evening: "Akşam Rutini",
  weekly: "Haftalık",
  monthly: "Aylık",
};

const LOOP_TYPE_ICONS: Record<string, React.ComponentProps<typeof MaterialCommunityIcons>["name"]> = {
  morning: "weather-sunny",
  evening: "weather-night",
  weekly: "calendar-week",
  monthly: "calendar-month-outline",
};

function LoopSection({
  loop,
  productsById,
  completedStepIds,
  lazyMode,
  onToggleStep,
}: {
  loop: LoopWithSteps;
  productsById: Map<Id<"products">, Doc<"products">>;
  completedStepIds: Set<string>;
  lazyMode: boolean;
  onToggleStep: (stepId: Id<"loopSteps">) => void;
}) {
  const theme = useTheme();
  const { themeId } = useAppTheme();
  const steps = lazyMode ? loop.steps.filter((step) => !step.isOptional) : loop.steps;

  if (steps.length === 0) {
    return null;
  }

  const doneCount = steps.filter((step) => completedStepIds.has(step._id)).length;

  return (
    <GlassCard padding={20} style={{ gap: 14 }}>
      <View style={{ flexDirection: "row", alignItems: "center", gap: 14 }}>
        <LinearGradient
          colors={THEME_GRADIENTS[themeId]}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
          style={{ width: 44, height: 44, borderRadius: 16, alignItems: "center", justifyContent: "center" }}
        >
          <MaterialCommunityIcons name={LOOP_TYPE_ICONS[loop.type]} size={22} color="#FFFFFF" />
        </LinearGradient>
        <View style={{ flex: 1 }}>
          <Text
            style={{ fontFamily: FONT_DISPLAY_BOLD, fontSize: 17, color: theme.colors.onSurface }}
            numberOfLines={1}
          >
            {loop.name}
          </Text>
          <Text variant="bodySmall" style={{ color: theme.colors.onSurfaceVariant }}>
            {LOOP_TYPE_LABELS_TR[loop.type]} · {doneCount}/{steps.length} tamamlandı
          </Text>
        </View>
      </View>

      <View style={{ gap: 6 }}>
        {steps.map((step, index) => {
          const product = productsById.get(step.productId);
          const completed = completedStepIds.has(step._id);

          return (
            <Pressable
              key={step._id}
              disabled={step.missingProduct}
              onPress={() => onToggleStep(step._id)}
              hitSlop={{ top: 4, bottom: 4, left: 4, right: 4 }}
              style={({ pressed }) => ({
                flexDirection: "row",
                alignItems: "center",
                gap: 10,
                paddingVertical: 10,
                paddingHorizontal: 10,
                borderRadius: 14,
                minHeight: 44,
                opacity: pressed ? 0.6 : 1,
                backgroundColor: completed ? hexToRgba(PREMIUM_ACCENT[0], 0.14) : "transparent",
              })}
            >
              {completed ? (
                <LinearGradient
                  colors={PREMIUM_ACCENT}
                  start={{ x: 0, y: 0 }}
                  end={{ x: 1, y: 1 }}
                  style={{
                    width: 24,
                    height: 24,
                    borderRadius: 12,
                    alignItems: "center",
                    justifyContent: "center",
                    ...glowShadow(PREMIUM_ACCENT[1], 0.5),
                  }}
                >
                  <MaterialCommunityIcons name="check" size={15} color="#FFFFFF" />
                </LinearGradient>
              ) : (
                <View
                  style={{
                    width: 24,
                    height: 24,
                    borderRadius: 12,
                    borderWidth: 1.5,
                    borderColor: theme.colors.outlineVariant,
                  }}
                />
              )}
              <Text
                style={{
                  flex: 1,
                  color: completed ? theme.colors.onSurfaceVariant : theme.colors.onSurface,
                  textDecorationLine: completed ? "line-through" : "none",
                }}
                numberOfLines={1}
              >
                {index + 1}. {step.missingProduct ? "Ürün eksik" : (product?.name ?? "…")}
              </Text>
              {step.isOptional ? (
                <Chip compact style={{ backgroundColor: theme.colors.surfaceVariant }} textStyle={{ fontSize: 10 }}>
                  Opsiyonel
                </Chip>
              ) : null}
            </Pressable>
          );
        })}
      </View>
    </GlassCard>
  );
}

function StatBox({
  icon,
  value,
  label,
}: {
  icon: React.ComponentProps<typeof MaterialCommunityIcons>["name"];
  value: string;
  label: string;
}) {
  const theme = useTheme();
  const { themeId } = useAppTheme();
  return (
    <GlassCard padding={18} style={{ flex: 1, gap: 2 }}>
      <LinearGradient
        colors={THEME_GRADIENTS[themeId]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={{
          width: 26,
          height: 26,
          borderRadius: 9,
          alignItems: "center",
          justifyContent: "center",
          marginBottom: 12,
        }}
      >
        <MaterialCommunityIcons name={icon} size={14} color="#FFFFFF" />
      </LinearGradient>
      <Text
        style={{
          fontFamily: FONT_DISPLAY_BOLD,
          fontSize: 28,
          letterSpacing: -0.4,
          lineHeight: 31,
          color: theme.colors.onSurface,
        }}
      >
        {value}
      </Text>
      <Text
        style={{
          fontSize: 10.5,
          fontWeight: "600",
          letterSpacing: 0.3,
          color: theme.colors.onSurfaceVariant,
          marginTop: 3,
        }}
        numberOfLines={2}
      >
        {label}
      </Text>
    </GlassCard>
  );
}

export function DailyPlanner() {
  const theme = useTheme();
  const bottomClearance = useBottomClearance();
  const [selectedDate, setSelectedDate] = useState(() => new Date());
  const [lazyMode, setLazyMode] = useState(false);
  const [monthCalendarVisible, setMonthCalendarVisible] = useState(false);

  const loops = useQuery(api.loops.listLoops);
  const products = useQuery(api.products.listProducts);
  const toggleCompletion = useMutation(api.loops.toggleStepCompletion);

  const weekDates = useMemo(() => getWeekDates(selectedDate), [selectedDate]);
  const weekStartKey = toDayKey(weekDates[0]);
  const weekEndKey = toDayKey(weekDates[6]);
  const selectedDayKey = toDayKey(selectedDate);

  const completionsInRange = useQuery(api.loops.listCompletionsInRange, {
    startDayKey: weekStartKey,
    endDayKey: weekEndKey,
  });

  const completedStepIdsForSelectedDay = useMemo(
    () =>
      new Set(
        (completionsInRange ?? [])
          .filter((completion) => completion.dayKey === selectedDayKey)
          .map((completion) => completion.stepId),
      ),
    [completionsInRange, selectedDayKey],
  );

  const productsById = useMemo(
    () => new Map((products ?? []).map((product) => [product._id, product])),
    [products],
  );

  const weeklyScore = useMemo(() => {
    if (!loops) {
      return null;
    }
    const totalPossible = loops.reduce((sum, loop) => sum + loop.steps.length, 0) * 7;
    const completed = completionsInRange?.length ?? 0;
    if (totalPossible === 0) {
      return null;
    }
    return Math.round((completed / totalPossible) * 100);
  }, [loops, completionsInRange]);

  if (loops === undefined) {
    return null;
  }

  const morningLoops = loops.filter((loop) => loop.type === "morning");
  const eveningLoops = loops.filter((loop) => loop.type === "evening");
  const otherLoops = loops.filter((loop) => loop.type === "weekly" || loop.type === "monthly");

  const todaysTotalSteps = loops.reduce((sum, loop) => sum + loop.steps.length, 0);
  const todaysCompletedSteps = completedStepIdsForSelectedDay.size;

  return (
    <ScrollView contentContainerStyle={{ gap: 24, paddingBottom: bottomClearance + 32 }}>
      <View style={{ paddingTop: 20, flexDirection: "row", alignItems: "center" }}>
        <View style={{ flex: 1 }}>
          <DayStrip weekDates={weekDates} selectedDate={selectedDate} onSelect={setSelectedDate} />
        </View>
        <IconButton
          icon="calendar-month-outline"
          size={22}
          onPress={() => setMonthCalendarVisible(true)}
        />
      </View>

      <MonthCalendarDialog
        visible={monthCalendarVisible}
        selectedDate={selectedDate}
        onDismiss={() => setMonthCalendarVisible(false)}
        onSelectDate={setSelectedDate}
      />

      <View style={{ flexDirection: "row", gap: 14, paddingHorizontal: 20 }}>
        <StatBox
          icon="check-circle-outline"
          value={`${todaysCompletedSteps}/${todaysTotalSteps}`}
          label="Bugünkü İlerleme"
        />
        <StatBox icon="calendar-check-outline" value={String(loops.length)} label="Aktif Rutin" />
        <StatBox icon="bottle-tonic-outline" value={String(products?.length ?? 0)} label="Ürün Sayısı" />
      </View>

      <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between", paddingHorizontal: 20 }}>
        <View style={{ flexDirection: "row", alignItems: "center", gap: 8 }}>
          <MaterialCommunityIcons name="lightning-bolt-outline" size={20} color={theme.colors.primary} />
          <Text variant="labelLarge">Tembel Mod</Text>
        </View>
        <Switch value={lazyMode} onValueChange={setLazyMode} />
      </View>

      {loops.length === 0 ? (
        <View style={{ padding: 32, alignItems: "center", gap: 8 }}>
          <MaterialCommunityIcons name="calendar-blank-outline" size={40} color={theme.colors.outline} />
          <Text style={{ color: theme.colors.onSurfaceVariant }}>
            Henüz bir rutin oluşturulmadı. Rutinler sekmesinden başlayabilirsin.
          </Text>
        </View>
      ) : (
        <View style={{ paddingHorizontal: 20, gap: 16 }}>
          {morningLoops.map((loop) => (
            <LoopSection
              key={loop._id}
              loop={loop}
              productsById={productsById}
              completedStepIds={completedStepIdsForSelectedDay}
              lazyMode={lazyMode}
              onToggleStep={(stepId) => toggleCompletion({ stepId, dayKey: selectedDayKey })}
            />
          ))}
          {eveningLoops.map((loop) => (
            <LoopSection
              key={loop._id}
              loop={loop}
              productsById={productsById}
              completedStepIds={completedStepIdsForSelectedDay}
              lazyMode={lazyMode}
              onToggleStep={(stepId) => toggleCompletion({ stepId, dayKey: selectedDayKey })}
            />
          ))}
          {otherLoops.map((loop) => (
            <LoopSection
              key={loop._id}
              loop={loop}
              productsById={productsById}
              completedStepIds={completedStepIdsForSelectedDay}
              lazyMode={lazyMode}
              onToggleStep={(stepId) => toggleCompletion({ stepId, dayKey: selectedDayKey })}
            />
          ))}
        </View>
      )}

      {weeklyScore !== null ? (
        <GlassCard
          padding={22}
          accentColor={PREMIUM_ACCENT[1]}
          style={{ marginHorizontal: 20, flexDirection: "row", alignItems: "center", gap: 22 }}
        >
          <CircularProgress
            progress={weeklyScore / 100}
            color={PREMIUM_ACCENT}
            trackColor={theme.colors.surfaceVariant}
          >
            <Text style={{ fontFamily: FONT_DISPLAY_BOLD, fontSize: 23, color: theme.colors.onSurface }}>
              %{weeklyScore}
            </Text>
          </CircularProgress>
          <View style={{ flex: 1, gap: 5 }}>
            <Text style={{ fontFamily: FONT_DISPLAY_BOLD, fontSize: 20, color: theme.colors.onSurface }}>
              Haftalık Uyum Skoru
            </Text>
            <Text variant="bodySmall" style={{ color: theme.colors.onSurfaceVariant }}>
              Bu hafta tamamladığın adımların rutinlerine oranı.
            </Text>
          </View>
        </GlassCard>
      ) : null}
    </ScrollView>
  );
}
