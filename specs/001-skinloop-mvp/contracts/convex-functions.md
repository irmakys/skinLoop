# Contracts: Convex Fonksiyonları (istemcinin bağımlı olduğu arayüz)

Bu proje bir kütüphane/CLI değil, Convex backend'ine reaktif sorgularla
bağlanan bir mobil istemci olduğundan, "sözleşme" burada istemcinin
çağıracağı Convex query/mutation imzaları olarak tanımlanır
(`convex/*.ts` içinde implemente edilecek).

## products.ts

```ts
// Query
listProducts(): Product[]  // giriş yapmış kullanıcının tüm ürünleri, expiresAt'e göre sıralı

// Mutation
addProduct(input: {
  name: string;
  brand?: string;
  barcode?: string;
  category: CategoryEnum;
  source: "barcode" | "manual";
  openedAt: number;
  paoMonths: number;
}): Id<"products">
// Kural: expiresAt = openedAt + paoMonths sunucuda hesaplanır (FR-008)

deleteProduct(productId: Id<"products">): void
// Kural: bağlı LoopStep'ler missingProduct=true olarak işaretlenir (FR-017)
```

## loops.ts

```ts
// Query
listLoops(): Loop[]  // adımlarıyla birlikte (join)

// Mutation
createLoop(input: {
  type: "morning" | "evening" | "weekly";
  name: string;
  steps: { productId: Id<"products">; order: number }[];
}): Id<"loops">
// Kural: her adım zorunlu olarak bir productId taşır (FR-011)

completeStep(stepId: Id<"loopSteps">): void
// Kural: lastCompletedAt = now olarak güncellenir (FR-012)

replaceStepProduct(stepId: Id<"loopSteps">, productId: Id<"products">): void
// Kural: missingProduct=true olan bir adımı düzeltmek için kullanılır (FR-017)
```

## auth (Convex Auth — bkz. research.md §4)

```ts
// Convex Auth standart API'si:
signIn("password", { email, password, flow: "signUp" | "signIn" })
signIn("google" | "apple")  // Ayarlar'dan hesap bağlama akışı için
signOut()
```

## Dış entegrasyon (istemcinin tükettiği, sunmadığı arayüz)

```ts
// src/lib/openBeautyFacts.ts
fetchProductByBarcode(barcode: string): Promise<OpenBeautyFactsProduct | null>
// GET https://world.openbeautyfacts.org/api/v2/product/{barcode}.json
// null dönerse (bulunamadı) çağıran taraf manuel giriş formuna yönlendirir (FR-006)
```
