import type { Locale } from "./config";

type Dict = {
  meta: {
    siteTitle: string;
    siteTagline: string;
    siteDescription: string;
    keywords: string;
  };
  nav: {
    home: string;
    doa: string;
    hadith: string;
    parenting: string;
    blog: string;
    catatan: string;
    surah: string;
    kisah: string;
    games: string;
    apps: string;
    learn: string;
    play: string;
    watch: string;
    parents: string;
    faq: string;
    about: string;
    contact: string;
    support: string;
    languageSwitch: string;
  };
  catatan: {
    indexTitle: string;
    indexDescription: string;
    intro: string;
    bySalman: string;
    byUmi: string;
    byline: string;
    childChip: { mo: string; ais: string; both: string };
    privacyNote: string;
    takeaway: string;
    readMore: string;
    relatedAnchor: string;
  };
  home: {
    eyebrow: string;
    heroTitleA: string;
    heroTitleB: string;
    heroSub: string;
    ctaPrimary: string;
    ctaSecondary: string;
    sections: {
      doaTitle: string;
      doaSub: string;
      gamesTitle: string;
      gamesSub: string;
      blogTitle: string;
      blogSub: string;
      ceritaTitle: string;
      ceritaSub: string;
      valuesTitle: string;
      valuesSub: string;
      faqTitle: string;
      faqSub: string;
      followTitle: string;
      followSub: string;
      supportTitle: string;
      supportSub: string;
    };
    values: { title: string; body: string }[];
    viewAll: string;
    readMore: string;
  };
  doa: {
    indexTitle: string;
    indexDescription: string;
    arabic: string;
    transliteration: string;
    translation: string;
    source: string;
    grade: string;
    ages: string;
    situations: string;
    related: string;
    copy: string;
    copied: string;
  };
  hadith: {
    indexTitle: string;
    indexDescription: string;
    narrator: string;
    collection: string;
    grade: string;
    themes: string;
    parentingNote: string;
    relatedDoa: string;
  };
  parenting: {
    indexTitle: string;
    indexDescription: string;
    signs: string;
    steps: string;
    islamicPerspective: string;
    recommendedDoa: string;
    supportingHadith: string;
    ageRange: string;
  };
  blog: {
    indexTitle: string;
    indexDescription: string;
    readingTime: string;
    by: string;
    publishedOn: string;
    share: string;
  };
  pages: {
    about: { title: string; description: string };
    contact: { title: string; description: string };
    privacy: { title: string; description: string };
    terms: { title: string; description: string };
    games: { title: string; description: string };
    apps: { title: string; description: string };
    learn: { title: string; description: string };
    play: { title: string; description: string };
    watch: { title: string; description: string };
    parents: { title: string; description: string };
    paths: { title: string; description: string };
    support: { title: string; description: string };
    faq: { title: string; description: string };
  };
  footer: {
    rights: string;
    explore: string;
    info: string;
    follow: string;
    tagline: string;
    languageLabel: string;
  };
  faq: {
    items: { q: string; a: string }[];
  };
};

const id: Dict = {
  meta: {
    siteTitle: "Baby Mo — Pendamping Islami Keluarga Muslim Indonesia",
    siteTagline: "Konten Islami Ramah Anak",
    siteDescription:
      "Baby Mo: platform parenting islami untuk keluarga muslim Indonesia. Doa harian, hadith, situasi parenting, dan game edukatif untuk anak usia 2–8 tahun.",
    keywords:
      "doa harian anak, parenting islami, hijaiyah anak, konten islami anak, game islami, baby mo",
  },
  nav: {
    home: "Beranda",
    doa: "Doa",
    hadith: "Hadith",
    parenting: "Parenting",
    blog: "Blog",
    catatan: "Cerita",
    surah: "Surat Pendek",
    kisah: "Kisah Nabi",
    games: "Permainan",
    apps: "Aplikasi",
    learn: "Belajar",
    play: "Main",
    watch: "Momen",
    parents: "Orang Tua",
    faq: "FAQ",
    about: "Tentang",
    contact: "Kontak",
    support: "Dukung",
    languageSwitch: "Ganti bahasa",
  },
  catatan: {
    indexTitle: "Cerita Baby Mo & Baby Ais",
    indexDescription:
      "Cerita hangat dari Abi dan Umi tentang Baby Mo dan Baby Ais — si kembar usia 2 tahun. Momen-momen kecil tentang akhlak, berbagi, sabar, jujur, dan syukur yang ringan dibaca bareng si kecil.",
    intro:
      "Cerita hangat dari Abi & Umi tentang Baby Mo dan Baby Ais (si kembar, 2 tahun) — tentang akhlak, berbagi, sabar, dan momen-momen kecil yang berkesan. Diperbarui setiap minggu.",
    bySalman: "Abi",
    byUmi: "Umi",
    byline: "Cerita dari Abi & Umi",
    childChip: {
      mo: "Baby Mo (2)",
      ais: "Baby Ais (2)",
      both: "Baby Mo & Baby Ais",
    },
    privacyNote:
      "Nama anak-anak ditulis atas izin keluarga. Detail yang bisa mengidentifikasi (sekolah, lingkungan, foto wajah) tidak dipublikasikan. Suatu saat di masa depan, jika Baby Mo atau Baby Ais meminta, tulisan dapat di-anonimkan atau dihapus.",
    takeaway: "Hikmah kecil hari ini",
    readMore: "Baca ceritanya",
    relatedAnchor: "Terkait cerita ini",
  },
  home: {
    eyebrow: "Konten islami ramah anak",
    heroTitleA: "Pendamping islami",
    heroTitleB: "tumbuh kembang si kecil.",
    heroSub:
      "Doa harian, kisah teladan, dan permainan edukatif yang dirancang untuk anak muslim usia 2–8 tahun. Tenang dibaca orang tua, menyenangkan dimainkan anak.",
    ctaPrimary: "Jelajahi Doa Harian",
    ctaSecondary: "Mainkan Game Gratis",
    sections: {
      doaTitle: "Doa Harian",
      doaSub:
        "Kumpulan doa pilihan dengan teks Arab, transliterasi, dan terjemahan — siap dibaca bersama si kecil.",
      gamesTitle: "Permainan Edukatif",
      gamesSub:
        "Permainan gratis untuk anak muslim — belajar hijaiyah, doa, dan akhlak baik sambil bermain.",
      blogTitle: "Bacaan untuk Orang Tua",
      blogSub:
        "Panduan parenting islami berbasis sumber yang shahih, ditulis dengan empati.",
      ceritaTitle: "Cerita Terbaru",
      ceritaSub:
        "Cerita hangat dari Abi & Umi tentang Baby Mo & Baby Ais — tentang akhlak, berbagi, dan sabar.",
      valuesTitle: "Mengapa Baby Mo",
      valuesSub: "Tiga prinsip yang kami pegang dalam setiap konten.",
      faqTitle: "Pertanyaan Umum",
      faqSub: "Hal yang sering ditanyakan orang tua tentang Baby Mo.",
      followTitle: "Ikuti & Dukung Baby Mo",
      followSub:
        "Konten harian di kanal favoritmu, plus cara mendukung pengembangan Baby Mo.",
      supportTitle: "Dukung Baby Mo",
      supportSub:
        "Setiap dukungan membantu kami menghadirkan konten islami yang lebih baik untuk keluarga muslim.",
    },
    values: [
      {
        title: "Bersumber jelas",
        body:
          "Setiap doa dan hadith disertai sumber dan tingkat keshahihan. Tidak ada konten yang tidak diverifikasi.",
      },
      {
        title: "Ramah anak",
        body:
          "Tanpa iklan eksternal, tanpa data anak yang dikumpulkan, tanpa tautan keluar yang berisiko.",
      },
      {
        title: "Tenang untuk orang tua",
        body:
          "Tipografi besar, kontras tinggi, layout luang. Mudah dibaca di malam hari saat menemani anak.",
      },
    ],
    viewAll: "Lihat semua",
    readMore: "Baca selengkapnya",
  },
  doa: {
    indexTitle: "Doa Harian untuk Anak Muslim",
    indexDescription:
      "Kumpulan doa harian — sebelum tidur, makan, dan aktivitas sehari-hari — lengkap dengan teks Arab, transliterasi, terjemahan, dan sumber yang shahih.",
    arabic: "Teks Arab",
    transliteration: "Transliterasi",
    translation: "Arti",
    source: "Sumber",
    grade: "Tingkat keshahihan",
    ages: "Usia anjuran",
    situations: "Situasi",
    related: "Doa terkait",
    copy: "Salin",
    copied: "Tersalin",
  },
  hadith: {
    indexTitle: "Hadith Pilihan untuk Orang Tua Muslim",
    indexDescription:
      "Hadith pilihan yang relevan untuk parenting islami — dengan teks Arab, terjemahan, perawi, dan tingkat keshahihan. Setiap hadith disertai catatan singkat penerapan dalam mendidik anak.",
    narrator: "Perawi",
    collection: "Kitab",
    grade: "Tingkat keshahihan",
    themes: "Tema",
    parentingNote: "Catatan untuk Orang Tua",
    relatedDoa: "Doa terkait",
  },
  parenting: {
    indexTitle: "Panduan Parenting Islami",
    indexDescription:
      "Panduan praktis untuk situasi yang sering dihadapi keluarga muslim — tantrum, susah tidur, susah makan, dan lainnya. Disertai langkah konkret, doa, dan hadith pendukung.",
    signs: "Tanda yang muncul",
    steps: "Langkah praktis",
    islamicPerspective: "Perspektif islami",
    recommendedDoa: "Doa yang dianjurkan",
    supportingHadith: "Hadith pendukung",
    ageRange: "Rentang usia",
  },
  blog: {
    indexTitle: "Blog Baby Mo",
    indexDescription:
      "Panduan parenting islami, tips mengajarkan hijaiyah, dan cerita teladan untuk keluarga muslim Indonesia.",
    readingTime: "menit baca",
    by: "oleh",
    publishedOn: "Diterbitkan",
    share: "Bagikan",
  },
  pages: {
    about: {
      title: "Tentang Baby Mo",
      description:
        "Baby Mo adalah platform parenting islami yang menggabungkan doa harian, hadith, panduan parenting, dan permainan edukatif untuk anak muslim usia 2–8 tahun.",
    },
    contact: {
      title: "Hubungi Kami",
      description:
        "Hubungi tim Baby Mo via WhatsApp, email, Instagram, TikTok, atau YouTube.",
    },
    privacy: {
      title: "Kebijakan Privasi",
      description:
        "Kebijakan privasi Baby Mo: bagaimana kami melindungi data pengguna dan anak.",
    },
    terms: {
      title: "Syarat & Ketentuan",
      description: "Syarat dan ketentuan penggunaan layanan Baby Mo.",
    },
    games: {
      title: "Permainan Baby Mo",
      description:
        "Permainan islami gratis untuk anak muslim — hijaiyah, doa harian, kosa kata Arab, dan banyak lagi.",
    },
    apps: {
      title: "Aplikasi",
      description:
        "Kumpulan alat & aplikasi yang bisa langsung dipakai orang tua bersama anak — bukan sekadar bacaan.",
    },
    learn: {
      title: "Belajar",
      description:
        "Hadith, akhlak, kisah teladan, dan ilmu untuk anak memahami Islam.",
    },
    play: {
      title: "Main",
      description:
        "Permainan, aktivitas siap cetak, dan kuis seru — belajar sambil bermain.",
    },
    watch: {
      title: "Tonton",
      description:
        "Video, momen, dan nasheed pilihan yang ramah anak.",
    },
    parents: {
      title: "Untuk Orang Tua",
      description:
        "Panduan parenting, artikel, cerita, dan pengaturan untuk menemani perjalanan belajar anak.",
    },
    paths: {
      title: "Jalur Belajar",
      description:
        "Rangkaian belajar berurutan — dari doa, surat, hingga akhlak — yang menuntun anak selangkah demi selangkah.",
    },
    support: {
      title: "Dukung Baby Mo",
      description:
        "Baby Mo gratis dan akan selalu gratis. Sedekahmu membantu kami menjaga semua konten & permainan tetap cuma-cuma untuk keluarga muslim — insya Allah menjadi sedekah jariyah.",
    },
    faq: {
      title: "Pertanyaan yang Sering Ditanyakan",
      description:
        "Jawaban untuk hal yang paling sering ditanyakan orang tua tentang Baby Mo.",
    },
  },
  footer: {
    rights: "Hak cipta dilindungi.",
    explore: "Jelajahi",
    info: "Informasi",
    follow: "Ikuti kami",
    tagline: "Pendamping islami untuk keluarga muslim Indonesia.",
    languageLabel: "Bahasa",
  },
  faq: {
    items: [
      {
        q: "Apakah Baby Mo gratis?",
        a: "Ya. Semua doa, artikel, dan permainan di Baby Mo gratis. Tanpa biaya tersembunyi dan tanpa iklan berbahaya.",
      },
      {
        q: "Untuk usia berapa Baby Mo dirancang?",
        a: "Baby Mo dirancang untuk anak muslim usia 2–8 tahun. Konten parenting kami juga relevan untuk orang tua dengan anak hingga 12 tahun.",
      },
      {
        q: "Bagaimana Baby Mo memverifikasi sumber doa dan hadith?",
        a: "Setiap doa dan hadith ditelusuri sumbernya (Qur'an, hadith), disertai grading (shahih/hasan), dan ditinjau oleh asatidz sebelum diterbitkan.",
      },
      {
        q: "Apakah data anak saya dikumpulkan?",
        a: "Tidak. Baby Mo tidak meminta data pribadi anak. Kami juga tidak menampilkan iklan eksternal pada halaman anak.",
      },
      {
        q: "Apakah ada aplikasi Baby Mo?",
        a: "Aplikasi mobile sedang dalam pengembangan. Sementara, semua konten dan permainan bisa diakses gratis di situs ini.",
      },
      {
        q: "Bagaimana cara mendukung Baby Mo?",
        a: "Subscribe YouTube, follow Instagram & TikTok @babymo.official, atau berbagi tautan ke teman dan keluarga muslim.",
      },
    ],
  },
};

const en: Dict = {
  meta: {
    siteTitle: "Baby Mo — Islamic Parenting Companion",
    siteTagline: "Child-friendly Islamic content",
    siteDescription:
      "Baby Mo is an Islamic parenting platform for Muslim families: daily duas, hadith, parenting guidance, and educational games for children 2–8 years old.",
    keywords:
      "daily duas for kids, islamic parenting, hijaiyah for children, muslim kids content, islamic games, baby mo",
  },
  nav: {
    home: "Home",
    doa: "Duas",
    hadith: "Hadith",
    parenting: "Parenting",
    blog: "Blog",
    catatan: "Stories",
    surah: "Short Surahs",
    kisah: "Prophet Stories",
    games: "Games",
    apps: "Apps",
    learn: "Learn",
    play: "Play",
    watch: "Moments",
    parents: "For Parents",
    faq: "FAQ",
    about: "About",
    contact: "Contact",
    support: "Support",
    languageSwitch: "Switch language",
  },
  catatan: {
    indexTitle: "Baby Mo & Baby Ais Stories",
    indexDescription:
      "Warm little stories from Abi and Umi about Baby Mo and Baby Ais — two-year-old twins. Small moments about good character, sharing, patience, honesty and gratitude — easy to read together with your little one.",
    intro:
      "Warm stories from Abi & Umi about Baby Mo and Baby Ais (the twins, age 2) — about good character, sharing, patience, and the small moments that stay with you. Updated weekly.",
    bySalman: "Abi",
    byUmi: "Umi",
    byline: "Stories from Abi & Umi",
    childChip: {
      mo: "Baby Mo (2)",
      ais: "Baby Ais (2)",
      both: "Baby Mo & Baby Ais",
    },
    privacyNote:
      "The children's first names are used with family consent. Identifying details (school, neighborhood, face photos) are not published. At any point in the future, if Baby Mo or Baby Ais asks, posts can be anonymized or removed.",
    takeaway: "Today's little lesson",
    readMore: "Read the story",
    relatedAnchor: "Related to this story",
  },
  home: {
    eyebrow: "Child-friendly Islamic content",
    heroTitleA: "An Islamic companion",
    heroTitleB: "for raising your child.",
    heroSub:
      "Daily duas, prophetic stories, and educational games designed for Muslim children 2–8 years old. Calm for parents to read, fun for kids to play.",
    ctaPrimary: "Explore Daily Duas",
    ctaSecondary: "Play Free Games",
    sections: {
      doaTitle: "Daily Duas",
      doaSub:
        "A curated collection with Arabic, transliteration, and translation — ready to read with your little one.",
      gamesTitle: "Educational Games",
      gamesSub:
        "Free games for Muslim children — learn the Arabic alphabet, duas, and good manners through play.",
      blogTitle: "Reading for Parents",
      blogSub:
        "Islamic parenting guidance grounded in authentic sources, written with empathy.",
      ceritaTitle: "Latest Stories",
      ceritaSub:
        "Warm stories from Abi & Umi about Baby Mo & Baby Ais — about character, sharing, and patience.",
      valuesTitle: "Why Baby Mo",
      valuesSub: "Three principles we hold in every piece of content.",
      faqTitle: "Common Questions",
      faqSub: "What parents most often ask about Baby Mo.",
      followTitle: "Follow & Support Baby Mo",
      followSub:
        "Daily content on your favorite channels, plus how to support Baby Mo's development.",
      supportTitle: "Support Baby Mo",
      supportSub:
        "Every bit of support helps us bring better Islamic content to Muslim families.",
    },
    values: [
      {
        title: "Sourced",
        body:
          "Every dua and hadith ships with its source and authenticity grading. Nothing unverified.",
      },
      {
        title: "Child-safe",
        body:
          "No third-party ads, no child data collection, no risky outbound links from kid pages.",
      },
      {
        title: "Calm for parents",
        body:
          "Large type, high contrast, generous spacing. Designed to be read at night while a small hand holds yours.",
      },
    ],
    viewAll: "View all",
    readMore: "Read more",
  },
  doa: {
    indexTitle: "Daily Duas for Muslim Children",
    indexDescription:
      "A curated set of daily duas — sleep, meals, daily life — with Arabic, transliteration, translation, and authentic sources.",
    arabic: "Arabic",
    transliteration: "Transliteration",
    translation: "Meaning",
    source: "Source",
    grade: "Authenticity",
    ages: "Recommended ages",
    situations: "Situations",
    related: "Related duas",
    copy: "Copy",
    copied: "Copied",
  },
  hadith: {
    indexTitle: "Selected Hadith for Muslim Parents",
    indexDescription:
      "Curated hadith with practical parenting relevance — Arabic, translation, narrator, and authenticity grade. Each entry carries a short note on how to apply it in raising children.",
    narrator: "Narrator",
    collection: "Collection",
    grade: "Authenticity",
    themes: "Themes",
    parentingNote: "Note for parents",
    relatedDoa: "Related duas",
  },
  parenting: {
    indexTitle: "Islamic Parenting Guides",
    indexDescription:
      "Practical guides for everyday situations in a Muslim family — tantrums, sleep, eating, and more. Each carries concrete steps, recommended duas, and supporting hadith.",
    signs: "Signs",
    steps: "What to do",
    islamicPerspective: "Islamic perspective",
    recommendedDoa: "Recommended duas",
    supportingHadith: "Supporting hadith",
    ageRange: "Age range",
  },
  blog: {
    indexTitle: "Baby Mo Blog",
    indexDescription:
      "Islamic parenting guides, hijaiyah teaching tips, and prophetic stories for Muslim families.",
    readingTime: "min read",
    by: "by",
    publishedOn: "Published",
    share: "Share",
  },
  pages: {
    about: {
      title: "About Baby Mo",
      description:
        "Baby Mo is an Islamic parenting platform combining daily duas, hadith, parenting guidance, and educational games for Muslim children 2–8 years old.",
    },
    contact: {
      title: "Contact",
      description:
        "Reach the Baby Mo team via WhatsApp, email, Instagram, TikTok, or YouTube.",
    },
    privacy: {
      title: "Privacy Policy",
      description: "How Baby Mo protects user and child data.",
    },
    terms: {
      title: "Terms of Service",
      description: "Terms for using Baby Mo's services.",
    },
    games: {
      title: "Baby Mo Games",
      description:
        "Free Islamic games for Muslim children — hijaiyah, daily duas, Arabic vocabulary, and more.",
    },
    apps: {
      title: "Apps",
      description:
        "A growing set of tools parents can use with their kids — not just things to read.",
    },
    learn: {
      title: "Learn",
      description:
        "Hadith, manners, prophet stories, and knowledge to help your child understand Islam.",
    },
    play: {
      title: "Play",
      description:
        "Games, printable activities, and quizzes — learning through play.",
    },
    watch: {
      title: "Watch",
      description:
        "Hand-picked videos, moments, and nasheed that are good for kids.",
    },
    parents: {
      title: "For Parents",
      description:
        "Parenting guides, articles, notes, and settings to support your child's learning journey.",
    },
    paths: {
      title: "Learning Paths",
      description:
        "Step-by-step sequences — from duas and surahs to good character — that guide your child one step at a time.",
    },
    support: {
      title: "Support Baby Mo",
      description:
        "Baby Mo is free and always will be. Your sadaqah helps us keep every piece of content and every game free for Muslim families — may it be a sadaqah jariyah, in shaa Allah.",
    },
    faq: {
      title: "Frequently Asked Questions",
      description: "Answers to what parents most often ask about Baby Mo.",
    },
  },
  footer: {
    rights: "All rights reserved.",
    explore: "Explore",
    info: "Information",
    follow: "Follow us",
    tagline: "An Islamic companion for Muslim families.",
    languageLabel: "Language",
  },
  faq: {
    items: [
      {
        q: "Is Baby Mo free?",
        a: "Yes. All duas, articles, and games on Baby Mo are free. No hidden fees, no harmful ads.",
      },
      {
        q: "What ages is Baby Mo for?",
        a: "Baby Mo is designed for Muslim children 2–8 years old. Our parenting content is also relevant for parents with children up to 12.",
      },
      {
        q: "How does Baby Mo verify dua and hadith sources?",
        a: "Every dua and hadith is traced to its source (Qur'an, hadith), tagged with its grading (sahih/hasan), and reviewed by qualified asatidz before publication.",
      },
      {
        q: "Is my child's data collected?",
        a: "No. Baby Mo asks for no personal data from children, and we do not display third-party ads on child-facing pages.",
      },
      {
        q: "Is there a Baby Mo app?",
        a: "A mobile app is in development. For now, all content and games are accessible free on this site.",
      },
      {
        q: "How can I support Baby Mo?",
        a: "Subscribe on YouTube, follow Instagram & TikTok @babymo.official, or share Baby Mo with Muslim friends and family.",
      },
    ],
  },
};

const dictionaries: Record<Locale, Dict> = { id, en };

export function getDictionary(locale: Locale): Dict {
  return dictionaries[locale];
}

export type Dictionary = Dict;
