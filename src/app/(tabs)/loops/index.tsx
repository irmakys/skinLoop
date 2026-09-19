import { useState } from "react";
import { ScrollView, View } from "react-native";
import { FAB, useTheme } from "react-native-paper";

import { CreateLoopForm } from "@/features/loops/CreateLoopForm";
import { LoopRunner } from "@/features/loops/LoopRunner";

export default function LoopsScreen() {
  const theme = useTheme();
  const [isCreating, setIsCreating] = useState(false);

  if (isCreating) {
    return <CreateLoopForm onSaved={() => setIsCreating(false)} />;
  }

  return (
    <View style={{ flex: 1, backgroundColor: theme.colors.background }}>
      <ScrollView>
        <LoopRunner />
      </ScrollView>
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
        onPress={() => setIsCreating(true)}
      />
    </View>
  );
}
