import { useState } from "react";
import { Pressable, View } from "react-native";
import { Button, Text, useTheme } from "react-native-paper";

import { AppDialog } from "@/components/AppDialog";
import { useLocale } from "@/i18n/LocaleContext";
import { LOCALE_IDS, LOCALE_NATIVE_LABELS, LOCALE_SHORT_CODES, type LocaleId } from "@/i18n/locales";

function LanguageCircle({ localeId, selected, size = 56 }: { localeId: LocaleId; selected: boolean; size?: number }) {
  const theme = useTheme();

  return (
    <View
      style={{
        width: size,
        height: size,
        borderRadius: size / 2,
        backgroundColor: selected ? theme.colors.primaryContainer : theme.colors.surfaceVariant,
        borderWidth: selected ? 3 : 1,
        borderColor: selected ? theme.colors.primary : theme.colors.outline,
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Text
        style={{
          fontWeight: "700",
          fontSize: 15,
          letterSpacing: 0.5,
          color: selected ? theme.colors.onPrimaryContainer : theme.colors.onSurfaceVariant,
        }}
      >
        {LOCALE_SHORT_CODES[localeId]}
      </Text>
    </View>
  );
}

/**
 * Ayarlar'daki dil seçici — ThemePicker.tsx ile birebir aynı desen: sadece
 * AKTİF dilin küçük önizlemesi + adı gösterilir, yanında "Dil Değiştir"
 * butonu bulunur. Butona basılınca 8 dilin listelendiği bir Dialog açılır;
 * seçim yapılınca pencere kendiliğinden kapanır. Seçim AsyncStorage'da
 * kalıcı olarak saklanır (bkz. LocaleContext.tsx) ve uygulama yeniden
 * açıldığında korunur.
 */
export function LanguagePicker() {
  const theme = useTheme();
  const { localeId, setLocaleId, t } = useLocale();
  const [pickerVisible, setPickerVisible] = useState(false);

  return (
    <View style={{ paddingHorizontal: 16, paddingBottom: 16, gap: 4 }}>
      <View style={{ flexDirection: "row", alignItems: "center", gap: 14 }}>
        <LanguageCircle localeId={localeId} selected={false} />
        <View style={{ flex: 1, gap: 2 }}>
          <Text variant="labelMedium" style={{ color: theme.colors.onSurfaceVariant }}>
            {t("settings.activeLanguage")}
          </Text>
          <Text style={{ fontWeight: "700", color: theme.colors.onSurface }}>
            {LOCALE_NATIVE_LABELS[localeId]}
          </Text>
        </View>
        <Button mode="contained-tonal" onPress={() => setPickerVisible(true)}>
          {t("settings.changeLanguage")}
        </Button>
      </View>

      <AppDialog
        visible={pickerVisible}
        onDismiss={() => setPickerVisible(false)}
        title={t("settings.chooseLanguage")}
        contentGap={12}
        contentPaddingHorizontal={16}
        actions={<Button onPress={() => setPickerVisible(false)}>{t("common.close")}</Button>}
      >
        <View style={{ width: "100%", flexDirection: "row", flexWrap: "wrap" }}>
          {LOCALE_IDS.map((id) => {
            const selected = id === localeId;
            return (
              <Pressable
                key={id}
                onPress={() => {
                  setLocaleId(id);
                  setPickerVisible(false);
                }}
                style={{ alignItems: "center", gap: 6, width: "25%", paddingHorizontal: 4, paddingVertical: 10 }}
              >
                <LanguageCircle localeId={id} selected={selected} />
                <Text
                  variant="labelSmall"
                  numberOfLines={2}
                  style={{
                    width: "100%",
                    textAlign: "center",
                    fontWeight: selected ? "700" : "400",
                    color: selected ? theme.colors.primary : theme.colors.onSurfaceVariant,
                  }}
                >
                  {LOCALE_NATIVE_LABELS[id]}
                </Text>
              </Pressable>
            );
          })}
        </View>
      </AppDialog>
    </View>
  );
}
