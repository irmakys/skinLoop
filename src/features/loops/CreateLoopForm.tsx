import { useMutation, useQuery } from "convex/react";
import { useState } from "react";
import { ScrollView, View } from "react-native";
import { Button, Checkbox, HelperText, SegmentedButtons, Text, TextInput } from "react-native-paper";

import { api } from "@convex/_generated/api";
import type { Id } from "@convex/_generated/dataModel";
import { isReminderStateValid, ReminderTimeEditor, type ReminderState } from "@/features/loops/ReminderTimeEditor";
import { DEFAULT_LOOP_TIMES, scheduleLoopReminder } from "@/lib/notifications";
import { getNotificationPreferences } from "@/lib/preferences";

type LoopType = "morning" | "evening" | "weekly" | "monthly";

function defaultReminderState(type: LoopType): ReminderState {
  const { hour, minute } = DEFAULT_LOOP_TIMES[type];
  return { enabled: true, hour: String(hour), minute: String(minute), weekday: 0, day: "1" };
}

type CreateLoopFormProps = {
  onSaved: () => void;
};

export function CreateLoopForm({ onSaved }: CreateLoopFormProps) {
  const products = useQuery(api.products.listProducts);
  const createLoop = useMutation(api.loops.createLoop);
  const updateLoopReminder = useMutation(api.loops.updateLoopReminder);

  const [name, setName] = useState("");
  const [type, setType] = useState<LoopType>("morning");
  const [selectedProductIds, setSelectedProductIds] = useState<Id<"products">[]>([]);
  const [optionalProductIds, setOptionalProductIds] = useState<Set<Id<"products">>>(new Set());
  const [reminder, setReminder] = useState<ReminderState>(() => defaultReminderState("morning"));
  const [error, setError] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  function handleTypeChange(nextType: LoopType) {
    setType(nextType);
    setReminder(defaultReminderState(nextType));
  }

  function toggleProduct(productId: Id<"products">) {
    setSelectedProductIds((current) =>
      current.includes(productId)
        ? current.filter((id) => id !== productId)
        : [...current, productId],
    );
  }

  function toggleOptional(productId: Id<"products">) {
    setOptionalProductIds((current) => {
      const next = new Set(current);
      if (next.has(productId)) {
        next.delete(productId);
      } else {
        next.add(productId);
      }
      return next;
    });
  }

  async function handleSubmit() {
    setError(null);

    if (!name.trim()) {
      setError("Rutin adı zorunludur.");
      return;
    }
    if (selectedProductIds.length === 0) {
      setError("En az bir ürün seçmelisin.");
      return;
    }
    if (!isReminderStateValid(type, reminder)) {
      setError("Hatırlatıcı saati geçerli değil.");
      return;
    }

    const reminderHour = Number(reminder.hour);
    const reminderMinute = Number(reminder.minute);
    const reminderDay = Number(reminder.day);

    setIsSubmitting(true);
    try {
      const loopId = await createLoop({
        type,
        name: name.trim(),
        steps: selectedProductIds.map((productId, index) => ({
          productId,
          order: index,
          isOptional: optionalProductIds.has(productId),
        })),
        reminderEnabled: reminder.enabled,
        reminderHour: reminder.enabled ? reminderHour : undefined,
        reminderMinute: reminder.enabled ? reminderMinute : undefined,
        reminderWeekday: reminder.enabled && type === "weekly" ? reminder.weekday : undefined,
        reminderDay: reminder.enabled && type === "monthly" ? reminderDay : undefined,
      });

      const preferences = await getNotificationPreferences();
      if (reminder.enabled && preferences.loopRemindersEnabled) {
        const notificationId = await scheduleLoopReminder(loopId, name.trim(), type, {
          hour: reminderHour,
          minute: reminderMinute,
          weekday: reminder.weekday,
          day: reminderDay,
        });
        await updateLoopReminder({
          loopId,
          reminderEnabled: true,
          reminderHour,
          reminderMinute,
          reminderWeekday: type === "weekly" ? reminder.weekday : undefined,
          reminderDay: type === "monthly" ? reminderDay : undefined,
          reminderNotificationId: notificationId ?? undefined,
        });
      }
      onSaved();
    } catch (err) {
      setError(err instanceof Error ? err.message : "Rutin kaydedilemedi.");
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <ScrollView contentContainerStyle={{ padding: 24, gap: 12 }}>
      <Text variant="headlineSmall" style={{ fontWeight: "700" }}>
        Rutin Oluştur
      </Text>
      <TextInput label="Rutin Adı" value={name} onChangeText={setName} />

      <Text variant="labelLarge">Sıklık</Text>
      <SegmentedButtons
        value={type}
        onValueChange={(value) => handleTypeChange(value as LoopType)}
        buttons={[
          { value: "morning", label: "Sabah" },
          { value: "evening", label: "Akşam" },
          { value: "weekly", label: "Haftalık" },
          { value: "monthly", label: "Aylık" },
        ]}
      />

      <ReminderTimeEditor type={type} value={reminder} onChange={setReminder} />

      <Text variant="titleMedium">Adımlar (ürünler)</Text>
      {(products ?? []).map((product) => {
        const isSelected = selectedProductIds.includes(product._id);
        return (
          <View key={product._id}>
            <Checkbox.Item
              label={product.name}
              status={isSelected ? "checked" : "unchecked"}
              onPress={() => toggleProduct(product._id)}
            />
            {isSelected ? (
              <Checkbox.Item
                label="Opsiyonel adım (Tembel Mod'da atlanır)"
                labelStyle={{ fontSize: 13 }}
                style={{ paddingLeft: 24 }}
                status={optionalProductIds.has(product._id) ? "checked" : "unchecked"}
                onPress={() => toggleOptional(product._id)}
              />
            ) : null}
          </View>
        );
      })}
      {products?.length === 0 ? (
        <Text>Önce Ürünlerim&apos;e bir ürün eklemelisin.</Text>
      ) : null}

      {error ? <HelperText type="error">{error}</HelperText> : null}

      <Button mode="contained" onPress={handleSubmit} loading={isSubmitting}>
        Kaydet
      </Button>
    </ScrollView>
  );
}
