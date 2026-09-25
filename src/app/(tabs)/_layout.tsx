import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { useConvexAuth } from "@convex-dev/auth/react";
import { Redirect, Tabs } from "expo-router";
import type { ComponentProps } from "react";
import { View, type ColorValue } from "react-native";
import { useTheme } from "react-native-paper";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import { AppHeader } from "@/components/AppHeader";
import { LegalConsentGate } from "@/features/auth/LegalConsentGate";
import { hexToRgba } from "@/theme/theme";

type IconName = ComponentProps<typeof MaterialCommunityIcons>["name"];

/** Odaklanınca ikonun arkasında beliren dolgu "hap" — düz, statik ikon listesi yerine seçili sekmeyi belirginleştirir. */
function TabIcon({ name, color, focused }: { name: IconName; color: ColorValue; focused: boolean }) {
  const theme = useTheme();
  return (
    <View
      style={{
        width: 46,
        height: 32,
        borderRadius: 16,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: focused ? theme.colors.primaryContainer : "transparent",
      }}
    >
      <MaterialCommunityIcons name={name} color={color} size={21} />
    </View>
  );
}

export default function TabsLayout() {
  const { isAuthenticated, isLoading } = useConvexAuth();
  const theme = useTheme();
  const insets = useSafeAreaInsets();

  if (!isLoading && !isAuthenticated) {
    return <Redirect href="/(auth)/sign-in" />;
  }

  // Jest çubuğu (Home Indicator) olmayan eski/tuşlu Android cihazlarda
  // insets.bottom 0 gelebilir — bu durumda bile menü ekranın dibine
  // yapışmasın diye küçük sabit bir minimum boşluk uyguluyoruz.
  const bottomPadding = insets.bottom > 0 ? insets.bottom : 8;

  return (
    <LegalConsentGate>
      <Tabs
        screenOptions={{
          tabBarActiveTintColor: theme.colors.onPrimaryContainer,
          tabBarInactiveTintColor: theme.colors.onSurfaceVariant,
          tabBarShowLabel: true,
          tabBarLabelStyle: { fontSize: 10.5, fontWeight: "700", marginTop: 3 },
          tabBarItemStyle: { paddingVertical: 6, justifyContent: "center" },
          // Standart, alışılmış uygulama alt menüsü: ekranın en altına
          // sabit (kaydırma alanının tamamen dışında), tam opak zemin,
          // köşeleri yuvarlatılmamış, ince bir üst kenarlıkla içerikten
          // ayrılan klasik bir tab bar. Yükseklik ve alt boşluk cihazın
          // gerçek güvenli alanına (Home Indicator / gesture bar / tuşlu
          // nav) dinamik olarak bağlı — hiçbir sabit piksel varsayımı yok.
          tabBarStyle: {
            position: "relative",
            height: 60 + bottomPadding,
            paddingTop: 8,
            paddingBottom: bottomPadding,
            paddingHorizontal: 4,
            backgroundColor: theme.colors.surface,
            borderTopWidth: 1,
            borderTopColor: hexToRgba(theme.colors.outline, 0.15),
            elevation: 8,
          },
          // Varsayılan düz React Navigation başlığı yerine, her sekmede
          // istisnasız aynı marka bloğunu gösteren tek noktadan yönetilen
          // özel başlık (bkz. src/components/AppHeader.tsx).
          header: ({ options }) => <AppHeader title={options.title ?? ""} />,
        }}
      >
        <Tabs.Screen
          name="planner"
          options={{
            title: "Planlayıcı",
            tabBarIcon: ({ color, focused }) => (
              <TabIcon name="calendar-today" color={color} focused={focused} />
            ),
          }}
        />
        <Tabs.Screen
          name="loops/index"
          options={{
            title: "Rutinler",
            tabBarIcon: ({ color, focused }) => (
              <TabIcon name="calendar-check-outline" color={color} focused={focused} />
            ),
          }}
        />
        <Tabs.Screen
          name="vanity/index"
          options={{
            title: "Ürünlerim",
            tabBarIcon: ({ color, focused }) => (
              <TabIcon name="bottle-tonic-outline" color={color} focused={focused} />
            ),
          }}
        />
        <Tabs.Screen
          name="journal/index"
          options={{
            title: "Galeri",
            tabBarIcon: ({ color, focused }) => (
              <TabIcon name="image-multiple-outline" color={color} focused={focused} />
            ),
          }}
        />
        <Tabs.Screen
          name="settings"
          options={{
            title: "Ayarlar",
            tabBarIcon: ({ color, focused }) => (
              <TabIcon name="cog-outline" color={color} focused={focused} />
            ),
          }}
        />

        {/* Form/işlem alt sayfaları — sekme çubuğunda gösterilmez, ama aynı üst başlık bloğunu paylaşır */}
        <Tabs.Screen name="vanity/add" options={{ href: null, title: "Ürün Ekle" }} />
        <Tabs.Screen name="journal/capture" options={{ href: null, title: "Fotoğraf Çek" }} />
        <Tabs.Screen name="journal/compare" options={{ href: null, title: "Karşılaştır" }} />
        <Tabs.Screen name="reports" options={{ href: null, title: "Rutin Raporu" }} />
      </Tabs>
    </LegalConsentGate>
  );
}
