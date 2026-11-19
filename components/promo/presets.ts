/**
 * Ready-made studio settings for the Reel scripts in babymo.id/marketing-kit (same ids r1–r10,
 * plus seasonal ones). Open one with /studio/?preset=r3 (optionally &lang=en&fmt=feed).
 */
import type { Lang } from "./engine";

export interface Preset {
  id: string;
  name: Record<Lang, string>;
  template: string;
  game: string;
  palette?: string;
  headline?: Record<Lang, string>;
  sub?: Record<Lang, string>;
}

export const PRESETS: Preset[] = [
  { id: "r1", name: { id: "Kenalan dengan Baby Mo", en: "Meet Baby Mo" }, template: "scroll-stop", game: "doa-harian",
    headline: { id: "POV: anak minta HP… Ayah Bunda tetap tenang 😌", en: "POV: your child asks for the phone… and you're fine with it 😌" },
    sub: { id: "Tanpa iklan · Tanpa akun · Bisa offline", en: "No ads · No accounts · Works offline" } },
  { id: "r2", name: { id: "Doa sebelum tidur", en: "Bedtime du'a" }, template: "bedtime", game: "dreamtime",
    headline: { id: "Rutinitas malam kami: 3 menit, 1 doa 🌙", en: "Our bedtime routine: 3 minutes, 1 du'a 🌙" },
    sub: { id: "Doa sebelum tidur, dibacakan pelan oleh Mo", en: "The bedtime du'a, read slowly by Mo" } },
  { id: "r3", name: { id: "Wudhu 10 langkah", en: "Wudu in 10 steps" }, template: "phone-rise", game: "wudhu",
    headline: { id: "Wudhu 10 langkah 💧", en: "Wudu in 10 steps 💧" },
    sub: { id: "Lengkap dengan niat dan doa", en: "With the intention and du'a" } },
  { id: "r4", name: { id: "Susun Huruf: 106 kata", en: "Build the Word: 106 words" }, template: "quiz-teaser", game: "kata-islam",
    headline: { id: "Tebak, kata Arab apa ini? 👀", en: "Guess the Arabic word 👀" },
    sub: { id: "106 kata Arab dalam 12 kategori", en: "106 Arabic words in 12 categories" } },
  { id: "r5", name: { id: "Doa di mobil (CarPlay)", en: "Du'a in the car (CarPlay)" }, template: "carplay-dua", game: "doa-harian" },
  { id: "r6", name: { id: "Apple Watch", en: "Apple Watch" }, template: "apple-watch", game: "tasbih" },
  { id: "r7", name: { id: "Ramadan hari ke-…", en: "Ramadan day …" }, template: "ramadan-day", game: "doa-ramadan" },
  { id: "r8", name: { id: "Liburan bermanfaat", en: "School holidays" }, template: "duo-phones", game: "kebun-ais",
    headline: { id: "Perjalanan jauh, sinyal hilang, anak tetap senang 🚙", en: "Long drive, no signal, happy kids 🚙" },
    sub: { id: "Bisa dimainkan tanpa internet", en: "Plays without internet" } },
  { id: "r9", name: { id: "Tenis Kak Adam", en: "Tennis with Kak Adam" }, template: "spotlight", game: "tenis-adam",
    headline: { id: "Latihan tenis bareng Kak Adam 🎾", en: "Tennis practice with Kak Adam 🎾" },
    sub: { id: "Forehand, backhand, servis", en: "Forehand, backhand, serve" } },
  { id: "r10", name: { id: "Kata guru", en: "For teachers" }, template: "checklist", game: "wudhu",
    headline: { id: "Cara kami mengenalkan wudhu di kelas 👩‍🏫", en: "How we introduce wudu in class 👩‍🏫" },
    sub: { id: "Wudhu 10 langkah\nDoa harian\n28 huruf hijaiyah\nBisa offline di kelas", en: "Wudu in 10 steps\nDaily du'as\n28 Arabic letters\nWorks offline in class" } },
  { id: "eid", name: { id: "Selamat Idul Fitri", en: "Eid Mubarak" }, template: "idul-fitri", game: "doa-ramadan" },
];
