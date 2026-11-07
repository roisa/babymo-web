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
const pu = (i: number) => `tennis-punch-${i}`;
const FOREHAND = loop([1, 2, 3, 4, 5, 6].map(fh));
const BACKHAND = loop([1, 2, 3, 4, 5, 6].map(bh));
const PUNCH = loop([1, 2, 3, 4, 5, 6].map(pu));
/* Adam's animation sets (lib/cerita/friends-poses.ts ADAM_FOR) */
const six = (b: string) => [1, 2, 3, 4, 5, 6].map((i) => `${b}-${i}`);
const WAVE = six("tennis-wave").slice(1, 5);
const CELEBRATE = [...six("tennis-celebrate"), "tennis-celebrate-6", "tennis-celebrate-6", "tennis-celebrate-6"];
const RUN = six("tennis-run");
const SHUFFLE = six("tennis-shuffle");
const BOUNCE = six("tennis-bounce");
/** backhand contact is frame 5 (index 4) → 4 / FPS seconds into the loop */
const HIT = 0.6;
/** forehand contact is frame 4 (index 3), beside the body */
const FH_HIT = 0.45;
/** the swoosh peaks 55% into its 1.8 s loop */
const TRAIL = HIT - 0.99;
const FH_TRAIL = FH_HIT - 0.99;

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
      props: [{ k: "ballbasket", x: 560 }, { k: "ballfly", x: 370, y: 330, d: FH_HIT }, { k: "swoosh", x: 345, y: 330, d: FH_TRAIL }],
      mo: [{ pose: "yeyy", x: 270, move: "hop" }, { who: "adam", pose: fh(1), seq: FOREHAND, fps: FPS, x: 390, move: "still" }],
    },
    pages: [
      {
        text: { id: "Kak Adam punya raket baru, warnanya biru seperti langit. \"Hari ini aku mau belajar forehand!\"", en: "Kak Adam had a new racket, as blue as the sky. \"Today I'm going to learn the forehand!\"" },
        scene: { focus: 330, bg: "court", props: [{ k: "ballbasket", x: 500 }], mo: [{ pose: "pose-25", x: 280 }, { who: "adam", pose: "tennis-wave-2", seq: WAVE, fps: 4, move: "still", x: 400 }], fx: ["sparkle"] },
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
        scene: { focus: 370, bg: "court", props: [{ k: "bonk", x: 405, y: 190 }, { k: "tennisball", x: 470 }], mo: [{ who: "adam", pose: "tennis-oops-3", x: 400 }, { pose: "pose-30", x: 285 }] },
      },
      {
        text: { id: "Kak Adam cemberut. \"Raketnya bandel! Forehand itu susah!\"", en: "Kak Adam scowled. \"This racket is naughty! The forehand is too hard!\"" },
        scene: { focus: 390, bg: "court", mo: [{ who: "adam", pose: "frustrated-stomp", x: 390 }] },
      },
      {
        text: { id: "Abi berlutut dan tertawa kecil. \"Raketnya nggak bandel. Kita belajar pelan-pelan, ya. Abi punya tiga rahasia.\"", en: "Abi knelt down with a little laugh. \"The racket isn't naughty. Let's learn slowly. I've got three secrets.\"" },
        scene: { focus: 350, bg: "court", mo: [{ who: "ayah", pose: "teach-point-kneel", x: 290 }, { who: "adam", pose: "sulk-arms-crossed", x: 420 }], fx: ["sparkle"] },
      },
      {
        text: { id: "Rahasia pertama: mata ke bola. \"Lihat bolanya terus, sampai menempel di senar raket!\"", en: "Secret one: eyes on the ball. \"Keep watching it until it touches the strings!\"" },
        scene: { focus: 380, bg: "court", props: [{ k: "ballbounce", x: 470 }], mo: [{ who: "adam", pose: fh(3), x: 390 }, { pose: "pose-08", x: 270 }] },
      },
      {
        text: { id: "Rahasia kedua: putar badan, seperti pintu yang membuka. Kriiiet… buka!", en: "Secret two: turn your body, like a door swinging open. Creeeak… open!" },
        scene: { focus: 380, bg: "court", mo: [{ who: "adam", pose: fh(2), seq: [fh(1), fh(1), fh(2), fh(3), fh(3), fh(3), fh(2), fh(1)], fps: 4, x: 390, move: "still" }], fx: ["sparkle"] },
      },
      {
        text: { id: "Rahasia ketiga: ayun dari bawah ke atas, lalu raketnya mendarat di bahu — seperti memeluk diri sendiri.", en: "Secret three: swing from low to high, and let the racket land on your shoulder — like giving yourself a hug." },
        scene: { focus: 380, bg: "court", props: [{ k: "swoosh", x: 335, y: 300, d: FH_TRAIL }], mo: [{ who: "adam", pose: fh(4), seq: FOREHAND, fps: FPS, x: 380, move: "still" }] },
      },
      {
        text: { id: "Abi membuat lagu: \"Lihat bola, putar badan, ayun… peluk bahu!\" Mo dan Ais ikut bernyanyi sambil menari.", en: "Abi made up a song: \"Watch the ball, turn around, swing… hug your shoulder!\" Mo and Ais sang along and danced." },
        scene: { focus: 330, bg: "court", mo: [{ pose: "pose-30", x: 390, move: "sway" }, { who: "ais", pose: "jump-joy", x: 270, move: "hop" }], fx: ["notes"] },
      },
      {
        text: { id: "Kak Adam berlatih lagi. Sekali, dua kali… sepuluh kali. Kadang masuk, kadang nyangkut di net, kadang nyasar ke pohon.", en: "Kak Adam practised again. Once, twice… ten times. Sometimes in, sometimes stuck in the net, sometimes lost in a tree." },
        scene: { focus: 380, bg: "court", props: [{ k: "ballfly", x: 370, y: 330, d: FH_HIT }, { k: "ballbasket", x: 250 }], mo: [{ who: "adam", pose: fh(1), seq: FOREHAND, fps: FPS, x: 390, move: "still" }] },
      },
      {
        text: { id: "Baby Mo menghitung dengan jarinya. \"Lima… enam… TUJUH masuk berturut-turut!\"", en: "Baby Mo counted on his fingers. \"Five… six… SEVEN in a row!\"" },
        scene: { focus: 330, bg: "court", props: [{ k: "ballfly", x: 400, y: 330, d: FH_HIT }], mo: [{ pose: "idea", x: 280 }, { who: "adam", pose: fh(1), seq: FOREHAND, fps: FPS, x: 420, move: "still" }], fx: ["sparkle"] },
      },
      {
        text: { id: "Lalu Abi memukul bola yang paling cepat. Kak Adam melihat bola, memutar badan, dan… DUK!", en: "Then Abi hit his fastest ball. Kak Adam watched it, turned, and… THWACK!" },
        scene: { focus: 390, bg: "court", props: [{ k: "swoosh", x: 450, y: 300, d: -0.6 }], mo: [{ who: "adam", pose: "tennis-hit-forehand", x: 390, move: "still" }], fx: ["sparkle"] },
      },
      {
        text: { id: "Bolanya melambung melewati net dan jatuh tepat di dalam garis. \"MASUUUK!\" Semua bersorak.", en: "The ball sailed over the net and landed right inside the line. \"IT'S IN!\" Everyone cheered." },
        scene: { focus: 340, bg: "court", mo: [{ pose: "yeyy", x: 270, move: "hop" }, { who: "adam", pose: "tennis-celebrate-1", seq: CELEBRATE, fps: 8, move: "still", x: 410 }], fx: ["confetti"] },
      },
      {
        text: { id: "Abi menepuk bahunya. \"Hebat bukan karena langsung bisa. Hebat karena terus mencoba. Allah suka amal yang dikerjakan terus-menerus, walau sedikit.\"", en: "Abi patted his shoulder. \"Being great isn't getting it right away. It's keeping on trying. Allah loves deeds done steadily, even small ones.\"" },
        quote: { id: "\"Amalan yang paling dicintai Allah adalah yang paling terus-menerus, meskipun sedikit.\" (HR. Bukhari dan Muslim)", en: "\"The deeds most loved by Allah are those done most consistently, even if they are small.\" (Bukhari and Muslim)" },
        scene: { focus: 350, bg: "court", time: "dusk", mo: [{ who: "ayah", pose: "thumbs-up-kneel", x: 290 }, { who: "adam", pose: "proud-hands-hips", x: 420 }], fx: ["sparkle"] },
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
        scene: { focus: 350, bg: "court", props: [{ k: "tennisball", x: 520 }], mo: [{ who: "ayah", pose: "idea-point-stand", x: 280 }, { who: "adam", pose: "tennis-bounce-1", seq: BOUNCE, fps: 6, move: "still", x: 410 }] },
      },
      {
        text: { id: "\"Gampang!\" kata Kak Adam. Ia melempar bolanya… dan bola itu jatuh tepat di atas kepalanya. TUK!", en: "\"Easy!\" said Kak Adam. He tossed the ball… and it dropped straight onto his head. BONK!" },
        scene: { focus: 380, bg: "court", props: [{ k: "bonk", x: 395, y: 195 }], mo: [{ who: "adam", pose: "tennis-serve-toss", x: 390 }, { pose: "pose-05", x: 270 }] },
      },
      {
        text: { id: "Lemparan kedua terlalu jauh ke belakang. Lemparan ketiga terlalu ke samping — plung! — masuk ke genangan air.", en: "The second toss went too far back. The third went off to the side — splosh! — straight into a puddle." },
        scene: { focus: 380, bg: "court", props: [{ k: "puddle", x: 520 }, { k: "tennisball", x: 520 }], mo: [{ who: "adam", pose: "surprised-hands-up", x: 380 }, { pose: "pose-26", x: 270 }] },
      },
      {
        text: { id: "Baby Mo tertawa sampai terguling. \"Bolanya mau mandi, Kak!\"", en: "Baby Mo laughed so hard he rolled over. \"Your ball wants a bath, Kak!\"" },
        scene: { focus: 360, bg: "court", props: [{ k: "puddle", x: 470 }, { k: "tennisball", x: 470 }], mo: [{ pose: "pose-18", x: 330 }], fx: ["bubbles"] },
      },
      {
        text: { id: "Kak Adam ikut tertawa, tapi lalu menghela napas. \"Servis itu susah, Abi. Banyak sekali yang harus diingat.\"", en: "Kak Adam laughed too, then sighed. \"Serving is hard, Abi. There's so much to remember.\"" },
        scene: { focus: 340, bg: "court", mo: [{ who: "adam", pose: "disappointed-sigh", x: 420 }, { who: "ayah", pose: "listen-sit-box", x: 270 }] },
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
        scene: { focus: 380, bg: "court", props: [{ k: "tennisnet", x: 520 }, { k: "tennisball", x: 470 }], mo: [{ who: "adam", pose: "worried-bite-lip", x: 360 }] },
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
        scene: { focus: 380, bg: "court", time: "dusk", props: [{ k: "ballfly", x: 440, y: 300, s: 1.2 }, { k: "ballfly", x: 380, y: 280, d: 0.5 }], mo: [{ who: "adam", pose: "tennis-serve-6", x: 380 }], fx: ["shootingstar"] },
      },
      {
        text: { id: "\"SERVIS ROKET!\" teriak Baby Mo dan Baby Ais. Mereka melompat-lompat sambil berputar-putar.", en: "\"ROCKET SERVE!\" shouted Baby Mo and Baby Ais. They jumped and spun around." },
        scene: { focus: 330, bg: "court", time: "dusk", mo: [{ pose: "pose-02", x: 390, move: "hop" }, { who: "ais", pose: "jump-cheer", x: 280, move: "hop" }], fx: ["confetti"] },
      },
      {
        text: { id: "Malamnya Kak Adam berbisik, \"Ternyata yang susah jadi gampang kalau dipecah kecil-kecil… dan minta tolong Allah.\" Kamu mau memecah hal sulit apa jadi kecil-kecil? 🚀", en: "That night Kak Adam whispered, \"Hard things get easy when you break them into little pieces… and ask Allah for help.\" What hard thing will you break into little pieces? 🚀" },
        scene: { focus: 380, bg: "bedroom", time: "night", props: [{ k: "racket", x: 500 }, { k: "lamp", x: 560, s: 0.85 }], mo: [{ who: "adam", pose: "pj-dua-bed", x: 390 }], fx: ["stars"] },
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
        scene: { focus: 390, bg: "court", props: [{ k: "ballfly", x: 370, y: 330, d: FH_HIT }], mo: [{ who: "adam", pose: fh(1), seq: FOREHAND, fps: FPS, x: 390, move: "still" }] },
      },
      {
        text: { id: "Setiap bola datang ke sisi kirinya, Kak Adam lari memutar… jauh sekali… supaya bisa memukul pakai forehand.", en: "Whenever a ball came to his left side, Kak Adam ran all the way round it… really far… so he could hit a forehand." },
        scene: { focus: 380, bg: "court", props: [{ k: "ballbounce", x: 280 }], mo: [{ who: "adam", pose: "tennis-run-1", seq: RUN, fps: 10, move: "still", x: 400 }], fx: ["leaves"] },
      },
      {
        text: { id: "Lari ke kiri, lari ke kanan, lari memutar lagi. Hosh… hosh… \"Kakak capek ya?\" tanya Baby Ais.", en: "Run left, run right, run round again. Puff… puff… \"Are you tired, Kak?\" asked Baby Ais." },
        scene: { focus: 340, bg: "court", props: [{ k: "tennisball", x: 520 }], mo: [{ who: "ais", pose: "think-question", x: 280 }, { who: "adam", pose: "tired-hands-knees", x: 410 }] },
      },
      {
        text: { id: "Abi tersenyum. \"Kakak menghindari backhand, ya?\" Kak Adam menunduk. \"Backhand-ku jelek, Abi. Bolanya selalu melenceng.\"", en: "Abi smiled. \"You're avoiding your backhand, aren't you?\" Kak Adam looked down. \"My backhand is bad, Abi. The ball always goes wrong.\"" },
        scene: { focus: 350, bg: "court", mo: [{ who: "ayah", pose: "think-chin-stand", x: 280 }, { who: "adam", pose: "sad-head-down", x: 410 }] },
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
        scene: { focus: 330, bg: "court", mo: [{ who: "ais", pose: "megaphone", x: 270 }, { who: "adam", pose: "laugh-tummy", x: 410 }], fx: ["sparkle"] },
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
        scene: { focus: 340, bg: "court", time: "dusk", mo: [{ who: "ayah", pose: "hug-mo", x: 300 }, { who: "adam", pose: "proud-hands-hips", x: 440 }], fx: ["hearts"] },
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
        scene: { focus: 350, bg: "court", props: [{ k: "butterfly", x: 430, y: 270 }, { k: "butterfly", x: 470, y: 230 }], mo: [{ who: "adam", pose: "worried-bite-lip", x: 410 }, { who: "ayah", pose: "listen-sit-box", x: 270 }] },
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
        scene: { focus: 390, bg: "court", props: [{ k: "ballfly", x: 640, y: 330, flip: true, d: 0.3 }], mo: [{ who: "adam", pose: "tennis-run-1", seq: RUN, fps: 10, move: "still", x: 390 }], fx: ["leaves"] },
      },
      {
        text: { id: "Satu poin hilang. Dua poin hilang. Skornya jadi 2–4 untuk Raka. Pertandingan selesai.", en: "One point lost. Two points lost. The score ended 2–4 to Raka. The match was over." },
        scene: { focus: 390, bg: "court", props: [{ k: "tennisball", x: 470 }], mo: [{ who: "adam", pose: "tennis-sad-miss", x: 390 }] },
      },
      {
        text: { id: "Dada Kak Adam panas. Ia ingin membanting raketnya. Tangannya sudah terangkat…", en: "Kak Adam's chest felt hot. He wanted to throw his racket down. His hand was already up…" },
        scene: { focus: 390, bg: "court", time: "dusk", props: [{ k: "cloud", x: 400, y: 160, s: 0.7 }], mo: [{ who: "adam", pose: "angry-racket-up", x: 390, move: "sway" }], fx: ["lightning"] },
      },
      {
        text: { id: "Lalu ia ingat kata Abi: \"Orang kuat itu bukan yang selalu menang, tapi yang bisa menahan marahnya.\" Ia menarik napas panjang.", en: "Then he remembered Abi's words: \"A strong person isn't the one who always wins, but the one who holds back his anger.\" He took a long, deep breath." },
        quote: { id: "\"Orang kuat bukanlah yang pandai bergulat, tetapi orang kuat adalah yang mampu menguasai dirinya ketika marah.\" (HR. Bukhari dan Muslim)", en: "\"The strong one is not the one who wrestles others down; the strong one is the one who controls himself when angry.\" (Bukhari and Muslim)" },
        scene: { focus: 390, bg: "court", time: "dusk", mo: [{ who: "adam", pose: "deep-breath-calm", x: 390 }], fx: ["sparkle"] },
      },
      {
        text: { id: "Kak Adam berjalan ke net, mengulurkan tangan, dan tersenyum. \"Barakallah, Raka. Pukulanmu keren sekali.\"", en: "Kak Adam walked to the net, held out his hand, and smiled. \"Barakallah, Raka. Your shots were amazing.\"" },
        scene: { focus: 390, bg: "court", time: "dusk", props: [{ k: "tennisnet", x: 510 }], mo: [{ who: "adam", pose: "handshake-offer", x: 390 }], fx: ["hearts"] },
      },
      {
        text: { id: "Baby Mo cemberut. \"Kok Kakak kalah? Raka curang!\" Kak Adam menggeleng. \"Nggak, Mo. Raka memang lebih banyak latihan.\"", en: "Baby Mo pouted. \"Why did you lose? Raka cheated!\" Kak Adam shook his head. \"No, Mo. Raka just practised more.\"" },
        scene: { focus: 330, bg: "court", time: "dusk", mo: [{ pose: "pose-27", x: 280 }, { who: "adam", pose: "kneel-talk", x: 410 }] },
      },
      {
        text: { id: "\"Alhamdulillah, sekarang aku tahu apa yang harus dilatih,\" kata Kak Adam. \"Backhand-ku masih goyang, dan aku kurang cepat.\"", en: "\"Alhamdulillah, now I know what to practise,\" said Kak Adam. \"My backhand still wobbles, and I'm not fast enough.\"" },
        scene: { focus: 380, bg: "court", time: "dusk", props: [{ k: "ballbasket", x: 500 }], mo: [{ who: "adam", pose: "tennis-backhand-set", x: 380 }], fx: ["sparkle"] },
      },
      {
        text: { id: "Abi berlutut dan memeluknya erat. \"Hari ini kamu kalah skornya, tapi menang hatinya. Abi bangga sekali.\"", en: "Abi knelt and hugged him tight. \"Today you lost on the scoreboard, but you won with your heart. I'm so proud of you.\"" },
        scene: { focus: 350, bg: "court", time: "dusk", mo: [{ who: "ayah", pose: "kneel-arms-open", x: 300 }, { who: "adam", pose: "tennis-sad-miss", x: 430 }], fx: ["hearts"] },
      },
      {
        text: { id: "Dalam perjalanan pulang, mereka mampir membeli es krim. Raka dan ayahnya juga ada di sana!", en: "On the way home they stopped for ice cream. Raka and his dad were there too!" },
        scene: { focus: 350, bg: "street", time: "dusk", props: [{ k: "icecreamcart", x: 520 }], mo: [{ pose: "pose-29", x: 330 }, { who: "adam", pose: "wave-hello", x: 430 }] },
      },
      {
        text: { id: "\"Minggu depan latihan bareng, yuk?\" ajak Raka. Kak Adam mengangguk semangat. Musuh di lapangan, teman di luar lapangan.", en: "\"Want to practise together next week?\" asked Raka. Kak Adam nodded eagerly. Rivals on the court, friends off it." },
        scene: { focus: 340, bg: "street", time: "dusk", props: [{ k: "icecream", x: 470 }], mo: [{ pose: "yeyy", x: 290, move: "hop" }, { who: "adam", pose: "proud-hands-hips", x: 420 }], fx: ["confetti"] },
      },
      {
        text: { id: "Malam itu Kak Adam menempelkan bintang emas di kalendernya: \"Hari aku belajar kalah dengan baik.\" Kamu pernah kalah dan tetap tersenyum? ⭐", en: "That night Kak Adam stuck a gold star on his calendar: \"The day I learned to lose well.\" Have you ever lost and still smiled? ⭐" },
        scene: { focus: 380, bg: "bedroom", time: "night", props: [{ k: "goldstar", x: 500, y: 250 }, { k: "racket", x: 560 }], mo: [{ who: "adam", pose: "pj-dua-bed", x: 390 }], fx: ["stars"] },
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
        scene: { focus: 390, bg: "court", props: [{ k: "ballfly", x: 370, y: 330, d: FH_HIT }], mo: [{ who: "adam", pose: fh(1), seq: FOREHAND, fps: FPS, x: 390, move: "still" }] },
      },
      {
        text: { id: "Baby Mo mencoba. Ayun… luput. Ayun… luput lagi. Bolanya menggelinding ke bawah bangku.", en: "Baby Mo tried. Swing… miss. Swing… miss again. The ball rolled under the bench." },
        scene: { focus: 340, bg: "court", props: [{ k: "bench", x: 470 }, { k: "tennisball", x: 470 }], mo: [{ pose: "pose-34", x: 340 }] },
      },
      {
        text: { id: "\"Bukan begitu, Mo! Kan sudah Kakak bilang!\" Suara Kak Adam jadi keras. Baby Mo menunduk.", en: "\"Not like that, Mo! I already told you!\" Kak Adam's voice got loud. Baby Mo looked at his feet." },
        scene: { focus: 330, bg: "court", mo: [{ pose: "pose-38", x: 290 }, { who: "adam", pose: "frustrated-stomp", x: 420 }] },
      },
      {
        text: { id: "Baby Ais berbisik, \"Kak… dulu Abi juga marah nggak waktu bola Kakak kena kepala?\"", en: "Baby Ais whispered, \"Kak… did Abi get cross when the ball bonked your head?\"" },
        scene: { focus: 330, bg: "court", mo: [{ who: "ais", pose: "think-question", x: 280 }, { who: "adam", pose: "worried-bite-lip", x: 410 }] },
      },
      {
        text: { id: "Kak Adam terdiam. Ia ingat Abi tertawa, berlutut, dan berkata, \"Kita belajar pelan-pelan, ya.\"", en: "Kak Adam went quiet. He remembered Abi laughing, kneeling down, and saying, \"Let's learn slowly.\"" },
        scene: { focus: 340, bg: "court", time: "dusk", props: [{ k: "cloud", x: 330, y: 170, s: 0.8 }], mo: [{ who: "ayah", pose: "teach-point-kneel", x: 280 }, { who: "adam", pose: "deep-breath-calm", x: 410 }], fx: ["sparkle"] },
      },
      {
        text: { id: "Kak Adam berlutut di depan Baby Mo. \"Maaf ya, Mo. Kakak terlalu cepat. Kita mulai dari yang paling pelan.\"", en: "Kak Adam knelt in front of Baby Mo. \"Sorry, Mo. I went too fast. Let's start with the slowest thing.\"" },
        scene: { focus: 330, bg: "court", mo: [{ pose: "pose-05", x: 290 }, { who: "adam", pose: "kneel-talk", x: 420 }], fx: ["hearts"] },
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
        scene: { focus: 330, bg: "court", props: [{ k: "ballbounce", x: 330 }], mo: [{ who: "ais", pose: "tennis", x: 270 }, { who: "adam", pose: "give-ball", x: 420 }] },
      },
      {
        text: { id: "\"…TIGA!\" Baby Ais berhasil tiga kali! Baby Mo dua kali! Kak Adam bertepuk paling kencang.", en: "\"…THREE!\" Baby Ais made it three times! Baby Mo, twice! Kak Adam clapped the loudest." },
        scene: { focus: 330, bg: "court", mo: [{ who: "ais", pose: "trophy-cheer", x: 270 }, { pose: "pose-02", x: 390, move: "hop" }], fx: ["confetti"] },
      },
      {
        text: { id: "Abi melihat dari jauh dan tersenyum. \"Masya Allah. Kakak yang sabar membuat adik-adiknya berani.\"", en: "Abi watched from a distance and smiled. \"Masha Allah. A patient big brother makes his little ones brave.\"" },
        quote: { id: "\"Bukan termasuk golongan kami orang yang tidak menyayangi yang lebih kecil dan tidak menghormati yang lebih besar.\" (HR. Tirmidzi)", en: "\"He is not one of us who does not show mercy to the young and respect to the old.\" (Tirmidhi)" },
        scene: { focus: 350, bg: "court", time: "dusk", mo: [{ who: "ayah", pose: "stand-arms-crossed", x: 290 }, { who: "adam", pose: "tennis-bounce-racket", x: 420 }], fx: ["hearts"] },
      },
      {
        text: { id: "\"Kak Adam, besok latihan lagi?\" \"Pasti. Pelatih kalian tidak akan menyerah!\" Kak Adam memeluk keduanya.", en: "\"Kak Adam, practise again tomorrow?\" \"Definitely. Your coach never gives up!\" Kak Adam hugged them both." },
        scene: { focus: 330, bg: "court", time: "dusk", mo: [{ pose: "pose-41", x: 390 }, { who: "ais", pose: "arms-open-welcome", x: 280 }], fx: ["hearts"] },
      },
      {
        text: { id: "Malam itu Kak Adam berdoa, \"Ya Allah, jadikan aku kakak yang sabar.\" Siapa yang sudah sabar mengajarimu sesuatu? 🎈", en: "That night Kak Adam prayed, \"O Allah, make me a patient big brother.\" Who has patiently taught you something? 🎈" },
        scene: { focus: 380, bg: "bedroom", time: "night", props: [{ k: "balloon", x: 500, y: 250 }, { k: "racket", x: 560 }], mo: [{ who: "adam", pose: "pj-dua-bed", x: 390 }], fx: ["stars"] },
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
        scene: { focus: 330, bg: "living", time: "dusk", props: [{ k: "mat", x: 400 }], mo: [{ who: "ais", pose: "dua-mat", x: 255 }, { pose: "pose-35", x: 400 }, { who: "adam", pose: "sholat-qiyam", x: 330 }] },
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

  /* ───────────────────────── Family 1. Abi's work trip ───────────────────────── */
  {
    slug: "abi-pergi-tiga-hari",
    pose: "baby-mo-pose-01.png",
    published: "2026-11-09",
    title: { id: "Abi Pergi Tiga Hari", en: "Abi Goes Away for Three Days" },
    hook: {
      id: "Abi harus pergi kerja ke kota lain selama tiga hari. Kak Adam berjanji menjaga adik-adiknya. Bisakah ia?",
      en: "Abi has to work in another city for three days. Kak Adam promises to look after the little ones. Can he do it?",
    },
    anchor: { type: "doa", slug: "doa-kembali-dari-perjalanan" },
    takeaway: {
      id: "Saat orang tua bepergian, rutinitas kecil, telepon video, dan tanggung jawab sederhana untuk si kakak membuat rindu terasa lebih ringan.",
      en: "When a parent travels, small routines, video calls and a simple job for the big sibling make missing them feel lighter.",
    },
    tags: ["abi", "kak adam", "rindu", "bepergian", "telepon video", "tanggung jawab"],
    cover: {
      focus: 300, bg: "street",
      props: [{ k: "heart", x: 470, y: 230, s: 0.6 }],
      mo: [{ pose: "pose-01", x: 330 }, { who: "ayah", pose: "traveller-suitcase", x: 210 }, { who: "adam", pose: "wave-hello", x: 450 }],
      fx: ["hearts"],
    },
    pages: [
      {
        text: { id: "Pagi itu ada koper di depan pintu. \"Abi harus kerja di kota lain tiga hari,\" kata Abi.", en: "That morning there was a suitcase by the door. \"I have to work in another city for three days,\" said Abi." },
        scene: { focus: 320, bg: "living", mo: [{ pose: "pose-40", x: 380 }, { who: "ayah", pose: "traveller-suitcase", x: 250 }] },
      },
      {
        text: { id: "\"Tiga hari itu berapa lama?\" tanya Baby Mo. \"Tiga kali tidur,\" jawab Abi.", en: "\"How long is three days?\" asked Baby Mo. \"Three sleeps,\" said Abi." },
        scene: { focus: 320, bg: "living", props: [{ k: "moon", x: 470, y: 160 }], mo: [{ pose: "pose-33", x: 390 }, { who: "ayah", pose: "teach-point-kneel", x: 265 }] },
      },
      {
        text: { id: "Abi memandang Kak Adam. \"Kak, tolong bantu Umi menjaga adik-adik, ya.\" Kak Adam berdiri tegak. \"Siap, Abi!\"", en: "Abi looked at Kak Adam. \"Kak, please help Umi look after the little ones.\" Kak Adam stood up tall. \"Ready, Abi!\"" },
        scene: { focus: 330, bg: "living", mo: [{ who: "ayah", pose: "thumbs-up-kneel", x: 260 }, { who: "adam", pose: "proud-hands-hips", x: 400 }], fx: ["sparkle"] },
      },
      {
        text: { id: "Sebelum berangkat, Abi berdoa dan mereka berpelukan lama sekali. \"Assalamu'alaikum!\"", en: "Before leaving, Abi prayed and they hugged for a long, long time. \"Assalamu'alaikum!\"" },
        scene: { bg: "street", props: [{ k: "car", x: 560, s: 1.2 }], mo: [{ who: "ayah", pose: "hug-mo", x: 330 }], fx: ["hearts"] },
      },
      {
        text: { id: "Malam pertama, rumah terasa sepi. Baby Mo memeluk boneka dan bertanya, \"Abi lagi apa, ya?\"", en: "The first night, the house felt quiet. Baby Mo hugged his teddy and asked, \"What's Abi doing now?\"" },
        scene: { bg: "bedroom", time: "night", props: [{ k: "teddy", x: 470 }], mo: [{ pose: "pose-12", x: 360 }], fx: ["stars"] },
      },
      {
        text: { id: "Tring-tring! Tablet berbunyi. Ada wajah Abi di layar! \"Abiii!\" si kembar berebut melambai.", en: "Ring-ring! The tablet chimed. Abi's face was on the screen! \"Abiii!\" The twins jostled to wave." },
        scene: { focus: 330, bg: "living", time: "night", props: [{ k: "tablet", x: 470, y: 330 }], mo: [{ pose: "pose-01", x: 390 }, { who: "ais", pose: "video-play", x: 280 }], fx: ["sparkle"] },
      },
      {
        text: { id: "Di kamar hotel, Abi tersenyum lebar. \"Abi kangen. Hari ini kalian ngapain saja?\"", en: "In his hotel room, Abi grinned. \"I miss you. What did you all do today?\"" },
        scene: { focus: 375, bg: "bedroom", time: "night", props: [{ k: "lamp", x: 530, s: 0.85 }], mo: [{ who: "ayah", pose: "video-call-sit", x: 360 }], fx: ["hearts"] },
      },
      {
        text: { id: "Kak Adam melapor seperti kapten: \"Adik-adik sudah sikat gigi, sudah sholat Isya, dan Mo cuma nangis sekali!\"", en: "Kak Adam reported like a captain: \"The little ones brushed their teeth, prayed Isha, and Mo only cried once!\"" },
        scene: { focus: 340, bg: "living", time: "night", props: [{ k: "tablet", x: 480, y: 330 }], mo: [{ pose: "pose-03", x: 280 }, { who: "adam", pose: "wave-hello", x: 400 }] },
      },
      {
        text: { id: "Hari kedua, Kak Adam membacakan Al-Qur'an untuk si kembar, persis seperti yang biasa dilakukan Abi.", en: "On day two, Kak Adam recited Qur'an for the twins, just the way Abi always did." },
        scene: { focus: 340, bg: "living", mo: [{ pose: "pose-12", x: 290 }, { who: "adam", pose: "quran-read-sit", x: 420 }, { who: "ais", pose: "sit-chin-hands", x: 190 }], fx: ["sparkle"] },
      },
      {
        text: { id: "Waktu Baby Mo sedih, Kak Adam mengajaknya mencoret kalender. \"Lihat, Mo. Tinggal satu kotak lagi!\"", en: "When Baby Mo felt sad, Kak Adam helped him cross off the calendar. \"Look, Mo. Only one box left!\"" },
        scene: { focus: 340, bg: "living", props: [{ k: "card", x: 360, y: 300, s: 1.3 }], mo: [{ pose: "pose-08", x: 280 }, { who: "adam", pose: "kneel-talk", x: 420 }] },
      },
      {
        text: { id: "Hari ketiga, mereka membuat kartu besar bertuliskan: SELAMAT DATANG, ABI! Penuh gambar bintang dan hati.", en: "On day three, they made a big card that said: WELCOME HOME, ABI! It was covered in stars and hearts." },
        scene: { focus: 330, bg: "living", props: [{ k: "drawing", x: 470 }], mo: [{ who: "ais", pose: "draw-floor", x: 280 }, { pose: "pose-25", x: 390 }], fx: ["sparkle"] },
      },
      {
        text: { id: "Sore itu terdengar suara koper di jalan: grrrk… grrrk… Pintu terbuka. \"Assalamu'alaikum!\"", en: "That afternoon came the sound of a suitcase on the road: grrrk… grrrk… The door opened. \"Assalamu'alaikum!\"" },
        scene: { focus: 330, bg: "street", time: "dusk", mo: [{ pose: "pose-26", x: 390 }, { who: "ayah", pose: "traveller-suitcase", x: 260 }] },
      },
      {
        text: { id: "\"ABIII!\" Tiga anak berlari bersamaan. Abi berlutut dan menangkap mereka semua sekaligus.", en: "\"ABIII!\" Three children ran at once. Abi knelt and caught them all together." },
        scene: { focus: 370, bg: "living", time: "dusk", mo: [{ who: "ais", pose: "arms-wide-joy", x: 470 }, { who: "ayah", pose: "hug-mo", x: 300 }, { who: "adam", pose: "run", x: 400 }], fx: ["hearts", "confetti"] },
      },
      {
        text: { id: "Abi membaca doa pulang dari perjalanan, dan anak-anak ikut menirukan pelan-pelan.", en: "Abi said the du'a for coming home from a journey, and the children repeated it softly." },
        quote: { id: "\"Aayibuuna taa-ibuuna 'aabiduuna li rabbinaa haamiduun.\" — Kami kembali, bertaubat, beribadah, dan memuji Tuhan kami. (HR. Muslim)", en: "\"Aayibuuna taa-ibuuna 'aabiduuna li rabbinaa haamiduun.\" — We return, repenting, worshipping and praising our Lord. (Muslim)" },
        scene: { focus: 330, bg: "living", time: "dusk", mo: [{ who: "ayah", pose: "dua-kneel", x: 260 }, { pose: "pose-35", x: 390 }], fx: ["sparkle"] },
      },
      {
        text: { id: "Abi memeluk Kak Adam paling lama. \"Terima kasih sudah menjaga adik-adik, Kapten.\"", en: "Abi hugged Kak Adam the longest. \"Thank you for looking after the little ones, Captain.\"" },
        scene: { focus: 340, bg: "living", time: "dusk", mo: [{ who: "ayah", pose: "kneel-arms-open", x: 290 }, { who: "adam", pose: "sheepish-scratch-head", x: 420 }], fx: ["hearts"] },
      },
      {
        text: { id: "Malam itu semua tidur nyenyak — rumahnya sudah lengkap lagi. Kalau Abi atau Umi pergi, apa yang bisa kamu bantu di rumah? 🧳", en: "That night everyone slept soundly — the house was complete again. If Abi or Umi went away, how could you help at home? 🧳" },
        scene: { focus: 330, bg: "bedroom", time: "night", props: [{ k: "drawing", x: 500, y: 250 }], mo: [{ pose: "pose-39", x: 380 }, { who: "ais", pose: "sleep-pillow", x: 270 }], fx: ["stars", "zzz"] },
      },
    ],
  },

  /* ───────────────────────── Family 2. Morning exercise ───────────────────────── */
  {
    slug: "olahraga-pagi-bersama-abi",
    pose: "baby-mo-run.png",
    published: "2026-11-09",
    title: { id: "Olahraga Pagi Bersama Abi", en: "Morning Exercise with Abi" },
    hook: {
      id: "Setelah Subuh, Abi mengajak semua olahraga. Kak Adam ingin lari paling cepat, Baby Mo paling lambat — tapi semua sampai!",
      en: "After Fajr, Abi gets everyone moving. Kak Adam wants to be fastest, Baby Mo is the slowest — but everyone gets there!",
    },
    anchor: { type: "parenting", slug: "bonding-orangtua" },
    takeaway: {
      id: "Badan adalah amanah dari Allah. Olahraga bersama setiap pagi membuat anak sehat, dekat dengan orang tua, dan belajar menyemangati yang lebih lambat.",
      en: "Our bodies are a trust from Allah. Moving together every morning keeps children healthy, close to their parents, and kind to the slower ones.",
    },
    tags: ["olahraga", "pagi", "sehat", "abi", "kak adam", "subuh"],
    cover: {
      focus: 320, bg: "park",
      props: [{ k: "sun", x: 470, y: 130 }],
      mo: [{ pose: "run", x: 380, move: "hop" }, { who: "ayah", pose: "run", x: 250 }],
      fx: ["leaves"],
    },
    pages: [
      {
        text: { id: "Selesai sholat Subuh, langit masih jingga. Abi mengikat tali sepatunya. \"Siapa mau olahraga?\"", en: "After Fajr prayer, the sky was still orange. Abi tied his shoelaces. \"Who wants to exercise?\"" },
        scene: { focus: 320, bg: "living", time: "dusk", props: [{ k: "shoes", x: 470 }], mo: [{ pose: "pose-28", x: 390 }, { who: "ayah", pose: "tie-shoes", x: 265 }] },
      },
      {
        text: { id: "\"AKU!\" Kak Adam sudah memakai sepatu. Baby Mo masih memakai satu sepatu… di tangan.", en: "\"ME!\" Kak Adam already had his shoes on. Baby Mo had one shoe on… his hand." },
        scene: { focus: 340, bg: "living", time: "dusk", props: [{ k: "shoes", x: 330 }], mo: [{ pose: "pose-33", x: 290 }, { who: "adam", pose: "proud-hands-hips", x: 420 }] },
      },
      {
        text: { id: "Di taman, Abi memimpin pemanasan. \"Tangan ke atas… tarik ke samping… seperti pohon kena angin!\"", en: "At the park, Abi led the warm-up. \"Arms up… stretch to the side… like a tree in the wind!\"" },
        scene: { focus: 320, bg: "park", props: [{ k: "tree", x: 520 }], mo: [{ pose: "pose-41", x: 390, move: "sway" }, { who: "ayah", pose: "stretch-side-stand", x: 260 }], fx: ["leaves"] },
      },
      {
        text: { id: "Baby Ais menguap lebar sambil meregang. \"Hoaaam… aku masih setengah tidur!\" Semua tertawa.", en: "Baby Ais yawned hugely as she stretched. \"Hooaam… I'm still half asleep!\" Everyone laughed." },
        scene: { focus: 330, bg: "park", mo: [{ who: "ais", pose: "wake-stretch", x: 280 }, { pose: "pose-03", x: 390 }] },
      },
      {
        text: { id: "\"Sekarang lari keliling taman!\" Kak Adam melesat paling depan. Wusss!", en: "\"Now run round the park!\" Kak Adam shot off in front. Whoosh!" },
        scene: { focus: 380, bg: "park", mo: [{ who: "adam", pose: "run", move: "hop", x: 390 }], fx: ["leaves"] },
      },
      {
        text: { id: "Abi berlari di tengah. Baby Ais di belakangnya. Dan Baby Mo… paling belakang, dengan kaki pendeknya: tuk-tuk-tuk-tuk.", en: "Abi ran in the middle. Baby Ais behind him. And Baby Mo… right at the back, on his short legs: pitter-patter-pitter." },
        scene: { focus: 320, bg: "park", mo: [{ pose: "run", x: 380, move: "hop" }, { who: "ayah", pose: "run", x: 250 }], fx: ["leaves"] },
      },
      {
        text: { id: "\"Tungguuu!\" Baby Mo terengah-engah. \"Aku paling lambat. Aku nggak mau lari lagi!\"", en: "\"Waaait!\" Baby Mo panted. \"I'm the slowest. I don't want to run any more!\"" },
        scene: { bg: "park", props: [{ k: "bench", x: 500 }], mo: [{ pose: "pose-37", x: 360 }] },
      },
      {
        text: { id: "Kak Adam berhenti, lalu berlari kembali. \"Ayo, Mo! Kita lari bareng. Kakak jadi kura-kura juga!\"", en: "Kak Adam stopped, then ran back. \"Come on, Mo! Let's run together. I'll be a tortoise too!\"" },
        scene: { focus: 330, bg: "park", mo: [{ pose: "pose-40", x: 290 }, { who: "adam", pose: "hold-hand-down", x: 420 }], fx: ["sparkle"] },
      },
      {
        text: { id: "Mereka berlari pelan berdampingan sambil berhitung: \"Satu, dua, Bismillah! Tiga, empat, Alhamdulillah!\"", en: "They jogged slowly side by side, counting: \"One, two, Bismillah! Three, four, Alhamdulillah!\"" },
        scene: { focus: 330, bg: "park", mo: [{ pose: "pose-42", x: 300, move: "hop" }, { who: "adam", pose: "hold-hand-down", x: 420 }], fx: ["notes"] },
      },
      {
        text: { id: "Garis finis ada di pohon besar. Semua sampai — yang cepat dan yang lambat. \"Horeee!\"", en: "The finish line was the big tree. Everyone made it — fast ones and slow ones. \"Hooray!\"" },
        scene: { focus: 320, bg: "park", props: [{ k: "tree", x: 520 }], mo: [{ pose: "yeyy", x: 380, move: "hop" }, { who: "ayah", pose: "cheer-fists-stand", x: 250 }], fx: ["confetti"] },
      },
      {
        text: { id: "Lalu mereka duduk di rumput dan minum air pelan-pelan, duduk dulu, tiga tegukan — seperti cara Rasulullah ﷺ.", en: "Then they sat on the grass and drank water slowly — sitting down, in three sips — the way the Prophet ﷺ did." },
        scene: { focus: 330, bg: "park", props: [{ k: "water", x: 480 }], mo: [{ who: "ais", pose: "drink-bottle", x: 400 }, { who: "ayah", pose: "drink-water-sit", x: 270 }] },
      },
      {
        text: { id: "\"Kenapa sih kita harus olahraga, Abi?\" tanya Baby Ais. \"Karena badan kita titipan dari Allah. Kita jaga baik-baik.\"", en: "\"Why do we have to exercise, Abi?\" asked Baby Ais. \"Because our bodies are a gift Allah has trusted us with. We look after them.\"" },
        quote: { id: "\"Mukmin yang kuat lebih baik dan lebih dicintai Allah daripada mukmin yang lemah, dan pada keduanya ada kebaikan.\" (HR. Muslim)", en: "\"The strong believer is better and more beloved to Allah than the weak believer, and there is good in both.\" (Muslim)" },
        scene: { focus: 320, bg: "park", mo: [{ who: "ais", pose: "think-question", x: 390 }, { who: "ayah", pose: "teach-point-kneel", x: 265 }], fx: ["sparkle"] },
      },
      {
        text: { id: "\"Kuat itu bukan cuma lari cepat,\" tambah Abi. \"Menunggu adik yang lambat juga butuh hati yang kuat.\" Kak Adam tersenyum malu.", en: "\"Being strong isn't just running fast,\" Abi added. \"Waiting for a slower little one takes a strong heart too.\" Kak Adam smiled shyly." },
        scene: { focus: 340, bg: "park", mo: [{ who: "ayah", pose: "thumbs-up-kneel", x: 280 }, { who: "adam", pose: "sheepish-scratch-head", x: 420 }], fx: ["hearts"] },
      },
      {
        text: { id: "Sarapannya buah segar. Baby Mo makan pisang paling cepat. \"Lihat! Aku juara makan pisang!\"", en: "Breakfast was fresh fruit. Baby Mo ate his banana fastest of all. \"Look! I'm the banana champion!\"" },
        scene: { focus: 320, bg: "kitchen", props: [{ k: "fruit", x: 480 }], mo: [{ pose: "pose-02", x: 390, move: "hop" }, { who: "ayah", pose: "eat-fruit-sit", x: 260 }], fx: ["confetti"] },
      },
      {
        text: { id: "Sejak hari itu, setiap Ahad pagi mereka lari bersama. Kak Adam selalu di samping Baby Mo.", en: "From then on, every Sunday morning they ran together. Kak Adam always stayed beside Baby Mo." },
        scene: { focus: 330, bg: "park", props: [{ k: "sun", x: 480, y: 130 }], mo: [{ pose: "run", x: 300, move: "hop" }, { who: "adam", pose: "run", move: "hop", x: 420 }], fx: ["leaves"] },
      },
      {
        text: { id: "Olahraga apa yang paling kamu suka? Ajak Abi atau Umi bergerak bersama besok pagi! 🏃", en: "What's your favourite way to move? Ask Abi or Umi to exercise with you tomorrow morning! 🏃" },
        scene: { bg: "park", props: [{ k: "sun", x: 480, y: 130 }, { k: "ball", x: 470 }], mo: [{ pose: "yes", x: 360 }], fx: ["sparkle"] },
      },
    ],
  },

  /* ───────────────────────── Family 3. Straight rows ───────────────────────── */
  {
    slug: "saf-lurus-seperti-kereta",
    pose: "baby-mo-pose-35.png",
    published: "2026-11-09",
    title: { id: "Saf Lurus seperti Kereta", en: "Straight Rows like a Train" },
    hook: {
      id: "Sholat berjamaah di rumah! Abi jadi imam, Kak Adam di saf depan. Tapi Baby Mo tidak bisa diam di barisannya…",
      en: "Praying together at home! Abi leads, Kak Adam is in the front row. But Baby Mo can't stay still in his row…",
    },
    anchor: { type: "parenting", slug: "mulai-sholat" },
    takeaway: {
      id: "Sholat berjamaah di rumah mengajarkan anak tentang kebersamaan, kerapian, dan bahwa setiap orang punya tempatnya di barisan.",
      en: "Praying together at home teaches children togetherness and tidiness — and that everyone has a place in the row.",
    },
    tags: ["sholat berjamaah", "saf", "abi", "kak adam", "si kembar", "ibadah"],
    cover: {
      focus: 330, bg: "living", time: "dusk",
      props: [{ k: "mat", x: 400 }, { k: "mat", x: 260 }],
      mo: [{ pose: "pose-35", x: 400 }, { who: "ais", pose: "dua-mat", x: 260 }, { who: "adam", pose: "sholat-qiyam", x: 330 }],
      fx: ["sparkle"],
    },
    pages: [
      {
        text: { id: "Hujan turun, jadi malam ini mereka sholat Isya berjamaah di rumah. Abi menggelar sajadah.", en: "It was raining, so tonight they prayed Isha together at home. Abi laid out the prayer mats." },
        scene: { focus: 320, bg: "living", time: "rain", props: [{ k: "mat", x: 450 }], mo: [{ pose: "pose-21", x: 390 }, { who: "ayah", pose: "kneel-present", x: 265 }] },
      },
      {
        text: { id: "\"Abi jadi imam di depan. Kak Adam di belakang Abi. Mo dan Ais di sebelah Kak Adam.\"", en: "\"I'll lead at the front. Kak Adam behind me. Mo and Ais next to Kak Adam.\"" },
        scene: { focus: 330, bg: "living", time: "night", props: [{ k: "mat", x: 280 }, { k: "mat", x: 400 }], mo: [{ who: "ayah", pose: "teach-point-kneel", x: 280 }, { who: "adam", pose: "sholat-qiyam", x: 410 }] },
      },
      {
        text: { id: "Kak Adam membaca iqamah dengan suara jelas. \"Qad qaamatish shalaah…\" Baby Mo terkagum-kagum.", en: "Kak Adam called the iqamah in a clear voice. \"Qad qaamatish shalaah…\" Baby Mo was amazed." },
        scene: { focus: 340, bg: "living", time: "night", mo: [{ pose: "wow", x: 290 }, { who: "adam", pose: "iqamah", x: 420 }], fx: ["notes"] },
      },
      {
        text: { id: "Tapi barisannya berantakan. Baby Mo terlalu maju. Baby Ais terlalu mundur. Ada celah besar di tengah.", en: "But the row was a mess. Baby Mo was too far forward. Baby Ais was too far back. There was a big gap in the middle." },
        scene: { focus: 330, bg: "living", time: "night", props: [{ k: "mat", x: 270 }, { k: "mat", x: 420 }], mo: [{ pose: "pose-30", x: 420, move: "sway" }, { who: "ais", pose: "think-question", x: 250 }] },
      },
      {
        text: { id: "Abi menoleh dan tersenyum. \"Sebelum mulai, kita rapikan saf dulu. Saf yang lurus itu bagian dari sholat yang sempurna.\"", en: "Abi turned and smiled. \"Before we start, let's straighten the row. A straight row is part of a complete prayer.\"" },
        quote: { id: "\"Luruskanlah saf-saf kalian, karena lurusnya saf termasuk kesempurnaan sholat.\" (HR. Bukhari dan Muslim)", en: "\"Straighten your rows, for straight rows are part of the perfection of prayer.\" (Bukhari and Muslim)" },
        scene: { focus: 320, bg: "living", time: "night", mo: [{ pose: "pose-22", x: 390 }, { who: "ayah", pose: "teach-point-kneel", x: 265 }], fx: ["sparkle"] },
      },
      {
        text: { id: "\"Seperti kereta!\" kata Kak Adam. \"Bahu ketemu bahu, kaki ketemu kaki. Gerbongnya nempel, nggak ada yang lepas.\"", en: "\"Like a train!\" said Kak Adam. \"Shoulder to shoulder, foot to foot. The carriages stay joined — none come loose.\"" },
        scene: { focus: 340, bg: "living", time: "night", mo: [{ pose: "idea", x: 290 }, { who: "adam", pose: "kneel-talk", x: 420 }] },
      },
      {
        text: { id: "\"Tuuut tuuut!\" Baby Mo dan Baby Ais bergeser sampai bahu mereka menempel ke Kak Adam. Barisannya lurus!", en: "\"Choo choo!\" Baby Mo and Baby Ais shuffled until their shoulders touched Kak Adam's. The row was straight!" },
        scene: { focus: 330, bg: "living", time: "night", props: [{ k: "mat", x: 330 }], mo: [{ pose: "pose-35", x: 410 }, { who: "ais", pose: "dua-mat", x: 255 }, { who: "adam", pose: "sholat-qiyam", x: 330 }], fx: ["sparkle"] },
      },
      {
        text: { id: "\"Allahu Akbar.\" Semua mulai sholat. Rumah jadi hening. Hanya ada suara hujan dan bacaan Abi.", en: "\"Allahu Akbar.\" Everyone began to pray. The house went quiet. Just the rain and Abi's recitation." },
        scene: { bg: "living", time: "rain", props: [{ k: "mat", x: 360 }], mo: [{ pose: "pose-35", x: 360 }], fx: ["sparkle"] },
      },
      {
        text: { id: "Di tengah sholat, seekor kepik merah merayap di dinding. Baby Mo ingin menunjuknya… tapi ia ingat: gerbong kereta tidak boleh lepas!", en: "In the middle of the prayer, a little red ladybird crawled up the wall. Baby Mo wanted to point… but he remembered: the train carriages mustn't come loose!" },
        scene: { bg: "living", time: "night", props: [{ k: "ladybug", x: 470, y: 220 }], mo: [{ pose: "pose-07", x: 360 }] },
      },
      {
        text: { id: "Mereka sujud bersama — Abi, Kak Adam, Baby Ais, dan Baby Mo — dahi di sajadah, berbaris rapi.", en: "They went into sujud together — Abi, Kak Adam, Baby Ais and Baby Mo — foreheads on the mats, in a neat row." },
        scene: { focus: 320, bg: "living", time: "night", props: [{ k: "mat", x: 390 }], mo: [{ pose: "pose-17", x: 390 }, { who: "ayah", pose: "sujud", x: 250 }], fx: ["sparkle"] },
      },
      {
        text: { id: "\"Assalamu'alaikum warahmatullah.\" Selesai! Lalu semua bersalaman, dari yang paling kecil sampai Abi.", en: "\"Assalamu'alaikum warahmatullah.\" Done! Then everyone shook hands, from the littlest all the way to Abi." },
        scene: { focus: 330, bg: "living", time: "night", mo: [{ who: "adam", pose: "salaman", x: 275 }, { pose: "thank-you", x: 390 }], fx: ["hearts"] },
      },
      {
        text: { id: "\"Kenapa harus rapat, Abi?\" tanya Baby Ais. \"Supaya tidak ada celah. Di saf, semua sama: yang besar, yang kecil, semua bersebelahan.\"", en: "\"Why do we stand so close, Abi?\" asked Baby Ais. \"So there are no gaps. In the row everyone is equal: big and small, side by side.\"" },
        scene: { focus: 320, bg: "living", time: "night", mo: [{ who: "ais", pose: "wonder-question", x: 390 }, { who: "ayah", pose: "teach-point-kneel", x: 265 }] },
      },
      {
        text: { id: "Abi lalu memimpin doa, dan semua tangan terangkat bersama. \"Aamiin!\"", en: "Then Abi led the du'a, and every hand went up together. \"Aamiin!\"" },
        scene: { focus: 320, bg: "living", time: "night", mo: [{ pose: "pose-35", x: 390 }, { who: "ayah", pose: "dua-kneel", x: 260 }], fx: ["sparkle"] },
      },
      {
        text: { id: "\"Besok Subuh aku mau jadi lokomotifnya!\" kata Baby Mo. Kak Adam tertawa. \"Lokomotif itu imam, Mo. Nanti kalau sudah besar!\"", en: "\"At Fajr I want to be the engine!\" said Baby Mo. Kak Adam laughed. \"The engine is the imam, Mo. When you're bigger!\"" },
        scene: { focus: 340, bg: "living", time: "night", mo: [{ pose: "pose-02", x: 290, move: "hop" }, { who: "adam", pose: "laugh-tummy", x: 420 }], fx: ["confetti"] },
      },
      {
        text: { id: "Sebelum tidur, Baby Mo menata empat sajadah berjajar rapi untuk Subuh — seperti kereta yang siap berangkat.", en: "Before bed, Baby Mo laid out four mats in a tidy line for Fajr — like a train ready to go." },
        scene: { focus: 360, bg: "living", time: "night", props: [{ k: "mat", x: 300 }, { k: "mat", x: 420 }, { k: "mat", x: 540 }], mo: [{ pose: "pose-36", x: 360 }], fx: ["stars"] },
      },
      {
        text: { id: "Pernahkah kamu sholat berjamaah di rumah? Siapa yang jadi lokomotif di keluargamu? 🚂", en: "Have you ever prayed together at home? Who's the engine in your family? 🚂" },
        scene: { bg: "living", time: "night", props: [{ k: "mat", x: 450 }], mo: [{ pose: "alright", x: 360 }], fx: ["stars"] },
      },
    ],
  },

  /* ───────────────────────── Family 4. Adam's trophy ───────────────────────── */
  {
    slug: "piala-kak-adam",
    pose: "baby-mo-pose-27.png",
    published: "2026-11-09",
    title: { id: "Piala Kak Adam", en: "Kak Adam's Trophy" },
    hook: {
      id: "Kak Adam pulang membawa piala tenis. Semua memujinya. Tapi Baby Mo malah cemberut dan bersembunyi. Kenapa?",
      en: "Kak Adam comes home with a tennis trophy. Everyone praises him. But Baby Mo sulks and hides. Why?",
    },
    anchor: { type: "parenting", slug: "rivalitas-saudara" },
    takeaway: {
      id: "Rasa cemburu antarsaudara itu wajar. Akui perasaannya, beri perhatian yang adil, dan bantu setiap anak melihat kelebihannya sendiri.",
      en: "Jealousy between siblings is normal. Name the feeling, share attention fairly, and help each child see their own gifts.",
    },
    tags: ["cemburu", "kakak adik", "adil", "kak adam", "piala", "abi"],
    cover: {
      focus: 340, bg: "living",
      props: [{ k: "heart", x: 340, y: 230, s: 0.5 }],
      mo: [{ pose: "pose-27", x: 280 }, { who: "adam", pose: "hold-trophy", x: 430 }],
    },
    pages: [
      {
        text: { id: "\"Aku JUARA SATU!\" Kak Adam masuk rumah sambil mengangkat piala emas yang berkilau.", en: "\"I WON FIRST PLACE!\" Kak Adam burst in holding up a shining gold trophy." },
        scene: { focus: 390, bg: "living", mo: [{ who: "adam", pose: "hold-trophy", x: 390 }], fx: ["confetti"] },
      },
      {
        text: { id: "Abi bertepuk tangan. Umi memotret. Nenek menelepon. \"Masya Allah, hebat sekali Adam!\"", en: "Abi clapped. Umi took photos. Grandma phoned. \"Masha Allah, well done, Adam!\"" },
        scene: { focus: 340, bg: "living", props: [{ k: "trophy", x: 470, y: 300 }], mo: [{ who: "ayah", pose: "cheer-fists-stand", x: 280 }, { who: "adam", pose: "proud-hands-hips", x: 410 }], fx: ["sparkle"] },
      },
      {
        text: { id: "Piala itu ditaruh di rak paling tinggi. Semua orang yang lewat berhenti dan memandanginya.", en: "The trophy went on the highest shelf. Everyone who walked past stopped to look at it." },
        scene: { bg: "living", props: [{ k: "trophy", x: 450, y: 230 }, { k: "books", x: 450, y: 330 }], mo: [{ pose: "wow", x: 340 }], fx: ["sparkle"] },
      },
      {
        text: { id: "Baby Mo memandangi piala itu lama sekali. Dadanya terasa aneh — panas dan sesak.", en: "Baby Mo stared at the trophy for a long time. His chest felt strange — hot and tight." },
        scene: { bg: "living", time: "dusk", props: [{ k: "trophy", x: 460, y: 230 }, { k: "cloud", x: 360, y: 150, s: 0.6 }], mo: [{ pose: "pose-27", x: 350 }] },
      },
      {
        text: { id: "\"Aku nggak punya piala,\" gumamnya. \"Nggak ada yang bilang aku hebat.\" Ia bersembunyi di balik sofa.", en: "\"I haven't got a trophy,\" he mumbled. \"Nobody says I'm great.\" He hid behind the sofa." },
        scene: { bg: "living", time: "dusk", mo: [{ pose: "pose-38", x: 360 }] },
      },
      {
        text: { id: "Abi mencarinya dan duduk di lantai di sampingnya. \"Ada yang sedang sedih, ya?\"", en: "Abi found him and sat on the floor beside him. \"Is somebody feeling sad?\"" },
        scene: { focus: 320, bg: "living", time: "dusk", mo: [{ pose: "pose-38", x: 390 }, { who: "ayah", pose: "listen-sit-box", x: 260 }] },
      },
      {
        text: { id: "\"Semua sayang Kak Adam. Aku nggak,\" isak Baby Mo. Abi mengangguk pelan. \"Mo merasa cemburu, ya. Itu perasaan yang wajar.\"", en: "\"Everyone loves Kak Adam. Not me,\" sniffed Baby Mo. Abi nodded gently. \"You're feeling jealous. That's a normal feeling.\"" },
        scene: { focus: 320, bg: "living", time: "dusk", mo: [{ pose: "pose-37", x: 390 }, { who: "ayah", pose: "hand-heart-kneel", x: 265 }] },
      },
      {
        text: { id: "Abi memeluknya erat. \"Sayang Abi untuk Kak Adam tidak mengambil sayang Abi untuk Mo. Hati Abi muat untuk semua.\"", en: "Abi hugged him tight. \"My love for Kak Adam doesn't take away my love for you. My heart has room for everyone.\"" },
        quote: { id: "\"Bertakwalah kepada Allah dan berlaku adillah di antara anak-anak kalian.\" (HR. Bukhari dan Muslim)", en: "\"Fear Allah and be fair between your children.\" (Bukhari and Muslim)" },
        scene: { bg: "living", time: "dusk", mo: [{ who: "ayah", pose: "hug-mo", x: 340 }], fx: ["hearts"] },
      },
      {
        text: { id: "\"Kak Adam pandai tenis. Mo pandai apa, ya?\" tanya Abi. Baby Mo berpikir. \"…Aku pandai menggambar!\"", en: "\"Kak Adam is good at tennis. What's Mo good at?\" asked Abi. Baby Mo thought. \"…I'm good at drawing!\"" },
        scene: { focus: 320, bg: "living", props: [{ k: "drawing", x: 480 }], mo: [{ pose: "idea", x: 390 }, { who: "ayah", pose: "think-chin-stand", x: 260 }], fx: ["sparkle"] },
      },
      {
        text: { id: "\"Dan Mo pandai membuat semua orang tertawa,\" tambah Abi. \"Itu juga hadiah dari Allah.\"", en: "\"And Mo is good at making everyone laugh,\" Abi added. \"That's a gift from Allah too.\"" },
        scene: { focus: 320, bg: "living", mo: [{ pose: "pose-03", x: 390 }, { who: "ayah", pose: "cheer-kneel", x: 265 }], fx: ["sparkle"] },
      },
      {
        text: { id: "Kak Adam ternyata mendengar dari pintu. Ia menurunkan pialanya dan duduk di samping Baby Mo.", en: "Kak Adam had been listening at the door. He took down his trophy and sat beside Baby Mo." },
        scene: { focus: 340, bg: "living", props: [{ k: "trophy", x: 360, y: 340 }], mo: [{ pose: "pose-12", x: 290 }, { who: "adam", pose: "kneel-talk", x: 420 }] },
      },
      {
        text: { id: "\"Mo, kamu yang paling keras teriak 'Ka-kak A-dam!' di pertandingan. Piala ini juga punyamu sedikit.\"", en: "\"Mo, you shouted 'Kak A-dam!' the loudest at the match. This trophy is a little bit yours too.\"" },
        scene: { focus: 340, bg: "living", props: [{ k: "trophy", x: 360, y: 320 }], mo: [{ pose: "pose-40", x: 290 }, { who: "adam", pose: "crouch-pat", x: 420 }], fx: ["sparkle"] },
      },
      {
        text: { id: "Baby Mo memeluk piala itu, lalu berlari mengambil krayon. \"Aku mau buat sesuatu untuk Kakak!\"", en: "Baby Mo hugged the trophy, then ran for his crayons. \"I'm going to make something for you, Kak!\"" },
        scene: { bg: "living", props: [{ k: "trophy", x: 450, y: 330 }], mo: [{ pose: "run", x: 350, move: "hop" }], fx: ["sparkle"] },
      },
      {
        text: { id: "Ia menggambar Kak Adam memukul bola, dengan tulisan besar: KAKAKKU JUARA. Kak Adam menempelkannya di samping piala.", en: "He drew Kak Adam hitting a ball, with big letters: MY BROTHER THE CHAMPION. Kak Adam stuck it up beside the trophy." },
        scene: { focus: 340, bg: "living", props: [{ k: "drawing", x: 470, y: 260 }, { k: "trophy", x: 520, y: 330 }], mo: [{ pose: "pose-25", x: 300 }, { who: "adam", pose: "proud-hands-hips", x: 420 }], fx: ["hearts"] },
      },
      {
        text: { id: "Sekarang di rak paling tinggi ada dua hadiah: piala emas dan gambar krayon. Dua-duanya sama berharganya.", en: "Now the highest shelf held two prizes: a gold trophy and a crayon drawing. Both just as precious." },
        scene: { bg: "living", props: [{ k: "trophy", x: 400, y: 230 }, { k: "drawing", x: 500, y: 240 }, { k: "books", x: 450, y: 330 }], mo: [{ pose: "yeyy", x: 330, move: "hop" }], fx: ["confetti"] },
      },
      {
        text: { id: "Pernahkah kamu merasa cemburu pada kakak atau adikmu? Apa kelebihan yang Allah berikan untukmu? 🏆", en: "Have you ever felt jealous of your brother or sister? What special gift has Allah given you? 🏆" },
        scene: { bg: "living", time: "dusk", props: [{ k: "drawing", x: 470 }], mo: [{ pose: "pose-29", x: 360 }], fx: ["sparkle"] },
      },
    ],
  },

  /* ───────────────────────── Family 5. Friday sedekah ───────────────────────── */
  {
    slug: "kotak-sedekah-jumat",
    pose: "baby-mo-thank-you.png",
    published: "2026-11-09",
    title: { id: "Kotak Sedekah Jumat", en: "The Friday Charity Box" },
    hook: {
      id: "Setiap Jumat, Kak Adam memasukkan koin ke kotak sedekah. Baby Mo ingin ikut — tapi koinnya cuma satu dan ia ingin membeli permen!",
      en: "Every Friday, Kak Adam drops a coin in the charity box. Baby Mo wants to join in — but he has one coin and he wants sweets!",
    },
    anchor: { type: "parenting", slug: "anak-tidak-mau-berbagi" },
    takeaway: {
      id: "Sedekah tidak selalu uang. Anak bisa belajar bersedekah lewat senyum, tenaga, dan berbagi — dimulai dari teladan di rumah.",
      en: "Charity isn't only money. Children learn to give through smiles, helping hands and sharing — starting from the example at home.",
    },
    tags: ["sedekah", "jumat", "berbagi", "kak adam", "kebaikan", "abi"],
    cover: {
      focus: 340, bg: "living",
      props: [{ k: "coins", x: 470, y: 330 }],
      mo: [{ pose: "thank-you", x: 280 }, { who: "adam", pose: "sedekah-box", x: 410 }],
      fx: ["sparkle"],
    },
    pages: [
      {
        text: { id: "Setiap Jumat pagi, ada bunyi yang sama di rumah: ting! Itu suara koin Kak Adam masuk ke kotak sedekah.", en: "Every Friday morning, the same sound rang through the house: ting! It was Kak Adam's coin dropping into the charity box." },
        scene: { focus: 390, bg: "living", mo: [{ who: "adam", pose: "sedekah-box", x: 390 }], fx: ["sparkle"] },
      },
      {
        text: { id: "\"Uangnya untuk apa, Kak?\" tanya Baby Mo. \"Nanti Abi bawa ke masjid, untuk membantu orang yang membutuhkan.\"", en: "\"What's the money for, Kak?\" asked Baby Mo. \"Abi takes it to the mosque, to help people who need it.\"" },
        scene: { focus: 340, bg: "living", mo: [{ pose: "pose-33", x: 290 }, { who: "adam", pose: "sedekah-box", x: 420 }] },
      },
      {
        text: { id: "Baby Mo punya satu koin dari celengannya. Ia memandangi koin itu… lalu toko permen di ujung jalan.", en: "Baby Mo had one coin from his piggy bank. He looked at the coin… then at the sweet shop down the road." },
        scene: { bg: "street", props: [{ k: "coins", x: 450, y: 320, s: 0.7 }, { k: "icecreamcart", x: 580 }], mo: [{ pose: "pose-22", x: 340 }] },
      },
      {
        text: { id: "\"Kalau koinnya kumasukkan ke kotak, aku nggak bisa beli permen,\" pikirnya. Wajahnya jadi kusut.", en: "\"If I put my coin in the box, I can't buy sweets,\" he thought. His face scrunched up." },
        scene: { bg: "living", props: [{ k: "coins", x: 460, y: 330, s: 0.7 }], mo: [{ pose: "pose-27", x: 360 }] },
      },
      {
        text: { id: "Kak Adam duduk di sampingnya. \"Tahu nggak, Mo? Sedekah itu nggak harus pakai uang.\"", en: "Kak Adam sat down beside him. \"Did you know, Mo? Charity doesn't have to be money.\"" },
        scene: { focus: 340, bg: "living", mo: [{ pose: "pose-40", x: 290 }, { who: "adam", pose: "kneel-talk", x: 420 }], fx: ["sparkle"] },
      },
      {
        text: { id: "\"Kata Rasulullah ﷺ, setiap kebaikan itu sedekah. Senyum, menolong, bahkan menyingkirkan batu dari jalan!\"", en: "\"The Prophet ﷺ said every good deed is charity. A smile, helping out, even moving a stone off the path!\"" },
        quote: { id: "\"Setiap kebaikan adalah sedekah.\" (HR. Bukhari dan Muslim)", en: "\"Every good deed is charity.\" (Bukhari and Muslim)" },
        scene: { focus: 340, bg: "living", mo: [{ pose: "wow", x: 290 }, { who: "adam", pose: "dua-hands", x: 420 }], fx: ["sparkle"] },
      },
      {
        text: { id: "\"Berarti aku bisa sedekah hari ini tanpa koin?\" Baby Mo melompat. \"Ayo kita berburu kebaikan!\"", en: "\"So I can give charity today without a coin?\" Baby Mo jumped up. \"Let's go hunting for good deeds!\"" },
        scene: { focus: 340, bg: "living", mo: [{ pose: "yeyy", x: 290, move: "hop" }, { who: "adam", pose: "search-crouch", x: 420 }], fx: ["confetti"] },
      },
      {
        text: { id: "Kebaikan pertama: tersenyum pada Pak Satpam. Pak Satpam tersenyum balik. \"Satu!\" hitung Kak Adam.", en: "Good deed one: smiling at the security guard. He smiled back. \"One!\" counted Kak Adam." },
        scene: { bg: "street", mo: [{ pose: "pose-16", x: 360 }], fx: ["sparkle"] },
      },
      {
        text: { id: "Kebaikan kedua: memungut sampah plastik di depan rumah dan membuangnya ke tempat sampah. \"Dua!\"", en: "Good deed two: picking up plastic litter outside the house and putting it in the bin. \"Two!\"" },
        scene: { focus: 340, bg: "street", props: [{ k: "litter", x: 470 }, { k: "trashbag", x: 540 }], mo: [{ pose: "pose-23", x: 360 }], fx: ["sparkle"] },
      },
      {
        text: { id: "Kebaikan ketiga: membantu Abi membawa belanjaan. Berat sekali — tapi berdua dengan Kak Adam, jadi ringan. \"Tiga!\"", en: "Good deed three: helping Abi carry the shopping. Very heavy — but shared with Kak Adam, it felt light. \"Three!\"" },
        scene: { focus: 320, bg: "street", props: [{ k: "veggies", x: 470 }], mo: [{ pose: "pose-04", x: 370 }, { who: "ayah", pose: "thumbs-up-stand", x: 250 }] },
      },
      {
        text: { id: "Kebaikan keempat: berbagi kue dengan Baby Ais, padahal kuenya tinggal dua. \"Empat!\"", en: "Good deed four: sharing a biscuit with Baby Ais, even though there were only two left. \"Four!\"" },
        scene: { focus: 330, bg: "kitchen", props: [{ k: "cookies", x: 470 }], mo: [{ pose: "pose-25", x: 390 }, { who: "ais", pose: "heart-hands-smile", x: 280 }], fx: ["hearts"] },
      },
      {
        text: { id: "Sore harinya Baby Mo memandangi koinnya lagi. Lalu ia berjalan ke kotak sedekah… dan TING!", en: "That afternoon Baby Mo looked at his coin again. Then he walked to the charity box… and TING!" },
        scene: { focus: 340, bg: "living", time: "dusk", props: [{ k: "coins", x: 450, y: 320, s: 0.7 }], mo: [{ pose: "thank-you", x: 300 }, { who: "adam", pose: "sedekah-box", x: 420 }], fx: ["sparkle"] },
      },
      {
        text: { id: "\"Lho, permennya?\" tanya Kak Adam. Baby Mo tersenyum. \"Hatiku sudah manis duluan. Nggak perlu permen.\"", en: "\"What about the sweets?\" asked Kak Adam. Baby Mo smiled. \"My heart's already sweet. I don't need sweets.\"" },
        scene: { focus: 340, bg: "living", time: "dusk", mo: [{ pose: "pose-07", x: 290 }, { who: "adam", pose: "surprised-hands-up", x: 420 }], fx: ["hearts"] },
      },
      {
        text: { id: "Abi mendengarnya dan memeluk keduanya. \"Masya Allah. Hari ini rumah kita penuh sedekah.\"", en: "Abi heard and hugged them both. \"Masha Allah. Today our home is full of charity.\"" },
        scene: { focus: 330, bg: "living", time: "dusk", mo: [{ who: "ayah", pose: "hug-mo", x: 320 }, { who: "adam", pose: "proud-hands-hips", x: 450 }], fx: ["hearts"] },
      },
      {
        text: { id: "Jumat depannya, ada dua bunyi di rumah: ting! dan ting! Kak Adam dan Baby Mo, bersebelahan.", en: "The next Friday there were two sounds in the house: ting! and ting! Kak Adam and Baby Mo, side by side." },
        scene: { focus: 340, bg: "living", props: [{ k: "coins", x: 450, y: 330, s: 0.7 }], mo: [{ pose: "thank-you", x: 300 }, { who: "adam", pose: "sedekah-box", x: 420 }], fx: ["sparkle"] },
      },
      {
        text: { id: "Hari ini kamu bisa sedekah apa — senyum, tenaga, atau berbagi? Coba hitung kebaikanmu sampai malam! 💛", en: "What charity can you give today — a smile, a helping hand, or sharing? Count your good deeds until bedtime! 💛" },
        scene: { bg: "living", props: [{ k: "heart", x: 470, y: 240, s: 0.7 }], mo: [{ pose: "pose-25", x: 360 }], fx: ["hearts"] },
      },
    ],
  },

  /* ───────────────────────── Family 6. Iqra with Kak Adam ───────────────────────── */
  {
    slug: "iqra-bersama-kak-adam",
    pose: "baby-mo-pose-12.png",
    published: "2026-11-10",
    title: { id: "Iqra Bersama Kak Adam", en: "Learning Iqra with Kak Adam" },
    hook: {
      id: "Kak Adam sudah lancar membaca Al-Qur'an. Baby Mo ingin bisa juga — tapi huruf-hurufnya mirip semua! Alif, ba, ta… tsa?",
      en: "Kak Adam can read the Qur'an fluently. Baby Mo wants to as well — but the letters all look alike! Alif, ba, ta… tha?",
    },
    anchor: { type: "parenting", slug: "mengajarkan-quran" },
    takeaway: {
      id: "Anak paling semangat belajar Al-Qur'an dari orang yang ia sayangi — termasuk kakaknya. Sedikit setiap hari lebih baik daripada banyak sekali-sekali.",
      en: "Children are keenest to learn the Qur'an from people they love — big siblings included. A little every day beats a lot now and then.",
    },
    tags: ["al-quran", "iqra", "huruf hijaiyah", "kak adam", "belajar", "abi"],
    cover: {
      focus: 340, bg: "living",
      props: [{ k: "quran", x: 470, y: 340 }],
      mo: [{ pose: "pose-12", x: 300 }, { who: "adam", pose: "quran-read-sit", x: 420 }],
      fx: ["sparkle"],
    },
    pages: [
      {
        text: { id: "Setiap selesai Maghrib, Kak Adam membaca Al-Qur'an. Suaranya pelan dan indah, seperti air yang mengalir.", en: "Every evening after Maghrib, Kak Adam read the Qur'an. His voice was soft and beautiful, like flowing water." },
        scene: { focus: 390, bg: "living", time: "dusk", mo: [{ who: "adam", pose: "quran-read-sit", x: 390 }], fx: ["sparkle"] },
      },
      {
        text: { id: "Baby Mo duduk mendengarkan sambil menopang dagu. \"Kak, aku juga mau bisa baca seperti Kakak!\"", en: "Baby Mo sat listening, chin in his hands. \"Kak, I want to read like you!\"" },
        scene: { focus: 340, bg: "living", time: "dusk", mo: [{ pose: "pose-12", x: 290 }, { who: "adam", pose: "quran-read-sit", x: 420 }] },
      },
      {
        text: { id: "Abi tersenyum. \"Kak Adam dulu juga mulai dari Iqra jilid satu. Mau jadi guru adikmu, Kak?\"", en: "Abi smiled. \"Kak Adam started with Iqra book one too. Would you like to be your brother's teacher, Kak?\"" },
        scene: { focus: 340, bg: "living", time: "dusk", mo: [{ who: "ayah", pose: "teach-point-kneel", x: 280 }, { who: "adam", pose: "proud-hands-hips", x: 420 }], fx: ["sparkle"] },
      },
      {
        text: { id: "Kak Adam membuka buku Iqra kecil. \"Ini alif — berdiri tegak seperti tiang. Coba bilang: a!\" \"A!\"", en: "Kak Adam opened a little Iqra book. \"This is alif — standing tall like a pole. Say: a!\" \"A!\"" },
        scene: { focus: 340, bg: "living", props: [{ k: "books", x: 360 }], mo: [{ pose: "pose-41", x: 290 }, { who: "adam", pose: "teach-iqra-sit", x: 430 }] },
      },
      {
        text: { id: "\"Ini ba — seperti perahu dengan satu titik di bawah. Ba!\" Baby Mo menunjuk. \"Perahu! Ba!\"", en: "\"This is ba — like a boat with one dot underneath. Ba!\" Baby Mo pointed. \"A boat! Ba!\"" },
        scene: { focus: 340, bg: "living", props: [{ k: "books", x: 360 }], mo: [{ pose: "pose-08", x: 290 }, { who: "adam", pose: "teach-iqra-sit", x: 430 }], fx: ["sparkle"] },
      },
      {
        text: { id: "\"Ta — perahunya dapat dua titik di atas. Tsa — tiga titik!\" Baby Mo mengerutkan dahi. \"Kok perahunya sama semua?\"", en: "\"Ta — the boat gets two dots on top. Tha — three dots!\" Baby Mo frowned. \"Why are all the boats the same?\"" },
        scene: { focus: 340, bg: "living", props: [{ k: "books", x: 360 }], mo: [{ pose: "pose-33", x: 290 }, { who: "adam", pose: "teach-iqra-sit", x: 430 }] },
      },
      {
        text: { id: "Hari kedua, Baby Mo tertukar ba dan ta. Hari ketiga, ia lupa tsa. Ia menutup bukunya. \"Susah, Kak!\"", en: "On day two, Baby Mo mixed up ba and ta. On day three, he forgot tha. He closed the book. \"It's hard, Kak!\"" },
        scene: { bg: "living", props: [{ k: "books", x: 470 }], mo: [{ pose: "pose-27", x: 360 }] },
      },
      {
        text: { id: "Kak Adam ingat waktu ia kesulitan forehand. \"Mo, Kakak punya rahasia: kita bikin lagu titik!\"", en: "Kak Adam remembered struggling with his forehand. \"Mo, I've got a secret: let's make up a dot song!\"" },
        scene: { focus: 340, bg: "living", mo: [{ pose: "pose-40", x: 290 }, { who: "adam", pose: "kneel-talk", x: 420 }], fx: ["sparkle"] },
      },
      {
        text: { id: "\"Ba satu titik di bawah, ta dua titik di atas, tsa tiga titik di atas — seperti tumpukan bola!\"", en: "\"Ba, one dot below; ta, two dots above; tha, three dots on top — like a stack of balls!\"" },
        scene: { focus: 340, bg: "living", props: [{ k: "ballbounce", x: 480 }], mo: [{ pose: "pose-30", x: 290, move: "sway" }, { who: "adam", pose: "tennis-bounce-1", seq: BOUNCE, fps: 6, move: "still", x: 420 }], fx: ["notes"] },
      },
      {
        text: { id: "Baby Ais ikut bernyanyi sambil menari. Bahkan Abi ikut bertepuk dari dapur. Lagu titik jadi lagu rumah!", en: "Baby Ais sang and danced along. Even Abi clapped from the kitchen. The dot song became the house song!" },
        scene: { focus: 330, bg: "living", mo: [{ who: "ais", pose: "headphones-dance", x: 280 }, { pose: "pose-30", x: 390, move: "sway" }], fx: ["notes"] },
      },
      {
        text: { id: "Setiap hari, satu halaman saja. Tidak lebih. Tapi tidak pernah dilewatkan — bahkan waktu hujan, bahkan waktu capek.", en: "Every day, just one page. No more. But never skipped — not on rainy days, not on tired days." },
        scene: { focus: 340, bg: "living", time: "rain", props: [{ k: "books", x: 360 }], mo: [{ pose: "pose-12", x: 290 }, { who: "adam", pose: "quran-read-sit", x: 430 }], fx: ["rain"] },
      },
      {
        text: { id: "Seminggu kemudian, Baby Mo membaca satu halaman penuh tanpa salah. \"Ba… ta… tsa… ALHAMDULILLAH!\"", en: "A week later, Baby Mo read a whole page without a mistake. \"Ba… ta… tha… ALHAMDULILLAH!\"" },
        scene: { bg: "living", props: [{ k: "books", x: 470 }], mo: [{ pose: "yeyy", x: 360, move: "hop" }], fx: ["confetti"] },
      },
      {
        text: { id: "Abi memberinya bintang emas, lalu memeluk Kak Adam. \"Kamu belajar dan mengajarkan. Itu yang terbaik, Kak.\"", en: "Abi gave him a gold star, then hugged Kak Adam. \"You learn and you teach. That's the very best, Kak.\"" },
        quote: { id: "\"Sebaik-baik kalian adalah orang yang belajar Al-Qur'an dan mengajarkannya.\" (HR. Bukhari)", en: "\"The best of you are those who learn the Qur'an and teach it.\" (Bukhari)" },
        scene: { focus: 340, bg: "living", props: [{ k: "goldstar", x: 470, y: 240 }], mo: [{ who: "ayah", pose: "kneel-arms-open", x: 290 }, { who: "adam", pose: "sheepish-scratch-head", x: 420 }], fx: ["sparkle"] },
      },
      {
        text: { id: "Malam itu, ada dua suara membaca di ruang tengah: satu lancar, satu pelan-pelan. Abi mendengarkan sambil tersenyum.", en: "That night, two voices read in the living room: one smooth, one slow and careful. Abi listened, smiling." },
        scene: { focus: 340, bg: "living", time: "night", mo: [{ pose: "pose-12", x: 290 }, { who: "adam", pose: "quran-read-sit", x: 420 }], fx: ["stars"] },
      },
      {
        text: { id: "\"Nanti kalau aku sudah besar, aku yang mengajari Ais,\" kata Baby Mo. Baby Ais menggeleng. \"Aku mau diajari Kak Adam!\"", en: "\"When I'm big, I'll teach Ais,\" said Baby Mo. Baby Ais shook her head. \"I want Kak Adam to teach me!\"" },
        scene: { focus: 330, bg: "living", time: "night", mo: [{ pose: "pose-25", x: 390 }, { who: "ais", pose: "read-quran-sit", x: 280 }], fx: ["sparkle"] },
      },
      {
        text: { id: "Huruf apa yang paling kamu suka? Coba bikin lagu titikmu sendiri! 📖", en: "Which letter do you like best? Try making up your own dot song! 📖" },
        scene: { bg: "living", time: "night", props: [{ k: "quran", x: 470, y: 340 }], mo: [{ pose: "idea", x: 360 }], fx: ["stars"] },
      },
    ],
  },

  /* ───────────────────────── Family 7. Rained-out tennis ───────────────────────── */
  {
    slug: "hujan-tenis-batal",
    pose: "baby-mo-pose-29.png",
    published: "2026-11-10",
    title: { id: "Hujan! Tenis Batal!", en: "Rain! No Tennis Today!" },
    hook: {
      id: "Sabtu ini jadwal tenis bersama Abi. Tapi hujan turun deras sekali. Kak Adam kecewa berat — sampai Abi punya ide gila…",
      en: "Saturday is tennis day with Abi. But the rain is pouring down. Kak Adam is so disappointed — until Abi has a crazy idea…",
    },
    anchor: { type: "doa", slug: "ketika-hujan" },
    takeaway: {
      id: "Rencana yang batal bisa diganti rencana baru yang sama serunya. Ajarkan anak berdoa saat hujan dan menyambutnya sebagai rahmat.",
      en: "A cancelled plan can become a new one that's just as fun. Teach children the du'a for rain and to welcome it as a mercy.",
    },
    tags: ["hujan", "tenis", "kecewa", "kak adam", "doa hujan", "abi"],
    cover: {
      focus: 340, bg: "court", time: "rain",
      props: [{ k: "puddle", x: 480 }, { k: "umbrella", x: 300, y: 320 }],
      mo: [{ pose: "pose-29", x: 290 }, { who: "adam", pose: "disappointed-sigh", x: 420 }],
      fx: ["rain"],
    },
    pages: [
      {
        text: { id: "Sabtu pagi Kak Adam sudah siap: sepatu, raket, botol minum. \"Hari ini aku mau latihan servis roket!\"", en: "On Saturday morning Kak Adam was ready: shoes, racket, water bottle. \"Today I'm practising my rocket serve!\"" },
        scene: { focus: 390, bg: "living", props: [{ k: "shoes", x: 490 }], mo: [{ who: "adam", pose: "tennis-walk-racket", x: 390 }], fx: ["sparkle"] },
      },
      {
        text: { id: "Lalu langit jadi gelap. Tik… tik… tik… BRESSS! Hujan turun deras sekali.", en: "Then the sky went dark. Pit… pat… pit… WHOOSH! Down came the rain." },
        scene: { bg: "court", time: "rain", props: [{ k: "puddle", x: 470 }, { k: "ballbasket", x: 560 }], fx: ["rain", "lightning"] },
      },
      {
        text: { id: "Lapangan jadi kolam. Bola-bola mengapung. Kak Adam menempelkan wajah di jendela. \"Yaaah… batal.\"", en: "The court became a pond. Tennis balls floated. Kak Adam pressed his face to the window. \"Oh no… cancelled.\"" },
        scene: { focus: 390, bg: "living", time: "rain", mo: [{ who: "adam", pose: "disappointed-sigh", x: 390 }], fx: ["rain"] },
      },
      {
        text: { id: "\"Kenapa harus hujan sekarang, sih?\" gerutunya. Ia melempar raketnya ke sofa.", en: "\"Why does it have to rain now?\" he grumbled. He tossed his racket onto the sofa." },
        scene: { focus: 390, bg: "living", time: "rain", props: [{ k: "racket", x: 300, y: 330 }, { k: "cloud", x: 400, y: 150, s: 0.6 }], mo: [{ who: "adam", pose: "frustrated-stomp", x: 400 }] },
      },
      {
        text: { id: "Abi duduk di sampingnya. \"Abi juga kecewa. Tapi coba lihat — tanaman-tanaman Umi sedang minum besar-besaran.\"", en: "Abi sat beside him. \"I'm disappointed too. But look — Umi's plants are having a huge drink.\"" },
        scene: { focus: 340, bg: "living", time: "rain", props: [{ k: "plant", x: 520 }], mo: [{ who: "ayah", pose: "listen-sit-box", x: 280 }, { who: "adam", pose: "sad-head-down", x: 420 }] },
      },
      {
        text: { id: "\"Hujan itu rahmat, Kak. Ada doanya, lho.\" Abi menengadahkan tangan: \"Allahumma shayyiban naafi'aa.\"", en: "\"Rain is a mercy, Kak. There's a du'a for it.\" Abi raised his hands: \"Allahumma shayyiban naafi'aa.\"" },
        quote: { id: "\"Allahumma shayyiban naafi'aa.\" — Ya Allah, jadikanlah hujan ini hujan yang bermanfaat. (HR. Bukhari)", en: "\"Allahumma shayyiban naafi'aa.\" — O Allah, make this a beneficial rain. (Bukhari)" },
        scene: { focus: 340, bg: "living", time: "rain", mo: [{ who: "ayah", pose: "dua-kneel", x: 280 }, { who: "adam", pose: "dua-hands", x: 420 }], fx: ["rain"] },
      },
      {
        text: { id: "Lalu mata Abi berbinar. \"Kak… bagaimana kalau kita bikin LAPANGAN TENIS DI RUANG TENGAH?\"", en: "Then Abi's eyes lit up. \"Kak… what if we make A TENNIS COURT IN THE LIVING ROOM?\"" },
        scene: { focus: 340, bg: "living", time: "rain", mo: [{ who: "ayah", pose: "idea-point-stand", x: 270 }, { who: "adam", pose: "surprised-hands-up", x: 420 }], fx: ["sparkle"] },
      },
      {
        text: { id: "Sofa didorong ke pinggir. Seutas tali dibentangkan di antara dua kursi — itu netnya!", en: "The sofa was pushed aside. A rope was stretched between two chairs — that was the net!" },
        scene: { bg: "living", time: "rain", props: [{ k: "tennisnet", x: 400 }], mo: [{ pose: "pose-02", x: 520, move: "hop" }], fx: ["sparkle"] },
      },
      {
        text: { id: "Bolanya? Balon! Raketnya? Buku tulis dan piring plastik. Si kembar berteriak, \"Kami ikut main!\"", en: "The ball? A balloon! The rackets? Exercise books and plastic plates. The twins shouted, \"We're playing too!\"" },
        scene: { focus: 330, bg: "living", time: "rain", props: [{ k: "balloon", x: 330, y: 230 }], mo: [{ pose: "yeyy", x: 400, move: "hop" }, { who: "ais", pose: "jump-cheer", x: 270, move: "hop" }], fx: ["confetti"] },
      },
      {
        text: { id: "Pertandingan dimulai: Abi dan Mo melawan Kak Adam dan Ais. PUK! Balonnya melayang pelan melewati tali.", en: "The match began: Abi and Mo against Kak Adam and Ais. POK! The balloon floated slowly over the rope." },
        scene: { focus: 360, bg: "living", time: "rain", props: [{ k: "tennisnet", x: 380 }, { k: "balloon", x: 380, y: 220 }], mo: [{ pose: "pose-41", x: 290 }, { who: "adam", pose: "tennis-ready-wide", x: 490 }] },
      },
      {
        text: { id: "Kak Adam mencoba servis roket pakai buku tulis. Balonnya malah mental ke lampu — dan berputar-putar di udara!", en: "Kak Adam tried a rocket serve with an exercise book. The balloon bounced off the lamp — and spun round in the air!" },
        scene: { focus: 390, bg: "living", time: "rain", props: [{ k: "lamp", x: 500, s: 0.85 }, { k: "balloon", x: 470, y: 180 }, { k: "bonk", x: 470, y: 140 }], mo: [{ who: "adam", pose: "tennis-serve-toss", x: 390 }] },
      },
      {
        text: { id: "Semua tertawa sampai perut sakit. Abi tergelincir di karpet. Baby Ais mencetak poin pertama!", en: "Everyone laughed till their tummies hurt. Abi slipped on the rug. Baby Ais scored the first point!" },
        scene: { focus: 330, bg: "living", time: "rain", mo: [{ who: "ais", pose: "trophy-cheer", x: 270 }, { pose: "pose-03", x: 390 }], fx: ["confetti"] },
      },
      {
        text: { id: "\"Skor terakhir?\" tanya Baby Mo. Tidak ada yang ingat — karena semua terlalu sibuk tertawa.", en: "\"What's the final score?\" asked Baby Mo. Nobody remembered — everyone was too busy laughing." },
        scene: { focus: 330, bg: "living", time: "rain", props: [{ k: "balloon", x: 470, y: 230 }], mo: [{ pose: "pose-33", x: 390 }, { who: "ayah", pose: "cheer-kneel", x: 265 }] },
      },
      {
        text: { id: "Sore harinya hujan berhenti. Di langit muncul pelangi besar di atas lapangan tenis.", en: "In the afternoon the rain stopped. A big rainbow appeared over the tennis court." },
        scene: { bg: "court", time: "dusk", props: [{ k: "rainbow", x: 400, y: 200 }, { k: "puddle", x: 520 }], mo: [{ pose: "wow", x: 360 }], fx: ["sparkle"] },
      },
      {
        text: { id: "Kak Adam tersenyum. \"Ternyata hari batal tenis jadi hari paling lucu.\" Abi mengangguk. \"Allah selalu punya rencana yang lebih seru.\"", en: "Kak Adam grinned. \"The no-tennis day turned into the funniest day.\" Abi nodded. \"Allah always has an even better plan.\"" },
        scene: { focus: 340, bg: "court", time: "dusk", props: [{ k: "rainbow", x: 400, y: 200 }], mo: [{ who: "ayah", pose: "thumbs-up-stand", x: 270 }, { who: "adam", pose: "laugh-tummy", x: 420 }], fx: ["sparkle"] },
      },
      {
        text: { id: "Kalau rencanamu batal karena hujan, permainan apa yang bisa kamu buat di dalam rumah? ☔", en: "If your plans were rained off, what game could you make up indoors? ☔" },
        scene: { bg: "living", time: "rain", props: [{ k: "balloon", x: 470, y: 230 }, { k: "tennisnet", x: 520 }], mo: [{ pose: "pose-29", x: 340 }], fx: ["rain"] },
      },
    ],
  },

  /* ───────────────────────── Family 8. The burnt cake ───────────────────────── */
  {
    slug: "kue-gosong-untuk-umi",
    pose: "baby-mo-pose-26.png",
    published: "2026-11-10",
    title: { id: "Kue Gosong untuk Umi", en: "A Burnt Cake for Umi" },
    hook: {
      id: "Abi, Kak Adam, dan si kembar membuat kue untuk Umi. Tepungnya beterbangan, telurnya jatuh… dan kuenya gosong!",
      en: "Abi, Kak Adam and the twins bake a cake for Umi. Flour flies, an egg drops… and the cake gets burnt!",
    },
    anchor: { type: "hadith", slug: "berbakti-pada-ibu" },
    takeaway: {
      id: "Hadiah untuk ibu tidak harus sempurna. Yang membuatnya berharga adalah usaha, kebersamaan, dan cinta di dalamnya.",
      en: "A gift for Mum doesn't need to be perfect. What makes it precious is the effort, the togetherness and the love inside.",
    },
    tags: ["umi", "ibu", "berbakti", "memasak", "abi", "kak adam"],
    cover: {
      focus: 330, bg: "kitchen",
      props: [{ k: "oven", x: 520 }, { k: "flour", x: 440, y: 330 }],
      mo: [{ pose: "pose-26", x: 380 }, { who: "ayah", pose: "surprised-cheeks-sit", x: 260 }],
      fx: ["sparkle"],
    },
    pages: [
      {
        text: { id: "\"Pssst!\" bisik Abi. \"Umi sedang ke pengajian. Bagaimana kalau kita buat kue kejutan untuk Umi?\"", en: "\"Pssst!\" whispered Abi. \"Umi's at her Qur'an class. How about we make her a surprise cake?\"" },
        scene: { focus: 320, bg: "kitchen", mo: [{ pose: "pose-05", x: 390 }, { who: "ayah", pose: "teach-point-kneel", x: 265 }] },
      },
      {
        text: { id: "\"Setuju!\" Kak Adam membaca resep. Baby Mo memakai celemek. Baby Ais memakai topi koki.", en: "\"Yes!\" Kak Adam read the recipe. Baby Mo put on an apron. Baby Ais put on a chef's hat." },
        scene: { focus: 330, bg: "kitchen", props: [{ k: "bowl", x: 470 }], mo: [{ who: "ais", pose: "chef-whisk", x: 280 }, { pose: "pose-25", x: 390 }], fx: ["sparkle"] },
      },
      {
        text: { id: "Langkah satu: tepung. Baby Mo menuangnya terlalu semangat — PUFF! Dapur jadi bersalju.", en: "Step one: flour. Baby Mo poured it far too keenly — POOF! The kitchen turned snowy." },
        scene: { focus: 340, bg: "kitchen", props: [{ k: "flour", x: 440, y: 320 }, { k: "bowl", x: 480 }], mo: [{ pose: "pose-26", x: 360 }], fx: ["bubbles"] },
      },
      {
        text: { id: "Langkah dua: telur. Baby Ais memecahkannya… di lantai. Plok! \"Ups.\"", en: "Step two: eggs. Baby Ais cracked one… on the floor. Splat! \"Oops.\"" },
        scene: { focus: 330, bg: "kitchen", props: [{ k: "egg", x: 450 }], mo: [{ who: "ais", pose: "surprised", x: 330 }] },
      },
      {
        text: { id: "Abi tertawa dan mengambil kain lap. \"Tidak apa-apa. Telurnya masih banyak.\"", en: "Abi laughed and fetched a cloth. \"That's okay. We've got plenty of eggs.\"" },
        scene: { focus: 320, bg: "kitchen", props: [{ k: "egg", x: 470 }, { k: "towel", x: 440 }], mo: [{ who: "ais", pose: "giggle", x: 390 }, { who: "ayah", pose: "cheer-kneel", x: 265 }] },
      },
      {
        text: { id: "Baby Ais mengaduk adonan seperti forehand Kak Adam: putar, putar, putar! Adonannya jadi lembut.", en: "Baby Ais stirred the batter like Kak Adam's forehand: round, round, round! It went smooth and soft." },
        scene: { focus: 360, bg: "kitchen", props: [{ k: "swoosh", x: 380, y: 300, s: 0.6 }], mo: [{ who: "ais", pose: "chef-bowl-wink", x: 360 }] },
      },
      {
        text: { id: "Adonan masuk oven. \"Tiga puluh menit,\" kata Abi. Sambil menunggu, mereka membersihkan dapur yang bersalju.", en: "Into the oven went the batter. \"Thirty minutes,\" said Abi. While they waited, they cleaned the snowy kitchen." },
        scene: { focus: 330, bg: "kitchen", props: [{ k: "oven", x: 520 }, { k: "brooms", x: 380 }], mo: [{ pose: "pose-23", x: 380 }, { who: "ais", pose: "thumbs-up-walk", x: 270 }] },
      },
      {
        text: { id: "Lalu mereka membuat kartu. Baby Mo menggambar hati. Baby Ais menggambar bunga. Kak Adam menulis: UNTUK UMI TERSAYANG.", en: "Then they made a card. Baby Mo drew a heart. Baby Ais drew a flower. Kak Adam wrote: FOR OUR DEAREST UMI." },
        scene: { focus: 330, bg: "living", props: [{ k: "drawing", x: 480 }], mo: [{ who: "ais", pose: "draw-crayons", x: 280 }, { pose: "pose-36", x: 390 }], fx: ["hearts"] },
      },
      {
        text: { id: "Mereka terlalu asyik menggambar… sampai hidung Baby Mo mengendus sesuatu. \"Kok baunya… gosong?\"", en: "They were so busy drawing… until Baby Mo's nose sniffed something. \"Why does it smell… burnt?\"" },
        scene: { bg: "kitchen", props: [{ k: "oven", x: 480 }, { k: "cloud", x: 480, y: 220, s: 0.5 }], mo: [{ pose: "pose-40", x: 360 }] },
      },
      {
        text: { id: "Abi membuka oven. Kuenya hitam di pinggir, keras di atas, dan bentuknya miring seperti topi.", en: "Abi opened the oven. The cake was black round the edges, hard on top, and lopsided like a hat." },
        scene: { focus: 320, bg: "kitchen", props: [{ k: "oven", x: 470 }], mo: [{ pose: "pose-28", x: 390 }, { who: "ayah", pose: "shocked-kneel", x: 260 }] },
      },
      {
        text: { id: "Baby Ais mulai menangis. \"Kuenya rusak! Kejutannya gagal!\" Kak Adam pun menunduk sedih.", en: "Baby Ais began to cry. \"The cake's ruined! The surprise is spoilt!\" Even Kak Adam hung his head." },
        scene: { focus: 330, bg: "kitchen", mo: [{ who: "ais", pose: "cry-sit", x: 280 }, { who: "adam", pose: "sad-head-down", x: 410 }] },
      },
      {
        text: { id: "Abi memeluk mereka. \"Umi tidak butuh kue yang sempurna. Umi butuh tahu bahwa kalian sayang Umi.\"", en: "Abi hugged them. \"Umi doesn't need a perfect cake. She needs to know you love her.\"" },
        quote: { id: "Seseorang bertanya kepada Rasulullah ﷺ, \"Siapa yang paling berhak aku perlakukan dengan baik?\" Beliau menjawab, \"Ibumu.\" Lalu siapa? \"Ibumu.\" Lalu siapa? \"Ibumu.\" Lalu siapa? \"Ayahmu.\" (HR. Bukhari dan Muslim)", en: "A man asked the Prophet ﷺ, \"Who most deserves my good company?\" He said, \"Your mother.\" Then who? \"Your mother.\" Then who? \"Your mother.\" Then who? \"Your father.\" (Bukhari and Muslim)" },
        scene: { bg: "kitchen", mo: [{ who: "ayah", pose: "hug-mo", x: 340 }], fx: ["hearts"] },
      },
      {
        text: { id: "Ceklek! \"Assalamu'alaikum!\" Umi pulang. Dapurnya masih sedikit bersalju, dan baunya sedikit gosong.", en: "Click! \"Assalamu'alaikum!\" Umi was home. The kitchen was still a bit snowy and smelled a bit burnt." },
        scene: { focus: 330, bg: "kitchen", props: [{ k: "flour", x: 480, y: 330 }], mo: [{ pose: "pose-26", x: 380 }, { who: "ais", pose: "peek-wall", x: 270 }] },
      },
      {
        text: { id: "\"KEJUTAAAN!\" Mereka memberikan kue miring dan kartunya. Umi memandang kue itu… lalu tertawa sambil menangis bahagia.", en: "\"SURPRIIISE!\" They handed over the lopsided cake and the card. Umi looked at it… then laughed and cried happy tears." },
        scene: { focus: 330, bg: "living", props: [{ k: "card", x: 470, y: 320 }, { k: "heart", x: 470, y: 220, s: 0.7 }], mo: [{ pose: "yeyy", x: 380, move: "hop" }, { who: "adam", pose: "show-drawing", x: 270 }], fx: ["confetti", "hearts"] },
      },
      {
        text: { id: "\"Ini kue paling enak sedunia,\" kata Umi, sambil memakan bagian yang tidak gosong. \"Karena isinya cinta.\"", en: "\"This is the best cake in the world,\" said Umi, eating the un-burnt bits. \"Because it's full of love.\"" },
        scene: { focus: 330, bg: "living", props: [{ k: "cookies", x: 470 }], mo: [{ pose: "pose-07", x: 390 }, { who: "ais", pose: "heart-hands-smile", x: 280 }], fx: ["hearts"] },
      },
      {
        text: { id: "Apa yang bisa kamu buat untuk Umi hari ini? Ingat — tidak perlu sempurna, yang penting penuh cinta! 🎂", en: "What could you make for your mum today? Remember — it doesn't need to be perfect, just full of love! 🎂" },
        scene: { bg: "kitchen", props: [{ k: "bowl", x: 470 }, { k: "heart", x: 470, y: 230, s: 0.6 }], mo: [{ pose: "thank-you", x: 360 }], fx: ["sparkle"] },
      },
    ],
  },

  /* ───────────────────────── Family 9. The lost lucky ball ───────────────────────── */
  {
    slug: "bola-keberuntungan-yang-hilang",
    pose: "baby-mo-pose-38.png",
    published: "2026-11-10",
    title: { id: "Bola Keberuntungan yang Hilang", en: "The Lost Lucky Ball" },
    hook: {
      id: "Bola tenis kesayangan Kak Adam hilang! Semua mencari. Tapi Baby Mo diam saja… karena ia tahu di mana bola itu.",
      en: "Kak Adam's favourite tennis ball has vanished! Everyone searches. But Baby Mo stays quiet… because he knows where it is.",
    },
    anchor: { type: "parenting", slug: "anak-bohong" },
    takeaway: {
      id: "Anak lebih berani jujur saat orang tua menyambut pengakuannya dengan tenang. Jujur dulu, lalu perbaiki bersama.",
      en: "Children find it easier to own up when parents greet the truth calmly. Honesty first, then put it right together.",
    },
    tags: ["jujur", "bohong", "kak adam", "kakak adik", "maaf", "abi"],
    cover: {
      focus: 340, bg: "living",
      props: [{ k: "magnifier", x: 470 }, { k: "tennisball", x: 520 }],
      mo: [{ pose: "pose-38", x: 290 }, { who: "adam", pose: "tennis-hold-ball", x: 420 }],
    },
    pages: [
      {
        text: { id: "Kak Adam punya satu bola tenis istimewa. Ada tanda tangan pelatihnya, dan ia selalu membawanya ke setiap pertandingan.", en: "Kak Adam had one special tennis ball. It had his coach's signature, and he took it to every match." },
        scene: { focus: 390, bg: "living", props: [{ k: "goldstar", x: 480, y: 240 }], mo: [{ who: "adam", pose: "tennis-hold-ball", x: 390 }], fx: ["sparkle"] },
      },
      {
        text: { id: "Siang itu, Baby Mo melihat bola itu di meja. \"Cuma pinjam sebentar,\" bisiknya. Ia membawanya ke halaman.", en: "That noon, Baby Mo saw the ball on the table. \"Just borrowing it for a bit,\" he whispered. He took it to the garden." },
        scene: { bg: "garden", props: [{ k: "tennisball", x: 450 }], mo: [{ pose: "pose-09", x: 350 }] },
      },
      {
        text: { id: "Ia memantulkannya tinggi sekali. Duk… duk… DUK! Bolanya melambung, lalu jatuh ke dalam semak-semak.", en: "He bounced it really high. Bonk… bonk… BONK! The ball flew up, then dropped into the bushes." },
        scene: { focus: 360, bg: "garden", props: [{ k: "ballbounce", x: 400 }, { k: "bush", x: 540 }], mo: [{ pose: "pose-02", x: 320, move: "hop" }] },
      },
      {
        text: { id: "Baby Mo mencarinya di semak-semak. Tidak ada. Di bawah pot. Tidak ada. Dadanya mulai berdebar.", en: "Baby Mo searched the bushes. Nothing. Under the pots. Nothing. His heart began to thump." },
        scene: { bg: "garden", props: [{ k: "bush", x: 470 }, { k: "pot", x: 560 }], mo: [{ pose: "pose-34", x: 360 }] },
      },
      {
        text: { id: "Sore itu Kak Adam berteriak, \"Bolaku hilang! Ada yang lihat bola keberuntunganku?\"", en: "That afternoon Kak Adam shouted, \"My ball's gone! Has anyone seen my lucky ball?\"" },
        scene: { focus: 390, bg: "living", time: "dusk", mo: [{ who: "adam", pose: "surprised-hands-up", x: 390 }] },
      },
      {
        text: { id: "Semua ikut mencari. Abi di bawah sofa. Baby Ais dengan kaca pembesarnya. Baby Mo… diam di pojok.", en: "Everyone joined the search. Abi under the sofa. Baby Ais with her magnifying glass. Baby Mo… stayed quiet in the corner." },
        scene: { focus: 330, bg: "living", time: "dusk", mo: [{ who: "ais", pose: "magnifier-wink", x: 280 }, { pose: "pose-38", x: 400 }] },
      },
      {
        text: { id: "\"Mo, kamu lihat bolanya?\" tanya Kak Adam. Baby Mo menggeleng cepat. \"Nggak, Kak.\" Tapi perutnya langsung sakit.", en: "\"Mo, have you seen it?\" asked Kak Adam. Baby Mo shook his head fast. \"No, Kak.\" But his tummy suddenly ached." },
        scene: { focus: 340, bg: "living", time: "dusk", mo: [{ pose: "pose-32", x: 290 }, { who: "adam", pose: "kneel-talk", x: 420 }] },
      },
      {
        text: { id: "Malam itu Baby Mo tidak bisa tidur. Kata \"nggak\" itu terasa berat, seperti batu di dalam perut.", en: "That night Baby Mo couldn't sleep. That word \"no\" felt heavy, like a stone in his tummy." },
        scene: { bg: "bedroom", time: "night", props: [{ k: "teddy", x: 470 }], mo: [{ pose: "pose-10", x: 360 }], fx: ["stars"] },
      },
      {
        text: { id: "Abi masuk dan duduk di tepi kasur. \"Mo kelihatan gelisah. Ada yang mau diceritakan ke Abi?\"", en: "Abi came in and sat on the edge of the bed. \"You look worried, Mo. Is there something you want to tell me?\"" },
        scene: { focus: 320, bg: "bedroom", time: "night", mo: [{ pose: "pose-38", x: 390 }, { who: "ayah", pose: "listen-sit-box", x: 260 }] },
      },
      {
        text: { id: "Baby Mo menarik napas, lalu semuanya keluar: \"Aku yang ambil bolanya… lalu hilang di semak… lalu aku bilang nggak…\"", en: "Baby Mo took a breath, and it all came out: \"I took the ball… it got lost in the bushes… and then I said no…\"" },
        scene: { focus: 320, bg: "bedroom", time: "night", mo: [{ pose: "pose-37", x: 390 }, { who: "ayah", pose: "hand-heart-kneel", x: 265 }] },
      },
      {
        text: { id: "Abi tidak marah. Abi memeluknya. \"Terima kasih sudah jujur, Mo. Jujur itu berat, tapi kamu berani.\"", en: "Abi wasn't cross. He hugged him. \"Thank you for being honest, Mo. Honesty is hard, but you were brave.\"" },
        quote: { id: "\"Sesungguhnya kejujuran membawa kepada kebaikan, dan kebaikan membawa ke surga.\" (HR. Bukhari dan Muslim)", en: "\"Truthfulness leads to goodness, and goodness leads to Paradise.\" (Bukhari and Muslim)" },
        scene: { bg: "bedroom", time: "night", mo: [{ who: "ayah", pose: "hug-mo", x: 340 }], fx: ["hearts"] },
      },
      {
        text: { id: "Besok paginya, Baby Mo mendatangi Kak Adam. \"Kak… maaf. Aku yang menghilangkan bolamu. Dan aku bohong.\"", en: "The next morning, Baby Mo went to Kak Adam. \"Kak… I'm sorry. I lost your ball. And I lied.\"" },
        scene: { focus: 340, bg: "living", mo: [{ pose: "pose-05", x: 290 }, { who: "adam", pose: "disappointed-sigh", x: 420 }] },
      },
      {
        text: { id: "Kak Adam terdiam lama. Lalu ia berlutut. \"Aku kesal soal bolanya. Tapi aku senang kamu jujur. Ayo kita cari bareng!\"", en: "Kak Adam was quiet for a long time. Then he knelt down. \"I'm cross about the ball. But I'm glad you told the truth. Let's find it together!\"" },
        scene: { focus: 340, bg: "living", mo: [{ pose: "pose-40", x: 290 }, { who: "adam", pose: "kneel-talk", x: 420 }], fx: ["sparkle"] },
      },
      {
        text: { id: "Mereka merangkak di bawah semak, dengan Baby Ais dan kaca pembesarnya. Lalu… \"KETEMU! Di dalam pot bunga!\"", en: "They crawled under the bushes, with Baby Ais and her magnifying glass. Then… \"FOUND IT! In a flowerpot!\"" },
        scene: { focus: 330, bg: "garden", props: [{ k: "pot", x: 470 }, { k: "tennisball", x: 470, y: 330 }], mo: [{ who: "ais", pose: "magnifier-peek", x: 280 }, { pose: "yeyy", x: 390, move: "hop" }], fx: ["confetti"] },
      },
      {
        text: { id: "Kak Adam memantulkan bolanya sekali, lalu memberikannya pada Baby Mo. \"Boleh pinjam — asal izin dulu, ya.\"", en: "Kak Adam bounced the ball once, then handed it to Baby Mo. \"You can borrow it — just ask first, okay?\"" },
        scene: { focus: 340, bg: "garden", props: [{ k: "ballbounce", x: 350 }], mo: [{ pose: "pose-25", x: 290 }, { who: "adam", pose: "give-ball", x: 420 }], fx: ["hearts"] },
      },
      {
        text: { id: "Malam itu perut Baby Mo terasa ringan lagi. Pernahkah kamu merasa lega setelah berkata jujur? 🎾", en: "That night Baby Mo's tummy felt light again. Have you ever felt relieved after telling the truth? 🎾" },
        scene: { bg: "bedroom", time: "night", props: [{ k: "tennisball", x: 470 }], mo: [{ pose: "pose-39", x: 360 }], fx: ["stars", "zzz"] },
      },
    ],
  },

  /* ───────────────────────── Family 10. The family match ───────────────────────── */
  {
    slug: "pertandingan-keluarga",
    pose: "baby-mo-yeyy.png",
    published: "2026-11-10",
    title: { id: "Pertandingan Keluarga", en: "The Family Match" },
    hook: {
      id: "Abi dan Baby Mo melawan Kak Adam dan Baby Ais! Aturannya aneh-aneh, bolanya kadang balon — dan semua pulang sebagai juara.",
      en: "Abi and Baby Mo versus Kak Adam and Baby Ais! The rules are silly, the ball is sometimes a balloon — and everyone goes home a champion.",
    },
    anchor: { type: "hadith", slug: "main-bersama-anak" },
    takeaway: {
      id: "Bermain bersama tanpa memikirkan siapa yang menang adalah salah satu hadiah terbaik orang tua untuk anak — dan alasan untuk bersyukur.",
      en: "Playing together without caring who wins is one of the best gifts parents can give — and a reason to be thankful.",
    },
    tags: ["tenis", "keluarga", "bermain", "abi", "kak adam", "bersyukur"],
    cover: {
      focus: 350, bg: "court",
      props: [{ k: "balloon", x: 350, y: 220 }, { k: "trophy", x: 560 }],
      mo: [{ pose: "yeyy", x: 300, move: "hop" }, { who: "adam", pose: fh(1), seq: FOREHAND, fps: FPS, x: 420, move: "still" }, { who: "ais", pose: "tennis", x: 200 }],
      fx: ["confetti"],
    },
    pages: [
      {
        text: { id: "\"Hari ini kita adakan PERTANDINGAN KELUARGA!\" kata Abi lewat megafon mainan. Semua bersorak.", en: "\"Today we're holding THE FAMILY MATCH!\" announced Abi through a toy megaphone. Everyone cheered." },
        scene: { focus: 320, bg: "court", mo: [{ pose: "pose-02", x: 390, move: "hop" }, { who: "ayah", pose: "megaphone", x: 260 }], fx: ["confetti"] },
      },
      {
        text: { id: "Tim Matahari: Abi dan Baby Mo. Tim Bulan: Kak Adam dan Baby Ais. \"Siap?\" \"SIAP!\"", en: "Team Sun: Abi and Baby Mo. Team Moon: Kak Adam and Baby Ais. \"Ready?\" \"READY!\"" },
        scene: { focus: 340, bg: "court", props: [{ k: "sun", x: 250, y: 140 }, { k: "moon", x: 470, y: 140 }], mo: [{ who: "ais", pose: "cheer-fist", x: 300 }, { who: "adam", pose: "tennis-ready-wide", x: 430 }] },
      },
      {
        text: { id: "Aturan nomor satu, kata Abi: \"Yang paling kecil boleh memantul-mantulkan bola tiga kali sebelum memukul.\"", en: "Rule number one, said Abi: \"The littlest players may bounce the ball three times before hitting.\"" },
        scene: { focus: 330, bg: "court", props: [{ k: "ballbounce", x: 330 }], mo: [{ who: "ais", pose: "tennis", x: 260 }, { pose: "pose-29", x: 400 }] },
      },
      {
        text: { id: "Aturan nomor dua: \"Kalau ada yang jatuh, semua berhenti dan membantu dulu.\" Aturan nomor tiga: \"Dilarang cemberut!\"", en: "Rule two: \"If anyone falls, everybody stops and helps first.\" Rule three: \"No sulking allowed!\"" },
        scene: { focus: 320, bg: "court", mo: [{ pose: "pose-03", x: 390 }, { who: "ayah", pose: "clipboard-check", x: 260 }] },
      },
      {
        text: { id: "Kak Adam membuka dengan servis roket — tapi pelan sekali, khusus untuk adik-adik. Pluk!", en: "Kak Adam opened with a rocket serve — a super-slow one, just for the little ones. Plop!" },
        scene: { focus: 390, bg: "court", props: [{ k: "balltoss", x: 440, y: 240 }], mo: [{ who: "adam", pose: "tennis-serve-toss", x: 390, move: "still" }], fx: ["sparkle"] },
      },
      {
        text: { id: "Baby Mo memantulkan bolanya: satu… dua… tiga… lalu memukulnya dengan sekuat tenaga. Bolanya melambung ke… Abi!", en: "Baby Mo bounced the ball: one… two… three… then whacked it with all his might. It flew right at… Abi!" },
        scene: { focus: 320, bg: "court", props: [{ k: "ballfly", x: 400, y: 340, flip: true }], mo: [{ pose: "pose-25", x: 400 }, { who: "ayah", pose: "surprised-cheeks-sit", x: 260 }] },
      },
      {
        text: { id: "\"Satu poin untuk… eh, kita kan satu tim!\" Abi tertawa sampai terduduk di lapangan.", en: "\"A point to… hang on, we're on the same team!\" Abi laughed so hard he sat down on the court." },
        scene: { focus: 320, bg: "court", mo: [{ pose: "pose-03", x: 390 }, { who: "ayah", pose: "cheer-fists-sit", x: 260 }], fx: ["confetti"] },
      },
      {
        text: { id: "Lalu Baby Ais tersandung tali sepatunya. Brukk! Semua langsung berhenti — aturan nomor dua!", en: "Then Baby Ais tripped over her shoelace. Thump! Everyone stopped at once — rule number two!" },
        scene: { focus: 330, bg: "court", mo: [{ who: "ais", pose: "sad-tears", x: 330 }, { pose: "run", x: 440, move: "hop" }] },
      },
      {
        text: { id: "Kak Adam mengikat tali sepatunya. Baby Mo meniup lututnya. \"Sudah sembuh?\" Baby Ais tertawa. \"Sudah!\"", en: "Kak Adam tied her shoelace. Baby Mo blew on her knee. \"Better?\" Baby Ais giggled. \"Better!\"" },
        scene: { focus: 330, bg: "court", mo: [{ who: "ais", pose: "giggle", x: 280 }, { who: "adam", pose: "crouch-pat", x: 410 }], fx: ["hearts"] },
      },
      {
        text: { id: "Babak berikutnya pakai balon! Balonnya melayang pelan, dan semua sempat memukulnya. Puk… puk… puk!", en: "Next round: balloons! They floated slowly, so everyone got a hit. Pok… pok… pok!" },
        scene: { focus: 330, bg: "court", props: [{ k: "balloon", x: 330, y: 200 }, { k: "balloon", x: 470, y: 240 }], mo: [{ pose: "yeyy", x: 390, move: "hop" }, { who: "ais", pose: "jump-cheer", x: 270, move: "hop" }], fx: ["confetti"] },
      },
      {
        text: { id: "Pukulan terakhir: Kak Adam forehand, Abi backhand, Baby Mo dan Baby Ais berteriak, \"Masuuuk!\"", en: "Final shots: Kak Adam's forehand, Abi's backhand, and Baby Mo and Baby Ais yelling, \"It's iiin!\"" },
        scene: { focus: 390, bg: "court", time: "dusk", props: [{ k: "ballfly", x: 370, y: 330, d: FH_HIT }, { k: "swoosh", x: 345, y: 330, d: FH_TRAIL }], mo: [{ who: "adam", pose: fh(1), seq: FOREHAND, fps: FPS, x: 390, move: "still" }] },
      },
      {
        text: { id: "\"Jadi siapa pemenangnya?\" tanya Baby Mo. Abi mengangkat piala kecil. \"Pemenangnya… KELUARGA KITA!\"", en: "\"So who won?\" asked Baby Mo. Abi held up a little trophy. \"The winner is… OUR FAMILY!\"" },
        scene: { focus: 320, bg: "court", time: "dusk", props: [{ k: "trophy", x: 410, y: 300 }], mo: [{ pose: "wow", x: 400 }, { who: "ayah", pose: "cheer-fists-stand", x: 260 }], fx: ["confetti"] },
      },
      {
        text: { id: "Semua berpelukan di tengah lapangan, berkeringat dan tertawa. Matahari mulai terbenam berwarna jingga.", en: "Everyone hugged in the middle of the court, sweaty and laughing. The sun began to set, orange and gold." },
        scene: { focus: 380, bg: "court", time: "dusk", mo: [{ who: "ais", pose: "arms-open-welcome", x: 460 }, { who: "ayah", pose: "hug-mo", x: 300 }, { who: "adam", pose: "kneel-arms-open", x: 395 }], fx: ["hearts"] },
      },
      {
        text: { id: "Abi duduk dan berkata pelan, \"Alhamdulillah untuk badan yang sehat, untuk lapangan, dan untuk kalian bertiga.\"", en: "Abi sat down and said softly, \"Alhamdulillah for healthy bodies, for this court, and for the three of you.\"" },
        quote: { id: "\"Jika kamu bersyukur, niscaya Aku akan menambah (nikmat) kepadamu.\" (QS. Ibrahim: 7)", en: "\"If you are grateful, I will surely give you more.\" (Qur'an, Ibrahim 14:7)" },
        scene: { focus: 330, bg: "court", time: "dusk", mo: [{ pose: "thank-you", x: 400 }, { who: "ayah", pose: "grateful-heart-sit", x: 265 }], fx: ["sparkle"] },
      },
      {
        text: { id: "Di jalan pulang, Kak Adam menggandeng Baby Mo, Abi menggendong Baby Ais. \"Minggu depan pertandingan lagi?\" \"PASTI!\"", en: "On the way home, Kak Adam held Baby Mo's hand and Abi carried Baby Ais. \"Another match next week?\" \"DEFINITELY!\"" },
        scene: { focus: 300, bg: "street", time: "dusk", mo: [{ pose: "pose-42", x: 330 }, { who: "adam", pose: "hold-hand-down", x: 420 }, { who: "ayah", pose: "shoulders-ais", x: 225 }] },
      },
      {
        text: { id: "Permainan apa yang paling seru dimainkan bersama keluargamu? Ajak semua main hari ini — tanpa perlu ada yang kalah! 🏆", en: "What's the most fun game to play with your family? Get everyone playing today — no losers needed! 🏆" },
        scene: { bg: "court", time: "dusk", props: [{ k: "trophy", x: 480 }, { k: "balloon", x: 420, y: 230 }], mo: [{ pose: "yeyy", x: 360, move: "hop" }], fx: ["confetti"] },
      },
    ],
  },

  /* ───────────────────────── Forehand trilogy 1. A hundred a day ───────────────────────── */
  {
    slug: "seratus-forehand-sehari",
    pose: "baby-mo-pose-08.png",
    published: "2026-11-11",
    title: { id: "Seratus Forehand Sehari", en: "A Hundred Forehands a Day" },
    hook: {
      id: "Sekali masuk, Kak Adam kira forehand-nya sudah jago. Ternyata minggu depannya semua melenceng lagi! Abi punya tantangan: seratus forehand setiap hari.",
      en: "One good shot and Kak Adam thought he'd mastered the forehand. A week later everything went wrong again! Abi has a challenge: a hundred forehands every day.",
    },
    anchor: { type: "doa", slug: "doa-ketika-kesulitan" },
    takeaway: {
      id: "Bisa sekali beda dengan bisa setiap kali. Kemampuan sejati tumbuh dari latihan kecil yang diulang setiap hari — dan dari percaya bahwa setelah kesulitan ada kemudahan.",
      en: "Doing it once isn't doing it every time. Real skill grows from small practice repeated daily — and from trusting that ease comes after hardship.",
    },
    tags: ["tenis", "forehand", "kak adam", "latihan", "istiqamah", "sabar"],
    cover: {
      focus: 390, bg: "park",
      props: [{ k: "wall", x: 510, s: 0.8 }, { k: "ballrebound", x: 280, y: 330, d: FH_HIT }, { k: "swoosh", x: 265, y: 330, d: FH_TRAIL }],
      mo: [{ who: "adam", pose: fh(1), seq: FOREHAND, fps: FPS, x: 305, move: "still" }],
      fx: ["sparkle"],
    },
    pages: [
      {
        text: { id: "Minggu lalu forehand Kak Adam masuk sempurna. \"Aku sudah jago!\" katanya ke semua orang.", en: "Last week Kak Adam's forehand landed perfectly. \"I've mastered it!\" he told everyone." },
        scene: { focus: 390, bg: "court", mo: [{ who: "adam", pose: "proud-hands-hips", x: 390 }], fx: ["confetti"] },
      },
      {
        text: { id: "Tapi hari ini… bolanya ke net. Lalu keluar. Lalu ke net lagi. Lalu nyasar ke parkiran!", en: "But today… the ball went into the net. Then out. Then the net again. Then off into the car park!" },
        scene: { focus: 390, bg: "court", props: [{ k: "ballfly", x: 370, y: 330, s: 1.3, d: FH_HIT }, { k: "tennisnet", x: 560 }], mo: [{ who: "adam", pose: fh(1), seq: FOREHAND, fps: FPS, x: 390, move: "still" }] },
      },
      {
        text: { id: "\"Kok bisa begini?\" Kak Adam bingung. \"Kemarin bisa, hari ini nggak bisa!\"", en: "\"How did this happen?\" Kak Adam was puzzled. \"Yesterday I could, today I can't!\"" },
        scene: { focus: 390, bg: "court", props: [{ k: "tennisball", x: 480 }, { k: "tennisball", x: 530 }, { k: "tennisball", x: 300 }], mo: [{ who: "adam", pose: "tennis-oops-2", x: 390 }] },
      },
      {
        text: { id: "Abi tersenyum. \"Bisa sekali itu beda dengan bisa setiap kali, Kak. Yang setiap kali itu butuh latihan setiap hari.\"", en: "Abi smiled. \"Doing it once is different from doing it every time, Kak. Every time takes practice every day.\"" },
        scene: { focus: 350, bg: "court", mo: [{ who: "ayah", pose: "teach-point-kneel", x: 280 }, { who: "adam", pose: "tennis-hold-ball", x: 420 }], fx: ["sparkle"] },
      },
      {
        text: { id: "\"Tantangannya: seratus forehand ke tembok latihan, setiap hari. Bukan seratus yang masuk — seratus yang dicoba.\"", en: "\"Here's the challenge: a hundred forehands against the practice wall, every day. Not a hundred good ones — a hundred tries.\"" },
        scene: { focus: 400, bg: "park", props: [{ k: "wall", x: 520, s: 0.8 }], mo: [{ who: "ayah", pose: "idea-point-stand", x: 275 }, { who: "adam", pose: "tennis-ready-wide", x: 395 }] },
      },
      {
        text: { id: "Hari pertama. Duk… tak… duk… tak. Bola pergi ke tembok, lalu pulang lagi. Dari seratus, yang bagus cuma 23.", en: "Day one. Thock… tock… thock… tock. The ball went to the wall and came home again. Out of a hundred, only 23 were good." },
        scene: { focus: 390, bg: "park", props: [{ k: "wall", x: 510, s: 0.8 }, { k: "ballrebound", x: 280, y: 330, d: FH_HIT }], mo: [{ who: "adam", pose: fh(1), seq: FOREHAND, fps: FPS, x: 305, move: "still" }] },
      },
      {
        text: { id: "Baby Mo membuat papan grafik dari kardus. Setiap hari, satu batang. \"Biar kelihatan naiknya, Kak!\"", en: "Baby Mo made a chart out of cardboard. One bar for every day. \"So we can see it go up, Kak!\"" },
        scene: { focus: 390, bg: "living", props: [{ k: "progresschart", x: 450 }], mo: [{ pose: "pose-08", x: 330 }], fx: ["sparkle"] },
      },
      {
        text: { id: "Hari ketiga hujan deras. \"Yah, latihannya libur.\" Abi menggeleng. \"Latihan bayangan di depan cermin!\"", en: "Day three, it poured. \"Oh well, no practice.\" Abi shook his head. \"Shadow swings in front of the mirror!\"" },
        scene: { focus: 390, bg: "living", time: "rain", props: [{ k: "mirror", x: 520 }], mo: [{ who: "adam", pose: fh(1), seq: FOREHAND, fps: 4, ghost: true, x: 390, move: "still" }], fx: ["rain"] },
      },
      {
        text: { id: "Pelan… pelaaan sekali. Kak Adam melihat ayunannya sendiri di cermin, bagian demi bagian. \"Oh! Badanku nggak berputar!\"", en: "Slowly… veeery slowly. Kak Adam watched his own swing in the mirror, piece by piece. \"Oh! My body isn't turning!\"" },
        scene: { focus: 390, bg: "living", time: "rain", props: [{ k: "mirror", x: 530 }], mo: [{ who: "adam", pose: fh(2), seq: [fh(1), fh(2), fh(3), fh(3), fh(3), fh(2)], fps: 2, ghost: true, x: 390, move: "still" }], fx: ["sparkle"] },
      },
      {
        text: { id: "Hari kelima, tangannya pegal. \"Kamu memegang raket terlalu kencang,\" kata Abi. \"Pegang seperti memegang burung kecil — jangan sampai lepas, jangan sampai sakit.\"", en: "Day five, his hand ached. \"You're squeezing the racket too hard,\" said Abi. \"Hold it like a little bird — don't let it go, don't hurt it.\"" },
        scene: { focus: 350, bg: "park", props: [{ k: "bird", x: 300, y: 250 }], mo: [{ who: "ayah", pose: "kneel-present", x: 280 }, { who: "adam", pose: "tennis-hold-ball", x: 420 }] },
      },
      {
        text: { id: "Hari kesepuluh, Kak Adam bosan. \"Seratus terus. Capek. Bosan.\" Ia duduk di bangku dan cemberut.", en: "Day ten, Kak Adam was bored. \"A hundred again. Tired. Bored.\" He sat on the bench and sulked." },
        scene: { focus: 390, bg: "park", time: "dusk", mo: [{ who: "adam", pose: "tennis-rest-bench", x: 390 }] },
      },
      {
        text: { id: "Abi duduk di sampingnya. \"Kalau terasa susah, ingat janji Allah: bersama kesulitan ada kemudahan. Bukan setelah — bersama.\"", en: "Abi sat beside him. \"When it feels hard, remember Allah's promise: with hardship comes ease. Not after — with.\"" },
        quote: { id: "\"Maka sesungguhnya bersama kesulitan ada kemudahan. Sesungguhnya bersama kesulitan ada kemudahan.\" (QS. Al-Insyirah: 5–6)", en: "\"So surely with hardship comes ease. Surely with hardship comes ease.\" (Qur'an, Ash-Sharh 94:5–6)" },
        scene: { focus: 340, bg: "park", time: "dusk", mo: [{ who: "ayah", pose: "listen-sit-box", x: 280 }, { who: "adam", pose: "deep-breath-calm", x: 420 }], fx: ["sparkle"] },
      },
      {
        text: { id: "Kak Adam berdiri lagi. \"Bismillah. Seratus lagi.\" Si kembar menghitung keras-keras dari pinggir: \"…empat puluh satu! Empat puluh dua!\"", en: "Kak Adam stood up again. \"Bismillah. Another hundred.\" The twins counted out loud from the side: \"…forty-one! Forty-two!\"" },
        scene: { focus: 360, bg: "park", props: [{ k: "wall", x: 520, s: 0.8 }, { k: "ballrebound", x: 310, y: 330, d: FH_HIT }], mo: [{ who: "ais", pose: "cheer-fist", x: 250 }, { who: "adam", pose: fh(1), seq: FOREHAND, fps: FPS, x: 335, move: "still" }] },
      },
      {
        text: { id: "Batang-batang di grafik Baby Mo makin tinggi: 23… 41… 61… 88! Sampai Baby Mo harus menambah kardus di atasnya.", en: "The bars on Baby Mo's chart grew taller: 23… 41… 61… 88! Baby Mo had to tape on more cardboard at the top." },
        scene: { focus: 390, bg: "living", props: [{ k: "progresschart", x: 450, s: 1.1 }], mo: [{ pose: "yeyy", x: 325, move: "hop" }], fx: ["confetti"] },
      },
      {
        text: { id: "Hari kedua puluh satu. Duk-tak, duk-tak, duk-tak… Si kembar menghitung sampai suaranya serak: \"…sembilan puluh sembilan… SERATUS!\"", en: "Day twenty-one. Thock-tock, thock-tock, thock-tock… The twins counted till they were hoarse: \"…ninety-nine… A HUNDRED!\"" },
        scene: { focus: 390, bg: "park", time: "dusk", props: [{ k: "wall", x: 510, s: 0.8 }, { k: "ballrebound", x: 280, y: 330, d: FH_HIT }, { k: "swoosh", x: 265, y: 330, d: FH_TRAIL }], mo: [{ who: "adam", pose: fh(1), seq: FOREHAND, fps: FPS, x: 305, move: "still" }], fx: ["sparkle"] },
      },
      {
        text: { id: "Seratus forehand bagus, tanpa satu pun meleset! Kak Adam melompat sambil berteriak, \"Alhamdulillah!\" Kamu sedang melatih apa setiap hari? 💯", en: "A hundred good forehands, not one missed! Kak Adam leapt up shouting, \"Alhamdulillah!\" What are you practising every day? 💯" },
        scene: { focus: 360, bg: "park", time: "dusk", props: [{ k: "progresschart", x: 470 }], mo: [{ pose: "pose-02", x: 300, move: "hop" }, { who: "adam", pose: "tennis-celebrate-1", seq: CELEBRATE, fps: 8, move: "still", x: 390 }], fx: ["confetti"] },
      },
    ],
  },

  /* ───────────────────────── Forehand trilogy 2. Lazy feet ───────────────────────── */
  {
    slug: "kaki-kak-adam-yang-malas",
    pose: "baby-mo-pose-30.png",
    published: "2026-11-11",
    title: { id: "Kaki Kak Adam yang Malas", en: "Kak Adam's Lazy Feet" },
    hook: {
      id: "Ke tembok, forehand Kak Adam sudah sempurna. Tapi waktu reli dengan Abi, ia selalu terlambat. Ternyata masalahnya bukan di tangan… tapi di kaki!",
      en: "Against the wall, Kak Adam's forehand is perfect. But rallying with Abi, he's always late. The problem isn't his hands… it's his feet!",
    },
    anchor: { type: "parenting", slug: "bonding-orangtua" },
    takeaway: {
      id: "Hal kecil yang tak terlihat — seperti langkah kaki — sering jadi kunci. Kerjakan sesuatu dengan sungguh-sungguh sampai ke bagian yang paling kecil.",
      en: "Small, unseen things — like footsteps — are often the key. Do things properly, right down to the smallest part.",
    },
    tags: ["tenis", "forehand", "langkah kaki", "kak adam", "sungguh-sungguh", "abi"],
    cover: {
      focus: 380, bg: "court",
      props: [{ k: "ladder", x: 400 }, { k: "footprints", x: 330, y: 432 }, { k: "ballrally", x: 440, y: 350 }],
      mo: [{ who: "adam", pose: "tennis-lunge-low", x: 380 }],
      fx: ["sparkle"],
    },
    pages: [
      {
        text: { id: "Sekarang forehand Kak Adam ke tembok sudah seratus kali sempurna. \"Ayo reli, Abi!\"", en: "Now Kak Adam could hit a hundred perfect forehands against the wall. \"Let's rally, Abi!\"" },
        scene: { focus: 390, bg: "court", props: [{ k: "ballfly", x: 370, y: 330, d: FH_HIT }], mo: [{ who: "adam", pose: fh(1), seq: FOREHAND, fps: FPS, x: 390, move: "still" }] },
      },
      {
        text: { id: "Tapi bola dari Abi tidak seperti bola dari tembok. Kadang pendek, kadang jauh, kadang ke samping.", en: "But Abi's balls weren't like the wall's. Sometimes short, sometimes deep, sometimes off to the side." },
        scene: { focus: 390, bg: "court", props: [{ k: "ballfly", x: 640, y: 330, flip: true }, { k: "ballbounce", x: 300, d: 0.4 }], mo: [{ who: "adam", pose: "tennis-ready-wide", x: 400 }] },
      },
      {
        text: { id: "Kak Adam selalu terlambat. Bolanya sudah lewat waktu raketnya baru berayun. Wusss… luput!", en: "Kak Adam was always late. The ball had already passed by the time his racket swung. Whoosh… missed!" },
        scene: { focus: 390, bg: "court", props: [{ k: "ballfly", x: 460, y: 330, d: 0 }], mo: [{ who: "adam", pose: "tennis-oops-1", x: 380 }] },
      },
      {
        text: { id: "\"Tanganku sudah benar, kok tetap luput?\" keluh Kak Adam sambil menendang bola pelan.", en: "\"My arm's doing it right, so why do I keep missing?\" moaned Kak Adam, nudging a ball with his foot." },
        scene: { focus: 390, bg: "court", props: [{ k: "tennisball", x: 470 }], mo: [{ who: "adam", pose: "frustrated-stomp", x: 390 }] },
      },
      {
        text: { id: "Abi merekam latihan berikutnya dengan ponsel. Lalu mereka menonton bersama, pelan-pelan.", en: "Abi filmed the next practice on his phone. Then they watched it together, slowly." },
        scene: { focus: 330, bg: "court", props: [{ k: "phone", x: 420, y: 330 }], mo: [{ who: "ayah", pose: "phone-call", x: 270 }, { who: "ais", pose: "video-play", x: 400 }] },
      },
      {
        text: { id: "\"Lihat kakimu,\" kata Abi. Di video, kaki Kak Adam diam saja seperti pohon. Hanya tangannya yang bergerak!", en: "\"Look at your feet,\" said Abi. In the video, Kak Adam's feet stayed still like a tree. Only his arm moved!" },
        scene: { focus: 390, bg: "court", props: [{ k: "tree", x: 520, s: 0.7 }], mo: [{ who: "adam", pose: fh(3), seq: [fh(1), fh(2), fh(3), fh(4), fh(5), fh(6)], fps: 3, ghost: true, x: 390, move: "still" }] },
      },
      {
        text: { id: "\"Kakiku malas!\" seru Kak Adam. Si kembar tertawa. \"Kaki malas! Kaki malas!\"", en: "\"My feet are lazy!\" cried Kak Adam. The twins giggled. \"Lazy feet! Lazy feet!\"" },
        scene: { focus: 330, bg: "court", mo: [{ pose: "pose-03", x: 390 }, { who: "ais", pose: "giggle", x: 280 }], fx: ["sparkle"] },
      },
      {
        text: { id: "Rahasia pertama: lompat kecil setiap kali Abi memukul — namanya split step. Hop! Kaki siap ke mana saja.", en: "Secret one: a little hop every time Abi hits — it's called a split step. Hop! Feet ready to go anywhere." },
        scene: { focus: 390, bg: "court", mo: [{ who: "adam", pose: "tennis-ready-wide", x: 390, move: "hop" }], fx: ["sparkle"] },
      },
      {
        text: { id: "Rahasia kedua: langkah semut. Banyak langkah kecil-kecil untuk mendekati bola, bukan satu langkah raksasa.", en: "Secret two: ant steps. Lots of tiny steps to reach the ball, not one giant stride." },
        scene: { focus: 390, bg: "court", props: [{ k: "footprints", x: 390, y: 436 }, { k: "ants", x: 520 }], mo: [{ who: "adam", pose: "tennis-shuffle-1", seq: SHUFFLE, fps: 8, move: "still", x: 390 }] },
      },
      {
        text: { id: "Abi membentangkan tangga latihan di lapangan. Tap-tap-tap-tap! Kak Adam melangkah cepat di setiap kotaknya.", en: "Abi laid an agility ladder on the court. Tap-tap-tap-tap! Kak Adam stepped quickly into every square." },
        scene: { focus: 400, bg: "court", props: [{ k: "ladder", x: 420 }, { k: "footprints", x: 420, y: 436 }], mo: [{ who: "adam", pose: "tennis-run-1", seq: RUN, fps: 10, move: "still", x: 400 }] },
      },
      {
        text: { id: "Si kembar ikut melompat di tangga, sambil bernyanyi: \"Kaki semut, kaki semut, cepat-cepat jangan diam!\"", en: "The twins hopped along the ladder too, singing: \"Ant feet, ant feet, quick quick, don't stand still!\"" },
        scene: { focus: 340, bg: "court", props: [{ k: "ladder", x: 340 }], mo: [{ pose: "pose-30", x: 390, move: "hop" }, { who: "ais", pose: "jump-joy", x: 280, move: "hop" }], fx: ["notes"] },
      },
      {
        text: { id: "Rahasia ketiga: sampai duluan, berhenti, baru memukul. \"Kaki yang sampai duluan membuat tangan punya waktu.\"", en: "Secret three: get there first, stop, then hit. \"Feet that arrive early give your arm time.\"" },
        scene: { focus: 350, bg: "court", props: [{ k: "target", x: 430 }], mo: [{ who: "ayah", pose: "teach-point-kneel", x: 280 }, { who: "adam", pose: "tennis-ready-wide", x: 430 }] },
      },
      {
        text: { id: "Reli dimulai lagi. Hop — langkah semut — berhenti — DUK! Bola pulang ke Abi. Hop — semut — berhenti — DUK!", en: "The rally began again. Hop — ant steps — stop — THOCK! Back to Abi. Hop — ants — stop — THOCK!" },
        scene: { focus: 400, bg: "court", props: [{ k: "ballrally", x: 365, y: 320, d: FH_HIT }, { k: "footprints", x: 380, y: 436 }], mo: [{ who: "adam", pose: fh(1), seq: FOREHAND, fps: FPS, x: 390, move: "still" }] },
      },
      {
        text: { id: "Baby Mo menghitung: \"Lima… sepuluh… lima belas… DUA PULUH pukulan tanpa jatuh!\" Rekor baru!", en: "Baby Mo counted: \"Five… ten… fifteen… TWENTY shots without a miss!\" A new record!" },
        scene: { focus: 340, bg: "court", props: [{ k: "ballrally", x: 300, y: 330 }], mo: [{ pose: "yeyy", x: 300, move: "hop" }, { who: "adam", pose: "tennis-celebrate-1", seq: CELEBRATE, fps: 8, move: "still", x: 430 }], fx: ["confetti"] },
      },
      {
        text: { id: "\"Ternyata rahasianya di bagian yang nggak kelihatan,\" kata Kak Adam. Abi mengangguk. \"Allah suka orang yang mengerjakan sesuatu dengan sungguh-sungguh — sampai ke kakinya.\"", en: "\"So the secret was in the part you can't see,\" said Kak Adam. Abi nodded. \"Allah loves people who do things properly — right down to their feet.\"" },
        quote: { id: "\"Sesungguhnya Allah mencintai seseorang yang apabila bekerja, ia mengerjakannya dengan sungguh-sungguh (itqan).\" (HR. Thabrani)", en: "\"Allah loves that when one of you does a job, he does it with excellence (itqan).\" (Tabarani)" },
        scene: { focus: 340, bg: "court", time: "dusk", props: [{ k: "footprints", x: 430, y: 436 }], mo: [{ who: "ayah", pose: "thumbs-up-kneel", x: 280 }, { who: "adam", pose: "tennis-hold-ball", x: 420 }], fx: ["sparkle"] },
      },
      {
        text: { id: "Malam itu Baby Mo melompat-lompat di lantai kamar: hop, semut, berhenti! Coba kamu juga — bisakah kakimu jadi kaki semut? 🐜", en: "That night Baby Mo hopped round his bedroom floor: hop, ants, stop! You try too — can your feet be ant feet? 🐜" },
        scene: { bg: "bedroom", time: "night", props: [{ k: "footprints", x: 380, y: 432 }], mo: [{ pose: "pose-02", x: 360, move: "hop" }], fx: ["stars"] },
      },
    ],
  },

  /* ───────────────────────── Forehand trilogy 3. The rematch ───────────────────────── */
  {
    slug: "forehand-melawan-raka",
    pose: "baby-mo-pose-25.png",
    published: "2026-11-11",
    title: { id: "Forehand Melawan Raka", en: "The Forehand Rematch" },
    hook: {
      id: "Sebulan latihan: seratus forehand sehari dan kaki semut. Hari ini Kak Adam bertanding lagi melawan Raka. Apakah semua latihannya cukup?",
      en: "A month of practice: a hundred forehands a day and ant feet. Today Kak Adam faces Raka again. Will all that practice be enough?",
    },
    anchor: { type: "doa", slug: "doa-hasbunallah" },
    takeaway: {
      id: "Berusaha sekuat tenaga, lalu bertawakal kepada Allah. Kemenangan disyukuri dengan rendah hati, karena latihan dan pertolongan-Nya.",
      en: "Try your very hardest, then trust Allah. Welcome a win humbly — it came from practice and from His help.",
    },
    tags: ["tenis", "forehand", "pertandingan", "tawakal", "kak adam", "rendah hati"],
    cover: {
      focus: 390, bg: "court",
      props: [{ k: "ballfly", x: 370, y: 330, s: 1.2, d: FH_HIT }, { k: "swoosh", x: 345, y: 330, d: FH_TRAIL }, { k: "trophy", x: 580 }],
      mo: [{ who: "adam", pose: fh(1), seq: FOREHAND, fps: FPS, ghost: true, x: 390, move: "still" }],
      fx: ["sparkle"],
    },
    pages: [
      {
        text: { id: "Sebulan berlalu. Grafik Baby Mo penuh. Tangga latihan sudah usang. Dan hari ini, turnamen tiba lagi.", en: "A month went by. Baby Mo's chart was full. The agility ladder was worn out. And today, the tournament was back." },
        scene: { focus: 360, bg: "court", props: [{ k: "progresschart", x: 450 }, { k: "ladder", x: 330 }], mo: [{ who: "adam", pose: "tennis-hold-ball", x: 340 }], fx: ["sparkle"] },
      },
      {
        text: { id: "Di papan tertulis: Adam lawan Raka. Lagi! Perut Kak Adam langsung terasa seperti ada kupu-kupu.", en: "The board said: Adam vs Raka. Again! Butterflies started fluttering in Kak Adam's tummy." },
        scene: { focus: 390, bg: "court", props: [{ k: "butterfly", x: 440, y: 260 }, { k: "butterfly", x: 480, y: 220 }, { k: "butterfly", x: 350, y: 240 }], mo: [{ who: "adam", pose: "surprised-hands-up", x: 390 }] },
      },
      {
        text: { id: "\"Abi, gimana kalau aku kalah lagi?\" Abi berlutut. \"Kamu sudah berusaha sekuat tenaga. Sekarang serahkan sisanya kepada Allah.\"", en: "\"Abi, what if I lose again?\" Abi knelt down. \"You've tried your very hardest. Now leave the rest to Allah.\"" },
        scene: { focus: 340, bg: "court", mo: [{ who: "ayah", pose: "teach-point-kneel", x: 280 }, { who: "adam", pose: "worried-bite-lip", x: 420 }] },
      },
      {
        text: { id: "Mereka berdoa bersama: \"Hasbunallah wa ni'mal wakiil.\" Cukuplah Allah bagi kami. Kupu-kupunya terbang pelan-pelan.", en: "They prayed together: \"Hasbunallah wa ni'mal wakeel.\" Allah is enough for us. The butterflies slowly flew away." },
        quote: { id: "\"Hasbunallah wa ni'mal wakiil.\" — Cukuplah Allah bagi kami, dan Dia sebaik-baik pelindung. (QS. Ali 'Imran: 173)", en: "\"Hasbunallah wa ni'mal wakeel.\" — Allah is sufficient for us, and He is the best guardian. (Qur'an, Ali 'Imran 3:173)" },
        scene: { focus: 340, bg: "court", props: [{ k: "butterfly", x: 520, y: 180 }], mo: [{ who: "ayah", pose: "dua-kneel", x: 280 }, { who: "adam", pose: "dua-hands", x: 420 }], fx: ["sparkle"] },
      },
      {
        text: { id: "Pertandingan dimulai. Raka memukul bola cepat ke sisi forehand Kak Adam. Dulu, bola seperti ini selalu membuatnya luput.", en: "The match began. Raka hit a fast ball to Kak Adam's forehand side. Before, balls like this always beat him." },
        scene: { focus: 400, bg: "court", props: [{ k: "ballfly", x: 650, y: 320, flip: true, s: 1.1 }], mo: [{ who: "adam", pose: "tennis-ready-wide", x: 400 }] },
      },
      {
        text: { id: "Tapi sekarang: hop — langkah semut — berhenti. Lihat bola. Putar badan. Ayun… peluk bahu. DUK!", en: "But now: hop — ant steps — stop. Watch the ball. Turn. Swing… hug your shoulder. THOCK!" },
        scene: { focus: 400, bg: "court", props: [{ k: "footprints", x: 380, y: 436 }, { k: "ballfly", x: 370, y: 330, d: FH_HIT }, { k: "swoosh", x: 345, y: 330, d: FH_TRAIL }], mo: [{ who: "adam", pose: fh(1), seq: FOREHAND, fps: FPS, x: 390, move: "still" }] },
      },
      {
        text: { id: "Bola pulang dengan keras. Raka mengembalikannya. Kak Adam mengembalikannya lagi. Reli panjang dimulai!", en: "The ball flew back hard. Raka returned it. Kak Adam returned it again. A long rally began!" },
        scene: { focus: 400, bg: "court", props: [{ k: "ballrally", x: 365, y: 320 }], mo: [{ who: "adam", pose: fh(1), seq: FOREHAND, fps: FPS, x: 390, move: "still" }] },
      },
      {
        text: { id: "Di bangku penonton, Baby Mo menghitung: \"Sembilan… sepuluh… sebelas…\" Baby Ais menutup matanya dengan tangan.", en: "In the stands, Baby Mo counted: \"Nine… ten… eleven…\" Baby Ais covered her eyes with her hands." },
        scene: { focus: 330, bg: "court", props: [{ k: "bench", x: 330 }, { k: "ballrally", x: 120, y: 280 }], mo: [{ pose: "idea", x: 390 }, { who: "ais", pose: "peek-wall", x: 280 }] },
      },
      {
        text: { id: "Skornya 3–3. Satu poin lagi menentukan pemenang. Lapangan jadi hening sekali.", en: "Three all. One more point would decide it. The court went very quiet." },
        scene: { focus: 390, bg: "court", time: "dusk", props: [{ k: "tennisball", x: 470 }], mo: [{ who: "adam", pose: "tennis-ready-wide", x: 390, move: "still" }] },
      },
      {
        text: { id: "Raka memukul bola tinggi ke sudut. Kak Adam berlari dengan langkah semut — tap-tap-tap-tap — dan sampai duluan.", en: "Raka hit a high ball into the corner. Kak Adam ran with ant steps — tap-tap-tap-tap — and got there first." },
        scene: { focus: 390, bg: "court", time: "dusk", props: [{ k: "footprints", x: 330, y: 436 }, { k: "ballfly", x: 640, y: 300, flip: true }], mo: [{ who: "adam", pose: "tennis-run-1", seq: RUN, fps: 10, move: "still", x: 390 }] },
      },
      {
        text: { id: "Lalu semuanya terasa melambat. Lihat bola… putar badan… ayun dari bawah ke atas…", en: "Then everything seemed to slow down. Watch the ball… turn… swing from low to high…" },
        scene: { focus: 390, bg: "court", time: "dusk", mo: [{ who: "adam", pose: fh(3), seq: [fh(1), fh(2), fh(3), fh(4), fh(5), fh(6), fh(6), fh(6)], fps: 2.5, ghost: true, x: 390, move: "still" }], fx: ["sparkle"] },
      },
      {
        text: { id: "DUK! Bolanya melesat lurus menyusuri garis, melewati Raka… dan jatuh tepat di dalam garis. MASUK!", en: "THOCK! The ball shot straight down the line, past Raka… and landed right inside. IN!" },
        scene: { focus: 390, bg: "court", time: "dusk", props: [{ k: "ballfly", x: 455, y: 360, s: 1.3 }, { k: "swoosh", x: 440, y: 320, d: -0.6 }, { k: "target", x: 640 }], mo: [{ who: "adam", pose: "tennis-hit-forehand", x: 390, move: "still" }], fx: ["shootingstar"] },
      },
      {
        text: { id: "\"KAK ADAM MENANG!\" Si kembar melompat dari bangku. Abi mengangkat kedua tangannya tinggi-tinggi.", en: "\"KAK ADAM WON!\" The twins leapt off the bench. Abi threw both arms high in the air." },
        scene: { focus: 330, bg: "court", time: "dusk", mo: [{ pose: "yeyy", x: 390, move: "hop" }, { who: "ayah", pose: "cheer-fists-stand", x: 270 }, { who: "ais", pose: "jump-cheer", x: 490, move: "hop" }], fx: ["confetti"] },
      },
      {
        text: { id: "Kak Adam tidak menyombong. Ia berjalan ke net dan mengulurkan tangan. \"Barakallah, Raka. Reli kita tadi seru sekali!\"", en: "Kak Adam didn't show off. He walked to the net and held out his hand. \"Barakallah, Raka. That rally was amazing!\"" },
        scene: { focus: 400, bg: "court", time: "dusk", props: [{ k: "tennisnet", x: 520 }], mo: [{ who: "adam", pose: "handshake-offer", x: 400 }], fx: ["hearts"] },
      },
      {
        text: { id: "Waktu menerima piala, Kak Adam berbisik, \"Alhamdulillah. Ini dari latihan setiap hari… dan pertolongan Allah.\"", en: "Receiving the trophy, Kak Adam whispered, \"Alhamdulillah. This came from practising every day… and from Allah's help.\"" },
        scene: { focus: 390, bg: "court", time: "dusk", mo: [{ who: "adam", pose: "hold-trophy", x: 390 }], fx: ["sparkle"] },
      },
      {
        text: { id: "Besok paginya, ada dua raket di depan tembok latihan: satu besar, satu kecil. \"Mo, mau Kakak ajari forehand?\" Kamu mau belajar apa sampai jago? 🎾", en: "The next morning there were two rackets by the practice wall: one big, one small. \"Mo, shall I teach you the forehand?\" What do you want to practise until you're great? 🎾" },
        scene: { focus: 370, bg: "park", props: [{ k: "wall", x: 520, s: 0.8 }], mo: [{ pose: "pose-25", x: 300 }, { who: "adam", pose: "tennis-wave-2", seq: WAVE, fps: 4, move: "still", x: 405 }], fx: ["sparkle"] },
      },
    ],
  },
];
