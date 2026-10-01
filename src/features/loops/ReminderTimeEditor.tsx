import { View } from "react-native";
import { Chip, HelperText, Switch, Text, TextInput, useTheme } from "react-native-paper";

import { useLocale } from "@/i18n/LocaleContext";
import { WEEKDAY_KEYS } from "@/lib/dateKeys";

type LoopType = "morning" | "evening" | "weekly" | "monthly";

export type ReminderState = {
  enabled: boolean;
  hour: string;
  minute: string;
  weekday: number;
  day: string;
};

type ReminderTimeEditorProps = {
  type: LoopType;
  value: ReminderState;
  onChange: (next: ReminderState) => void;
};

/**
 * Rutine özel hatırlatıcı zamanı düzenleyici — saat/dakika, haftalık
 * rutinlerde gün seçimi, aylık rutinlerde ayın günü. Bildirimin sesli mi
 * sessiz mi geleceği rutine özel değil, Ayarlar'daki genel "Bildirim Sesi"
 * tercihinden okunur (bkz. src/lib/preferences.ts).
 */
export function ReminderTimeEditor({ type, value, onChange }: ReminderTimeEditorProps) {
  const theme = useTheme();
  const { t } = useLocale();

  const hourValue = Number(value.hour);
  const minuteValue = Number(value.minute);
  const dayValue = Number(value.day);
  const hourInvalid = value.enabled && (!Number.isFinite(hourValue) || hourValue < 0 || hourValue > 23);
  const minuteInvalid = value.enabled && (!Number.isFinite(minuteValue) || minuteValue < 0 || minuteValue > 59);
  const dayInvalid = value.enabled && type === "monthly" && (!Number.isFinite(dayValue) || dayValue < 1 || dayValue > 31);

  return (
    <View style={{ gap: 8 }}>
      <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between" }}>
        <Text variant="labelLarge">{t("reminder.title")}</Text>
        <Switch value={value.enabled} onValueChange={(enabled) => onChange({ ...value, enabled })} />
      </View>

      {value.enabled ? (
        <View style={{ gap: 8 }}>
          <View style={{ flexDirection: "row", gap: 8 }}>
            <TextInput
              label={t("reminder.hourLabel")}
              value={value.hour}
              onChangeText={(hour) => onChange({ ...value, hour })}
              keyboardType="numeric"
              style={{ flex: 1 }}
            />
            <TextInput
              label={t("reminder.minuteLabel")}
              value={value.minute}
              onChangeText={(minute) => onChange({ ...value, minute })}
              keyboardType="numeric"
              style={{ flex: 1 }}
            />
          </View>
          {hourInvalid || minuteInvalid ? (
            <HelperText type="error">{t("reminder.timeRangeError")}</HelperText>
          ) : null}

          {type === "weekly" ? (
            <View style={{ gap: 4 }}>
              <Text variant="bodySmall" style={{ color: theme.colors.onSurfaceVariant }}>
                {t("reminder.whichDay")}
              </Text>
              <View style={{ flexDirection: "row", flexWrap: "wrap", gap: 6 }}>
                {WEEKDAY_KEYS.map((key, index) => (
                  <Chip
                    key={key}
                    compact
                    selected={value.weekday === index}
                    onPress={() => onChange({ ...value, weekday: index })}
                  >
                    {t(key)}
                  </Chip>
                ))}
              </View>
            </View>
          ) : null}

          {type === "monthly" ? (
            <View>
              <TextInput
                label={t("reminder.dayOfMonthLabel")}
                value={value.day}
                onChangeText={(day) => onChange({ ...value, day })}
                keyboardType="numeric"
              />
              {dayInvalid ? <HelperText type="error">{t("reminder.dayOfMonthError")}</HelperText> : null}
            </View>
          ) : null}
        </View>
      ) : null}
    </View>
  );
}

export function isReminderStateValid(type: LoopType, value: ReminderState): boolean {
  if (!value.enabled) {
    return true;
  }
  const hour = Number(value.hour);
  const minute = Number(value.minute);
  if (!Number.isFinite(hour) || hour < 0 || hour > 23) {
    return false;
  }
  if (!Number.isFinite(minute) || minute < 0 || minute > 59) {
    return false;
  }
  if (type === "monthly") {
    const day = Number(value.day);
    if (!Number.isFinite(day) || day < 1 || day > 31) {
      return false;
    }
  }
  return true;
}
