import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { ConvexAuthProvider } from "@convex-dev/auth/react";
import { Stack } from "expo-router";
import { PaperProvider } from "react-native-paper";

import { convex, secureStorage } from "@/lib/convexClient";
import { AppThemeProvider, useAppTheme } from "@/theme/ThemeContext";

function ThemedApp() {
  const { theme } = useAppTheme();

  return (
    <PaperProvider
      theme={theme}
      settings={{
        // Expo Go'da @expo/vector-icons'ın fontları hazır geldiğinden
        // (native autolink gerektiren react-native-vector-icons'ın
        // aksine) ikonlar için açıkça bu modülü kullanıyoruz.
        icon: (props) => <MaterialCommunityIcons {...props} />,
      }}
    >
      <Stack screenOptions={{ headerShown: false }} />
    </PaperProvider>
  );
}

export default function RootLayout() {
  return (
    <ConvexAuthProvider client={convex} storage={secureStorage}>
      <AppThemeProvider>
        <ThemedApp />
      </AppThemeProvider>
    </ConvexAuthProvider>
  );
}
