import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { useMutation, useQuery } from "convex/react";
import { useState } from "react";
import { FlatList, View } from "react-native";
import { Button, Dialog, Portal, Text, useTheme } from "react-native-paper";

import { api } from "@convex/_generated/api";
import type { Id } from "@convex/_generated/dataModel";
import type { Category } from "@/constants/categories";
import { EditProductDialog, type EditableProduct } from "@/features/vanity/EditProductDialog";
import { ProductCard } from "@/features/vanity/ProductCard";
import { useBottomClearance } from "@/hooks/useBottomClearance";

export function ProductList() {
  const theme = useTheme();
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

  if (products === undefined) {
    return null;
  }

  if (products.length === 0) {
    return (
      <View style={{ flex: 1, padding: 32, alignItems: "center", justifyContent: "center", gap: 8 }}>
        <MaterialCommunityIcons name="bottle-tonic-outline" size={40} color={theme.colors.outline} />
        <Text style={{ color: theme.colors.onSurfaceVariant }}>Henüz ürün eklenmedi.</Text>
      </View>
    );
  }

  return (
    <>
      <FlatList
        data={products}
        keyExtractor={(item) => item._id}
        contentContainerStyle={{ padding: 20, paddingBottom: bottomClearance, gap: 14 }}
        renderItem={({ item }) => (
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
        )}
      />

      <EditProductDialog product={editingProduct} onDismiss={() => setEditingProduct(null)} />

      <Portal>
        <Dialog visible={deletingProductId !== null} onDismiss={() => setDeletingProductId(null)}>
          <Dialog.Title>Ürünü Sil</Dialog.Title>
          <Dialog.Content>
            <Text>
              Bu ürünü silmek istediğine emin misin? Ürünü kullanan rutin adımları &quot;ürün eksik&quot; olarak
              işaretlenecek.
            </Text>
          </Dialog.Content>
          <Dialog.Actions>
            <Button onPress={() => setDeletingProductId(null)}>Vazgeç</Button>
            <Button onPress={handleConfirmDelete} loading={isDeleting} textColor={theme.colors.error}>
              Sil
            </Button>
          </Dialog.Actions>
        </Dialog>
      </Portal>
    </>
  );
}
