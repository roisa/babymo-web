import type { PicScene, PictureBook } from "./picture-books";
import { stage } from "./picture-books-playroom";

/**
 * Ramadan with the twins — a four-book series that follows one Ramadan from
 * the first lantern to Eid morning. Written to be read aloud by a parent or
 * alone by an early reader: short sentences, sound words to join in with,
 * and a picture that shows exactly what each page says. The Ramadan props
 * (fanous, garland, bedug, iftar, sahur, zakat, ramcal…) live in
 * components/story-art/elements/ramadan.tsx.
 */
const RAW: PictureBook[] = [
  /* ───────────────────────── 1. Welcoming Ramadan ───────────────────────── */
  {
    slug: "lampu-ramadan-si-kembar",
    pose: "baby-mo-pose-31.png",
    published: "2026-12-22",
    title: { id: "Lampu Ramadan Si Kembar", en: "The Twins' Ramadan Lights" },
    hook: {
      id: "Abi mengajak si kembar mencari bulan sabit paling tipis di langit. Kalau terlihat, besok Ramadan! Lalu keluarlah kotak berisi lampu-lampu ajaib…",
      en: "Abi takes the twins to look for the thinnest crescent moon in the sky. If they see it, Ramadan starts tomorrow! Then out comes a box full of magical lights…",
    },
    anchor: { type: "parenting", slug: "puasa-pertama" },
    takeaway: {
      id: "Ramadan disambut seperti tamu istimewa: dengan hati gembira, rumah yang dihias, dan niat untuk berbuat baik setiap hari.",
      en: "Ramadan is welcomed like a special guest: with happy hearts, a decorated home and a plan to do good every day.",
    },
    tags: ["ramadan", "puasa", "hilal", "keluarga", "si kembar", "menyambut ramadan"],
    card: {
      title: { id: "Menyambut Ramadan Bersama Anak", en: "Welcoming Ramadan with Your Child" },
      items: {
        id: [
          "Libatkan anak menghias rumah — lentera, untaian bulan bintang, atau gambar buatannya sendiri. Ramadan terasa milik mereka juga.",
          "Buat kalender 30 hari. Satu bintang untuk satu kebaikan: puasa, sholat, menolong, berbagi. Yang dihitung usahanya, bukan kesempurnaannya.",
          "Ceritakan hadits tentang pintu surga yang dibuka di bulan Ramadan, lalu tanyakan: \"Kebaikan apa yang ingin kamu lakukan bulan ini?\"",
        ],
        en: [
          "Let your child help decorate — lanterns, a crescent-and-star garland, or their own drawings. Ramadan feels like theirs too.",
          "Make a 30-day calendar. One star for one good deed: fasting, praying, helping, sharing. Count the effort, not perfection.",
          "Share the hadith about the gates of Paradise opening in Ramadan, then ask: \"What good thing would you like to do this month?\"",
        ],
      },
    },
    cover: {
      focus: 390, bg: "living", time: "night",
      props: [{ k: "garland", x: 390, y: 150 }, { k: "fanous", x: 475 }],
      mo: [{ pose: "pose-31", x: 330 }, { who: "ais", pose: "lantern", x: 440 }],
      fx: ["sparkle"],
    },
    pages: [
      {
        text: { id: "Sore itu, Abi mengajak si kembar ke halaman. \"Ayo kita lihat langit barat. Kalau bulan sabit paling tipis sudah muncul, besok Ramadan!\"", en: "That evening, Abi took the twins out to the garden. \"Let's look at the western sky. If the thinnest crescent moon appears, Ramadan starts tomorrow!\"" },
        scene: { focus: 380, bg: "garden", time: "dusk", props: [{ k: "telescope", x: 500 }], mo: [{ who: "ayah", pose: "idea-point-stand", x: 300 }, { pose: "pose-26", x: 420 }] },
      },
      {
        text: { id: "Mo dan Ais memandangi langit. Mata menyipit. Leher mendongak. \"Mana? Mana bulannya?\"", en: "Mo and Ais stared at the sky. Eyes squinting. Necks stretched. \"Where? Where's the moon?\"" },
        scene: { focus: 390, bg: "garden", time: "dusk", mo: [{ who: "ais", pose: "binoculars", x: 340 }, { pose: "pose-23", x: 450 }] },
      },
      {
        text: { id: "Langit berubah jingga, lalu ungu. Malamnya ada kabar: hilal sudah terlihat! Abi tersenyum lebar. \"Marhaban ya Ramadan!\"", en: "The sky turned orange, then purple. That night came the news: the new moon had been seen! Abi smiled wide. \"Marhaban ya Ramadan — welcome, Ramadan!\"" },
        scene: { focus: 380, bg: "living", time: "night", mo: [{ who: "ayah", pose: "arms-up-joy-sit", x: 300 }, { pose: "pose-02", x: 420 }], fx: ["confetti"] },
      },
      {
        text: { id: "Umi membuka kotak besar dari lemari. Isinya… lampu-lampu Ramadan! Ada lentera berkaca warna-warni dan untaian bulan bintang.", en: "Umi opened a big box from the cupboard. Inside were… Ramadan lights! A lantern with coloured glass and a string of moons and stars." },
        scene: { focus: 380, bg: "living", time: "night", props: [{ k: "box", x: 470 }, { k: "fanous", x: 505, y: 360, s: 0.8 }], mo: [{ who: "umi", pose: "open-arms-present", x: 290 }, { who: "ais", pose: "surprised", x: 400 }], fx: ["sparkle"] },
      },
      {
        text: { id: "Kak Adam yang tinggi menggantung untaian bulan dan bintang. Ais memberi aba-aba: \"Kiri sedikit… kanan sedikit… pas!\"", en: "Tall Kak Adam hung up the string of moons and stars. Ais gave directions: \"A bit left… a bit right… perfect!\"" },
        scene: { focus: 390, bg: "living", time: "night", props: [{ k: "garland", x: 390, y: 140 }], mo: [{ who: "adam", pose: "surprised-hands-up", x: 340 }, { who: "ais", pose: "idea-point", x: 450 }] },
      },
      {
        text: { id: "Mo menaruh lentera di dekat jendela. Klik! Kaca hijau, kuning, dan merah menyala. Ruangan jadi hangat, seperti dipeluk.", en: "Mo set the lantern by the window. Click! The green, yellow and red glass lit up. The room felt warm, like a hug." },
        scene: { focus: 390, bg: "living", time: "night", props: [{ k: "fanous", x: 480 }, { k: "garland", x: 390, y: 140 }], mo: [{ pose: "pose-07", x: 360 }], fx: ["sparkle"] },
      },
      {
        text: { id: "Lalu Abi menempel kalender di dinding. Ada tiga puluh kotak kosong. \"Satu kotak untuk satu hari Ramadan,\" kata Abi.", en: "Then Abi stuck a calendar on the wall. It had thirty empty boxes. \"One box for each day of Ramadan,\" said Abi." },
        scene: { focus: 345, bg: "living", time: "night", props: [{ k: "ramcal", x: 262, y: 270, s: 0.8 }], mo: [{ who: "ayah", pose: "idea-point-stand", x: 345 }] },
      },
      {
        text: { id: "\"Setiap kali kalian berbuat baik, tempel satu bintang,\" kata Umi. \"Puasa, sholat, menolong, berbagi — semuanya dapat bintang.\"", en: "\"Every time you do something good, stick on a star,\" said Umi. \"Fasting, praying, helping, sharing — they all earn a star.\"" },
        scene: { focus: 380, bg: "living", time: "night", props: [{ k: "garland", x: 380, y: 140 }], mo: [{ who: "umi", pose: "explain-hand", x: 280 }, { who: "ais", pose: "heart-hands", x: 390 }, { pose: "pose-26", x: 490 }] },
      },
      {
        text: { id: "Mo bertanya, \"Umi, kenapa Ramadan disambut seperti tamu?\" Umi menjawab, \"Karena Ramadan tamu yang paling istimewa. Ia datang membawa banyak hadiah dari Allah.\"", en: "Mo asked, \"Umi, why do we welcome Ramadan like a guest?\" Umi answered, \"Because Ramadan is the most special guest of all. It comes with lots of gifts from Allah.\"" },
        scene: { focus: 380, bg: "living", time: "night", props: [{ k: "fanous", x: 470 }], mo: [{ who: "umi", pose: "kneel-smile", x: 300 }, { pose: "pose-23", x: 420 }] },
      },
      {
        text: { id: "\"Rasulullah ﷺ bersabda, kalau Ramadan datang, pintu-pintu surga dibuka.\" Ais berbisik, \"Wah… semua pintunya, Umi?\"", en: "\"The Prophet ﷺ said that when Ramadan comes, the gates of Paradise are opened.\" Ais whispered, \"Wow… all of the gates, Umi?\"" },
        quote: {
          id: "\"Apabila Ramadan tiba, pintu-pintu surga dibuka, pintu-pintu neraka ditutup, dan setan-setan dibelenggu.\" (HR. Bukhari 1899, Muslim 1079)",
          en: "\"When Ramadan comes, the gates of Paradise are opened, the gates of Hell are closed, and the devils are chained.\" (Bukhari 1899, Muslim 1079)",
        },
        scene: { focus: 380, bg: "living", time: "night", mo: [{ who: "umi", pose: "explain-book", x: 300 }, { who: "ais", pose: "wonder-question", x: 420 }], fx: ["sparkle"] },
      },
      {
        text: { id: "Malam itu si kembar tidak bisa tidur. Mereka berbaring memandangi cahaya lentera yang menari di dinding kamar.", en: "That night the twins couldn't sleep. They lay watching the lantern light dancing on the bedroom wall." },
        scene: { focus: 380, bg: "bedroom", time: "night", props: [{ k: "fanous", x: 500, s: 0.8 }], mo: [{ pose: "pose-18", x: 310 }, { who: "ais", pose: "lie-chin-hands", x: 430 }], fx: ["stars"] },
      },
      {
        text: { id: "\"Mo, besok kita ikut sahur, ya?\" bisik Ais. \"Iya! Tapi bangunkan Mo, ya. Mo suka susah bangun,\" jawab Mo sambil nyengir.", en: "\"Mo, shall we join sahur tomorrow?\" whispered Ais. \"Yes! But wake me up, okay? I'm hard to wake,\" said Mo with a grin." },
        scene: { focus: 380, bg: "bedroom", time: "night", mo: [{ who: "ais", pose: "sit-chin-hands", x: 320 }, { pose: "pose-28", x: 440 }], fx: ["stars"] },
      },
      {
        text: { id: "Pukul tiga pagi, terdengar suara dari jalan: \"Sahuuur… sahuuur!\" Tung-tung-tung! Anak-anak kampung membangunkan warga.", en: "At three in the morning, voices came from the street: \"Sahuuur… sahuuur!\" Tung-tung-tung! The neighbourhood children were waking everyone up." },
        scene: { focus: 390, bg: "bedroom", time: "night", mo: [{ pose: "pose-40", x: 390 }], fx: ["notes", "stars"] },
      },
      {
        text: { id: "Mo membuka mata. Ais sudah duduk. Lampu dapur menyala, dan wangi nasi goreng Umi masuk ke kamar. Hmmm!", en: "Mo opened his eyes. Ais was already sitting up. The kitchen light was on, and the smell of Umi's fried rice drifted into the room. Mmm!" },
        scene: { focus: 380, bg: "bedroom", time: "night", mo: [{ who: "ais", pose: "wake-stretch", x: 320 }, { pose: "pose-37", x: 440 }] },
      },
      {
        text: { id: "Hari pertama Ramadan dimulai. Kotak nomor satu di kalender menunggu bintang pertamanya. \"Mo bisa!\" \"Ais juga bisa!\"", en: "The first day of Ramadan had begun. Box number one on the calendar was waiting for its first star. \"I can do it!\" \"Me too!\"" },
        scene: { focus: 380, bg: "living", time: "night", props: [{ k: "ramcal", x: 380, y: 222, s: 0.72 }], mo: [{ pose: "pose-27", x: 320 }, { who: "ais", pose: "cheer-fist", x: 440 }], fx: ["sparkle"] },
      },
      {
        text: { id: "Kebaikan apa yang ingin kamu lakukan untuk menyambut Ramadan? 🌙", en: "What good thing would you like to do to welcome Ramadan? 🌙" },
        scene: { focus: 390, bg: "living", time: "night", props: [{ k: "garland", x: 390, y: 140 }, { k: "fanous", x: 470 }], mo: [{ pose: "thank-you", x: 370 }], fx: ["stars"] },
      },
    ],
  },
  /* ───────────────────────── 2. First half-day fast ───────────────────────── */
  {
    slug: "puasa-bedug-si-kembar",
    pose: "baby-mo-pose-27.png",
    published: "2026-12-23",
    title: { id: "Puasa Bedug Si Kembar", en: "The Twins' Half-Day Fast" },
    hook: {
      id: "Hari ini Mo dan Ais belajar puasa sampai bedug Dzuhur. Pagi terasa gampang… sampai perut Mo mulai berbunyi kruuuk dan kulkas terlihat sangat menggoda.",
      en: "Today Mo and Ais are fasting until the noon drum. The morning feels easy… until Mo's tummy starts to rumble and the fridge looks very tempting.",
    },
    anchor: { type: "parenting", slug: "puasa-pertama" },
    takeaway: {
      id: "Puasa anak dimulai sedikit demi sedikit. Yang dilatih bukan hanya menahan lapar, tetapi kejujuran: Allah selalu melihat.",
      en: "Children learn to fast step by step. It trains more than patience with hunger — it trains honesty, because Allah always sees.",
    },
    tags: ["ramadan", "puasa", "sahur", "jujur", "si kembar", "puasa anak"],
    card: {
      title: { id: "Melatih Puasa Pertama Anak", en: "Your Child's First Fasts" },
      items: {
        id: [
          "Mulai dari \"puasa bedug\" (sampai Dzuhur), lalu naik pelan-pelan ke Ashar dan Maghrib sesuai kekuatan anak. Tidak perlu dipaksa.",
          "Ajak anak sahur walau setengah mengantuk — makanan bergizi, banyak minum air, dan cerita singkat tentang berkah sahur.",
          "Para sahabat dulu melatih anak-anaknya berpuasa dan memberi mainan untuk melupakan lapar (HR. Bukhari 1960). Siapkan kegiatan tenang: membaca, menggambar, tidur siang.",
        ],
        en: [
          "Start with a \"half-day fast\" until noon, then build up to mid-afternoon and sunset as your child is able. No need to force it.",
          "Bring your child to sahur even half-asleep — nourishing food, plenty of water and a short story about its blessing.",
          "The Companions trained their children to fast and gave them toys to forget their hunger (Bukhari 1960). Plan calm activities: reading, drawing, a nap.",
        ],
      },
    },
    cover: {
      focus: 390, bg: "kitchen", time: "night",
      props: [{ k: "sahur", x: 470, y: 330, s: 0.9 }],
      mo: [{ pose: "pose-27", x: 340 }, { who: "ais", pose: "drink-bottle", x: 450 }],
      fx: ["sparkle"],
    },
    pages: [
      {
        text: { id: "Sahur pertama! Mata Mo masih setengah tertutup. Kepalanya terangguk-angguk. Zzz… zzz…", en: "The very first sahur! Mo's eyes were still half shut. His head kept nodding. Zzz… zzz…" },
        scene: { focus: 390, bg: "kitchen", time: "night", props: [{ k: "sahur", x: 445, y: 340, s: 0.6 }], mo: [{ pose: "pose-39", x: 335, move: "still" }], fx: ["zzz"] },
      },
      {
        text: { id: "Umi mengusap kepalanya. \"Ayo makan dulu, Sayang. Sahur itu ada berkahnya. Biar kuat sampai siang.\"", en: "Umi stroked his head. \"Come and eat first, love. There's a blessing in sahur. It'll keep you strong till midday.\"" },
        quote: {
          id: "\"Bersahurlah kalian, karena dalam sahur itu ada keberkahan.\" (HR. Bukhari 1923, Muslim 1095)",
          en: "\"Eat sahur, for in sahur there is blessing.\" (Bukhari 1923, Muslim 1095)",
        },
        scene: { focus: 380, bg: "kitchen", time: "night", mo: [{ who: "umi", pose: "kneel-smile", x: 300 }, { pose: "pose-12", x: 420 }] },
      },
      {
        text: { id: "Mo makan nasi, telur, dan pisang. Ais minum air sampai habis. Glek, glek, glek! \"Biar kuat sampai bedug!\"", en: "Mo ate rice, an egg and a banana. Ais drank her water right to the bottom. Gulp, gulp, gulp! \"So we're strong till the drum!\"" },
        scene: { focus: 390, bg: "kitchen", time: "night", props: [{ k: "sahur", x: 400, y: 360, s: 0.8 }], mo: [{ pose: "pose-07", x: 330 }, { who: "ais", pose: "drink-bottle", x: 450 }] },
      },
      {
        text: { id: "Abi menjelaskan, \"Kalian masih kecil, jadi puasa sampai bedug Dzuhur dulu. Setelah makan siang, lanjut lagi kalau kuat.\"", en: "Abi explained, \"You're still little, so you'll fast until the noon drum first. After lunch, carry on again if you feel strong.\"" },
        scene: { focus: 380, bg: "kitchen", time: "night", mo: [{ who: "ayah", pose: "teach-point-kneel", x: 320 }, { pose: "pose-06", x: 440 }] },
      },
      {
        text: { id: "\"Imsak, imsak!\" Semua berhenti makan. Ais berniat dalam hati, \"Ya Allah, Ais mau puasa hari ini.\" Mo juga.", en: "\"Imsak, imsak!\" Everyone stopped eating. Ais made her intention in her heart: \"O Allah, I want to fast today.\" So did Mo." },
        scene: { focus: 380, bg: "kitchen", time: "night", mo: [{ who: "ais", pose: "dua-hands-closed", x: 330 }, { pose: "thank-you", x: 450 }], fx: ["sparkle"] },
      },
      {
        text: { id: "Pagi hari terasa biasa saja. Mo membangun menara balok. Ais menggambar. \"Puasa itu gampang!\" kata Mo bangga.", en: "The morning felt perfectly normal. Mo built a tower of blocks. Ais drew pictures. \"Fasting is easy!\" said Mo proudly." },
        scene: { focus: 380, bg: "living", props: [{ k: "blockstall", x: 470 }], mo: [{ pose: "pose-04", x: 380 }, { who: "ais", pose: "draw-floor", x: 280 }] },
      },
      {
        text: { id: "Pukul sepuluh, perut Mo berbunyi: kruuuk. Pukul sebelas: kruuuk-kruuuk! Mo berdiri di depan kulkas lama sekali.", en: "At ten o'clock, Mo's tummy went: grrrumble. At eleven: grrrumble-grrrumble! Mo stood in front of the fridge for a long, long time." },
        scene: { focus: 390, bg: "kitchen", mo: [{ pose: "pose-21", x: 390 }] },
      },
      {
        text: { id: "\"Ais, Ais…\" bisik Mo. \"Minum sedikiiit saja. Umi tidak lihat, kok.\"", en: "\"Ais, Ais…\" whispered Mo. \"Just a tiiiny sip. Umi won't see.\"" },
        scene: { focus: 380, bg: "kitchen", props: [{ k: "water", x: 262, s: 0.8 }], mo: [{ pose: "pose-16", x: 340 }, { who: "ais", pose: "surprised", x: 440 }] },
      },
      {
        text: { id: "Ais menggeleng. \"Umi memang tidak lihat. Tapi Allah melihat, Mo. Puasa itu rahasia kita dengan Allah.\"", en: "Ais shook her head. \"Umi might not see. But Allah sees, Mo. Fasting is a secret between us and Allah.\"" },
        quote: {
          id: "Allah berfirman (hadits qudsi): \"Setiap amal anak Adam untuk dirinya, kecuali puasa. Puasa itu untuk-Ku, dan Aku sendiri yang akan membalasnya.\" (HR. Bukhari 1904, Muslim 1151)",
          en: "Allah says (hadith qudsi): \"Every deed of the son of Adam is for himself, except fasting. It is for Me, and I Myself will reward it.\" (Bukhari 1904, Muslim 1151)",
        },
        scene: { focus: 380, bg: "kitchen", mo: [{ who: "ais", pose: "idea-point", x: 320 }, { pose: "pose-14", x: 440 }] },
      },
      {
        text: { id: "Mo menutup kulkas pelan-pelan. Ia mengepalkan tangan. \"Bismillah… Mo kuat. Mo pasti bisa!\"", en: "Mo closed the fridge slowly. He clenched his fists. \"Bismillah… I'm strong. I can do this!\"" },
        scene: { focus: 390, bg: "kitchen", mo: [{ pose: "pose-27", x: 390 }], fx: ["sparkle"] },
      },
      {
        text: { id: "Supaya lupa haus, Umi membacakan cerita di dekat kipas angin. Wuuung… wuuung… Lama-lama Ais tertidur.", en: "To help them forget their thirst, Umi read them a story by the fan. Whirr… whirr… Little by little, Ais fell asleep." },
        scene: { focus: 380, bg: "living", mo: [{ who: "umi", pose: "read-story", x: 290 }, { who: "ais", pose: "sleep-pillow", x: 410, move: "still" }], fx: ["zzz"] },
      },
      {
        text: { id: "Lalu… DUG! DUG! DUG! Bedug masjid berbunyi, adzan Dzuhur berkumandang. \"Sudah waktunya!\" teriak Mo.", en: "Then… DUM! DUM! DUM! The mosque drum boomed and the call to the noon prayer rang out. \"It's time!\" shouted Mo." },
        scene: { focus: 445, bg: "mosque", props: [{ k: "bedug", x: 368, s: 0.52, flip: true }], mo: [{ pose: "yeyy", x: 445 }], fx: ["notes"] },
      },
      {
        text: { id: "Sesudah sholat Dzuhur, mereka makan siang. Nasinya hangat, sayurnya segar. \"Alhamdulillah! Ini nasi paling enak sedunia!\" kata Mo.", en: "After the noon prayer they had lunch. Warm rice, fresh vegetables. \"Alhamdulillah! This is the yummiest rice in the world!\" said Mo." },
        scene: { focus: 380, bg: "kitchen", mo: [{ pose: "pose-37", x: 330 }, { who: "ais", pose: "eat-bowl", x: 450 }], fx: ["hearts"] },
      },
      {
        text: { id: "Sorenya, mereka mencoba lagi sampai Maghrib. Haus, lapar… tapi mereka saling menyemangati: \"Sedikit lagi!\"", en: "That afternoon they tried again until sunset. Thirsty, hungry… but they cheered each other on: \"Nearly there!\"" },
        scene: { focus: 380, bg: "living", time: "dusk", mo: [{ who: "ais", pose: "cheer-fist", x: 330 }, { pose: "pose-25", x: 450 }] },
      },
      {
        text: { id: "Malamnya, Umi menempel bintang pertama di kalender. \"Besok kita coba lagi?\" tanya Umi. \"Siap!\" jawab Ais.", en: "That night, Umi stuck the first star on the calendar. \"Shall we try again tomorrow?\" asked Umi. \"Ready!\" said Ais." },
        scene: { focus: 390, bg: "living", time: "night", props: [{ k: "ramcal1", x: 405, y: 222, s: 0.66 }], mo: [{ who: "umi", pose: "thumbs-up", x: 330 }, { who: "ais", pose: "heart-hands-smile", x: 450 }], fx: ["sparkle"] },
      },
      {
        text: { id: "Apa yang bisa membantumu tetap kuat dan jujur, walaupun tidak ada yang melihat? ⭐", en: "What helps you stay strong and honest, even when nobody is watching? ⭐" },
        scene: { focus: 390, bg: "living", time: "night", props: [{ k: "fanous", x: 470 }], mo: [{ pose: "pose-04", x: 380 }], fx: ["stars"] },
      },
    ],
  },
  /* ───────────────────────── 3. Waiting for iftar ───────────────────────── */
  {
    slug: "menunggu-bedug-maghrib",
    pose: "baby-mo-pose-26.png",
    published: "2026-12-24",
    title: { id: "Menunggu Bedug Maghrib", en: "Waiting for the Sunset Drum" },
    hook: {
      id: "Hari ini si kembar puasa sampai Maghrib! Sambil menunggu, mereka membuat kolak pisang bersama Umi — separuh untuk keluarga, separuh untuk dibagi. Siapa yang akan menerimanya?",
      en: "Today the twins are fasting all the way to sunset! While they wait, they make banana kolak with Umi — half for the family, half to share. Who will it go to?",
    },
    anchor: { type: "doa", slug: "berbuka-puasa" },
    takeaway: {
      id: "Menunggu berbuka adalah waktu untuk bersabar, berbagi, dan berdoa. Kurma dan air putih terasa paling nikmat setelah menahan diri seharian.",
      en: "Waiting for iftar is a time to be patient, to share and to make du'a. Dates and water taste best of all after a whole day of holding back.",
    },
    tags: ["ramadan", "berbuka", "takjil", "berbagi", "doa berbuka", "si kembar"],
    card: {
      title: { id: "Momen Berbuka Bersama Anak", en: "Iftar Moments with Your Child" },
      items: {
        id: [
          "Ajak anak memasak takjil sederhana dan membagikannya ke tetangga atau masjid. Pahala memberi makan orang berpuasa sangat besar.",
          "Biasakan berbuka dengan kurma atau air putih seperti Rasulullah ﷺ, baru setelah itu makan besar.",
          "Hafalkan doa berbuka bersama: \"Dzahabazh-zhama'u wabtallatil-'uruqu wa tsabatal-ajru insya Allah.\" Pakai irama yang mudah diingat anak.",
        ],
        en: [
          "Cook a simple iftar treat together and share it with a neighbour or the mosque. Feeding a fasting person carries a great reward.",
          "Break the fast with dates or water like the Prophet ﷺ, then have the main meal.",
          "Learn the iftar du'a together: \"Dhahaba al-zama'u wabtallat al-'uruqu wa thabata al-ajru in sha Allah.\" Sing it to an easy tune.",
        ],
      },
    },
    cover: {
      focus: 390, bg: "living", time: "dusk",
      props: [{ k: "iftar", x: 440, s: 0.5 }],
      mo: [{ pose: "pose-26", x: 330 }],
      fx: ["sparkle"],
    },
    pages: [
      {
        text: { id: "Hari kelima belas Ramadan. Lihat kalendernya — sudah lima belas bintang! Hari ini Mo dan Ais mau puasa sampai Maghrib.", en: "The fifteenth day of Ramadan. Look at the calendar — fifteen stars already! Today Mo and Ais want to fast all the way to sunset." },
        scene: { focus: 390, bg: "living", props: [{ k: "ramcalhalf", x: 395, y: 222, s: 0.66 }], mo: [{ pose: "pose-29", x: 330 }, { who: "ais", pose: "cheer-fist", x: 450 }], fx: ["sparkle"] },
      },
      {
        text: { id: "Sore hari, Umi mengajak si kembar ke dapur. \"Kita bikin kolak pisang. Separuh untuk kita, separuh untuk dibagi.\"", en: "In the afternoon, Umi called the twins into the kitchen. \"Let's make banana kolak. Half for us, half to share.\"" },
        scene: { focus: 390, bg: "kitchen", time: "dusk", mo: [{ who: "umi", pose: "stir-pot", x: 330 }, { who: "ais", pose: "chef-bowl", x: 450 }] },
      },
      {
        text: { id: "Mo memotong pisang. Ais menuang santan. Wangi gula merah memenuhi dapur. Hmmm… harum sekali!", en: "Mo sliced the bananas. Ais poured in the coconut milk. The smell of palm sugar filled the kitchen. Mmm… so good!" },
        scene: { focus: 390, bg: "kitchen", time: "dusk", props: [{ k: "kolak", x: 448, s: 0.8 }], mo: [{ pose: "pose-07", x: 335 }] },
      },
      {
        text: { id: "Perut Mo bernyanyi lagi: kruuuk. \"Umi, kolaknya boleh dimakan sekarang?\" Umi tertawa. \"Belum, Sayang. Tunggu Maghrib, ya. Sabar itu ada hadiahnya.\"", en: "Mo's tummy sang again: grrrumble. \"Umi, can we eat the kolak now?\" Umi laughed. \"Not yet, love. Wait for sunset. Patience has its reward.\"" },
        scene: { focus: 390, bg: "kitchen", time: "dusk", mo: [{ who: "umi", pose: "shrug-smile", x: 330 }, { pose: "pose-05", x: 450 }] },
      },
      {
        text: { id: "Kak Adam membawa semangkuk kolak untuk Pak Rahmat, tetangga yang tinggal sendirian. Mo ikut di sampingnya.", en: "Kak Adam carried a bowl of kolak for Pak Rahmat, the neighbour who lives on his own. Mo walked beside him." },
        scene: { focus: 390, bg: "street", time: "dusk", mo: [{ who: "adam", pose: "carry-bowl", x: 340 }, { pose: "pose-32", x: 450 }] },
      },
      {
        text: { id: "Tok, tok, tok. \"Assalamu'alaikum, Pak Rahmat! Ini kolak untuk berbuka,\" kata Mo. Pak Rahmat tersenyum sampai matanya berkaca-kaca. \"Terima kasih, Nak.\"", en: "Knock, knock, knock. \"Assalamu'alaikum, Pak Rahmat! Here's some kolak for iftar,\" said Mo. Pak Rahmat smiled so much his eyes went shiny. \"Thank you, son.\"" },
        scene: { focus: 390, bg: "street", time: "dusk", mo: [{ who: "adam", pose: "offer", x: 335 }, { pose: "pose-22", x: 445 }], fx: ["hearts"] },
      },
      {
        text: { id: "Di jalan pulang, Mo ingat kata Abi: orang yang memberi makan orang berpuasa mendapat pahala seperti pahala puasanya.", en: "On the way home, Mo remembered what Abi had said: whoever gives food to a fasting person gets a reward like that person's fast." },
        quote: {
          id: "\"Barangsiapa memberi makan orang yang berbuka puasa, ia mendapat pahala seperti pahala orang yang berpuasa itu, tanpa mengurangi pahalanya sedikit pun.\" (HR. Tirmidzi 807, hasan sahih)",
          en: "\"Whoever gives food to a fasting person to break their fast will have a reward like theirs, without their reward being reduced at all.\" (Tirmidhi 807, hasan sahih)",
        },
        scene: { focus: 390, bg: "street", time: "dusk", mo: [{ pose: "pose-14", x: 390 }], fx: ["hearts"] },
      },
      {
        text: { id: "Lalu Ais dan Umi mengantar sisa kolak ke masjid. Di teras ada meja panjang penuh takjil untuk siapa saja yang lewat.", en: "Then Ais and Umi took the rest of the kolak to the mosque. On the porch stood a long table full of iftar treats for anyone passing by." },
        scene: { focus: 390, bg: "mosque", time: "dusk", props: [{ k: "iftar", x: 440, s: 0.5 }], mo: [{ who: "ais", pose: "gift-box", x: 335 }] },
      },
      {
        text: { id: "Pukul lima. Waktu terasa berjalan pelan sekali. Mo menghitung ubin. Ais menghitung awan. \"Satu… dua… tiga…\"", en: "Five o'clock. Time felt so slow. Mo counted the floor tiles. Ais counted the clouds. \"One… two… three…\"" },
        scene: { focus: 390, bg: "living", time: "dusk", mo: [{ pose: "pose-06", x: 330 }, { who: "ais", pose: "sit-chin-hands", x: 455 }] },
      },
      {
        text: { id: "Pukul setengah enam. Kurma, air putih, kolak, dan gorengan sudah siap di meja. Tidak ada yang menyentuh. Semua menunggu.", en: "Half past five. Dates, water, kolak and fried snacks were ready on the table. Nobody touched them. Everyone waited." },
        scene: { focus: 390, bg: "living", time: "dusk", props: [{ k: "iftar", x: 440, s: 0.5 }], mo: [{ pose: "pose-36", x: 330 }] },
      },
      {
        text: { id: "\"Sebentar lagi,\" bisik Abi. \"Menunggu berbuka itu waktu yang baik untuk berdoa. Minta apa saja kepada Allah.\"", en: "\"Not long now,\" whispered Abi. \"Waiting for iftar is a good time for du'a. Ask Allah for anything.\"" },
        scene: { focus: 390, bg: "living", time: "dusk", mo: [{ who: "ayah", pose: "dua-kneel", x: 330 }, { pose: "pose-12", x: 450 }], fx: ["sparkle"] },
      },
      {
        text: { id: "Lalu… DUG! DUG! DUG! \"Allahu Akbar, Allahu Akbar…\" Adzan Maghrib! \"Alhamdulillah!\" seru Mo dan Ais bersamaan.", en: "Then… DUM! DUM! DUM! \"Allahu Akbar, Allahu Akbar…\" The sunset call to prayer! \"Alhamdulillah!\" cried Mo and Ais together." },
        scene: { focus: 390, bg: "living", time: "dusk", mo: [{ pose: "yeyy", x: 330 }, { who: "ais", pose: "jump-joy", x: 455 }], fx: ["notes", "confetti"] },
      },
      {
        text: { id: "Mereka berbuka dengan kurma dan air putih, seperti Rasulullah ﷺ. Lalu membaca doa bersama-sama: \"Dzahabazh-zhama'u wabtallatil-'uruqu wa tsabatal-ajru insya Allah.\"", en: "They broke their fast with dates and water, like the Prophet ﷺ. Then they said the du'a together: \"Dhahaba al-zama'u wabtallat al-'uruqu wa thabata al-ajru in sha Allah.\"" },
        quote: {
          id: "\"Telah hilang dahaga, telah basah urat-urat, dan telah tetap pahala, insya Allah.\" (HR. Abu Dawud 2357)",
          en: "\"The thirst is gone, the veins are moistened, and the reward is certain, if Allah wills.\" (Abu Dawud 2357)",
        },
        scene: { focus: 390, bg: "living", time: "dusk", props: [{ k: "dates", x: 438, s: 0.7 }], mo: [{ pose: "thank-you", x: 335 }] },
      },
      {
        text: { id: "Air putih itu terasa paling segar sedunia. Kurmanya terasa paling manis. \"Umi… puasa bikin semuanya jadi enak!\"", en: "That water was the freshest in the whole world. The dates were the sweetest ever. \"Umi… fasting makes everything taste amazing!\"" },
        scene: { focus: 390, bg: "living", time: "dusk", mo: [{ who: "umi", pose: "touched-cheek", x: 330 }, { pose: "pose-37", x: 450 }], fx: ["hearts"] },
      },
      {
        text: { id: "Malamnya, Mo menempel bintang di kalender. Lalu ia berbisik, \"Ya Allah, semoga Pak Rahmat juga berbuka dengan senang.\"", en: "That night, Mo stuck a star on the calendar. Then he whispered, \"O Allah, I hope Pak Rahmat had a happy iftar too.\"" },
        scene: { focus: 390, bg: "living", time: "night", props: [{ k: "ramcalhalf", x: 300, y: 270, s: 0.7 }], mo: [{ pose: "thank-you", x: 395 }], fx: ["stars"] },
      },
      {
        text: { id: "Dengan siapa kamu ingin berbagi makanan saat berbuka nanti? 🌙", en: "Who would you like to share food with at iftar? 🌙" },
        scene: { focus: 390, bg: "living", time: "dusk", props: [{ k: "iftar", x: 440, s: 0.5 }], mo: [{ pose: "pose-41", x: 330 }], fx: ["sparkle"] },
      },
    ],
  },

  /* ───────────────────────── 4. Zakat and the night of takbir ───────────────────────── */
  {
    slug: "malam-takbiran-si-kembar",
    pose: "baby-mo-pose-42.png",
    published: "2026-12-25",
    title: { id: "Malam Takbiran Si Kembar", en: "The Twins' Night of Takbir" },
    hook: {
      id: "Ramadan hampir selesai, dan Ais sedih melepasnya. Tapi masih ada tugas penting sebelum Lebaran: membawa beras zakat ke masjid. Lalu malam penuh obor dan takbir pun tiba!",
      en: "Ramadan is nearly over, and Ais is sad to see it go. But there's one important job before Eid: taking the zakat rice to the mosque. Then comes a night of torches and takbir!",
    },
    anchor: { type: "parenting", slug: "anak-tidak-mau-berbagi" },
    takeaway: {
      id: "Zakat fitrah memastikan tidak ada yang lapar di hari raya. Idul Fitri dirayakan dengan takbir, saling memaafkan, dan membawa kebiasaan baik Ramadan.",
      en: "Zakat al-fitr makes sure no one is hungry on Eid. Eid is celebrated with takbir, forgiving one another and keeping Ramadan's good habits.",
    },
    tags: ["ramadan", "zakat fitrah", "takbiran", "idul fitri", "lebaran", "saling memaafkan", "si kembar"],
    card: {
      title: { id: "Zakat dan Lebaran Bersama Anak", en: "Zakat and Eid with Your Child" },
      items: {
        id: [
          "Libatkan anak saat menunaikan zakat fitrah: menakar beras, menyebut nama setiap anggota keluarga, dan mengantarnya ke amil.",
          "Ajarkan lafaz takbir dan ajak ikut takbiran dengan aman — pegangi tangannya, jauhkan dari api dan petasan.",
          "Di pagi Idul Fitri, beri contoh meminta maaf lebih dulu kepada anak. Anak belajar memaafkan dari orang tua yang mau meminta maaf.",
        ],
        en: [
          "Involve your child in paying zakat al-fitr: measuring the rice, naming each family member, and taking it to the collectors.",
          "Teach the words of the takbir and join the takbir walk safely — hold hands and stay clear of flames and firecrackers.",
          "On Eid morning, model it by apologising to your child first. Children learn to forgive from parents who say sorry.",
        ],
      },
    },
    cover: {
      focus: 390, bg: "street", time: "night",
      props: [{ k: "crescent", x: 430, y: 150, s: 0.5 }, { k: "obor", x: 455, s: 0.7 }],
      mo: [{ pose: "pose-31", x: 335 }],
      fx: ["stars"],
    },
    pages: [
      {
        text: { id: "Lihat kalender si kembar! Tiga puluh kotak, tiga puluh bintang. Ramadan hampir selesai.", en: "Look at the twins' calendar! Thirty boxes, thirty stars. Ramadan is nearly over." },
        scene: { focus: 390, bg: "living", props: [{ k: "ramcalfull", x: 395, y: 222, s: 0.66 }], mo: [{ pose: "pose-31", x: 330 }, { who: "ais", pose: "trophy-cheer", x: 450 }], fx: ["sparkle"] },
      },
      {
        text: { id: "Tapi Ais tiba-tiba sedih. \"Abi, kenapa Ramadan harus pergi? Ais suka Ramadan.\"", en: "But Ais suddenly felt sad. \"Abi, why does Ramadan have to go? I love Ramadan.\"" },
        scene: { focus: 390, bg: "living", mo: [{ who: "ayah", pose: "kneel-arms-open", x: 330 }, { who: "ais", pose: "sad-tears", x: 450 }] },
      },
      {
        text: { id: "Abi tersenyum. \"Ramadan memang pergi, tapi kebiasaan baiknya boleh kita bawa terus. Sholat, berbagi, sabar — semuanya ikut pulang bersama kita.\"", en: "Abi smiled. \"Ramadan does leave, but we can keep its good habits. Praying, sharing, being patient — they all come home with us.\"" },
        scene: { focus: 390, bg: "living", mo: [{ who: "ayah", pose: "hand-heart-kneel", x: 330 }, { who: "ais", pose: "arms-open-welcome", x: 450 }], fx: ["hearts"] },
      },
      {
        text: { id: "\"Sebelum Lebaran, ada satu tugas penting,\" kata Abi sambil menunjuk karung beras. \"Zakat fitrah!\"", en: "\"Before Eid, there's one important job,\" said Abi, pointing to a sack of rice. \"Zakat al-fitr!\"" },
        scene: { focus: 378, bg: "living", props: [{ k: "zakat", x: 298, s: 0.55 }], mo: [{ who: "ayah", pose: "idea-point-stand", x: 378 }] },
      },
      {
        text: { id: "\"Kenapa kita memberi beras, Abi?\" tanya Mo. \"Supaya di hari raya tidak ada satu pun orang yang lapar. Semua ikut bahagia.\"", en: "\"Why do we give rice, Abi?\" asked Mo. \"So that on Eid nobody at all goes hungry. Everyone gets to be happy.\"" },
        quote: {
          id: "\"Rasulullah ﷺ mewajibkan zakat fitrah sebagai pembersih bagi orang yang berpuasa dari perkataan sia-sia dan kotor, dan sebagai makanan bagi orang-orang miskin.\" (HR. Abu Dawud 1609)",
          en: "\"The Messenger of Allah ﷺ made zakat al-fitr obligatory to purify the one who fasted from idle and bad talk, and to feed the poor.\" (Abu Dawud 1609)",
        },
        scene: { focus: 390, bg: "living", mo: [{ who: "ayah", pose: "teach-point-kneel", x: 330 }, { pose: "pose-23", x: 450 }] },
      },
      {
        text: { id: "Mo membantu menakar beras. Satu takaran untuk Abi, Umi, Kak Adam, Mo, dan Ais. \"Semua orang di rumah kebagian!\"", en: "Mo helped measure the rice. One scoop each for Abi, Umi, Kak Adam, Mo and Ais. \"Everyone in our house has a share!\"" },
        scene: { focus: 390, bg: "living", props: [{ k: "zakat", x: 450, s: 0.55 }], mo: [{ pose: "pose-36", x: 335 }] },
      },
      {
        text: { id: "Mereka membawanya ke masjid. Karungnya berat, jadi Mo dan Ais menariknya bersama-sama. \"Hup! Hup! Hup!\"", en: "They took it to the mosque. The sack was heavy, so Mo and Ais pulled it together. \"Heave! Heave! Heave!\"" },
        scene: { focus: 390, bg: "mosque", props: [{ k: "zakat", x: 392, s: 0.45 }], mo: [{ pose: "pose-27", x: 330 }, { who: "ais", pose: "excited-fists", x: 455 }] },
      },
      {
        text: { id: "Pengurus masjid tersenyum. \"Beras ini akan sampai ke keluarga yang membutuhkan malam ini juga.\" Abi berterima kasih. Ais tersenyum lega.", en: "The mosque helper smiled. \"This rice will reach families in need this very night.\" Abi thanked him. Ais smiled with relief." },
        scene: { focus: 390, bg: "mosque", mo: [{ who: "ayah", pose: "hands-together-thanks", x: 330 }, { who: "ais", pose: "heart-hands-smile", x: 450 }], fx: ["hearts"] },
      },
      {
        text: { id: "Malamnya, bulan sabit tipis muncul lagi di langit. \"Hilal Syawal!\" seru Kak Adam. \"Besok Lebaran!\"", en: "That night, a thin crescent moon appeared in the sky again. \"The Shawwal moon!\" shouted Kak Adam. \"It's Eid tomorrow!\"" },
        scene: { focus: 390, bg: "street", time: "night", props: [{ k: "crescent", x: 395, y: 150, s: 0.5 }], mo: [{ who: "adam", pose: "clap-cheer", x: 335 }, { pose: "pose-02", x: 445 }], fx: ["stars"] },
      },
      {
        text: { id: "Dari masjid terdengar takbir: \"Allahu Akbar, Allahu Akbar, Allahu Akbar. Laa ilaaha illallahu wallahu akbar. Allahu Akbar wa lillahil hamd.\" Mo ikut melantunkannya.", en: "The takbir rang out from the mosque: \"Allahu Akbar, Allahu Akbar, Allahu Akbar. La ilaha illallahu wallahu akbar. Allahu Akbar wa lillahil hamd.\" Mo joined in." },
        quote: {
          id: "\"…dan hendaklah kamu mencukupkan bilangannya dan mengagungkan Allah atas petunjuk-Nya yang diberikan kepadamu, agar kamu bersyukur.\" (QS. Al-Baqarah: 185)",
          en: "\"…so that you complete the number of days and glorify Allah for guiding you, and so that you may be grateful.\" (Qur'an, Al-Baqarah 2:185)",
        },
        scene: { focus: 390, bg: "mosque", time: "night", mo: [{ pose: "pose-22", x: 390 }], fx: ["notes", "stars"] },
      },
      {
        text: { id: "Anak-anak kampung berkeliling membawa obor. Mo ikut, tangannya digandeng erat oleh Kak Adam. Nyala apinya menari-nari.", en: "The neighbourhood children walked around carrying torches. Mo came too, holding Kak Adam's hand tight. The flames danced and flickered." },
        scene: { focus: 380, bg: "street", time: "night", props: [{ k: "obor", x: 470, s: 0.6 }], mo: [{ who: "adam", pose: "hold-hand-down", x: 335 }, { pose: "pose-42", x: 425 }], fx: ["stars"] },
      },
      {
        text: { id: "Bedug masjid dipukul bergantian. DUG-DUG-DUG! Takbir menggema sampai larut malam. \"Allahu Akbar!\" seru Mo.", en: "People took turns beating the mosque drum. DUM-DUM-DUM! The takbir echoed late into the night. \"Allahu Akbar!\" called Mo." },
        scene: { focus: 445, bg: "mosque", time: "night", props: [{ k: "bedug", x: 368, s: 0.52, flip: true }], mo: [{ pose: "yeyy", x: 445 }], fx: ["notes", "stars"] },
      },
      {
        text: { id: "Pagi Idul Fitri, rumah wangi opor dan ketupat. Semua memakai baju terbaik. \"Mo ganteng, kan, Umi?\"", en: "On Eid morning, the house smelled of chicken curry and ketupat. Everyone wore their best clothes. \"Don't I look smart, Umi?\"" },
        scene: { focus: 390, bg: "living", props: [{ k: "ketupat", x: 395 }], mo: [{ who: "umi", pose: "cheer-happy", x: 330 }, { pose: "pose-04", x: 450 }] },
      },
      {
        text: { id: "Sebelum berangkat sholat Id, Mo mendekati Umi. Ia menunduk. \"Umi… maafkan Mo, ya, kalau Mo sering nakal.\"", en: "Before leaving for the Eid prayer, Mo went up to Umi. He looked down. \"Umi… I'm sorry for all the times I was naughty.\"" },
        scene: { focus: 390, bg: "living", mo: [{ who: "umi", pose: "kneel-smile", x: 330 }, { pose: "pose-14", x: 450 }] },
      },
      {
        text: { id: "Umi membuka tangannya lebar-lebar. \"Umi juga minta maaf, Sayang. Taqabbalallahu minna wa minkum — semoga Allah menerima amal kita semua.\"", en: "Umi opened her arms wide. \"I'm sorry too, love. Taqabbalallahu minna wa minkum — may Allah accept from us and from you.\"" },
        scene: { focus: 390, bg: "living", props: [{ k: "ketupat", x: 395 }], mo: [{ who: "umi", pose: "open-arms-present", x: 330 }, { pose: "pose-41", x: 450 }], fx: ["hearts"] },
      },
      {
        text: { id: "Kebiasaan baik apa dari Ramadan yang ingin kamu bawa terus? 🌙", en: "Which good habit from Ramadan would you like to keep? 🌙" },
        scene: { focus: 390, bg: "living", props: [{ k: "ketupat", x: 395 }], mo: [{ pose: "thank-you", x: 330 }, { who: "ais", pose: "heart-hands", x: 455 }], fx: ["sparkle"] },
      },
    ],
  },
];

/** Space out groups for the phone page; a lone character keeps its spot so
 *  the prop beside it (iftar table, bedug, calendar…) stays in view. */
const lay = (sc: PicScene): PicScene => ((sc.mo?.length ?? 0) > 1 ? stage(sc) : sc);

export const RAMADAN_BOOKS: PictureBook[] = RAW.map((b) => ({
  ...b,
  cover: lay(b.cover),
  pages: b.pages.map((p) => ({ ...p, scene: lay(p.scene) })),
}));
