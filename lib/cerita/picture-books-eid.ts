import type { PicScene, PictureBook } from "./picture-books";
import { stage } from "./picture-books-playroom";

/**
 * Islamic big days with the twins — Eid al-Fitr, Eid al-Adha and Hajj, and
 * the Hijri calendar (1 Muharram, Asyura, Isra Mi'raj). Each book is a fun
 * family day that teaches the real sunnah of the occasion. Prophets, angels
 * and Allah are never drawn; their stories are told in words only.
 */
const RAW: PictureBook[] = [
  /* ───────────────────────── Eid al-Fitr 1: Eid morning ───────────────────────── */
  {
    slug: "pagi-idul-fitri-si-kembar",
    pose: "baby-mo-pose-26.png",
    published: "2026-12-31",
    title: { id: "Pagi Idul Fitri Si Kembar", en: "The Twins' Eid Morning" },
    hook: {
      id: "Takbir membangunkan si kembar. Hari ini Idul Fitri! Ada kurma yang harus dihitung ganjil, takbir tujuh kali yang bikin Mo lupa hitungan, dan… sandal yang tertukar!",
      en: "The takbir wakes the twins. It's Eid! There are dates to count in odd numbers, seven takbirs that make Mo lose count, and… a mixed-up pair of sandals!",
    },
    anchor: { type: "parenting", slug: "adab-sehari-hari" },
    takeaway: {
      id: "Pagi Idul Fitri punya sunnah-sunnah yang indah: mandi, berpakaian terbaik, makan kurma ganjil, bertakbir, sholat Id, dan pulang lewat jalan yang berbeda.",
      en: "Eid morning has beautiful sunnahs: a bath, best clothes, an odd number of dates, takbir on the way, the Eid prayer, and coming home by a different road.",
    },
    tags: ["idul fitri", "lebaran", "sholat id", "sunnah", "takbir", "si kembar"],
    card: {
      title: { id: "Sunnah Pagi Idul Fitri untuk Anak", en: "Eid Morning Sunnahs for Children" },
      items: {
        id: [
          "Jadikan permainan: mandi, baju terbaik, makan kurma ganjil, bertakbir di jalan — centang satu per satu.",
          "Ajak anak ikut ke lapangan, anak perempuan juga. Rasulullah ﷺ mengajak seluruh keluarga ke sholat Id.",
          "Pulang lewat jalan lain dan sapa sebanyak mungkin orang: \"Taqabbalallahu minna wa minkum!\"",
        ],
        en: [
          "Make it a game: bath, best clothes, an odd number of dates, takbir on the way — tick them off one by one.",
          "Bring the children to the prayer field, girls too. The Prophet ﷺ brought the whole family to the Eid prayer.",
          "Come home a different way and greet as many people as you can: \"Taqabbalallahu minna wa minkum!\"",
        ],
      },
    },
    cover: {
      focus: 390, bg: "park",
      props: [{ k: "eidmats", x: 390, s: 0.8 }],
      mo: [{ pose: "pose-26", x: 330 }, { who: "ais", pose: "arms-wide-joy", x: 450 }],
      fx: ["confetti"],
    },
    pages: [
      {
        text: { id: "\"Allahu Akbar, Allahu Akbar…\" Takbir dari masjid membangunkan Mo pagi-pagi sekali. Mo melompat dari kasur. \"Hari ini Idul Fitri!\"", en: "\"Allahu Akbar, Allahu Akbar…\" The takbir from the mosque woke Mo very early. He leapt out of bed. \"It's Eid today!\"" },
        scene: { focus: 390, bg: "bedroom", mo: [{ pose: "pose-02", x: 390 }], fx: ["notes"] },
      },
      {
        text: { id: "Umi sudah menyiapkan air hangat. \"Mandi dulu, ya. Hari raya kita mulai dengan badan bersih dan wangi.\"", en: "Umi had warm water ready. \"Bath first. We start Eid clean and fresh.\"" },
        scene: { focus: 390, bg: "bathroom", mo: [{ who: "umi", pose: "welcome-palms", x: 330 }, { pose: "pose-25", x: 450 }], fx: ["bubbles"] },
      },
      {
        text: { id: "Mo memakai baju koko terbaiknya. Ais memakai kerudung baru yang berkilau. Mereka saling pandang. \"Masya Allah, Ais cantik!\" \"Mo juga ganteng!\"", en: "Mo put on his best clothes. Ais wore a sparkly new headscarf. They looked at each other. \"Masya Allah, Ais, you look lovely!\" \"You look smart too, Mo!\"" },
        scene: { focus: 390, bg: "living", mo: [{ pose: "pose-04", x: 330 }, { who: "ais", pose: "dreamy-delight", x: 455 }], fx: ["sparkle"] },
      },
      {
        text: { id: "Sebelum berangkat, Abi membagikan kurma. \"Rasulullah ﷺ makan kurma dulu sebelum sholat Idul Fitri. Jumlahnya ganjil.\"", en: "Before they left, Abi handed out dates. \"The Prophet ﷺ ate dates before the Eid al-Fitr prayer. An odd number of them.\"" },
        quote: {
          id: "\"Rasulullah ﷺ tidak berangkat pada hari Idul Fitri sebelum makan beberapa butir kurma… dan beliau memakannya dalam jumlah ganjil.\" (HR. Bukhari 953)",
          en: "\"The Prophet ﷺ would not go out on the day of Eid al-Fitr until he had eaten some dates… and he ate an odd number.\" (Bukhari 953)",
        },
        scene: { focus: 390, bg: "living", mo: [{ who: "ayah", pose: "kneel-present", x: 330 }, { pose: "pose-26", x: 450 }] },
      },
      {
        text: { id: "Mo menghitung kurmanya. \"Satu… dua… tiga! Tiga itu ganjil!\" Lalu ia ingin menambah. \"Empat? Eh, empat itu genap. Lima, deh!\" Hihi.", en: "Mo counted his dates. \"One… two… three! Three is odd!\" Then he wanted more. \"Four? Oops, four is even. Five, then!\" Hee hee." },
        scene: { focus: 390, bg: "living", props: [{ k: "dates", x: 440, s: 0.7 }], mo: [{ pose: "pose-07", x: 335 }] },
      },
      {
        text: { id: "Sepanjang jalan ke lapangan, semua bertakbir: \"Allahu Akbar, Allahu Akbar, laa ilaaha illallah…\" Suaranya bersahut-sahutan dari setiap rumah.", en: "All the way to the prayer field, everyone called out the takbir: \"Allahu Akbar, Allahu Akbar, la ilaha illallah…\" Voices answered from every house." },
        scene: { focus: 380, bg: "street", mo: [{ who: "adam", pose: "hold-hand-down", x: 335 }, { pose: "pose-42", x: 425 }], fx: ["notes"] },
      },
      {
        text: { id: "Lapangan sudah penuh. Sajadah berjajar warna-warni seperti pelangi. Mo dan Ais melepas sandal dan menaruhnya di pinggir.", en: "The field was already full. Prayer mats lay in rows, colourful as a rainbow. Mo and Ais took off their sandals and left them at the edge." },
        scene: { focus: 390, bg: "park", props: [{ k: "eidmats", x: 390, s: 0.8 }], mo: [{ pose: "pose-31", x: 330 }, { who: "ais", pose: "wave-hello", x: 450 }] },
      },
      {
        text: { id: "\"Abi, kenapa tidak ada adzan?\" tanya Ais. \"Sholat Id memang tanpa adzan dan iqamah,\" jawab Abi. \"Langsung dimulai dengan takbir.\"", en: "\"Abi, why is there no call to prayer?\" asked Ais. \"The Eid prayer has no adhan or iqamah,\" said Abi. \"It starts straight away with takbir.\"" },
        quote: {
          id: "Jabir bin Abdullah berkata: \"Aku ikut sholat Id bersama Rasulullah ﷺ. Beliau memulai dengan sholat sebelum khutbah, tanpa adzan dan tanpa iqamah.\" (HR. Muslim 885)",
          en: "Jabir ibn Abdullah said: \"I attended Eid with the Prophet ﷺ. He began with the prayer before the sermon, with no adhan and no iqamah.\" (Muslim 885)",
        },
        scene: { focus: 390, bg: "park", mo: [{ who: "ayah", pose: "teach-point-kneel", x: 330 }, { who: "ais", pose: "think-question", x: 450 }] },
      },
      {
        text: { id: "Sholat dimulai. Di rakaat pertama, takbirnya banyak sekali — tujuh kali! Mo ikut mengangkat tangan… lalu lupa sudah berapa. Hihi.", en: "The prayer began. In the first rakaat there were lots of takbirs — seven! Mo raised his hands each time… then lost count. Hee hee." },
        scene: { focus: 380, bg: "park", props: [{ k: "eidmats", x: 380, s: 0.8 }], mo: [{ who: "adam", pose: "sholat-takbir", x: 335 }, { pose: "pose-28", x: 445 }] },
      },
      {
        text: { id: "Sesudah sholat, semua mendengarkan khutbah. Mo duduk manis, walaupun kakinya gatal ingin berlari. Ais duduk tenang di sampingnya.", en: "After the prayer, everyone listened to the sermon. Mo sat nicely, even though his feet itched to run. Ais sat calmly beside him." },
        scene: { focus: 390, bg: "park", props: [{ k: "eidmats", x: 392, s: 0.8 }], mo: [{ pose: "pose-06", x: 330 }, { who: "ais", pose: "calm-sit", x: 455 }] },
      },
      {
        text: { id: "Lalu semua bersalaman dan saling mendoakan. \"Taqabbalallahu minna wa minkum!\" Senyum di mana-mana.", en: "Then everyone shook hands and prayed for each other. \"Taqabbalallahu minna wa minkum — may Allah accept from us and you!\" Smiles everywhere." },
        scene: { focus: 380, bg: "park", mo: [{ who: "adam", pose: "salaman", x: 335 }, { pose: "pose-01", x: 445 }], fx: ["hearts"] },
      },
      {
        text: { id: "Waktu pulang, Mo mencari sandalnya… Lho? Yang satu hijau, yang satu kuning! \"Ini sandal siapa?\"", en: "When it was time to go, Mo looked for his sandals… Huh? One green, one yellow! \"Whose sandal is this?\"" },
        scene: { focus: 390, bg: "park", props: [{ k: "sandals", x: 440, s: 0.75 }], mo: [{ pose: "pose-23", x: 335 }] },
      },
      {
        text: { id: "Seorang anak berlari mendekat sambil tertawa. \"Itu sandalku! Kita tertukar!\" Mereka bertukar sandal dan tertawa bersama.", en: "A boy ran over, laughing. \"That's my sandal! We got them mixed up!\" They swapped sandals and laughed together." },
        scene: { focus: 390, bg: "park", mo: [{ pose: "pose-03", x: 390 }], fx: ["hearts"] },
      },
      {
        text: { id: "Abi mengajak pulang lewat jalan yang berbeda. \"Rasulullah ﷺ pulang dari sholat Id lewat jalan lain. Jadi kita bisa menyapa lebih banyak orang.\"", en: "Abi took them home a different way. \"The Prophet ﷺ came back from the Eid prayer by another road. That way we can greet more people.\"" },
        quote: {
          id: "\"Apabila hari raya, Nabi ﷺ mengambil jalan yang berbeda (antara berangkat dan pulang).\" (HR. Bukhari 986)",
          en: "\"On the day of Eid, the Prophet ﷺ would take a different route (going and returning).\" (Bukhari 986)",
        },
        scene: { focus: 390, bg: "street", mo: [{ who: "ayah", pose: "wave-hello", x: 330 }, { pose: "pose-32", x: 450 }] },
      },
      {
        text: { id: "Di jalan baru itu mereka bertemu tetangga, teman sekolah, bahkan Pak Rahmat! \"Selamat Idul Fitri!\" Mo sampai pegal melambai.", en: "On the new road they met neighbours, school friends, even Pak Rahmat! \"Happy Eid!\" Mo waved until his arm ached." },
        scene: { focus: 390, bg: "street", mo: [{ pose: "pose-01", x: 330 }, { who: "ais", pose: "wave-big", x: 455 }], fx: ["confetti"] },
      },
      {
        text: { id: "Sunnah hari raya apa yang ingin kamu lakukan nanti? 🌙", en: "Which Eid sunnah would you like to do next Eid? 🌙" },
        scene: { focus: 390, bg: "living", props: [{ k: "ketupat", x: 392 }], mo: [{ pose: "thank-you", x: 330 }, { who: "ais", pose: "heart-hands", x: 455 }], fx: ["sparkle"] },
      },
    ],
  },

  /* ───────────────────────── Eid al-Fitr 2: sharing with a new neighbour ───────────────────────── */
  {
    slug: "ketupat-untuk-tetangga-baru",
    pose: "baby-mo-pose-22.png",
    published: "2027-01-01",
    title: { id: "Ketupat untuk Tetangga Baru", en: "Ketupat for the New Neighbours" },
    hook: {
      id: "Umi memasak opor satu panci besar — sebagian untuk tetangga. Ada tetangga baru di ujung jalan: Tante Maria dan Kevin. Bolehkah mereka diberi makanan Lebaran?",
      en: "Umi cooks a huge pot of opor — some of it for the neighbours. There are new neighbours at the end of the road: Tante Maria and Kevin. Can they share the Eid food too?",
    },
    anchor: { type: "hadith", slug: "tetangga-keluarga-luas" },
    takeaway: {
      id: "Memuliakan tetangga adalah bagian dari iman — siapa pun tetangga kita. Kebaikan yang dibagi akan kembali dalam bentuk persahabatan.",
      en: "Honouring your neighbours is part of faith — whoever they are. Kindness shared comes back as friendship.",
    },
    tags: ["idul fitri", "lebaran", "tetangga", "berbagi", "toleransi", "si kembar"],
    card: {
      title: { id: "Mengajarkan Anak Memuliakan Tetangga", en: "Teaching Children to Honour Neighbours" },
      items: {
        id: [
          "Libatkan anak menyiapkan hantaran: menata rantang, menulis kartu kecil, mengantarnya bersama orang tua.",
          "Jelaskan bahwa memuliakan tetangga berlaku untuk semua tetangga, termasuk yang berbeda agama.",
          "Ajak anak menyapa dan mengajak main anak tetangga baru — persahabatan dimulai dari satu \"halo\".",
        ],
        en: [
          "Let your child help prepare a food gift: packing the containers, writing a little card, delivering it with you.",
          "Explain that honouring neighbours applies to every neighbour, including those of other faiths.",
          "Encourage your child to greet and invite a new neighbour's child to play — friendship starts with one \"hello\".",
        ],
      },
    },
    cover: {
      focus: 390, bg: "street",
      mo: [{ who: "adam", pose: "carry-bowl", x: 335 }, { pose: "pose-22", x: 445 }],
      fx: ["hearts"],
    },
    pages: [
      {
        text: { id: "Lebaran hari kedua. Umi memasak opor ayam satu panci besar. Wanginya sampai ke halaman!", en: "The second day of Eid. Umi cooked a huge pot of chicken opor. You could smell it all the way to the garden!" },
        scene: { focus: 390, bg: "kitchen", props: [{ k: "opor", x: 445, s: 0.7 }], mo: [{ who: "umi", pose: "cook-stove", x: 330 }] },
      },
      {
        text: { id: "\"Umi, kenapa masaknya banyak sekali?\" tanya Mo. \"Karena sebagian untuk tetangga,\" jawab Umi sambil mengaduk.", en: "\"Umi, why are you cooking so much?\" asked Mo. \"Because some of it is for the neighbours,\" said Umi, stirring." },
        scene: { focus: 390, bg: "kitchen", mo: [{ who: "umi", pose: "stir-pot", x: 330 }, { pose: "pose-23", x: 450 }] },
      },
      {
        text: { id: "\"Rasulullah ﷺ berpesan: kalau memasak masakan berkuah, perbanyak kuahnya, lalu berikan sebagian untuk tetangga.\"", en: "\"The Prophet ﷺ advised: when you cook a stew, add extra broth and give some to your neighbours.\"" },
        quote: {
          id: "\"Wahai Abu Dzar, jika engkau memasak masakan berkuah, perbanyaklah kuahnya dan perhatikanlah tetanggamu.\" (HR. Muslim 2625)",
          en: "\"O Abu Dharr, when you cook a stew, add more water to it and look after your neighbours.\" (Muslim 2625)",
        },
        scene: { focus: 390, bg: "kitchen", mo: [{ who: "umi", pose: "explain-hand", x: 330 }, { pose: "pose-31", x: 450 }] },
      },
      {
        text: { id: "Ada tetangga baru di ujung jalan: Tante Maria dan anaknya, Kevin. Mereka baru pindah minggu lalu.", en: "There were new neighbours at the end of the road: Tante Maria and her son Kevin. They had moved in just last week." },
        scene: { focus: 390, bg: "street", mo: [{ pose: "pose-15", x: 330 }, { who: "ais", pose: "peek-wall", x: 455 }] },
      },
      {
        text: { id: "\"Umi, Tante Maria kan bukan Muslim,\" kata Ais. \"Boleh kita beri makanan Lebaran?\"", en: "\"Umi, Tante Maria isn't Muslim,\" said Ais. \"Can we still give her Eid food?\"" },
        scene: { focus: 390, bg: "kitchen", mo: [{ who: "umi", pose: "kneel-smile", x: 330 }, { who: "ais", pose: "think-question", x: 450 }] },
      },
      {
        text: { id: "\"Tentu boleh,\" kata Umi. \"Rasulullah ﷺ mengajarkan kita memuliakan tetangga — siapa pun tetangga kita.\"", en: "\"Of course,\" said Umi. \"The Prophet ﷺ taught us to honour our neighbours — whoever they are.\"" },
        quote: {
          id: "\"Barangsiapa beriman kepada Allah dan hari akhir, hendaklah ia memuliakan tetangganya.\" (HR. Bukhari 6019, Muslim 47)",
          en: "\"Whoever believes in Allah and the Last Day, let them honour their neighbour.\" (Bukhari 6019, Muslim 47)",
        },
        scene: { focus: 390, bg: "kitchen", mo: [{ who: "umi", pose: "open-arms-present", x: 330 }, { who: "ais", pose: "heart-hands-smile", x: 450 }], fx: ["hearts"] },
      },
      {
        text: { id: "Ais menata rantang: ketupat, opor, dan sambal goreng. Lalu ia menambahkan sebungkus nastar. \"Supaya Kevin juga senang!\"", en: "Ais packed the food carrier: ketupat, opor and spicy potatoes. Then she added a little bag of nastar. \"So Kevin's happy too!\"" },
        scene: { focus: 390, bg: "kitchen", props: [{ k: "nastar", x: 440, s: 0.75 }], mo: [{ who: "ais", pose: "chef-bowl", x: 335 }] },
      },
      {
        text: { id: "Kak Adam membawa rantang dengan hati-hati. Mo berjalan di sampingnya. \"Pelan-pelan, Kak! Jangan sampai tumpah!\"", en: "Kak Adam carried the food carefully. Mo walked beside him. \"Slowly, Kak! Don't spill it!\"" },
        scene: { focus: 390, bg: "street", mo: [{ who: "adam", pose: "carry-bowl", x: 335 }, { pose: "pose-33", x: 445 }] },
      },
      {
        text: { id: "Tok, tok. \"Selamat pagi, Tante Maria! Ini ketupat dan opor dari Umi,\" kata Mo. \"Selamat Lebaran!\"", en: "Knock, knock. \"Good morning, Tante Maria! Here's ketupat and opor from Umi,\" said Mo. \"Happy Eid!\"" },
        scene: { focus: 390, bg: "street", mo: [{ who: "adam", pose: "offer", x: 335 }, { pose: "pose-22", x: 445 }] },
      },
      {
        text: { id: "Tante Maria tersenyum lebar. \"Wah, terima kasih banyak! Selamat Idul Fitri, ya. Kevin, lihat, ada ketupat!\" Mo tersipu senang.", en: "Tante Maria beamed. \"Oh, thank you so much! Happy Eid to you. Kevin, look, ketupat!\" Mo blushed with happiness." },
        scene: { focus: 390, bg: "street", mo: [{ pose: "pose-35", x: 390 }], fx: ["hearts"] },
      },
      {
        text: { id: "Kevin mengintip dari balik pintu, malu-malu. Ais melambai lebar. \"Halo, Kevin! Mau main bersama kami?\"", en: "Kevin peeped shyly from behind the door. Ais waved a big wave. \"Hi, Kevin! Do you want to play with us?\"" },
        scene: { focus: 390, bg: "street", mo: [{ who: "ais", pose: "wave-big", x: 390 }] },
      },
      {
        text: { id: "Sebentar saja mereka sudah bermain bola di halaman. Tendang, oper, gol! Kevin tertawa paling keras.", en: "In no time they were playing ball in the garden. Kick, pass, goal! Kevin laughed loudest of all." },
        scene: { focus: 390, bg: "garden", mo: [{ pose: "run", x: 330, move: "hop" }, { who: "ais", pose: "kick-ball", x: 455 }] },
      },
      {
        text: { id: "Sorenya, Tante Maria datang mengembalikan rantang. Isinya… kue bolu buatannya sendiri! \"Untuk si kembar,\" katanya.", en: "That afternoon, Tante Maria brought the food carrier back. Inside was… a sponge cake she'd baked herself! \"For the twins,\" she said." },
        scene: { focus: 390, bg: "living", mo: [{ pose: "pose-31", x: 330 }, { who: "ais", pose: "gift-box", x: 450 }] },
      },
      {
        text: { id: "Mo terheran-heran. \"Umi, rantangnya pergi berisi ketupat, pulang berisi bolu!\" Umi tertawa. \"Begitulah kalau bertetangga dengan baik.\"", en: "Mo was amazed. \"Umi, the carrier went out with ketupat and came back with cake!\" Umi laughed. \"That's what happens when we're good neighbours.\"" },
        scene: { focus: 390, bg: "living", mo: [{ who: "umi", pose: "cheer-happy", x: 330 }, { pose: "pose-37", x: 450 }] },
      },
      {
        text: { id: "Malam itu Mo berdoa, \"Ya Allah, terima kasih untuk tetangga baru kami. Jadikan kami tetangga yang baik.\"", en: "That night Mo prayed, \"O Allah, thank You for our new neighbours. Make us good neighbours.\"" },
        scene: { focus: 390, bg: "bedroom", time: "night", mo: [{ pose: "pose-12", x: 390, move: "still" }], fx: ["stars"] },
      },
      {
        text: { id: "Kebaikan apa yang bisa kamu lakukan untuk tetanggamu? 🏡", en: "What kind thing could you do for your neighbours? 🏡" },
        scene: { focus: 390, bg: "street", mo: [{ pose: "pose-41", x: 330 }, { who: "ais", pose: "wave-hello", x: 455 }], fx: ["hearts"] },
      },
    ],
  },

  /* ───────────────────────── Eid al-Fitr 3: Syawal fasting ───────────────────────── */
  {
    slug: "bintang-syawal-ais",
    pose: "baby-mo-pose-29.png",
    published: "2027-01-02",
    title: { id: "Bintang Syawal Ais", en: "Ais's Syawal Stars" },
    hook: {
      id: "Lebaran baru tiga hari, toples nastar masih penuh… tapi Ais malah puasa lagi! Puasa Syawal itu apa? Dan kenapa puasa sendirian terasa lebih berat?",
      en: "Eid was only three days ago and the nastar jar is still full… but Ais is fasting again! What is the Syawal fast? And why is fasting alone so much harder?",
    },
    anchor: { type: "parenting", slug: "puasa-pertama" },
    takeaway: {
      id: "Enam hari puasa Syawal setelah Ramadan pahalanya seperti puasa setahun. Teman yang baik adalah teman yang membantu kita berbuat baik.",
      en: "Six days of Syawal fasting after Ramadan bring the reward of a whole year of fasting. A good friend is one who helps us do good.",
    },
    tags: ["syawal", "puasa sunnah", "lebaran", "saudara", "teman yang baik", "si kembar"],
    card: {
      title: { id: "Mengenalkan Puasa Syawal", en: "Introducing the Syawal Fast" },
      items: {
        id: [
          "Puasa Syawal untuk anak boleh dimulai sedikit: setengah hari, atau satu-dua hari saja. Yang penting anak kenal sunnahnya.",
          "Buat kartu enam lingkaran di kulkas. Melihat bintang bertambah membuat anak semangat.",
          "Puji saudara yang menemani: \"Terima kasih sudah membantu adikmu berbuat baik.\" Berbuat baik bersama terasa lebih ringan.",
        ],
        en: [
          "Children can start small with the Syawal fast: half a day, or just one or two days. What matters is knowing the sunnah.",
          "Put a six-circle card on the fridge. Watching the stars grow keeps children motivated.",
          "Praise a sibling who joins in: \"Thank you for helping your sister do good.\" Good deeds feel lighter together.",
        ],
      },
    },
    cover: {
      focus: 390, bg: "living",
      props: [{ k: "syawal3", x: 395, y: 222, s: 0.6 }],
      mo: [{ pose: "pose-29", x: 330 }, { who: "ais", pose: "cheer-wink", x: 450 }],
      fx: ["sparkle"],
    },
    pages: [
      {
        text: { id: "Lebaran sudah tiga hari. Toples nastar di meja masih penuh. Mo mengambil satu… dua… tiga. Nyam!", en: "Eid had been three days ago. The nastar jar on the table was still full. Mo took one… two… three. Yum!" },
        scene: { focus: 390, bg: "living", props: [{ k: "nastar", x: 440, s: 0.75 }], mo: [{ pose: "pose-37", x: 335 }] },
      },
      {
        text: { id: "Tapi Ais tidak mengambil satu pun. \"Ais sedang puasa Syawal,\" katanya sambil tersenyum.", en: "But Ais didn't take a single one. \"I'm doing the Syawal fast,\" she said with a smile." },
        scene: { focus: 390, bg: "living", mo: [{ who: "ais", pose: "ok-wink", x: 330 }, { pose: "pose-40", x: 450 }] },
      },
      {
        text: { id: "\"Puasa lagi? Kan Ramadan sudah selesai!\" Mo sampai hampir tersedak nastar.", en: "\"Fasting again? But Ramadan's over!\" Mo nearly choked on his nastar." },
        scene: { focus: 390, bg: "living", props: [{ k: "nastar", x: 440, s: 0.75 }], mo: [{ pose: "pose-33", x: 335 }] },
      },
      {
        text: { id: "Umi tertawa. \"Puasa Syawal itu sunnah, Mo. Cukup enam hari saja, di bulan Syawal.\"", en: "Umi laughed. \"The Syawal fast is a sunnah, Mo. Just six days, in the month of Syawal.\"" },
        scene: { focus: 390, bg: "living", mo: [{ who: "umi", pose: "explain-hand", x: 330 }, { pose: "pose-23", x: 450 }] },
      },
      {
        text: { id: "\"Siapa yang puasa Ramadan, lalu menambah enam hari di bulan Syawal, pahalanya seperti puasa setahun penuh!\"", en: "\"Whoever fasts Ramadan and then adds six days in Syawal gets the reward of fasting a whole year!\"" },
        quote: {
          id: "\"Barangsiapa berpuasa Ramadan, kemudian mengikutinya dengan puasa enam hari di bulan Syawal, maka ia seperti berpuasa sepanjang tahun.\" (HR. Muslim 1164)",
          en: "\"Whoever fasts Ramadan and follows it with six days of Shawwal, it is as if they fasted the whole year.\" (Muslim 1164)",
        },
        scene: { focus: 390, bg: "living", mo: [{ who: "umi", pose: "present-book", x: 330 }, { who: "ais", pose: "heart-hands-smile", x: 450 }], fx: ["sparkle"] },
      },
      {
        text: { id: "\"Setahun?\" Mo menghitung dengan jarinya… lalu menyerah. \"Jari Mo tidak cukup!\"", en: "\"A whole year?\" Mo counted on his fingers… then gave up. \"I haven't got enough fingers!\"" },
        scene: { focus: 390, bg: "living", mo: [{ pose: "pose-28", x: 390 }] },
      },
      {
        text: { id: "Ais menempel kartu di kulkas: enam lingkaran. \"Satu lingkaran untuk satu hari. Ais mau mengisi semuanya!\"", en: "Ais stuck a card on the fridge: six circles. \"One circle for each day. I'm going to fill them all!\"" },
        scene: { focus: 390, bg: "kitchen", props: [{ k: "syawal0", x: 448, y: 300, s: 0.55 }], mo: [{ who: "ais", pose: "checklist", x: 335 }] },
      },
      {
        text: { id: "Hari kedua, sepupu datang membawa kue cokelat. \"Ayo makan, Ais!\" Ais menggeleng sopan. \"Terima kasih. Ais sedang puasa.\"", en: "On day two, cousins came with chocolate cake. \"Have some, Ais!\" Ais shook her head politely. \"Thank you. I'm fasting.\"" },
        scene: { focus: 390, bg: "living", mo: [{ who: "ais", pose: "heart-hands", x: 390 }] },
      },
      {
        text: { id: "Hari ketiga, Ais lemas. Ia duduk lesu di karpet. \"Ternyata puasa sendirian lebih berat daripada waktu Ramadan…\"", en: "On day three, Ais felt weak. She sat slumped on the rug. \"Fasting on my own is much harder than in Ramadan…\"" },
        scene: { focus: 390, bg: "living", mo: [{ who: "ais", pose: "sit-chin-hands", x: 390, move: "still" }] },
      },
      {
        text: { id: "Mo melihat kembarannya sedih. Ia berpikir keras… berpikir… lalu, ting! Mo punya ide.", en: "Mo saw his twin looking sad. He thought hard… and harder… then, ding! Mo had an idea." },
        scene: { focus: 390, bg: "living", mo: [{ pose: "idea", x: 390 }], fx: ["sparkle"] },
      },
      {
        text: { id: "\"Ais, besok Mo ikut puasa Syawal juga! Biar Ais ada teman!\"", en: "\"Ais, tomorrow I'll do the Syawal fast too! Then you'll have a buddy!\"" },
        scene: { focus: 390, bg: "living", mo: [{ pose: "pose-29", x: 330 }, { who: "ais", pose: "surprised", x: 450 }] },
      },
      {
        text: { id: "Mereka puasa bersama. Saat haus, mereka main tebak-tebakan. Saat lapar, mereka membaca buku cerita berdua.", en: "They fasted together. When they were thirsty, they played guessing games. When they were hungry, they read storybooks side by side." },
        scene: { focus: 390, bg: "living", mo: [{ pose: "pose-06", x: 330 }, { who: "ais", pose: "read-book-sit", x: 455 }] },
      },
      {
        text: { id: "Saat berbuka, Mo menempel bintang di kartu barunya sendiri. \"Sekarang kartunya ada dua!\" katanya bangga.", en: "At iftar, Mo stuck a star on his very own new card. \"Now there are two cards!\" he said proudly." },
        scene: { focus: 390, bg: "kitchen", time: "dusk", props: [{ k: "syawal1", x: 448, y: 300, s: 0.55 }], mo: [{ pose: "pose-04", x: 335 }] },
      },
      {
        text: { id: "Hari keenam! Ais menempel bintang terakhir dan menari kegirangan. \"Alhamdulillah, enam! Terima kasih sudah menemani Ais, Mo!\"", en: "Day six! Ais stuck on the last star and danced for joy. \"Alhamdulillah, six! Thank you for keeping me company, Mo!\"" },
        scene: { focus: 390, bg: "kitchen", time: "dusk", props: [{ k: "syawal6", x: 448, y: 300, s: 0.55 }], mo: [{ who: "ais", pose: "trophy-cheer", x: 335 }], fx: ["confetti"] },
      },
      {
        text: { id: "Umi memeluk mereka. \"Teman yang baik itu teman yang membantu kita berbuat baik. Kalian berdua hebat.\" Mo tersipu.", en: "Umi hugged them. \"A good friend is one who helps us do good. You were both wonderful.\" Mo blushed." },
        scene: { focus: 390, bg: "living", mo: [{ who: "umi", pose: "open-arms-present", x: 330 }, { pose: "pose-35", x: 450 }], fx: ["hearts"] },
      },
      {
        text: { id: "Siapa yang bisa kamu temani untuk berbuat baik? ⭐", en: "Who could you keep company while they do something good? ⭐" },
        scene: { focus: 390, bg: "living", props: [{ k: "syawal6", x: 395, y: 222, s: 0.6 }], mo: [{ pose: "pose-25", x: 330 }, { who: "ais", pose: "heart-hands-smile", x: 450 }], fx: ["sparkle"] },
      },
    ],
  },
];

/** Space out groups for the phone page; a lone character keeps its spot so
 *  the prop beside it stays in view. */
const lay = (sc: PicScene): PicScene => ((sc.mo?.length ?? 0) > 1 ? stage(sc) : sc);

export const EID_BOOKS: PictureBook[] = RAW.map((b) => ({
  ...b,
  cover: lay(b.cover),
  pages: b.pages.map((p) => ({ ...p, scene: lay(p.scene) })),
}));
