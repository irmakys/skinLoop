import { useMutation } from "convex/react";
import { useState } from "react";
import { View } from "react-native";
import { Button, Checkbox, HelperText, Text } from "react-native-paper";

import { api } from "@convex/_generated/api";
import type { Id } from "@convex/_generated/dataModel";
import { AppDialog } from "@/components/AppDialog";
import { useLocale } from "@/i18n/LocaleContext";

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
  const { t } = useLocale();
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
      setError(err instanceof Error ? err.message : t("loops.addProductFailed"));
    } finally {
      setPendingProductId(null);
    }
  }

  return (
    <AppDialog
      visible={loopId !== null}
      onDismiss={onDismiss}
      title={t("loops.addProductToLoopTitle")}
      contentGap={4}
      actions={<Button onPress={onDismiss}>{t("common.close")}</Button>}
    >
      <Checkbox.Item
        label={t("loops.optionalStep")}
        labelStyle={{ fontSize: 13 }}
        status={isOptional ? "checked" : "unchecked"}
        onPress={() => setIsOptional((current) => !current)}
        style={{ paddingHorizontal: 0 }}
      />

      {availableProducts.length === 0 ? (
        <Text>{t("loops.noMoreProducts")}</Text>
      ) : (
        availableProducts.map((product) => (
          <View
            key={product._id}
            style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between", gap: 8, paddingVertical: 6 }}
          >
            <Text style={{ flex: 1, flexShrink: 1 }} numberOfLines={2}>
              {product.name}
            </Text>
            <Button
              compact
              mode="outlined"
              loading={pendingProductId === product._id}
              onPress={() => handleAdd(product._id)}
            >
              {t("common.add")}
            </Button>
          </View>
        ))
      )}

      {error ? <HelperText type="error">{error}</HelperText> : null}
    </AppDialog>
  );
}
