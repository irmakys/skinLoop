import { CameraType, CameraView, useCameraPermissions } from "expo-camera";
import { File } from "expo-file-system";
import { useRef, useState } from "react";
import { StyleSheet, View } from "react-native";
import { Button, HelperText, IconButton, Text, TextInput } from "react-native-paper";

import { useCurrentUserId } from "@/features/auth/useCurrentUserId";
import { addJournalEntry } from "@/lib/journalStorage";
import { saveToDeviceGallery } from "@/lib/mediaLibrary";

type CapturePhotoProps = {
  /** Fotoğraf bir Loop (rutin) akışından çekiliyorsa ilişkilendirilecek Loop id'si. */
  loopId?: string;
  onSaved: () => void;
};

export function CapturePhoto({ loopId, onSaved }: CapturePhotoProps) {
  const userId = useCurrentUserId();
  const [cameraPermission, requestCameraPermission] = useCameraPermissions();
  const cameraRef = useRef<CameraView>(null);
  const [facing, setFacing] = useState<CameraType>("back");
  const [note, setNote] = useState("");
  const [isCapturing, setIsCapturing] = useState(false);
  const [error, setError] = useState<string | null>(null);

  if (!cameraPermission) {
    return null;
  }

  if (!cameraPermission.granted) {
    return (
      <View style={styles.center}>
        <Text>Fotoğraf çekmek için kamera izni gerekiyor.</Text>
        <Button mode="contained" onPress={requestCameraPermission}>
          İzin Ver
        </Button>
      </View>
    );
  }

  async function handleCapture() {
    if (isCapturing || !userId) {
      return;
    }
    setError(null);
    setIsCapturing(true);

    let capturedFile: File | null = null;
    try {
      const picture = await cameraRef.current?.takePictureAsync({ quality: 0.7 });
      if (!picture) {
        setError("Fotoğraf çekilemedi. Lütfen tekrar dene.");
        return;
      }

      capturedFile = new File(picture.uri);

      // Kaynak: uygulamanın kendi yerel dosya sistemi (Paths.document/journal) — Journal'ın tek doğruluk kaynağı.
      await addJournalEntry(userId, picture.uri, note.trim() || null, loopId ?? null);

      // Kullanıcının isteğiyle: ayrıca sistem galerisine de kopya bırakılıyor.
      // Yerel kayıt (yukarıda) zaten tamamlandığından, galeri hatası akışı bloklamaz —
      // yalnızca geliştirici konsoluna bildirilir.
      const galleryResult = await saveToDeviceGallery(picture.uri);
      if (!galleryResult.saved && galleryResult.reason === "error") {
        console.warn("Galeriye kaydetme başarısız:", galleryResult.message);
      }

      setNote("");
      onSaved();
    } catch (err) {
      setError(
        err instanceof Error ? err.message : "Fotoğraf kaydedilirken bir hata oluştu.",
      );
    } finally {
      if (capturedFile?.exists) {
        capturedFile.delete();
      }
      setIsCapturing(false);
    }
  }

  return (
    <View style={styles.container}>
      <CameraView ref={cameraRef} style={styles.camera} facing={facing}>
        <IconButton
          icon="camera-flip"
          mode="contained"
          style={styles.flipButton}
          onPress={() => setFacing((current) => (current === "back" ? "front" : "back"))}
        />
      </CameraView>
      <TextInput
        label="Not (opsiyonel)"
        value={note}
        onChangeText={setNote}
        style={styles.note}
      />
      {error ? <HelperText type="error">{error}</HelperText> : null}
      <Button mode="contained" onPress={handleCapture} loading={isCapturing}>
        Fotoğraf Çek ve Kaydet
      </Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  camera: {
    flex: 1,
  },
  flipButton: {
    position: "absolute",
    top: 12,
    right: 12,
  },
  note: {
    marginHorizontal: 16,
  },
  center: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    gap: 12,
  },
});
