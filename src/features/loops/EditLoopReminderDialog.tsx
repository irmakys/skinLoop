import { useMutation } from "convex/react";
import { useState } from "react";
import { Button, Dialog, HelperText, Portal } from "react-native-paper";

import { api } from "@convex/_generated/api";
import type { Id } from "@convex/_generated/dataModel";
import { isReminderStateValid, ReminderTimeEditor, type ReminderState } from "@/features/loops/ReminderTimeEditor";
import { cancelReminder, scheduleLoopReminder } from "@/lib/notifications";

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
      setError("Hatırlatıcı saati geçerli değil.");
      return;
    }

    setIsSubmitting(true);
    try {
      if (loop.reminderNotificationId) {
        await cancelReminder(loop.reminderNotificationId);
      }

      let notificationId: string | null = null;
      if (reminder.enabled) {
        notificationId = await scheduleLoopReminder(loop._id, loop.name, loop.type, {
          hour: Number(reminder.hour),
          minute: Number(reminder.minute),
          weekday: reminder.weekday,
          day: Number(reminder.day),
        });
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
      setError(err instanceof Error ? err.message : "Hatırlatıcı güncellenemedi.");
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <Portal>
      <Dialog visible={loop !== null} onDismiss={onDismiss}>
        <Dialog.Title>Hatırlatıcıyı Düzenle</Dialog.Title>
        <Dialog.Content style={{ gap: 12 }}>
          {loop ? <ReminderTimeEditor type={loop.type} value={reminder} onChange={setReminder} /> : null}
          {error ? <HelperText type="error">{error}</HelperText> : null}
        </Dialog.Content>
        <Dialog.Actions>
          <Button onPress={onDismiss}>Vazgeç</Button>
          <Button onPress={handleSave} loading={isSubmitting}>
            Kaydet
          </Button>
        </Dialog.Actions>
      </Dialog>
    </Portal>
  );
}
