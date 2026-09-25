/**
 * `@convex-dev/auth`'un Password `profile` callback'i SENKRON çalışıyor
 * (bkz. convex/auth.ts'teki not) — yani hesap oluşturulmadan hemen önceki
 * bu son kontrol noktasında veritabanına erişilemiyor. Bu yüzden
 * `emailVerificationRequests` tablosuna gidip "doğrulandı mı" diye async
 * sormak yerine, `verifySignupOtp` başarılı olduğunda deterministik bir
 * "imza" üretip istemciye döndürüyoruz; istemci bunu `signUp` çağrısına
 * ekliyor, `profile()` de aynı imzayı senkron olarak yeniden hesaplayıp
 * karşılaştırıyor. Kriptografik güvenlik hedeflemiyor — amaç yalnızca
 * `signIn("password", {flow:"signUp",...})`'ın `verifySignupOtp`'tan
 * geçmeden doğrudan çağrılamamasını sağlamak (bu dosya hiçbir zaman
 * client bundle'ına dahil edilmez, yalnızca Convex sunucusunda çalışır).
 */
const SIGNUP_PROOF_SALT = "skinloop-email-otp-v1";

export function computeSignupProof(email: string): string {
  const input = `${email.trim().toLowerCase()}:${SIGNUP_PROOF_SALT}`;
  let hash = 0;
  for (let i = 0; i < input.length; i++) {
    hash = (Math.imul(31, hash) + input.charCodeAt(i)) | 0;
  }
  return (hash >>> 0).toString(36);
}
