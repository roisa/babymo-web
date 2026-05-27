import type { Doa } from "./types";

/**
 * Canonical daily duas. Each entry includes Arabic, transliteration, translation,
 * and a hadith/qur'an source with authenticity grade.
 *
 * EDITORIAL NOTE: Translations are taken from widely accepted English/Indonesian
 * renderings of well-known duas. Before public launch, every entry must be
 * reviewed and signed off by a qualified ustadz (see /tentang for our editorial
 * process). The `reviewedBy` field will be added in v2 of the schema.
 */
export const doaList: Doa[] = [
  {
    slug: "sebelum-tidur",
    arabic: "بِاسْمِكَ اللَّهُمَّ أَمُوتُ وَأَحْيَا",
    transliteration: "Bismika Allahumma amutu wa ahya",
    title: {
      id: "Doa Sebelum Tidur",
      en: "Dua Before Sleeping",
    },
    translation: {
      id: "Dengan nama-Mu ya Allah, aku mati dan aku hidup.",
      en: "In Your name, O Allah, I die and I live.",
    },
    context: {
      id: "Dibaca anak ketika hendak tidur, sebagai pengingat bahwa hidup dan mati di tangan Allah.",
      en: "Read by the child before sleeping — a reminder that life and death are in Allah's hands.",
    },
    source: {
      type: "hadith",
      reference: "HR. Bukhari 6324",
      grade: "sahih",
    },
    ages: [3, 4, 5, 6, 7, 8],
    situations: ["tidur", "malam"],
    related: ["bangun-tidur"],
    published: "2026-05-27",
    updated: "2026-05-27",
  },
  {
    slug: "bangun-tidur",
    arabic:
      "الْحَمْدُ لِلَّهِ الَّذِي أَحْيَانَا بَعْدَ مَا أَمَاتَنَا وَإِلَيْهِ النُّشُورُ",
    transliteration:
      "Alhamdulillahilladzi ahyana ba'da ma amatana wa ilayhin-nusyur",
    title: {
      id: "Doa Bangun Tidur",
      en: "Dua Upon Waking",
    },
    translation: {
      id: "Segala puji bagi Allah yang telah menghidupkan kami setelah mematikan kami, dan kepada-Nya kami dikembalikan.",
      en: "All praise is for Allah Who gave us life after taking it, and to Him is the return.",
    },
    context: {
      id: "Dibaca anak ketika bangun pagi, mengawali hari dengan syukur.",
      en: "Read by the child upon waking, starting the day in gratitude.",
    },
    source: {
      type: "hadith",
      reference: "HR. Bukhari 6312",
      grade: "sahih",
    },
    ages: [3, 4, 5, 6, 7, 8],
    situations: ["pagi", "bangun"],
    related: ["sebelum-tidur"],
    published: "2026-05-27",
    updated: "2026-05-27",
  },
  {
    slug: "sebelum-makan",
    arabic: "بِسْمِ اللَّهِ",
    transliteration: "Bismillah",
    title: {
      id: "Doa Sebelum Makan",
      en: "Dua Before Eating",
    },
    translation: {
      id: "Dengan nama Allah.",
      en: "In the name of Allah.",
    },
    context: {
      id: "Dibaca anak sebelum mulai makan atau minum. Jika lupa di awal, ucapkan 'Bismillahi awwalahu wa akhirahu'.",
      en: "Read by the child before eating or drinking. If forgotten at the start, say 'Bismillahi awwalahu wa akhirahu'.",
    },
    source: {
      type: "hadith",
      reference: "HR. Abu Dawud 3767",
      grade: "sahih",
    },
    ages: [2, 3, 4, 5, 6, 7, 8],
    situations: ["makan", "minum"],
    related: ["sesudah-makan"],
    published: "2026-05-27",
    updated: "2026-05-27",
  },
  {
    slug: "sesudah-makan",
    arabic:
      "الْحَمْدُ لِلَّهِ الَّذِي أَطْعَمَنَا وَسَقَانَا وَجَعَلَنَا مُسْلِمِينَ",
    transliteration:
      "Alhamdulillahilladzi at'amana wa saqana wa ja'alana muslimin",
    title: {
      id: "Doa Sesudah Makan",
      en: "Dua After Eating",
    },
    translation: {
      id: "Segala puji bagi Allah yang telah memberi kami makan dan minum, serta menjadikan kami muslim.",
      en: "All praise is for Allah who gave us food and drink, and made us Muslims.",
    },
    context: {
      id: "Dibaca anak setelah selesai makan sebagai bentuk syukur.",
      en: "Read by the child after finishing a meal, as gratitude.",
    },
    source: {
      type: "hadith",
      reference: "HR. Abu Dawud 3850",
      grade: "sahih",
    },
    ages: [3, 4, 5, 6, 7, 8],
    situations: ["makan", "syukur"],
    related: ["sebelum-makan"],
    published: "2026-05-27",
    updated: "2026-05-27",
  },
  {
    slug: "masuk-kamar-mandi",
    arabic: "اللَّهُمَّ إِنِّي أَعُوذُ بِكَ مِنَ الْخُبُثِ وَالْخَبَائِثِ",
    transliteration: "Allahumma inni a'udzubika minal khubutsi wal khaba'its",
    title: {
      id: "Doa Masuk Kamar Mandi",
      en: "Dua Entering the Bathroom",
    },
    translation: {
      id: "Ya Allah, aku berlindung kepada-Mu dari setan laki-laki dan setan perempuan.",
      en: "O Allah, I seek Your protection from male and female devils.",
    },
    context: {
      id: "Dibaca sebelum masuk ke kamar mandi/WC.",
      en: "Read before entering the bathroom or toilet.",
    },
    source: {
      type: "hadith",
      reference: "HR. Bukhari 142",
      grade: "sahih",
    },
    ages: [3, 4, 5, 6, 7, 8],
    situations: ["kamar-mandi"],
    related: ["keluar-kamar-mandi"],
    published: "2026-05-27",
    updated: "2026-05-27",
  },
  {
    slug: "keluar-kamar-mandi",
    arabic: "غُفْرَانَكَ",
    transliteration: "Ghufranaka",
    title: {
      id: "Doa Keluar Kamar Mandi",
      en: "Dua Leaving the Bathroom",
    },
    translation: {
      id: "Aku memohon ampunan-Mu.",
      en: "I seek Your forgiveness.",
    },
    context: {
      id: "Dibaca segera setelah keluar dari kamar mandi.",
      en: "Read immediately upon leaving the bathroom.",
    },
    source: {
      type: "hadith",
      reference: "HR. Tirmidzi 7",
      grade: "sahih",
    },
    ages: [3, 4, 5, 6, 7, 8],
    situations: ["kamar-mandi"],
    related: ["masuk-kamar-mandi"],
    published: "2026-05-27",
    updated: "2026-05-27",
  },
  {
    slug: "naik-kendaraan",
    arabic:
      "سُبْحَانَ الَّذِي سَخَّرَ لَنَا هَذَا وَمَا كُنَّا لَهُ مُقْرِنِينَ",
    transliteration:
      "Subhanalladzi sakhkhara lana hadza wa ma kunna lahu muqrinin",
    title: {
      id: "Doa Naik Kendaraan",
      en: "Dua When Riding a Vehicle",
    },
    translation: {
      id: "Maha Suci (Allah) yang telah menundukkan ini untuk kami, padahal kami sebelumnya tidak mampu menguasainya.",
      en: "Glory be to the One who has subjected this to us, and we could not have done it ourselves.",
    },
    context: {
      id: "Dibaca anak ketika naik kendaraan — mobil, motor, kereta, atau pesawat.",
      en: "Read by the child when boarding a vehicle — car, motorbike, train, or plane.",
    },
    source: {
      type: "quran",
      reference: "QS. Az-Zukhruf 43:13",
      grade: "quran",
    },
    ages: [4, 5, 6, 7, 8],
    situations: ["perjalanan", "kendaraan"],
    related: [],
    published: "2026-05-27",
    updated: "2026-05-27",
  },
];

export function getAllDoa(): Doa[] {
  return doaList;
}

export function getDoaBySlug(slug: string): Doa | undefined {
  return doaList.find((d) => d.slug === slug);
}

export function getRelatedDoa(slug: string): Doa[] {
  const doa = getDoaBySlug(slug);
  if (!doa) return [];
  return doa.related
    .map((s) => getDoaBySlug(s))
    .filter((d): d is Doa => d !== undefined);
}
