import type { Locale } from "@/lib/i18n/config";
import type { Catatan, CatatanAnchor } from "@/lib/content/types";
import type { ArtScene } from "./illus-types";
import { ADAPTED } from "./picture-books-adapted";
import { FAMILY_BOOKS } from "./picture-books-family";

/**
 * Full picture books: every page is one big illustration with a short bit
 * of text, like a printed children's book (16 pages + cover + ending).
 * Each page's scene is drawn to match its text. The same pages also feed
 * the normal story page (as paragraphs) and the shelf.
 */
export type PicScene = Omit<ArtScene, "at" | "alt">;

export interface PicPage {
  text: Record<Locale, string>;
  /** the Qur'an / hadith line on the anchor page */
  quote?: Record<Locale, string>;
  scene: PicScene;
}

export interface PictureBook {
  slug: string;
  pose: string;
  published: string;
  title: Record<Locale, string>;
  hook: Record<Locale, string>;
  anchor: CatatanAnchor;
  takeaway: Record<Locale, string>;
  tags: string[];
  cover: PicScene;
  pages: PicPage[];
  /** "Kartu untuk Ayah & Bunda": three practical tips shown on a closing
   *  card in Book Mode and under the story (screenshot-friendly). */
  card?: ParentCard;
}

export interface ParentCard {
  title: Record<Locale, string>;
  items: Record<Locale, string[]>;
}

const BOOKS: PictureBook[] = [
  /* ───────────────────────── 1. The sunflower seed ───────────────────────── */
  {
    slug: "benih-kecil-baby-mo",
    pose: "baby-mo-wow.png",
    published: "2026-11-03",
    title: { id: "Benih Kecil Baby Mo", en: "Baby Mo's Little Seed" },
    hook: {
      id: "Abi memberi Baby Mo sebutir biji kecil. Bisakah biji sekecil itu jadi bunga matahari yang besar?",
      en: "Abi gives Baby Mo one tiny seed. Can something so small really become a giant sunflower?",
    },
    anchor: { type: "parenting", slug: "bersyukur" },
    takeaway: {
      id: "Menanam bersama anak mengajarkan sabar dan takjub sekaligus: kita merawat, Allah yang menumbuhkan.",
      en: "Planting with children teaches patience and wonder together: we take care, and Allah makes it grow.",
    },
    tags: ["menanam", "sabar", "bunga", "ciptaan allah", "kebun"],
    cover: { bg: "garden", props: [{ k: "bloom", x: 520 }, { k: "butterfly", x: 470, y: 120 }], mo: [{ pose: "wow", x: 330 }], fx: ["sparkle"] },
    pages: [
      {
        text: { id: "Suatu pagi, Abi memberi Baby Mo sebutir biji kecil. \"Ini biji bunga matahari,\" kata Abi.", en: "One morning, Abi gave Baby Mo a tiny seed. \"This is a sunflower seed,\" said Abi." },
        scene: { focus: 305, bg: "garden", props: [{ k: "seed", x: 300, y: 300 }, { k: "tree", x: 150 }], mo: [{ pose: "pose-21", x: 365 }, { who: "ayah", pose: "kneel-present", x: 245 }], fx: ["sparkle"] },
      },
      {
        text: { id: "Bijinya kecil sekali, lebih kecil dari kuku jarinya. \"Masa sih ini bisa jadi bunga?\" pikir Baby Mo.", en: "It was so small — smaller than his fingernail. \"Can this really become a flower?\" Baby Mo wondered." },
        scene: { bg: "garden", props: [{ k: "seed", x: 470, y: 260, s: 1.3 }, { k: "bush", x: 640 }], mo: [{ pose: "pose-33", x: 360 }] },
      },
      {
        text: { id: "Baby Mo membuat lubang kecil di pot, menaruh bijinya, lalu menutupnya dengan tanah. \"Bismillah,\" bisiknya.", en: "Baby Mo made a little hole in a pot, dropped the seed in and covered it with soil. \"Bismillah,\" he whispered." },
        scene: { bg: "garden", props: [{ k: "pot", x: 480 }, { k: "flowers", x: 660 }], mo: [{ pose: "pose-36", x: 360 }] },
      },
      {
        text: { id: "Lalu ia menyiramnya. Cur, cur, cur! \"Tumbuh yang sehat, ya, biji kecil.\"", en: "Then he watered it. Splish, splish, splash! \"Grow up strong, little seed.\"" },
        scene: { bg: "garden", props: [{ k: "pot", x: 470 }, { k: "wateringcan", x: 560, y: 330 }], mo: [{ pose: "yes", x: 330 }] },
      },
      {
        text: { id: "Besok paginya Baby Mo berlari ke kebun. Tapi potnya… masih tanah saja.", en: "The next morning Baby Mo ran out to the garden. But the pot was… still just soil." },
        scene: { bg: "garden", props: [{ k: "pot", x: 520 }, { k: "bird", x: 300, y: 110 }], mo: [{ pose: "run", x: 330, move: "hop" }] },
      },
      {
        text: { id: "\"Kok belum tumbuh?\" Baby Mo cemberut. Abi tersenyum. \"Bijinya sedang bekerja di dalam tanah. Kita harus sabar.\"", en: "\"Why hasn't it grown?\" Baby Mo frowned. Abi smiled. \"The seed is busy working under the soil. We have to be patient.\"" },
        scene: { focus: 330, bg: "garden", props: [{ k: "pot", x: 430 }], mo: [{ pose: "pose-27", x: 340 }, { who: "ayah", pose: "teach-point-kneel", x: 228 }] },
      },
      {
        text: { id: "Setiap pagi Baby Mo menyiram potnya sambil bernyanyi: \"Siram sedikit, tunggu sedikit, Allah yang menumbuhkan, sedikit demi sedikit!\"", en: "Every morning Baby Mo watered the pot and sang: \"Water a little, wait a little, Allah makes it grow, little by little!\"" },
        scene: { bg: "garden", props: [{ k: "pot", x: 470 }, { k: "wateringcan", x: 560, y: 330 }], mo: [{ pose: "yeyy", x: 330 }], fx: ["notes"] },
      },
      {
        text: { id: "Hari ketiga, hujan turun. \"Bijiku dapat minum dari langit!\" seru Baby Mo dari bawah payung.", en: "On the third day, it rained. \"My seed is drinking from the sky!\" Baby Mo cheered under his umbrella." },
        scene: { bg: "garden", time: "rain", props: [{ k: "pot", x: 520 }, { k: "umbrella", x: 340, y: 320 }, { k: "puddle", x: 600 }], mo: [{ pose: "pose-29", x: 340 }], fx: ["rain"] },
      },
      {
        text: { id: "Hari kelima… ada sesuatu yang hijau mengintip dari tanah! Dua daun kecil, seperti dua tangan yang terbuka.", en: "On the fifth day… something green peeped out of the soil! Two tiny leaves, like two little open hands." },
        scene: { bg: "garden", props: [{ k: "sprout", x: 500 }, { k: "ladybug", x: 600 }], mo: [{ pose: "pose-40", x: 350 }], fx: ["sparkle"] },
      },
      {
        text: { id: "\"Abi! Abi! Bijiku bangun!\" Baby Mo melompat-lompat keliling kebun.", en: "\"Abi! Abi! My seed woke up!\" Baby Mo hopped all around the garden." },
        scene: { bg: "garden", props: [{ k: "sprout", x: 520 }, { k: "flowers", x: 660 }], mo: [{ pose: "yeyy", x: 340, move: "hop" }], fx: ["confetti"] },
      },
      {
        text: { id: "Hari demi hari, tunasnya makin tinggi. Daunnya makin banyak. Baby Mo duduk menemaninya setiap sore.", en: "Day by day, the shoot grew taller. More and more leaves came. Baby Mo sat with it every afternoon." },
        scene: { bg: "garden", time: "dusk", props: [{ k: "seedling", x: 500 }, { k: "butterfly", x: 520, y: 170 }], mo: [{ pose: "pose-12", x: 360 }] },
      },
      {
        text: { id: "Baby Mo berdiri di sampingnya. \"Sekarang sudah setinggi lututku… sekarang setinggi perutku!\"", en: "Baby Mo stood beside it. \"Now it's as tall as my knee… now as tall as my tummy!\"" },
        scene: { bg: "garden", props: [{ k: "plant", x: 490 }], mo: [{ pose: "pose-15", x: 360 }] },
      },
      {
        text: { id: "Lalu suatu pagi, Baby Mo membuka pintu dan berteriak, \"MasyaAllah!\"", en: "Then one morning, Baby Mo opened the door and shouted, \"Masha Allah!\"" },
        scene: { bg: "garden", props: [{ k: "bloom", x: 500 }, { k: "bird", x: 300, y: 100 }], mo: [{ pose: "wow", x: 340 }], fx: ["sparkle"] },
      },
      {
        text: { id: "Bunga matahari itu besar dan kuning, lebih tinggi dari Baby Mo. Kupu-kupu datang. Burung kecil bernyanyi.", en: "The sunflower was big and yellow, taller than Baby Mo. Butterflies came. Little birds sang." },
        scene: { bg: "garden", props: [{ k: "bloom", x: 480 }, { k: "butterfly", x: 420, y: 150 }, { k: "butterfly", x: 560, y: 210 }, { k: "flowers", x: 640 }], mo: [{ pose: "pose-41", x: 330 }], fx: ["notes"] },
      },
      {
        text: { id: "Abi berlutut di sampingnya. \"Kita yang menanam dan menyiram. Tapi yang menumbuhkan biji kecil jadi bunga besar adalah Allah.\"", en: "Abi knelt beside him. \"We planted and watered. But the One who turns a tiny seed into a big flower is Allah.\"" },
        quote: { id: "\"Sesungguhnya Allah menumbuhkan butir tumbuh-tumbuhan dan biji buah-buahan.\" (QS. Al-An'am: 95)", en: "\"Indeed, Allah is the One who splits the grain and the seed.\" (Qur'an, Al-An'am 6:95)" },
        scene: { focus: 330, bg: "garden", props: [{ k: "bloom", x: 440, s: 0.8 }], mo: [{ pose: "thank-you", x: 340 }, { who: "ayah", pose: "teach-point-kneel", x: 228 }], fx: ["sparkle"] },
      },
      {
        text: { id: "Malam itu Baby Mo berdoa, \"Terima kasih, ya Allah, untuk bunga matahariku.\" Kamu ingin menanam apa? 🌻", en: "That night Baby Mo prayed, \"Thank you, ya Allah, for my sunflower.\" What would you like to plant? 🌻" },
        scene: { bg: "garden", time: "night", props: [{ k: "bloom", x: 500 }], mo: [{ pose: "thank-you", x: 340 }], fx: ["stars", "fireflies"] },
      },
    ],
  },

  /* ───────────────────────── 2. Rain, a rainbow and a du'a ───────────────────────── */
  {
    slug: "hujan-pelangi-doa-baby-mo",
    pose: "baby-mo-pose-41.png",
    published: "2026-11-03",
    title: { id: "Hujan, Pelangi, dan Doa Baby Mo", en: "Rain, a Rainbow and Baby Mo's Du'a" },
    hook: {
      id: "Hujan deras turun dan Baby Mo tidak bisa main di luar. Tapi Umi mengajarinya sebuah doa — dan langit memberi kejutan.",
      en: "Heavy rain falls and Baby Mo can't play outside. But Umi teaches him a du'a — and the sky has a surprise.",
    },
    anchor: { type: "doa", slug: "ketika-hujan" },
    takeaway: {
      id: "Hujan adalah waktu yang baik untuk berdoa. Ajari anak melihat hujan sebagai rahmat, bukan sekadar penghalang bermain.",
      en: "Rain is a good time to make du'a. Teach children to see rain as a mercy, not just something that stops play.",
    },
    tags: ["hujan", "doa", "pelangi", "katak", "alam"],
    cover: { bg: "garden", props: [{ k: "rainbow", x: 400, y: 230 }, { k: "puddle", x: 560 }, { k: "frog", x: 560, y: 400, s: 0.8 }], mo: [{ pose: "pose-41", x: 360 }], fx: ["sparkle"] },
    pages: [
      {
        text: { id: "Langit tiba-tiba gelap. Awan abu-abu berkumpul di atas rumah Baby Mo.", en: "Suddenly the sky went dark. Grey clouds gathered over Baby Mo's house." },
        scene: { bg: "garden", time: "rain", props: [{ k: "tree", x: 160 }, { k: "flowers", x: 560 }], mo: [{ pose: "pose-40", x: 380 }] },
      },
      {
        text: { id: "Tik. Tik. Tik-tik-tik! Hujan turun. Baby Mo berlari masuk ke rumah.", en: "Tip. Tip. Tip-tip-tip! Down came the rain. Baby Mo ran into the house." },
        scene: { bg: "garden", time: "rain", props: [{ k: "puddle", x: 520 }, { k: "bush", x: 640 }], mo: [{ pose: "run", x: 380, move: "hop" }], fx: ["rain"] },
      },
      {
        text: { id: "Ia menempelkan hidungnya ke jendela. \"Umi, hujannya deras sekali! Aku nggak bisa main di luar.\"", en: "He pressed his nose to the window. \"Umi, it's raining so hard! I can't play outside.\"" },
        scene: { bg: "living", time: "rain", focus: 560, props: [{ k: "teddy", x: 420 }], mo: [{ pose: "pose-37", x: 600 }] },
      },
      {
        text: { id: "Umi duduk di sampingnya. \"Kalau hujan turun, itu waktu yang baik untuk berdoa, Mo.\"", en: "Umi sat down beside him. \"When rain falls, it's a good time to make du'a, Mo.\"" },
        scene: { bg: "living", time: "rain", focus: 540, props: [{ k: "books", x: 680 }], mo: [{ pose: "pose-12", x: 560 }] },
      },
      {
        text: { id: "Umi mengajarinya doa: \"Allahumma shayyiban nafi'an\" — Ya Allah, jadikan hujan ini hujan yang bermanfaat.", en: "Umi taught him the du'a: \"Allahumma shayyiban nafi'an\" — O Allah, make this a beneficial rain." },
        quote: { id: "Rasulullah ﷺ jika melihat hujan berdoa: \"Allahumma shayyiban nafi'an.\" (HR. Bukhari 1032)", en: "When the Prophet ﷺ saw rain, he said: \"Allahumma shayyiban nafi'an.\" (Bukhari 1032)" },
        scene: { bg: "living", time: "rain", focus: 540, mo: [{ pose: "thank-you", x: 560 }], fx: ["sparkle"] },
      },
      {
        text: { id: "Baby Mo mengulanginya pelan-pelan: \"Allahumma… shayyiban… nafi'an.\" Lalu sekali lagi, lebih lancar!", en: "Baby Mo repeated it slowly: \"Allahumma… shayyiban… nafi'an.\" Then once more, a little smoother!" },
        scene: { bg: "living", time: "rain", focus: 540, mo: [{ pose: "pose-05", x: 560 }], fx: ["notes"] },
      },
      {
        text: { id: "\"Umi, bermanfaat itu apa?\" tanya Baby Mo. \"Coba lihat ke luar,\" kata Umi. \"Siapa yang senang dengan hujan?\"", en: "\"Umi, what does beneficial mean?\" asked Baby Mo. \"Look outside,\" said Umi. \"Who is happy about the rain?\"" },
        scene: { bg: "living", time: "rain", focus: 560, mo: [{ pose: "pose-08", x: 520 }] },
      },
      {
        text: { id: "Pohon-pohon minum. Bunga-bunga mandi. Daun-daun berkilau seperti baru dicuci.", en: "The trees were drinking. The flowers were having a bath. The leaves shone as if they'd just been washed." },
        scene: { bg: "garden", time: "rain", focus: 400, props: [{ k: "tree", x: 230 }, { k: "flowers", x: 450 }, { k: "flowers", x: 560 }, { k: "bush", x: 640 }], fx: ["rain"] },
      },
      {
        text: { id: "Katak bernyanyi, \"Kroak! Kroak!\" Siput keluar dari rumahnya, pelan-pelan sekali.", en: "The frogs sang, \"Ribbit! Ribbit!\" A snail came out of its shell, very, very slowly." },
        scene: { bg: "garden", time: "rain", focus: 420, props: [{ k: "puddle", x: 420 }, { k: "frog", x: 360 }, { k: "snail", x: 520 }, { k: "flowers", x: 620 }], fx: ["rain"] },
      },
      {
        text: { id: "Lalu hujannya berhenti. Matahari mengintip. Baby Mo memakai sepatu bot kuning dan berlari keluar!", en: "Then the rain stopped. The sun peeped out. Baby Mo pulled on his yellow boots and ran outside!" },
        scene: { bg: "garden", props: [{ k: "boots", x: 480 }, { k: "puddle", x: 560 }], mo: [{ pose: "run", x: 350, move: "hop" }], fx: ["sparkle"] },
      },
      {
        text: { id: "Ciprat! Ciprat! Baby Mo melompat ke genangan air — hati-hati, pelan-pelan, supaya tidak terpeleset.", en: "Splash! Splash! Baby Mo jumped in the puddles — carefully, gently, so he wouldn't slip." },
        scene: { bg: "garden", props: [{ k: "puddle", x: 400, s: 1.3 }, { k: "frog", x: 560 }], mo: [{ pose: "yeyy", x: 400, move: "hop" }], fx: ["bubbles"] },
      },
      {
        text: { id: "Lalu Baby Mo melihat ke langit… dan terdiam. \"Umi… lihat!\"", en: "Then Baby Mo looked up at the sky… and went quiet. \"Umi… look!\"" },
        scene: { bg: "garden", props: [{ k: "rainbow", x: 420, y: 260 }, { k: "puddle", x: 560 }], mo: [{ pose: "pose-08", x: 330 }] },
      },
      {
        text: { id: "Sebuah pelangi melengkung di langit: merah, jingga, kuning, hijau, biru, ungu.", en: "A rainbow curved across the sky: red, orange, yellow, green, blue, purple." },
        scene: { bg: "garden", props: [{ k: "rainbow", x: 400, y: 260 }, { k: "flowers", x: 600 }, { k: "butterfly", x: 520, y: 160 }], mo: [{ pose: "pose-41", x: 380 }], fx: ["sparkle"] },
      },
      {
        text: { id: "\"Allah memberi kita hujan untuk pohon, bunga, katak… lalu memberi kita pelangi!\" kata Baby Mo. \"Hujannya bermanfaat!\"", en: "\"Allah gave us rain for the trees, the flowers, the frogs… and then gave us a rainbow!\" said Baby Mo. \"It was beneficial rain!\"" },
        scene: { bg: "garden", props: [{ k: "rainbow", x: 400, y: 260 }, { k: "frog", x: 520 }, { k: "flowers", x: 620 }], mo: [{ pose: "thank-you", x: 360 }], fx: ["hearts"] },
      },
      {
        text: { id: "Baby Mo dan katak kecil memandangi pelangi bersama sampai warnanya pelan-pelan menghilang.", en: "Baby Mo and the little frog watched the rainbow together until its colours slowly faded." },
        scene: { bg: "garden", time: "dusk", props: [{ k: "rainbow", x: 420, y: 260, s: 0.9 }, { k: "frog", x: 500 }], mo: [{ pose: "pose-12", x: 360 }] },
      },
      {
        text: { id: "Sejak hari itu, setiap hujan turun, Baby Mo yang pertama berdoa: \"Allahumma shayyiban nafi'an!\" Siapa yang senang saat hujan turun? 🌈", en: "From that day on, whenever it rained, Baby Mo was the first to pray: \"Allahumma shayyiban nafi'an!\" Who is happy when it rains? 🌈" },
        scene: { bg: "living", time: "rain", focus: 540, props: [{ k: "teddy", x: 420 }], mo: [{ pose: "thank-you", x: 560 }], fx: ["hearts"] },
      },
    ],
  },

  /* ───────────────────────── 3. Washing Abi's car ───────────────────────── */
  {
    slug: "baby-mo-mencuci-mobil-abi",
    pose: "baby-mo-yeyy.png",
    published: "2026-11-03",
    title: { id: "Baby Mo Mencuci Mobil Abi", en: "Baby Mo Washes Abi's Car" },
    hook: {
      id: "Mobil Abi penuh lumpur, dan Baby Mo ingin membantu. Tapi gelembung-gelembung sabun begitu menggoda…",
      en: "Abi's car is covered in mud, and Baby Mo wants to help. But those soap bubbles are so tempting…",
    },
    anchor: { type: "parenting", slug: "adab-sehari-hari" },
    takeaway: {
      id: "Libatkan anak dalam pekerjaan rumah sungguhan, lalu dampingi ia menyelesaikannya. Rasa bangga datang dari tugas yang selesai.",
      en: "Let children join in real chores, then help them see the job through. Pride comes from a finished task.",
    },
    tags: ["menolong", "abi", "mobil", "tanggung jawab", "gelembung"],
    cover: { bg: "street", props: [{ k: "carshiny", x: 550, s: 1.45 }, { k: "minirainbow", x: 300, y: 250 }], mo: [{ pose: "yeyy", x: 300 }], fx: ["bubbles"] },
    pages: [
      {
        text: { id: "Mobil Abi baru pulang dari perjalanan jauh. Badannya penuh lumpur!", en: "Abi's car had just come back from a long trip. It was covered in mud!" },
        scene: { focus: 350, bg: "street", props: [{ k: "carmud", x: 540, s: 1.45 }], mo: [{ pose: "pose-40", x: 290 }, { who: "ayah", pose: "wave-hello", x: 410 }] },
      },
      {
        text: { id: "\"Ayo kita cuci,\" kata Abi. Baby Mo melompat. \"Aku bantu! Aku bantu!\"", en: "\"Let's wash it,\" said Abi. Baby Mo jumped up. \"I'll help! I'll help!\"" },
        scene: { focus: 258, bg: "street", props: [{ k: "carmud", x: 530, s: 1.45 }, { k: "bucket", x: 360 }], mo: [{ pose: "yeyy", x: 285, move: "hop" }, { who: "ayah", pose: "idea-point-stand", x: 168 }] },
      },
      {
        text: { id: "Abi mengisi ember dengan air dan sabun. Busanya naik tinggi seperti awan.", en: "Abi filled a bucket with water and soap. The foam rose up high like a cloud." },
        scene: { focus: 385, bg: "street", props: [{ k: "bucket", x: 385, s: 1.2 }, { k: "sponge", x: 560 }], mo: [{ pose: "wow", x: 300 }, { who: "ayah", pose: "kneel-present", x: 475, flip: true }], fx: ["bubbles"] },
      },
      {
        text: { id: "Baby Mo mendapat tugas penting: menggosok roda dengan spons kuning.", en: "Baby Mo got an important job: scrubbing the wheels with the yellow sponge." },
        scene: { bg: "street", props: [{ k: "carmud", x: 590, s: 1.45 }, { k: "sponge", x: 420, y: 395 }], mo: [{ pose: "pose-36", x: 340 }] },
      },
      {
        text: { id: "Gosok, gosok, gosok! Ia bernyanyi: \"Gosok-gosok sampai kinclong, tolong Abi sampai rampung!\"", en: "Scrub, scrub, scrub! He sang: \"Scrub and scrub until it gleams, help Abi to the end, it seems!\"" },
        scene: { bg: "street", props: [{ k: "carmud", x: 590, s: 1.45 }, { k: "sponge", x: 420, y: 395 }], mo: [{ pose: "yes", x: 340 }], fx: ["notes", "bubbles"] },
      },
      {
        text: { id: "Tapi lalu… sebuah gelembung besar terbang tepat di depan hidungnya.", en: "But then… a big bubble floated right in front of his nose." },
        scene: { bg: "street", props: [{ k: "sponge", x: 460 }], mo: [{ pose: "pose-40", x: 360 }], fx: ["bubbles"] },
      },
      {
        text: { id: "Baby Mo mengejarnya. Lalu gelembung lain. Lalu gelembung lain lagi! Wuuush!", en: "Baby Mo chased it. Then another bubble. Then another one! Whoosh!" },
        scene: { bg: "street", mo: [{ pose: "run", x: 380, move: "hop" }], fx: ["bubbles", "sparkle"] },
      },
      {
        text: { id: "Ia sampai lupa pada tugasnya. Spons kuning tergeletak sendirian di tanah.", en: "He forgot all about his job. The yellow sponge lay all alone on the ground." },
        scene: { bg: "street", props: [{ k: "sponge", x: 480 }, { k: "carmud", x: 550, s: 1.45 }], mo: [{ pose: "pose-13", x: 300 }], fx: ["bubbles"] },
      },
      {
        text: { id: "\"Mo,\" panggil Abi, \"roda yang satu lagi masih kotor!\"", en: "\"Mo,\" called Abi, \"the other wheel is still dirty!\"" },
        scene: { focus: 350, bg: "street", props: [{ k: "carmud", x: 540, s: 1.45 }], mo: [{ pose: "pose-33", x: 290 }, { who: "ayah", pose: "idea-point-stand", x: 410 }] },
      },
      {
        text: { id: "Baby Mo menatap spons, lalu menatap Abi. Ia ingat: \"Kalau menolong, harus sampai selesai.\"", en: "Baby Mo looked at the sponge, then at Abi. He remembered: \"When you help, you help until it's done.\"" },
        scene: { bg: "street", props: [{ k: "sponge", x: 500 }], mo: [{ pose: "idea", x: 340 }], fx: ["sparkle"] },
      },
      {
        text: { id: "Ia mengambil spons lagi dan menggosok sampai rodanya mengilap. Gosok-gosok sampai kinclong!", en: "He picked up the sponge again and scrubbed until the wheel shone. Scrub and scrub until it gleams!" },
        scene: { bg: "street", props: [{ k: "car", x: 590, s: 1.45 }, { k: "sponge", x: 420, y: 395 }], mo: [{ pose: "pose-36", x: 340 }], fx: ["bubbles"] },
      },
      {
        text: { id: "Lalu Abi menyalakan selang. Ssssh! Air menyembur dan membilas semua busa.", en: "Then Abi turned on the hose. Shhhh! The water sprayed and rinsed away all the foam." },
        scene: { focus: 320, bg: "street", props: [{ k: "hose", x: 240 }, { k: "car", x: 630, s: 1.45 }], mo: [{ pose: "wow", x: 380 }, { who: "ayah", pose: "kneel-present", x: 260 }] },
      },
      {
        text: { id: "Dan di dalam semburan air, muncul pelangi kecil! \"Abi, ada pelangi buatan kita!\"", en: "And inside the spray, a little rainbow appeared! \"Abi, we made a rainbow!\"" },
        scene: { bg: "street", props: [{ k: "hose", x: 220 }, { k: "minirainbow", x: 400, y: 260 }], mo: [{ pose: "yeyy", x: 420, move: "hop" }], fx: ["sparkle"] },
      },
      {
        text: { id: "Mobil Abi sekarang bersih dan berkilau. Baby Mo bisa melihat wajahnya sendiri di pintunya!", en: "Abi's car was clean and sparkling now. Baby Mo could see his own face in the door!" },
        scene: { bg: "street", props: [{ k: "carshiny", x: 550, s: 1.45 }], mo: [{ pose: "pose-29", x: 300 }], fx: ["sparkle"] },
      },
      {
        text: { id: "Abi memeluknya. \"Terima kasih sudah menolong sampai selesai, Mo. Allah suka orang yang tolong-menolong dalam kebaikan.\"", en: "Abi hugged him. \"Thank you for helping right to the end, Mo. Allah loves people who help each other do good.\"" },
        quote: { id: "\"Dan tolong-menolonglah kamu dalam (mengerjakan) kebajikan dan takwa.\" (QS. Al-Ma'idah: 2)", en: "\"And help one another in goodness and righteousness.\" (Qur'an, Al-Ma'idah 5:2)" },
        scene: { bg: "street", props: [{ k: "carshiny", x: 580, s: 1.45 }], mo: [{ who: "ayah", pose: "hug-mo", x: 330 }], fx: ["hearts"] },
      },
      {
        text: { id: "Sore itu mereka naik mobil yang bersih ke rumah Nenek. Kamu bisa membantu apa di rumah hari ini? 🚗", en: "That afternoon they drove the clean car to Grandma's house. What can you help with at home today? 🚗" },
        scene: { bg: "street", time: "dusk", props: [{ k: "carshiny", x: 570, s: 1.45 }, { k: "balloon", x: 380, y: 260 }], mo: [{ pose: "yeyy", x: 320 }], fx: ["hearts"] },
      },
    ],
  },
  ...FAMILY_BOOKS,
];

/* ───────── helpers ───────── */

export function getPictureBook(slug: string): PictureBook | undefined {
  return BOOKS.find((b) => b.slug === slug);
}

/** Cover + pages for Book Mode: a full picture book, or an older story
 *  retold as one (see picture-books-adapted.ts). */
export function getBookPages(slug: string): { cover: PicScene; pages: PicPage[]; card?: ParentCard } | null {
  const b = getPictureBook(slug);
  if (b) return { cover: b.cover, pages: b.pages, card: b.card };
  return ADAPTED[slug] ?? null;
}

/** Scenes for the story page / shelf (paragraph i = page i). */
export function pictureBookIllus(b: PictureBook): ArtScene[] {
  return [
    { ...b.cover, at: 0, alt: b.title },
    ...b.pages.slice(1).map((p, i) => ({ ...p.scene, at: i + 1, alt: { id: p.text.id.slice(0, 60), en: p.text.en.slice(0, 60) } })),
  ];
}

/** The picture books as Catatan entries, so they appear on the shelf, in
 *  search, the sitemap and on their own story page. */
export const pictureBookStories: Catatan[] = BOOKS.map((b) => ({
  slug: b.slug,
  kind: "story",
  child: "mo",
  pose: b.pose,
  published: b.published,
  title: b.title,
  hook: b.hook,
  body: {
    id: b.pages.map((p) => p.text.id + (p.quote ? `\n\n> *${p.quote.id}*` : "")).join("\n\n"),
    en: b.pages.map((p) => p.text.en + (p.quote ? `\n\n> *${p.quote.en}*` : "")).join("\n\n"),
  },
  anchor: b.anchor,
  takeaway: b.takeaway,
  tags: b.tags,
  readingTimeMin: 4,
}));
