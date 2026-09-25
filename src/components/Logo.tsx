import { useId } from "react";
import Svg, { Circle, Defs, LinearGradient, Path, Stop } from "react-native-svg";
import { useTheme } from "react-native-paper";

export interface LogoProps {
  /** Logonun kenar uzunluğu (px). Varsayılan: 48 */
  size?: number;
  /** Ana renk: halkanın ve damlanın koyu ucu, başlangıç boncuğu. Verilmezse theme.colors.primary */
  primaryColor?: string;
  /** İkincil renk: gradyanların açık ucu. Verilmezse ana rengin açık tonu kullanılır */
  secondaryColor?: string;
}

const VIEWBOX = 120;

/**
 * skinLoop marka logosu. Renkleri dışarıdan verilmezse `react-native-paper`'ın
 * `useTheme()`'i üzerinden okunur — bu da PaperProvider'a beslenen seçili
 * temayı (bkz. src/theme/ThemeContext.tsx) yansıttığından, logo 6 temanın
 * hepsinde otomatik olarak doğru `primary` rengiyle çizilir.
 */
export function Logo({ size = 48, primaryColor, secondaryColor }: LogoProps) {
  const theme = useTheme();

  // Aynı ekranda birden fazla Logo olsa (özellikle Expo Web'de) gradyan id'leri çakışmasın
  const uid = useId().replace(/[^a-zA-Z0-9_-]/g, "");
  const ringId = `skinloop-ring-${uid}`;
  const dropId = `skinloop-drop-${uid}`;

  const primary = primaryColor ?? theme.colors.primary;
  const light = secondaryColor ?? primary;
  // secondaryColor verilmediyse aynı rengin yarı saydam hâli açık uç görevi görür
  const lightOpacity = secondaryColor ? 1 : 0.6;

  return (
    <Svg
      width={size}
      height={size}
      viewBox={`0 0 ${VIEWBOX} ${VIEWBOX}`}
      fill="none"
      accessibilityRole="image"
      accessibilityLabel="BeautyLoop"
    >
      <Defs>
        <LinearGradient id={ringId} x1={20} y1={16} x2={100} y2={104} gradientUnits="userSpaceOnUse">
          <Stop offset="0" stopColor={light} stopOpacity={lightOpacity} />
          <Stop offset="1" stopColor={primary} />
        </LinearGradient>
        <LinearGradient id={dropId} x1={60} y1={42} x2={60} y2={79} gradientUnits="userSpaceOnUse">
          <Stop offset="0" stopColor={light} stopOpacity={lightOpacity} />
          <Stop offset="1" stopColor={primary} />
        </LinearGradient>
      </Defs>

      {/* Rutin döngüsü: hafif açık halka */}
      <Path
        d="M71.39 17.5A44 44 0 1 1 41.4 20.13"
        stroke={`url(#${ringId})`}
        strokeWidth={7}
        strokeLinecap="round"
        fill="none"
      />
      {/* Döngünün başlangıç boncuğu */}
      <Circle cx={71.39} cy={17.5} r={5.5} fill={primary} />

      {/* Serum damlası */}
      <Path
        d="M60 42C60 42 47 57 47 66A13 13 0 0 0 73 66C73 57 60 42 60 42Z"
        fill={`url(#${dropId})`}
      />
      {/* Damladaki parlama (her temada okunması için sabit beyaz) */}
      <Path
        d="M53.11 64.78A7 7 0 0 0 56.5 72.06"
        stroke="#FFFFFF"
        strokeOpacity={0.75}
        strokeWidth={2.5}
        strokeLinecap="round"
        fill="none"
      />
    </Svg>
  );
}

export default Logo;
