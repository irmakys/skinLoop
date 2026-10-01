import { useMutation, useQuery } from "convex/react";
import { useEffect, useState } from "react";
import { Alert, BackHandler, ScrollView, View } from "react-native";
import { Button, Checkbox, HelperText, IconButton, SegmentedButtons, Text, TextInput, useTheme } from "react-native-paper";

import { api } from "@convex/_generated/api";
import type { Id } from "@convex/_generated/dataModel";
import { isReminderStateValid, ReminderTimeEditor, type ReminderState } from "@/features/loops/ReminderTimeEditor";
import { useLocale } from "@/i18n/LocaleContext";
import { DEFAULT_LOOP_TIMES, ensureNotificationPermission, scheduleLoopReminder } from "@/lib/notifications";
import { getNotificationPreferences } from "@/lib/preferences";
import { FONT_DISPLAY_BOLD } from "@/theme/fonts";
import { CARD_RADIUS } from "@/theme/theme";

type LoopType = "morning" | "evening" | "weekly" | "monthly";

function defaultReminderState(type: LoopType): ReminderState {
  const { hour, minute } = DEFAULT_LOOP_TIMES[type];
  return { enabled: true, hour: String(hour), minute: String(minute), weekday: 0, day: "1" };
}

type CreateLoopFormProps = {
  onSaved: () => void;
  /** Kullanıcı rutin oluşturmaktan vazgeçip listeye geri dönmek istediğinde çağrılır (geri butonu + Android donanım geri tuşu). */
  onCancel: () => void;
};

export function CreateLoopForm({ onSaved, onCancel }: CreateLoopFormProps) {
  const { t } = useLocale();
  const theme = useTheme();
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

  // Bu ekran ayrı bir route/modal değil, aynı sekmenin içeriğini yerinde
  // değiştiren bir local state (bkz. loops/index.tsx) — bu yüzden Expo
  // Router'ın kendi geri yığını bu ekrandan habersiz. Android donanım/gesture
  // geri tuşu varsayılan davranışta hiçbir şey yapmaz (veya sekmeyi
  // tamamen kapatabilir); burada elle yakalayıp listeye dönüşe yönlendiriyoruz.
  useEffect(() => {
    const subscription = BackHandler.addEventListener("hardwareBackPress", () => {
      onCancel();
      return true;
    });
    return () => subscription.remove();
  }, [onCancel]);

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
      setError(t("loops.nameRequired"));
      return;
    }
    if (selectedProductIds.length === 0) {
      setError(t("loops.selectAtLeastOneProduct"));
      return;
    }
    if (!isReminderStateValid(type, reminder)) {
      setError(t("loops.invalidReminderTime"));
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
        // Bildirim gerçekten ekrana düşsün diye, zamanlamadan ÖNCE izin
        // isteniyor/doğrulanıyor. Bu adım atlanırsa (önceki hata): işletim
        // sistemi izin hiç istenmediği için zamanlanan bildirimi sessizce
        // hiç göstermez — kullanıcı "saat geldi ama bildirim gelmedi" hatasını
        // tam olarak bu yüzden yaşıyordu.
        const permissionGranted = await ensureNotificationPermission();
        if (!permissionGranted) {
          Alert.alert(
            t("loops.notificationPermissionDeniedTitle"),
            t("loops.notificationPermissionDeniedBody"),
          );
        } else {
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
      }
      onSaved();
    } catch (err) {
      setError(err instanceof Error ? err.message : t("loops.saveFailed"));
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <ScrollView contentContainerStyle={{ padding: 24, gap: 12 }}>
      <View style={{ flexDirection: "row", alignItems: "center", marginLeft: -8, marginBottom: -4 }}>
        <IconButton
          icon="arrow-left"
          size={22}
          iconColor={theme.colors.onSurface}
          onPress={onCancel}
          accessibilityLabel={t("common.cancel")}
          hitSlop={{ top: 8, bottom: 8, left: 8, right: 8 }}
        />
        <Text style={{ fontFamily: FONT_DISPLAY_BOLD, fontSize: 24 }}>{t("loops.createTitle")}</Text>
      </View>
      <TextInput mode="outlined" label={t("loops.nameLabel")} value={name} onChangeText={setName} />

      <Text variant="labelLarge">{t("loops.frequency")}</Text>
      <SegmentedButtons
        value={type}
        onValueChange={(value) => handleTypeChange(value as LoopType)}
        buttons={[
          { value: "morning", label: t("loops.typeMorning") },
          { value: "evening", label: t("loops.typeEvening") },
          { value: "weekly", label: t("loops.typeWeekly") },
          { value: "monthly", label: t("loops.typeMonthly") },
        ]}
      />

      <ReminderTimeEditor type={type} value={reminder} onChange={setReminder} />

      <Text variant="titleMedium">{t("loops.stepsLabel")}</Text>
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
                label={t("loops.optionalStep")}
                labelStyle={{ fontSize: 13 }}
                style={{ paddingLeft: 24 }}
                status={optionalProductIds.has(product._id) ? "checked" : "unchecked"}
                onPress={() => toggleOptional(product._id)}
              />
            ) : null}
          </View>
        );
      })}
      {products?.length === 0 ? <Text>{t("loops.addProductsFirst")}</Text> : null}

      {error ? <HelperText type="error">{error}</HelperText> : null}

      <Button
        mode="contained"
        onPress={handleSubmit}
        loading={isSubmitting}
        style={{ borderRadius: CARD_RADIUS, marginTop: 8 }}
        contentStyle={{ paddingVertical: 4 }}
      >
        {t("common.save")}
      </Button>
    </ScrollView>
  );
}
