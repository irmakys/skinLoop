import { useRouter } from "expo-router";
import { View } from "react-native";
import { FAB, useTheme } from "react-native-paper";

import { ProductList } from "@/features/vanity/ProductList";

export default function VanityScreen() {
  const router = useRouter();
  const theme = useTheme();

  return (
    <View style={{ flex: 1, backgroundColor: theme.colors.background }}>
      <ProductList />
      <FAB
        icon="plus"
        mode="elevated"
        color={theme.colors.onPrimary}
        style={{
          position: "absolute",
          right: 16,
          bottom: 16,
          backgroundColor: theme.colors.primary,
          borderRadius: 20,
        }}
        onPress={() => router.push("/(tabs)/vanity/add")}
      />
    </View>
  );
}
