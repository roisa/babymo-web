import type { BacaanSholat } from "./types";

/**
 * Bacaan & Niat Sholat — the recitations of the daily prayer, in order,
 * with Arabic, a readable Indonesian-style transliteration, bilingual
 * translation, when each is read, and a warm note for explaining it to a
 * child. Texts follow the widely-taught (Syafi'i) wording common in
 * Indonesia.
 *
 * EDITORIAL NOTE: These are liturgical texts. Verify the Arabic harakat
 * and wording with a qualified teacher before any "verified" claim;
 * entries intentionally carry no `reviewedBy` until then.
 */
export const bacaanSholatList: BacaanSholat[] = [
  {
    slug: "niat-sholat",
    order: 1,
    category: "niat",
    title: { id: "Niat Sholat Lima Waktu", en: "Intention (Niat) for the Five Daily Prayers" },
    subtitle: {
      id: "Diniatkan di dalam hati bersamaan dengan takbiratul ihram",
      en: "Held in the heart together with the opening takbir",
    },
    parts: [
      {
        label: { id: "Subuh (2 rakaat)", en: "Fajr (2 rak'ah)" },
        arabic: "أُصَلِّيْ فَرْضَ الصُّبْحِ رَكْعَتَيْنِ مُسْتَقْبِلَ الْقِبْلَةِ أَدَاءً لِلّٰهِ تَعَالَى",
        transliteration: "Ushallii fardhash-shubhi rak'ataini mustaqbilal-qiblati adaa-an lillaahi ta'aalaa",
        translation: {
          id: "Aku niat sholat fardhu Subuh dua rakaat menghadap kiblat karena Allah Ta'ala.",
          en: "I intend to pray the obligatory Fajr prayer, two rak'ah, facing the qibla, for Allah the Exalted.",
        },
      },
      {
        label: { id: "Dzuhur (4 rakaat)", en: "Dhuhr (4 rak'ah)" },
        arabic: "أُصَلِّيْ فَرْضَ الظُّهْرِ أَرْبَعَ رَكَعَاتٍ مُسْتَقْبِلَ الْقِبْلَةِ أَدَاءً لِلّٰهِ تَعَالَى",
        transliteration: "Ushallii fardhazh-zhuhri arba'a raka'aatin mustaqbilal-qiblati adaa-an lillaahi ta'aalaa",
        translation: {
          id: "Aku niat sholat fardhu Dzuhur empat rakaat menghadap kiblat karena Allah Ta'ala.",
          en: "I intend to pray the obligatory Dhuhr prayer, four rak'ah, facing the qibla, for Allah the Exalted.",
        },
      },
      {
        label: { id: "Ashar (4 rakaat)", en: "Asr (4 rak'ah)" },
        arabic: "أُصَلِّيْ فَرْضَ الْعَصْرِ أَرْبَعَ رَكَعَاتٍ مُسْتَقْبِلَ الْقِبْلَةِ أَدَاءً لِلّٰهِ تَعَالَى",
        transliteration: "Ushallii fardhal-'ashri arba'a raka'aatin mustaqbilal-qiblati adaa-an lillaahi ta'aalaa",
        translation: {
          id: "Aku niat sholat fardhu Ashar empat rakaat menghadap kiblat karena Allah Ta'ala.",
          en: "I intend to pray the obligatory Asr prayer, four rak'ah, facing the qibla, for Allah the Exalted.",
        },
      },
      {
        label: { id: "Maghrib (3 rakaat)", en: "Maghrib (3 rak'ah)" },
        arabic: "أُصَلِّيْ فَرْضَ الْمَغْرِبِ ثَلَاثَ رَكَعَاتٍ مُسْتَقْبِلَ الْقِبْلَةِ أَدَاءً لِلّٰهِ تَعَالَى",
        transliteration: "Ushallii fardhal-maghribi tsalaatsa raka'aatin mustaqbilal-qiblati adaa-an lillaahi ta'aalaa",
        translation: {
          id: "Aku niat sholat fardhu Maghrib tiga rakaat menghadap kiblat karena Allah Ta'ala.",
          en: "I intend to pray the obligatory Maghrib prayer, three rak'ah, facing the qibla, for Allah the Exalted.",
        },
      },
      {
        label: { id: "Isya (4 rakaat)", en: "Isha (4 rak'ah)" },
        arabic: "أُصَلِّيْ فَرْضَ الْعِشَاءِ أَرْبَعَ رَكَعَاتٍ مُسْتَقْبِلَ الْقِبْلَةِ أَدَاءً لِلّٰهِ تَعَالَى",
        transliteration: "Ushallii fardhal-'isyaa-i arba'a raka'aatin mustaqbilal-qiblati adaa-an lillaahi ta'aalaa",
        translation: {
          id: "Aku niat sholat fardhu Isya empat rakaat menghadap kiblat karena Allah Ta'ala.",
          en: "I intend to pray the obligatory Isha prayer, four rak'ah, facing the qibla, for Allah the Exalted.",
        },
      },
    ],
    when: {
      id: "Di awal sholat, di dalam hati, bersamaan dengan mengangkat tangan untuk takbiratul ihram.",
      en: "At the start of the prayer, in the heart, together with raising the hands for the opening takbir.",
    },
    note: {
      id: "Niat tempatnya di hati — yang diucapkan lisan hanya membantu menghadirkannya. Ajak anak menyadari: sebelum sholat, kita berkata dalam hati untuk siapa kita sholat — karena Allah.",
      en: "The intention's place is the heart — saying it aloud only helps bring it to mind. Help your child notice: before praying, we tell our heart who we pray for — Allah alone.",
    },
    published: "2026-06-04",
  },
  {
    slug: "takbiratul-ihram",
    order: 2,
    category: "gerakan",
    title: { id: "Takbiratul Ihram", en: "The Opening Takbir" },
    subtitle: {
      id: "Mengangkat kedua tangan sambil mengucap takbir",
      en: "Raising both hands while saying the takbir",
    },
    parts: [
      {
        arabic: "اللّٰهُ أَكْبَرُ",
        transliteration: "Allaahu Akbar",
        translation: { id: "Allah Maha Besar.", en: "Allah is the Greatest." },
      },
    ],
    when: {
      id: "Gerakan pertama sholat. Dengan takbir inilah sholat dimulai dan kita 'masuk' ke dalam sholat.",
      en: "The first movement of the prayer. With this takbir the prayer begins and we 'enter' it.",
    },
    note: {
      id: "Saat mengucap 'Allahu Akbar', kita seakan meletakkan dunia di belakang — tidak ada yang lebih besar dari Allah. Ajak anak mengangkat tangan kecilnya dan merasakannya.",
      en: "As we say 'Allahu Akbar', we set the world behind us — nothing is greater than Allah. Have your child raise their little hands and feel it.",
    },
    published: "2026-06-04",
  },
  {
    slug: "doa-iftitah",
    order: 3,
    category: "doa",
    title: { id: "Doa Iftitah", en: "The Opening Supplication (Iftitah)" },
    subtitle: {
      id: "Dibaca pelan setelah takbiratul ihram, sebelum Al-Fatihah",
      en: "Said quietly after the opening takbir, before Al-Fatihah",
    },
    parts: [
      {
        arabic:
          "اللّٰهُ أَكْبَرُ كَبِيْرًا وَالْحَمْدُ لِلّٰهِ كَثِيْرًا وَسُبْحَانَ اللّٰهِ بُكْرَةً وَأَصِيْلًا. إِنِّيْ وَجَّهْتُ وَجْهِيَ لِلَّذِيْ فَطَرَ السَّمَاوَاتِ وَالْأَرْضَ حَنِيْفًا مُسْلِمًا وَمَا أَنَا مِنَ الْمُشْرِكِيْنَ. إِنَّ صَلَاتِيْ وَنُسُكِيْ وَمَحْيَايَ وَمَمَاتِيْ لِلّٰهِ رَبِّ الْعَالَمِيْنَ. لَا شَرِيْكَ لَهُ وَبِذٰلِكَ أُمِرْتُ وَأَنَا مِنَ الْمُسْلِمِيْنَ",
        transliteration:
          "Allaahu akbar kabiiraa, walhamdu lillaahi katsiiraa, wa subhaanallaahi bukrataw wa ashiilaa. Innii wajjahtu wajhiya lilladzii fatharas-samaawaati wal-ardha haniifam muslimaw wa maa ana minal-musyrikiin. Inna shalaatii wa nusukii wa mahyaaya wa mamaatii lillaahi rabbil-'aalamiin. Laa syariika lahu wa bidzaalika umirtu wa ana minal-muslimiin.",
        translation: {
          id: "Allah Maha Besar dengan sebesar-besarnya. Segala puji bagi Allah dengan pujian yang banyak. Maha Suci Allah pada pagi dan petang. Sungguh aku hadapkan wajahku kepada Dzat yang menciptakan langit dan bumi dengan lurus dan berserah diri, dan aku bukanlah termasuk orang-orang musyrik. Sungguh sholatku, ibadahku, hidupku, dan matiku hanya untuk Allah, Tuhan semesta alam. Tiada sekutu bagi-Nya, dan demikianlah aku diperintah, dan aku termasuk orang-orang yang berserah diri.",
          en: "Allah is the Greatest, most great. All praise be to Allah, abundantly. Glory be to Allah morning and evening. I have turned my face to the One who created the heavens and the earth, upright and submitting, and I am not among those who associate partners with Him. Indeed my prayer, my worship, my life, and my death are for Allah, Lord of the worlds. He has no partner; with this I am commanded, and I am among those who submit.",
        },
      },
    ],
    when: {
      id: "Setelah takbiratul ihram pada rakaat pertama, dibaca lirih (tidak dikeraskan).",
      en: "After the opening takbir in the first rak'ah, said softly (not aloud).",
    },
    note: {
      id: "Doa pembuka yang indah: kita mengarahkan hati hanya kepada Allah sebelum mulai membaca. Untuk anak, cukup kenalkan kalimat awalnya dulu, sedikit demi sedikit.",
      en: "A beautiful opening: we point our hearts to Allah alone before we begin. For a child, start with just the first line, little by little.",
    },
    published: "2026-06-04",
  },
  {
    slug: "al-fatihah",
    order: 4,
    category: "gerakan",
    title: { id: "Membaca Al-Fatihah", en: "Reciting Al-Fatihah" },
    subtitle: {
      id: "Rukun sholat — dibaca di setiap rakaat",
      en: "A pillar of the prayer — recited in every rak'ah",
    },
    parts: [],
    crossSurah: "al-fatihah",
    when: {
      id: "Pada setiap rakaat, setelah doa iftitah (di rakaat pertama). Sholat tidak sah tanpa Al-Fatihah.",
      en: "In every rak'ah, after the opening supplication (in the first rak'ah). The prayer is not valid without Al-Fatihah.",
    },
    note: {
      id: "Al-Fatihah adalah inti percakapan kita dengan Allah di dalam sholat. Buka halaman suratnya untuk membaca teks lengkap, latin, dan artinya bersama anak.",
      en: "Al-Fatihah is the heart of our conversation with Allah in prayer. Open its surah page to read the full text, transliteration, and meaning with your child.",
    },
    published: "2026-06-04",
  },
  {
    slug: "surat-pendek",
    order: 5,
    category: "gerakan",
    title: { id: "Membaca Surat Pendek", en: "Reciting a Short Surah" },
    subtitle: {
      id: "Dibaca setelah Al-Fatihah pada dua rakaat pertama",
      en: "Recited after Al-Fatihah in the first two rak'ah",
    },
    parts: [],
    crossSurah: "an-nas",
    when: {
      id: "Setelah Al-Fatihah pada rakaat pertama dan kedua (sunnah). Biasanya dipilih surat-surat pendek dari Juz Amma.",
      en: "After Al-Fatihah in the first and second rak'ah (recommended). Usually a short surah from Juz 'Amma is chosen.",
    },
    note: {
      id: "Tempat yang indah untuk mengamalkan hafalan anak. Mulai dari yang terpendek seperti Al-Ikhlas, Al-Falaq, dan An-Nas. Jelajahi koleksi surat pendek kami untuk pilihan lengkapnya.",
      en: "A lovely place to use a child's memorisation. Start with the shortest like Al-Ikhlas, Al-Falaq, and An-Nas. Explore our short-surah collection for the full set.",
    },
    published: "2026-06-04",
  },
  {
    slug: "bacaan-ruku",
    order: 6,
    category: "gerakan",
    title: { id: "Bacaan Ruku", en: "Recitation in Ruku' (Bowing)" },
    subtitle: { id: "Dibaca saat membungkuk", en: "Said while bowing" },
    parts: [
      {
        arabic: "سُبْحَانَ رَبِّيَ الْعَظِيْمِ وَبِحَمْدِهِ",
        transliteration: "Subhaana rabbiyal-'azhiimi wa bihamdih",
        translation: {
          id: "Maha Suci Tuhanku Yang Maha Agung, dan dengan memuji-Nya.",
          en: "Glory be to my Lord, the Magnificent, and with His praise.",
        },
        repeat: "3×",
      },
    ],
    when: {
      id: "Saat ruku, yaitu membungkukkan badan dengan punggung lurus dan tangan memegang lutut.",
      en: "During ruku' — bowing with a straight back and hands on the knees.",
    },
    note: {
      id: "Dalam ruku kita merendahkan diri di hadapan kebesaran Allah. Ajak anak menundukkan badannya pelan dan mengucap tasbih ini tiga kali.",
      en: "In bowing we humble ourselves before Allah's greatness. Have your child bend gently and say this glorification three times.",
    },
    published: "2026-06-04",
  },
  {
    slug: "itidal",
    order: 7,
    category: "gerakan",
    title: { id: "Bacaan I'tidal", en: "Recitation in I'tidal (Rising)" },
    subtitle: {
      id: "Dibaca saat bangkit berdiri dari ruku",
      en: "Said when rising up from the bowing",
    },
    parts: [
      {
        label: { id: "Saat bangkit", en: "While rising" },
        arabic: "سَمِعَ اللّٰهُ لِمَنْ حَمِدَهُ",
        transliteration: "Sami'allaahu liman hamidah",
        translation: {
          id: "Allah Maha Mendengar orang yang memuji-Nya.",
          en: "Allah hears the one who praises Him.",
        },
      },
      {
        label: { id: "Setelah berdiri tegak", en: "After standing upright" },
        arabic: "رَبَّنَا لَكَ الْحَمْدُ مِلْءَ السَّمَاوَاتِ وَمِلْءَ الْأَرْضِ وَمِلْءَ مَا شِئْتَ مِنْ شَيْءٍ بَعْدُ",
        transliteration: "Rabbanaa lakal-hamdu mil-as-samaawaati wa mil-al-ardhi wa mil-a maa syi'ta min syai-im ba'du",
        translation: {
          id: "Ya Tuhan kami, bagi-Mu segala puji, sepenuh langit dan sepenuh bumi, dan sepenuh apa saja yang Engkau kehendaki sesudah itu.",
          en: "Our Lord, to You is all praise — filling the heavens, filling the earth, and filling whatever You will beyond them.",
        },
      },
    ],
    when: {
      id: "Saat bangkit dari ruku dan berdiri tegak sebelum sujud.",
      en: "When rising from ruku' and standing upright before prostrating.",
    },
    note: {
      id: "Sebentar kita berdiri tegak, memuji Allah dengan sepenuh hati. Sebuah jeda tenang di antara dua gerakan.",
      en: "For a moment we stand tall, praising Allah wholeheartedly — a calm pause between two movements.",
    },
    published: "2026-06-04",
  },
  {
    slug: "bacaan-sujud",
    order: 8,
    category: "gerakan",
    title: { id: "Bacaan Sujud", en: "Recitation in Sujud (Prostration)" },
    subtitle: { id: "Dibaca saat sujud", en: "Said while prostrating" },
    parts: [
      {
        arabic: "سُبْحَانَ رَبِّيَ الْأَعْلَى وَبِحَمْدِهِ",
        transliteration: "Subhaana rabbiyal-a'laa wa bihamdih",
        translation: {
          id: "Maha Suci Tuhanku Yang Maha Tinggi, dan dengan memuji-Nya.",
          en: "Glory be to my Lord, the Most High, and with His praise.",
        },
        repeat: "3×",
      },
    ],
    when: {
      id: "Saat sujud — dahi, hidung, kedua telapak tangan, kedua lutut, dan ujung jari kaki menyentuh lantai.",
      en: "During prostration — forehead, nose, palms, knees, and toes touching the ground.",
    },
    note: {
      id: "Sujud adalah saat hamba paling dekat dengan Tuhannya. Ceritakan ke anak: di sinilah waktu yang indah untuk berbisik meminta apa pun kepada Allah.",
      en: "Prostration is when a servant is closest to their Lord. Tell your child: this is the loveliest moment to whisper any request to Allah.",
    },
    published: "2026-06-04",
  },
  {
    slug: "duduk-antara-dua-sujud",
    order: 9,
    category: "doa",
    title: { id: "Doa Duduk di Antara Dua Sujud", en: "Supplication Between the Two Prostrations" },
    subtitle: { id: "Dibaca saat duduk di antara dua sujud", en: "Said while sitting between the two prostrations" },
    parts: [
      {
        arabic: "رَبِّ اغْفِرْ لِيْ وَارْحَمْنِيْ وَاجْبُرْنِيْ وَارْفَعْنِيْ وَارْزُقْنِيْ وَاهْدِنِيْ وَعَافِنِيْ وَاعْفُ عَنِّيْ",
        transliteration: "Rabbighfir lii, warhamnii, wajburnii, warfa'nii, warzuqnii, wahdinii, wa 'aafinii, wa'fu 'annii",
        translation: {
          id: "Ya Tuhanku, ampunilah aku, sayangilah aku, cukupkanlah kekuranganku, angkatlah derajatku, berilah aku rezeki, berilah aku petunjuk, sehatkanlah aku, dan maafkanlah aku.",
          en: "My Lord, forgive me, have mercy on me, make up my shortcomings, raise me, provide for me, guide me, grant me well-being, and pardon me.",
        },
      },
    ],
    when: {
      id: "Saat duduk sebentar di antara sujud pertama dan sujud kedua.",
      en: "While sitting briefly between the first and second prostration.",
    },
    note: {
      id: "Doa pendek yang memuat banyak permintaan baik sekaligus — ampunan, kasih sayang, petunjuk, dan kesehatan. Indah untuk diajarkan kata demi kata.",
      en: "A short supplication packed with good requests at once — forgiveness, mercy, guidance, and well-being. Lovely to teach word by word.",
    },
    published: "2026-06-04",
  },
  {
    slug: "tasyahud-awal",
    order: 10,
    category: "doa",
    title: { id: "Tasyahud Awal", en: "The First Tashahhud" },
    subtitle: {
      id: "Dibaca saat duduk pada rakaat kedua",
      en: "Said while sitting in the second rak'ah",
    },
    parts: [
      {
        arabic:
          "التَّحِيَّاتُ الْمُبَارَكَاتُ الصَّلَوَاتُ الطَّيِّبَاتُ لِلّٰهِ. السَّلَامُ عَلَيْكَ أَيُّهَا النَّبِيُّ وَرَحْمَةُ اللّٰهِ وَبَرَكَاتُهُ. السَّلَامُ عَلَيْنَا وَعَلَى عِبَادِ اللّٰهِ الصَّالِحِيْنَ. أَشْهَدُ أَنْ لَا إِلٰهَ إِلَّا اللّٰهُ وَأَشْهَدُ أَنَّ مُحَمَّدًا رَسُوْلُ اللّٰهِ",
        transliteration:
          "At-tahiyyaatul-mubaarakaatush-shalawaatuth-thayyibaatu lillaah. Assalaamu 'alaika ayyuhan-nabiyyu wa rahmatullaahi wa barakaatuh. Assalaamu 'alainaa wa 'alaa 'ibaadillaahish-shaalihiin. Asyhadu allaa ilaaha illallaah, wa asyhadu anna Muhammadar rasuulullaah.",
        translation: {
          id: "Segala penghormatan yang berkah, sholawat, dan kebaikan adalah milik Allah. Semoga keselamatan, rahmat Allah, dan keberkahan-Nya tercurah kepadamu, wahai Nabi. Semoga keselamatan tercurah kepada kami dan kepada hamba-hamba Allah yang saleh. Aku bersaksi bahwa tiada Tuhan selain Allah, dan aku bersaksi bahwa Muhammad adalah utusan Allah.",
          en: "All blessed greetings, prayers, and good things are for Allah. Peace be upon you, O Prophet, and the mercy of Allah and His blessings. Peace be upon us and upon the righteous servants of Allah. I bear witness that there is no god but Allah, and I bear witness that Muhammad is the Messenger of Allah.",
        },
      },
    ],
    when: {
      id: "Saat duduk pada rakaat kedua (untuk sholat yang lebih dari dua rakaat).",
      en: "While sitting in the second rak'ah (in prayers longer than two rak'ah).",
    },
    note: {
      id: "Di sini kita mengucap dua kalimat syahadat — inti keimanan seorang muslim. Saat menyebutnya, banyak yang mengangkat jari telunjuk sebagai tanda tauhid.",
      en: "Here we say the two testimonies of faith — the core of a Muslim's belief. As we say them, many raise the index finger as a sign of tawhid.",
    },
    published: "2026-06-04",
  },
  {
    slug: "tasyahud-akhir",
    order: 11,
    category: "doa",
    title: { id: "Tasyahud Akhir & Sholawat", en: "The Final Tashahhud & Salawat" },
    subtitle: {
      id: "Dibaca saat duduk pada rakaat terakhir, ditambah sholawat",
      en: "Said in the final sitting, followed by the salawat",
    },
    parts: [
      {
        label: { id: "Tasyahud", en: "Tashahhud" },
        arabic:
          "التَّحِيَّاتُ الْمُبَارَكَاتُ الصَّلَوَاتُ الطَّيِّبَاتُ لِلّٰهِ. السَّلَامُ عَلَيْكَ أَيُّهَا النَّبِيُّ وَرَحْمَةُ اللّٰهِ وَبَرَكَاتُهُ. السَّلَامُ عَلَيْنَا وَعَلَى عِبَادِ اللّٰهِ الصَّالِحِيْنَ. أَشْهَدُ أَنْ لَا إِلٰهَ إِلَّا اللّٰهُ وَأَشْهَدُ أَنَّ مُحَمَّدًا رَسُوْلُ اللّٰهِ",
        transliteration:
          "At-tahiyyaatul-mubaarakaatush-shalawaatuth-thayyibaatu lillaah. Assalaamu 'alaika ayyuhan-nabiyyu wa rahmatullaahi wa barakaatuh. Assalaamu 'alainaa wa 'alaa 'ibaadillaahish-shaalihiin. Asyhadu allaa ilaaha illallaah, wa asyhadu anna Muhammadar rasuulullaah.",
        translation: {
          id: "Segala penghormatan yang berkah, sholawat, dan kebaikan adalah milik Allah. Semoga keselamatan, rahmat Allah, dan keberkahan-Nya tercurah kepadamu, wahai Nabi. Semoga keselamatan tercurah kepada kami dan kepada hamba-hamba Allah yang saleh. Aku bersaksi bahwa tiada Tuhan selain Allah, dan aku bersaksi bahwa Muhammad adalah utusan Allah.",
          en: "All blessed greetings, prayers, and good things are for Allah. Peace be upon you, O Prophet, and the mercy of Allah and His blessings. Peace be upon us and upon the righteous servants of Allah. I bear witness that there is no god but Allah, and I bear witness that Muhammad is the Messenger of Allah.",
        },
      },
      {
        label: { id: "Sholawat Ibrahimiyah", en: "Salawat Ibrahimiyyah" },
        arabic:
          "اللّٰهُمَّ صَلِّ عَلَى مُحَمَّدٍ وَعَلَى آلِ مُحَمَّدٍ، كَمَا صَلَّيْتَ عَلَى إِبْرَاهِيْمَ وَعَلَى آلِ إِبْرَاهِيْمَ، وَبَارِكْ عَلَى مُحَمَّدٍ وَعَلَى آلِ مُحَمَّدٍ، كَمَا بَارَكْتَ عَلَى إِبْرَاهِيْمَ وَعَلَى آلِ إِبْرَاهِيْمَ، فِي الْعَالَمِيْنَ إِنَّكَ حَمِيْدٌ مَجِيْدٌ",
        transliteration:
          "Allaahumma shalli 'alaa Muhammad, wa 'alaa aali Muhammad, kamaa shallaita 'alaa Ibraahiim, wa 'alaa aali Ibraahiim, wa baarik 'alaa Muhammad, wa 'alaa aali Muhammad, kamaa baarakta 'alaa Ibraahiim, wa 'alaa aali Ibraahiim, fil-'aalamiina innaka hamiidum majiid.",
        translation: {
          id: "Ya Allah, limpahkanlah sholawat kepada Nabi Muhammad dan keluarga Nabi Muhammad, sebagaimana Engkau limpahkan sholawat kepada Nabi Ibrahim dan keluarga Nabi Ibrahim. Dan berkahilah Nabi Muhammad dan keluarganya, sebagaimana Engkau memberkahi Nabi Ibrahim dan keluarganya, di seluruh alam. Sungguh Engkau Maha Terpuji lagi Maha Mulia.",
          en: "O Allah, send blessings upon Muhammad and the family of Muhammad, as You sent blessings upon Ibrahim and the family of Ibrahim. And bless Muhammad and the family of Muhammad, as You blessed Ibrahim and the family of Ibrahim, throughout the worlds. Indeed You are Praiseworthy, Glorious.",
        },
      },
    ],
    when: {
      id: "Saat duduk (tawarruk) pada rakaat terakhir, sebelum salam.",
      en: "While sitting in the final rak'ah, before the closing salam.",
    },
    note: {
      id: "Sebelum mengakhiri sholat, kita bersholawat untuk Nabi Muhammad ﷺ — sebuah cinta yang Allah dan para malaikat pun melakukannya.",
      en: "Before ending the prayer, we send blessings on Prophet Muhammad ﷺ — an act of love that Allah and the angels do too.",
    },
    published: "2026-06-04",
  },
  {
    slug: "salam",
    order: 12,
    category: "gerakan",
    title: { id: "Salam", en: "The Closing Salam" },
    subtitle: {
      id: "Menengok ke kanan lalu ke kiri untuk mengakhiri sholat",
      en: "Turning right then left to end the prayer",
    },
    parts: [
      {
        arabic: "السَّلَامُ عَلَيْكُمْ وَرَحْمَةُ اللّٰهِ",
        transliteration: "Assalaamu 'alaikum wa rahmatullaah",
        translation: {
          id: "Semoga keselamatan dan rahmat Allah tercurah atas kalian.",
          en: "May peace and the mercy of Allah be upon you.",
        },
      },
    ],
    when: {
      id: "Gerakan terakhir: menengok ke kanan lalu ke kiri sambil mengucap salam. Dengan salam inilah sholat selesai.",
      en: "The final movement: turning right then left while giving salam. With this the prayer is complete.",
    },
    note: {
      id: "Kita menutup sholat dengan menebar kedamaian — ke kanan dan ke kiri. Ajak anak menengok pelan sambil tersenyum mengucap salam.",
      en: "We close the prayer by spreading peace — to the right and the left. Have your child turn gently and smile as they give salam.",
    },
    published: "2026-06-04",
  },
  {
    slug: "doa-qunut",
    order: 13,
    category: "doa",
    title: { id: "Doa Qunut", en: "The Qunut Supplication" },
    subtitle: {
      id: "Dibaca saat i'tidal pada rakaat terakhir sholat Subuh",
      en: "Said during the final standing of the Fajr prayer",
    },
    parts: [
      {
        arabic:
          "اللّٰهُمَّ اهْدِنِيْ فِيْمَنْ هَدَيْتَ، وَعَافِنِيْ فِيْمَنْ عَافَيْتَ، وَتَوَلَّنِيْ فِيْمَنْ تَوَلَّيْتَ، وَبَارِكْ لِيْ فِيْمَا أَعْطَيْتَ، وَقِنِيْ شَرَّ مَا قَضَيْتَ، فَإِنَّكَ تَقْضِيْ وَلَا يُقْضَى عَلَيْكَ، وَإِنَّهُ لَا يَذِلُّ مَنْ وَالَيْتَ، وَلَا يَعِزُّ مَنْ عَادَيْتَ، تَبَارَكْتَ رَبَّنَا وَتَعَالَيْتَ، فَلَكَ الْحَمْدُ عَلَى مَا قَضَيْتَ، أَسْتَغْفِرُكَ وَأَتُوْبُ إِلَيْكَ",
        transliteration:
          "Allaahummahdinii fiiman hadait, wa 'aafinii fiiman 'aafait, wa tawallanii fiiman tawallait, wa baarik lii fiimaa a'thait, wa qinii syarra maa qadhait, fa innaka taqdhii wa laa yuqdhaa 'alaik, wa innahu laa yadzillu maw waalait, wa laa ya'izzu man 'aadait, tabaarakta rabbanaa wa ta'aalait, fa lakal-hamdu 'alaa maa qadhait, astaghfiruka wa atuubu ilaik.",
        translation: {
          id: "Ya Allah, berilah aku petunjuk sebagaimana orang yang telah Engkau beri petunjuk. Berilah aku kesehatan sebagaimana orang yang Engkau beri kesehatan. Peliharalah aku sebagaimana orang yang Engkau pelihara. Berkahilah apa yang telah Engkau berikan kepadaku. Jagalah aku dari keburukan yang telah Engkau tetapkan. Sungguh Engkaulah yang menetapkan dan tiada yang menetapkan atas-Mu. Sungguh tidak akan hina orang yang Engkau lindungi, dan tidak akan mulia orang yang Engkau musuhi. Maha Berkah Engkau ya Tuhan kami, dan Maha Tinggi. Bagi-Mu segala puji atas apa yang Engkau tetapkan. Aku memohon ampun dan bertobat kepada-Mu.",
          en: "O Allah, guide me among those You have guided, grant me well-being among those You have granted well-being, take me into Your care among those You care for, bless what You have given me, and protect me from the evil of what You have decreed. For You decree and none can decree against You. The one You befriend is never disgraced, and the one You oppose is never honoured. Blessed are You, our Lord, and Exalted. To You is praise for what You decree. I seek Your forgiveness and turn to You in repentance.",
        },
      },
    ],
    when: {
      id: "Saat berdiri i'tidal (bangkit dari ruku) pada rakaat kedua sholat Subuh. Juga dibaca pada Witir di paruh akhir Ramadan.",
      en: "During the standing after bowing in the second rak'ah of Fajr. Also said in Witr in the latter half of Ramadan.",
    },
    note: {
      id: "Doa penuh harap yang memohon petunjuk, perlindungan, dan keberkahan. Banyak anak menghafalnya bertahap karena sering didengar di sholat Subuh berjamaah.",
      en: "A hopeful supplication asking for guidance, protection, and blessing. Many children learn it gradually from hearing it in the congregational Fajr prayer.",
    },
    published: "2026-06-04",
  },
  {
    slug: "dzikir-setelah-sholat",
    order: 14,
    category: "dzikir",
    title: { id: "Dzikir Setelah Sholat", en: "Dhikr After the Prayer" },
    subtitle: {
      id: "Dibaca setelah salam, dalam keadaan masih duduk",
      en: "Said after the salam, while still sitting",
    },
    parts: [
      {
        label: { id: "Istighfar (3×)", en: "Seeking forgiveness (3×)" },
        arabic: "أَسْتَغْفِرُ اللّٰهَ الْعَظِيْمَ",
        transliteration: "Astaghfirullaahal-'azhiim",
        translation: {
          id: "Aku memohon ampun kepada Allah Yang Maha Agung.",
          en: "I seek the forgiveness of Allah, the Magnificent.",
        },
        repeat: "3×",
      },
      {
        label: { id: "Memohon keselamatan", en: "Asking for peace" },
        arabic: "اللّٰهُمَّ أَنْتَ السَّلَامُ وَمِنْكَ السَّلَامُ تَبَارَكْتَ يَا ذَا الْجَلَالِ وَالْإِكْرَامِ",
        transliteration: "Allaahumma antas-salaam, wa minkas-salaam, tabaarakta yaa dzal-jalaali wal-ikraam",
        translation: {
          id: "Ya Allah, Engkaulah As-Salam (sumber keselamatan), dan dari-Mu keselamatan. Maha Berkah Engkau, wahai Pemilik Keagungan dan Kemuliaan.",
          en: "O Allah, You are Peace, and from You comes peace. Blessed are You, O Owner of Majesty and Honour.",
        },
      },
      {
        label: { id: "Tasbih, Tahmid, Takbir (33×)", en: "Tasbih, Tahmid, Takbir (33× each)" },
        arabic: "سُبْحَانَ اللّٰهِ (٣٣) ، وَالْحَمْدُ لِلّٰهِ (٣٣) ، وَاللّٰهُ أَكْبَرُ (٣٣)",
        transliteration: "Subhaanallaah (33×), Alhamdulillaah (33×), Allaahu Akbar (33×)",
        translation: {
          id: "Maha Suci Allah (33×), segala puji bagi Allah (33×), Allah Maha Besar (33×).",
          en: "Glory be to Allah (33×), all praise be to Allah (33×), Allah is the Greatest (33×).",
        },
      },
      {
        label: { id: "Penyempurna seratus", en: "Completing the hundred" },
        arabic:
          "لَا إِلٰهَ إِلَّا اللّٰهُ وَحْدَهُ لَا شَرِيْكَ لَهُ، لَهُ الْمُلْكُ وَلَهُ الْحَمْدُ وَهُوَ عَلَى كُلِّ شَيْءٍ قَدِيْرٌ",
        transliteration: "Laa ilaaha illallaahu wahdahu laa syariika lah, lahul-mulku wa lahul-hamdu wa huwa 'alaa kulli syai-in qadiir",
        translation: {
          id: "Tiada Tuhan selain Allah semata, tiada sekutu bagi-Nya. Milik-Nya kerajaan dan bagi-Nya segala puji, dan Dia Maha Kuasa atas segala sesuatu.",
          en: "There is no god but Allah alone, with no partner. His is the dominion and His is the praise, and He is able to do all things.",
        },
      },
    ],
    when: {
      id: "Setelah selesai sholat (selesai salam), sebaiknya sebelum beranjak dari tempat sholat.",
      en: "After finishing the prayer (after the salam), ideally before leaving the prayer spot.",
    },
    note: {
      id: "Beberapa menit dzikir menutup sholat dengan tenang. Untuk anak, mulai dengan menghitung tiga istighfar di jari — lalu tumbuhkan sedikit demi sedikit. Dianjurkan pula membaca Ayat Kursi.",
      en: "A few minutes of dhikr close the prayer in calm. For a child, start by counting three istighfar on the fingers — then grow it bit by bit. Reciting Ayat al-Kursi afterward is also encouraged.",
    },
    published: "2026-06-04",
  },
];

const CATEGORY_ORDER: Record<BacaanSholat["category"], number> = {
  niat: 0,
  gerakan: 1,
  doa: 2,
  dzikir: 3,
};

export function getAllBacaanSholat(): BacaanSholat[] {
  return [...bacaanSholatList].sort((a, b) => a.order - b.order);
}

export function getBacaanSholatBySlug(slug: string): BacaanSholat | undefined {
  return bacaanSholatList.find((b) => b.slug === slug);
}

export function getBacaanSholatSlugs(): string[] {
  return bacaanSholatList.map((b) => b.slug);
}

/** Steps grouped by category, in flow order — for the index page. */
export function getBacaanSholatByCategory(): {
  category: BacaanSholat["category"];
  items: BacaanSholat[];
}[] {
  const groups = new Map<BacaanSholat["category"], BacaanSholat[]>();
  for (const b of getAllBacaanSholat()) {
    const arr = groups.get(b.category) ?? [];
    arr.push(b);
    groups.set(b.category, arr);
  }
  return Array.from(groups, ([category, items]) => ({ category, items })).sort(
    (a, b) => CATEGORY_ORDER[a.category] - CATEGORY_ORDER[b.category],
  );
}
