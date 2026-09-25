import { useId, type ReactNode } from "react";
import { View } from "react-native";
import Svg, { Circle, Defs, LinearGradient, Stop } from "react-native-svg";

type CircularProgressProps = {
  size?: number;
  strokeWidth?: number;
  /** 0-1 aralığında ilerleme. */
  progress: number;
  /** Halkanın rengi — iki renk verilirse degrade olarak çizilir (bkz. THEME_GRADIENTS). */
  color: string | [string, string];
  trackColor: string;
  children?: ReactNode;
};

/**
 * Düz `ProgressBar` yerine kullanılan dairesel ilerleme göstergesi —
 * "Haftalık Uyum Skoru" gibi öne çıkan tek bir metriği, jenerik Material
 * çizgisi yerine daha imza niteliğinde bir şekille sunar.
 */
export function CircularProgress({
  size = 88,
  strokeWidth = 10,
  progress,
  color,
  trackColor,
  children,
}: CircularProgressProps) {
  const uid = useId().replace(/[^a-zA-Z0-9_-]/g, "");
  const gradientId = `circular-progress-${uid}`;
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const clamped = Math.max(0, Math.min(1, progress));
  const dashOffset = circumference * (1 - clamped);
  const isGradient = Array.isArray(color);

  return (
    <View style={{ width: size, height: size, alignItems: "center", justifyContent: "center" }}>
      <Svg width={size} height={size} style={{ position: "absolute", transform: [{ rotate: "-90deg" }] }}>
        {isGradient ? (
          <Defs>
            <LinearGradient id={gradientId} x1="0" y1="0" x2="1" y2="1">
              <Stop offset="0" stopColor={color[0]} />
              <Stop offset="1" stopColor={color[1]} />
            </LinearGradient>
          </Defs>
        ) : null}
        <Circle cx={size / 2} cy={size / 2} r={radius} stroke={trackColor} strokeWidth={strokeWidth} fill="none" />
        <Circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke={isGradient ? `url(#${gradientId})` : color}
          strokeWidth={strokeWidth}
          fill="none"
          strokeDasharray={`${circumference} ${circumference}`}
          strokeDashoffset={dashOffset}
          strokeLinecap="round"
        />
      </Svg>
      {children}
    </View>
  );
}
