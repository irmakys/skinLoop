import { ConvexReactClient } from "convex/react";
import * as SecureStore from "expo-secure-store";

const convexUrl = process.env.EXPO_PUBLIC_CONVEX_URL;

if (!convexUrl) {
  throw new Error(
    "EXPO_PUBLIC_CONVEX_URL tanımlı değil. `npx convex dev` çalıştırıldıktan sonra oluşan .env.local dosyasını kontrol edin.",
  );
}

export const convex = new ConvexReactClient(convexUrl);

// Convex Auth için React Native token depolama sarmalayıcısı (research.md §4).
export const secureStorage = {
  getItem: SecureStore.getItemAsync,
  setItem: SecureStore.setItemAsync,
  removeItem: SecureStore.deleteItemAsync,
};
