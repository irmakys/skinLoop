import type { ConvexAuthActionsContext } from "@convex-dev/auth/react";
import * as Linking from "expo-linking";
import * as WebBrowser from "expo-web-browser";

type OAuthProviderId = "google" | "apple";

type SignInFn = ConvexAuthActionsContext["signIn"];

/**
 * Expo/React Native'de Convex Auth OAuth akışı: sunucudan bir yetkilendirme
 * URL'i istenir, `expo-web-browser` ile uygulama içi tarayıcıda açılır,
 * kullanıcı sağlayıcıda onay verince uygulamanın deep link şemasına
 * (`app.json` → `scheme`) geri yönlendirilir; dönen `code` parametresi
 * tekrar `signIn` ile Convex'e gönderilerek oturum tamamlanır.
 */
export async function signInWithOAuth(provider: OAuthProviderId, signIn: SignInFn): Promise<void> {
  const redirectTo = Linking.createURL("/");
  const { redirect } = await signIn(provider, { redirectTo });

  if (!redirect) {
    // Sağlayıcı ek adım gerektirmeden doğrudan oturum açtırdı (beklenmez ama zararsız).
    return;
  }

  const result = await WebBrowser.openAuthSessionAsync(redirect.toString(), redirectTo);

  if (result.type !== "success" || !result.url) {
    throw new Error("OAuth-cancelled");
  }

  const code = new URL(result.url).searchParams.get("code");
  if (!code) {
    throw new Error("OAuth-no-code");
  }

  await signIn(provider, { code });
}
