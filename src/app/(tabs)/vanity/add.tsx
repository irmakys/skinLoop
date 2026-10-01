import { useRouter } from "expo-router";
import { useState } from "react";
import { View } from "react-native";
import { Button, SegmentedButtons } from "react-native-paper";

import { AddProductForm } from "@/features/vanity/AddProductForm";
import { BarcodeScanner } from "@/features/vanity/BarcodeScanner";
import { useLocale } from "@/i18n/LocaleContext";
import type { OpenBeautyFactsProduct } from "@/lib/openBeautyFacts";

type Mode = "scan" | "manual";

export default function AddProductScreen() {
  const router = useRouter();
  const { t } = useLocale();
  const [mode, setMode] = useState<Mode>("scan");
  const [foundProduct, setFoundProduct] = useState<OpenBeautyFactsProduct | undefined>();
  const [scannedBarcode, setScannedBarcode] = useState<string | undefined>();

  function handleSaved() {
    // `vanity/add`, (tabs)/_layout.tsx'te vanity/index'in üstüne kurulu bir
    // stack ekranı değil, sekmelerin kardeşi bir Tabs.Screen (href: null ile
    // gizlenmiş). Bu yüzden router.back() burada güvenilir değil — Tabs
    // navigator'ünde bu sekmeye ait bir geçmiş olmadığından ilk sekmeye
    // (Planlayıcı) düşüyordu. Hedefi açıkça belirtiyoruz; replace kullanmak
    // "Ürün Ekle" ekranını geçmişten çıkarır, geri tuşuyla tekrar buraya
    // dönülmez.
    router.replace("/(tabs)/vanity");
  }

  return (
    <View style={{ flex: 1 }}>
      <SegmentedButtons
        value={mode}
        onValueChange={(value) => setMode(value as Mode)}
        buttons={[
          { value: "scan", label: t("vanity.scanBarcode") },
          { value: "manual", label: t("vanity.manualAdd") },
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
        <Button onPress={() => setMode("scan")}>{t("vanity.backToScan")}</Button>
      ) : null}
    </View>
  );
}
