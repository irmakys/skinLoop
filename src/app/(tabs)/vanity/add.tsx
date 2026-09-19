import { useRouter } from "expo-router";
import { useState } from "react";
import { View } from "react-native";
import { Button, SegmentedButtons } from "react-native-paper";

import { AddProductForm } from "@/features/vanity/AddProductForm";
import { BarcodeScanner } from "@/features/vanity/BarcodeScanner";
import type { OpenBeautyFactsProduct } from "@/lib/openBeautyFacts";

type Mode = "scan" | "manual";

export default function AddProductScreen() {
  const router = useRouter();
  const [mode, setMode] = useState<Mode>("scan");
  const [foundProduct, setFoundProduct] = useState<OpenBeautyFactsProduct | undefined>();
  const [scannedBarcode, setScannedBarcode] = useState<string | undefined>();

  function handleSaved() {
    router.back();
  }

  return (
    <View style={{ flex: 1 }}>
      <SegmentedButtons
        value={mode}
        onValueChange={(value) => setMode(value as Mode)}
        buttons={[
          { value: "scan", label: "Barkod Tara" },
          { value: "manual", label: "Manuel Ekle" },
        ]}
        style={{ margin: 16 }}
      />

      {mode === "scan" ? (
        <BarcodeScanner
          onProductFound={(product) => {
            setFoundProduct(product);
            setScannedBarcode(product.barcode);
            setMode("manual");
          }}
          onNotFound={(barcode) => {
            setFoundProduct(undefined);
            setScannedBarcode(barcode);
            setMode("manual");
          }}
        />
      ) : (
        <AddProductForm
          prefill={foundProduct}
          barcode={scannedBarcode}
          onSaved={handleSaved}
        />
      )}

      {mode === "manual" && !foundProduct && !scannedBarcode ? (
        <Button onPress={() => setMode("scan")}>Barkoda dön</Button>
      ) : null}
    </View>
  );
}
