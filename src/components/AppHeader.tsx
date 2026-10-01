import { LinearGradient } from "expo-linear-gradient";
import { Text, useTheme } from "react-native-paper";
import { Image, StyleSheet, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import { Logo } from "@/components/Logo";
import { FONT_DISPLAY_BOLD } from "@/theme/fonts";
import { CARD_RADIUS, ELEVATED_SHADOW, THEME_GRADIENTS, isPatternedTheme } from "@/theme/theme";
import { useAppTheme } from "@/theme/ThemeContext";

const LEOPARD_BACKGROUND_IMAGE = require("../../assets/images/leopard-background.jpg");

type AppHeaderProps = {
  /** Aktif sekmenin adı (ör. "Planlayıcı", "Rutinler") — marka bloğunun hemen altında gösterilir. */
  title: string;
};

/**
 * Tüm sekmelerde tek noktadan kullanılan üst başlık bloğu: en üstte BeautyLoop
 * logosu/adı, altında bulunulan sekmenin adı — seçili temanın degrade
 * renkleriyle boyanmış (bkz. THEME_GRADIENTS), Fraunces ekran fontuyla
 * yazılmış, sayfanın geri kalanından belirgin şekilde ayrışan bir blok
 * (bkz. (tabs)/_layout.tsx screenOptions.header — istisnasız her sekmeye
 * buradan tek seferde uygulanır). Sağ üstteki yumuşak "cam" daire, düz bir
 * renk bloğu yerine hafif bir derinlik/imza hissi katar.
 *
 * "Leopar Glam" teması özel: düz degrade yerine, sayfa zemininde de kullanılan
 * yüksek çözünürlüklü fotoğrafik leopar+çiçek görseli (bkz. AmbientBackground)
 * burada da zemin olarak kullanılır — tüm modüllerde tutarlı, tek bir görsel
 * kimlik. Üzerine metin okunabilirliğini garanti eden koyu bir "scrim" bindirilir.
 */
export function AppHeader({ title }: AppHeaderProps) {
  const theme = useTheme();
  const { themeId } = useAppTheme();
  const insets = useSafeAreaInsets();
  const leopard = isPatternedTheme(themeId);
  const [gradientStart, gradientEnd] = THEME_GRADIENTS[themeId];
  const textColor = leopard ? theme.colors.primary : theme.colors.onPrimary;

  return (
    <View
      style={{
        paddingTop: insets.top + 14,
        paddingBottom: 28,
        paddingHorizontal: 24,
        borderBottomLeftRadius: CARD_RADIUS + 6,
        borderBottomRightRadius: CARD_RADIUS + 6,
        overflow: "hidden",
        ...ELEVATED_SHADOW,
      }}
    >
      {leopard ? (
        <>
          <Image source={LEOPARD_BACKGROUND_IMAGE} resizeMode="cover" style={StyleSheet.absoluteFill} />
          <View pointerEvents="none" style={[StyleSheet.absoluteFill, { backgroundColor: "rgba(10, 5, 6, 0.55)" }]} />
        </>
      ) : (
        <LinearGradient
          colors={[gradientStart, gradientEnd]}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
          style={StyleSheet.absoluteFill}
        />
      )}
      <View
        pointerEvents="none"
        style={{
          position: "absolute",
          top: -50,
          right: -40,
          width: 170,
          height: 170,
          borderRadius: 85,
          backgroundColor: leopard ? "rgba(214,154,160,0.10)" : "rgba(255,255,255,0.11)",
        }}
      />
      <View
        pointerEvents="none"
        style={{
          position: "absolute",
          bottom: -60,
          right: 50,
          width: 100,
          height: 100,
          borderRadius: 50,
          backgroundColor: leopard ? "rgba(214,154,160,0.07)" : "rgba(255,255,255,0.07)",
        }}
      />
      {/* Üstten alta hafifleyen ışık yansıması — camsı/parlak bir üst yüzey hissi */}
      <View
        pointerEvents="none"
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: "45%",
          backgroundColor: leopard ? "rgba(214,154,160,0.05)" : "rgba(255,255,255,0.06)",
        }}
      />

      <View style={{ gap: 8 }}>
        <View style={{ flexDirection: "row", alignItems: "center", gap: 8 }}>
          <Logo size={22} primaryColor={textColor} />
          <Text
            variant="labelLarge"
            style={{ color: textColor, opacity: leopard ? 1 : 0.85, letterSpacing: 1.4 }}
          >
            BEAUTYLOOP
          </Text>
        </View>
        <Text
          style={{
            color: textColor,
            fontFamily: FONT_DISPLAY_BOLD,
            fontSize: 34,
            letterSpacing: -0.3,
            lineHeight: 39,
          }}
        >
          {title}
        </Text>
      </View>
    </View>
  );
}
