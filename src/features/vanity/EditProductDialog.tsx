import { useMutation } from "convex/react";
import { useState } from "react";
import { Button, Dialog, HelperText, Portal, TextInput } from "react-native-paper";

import { api } from "@convex/_generated/api";
import type { Id } from "@convex/_generated/dataModel";
import { CATEGORY_LABELS_TR, type Category } from "@/constants/categories";
import { CategoryPickerDialog } from "@/features/vanity/CategoryPickerDialog";

export type EditableProduct = {
  _id: Id<"products">;
  name: string;
  brand?: string;
  category: Category;
  paoMonths: number;
};

type EditProductDialogProps = {
  product: EditableProduct | null;
  onDismiss: () => void;
};

export function EditProductDialog({ product, onDismiss }: EditProductDialogProps) {
  const updateProduct = useMutation(api.products.updateProduct);

  const [name, setName] = useState("");
  const [brand, setBrand] = useState("");
  const [category, setCategory] = useState<Category>("other");
  const [paoMonths, setPaoMonths] = useState("12");
  const [categoryDialogVisible, setCategoryDialogVisible] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [loadedProductId, setLoadedProductId] = useState<Id<"products"> | null>(null);

  if (product && product._id !== loadedProductId) {
    setLoadedProductId(product._id);
    setName(product.name);
    setBrand(product.brand ?? "");
    setCategory(product.category);
    setPaoMonths(String(product.paoMonths));
    setError(null);
  }

  async function handleSubmit() {
    if (!product) {
      return;
    }
    setError(null);

    const paoMonthsValue = Number(paoMonths);
    if (!name.trim()) {
      setError("Ürün adı zorunludur.");
      return;
    }
    if (!Number.isFinite(paoMonthsValue) || paoMonthsValue <= 0) {
      setError("PAO süresi (ay) geçerli bir sayı olmalı.");
      return;
    }

    setIsSubmitting(true);
    try {
      await updateProduct({
        productId: product._id,
        name: name.trim(),
        brand: brand.trim() || undefined,
        category,
        paoMonths: paoMonthsValue,
      });
      onDismiss();
    } catch (err) {
      setError(err instanceof Error ? err.message : "Ürün güncellenemedi.");
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <Portal>
      <Dialog visible={product !== null} onDismiss={onDismiss}>
        <Dialog.Title>Ürünü Düzenle</Dialog.Title>
        <Dialog.Content style={{ gap: 12 }}>
          <TextInput label="Ürün Adı" value={name} onChangeText={setName} />
          <TextInput label="Marka" value={brand} onChangeText={setBrand} />
          <Button mode="outlined" icon="chevron-down" onPress={() => setCategoryDialogVisible(true)}>
            {CATEGORY_LABELS_TR[category]}
          </Button>
          <TextInput
            label="PAO (ay)"
            value={paoMonths}
            onChangeText={setPaoMonths}
            keyboardType="numeric"
          />
          {error ? <HelperText type="error">{error}</HelperText> : null}
        </Dialog.Content>
        <Dialog.Actions>
          <Button onPress={onDismiss}>Vazgeç</Button>
          <Button onPress={handleSubmit} loading={isSubmitting}>
            Kaydet
          </Button>
        </Dialog.Actions>
      </Dialog>

      <CategoryPickerDialog
        visible={categoryDialogVisible}
        value={category}
        onDismiss={() => setCategoryDialogVisible(false)}
        onSelect={setCategory}
      />
    </Portal>
  );
}
