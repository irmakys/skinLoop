import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { useFocusEffect, useRouter } from "expo-router";
import { memo, useCallback, useMemo, useState } from "react";
import { FlatList, type ListRenderItem, View } from "react-native";
import { Button, Card, Checkbox, Chip, IconButton, Text, useTheme } from "react-native-paper";

import { AppDialog } from "@/components/AppDialog";
import { LeopardPattern } from "@/components/LeopardPattern";
import { useCurrentUserId } from "@/features/auth/useCurrentUserId";
import { EditJournalEntryDialog } from "@/features/journal/EditJournalEntryDialog";
import { useBottomClearance } from "@/hooks/useBottomClearance";
import { useLocale } from "@/i18n/LocaleContext";
import { useAppTheme } from "@/theme/ThemeContext";
import {
  CARD_RADIUS,
  LEOPARD_BORDER,
  LEOPARD_PATTERN_BORDER,
  LEOPARD_PATTERN_FILL,
  THEME_GRADIENTS,
  glowShadow,
  hexToRgba,
  isPatternedTheme,
} from "@/theme/theme";
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

type JournalPhotoCardProps = {
  item: JournalEntry;
  isSelecting: boolean;
  selected: boolean;
  loopName?: string;
  onToggleSelect: (id: string) => void;
  onEdit: (entry: JournalEntry) => void;
  onDeleteOne: (id: string) => void;
};

/**
 * `React.memo` ile sarmalı — büyük Journal galerilerinde kaydırırken/seçim
 * yaparken sadece `selected` durumu değişen kart yeniden render olsun,
 * listedeki diğer onlarca kart gereksiz yere yeniden çizilmesin.
 */
const JournalPhotoCard = memo(function JournalPhotoCard({
  item,
  isSelecting,
  selected,
  loopName,
  onToggleSelect,
  onEdit,
  onDeleteOne,
}: JournalPhotoCardProps) {
  const theme = useTheme();
  const { themeId } = useAppTheme();
  const leopard = isPatternedTheme(themeId);

  return (
    <Card
      mode="elevated"
      style={[
        {
          flex: 1,
          borderRadius: CARD_RADIUS,
          overflow: "hidden",
          backgroundColor: theme.colors.surface,
          borderWidth: 1,
          borderColor: leopard ? LEOPARD_BORDER : hexToRgba(THEME_GRADIENTS[themeId][0], 0.2),
        },
        glowShadow(THEME_GRADIENTS[themeId][0], 0.16),
      ]}
      onPress={isSelecting ? () => onToggleSelect(item.id) : undefined}
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
              status={selected ? "checked" : "unchecked"}
              onPress={() => onToggleSelect(item.id)}
              color={theme.colors.primary}
              uncheckedColor="#FFFFFF"
            />
          </View>
        ) : (
          <View style={{ position: "absolute", top: 0, right: 0, flexDirection: "row" }}>
            <IconButton icon="pencil-outline" size={16} iconColor="#FFFFFF" onPress={() => onEdit(item)} />
            <IconButton icon="delete-outline" size={16} iconColor="#FFFFFF" onPress={() => onDeleteOne(item.id)} />
          </View>
        )}
      </View>
      <Card.Content style={{ paddingVertical: 10, gap: 4 }}>
        {leopard ? (
          <LeopardPattern
            borderColor={LEOPARD_PATTERN_BORDER}
            fillColor={LEOPARD_PATTERN_FILL}
            opacity={0.22}
            tileSize={45}
            style={{ position: "absolute", top: 0, left: 0, right: 0, bottom: 0 }}
          />
        ) : null}
        <Chip
          compact
          icon="calendar-outline"
          style={{ alignSelf: "flex-start", backgroundColor: theme.colors.tertiaryContainer }}
          textStyle={{ fontSize: 11, color: theme.colors.onTertiaryContainer, fontWeight: "600" }}
        >
          {formatDate(item.date)}
        </Chip>
        {loopName ? (
          <Text variant="labelSmall" style={{ color: theme.colors.onSurfaceVariant }} numberOfLines={1}>
            {loopName}
          </Text>
        ) : null}
        {item.note ? (
          <Text variant="bodySmall" numberOfLines={2}>
            {item.note}
          </Text>
        ) : null}
      </Card.Content>
    </Card>
  );
});

/**
 * Bu bileşen hiçbir Convex query/mutation çağırmaz — Journal fotoğrafları ve
 * notları yalnızca cihaz-yerel depodan (uygulamanın kendi sandbox dizini)
 * okunur (FR-016). `loopNames` yalnızca üst bileşenden (zaten senkron olan
 * Loop verisinden) etiket amaçlı geçirilir; bu ekran kendi başına ağ isteği
 * atmaz.
 */
export function JournalGallery({ loopId, loopNames = {} }: JournalGalleryProps) {
  const theme = useTheme();
  const { t } = useLocale();
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

  const exitSelection = useCallback(() => {
    setIsSelecting(false);
    setSelectedIds([]);
  }, []);

  const toggleSelect = useCallback((id: string) => {
    setSelectedIds((current) =>
      current.includes(id) ? current.filter((item) => item !== id) : [...current, id],
    );
  }, []);

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

  const handleDeleteOne = useCallback((id: string) => {
    setSelectedIds([id]);
    setIsDeleteDialogVisible(true);
  }, []);

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

  const selectedIdsSet = useMemo(() => new Set(selectedIds), [selectedIds]);

  const renderItem: ListRenderItem<JournalEntry> = useCallback(
    ({ item }) => (
      <JournalPhotoCard
        item={item}
        isSelecting={isSelecting}
        selected={selectedIdsSet.has(item.id)}
        loopName={item.loopId ? loopNames[item.loopId] : undefined}
        onToggleSelect={toggleSelect}
        onEdit={setEditingEntry}
        onDeleteOne={handleDeleteOne}
      />
    ),
    [isSelecting, selectedIdsSet, loopNames, toggleSelect, handleDeleteOne],
  );

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
                  {allSelected ? t("journal.deselectAll") : t("journal.selectAll")}
                </Button>
                <Button mode="outlined" icon="close" onPress={exitSelection}>
                  {t("common.cancel")}
                </Button>
              </>
            ) : (
              <Button mode="contained-tonal" icon="checkbox-multiple-outline" onPress={() => setIsSelecting(true)}>
                {t("journal.select")}
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
                {t("journal.compareCount", { count: selectedIds.length })}
              </Button>
              <Button
                mode="contained"
                icon="delete-outline"
                buttonColor={theme.colors.errorContainer}
                textColor={theme.colors.onErrorContainer}
                disabled={selectedIds.length === 0}
                onPress={() => setIsDeleteDialogVisible(true)}
              >
                {t("journal.deleteCount", { count: selectedIds.length })}
              </Button>
            </View>
          ) : null}
        </View>
      ) : null}

      {items.length === 0 ? (
        <View style={{ flex: 1, padding: 32, alignItems: "center", justifyContent: "center", gap: 8 }}>
          <MaterialCommunityIcons name="image-off-outline" size={40} color={theme.colors.outline} />
          <Text style={{ color: theme.colors.onSurfaceVariant }}>{t("journal.emptyState")}</Text>
        </View>
      ) : (
        <FlatList
          data={items}
          keyExtractor={(item) => item.id}
          numColumns={2}
          contentContainerStyle={{ padding: 16, paddingBottom: bottomClearance, gap: 16 }}
          columnWrapperStyle={{ gap: 16 }}
          renderItem={renderItem}
          initialNumToRender={6}
          maxToRenderPerBatch={6}
          windowSize={7}
          removeClippedSubviews
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

      <AppDialog
        visible={isDeleteDialogVisible}
        onDismiss={() => {
          setIsDeleteDialogVisible(false);
          setSelectedIds([]);
        }}
        title={t("journal.deletePhotosTitle")}
        actions={
          <>
            <Button
              onPress={() => {
                setIsDeleteDialogVisible(false);
                setSelectedIds([]);
              }}
            >
              {t("common.cancel")}
            </Button>
            <Button onPress={handleConfirmDelete} loading={isDeleting} textColor={theme.colors.error}>
              {t("common.delete")}
            </Button>
          </>
        }
      >
        <Text>
          {t("journal.deletePhotosBody", { count: selectedIds.length })}
        </Text>
      </AppDialog>
    </View>
  );
}
