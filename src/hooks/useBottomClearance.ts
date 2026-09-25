import { useSafeAreaInsets } from "react-native-safe-area-context";

/**
 * Kaydırılabilir ekran içeriğinin altına, alt sekme çubuğunun (ve varsa
 * Android'in 3 tuşlu sistem gezinme çubuğunun) arkasında kalmaması için
 * eklenen dinamik boşluk. Sabit bir piksel varsaymak yerine cihazın gerçek
 * alt güvenli alanını (`insets.bottom`) baz alıyor, böylece hem jestli hem
 * tuşlu Android'lerde hem de çentikli iPhone'larda son kart tam görünür.
 */
export function useBottomClearance(base = 100): number {
  const insets = useSafeAreaInsets();
  return base + insets.bottom;
}
