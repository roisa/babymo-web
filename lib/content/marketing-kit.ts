/**
 * Content for babymo.id/marketing-kit — the team's playbook for promoting the Baby Mo app:
 * positioning, audiences, channels, calendar, reel scripts, story sequences, captions,
 * ad copy, outreach templates and rules. Every caption comes in Bahasa Indonesia and English.
 * No prices anywhere (the App Store shows the price per country).
 */
export type Bi = { id: string; en: string };

export const APP_URL = "https://apps.apple.com/app/baby-mo-islamic-kids-games/id6831891898";
export const APP_ID = "6831891898";

export const POSITIONING: Bi = {
  id: "Baby Mo adalah teman kecil belajar Islam untuk anak 2–8 tahun: doa, sholat, wudhu, dan huruf hijaiyah lewat 19 game yang hangat — tanpa iklan, tanpa akun, bisa offline. Layar yang bikin Ayah Bunda tenang.",
  en: "Baby Mo is a little friend for learning Islam, for children aged 2–8: du'as, prayer, wudu and Arabic letters through 19 warm games — no ads, no accounts, works offline. Screen time that puts parents at ease.",
};

export const MESSAGES: { t: Bi; d: Bi }[] = [
  { t: { id: "Screen time yang menenangkan hati", en: "Screen time you feel good about" },
    d: { id: "Tanpa iklan, tanpa chat, tanpa akun. Progres hanya di perangkat.", en: "No ads, no chat, no accounts. Progress stays on the device." } },
  { t: { id: "Belajar Islam sambil bermain", en: "Learning Islam through play" },
    d: { id: "19 game: doa harian, sholat, wudhu, huruf hijaiyah, Susun Huruf, berkebun, merawat hewan, tenis.", en: "19 games: daily du'as, prayer, wudu, Arabic letters, Build the Word, gardening, caring for animals, tennis." } },
  { t: { id: "Suara Arab yang jelas dan pelan", en: "A clear, slow Arabic voice" },
    d: { id: "Setiap doa dibacakan suara Mo, bisa diperlambat dan diulang.", en: "Every du'a is read aloud in Mo's voice, can be slowed down and repeated." } },
  { t: { id: "Ikut keseharian keluarga", en: "Part of the family's day" },
    d: { id: "Doa pagi sampai tidur, jadwal sholat, Apple Watch, dan doa naik kendaraan lewat CarPlay.", en: "Du'as from morning to bedtime, prayer times, Apple Watch, and the travel du'a through CarPlay." } },
  { t: { id: "Merayakan Ramadan bersama", en: "Celebrating Ramadan together" },
    d: { id: "Saat Ramadan tampilan app berganti otomatis, plus 11 doa Ramadan.", en: "The app dresses up for Ramadan automatically, plus 11 Ramadan du'as." } },
];

export const TONE: Bi = {
  id: "Hangat, sederhana, seperti teman sesama orang tua. Kalimat pendek. Sapa dengan 'Ayah Bunda'. Pakai emoji secukupnya (🌙🤲✨). Hindari klaim berlebihan dan nada menggurui.",
  en: "Warm, simple, like one parent talking to another. Short sentences. Address 'mums and dads'. A few emoji (🌙🤲✨). No over-claiming, no preaching.",
};

export const PERSONAS: { name: string; who: string; cares: string; msg: string; where: string; lang: string }[] = [
  { name: "Bunda urban muslim", who: "Indonesian mums 25–38, 1–3 children aged 2–8, iPhone or iPad at home, often working",
    cares: "Wants screen time that is safe and meaningful; worries about ads, YouTube autoplay and strangers",
    msg: "“Tanpa iklan, tanpa akun — si kecil belajar doa dengan suara yang jelas.”", where: "Instagram Reels & Stories, TikTok, WhatsApp groups (school, family, majelis taklim)", lang: "ID" },
  { name: "Ayah yang sibuk", who: "Fathers 28–42 who drive the kids, often own an Apple Watch",
    cares: "Small daily habits: du'a before travelling, prayer on time, quality time on weekends",
    msg: "“Mo membacakan doa naik kendaraan lewat speaker mobil.”", where: "Instagram, YouTube Shorts, WhatsApp status, mosque & office communities", lang: "ID" },
  { name: "Guru PAUD / TK Islam / TPA", who: "Teachers and school owners using an iPad in class",
    cares: "Ready-made material for du'a, wudu and hijaiyah; something children enjoy",
    msg: "“Belajar wudhu 10 langkah dan 28 huruf hijaiyah — bisa offline di kelas.”", where: "Facebook groups, WhatsApp, school visits, teacher communities", lang: "ID" },
  { name: "Malaysia · Singapura · Brunei", who: "Muslim parents who read Indonesian or English",
    cares: "Same values, iPhone-heavy markets, strong Ramadan & Raya moments",
    msg: "Use the EN set or ID set; Ramadan and Raya content works best", where: "Instagram, TikTok, Facebook", lang: "ID / EN" },
  { name: "Muslim families abroad", who: "English-speaking Muslim parents in the UK, US, Australia, Canada and the Gulf",
    cares: "Keeping Islamic identity at home; few child-friendly Islamic apps without ads",
    msg: "“Islamic learning games with no ads and no accounts — in English and Indonesian.”", where: "Instagram, Facebook groups for Muslim mums, Islamic school newsletters", lang: "EN" },
];

export const CHANNELS: { ch: string; what: string; cadence: string }[] = [
  { ch: "Instagram", what: "Reels (reach), Stories (daily touch, polls, link sticker), carousels (save & share), highlights", cadence: "3 Reels · 2 feed posts · Stories daily" },
  { ch: "TikTok", what: "The same Reels, native text, reply to comments with short videos", cadence: "3–5 videos a week" },
  { ch: "YouTube Shorts", what: "The same Reels; link the App Store page in the channel header", cadence: "3 a week" },
  { ch: "WhatsApp", what: "Status with stories; one broadcast per launch moment to parent and school groups (always ask before adding people)", cadence: "Status 3× a week · broadcast at launches" },
  { ch: "Facebook", what: "Groups for Muslim mums and PAUD/TK teachers; page posts with banners", cadence: "2 a week" },
  { ch: "Creators", what: "Micro Muslim-parenting creators (5k–50k followers) and teachers: a real family/classroom moment with the app", cadence: "4–6 creators a month" },
  { ch: "Apple Search Ads", what: "Ads on App Store search for words parents type (see keywords below)", cadence: "Always on, small daily budget" },
  { ch: "babymo.id + play.babymo.id", what: "Blog posts and the free web games lead to the app page (App Store button on the home page, games page and game hub)", cadence: "1 blog post a week" },
];

export const CALENDAR: { date: string; title: string; what: string; assets: string }[] = [
  { date: "Week of 23 Nov 2026", title: "1.1 launch week", what: "Reel “Kenalan dengan Baby Mo”, carousel “5 alasan”, stories every day, WhatsApp broadcast, first 4 creators", assets: "Reel doa-harian · carousel · story set A" },
  { date: "30 Nov – 18 Dec", title: "Daily habits", what: "One habit per week: doa harian, wudhu, Susun Huruf. Apple Watch + CarPlay du'a for fathers", assets: "Reels wudhu, kata-islam · story set B · watch post" },
  { date: "19 Dec – 4 Jan", title: "School holidays (libur semester)", what: "“Liburan bermanfaat”: offline play in the car and at grandma's, gardening and animal games", assets: "Reels kebun-ais, sahabat-hewan, tenis-adam · banner home" },
  { date: "22 Dec", title: "Hari Ibu", what: "Doa untuk orang tua: a gentle post for mothers", assets: "Post doa · story doa" },
  { date: "5 Jan 2027", title: "Isra Mi'raj (27 Rajab)", what: "The gift of the five daily prayers: invite children to learn to pray with Mo. Talk about the prayer, never picture the Prophet ﷺ or the journey", assets: "Reel pray-with-mo · story set B" },
  { date: "23 Jan", title: "Nisfu Sya'ban", what: "Countdown starts: “Ramadan sebentar lagi”. Seed Ramadan content to creators", assets: "Square ramadan · story ramadan" },
  { date: "1–7 Feb", title: "Ramadan countdown", what: "Reveal the Ramadan theme; carousel “Siap Ramadan bareng Mo”; WhatsApp broadcast", assets: "Reel doa-ramadan · banner ramadan · story set C" },
  { date: "8 Feb – 8 Mar", title: "Ramadan (1–30 Ramadan)", what: "Daily story “Ramadan hari ke-N” with one du'a; weekly Reels: sahur, berbuka, tarawih; Nuzulul Qur'an (24 Feb); last ten nights (from 28 Feb)", assets: "Story set C · reels doa-ramadan · posts ramadan" },
  { date: "9–11 Mar", title: "Idul Fitri", what: "Eid greeting post and Reel: “Selamat Idul Fitri, mohon maaf lahir dan batin”, ketupat look in the app", assets: "Eid greeting (make in Promo Studio)" },
  { date: "16 May", title: "Idul Adha", what: "Qurban and gratitude: animal-care game and du'as", assets: "Reel sahabat-hewan" },
];

export const REEL_SCRIPTS: { id: string; title: string; who: string; hook: Bi; scenes: string[]; text: Bi; cap: Bi; tags: Bi; asset: string }[] = [
  { id: "r1", title: "Kenalan dengan Baby Mo", who: "Bunda urban", asset: "reel-*-doa-harian.mp4 or Promo Studio “Phone tour”",
    hook: { id: "POV: anak minta HP… tapi Ayah Bunda tetap tenang 😌", en: "POV: your child asks for the phone… and you're actually fine with it 😌" },
    scenes: ["0–2s: hook text over a child's hands reaching for the iPhone (no face needed)", "2–7s: screen recording of the Game Hub → du'a page with Mo's voice", "7–10s: three quick cuts: Wudhu, Susun Huruf, Ais's garden", "10–12s: end card with the App Store button"],
    text: { id: "Tanpa iklan · Tanpa akun · Bisa offline", en: "No ads · No accounts · Works offline" },
    cap: { id: "Screen time yang bikin hati tenang 🤲 Baby Mo: 19 game belajar doa, sholat, wudhu, dan huruf hijaiyah — tanpa iklan, tanpa akun, bisa offline. Cari “Baby Mo” di App Store.", en: "Screen time you feel good about 🤲 Baby Mo: 19 games for learning du'as, prayer, wudu and Arabic letters — no ads, no accounts, works offline. Search “Baby Mo” on the App Store." },
    tags: { id: "#BabyMo #parentingislami #anakmuslim #doaanak #belajarislam #mainsambilbelajar", en: "#BabyMo #MuslimKids #IslamicParenting #MuslimMom #DuaForKids" } },
  { id: "r2", title: "Doa sebelum tidur", who: "Bunda urban", asset: "reel-*-doa-harian.mp4",
    hook: { id: "Rutinitas malam kami: 3 menit, 1 doa 🌙", en: "Our bedtime routine: 3 minutes, 1 du'a 🌙" },
    scenes: ["0–3s: dim room, iPad on a pillow, Dreamtime start screen", "3–8s: Mo reads the bedtime du'a slowly, child repeats (audio of the child, face optional)", "8–12s: Dreamtime moon fills up · end card"],
    text: { id: "Doa sebelum tidur, dibacakan pelan oleh Mo", en: "The bedtime du'a, read slowly by Mo" },
    cap: { id: "Malam lebih tenang dengan satu doa sebelum tidur 🌙 Di Baby Mo, doa dibacakan pelan dan bisa diulang sampai si kecil hafal.", en: "Calmer nights with one du'a before sleep 🌙 In Baby Mo the du'a is read slowly and can be repeated until your little one knows it." },
    tags: { id: "#doasebelumtidur #rutinitasmalam #anakmuslim #BabyMo", en: "#BedtimeDua #BedtimeRoutine #MuslimKids #BabyMo" } },
  { id: "r3", title: "Wudhu 10 langkah", who: "Guru PAUD / Ayah", asset: "reel-*-wudhu.mp4",
    hook: { id: "Anak susah diajari wudhu? Coba ini 💧", en: "Teaching wudu to a 4-year-old? Try this 💧" },
    scenes: ["0–2s: hook over a sink/tap shot", "2–9s: the Wudhu game step by step (Niat & Bismillah → hands → mouth…)", "9–12s: end card"],
    text: { id: "10 langkah, lengkap dengan niat dan doa", en: "10 steps, with the intention and du'a" },
    cap: { id: "Belajar wudhu jadi seru: 10 langkah dengan suara Mo, lengkap dengan niat dan doa setelah wudhu 💧", en: "Wudu made fun: 10 steps in Mo's voice, with the intention and the du'a after wudu 💧" },
    tags: { id: "#belajarwudhu #wudhuanak #pauislam #guruPAUD #BabyMo", en: "#WuduForKids #MuslimHomeschool #IslamicSchool #BabyMo" } },
  { id: "r4", title: "Susun Huruf: 106 kata Arab", who: "Bunda & guru", asset: "reel-*-kata-islam.mp4",
    hook: { id: "Tebak, kata Arab apa ini? 👀", en: "Guess the Arabic word 👀" },
    scenes: ["0–3s: letters scattered on screen, ask the viewer to guess", "3–9s: the child (hands only) drags letters, Mo says the word", "9–12s: reveal + “106 kata, 12 kategori” · end card"],
    text: { id: "106 kata Arab dalam 12 kategori", en: "106 Arabic words in 12 categories" },
    cap: { id: "Susun huruf jadi kata Arab: keluarga, hewan, buah, warna, sampai hewan laut 🐢 Komen tebakanmu!", en: "Build Arabic words letter by letter: family, animals, fruit, colours, even sea animals 🐢 Comment your guess!" },
    tags: { id: "#hurufhijaiyah #belajarbahasaarab #kosakataarab #BabyMo", en: "#LearnArabic #ArabicForKids #MuslimKids #BabyMo" } },
  { id: "r5", title: "Doa naik kendaraan (CarPlay)", who: "Ayah yang sibuk", asset: "film it yourself in the car (parked) + Promo Studio end card",
    hook: { id: "Setiap masuk mobil, Mo yang memimpin doa 🚗", en: "Every time we get in the car, Mo leads the du'a 🚗" },
    scenes: ["0–3s: phone connects to CarPlay (car parked, safety first)", "3–9s: Mo's voice reads the travel du'a through the car speakers, kids say “Aamiin”", "9–12s: how to set up: Shortcuts → Automation → CarPlay → Baby Mo Du'a"],
    text: { id: "Otomatis lewat app Pintasan + CarPlay", en: "Automatic with Shortcuts + CarPlay" },
    cap: { id: "Kebiasaan kecil di perjalanan: doa naik kendaraan dibacakan Mo lewat speaker mobil 🚗 Caranya: Pintasan → Otomatisasi → CarPlay → Doa Baby Mo.", en: "A small habit for every drive: Mo reads the travel du'a through the car speakers 🚗 How: Shortcuts → Automation → CarPlay → Baby Mo Du'a." },
    tags: { id: "#doanaikkendaraan #ayahmuslim #CarPlay #BabyMo", en: "#TravelDua #MuslimDad #CarPlay #BabyMo" } },
  { id: "r6", title: "Apple Watch: tasbih & jadwal sholat", who: "Ayah & Bunda", asset: "Apple Watch screenshots (App Store Kit) + Promo Studio",
    hook: { id: "Tasbih di jam tangan, tinggal putar ⌚", en: "Tasbih on your watch — just turn the crown ⌚" },
    scenes: ["0–3s: wrist close-up, turn the Digital Crown", "3–8s: tasbih count, next-prayer complication, Mimi the cat", "8–12s: end card"],
    text: { id: "Doa, tasbih, jadwal sholat di Apple Watch", en: "Du'as, tasbih and prayer times on Apple Watch" },
    cap: { id: "Baby Mo sekarang juga di Apple Watch ⌚ Doa dengan suara Mo, tasbih, jadwal sholat dengan pengingat wudhu, dan Mimi si kucing.", en: "Baby Mo is now on Apple Watch too ⌚ Du'as in Mo's voice, tasbih, prayer times with wudu reminders, and Mimi the cat." },
    tags: { id: "#AppleWatch #tasbihdigital #jadwalsholat #BabyMo", en: "#AppleWatch #Tasbih #PrayerTimes #BabyMo" } },
  { id: "r7", title: "Ramadan bareng Mo", who: "All · from 1 Feb", asset: "reel-*-doa-ramadan.mp4 + story Ramadan",
    hook: { id: "Ramadan pertama si kecil? Siapkan ini dulu 🌙", en: "Your little one's first Ramadan? Get this ready 🌙" },
    scenes: ["0–3s: lanterns and the Ramadan theme on the Game Hub", "3–9s: Ramadan du'as: sahur, berbuka, malam", "9–12s: “Ramadan hari ke-N” card · end card"],
    text: { id: "11 doa Ramadan + tampilan khusus Ramadan", en: "11 Ramadan du'as + a special Ramadan look" },
    cap: { id: "Marhaban ya Ramadan 🌙 Di Baby Mo, si kecil belajar 11 doa Ramadan — dari melihat hilal sampai berbuka — dan app ikut berhias selama Ramadan.", en: "Marhaban ya Ramadan 🌙 In Baby Mo, little ones learn 11 Ramadan du'as — from seeing the new moon to breaking the fast — and the app dresses up for the whole month." },
    tags: { id: "#ramadhananak #doaberbuka #doasahur #ramadan2027 #BabyMo", en: "#RamadanForKids #RamadanActivities #IftarDua #BabyMo" } },
  { id: "r8", title: "Liburan bermanfaat", who: "Bunda · school holidays", asset: "reel-*-kebun-ais.mp4, reel-*-sahabat-hewan.mp4",
    hook: { id: "Perjalanan 3 jam, sinyal hilang, anak tetap senang 🚙", en: "3-hour drive, no signal, happy kids 🚙" },
    scenes: ["0–3s: back seat, window, no-signal icon", "3–9s: Ais's garden and Mo's animals (works offline)", "9–12s: end card"],
    text: { id: "Bisa dimainkan tanpa internet", en: "Plays without internet" },
    cap: { id: "Teman perjalanan libur sekolah: Baby Mo bisa dimainkan tanpa internet 🌱 Menanam bareng Ais, merawat hewan bareng Mo, sambil belajar berbagi.", en: "A holiday travel buddy: Baby Mo works without internet 🌱 Gardening with Ais and caring for animals with Mo, while learning to share." },
    tags: { id: "#liburansekolah #aktivitasanak #mainsambilbelajar #BabyMo", en: "#SchoolHolidays #KidsActivities #MuslimKids #BabyMo" } },
  { id: "r9", title: "Ayah, anak, dan tenis", who: "Ayah", asset: "reel-*-tenis-adam.mp4",
    hook: { id: "Latihan tenis… sambil belajar sabar dan sportif 🎾", en: "Tennis practice… and learning patience 🎾" },
    scenes: ["0–3s: real racket/ball at home", "3–9s: Kak Adam's Tennis Academy: forehand, backhand, serve", "9–12s: end card"],
    text: { id: "Akademi Tenis Kak Adam", en: "Kak Adam's Tennis Academy" },
    cap: { id: "Belajar tenis bareng Kak Adam: forehand, backhand dua tangan, servis — plus adab bertanding yang baik 🎾", en: "Tennis with Kak Adam: forehand, two-handed backhand, serve — plus good sportsmanship 🎾" },
    tags: { id: "#tenisanak #olahraganak #anakaktif #BabyMo", en: "#KidsTennis #ActiveKids #MuslimKids #BabyMo" } },
  { id: "r10", title: "Kata guru", who: "Guru PAUD / TK", asset: "film a classroom (with the school's permission) + reel wudhu",
    hook: { id: "Cara kami mengenalkan wudhu di kelas 👩‍🏫", en: "How we introduce wudu in class 👩‍🏫" },
    scenes: ["0–3s: classroom, iPad on the teacher's desk (no children's faces without written consent)", "3–9s: the class follows Mo's wudu steps together", "9–12s: teacher quote · end card"],
    text: { id: "Dipakai di kelas, bisa offline", en: "Used in class, works offline" },
    cap: { id: "Terima kasih Bu Guru yang sudah mengenalkan wudhu dengan Baby Mo di kelas 💚 Mau dipakai di sekolah? DM kami.", en: "Thank you to the teachers introducing wudu with Baby Mo in class 💚 Want it for your school? Send us a message." },
    tags: { id: "#guruPAUD #TKislam #TPA #BabyMo", en: "#IslamicSchool #MuslimTeacher #BabyMo" } },
];

export const STORY_SETS: { id: string; title: string; frames: Bi[] }[] = [
  { id: "A", title: "Set A · Kenalan (launch week)", frames: [
    { id: "Frame 1 — story-home: “Ayah Bunda, kenalan yuk dengan Baby Mo 👋”", en: "Frame 1 — story-home: “Meet Baby Mo 👋”" },
    { id: "Frame 2 — story-doa + stiker polling: “Si kecil sudah hafal doa sebelum tidur? Sudah / Belum”", en: "Frame 2 — story-doa + poll sticker: “Does your little one know the bedtime du'a? Yes / Not yet”" },
    { id: "Frame 3 — story-parents: “Tanpa iklan, tanpa akun, bisa offline ✓”", en: "Frame 3 — story-parents: “No ads, no accounts, works offline ✓”" },
    { id: "Frame 4 — story-cta + stiker Link ke App Store", en: "Frame 4 — story-cta + Link sticker to the App Store" } ] },
  { id: "B", title: "Set B · Kebiasaan harian", frames: [
    { id: "Frame 1 — story-wudhu: “Hari ini belajar wudhu 💧” + stiker kuis: langkah pertama wudhu?", en: "Frame 1 — story-wudhu: “Today: wudu 💧” + quiz sticker: the first step of wudu?" },
    { id: "Frame 2 — story-susun + stiker pertanyaan: “Kata Arab apa yang ingin dipelajari si kecil?”", en: "Frame 2 — story-susun + question sticker: “Which Arabic word should we add?”" },
    { id: "Frame 3 — story-watch untuk Ayah", en: "Frame 3 — story-watch for dads" },
    { id: "Frame 4 — story-cta + Link", en: "Frame 4 — story-cta + Link" } ] },
  { id: "C", title: "Set C · Ramadan (daily, 8 Feb – 8 Mar)", frames: [
    { id: "Frame 1 — story-ramadan dengan teks: “Ramadan hari ke-N 🌙” (ganti angka setiap hari)", en: "Frame 1 — story-ramadan with “Ramadan day N 🌙” (change the number daily)" },
    { id: "Frame 2 — doa hari ini: tangkap layar doa Ramadan dari app (teks Arab persis dari app)", en: "Frame 2 — today's du'a: a screenshot of the Ramadan du'a from the app (Arabic exactly as in the app)" },
    { id: "Frame 3 — stiker slider “Seberapa semangat puasa hari ini? 🌙”", en: "Frame 3 — emoji slider “How strong is your fast today? 🌙”" },
    { id: "Frame 4 — story-cta + Link", en: "Frame 4 — story-cta + Link" } ] },
];

export const POST_CAPTIONS: { key: string; cap: Bi }[] = [
  { key: "home", cap: { id: "Kenalan dengan Baby Mo 👋 Teman kecil belajar Islam: doa, sholat, wudhu, dan huruf hijaiyah lewat 19 game. Tanpa iklan, tanpa akun, bisa offline. Cari “Baby Mo” di App Store.", en: "Meet Baby Mo 👋 A little friend for learning Islam: du'as, prayer, wudu and Arabic letters in 19 games. No ads, no accounts, works offline. Search “Baby Mo” on the App Store." } },
  { key: "doa", cap: { id: "14 doa harian, dari bangun tidur sampai mau tidur lagi 🤲 Setiap doa dibacakan pelan dengan suara Mo dan bisa diulang.", en: "14 daily du'as, from waking up to bedtime 🤲 Each one is read slowly in Mo's voice and can be repeated." } },
  { key: "ramadan", cap: { id: "Ramadan lebih meriah untuk si kecil 🌙 Lentera, hitungan hari Ramadan, dan 11 doa Ramadan — semuanya muncul otomatis saat Ramadan tiba.", en: "A joyful Ramadan for little ones 🌙 Lanterns, a day-by-day countdown and 11 Ramadan du'as — all appear automatically when Ramadan arrives." } },
  { key: "susun", cap: { id: "106 kata Arab, disusun huruf demi huruf ✍️ Keluarga, hewan, buah, warna, sampai hewan laut. Kata apa yang pertama dikuasai si kecil?", en: "106 Arabic words, built letter by letter ✍️ Family, animals, fruit, colours, even sea animals. Which word will your little one master first?" } },
  { key: "wudhu", cap: { id: "Belajar wudhu 10 langkah bareng Mo 💧 Lengkap dengan niat dan doa setelah wudhu.", en: "Learn wudu in 10 steps with Mo 💧 With the intention and the du'a after wudu." } },
  { key: "watch", cap: { id: "Baru: Baby Mo di Apple Watch ⌚ Doa, tasbih (putar Digital Crown), jadwal sholat, dan Mimi si kucing.", en: "New: Baby Mo on Apple Watch ⌚ Du'as, tasbih (turn the Digital Crown), prayer times and Mimi the cat." } },
  { key: "parents", cap: { id: "Untuk Ayah & Bunda: Baby Mo tanpa iklan, tanpa chat, tanpa akun. Progres hanya tersimpan di perangkat, dan semua game bisa dimainkan tanpa internet 💚", en: "For parents: Baby Mo has no ads, no chat and no accounts. Progress stays on the device, and every game works offline 💚" } },
  { key: "carousel", cap: { id: "5 alasan Ayah Bunda memilih Baby Mo 💚 Geser sampai akhir, lalu simpan untuk nanti. Alasan nomor berapa yang paling penting buat kamu?", en: "5 reasons parents choose Baby Mo 💚 Swipe to the end and save it for later. Which reason matters most to you?" } },
];

export const ADS: { label: string; primary: Bi; headline: Bi }[] = [
  { label: "Safe screen time", primary: { id: "Screen time yang bikin hati tenang: 19 game belajar doa, sholat, wudhu, dan huruf hijaiyah. Tanpa iklan, tanpa akun, bisa offline.", en: "Screen time you feel good about: 19 games for du'as, prayer, wudu and Arabic letters. No ads, no accounts, works offline." },
    headline: { id: "Baby Mo — belajar Islam sambil bermain", en: "Baby Mo — learn Islam through play" } },
  { label: "Du'a voice", primary: { id: "Doa harian dibacakan pelan dengan suara Mo — bisa diulang sampai si kecil hafal. Untuk anak 2–8 tahun.", en: "Daily du'as read slowly in Mo's voice — repeat until your little one knows them. For ages 2–8." },
    headline: { id: "14 doa harian dengan suara Mo", en: "14 daily du'as in Mo's voice" } },
  { label: "Ramadan (Feb)", primary: { id: "Ramadan pertama si kecil? Baby Mo ikut berhias: lentera, hitungan hari, dan 11 doa Ramadan.", en: "Your little one's first Ramadan? Baby Mo dresses up too: lanterns, a daily countdown and 11 Ramadan du'as." },
    headline: { id: "Ramadan bareng Baby Mo", en: "Ramadan with Baby Mo" } },
];

export const SEARCH_KEYWORDS: Bi = {
  id: "doa anak, doa harian anak, belajar sholat anak, belajar wudhu, huruf hijaiyah, game islami, aplikasi anak muslim, belajar mengaji, doa ramadan anak, game edukasi anak",
  en: "islamic kids, muslim kids games, dua for kids, learn salah, wudu for kids, arabic alphabet kids, ramadan kids, islamic learning app, quran kids, muslim toddler",
};

export const TEMPLATES: { title: string; body: Bi }[] = [
  { title: "WhatsApp broadcast (launch)", body: {
    id: "Assalamu'alaikum Ayah Bunda 👋\n\nAlhamdulillah, Baby Mo sudah ada di App Store (iPhone & iPad)! 19 game untuk belajar doa harian, sholat, wudhu, dan huruf hijaiyah — tanpa iklan, tanpa akun, dan bisa dimainkan tanpa internet.\n\nCari “Baby Mo” di App Store, atau buka: https://apps.apple.com/app/id6831891898\n\nMohon doa dan bantu sebarkan ya 🤲",
    en: "Assalamu'alaikum! 👋\n\nAlhamdulillah, Baby Mo is now on the App Store (iPhone & iPad)! 19 games for learning daily du'as, prayer, wudu and Arabic letters — no ads, no accounts, and it works offline.\n\nSearch “Baby Mo” on the App Store, or open: https://apps.apple.com/app/id6831891898\n\nPlease make du'a for us and share it 🤲" } },
  { title: "Creator / influencer DM", body: {
    id: "Assalamu'alaikum Kak [nama] 😊\n\nKami tim Baby Mo, app belajar Islam untuk anak 2–8 tahun (doa, sholat, wudhu, hijaiyah; tanpa iklan dan tanpa akun). Kami suka cara Kakak berbagi tentang [topik] bersama si kecil.\n\nBoleh kami kirimkan kode promo untuk mencoba Baby Mo? Tidak ada kewajiban posting — kalau si kecil suka dan Kakak mau berbagi, kami siapkan materi video dan gambarnya.\n\nJazakillah khairan 🤲",
    en: "Assalamu'alaikum [name] 😊\n\nWe're the Baby Mo team — an Islamic learning app for children aged 2–8 (du'as, prayer, wudu, Arabic letters; no ads, no accounts). We love how you share [topic] with your little ones.\n\nMay we send you a promo code to try Baby Mo? No obligation to post — if your family enjoys it and you'd like to share, we'll send videos and images ready to use.\n\nJazakum Allahu khairan 🤲" } },
  { title: "School / TPA email", body: {
    id: "Yth. Bapak/Ibu Kepala Sekolah [nama sekolah],\n\nAssalamu'alaikum warahmatullahi wabarakatuh.\n\nPerkenalkan, kami tim Baby Mo, aplikasi belajar Islam untuk anak usia 2–8 tahun di iPhone dan iPad: doa harian, wudhu 10 langkah, latihan sholat, dan 28 huruf hijaiyah. Aplikasi ini tanpa iklan, tanpa akun, tidak mengumpulkan data anak, dan bisa digunakan tanpa internet di kelas.\n\nKami ingin menawarkan kode promo untuk guru agar bisa mencobanya di kelas, serta materi pendukung (poster dan video). Jika berkenan, kami siap berdiskusi lebih lanjut.\n\nWassalamu'alaikum warahmatullahi wabarakatuh,\nTim Baby Mo · babymo.id",
    en: "Dear [Head Teacher],\n\nAssalamu'alaikum warahmatullahi wabarakatuh.\n\nWe're the team behind Baby Mo, an Islamic learning app for children aged 2–8 on iPhone and iPad: daily du'as, wudu in 10 steps, prayer practice and the 28 Arabic letters. It has no ads, no accounts, collects no children's data and works offline in class.\n\nWe'd love to offer promo codes so your teachers can try it in class, along with supporting material (posters and videos). We'd be happy to talk further.\n\nWassalamu'alaikum,\nThe Baby Mo team · babymo.id" } },
  { title: "Instagram bio", body: {
    id: "Baby Mo 🌙 Teman kecil belajar Islam\n19 game: doa, sholat, wudhu, hijaiyah\nTanpa iklan · tanpa akun · bisa offline\n⬇️ Unduh di App Store",
    en: "Baby Mo 🌙 A little friend for learning Islam\n19 games: du'as, prayer, wudu, Arabic letters\nNo ads · no accounts · works offline\n⬇️ Download on the App Store" } },
  { title: "Short press blurb", body: {
    id: "Baby Mo adalah aplikasi belajar Islam untuk anak usia 2–8 tahun di iPhone, iPad, dan Apple Watch. Melalui 19 game, anak belajar doa harian, sholat, wudhu, huruf hijaiyah, dan 106 kata Arab bersama Baby Mo dan keluarganya. Aplikasi ini tanpa iklan, tanpa akun, tidak mengumpulkan data anak, dan bisa digunakan tanpa internet. Tersedia dalam Bahasa Indonesia dan Inggris.",
    en: "Baby Mo is an Islamic learning app for children aged 2–8 on iPhone, iPad and Apple Watch. Through 19 games, children learn daily du'as, prayer, wudu, the Arabic letters and 106 Arabic words with Baby Mo and his family. It has no ads, no accounts, collects no children's data and works offline. Available in Indonesian and English." } },
];

export const RULES_DO: string[] = [
  "Speak to parents and teachers. Children are the users; adults are the audience (ads must target adults only).",
  "Use real app screens and the original Baby Mo renders (render 1). Render 2 Mo: upper body only.",
  "Copy Arabic exactly from the app; ask a second person to check before posting.",
  "Say “iPhone & iPad” (and Apple Watch where relevant): Baby Mo is not on Android.",
  "Offer a no-music version of every Reel (voice + soft sound only): many families prefer it.",
  "Get written consent before showing any child's face or voice; hands-only shots work well.",
  "Use the official “Download on the App Store” badge from Apple's marketing resources for paid ads.",
];
export const RULES_DONT: string[] = [
  "Never picture Allah, the prophets or angels — talk about Isra Mi'raj and other events without depicting them.",
  "No prices, “gratis/free” or discounts in posts and ads (the App Store shows the price per country).",
  "No promises like “hafal dalam 3 hari” or medical/educational claims we can't prove.",
  "No trending audio with unsuitable lyrics; no comparisons with other apps by name.",
  "Don't ask children to comment, follow or DM; don't run contests aimed at children.",
  "Don't share screenshots that show a real child's name entered in the app (use “Aisyah”).",
];
export const KPIS: string[] = [
  "App Store Connect → App Analytics: product page views, conversion rate, first-time downloads — by Source and by Campaign (campaign links below).",
  "Instagram/TikTok: reach, saves and shares (better signals than likes), link-sticker taps, profile visits.",
  "Weekly: pick the best Reel, make two variations of its hook, re-post on TikTok and Shorts.",
  "Monthly: ratings and reviews in App Store Connect; reply to every review kindly.",
];

/** Every Baby Mo link the team needs, in one place. Team-only pages are noindex and not linked from the site. */
export const LINKS: { group: string; note?: string; items: { name: string; url: string }[] }[] = [
  { group: "Team only", note: "Not linked from the site and hidden from search engines, but anyone with the link can open them: share inside the team only.", items: [
    { name: "Marketing Kit (this page)", url: "https://babymo.id/marketing-kit/" },
    { name: "Promo Studio · ID", url: "https://babymo.id/id/studio/" },
    { name: "Promo Studio · EN", url: "https://babymo.id/en/studio/" },
    { name: "Studio with a preset open (r1–r10 or eid)", url: "https://babymo.id/id/studio/?preset=r7" },
    { name: "App Store Kit", url: "https://babymo.id/app-store-kit/" },
    { name: "Element Library", url: "https://babymo.id/id/elemen/" },
    { name: "Pose Library", url: "https://babymo.id/id/pose/" },
    { name: "Voice recording page", url: "https://play.babymo.id/tools/rekam-suara.html" },
    { name: "Story recording page", url: "https://play.babymo.id/tools/rekam-cerita.html" },
    { name: "Listening page (all voice clips)", url: "https://play.babymo.id/tools/dengar-suara.html" },
  ] },
  { group: "The app", items: [
    { name: "App Store page", url: "https://apps.apple.com/app/baby-mo-islamic-kids-games/id6831891898" },
    { name: "App page on babymo.id (Marketing URL)", url: "https://babymo.id/app/" },
    { name: "Support (Support URL)", url: "https://babymo.id/support/" },
    { name: "Privacy policy", url: "https://babymo.id/privacy/" },
    { name: "App Store Connect", url: "https://appstoreconnect.apple.com" },
  ] },
  { group: "Website & games", items: [
    { name: "babymo.id home", url: "https://babymo.id/" },
    { name: "Game hub (play in the browser)", url: "https://play.babymo.id/" },
    { name: "Games page (19 games + clips)", url: "https://babymo.id/id/permainan/" },
    { name: "Story books", url: "https://babymo.id/id/cerita/" },
    { name: "Daily du'as", url: "https://babymo.id/id/doa/" },
    { name: "Learn", url: "https://babymo.id/id/learn/" },
    { name: "For parents", url: "https://babymo.id/id/orangtua/" },
    { name: "Blog", url: "https://babymo.id/id/blog/" },
    { name: "Lockscreen wallpapers", url: "https://babymo.id/id/unduh/" },
    { name: "Kids activity sheet maker", url: "https://babymo.id/id/apps/kids-activity/" },
    { name: "Videos & moments", url: "https://babymo.id/id/watch/" },
    { name: "Team & scholar reviewers", url: "https://babymo.id/id/tim/" },
    { name: "Contact", url: "https://babymo.id/id/kontak/" },
  ] },
  { group: "Social & contact", items: [
    { name: "Instagram", url: "https://www.instagram.com/babymo.official" },
    { name: "TikTok", url: "https://www.tiktok.com/@babymo.official" },
    { name: "YouTube", url: "https://www.youtube.com/@babymo.official" },
    { name: "Email · hello@babymo.id", url: "mailto:hello@babymo.id" },
  ] },
  { group: "Code (GitHub)", items: [
    { name: "babymo-app (app + play.babymo.id)", url: "https://github.com/roisa/babymo-app" },
    { name: "babymo-web (babymo.id)", url: "https://github.com/roisa/babymo-web" },
  ] },
];
