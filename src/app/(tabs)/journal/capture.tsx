import { useLocalSearchParams, useRouter } from "expo-router";

import { CapturePhoto } from "@/features/journal/CapturePhoto";

export default function CaptureScreen() {
  const router = useRouter();
  const { loopId } = useLocalSearchParams<{ loopId?: string }>();

  function goToJournal() {
    router.replace(
      loopId ? { pathname: "/(tabs)/journal", params: { loopId } } : "/(tabs)/journal",
    );
  }

  return <CapturePhoto loopId={loopId} onSaved={goToJournal} />;
}
