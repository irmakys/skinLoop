import { useState } from "react";
import { ScrollView, View } from "react-native";
import { Button, Chip, HelperText, Text, TextInput } from "react-native-paper";

import { AppDialog } from "@/components/AppDialog";
import { useLocale } from "@/i18n/LocaleContext";
import { updateJournalEntry, type JournalEntry } from "@/lib/journalStorage";

type EditJournalEntryDialogProps = {
  userId: string | null;
  entry: JournalEntry | null;
  /** loopId -> Loop adı — rutin etiketi seçenekleri için. */
  loopNames: Record<string, string>;
  onDismiss: () => void;
  onSaved: () => void;
};

/** Bir Journal fotoğrafının notunu ve bağlı olduğu rutin etiketini düzenlemek için diyalog. */
export function EditJournalEntryDialog({ userId, entry, loopNames, onDismiss, onSaved }: EditJournalEntryDialogProps) {
  const { t } = useLocale();
  const [note, setNote] = useState("");
  const [loopId, setLoopId] = useState<string | null>(null);
  const [loadedEntryId, setLoadedEntryId] = useState<string | null>(null);
  const [isSaving, setIsSaving] = useState(false);
  const [error, setError] = useState<string | null>(null);

  if (entry && entry.id !== loadedEntryId) {
    setLoadedEntryId(entry.id);
    setNote(entry.note ?? "");
    setLoopId(entry.loopId);
    setError(null);
  }

  async function handleSave() {
    if (!entry || !userId) {
      return;
    }
    setIsSaving(true);
    try {
      await updateJournalEntry(userId, entry.id, { note: note.trim() || null, loopId });
      onSaved();
    } catch (err) {
      setError(err instanceof Error ? err.message : t("common.saveFailed"));
    } finally {
      setIsSaving(false);
    }
  }

  const loopEntries = Object.entries(loopNames);

  return (
    <AppDialog
      visible={entry !== null}
      onDismiss={onDismiss}
      title={t("journal.editTitle")}
      actions={
        <>
          <Button onPress={onDismiss}>{t("common.cancel")}</Button>
          <Button onPress={handleSave} loading={isSaving}>
            {t("common.save")}
          </Button>
        </>
      }
    >
      <TextInput
        mode="outlined"
        label={t("journal.noteLabel")}
        value={note}
        onChangeText={setNote}
        multiline
        numberOfLines={3}
      />

      {loopEntries.length > 0 ? (
        <View style={{ gap: 6 }}>
          <Text variant="bodySmall">{t("journal.linkedLoop")}</Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <View style={{ flexDirection: "row", gap: 6 }}>
              <Chip compact selected={loopId === null} onPress={() => setLoopId(null)}>
                {t("journal.noneOption")}
              </Chip>
              {loopEntries.map(([id, name]) => (
                <Chip key={id} compact selected={loopId === id} onPress={() => setLoopId(id)}>
                  {name}
                </Chip>
              ))}
            </View>
          </ScrollView>
        </View>
      ) : null}

      {error ? <HelperText type="error">{error}</HelperText> : null}
    </AppDialog>
  );
}
