/** A picture for every doa, so children can find "the bedtime one" before
 *  they can read. Falls back to 🤲 for anything new. */
const BY_SLUG: Record<string, string> = {
  "sebelum-tidur": "🌙", "bangun-tidur": "☀️", "sebelum-makan": "🍚", "sesudah-makan": "😋",
  "masuk-kamar-mandi": "🚿", "keluar-kamar-mandi": "🧼", "naik-kendaraan": "🚗", "keluar-rumah": "🚪",
  "masuk-rumah": "🏠", "doa-untuk-orang-tua": "👨‍👩‍👧", "ketika-hujan": "🌧️", "mendengar-adzan": "📢",
  "memakai-pakaian": "👕", "perlindungan-anak": "🛡️", "bercermin": "🪞", "doa-bersin": "🤧",
  "sebelum-belajar": "📚", "setelah-belajar": "✏️", "selesai-wudhu": "💧", "doa-pagi": "🌅",
  "doa-petang": "🌇", "berbuka-puasa": "🍉", "melihat-bulan-baru": "🌒", "mendapat-rezeki": "🎁",
  "mendengar-petir": "⚡", "mengucap-salam": "👋", "masuk-masjid": "🕌", "keluar-masjid": "🌤️",
  "kebaikan-dunia-akhirat": "🌍", "minta-ilmu-bermanfaat": "💡", "ketika-sakit": "🤒", "ketika-marah": "😤",
  "doa-kedua-orang-tua": "💞", "naik-turun-kendaraan-selamat": "🚌", "sayyidul-istighfar": "🤍",
  "doa-ketika-kesulitan": "🐋", "doa-keturunan-shalih": "👶", "doa-dilancarkan-bicara": "🗣️",
  "doa-dimudahkan-urusan": "🪁", "doa-penutup-majelis": "🤝", "doa-masuk-pasar": "🛒",
  "doa-menjawab-bersin": "😊", "doa-singgah": "⛺", "doa-setelah-hujan": "🌈", "doa-bepergian": "🧳",
  "doa-kembali-dari-perjalanan": "🏡", "doa-menjenguk-orang-sakit": "💐", "doa-keteguhan-hati": "❤️",
  "doa-mohon-rahmat": "☁️", "doa-pandai-bersyukur": "🙏", "doa-akhlak-mulia": "🌟", "doa-hasbunallah": "🤲",
  "doa-nabi-ayyub": "🌱", "doa-mohon-hikmah": "🦉",
};
export function doaEmoji(slug: string): string {
  return BY_SLUG[slug] ?? "🤲";
}

/** Soft tile colours rotated per doa so the grid feels like a sticker sheet. */
const TILES = ["sky", "sun", "grape", "peach", "berry", "brave"] as const;
export function doaTile(slug: string): (typeof TILES)[number] {
  let h = 0;
  for (let i = 0; i < slug.length; i++) h = (h * 31 + slug.charCodeAt(i)) >>> 0;
  return TILES[h % TILES.length]!;
}

/** Emoji for the filter chips. */
export const SITUATION_EMOJI: Record<string, string> = {
  all: "✨", harian: "🌞", perlindungan: "🛡️", syukur: "🙏", ibadah: "🕌", perjalanan: "🧳",
  belajar: "📚", adab: "🌟", sosial: "🤝", makan: "🍚", tidur: "🌙", pagi: "🌅", petang: "🌇",
  keluarga: "👨‍👩‍👧", rumah: "🏠", hujan: "🌧️", sakit: "🤒", puasa: "🍉", ramadan: "🌙",
};
