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
];
