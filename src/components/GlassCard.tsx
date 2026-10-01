import type { ReactNode } from "react";
import { View, type StyleProp, type ViewStyle } from "react-native";
import { useTheme } from "react-native-paper";

import { LeopardPattern } from "@/components/LeopardPattern";
import { useAppTheme } from "@/theme/ThemeContext";
import {
  CARD_RADIUS,
  LEOPARD_BORDER,
  LEOPARD_PATTERN_BORDER,
  LEOPARD_PATTERN_FILL,
  THEME_GRADIENTS,
  glowShadow,
  hexToRgba,
  isPatternedTheme,
} from "@/theme/theme";

type GlassCardProps = {
  children: ReactNode;
  style?: StyleProp<ViewStyle>;
  padding?: number;
  radius?: number;
  /** Geriye dönük uyumluluk için tutulur; artık gerçek zamanlı blur kullanılmadığından etkisizdir. */
  intensity?: number;
  /** Kenar/glow rengi olarak tema degradesi yerine sabit bir renk vermek istersen. */
  accentColor?: string;
};

/**
 * Sert, düz kartların yerine geçen "katmanlı" kart: hafif yarı saydam tonlu
 * bir zemin, çok ince ışıklı kenar çizgisi (inner glow) ve siyah yerine
 * rengin kendisinden yayılan yumuşak glow gölgesi.
 *
 * NOT: Önceden bu zemin `expo-blur`'ın gerçek zamanlı (runtime) `BlurView`'ı
 * ile elde ediliyordu. Bir ekranda aynı anda çok sayıda kart (StatBox'lar,
 * rutin kartları, ayar bölümleri) render edildiğinde her biri kendi
 * BlurView'ını çalıştırıyordu — bu, özellikle sekme geçişlerinde gözlemlenen
 * 2-3 saniyelik donmaların ana kaynağıydı (her BlurView, GPU'da ayrı bir
 * offscreen render+blur geçişi gerektirir; N kart = N pahalı geçiş).
 * Sabit bir yarı saydam renk katmanı görsel olarak neredeyse aynı "cam" hissini
 * verirken bu maliyeti tamamen ortadan kaldırır.
 */
export function GlassCard({ children, style, padding = 20, radius = CARD_RADIUS, accentColor }: GlassCardProps) {
  const theme = useTheme();
  const { themeId } = useAppTheme();
  const leopard = isPatternedTheme(themeId);
  const accent = accentColor ?? THEME_GRADIENTS[themeId][0];
  // Leopar Glam'da kart zemini ne tamamen opak-koyu bir kutu, ne de arkadaki
  // zengin fotoğrafı ezen çiğ bir beyazlık olmalı — dengeli, göze çarpmayan
  // orta-yoğunlukta bir ton. Gerçek blur olmadığından biraz daha yüksek bir
  // alfa kullanılır ki metin kontrastı hâlâ net kalsın.
  const cardAlpha = leopard ? 0.74 : theme.dark ? 0.7 : 0.86;
  const borderColor = leopard ? LEOPARD_BORDER : hexToRgba(accent, theme.dark ? 0.35 : 0.28);

  return (
    <View style={[{ borderRadius: radius, ...glowShadow(accent) }, style]}>
      <View
        style={{
          borderRadius: radius,
          overflow: "hidden",
          backgroundColor: hexToRgba(theme.colors.surface, cardAlpha),
          borderWidth: 1,
          borderColor,
          padding,
        }}
      >
        {leopard ? (
          <LeopardPattern
            borderColor={LEOPARD_PATTERN_BORDER}
            fillColor={LEOPARD_PATTERN_FILL}
            opacity={0.16}
            tileSize={55}
            style={{ position: "absolute", top: 0, left: 0, right: 0, bottom: 0 }}
          />
        ) : null}
        {children}
      </View>
    </View>
  );
}
