import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { api } from "@convex/_generated/api";
import { useConvex, useQuery } from "convex/react";
import { File, Paths } from "expo-file-system";
import { useRouter } from "expo-router";
import * as Sharing from "expo-sharing";
import { useEffect, useState, type ReactNode } from "react";
import { ScrollView, View } from "react-native";
import { Button, Dialog, HelperText, List, Portal, Switch, Text, useTheme } from "react-native-paper";

import { AmbientBackground } from "@/components/AmbientBackground";
import { GlassCard } from "@/components/GlassCard";
import { useCurrentUserId } from "@/features/auth/useCurrentUserId";
import { useSession } from "@/features/auth/useSession";
import { ProfileHeader } from "@/features/settings/ProfileHeader";
import { ThemePicker } from "@/features/settings/ThemePicker";
import { clearAllJournalData } from "@/lib/journalStorage";
import { ensureNotificationPermission, scheduleTestNotification } from "@/lib/notifications";
import {
  getNotificationPreferences,
  setNotificationPreferences,
  type NotificationPreferences,
} from "@/lib/preferences";
import { useBottomClearance } from "@/hooks/useBottomClearance";
import { FONT_DISPLAY_BOLD } from "@/theme/fonts";
import { CARD_RADIUS, PREMIUM_ACCENT, glowShadow } from "@/theme/theme";

const LEVEL_THRESHOLDS = [
  { min: 100, stars: 5, title: "Usta" },
  { min: 60, stars: 4, title: "Uzman" },
  { min: 30, stars: 3, title: "Kararlı" },
  { min: 10, stars: 2, title: "Gelişiyor" },
  { min: 0, stars: 1, title: "Başlangıç" },
];

function getSkincareLevel(totalCompletions: number): { stars: number; title: string } {
  const tier = LEVEL_THRESHOLDS.find((level) => totalCompletions >= level.min);
  return tier ?? LEVEL_THRESHOLDS[LEVEL_THRESHOLDS.length - 1];
}

/** Sert `Divider` çizgileri yerine, sayfayla bütünleşik yumuşak, camsı kart grupları. */
function SectionCard({ title, children }: { title: string; children: ReactNode }) {
  return (
    <GlassCard padding={0}>
      <List.Section title={title} style={{ marginVertical: 0 }}>
        {children}
      </List.Section>
    </GlassCard>
  );
}

export default function SettingsScreen() {
  const router = useRouter();
  const theme = useTheme();
  const convex = useConvex();
  const { signOut } = useSession();
  const userId = useCurrentUserId();
  const stats = useQuery(api.users.getProfileStats);
  const bottomClearance = useBottomClearance();

  const [preferences, setPreferences] = useState<NotificationPreferences | null>(null);
  const [isExporting, setIsExporting] = useState(false);
  const [exportError, setExportError] = useState<string | null>(null);
  const [isDeleting, setIsDeleting] = useState(false);
  const [deleteError, setDeleteError] = useState<string | null>(null);
  const [isDeleteDialogVisible, setIsDeleteDialogVisible] = useState(false);
  const [testNotificationStatus, setTestNotificationStatus] = useState<string | null>(null);
  const [isSendingTestNotification, setIsSendingTestNotification] = useState(false);

  useEffect(() => {
    getNotificationPreferences().then(setPreferences);
  }, []);

  async function togglePreference(key: keyof NotificationPreferences) {
    if (!preferences) {
      return;
    }
    const next = { ...preferences, [key]: !preferences[key] };
    setPreferences(next);
    await setNotificationPreferences(next);
  }

  async function handleSendTestNotification() {
    setTestNotificationStatus(null);
    setIsSendingTestNotification(true);
    try {
      const granted = await ensureNotificationPermission();
      if (!granted) {
        setTestNotificationStatus(
          "Bildirim izni verilmedi veya bu ortamda (Expo Go) bildirimler desteklenmiyor.",
        );
        return;
      }
      await scheduleTestNotification();
      setTestNotificationStatus("Gönderildi — 5 saniye içinde gelmesi gerekiyor.");
    } finally {
      setIsSendingTestNotification(false);
    }
  }

  async function handleExport() {
    setExportError(null);
    setIsExporting(true);
    try {
      const data = await convex.query(api.users.exportMyData, {});
      const file = new File(Paths.cache, `beautyloop-veri-${Date.now()}.json`);
      file.create({ overwrite: true });
      file.write(JSON.stringify(data, null, 2));

      if (await Sharing.isAvailableAsync()) {
        await Sharing.shareAsync(file.uri, { mimeType: "application/json" });
      }
    } catch (err) {
      setExportError(err instanceof Error ? err.message : "Veri dışa aktarılamadı.");
    } finally {
      setIsExporting(false);
    }
  }

  async function handleDeleteAccount() {
    setDeleteError(null);
    setIsDeleting(true);
    try {
      await convex.mutation(api.users.deleteMyAccount, {});
      if (userId) {
        clearAllJournalData(userId);
      }
      await signOut();
      setIsDeleteDialogVisible(false);
      router.replace("/(auth)/sign-in");
    } catch (err) {
      setDeleteError(err instanceof Error ? err.message : "Hesap silinemedi.");
    } finally {
      setIsDeleting(false);
    }
  }

  const level = getSkincareLevel(stats?.totalCompletions ?? 0);

  return (
    <AmbientBackground>
      <ScrollView contentContainerStyle={{ padding: 20, paddingBottom: bottomClearance, gap: 20 }}>
        <ProfileHeader />

          <GlassCard padding={22} accentColor={PREMIUM_ACCENT[1]} style={{ gap: 16 }}>
            <View>
              <Text variant="labelLarge" style={{ color: theme.colors.onSurfaceVariant }}>
                Cilt Bakım Seviyen
              </Text>
              <Text style={{ fontFamily: FONT_DISPLAY_BOLD, fontSize: 24, color: theme.colors.onSurface }}>
                {level.title}
              </Text>
            </View>
            <View style={{ flexDirection: "row", gap: 6 }}>
              {Array.from({ length: 5 }, (_, index) => {
                const filled = index < level.stars;
                return (
                  <View key={index} style={filled ? glowShadow(PREMIUM_ACCENT[1], 0.5) : undefined}>
                    <MaterialCommunityIcons
                      name={filled ? "star" : "star-outline"}
                      size={28}
                      color={filled ? PREMIUM_ACCENT[1] : theme.colors.outlineVariant}
                    />
                  </View>
                );
              })}
            </View>
            <Text variant="bodySmall" style={{ color: theme.colors.onSurfaceVariant }}>
              Tamamladığın her rutin adımı seni bir sonraki seviyeye taşıyor — şu ana kadar{" "}
              {stats?.totalCompletions ?? 0} adım tamamladın.
            </Text>
            <Button
              mode="contained-tonal"
              icon="chart-line"
              onPress={() => router.push("/(tabs)/reports")}
              style={{ borderRadius: CARD_RADIUS }}
            >
              Rutin Raporunu Gör
            </Button>
          </GlassCard>

          <SectionCard title="Görünüm ve Tema">
            <ThemePicker />
          </SectionCard>

          <SectionCard title="Bildirim Tercihleri">
            <List.Item
              title="Rutin Hatırlatıcıları"
              description="Sabah/akşam/haftalık rutin bildirimleri"
              right={() => (
                <Switch
                  value={preferences?.loopRemindersEnabled ?? true}
                  onValueChange={() => togglePreference("loopRemindersEnabled")}
                />
              )}
            />
            <List.Item
              title="Ürün Süre Hatırlatıcıları"
              description="PAO/SKT yaklaşınca bildirim"
              right={() => (
                <Switch
                  value={preferences?.expiryRemindersEnabled ?? true}
                  onValueChange={() => togglePreference("expiryRemindersEnabled")}
                />
              )}
            />
            <List.Item
              title="Bildirim Sesi"
              description="Kapalıyken bildirimler yalnızca yazılı gelir, ses/titreşim olmaz"
              right={() => (
                <Switch
                  value={preferences?.soundEnabled ?? true}
                  onValueChange={() => togglePreference("soundEnabled")}
                />
              )}
            />
            <Button
              mode="outlined"
              onPress={handleSendTestNotification}
              loading={isSendingTestNotification}
              style={{ marginHorizontal: 16, marginTop: 4, marginBottom: 8 }}
            >
              Test Bildirimi Gönder (5 sn)
            </Button>
            {testNotificationStatus ? (
              <HelperText type="info" style={{ marginHorizontal: 16 }}>
                {testNotificationStatus}
              </HelperText>
            ) : null}
          </SectionCard>

          <SectionCard title="Veri Yönetimi">
            <List.Item
              title="Verilerimi Dışa Aktar"
              description="Vanity, Loops ve Journal kayıtlarını JSON olarak indir"
            />
            <Button
              mode="outlined"
              onPress={handleExport}
              loading={isExporting}
              style={{ marginHorizontal: 16, marginBottom: 8 }}
            >
              Dışa Aktar
            </Button>
            {exportError ? (
              <HelperText type="error" style={{ marginHorizontal: 16 }}>
                {exportError}
              </HelperText>
            ) : null}
          </SectionCard>

          <SectionCard title="Tehlikeli Bölge">
            <List.Item
              title="Hesabımı ve Verilerimi Sil"
              description="Bu işlem geri alınamaz — tüm sunucu verisi ve cihazdaki Journal fotoğrafları kalıcı olarak silinir (KVKK/GDPR)"
            />
            <Button
              mode="contained"
              buttonColor={theme.colors.error}
              onPress={() => setIsDeleteDialogVisible(true)}
              style={{ marginHorizontal: 16, marginBottom: 16 }}
            >
              Hesabı Sil
            </Button>
          </SectionCard>

        <Button mode="text" onPress={() => signOut()}>
          Çıkış Yap
        </Button>
      </ScrollView>

      <Portal>
        <Dialog visible={isDeleteDialogVisible} onDismiss={() => setIsDeleteDialogVisible(false)}>
          <Dialog.Title>Emin misin?</Dialog.Title>
          <Dialog.Content>
            <Text>
              Hesabın, tüm ürünlerin, rutinlerin ve cihazdaki Journal fotoğrafların kalıcı olarak
              silinecek. Bu işlem geri alınamaz.
            </Text>
            {deleteError ? <HelperText type="error">{deleteError}</HelperText> : null}
          </Dialog.Content>
          <Dialog.Actions>
            <Button onPress={() => setIsDeleteDialogVisible(false)}>Vazgeç</Button>
            <Button onPress={handleDeleteAccount} loading={isDeleting} textColor={theme.colors.error}>
              Kalıcı Olarak Sil
            </Button>
          </Dialog.Actions>
        </Dialog>
      </Portal>
    </AmbientBackground>
  );
}
