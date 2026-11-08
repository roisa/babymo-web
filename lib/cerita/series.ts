import type { Locale } from "@/lib/i18n/config";

/**
 * Story series — picture books grouped with a reading order, so a child
 * can follow Kak Adam's tennis journey or the playroom adventures book by
 * book. A book belongs to at most one series (the first one listing it).
 * scripts/check-stories.ts fails if a slug here is not a real story.
 */
export interface StorySeries {
  key: string;
  emoji: string;
  title: Record<Locale, string>;
  blurb: Record<Locale, string>;
  /** reading order */
  books: string[];
}

export const SERIES: StorySeries[] = [
  {
    key: "tenis-kak-adam",
    emoji: "🎾",
    title: { id: "Perjalanan Tenis Kak Adam", en: "Kak Adam's Tennis Journey" },
    blurb: {
      id: "Dari bola merah di lapangan mini sampai final di stadion — kisah anak yang cinta tenis dan ingin menguasainya.",
      en: "From the red ball on the mini court to a stadium final — a boy who loves tennis and wants to master it.",
    },
    books: [
      "bola-merah-kak-adam",
      "forehand-kak-adam-yang-bandel",
      "pegangan-raket-yang-salah",
      "backhand-dua-tangan",
      "servis-roket-kak-adam",
      "kaki-kak-adam-yang-malas",
      "seratus-forehand-sehari",
      "senar-putus",
      "celengan-raket-impian-kak-adam",
      "penjaga-bola-cilik",
      "pertandingan-pertama-kak-adam",
      "love-itu-artinya-nol",
      "garis-yang-jujur",
      "forehand-melawan-raka",
      "ganda-bersama-raka",
      "hujan-tenis-batal",
      "bola-keberuntungan-yang-hilang",
      "lapangan-tanah-liat-yang-licin",
      "piala-kak-adam",
      "kak-adam-jadi-pelatih",
      "pertandingan-keluarga",
      "lapangan-rumput-dan-kaki-raka",
      "final-di-stadion",
    ],
  },
  {
    key: "ruang-main",
    emoji: "🧸",
    title: { id: "Petualangan Ruang Main", en: "Playroom Adventures" },
    blurb: {
      id: "Ruang main berubah jadi luar angkasa, kebun binatang, stasiun, sampai stadion dino — main pura-pura yang penuh pelajaran.",
      en: "The playroom becomes space, a zoo, a station, a dino world — pretend play full of lessons.",
    },
    books: [
      "roket-kardus-ke-bulan",
      "kebun-binatang-paling-lembut",
      "kereta-gantian-kak-adam",
      "pemadam-kebakaran-cilik",
      "petani-cilik-di-ruang-main",
      "maaf-dari-perut-paus",
      "restoran-koki-cilik",
      "pohon-mangga-yang-patah",
      "amanah-si-kelinci-putih",
      "gelembung-pertama-baby-mo",
      "bandara-di-ruang-main",
      "harta-karun-milik-umi",
      "kerang-untuk-nenek",
      "dino-paling-kuat",
      "polisi-lalu-lintas-cilik",
      "masjid-balok-kita",
    ],
  },
  {
    key: "dunia-laut-alam",
    emoji: "🐙",
    title: { id: "Dunia Laut & Alam", en: "Sea & Nature" },
    blurb: {
      id: "Gurita pemalu, tukik kecil, paus yang bernyanyi, lebah pekerja keras — mengenal ciptaan Allah.",
      en: "A shy octopus, baby turtles, a singing whale, hard-working bees — meeting Allah's creation.",
    },
    books: [
      "gurita-kecil-yang-pemalu",
      "tukik-pulang-ke-laut",
      "jingga-ikan-badut-mencari-rumah",
      "lagu-paus-untuk-bayinya",
      "kepiting-yang-berjalan-miring",
      "orangutan-dan-pohon-untuk-anaknya",
      "lebah-kecil-dan-madu",
      "saat-lampu-padam-bintang-menyala",
      "semut-kecil-yang-kuat",
      "rahasia-lebah-dan-roti-madu",
    ],
  },
  {
    key: "bersama-abi",
    emoji: "👨",
    title: { id: "Bersama Abi", en: "With Abi" },
    blurb: {
      id: "Hari-hari si kembar dan Kak Adam bersama Abi: sholat, olahraga pagi, dan pelukan sepulang kerja.",
      en: "The twins and Kak Adam with Abi: praying, morning exercise and a hug after work.",
    },
    books: [
      "abi-pulang-kerja",
      "sujud-pertama-bersama-abi",
      "saf-lurus-seperti-kereta",
      "jam-tangan-ajaib-abi",
      "olahraga-pagi-bersama-abi",
      "hari-abi-pusing",
      "siapa-yang-tidur-duluan",
      "abi-pergi-tiga-hari",
      "baby-mo-mencuci-mobil-abi",
      "kotak-sedekah-jumat",
      "iqra-bersama-kak-adam",
    ],
  },
  {
    key: "bersama-umi",
    emoji: "👩",
    title: { id: "Bersama Umi", en: "With Umi" },
    blurb: {
      id: "Kue gosong, hari Umi sakit, dan kejutan kecil — belajar menyayangi dan membantu Umi.",
      en: "A burnt cake, the day Umi was poorly, little surprises — learning to love and help Umi.",
    },
    books: [
      "kue-gosong-untuk-umi",
      "dapur-kecil-umi",
      "membantu-umi-bikin-kue",
      "hari-umi-sakit",
      "satu-hari-untuk-umi",
      "kejutan-untuk-umi",
      "pelukan-tidak-pernah-habis",
      "tablet-juga-perlu-tidur",
    ],
  },
  {
    key: "tanya-iman",
    emoji: "🌙",
    title: { id: "Si Kecil Bertanya", en: "Little Questions of Faith" },
    blurb: {
      id: "\"Siapa Allah?\" \"Kenapa kita sholat?\" \"Apa itu surga?\" — jawaban lembut untuk pertanyaan besar anak.",
      en: "\"Who is Allah?\" \"Why do we pray?\" \"What is Paradise?\" — gentle answers to a child's big questions.",
    },
    books: [
      "siapa-allah-untuk-anak",
      "siapa-yang-menciptakan-aku",
      "apakah-allah-melihatku",
      "siapa-yang-membuat-hujan",
      "ke-mana-kita-saat-tidur",
      "siapa-nabi-muhammad-untuk-anak",
      "apa-itu-alquran-untuk-anak",
      "apa-itu-malaikat-untuk-anak",
      "kenapa-kita-sholat-untuk-anak",
      "kenapa-berwudhu-sebelum-sholat",
      "apa-itu-adzan-untuk-anak",
      "kenapa-kita-berpuasa-untuk-anak",
      "apa-itu-sedekah-untuk-anak",
      "apa-itu-rezeki-untuk-anak",
      "kenapa-harus-jujur-untuk-anak",
      "kenapa-harus-berbagi-untuk-anak",
      "kenapa-harus-minta-izin-untuk-anak",
      "kenapa-sayang-orang-tua-untuk-anak",
      "apa-itu-surga-untuk-anak",
    ],
  },
  {
    key: "hari-hari-si-kembar",
    emoji: "🎒",
    title: { id: "Hari-hari Si Kembar", en: "The Twins' Everyday Adventures" },
    blurb: {
      id: "Sekolah, toko es krim, masjid, dan jalan-jalan — petualangan kecil Mo dan Ais yang penuh adab dan kasih sayang.",
      en: "School, the ice-cream shop, the mosque and outings — Mo and Ais's little adventures, full of good manners and love.",
    },
    books: [
      "teman-baru-di-kelas-baru",
      "satu-bekal-tiga-sahabat",
      "antrian-es-krim-yang-panjang",
      "tiga-bola-es-krim",
      "pertama-kali-ke-masjid",
      "bismillah-dulu",
      "berbagi-payung",
    ],
  },
  {
    key: "ramadan-si-kembar",
    emoji: "🏮",
    title: { id: "Ramadan Si Kembar", en: "The Twins' Ramadan" },
    blurb: {
      id: "Dari lentera pertama sampai pagi Lebaran — sahur, puasa bedug, lupa minum, pasar takjil, belajar hijaiyah, tarawih, Lailatul Qadar, zakat, dan malam takbiran bersama Mo dan Ais.",
      en: "From the first lantern to Eid morning — sahur, a half-day fast, a forgotten drink, the iftar market, first hijaiyah letters, tarawih, Laylatul Qadr, zakat and the night of takbir with Mo and Ais.",
    },
    books: [
      "lampu-ramadan-si-kembar",
      "puasa-bedug-si-kembar",
      "mo-lupa-sedang-puasa",
      "mulut-mo-wangi-kesturi",
      "menunggu-bedug-maghrib",
      "pasar-takjil-si-kembar",
      "satu-huruf-satu-juz",
      "tarawih-pertama-baby-mo",
      "detektif-lailatul-qadar",
      "malam-takbiran-si-kembar",
    ],
  },
];

export interface SeriesPlace {
  series: StorySeries;
  index: number;
  prev: string | null;
  next: string | null;
}

export function seriesOf(slug: string): SeriesPlace | null {
  for (const series of SERIES) {
    const index = series.books.indexOf(slug);
    if (index >= 0)
      return {
        series,
        index,
        prev: series.books[index - 1] ?? null,
        next: series.books[index + 1] ?? null,
      };
  }
  return null;
}
