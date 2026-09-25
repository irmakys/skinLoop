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
          top: -90,
          right: -70,
          width: 280,
          height: 280,
          borderRadius: 140,
          backgroundColor: hexToRgba(colorA, 0.16),
        }}
      />
      <View
        pointerEvents="none"
        style={{
          position: "absolute",
          top: 260,
          left: -110,
          width: 220,
          height: 220,
          borderRadius: 110,
          backgroundColor: hexToRgba(colorB, 0.12),
        }}
      />
      <View
        pointerEvents="none"
        style={{
          position: "absolute",
          bottom: 40,
          right: -90,
          width: 240,
          height: 240,
          borderRadius: 120,
          backgroundColor: hexToRgba(colorA, 0.09),
        }}
      />
      {children}
    </View>
  );
}
