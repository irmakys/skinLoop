import { useMutation } from "convex/react";
import { useState } from "react";
import { Alert } from "react-native";
import { Button, HelperText } from "react-native-paper";

import { api } from "@convex/_generated/api";
import type { Id } from "@convex/_generated/dataModel";
import { AppDialog } from "@/components/AppDialog";
import { isReminderStateValid, ReminderTimeEditor, type ReminderState } from "@/features/loops/ReminderTimeEditor";
import { useLocale } from "@/i18n/LocaleContext";
import { cancelReminder, ensureNotificationPermission, scheduleLoopReminder } from "@/lib/notifications";

type LoopType = "morning" | "evening" | "weekly" | "monthly";

export type EditableLoopReminder = {
  _id: Id<"loops">;
  name: string;
  type: LoopType;
  reminderNotificationId?: string;
};

type EditLoopReminderDialogProps = {
  loop: EditableLoopReminder | null;
  initialState: ReminderState;
  onDismiss: () => void;
};

/** Var olan bir rutinin hatırlatıcı saatini/gününü sonradan değiştirmek için diyalog. */
export function EditLoopReminderDialog({ loop, initialState, onDismiss }: EditLoopReminderDialogProps) {
  const { t } = useLocale();
  const updateLoopReminder = useMutation(api.loops.updateLoopReminder);

  const [reminder, setReminder] = useState<ReminderState>(initialState);
  const [loadedLoopId, setLoadedLoopId] = useState<Id<"loops"> | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  if (loop && loop._id !== loadedLoopId) {
    setLoadedLoopId(loop._id);
    setReminder(initialState);
    setError(null);
  }

  async function handleSave() {
    if (!loop) {
      return;
    }
    setError(null);
    if (!isReminderStateValid(loop.type, reminder)) {
      setError(t("loops.invalidReminderTime"));
      return;
    }

    setIsSubmitting(true);
    try {
      if (loop.reminderNotificationId) {
        await cancelReminder(loop.reminderNotificationId);
      }

      let notificationId: string | null = null;
      if (reminder.enabled) {
        // Zamanlamadan önce izin doğrulanmazsa, işletim sistemi izin hiç
        // istenmediği için bildirimi sessizce hiç göstermez (asıl hata buydu).
        const permissionGranted = await ensureNotificationPermission();
        if (!permissionGranted) {
          Alert.alert(
            t("loops.notificationPermissionDeniedTitle"),
            t("loops.notificationPermissionDeniedBody"),
          );
        } else {
          notificationId = await scheduleLoopReminder(loop._id, loop.name, loop.type, {
            hour: Number(reminder.hour),
            minute: Number(reminder.minute),
            weekday: reminder.weekday,
            day: Number(reminder.day),
          });
        }
      }

      await updateLoopReminder({
        loopId: loop._id,
        reminderEnabled: reminder.enabled,
        reminderHour: Number(reminder.hour),
        reminderMinute: Number(reminder.minute),
        reminderWeekday: loop.type === "weekly" ? reminder.weekday : undefined,
        reminderDay: loop.type === "monthly" ? Number(reminder.day) : undefined,
        reminderNotificationId: notificationId ?? undefined,
      });
      onDismiss();
    } catch (err) {
      setError(err instanceof Error ? err.message : t("loops.reminderUpdateFailed"));
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <AppDialog
      visible={loop !== null}
      onDismiss={onDismiss}
      title={t("loops.editReminderTitle")}
      actions={
        <>
          <Button onPress={onDismiss}>{t("common.cancel")}</Button>
          <Button onPress={handleSave} loading={isSubmitting}>
            {t("common.save")}
          </Button>
        </>
      }
    >
      {loop ? <ReminderTimeEditor type={loop.type} value={reminder} onChange={setReminder} /> : null}
      {error ? <HelperText type="error">{error}</HelperText> : null}
    </AppDialog>
  );
}
