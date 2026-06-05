import type { Locale } from "@/lib/i18n/config";

/**
 * Teman Tumbuh — the daily "misi kebaikan" deck. One small, joyful deed a
 * day for a child: akhlak (character), ibadah (small worship habits), doa,
 * or ilmu (knowing Allah / the deen). Many link into existing Baby Mo
 * content so the ritual also pulls families deeper into the site.
 *
 * The mission of the day is chosen deterministically by day-index, so it is
 * stable for the whole day and the same for everyone (shareable).
 */
export type MissionCategory = "akhlak" | "ibadah" | "doa" | "ilmu";

export type Mission = {
  id: string;
  category: MissionCategory;
  emoji: string;
  /** Short imperative, child-directed. */
  title: Record<Locale, string>;
  /** One warm line of encouragement / the "why". */
  detail: Record<Locale, string>;
  /** Optional deep link into existing content. */
  link?: { href: string; label: Record<Locale, string> };
};

export const CATEGORY_LABEL: Record<MissionCategory, Record<Locale, string>> = {
  akhlak: { id: "Akhlak", en: "Character" },
  ibadah: { id: "Ibadah", en: "Worship" },
  doa: { id: "Doa", en: "Du'a" },
  ilmu: { id: "Mengenal Allah", en: "Knowing Allah" },
};

export const missions: Mission[] = [
  {
    id: "bismillah-makan",
    category: "ibadah",
    emoji: "🍎",
    title: { id: "Bismillah dulu sebelum makan", en: "Say Bismillah before eating" },
    detail: {
      id: "Awali makanmu hari ini dengan menyebut nama Allah. Yuk nyanyikan lagunya bareng Baby Mo!",
      en: "Begin your meal today by saying Allah's name. Sing the song with Baby Mo!",
    },
    link: { href: "/doa/sebelum-makan", label: { id: "Doa sebelum makan", en: "Du'a before eating" } },
  },
  {
    id: "senyum-sedekah",
    category: "akhlak",
    emoji: "😊",
    title: { id: "Senyum kepada tiga orang", en: "Smile at three people" },
    detail: {
      id: "Senyummu kepada saudaramu adalah sedekah. Beri senyum tulus pada tiga orang hari ini.",
      en: "Your smile to others is a charity. Give a warm smile to three people today.",
    },
  },
  {
    id: "terima-kasih",
    category: "akhlak",
    emoji: "💛",
    title: { id: "Ucapkan terima kasih", en: "Say thank you" },
    detail: {
      id: "Siapa yang tidak berterima kasih kepada manusia, ia tidak bersyukur kepada Allah. Ucapkan terima kasih pada Ayah atau Bunda.",
      en: "Whoever does not thank people does not thank Allah. Say thank you to your mom or dad.",
    },
  },
  {
    id: "doa-sebelum-tidur",
    category: "doa",
    emoji: "🌙",
    title: { id: "Doa sebelum tidur", en: "Du'a before sleeping" },
    detail: {
      id: "Sebelum tidur malam ini, baca doa agar tidurmu dijaga Allah. Hafalkan sedikit demi sedikit.",
      en: "Before sleeping tonight, read the du'a so Allah watches over your sleep. Learn it bit by bit.",
    },
    link: { href: "/doa/sebelum-tidur", label: { id: "Doa sebelum tidur", en: "Du'a before sleeping" } },
  },
  {
    id: "salam-rumah",
    category: "akhlak",
    emoji: "🏡",
    title: { id: "Ucapkan salam saat masuk rumah", en: "Give salam when entering home" },
    detail: {
      id: "Assalamualaikum membawa keberkahan ke dalam rumah. Ucapkan salam saat masuk hari ini.",
      en: "Assalamualaikum brings blessing into the home. Say salam as you enter today.",
    },
  },
  {
    id: "beberes-mainan",
    category: "akhlak",
    emoji: "🧸",
    title: { id: "Rapikan mainanmu sendiri", en: "Tidy up your own toys" },
    detail: {
      id: "Kebersihan sebagian dari iman. Rapikan mainanmu tanpa diminta hari ini.",
      en: "Cleanliness is part of faith. Tidy up your toys without being asked today.",
    },
  },
  {
    id: "berbagi-mainan",
    category: "akhlak",
    emoji: "🤝",
    title: { id: "Berbagi dengan teman", en: "Share with a friend" },
    detail: {
      id: "Berbagi membuat hati senang dan dicintai Allah. Bagikan mainan atau makananmu hari ini.",
      en: "Sharing makes the heart happy and is loved by Allah. Share a toy or your food today.",
    },
  },
  {
    id: "kenal-ar-rahman",
    category: "ilmu",
    emoji: "🌷",
    title: { id: "Kenali nama Allah: Ar-Rahman", en: "Know Allah's name: Ar-Rahman" },
    detail: {
      id: "Allah Maha Pengasih kepada semua makhluk. Sebutkan satu kasih sayang Allah yang kamu rasakan hari ini.",
      en: "Allah is the Most Compassionate to all. Name one of Allah's mercies you felt today.",
    },
    link: { href: "/asmaul-husna", label: { id: "99 Asmaul Husna", en: "99 Names of Allah" } },
  },
  {
    id: "alhamdulillah",
    category: "ibadah",
    emoji: "✨",
    title: { id: "Ucapkan Alhamdulillah", en: "Say Alhamdulillah" },
    detail: {
      id: "Sebutkan satu hal yang kamu syukuri hari ini, lalu ucapkan Alhamdulillah dari hati.",
      en: "Name one thing you're grateful for today, then say Alhamdulillah from the heart.",
    },
  },
  {
    id: "cium-tangan",
    category: "akhlak",
    emoji: "🙌",
    title: { id: "Cium tangan orang tua", en: "Kiss your parents' hand" },
    detail: {
      id: "Rida Allah ada pada rida orang tua. Cium tangan Ayah dan Bunda hari ini.",
      en: "Allah's pleasure lies in your parents' pleasure. Kiss your mom and dad's hand today.",
    },
  },
  {
    id: "ikut-sholat",
    category: "ibadah",
    emoji: "🕌",
    title: { id: "Ikut sholat di samping orang tua", en: "Pray beside your parents" },
    detail: {
      id: "Berdirilah ikut sholat di samping Ayah atau Bunda, walau hanya beberapa gerakan.",
      en: "Stand and pray beside your mom or dad, even just for a few movements.",
    },
    link: { href: "/sholat", label: { id: "Bacaan sholat", en: "Prayer recitations" } },
  },
  {
    id: "sabar-menunggu",
    category: "akhlak",
    emoji: "⏳",
    title: { id: "Sabar menunggu giliran", en: "Wait your turn patiently" },
    detail: {
      id: "Allah bersama orang-orang yang sabar. Tunggu giliranmu dengan tenang dan tersenyum.",
      en: "Allah is with the patient. Wait your turn calmly and with a smile.",
    },
  },
  {
    id: "sayang-hewan",
    category: "akhlak",
    emoji: "🐱",
    title: { id: "Sayangi seekor hewan", en: "Be kind to an animal" },
    detail: {
      id: "Rasulullah ﷺ mengajarkan kasih sayang pada hewan. Beri makan atau elus seekor hewan hari ini.",
      en: "The Prophet ﷺ taught kindness to animals. Feed or gently pet an animal today.",
    },
  },
  {
    id: "jujur",
    category: "akhlak",
    emoji: "💎",
    title: { id: "Berkata jujur", en: "Tell the truth" },
    detail: {
      id: "Kejujuran membawa kepada kebaikan dan surga. Berkata jujur walau terasa sulit.",
      en: "Honesty leads to goodness and Paradise. Tell the truth even when it's hard.",
    },
  },
  {
    id: "doa-orang-tua",
    category: "doa",
    emoji: "🤲",
    title: { id: "Doakan Ayah dan Bunda", en: "Pray for your parents" },
    detail: {
      id: "Ucapkan: Rabbighfirlii wa liwaalidayya — Ya Allah, ampunilah aku dan kedua orang tuaku.",
      en: "Say: Rabbighfirlii wa liwaalidayya — O Allah, forgive me and my parents.",
    },
  },
  {
    id: "suara-lembut",
    category: "akhlak",
    emoji: "🕊️",
    title: { id: "Bicara dengan suara lembut", en: "Speak gently" },
    detail: {
      id: "Seburuk-buruk suara adalah suara yang keras. Bicaralah lembut dan tidak berteriak hari ini.",
      en: "The worst of voices is the harsh one. Speak softly and don't shout today.",
    },
  },
  {
    id: "sedekah-koin",
    category: "ibadah",
    emoji: "🪙",
    title: { id: "Sedekah satu koin", en: "Give one coin in charity" },
    detail: {
      id: "Sedekah tidak mengurangi harta. Masukkan satu koin ke kotak amal atau beri pada yang membutuhkan.",
      en: "Charity never decreases wealth. Put one coin in the charity box or give to someone in need.",
    },
  },
  {
    id: "gosok-gigi",
    category: "ibadah",
    emoji: "🪥",
    title: { id: "Bersihkan diri dengan rapi", en: "Keep yourself clean" },
    detail: {
      id: "Allah mencintai kebersihan. Gosok gigi dan rapikan dirimu hari ini.",
      en: "Allah loves cleanliness. Brush your teeth and tidy yourself today.",
    },
  },
  {
    id: "lagu-baby-mo",
    category: "doa",
    emoji: "🎵",
    title: { id: "Nyanyikan lagu doa bareng Baby Mo", en: "Sing a du'a song with Baby Mo" },
    detail: {
      id: "Belajar sambil bernyanyi membuat doa cepat hafal. Nyanyikan satu lagu Baby Mo hari ini.",
      en: "Learning through song helps a du'a stick. Sing one Baby Mo song today.",
    },
    link: { href: "/momen", label: { id: "Lihat video Baby Mo", en: "Watch Baby Mo videos" } },
  },
  {
    id: "minta-maaf",
    category: "akhlak",
    emoji: "🌈",
    title: { id: "Minta maaf bila salah", en: "Apologize if you're wrong" },
    detail: {
      id: "Orang yang kuat adalah yang mau meminta maaf. Bila kamu berbuat salah, ucapkan maaf hari ini.",
      en: "The strong one is who can apologize. If you did wrong, say sorry today.",
    },
  },
  {
    id: "bantu-bunda",
    category: "akhlak",
    emoji: "🧹",
    title: { id: "Bantu Bunda satu pekerjaan", en: "Help mom with one task" },
    detail: {
      id: "Menolong keluarga adalah amal yang dicintai. Tawarkan satu bantuan kecil pada Bunda hari ini.",
      en: "Helping family is a beloved deed. Offer one small help to your mom today.",
    },
  },
  {
    id: "tahan-marah",
    category: "akhlak",
    emoji: "🌬️",
    title: { id: "Tahan marah dengan istighfar", en: "Calm anger with istighfar" },
    detail: {
      id: "Bila kesal, tarik napas dan ucapkan Astaghfirullah. Orang kuat adalah yang menahan marahnya.",
      en: "When upset, breathe and say Astaghfirullah. The strong one controls their anger.",
    },
  },
  {
    id: "puji-teman",
    category: "akhlak",
    emoji: "⭐",
    title: { id: "Puji kebaikan temanmu", en: "Praise a friend's kindness" },
    detail: {
      id: "Kata-kata baik adalah sedekah. Katakan satu hal baik tentang teman atau saudaramu hari ini.",
      en: "Kind words are charity. Say one good thing about a friend or sibling today.",
    },
  },
  {
    id: "kenal-al-khaliq",
    category: "ilmu",
    emoji: "🌍",
    title: { id: "Kenali nama Allah: Al-Khaliq", en: "Know Allah's name: Al-Khaliq" },
    detail: {
      id: "Allah Maha Pencipta. Perhatikan satu ciptaan Allah yang indah hari ini — bunga, langit, atau dirimu sendiri.",
      en: "Allah is the Creator. Notice one beautiful creation of Allah today — a flower, the sky, or yourself.",
    },
    link: { href: "/asmaul-husna", label: { id: "99 Asmaul Husna", en: "99 Names of Allah" } },
  },
  {
    id: "kisah-nabi",
    category: "ilmu",
    emoji: "📖",
    title: { id: "Dengar satu kisah nabi", en: "Hear a prophet's story" },
    detail: {
      id: "Dari kisah para nabi kita belajar akhlak mulia. Dengar satu kisah nabi sebelum tidur malam ini.",
      en: "From the prophets' stories we learn noble character. Hear one prophet's story before bed tonight.",
    },
    link: { href: "/kisah", label: { id: "Kisah 25 Nabi", en: "Stories of the 25 Prophets" } },
  },
  {
    id: "berbagi-makanan",
    category: "akhlak",
    emoji: "🍪",
    title: { id: "Berbagi makananmu", en: "Share your food" },
    detail: {
      id: "Memberi makan adalah amal yang mulia. Bagikan sebagian makananmu kepada orang lain hari ini.",
      en: "Feeding others is a noble deed. Share some of your food with someone today.",
    },
  },
  {
    id: "dzikir-pagi",
    category: "doa",
    emoji: "🌅",
    title: { id: "Dzikir pagi yang pendek", en: "A short morning dhikr" },
    detail: {
      id: "Ucapkan Subhanallah, Alhamdulillah, dan Allahu Akbar di pagi hari — ringan di lisan, berat di timbangan.",
      en: "Say Subhanallah, Alhamdulillah, and Allahu Akbar in the morning — light on the tongue, heavy on the scale.",
    },
    link: { href: "/dzikir", label: { id: "Dzikir pagi & petang", en: "Morning & evening dhikr" } },
  },
  {
    id: "hormati-tua",
    category: "akhlak",
    emoji: "👵",
    title: { id: "Hormati yang lebih tua", en: "Respect your elders" },
    detail: {
      id: "Bukan dari golongan kami yang tidak menghormati yang lebih tua. Sapa dan hormati orang yang lebih tua hari ini.",
      en: "Not one of us is whoever doesn't respect elders. Greet and honor someone older today.",
    },
  },
  {
    id: "main-belajar",
    category: "ilmu",
    emoji: "🎮",
    title: { id: "Belajar sambil bermain", en: "Learn through play" },
    detail: {
      id: "Mainkan satu permainan Baby Mo dan belajar hal baru tentang Islam hari ini.",
      en: "Play one Baby Mo game and learn something new about Islam today.",
    },
    link: { href: "/permainan", label: { id: "Permainan Baby Mo", en: "Baby Mo games" } },
  },
  {
    id: "doa-bangun-tidur",
    category: "doa",
    emoji: "🌞",
    title: { id: "Doa saat bangun tidur", en: "Du'a on waking up" },
    detail: {
      id: "Mulai harimu dengan bersyukur kepada Allah yang menghidupkanmu kembali. Baca doa bangun tidur.",
      en: "Start your day by thanking Allah who brought you back to life. Read the waking du'a.",
    },
    link: { href: "/doa/bangun-tidur", label: { id: "Doa bangun tidur", en: "Du'a on waking" } },
  },
];

/** Stable day-index — same reckoning as lib/streak.ts and doa-of-the-day. */
export function dayIndex(now: Date = new Date()): number {
  return Math.floor(now.getTime() / 86_400_000);
}

export function getMissionOfTheDay(now: Date = new Date()): Mission {
  return missions[dayIndex(now) % missions.length]!;
}
