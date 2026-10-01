import type { ReactNode } from "react";
import { Image, View, type ViewStyle } from "react-native";
import { useTheme } from "react-native-paper";

import { THEME_GRADIENTS, hexToRgba, isPatternedTheme } from "@/theme/theme";
import { useAppTheme } from "@/theme/ThemeContext";

type AmbientBackgroundProps = {
  children: ReactNode;
  style?: ViewStyle;
};

const LEOPARD_BACKGROUND_IMAGE = require("../../assets/images/leopard-background.jpg");

/**
 * Düz tek renkli sayfa zemini yerine, temanın degrade renklerinden üretilmiş
 * yumuşak, büyük, düşük opaklıklı "blob"larla desenlenmiş canlı bir zemin.
 * Tüm sekme ekranlarının ortak arka planı — bu sayede sayfalar birbirine
 * (ve üstteki degrade başlığa/altta yüzen buzlu cam sekme çubuğuna) görsel
 * olarak bağlı hissettiriyor, "düz beyaz" değil.
 *
 * "Leopar Glam" teması özel: burada elle çizilmiş SVG blob/desen yerine,
 * kullanıcının sağladığı yüksek çözünürlüklü fotoğrafik leopar+çiçek görseli
 * tam ekran zemin olarak kullanılır (bkz. assets/images/leopard-background.jpg).
 * Üzerine metin okunabilirliğini her yerde garanti eden hafif bir koyu
 * "scrim" bindirilir; kartlar (GlassCard vb.) zaten kendi opak dolgusuyla bu
 * zeminin üstünde okunaklı şekilde duruyor.
 */
export function AmbientBackground({ children, style }: AmbientBackgroundProps) {
  const theme = useTheme();
  const { themeId } = useAppTheme();
  const leopard = isPatternedTheme(themeId);
  const [colorA, colorB] = THEME_GRADIENTS[themeId];

  return (
    <View style={[{ flex: 1, backgroundColor: theme.colors.background }, style]}>
      {leopard ? (
        <>
          <Image
            source={LEOPARD_BACKGROUND_IMAGE}
            resizeMode="cover"
            style={{ position: "absolute", top: 0, left: 0, right: 0, bottom: 0 }}
          />
          <View
            pointerEvents="none"
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              backgroundColor: "rgba(10, 5, 6, 0.5)",
            }}
          />
        </>
      ) : (
        <>
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
        </>
      )}
      {children}
    </View>
  );
}
