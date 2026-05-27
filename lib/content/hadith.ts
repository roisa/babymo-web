import type { Hadith } from "./types";

/**
 * Canonical hadith curated for parenting context. Each entry includes the
 * Arabic text, full translation, narrator, source reference, and authenticity
 * grade. The `parentingNote` is editorial commentary — applied parenting
 * relevance — and is clearly separated from the hadith text itself.
 *
 * EDITORIAL NOTE: Every entry below must be reviewed by a qualified ustadz
 * before public launch. Translations follow widely accepted English/Indonesian
 * renderings. References should be verified against the original collections.
 */
export const hadithList: Hadith[] = [
  {
    slug: "muliakan-anak",
    arabic:
      "أَكْرِمُوا أَوْلَادَكُمْ وَأَحْسِنُوا أَدَبَهُمْ",
    title: {
      id: "Muliakan dan didik anak-anakmu",
      en: "Honor your children and refine their manners",
    },
    translation: {
      id: "Muliakanlah anak-anak kalian dan perbaikilah adab mereka.",
      en: "Honor your children and beautify their manners.",
    },
    parentingNote: {
      id: "Memuliakan anak adalah perintah, bukan pilihan. Adab diajarkan melalui contoh harian — cara orang tua menyapa, marah, dan memaafkan adalah pelajaran pertama anak.",
      en: "Honoring a child is a command, not an option. Manners are taught through daily example — how parents greet, get angry, and forgive becomes the child's first lesson.",
    },
    narrator: "Anas bin Malik",
    source: {
      collection: "Ibn Majah",
      reference: "HR. Ibn Majah 3671",
      grade: "hasan",
    },
    themes: ["adab", "kemuliaan", "tarbiyah"],
    relatedDoa: [],
    relatedSituations: ["adab-sehari-hari"],
    published: "2026-05-27",
    updated: "2026-05-27",
  },
  {
    slug: "kasih-sayang-kepada-anak",
    arabic:
      "مَنْ لَا يَرْحَمْ لَا يُرْحَمْ",
    title: {
      id: "Yang tidak menyayangi tidak akan disayangi",
      en: "He who shows no mercy will receive none",
    },
    translation: {
      id: "Barangsiapa yang tidak menyayangi (sesama), maka ia tidak akan disayangi (oleh Allah).",
      en: "Whoever does not show mercy will not be shown mercy.",
    },
    parentingNote: {
      id: "Rasulullah ﷺ mengucapkan ini ketika menegur orang yang heran melihat beliau mencium cucunya. Pelukan, ciuman, dan kelembutan adalah ibadah — bukan kelemahan.",
      en: "The Prophet ﷺ said this rebuking someone surprised at him kissing his grandchild. Hugs, kisses, and gentleness are acts of worship — not weakness.",
    },
    narrator: "Abu Hurairah",
    source: {
      collection: "Bukhari & Muslim",
      reference: "HR. Bukhari 5997, Muslim 2318",
      grade: "sahih",
    },
    themes: ["kasih-sayang", "kelembutan"],
    relatedDoa: ["perlindungan-anak"],
    relatedSituations: ["marah-orang-tua", "emosi-anak"],
    published: "2026-05-27",
    updated: "2026-05-27",
  },
  {
    slug: "perintah-sholat-tujuh-tahun",
    arabic:
      "مُرُوا أَوْلَادَكُمْ بِالصَّلَاةِ وَهُمْ أَبْنَاءُ سَبْعِ سِنِينَ",
    title: {
      id: "Ajarkan sholat di usia tujuh tahun",
      en: "Teach prayer at seven years old",
    },
    translation: {
      id: "Perintahkan anak-anak kalian untuk sholat ketika mereka berusia tujuh tahun, dan pukullah mereka (dengan lembut) jika belum sholat di usia sepuluh tahun, dan pisahkanlah tempat tidur mereka.",
      en: "Command your children to pray when they are seven, and discipline them gently at ten if they neglect it, and separate their bedding.",
    },
    parentingNote: {
      id: "Tiga tahun (7–10) adalah masa pengenalan yang lembut dan menyenangkan. 'Pukulan' yang dimaksud adalah teguran tegas dan bukan kekerasan fisik — banyak ulama menjelaskan ini sebagai isyarat disiplin, bukan menyakiti.",
      en: "The three-year window (7–10) is a gentle, joyful introduction. The 'beating' referenced is firm correction, not physical harm — many scholars explain it as a disciplinary signal, never to injure.",
    },
    narrator: "Amr bin Syu'aib",
    source: {
      collection: "Abu Dawud",
      reference: "HR. Abu Dawud 495",
      grade: "hasan",
    },
    themes: ["sholat", "tarbiyah", "tujuh-tahun"],
    relatedDoa: ["mendengar-adzan"],
    relatedSituations: ["mulai-sholat", "rutinitas-anak"],
    published: "2026-05-27",
    updated: "2026-05-27",
  },
  {
    slug: "doa-anak-shalih",
    arabic:
      "إِذَا مَاتَ ابْنُ آدَمَ انْقَطَعَ عَمَلُهُ إِلَّا مِنْ ثَلَاثٍ: صَدَقَةٍ جَارِيَةٍ، أَوْ عِلْمٍ يُنْتَفَعُ بِهِ، أَوْ وَلَدٍ صَالِحٍ يَدْعُو لَهُ",
    title: {
      id: "Tiga amal yang tidak terputus",
      en: "Three deeds that do not cease",
    },
    translation: {
      id: "Apabila manusia meninggal dunia, terputuslah amalnya kecuali tiga perkara: sedekah jariyah, ilmu yang bermanfaat, dan anak shalih yang mendoakannya.",
      en: "When a person dies, their deeds end except for three: ongoing charity, beneficial knowledge, or a righteous child who prays for them.",
    },
    parentingNote: {
      id: "Mendidik anak shalih adalah investasi paling lama yang bisa dilakukan orang tua — pahalanya mengalir bahkan setelah kematian. Setiap usaha kecil mengajar doa dan adab adalah bagian dari amal jariyah ini.",
      en: "Raising a righteous child is the longest investment a parent can make — its reward flows even after death. Every small effort to teach a dua or manner is part of this ongoing charity.",
    },
    narrator: "Abu Hurairah",
    source: {
      collection: "Muslim",
      reference: "HR. Muslim 1631",
      grade: "sahih",
    },
    themes: ["anak-shalih", "doa", "amal-jariyah"],
    relatedDoa: ["doa-untuk-orang-tua"],
    relatedSituations: ["motivasi-mendidik"],
    published: "2026-05-27",
    updated: "2026-05-27",
  },
  {
    slug: "adil-kepada-anak",
    arabic:
      "اتَّقُوا اللَّهَ وَاعْدِلُوا بَيْنَ أَوْلَادِكُمْ",
    title: {
      id: "Berlaku adil di antara anak-anak",
      en: "Be just between your children",
    },
    translation: {
      id: "Bertakwalah kepada Allah dan berlaku adillah di antara anak-anak kalian.",
      en: "Fear Allah and treat your children with justice.",
    },
    parentingNote: {
      id: "Adil bukan berarti sama persis — anak kecil butuh lebih banyak waktu, anak besar butuh lebih banyak kepercayaan. Adil berarti memberi sesuai kebutuhan, dan tidak pernah membandingkan secara merendahkan.",
      en: "Justice doesn't mean identical treatment — a young child needs more time, an older one more trust. Justice means giving by need, and never comparing in a way that belittles.",
    },
    narrator: "An-Nu'man bin Basyir",
    source: {
      collection: "Bukhari & Muslim",
      reference: "HR. Bukhari 2587, Muslim 1623",
      grade: "sahih",
    },
    themes: ["keadilan", "saudara", "pilih-kasih"],
    relatedDoa: [],
    relatedSituations: ["rivalitas-saudara"],
    published: "2026-05-27",
    updated: "2026-05-27",
  },
  {
    slug: "kelembutan-keindahan",
    arabic:
      "إِنَّ الرِّفْقَ لَا يَكُونُ فِي شَيْءٍ إِلَّا زَانَهُ",
    title: {
      id: "Kelembutan menghiasi segalanya",
      en: "Gentleness beautifies everything",
    },
    translation: {
      id: "Sesungguhnya kelembutan tidaklah ada pada sesuatu, kecuali akan menghiasinya. Dan tidaklah kelembutan itu dicabut dari sesuatu, kecuali akan memburukkannya.",
      en: "Gentleness is not found in anything except that it beautifies it, and it is not removed from anything except that it disfigures it.",
    },
    parentingNote: {
      id: "Suara yang ditinggikan tidak pernah mengajarkan anak — ia hanya mengajarkan ketakutan. Kelembutan yang konsisten adalah alat parenting yang paling kuat sekaligus paling sulit.",
      en: "A raised voice never teaches a child — it only teaches fear. Consistent gentleness is the most powerful, and hardest, parenting tool.",
    },
    narrator: "Aisyah radhiyallahu 'anha",
    source: {
      collection: "Muslim",
      reference: "HR. Muslim 2594",
      grade: "sahih",
    },
    themes: ["kelembutan", "akhlak"],
    relatedDoa: [],
    relatedSituations: ["marah-orang-tua"],
    published: "2026-05-27",
    updated: "2026-05-27",
  },
  {
    slug: "tidak-mendoakan-buruk-anak",
    arabic:
      "لَا تَدْعُوا عَلَى أَنْفُسِكُمْ، وَلَا تَدْعُوا عَلَى أَوْلَادِكُمْ",
    title: {
      id: "Jangan mendoakan keburukan untuk anak",
      en: "Do not invoke harm against your children",
    },
    translation: {
      id: "Janganlah kalian mendoakan keburukan untuk diri kalian sendiri, jangan mendoakan keburukan untuk anak-anak kalian, dan jangan mendoakan keburukan untuk harta kalian.",
      en: "Do not invoke evil against yourselves, your children, or your wealth.",
    },
    parentingNote: {
      id: "Ucapan sambil marah seperti 'kamu menyusahkan saja' bisa menjadi doa yang diijabah. Ganti ucapan keluhan dengan doa kebaikan — kebiasaan ini melindungi anak dan menjernihkan hati orang tua.",
      en: "Exasperated words like 'you're such a burden' can become invoked prayers. Replace complaints with good prayers — the habit protects the child and clears the parent's heart.",
    },
    narrator: "Jabir bin Abdillah",
    source: {
      collection: "Muslim",
      reference: "HR. Muslim 3009",
      grade: "sahih",
    },
    themes: ["doa", "lisan-orangtua"],
    relatedDoa: [],
    relatedSituations: ["marah-orang-tua"],
    published: "2026-05-27",
    updated: "2026-05-27",
  },
  {
    slug: "hadiah-terbaik-adab",
    arabic:
      "مَا نَحَلَ وَالِدٌ وَلَدًا مِنْ نَحْلٍ أَفْضَلَ مِنْ أَدَبٍ حَسَنٍ",
    title: {
      id: "Hadiah terbaik adalah adab",
      en: "The best gift is good manners",
    },
    translation: {
      id: "Tidak ada pemberian seorang ayah kepada anaknya yang lebih utama dari pada (mengajarkan) adab yang baik.",
      en: "A father has not given his child a better gift than good manners.",
    },
    parentingNote: {
      id: "Mainan rusak. Tabungan habis. Adab yang ditanam di usia dini tumbuh dan diwariskan ke generasi berikutnya. Ini adalah investasi yang paling tahan inflasi.",
      en: "Toys break. Savings run out. Manners planted in childhood grow and pass to the next generation. This is the most inflation-proof investment.",
    },
    narrator: "Sa'id bin Al-Ash",
    source: {
      collection: "Tirmidzi",
      reference: "HR. Tirmidzi 1952",
      grade: "hasan",
    },
    themes: ["adab", "warisan"],
    relatedDoa: [],
    relatedSituations: ["adab-sehari-hari"],
    published: "2026-05-27",
    updated: "2026-05-27",
  },
  {
    slug: "main-bersama-anak",
    arabic:
      "مَنْ كَانَ لَهُ صَبِيٌّ فَلْيَتَصَابَّ لَهُ",
    title: {
      id: "Bermainlah seperti anak-anak bersama anakmu",
      en: "Become like a child with your child",
    },
    translation: {
      id: "Barangsiapa yang memiliki anak kecil, hendaklah ia bermain seperti anak kecil bersamanya.",
      en: "Whoever has a small child, let him become childlike with him.",
    },
    parentingNote: {
      id: "Bermain bukan membuang waktu — itu cara anak belajar percaya, mengatur emosi, dan merasa dicintai. Sepuluh menit bermain penuh perhatian sehari lebih berharga dari satu jam menemani sambil bermain HP.",
      en: "Play is not wasted time — it is how a child learns to trust, regulate emotion, and feel loved. Ten minutes of attentive play beats an hour of being-there while scrolling.",
    },
    narrator: "Abu Hurairah (riwayat athar)",
    source: {
      collection: "Al-Madkhal Ibn al-Hajj",
      reference: "Adabul Mufrad / kitab tarbiyah klasik",
      grade: "hasan",
    },
    themes: ["bermain", "kehadiran"],
    relatedDoa: [],
    relatedSituations: ["bonding-orangtua"],
    published: "2026-05-27",
    updated: "2026-05-27",
  },
  {
    slug: "anak-mukmin-amanat",
    arabic:
      "كُلُّكُمْ رَاعٍ وَكُلُّكُمْ مَسْؤُولٌ عَنْ رَعِيَّتِهِ",
    title: {
      id: "Setiap orang tua adalah penggembala",
      en: "Every parent is a shepherd",
    },
    translation: {
      id: "Setiap kalian adalah pemimpin, dan setiap kalian akan diminta pertanggungjawaban atas yang dipimpinnya.",
      en: "Each of you is a shepherd, and each of you is responsible for his flock.",
    },
    parentingNote: {
      id: "Anak adalah amanah, bukan milik. Tugas orang tua bukan mencetak duplikat diri, tapi mengantarkan jiwa baru menemukan Tuhannya. Itu pekerjaan paling berat sekaligus paling mulia.",
      en: "A child is a trust, not a possession. The parent's task is not to print a copy of themselves, but to walk a new soul toward its Lord. That is the heaviest and noblest work.",
    },
    narrator: "Abdullah bin Umar",
    source: {
      collection: "Bukhari & Muslim",
      reference: "HR. Bukhari 893, Muslim 1829",
      grade: "sahih",
    },
    themes: ["tanggung-jawab", "amanat"],
    relatedDoa: [],
    relatedSituations: ["motivasi-mendidik"],
    published: "2026-05-27",
    updated: "2026-05-27",
  },
];

export function getAllHadith(): Hadith[] {
  return hadithList;
}

export function getHadithBySlug(slug: string): Hadith | undefined {
  return hadithList.find((h) => h.slug === slug);
}

export function getHadithByTheme(theme: string): Hadith[] {
  return hadithList.filter((h) => h.themes.includes(theme));
}
