/**
 * Sticker for finishing a picture book + "Tahukah kamu?" fact cards.
 * Progress lives in this browser only (localStorage) — no account needed.
 */
const RULES: [RegExp, string][] = [
  [/gurita/, "🐙"], [/tukik|penyu/, "🐢"], [/ikan-badut|jingga/, "🐠"], [/paus/, "🐋"], [/kepiting/, "🦀"],
  [/orangutan/, "🦧"], [/gempa|bumi-bergoyang/, "🏠"], [/kakek/, "🤲"], [/bintang|lampu-padam/, "⭐"], [/lebah|madu/, "🐝"],
  [/forehand|backhand|servis|tenis|raket|bola|pertandingan|piala|ganda|senar|garis|love-itu|pelatih|kaki-kak-adam/, "🎾"],
  [/umi|dapur|koki/, "💗"], [/abi/, "💪"], [/lebaran|ketupat/, "🌙"], [/celengan|sedekah/, "🐷"], [/tablet/, "🧱"],
  [/supermarket|terpisah/, "🛒"], [/tubuhku/, "🛡️"], [/jarum|imunisasi/, "💉"], [/hujan|pelangi/, "🌈"], [/benih|pohon|kebun/, "🌱"],
  [/mobil/, "🚗"], [/sujud|sholat|saf|iqra/, "🕌"], [/tidur/, "😴"], [/kue/, "🎂"], [/olahraga/, "🏃"], [/jam/, "⌚"],
];
export function stickerFor(slug: string): string {
  for (const [re, e] of RULES) if (re.test(slug)) return e;
  return "📖";
}

export const STICKER_KEY = "bm-stickers-v1";
export const FACT_KEY = "bm-facts-v1";

/** Pages that teach a real fact but don't start with "Tahukah kamu?" */
const FACT_PAGES: Record<string, number[]> = {
  "tukik-pulang-ke-laut": [3, 12, 14],
  "jingga-ikan-badut-mencari-rumah": [9],
  "lagu-paus-untuk-bayinya": [2, 8, 9],
  "kepiting-yang-berjalan-miring": [4],
  "orangutan-dan-pohon-untuk-anaknya": [5],
  "saat-bumi-bergoyang": [9],
  "saat-lampu-padam-bintang-menyala": [5, 7, 9, 11],
  "lebah-kecil-dan-madu": [5, 7, 8],
};
export function isFact(text: string, slug?: string, i?: number) {
  if (slug && i !== undefined && FACT_PAGES[slug]?.includes(i)) return true;
  return /^(Tahukah kamu\?|Did you know\?)/i.test(text.trim());
}
export const factKey = (slug: string, i: number) => `${slug}#${i}`;

function read<T>(key: string, fallback: T): T {
  try {
    const v = localStorage.getItem(key);
    return v ? (JSON.parse(v) as T) : fallback;
  } catch {
    return fallback;
  }
}
function write(key: string, v: unknown) {
  try { localStorage.setItem(key, JSON.stringify(v)); } catch {}
}

export function getStickers(): Record<string, number> { return read(STICKER_KEY, {} as Record<string, number>); }
/** Returns true when this is a new sticker. */
export function awardSticker(slug: string): boolean {
  const s = getStickers();
  if (s[slug]) return false;
  s[slug] = Date.now();
  write(STICKER_KEY, s);
  return true;
}
export function getFacts(): string[] { return read(FACT_KEY, [] as string[]); }
/** Returns true when this card is new. */
export function collectFact(key: string): boolean {
  const f = getFacts();
  if (f.includes(key)) return false;
  f.push(key);
  write(FACT_KEY, f);
  return true;
}
