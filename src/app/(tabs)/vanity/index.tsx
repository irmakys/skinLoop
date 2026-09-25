import { useRouter } from "expo-router";
import { FAB, useTheme } from "react-native-paper";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import { AmbientBackground } from "@/components/AmbientBackground";
import { ProductList } from "@/features/vanity/ProductList";
import { FAB_BOTTOM_OFFSET } from "@/theme/theme";

export default function VanityScreen() {
  const router = useRouter();
  const theme = useTheme();
  const insets = useSafeAreaInsets();

  return (
    <AmbientBackground>
      <ProductList />
      <FAB
        icon="plus"
        mode="elevated"
        color={theme.colors.onPrimary}
        style={{
          position: "absolute",
          right: 16,
          bottom: FAB_BOTTOM_OFFSET + insets.bottom,
          backgroundColor: theme.colors.primary,
          borderRadius: 20,
        }}
        onPress={() => router.push("/(tabs)/vanity/add")}
      />
    </AmbientBackground>
  );
}
