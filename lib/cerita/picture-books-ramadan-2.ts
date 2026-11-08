import type { PicScene, PictureBook } from "./picture-books";
import { stage } from "./picture-books-playroom";

/**
 * Ramadan with the twins, part two — five more funny, true-to-life days of
 * Ramadan, each teaching one thing children really ask about: forgetting
 * and drinking, fasting breath, over-buying at the takjil market, learning
 * the first hijaiyah letters, and the search for Lailatul Qadar.
 */
const RAW: PictureBook[] = [
  /* ───────────────────────── 1. Mo forgets he is fasting ───────────────────────── */
  {
    slug: "mo-lupa-sedang-puasa",
    pose: "baby-mo-pose-40.png",
    published: "2026-12-26",
    title: { id: "Mo Lupa Sedang Puasa", en: "Mo Forgot He Was Fasting" },
    hook: {
      id: "Siang yang panas, Mo kehausan sehabis main bola — glek, glek, glek! Lalu Ais berteriak, \"MO! Kamu kan puasa!\" Apakah puasa Mo batal?",
      en: "On a hot afternoon, Mo is so thirsty after football — gulp, gulp, gulp! Then Ais shouts, \"MO! You're fasting!\" Has Mo broken his fast?",
    },
    anchor: { type: "parenting", slug: "puasa-pertama" },
    takeaway: {
      id: "Makan atau minum karena lupa tidak membatalkan puasa — Allah yang memberi makan dan minum. Begitu ingat, berhenti, dan ingatkan orang lain dengan lembut.",
      en: "Eating or drinking by mistake doesn't break the fast — it was Allah who fed you. Stop as soon as you remember, and remind others gently.",
    },
    tags: ["ramadan", "puasa", "lupa", "jujur", "mengingatkan", "si kembar"],
    card: {
      title: { id: "Saat Anak Lupa Sedang Puasa", en: "When Your Child Forgets They're Fasting" },
      items: {
        id: [
          "Tanyakan dengan tenang: \"Tadi sengaja atau lupa?\" Anak yang tidak takut dimarahi akan belajar jujur.",
          "Jelaskan hadits: yang lupa tetap melanjutkan puasanya, karena Allah yang memberinya makan dan minum. Ini menenangkan, bukan celah untuk pura-pura lupa.",
          "Latih cara mengingatkan yang lembut: berbisik, tersenyum, tidak mempermalukan di depan orang lain.",
        ],
        en: [
          "Ask calmly: \"Was it on purpose or did you forget?\" A child who isn't afraid of being told off learns to be honest.",
          "Share the hadith: whoever forgets should complete the fast, because Allah fed them. It's a comfort, not a loophole for pretending.",
          "Practise reminding kindly: whisper, smile, and never embarrass someone in front of others.",
        ],
      },
    },
    cover: {
      focus: 390, bg: "kitchen",
      props: [{ k: "water", x: 445, s: 0.85 }],
      mo: [{ pose: "pose-40", x: 335 }],
      fx: ["sparkle"],
    },
    pages: [
      {
        text: { id: "Siang itu panas sekali. Mo baru selesai main bola di halaman. Keringatnya bercucuran. Ia menjatuhkan diri ke rumput. \"Haus sekali…\"", en: "It was a very hot afternoon. Mo had just finished playing ball in the garden. Sweat dripped down his face. He flopped onto the grass. \"So thirsty…\"" },
        scene: { focus: 390, bg: "garden", props: [{ k: "ball", x: 455 }], mo: [{ pose: "pose-17", x: 345, move: "still" }], fx: ["sparkle"] },
      },
      {
        text: { id: "Mo berlari ke dapur, mengambil gelas, mengisinya penuh, dan… glek, glek, glek! \"Aaah, segar sekali!\"", en: "Mo ran to the kitchen, grabbed a glass, filled it right up and… gulp, gulp, gulp! \"Aaah, so refreshing!\"" },
        scene: { focus: 390, bg: "kitchen", props: [{ k: "water", x: 445, s: 0.85 }], mo: [{ pose: "pose-07", x: 335 }] },
      },
      {
        text: { id: "Ais masuk ke dapur. Matanya membulat seperti bola. \"MO! Kamu kan sedang puasa!\"", en: "Ais walked into the kitchen. Her eyes went as round as balls. \"MO! You're fasting!\"" },
        scene: { focus: 390, bg: "kitchen", mo: [{ who: "ais", pose: "surprised", x: 330 }, { pose: "pose-40", x: 450 }] },
      },
      {
        text: { id: "Mo menutup mulutnya. \"Astaghfirullah! Mo lupa!\" Matanya mulai berair. \"Puasa Mo batal… Mo gagal…\"", en: "Mo clapped his hand over his mouth. \"Astaghfirullah! I forgot!\" His eyes filled with tears. \"My fast is broken… I've failed…\"" },
        scene: { focus: 390, bg: "kitchen", mo: [{ pose: "pose-10", x: 390, move: "still" }] },
      },
      {
        text: { id: "Umi datang dan duduk di sebelah Mo. \"Tenang, Sayang. Tadi Mo minum karena sengaja, atau karena lupa?\" \"Lupa, Umi… sungguh.\"", en: "Umi came and sat beside Mo. \"It's all right, love. Did you drink on purpose, or because you forgot?\" \"I forgot, Umi… honestly.\"" },
        scene: { focus: 390, bg: "kitchen", mo: [{ who: "umi", pose: "kneel-smile", x: 330 }, { pose: "pose-14", x: 450 }] },
      },
      {
        text: { id: "Umi tersenyum. \"Kalau lupa, puasamu tidak batal. Allah yang memberimu minum. Lanjutkan puasamu, ya.\"", en: "Umi smiled. \"If you forgot, your fast isn't broken. It was Allah who gave you that drink. Carry on with your fast.\"" },
        quote: {
          id: "\"Barangsiapa lupa padahal ia sedang berpuasa, lalu ia makan atau minum, hendaklah ia menyempurnakan puasanya, karena sesungguhnya Allah-lah yang memberinya makan dan minum.\" (HR. Bukhari 1933, Muslim 1155)",
          en: "\"Whoever forgets while fasting and eats or drinks, let them complete their fast, for it was Allah who fed them and gave them drink.\" (Bukhari 1933, Muslim 1155)",
        },
        scene: { focus: 390, bg: "kitchen", mo: [{ who: "umi", pose: "explain-hand", x: 330 }, { pose: "pose-31", x: 450 }], fx: ["sparkle"] },
      },
      {
        text: { id: "\"Allah yang memberi Mo minum?\" Mo menatap gelas kosongnya lama sekali. \"Masya Allah… baik sekali Allah.\"", en: "\"Allah gave me a drink?\" Mo stared at his empty glass for a long time. \"Masya Allah… Allah is so kind.\"" },
        scene: { focus: 390, bg: "kitchen", props: [{ k: "water", x: 445, s: 0.85 }], mo: [{ pose: "wow", x: 335 }], fx: ["hearts"] },
      },
      {
        text: { id: "\"Tapi ingat,\" kata Umi. \"Begitu sadar, langsung berhenti. Kalau sudah ingat lalu tetap minum, itu baru batal.\" Mo mengangguk-angguk serius.", en: "\"But remember,\" said Umi, \"stop the moment you realise. If you remember and still keep drinking, then it's broken.\" Mo nodded very seriously." },
        scene: { focus: 390, bg: "kitchen", mo: [{ who: "umi", pose: "idea-finger", x: 330 }, { pose: "pose-22", x: 450 }] },
      },
      {
        text: { id: "Ais mengangkat tangan. \"Umi, kalau Ais lihat orang lupa, Ais harus bilang?\" \"Iya, ingatkan,\" kata Umi. \"Tapi dengan lembut. Bukan dengan teriak MO!\"", en: "Ais put up her hand. \"Umi, if I see someone forget, should I tell them?\" \"Yes, remind them,\" said Umi. \"But gently. Not by shouting MO!\"" },
        scene: { focus: 390, bg: "kitchen", mo: [{ who: "umi", pose: "shrug-smile", x: 330 }, { who: "ais", pose: "idea-point", x: 450 }] },
      },
      {
        text: { id: "Ais tertawa malu. \"Maaf ya, Mo. Tadi Ais kaget.\" Mo ikut tertawa. \"Tidak apa-apa. Terima kasih sudah mengingatkan.\"", en: "Ais giggled, embarrassed. \"Sorry, Mo. I was surprised.\" Mo laughed too. \"That's okay. Thanks for reminding me.\"" },
        scene: { focus: 390, bg: "kitchen", mo: [{ who: "ais", pose: "giggle", x: 330 }, { pose: "pose-25", x: 450 }], fx: ["hearts"] },
      },
      {
        text: { id: "Sorenya, Kak Adam pulang latihan tenis, capek dan haus. Ia mengambil botol minumnya, lalu membuka tutupnya…", en: "Later that afternoon, Kak Adam came home from tennis, tired and thirsty. He picked up his water bottle and twisted off the cap…" },
        scene: { focus: 390, bg: "kitchen", props: [{ k: "sportbottle", x: 440 }], mo: [{ who: "adam", pose: "tired-hands-knees", x: 335 }] },
      },
      {
        text: { id: "Si kembar saling pandang. Lalu berbisik bersamaan, lembuuut sekali: \"Kak Adam… Kakak sedang puasa, lho.\"", en: "The twins looked at each other. Then they whispered together, ever so softly: \"Kak Adam… you're fasting, you know.\"" },
        scene: { focus: 390, bg: "kitchen", mo: [{ pose: "pose-16", x: 330 }, { who: "ais", pose: "ok-wink", x: 455 }] },
      },
      {
        text: { id: "Kak Adam berhenti. Ia menggaruk kepala dan tertawa. \"Wah, terima kasih, adik-adik! Kakak hampir lupa. Kalian pengingat terbaik!\"", en: "Kak Adam stopped. He scratched his head and laughed. \"Wow, thank you, you two! I nearly forgot. You're the best reminders!\"" },
        scene: { focus: 390, bg: "kitchen", mo: [{ who: "adam", pose: "sheepish-scratch-head", x: 335 }, { pose: "pose-02", x: 445 }] },
      },
      {
        text: { id: "Saat berbuka, Abi tertawa mendengar ceritanya. \"Hari ini kalian belajar tiga hal: jujur, mengingatkan dengan lembut, dan Allah Maha Pemurah.\"", en: "At iftar, Abi laughed at the story. \"Today you learned three things: honesty, reminding gently, and that Allah is the Most Generous.\"" },
        scene: { focus: 390, bg: "living", time: "dusk", mo: [{ who: "ayah", pose: "thumbs-up-kneel", x: 330 }, { pose: "pose-29", x: 450 }] },
      },
      {
        text: { id: "Malamnya, Mo berdoa sebelum tidur. \"Terima kasih, ya Allah, sudah memberi Mo minum waktu Mo lupa.\"", en: "That night, Mo prayed before bed. \"Thank you, O Allah, for giving me a drink when I forgot.\"" },
        scene: { focus: 390, bg: "bedroom", time: "night", mo: [{ pose: "pose-12", x: 390, move: "still" }], fx: ["stars"] },
      },
      {
        text: { id: "Kalau temanmu lupa sedang puasa, bagaimana cara mengingatkannya dengan lembut? 💧", en: "If your friend forgets they're fasting, how could you remind them gently? 💧" },
        scene: { focus: 390, bg: "kitchen", mo: [{ pose: "pose-16", x: 330 }, { who: "ais", pose: "heart-hands-smile", x: 455 }], fx: ["sparkle"] },
      },
    ],
  },

  /* ───────────────────────── 2. Fasting breath ───────────────────────── */
  {
    slug: "mulut-mo-wangi-kesturi",
    pose: "baby-mo-pose-28.png",
    published: "2026-12-27",
    title: { id: "Mulut Mo Wangi Kesturi?", en: "Does Mo's Breath Smell of Musk?" },
    hook: {
      id: "\"Hiii, Mo, mulutmu bau!\" kata Ais sambil menutup hidung. Mo panik — apakah ia sakit? Ternyata Rasulullah ﷺ punya kabar yang mengejutkan tentang bau mulut orang berpuasa…",
      en: "\"Eww, Mo, your breath smells!\" says Ais, holding her nose. Mo panics — is he ill? But the Prophet ﷺ had surprising news about the breath of someone who fasts…",
    },
    anchor: { type: "parenting", slug: "adab-sehari-hari" },
    takeaway: {
      id: "Bau mulut orang berpuasa harum di sisi Allah — tetapi kita tetap menjaga kebersihan: menggosok gigi saat sahur dan sebelum tidur, dan bersiwak.",
      en: "A fasting person's breath is fragrant to Allah — and we still keep clean: brushing at sahur and before bed, and using a siwak.",
    },
    tags: ["ramadan", "puasa", "kebersihan", "gosok gigi", "siwak", "si kembar"],
    card: {
      title: { id: "Kebersihan Selama Puasa", en: "Staying Clean While Fasting" },
      items: {
        id: [
          "Jelaskan kenapa napas berbau saat puasa (perut kosong lama) dan bahwa itu wajar — bukan tanda sakit.",
          "Jadikan gosok gigi saat sahur dan sebelum tidur kebiasaan Ramadan. Ajarkan berkumur pelan supaya air tidak tertelan.",
          "Kenalkan siwak, sunnah yang dicintai Rasulullah ﷺ. Anak senang mencoba benda baru!",
        ],
        en: [
          "Explain why breath smells while fasting (an empty stomach for a long time) and that it's normal — not a sign of illness.",
          "Make brushing at sahur and before bed a Ramadan habit. Teach gentle rinsing so no water is swallowed.",
          "Introduce the siwak, a sunnah the Prophet ﷺ loved. Children love trying something new!",
        ],
      },
    },
    cover: {
      focus: 390, bg: "living",
      props: [{ k: "siwak", x: 400, y: 340, flip: true }],
      mo: [{ pose: "pose-28", x: 335 }],
      fx: ["sparkle"],
    },
    pages: [
      {
        text: { id: "Hari kesepuluh Ramadan. Mo dan Ais menyusun puzzle bersama. Mo mendekatkan wajahnya. \"Ais, lihat! Potongan ini pas!\"", en: "The tenth day of Ramadan. Mo and Ais were doing a puzzle together. Mo leaned in close. \"Ais, look! This piece fits!\"" },
        scene: { focus: 390, bg: "living", props: [{ k: "puzzle", x: 392 }], mo: [{ pose: "pose-15", x: 330 }, { who: "ais", pose: "calm-sit", x: 455 }] },
      },
      {
        text: { id: "Ais menutup hidungnya. \"Hiii… Mo, mulutmu bau!\"", en: "Ais held her nose. \"Eww… Mo, your breath smells!\"" },
        scene: { focus: 390, bg: "living", mo: [{ pose: "pose-40", x: 330 }, { who: "ais", pose: "grumpy", x: 450 }] },
      },
      {
        text: { id: "Mo meniup telapak tangannya. Hhhah. Lalu menciumnya. \"Aduh… iya, bau,\" katanya sambil menutup mulut.", en: "Mo breathed into his palm. Hhhah. Then he sniffed it. \"Oh no… it does smell,\" he said, covering his mouth." },
        scene: { focus: 390, bg: "living", mo: [{ pose: "pose-03", x: 390 }] },
      },
      {
        text: { id: "Mo berlari ke Umi. \"Umi, mulut Mo bau! Apa Mo sakit?\"", en: "Mo ran to Umi. \"Umi, my breath smells! Am I ill?\"" },
        scene: { focus: 390, bg: "kitchen", mo: [{ who: "umi", pose: "kneel-smile", x: 330 }, { pose: "pose-33", x: 450 }] },
      },
      {
        text: { id: "Umi tertawa kecil. \"Tidak, Sayang. Kalau perut kosong lama, napas jadi berbau. Itu tanda Mo sedang puasa.\"", en: "Umi chuckled. \"No, love. When your tummy is empty for a long time, your breath starts to smell. It's a sign you're fasting.\"" },
        scene: { focus: 390, bg: "kitchen", mo: [{ who: "umi", pose: "explain-hand", x: 330 }, { pose: "pose-40", x: 450 }] },
      },
      {
        text: { id: "\"Dan tahu tidak? Rasulullah ﷺ bersabda, bau mulut orang yang berpuasa lebih harum di sisi Allah daripada minyak kesturi.\"", en: "\"And guess what? The Prophet ﷺ said the breath of someone fasting is more fragrant to Allah than musk.\"" },
        quote: {
          id: "\"Sungguh, bau mulut orang yang berpuasa lebih harum di sisi Allah daripada aroma minyak kesturi.\" (HR. Bukhari 1904, Muslim 1151)",
          en: "\"The smell of the mouth of a fasting person is more fragrant to Allah than the scent of musk.\" (Bukhari 1904, Muslim 1151)",
        },
        scene: { focus: 390, bg: "kitchen", mo: [{ who: "umi", pose: "present-book", x: 330 }, { pose: "pose-31", x: 450 }], fx: ["sparkle"] },
      },
      {
        text: { id: "\"Kesturi itu apa, Umi?\" \"Minyak wangi yang paling harum. Mahal sekali!\" Mo berkacak pinggang. \"Jadi mulut Mo wangi menurut Allah!\"", en: "\"What's musk, Umi?\" \"The most beautiful perfume. Very expensive!\" Mo put his hands on his hips. \"So my breath smells lovely to Allah!\"" },
        scene: { focus: 390, bg: "kitchen", mo: [{ who: "umi", pose: "cheer-happy", x: 330 }, { pose: "pose-04", x: 450 }] },
      },
      {
        text: { id: "Mo berlari kembali ke Ais. \"Ais! Kata Umi, mulut Mo wangi kesturi!\" Hhhaaah!", en: "Mo raced back to Ais. \"Ais! Umi says my breath smells of musk!\" Hhhaaah!" },
        scene: { focus: 390, bg: "living", mo: [{ pose: "pose-29", x: 330 }, { who: "ais", pose: "scared-hide", x: 455 }] },
      },
      {
        text: { id: "Ais tertawa sampai terguling. \"Wangi di sisi Allah, Mo — bukan di hidung Ais!\"", en: "Ais laughed so hard she rolled over. \"Lovely to Allah, Mo — not to my nose!\"" },
        scene: { focus: 390, bg: "living", mo: [{ pose: "pose-28", x: 330 }, { who: "ais", pose: "giggle", x: 450 }], fx: ["hearts"] },
      },
      {
        text: { id: "Umi memanggil mereka. \"Pahalanya tetap. Tapi kita juga harus menjaga kebersihan. Islam itu cinta kebersihan.\"", en: "Umi called them over. \"The reward is still there. But we must keep clean too. Islam loves cleanliness.\"" },
        scene: { focus: 390, bg: "living", mo: [{ who: "umi", pose: "teach-book", x: 330 }, { who: "ais", pose: "ok-wink", x: 450 }] },
      },
      {
        text: { id: "Jadi setiap sahur dan sebelum tidur, si kembar menggosok gigi. Sikat, sikat, sikat — gigi depan, gigi belakang, lalu berkumur pelan-pelan.", en: "So at every sahur and before bed, the twins brushed their teeth. Brush, brush, brush — front teeth, back teeth, then a gentle rinse." },
        scene: { focus: 390, bg: "bathroom", mo: [{ who: "ais", pose: "brush-teeth", x: 330 }, { pose: "pose-25", x: 450 }], fx: ["bubbles"] },
      },
      {
        text: { id: "Kak Adam memperlihatkan sebatang kayu kecil. \"Ini siwak. Rasulullah ﷺ suka sekali bersiwak untuk membersihkan gigi.\"", en: "Kak Adam showed them a small twig. \"This is a siwak. The Prophet ﷺ loved using a siwak to clean his teeth.\"" },
        quote: {
          id: "\"Seandainya tidak memberatkan umatku, sungguh aku perintahkan mereka bersiwak setiap kali hendak sholat.\" (HR. Bukhari 887, Muslim 252)",
          en: "\"If it were not hard on my people, I would have ordered them to use the siwak before every prayer.\" (Bukhari 887, Muslim 252)",
        },
        scene: { focus: 390, bg: "living", props: [{ k: "siwak", x: 395, y: 345, flip: true }], mo: [{ who: "adam", pose: "offer", x: 335 }] },
      },
      {
        text: { id: "Mo mencobanya. \"Rasanya seperti kayu… dan sedikit pedas!\" Ais tertawa. \"Ya iyalah, Mo. Itu memang kayu!\"", en: "Mo had a go. \"It tastes like wood… and a bit spicy!\" Ais laughed. \"Of course, Mo. It IS wood!\"" },
        scene: { focus: 390, bg: "living", mo: [{ pose: "pose-37", x: 330 }, { who: "ais", pose: "giggle", x: 450 }] },
      },
      {
        text: { id: "Siang harinya, Mo tetap sopan. \"Ais, Mo bicara dari sini saja, ya!\" teriaknya dari ujung ruangan. Ais tertawa lagi.", en: "That afternoon, Mo stayed polite. \"Ais, I'll talk to you from over here!\" he called from the far end of the room. Ais laughed again." },
        scene: { focus: 390, bg: "living", mo: [{ pose: "pose-24", x: 320 }, { who: "ais", pose: "giggle", x: 465 }] },
      },
      {
        text: { id: "Saat berbuka, Mo meniup tangannya lagi. Hhhah. \"Hmm… sekarang bau kurma!\" Semua orang tertawa.", en: "At iftar, Mo breathed into his hand again. Hhhah. \"Hmm… now it smells of dates!\" Everyone laughed." },
        scene: { focus: 390, bg: "living", time: "dusk", props: [{ k: "dates", x: 440, s: 0.7 }], mo: [{ pose: "pose-03", x: 335 }], fx: ["hearts"] },
      },
      {
        text: { id: "Apa yang kamu lakukan supaya tetap bersih dan segar saat berpuasa? 🪥", en: "What do you do to stay clean and fresh while fasting? 🪥" },
        scene: { focus: 390, bg: "bathroom", mo: [{ pose: "pose-25", x: 330 }, { who: "ais", pose: "brush-teeth", x: 450 }], fx: ["bubbles"] },
      },
    ],
  },

  /* ───────────────────────── 3. The takjil market ───────────────────────── */
  {
    slug: "pasar-takjil-si-kembar",
    pose: "baby-mo-pose-08.png",
    published: "2026-12-28",
    title: { id: "Pasar Takjil Si Kembar", en: "The Twins at the Iftar Market" },
    hook: {
      id: "Abi memberi si kembar sepuluh ribu rupiah di pasar takjil. Ais membeli secukupnya. Mo yang lapar ingin SEMUANYA! Bisakah perut kecil Mo menghabiskan semua jajanannya?",
      en: "Abi gives the twins ten thousand rupiah at the iftar market. Ais buys just enough. Hungry Mo wants EVERYTHING! Can Mo's little tummy finish it all?",
    },
    anchor: { type: "parenting", slug: "susah-makan" },
    takeaway: {
      id: "Saat lapar, mata ingin semuanya, tetapi perut kita kecil. Belilah secukupnya, jangan berlebihan, dan bagikan yang lebih.",
      en: "When we're hungry our eyes want everything, but our tummies are small. Buy just enough, don't overdo it, and share what's extra.",
    },
    tags: ["ramadan", "takjil", "tidak berlebihan", "berbagi", "uang", "si kembar"],
    card: {
      title: { id: "Belajar Secukupnya di Bulan Puasa", en: "Learning \"Just Enough\" in Ramadan" },
      items: {
        id: [
          "Beri anak sedikit uang di pasar takjil dan biarkan ia memilih. Tanya dulu: \"Ini untuk siapa? Akan habis tidak?\"",
          "Buat daftar belanja bersama sebelum berangkat. Daftar membantu melawan \"mata lapar\".",
          "Kalau ada makanan lebih, simpan untuk sahur atau bagikan — satpam, tetangga, masjid. Jangan biarkan terbuang.",
        ],
        en: [
          "Give your child a little money at the iftar market and let them choose. Ask first: \"Who is this for? Will it get eaten?\"",
          "Write a shopping list together before you go. A list helps beat \"hungry eyes\".",
          "If there's extra food, save it for sahur or share it — the night guard, a neighbour, the mosque. Don't let it go to waste.",
        ],
      },
    },
    cover: {
      focus: 390, bg: "market", time: "dusk",
      props: [{ k: "takjilstall", x: 445, s: 0.45 }],
      mo: [{ pose: "pose-08", x: 335 }],
      fx: ["sparkle"],
    },
    pages: [
      {
        text: { id: "Sore hari, Abi mengajak si kembar ke pasar takjil. Wah, ramai sekali! Ada klepon hijau, kue lapis, es buah, dan gorengan panas.", en: "In the afternoon, Abi took the twins to the iftar market. Wow, it was busy! Green klepon, layer cake, fruit ice and hot fried snacks." },
        scene: { focus: 390, bg: "market", time: "dusk", props: [{ k: "takjilstall", x: 445, s: 0.45 }], mo: [{ pose: "pose-31", x: 335 }], fx: ["sparkle"] },
      },
      {
        text: { id: "Abi memberi masing-masing sepuluh ribu rupiah. \"Belilah yang kalian perlukan untuk berbuka, ya.\"", en: "Abi gave them ten thousand rupiah each. \"Buy what you need for iftar, okay?\"" },
        scene: { focus: 390, bg: "market", time: "dusk", props: [{ k: "coins", x: 392, y: 300, s: 0.6 }], mo: [{ who: "ayah", pose: "kneel-present", x: 330 }, { pose: "pose-26", x: 450 }] },
      },
      {
        text: { id: "Ais berpikir dulu. Ia menghitung dengan jari. \"Ais mau satu es buah… dan satu kue lapis untuk Umi. Cukup!\"", en: "Ais thought first. She counted on her fingers. \"I'd like one fruit ice… and one layer cake for Umi. That's enough!\"" },
        scene: { focus: 390, bg: "market", time: "dusk", props: [{ k: "takjilstall", x: 445, s: 0.45 }], mo: [{ who: "ais", pose: "checklist", x: 335 }] },
      },
      {
        text: { id: "Tapi mata Mo yang lapar melihat semuanya. \"Klepon! Risoles! Es cendol! Martabak! Mo mau semuaaa!\"", en: "But Mo's hungry eyes saw everything. \"Klepon! Spring rolls! Cendol! Martabak! I want it aaall!\"" },
        scene: { focus: 390, bg: "market", time: "dusk", props: [{ k: "takjilstall", x: 445, s: 0.45 }], mo: [{ pose: "pose-08", x: 335 }] },
      },
      {
        text: { id: "Mo membeli klepon. Lalu risoles. Lalu cendol. Lalu martabak. Lalu… uangnya habis. Kantong plastiknya penuh sekali.", en: "Mo bought klepon. Then spring rolls. Then cendol. Then martabak. Then… his money was gone. His plastic bag was stuffed full." },
        scene: { focus: 390, bg: "market", time: "dusk", props: [{ k: "takjilbag", x: 442 }], mo: [{ pose: "pose-04", x: 335 }] },
      },
      {
        text: { id: "\"Mo, kamu yakin bisa menghabiskan semua itu?\" tanya Abi. \"Yakin, Abi! Perut Mo sebesar gajah!\"", en: "\"Mo, are you sure you can finish all that?\" asked Abi. \"Sure, Abi! My tummy's as big as an elephant!\"" },
        scene: { focus: 390, bg: "market", time: "dusk", mo: [{ who: "ayah", pose: "think-chin-stand", x: 330 }, { pose: "pose-29", x: 450 }] },
      },
      {
        text: { id: "Adzan Maghrib! Mo berbuka dengan kurma dan air putih. Lalu klepon. Satu, dua, tiga… Nyam, nyam!", en: "The sunset call to prayer! Mo broke his fast with dates and water. Then klepon. One, two, three… Yum, yum!" },
        scene: { focus: 390, bg: "living", time: "dusk", props: [{ k: "dates", x: 440, s: 0.7 }], mo: [{ pose: "pose-07", x: 335 }] },
      },
      {
        text: { id: "Lalu nasi. Lalu risoles. Lalu… perut Mo terasa penuh sekali. Cendolnya belum disentuh. Martabaknya masih utuh.", en: "Then rice. Then spring rolls. Then… Mo's tummy felt very, very full. The cendol hadn't been touched. The martabak was still whole." },
        scene: { focus: 390, bg: "living", time: "dusk", props: [{ k: "iftar", x: 440, s: 0.5 }], mo: [{ pose: "pose-21", x: 335 }] },
      },
      {
        text: { id: "\"Umi… Mo tidak kuat lagi,\" kata Mo pelan sambil berbaring. Perutnya bulat seperti bola.", en: "\"Umi… I can't eat any more,\" said Mo quietly, lying down. His tummy was as round as a ball." },
        scene: { focus: 390, bg: "living", time: "dusk", mo: [{ pose: "pose-17", x: 390, move: "still" }] },
      },
      {
        text: { id: "Umi duduk di sampingnya. \"Saat lapar, mata kita ingin semuanya. Tapi perut kita kecil. Allah tidak suka kita berlebih-lebihan.\"", en: "Umi sat beside him. \"When we're hungry, our eyes want everything. But our tummies are small. Allah doesn't like us to overdo things.\"" },
        quote: {
          id: "\"…makan dan minumlah, tetapi jangan berlebihan. Sungguh, Allah tidak menyukai orang yang berlebih-lebihan.\" (QS. Al-A'raf: 31)",
          en: "\"…eat and drink, but do not be excessive. Indeed, He does not like those who are excessive.\" (Qur'an, Al-A'raf 7:31)",
        },
        scene: { focus: 390, bg: "living", time: "dusk", mo: [{ who: "umi", pose: "kneel-smile", x: 330 }, { pose: "pose-14", x: 450 }] },
      },
      {
        text: { id: "Ais berbuka dengan es buahnya pelan-pelan, lalu memberi kue lapis untuk Umi. Perutnya pas — tidak lapar, tidak kekenyangan.", en: "Ais slowly enjoyed her fruit ice, then gave Umi the layer cake. Her tummy felt just right — not hungry, not too full." },
        scene: { focus: 390, bg: "living", time: "dusk", mo: [{ who: "ais", pose: "eat-bowl", x: 390 }], fx: ["hearts"] },
      },
      {
        text: { id: "\"Lalu makanan Mo bagaimana?\" tanya Mo sedih. \"Mo tidak mau makanannya dibuang.\"", en: "\"What about all my food?\" asked Mo sadly. \"I don't want it thrown away.\"" },
        scene: { focus: 390, bg: "living", time: "dusk", props: [{ k: "takjilbag", x: 442 }], mo: [{ pose: "pose-33", x: 335 }] },
      },
      {
        text: { id: "\"Ide bagus!\" kata Kak Adam. \"Cendolnya kita simpan untuk sahur. Martabaknya kita bagi ke Pak Satpam yang jaga malam.\"", en: "\"Good thinking!\" said Kak Adam. \"We'll keep the cendol for sahur. And we'll share the martabak with the night guard.\"" },
        scene: { focus: 390, bg: "living", time: "night", mo: [{ who: "adam", pose: "proud-hands-hips", x: 335 }, { pose: "idea", x: 445 }] },
      },
      {
        text: { id: "Pak Satpam menerima martabak itu sambil tersenyum lebar. \"Wah, pas sekali! Bapak belum sempat makan. Terima kasih, Nak!\"", en: "The night guard took the martabak with a big smile. \"Oh, perfect timing! I haven't had a chance to eat. Thank you, kids!\"" },
        scene: { focus: 390, bg: "street", time: "night", mo: [{ who: "adam", pose: "carry-bowl", x: 335 }, { pose: "pose-01", x: 445 }], fx: ["hearts", "stars"] },
      },
      {
        text: { id: "Besoknya, Mo membuat daftar sebelum ke pasar: \"Satu kolak. Satu kue. Selesai!\" Abi mengacungkan dua jempol.", en: "The next day, Mo made a list before going to the market: \"One kolak. One cake. Done!\" Abi gave him two thumbs up." },
        scene: { focus: 390, bg: "market", time: "dusk", mo: [{ who: "ayah", pose: "thumbs-up-stand", x: 330 }, { pose: "pose-04", x: 450 }], fx: ["sparkle"] },
      },
      {
        text: { id: "Kalau kamu lapar dan melihat banyak makanan enak, apa yang sebaiknya kamu lakukan? 🛍️", en: "If you're hungry and see lots of yummy food, what's a wise thing to do? 🛍️" },
        scene: { focus: 390, bg: "market", time: "dusk", props: [{ k: "takjilstall", x: 445, s: 0.45 }], mo: [{ pose: "idea", x: 335 }] },
      },
    ],
  },

  /* ───────────────────────── 4. One letter a day ───────────────────────── */
  {
    slug: "satu-huruf-satu-juz",
    pose: "baby-mo-pose-22.png",
    published: "2026-12-29",
    title: { id: "Satu Huruf, Satu Juz", en: "One Letter, One Juz" },
    hook: {
      id: "Ramadan adalah bulan Al-Qur'an. Kak Adam mau khatam tiga puluh juz! Mo juga mau ikut… tapi hurufnya \"keriting semua\". Bagaimana kalau dimulai dari satu huruf saja?",
      en: "Ramadan is the month of the Qur'an. Kak Adam wants to finish all thirty juz! Mo wants to join in… but the letters are \"all curly\". What if he starts with just one letter?",
    },
    anchor: { type: "parenting", slug: "mengajarkan-quran" },
    takeaway: {
      id: "Setiap orang mulai dari huruf pertama. Membaca Al-Qur'an dengan terbata-bata pun mendapat dua pahala — yang penting terus belajar.",
      en: "Everyone starts from the first letter. Even reading the Qur'an haltingly earns a double reward — what matters is to keep learning.",
    },
    tags: ["ramadan", "al-quran", "hijaiyah", "belajar mengaji", "kak adam", "si kembar"],
    card: {
      title: { id: "Mengenalkan Huruf Hijaiyah di Bulan Ramadan", en: "Hijaiyah Letters in Ramadan" },
      items: {
        id: [
          "Satu huruf sehari sudah hebat. Pakai bentuk yang mudah diingat: alif berdiri tegak, ba perahu bertitik satu di bawah, ta perahu bertitik dua di atas.",
          "Buat lagu atau gerakan untuk tiap huruf. Anak belajar lewat tubuh dan nada.",
          "Biarkan kakak mengajari adik. Yang belajar dan yang mengajar sama-sama mendapat kebaikan.",
        ],
        en: [
          "One letter a day is wonderful. Use easy shapes: alif stands tall, ba is a boat with one dot below, ta is a boat with two dots above.",
          "Make up a song or a movement for each letter. Children learn through their bodies and through tunes.",
          "Let an older sibling teach a younger one. The learner and the teacher both earn goodness.",
        ],
      },
    },
    cover: {
      focus: 390, bg: "living",
      props: [{ k: "hijaiyah", x: 445, s: 0.7 }],
      mo: [{ pose: "pose-22", x: 335 }],
      fx: ["sparkle"],
    },
    pages: [
      {
        text: { id: "Ramadan adalah bulan Al-Qur'an diturunkan. Setiap habis Subuh, Kak Adam membaca Al-Qur'an dengan suara merdu. Mo duduk mendengarkan.", en: "Ramadan is the month the Qur'an was sent down. Every morning after Fajr, Kak Adam recited the Qur'an in a beautiful voice. Mo sat and listened." },
        quote: {
          id: "\"Bulan Ramadan adalah (bulan) yang di dalamnya diturunkan Al-Qur'an, sebagai petunjuk bagi manusia…\" (QS. Al-Baqarah: 185)",
          en: "\"The month of Ramadan is the one in which the Qur'an was revealed as guidance for mankind…\" (Qur'an, Al-Baqarah 2:185)",
        },
        scene: { focus: 390, bg: "living", mo: [{ who: "adam", pose: "quran-read-sit", x: 330 }, { pose: "pose-06", x: 450 }] },
      },
      {
        text: { id: "\"Kak Adam mau khatam, ya?\" tanya Ais. \"Insya Allah! Tiga puluh juz dalam tiga puluh hari. Satu juz sehari!\"", en: "\"Are you going to finish the whole Qur'an, Kak Adam?\" asked Ais. \"Insya Allah! Thirty juz in thirty days. One juz a day!\"" },
        scene: { focus: 390, bg: "living", mo: [{ who: "adam", pose: "quran-rehal-kneel", x: 335 }, { who: "ais", pose: "wonder-question", x: 445 }] },
      },
      {
        text: { id: "Mo ingin ikut. Ia membuka mushaf besar… lalu menggaruk kepala. \"Hurufnya keriting semua, Kak!\"", en: "Mo wanted to join in. He opened a big mushaf… then scratched his head. \"The letters are all curly, Kak!\"" },
        scene: { focus: 390, bg: "living", props: [{ k: "quran", x: 445, s: 0.75 }], mo: [{ pose: "pose-23", x: 335 }] },
      },
      {
        text: { id: "Kak Adam tertawa. \"Semua orang mulai dari huruf pertama. Kakak juga dulu begitu. Ayo kita mulai dari alif!\"", en: "Kak Adam laughed. \"Everyone starts with the first letter. I did too. Let's start with alif!\"" },
        scene: { focus: 390, bg: "living", mo: [{ who: "adam", pose: "teach-iqra-sit", x: 335 }, { pose: "pose-26", x: 445 }] },
      },
      {
        text: { id: "Kak Adam mengeluarkan balok huruf. \"Ini alif — berdiri tegak seperti tiang. Ini ba — seperti perahu dengan satu titik di bawah.\"", en: "Kak Adam brought out letter blocks. \"This is alif — standing tall like a pole. This is ba — like a boat with one dot underneath.\"" },
        scene: { focus: 390, bg: "living", props: [{ k: "hijaiyah", x: 445, s: 0.7 }], mo: [{ who: "adam", pose: "kneel-talk", x: 330 }] },
      },
      {
        text: { id: "\"Dan ini ta — perahu dengan dua titik di atas, seperti dua mata yang mengintip!\" Mo tertawa. \"Ta yang mengintip!\"", en: "\"And this is ta — a boat with two dots on top, like two eyes peeping out!\" Mo laughed. \"Peeping ta!\"" },
        scene: { focus: 390, bg: "living", props: [{ k: "hijaiyah", x: 445, s: 0.7 }], mo: [{ pose: "pose-03", x: 335 }] },
      },
      {
        text: { id: "Ais membuat lagu: \"Alif tegak, ba perahu, ta dua mata mengintip lucu!\" Mereka bernyanyi sambil menari.", en: "Ais made up a song: \"Alif stands tall, ba's a boat, ta's two eyes peeping out!\" They sang it and danced around." },
        scene: { focus: 390, bg: "living", mo: [{ who: "ais", pose: "headphones-dance", x: 330 }, { pose: "pose-30", x: 450 }], fx: ["notes"] },
      },
      {
        text: { id: "Setiap hari, Mo belajar satu huruf baru. Tsa, jim, ha, kho… Kadang lupa. Kadang tertukar. Tapi Mo terus mencoba.", en: "Every day, Mo learned one new letter. Tha, jim, ha, kha… Sometimes he forgot. Sometimes he mixed them up. But he kept on trying." },
        scene: { focus: 390, bg: "living", props: [{ k: "hijaiyah", x: 445, s: 0.7 }], mo: [{ pose: "pose-16", x: 335 }] },
      },
      {
        text: { id: "Hari kedua belas, Mo cemberut. \"Kak Adam sudah juz dua belas. Mo baru huruf ke… dua belas juga, sih.\"", en: "On the twelfth day, Mo pouted. \"Kak Adam's on juz twelve. I'm only on letter… twelve as well, actually.\"" },
        scene: { focus: 390, bg: "living", mo: [{ pose: "pose-23", x: 390 }] },
      },
      {
        text: { id: "Kak Adam merangkulnya. \"Tahu tidak? Orang yang membaca Al-Qur'an dengan terbata-bata dan susah payah mendapat DUA pahala!\"", en: "Kak Adam put an arm round him. \"Did you know? Someone who reads the Qur'an haltingly and finds it hard gets a DOUBLE reward!\"" },
        quote: {
          id: "\"Orang yang mahir membaca Al-Qur'an bersama para malaikat yang mulia lagi taat. Dan orang yang membaca Al-Qur'an dengan terbata-bata dan merasa kesulitan, baginya dua pahala.\" (HR. Bukhari 4937, Muslim 798)",
          en: "\"The one who is skilled in the Qur'an is with the noble, righteous scribes. And the one who reads it haltingly, finding it difficult, has a double reward.\" (Bukhari 4937, Muslim 798)",
        },
        scene: { focus: 390, bg: "living", mo: [{ who: "adam", pose: "kneel-talk", x: 330 }, { pose: "pose-31", x: 450 }] },
      },
      {
        text: { id: "\"Dua pahala? Untuk Mo yang belum lancar?\" Mo melompat tinggi. \"Yeyy! Mo semangat lagi!\"", en: "\"A double reward? For me, even though I'm not fluent yet?\" Mo jumped up high. \"Yay! I feel excited again!\"" },
        scene: { focus: 390, bg: "living", mo: [{ pose: "pose-02", x: 390 }], fx: ["confetti"] },
      },
      {
        text: { id: "Abi ikut tersenyum. \"Sebaik-baik kalian adalah yang belajar Al-Qur'an dan mengajarkannya. Kak Adam melakukan dua-duanya!\" Kak Adam tersipu.", en: "Abi smiled too. \"The best of you are those who learn the Qur'an and teach it. Kak Adam is doing both!\" Kak Adam blushed." },
        quote: {
          id: "\"Sebaik-baik kalian adalah orang yang belajar Al-Qur'an dan mengajarkannya.\" (HR. Bukhari 5027)",
          en: "\"The best of you are those who learn the Qur'an and teach it.\" (Bukhari 5027)",
        },
        scene: { focus: 390, bg: "living", mo: [{ who: "ayah", pose: "teach-book-sit", x: 330 }, { who: "adam", pose: "sheepish-scratch-head", x: 445 }] },
      },
      {
        text: { id: "Malam kedua puluh sembilan, Kak Adam membaca ayat terakhir surah An-Nas. \"Alhamdulillah… khatam!\"", en: "On the twenty-ninth night, Kak Adam recited the last verse of Surah An-Nas. \"Alhamdulillah… I've finished!\"" },
        scene: { focus: 390, bg: "living", time: "night", mo: [{ who: "adam", pose: "quran-read-sit", x: 390 }], fx: ["confetti", "stars"] },
      },
      {
        text: { id: "Semua bertepuk tangan. Lalu Mo berdiri. \"Mo juga mau setor!\" Ia membaca pelan-pelan: \"Alif… ba… ta… tsa…\" sampai huruf terakhir, ya!", en: "Everyone clapped. Then Mo stood up. \"I want to show you too!\" Slowly he read: \"Alif… ba… ta… tha…\" all the way to the very last letter, ya!" },
        scene: { focus: 390, bg: "living", time: "night", mo: [{ pose: "pose-22", x: 330 }, { who: "ais", pose: "cheer-wink", x: 455 }], fx: ["stars"] },
      },
      {
        text: { id: "Umi memeluk mereka. \"Satu juz sehari atau satu huruf sehari — Allah melihat semua usaha kalian.\"", en: "Umi hugged them. \"One juz a day or one letter a day — Allah sees all your effort.\"" },
        scene: { focus: 390, bg: "living", time: "night", mo: [{ who: "umi", pose: "open-arms-present", x: 330 }, { pose: "pose-41", x: 450 }], fx: ["hearts"] },
      },
      {
        text: { id: "Huruf hijaiyah apa saja yang sudah kamu kenal? Coba sebutkan! 📖", en: "Which hijaiyah letters do you know already? Try saying them! 📖" },
        scene: { focus: 390, bg: "living", props: [{ k: "hijaiyah", x: 445, s: 0.7 }], mo: [{ pose: "pose-25", x: 335 }], fx: ["sparkle"] },
      },
    ],
  },

  /* ───────────────────────── 5. Lailatul Qadar detectives ───────────────────────── */
  {
    slug: "detektif-lailatul-qadar",
    pose: "baby-mo-pose-29.png",
    published: "2026-12-30",
    title: { id: "Detektif Lailatul Qadar", en: "The Laylatul Qadr Detectives" },
    hook: {
      id: "Ada satu malam di bulan Ramadan yang lebih baik dari seribu bulan — tapi malam yang mana? Detektif Mo dan Detektif Ais siap memecahkan misteri terbesar Ramadan!",
      en: "One night in Ramadan is better than a thousand months — but which one? Detective Mo and Detective Ais are ready to crack Ramadan's biggest mystery!",
    },
    anchor: { type: "parenting", slug: "mulai-sholat" },
    takeaway: {
      id: "Lailatul Qadar dirahasiakan supaya kita bersungguh-sungguh di setiap malam sepuluh terakhir — sholat, membaca Al-Qur'an, berdoa, dan bersedekah.",
      en: "Laylatul Qadr is kept secret so we try our best on every one of the last ten nights — praying, reading the Qur'an, making du'a and giving charity.",
    },
    tags: ["ramadan", "lailatul qadar", "sepuluh malam terakhir", "doa", "bilangan ganjil", "si kembar"],
    card: {
      title: { id: "Sepuluh Malam Terakhir Bersama Anak", en: "The Last Ten Nights with Your Child" },
      items: {
        id: [
          "Jadikan petualangan: \"misi detektif\" setiap malam ganjil — sambil belajar bilangan ganjil 21, 23, 25, 27, 29.",
          "Hafalkan doa Lailatul Qadar bersama: \"Allahumma innaka 'afuwwun tuhibbul 'afwa fa'fu 'anni.\"",
          "Sesuaikan dengan usia: anak boleh ikut sebentar lalu tidur. Yang penting ia merasakan malam-malam ini istimewa.",
        ],
        en: [
          "Make it an adventure: a \"detective mission\" on each odd night — while learning the odd numbers 21, 23, 25, 27, 29.",
          "Learn the Laylatul Qadr du'a together: \"Allahumma innaka 'afuwwun tuhibbul 'afwa fa'fu 'anni.\"",
          "Keep it age-appropriate: children can join for a while, then sleep. What matters is that they feel these nights are special.",
        ],
      },
    },
    cover: {
      focus: 390, bg: "garden", time: "night",
      props: [{ k: "flashlight", x: 445, s: 0.8 }],
      mo: [{ pose: "pose-29", x: 335 }],
      fx: ["stars", "milkyway"],
    },
    pages: [
      {
        text: { id: "Sepuluh malam terakhir Ramadan tiba. Abi mengumpulkan si kembar. \"Di antara malam-malam ini, ada satu malam yang sangat istimewa: Lailatul Qadar.\"", en: "The last ten nights of Ramadan arrived. Abi gathered the twins. \"Among these nights is one very special night: Laylatul Qadr.\"" },
        scene: { focus: 390, bg: "living", time: "night", mo: [{ who: "ayah", pose: "teach-point-kneel", x: 330 }, { pose: "pose-26", x: 450 }], fx: ["stars"] },
      },
      {
        text: { id: "\"Malam itu lebih baik dari seribu bulan,\" kata Abi. Mo menghitung dengan jari. \"Seribu bulan itu… lebih lama dari umur Kakek!\"", en: "\"That night is better than a thousand months,\" said Abi. Mo counted on his fingers. \"A thousand months is… longer than Grandpa's whole life!\"" },
        quote: {
          id: "\"Lailatul Qadar itu lebih baik daripada seribu bulan.\" (QS. Al-Qadr: 3)",
          en: "\"The Night of Decree is better than a thousand months.\" (Qur'an, Al-Qadr 97:3)",
        },
        scene: { focus: 390, bg: "living", time: "night", mo: [{ who: "ayah", pose: "idea-point-stand", x: 330 }, { pose: "pose-31", x: 450 }] },
      },
      {
        text: { id: "\"Malam yang mana, Abi?\" tanya Ais. \"Itu rahasia,\" jawab Abi. \"Rasulullah ﷺ menyuruh kita mencarinya di malam-malam ganjil sepuluh terakhir.\"", en: "\"Which night, Abi?\" asked Ais. \"That's a secret,\" said Abi. \"The Prophet ﷺ told us to look for it on the odd nights of the last ten.\"" },
        quote: {
          id: "\"Carilah Lailatul Qadar pada malam-malam ganjil dari sepuluh malam terakhir Ramadan.\" (HR. Bukhari 2017)",
          en: "\"Seek Laylatul Qadr on the odd nights of the last ten nights of Ramadan.\" (Bukhari 2017)",
        },
        scene: { focus: 390, bg: "living", time: "night", mo: [{ who: "ayah", pose: "thumbs-up-kneel", x: 330 }, { who: "ais", pose: "think-question", x: 450 }] },
      },
      {
        text: { id: "Mata si kembar berbinar. \"Ini tugas untuk… DETEKTIF!\" Ais mengambil kaca pembesar. Mo mengambil senter. Klik!", en: "The twins' eyes lit up. \"This is a job for… DETECTIVES!\" Ais grabbed a magnifying glass. Mo grabbed a torch. Click!" },
        scene: { focus: 390, bg: "living", time: "night", props: [{ k: "flashlight", x: 392, y: 320, s: 0.6 }], mo: [{ pose: "pose-29", x: 330 }, { who: "ais", pose: "magnifier-wink", x: 455 }] },
      },
      {
        text: { id: "\"Malam ganjil itu yang mana?\" Mo bingung. Ais menghitung: \"Dua puluh satu, dua puluh tiga, dua puluh lima, dua puluh tujuh, dua puluh sembilan!\"", en: "\"Which ones are the odd nights?\" Mo was puzzled. Ais counted: \"Twenty-one, twenty-three, twenty-five, twenty-seven, twenty-nine!\"" },
        scene: { focus: 390, bg: "living", time: "night", mo: [{ pose: "pose-23", x: 330 }, { who: "ais", pose: "checklist", x: 455 }] },
      },
      {
        text: { id: "Malam kedua puluh satu. Para detektif memeriksa langit dengan teropong. \"Tanda-tandanya seperti apa, Abi?\"", en: "The twenty-first night. The detectives checked the sky with a telescope. \"What are the signs, Abi?\"" },
        scene: { focus: 390, bg: "garden", time: "night", mo: [{ who: "ais", pose: "telescope", x: 330 }, { pose: "pose-15", x: 450 }], fx: ["stars", "milkyway"] },
      },
      {
        text: { id: "Abi menjelaskan, \"Malamnya tenang dan damai. Paginya matahari terbit dengan lembut, tidak menyilaukan.\"", en: "Abi explained, \"The night is calm and peaceful. The next morning the sun rises softly, not dazzling.\"" },
        quote: {
          id: "Tentang tanda Lailatul Qadar: \"…pada pagi harinya matahari terbit tanpa sinar yang menyilaukan.\" (HR. Muslim 762)",
          en: "On the sign of Laylatul Qadr: \"…on its morning the sun rises without dazzling rays.\" (Muslim 762)",
        },
        scene: { focus: 390, bg: "garden", time: "night", mo: [{ who: "ayah", pose: "idea-point-stand", x: 330 }, { pose: "pose-40", x: 450 }], fx: ["stars"] },
      },
      {
        text: { id: "\"Tapi yang terpenting bukan menebak malamnya,\" kata Abi. \"Isilah SEMUA malam dengan ibadah. Jadi pasti tidak terlewat!\"", en: "\"But the most important thing isn't guessing the night,\" said Abi. \"Fill EVERY night with worship. Then you can't miss it!\"" },
        scene: { focus: 390, bg: "garden", time: "night", mo: [{ who: "ayah", pose: "thumbs-up-stand", x: 330 }, { pose: "idea", x: 450 }], fx: ["stars"] },
      },
      {
        text: { id: "Detektif Mo membuat rencana: sholat, membaca Al-Qur'an, berdzikir, dan bersedekah — setiap malam!", en: "Detective Mo made a plan: pray, read the Qur'an, remember Allah and give charity — every single night!" },
        scene: { focus: 390, bg: "living", time: "night", props: [{ k: "tasbih", x: 440 }], mo: [{ pose: "pose-27", x: 335 }], fx: ["sparkle"] },
      },
      {
        text: { id: "Detektif Ais menghafal doa yang diajarkan Rasulullah ﷺ: \"Allahumma innaka 'afuwwun tuhibbul 'afwa fa'fu 'anni.\"", en: "Detective Ais learned the du'a the Prophet ﷺ taught: \"Allahumma innaka 'afuwwun tuhibbul 'afwa fa'fu 'anni.\"" },
        quote: {
          id: "\"Ya Allah, sesungguhnya Engkau Maha Pemaaf dan menyukai maaf, maka maafkanlah aku.\" (HR. Tirmidzi 3513)",
          en: "\"O Allah, You are the Pardoner and You love to pardon, so pardon me.\" (Tirmidhi 3513)",
        },
        scene: { focus: 390, bg: "living", time: "night", mo: [{ who: "ais", pose: "dua-hands-closed", x: 390 }], fx: ["stars"] },
      },
      {
        text: { id: "Malam kedua puluh tiga, Mo tertidur di sajadah. Malam kedua puluh lima, Ais yang tertidur. Detektif juga butuh tidur!", en: "On the twenty-third night, Mo fell asleep on the prayer mat. On the twenty-fifth, it was Ais. Detectives need sleep too!" },
        scene: { focus: 390, bg: "living", time: "night", props: [{ k: "mat", x: 392 }], mo: [{ pose: "pose-39", x: 340, move: "still" }, { who: "ais", pose: "sleep-pillow", x: 455, move: "still" }], fx: ["zzz"] },
      },
      {
        text: { id: "Malam kedua puluh tujuh, mereka sholat di masjid bersama Kak Adam, lalu berdoa lama sekali. Masjidnya terang dan tenang.", en: "On the twenty-seventh night, they prayed at the mosque with Kak Adam, then made du'a for a long, long time. The mosque was bright and calm." },
        scene: { focus: 390, bg: "mosque", time: "night", mo: [{ who: "adam", pose: "sholat-takbir", x: 335 }, { pose: "thank-you", x: 445 }], fx: ["stars"] },
      },
      {
        text: { id: "Mo memasukkan uang tabungannya ke kotak infak masjid. Cling! \"Siapa tahu malam ini Lailatul Qadar!\"", en: "Mo dropped his savings into the charity box. Clink! \"Maybe tonight is Laylatul Qadr!\"" },
        scene: { focus: 390, bg: "mosque", time: "night", props: [{ k: "infaqbox", x: 442, s: 0.8 }], mo: [{ pose: "pose-24", x: 335 }], fx: ["sparkle"] },
      },
      {
        text: { id: "Paginya, matahari terbit lembut sekali. Mo berbisik, \"Ais… jangan-jangan semalam?\" Ais tersenyum. \"Hanya Allah yang tahu.\"", en: "The next morning, the sun rose ever so softly. Mo whispered, \"Ais… do you think it was last night?\" Ais smiled. \"Only Allah knows.\"" },
        scene: { focus: 390, bg: "garden", props: [{ k: "sun", x: 392, y: 150, s: 0.6 }], mo: [{ pose: "pose-16", x: 330 }, { who: "ais", pose: "heart-hands-smile", x: 455 }] },
      },
      {
        text: { id: "\"Yang penting,\" kata Ais, \"kita sudah mencarinya setiap malam.\" Para detektif saling tos. Kasus ditutup — dengan bahagia!", en: "\"What matters,\" said Ais, \"is that we searched every night.\" The detectives high-fived. Case closed — happily!" },
        scene: { focus: 390, bg: "garden", mo: [{ pose: "pose-25", x: 330 }, { who: "ais", pose: "cheer-wink", x: 455 }], fx: ["confetti"] },
      },
      {
        text: { id: "Ibadah apa yang ingin kamu lakukan di malam-malam terakhir Ramadan? 🔦", en: "What would you like to do on the last nights of Ramadan? 🔦" },
        scene: { focus: 390, bg: "living", time: "night", props: [{ k: "flashlight", x: 445, s: 0.8 }], mo: [{ pose: "thank-you", x: 335 }], fx: ["stars"] },
      },
    ],
  },
];

/** Space out groups for the phone page; a lone character keeps its spot so
 *  the prop beside it stays in view. */
const lay = (sc: PicScene): PicScene => ((sc.mo?.length ?? 0) > 1 ? stage(sc) : sc);

export const RAMADAN_BOOKS_2: PictureBook[] = RAW.map((b) => ({
  ...b,
  cover: lay(b.cover),
  pages: b.pages.map((p) => ({ ...p, scene: lay(p.scene) })),
}));
