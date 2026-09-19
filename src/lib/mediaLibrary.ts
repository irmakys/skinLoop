import Constants, { AppOwnership } from "expo-constants";

/**
 * Expo Go'da `expo-media-library`'nin native modülü ("ExpoMediaLibraryNext")
 * mevcut değil — statik import bile çöküşe neden oluyor. Bu yüzden modül
 * yalnızca gerçek bir cihaz/dev build'de lazy olarak yükleniyor; Expo Go'da
 * bu fonksiyon sessizce atlanır ve fotoğraf yalnızca uygulamanın kendi yerel
 * deposunda kalır (zaten Journal'ın tek doğruluk kaynağı).
 */
const isExpoGo = Constants.appOwnership === AppOwnership.Expo;

type MediaLibraryModule = typeof import("expo-media-library");

let mediaLibraryModule: MediaLibraryModule | null | undefined;

function getMediaLibrary(): MediaLibraryModule | null {
  if (isExpoGo) {
    return null;
  }

  if (mediaLibraryModule === undefined) {
    try {
      // eslint-disable-next-line @typescript-eslint/no-require-imports -- Expo Go'da hiç yüklenmemesi için statik import yerine lazy require kullanılıyor
      mediaLibraryModule = require("expo-media-library") as MediaLibraryModule;
    } catch {
      mediaLibraryModule = null;
    }
  }

  return mediaLibraryModule;
}

export type SaveToGalleryResult =
  | { saved: true }
  | { saved: false; reason: "unavailable" | "permission-denied" | "error"; message?: string };

/** Fotoğrafı `MediaLibrary.requestPermissionsAsync` ile izin alıp cihaz galerisine kaydeder. */
export async function saveToDeviceGallery(localUri: string): Promise<SaveToGalleryResult> {
  const mediaLibrary = getMediaLibrary();
  if (!mediaLibrary) {
    return { saved: false, reason: "unavailable" };
  }

  try {
    const current = await mediaLibrary.getPermissionsAsync();
    const granted = current.granted
      ? true
      : (await mediaLibrary.requestPermissionsAsync()).granted;

    if (!granted) {
      return { saved: false, reason: "permission-denied" };
    }

    await mediaLibrary.saveToLibraryAsync(localUri);
    return { saved: true };
  } catch (error) {
    return {
      saved: false,
      reason: "error",
      message: error instanceof Error ? error.message : String(error),
    };
  }
}
