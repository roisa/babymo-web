import type { Game } from "./types";

export const games: Game[] = [
  {
    slug: "puzzle",
    emoji: "🧩",
    title: { id: "Kenalan Baby Mo", en: "Meet Baby Mo" },
    description: {
      id: "Buka petak satu per satu dan temui karakter Baby Mo.",
      en: "Reveal the tiles to meet the Baby Mo character.",
    },
    externalUrl: "https://play.babymo.id/babymo-puzzle.html",
    tags: ["puzzle", "pengenalan"],
  },
  {
    slug: "doa-harian",
    emoji: "🤲",
    title: { id: "Doa Harian", en: "Daily Duas" },
    description: {
      id: "Belajar 6 doa sehari-hari dengan cara menyenangkan.",
      en: "Learn 6 daily duas in a playful format.",
    },
    externalUrl: "https://play.babymo.id/babymo-doa-harian.html",
    tags: ["doa", "edukasi"],
  },
  {
    slug: "dua-journey",
    emoji: "🃏",
    title: { id: "Dua Journey", en: "Dua Journey" },
    description: {
      id: "Cocokkan kartu doa dengan situasinya.",
      en: "Match dua cards with their situations.",
    },
    externalUrl: "https://play.babymo.id/babymo-dua-game.html",
    tags: ["doa", "matching"],
  },
  {
    slug: "kata-islam",
    emoji: "🔤",
    title: { id: "Kata Islam", en: "Islamic Words" },
    description: {
      id: "Seret huruf untuk menyusun kata-kata islami.",
      en: "Drag letters to spell Islamic vocabulary.",
    },
    externalUrl:
      "https://play.babymo.id/babymo-arabic-spelling.html",
    tags: ["bahasa-arab", "kosa-kata"],
  },
  {
    slug: "dreamtime",
    emoji: "🛌",
    title: { id: "Baby Mo Dreamtime", en: "Baby Mo Dreamtime" },
    description: {
      id: "Rutinitas tidur islami yang menenangkan.",
      en: "A calming Islamic bedtime routine.",
    },
    externalUrl: "https://play.babymo.id/babymo-dreamtime.html",
    tags: ["rutinitas", "tidur"],
  },
  {
    slug: "hijaiyah",
    emoji: "🌙",
    title: { id: "Huruf Hijaiyah", en: "Hijaiyah Letters" },
    description: {
      id: "Kenali 28 huruf hijaiyah dengan suara dan animasi.",
      en: "Meet 28 Arabic letters with sound and animation.",
    },
    externalUrl: "https://play.babymo.id/babymo-hijaiyah.html",
    tags: ["hijaiyah", "edukasi"],
  },
  {
    slug: "cari-baby-mo",
    emoji: "🔍",
    title: { id: "Cari Baby Mo", en: "Find Baby Mo" },
    description: {
      id: "Temukan Baby Mo yang tersembunyi di setiap scene.",
      en: "Find Baby Mo hidden across each scene.",
    },
    externalUrl:
      "https://play.babymo.id/babymo-look-and-find.html",
    tags: ["observasi", "pencarian"],
  },
  {
    slug: "memory-match",
    emoji: "🎴",
    title: { id: "Memory Match", en: "Memory Match" },
    description: {
      id: "Cocokkan kartu sambil melatih daya ingat.",
      en: "Match cards while training memory.",
    },
    externalUrl:
      "https://play.babymo.id/babymo-memory-match.html",
    tags: ["memori", "matching"],
  },
  {
    slug: "forehand-beat",
    emoji: "🎵",
    title: { id: "Forehand Beat", en: "Forehand Beat" },
    description: {
      id: "Ikuti irama dengan ketukan ceria.",
      en: "Follow the rhythm with cheerful beats.",
    },
    externalUrl:
      "https://play.babymo.id/baby-mo-forehand-beat.html",
    tags: ["musik", "ritme"],
  },
  {
    slug: "kata-baik",
    emoji: "💖",
    title: { id: "Kata Baik", en: "Kind Words" },
    description: {
      id: "Susun kata-kata baik dan pelajari akhlak mulia bersama Baby Mo.",
      en: "Build kind words and learn good character with Baby Mo.",
    },
    externalUrl: "https://play.babymo.id/babymo-puzzle-katabaik.html",
    tags: ["akhlak", "puzzle"],
  },
  {
    slug: "sholat-bareng-mo",
    emoji: "🕌",
    title: { id: "Sholat Bareng Mo", en: "Pray with Mo" },
    description: {
      id: "Jadwal sholat, arah kiblat, dan streak harian untuk membiasakan ibadah.",
      en: "Prayer times, qibla direction, and a daily streak to build the habit.",
    },
    externalUrl: "https://play.babymo.id/babymo-companion/",
    tags: ["ibadah", "sholat", "rutinitas"],
  },
];

// The app generates one branded OG card per game at /og/<file-stem>.jpg.
// Derive it from the externalUrl so the two repos can't drift out of sync.
function ogImageFor(externalUrl: string): string {
  const trimmed = externalUrl.replace(/\/+$/, "");
  const origin = trimmed.slice(0, trimmed.indexOf("/", "https://".length));
  const stem = trimmed.slice(trimmed.lastIndexOf("/") + 1).replace(/\.html$/, "");
  return `${origin}/og/${stem}.jpg`;
}

export function getAllGames(): Game[] {
  return games.map((g) => ({ ...g, image: g.image ?? ogImageFor(g.externalUrl) }));
}
