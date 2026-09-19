import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { useConvexAuth } from "@convex-dev/auth/react";
import { Redirect, Tabs } from "expo-router";
import { useTheme } from "react-native-paper";

import { LegalConsentGate } from "@/features/auth/LegalConsentGate";

export default function TabsLayout() {
  const { isAuthenticated, isLoading } = useConvexAuth();
  const theme = useTheme();

  if (!isLoading && !isAuthenticated) {
    return <Redirect href="/(auth)/sign-in" />;
  }

  return (
    <LegalConsentGate>
      <Tabs
        screenOptions={{
          tabBarActiveTintColor: theme.colors.primary,
          tabBarInactiveTintColor: theme.colors.onSurfaceVariant,
          tabBarStyle: {
            backgroundColor: theme.colors.surface,
            borderTopColor: theme.colors.outlineVariant,
          },
        }}
      >
        <Tabs.Screen
          name="planner"
          options={{
            title: "Planlayıcı",
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="calendar-today" color={color} size={size} />
            ),
          }}
        />
        <Tabs.Screen
          name="loops/index"
          options={{
            title: "Rutinler",
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="calendar-check-outline" color={color} size={size} />
            ),
          }}
        />
        <Tabs.Screen
          name="vanity/index"
          options={{
            title: "Ürünlerim",
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="bottle-tonic-outline" color={color} size={size} />
            ),
          }}
        />
        <Tabs.Screen
          name="journal/index"
          options={{
            title: "Galeri",
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="image-multiple-outline" color={color} size={size} />
            ),
          }}
        />
        <Tabs.Screen
          name="settings"
          options={{
            title: "Ayarlar",
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="cog-outline" color={color} size={size} />
            ),
          }}
        />

        {/* Form/işlem alt sayfaları — sekme çubuğunda gösterilmez */}
        <Tabs.Screen name="vanity/add" options={{ href: null }} />
        <Tabs.Screen name="journal/capture" options={{ href: null }} />
        <Tabs.Screen name="journal/compare" options={{ href: null }} />
      </Tabs>
    </LegalConsentGate>
  );
}
