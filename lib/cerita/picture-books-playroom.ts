import type { PicScene, PictureBook } from "./picture-books";


/**
 * Pretend-play picture books set in the themed playrooms from the Baby Mo
 * show (components/story-art/photo-bg.tsx, bg: "play-…"). The playroom is
 * the stage; the adventure happens in the twins' imagination, and the
 * lesson comes home to real life on the last pages.
 */
const RAW: PictureBook[] = [
  /* ───────────────────────── 1. Space: the cardboard rocket ───────────────────────── */
  {
    slug: "roket-kardus-ke-bulan",
    pose: "baby-mo-pose-26.png",
    published: "2026-11-28",
    title: { id: "Roket Kardus ke Bulan", en: "The Cardboard Rocket to the Moon" },
    hook: {
      id: "Hujan, bosan, lalu… WUUUSH! Si kembar terbang ke luar angkasa dengan roket kardus. Tapi saat lampu dimatikan, luar angkasa terasa gelap dan jauh sekali dari rumah.",
      en: "Rain, boredom, then… WHOOSH! The twins blast into space in a cardboard rocket. But when the lights go off, space feels very dark and very far from home.",
    },
    anchor: { type: "parenting", slug: "anak-bertanya-allah-di-mana" },
    takeaway: {
      id: "Anak yang tahu Allah selalu bersamanya punya tempat aman di mana pun — bahkan di \"luar angkasa\" yang gelap.",
      en: "A child who knows Allah is always with them carries a safe place everywhere — even into a dark \"outer space\".",
    },
    tags: ["luar angkasa", "bintang", "takut gelap", "allah dekat", "imajinasi", "bergantian", "abi"],
    card: {
      title: { id: "Saat Anak Bertanya \"Allah di Mana?\"", en: "When Your Child Asks \"Where Is Allah?\"" },
      items: {
        id: [
          "Jawab dengan tenang dan sederhana: \"Allah Maha Tinggi, dan Allah selalu bersama kita — melihat, mendengar, dan menjaga.\"",
          "Ajak menatap langit malam bersama dan hitung bintang. Rasa takjub adalah pintu pertama mengenal Allah.",
          "Saat anak takut gelap, jangan ditertawakan. Pegang tangannya dan ingatkan: Allah dekat, Ayah dan Bunda juga dekat.",
        ],
        en: [
          "Answer calmly and simply: \"Allah is the Most High, and Allah is always with us — seeing, hearing and protecting.\"",
          "Look at the night sky together and count the stars. Wonder is the first door to knowing Allah.",
          "When your child is afraid of the dark, don't laugh. Hold their hand and remind them: Allah is near, and so are you.",
        ],
      },
    },
    cover: {
      focus: 380, bg: "play-space",
      props: [{ k: "box", x: 400, s: 0.8 }],
      mo: [{ pose: "pose-26", x: 310, move: "hop" }, { who: "ais", pose: "point-star", x: 480 }],
      fx: ["sparkle"],
    },
    pages: [
      {
        text: { id: "Hujan turun sejak pagi. Baby Mo dan Baby Ais rebahan di karpet. \"Bosaaan…\"", en: "It had been raining since morning. Baby Mo and Baby Ais lay flat on the rug. \"So booored…\"" },
        scene: { focus: 360, bg: "living", time: "rain", mo: [{ pose: "pose-17", x: 300, move: "still" }, { who: "ais", pose: "lie-chin-hands", x: 450, move: "still" }], fx: ["rain"] },
      },
      {
        text: { id: "Abi membuka pintu ruang main. Di dindingnya ada roket, planet, dan bintang-bintang. \"Kapten Mo, Kapten Ais… siap terbang ke luar angkasa?\"", en: "Abi opened the playroom door. Its walls were full of rockets, planets and stars. \"Captain Mo, Captain Ais… ready to fly into space?\"" },
        scene: { focus: 360, bg: "play-space", mo: [{ who: "ayah", pose: "arms-open-welcome", x: 250 }, { pose: "wow", x: 390 }, { who: "ais", pose: "dreamy-delight", x: 490 }], fx: ["sparkle"] },
      },
      {
        text: { id: "Mereka membuat roket dari kardus bekas. Ais menggambar jendela bulat. Mo menempelkan sayap.", en: "They built a rocket out of an old box. Ais drew a round window. Mo stuck on the wings." },
        scene: { focus: 390, bg: "play-space", props: [{ k: "box", x: 400, s: 0.8 }], mo: [{ who: "ais", pose: "draw-floor", x: 300 }, { pose: "pose-29", x: 500 }] },
      },
      {
        text: { id: "\"Aku kaptennya!\" seru Mo. \"Aku juga mau jadi kapten!\" seru Ais. Mereka saling tarik kardus. Kreeek… sayapnya robek.", en: "\"I'm the captain!\" shouted Mo. \"I want to be captain too!\" shouted Ais. They tugged the box back and forth. Rrrip… a wing tore off." },
        scene: { focus: 390, bg: "play-space", props: [{ k: "box", x: 400, s: 0.8 }], mo: [{ pose: "pose-27", x: 300 }, { who: "ais", pose: "grumpy", x: 500 }] },
      },
      {
        text: { id: "Abi berjongkok. \"Roket sungguhan punya dua orang penting: kapten dan navigator. Kapten menyetir, navigator membaca peta bintang. Dua-duanya hebat.\"", en: "Abi crouched down. \"A real rocket has two important people: the captain and the navigator. The captain steers, the navigator reads the star map. Both are amazing.\"" },
        scene: { focus: 360, bg: "play-space", mo: [{ who: "ayah", pose: "teach-point-kneel", x: 260 }, { pose: "pose-23", x: 400 }, { who: "ais", pose: "think-question", x: 500 }] },
      },
      {
        text: { id: "Ais memilih jadi navigator, Mo jadi kapten. Mereka menambal sayap bersama-sama. \"Bismillah!\"", en: "Ais chose to be navigator and Mo was captain. They patched the wing together. \"Bismillah!\"" },
        scene: { focus: 390, bg: "play-space", props: [{ k: "box", x: 400, s: 0.8 }], mo: [{ pose: "pose-25", x: 300 }, { who: "ais", pose: "ok-wink", x: 500 }], fx: ["sparkle"] },
      },
      {
        text: { id: "\"Sepuluh… sembilan… delapan… tiga, dua, satu… MELUNCUR!\" WUUUSH!", en: "\"Ten… nine… eight… three, two, one… LIFT OFF!\" WHOOOSH!" },
        scene: { focus: 390, bg: "play-space", props: [{ k: "box", x: 400, s: 0.8 }], mo: [{ pose: "pose-02", x: 300, move: "hop" }, { who: "ais", pose: "jump-joy", x: 500, move: "hop" }], fx: ["confetti"] },
      },
      {
        text: { id: "Mereka melewati bulan. \"Bulannya ada lubang-lubangnya!\" lapor navigator Ais dari teropong.", en: "They flew past the moon. \"The moon has holes in it!\" reported Navigator Ais through the telescope." },
        scene: { focus: 390, bg: "play-space", props: [{ k: "moon", x: 520, y: 230, s: 0.6 }], mo: [{ who: "ais", pose: "telescope", x: 330 }, { pose: "wow", x: 460 }] },
      },
      {
        text: { id: "Lalu Abi mematikan lampu. Ruangan jadi gelap, hanya bintang-bintang yang berkelip. \"Ini luar angkasa malam,\" bisik Abi.", en: "Then Abi switched off the light. The room went dark, and only the stars twinkled. \"This is space at night,\" whispered Abi." },
        scene: { focus: 390, bg: "play-space", time: "night", mo: [{ pose: "pose-33", x: 330 }, { who: "ais", pose: "point-star", x: 470 }], fx: ["stars"] },
      },
      {
        text: { id: "Mo memeluk lututnya. \"Ais… di luar angkasa jauh sekali dari rumah. Kalau kita tersesat, siapa yang tahu kita di mana?\"", en: "Mo hugged his knees. \"Ais… space is so far from home. If we get lost, who will know where we are?\"" },
        scene: { focus: 390, bg: "play-space", time: "night", mo: [{ pose: "pose-39", x: 340, move: "still" }, { who: "ais", pose: "hug-star-sit", x: 470, move: "still" }], fx: ["stars"] },
      },
      {
        text: { id: "Ais menggenggam tangan Mo. Abi duduk di sebelah mereka. \"Allah tahu, Sayang. Di rumah, di sekolah, bahkan di bintang paling jauh — Allah selalu bersama kita.\"", en: "Ais held Mo's hand. Abi sat down beside them. \"Allah knows, sweetheart. At home, at school, even at the farthest star — Allah is always with us.\"" },
        quote: { id: "\"Dan Dia bersama kamu di mana saja kamu berada. Dan Allah Maha Melihat apa yang kamu kerjakan.\" (QS. Al-Hadid: 4)", en: "\"And He is with you wherever you are. And Allah sees what you do.\" (Qur'an, Al-Hadid 57:4)" },
        scene: { focus: 360, bg: "play-space", time: "night", mo: [{ who: "ayah", pose: "hand-heart-kneel", x: 250 }, { pose: "pose-06", x: 380, move: "still" }, { who: "ais", pose: "sit-chin-hands", x: 490, move: "still" }], fx: ["stars"] },
      },
      {
        text: { id: "\"Siapa yang memasang bintang sebanyak ini?\" tanya Mo. \"Allah,\" jawab Ais pelan. \"Seperti lampu hias raksasa di langit.\"", en: "\"Who put up so many stars?\" asked Mo. \"Allah,\" Ais answered softly. \"Like giant fairy lights in the sky.\"" },
        quote: { id: "\"Dan sungguh, telah Kami hiasi langit yang dekat dengan bintang-bintang…\" (QS. Al-Mulk: 5)", en: "\"And We have certainly adorned the nearest heaven with lamps…\" (Qur'an, Al-Mulk 67:5)" },
        scene: { focus: 390, bg: "play-space", time: "night", props: [{ k: "crescent", x: 540, y: 200, s: 0.6 }], mo: [{ pose: "idea", x: 340 }, { who: "ais", pose: "point-star", x: 460 }], fx: ["stars", "sparkle"] },
      },
      {
        text: { id: "Mo tidak takut lagi. Ia mulai menghitung. \"Satu bintang… dua… tiga… seratus!\" \"Subhanallah,\" bisik mereka bersama.", en: "Mo wasn't scared anymore. He started counting. \"One star… two… three… a hundred!\" \"Subhanallah,\" they whispered together." },
        scene: { focus: 390, bg: "play-space", time: "night", mo: [{ pose: "pose-15", x: 330 }, { who: "ais", pose: "hug-star-stand", x: 470 }], fx: ["stars", "shootingstar"] },
      },
      {
        text: { id: "Lampu menyala lagi. \"Pusat kendali memanggil kapten dan navigator!\" panggil Umi dari pintu. \"Saatnya mendarat — makan malam sudah siap!\"", en: "The light came back on. \"Mission control calling the captain and navigator!\" Umi called from the door. \"Time to land — dinner is ready!\"" },
        scene: { focus: 370, bg: "play-space", mo: [{ who: "umi", pose: "welcome-walk", x: 260 }, { pose: "run", x: 410, move: "hop" }, { who: "ais", pose: "run", x: 510, move: "hop" }] },
      },
      {
        text: { id: "Malamnya, Mo mengintip langit dari kamar. Bintang yang asli jauh lebih jauh dari roket kardusnya. Tapi Mo tahu: di mana pun ia berada, Allah dekat.", en: "That night, Mo peeked at the sky from his room. The real stars were much farther than his cardboard rocket. But Mo knew: wherever he was, Allah was near." },
        scene: { focus: 350, bg: "bedroom", time: "night", mo: [{ pose: "pose-12", x: 350, move: "still" }], fx: ["stars"] },
      },
      {
        text: { id: "Kalau kamu punya roket, kamu mau terbang ke mana? Malam ini, coba hitung bintang bersama Ayah atau Bunda! 🚀", en: "If you had a rocket, where would you fly? Tonight, try counting the stars with your mum or dad! 🚀" },
        scene: { focus: 390, bg: "play-space", props: [{ k: "box", x: 400, s: 0.8 }], mo: [{ pose: "pose-29", x: 300 }, { who: "ais", pose: "cheer-wink", x: 500 }], fx: ["sparkle"] },
      },
    ],
  },

  /* ───────────────────────── 2. Zoo: the gentlest zoo ───────────────────────── */
  {
    slug: "kebun-binatang-paling-lembut",
    pose: "baby-mo-pose-35.png",
    published: "2026-11-29",
    title: { id: "Kebun Binatang Paling Lembut", en: "The Gentlest Zoo" },
    hook: {
      id: "Ruang main jadi kebun binatang! Mo jadi singa yang suka melempar boneka. Lalu seekor anak kucing sungguhan masuk… dan Mo menarik ekornya.",
      en: "The playroom becomes a zoo! Mo is a lion who loves throwing the toys. Then a real kitten wanders in… and Mo pulls its tail.",
    },
    anchor: { type: "hadith", slug: "kelembutan-keindahan" },
    takeaway: {
      id: "Kelembutan kepada hewan — bahkan kepada boneka — melatih hati anak untuk lembut kepada semua makhluk.",
      en: "Gentleness with animals — even with toys — trains a child's heart to be gentle with every living thing.",
    },
    tags: ["hewan", "kucing", "lembut", "kasih sayang", "kebun binatang", "umi"],
    card: {
      title: { id: "Mengajarkan Lembut kepada Hewan", en: "Teaching Gentleness with Animals" },
      items: {
        id: [
          "Ajak anak membayangkan: \"Kalau kamu dipegang raksasa, rasanya bagaimana?\" Empati tumbuh dari membayangkan.",
          "Latih aturan sederhana: dekati pelan, biarkan hewan mencium tangan dulu, jangan pegang ekor dan telinga.",
          "Beri tugas kecil merawat — mengisi air minum kucing atau menyiram tanaman — supaya anak merasakan senangnya merawat.",
        ],
        en: [
          "Ask your child to imagine: \"How would it feel if a giant grabbed you?\" Empathy grows from imagining.",
          "Practise simple rules: approach slowly, let the animal sniff your hand first, never grab tails or ears.",
          "Give small caring jobs — filling the cat's water or watering plants — so your child feels the joy of looking after something.",
        ],
      },
    },
    cover: {
      focus: 390, bg: "play-zoo",
      mo: [{ pose: "pose-37", x: 320 }, { who: "ais", pose: "hug-kitten", x: 470, move: "still" }],
      fx: ["hearts"],
    },
    pages: [
      {
        text: { id: "Ruang main hari ini jadi kebun binatang! Ada singa, gajah, jerapah, dan penguin — semuanya boneka.", en: "Today the playroom was a zoo! There was a lion, an elephant, a giraffe and a penguin — all of them toys." },
        scene: { focus: 390, bg: "play-zoo", mo: [{ pose: "yeyy", x: 320, move: "hop" }, { who: "ais", pose: "arms-wide-joy", x: 480 }], fx: ["sparkle"] },
      },
      {
        text: { id: "\"Aku penjaga kebun binatangnya!\" kata Ais sambil memegang daftar tugas. \"Tugas penjaga: memberi makan, memeriksa, dan menyayangi hewan.\"", en: "\"I'm the zookeeper!\" said Ais, holding her checklist. \"A keeper's jobs: feed the animals, check on them, and love them.\"" },
        scene: { focus: 390, bg: "play-zoo", mo: [{ who: "ais", pose: "checklist", x: 340 }, { pose: "pose-24", x: 470 }] },
      },
      {
        text: { id: "Mo ingin jadi singa. \"ROAAARR!\" Ia melempar boneka jerapah tinggi-tinggi. Bruk! Jerapahnya jatuh dengan leher tertekuk.", en: "Mo wanted to be the lion. \"ROAAARR!\" He tossed the toy giraffe high into the air. Thump! It landed with its neck all bent." },
        scene: { focus: 400, bg: "play-zoo", props: [{ k: "giraffe", x: 500, s: 0.5 }], mo: [{ pose: "pose-11", x: 350, move: "hop" }] },
      },
      {
        text: { id: "\"Mo, pelan-pelan!\" kata Ais. \"Nanti hewannya sakit.\" \"Ini kan cuma boneka,\" jawab Mo sambil nyengir.", en: "\"Mo, gently!\" said Ais. \"You'll hurt the animals.\" \"They're only toys,\" Mo grinned." },
        scene: { focus: 390, bg: "play-zoo", props: [{ k: "giraffe", x: 560, s: 0.5 }], mo: [{ who: "ais", pose: "grumpy", x: 320 }, { pose: "pose-28", x: 460 }] },
      },
      {
        text: { id: "Tiba-tiba — meong! Seekor anak kucing sungguhan masuk dari pintu yang terbuka. Itu Si Belang, kucing tetangga.", en: "Suddenly — meow! A real kitten trotted in through the open door. It was Stripey, the neighbours' cat." },
        scene: { focus: 400, bg: "play-zoo", props: [{ k: "kitten", x: 500, s: 0.8 }], mo: [{ pose: "pose-31", x: 330 }, { who: "ais", pose: "surprised", x: 230 }] },
      },
      {
        text: { id: "Mo langsung berlari. \"Kucing! Kucing!\" Ia menangkap ekor Si Belang dan menariknya.", en: "Mo dashed over. \"Kitty! Kitty!\" He grabbed Stripey's tail and pulled." },
        scene: { focus: 420, bg: "play-zoo", props: [{ k: "kitten", x: 520, s: 0.8 }], mo: [{ pose: "run", x: 390, move: "hop" }] },
      },
      {
        text: { id: "Ngiaaaw! Si Belang mendesis, mencakar sedikit, lalu kabur bersembunyi di bawah rak.", en: "Mrrreow! Stripey hissed, gave a little scratch, and ran to hide under the shelf." },
        scene: { focus: 420, bg: "play-zoo", props: [{ k: "kitten", x: 590, s: 0.6 }], mo: [{ pose: "pose-09", x: 380, move: "still" }] },
      },
      {
        text: { id: "Tangan Mo tergores merah. Matanya berkaca-kaca. \"Kucingnya jahat!\"", en: "There was a red scratch on Mo's hand. His eyes filled with tears. \"That cat is mean!\"" },
        scene: { focus: 390, bg: "play-zoo", mo: [{ pose: "pose-10", x: 380, move: "still" }, { who: "ais", pose: "sad-tears", x: 500, move: "still" }] },
      },
      {
        text: { id: "Umi datang dan meniup tangan Mo pelan-pelan. \"Si Belang tidak jahat, Sayang. Ia takut. Kalau ekormu ditarik raksasa, kamu juga takut, kan?\"", en: "Umi came and blew softly on Mo's hand. \"Stripey isn't mean, sweetheart. She was scared. If a giant pulled your tail, you'd be scared too, wouldn't you?\"" },
        scene: { focus: 360, bg: "play-zoo", mo: [{ who: "umi", pose: "hug-mo", x: 330, move: "still" }] },
      },
      {
        text: { id: "Lalu Umi bercerita. Nabi ﷺ pernah menceritakan seorang laki-laki yang melihat anjing sangat kehausan. Ia turun ke sumur, mengisi sepatunya dengan air, dan memberi anjing itu minum. Allah menyukai perbuatannya dan mengampuninya.", en: "Then Umi told a story. The Prophet ﷺ once told of a man who saw a dog dying of thirst. He climbed down a well, filled his shoe with water and gave the dog a drink. Allah loved what he did and forgave him." },
        quote: { id: "Para sahabat bertanya, \"Apakah kita mendapat pahala karena berbuat baik kepada hewan?\" Beliau menjawab, \"Pada setiap makhluk yang bernyawa ada pahala.\" (HR. Bukhari 2363, Muslim 2244)", en: "The Companions asked, \"Is there a reward for us in being kind to animals?\" He said, \"In every living creature there is a reward.\" (Bukhari 2363, Muslim 2244)" },
        scene: { focus: 360, bg: "play-zoo", mo: [{ who: "umi", pose: "read-story", x: 290, move: "still" }, { pose: "pose-06", x: 420, move: "still" }, { who: "ais", pose: "sit-chin-hands", x: 520, move: "still" }] },
      },
      {
        text: { id: "\"Berbuat baik kepada kucing juga dapat pahala?\" tanya Mo. \"Iya,\" kata Umi. \"Dan cara paling baik adalah dengan lembut.\"", en: "\"Being kind to a cat gets a reward too?\" asked Mo. \"Yes,\" said Umi. \"And the best way is to be gentle.\"" },
        scene: { focus: 370, bg: "play-zoo", mo: [{ who: "umi", pose: "explain-hand", x: 280 }, { pose: "pose-23", x: 420 }] },
      },
      {
        text: { id: "Mo punya ide. Ia mengisi mangkuk kecil dengan air, lalu duduk diam di dekat rak. Tidak berlari. Tidak berteriak. Hanya menunggu.", en: "Mo had an idea. He filled a little bowl with water and sat quietly near the shelf. No running. No shouting. Just waiting." },
        scene: { focus: 400, bg: "play-zoo", props: [{ k: "bowl", x: 510, s: 0.6 }], mo: [{ pose: "pose-06", x: 380, move: "still" }] },
      },
      {
        text: { id: "Pelan… pelan… Si Belang mengintip. Ia mencium air itu, lalu minum — slurp, slurp, slurp.", en: "Slowly… slowly… Stripey peeked out. She sniffed the water, then drank — lap, lap, lap." },
        scene: { focus: 410, bg: "play-zoo", props: [{ k: "bowl", x: 500, s: 0.6 }, { k: "kitten", x: 560, s: 0.7 }], mo: [{ pose: "pose-35", x: 370, move: "still" }] },
      },
      {
        text: { id: "Lalu Si Belang naik ke pangkuan Mo dan mendengkur. \"Purrr…\" Mo tersenyum lebar. \"Ais, dia memaafkan aku!\"", en: "Then Stripey climbed onto Mo's lap and purred. \"Purrr…\" Mo beamed. \"Ais, she forgave me!\"" },
        scene: { focus: 400, bg: "play-zoo", props: [{ k: "kitten", x: 450, s: 0.6 }], mo: [{ pose: "pose-13", x: 380, move: "still" }, { who: "ais", pose: "heart-hands", x: 520 }], fx: ["hearts"] },
      },
      {
        text: { id: "Sejak hari itu, kebun binatang si kembar punya aturan baru, ditulis besar-besar oleh Ais: SEMUA HEWAN DISAYANG PELAN-PELAN. Yang boneka juga.", en: "From that day on, the twins' zoo had a new rule, written big by Ais: EVERY ANIMAL GETS GENTLE LOVE. The toy ones too." },
        scene: { focus: 390, bg: "play-zoo", props: [{ k: "giraffe", x: 560, s: 0.5 }], mo: [{ pose: "pose-41", x: 330 }, { who: "ais", pose: "thumbs-up-walk", x: 460 }], fx: ["hearts"] },
      },
      {
        text: { id: "Hewan apa yang paling kamu sayangi? Bagaimana cara menyayanginya dengan lembut? 🐱", en: "Which animal do you love most? How can you love it gently? 🐱" },
        scene: { focus: 390, bg: "play-zoo", mo: [{ pose: "pose-37", x: 320 }, { who: "ais", pose: "hug-cat", x: 470, move: "still" }], fx: ["sparkle"] },
      },
    ],
  },

  /* ───────────────────────── 3. Train: taking turns ───────────────────────── */
  {
    slug: "kereta-gantian-kak-adam",
    pose: "baby-mo-pose-14.png",
    published: "2026-11-30",
    title: { id: "Kereta Gantian Kak Adam", en: "Kak Adam's Take-Turns Train" },
    hook: {
      id: "Kak Adam membuat kereta dari kursi-kursi kecil. Mo merebut topi masinis dan tidak mau gantian. Tapi kereta tanpa penumpang… tidak bisa berangkat.",
      en: "Kak Adam builds a train out of little chairs. Mo grabs the driver's cap and won't take turns. But a train with no passengers… can't go anywhere.",
    },
    anchor: { type: "parenting", slug: "anak-tidak-mau-berbagi" },
    takeaway: {
      id: "Bergantian adalah latihan sabar dan latihan bahagia untuk orang lain. Alat sederhana seperti jam pasir membuat giliran terasa adil.",
      en: "Taking turns trains patience — and joy for someone else. A simple tool like a sand timer makes turns feel fair.",
    },
    tags: ["bergantian", "berbagi", "sabar", "kereta", "kak adam", "saudara"],
    card: {
      title: { id: "Supaya Anak Mau Bergantian", en: "Helping Children Take Turns" },
      items: {
        id: [
          "Pakai jam pasir atau timer: \"Satu putaran, satu giliran.\" Anak lebih mudah menerima aturan yang terlihat.",
          "Puji saat anak memberi giliran, sekecil apa pun: \"Masya Allah, kamu sabar sekali tadi.\"",
          "Jangan paksa berbagi barang kesayangan. Simpan dulu barang \"khusus\" sebelum teman datang, sisanya untuk bergantian.",
        ],
        en: [
          "Use a sand timer: \"One turn of the sand, one turn each.\" Children accept a rule they can see.",
          "Praise every time your child gives a turn, however small: \"Masya Allah, you were so patient.\"",
          "Don't force sharing of a treasured toy. Put \"special\" things away before friends come; everything else is for turns.",
        ],
      },
    },
    cover: {
      focus: 390, bg: "play-train",
      props: [{ k: "whistle", x: 400, y: 340, s: 0.8 }],
      mo: [{ pose: "pose-29", x: 320 }, { who: "adam", pose: "wave-hello", x: 470 }],
      fx: ["sparkle"],
    },
    pages: [
      {
        text: { id: "\"Tuuut tuuut!\" Kak Adam menyusun kursi-kursi kecil berbaris. \"Kereta Ekspres Baby Mo siap berangkat dari Stasiun Ruang Main!\"", en: "\"Toot toot!\" Kak Adam lined up the little chairs. \"The Baby Mo Express is ready to leave Playroom Station!\"" },
        scene: { focus: 380, bg: "play-train", mo: [{ who: "adam", pose: "proud-hands-hips", x: 290 }, { pose: "pose-26", x: 450 }], fx: ["sparkle"] },
      },
      {
        text: { id: "Ada topi masinis, peluit, dan tiket dari kertas. \"Siapa yang mau jadi masinis pertama?\"", en: "There was a driver's cap, a whistle and paper tickets. \"Who wants to be the first driver?\"" },
        scene: { focus: 390, bg: "play-train", props: [{ k: "cap", x: 400, y: 330, s: 0.7 }], mo: [{ who: "adam", pose: "offer", x: 280 }, { pose: "pose-24", x: 440 }, { who: "ais", pose: "wave-big", x: 540 }] },
      },
      {
        text: { id: "\"AKU!\" teriak Mo. \"AKU!\" teriak Ais. Mo lebih cepat. Ia menyambar topi dan peluit, lalu memeluknya erat-erat.", en: "\"ME!\" yelled Mo. \"ME!\" yelled Ais. Mo was faster. He snatched the cap and the whistle and held them tight." },
        scene: { focus: 400, bg: "play-train", mo: [{ pose: "pose-27", x: 350 }, { who: "ais", pose: "grumpy", x: 490 }] },
      },
      {
        text: { id: "\"Gantian, Mo,\" kata Ais. \"Nggak mau! Masinisnya aku terus!\" PRIIIT! Mo meniup peluit keras-keras.", en: "\"Take turns, Mo,\" said Ais. \"No way! I'm the driver forever!\" PREEEET! Mo blew the whistle as loud as he could." },
        scene: { focus: 400, bg: "play-train", props: [{ k: "whistle", x: 400, y: 260, s: 0.7 }], mo: [{ pose: "pose-04", x: 340 }, { who: "ais", pose: "cry-sit", x: 490, move: "still" }] },
      },
      {
        text: { id: "Tapi kereta tidak bisa berangkat. Ais duduk cemberut di pojok. Kursi-kursi penumpang kosong semua.", en: "But the train couldn't leave. Ais sat sulking in the corner. All the passenger seats were empty." },
        scene: { focus: 400, bg: "play-train", mo: [{ pose: "pose-23", x: 430 }, { who: "ais", pose: "grumpy", x: 260 }] },
      },
      {
        text: { id: "\"Masinis tanpa penumpang… cuma berdiri sendirian,\" kata Kak Adam pelan. Mo melihat sekeliling. Sepi. Tidak seru sama sekali.", en: "\"A driver with no passengers… is just standing there alone,\" Kak Adam said quietly. Mo looked around. It was quiet. Not fun at all." },
        scene: { focus: 380, bg: "play-train", mo: [{ who: "adam", pose: "kneel-talk", x: 290 }, { pose: "pose-40", x: 430 }] },
      },
      {
        text: { id: "Kak Adam mengambil jam pasir. \"Di stasiun sungguhan, semua orang antre dan bergantian. Satu putaran pasir, satu giliran.\"", en: "Kak Adam brought out a sand timer. \"At a real station, everyone queues and takes turns. One turn of the sand, one turn each.\"" },
        scene: { focus: 390, bg: "play-train", props: [{ k: "hourglass", x: 410, y: 340, s: 0.8 }], mo: [{ who: "adam", pose: "offer", x: 290 }, { pose: "pose-16", x: 500 }] },
      },
      {
        text: { id: "Mo menatap peluit di tangannya. Lalu… pelan-pelan ia memberikannya kepada Ais. \"Ais duluan. Kamu sudah nunggu paling lama.\"", en: "Mo looked at the whistle in his hand. Then… slowly, he held it out to Ais. \"You go first, Ais. You've waited the longest.\"" },
        scene: { focus: 390, bg: "play-train", props: [{ k: "whistle", x: 400, y: 300, s: 0.6 }], mo: [{ pose: "pose-14", x: 330 }, { who: "ais", pose: "surprised", x: 470 }], fx: ["sparkle"] },
      },
      {
        text: { id: "Mata Ais berbinar. Ia memakai topi masinis. \"Penumpang, silakan naik! Tiketnya, tolong!\"", en: "Ais's eyes lit up. She put on the driver's cap. \"Passengers, all aboard! Tickets, please!\"" },
        scene: { focus: 390, bg: "play-train", mo: [{ who: "ais", pose: "megaphone", x: 350 }, { pose: "pose-25", x: 480 }] },
      },
      {
        text: { id: "Mo jadi penumpang pertama. Ia menyerahkan tiket, duduk, dan melambai ke luar jendela khayalan. Ternyata jadi penumpang juga seru!", en: "Mo was the first passenger. He handed over his ticket, sat down and waved out of a pretend window. Being a passenger was fun too!" },
        scene: { focus: 390, bg: "play-train", props: [{ k: "card", x: 300, y: 320, s: 0.6 }], mo: [{ pose: "pose-13", x: 400, move: "still" }] },
      },
      {
        text: { id: "\"Stasiun berikutnya: Kebun Kurma! … Stasiun Pantai! … Stasiun Rumah Nenek!\" Kak Adam menirukan suara kereta. Jes-jes-jes-jes!", en: "\"Next stop: Date Palm Garden! … Beach Station! … Grandma's House!\" Kak Adam made train noises. Choo-choo-choo-choo!" },
        scene: { focus: 390, bg: "play-train", mo: [{ who: "adam", pose: "run", x: 280, move: "hop" }, { pose: "pose-20", x: 420 }, { who: "ais", pose: "arms-wide-joy", x: 530 }], fx: ["notes"] },
      },
      {
        text: { id: "Pasir di jam pasir habis. Sekarang giliran Mo! Ia memakai topi masinis sambil tersenyum lebar. PRIIIT!", en: "The sand ran out. Now it was Mo's turn! He put on the driver's cap with a huge smile. PREEEET!" },
        scene: { focus: 390, bg: "play-train", props: [{ k: "hourglass", x: 500, y: 340, s: 0.7 }], mo: [{ pose: "pose-29", x: 370 }], fx: ["sparkle"] },
      },
      {
        text: { id: "Lalu giliran Kak Adam, lalu Mo lagi, lalu Ais lagi. Tidak ada yang menangis. Keretanya penuh tawa.", en: "Then it was Kak Adam's turn, then Mo again, then Ais again. Nobody cried. The train was full of laughter." },
        scene: { focus: 390, bg: "play-train", mo: [{ who: "adam", pose: "clap-cheer", x: 270 }, { pose: "yeyy", x: 410, move: "hop" }, { who: "ais", pose: "jump-joy", x: 530, move: "hop" }], fx: ["confetti"] },
      },
      {
        text: { id: "Umi mengintip dari pintu. \"Masya Allah, keretanya rapi sekali.\" \"Kak Adam yang mengajari gantian!\" kata Ais. \"Tapi Mo yang memberi duluan,\" kata Kak Adam.", en: "Umi peeked in at the door. \"Masya Allah, what a tidy train.\" \"Kak Adam taught us to take turns!\" said Ais. \"But Mo was the first to give,\" said Kak Adam." },
        quote: { id: "\"…Dan tolong-menolonglah kamu dalam (mengerjakan) kebajikan dan takwa…\" (QS. Al-Ma'idah: 2)", en: "\"…And help one another in goodness and righteousness…\" (Qur'an, Al-Ma'idah 5:2)" },
        scene: { focus: 370, bg: "play-train", mo: [{ who: "umi", pose: "touched-cheek", x: 260 }, { pose: "pose-35", x: 400 }, { who: "adam", pose: "hug-side", x: 520 }], fx: ["hearts"] },
      },
      {
        text: { id: "Malamnya, Mo berbisik sebelum tidur, \"Menunggu giliran ternyata nggak lama… kalau sambil ikut senang untuk orang lain.\"", en: "That night, Mo whispered before sleep, \"Waiting for a turn isn't long after all… if you're happy for someone else while you wait.\"" },
        scene: { focus: 360, bg: "bedroom", time: "night", mo: [{ pose: "pose-12", x: 320, move: "still" }, { who: "ais", pose: "sleep-pillow", x: 450, move: "still" }], fx: ["stars", "zzz"] },
      },
      {
        text: { id: "Mainan apa yang paling susah kamu gantian? Yuk coba pakai jam pasir — satu putaran, satu giliran! 🚂", en: "Which toy is hardest for you to take turns with? Try a sand timer — one turn of the sand, one turn each! 🚂" },
        scene: { focus: 390, bg: "play-train", props: [{ k: "hourglass", x: 400, y: 340, s: 0.7 }], mo: [{ pose: "pose-25", x: 310 }, { who: "ais", pose: "cheer-wink", x: 490 }], fx: ["sparkle"] },
      },
    ],
  },

  /* ───────────────────────── 4. Fire station: little firefighters ───────────────────────── */
  {
    slug: "pemadam-kebakaran-cilik",
    pose: "baby-mo-pose-27.png",
    published: "2026-12-01",
    title: { id: "Pemadam Kebakaran Cilik", en: "The Little Firefighters" },
    hook: {
      id: "Ngiu-ngiu-ngiu! Abi jadi komandan, si kembar jadi pemadam. Mo ingin menyelamatkan Pak Beruang sendirian — sampai ia jatuh dari tangga.",
      en: "Nee-naw nee-naw! Abi is the chief and the twins are firefighters. Mo wants to rescue Mr Bear all by himself — until he slips off the ladder.",
    },
    anchor: { type: "hadith", slug: "main-bersama-anak" },
    takeaway: {
      id: "Bermain peran bersama orang tua adalah cara paling menyenangkan untuk mengajarkan kerja sama — dan aturan keselamatan yang sungguhan.",
      en: "Role-play with a parent is the happiest way to teach teamwork — and real safety rules.",
    },
    tags: ["pemadam kebakaran", "menolong", "kerja sama", "keselamatan api", "abi", "bermain peran"],
    card: {
      title: { id: "Aturan Api untuk Anak", en: "Fire Rules for Little Ones" },
      items: {
        id: [
          "Korek api, kompor, lilin, dan stopkontak bukan mainan. Simpan korek di tempat yang tidak terjangkau anak.",
          "Latih bersama: kalau ada asap, merangkak rendah, keluar rumah, dan panggil orang dewasa. Latihan lewat permainan lebih mudah diingat.",
          "Hafalkan bersama nomor darurat (pemadam kebakaran 113) dan tempat berkumpul keluarga di luar rumah.",
        ],
        en: [
          "Matches, stoves, candles and sockets are not toys. Keep lighters well out of reach.",
          "Practise together: if there's smoke, crawl low, get outside and call a grown-up. Practice through play sticks.",
          "Learn your local emergency number together (113 for the fire service in Indonesia) and a family meeting spot outside.",
        ],
      },
    },
    cover: {
      focus: 380, bg: "play-firefighter",
      mo: [{ who: "ayah", pose: "thumbs-up-stand", x: 250 }, { pose: "pose-27", x: 390 }, { who: "ais", pose: "megaphone", x: 500 }],
      fx: ["sparkle"],
    },
    pages: [
      {
        text: { id: "Ngiu-ngiu-ngiu! Hari ini Abi libur, dan ruang main berubah jadi markas pemadam kebakaran.", en: "Nee-naw nee-naw! Abi had a day off, and the playroom turned into a fire station." },
        scene: { focus: 380, bg: "play-firefighter", mo: [{ who: "ayah", pose: "cheer-fists-stand", x: 260 }, { pose: "yeyy", x: 400, move: "hop" }, { who: "ais", pose: "jump-joy", x: 510, move: "hop" }], fx: ["confetti"] },
      },
      {
        text: { id: "\"Komandan Abi melapor! Pemadam Mo dan pemadam Ais, siap bertugas?\" \"SIAP, KOMANDAN!\"", en: "\"Chief Abi reporting! Firefighter Mo and Firefighter Ais, ready for duty?\" \"READY, CHIEF!\"" },
        scene: { focus: 380, bg: "play-firefighter", mo: [{ who: "ayah", pose: "idea-point-stand", x: 260 }, { pose: "pose-24", x: 400 }, { who: "ais", pose: "ok-wink", x: 510 }] },
      },
      {
        text: { id: "\"Darurat! Pak Beruang terjebak di atas menara!\" Di puncak menara balok, Pak Beruang menunggu pertolongan.", en: "\"Emergency! Mr Bear is stuck at the top of the tower!\" High on the block tower, Mr Bear waited to be rescued." },
        scene: { focus: 420, bg: "play-firefighter", props: [{ k: "blockstall", x: 520, s: 0.8 }, { k: "teddy", x: 520, y: 225, s: 0.45 }], mo: [{ pose: "pose-33", x: 370 }] },
      },
      {
        text: { id: "\"Biar aku sendiri!\" seru Mo. Ia berlari ke tangga tanpa menunggu siapa-siapa.", en: "\"I'll do it myself!\" shouted Mo. He ran to the ladder without waiting for anyone." },
        scene: { focus: 420, bg: "play-firefighter", props: [{ k: "blockstall", x: 540, s: 0.8 }, { k: "teddy", x: 540, y: 225, s: 0.45 }, { k: "ladderup", x: 470 }], mo: [{ pose: "run", x: 380, move: "hop" }] },
      },
      {
        text: { id: "Satu anak tangga, dua anak tangga… goyang… GUBRAK! Mo terpeleset dan jatuh terduduk. Lututnya sakit.", en: "One rung, two rungs… wobble… CRASH! Mo slipped and landed on his bottom. His knee hurt." },
        scene: { focus: 420, bg: "play-firefighter", props: [{ k: "blockstall", x: 540, s: 0.8 }, { k: "teddy", x: 540, y: 225, s: 0.45 }, { k: "ladderup", x: 470 }], mo: [{ pose: "pose-09", x: 400, move: "still" }] },
      },
      {
        text: { id: "Abi berjongkok dan memeriksa lutut Mo. \"Tidak apa-apa, Pemadam Mo. Tapi tahu tidak? Pemadam kebakaran sungguhan tidak pernah bekerja sendirian.\"", en: "Abi knelt and checked Mo's knee. \"You're okay, Firefighter Mo. But do you know what? Real firefighters never work alone.\"" },
        scene: { focus: 360, bg: "play-firefighter", mo: [{ who: "ayah", pose: "teach-point-kneel", x: 270 }, { pose: "pose-06", x: 410, move: "still" }] },
      },
      {
        text: { id: "\"Ada yang memegangi tangga, ada yang menyemprot air, ada yang menggendong korban. Kalau bekerja sama, semua selamat.\"", en: "\"One holds the ladder, one sprays the water, one carries the person to safety. When we work together, everyone is safe.\"" },
        scene: { focus: 380, bg: "play-firefighter", props: [{ k: "hose", x: 520, s: 0.7 }], mo: [{ who: "ayah", pose: "idea-point-stand", x: 260 }, { pose: "pose-22", x: 400 }] },
      },
      {
        text: { id: "Kali ini Ais memegangi tangga erat-erat. Mo naik pelan-pelan. Satu… dua… tiga… \"Pak Beruang, aku datang!\"", en: "This time Ais held the ladder tight. Mo climbed slowly. One… two… three… \"Mr Bear, I'm coming!\"" },
        scene: { focus: 420, bg: "play-firefighter", props: [{ k: "blockstall", x: 540, s: 0.8 }, { k: "teddy", x: 540, y: 225, s: 0.45 }, { k: "ladderup", x: 470 }], mo: [{ who: "ais", pose: "excited-fists", x: 330 }, { pose: "pose-34", x: 450 }] },
      },
      {
        text: { id: "Mo menggendong Pak Beruang turun, dan Abi menyemprot \"air\" dari selang mainan. Psssshhh! Apinya padam!", en: "Mo carried Mr Bear down, and Abi sprayed \"water\" from the toy hose. Pssshhh! The fire was out!" },
        scene: { focus: 390, bg: "play-firefighter", props: [{ k: "hose", x: 300, s: 0.7 }, { k: "teddy", x: 470, y: 320, s: 0.45 }], mo: [{ who: "ayah", pose: "cheer-knee-up", x: 240 }, { pose: "yes", x: 400 }], fx: ["bubbles"] },
      },
      {
        text: { id: "\"Misi berhasil!\" Mereka bertos bertiga. Pak Beruang selamat, dan tidak ada yang terluka lagi.", en: "\"Mission complete!\" They did a three-way high five. Mr Bear was safe, and nobody else got hurt." },
        scene: { focus: 380, bg: "play-firefighter", props: [{ k: "teddy", x: 560, s: 0.5 }], mo: [{ who: "ayah", pose: "high-five-mo", x: 270 }, { pose: "yeyy", x: 400, move: "hop" }, { who: "ais", pose: "cheer-wink", x: 500 }], fx: ["confetti"] },
      },
      {
        text: { id: "Lalu Komandan Abi duduk serius. \"Sekarang pelajaran pemadam sungguhan. Api itu panas dan berbahaya. Korek api, kompor, dan lilin bukan mainan. Kalau melihat api, jangan didekati — panggil orang dewasa.\"", en: "Then Chief Abi sat down seriously. \"Now a real firefighter lesson. Fire is hot and dangerous. Matches, stoves and candles are not toys. If you see fire, don't go near it — call a grown-up.\"" },
        scene: { focus: 370, bg: "play-firefighter", mo: [{ who: "ayah", pose: "stern-gentle", x: 260 }, { pose: "pose-22", x: 400 }, { who: "ais", pose: "sit-chin-hands", x: 510, move: "still" }] },
      },
      {
        text: { id: "\"Kalau ada asap, merangkak rendah di bawahnya, lalu keluar bersama-sama,\" kata Abi. Si kembar berlatih merangkak seperti kura-kura. Lucu sekali!", en: "\"If there's smoke, crawl low underneath it and get out together,\" said Abi. The twins practised crawling like turtles. It was so funny!" },
        scene: { focus: 380, bg: "play-firefighter", mo: [{ who: "ayah", pose: "thumbs-up-kneel", x: 260 }, { pose: "pose-17", x: 400, move: "still" }, { who: "ais", pose: "lie-chin-hands", x: 530, move: "still" }] },
      },
      {
        text: { id: "\"Abi, pemadam kebakaran itu pahlawan, ya?\" tanya Ais. \"Iya. Siapa pun yang menolong orang lain itu pahlawan. Dan Allah selalu menolong orang yang suka menolong.\"", en: "\"Abi, firefighters are heroes, aren't they?\" asked Ais. \"Yes. Anyone who helps others is a hero. And Allah always helps those who help others.\"" },
        quote: { id: "\"Allah senantiasa menolong seorang hamba selama hamba itu menolong saudaranya.\" (HR. Muslim 2699)", en: "\"Allah helps His servant as long as the servant helps his brother.\" (Muslim 2699)" },
        scene: { focus: 370, bg: "play-firefighter", mo: [{ who: "ayah", pose: "hand-heart-kneel", x: 260 }, { who: "ais", pose: "think-question", x: 400 }, { pose: "pose-07", x: 510 }] },
      },
      {
        text: { id: "Sore itu, Umi pulang membawa banyak belanjaan. Mo dan Ais berpandangan. \"Darurat! Umi kerepotan!\" Mereka berlari membantu.", en: "That afternoon, Umi came home with lots of shopping. Mo and Ais looked at each other. \"Emergency! Umi needs help!\" They ran to help." },
        scene: { focus: 380, bg: "garden", mo: [{ who: "umi", pose: "groceries", x: 260 }, { pose: "run", x: 410, move: "hop" }, { who: "ais", pose: "run", x: 520, move: "hop" }] },
      },
      {
        text: { id: "Mo membawa kantong sayur, Ais membawa roti. \"Terima kasih, pemadam-pemadam kecil Umi,\" kata Umi. Ternyata menolong itu rasanya hangat sekali.", en: "Mo carried the vegetable bag and Ais carried the bread. \"Thank you, my little firefighters,\" said Umi. Helping felt so warm inside." },
        scene: { focus: 370, bg: "kitchen", props: [{ k: "veggies", x: 540, s: 0.6 }], mo: [{ who: "umi", pose: "thank-you", x: 260 }, { pose: "pose-29", x: 400 }, { who: "ais", pose: "heart-hands", x: 500 }], fx: ["hearts"] },
      },
      {
        text: { id: "Siapa yang bisa kamu tolong hari ini? Dan ingat: api bukan mainan! 🚒", en: "Who can you help today? And remember: fire is not a toy! 🚒" },
        scene: { focus: 390, bg: "play-firefighter", mo: [{ pose: "pose-27", x: 330 }, { who: "ais", pose: "megaphone", x: 470 }], fx: ["sparkle"] },
      },
    ],
  },

  /* ───────────────────────── 5. Farm: little farmers ───────────────────────── */
  {
    slug: "petani-cilik-di-ruang-main",
    pose: "baby-mo-pose-04.png",
    published: "2026-12-02",
    title: { id: "Petani Cilik di Ruang Main", en: "Little Farmers in the Playroom" },
    hook: {
      id: "Mo mendorong piringnya — nasi dan wortel masih banyak. Besoknya Abi mengajak si kembar jadi petani sehari. Ternyata sebutir nasi punya perjalanan yang panjang sekali!",
      en: "Mo pushes his plate away — still full of rice and carrots. The next day Abi makes the twins farmers for a day. It turns out one grain of rice has a very long journey!",
    },
    anchor: { type: "parenting", slug: "susah-makan" },
    takeaway: {
      id: "Anak lebih menghargai makanan saat ia tahu perjalanannya — dan saat ia boleh mengambil porsi kecil dulu, lalu menambah.",
      en: "Children value food more once they know its journey — and when they may take a small portion first and ask for more.",
    },
    tags: ["makanan", "bersyukur", "petani", "susah makan", "adab makan", "abi"],
    card: {
      title: { id: "Saat Anak Tidak Menghabiskan Makanan", en: "When Your Child Leaves Food on the Plate" },
      items: {
        id: [
          "Mulai dengan porsi kecil. Lebih baik anak minta tambah daripada dipaksa menghabiskan piring yang terlalu penuh.",
          "Ceritakan perjalanan makanan: dari petani, peternak, pedagang, sampai dapur. Ajak ke pasar atau kebun bila bisa.",
          "Biasakan Bismillah sebelum makan dan doa sesudah makan, agar makan menjadi waktu bersyukur, bukan waktu bertengkar.",
        ],
        en: [
          "Start with small portions. Better that your child asks for more than is forced through an over-full plate.",
          "Tell the journey of food: from farmer and herder to seller and kitchen. Visit a market or garden if you can.",
          "Make Bismillah before and the dua after eating a habit, so mealtimes are about gratitude, not battles.",
        ],
      },
    },
    cover: {
      focus: 390, bg: "play-farm",
      props: [{ k: "veggies", x: 500, s: 0.6 }],
      mo: [{ pose: "pose-04", x: 340 }, { who: "ais", pose: "watering-can", x: 460, move: "still" }],
      fx: ["sparkle"],
    },
    pages: [
      {
        text: { id: "Makan malam sudah siap. Tapi Mo hanya menyuap tiga sendok. \"Mo kenyang,\" katanya, lalu mendorong piringnya. Nasi dan wortel masih banyak.", en: "Dinner was ready. But Mo only ate three spoonfuls. \"I'm full,\" he said, pushing his plate away. There was still lots of rice and carrot left." },
        scene: { focus: 370, bg: "kitchen", time: "dusk", props: [{ k: "rice", x: 470, y: 330, s: 0.7 }], mo: [{ who: "umi", pose: "think-quiet", x: 280 }, { pose: "pose-23", x: 400 }] },
      },
      {
        text: { id: "Umi tidak marah. Umi hanya bertanya, \"Mo tahu tidak, nasi ini datang dari mana?\" \"Dari magic com!\" jawab Mo yakin. Ais tertawa.", en: "Umi didn't get cross. She only asked, \"Mo, do you know where this rice comes from?\" \"The rice cooker!\" Mo said confidently. Ais giggled." },
        scene: { focus: 370, bg: "kitchen", time: "dusk", mo: [{ who: "umi", pose: "think-question", x: 270 }, { pose: "pose-29", x: 390 }, { who: "ais", pose: "giggle", x: 490 }] },
      },
      {
        text: { id: "Besok paginya, Abi membuka pintu ruang main peternakan. Ada lumbung merah, ladang hijau, dan kincir angin. \"Hari ini kita jadi petani!\"", en: "The next morning, Abi opened the door to the farm playroom. There was a red barn, green fields and a windmill. \"Today we're farmers!\"" },
        scene: { focus: 380, bg: "play-farm", mo: [{ who: "ayah", pose: "arms-open-welcome", x: 270 }, { pose: "wow", x: 390 }, { who: "ais", pose: "jump-joy", x: 490, move: "hop" }], fx: ["sparkle"] },
      },
      {
        text: { id: "Tugas pertama: menanam padi. Abi memberi mereka segenggam benih. \"Satu benih, satu lubang. Pelan-pelan, ya.\"", en: "First job: planting rice. Abi gave them a handful of seeds. \"One seed, one hole. Gently now.\"" },
        scene: { focus: 380, bg: "play-farm", props: [{ k: "seed", x: 470, s: 0.8 }], mo: [{ who: "ayah", pose: "teach-point-kneel", x: 270 }, { who: "ais", pose: "plant-trowel", x: 390, move: "still" }, { pose: "pose-05", x: 490 }] },
      },
      {
        text: { id: "\"Lalu kita tunggu,\" kata Abi. \"Disiram, dijaga dari burung dan hama, sampai empat bulan.\" \"EMPAT BULAN?!\" seru Mo.", en: "\"Then we wait,\" said Abi. \"Watering it, guarding it from birds and bugs, for four months.\" \"FOUR MONTHS?!\" cried Mo." },
        scene: { focus: 390, bg: "play-farm", props: [{ k: "paddy", x: 490, s: 0.7 }], mo: [{ pose: "pose-31", x: 340 }, { who: "ais", pose: "watering-can", x: 440, move: "still" }] },
      },
      {
        text: { id: "Tugas kedua: memberi makan sapi. Moooo! Sapi butuh rumput dan air setiap hari, baru bisa memberi susu.", en: "Second job: feeding the cow. Mooooo! A cow needs grass and water every day before she can give milk." },
        scene: { focus: 390, bg: "play-farm", props: [{ k: "cow", x: 500, s: 0.6 }], mo: [{ pose: "pose-15", x: 350 }, { who: "ais", pose: "giggle", x: 250 }] },
      },
      {
        text: { id: "Tugas ketiga: mengambil telur. Ais menemukan satu… dua… tiga butir! \"Ayamnya harus makan dan minum dulu, baru bisa bertelur,\" kata Abi.", en: "Third job: collecting eggs. Ais found one… two… three! \"The hens have to eat and drink first before they can lay,\" said Abi." },
        scene: { focus: 390, bg: "play-farm", props: [{ k: "egg", x: 450, y: 380, s: 0.7 }, { k: "rooster", x: 520, s: 0.6 }], mo: [{ who: "ais", pose: "excited-fists", x: 340 }, { pose: "pose-37", x: 450 }] },
      },
      {
        text: { id: "Tugas keempat: memanen wortel. Mo menarik sekuat tenaga. Hup… hup… PLOP! Ia jatuh terduduk sambil memegang wortel besar.", en: "Fourth job: pulling up carrots. Mo pulled with all his might. Heave… heave… PLOP! He landed on his bottom holding a huge carrot." },
        scene: { focus: 390, bg: "play-farm", props: [{ k: "veggies", x: 490, s: 0.6 }], mo: [{ pose: "pose-18", x: 360, move: "still" }, { who: "ais", pose: "giggle", x: 460 }] },
      },
      {
        text: { id: "Mo rebahan kecapekan. \"Abi… jadi petani itu capek sekali.\" \"Iya,\" kata Abi. \"Dan semua makanan di piring kita melewati tangan-tangan yang capek seperti itu.\"", en: "Mo flopped down, worn out. \"Abi… being a farmer is so tiring.\" \"Yes,\" said Abi. \"And every bit of food on our plates passed through tired hands like that.\"" },
        scene: { focus: 370, bg: "play-farm", mo: [{ who: "ayah", pose: "hand-heart-kneel", x: 270 }, { pose: "pose-17", x: 410, move: "still" }] },
      },
      {
        text: { id: "\"Petani menanam, peternak memberi makan hewan, sopir mengantar, pedagang menjual, Umi memasak… Tapi siapa yang menumbuhkan padinya?\" \"Allah!\" jawab si kembar.", en: "\"Farmers plant, herders feed the animals, drivers deliver, sellers sell, Umi cooks… But who makes the rice grow?\" \"Allah!\" answered the twins." },
        quote: { id: "\"Maka hendaklah manusia itu memperhatikan makanannya. Sesungguhnya Kami telah mencurahkan air (dari langit), kemudian Kami belah bumi, lalu Kami tumbuhkan biji-bijian di bumi itu.\" (QS. 'Abasa: 24–27)", en: "\"Then let mankind look at their food: how We pour down water, then split the earth, and cause grain to grow in it.\" (Qur'an, 'Abasa 80:24–27)" },
        scene: { focus: 380, bg: "play-farm", mo: [{ who: "ayah", pose: "idea-point-stand", x: 270 }, { pose: "pose-24", x: 390 }, { who: "ais", pose: "idea-point", x: 490 }] },
      },
      {
        text: { id: "Mo teringat piringnya semalam. Nasi yang tidak dimakan… wortel yang didorong… Ia jadi diam.", en: "Mo remembered his plate from last night. The rice he didn't eat… the carrots he pushed away… He went quiet." },
        scene: { focus: 390, bg: "play-farm", mo: [{ pose: "pose-38", x: 390, move: "still" }] },
      },
      {
        text: { id: "Malamnya, Umi menyajikan nasi, telur dadar, dan sup wortel. Kali ini Mo mengambil porsi kecil dulu. \"Bismillah.\"", en: "That evening, Umi served rice, omelette and carrot soup. This time Mo took a small portion first. \"Bismillah.\"" },
        scene: { focus: 370, bg: "kitchen", time: "night", props: [{ k: "soup", x: 480, y: 340, s: 0.6 }], mo: [{ who: "umi", pose: "offer", x: 270 }, { pose: "thank-you", x: 390 }] },
      },
      {
        text: { id: "Suap demi suap… sampai habis! Sebutir nasi yang jatuh pun ia ambil. \"Perjalanannya panjang,\" katanya serius.", en: "Spoonful by spoonful… all gone! He even picked up a grain of rice that fell. \"It came a long way,\" he said seriously." },
        quote: { id: "\"Jika suapan salah seorang dari kalian jatuh, hendaklah ia mengambilnya, membersihkan kotorannya, lalu memakannya, dan jangan membiarkannya untuk setan.\" (HR. Muslim 2033)", en: "\"If any of you drops a morsel, let them pick it up, wipe off any dirt and eat it, and not leave it for Shaytan.\" (Muslim 2033)" },
        scene: { focus: 380, bg: "kitchen", time: "night", props: [{ k: "rice", x: 480, y: 340, s: 0.6 }], mo: [{ pose: "pose-07", x: 380 }], fx: ["sparkle"] },
      },
      {
        text: { id: "Umi tersenyum lebar. \"Masya Allah. Kalau perutmu kecil, ambil sedikit dulu. Nanti kalau masih lapar, boleh tambah.\" Mo mengangguk.", en: "Umi smiled wide. \"Masya Allah. If your tummy is small, take a little first. If you're still hungry, you can have more.\" Mo nodded." },
        scene: { focus: 370, bg: "kitchen", time: "night", mo: [{ who: "umi", pose: "touched-cheek", x: 270 }, { pose: "pose-25", x: 400 }], fx: ["hearts"] },
      },
      {
        text: { id: "Selesai makan, si kembar berdoa bersama. Terima kasih, Allah. Terima kasih, Pak Tani.", en: "After the meal, the twins said the dua together. Thank you, Allah. Thank you, farmers." },
        quote: { id: "\"Alhamdulillahilladzi ath'amanaa wa saqaanaa wa ja'alanaa muslimiin.\" — Segala puji bagi Allah yang telah memberi kami makan dan minum, serta menjadikan kami muslim. (HR. Abu Dawud 3850)", en: "\"Alhamdulillahilladhi at'amana wa saqana wa ja'alana muslimin.\" — All praise is for Allah who gave us food and drink and made us Muslims. (Abu Dawud 3850)" },
        scene: { focus: 390, bg: "kitchen", time: "night", mo: [{ pose: "thank-you", x: 340 }, { who: "ais", pose: "dua-hands-closed", x: 460, move: "still" }], fx: ["hearts"] },
      },
      {
        text: { id: "Makanan apa yang paling kamu suka? Coba tebak — dari mana asalnya? 🌾", en: "What's your favourite food? Can you guess where it comes from? 🌾" },
        scene: { focus: 390, bg: "play-farm", props: [{ k: "veggies", x: 500, s: 0.6 }], mo: [{ pose: "pose-04", x: 330 }, { who: "ais", pose: "watering-can", x: 450, move: "still" }], fx: ["sparkle"] },
      },
    ],
  },

  /* ───────────────────────── 6. Underwater: sorry from inside the whale ───────────────────────── */
  {
    slug: "maaf-dari-perut-paus",
    pose: "baby-mo-pose-14.png",
    published: "2026-12-03",
    title: { id: "Maaf dari Perut Paus", en: "Sorry from Inside the Whale" },
    hook: {
      id: "Mo merobohkan istana karang Ais, lalu berbohong. Ia bersembunyi di benteng bantal yang ia sebut \"perut paus\". Di dalam yang gelap, Abi bercerita tentang Nabi Yunus.",
      en: "Mo knocks down Ais's coral palace, then fibs about it. He hides in a pillow fort he calls \"the whale's belly\". In the dark inside, Abi tells him about Prophet Yunus.",
    },
    anchor: { type: "doa", slug: "doa-ketika-kesulitan" },
    takeaway: {
      id: "Rasa berat setelah berbuat salah adalah tanda hati yang hidup. Ajari anak mengakuinya: minta ampun kepada Allah, lalu minta maaf kepada orang yang disakiti.",
      en: "The heavy feeling after doing wrong is a sign of a living heart. Teach your child to own it: ask Allah's forgiveness, then say sorry to the one they hurt.",
    },
    tags: ["minta maaf", "jujur", "nabi yunus", "doa", "laut", "abi", "saudara"],
    card: {
      title: { id: "Membantu Anak Berani Mengaku Salah", en: "Helping Your Child Own a Mistake" },
      items: {
        id: [
          "Beri waktu anak untuk tenang dulu. Pengakuan lebih mudah keluar dari hati yang merasa aman, bukan takut dimarahi.",
          "Saat anak mengaku, ucapkan terima kasih atas kejujurannya sebelum membahas kesalahannya.",
          "Ajarkan urutannya: minta ampun kepada Allah, minta maaf kepada yang disakiti, lalu perbaiki bersama.",
        ],
        en: [
          "Give your child time to calm down. A confession comes easier from a heart that feels safe, not scared.",
          "When they own up, thank them for their honesty before talking about the mistake.",
          "Teach the order: ask Allah's forgiveness, say sorry to the one who was hurt, then fix it together.",
        ],
      },
    },
    cover: {
      focus: 390, bg: "play-underwater",
      props: [{ k: "whale", x: 500, y: 250, s: 0.5 }],
      mo: [{ pose: "pose-34", x: 340 }, { who: "ais", pose: "wave-hello", x: 460 }],
      fx: ["bubbles"],
    },
    pages: [
      {
        text: { id: "Ruang main hari ini berubah jadi dasar laut! Ada ikan, terumbu karang, dan paus biru besar di dinding.", en: "Today the playroom became the bottom of the sea! There were fish, coral reefs and a big blue whale on the wall." },
        scene: { focus: 390, bg: "play-underwater", mo: [{ pose: "yeyy", x: 340, move: "hop" }, { who: "ais", pose: "arms-wide-joy", x: 460 }], fx: ["bubbles"] },
      },
      {
        text: { id: "\"Kita penyelam!\" kata Ais. Ia membangun istana karang dari balok warna-warni. Tinggi dan cantik sekali.", en: "\"We're divers!\" said Ais. She built a coral palace out of colourful blocks. It was tall and beautiful." },
        scene: { focus: 400, bg: "play-underwater", props: [{ k: "blockstall", x: 500, s: 0.8 }], mo: [{ who: "ais", pose: "blocks-tower", x: 380, move: "still" }], fx: ["bubbles"] },
      },
      {
        text: { id: "Mo jadi hiu. \"Nyam, nyam, nyam!\" Ia berenang-renang mengelilingi istana… lalu — BRUK! Tangannya menabrak istana itu.", en: "Mo was a shark. \"Chomp, chomp, chomp!\" He swam round and round the palace… then — CRASH! His arm knocked right into it." },
        scene: { focus: 400, bg: "play-underwater", props: [{ k: "blocksfall", x: 490 }], mo: [{ pose: "pose-11", x: 370, move: "hop" }] },
      },
      {
        text: { id: "Istana karang runtuh. Ais menatap balok-balok yang berserakan. \"Mo! Kenapa dirobohkan?!\"", en: "The coral palace tumbled down. Ais stared at the scattered blocks. \"Mo! Why did you knock it down?!\"" },
        scene: { focus: 390, bg: "play-underwater", props: [{ k: "blocksfall", x: 470 }], mo: [{ who: "ais", pose: "sad-tears", x: 340, move: "still" }, { pose: "pose-33", x: 460 }] },
      },
      {
        text: { id: "\"Bukan aku!\" jawab Mo cepat. \"Ombaknya yang merobohkan!\" Tapi di dalam dada Mo, ada rasa berat — seperti batu.", en: "\"Not me!\" Mo said quickly. \"A wave knocked it over!\" But inside Mo's chest there was a heavy feeling — like a stone." },
        scene: { focus: 390, bg: "play-underwater", mo: [{ pose: "pose-28", x: 340 }, { who: "ais", pose: "cry-sit", x: 460, move: "still" }] },
      },
      {
        text: { id: "Mo berlari dan bersembunyi di dalam benteng bantal. \"Ini perut paus,\" bisiknya. Di dalamnya gelap dan sunyi.", en: "Mo ran off and hid inside the pillow fort. \"This is the whale's belly,\" he whispered. Inside, it was dark and quiet." },
        scene: { focus: 400, bg: "play-underwater", props: [{ k: "fort", x: 470 }], mo: [{ pose: "pose-10", x: 350, move: "still" }] },
      },
      {
        text: { id: "Ais masih menangis. Mo bisa mendengarnya dari dalam benteng bantal. Rasa beratnya makin besar.", en: "Ais was still crying. Mo could hear her from inside the pillow fort. The heavy feeling grew bigger." },
        scene: { focus: 400, bg: "play-underwater", props: [{ k: "fort", x: 480 }], mo: [{ who: "ais", pose: "cry-sit", x: 350, move: "still" }] },
      },
      {
        text: { id: "Tok, tok. Abi masuk sambil membawa senter. \"Boleh Abi masuk ke perut paus?\" Mo mengangguk pelan.", en: "Knock, knock. Abi crawled in with a torch. \"May I come into the whale's tummy?\" Mo nodded slowly." },
        scene: { focus: 370, bg: "play-underwater", time: "night", props: [{ k: "flashlight", x: 470, y: 360, s: 0.7 }], mo: [{ who: "ayah", pose: "kneel-arms-open", x: 270 }, { pose: "pose-39", x: 400, move: "still" }] },
      },
      {
        text: { id: "\"Abi mau cerita. Dulu ada seorang nabi bernama Nabi Yunus. Suatu hari beliau pergi meninggalkan kaumnya dalam keadaan marah, lalu naik kapal ke tengah laut.\"", en: "\"Let me tell you a story. Long ago there was a prophet called Prophet Yunus. One day he left his people in anger and sailed out to sea.\"" },
        scene: { focus: 370, bg: "play-underwater", time: "night", props: [{ k: "flashlight", x: 480, y: 360, s: 0.7 }], mo: [{ who: "ayah", pose: "teach-book-sit", x: 270 }, { pose: "pose-06", x: 400, move: "still" }] },
      },
      {
        text: { id: "\"Badai datang, dan Nabi Yunus ditelan ikan yang sangat besar. Di dalamnya gelap sekali — gelap malam, gelap laut, dan gelap perut ikan.\"", en: "\"A storm came, and Prophet Yunus was swallowed by an enormous fish. Inside it was so dark — the dark of night, the dark of the sea, and the dark of the fish's belly.\"" },
        scene: { focus: 390, bg: "play-underwater", time: "night", props: [{ k: "whale", x: 480, y: 250, s: 0.6 }], mo: [{ pose: "pose-31", x: 360 }], fx: ["bubbles"] },
      },
      {
        text: { id: "\"Di sana, Nabi Yunus mengakui kesalahannya kepada Allah dan berdoa dengan sepenuh hati…\"", en: "\"There, Prophet Yunus admitted his mistake to Allah and prayed with all his heart…\"" },
        quote: { id: "\"Laa ilaaha illaa anta, subhaanaka, innii kuntu minazh-zhaalimiin.\" — Tidak ada tuhan selain Engkau. Maha Suci Engkau. Sungguh, aku termasuk orang-orang yang zalim. (QS. Al-Anbiya: 87)", en: "\"La ilaha illa anta, subhanaka, inni kuntu minaz-zalimin.\" — There is no god but You. Glory be to You. Indeed, I have been among the wrongdoers. (Qur'an, Al-Anbiya 21:87)" },
        scene: { focus: 370, bg: "play-underwater", time: "night", mo: [{ who: "ayah", pose: "dua-kneel", x: 270 }, { pose: "thank-you", x: 400 }] },
      },
      {
        text: { id: "\"Allah mendengar doanya dan menyelamatkannya. Ikan besar itu mengeluarkannya ke pantai dengan selamat.\" Mo terdiam lama.", en: "\"Allah heard his prayer and saved him. The great fish put him out safely on the shore.\" Mo was quiet for a long time." },
        quote: { id: "\"Maka Kami kabulkan doanya dan Kami selamatkan dia dari kedukaan. Dan demikianlah Kami menyelamatkan orang-orang yang beriman.\" (QS. Al-Anbiya: 88)", en: "\"So We answered him and saved him from distress. And thus do We save the believers.\" (Qur'an, Al-Anbiya 21:88)" },
        scene: { focus: 390, bg: "play-underwater", time: "night", mo: [{ pose: "pose-36", x: 390, move: "still" }], fx: ["sparkle"] },
      },
      {
        text: { id: "\"Abi… tadi Mo yang merobohkan istana Ais. Mo bohong.\" Abi memeluk Mo. \"Terima kasih sudah jujur. Sekarang minta ampun kepada Allah dulu, lalu minta maaf kepada Ais.\"", en: "\"Abi… it was me who knocked down Ais's palace. I fibbed.\" Abi hugged him. \"Thank you for being honest. Now ask Allah's forgiveness first, then say sorry to Ais.\"" },
        scene: { focus: 370, bg: "play-underwater", time: "night", mo: [{ who: "ayah", pose: "hug-mo", x: 360, move: "still" }] },
      },
      {
        text: { id: "Mo keluar dari benteng bantal. Wajahnya merah. \"Ais… maaf. Tadi aku yang merobohkan. Aku juga bohong. Maaf, ya.\"", en: "Mo came out of the pillow fort. His face was red. \"Ais… I'm sorry. It was me who knocked it down. And I fibbed. I'm sorry.\"" },
        scene: { focus: 390, bg: "play-underwater", mo: [{ pose: "pose-14", x: 340 }, { who: "ais", pose: "surprised", x: 460 }] },
      },
      {
        text: { id: "Ais mengusap matanya. \"…Bantu aku bangun lagi?\" \"Iya!\" Mereka membangun istana karang baru — lebih tinggi, dengan jendela untuk ikan-ikan.", en: "Ais wiped her eyes. \"…Help me build it again?\" \"Yes!\" They built a new coral palace — even taller, with windows for the fish." },
        scene: { focus: 400, bg: "play-underwater", props: [{ k: "blockstall", x: 500, s: 0.8 }], mo: [{ pose: "pose-26", x: 330 }, { who: "ais", pose: "blocks-tower", x: 420, move: "still" }], fx: ["bubbles", "sparkle"] },
      },
      {
        text: { id: "Pernahkah kamu merasa berat di dada setelah berbuat salah? Apa yang membuatnya ringan lagi? 🐋", en: "Have you ever felt heavy inside after doing something wrong? What made it light again? 🐋" },
        scene: { focus: 390, bg: "play-underwater", mo: [{ pose: "pose-35", x: 340 }, { who: "ais", pose: "heart-hands", x: 460 }], fx: ["bubbles"] },
      },
    ],
  },

  /* ───────────────────────── 7. Little chef: the twins' restaurant ───────────────────────── */
  {
    slug: "restoran-koki-cilik",
    pose: "baby-mo-pose-37.png",
    published: "2026-12-04",
    title: { id: "Restoran Koki Cilik", en: "The Little Chefs' Restaurant" },
    hook: {
      id: "Si kembar membuka restoran untuk Abi dan Umi! Mo ingin memakai pisau besar dan kompor seperti koki sungguhan. Tapi koki cilik punya tugas penting sendiri.",
      en: "The twins open a restaurant for Abi and Umi! Mo wants to use the big knife and the stove like a real chef. But little chefs have important jobs of their own.",
    },
    anchor: { type: "parenting", slug: "adab-sehari-hari" },
    takeaway: {
      id: "Dapur adalah kelas terbaik: anak belajar membantu, menjaga keselamatan, dan adab makan — Bismillah, tangan kanan, ambil yang dekat.",
      en: "The kitchen is the best classroom: children learn to help, stay safe and practise table manners — Bismillah, right hand, eat what's near you.",
    },
    tags: ["memasak", "adab makan", "tangan kanan", "keselamatan", "membantu", "umi", "abi"],
    card: {
      title: { id: "Tugas Dapur yang Aman untuk Balita", en: "Safe Kitchen Jobs for Little Ones" },
      items: {
        id: [
          "Tugas aman: mencuci sayur dan buah, mengaduk adonan dingin, menata piring, menyobek daun selada, mengelap meja.",
          "Buat \"garis aman\" tiga langkah dari kompor. Pisau tajam, kompor, dan panci panas hanya untuk orang dewasa.",
          "Saat makan bersama, latih tiga adab: Bismillah, tangan kanan, dan ambil yang dekat — dengan contoh, bukan omelan.",
        ],
        en: [
          "Safe jobs: washing fruit and veg, stirring cold batter, laying the table, tearing lettuce, wiping the table.",
          "Make a \"safe line\" three steps from the stove. Sharp knives, the hob and hot pans are grown-ups only.",
          "At meals, practise three manners: Bismillah, right hand, eat what's near you — by example, not by nagging.",
        ],
      },
    },
    cover: {
      focus: 390, bg: "play-chef",
      mo: [{ pose: "pose-37", x: 340 }, { who: "ais", pose: "chef-whisk", x: 460 }],
      fx: ["sparkle"],
    },
    pages: [
      {
        text: { id: "\"Selamat datang di Restoran Koki Cilik!\" Ais memakai topi koki. Mo memasang menu buatan sendiri.", en: "\"Welcome to the Little Chefs' Restaurant!\" Ais put on her chef's hat. Mo hung up the menu he had made." },
        scene: { focus: 390, bg: "play-chef", props: [{ k: "card", x: 500, y: 310, s: 0.6 }], mo: [{ who: "ais", pose: "chef-bowl-wink", x: 340 }, { pose: "pose-29", x: 450 }], fx: ["sparkle"] },
      },
      {
        text: { id: "Tamu pertama datang: Abi dan Umi! \"Kami pesan… sup paling enak sedunia,\" kata Abi.", en: "The first guests arrived: Abi and Umi! \"We'd like… the tastiest soup in the world,\" said Abi." },
        scene: { focus: 380, bg: "play-chef", mo: [{ who: "ayah", pose: "wave-hello", x: 260 }, { who: "umi", pose: "wave-skip", x: 380 }, { pose: "pose-24", x: 500 }] },
      },
      {
        text: { id: "Mo berlari ke dapur sungguhan. \"Aku mau pakai pisau besar dan kompor, biar seperti koki beneran!\"", en: "Mo ran to the real kitchen. \"I want to use the big knife and the stove, like a real chef!\"" },
        scene: { focus: 390, bg: "kitchen", mo: [{ pose: "run", x: 390, move: "hop" }] },
      },
      {
        text: { id: "Umi cepat-cepat menyusul. \"Stop dulu, Chef Mo. Pisau tajam dan kompor panas itu tugas orang dewasa. Koki cilik punya tugas sendiri yang penting.\"", en: "Umi hurried after him. \"Hold on, Chef Mo. Sharp knives and a hot stove are grown-up jobs. Little chefs have their own important jobs.\"" },
        scene: { focus: 370, bg: "kitchen", mo: [{ who: "umi", pose: "explain-hand", x: 270 }, { pose: "pose-40", x: 400 }] },
      },
      {
        text: { id: "\"Tugas koki cilik: mencuci sayur, mengaduk adonan, menata piring, dan… mencicipi!\" Mo dan Ais tertawa.", en: "\"Little chefs' jobs: washing vegetables, stirring the batter, laying the plates, and… tasting!\" Mo and Ais laughed." },
        scene: { focus: 380, bg: "kitchen", props: [{ k: "veggies", x: 500, s: 0.6 }], mo: [{ who: "umi", pose: "idea-finger", x: 270 }, { pose: "pose-03", x: 390 }, { who: "ais", pose: "giggle", x: 490 }] },
      },
      {
        text: { id: "Mo mencuci tomat dan wortel di baskom. Ais mengaduk adonan. Aduk… aduk… aduk!", en: "Mo washed the tomatoes and carrots in a bowl. Ais stirred the batter. Stir… stir… stir!" },
        scene: { focus: 390, bg: "kitchen", props: [{ k: "bowl", x: 400, y: 330, s: 0.7 }], mo: [{ pose: "pose-27", x: 330 }, { who: "ais", pose: "chef-whisk", x: 460 }], fx: ["bubbles"] },
      },
      {
        text: { id: "Umi memotong sayur dan menyalakan kompor. Si kembar menonton dari garis aman — tiga langkah dari kompor.", en: "Umi chopped the vegetables and lit the stove. The twins watched from the safe line — three steps from the stove." },
        scene: { focus: 370, bg: "kitchen", mo: [{ who: "umi", pose: "cook-stove", x: 270 }, { pose: "pose-40", x: 410 }, { who: "ais", pose: "sit-chin-hands", x: 510, move: "still" }] },
      },
      {
        text: { id: "Supnya jadi! Mo membawanya ke meja pelan-pelan dengan dua tangan. \"Silakan, Tuan Abi!\"", en: "The soup was ready! Mo carried it to the table slowly, with both hands. \"Here you are, Sir Abi!\"" },
        scene: { focus: 380, bg: "play-chef", props: [{ k: "soup", x: 480, y: 340, s: 0.6 }], mo: [{ who: "ayah", pose: "thumbs-up-sit", x: 270 }, { pose: "pose-21", x: 400 }] },
      },
      {
        text: { id: "Abi mengambil sendok dengan tangan kiri… lalu berhenti. \"Eh, koki-koki, Abi lupa sesuatu. Apa, ya?\"", en: "Abi picked up the spoon with his left hand… then stopped. \"Hmm, chefs, I've forgotten something. What is it?\"" },
        scene: { focus: 380, bg: "play-chef", props: [{ k: "soup", x: 360, y: 350, s: 0.5 }], mo: [{ who: "ayah", pose: "puzzled-scratch-sit", x: 270 }, { pose: "pose-16", x: 400 }, { who: "ais", pose: "think-question", x: 500 }] },
      },
      {
        text: { id: "\"BISMILLAH!\" seru Ais. \"Dan pakai tangan kanan!\" tambah Mo. Abi tertawa. \"Pintar! Koki-koki ini juga tahu adab makan.\"", en: "\"BISMILLAH!\" called Ais. \"And use your right hand!\" added Mo. Abi laughed. \"Clever! These chefs know their table manners too.\"" },
        scene: { focus: 380, bg: "play-chef", mo: [{ who: "ayah", pose: "cheer-fists-sit", x: 270 }, { who: "ais", pose: "idea-point", x: 390 }, { pose: "pose-25", x: 490 }], fx: ["sparkle"] },
      },
      {
        text: { id: "Umi bercerita, dulu ada anak kecil bernama Umar yang tangannya ke mana-mana saat makan. Nabi ﷺ menasihatinya dengan lembut.", en: "Umi told them about a little boy called Umar whose hand wandered all over the dish while he ate. The Prophet ﷺ advised him gently." },
        quote: { id: "\"Wahai anak, sebutlah nama Allah, makanlah dengan tangan kananmu, dan makanlah yang ada di dekatmu.\" (HR. Bukhari 5376, Muslim 2022)", en: "\"Young man, mention Allah's name, eat with your right hand, and eat from what is near you.\" (Bukhari 5376, Muslim 2022)" },
        scene: { focus: 380, bg: "play-chef", mo: [{ who: "umi", pose: "read-story", x: 280, move: "still" }, { pose: "pose-06", x: 400, move: "still" }, { who: "ais", pose: "sit-chin-hands", x: 500, move: "still" }] },
      },
      {
        text: { id: "Mo mencicipi supnya. \"Aduh, panas!\" \"Tunggu sebentar sampai hangat,\" kata Umi. Mo menunggu sambil menghitung sampai sepuluh.", en: "Mo tasted the soup. \"Ow, hot!\" \"Wait a little till it's warm,\" said Umi. Mo waited, counting to ten." },
        scene: { focus: 380, bg: "play-chef", props: [{ k: "soup", x: 480, y: 340, s: 0.6 }], mo: [{ who: "umi", pose: "ok-sign", x: 270 }, { pose: "pose-33", x: 400 }] },
      },
      {
        text: { id: "\"Enak sekali!\" kata Abi dan Umi bersamaan. \"Alhamdulillah,\" kata Mo bangga. \"Masakan Umi, bantuan kami!\"", en: "\"Delicious!\" said Abi and Umi together. \"Alhamdulillah,\" said Mo proudly. \"Umi's cooking, our helping!\"" },
        scene: { focus: 380, bg: "play-chef", mo: [{ who: "ayah", pose: "grateful-heart-sit", x: 260 }, { who: "umi", pose: "cheer-happy", x: 380 }, { pose: "pose-04", x: 500 }], fx: ["hearts"] },
      },
      {
        text: { id: "Tamu terakhir datang: Kak Adam, lapar setelah latihan tenis. \"Masih ada sup?\" Mo memberikan mangkuknya sendiri — porsi koki!", en: "The last guest arrived: Kak Adam, hungry after tennis practice. \"Any soup left?\" Mo gave him his own bowl — the chef's portion!" },
        scene: { focus: 380, bg: "play-chef", props: [{ k: "soup", x: 400, y: 340, s: 0.6 }], mo: [{ who: "adam", pose: "drink-bottle", x: 280 }, { pose: "pose-41", x: 420 }], fx: ["sparkle"] },
      },
      {
        text: { id: "Restoran tutup. Si kembar mencuci piring plastik dan mengelap meja. Koki hebat selalu membereskan dapurnya.", en: "The restaurant closed. The twins washed the plastic plates and wiped the table. Great chefs always tidy their kitchen." },
        scene: { focus: 390, bg: "play-chef", mo: [{ pose: "pose-25", x: 340 }, { who: "ais", pose: "chef-bowl", x: 460 }], fx: ["sparkle"] },
      },
      {
        text: { id: "Kalau kamu punya restoran, menu apa yang mau kamu masak? Jangan lupa: Bismillah dan tangan kanan! 🍳", en: "If you had a restaurant, what would be on the menu? Don't forget: Bismillah and your right hand! 🍳" },
        scene: { focus: 390, bg: "play-chef", mo: [{ pose: "pose-37", x: 340 }, { who: "ais", pose: "chef-whisk", x: 460 }], fx: ["sparkle"] },
      },
    ],
  },

  /* ───────────────────────── 8. Camping & forest: the broken mango tree ───────────────────────── */
  {
    slug: "pohon-mangga-yang-patah",
    pose: "baby-mo-pose-09.png",
    published: "2026-12-05",
    title: { id: "Pohon Mangga yang Patah", en: "The Broken Mango Tree" },
    hook: {
      id: "Penjelajah butuh kayu untuk api unggun! Mo mematahkan dahan pohon mangga kecil milik Umi. Bisakah pohon yang patah sembuh lagi?",
      en: "Explorers need wood for a campfire! Mo snaps branches off Umi's little mango tree. Can a broken tree get better?",
    },
    anchor: { type: "parenting", slug: "bersyukur" },
    takeaway: {
      id: "Merawat tanaman bersama mengajarkan bahwa semua makhluk hidup layak disayangi — dan bahwa kesalahan bisa diperbaiki dengan tangan sendiri.",
      en: "Caring for plants together teaches that every living thing deserves care — and that mistakes can be mended with our own hands.",
    },
    tags: ["pohon", "alam", "menanam", "sedekah", "meminta maaf", "berkemah", "umi", "abi"],
    card: {
      title: { id: "Menanam Cinta Alam pada Anak", en: "Growing a Love of Nature" },
      items: {
        id: [
          "Beri anak satu tanaman \"miliknya\" untuk disiram setiap hari. Rasa memiliki menumbuhkan rasa sayang.",
          "Saat anak merusak tanaman, ajak memperbaikinya bersama — mengikat dahan, menanam bibit baru — bukan hanya dimarahi.",
          "Ceritakan bahwa menanam pohon adalah sedekah yang pahalanya terus mengalir, setiap kali buahnya dimakan burung atau manusia.",
        ],
        en: [
          "Give your child one plant of their \"own\" to water every day. Ownership grows care.",
          "When a plant gets damaged, fix it together — tie the branch, plant a new seedling — rather than only scolding.",
          "Tell them that planting a tree is charity that keeps rewarding, every time a bird or a person eats its fruit.",
        ],
      },
    },
    cover: {
      focus: 390, bg: "play-camping",
      props: [{ k: "lantern", x: 500 }],
      mo: [{ pose: "pose-26", x: 340 }, { who: "ais", pose: "explorer-map", x: 450 }],
      fx: ["sparkle"],
    },
    pages: [
      {
        text: { id: "\"Ayo berkemah!\" Ruang main hari ini penuh pohon, tenda, dan suara jangkrik dari dinding hutan.", en: "\"Let's go camping!\" Today the playroom was full of trees, a tent and the sound of crickets from the forest wall." },
        scene: { focus: 390, bg: "play-camping", mo: [{ pose: "yeyy", x: 340, move: "hop" }, { who: "ais", pose: "explorer-map", x: 460 }], fx: ["sparkle"] },
      },
      {
        text: { id: "Ais membaca peta. Mo membawa senter. \"Penjelajah butuh api unggun!\" kata Mo. \"Kita cari kayu bakar!\"", en: "Ais read the map. Mo carried the torch. \"Explorers need a campfire!\" said Mo. \"Let's find firewood!\"" },
        scene: { focus: 390, bg: "play-camping", props: [{ k: "flashlight", x: 430, y: 350, s: 0.7 }], mo: [{ pose: "pose-08", x: 340 }, { who: "ais", pose: "explorer-map", x: 470 }] },
      },
      {
        text: { id: "Mo berlari ke halaman. Di sana ada pohon mangga kecil yang baru ditanam Umi. Krak! Krak! Mo mematahkan dua dahannya.", en: "Mo ran out to the garden. There was the little mango tree Umi had just planted. Snap! Snap! Mo broke off two of its branches." },
        scene: { focus: 400, bg: "garden", props: [{ k: "plant", x: 490 }], mo: [{ pose: "run", x: 370, move: "hop" }] },
      },
      {
        text: { id: "\"Dapat kayu bakar!\" Mo kembali dengan bangga. Tapi Ais melihat ke luar jendela. \"Mo… pohon mangganya Umi jadi botak.\"", en: "\"Got the firewood!\" Mo came back proudly. But Ais looked out of the window. \"Mo… Umi's mango tree has gone bald.\"" },
        scene: { focus: 390, bg: "play-camping", mo: [{ pose: "pose-04", x: 340 }, { who: "ais", pose: "surprised", x: 460 }] },
      },
      {
        text: { id: "Umi berdiri di dekat pohon kecil itu. Umi tidak berteriak. Umi hanya mengusap dahannya yang patah pelan-pelan.", en: "Umi stood by the little tree. She didn't shout. She just stroked its broken branch gently." },
        scene: { focus: 380, bg: "garden", props: [{ k: "plant", x: 460 }], mo: [{ who: "umi", pose: "think-quiet", x: 330 }] },
      },
      {
        text: { id: "Mo mendekat sambil menyembunyikan dahan di punggungnya. \"Umi… pohonnya sakit, ya?\"", en: "Mo came closer, hiding the branches behind his back. \"Umi… is the tree hurt?\"" },
        scene: { focus: 380, bg: "garden", props: [{ k: "plant", x: 480 }], mo: [{ who: "umi", pose: "kneel-smile", x: 280, move: "still" }, { pose: "pose-28", x: 400 }] },
      },
      {
        text: { id: "\"Pohon itu makhluk hidup, Sayang. Ia minum, tumbuh, dan bertasbih kepada Allah dengan caranya sendiri.\"", en: "\"A tree is alive, sweetheart. It drinks, it grows, and it glorifies Allah in its own way.\"" },
        quote: { id: "\"…Dan tidak ada sesuatu pun melainkan bertasbih dengan memuji-Nya, tetapi kamu tidak mengerti tasbih mereka…\" (QS. Al-Isra: 44)", en: "\"…There is nothing that does not glorify Him with praise, but you do not understand their glorification…\" (Qur'an, Al-Isra 17:44)" },
        scene: { focus: 380, bg: "garden", props: [{ k: "plant", x: 490 }], mo: [{ who: "umi", pose: "explain-hand", x: 270 }, { pose: "pose-40", x: 400 }] },
      },
      {
        text: { id: "\"Pohon memberi kita buah, udara segar, dan tempat berteduh. Burung-burung juga membuat rumah di dahannya.\"", en: "\"Trees give us fruit, fresh air and shade. Birds make their homes in their branches too.\"" },
        scene: { focus: 380, bg: "garden", props: [{ k: "tree", x: 500 }, { k: "bird", x: 470, y: 180, s: 0.8 }], mo: [{ who: "umi", pose: "idea-finger", x: 270 }, { pose: "pose-31", x: 390 }] },
      },
      {
        text: { id: "Mata Mo berkaca-kaca. \"Maaf, pohon. Maaf, Umi. Mo kira cuma kayu.\" Umi memeluknya erat.", en: "Mo's eyes filled with tears. \"Sorry, tree. Sorry, Umi. I thought it was just wood.\" Umi hugged him tight." },
        scene: { focus: 380, bg: "garden", props: [{ k: "plant", x: 500 }], mo: [{ who: "umi", pose: "hug-mo", x: 370, move: "still" }] },
      },
      {
        text: { id: "Abi datang membawa tali dan sebatang tongkat. \"Ayo kita obati.\" Mereka mengikat dahan yang retak ke tongkat, seperti perban untuk pohon.", en: "Abi came with some string and a stick. \"Let's make it better.\" They tied the cracked branch to the stick, like a bandage for the tree." },
        scene: { focus: 380, bg: "garden", props: [{ k: "plant", x: 480 }], mo: [{ who: "ayah", pose: "fix-toolbox", x: 280, move: "still" }, { pose: "pose-05", x: 400 }] },
      },
      {
        text: { id: "Lalu Abi memberi mereka satu bibit baru. \"Bagaimana kalau kita tanam satu lagi? Menanam pohon itu sedekah yang pahalanya terus mengalir.\"", en: "Then Abi gave them a new seedling. \"Shall we plant another one? Planting a tree is charity whose reward keeps flowing.\"" },
        quote: { id: "\"Tidaklah seorang muslim menanam pohon atau menabur benih, lalu dimakan oleh burung, manusia, atau hewan, kecuali itu menjadi sedekah baginya.\" (HR. Bukhari 2320, Muslim 1553)", en: "\"No Muslim plants a tree or sows a seed from which a bird, a person or an animal eats, but it is charity for him.\" (Bukhari 2320, Muslim 1553)" },
        scene: { focus: 380, bg: "garden", props: [{ k: "seedling", x: 480 }], mo: [{ who: "ayah", pose: "teach-point-kneel", x: 270 }, { who: "ais", pose: "gardener-sapling", x: 390 }, { pose: "pose-26", x: 490 }] },
      },
      {
        text: { id: "Ais memasukkan bibitnya, Mo menimbun tanah, lalu menyiramnya. \"Bismillah. Tumbuh yang besar, ya!\"", en: "Ais put the seedling in, Mo patted the soil down, then watered it. \"Bismillah. Grow big and strong!\"" },
        scene: { focus: 390, bg: "garden", props: [{ k: "seedling", x: 470 }], mo: [{ pose: "pose-36", x: 340, move: "still" }, { who: "ais", pose: "watering-can", x: 440, move: "still" }] },
      },
      {
        text: { id: "Setiap pagi Mo menyiram pohon-pohonnya. Satu minggu… dua minggu… lalu muncul daun-daun kecil yang hijau dan mengilap!", en: "Every morning Mo watered his trees. One week… two weeks… and then little green, shiny leaves appeared!" },
        scene: { focus: 390, bg: "garden", props: [{ k: "sprout", x: 440 }, { k: "plant", x: 510 }], mo: [{ pose: "pose-31", x: 350 }], fx: ["sparkle"] },
      },
      {
        text: { id: "Suatu sore, seekor burung kecil hinggap di dekat pohon mangga yang sudah sembuh. \"Cip-cip!\" Mo berbisik, \"Selamat datang di rumahmu.\"", en: "One afternoon, a little bird landed by the mended mango tree. \"Tweet-tweet!\" Mo whispered, \"Welcome home.\"" },
        scene: { focus: 390, bg: "garden", time: "dusk", props: [{ k: "plant", x: 470 }, { k: "sparrow", x: 520 }], mo: [{ pose: "pose-35", x: 360 }], fx: ["hearts"] },
      },
      {
        text: { id: "Malamnya, mereka berkemah lagi di ruang main — kali ini di dekat api unggun mainan. \"Terima kasih, Allah, untuk pohon-pohon,\" kata Mo.", en: "That night they camped in the playroom again — this time by the toy campfire. \"Thank you, Allah, for the trees,\" said Mo." },
        scene: { focus: 390, bg: "play-camping", time: "night", mo: [{ pose: "thank-you", x: 330 }, { who: "ais", pose: "dua-hands-closed", x: 470, move: "still" }], fx: ["stars"] },
      },
      {
        text: { id: "Pohon apa yang ada di dekat rumahmu? Yuk sapa dan siram ia hari ini! 🌳", en: "Which tree grows near your home? Go and say hello and give it some water today! 🌳" },
        scene: { focus: 390, bg: "play-camping", mo: [{ pose: "pose-41", x: 340 }, { who: "ais", pose: "gardener-sapling", x: 460 }], fx: ["sparkle"] },
      },
    ],
  },
];

/* ───────── layout ───────── */

const isKid = (who?: string) => !who || who === "mo" || who === "ais";

/**
 * A phone page shows only about 340 units around the focus. Keep the cast in
 * their left-to-right order but close enough to fit: little ones 105–125
 * apart, grown-ups 120 from their neighbour, the group centred on the focus,
 * and props pulled in so nothing important falls off the edge.
 */
function stage(sc: PicScene): PicScene {
  const cast = [...(sc.mo ?? [])].map((m, i) => ({ m, i })).sort((a, b) => a.m.x - b.m.x);
  if (!cast.length) return sc;
  const c = sc.focus ?? cast.reduce((t, { m }) => t + m.x, 0) / cast.length;
  const xs = [0];
  for (let k = 1; k < cast.length; k++) {
    const kids = isKid(cast[k - 1]!.m.who) && isKid(cast[k]!.m.who);
    xs.push(xs[k - 1]! + (kids ? (cast.length === 2 ? 125 : 105) : 120));
  }
  const shift = c - xs[xs.length - 1]! / 2;
  const mo = [...sc.mo!];
  cast.forEach(({ m, i }, k) => (mo[i] = { ...m, x: Math.round(xs[k]! + shift) }));
  const props = sc.props?.map((p) => ({ ...p, x: Math.min(c + 125, Math.max(c - 125, p.x)) }));
  return { ...sc, focus: Math.round(c), mo, ...(props ? { props } : {}) };
}

export const PLAYROOM_BOOKS: PictureBook[] = RAW.map((b) => ({
  ...b,
  cover: stage(b.cover),
  pages: b.pages.map((p) => ({ ...p, scene: stage(p.scene) })),
}));
