import { api } from "@convex/_generated/api";
import { useQuery } from "convex/react";
import { useLocalSearchParams, useRouter } from "expo-router";
import { FAB, useTheme } from "react-native-paper";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import { AmbientBackground } from "@/components/AmbientBackground";
import { JournalGallery } from "@/features/journal/JournalGallery";
import { FAB_BOTTOM_OFFSET } from "@/theme/theme";

/**
 * `loopId` yalnızca isteğe bağlı bir filtre parametresidir (rutin ekranından
 * "Cilt Günlüğü" albümüne geçişte kullanılır). Bu ekran, Journal fotoğraf/not
 * verisini hiçbir zaman Convex'e göndermez veya Convex'ten okumaz — yalnızca
 * zaten senkron olan Loop adlarını etiket amaçlı okur (Constitution İlke I).
 */
export default function JournalScreen() {
  const theme = useTheme();
  const router = useRouter();
  const insets = useSafeAreaInsets();
  const { loopId } = useLocalSearchParams<{ loopId?: string }>();
  const loops = useQuery(api.loops.listLoops);

  const loopNames = Object.fromEntries((loops ?? []).map((loop) => [loop._id, loop.name]));

  return (
    <AmbientBackground>
      <JournalGallery loopId={loopId} loopNames={loopNames} />
      <FAB
        icon="camera"
        mode="elevated"
        color={theme.colors.onPrimary}
        style={{
          position: "absolute",
          right: 16,
          bottom: FAB_BOTTOM_OFFSET + insets.bottom,
          backgroundColor: theme.colors.primary,
          borderRadius: 20,
        }}
        onPress={() =>
          router.push(
            loopId ? { pathname: "/(tabs)/journal/capture", params: { loopId } } : "/(tabs)/journal/capture",
          )
        }
      />
    </AmbientBackground>
  );
}
