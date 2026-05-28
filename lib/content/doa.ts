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
    related: ["setelah-belajar"],
    published: "2026-05-27",
    updated: "2026-05-27",
  },
  {
    slug: "setelah-belajar",
    arabic:
      "اللَّهُمَّ إِنِّي أَسْأَلُكَ عِلْمًا نَافِعًا وَرِزْقًا طَيِّبًا وَعَمَلًا مُتَقَبَّلًا",
    transliteration:
      "Allahumma inni as'aluka 'ilman nafi'an wa rizqan thayyiban wa 'amalan mutaqabbalan",
    title: {
      id: "Doa Setelah Belajar",
      en: "Dua After Studying",
    },
    translation: {
      id: "Ya Allah, sungguh aku memohon kepada-Mu ilmu yang bermanfaat, rezeki yang baik, dan amal yang diterima.",
      en: "O Allah, I ask You for beneficial knowledge, wholesome provision, and accepted deeds.",
    },
    context: {
      id: "Dibaca anak setelah selesai belajar — mengingat bahwa ilmu adalah pemberian Allah yang harus disyukuri.",
      en: "Read after finishing study — a reminder that knowledge is a gift from Allah to be received with gratitude.",
    },
    source: {
      type: "hadith",
      reference: "HR. Ibnu Majah 925",
      grade: "sahih",
    },
    ages: [5, 6, 7, 8],
    situations: ["belajar", "sekolah", "syukur"],
    related: ["sebelum-belajar"],
    published: "2026-05-27",
    updated: "2026-05-27",
  },
  {
    slug: "selesai-wudhu",
    arabic:
      "أَشْهَدُ أَنْ لَا إِلَهَ إِلَّا اللَّهُ وَحْدَهُ لَا شَرِيكَ لَهُ، وَأَشْهَدُ أَنَّ مُحَمَّدًا عَبْدُهُ وَرَسُولُهُ",
    transliteration:
      "Asyhadu an la ilaha illallah wahdahu la syarika lah, wa asyhadu anna Muhammadan 'abduhu wa rasuluh",
    title: {
      id: "Doa Selesai Wudhu",
      en: "Dua After Ablution",
    },
    translation: {
      id: "Aku bersaksi bahwa tiada Tuhan selain Allah, Yang Maha Esa, tidak ada sekutu bagi-Nya. Dan aku bersaksi bahwa Muhammad adalah hamba-Nya dan utusan-Nya.",
      en: "I bear witness that there is no god but Allah, Alone, without partner. And I bear witness that Muhammad is His servant and messenger.",
    },
    context: {
      id: "Dibaca anak segera setelah selesai berwudhu — Rasulullah ﷺ menjanjikan delapan pintu surga terbuka untuk yang membacanya.",
      en: "Recited immediately after completing wudu — the Prophet ﷺ promised that the eight gates of paradise open for the one who says it.",
    },
    source: {
      type: "hadith",
      reference: "HR. Muslim 234",
      grade: "sahih",
    },
    ages: [5, 6, 7, 8],
    situations: ["wudhu", "sholat"],
    related: ["mendengar-adzan"],
    published: "2026-05-27",
    updated: "2026-05-27",
  },
  {
    slug: "doa-pagi",
    arabic:
      "بِسْمِ اللَّهِ الَّذِي لَا يَضُرُّ مَعَ اسْمِهِ شَيْءٌ فِي الْأَرْضِ وَلَا فِي السَّمَاءِ، وَهُوَ السَّمِيعُ الْعَلِيمُ",
    transliteration:
      "Bismillahilladzi la yadhurru ma'asmihi syai'un fil-ardhi wa la fis-sama'i, wa huwas-sami'ul-'alim",
    title: {
      id: "Doa Pagi (Perlindungan)",
      en: "Morning Dua (Protection)",
    },
    translation: {
      id: "Dengan nama Allah yang dengan menyebut nama-Nya, segala sesuatu di bumi dan di langit tidak akan memberi mudharat. Dan Dia-lah Yang Maha Mendengar lagi Maha Mengetahui.",
      en: "In the name of Allah, with whose name nothing on earth or in heaven can do harm. He is the All-Hearing, the All-Knowing.",
    },
    context: {
      id: "Dibaca 3 kali pada pagi hari — perlindungan menyeluruh sepanjang hari sampai petang.",
      en: "Recited 3 times in the morning — complete protection through the day until evening.",
    },
    source: {
      type: "hadith",
      reference: "HR. Abu Dawud 5088, Tirmidzi 3388",
      grade: "sahih",
    },
    ages: [5, 6, 7, 8],
    situations: ["pagi", "perlindungan"],
    related: ["doa-petang", "bangun-tidur"],
    published: "2026-05-27",
    updated: "2026-05-27",
  },
  {
    slug: "doa-petang",
    arabic:
      "بِسْمِ اللَّهِ الَّذِي لَا يَضُرُّ مَعَ اسْمِهِ شَيْءٌ فِي الْأَرْضِ وَلَا فِي السَّمَاءِ، وَهُوَ السَّمِيعُ الْعَلِيمُ",
    transliteration:
      "Bismillahilladzi la yadhurru ma'asmihi syai'un fil-ardhi wa la fis-sama'i, wa huwas-sami'ul-'alim",
    title: {
      id: "Doa Petang (Perlindungan)",
      en: "Evening Dua (Protection)",
    },
    translation: {
      id: "Dengan nama Allah yang dengan menyebut nama-Nya, segala sesuatu di bumi dan di langit tidak akan memberi mudharat. Dan Dia-lah Yang Maha Mendengar lagi Maha Mengetahui.",
      en: "In the name of Allah, with whose name nothing on earth or in heaven can do harm. He is the All-Hearing, the All-Knowing.",
    },
    context: {
      id: "Dibaca 3 kali pada sore hari setelah Ashar — perlindungan menyeluruh sepanjang malam sampai pagi.",
      en: "Recited 3 times in the late afternoon after Asr — complete protection through the night until morning.",
    },
    source: {
      type: "hadith",
      reference: "HR. Abu Dawud 5088, Tirmidzi 3388",
      grade: "sahih",
    },
    ages: [5, 6, 7, 8],
    situations: ["petang", "perlindungan"],
    related: ["doa-pagi", "sebelum-tidur"],
    published: "2026-05-27",
    updated: "2026-05-27",
  },
  {
    slug: "berbuka-puasa",
    arabic:
      "ذَهَبَ الظَّمَأُ وَابْتَلَّتِ الْعُرُوقُ وَثَبَتَ الْأَجْرُ إِنْ شَاءَ اللَّهُ",
    transliteration:
      "Dzahabazh-zhama'u wabtallatil-'uruqu wa tsabatal-ajru insya Allah",
    title: {
      id: "Doa Berbuka Puasa",
      en: "Dua When Breaking Fast",
    },
    translation: {
      id: "Telah hilang dahaga, telah basah urat-urat, dan telah tetap pahala, insya Allah.",
      en: "The thirst is gone, the veins are moistened, and the reward is established, if Allah wills.",
    },
    context: {
      id: "Dibaca anak segera setelah meneguk air berbuka — doa pendek, paling utama saat momen iftar.",
      en: "Recited by the child immediately after the first sip at iftar — a short, deeply rewarding moment.",
    },
    source: {
      type: "hadith",
      reference: "HR. Abu Dawud 2357",
      grade: "hasan",
    },
    ages: [5, 6, 7, 8],
    situations: ["puasa", "ramadan"],
    related: ["sebelum-makan", "sesudah-makan"],
    published: "2026-05-27",
    updated: "2026-05-27",
  },
  {
    slug: "melihat-bulan-baru",
    arabic:
      "اللَّهُمَّ أَهِلَّهُ عَلَيْنَا بِالْأَمْنِ وَالْإِيمَانِ، وَالسَّلَامَةِ وَالْإِسْلَامِ، رَبِّي وَرَبُّكَ اللَّهُ",
    transliteration:
      "Allahumma ahillahu 'alayna bil-amni wal-iman, was-salamati wal-islam, rabbi wa rabbukallah",
    title: {
      id: "Doa Melihat Bulan Sabit Baru",
      en: "Dua at the Sighting of the New Crescent",
    },
    translation: {
      id: "Ya Allah, tampakkanlah bulan ini kepada kami dengan membawa keamanan dan keimanan, keselamatan dan Islam. Tuhanku dan Tuhanmu adalah Allah.",
      en: "O Allah, let this crescent rise upon us with security, faith, safety, and Islam. My Lord and your Lord is Allah.",
    },
    context: {
      id: "Dibaca anak ketika melihat bulan sabit baru — penanda bulan hijriyah baru, sangat baik dibiasakan menjelang Ramadan dan Idul Adha.",
      en: "Recited by the child when sighting a new crescent — marking a new Hijri month, especially meaningful approaching Ramadan and Eid al-Adha.",
    },
    source: {
      type: "hadith",
      reference: "HR. Tirmidzi 3451",
      grade: "hasan",
    },
    ages: [5, 6, 7, 8],
    situations: ["bulan-hijriyah", "ramadan"],
    related: [],
    published: "2026-05-27",
    updated: "2026-05-27",
  },
  {
    slug: "mendapat-rezeki",
    arabic:
      "اللَّهُمَّ بَارِكْ لَنَا فِيمَا رَزَقْتَنَا وَقِنَا عَذَابَ النَّارِ",
    transliteration:
      "Allahumma barik lana fima razaqtana wa qina 'adzaban-nar",
    title: {
      id: "Doa Memohon Berkah atas Rezeki",
      en: "Dua for Blessing in Provision",
    },
    translation: {
      id: "Ya Allah, berkahilah kami pada apa yang Engkau rezekikan kepada kami, dan jauhkanlah kami dari siksa neraka.",
      en: "O Allah, bless for us what You have provided us with, and protect us from the punishment of the Fire.",
    },
    context: {
      id: "Dibaca anak ketika menerima makanan, hadiah, atau apapun yang merupakan rezeki — menanamkan rasa syukur sejak kecil.",
      en: "Recited by the child when receiving food, a gift, or any blessing — planting gratitude early.",
    },
    source: {
      type: "hadith",
      reference: "HR. Ibnu Sunni",
      grade: "hasan",
    },
    ages: [4, 5, 6, 7, 8],
    situations: ["rezeki", "syukur", "makan"],
    related: ["sesudah-makan"],
    published: "2026-05-27",
    updated: "2026-05-27",
  },
  {
    slug: "mendengar-petir",
    arabic:
      "سُبْحَانَ الَّذِي يُسَبِّحُ الرَّعْدُ بِحَمْدِهِ وَالْمَلَائِكَةُ مِنْ خِيفَتِهِ",
    transliteration:
      "Subhanalladzi yusabbihur-ra'du bihamdihi wal-mala'ikatu min khifatih",
    title: {
      id: "Doa Mendengar Petir",
      en: "Dua When Hearing Thunder",
    },
    translation: {
      id: "Maha Suci Dzat yang petir bertasbih dengan memuji-Nya, dan para malaikat (bertasbih) karena takut kepada-Nya.",
      en: "Glory be to the One whom thunder glorifies with His praise, and the angels do so out of awe of Him.",
    },
    context: {
      id: "Dibaca anak ketika mendengar suara petir — momen kecil untuk mengubah rasa takut menjadi pengingat akan kebesaran Allah.",
      en: "Recited by the child when hearing thunder — a small moment to turn fear into a reminder of Allah's greatness.",
    },
    source: {
      type: "hadith",
      reference: "Muwatta' Imam Malik",
      grade: "hasan",
    },
    ages: [4, 5, 6, 7, 8],
    situations: ["cuaca", "perlindungan"],
    related: ["ketika-hujan"],
    published: "2026-05-27",
    updated: "2026-05-27",
  },
  {
    slug: "mengucap-salam",
    arabic: "السَّلَامُ عَلَيْكُمْ وَرَحْمَةُ اللَّهِ وَبَرَكَاتُهُ",
    transliteration: "Assalamu'alaikum wa rahmatullahi wa barakatuh",
    title: {
      id: "Mengucap Salam",
      en: "Saying Salam",
    },
    translation: {
      id: "Semoga keselamatan, rahmat Allah, dan keberkahan-Nya tercurah kepadamu.",
      en: "May the peace, mercy, and blessings of Allah be upon you.",
    },
    context: {
      id: "Diucapkan anak ketika bertemu sesama muslim, masuk rumah, atau memasuki ruangan. Salam adalah doa kebaikan terkecil yang paling sering diucapkan seorang muslim.",
      en: "Said by the child when meeting another Muslim, entering a home, or entering a room. Salam is the smallest, most-spoken dua of goodness in a Muslim's day.",
    },
    source: {
      type: "quran",
      reference: "QS. An-Nur 24:61",
      grade: "quran",
    },
    ages: [2, 3, 4, 5, 6, 7, 8],
    situations: ["sosial", "adab", "rumah"],
    related: ["masuk-rumah"],
    published: "2026-05-27",
    updated: "2026-05-27",
  },

  // ─── High-frequency additions ─────────────────────────────────────
  {
    slug: "masuk-masjid",
    arabic: "اللَّهُمَّ افْتَحْ لِي أَبْوَابَ رَحْمَتِكَ",
    transliteration: "Allahummaftah lii abwaaba rahmatik",
    title: {
      id: "Doa Masuk Masjid",
      en: "Dua Entering the Mosque",
    },
    translation: {
      id: "Ya Allah, bukakanlah untukku pintu-pintu rahmat-Mu.",
      en: "O Allah, open for me the gates of Your mercy.",
    },
    context: {
      id: "Dibaca saat melangkah masuk ke masjid dengan kaki kanan terlebih dahulu.",
      en: "Recited when stepping into the mosque, leading with the right foot.",
    },
    source: { type: "hadith", reference: "HR. Muslim 713", grade: "sahih" },
    ages: [3, 4, 5, 6, 7, 8],
    situations: ["masjid", "ibadah", "adab"],
    related: ["keluar-masjid", "mendengar-adzan"],
    author: "tim-baby-mo",
    published: "2026-05-28",
    updated: "2026-05-28",
  },
  {
    slug: "keluar-masjid",
    arabic: "اللَّهُمَّ إِنِّي أَسْأَلُكَ مِنْ فَضْلِكَ",
    transliteration: "Allahumma innii as-aluka min fadhlik",
    title: {
      id: "Doa Keluar Masjid",
      en: "Dua Leaving the Mosque",
    },
    translation: {
      id: "Ya Allah, sesungguhnya aku memohon karunia-Mu.",
      en: "O Allah, I ask You of Your bounty.",
    },
    context: {
      id: "Dibaca saat keluar dari masjid dengan kaki kiri terlebih dahulu.",
      en: "Recited when leaving the mosque, leading with the left foot.",
    },
    source: { type: "hadith", reference: "HR. Muslim 713", grade: "sahih" },
    ages: [3, 4, 5, 6, 7, 8],
    situations: ["masjid", "ibadah", "adab"],
    related: ["masuk-masjid"],
    author: "tim-baby-mo",
    published: "2026-05-28",
    updated: "2026-05-28",
  },
  {
    slug: "kebaikan-dunia-akhirat",
    arabic:
      "رَبَّنَا آتِنَا فِي الدُّنْيَا حَسَنَةً وَفِي الْآخِرَةِ حَسَنَةً وَقِنَا عَذَابَ النَّارِ",
    transliteration:
      "Rabbanaa aatinaa fid-dunyaa hasanah, wa fil-aakhirati hasanah, wa qinaa 'adzaaban-naar",
    title: {
      id: "Doa Sapu Jagat (Kebaikan Dunia & Akhirat)",
      en: "Dua for Good in This World & the Next",
    },
    translation: {
      id: "Ya Tuhan kami, berilah kami kebaikan di dunia dan kebaikan di akhirat, dan lindungilah kami dari azab neraka.",
      en: "Our Lord, give us good in this world and good in the Hereafter, and protect us from the punishment of the Fire.",
    },
    context: {
      id: "Doa paling lengkap dan paling sering dibaca Rasulullah ﷺ — meminta kebaikan dunia sekaligus akhirat.",
      en: "The most comprehensive du'a, the one the Prophet ﷺ recited most — asking for good in both this life and the next.",
    },
    source: { type: "quran", reference: "QS. Al-Baqarah 2:201", grade: "quran" },
    ages: [4, 5, 6, 7, 8],
    situations: ["umum", "harian"],
    related: ["doa-pagi", "doa-petang"],
    author: "tim-baby-mo",
    published: "2026-05-28",
    updated: "2026-05-28",
  },
  {
    slug: "minta-ilmu-bermanfaat",
    arabic: "رَبِّ زِدْنِي عِلْمًا",
    transliteration: "Rabbi zidnii 'ilmaa",
    title: {
      id: "Doa Minta Tambahan Ilmu",
      en: "Dua for Increase in Knowledge",
    },
    translation: {
      id: "Ya Tuhanku, tambahkanlah ilmu kepadaku.",
      en: "My Lord, increase me in knowledge.",
    },
    context: {
      id: "Doa singkat yang bisa diajarkan anak sebelum belajar atau berangkat sekolah.",
      en: "A short du'a children can say before studying or heading to school.",
    },
    source: { type: "quran", reference: "QS. Taha 20:114", grade: "quran" },
    ages: [4, 5, 6, 7, 8],
    situations: ["belajar", "sekolah"],
    related: ["sebelum-belajar", "setelah-belajar"],
    author: "tim-baby-mo",
    published: "2026-05-28",
    updated: "2026-05-28",
  },
  {
    slug: "ketika-sakit",
    arabic: "اللَّهُمَّ رَبَّ النَّاسِ أَذْهِبِ الْبَأْسَ اشْفِ أَنْتَ الشَّافِي",
    transliteration: "Allahumma rabban-naas, adzhibil-ba's, isyfi antasy-syaafii",
    title: {
      id: "Doa Ketika Sakit",
      en: "Dua When Sick",
    },
    translation: {
      id: "Ya Allah, Tuhan manusia, hilangkanlah penyakit. Sembuhkanlah, Engkaulah Yang Maha Menyembuhkan.",
      en: "O Allah, Lord of mankind, remove the affliction. Cure, for You are the Healer.",
    },
    context: {
      id: "Doa yang dibaca Rasulullah ﷺ sambil mengusap orang yang sakit — orang tua bisa membacakannya untuk anak yang demam.",
      en: "The du'a the Prophet ﷺ recited while wiping the sick — parents can recite it over a feverish child.",
    },
    source: { type: "hadith", reference: "HR. Bukhari 5675, Muslim 2191", grade: "sahih" },
    ages: [0, 1, 2, 3, 4, 5, 6, 7, 8],
    situations: ["sakit", "perlindungan"],
    related: ["perlindungan-anak"],
    author: "tim-baby-mo",
    published: "2026-05-28",
    updated: "2026-05-28",
  },
  {
    slug: "ketika-marah",
    arabic: "أَعُوذُ بِاللَّهِ مِنَ الشَّيْطَانِ الرَّجِيمِ",
    transliteration: "A'uudzu billaahi minasy-syaithaanir-rajiim",
    title: {
      id: "Doa Ketika Marah",
      en: "Dua When Angry",
    },
    translation: {
      id: "Aku berlindung kepada Allah dari setan yang terkutuk.",
      en: "I seek refuge in Allah from the accursed devil.",
    },
    context: {
      id: "Rasulullah ﷺ mengajarkan kalimat ini untuk meredam amarah. Cocok diajarkan anak yang sedang belajar mengelola emosi.",
      en: "The Prophet ﷺ taught this phrase to cool anger. Good for a child learning to manage big feelings.",
    },
    source: { type: "hadith", reference: "HR. Bukhari 3282, Muslim 2610", grade: "sahih" },
    ages: [4, 5, 6, 7, 8],
    situations: ["emosi", "perlindungan"],
    related: ["perlindungan-anak"],
    author: "tim-baby-mo",
    published: "2026-05-28",
    updated: "2026-05-28",
  },
  {
    slug: "doa-kedua-orang-tua",
    arabic:
      "رَبِّ اغْفِرْ لِي وَلِوَالِدَيَّ وَارْحَمْهُمَا كَمَا رَبَّيَانِي صَغِيرًا",
    transliteration:
      "Rabbighfir lii wa li waalidayya warhamhumaa kamaa rabbayaanii shaghiiraa",
    title: {
      id: "Doa untuk Kedua Orang Tua",
      en: "Dua for One's Parents",
    },
    translation: {
      id: "Ya Tuhanku, ampunilah aku dan kedua orang tuaku, dan sayangilah mereka sebagaimana mereka menyayangiku sewaktu kecil.",
      en: "My Lord, forgive me and my parents, and have mercy on them as they raised me when I was small.",
    },
    context: {
      id: "Doa indah yang mengajarkan anak mendoakan orang tua — penuhi hati anak dengan rasa terima kasih sejak dini.",
      en: "A beautiful du'a teaching children to pray for their parents — fill a child's heart with gratitude early.",
    },
    source: { type: "quran", reference: "QS. Al-Isra 17:24", grade: "quran" },
    ages: [4, 5, 6, 7, 8],
    situations: ["keluarga", "adab", "harian"],
    related: ["doa-untuk-orang-tua"],
    author: "tim-baby-mo",
    published: "2026-05-28",
    updated: "2026-05-28",
  },
  {
    slug: "naik-turun-kendaraan-selamat",
    arabic: "سُبْحَانَ الَّذِي سَخَّرَ لَنَا هَذَا وَمَا كُنَّا لَهُ مُقْرِنِينَ",
    transliteration: "Subhaanalladzii sakhkhara lanaa haadzaa wa maa kunnaa lahuu muqriniin",
    title: {
      id: "Doa Naik Kendaraan (Tasbih Safar)",
      en: "Dua When Boarding a Vehicle",
    },
    translation: {
      id: "Mahasuci Allah yang telah menundukkan kendaraan ini untuk kami, padahal kami sebelumnya tidak mampu menguasainya.",
      en: "Glory to Him who has subjected this to us, when we could never have managed it ourselves.",
    },
    context: {
      id: "Dibaca anak saat naik mobil atau motor bersama keluarga — mengingat bahwa keselamatan dari Allah.",
      en: "Recited when boarding a car or motorbike with family — remembering that safety comes from Allah.",
    },
    source: { type: "quran", reference: "QS. Az-Zukhruf 43:13", grade: "quran" },
    ages: [3, 4, 5, 6, 7, 8],
    situations: ["perjalanan", "keluarga"],
    related: ["naik-kendaraan", "keluar-rumah"],
    author: "tim-baby-mo",
    published: "2026-05-28",
    updated: "2026-05-28",
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
