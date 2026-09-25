import { randomUUID } from "expo-crypto";
import { Directory, File, Paths } from "expo-file-system";

const JOURNAL_DIR_NAME = "journal";
const JOURNAL_INDEX_FILE_NAME = "index.json";

export type JournalEntry = {
  id: string;
  date: number;
  filePath: string;
  note: string | null;
  /** İlişkili Loop (rutin), varsa — fotoğraf bir rutin akışından çekildiyse. */
  loopId: string | null;
};

/**
 * `Paths.document/journal/<userId>` dizininin var olduğunu doğrular, yoksa
 * oluşturur. Aynı cihazda birden fazla hesap oturum açabildiği için her
 * kullanıcının Journal'ı kendi alt klasöründe izole tutulur — `userId`
 * olmadan bu dosyalar tüm hesaplar arasında paylaşılırdı (önceki hata).
 */
function getJournalDirectory(userId: string): Directory {
  const dir = new Directory(Paths.document, JOURNAL_DIR_NAME, userId);
  if (!dir.exists) {
    dir.create({ intermediates: true });
  }
  return dir;
}

/**
 * Kameranın bıraktığı geçici dosyayı Journal dizinine kalıcı bir isimle
 * kopyalar (uygulamanın kendi sandbox dizini — Paths.document altında,
 * yalnızca bu uygulama erişebilir).
 */
export async function savePhoto(userId: string, entryId: string, sourceUri: string): Promise<string> {
  const sourceFile = new File(sourceUri);
  const destination = new File(getJournalDirectory(userId), `${entryId}.jpg`);

  if (destination.exists) {
    destination.delete();
  }

  await sourceFile.copy(destination);
  return destination.uri;
}

export function deletePhoto(filePath: string): void {
  const file = new File(filePath);
  if (file.exists) {
    file.delete();
  }
}

function getIndexFile(userId: string): File {
  return new File(getJournalDirectory(userId), JOURNAL_INDEX_FILE_NAME);
}

async function readIndex(userId: string): Promise<JournalEntry[]> {
  const file = getIndexFile(userId);
  if (!file.exists) {
    return [];
  }

  const json = await file.text();
  return JSON.parse(json) as JournalEntry[];
}

async function writeIndex(userId: string, entries: JournalEntry[]): Promise<void> {
  const file = getIndexFile(userId);
  file.create({ overwrite: true });
  file.write(JSON.stringify(entries));
}

/** Tüm Journal kayıtlarını (tarihe göre en yeni önce) döner — yalnızca cihazda, Convex şemasının dışında. */
export async function listJournalEntries(userId: string): Promise<JournalEntry[]> {
  const entries = await readIndex(userId);
  return entries.sort((a, b) => b.date - a.date);
}

/** Fotoğrafı Journal dizinine kopyalar ve kaydı (id, uri, date, note, loopId) index.json'a ekler. */
export async function addJournalEntry(
  userId: string,
  sourceUri: string,
  note: string | null = null,
  loopId: string | null = null,
): Promise<JournalEntry> {
  const id = randomUUID();
  const filePath = await savePhoto(userId, id, sourceUri);

  const entry: JournalEntry = {
    id,
    date: Date.now(),
    filePath,
    note,
    loopId,
  };

  const entries = await readIndex(userId);
  entries.push(entry);
  await writeIndex(userId, entries);

  return entry;
}

export async function deleteJournalEntry(userId: string, id: string): Promise<void> {
  const entries = await readIndex(userId);
  const entry = entries.find((item) => item.id === id);
  if (entry) {
    deletePhoto(entry.filePath);
  }

  await writeIndex(userId, entries.filter((item) => item.id !== id));
}

/** Birden fazla kaydı (ve fotoğraf dosyalarını) tek seferde siler — Galeri'de "Tümünü Seç" ile toplu silme. */
export async function deleteJournalEntries(userId: string, ids: string[]): Promise<void> {
  const idSet = new Set(ids);
  const entries = await readIndex(userId);

  for (const entry of entries) {
    if (idSet.has(entry.id)) {
      deletePhoto(entry.filePath);
    }
  }

  await writeIndex(userId, entries.filter((item) => !idSet.has(item.id)));
}

/** Bir kaydın notunu ve/veya bağlı olduğu rutini günceller — fotoğraf dosyasına dokunmaz. */
export async function updateJournalEntry(
  userId: string,
  id: string,
  changes: { note: string | null; loopId: string | null },
): Promise<void> {
  const entries = await readIndex(userId);
  const next = entries.map((entry) =>
    entry.id === id ? { ...entry, note: changes.note, loopId: changes.loopId } : entry,
  );
  await writeIndex(userId, next);
}

/** KVKK/GDPR "silme hakkı" — yalnızca bu kullanıcının cihazdaki Journal fotoğraf ve notlarını kalıcı olarak siler. */
export function clearAllJournalData(userId: string): void {
  const dir = getJournalDirectory(userId);
  if (dir.exists) {
    dir.delete();
  }
}
