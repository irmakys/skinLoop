import { useConvexAuth } from "@convex-dev/auth/react";
import { Redirect, Stack } from "expo-router";

export default function AuthLayout() {
  const { isAuthenticated, isLoading } = useConvexAuth();

  if (!isLoading && isAuthenticated) {
    return <Redirect href="/(tabs)/planner" />;
  }

  return <Stack screenOptions={{ headerShown: false }} />;
}
