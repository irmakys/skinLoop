import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { useMutation, useQuery } from "convex/react";
import { useRouter } from "expo-router";
import { LinearGradient } from "expo-linear-gradient";
import type * as React from "react";
import { useState } from "react";
import { View } from "react-native";
import { Button, Card, Chip, IconButton, Text, useTheme } from "react-native-paper";

import { GlassCard } from "@/components/GlassCard";
import { api } from "@convex/_generated/api";
import type { Doc, Id } from "@convex/_generated/dataModel";
import { AddLoopStepDialog } from "@/features/loops/AddLoopStepDialog";
import { EditLoopReminderDialog, type EditableLoopReminder } from "@/features/loops/EditLoopReminderDialog";
import type { ReminderState } from "@/features/loops/ReminderTimeEditor";
import { cancelReminder } from "@/lib/notifications";
import { WEEKDAY_LABELS_TR } from "@/lib/dateKeys";
import { useAppTheme } from "@/theme/ThemeContext";
import { FONT_DISPLAY_BOLD } from "@/theme/fonts";
import { THEME_GRADIENTS, hexToRgba } from "@/theme/theme";

const LOOP_TYPE_LABELS_TR: Record<string, string> = {
  morning: "Sabah",
  evening: "Akşam",
  weekly: "Haftalık",
  monthly: "Aylık",
};

const LOOP_TYPE_ICONS: Record<string, React.ComponentProps<typeof MaterialCommunityIcons>["name"]> = {
  morning: "weather-sunny",
  evening: "weather-night",
  weekly: "calendar-week",
  monthly: "calendar-month-outline",
};

function pad2(value: number): string {
  return String(value).padStart(2, "0");
}

function reminderSummary(loop: {
  reminderEnabled?: boolean;
  reminderHour?: number;
  reminderMinute?: number;
  reminderWeekday?: number;
  reminderDay?: number;
  type: string;
}): string {
  if (!loop.reminderEnabled || loop.reminderHour === undefined || loop.reminderMinute === undefined) {
    return "Hatırlatıcı kapalı";
  }
  const time = `${pad2(loop.reminderHour)}:${pad2(loop.reminderMinute)}`;
  if (loop.type === "weekly" && loop.reminderWeekday !== undefined) {
    return `${WEEKDAY_LABELS_TR[loop.reminderWeekday]} ${time}`;
  }
  if (loop.type === "monthly" && loop.reminderDay !== undefined) {
    return `Ayın ${loop.reminderDay}. günü ${time}`;
  }
  return `Her gün ${time}`;
}

/**
 * Rutinler sekmesi — şablon yönetimi: oluşturma/silme, ürün ekleme/çıkarma
 * ve rutine özel hatırlatıcı saatini düzenleme. Günlük bazlı tamamlama
 * işaretleme Planlayıcı sekmesinde (bkz. features/planner/DailyPlanner.tsx).
 */
export function LoopRunner() {
  const theme = useTheme();
  const { themeId } = useAppTheme();
  const router = useRouter();
  const loops = useQuery(api.loops.listLoops);
  const products = useQuery(api.products.listProducts);
  const deleteLoop = useMutation(api.loops.deleteLoop);
  const removeLoopStep = useMutation(api.loops.removeLoopStep);

  const [addStepLoopId, setAddStepLoopId] = useState<Id<"loops"> | null>(null);
  const [editingReminderLoop, setEditingReminderLoop] = useState<EditableLoopReminder | null>(null);
  const [editingReminderInitialState, setEditingReminderInitialState] = useState<ReminderState | null>(null);

  if (loops === undefined) {
    return null;
  }

  if (loops.length === 0) {
    return (
      <View style={{ flex: 1, padding: 32, alignItems: "center", justifyContent: "center", gap: 8 }}>
        <MaterialCommunityIcons name="calendar-check-outline" size={40} color={theme.colors.outline} />
        <Text style={{ color: theme.colors.onSurfaceVariant }}>Henüz bir rutin oluşturulmadı.</Text>
      </View>
    );
  }

  const productsById = new Map((products ?? []).map((product) => [product._id, product]));

  async function handleDeleteLoop(loopId: Id<"loops">, reminderNotificationId?: string) {
    if (reminderNotificationId) {
      await cancelReminder(reminderNotificationId);
    }
    await deleteLoop({ loopId });
  }

  function openReminderEditor(loop: Doc<"loops"> & { steps: Doc<"loopSteps">[] }) {
    setEditingReminderLoop({
      _id: loop._id,
      name: loop.name,
      type: loop.type,
      reminderNotificationId: loop.reminderNotificationId,
    });
    setEditingReminderInitialState({
      enabled: loop.reminderEnabled ?? false,
      hour: String(loop.reminderHour ?? 8),
      minute: String(loop.reminderMinute ?? 0),
      weekday: loop.reminderWeekday ?? 0,
      day: String(loop.reminderDay ?? 1),
    });
  }

  const addStepLoop = loops.find((loop) => loop._id === addStepLoopId) ?? null;

  return (
    <View style={{ padding: 20, gap: 16 }}>
      {loops.map((loop) => (
        <GlassCard key={loop._id} padding={0}>
          <Card.Content style={{ gap: 4, paddingBottom: 8, paddingTop: 18 }}>
            <View style={{ flexDirection: "row", alignItems: "center", gap: 12 }}>
              <LinearGradient
                colors={THEME_GRADIENTS[themeId]}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 1 }}
                style={{
                  width: 44,
                  height: 44,
                  borderRadius: 16,
                  alignItems: "center",
                  justifyContent: "center",
                }}
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
                <Chip
                  compact
                  style={{ alignSelf: "flex-start", backgroundColor: theme.colors.secondaryContainer }}
                  textStyle={{ fontSize: 11 }}
                >
                  {LOOP_TYPE_LABELS_TR[loop.type]}
                </Chip>
              </View>
              <IconButton
                icon="delete-outline"
                onPress={() => handleDeleteLoop(loop._id, loop.reminderNotificationId)}
              />
            </View>

            <View style={{ flexDirection: "row", alignItems: "center", gap: 4 }}>
              <MaterialCommunityIcons
                name={loop.reminderEnabled ? "bell-outline" : "bell-off-outline"}
                size={16}
                color={theme.colors.onSurfaceVariant}
              />
              <Text variant="bodySmall" style={{ color: theme.colors.onSurfaceVariant, flex: 1 }}>
                {reminderSummary(loop)}
              </Text>
              <Button compact mode="text" onPress={() => openReminderEditor(loop)}>
                Düzenle
              </Button>
            </View>

            <View style={{ flexDirection: "row", gap: 8, marginTop: 4, flexWrap: "wrap" }}>
              <Button
                icon="camera"
                mode="text"
                compact
                onPress={() =>
                  router.push({ pathname: "/(tabs)/journal/capture", params: { loopId: loop._id } })
                }
              >
                Fotoğraf Çek
              </Button>
              <Button
                icon="image-multiple-outline"
                mode="text"
                compact
                onPress={() => router.push({ pathname: "/(tabs)/journal", params: { loopId: loop._id } })}
              >
                Cilt Günlüğü
              </Button>
            </View>
          </Card.Content>

          <View style={{ height: 1, backgroundColor: hexToRgba(theme.colors.outline, 0.15), marginHorizontal: 16 }} />

          <Card.Content style={{ paddingTop: 4, paddingBottom: 4, gap: 2 }}>
            {loop.steps.map((step, index) => {
              const product = productsById.get(step.productId);
              return (
                <View key={step._id} style={{ flexDirection: "row", alignItems: "center", gap: 6, paddingVertical: 4 }}>
                  <Text style={{ color: theme.colors.onSurfaceVariant, width: 20 }}>{index + 1}.</Text>
                  <Text style={{ flex: 1 }} numberOfLines={1}>
                    {step.missingProduct ? "Ürün eksik — yeniden seçilmeli" : (product?.name ?? "Ürün yükleniyor...")}
                  </Text>
                  {step.isOptional ? (
                    <Chip compact style={{ backgroundColor: theme.colors.surfaceVariant }} textStyle={{ fontSize: 10 }}>
                      Opsiyonel
                    </Chip>
                  ) : null}
                  <IconButton
                    icon="close-circle-outline"
                    size={18}
                    onPress={() => removeLoopStep({ stepId: step._id })}
                  />
                </View>
              );
            })}
          </Card.Content>

          <Card.Content style={{ paddingTop: 0, paddingBottom: 12 }}>
            <Button
              icon="plus"
              mode="text"
              compact
              onPress={() => setAddStepLoopId(loop._id)}
              style={{ alignSelf: "flex-start" }}
            >
              Ürün Ekle
            </Button>
          </Card.Content>
        </GlassCard>
      ))}

      <AddLoopStepDialog
        loopId={addStepLoopId}
        existingProductIds={new Set(addStepLoop?.steps.map((step) => step.productId) ?? [])}
        products={products ?? []}
        onDismiss={() => setAddStepLoopId(null)}
      />

      <EditLoopReminderDialog
        loop={editingReminderLoop}
        initialState={
          editingReminderInitialState ?? { enabled: false, hour: "8", minute: "0", weekday: 0, day: "1" }
        }
        onDismiss={() => {
          setEditingReminderLoop(null);
          setEditingReminderInitialState(null);
        }}
      />
    </View>
  );
}
