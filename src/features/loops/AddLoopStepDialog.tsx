import { useMutation } from "convex/react";
import { useState } from "react";
import { View } from "react-native";
import { Button, Checkbox, Dialog, HelperText, Portal, Text } from "react-native-paper";

import { api } from "@convex/_generated/api";
import type { Id } from "@convex/_generated/dataModel";

type Product = { _id: Id<"products">; name: string };

type AddLoopStepDialogProps = {
  loopId: Id<"loops"> | null;
  /** O rutinde zaten adım olarak bulunan ürün id'leri — listede gösterilmez. */
  existingProductIds: Set<Id<"products">>;
  products: Product[];
  onDismiss: () => void;
};

/** Var olan bir rutine sonradan ürün eklemek için ürün listesi diyaloğu. */
export function AddLoopStepDialog({ loopId, existingProductIds, products, onDismiss }: AddLoopStepDialogProps) {
  const addLoopStep = useMutation(api.loops.addLoopStep);
  const [pendingProductId, setPendingProductId] = useState<Id<"products"> | null>(null);
  const [isOptional, setIsOptional] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const availableProducts = products.filter((product) => !existingProductIds.has(product._id));

  async function handleAdd(productId: Id<"products">) {
    if (!loopId) {
      return;
    }
    setError(null);
    setPendingProductId(productId);
    try {
      await addLoopStep({ loopId, productId, isOptional });
    } catch (err) {
      setError(err instanceof Error ? err.message : "Ürün eklenemedi.");
    } finally {
      setPendingProductId(null);
    }
  }

  return (
    <Portal>
      <Dialog visible={loopId !== null} onDismiss={onDismiss}>
        <Dialog.Title>Rutine Ürün Ekle</Dialog.Title>
        <Dialog.Content style={{ gap: 4 }}>
          <Checkbox.Item
            label="Opsiyonel adım (Tembel Mod'da atlanır)"
            labelStyle={{ fontSize: 13 }}
            status={isOptional ? "checked" : "unchecked"}
            onPress={() => setIsOptional((current) => !current)}
            style={{ paddingHorizontal: 0 }}
          />

          {availableProducts.length === 0 ? (
            <Text>Eklenebilecek başka ürün yok — önce Ürünlerim&apos;e yeni ürün ekle.</Text>
          ) : (
            availableProducts.map((product) => (
              <View
                key={product._id}
                style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between", paddingVertical: 6 }}
              >
                <Text style={{ flex: 1 }} numberOfLines={1}>
                  {product.name}
                </Text>
                <Button
                  compact
                  mode="outlined"
                  loading={pendingProductId === product._id}
                  onPress={() => handleAdd(product._id)}
                >
                  Ekle
                </Button>
              </View>
            ))
          )}

          {error ? <HelperText type="error">{error}</HelperText> : null}
        </Dialog.Content>
        <Dialog.Actions>
          <Button onPress={onDismiss}>Kapat</Button>
        </Dialog.Actions>
      </Dialog>
    </Portal>
  );
}
