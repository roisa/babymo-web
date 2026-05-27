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
    related: ["keluar-rumah"],
    published: "2026-05-27",
    updated: "2026-05-27",
  },
  {
    slug: "keluar-rumah",
    arabic:
      "بِسْمِ اللَّهِ، تَوَكَّلْتُ عَلَى اللَّهِ، وَلَا حَوْلَ وَلَا قُوَّةَ إِلَّا بِاللَّهِ",
    transliteration:
      "Bismillah, tawakkaltu 'alallah, wa la haula wa la quwwata illa billah",
    title: {
      id: "Doa Keluar Rumah",
      en: "Dua When Leaving Home",
    },
    translation: {
      id: "Dengan nama Allah, aku bertawakkal kepada Allah. Tidak ada daya dan kekuatan kecuali dengan pertolongan Allah.",
      en: "In the name of Allah, I place my trust in Allah. There is no power and no strength except by Allah.",
    },
    context: {
      id: "Dibaca anak ketika hendak keluar rumah — ke sekolah, ke masjid, atau bepergian. Mengajarkan tawakal sejak pintu rumah.",
      en: "Read by the child when leaving home — to school, the mosque, or any trip. Teaches reliance on Allah from the door itself.",
    },
    source: {
      type: "hadith",
      reference: "HR. Abu Dawud 5095, Tirmidzi 3426",
      grade: "sahih",
    },
    ages: [4, 5, 6, 7, 8],
    situations: ["perjalanan", "perlindungan", "rumah"],
    related: ["masuk-rumah", "naik-kendaraan"],
    published: "2026-05-27",
    updated: "2026-05-27",
  },
  {
    slug: "masuk-rumah",
    arabic:
      "بِسْمِ اللَّهِ وَلَجْنَا، وَبِسْمِ اللَّهِ خَرَجْنَا، وَعَلَى رَبِّنَا تَوَكَّلْنَا",
    transliteration:
      "Bismillahi walajna, wa bismillahi kharajna, wa 'ala rabbina tawakkalna",
    title: {
      id: "Doa Masuk Rumah",
      en: "Dua When Entering Home",
    },
    translation: {
      id: "Dengan nama Allah kami masuk, dan dengan nama Allah kami keluar, dan kepada Tuhan kami berserah diri.",
      en: "In the name of Allah we enter, in the name of Allah we leave, and in our Lord we trust.",
    },
    context: {
      id: "Dibaca anak ketika kembali ke rumah — sepulang sekolah atau dari bepergian.",
      en: "Read by the child upon returning home — from school or a trip.",
    },
    source: {
      type: "hadith",
      reference: "HR. Abu Dawud 5096",
      grade: "sahih",
    },
    ages: [4, 5, 6, 7, 8],
    situations: ["rumah", "perjalanan"],
    related: ["keluar-rumah"],
    published: "2026-05-27",
    updated: "2026-05-27",
  },
  {
    slug: "doa-untuk-orang-tua",
    arabic: "رَبِّ ارْحَمْهُمَا كَمَا رَبَّيَانِي صَغِيرًا",
    transliteration: "Rabbirhamhuma kama rabbayani shaghira",
    title: {
      id: "Doa untuk Orang Tua",
      en: "Dua for One's Parents",
    },
    translation: {
      id: "Ya Tuhanku, sayangilah keduanya (ibu bapakku) sebagaimana mereka telah mendidikku sewaktu kecil.",
      en: "My Lord, have mercy on them as they raised me when I was small.",
    },
    context: {
      id: "Diajarkan kepada anak agar berdoa untuk kedua orang tuanya — bisa setiap selesai sholat atau setiap hari.",
      en: "Taught to children to invoke for their parents — after each prayer or daily.",
    },
    source: {
      type: "quran",
      reference: "QS. Al-Isra' 17:24",
      grade: "quran",
    },
    ages: [5, 6, 7, 8],
    situations: ["orangtua", "syukur"],
    related: ["doa-bersin"],
    published: "2026-05-27",
    updated: "2026-05-27",
  },
  {
    slug: "ketika-hujan",
    arabic: "اللَّهُمَّ صَيِّبًا نَافِعًا",
    transliteration: "Allahumma shayyiban nafi'an",
    title: {
      id: "Doa Ketika Hujan Turun",
      en: "Dua When It Rains",
    },
    translation: {
      id: "Ya Allah, jadikanlah (hujan ini) hujan yang membawa manfaat.",
      en: "O Allah, make this a beneficial rain.",
    },
    context: {
      id: "Dibaca anak ketika melihat atau mendengar hujan turun — momen yang sering ditemui di Indonesia.",
      en: "Read by the child when seeing or hearing rain — a daily moment in tropical Indonesia.",
    },
    source: {
      type: "hadith",
      reference: "HR. Bukhari 1032",
      grade: "sahih",
    },
    ages: [3, 4, 5, 6, 7, 8],
    situations: ["cuaca", "syukur"],
    related: [],
    published: "2026-05-27",
    updated: "2026-05-27",
  },
  {
    slug: "mendengar-adzan",
    arabic:
      "اللَّهُمَّ رَبَّ هَذِهِ الدَّعْوَةِ التَّامَّةِ، وَالصَّلَاةِ الْقَائِمَةِ، آتِ مُحَمَّدًا الْوَسِيلَةَ وَالْفَضِيلَةَ",
    transliteration:
      "Allahumma rabba hadzihid-da'watit-tammah, wash-shalatil-qa'imah, ati Muhammadan-il-wasilata wal-fadhilah",
    title: {
      id: "Doa Setelah Adzan",
      en: "Dua After the Call to Prayer",
    },
    translation: {
      id: "Ya Allah, Tuhan pemilik seruan yang sempurna dan sholat yang akan ditegakkan, berikanlah kepada Muhammad wasilah dan keutamaan.",
      en: "O Allah, Lord of this complete call and the prayer to be established, grant Muhammad the means and the highest station.",
    },
    context: {
      id: "Dibaca anak setelah mendengar adzan selesai — momen 5 kali sehari yang membentuk hubungan dengan sholat.",
      en: "Read by the child after the adhan finishes — five daily moments shaping connection to prayer.",
    },
    source: {
      type: "hadith",
      reference: "HR. Bukhari 614",
      grade: "sahih",
    },
    ages: [5, 6, 7, 8],
    situations: ["sholat", "adzan"],
    related: [],
    published: "2026-05-27",
    updated: "2026-05-27",
  },
  {
    slug: "memakai-pakaian",
    arabic:
      "الْحَمْدُ لِلَّهِ الَّذِي كَسَانِي هَذَا وَرَزَقَنِيهِ مِنْ غَيْرِ حَوْلٍ مِنِّي وَلَا قُوَّةٍ",
    transliteration:
      "Alhamdulillahilladzi kasani hadza wa razaqanihi min ghairi haulin minni wa la quwwah",
    title: {
      id: "Doa Memakai Pakaian Baru",
      en: "Dua When Wearing New Clothes",
    },
    translation: {
      id: "Segala puji bagi Allah yang telah memberiku pakaian ini dan memberikannya kepadaku tanpa daya dan kekuatan dariku.",
      en: "All praise to Allah who has clothed me with this and provided it for me without my own strength or power.",
    },
    context: {
      id: "Dibaca ketika memakai pakaian baru — mengajarkan anak bersyukur atas nikmat sederhana.",
      en: "Read when putting on new clothes — teaches children gratitude for simple blessings.",
    },
    source: {
      type: "hadith",
      reference: "HR. Abu Dawud 4023, Tirmidzi 3458",
      grade: "hasan",
    },
    ages: [4, 5, 6, 7, 8],
    situations: ["pakaian", "syukur"],
    related: [],
    published: "2026-05-27",
    updated: "2026-05-27",
  },
  {
    slug: "perlindungan-anak",
    arabic:
      "أُعِيذُكُمَا بِكَلِمَاتِ اللَّهِ التَّامَّةِ، مِنْ كُلِّ شَيْطَانٍ وَهَامَّةٍ، وَمِنْ كُلِّ عَيْنٍ لَامَّةٍ",
    transliteration:
      "U'idzukuma bi kalimatillahit-tammati, min kulli syaithanin wa hammah, wa min kulli 'ainin lammah",
    title: {
      id: "Doa Perlindungan untuk Anak",
      en: "Dua of Protection for Children",
    },
    translation: {
      id: "Aku memohon perlindungan untuk kalian berdua dengan kalimat-kalimat Allah yang sempurna, dari setiap setan dan binatang berbisa, dan dari setiap mata yang jahat.",
      en: "I seek protection for you both with the perfect words of Allah, from every devil and venomous creature, and from every evil eye.",
    },
    context: {
      id: "Dibaca oleh orang tua kepada anak — sering dibacakan sebelum tidur atau saat anak akan keluar rumah. Doa ini dibaca Rasulullah ﷺ untuk Hasan dan Husain.",
      en: "Recited by parents over their children — often read before sleep or before the child leaves home. The Prophet ﷺ recited this for Hasan and Husain.",
    },
    source: {
      type: "hadith",
      reference: "HR. Bukhari 3371",
      grade: "sahih",
    },
    ages: [0, 1, 2, 3, 4, 5, 6, 7, 8],
    situations: ["perlindungan", "tidur", "orangtua"],
    related: ["sebelum-tidur"],
    published: "2026-05-27",
    updated: "2026-05-27",
  },
  {
    slug: "bercermin",
    arabic: "اللَّهُمَّ كَمَا حَسَّنْتَ خَلْقِي فَحَسِّنْ خُلُقِي",
    transliteration: "Allahumma kama hassanta khalqi fa hassin khuluqi",
    title: {
      id: "Doa Bercermin",
      en: "Dua When Looking in the Mirror",
    },
    translation: {
      id: "Ya Allah, sebagaimana Engkau telah memperbaiki rupaku, perbaikilah pula akhlakku.",
      en: "O Allah, just as You have made my appearance beautiful, beautify my character.",
    },
    context: {
      id: "Dibaca ketika anak bercermin — momen pagi yang menumbuhkan kesadaran bahwa akhlak lebih penting dari rupa.",
      en: "Read when the child looks in the mirror — a morning moment that grows the awareness that character matters more than appearance.",
    },
    source: {
      type: "hadith",
      reference: "HR. Ahmad 24437",
      grade: "hasan",
    },
    ages: [5, 6, 7, 8],
    situations: ["pagi", "akhlak"],
    related: [],
    published: "2026-05-27",
    updated: "2026-05-27",
  },
  {
    slug: "doa-bersin",
    arabic: "الْحَمْدُ لِلَّهِ",
    transliteration: "Alhamdulillah",
    title: {
      id: "Doa Ketika Bersin",
      en: "Dua When Sneezing",
    },
    translation: {
      id: "Segala puji bagi Allah.",
      en: "All praise to Allah.",
    },
    context: {
      id: "Diucapkan anak ketika bersin. Yang mendengar mengucap 'Yarhamukallah' (semoga Allah merahmatimu), lalu anak membalas 'Yahdikumullah wa yuslihu balakum' (semoga Allah memberimu petunjuk dan memperbaiki keadaanmu).",
      en: "Said by the child when sneezing. The listener responds 'Yarhamukallah' (May Allah have mercy on you), and the sneezer replies 'Yahdikumullah wa yuslihu balakum' (May Allah guide you and improve your state).",
    },
    source: {
      type: "hadith",
      reference: "HR. Bukhari 6224",
      grade: "sahih",
    },
    ages: [2, 3, 4, 5, 6, 7, 8],
    situations: ["sosial", "syukur"],
    related: [],
    published: "2026-05-27",
    updated: "2026-05-27",
  },
  {
    slug: "sebelum-belajar",
    arabic: "رَبِّ زِدْنِي عِلْمًا",
    transliteration: "Rabbi zidni 'ilma",
    title: {
      id: "Doa Sebelum Belajar",
      en: "Dua Before Studying",
    },
    translation: {
      id: "Ya Tuhanku, tambahkanlah kepadaku ilmu.",
      en: "My Lord, increase me in knowledge.",
    },
    context: {
      id: "Dibaca anak sebelum mulai belajar — di sekolah, di rumah, atau saat membaca buku.",
      en: "Read by the child before starting to study — at school, at home, or when reading a book.",
    },
    source: {
      type: "quran",
      reference: "QS. Thaha 20:114",
      grade: "quran",
    },
    ages: [4, 5, 6, 7, 8],
    situations: ["belajar", "sekolah"],
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
