import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { useFocusEffect, useRouter } from "expo-router";
import { useCallback, useState } from "react";
import { FlatList, View } from "react-native";
import { Button, Card, Checkbox, Chip, Dialog, IconButton, Portal, Text, useTheme } from "react-native-paper";

import { useCurrentUserId } from "@/features/auth/useCurrentUserId";
import { EditJournalEntryDialog } from "@/features/journal/EditJournalEntryDialog";
import { useBottomClearance } from "@/hooks/useBottomClearance";
import { useAppTheme } from "@/theme/ThemeContext";
import { CARD_RADIUS, THEME_GRADIENTS, glowShadow, hexToRgba } from "@/theme/theme";
import {
  deleteJournalEntries,
  listJournalEntries,
  type JournalEntry,
} from "@/lib/journalStorage";

type JournalGalleryProps = {
  /** Yalnızca bu Loop'a bağlı fotoğrafları göster ("Cilt Günlüğü" albümü). */
  loopId?: string;
  /** loopId -> Loop adı; rozet göstermek ve düzenleme diyaloğunda seçim yapmak için. */
  loopNames?: Record<string, string>;
};

function formatDate(epochMs: number): string {
  return new Date(epochMs).toLocaleDateString("tr-TR", { day: "2-digit", month: "short", year: "numeric" });
}

/**
 * Bu bileşen hiçbir Convex query/mutation çağırmaz — Journal fotoğrafları ve
 * notları yalnızca cihaz-yerel depodan (uygulamanın kendi sandbox dizini)
 * okunur (FR-016). `loopNames` yalnızca üst bileşenden (zaten senkron olan
 * Loop verisinden) etiket amaçlı geçirilir; bu ekran kendi başına ağ isteği
 * atmaz.
 */
export function JournalGallery({ loopId, loopNames = {} }: JournalGalleryProps) {
  const theme = useTheme();
  const { themeId } = useAppTheme();
  const router = useRouter();
  const userId = useCurrentUserId();
  const bottomClearance = useBottomClearance();
  const [items, setItems] = useState<JournalEntry[] | null>(null);
  const [isSelecting, setIsSelecting] = useState(false);
  const [selectedIds, setSelectedIds] = useState<string[]>([]);
  const [isDeleteDialogVisible, setIsDeleteDialogVisible] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);
  const [editingEntry, setEditingEntry] = useState<JournalEntry | null>(null);

  const load = useCallback(async () => {
    if (!userId) {
      return;
    }
    const entries = await listJournalEntries(userId);
    const filtered = loopId ? entries.filter((entry) => entry.loopId === loopId) : entries;
    setItems(filtered);
  }, [userId, loopId]);

  // Ekran her odaklandığında (ör. fotoğraf çekip geri dönüldüğünde) listeyi tazeler.
  useFocusEffect(
    useCallback(() => {
      load();
    }, [load]),
  );

  function exitSelection() {
    setIsSelecting(false);
    setSelectedIds([]);
  }

  function toggleSelect(id: string) {
    setSelectedIds((current) =>
      current.includes(id) ? current.filter((item) => item !== id) : [...current, id],
    );
  }

  function toggleSelectAll() {
    if (!items) {
      return;
    }
    setSelectedIds((current) => (current.length === items.length ? [] : items.map((item) => item.id)));
  }

  async function handleConfirmDelete() {
    if (!userId) {
      return;
    }
    setIsDeleting(true);
    try {
      await deleteJournalEntries(userId, selectedIds);
      await load();
      setIsDeleteDialogVisible(false);
      exitSelection();
    } finally {
      setIsDeleting(false);
    }
  }

  function handleCompare() {
    if (selectedIds.length !== 2) {
      return;
    }
    // Kronolojik olarak eskisi "önce", yenisi "sonra" gösterilir.
    const [firstId, secondId] = selectedIds;
    const first = items?.find((item) => item.id === firstId);
    const second = items?.find((item) => item.id === secondId);
    const [beforeId, afterId] =
      first && second && first.date <= second.date ? [firstId, secondId] : [secondId, firstId];

    router.push({
      pathname: "/(tabs)/journal/compare",
      params: { before: beforeId, after: afterId },
    });
    exitSelection();
  }

  if (items === null) {
    return null;
  }

  const allSelected = items.length > 0 && selectedIds.length === items.length;

  return (
    <View style={{ flex: 1 }}>
      {items.length > 0 ? (
        <View style={{ gap: 8, padding: 12 }}>
          <View style={{ flexDirection: "row", justifyContent: "flex-end", gap: 8 }}>
            {isSelecting ? (
              <>
                <Button mode="outlined" icon="checkbox-multiple-marked-outline" onPress={toggleSelectAll}>
                  {allSelected ? "Seçimi Kaldır" : "Tümünü Seç"}
                </Button>
                <Button mode="outlined" icon="close" onPress={exitSelection}>
                  Vazgeç
                </Button>
              </>
            ) : (
              <Button mode="contained-tonal" icon="checkbox-multiple-outline" onPress={() => setIsSelecting(true)}>
                Seç
              </Button>
            )}
          </View>

          {isSelecting ? (
            <View style={{ flexDirection: "row", justifyContent: "flex-end", gap: 8 }}>
              <Button
                mode="contained"
                icon="compare-horizontal"
                disabled={selectedIds.length !== 2}
                onPress={handleCompare}
              >
                Kıyasla ({selectedIds.length}/2)
              </Button>
              <Button
                mode="contained"
                icon="delete-outline"
                buttonColor={theme.colors.errorContainer}
                textColor={theme.colors.onErrorContainer}
                disabled={selectedIds.length === 0}
                onPress={() => setIsDeleteDialogVisible(true)}
              >
                Sil ({selectedIds.length})
              </Button>
            </View>
          ) : null}
        </View>
      ) : null}

      {items.length === 0 ? (
        <View style={{ flex: 1, padding: 32, alignItems: "center", justifyContent: "center", gap: 8 }}>
          <MaterialCommunityIcons name="image-off-outline" size={40} color={theme.colors.outline} />
          <Text style={{ color: theme.colors.onSurfaceVariant }}>Henüz bir Journal fotoğrafı yok.</Text>
        </View>
      ) : (
        <FlatList
          data={items}
          keyExtractor={(item) => item.id}
          numColumns={2}
          contentContainerStyle={{ padding: 16, paddingBottom: bottomClearance, gap: 16 }}
          columnWrapperStyle={{ gap: 16 }}
          renderItem={({ item }) => (
            <Card
              mode="elevated"
              style={[
                {
                  flex: 1,
                  borderRadius: CARD_RADIUS,
                  overflow: "hidden",
                  backgroundColor: theme.colors.surface,
                  borderWidth: 1,
                  borderColor: hexToRgba(THEME_GRADIENTS[themeId][0], 0.2),
                },
                glowShadow(THEME_GRADIENTS[themeId][0], 0.16),
              ]}
              onPress={isSelecting ? () => toggleSelect(item.id) : undefined}
            >
              <View>
                <Card.Cover source={{ uri: item.filePath }} style={{ borderRadius: 0, aspectRatio: 3 / 4 }} />
                {isSelecting ? (
                  <View
                    style={{
                      position: "absolute",
                      top: 4,
                      right: 4,
                      backgroundColor: "rgba(0,0,0,0.35)",
                      borderRadius: 8,
                    }}
                  >
                    <Checkbox
                      status={selectedIds.includes(item.id) ? "checked" : "unchecked"}
                      onPress={() => toggleSelect(item.id)}
                      color={theme.colors.primary}
                      uncheckedColor="#FFFFFF"
                    />
                  </View>
                ) : (
                  <View style={{ position: "absolute", top: 0, right: 0, flexDirection: "row" }}>
                    <IconButton
                      icon="pencil-outline"
                      size={16}
                      iconColor="#FFFFFF"
                      onPress={() => setEditingEntry(item)}
                    />
                    <IconButton
                      icon="delete-outline"
                      size={16}
                      iconColor="#FFFFFF"
                      onPress={() => {
                        setSelectedIds([item.id]);
                        setIsDeleteDialogVisible(true);
                      }}
                    />
                  </View>
                )}
              </View>
              <Card.Content style={{ paddingVertical: 10, gap: 4 }}>
                <Chip
                  compact
                  icon="calendar-outline"
                  style={{ alignSelf: "flex-start", backgroundColor: theme.colors.tertiaryContainer }}
                  textStyle={{ fontSize: 11, color: theme.colors.onTertiaryContainer, fontWeight: "600" }}
                >
                  {formatDate(item.date)}
                </Chip>
                {item.loopId && loopNames[item.loopId] ? (
                  <Text variant="labelSmall" style={{ color: theme.colors.onSurfaceVariant }} numberOfLines={1}>
                    {loopNames[item.loopId]}
                  </Text>
                ) : null}
                {item.note ? (
                  <Text variant="bodySmall" numberOfLines={2}>
                    {item.note}
                  </Text>
                ) : null}
              </Card.Content>
            </Card>
          )}
        />
      )}

      <EditJournalEntryDialog
        userId={userId}
        entry={editingEntry}
        loopNames={loopNames}
        onDismiss={() => setEditingEntry(null)}
        onSaved={async () => {
          setEditingEntry(null);
          await load();
        }}
      />

      <Portal>
        <Dialog
          visible={isDeleteDialogVisible}
          onDismiss={() => {
            setIsDeleteDialogVisible(false);
            setSelectedIds([]);
          }}
        >
          <Dialog.Title>Fotoğrafları Sil</Dialog.Title>
          <Dialog.Content>
            <Text>
              {selectedIds.length} fotoğraf kalıcı olarak silinecek. Bu işlem geri alınamaz.
            </Text>
          </Dialog.Content>
          <Dialog.Actions>
            <Button
              onPress={() => {
                setIsDeleteDialogVisible(false);
                setSelectedIds([]);
              }}
            >
              Vazgeç
            </Button>
            <Button onPress={handleConfirmDelete} loading={isDeleting} textColor={theme.colors.error}>
              Sil
            </Button>
          </Dialog.Actions>
        </Dialog>
      </Portal>
    </View>
  );
}
