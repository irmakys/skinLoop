import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { useMutation, useQuery } from "convex/react";
import { useMemo, useState } from "react";
import { ScrollView, View } from "react-native";
import {
  Card,
  Checkbox,
  Chip,
  IconButton,
  ProgressBar,
  Switch,
  Text,
  useTheme,
} from "react-native-paper";

import { api } from "@convex/_generated/api";
import type { Doc, Id } from "@convex/_generated/dataModel";
import { DayStrip } from "@/features/planner/DayStrip";
import { MonthCalendarDialog } from "@/features/planner/MonthCalendarDialog";
import { getWeekDates, toDayKey } from "@/lib/dateKeys";

type LoopWithSteps = Doc<"loops"> & { steps: Doc<"loopSteps">[] };

const LOOP_TYPE_LABELS_TR: Record<string, string> = {
  morning: "Sabah Rutini",
  evening: "Akşam Rutini",
  weekly: "Haftalık",
  monthly: "Aylık",
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
  const steps = lazyMode ? loop.steps.filter((step) => !step.isOptional) : loop.steps;

  if (steps.length === 0) {
    return null;
  }

  return (
    <Card mode="elevated" style={{ borderRadius: 16 }}>
      <Card.Content style={{ gap: 4 }}>
        <View style={{ flexDirection: "row", alignItems: "center", gap: 8 }}>
          <Text variant="titleMedium" style={{ fontWeight: "700", flex: 1 }}>
            {loop.name}
          </Text>
          <Chip compact style={{ backgroundColor: theme.colors.secondaryContainer }} textStyle={{ fontSize: 11 }}>
            {LOOP_TYPE_LABELS_TR[loop.type]}
          </Chip>
        </View>

        {steps.map((step, index) => {
          const product = productsById.get(step.productId);
          const completed = completedStepIds.has(step._id);

          return (
            <View key={step._id} style={{ flexDirection: "row", alignItems: "center", gap: 4 }}>
              <Checkbox
                status={completed ? "checked" : "unchecked"}
                disabled={step.missingProduct}
                onPress={() => onToggleStep(step._id)}
              />
              <Text style={{ flex: 1 }} numberOfLines={1}>
                {index + 1}. {step.missingProduct ? "Ürün eksik" : (product?.name ?? "…")}
              </Text>
              {step.isOptional ? (
                <Chip compact style={{ backgroundColor: theme.colors.surfaceVariant }} textStyle={{ fontSize: 10 }}>
                  Opsiyonel
                </Chip>
              ) : null}
            </View>
          );
        })}
      </Card.Content>
    </Card>
  );
}

export function DailyPlanner() {
  const theme = useTheme();
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
    <ScrollView style={{ backgroundColor: theme.colors.background }} contentContainerStyle={{ gap: 16, paddingBottom: 24 }}>
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
        <Card mode="elevated" style={{ marginHorizontal: 16, borderRadius: 16 }}>
          <Card.Content style={{ gap: 8 }}>
            <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
              <Text variant="titleMedium" style={{ fontWeight: "700" }}>
                Haftalık Uyum Skoru
              </Text>
              <Text variant="headlineSmall" style={{ color: theme.colors.primary, fontWeight: "700" }}>
                %{weeklyScore}
              </Text>
            </View>
            <ProgressBar progress={weeklyScore / 100} color={theme.colors.primary} style={{ borderRadius: 4 }} />
          </Card.Content>
        </Card>
      ) : null}
    </ScrollView>
  );
}
