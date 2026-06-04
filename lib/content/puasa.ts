import type { PuasaItem } from "./types";

/**
 * Puasa & Ramadan hub — the niat (intentions), doa, and sunnah-prayer
 * niat that families search for every year ("niat puasa", "doa buka
 * puasa", "niat sholat tarawih"), plus a warm amalan note for doing
 * Ramadan together with children.
 *
 * EDITORIAL NOTE: These are liturgical texts following the wording
 * commonly taught (Syafi'i) in Indonesia. Verify the Arabic harakat with
 * a qualified teacher before any "verified" claim; entries carry no
 * `reviewedBy` until then.
 */
export const puasaList: PuasaItem[] = [
  {
    slug: "niat-puasa-ramadhan",
    order: 1,
    category: "niat",
    title: { id: "Niat Puasa Ramadhan", en: "Intention for Ramadan Fasting" },
    subtitle: {
      id: "Diniatkan pada malam hari hingga sebelum fajar",
      en: "Made at night, before dawn (fajr)",
    },
    parts: [
      {
        arabic:
          "نَوَيْتُ صَوْمَ غَدٍ عَنْ أَدَاءِ فَرْضِ شَهْرِ رَمَضَانَ هٰذِهِ السَّنَةِ لِلّٰهِ تَعَالَى",
        transliteration:
          "Nawaitu shauma ghadin 'an adaa-i fardhi syahri ramadhaana haadzihis-sanati lillaahi ta'aalaa",
        translation: {
          id: "Aku niat berpuasa esok hari untuk menunaikan kewajiban di bulan Ramadhan tahun ini karena Allah Ta'ala.",
          en: "I intend to fast tomorrow to fulfil the obligation of the month of Ramadan this year, for Allah the Exalted.",
        },
      },
    ],
    when: {
      id: "Pada malam hari sebelum tidur atau saat sahur — niat puasa Ramadhan wajib dilakukan sebelum terbit fajar.",
      en: "At night before sleeping or at sahur — the intention for an obligatory Ramadan fast must be made before dawn.",
    },
    note: {
      id: "Untuk anak yang baru belajar berpuasa, ajak ia mengucap niat bersama saat sahur agar terasa istimewa dan ditunggu-tunggu.",
      en: "For a child just learning to fast, say the intention together at sahur so it feels special and looked forward to.",
    },
    published: "2026-06-04",
  },
  {
    slug: "doa-buka-puasa",
    order: 2,
    category: "doa",
    title: { id: "Doa Buka Puasa", en: "Du'a for Breaking the Fast" },
    subtitle: {
      id: "Dibaca saat berbuka, ketika azan Maghrib tiba",
      en: "Said at iftar, when the Maghrib adhan comes",
    },
    parts: [
      {
        label: { id: "Doa yang masyhur", en: "The well-known du'a" },
        arabic:
          "اللّٰهُمَّ لَكَ صُمْتُ وَبِكَ آمَنْتُ وَعَلَى رِزْقِكَ أَفْطَرْتُ بِرَحْمَتِكَ يَا أَرْحَمَ الرَّاحِمِيْنَ",
        transliteration:
          "Allaahumma laka shumtu wa bika aamantu wa 'alaa rizqika afthartu birahmatika yaa arhamar-raahimiin",
        translation: {
          id: "Ya Allah, untuk-Mu aku berpuasa, kepada-Mu aku beriman, dan dengan rezeki-Mu aku berbuka. Dengan rahmat-Mu, wahai Yang Maha Penyayang.",
          en: "O Allah, for You I fasted, in You I believe, and with Your provision I break my fast. By Your mercy, O Most Merciful of the merciful.",
        },
      },
      {
        label: { id: "Doa dari sunnah (HR. Abu Dawud)", en: "From the sunnah (Abu Dawud)" },
        arabic: "ذَهَبَ الظَّمَأُ وَابْتَلَّتِ الْعُرُوْقُ وَثَبَتَ الْأَجْرُ إِنْ شَاءَ اللّٰهُ",
        transliteration: "Dzahabazh-zhama-u wabtallatil-'uruuqu wa tsabatal-ajru insyaa-allaah",
        translation: {
          id: "Telah hilang dahaga, telah basah kerongkongan, dan telah ditetapkan pahala, insya Allah.",
          en: "The thirst is gone, the veins are moistened, and the reward is confirmed, if Allah wills.",
        },
      },
    ],
    when: {
      id: "Saat berbuka puasa ketika matahari terbenam (azan Maghrib). Disunnahkan menyegerakan berbuka.",
      en: "At iftar when the sun sets (Maghrib adhan). Hastening the breaking of fast is recommended.",
    },
    note: {
      id: "Momen berbuka adalah salah satu waktu doa yang mustajab. Ajak anak berdoa untuk hal-hal kecil sebelum menyantap kurma atau air pertamanya.",
      en: "Iftar is one of the times when du'a is answered. Have your child make a small du'a before their first date or sip of water.",
    },
    published: "2026-06-04",
  },
  {
    slug: "doa-sahur",
    order: 3,
    category: "doa",
    title: { id: "Sahur & Keberkahannya", en: "Sahur & Its Blessing" },
    subtitle: {
      id: "Makan menjelang fajar — penuh berkah",
      en: "The pre-dawn meal — full of blessing",
    },
    parts: [
      {
        label: { id: "Niat puasa juga dibaca saat sahur", en: "The fasting intention is also said at sahur" },
        arabic:
          "نَوَيْتُ صَوْمَ غَدٍ عَنْ أَدَاءِ فَرْضِ شَهْرِ رَمَضَانَ هٰذِهِ السَّنَةِ لِلّٰهِ تَعَالَى",
        transliteration:
          "Nawaitu shauma ghadin 'an adaa-i fardhi syahri ramadhaana haadzihis-sanati lillaahi ta'aalaa",
        translation: {
          id: "Aku niat berpuasa esok hari untuk menunaikan kewajiban di bulan Ramadhan tahun ini karena Allah Ta'ala.",
          en: "I intend to fast tomorrow to fulfil the obligation of Ramadan this year, for Allah the Exalted.",
        },
      },
    ],
    when: {
      id: "Pada akhir malam menjelang fajar. Rasulullah ﷺ bersabda bahwa pada sahur terdapat keberkahan (HR. Bukhari & Muslim).",
      en: "At the end of the night before dawn. The Prophet ﷺ said there is blessing in sahur (Bukhari & Muslim).",
    },
    note: {
      id: "Bangun sahur bersama keluarga adalah kenangan Ramadhan yang paling diingat anak. Tak perlu banyak — seteguk air pun sudah sahur yang berkah.",
      en: "Waking for sahur together is one of the Ramadan memories children treasure most. It needn't be much — even a sip of water is a blessed sahur.",
    },
    published: "2026-06-04",
  },
  {
    slug: "niat-puasa-qadha",
    order: 4,
    category: "niat",
    title: { id: "Niat Puasa Qadha Ramadhan", en: "Intention for Making Up a Ramadan Fast" },
    subtitle: {
      id: "Untuk mengganti puasa Ramadhan yang ditinggalkan",
      en: "To replace a missed Ramadan fast",
    },
    parts: [
      {
        arabic: "نَوَيْتُ صَوْمَ غَدٍ عَنْ قَضَاءِ فَرْضِ رَمَضَانَ لِلّٰهِ تَعَالَى",
        transliteration: "Nawaitu shauma ghadin 'an qadhaa-i fardhi ramadhaana lillaahi ta'aalaa",
        translation: {
          id: "Aku niat berpuasa esok hari untuk mengganti (qadha) kewajiban puasa Ramadhan karena Allah Ta'ala.",
          en: "I intend to fast tomorrow to make up an obligatory Ramadan fast, for Allah the Exalted.",
        },
      },
    ],
    when: {
      id: "Diniatkan pada malam hari, untuk mengganti puasa Ramadhan yang batal atau ditinggalkan (misalnya karena sakit atau bepergian).",
      en: "Made at night, to replace a Ramadan fast that was broken or missed (e.g. due to illness or travel).",
    },
    published: "2026-06-04",
  },
  {
    slug: "niat-puasa-senin-kamis",
    order: 5,
    category: "niat",
    title: { id: "Niat Puasa Senin & Kamis", en: "Intention for Monday & Thursday Fasting" },
    subtitle: {
      id: "Puasa sunnah yang amalannya diangkat pada hari itu",
      en: "A recommended fast — deeds are raised on those days",
    },
    parts: [
      {
        label: { id: "Senin", en: "Monday" },
        arabic: "نَوَيْتُ صَوْمَ يَوْمِ الْاِثْنَيْنِ سُنَّةً لِلّٰهِ تَعَالَى",
        transliteration: "Nawaitu shauma yaumil-itsnaini sunnatan lillaahi ta'aalaa",
        translation: {
          id: "Aku niat berpuasa sunnah hari Senin karena Allah Ta'ala.",
          en: "I intend to keep the recommended Monday fast, for Allah the Exalted.",
        },
      },
      {
        label: { id: "Kamis", en: "Thursday" },
        arabic: "نَوَيْتُ صَوْمَ يَوْمِ الْخَمِيْسِ سُنَّةً لِلّٰهِ تَعَالَى",
        transliteration: "Nawaitu shauma yaumil-khamiisi sunnatan lillaahi ta'aalaa",
        translation: {
          id: "Aku niat berpuasa sunnah hari Kamis karena Allah Ta'ala.",
          en: "I intend to keep the recommended Thursday fast, for Allah the Exalted.",
        },
      },
    ],
    when: {
      id: "Diniatkan pada malam hari atau boleh di pagi hari (sebelum tergelincir matahari) selama belum makan. Niat puasa sunnah lebih ringan daripada puasa wajib.",
      en: "Made at night, or even in the morning (before noon) as long as one hasn't eaten. The intention for a recommended fast is lighter than for an obligatory one.",
    },
    note: {
      id: "Cara indah mengenalkan puasa sunnah kepada anak yang sudah lebih besar — cukup setengah hari dulu, lalu tumbuh perlahan.",
      en: "A lovely way to introduce voluntary fasting to an older child — start with half a day, then grow gradually.",
    },
    published: "2026-06-04",
  },
  {
    slug: "niat-puasa-syawal",
    order: 6,
    category: "niat",
    title: { id: "Niat Puasa Syawal", en: "Intention for Shawwal Fasting" },
    subtitle: {
      id: "Enam hari di bulan Syawal setelah Idul Fitri",
      en: "Six days in Shawwal after Eid al-Fitr",
    },
    parts: [
      {
        arabic: "نَوَيْتُ صَوْمَ غَدٍ عَنْ أَدَاءِ سُنَّةِ الشَّوَّالِ لِلّٰهِ تَعَالَى",
        transliteration: "Nawaitu shauma ghadin 'an adaa-i sunnatisy-syawwaali lillaahi ta'aalaa",
        translation: {
          id: "Aku niat berpuasa sunnah Syawal esok hari karena Allah Ta'ala.",
          en: "I intend to keep the recommended Shawwal fast tomorrow, for Allah the Exalted.",
        },
      },
    ],
    when: {
      id: "Enam hari di bulan Syawal (setelah Idul Fitri). Rasulullah ﷺ bersabda: siapa berpuasa Ramadhan lalu mengikutinya dengan enam hari Syawal, seperti berpuasa setahun penuh (HR. Muslim).",
      en: "Six days in Shawwal (after Eid al-Fitr). The Prophet ﷺ said: whoever fasts Ramadan then follows it with six days of Shawwal, it is as if they fasted the whole year (Muslim).",
    },
    published: "2026-06-04",
  },
  {
    slug: "niat-sholat-tarawih",
    order: 7,
    category: "sholat",
    title: { id: "Niat Sholat Tarawih", en: "Intention for Tarawih Prayer" },
    subtitle: {
      id: "Sholat sunnah malam di bulan Ramadhan",
      en: "The recommended night prayer of Ramadan",
    },
    parts: [
      {
        label: { id: "Sebagai makmum", en: "As a follower (ma'mum)" },
        arabic: "أُصَلِّيْ سُنَّةَ التَّرَاوِيْحِ رَكْعَتَيْنِ مُسْتَقْبِلَ الْقِبْلَةِ مَأْمُوْمًا لِلّٰهِ تَعَالَى",
        transliteration: "Ushallii sunnatat-taraawiihi rak'ataini mustaqbilal-qiblati ma'muuman lillaahi ta'aalaa",
        translation: {
          id: "Aku niat sholat sunnah Tarawih dua rakaat menghadap kiblat sebagai makmum karena Allah Ta'ala.",
          en: "I intend to pray the recommended Tarawih, two rak'ah, facing the qibla, as a follower, for Allah the Exalted.",
        },
      },
    ],
    when: {
      id: "Setelah sholat Isya sepanjang malam-malam Ramadhan, biasanya berjamaah di masjid. Dikerjakan dua rakaat–dua rakaat.",
      en: "After the Isha prayer throughout the nights of Ramadan, usually in congregation at the mosque. Prayed two rak'ah at a time.",
    },
    note: {
      id: "Mengajak anak ikut tarawih beberapa rakaat (sesuai usianya) menumbuhkan kecintaan pada masjid dan suasana Ramadhan.",
      en: "Bringing a child for a few rak'ah of Tarawih (as their age allows) grows a love for the mosque and the spirit of Ramadan.",
    },
    published: "2026-06-04",
  },
  {
    slug: "niat-sholat-witir",
    order: 8,
    category: "sholat",
    title: { id: "Niat Sholat Witir", en: "Intention for Witr Prayer" },
    subtitle: {
      id: "Penutup sholat malam, jumlah rakaatnya ganjil",
      en: "The closing night prayer, an odd number of rak'ah",
    },
    parts: [
      {
        label: { id: "Witir satu rakaat (makmum)", en: "One-rak'ah Witr (follower)" },
        arabic: "أُصَلِّيْ سُنَّةَ الْوِتْرِ رَكْعَةً مُسْتَقْبِلَ الْقِبْلَةِ مَأْمُوْمًا لِلّٰهِ تَعَالَى",
        transliteration: "Ushallii sunnatal-witri rak'atan mustaqbilal-qiblati ma'muuman lillaahi ta'aalaa",
        translation: {
          id: "Aku niat sholat sunnah Witir satu rakaat menghadap kiblat sebagai makmum karena Allah Ta'ala.",
          en: "I intend to pray the recommended Witr, one rak'ah, facing the qibla, as a follower, for Allah the Exalted.",
        },
      },
    ],
    when: {
      id: "Dikerjakan sebagai penutup sholat malam, setelah Tarawih di bulan Ramadhan. Jumlah rakaatnya ganjil (1, 3, dan seterusnya).",
      en: "Prayed to close the night prayers, after Tarawih in Ramadan. The number of rak'ah is odd (1, 3, and so on).",
    },
    note: {
      id: "Rasulullah ﷺ menganjurkan menjadikan witir sebagai sholat terakhir di malam hari.",
      en: "The Prophet ﷺ encouraged making Witr the last prayer of the night.",
    },
    published: "2026-06-04",
  },
  {
    slug: "amalan-ramadhan-bareng-anak",
    order: 9,
    category: "amalan",
    title: { id: "Amalan Ramadhan Bareng Anak", en: "Ramadan Habits to Do With Kids" },
    subtitle: {
      id: "Cara hangat menumbuhkan cinta Ramadhan sejak kecil",
      en: "Warm ways to grow a love of Ramadan from a young age",
    },
    parts: [],
    when: {
      id: "Sepanjang bulan Ramadhan — sedikit demi sedikit, sesuai usia dan kemampuan anak.",
      en: "Throughout the month of Ramadan — little by little, suited to the child's age and ability.",
    },
    note: {
      id: "Beberapa amalan yang menyenangkan dilakukan bersama: bangun sahur bareng, menghias kalender mundur Ramadhan, menabung untuk sedekah harian, ikut tarawih beberapa rakaat, menambah satu surat hafalan, dan mendengarkan satu kisah teladan sebelum tidur. Yang terpenting bukan banyaknya, tetapi suasana gembira agar anak menanti Ramadhan berikutnya.",
      en: "Some joyful habits to share: waking for sahur together, decorating a Ramadan countdown, saving for a daily charity, joining a few rak'ah of Tarawih, adding one memorized surah, and hearing one good-character story before bed. What matters isn't the quantity but the joy — so the child looks forward to next Ramadan.",
    },
    published: "2026-06-04",
  },
];

const CATEGORY_ORDER: Record<PuasaItem["category"], number> = {
  niat: 0,
  doa: 1,
  sholat: 2,
  amalan: 3,
};

export function getAllPuasa(): PuasaItem[] {
  return [...puasaList].sort((a, b) => a.order - b.order);
}

export function getPuasaBySlug(slug: string): PuasaItem | undefined {
  return puasaList.find((p) => p.slug === slug);
}

export function getPuasaSlugs(): string[] {
  return puasaList.map((p) => p.slug);
}

export function getPuasaByCategory(): {
  category: PuasaItem["category"];
  items: PuasaItem[];
}[] {
  const groups = new Map<PuasaItem["category"], PuasaItem[]>();
  for (const p of getAllPuasa()) {
    const arr = groups.get(p.category) ?? [];
    arr.push(p);
    groups.set(p.category, arr);
  }
  return Array.from(groups, ([category, items]) => ({ category, items })).sort(
    (a, b) => CATEGORY_ORDER[a.category] - CATEGORY_ORDER[b.category],
  );
}
