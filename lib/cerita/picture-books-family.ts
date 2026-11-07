import type { PictureBook } from "./picture-books";

/**
 * Family picture books: Kak Adam (the twins' big brother, about 7), Abi and
 * the twins. Same format as BOOKS in picture-books.ts — 16 pages, one big
 * illustration each. Adam's tennis swings play frame by frame (`seq`), and
 * the ball is launched on the contact frame (`d`) so it leaves the racket.
 */

/* Swing loops: 12 frames over 1.8 s (the length of one ball flight), so a
 * ball with d = contact time leaves the racket on every swing. */
const FPS = 12 / 1.8;
const loop = (f: string[]) => [...f, f[5]!, f[5]!, f[0]!, f[0]!, f[0]!, f[0]!];
const fh = (i: number) => `tennis-forehand-${i}`;
const bh = (i: number) => `tennis-backhand-${i}`;
const sw = (i: number) => `tennis-swing-${i}`;
const FOREHAND = loop([1, 2, 3, 4, 5, 6].map(fh));
const BACKHAND = loop([1, 2, 3, 4, 5, 6].map(bh));
const SWING = loop([1, 2, 3, 4, 5, 6].map(sw));
/** contact is frame 5 (index 4) → 4 / FPS seconds into the loop */
const HIT = 0.6;
/** the swoosh peaks 55% into its 1.8 s loop */
const TRAIL = HIT - 0.99;

export const FAMILY_BOOKS: PictureBook[] = [
  /* ───────────────────────── Tennis 1. The wobbly forehand ───────────────────────── */
  {
    slug: "forehand-kak-adam-yang-bandel",
    pose: "baby-mo-yeyy.png",
    published: "2026-11-07",
    title: { id: "Forehand Kak Adam yang Bandel", en: "Kak Adam's Wobbly Forehand" },
    hook: {
      id: "Kak Adam ingin bisa forehand. Tapi bolanya terbang ke pagar, ke pohon… bahkan ke kepalanya sendiri!",
      en: "Kak Adam wants to learn the forehand. But the ball flies over the fence, into the tree… even onto his own head!",
    },
    anchor: { type: "hadith", slug: "main-bersama-anak" },
    takeaway: {
      id: "Kemampuan baru tumbuh dari latihan kecil yang diulang dengan sabar — dan orang tua yang ikut tertawa saat gagal.",
      en: "New skills grow from small practice repeated patiently — and from parents who laugh along when it goes wrong.",
    },
    tags: ["tenis", "kak adam", "sabar", "latihan", "olahraga", "abi"],
    cover: {
      focus: 360, bg: "court",
      props: [{ k: "ballbasket", x: 560 }, { k: "ballfly", x: 455, y: 360, d: HIT }, { k: "swoosh", x: 430, y: 330, d: TRAIL }],
      mo: [{ pose: "yeyy", x: 270, move: "hop" }, { who: "adam", pose: fh(1), seq: FOREHAND, fps: FPS, x: 390, move: "still" }],
    },
    pages: [
      {
        text: { id: "Kak Adam punya raket baru, warnanya biru seperti langit. \"Hari ini aku mau belajar forehand!\"", en: "Kak Adam had a new racket, as blue as the sky. \"Today I'm going to learn the forehand!\"" },
        scene: { focus: 330, bg: "court", props: [{ k: "ballbasket", x: 500 }], mo: [{ pose: "pose-25", x: 280 }, { who: "adam", pose: "tennis-hold-ball", x: 400 }], fx: ["sparkle"] },
      },
      {
        text: { id: "\"Forehand itu pukulan dari samping badan,\" kata Abi. \"Seperti melambai pada bola, tapi pakai raket.\"", en: "\"A forehand is a shot from the side of your body,\" said Abi. \"Like waving at the ball — with a racket.\"" },
        scene: { focus: 340, bg: "court", props: [{ k: "tennisball", x: 520 }], mo: [{ who: "ayah", pose: "idea-point-stand", x: 270 }, { who: "adam", pose: "tennis-ready-wide", x: 410 }] },
      },
      {
        text: { id: "Pukulan pertama. WUSSS! Bolanya terbang tinggi… tinggi… melewati pagar!", en: "First hit. WHOOSH! The ball flew high… higher… right over the fence!" },
        scene: { focus: 350, bg: "court", props: [{ k: "ballfly", x: 450, y: 330, s: 1.3, d: 0.1 }], mo: [{ pose: "pose-26", x: 270 }, { who: "adam", pose: fh(6), x: 400 }] },
      },
      {
        text: { id: "Pukulan kedua. Raketnya mengayun kencang… tapi bolanya lewat begitu saja. Tuk… tuk… tuk.", en: "Second hit. The racket swung hard… but the ball sailed right past. Tok… tok… tok." },
        scene: { focus: 350, bg: "court", props: [{ k: "ballbounce", x: 300 }], mo: [{ who: "adam", pose: fh(4), x: 400 }, { pose: "pose-05", x: 250 }] },
      },
      {
        text: { id: "Pukulan ketiga memantul dari pagar, lalu… TUK! Mendarat tepat di kepala Kak Adam sendiri.", en: "The third hit bounced off the fence and then… BONK! It landed right on Kak Adam's own head." },
        scene: { focus: 370, bg: "court", props: [{ k: "bonk", x: 405, y: 190 }, { k: "tennisball", x: 470 }], mo: [{ who: "adam", pose: "tennis-hold-ball", x: 400 }, { pose: "pose-30", x: 285 }] },
      },
      {
        text: { id: "Kak Adam cemberut. \"Raketnya bandel! Forehand itu susah!\"", en: "Kak Adam scowled. \"This racket is naughty! The forehand is too hard!\"" },
        scene: { focus: 390, bg: "court", mo: [{ who: "adam", pose: "tennis-backhand-set", x: 390 }] },
      },
      {
        text: { id: "Abi berlutut dan tertawa kecil. \"Raketnya nggak bandel. Kita belajar pelan-pelan, ya. Abi punya tiga rahasia.\"", en: "Abi knelt down with a little laugh. \"The racket isn't naughty. Let's learn slowly. I've got three secrets.\"" },
        scene: { focus: 350, bg: "court", mo: [{ who: "ayah", pose: "teach-point-kneel", x: 290 }, { who: "adam", pose: "tennis-hold-ball", x: 420 }], fx: ["sparkle"] },
      },
      {
        text: { id: "Rahasia pertama: mata ke bola. \"Lihat bolanya terus, sampai menempel di senar raket!\"", en: "Secret one: eyes on the ball. \"Keep watching it until it touches the strings!\"" },
        scene: { focus: 380, bg: "court", props: [{ k: "ballbounce", x: 470 }], mo: [{ who: "adam", pose: sw(3), x: 390 }, { pose: "pose-08", x: 270 }] },
      },
      {
        text: { id: "Rahasia kedua: putar badan, seperti pintu yang membuka. Kriiiet… buka!", en: "Secret two: turn your body, like a door swinging open. Creeeak… open!" },
        scene: { focus: 380, bg: "court", mo: [{ who: "adam", pose: fh(2), seq: [fh(1), fh(1), fh(2), fh(3), fh(3), fh(3), fh(2), fh(1)], fps: 4, x: 390, move: "still" }], fx: ["sparkle"] },
      },
      {
        text: { id: "Rahasia ketiga: ayun dari bawah ke atas, lalu raketnya mendarat di bahu — seperti memeluk diri sendiri.", en: "Secret three: swing from low to high, and let the racket land on your shoulder — like giving yourself a hug." },
        scene: { focus: 380, bg: "court", props: [{ k: "swoosh", x: 420, y: 300, d: TRAIL }], mo: [{ who: "adam", pose: fh(4), seq: FOREHAND, fps: FPS, x: 380, move: "still" }] },
      },
      {
        text: { id: "Abi membuat lagu: \"Lihat bola, putar badan, ayun… peluk bahu!\" Mo dan Ais ikut bernyanyi sambil menari.", en: "Abi made up a song: \"Watch the ball, turn around, swing… hug your shoulder!\" Mo and Ais sang along and danced." },
        scene: { focus: 330, bg: "court", mo: [{ pose: "pose-30", x: 390, move: "sway" }, { who: "ais", pose: "jump-joy", x: 270, move: "hop" }], fx: ["notes"] },
      },
      {
        text: { id: "Kak Adam berlatih lagi. Sekali, dua kali… sepuluh kali. Kadang masuk, kadang nyangkut di net, kadang nyasar ke pohon.", en: "Kak Adam practised again. Once, twice… ten times. Sometimes in, sometimes stuck in the net, sometimes lost in a tree." },
        scene: { focus: 380, bg: "court", props: [{ k: "ballfly", x: 455, y: 360, d: HIT }, { k: "ballbasket", x: 250 }], mo: [{ who: "adam", pose: fh(1), seq: FOREHAND, fps: FPS, x: 390, move: "still" }] },
      },
      {
        text: { id: "Baby Mo menghitung dengan jarinya. \"Lima… enam… TUJUH masuk berturut-turut!\"", en: "Baby Mo counted on his fingers. \"Five… six… SEVEN in a row!\"" },
        scene: { focus: 330, bg: "court", props: [{ k: "ballfly", x: 485, y: 360, d: HIT }], mo: [{ pose: "idea", x: 280 }, { who: "adam", pose: fh(1), seq: FOREHAND, fps: FPS, x: 420, move: "still" }], fx: ["sparkle"] },
      },
      {
        text: { id: "Lalu Abi memukul bola yang paling cepat. Kak Adam melihat bola, memutar badan, dan… DUK!", en: "Then Abi hit his fastest ball. Kak Adam watched it, turned, and… THWACK!" },
        scene: { focus: 390, bg: "court", props: [{ k: "swoosh", x: 450, y: 300, d: -0.6 }], mo: [{ who: "adam", pose: "tennis-hit-forehand", x: 390, move: "still" }], fx: ["sparkle"] },
      },
      {
        text: { id: "Bolanya melambung melewati net dan jatuh tepat di dalam garis. \"MASUUUK!\" Semua bersorak.", en: "The ball sailed over the net and landed right inside the line. \"IT'S IN!\" Everyone cheered." },
        scene: { focus: 340, bg: "court", mo: [{ pose: "yeyy", x: 270, move: "hop" }, { who: "adam", pose: "tennis-win-fist", x: 410 }], fx: ["confetti"] },
      },
      {
        text: { id: "Abi menepuk bahunya. \"Hebat bukan karena langsung bisa. Hebat karena terus mencoba. Allah suka amal yang dikerjakan terus-menerus, walau sedikit.\"", en: "Abi patted his shoulder. \"Being great isn't getting it right away. It's keeping on trying. Allah loves deeds done steadily, even small ones.\"" },
        quote: { id: "\"Amalan yang paling dicintai Allah adalah yang paling terus-menerus, meskipun sedikit.\" (HR. Bukhari dan Muslim)", en: "\"The deeds most loved by Allah are those done most consistently, even if they are small.\" (Bukhari and Muslim)" },
        scene: { focus: 350, bg: "court", time: "dusk", mo: [{ who: "ayah", pose: "thumbs-up-kneel", x: 290 }, { who: "adam", pose: "tennis-hold-ball", x: 420 }], fx: ["sparkle"] },
      },
    ],
  },

  /* ───────────────────────── Tennis 2. The rocket serve ───────────────────────── */
  {
    slug: "servis-roket-kak-adam",
    pose: "baby-mo-wow.png",
    published: "2026-11-07",
    title: { id: "Servis Roket Kak Adam", en: "Kak Adam's Rocket Serve" },
    hook: {
      id: "Servis itu dimulai dengan melempar bola ke atas. Gampang? Bola Kak Adam malah jatuh ke kepala, ke belakang, dan ke kolam!",
      en: "A serve starts with tossing the ball up. Easy? Kak Adam's ball lands on his head, behind him — even in a puddle!",
    },
    anchor: { type: "doa", slug: "doa-dimudahkan-urusan" },
    takeaway: {
      id: "Pecah hal yang sulit jadi langkah kecil, latih satu per satu, dan minta kemudahan kepada Allah.",
      en: "Break a hard thing into small steps, practise them one at a time, and ask Allah to make it easy.",
    },
    tags: ["tenis", "servis", "kak adam", "doa", "latihan", "sabar"],
    cover: {
      focus: 380, bg: "court",
      props: [{ k: "balltoss", x: 440, y: 230 }, { k: "ballbasket", x: 560 }],
      mo: [{ who: "adam", pose: "tennis-serve-toss", x: 390, move: "still" }, { pose: "wow", x: 270 }],
      fx: ["sparkle"],
    },
    pages: [
      {
        text: { id: "\"Setiap permainan tenis dimulai dengan servis,\" kata Abi. \"Bolanya dilempar ke atas, lalu dipukul dari atas kepala.\"", en: "\"Every tennis game starts with a serve,\" said Abi. \"You toss the ball up, then hit it from above your head.\"" },
        scene: { focus: 350, bg: "court", props: [{ k: "tennisball", x: 520 }], mo: [{ who: "ayah", pose: "idea-point-stand", x: 280 }, { who: "adam", pose: "tennis-hold-ball", x: 410 }] },
      },
      {
        text: { id: "\"Gampang!\" kata Kak Adam. Ia melempar bolanya… dan bola itu jatuh tepat di atas kepalanya. TUK!", en: "\"Easy!\" said Kak Adam. He tossed the ball… and it dropped straight onto his head. BONK!" },
        scene: { focus: 380, bg: "court", props: [{ k: "bonk", x: 395, y: 195 }], mo: [{ who: "adam", pose: "tennis-serve-toss", x: 390 }, { pose: "pose-05", x: 270 }] },
      },
      {
        text: { id: "Lemparan kedua terlalu jauh ke belakang. Lemparan ketiga terlalu ke samping — plung! — masuk ke genangan air.", en: "The second toss went too far back. The third went off to the side — splosh! — straight into a puddle." },
        scene: { focus: 380, bg: "court", props: [{ k: "puddle", x: 520 }, { k: "tennisball", x: 520 }], mo: [{ who: "adam", pose: "tennis-ready-wide", x: 380 }, { pose: "pose-26", x: 270 }] },
      },
      {
        text: { id: "Baby Mo tertawa sampai terguling. \"Bolanya mau mandi, Kak!\"", en: "Baby Mo laughed so hard he rolled over. \"Your ball wants a bath, Kak!\"" },
        scene: { focus: 360, bg: "court", props: [{ k: "puddle", x: 470 }, { k: "tennisball", x: 470 }], mo: [{ pose: "pose-18", x: 330 }], fx: ["bubbles"] },
      },
      {
        text: { id: "Kak Adam ikut tertawa, tapi lalu menghela napas. \"Servis itu susah, Abi. Banyak sekali yang harus diingat.\"", en: "Kak Adam laughed too, then sighed. \"Serving is hard, Abi. There's so much to remember.\"" },
        scene: { focus: 340, bg: "court", mo: [{ who: "adam", pose: "tennis-backhand-set", x: 420 }, { who: "ayah", pose: "listen-sit-box", x: 270 }] },
      },
      {
        text: { id: "\"Kalau begitu kita pecah jadi kecil-kecil,\" kata Abi. \"Hari ini kita latih lemparannya saja. Tanpa raket.\"", en: "\"Then let's break it into little pieces,\" said Abi. \"Today we only practise the toss. No racket.\"" },
        scene: { focus: 350, bg: "court", props: [{ k: "tennisball", x: 480 }], mo: [{ who: "ayah", pose: "teach-point-kneel", x: 280 }, { who: "adam", pose: "tennis-hold-ball", x: 420 }], fx: ["sparkle"] },
      },
      {
        text: { id: "\"Bayangkan ada rak di langit,\" kata Abi. \"Angkat bolanya pelan-pelan, lalu taruh di rak itu. Jangan dilempar — ditaruh.\"", en: "\"Imagine a shelf in the sky,\" said Abi. \"Lift the ball gently and place it on that shelf. Don't throw it — place it.\"" },
        scene: { focus: 390, bg: "court", props: [{ k: "balltoss", x: 440, y: 240 }], mo: [{ who: "adam", pose: "tennis-serve-toss", x: 390, move: "still" }], fx: ["sparkle"] },
      },
      {
        text: { id: "Naik… berhenti… turun. Bolanya jatuh kembali ke tangannya. Naik… berhenti… turun. Lagi dan lagi.", en: "Up… pause… down. The ball dropped back into his hand. Up… pause… down. Again and again." },
        scene: { focus: 390, bg: "court", props: [{ k: "balltoss", x: 440, y: 240 }, { k: "balltoss", x: 300, y: 300, d: 1.1, s: 0.8 }], mo: [{ who: "adam", pose: "tennis-serve-toss", x: 390, move: "still" }, { pose: "pose-34", x: 280 }] },
      },
      {
        text: { id: "Baby Mo ikut berlatih dengan bola merahnya. Bolanya jatuh ke hidungnya sendiri. \"Aduh! Tapi seru!\"", en: "Baby Mo practised too, with his red ball. It fell on his own nose. \"Ouch! But it's fun!\"" },
        scene: { focus: 340, bg: "court", props: [{ k: "ball", x: 400 }, { k: "bonk", x: 330, y: 200 }], mo: [{ pose: "pose-28", x: 330 }] },
      },
      {
        text: { id: "Besoknya, raketnya boleh ikut. Abi mengajarkan iramanya: \"Lempar… tunggu… PUKUL!\"", en: "The next day, the racket could join in. Abi taught the rhythm: \"Toss… wait… HIT!\"" },
        scene: { focus: 350, bg: "court", props: [{ k: "balltoss", x: 450, y: 240 }], mo: [{ who: "ayah", pose: "megaphone", x: 270 }, { who: "adam", pose: "tennis-serve-toss", x: 410, move: "still" }], fx: ["notes"] },
      },
      {
        text: { id: "Servis pertama: nyangkut di net. Kedua: keluar garis. Ketiga: nyangkut lagi. Kak Adam menggigit bibir.", en: "First serve: into the net. Second: out. Third: the net again. Kak Adam bit his lip." },
        scene: { focus: 380, bg: "court", props: [{ k: "tennisnet", x: 520 }, { k: "tennisball", x: 470 }], mo: [{ who: "adam", pose: "tennis-backhand-set", x: 360 }] },
      },
      {
        text: { id: "Abi mengajaknya berhenti sebentar dan berdoa: \"Ya Allah, tidak ada yang mudah kecuali yang Engkau jadikan mudah.\"", en: "Abi asked him to stop for a moment and pray: \"O Allah, nothing is easy except what You make easy.\"" },
        quote: { id: "\"Allahumma laa sahla illaa maa ja'altahu sahlaa, wa anta taj'alul hazna idzaa syi'ta sahlaa.\" — Ya Allah, tidak ada kemudahan kecuali yang Engkau jadikan mudah, dan Engkau jadikan yang sulit itu mudah jika Engkau kehendaki. (HR. Ibnu Hibban)", en: "\"Allahumma laa sahla illaa maa ja'altahu sahlaa, wa anta taj'alul hazna idzaa shi'ta sahlaa.\" — O Allah, nothing is easy except what You make easy, and You make the hard easy if You wish. (Ibn Hibban)" },
        scene: { focus: 340, bg: "court", time: "dusk", mo: [{ who: "ayah", pose: "dua-kneel", x: 280 }, { who: "adam", pose: "dua-hands", x: 410 }], fx: ["sparkle"] },
      },
      {
        text: { id: "\"Bismillah.\" Kak Adam menaruh bola di rak langit. Menunggu. Lalu… CTAK!", en: "\"Bismillah.\" Kak Adam placed the ball on the sky shelf. Waited. Then… CRACK!" },
        scene: { focus: 390, bg: "court", time: "dusk", props: [{ k: "balltoss", x: 440, y: 240 }, { k: "swoosh", x: 420, y: 230, d: -0.2 }], mo: [{ who: "adam", pose: "tennis-serve-toss", x: 390, move: "still" }] },
      },
      {
        text: { id: "Bolanya melesat seperti roket, melewati net, dan memantul tepat di kotak servis!", en: "The ball shot off like a rocket, over the net, and bounced right in the service box!" },
        scene: { focus: 380, bg: "court", time: "dusk", props: [{ k: "ballfly", x: 440, y: 300, s: 1.2 }, { k: "ballfly", x: 380, y: 280, d: 0.5 }], mo: [{ who: "adam", pose: "tennis-jump-reach", x: 380 }], fx: ["shootingstar"] },
      },
      {
        text: { id: "\"SERVIS ROKET!\" teriak Baby Mo dan Baby Ais. Mereka melompat-lompat sambil berputar-putar.", en: "\"ROCKET SERVE!\" shouted Baby Mo and Baby Ais. They jumped and spun around." },
        scene: { focus: 330, bg: "court", time: "dusk", mo: [{ pose: "pose-02", x: 390, move: "hop" }, { who: "ais", pose: "jump-cheer", x: 280, move: "hop" }], fx: ["confetti"] },
      },
      {
        text: { id: "Malamnya Kak Adam berbisik, \"Ternyata yang susah jadi gampang kalau dipecah kecil-kecil… dan minta tolong Allah.\" Kamu mau memecah hal sulit apa jadi kecil-kecil? 🚀", en: "That night Kak Adam whispered, \"Hard things get easy when you break them into little pieces… and ask Allah for help.\" What hard thing will you break into little pieces? 🚀" },
        scene: { focus: 380, bg: "bedroom", time: "night", props: [{ k: "racket", x: 500 }, { k: "lamp", x: 560, s: 0.85 }], mo: [{ who: "adam", pose: "dua-hands", x: 390 }], fx: ["stars"] },
      },
    ],
  },

  /* ───────────────────────── Tennis 3. The backhand side ───────────────────────── */
  {
    slug: "backhand-dua-tangan",
    pose: "baby-mo-idea.png",
    published: "2026-11-07",
    title: { id: "Backhand Dua Tangan", en: "The Two-Handed Backhand" },
    hook: {
      id: "Setiap bola datang ke sisi kiri, Kak Adam lari memutar supaya bisa forehand. Sampai suatu hari ia kelelahan sendiri!",
      en: "Every time the ball comes to his left, Kak Adam runs all the way round to hit a forehand. Until one day he wears himself out!",
    },
    anchor: { type: "parenting", slug: "bonding-orangtua" },
    takeaway: {
      id: "Hal yang kita hindari biasanya hal yang paling perlu kita latih — pelan-pelan, dengan dua tangan.",
      en: "The thing we avoid is usually the thing we most need to practise — slowly, with both hands.",
    },
    tags: ["tenis", "backhand", "kak adam", "berani", "latihan", "abi"],
    cover: {
      focus: 380, bg: "court",
      props: [{ k: "ballfly", x: 460, y: 355, d: HIT }, { k: "swoosh", x: 440, y: 320, d: TRAIL }],
      mo: [{ who: "adam", pose: bh(1), seq: BACKHAND, fps: FPS, x: 390, move: "still" }, { pose: "pose-25", x: 270 }],
    },
    pages: [
      {
        text: { id: "Forehand Kak Adam sekarang sudah keren. Tapi ada satu rahasia kecil yang ia sembunyikan.", en: "Kak Adam's forehand was looking great now. But he was hiding one little secret." },
        scene: { focus: 390, bg: "court", props: [{ k: "ballfly", x: 455, y: 360, d: HIT }], mo: [{ who: "adam", pose: fh(1), seq: FOREHAND, fps: FPS, x: 390, move: "still" }] },
      },
      {
        text: { id: "Setiap bola datang ke sisi kirinya, Kak Adam lari memutar… jauh sekali… supaya bisa memukul pakai forehand.", en: "Whenever a ball came to his left side, Kak Adam ran all the way round it… really far… so he could hit a forehand." },
        scene: { focus: 380, bg: "court", props: [{ k: "ballbounce", x: 280 }], mo: [{ who: "adam", pose: "tennis-lunge-low", x: 400 }], fx: ["leaves"] },
      },
      {
        text: { id: "Lari ke kiri, lari ke kanan, lari memutar lagi. Hosh… hosh… \"Kakak capek ya?\" tanya Baby Ais.", en: "Run left, run right, run round again. Puff… puff… \"Are you tired, Kak?\" asked Baby Ais." },
        scene: { focus: 340, bg: "court", props: [{ k: "tennisball", x: 520 }], mo: [{ who: "ais", pose: "think-question", x: 280 }, { who: "adam", pose: "tennis-stretch-reach", x: 410 }] },
      },
      {
        text: { id: "Abi tersenyum. \"Kakak menghindari backhand, ya?\" Kak Adam menunduk. \"Backhand-ku jelek, Abi. Bolanya selalu melenceng.\"", en: "Abi smiled. \"You're avoiding your backhand, aren't you?\" Kak Adam looked down. \"My backhand is bad, Abi. The ball always goes wrong.\"" },
        scene: { focus: 350, bg: "court", mo: [{ who: "ayah", pose: "think-chin-stand", x: 280 }, { who: "adam", pose: "tennis-hold-ball", x: 410 }] },
      },
      {
        text: { id: "\"Yang paling sering kita hindari, biasanya yang paling perlu kita latih,\" kata Abi. \"Hari ini kita latih backhand saja.\"", en: "\"The thing we avoid most is usually the thing we most need to practise,\" said Abi. \"Today we only practise backhands.\"" },
        scene: { focus: 350, bg: "court", props: [{ k: "ballbasket", x: 520 }], mo: [{ who: "ayah", pose: "teach-point-kneel", x: 290 }, { who: "adam", pose: "tennis-backhand-set", x: 420 }], fx: ["sparkle"] },
      },
      {
        text: { id: "\"Pegang raketnya dengan dua tangan,\" kata Abi, \"seperti memegang segelas susu penuh. Kuat, tapi hati-hati.\"", en: "\"Hold the racket with both hands,\" said Abi, \"like holding a full glass of milk. Firm, but careful.\"" },
        scene: { focus: 380, bg: "court", props: [{ k: "milk", x: 500 }], mo: [{ who: "adam", pose: bh(1), x: 390 }], fx: ["sparkle"] },
      },
      {
        text: { id: "Baby Mo langsung mencoba dengan gelas susunya. Pegang dua tangan… goyang sedikit… \"Nggak tumpah!\"", en: "Baby Mo tried it straight away with his cup of milk. Two hands… a little wobble… \"Didn't spill!\"" },
        scene: { focus: 350, bg: "court", props: [{ k: "milk", x: 420 }], mo: [{ pose: "pose-04", x: 340 }], fx: ["sparkle"] },
      },
      {
        text: { id: "\"Sekarang putar bahu kananmu ke arah net, seperti mengintip dari balik pundak.\"", en: "\"Now turn your right shoulder towards the net, like peeking over your shoulder.\"" },
        scene: { focus: 380, bg: "court", mo: [{ who: "adam", pose: bh(2), seq: [bh(1), bh(1), bh(2), bh(3), bh(3), bh(3), bh(2), bh(1)], fps: 4, x: 390, move: "still" }] },
      },
      {
        text: { id: "Bola pertama: melenceng ke kiri. Bola kedua: nyangkut di net. Kak Adam ingin lari memutar lagi…", en: "First ball: off to the left. Second ball: into the net. Kak Adam wanted to run round it again…" },
        scene: { focus: 380, bg: "court", props: [{ k: "tennisnet", x: 520 }, { k: "tennisball", x: 470 }], mo: [{ who: "adam", pose: bh(4), x: 380 }] },
      },
      {
        text: { id: "\"Tahan, Kak!\" seru Baby Ais. \"Kata Abi, jangan lari dari bola!\" Kak Adam tertawa dan tetap di tempatnya.", en: "\"Stay there, Kak!\" called Baby Ais. \"Abi said don't run away from the ball!\" Kak Adam laughed and stayed put." },
        scene: { focus: 330, bg: "court", mo: [{ who: "ais", pose: "megaphone", x: 270 }, { who: "adam", pose: "tennis-backhand-set", x: 410 }], fx: ["sparkle"] },
      },
      {
        text: { id: "Mereka berlatih sampai keranjang bolanya kosong. Bunyi raketnya mulai berubah: tak… tok… TAK!", en: "They practised until the ball basket was empty. The sound of the racket began to change: tick… tock… TOCK!" },
        scene: { focus: 390, bg: "court", props: [{ k: "ballfly", x: 460, y: 355, d: HIT }, { k: "ballbasket", x: 240 }], mo: [{ who: "adam", pose: bh(1), seq: BACKHAND, fps: FPS, x: 390, move: "still" }] },
      },
      {
        text: { id: "Lalu bola datang ke sisi kiri — cepat sekali. Kak Adam tidak lari. Ia memutar bahu, memegang erat dengan dua tangan…", en: "Then a ball came to his left — really fast. Kak Adam didn't run. He turned his shoulder, held on tight with both hands…" },
        scene: { focus: 390, bg: "court", props: [{ k: "tennisball", x: 520, y: 330 }], mo: [{ who: "adam", pose: "tennis-hit-backhand", x: 390, move: "still" }], fx: ["sparkle"] },
      },
      {
        text: { id: "TAK! Bolanya terbang lurus, melewati net, dan menyentuh garis paling ujung. Sempurna!", en: "TOCK! The ball flew straight, over the net, and kissed the very back line. Perfect!" },
        scene: { focus: 390, bg: "court", props: [{ k: "ballfly", x: 455, y: 355, s: 1.2 }, { k: "swoosh", x: 440, y: 310, d: -0.6 }], mo: [{ who: "adam", pose: bh(6), x: 390 }], fx: ["sparkle"] },
      },
      {
        text: { id: "\"Backhand dua tangan!\" Baby Mo dan Baby Ais mencoba gaya Kak Adam dengan sapu dan centong nasi.", en: "\"Two-handed backhand!\" Baby Mo and Baby Ais copied Kak Adam's style with a broom and a rice paddle." },
        scene: { focus: 330, bg: "court", props: [{ k: "brooms", x: 470 }], mo: [{ pose: "pose-25", x: 390 }, { who: "ais", pose: "tennis", x: 270 }], fx: ["confetti"] },
      },
      {
        text: { id: "Abi memeluk mereka bertiga. \"Bersemangatlah dalam hal yang bermanfaat, mintalah tolong kepada Allah, dan jangan merasa lemah.\"", en: "Abi hugged all three. \"Be eager for what benefits you, ask Allah for help, and don't feel weak.\"" },
        quote: { id: "\"Bersemangatlah dalam hal yang bermanfaat bagimu, mintalah pertolongan kepada Allah, dan jangan merasa lemah.\" (HR. Muslim 2664)", en: "\"Be eager for what benefits you, seek help from Allah, and do not give up.\" (Muslim 2664)" },
        scene: { focus: 340, bg: "court", time: "dusk", mo: [{ who: "ayah", pose: "hug-mo", x: 300 }, { who: "adam", pose: "tennis-ready-wide", x: 440 }], fx: ["hearts"] },
      },
      {
        text: { id: "Sejak hari itu, Kak Adam tidak lari memutar lagi. Kalau bolanya ke kiri — dua tangan, putar bahu, TAK! Hal apa yang selama ini kamu hindari? 🎾", en: "From that day on, Kak Adam never ran round the ball again. Ball to the left? Two hands, turn the shoulder, TOCK! What have you been avoiding? 🎾" },
        scene: { focus: 390, bg: "court", time: "dusk", props: [{ k: "ballfly", x: 460, y: 355, d: HIT }], mo: [{ who: "adam", pose: bh(1), seq: BACKHAND, fps: FPS, x: 390, move: "still" }], fx: ["sparkle"] },
      },
    ],
  },

  /* ───────────────────────── Tennis 4. The first match ───────────────────────── */
  {
    slug: "pertandingan-pertama-kak-adam",
    pose: "baby-mo-pose-21.png",
    published: "2026-11-07",
    title: { id: "Pertandingan Pertama Kak Adam", en: "Kak Adam's First Match" },
    hook: {
      id: "Kak Adam bertanding tenis untuk pertama kali melawan Raka. Ia kalah… tapi ia pulang dengan hati yang menang.",
      en: "Kak Adam plays his very first tennis match, against Raka. He loses… but he goes home with a winning heart.",
    },
    anchor: { type: "parenting", slug: "adab-sehari-hari" },
    takeaway: {
      id: "Menang itu menyenangkan; kalah dengan baik hati itu lebih hebat. Ajarkan anak berjabat tangan, mengucap barakallah, dan belajar dari kekalahan.",
      en: "Winning is fun; losing kindly is greater. Teach children to shake hands, say barakallah, and learn from a loss.",
    },
    tags: ["tenis", "pertandingan", "sportif", "kak adam", "kalah", "menahan marah"],
    cover: {
      focus: 370, bg: "court",
      props: [{ k: "trophy", x: 520 }, { k: "ballbounce", x: 460 }],
      mo: [{ who: "adam", pose: "tennis-ready-wide", x: 380 }, { pose: "pose-29", x: 270 }],
      fx: ["sparkle"],
    },
    pages: [
      {
        text: { id: "Hari Sabtu ada turnamen kecil di lapangan dekat rumah. Nama Kak Adam ada di papan: Adam lawan Raka.", en: "On Saturday there was a little tournament at the court near home. Kak Adam's name was on the board: Adam vs Raka." },
        scene: { focus: 380, bg: "court", mo: [{ who: "adam", pose: "tennis-hold-ball", x: 380 }], fx: ["sparkle"] },
      },
      {
        text: { id: "Perut Kak Adam terasa geli, seperti ada kupu-kupu di dalamnya. \"Abi, kalau aku kalah gimana?\"", en: "Kak Adam's tummy felt tickly, like butterflies inside. \"Abi, what if I lose?\"" },
        scene: { focus: 350, bg: "court", props: [{ k: "butterfly", x: 430, y: 270 }, { k: "butterfly", x: 470, y: 230 }], mo: [{ who: "adam", pose: "tennis-backhand-set", x: 410 }, { who: "ayah", pose: "listen-sit-box", x: 270 }] },
      },
      {
        text: { id: "\"Kalau kalah, kita belajar. Kalau menang, kita bersyukur,\" kata Abi. \"Dua-duanya bagus. Bismillah dulu, yuk.\"", en: "\"If you lose, we learn. If you win, we're thankful,\" said Abi. \"Both are good. Let's start with Bismillah.\"" },
        scene: { focus: 350, bg: "court", mo: [{ who: "ayah", pose: "teach-point-kneel", x: 280 }, { who: "adam", pose: "dua-hands", x: 410 }], fx: ["sparkle"] },
      },
      {
        text: { id: "Baby Mo dan Baby Ais duduk di bangku penonton dengan bendera kecil. \"Ka-kak A-dam! Ka-kak A-dam!\"", en: "Baby Mo and Baby Ais sat in the stands with little flags. \"Kak A-dam! Kak A-dam!\"" },
        scene: { focus: 330, bg: "court", props: [{ k: "bench", x: 330 }], mo: [{ pose: "pose-25", x: 390 }, { who: "ais", pose: "megaphone", x: 270 }], fx: ["notes"] },
      },
      {
        text: { id: "Pertandingan dimulai. Servis roket Kak Adam masuk! Satu kosong!", en: "The match began. Kak Adam's rocket serve went in! One–love!" },
        scene: { focus: 390, bg: "court", props: [{ k: "balltoss", x: 440, y: 240 }], mo: [{ who: "adam", pose: "tennis-serve-toss", x: 390, move: "still" }], fx: ["sparkle"] },
      },
      {
        text: { id: "Tapi Raka hebat sekali. Bolanya cepat dan berputar. Ke kiri, ke kanan… Kak Adam berlari ke sana kemari.", en: "But Raka was really good. His shots were fast and spinning. Left, right… Kak Adam ran this way and that." },
        scene: { focus: 390, bg: "court", props: [{ k: "ballfly", x: 640, y: 330, flip: true, d: 0.3 }], mo: [{ who: "adam", pose: "tennis-lunge-low", x: 390 }], fx: ["leaves"] },
      },
      {
        text: { id: "Satu poin hilang. Dua poin hilang. Skornya jadi 2–4 untuk Raka. Pertandingan selesai.", en: "One point lost. Two points lost. The score ended 2–4 to Raka. The match was over." },
        scene: { focus: 390, bg: "court", props: [{ k: "tennisball", x: 470 }], mo: [{ who: "adam", pose: "tennis-stretch-reach", x: 390 }] },
      },
      {
        text: { id: "Dada Kak Adam panas. Ia ingin membanting raketnya. Tangannya sudah terangkat…", en: "Kak Adam's chest felt hot. He wanted to throw his racket down. His hand was already up…" },
        scene: { focus: 390, bg: "court", time: "dusk", props: [{ k: "cloud", x: 400, y: 160, s: 0.7 }], mo: [{ who: "adam", pose: "tennis-backhand-set", x: 390, move: "sway" }], fx: ["lightning"] },
      },
      {
        text: { id: "Lalu ia ingat kata Abi: \"Orang kuat itu bukan yang selalu menang, tapi yang bisa menahan marahnya.\" Ia menarik napas panjang.", en: "Then he remembered Abi's words: \"A strong person isn't the one who always wins, but the one who holds back his anger.\" He took a long, deep breath." },
        quote: { id: "\"Orang kuat bukanlah yang pandai bergulat, tetapi orang kuat adalah yang mampu menguasai dirinya ketika marah.\" (HR. Bukhari dan Muslim)", en: "\"The strong one is not the one who wrestles others down; the strong one is the one who controls himself when angry.\" (Bukhari and Muslim)" },
        scene: { focus: 390, bg: "court", time: "dusk", mo: [{ who: "adam", pose: "dua-hands", x: 390 }], fx: ["sparkle"] },
      },
      {
        text: { id: "Kak Adam berjalan ke net, mengulurkan tangan, dan tersenyum. \"Barakallah, Raka. Pukulanmu keren sekali.\"", en: "Kak Adam walked to the net, held out his hand, and smiled. \"Barakallah, Raka. Your shots were amazing.\"" },
        scene: { focus: 390, bg: "court", time: "dusk", props: [{ k: "tennisnet", x: 510 }], mo: [{ who: "adam", pose: "wave-hello", x: 390 }], fx: ["hearts"] },
      },
      {
        text: { id: "Baby Mo cemberut. \"Kok Kakak kalah? Raka curang!\" Kak Adam menggeleng. \"Nggak, Mo. Raka memang lebih banyak latihan.\"", en: "Baby Mo pouted. \"Why did you lose? Raka cheated!\" Kak Adam shook his head. \"No, Mo. Raka just practised more.\"" },
        scene: { focus: 330, bg: "court", time: "dusk", mo: [{ pose: "pose-27", x: 280 }, { who: "adam", pose: "tennis-hold-ball", x: 410 }] },
      },
      {
        text: { id: "\"Alhamdulillah, sekarang aku tahu apa yang harus dilatih,\" kata Kak Adam. \"Backhand-ku masih goyang, dan aku kurang cepat.\"", en: "\"Alhamdulillah, now I know what to practise,\" said Kak Adam. \"My backhand still wobbles, and I'm not fast enough.\"" },
        scene: { focus: 380, bg: "court", time: "dusk", props: [{ k: "ballbasket", x: 500 }], mo: [{ who: "adam", pose: "tennis-backhand-set", x: 380 }], fx: ["sparkle"] },
      },
      {
        text: { id: "Abi berlutut dan memeluknya erat. \"Hari ini kamu kalah skornya, tapi menang hatinya. Abi bangga sekali.\"", en: "Abi knelt and hugged him tight. \"Today you lost on the scoreboard, but you won with your heart. I'm so proud of you.\"" },
        scene: { focus: 350, bg: "court", time: "dusk", mo: [{ who: "ayah", pose: "kneel-arms-open", x: 300 }, { who: "adam", pose: "tennis-hold-ball", x: 430 }], fx: ["hearts"] },
      },
      {
        text: { id: "Dalam perjalanan pulang, mereka mampir membeli es krim. Raka dan ayahnya juga ada di sana!", en: "On the way home they stopped for ice cream. Raka and his dad were there too!" },
        scene: { focus: 350, bg: "street", time: "dusk", props: [{ k: "icecreamcart", x: 520 }], mo: [{ pose: "pose-29", x: 330 }, { who: "adam", pose: "wave-hello", x: 430 }] },
      },
      {
        text: { id: "\"Minggu depan latihan bareng, yuk?\" ajak Raka. Kak Adam mengangguk semangat. Musuh di lapangan, teman di luar lapangan.", en: "\"Want to practise together next week?\" asked Raka. Kak Adam nodded eagerly. Rivals on the court, friends off it." },
        scene: { focus: 340, bg: "street", time: "dusk", props: [{ k: "icecream", x: 470 }], mo: [{ pose: "yeyy", x: 290, move: "hop" }, { who: "adam", pose: "tennis-win-fist", x: 420 }], fx: ["confetti"] },
      },
      {
        text: { id: "Malam itu Kak Adam menempelkan bintang emas di kalendernya: \"Hari aku belajar kalah dengan baik.\" Kamu pernah kalah dan tetap tersenyum? ⭐", en: "That night Kak Adam stuck a gold star on his calendar: \"The day I learned to lose well.\" Have you ever lost and still smiled? ⭐" },
        scene: { focus: 380, bg: "bedroom", time: "night", props: [{ k: "goldstar", x: 500, y: 250 }, { k: "racket", x: 560 }], mo: [{ who: "adam", pose: "dua-hands", x: 390 }], fx: ["stars"] },
      },
    ],
  },

  /* ───────────────────────── Tennis 5. Kak Adam the coach ───────────────────────── */
  {
    slug: "kak-adam-jadi-pelatih",
    pose: "baby-mo-pose-02.png",
    published: "2026-11-07",
    title: { id: "Kak Adam Jadi Pelatih", en: "Kak Adam the Coach" },
    hook: {
      id: "Baby Mo dan Baby Ais ingin main tenis seperti Kak Adam. Tapi bolanya terlalu cepat — dan kesabaran Kak Adam diuji!",
      en: "Baby Mo and Baby Ais want to play tennis like Kak Adam. But the ball is too fast — and Kak Adam's patience is tested!",
    },
    anchor: { type: "parenting", slug: "rivalitas-saudara" },
    takeaway: {
      id: "Kakak belajar sabar dengan mengajar adiknya — dan mengingat dulu ia juga diajari dengan sabar.",
      en: "Big siblings learn patience by teaching the little ones — and by remembering that someone was patient with them, too.",
    },
    tags: ["tenis", "kakak adik", "sabar", "kak adam", "mengajar", "balon"],
    cover: {
      focus: 340, bg: "court",
      props: [{ k: "balloon", x: 330, y: 250 }],
      mo: [{ pose: "pose-02", x: 300, move: "hop" }, { who: "adam", pose: "tennis-ready-wide", x: 430 }, { who: "ais", pose: "tennis", x: 200 }],
      fx: ["sparkle"],
    },
    pages: [
      {
        text: { id: "\"Kak Adam, ajari kami main tenis!\" Baby Mo dan Baby Ais berdiri di depan pintu dengan raket mainan.", en: "\"Kak Adam, teach us tennis!\" Baby Mo and Baby Ais stood at the door with toy rackets." },
        scene: { focus: 330, bg: "court", mo: [{ pose: "pose-25", x: 390 }, { who: "ais", pose: "tennis", x: 270 }], fx: ["sparkle"] },
      },
      {
        text: { id: "\"Gampang!\" kata Kak Adam. \"Lihat ya — lihat bola, putar badan, ayun!\" WUSSS! Bolanya melesat secepat kilat.", en: "\"Easy!\" said Kak Adam. \"Watch — eyes on the ball, turn, swing!\" WHOOSH! The ball shot off like lightning." },
        scene: { focus: 390, bg: "court", props: [{ k: "ballfly", x: 455, y: 360, d: HIT }], mo: [{ who: "adam", pose: fh(1), seq: FOREHAND, fps: FPS, x: 390, move: "still" }] },
      },
      {
        text: { id: "Baby Mo mencoba. Ayun… luput. Ayun… luput lagi. Bolanya menggelinding ke bawah bangku.", en: "Baby Mo tried. Swing… miss. Swing… miss again. The ball rolled under the bench." },
        scene: { focus: 340, bg: "court", props: [{ k: "bench", x: 470 }, { k: "tennisball", x: 470 }], mo: [{ pose: "pose-34", x: 340 }] },
      },
      {
        text: { id: "\"Bukan begitu, Mo! Kan sudah Kakak bilang!\" Suara Kak Adam jadi keras. Baby Mo menunduk.", en: "\"Not like that, Mo! I already told you!\" Kak Adam's voice got loud. Baby Mo looked at his feet." },
        scene: { focus: 330, bg: "court", mo: [{ pose: "pose-38", x: 290 }, { who: "adam", pose: "tennis-backhand-set", x: 420 }] },
      },
      {
        text: { id: "Baby Ais berbisik, \"Kak… dulu Abi juga marah nggak waktu bola Kakak kena kepala?\"", en: "Baby Ais whispered, \"Kak… did Abi get cross when the ball bonked your head?\"" },
        scene: { focus: 330, bg: "court", mo: [{ who: "ais", pose: "think-question", x: 280 }, { who: "adam", pose: "tennis-hold-ball", x: 410 }] },
      },
      {
        text: { id: "Kak Adam terdiam. Ia ingat Abi tertawa, berlutut, dan berkata, \"Kita belajar pelan-pelan, ya.\"", en: "Kak Adam went quiet. He remembered Abi laughing, kneeling down, and saying, \"Let's learn slowly.\"" },
        scene: { focus: 340, bg: "court", time: "dusk", props: [{ k: "cloud", x: 330, y: 170, s: 0.8 }], mo: [{ who: "ayah", pose: "teach-point-kneel", x: 280 }, { who: "adam", pose: "tennis-hold-ball", x: 410 }], fx: ["sparkle"] },
      },
      {
        text: { id: "Kak Adam berlutut di depan Baby Mo. \"Maaf ya, Mo. Kakak terlalu cepat. Kita mulai dari yang paling pelan.\"", en: "Kak Adam knelt in front of Baby Mo. \"Sorry, Mo. I went too fast. Let's start with the slowest thing.\"" },
        scene: { focus: 330, bg: "court", mo: [{ pose: "pose-05", x: 290 }, { who: "adam", pose: "tennis-stretch-reach", x: 420 }], fx: ["hearts"] },
      },
      {
        text: { id: "\"Apa yang paling pelan di dunia?\" Baby Ais berpikir. \"Siput!\" \"Bukan… BALON!\"", en: "\"What's the slowest thing in the world?\" Baby Ais wondered. \"A snail!\" \"No… a BALLOON!\"" },
        scene: { focus: 330, bg: "court", props: [{ k: "balloon", x: 450, y: 260 }, { k: "snail", x: 520 }], mo: [{ pose: "idea", x: 380 }, { who: "ais", pose: "idea-bulb", x: 270 }] },
      },
      {
        text: { id: "Kak Adam meniup balon merah. Balon itu melayang turun pelaaan sekali. Baby Mo sempat melihatnya… dan memukulnya. PUK!", en: "Kak Adam blew up a red balloon. It floated down slooowly. Baby Mo had time to watch it… and hit it. POK!" },
        scene: { focus: 340, bg: "court", props: [{ k: "balloon", x: 400, y: 240 }], mo: [{ pose: "pose-02", x: 340, move: "hop" }], fx: ["sparkle"] },
      },
      {
        text: { id: "\"Aku bisa! Aku bisa!\" Balonnya naik lagi. Baby Ais memukulnya ke Kak Adam. Kak Adam memukulnya ke Mo.", en: "\"I can do it! I can do it!\" Up went the balloon again. Baby Ais hit it to Kak Adam. Kak Adam hit it to Mo." },
        scene: { focus: 330, bg: "court", props: [{ k: "balloon", x: 330, y: 200 }], mo: [{ pose: "yeyy", x: 400, move: "hop" }, { who: "ais", pose: "jump-cheer", x: 270, move: "hop" }], fx: ["confetti"] },
      },
      {
        text: { id: "Seratus kali balonnya naik turun. Tidak ada yang jatuh. Tidak ada yang marah. Semua tertawa.", en: "Up and down went the balloon a hundred times. Nobody fell. Nobody got cross. Everybody laughed." },
        scene: { focus: 330, bg: "court", props: [{ k: "balloon", x: 360, y: 180 }, { k: "balloon", x: 470, y: 230 }], mo: [{ pose: "pose-30", x: 380, move: "sway" }, { who: "ais", pose: "giggle", x: 270 }], fx: ["notes"] },
      },
      {
        text: { id: "Lalu Kak Adam memberi bola tenis yang memantul pelan. \"Pantulkan di raketmu. Satu… dua…\"", en: "Then Kak Adam gave them a tennis ball, bouncing it gently. \"Bounce it on your racket. One… two…\"" },
        scene: { focus: 330, bg: "court", props: [{ k: "ballbounce", x: 330 }], mo: [{ who: "ais", pose: "tennis", x: 270 }, { who: "adam", pose: "tennis-ready-wide", x: 420 }] },
      },
      {
        text: { id: "\"…TIGA!\" Baby Ais berhasil tiga kali! Baby Mo dua kali! Kak Adam bertepuk paling kencang.", en: "\"…THREE!\" Baby Ais made it three times! Baby Mo, twice! Kak Adam clapped the loudest." },
        scene: { focus: 330, bg: "court", mo: [{ who: "ais", pose: "trophy-cheer", x: 270 }, { pose: "pose-02", x: 390, move: "hop" }], fx: ["confetti"] },
      },
      {
        text: { id: "Abi melihat dari jauh dan tersenyum. \"Masya Allah. Kakak yang sabar membuat adik-adiknya berani.\"", en: "Abi watched from a distance and smiled. \"Masha Allah. A patient big brother makes his little ones brave.\"" },
        quote: { id: "\"Bukan termasuk golongan kami orang yang tidak menyayangi yang lebih kecil dan tidak menghormati yang lebih besar.\" (HR. Tirmidzi)", en: "\"He is not one of us who does not show mercy to the young and respect to the old.\" (Tirmidhi)" },
        scene: { focus: 350, bg: "court", time: "dusk", mo: [{ who: "ayah", pose: "stand-arms-crossed", x: 290 }, { who: "adam", pose: "tennis-hold-ball", x: 420 }], fx: ["hearts"] },
      },
      {
        text: { id: "\"Kak Adam, besok latihan lagi?\" \"Pasti. Pelatih kalian tidak akan menyerah!\" Kak Adam memeluk keduanya.", en: "\"Kak Adam, practise again tomorrow?\" \"Definitely. Your coach never gives up!\" Kak Adam hugged them both." },
        scene: { focus: 330, bg: "court", time: "dusk", mo: [{ pose: "pose-41", x: 390 }, { who: "ais", pose: "arms-open-welcome", x: 280 }], fx: ["hearts"] },
      },
      {
        text: { id: "Malam itu Kak Adam berdoa, \"Ya Allah, jadikan aku kakak yang sabar.\" Siapa yang sudah sabar mengajarimu sesuatu? 🎈", en: "That night Kak Adam prayed, \"O Allah, make me a patient big brother.\" Who has patiently taught you something? 🎈" },
        scene: { focus: 380, bg: "bedroom", time: "night", props: [{ k: "balloon", x: 500, y: 250 }, { k: "racket", x: 560 }], mo: [{ who: "adam", pose: "dua-hands", x: 390 }], fx: ["stars"] },
      },
    ],
  },

  /* ───────────────────────── Abi 1. Abi comes home ───────────────────────── */
  {
    slug: "abi-pulang-kerja",
    pose: "baby-mo-pose-41.png",
    published: "2026-11-08",
    title: { id: "Abi Pulang Kerja", en: "Abi Comes Home" },
    hook: {
      id: "Baby Mo menunggu Abi pulang sejak sore. Tapi waktu Abi datang, Abi capek sekali… dan tertidur di tengah cerita!",
      en: "Baby Mo has been waiting for Abi since the afternoon. But when Abi gets home he's so tired… he falls asleep in the middle of the story!",
    },
    anchor: { type: "hadith", slug: "menafkahi-keluarga" },
    takeaway: {
      id: "Anak belajar menghargai kerja orang tua saat diajak melihatnya sebagai bentuk sayang — dan diberi kesempatan membalas sayang itu.",
      en: "Children learn to value a parent's work when they see it as a kind of love — and get a chance to love back.",
    },
    tags: ["abi", "ayah", "bekerja", "sayang", "terima kasih", "keluarga"],
    cover: {
      focus: 330, bg: "living", time: "dusk",
      props: [{ k: "heart", x: 470, y: 230, s: 0.7 }],
      mo: [{ who: "ayah", pose: "hug-mo", x: 330 }],
      fx: ["hearts"],
    },
    pages: [
      {
        text: { id: "Setiap sore, Baby Mo duduk di dekat jendela. Ia sedang menunggu seseorang.", en: "Every afternoon, Baby Mo sat by the window. He was waiting for someone." },
        scene: { bg: "living", time: "dusk", props: [{ k: "clock", x: 500, y: 230 }], mo: [{ pose: "pose-12", x: 360 }] },
      },
      {
        text: { id: "Jarum jam berputar pelaaan sekali. \"Jam, cepat dong. Abi kapan pulang?\"", en: "The clock hands turned sooo slowly. \"Hurry up, clock. When is Abi coming home?\"" },
        scene: { bg: "living", time: "dusk", props: [{ k: "clock", x: 470, y: 220, s: 1.3 }], mo: [{ pose: "pose-22", x: 340 }] },
      },
      {
        text: { id: "Ceklek! Pintu terbuka. \"Assalamu'alaikum!\" Baby Mo melompat. \"Wa'alaikumussalam, ABI!\"", en: "Click! The door opened. \"Assalamu'alaikum!\" Baby Mo leapt up. \"Wa'alaikumussalam, ABI!\"" },
        scene: { focus: 310, bg: "living", time: "dusk", mo: [{ pose: "run", x: 270, move: "hop" }, { who: "ayah", pose: "wave-folder", x: 400 }], fx: ["sparkle"] },
      },
      {
        text: { id: "Abi berlutut dan merentangkan tangan. Baby Mo berlari secepat roket ke pelukannya.", en: "Abi knelt down and opened his arms. Baby Mo raced like a rocket into his hug." },
        scene: { bg: "living", time: "dusk", mo: [{ who: "ayah", pose: "hug-mo", x: 340 }], fx: ["hearts"] },
      },
      {
        text: { id: "\"Abi, ayo main! Ayo baca cerita! Ayo bikin menara!\" Baby Mo menarik-narik tangan Abi.", en: "\"Abi, let's play! Let's read a story! Let's build a tower!\" Baby Mo tugged at Abi's hand." },
        scene: { focus: 320, bg: "living", time: "dusk", props: [{ k: "blocks", x: 470 }, { k: "books", x: 540 }], mo: [{ pose: "pose-34", x: 370 }, { who: "ayah", pose: "yawn-stretch-stand", x: 250 }] },
      },
      {
        text: { id: "Abi tersenyum, tapi matanya sayu. \"Abi capek sekali hari ini, Mo. Tapi satu cerita… boleh.\"", en: "Abi smiled, but his eyes were droopy. \"I'm really tired today, Mo. But one story… sure.\"" },
        scene: { focus: 320, bg: "living", time: "night", props: [{ k: "lamp", x: 520, s: 0.85 }], mo: [{ pose: "pose-40", x: 380 }, { who: "ayah", pose: "yawn-sit", x: 260 }] },
      },
      {
        text: { id: "Mereka duduk berdua. \"Pada suatu hari… ada seekor kucing… yang ingin… terbang…\"", en: "They sat together. \"Once upon a time… there was a cat… who wanted… to fly…\"" },
        scene: { bg: "living", time: "night", props: [{ k: "lamp", x: 520, s: 0.85 }], mo: [{ who: "ayah", pose: "read-with-mo", x: 350 }], fx: ["stars"] },
      },
      {
        text: { id: "Suara Abi makin pelan… makin pelan… lalu terdengar: \"Krrrr… krrrr…\" Abi tertidur!", en: "Abi's voice got softer… and softer… and then: \"Zzzzz… zzzzz…\" Abi was asleep!" },
        scene: { focus: 330, bg: "living", time: "night", props: [{ k: "books", x: 470 }], mo: [{ pose: "pose-26", x: 400 }, { who: "ayah", pose: "doze-sit", x: 280 }], fx: ["zzz"] },
      },
      {
        text: { id: "Baby Mo ingin membangunkannya. Tapi lalu ia melihat sepatu Abi yang berdebu dan tas kerja yang berat.", en: "Baby Mo wanted to wake him. But then he saw Abi's dusty shoes and his heavy work bag." },
        scene: { bg: "living", time: "night", props: [{ k: "shoes", x: 480 }, { k: "box", x: 560, s: 0.8 }], mo: [{ pose: "pose-22", x: 370 }] },
      },
      {
        text: { id: "Ia teringat kata Umi: \"Abi bekerja dari pagi supaya kita punya rumah, makanan, dan buku cerita.\"", en: "He remembered what Umi said: \"Abi works from morning so we have a home, food and storybooks.\"" },
        scene: { bg: "living", time: "night", props: [{ k: "rice", x: 470 }, { k: "books", x: 560 }], mo: [{ pose: "pose-07", x: 360 }], fx: ["sparkle"] },
      },
      {
        text: { id: "Diam-diam Baby Mo mengambil selimut kecilnya dan menyelimuti kaki Abi. Pelan… pelan…", en: "Very quietly, Baby Mo fetched his little blanket and tucked it over Abi's feet. Gently… gently…" },
        scene: { focus: 320, bg: "living", time: "night", props: [{ k: "towel", x: 300 }], mo: [{ pose: "pose-36", x: 390 }, { who: "ayah", pose: "doze-sit", x: 270 }], fx: ["zzz"] },
      },
      {
        text: { id: "Lalu ia membawakan segelas air dan menaruhnya di samping Abi. \"Biar kalau bangun, Abi nggak haus.\"", en: "Then he brought a glass of water and set it beside Abi. \"So Abi won't be thirsty when he wakes up.\"" },
        scene: { focus: 330, bg: "living", time: "night", props: [{ k: "cup", x: 340 }], mo: [{ pose: "pose-04", x: 410 }, { who: "ayah", pose: "doze-sit", x: 270 }] },
      },
      {
        text: { id: "Abi membuka satu matanya dan tersenyum. \"Siapa yang menyelimuti Abi, ya?\" \"Rahasia!\" bisik Baby Mo.", en: "Abi opened one eye and smiled. \"Now who tucked me in?\" \"It's a secret!\" whispered Baby Mo." },
        scene: { focus: 330, bg: "living", time: "night", mo: [{ pose: "pose-03", x: 400 }, { who: "ayah", pose: "hug-pillow-sit", x: 275 }], fx: ["sparkle"] },
      },
      {
        text: { id: "\"Terima kasih sudah bekerja, Abi,\" kata Baby Mo. Abi memeluknya. \"Bekerja untuk keluarga itu sedekah paling besar, Mo.\"", en: "\"Thank you for working, Abi,\" said Baby Mo. Abi hugged him. \"Working for your family is the biggest charity, Mo.\"" },
        quote: { id: "\"Dinar yang paling besar pahalanya adalah dinar yang kamu nafkahkan untuk keluargamu.\" (HR. Muslim)", en: "\"The dinar with the greatest reward is the one you spend on your family.\" (Muslim)" },
        scene: { bg: "living", time: "night", mo: [{ who: "ayah", pose: "hug-mo", x: 340 }], fx: ["hearts"] },
      },
      {
        text: { id: "\"Besok ceritanya dilanjutkan, ya. Kucingnya belum terbang,\" kata Abi. Baby Mo tertawa.", en: "\"Let's finish the story tomorrow. The cat hasn't flown yet,\" said Abi. Baby Mo giggled." },
        scene: { focus: 330, bg: "living", time: "night", props: [{ k: "books", x: 470 }, { k: "kitten", x: 530 }], mo: [{ pose: "pose-05", x: 400 }, { who: "ayah", pose: "ok-wink-sit", x: 275 }] },
      },
      {
        text: { id: "Malam itu Baby Mo berdoa, \"Ya Allah, jagalah Abi yang capek bekerja.\" Apa yang bisa kamu lakukan saat Abi atau Umi pulang? 🏠", en: "That night Baby Mo prayed, \"O Allah, look after Abi, who works so hard.\" What could you do when Abi or Umi gets home? 🏠" },
        scene: { bg: "bedroom", time: "night", props: [{ k: "teddy", x: 480 }, { k: "lamp", x: 560, s: 0.85 }], mo: [{ pose: "pose-35", x: 360 }], fx: ["stars"] },
      },
    ],
  },

  /* ───────────────────────── Abi 2. First sujud with Abi ───────────────────────── */
  {
    slug: "sujud-pertama-bersama-abi",
    pose: "baby-mo-pose-17.png",
    published: "2026-11-08",
    title: { id: "Sujud Pertama Bersama Abi", en: "My First Sujud with Abi" },
    hook: {
      id: "Baby Mo sholat di samping Abi. Waktu sujud, ia tidak mau bangun — karena ada banyak sekali yang ingin ia bisikkan!",
      en: "Baby Mo prays beside Abi. In sujud he doesn't want to get up — there's so much he wants to whisper!",
    },
    anchor: { type: "parenting", slug: "mulai-sholat" },
    takeaway: {
      id: "Anak kecil belajar sholat dengan meniru dan merasa dekat. Ajak di samping kita, biarkan meniru, dan kenalkan sujud sebagai waktu berbisik kepada Allah.",
      en: "Little ones learn to pray by copying and feeling close. Keep them beside you, let them copy, and present sujud as a time to whisper to Allah.",
    },
    tags: ["sholat", "sujud", "abi", "doa", "meniru", "ibadah"],
    cover: {
      focus: 330, bg: "living", time: "dusk",
      props: [{ k: "mat", x: 330 }],
      mo: [{ pose: "pose-17", x: 380 }, { who: "ayah", pose: "sujud", x: 250 }],
      fx: ["sparkle"],
    },
    pages: [
      {
        text: { id: "Adzan Maghrib terdengar dari masjid. Abi menutup bukunya. \"Waktunya sholat, Mo.\"", en: "The Maghrib adhan drifted over from the mosque. Abi closed his book. \"Time to pray, Mo.\"" },
        scene: { focus: 320, bg: "living", time: "dusk", props: [{ k: "minaret", x: 560, y: 300, s: 0.7 }], mo: [{ pose: "pose-31", x: 380 }, { who: "ayah", pose: "check-watch", x: 260 }], fx: ["notes"] },
      },
      {
        text: { id: "\"Aku ikut! Aku mau sholat di samping Abi!\" Baby Mo berlari mengambil peci kecilnya.", en: "\"Me too! I want to pray next to Abi!\" Baby Mo ran to get his little cap." },
        scene: { bg: "living", time: "dusk", mo: [{ pose: "run", x: 360, move: "hop" }], fx: ["sparkle"] },
      },
      {
        text: { id: "Mereka berwudhu dulu. Air dingin di wajah. Air dingin di tangan. \"Brrr, segar!\"", en: "First they did wudhu. Cool water on the face. Cool water on the hands. \"Brrr, fresh!\"" },
        scene: { focus: 330, bg: "bathroom", props: [{ k: "faucet", x: 470 }], mo: [{ pose: "pose-28", x: 370 }, { who: "ayah", pose: "hands-together-thanks", x: 250 }], fx: ["bubbles"] },
      },
      {
        text: { id: "Abi menggelar dua sajadah: satu besar, satu kecil. \"Yang kecil untuk jagoan.\"", en: "Abi laid out two prayer mats: one big, one small. \"The little one is for my champion.\"" },
        scene: { focus: 330, bg: "living", time: "dusk", props: [{ k: "mat", x: 400 }, { k: "mat", x: 250, s: 1.3 }], mo: [{ pose: "pose-25", x: 400 }, { who: "ayah", pose: "kneel-present", x: 260 }] },
      },
      {
        text: { id: "\"Allahu Akbar.\" Abi mengangkat tangan. Baby Mo melirik, lalu ikut mengangkat tangannya tinggi-tinggi.", en: "\"Allahu Akbar.\" Abi raised his hands. Baby Mo peeked, then raised his hands up high too." },
        scene: { bg: "living", time: "dusk", props: [{ k: "mat", x: 360 }], mo: [{ pose: "pose-26", x: 360 }], fx: ["sparkle"] },
      },
      {
        text: { id: "Abi membungkuk — ruku. Baby Mo membungkuk juga… sampai hampir terguling. Ups!", en: "Abi bowed — ruku. Baby Mo bowed too… so far he nearly toppled over. Oops!" },
        scene: { bg: "living", time: "dusk", props: [{ k: "mat", x: 360 }], mo: [{ pose: "pose-34", x: 360, move: "sway" }] },
      },
      {
        text: { id: "Lalu Abi turun bersujud. Dahi, hidung, tangan, lutut, dan ujung kaki menyentuh sajadah.", en: "Then Abi went down into sujud. Forehead, nose, hands, knees and toes all touched the mat." },
        scene: { focus: 320, bg: "living", time: "dusk", props: [{ k: "mat", x: 260 }], mo: [{ pose: "pose-40", x: 400 }, { who: "ayah", pose: "sujud", x: 260 }] },
      },
      {
        text: { id: "Baby Mo ikut bersujud di sajadah kecilnya. Hidungnya menempel. Sajadahnya wangi sabun.", en: "Baby Mo went into sujud on his little mat. His nose touched it. The mat smelled of soap." },
        scene: { focus: 330, bg: "living", time: "dusk", props: [{ k: "mat", x: 400 }], mo: [{ pose: "pose-17", x: 400 }, { who: "ayah", pose: "sujud", x: 255 }] },
      },
      {
        text: { id: "Waktu Abi bangun, Baby Mo masih sujud. Abi duduk… Baby Mo masih sujud. Abi mengucap salam… Baby Mo MASIH sujud!", en: "When Abi got up, Baby Mo was still in sujud. Abi sat… Baby Mo was still in sujud. Abi said the salam… Baby Mo was STILL in sujud!" },
        scene: { focus: 330, bg: "living", time: "dusk", props: [{ k: "mat", x: 400 }], mo: [{ pose: "pose-17", x: 400 }, { who: "ayah", pose: "surprised-cheeks-sit", x: 260 }] },
      },
      {
        text: { id: "\"Mo? Kamu tertidur?\" bisik Abi. Baby Mo mengangkat kepala. \"Belum selesai, Abi! Aku lagi bisik-bisik sama Allah.\"", en: "\"Mo? Did you fall asleep?\" whispered Abi. Baby Mo lifted his head. \"I'm not done, Abi! I'm whispering to Allah.\"" },
        scene: { focus: 330, bg: "living", time: "night", props: [{ k: "mat", x: 400 }], mo: [{ pose: "pose-23", x: 400 }, { who: "ayah", pose: "teach-point-kneel", x: 265 }], fx: ["sparkle"] },
      },
      {
        text: { id: "\"Bisik apa saja?\" tanya Abi. Baby Mo menghitung dengan jari: \"Minta Umi sehat. Minta Ais nggak ambil mainanku. Minta kucing tetangga cepat punya anak…\"", en: "\"Whispering what?\" asked Abi. Baby Mo counted on his fingers: \"For Umi to be healthy. For Ais not to take my toys. For the neighbour's cat to have kittens soon…\"" },
        scene: { bg: "living", time: "night", props: [{ k: "kitten", x: 490 }, { k: "heart", x: 440, y: 230, s: 0.6 }], mo: [{ pose: "idea", x: 360 }] },
      },
      {
        text: { id: "Abi tertawa pelan dan memeluknya. \"Masya Allah. Kamu tahu, Mo? Sujud itu waktu kita paling dekat dengan Allah.\"", en: "Abi laughed softly and hugged him. \"Masha Allah. Do you know, Mo? Sujud is when we're closest to Allah.\"" },
        quote: { id: "\"Keadaan seorang hamba paling dekat dengan Rabbnya adalah ketika ia sedang sujud, maka perbanyaklah doa.\" (HR. Muslim)", en: "\"The closest a servant is to his Lord is when he is in prostration, so make plenty of du'a.\" (Muslim)" },
        scene: { bg: "living", time: "night", props: [{ k: "mat", x: 470 }], mo: [{ who: "ayah", pose: "hug-mo", x: 340 }], fx: ["hearts"] },
      },
      {
        text: { id: "\"Jadi boleh bisik-bisik lama?\" \"Boleh. Allah selalu mendengar, mau bisik pelan atau keras.\"", en: "\"So I can whisper for a long time?\" \"Yes. Allah always hears — soft whispers or loud ones.\"" },
        scene: { focus: 330, bg: "living", time: "night", mo: [{ pose: "pose-07", x: 400 }, { who: "ayah", pose: "hand-heart-kneel", x: 265 }], fx: ["sparkle"] },
      },
      {
        text: { id: "Sejak hari itu, Baby Mo selalu membawa sajadah kecilnya setiap kali Abi berkata, \"Waktunya sholat.\"", en: "From that day, Baby Mo always brought his little mat whenever Abi said, \"Time to pray.\"" },
        scene: { focus: 330, bg: "living", time: "dusk", props: [{ k: "mat", x: 410 }], mo: [{ pose: "yes", x: 400 }, { who: "ayah", pose: "thumbs-up-kneel", x: 265 }] },
      },
      {
        text: { id: "Kadang Baby Ais ikut, kadang Kak Adam yang di depan. Sajadahnya berjajar seperti kereta.", en: "Sometimes Baby Ais joined, sometimes Kak Adam stood at the front. The mats lined up like a train." },
        scene: { focus: 330, bg: "living", time: "dusk", props: [{ k: "mat", x: 400 }], mo: [{ who: "ais", pose: "dua-mat", x: 255 }, { pose: "pose-35", x: 400 }, { who: "adam", pose: "dua-hands", x: 330 }] },
      },
      {
        text: { id: "Dan setiap sujud, Baby Mo berbisik paling lama. Kalau kamu sujud, kamu mau bisik apa kepada Allah? 🤲", en: "And in every sujud, Baby Mo whispered the longest. When you're in sujud, what will you whisper to Allah? 🤲" },
        scene: { bg: "living", time: "night", props: [{ k: "mat", x: 360 }], mo: [{ pose: "pose-17", x: 360 }], fx: ["stars", "sparkle"] },
      },
    ],
  },

  /* ───────────────────────── Abi 3. Abi's headache ───────────────────────── */
  {
    slug: "hari-abi-pusing",
    pose: "baby-mo-pose-04.png",
    published: "2026-11-08",
    title: { id: "Hari Abi Pusing", en: "The Day Abi Had a Headache" },
    hook: {
      id: "Kepala Abi pusing. Si kembar ingin menolong — dengan \"mode semut\": jalan jinjit, bicara berbisik, dan hadiah-hadiah kecil.",
      en: "Abi has a headache. The twins want to help — in \"ant mode\": tiptoeing, whispering, and leaving little gifts.",
    },
    anchor: { type: "doa", slug: "doa-kedua-orang-tua" },
    takeaway: {
      id: "Anak bisa diajak merawat orang tuanya sejak kecil: berbicara lembut, menolong hal kecil, dan mendoakan.",
      en: "Even little children can care for their parents: speaking gently, helping in small ways, and praying for them.",
    },
    tags: ["abi", "sakit", "merawat", "berbakti", "si kembar", "doa orang tua"],
    cover: {
      focus: 320, bg: "living",
      props: [{ k: "cup", x: 450 }, { k: "heart", x: 470, y: 230, s: 0.6 }],
      mo: [{ pose: "pose-04", x: 380 }, { who: "ayah", pose: "grateful-heart-sit", x: 255 }, { who: "ais", pose: "heart-hands", x: 470 }],
      fx: ["hearts"],
    },
    pages: [
      {
        text: { id: "Hari Ahad pagi, Baby Mo dan Baby Ais sedang bermain drum panci. DUNG! DUNG! TRANG!", en: "On Sunday morning, Baby Mo and Baby Ais were playing pot drums. BOOM! BOOM! CLANG!" },
        scene: { focus: 330, bg: "kitchen", props: [{ k: "bowl", x: 470 }, { k: "soup", x: 540 }], mo: [{ pose: "pose-30", x: 390, move: "sway" }, { who: "ais", pose: "headphones-dance", x: 270 }], fx: ["notes"] },
      },
      {
        text: { id: "Lalu mereka melihat Abi duduk sambil memegang kepala. Matanya terpejam. \"Abi kenapa?\"", en: "Then they saw Abi sitting, holding his head. His eyes were shut. \"What's wrong, Abi?\"" },
        scene: { focus: 320, bg: "living", mo: [{ pose: "pose-40", x: 380 }, { who: "ayah", pose: "stressed-head-sit", x: 255 }] },
      },
      {
        text: { id: "\"Kepala Abi pusing, Sayang,\" kata Abi pelan. \"Abi butuh istirahat sebentar.\"", en: "\"My head hurts, sweetheart,\" Abi said softly. \"I need to rest for a little while.\"" },
        scene: { focus: 320, bg: "living", mo: [{ who: "ais", pose: "sad-tears", x: 380 }, { who: "ayah", pose: "stressed-head-sit", x: 255 }] },
      },
      {
        text: { id: "Si kembar berkumpul di pojok. \"Kita harus menolong Abi,\" bisik Baby Ais. \"Tapi bagaimana?\"", en: "The twins huddled in a corner. \"We have to help Abi,\" whispered Baby Ais. \"But how?\"" },
        scene: { focus: 330, bg: "living", props: [{ k: "teddy", x: 480 }], mo: [{ pose: "pose-22", x: 390 }, { who: "ais", pose: "think-question", x: 280 }] },
      },
      {
        text: { id: "\"Aku tahu! MODE SEMUT!\" kata Baby Mo. \"Semut itu jalannya pelan, nggak berisik, tapi kerjanya banyak!\"", en: "\"I know! ANT MODE!\" said Baby Mo. \"Ants walk quietly, they don't make noise, but they get lots done!\"" },
        scene: { focus: 330, bg: "living", props: [{ k: "ants", x: 480 }], mo: [{ pose: "idea", x: 380 }, { who: "ais", pose: "idea-bulb", x: 270 }], fx: ["sparkle"] },
      },
      {
        text: { id: "Mode semut dimulai. Panci disimpan. Mereka berjalan jinjit: tuk… tuk… tuk… Sangat pelan.", en: "Ant mode began. The pots went away. They tiptoed: tip… tip… tip… Very quietly." },
        scene: { focus: 330, bg: "living", props: [{ k: "ants", x: 480 }], mo: [{ pose: "pose-42", x: 390 }, { who: "ais", pose: "peek-wall", x: 270 }] },
      },
      {
        text: { id: "Semut pertama, Baby Mo, membawa segelas air hangat dengan dua tangan. Pelan… jangan tumpah…", en: "Ant number one, Baby Mo, carried a glass of warm water with both hands. Slowly… don't spill…" },
        scene: { focus: 320, bg: "living", props: [{ k: "cup", x: 420 }], mo: [{ pose: "pose-04", x: 390 }, { who: "ayah", pose: "drink-cup-sit", x: 260 }] },
      },
      {
        text: { id: "Semut kedua, Baby Ais, membawa bantal kecil dan menaruhnya di belakang punggung Abi.", en: "Ant number two, Baby Ais, brought a little cushion and tucked it behind Abi's back." },
        scene: { focus: 320, bg: "living", mo: [{ who: "ais", pose: "hug-star-stand", x: 390 }, { who: "ayah", pose: "hug-pillow-sit", x: 260 }] },
      },
      {
        text: { id: "Lalu dua semut kecil memijat bahu Abi dengan jari-jari mungil mereka. Pijat… pijat… pijat.", en: "Then the two little ants massaged Abi's shoulders with their tiny fingers. Squeeze… squeeze… squeeze." },
        scene: { focus: 320, bg: "living", mo: [{ pose: "pose-36", x: 390 }, { who: "ayah", pose: "calm-sit", x: 260 }, { who: "ais", pose: "heart-hands-smile", x: 160 }], fx: ["hearts"] },
      },
      {
        text: { id: "Baby Ais menggambar kartu: Abi tersenyum, dengan matahari besar. Tulisannya: \"Cepat sembuh, Abi.\"", en: "Baby Ais drew a card: Abi smiling, with a big sun. It said: \"Get well soon, Abi.\"" },
        scene: { bg: "living", props: [{ k: "drawing", x: 480 }], mo: [{ who: "ais", pose: "draw-floor", x: 360 }], fx: ["sparkle"] },
      },
      {
        text: { id: "Baby Mo menutup tirai supaya cahaya tidak menyilaukan, lalu duduk diam menemani Abi.", en: "Baby Mo closed the curtains so the light wasn't too bright, then sat quietly beside Abi." },
        scene: { focus: 320, bg: "living", time: "dusk", props: [{ k: "lamp", x: 520, s: 0.85 }], mo: [{ pose: "pose-12", x: 390 }, { who: "ayah", pose: "doze-sit", x: 260 }], fx: ["zzz"] },
      },
      {
        text: { id: "Sebelum tidur siang, si kembar berdoa untuk Abi: \"Rabbighfirlii wa li waalidayya, warhamhumaa kamaa rabbayaanii shaghiiraa.\"", en: "Before their nap, the twins prayed for Abi: \"Rabbighfirlii wa li waalidayya, warhamhumaa kamaa rabbayaanii shaghiiraa.\"" },
        quote: { id: "\"Ya Tuhanku, sayangilah keduanya sebagaimana mereka berdua telah mendidikku waktu kecil.\" (QS. Al-Isra: 24)", en: "\"My Lord, have mercy on them both, as they raised me when I was small.\" (Qur'an, Al-Isra 17:24)" },
        scene: { focus: 330, bg: "bedroom", props: [{ k: "heart", x: 470, y: 240, s: 0.6 }], mo: [{ pose: "pose-35", x: 390 }, { who: "ais", pose: "dua-hands-closed", x: 275 }], fx: ["sparkle"] },
      },
      {
        text: { id: "Sore harinya, Abi bangun dan meregangkan badan. \"Masya Allah… kepala Abi sudah ringan!\"", en: "That afternoon, Abi woke up and stretched. \"Masha Allah… my head feels light again!\"" },
        scene: { focus: 320, bg: "living", time: "dusk", mo: [{ pose: "wow", x: 390 }, { who: "ayah", pose: "stretch-up-sit", x: 260 }], fx: ["sparkle"] },
      },
      {
        text: { id: "Abi melihat gelas kosong, bantal kecil, dan kartu bergambar matahari. \"Siapa semut-semut baik ini?\"", en: "Abi saw the empty glass, the little cushion and the sunshine card. \"Who were these kind little ants?\"" },
        scene: { focus: 330, bg: "living", time: "dusk", props: [{ k: "drawing", x: 450 }, { k: "cup", x: 520 }], mo: [{ who: "ais", pose: "giggle", x: 390 }, { who: "ayah", pose: "surprised-cheeks-sit", x: 265 }] },
      },
      {
        text: { id: "\"KAMI!\" Si kembar melompat ke pelukan Abi. \"Terima kasih, semut-semut kesayangan Abi.\"", en: "\"US!\" The twins jumped into Abi's arms. \"Thank you, my favourite little ants.\"" },
        scene: { focus: 320, bg: "living", time: "dusk", mo: [{ who: "ais", pose: "arms-wide-joy", x: 440 }, { who: "ayah", pose: "hug-mo", x: 320 }], fx: ["hearts"] },
      },
      {
        text: { id: "Malam itu, panci-panci kembali jadi drum — tapi pelan saja. Kalau Abi atau Umi sakit, kamu mau jadi semut apa? 🐜", en: "That night, the pots became drums again — but softly. If Abi or Umi felt unwell, what kind of ant would you be? 🐜" },
        scene: { focus: 330, bg: "kitchen", time: "night", props: [{ k: "bowl", x: 470 }, { k: "ants", x: 540 }], mo: [{ pose: "pose-30", x: 390, move: "sway" }, { who: "ais", pose: "giggle", x: 275 }], fx: ["notes"] },
      },
    ],
  },

  /* ───────────────────────── Abi 4. Abi's watch ───────────────────────── */
  {
    slug: "jam-tangan-ajaib-abi",
    pose: "baby-mo-pose-08.png",
    published: "2026-11-08",
    title: { id: "Jam Tangan Ajaib Abi", en: "Abi's Magic Watch" },
    hook: {
      id: "Abi sering melirik jam tangannya, lalu tiba-tiba berhenti bekerja. Baby Mo yakin jam itu ajaib. Apa rahasianya?",
      en: "Abi keeps glancing at his watch and then suddenly stops working. Baby Mo is sure it's magic. What's the secret?",
    },
    anchor: { type: "doa", slug: "mendengar-adzan" },
    takeaway: {
      id: "Anak belajar bahwa sholat punya waktunya dari melihat orang tua menghentikan kesibukan saat adzan.",
      en: "Children learn that prayer has its times by watching their parents put things down when the adhan calls.",
    },
    tags: ["abi", "waktu sholat", "adzan", "jam", "disiplin", "sholat"],
    cover: {
      focus: 320, bg: "living",
      props: [{ k: "clock", x: 470, y: 220 }],
      mo: [{ pose: "pose-08", x: 380 }, { who: "ayah", pose: "check-watch", x: 260 }],
      fx: ["sparkle"],
    },
    pages: [
      {
        text: { id: "Abi punya jam tangan hitam. Setiap hari Abi meliriknya — lirik, lirik, lirik.", en: "Abi had a black watch. Every day he glanced at it — glance, glance, glance." },
        scene: { focus: 320, bg: "living", mo: [{ pose: "pose-22", x: 380 }, { who: "ayah", pose: "check-watch", x: 260 }] },
      },
      {
        text: { id: "Siang itu Abi sedang mengetik di laptop. Tak-tik-tak-tik. Lalu Abi melirik jamnya… dan langsung berdiri!", en: "That noon Abi was typing on his laptop. Tap-tap-tap-tap. Then he glanced at his watch… and stood straight up!" },
        scene: { focus: 320, bg: "living", props: [{ k: "laptop", x: 450 }], mo: [{ pose: "pose-40", x: 390 }, { who: "ayah", pose: "laptop-stand", x: 260 }] },
      },
      {
        text: { id: "Sore hari Abi sedang menelepon. \"Iya, Pak… baik…\" Lirik jam — \"Maaf, nanti saya telepon lagi.\" Klik!", en: "In the afternoon Abi was on the phone. \"Yes… certainly…\" Glance at the watch — \"Sorry, I'll call you back.\" Click!" },
        scene: { focus: 320, bg: "living", time: "dusk", mo: [{ pose: "pose-33", x: 390 }, { who: "ayah", pose: "phone-call", x: 260 }] },
      },
      {
        text: { id: "\"Jam tangan Abi pasti AJAIB!\" pikir Baby Mo. \"Jamnya bisa menyuruh Abi berhenti!\"", en: "\"Abi's watch must be MAGIC!\" thought Baby Mo. \"It can make Abi stop!\"" },
        scene: { bg: "living", time: "dusk", props: [{ k: "clock", x: 480, y: 220, s: 1.2 }], mo: [{ pose: "wow", x: 360 }], fx: ["sparkle"] },
      },
      {
        text: { id: "Baby Mo mengajak Baby Ais menyelidiki. Mereka bersembunyi di balik sofa dengan kaca pembesar.", en: "Baby Mo got Baby Ais to investigate. They hid behind the sofa with a magnifying glass." },
        scene: { focus: 330, bg: "living", props: [{ k: "magnifier", x: 470 }], mo: [{ pose: "pose-09", x: 390 }, { who: "ais", pose: "magnifier-peek", x: 275 }] },
      },
      {
        text: { id: "Mereka mengamati. Setiap Abi berhenti, selalu ada suara yang sama dari kejauhan: \"Allaahu Akbar, Allaahu Akbar…\"", en: "They watched. Every time Abi stopped, the same sound came from far away: \"Allaahu Akbar, Allaahu Akbar…\"" },
        scene: { focus: 330, bg: "living", props: [{ k: "minaret", x: 560, y: 300, s: 0.7 }], mo: [{ pose: "pose-31", x: 390 }, { who: "ais", pose: "surprised", x: 275 }], fx: ["notes"] },
      },
      {
        text: { id: "\"Abi! Kami tahu rahasianya!\" kata si kembar. \"Jam Abi berbunyi adzan!\" Abi tertawa.", en: "\"Abi! We know the secret!\" said the twins. \"Your watch plays the adhan!\" Abi laughed." },
        scene: { focus: 320, bg: "living", mo: [{ pose: "pose-08", x: 390 }, { who: "ayah", pose: "cheer-kneel", x: 260 }] },
      },
      {
        text: { id: "\"Jamnya biasa saja,\" kata Abi. \"Abi melihat jam supaya tahu kapan waktu sholat datang. Sholat itu punya waktunya sendiri.\"", en: "\"It's just an ordinary watch,\" said Abi. \"I look at it so I know when prayer time is coming. Each prayer has its own time.\"" },
        quote: { id: "\"Sesungguhnya sholat itu adalah kewajiban yang ditentukan waktunya atas orang-orang yang beriman.\" (QS. An-Nisa: 103)", en: "\"Indeed, prayer has been decreed upon the believers at fixed times.\" (Qur'an, An-Nisa 4:103)" },
        scene: { focus: 320, bg: "living", props: [{ k: "clock", x: 470, y: 220 }], mo: [{ pose: "pose-22", x: 390 }, { who: "ayah", pose: "teach-point-kneel", x: 265 }] },
      },
      {
        text: { id: "\"Subuh waktu langit masih gelap. Zuhur waktu matahari di atas kepala. Ashar waktu bayangan memanjang…\"", en: "\"Fajr is when the sky is still dark. Dhuhr is when the sun is overhead. Asr is when shadows grow long…\"" },
        scene: { bg: "garden", props: [{ k: "sun", x: 420, y: 120 }], mo: [{ pose: "pose-15", x: 350 }], fx: ["sparkle"] },
      },
      {
        text: { id: "\"…Maghrib waktu matahari terbenam, dan Isya waktu bintang-bintang keluar.\"", en: "\"…Maghrib is when the sun sets, and Isha is when the stars come out.\"" },
        scene: { bg: "garden", time: "night", props: [{ k: "moon", x: 470, y: 120 }], mo: [{ pose: "pose-41", x: 350 }], fx: ["stars"] },
      },
      {
        text: { id: "\"Kalau adzan datang, sepenting apa pun pekerjaan Abi, Abi berhenti dulu. Karena Allah yang memanggil.\"", en: "\"When the adhan comes, however important my work is, I stop first. Because it's Allah calling.\"" },
        scene: { focus: 320, bg: "living", props: [{ k: "laptop", x: 460 }], mo: [{ pose: "pose-07", x: 390 }, { who: "ayah", pose: "hand-heart-kneel", x: 265 }] },
      },
      {
        text: { id: "\"Aku juga mau punya jam tangan!\" kata Baby Mo. Abi mengambil spidol dan menggambar jam di pergelangan tangannya.", en: "\"I want a watch too!\" said Baby Mo. Abi took a marker and drew a watch on his wrist." },
        scene: { focus: 320, bg: "living", mo: [{ pose: "pose-25", x: 390 }, { who: "ayah", pose: "write-notepad-sit", x: 260 }], fx: ["sparkle"] },
      },
      {
        text: { id: "Mulai hari itu, Baby Mo jadi Petugas Penjaga Waktu Sholat. Setiap mendengar adzan, ia berteriak, \"WAKTUNYA SHOLAT!\"", en: "From that day, Baby Mo became the Prayer-Time Keeper. Whenever he heard the adhan, he shouted, \"PRAYER TIME!\"" },
        scene: { focus: 330, bg: "living", props: [{ k: "minaret", x: 560, y: 300, s: 0.7 }], mo: [{ pose: "pose-26", x: 390 }, { who: "ais", pose: "megaphone", x: 275 }], fx: ["notes"] },
      },
      {
        text: { id: "Lalu ia berhenti bermain, menjawab adzan pelan-pelan, dan berlari mengambil sajadah kecilnya.", en: "Then he stopped playing, answered the adhan softly, and ran to fetch his little prayer mat." },
        scene: { bg: "living", props: [{ k: "mat", x: 470 }, { k: "blocks", x: 560 }], mo: [{ pose: "run", x: 360, move: "hop" }] },
      },
      {
        text: { id: "Abi tersenyum bangga. \"Ternyata yang ajaib bukan jamnya — tapi hati yang mau berhenti waktu dipanggil Allah.\"", en: "Abi smiled proudly. \"The magic isn't the watch — it's a heart that's ready to stop when Allah calls.\"" },
        scene: { focus: 320, bg: "living", time: "dusk", props: [{ k: "mat", x: 430 }], mo: [{ pose: "pose-35", x: 390 }, { who: "ayah", pose: "dua-mat-kneel", x: 260 }], fx: ["sparkle"] },
      },
      {
        text: { id: "Kalau kamu punya jam tangan ajaib, kamu mau berhenti untuk apa saja? Coba gambar jam di tanganmu! ⌚", en: "If you had a magic watch, what would you stop for? Try drawing a watch on your wrist! ⌚" },
        scene: { bg: "living", time: "dusk", props: [{ k: "clock", x: 480, y: 220 }], mo: [{ pose: "alright", x: 360 }], fx: ["sparkle"] },
      },
    ],
  },

  /* ───────────────────────── Abi 5. Who falls asleep first ───────────────────────── */
  {
    slug: "siapa-yang-tidur-duluan",
    pose: "baby-mo-pose-39.png",
    published: "2026-11-08",
    title: { id: "Siapa yang Tidur Duluan?", en: "Who Falls Asleep First?" },
    hook: {
      id: "Abi bertugas menidurkan si kembar malam ini. Tapi ceritanya terlalu panjang… dan yang tertidur duluan justru Abi!",
      en: "Abi's on bedtime duty tonight. But the story is too long… and the first one to fall asleep is Abi!",
    },
    anchor: { type: "doa", slug: "sebelum-tidur" },
    takeaway: {
      id: "Rutinitas tidur yang hangat — cerita, doa, dan tawa — membuat anak menutup hari dengan tenang, bahkan ketika orang tua sendiri kelelahan.",
      en: "A warm bedtime routine — a story, a du'a and a laugh — helps children end the day calmly, even when parents are worn out too.",
    },
    tags: ["tidur", "abi", "doa sebelum tidur", "si kembar", "lucu", "malam"],
    cover: {
      focus: 350, bg: "bedroom", time: "night",
      props: [{ k: "books", x: 520 }],
      mo: [{ pose: "pose-03", x: 450 }, { who: "ayah", pose: "sleep-blanket", x: 255, flip: true }],
      fx: ["zzz", "stars"],
    },
    pages: [
      {
        text: { id: "Malam itu Umi menginap di rumah Nenek. \"Malam ini Abi yang menidurkan kalian,\" kata Abi gagah.", en: "That night Umi was staying at Grandma's. \"Tonight I'll put you to bed,\" said Abi bravely." },
        scene: { focus: 320, bg: "bedroom", time: "night", mo: [{ pose: "pose-25", x: 390 }, { who: "ayah", pose: "stand-arms-crossed", x: 260 }], fx: ["stars"] },
      },
      {
        text: { id: "Sikat gigi — beres. Pakai piyama — beres. Pipis dulu — beres. \"Sekarang naik kasur!\"", en: "Teeth brushed — done. Pyjamas on — done. Wee first — done. \"Now into bed!\"" },
        scene: { focus: 320, bg: "bedroom", time: "night", mo: [{ who: "ais", pose: "brush-teeth", x: 390 }, { who: "ayah", pose: "clipboard-check", x: 260 }] },
      },
      {
        text: { id: "\"Cerita dulu, Abi! Yang panjaaang!\" pinta Baby Mo. Baby Ais mengangguk-angguk.", en: "\"Story first, Abi! A looong one!\" begged Baby Mo. Baby Ais nodded and nodded." },
        scene: { focus: 330, bg: "bedroom", time: "night", props: [{ k: "books", x: 470 }], mo: [{ pose: "pose-05", x: 390 }, { who: "ais", pose: "sit-chin-hands", x: 280 }] },
      },
      {
        text: { id: "Abi membuka buku. \"Di sebuah hutan, hiduplah seekor jerapah yang lehernya sangat… sangat… panjang…\"", en: "Abi opened the book. \"In a forest there lived a giraffe whose neck was very… very… long…\"" },
        scene: { focus: 330, bg: "bedroom", time: "night", props: [{ k: "giraffe", x: 520, s: 0.7 }], mo: [{ who: "ayah", pose: "read-with-mo", x: 340 }, { who: "ais", pose: "read-cushion", x: 470 }] },
      },
      {
        text: { id: "\"…jerapah itu berjalan… dan berjalan…\" Abi menguap. \"Hoaaam… dan berjalan…\"", en: "\"…the giraffe walked… and walked…\" Abi yawned. \"Hooaaam… and walked…\"" },
        scene: { focus: 320, bg: "bedroom", time: "night", props: [{ k: "giraffe", x: 470, s: 0.6 }], mo: [{ pose: "pose-12", x: 390 }, { who: "ayah", pose: "yawn-sit", x: 260 }] },
      },
      {
        text: { id: "Kepala Abi terangguk-angguk. Bukunya miring. \"Abi?\" Hening. Lalu: \"Krrrrr… pssst… krrrrr…\"", en: "Abi's head nodded and nodded. The book tilted. \"Abi?\" Silence. Then: \"Snorrre… pssst… snorrre…\"" },
        scene: { focus: 320, bg: "bedroom", time: "night", props: [{ k: "books", x: 440 }], mo: [{ pose: "pose-40", x: 390 }, { who: "ayah", pose: "doze-sit", x: 260 }], fx: ["zzz"] },
      },
      {
        text: { id: "Si kembar saling pandang… lalu tertawa sambil menutup mulut. \"Abi tidur duluan!\"", en: "The twins looked at each other… then giggled behind their hands. \"Abi fell asleep first!\"" },
        scene: { focus: 330, bg: "bedroom", time: "night", mo: [{ pose: "pose-03", x: 390 }, { who: "ais", pose: "giggle", x: 280 }], fx: ["sparkle"] },
      },
      {
        text: { id: "\"Sekarang kita yang menidurkan Abi,\" bisik Baby Ais. \"Mode semut!\"", en: "\"Now we put Abi to bed,\" whispered Baby Ais. \"Ant mode!\"" },
        scene: { focus: 330, bg: "bedroom", time: "night", props: [{ k: "ants", x: 480 }], mo: [{ who: "ais", pose: "idea-point", x: 280 }, { pose: "pose-25", x: 390 }] },
      },
      {
        text: { id: "Baby Mo menaruh bantal di bawah kepala Abi. Baby Ais menyelimutinya sampai ke dagu.", en: "Baby Mo slid a pillow under Abi's head. Baby Ais pulled the blanket right up to his chin." },
        scene: { focus: 350, bg: "bedroom", time: "night", mo: [{ pose: "pose-36", x: 450 }, { who: "ayah", pose: "sleep-blanket", x: 255, flip: true }], fx: ["zzz"] },
      },
      {
        text: { id: "Baby Mo menaruh boneka beruangnya di samping Abi. \"Supaya Abi nggak takut gelap.\"", en: "Baby Mo put his teddy next to Abi. \"So Abi isn't scared of the dark.\"" },
        scene: { focus: 360, bg: "bedroom", time: "night", props: [{ k: "teddy", x: 395 }], mo: [{ who: "ais", pose: "hug-teddy-wink", x: 470 }, { who: "ayah", pose: "sleep-blanket", x: 260, flip: true }], fx: ["zzz"] },
      },
      {
        text: { id: "Lalu mereka mematikan lampu. Klik. Hanya bulan yang mengintip dari jendela.", en: "Then they switched off the light. Click. Only the moon peeked in through the window." },
        scene: { bg: "bedroom", time: "night", props: [{ k: "lamp", x: 480, s: 0.85 }], mo: [{ pose: "pose-28", x: 360 }], fx: ["stars"] },
      },
      {
        text: { id: "\"Kita belum berdoa,\" kata Baby Ais. Mereka berbaring dan berdoa pelan: \"Bismika Allaahumma ahyaa wa amuut.\"", en: "\"We haven't said our du'a,\" said Baby Ais. They lay down and prayed softly: \"Bismika Allaahumma ahyaa wa amuut.\"" },
        quote: { id: "\"Dengan nama-Mu ya Allah, aku hidup dan aku mati.\" (HR. Bukhari)", en: "\"In Your name, O Allah, I live and I die.\" (Bukhari)" },
        scene: { focus: 330, bg: "bedroom", time: "night", mo: [{ pose: "pose-35", x: 390 }, { who: "ais", pose: "dua-hands-closed", x: 280 }], fx: ["stars", "sparkle"] },
      },
      {
        text: { id: "\"Dan doa untuk Abi juga,\" tambah Baby Mo. \"Ya Allah, semoga Abi mimpi jerapahnya sampai.\"", en: "\"And one for Abi too,\" added Baby Mo. \"O Allah, let Abi dream the giraffe gets there.\"" },
        scene: { focus: 330, bg: "bedroom", time: "night", props: [{ k: "giraffe", x: 500, s: 0.5 }], mo: [{ pose: "pose-07", x: 390 }, { who: "ais", pose: "heart-hands", x: 280 }], fx: ["stars"] },
      },
      {
        text: { id: "Tengah malam Abi terbangun. Ada bantal, selimut, boneka beruang… dan dua anak yang tidur pulas.", en: "At midnight Abi woke up. There was a pillow, a blanket, a teddy… and two children fast asleep." },
        scene: { focus: 320, bg: "bedroom", time: "night", props: [{ k: "teddy", x: 470 }], mo: [{ pose: "pose-39", x: 400 }, { who: "ayah", pose: "surprised-cheeks-sit", x: 270 }], fx: ["stars"] },
      },
      {
        text: { id: "Abi tertawa tanpa suara. \"Siapa menidurkan siapa, ya?\" Ia mencium kening keduanya.", en: "Abi laughed without a sound. \"So who put who to bed?\" He kissed them both on the forehead." },
        scene: { focus: 330, bg: "bedroom", time: "night", mo: [{ who: "ayah", pose: "hand-heart-kneel", x: 270 }, { who: "ais", pose: "sleep-pillow", x: 410 }], fx: ["hearts"] },
      },
      {
        text: { id: "Besok paginya Abi berkata, \"Malam ini, Abi cerita yang pendek saja!\" Si kembar tertawa. Siapa yang biasanya tidur duluan di rumahmu? 🦒", en: "The next morning Abi said, \"Tonight, I'll tell a short story!\" The twins laughed. Who usually falls asleep first at your house? 🦒" },
        scene: { focus: 320, bg: "bedroom", props: [{ k: "giraffe", x: 480, s: 0.6 }], mo: [{ pose: "yeyy", x: 390, move: "hop" }, { who: "ayah", pose: "stretch-up-sit", x: 260 }], fx: ["sparkle"] },
      },
    ],
  },
];
