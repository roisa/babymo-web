import type { PicScene, PictureBook } from "./picture-books";
import { stage } from "./picture-books-playroom";

/**
 * More picture books, written to be read aloud by a parent or alone by an
 * early reader: short sentences, a refrain children can join in with, and
 * a picture that shows exactly what each page says.
 */
const FPS = 12 / 1.8;
const loop = (f: string[]) => [...f, f[5]!, f[5]!, f[0]!, f[0]!, f[0]!, f[0]!];
const six = (b: string) => [1, 2, 3, 4, 5, 6].map((i) => `${b}-${i}`);
const FOREHAND = loop(six("tennis-fh"));
const BACKHAND = loop(six("tennis-backhand"));
const SHUFFLE = six("tennis-shuffle");
const FH_HIT = 0.45;
const HIT = 0.6;

const RAW: PictureBook[] = [
  /* ───────────────────────── 1. Grass court: Raka's ankle ───────────────────────── */
  {
    slug: "lapangan-rumput-dan-kaki-raka",
    pose: "baby-mo-pose-14.png",
    published: "2026-12-18",
    title: { id: "Lapangan Rumput dan Kaki Raka", en: "The Grass Court and Raka's Ankle" },
    hook: {
      id: "Kak Adam hampir menang di final lapangan rumput. Lalu Raka terpeleset dan kakinya terkilir. Kalau Raka berhenti, Kak Adam juara. Tapi apa yang lebih penting dari piala?",
      en: "Kak Adam is close to winning the grass-court final. Then Raka slips and twists his ankle. If Raka stops, Kak Adam is champion. But what matters more than a trophy?",
    },
    anchor: { type: "parenting", slug: "bonding-orangtua" },
    takeaway: {
      id: "Menang itu menyenangkan, tetapi peduli kepada teman yang kesakitan membuat kemenangan sesungguhnya: hati yang lembut.",
      en: "Winning feels good, but caring for a friend who is hurt is the real victory: a gentle heart.",
    },
    tags: ["tenis", "kak adam", "empati", "sportif", "teman", "lapangan rumput"],
    card: {
      title: { id: "Mengajarkan Sportivitas yang Hangat", en: "Teaching Warm Sportsmanship" },
      items: {
        id: [
          "Tanyakan setelah bertanding: \"Bagaimana perasaan lawanmu tadi?\" Empati tumbuh dari kebiasaan melihat orang lain.",
          "Puji sikap, bukan hanya skor: \"Abi bangga kamu menolong Raka, lebih dari pialanya.\"",
          "Ajak menjenguk atau mengirim pesan untuk teman yang sakit — kebaikan kecil yang membekas lama.",
        ],
        en: [
          "Ask after a match: \"How do you think your opponent felt?\" Empathy grows from the habit of noticing others.",
          "Praise attitude, not only the score: \"I'm prouder that you helped Raka than of the trophy.\"",
          "Visit or send a message to a friend who is unwell — small kindnesses that last a long time.",
        ],
      },
    },
    cover: {
      focus: 390, bg: "court-grass",
      props: [{ k: "ballfly", x: 390, y: 330, d: FH_HIT }, { k: "swoosh", x: 365, y: 330, d: FH_HIT - 0.99 }],
      mo: [{ who: "adam", pose: "tennis-fh-1", seq: FOREHAND, fps: FPS, x: 400, move: "still" }],
      fx: ["sparkle"],
    },
    pages: [
      {
        text: { id: "Lapangannya hijau dan berbau rumput yang baru dipotong. Garis-garisnya putih bersih. \"Masya Allah,\" bisik Kak Adam. \"Lapangan rumput!\"", en: "The court was green and smelled of fresh-cut grass. The lines were bright white. \"Masya Allah,\" whispered Kak Adam. \"A grass court!\"" },
        scene: { focus: 390, bg: "court-grass", props: [{ k: "racketbag", x: 500 }], mo: [{ who: "adam", pose: "surprised-hands-up", x: 380 }], fx: ["sparkle"] },
      },
      {
        text: { id: "Di rumput, bola memantul rendah dan cepat. Wusss — sssst! Kak Adam harus menekuk lututnya dalam-dalam.", en: "On grass, the ball bounces low and fast. Whoosh — sssst! Kak Adam had to bend his knees really low." },
        scene: { focus: 390, bg: "court-grass", props: [{ k: "ballbounce", x: 320 }], mo: [{ who: "adam", pose: "tennis-lunge-low", x: 400 }] },
      },
      {
        text: { id: "Lawannya di final adalah Raka. Mereka sering bertanding, sering kalah-menang bergantian. Mereka bersalaman di net. \"Semoga seru!\"", en: "His opponent in the final was Raka. They often played each other, winning and losing in turn. They shook hands at the net. \"Have a good game!\"" },
        scene: { focus: 390, bg: "court-grass", mo: [{ who: "adam", pose: "handshake-offer", x: 390 }] },
      },
      {
        text: { id: "Abi, Umi, Mo, dan Ais duduk di bangku penonton. \"Ayo, Kak Adam!\" seru Mo sambil melambai-lambai.", en: "Abi, Umi, Mo and Ais sat in the stands. \"Come on, Kak Adam!\" shouted Mo, waving and waving." },
        scene: { focus: 380, bg: "court-grass", mo: [{ who: "umi", pose: "cheer-happy", x: 270 }, { pose: "pose-24", x: 390 }, { who: "ais", pose: "cheer-wink", x: 490 }], fx: ["confetti"] },
      },
      {
        text: { id: "Pertandingannya ketat. Tak — tuk — tak — tuk. Bola bolak-balik seperti burung yang tidak mau hinggap.", en: "The match was close. Pok — tok — pok — tok. The ball flew back and forth like a bird that wouldn't land." },
        scene: { focus: 390, bg: "court-grass", props: [{ k: "ballrally", x: 400, y: 300 }], mo: [{ who: "adam", pose: "tennis-shuffle-1", seq: SHUFFLE, fps: 8, x: 400, move: "still" }] },
      },
      {
        text: { id: "Skornya 5–4 untuk Kak Adam. Satu game lagi, ia juara! Jantungnya berdetak: dug, dug, dug.", en: "The score was 5–4 to Kak Adam. One more game and he'd be champion! His heart went: thump, thump, thump." },
        scene: { focus: 390, bg: "court-grass", props: [{ k: "trophy", x: 540, y: 340, s: 0.6 }], mo: [{ who: "adam", pose: "worried-bite-lip", x: 380 }] },
      },
      {
        text: { id: "Raka berlari mengejar bola. Sreeet — kakinya terpeleset di rumput yang licin. Ia jatuh dan memegangi pergelangan kakinya. \"Aduh!\"", en: "Raka ran for the ball. Swish — his foot slid on the slippery grass. He fell and held his ankle. \"Ow!\"" },
        scene: { focus: 390, bg: "court-grass", props: [{ k: "tennisball", x: 520 }], mo: [{ who: "adam", pose: "surprised-hands-up", x: 380 }] },
      },
      {
        text: { id: "Wasit berkata, \"Kalau Raka tidak bisa melanjutkan, Adam menang.\" Piala itu tinggal selangkah lagi.", en: "The umpire said, \"If Raka can't continue, Adam wins.\" The trophy was just one step away." },
        scene: { focus: 390, bg: "court-grass", props: [{ k: "umpirechair", x: 260 }, { k: "trophy", x: 520, y: 340, s: 0.7 }], mo: [{ who: "adam", pose: "deep-breath-calm", x: 400 }] },
      },
      {
        text: { id: "Tapi Kak Adam tidak memikirkan piala. Ia meletakkan raketnya dan berlari ke seberang net. \"Raka! Kamu tidak apa-apa?\"", en: "But Kak Adam wasn't thinking about the trophy. He put down his racket and ran round the net. \"Raka! Are you okay?\"" },
        scene: { focus: 390, bg: "court-grass", props: [{ k: "racket", x: 300, y: 420, s: 0.55 }], mo: [{ who: "adam", pose: "run", x: 410, move: "hop" }] },
      },
      {
        text: { id: "Ia memberikan botol minumnya dan memanggil petugas. \"Pelan-pelan, Ka. Jangan dipaksa.\" Raka menahan air mata.", en: "He gave Raka his water bottle and called for the first-aider. \"Slowly, Ka. Don't force it.\" Raka held back tears." },
        scene: { focus: 390, bg: "court-grass", props: [{ k: "sportbottle", x: 480 }], mo: [{ who: "adam", pose: "crouch-pat", x: 380 }] },
      },
      {
        text: { id: "Abi tersenyum dari bangku penonton. \"Orang beriman itu seperti satu tubuh. Kalau satu bagian sakit, yang lain ikut merasakan.\"", en: "Abi smiled from the stands. \"Believers are like one body. If one part hurts, the rest feels it too.\"" },
        quote: { id: "\"Perumpamaan orang-orang beriman dalam saling mencintai, menyayangi, dan mengasihi adalah seperti satu tubuh. Jika satu anggota tubuh sakit, seluruh tubuh ikut merasakannya.\" (HR. Bukhari 6011, Muslim 2586)", en: "\"The believers, in their love, mercy and kindness to one another, are like one body. When one part hurts, the whole body feels it.\" (Bukhari 6011, Muslim 2586)" },
        scene: { focus: 380, bg: "court-grass", mo: [{ who: "ayah", pose: "hand-heart-kneel", x: 280 }, { pose: "pose-14", x: 400 }] },
      },
      {
        text: { id: "Raka tidak bisa melanjutkan. Wasit mengumumkan Kak Adam sebagai juara. Tapi Kak Adam tidak melompat. Ia tetap duduk di samping Raka.", en: "Raka couldn't go on. The umpire announced Kak Adam as champion. But Kak Adam didn't jump for joy. He stayed sitting beside Raka." },
        scene: { focus: 390, bg: "court-grass", time: "dusk", mo: [{ who: "adam", pose: "tennis-rest-sit", x: 390, move: "still" }] },
      },
      {
        text: { id: "Saat menerima piala, Kak Adam berkata ke mikrofon, \"Hari ini Raka bermain lebih bagus. Piala ini setengahnya untuk Raka.\" Penonton bertepuk tangan.", en: "When he received the trophy, Kak Adam said into the microphone, \"Raka played better today. Half of this trophy is Raka's.\" Everyone clapped." },
        scene: { focus: 390, bg: "court-grass", time: "dusk", props: [{ k: "medal", x: 290, y: 300, s: 0.7 }], mo: [{ who: "adam", pose: "hold-trophy", x: 400 }], fx: ["hearts"] },
      },
      {
        text: { id: "Besoknya, Kak Adam menjenguk Raka membawa biskuit dan kartu buatan Mo dan Ais: \"CEPAT SEMBUH, RAKA!\"", en: "The next day, Kak Adam visited Raka with biscuits and a card made by Mo and Ais: \"GET WELL SOON, RAKA!\"" },
        scene: { focus: 380, bg: "living", props: [{ k: "cookies", x: 520, y: 360, s: 0.7 }], mo: [{ who: "adam", pose: "show-drawing", x: 290 }, { pose: "pose-41", x: 410 }], fx: ["hearts"] },
      },
      {
        text: { id: "Sebulan kemudian, kaki Raka sudah sembuh. Mereka bertanding lagi — tanpa wasit, tanpa piala, hanya tawa. Tak — tuk — tak — tuk!", en: "A month later, Raka's ankle had healed. They played again — no umpire, no trophy, just laughter. Pok — tok — pok — tok!" },
        scene: { focus: 390, bg: "court-grass", props: [{ k: "ballfly", x: 380, y: 330, d: HIT }, { k: "swoosh", x: 380, y: 330, d: HIT - 0.99, flip: true }], mo: [{ who: "adam", pose: "tennis-backhand-1", seq: BACKHAND, fps: FPS, x: 400, move: "still" }], fx: ["sparkle"] },
      },
      {
        text: { id: "Kalau temanmu jatuh saat bermain, apa yang akan kamu lakukan? 🎾", en: "If your friend falls over while you're playing, what would you do? 🎾" },
        scene: { focus: 390, bg: "court-grass", props: [{ k: "sportbottle", x: 500 }], mo: [{ who: "adam", pose: "kneel-arms-open", x: 390 }], fx: ["sparkle"] },
      },
    ],
  },

  /* ───────────────────────── 2. Ice-cream shop: three scoops ───────────────────────── */
  {
    slug: "tiga-bola-es-krim",
    pose: "baby-mo-pose-37.png",
    published: "2026-12-19",
    title: { id: "Tiga Bola Es Krim", en: "Three Scoops of Ice Cream" },
    hook: {
      id: "Di toko es krim, Mo ingin tiga bola sekaligus: cokelat, stroberi, DAN vanila! Ia makan secepat kilat… lalu — NGILU! Kepalanya dingin dan perutnya penuh sekali.",
      en: "At the ice-cream shop, Mo wants three scoops at once: chocolate, strawberry AND vanilla! He eats as fast as lightning… then — OUCH! His head goes freezing and his tummy is far too full.",
    },
    anchor: { type: "parenting", slug: "susah-makan" },
    takeaway: {
      id: "Adab makan — duduk, Bismillah, pelan-pelan, dan tidak berlebihan — membuat makanan lebih nikmat dan perut lebih nyaman.",
      en: "Table manners — sitting, Bismillah, eating slowly and not too much — make food tastier and tummies happier.",
    },
    tags: ["es krim", "adab makan", "tidak berlebihan", "pelan-pelan", "umi", "lucu"],
    card: {
      title: { id: "Mengajarkan Makan Secukupnya", en: "Teaching \"Just Enough\"" },
      items: {
        id: [
          "Kenalkan \"perut sepertiga\": sedikit untuk makanan, sedikit untuk minum, sedikit untuk napas — dengan gambar perut di kertas.",
          "Makan bersama sambil duduk dan pelan. Anak meniru kecepatan makan orang tuanya.",
          "Daripada melarang, tawarkan berbagi: satu porsi besar dibagi dua terasa lebih seru.",
        ],
        en: [
          "Introduce \"a third of the tummy\": a little for food, a little for drink, a little for breath — draw a tummy on paper.",
          "Eat together, sitting down and slowly. Children copy their parents' eating speed.",
          "Instead of forbidding, offer sharing: one big portion split in two feels more fun.",
        ],
      },
    },
    cover: {
      focus: 390, bg: "icecreamshop",
      props: [{ k: "icecream", x: 470, y: 320, s: 1.1 }],
      mo: [{ pose: "pose-37", x: 360 }],
      fx: ["sparkle"],
    },
    pages: [
      {
        text: { id: "Ting-ting! Pintu toko es krim terbuka. Hawanya dingin dan wangi — seperti masuk ke dalam kulkas yang tersenyum.", en: "Ting-ting! The ice-cream shop door opened. The air was cool and sweet — like stepping inside a smiling fridge." },
        scene: { focus: 390, bg: "icecreamshop", mo: [{ pose: "wow", x: 340 }, { who: "ais", pose: "dreamy-delight", x: 450 }], fx: ["sparkle"] },
      },
      {
        text: { id: "Ada cokelat, stroberi, vanila, mangga, dan pandan. Mata Mo berbinar-binar. \"Umi, Mo mau TIGA bola!\"", en: "There was chocolate, strawberry, vanilla, mango and pandan. Mo's eyes sparkled. \"Umi, I want THREE scoops!\"" },
        scene: { focus: 380, bg: "icecreamshop", mo: [{ who: "umi", pose: "think-question", x: 270 }, { pose: "pose-26", x: 390 }] },
      },
      {
        text: { id: "\"Tiga bola itu banyak sekali untuk perut kecil,\" kata Umi. \"Pleaaase, Umi!\" Mo memohon dengan tangan terlipat.", en: "\"Three scoops is a lot for a little tummy,\" said Umi. \"Pleeease, Umi!\" Mo begged with his hands together." },
        scene: { focus: 380, bg: "icecreamshop", mo: [{ who: "umi", pose: "explain-hand", x: 270 }, { pose: "pose-05", x: 390 }] },
      },
      {
        text: { id: "Umi tersenyum. \"Baiklah. Tapi makan pelan-pelan, ya.\" Mo mendapat menara es krim yang tinggi sekali. Cokelat. Stroberi. Vanila.", en: "Umi smiled. \"All right. But eat it slowly.\" Mo got a very tall ice-cream tower. Chocolate. Strawberry. Vanilla." },
        scene: { focus: 390, bg: "icecreamshop", props: [{ k: "icecream", x: 470, y: 320, s: 1.2 }], mo: [{ pose: "yeyy", x: 370, move: "hop" }], fx: ["sparkle"] },
      },
      {
        text: { id: "Mo lupa duduk. Mo lupa Bismillah. Ia langsung menyuap besar-besar. Nyam! Nyam! NYAM!", en: "Mo forgot to sit down. Mo forgot Bismillah. He took big, big bites straight away. Yum! Yum! YUM!" },
        scene: { focus: 390, bg: "icecreamshop", props: [{ k: "icecream", x: 440, y: 330 }], mo: [{ pose: "pose-37", x: 380 }] },
      },
      {
        text: { id: "Tiba-tiba — NGILUUU! Kepala Mo terasa dingin sekali, seperti ada salju di dalamnya. \"Aduh, aduh, kepalaku beku!\"", en: "Suddenly — OUCHHH! Mo's head felt freezing cold, as if there was snow inside it. \"Ow, ow, my head's frozen!\"" },
        scene: { focus: 390, bg: "icecreamshop", mo: [{ pose: "pose-10", x: 390, move: "still" }] },
      },
      {
        text: { id: "Umi mengusap punggungnya. \"Itu namanya otak kedinginan, karena makan terlalu cepat. Tempelkan lidah ke langit-langit mulut, nanti hangat lagi.\"", en: "Umi rubbed his back. \"That's called brain freeze, from eating too fast. Press your tongue to the roof of your mouth and it'll warm up.\"" },
        scene: { focus: 380, bg: "icecreamshop", mo: [{ who: "umi", pose: "kneel-smile", x: 280 }, { pose: "pose-33", x: 400 }] },
      },
      {
        text: { id: "Ngilunya hilang. Mo makan lagi. Bola pertama habis. Bola kedua habis. Lalu perutnya… \"Umi, perut Mo kembung. Seperti balon!\"", en: "The ouch went away. Mo ate some more. The first scoop was gone. The second scoop was gone. Then his tummy… \"Umi, my tummy's all puffed up. Like a balloon!\"" },
        scene: { focus: 390, bg: "icecreamshop", props: [{ k: "balloon", x: 500, y: 280 }], mo: [{ pose: "pose-21", x: 380 }] },
      },
      {
        text: { id: "Bola ketiga meleleh pelan-pelan di gelas. Tes… tes… tes. Sayang sekali, tapi Mo sudah tidak muat.", en: "The third scoop melted slowly in the cup. Drip… drip… drip. Such a waste, but Mo had no room left." },
        scene: { focus: 390, bg: "icecreamshop", props: [{ k: "icecream", x: 460, y: 340, s: 0.9 }], mo: [{ pose: "pose-38", x: 370, move: "still" }] },
      },
      {
        text: { id: "Umi duduk di samping Mo. \"Rasulullah ﷺ mengajarkan, perut itu seperti rumah dengan tiga kamar: sepertiga untuk makanan, sepertiga untuk minum, dan sepertiga untuk napas.\"", en: "Umi sat beside Mo. \"The Prophet ﷺ taught that the tummy is like a house with three rooms: a third for food, a third for drink and a third for breathing.\"" },
        quote: { id: "\"Tidaklah anak Adam memenuhi wadah yang lebih buruk daripada perutnya. Cukuplah beberapa suap untuk menegakkan punggungnya. Jika harus lebih, maka sepertiga untuk makanannya, sepertiga untuk minumnya, dan sepertiga untuk napasnya.\" (HR. Tirmidzi 2380; hasan sahih)", en: "\"No human fills a vessel worse than his stomach. A few bites are enough to keep his back straight. If he must, then a third for food, a third for drink and a third for breath.\" (Tirmidhi 2380; hasan sahih)" },
        scene: { focus: 380, bg: "icecreamshop", mo: [{ who: "umi", pose: "teach-book", x: 280 }, { pose: "pose-06", x: 400, move: "still" }] },
      },
      {
        text: { id: "\"Jadi kamar napas Mo tadi penuh es krim,\" kata Mo. Umi tertawa. \"Iya! Makanya sesak.\"", en: "\"So my breathing room got filled with ice cream,\" said Mo. Umi laughed. \"Yes! That's why it felt so tight.\"" },
        scene: { focus: 380, bg: "icecreamshop", mo: [{ who: "umi", pose: "cheer-happy", x: 280 }, { pose: "pose-28", x: 400 }] },
      },
      {
        text: { id: "Ais makan es krimnya pelan sekali. Satu sendok… senyum. Satu sendok… senyum. \"Kok es krim Ais lebih enak?\" tanya Mo.", en: "Ais ate her ice cream very slowly. One spoonful… smile. One spoonful… smile. \"How come Ais's ice cream tastes better?\" asked Mo." },
        scene: { focus: 390, bg: "icecreamshop", props: [{ k: "icecream", x: 470, y: 340, s: 0.8 }], mo: [{ who: "ais", pose: "eat-bowl", x: 380, move: "still" }] },
      },
      {
        text: { id: "\"Karena Ais duduk, baca Bismillah, dan menikmati setiap suapan,\" jawab Ais bangga. \"Rasanya jadi lama!\"", en: "\"Because I sat down, said Bismillah and enjoyed every spoonful,\" said Ais proudly. \"The taste lasts longer!\"" },
        scene: { focus: 390, bg: "icecreamshop", mo: [{ who: "ais", pose: "ok-wink", x: 380 }, { pose: "pose-31", x: 490 }] },
      },
      {
        text: { id: "Minggu berikutnya, Mo memesan SATU bola cokelat. Ia duduk. \"Bismillah.\" Satu sendok… senyum. Satu sendok… senyum.", en: "The next week, Mo ordered ONE scoop of chocolate. He sat down. \"Bismillah.\" One spoonful… smile. One spoonful… smile." },
        scene: { focus: 390, bg: "icecreamshop", props: [{ k: "icecream", x: 470, y: 340, s: 0.8 }], mo: [{ pose: "thank-you", x: 380 }], fx: ["sparkle"] },
      },
      {
        text: { id: "\"Umi! Satu bola pelan-pelan ternyata lebih enak dari tiga bola cepat-cepat!\" Dan kamar napasnya tetap lega. Alhamdulillah.", en: "\"Umi! One scoop eaten slowly is yummier than three scoops eaten fast!\" And his breathing room stayed nice and roomy. Alhamdulillah." },
        scene: { focus: 380, bg: "icecreamshop", mo: [{ who: "umi", pose: "touched-cheek", x: 280 }, { pose: "pose-07", x: 400 }], fx: ["hearts"] },
      },
      {
        text: { id: "Es krim rasa apa yang paling kamu suka? Bagaimana cara makannya supaya lebih nikmat? 🍦", en: "Which ice-cream flavour do you love most? How can you eat it so it tastes even better? 🍦" },
        scene: { focus: 390, bg: "icecreamshop", props: [{ k: "icecream", x: 470, y: 320, s: 1.1 }], mo: [{ pose: "pose-37", x: 360 }], fx: ["sparkle"] },
      },
    ],
  },

  /* ───────────────────────── 3. Classroom: one lunchbox, three friends ───────────────────────── */
  {
    slug: "satu-bekal-tiga-sahabat",
    pose: "baby-mo-pose-41.png",
    published: "2026-12-20",
    title: { id: "Satu Bekal, Tiga Sahabat", en: "One Lunchbox, Three Friends" },
    hook: {
      id: "Mo lupa membawa bekal ke sekolah! Ais membagi bekalnya. Lalu mereka melihat Dimas duduk sendirian tanpa makanan. Cukupkah satu bekal untuk bertiga?",
      en: "Mo forgot his lunchbox! Ais shares hers. Then they spot Dimas sitting alone with nothing to eat. Can one lunchbox be enough for three?",
    },
    anchor: { type: "parenting", slug: "anak-tidak-mau-berbagi" },
    takeaway: {
      id: "Makanan yang dibagi tidak membuat kita kekurangan. Justru ada keberkahan: makanan untuk dua cukup untuk tiga, dan hati jadi lebih kenyang.",
      en: "Shared food doesn't leave us short. There's barakah in it: food for two is enough for three, and our hearts end up fuller.",
    },
    tags: ["berbagi", "sekolah", "bekal", "teman baru", "keberkahan", "si kembar"],
    card: {
      title: { id: "Bekal yang Mengajarkan Berbagi", en: "A Lunchbox That Teaches Sharing" },
      items: {
        id: [
          "Sesekali bawakan satu potong lebih: \"Ini untuk teman yang mungkin lupa bawa bekal.\"",
          "Tanyakan sepulang sekolah: \"Siapa yang hari ini kamu bantu?\" bukan hanya \"Kamu makan apa?\"",
          "Ajarkan kalimatnya: \"Mau berbagi denganku?\" Anak lebih berani berbagi kalau tahu cara mengucapkannya.",
        ],
        en: [
          "Now and then pack one extra piece: \"This is for a friend who might forget their lunch.\"",
          "After school, ask \"Who did you help today?\" not only \"What did you eat?\"",
          "Teach the words: \"Want to share with me?\" Children share more bravely when they know what to say.",
        ],
      },
    },
    cover: {
      focus: 390, bg: "classroom",
      props: [{ k: "bowl", x: 390, y: 360, s: 0.8 }],
      mo: [{ pose: "pose-41", x: 340 }, { who: "ais", pose: "heart-hands-smile", x: 450 }],
      fx: ["hearts"],
    },
    pages: [
      {
        text: { id: "Kring! Bel istirahat berbunyi. Semua anak membuka kotak bekal. Ada nasi goreng, roti isi, dan buah warna-warni.", en: "Brrring! The break bell rang. All the children opened their lunchboxes. There was fried rice, sandwiches and colourful fruit." },
        scene: { focus: 390, bg: "classroom", mo: [{ pose: "pose-26", x: 340 }, { who: "ais", pose: "arms-wide-joy", x: 450 }], fx: ["sparkle"] },
      },
      {
        text: { id: "Mo membuka tasnya. Buku ada. Pensil ada. Botol minum ada. Tapi kotak bekalnya… tidak ada! \"Bekal Mo ketinggalan di meja makan!\"", en: "Mo opened his bag. Book — there. Pencil — there. Water bottle — there. But his lunchbox… wasn't! \"I left my lunch on the kitchen table!\"" },
        scene: { focus: 390, bg: "classroom", mo: [{ pose: "pose-33", x: 390 }] },
      },
      {
        text: { id: "Perut Mo berbunyi: kruuuk. Matanya mulai berair. Teman-teman makan dengan lahap. Mo hanya menatap mejanya.", en: "Mo's tummy rumbled: grrrumble. His eyes began to water. Everyone else ate hungrily. Mo just stared at his desk." },
        scene: { focus: 390, bg: "classroom", mo: [{ pose: "pose-38", x: 390, move: "still" }] },
      },
      {
        text: { id: "Ais menggeser kotak bekalnya. \"Mo, kita bagi dua. Satu untukmu, satu untukku.\" Ada dua roti isi dan sepotong semangka.", en: "Ais slid her lunchbox over. \"Mo, let's split it. One for you, one for me.\" There were two sandwiches and a slice of watermelon." },
        scene: { focus: 390, bg: "classroom", props: [{ k: "bowl", x: 390, y: 360, s: 0.8 }], mo: [{ who: "ais", pose: "eat-bowl", x: 450, move: "still" }, { pose: "pose-31", x: 330 }] },
      },
      {
        text: { id: "\"Terima kasih, Ais!\" Mo baru mau menggigit rotinya, saat ia melihat sesuatu di pojok kelas.", en: "\"Thank you, Ais!\" Mo was about to bite his sandwich when he noticed something in the corner of the classroom." },
        scene: { focus: 390, bg: "classroom", mo: [{ pose: "thank-you", x: 340 }, { who: "ais", pose: "heart-hands", x: 450 }] },
      },
      {
        text: { id: "Itu Dimas, murid baru. Ia duduk sendirian. Mejanya kosong. Ia pura-pura membaca buku, tapi perutnya juga berbunyi: kruuuk.", en: "It was Dimas, the new boy. He sat alone. His desk was empty. He pretended to read a book, but his tummy rumbled too: grrrumble." },
        scene: { focus: 390, bg: "classroom", mo: [{ pose: "pose-16", x: 390 }] },
      },
      {
        text: { id: "Mo berbisik, \"Ais… Dimas juga tidak bawa bekal.\" Ais melihat kotak kecilnya. \"Tapi isinya cuma sedikit…\"", en: "Mo whispered, \"Ais… Dimas hasn't got any lunch either.\" Ais looked at her little box. \"But there's only a bit…\"" },
        scene: { focus: 390, bg: "classroom", mo: [{ pose: "pose-23", x: 340 }, { who: "ais", pose: "think-question", x: 450 }] },
      },
      {
        text: { id: "Mo teringat kata Umi pagi tadi: \"Makanan untuk dua orang, cukup untuk tiga.\" Mo bertanya, \"Coba kita bagi tiga?\"", en: "Mo remembered what Umi said that morning: \"Food for two is enough for three.\" Mo asked, \"Shall we try sharing it three ways?\"" },
        quote: { id: "\"Makanan satu orang cukup untuk dua orang, makanan dua orang cukup untuk empat orang, dan makanan empat orang cukup untuk delapan orang.\" (HR. Muslim 2059)", en: "\"Food for one is enough for two, food for two is enough for four, and food for four is enough for eight.\" (Muslim 2059)" },
        scene: { focus: 390, bg: "classroom", mo: [{ pose: "idea", x: 360 }], fx: ["sparkle"] },
      },
      {
        text: { id: "Mereka berjalan ke meja Dimas. Kaki Mo sedikit gemetar. \"Dimas… mau makan bersama kami?\"", en: "They walked to Dimas's desk. Mo's legs wobbled a little. \"Dimas… would you like to eat with us?\"" },
        scene: { focus: 390, bg: "classroom", mo: [{ pose: "pose-32", x: 340 }, { who: "ais", pose: "backpack-walk", x: 450 }] },
      },
      {
        text: { id: "Dimas mendongak. Matanya berbinar. \"Boleh?\" \"Boleh dong!\" kata si kembar bersamaan.", en: "Dimas looked up. His eyes lit up. \"Really?\" \"Of course!\" said the twins together." },
        scene: { focus: 390, bg: "classroom", mo: [{ pose: "pose-41", x: 340 }, { who: "ais", pose: "arms-open-welcome", x: 450 }], fx: ["hearts"] },
      },
      {
        text: { id: "Mereka membaca Bismillah bersama. Roti dipotong menjadi tiga. Semangka dibagi tiga. Satu untuk Mo, satu untuk Ais, satu untuk Dimas.", en: "They said Bismillah together. The sandwiches were cut into three. The watermelon was shared three ways. One for Mo, one for Ais, one for Dimas." },
        scene: { focus: 390, bg: "classroom", props: [{ k: "fruit", x: 390, y: 380, s: 0.7 }], mo: [{ pose: "thank-you", x: 330 }, { who: "ais", pose: "eat-watermelon", x: 450, move: "still" }] },
      },
      {
        text: { id: "Anehnya, setelah makan, perut Mo kenyang. Perut Ais kenyang. Perut Dimas juga kenyang. \"Kok bisa cukup, ya?\" tanya Mo heran.", en: "Strangely, after eating, Mo's tummy was full. Ais's tummy was full. Dimas's tummy was full too. \"How was it enough?\" Mo wondered." },
        scene: { focus: 390, bg: "classroom", mo: [{ pose: "pose-21", x: 340 }, { who: "ais", pose: "giggle", x: 450 }] },
      },
      {
        text: { id: "\"Itu namanya berkah,\" kata Ais, persis seperti Umi. Dimas tertawa. Sejak hari itu, mereka bertiga selalu makan bersama.", en: "\"That's called barakah,\" said Ais, just like Umi. Dimas laughed. From that day on, the three of them always ate together." },
        scene: { focus: 390, bg: "classroom", mo: [{ who: "ais", pose: "idea-point", x: 340 }, { pose: "pose-03", x: 450 }], fx: ["sparkle"] },
      },
      {
        text: { id: "Sepulang sekolah, Mo bercerita kepada Umi. \"Bekal Mo ketinggalan, tapi Mo dapat teman baru!\" Umi memeluknya erat.", en: "After school, Mo told Umi everything. \"I left my lunch behind, but I got a new friend!\" Umi hugged him tight." },
        scene: { focus: 380, bg: "school", time: "dusk", mo: [{ who: "umi", pose: "hug-mo", x: 380, move: "still" }], fx: ["hearts"] },
      },
      {
        text: { id: "Besoknya, Umi menyiapkan bekal yang sedikit lebih banyak. Di tutupnya tertempel kertas kecil: \"Untuk berbagi.\"", en: "The next day, Umi packed a slightly bigger lunch. Stuck on the lid was a little note: \"For sharing.\"" },
        scene: { focus: 380, bg: "kitchen", props: [{ k: "bowl", x: 480, y: 360, s: 0.8 }], mo: [{ who: "umi", pose: "offer", x: 280 }, { pose: "pose-35", x: 400 }], fx: ["sparkle"] },
      },
      {
        text: { id: "Siapa teman yang bisa kamu ajak makan bersama besok? 🍱", en: "Which friend could you invite to eat with you tomorrow? 🍱" },
        scene: { focus: 390, bg: "classroom", props: [{ k: "bowl", x: 390, y: 360, s: 0.8 }], mo: [{ pose: "pose-41", x: 340 }, { who: "ais", pose: "heart-hands-smile", x: 450 }], fx: ["hearts"] },
      },
    ],
  },

  /* ───────────────────────── 4. Mosque: the first tarawih ───────────────────────── */
  {
    slug: "tarawih-pertama-baby-mo",
    pose: "baby-mo-pose-12.png",
    published: "2026-12-21",
    title: { id: "Tarawih Pertama Baby Mo", en: "Baby Mo's First Tarawih" },
    hook: {
      id: "Malam pertama Ramadan! Mo ingin ikut tarawih di masjid sampai selesai, seperti Kak Adam. Tapi rakaatnya banyak sekali, dan matanya makin berat…",
      en: "The first night of Ramadan! Mo wants to pray tarawih at the mosque all the way to the end, like Kak Adam. But there are so many rakaat, and his eyes keep getting heavier…",
    },
    anchor: { type: "parenting", slug: "mulai-sholat" },
    takeaway: {
      id: "Ibadah anak tumbuh pelan-pelan. Yang penting bukan berapa rakaat, tetapi rasa cinta pada masjid dan pada Allah yang tumbuh setiap malam.",
      en: "A child's worship grows slowly. What matters isn't how many rakaat, but the love for the mosque and for Allah that grows each night.",
    },
    tags: ["ramadan", "tarawih", "masjid", "sholat", "sabar", "kak adam", "abi"],
    card: {
      title: { id: "Mengajak Anak Tarawih", en: "Bringing Little Ones to Tarawih" },
      items: {
        id: [
          "Targetnya kecil dulu: dua atau empat rakaat sudah hebat. Biarkan anak beristirahat dan ikut lagi saat siap.",
          "Bawa sajadah kecil miliknya sendiri. Rasa memiliki membuat anak bangga ke masjid.",
          "Jaga adab di masjid: duduk tenang saat lelah, tidak berlari, dan tidak mengganggu yang sholat.",
        ],
        en: [
          "Start small: two or four rakaat is wonderful. Let them rest and rejoin when they're ready.",
          "Bring their own little prayer mat. Ownership makes children proud to go to the mosque.",
          "Keep mosque manners: sit quietly when tired, no running, and don't disturb people praying.",
        ],
      },
    },
    cover: {
      focus: 390, bg: "mosque", time: "night",
      props: [{ k: "lantern", x: 500, y: 300 }],
      mo: [{ pose: "pose-12", x: 380, move: "still" }],
      fx: ["stars"],
    },
    pages: [
      {
        text: { id: "\"Hilal sudah terlihat!\" seru Abi. \"Besok kita puasa, dan malam ini kita tarawih.\" Mo melompat. \"Mo ikut! Sampai selesai!\"", en: "\"The new moon has been seen!\" called Abi. \"Tomorrow we fast, and tonight we pray tarawih.\" Mo jumped. \"I'm coming! All the way to the end!\"" },
        scene: { focus: 380, bg: "garden", time: "night", props: [{ k: "crescent", x: 520, y: 170, s: 0.7 }], mo: [{ who: "ayah", pose: "cheer-fists-stand", x: 270 }, { pose: "pose-02", x: 390, move: "hop" }], fx: ["stars"] },
      },
      {
        text: { id: "Mo memakai baju koko dan membawa sajadah kecilnya sendiri. Kak Adam berjalan di sampingnya. \"Tarawih itu panjang, lho, Mo.\"", en: "Mo put on his prayer clothes and carried his own little prayer mat. Kak Adam walked beside him. \"Tarawih is long, you know, Mo.\"" },
        scene: { focus: 380, bg: "street", time: "night", props: [{ k: "lantern", x: 500 }], mo: [{ who: "adam", pose: "wave-hello", x: 280 }, { pose: "pose-32", x: 400 }], fx: ["stars"] },
      },
      {
        text: { id: "Masjid ramai dan terang. Lampu-lampu berkelip seperti bintang yang turun ke bumi. \"Masya Allah,\" bisik Mo.", en: "The mosque was busy and bright. The lights twinkled like stars that had come down to earth. \"Masya Allah,\" whispered Mo." },
        scene: { focus: 390, bg: "mosque", time: "night", mo: [{ pose: "wow", x: 390 }], fx: ["sparkle"] },
      },
      {
        text: { id: "\"Allahu Akbar!\" Mo berdiri lurus di saf, di antara Abi dan Kak Adam. Rakaat pertama. Rakaat kedua. Mudah!", en: "\"Allahu Akbar!\" Mo stood straight in the row, between Abi and Kak Adam. First rakaat. Second rakaat. Easy!" },
        scene: { focus: 380, bg: "mosque", time: "night", mo: [{ who: "adam", pose: "sholat-qiyam", x: 280 }, { pose: "pose-12", x: 400, move: "still" }] },
      },
      {
        text: { id: "Rakaat keempat. Rakaat keenam. Kaki Mo mulai pegal. Ia menguap — haaam — lalu cepat-cepat menutup mulutnya.", en: "Fourth rakaat. Sixth rakaat. Mo's legs began to ache. He yawned — haaaw — then quickly covered his mouth." },
        scene: { focus: 390, bg: "mosque", time: "night", mo: [{ pose: "pose-40", x: 390 }] },
      },
      {
        text: { id: "Rakaat kedelapan. Mata Mo berat seperti ada batu kecil di kelopaknya. \"Mo harus kuat… Mo harus sampai selesai…\"", en: "Eighth rakaat. Mo's eyes felt heavy, as if there were little pebbles on his eyelids. \"I have to be strong… I have to finish…\"" },
        scene: { focus: 390, bg: "mosque", time: "night", mo: [{ pose: "pose-39", x: 390, move: "still" }], fx: ["zzz"] },
      },
      {
        text: { id: "Saat salam, Mo duduk di sajadahnya… dan tanpa sadar ia tertidur. Kepalanya bersandar di dinding masjid. Zzz.", en: "At the salam, Mo sat down on his mat… and without meaning to, he fell asleep. His head rested against the mosque wall. Zzz." },
        scene: { focus: 390, bg: "mosque", time: "night", props: [{ k: "mat", x: 400 }], mo: [{ pose: "pose-17", x: 390, move: "still" }], fx: ["zzz"] },
      },
      {
        text: { id: "Mo terbangun saat orang-orang membaca doa witir. Wajahnya memerah. \"Abi… Mo tertidur. Mo gagal.\"", en: "Mo woke up as everyone was reciting the witr dua. His face went red. \"Abi… I fell asleep. I failed.\"" },
        scene: { focus: 380, bg: "mosque", time: "night", mo: [{ who: "ayah", pose: "listen-sit-box", x: 280, move: "still" }, { pose: "pose-09", x: 400, move: "still" }] },
      },
      {
        text: { id: "Abi berbisik lembut, \"Gagal? Kamu sholat delapan rakaat di malam pertama Ramadan. Waktu Abi kecil, Abi cuma kuat dua!\"", en: "Abi whispered gently, \"Failed? You prayed eight rakaat on the first night of Ramadan. When I was little, I could only manage two!\"" },
        scene: { focus: 380, bg: "mosque", time: "night", mo: [{ who: "ayah", pose: "hand-heart-kneel", x: 280 }, { pose: "pose-31", x: 400 }] },
      },
      {
        text: { id: "\"Allah melihat setiap rakaatmu. Rasulullah ﷺ bersabda, siapa yang sholat malam di bulan Ramadan karena iman dan berharap pahala, Allah ampuni dosa-dosanya.\"", en: "\"Allah sees every rakaat you pray. The Prophet ﷺ said that whoever prays at night in Ramadan out of faith and hoping for reward, Allah forgives their sins.\"" },
        quote: { id: "\"Barangsiapa melaksanakan qiyam Ramadan karena iman dan mengharap pahala, diampuni dosa-dosanya yang telah lalu.\" (HR. Bukhari 37, Muslim 759)", en: "\"Whoever stands in prayer during Ramadan out of faith and hoping for reward, his past sins will be forgiven.\" (Bukhari 37, Muslim 759)" },
        scene: { focus: 380, bg: "mosque", time: "night", mo: [{ who: "ayah", pose: "teach-book-sit", x: 280, move: "still" }, { pose: "pose-36", x: 400, move: "still" }] },
      },
      {
        text: { id: "\"Dan ibadah yang paling Allah cintai adalah yang terus-menerus, walaupun sedikit. Delapan malam ini, delapan lagi besok — itu hebat.\"", en: "\"And the deeds Allah loves most are the ones done regularly, even if they're small. Eight tonight, eight again tomorrow — that's amazing.\"" },
        quote: { id: "\"Amalan yang paling dicintai Allah adalah yang paling terus-menerus, meskipun sedikit.\" (HR. Bukhari 6464, Muslim 783)", en: "\"The deeds most beloved to Allah are those done most consistently, even if small.\" (Bukhari 6464, Muslim 783)" },
        scene: { focus: 380, bg: "mosque", time: "night", mo: [{ who: "ayah", pose: "hand-heart-kneel", x: 290 }, { pose: "idea", x: 420 }], fx: ["sparkle"] },
      },
      {
        text: { id: "Kak Adam membagi sebutir kurma. \"Kakak dulu juga sering tertidur. Lama-lama kuat sendiri, kok.\" Mo tersenyum lega.", en: "Kak Adam shared a date with him. \"I used to fall asleep too. You get stronger bit by bit.\" Mo smiled with relief." },
        scene: { focus: 380, bg: "mosque", time: "night", props: [{ k: "dates", x: 480, y: 380, s: 0.7 }], mo: [{ who: "adam", pose: "offer", x: 280 }, { pose: "pose-35", x: 400 }] },
      },
      {
        text: { id: "Di jalan pulang, Kak Adam menggandeng tangan Mo. Bulan sabit tersenyum di langit. Mo berbisik, \"Besok Mo coba lagi.\"", en: "On the way home, Kak Adam held Mo's hand. The crescent moon smiled in the sky. Mo whispered, \"I'll try again tomorrow.\"" },
        scene: { focus: 380, bg: "street", time: "night", props: [{ k: "crescent", x: 520, y: 170, s: 0.6 }], mo: [{ who: "adam", pose: "hold-hand-down", x: 335 }, { pose: "pose-42", x: 425 }], fx: ["stars"] },
      },
      {
        text: { id: "Malam kedua: delapan rakaat. Malam ketiga: sepuluh. Malam kesepuluh… Mo sholat sampai witir tanpa tertidur!", en: "Second night: eight rakaat. Third night: ten. On the tenth night… Mo prayed all the way to witr without falling asleep!" },
        scene: { focus: 380, bg: "mosque", time: "night", mo: [{ who: "adam", pose: "sholat-salam", x: 280 }, { pose: "yes", x: 400 }], fx: ["stars", "sparkle"] },
      },
      {
        text: { id: "Abi memeluknya di depan masjid. \"Kamu lihat? Pelan-pelan, sedikit demi sedikit, tapi terus. Itulah yang Allah cintai.\"", en: "Abi hugged him outside the mosque. \"See? Slowly, bit by bit, but every night. That's what Allah loves.\"" },
        scene: { focus: 380, bg: "mosque", time: "night", mo: [{ who: "ayah", pose: "hug-mo", x: 380, move: "still" }], fx: ["hearts", "stars"] },
      },
      {
        text: { id: "Ibadah kecil apa yang ingin kamu lakukan setiap hari, walaupun sedikit? 🌙", en: "What little act of worship would you like to do every day, even if it's small? 🌙" },
        scene: { focus: 390, bg: "mosque", time: "night", props: [{ k: "lantern", x: 500, y: 300 }], mo: [{ pose: "pose-12", x: 380, move: "still" }], fx: ["stars"] },
      },
    ],
  },
];

/** Phone-safe layout for talking pages; pages with a flying ball keep their positions. */
const BALL = new Set(["ballfly", "swoosh", "balltoss", "ballbounce", "ballrally"]);
const safe = (sc: PicScene) => ((sc.props ?? []).some((p) => BALL.has(p.k)) ? sc : stage(sc));

export const MORE_BOOKS: PictureBook[] = RAW.map((b) => ({ ...b, cover: safe(b.cover), pages: b.pages.map((p) => ({ ...p, scene: safe(p.scene) })) }));
