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
  { name: "Muslim homeschooling families", who: "Parents teaching at home in Indonesia, Malaysia, the UK, the US and Australia",
    cares: "Structured, interactive Islamic material to add to their own lessons",
    msg: "“Wudu, salah steps, 28 Arabic letters and 106 Arabic words — ready-made, offline, no ads.”", where: "Homeschool Facebook and Telegram groups, Instagram homeschool hashtags, co-op newsletters", lang: "ID / EN" },
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

/* ───────── Growth strategy (redesign, 20 Nov 2026) ───────── */

export const GOALS: Bi[] = [
  { id: "Pengguna nyata", en: "Real users" },
  { id: "Lebih banyak pembelian", en: "More purchases" },
  { id: "Jangkauan global", en: "Global reach" },
  { id: "Brand jangka panjang", en: "A long-term brand" },
];

export const BIG_PICTURE: Bi = {
  id: "Menjadikan Baby Mo brand belajar Islam untuk anak yang dicintai keluarga Muslim di seluruh dunia — lewat tiga langkah: ditemukan, dipercaya, dibeli.",
  en: "Turn Baby Mo into a loved global Islamic learning brand for children through three steps: discovery, trust and conversion.",
};
export const FUNNEL: { icon: string; t: Bi; d: Bi; how: Bi }[] = [
  { icon: "🔍", t: { id: "Ditemukan", en: "Discovery" }, d: { id: "Orang tua mengenal Baby Mo di TikTok, Instagram, YouTube, Google, dan App Store.", en: "Parents discover Baby Mo on TikTok, Instagram, YouTube, Google and the App Store." },
    how: { id: "Reels harian, kreator, artikel SEO, Apple Search Ads", en: "Daily Reels, creators, SEO articles, Apple Search Ads" } },
  { icon: "💚", t: { id: "Dipercaya", en: "Trust" }, d: { id: "Orang tua paham nilainya dan merasa tenang.", en: "Parents understand the value and feel confident." },
    how: { id: "Tanpa iklan & akun, testimoni nyata, ustadz reviewer, guru", en: "No ads or accounts, real testimonials, scholar reviewers, teachers" } },
  { icon: "🛒", t: { id: "Dibeli", en: "Conversion" }, d: { id: "Orang tua mengunduh, anak bermain, keluarga merekomendasikan.", en: "Parents download, children play, families recommend." },
    how: { id: "Halaman App Store yang kuat, link kampanye, ulasan, rekomendasi", en: "A strong App Store page, campaign links, reviews, word of mouth" } },
];

export const CORE_MESSAGE = {
  line: { id: "Tangan kecil. Cinta besar untuk Islam.", en: "Little hands. Big love for Islam." } as Bi,
  sub: { id: "Dunia belajar Islam yang ceria untuk Muslim kecil.", en: "A joyful Islamic learning world for little Muslims." } as Bi,
  pillars: [
    { icon: "🤲", t: { id: "Doa", en: "Du'as" } }, { icon: "🕌", t: { id: "Sholat", en: "Salah" } }, { icon: "💧", t: { id: "Wudhu", en: "Wudu" } },
    { icon: "ا", t: { id: "Hijaiyah", en: "Hijaiyah" } }, { icon: "🎮", t: { id: "Game", en: "Games" } },
  ] as { icon: string; t: Bi }[],
  promise: { id: "Tanpa iklan. Tanpa langganan. Cukup sekali beli.", en: "No ads. No subscriptions. Just one purchase." } as Bi,
};

export const IDEAL = {
  name: "Bunda Aisyah",
  photoNote: "Our ideal buyer (a composite, not a real person)",
  facts: [
    ["Who", "Muslim mum, 29–36, two children aged 3 and 6, works part-time, lives in Jakarta, Bandung, Surabaya or Kuala Lumpur"],
    ["Devices", "iPhone for herself, a family iPad at home; her husband has an Apple Watch"],
    ["Day", "School run, work, maghrib together; the iPad comes out after dinner and on long drives"],
    ["Wants", "Children who love their du'as and salah, screen time she doesn't feel guilty about, learning in Indonesian and Arabic"],
    ["Worries", "Ads, YouTube autoplay, strangers in chat, apps that need an account, content that isn't checked"],
    ["Follows", "Islamic-parenting and Montessori-at-home accounts, mums' WhatsApp groups, her child's TK/TPA teacher"],
    ["Buys when", "She sees her child (or a friend's child) enjoy it, a trusted creator or teacher recommends it, and the page clearly says no ads and no accounts"],
    ["Says", "“Akhirnya ada game yang bikin anak semangat baca doa, dan aku tenang karena tanpa iklan.”"],
  ] as [string, string][],
};

/** 90-day plan. Day 1 = Monday 23 Nov 2026 (the week 1.1 goes live); day 90 = 20 Feb 2027, early Ramadan. */
export const PHASES: { days: string; dates: string; t: string; color: string; icon: string; tasks: string[] }[] = [
  { days: "Days 1–7", dates: "23–29 Nov 2026", t: "Foundation", color: "#2D8CFF", icon: "🧱", tasks: [
    "Fix the last listing inconsistencies (game counts, “Free” in the kit)", "Upload the 1.1 screenshots and promo text", "Set up Instagram highlights, bios and the link in bio", "Create campaign links for every channel" ] },
  { days: "Days 8–30", dates: "30 Nov – 22 Dec", t: "Awareness", color: "#F06A1D", icon: "📣", tasks: [
    "Post 1–2 Reels a day (scripts r1–r4, r8)", "Contact 50 micro-creators; send promo codes to 20", "Join 10 parenting / homeschool communities and help first", "Publish 4 SEO articles; start Apple Search Ads small" ] },
  { days: "Days 31–60", dates: "23 Dec – 21 Jan 2027", t: "Conversion", color: "#12A15A", icon: "💚", tasks: [
    "Double down on the 3 best Reels; school-holiday content", "Collaborate with 10 parenting creators", "A/B test App Store screenshots (Product Page Optimization)", "Share real parent and teacher testimonials (with consent)" ] },
  { days: "Days 61–90", dates: "22 Jan – 20 Feb 2027", t: "Scale", color: "#6D3FD0", icon: "🚀", tasks: [
    "Ramadan campaign: countdown from Nisfu Sya'ban, theme reveal, daily stories", "Raise the budget only on channels with paying users", "Start a referral / creator programme", "Publish more SEO articles; plan the next app update" ] },
];

export const SERIES: { k: string; t: string; d: Bi; color: string }[] = [
  { k: "A", t: "The Muslim Parenting Moment", color: "#E64980", d: { id: "Momen nyata di rumah: doa sebelum tidur, sholat bareng, perjalanan. Hook relatable untuk orang tua.", en: "Real moments at home: bedtime du'a, praying together, the drive to school. Relatable hooks for parents." } },
  { k: "B", t: "Learn with Baby Mo", color: "#2D8CFF", d: { id: "Satu hal kecil per video: satu doa, satu huruf, satu langkah wudhu — langsung dari app.", en: "One small thing per video: one du'a, one letter, one wudu step — straight from the app." } },
  { k: "C", t: "Little Muslim Habits", color: "#12A15A", d: { id: "Kebiasaan baik: salam, berbagi, merawat hewan, menanam — bareng Mo, Ais, dan Kak Adam.", en: "Good habits: salam, sharing, caring for animals, gardening — with Mo, Ais and Kak Adam." } },
  { k: "D", t: "Meet Baby Mo's World", color: "#F59F00", d: { id: "Karakter dan dunia Baby Mo: keluarga, pulau hijaiyah, kebun, akademi tenis.", en: "The characters and world: the family, Hijaiyah Island, the garden, the tennis academy." } },
  { k: "E", t: "Why Parents Choose Baby Mo", color: "#6D3FD0", d: { id: "Kepercayaan: tanpa iklan, tanpa akun, offline, ditinjau ustadz, testimoni orang tua.", en: "Trust: no ads, no accounts, offline, scholar-reviewed, parent testimonials." } },
];

/** 90-day targets. Ours are set for a paid app; the reference board's 10% conversion is ambitious for a paid app, so the stretch goal keeps it. */
export const TARGETS: { icon: string; k: string; target: string; stretch: string; note: string }[] = [
  { icon: "👀", k: "Product page views", target: "15,000", stretch: "25,000", note: "App Store Connect → Analytics" },
  { icon: "⬇️", k: "Purchases (first-time downloads)", target: "600", stretch: "1,000", note: "App Analytics, by source and campaign" },
  { icon: "%", k: "Page-view → purchase conversion", target: "4%", stretch: "10%", note: "Paid kids apps usually convert 2–6%; better screenshots and reviews lift it" },
  { icon: "⭐", k: "Ratings (average ≥ 4.7)", target: "50", stretch: "100", note: "Ask gently in follow-ups, never inside the kids' area" },
  { icon: "🎬", k: "Short-form videos posted", target: "120", stretch: "180", note: "1–2 a day across Reels, TikTok and Shorts" },
  { icon: "🤝", k: "Creator collaborations", target: "10", stretch: "20", note: "Micro-creators 5k–50k followers" },
  { icon: "📝", k: "SEO articles on babymo.id", target: "12", stretch: "20", note: "e.g. “cara mengajarkan doa ke anak”, “Islamic games for kids”" },
  { icon: "🌍", k: "Countries with paying customers", target: "5", stretch: "10", note: "ID, MY, SG, BN + one English market" },
];

export const FOUNDATION: { t: string; done?: boolean; note?: string }[] = [
  { t: "babymo.id: App Store button instead of “Coming soon”", done: true, note: "Home, /app, /support and the games page" },
  { t: "Make game & du'a counts consistent everywhere", done: true, note: "App Store description and review notes: 19 games, paid, one purchase (20 Nov)" },
  { t: "Retake the App Store screenshots from the latest app", done: true, note: "App Store Kit, 19 Nov" },
  { t: "Instagram, TikTok and YouTube profiles ready", note: "Bio, highlight covers, link in bio (see Designs)" },
  { t: "First 10 gameplay Reels", done: true, note: "8 ready-made + Promo Studio presets" },
  { t: "Contact the first 20 parenting creators" },
  { t: "Campaign links in App Store Analytics", note: "Builder in Measure" },
  { t: "Indonesian & English landing pages", done: true, note: "babymo.id/app switches ID/EN" },
  { t: "Collect real user feedback", note: "Support page + a short form for creators and teachers" },
];

export const VISION: { t: string; now?: boolean }[] = [
  { t: "Baby Mo Games", now: true }, { t: "Baby Mo Stories", now: true }, { t: "Baby Mo Watch", now: true },
  { t: "Baby Mo Ramadan Adventures" }, { t: "Baby Mo Books (print)" }, { t: "Baby Mo Learning Activities (printables)" }, { t: "Baby Mo Merchandise" },
];

export const THE_GOAL: Bi = {
  id: "Bukan sekadar banyak unduhan, tapi komunitas orang tua di seluruh dunia yang mencintai dan merekomendasikan Baby Mo.",
  en: "Not just more downloads, but a growing global community of parents who love and recommend Baby Mo.",
};

/** TikTok: what can get the Studio/Reels videos held back, and three videos made for TikTok. */
export const TIKTOK_RISKS: { t: string; d: string }[] = [
  { t: "Silent audio track", d: "The 12 s Reels carry a silent track (−91 dB). TikTok's For You feed favours videos with real sound; silent clips get very little reach." },
  { t: "Looks like an ad", d: "Phone mockup, App Store badge and a “Download” pill read as an ad. Posted as an ordinary video without the commercial-content label, TikTok can limit or remove it." },
  { t: "Text where TikTok's own buttons sit", d: "The “Unduh di App Store” pill sits in the bottom strip that TikTok covers with the caption and username." },
  { t: "Soft picture", d: "The gameplay clips were recorded at 540 × 960 and scaled up. TikTok rates sharp 1080p video higher." },
  { t: "No hook in the first second", d: "They open on a static title. Viewers decide in about one second, and early swipe-aways stop the video being shown to more people." },
];
export const TIKTOK_FIXES: string[] = [
  "Real app footage at full 1080 × 1920, 30 fps (recorded in slow motion so it stays smooth), H.264 + AAC, about 5 MB each.",
  "Real sound: Mo's greeting, the du'a and wudhu voices from the app, placed exactly where the app plays them, plus soft tap sounds. No music. Loudness about −14 LUFS, which is what TikTok expects.",
  "Speaks to parents with a hook in the first second, in TikTok-style captions inside the safe area: clear of the top bar, the right-hand buttons and the caption strip.",
  "Looks like a parent's screen recording, not an ad. Brand only in the last 3 s: Baby Mo + “Cari ‘Baby Mo’ di App Store”. No badge graphic, no price, no link.",
  "17–22 s: long enough to finish the moment, short enough that most people watch to the end.",
];
export const TIKTOK_POSTING: string[] = [
  "Use a TikTok Business account. Business accounts can add the App Store link in the bio (TikTok doesn't make links in captions clickable).",
  "Before posting: More options → turn on “Content disclosure” → “Your brand”. It's our own app, so TikTok asks for this. Labelled videos still reach the For You feed.",
  "Turn on “AI-generated content” too: Mo's voice and the du'a recitation in the app are synthesised voices, and TikTok asks for a label on AI audio.",
  "Upload the MP4 as it is, without the TikTok editor's filters. Keep the original sound. If you add a sound, use only TikTok's Commercial Music Library, keep it under the voices, and post a no-music version too.",
  "Pick the cover: use the cover JPG or the first frame (it has the hook).",
  "Paste the caption below. Write to parents, not children: TikTok is 13+. Don't use #fyp spam. 3–5 specific hashtags work better.",
  "Post one video a day, 18:00–21:00 WIB. Reply to every comment in the first hour, and pin a comment such as “Cari Baby Mo di App Store 🍃”.",
  "Don't post the same file twice, and don't reupload Instagram Reels that carry an Instagram watermark.",
];
export const TIKTOK: { k: string; title: string; files: { id: string; en: string }; len: { id: string; en: string }; what: string; cap: Bi; tags: Bi }[] = [
  {
    k: "doa", title: "Doa bangun tidur · Waking-up du'a", files: { id: "tiktok-id-doa-bangun-tidur", en: "tiktok-en-waking-up-dua" }, len: { id: "17.8 s", en: "17.8 s" },
    what: "Hook “Ayah Bunda, coba ini pas si kecil bangun tidur” → tap the clock, Mo wakes up → Mo reads the du'a and each word lights up → a star → end card.",
    cap: {
      id: "Bangun tidur, langsung doa bareng Mo ☀️🤲\nKetuk jamnya, Mo bangun, lalu Mo bacakan doa bangun tidur pelan-pelan, kata demi kata. Si kecil tinggal ikut.\n\nAda 14 doa harian di Baby Mo: makan, tidur, keluar rumah, dan lainnya. Cari “Baby Mo” di App Store.",
      en: "Start the morning with a du'a ☀️🤲\nTap the clock, Mo wakes up and reads the waking-up du'a slowly, word by word, so little ones can follow along.\n\n14 daily du'as in Baby Mo: eating, sleeping, leaving home and more. Search “Baby Mo” on the App Store.",
    },
    tags: { id: "#doaharian #anakmuslim #parentingislami #belajarsambilbermain #babymo", en: "#muslimkids #duaforkids #islamicparenting #muslimmom #babymo" },
  },
  {
    k: "wudhu", title: "Belajar wudhu · Learn wudu", files: { id: "tiktok-id-belajar-wudhu", en: "tiktok-en-learn-wudu" }, len: { id: "22.1 s", en: "22.2 s" },
    what: "Hook “Belajar urutan wudhu tanpa ceramah panjang” → Mo shows step 1 → the child taps 3× and Mo washes (hands, mouth, nose) with Mo counting → end card.",
    cap: {
      id: "Belajar wudhu tanpa ceramah panjang 💧\nMo contohkan tiap langkah, si kecil ketuk untuk membasuh 3×. Dari niat sampai doa sesudah wudhu, 10 langkah.\n\nPas buat persiapan sholat pertama si kecil. Cari “Baby Mo” di App Store.",
      en: "Learning wudu without a long lecture 💧\nMo shows each step and your child taps to wash 3 times. From the intention to the du'a after wudu, 10 steps.\n\nGreat before their first prayers. Search “Baby Mo” on the App Store.",
    },
    tags: { id: "#belajarwudhu #wudhuanak #anakmuslim #pendidikananakislam #babymo", en: "#wudu #muslimkids #islamicparenting #muslimhomeschool #babymo" },
  },
  {
    k: "sholat", title: "Semangat sholat · Prayer streak", files: { id: "tiktok-id-semangat-sholat", en: "tiktok-en-prayer-streak" }, len: { id: "17.2 s", en: "17.2 s" },
    what: "Hook “Biar si kecil semangat sholat 5 waktu” → “I prayed Asr” → “MasyaAllah!”, the streak goes to 7 → search “Makkah” in the new world city list → local prayer times → end card.",
    cap: {
      id: "Biar si kecil semangat sholat 5 waktu 🕌🔥\nSelesai sholat, si kecil centang sendiri dan streak-nya bertambah. Jadwal sholat otomatis sesuai kotamu, di Indonesia maupun luar negeri 🌍\n\nCari “Baby Mo” di App Store.",
      en: "Helping little ones love their 5 daily prayers 🕌🔥\nAfter praying, they tick it themselves and the streak grows. Prayer times follow your city, wherever you live 🌍\n\nSearch “Baby Mo” on the App Store.",
    },
    tags: { id: "#sholatanak #anaksholeh #parentingislami #muslimkids #babymo", en: "#muslimkids #salah #islamicparenting #muslimfamily #babymo" },
  },
  {
    k: "mo-pagi", title: "Pagi bareng Mo · Mo's morning (animation)", files: { id: "tiktok-id-mo-pagi", en: "tiktok-en-mo-pagi" }, len: { id: "23.5 s", en: "23.5 s" },
    what: "Baby Mo animation (render 3): Mo peeks in, stretches and yawns, says “Selamat pagi! Yuk mulai dengan doa pagi” (lip-synced), shows Bunda's phone with the real du'a screen → zoom into the app, Mo reads the du'a → “Alhamdulillah! Masya Allah”, claps and waves. Brand only as a small card at the end.",
    cap: {
      id: "Pagi-pagi Mo udah semangat ☀️\nBangun, ngulet, lalu doa bangun tidur bareng Mo. Kata demi kata, pelan-pelan, si kecil tinggal ikut 🤲\n\nCari “Baby Mo” di App Store.",
      en: "Mo's morning, no fuss ☀️\nWake up, big stretch, then the waking-up du'a with Mo, slowly, word by word, so little ones can follow along 🤲\n\nSearch “Baby Mo” on the App Store.",
    },
    tags: { id: "#doaharian #anakmuslim #animasianak #parentingislami #babymo", en: "#muslimkids #duaforkids #islamicparenting #kidsanimation #babymo" },
  },
  {
    k: "mo-3-syarat", title: "3 syarat Mo sebelum main HP · Mo's 3 rules (animation)", files: { id: "tiktok-id-mo-3-syarat", en: "tiktok-en-mo-3-syarat" }, len: { id: "26.2 s", en: "26.2 s" },
    what: "Funny Baby Mo animation (render 3): Mo pops up behind the hill, jumps in, “Sstt…” → 1 wash hands (“Ups! Sudah basah!”), 2 Bismillah, 3 play something smart (the real Sahabat Hewan game on his tablet) → ⏰ time's up, Mo hugs the tablet (“Bentar lagiii…”), wobbles, has an idea (“Oke, besok lagi!”), gets a star, waves and walks off. Relatable for parents; ask in the comments what their own rules are.",
    cap: {
      id: "Anak minta HP? Coba pakai 3 syarat Mo 😂📱\n1. Cuci tangan dulu\n2. Baca Bismillah\n3. Main yang bikin pinter\n…dan kalau waktunya habis, ya habis 😇\n\nSyarat main HP di rumah kamu apa, Bun? Tulis di komentar 👇\n\nCari “Baby Mo” di App Store.",
      en: "Kid asking for the phone? Try Mo's 3 rules 😂📱\n1. Wash hands first\n2. Say Bismillah\n3. Play something smart\n…and when time's up, it's up 😇\n\nWhat are the phone rules in your house? Tell us in the comments 👇\n\nSearch “Baby Mo” on the App Store.",
    },
    tags: { id: "#parentingislami #anakmuslim #screentimeanak #ibuibu #babymo", en: "#muslimparenting #muslimkids #screentime #momlife #babymo" },
  },
  {
    k: "mo-tidur", title: "Mo vs. waktu tidur · Mo vs. bedtime (animation)", files: { id: "tiktok-id-mo-tidur", en: "tiktok-en-mo-tidur" }, len: { id: "28.4 s", en: "28.4 s" },
    what: "Funny Baby Mo animation (render 3): Bunda's message “Mo, waktunya tidur!” → Mo skids in, “Hah? Mo belum ngantuk!” (eyes droop… snap open), yawns anyway, “Satu cerita lagi yaa…”, checks his watch “Kan baru jam 7, Bun!”, spins “Mo masih kuat!”, yawns again → says “Selamat malam! Yuk belajar doa malam” (lip-synced) → the real bedtime game on the phone → doa sebelum tidur → falls asleep hugging his pillow as day turns to a starry night. Every parent knows these excuses.",
    cap: {
      id: "Alasan anak kalau disuruh tidur: 😂\n“Belum ngantuk!” “Satu cerita lagi!” “Kan baru jam 7!”\nUntung ada Mo: 4 langkah malam + doa sebelum tidur, terus… zzz 😴🌙\n\nAlasan favorit si kecil di rumah apa, Bun? 👇\n\nCari “Baby Mo” di App Store.",
      en: "Kids' bedtime excuses: 😂\n“I'm not sleepy!” “One more story!” “It's only 7!”\nThen Mo: 4 bedtime steps + the bedtime du'a, and… zzz 😴🌙\n\nWhat's your little one's favourite excuse? 👇\n\nSearch “Baby Mo” on the App Store.",
    },
    tags: { id: "#rutinitastidur #anakmuslim #parentingislami #doatidur #babymo", en: "#bedtimeroutine #muslimkids #islamicparenting #momlife #babymo" },
  },
];
