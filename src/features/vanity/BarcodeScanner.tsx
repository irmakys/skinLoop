import { api } from "@convex/_generated/api";
import { useAction } from "convex/react";
import { CameraView, useCameraPermissions } from "expo-camera";
import { useState } from "react";
import { StyleSheet, View } from "react-native";
import { Button, Text } from "react-native-paper";

import { useLocale } from "@/i18n/LocaleContext";
import type { OpenBeautyFactsProduct } from "@/lib/openBeautyFacts";

type BarcodeScannerProps = {
  onProductFound: (product: OpenBeautyFactsProduct) => void;
  onNotFound: (barcode: string) => void;
};

export function BarcodeScanner({ onProductFound, onNotFound }: BarcodeScannerProps) {
  const { t } = useLocale();
  const [permission, requestPermission] = useCameraPermissions();
  const [isProcessing, setIsProcessing] = useState(false);
  const lookupBarcode = useAction(api.products.lookupBarcode);

  if (!permission) {
    return null;
  }

  if (!permission.granted) {
    return (
      <View style={styles.center}>
        <Text>{t("vanity.cameraPermissionNeeded")}</Text>
        <Button mode="contained" onPress={requestPermission}>
          {t("common.grantPermission")}
        </Button>
      </View>
    );
  }

  async function handleBarcodeScanned({ type, data }: { type: string; data: string }) {
    if (isProcessing) {
      return;
    }
    setIsProcessing(true);
    try {
      // Kameradan/kütüphaneden gelen ham veri hiçbir zaman güvenilir kabul
      // edilmez — görünmez boşluk/satır sonu karakterleri veya rakam-dışı
      // gürültü içerebilir. Asıl kanonikleştirme (UPC-E→UPC-A genişletme
      // dahil) sunucuda (bkz. convex/products.ts normalizeBarcode) tek
      // gerçek kaynak olarak yapılır; burada yalnızca görünür boşlukları
      // temizleyip ham `type`/`data` çiftini olduğu gibi sunucuya iletiyoruz.
      const sanitizedData = String(data).trim();
      if (__DEV__) {
        console.log(`[BarcodeScanner] tarandı: tip="${type}" ham="${data}" temizlenmiş="${sanitizedData}"`);
      }

      // Öncelik 1: yerel Gratis/Rossmann/Watsons kataloğu, Öncelik 2: Open
      // Beauty Facts (bulunursa bir sonraki tarama için otomatik önbelleğe alınır).
      const result = await lookupBarcode({ barcode: sanitizedData, scanType: type });
      if (__DEV__) {
        console.log(`[BarcodeScanner] sonuç:`, result);
      }

      if (result.found) {
        onProductFound({ barcode: sanitizedData, name: result.name, brand: result.brand || undefined });
      } else {
        onNotFound(sanitizedData);
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
