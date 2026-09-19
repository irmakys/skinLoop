import { api } from "@convex/_generated/api";
import { useConvex } from "convex/react";
import { File, Paths } from "expo-file-system";
import { useRouter } from "expo-router";
import * as Sharing from "expo-sharing";
import { useEffect, useState } from "react";
import { ScrollView, View } from "react-native";
import {
  Button,
  Dialog,
  Divider,
  HelperText,
  List,
  Portal,
  Switch,
  Text,
  useTheme,
} from "react-native-paper";

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

export default function SettingsScreen() {
  const router = useRouter();
  const theme = useTheme();
  const convex = useConvex();
  const { signOut } = useSession();

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
      const file = new File(Paths.cache, `skinloop-veri-${Date.now()}.json`);
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
      clearAllJournalData();
      await signOut();
      setIsDeleteDialogVisible(false);
      router.replace("/(auth)/sign-in");
    } catch (err) {
      setDeleteError(err instanceof Error ? err.message : "Hesap silinemedi.");
    } finally {
      setIsDeleting(false);
    }
  }

  return (
    <ScrollView contentContainerStyle={{ padding: 16, gap: 8 }}>
      <ProfileHeader />

      <Divider />

      <List.Section title="Görünüm ve Tema">
        <ThemePicker />
      </List.Section>

      <Divider />

      <List.Section title="Bildirim Tercihleri">
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
          style={{ marginHorizontal: 16, marginTop: 4 }}
        >
          Test Bildirimi Gönder (5 sn)
        </Button>
        {testNotificationStatus ? (
          <HelperText type="info" style={{ marginHorizontal: 16 }}>
            {testNotificationStatus}
          </HelperText>
        ) : null}
      </List.Section>

      <Divider />

      <List.Section title="Veri Yönetimi">
        <List.Item
          title="Verilerimi Dışa Aktar"
          description="Vanity, Loops ve Journal kayıtlarını JSON olarak indir"
        />
        <Button mode="outlined" onPress={handleExport} loading={isExporting} style={{ marginHorizontal: 16 }}>
          Dışa Aktar
        </Button>
        {exportError ? (
          <HelperText type="error" style={{ marginHorizontal: 16 }}>
            {exportError}
          </HelperText>
        ) : null}
      </List.Section>

      <Divider />

      <List.Section title="Tehlikeli Bölge">
        <List.Item
          title="Hesabımı ve Verilerimi Sil"
          description="Bu işlem geri alınamaz — tüm sunucu verisi ve cihazdaki Journal fotoğrafları kalıcı olarak silinir (KVKK/GDPR)"
        />
        <Button
          mode="contained"
          buttonColor={theme.colors.error}
          onPress={() => setIsDeleteDialogVisible(true)}
          style={{ marginHorizontal: 16 }}
        >
          Hesabı Sil
        </Button>
      </List.Section>

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

      <View style={{ marginTop: 16 }}>
        <Button mode="text" onPress={() => signOut()}>
          Çıkış Yap
        </Button>
      </View>
    </ScrollView>
  );
}
