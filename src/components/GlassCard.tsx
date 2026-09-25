import { BlurView } from "expo-blur";
import type { ReactNode } from "react";
import { View, type StyleProp, type ViewStyle } from "react-native";
import { useTheme } from "react-native-paper";

import { useAppTheme } from "@/theme/ThemeContext";
import { CARD_RADIUS, THEME_GRADIENTS, glowShadow, hexToRgba } from "@/theme/theme";

type GlassCardProps = {
  children: ReactNode;
  style?: StyleProp<ViewStyle>;
  padding?: number;
  radius?: number;
  /** Blur yoğunluğu — çok hafif buzlu cam hissi için düşük tutulur. */
  intensity?: number;
  /** Kenar/glow rengi olarak tema degradesi yerine sabit bir renk vermek istersen. */
  accentColor?: string;
};

/**
 * Sert, düz kartların yerine geçen "katmanlı" kart: arkadaki rengi hafifçe
 * geçiren buzlu cam (BlurView) zemin, çok ince ışıklı kenar çizgisi (inner
 * glow) ve siyah yerine rengin kendisinden yayılan yumuşak glow gölgesi.
 * Gölge, `overflow:hidden` uygulanan blur katmanının klipslenmesini önlemek
 * için ayrı bir dış View üzerinde tutulur (RN'de shadow + overflow hidden
 * aynı view'da birlikte çalışmaz).
 */
export function GlassCard({ children, style, padding = 20, radius = CARD_RADIUS, intensity = 26, accentColor }: GlassCardProps) {
  const theme = useTheme();
  const { themeId } = useAppTheme();
  const accent = accentColor ?? THEME_GRADIENTS[themeId][0];

  return (
    <View style={[{ borderRadius: radius, ...glowShadow(accent) }, style]}>
      <View style={{ borderRadius: radius, overflow: "hidden" }}>
        <BlurView
          intensity={intensity}
          tint={theme.dark ? "dark" : "light"}
          style={{
            backgroundColor: hexToRgba(theme.colors.surface, theme.dark ? 0.6 : 0.74),
            borderWidth: 1,
            borderColor: hexToRgba(accent, theme.dark ? 0.35 : 0.28),
            padding,
          }}
        >
          {children}
        </BlurView>
      </View>
    </View>
  );
}
