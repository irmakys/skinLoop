import { useLocalSearchParams } from "expo-router";
import { useEffect, useState } from "react";
import { ScrollView, View } from "react-native";
import { Card, Chip, Text, useTheme } from "react-native-paper";

import { useCurrentUserId } from "@/features/auth/useCurrentUserId";
import { useLocale } from "@/i18n/LocaleContext";
import { listJournalEntries, type JournalEntry } from "@/lib/journalStorage";

function formatDate(epochMs: number): string {
  return new Date(epochMs).toLocaleDateString("tr-TR", { day: "2-digit", month: "short", year: "numeric" });
}

function ComparisonColumn({ label, entry }: { label: string; entry: JournalEntry | null }) {
  const theme = useTheme();

  return (
    <View style={{ flex: 1, gap: 8 }}>
      <Chip
        compact
        style={{ alignSelf: "center", backgroundColor: theme.colors.primaryContainer }}
        textStyle={{ fontWeight: "700" }}
      >
        {label}
      </Chip>
      {entry ? (
        <Card mode="elevated" style={{ borderRadius: 16, overflow: "hidden" }}>
          <Card.Cover source={{ uri: entry.filePath }} style={{ borderRadius: 0, aspectRatio: 3 / 4 }} />
          <Card.Content style={{ paddingVertical: 8 }}>
            <Text variant="bodySmall" style={{ color: theme.colors.onSurfaceVariant }}>
              {formatDate(entry.date)}
            </Text>
            {entry.note ? (
              <Text variant="bodySmall" numberOfLines={2}>
                {entry.note}
              </Text>
            ) : null}
          </Card.Content>
        </Card>
      ) : null}
    </View>
  );
}

export default function CompareScreen() {
  const theme = useTheme();
  const { t } = useLocale();
  const { before, after } = useLocalSearchParams<{ before: string; after: string }>();
  const userId = useCurrentUserId();
  const [beforeEntry, setBeforeEntry] = useState<JournalEntry | null>(null);
  const [afterEntry, setAfterEntry] = useState<JournalEntry | null>(null);

  useEffect(() => {
    if (!userId) {
      return;
    }
    let cancelled = false;

    async function load() {
      if (!userId) {
        return;
      }
      const entries = await listJournalEntries(userId);
      if (cancelled) {
        return;
      }
      setBeforeEntry(entries.find((entry) => entry.id === before) ?? null);
      setAfterEntry(entries.find((entry) => entry.id === after) ?? null);
    }

    load();

    return () => {
      cancelled = true;
    };
  }, [userId, before, after]);

  return (
    <ScrollView
      contentContainerStyle={{ flexDirection: "row", padding: 12, gap: 12 }}
      style={{ backgroundColor: theme.colors.background }}
    >
      <ComparisonColumn label={t("journal.before")} entry={beforeEntry} />
      <ComparisonColumn label={t("journal.after")} entry={afterEntry} />
    </ScrollView>
  );
}
