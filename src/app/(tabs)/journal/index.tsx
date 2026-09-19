import { api } from "@convex/_generated/api";
import { useQuery } from "convex/react";
import { useLocalSearchParams, useRouter } from "expo-router";
import { View } from "react-native";
import { FAB, useTheme } from "react-native-paper";

import { JournalGallery } from "@/features/journal/JournalGallery";

/**
 * `loopId` yalnızca isteğe bağlı bir filtre parametresidir (rutin ekranından
 * "Cilt Günlüğü" albümüne geçişte kullanılır). Bu ekran, Journal fotoğraf/not
 * verisini hiçbir zaman Convex'e göndermez veya Convex'ten okumaz — yalnızca
 * zaten senkron olan Loop adlarını etiket amaçlı okur (Constitution İlke I).
 */
export default function JournalScreen() {
  const theme = useTheme();
  const router = useRouter();
  const { loopId } = useLocalSearchParams<{ loopId?: string }>();
  const loops = useQuery(api.loops.listLoops);

  const loopNames = Object.fromEntries((loops ?? []).map((loop) => [loop._id, loop.name]));

  return (
    <View style={{ flex: 1, backgroundColor: theme.colors.background }}>
      <JournalGallery loopId={loopId} loopNames={loopNames} />
      <FAB
        icon="camera"
        mode="elevated"
        color={theme.colors.onPrimary}
        style={{
          position: "absolute",
          right: 16,
          bottom: 16,
          backgroundColor: theme.colors.primary,
          borderRadius: 20,
        }}
        onPress={() =>
          router.push(
            loopId ? { pathname: "/(tabs)/journal/capture", params: { loopId } } : "/(tabs)/journal/capture",
          )
        }
      />
    </View>
  );
}
