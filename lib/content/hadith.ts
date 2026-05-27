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

  // ─── Family relations series (added in step a) ─────────────────
  {
    slug: "mencium-anak-rahmat",
    arabic: "مَنْ لَا يَرْحَمِ النَّاسَ لَا يَرْحَمْهُ اللَّهُ",
    title: {
      id: "Yang tidak menyayangi manusia tidak disayangi Allah",
      en: "He who does not show mercy to people will not be shown mercy by Allah",
    },
    translation: {
      id: "Barangsiapa yang tidak menyayangi manusia, maka Allah tidak akan menyayanginya.",
      en: "Whoever does not show mercy to people, Allah will not show him mercy.",
    },
    parentingNote: {
      id: "Diucapkan Rasulullah ﷺ kepada al-Aqra' bin Habis yang heran karena beliau mencium Hasan. Mencium dan memeluk anak bukanlah kelemahan — itu cermin rahmat yang Allah cintai.",
      en: "The Prophet ﷺ said this to al-Aqra' ibn Habis, who was surprised to see him kissing Hasan. Kissing and hugging children is not weakness — it mirrors the mercy Allah loves.",
    },
    narrator: "Abu Hurairah",
    source: {
      collection: "Bukhari & Muslim",
      reference: "HR. Bukhari 5997, Muslim 2319",
      grade: "sahih",
    },
    themes: ["kasih-sayang", "keluarga", "kelembutan"],
    relatedDoa: ["perlindungan-anak"],
    relatedSituations: ["bonding-orangtua"],
    published: "2026-05-27",
    updated: "2026-05-27",
  },
  {
    slug: "mendidik-anak-perempuan",
    arabic:
      "مَنْ عَالَ ثَلَاثَ بَنَاتٍ فَأَدَّبَهُنَّ، وَزَوَّجَهُنَّ، وَأَحْسَنَ إِلَيْهِنَّ، فَلَهُ الْجَنَّةُ",
    title: {
      id: "Mendidik anak perempuan dengan baik membuka surga",
      en: "Raising daughters well opens paradise",
    },
    translation: {
      id: "Barangsiapa yang memelihara tiga anak perempuan, kemudian mendidik mereka, menikahkan mereka, dan berbuat baik kepada mereka, maka baginya surga.",
      en: "Whoever cares for three daughters, educates them, marries them off, and treats them well, paradise is his.",
    },
    parentingNote: {
      id: "Di zaman jahiliyah anak perempuan dianggap aib — sebagian dikubur hidup-hidup. Hadith ini bukan tentang jumlah anak; ini tentang mengubah cara pandang umat secara radikal: mendidik anak perempuan adalah jalan ke surga.",
      en: "In pre-Islamic Arabia daughters were seen as a disgrace — some were buried alive. This hadith isn't about quantity; it radically changed the ummah's view: educating daughters is a path to paradise.",
    },
    narrator: "Anas bin Malik",
    source: {
      collection: "Tirmidzi",
      reference: "HR. Tirmidzi 1912",
      grade: "hasan",
    },
    themes: ["anak-perempuan", "tarbiyah", "keluarga"],
    relatedDoa: [],
    relatedSituations: ["motivasi-mendidik"],
    published: "2026-05-27",
    updated: "2026-05-27",
  },
  {
    slug: "menggendong-anak-saat-sholat",
    arabic:
      "كَانَ يُصَلِّي وَهُوَ حَامِلٌ أُمَامَةَ، فَإِذَا سَجَدَ وَضَعَهَا، وَإِذَا قَامَ حَمَلَهَا",
    title: {
      id: "Rasulullah ﷺ sholat sambil menggendong Umamah",
      en: "The Prophet ﷺ prayed while carrying Umamah",
    },
    translation: {
      id: "Beliau sholat sambil menggendong (cucunya) Umamah. Saat sujud, beliau letakkan; saat berdiri, beliau gendong kembali.",
      en: "He prayed while carrying his granddaughter Umamah. When he prostrated, he set her down; when he stood, he carried her again.",
    },
    parentingNote: {
      id: "Imam dunia, di tempat ibadah paling khusyuk, menggendong cucunya yang masih kecil. Sholat tidak rusak karena anak. Justru sholat yang sebenarnya menerima kehadiran anak — bukan membuangnya keluar.",
      en: "The world's imam, in the most reverent place of worship, carried his small granddaughter. Prayer wasn't ruined by a child. True prayer welcomed the child — it didn't push her out.",
    },
    narrator: "Abu Qatadah",
    source: {
      collection: "Bukhari & Muslim",
      reference: "HR. Bukhari 516, Muslim 543",
      grade: "sahih",
    },
    themes: ["sholat", "anak-perempuan", "kasih-sayang", "keluarga"],
    relatedDoa: [],
    relatedSituations: ["bonding-orangtua", "mulai-sholat"],
    published: "2026-05-27",
    updated: "2026-05-27",
  },
  {
    slug: "silaturahmi-rezeki",
    arabic:
      "مَنْ سَرَّهُ أَنْ يُبْسَطَ لَهُ فِي رِزْقِهِ، وَأَنْ يُنْسَأَ لَهُ فِي أَثَرِهِ، فَلْيَصِلْ رَحِمَهُ",
    title: {
      id: "Silaturahmi melapangkan rezeki dan memanjangkan umur",
      en: "Maintaining kinship widens provision and lengthens life",
    },
    translation: {
      id: "Barangsiapa yang ingin diluaskan rezekinya dan dipanjangkan umurnya, hendaklah ia menyambung silaturahmi.",
      en: "Whoever wishes for his provision to be expanded and his life to be lengthened, let him maintain ties of kinship.",
    },
    parentingNote: {
      id: "Ajarkan anak menelepon kakek-nenek tiap minggu. Ajak kunjungi paman/bibi. Anak yang besar dengan keluarga besar yang dekat punya jaring pengaman emosional dan rezeki spiritual yang besar.",
      en: "Teach your child to call grandparents weekly. Take them to visit aunts and uncles. A child raised within a connected extended family has an emotional safety net — and a spiritual abundance — that compounds for life.",
    },
    narrator: "Anas bin Malik",
    source: {
      collection: "Bukhari & Muslim",
      reference: "HR. Bukhari 5986, Muslim 2557",
      grade: "sahih",
    },
    themes: ["silaturahmi", "keluarga", "rezeki"],
    relatedDoa: ["mendapat-rezeki"],
    relatedSituations: [],
    published: "2026-05-27",
    updated: "2026-05-27",
  },
  {
    slug: "menyantuni-anak-yatim",
    arabic:
      "أَنَا وَكَافِلُ الْيَتِيمِ فِي الْجَنَّةِ هَكَذَا",
    title: {
      id: "Aku dan orang yang menyantuni anak yatim di surga seperti ini",
      en: "I and the one who cares for an orphan are like this in paradise",
    },
    translation: {
      id: "Aku dan orang yang menyantuni anak yatim di surga seperti ini — (beliau memberi isyarat dengan jari telunjuk dan jari tengah, lalu merenggangkannya sedikit).",
      en: "I and the one who cares for an orphan are like this in paradise — (he gestured with his index and middle fingers, slightly apart).",
    },
    parentingNote: {
      id: "Anak yatim ada di sekitar kita — anak tetangga yang ayahnya wafat, anak teman yang ditinggal cerai, anak di panti. Ajak anakmu sendiri mengenal mereka, berbagi mainan, mendoakan. Itu menanam kasih sayang yang Rasulullah ﷺ janjikan dekat dengan beliau.",
      en: "Orphans are around us — a neighbor's child whose father has passed, a friend's child after divorce, a child in a shelter. Bring your own child to meet them, share toys, make dua for them. That plants the kind of compassion the Prophet ﷺ promised would seat us next to him.",
    },
    narrator: "Sahl bin Sa'ad",
    source: {
      collection: "Bukhari",
      reference: "HR. Bukhari 5304",
      grade: "sahih",
    },
    themes: ["anak-yatim", "kasih-sayang", "keluarga"],
    relatedDoa: [],
    relatedSituations: ["motivasi-mendidik"],
    published: "2026-05-27",
    updated: "2026-05-27",
  },
  {
    slug: "doa-orang-tua-mustajab",
    arabic:
      "ثَلَاثُ دَعَوَاتٍ مُسْتَجَابَاتٌ لَا شَكَّ فِيهِنَّ: دَعْوَةُ الْمَظْلُومِ، وَدَعْوَةُ الْمُسَافِرِ، وَدَعْوَةُ الْوَالِدِ عَلَى وَلَدِهِ",
    title: {
      id: "Doa orang tua untuk anak adalah doa yang mustajab",
      en: "A parent's dua for their child is a dua that is answered",
    },
    translation: {
      id: "Tiga doa yang tidak diragukan keterkabulannya: doa orang yang dianiaya, doa orang yang sedang bepergian, dan doa orang tua untuk anaknya.",
      en: "Three duas are unmistakably answered: the dua of the oppressed, the dua of the traveler, and the dua of a parent for their child.",
    },
    parentingNote: {
      id: "Setiap doa orang tua untuk anaknya — saat sholat malam, saat bersujud, saat tangan dia mengusap kepala anak — sampai ke Allah. Sebaliknya, ucapan amarah seperti 'kamu menyusahkan' juga bisa dikabulkan. Inilah mengapa lisan orang tua adalah amanat paling berat.",
      en: "Every dua a parent makes for their child — in night prayer, in sujud, in the moment a hand rests on a child's head — reaches Allah. Conversely, words spoken in anger like 'you're a burden' can also be answered. This is why a parent's tongue is the heaviest trust.",
    },
    narrator: "Abu Hurairah",
    source: {
      collection: "Abu Dawud & Tirmidzi",
      reference: "HR. Abu Dawud 1536, Tirmidzi 1905",
      grade: "hasan",
    },
    themes: ["doa", "keluarga", "lisan-orangtua"],
    relatedDoa: ["doa-untuk-orang-tua"],
    relatedSituations: ["marah-orang-tua"],
    published: "2026-05-27",
    updated: "2026-05-27",
  },
  {
    slug: "menafkahi-keluarga",
    arabic:
      "دِينَارٌ أَنْفَقْتَهُ فِي سَبِيلِ اللَّهِ، وَدِينَارٌ أَنْفَقْتَهُ فِي رَقَبَةٍ، وَدِينَارٌ تَصَدَّقْتَ بِهِ عَلَى مِسْكِينٍ، وَدِينَارٌ أَنْفَقْتَهُ عَلَى أَهْلِكَ، أَعْظَمُهَا أَجْرًا الَّذِي أَنْفَقْتَهُ عَلَى أَهْلِكَ",
    title: {
      id: "Nafkah untuk keluarga adalah sedekah terbesar",
      en: "Spending on one's family is the greatest sadaqah",
    },
    translation: {
      id: "Satu dinar yang kamu nafkahkan di jalan Allah, satu dinar untuk memerdekakan budak, satu dinar yang kamu sedekahkan kepada orang miskin, dan satu dinar yang kamu nafkahkan untuk keluargamu — yang paling besar pahalanya adalah yang kamu nafkahkan untuk keluargamu.",
      en: "A dinar spent in Allah's cause, a dinar spent to free a slave, a dinar given to a poor person, and a dinar spent on your family — the greatest in reward is the one spent on your family.",
    },
    parentingNote: {
      id: "Membeli susu untuk anak, baju sekolah, sepatu yang muat — itu sedekah. Yang sering dianggap 'biasa' dalam rumah tangga adalah amalan yang nilainya melebihi sedekah ke jalan Allah. Jangan kecil hati saat penghasilanmu habis untuk keluarga — itu pahala terbesar.",
      en: "Buying milk for your child, school clothes, shoes that fit — those are sadaqah. What gets dismissed as 'just expenses' is an act greater than charity in Allah's path. Don't feel small when your income goes to your family — that is the largest reward.",
    },
    narrator: "Abu Hurairah",
    source: {
      collection: "Muslim",
      reference: "HR. Muslim 995",
      grade: "sahih",
    },
    themes: ["nafkah", "keluarga", "rezeki"],
    relatedDoa: ["mendapat-rezeki"],
    relatedSituations: [],
    published: "2026-05-27",
    updated: "2026-05-27",
  },
  {
    slug: "berbakti-pada-ibu",
    arabic:
      "جَاءَ رَجُلٌ إِلَى رَسُولِ اللَّهِ ﷺ فَقَالَ: يَا رَسُولَ اللَّهِ، مَنْ أَحَقُّ النَّاسِ بِحُسْنِ صَحَابَتِي؟ قَالَ: أُمُّكَ. قَالَ: ثُمَّ مَنْ؟ قَالَ: أُمُّكَ. قَالَ: ثُمَّ مَنْ؟ قَالَ: أُمُّكَ. قَالَ: ثُمَّ مَنْ؟ قَالَ: أَبُوكَ",
    title: {
      id: "Ibu, ibu, ibu — kemudian ayah",
      en: "Mother, mother, mother — then father",
    },
    translation: {
      id: "Seorang laki-laki datang kepada Rasulullah ﷺ dan bertanya: 'Wahai Rasulullah, siapakah yang paling berhak aku perlakukan dengan baik?' Beliau menjawab: 'Ibumu.' Ia bertanya: 'Kemudian siapa?' Beliau menjawab: 'Ibumu.' Ia bertanya lagi: 'Kemudian siapa?' Beliau menjawab: 'Ibumu.' Ia bertanya: 'Kemudian siapa?' Beliau menjawab: 'Ayahmu.'",
      en: "A man came to the Messenger of Allah ﷺ and asked: 'O Messenger of Allah, who deserves my best companionship?' He said: 'Your mother.' The man asked: 'Then who?' He said: 'Your mother.' Then: 'Your mother.' Then: 'Your father.'",
    },
    parentingNote: {
      id: "Ajarkan anak menyebut ibu tiga kali sebelum ayah. Bukan untuk meremehkan ayah — tapi sebagai pengingat bahwa kasih sayang seorang ibu (mengandung, melahirkan, menyusui) menempati derajat tersendiri dalam Islam. Anak yang besar dengan kesadaran ini tumbuh dengan rasa hormat yang dalam.",
      en: "Teach your child to name the mother three times before the father. Not to diminish fathers — but as a reminder that a mother's love (carrying, birthing, nursing) holds a singular rank in Islam. A child raised aware of this grows up with profound respect.",
    },
    narrator: "Abu Hurairah",
    source: {
      collection: "Bukhari & Muslim",
      reference: "HR. Bukhari 5971, Muslim 2548",
      grade: "sahih",
    },
    themes: ["ibu", "berbakti", "keluarga"],
    relatedDoa: ["doa-untuk-orang-tua"],
    relatedSituations: [],
    published: "2026-05-27",
    updated: "2026-05-27",
  },
  {
    slug: "tetangga-keluarga-luas",
    arabic:
      "مَا زَالَ جِبْرِيلُ يُوصِينِي بِالْجَارِ حَتَّى ظَنَنْتُ أَنَّهُ سَيُوَرِّثُهُ",
    title: {
      id: "Jibril selalu mewasiatkan kebaikan kepada tetangga",
      en: "Jibril kept counseling me about the neighbor",
    },
    translation: {
      id: "Jibril senantiasa berwasiat kepadaku tentang tetangga, sampai aku mengira bahwa dia akan mewariskannya (sebagian harta).",
      en: "Jibril kept counseling me about the neighbor until I thought he would make him an inheritor.",
    },
    parentingNote: {
      id: "Ajarkan anak menghormati tetangga sebagaimana keluarga. Ucapkan salam saat berpapasan. Bawakan makanan saat masak lebih. Anak yang besar dengan tetangga yang dikenal punya 'keluarga' yang lebih luas dari rumah sendiri.",
      en: "Teach your child to honor neighbors as family. Greet them in passing. Bring food when you've cooked extra. A child raised among known neighbors has a 'family' larger than their own household.",
    },
    narrator: "Aisyah radhiyallahu 'anha",
    source: {
      collection: "Bukhari & Muslim",
      reference: "HR. Bukhari 6014, Muslim 2624",
      grade: "sahih",
    },
    themes: ["tetangga", "keluarga", "akhlak"],
    relatedDoa: ["mengucap-salam"],
    relatedSituations: ["adab-sehari-hari"],
    published: "2026-05-27",
    updated: "2026-05-27",
  },
  {
    slug: "rumah-tempat-paling-utama",
    arabic:
      "خَيْرُكُمْ خَيْرُكُمْ لِأَهْلِهِ، وَأَنَا خَيْرُكُمْ لِأَهْلِي",
    title: {
      id: "Yang terbaik di antara kalian adalah yang paling baik kepada keluarganya",
      en: "The best of you is the one best to his family",
    },
    translation: {
      id: "Sebaik-baik kalian adalah yang paling baik kepada keluarganya, dan aku adalah yang paling baik di antara kalian kepada keluargaku.",
      en: "The best of you is the one who is best to his family, and I am the best of you to my family.",
    },
    parentingNote: {
      id: "Bukan yang paling sukses di luar rumah, bukan yang paling dihormati di majelis, bukan yang paling kaya. Yang paling baik adalah yang lembut di rumahnya sendiri. Anak yang melihat orang tuanya 'menjadi terbaik' justru di rumah — bukan di tempat lain — tumbuh dengan standar pernikahan dan keluarga yang sehat.",
      en: "Not the most successful outside, not the most respected in gatherings, not the wealthiest. The best is the one gentle in his own home. A child who sees a parent 'be their best' at home — not elsewhere — grows up with healthy standards for marriage and family.",
    },
    narrator: "Aisyah radhiyallahu 'anha",
    source: {
      collection: "Tirmidzi",
      reference: "HR. Tirmidzi 3895",
      grade: "sahih",
    },
    themes: ["keluarga", "akhlak", "suami-istri"],
    relatedDoa: [],
    relatedSituations: ["marah-orang-tua", "bonding-orangtua"],
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
