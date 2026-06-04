import type { DzikirItem } from "./types";

/**
 * Dzikir Pagi & Petang (Al-Ma'tsurat) — the well-known morning & evening
 * remembrances, with Arabic, transliteration, bilingual translation,
 * count, and the fadhilah (why we read it). Read after Subuh (morning)
 * and after Asr/Maghrib (evening).
 *
 * Ayat Kursi uses dataset-verified Qur'an text. The three Quls and
 * Sayyidul Istighfar cross-link to their existing pages rather than being
 * duplicated.
 *
 * EDITORIAL NOTE: liturgical texts following the common wording. Verify
 * the Arabic harakat with a qualified teacher before any "verified"
 * claim; entries carry no `reviewedBy` until then.
 */
export const dzikirList: DzikirItem[] = [
  {
    slug: "ayat-kursi",
    order: 1,
    time: "keduanya",
    count: "1×",
    title: { id: "Ayat Kursi", en: "Ayat al-Kursi" },
    parts: [
      {
        arabic:
          "اللَّهُ لَآ إِلَٰهَ إِلَّا هُوَ الْحَىُّ الْقَيُّومُ لَا تَأْخُذُهُ سِنَةٌ وَلَا نَوْمٌ لَّهُ مَا فِى السَّمَٰوَٰتِ وَمَا فِى الْأَرْضِ مَن ذَا الَّذِى يَشْفَعُ عِندَهُٓ إِلَّا بِإِذْنِهِ يَعْلَمُ مَا بَيْنَ أَيْدِيهِمْ وَمَا خَلْفَهُمْ وَلَا يُحِيطُونَ بِشَىْءٍ مِّنْ عِلْمِهِٓ إِلَّا بِمَا شَآءَ وَسِعَ كُرْسِيُّهُ السَّمَٰوَٰتِ وَالْأَرْضَ وَلَا يَـُٔودُهُ حِفْظُهُمَا وَهُوَ الْعَلِىُّ الْعَظِيمُ",
        transliteration:
          "Allaahu laa ilaaha illaa huwal-hayyul-qayyuum. Laa ta'khudzuhuu sinatuw wa laa naum. Lahuu maa fis-samaawaati wa maa fil-ardh. Man dzal-ladzii yasyfa'u 'indahuu illaa bi-idznih. Ya'lamu maa baina aidiihim wa maa khalfahum. Wa laa yuhiithuuna bisyai-im min 'ilmihii illaa bimaa syaa-a. Wasi'a kursiyyuhus-samaawaati wal-ardh. Wa laa ya-uuduhuu hifzhuhumaa wa huwal-'aliyyul-'azhiim.",
        translation: {
          id: "Allah, tidak ada tuhan selain Dia, Yang Maha Hidup lagi terus-menerus mengurus (makhluk-Nya). Tidak mengantuk dan tidak tidur. Milik-Nya apa yang ada di langit dan di bumi. Tidak ada yang dapat memberi syafaat di sisi-Nya tanpa izin-Nya. Dia mengetahui apa yang di hadapan dan di belakang mereka, dan mereka tidak mengetahui sesuatu apa pun tentang ilmu-Nya kecuali apa yang Dia kehendaki. Kursi-Nya meliputi langit dan bumi, dan Dia tidak merasa berat memelihara keduanya. Dialah Yang Maha Tinggi lagi Maha Besar.",
          en: "Allah — there is no god but He, the Ever-Living, the Sustainer. Neither drowsiness nor sleep overtakes Him. To Him belongs whatever is in the heavens and the earth. Who can intercede with Him except by His permission? He knows what is before them and behind them, and they encompass nothing of His knowledge except what He wills. His Kursi extends over the heavens and the earth, and their preservation tires Him not. He is the Most High, the Magnificent.",
        },
      },
    ],
    benefit: {
      id: "Siapa membacanya di pagi hari, ia dijaga hingga petang; dan siapa membacanya di petang hari, ia dijaga hingga pagi. Ajak anak menghafalnya sedikit demi sedikit sebagai 'perisai' hariannya.",
      en: "Whoever reads it in the morning is guarded until evening, and whoever reads it in the evening is guarded until morning. Help your child learn it bit by bit as their daily 'shield'.",
    },
    source: "QS. Al-Baqarah: 255",
    published: "2026-06-04",
  },
  {
    slug: "tiga-qul",
    order: 2,
    time: "keduanya",
    count: "3×",
    title: { id: "Al-Ikhlas, Al-Falaq & An-Nas", en: "Al-Ikhlas, Al-Falaq & An-Nas" },
    parts: [],
    crossSurah: ["al-ikhlas", "al-falaq", "an-nas"],
    benefit: {
      id: "Tiga surat ini (sering disebut 'tiga qul') dibaca masing-masing tiga kali. Rasulullah ﷺ menyebutnya cukup sebagai pelindung dari segala sesuatu. Buka halaman tiap suratnya untuk membacanya bersama anak.",
      en: "These three surahs (the 'three Quls') are each read three times. The Prophet ﷺ said they suffice as protection from all things. Open each surah's page to read them with your child.",
    },
    source: "HR. Abu Dawud & Tirmidzi",
    published: "2026-06-04",
  },
  {
    slug: "sayyidul-istighfar",
    order: 3,
    time: "keduanya",
    count: "1×",
    title: { id: "Sayyidul Istighfar", en: "Sayyidul Istighfar" },
    parts: [],
    crossDoa: "sayyidul-istighfar",
    benefit: {
      id: "“Penghulu istighfar” — kalimat tobat paling utama. Siapa membacanya dengan yakin di pagi hari lalu wafat sebelum petang, ia termasuk penghuni surga (HR. Bukhari). Buka halaman doanya untuk teks lengkapnya.",
      en: "The 'chief of seeking forgiveness' — the finest words of repentance. Whoever says it with certainty in the morning and dies before evening is among the people of Paradise (Bukhari). Open its du'a page for the full text.",
    },
    source: "HR. Bukhari",
    published: "2026-06-04",
  },
  {
    slug: "asbahna-wa-asbahal-mulku-lillah",
    order: 4,
    time: "keduanya",
    count: "1×",
    title: { id: "Asbahnaa wa Asbahal-Mulku Lillah", en: "We Have Reached Morning…" },
    parts: [
      {
        label: { id: "Pagi", en: "Morning" },
        arabic:
          "أَصْبَحْنَا وَأَصْبَحَ الْمُلْكُ لِلّٰهِ وَالْحَمْدُ لِلّٰهِ، لَا إِلٰهَ إِلَّا اللّٰهُ وَحْدَهُ لَا شَرِيْكَ لَهُ",
        transliteration:
          "Ashbahnaa wa ashbahal-mulku lillaah, walhamdu lillaah, laa ilaaha illallaahu wahdahu laa syariika lah",
        translation: {
          id: "Kami telah memasuki waktu pagi, dan kerajaan hanya milik Allah. Segala puji bagi Allah. Tiada tuhan selain Allah semata, tiada sekutu bagi-Nya.",
          en: "We have reached the morning, and to Allah belongs all dominion. All praise is for Allah. There is no god but Allah alone, with no partner.",
        },
      },
      {
        label: { id: "Petang", en: "Evening" },
        arabic:
          "أَمْسَيْنَا وَأَمْسَى الْمُلْكُ لِلّٰهِ وَالْحَمْدُ لِلّٰهِ، لَا إِلٰهَ إِلَّا اللّٰهُ وَحْدَهُ لَا شَرِيْكَ لَهُ",
        transliteration:
          "Amsainaa wa amsal-mulku lillaah, walhamdu lillaah, laa ilaaha illallaahu wahdahu laa syariika lah",
        translation: {
          id: "Kami telah memasuki waktu petang, dan kerajaan hanya milik Allah. Segala puji bagi Allah. Tiada tuhan selain Allah semata, tiada sekutu bagi-Nya.",
          en: "We have reached the evening, and to Allah belongs all dominion. All praise is for Allah. There is no god but Allah alone, with no partner.",
        },
      },
    ],
    benefit: {
      id: "Membuka pagi dan petang dengan mengakui bahwa segala sesuatu milik Allah — menenangkan hati sebelum memulai dan mengakhiri hari.",
      en: "Opening the morning and evening by acknowledging that everything belongs to Allah — settling the heart before the day begins and ends.",
    },
    published: "2026-06-04",
  },
  {
    slug: "allahumma-bika-asbahna",
    order: 5,
    time: "keduanya",
    count: "1×",
    title: { id: "Allahumma Bika Asbahnaa", en: "O Allah, By You We Reach Morning" },
    parts: [
      {
        label: { id: "Pagi", en: "Morning" },
        arabic:
          "اللّٰهُمَّ بِكَ أَصْبَحْنَا وَبِكَ أَمْسَيْنَا وَبِكَ نَحْيَا وَبِكَ نَمُوْتُ وَإِلَيْكَ النُّشُوْرُ",
        transliteration:
          "Allaahumma bika ashbahnaa, wa bika amsainaa, wa bika nahyaa, wa bika namuutu, wa ilaikan-nusyuur",
        translation: {
          id: "Ya Allah, dengan-Mu kami memasuki pagi, dengan-Mu kami memasuki petang, dengan-Mu kami hidup, dengan-Mu kami mati, dan kepada-Mu kami dibangkitkan.",
          en: "O Allah, by You we reach the morning, by You we reach the evening, by You we live, by You we die, and to You is the resurrection.",
        },
      },
      {
        label: { id: "Petang", en: "Evening" },
        arabic:
          "اللّٰهُمَّ بِكَ أَمْسَيْنَا وَبِكَ أَصْبَحْنَا وَبِكَ نَحْيَا وَبِكَ نَمُوْتُ وَإِلَيْكَ الْمَصِيْرُ",
        transliteration:
          "Allaahumma bika amsainaa, wa bika ashbahnaa, wa bika nahyaa, wa bika namuutu, wa ilaikal-mashiir",
        translation: {
          id: "Ya Allah, dengan-Mu kami memasuki petang, dengan-Mu kami memasuki pagi, dengan-Mu kami hidup, dengan-Mu kami mati, dan kepada-Mu tempat kembali.",
          en: "O Allah, by You we reach the evening, by You we reach the morning, by You we live, by You we die, and to You is the return.",
        },
      },
    ],
    benefit: {
      id: "Menyandarkan seluruh keadaan kita — hidup, mati, pagi, dan petang — hanya kepada Allah.",
      en: "Entrusting our whole state — life, death, morning, and evening — to Allah alone.",
    },
    published: "2026-06-04",
  },
  {
    slug: "doa-afiyah",
    order: 6,
    time: "keduanya",
    count: "3×",
    title: { id: "Doa Mohon 'Afiyah (Kesehatan)", en: "Asking for Well-being ('Afiyah)" },
    parts: [
      {
        arabic:
          "اللّٰهُمَّ عَافِنِيْ فِيْ بَدَنِيْ، اللّٰهُمَّ عَافِنِيْ فِيْ سَمْعِيْ، اللّٰهُمَّ عَافِنِيْ فِيْ بَصَرِيْ، لَا إِلٰهَ إِلَّا أَنْتَ",
        transliteration:
          "Allaahumma 'aafinii fii badanii, Allaahumma 'aafinii fii sam'ii, Allaahumma 'aafinii fii basharii, laa ilaaha illaa anta",
        translation: {
          id: "Ya Allah, sehatkanlah tubuhku. Ya Allah, sehatkanlah pendengaranku. Ya Allah, sehatkanlah penglihatanku. Tiada tuhan selain Engkau.",
          en: "O Allah, grant well-being to my body. O Allah, grant well-being to my hearing. O Allah, grant well-being to my sight. There is no god but You.",
        },
      },
    ],
    benefit: {
      id: "Memohon kesehatan badan dan pancaindra — nikmat yang sering terlupakan. Mudah dan menyenangkan diajarkan sambil menunjuk anggota tubuh.",
      en: "Asking for the well-being of the body and senses — blessings often forgotten. Easy and fun to teach while pointing to body parts.",
    },
    source: "HR. Abu Dawud",
    published: "2026-06-04",
  },
  {
    slug: "hasbiyallah",
    order: 7,
    time: "keduanya",
    count: "7×",
    title: { id: "Hasbiyallaahu Laa Ilaaha Illaa Huwa", en: "Allah is Sufficient for Me" },
    parts: [
      {
        arabic:
          "حَسْبِيَ اللّٰهُ لَا إِلٰهَ إِلَّا هُوَ عَلَيْهِ تَوَكَّلْتُ وَهُوَ رَبُّ الْعَرْشِ الْعَظِيْمِ",
        transliteration:
          "Hasbiyallaahu laa ilaaha illaa huwa, 'alaihi tawakkaltu wa huwa rabbul-'arsyil-'azhiim",
        translation: {
          id: "Cukuplah Allah bagiku, tiada tuhan selain Dia. Kepada-Nya aku bertawakal, dan Dia adalah Tuhan pemilik 'Arsy yang agung.",
          en: "Allah is sufficient for me; there is no god but He. In Him I put my trust, and He is the Lord of the Mighty Throne.",
        },
      },
    ],
    benefit: {
      id: "Siapa membacanya tujuh kali di pagi dan petang, Allah cukupkan untuknya apa yang menyusahkannya. Penenang hati saat khawatir.",
      en: "Whoever says it seven times morning and evening, Allah suffices them in whatever worries them. A comfort for an anxious heart.",
    },
    source: "HR. Abu Dawud",
    published: "2026-06-04",
  },
  {
    slug: "bismillahilladzi-laa-yadhurru",
    order: 8,
    time: "keduanya",
    count: "3×",
    title: { id: "Bismillaahilladzii Laa Yadhurru", en: "In the Name of Allah, with Whom Nothing Harms" },
    parts: [
      {
        arabic:
          "بِسْمِ اللّٰهِ الَّذِيْ لَا يَضُرُّ مَعَ اسْمِهِ شَيْءٌ فِي الْأَرْضِ وَلَا فِي السَّمَاءِ وَهُوَ السَّمِيْعُ الْعَلِيْمُ",
        transliteration:
          "Bismillaahilladzii laa yadhurru ma'asmihii syai-un fil-ardhi wa laa fis-samaa-i wa huwas-samii'ul-'aliim",
        translation: {
          id: "Dengan nama Allah yang bersama nama-Nya tidak ada sesuatu pun yang membahayakan, baik di bumi maupun di langit. Dia Maha Mendengar lagi Maha Mengetahui.",
          en: "In the name of Allah, with whose name nothing in the earth or the sky can cause harm. He is the All-Hearing, the All-Knowing.",
        },
      },
    ],
    benefit: {
      id: "Siapa membacanya tiga kali di pagi dan petang, tidak akan ada sesuatu yang membahayakannya. Doa perlindungan yang ringkas dan mudah dihafal.",
      en: "Whoever says it three times morning and evening, nothing will harm them. A short, easy-to-memorise du'a of protection.",
    },
    source: "HR. Abu Dawud & Tirmidzi",
    published: "2026-06-04",
  },
  {
    slug: "radhitu-billah",
    order: 9,
    time: "keduanya",
    count: "3×",
    title: { id: "Radhiitu Billaahi Rabbaa", en: "I am Pleased with Allah as my Lord" },
    parts: [
      {
        arabic:
          "رَضِيْتُ بِاللّٰهِ رَبًّا وَبِالْإِسْلَامِ دِيْنًا وَبِمُحَمَّدٍ صَلَّى اللّٰهُ عَلَيْهِ وَسَلَّمَ نَبِيًّا",
        transliteration:
          "Radhiitu billaahi rabbaa, wa bil-islaami diinaa, wa bi-Muhammadin shallallaahu 'alaihi wa sallama nabiyyaa",
        translation: {
          id: "Aku rida Allah sebagai Tuhanku, Islam sebagai agamaku, dan Muhammad ﷺ sebagai nabiku.",
          en: "I am pleased with Allah as my Lord, Islam as my religion, and Muhammad ﷺ as my Prophet.",
        },
      },
    ],
    benefit: {
      id: "Siapa membacanya tiga kali di pagi dan petang, Allah berjanji akan meridainya. Kalimat penuh syukur dan kepasrahan.",
      en: "Whoever says it three times morning and evening, Allah has promised to please them. A phrase full of gratitude and contentment.",
    },
    source: "HR. Abu Dawud & Tirmidzi",
    published: "2026-06-04",
  },
  {
    slug: "subhanallah-wa-bihamdihi",
    order: 10,
    time: "keduanya",
    count: "100×",
    title: { id: "Subhaanallaahi wa Bihamdihi", en: "Glory and Praise be to Allah" },
    parts: [
      {
        arabic: "سُبْحَانَ اللّٰهِ وَبِحَمْدِهِ",
        transliteration: "Subhaanallaahi wa bihamdih",
        translation: {
          id: "Maha Suci Allah dan segala puji bagi-Nya.",
          en: "Glory be to Allah, and all praise is His.",
        },
        repeat: "100×",
      },
    ],
    benefit: {
      id: "Siapa membacanya seratus kali dalam sehari, dosa-dosanya diampuni walau sebanyak buih di lautan (HR. Bukhari & Muslim). Ringan di lisan, berat di timbangan.",
      en: "Whoever says it a hundred times a day, their sins are forgiven though they be like the foam of the sea (Bukhari & Muslim). Light on the tongue, heavy on the scale.",
    },
    source: "HR. Bukhari & Muslim",
    published: "2026-06-04",
  },
  {
    slug: "tahlil-seratus",
    order: 11,
    time: "keduanya",
    count: "100×",
    title: { id: "Laa Ilaaha Illallaahu Wahdah", en: "There is No God but Allah Alone" },
    parts: [
      {
        arabic:
          "لَا إِلٰهَ إِلَّا اللّٰهُ وَحْدَهُ لَا شَرِيْكَ لَهُ، لَهُ الْمُلْكُ وَلَهُ الْحَمْدُ وَهُوَ عَلَى كُلِّ شَيْءٍ قَدِيْرٌ",
        transliteration:
          "Laa ilaaha illallaahu wahdahu laa syariika lah, lahul-mulku wa lahul-hamdu wa huwa 'alaa kulli syai-in qadiir",
        translation: {
          id: "Tiada tuhan selain Allah semata, tiada sekutu bagi-Nya. Milik-Nya kerajaan dan bagi-Nya segala puji, dan Dia Maha Kuasa atas segala sesuatu.",
          en: "There is no god but Allah alone, with no partner. His is the dominion and His is the praise, and He is able to do all things.",
        },
        repeat: "100×",
      },
    ],
    benefit: {
      id: "Siapa membacanya seratus kali dalam sehari, nilainya seperti memerdekakan sepuluh budak, dicatat seratus kebaikan, dihapus seratus keburukan, dan terlindung dari setan hingga petang (HR. Bukhari & Muslim).",
      en: "Whoever says it a hundred times a day, it equals freeing ten slaves, a hundred good deeds are written, a hundred sins erased, and they are shielded from Shaytan until evening (Bukhari & Muslim).",
    },
    source: "HR. Bukhari & Muslim",
    published: "2026-06-04",
  },
];

export function getAllDzikir(): DzikirItem[] {
  return [...dzikirList].sort((a, b) => a.order - b.order);
}

export function getDzikirBySlug(slug: string): DzikirItem | undefined {
  return dzikirList.find((d) => d.slug === slug);
}

export function getDzikirSlugs(): string[] {
  return dzikirList.map((d) => d.slug);
}
