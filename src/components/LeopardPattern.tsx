import { useId } from "react";
import Svg, { Defs, G, Path, Pattern, Rect } from "react-native-svg";

type LeopardPatternProps = {
  width?: number | string;
  height?: number | string;
  /** Rosette çerçevesi — koyu espresso/siyah halka rengi. */
  borderColor?: string;
  /** Rosette içi — daha açık, karamelimsi kahverengi dolgu. */
  fillColor?: string;
  /** Desenin genel opaklığı — göz yormaması için varsayılan çok düşük (%8). */
  opacity?: number;
  /** Tek bir döşeme (tile) karesinin kenar uzunluğu (px) — deseni küçültüp/büyütür. */
  tileSize?: number;
  style?: object;
};

/**
 * Gerçekçi, "donut" (içi boş rozet) yapılı leopar rosette deseni.
 *
 * Her rosette, iki üst üste bindirilmiş düzensiz/lobüllü path'ten oluşur:
 * önce büyük, koyu espresso renkli dış leke çizilir, ardından onun üzerine
 * daha küçük, karamelimsi kahverengi bir iç leke bindirilir — dış lekenin
 * kenarları görünür kalarak klasik "halka" (ring) görünümü ortaya çıkar.
 * Basit yuvarlak "benek"lerden farklı olarak her path birden fazla eğrili
 * lobdan oluşuyor, bu yüzden düzensiz/organik bir kontur veriyor. İki farklı
 * rosette varyantı + birkaç küçük dolu leke, referans görseldeki yoğun/
 * karmaşık dokuyu taklit etmek için tek bir `<Pattern>` karosuna dağıtılır.
 */
export function LeopardPattern({
  width = "100%",
  height = "100%",
  borderColor = "#2B1E16",
  fillColor = "#A87C52",
  opacity = 0.08,
  tileSize = 120,
  style,
}: LeopardPatternProps) {
  const uid = useId().replace(/[^a-zA-Z0-9_-]/g, "");
  const patternId = `leopard-rosettes-${uid}`;

  return (
    <Svg width={width} height={height} style={style} pointerEvents="none">
      <Defs>
        <Pattern
          id={patternId}
          patternUnits="userSpaceOnUse"
          width={tileSize}
          height={tileSize}
          patternTransform="rotate(9)"
        >
          <G opacity={opacity}>
            {/* Rosette A — büyük, lobüllü halka (sol üst) */}
            <Path
              d="M10 30 C6 22 10 12 20 9 C28 4 40 6 45 15 C53 17 56 27 50 35 C53 44 45 52 35 50 C27 56 15 52 13 43 C4 41 3 34 10 30 Z"
              fill={borderColor}
            />
            <Path
              d="M18 29 C16 23 20 17 27 16 C33 13 40 16 41 23 C46 25 46 32 41 36 C41 42 34 45 29 41 C22 44 17 39 18 33 Z"
              fill={fillColor}
            />

            {/* Rosette B — daha uzun/asimetrik halka (sağ orta) */}
            <Path
              d="M70 55 C65 48 70 39 79 38 C85 32 96 34 99 43 C107 46 108 56 100 61 C102 70 92 76 84 71 C76 76 68 70 70 62 Z"
              fill={borderColor}
            />
            <Path
              d="M77 54 C75 49 79 44 85 44 C90 40 97 43 98 49 C103 52 102 58 97 61 C97 66 90 68 86 65 C80 67 76 63 77 58 Z"
              fill={fillColor}
            />

            {/* Rosette C — küçük yuvarlak halka (alt orta) */}
            <Path
              d="M40 82 C37 76 41 69 48 68 C54 64 62 68 63 75 C69 77 69 85 63 88 C63 94 55 97 50 93 C43 96 38 91 40 86 Z"
              fill={borderColor}
            />
            <Path
              d="M46 81 C45 77 48 73 53 73 C57 70 62 73 63 78 C67 80 66 85 62 87 C62 91 56 93 53 90 C48 92 45 88 46 84 Z"
              fill={fillColor}
            />

            {/* Küçük dolu lekeler — rosette kümeleri arasındaki dağınık beneklere karşılık gelir */}
            <Path d="M100 12 C98 8 102 5 106 7 C110 6 112 11 109 14 C111 18 106 21 103 18 C99 20 96 16 100 12 Z" fill={borderColor} />
            <Path d="M15 68 C13 65 16 62 19 63 C22 62 24 66 21 68 C23 71 19 74 16 71 C13 73 12 70 15 68 Z" fill={borderColor} />
            <Path d="M92 92 C90 89 93 86 96 87 C99 86 101 90 98 92 C100 95 96 98 93 95 C90 97 89 94 92 92 Z" fill={borderColor} />
            <Path d="M60 15 C59 13 61 11 63 12 C65 11 67 13 65 15 C67 17 64 19 62 17 C60 19 58 17 60 15 Z" fill={borderColor} />
          </G>
        </Pattern>
      </Defs>
      <Rect x={0} y={0} width="100%" height="100%" fill={`url(#${patternId})`} />
    </Svg>
  );
}

export default LeopardPattern;
