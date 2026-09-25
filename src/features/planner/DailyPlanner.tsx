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
import { DayStrip } from "@/features/planner/DayStrip";
import { MonthCalendarDialog } from "@/features/planner/MonthCalendarDialog";
import { getWeekDates, toDayKey } from "@/lib/dateKeys";
import { FONT_DISPLAY_BOLD } from "@/theme/fonts";
import { CARD_RADIUS, ELEVATED_SHADOW, THEME_GRADIENTS, hexToRgba } from "@/theme/theme";
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
    <View
      style={{
        borderRadius: CARD_RADIUS,
        backgroundColor: theme.colors.surface,
        padding: 18,
        gap: 12,
        ...ELEVATED_SHADOW,
      }}
    >
      <View style={{ flexDirection: "row", alignItems: "center", gap: 12 }}>
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
              style={{
                flexDirection: "row",
                alignItems: "center",
                gap: 10,
                paddingVertical: 8,
                paddingHorizontal: 10,
                borderRadius: 14,
                backgroundColor: completed ? hexToRgba(THEME_GRADIENTS[themeId][0], 0.12) : "transparent",
              }}
            >
              <View
                style={{
                  width: 24,
                  height: 24,
                  borderRadius: 12,
                  alignItems: "center",
                  justifyContent: "center",
                  backgroundColor: completed ? THEME_GRADIENTS[themeId][1] : "transparent",
                  borderWidth: completed ? 0 : 1.5,
                  borderColor: theme.colors.outlineVariant,
                }}
              >
                {completed ? <MaterialCommunityIcons name="check" size={15} color="#FFFFFF" /> : null}
              </View>
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
    </View>
  );
}

export function DailyPlanner() {
  const theme = useTheme();
  const { themeId } = useAppTheme();
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

  return (
    <ScrollView contentContainerStyle={{ gap: 16, paddingBottom: bottomClearance + 24 }}>
      <View style={{ paddingTop: 16, flexDirection: "row", alignItems: "center" }}>
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

      <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between", paddingHorizontal: 16 }}>
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
        <View style={{ paddingHorizontal: 16, gap: 12 }}>
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
        <View
          style={{
            marginHorizontal: 16,
            borderRadius: CARD_RADIUS,
            backgroundColor: theme.colors.surface,
            padding: 20,
            flexDirection: "row",
            alignItems: "center",
            gap: 20,
            ...ELEVATED_SHADOW,
          }}
        >
          <CircularProgress
            progress={weeklyScore / 100}
            color={THEME_GRADIENTS[themeId]}
            trackColor={theme.colors.surfaceVariant}
          >
            <Text style={{ fontFamily: FONT_DISPLAY_BOLD, fontSize: 22, color: theme.colors.onSurface }}>
              %{weeklyScore}
            </Text>
          </CircularProgress>
          <View style={{ flex: 1, gap: 4 }}>
            <Text style={{ fontFamily: FONT_DISPLAY_BOLD, fontSize: 18, color: theme.colors.onSurface }}>
              Haftalık Uyum Skoru
            </Text>
            <Text variant="bodySmall" style={{ color: theme.colors.onSurfaceVariant }}>
              Bu hafta tamamladığın adımların rutinlerine oranı.
            </Text>
          </View>
        </View>
      ) : null}
    </ScrollView>
  );
}
