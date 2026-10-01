import { useMutation } from "convex/react";
import { useState } from "react";
import { Button, HelperText, TextInput } from "react-native-paper";

import { api } from "@convex/_generated/api";
import type { Id } from "@convex/_generated/dataModel";
import { AppDialog } from "@/components/AppDialog";
import { CATEGORY_LABEL_KEYS, type Category } from "@/constants/categories";
import { CategoryPickerDialog } from "@/features/vanity/CategoryPickerDialog";
import { useLocale } from "@/i18n/LocaleContext";

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
  const { t } = useLocale();
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
      setError(t("vanity.nameRequired"));
      return;
    }
    if (!Number.isFinite(paoMonthsValue) || paoMonthsValue <= 0) {
      setError(t("vanity.paoInvalid"));
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
      setError(err instanceof Error ? err.message : t("vanity.updateSaveFailed"));
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <>
      <AppDialog
        visible={product !== null}
        onDismiss={onDismiss}
        title={t("vanity.editProductTitle")}
        actions={
          <>
            <Button onPress={onDismiss}>{t("common.cancel")}</Button>
            <Button onPress={handleSubmit} loading={isSubmitting}>
              {t("common.save")}
            </Button>
          </>
        }
      >
        <TextInput label={t("vanity.nameLabel")} value={name} onChangeText={setName} />
        <TextInput label={t("vanity.brandLabel")} value={brand} onChangeText={setBrand} />
        <Button mode="outlined" icon="chevron-down" onPress={() => setCategoryDialogVisible(true)}>
          {t(CATEGORY_LABEL_KEYS[category])}
        </Button>
        <TextInput
          label={t("vanity.paoLabel")}
          value={paoMonths}
          onChangeText={setPaoMonths}
          keyboardType="numeric"
        />
        {error ? <HelperText type="error">{error}</HelperText> : null}
      </AppDialog>

      <CategoryPickerDialog
        visible={categoryDialogVisible}
        value={category}
        onDismiss={() => setCategoryDialogVisible(false)}
        onSelect={setCategory}
      />
    </>
  );
}
