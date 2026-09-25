import { LinearGradient } from "expo-linear-gradient";
import { Text, useTheme } from "react-native-paper";
import { View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import { Logo } from "@/components/Logo";
import { FONT_DISPLAY_BOLD } from "@/theme/fonts";
import { CARD_RADIUS, ELEVATED_SHADOW, THEME_GRADIENTS } from "@/theme/theme";
import { useAppTheme } from "@/theme/ThemeContext";

type AppHeaderProps = {
  /** Aktif sekmenin adı (ör. "Planlayıcı", "Rutinler") — marka bloğunun hemen altında gösterilir. */
  title: string;
};

/**
 * Tüm sekmelerde tek noktadan kullanılan üst başlık bloğu: en üstte skinLoop
 * logosu/adı, altında bulunulan sekmenin adı — seçili temanın degrade
 * renkleriyle boyanmış (bkz. THEME_GRADIENTS), Fraunces ekran fontuyla
 * yazılmış, sayfanın geri kalanından belirgin şekilde ayrışan bir blok
 * (bkz. (tabs)/_layout.tsx screenOptions.header — istisnasız her sekmeye
 * buradan tek seferde uygulanır). Sağ üstteki yumuşak "cam" daire, düz bir
 * renk bloğu yerine hafif bir derinlik/imza hissi katar.
 */
export function AppHeader({ title }: AppHeaderProps) {
  const theme = useTheme();
  const { themeId } = useAppTheme();
  const insets = useSafeAreaInsets();
  const [gradientStart, gradientEnd] = THEME_GRADIENTS[themeId];

  return (
    <LinearGradient
      colors={[gradientStart, gradientEnd]}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      style={{
        paddingTop: insets.top + 10,
        paddingBottom: 20,
        paddingHorizontal: 20,
        borderBottomLeftRadius: CARD_RADIUS + 6,
        borderBottomRightRadius: CARD_RADIUS + 6,
        overflow: "hidden",
        ...ELEVATED_SHADOW,
      }}
    >
      <View
        pointerEvents="none"
        style={{
          position: "absolute",
          top: -40,
          right: -30,
          width: 140,
          height: 140,
          borderRadius: 70,
          backgroundColor: "rgba(255,255,255,0.10)",
        }}
      />
      <View
        pointerEvents="none"
        style={{
          position: "absolute",
          bottom: -50,
          right: 60,
          width: 90,
          height: 90,
          borderRadius: 45,
          backgroundColor: "rgba(255,255,255,0.07)",
        }}
      />

      <View style={{ gap: 6 }}>
        <View style={{ flexDirection: "row", alignItems: "center", gap: 8 }}>
          <Logo size={22} primaryColor={theme.colors.onPrimary} />
          <Text
            variant="labelLarge"
            style={{ color: theme.colors.onPrimary, opacity: 0.85, letterSpacing: 1.2 }}
          >
            SKINLOOP
          </Text>
        </View>
        <Text
          style={{
            color: theme.colors.onPrimary,
            fontFamily: FONT_DISPLAY_BOLD,
            fontSize: 30,
            lineHeight: 36,
          }}
        >
          {title}
        </Text>
      </View>
    </LinearGradient>
  );
}
