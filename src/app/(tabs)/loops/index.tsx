import { useState } from "react";
import { ScrollView } from "react-native";
import { FAB, useTheme } from "react-native-paper";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import { AmbientBackground } from "@/components/AmbientBackground";
import { CreateLoopForm } from "@/features/loops/CreateLoopForm";
import { LoopRunner } from "@/features/loops/LoopRunner";
import { useBottomClearance } from "@/hooks/useBottomClearance";
import { FAB_BOTTOM_OFFSET } from "@/theme/theme";

export default function LoopsScreen() {
  const theme = useTheme();
  const insets = useSafeAreaInsets();
  const [isCreating, setIsCreating] = useState(false);
  const bottomClearance = useBottomClearance();

  if (isCreating) {
    return <CreateLoopForm onSaved={() => setIsCreating(false)} />;
  }

  return (
    <AmbientBackground>
      <ScrollView contentContainerStyle={{ paddingBottom: bottomClearance }}>
        <LoopRunner />
      </ScrollView>
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
        onPress={() => setIsCreating(true)}
      />
    </AmbientBackground>
  );
}
