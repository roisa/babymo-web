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
    externalUrl: "https://roisa.github.io/babymo-games/babymo-puzzle.html",
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
    externalUrl: "https://roisa.github.io/babymo-games/babymo-doa-harian.html",
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
    externalUrl: "https://roisa.github.io/babymo-games/babymo-dua-game.html",
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
      "https://roisa.github.io/babymo-games/babymo-arabic-spelling.html",
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
    externalUrl: "https://roisa.github.io/babymo-games/babymo-dreamtime.html",
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
    externalUrl: "https://roisa.github.io/babymo-games/babymo-hijaiyah.html",
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
      "https://roisa.github.io/babymo-games/babymo-look-and-find.html",
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
      "https://roisa.github.io/babymo-games/babymo-memory-match.html",
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
      "https://roisa.github.io/babymo-games/baby-mo-forehand-beat.html",
    tags: ["musik", "ritme"],
  },
];

export function getAllGames(): Game[] {
  return games;
}
