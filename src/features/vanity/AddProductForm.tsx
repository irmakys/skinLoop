import { useMutation } from "convex/react";
import { useState } from "react";
import { ScrollView } from "react-native";
import { Button, HelperText, Text, TextInput } from "react-native-paper";

import { api } from "@convex/_generated/api";
import { CATEGORY_LABELS_TR, type Category } from "@/constants/categories";
import { CategoryPickerDialog } from "@/features/vanity/CategoryPickerDialog";
import type { OpenBeautyFactsProduct } from "@/lib/openBeautyFacts";
import { FONT_DISPLAY_BOLD } from "@/theme/fonts";
import { CARD_RADIUS } from "@/theme/theme";

type AddProductFormProps = {
  prefill?: OpenBeautyFactsProduct;
  barcode?: string;
  onSaved: () => void;
};

export function AddProductForm({ prefill, barcode, onSaved }: AddProductFormProps) {
  const addProduct = useMutation(api.products.addProduct);

  const [name, setName] = useState(prefill?.name ?? "");
  const [brand, setBrand] = useState(prefill?.brand ?? "");
  const [category, setCategory] = useState<Category>("other");
  const [paoMonths, setPaoMonths] = useState("12");
  const [categoryDialogVisible, setCategoryDialogVisible] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  async function handleSubmit() {
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
      await addProduct({
        name: name.trim(),
        brand: brand.trim() || undefined,
        barcode,
        category,
        source: barcode ? "barcode" : "manual",
        openedAt: Date.now(),
        paoMonths: paoMonthsValue,
      });
      onSaved();
    } catch (err) {
      setError(err instanceof Error ? err.message : "Ürün kaydedilemedi.");
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <ScrollView contentContainerStyle={{ padding: 24, gap: 12 }}>
      <Text style={{ fontFamily: FONT_DISPLAY_BOLD, fontSize: 24, marginBottom: 4 }}>Ürün Ekle</Text>
      <TextInput mode="outlined" label="Ürün Adı" value={name} onChangeText={setName} />
      <TextInput mode="outlined" label="Marka" value={brand} onChangeText={setBrand} />

      <Button
        mode="outlined"
        icon="chevron-down"
        onPress={() => setCategoryDialogVisible(true)}
        style={{ borderRadius: CARD_RADIUS }}
      >
        {CATEGORY_LABELS_TR[category]}
      </Button>
      <CategoryPickerDialog
        visible={categoryDialogVisible}
        value={category}
        onDismiss={() => setCategoryDialogVisible(false)}
        onSelect={setCategory}
      />

      <TextInput
        mode="outlined"
        label="PAO (ay)"
        value={paoMonths}
        onChangeText={setPaoMonths}
        keyboardType="numeric"
      />

      {error ? <HelperText type="error">{error}</HelperText> : null}

      <Button
        mode="contained"
        onPress={handleSubmit}
        loading={isSubmitting}
        style={{ borderRadius: CARD_RADIUS, marginTop: 8 }}
        contentStyle={{ paddingVertical: 4 }}
      >
        Kaydet
      </Button>
    </ScrollView>
  );
}
