import type { PicScene, PictureBook } from "./picture-books";
import { stage } from "./picture-books-playroom";

/**
 * Kak Adam's tennis journey, part 2 — a boy who loves tennis and wants to
 * master it. Each book uses a different court from the tennis engine
 * (components/story-art/courts.tsx) and the tennis kit (elements/tennis.tsx).
 * Swing loops match picture-books-family.ts: 12 frames over 1.8 s, so a ball
 * with d = contact time leaves the racket on every swing.
 */
const FPS = 12 / 1.8;
const loop = (f: string[]) => [...f, f[5]!, f[5]!, f[0]!, f[0]!, f[0]!, f[0]!];
const six = (b: string) => [1, 2, 3, 4, 5, 6].map((i) => `${b}-${i}`);
const fh = (i: number) => `tennis-fh-${i}`;
const FOREHAND = loop([1, 2, 3, 4, 5, 6].map(fh));
const BACKHAND = loop(six("tennis-backhand"));
const SERVE = loop(six("tennis-serve"));
const BOUNCE = six("tennis-bounce");
const CELEBRATE = [...six("tennis-celebrate"), "tennis-celebrate-6", "tennis-celebrate-6", "tennis-celebrate-6"];
const OOPS = [...six("tennis-oops"), "tennis-oops-6", "tennis-oops-6"];
/** forehand contact (frame 4) and backhand/serve contact (frame 5) */
const FH_HIT = 0.45;
const HIT = 0.6;
const FH_TRAIL = FH_HIT - 0.99;
const TRAIL = HIT - 0.99;

const RAW: PictureBook[] = [
  /* ───────────────────────── 1. Mini court: the red ball ───────────────────────── */
  {
    slug: "bola-merah-kak-adam",
    pose: "baby-mo-pose-26.png",
    published: "2026-12-14",
    title: { id: "Bola Merah Kak Adam", en: "Kak Adam's Red Ball" },
    hook: {
      id: "Mo ingin langsung bermain tenis seperti Kak Adam — di lapangan besar, dengan bola kuning yang cepat. Tapi semua bolanya terbang ke mana-mana! Kak Adam lalu menunjukkan rahasia: bola merah kecil, tempat ia dulu mulai.",
      en: "Mo wants to play tennis like Kak Adam straight away — on the big court, with the fast yellow ball. But every ball flies off everywhere! So Kak Adam shows him a secret: the little red ball, where he once began.",
    },
    anchor: { type: "parenting", slug: "rivalitas-saudara" },
    takeaway: {
      id: "Keahlian dibangun setahap demi setahap. Kakak yang berbagi cerita jatuh-bangunnya sendiri adalah guru terbaik untuk adiknya.",
      en: "Skill is built one step at a time. A big brother who shares his own ups and downs is the best teacher a little one can have.",
    },
    tags: ["tenis", "kak adam", "sabar", "bertahap", "lapangan mini", "kakak adik"],
    card: {
      title: { id: "Mengenalkan Olahraga dengan Bertahap", en: "Introducing a Sport Step by Step" },
      items: {
        id: [
          "Mulai dari versi kecil: lapangan mini, bola lunak, raket pendek. Anak yang cepat berhasil akan ingin terus mencoba.",
          "Ceritakan bahwa semua orang hebat dulu juga pemula. Kakak atau orang tua bisa berbagi cerita saat mereka belum bisa.",
          "Rayakan langkah kecil: pukulan pertama yang melewati net sama berharganya dengan kemenangan.",
        ],
        en: [
          "Start with the small version: a mini court, a soft ball, a short racket. Children who succeed early want to keep going.",
          "Tell them every expert was once a beginner. Older siblings or parents can share the time they couldn't do it yet.",
          "Celebrate small steps: the first ball over the net is worth as much as a win.",
        ],
      },
    },
    cover: {
      focus: 380, bg: "court-mini",
      props: [{ k: "ballred", x: 470, y: 330 }],
      mo: [{ pose: "pose-26", x: 300 }, { who: "adam", pose: "tennis-ready-wide", x: 430 }],
      fx: ["sparkle"],
    },
    pages: [
      {
        text: { id: "Setiap Sabtu, Mo menonton Kak Adam berlatih tenis. Wusss! Pukulan Kak Adam cepat dan keras. \"Mo juga mau! Sekarang!\"", en: "Every Saturday, Mo watched Kak Adam practise tennis. Whoosh! Kak Adam's shots were fast and hard. \"I want to play too! Right now!\"" },
        scene: { focus: 380, bg: "court", props: [{ k: "ballfly", x: 380, y: 330, d: FH_HIT }, { k: "swoosh", x: 355, y: 330, d: FH_TRAIL }], mo: [{ pose: "pose-26", x: 270 }, { who: "adam", pose: fh(1), seq: FOREHAND, fps: FPS, x: 400, move: "still" }] },
      },
      {
        text: { id: "Kak Adam memberikan raketnya. Raket itu besar sekali di tangan Mo — hampir setinggi badannya!", en: "Kak Adam handed him his racket. It looked huge in Mo's hands — almost as tall as he was!" },
        scene: { focus: 370, bg: "court", props: [{ k: "racket", x: 380, y: 400, s: 0.7 }], mo: [{ who: "adam", pose: "give-ball", x: 270 }, { pose: "pose-31", x: 400 }] },
      },
      {
        text: { id: "Mo mengayun sekuat tenaga. Wusss… meleset. Wusss… bolanya terbang ke pagar. Wusss… bolanya jatuh di kepalanya sendiri. Tuk!", en: "Mo swung with all his might. Whoosh… missed. Whoosh… the ball flew into the fence. Whoosh… it landed on his own head. Bonk!" },
        scene: { focus: 390, bg: "court", props: [{ k: "bonk", x: 395, y: 220 }, { k: "tennisball", x: 470 }], mo: [{ pose: "pose-33", x: 390 }] },
      },
      {
        text: { id: "Mo melempar raketnya ke lantai. \"Tenis itu susah! Mo nggak bisa!\" Matanya mulai berair.", en: "Mo dropped the racket on the ground. \"Tennis is too hard! I can't do it!\" His eyes began to water." },
        scene: { focus: 390, bg: "court", props: [{ k: "racket", x: 470, y: 420, s: 0.6 }], mo: [{ pose: "pose-09", x: 380, move: "still" }] },
      },
      {
        text: { id: "Kak Adam duduk di sampingnya. \"Mo tahu tidak? Dulu Kakak juga begitu. Malah lebih parah — Kakak pernah memukul bola ke atap rumah tetangga!\"", en: "Kak Adam sat down beside him. \"Do you know what, Mo? I was just like that. Even worse — I once hit a ball onto the neighbours' roof!\"" },
        scene: { focus: 370, bg: "court", mo: [{ who: "adam", pose: "kneel-talk", x: 280 }, { pose: "pose-06", x: 400, move: "still" }] },
      },
      {
        text: { id: "\"Terus Kakak mulai dari mana?\" tanya Mo sambil mengusap mata. Kak Adam tersenyum. \"Ayo, Kakak tunjukkan.\"", en: "\"So where did you start?\" Mo asked, wiping his eyes. Kak Adam smiled. \"Come on, I'll show you.\"" },
        scene: { focus: 370, bg: "court", mo: [{ who: "adam", pose: "tennis-walk-racket", x: 300 }, { pose: "pose-23", x: 420 }] },
      },
      {
        text: { id: "Di halaman sekolah ada lapangan kecil dengan garis merah dan net yang rendah. \"Ini lapangan mini. Di sini Kakak pertama kali belajar.\"", en: "In the schoolyard there was a little court with red lines and a low net. \"This is a mini court. This is where I first learned.\"" },
        scene: { focus: 380, bg: "court-mini", mo: [{ who: "adam", pose: "proud-hands-hips", x: 300 }, { pose: "wow", x: 420 }], fx: ["sparkle"] },
      },
      {
        text: { id: "Kak Adam mengeluarkan bola merah. \"Bola merah ini lebih empuk dan pelan. Ia sabar menunggu kita.\" Ia juga memberi Mo raket kecil yang pas di tangan.", en: "Kak Adam took out a red ball. \"This red ball is softer and slower. It waits for you patiently.\" He also gave Mo a little racket that fitted his hand." },
        scene: { focus: 380, bg: "court-mini", props: [{ k: "ballred", x: 420, y: 330 }, { k: "racket", x: 470, y: 420, s: 0.55 }], mo: [{ who: "adam", pose: "give-ball", x: 300 }, { pose: "pose-05", x: 420 }] },
      },
      {
        text: { id: "\"Pelajaran pertama: lihat bolanya sampai menyentuh raket.\" Kak Adam melempar pelan. Mo menatap bola merah itu… tuk! Bolanya melewati net!", en: "\"Lesson one: watch the ball until it touches your racket.\" Kak Adam tossed it gently. Mo stared at the red ball… pok! It went over the net!" },
        scene: { focus: 380, bg: "court-mini", props: [{ k: "ballred", x: 470, y: 300 }], mo: [{ pose: "pose-15", x: 380 }, { who: "adam", pose: "clap-cheer", x: 270 }], fx: ["sparkle"] },
      },
      {
        text: { id: "\"MO BISA!\" Mo melompat-lompat. Satu, dua, lima, sepuluh pukulan! Ais ikut berlari dari ayunan. \"Aku juga mau!\"", en: "\"I DID IT!\" Mo jumped up and down. One, two, five, ten hits! Ais came running from the swings. \"Me too!\"" },
        scene: { focus: 380, bg: "court-mini", props: [{ k: "ballred", x: 470, y: 320 }], mo: [{ pose: "pose-02", x: 320, move: "hop" }, { who: "ais", pose: "run", x: 440, move: "hop" }], fx: ["confetti"] },
      },
      {
        text: { id: "\"Setelah bola merah, nanti ada bola oranye, lalu bola hijau, baru bola kuning,\" jelas Kak Adam. \"Satu tangga, satu tangga. Kakak butuh tiga tahun sampai ke bola kuning.\"", en: "\"After the red ball comes the orange ball, then the green ball, and then the yellow ball,\" Kak Adam explained. \"One step, then the next. It took me three years to reach the yellow ball.\"" },
        scene: { focus: 380, bg: "court-mini", props: [{ k: "ballred", x: 340, y: 350 }, { k: "ballorange", x: 390, y: 340 }, { k: "ballgreen", x: 440, y: 330 }, { k: "tennisball", x: 490, y: 320 }], mo: [{ who: "adam", pose: "kneel-talk", x: 250 }, { pose: "pose-31", x: 560 }] },
      },
      {
        text: { id: "\"Tiga tahun?!\" Mo terbelalak. \"Iya. Kadang Kakak juga ingin menyerah. Tapi Abi bilang, setelah susah pasti ada mudah.\"", en: "\"Three years?!\" Mo's eyes went wide. \"Yes. Sometimes I wanted to give up too. But Abi said that after hard times, easy times always come.\"" },
        quote: { id: "\"Maka sesungguhnya bersama kesulitan ada kemudahan. Sesungguhnya bersama kesulitan ada kemudahan.\" (QS. Al-Insyirah: 5–6)", en: "\"So surely with hardship comes ease. Surely with hardship comes ease.\" (Qur'an, Al-Insyirah 94:5–6)" },
        scene: { focus: 370, bg: "court-mini", mo: [{ who: "adam", pose: "deep-breath-calm", x: 280 }, { pose: "pose-36", x: 400, move: "still" }] },
      },
      {
        text: { id: "Abi datang membawa air minum. \"Masya Allah, ada dua pelatih tenis di keluarga kita sekarang.\" Kak Adam tersipu.", en: "Abi came with water bottles. \"Masya Allah, now there are two tennis coaches in our family.\" Kak Adam blushed." },
        scene: { focus: 370, bg: "court-mini", time: "dusk", props: [{ k: "sportbottle", x: 480 }], mo: [{ who: "ayah", pose: "thumbs-up-stand", x: 260 }, { who: "adam", pose: "sheepish-scratch-head", x: 380 }] },
      },
      {
        text: { id: "Mo menggenggam bola merahnya. \"Kak, nanti kalau Mo sudah sampai bola kuning, kita main bareng di lapangan besar, ya?\" \"Janji!\"", en: "Mo held his red ball tight. \"Kak, when I get to the yellow ball, we'll play together on the big court, okay?\" \"Promise!\"" },
        scene: { focus: 370, bg: "court-mini", time: "dusk", props: [{ k: "ballred", x: 400, y: 330 }], mo: [{ who: "adam", pose: "handshake-offer", x: 280 }, { pose: "pose-41", x: 400 }], fx: ["hearts"] },
      },
      {
        text: { id: "Malamnya, bola merah itu tidur di samping bantal Mo. Besok latihan lagi — satu tangga, satu tangga.", en: "That night, the red ball slept next to Mo's pillow. Tomorrow, more practice — one step, then the next." },
        scene: { focus: 360, bg: "bedroom", time: "night", props: [{ k: "ballred", x: 460, y: 380 }], mo: [{ pose: "pose-39", x: 360, move: "still" }], fx: ["stars", "zzz"] },
      },
      {
        text: { id: "Apa yang sedang kamu pelajari pelan-pelan? Tangga ke berapa kamu sekarang? 🎾", en: "What are you learning step by step? Which step are you on now? 🎾" },
        scene: { focus: 380, bg: "court-mini", props: [{ k: "ballred", x: 470, y: 330 }], mo: [{ pose: "pose-26", x: 300 }, { who: "adam", pose: "tennis-ready-wide", x: 430 }], fx: ["sparkle"] },
      },
    ],
  },

  /* ───────────────────────── 2. Practice wall + ball machine: the grip ───────────────────────── */
  {
    slug: "pegangan-raket-yang-salah",
    pose: "baby-mo-pose-16.png",
    published: "2026-12-15",
    title: { id: "Pegangan Raket yang Salah", en: "The Wrong Grip" },
    hook: {
      id: "Kak Adam sudah pandai forehand. Tapi Abi bilang cara memegang raketnya keliru. Kak Adam kesal — kenapa harus mengubah sesuatu yang sudah bisa?",
      en: "Kak Adam is already good at the forehand. But Abi says he's holding the racket wrong. Kak Adam is cross — why change something that already works?",
    },
    anchor: { type: "parenting", slug: "adab-sehari-hari" },
    takeaway: {
      id: "Menjadi mahir artinya mau dikoreksi. Anak yang belajar menerima masukan dengan lapang dada sedang belajar itqan: mengerjakan sesuatu dengan sungguh-sungguh dan benar.",
      en: "Mastery means being willing to be corrected. A child who learns to take feedback gracefully is learning itqan: doing things properly and wholeheartedly.",
    },
    tags: ["tenis", "kak adam", "menerima nasihat", "itqan", "latihan", "abi"],
    card: {
      title: { id: "Saat Anak Tidak Mau Dikoreksi", en: "When Your Child Resists Correction" },
      items: {
        id: [
          "Mulai dari yang sudah baik: \"Pukulanmu sudah kuat. Ada satu hal kecil yang bisa membuatnya lebih hebat.\"",
          "Jelaskan alasannya, bukan hanya perintahnya. Anak lebih mudah berubah saat paham gunanya.",
          "Beri waktu. Kebiasaan baru terasa aneh di awal — rayakan setiap kali anak mencobanya.",
        ],
        en: [
          "Start with what's already good: \"Your shot is strong. One small change could make it even better.\"",
          "Explain the reason, not just the instruction. Children change more easily when they see why.",
          "Give it time. A new habit feels strange at first — celebrate every time they try it.",
        ],
      },
    },
    cover: {
      focus: 380, bg: "court-wall",
      props: [{ k: "ballmachine", x: 560 }],
      mo: [{ who: "adam", pose: fh(1), seq: FOREHAND, fps: FPS, x: 390, move: "still" }],
      fx: ["sparkle"],
    },
    pages: [
      {
        text: { id: "Setiap sore, Kak Adam berlatih di dinding latihan. Duk… tak! Duk… tak! Dinding itu tidak pernah capek mengembalikan bolanya.", en: "Every afternoon, Kak Adam practised at the practice wall. Thud… pok! Thud… pok! The wall never got tired of sending the ball back." },
        scene: { focus: 390, bg: "court-wall", props: [{ k: "ballfly", x: 390, y: 330, d: FH_HIT }, { k: "swoosh", x: 365, y: 330, d: FH_TRAIL }], mo: [{ who: "adam", pose: fh(1), seq: FOREHAND, fps: FPS, x: 400, move: "still" }] },
      },
      {
        text: { id: "Mo dan Ais menonton sambil menghitung. \"Empat puluh delapan… empat puluh sembilan… LIMA PULUH!\" Kak Adam tersenyum bangga.", en: "Mo and Ais watched and counted. \"Forty-eight… forty-nine… FIFTY!\" Kak Adam grinned proudly." },
        scene: { focus: 380, bg: "court-wall", mo: [{ pose: "pose-02", x: 380, move: "hop" }, { who: "ais", pose: "cheer-wink", x: 270 }, { who: "adam", pose: "proud-hands-hips", x: 500 }], fx: ["confetti"] },
      },
      {
        text: { id: "Abi memperhatikan dari pinggir lapangan. \"Pukulanmu kuat, Dam. Tapi coba lihat tanganmu. Peganganmu seperti memegang wajan.\"", en: "Abi watched from the side. \"Your shot is strong, Adam. But look at your hand. You're holding it like a frying pan.\"" },
        scene: { focus: 380, bg: "court-wall", props: [{ k: "racket", x: 390, y: 360 }], mo: [{ who: "ayah", pose: "think-chin-stand", x: 270 }, { who: "adam", pose: "tennis-hold-ball", x: 400 }] },
      },
      {
        text: { id: "\"Kalau peganganmu diputar sedikit, seperti berjabat tangan dengan raket, bolamu akan lebih terkendali dan tanganmu tidak cepat sakit.\"", en: "\"If you turn your grip a little, like shaking hands with the racket, your ball will be more controlled and your wrist won't get sore.\"" },
        scene: { focus: 380, bg: "court-wall", mo: [{ who: "ayah", pose: "teach-point-kneel", x: 270 }, { who: "adam", pose: "sulk-arms-crossed", x: 400 }] },
      },
      {
        text: { id: "Kak Adam cemberut. \"Tapi Adam sudah bisa lima puluh kali, Abi! Kenapa harus diubah?\" Ia menendang bola pelan ke dinding.", en: "Kak Adam frowned. \"But I can already do fifty, Abi! Why change it?\" He kicked a ball gently at the wall." },
        scene: { focus: 390, bg: "court-wall", props: [{ k: "tennisball", x: 470 }], mo: [{ who: "adam", pose: "frustrated-stomp", x: 390 }] },
      },
      {
        text: { id: "Ia mencoba pegangan baru. Duk… bolanya meleset. Duk… bolanya keluar. \"Tuh kan! Malah jadi jelek!\"", en: "He tried the new grip. Thud… the ball missed. Thud… it went wide. \"See! It's worse now!\"" },
        scene: { focus: 390, bg: "court-wall", props: [{ k: "ballbounce", x: 300 }], mo: [{ who: "adam", pose: "tennis-oops-1", seq: OOPS, fps: 4, x: 400, move: "still" }] },
      },
      {
        text: { id: "Abi duduk di bangku dan menepuk tempat di sebelahnya. \"Dam, waktu kamu pertama belajar forehand, apakah langsung lima puluh kali?\" Kak Adam menggeleng.", en: "Abi sat on the bench and patted the space beside him. \"Adam, when you first learned the forehand, could you do fifty straight away?\" Kak Adam shook his head." },
        scene: { focus: 370, bg: "court-wall", props: [{ k: "bench", x: 380 }], mo: [{ who: "ayah", pose: "listen-sit-box", x: 290, move: "still" }, { who: "adam", pose: "tennis-rest-sit", x: 420, move: "still" }] },
      },
      {
        text: { id: "\"Cara yang benar memang terasa aneh di awal. Tapi Rasulullah ﷺ mengajarkan, Allah mencintai orang yang mengerjakan sesuatu dengan sungguh-sungguh dan rapi.\"", en: "\"The right way always feels strange at first. But the Prophet ﷺ taught that Allah loves it when someone does a job properly and well.\"" },
        quote: { id: "\"Sesungguhnya Allah mencintai jika salah seorang dari kalian mengerjakan suatu pekerjaan, ia melakukannya dengan itqan (sungguh-sungguh dan sempurna).\" (HR. Al-Baihaqi, Syu'ab al-Iman 4929; dinilai hasan)", en: "\"Allah loves that when any of you does a job, you do it with itqan (excellence and care).\" (Al-Bayhaqi, Shu'ab al-Iman 4929; graded hasan)" },
        scene: { focus: 370, bg: "court-wall", mo: [{ who: "ayah", pose: "teach-book-sit", x: 280, move: "still" }, { who: "adam", pose: "deep-breath-calm", x: 410 }] },
      },
      {
        text: { id: "Abi menyalakan mesin pelontar bola. Brrrt… pop! Bola datang pelan dan teratur. \"Satu bola, satu pegangan baru. Pelan-pelan saja.\"", en: "Abi switched on the ball machine. Brrrt… pop! The balls came slowly and steadily. \"One ball, one new grip. Nice and slow.\"" },
        scene: { focus: 400, bg: "court-wall", props: [{ k: "ballmachine", x: 300 }], mo: [{ who: "adam", pose: "tennis-ready-wide", x: 470 }] },
      },
      {
        text: { id: "Sepuluh bola… dua puluh… tiga puluh. Pukulannya mulai lurus. Tak! Tak! Tak!", en: "Ten balls… twenty… thirty. His shots began to fly straight. Pok! Pok! Pok!" },
        scene: { focus: 400, bg: "court-wall", props: [{ k: "ballmachine", x: 290 }, { k: "ballfly", x: 450, y: 330, d: FH_HIT }, { k: "swoosh", x: 425, y: 330, d: FH_TRAIL }], mo: [{ who: "adam", pose: fh(1), seq: FOREHAND, fps: FPS, x: 460, move: "still" }] },
      },
      {
        text: { id: "Seminggu kemudian, Kak Adam memukul ke dinding dengan pegangan baru. Bolanya lebih cepat, lebih rendah, dan tangannya tidak pegal sama sekali.", en: "A week later, Kak Adam hit against the wall with his new grip. The ball was faster and lower, and his wrist didn't ache at all." },
        scene: { focus: 390, bg: "court-wall", props: [{ k: "ballfly", x: 390, y: 330, d: FH_HIT }, { k: "swoosh", x: 365, y: 330, d: FH_TRAIL }], mo: [{ who: "adam", pose: fh(1), seq: FOREHAND, fps: FPS, x: 400, move: "still" }], fx: ["sparkle"] },
      },
      {
        text: { id: "\"SERATUS!\" teriak Mo dan Ais. Seratus kali tanpa jatuh! Rekor baru!", en: "\"ONE HUNDRED!\" shouted Mo and Ais. A hundred in a row! A new record!" },
        scene: { focus: 380, bg: "court-wall", mo: [{ pose: "yeyy", x: 380, move: "hop" }, { who: "ais", pose: "jump-joy", x: 270, move: "hop" }, { who: "adam", pose: "tennis-celebrate-1", seq: CELEBRATE, fps: 6, x: 500, move: "still" }], fx: ["confetti"] },
      },
      {
        text: { id: "Kak Adam berlari ke Abi. \"Abi… maaf ya kemarin Adam kesal. Ternyata nasihat Abi benar.\" Abi memeluknya. \"Kamu hebat karena mau mencoba.\"", en: "Kak Adam ran to Abi. \"Abi… sorry I was cross the other day. Your advice was right.\" Abi hugged him. \"You're great because you were willing to try.\"" },
        scene: { focus: 370, bg: "court-wall", time: "dusk", mo: [{ who: "ayah", pose: "kneel-arms-open", x: 280 }, { who: "adam", pose: "sorry-hands", x: 410 }], fx: ["hearts"] },
      },
      {
        text: { id: "Di rumah, Kak Adam menulis di buku latihannya: \"Pemain hebat bukan yang tidak pernah salah, tapi yang mau dibetulkan.\"", en: "At home, Kak Adam wrote in his training notebook: \"A great player isn't one who never makes mistakes, but one who lets himself be corrected.\"" },
        scene: { focus: 370, bg: "bedroom", time: "night", props: [{ k: "racketbag", x: 500 }], mo: [{ who: "adam", pose: "write-card-floor", x: 370, move: "still" }], fx: ["stars"] },
      },
      {
        text: { id: "Mo mengintip tulisan itu, lalu berbisik, \"Kak, besok betulkan pegangan Mo juga, ya.\" Kak Adam tertawa. \"Siap, Pelatih Kecil!\"", en: "Mo peeked at the note and whispered, \"Kak, tomorrow fix my grip too, okay?\" Kak Adam laughed. \"You got it, Little Coach!\"" },
        scene: { focus: 370, bg: "bedroom", time: "night", mo: [{ who: "adam", pose: "laugh-tummy", x: 290 }, { pose: "pose-03", x: 410 }], fx: ["stars"] },
      },
      {
        text: { id: "Pernahkah kamu dibetulkan cara melakukan sesuatu? Bagaimana rasanya setelah dicoba? 🎾", en: "Has anyone ever shown you a better way to do something? How did it feel once you tried it? 🎾" },
        scene: { focus: 380, bg: "court-wall", props: [{ k: "ballmachine", x: 560 }], mo: [{ who: "adam", pose: fh(1), seq: FOREHAND, fps: FPS, x: 390, move: "still" }], fx: ["sparkle"] },
      },
    ],
  },

  /* ───────────────────────── 3. Clay: the slippery court ───────────────────────── */
  {
    slug: "lapangan-tanah-liat-yang-licin",
    pose: "baby-mo-pose-31.png",
    published: "2026-12-16",
    title: { id: "Lapangan Tanah Liat yang Licin", en: "The Slippery Clay Court" },
    hook: {
      id: "Kak Adam ikut turnamen di kota lain — di lapangan tanah liat oranye yang belum pernah ia coba. Ia terpeleset, bolanya memantul aneh, dan ia kalah set pertama. Siapa yang mau mengajarinya?",
      en: "Kak Adam plays a tournament in another town — on an orange clay court he's never tried. He slips, the ball bounces strangely, and he loses the first set. Who will teach him?",
    },
    anchor: { type: "hadith", slug: "hadiah-terbaik-adab" },
    takeaway: {
      id: "Anak yang rendah hati mau bertanya dan belajar dari siapa saja — bahkan dari lawannya. Adab itulah yang membuat ilmunya bertambah.",
      en: "A humble child is willing to ask and learn from anyone — even an opponent. That good manners are what make their knowledge grow.",
    },
    tags: ["tenis", "kak adam", "rendah hati", "bertanya", "adab", "turnamen", "tanah liat"],
    card: {
      title: { id: "Menumbuhkan Rendah Hati dalam Belajar", en: "Growing Humility in Learning" },
      items: {
        id: [
          "Contohkan bertanya. Saat orang tua berkata \"Ayah belum tahu, kita tanya, yuk\", anak belajar bahwa bertanya itu tanda pintar.",
          "Ajak anak berterima kasih kepada siapa pun yang mengajarinya, termasuk teman sebaya.",
          "Ajarkan adab tempat: merapikan dan membersihkan setelah memakai — lapangan, kelas, atau masjid.",
        ],
        en: [
          "Model asking. When a parent says \"I don't know yet — let's ask\", children learn that asking is clever.",
          "Encourage thanking anyone who teaches them, including friends their own age.",
          "Teach respect for places: tidy and clean up after using a court, a classroom or a mosque.",
        ],
      },
    },
    cover: {
      focus: 380, bg: "court-clay",
      props: [{ k: "courtbrush", x: 560 }],
      mo: [{ who: "adam", pose: "tennis-lunge-low", x: 400 }],
      fx: ["sparkle"],
    },
    pages: [
      {
        text: { id: "Hari ini Kak Adam ikut turnamen di kota lain. Lapangannya berbeda sekali — berwarna oranye seperti bata, dan lembut seperti pasir.", en: "Today Kak Adam was playing a tournament in another town. The court was completely different — orange like bricks, and soft like sand." },
        scene: { focus: 380, bg: "court-clay", props: [{ k: "racketbag", x: 520 }], mo: [{ who: "adam", pose: "surprised-hands-up", x: 380 }], fx: ["sparkle"] },
      },
      {
        text: { id: "\"Ini lapangan tanah liat,\" kata Abi. \"Bolanya memantul lebih tinggi dan lebih pelan. Dan kakimu bisa meluncur.\"", en: "\"This is a clay court,\" said Abi. \"The ball bounces higher and slower. And your feet can slide.\"" },
        scene: { focus: 370, bg: "court-clay", mo: [{ who: "ayah", pose: "idea-point-stand", x: 270 }, { who: "adam", pose: "tennis-ready-wide", x: 400 }] },
      },
      {
        text: { id: "Lawannya bernama Bima, anak setempat yang sudah biasa bermain di tanah liat. Mereka bersalaman. \"Semoga seru, ya!\"", en: "His opponent was Bima, a local boy who was used to playing on clay. They shook hands. \"Have a good game!\"" },
        scene: { focus: 380, bg: "court-clay", mo: [{ who: "adam", pose: "handshake-offer", x: 380 }], fx: ["sparkle"] },
      },
      {
        text: { id: "Pertandingan dimulai. Kak Adam berlari ke bola — sreeet! Kakinya meluncur dan ia jatuh terduduk. Celananya oranye semua.", en: "The match began. Kak Adam ran for the ball — swoosh! His feet slid and he landed on his bottom. His trousers were orange all over." },
        scene: { focus: 390, bg: "court-clay", props: [{ k: "ballbounce", x: 480 }], mo: [{ who: "adam", pose: "tennis-oops-1", seq: OOPS, fps: 4, x: 390, move: "still" }] },
      },
      {
        text: { id: "Bolanya memantul tinggi sekali, di atas bahunya. Pukulannya keluar terus. Kak Adam kalah set pertama, 2–6.", en: "The ball bounced really high, above his shoulder. His shots kept going out. Kak Adam lost the first set, 2–6." },
        scene: { focus: 390, bg: "court-clay", props: [{ k: "scoreboard", x: 540 }], mo: [{ who: "adam", pose: "tennis-sad-miss", x: 380 }] },
      },
      {
        text: { id: "Saat istirahat, Kak Adam duduk dengan wajah kusut. \"Lapangannya jahat, Abi. Di sini semuanya licin!\"", en: "At the break, Kak Adam sat with a crumpled face. \"This court is horrible, Abi. Everything's slippery here!\"" },
        scene: { focus: 380, bg: "court-clay", props: [{ k: "sportbottle", x: 470 }], mo: [{ who: "adam", pose: "tennis-rest-bench", x: 380, move: "still" }] },
      },
      {
        text: { id: "\"Lapangannya tidak jahat,\" kata Abi lembut. \"Ia hanya berbeda. Siapa yang paling tahu cara bermain di sini?\" Kak Adam melirik Bima.", en: "\"The court isn't horrible,\" said Abi gently. \"It's just different. Who knows best how to play here?\" Kak Adam glanced at Bima." },
        scene: { focus: 370, bg: "court-clay", mo: [{ who: "ayah", pose: "kneel-arms-open", x: 280 }, { who: "adam", pose: "worried-bite-lip", x: 410 }] },
      },
      {
        text: { id: "Bertanya kepada lawan? Rasanya malu. Tapi Kak Adam ingat kata Abi: orang yang mau bertanya, ilmunya bertambah. Ia berjalan ke Bima.", en: "Ask his opponent? That felt embarrassing. But Kak Adam remembered Abi's words: whoever is willing to ask grows in knowledge. He walked over to Bima." },
        quote: { id: "\"Barangsiapa menempuh suatu jalan untuk mencari ilmu, Allah akan memudahkan baginya jalan menuju surga.\" (HR. Muslim 2699)", en: "\"Whoever takes a path in search of knowledge, Allah will make easy for him a path to Paradise.\" (Muslim 2699)" },
        scene: { focus: 380, bg: "court-clay", mo: [{ who: "adam", pose: "tennis-walk-racket", x: 390 }] },
      },
      {
        text: { id: "\"Bima… boleh tanya? Bagaimana caranya supaya tidak jatuh?\" Bima tersenyum lebar. \"Jangan lari lurus sampai berhenti. Meluncur saja, seperti main perosotan!\"", en: "\"Bima… can I ask something? How do you stop yourself falling?\" Bima grinned. \"Don't run straight and stop. Just slide, like on a slide!\"" },
        scene: { focus: 380, bg: "court-clay", mo: [{ who: "adam", pose: "kneel-talk", x: 380 }], fx: ["sparkle"] },
      },
      {
        text: { id: "\"Dan tunggu bolanya turun sedikit sebelum dipukul.\" Kak Adam mengangguk. \"Terima kasih, Bima!\" \"Sama-sama — tapi aku tetap mau menang, lho!\" Mereka tertawa.", en: "\"And wait for the ball to drop a little before you hit it.\" Kak Adam nodded. \"Thanks, Bima!\" \"No problem — but I still want to win, you know!\" They both laughed." },
        scene: { focus: 380, bg: "court-clay", mo: [{ who: "adam", pose: "laugh-tummy", x: 380 }] },
      },
      {
        text: { id: "Set kedua. Kak Adam meluncur ke bola — sreeet — dan memukulnya tepat waktu. TAK! Bolanya masuk di sudut lapangan!", en: "Second set. Kak Adam slid to the ball — swoosh — and hit it right on time. POK! It landed in the corner!" },
        scene: { focus: 390, bg: "court-clay", props: [{ k: "ballfly", x: 390, y: 330, d: FH_HIT }, { k: "swoosh", x: 365, y: 330, d: FH_TRAIL }], mo: [{ who: "adam", pose: fh(1), seq: FOREHAND, fps: FPS, x: 400, move: "still" }] },
      },
      {
        text: { id: "Pertandingan jadi seru sekali. Kak Adam menang set kedua 6–4! Tapi di set penentu, Bima lebih kuat dan menang 6–3.", en: "The match got really exciting. Kak Adam won the second set 6–4! But in the deciding set, Bima was stronger and won 6–3." },
        scene: { focus: 390, bg: "court-clay", props: [{ k: "scoreboard", x: 540 }], mo: [{ who: "adam", pose: "tired-hands-knees", x: 390 }] },
      },
      {
        text: { id: "Kak Adam kalah. Tapi ia tersenyum saat bersalaman. \"Kamu hebat, Bima. Dan terima kasih sudah mengajariku.\"", en: "Kak Adam lost. But he smiled as they shook hands. \"You're brilliant, Bima. And thanks for teaching me.\"" },
        scene: { focus: 380, bg: "court-clay", time: "dusk", mo: [{ who: "adam", pose: "handshake-offer", x: 380 }], fx: ["hearts"] },
      },
      {
        text: { id: "Lalu ia mengambil sikat lapangan dan menyapu garis-garis bersama Bima, sampai lapangannya rapi lagi untuk pemain berikutnya.", en: "Then he took the court brush and swept the lines with Bima, until the court was tidy again for the next players." },
        scene: { focus: 390, bg: "court-clay", time: "dusk", props: [{ k: "courtbrush", x: 470 }], mo: [{ who: "adam", pose: "tennis-pick-up-ball", x: 360 }], fx: ["sparkle"] },
      },
      {
        text: { id: "Di mobil, Abi berkata, \"Hari ini kamu kalah skor, tapi menang dua hal: ilmu baru dan teman baru.\" Kak Adam tersenyum sampai tertidur.", en: "In the car, Abi said, \"Today you lost on the scoreboard, but you won two things: new knowledge and a new friend.\" Kak Adam smiled until he fell asleep." },
        scene: { focus: 370, bg: "street", time: "night", props: [{ k: "car", x: 470, s: 0.9 }], mo: [{ who: "ayah", pose: "hand-heart-kneel", x: 270 }], fx: ["stars"] },
      },
      {
        text: { id: "Pernahkah kamu belajar sesuatu dari teman? Sudahkah kamu berterima kasih kepadanya? 🧡", en: "Have you ever learned something from a friend? Did you remember to thank them? 🧡" },
        scene: { focus: 380, bg: "court-clay", props: [{ k: "courtbrush", x: 560 }], mo: [{ who: "adam", pose: "tennis-lunge-low", x: 400 }], fx: ["sparkle"] },
      },
    ],
  },

  /* ───────────────────────── 4. Stadium final: tie the camel ───────────────────────── */
  {
    slug: "final-di-stadion",
    pose: "baby-mo-yes.png",
    published: "2026-12-17",
    title: { id: "Final di Stadion", en: "The Final in the Stadium" },
    hook: {
      id: "Kak Adam masuk final turnamen junior — di stadion sungguhan, dengan penonton dan wasit di kursi tinggi! Ia sudah berlatih berbulan-bulan. Tapi saat tertinggal jauh, apa yang harus ia lakukan?",
      en: "Kak Adam reaches the junior tournament final — in a real stadium, with a crowd and an umpire in a tall chair! He's trained for months. But when he falls far behind, what should he do?",
    },
    anchor: { type: "doa", slug: "doa-hasbunallah" },
    takeaway: {
      id: "Ikhtiar dan tawakal berjalan bersama: berlatih sebaik-baiknya, berdoa, lalu bermain satu poin demi satu poin dan menyerahkan hasilnya kepada Allah.",
      en: "Effort and trust in Allah go together: train as well as you can, make dua, then play one point at a time and leave the result to Allah.",
    },
    tags: ["tenis", "kak adam", "tawakal", "ikhtiar", "tenang", "turnamen", "sportif"],
    card: {
      title: { id: "Saat Anak Tegang Menghadapi Lomba", en: "When Your Child Is Nervous Before a Big Moment" },
      items: {
        id: [
          "Pisahkan yang bisa dikendalikan (latihan, napas, satu poin berikutnya) dari yang tidak (hasil akhir).",
          "Ajarkan doa tawakal, lalu satu rutinitas tenang: tarik napas, lihat senar raket, mulai lagi.",
          "Setelah lomba, tanyakan dulu \"Apa yang kamu pelajari?\" sebelum \"Menang atau kalah?\"",
        ],
        en: [
          "Separate what they can control (practice, breathing, the next point) from what they can't (the final result).",
          "Teach a dua of trust in Allah, then one calm routine: breathe, look at the strings, start again.",
          "After the event, ask \"What did you learn?\" before \"Did you win?\"",
        ],
      },
    },
    cover: {
      focus: 380, bg: "court-stadium",
      props: [{ k: "balltoss", x: 405, y: 250, d: HIT }],
      mo: [{ who: "adam", pose: "tennis-serve-1", seq: SERVE, fps: FPS, x: 400, move: "still" }],
      fx: ["sparkle"],
    },
    pages: [
      {
        text: { id: "Hari yang ditunggu tiba: final turnamen junior! Lapangannya ada di stadion, dengan tribun penuh penonton dan papan skor besar.", en: "The big day had come: the junior tournament final! The court was in a stadium, with stands full of people and a huge scoreboard." },
        scene: { focus: 380, bg: "court-stadium", mo: [{ who: "adam", pose: "surprised-hands-up", x: 390 }], fx: ["sparkle"] },
      },
      {
        text: { id: "Di ruang ganti, tangan Kak Adam dingin. \"Abi, bagaimana kalau Adam kalah di depan semua orang?\"", en: "In the changing room, Kak Adam's hands felt cold. \"Abi, what if I lose in front of everyone?\"" },
        scene: { focus: 370, bg: "court-indoor", props: [{ k: "racketbag", x: 500 }], mo: [{ who: "ayah", pose: "listen-sit-box", x: 280, move: "still" }, { who: "adam", pose: "worried-bite-lip", x: 410 }] },
      },
      {
        text: { id: "Abi menggenggam tangannya. \"Kamu sudah berlatih berbulan-bulan — itu ikhtiarmu. Sekarang serahkan hasilnya kepada Allah — itu tawakal.\"", en: "Abi held his hands. \"You've trained for months — that's your effort. Now leave the result to Allah — that's trust.\"" },
        scene: { focus: 370, bg: "court-indoor", mo: [{ who: "ayah", pose: "hand-heart-kneel", x: 280 }, { who: "adam", pose: "deep-breath-calm", x: 410 }] },
      },
      {
        text: { id: "\"Seperti cerita orang yang bertanya kepada Rasulullah ﷺ: untanya diikat dulu atau langsung bertawakal? Beliau menjawab: ikat dulu, lalu bertawakal.\"", en: "\"It's like the man who asked the Prophet ﷺ whether to tie up his camel or just trust in Allah. He answered: tie it, and then trust.\"" },
        quote: { id: "\"Ikatlah untamu, lalu bertawakallah.\" (HR. Tirmidzi 2517; dinilai hasan)", en: "\"Tie it, and then trust in Allah.\" (Tirmidhi 2517; graded hasan)" },
        scene: { focus: 370, bg: "court-indoor", mo: [{ who: "ayah", pose: "teach-book-sit", x: 280, move: "still" }, { who: "adam", pose: "tennis-hold-ball", x: 410 }] },
      },
      {
        text: { id: "Mereka berdoa bersama. \"Hasbunallaah wa ni'mal wakiil — cukuplah Allah bagi kami, dan Dia sebaik-baik pelindung.\"", en: "They made dua together. \"Hasbunallahu wa ni'mal wakil — Allah is enough for us, and He is the best protector.\"" },
        quote: { id: "\"Hasbunallaah wa ni'mal wakiil.\" — Cukuplah Allah menjadi penolong kami, dan Dia sebaik-baik pelindung. (QS. Ali 'Imran: 173)", en: "\"Hasbunallahu wa ni'mal wakil.\" — Allah is sufficient for us, and He is the best disposer of affairs. (Qur'an, Ali 'Imran 3:173)" },
        scene: { focus: 370, bg: "court-indoor", mo: [{ who: "ayah", pose: "dua-kneel", x: 280 }, { who: "adam", pose: "dua-hands", x: 410 }] },
      },
      {
        text: { id: "Di tribun, Mo, Ais, dan Umi membawa spanduk: \"SEMANGAT KAK ADAM!\" Wasit duduk di kursi tinggi. \"Main!\"", en: "In the stands, Mo, Ais and Umi held up a banner: \"GO, KAK ADAM!\" The umpire sat in the tall chair. \"Play!\"" },
        scene: { focus: 380, bg: "court-stadium", mo: [{ who: "umi", pose: "cheer-happy", x: 260 }, { pose: "pose-24", x: 380 }, { who: "ais", pose: "megaphone", x: 490 }], fx: ["confetti"] },
      },
      {
        text: { id: "Lawannya, Dio, bermain cepat sekali. Kak Adam tegang dan terburu-buru. Skor 0–4! Penonton berbisik-bisik.", en: "His opponent, Dio, played really fast. Kak Adam was tense and rushed. The score was 0–4! The crowd murmured." },
        scene: { focus: 390, bg: "court-stadium", props: [{ k: "ballbounce", x: 300 }], mo: [{ who: "adam", pose: "tennis-oops-1", seq: OOPS, fps: 4, x: 400, move: "still" }] },
      },
      {
        text: { id: "Saat pindah sisi, Kak Adam duduk dan menunduk. Lalu ia ingat rutinitas tenangnya: tarik napas panjang… lihat senar raket… satu poin saja.", en: "At the changeover, Kak Adam sat with his head down. Then he remembered his calm routine: a long breath… look at the strings… just one point." },
        scene: { focus: 380, bg: "court-stadium", props: [{ k: "sportbottle", x: 480 }, { k: "umpirechair", x: 250 }], mo: [{ who: "adam", pose: "deep-breath-calm", x: 380 }] },
      },
      {
        text: { id: "\"Bukan menang pertandingan. Menangkan saja poin berikutnya.\" Ia memantulkan bola tiga kali — duk, duk, duk — lalu servis.", en: "\"Don't try to win the match. Just win the next point.\" He bounced the ball three times — bop, bop, bop — and served." },
        scene: { focus: 390, bg: "court-stadium", mo: [{ who: "adam", pose: "tennis-bounce-1", seq: BOUNCE, fps: 6, x: 400, move: "still" }] },
      },
      {
        text: { id: "TAK! Servisnya masuk. Satu poin. Lalu satu lagi. Lalu satu lagi. Pelan-pelan skornya mendekat: 3–4… 5–5…", en: "POK! His serve went in. One point. Then another. Then another. Slowly the score crept closer: 3–4… 5–5…" },
        scene: { focus: 390, bg: "court-stadium", props: [{ k: "balltoss", x: 405, y: 250, d: HIT }, { k: "ballfly", x: 420, y: 230, d: HIT }], mo: [{ who: "adam", pose: "tennis-serve-1", seq: SERVE, fps: FPS, x: 400, move: "still" }] },
      },
      {
        text: { id: "Reli panjang! Dio memukul ke kiri, Kak Adam bergeser — srek srek srek — dan membalas dengan backhand dua tangan!", en: "A long rally! Dio hit to the left, Kak Adam shuffled across — shk shk shk — and sent it back with a two-handed backhand!" },
        scene: { focus: 390, bg: "court-stadium", props: [{ k: "ballfly", x: 380, y: 330, d: HIT }, { k: "swoosh", x: 380, y: 330, d: TRAIL, flip: true }], mo: [{ who: "adam", pose: "tennis-backhand-1", seq: BACKHAND, fps: FPS, x: 400, move: "still" }] },
      },
      {
        text: { id: "Poin terakhir. Bola Dio menyangkut di net. \"Game, set, and match — Adam!\" Kak Adam jatuh berlutut. \"Alhamdulillah!\"", en: "Match point. Dio's ball caught the net. \"Game, set and match — Adam!\" Kak Adam dropped to his knees. \"Alhamdulillah!\"" },
        scene: { focus: 390, bg: "court-stadium", mo: [{ who: "adam", pose: "tennis-celebrate-1", seq: CELEBRATE, fps: 6, x: 400, move: "still" }], fx: ["confetti"] },
      },
      {
        text: { id: "Lalu ia berlari ke net dan memeluk Dio. \"Pertandinganmu luar biasa. Kamu membuatku bermain lebih baik.\"", en: "Then he ran to the net and hugged Dio. \"You played amazingly. You made me play better.\"" },
        scene: { focus: 390, bg: "court-stadium", mo: [{ who: "adam", pose: "hug-side", x: 390 }], fx: ["hearts"] },
      },
      {
        text: { id: "Kak Adam menerima piala dan medali. Ia mencari Abi di tribun dan berbisik dari jauh, \"Untanya sudah Adam ikat, Abi!\"", en: "Kak Adam received the trophy and a medal. He looked for Abi in the stands and mouthed from afar, \"I tied the camel, Abi!\"" },
        scene: { focus: 380, bg: "court-stadium", props: [{ k: "medal", x: 300, y: 300, s: 0.8 }], mo: [{ who: "adam", pose: "hold-trophy", x: 400 }], fx: ["sparkle", "confetti"] },
      },
      {
        text: { id: "Malamnya, piala itu berdiri di rak. Tapi yang Kak Adam tulis di buku latihannya adalah: \"Satu poin, satu napas, satu doa.\"", en: "That night the trophy stood on the shelf. But what Kak Adam wrote in his training notebook was: \"One point, one breath, one dua.\"" },
        scene: { focus: 370, bg: "bedroom", time: "night", props: [{ k: "trophy", x: 520, y: 320, s: 0.8 }], mo: [{ who: "adam", pose: "pj-read-bed", x: 370, move: "still" }], fx: ["stars"] },
      },
      {
        text: { id: "Apa \"unta\" yang perlu kamu ikat sebelum bertawakal? Latihan apa yang sedang kamu lakukan? 🏆", en: "What \"camel\" do you need to tie before you trust in Allah? What are you practising right now? 🏆" },
        scene: { focus: 380, bg: "court-stadium", props: [{ k: "balltoss", x: 405, y: 250, d: HIT }], mo: [{ who: "adam", pose: "tennis-serve-1", seq: SERVE, fps: FPS, x: 400, move: "still" }], fx: ["sparkle"] },
      },
    ],
  },
];


/** Phone-safe layout for talking pages; pages with a flying ball keep their hand-tuned positions. */
const BALL = new Set(["ballfly", "swoosh", "balltoss", "ballbounce", "ballrally"]);
const safe = (sc: PicScene) => ((sc.props ?? []).some((p) => BALL.has(p.k)) ? sc : stage(sc));

export const TENNIS_BOOKS: PictureBook[] = RAW.map((b) => ({ ...b, cover: safe(b.cover), pages: b.pages.map((p) => ({ ...p, scene: safe(p.scene) })) }));
