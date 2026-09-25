import { BlurView } from "expo-blur";
import type { ReactNode } from "react";
import { View, type ViewStyle } from "react-native";
import { useTheme } from "react-native-paper";

import { THEME_GRADIENTS, hexToRgba } from "@/theme/theme";
import { useAppTheme } from "@/theme/ThemeContext";

type AmbientBackgroundProps = {
  children: ReactNode;
  style?: ViewStyle;
};

/**
 * Düz tek renkli sayfa zemini yerine, temanın degrade renklerinden üretilmiş
 * yumuşak, büyük, düşük opaklıklı "blob"larla desenlenmiş canlı bir zemin.
 * Tüm sekme ekranlarının ortak arka planı — bu sayede sayfalar birbirine
 * (ve üstteki degrade başlığa/altta yüzen buzlu cam sekme çubuğuna) görsel
 * olarak bağlı hissettiriyor, "düz beyaz" değil.
 */
export function AmbientBackground({ children, style }: AmbientBackgroundProps) {
  const theme = useTheme();
  const { themeId } = useAppTheme();
  const [colorA, colorB] = THEME_GRADIENTS[themeId];

  return (
    <View style={[{ flex: 1, backgroundColor: theme.colors.background }, style]}>
      <View
        pointerEvents="none"
        style={{
          position: "absolute",
          top: -130,
          right: -110,
          width: 420,
          height: 420,
          borderRadius: 210,
          backgroundColor: hexToRgba(colorA, 0.22),
        }}
      />
      <View
        pointerEvents="none"
        style={{
          position: "absolute",
          top: 300,
          left: -150,
          width: 340,
          height: 340,
          borderRadius: 170,
          backgroundColor: hexToRgba(colorB, 0.18),
        }}
      />
      <View
        pointerEvents="none"
        style={{
          position: "absolute",
          bottom: 20,
          right: -130,
          width: 340,
          height: 340,
          borderRadius: 170,
          backgroundColor: hexToRgba(colorA, 0.14),
        }}
      />
      {/* Blob'ları gerçek anlamda "buzlu cam" hissi verecek şekilde bulanıklaştırır —
          sert renk sınırları yerine yumuşak, huzurlu bir derinlik katmanı. */}
      <BlurView
        pointerEvents="none"
        intensity={55}
        tint={theme.dark ? "dark" : "light"}
        style={{ position: "absolute", top: 0, left: 0, right: 0, bottom: 0 }}
      />
      {children}
    </View>
  );
}
