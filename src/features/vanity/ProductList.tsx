import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { useMutation, useQuery } from "convex/react";
import { useCallback, useState } from "react";
import { FlatList, type ListRenderItem, View } from "react-native";
import { Button, Text, useTheme } from "react-native-paper";

import { api } from "@convex/_generated/api";
import type { Doc, Id } from "@convex/_generated/dataModel";
import { AppDialog } from "@/components/AppDialog";
import type { Category } from "@/constants/categories";
import { EditProductDialog, type EditableProduct } from "@/features/vanity/EditProductDialog";
import { ProductCard } from "@/features/vanity/ProductCard";
import { useBottomClearance } from "@/hooks/useBottomClearance";
import { useLocale } from "@/i18n/LocaleContext";

export function ProductList() {
  const theme = useTheme();
  const { t } = useLocale();
  const bottomClearance = useBottomClearance();
  const products = useQuery(api.products.listProducts);
  const deleteProduct = useMutation(api.products.deleteProduct);

  const [editingProduct, setEditingProduct] = useState<EditableProduct | null>(null);
  const [deletingProductId, setDeletingProductId] = useState<Id<"products"> | null>(null);
  const [isDeleting, setIsDeleting] = useState(false);

  async function handleConfirmDelete() {
    if (!deletingProductId) {
      return;
    }
    setIsDeleting(true);
    try {
      await deleteProduct({ productId: deletingProductId });
      setDeletingProductId(null);
    } finally {
      setIsDeleting(false);
    }
  }

  // Referansı sabit tutar: aksi halde her render'da (ör. bir dialog açılıp
  // kapandığında) yeni bir renderItem oluşturulur ve altındaki memo'lu
  // ProductCard'ların hepsi gereksiz yeniden render olur.
  const renderItem: ListRenderItem<Doc<"products">> = useCallback(
    ({ item }) => (
      <ProductCard
        name={item.name}
        brand={item.brand ?? null}
        category={item.category as Category}
        expiresAt={item.expiresAt}
        onEdit={() =>
          setEditingProduct({
            _id: item._id,
            name: item.name,
            brand: item.brand,
            category: item.category as Category,
            paoMonths: item.paoMonths,
          })
        }
        onDelete={() => setDeletingProductId(item._id)}
      />
    ),
    [],
  );

  if (products === undefined) {
    return null;
  }

  if (products.length === 0) {
    return (
      <View style={{ flex: 1, padding: 32, alignItems: "center", justifyContent: "center", gap: 8 }}>
        <MaterialCommunityIcons name="bottle-tonic-outline" size={40} color={theme.colors.outline} />
        <Text style={{ color: theme.colors.onSurfaceVariant }}>{t("vanity.emptyState")}</Text>
      </View>
    );
  }

  return (
    <>
      <FlatList
        data={products}
        keyExtractor={(item) => item._id}
        contentContainerStyle={{ padding: 20, paddingBottom: bottomClearance, gap: 14 }}
        renderItem={renderItem}
        initialNumToRender={8}
        maxToRenderPerBatch={8}
        windowSize={7}
        removeClippedSubviews
      />

      <EditProductDialog product={editingProduct} onDismiss={() => setEditingProduct(null)} />

      <AppDialog
        visible={deletingProductId !== null}
        onDismiss={() => setDeletingProductId(null)}
        title={t("vanity.deleteProductTitle")}
        actions={
          <>
            <Button onPress={() => setDeletingProductId(null)}>{t("common.cancel")}</Button>
            <Button onPress={handleConfirmDelete} loading={isDeleting} textColor={theme.colors.error}>
              {t("common.delete")}
            </Button>
          </>
        }
      >
        <Text>{t("vanity.deleteProductBody")}</Text>
      </AppDialog>
    </>
  );
}
