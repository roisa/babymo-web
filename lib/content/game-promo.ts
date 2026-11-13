import type { Locale } from "@/lib/i18n/config";

/**
 * Promo copy for the Permainan page: a punchy hook, a short pitch, the age
 * range, the skills each game builds and which learning group it sits in.
 * Kept separate from games.ts so the core list stays simple.
 */
export type GameGroupKey = "ibadah" | "arab" | "akhlak" | "fokus" | "santai";

export const GAME_GROUPS: {
  key: GameGroupKey;
  emoji: string;
  title: Record<Locale, string>;
  line: Record<Locale, string>;
  slugs: string[];
}[] = [
  {
    key: "ibadah",
    emoji: "🤲",
    title: { id: "Doa & Ibadah", en: "Du'a & Worship" },
    line: {
      id: "Dari doa bangun tidur sampai gerakan sholat — belajar ibadah dengan suara, gambar, dan kuis.",
      en: "From the waking-up du'a to the movements of prayer — learning worship with sound, pictures and quizzes.",
    },
    slugs: ["doa-harian", "doa-ramadan", "dua-journey", "wudhu", "pray-with-mo", "tasbih", "streak-sholat-mo"],
  },
  {
    key: "arab",
    emoji: "🔤",
    title: { id: "Huruf & Kata Arab", en: "Arabic Letters & Words" },
    line: {
      id: "Kenalan dengan huruf hijaiyah dan kata Arab pertama — sambil menjelajah dan menyusun.",
      en: "Meet the hijaiyah letters and first Arabic words — by exploring and building.",
    },
    slugs: ["huruf-hijaiyah", "hijaiyah", "kata-islam"],
  },
  {
    key: "akhlak",
    emoji: "💖",
    title: { id: "Kenalan & Akhlak", en: "Meet Baby Mo & Good Character" },
    line: {
      id: "Berkenalan, belajar ucapan baik, menyayangi hewan, dan berbagi hasil kebun.",
      en: "Say hello, learn good words, be kind to animals and share the harvest.",
    },
    slugs: ["puzzle", "kata-baik", "sahabat-hewan", "kebun-ais"],
  },
  {
    key: "fokus",
    emoji: "🧠",
    title: { id: "Asah Fokus & Ingatan", en: "Focus & Memory" },
    line: {
      id: "Mata jeli dan ingatan kuat — tantangan yang bikin si kecil minta main lagi.",
      en: "Sharp eyes and a strong memory — challenges that make little ones ask for one more round.",
    },
    slugs: ["memory-match", "cari-baby-mo"],
  },
  {
    key: "santai",
    emoji: "🎵",
    title: { id: "Gerak & Santai", en: "Move & Wind Down" },
    line: {
      id: "Latihan tenis bersama Kak Adam, melompat mengikuti irama, lalu bersiap tidur dengan tenang.",
      en: "Tennis practice with Kak Adam, jumping to the beat, then getting calm before bed.",
    },
    slugs: ["tenis-adam", "forehand-beat", "dreamtime"],
  },
];

export const GAME_PROMO: Record<
  string,
  { hook: Record<Locale, string>; pitch: Record<Locale, string>; ages: string; skills: Record<Locale, string[]> }
> = {
  puzzle: {
    hook: { id: "Siapa yang bersembunyi di balik petak-petak ini?", en: "Who's hiding behind these tiles?" },
    pitch: {
      id: "Ketuk sembilan petak satu per satu sampai Baby Mo muncul. Cara paling seru untuk berkenalan — pas untuk yang baru pertama kali main.",
      en: "Tap the nine tiles one by one until Baby Mo appears. The most fun way to say hello — perfect for a very first game.",
    },
    ages: "2–6",
    skills: { id: ["Rasa ingin tahu", "Koordinasi tangan"], en: ["Curiosity", "Hand coordination"] },
  },
  "doa-harian": {
    hook: { id: "Doa dari pagi sampai malam, dengan suara Arab asli.", en: "Du'as from morning to night, in real Arabic audio." },
    pitch: {
      id: "14 doa harian dari bangun tidur sampai tidur lagi — kata menyala satu per satu mengikuti suara Arab asli, bisa diperlambat dan diulang, lengkap dengan arti.",
      en: "14 daily du'as from waking up to bedtime — each word lights up with the real Arabic audio, can be slowed down and repeated, with the meaning.",
    },
    ages: "3–7",
    skills: { id: ["Hafalan doa", "Mendengar"], en: ["Memorising du'as", "Listening"] },
  },
  "dua-journey": {
    hook: { id: "Doa yang mana untuk momen ini?", en: "Which du'a fits this moment?" },
    pitch: {
      id: "Cocokkan kartu doa dengan situasinya. Tiga level — dari 3 doa untuk pemula sampai 8 doa untuk juara.",
      en: "Match each du'a card to its situation. Three levels — from 3 du'as for beginners to 8 for champions.",
    },
    ages: "3–7",
    skills: { id: ["Ingatan", "Memahami doa"], en: ["Memory", "Understanding du'as"] },
  },
  "kata-islam": {
    hook: { id: "Susun huruf Arab jadi kata pertamamu.", en: "Build your first Arabic words, letter by letter." },
    pitch: {
      id: "21 kata dari keluarga, ibadah, dan alam — Ummi, Abi, bayt — disusun huruf demi huruf sambil mendengar cara membacanya.",
      en: "21 words about family, worship and nature — Ummi, Abi, bayt — built letter by letter while hearing how they're read.",
    },
    ages: "4–8",
    skills: { id: ["Huruf Arab", "Kosakata"], en: ["Arabic letters", "Vocabulary"] },
  },
  dreamtime: {
    hook: { id: "Gosok gigi, ganti baju, berdoa, lalu tidur.", en: "Brush teeth, change clothes, pray, then sleep." },
    pitch: {
      id: "Empat langkah rutinitas malam yang menenangkan bersama Baby Mo — membantu si kecil bersiap tidur tanpa drama.",
      en: "A calming four-step bedtime routine with Baby Mo — helping little ones get ready for sleep without the drama.",
    },
    ages: "2–5",
    skills: { id: ["Rutinitas malam", "Doa tidur"], en: ["Bedtime routine", "Sleep du'a"] },
  },
  hijaiyah: {
    hook: { id: "Jelajahi pulau dan temukan 28 huruf hijaiyah.", en: "Explore an island and find all 28 Arabic letters." },
    pitch: {
      id: "Petualangan di dunia kotak-kotak: jalan-jalan, gali, bangun, dan cari huruf hijaiyah yang tersembunyi di seluruh pulau — lengkap dengan suaranya.",
      en: "An adventure in a blocky world: walk, dig, build and hunt for the hijaiyah letters hidden all over the island — each one with its sound.",
    },
    ages: "5–8",
    skills: { id: ["Huruf hijaiyah", "Eksplorasi"], en: ["Hijaiyah letters", "Exploration"] },
  },
  "cari-baby-mo": {
    hook: { id: "Baby Mo sedang bersembunyi. Bisa temukan dia?", en: "Baby Mo is hiding. Can you find him?" },
    pitch: {
      id: "Kamar, ruang keluarga, taman mimpi, pasar Ramadan — temukan lima benda dan Baby Mo di setiap tempat.",
      en: "A bedroom, a living room, a dream garden, a Ramadan market — find five objects and Baby Mo in every place.",
    },
    ages: "3–7",
    skills: { id: ["Ketelitian", "Fokus"], en: ["Attention to detail", "Focus"] },
  },
  "memory-match": {
    hook: { id: "Balik dua kartu. Ingat-ingat letaknya!", en: "Flip two cards. Remember where they are!" },
    pitch: {
      id: "Dari 4 kartu untuk balita sampai 20 kartu untuk juara — melatih daya ingat dengan gambar islami yang ceria.",
      en: "From 4 cards for toddlers to 20 for champions — training memory with cheerful Islamic pictures.",
    },
    ages: "2–8",
    skills: { id: ["Daya ingat", "Konsentrasi"], en: ["Memory", "Concentration"] },
  },
  "forehand-beat": {
    hook: { id: "Ketuk, lompat, dan terbang mengikuti irama!", en: "Tap, jump and fly to the beat!" },
    pitch: {
      id: "Game ritme yang ceria: ketuk untuk melompat, ketuk tiga kali untuk terbang, kumpulkan bintang tanpa kehilangan nyawa.",
      en: "A cheerful rhythm game: tap to jump, tap three times to soar, and collect stars without losing a life.",
    },
    ages: "3–8",
    skills: { id: ["Ritme", "Refleks"], en: ["Rhythm", "Reflexes"] },
  },
  "kata-baik": {
    hook: { id: "Ucapan baik apa yang tersembunyi di sini?", en: "Which good words are hiding here?" },
    pitch: {
      id: "Buka petak teka-teki dan temukan kalimat thayyibah — Subhanallah, Insya Allah, Alhamdulillah — beserta kapan mengucapkannya.",
      en: "Open the puzzle tiles to discover kalimat thayyibah — Subhanallah, Insha Allah, Alhamdulillah — and when to say them.",
    },
    ages: "3–7",
    skills: { id: ["Kalimat thayyibah", "Akhlak"], en: ["Kalimat thayyibah", "Good character"] },
  },
  wudhu: {
    hook: { id: "Wudhu dulu, baru sholat — bareng Mo!", en: "Wudu first, then prayer — with Mo!" },
    pitch: {
      id: "Sepuluh langkah wudhu dari niat sampai doa, dengan Baby Mo asli di depan keran. Ketuk tombol air untuk membasuh, lalu uji hafalan lewat game urutkan.",
      en: "Ten wudu steps from the intention to the du'a, with the real Baby Mo at the tap. Tap the water button to wash, then test yourself with the ordering game.",
    },
    ages: "3–7",
    skills: { id: ["Tata cara wudhu", "Urutan & ingatan"], en: ["How to do wudu", "Order & memory"] },
  },
  "pray-with-mo": {
    hook: { id: "Belajar sholat, gerakan demi gerakan.", en: "Learn to pray, one movement at a time." },
    pitch: {
      id: "Panduan sholat 7 langkah dengan gambar, bacaan Arab, dan audio — ditambah waktu sholat dan dzikir setelahnya.",
      en: "A 7-step prayer guide with pictures, Arabic recitation and audio — plus prayer times and dhikr afterwards.",
    },
    ages: "5–8",
    skills: { id: ["Gerakan sholat", "Bacaan sholat"], en: ["Prayer movements", "Recitation"] },
  },
  "streak-sholat-mo": {
    hook: { id: "Jaga semangat sholat 5 waktu, setiap hari.", en: "Keep the five daily prayers going, every day." },
    pitch: {
      id: "Jadwal sholat sesuai kotamu, arah kiblat, kalender hijriah, dan streak harian untuk merayakan setiap sholat yang dijaga.",
      en: "Prayer times for your city, the qibla direction, a Hijri calendar and a daily streak that celebrates every prayer kept.",
    },
    ages: "6+",
    skills: { id: ["Kebiasaan sholat", "Arah kiblat"], en: ["Prayer habit", "Qibla"] },
  },
  "huruf-hijaiyah": {
    hook: { id: "Dari alif sampai ya, satu huruf satu suara.", en: "From alif to ya, one letter, one sound." },
    pitch: {
      id: "28 huruf hijaiyah dalam 9 pelajaran bertahap: dengar suaranya, tulis mengikuti titik, lalu tangkap hurufnya di balon dan kuis.",
      en: "The 28 hijaiyah letters in 9 step-by-step lessons: hear each sound, trace it along the dots, then catch it in balloons and quizzes.",
    },
    ages: "4–8",
    skills: { id: ["Huruf hijaiyah", "Menulis"], en: ["Hijaiyah letters", "Tracing"] },
  },
  "sahabat-hewan": {
    hook: { id: "Hewan juga butuh disayang.", en: "Animals need love too." },
    pitch: {
      id: "Beri makan dengan Bismillah, beri minum, bersihkan, dan elus pelan-pelan. Ambil telur dan susu, lalu berbagi — sambil belajar adab kepada hewan.",
      en: "Feed with Bismillah, give water, clean up and stroke gently. Collect eggs and milk, then share — while learning kindness to animals.",
    },
    ages: "3–7",
    skills: { id: ["Kasih sayang", "Tanggung jawab"], en: ["Kindness", "Responsibility"] },
  },
  "kebun-ais": {
    hook: { id: "Tanam hari ini, berbagi esok hari.", en: "Plant today, share tomorrow." },
    pitch: {
      id: "Berkebun bersama Ais: pilih benih, siram, cabut rumput, panen tomat dan stroberi, lalu bagikan kepada tetangga.",
      en: "Garden with Ais: pick seeds, water, pull the weeds, harvest tomatoes and strawberries, then share them with the neighbours.",
    },
    ages: "3–7",
    skills: { id: ["Sabar", "Berbagi"], en: ["Patience", "Sharing"] },
  },
  "tenis-adam": {
    hook: { id: "Pukul bolanya bersama Kak Adam!", en: "Hit the ball with Kak Adam!" },
    pitch: {
      id: "Akademi tenis langkah demi langkah: tunggu pantulan, forehand, backhand dua tangan, servis, sampai menghitung skor — dengan bintang di setiap pelajaran.",
      en: "A step-by-step tennis academy: wait for the bounce, forehand, two-handed backhand, serving and scoring — with stars for every lesson.",
    },
    ages: "4–8",
    skills: { id: ["Koordinasi", "Sportivitas"], en: ["Coordination", "Sportsmanship"] },
  },
  "doa-ramadan": {
    hook: { id: "Sambut Ramadan dengan doanya.", en: "Welcome Ramadan with its du'as." },
    pitch: {
      id: "11 doa Ramadan dengan suara Arab asli: melihat hilal, niat puasa, berbuka, Lailatul Qadr, zakat, sampai takbir Idul Fitri.",
      en: "11 Ramadan du'as with real Arabic audio: seeing the crescent, the intention to fast, breaking the fast, Laylatul Qadr, zakat and the Eid takbir.",
    },
    ages: "3–8",
    skills: { id: ["Doa Ramadan", "Puasa"], en: ["Ramadan du'as", "Fasting"] },
  },
  tasbih: {
    hook: { id: "Tasbih sebelum tidur, manik demi manik.", en: "Bedtime tasbih, bead by bead." },
    pitch: {
      id: "Subhanallah 33, Alhamdulillah 33, Allahu akbar 34 — ketuk untuk menghitung bersama Baby Mo, dengan versi singkat untuk si kecil.",
      en: "Subhanallah 33, Alhamdulillah 33, Allahu akbar 34 — tap to count along with Baby Mo, with a short version for little ones.",
    },
    ages: "3–8",
    skills: { id: ["Dzikir", "Menghitung"], en: ["Dhikr", "Counting"] },
  },
};
