import { File, Paths } from "expo-file-system";

export type NotificationPreferences = {
  loopRemindersEnabled: boolean;
  expiryRemindersEnabled: boolean;
  /** Bildirimler sesli/titreşimli mi (true) yoksa yalnızca yazılı mı (false) gelsin. */
  soundEnabled: boolean;
};

const DEFAULT_PREFERENCES: NotificationPreferences = {
  loopRemindersEnabled: true,
  expiryRemindersEnabled: true,
  soundEnabled: true,
};

function getPreferencesFile(): File {
  return new File(Paths.document, "preferences.json");
}

export async function getNotificationPreferences(): Promise<NotificationPreferences> {
  const file = getPreferencesFile();
  if (!file.exists) {
    return DEFAULT_PREFERENCES;
  }

  try {
    const json = await file.text();
    return { ...DEFAULT_PREFERENCES, ...(JSON.parse(json) as Partial<NotificationPreferences>) };
  } catch {
    return DEFAULT_PREFERENCES;
  }
}

export async function setNotificationPreferences(
  preferences: NotificationPreferences,
): Promise<void> {
  const file = getPreferencesFile();
  file.create({ overwrite: true });
  file.write(JSON.stringify(preferences));
}
