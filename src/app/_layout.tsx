import {
  Fraunces_600SemiBold,
  Fraunces_600SemiBold_Italic,
  Fraunces_700Bold,
  useFonts,
} from "@expo-google-fonts/fraunces";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { ConvexAuthProvider } from "@convex-dev/auth/react";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";
import { PaperProvider } from "react-native-paper";
import { SafeAreaProvider } from "react-native-safe-area-context";

import { convex, secureStorage } from "@/lib/convexClient";
import { AppThemeProvider, useAppTheme } from "@/theme/ThemeContext";

SplashScreen.preventAutoHideAsync().catch(() => {});

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
  const [fontsLoaded] = useFonts({
    Fraunces_600SemiBold,
    Fraunces_700Bold,
    Fraunces_600SemiBold_Italic,
  });

  useEffect(() => {
    if (fontsLoaded) {
      SplashScreen.hideAsync().catch(() => {});
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <SafeAreaProvider>
      <ConvexAuthProvider client={convex} storage={secureStorage}>
        <AppThemeProvider>
          <ThemedApp />
        </AppThemeProvider>
      </ConvexAuthProvider>
    </SafeAreaProvider>
  );
}
