import { Platform } from "react-native";

import { getNotificationPreferences } from "@/lib/preferences";

/**
 * Expo Go, SDK 53'ten beri yalnızca PUSH (uzak) bildirim kayıt fonksiyonlarını
 * (ör. getExpoPushTokenAsync) engelliyor — yerel/zamanlanmış bildirimler
 * (scheduleNotificationAsync, kanallar, izinler) Expo Go'da tam destekleniyor.
 * Bu uygulama hiç push token kullanmıyor, bu yüzden modül normal şekilde
 * yükleniyor; olası bir yükleme hatasına karşı yine de try/catch ile
 * korunuyor (bkz. getNotifications).
 */
type NotificationsModule = typeof import("expo-notifications");

/**
 * Android 8+ üzerinde ses/titreşim, `content.sound` değil bildirim kanalı
 * tarafından belirleniyor — bu yüzden "sesli" ve "sessiz" için iki ayrı
 * kanal önceden tanımlanıyor (bkz. ensureAndroidChannels).
 */
const ANDROID_CHANNEL_SOUND = "routine-sound";
const ANDROID_CHANNEL_SILENT = "routine-silent";

let notificationsModule: NotificationsModule | null = null;
let androidChannelsReady = false;

async function ensureAndroidChannels(notifications: NotificationsModule): Promise<void> {
  if (Platform.OS !== "android" || androidChannelsReady) {
    return;
  }
  androidChannelsReady = true;

  await notifications.setNotificationChannelAsync(ANDROID_CHANNEL_SOUND, {
    name: "Rutin Hatırlatıcıları (Sesli)",
    importance: notifications.AndroidImportance.HIGH,
    sound: "default",
    enableVibrate: true,
    vibrationPattern: [0, 250, 250, 250],
  });

  await notifications.setNotificationChannelAsync(ANDROID_CHANNEL_SILENT, {
    name: "Rutin Hatırlatıcıları (Sessiz)",
    importance: notifications.AndroidImportance.DEFAULT,
    sound: null,
    enableVibrate: false,
  });
}

function getNotifications(): NotificationsModule | null {
  if (!notificationsModule) {
    try {
      // eslint-disable-next-line @typescript-eslint/no-require-imports -- yalnızca ilk kullanımda bir kez yüklemek için lazy require kullanılıyor
      notificationsModule = require("expo-notifications") as NotificationsModule;
      notificationsModule.setNotificationHandler({
        handleNotification: async () => {
          const preferences = await getNotificationPreferences();
          return {
            shouldShowBanner: true,
            shouldShowList: true,
            shouldPlaySound: preferences.soundEnabled,
            shouldSetBadge: false,
          };
        },
      });
      void ensureAndroidChannels(notificationsModule);
    } catch {
      notificationsModule = null;
    }
  }

  return notificationsModule;
}

export async function ensureNotificationPermission(): Promise<boolean> {
  const notifications = getNotifications();
  if (!notifications) {
    return false;
  }

  const current = await notifications.getPermissionsAsync();
  if (current.granted) {
    return true;
  }

  const requested = await notifications.requestPermissionsAsync();
  return requested.granted;
}

/** Kullanıcının "Bildirim Sesi" tercihine göre içerik `sound` alanı ve Android kanal kimliği. */
async function resolveSoundConfig(): Promise<{ contentSound: boolean | "default"; channelId: string }> {
  const preferences = await getNotificationPreferences();
  return preferences.soundEnabled
    ? { contentSound: "default", channelId: ANDROID_CHANNEL_SOUND }
    : { contentSound: false, channelId: ANDROID_CHANNEL_SILENT };
}

/** Ürünün PAO/SKT tarihine göre tek seferlik hatırlatıcı (FR-013). Expo Go'da no-op döner. */
export async function scheduleExpiryReminder(
  productId: string,
  productName: string,
  expiresAt: number,
): Promise<string | null> {
  const notifications = getNotifications();
  if (!notifications) {
    return null;
  }
  const { contentSound, channelId } = await resolveSoundConfig();

  return notifications.scheduleNotificationAsync({
    content: {
      title: "Ürün süresi doluyor",
      body: `${productName} kullanım ömrünün sonuna yaklaşıyor.`,
      data: { productId },
      sound: contentSound,
    },
    trigger: {
      type: notifications.SchedulableTriggerInputTypes.DATE,
      date: expiresAt,
      channelId,
    },
  });
}

/** Sabah/akşam Loop'ları için günlük tekrarlayan hatırlatıcı (FR-013). Expo Go'da no-op döner. */
export async function scheduleDailyLoopReminder(
  loopId: string,
  loopName: string,
  hour: number,
  minute: number,
): Promise<string | null> {
  const notifications = getNotifications();
  if (!notifications) {
    return null;
  }
  const { contentSound, channelId } = await resolveSoundConfig();

  return notifications.scheduleNotificationAsync({
    content: {
      title: loopName,
      body: "Rutin zamanı geldi.",
      data: { loopId },
      sound: contentSound,
    },
    trigger: {
      type: notifications.SchedulableTriggerInputTypes.DAILY,
      hour,
      minute,
      channelId,
    },
  });
}

/** Haftalık Loop'lar için tekrarlayan hatırlatıcı (FR-013). Expo Go'da no-op döner. */
export async function scheduleWeeklyLoopReminder(
  loopId: string,
  loopName: string,
  weekday: number,
  hour: number,
  minute: number,
): Promise<string | null> {
  const notifications = getNotifications();
  if (!notifications) {
    return null;
  }
  const { contentSound, channelId } = await resolveSoundConfig();

  return notifications.scheduleNotificationAsync({
    content: {
      title: loopName,
      body: "Haftalık rutin zamanı geldi.",
      data: { loopId },
      sound: contentSound,
    },
    trigger: {
      type: notifications.SchedulableTriggerInputTypes.WEEKLY,
      weekday,
      hour,
      minute,
      channelId,
    },
  });
}

/** Aylık Loop'lar için tekrarlayan hatırlatıcı (FR-013). Expo Go'da no-op döner. */
export async function scheduleMonthlyLoopReminder(
  loopId: string,
  loopName: string,
  day: number,
  hour: number,
  minute: number,
): Promise<string | null> {
  const notifications = getNotifications();
  if (!notifications) {
    return null;
  }
  const { contentSound, channelId } = await resolveSoundConfig();

  return notifications.scheduleNotificationAsync({
    content: {
      title: loopName,
      body: "Aylık rutin zamanı geldi.",
      data: { loopId },
      sound: contentSound,
    },
    trigger: {
      type: notifications.SchedulableTriggerInputTypes.MONTHLY,
      day,
      hour,
      minute,
      channelId,
    },
  });
}

/** Ayarlar ekranındaki "Test Bildirimi Gönder" butonu için: 5 saniye sonra tek seferlik bildirim. */
export async function scheduleTestNotification(): Promise<string | null> {
  const notifications = getNotifications();
  if (!notifications) {
    return null;
  }
  const { contentSound, channelId } = await resolveSoundConfig();

  return notifications.scheduleNotificationAsync({
    content: {
      title: "Test Bildirimi",
      body: "Bildirim ayarların bu şekilde çalışıyor.",
      sound: contentSound,
    },
    trigger: {
      type: notifications.SchedulableTriggerInputTypes.TIME_INTERVAL,
      seconds: 5,
      repeats: false,
      channelId,
    },
  });
}

export async function cancelReminder(notificationId: string): Promise<void> {
  const notifications = getNotifications();
  if (!notifications) {
    return;
  }

  await notifications.cancelScheduledNotificationAsync(notificationId);
}

type LoopType = "morning" | "evening" | "weekly" | "monthly";

/** Rutin oluşturma formunda başlangıç değeri olarak kullanılan makul varsayılan saatler. */
export const DEFAULT_LOOP_TIMES: Record<LoopType, { hour: number; minute: number }> = {
  morning: { hour: 8, minute: 0 },
  evening: { hour: 21, minute: 0 },
  weekly: { hour: 10, minute: 0 },
  monthly: { hour: 10, minute: 0 },
};

/**
 * WEEKDAY_LABELS_TR (0=Pzt...6=Paz) indeksini expo-notifications'ın
 * beklediği weekday değerine çevirir (1=Pazar...7=Cumartesi, Apple/Android
 * takvim biçimi).
 */
export function toExpoWeekday(ourWeekdayIndex: number): number {
  return ((ourWeekdayIndex + 1) % 7) + 1;
}

export type LoopReminderConfig = {
  hour: number;
  minute: number;
  /** Yalnızca haftalık rutinler için: 0=Pzt...6=Paz. */
  weekday?: number;
  /** Yalnızca aylık rutinler için: ayın günü (1-31). */
  day?: number;
};

/** Loop tipine göre (morning/evening/weekly/monthly) kullanıcının belirlediği saate göre tekrarlayan hatırlatıcıyı zamanlar (FR-013). Expo Go'da no-op döner. */
export async function scheduleLoopReminder(
  loopId: string,
  loopName: string,
  type: LoopType,
  config: LoopReminderConfig,
): Promise<string | null> {
  const { hour, minute } = config;

  if (type === "weekly") {
    return scheduleWeeklyLoopReminder(loopId, loopName, toExpoWeekday(config.weekday ?? 0), hour, minute);
  }
  if (type === "monthly") {
    return scheduleMonthlyLoopReminder(loopId, loopName, config.day ?? 1, hour, minute);
  }

  return scheduleDailyLoopReminder(loopId, loopName, hour, minute);
}
