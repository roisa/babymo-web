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
const fh = (i: number) => `tennis-fh-${i}`;
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
/** serve: contact is frame 5 (index 4) → HIT, like the backhand */
const SERVE = loop(six("tennis-serve"));
const OOPS = [...six("tennis-oops"), "tennis-oops-6", "tennis-oops-6"];
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
        scene: { focus: 330, bg: "kitchen", props: [{ k: "flour", x: 480, y: 330 }], mo: [{ who: "umi", pose: "wave", x: 270 }, { pose: "pose-26", x: 390 }] },
      },
      {
        text: { id: "\"KEJUTAAAN!\" Mereka memberikan kue miring dan kartunya. Umi memandang kue itu… lalu tertawa sambil menangis bahagia.", en: "\"SURPRIIISE!\" They handed over the lopsided cake and the card. Umi looked at it… then laughed and cried happy tears." },
        scene: { focus: 330, bg: "living", props: [{ k: "card", x: 440, y: 330 }, { k: "heart", x: 440, y: 230, s: 0.6 }], mo: [{ who: "umi", pose: "touched-cheek", x: 260 }, { pose: "yeyy", x: 370, move: "hop" }], fx: ["confetti", "hearts"] },
      },
      {
        text: { id: "\"Ini kue paling enak sedunia,\" kata Umi, sambil memakan bagian yang tidak gosong. \"Karena isinya cinta.\"", en: "\"This is the best cake in the world,\" said Umi, eating the un-burnt bits. \"Because it's full of love.\"" },
        scene: { focus: 330, bg: "living", props: [{ k: "cookies", x: 340 }], mo: [{ who: "umi", pose: "kneel-smile", x: 260 }, { pose: "pose-07", x: 410 }], fx: ["hearts"] },
      },
      {
        text: { id: "Apa yang bisa kamu buat untuk Umi hari ini? Ingat — tidak perlu sempurna, yang penting penuh cinta! 🎂", en: "What could you make for your mum today? Remember — it doesn't need to be perfect, just full of love! 🎂" },
        scene: { bg: "kitchen", props: [{ k: "heart", x: 450, y: 230, s: 0.6 }], mo: [{ who: "umi", pose: "hug-mo", x: 340 }], fx: ["hearts", "sparkle"] },
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

  /* ───────────────────────── Tennis life 1. Love means zero ───────────────────────── */
  {
    slug: "love-itu-artinya-nol",
    pose: "baby-mo-pose-33.png",
    published: "2026-11-12",
    title: { id: "Love Itu Artinya Nol", en: "Love Means Zero" },
    hook: {
      id: "Di tenis, skor nol disebut \"love\", lalu loncat ke 15, 30, 40! Kak Adam mengajari keluarganya cara menghitung skor tenis yang aneh tapi seru.",
      en: "In tennis, zero is called \"love\", and then it jumps to 15, 30, 40! Kak Adam teaches his family tennis's strange but fun way of keeping score.",
    },
    anchor: { type: "parenting", slug: "adab-sehari-hari" },
    takeaway: {
      id: "Belajar aturan permainan bersama membuat anak lebih sabar dan sportif. Skor boleh nol — tapi bermain dengan cinta tidak pernah nol.",
      en: "Learning a game's rules together makes children more patient and sporting. The score can be zero — but playing with love never is.",
    },
    tags: ["tenis", "skor", "berhitung", "kak adam", "keluarga", "sportif"],
    cover: {
      focus: 360, bg: "court",
      props: [{ k: "scoreboard", x: 560 }, { k: "ballfly", x: 370, y: 330, d: FH_HIT }],
      mo: [{ who: "adam", pose: fh(1), seq: FOREHAND, fps: FPS, x: 390, move: "still" }, { pose: "pose-33", x: 270 }],
    },
    pages: [
      {
        text: { id: "Sejak menang melawan Raka, Kak Adam ingin main pertandingan sungguhan. \"Tapi Kak, menghitung skornya gimana?\" tanya Baby Mo.", en: "Ever since beating Raka, Kak Adam wanted to play real matches. \"But Kak, how do you count the score?\" asked Baby Mo." },
        scene: { focus: 330, bg: "living", props: [{ k: "racket", x: 470 }], mo: [{ pose: "pose-33", x: 290 }, { who: "adam", pose: "proud-hands-hips", x: 400 }] },
      },
      {
        text: { id: "\"Gampang!\" kata Kak Adam. \"Kalau belum dapat poin, skornya NOL. Tapi di tenis, nol namanya… LOVE!\"", en: "\"Easy!\" said Kak Adam. \"If you haven't won a point, your score is ZERO. But in tennis, zero is called… LOVE!\"" },
        scene: { focus: 340, bg: "living", props: [{ k: "heart", x: 460, y: 220, s: 0.8 }], mo: [{ pose: "pose-26", x: 280 }, { who: "adam", pose: "kneel-talk", x: 420 }], fx: ["hearts"] },
      },
      {
        text: { id: "\"Love? Cinta?\" Baby Ais tertawa sampai terguling. \"Jadi kalau kalah, kita dapat cinta?\"", en: "\"Love? Like hearts?\" Baby Ais laughed so hard she rolled over. \"So when we lose, we get love?\"" },
        scene: { focus: 330, bg: "living", mo: [{ who: "ais", pose: "giggle", x: 280 }, { pose: "pose-03", x: 390 }], fx: ["hearts"] },
      },
      {
        text: { id: "Lalu Kak Adam membuat papan skor dari kardus. \"Poin pertama bukan satu, tapi LIMA BELAS. Lalu TIGA PULUH. Lalu EMPAT PULUH!\"", en: "Then Kak Adam made a scoreboard out of cardboard. \"The first point isn't one, it's FIFTEEN. Then THIRTY. Then FORTY!\"" },
        scene: { focus: 370, bg: "living", props: [{ k: "scoreboard", x: 425, s: 0.85 }], mo: [{ who: "adam", pose: "kneel-talk", x: 300 }] },
      },
      {
        text: { id: "\"Kenapa loncat-loncat begitu?\" tanya Baby Mo. Abi tersenyum. \"Konon dulu skornya dihitung pakai jam: seperempat, setengah, tiga perempat…\"", en: "\"Why does it jump like that?\" asked Baby Mo. Abi smiled. \"They say long ago the score was kept on a clock: a quarter, a half, three quarters…\"" },
        scene: { focus: 330, bg: "living", props: [{ k: "clock", x: 470, y: 220, s: 1.2 }], mo: [{ pose: "pose-33", x: 390 }, { who: "ayah", pose: "teach-point-kneel", x: 265 }] },
      },
      {
        text: { id: "\"Dan kalau sudah 40 lalu menang satu poin lagi — GAME! Satu babak selesai!\"", en: "\"And when you're at 40 and win one more point — GAME! One game is done!\"" },
        scene: { focus: 370, bg: "living", props: [{ k: "scoreboard", x: 425, s: 0.85 }], mo: [{ who: "adam", pose: "clap-cheer", x: 305 }], fx: ["confetti"] },
      },
      {
        text: { id: "Mereka ke lapangan untuk mencoba. Kak Adam melawan Abi. Baby Mo dan Baby Ais jadi wasit dengan suara keras.", en: "They went to the court to try it out. Kak Adam against Abi. Baby Mo and Baby Ais were the umpires, with very loud voices." },
        scene: { focus: 330, bg: "court", props: [{ k: "bench", x: 280 }, { k: "whistle", x: 470, y: 250 }], mo: [{ who: "ais", pose: "megaphone", x: 260 }, { pose: "pose-25", x: 390 }] },
      },
      {
        text: { id: "Kak Adam servis. CTAK! Abi tidak sempat memukul. \"LIMA BELAS – LOVE!\" teriak Baby Ais.", en: "Kak Adam served. CRACK! Abi couldn't reach it. \"FIFTEEN – LOVE!\" shouted Baby Ais." },
        scene: { focus: 400, bg: "court", props: [{ k: "ballfly", x: 420, y: 165, d: HIT }], mo: [{ who: "adam", pose: "tennis-serve-1", seq: SERVE, fps: FPS, x: 390, move: "still" }] },
      },
      {
        text: { id: "Reli panjang… DUK! Forehand Kak Adam masuk. \"TIGA PULUH – LOVE!\" Baby Mo bertepuk sampai tangannya merah.", en: "A long rally… THOCK! Kak Adam's forehand landed in. \"THIRTY – LOVE!\" Baby Mo clapped until his hands went red." },
        scene: { focus: 390, bg: "court", props: [{ k: "ballfly", x: 370, y: 330, d: FH_HIT }, { k: "swoosh", x: 345, y: 330, d: FH_TRAIL }], mo: [{ who: "adam", pose: fh(1), seq: FOREHAND, fps: FPS, x: 390, move: "still" }] },
      },
      {
        text: { id: "Lalu Abi memukul bola tinggi. Kak Adam meleset! \"Tiga puluh – LIMA BELAS,\" kata Baby Ais. \"Abi dapat poin!\"", en: "Then Abi hit a high ball. Kak Adam missed! \"Thirty – FIFTEEN,\" said Baby Ais. \"Abi gets a point!\"" },
        scene: { focus: 390, bg: "court", mo: [{ who: "adam", pose: "tennis-oops-1", seq: OOPS, fps: 5, x: 390, move: "still" }] },
      },
      {
        text: { id: "Poin demi poin. 40 – 30. Lalu 40 – 40! \"Kalau sama-sama 40, namanya DEUCE,\" kata Kak Adam. \"Harus menang dua poin berturut-turut!\"", en: "Point by point. 40 – 30. Then 40 – 40! \"When it's 40 all, it's called DEUCE,\" said Kak Adam. \"You have to win two points in a row!\"" },
        scene: { focus: 370, bg: "court", props: [{ k: "scoreboardfixed", x: 425, s: 0.85 }], mo: [{ who: "adam", pose: "worried-bite-lip", x: 305 }] },
      },
      {
        text: { id: "Deuce… Adam unggul… deuce lagi… Abi unggul… DEUCE LAGI! Si kembar sampai bingung menghitung.", en: "Deuce… advantage Adam… deuce again… advantage Abi… DEUCE AGAIN! The twins got all muddled counting." },
        scene: { focus: 330, bg: "court", props: [{ k: "ballrally", x: 365, y: 320 }], mo: [{ who: "ais", pose: "shrug", x: 280 }, { pose: "pose-34", x: 390 }] },
      },
      {
        text: { id: "Akhirnya Kak Adam menang dua poin berturut-turut. \"GAME, KAK ADAM!\" Semua bersorak — Abi juga.", en: "At last Kak Adam won two points in a row. \"GAME, KAK ADAM!\" Everyone cheered — Abi too." },
        scene: { focus: 390, bg: "court", time: "dusk", mo: [{ who: "adam", pose: "tennis-celebrate-1", seq: CELEBRATE, fps: 8, x: 390, move: "still" }], fx: ["confetti"] },
      },
      {
        text: { id: "Abi menyalami Kak Adam. \"Abi kalah, tapi senang. Abi ingin kamu menang juga.\"", en: "Abi shook Kak Adam's hand. \"I lost, but I'm happy. I wanted you to win too.\"" },
        quote: { id: "\"Tidaklah sempurna iman salah seorang dari kalian hingga ia mencintai untuk saudaranya apa yang ia cintai untuk dirinya sendiri.\" (HR. Bukhari dan Muslim)", en: "\"None of you truly believes until he loves for his brother what he loves for himself.\" (Bukhari and Muslim)" },
        scene: { focus: 340, bg: "court", time: "dusk", mo: [{ who: "ayah", pose: "thumbs-up-stand", x: 280 }, { who: "adam", pose: "handshake-offer", x: 420 }], fx: ["hearts"] },
      },
      {
        text: { id: "\"Jadi love itu nol,\" kata Baby Mo pelan. \"Tapi kalau main bareng keluarga, love-nya banyak sekali.\"", en: "\"So love means zero,\" Baby Mo said slowly. \"But when you play with your family, there's lots and lots of love.\"" },
        scene: { focus: 330, bg: "court", time: "dusk", props: [{ k: "heart", x: 340, y: 220, s: 0.8 }], mo: [{ pose: "pose-07", x: 390 }, { who: "ais", pose: "heart-hands", x: 275 }], fx: ["hearts"] },
      },
      {
        text: { id: "Coba hitung skor tenis bersama Abi atau Umi: love, 15, 30, 40… GAME! Kamu ingat semua, kan? 🎾", en: "Try counting a tennis score with Abi or Umi: love, 15, 30, 40… GAME! Can you remember them all? 🎾" },
        scene: { focus: 370, bg: "living", time: "night", props: [{ k: "scoreboard", x: 425, s: 0.85 }], mo: [{ pose: "idea", x: 310 }], fx: ["stars"] },
      },
    ],
  },

  /* ───────────────────────── Tennis life 2. The ball kid ───────────────────────── */
  {
    slug: "penjaga-bola-cilik",
    pose: "baby-mo-wow.png",
    published: "2026-11-12",
    title: { id: "Penjaga Bola Cilik", en: "The Little Ball Kid" },
    hook: {
      id: "Kak Adam jadi penjaga bola di turnamen besar! Tugasnya: berlari cepat, diam seperti patung, dan menolong pemain tanpa terlihat.",
      en: "Kak Adam becomes a ball kid at a big tournament! His job: run fast, stand still as a statue, and help the players without being noticed.",
    },
    anchor: { type: "parenting", slug: "bonding-orangtua" },
    takeaway: {
      id: "Pekerjaan kecil yang dilakukan dengan sungguh-sungguh dan rendah hati sangat berharga. Anak belajar bahwa menolong orang lain itu membanggakan, walau tak ada yang bertepuk tangan.",
      en: "Small jobs done carefully and humbly are precious. Children learn that helping others is something to be proud of, even when nobody claps.",
    },
    tags: ["tenis", "penjaga bola", "menolong", "kak adam", "turnamen", "rendah hati"],
    cover: {
      focus: 380, bg: "court",
      props: [{ k: "ballroll", x: 470 }, { k: "ballbasket", x: 600 }],
      mo: [{ who: "adam", pose: "tennis-run-1", seq: RUN, fps: 10, x: 380, move: "still" }],
      fx: ["sparkle"],
    },
    pages: [
      {
        text: { id: "Ada turnamen remaja di stadion kota! Pelatih bertanya, \"Siapa mau jadi penjaga bola?\" Tangan Kak Adam langsung terangkat paling tinggi.", en: "There was a teen tournament at the city stadium! The coach asked, \"Who wants to be a ball kid?\" Kak Adam's hand shot up the highest." },
        scene: { focus: 390, bg: "court", props: [{ k: "whistle", x: 520, y: 250 }], mo: [{ who: "adam", pose: "surprised-hands-up", x: 390 }], fx: ["sparkle"] },
      },
      {
        text: { id: "\"Penjaga bola itu apa?\" tanya Baby Ais. \"Yang mengambil bola-bola supaya pertandingan lancar,\" jawab Kak Adam bangga.", en: "\"What's a ball kid?\" asked Baby Ais. \"Someone who fetches the balls so the match keeps going,\" Kak Adam said proudly." },
        scene: { focus: 330, bg: "living", mo: [{ who: "ais", pose: "think-question", x: 280 }, { who: "adam", pose: "proud-hands-hips", x: 410 }] },
      },
      {
        text: { id: "Latihan pertama: berlari cepat, membungkuk, ambil bola, lalu kembali berdiri di tempat. Wus — ambil — wus!", en: "First practice: run fast, bend down, grab the ball, then get back to your spot. Whoosh — grab — whoosh!" },
        scene: { focus: 380, bg: "court", props: [{ k: "ballroll", x: 500 }], mo: [{ who: "adam", pose: "tennis-pick-up-ball", x: 390 }] },
      },
      {
        text: { id: "Latihan kedua: menggelindingkan bola ke teman di ujung lapangan. Pelan, lurus, tanpa memantul.", en: "Second practice: roll the ball to a friend at the other end. Gently, straight, no bouncing." },
        scene: { focus: 400, bg: "court", props: [{ k: "ballroll", x: 520, d: 0.3 }, { k: "ballroll", x: 520, d: 1.6 }], mo: [{ who: "adam", pose: "crouch-pat", x: 380 }] },
      },
      {
        text: { id: "Latihan ketiga paling susah: diam seperti patung saat bola sedang dimainkan. Tidak boleh garuk-garuk. Tidak boleh bersin!", en: "The third practice was the hardest: stand as still as a statue while the ball is in play. No scratching. No sneezing!" },
        scene: { focus: 390, bg: "court", mo: [{ who: "adam", pose: "sorry-hands", x: 390, move: "still" }] },
      },
      {
        text: { id: "Di rumah, si kembar ikut berlatih jadi patung. Baby Mo bertahan tiga detik… lalu tertawa. \"Hidungku gatal!\"", en: "At home, the twins practised being statues too. Baby Mo lasted three seconds… then burst out laughing. \"My nose is itchy!\"" },
        scene: { focus: 330, bg: "living", mo: [{ pose: "pose-03", x: 390 }, { who: "ais", pose: "calm-sit", x: 280 }], fx: ["sparkle"] },
      },
      {
        text: { id: "Hari turnamen tiba. Stadion ramai. Kak Adam memakai kaus seragam dan topi biru. Jantungnya berdebar.", en: "Tournament day came. The stadium was packed. Kak Adam wore a uniform shirt and a blue cap. His heart was pounding." },
        scene: { focus: 390, bg: "court", props: [{ k: "cap", x: 300, y: 330 }, { k: "ballbasket", x: 560 }], mo: [{ who: "adam", pose: "worried-bite-lip", x: 400 }] },
      },
      {
        text: { id: "Pemain pertama memukul bola ke net. Tuk. Kak Adam melesat, mengambil bola, dan kembali secepat kilat!", en: "The first player hit the ball into the net. Tok. Kak Adam dashed out, grabbed the ball, and was back in a flash!" },
        scene: { focus: 390, bg: "court", props: [{ k: "tennisnet", x: 560 }], mo: [{ who: "adam", pose: "tennis-run-1", seq: RUN, fps: 10, x: 400, move: "still" }] },
      },
      {
        text: { id: "Ia menggelindingkan bola ke ujung lapangan. Lurus sekali! Penjaga bola lain mengacungkan jempol.", en: "He rolled the ball to the far end. Perfectly straight! The other ball kid gave him a thumbs up." },
        scene: { focus: 400, bg: "court", props: [{ k: "ballroll", x: 520 }], mo: [{ who: "adam", pose: "crouch-pat", x: 380 }] },
      },
      {
        text: { id: "Lalu ia berdiri diam. Bola terbang ke kiri, ke kanan, berputar… Kak Adam tetap seperti patung, matanya saja yang bergerak.", en: "Then he stood still. The ball flew left, right, spinning… Kak Adam stayed like a statue — only his eyes moved." },
        scene: { focus: 390, bg: "court", props: [{ k: "ballrally", x: 240, y: 260 }], mo: [{ who: "adam", pose: "sorry-hands", x: 390, move: "still" }] },
      },
      {
        text: { id: "Matahari terik. Seorang pemain berkeringat. Kak Adam berlari membawakan handuk. \"Terima kasih, Dik,\" kata pemain itu.", en: "The sun was blazing. A player was sweating. Kak Adam ran over with a towel. \"Thanks, little one,\" said the player." },
        scene: { focus: 390, bg: "court", props: [{ k: "sun", x: 560, y: 130 }, { k: "towel", x: 480, y: 330 }], mo: [{ who: "adam", pose: "offer", x: 390 }] },
      },
      {
        text: { id: "Tidak ada yang bertepuk tangan untuk penjaga bola. Tapi tanpa mereka, pertandingan akan lama sekali.", en: "Nobody clapped for the ball kids. But without them, the match would have taken forever." },
        scene: { focus: 390, bg: "court", props: [{ k: "ballbasket", x: 530 }], mo: [{ who: "adam", pose: "tennis-pick-up-ball", x: 390 }] },
      },
      {
        text: { id: "Abi melihat dari tribun. \"Orang yang paling baik adalah yang paling bermanfaat untuk orang lain,\" bisiknya pada si kembar.", en: "Abi watched from the stands. \"The best people are the most useful to others,\" he whispered to the twins." },
        quote: { id: "\"Sebaik-baik manusia adalah yang paling bermanfaat bagi manusia.\" (HR. Ahmad dan Thabrani)", en: "\"The best of people are those most beneficial to people.\" (Ahmad and Tabarani)" },
        scene: { focus: 320, bg: "court", props: [{ k: "bench", x: 330 }], mo: [{ who: "ayah", pose: "thumbs-up-stand", x: 260 }, { who: "ais", pose: "heart-hands", x: 390 }] },
      },
      {
        text: { id: "Setelah final, sang juara berjalan menghampiri Kak Adam dan memberinya bola bertanda tangan. \"Penjaga bola terbaik hari ini!\"", en: "After the final, the champion walked over to Kak Adam and gave him a signed ball. \"Best ball kid today!\"" },
        scene: { focus: 390, bg: "court", time: "dusk", props: [{ k: "goldstar", x: 470, y: 220 }], mo: [{ who: "adam", pose: "give-ball", x: 390 }], fx: ["sparkle"] },
      },
      {
        text: { id: "Pulang ke rumah, Kak Adam lelah tapi tersenyum lebar. \"Hari ini aku tidak memukul satu bola pun… tapi rasanya seperti juara.\"", en: "Back home, Kak Adam was tired but grinning. \"I didn't hit a single ball today… but I feel like a champion.\"" },
        scene: { focus: 340, bg: "living", time: "dusk", mo: [{ who: "adam", pose: "tired-hands-knees", x: 420 }, { pose: "yeyy", x: 290, move: "hop" }], fx: ["confetti"] },
      },
      {
        text: { id: "Pekerjaan kecil apa yang bisa kamu lakukan untuk menolong orang lain hari ini — tanpa perlu tepuk tangan? 🎾", en: "What small job could you do to help someone today — no clapping needed? 🎾" },
        scene: { bg: "court", time: "dusk", props: [{ k: "ballroll", x: 470 }], mo: [{ pose: "thank-you", x: 340 }], fx: ["sparkle"] },
      },
    ],
  },

  /* ───────────────────────── Tennis life 3. The honest line call ───────────────────────── */
  {
    slug: "garis-yang-jujur",
    pose: "baby-mo-pose-07.png",
    published: "2026-11-12",
    title: { id: "Garis yang Jujur", en: "The Honest Line Call" },
    hook: {
      id: "Di pertandingan junior tidak ada hakim garis — pemain sendiri yang memutuskan bola masuk atau keluar. Saat poin penting, Kak Adam harus memilih: menang, atau jujur?",
      en: "In junior matches there are no line judges — the players call their own lines. On a big point, Kak Adam has to choose: win, or be honest?",
    },
    anchor: { type: "parenting", slug: "anak-bohong" },
    takeaway: {
      id: "Kejujuran paling diuji saat tidak ada yang melihat. Puji anak setiap kali ia memilih jujur, terutama ketika itu membuatnya rugi.",
      en: "Honesty is tested most when nobody is watching. Praise children every time they choose honesty — especially when it costs them.",
    },
    tags: ["tenis", "jujur", "sportif", "kak adam", "pertandingan", "amanah"],
    cover: {
      focus: 400, bg: "court",
      props: [{ k: "ballmark", x: 520 }],
      mo: [{ who: "adam", pose: "search-crouch", x: 360 }],
      fx: ["sparkle"],
    },
    pages: [
      {
        text: { id: "Kak Adam ikut pertandingan junior pertamanya di luar kota. Lawannya bernama Dimas, anak yang tinggi dan pukulannya keras.", en: "Kak Adam played his first junior match out of town. His opponent was Dimas, a tall boy with a big, hard hit." },
        scene: { focus: 390, bg: "court", props: [{ k: "ballfly", x: 640, y: 320, flip: true }], mo: [{ who: "adam", pose: "tennis-ready-wide", x: 390 }] },
      },
      {
        text: { id: "\"Di pertandingan junior tidak ada hakim garis,\" kata panitia. \"Kalian sendiri yang memutuskan: bola masuk atau keluar.\"", en: "\"There are no line judges in junior matches,\" said the organiser. \"You decide for yourselves: in or out.\"" },
        scene: { focus: 390, bg: "court", props: [{ k: "whistle", x: 520, y: 250 }, { k: "ballmark", x: 470 }], mo: [{ who: "adam", pose: "surprised-hands-up", x: 380 }] },
      },
      {
        text: { id: "Aturannya: kalau bola menyentuh garis sedikit saja — itu MASUK. Kalau ragu, bola dianggap masuk untuk lawan.", en: "The rule: if the ball touches the line even a tiny bit — it's IN. If you're not sure, you give the point to your opponent." },
        scene: { focus: 420, bg: "court", props: [{ k: "ballmark", x: 520 }], mo: [{ who: "adam", pose: "tennis-hold-ball", x: 360 }] },
      },
      {
        text: { id: "Pertandingan seru sekali. Servis Kak Adam masuk. Forehand Dimas menyambar. Bola bolak-balik seperti ping-pong raksasa!", en: "The match was so exciting. Kak Adam's serve went in. Dimas's forehand whipped back. The ball zoomed to and fro like giant ping-pong!" },
        scene: { focus: 390, bg: "court", props: [{ k: "ballrally", x: 365, y: 320, d: FH_HIT }], mo: [{ who: "adam", pose: fh(1), seq: FOREHAND, fps: FPS, x: 390, move: "still" }] },
      },
      {
        text: { id: "Skornya 5–5. Kak Adam butuh satu game lagi. Abi, Baby Mo, dan Baby Ais menahan napas di bangku.", en: "Five games all. Kak Adam needed one more game. Abi, Baby Mo and Baby Ais held their breath on the bench." },
        scene: { focus: 330, bg: "court", props: [{ k: "bench", x: 330 }], mo: [{ pose: "pose-34", x: 390 }, { who: "ais", pose: "scared-hide", x: 270 }] },
      },
      {
        text: { id: "Dimas memukul bola keras ke pojok. Bola jatuh… TEPAT di garis belakang. Tuk!", en: "Dimas smashed the ball into the corner. It landed… RIGHT on the baseline. Tok!" },
        scene: { focus: 420, bg: "court", props: [{ k: "ballmark", x: 480 }], mo: [{ who: "adam", pose: "tennis-stretch-reach", x: 340 }] },
      },
      {
        text: { id: "Kak Adam melihatnya jelas: bola menyentuh garis. Tapi tidak ada yang melihat sedekat dia. Dimas ada di ujung lain.", en: "Kak Adam saw it clearly: the ball touched the line. But nobody was as close as he was. Dimas was at the other end." },
        scene: { focus: 400, bg: "court", props: [{ k: "ballmark", x: 470 }, { k: "magnifier", x: 470, y: 300, s: 0.8 }], mo: [{ who: "adam", pose: "search-crouch", x: 360 }] },
      },
      {
        text: { id: "Sebuah suara kecil berbisik di kepalanya: \"Bilang saja keluar. Nggak ada yang tahu. Kamu bisa menang.\"", en: "A little voice whispered in his head: \"Just say it was out. Nobody will know. You could win.\"" },
        scene: { focus: 390, bg: "court", time: "dusk", props: [{ k: "cloud", x: 390, y: 160, s: 0.6 }], mo: [{ who: "adam", pose: "worried-bite-lip", x: 390 }] },
      },
      {
        text: { id: "Lalu ia ingat: Allah selalu melihat, walaupun tidak ada orang yang melihat. Ia menarik napas panjang.", en: "Then he remembered: Allah always sees, even when nobody else does. He took a long breath." },
        scene: { focus: 390, bg: "court", time: "dusk", mo: [{ who: "adam", pose: "deep-breath-calm", x: 390 }], fx: ["sparkle"] },
      },
      {
        text: { id: "Kak Adam mengangkat tangan dan menunjuk ke bawah. \"MASUK! Bolanya kena garis. Poinmu, Dimas!\"", en: "Kak Adam raised his hand and pointed down. \"IN! It touched the line. Your point, Dimas!\"" },
        scene: { focus: 400, bg: "court", props: [{ k: "ballmark", x: 500 }], mo: [{ who: "adam", pose: "offer", x: 370 }] },
      },
      {
        text: { id: "Dimas terdiam, lalu mengacungkan jempol dari seberang net. \"Terima kasih, Adam!\"", en: "Dimas paused, then gave a thumbs up from across the net. \"Thanks, Adam!\"" },
        scene: { focus: 400, bg: "court", props: [{ k: "tennisnet", x: 520 }], mo: [{ who: "adam", pose: "proud-hands-hips", x: 380 }], fx: ["hearts"] },
      },
      {
        text: { id: "Kak Adam kalah game itu, lalu kalah pertandingannya 5–7. Ia duduk di bangku, menyeka keringat.", en: "Kak Adam lost that game, and then the match, 5–7. He sat on the bench, wiping off sweat." },
        scene: { focus: 390, bg: "court", time: "dusk", mo: [{ who: "adam", pose: "tennis-rest-sit", x: 390 }] },
      },
      {
        text: { id: "Abi duduk di sampingnya. \"Hari ini kamu kalah skor, tapi menang yang paling penting. Kamu jujur saat tidak ada yang melihat.\"", en: "Abi sat beside him. \"Today you lost the score, but you won the most important thing. You were honest when nobody was watching.\"" },
        quote: { id: "\"Wahai orang-orang yang beriman, bertakwalah kepada Allah dan hendaklah kamu bersama orang-orang yang benar (jujur).\" (QS. At-Taubah: 119)", en: "\"O you who believe, be mindful of Allah and be with those who are truthful.\" (Qur'an, At-Tawbah 9:119)" },
        scene: { focus: 340, bg: "court", time: "dusk", mo: [{ who: "ayah", pose: "hand-heart-kneel", x: 280 }, { who: "adam", pose: "sad-head-down", x: 420 }], fx: ["sparkle"] },
      },
      {
        text: { id: "Lalu Dimas datang dengan dua botol air. \"Minggu depan latihan bareng, yuk? Aku suka main sama pemain jujur.\"", en: "Then Dimas came over with two water bottles. \"Want to practise together next week? I like playing with honest players.\"" },
        scene: { focus: 390, bg: "court", time: "dusk", props: [{ k: "water", x: 500 }], mo: [{ who: "adam", pose: "drink-bottle", x: 390 }] },
      },
      {
        text: { id: "Di perjalanan pulang, Baby Mo berkata, \"Kak, Kakak itu juara jujur.\" Kak Adam tertawa. \"Itu piala yang tidak pernah hilang.\"", en: "On the way home, Baby Mo said, \"Kak, you're the honesty champion.\" Kak Adam laughed. \"That's a trophy you can never lose.\"" },
        scene: { focus: 330, bg: "street", time: "dusk", props: [{ k: "goldstar", x: 470, y: 220 }], mo: [{ pose: "pose-25", x: 300 }, { who: "adam", pose: "laugh-tummy", x: 420 }], fx: ["sparkle"] },
      },
      {
        text: { id: "Pernahkah kamu jujur walaupun membuatmu rugi? Bagaimana rasanya di hatimu? 💛", en: "Have you ever told the truth even when it cost you? How did it feel in your heart? 💛" },
        scene: { bg: "court", time: "dusk", props: [{ k: "ballmark", x: 480 }], mo: [{ pose: "pose-07", x: 340 }], fx: ["sparkle"] },
      },
    ],
  },

  /* ───────────────────────── Tennis life 4. Snap! ───────────────────────── */
  {
    slug: "senar-putus",
    pose: "baby-mo-pose-26.png",
    published: "2026-11-12",
    title: { id: "Senar Putus!", en: "Snap! The String Broke!" },
    hook: {
      id: "PLENG! Senar raket kesayangan Kak Adam putus di tengah latihan. Ia pergi ke toko Pak Harun, tukang senar raket, dan belajar merawat raketnya.",
      en: "PING! A string on Kak Adam's favourite racket snaps mid-practice. He visits Pak Harun the stringer and learns how to look after his racket.",
    },
    anchor: { type: "parenting", slug: "bersyukur" },
    takeaway: {
      id: "Barang yang rusak bisa jadi pelajaran: sabar, merawat milik sendiri, dan berterima kasih kepada orang yang membantu memperbaikinya.",
      en: "A broken thing can teach a lot: patience, caring for your belongings, and thanking the people who help fix them.",
    },
    tags: ["tenis", "raket", "merawat barang", "kak adam", "berterima kasih", "sabar"],
    cover: {
      focus: 380, bg: "court",
      props: [{ k: "racketbroken", x: 480, y: 330 }],
      mo: [{ who: "adam", pose: "surprised-hands-up", x: 360 }],
      fx: ["sparkle"],
    },
    pages: [
      {
        text: { id: "Sore itu Kak Adam berlatih servis roket. Satu… dua… tiga puluh kali. CTAK! CTAK! CTAK!", en: "That afternoon Kak Adam practised his rocket serve. One… two… thirty times. CRACK! CRACK! CRACK!" },
        scene: { focus: 400, bg: "court", props: [{ k: "ballfly", x: 420, y: 165, d: HIT }], mo: [{ who: "adam", pose: "tennis-serve-1", seq: SERVE, fps: FPS, x: 390, move: "still" }] },
      },
      {
        text: { id: "Servis ke tiga puluh satu… PLENG! Bunyinya aneh. Bolanya jatuh lemas di depan kakinya.", en: "Serve number thirty-one… PING! A funny sound. The ball flopped down in front of his feet." },
        scene: { focus: 390, bg: "court", props: [{ k: "ballbounce", x: 470 }, { k: "bonk", x: 470, y: 200 }], mo: [{ who: "adam", pose: "surprised-hands-up", x: 380 }] },
      },
      {
        text: { id: "Ia melihat raketnya. Satu senar putus dan melengkung seperti mi! \"Raketkuuu!\"", en: "He looked at his racket. One string had snapped and curled up like a noodle! \"My racket!\"" },
        scene: { focus: 400, bg: "court", props: [{ k: "racketbroken", x: 480, y: 330, s: 1.2 }], mo: [{ who: "adam", pose: "sad-head-down", x: 360 }] },
      },
      {
        text: { id: "Kak Adam ingin menangis. Raket itu hadiah dari Abi. \"Aku merusaknya…\"", en: "Kak Adam felt like crying. The racket was a present from Abi. \"I broke it…\"" },
        scene: { focus: 390, bg: "court", time: "dusk", mo: [{ who: "adam", pose: "sorry-hands", x: 390 }] },
      },
      {
        text: { id: "Abi berlutut. \"Senar putus itu tandanya kamu rajin berlatih, Kak. Raket juga bisa capek. Ayo kita bawa ke dokter raket.\"", en: "Abi knelt down. \"A snapped string means you've practised hard, Kak. Rackets get tired too. Let's take it to the racket doctor.\"" },
        scene: { focus: 340, bg: "court", time: "dusk", props: [{ k: "racketbroken", x: 400, y: 330, s: 0.8 }], mo: [{ who: "ayah", pose: "teach-point-kneel", x: 270 }, { who: "adam", pose: "worried-bite-lip", x: 440 }] },
      },
      {
        text: { id: "\"Dokter raket?\" Baby Mo terbelalak. \"Raket bisa sakit?\" Baby Ais langsung menyiapkan plester.", en: "\"A racket doctor?\" Baby Mo's eyes went wide. \"Can rackets get sick?\" Baby Ais got a plaster ready straight away." },
        scene: { focus: 330, bg: "living", mo: [{ pose: "pose-40", x: 390 }, { who: "ais", pose: "doctor-kit", x: 280 }], fx: ["sparkle"] },
      },
      {
        text: { id: "Toko Pak Harun kecil dan penuh raket tergantung seperti buah-buahan. Di mejanya ada gulungan senar putih yang panjang sekali.", en: "Pak Harun's shop was small and full of rackets hanging like fruit. On his table sat a roll of very long white string." },
        scene: { focus: 390, bg: "market", props: [{ k: "spool", x: 500 }, { k: "racket", x: 280 }], mo: [{ who: "adam", pose: "surprised-hands-up", x: 390 }] },
      },
      {
        text: { id: "Pak Harun mencabut senar lama satu per satu, lalu memasang senar baru: atas, bawah, atas, bawah — seperti menganyam tikar.", en: "Pak Harun pulled out the old strings one by one, then threaded in new ones: over, under, over, under — like weaving a mat." },
        scene: { focus: 400, bg: "market", props: [{ k: "spool", x: 510 }, { k: "racket", x: 430, y: 330 }], mo: [{ who: "adam", pose: "search-crouch", x: 340 }] },
      },
      {
        text: { id: "\"Senarnya harus ditarik pas,\" kata Pak Harun. \"Terlalu kencang, bolanya mental keras. Terlalu kendur, bolanya loyo.\"", en: "\"The strings have to be pulled just right,\" said Pak Harun. \"Too tight and the ball bounces off hard. Too loose and it goes floppy.\"" },
        scene: { focus: 400, bg: "market", props: [{ k: "spool", x: 520 }], mo: [{ who: "adam", pose: "surprised-hands-up", x: 390 }] },
      },
      {
        text: { id: "Menunggu itu lama. Kak Adam ingin cepat-cepat. Tapi ia belajar duduk sabar sambil memperhatikan tangan Pak Harun yang lincah.", en: "Waiting took ages. Kak Adam wanted it done fast. But he learned to sit patiently and watch Pak Harun's quick hands." },
        scene: { focus: 390, bg: "market", props: [{ k: "clock", x: 520, y: 220 }], mo: [{ who: "adam", pose: "tennis-rest-sit", x: 390 }] },
      },
      {
        text: { id: "\"Selesai!\" Raketnya seperti baru. Senarnya putih dan rapi. Kak Adam memetiknya: ting-ting!", en: "\"Done!\" The racket looked brand new. The strings were white and neat. Kak Adam plucked them: ting-ting!" },
        scene: { focus: 390, bg: "market", props: [{ k: "racket", x: 480, y: 330, s: 1.2 }], mo: [{ who: "adam", pose: "clap-cheer", x: 380 }], fx: ["notes", "sparkle"] },
      },
      {
        text: { id: "Pak Harun memberi tiga pesan: \"Jangan dibanting. Jangan dijemur di mobil panas. Simpan di tasnya.\"", en: "Pak Harun gave three tips: \"Don't slam it down. Don't leave it in a hot car. Keep it in its bag.\"" },
        scene: { focus: 400, bg: "market", props: [{ k: "racket", x: 300, y: 330 }], mo: [{ who: "adam", pose: "offer", x: 400 }] },
      },
      {
        text: { id: "Kak Adam membungkuk dan berkata, \"Terima kasih banyak, Pak Harun!\" Abi tersenyum bangga.", en: "Kak Adam bowed his head and said, \"Thank you so much, Pak Harun!\" Abi smiled proudly." },
        quote: { id: "\"Barang siapa tidak berterima kasih kepada manusia, ia tidak bersyukur kepada Allah.\" (HR. Abu Dawud dan Tirmidzi)", en: "\"Whoever does not thank people has not thanked Allah.\" (Abu Dawud and Tirmidhi)" },
        scene: { focus: 340, bg: "market", mo: [{ who: "ayah", pose: "stand-arms-crossed", x: 270 }, { who: "adam", pose: "sorry-hands", x: 410 }], fx: ["hearts"] },
      },
      {
        text: { id: "Besoknya, servis pertama dengan senar baru: CTAK! Bolanya melesat lebih kencang dari sebelumnya!", en: "The next day, his first serve with new strings: CRACK! The ball flew faster than ever!" },
        scene: { focus: 400, bg: "court", props: [{ k: "ballfly", x: 420, y: 165, s: 1.2, d: HIT }], mo: [{ who: "adam", pose: "tennis-serve-1", seq: SERVE, fps: FPS, x: 390, move: "still" }], fx: ["sparkle"] },
      },
      {
        text: { id: "Sejak hari itu, setiap selesai latihan, Kak Adam mengelap raketnya dan memasukkannya ke tas. \"Istirahat ya, raket.\"", en: "From that day on, after every practice, Kak Adam wiped his racket and put it in its bag. \"Have a rest, racket.\"" },
        scene: { focus: 390, bg: "living", time: "dusk", props: [{ k: "towel", x: 480 }], mo: [{ who: "adam", pose: "tennis-walk-racket", x: 380 }] },
      },
      {
        text: { id: "Barang apa yang paling kamu sayangi? Bagaimana caramu merawatnya supaya awet? 🎾", en: "What's your favourite thing? How do you look after it so it lasts? 🎾" },
        scene: { bg: "living", time: "night", props: [{ k: "racket", x: 470 }], mo: [{ pose: "pose-12", x: 350 }], fx: ["stars"] },
      },
    ],
  },

  /* ───────────────────────── Tennis life 5. Doubles with Raka ───────────────────────── */
  {
    slug: "ganda-bersama-raka",
    pose: "baby-mo-yeyy.png",
    published: "2026-11-12",
    title: { id: "Ganda Bersama Raka", en: "Doubles with Raka" },
    hook: {
      id: "Dulu lawan, sekarang satu tim! Kak Adam dan Raka main ganda. Tapi dua pemain hebat belum tentu jadi tim hebat… mereka harus belajar bicara.",
      en: "Once rivals, now teammates! Kak Adam and Raka play doubles. But two good players don't always make a good team… they have to learn to talk.",
    },
    anchor: { type: "parenting", slug: "rivalitas-saudara" },
    takeaway: {
      id: "Kerja sama butuh bicara, saling percaya, dan saling menyemangati. Anak belajar bahwa tim yang saling menguatkan lebih kuat dari pemain hebat yang sendirian.",
      en: "Teamwork needs talking, trusting and cheering each other on. Children learn that a team that holds each other up beats a great player on their own.",
    },
    tags: ["tenis", "ganda", "kerja sama", "kak adam", "persahabatan", "tim"],
    cover: {
      focus: 380, bg: "court",
      props: [{ k: "ballrally", x: 380, y: 320 }, { k: "trophy", x: 590 }],
      mo: [{ who: "adam", pose: "tennis-volley", x: 380 }],
      fx: ["confetti"],
    },
    pages: [
      {
        text: { id: "Ada turnamen ganda anak-anak! Raka mengirim pesan: \"Adam, mau jadi pasanganku?\" Kak Adam melompat kegirangan.", en: "There was a kids' doubles tournament! Raka sent a message: \"Adam, want to be my partner?\" Kak Adam jumped for joy." },
        scene: { focus: 390, bg: "living", props: [{ k: "phone", x: 470, y: 320 }], mo: [{ who: "adam", pose: "tennis-celebrate-1", seq: CELEBRATE, fps: 8, x: 380, move: "still" }] },
      },
      {
        text: { id: "\"Ganda itu dua lawan dua,\" jelas Kak Adam pada si kembar. \"Lapangannya lebih lebar, dan kita harus bekerja sama.\"", en: "\"Doubles is two against two,\" Kak Adam explained to the twins. \"The court's wider, and we have to work together.\"" },
        scene: { focus: 330, bg: "living", mo: [{ who: "ais", pose: "sit-chin-hands", x: 280 }, { who: "adam", pose: "kneel-talk", x: 420 }] },
      },
      {
        text: { id: "Latihan pertama kacau! Bola datang ke tengah. Kak Adam lari. Raka juga lari. DUK! Raket mereka beradu. Bolanya lewat.", en: "The first practice was chaos! A ball came down the middle. Kak Adam ran. Raka ran too. CLONK! Their rackets bumped. The ball went past." },
        scene: { focus: 390, bg: "court", props: [{ k: "bonk", x: 470, y: 210 }, { k: "ballfly", x: 440, y: 330 }], mo: [{ who: "adam", pose: "tennis-oops-3", x: 390 }] },
      },
      {
        text: { id: "Bola berikutnya juga ke tengah. Kali ini dua-duanya diam, saling menunggu. Bolanya lewat lagi. Mereka tertawa malu.", en: "The next ball went down the middle too. This time they both froze, waiting for each other. It went past again. They laughed, embarrassed." },
        scene: { focus: 390, bg: "court", props: [{ k: "ballroll", x: 470 }], mo: [{ who: "adam", pose: "sheepish-scratch-head", x: 390 }] },
      },
      {
        text: { id: "Abi memberi rahasia ganda: \"Bicaralah! Teriak 'PUNYAKU!' kalau kamu yang ambil, dan 'PUNYAMU!' kalau temanmu.\"", en: "Abi shared the doubles secret: \"Talk! Shout 'MINE!' if you'll take it, and 'YOURS!' if it's your partner's.\"" },
        scene: { focus: 340, bg: "court", mo: [{ who: "ayah", pose: "megaphone", x: 270 }, { who: "adam", pose: "tennis-hold-ball", x: 410 }] },
      },
      {
        text: { id: "Mereka mencoba lagi. \"PUNYAKU!\" teriak Kak Adam — DUK! \"PUNYAMU!\" teriaknya lagi, dan Raka memukul dengan mantap.", en: "They tried again. \"MINE!\" shouted Kak Adam — THOCK! \"YOURS!\" he shouted next, and Raka hit it cleanly." },
        scene: { focus: 390, bg: "court", props: [{ k: "ballfly", x: 370, y: 330, d: FH_HIT }, { k: "swoosh", x: 345, y: 330, d: FH_TRAIL }], mo: [{ who: "adam", pose: fh(1), seq: FOREHAND, fps: FPS, x: 390, move: "still" }] },
      },
      {
        text: { id: "Rahasia kedua: setelah setiap poin — menang atau kalah — beri tos dan satu kata baik. \"Bagus!\" \"Nggak apa-apa!\"", en: "Secret two: after every point — won or lost — give a high five and one kind word. \"Nice!\" \"No worries!\"" },
        scene: { focus: 390, bg: "court", mo: [{ who: "adam", pose: "tennis-wave-2", seq: WAVE, fps: 4, x: 390, move: "still" }], fx: ["sparkle"] },
      },
      {
        text: { id: "Hari turnamen. Lawan mereka kakak-beradik yang sudah lama main bersama. Pukulan mereka rapi seperti mesin.", en: "Tournament day. Their opponents were two brothers who'd played together for years. Their shots were as neat as a machine." },
        scene: { focus: 390, bg: "court", props: [{ k: "ballrally", x: 365, y: 320 }], mo: [{ who: "adam", pose: "worried-bite-lip", x: 390 }] },
      },
      {
        text: { id: "Set pertama, Kak Adam dan Raka kalah 2–6. Kak Adam ingin menyalahkan Raka. Tapi Raka berkata duluan, \"Maaf ya, banyak bolaku nyangkut.\"", en: "In the first set, Kak Adam and Raka lost 2–6. Kak Adam wanted to blame Raka. But Raka spoke first: \"Sorry, lots of my shots hit the net.\"" },
        scene: { focus: 390, bg: "court", props: [{ k: "tennisnet", x: 530 }], mo: [{ who: "adam", pose: "disappointed-sigh", x: 380 }] },
      },
      {
        text: { id: "Kak Adam menggeleng dan tersenyum. \"Bolaku juga. Kita tim — menang bareng, kalah bareng. Ayo bangkit bareng!\"", en: "Kak Adam shook his head and smiled. \"Mine too. We're a team — we win together, we lose together. Let's bounce back together!\"" },
        scene: { focus: 390, bg: "court", mo: [{ who: "adam", pose: "handshake-offer", x: 390 }], fx: ["hearts"] },
      },
      {
        text: { id: "Set kedua berbeda. \"Punyaku!\" \"Punyamu!\" \"Bagus!\" Kak Adam maju ke net dan — PLUK — voli yang manis sekali!", en: "The second set was different. \"Mine!\" \"Yours!\" \"Nice!\" Kak Adam rushed the net and — POP — a lovely volley!" },
        scene: { focus: 390, bg: "court", props: [{ k: "tennisnet", x: 520 }, { k: "ballfly", x: 430, y: 300, s: 0.9 }], mo: [{ who: "adam", pose: "tennis-volley", x: 390 }], fx: ["sparkle"] },
      },
      {
        text: { id: "Mereka bergerak seperti dua tangan pada satu badan: satu maju, satu mundur. Skor menyusul: 4–4… 5–5… 6–5!", en: "They moved like two hands on one body: one forward, one back. The score crept up: 4–4… 5–5… 6–5!" },
        scene: { focus: 390, bg: "court", time: "dusk", props: [{ k: "footprints", x: 380, y: 436 }, { k: "ballrally", x: 365, y: 320 }], mo: [{ who: "adam", pose: "tennis-shuffle-1", seq: SHUFFLE, fps: 8, x: 390, move: "still" }] },
      },
      {
        text: { id: "Poin terakhir. Servis roket Kak Adam… kembali… Raka menyambar di net… MASUK! Mereka menang set kedua dan super tie-break!", en: "Final point. Kak Adam's rocket serve… returned… Raka pounced at the net… IN! They won the second set and the super tie-break!" },
        scene: { focus: 390, bg: "court", time: "dusk", mo: [{ who: "adam", pose: "tennis-celebrate-1", seq: CELEBRATE, fps: 8, x: 390, move: "still" }], fx: ["confetti"] },
      },
      {
        text: { id: "Abi memeluk mereka berdua. \"Kalian seperti bangunan: satu bagian menguatkan bagian yang lain.\"", en: "Abi hugged them both. \"You're like a building: each part holds the other part up.\"" },
        quote: { id: "\"Seorang mukmin dengan mukmin lainnya seperti sebuah bangunan, yang saling menguatkan satu sama lain.\" (HR. Bukhari dan Muslim)", en: "\"A believer to another believer is like a building whose parts hold each other up.\" (Bukhari and Muslim)" },
        scene: { focus: 340, bg: "court", time: "dusk", mo: [{ who: "ayah", pose: "kneel-arms-open", x: 280 }, { who: "adam", pose: "hold-trophy", x: 420 }], fx: ["hearts"] },
      },
      {
        text: { id: "Pialanya cuma satu. \"Minggu ini di rumahmu, minggu depan di rumahku,\" kata Raka. Mereka tertawa — pasangan paling adil sedunia.", en: "There was only one trophy. \"This week at your house, next week at mine,\" said Raka. They laughed — the fairest partners in the world." },
        scene: { focus: 390, bg: "street", time: "dusk", props: [{ k: "trophy", x: 480 }], mo: [{ who: "adam", pose: "laugh-tummy", x: 380 }, { pose: "yeyy", x: 270, move: "hop" }], fx: ["confetti"] },
      },
      {
        text: { id: "Malam itu Baby Mo dan Baby Ais berlatih teriak di kamar: \"PUNYAKU!\" \"PUNYAMU!\" Siapa pasangan terbaikmu di rumah? 🤝", en: "That night Baby Mo and Baby Ais practised shouting in their room: \"MINE!\" \"YOURS!\" Who's your best partner at home? 🤝" },
        scene: { focus: 330, bg: "bedroom", time: "night", props: [{ k: "balloon", x: 470, y: 230 }], mo: [{ pose: "pose-02", x: 390, move: "hop" }, { who: "ais", pose: "megaphone", x: 275 }], fx: ["stars"] },
      },
    ],
  },

  /* ───────────────────────── Practical 1. Lost in the supermarket ───────────────────────── */
  {
    slug: "baby-mo-terpisah-di-supermarket",
    pose: "baby-mo-pose-40.png",
    published: "2026-11-13",
    title: { id: "Baby Mo Terpisah di Supermarket", en: "Baby Mo Gets Lost at the Supermarket" },
    hook: {
      id: "Baby Mo mengejar balon dan… di mana Abi? Ia ingat tiga langkah ajaib: berhenti, cari penolong aman, dan nyanyikan nomor Abi!",
      en: "Baby Mo chases a balloon and… where's Abi? He remembers three magic steps: stop, find a safe helper, and sing Abi's number!",
    },
    anchor: { type: "doa", slug: "keluar-rumah" },
    takeaway: {
      id: "Anak yang terpisah butuh rencana sederhana yang sudah dilatih: diam di tempat, cari penolong aman, dan hafal nomor orang tua. Latihlah seperti permainan sebelum keluar rumah.",
      en: "A child who gets separated needs a simple plan they've practised: stay put, find a safe helper, and know a parent's number. Practise it like a game before you go out.",
    },
    tags: ["keamanan anak", "anak hilang", "supermarket", "nomor telepon", "abi", "berani"],
    card: {
      title: { id: "Kalau Anak Terpisah di Tempat Ramai", en: "If Your Child Gets Separated in a Crowd" },
      items: {
        id: [
          "Ajarkan nomor HP Ayah/Bunda lewat lagu, dan tulis di gelang atau kartu di saku anak.",
          "Sepakati sebelum masuk: kalau terpisah, BERHENTI di tempat — orang tua yang akan kembali mencari.",
          "Tunjukkan penolong aman: kasir atau satpam berseragam, atau ibu yang sedang bersama anak-anaknya. Jangan ikut siapa pun ke luar atau ke parkiran.",
        ],
        en: [
          "Teach your phone number with a song, and write it on a wristband or a card in their pocket.",
          "Agree before you go in: if we get separated, STOP where you are — the grown-up comes back to find you.",
          "Point out safe helpers: a cashier or security guard in uniform, or a mum with her children. Never go outside or to the car park with anyone.",
        ],
      },
    },
    cover: {
      focus: 380, bg: "supermarket",
      props: [{ k: "counter", x: 520 }, { k: "phonecard", x: 360, y: 230, s: 0.9 }],
      mo: [{ pose: "pose-40", x: 330 }],
      fx: ["sparkle"],
    },
    pages: [
      {
        text: { id: "Hari Sabtu, Abi mengajak Baby Mo dan Baby Ais belanja ke supermarket. \"Bismillahi tawakkaltu 'alallah,\" doa Abi sebelum berangkat.", en: "On Saturday, Abi took Baby Mo and Baby Ais shopping at the supermarket. \"Bismillahi tawakkaltu 'alallah,\" Abi prayed before they left." },
        quote: { id: "\"Bismillahi tawakkaltu 'alallah, laa haula wa laa quwwata illaa billaah.\" — Dengan nama Allah, aku bertawakal kepada Allah. (HR. Abu Dawud dan Tirmidzi)", en: "\"Bismillahi tawakkaltu 'alallah, laa hawla wa laa quwwata illaa billaah.\" — In Allah's name, I trust in Allah. (Abu Dawud and Tirmidhi)" },
        scene: { focus: 330, bg: "street", props: [{ k: "car", x: 560, s: 1.2 }], mo: [{ pose: "pose-35", x: 390 }, { who: "ayah", pose: "dua-kneel", x: 260 }] },
      },
      {
        text: { id: "Di pintu masuk, Abi berlutut. \"Ingat tiga langkah ajaib kalau terpisah? Satu: BERHENTI. Dua: cari PENOLONG AMAN. Tiga: sebut NOMOR ABI.\"", en: "At the entrance, Abi knelt down. \"Remember the three magic steps if we get separated? One: STOP. Two: find a SAFE HELPER. Three: say ABI'S NUMBER.\"" },
        scene: { focus: 330, bg: "supermarket", mo: [{ who: "ayah", pose: "teach-point-kneel", x: 270 }, { pose: "pose-33", x: 400 }, { who: "ais", pose: "think-question", x: 500 }] },
      },
      {
        text: { id: "\"Dan nomor Abi ada lagunya!\" Mereka bernyanyi: \"Nol delapan satu dua, tiga empat lima enam, tujuh delapan sembilan — itu nomor Abi!\"", en: "\"And Abi's number has a song!\" They sang: \"Oh-eight-one-two, three-four-five-six, seven-eight-nine — that's Abi's number!\"" },
        scene: { focus: 360, bg: "supermarket", props: [{ k: "phonecard", x: 410, y: 230, s: 0.85 }], mo: [{ pose: "pose-30", x: 330, move: "sway" }], fx: ["notes"] },
      },
      {
        text: { id: "Supermarketnya besar sekali. Rak-raknya tinggi, penuh warna. Baby Mo mendorong troli kecil dengan bangga.", en: "The supermarket was huge. The shelves were tall and colourful. Baby Mo proudly pushed a little trolley." },
        scene: { focus: 360, bg: "supermarket", props: [{ k: "trolley", x: 470 }], mo: [{ pose: "pose-21", x: 350 }] },
      },
      {
        text: { id: "Lalu Baby Mo melihat balon merah melayang di lorong sebelah. \"Balon!\" Ia berlari mengejarnya… tuk-tuk-tuk…", en: "Then Baby Mo saw a red balloon floating in the next aisle. \"A balloon!\" He ran after it… pitter-patter…" },
        scene: { focus: 380, bg: "supermarket", props: [{ k: "balloon", x: 500, y: 200 }], mo: [{ pose: "run", x: 360, move: "hop" }] },
      },
      {
        text: { id: "Balonnya hilang di balik rak. Baby Mo menoleh. Rak tinggi. Orang-orang asing. Di mana Abi? Di mana Ais?", en: "The balloon vanished behind a shelf. Baby Mo turned round. Tall shelves. Strangers. Where was Abi? Where was Ais?" },
        scene: { bg: "supermarket", mo: [{ pose: "pose-40", x: 360 }] },
      },
      {
        text: { id: "Dadanya berdebar. Ia ingin lari ke mana saja dan berteriak. Matanya mulai basah…", en: "His heart pounded. He wanted to run anywhere and shout. His eyes started to fill with tears…" },
        scene: { bg: "supermarket", mo: [{ pose: "pose-37", x: 360, move: "sway" }] },
      },
      {
        text: { id: "Lalu ia ingat suara Abi: \"Satu: BERHENTI.\" Baby Mo berhenti. Tarik napas… buang. \"Abi pasti kembali mencariku di sini.\"", en: "Then he remembered Abi's voice: \"One: STOP.\" Baby Mo stopped. Breathe in… breathe out. \"Abi will come back to look for me here.\"" },
        scene: { bg: "supermarket", mo: [{ pose: "pose-07", x: 360 }], fx: ["sparkle"] },
      },
      {
        text: { id: "\"Dua: cari PENOLONG AMAN.\" Bukan sembarang orang — tapi kasir atau satpam berseragam, atau ibu yang sedang bersama anak-anaknya.", en: "\"Two: find a SAFE HELPER.\" Not just anyone — a cashier or security guard in uniform, or a mum who's with her own children." },
        scene: { focus: 370, bg: "supermarket", props: [{ k: "counter", x: 455, s: 0.85 }], mo: [{ pose: "pose-08", x: 320 }] },
      },
      {
        text: { id: "Seorang pria tak dikenal berkata, \"Ayo ikut Om keluar, kita cari ayahmu di parkiran.\" Baby Mo menggeleng keras. \"Tidak. Aku tunggu di dalam!\"", en: "A man he didn't know said, \"Come outside with me, we'll find your dad in the car park.\" Baby Mo shook his head hard. \"No. I'm waiting inside!\"" },
        scene: { focus: 360, bg: "supermarket", mo: [{ pose: "pose-10", x: 360 }] },
      },
      {
        text: { id: "Ia berjalan ke meja kasir berseragam biru. \"Kak, aku terpisah dari Abi.\" Kakak kasir tersenyum dan berjongkok. \"Kamu pintar sekali datang ke sini.\"", en: "He walked to the cashier's desk, to the lady in the blue uniform. \"Excuse me, I got separated from Abi.\" She smiled and crouched down. \"You were so clever to come here.\"" },
        scene: { focus: 370, bg: "supermarket", props: [{ k: "counter", x: 455, s: 0.85 }], mo: [{ pose: "pose-21", x: 320 }] },
      },
      {
        text: { id: "\"Tiga: NOMOR ABI!\" Baby Mo bernyanyi: \"Nol delapan satu dua, tiga empat lima enam, tujuh delapan sembilan!\" Kakak kasir menelepon.", en: "\"Three: ABI'S NUMBER!\" Baby Mo sang: \"Oh-eight-one-two, three-four-five-six, seven-eight-nine!\" The cashier made the call." },
        scene: { focus: 370, bg: "supermarket", props: [{ k: "counter", x: 460, s: 0.85 }, { k: "phonecard", x: 330, y: 215, s: 0.85 }], mo: [{ pose: "pose-30", x: 320, move: "sway" }], fx: ["notes"] },
      },
      {
        text: { id: "Tak lama terdengar suara yang paling ia kenal: \"MO!\" Abi berlari bersama Baby Ais, lalu memeluknya erat sekali.", en: "Soon he heard the voice he knew best: \"MO!\" Abi came running with Baby Ais and hugged him very tight." },
        scene: { focus: 350, bg: "supermarket", mo: [{ who: "ayah", pose: "hug-mo", x: 330 }, { who: "ais", pose: "run", x: 480 }], fx: ["hearts"] },
      },
      {
        text: { id: "\"Abi takut sekali,\" bisik Abi. \"Tapi Mo hebat: berhenti, cari penolong aman, dan ingat nomor Abi. Terima kasih sudah memakai tiga langkah ajaib.\"", en: "\"I was so scared,\" Abi whispered. \"But you were brilliant: you stopped, found a safe helper and remembered my number. Thank you for using the three magic steps.\"" },
        scene: { focus: 330, bg: "supermarket", mo: [{ who: "ayah", pose: "kneel-arms-open", x: 270 }, { pose: "pose-41", x: 400 }], fx: ["sparkle"] },
      },
      {
        text: { id: "Mereka berterima kasih kepada kakak kasir. Baby Ais langsung minta diajari lagu nomor Abi juga.", en: "They thanked the cashier. Baby Ais immediately asked to learn the Abi's-number song too." },
        scene: { focus: 330, bg: "supermarket", props: [{ k: "counter", x: 470, s: 0.85 }], mo: [{ pose: "thank-you", x: 400 }, { who: "ais", pose: "heart-hands", x: 280 }] },
      },
      {
        text: { id: "Ayo latihan! Apa tiga langkah ajaib kalau kamu terpisah? Dan… kamu sudah hafal nomor Ayah atau Bunda? 📞", en: "Let's practise! What are the three magic steps if you get separated? And… do you know Mum's or Dad's number by heart? 📞" },
        scene: { focus: 360, bg: "living", props: [{ k: "phonecard", x: 400, y: 230, s: 0.85 }], mo: [{ pose: "pose-08", x: 330 }], fx: ["notes"] },
      },
    ],
  },

  /* ───────────────────────── Practical 2. My body is a trust ───────────────────────── */
  {
    slug: "tubuhku-amanah-dari-allah",
    pose: "baby-mo-pose-34.png",
    published: "2026-11-13",
    title: { id: "Tubuhku, Amanah dari Allah", en: "My Body Is a Gift from Allah" },
    hook: {
      id: "Sebelum berenang di pantai, Abi mengajari si kembar aturan baju renang: bagian yang tertutup baju renang itu istimewa dan dijaga. Plus permainan seru: rahasia atau kejutan?",
      en: "Before a beach swim, Abi teaches the twins the swimsuit rule: the parts your swimsuit covers are special and private. Plus a fun game: secret or surprise?",
    },
    anchor: { type: "parenting", slug: "adab-sehari-hari" },
    takeaway: {
      id: "Pendidikan keamanan tubuh bisa dimulai sejak kecil, dengan bahasa sederhana dan tenang: aurat dijaga, boleh berkata \"tidak\", tidak ada rahasia yang membuat takut, dan selalu boleh cerita.",
      en: "Body safety can start early, in simple, calm words: private parts are kept private, it's okay to say \"no\", no scary secrets, and they can always tell you.",
    },
    tags: ["keamanan tubuh", "aurat", "malu", "rahasia", "berani berkata tidak", "abi"],
    card: {
      title: { id: "Mengajarkan Keamanan Tubuh pada Anak", en: "Teaching Body Safety to Young Children" },
      items: {
        id: [
          "Pakai nama yang jelas dan tenang. Aturan baju renang: bagian yang tertutup baju renang tidak boleh dilihat atau disentuh orang lain — kecuali Ayah/Bunda saat membersihkan, atau dokter bersama Ayah/Bunda.",
          "Bedakan kejutan (menyenangkan, nanti dibuka) dan rahasia yang bikin takut. Tidak ada rahasia tentang tubuh — semuanya boleh diceritakan.",
          "Latih kalimat \"Jangan! Aku tidak mau!\", lalu pergi dan cerita. Tegaskan: bukan salah anak, dan Ayah/Bunda tidak akan marah.",
        ],
        en: [
          "Use clear, calm words. The swimsuit rule: nobody may look at or touch the parts a swimsuit covers — except Mum or Dad when washing, or a doctor with Mum or Dad there.",
          "Tell surprises (happy, opened later) apart from secrets that feel scary. There are no secrets about bodies — they can tell you everything.",
          "Practise \"No! I don't want to!\", then walk away and tell. Make it clear: it's never their fault, and you won't be cross.",
        ],
      },
    },
    cover: {
      focus: 340, bg: "beach",
      props: [{ k: "swimring", x: 480 }, { k: "heart", x: 340, y: 220, s: 0.7 }],
      mo: [{ pose: "pose-34", x: 380 }, { who: "ais", pose: "heart-hands", x: 270 }],
      fx: ["sparkle"],
    },
    pages: [
      {
        text: { id: "\"Besok kita berenang di pantai!\" seru Abi. Si kembar melompat-lompat sambil memeluk pelampung.", en: "\"Tomorrow we're going swimming at the beach!\" Abi announced. The twins jumped up and down hugging their swim rings." },
        scene: { focus: 340, bg: "living", props: [{ k: "swimring", x: 470 }], mo: [{ pose: "yeyy", x: 380, move: "hop" }, { who: "ais", pose: "jump-cheer", x: 270, move: "hop" }], fx: ["confetti"] },
      },
      {
        text: { id: "Sebelum tidur, Abi duduk di karpet. \"Abi mau ajari satu aturan penting. Namanya aturan baju renang.\"", en: "Before bed, Abi sat on the rug. \"I want to teach you one important rule. It's called the swimsuit rule.\"" },
        scene: { focus: 330, bg: "bedroom", time: "night", mo: [{ who: "ayah", pose: "teach-point-kneel", x: 270 }, { pose: "pose-12", x: 400 }], fx: ["stars"] },
      },
      {
        text: { id: "\"Tubuh kita amanah dari Allah. Bagian yang tertutup baju renang itu istimewa — namanya aurat. Kita menjaganya dengan rasa malu yang baik.\"", en: "\"Our bodies are a gift Allah has trusted us with. The parts your swimsuit covers are special — they're called 'aurat'. We look after them with good modesty.\"" },
        quote: { id: "\"Malu itu sebagian dari iman.\" (HR. Bukhari dan Muslim)", en: "\"Modesty is part of faith.\" (Bukhari and Muslim)" },
        scene: { focus: 330, bg: "bedroom", time: "night", props: [{ k: "heart", x: 470, y: 230, s: 0.7 }], mo: [{ who: "ayah", pose: "hand-heart-kneel", x: 270 }, { who: "ais", pose: "sit-chin-hands", x: 400 }], fx: ["sparkle"] },
      },
      {
        text: { id: "\"Aturannya: tidak ada yang boleh melihat atau menyentuh bagian itu. Kecuali Umi atau Abi saat memandikan, atau dokter waktu Umi dan Abi ada di sampingmu.\"", en: "\"The rule: nobody may look at or touch those parts. Except Umi or Abi when we bathe you, or a doctor when Umi and Abi are right beside you.\"" },
        scene: { focus: 330, bg: "bathroom", props: [{ k: "towel", x: 470 }], mo: [{ who: "ayah", pose: "teach-point-kneel", x: 270 }, { pose: "pose-33", x: 400 }] },
      },
      {
        text: { id: "\"Dan kita juga tidak melihat atau menyentuh aurat orang lain,\" tambah Abi. \"Itu cara kita saling menghormati.\"", en: "\"And we don't look at or touch other people's private parts either,\" Abi added. \"That's how we respect each other.\"" },
        scene: { focus: 330, bg: "bedroom", time: "night", mo: [{ who: "ais", pose: "heart-hands", x: 280 }, { pose: "pose-34", x: 390 }], fx: ["hearts"] },
      },
      {
        text: { id: "\"Kalau ada yang mencoba?\" tanya Baby Ais. \"Kamu boleh berteriak keras: 'JANGAN! AKU TIDAK MAU!' lalu pergi dan cerita ke Umi atau Abi.\"", en: "\"What if someone tries?\" asked Baby Ais. \"You can shout loudly: 'NO! I DON'T WANT TO!' then walk away and tell Umi or Abi.\"" },
        scene: { focus: 330, bg: "bedroom", time: "night", mo: [{ who: "ais", pose: "megaphone", x: 280 }, { who: "ayah", pose: "thumbs-up-kneel", x: 420 }] },
      },
      {
        text: { id: "Si kembar berlatih berteriak sambil berdiri tegak. \"JANGAN! AKU TIDAK MAU!\" Suara Baby Mo paling kencang sampai Kak Adam mengintip dari pintu.", en: "The twins practised shouting, standing up tall. \"NO! I DON'T WANT TO!\" Baby Mo's voice was so loud that Kak Adam peeked in at the door." },
        scene: { focus: 340, bg: "bedroom", time: "night", mo: [{ pose: "pose-26", x: 290 }, { who: "adam", pose: "surprised-hands-up", x: 430 }] },
      },
      {
        text: { id: "\"Sekarang main tebak-tebakan: RAHASIA atau KEJUTAN?\" kata Abi. \"Kejutan itu menyenangkan dan nanti dibuka. Rahasia yang bikin perut takut — itu harus diceritakan.\"", en: "\"Now a guessing game: SECRET or SURPRISE?\" said Abi. \"A surprise is happy and gets opened later. A secret that makes your tummy scared — that must be told.\"" },
        scene: { focus: 330, bg: "living", props: [{ k: "parcel", x: 470 }, { k: "cloud", x: 300, y: 170, s: 0.6 }], mo: [{ who: "ayah", pose: "idea-point-stand", x: 270 }, { pose: "pose-33", x: 400 }] },
      },
      {
        text: { id: "\"Kado ulang tahun untuk Umi, disembunyikan sampai besok?\" \"KEJUTAN!\" teriak si kembar. Benar!", en: "\"A birthday present for Umi, hidden until tomorrow?\" \"SURPRISE!\" shouted the twins. Correct!" },
        scene: { focus: 330, bg: "living", props: [{ k: "parcel", x: 470 }], mo: [{ who: "ais", pose: "gift-box", x: 280 }, { pose: "yeyy", x: 400, move: "hop" }], fx: ["confetti"] },
      },
      {
        text: { id: "\"Seseorang bilang: 'Jangan bilang Umi ya, ini rahasia kita,' dan perutmu jadi takut?\" Baby Mo berpikir. \"Itu RAHASIA BURUK. Harus cerita!\"", en: "\"Someone says: 'Don't tell Umi, it's our secret,' and your tummy feels scared?\" Baby Mo thought. \"That's a BAD SECRET. I have to tell!\"" },
        scene: { focus: 340, bg: "living", props: [{ k: "cloud", x: 340, y: 170, s: 0.6 }], mo: [{ pose: "idea", x: 390 }] },
      },
      {
        text: { id: "\"Tepat sekali,\" kata Abi. \"Tidak ada rahasia tentang tubuh. Semuanya boleh diceritakan ke Umi atau Abi — kapan saja.\"", en: "\"Exactly,\" said Abi. \"There are no secrets about bodies. You can tell Umi or Abi anything — any time.\"" },
        scene: { focus: 330, bg: "living", mo: [{ who: "ayah", pose: "kneel-arms-open", x: 270 }, { pose: "pose-41", x: 400 }], fx: ["hearts"] },
      },
      {
        text: { id: "\"Kalau aku cerita, Abi marah nggak?\" bisik Baby Ais. Abi memeluknya. \"Tidak pernah. Kalau ada yang berbuat begitu, itu BUKAN salahmu. Abi akan menjagamu.\"", en: "\"If I tell, will you be cross?\" whispered Baby Ais. Abi hugged her. \"Never. If anyone does that, it is NOT your fault. I'll keep you safe.\"" },
        scene: { focus: 330, bg: "bedroom", time: "night", mo: [{ who: "ais", pose: "hug-heart", x: 400 }, { who: "ayah", pose: "hand-heart-kneel", x: 270 }], fx: ["hearts"] },
      },
      {
        text: { id: "Besoknya di pantai, si kembar memakai baju renang yang menutup rapi. Mereka berganti baju di ruang bilas, bukan di pinggir pantai.", en: "The next day at the beach, the twins wore swimsuits that covered them neatly. They changed in the changing room, not on the sand." },
        scene: { focus: 360, bg: "beach", props: [{ k: "swimring", x: 470 }, { k: "towel", x: 560 }], mo: [{ pose: "pose-21", x: 350 }] },
      },
      {
        text: { id: "Mereka bermain air, tertawa, dan berenang dengan pelampung bersama Abi. Byur! Ciprat! Seru sekali!", en: "They splashed, laughed and swam with their rings alongside Abi. Splash! Splosh! Such fun!" },
        scene: { focus: 340, bg: "beach", props: [{ k: "swimring", x: 330, y: 400 }], mo: [{ who: "ais", pose: "jump-joy", x: 260, move: "hop" }, { pose: "yeyy", x: 420, move: "hop" }], fx: ["bubbles"] },
      },
      {
        text: { id: "Malamnya Baby Mo berdoa, \"Terima kasih, ya Allah, untuk tubuhku. Aku akan menjaganya.\"", en: "That night Baby Mo prayed, \"Thank you, ya Allah, for my body. I'll look after it.\"" },
        scene: { bg: "bedroom", time: "night", mo: [{ pose: "pose-35", x: 360 }], fx: ["stars"] },
      },
      {
        text: { id: "Ayo ingat bersama: apa aturan baju renang? Dan apa bedanya rahasia dengan kejutan? 💛", en: "Let's remember together: what's the swimsuit rule? And what's the difference between a secret and a surprise? 💛" },
        scene: { focus: 330, bg: "living", props: [{ k: "swimring", x: 480 }], mo: [{ pose: "pose-08", x: 340 }], fx: ["sparkle"] },
      },
    ],
  },

  /* ───────────────────────── Practical 3. Vaccine day ───────────────────────── */
  {
    slug: "jarum-kecil-pahlawan-besar",
    pose: "baby-mo-yes.png",
    published: "2026-11-13",
    title: { id: "Jarum Kecil, Pahlawan Besar", en: "Little Needle, Big Hero" },
    hook: {
      id: "Hari ini si kembar imunisasi di Posyandu. Baby Mo takut jarum! Tapi ia belajar trik meniup lilin… dan tentang pasukan kecil yang menjaga tubuhnya.",
      en: "Today the twins get their vaccines at the Posyandu. Baby Mo is scared of needles! But he learns the candle-blowing trick… and about the tiny army that guards his body.",
    },
    anchor: { type: "doa", slug: "ketika-sakit" },
    takeaway: {
      id: "Anak lebih berani saat diberi tahu dengan jujur: sakitnya sebentar, ada trik napas, dan menangis itu boleh. Imunisasi adalah ikhtiar menjaga tubuh — amanah dari Allah.",
      en: "Children are braver when told the truth: it hurts just a little, there's a breathing trick, and crying is allowed. Vaccines are an effort to protect the body — a gift from Allah.",
    },
    tags: ["imunisasi", "posyandu", "kesehatan", "berani", "si kembar", "abi"],
    card: {
      title: { id: "Supaya Imunisasi Lebih Tenang", en: "For a Calmer Vaccine Visit" },
      items: {
        id: [
          "Jujur tapi lembut: \"Rasanya seperti digigit semut sebentar, lalu selesai.\" Jangan bilang \"nggak sakit\".",
          "Pangku dan peluk anak, lalu ajak \"tiup lilin\" pelan-pelan saat disuntik. Puji keberaniannya — menangis tetap boleh.",
          "Demam ringan atau pegal sesudahnya biasa: beri minum, istirahat, dan peluk. Kalau demam tinggi atau ragu, hubungi tenaga kesehatan.",
        ],
        en: [
          "Honest but gentle: \"It feels like a quick ant bite, then it's done.\" Don't say \"it won't hurt\".",
          "Hold them on your lap, and \"blow out a candle\" slowly together during the injection. Praise their courage — crying is still okay.",
          "A mild fever or a sore arm afterwards is common: drinks, rest and cuddles. If the fever is high or you're unsure, contact a health worker.",
        ],
      },
    },
    cover: {
      focus: 360, bg: "clinic",
      props: [{ k: "plaster", x: 470, y: 230 }, { k: "germs", x: 560, y: 260, s: 0.7 }],
      mo: [{ pose: "yes", x: 360 }],
      fx: ["sparkle"],
    },
    pages: [
      {
        text: { id: "Pagi itu Abi berkata, \"Hari ini kita ke Posyandu. Si kembar ditimbang, diukur, dan imunisasi.\"", en: "That morning Abi said, \"Today we're going to the Posyandu. The twins will be weighed, measured, and get their vaccines.\"" },
        scene: { focus: 330, bg: "living", mo: [{ who: "ayah", pose: "check-watch", x: 260 }, { pose: "pose-33", x: 390 }] },
      },
      {
        text: { id: "\"Imunisasi itu disuntik?\" Baby Mo langsung bersembunyi di balik sofa. \"Aku nggak mau! Jarumnya sakit!\"", en: "\"Vaccines mean injections?\" Baby Mo dived behind the sofa. \"I don't want to! Needles hurt!\"" },
        scene: { bg: "living", mo: [{ pose: "pose-10", x: 360, move: "sway" }] },
      },
      {
        text: { id: "Abi berlutut. \"Abi jujur, ya: rasanya seperti digigit semut sebentar. Lalu selesai. Dan Abi punya trik rahasia.\"", en: "Abi knelt down. \"I'll be honest: it feels like a quick ant bite. Then it's done. And I've got a secret trick.\"" },
        scene: { focus: 330, bg: "living", props: [{ k: "ants", x: 470 }], mo: [{ who: "ayah", pose: "teach-point-kneel", x: 270 }, { pose: "pose-40", x: 400 }] },
      },
      {
        text: { id: "Di Posyandu ramai sekali. Ada bayi, kakak-kakak, dan ibu-ibu kader yang ramah. Baby Ais menunjuk timbangan yang tergantung. \"Itu ayunan?\"", en: "The Posyandu was busy. Babies, big kids, and friendly volunteer mums. Baby Ais pointed at the hanging scale. \"Is that a swing?\"" },
        scene: { focus: 380, bg: "clinic", props: [{ k: "dacin", x: 470 }], mo: [{ who: "ais", pose: "think-question", x: 330 }] },
      },
      {
        text: { id: "\"Itu dacin, timbangan bayi,\" kata Abi. Si kembar ditimbang bergantian. \"Masya Allah, beratnya naik! Sehat!\"", en: "\"That's a dacin, a baby scale,\" said Abi. The twins took turns being weighed. \"Masha Allah, you've grown heavier! Healthy!\"" },
        scene: { focus: 380, bg: "clinic", props: [{ k: "dacin", x: 470 }], mo: [{ pose: "yeyy", x: 340, move: "hop" }], fx: ["sparkle"] },
      },
      {
        text: { id: "Lalu tinggi badan diukur di papan berwarna. \"Aku sudah sampai garis kuning!\" seru Baby Ais bangga.", en: "Then their height was measured on the colourful chart. \"I've reached the yellow line!\" Baby Ais said proudly." },
        scene: { focus: 520, bg: "clinic", mo: [{ who: "ais", pose: "arms-wide-joy", x: 560 }], fx: ["sparkle"] },
      },
      {
        text: { id: "Sambil menunggu, Abi bercerita. \"Di dunia ada kuman-kuman kecil yang bikin sakit. Kita tidak bisa melihat mereka.\"", en: "While they waited, Abi told a story. \"There are tiny germs in the world that make us ill. We can't see them.\"" },
        scene: { focus: 350, bg: "clinic", props: [{ k: "germs", x: 480, y: 280 }], mo: [{ pose: "pose-26", x: 330 }] },
      },
      {
        text: { id: "\"Imunisasi itu seperti mengajari tubuhmu mengenali kuman, jadi tubuhmu punya pasukan kecil yang siap menjaga.\"", en: "\"A vaccine is like teaching your body to recognise the germs, so it has a tiny army ready to protect you.\"" },
        scene: { focus: 350, bg: "clinic", props: [{ k: "germs", x: 500, y: 280, s: 0.8 }, { k: "goldstar", x: 400, y: 220, s: 0.8 }], mo: [{ pose: "yes", x: 330 }], fx: ["sparkle"] },
      },
      {
        text: { id: "\"Menjaga tubuh itu juga ibadah,\" tambah Abi. \"Rasulullah ﷺ mengajarkan kita berobat dan berikhtiar supaya sehat.\"", en: "\"Looking after our bodies is worship too,\" Abi added. \"The Prophet ﷺ taught us to seek treatment and make an effort to stay healthy.\"" },
        quote: { id: "\"Berobatlah, karena Allah tidak menurunkan penyakit kecuali menurunkan pula obatnya.\" (HR. Abu Dawud dan Tirmidzi)", en: "\"Seek treatment, for Allah has not sent down a disease without also sending down its cure.\" (Abu Dawud and Tirmidhi)" },
        scene: { focus: 330, bg: "clinic", mo: [{ who: "ayah", pose: "teach-point-kneel", x: 270 }, { who: "ais", pose: "sit-chin-hands", x: 400 }] },
      },
      {
        text: { id: "\"Baby Mo!\" panggil bu bidan. Kaki Baby Mo gemetar. Abi memangkunya dan memeluknya erat.", en: "\"Baby Mo!\" called the midwife. Baby Mo's legs wobbled. Abi sat him on his lap and held him tight." },
        scene: { bg: "clinic", mo: [{ who: "ayah", pose: "hug-mo", x: 360 }] },
      },
      {
        text: { id: "\"Sekarang trik rahasia,\" bisik Abi. \"Bayangkan ada lilin ulang tahun. Tarik napas… lalu tiup pelaaan… fuuuh.\"", en: "\"Now the secret trick,\" Abi whispered. \"Imagine a birthday candle. Breathe in… then blow sloooowly… fwoooo.\"" },
        scene: { focus: 380, bg: "clinic", props: [{ k: "candle", x: 470 }], mo: [{ pose: "pose-07", x: 370 }], fx: ["sparkle"] },
      },
      {
        text: { id: "Fuuuh… cekit! Seperti digigit semut. Baby Mo meringis, air matanya keluar sedikit… lalu selesai!", en: "Fwoooo… prick! Like an ant bite. Baby Mo winced, a little tear came out… and then it was over!" },
        scene: { bg: "clinic", props: [{ k: "candle", x: 480 }], mo: [{ pose: "pose-27", x: 360 }] },
      },
      {
        text: { id: "Bu bidan menempelkan plester bergambar bintang. \"Kamu berani sekali.\" \"Tapi aku nangis,\" kata Baby Mo. \"Berani itu boleh sambil nangis,\" jawab Abi.", en: "The midwife stuck on a star plaster. \"You were so brave.\" \"But I cried,\" said Baby Mo. \"You can be brave and cry at the same time,\" said Abi." },
        scene: { focus: 360, bg: "clinic", props: [{ k: "plaster", x: 470, y: 230 }], mo: [{ pose: "pose-25", x: 360 }], fx: ["sparkle"] },
      },
      {
        text: { id: "Giliran Baby Ais. Ia meniup lilin bayangan lebih panjang dari Baby Mo. Fuuuuuuh! Lalu tos dengan kembarannya.", en: "Baby Ais's turn. She blew her pretend candle even longer than Baby Mo. Fwooooooo! Then she high-fived her twin." },
        scene: { focus: 330, bg: "clinic", props: [{ k: "candle", x: 470 }], mo: [{ who: "ais", pose: "trophy-cheer", x: 290 }, { pose: "yeyy", x: 400, move: "hop" }], fx: ["confetti"] },
      },
      {
        text: { id: "Malamnya badan Baby Mo agak hangat. Abi memberinya minum dan memeluknya. \"Itu tanda pasukan kecilmu sedang berlatih.\"", en: "That night Baby Mo felt a little warm. Abi gave him a drink and a cuddle. \"That's your tiny army doing its training.\"" },
        scene: { focus: 330, bg: "bedroom", time: "night", props: [{ k: "cup", x: 470 }], mo: [{ pose: "pose-12", x: 400 }, { who: "ayah", pose: "hand-heart-kneel", x: 270 }], fx: ["stars"] },
      },
      {
        text: { id: "Kalau kamu imunisasi nanti, trik apa yang mau kamu pakai? Coba tiup lilin bayanganmu sekarang: fuuuh! 🕯️", en: "When it's your turn for a vaccine, which trick will you use? Try blowing your pretend candle now: fwoooo! 🕯️" },
        scene: { bg: "living", props: [{ k: "candle", x: 470 }], mo: [{ pose: "pose-07", x: 340 }], fx: ["sparkle"] },
      },
    ],
  },

  /* ───────────────────────── Practical 4. Three jars ───────────────────────── */
  {
    slug: "celengan-raket-impian-kak-adam",
    pose: "baby-mo-pose-08.png",
    published: "2026-11-14",
    title: { id: "Celengan Raket Impian Kak Adam", en: "Kak Adam's Racket Savings Jar" },
    hook: {
      id: "Kak Adam ingin raket baru seharga 300 ribu. Abi memberinya tiga toples: SEDEKAH, TABUNG, dan JAJAN. Bisakah ia menabung — tanpa tergoda es krim setiap hari?",
      en: "Kak Adam wants a new racket that costs 300 thousand. Abi gives him three jars: GIVE, SAVE and SPEND. Can he save up — without buying ice cream every day?",
    },
    anchor: { type: "doa", slug: "mendapat-rezeki" },
    takeaway: {
      id: "Kebiasaan uang yang baik dimulai dari toples kecil: berbagi dulu, menabung untuk tujuan, dan jajan secukupnya. Menunggu sesuatu yang diinginkan membuat hasilnya terasa lebih manis.",
      en: "Good money habits start with small jars: give first, save for a goal, and spend a little. Waiting for something you want makes it feel even sweeter.",
    },
    tags: ["menabung", "uang", "sedekah", "kak adam", "sabar", "butuh atau ingin"],
    card: {
      title: { id: "Mengenalkan Uang pada Anak", en: "Teaching Kids About Money" },
      items: {
        id: [
          "Siapkan tiga toples — Sedekah, Tabung, Jajan — dan biasakan membagi setiap uang yang diterima, dimulai dari sedekah.",
          "Latih \"butuh atau ingin?\" dengan pertanyaan sederhana: \"Kalau tidak dibeli sekarang, apa yang terjadi?\"",
          "Buat target bergambar dan hitung minggunya bersama. Rayakan saat tercapai — dan biarkan anak membayar sendiri di kasir.",
        ],
        en: [
          "Set up three jars — Give, Save, Spend — and make a habit of splitting every bit of money, starting with giving.",
          "Practise \"need or want?\" with a simple question: \"If we don't buy it now, what happens?\"",
          "Make a picture goal and count the weeks together. Celebrate when you get there — and let your child pay at the till themselves.",
        ],
      },
    },
    cover: {
      focus: 360, bg: "living",
      props: [{ k: "jars3", x: 470 }, { k: "pricetag", x: 300, y: 260 }],
      mo: [{ who: "adam", pose: "sedekah-coin", x: 330 }],
      fx: ["sparkle"],
    },
    pages: [
      {
        text: { id: "Kak Adam tumbuh tinggi. Raket lamanya sekarang terasa kecil. Di toko olahraga, ia melihat raket biru yang keren sekali.", en: "Kak Adam had grown taller. His old racket felt small now. At the sports shop he spotted a really cool blue racket." },
        scene: { focus: 380, bg: "market", props: [{ k: "racket", x: 470, y: 330, s: 1.2 }, { k: "pricetag", x: 440, y: 230, s: 0.9 }], mo: [{ who: "adam", pose: "surprised-hands-up", x: 350 }], fx: ["sparkle"] },
      },
      {
        text: { id: "Lalu ia melihat label harganya: Rp 300.000. \"Tiga ratus ribu?!\" Matanya membulat.", en: "Then he saw the price tag: Rp 300,000. \"Three hundred thousand?!\" His eyes went round." },
        scene: { focus: 380, bg: "market", props: [{ k: "pricetag", x: 420, y: 240, s: 1.1 }], mo: [{ who: "adam", pose: "worried-bite-lip", x: 350 }] },
      },
      {
        text: { id: "\"Abi, belikan, ya?\" Abi tersenyum. \"Bagaimana kalau Kak Adam menabung sendiri? Abi bantu caranya.\"", en: "\"Abi, can you buy it?\" Abi smiled. \"How about you save up for it yourself? I'll show you how.\"" },
        scene: { focus: 340, bg: "market", mo: [{ who: "ayah", pose: "teach-point-kneel", x: 270 }, { who: "adam", pose: "sorry-hands", x: 410 }] },
      },
      {
        text: { id: "Di rumah, Abi menaruh tiga toples di meja. \"Ini toples SEDEKAH, ini TABUNG, dan ini JAJAN. Setiap dapat uang, kita bagi tiga.\"", en: "At home, Abi set three jars on the table. \"This is the GIVE jar, this is SAVE, and this is SPEND. Whenever you get money, we split it three ways.\"" },
        scene: { focus: 390, bg: "living", props: [{ k: "jars3", x: 470 }], mo: [{ who: "ayah", pose: "kneel-present", x: 270 }] },
      },
      {
        text: { id: "\"Kenapa sedekah duluan?\" tanya Baby Mo. \"Karena rezeki itu dari Allah,\" kata Abi. \"Kita berbagi dulu, baru menyimpan untuk diri sendiri.\"", en: "\"Why does giving come first?\" asked Baby Mo. \"Because everything we have comes from Allah,\" said Abi. \"We share first, then save for ourselves.\"" },
        scene: { focus: 360, bg: "living", props: [{ k: "jars3", x: 470 }], mo: [{ pose: "pose-33", x: 330 }], fx: ["sparkle"] },
      },
      {
        text: { id: "Kak Adam mencari uang dengan membantu di rumah: menyapu teras, mencuci mobil Abi, dan merapikan bola tenis.", en: "Kak Adam earned money by helping at home: sweeping the porch, washing Abi's car, and tidying up the tennis balls." },
        scene: { focus: 380, bg: "street", props: [{ k: "brooms", x: 480 }, { k: "bucket", x: 300 }], mo: [{ who: "adam", pose: "carry-bags", x: 390 }] },
      },
      {
        text: { id: "Setiap Ahad, ting-ting-ting! Koin masuk ke tiga toples. Toples TABUNG makin penuh.", en: "Every Sunday, ting-ting-ting! Coins went into the three jars. The SAVE jar grew fuller and fuller." },
        scene: { focus: 390, bg: "living", props: [{ k: "jars3", x: 470 }], mo: [{ who: "adam", pose: "sedekah-coin", x: 330 }], fx: ["sparkle"] },
      },
      {
        text: { id: "Lalu datang ujian: gerobak es krim lewat. Teng-teng-teng! Si kembar bersorak. Kak Adam melirik toples TABUNG…", en: "Then came the test: the ice cream cart rolled by. Ting-a-ling! The twins cheered. Kak Adam glanced at the SAVE jar…" },
        scene: { focus: 380, bg: "street", props: [{ k: "icecreamcart", x: 520 }], mo: [{ who: "adam", pose: "worried-bite-lip", x: 380 }, { pose: "yeyy", x: 270, move: "hop" }] },
      },
      {
        text: { id: "Abi mengajak main tebak-tebakan. \"BUTUH atau INGIN? Air minum?\" \"BUTUH!\" \"Es krim setiap hari?\" Si kembar tertawa. \"INGIN!\"", en: "Abi started a guessing game. \"NEED or WANT? Drinking water?\" \"NEED!\" \"Ice cream every day?\" The twins giggled. \"WANT!\"" },
        scene: { focus: 330, bg: "street", props: [{ k: "water", x: 470 }, { k: "icecream", x: 540 }], mo: [{ who: "ais", pose: "idea-point", x: 280 }, { pose: "pose-03", x: 390 }] },
      },
      {
        text: { id: "Kak Adam memakai uang dari toples JAJAN saja: satu es krim kecil, dibagi tiga dengan adik-adiknya. Toples TABUNG tetap aman!", en: "Kak Adam used only the SPEND jar: one small ice cream, shared three ways with his little brother and sister. The SAVE jar stayed safe!" },
        scene: { focus: 340, bg: "street", props: [{ k: "icecream", x: 470 }], mo: [{ who: "ais", pose: "giggle", x: 270 }, { who: "adam", pose: "offer", x: 410 }], fx: ["hearts"] },
      },
      {
        text: { id: "Suatu hari, Dimas datang dengan sepatu yang sobek. \"Ibuku belum bisa beli yang baru.\" Kak Adam membuka toples SEDEKAH.", en: "One day, Dimas came over with torn shoes. \"My mum can't buy new ones yet.\" Kak Adam opened the GIVE jar." },
        scene: { focus: 380, bg: "living", props: [{ k: "shoes", x: 480 }, { k: "jars3", x: 300, s: 0.7 }], mo: [{ who: "adam", pose: "kneel-talk", x: 400 }] },
      },
      {
        text: { id: "Bersama Abi, mereka membelikan Dimas sepatu sederhana. Dimas tersenyum lebar. Dada Kak Adam terasa hangat sekali.", en: "Together with Abi, they bought Dimas a simple pair of shoes. Dimas grinned. Kak Adam's chest felt really warm." },
        quote: { id: "\"Dan orang-orang yang apabila membelanjakan (harta), mereka tidak berlebihan dan tidak (pula) kikir, di antara keduanya secara wajar.\" (QS. Al-Furqan: 67)", en: "\"And those who, when they spend, are neither wasteful nor stingy, but keep a balance between the two.\" (Qur'an, Al-Furqan 25:67)" },
        scene: { focus: 340, bg: "street", props: [{ k: "shoes", x: 470 }], mo: [{ who: "ayah", pose: "thumbs-up-stand", x: 270 }, { who: "adam", pose: "proud-hands-hips", x: 410 }], fx: ["hearts"] },
      },
      {
        text: { id: "Minggu demi minggu. Baby Mo mewarnai satu kotak di kertas target setiap Ahad. Tinggal tiga kotak… dua… SATU!", en: "Week after week. Every Sunday Baby Mo coloured one box on the goal chart. Three boxes left… two… ONE!" },
        scene: { focus: 390, bg: "living", props: [{ k: "progresschart", x: 450 }], mo: [{ pose: "pose-08", x: 320 }], fx: ["sparkle"] },
      },
      {
        text: { id: "Akhirnya toples TABUNG penuh! Mereka menghitung bersama: \"…dua ratus sembilan puluh… TIGA RATUS RIBU!\"", en: "At last the SAVE jar was full! They counted together: \"…two hundred and ninety… THREE HUNDRED THOUSAND!\"" },
        scene: { focus: 390, bg: "living", props: [{ k: "jars3", x: 470 }, { k: "coins", x: 330, y: 400 }], mo: [{ who: "adam", pose: "tennis-celebrate-1", seq: CELEBRATE, fps: 8, x: 330, move: "still" }], fx: ["confetti"] },
      },
      {
        text: { id: "Di toko, Kak Adam membayar sendiri di kasir. Raket biru itu kini miliknya — dan rasanya jauh lebih istimewa karena hasil tabungannya.", en: "At the shop, Kak Adam paid at the till himself. The blue racket was his now — and it felt so much more special because he'd saved for it." },
        scene: { focus: 380, bg: "market", props: [{ k: "counter", x: 470, s: 0.85 }], mo: [{ who: "adam", pose: "tennis-walk-racket", x: 330 }], fx: ["sparkle"] },
      },
      {
        text: { id: "Raket lamanya? Ia berikan untuk Baby Mo. \"Sekarang kita punya dua raket!\" Kamu sedang menabung untuk apa? 🪙", en: "And his old racket? He gave it to Baby Mo. \"Now we've got two rackets!\" What are you saving up for? 🪙" },
        scene: { focus: 340, bg: "court", props: [{ k: "racket", x: 270, y: 380 }], mo: [{ pose: "pose-25", x: 300 }, { who: "adam", pose: "give-ball", x: 430 }], fx: ["hearts"] },
      },
    ],
  },

  /* ───────────────────────── Practical 5. Eid at Nenek's ───────────────────────── */
  {
    slug: "lebaran-paling-seru-di-rumah-nenek",
    pose: "baby-mo-yeyy.png",
    published: "2026-11-14",
    title: { id: "Lebaran Paling Seru di Rumah Nenek", en: "The Best Eid Ever at Nenek's House" },
    hook: {
      id: "Takbir berkumandang, ketupat bergoyang, dan rumah Nenek penuh sepupu! Si kembar belajar cara bermaaf-maafan, berterima kasih atas amplop Lebaran… dan tidak makan sepuluh nastar.",
      en: "Takbir rings out, ketupat sway, and Nenek's house is full of cousins! The twins learn how to say sorry and forgive, how to say thank you for Eid money… and not to eat ten nastar cookies.",
    },
    anchor: { type: "hadith", slug: "silaturahmi-rezeki" },
    takeaway: {
      id: "Lebaran adalah sekolah adab yang paling meriah: bermaafan, menyambung silaturahmi, berterima kasih, dan berbagi. Latih kalimat-kalimatnya di rumah, supaya anak percaya diri di tengah keramaian.",
      en: "Eid is the liveliest school of good manners: forgiving each other, keeping family ties, saying thank you and sharing. Practise the words at home so children feel confident in the crowd.",
    },
    tags: ["lebaran", "idul fitri", "silaturahmi", "maaf", "terima kasih", "keluarga"],
    card: {
      title: { id: "Adab Lebaran untuk Si Kecil", en: "Eid Manners for Little Ones" },
      items: {
        id: [
          "Latih kalimatnya di rumah: salam sambil menyalami, \"mohon maaf lahir dan batin\", dan \"terima kasih, semoga Allah membalas\".",
          "Amplop Lebaran dibuka di rumah, tidak dibandingkan dengan sepupu. Ajak anak menyisihkan sebagian untuk sedekah.",
          "Keramaian bisa melelahkan: siapkan pojok tenang untuk istirahat, ingatkan minum air, dan batasi kue manis.",
        ],
        en: [
          "Practise the words at home: salam with a handshake, \"mohon maaf lahir dan batin\" (please forgive me, inside and out), and \"thank you, may Allah reward you\".",
          "Eid money envelopes are opened at home, not compared with cousins. Encourage setting some aside to give.",
          "Crowds can be tiring: plan a quiet corner for a break, remind them to drink water, and go easy on the sweet cookies.",
        ],
      },
    },
    cover: {
      focus: 340, bg: "mosque",
      props: [{ k: "ketupat", x: 400, y: 280 }, { k: "lantern", x: 560, y: 200 }],
      mo: [{ pose: "yeyy", x: 330, move: "hop" }, { who: "ais", pose: "arms-wide-joy", x: 220 }, { who: "adam", pose: "clap-cheer", x: 450 }],
      fx: ["confetti"],
    },
    pages: [
      {
        text: { id: "Malam terakhir Ramadan, takbir berkumandang dari masjid: \"Allahu Akbar, Allahu Akbar, Allahu Akbar, laa ilaaha illallahu wallahu akbar…\"", en: "On the last night of Ramadan, the takbir rang out from the mosque: \"Allahu Akbar, Allahu Akbar, Allahu Akbar, laa ilaaha illallahu wallahu akbar…\"" },
        scene: { focus: 340, bg: "street", time: "night", props: [{ k: "minaret", x: 560, y: 300, s: 0.7 }, { k: "lantern", x: 470, y: 230 }], mo: [{ pose: "pose-30", x: 330, move: "sway" }, { who: "ais", pose: "lantern", x: 230 }], fx: ["stars", "notes"] },
      },
      {
        text: { id: "Pagi Idul Fitri, semua memakai baju baru. Mereka sholat Id di lapangan masjid, berjajar rapi bersama ratusan orang.", en: "On Eid morning, everyone wore new clothes. They prayed the Eid prayer at the mosque grounds, lined up neatly with hundreds of people." },
        scene: { focus: 340, bg: "mosque", props: [{ k: "mat", x: 330 }], mo: [{ who: "adam", pose: "sholat-qiyam", x: 450 }, { pose: "pose-35", x: 330 }], fx: ["sparkle"] },
      },
      {
        text: { id: "Lalu mudik ke rumah Nenek! Di depan pintu tergantung ketupat yang bergoyang tertiup angin.", en: "Then off to Nenek's house! Ketupat hung by the door, swaying in the breeze." },
        scene: { focus: 360, bg: "street", props: [{ k: "ketupat", x: 420, y: 280 }, { k: "car", x: 230, s: 1.0 }], mo: [{ pose: "run", x: 380, move: "hop" }] },
      },
      {
        text: { id: "Di dalam, sepupu-sepupu berlarian dan ada bau opor yang lezat. Ramai sekali! Baby Ais memegang erat tangan Kak Adam.", en: "Inside, cousins were running everywhere and there was a delicious smell of opor. So noisy! Baby Ais held Kak Adam's hand tight." },
        scene: { focus: 340, bg: "living", props: [{ k: "soup", x: 520 }], mo: [{ who: "adam", pose: "hold-hand-down", x: 410 }, { who: "ais", pose: "peek-wall", x: 290 }] },
      },
      {
        text: { id: "\"Ingat yang kita latih?\" bisik Abi. Si kembar mengangguk dan menyalami Nenek: \"Assalamu'alaikum, Nenek. Mohon maaf lahir dan batin.\"", en: "\"Remember what we practised?\" whispered Abi. The twins nodded and greeted Nenek: \"Assalamu'alaikum, Nenek. Mohon maaf lahir dan batin.\"" },
        scene: { focus: 330, bg: "living", mo: [{ who: "ais", pose: "dua-hands-closed", x: 280 }, { pose: "thank-you", x: 390 }], fx: ["hearts"] },
      },
      {
        text: { id: "\"Lahir dan batin itu apa?\" tanya Baby Mo. \"Kesalahan yang kelihatan dan yang tersembunyi di hati,\" jawab Abi. \"Lebaran itu waktunya hati bersih lagi.\"", en: "\"What does 'inside and out' mean?\" asked Baby Mo. \"Mistakes people can see, and ones hidden in our hearts,\" said Abi. \"Eid is when our hearts get clean again.\"" },
        scene: { focus: 330, bg: "living", mo: [{ who: "ayah", pose: "hand-heart-kneel", x: 270 }, { pose: "pose-33", x: 400 }], fx: ["sparkle"] },
      },
      {
        text: { id: "Lalu Kak Adam meminta maaf pada sepupunya, Fatih. \"Maaf ya, waktu itu aku menang tenis sambil menyombong.\" Fatih tertawa. \"Aku juga minta maaf!\"", en: "Then Kak Adam said sorry to his cousin Fatih. \"Sorry I showed off when I won at tennis.\" Fatih laughed. \"I'm sorry too!\"" },
        scene: { focus: 390, bg: "living", mo: [{ who: "adam", pose: "salaman", x: 390 }], fx: ["hearts"] },
      },
      {
        text: { id: "Om Fahri membagikan amplop Lebaran. Baby Mo hampir langsung membukanya! Abi berbisik, \"Terima kasih dulu, dan dibukanya nanti di rumah.\"", en: "Uncle Fahri handed out Eid money envelopes. Baby Mo almost ripped his open! Abi whispered, \"Say thank you first, and open it later at home.\"" },
        scene: { focus: 360, bg: "living", props: [{ k: "envelope", x: 430, y: 270 }], mo: [{ pose: "pose-26", x: 350 }] },
      },
      {
        text: { id: "\"Terima kasih, Om. Semoga Allah membalas kebaikan Om,\" kata Baby Mo. Om Fahri tersenyum lebar.", en: "\"Thank you, Uncle. May Allah reward your kindness,\" said Baby Mo. Uncle Fahri grinned." },
        scene: { focus: 360, bg: "living", props: [{ k: "envelope", x: 430, y: 270 }], mo: [{ pose: "thank-you", x: 350 }], fx: ["hearts"] },
      },
      {
        text: { id: "Sepupu Rara pamer, \"Amplopku lebih tebal!\" Baby Ais cemberut. Kak Adam berbisik, \"Rezeki tidak untuk dibandingkan, Ais. Semuanya hadiah.\"", en: "Cousin Rara boasted, \"My envelope's thicker!\" Baby Ais pouted. Kak Adam whispered, \"Gifts aren't for comparing, Ais. They're all presents.\"" },
        scene: { focus: 340, bg: "living", props: [{ k: "envelope", x: 430, y: 250 }], mo: [{ who: "ais", pose: "grumpy", x: 280 }, { who: "adam", pose: "kneel-talk", x: 420 }] },
      },
      {
        text: { id: "Di meja ada toples nastar yang harum. Satu… dua… tiga… Baby Mo mengambil yang keempat. \"Perutku penuh nanas!\"", en: "On the table was a jar of fragrant nastar pineapple cookies. One… two… three… Baby Mo reached for a fourth. \"My tummy's full of pineapple!\"" },
        scene: { focus: 360, bg: "kitchen", props: [{ k: "cookiejar", x: 440 }], mo: [{ pose: "pose-05", x: 350 }] },
      },
      {
        text: { id: "\"Tiga cukup, sekarang minum air putih,\" kata Abi. \"Nanti masih ada ketupat dan opor!\" Baby Mo meneguk air sampai habis.", en: "\"Three's enough, now have some water,\" said Abi. \"There's still ketupat and opor to come!\" Baby Mo gulped down his water." },
        scene: { focus: 330, bg: "kitchen", props: [{ k: "water", x: 470 }], mo: [{ who: "ayah", pose: "stern-gentle", x: 260 }, { pose: "pose-04", x: 390 }] },
      },
      {
        text: { id: "Setelah makan ketupat dan opor bersama, Nenek bercerita bahwa menyambung silaturahmi membuat rezeki lapang dan umur berkah.", en: "After eating ketupat and opor together, Nenek explained that keeping family ties brings blessings in what we have and in our lives." },
        quote: { id: "\"Barang siapa ingin dilapangkan rezekinya dan dipanjangkan umurnya, hendaklah ia menyambung silaturahmi.\" (HR. Bukhari dan Muslim)", en: "\"Whoever would like their provision to be increased and their life to be blessed, let them keep ties with their family.\" (Bukhari and Muslim)" },
        scene: { focus: 340, bg: "living", props: [{ k: "ketupat", x: 470, y: 280 }, { k: "soup", x: 300 }], mo: [{ pose: "pose-12", x: 380 }, { who: "ais", pose: "sit-chin-hands", x: 260 }] },
      },
      {
        text: { id: "Sore itu Baby Ais lelah dengan keramaian. Abi mengajaknya ke teras yang sepi. Mereka duduk berdua, menarik napas panjang.", en: "That afternoon Baby Ais got tired of the noise. Abi took her out to the quiet porch. They sat together and took long, slow breaths." },
        scene: { focus: 330, bg: "garden", time: "dusk", mo: [{ who: "ayah", pose: "calm-sit", x: 270 }, { who: "ais", pose: "calm-sit", x: 400 }] },
      },
      {
        text: { id: "Di rumah, mereka membuka amplop. Si kembar menyisihkan sebagian untuk toples sedekah — seperti Kak Adam. Ting! Ting!", en: "At home, they opened the envelopes. The twins put some aside in the giving jar — just like Kak Adam. Ting! Ting!" },
        scene: { focus: 360, bg: "living", time: "night", props: [{ k: "jars3", x: 470 }], mo: [{ pose: "pose-08", x: 320 }], fx: ["sparkle"] },
      },
      {
        text: { id: "\"Lebaran paling seru!\" kata Baby Mo sebelum tidur. Kamu sudah hafal kalimat Lebaran? Coba ucapkan: \"Mohon maaf lahir dan batin!\" 🌙", en: "\"The best Eid ever!\" said Baby Mo before bed. Do you know the Eid words? Try saying: \"Mohon maaf lahir dan batin!\" 🌙" },
        scene: { focus: 330, bg: "bedroom", time: "night", props: [{ k: "ketupat", x: 470, y: 280 }], mo: [{ pose: "pose-39", x: 360 }, { who: "ais", pose: "sleep-pillow", x: 250 }], fx: ["stars"] },
      },
    ],
  },
  /* ───────────────────────── Umi 1. A day just for Umi ───────────────────────── */
  {
    slug: "satu-hari-untuk-umi",
    pose: "baby-mo-thank-you.png",
    published: "2026-11-15",
    title: { id: "Satu Hari untuk Umi", en: "A Day Just for Umi" },
    hook: {
      id: "Hari ini Umi libur! Abi dan anak-anak mengambil alih semua tugas Umi… dan ternyata daftarnya panjaaang sekali.",
      en: "Today Umi gets a day off! Abi and the children take over all of Umi's jobs… and the list turns out to be very, very long.",
    },
    anchor: { type: "hadith", slug: "berbakti-pada-ibu" },
    takeaway: {
      id: "Anak menghargai apa yang ia pahami. Saat anak ikut merasakan pekerjaan ibu, rasa terima kasih tumbuh dengan sendirinya — dan Rasulullah ﷺ menyebut ibu tiga kali sebelum ayah.",
      en: "Children value what they understand. When they get to feel a mother's work for themselves, gratitude grows on its own — and the Prophet ﷺ named the mother three times before the father.",
    },
    tags: ["umi", "ibu", "berbakti", "membantu", "terima kasih", "keluarga"],
    card: {
      title: { id: "Mengajak Anak Menghargai Umi", en: "Helping Children Appreciate Mum" },
      items: {
        id: [
          "Beri tugas kecil sesuai usia: 2–3 tahun merapikan mainan dan menaruh baju kotor di keranjang; 4–5 tahun menyiram tanaman dan menata meja; 7 tahun ke atas menyapu dan melipat baju.",
          "Ceritakan pekerjaan yang tak terlihat: \"Umi sedang memasak supaya kita kuat.\" Anak menghargai apa yang ia pahami.",
          "Biasakan \"terima kasih, Umi\" setiap hari, dan sesekali buat \"Hari Istimewa untuk Umi\" bersama Abi.",
        ],
        en: [
          "Give small jobs by age: 2–3 years tidy toys and put dirty clothes in the basket; 4–5 years water plants and set the table; 7 and up sweep and fold clothes.",
          "Name the invisible work: \"Umi is cooking so we grow strong.\" Children value what they understand.",
          "Make \"thank you, Umi\" a daily habit, and now and then plan a \"Special Day for Umi\" with Abi.",
        ],
      },
    },
    cover: {
      focus: 340, bg: "living",
      props: [{ k: "card", x: 420, y: 330 }],
      mo: [{ who: "umi", pose: "touched-cheek", x: 250 }, { pose: "thank-you", x: 360 }, { who: "ais", pose: "heart-hands", x: 440 }],
      fx: ["hearts"],
    },
    pages: [
      {
        text: { id: "Malam itu Abi berbisik kepada anak-anak: \"Ssst! Besok hari istimewa untuk Umi. Umi istirahat, kita yang mengerjakan semua tugas Umi.\"", en: "That night Abi whispered to the children: \"Shh! Tomorrow is a special day for Umi. Umi rests, and we do all of Umi's jobs.\"" },
        scene: { focus: 340, bg: "living", time: "night", props: [{ k: "lamp", x: 470 }], mo: [{ who: "ayah", pose: "idea-point-stand", x: 260 }, { pose: "pose-03", x: 380 }, { who: "ais", pose: "giggle", x: 450 }], fx: ["stars"] },
      },
      {
        text: { id: "Pagi-pagi, si kembar berbaris di depan Umi. \"Selamat pagi, Umi! Hari ini Umi duduk saja, ya!\" Umi menempelkan tangan di pipinya. \"Masya Allah…\"", en: "Early in the morning, the twins lined up in front of Umi. \"Good morning, Umi! Today you just sit, okay?\" Umi pressed her hands to her cheek. \"Masya Allah…\"" },
        scene: { focus: 340, bg: "living", mo: [{ who: "umi", pose: "touched-cheek", x: 260 }, { pose: "yeyy", x: 390, move: "hop" }, { who: "ais", pose: "arms-wide-joy", x: 470 }], fx: ["sparkle"] },
      },
      {
        text: { id: "Kak Adam menulis daftar tugas Umi: memasak, belanja, mencuci baju, menyapu, menyiram bunga, membacakan cerita… Daftarnya makin panjang!", en: "Kak Adam wrote a list of Umi's jobs: cooking, shopping, washing clothes, sweeping, watering the flowers, reading stories… The list kept getting longer!" },
        scene: { focus: 350, bg: "living", props: [{ k: "card", x: 330, y: 400, s: 0.8 }], mo: [{ who: "adam", pose: "write-card-floor", x: 300 }, { pose: "pose-23", x: 420 }] },
      },
      {
        text: { id: "\"Banyak sekali!\" kata Baby Mo. \"Umi mengerjakan semua ini setiap hari?\" Abi mengangguk. \"Setiap hari, tanpa libur.\"", en: "\"That's so many!\" said Baby Mo. \"Umi does all this every day?\" Abi nodded. \"Every day, with no days off.\"" },
        scene: { focus: 340, bg: "living", mo: [{ who: "ayah", pose: "think-chin-stand", x: 260 }, { pose: "wow", x: 400 }], fx: ["sparkle"] },
      },
      {
        text: { id: "Tugas pertama: sarapan. Abi menggoreng telur dan Kak Adam mengocok adonan pancake. Dapur jadi berisik dan wangi!", en: "Job one: breakfast. Abi fried the eggs and Kak Adam whisked the pancake batter. The kitchen got noisy and smelled delicious!" },
        scene: { focus: 340, bg: "kitchen", props: [{ k: "egg", x: 440, y: 330 }], mo: [{ who: "ayah", pose: "cook-pan", x: 270 }, { who: "adam", pose: "stir-bowl", x: 390 }] },
      },
      {
        text: { id: "Baby Ais menyiram bunga di teras. Byur! Bunganya basah… sandal Ais juga basah. Ais tertawa geli.", en: "Baby Ais watered the flowers on the porch. Splash! The flowers got wet… and so did Ais's sandals. Ais giggled." },
        scene: { focus: 340, bg: "garden", props: [{ k: "flowers", x: 440 }, { k: "puddle", x: 360 }], mo: [{ who: "ais", pose: "watering-can", x: 320 }], fx: ["sparkle"] },
      },
      {
        text: { id: "Baby Mo menyapu teras. Debu beterbangan ke hidungnya. Haaa-ciuuu! \"Alhamdulillah!\" kata Mo sambil tertawa.", en: "Baby Mo swept the porch. Dust flew up his nose. Aaa-choo! \"Alhamdulillah!\" said Mo, laughing." },
        scene: { focus: 340, bg: "garden", props: [{ k: "brooms", x: 420 }], mo: [{ pose: "pose-27", x: 320 }], fx: ["leaves"] },
      },
      {
        text: { id: "Lalu melipat baju. Lipatan Mo jadi gulungan seperti lemper, dan Ais memasukkan kaus kaki ke kantong baju Abi.", en: "Then folding the laundry. Mo's folds turned into rolls like lemper rice snacks, and Ais tucked socks into Abi's shirt pocket." },
        scene: { focus: 340, bg: "bedroom", props: [{ k: "shirt", x: 340, y: 380 }, { k: "shirtback", x: 430, y: 380 }], mo: [{ pose: "pose-33", x: 280 }, { who: "ais", pose: "shrug", x: 420 }] },
      },
      {
        text: { id: "Umi duduk membaca buku sambil minum teh hangat. Sesekali Umi tertawa melihat baju-baju yang menggulung lucu.", en: "Umi sat reading a book with a warm cup of tea. Every now and then she laughed at the funny rolled-up clothes." },
        scene: { focus: 340, bg: "living", props: [{ k: "cup", x: 440 }], mo: [{ who: "umi", pose: "read-sit", x: 330 }], fx: ["sparkle"] },
      },
      {
        text: { id: "Siang hari mereka berbelanja ke pasar bersama Abi. Belanjaan ternyata berat! Kak Adam membawa dua tas besar.", en: "At noon they went to the market with Abi. Shopping turned out to be heavy! Kak Adam carried two big bags." },
        scene: { focus: 340, bg: "market", props: [{ k: "veggies", x: 470, y: 255 }], mo: [{ who: "adam", pose: "carry-bags", x: 280 }, { pose: "run", x: 400 }] },
      },
      {
        text: { id: "Sore hari Baby Mo berbaring di lantai. \"Ternyata jadi Umi itu capek sekali ya…\" Ais mengangguk sambil menopang dagu.", en: "In the afternoon Baby Mo flopped on the floor. \"Being Umi is really tiring…\" Ais nodded, her chin in her hands." },
        scene: { focus: 340, bg: "living", mo: [{ pose: "pose-17", x: 300 }, { who: "ais", pose: "sit-chin-hands", x: 420 }] },
      },
      {
        text: { id: "Abi duduk bersama mereka. \"Ada yang bertanya kepada Rasulullah ﷺ, siapa yang paling berhak kita perlakukan dengan baik? Beliau menjawab: ibumu, ibumu, ibumu — baru kemudian ayahmu.\"", en: "Abi sat with them. \"Someone asked the Prophet ﷺ who deserves our kindness most. He answered: your mother, your mother, your mother — and then your father.\"" },
        quote: { id: "\"Ibumu.\" \"Kemudian siapa?\" \"Ibumu.\" \"Kemudian siapa?\" \"Ibumu.\" \"Kemudian siapa?\" \"Ayahmu.\" (HR. Bukhari dan Muslim)", en: "\"Your mother.\" \"Then who?\" \"Your mother.\" \"Then who?\" \"Your mother.\" \"Then who?\" \"Your father.\" (Bukhari and Muslim)" },
        scene: { focus: 340, bg: "living", mo: [{ who: "ayah", pose: "teach-book-sit", x: 270 }, { pose: "pose-06", x: 400 }] },
      },
      {
        text: { id: "Mereka membuat kartu besar: \"UMI, UMI, UMI ❤️\". Di pojok bawah ada tulisan kecil: \"Abi juga.\" Abi tertawa membacanya.", en: "They made a big card: \"UMI, UMI, UMI ❤️\". In the bottom corner, in tiny letters: \"Abi too.\" Abi laughed when he read it." },
        scene: { focus: 340, bg: "living", props: [{ k: "drawing", x: 380, y: 360 }], mo: [{ who: "ais", pose: "draw-crayons", x: 310 }, { pose: "pose-29", x: 430 }] },
      },
      {
        text: { id: "Malamnya mereka memberikan kartu itu. Umi menangkupkan tangan di dada. \"Alhamdulillah… Umi merasa sangat disayang hari ini.\"", en: "That evening they gave Umi the card. Umi put her hands to her heart. \"Alhamdulillah… Umi feels so loved today.\"" },
        scene: { focus: 340, bg: "living", time: "dusk", props: [{ k: "drawing", x: 400, y: 330 }], mo: [{ who: "umi", pose: "grateful-hands", x: 270 }, { pose: "pose-05", x: 390 }], fx: ["hearts"] },
      },
      {
        text: { id: "Mo berbisik, \"Umi, satu tugas boleh Umi kerjakan malam ini: memeluk Mo.\" Umi tertawa dan memeluknya erat-erat.", en: "Mo whispered, \"Umi, you can do just one job tonight: hug Mo.\" Umi laughed and hugged him tight." },
        scene: { focus: 340, bg: "bedroom", time: "night", props: [{ k: "teddy", x: 450 }], mo: [{ who: "umi", pose: "hug-mo", x: 330 }], fx: ["hearts", "stars"] },
      },
      {
        text: { id: "Sebelum tidur, Umi mendoakan mereka satu per satu. Apa yang bisa kamu bantu untuk Umimu hari ini? 💗", en: "Before sleep, Umi made du'a for each of them. What can you do to help your Umi today? 💗" },
        scene: { focus: 340, bg: "bedroom", time: "night", props: [{ k: "lamp", x: 470, s: 0.85 }], mo: [{ who: "umi", pose: "dua-stand", x: 260 }, { pose: "pose-12", x: 390, move: "sway" }], fx: ["zzz", "stars"] },
      },
    ],
  },
  /* ───────────────────────── Umi 2. Umi's little kitchen ───────────────────────── */
  {
    slug: "dapur-kecil-umi",
    pose: "baby-mo-yes.png",
    published: "2026-11-16",
    title: { id: "Koki Kecil di Dapur Umi", en: "Little Chefs in Umi's Kitchen" },
    hook: {
      id: "Hari ini si kembar jadi koki kecil! Ada aturan zona panas, wortel yang dihitung, telur yang jatuh — plok! — dan semangkuk sup untuk tetangga.",
      en: "Today the twins are little chefs! There's a hot-zone rule, carrots to count, an egg that goes — splat! — and a bowl of soup for the neighbour.",
    },
    anchor: { type: "hadith", slug: "tetangga-keluarga-luas" },
    takeaway: {
      id: "Dapur adalah ruang kelas yang lezat: anak belajar berhitung, sabar menunggu, bertanggung jawab saat tumpah, dan berbagi dengan tetangga — selama aturan amannya jelas.",
      en: "The kitchen is a delicious classroom: children learn counting, patience, owning their spills and sharing with neighbours — as long as the safety rules are clear.",
    },
    tags: ["umi", "memasak", "dapur", "keamanan", "tetangga", "berbagi"],
    card: {
      title: { id: "Memasak Bersama Balita dengan Aman", en: "Cooking Safely with Little Ones" },
      items: {
        id: [
          "Tugas sesuai usia: 2–3 tahun mencuci sayur dan mengaduk adonan dingin; 4–5 tahun menakar, menyobek sayur, memotong yang lembut dengan pisau plastik; 7 tahun ke atas memecah telur dan memotong dengan pendampingan.",
          "Buat \"zona panas\" yang jelas di sekitar kompor dan oven. Pisau tajam dan api tetap tugas orang dewasa.",
          "Cuci tangan pakai sabun 20 detik (dua kali lagu \"Selamat Ulang Tahun\"), dan anggap tumpahan sebagai bagian dari belajar — bereskan bersama.",
        ],
        en: [
          "Jobs by age: 2–3 years wash vegetables and stir cold mixtures; 4–5 years measure, tear leaves and cut soft food with a plastic knife; 7 and up crack eggs and cut with an adult beside them.",
          "Mark a clear \"hot zone\" around the stove and oven. Sharp knives and flames stay grown-up jobs.",
          "Wash hands with soap for 20 seconds (\"Happy Birthday\" twice), and treat spills as part of learning — clean up together.",
        ],
      },
    },
    cover: {
      focus: 340, bg: "kitchen",
      props: [{ k: "veggies", x: 470, y: 330 }],
      mo: [{ who: "umi", pose: "cook-stove", x: 290 }, { who: "ais", pose: "chef-whisk", x: 430 }],
      fx: ["sparkle"],
    },
    pages: [
      {
        text: { id: "Hari Sabtu, Umi bertanya, \"Siapa yang mau jadi koki kecil hari ini?\" \"Aku! Aku!\" teriak si kembar sambil melompat.", en: "On Saturday, Umi asked, \"Who wants to be a little chef today?\" \"Me! Me!\" shouted the twins, jumping up and down." },
        scene: { focus: 340, bg: "kitchen", mo: [{ who: "umi", pose: "explain-hand", x: 260 }, { pose: "yes", x: 370, move: "hop" }, { who: "ais", pose: "jump-joy", x: 445 }], fx: ["sparkle"] },
      },
      {
        text: { id: "Aturan pertama: cuci tangan pakai sabun sambil bernyanyi \"Selamat Ulang Tahun\" dua kali. Busanya sampai ke siku Mo!", en: "Rule one: wash hands with soap while singing \"Happy Birthday\" twice. Mo's bubbles went all the way up to his elbows!" },
        scene: { focus: 340, bg: "kitchen", props: [{ k: "faucet", x: 430 }], mo: [{ pose: "pose-20", x: 330 }], fx: ["bubbles", "notes"] },
      },
      {
        text: { id: "Aturan kedua: \"Kompor itu zona panas,\" kata Umi. \"Hanya Umi yang boleh di dekatnya. Koki kecil berdiri di belakang keset, ya.\"", en: "Rule two: \"The stove is the hot zone,\" said Umi. \"Only Umi goes near it. Little chefs stand behind the mat, okay?\"" },
        scene: { focus: 340, bg: "kitchen", props: [{ k: "mat", x: 410 }], mo: [{ who: "umi", pose: "idea-finger", x: 260 }, { pose: "pose-14", x: 410 }] },
      },
      {
        text: { id: "Hari ini mereka memasak sup sayur. Mo dan Ais mencuci wortel dan buncis di baskom. Cipratannya ke mana-mana!", en: "Today they were making vegetable soup. Mo and Ais washed carrots and green beans in a basin. Water splashed everywhere!" },
        scene: { focus: 340, bg: "kitchen", props: [{ k: "veggies", x: 380, y: 350 }, { k: "bowl", x: 380 }], mo: [{ pose: "pose-11", x: 290 }, { who: "ais", pose: "chef-bowl", x: 450 }], fx: ["bubbles"] },
      },
      {
        text: { id: "Pisau tajam adalah tugas Umi. Kak Adam memotong tahu yang lembut dengan pisau plastik, dan Mo menghitung irisan wortel: satu, dua… dua puluh!", en: "Sharp knives are Umi's job. Kak Adam cut soft tofu with a plastic knife, and Mo counted the carrot slices: one, two… twenty!" },
        scene: { focus: 340, bg: "kitchen", props: [{ k: "veggies", x: 440, y: 330, s: 0.8 }], mo: [{ who: "adam", pose: "stir-bowl", x: 290 }, { pose: "pose-22", x: 410 }] },
      },
      {
        text: { id: "Ais membawa telur dari kulkas. Hati-hati… hati-hati… PLOK! Satu telur jatuh ke lantai. Mata Ais membulat.", en: "Ais carried the eggs from the fridge. Careful… careful… SPLAT! One egg fell on the floor. Ais's eyes went wide." },
        scene: { focus: 340, bg: "kitchen", props: [{ k: "egg", x: 420 }], mo: [{ who: "ais", pose: "surprised", x: 330 }, { pose: "pose-28", x: 450 }] },
      },
      {
        text: { id: "Umi berlutut dan tersenyum. \"Tidak apa-apa, sayang. Koki hebat juga pernah menjatuhkan telur. Ayo kita bersihkan bersama.\"", en: "Umi knelt down and smiled. \"It's okay, love. Great chefs drop eggs too. Let's clean it up together.\"" },
        scene: { focus: 340, bg: "kitchen", props: [{ k: "towel", x: 420 }], mo: [{ who: "umi", pose: "kneel-smile", x: 280 }, { who: "ais", pose: "sit-chin-hands", x: 420 }], fx: ["hearts"] },
      },
      {
        text: { id: "Lalu Umi memasak sup di kompor. Blup, blup, blup! Si kembar menunggu di belakang keset sambil menghirup baunya. Hmmm!", en: "Then Umi cooked the soup on the stove. Blub, blub, blub! The twins waited behind the mat, sniffing. Mmmm!" },
        scene: { focus: 340, bg: "kitchen", props: [{ k: "mat", x: 440 }], mo: [{ who: "umi", pose: "cook-stove", x: 290 }, { pose: "pose-26", x: 440 }], fx: ["sparkle"] },
      },
      {
        text: { id: "Menunggu itu susah! Mo menghitung sampai seratus. Dua kali. Ais menghitung jarum jam yang berputar pelan sekali.", en: "Waiting is hard! Mo counted to a hundred. Twice. Ais watched the clock hand creep around very, very slowly." },
        scene: { focus: 340, bg: "kitchen", props: [{ k: "clock", x: 440, y: 230 }], mo: [{ pose: "pose-05", x: 300 }, { who: "ais", pose: "sit-chin-hands", x: 410 }] },
      },
      {
        text: { id: "Akhirnya supnya matang! Mereka membaca doa sebelum makan, lalu… sluurp! \"Sup buatan kita sendiri paling enak!\"", en: "At last the soup was ready! They said the du'a before eating, and then… slurp! \"Soup we made ourselves is the best!\"" },
        scene: { focus: 340, bg: "kitchen", props: [{ k: "soup", x: 400 }], mo: [{ pose: "pose-07", x: 300 }, { who: "ais", pose: "eat-bowl", x: 420 }], fx: ["hearts"] },
      },
      {
        text: { id: "Supnya masih banyak. Umi mengangkat jari: \"Bagaimana kalau kita antar semangkuk untuk Bu Rina di sebelah?\"", en: "There was still plenty of soup. Umi raised a finger: \"How about we take a bowl to Bu Rina next door?\"" },
        scene: { focus: 340, bg: "kitchen", props: [{ k: "soup", x: 430 }], mo: [{ who: "umi", pose: "idea-finger", x: 270 }, { pose: "idea", x: 400 }], fx: ["sparkle"] },
      },
      {
        text: { id: "Kak Adam membawa mangkuk dengan dua tangan, pelan-pelan. Mo berjalan di depan sambil melambai, \"Assalamu'alaikum, Bu Rina!\"", en: "Kak Adam carried the bowl in both hands, slowly. Mo walked in front, waving, \"Assalamu'alaikum, Bu Rina!\"" },
        quote: { id: "\"Jibril senantiasa berwasiat kepadaku tentang tetangga, sampai aku mengira bahwa dia akan mewariskannya.\" (HR. Bukhari dan Muslim)", en: "\"Jibril kept urging me to be good to neighbours, until I thought he would make them heirs.\" (Bukhari and Muslim)" },
        scene: { focus: 340, bg: "street", mo: [{ who: "adam", pose: "carry-bowl", x: 290 }, { pose: "pose-32", x: 410 }] },
      },
      {
        text: { id: "Bu Rina tersenyum lebar dan mengembalikan mangkuknya berisi pisang goreng hangat. Berbagi itu ternyata kembali lagi!", en: "Bu Rina smiled widely and sent the bowl back full of warm fried bananas. Sharing has a way of coming back!" },
        scene: { focus: 340, bg: "street", props: [{ k: "bowl", x: 430, y: 330 }], mo: [{ pose: "yeyy", x: 330, move: "hop" }], fx: ["hearts", "sparkle"] },
      },
      {
        text: { id: "\"Koki hebat juga membereskan dapur,\" kata Umi. Mereka mencuci mangkuk bersama, dan busa sabun menempel di hidung Ais.", en: "\"Great chefs clean the kitchen too,\" said Umi. They washed the bowls together, and soap bubbles stuck to Ais's nose." },
        scene: { focus: 340, bg: "kitchen", props: [{ k: "faucet", x: 430 }], mo: [{ who: "umi", pose: "ok-sign", x: 260 }, { who: "ais", pose: "giggle", x: 400 }], fx: ["bubbles"] },
      },
      {
        text: { id: "Abi pulang dan mencicipi sup. \"Masya Allah, siapa kokinya?\" \"KAMI!\" jawab si kembar bangga.", en: "Abi came home and tasted the soup. \"Masya Allah, who's the chef?\" \"US!\" the twins answered proudly." },
        scene: { focus: 340, bg: "kitchen", props: [{ k: "soup", x: 450 }], mo: [{ who: "ayah", pose: "thumbs-up-stand", x: 260 }, { pose: "pose-04", x: 390 }] },
      },
      {
        text: { id: "Malam itu Umi berbisik, \"Terima kasih, koki-koki kecil Umi.\" Kalau memasak bersama Umi, kamu mau memasak apa? 🥕", en: "That night Umi whispered, \"Thank you, my little chefs.\" If you cooked with your Umi, what would you make? 🥕" },
        scene: { focus: 340, bg: "living", time: "dusk", mo: [{ who: "umi", pose: "cheer-happy", x: 270 }, { pose: "yeyy", x: 400, move: "hop" }], fx: ["confetti"] },
      },
    ],
  },
  /* ───────────────────────── Umi 3. The tablet needs to sleep too ───────────────────────── */
  {
    slug: "tablet-juga-perlu-tidur",
    pose: "baby-mo-idea.png",
    published: "2026-11-17",
    title: { id: "Tablet Juga Perlu Tidur", en: "The Tablet Needs to Sleep Too" },
    hook: {
      id: "\"Satu video lagi, Umi!\" Saat pasir di jam pasir habis, tablet harus tidur. Mo menangis… lalu menemukan hari paling seru tanpa layar.",
      en: "\"One more video, Umi!\" When the sand in the hourglass runs out, the tablet has to sleep. Mo cries… and then finds the most fun day without a screen.",
    },
    anchor: { type: "hadith", slug: "kelembutan-keindahan" },
    takeaway: {
      id: "Batas layar paling mudah dijalankan dengan tanda waktu yang terlihat, nada yang lembut, dan pengganti yang seru. Aturan yang sama untuk orang tua membuat anak lebih mudah menerimanya.",
      en: "Screen limits work best with a timer children can see, a gentle voice and a fun alternative. When parents follow the same rule, children accept it more easily.",
    },
    tags: ["umi", "screen time", "layar", "tablet", "emosi", "bermain"],
    card: {
      title: { id: "Aturan Layar untuk Balita", en: "Screen Rules for Little Ones" },
      items: {
        id: [
          "WHO menyarankan: di bawah 2 tahun sebaiknya tanpa layar (video call bersama keluarga boleh); usia 2–4 tahun paling lama 1 jam sehari — lebih sedikit lebih baik, dan ditemani.",
          "Pakai penanda waktu yang bisa dilihat anak (jam pasir atau timer) dan beri aba-aba 5 menit sebelum selesai. Saat anak menangis, akui perasaannya tanpa mengubah aturannya.",
          "Buat zona bebas layar: meja makan, kamar tidur, dan satu jam sebelum tidur — berlaku juga untuk Abi dan Umi.",
        ],
        en: [
          "The WHO advises: no screen time under 2 (video calls with family are fine); ages 2–4 no more than 1 hour a day — less is better, and watch together.",
          "Use a timer children can see (an hourglass or a timer) and give a 5-minute warning. If they cry, name the feeling without changing the rule.",
          "Make screen-free zones: the dinner table, bedrooms and the hour before bed — for Abi and Umi too.",
        ],
      },
    },
    cover: {
      focus: 340, bg: "living",
      props: [{ k: "tablet", x: 450, y: 330 }, { k: "hourglass", x: 520, y: 330 }],
      mo: [{ who: "umi", pose: "idea-finger", x: 260 }, { pose: "idea", x: 390 }],
      fx: ["zzz"],
    },
    pages: [
      {
        text: { id: "Baby Mo sedang menonton video kereta di tablet. Satu video… dua video… sepuluh video! Tut-tuuut!", en: "Baby Mo was watching train videos on the tablet. One video… two videos… ten videos! Choo-choo!" },
        scene: { focus: 340, bg: "living", props: [{ k: "tablet", x: 420, y: 360 }], mo: [{ pose: "pose-06", x: 330 }] },
      },
      {
        text: { id: "Umi datang membawa jam pasir. \"Mo, kalau pasirnya sudah habis, tablet tidur ya.\" Mo mengangguk… tanpa menoleh.", en: "Umi came over with an hourglass. \"Mo, when the sand runs out, the tablet goes to sleep, okay?\" Mo nodded… without looking up." },
        scene: { focus: 340, bg: "living", props: [{ k: "hourglass", x: 410, y: 340 }], mo: [{ who: "umi", pose: "explain-hand", x: 260 }, { pose: "pose-06", x: 420 }] },
      },
      {
        text: { id: "Lima menit lagi, kata Umi. Lalu pasir terakhir jatuh. \"Satu lagi, Umi! SATU LAGI!\" Mo menangis keras.", en: "Five more minutes, said Umi. Then the last grain of sand fell. \"One more, Umi! ONE MORE!\" Mo cried loudly." },
        scene: { focus: 340, bg: "living", props: [{ k: "hourglass", x: 430, y: 340 }], mo: [{ pose: "pose-09", x: 330 }] },
      },
      {
        text: { id: "Umi tidak marah. Umi berlutut dan berbicara pelan: \"Mo sedih, ya? Boleh sedih. Umi peluk. Tapi tablet tetap tidur.\"", en: "Umi didn't get angry. She knelt down and spoke softly: \"You're sad, aren't you? It's okay to be sad. Umi will hug you. But the tablet still sleeps.\"" },
        scene: { focus: 340, bg: "living", mo: [{ who: "umi", pose: "kneel-smile", x: 280 }, { pose: "pose-10", x: 410 }], fx: ["hearts"] },
      },
      {
        text: { id: "\"Mata Mo perlu istirahat,\" kata Umi. \"Dan otak Mo tumbuh paling cepat saat Mo bermain, berlari, dan mengobrol dengan orang-orang yang Mo sayang.\"", en: "\"Your eyes need a rest,\" said Umi. \"And your brain grows fastest when you play, run and talk with the people you love.\"" },
        scene: { focus: 340, bg: "living", mo: [{ who: "umi", pose: "explain-hand", x: 260 }, { pose: "pose-23", x: 410 }], fx: ["sparkle"] },
      },
      {
        text: { id: "Mereka menidurkan tablet di kotaknya. \"Selamat tidur, tablet!\" kata Baby Ais sambil menyelimutinya dengan sapu tangan.", en: "They tucked the tablet into its box. \"Good night, tablet!\" said Baby Ais, covering it with a hanky like a blanket." },
        scene: { focus: 340, bg: "living", props: [{ k: "box", x: 400 }, { k: "tablet", x: 400, y: 340, s: 0.7 }], mo: [{ who: "ais", pose: "giggle", x: 300 }, { pose: "pose-40", x: 470 }], fx: ["zzz"] },
      },
      {
        text: { id: "\"Terus kita main apa?\" tanya Ais sambil cemberut. Mo mengangkat bahu. Rumah tiba-tiba terasa sepi.", en: "\"So what do we play now?\" Ais grumbled. Mo shrugged. The house suddenly felt very quiet." },
        scene: { focus: 340, bg: "living", mo: [{ who: "ais", pose: "grumpy", x: 300 }, { pose: "pose-33", x: 420 }] },
      },
      {
        text: { id: "Umi mengangkat jari. \"Umi punya ide: lomba menara balok paling tinggi! Siapa yang menang, boleh memilih buku cerita malam ini.\"", en: "Umi raised a finger. \"Umi has an idea: a contest for the tallest block tower! The winner picks tonight's bedtime story.\"" },
        scene: { focus: 340, bg: "living", props: [{ k: "blockstall", x: 430 }], mo: [{ who: "umi", pose: "idea-finger", x: 260 }, { pose: "wow", x: 380 }], fx: ["sparkle"] },
      },
      {
        text: { id: "Menaranya tinggi… tinggi… lebih tinggi dari Mo! Lalu — GUBRAK! Semua balok jatuh, dan mereka tertawa sampai perut sakit.", en: "The tower grew tall… taller… taller than Mo! Then — CRASH! All the blocks came down, and they laughed until their tummies hurt." },
        scene: { focus: 340, bg: "living", props: [{ k: "blocksfall", x: 400 }], mo: [{ pose: "pose-02", x: 300 }, { who: "ais", pose: "giggle", x: 470 }], fx: ["confetti"] },
      },
      {
        text: { id: "Siangnya mereka berburu siput di kebun dengan kaca pembesar. \"Lihat, Mo! Rumahnya dibawa ke mana-mana!\"", en: "After lunch they went snail hunting in the garden with a magnifying glass. \"Look, Mo! It carries its house everywhere!\"" },
        scene: { focus: 340, bg: "garden", props: [{ k: "snail", x: 420 }], mo: [{ who: "ais", pose: "magnifier-leaf", x: 310 }, { pose: "pose-15", x: 450 }], fx: ["leaves"] },
      },
      {
        text: { id: "Sore hari, layar boleh bangun sebentar — untuk video call dengan Nenek, bersama Umi. \"Assalamu'alaikum, Nenek!\" Mo melambai.", en: "In the afternoon the screen could wake up for a little while — for a video call with Nenek, together with Umi. \"Assalamu'alaikum, Nenek!\" Mo waved." },
        scene: { focus: 340, bg: "living", mo: [{ who: "umi", pose: "idea-tablet", x: 270 }, { pose: "pose-01", x: 400 }], fx: ["hearts"] },
      },
      {
        text: { id: "Saat makan malam, Abi ikut menidurkan HP-nya di keranjang. \"Aturan meja makan berlaku untuk semua, termasuk Abi!\"", en: "At dinner, Abi put his phone to sleep in the basket too. \"The table rule is for everyone, Abi included!\"" },
        scene: { focus: 340, bg: "kitchen", props: [{ k: "phone", x: 440, y: 330, s: 0.8 }, { k: "rice", x: 360, y: 350 }], mo: [{ who: "ayah", pose: "thumbs-up-stand", x: 250 }, { pose: "pose-21", x: 400 }] },
      },
      {
        text: { id: "Satu jam sebelum tidur, semua layar sudah tidur. Ais pemenang lomba balok, jadi Ais memilih cerita. Umi membacakannya dengan suara lucu.", en: "An hour before bed, every screen was asleep. Ais had won the block contest, so she chose the story. Umi read it in funny voices." },
        scene: { focus: 340, bg: "bedroom", time: "night", mo: [{ who: "umi", pose: "read-story", x: 300 }, { who: "ais", pose: "read-cushion", x: 430 }], fx: ["stars"] },
      },
      {
        text: { id: "Mo memandang Umi. \"Umi, tadi Mo menangis keras. Tapi Umi tetap lembut.\" Kata Abi, kelembutan membuat segalanya jadi indah.", en: "Mo looked at Umi. \"Umi, I cried really loudly earlier. But you stayed gentle.\" Abi says gentleness makes everything beautiful." },
        quote: { id: "\"Sesungguhnya kelembutan tidaklah ada pada sesuatu kecuali akan menghiasinya.\" (HR. Muslim)", en: "\"Gentleness is never in anything except that it beautifies it.\" (Muslim)" },
        scene: { focus: 340, bg: "bedroom", time: "night", mo: [{ who: "umi", pose: "grateful-hands", x: 270 }, { pose: "pose-35", x: 400 }], fx: ["hearts"] },
      },
      {
        text: { id: "\"Maaf ya, Umi.\" Umi memeluk Mo erat. \"Besok tablet bangun lagi sebentar. Tapi hari ini paling seru, kan?\" Mo mengangguk.", en: "\"Sorry, Umi.\" Umi hugged Mo tight. \"Tomorrow the tablet wakes up again for a little while. But today was the most fun, wasn't it?\" Mo nodded." },
        scene: { focus: 340, bg: "bedroom", time: "night", props: [{ k: "teddy", x: 460 }], mo: [{ who: "umi", pose: "hug-mo", x: 330 }], fx: ["hearts", "stars"] },
      },
      {
        text: { id: "Si kembar tidur nyenyak, dan tablet pun tidur di kotaknya. Mainan apa yang paling seru tanpa layar di rumahmu? 🧱", en: "The twins slept soundly, and the tablet slept in its box too. What's the most fun thing to play at your house without a screen? 🧱" },
        scene: { focus: 340, bg: "bedroom", time: "night", props: [{ k: "box", x: 470 }, { k: "tablet", x: 470, y: 340, s: 0.6 }], mo: [{ pose: "pose-39", x: 300 }, { who: "ais", pose: "sleep-pillow", x: 400 }], fx: ["zzz", "stars"] },
      },
    ],
  },
  /* ───────────────────────── Sea 1. The shy little octopus ───────────────────────── */
  {
    slug: "gurita-kecil-yang-pemalu",
    pose: "baby-mo-pose-35.png",
    published: "2026-11-18",
    title: { id: "Gurita Kecil yang Pemalu", en: "The Shy Little Octopus" },
    hook: {
      id: "Di akuarium, Mo bertemu gurita yang bersembunyi di balik batu — persis seperti Mo yang bersembunyi di balik rok Umi. Siapa yang akan berani lebih dulu?",
      en: "At the aquarium, Mo meets an octopus hiding behind a rock — just like Mo hiding behind Umi's skirt. Who will be brave first?",
    },
    anchor: { type: "doa", slug: "doa-dilancarkan-bicara" },
    takeaway: {
      id: "Malu itu wajar. Anak pemalu tidak perlu dipaksa — ia perlu waktu, rasa aman, dan satu langkah kecil yang dirayakan.",
      en: "Shyness is normal. A shy child doesn't need pushing — they need time, a feeling of safety and one small step that gets celebrated.",
    },
    tags: ["pemalu", "berani", "gurita", "laut", "akuarium", "doa nabi musa"],
    card: {
      title: { id: "Saat Anak Pemalu", en: "When Your Child Is Shy" },
      items: {
        id: [
          "Hindari label \"anaknya pemalu\" di depan orang lain. Coba katakan, \"Dia sedang mengamati dulu.\"",
          "Beri waktu pemanasan: datang lebih awal, tetap di dekatnya, dan biarkan ia bergabung saat siap.",
          "Latih langkah kecil di rumah (bermain peran salam, mengangkat tangan) dan puji usahanya: \"Kamu berani mencoba!\"",
        ],
        en: [
          "Avoid labelling them \"shy\" in front of others. Try: \"They like to watch first.\"",
          "Allow warm-up time: arrive early, stay close and let them join when ready.",
          "Practise small steps at home (role-play salam, raising a hand) and praise the effort: \"You were brave to try!\"",
        ],
      },
    },
    cover: {
      focus: 360, bg: "underwater",
      props: [{ k: "seaweed", x: 220 }, { k: "rock", x: 520 }, { k: "octopusshy", x: 380 }, { k: "fishschool", x: 420 }],
      fx: ["bubbles"],
    },
    pages: [
      {
        text: { id: "Hari Sabtu, Umi mengajak si kembar ke akuarium besar. Ada kelas untuk anak-anak, dan banyak anak yang belum Mo kenal. Mo bersembunyi di belakang rok Umi.", en: "On Saturday, Umi took the twins to the big aquarium. There was a class for children, full of kids Mo didn't know. Mo hid behind Umi's skirt." },
        scene: { focus: 330, bg: "aquarium", mo: [{ who: "umi", pose: "explain-hand", x: 280 }, { pose: "pose-10", x: 390 }] },
      },
      {
        text: { id: "Di dalam kaca ada batu besar. Di balik batu itu… ada dua mata bulat yang mengintip!", en: "Inside the glass was a big rock. And behind the rock… two round eyes were peeking out!" },
        scene: { focus: 380, bg: "aquarium", props: [{ k: "octopushide", x: 420, y: 290, s: 0.8 }], mo: [{ who: "ais", pose: "point-star", x: 300 }], fx: ["sparkle"] },
      },
      {
        text: { id: "Itu gurita! Warnanya berubah-ubah: abu-abu seperti batu, lalu ungu, lalu abu-abu lagi. Gurita itu sedang malu-malu.", en: "It was an octopus! Its colour kept changing: grey like the rock, then purple, then grey again. The octopus was feeling shy." },
        scene: { focus: 400, bg: "underwater", props: [{ k: "seaweed", x: 250 }, { k: "octopushide", x: 400, s: 1.3 }, { k: "coral", x: 560 }], fx: ["bubbles"] },
      },
      {
        text: { id: "Kakak pemandu bertanya, \"Siapa yang tahu, gurita punya berapa lengan?\" Mo tahu jawabannya: delapan! Tapi suaranya tersangkut di tenggorokan.", en: "The guide asked, \"Who knows how many arms an octopus has?\" Mo knew the answer: eight! But his voice got stuck in his throat." },
        scene: { focus: 340, bg: "aquarium", mo: [{ pose: "pose-36", x: 330 }, { who: "ais", pose: "wonder-question", x: 440 }] },
      },
      {
        text: { id: "Umi berlutut dan berbisik, \"Tidak apa-apa merasa malu, sayang. Lihat, gurita juga butuh waktu.\"", en: "Umi knelt down and whispered, \"It's okay to feel shy, love. Look, the octopus needs time too.\"" },
        scene: { focus: 340, bg: "aquarium", props: [{ k: "octopushide", x: 470, y: 290, s: 0.7 }], mo: [{ who: "umi", pose: "kneel-smile", x: 280 }, { pose: "pose-14", x: 410 }], fx: ["hearts"] },
      },
      {
        text: { id: "Tahukah kamu? Gurita punya tiga jantung dan darahnya berwarna biru! Saat takut, ia bisa bersembunyi di celah sekecil uang koin.", en: "Did you know? An octopus has three hearts and blue blood! When it's scared, it can squeeze into a gap as small as a coin." },
        scene: { focus: 400, bg: "underwater", props: [{ k: "rock", x: 560 }, { k: "octopusshy", x: 400 }, { k: "starfish", x: 280 }, { k: "heart", x: 400, y: 200, s: 0.5 }], fx: ["bubbles"] },
      },
      {
        text: { id: "Mo duduk diam di depan kaca. Ia tidak mengetuk kaca. Ia tidak berteriak. Ia hanya menunggu, sabar sekali.", en: "Mo sat quietly in front of the glass. He didn't tap on it. He didn't shout. He just waited, very patiently." },
        scene: { focus: 380, bg: "aquarium", props: [{ k: "octopushide", x: 450, y: 290, s: 0.8 }], mo: [{ pose: "pose-06", x: 320 }] },
      },
      {
        text: { id: "Pelan… pelan… gurita keluar dari balik batu. Satu lengan, dua lengan… delapan lengan semuanya!", en: "Slowly… slowly… the octopus came out from behind the rock. One arm, two arms… all eight arms!" },
        scene: { focus: 400, bg: "underwater", props: [{ k: "seaweed", x: 240 }, { k: "rock", x: 560 }, { k: "octopus", x: 400 }, { k: "fishschool", x: 380 }], fx: ["sparkle"] },
      },
      {
        text: { id: "Lalu gurita menempelkan lengannya ke kaca, tepat di depan Mo, seolah melambai: \"Hai!\"", en: "Then the octopus pressed an arm against the glass, right in front of Mo, as if it were waving: \"Hi!\"" },
        scene: { focus: 380, bg: "aquarium", props: [{ k: "octopuswave", x: 440, y: 296, s: 0.8 }], mo: [{ pose: "wow", x: 320 }], fx: ["sparkle"] },
      },
      {
        text: { id: "\"Umi, guritanya berani keluar karena kita tidak memaksanya,\" bisik Mo. Hatinya terasa hangat.", en: "\"Umi, the octopus came out because we didn't force it,\" whispered Mo. His heart felt warm." },
        scene: { focus: 340, bg: "aquarium", props: [{ k: "octopuswave", x: 450, y: 296, s: 0.7 }], mo: [{ who: "umi", pose: "touched-cheek", x: 270 }, { pose: "pose-31", x: 380 }], fx: ["hearts"] },
      },
      {
        text: { id: "Umi mengajarkan doa Nabi Musa saat beliau gugup berbicara. Mo mengulanginya pelan-pelan.", en: "Umi taught him the du'a of Prophet Musa for when he felt nervous about speaking. Mo repeated it slowly." },
        quote: { id: "\"Rabbisyrah lii shadrii, wa yassir lii amrii, wahlul 'uqdatan min lisaanii, yafqahuu qaulii.\" — Ya Tuhanku, lapangkanlah dadaku, mudahkanlah urusanku, dan lepaskanlah kekakuan lidahku, agar mereka mengerti perkataanku. (QS. Thaha: 25–28)", en: "\"Rabbisyrah lii shadrii, wa yassir lii amrii, wahlul 'uqdatan min lisaanii, yafqahuu qaulii.\" — My Lord, open my chest, make my task easy, and untie the knot from my tongue so they understand my words. (Qur'an, Taha 20:25–28)" },
        scene: { focus: 340, bg: "aquarium", mo: [{ who: "umi", pose: "dua-stand", x: 280 }, { pose: "thank-you", x: 400 }] },
      },
      {
        text: { id: "Kakak pemandu bertanya lagi, \"Ada yang tahu, gurita punya berapa jantung?\" Mo menarik napas, membaca doa dalam hati… lalu mengangkat tangan.", en: "The guide asked again, \"Does anyone know how many hearts an octopus has?\" Mo took a breath, said the du'a in his heart… and raised his hand." },
        scene: { focus: 380, bg: "aquarium", props: [{ k: "octopus", x: 450, y: 296, s: 0.7 }], mo: [{ pose: "pose-24", x: 330 }] },
      },
      {
        text: { id: "\"TIGA!\" jawab Mo. Suaranya kecil, tapi jelas sekali. Semua anak bertepuk tangan, dan Ais bersorak paling keras.", en: "\"THREE!\" said Mo. His voice was small, but very clear. All the children clapped, and Ais cheered loudest of all." },
        scene: { focus: 350, bg: "aquarium", mo: [{ pose: "yes", x: 320, move: "hop" }, { who: "ais", pose: "cheer-fist", x: 440 }], fx: ["confetti"] },
      },
      {
        text: { id: "Seorang anak berkerudung kuning mendekat. \"Aku Nala. Kamu tahu banyak tentang gurita!\" Mo tersenyum malu-malu. \"Assalamu'alaikum… aku Mo.\"", en: "A girl in a yellow hijab came over. \"I'm Nala. You know lots about octopuses!\" Mo gave a shy smile. \"Assalamu'alaikum… I'm Mo.\"" },
        scene: { focus: 380, bg: "aquarium", props: [{ k: "octopuswave", x: 450, y: 296, s: 0.7 }], mo: [{ pose: "pose-35", x: 330 }], fx: ["hearts"] },
      },
      {
        text: { id: "Di rumah, Mo menggambar gurita dengan delapan lengan yang melambai. \"Namanya Malu-Malu,\" kata Mo. \"Tapi dia pemberani.\"", en: "At home, Mo drew an octopus with eight waving arms. \"Its name is Shy-Shy,\" said Mo. \"But it's brave.\"" },
        scene: { focus: 340, bg: "living", props: [{ k: "drawing", x: 430, y: 360 }], mo: [{ pose: "pose-29", x: 330 }, { who: "ais", pose: "draw-crayons", x: 450 }] },
      },
      {
        text: { id: "Kamu juga boleh malu. Pelan-pelan saja, seperti gurita kecil. Siapa teman baru yang ingin kamu sapa minggu ini? 🐙", en: "It's okay for you to feel shy too. Take it slowly, like the little octopus. Which new friend would you like to say hello to this week? 🐙" },
        scene: { focus: 400, bg: "underwater", props: [{ k: "seaweed", x: 250 }, { k: "coral", x: 560 }, { k: "octopuswave", x: 400 }, { k: "fishschool", x: 420 }], fx: ["bubbles", "sparkle"] },
      },
    ],
  },
  /* ───────────────────────── Sea 2. Little turtles going home ───────────────────────── */
  {
    slug: "tukik-pulang-ke-laut",
    pose: "baby-mo-pose-14.png",
    published: "2026-11-19",
    title: { id: "Tukik-Tukik Pulang ke Laut", en: "The Little Turtles Go Home to the Sea" },
    hook: {
      id: "Malam ini, seratus tukik kecil akan berjalan ke laut di bawah cahaya bulan. Tapi ada sesuatu di pasir yang menghalangi jalan mereka…",
      en: "Tonight, a hundred baby turtles will walk to the sea by moonlight. But something on the sand is blocking their way…",
    },
    anchor: { type: "doa", slug: "doa-pandai-bersyukur" },
    takeaway: {
      id: "Anak-anak peduli pada apa yang mereka lihat dengan mata sendiri. Sekali melihat tukik berjuang menuju laut, sampah plastik tidak lagi terasa sepele.",
      en: "Children care about what they see with their own eyes. Once they've watched a baby turtle struggle to the sea, plastic litter never feels small again.",
    },
    tags: ["penyu", "tukik", "laut", "sampah", "alam", "bersyukur"],
    card: {
      title: { id: "Mengajak Anak Menjaga Laut", en: "Helping Children Care for the Sea" },
      items: {
        id: [
          "Biasakan membawa botol minum dan tas belanja sendiri, dan menolak sedotan plastik — anak meniru kebiasaan, bukan nasihat.",
          "Main \"pungut lima sampah\" setiap ke pantai atau taman (pakai sarung tangan atau capit), lalu cuci tangan bersama.",
          "Saat ikut pelepasan tukik: ikuti petugas konservasi, jangan menyalakan senter atau flash, dan jangan menggendong tukik.",
        ],
        en: [
          "Make it a habit to bring your own bottle and bag and say no to plastic straws — children copy habits, not lectures.",
          "Play \"pick up five pieces\" at every beach or park visit (use gloves or a grabber), then wash hands together.",
          "At a hatchling release, follow the conservation staff, use no torches or camera flash, and don't pick the hatchlings up.",
        ],
      },
    },
    cover: {
      focus: 400, bg: "beach", time: "night",
      props: [{ k: "nest", x: 470 }, { k: "hatchlings", x: 430, y: 440 }],
      mo: [{ pose: "pose-31", x: 310 }],
      fx: ["stars"],
    },
    pages: [
      {
        text: { id: "Sore itu Abi mengajak semua ke pantai penangkaran penyu. \"Hari ini,\" kata Abi, \"tukik-tukik akan pulang ke laut!\"", en: "That afternoon Abi took everyone to the turtle conservation beach. \"Today,\" said Abi, \"the baby turtles are going home to the sea!\"" },
        scene: { focus: 340, bg: "beach", time: "dusk", props: [{ k: "nest", x: 460 }], mo: [{ who: "ayah", pose: "arms-open-welcome", x: 260 }, { pose: "yeyy", x: 380, move: "hop" }] },
      },
      {
        text: { id: "Dua bulan lalu, seekor ibu penyu datang ke pantai ini. Ia menggali lubang, meninggalkan seratus telur, lalu berenang kembali ke laut.", en: "Two months ago, a mother turtle came to this beach. She dug a hole, left a hundred eggs inside, and swam back to the sea." },
        scene: { focus: 380, bg: "underwater", props: [{ k: "seaweed", x: 220 }, { k: "turtle", x: 430, y: 300, s: 1.2 }, { k: "coral", x: 580 }], fx: ["bubbles"] },
      },
      {
        text: { id: "Krek… krek… Telur-telur mulai retak. Sebuah kepala kecil muncul dari pasir! \"Tukik!\" teriak Ais.", en: "Crack… crack… The eggs began to split. A tiny head popped out of the sand! \"A baby turtle!\" shouted Ais." },
        scene: { focus: 360, bg: "beach", time: "dusk", props: [{ k: "nest", x: 430 }, { k: "hatchling", x: 470, y: 400 }], mo: [{ who: "ais", pose: "surprised", x: 300 }], fx: ["sparkle"] },
      },
      {
        text: { id: "Kak Adam membaca papan di pantai: tukik mencari laut dengan melihat cahaya bulan di atas air. \"Jadi malam ini tidak boleh ada senter atau lampu HP!\"", en: "Kak Adam read the sign on the beach: baby turtles find the sea by looking for moonlight on the water. \"So tonight, no torches or phone lights!\"" },
        scene: { focus: 340, bg: "beach", time: "dusk", mo: [{ who: "adam", pose: "kneel-talk", x: 290 }, { pose: "pose-22", x: 420 }] },
      },
      {
        text: { id: "Mo ingin menggendong satu tukik. Tapi Abi menggeleng pelan. \"Biarkan mereka berjalan sendiri. Langkah pertama di pasir membuat mereka kuat, dan mereka akan mengingat pantai ini.\"", en: "Mo wanted to pick one up. But Abi gently shook his head. \"Let them walk on their own. Those first steps on the sand make them strong, and they'll remember this beach.\"" },
        scene: { focus: 340, bg: "beach", time: "dusk", props: [{ k: "hatchling", x: 470, y: 400 }], mo: [{ who: "ayah", pose: "stern-gentle", x: 260 }, { pose: "pose-05", x: 390 }] },
      },
      {
        text: { id: "Bulan muncul. Tukik-tukik berjalan tertatih-tatih ke arah laut. Kecil sekali, tapi mereka tidak berhenti.", en: "The moon came up. The baby turtles waddled towards the sea. So small, but they never stopped." },
        scene: { focus: 400, bg: "beach", time: "night", props: [{ k: "hatchlings", x: 470, y: 400, s: 1.3 }, { k: "hatchlings", x: 440, y: 440, s: 1.3 }], fx: ["stars"] },
      },
      {
        text: { id: "Tapi satu tukik tersangkut di balik gelas plastik yang tergeletak di pasir. Ia berputar-putar kebingungan.", en: "But one baby turtle got stuck behind a plastic cup lying on the sand. It turned round and round, confused." },
        scene: { focus: 380, bg: "beach", time: "night", props: [{ k: "litter", x: 430, y: 420 }, { k: "hatchling", x: 400, y: 430 }], mo: [{ pose: "pose-33", x: 290 }], fx: ["stars"] },
      },
      {
        text: { id: "Kak Adam memungut sampah itu pelan-pelan. Jalannya terbuka! Tukik kecil itu kembali merangkak menuju ombak.", en: "Kak Adam gently picked the litter up. The way was clear! The little turtle crawled on towards the waves." },
        scene: { focus: 360, bg: "beach", time: "night", props: [{ k: "hatchlings", x: 470, y: 425 }], mo: [{ who: "adam", pose: "crouch-pat", x: 320 }], fx: ["stars", "sparkle"] },
      },
      {
        text: { id: "Di laut, tukik akan tumbuh besar. Penyu suka makan ubur-ubur. Tapi kantong plastik di dalam air… terlihat mirip sekali dengan ubur-ubur.", en: "In the sea, the turtle will grow big. Turtles love to eat jellyfish. But a plastic bag in the water… looks just like a jellyfish." },
        scene: { focus: 400, bg: "underwater", time: "night", props: [{ k: "turtle", x: 400, y: 380, s: 0.8 }, { k: "jellyfish", x: 330, y: 250, s: 0.8 }, { k: "plasticbag", x: 470, y: 290, s: 0.8 }], fx: ["bubbles"] },
      },
      {
        text: { id: "\"Kalau penyu memakan plastik, perutnya bisa sakit,\" kata Abi pelan. Mo memegang tangan Abi erat-erat.", en: "\"If a turtle eats plastic, its tummy can get very sick,\" Abi said quietly. Mo held Abi's hand tight." },
        scene: { focus: 340, bg: "beach", time: "night", mo: [{ who: "ayah", pose: "kneel-arms-open", x: 280 }, { pose: "pose-09", x: 410 }], fx: ["stars"] },
      },
      {
        text: { id: "\"Allah menitipkan bumi dan laut kepada kita,\" kata Abi. \"Tugas kita menjaganya, bukan merusaknya.\"", en: "\"Allah has entrusted the land and the sea to us,\" said Abi. \"Our job is to look after them, not to spoil them.\"" },
        quote: { id: "\"Telah tampak kerusakan di darat dan di laut disebabkan perbuatan tangan manusia, supaya Allah merasakan kepada mereka sebagian dari (akibat) perbuatan mereka, agar mereka kembali (ke jalan yang benar).\" (QS. Ar-Rum: 41)", en: "\"Corruption has appeared on land and sea because of what people's hands have done, so that He may let them taste some of what they have done, that perhaps they will return.\" (Qur'an, Ar-Rum 30:41)" },
        scene: { focus: 340, bg: "beach", time: "night", mo: [{ who: "ayah", pose: "teach-point-kneel", x: 280 }, { who: "ais", pose: "calm-sit", x: 410 }], fx: ["stars"] },
      },
      {
        text: { id: "Keesokan paginya, mereka kembali membawa kantong besar. Sedotan, botol, kantong plastik… Satu, dua, tiga… empat puluh tujuh sampah!", en: "The next morning they came back with a big bag. Straws, bottles, plastic bags… One, two, three… forty-seven pieces of litter!" },
        scene: { focus: 340, bg: "beach", props: [{ k: "trashbag", x: 380 }, { k: "litter", x: 330, y: 430 }], mo: [{ pose: "pose-27", x: 290 }, { who: "ais", pose: "thumbs-up-walk", x: 450 }] },
      },
      {
        text: { id: "\"Dari seribu tukik, mungkin hanya satu yang tumbuh menjadi penyu dewasa,\" kata Kak Adam. \"Sedikit sekali!\" kata Ais. \"Karena itu setiap tukik berharga,\" jawab Abi.", en: "\"Out of a thousand baby turtles, maybe only one grows up,\" said Kak Adam. \"That's so few!\" said Ais. \"That's why every single one matters,\" said Abi." },
        scene: { focus: 340, bg: "beach", mo: [{ who: "adam", pose: "kneel-talk", x: 290 }, { who: "ais", pose: "wonder-question", x: 420 }] },
      },
      {
        text: { id: "Mo meletakkan tangan di dadanya. \"Mo janji bawa botol minum sendiri, dan tidak pakai sedotan plastik lagi.\"", en: "Mo put his hand on his chest. \"I promise to bring my own water bottle, and no more plastic straws.\"" },
        scene: { focus: 350, bg: "beach", props: [{ k: "water", x: 450 }], mo: [{ pose: "pose-14", x: 350 }], fx: ["sparkle"] },
      },
      {
        text: { id: "Dua puluh tahun lagi, tukik kecil itu akan menjadi penyu besar. Dan mungkin… ia akan kembali ke pantai yang sama untuk bertelur.", en: "Twenty years from now, that little turtle will be a big turtle. And maybe… she will come back to the very same beach to lay her eggs." },
        scene: { focus: 400, bg: "underwater", props: [{ k: "seaweed", x: 220 }, { k: "turtle", x: 430, y: 290, s: 1.1 }, { k: "fishschool", x: 420 }, { k: "coral", x: 600 }], fx: ["bubbles"] },
      },
      {
        text: { id: "Laut itu luas sekali, tapi tangan kecil pun bisa menjaganya. Sampah apa yang bisa kamu pungut hari ini? 🐢", en: "The sea is enormous, but even small hands can help look after it. What litter could you pick up today? 🐢" },
        scene: { focus: 350, bg: "beach", props: [{ k: "hatchling", x: 470, y: 420 }], mo: [{ pose: "yes", x: 330, move: "hop" }], fx: ["sparkle"] },
      },
    ],
  },
  /* ───────────────────────── Sea 3. Jingga the clownfish ───────────────────────── */
  {
    slug: "jingga-ikan-badut-mencari-rumah",
    pose: "baby-mo-pose-41.png",
    published: "2026-11-20",
    title: { id: "Jingga, Ikan Badut yang Mencari Rumah", en: "Jingga the Clownfish Looks for a Home" },
    hook: {
      id: "Si kembar berebut selimut. Lalu Umi bercerita tentang Jingga, ikan badut kecil yang kehilangan rumahnya — dan anemon berduri yang membuka lengannya.",
      en: "The twins are fighting over a blanket. Then Umi tells the story of Jingga, a little clownfish who lost her home — and the stinging anemone who opened its arms.",
    },
    anchor: { type: "parenting", slug: "anak-tidak-mau-berbagi" },
    takeaway: {
      id: "Cerita membantu anak merasakan apa yang sulit dijelaskan. Ikan badut dan anemon menunjukkan bahwa berbagi bukan kehilangan — tapi saling menjaga.",
      en: "Stories help children feel what's hard to explain. The clownfish and the anemone show that sharing isn't losing — it's looking after each other.",
    },
    tags: ["berbagi", "saudara", "ikan badut", "laut", "tolong-menolong", "cerita tidur"],
    card: {
      title: { id: "Saat Kakak-Adik Berebut", en: "When Siblings Fight Over Things" },
      items: {
        id: [
          "Jangan paksa berbagi seketika. Pakai giliran dengan penanda waktu: \"Lima menit untuk Mo, lalu lima menit untuk Ais.\"",
          "Izinkan setiap anak punya satu-dua barang istimewa yang tidak harus dibagi — itu membuat berbagi barang lain lebih mudah.",
          "Saat mereka bekerja sama, sebutkan dengan jelas: \"Kalian berbagi selimut, jadi dua-duanya hangat. Masya Allah!\"",
        ],
        en: [
          "Don't force instant sharing. Use turns with a timer: \"Five minutes for Mo, then five minutes for Ais.\"",
          "Let each child keep one or two special things they don't have to share — it makes sharing everything else easier.",
          "When they cooperate, name it clearly: \"You shared the blanket, so you're both warm. Masya Allah!\"",
        ],
      },
    },
    cover: {
      focus: 400, bg: "underwater",
      props: [{ k: "seaweed", x: 230 }, { k: "anemone", x: 420 }, { k: "clownfish", x: 400, y: 300 }, { k: "coral", x: 600 }],
      fx: ["bubbles"],
    },
    pages: [
      {
        text: { id: "\"Ini selimutku!\" \"Bukan, punyaku!\" Malam itu Mo dan Ais berebut selimut bintang, tarik sana, tarik sini.", en: "\"It's my blanket!\" \"No, it's mine!\" That night Mo and Ais fought over the starry blanket, pulling this way and that." },
        scene: { focus: 340, bg: "bedroom", time: "night", mo: [{ pose: "pose-27", x: 300 }, { who: "ais", pose: "grumpy", x: 420 }] },
      },
      {
        text: { id: "Umi duduk di antara mereka dan membuka buku. \"Umi punya cerita tentang ikan kecil yang tidak punya rumah.\"", en: "Umi sat between them and opened a book. \"Umi has a story about a little fish who had no home.\"" },
        scene: { focus: 340, bg: "bedroom", time: "night", mo: [{ who: "umi", pose: "read-story", x: 340 }], fx: ["stars"] },
      },
      {
        text: { id: "Di laut yang hangat, hiduplah ikan badut kecil bernama Jingga. Suatu malam badai datang, dan rumah Jingga tersapu ombak.", en: "In a warm sea lived a little clownfish called Jingga. One night a storm came, and Jingga's home was swept away by the waves." },
        scene: { focus: 400, bg: "underwater", time: "night", props: [{ k: "clownfish", x: 400, y: 320 }, { k: "seaweed", x: 560 }], fx: ["bubbles"] },
      },
      {
        text: { id: "Jingga berenang mencari rumah baru. \"Bolehkah aku tinggal di sini?\" tanyanya pada Gurita. \"Maaf, guaku sempit sekali,\" jawab Gurita.", en: "Jingga swam off to look for a new home. \"May I live here?\" she asked the Octopus. \"Sorry, my cave is very small,\" said the Octopus." },
        scene: { focus: 400, bg: "underwater", props: [{ k: "octopushide", x: 470 }, { k: "clownfish", x: 300, y: 300 }], fx: ["bubbles"] },
      },
      {
        text: { id: "Ia bertanya pada Kuda Laut. \"Maaf, aku harus terus berpegangan pada rumput laut,\" jawab Kuda Laut pelan.", en: "She asked the Seahorse. \"Sorry, I have to keep holding on to the seaweed,\" said the Seahorse softly." },
        scene: { focus: 400, bg: "underwater", props: [{ k: "seaweed", x: 470 }, { k: "seahorse", x: 470, y: 380 }, { k: "clownfish", x: 320, y: 290, flip: true }], fx: ["bubbles"] },
      },
      {
        text: { id: "Lalu Jingga melihat anemon laut yang cantik. Tapi semua ikan menjauh. \"Hati-hati! Lengan anemon itu bisa menyengat!\"", en: "Then Jingga saw a beautiful sea anemone. But all the other fish swam away. \"Careful! Its arms can sting!\"" },
        scene: { focus: 400, bg: "underwater", props: [{ k: "anemone", x: 450 }, { k: "clownfish", x: 300, y: 300 }, { k: "fishschool", x: 400 }], fx: ["bubbles"] },
      },
      {
        text: { id: "\"Terus Jingga masuk, Umi?\" tanya Ais. Mo masih memeluk selimut… tapi sudah tidak terlalu erat.", en: "\"So did Jingga go in, Umi?\" asked Ais. Mo was still hugging the blanket… but not quite so tightly." },
        scene: { focus: 340, bg: "bedroom", time: "night", mo: [{ who: "ais", pose: "wonder-question", x: 300 }, { pose: "pose-31", x: 420 }] },
      },
      {
        text: { id: "Jingga memberanikan diri. \"Anemon, bolehkah aku tinggal di sini? Aku akan membersihkan lenganmu dan mengusir ikan yang mau menggigitmu.\"", en: "Jingga found her courage. \"Anemone, may I live here? I'll keep your arms clean and chase away the fish that try to nibble you.\"" },
        scene: { focus: 400, bg: "underwater", props: [{ k: "anemone", x: 440 }, { k: "clownfish", x: 340, y: 310 }], fx: ["sparkle"] },
      },
      {
        text: { id: "Anemon terdiam lama. Lalu ia membuka lengannya pelan-pelan. \"Masuklah, Jingga.\"", en: "The anemone was quiet for a long time. Then, slowly, it opened its arms. \"Come in, Jingga.\"" },
        scene: { focus: 400, bg: "underwater", props: [{ k: "anemone", x: 400, s: 1.2 }, { k: "clownfish", x: 400, y: 360 }], fx: ["hearts"] },
      },
      {
        text: { id: "Ajaibnya, sengatan anemon tidak menyakiti Jingga. Tubuh ikan badut dilapisi lendir khusus. Allah menciptakan mereka untuk saling menjaga.", en: "Amazingly, the anemone's sting didn't hurt Jingga. Clownfish are covered in a special slime. Allah made them to look after each other." },
        scene: { focus: 400, bg: "underwater", props: [{ k: "anemone", x: 400, s: 1.2 }, { k: "clownfish", x: 380, y: 340 }, { k: "coral", x: 600 }], fx: ["sparkle", "bubbles"] },
      },
      {
        text: { id: "Sejak itu Jingga menjaga anemon, dan anemon melindungi Jingga. Dua makhluk yang berbeda, satu rumah yang hangat.", en: "From then on Jingga looked after the anemone, and the anemone protected Jingga. Two very different creatures, one warm home." },
        quote: { id: "\"Dan tolong-menolonglah kamu dalam (mengerjakan) kebajikan dan takwa.\" (QS. Al-Ma'idah: 2)", en: "\"And help one another in goodness and righteousness.\" (Qur'an, Al-Ma'idah 5:2)" },
        scene: { focus: 400, bg: "underwater", props: [{ k: "seaweed", x: 220 }, { k: "anemone", x: 400 }, { k: "clownfish", x: 420, y: 300 }, { k: "starfish", x: 560 }], fx: ["bubbles"] },
      },
      {
        text: { id: "Umi menutup buku. Mo memandang selimut di tangannya, lalu memandang Ais yang kedinginan.", en: "Umi closed the book. Mo looked at the blanket in his hands, then at Ais, who was feeling cold." },
        scene: { focus: 340, bg: "bedroom", time: "night", mo: [{ pose: "pose-36", x: 300 }, { who: "ais", pose: "sit-chin-hands", x: 420 }], fx: ["stars"] },
      },
      {
        text: { id: "Mo mengangkat ujung selimut. \"Ais, masuk sini. Kita jadi Jingga dan anemon.\"", en: "Mo lifted the edge of the blanket. \"Ais, come in here. We can be Jingga and the anemone.\"" },
        scene: { focus: 350, bg: "bedroom", time: "night", mo: [{ pose: "pose-41", x: 340 }], fx: ["hearts"] },
      },
      {
        text: { id: "\"Aku anemonnya! Awas, kusengat!\" kata Ais sambil menggelitik Mo. Mereka tertawa sampai Umi ikut tertawa.", en: "\"I'm the anemone! Watch out, I'll sting you!\" said Ais, tickling Mo. They laughed until Umi laughed too." },
        scene: { focus: 340, bg: "bedroom", time: "night", mo: [{ who: "ais", pose: "giggle", x: 300 }, { pose: "pose-02", x: 420 }], fx: ["sparkle"] },
      },
      {
        text: { id: "Malam itu, satu selimut cukup untuk berdua. Ternyata berbagi membuat selimut terasa lebih hangat.", en: "That night, one blanket was enough for two. It turns out sharing makes a blanket feel even warmer." },
        scene: { focus: 340, bg: "bedroom", time: "night", mo: [{ who: "umi", pose: "dua-sit", x: 250 }, { pose: "pose-39", x: 360 }, { who: "ais", pose: "sleep-pillow", x: 450 }], fx: ["zzz", "stars"] },
      },
      {
        text: { id: "Apa yang bisa kamu bagi dengan saudara atau temanmu besok? 🐠", en: "What could you share with your brother, sister or a friend tomorrow? 🐠" },
        scene: { focus: 400, bg: "underwater", time: "night", props: [{ k: "anemone", x: 400 }, { k: "clownfish", x: 400, y: 350 }], fx: ["zzz", "bubbles"] },
      },
    ],
  },
  /* ───────────────────────── Sea 4. The whale's lullaby ───────────────────────── */
  {
    slug: "lagu-paus-untuk-bayinya",
    pose: "baby-mo-pose-39.png",
    published: "2026-11-21",
    title: { id: "Lagu Paus untuk Bayinya", en: "A Whale's Song for Her Baby" },
    hook: {
      id: "Petir menyambar dan Mo ketakutan. Umi bercerita tentang ibu paus yang berenang ribuan kilometer, bernyanyi pelan sekali — hanya untuk bayinya.",
      en: "Thunder crashes and Mo is scared. Umi tells him about a mother whale who swims thousands of kilometres, singing very softly — just for her baby.",
    },
    anchor: { type: "hadith", slug: "kasih-sayang-kepada-anak" },
    takeaway: {
      id: "Rasa aman anak dibangun dari kehadiran yang tenang: dekat, lembut, dan berulang setiap malam. Kasih sayang yang ia terima hari ini kelak akan ia berikan kembali.",
      en: "A child's sense of safety is built from calm presence: close, gentle and repeated every night. The love they receive today is the love they'll give back one day.",
    },
    tags: ["paus", "laut", "ibu", "takut petir", "kasih sayang", "cerita tidur"],
    card: {
      title: { id: "Saat Anak Takut Petir atau Gelap", en: "When Your Child Fears Thunder or the Dark" },
      items: {
        id: [
          "Akui rasa takutnya (\"Suaranya keras sekali, ya\") dan tetap di dekatnya — jangan bilang \"begitu saja takut\".",
          "Jelaskan dengan sederhana (\"petir itu suara listrik di awan\") dan ajarkan doa ketika mendengar petir.",
          "Buat ritual tidur yang sama setiap malam — lagu, cerita, atau doa yang sama membuat anak merasa aman.",
        ],
        en: [
          "Name the fear (\"That was really loud, wasn't it?\") and stay close — never \"that's nothing to be scared of\".",
          "Explain simply (\"thunder is the sound of electricity in the clouds\") and teach the du'a for hearing thunder.",
          "Keep the same bedtime ritual every night — the same song, story or du'a helps children feel safe.",
        ],
      },
    },
    cover: {
      focus: 400, bg: "underwater",
      props: [{ k: "whale", x: 390, y: 300, s: 0.6 }, { k: "whale", x: 430, y: 390, s: 0.27 }],
      fx: ["notes", "bubbles"],
    },
    pages: [
      {
        text: { id: "Malam itu hujan turun deras. DUAR! Petir menyambar. Mo bersembunyi di bawah selimut, gemetar.", en: "That night the rain poured down. BOOM! Thunder crashed. Mo hid under his blanket, trembling." },
        scene: { focus: 340, bg: "bedroom", time: "rain", mo: [{ pose: "pose-10", x: 340 }], fx: ["lightning"] },
      },
      {
        text: { id: "Umi datang dan memeluknya. \"Mo mau dengar cerita tentang ibu paus dan bayinya?\" Mo mengangguk kecil.", en: "Umi came and hugged him. \"Would you like to hear a story about a mother whale and her baby?\" Mo gave a tiny nod." },
        scene: { focus: 340, bg: "bedroom", time: "night", mo: [{ who: "umi", pose: "hug-mo", x: 340 }], fx: ["hearts"] },
      },
      {
        text: { id: "Di laut yang dingin dan luas, ada ibu paus dan bayinya. Bayi paus itu sepanjang mobil, tapi di samping ibunya ia terlihat sangat kecil.", en: "In a cold, wide sea lived a mother whale and her baby. The baby was as long as a car, but next to his mother he looked very small." },
        scene: { focus: 400, bg: "underwater", props: [{ k: "whale", x: 390, y: 300, s: 0.62 }, { k: "whale", x: 440, y: 390, s: 0.25 }], fx: ["bubbles"] },
      },
      {
        text: { id: "Setiap tahun, mereka berenang jauh sekali — ribuan kilometer — dari laut yang dingin menuju laut yang hangat.", en: "Every year they swim a very long way — thousands of kilometres — from the cold sea to the warm sea." },
        scene: { focus: 400, bg: "underwater", props: [{ k: "whale", x: 390, y: 290, s: 0.55 }, { k: "whale", x: 450, y: 370, s: 0.25 }, { k: "fishschool", x: 400 }], fx: ["bubbles"] },
      },
      {
        text: { id: "Suatu malam, badai datang di atas laut. Ombak bergemuruh. Bayi paus ketakutan dan berhenti berenang.", en: "One night a storm came over the sea. The waves roared. The baby whale got scared and stopped swimming." },
        scene: { focus: 400, bg: "underwater", time: "night", props: [{ k: "whale", x: 390, y: 350, s: 0.42 }], fx: ["bubbles"] },
      },
      {
        text: { id: "Ibu paus berenang mendekat sampai tubuh mereka bersentuhan. \"Ibu di sini,\" katanya. Lalu ia mulai bernyanyi, pelan sekali.", en: "The mother whale swam close until their bodies touched. \"I'm here,\" she said. And she began to sing, very softly." },
        scene: { focus: 400, bg: "underwater", time: "night", props: [{ k: "whale", x: 390, y: 300, s: 0.6 }, { k: "whale", x: 420, y: 375, s: 0.27 }], fx: ["notes", "bubbles"] },
      },
      {
        text: { id: "Tahukah kamu? Ibu paus bungkuk berbisik kepada bayinya dengan suara yang sangat pelan, supaya hanya bayinya yang mendengar dan pemangsa tidak tahu mereka ada di sana.", en: "Did you know? Humpback whale mothers whisper to their babies very quietly, so only the baby can hear and predators don't know they're there." },
        scene: { focus: 400, bg: "underwater", time: "night", props: [{ k: "whale", x: 390, y: 320, s: 0.6 }, { k: "heart", x: 420, y: 200, s: 0.5 }], fx: ["notes"] },
      },
      {
        text: { id: "\"Umi juga bernyanyi pelan untuk Mo,\" bisik Mo. Umi tersenyum dan mulai bersenandung.", en: "\"You sing softly to me too, Umi,\" Mo whispered. Umi smiled and began to hum." },
        scene: { focus: 340, bg: "bedroom", time: "night", mo: [{ who: "umi", pose: "kneel-smile", x: 280 }, { pose: "pose-36", x: 410 }], fx: ["notes"] },
      },
      {
        text: { id: "Bayi paus tidak bisa bernapas di dalam air. Saat ia lelah, ibunya mendorongnya pelan ke permukaan supaya ia bisa menghirup udara.", en: "Baby whales can't breathe underwater. When he got tired, his mother gently pushed him up to the surface so he could breathe the air." },
        scene: { focus: 400, bg: "underwater", props: [{ k: "whale", x: 390, y: 360, s: 0.6 }, { k: "whale", x: 400, y: 230, s: 0.27 }], fx: ["bubbles"] },
      },
      {
        text: { id: "Perjalanan itu sangat panjang. Ibu paus hampir tidak makan selama berbulan-bulan, karena ia terus menjaga dan menyusui bayinya.", en: "The journey was very long. The mother whale hardly ate for months, because she kept caring for her baby and feeding him her milk." },
        scene: { focus: 400, bg: "underwater", props: [{ k: "whale", x: 390, y: 300, s: 0.6 }, { k: "whale", x: 440, y: 385, s: 0.26 }, { k: "jellyfish", x: 300, y: 240, s: 0.8 }], fx: ["bubbles"] },
      },
      {
        text: { id: "\"Berbulan-bulan tidak makan?\" bisik Mo. \"Ibu paus sayang sekali sama bayinya.\" \"Begitulah semua ibu,\" jawab Umi pelan.", en: "\"Months without eating?\" Mo whispered. \"The mother whale must love her baby so much.\" \"That's how all mothers are,\" Umi answered softly." },
        scene: { focus: 340, bg: "bedroom", time: "night", mo: [{ who: "umi", pose: "grateful-hands", x: 280 }, { pose: "wow", x: 410 }] },
      },
      {
        text: { id: "Umi mencium kening Mo. \"Rasulullah ﷺ suka mencium cucunya. Kata beliau, siapa yang menyayangi akan disayangi Allah.\"", en: "Umi kissed Mo's forehead. \"The Prophet ﷺ loved to kiss his grandchildren. He said whoever shows mercy will be shown mercy by Allah.\"" },
        quote: { id: "\"Barangsiapa yang tidak menyayangi, maka ia tidak akan disayangi.\" (HR. Bukhari dan Muslim)", en: "\"Whoever does not show mercy will not be shown mercy.\" (Bukhari and Muslim)" },
        scene: { focus: 340, bg: "bedroom", time: "night", mo: [{ who: "umi", pose: "touched-cheek", x: 280 }, { pose: "pose-35", x: 410 }], fx: ["hearts"] },
      },
      {
        text: { id: "Akhirnya mereka tiba di laut yang hangat dan biru. Badai sudah lama berlalu, dan bayi paus berenang riang di samping ibunya.", en: "At last they reached the warm blue sea. The storm was long gone, and the baby whale swam happily beside his mother." },
        scene: { focus: 400, bg: "underwater", props: [{ k: "coral", x: 480 }, { k: "whale", x: 390, y: 280, s: 0.6 }, { k: "whale", x: 440, y: 360, s: 0.26 }, { k: "fishschool", x: 400 }], fx: ["sparkle", "bubbles"] },
      },
      {
        text: { id: "Di luar, hujan pun mulai reda. Petir sudah tidak terdengar lagi. Mata Mo mulai berat.", en: "Outside, the rain was easing too. There was no more thunder. Mo's eyes were getting heavy." },
        scene: { focus: 340, bg: "bedroom", time: "night", mo: [{ pose: "pose-39", x: 340 }], fx: ["stars"] },
      },
      {
        text: { id: "\"Umi,\" bisik Mo, \"kalau nanti Umi sudah tua dan takut, Mo yang akan bernyanyi untuk Umi.\" Umi memeluk Mo lama sekali.", en: "\"Umi,\" Mo whispered, \"when you're old and you feel scared, I'll be the one who sings to you.\" Umi held him for a long, long time." },
        scene: { focus: 340, bg: "bedroom", time: "night", mo: [{ who: "umi", pose: "hug-mo", x: 340 }], fx: ["hearts", "stars"] },
      },
      {
        text: { id: "Lagu apa yang paling kamu suka saat dinyanyikan Umi atau Abi? 🐋", en: "Which song do you love most when Umi or Abi sings it to you? 🐋" },
        scene: { focus: 400, bg: "underwater", time: "night", props: [{ k: "whale", x: 390, y: 310, s: 0.6 }, { k: "whale", x: 430, y: 385, s: 0.26 }], fx: ["notes", "zzz"] },
      },
    ],
  },
  /* ───────────────────────── Sea 5. The sideways crab ───────────────────────── */
  {
    slug: "kepiting-yang-berjalan-miring",
    pose: "baby-mo-pose-14.png",
    published: "2026-11-22",
    title: { id: "Kepiting yang Berjalan Miring", en: "The Crab Who Walked Sideways" },
    hook: {
      id: "Mo menertawakan kepiting yang berjalan miring. Lalu sandal baru membuat jalan Mo jadi lucu… dan kali ini Mo yang ditertawakan.",
      en: "Mo laughs at a crab for walking sideways. Then his new sandals make him walk funny… and this time, it's Mo who gets laughed at.",
    },
    anchor: { type: "parenting", slug: "adab-sehari-hari" },
    takeaway: {
      id: "Anak belajar empati paling dalam saat ia merasakannya sendiri. Bantu ia menghubungkan rasa sakit ditertawakan dengan cara ia memperlakukan yang berbeda.",
      en: "Children learn empathy most deeply when they feel it themselves. Help them connect the sting of being laughed at with how they treat anyone different.",
    },
    tags: ["mengejek", "empati", "kepiting", "pantai", "perbedaan", "maaf"],
    card: {
      title: { id: "Saat Anak Mengejek", en: "When Your Child Teases Others" },
      items: {
        id: [
          "Hentikan dengan tenang, lalu tanyakan: \"Kalau kamu yang ditertawakan, rasanya bagaimana?\"",
          "Pakai contoh dari alam: kepiting berjalan miring, ikan berenang, burung terbang — semua berbeda karena Allah menciptakannya begitu.",
          "Jadilah contoh: hindari menertawakan bentuk tubuh, logat, atau cara bicara orang lain di depan anak.",
        ],
        en: [
          "Stop it calmly, then ask: \"If someone laughed at you, how would it feel?\"",
          "Use nature: crabs walk sideways, fish swim, birds fly — all different because Allah made them that way.",
          "Model it: avoid laughing at people's bodies, accents or the way they speak in front of your child.",
        ],
      },
    },
    cover: {
      focus: 380, bg: "beach",
      props: [{ k: "crab", x: 430, s: 1.2 }, { k: "sandcastle", x: 540 }],
      mo: [{ pose: "pose-25", x: 320 }],
      fx: ["sparkle"],
    },
    pages: [
      {
        text: { id: "Di pantai, Mo melihat seekor kepiting merah berjalan… miring! Kres-kres-kres, ke kiri. Kres-kres-kres, ke kanan.", en: "At the beach, Mo spotted a red crab walking… sideways! Scuttle-scuttle to the left. Scuttle-scuttle to the right." },
        scene: { focus: 370, bg: "beach", props: [{ k: "crab", x: 440, s: 1.1 }, { k: "shell", x: 500 }], mo: [{ pose: "wow", x: 320 }] },
      },
      {
        text: { id: "Mo tertawa terbahak-bahak. \"Kepiting aneh! Jalannya salah!\" Mo pura-pura berjalan miring sambil mengejek.", en: "Mo burst out laughing. \"Silly crab! It's walking wrong!\" Mo pretended to walk sideways, making fun of it." },
        scene: { focus: 370, bg: "beach", props: [{ k: "crab", x: 440, s: 1.1 }], mo: [{ pose: "pose-08", x: 310 }] },
      },
      {
        text: { id: "Ais ikut tertawa dan berjalan miring juga. \"Kres-kres! Aku kepiting aneh!\"", en: "Ais laughed too and walked sideways as well. \"Scuttle-scuttle! I'm a silly crab!\"" },
        scene: { focus: 360, bg: "beach", props: [{ k: "crab", x: 460, s: 1 }], mo: [{ who: "ais", pose: "giggle", x: 290 }, { pose: "pose-30", x: 380 }] },
      },
      {
        text: { id: "Kepiting kecil itu berlari masuk ke lubang pasir. Ia tidak mau keluar lagi.", en: "The little crab ran into a hole in the sand. It didn't want to come out again." },
        scene: { focus: 400, bg: "beach", props: [{ k: "puddle", x: 420, s: 0.6 }, { k: "crab", x: 420, y: 418, s: 0.8 }, { k: "shell", x: 520 }] },
      },
      {
        text: { id: "Kak Adam berjongkok. \"Kepiting tidak salah jalan, lho. Kakinya memang menekuk ke samping. Kalau berjalan miring, ia malah bisa lari secepat kilat!\"", en: "Kak Adam crouched down. \"The crab isn't walking wrong, you know. Its legs bend sideways. Walking sideways, it can run as fast as lightning!\"" },
        scene: { focus: 340, bg: "beach", mo: [{ who: "adam", pose: "kneel-talk", x: 290 }, { pose: "pose-40", x: 420 }] },
      },
      {
        text: { id: "\"Allah menciptakan kakinya pas sekali untuk hidup di pantai yang licin dan berbatu,\" kata Kak Adam. \"Dia tidak aneh. Dia hebat.\"", en: "\"Allah made its legs just right for slippery, rocky beaches,\" said Kak Adam. \"It isn't silly. It's amazing.\"" },
        scene: { focus: 400, bg: "beach", props: [{ k: "crab", x: 400, s: 1.6 }, { k: "shell", x: 520 }, { k: "starfish", x: 290 }], fx: ["sparkle"] },
      },
      {
        text: { id: "Siang itu, Mo memakai sandal baru yang kebesaran. Plok-plek, plok-plek! Jalannya jadi lucu sekali.", en: "That afternoon, Mo put on new sandals that were too big. Flip-flop, flip-flop! He walked in a very funny way." },
        scene: { focus: 350, bg: "beach", mo: [{ pose: "pose-34", x: 350 }] },
      },
      {
        text: { id: "Beberapa anak di pantai menunjuk dan tertawa. \"Lihat, jalannya kayak bebek!\"", en: "Some children on the beach pointed and laughed. \"Look, he walks like a duck!\"" },
        scene: { focus: 350, bg: "beach", mo: [{ pose: "pose-38", x: 350 }] },
      },
      {
        text: { id: "Wajah Mo terasa panas. Hatinya sakit sekali. Mo ingin bersembunyi di lubang pasir, seperti kepiting tadi.", en: "Mo's face went hot. His heart hurt so much. He wanted to hide in a hole in the sand, just like the crab." },
        scene: { focus: 350, bg: "beach", mo: [{ pose: "pose-10", x: 350 }] },
      },
      {
        text: { id: "Lalu Mo teringat kepiting kecil. \"Ternyata ditertawakan itu tidak enak…\" bisiknya.", en: "Then Mo remembered the little crab. \"Being laughed at feels horrible…\" he whispered." },
        scene: { focus: 350, bg: "beach", props: [{ k: "crab", x: 470, y: 418, s: 0.8 }], mo: [{ pose: "pose-36", x: 340 }] },
      },
      {
        text: { id: "Umi duduk di samping Mo. \"Allah melarang kita mengolok-olok, karena bisa jadi yang diolok-olok lebih baik dari yang mengolok.\"", en: "Umi sat down beside Mo. \"Allah tells us not to mock others, because the one being mocked may well be better than the one mocking.\"" },
        quote: { id: "\"Wahai orang-orang yang beriman! Janganlah suatu kaum mengolok-olok kaum yang lain, (karena) boleh jadi mereka (yang diolok-olok) lebih baik dari mereka (yang mengolok-olok).\" (QS. Al-Hujurat: 11)", en: "\"O you who believe, let not some people mock others; perhaps they may be better than them.\" (Qur'an, Al-Hujurat 49:11)" },
        scene: { focus: 340, bg: "beach", mo: [{ who: "umi", pose: "kneel-smile", x: 280 }, { pose: "pose-36", x: 410 }], fx: ["hearts"] },
      },
      {
        text: { id: "Mo kembali ke lubang kepiting dan berjongkok. \"Maaf ya, kepiting. Mo tidak akan mengejek lagi.\"", en: "Mo went back to the crab's hole and crouched down. \"I'm sorry, crab. I won't make fun of you again.\"" },
        scene: { focus: 370, bg: "beach", props: [{ k: "puddle", x: 460, s: 0.6 }], mo: [{ pose: "pose-14", x: 340 }] },
      },
      {
        text: { id: "Pelan-pelan kepiting itu keluar lagi, dan menggerak-gerakkan capitnya seperti sedang melambai.", en: "Slowly the crab came out again, and waved its claws as if to say hello." },
        scene: { focus: 380, bg: "beach", props: [{ k: "crab", x: 440, s: 1.1 }], mo: [{ pose: "pose-31", x: 320 }], fx: ["sparkle"] },
      },
      {
        text: { id: "\"Kepiting jalannya miring, ikan berenang, burung terbang, Mo jalannya plok-plek,\" kata Ais. \"Semua beda, semua keren!\"", en: "\"Crabs walk sideways, fish swim, birds fly, and Mo goes flip-flop,\" said Ais. \"Everyone's different, and everyone's cool!\"" },
        scene: { focus: 360, bg: "beach", props: [{ k: "bird", x: 520, y: 200 }], mo: [{ who: "ais", pose: "arms-wide-joy", x: 300 }, { pose: "pose-25", x: 420 }], fx: ["confetti"] },
      },
      {
        text: { id: "Mereka membuat istana pasir dengan pintu di samping — khusus untuk kepiting yang berjalan miring.", en: "They built a sandcastle with a door on the side — specially for a crab who walks sideways." },
        scene: { focus: 380, bg: "beach", props: [{ k: "sandcastle", x: 440 }, { k: "crab", x: 520, s: 1 }, { k: "bucket", x: 330 }], mo: [{ pose: "pose-29", x: 280 }], fx: ["sparkle"] },
      },
      {
        text: { id: "Kalau melihat teman yang berbeda, apa yang bisa kamu katakan supaya hatinya senang? 🦀", en: "When you meet a friend who's different, what could you say to make their heart happy? 🦀" },
        scene: { focus: 370, bg: "beach", props: [{ k: "crab", x: 440, s: 1.1 }], mo: [{ pose: "yes", x: 320, move: "hop" }], fx: ["hearts"] },
      },
    ],
  },
  /* ───────────────────────── New 6. The orangutan's tree ───────────────────────── */
  {
    slug: "orangutan-dan-pohon-untuk-anaknya",
    pose: "baby-mo-pose-11.png",
    published: "2026-11-23",
    title: { id: "Orangutan dan Pohon untuk Anaknya", en: "The Orangutan and a Tree for Her Baby" },
    hook: {
      id: "Bayi orangutan dipeluk ibunya selama tujuh tahun. Tapi suatu hari, pohon-pohon rumah mereka tumbang… Hari ini, Mo dan keluarganya menanam harapan.",
      en: "A baby orangutan stays in its mother's arms for seven years. But one day, the trees they call home come crashing down… Today, Mo and his family plant some hope.",
    },
    anchor: { type: "parenting", slug: "bersyukur" },
    takeaway: {
      id: "Anak belum bisa menyelamatkan hutan, tapi ia bisa menanam satu pohon dan merawatnya. Kebiasaan kecil itulah yang kelak menjadi kepedulian besar.",
      en: "Children can't save a rainforest yet, but they can plant one tree and look after it. Small habits like that grow into a lifetime of caring.",
    },
    tags: ["orangutan", "hutan", "pohon", "menanam", "alam", "kalimantan"],
    card: {
      title: { id: "Mengenalkan Anak Menjaga Hutan", en: "Helping Children Care for Forests" },
      items: {
        id: [
          "Tanam satu tanaman bersama dan beri anak tugas merawatnya setiap hari — menyiram, melihat daun baru, mencatat tingginya.",
          "Biasakan memakai kertas dua sisi dan memilah sampah. Jelaskan sederhana: \"Kertas berasal dari pohon.\"",
          "Ceritakan sebab-akibat dengan lembut (pohon = rumah hewan dan udara segar), lalu langsung tunjukkan apa yang bisa kita lakukan.",
        ],
        en: [
          "Grow one plant together and give your child the job of caring for it daily — watering, spotting new leaves, measuring it.",
          "Use both sides of paper and sort your rubbish. Explain simply: \"Paper comes from trees.\"",
          "Explain cause and effect gently (trees = animal homes and fresh air), then go straight to what we can do.",
        ],
      },
    },
    cover: {
      focus: 360, bg: "forest",
      props: [{ k: "orangutan", x: 380 }],
      fx: ["leaves"],
    },
    pages: [
      {
        text: { id: "Abi pulang membawa bibit pohon kecil. \"Hari ini kita menanam pohon,\" kata Abi. \"Tapi dulu, Abi mau cerita kenapa pohon itu penting sekali.\"", en: "Abi came home with a little tree seedling. \"Today we're planting a tree,\" said Abi. \"But first, let me tell you why trees matter so much.\"" },
        scene: { focus: 340, bg: "garden", props: [{ k: "seedling", x: 450 }], mo: [{ who: "ayah", pose: "kneel-present", x: 280 }, { pose: "pose-26", x: 400 }] },
      },
      {
        text: { id: "Jauh di hutan Kalimantan, hiduplah seekor ibu orangutan bernama Ibu Rimba, dan bayinya yang kecil bernama Utan.", en: "Far away in the forests of Kalimantan lived a mother orangutan called Ibu Rimba, and her tiny baby, Utan." },
        scene: { focus: 380, bg: "forest", props: [{ k: "orangutan", x: 390 }], fx: ["leaves"] },
      },
      {
        text: { id: "Setiap hari Ibu Rimba berayun dari dahan ke dahan, dan Utan memeluk erat bulu ibunya. Tidak pernah dilepaskan.", en: "Every day Ibu Rimba swung from branch to branch, and Utan held tight to his mother's fur. She never, ever let go." },
        scene: { focus: 380, bg: "forest", props: [{ k: "orangutanswing", x: 420, y: 380, s: 0.85 }], fx: ["leaves"] },
      },
      {
        text: { id: "Tahukah kamu? Bayi orangutan tinggal bersama ibunya sampai umur tujuh atau delapan tahun — lebih lama dari hampir semua hewan lain di dunia.", en: "Did you know? Baby orangutans stay with their mothers until they're seven or eight years old — longer than almost any other animal in the world." },
        scene: { focus: 380, bg: "forest", props: [{ k: "orangutan", x: 390 }, { k: "heart", x: 440, y: 160, s: 0.5 }], fx: ["sparkle"] },
      },
      {
        text: { id: "\"Tujuh tahun? Itu kan umur Kak Adam!\" seru Mo. Kak Adam tertawa. \"Berarti Kak Adam masih boleh dipeluk Umi terus, dong.\"", en: "\"Seven years? That's how old Kak Adam is!\" said Mo. Kak Adam laughed. \"So I'm still allowed lots of hugs from Umi, then.\"" },
        scene: { focus: 340, bg: "garden", mo: [{ who: "adam", pose: "laugh-tummy", x: 290 }, { pose: "wow", x: 420 }] },
      },
      {
        text: { id: "Ibu Rimba mengajari Utan banyak hal: buah mana yang boleh dimakan, dan cara membuat sarang dari daun. Setiap malam, sarang baru!", en: "Ibu Rimba taught Utan so many things: which fruits were good to eat, and how to make a nest out of leaves. A brand-new nest every night!" },
        scene: { focus: 380, bg: "forest", time: "dusk", props: [{ k: "orangutan", x: 390 }], fx: ["leaves"] },
      },
      {
        text: { id: "Tapi suatu hari terdengar suara keras. Brrrrrm! Pohon-pohon besar tumbang satu per satu.", en: "But one day there was a loud noise. Brrrrrm! The big trees came crashing down, one after another." },
        scene: { focus: 380, bg: "forest", time: "dusk", props: [{ k: "stump", x: 300 }, { k: "stump", x: 460, s: 1.2 }, { k: "cloud", x: 380, y: 260, s: 0.5 }], fx: ["leaves"] },
      },
      {
        text: { id: "Hutan rumah mereka menjadi semakin kecil. Ibu Rimba harus berjalan jauh sekali untuk mencari buah, sambil terus menggendong Utan.", en: "Their forest home kept getting smaller. Ibu Rimba had to walk a very long way to find fruit, carrying Utan the whole time." },
        scene: { focus: 380, bg: "forest", time: "dusk", props: [{ k: "stump", x: 260 }, { k: "orangutan", x: 410, s: 0.8 }, { k: "stump", x: 540 }] },
      },
      {
        text: { id: "\"Kasihan Utan,\" bisik Ais. Matanya berkaca-kaca. Mo diam, menggenggam bibit pohon erat-erat.", en: "\"Poor Utan,\" whispered Ais, her eyes filling with tears. Mo was quiet, holding the seedling tight." },
        scene: { focus: 340, bg: "garden", props: [{ k: "seedling", x: 450 }], mo: [{ who: "ais", pose: "sad-tears", x: 300 }, { pose: "pose-36", x: 410 }] },
      },
      {
        text: { id: "\"Kabar baiknya,\" kata Abi, \"banyak orang baik yang menjaga hutan dan menanam pohon lagi. Ada juga tempat yang merawat orangutan sampai mereka bisa pulang ke hutan.\"", en: "\"Here's the good news,\" said Abi. \"Lots of kind people protect the forests and plant trees again. There are even places that care for orangutans until they can go home to the forest.\"" },
        scene: { focus: 340, bg: "garden", mo: [{ who: "ayah", pose: "kneel-arms-open", x: 280 }, { who: "ais", pose: "calm-sit", x: 410 }], fx: ["hearts"] },
      },
      {
        text: { id: "Di tempat yang dulu gundul, pohon-pohon kecil mulai tumbuh. Pelan-pelan, hutan itu menjadi rumah lagi untuk Ibu Rimba dan Utan.", en: "Where the ground had been bare, little trees began to grow. Slowly, the forest became a home again for Ibu Rimba and Utan." },
        scene: { focus: 380, bg: "forest", props: [{ k: "plant", x: 270 }, { k: "orangutan", x: 400 }, { k: "seedling", x: 530 }], fx: ["sparkle", "leaves"] },
      },
      {
        text: { id: "\"Menanam pohon itu sedekah,\" kata Abi. \"Setiap kali burung, hewan, atau manusia menikmatinya, pahalanya terus mengalir.\"", en: "\"Planting a tree is a kind of charity,\" said Abi. \"Every time a bird, an animal or a person enjoys it, the reward keeps flowing.\"" },
        quote: { id: "\"Tidaklah seorang muslim menanam pohon atau menanam tanaman, lalu dimakan oleh burung, manusia, atau binatang, melainkan itu menjadi sedekah baginya.\" (HR. Bukhari dan Muslim)", en: "\"No Muslim plants a tree or sows a crop, and a bird, person or animal eats from it, except that it counts as charity for him.\" (Bukhari and Muslim)" },
        scene: { focus: 340, bg: "garden", props: [{ k: "seedling", x: 440 }], mo: [{ who: "ayah", pose: "teach-point-kneel", x: 280 }, { pose: "pose-22", x: 400 }] },
      },
      {
        text: { id: "Mo menggali tanah, Kak Adam memasukkan bibit, dan Ais menyiramnya. \"Bismillah. Tumbuh yang besar, ya, pohon!\"", en: "Mo dug the soil, Kak Adam put the seedling in, and Ais watered it. \"Bismillah. Grow big and strong, little tree!\"" },
        scene: { focus: 340, bg: "garden", props: [{ k: "seedling", x: 400 }], mo: [{ who: "adam", pose: "watering-can", x: 300 }, { pose: "pose-11", x: 460 }], fx: ["sparkle"] },
      },
      {
        text: { id: "Mo mendapat ide. \"Abi, kertas juga dari pohon, kan? Mulai sekarang Mo menggambar di dua sisi kertas!\"", en: "Mo had an idea. \"Abi, paper comes from trees too, doesn't it? From now on I'll draw on both sides of the paper!\"" },
        scene: { focus: 350, bg: "living", props: [{ k: "drawing", x: 450, y: 360 }], mo: [{ pose: "idea", x: 340 }], fx: ["sparkle"] },
      },
      {
        text: { id: "Malam itu, jauh di Kalimantan, Utan tidur di sarang daun yang baru, di dalam pelukan ibunya.", en: "That night, far away in Kalimantan, Utan slept in a brand-new leaf nest, wrapped in his mother's arms." },
        scene: { focus: 380, bg: "forest", time: "night", props: [{ k: "orangutan", x: 390 }], fx: ["zzz", "stars"] },
      },
      {
        text: { id: "Setiap pagi Mo menyapa pohonnya: \"Assalamu'alaikum, pohon!\" Pohon apa yang ingin kamu tanam? 🌳", en: "Every morning Mo says hello to his tree: \"Assalamu'alaikum, tree!\" What tree would you like to plant? 🌳" },
        scene: { focus: 350, bg: "garden", props: [{ k: "plant", x: 450 }], mo: [{ pose: "pose-01", x: 340 }], fx: ["sparkle"] },
      },
    ],
  },
  /* ───────────────────────── New 7. When the earth shakes ───────────────────────── */
  {
    slug: "saat-bumi-bergoyang",
    pose: "baby-mo-pose-27.png",
    published: "2026-11-24",
    title: { id: "Saat Bumi Bergoyang", en: "When the Ground Shakes" },
    hook: {
      id: "Lampu berayun, bingkai foto miring, lantai bergoyang! Si kembar tahu persis apa yang harus dilakukan: merunduk, berlindung, berpegangan.",
      en: "The lamp swings, the picture frame tilts, the floor shakes! The twins know exactly what to do: drop, cover and hold on.",
    },
    anchor: { type: "doa", slug: "doa-hasbunallah" },
    takeaway: {
      id: "Indonesia sering mengalami gempa. Anak yang sudah berlatih tidak panik — ia tahu langkahnya, dan ia tahu Allah selalu menjaga.",
      en: "Indonesia has earthquakes often. A child who has practised doesn't panic — they know the steps, and they know Allah is always watching over them.",
    },
    tags: ["gempa", "keselamatan", "siaga bencana", "tenang", "doa", "keluarga"],
    card: {
      title: { id: "Siaga Gempa Bersama Anak", en: "Earthquake-Ready with Children" },
      items: {
        id: [
          "Ajarkan \"Merunduk, Berlindung, Berpegangan\" (di bawah meja kokoh, jauh dari jendela dan lemari), lalu latih seperti permainan beberapa kali setahun.",
          "Sepakati titik kumpul keluarga dan siapkan tas siaga: air, senter, peluit, obat, makanan ringan, dan salinan dokumen.",
          "Setelah gempa: keluar dengan tenang (jangan pakai lift), ikuti info BMKG/BPBD, dan beri ruang untuk anak bercerita tentang rasa takutnya.",
        ],
        en: [
          "Teach \"Drop, Cover, Hold On\" (under a sturdy table, away from windows and cupboards), and practise it like a game a few times a year.",
          "Agree on a family meeting point and pack a go-bag: water, torch, whistle, medicine, snacks and copies of documents.",
          "After a quake: leave calmly (never use the lift), follow official updates, and give your child space to talk about feeling scared.",
        ],
      },
    },
    cover: {
      focus: 380, bg: "living",
      props: [{ k: "table", x: 380 }, { k: "framefall", x: 520, y: 200 }],
      mo: [{ pose: "pose-10", x: 380 }],
      fx: ["quake"],
    },
    pages: [
      {
        text: { id: "Sore itu tenang sekali. Mo membangun menara balok, Ais menggambar, dan Umi menyiram tanaman di dekat jendela.", en: "It was a quiet afternoon. Mo was building a block tower, Ais was drawing, and Umi was watering the plants by the window." },
        scene: { focus: 340, bg: "living", props: [{ k: "blockstall", x: 440 }], mo: [{ pose: "pose-36", x: 330 }, { who: "ais", pose: "draw-floor", x: 230 }] },
      },
      {
        text: { id: "Tiba-tiba lantai bergoyang! Lampu berayun, gelas bergetar, bingkai foto miring. GRRRR… \"Umi!\" teriak Mo.", en: "Suddenly the floor began to shake! The lamp swung, the glasses rattled, the picture frame tilted. RUMBLE… \"Umi!\" shouted Mo." },
        scene: { focus: 360, bg: "living", props: [{ k: "framefall", x: 420, y: 210 }, { k: "blocksfall", x: 440 }], mo: [{ pose: "pose-33", x: 330 }], fx: ["quake"] },
      },
      {
        text: { id: "Umi berseru dengan suara tenang: \"Gempa! Merunduk, berlindung, berpegangan!\"", en: "Umi called out in a calm voice: \"Earthquake! Drop, cover, hold on!\"" },
        scene: { focus: 340, bg: "living", props: [{ k: "framefall", x: 430, y: 210 }], mo: [{ who: "umi", pose: "idea-finger", x: 300 }], fx: ["quake"] },
      },
      {
        text: { id: "Si kembar merunduk ke bawah meja yang kokoh, melindungi kepala dengan tangan, dan berpegangan pada kaki meja.", en: "The twins dropped down under the sturdy table, covered their heads with their hands, and held on to the table leg." },
        scene: { focus: 380, bg: "living", props: [{ k: "table", x: 380 }], mo: [{ pose: "pose-10", x: 340 }, { who: "ais", pose: "scared-hide", x: 420 }], fx: ["quake"] },
      },
      {
        text: { id: "Umi ikut berlindung di samping mereka, jauh dari jendela dan lemari. Pelan-pelan Umi berbisik, \"Hasbunallah wa ni'mal wakiil.\"", en: "Umi took cover next to them, away from the window and the cupboard. Softly she whispered, \"Hasbunallah wa ni'mal wakiil.\"" },
        quote: { id: "\"Hasbunallaahu wa ni'mal wakiil.\" — Cukuplah Allah menjadi penolong kami, dan Dia sebaik-baik pelindung. (QS. Ali 'Imran: 173)", en: "\"Hasbunallaahu wa ni'mal wakiil.\" — Allah is enough for us, and He is the best Protector. (Qur'an, Ali 'Imran 3:173)" },
        scene: { focus: 360, bg: "living", props: [{ k: "table", x: 400 }], mo: [{ who: "umi", pose: "dua-kneel", x: 270 }, { pose: "pose-10", x: 410 }], fx: ["quake"] },
      },
      {
        text: { id: "Lalu goyangannya berhenti. Sunyi. Mo masih gemetar, dan air matanya mulai keluar.", en: "Then the shaking stopped. Silence. Mo was still trembling, and tears began to fall." },
        scene: { focus: 360, bg: "living", props: [{ k: "table", x: 380 }, { k: "blocksfall", x: 520 }], mo: [{ pose: "pose-09", x: 360 }] },
      },
      {
        text: { id: "Umi memeluk Mo dan Ais erat-erat. \"Kalian hebat. Kalian melakukan semuanya dengan benar.\"", en: "Umi held Mo and Ais tight. \"You were wonderful. You did everything exactly right.\"" },
        scene: { focus: 340, bg: "living", mo: [{ who: "umi", pose: "hug-mo", x: 320 }, { who: "ais", pose: "hug-heart", x: 440 }], fx: ["hearts"] },
      },
      {
        text: { id: "Setelah goyangan berhenti, mereka keluar rumah dengan tenang — berjalan, tidak berlari — menuju lapangan terbuka.", en: "Once the shaking had stopped, they left the house calmly — walking, not running — towards the open field." },
        scene: { focus: 340, bg: "street", mo: [{ who: "umi", pose: "walk-bag", x: 280 }, { pose: "pose-42", x: 400 }] },
      },
      {
        text: { id: "Di titik kumpul, para tetangga sudah berkumpul. Abi datang dari masjid dan langsung menggandeng si kembar. \"Alhamdulillah, kalian selamat.\"", en: "At the meeting point, the neighbours had gathered. Abi came from the mosque and took the twins' hands straight away. \"Alhamdulillah, you're safe.\"" },
        scene: { focus: 370, bg: "park", mo: [{ who: "ayah", pose: "hold-hands-twins", x: 370, s: 210 }], fx: ["hearts"] },
      },
      {
        text: { id: "\"Bumi kita seperti kue lapis raksasa yang kadang bergeser sedikit,\" jelas Abi. \"Indonesia sering ada gempa, jadi kita harus selalu siap.\"", en: "\"The earth is like a giant layer cake that sometimes shifts a little,\" Abi explained. \"Indonesia has lots of earthquakes, so we always need to be ready.\"" },
        scene: { focus: 340, bg: "park", mo: [{ who: "ayah", pose: "teach-point-kneel", x: 280 }, { pose: "pose-23", x: 410 }] },
      },
      {
        text: { id: "\"Kalau gempanya datang lagi?\" tanya Mo pelan. \"Kita sudah tahu caranya,\" jawab Abi. \"Dan Allah selalu bersama kita.\"", en: "\"What if it comes again?\" Mo asked quietly. \"We know what to do now,\" said Abi. \"And Allah is always with us.\"" },
        scene: { focus: 340, bg: "park", mo: [{ who: "ayah", pose: "kneel-arms-open", x: 280 }, { pose: "pose-05", x: 410 }] },
      },
      {
        text: { id: "Malamnya mereka menyiapkan tas siaga: senter, air minum, obat, roti, dan peluit. \"Peluitnya untuk memanggil bantuan,\" kata Abi.", en: "That evening they packed a go-bag: a torch, water, medicine, bread and a whistle. \"The whistle is for calling for help,\" said Abi." },
        scene: { focus: 340, bg: "living", time: "night", props: [{ k: "flashlight", x: 420, y: 400, s: 0.6 }, { k: "water", x: 470, s: 0.8 }], mo: [{ who: "umi", pose: "kneel-smile", x: 250 }, { pose: "pose-22", x: 350 }] },
      },
      {
        text: { id: "Abi membuat permainan latihan. Kalau Abi bilang \"Gempa!\", semua merunduk ke bawah meja secepat kilat!", en: "Abi made it into a practice game. Whenever Abi said \"Earthquake!\", everyone dived under the table as fast as lightning!" },
        scene: { focus: 360, bg: "living", props: [{ k: "table", x: 420 }], mo: [{ who: "ayah", pose: "idea-point-stand", x: 260 }, { pose: "pose-10", x: 420 }] },
      },
      {
        text: { id: "Ais yang paling cepat! \"Merunduk, berlindung, berpegangan!\" serunya bangga.", en: "Ais was the fastest! \"Drop, cover, hold on!\" she cheered proudly." },
        scene: { focus: 350, bg: "living", mo: [{ who: "ais", pose: "cheer-fist", x: 350 }], fx: ["confetti"] },
      },
      {
        text: { id: "Sebelum tidur, mereka berdoa agar Allah menjaga semua orang yang rumahnya terkena gempa.", en: "Before bed, they made du'a for Allah to protect everyone whose homes had been hit by earthquakes." },
        scene: { focus: 340, bg: "bedroom", time: "night", mo: [{ who: "umi", pose: "dua-sit", x: 270 }, { pose: "pose-12", x: 400 }], fx: ["stars"] },
      },
      {
        text: { id: "Kamu masih ingat tiga langkahnya? Merunduk, berlindung, berpegangan! 🏠", en: "Can you remember the three steps? Drop, cover, hold on! 🏠" },
        scene: { focus: 360, bg: "living", props: [{ k: "table", x: 420 }], mo: [{ pose: "pose-27", x: 330 }], fx: ["sparkle"] },
      },
    ],
  },
  /* ───────────────────────── New 8. Kakek's chair ───────────────────────── */
  {
    slug: "kursi-kakek",
    pose: "baby-mo-thank-you.png",
    published: "2026-11-25",
    title: { id: "Kursi Kakek", en: "Kakek's Chair" },
    hook: {
      id: "Kursi cokelat itu kini kosong. Hanya tasbih hijau Kakek yang tertinggal. Mo bertanya: apakah Kakek masih bisa menerima hadiah dari kita?",
      en: "The brown armchair is empty now. Only Kakek's green prayer beads are left. Mo wonders: can Kakek still receive a gift from us?",
    },
    anchor: { type: "hadith", slug: "doa-anak-shalih" },
    takeaway: {
      id: "Anak perlu kata-kata yang jujur tentang kematian, izin untuk bersedih, dan sesuatu untuk dilakukan. Doa mengubah rindu menjadi hadiah.",
      en: "Children need honest words about death, permission to feel sad, and something they can do. Du'a turns missing someone into a gift.",
    },
    tags: ["kematian", "duka", "kakek", "rindu", "doa", "sedekah"],
    card: {
      title: { id: "Saat Anak Bertanya tentang Kematian", en: "When Children Ask About Death" },
      items: {
        id: [
          "Pakai kata yang jelas: \"Kakek meninggal. Tubuhnya berhenti bekerja.\" Hindari \"Kakek tidur\" atau \"pergi jauh\" — itu bisa membingungkan dan menakutkan.",
          "Tidak apa-apa anak melihat Anda menangis. Beri nama perasaannya, dan siap menjawab pertanyaan yang sama berulang kali.",
          "Beri anak sesuatu untuk dilakukan: mendoakan, bersedekah atas nama almarhum, atau menggambar kenangan bersama.",
        ],
        en: [
          "Use clear words: \"Kakek died. His body stopped working.\" Avoid \"he's sleeping\" or \"he went away\" — these can confuse and frighten.",
          "It's okay for your child to see you cry. Name the feelings, and be ready to answer the same questions many times.",
          "Give them something to do: make du'a, give charity in the person's name, or draw happy memories together.",
        ],
      },
    },
    cover: {
      focus: 380, bg: "living",
      props: [{ k: "kakekchair", x: 440 }],
      mo: [{ pose: "pose-36", x: 320 }],
      fx: ["sparkle"],
    },
    pages: [
      {
        text: { id: "Di rumah Nenek ada kursi cokelat yang empuk. Itu kursi Kakek. Di sana Kakek biasa duduk, berdzikir dengan tasbih hijaunya.", en: "At Nenek's house there was a soft brown armchair. It was Kakek's chair. That's where he always sat, doing dhikr with his green prayer beads." },
        scene: { focus: 380, bg: "living", props: [{ k: "kakekchair", x: 440 }, { k: "photo", x: 560, y: 210 }], mo: [{ pose: "pose-14", x: 320 }] },
      },
      {
        text: { id: "Kakek suka memangku Mo dan bercerita tentang kampung: kerbau yang malas, sungai yang jernih, dan layang-layang yang terbang tinggi.", en: "Kakek loved to sit Mo on his lap and tell stories about his village: a lazy water buffalo, a clear river and kites flying high." },
        scene: { focus: 380, bg: "living", props: [{ k: "kakekchair", x: 440 }, { k: "photo", x: 400, y: 220, s: 0.8 }], mo: [{ pose: "pose-07", x: 320 }], fx: ["sparkle", "hearts"] },
      },
      {
        text: { id: "Suatu pagi, telepon berdering. Abi mendengarkan lama sekali, lalu duduk pelan-pelan. \"Innaa lillaahi wa innaa ilaihi raaji'uun.\"", en: "One morning the phone rang. Abi listened for a long time, then slowly sat down. \"Innaa lillaahi wa innaa ilaihi raaji'uun.\"" },
        scene: { focus: 340, bg: "living", props: [{ k: "phone", x: 430, y: 380, s: 0.8 }], mo: [{ who: "ayah", pose: "stressed-head-sit", x: 330 }] },
      },
      {
        text: { id: "Abi memanggil anak-anak. \"Kakek sudah meninggal pagi ini,\" katanya pelan. \"Tubuh Kakek berhenti bekerja, dan Allah sudah memanggil Kakek pulang.\"", en: "Abi called the children over. \"Kakek died this morning,\" he said gently. \"His body stopped working, and Allah has called him home.\"" },
        scene: { focus: 340, bg: "living", mo: [{ who: "ayah", pose: "kneel-arms-open", x: 270 }, { pose: "pose-40", x: 390 }, { who: "ais", pose: "sad-tears", x: 470 }] },
      },
      {
        text: { id: "\"Kapan Kakek kembali?\" tanya Mo. Abi memeluknya. \"Kakek tidak akan kembali ke dunia, sayang. Tapi Kakek sudah tidak sakit lagi.\"", en: "\"When is Kakek coming back?\" asked Mo. Abi hugged him. \"Kakek won't come back to this world, love. But he isn't in pain any more.\"" },
        scene: { focus: 340, bg: "living", mo: [{ who: "ayah", pose: "hug-mo", x: 340 }], fx: ["hearts"] },
      },
      {
        text: { id: "Mo melihat mata Abi basah. \"Abi menangis?\" \"Iya. Abi sedih karena rindu. Rasulullah ﷺ juga menangis ketika putranya wafat. Menangis itu tidak apa-apa.\"", en: "Mo saw that Abi's eyes were wet. \"Abi, are you crying?\" \"Yes. I'm sad because I miss him. The Prophet ﷺ cried too when his little son died. It's okay to cry.\"" },
        quote: { id: "\"Mata boleh menangis dan hati boleh bersedih, tetapi kami tidak mengucapkan kecuali yang diridai Tuhan kami.\" (HR. Bukhari)", en: "\"The eyes shed tears and the heart grieves, but we say only what pleases our Lord.\" (Bukhari)" },
        scene: { focus: 340, bg: "living", mo: [{ who: "ayah", pose: "grateful-hug-sit", x: 290 }, { pose: "pose-14", x: 420 }] },
      },
      {
        text: { id: "Di rumah Nenek, banyak orang datang untuk mendoakan Kakek. Ais menangis di pangkuan Umi. Umi membiarkannya menangis sampai lega.", en: "At Nenek's house, many people came to pray for Kakek. Ais cried in Umi's lap. Umi let her cry until she felt better." },
        scene: { focus: 340, bg: "living", mo: [{ who: "umi", pose: "kneel-smile", x: 280 }, { who: "ais", pose: "cry-sit", x: 400 }] },
      },
      {
        text: { id: "Kursi Kakek kosong. Peci dan tasbih hijaunya masih di sana. Mo menyentuh tasbih itu pelan-pelan, satu butir, dua butir…", en: "Kakek's chair was empty. His peci and green prayer beads were still there. Mo gently touched the beads, one, two…" },
        scene: { focus: 380, bg: "living", time: "dusk", props: [{ k: "kakekchair", x: 440 }], mo: [{ pose: "pose-36", x: 320 }] },
      },
      {
        text: { id: "\"Abi,\" tanya Mo, \"apa Kakek masih bisa menerima hadiah dari kita?\"", en: "\"Abi,\" Mo asked, \"can Kakek still get presents from us?\"" },
        scene: { focus: 340, bg: "living", time: "dusk", mo: [{ who: "ayah", pose: "calm-sit", x: 280 }, { pose: "pose-05", x: 410 }] },
      },
      {
        text: { id: "Abi tersenyum. \"Bisa. Rasulullah ﷺ bersabda, ada tiga hal yang terus mengalir untuk orang yang sudah meninggal. Salah satunya: doa anak yang shalih.\"", en: "Abi smiled. \"Yes. The Prophet ﷺ said three things keep flowing to a person after they die. One of them is the du'a of a good child.\"" },
        quote: { id: "\"Apabila manusia meninggal dunia, terputuslah amalnya kecuali tiga perkara: sedekah jariyah, ilmu yang bermanfaat, dan anak shalih yang mendoakannya.\" (HR. Muslim)", en: "\"When a person dies, their deeds end except three: ongoing charity, beneficial knowledge, or a righteous child who prays for them.\" (Muslim)" },
        scene: { focus: 340, bg: "living", time: "dusk", mo: [{ who: "ayah", pose: "teach-book-sit", x: 280 }, { pose: "pose-31", x: 410 }] },
      },
      {
        text: { id: "\"Mo kan cucu Kakek,\" kata Mo. \"Boleh Mo mendoakan Kakek?\" \"Tentu, sayang. Doamu adalah hadiah terindah untuk Kakek.\"", en: "\"I'm Kakek's grandson,\" said Mo. \"Can I pray for him?\" \"Of course, love. Your du'a is the most beautiful present Kakek could get.\"" },
        scene: { focus: 340, bg: "living", time: "dusk", mo: [{ who: "ayah", pose: "hand-heart-kneel", x: 280 }, { pose: "pose-41", x: 410 }], fx: ["hearts"] },
      },
      {
        text: { id: "Mo mengangkat kedua tangannya. \"Ya Allah, ampuni Kakek, sayangi Kakek, lapangkan kubur Kakek, dan kumpulkan kami lagi di surga-Mu.\"", en: "Mo raised both his hands. \"O Allah, forgive Kakek, have mercy on him, make his grave spacious, and bring us together again in Your Paradise.\"" },
        quote: { id: "\"Allaahummaghfir lahu warhamhu wa 'aafihi wa'fu 'anhu.\" — Ya Allah, ampunilah dia, rahmatilah dia, selamatkanlah dia, dan maafkanlah dia. (HR. Muslim)", en: "\"Allaahummaghfir lahu warhamhu wa 'aafihi wa'fu 'anhu.\" — O Allah, forgive him, have mercy on him, keep him safe and pardon him. (Muslim)" },
        scene: { focus: 340, bg: "living", time: "dusk", mo: [{ pose: "thank-you", x: 300 }, { who: "ais", pose: "dua-hands-closed", x: 420 }], fx: ["sparkle"] },
      },
      {
        text: { id: "Kak Adam memasukkan uang tabungannya ke kotak sedekah. \"Atas nama Kakek,\" katanya, \"supaya pahalanya terus mengalir.\"", en: "Kak Adam put his savings into the charity box. \"In Kakek's name,\" he said, \"so the reward keeps flowing to him.\"" },
        scene: { focus: 350, bg: "living", time: "dusk", mo: [{ who: "adam", pose: "sedekah-box", x: 350 }], fx: ["sparkle"] },
      },
      {
        text: { id: "Malamnya, Mo dan Ais menggambar cerita Kakek: kerbau yang malas, sungai yang jernih, dan Kakek yang tersenyum. Mereka rindu… tapi juga tersenyum.", en: "That night, Mo and Ais drew Kakek's stories: the lazy buffalo, the clear river and Kakek smiling. They missed him… but they smiled too." },
        scene: { focus: 340, bg: "living", time: "night", props: [{ k: "drawing", x: 370, y: 390 }], mo: [{ who: "ais", pose: "draw-crayons", x: 300 }, { pose: "pose-35", x: 430 }] },
      },
      {
        text: { id: "Umi memeluk Mo sebelum tidur. \"Rindu itu tanda cinta. Setiap kali Mo rindu Kakek, kirimkan doa, ya.\"", en: "Umi hugged Mo before bed. \"Missing someone is a sign of love. Whenever you miss Kakek, send him a du'a.\"" },
        scene: { focus: 340, bg: "bedroom", time: "night", mo: [{ who: "umi", pose: "hug-mo", x: 340 }], fx: ["stars", "hearts"] },
      },
      {
        text: { id: "Kalau kamu rindu seseorang yang sudah tiada, doa apa yang ingin kamu kirimkan untuknya? 🤲", en: "If you miss someone who has passed away, what du'a would you like to send them? 🤲" },
        scene: { focus: 380, bg: "living", time: "night", props: [{ k: "kakekchair", x: 450 }], mo: [{ pose: "pose-12", x: 330 }], fx: ["stars"] },
      },
    ],
  },
  /* ───────────────────────── New 9. When the lights go out, the stars come on ───────────────────────── */
  {
    slug: "saat-lampu-padam-bintang-menyala",
    pose: "baby-mo-pose-31.png",
    published: "2026-11-26",
    title: { id: "Saat Lampu Padam, Bintang Menyala", en: "When the Lights Go Out, the Stars Come On" },
    hook: {
      id: "Klik! Mati lampu. Gelap gulita. Mo dan Ais ketakutan… sampai Abi mengajak mereka naik ke bukit dan melihat langit yang penuh bintang.",
      en: "Click! A power cut. Pitch dark. Mo and Ais are scared… until Abi takes them up the hill to see a sky full of stars.",
    },
    anchor: { type: "parenting", slug: "takut-gelap" },
    takeaway: {
      id: "Rasa takut pada gelap bisa berubah menjadi rasa takjub. Saat anak melihat bintang, ia belajar bahwa gelap juga ciptaan Allah — dan di dalamnya ada keindahan.",
      en: "Fear of the dark can turn into wonder. When children see the stars, they learn that darkness is also Allah's creation — and it holds beautiful things.",
    },
    tags: ["takut gelap", "bintang", "langit", "bulan", "mati lampu", "ciptaan allah"],
    card: {
      title: { id: "Saat Anak Takut Gelap", en: "When Your Child Fears the Dark" },
      items: {
        id: [
          "Jangan meremehkan (\"begitu saja takut\"). Lampu tidur yang redup itu tidak apa-apa.",
          "Buat gelap jadi menyenangkan: melihat bintang, wayang bayangan dengan senter, atau berburu \"harta karun\" dengan senter.",
          "Ajarkan doa sebelum tidur dan ingatkan dengan lembut bahwa Allah selalu melihat dan menjaga, terang maupun gelap.",
        ],
        en: [
          "Don't dismiss it (\"there's nothing to be scared of\"). A dim night light is fine.",
          "Make the dark fun: stargazing, shadow puppets or a torch treasure hunt.",
          "Teach the bedtime du'a and gently remind them that Allah always sees and protects us, in the light and in the dark.",
        ],
      },
    },
    cover: {
      focus: 360, bg: "hill", time: "night",
      props: [{ k: "telescope", x: 460 }],
      mo: [{ pose: "pose-31", x: 340 }],
      fx: ["stars", "milkyway", "shootingstar"],
    },
    pages: [
      {
        text: { id: "Malam itu, tiba-tiba — klik! Semua lampu padam. Rumah jadi gelap gulita. \"Umi! Mo takut!\"", en: "That night, suddenly — click! All the lights went out. The house was pitch dark. \"Umi! I'm scared!\"" },
        scene: { focus: 340, bg: "living", time: "night", mo: [{ pose: "pose-10", x: 340 }] },
      },
      {
        text: { id: "Abi menyalakan senter. \"Mati lampu, sayang. Listriknya sedang diperbaiki. Abi di sini.\"", en: "Abi switched on a torch. \"It's a power cut, love. They're fixing the electricity. I'm right here.\"" },
        scene: { focus: 340, bg: "living", time: "night", props: [{ k: "flashlight", x: 330, y: 330, s: 0.8 }], mo: [{ who: "ayah", pose: "kneel-arms-open", x: 260 }, { pose: "pose-05", x: 420 }] },
      },
      {
        text: { id: "\"Gelap itu seram,\" bisik Ais sambil memeluk boneka kelincinya erat-erat.", en: "\"The dark is spooky,\" whispered Ais, hugging her toy bunny tight." },
        scene: { focus: 350, bg: "living", time: "night", mo: [{ who: "ais", pose: "hug-bunny-sit", x: 350 }] },
      },
      {
        text: { id: "Abi tersenyum. \"Mau lihat sesuatu yang hanya bisa dilihat saat gelap? Ayo ke bukit belakang rumah!\"", en: "Abi smiled. \"Want to see something you can only see in the dark? Let's go up the hill behind the house!\"" },
        scene: { focus: 340, bg: "living", time: "night", mo: [{ who: "ayah", pose: "idea-point-stand", x: 280 }, { pose: "pose-26", x: 410 }] },
      },
      {
        text: { id: "Di bukit, mereka berbaring di atas tikar dan menengadah ke atas… \"MASYA ALLAH!\" Langit penuh bintang!", en: "On the hill, they lay on a mat and looked up… \"MASYA ALLAH!\" The sky was full of stars!" },
        scene: { focus: 350, bg: "hill", time: "night", props: [{ k: "mat", x: 360 }], mo: [{ pose: "pose-31", x: 330 }, { who: "ais", pose: "point-star", x: 440 }], fx: ["stars", "milkyway"] },
      },
      {
        text: { id: "\"Garis bercahaya itu namanya Bima Sakti,\" kata Abi. \"Ada miliaran bintang di sana. Kalau lampu kota menyala, kita tidak bisa melihatnya.\"", en: "\"That glowing band is called the Milky Way,\" said Abi. \"There are billions of stars in it. When the city lights are on, we can't see it.\"" },
        scene: { focus: 350, bg: "hill", time: "night", mo: [{ who: "ayah", pose: "calm-sit", x: 330 }], fx: ["stars", "milkyway"] },
      },
      {
        text: { id: "Tahukah kamu? Setiap bintang sebenarnya adalah matahari yang sangat, sangat jauh. Ada yang jauh lebih besar dari matahari kita!", en: "Did you know? Every star is really a sun that is very, very far away. Some are much bigger than our own Sun!" },
        scene: { focus: 360, bg: "hill", time: "night", props: [{ k: "sun", x: 420, y: 200, s: 0.6 }], mo: [{ who: "ais", pose: "point-moon", x: 320 }], fx: ["stars", "milkyway"] },
      },
      {
        text: { id: "Kak Adam membawa teropong. Ais mengintip bulan. \"Bulannya ada lubang-lubangnya!\" \"Itu namanya kawah,\" kata Kak Adam.", en: "Kak Adam brought a telescope. Ais peeked at the moon. \"The moon has holes in it!\" \"Those are called craters,\" said Kak Adam." },
        scene: { focus: 350, bg: "hill", time: "night", mo: [{ who: "ais", pose: "telescope", x: 320 }, { who: "adam", pose: "kneel-talk", x: 440 }], fx: ["stars"] },
      },
      {
        text: { id: "Wuuush! Sebuah garis cahaya melintas di langit. \"Bintang jatuh!\" teriak Mo sambil menunjuk.", en: "Whoosh! A streak of light shot across the sky. \"A shooting star!\" shouted Mo, pointing." },
        scene: { focus: 350, bg: "hill", time: "night", mo: [{ pose: "pose-15", x: 340 }], fx: ["stars", "milkyway", "shootingstar"] },
      },
      {
        text: { id: "\"Itu sebenarnya batu kecil dari luar angkasa yang terbakar saat masuk ke langit kita,\" jelas Abi. \"Makanya terlihat seperti garis api.\"", en: "\"It's really a tiny space rock burning up as it enters our sky,\" Abi explained. \"That's why it looks like a line of fire.\"" },
        scene: { focus: 340, bg: "hill", time: "night", mo: [{ who: "ayah", pose: "teach-point-kneel", x: 280 }, { pose: "wow", x: 410 }], fx: ["stars"] },
      },
      {
        text: { id: "\"Siapa yang memasang semua lampu langit ini?\" tanya Ais. \"Allah,\" jawab Abi. \"Allah menghias langit dengan bintang-bintang.\"", en: "\"Who put up all these sky lights?\" asked Ais. \"Allah,\" said Abi. \"Allah decorated the sky with stars.\"" },
        quote: { id: "\"Dan sungguh, telah Kami hiasi langit yang dekat dengan bintang-bintang.\" (QS. Al-Mulk: 5)", en: "\"And We have certainly beautified the nearest heaven with lamps.\" (Qur'an, Al-Mulk 67:5)" },
        scene: { focus: 350, bg: "hill", time: "night", mo: [{ who: "ais", pose: "wonder-question", x: 300 }, { who: "ayah", pose: "calm-sit", x: 430 }], fx: ["stars", "milkyway"] },
      },
      {
        text: { id: "Abi bercerita, dulu para pelaut dan kafilah menemukan jalan pulang dengan melihat bintang. \"Bintang itu seperti peta di langit.\"", en: "Abi told them that long ago, sailors and caravans found their way home by looking at the stars. \"The stars are like a map in the sky.\"" },
        scene: { focus: 350, bg: "hill", time: "night", props: [{ k: "telescope", x: 450 }], mo: [{ pose: "pose-22", x: 340 }], fx: ["stars", "milkyway"] },
      },
      {
        text: { id: "\"Ternyata gelap tidak selalu seram,\" kata Mo pelan. \"Tanpa gelap, kita tidak bisa melihat bintang.\"", en: "\"So the dark isn't always scary,\" Mo said softly. \"Without the dark, we couldn't see the stars.\"" },
        scene: { focus: 350, bg: "hill", time: "night", mo: [{ pose: "idea", x: 350 }], fx: ["stars", "milkyway"] },
      },
      {
        text: { id: "Klik! Di bawah bukit, lampu-lampu rumah menyala lagi. \"Yaaah,\" kata si kembar. Mereka masih ingin melihat bintang!", en: "Click! Down below the hill, the house lights came back on. \"Awww,\" said the twins. They still wanted to look at the stars!" },
        scene: { focus: 350, bg: "hill", time: "night", mo: [{ pose: "pose-28", x: 320 }, { who: "ais", pose: "giggle", x: 430 }], fx: ["stars"] },
      },
      {
        text: { id: "Di kamar, Mo meminta lampu tidurnya dimatikan saja. \"Mo mau membayangkan bintang-bintang,\" katanya sambil memejamkan mata.", en: "In his room, Mo asked for his night light to be switched off. \"I want to imagine the stars,\" he said, closing his eyes." },
        scene: { focus: 340, bg: "bedroom", time: "night", mo: [{ pose: "pose-12", x: 340 }], fx: ["stars", "zzz"] },
      },
      {
        text: { id: "Malam ini, coba lihat ke langit. Berapa bintang yang bisa kamu hitung? ✨", en: "Tonight, try looking up at the sky. How many stars can you count? ✨" },
        scene: { focus: 350, bg: "hill", time: "night", mo: [{ pose: "pose-18", x: 340 }], fx: ["stars", "milkyway", "shootingstar"] },
      },
    ],
  },
  /* ───────────────────────── New 10. The bee and the honey ───────────────────────── */
  {
    slug: "lebah-kecil-dan-madu",
    pose: "baby-mo-pose-07.png",
    published: "2026-11-27",
    title: { id: "Lebah Kecil dan Madu dari Allah", en: "The Little Bee and the Honey from Allah" },
    hook: {
      id: "Bzzz! Mo ingin mengusir lebah. Tapi lebah ternyata menari, bekerja sama, dan membuat madu — sampai punya surat sendiri di Al-Qur'an!",
      en: "Bzzz! Mo wants to swat the bee away. But bees dance, work as a team and make honey — they even have their own surah in the Qur'an!",
    },
    anchor: { type: "doa", slug: "doa-pandai-bersyukur" },
    takeaway: {
      id: "Rasa ingin tahu adalah obat rasa takut. Saat anak tahu apa yang dilakukan lebah, ia berhenti mengibas — dan mulai bersyukur.",
      en: "Curiosity is the cure for fear. Once children know what bees do, they stop swatting — and start feeling grateful.",
    },
    tags: ["lebah", "madu", "serangga", "an-nahl", "kerja sama", "bersyukur"],
    card: {
      title: { id: "Berani pada Lebah dan Serangga", en: "Being Brave Around Bees and Bugs" },
      items: {
        id: [
          "Ajarkan \"diam seperti patung\", lalu menjauh pelan-pelan. Mengibas-ngibas justru membuat lebah merasa terancam.",
          "Jika tersengat: cabut sengatnya, kompres dingin. Segera cari pertolongan bila wajah bengkak atau anak sulit bernapas.",
          "Madu tidak boleh diberikan untuk bayi di bawah 1 tahun. Untuk anak yang lebih besar, madu bisa jadi cara seru mengenal ayat Allah.",
        ],
        en: [
          "Teach \"freeze like a statue\", then walk away slowly. Swatting makes bees feel threatened.",
          "If stung: remove the sting and use a cold compress. Get help quickly if the face swells or your child struggles to breathe.",
          "Never give honey to babies under 1 year old. For older children, honey is a lovely way to talk about Allah's signs.",
        ],
      },
    },
    cover: {
      focus: 360, bg: "garden",
      props: [{ k: "flowers", x: 440 }, { k: "bee", x: 420, y: 250 }, { k: "honey", x: 300 }],
      mo: [{ pose: "pose-07", x: 360 }],
      fx: ["sparkle"],
    },
    pages: [
      {
        text: { id: "Bzzz! Seekor lebah terbang di dekat Mo. \"Pergi! Pergi!\" Mo mengibas-ngibaskan tangannya, ketakutan.", en: "Bzzz! A bee flew close to Mo. \"Go away! Go away!\" Mo flapped his hands, frightened." },
        scene: { focus: 350, bg: "garden", props: [{ k: "flowers", x: 460 }, { k: "bee", x: 430, y: 250 }], mo: [{ pose: "pose-33", x: 330 }] },
      },
      {
        text: { id: "\"Tenang, Mo,\" kata Umi pelan. \"Diam seperti patung, ya. Lebah tidak akan menyengat kalau tidak merasa terancam.\"", en: "\"Stay calm, Mo,\" Umi said softly. \"Freeze like a statue. Bees don't sting unless they feel threatened.\"" },
        scene: { focus: 340, bg: "garden", props: [{ k: "bee", x: 440, y: 240 }], mo: [{ who: "umi", pose: "idea-finger", x: 270 }, { pose: "pose-14", x: 400 }] },
      },
      {
        text: { id: "Mo diam… diam… Lebah itu terbang mengelilinginya, lalu pergi ke bunga. Fiuh!", en: "Mo stayed still… very still… The bee buzzed around him, then flew off to a flower. Phew!" },
        scene: { focus: 360, bg: "garden", props: [{ k: "flowers", x: 450 }, { k: "bee", x: 460, y: 300 }], mo: [{ pose: "pose-40", x: 330 }] },
      },
      {
        text: { id: "\"Mau lihat rumah lebah sungguhan?\" tanya Umi. Siang itu, Umi mengajak si kembar ke peternakan lebah milik Pak Darto.", en: "\"Want to see a real bee house?\" asked Umi. That afternoon, Umi took the twins to Pak Darto's bee farm." },
        scene: { focus: 340, bg: "garden", props: [{ k: "beebox", x: 470 }], mo: [{ who: "umi", pose: "walk-bag", x: 270 }, { who: "ais", pose: "jump-joy", x: 380 }] },
      },
      {
        text: { id: "Di sana ada kotak-kotak kayu. Di dalam setiap kotak, ada ribuan lebah yang bekerja bersama-sama. Bzzz-bzzz-bzzz!", en: "There were rows of wooden boxes. Inside each box, thousands of bees were working together. Bzzz-bzzz-bzzz!" },
        scene: { focus: 370, bg: "garden", props: [{ k: "beebox", x: 290 }, { k: "beebox", x: 450 }], mo: [{ pose: "wow", x: 370 }] },
      },
      {
        text: { id: "\"Lebah membuat sarang dari lilin berbentuk segi enam yang rapi sekali,\" kata Pak Darto. Ais menghitung sisinya: satu, dua… enam!", en: "\"Bees build their homes from wax in perfect six-sided shapes,\" said Pak Darto. Ais counted the sides: one, two… six!" },
        scene: { focus: 360, bg: "garden", props: [{ k: "hive", x: 420, y: 330, s: 0.9 }], mo: [{ who: "ais", pose: "point-star", x: 300 }] },
      },
      {
        text: { id: "Tahukah kamu? Saat menemukan bunga, lebah pulang ke sarang dan menari. Tariannya memberi tahu teman-temannya di mana bunga itu berada!", en: "Did you know? When a bee finds flowers, it flies home and does a dance. The dance tells its friends where the flowers are!" },
        scene: { focus: 380, bg: "garden", props: [{ k: "flowers", x: 300 }, { k: "bee", x: 380, y: 240 }, { k: "bee", x: 460, y: 280 }, { k: "bee", x: 420, y: 200 }], fx: ["sparkle", "notes"] },
      },
      {
        text: { id: "Sambil minum nektar, lebah membawa serbuk sari dari bunga ke bunga. Karena itulah bunga bisa menjadi buah — apel, jeruk, dan semangka!", en: "As they drink nectar, bees carry pollen from flower to flower. That's how flowers turn into fruit — apples, oranges and watermelons!" },
        scene: { focus: 380, bg: "garden", props: [{ k: "flowers", x: 320 }, { k: "bee", x: 380, y: 270 }, { k: "fruit", x: 470 }], fx: ["sparkle"] },
      },
      {
        text: { id: "\"Seekor lebah seumur hidupnya hanya membuat madu setetes kecil — kurang dari satu sendok teh,\" kata Pak Darto. \"Tapi bersama-sama, mereka mengisi satu toples penuh!\"", en: "\"In its whole life, one bee makes only a tiny drop of honey — less than a teaspoon,\" said Pak Darto. \"But together, they fill a whole jar!\"" },
        scene: { focus: 370, bg: "garden", props: [{ k: "honey", x: 410 }, { k: "bee", x: 440, y: 230 }], mo: [{ pose: "pose-31", x: 310 }] },
      },
      {
        text: { id: "Umi tersenyum. \"Ada surat di Al-Qur'an yang namanya An-Nahl, artinya Lebah. Allah sendiri yang mengajari lebah membuat sarang.\"", en: "Umi smiled. \"There's a surah in the Qur'an called An-Nahl, which means The Bee. Allah Himself taught the bees how to build their homes.\"" },
        quote: { id: "\"Dan Tuhanmu mengilhamkan kepada lebah: 'Buatlah sarang di gunung-gunung, di pohon-pohon…' Dari perut lebah itu keluar minuman yang bermacam-macam warnanya, di dalamnya terdapat obat bagi manusia.\" (QS. An-Nahl: 68–69)", en: "\"And your Lord inspired the bee: 'Make homes in the mountains and the trees…' From their bellies comes a drink of varying colours, in which there is healing for people.\" (Qur'an, An-Nahl 16:68–69)" },
        scene: { focus: 340, bg: "garden", props: [{ k: "hive", x: 470, y: 330, s: 0.8 }], mo: [{ who: "umi", pose: "explain-book", x: 300 }] },
      },
      {
        text: { id: "\"Lebah punya surat sendiri?\" Mo terbelalak. \"Wah, lebah pasti istimewa sekali!\"", en: "\"Bees have their own surah?\" Mo's eyes went wide. \"Wow, bees must be really special!\"" },
        scene: { focus: 350, bg: "garden", props: [{ k: "bee", x: 450, y: 240 }], mo: [{ pose: "wow", x: 340 }], fx: ["sparkle"] },
      },
      {
        text: { id: "Pak Darto memberi mereka sesendok madu. Manis, harum, dan hangat di tenggorokan. \"Alhamdulillah,\" kata Mo sambil tersenyum lebar.", en: "Pak Darto gave them each a spoonful of honey. Sweet, fragrant and warm in their throats. \"Alhamdulillah,\" said Mo with a big smile." },
        scene: { focus: 340, bg: "garden", props: [{ k: "honey", x: 420 }], mo: [{ pose: "pose-07", x: 320 }], fx: ["hearts"] },
      },
      {
        text: { id: "Mo teringat lebah tadi pagi. \"Maaf ya, lebah. Mo kira kamu jahat. Ternyata kamu pekerja keras.\"", en: "Mo remembered the bee from that morning. \"Sorry, little bee. I thought you were mean. You're actually a hard worker.\"" },
        scene: { focus: 350, bg: "garden", props: [{ k: "flowers", x: 460 }, { k: "bee", x: 450, y: 260 }], mo: [{ pose: "pose-14", x: 340 }] },
      },
      {
        text: { id: "Di rumah, Mo dan Ais menanam bunga di halaman. \"Supaya lebah punya restoran!\" kata Ais.", en: "At home, Mo and Ais planted flowers in the garden. \"So the bees have a restaurant!\" said Ais." },
        scene: { focus: 340, bg: "garden", props: [{ k: "flowers", x: 440 }], mo: [{ who: "ais", pose: "plant-trowel", x: 330 }], fx: ["sparkle"] },
      },
      {
        text: { id: "Beberapa hari kemudian, seekor lebah datang ke bunga mereka. Kali ini Mo tidak mengibas. Mo hanya duduk tenang dan berbisik, \"Selamat makan, lebah.\"", en: "A few days later, a bee visited their flowers. This time Mo didn't swat. He just sat calmly and whispered, \"Enjoy your meal, little bee.\"" },
        scene: { focus: 360, bg: "garden", props: [{ k: "flowers", x: 450 }, { k: "bee", x: 450, y: 290 }], mo: [{ pose: "pose-06", x: 330 }], fx: ["hearts"] },
      },
      {
        text: { id: "Kalau ada lebah di dekatmu, apa yang harus kamu lakukan? Diam seperti patung! 🐝", en: "If a bee comes close to you, what should you do? Freeze like a statue! 🐝" },
        scene: { focus: 350, bg: "garden", props: [{ k: "flowers", x: 460 }, { k: "bee", x: 440, y: 250 }], mo: [{ pose: "pose-27", x: 340 }], fx: ["sparkle"] },
      },
    ],
  },
];
