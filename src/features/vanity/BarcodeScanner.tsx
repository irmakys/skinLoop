import { api } from "@convex/_generated/api";
import { useAction } from "convex/react";
import { CameraView, useCameraPermissions } from "expo-camera";
import { useState } from "react";
import { StyleSheet, View } from "react-native";
import { Button, Text } from "react-native-paper";

import type { OpenBeautyFactsProduct } from "@/lib/openBeautyFacts";

type BarcodeScannerProps = {
  onProductFound: (product: OpenBeautyFactsProduct) => void;
  onNotFound: (barcode: string) => void;
};

export function BarcodeScanner({ onProductFound, onNotFound }: BarcodeScannerProps) {
  const [permission, requestPermission] = useCameraPermissions();
  const [isProcessing, setIsProcessing] = useState(false);
  const lookupBarcode = useAction(api.products.lookupBarcode);

  if (!permission) {
    return null;
  }

  if (!permission.granted) {
    return (
      <View style={styles.center}>
        <Text>Barkod taramak için kamera izni gerekiyor.</Text>
        <Button mode="contained" onPress={requestPermission}>
          İzin Ver
        </Button>
      </View>
    );
  }

  async function handleBarcodeScanned({ data }: { data: string }) {
    if (isProcessing) {
      return;
    }
    setIsProcessing(true);
    try {
      // Öncelik 1: yerel Gratis kataloğu, Öncelik 2: Open Beauty Facts
      // (bulunursa bir sonraki tarama için otomatik önbelleğe alınır).
      const result = await lookupBarcode({ barcode: data });
      if (result.found) {
        onProductFound({ barcode: data, name: result.name, brand: result.brand || undefined });
      } else {
        onNotFound(data);
      }
    } finally {
      setIsProcessing(false);
    }
  }

  return (
    <CameraView
      style={styles.camera}
      barcodeScannerSettings={{
        barcodeTypes: ["ean13", "ean8", "upc_a", "upc_e"],
      }}
      onBarcodeScanned={isProcessing ? undefined : handleBarcodeScanned}
    />
  );
}

const styles = StyleSheet.create({
  camera: {
    flex: 1,
  },
  center: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    gap: 12,
  },
});
