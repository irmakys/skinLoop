import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { api } from "@convex/_generated/api";
import { useConvex, useQuery } from "convex/react";
import { File, Paths } from "expo-file-system";
import { useRouter } from "expo-router";
import * as Sharing from "expo-sharing";
import { useEffect, useState, type ReactNode } from "react";
import { Linking, Platform, ScrollView, View } from "react-native";
import { Button, HelperText, List, Switch, Text, useTheme } from "react-native-paper";

import { AmbientBackground } from "@/components/AmbientBackground";
import { AppDialog } from "@/components/AppDialog";
import { GlassCard } from "@/components/GlassCard";
import { useCurrentUserId } from "@/features/auth/useCurrentUserId";
import { useSession } from "@/features/auth/useSession";
import { LanguagePicker } from "@/features/settings/LanguagePicker";
import { ProfileHeader } from "@/features/settings/ProfileHeader";
import { ThemePicker } from "@/features/settings/ThemePicker";
import { useLocale, type TranslationKey } from "@/i18n/LocaleContext";
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

const SUPPORT_EMAIL = "support@beautyloop.net";
const SUPPORT_SUBJECT = "BeautyLoop Destek Talebi";

const LEVEL_THRESHOLDS: { min: number; stars: number; titleKey: TranslationKey }[] = [
  { min: 100, stars: 5, titleKey: "settings.levelMaster" },
  { min: 60, stars: 4, titleKey: "settings.levelExpert" },
  { min: 30, stars: 3, titleKey: "settings.levelSteady" },
  { min: 10, stars: 2, titleKey: "settings.levelDeveloping" },
  { min: 0, stars: 1, titleKey: "settings.levelBeginner" },
];

function getSkincareLevel(totalCompletions: number): { stars: number; titleKey: TranslationKey } {
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
  const { t } = useLocale();
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
  const [contactError, setContactError] = useState<string | null>(null);

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
        setTestNotificationStatus(t("settings.notificationPermissionDenied"));
        return;
      }
      await scheduleTestNotification();
      setTestNotificationStatus(t("settings.testNotificationSent"));
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
      setExportError(err instanceof Error ? err.message : t("settings.exportFailed"));
    } finally {
      setIsExporting(false);
    }
  }

  async function handleContactSupport() {
    setContactError(null);
    const url = `mailto:${SUPPORT_EMAIL}?subject=${encodeURIComponent(SUPPORT_SUBJECT)}`;
    try {
      const canOpen = await Linking.canOpenURL(url);
      if (!canOpen) {
        setContactError(t("settings.contactUsFailed"));
        return;
      }
      await Linking.openURL(url);
    } catch {
      setContactError(t("settings.contactUsFailed"));
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
      setDeleteError(err instanceof Error ? err.message : t("settings.deleteAccountFailed"));
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
                {t("settings.skincareLevelLabel")}
              </Text>
              <Text style={{ fontFamily: FONT_DISPLAY_BOLD, fontSize: 24, color: theme.colors.onSurface }}>
                {t(level.titleKey)}
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
              {t("settings.completionsProgress", { count: stats?.totalCompletions ?? 0 })}
            </Text>
            <Button
              mode="contained-tonal"
              icon="chart-line"
              onPress={() => router.push("/(tabs)/reports")}
              style={{ borderRadius: CARD_RADIUS }}
            >
              {t("settings.viewReport")}
            </Button>
          </GlassCard>

          <SectionCard title={t("settings.appearanceSection")}>
            <ThemePicker />
          </SectionCard>

          <SectionCard title={t("settings.languageSection")}>
            <LanguagePicker />
          </SectionCard>

          <SectionCard title={t("settings.notificationSection")}>
            <List.Item
              title={t("settings.loopReminders")}
              description={t("settings.loopRemindersDesc")}
              right={() => (
                <Switch
                  value={preferences?.loopRemindersEnabled ?? true}
                  onValueChange={() => togglePreference("loopRemindersEnabled")}
                />
              )}
            />
            <List.Item
              title={t("settings.expiryReminders")}
              description={t("settings.expiryRemindersDesc")}
              right={() => (
                <Switch
                  value={preferences?.expiryRemindersEnabled ?? true}
                  onValueChange={() => togglePreference("expiryRemindersEnabled")}
                />
              )}
            />
            <List.Item
              title={t("settings.notificationSound")}
              description={t("settings.notificationSoundDesc")}
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
              {t("settings.sendTestNotification")}
            </Button>
            {testNotificationStatus ? (
              <HelperText type="info" style={{ marginHorizontal: 16 }}>
                {testNotificationStatus}
              </HelperText>
            ) : null}
            {Platform.OS === "android" ? (
              <>
                <List.Item
                  title={t("settings.batteryOptimization")}
                  description={t("settings.batteryOptimizationDesc")}
                  descriptionNumberOfLines={4}
                />
                <Button
                  mode="outlined"
                  icon="battery-alert"
                  onPress={() => Linking.openSettings()}
                  style={{ marginHorizontal: 16, marginTop: 4, marginBottom: 8 }}
                >
                  {t("settings.openAppSettings")}
                </Button>
              </>
            ) : null}
          </SectionCard>

          <SectionCard title={t("settings.dataSection")}>
            <List.Item title={t("settings.exportData")} description={t("settings.exportDataDesc")} />
            <Button
              mode="outlined"
              onPress={handleExport}
              loading={isExporting}
              style={{ marginHorizontal: 16, marginBottom: 8 }}
            >
              {t("settings.exportButton")}
            </Button>
            {exportError ? (
              <HelperText type="error" style={{ marginHorizontal: 16 }}>
                {exportError}
              </HelperText>
            ) : null}
          </SectionCard>

          <SectionCard title={t("settings.supportSection")}>
            <List.Item title={t("settings.contactUsTitle")} description={t("settings.contactUsDesc")} />
            <Button
              mode="outlined"
              icon="email-outline"
              onPress={handleContactSupport}
              style={{ marginHorizontal: 16, marginBottom: 8 }}
            >
              {t("settings.contactUsCta")}
            </Button>
            {contactError ? (
              <HelperText type="error" style={{ marginHorizontal: 16 }}>
                {contactError}
              </HelperText>
            ) : null}
          </SectionCard>

          <SectionCard title={t("settings.dangerZoneSection")}>
            <List.Item title={t("settings.deleteAccountListTitle")} description={t("settings.deleteAccountListDesc")} />
            <Button
              mode="contained"
              buttonColor={theme.colors.error}
              onPress={() => setIsDeleteDialogVisible(true)}
              style={{ marginHorizontal: 16, marginBottom: 16 }}
            >
              {t("settings.deleteAccountCta")}
            </Button>
          </SectionCard>

        <Button mode="text" onPress={() => signOut()}>
          {t("common.signOut")}
        </Button>
      </ScrollView>

      <AppDialog
        visible={isDeleteDialogVisible}
        onDismiss={() => setIsDeleteDialogVisible(false)}
        title={t("settings.deleteAccountTitle")}
        actions={
          <>
            <Button onPress={() => setIsDeleteDialogVisible(false)}>{t("common.cancel")}</Button>
            <Button onPress={handleDeleteAccount} loading={isDeleting} textColor={theme.colors.error}>
              {t("settings.deleteAccountButton")}
            </Button>
          </>
        }
      >
        <Text>{t("settings.deleteAccountBody")}</Text>
        {deleteError ? <HelperText type="error">{deleteError}</HelperText> : null}
      </AppDialog>
    </AmbientBackground>
  );
}
