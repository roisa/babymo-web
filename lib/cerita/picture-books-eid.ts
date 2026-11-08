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
  /* ───────────────────────── Eid al-Adha: the qurban goat ───────────────────────── */
  {
    slug: "kambing-qurban-si-kembar",
    pose: "baby-mo-pose-31.png",
    published: "2027-01-03",
    title: { id: "Kambing Qurban Si Kembar", en: "The Twins' Qurban Goat" },
    hook: {
      id: "Seminggu sebelum Idul Adha, ada seekor kambing putih di halaman. Mo menamainya Si Embek dan langsung sayang padanya. Tapi Si Embek adalah kambing qurban…",
      en: "A week before Eid al-Adha, a white goat arrives in the garden. Mo names him Si Embek and loves him straight away. But Si Embek is the qurban goat…",
    },
    anchor: { type: "hadith", slug: "kelembutan-keindahan" },
    takeaway: {
      id: "Qurban adalah tanda taat kepada Allah seperti Nabi Ibrahim, dilakukan dengan lembut kepada hewan, dan dagingnya dibagikan supaya banyak orang bahagia.",
      en: "Qurban is a sign of obeying Allah like Prophet Ibrahim, done with gentleness to the animal, and its meat is shared so many people are happy.",
    },
    tags: ["idul adha", "qurban", "nabi ibrahim", "sayang hewan", "berbagi", "si kembar"],
    card: {
      title: { id: "Menjelaskan Qurban kepada Anak", en: "Explaining Qurban to Children" },
      items: {
        id: [
          "Wajar jika anak sedih berpisah dengan hewan qurban. Akui perasaannya, lalu ceritakan bahwa Islam memerintahkan berbuat baik kepada hewan, bahkan saat menyembelih.",
          "Anak kecil tidak perlu menyaksikan penyembelihan. Libatkan mereka di bagian yang menyenangkan: memberi makan, mengantar daging.",
          "Ceritakan kisah Nabi Ibrahim dengan bahasa sederhana: taat kepada Allah, dan Allah Maha Penyayang.",
        ],
        en: [
          "It's natural for a child to feel sad about the qurban animal. Acknowledge it, then explain that Islam commands kindness to animals, even at slaughter.",
          "Young children don't need to watch the slaughter. Involve them in the happy parts: feeding the animal, delivering the meat.",
          "Tell the story of Prophet Ibrahim simply: he obeyed Allah, and Allah is the Most Merciful.",
        ],
      },
    },
    cover: {
      focus: 390, bg: "garden",
      props: [{ k: "goat", x: 450, s: 0.75 }],
      mo: [{ pose: "pose-31", x: 335 }],
      fx: ["sparkle"],
    },
    pages: [
      {
        text: { id: "Seminggu sebelum Idul Adha, ada tamu istimewa di halaman: seekor kambing putih! \"Mbeeek!\"", en: "A week before Eid al-Adha, a special guest arrived in the garden: a white goat! \"Maaa-aaah!\"" },
        scene: { focus: 390, bg: "garden", props: [{ k: "goat", x: 450, s: 0.75 }], mo: [{ pose: "pose-31", x: 335 }] },
      },
      {
        text: { id: "\"Ini kambing qurban kita,\" kata Abi. Mo langsung memberinya nama. \"Namanya… Si Embek!\"", en: "\"This is our qurban goat,\" said Abi. Mo named him straight away. \"His name is… Si Embek!\"" },
        scene: { focus: 390, bg: "garden", mo: [{ who: "ayah", pose: "thumbs-up-stand", x: 330 }, { pose: "pose-29", x: 450 }] },
      },
      {
        text: { id: "Setiap pagi, si kembar memberi Si Embek rumput dan air. Si Embek mengunyah… kunyah, kunyah… sambil mengedip-ngedip.", en: "Every morning, the twins gave Si Embek grass and water. Si Embek chewed… munch, munch… blinking his eyes." },
        scene: { focus: 390, bg: "garden", props: [{ k: "goat", x: 450, s: 0.75 }], mo: [{ who: "ais", pose: "watering-can", x: 335 }] },
      },
      {
        text: { id: "\"Abi, kenapa kita berqurban?\" tanya Ais suatu sore.", en: "\"Abi, why do we do qurban?\" asked Ais one afternoon." },
        scene: { focus: 390, bg: "garden", time: "dusk", mo: [{ who: "ayah", pose: "kneel-arms-open", x: 330 }, { who: "ais", pose: "think-question", x: 450 }] },
      },
      {
        text: { id: "Abi bercerita tentang Nabi Ibrahim 'alaihissalam, yang sangat taat kepada Allah. Allah menguji beliau dengan perintah yang berat, dan beliau siap menaatinya. Lalu Allah menggantinya dengan seekor domba yang besar.", en: "Abi told them about Prophet Ibrahim, peace be upon him, who obeyed Allah completely. Allah tested him with a very hard command, and he was ready to obey. Then Allah sent a great ram in its place." },
        quote: {
          id: "\"Dan Kami tebus anak itu dengan seekor sembelihan yang besar.\" (QS. Ash-Shaffat: 107)",
          en: "\"And We ransomed him with a great sacrifice.\" (Qur'an, As-Saffat 37:107)",
        },
        scene: { focus: 390, bg: "living", time: "night", mo: [{ who: "ayah", pose: "read-book-sit", x: 330 }, { pose: "pose-06", x: 450 }], fx: ["stars"] },
      },
      {
        text: { id: "\"Jadi qurban itu tanda kita taat kepada Allah,\" kata Abi. \"Dan supaya kita bisa berbagi daging dengan banyak orang.\"", en: "\"So qurban is a sign that we obey Allah,\" said Abi. \"And a way to share meat with lots of people.\"" },
        scene: { focus: 390, bg: "living", time: "night", mo: [{ who: "ayah", pose: "hand-heart-kneel", x: 330 }, { who: "ais", pose: "heart-hands-smile", x: 450 }] },
      },
      {
        text: { id: "Malam sebelum Idul Adha, Mo duduk memeluk lutut di dekat Si Embek. \"Mo sayang Si Embek…\"", en: "On the night before Eid al-Adha, Mo sat hugging his knees beside Si Embek. \"I love Si Embek…\"" },
        scene: { focus: 390, bg: "garden", time: "night", props: [{ k: "goat", x: 450, s: 0.75 }], mo: [{ pose: "pose-39", x: 335, move: "still" }], fx: ["stars"] },
      },
      {
        text: { id: "Abi duduk di sampingnya. \"Sayang pada hewan itu baik, Mo. Rasulullah ﷺ mengajarkan kita berbuat baik kepada hewan — bahkan saat menyembelihnya.\"", en: "Abi sat beside him. \"Loving animals is good, Mo. The Prophet ﷺ taught us to be kind to animals — even when slaughtering them.\"" },
        quote: {
          id: "\"Sesungguhnya Allah mewajibkan berbuat baik dalam segala hal. Jika kalian menyembelih, sembelihlah dengan baik: tajamkan pisaunya dan tenangkan hewannya.\" (HR. Muslim 1955)",
          en: "\"Allah has prescribed excellence in everything. When you slaughter, slaughter well: sharpen the blade and put the animal at ease.\" (Muslim 1955)",
        },
        scene: { focus: 390, bg: "garden", time: "night", mo: [{ who: "ayah", pose: "calm-sit", x: 330 }, { pose: "pose-14", x: 450 }], fx: ["stars"] },
      },
      {
        text: { id: "\"Si Embek tidak akan kesakitan?\" \"Para petugas melakukannya dengan cepat dan tenang, sambil menyebut nama Allah,\" jawab Abi lembut. Mo mengangguk pelan.", en: "\"Won't Si Embek be hurt?\" \"The helpers do it quickly and calmly, saying Allah's name,\" said Abi gently. Mo nodded slowly." },
        scene: { focus: 390, bg: "garden", time: "night", mo: [{ who: "ayah", pose: "hand-heart-kneel", x: 330 }, { pose: "pose-33", x: 450 }] },
      },
      {
        text: { id: "Pagi Idul Adha, takbir menggema lagi. Seluruh keluarga sholat Id di lapangan, lalu pulang lewat jalan yang lain.", en: "On the morning of Eid al-Adha, the takbir rang out again. The whole family prayed Eid at the field, then came home a different way." },
        scene: { focus: 390, bg: "park", props: [{ k: "eidmats", x: 392, s: 0.8 }], mo: [{ pose: "pose-42", x: 330 }, { who: "ais", pose: "wave-hello", x: 455 }], fx: ["notes"] },
      },
      {
        text: { id: "Siangnya, panitia qurban di masjid sibuk sekali. Kak Adam ikut membantu membungkus daging ke dalam besek-besek kecil.", en: "At midday, the qurban team at the mosque was very busy. Kak Adam helped pack the meat into little woven boxes." },
        scene: { focus: 390, bg: "mosque", props: [{ k: "besek", x: 448, s: 0.8 }], mo: [{ who: "adam", pose: "carry-bags", x: 335 }] },
      },
      {
        text: { id: "Abi menjelaskan, \"Dagingnya kita makan sebagian, kita simpan sebagian, dan kita sedekahkan sebagian untuk yang membutuhkan.\"", en: "Abi explained, \"We eat some of the meat, keep some, and give some in charity to people in need.\"" },
        quote: {
          id: "Tentang daging qurban, Rasulullah ﷺ bersabda: \"Makanlah, simpanlah, dan bersedekahlah.\" (HR. Muslim 1971)",
          en: "About the qurban meat, the Prophet ﷺ said: \"Eat, store some, and give in charity.\" (Muslim 1971)",
        },
        scene: { focus: 390, bg: "mosque", mo: [{ who: "ayah", pose: "idea-point-stand", x: 330 }, { pose: "pose-22", x: 450 }] },
      },
      {
        text: { id: "Mo dan Ais mengantar besek ke rumah-rumah. \"Assalamu'alaikum! Ini daging qurban untuk Nenek!\" Nenek itu tersenyum. \"Alhamdulillah, sudah lama Nenek tidak makan daging.\"", en: "Mo and Ais delivered the boxes from house to house. \"Assalamu'alaikum! Here's some qurban meat for you, Nenek!\" The old lady smiled. \"Alhamdulillah, I haven't had meat for so long.\"" },
        scene: { focus: 390, bg: "street", props: [{ k: "besek", x: 448, s: 0.7 }], mo: [{ pose: "pose-22", x: 335 }] },
      },
      {
        text: { id: "Mo terdiam. Sekarang ia mengerti: Si Embek membuat banyak sekali orang bahagia hari ini.", en: "Mo went quiet. Now he understood: Si Embek had made so many people happy today." },
        scene: { focus: 390, bg: "street", mo: [{ pose: "pose-14", x: 390 }], fx: ["hearts"] },
      },
      {
        text: { id: "Malamnya Abi berkata, \"Ingat, yang sampai kepada Allah bukan daging atau darahnya, tapi ketakwaan kita.\" Mo memeluk Abi erat-erat.", en: "That night Abi said, \"Remember, it isn't the meat or the blood that reaches Allah, but our devotion.\" Mo hugged Abi tight." },
        quote: {
          id: "\"Daging dan darahnya itu sekali-kali tidak dapat mencapai (keridaan) Allah, tetapi ketakwaan dari kamulah yang dapat mencapainya.\" (QS. Al-Hajj: 37)",
          en: "\"Neither their meat nor their blood reaches Allah, but what reaches Him is your devotion.\" (Qur'an, Al-Hajj 22:37)",
        },
        scene: { focus: 390, bg: "living", time: "night", mo: [{ who: "ayah", pose: "hug-mo", x: 390, move: "still" }], fx: ["hearts"] },
      },
      {
        text: { id: "Kalau kamu berqurban nanti, kepada siapa kamu ingin berbagi daging? 🐐", en: "When you give qurban one day, who would you like to share the meat with? 🐐" },
        scene: { focus: 390, bg: "garden", props: [{ k: "besek", x: 448, s: 0.7 }], mo: [{ pose: "pose-41", x: 335 }], fx: ["sparkle"] },
      },
    ],
  },

  /* ───────────────────────── Hajj: Kakek goes on Hajj ───────────────────────── */
  {
    slug: "kakek-pergi-haji",
    pose: "baby-mo-pose-01.png",
    published: "2027-01-04",
    title: { id: "Kakek Pergi Haji", en: "Grandpa Goes on Hajj" },
    hook: {
      id: "Kakek berangkat haji ke Mekah! Dari rumah, si kembar mengikuti perjalanan Kakek langkah demi langkah — berihram, bertawaf, ber-sa'i, wukuf di Arafah — sampai Kakek pulang membawa air zamzam.",
      en: "Grandpa is off to Makkah for Hajj! From home, the twins follow his journey step by step — ihram, tawaf, sa'i, standing at Arafah — until Grandpa comes home with zamzam water.",
    },
    anchor: { type: "doa", slug: "doa-kembali-dari-perjalanan" },
    takeaway: {
      id: "Haji adalah perjalanan ibadah ke Baitullah bagi yang mampu. Yang di rumah pun bisa ikut berbuat baik: mendoakan, berpuasa Arafah, dan berqurban.",
      en: "Hajj is a journey of worship to the House of Allah for those who are able. Those at home can join in too: praying for the pilgrims, fasting on Arafah and giving qurban.",
    },
    tags: ["haji", "idul adha", "ka'bah", "arafah", "kakek", "si kembar"],
    card: {
      title: { id: "Mengenalkan Ibadah Haji kepada Anak", en: "Introducing Hajj to Children" },
      items: {
        id: [
          "Ikuti perjalanan haji kerabat atau tayangan haji bersama anak, dan jelaskan tiap langkah dengan sederhana: ihram, tawaf, sa'i, wukuf, melempar jumrah.",
          "Main \"manasik cilik\" di rumah: berjalan tujuh putaran, berjalan bolak-balik tujuh kali sambil bertalbiyah.",
          "Ajak anak berpuasa Arafah semampunya dan mendoakan para jamaah haji.",
        ],
        en: [
          "Follow a relative's Hajj, or watch Hajj coverage together, and explain each step simply: ihram, tawaf, sa'i, standing at Arafah, stoning the pillars.",
          "Play \"little pilgrims\" at home: walk seven circuits, walk back and forth seven times while saying the talbiyah.",
          "Invite your child to fast on the day of Arafah as they are able, and to pray for the pilgrims.",
        ],
      },
    },
    cover: {
      focus: 390, bg: "living",
      props: [{ k: "kaabascreen", x: 450, s: 0.5 }],
      mo: [{ pose: "pose-01", x: 335 }],
      fx: ["sparkle"],
    },
    pages: [
      {
        text: { id: "Kakek berangkat haji ke Mekah hari ini! Dari depan rumah, si kembar melambai ke langit. Wuuung — \"Itu pesawat Kakek!\"", en: "Grandpa was flying to Makkah for Hajj today! From outside the house, the twins waved at the sky. Whoosh — \"That's Grandpa's plane!\"" },
        scene: { focus: 390, bg: "street", props: [{ k: "plane", x: 395, y: 150, s: 0.6 }], mo: [{ pose: "pose-01", x: 330 }, { who: "ais", pose: "wave-big", x: 455 }] },
      },
      {
        text: { id: "\"Doakan Kakek, ya,\" pesan Kakek sebelum berangkat. Si kembar mengangkat tangan dan berdoa supaya Kakek sehat dan selamat.", en: "\"Pray for me,\" Grandpa had said before leaving. The twins raised their hands and prayed for Grandpa to be healthy and safe." },
        scene: { focus: 390, bg: "living", mo: [{ pose: "thank-you", x: 330 }, { who: "ais", pose: "dua-hands-closed", x: 455 }] },
      },
      {
        text: { id: "Abi membentangkan peta. \"Kita ikuti perjalanan haji Kakek, langkah demi langkah!\" Ais sudah siap jadi penjelajah.", en: "Abi spread out a map. \"Let's follow Grandpa's Hajj, step by step!\" Ais was ready to be an explorer." },
        scene: { focus: 390, bg: "living", mo: [{ who: "ayah", pose: "idea-point-stand", x: 330 }, { who: "ais", pose: "explorer-map", x: 450 }] },
      },
      {
        text: { id: "Langkah pertama: ihram. Kakek memakai dua helai kain putih, lalu bertalbiyah: \"Labbaik Allahumma labbaik!\" Artinya, \"Aku datang memenuhi panggilan-Mu, ya Allah!\"", en: "Step one: ihram. Grandpa wore two plain white cloths and called out the talbiyah: \"Labbayk Allahumma labbayk!\" It means, \"Here I am, O Allah, answering Your call!\"" },
        quote: {
          id: "Talbiyah Rasulullah ﷺ: \"Labbaik Allahumma labbaik, labbaika laa syariika laka labbaik, innal hamda wan ni'mata laka wal mulk, laa syariika lak.\" (HR. Bukhari 1549)",
          en: "The Prophet's talbiyah ﷺ: \"Labbayk Allahumma labbayk, labbayka la sharika laka labbayk, innal-hamda wan-ni'mata laka wal-mulk, la sharika lak.\" (Bukhari 1549)",
        },
        scene: { focus: 390, bg: "living", props: [{ k: "towel", x: 448, s: 0.8 }], mo: [{ pose: "pose-22", x: 335 }] },
      },
      {
        text: { id: "Malamnya, Kakek menelepon dengan video. Di layar terlihat Ka'bah, dikelilingi lautan orang berbaju putih. \"Masya Allah!\" seru Mo.", en: "That night Grandpa video-called. On the screen was the Ka'bah, surrounded by a sea of people in white. \"Masya Allah!\" cried Mo." },
        scene: { focus: 390, bg: "living", time: "night", props: [{ k: "kaabascreen", x: 450, s: 0.5 }], mo: [{ pose: "pose-31", x: 335 }], fx: ["sparkle"] },
      },
      {
        text: { id: "\"Kakek bertawaf,\" kata Abi. \"Berjalan mengelilingi Ka'bah tujuh kali sambil berdzikir dan berdoa.\"", en: "\"Grandpa is doing tawaf,\" said Abi. \"Walking around the Ka'bah seven times, remembering Allah and making du'a.\"" },
        scene: { focus: 390, bg: "living", time: "night", mo: [{ who: "ayah", pose: "teach-point-kneel", x: 330 }, { who: "ais", pose: "wonder-question", x: 450 }] },
      },
      {
        text: { id: "Besoknya, si kembar main manasik cilik seperti di TK: berjalan mengelilingi karpet tujuh kali. \"Satu… dua… tiga…\" Di putaran ketujuh, Mo pusing! Hihi.", en: "The next day, the twins played little pilgrims like at kindergarten: walking round the rug seven times. \"One… two… three…\" On lap seven, Mo was dizzy! Hee hee." },
        scene: { focus: 390, bg: "living", mo: [{ pose: "run", x: 330, move: "hop" }, { who: "ais", pose: "run", x: 455 }] },
      },
      {
        text: { id: "Lalu sa'i: berjalan bolak-balik antara bukit Shafa dan Marwah tujuh kali. Abi bercerita tentang Siti Hajar yang berlari-lari mencari air untuk bayinya, Ismail.", en: "Then sa'i: walking back and forth between the hills of Safa and Marwah seven times. Abi told them how Hajar ran to and fro looking for water for her baby, Ismail." },
        scene: { focus: 390, bg: "living", mo: [{ pose: "pose-20", x: 390 }] },
      },
      {
        text: { id: "\"Lalu Allah memancarkan air dari dalam tanah — air zamzam! Sampai sekarang airnya masih mengalir,\" kata Abi. \"Wah!\" kata Mo dan Ais bersamaan.", en: "\"Then Allah made water gush from the ground — zamzam! It's still flowing today,\" said Abi. \"Wow!\" said Mo and Ais together." },
        scene: { focus: 390, bg: "living", props: [{ k: "zamzam", x: 448, s: 0.9 }], mo: [{ who: "ayah", pose: "arms-open-welcome", x: 335 }], fx: ["sparkle"] },
      },
      {
        text: { id: "Tanggal 9 Dzulhijjah, Kakek wukuf di Padang Arafah — berdoa sejak siang sampai matahari terbenam. Hari yang paling penting dalam ibadah haji.", en: "On 9 Dhul-Hijjah, Grandpa stood at the plain of Arafah — praying from midday until sunset. The most important day of Hajj." },
        scene: { focus: 390, bg: "living", props: [{ k: "arafah9", x: 448, y: 300, s: 0.75 }], mo: [{ pose: "pose-12", x: 335, move: "still" }] },
      },
      {
        text: { id: "\"Kita yang di rumah juga bisa ikut,\" kata Umi. \"Berpuasa di hari Arafah. Pahalanya besar sekali!\" Ais langsung ingin mencoba.", en: "\"We can join in from home too,\" said Umi. \"By fasting on the day of Arafah. The reward is huge!\" Ais wanted to try straight away." },
        quote: {
          id: "\"Puasa hari Arafah, aku berharap kepada Allah agar menghapus dosa setahun sebelumnya dan setahun sesudahnya.\" (HR. Muslim 1162)",
          en: "\"Fasting the day of Arafah, I hope Allah will wipe out the sins of the year before it and the year after it.\" (Muslim 1162)",
        },
        scene: { focus: 390, bg: "living", mo: [{ who: "umi", pose: "explain-hand", x: 330 }, { who: "ais", pose: "cheer-fist", x: 450 }] },
      },
      {
        text: { id: "Setelah itu Kakek melempar jumrah: melempar batu-batu kecil, tanda kita melawan bisikan setan. Mo menirukannya. \"Hap! Pergi kau, setan!\"", en: "After that, Grandpa threw pebbles at the pillars, a sign that we resist Shaytan's whispers. Mo pretended to throw. \"Hup! Go away, Shaytan!\"" },
        scene: { focus: 390, bg: "living", mo: [{ pose: "pose-15", x: 390 }] },
      },
      {
        text: { id: "Hampir sebulan kemudian, Kakek pulang! Wajahnya bercahaya. Oleh-olehnya kurma dan air zamzam. \"Kakeeek!\" Mo melompat kegirangan.", en: "Almost a month later, Grandpa came home! His face was glowing. He brought dates and zamzam water. \"Grandpaaa!\" Mo jumped for joy." },
        scene: { focus: 390, bg: "living", props: [{ k: "zamzam", x: 448, s: 0.9 }], mo: [{ pose: "pose-02", x: 335 }], fx: ["confetti"] },
      },
      {
        text: { id: "\"Kek, haji itu rasanya bagaimana?\" tanya Ais. Kata Kakek, \"Jutaan orang dari seluruh dunia, berbaju sama, berdoa kepada Allah yang sama. Rasanya seperti satu keluarga besar.\"", en: "\"Grandpa, what was Hajj like?\" asked Ais. Grandpa said, \"Millions of people from all over the world, dressed the same, praying to the same Allah. It felt like one big family.\"" },
        scene: { focus: 390, bg: "living", mo: [{ who: "ais", pose: "wonder-question", x: 390 }], fx: ["hearts"] },
      },
      {
        text: { id: "Abi tersenyum. \"Haji yang mabrur, balasannya surga.\" Mo menggenggam tangan Ais. \"Nanti kalau sudah besar, kita pergi haji bersama, ya!\"", en: "Abi smiled. \"An accepted Hajj is rewarded with nothing less than Paradise.\" Mo held Ais's hand. \"When we're grown up, let's go on Hajj together!\"" },
        quote: {
          id: "\"Haji yang mabrur tidak ada balasan baginya selain surga.\" (HR. Bukhari 1773, Muslim 1349)",
          en: "\"An accepted Hajj has no reward except Paradise.\" (Bukhari 1773, Muslim 1349)",
        },
        scene: { focus: 390, bg: "living", mo: [{ pose: "pose-27", x: 330 }, { who: "ais", pose: "heart-hands-smile", x: 455 }], fx: ["sparkle"] },
      },
      {
        text: { id: "Kalau suatu hari kamu pergi haji, doa apa yang ingin kamu panjatkan di sana? 🕋", en: "If you go on Hajj one day, what will you pray for there? 🕋" },
        scene: { focus: 390, bg: "living", props: [{ k: "kaabascreen", x: 450, s: 0.5 }], mo: [{ pose: "thank-you", x: 335 }], fx: ["sparkle"] },
      },
    ],
  },
  /* ───────────────────────── 1 Muharram: the Hijri New Year ───────────────────────── */
  {
    slug: "tahun-baru-hijriah-si-kembar",
    pose: "baby-mo-pose-23.png",
    published: "2027-01-05",
    title: { id: "Tahun Baru Hijriah Si Kembar", en: "The Twins' Hijri New Year" },
    hook: {
      id: "\"Tahun baru lagi? Bukannya tahun baru itu bulan Januari?\" Mo bingung melihat pawai obor. Ternyata ada kalender yang mengikuti bulan, dan kisahnya dimulai dari sebuah perjalanan besar: hijrah!",
      en: "\"Another New Year? Isn't New Year in January?\" Mo is puzzled by the torch parade. It turns out there's a calendar that follows the moon, and it begins with a great journey: the Hijrah!",
    },
    anchor: { type: "parenting", slug: "adab-sehari-hari" },
    takeaway: {
      id: "Kalender Hijriah mengikuti bulan dan dimulai dari peristiwa hijrah. Setiap tahun baru, kita juga bisa \"berhijrah\": pindah dari kebiasaan kurang baik ke kebiasaan yang lebih baik.",
      en: "The Hijri calendar follows the moon and begins with the Hijrah. Every new year, we can make our own \"hijrah\": moving from a not-so-good habit to a better one.",
    },
    tags: ["1 muharram", "tahun baru islam", "hijrah", "kalender hijriah", "bulan islam", "si kembar"],
    card: {
      title: { id: "Tahun Baru Hijriah Bersama Anak", en: "The Hijri New Year with Your Child" },
      items: {
        id: [
          "Hafalkan 12 nama bulan Hijriah dengan lagu. Tempel kalender Hijriah di rumah dan cari tanggal-tanggal penting bersama.",
          "Ceritakan hijrah dengan sederhana: Rasulullah ﷺ dan para sahabat pindah ke Madinah, dan Allah selalu bersama mereka.",
          "Ajak setiap anggota keluarga menulis satu \"hijrah kecil\" dan menempelnya di kulkas.",
        ],
        en: [
          "Learn the 12 Hijri months with a song. Put up a Hijri calendar at home and look for the special dates together.",
          "Tell the Hijrah simply: the Prophet ﷺ and his companions moved to Madinah, and Allah was always with them.",
          "Have each family member write one \"little hijrah\" and stick it on the fridge.",
        ],
      },
    },
    cover: {
      focus: 390, bg: "street", time: "night",
      props: [{ k: "obor", x: 455, s: 0.7 }],
      mo: [{ pose: "pose-31", x: 335 }],
      fx: ["stars"],
    },
    pages: [
      {
        text: { id: "Malam itu, ada obor-obor menyala di jalan. \"Ada apa, Kak? Lebaran lagi?\" tanya Mo. Kak Adam tertawa. \"Bukan! Besok 1 Muharram — Tahun Baru Islam!\"", en: "That night, torches were glowing in the street. \"What's happening, Kak? Is it Eid again?\" asked Mo. Kak Adam laughed. \"No! Tomorrow is 1 Muharram — the Islamic New Year!\"" },
        scene: { focus: 390, bg: "street", time: "night", mo: [{ who: "adam", pose: "clap-cheer", x: 335 }, { pose: "pose-40", x: 445 }], fx: ["stars"] },
      },
      {
        text: { id: "\"Tahun baru lagi? Bukannya tahun baru itu bulan Januari?\" Mo menggaruk kepala, bingung sekali.", en: "\"Another New Year? Isn't New Year in January?\" Mo scratched his head, very confused." },
        scene: { focus: 390, bg: "living", time: "night", props: [{ k: "muharram1", x: 448, y: 300, s: 0.75 }], mo: [{ pose: "pose-23", x: 335 }] },
      },
      {
        text: { id: "\"Ada dua kalender,\" jelas Abi. \"Kalender Masehi mengikuti matahari. Kalender Hijriah mengikuti bulan — dari bulan sabit ke bulan sabit lagi.\"", en: "\"There are two calendars,\" Abi explained. \"The Gregorian calendar follows the sun. The Hijri calendar follows the moon — from one new crescent to the next.\"" },
        scene: { focus: 390, bg: "living", time: "night", mo: [{ who: "ayah", pose: "teach-point-kneel", x: 330 }, { pose: "pose-31", x: 450 }] },
      },
      {
        text: { id: "\"Bulannya ada dua belas,\" kata Umi. Lalu Umi bernyanyi: \"Muharram, Safar, Rabiul Awal, Rabiul Akhir, Jumadil Awal, Jumadil Akhir…\"", en: "\"There are twelve months,\" said Umi. Then she sang: \"Muharram, Safar, Rabi' al-Awwal, Rabi' al-Akhir, Jumada al-Ula, Jumada al-Akhirah…\"" },
        quote: {
          id: "\"Sesungguhnya bilangan bulan di sisi Allah ialah dua belas bulan, dalam ketetapan Allah pada waktu Dia menciptakan langit dan bumi…\" (QS. At-Taubah: 36)",
          en: "\"Indeed, the number of months with Allah is twelve, in the decree of Allah from the day He created the heavens and the earth…\" (Qur'an, At-Tawbah 9:36)",
        },
        scene: { focus: 390, bg: "living", time: "night", mo: [{ who: "umi", pose: "cheer-happy", x: 330 }, { who: "ais", pose: "headphones-dance", x: 450 }], fx: ["notes"] },
      },
      {
        text: { id: "\"…Rajab, Sya'ban, Ramadan, Syawal, Dzulqa'dah, Dzulhijjah!\" Si kembar ikut bernyanyi sambil menari sampai hafal.", en: "\"…Rajab, Sha'ban, Ramadan, Shawwal, Dhul-Qa'dah, Dhul-Hijjah!\" The twins sang and danced along until they knew it by heart." },
        scene: { focus: 390, bg: "living", time: "night", mo: [{ pose: "pose-30", x: 330 }, { who: "ais", pose: "jump-joy", x: 455 }], fx: ["notes"] },
      },
      {
        text: { id: "\"Kenapa namanya Hijriah?\" tanya Ais. Abi bercerita tentang hijrah: Rasulullah ﷺ dan para sahabat pindah dari Mekah ke Madinah, supaya bisa beribadah dengan aman.", en: "\"Why is it called Hijri?\" asked Ais. Abi told them about the Hijrah: the Prophet ﷺ and his companions moved from Makkah to Madinah, so they could worship in safety." },
        scene: { focus: 390, bg: "living", time: "night", mo: [{ who: "ayah", pose: "read-book-sit", x: 330 }, { who: "ais", pose: "think-question", x: 450 }] },
      },
      {
        text: { id: "\"Di perjalanan, Rasulullah ﷺ dan sahabatnya, Abu Bakar, bersembunyi di sebuah gua. Abu Bakar khawatir. Tapi Rasulullah ﷺ berkata: Jangan bersedih, sesungguhnya Allah bersama kita.\"", en: "\"On the way, the Prophet ﷺ and his friend Abu Bakr hid in a cave. Abu Bakr was worried. But the Prophet ﷺ said: Do not be sad, Allah is with us.\"" },
        quote: {
          id: "\"…ketika dia berkata kepada sahabatnya: Janganlah engkau bersedih, sesungguhnya Allah bersama kita.\" (QS. At-Taubah: 40)",
          en: "\"…when he said to his companion: Do not grieve, indeed Allah is with us.\" (Qur'an, At-Tawbah 9:40)",
        },
        scene: { focus: 390, bg: "garden", time: "night", mo: [{ pose: "pose-36", x: 390, move: "still" }], fx: ["stars", "milkyway"] },
      },
      {
        text: { id: "\"Allah bersama kita…\" bisik Mo. \"Jadi kalau Mo takut gelap, Allah juga bersama Mo?\" \"Selalu,\" jawab Abi sambil tersenyum.", en: "\"Allah is with us…\" whispered Mo. \"So when I'm scared of the dark, Allah is with me too?\" \"Always,\" said Abi with a smile." },
        scene: { focus: 390, bg: "garden", time: "night", mo: [{ who: "ayah", pose: "hand-heart-kneel", x: 330 }, { pose: "pose-14", x: 450 }], fx: ["stars"] },
      },
      {
        text: { id: "\"Dari peristiwa hijrah itulah kalender Islam dihitung,\" kata Abi. \"Khalifah Umar bin Khattab yang menetapkannya.\" Mo mengangguk-angguk seperti profesor.", en: "\"The Islamic calendar is counted from the Hijrah,\" said Abi. \"The caliph Umar ibn al-Khattab decided it.\" Mo nodded like a little professor." },
        scene: { focus: 390, bg: "living", time: "night", mo: [{ who: "ayah", pose: "idea-point-stand", x: 330 }, { pose: "pose-04", x: 450 }] },
      },
      {
        text: { id: "\"Hijrah artinya pindah,\" kata Kak Adam. \"Kita juga bisa berhijrah — pindah dari kebiasaan jelek ke kebiasaan baik!\"", en: "\"Hijrah means moving,\" said Kak Adam. \"We can make a hijrah too — moving from a bad habit to a good one!\"" },
        scene: { focus: 390, bg: "living", time: "night", mo: [{ who: "adam", pose: "proud-hands-hips", x: 335 }, { pose: "pose-31", x: 445 }] },
      },
      {
        text: { id: "Lalu mereka ikut pawai obor keliling kampung. Api-api kecil menari di sepanjang jalan. \"Selamat Tahun Baru Islam!\"", en: "Then they joined the torch parade around the neighbourhood. Little flames danced all along the road. \"Happy Islamic New Year!\"" },
        scene: { focus: 390, bg: "street", time: "night", props: [{ k: "obor", x: 455, s: 0.7 }], mo: [{ pose: "pose-42", x: 335 }], fx: ["stars"] },
      },
      {
        text: { id: "Pulangnya, semua menulis \"hijrah kecil\". Mo menulis: \"Tidak rebutan mainan lagi.\" Kak Adam menulis: \"Tidak marah kalau kalah tenis.\"", en: "Back home, everyone wrote a \"little hijrah\". Mo wrote: \"No more grabbing toys.\" Kak Adam wrote: \"Don't get cross when I lose at tennis.\"" },
        scene: { focus: 390, bg: "living", time: "night", mo: [{ who: "adam", pose: "write-card-floor", x: 335 }, { pose: "pose-22", x: 445 }] },
      },
      {
        text: { id: "Ais menulis: \"Merapikan tempat tidur sendiri setiap pagi.\" Mereka menempelnya di kulkas. \"Satu tahun, satu hijrah kecil. Bismillah!\"", en: "Ais wrote: \"Make my own bed every morning.\" They stuck them on the fridge. \"One year, one little hijrah. Bismillah!\"" },
        scene: { focus: 390, bg: "kitchen", time: "night", mo: [{ who: "ais", pose: "checklist", x: 330 }, { pose: "pose-27", x: 455 }] },
      },
      {
        text: { id: "Pagi 1 Muharram, Ais sedang main balok. Mo ingin sekali ikut merebutnya… tapi ia ingat hijrahnya. \"Ais duluan saja, deh.\" Ais tersenyum lebar.", en: "On the morning of 1 Muharram, Ais was playing with blocks. Mo really wanted to grab them… but he remembered his hijrah. \"You go first, Ais.\" Ais gave a huge smile." },
        scene: { focus: 390, bg: "playroom", mo: [{ pose: "pose-25", x: 330 }, { who: "ais", pose: "blocks-build", x: 455 }], fx: ["hearts"] },
      },
      {
        text: { id: "Abi mengacungkan jempol. \"Selamat Tahun Baru Hijriah! Hijrah pertamamu berhasil, Mo!\"", en: "Abi gave a thumbs up. \"Happy Hijri New Year! Your first hijrah worked, Mo!\"" },
        scene: { focus: 390, bg: "playroom", mo: [{ who: "ayah", pose: "thumbs-up-stand", x: 330 }, { pose: "pose-02", x: 450 }], fx: ["confetti"] },
      },
      {
        text: { id: "Hijrah kecil apa yang ingin kamu mulai tahun ini? 🌙", en: "What little hijrah would you like to start this year? 🌙" },
        scene: { focus: 390, bg: "living", props: [{ k: "muharram1", x: 448, y: 300, s: 0.75 }], mo: [{ pose: "idea", x: 335 }], fx: ["sparkle"] },
      },
    ],
  },

  /* ───────────────────────── Asyura: the sea that parted ───────────────────────── */
  {
    slug: "puasa-asyura-si-kembar",
    pose: "baby-mo-pose-33.png",
    published: "2027-01-06",
    title: { id: "Puasa Asyura dan Laut yang Terbelah", en: "The Ashura Fast and the Parted Sea" },
    hook: {
      id: "Di pantai, ombak merobohkan istana pasir Mo. \"Lautnya kuat sekali!\" Lalu Abi bercerita tentang laut yang terbelah dan hari ketika Nabi Musa diselamatkan — hari Asyura.",
      en: "At the beach, a wave knocks down Mo's sandcastle. \"The sea is so strong!\" Then Abi tells the story of the sea that parted and the day Prophet Musa was saved — the day of Ashura.",
    },
    anchor: { type: "parenting", slug: "puasa-pertama" },
    takeaway: {
      id: "Puasa Asyura (10 Muharram) adalah tanda syukur atas pertolongan Allah kepada Nabi Musa. Disunnahkan juga berpuasa tanggal 9. Saat takut, ingatlah: Allah bersama kita.",
      en: "The Ashura fast (10 Muharram) is a way of thanking Allah for saving Prophet Musa. Fasting the 9th too is sunnah. When we're afraid, remember: Allah is with us.",
    },
    tags: ["asyura", "muharram", "nabi musa", "puasa sunnah", "pantai", "si kembar"],
    card: {
      title: { id: "Mengenalkan Hari Asyura", en: "Introducing the Day of Ashura" },
      items: {
        id: [
          "Ceritakan kisah Nabi Musa dengan fokus pada keyakinannya: \"Tuhanku bersamaku.\" Ajak anak mengulang kalimat itu saat takut.",
          "Ajak anak berpuasa tanggal 9 dan 10 Muharram semampunya — boleh setengah hari untuk yang masih kecil.",
          "Hubungkan dengan rasa syukur: puasa adalah cara berterima kasih kepada Allah atas pertolongan-Nya.",
        ],
        en: [
          "Tell Prophet Musa's story focusing on his trust: \"My Lord is with me.\" Encourage your child to repeat it when they're scared.",
          "Invite your child to fast on 9 and 10 Muharram as they are able — half a day is fine for little ones.",
          "Link it to gratitude: fasting is a way of thanking Allah for His help.",
        ],
      },
    },
    cover: {
      focus: 390, bg: "beach",
      props: [{ k: "sandcastle", x: 450, s: 0.8 }],
      mo: [{ pose: "pose-33", x: 335 }],
      fx: ["sparkle"],
    },
    pages: [
      {
        text: { id: "Libur sekolah! Tanggal 8 Muharram, keluarga si kembar berlibur ke pantai. Ombak berdebur: byurrr… byurrr…", en: "School holidays! On 8 Muharram, the twins' family went to the beach. The waves crashed: whoosh… whoosh…" },
        scene: { focus: 390, bg: "beach", mo: [{ pose: "pose-20", x: 330 }, { who: "ais", pose: "wave-big", x: 455 }] },
      },
      {
        text: { id: "Mo membangun istana pasir yang tinggi. Ombak datang — BYUR! — istananya roboh. \"Lautnya kuat sekali, Abi!\"", en: "Mo built a tall sandcastle. A wave came — SPLASH! — and the castle crumbled. \"The sea is so strong, Abi!\"" },
        scene: { focus: 390, bg: "beach", props: [{ k: "bucket", x: 450, s: 0.8 }], mo: [{ pose: "pose-33", x: 335 }] },
      },
      {
        text: { id: "\"Laut memang kuat,\" kata Abi. \"Tapi Allah jauh lebih kuat. Mau dengar kisah laut yang terbelah?\" \"Mauuu!\"", en: "\"The sea is strong,\" said Abi. \"But Allah is far stronger. Want to hear the story of the sea that parted?\" \"Yesss!\"" },
        scene: { focus: 390, bg: "beach", mo: [{ who: "ayah", pose: "calm-sit", x: 330 }, { pose: "pose-26", x: 450 }] },
      },
      {
        text: { id: "\"Dahulu, Nabi Musa 'alaihissalam dan kaumnya dikejar oleh Firaun, raja yang sangat zalim, bersama tentaranya yang banyak sekali.\"", en: "\"Long ago, Prophet Musa, peace be upon him, and his people were chased by Pharaoh, a very cruel king, with a huge army.\"" },
        scene: { focus: 390, bg: "beach", time: "dusk", mo: [{ pose: "pose-33", x: 330 }, { who: "ais", pose: "scared-hide", x: 455 }] },
      },
      {
        text: { id: "\"Di depan mereka ada laut. Di belakang mereka ada tentara Firaun. Kaumnya ketakutan: Kita pasti tersusul!\"", en: "\"In front of them was the sea. Behind them was Pharaoh's army. His people were terrified: We'll surely be caught!\"" },
        scene: { focus: 390, bg: "beach", time: "dusk", mo: [{ who: "ais", pose: "scared-hide", x: 390 }] },
      },
      {
        text: { id: "\"Tapi Nabi Musa berkata dengan yakin: Sekali-kali tidak! Sesungguhnya Tuhanku bersamaku, Dia akan memberi petunjuk kepadaku.\"", en: "\"But Prophet Musa said, full of trust: Never! My Lord is with me; He will guide me.\"" },
        quote: {
          id: "\"Dia (Musa) menjawab: Sekali-kali tidak akan (tersusul); sesungguhnya Tuhanku bersamaku, Dia akan memberi petunjuk kepadaku.\" (QS. Asy-Syu'ara: 62)",
          en: "\"He said: No! Indeed, my Lord is with me; He will guide me.\" (Qur'an, Ash-Shu'ara 26:62)",
        },
        scene: { focus: 390, bg: "beach", time: "dusk", mo: [{ who: "ayah", pose: "hand-heart-kneel", x: 330 }, { pose: "pose-31", x: 450 }] },
      },
      {
        text: { id: "\"Allah memerintahkan Nabi Musa memukulkan tongkatnya ke laut. Laut pun terbelah! Ada jalan kering di tengahnya, dan airnya berdiri tinggi seperti gunung.\" Mo ternganga.", en: "\"Allah told Prophet Musa to strike the sea with his staff. And the sea parted! A dry path appeared in the middle, with water standing tall like mountains.\" Mo's mouth fell open." },
        quote: {
          id: "\"Lalu Kami wahyukan kepada Musa: Pukullah laut itu dengan tongkatmu. Maka terbelahlah lautan itu, dan setiap belahan seperti gunung yang besar.\" (QS. Asy-Syu'ara: 63)",
          en: "\"Then We inspired Musa: Strike the sea with your staff. And it parted, and each portion was like a great towering mountain.\" (Qur'an, Ash-Shu'ara 26:63)",
        },
        scene: { focus: 390, bg: "beach", time: "dusk", mo: [{ pose: "wow", x: 390 }], fx: ["sparkle"] },
      },
      {
        text: { id: "\"Nabi Musa dan kaumnya menyeberang dengan selamat. Hari itu tanggal 10 Muharram — hari Asyura.\" Ais menghembuskan napas lega. \"Alhamdulillah, selamat!\"", en: "\"Prophet Musa and his people crossed safely. That day was 10 Muharram — the day of Ashura.\" Ais let out a big breath. \"Alhamdulillah, they were saved!\"" },
        scene: { focus: 390, bg: "beach", time: "dusk", props: [{ k: "muharram10", x: 448, y: 300, s: 0.75 }], mo: [{ who: "ais", pose: "heart-hands-smile", x: 335 }] },
      },
      {
        text: { id: "\"Karena bersyukur, Nabi Musa berpuasa di hari itu,\" kata Abi. \"Rasulullah ﷺ juga berpuasa di hari Asyura, dan mengajak kita ikut berpuasa.\"", en: "\"To give thanks, Prophet Musa fasted on that day,\" said Abi. \"The Prophet ﷺ fasted on Ashura too, and encouraged us to fast.\"" },
        quote: {
          id: "Saat tiba di Madinah, Rasulullah ﷺ mendapati orang-orang berpuasa di hari Asyura karena hari itu Allah menyelamatkan Musa. Beliau bersabda, \"Aku lebih berhak atas Musa daripada kalian,\" lalu beliau berpuasa dan memerintahkan untuk berpuasa. (HR. Bukhari 2004)",
          en: "When he came to Madinah, the Prophet ﷺ found people fasting on Ashura because on that day Allah saved Musa. He said, \"I am closer to Musa than you,\" so he fasted it and told others to fast. (Bukhari 2004)",
        },
        scene: { focus: 390, bg: "beach", time: "dusk", mo: [{ who: "ayah", pose: "teach-point-kneel", x: 330 }, { pose: "pose-22", x: 450 }] },
      },
      {
        text: { id: "\"Puasa Asyura menghapus dosa setahun yang lalu,\" kata Umi. \"Dan Rasulullah ﷺ ingin berpuasa juga sehari sebelumnya, tanggal 9.\"", en: "\"The Ashura fast wipes away the sins of the year before,\" said Umi. \"And the Prophet ﷺ wanted to fast the day before it too, the 9th.\"" },
        quote: {
          id: "\"Puasa hari Asyura, aku berharap kepada Allah agar menghapus dosa setahun sebelumnya.\" (HR. Muslim 1162). \"Jika aku masih hidup tahun depan, sungguh aku akan berpuasa pada hari kesembilan.\" (HR. Muslim 1134)",
          en: "\"Fasting the day of Ashura, I hope Allah will wipe out the sins of the year before.\" (Muslim 1162). \"If I live until next year, I will fast on the ninth as well.\" (Muslim 1134)",
        },
        scene: { focus: 390, bg: "beach", time: "dusk", mo: [{ who: "umi", pose: "explain-hand", x: 330 }, { who: "ais", pose: "ok-wink", x: 450 }] },
      },
      {
        text: { id: "Ais menghitung dengan jari. \"Berarti kita puasa dua hari: tanggal 9 dan tanggal 10! Mulai besok!\"", en: "Ais counted on her fingers. \"So we fast two days: the 9th and the 10th! Starting tomorrow!\"" },
        scene: { focus: 390, bg: "beach", time: "dusk", props: [{ k: "muharram10", x: 448, y: 300, s: 0.75 }], mo: [{ who: "ais", pose: "checklist", x: 335 }] },
      },
      {
        text: { id: "Dini hari, mereka sahur di penginapan. Mo menguap lebar-lebar. \"Haaah… Mo kuat… Mo kuat…\"", en: "Before dawn, they ate sahur at the guesthouse. Mo gave an enormous yawn. \"Haaah… I'm strong… I'm strong…\"" },
        scene: { focus: 390, bg: "kitchen", time: "night", props: [{ k: "sahur", x: 445, y: 340, s: 0.6 }], mo: [{ pose: "pose-39", x: 335, move: "still" }], fx: ["zzz"] },
      },
      {
        text: { id: "Siangnya, pantai panas sekali. Mo melihat orang minum es kelapa. Glek. Tapi Mo ingat Nabi Musa yang yakin kepada Allah. \"Mo juga bisa sabar!\"", en: "At midday the beach was very hot. Mo saw people drinking iced coconut. Gulp. But he remembered Prophet Musa's trust in Allah. \"I can be patient too!\"" },
        scene: { focus: 390, bg: "beach", mo: [{ pose: "pose-27", x: 390 }], fx: ["sparkle"] },
      },
      {
        text: { id: "Saat Maghrib, mereka berbuka di tepi pantai sambil melihat matahari terbenam. Langit jingga, ombak tenang, kurmanya manis sekali.", en: "At sunset they broke their fast by the sea, watching the sun go down. Orange sky, calm waves, and the sweetest dates." },
        scene: { focus: 390, bg: "beach", time: "dusk", props: [{ k: "dates", x: 440, s: 0.7 }], mo: [{ pose: "thank-you", x: 335 }] },
      },
      {
        text: { id: "Mo berbisik, \"Ya Allah, terima kasih sudah menyelamatkan Nabi Musa. Dan terima kasih sudah menjaga kami.\"", en: "Mo whispered, \"O Allah, thank You for saving Prophet Musa. And thank You for looking after us.\"" },
        scene: { focus: 390, bg: "beach", time: "night", mo: [{ pose: "pose-12", x: 390, move: "still" }], fx: ["stars"] },
      },
      {
        text: { id: "Kalau kamu sedang takut, kalimat apa yang bisa membuatmu berani? 🌊", en: "When you're scared, what words can help you feel brave? 🌊" },
        scene: { focus: 390, bg: "beach", props: [{ k: "sandcastle", x: 450, s: 0.8 }], mo: [{ pose: "pose-27", x: 335 }], fx: ["sparkle"] },
      },
    ],
  },

  /* ───────────────────────── Isra Mi'raj: the gift of prayer ───────────────────────── */
  {
    slug: "hadiah-isra-miraj",
    pose: "baby-mo-wow.png",
    published: "2027-01-07",
    title: { id: "Hadiah dari Isra Mi'raj", en: "The Gift from Isra Mi'raj" },
    hook: {
      id: "\"Sholat lagi? Lima kali sehari itu banyak sekali!\" keluh Mo. Lalu Abi bercerita tentang perjalanan malam yang paling menakjubkan — dan ternyata dulu sholat bukan lima kali, tapi LIMA PULUH!",
      en: "\"Praying again? Five times a day is so many!\" Mo grumbles. Then Abi tells him about the most amazing night journey — and it turns out prayer wasn't five times at first, but FIFTY!",
    },
    anchor: { type: "parenting", slug: "mulai-sholat" },
    takeaway: {
      id: "Sholat lima waktu adalah hadiah langsung dari Allah pada malam Isra Mi'raj: lima kali dikerjakan, pahalanya seperti lima puluh.",
      en: "The five daily prayers are a gift straight from Allah on the night of Isra Mi'raj: we pray five, and the reward is like fifty.",
    },
    tags: ["isra mi'raj", "rajab", "sholat lima waktu", "masjidil aqsa", "bintang", "si kembar"],
    card: {
      title: { id: "Isra Mi'raj dan Semangat Sholat", en: "Isra Mi'raj and Loving Prayer" },
      items: {
        id: [
          "Ceritakan Isra Mi'raj di bawah langit malam: perjalanan ke Masjidil Aqsa lalu naik ke langit, dan hadiah sholat dari Allah.",
          "Bagian \"50 menjadi 5, pahalanya tetap 50\" disukai anak — pakai untuk menumbuhkan rasa syukur, bukan rasa berat.",
          "Buat kartu lima bintang: Subuh, Dzuhur, Ashar, Maghrib, Isya. Warnai satu bintang setiap selesai sholat.",
        ],
        en: [
          "Tell the story of Isra Mi'raj under the night sky: the journey to al-Aqsa, the ascent through the heavens, and Allah's gift of prayer.",
          "Children love \"fifty became five, but the reward is still fifty\" — use it to grow gratitude, not a sense of burden.",
          "Make a five-star card: Fajr, Dhuhr, Asr, Maghrib, Isha. Colour one star after each prayer.",
        ],
      },
    },
    cover: {
      focus: 390, bg: "garden", time: "night",
      props: [{ k: "rajab27", x: 448, y: 300, s: 0.75 }],
      mo: [{ pose: "wow", x: 335 }],
      fx: ["stars", "milkyway"],
    },
    pages: [
      {
        text: { id: "\"Allahu Akbar, Allahu Akbar…\" Adzan Ashar berkumandang. Mo cemberut. \"Aduh, sholat lagi? Tadi kan sudah!\"", en: "\"Allahu Akbar, Allahu Akbar…\" The call for Asr rang out. Mo pouted. \"Oh no, praying again? We already did!\"" },
        scene: { focus: 390, bg: "living", mo: [{ pose: "pose-23", x: 390 }], fx: ["notes"] },
      },
      {
        text: { id: "\"Sehari lima kali, Abi! Banyak sekali!\" kata Mo sambil mengangkat lima jarinya.", en: "\"Five times a day, Abi! That's so many!\" said Mo, holding up five fingers." },
        scene: { focus: 390, bg: "living", mo: [{ who: "ayah", pose: "think-chin-stand", x: 330 }, { pose: "pose-24", x: 450 }] },
      },
      {
        text: { id: "Abi tersenyum. \"Mau tahu rahasia? Dulu perintah sholat itu bukan lima kali… tapi LIMA PULUH kali sehari!\" \"HAH?!\"", en: "Abi smiled. \"Want to know a secret? At first, the command wasn't five prayers a day… it was FIFTY!\" \"WHAT?!\"" },
        scene: { focus: 390, bg: "living", mo: [{ who: "ayah", pose: "thumbs-up-kneel", x: 330 }, { pose: "pose-31", x: 450 }] },
      },
      {
        text: { id: "Malamnya, di bawah langit penuh bintang, Abi bercerita tentang Isra Mi'raj — perjalanan malam yang paling menakjubkan.", en: "That night, under a sky full of stars, Abi told them about Isra Mi'raj — the most amazing night journey ever." },
        scene: { focus: 390, bg: "garden", time: "night", mo: [{ who: "ayah", pose: "calm-sit", x: 330 }, { pose: "pose-06", x: 450 }], fx: ["stars", "milkyway"] },
      },
      {
        text: { id: "\"Dalam satu malam, Allah memperjalankan Rasulullah ﷺ dari Masjidil Haram di Mekah ke Masjidil Aqsa yang jauh sekali. Itu namanya Isra.\"", en: "\"In a single night, Allah took the Prophet ﷺ from al-Masjid al-Haram in Makkah to al-Masjid al-Aqsa, very far away. That is the Isra.\"" },
        quote: {
          id: "\"Mahasuci (Allah) yang telah memperjalankan hamba-Nya (Muhammad) pada malam hari dari Masjidil Haram ke Masjidil Aqsa yang telah Kami berkahi sekelilingnya…\" (QS. Al-Isra: 1)",
          en: "\"Exalted is He who took His servant by night from al-Masjid al-Haram to al-Masjid al-Aqsa, whose surroundings We have blessed…\" (Qur'an, Al-Isra 17:1)",
        },
        scene: { focus: 390, bg: "garden", time: "night", mo: [{ who: "ais", pose: "point-star", x: 390 }], fx: ["stars", "milkyway"] },
      },
      {
        text: { id: "\"Lalu Rasulullah ﷺ dinaikkan ke langit — tinggi, tinggi sekali, melewati tujuh lapis langit. Itu namanya Mi'raj.\" Mo mendongak jauh ke atas.", en: "\"Then the Prophet ﷺ was taken up into the heavens — high, so high, through seven heavens. That is the Mi'raj.\" Mo looked way, way up." },
        scene: { focus: 390, bg: "garden", time: "night", mo: [{ pose: "pose-15", x: 390 }], fx: ["stars", "milkyway", "shootingstar"] },
      },
      {
        text: { id: "\"Di sana, Allah memberikan hadiah istimewa untuk Rasulullah ﷺ dan untuk kita semua: perintah sholat, lima puluh kali sehari.\"", en: "\"There, Allah gave a special gift to the Prophet ﷺ and to all of us: the command to pray, fifty times a day.\"" },
        scene: { focus: 390, bg: "garden", time: "night", mo: [{ pose: "wow", x: 390 }], fx: ["stars", "sparkle"] },
      },
      {
        text: { id: "\"Dalam perjalanan kembali, Nabi Musa menyarankan Rasulullah ﷺ memohon keringanan, karena umatnya tidak akan sanggup. Rasulullah ﷺ pun memohon… berkali-kali.\"", en: "\"On the way back, Prophet Musa advised the Prophet ﷺ to ask for it to be made lighter, because his people would not manage. So the Prophet ﷺ asked… again and again.\"" },
        scene: { focus: 390, bg: "garden", time: "night", mo: [{ who: "ayah", pose: "teach-point-kneel", x: 330 }, { who: "ais", pose: "think-question", x: 450 }], fx: ["stars"] },
      },
      {
        text: { id: "\"Sampai akhirnya menjadi lima kali sehari. Tapi Allah berfirman: pahalanya tetap seperti lima puluh!\"", en: "\"Until finally it became five times a day. But Allah said: the reward is still like fifty!\"" },
        quote: {
          id: "Allah berfirman: \"Ia (sholat) lima, dan ia (nilainya) lima puluh. Ketetapan-Ku tidak akan berubah.\" (HR. Bukhari 349, Muslim 162)",
          en: "Allah said: \"They are five, and they are fifty. My word does not change.\" (Bukhari 349, Muslim 162)",
        },
        scene: { focus: 390, bg: "garden", time: "night", mo: [{ who: "ayah", pose: "hand-heart-kneel", x: 330 }, { pose: "pose-31", x: 450 }], fx: ["stars"] },
      },
      {
        text: { id: "Mo menghitung. \"Lima… tapi pahalanya lima puluh? Itu seperti beli satu dapat sepuluh!\" Semua tertawa.", en: "Mo worked it out. \"Five… but the reward of fifty? That's like buy one, get ten!\" Everyone laughed." },
        scene: { focus: 390, bg: "garden", time: "night", mo: [{ pose: "pose-02", x: 390 }], fx: ["confetti", "stars"] },
      },
      {
        text: { id: "\"Itulah kenapa sholat istimewa,\" kata Umi. \"Sholat adalah hadiah langsung dari Allah — waktu kita bisa berbicara dengan-Nya.\"", en: "\"That's why prayer is so special,\" said Umi. \"It's a gift straight from Allah — our time to talk to Him.\"" },
        scene: { focus: 390, bg: "living", time: "night", mo: [{ who: "umi", pose: "kneel-smile", x: 330 }, { who: "ais", pose: "heart-hands", x: 450 }] },
      },
      {
        text: { id: "Mo menggambar lima bintang di kertas: Subuh, Dzuhur, Ashar, Maghrib, Isya. \"Setiap selesai sholat, Mo warnai satu!\"", en: "Mo drew five stars on a piece of paper: Fajr, Dhuhr, Asr, Maghrib, Isha. \"After each prayer, I'll colour one in!\"" },
        scene: { focus: 390, bg: "living", time: "night", props: [{ k: "prayerstars", x: 450, y: 300, s: 0.5 }], mo: [{ pose: "pose-04", x: 335 }] },
      },
      {
        text: { id: "Besok paginya, adzan Subuh berkumandang. Mo bangun sambil mengucek mata. \"Hadiah pertama hari ini!\"", en: "The next morning, the call for Fajr rang out. Mo woke up rubbing his eyes. \"The first gift of the day!\"" },
        scene: { focus: 390, bg: "bedroom", time: "night", mo: [{ pose: "pose-26", x: 390 }], fx: ["notes"] },
      },
      {
        text: { id: "Sorenya, adzan Ashar terdengar. Kali ini Mo yang pertama berlari mengambil sajadah. \"Ayo, Ais! Hadiah ketiga!\"", en: "In the afternoon, the call for Asr sounded. This time Mo was first to run for his prayer mat. \"Come on, Ais! Gift number three!\"" },
        scene: { focus: 390, bg: "living", props: [{ k: "mat", x: 448 }], mo: [{ pose: "run", x: 335, move: "hop" }] },
      },
      {
        text: { id: "Abi tersenyum lebar. Hari itu Mo, Ais, dan Kak Adam sholat berjamaah dengan semangat — tidak ada yang cemberut lagi.", en: "Abi grinned. That day Mo, Ais and Kak Adam prayed together happily — no more pouting." },
        scene: { focus: 390, bg: "living", mo: [{ who: "adam", pose: "sholat-takbir", x: 335 }, { pose: "thank-you", x: 445 }], fx: ["sparkle"] },
      },
      {
        text: { id: "Sholat mana yang paling kamu suka, dan kenapa? ⭐", en: "Which prayer do you like best, and why? ⭐" },
        scene: { focus: 390, bg: "garden", time: "night", props: [{ k: "rajab27", x: 448, y: 300, s: 0.75 }], mo: [{ pose: "thank-you", x: 335 }], fx: ["stars", "milkyway"] },
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
