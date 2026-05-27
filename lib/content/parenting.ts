import type { ParentingSituation } from "./types";

/**
 * 12 starter parenting situations. Each combines:
 *   - practical steps from developmental psychology
 *   - an Islamic perspective grounded in sources
 *   - recommended doa + hadith via slug references
 *
 * EDITORIAL NOTE: Reviewed only by Tim Baby Mo at this stage. Before public
 * launch, each entry should be screened by both (a) a child-development
 * professional and (b) a qualified ustadz for the Islamic perspective.
 */
export const parentingList: ParentingSituation[] = [
  {
    slug: "tantrum",
    title: {
      id: "Tantrum: Saat Si Kecil Meledak",
      en: "Tantrums: When Your Little One Erupts",
    },
    excerpt: {
      id: "Cara menghadapi anak yang tantrum tanpa kehilangan kesabaran dan tanpa kehilangan otoritas — dengan pendekatan islami yang lembut.",
      en: "How to handle a tantrumming child without losing your patience or your authority — with a gentle Islamic approach.",
    },
    signs: {
      id: [
        "Anak berteriak, menangis keras, atau berbaring di lantai",
        "Tidak bisa diajak bicara — kata 'tidak' memicu reaksi lebih besar",
        "Sering muncul saat lapar, mengantuk, atau berlebih stimulasi",
      ],
      en: [
        "Child screams, cries hard, or throws themselves on the floor",
        "Cannot be reasoned with — saying 'no' triggers a bigger reaction",
        "Often arises when hungry, tired, or over-stimulated",
      ],
    },
    steps: {
      id: [
        "Tarik nafas panjang dulu — emosi orang tua menular ke anak.",
        "Turun ke ketinggian mata anak. Jangan menjulang.",
        "Validasi perasaan: 'Adik kesel ya. Mama tahu.' Jangan langsung menolak.",
        "Tunggu badai mereda. Jangan ceramah saat anak masih meledak.",
        "Setelah tenang, peluk dan ajak bicara singkat. Tanyakan 'tadi adik mau apa?'",
        "Ajarkan satu kata baru untuk perasaan itu — 'frustrasi', 'kecewa', 'capek'.",
      ],
      en: [
        "Take a long breath first — parental emotion is contagious.",
        "Get down to the child's eye level. Don't tower over.",
        "Validate the feeling: 'You're frustrated. I see that.' Don't immediately refuse.",
        "Wait for the storm to pass. Don't lecture while they're still erupting.",
        "Once calm, hug and talk briefly. Ask 'what did you want just now?'",
        "Teach one new word for that feeling — 'frustrated', 'disappointed', 'tired'.",
      ],
    },
    islamicNote: {
      id: "Rasulullah ﷺ adalah teladan kelembutan. Beliau memperhatikan emosi anak kecil — bahkan menunggu cucunya selesai naik di punggungnya saat sholat. Marah kepada anak tidak haram, tapi tidak pernah dianjurkan.",
      en: "The Prophet ﷺ is the model of gentleness. He attended to children's emotions — even waiting for his grandchild to finish climbing on his back during prayer. Anger toward a child isn't forbidden, but it is never recommended.",
    },
    recommendedDoa: ["bangun-tidur", "perlindungan-anak"],
    supportingHadith: ["kelembutan-keindahan", "tidak-mendoakan-buruk-anak"],
    ageMin: 1,
    ageMax: 5,
    category: "emosi",
    published: "2026-05-27",
    updated: "2026-05-27",
    quote: {
      id: "Anak yang sedang tantrum bukan anak nakal. Mereka anak yang belum tahu nama perasaan mereka — dan butuh kita ajarkan.",
      en: "A tantrumming child isn't a naughty child. They're a child who hasn't yet learned the names of their feelings — and they need us to teach them.",
    },
    seoQuery: {
      id: "cara mengatasi tantrum anak menurut islam",
      en: "how to handle child tantrums islamic perspective",
    },
  },
  {
    slug: "sulit-tidur",
    title: {
      id: "Anak Sulit Tidur",
      en: "Trouble Sleeping",
    },
    excerpt: {
      id: "Rutinitas tidur islami yang menenangkan — agar anak tidur lebih cepat dan orang tua bisa istirahat.",
      en: "A calming Islamic bedtime routine so your child sleeps faster and you can rest.",
    },
    signs: {
      id: [
        "Anak butuh waktu lama untuk tertidur",
        "Sering terbangun di malam hari",
        "Bangun pagi dengan rewel atau mata sembap",
      ],
      en: [
        "Child takes a long time to fall asleep",
        "Wakes often in the night",
        "Wakes in the morning fussy or with puffy eyes",
      ],
    },
    steps: {
      id: [
        "Mulai rutinitas yang sama setiap malam — sinyal bagi tubuh untuk tenang.",
        "Mandi hangat 60 menit sebelum tidur menurunkan suhu tubuh.",
        "Matikan layar minimal 30 menit sebelum tidur.",
        "Bacakan satu buku pelan. Suara orang tua adalah obat penenang terbaik.",
        "Ajarkan doa sebelum tidur — pegang tangannya saat membaca bersama.",
        "Tutup ruangan dengan lampu redup atau total gelap. Hindari nightlight terlalu terang.",
      ],
      en: [
        "Start the same routine every night — a signal for the body to calm.",
        "A warm bath 60 minutes before bed lowers body temperature.",
        "Screens off at least 30 minutes before sleep.",
        "Read one book slowly. A parent's voice is the best sedative.",
        "Teach the bedtime dua — hold their hand as you recite together.",
        "Close the room with dim or full dark. Avoid bright nightlights.",
      ],
    },
    islamicNote: {
      id: "Tidur adalah saudara kandung kematian — Rasulullah ﷺ mengajarkan doa sebelum tidur sebagai pengingat. Membaca doa bersama anak melatih kebiasaan ibadah dan rasa aman pada Allah.",
      en: "Sleep is the sibling of death — the Prophet ﷺ taught the bedtime dua as a reminder. Reciting it together with your child trains both worship habit and trust in Allah.",
    },
    recommendedDoa: ["sebelum-tidur", "bangun-tidur", "perlindungan-anak"],
    supportingHadith: ["kelembutan-keindahan"],
    ageMin: 2,
    ageMax: 8,
    category: "rutinitas",
    published: "2026-05-27",
    updated: "2026-05-27",
    quote: {
      id: "Rutinitas yang sama, suara orang tua yang sama, doa yang sama — itulah jangkar tidur anak.",
      en: "The same routine, the same parent's voice, the same du'a — that's a child's anchor for sleep.",
    },
    seoQuery: {
      id: "anak susah tidur menurut islam",
      en: "child won't sleep islamic guidance",
    },
  },
  {
    slug: "susah-makan",
    title: {
      id: "Anak Susah Makan (GTM)",
      en: "Picky Eating",
    },
    excerpt: {
      id: "Strategi tenang menghadapi anak yang menolak makanan — tanpa berakhir di paksa-paksaan.",
      en: "Calm strategies for a child who refuses food — without ending in a force-feeding battle.",
    },
    signs: {
      id: [
        "Menolak makan walau lapar",
        "Hanya mau makanan tertentu dalam waktu berminggu-minggu",
        "Memuntahkan atau menyembur makanan",
      ],
      en: [
        "Refuses food even when hungry",
        "Only accepts specific foods for weeks at a time",
        "Spits out or spits up food",
      ],
    },
    steps: {
      id: [
        "Jadwalkan makan 4–5x sehari di waktu yang konsisten.",
        "Sajikan porsi kecil. Lebih baik habis sedikit daripada sisa banyak.",
        "Biarkan anak ikut menyiapkan — memilih piring atau menata buah.",
        "Hindari bujukan ('satu suap lagi…') yang membuat makan jadi negosiasi.",
        "Tidak ada layar saat makan. Fokus pada rasa dan kebersamaan.",
        "Ajarkan doa sebelum dan sesudah makan — ritual kecil yang membentuk syukur.",
      ],
      en: [
        "Schedule 4–5 meals at consistent times.",
        "Serve small portions. Finishing a little beats wasting a lot.",
        "Let the child help prepare — pick the plate or arrange fruit.",
        "Avoid bargaining ('one more bite…') that turns eating into negotiation.",
        "No screens at the table. Focus on taste and togetherness.",
        "Teach the duas before and after eating — small rituals build gratitude.",
      ],
    },
    islamicNote: {
      id: "Rasulullah ﷺ menganjurkan makan bersama dan tidak mencela makanan. Beliau memakan apa yang ada di hadapan, tidak menuntut. Sikap orang tua yang santai pada makanan menular kepada anak.",
      en: "The Prophet ﷺ encouraged eating together and never criticized food. He ate what was in front of him without demand. A parent's relaxed attitude about food rubs off on the child.",
    },
    recommendedDoa: ["sebelum-makan", "sesudah-makan"],
    supportingHadith: ["main-bersama-anak"],
    ageMin: 1,
    ageMax: 6,
    category: "rutinitas",
    published: "2026-05-27",
    updated: "2026-05-27",
    quote: {
      id: "Anak yang dipaksa makan belajar menolak makan. Anak yang dihargai pilihannya belajar lapar dan kenyang.",
      en: "A child forced to eat learns to refuse food. A child whose choices are respected learns hunger and fullness.",
    },
    seoQuery: {
      id: "doa untuk anak susah makan",
      en: "dua for child who won't eat",
    },
  },
  {
    slug: "takut-gelap",
    title: {
      id: "Anak Takut Gelap",
      en: "Fear of the Dark",
    },
    excerpt: {
      id: "Cara menenangkan rasa takut anak tanpa meremehkan dan tanpa berlebih-lebihan.",
      en: "How to soothe a child's fear without dismissing or over-amplifying it.",
    },
    signs: {
      id: [
        "Menolak masuk kamar sendiri",
        "Sering bangun menangis di malam hari",
        "Cerita tentang 'sesuatu' di kamar",
      ],
      en: [
        "Refuses to enter the room alone",
        "Wakes crying often at night",
        "Stories about 'something' in the room",
      ],
    },
    steps: {
      id: [
        "Jangan tertawakan ketakutannya. Validasi: 'Iya, kadang gelap memang terasa aneh.'",
        "Tinggalkan lampu kecil yang temaram, bukan terang.",
        "Bacakan doa bersama sebelum tidur — pegangan spiritual.",
        "Buat 'pemeriksaan kamar' singkat bersama — lihat kolong, tutup lemari.",
        "Hindari cerita seram atau tontonan menakutkan menjelang tidur.",
        "Berikan benda penanda nyaman: boneka, kain favorit.",
      ],
      en: [
        "Don't laugh at the fear. Validate: 'Yes, the dark can feel strange.'",
        "Leave a small dim light, not a bright one.",
        "Read the bedtime dua together — a spiritual anchor.",
        "Do a short 'room check' together — under the bed, close the wardrobe.",
        "Avoid scary stories or shows near bedtime.",
        "Provide a comfort object: a doll, a favorite blanket.",
      ],
    },
    islamicNote: {
      id: "Rasulullah ﷺ mengajarkan doa perlindungan untuk anak. Ucapkan dengan tenang, bukan dramatis — anak menyerap nada lebih dari kata.",
      en: "The Prophet ﷺ taught protective duas for children. Recite them calmly, not dramatically — the child absorbs tone more than words.",
    },
    recommendedDoa: ["sebelum-tidur", "masuk-kamar-mandi"],
    supportingHadith: ["kelembutan-keindahan"],
    ageMin: 2,
    ageMax: 8,
    category: "emosi",
    published: "2026-05-27",
    updated: "2026-05-27",
    quote: {
      id: "Ketakutan anak nyata bagi mereka — meski tidak nyata bagi kita. Tugas kita bukan menyangkalnya, tapi menemani sampai berani.",
      en: "A child's fear is real to them — even if not to us. Our job isn't to deny it, but to stay beside them until they're brave.",
    },
    seoQuery: {
      id: "anak takut gelap menurut islam",
      en: "child fear of dark islamic perspective",
    },
  },
  {
    slug: "marah-orang-tua",
    title: {
      id: "Ketika Orang Tua Marah",
      en: "When You Lose Your Temper",
    },
    excerpt: {
      id: "Mengelola amarah sendiri sebagai orang tua — karena anak tumbuh dari yang kita contohkan, bukan yang kita katakan.",
      en: "Managing your own anger as a parent — because children grow from what you model, not what you say.",
    },
    signs: {
      id: [
        "Suara meninggi sebelum sadar",
        "Penyesalan setelah membentak anak",
        "Pola yang sama berulang setiap minggu",
      ],
      en: [
        "Raised voice before you realize",
        "Regret after snapping at the child",
        "The same pattern recurring weekly",
      ],
    },
    steps: {
      id: [
        "Saat merasa panas, ucapkan ta'awwudz: a'udzu billahi minasy-syaithonir-rajim.",
        "Pindah posisi — duduk jika berdiri, berdiri jika duduk (sunnah).",
        "Ambil wudhu — air dingin meredakan panas.",
        "Jika perlu, tinggalkan ruangan 60 detik. Tidak apa-apa.",
        "Setelah tenang, minta maaf pada anak. Itu bukan kelemahan, itu pelajaran.",
        "Catat pemicunya. Pola yang sama berulang artinya ada akar yang perlu diobati — lapar, kurang tidur, atau pekerjaan.",
      ],
      en: [
        "When you feel heat rising, say ta'awwudz: a'udhu billahi mina-shaytani-r-rajim.",
        "Change posture — sit if standing, stand if sitting (sunnah).",
        "Perform wudhu — cold water cools the heat.",
        "If needed, leave the room for 60 seconds. That's fine.",
        "Once calm, apologize to your child. That's not weakness — it's a lesson.",
        "Log the trigger. The same pattern recurring means there's a root to treat — hunger, lack of sleep, or work stress.",
      ],
    },
    islamicNote: {
      id: "Rasulullah ﷺ tidak pernah memukul siapapun di rumahnya. Beliau memperingatkan: marah membuat orang berdosa dengan ucapan. Ucapan terburuk yang sering keluar saat marah — 'kamu menyusahkan' — bisa menjadi doa yang diijabah.",
      en: "The Prophet ﷺ never struck anyone in his household. He warned that anger causes sin through speech. The worst words slipped in anger — 'you're such a burden' — can become invoked prayers.",
    },
    recommendedDoa: [],
    supportingHadith: ["kelembutan-keindahan", "tidak-mendoakan-buruk-anak", "kasih-sayang-kepada-anak"],
    ageMin: 0,
    ageMax: 12,
    category: "emosi",
    published: "2026-05-27",
    updated: "2026-05-27",
    quote: {
      id: "Marah pada anak bukan dosa. Tapi setiap kali kita marah dan mereka tetap memeluk, itu adalah doa mereka untuk kita.",
      en: "Anger toward a child isn't a sin. But every time we get angry and they still hug us back — that's their du'a for us.",
    },
    seoQuery: {
      id: "marah pada anak dalam islam",
      en: "anger toward child islamic perspective",
    },
  },
  {
    slug: "mulai-sholat",
    title: {
      id: "Mengajarkan Sholat ke Anak",
      en: "Teaching a Child to Pray",
    },
    excerpt: {
      id: "Cara mengenalkan sholat secara bertahap dari usia 4 hingga 10 tahun — dengan cinta, bukan paksaan.",
      en: "How to introduce salah gradually from age 4 to 10 — with love, not force.",
    },
    signs: {
      id: [
        "Anak penasaran melihat orang tua sholat",
        "Anak mulai meniru gerakan ruku' dan sujud",
        "Anak ingin punya sajadah sendiri",
      ],
      en: [
        "The child watches you pray with curiosity",
        "Imitates ruku and sujud movements",
        "Asks for their own prayer mat",
      ],
    },
    steps: {
      id: [
        "Usia 3–4: biarkan anak ikut sholat di samping. Jangan dilarang gerak.",
        "Usia 5–6: ajarkan takbir dan satu surat pendek (Al-Ikhlas).",
        "Usia 7: mulai biasakan 5 waktu — dimulai dari Maghrib dan Isya.",
        "Pujilah usaha, bukan hanya hasil: 'Mama lihat kakak ruku' tadi rapi.'",
        "Beli sajadah dan mukena/peci yang anak pilih sendiri.",
        "Sholat berjamaah satu kali sehari — bonding yang membentuk kebiasaan.",
      ],
      en: [
        "Ages 3–4: let the child join at your side. Don't restrict movement.",
        "Ages 5–6: teach takbir and one short surah (Al-Ikhlas).",
        "Age 7: begin habituating five daily prayers — starting with Maghrib and Isha.",
        "Praise effort, not only outcome: 'I saw how neatly you did ruku.'",
        "Buy a prayer mat and clothes the child chooses themselves.",
        "One congregational prayer a day at home — bonding that forms habit.",
      ],
    },
    islamicNote: {
      id: "Rasulullah ﷺ menetapkan tujuh tahun sebagai usia pengenalan — bukan kewajiban sempurna. Sepuluh tahun adalah batas akhir pembentukan kebiasaan. Tiga tahun di antaranya adalah masa lembut yang penuh teladan.",
      en: "The Prophet ﷺ set seven as the age of introduction — not full obligation. Ten is the deadline for habit-formation. The three years between are a gentle window full of modeling.",
    },
    recommendedDoa: ["mendengar-adzan"],
    supportingHadith: ["perintah-sholat-tujuh-tahun", "muliakan-anak"],
    ageMin: 4,
    ageMax: 10,
    category: "spiritual",
    published: "2026-05-27",
    updated: "2026-05-27",
    quote: {
      id: "Sholat dimulai dari meniru, bukan dari menghafal. Anak yang melihat orang tua sholat akan sholat sendiri pada waktunya.",
      en: "Salah begins from imitation, not memorization. A child who sees their parents pray will pray on their own — in time.",
    },
    seoQuery: {
      id: "kapan mulai ajarin sholat anak",
      en: "when to start teaching child salah",
    },
  },
  {
    slug: "puasa-pertama",
    title: {
      id: "Puasa Pertama Anak",
      en: "Your Child's First Fast",
    },
    excerpt: {
      id: "Cara mengajak anak berpuasa dengan gembira dan bertahap — bukan dengan rasa lapar dan air mata.",
      en: "How to invite a child to fast joyfully and gradually — not through hunger and tears.",
    },
    signs: {
      id: [
        "Anak penasaran kenapa orang tua tidak makan",
        "Sudah mulai bertanya tentang Ramadan",
        "Mau mencoba meski hanya setengah hari",
      ],
      en: [
        "The child asks why parents aren't eating",
        "Starts asking about Ramadan",
        "Wants to try, even just half a day",
      ],
    },
    steps: {
      id: [
        "Mulai dari puasa setengah hari (sahur–dzuhur) di usia 5–7 tahun.",
        "Bangunkan sahur dengan makanan yang anak suka, bukan paksaan.",
        "Sediakan aktivitas yang membuat lupa lapar — buku, jalan-jalan pagi.",
        "Hindari jam-jam paling berat dengan tidur siang.",
        "Rayakan saat berbuka — biar 'finish line' terasa istimewa.",
        "Jangan dipaksa puasa penuh sebelum siap. Lebih baik gembira setengah hari daripada trauma sehari penuh.",
      ],
      en: [
        "Start with half-day fasting (suhoor to noon) at age 5–7.",
        "Wake them for suhoor with foods they like, not with force.",
        "Plan distractions — books, morning walks.",
        "Skip the hardest hours with an afternoon nap.",
        "Celebrate at iftar — the finish line should feel special.",
        "Don't push full days before they're ready. Joyful half-days beat traumatic full ones.",
      ],
    },
    islamicNote: {
      id: "Sahabat-sahabat di Madinah membiasakan anak-anak mereka berpuasa dengan memberikan mainan dari bulu domba — saat anak lapar, mereka bermain. Pendekatan ini menunjukkan: latihan, bukan kewajiban, di usia dini.",
      en: "The Companions in Madinah trained their children to fast by giving them woolen toys — when the child grew hungry, they played. This shows: training, not obligation, at a young age.",
    },
    recommendedDoa: ["sebelum-makan", "sesudah-makan"],
    supportingHadith: ["muliakan-anak"],
    ageMin: 5,
    ageMax: 10,
    category: "spiritual",
    published: "2026-05-27",
    updated: "2026-05-27",
    quote: {
      id: "Puasa pertama anak tidak harus sempurna. Yang penting mereka merasakan: 'aku bisa, dan Allah melihat usahaku.'",
      en: "A child's first fast doesn't need to be perfect. What matters is the feeling: 'I can do this, and Allah sees my effort.'",
    },
    seoQuery: {
      id: "kapan anak harus mulai puasa ramadhan",
      en: "when can child start fasting ramadan",
    },
  },
  {
    slug: "rivalitas-saudara",
    title: {
      id: "Rivalitas Antar Saudara",
      en: "Sibling Rivalry",
    },
    excerpt: {
      id: "Mengelola persaingan kakak-adik tanpa membuat anak merasa dipilih-kasihi.",
      en: "Managing sibling competition without making any child feel favored.",
    },
    signs: {
      id: [
        "Sering bertengkar memperebutkan mainan",
        "Salah satu anak mulai regress — kembali seperti bayi",
        "Komentar 'mama lebih sayang adik'",
      ],
      en: [
        "Frequent fights over toys",
        "One child regresses — acts like a baby again",
        "Comments like 'mom loves my sibling more'",
      ],
    },
    steps: {
      id: [
        "Berikan waktu 1-on-1 untuk masing-masing anak — 15 menit per hari cukup.",
        "Jangan membandingkan secara terbuka.",
        "Akui keadilan bukan kesamaan: usia berbeda butuh aturan berbeda.",
        "Saat bertengkar, jangan langsung jadi hakim. Tanya keduanya bergantian.",
        "Ajarkan kosa kata emosi sejak dini — 'aku marah karena…' lebih baik dari tantrum.",
        "Doakan keduanya dengan nama — bergantian — di depan mereka.",
      ],
      en: [
        "Give 1-on-1 time to each child — 15 minutes a day is enough.",
        "Don't compare openly.",
        "Acknowledge fairness isn't sameness: different ages, different rules.",
        "During fights, don't immediately judge. Ask each in turn.",
        "Teach emotion vocabulary early — 'I'm angry because…' beats a tantrum.",
        "Make duas for both children by name — alternating — in front of them.",
      ],
    },
    islamicNote: {
      id: "Rasulullah ﷺ memerintahkan keadilan di antara anak-anak — bahkan dalam memberi hadiah. Ketidakadilan menanam cemburu yang merusak hubungan saudara seumur hidup.",
      en: "The Prophet ﷺ commanded justice between children — even in gift-giving. Injustice plants jealousy that ruins sibling bonds for life.",
    },
    recommendedDoa: [],
    supportingHadith: ["adil-kepada-anak", "kasih-sayang-kepada-anak"],
    ageMin: 2,
    ageMax: 10,
    category: "sosial",
    published: "2026-05-27",
    updated: "2026-05-27",
    quote: {
      id: "Saudara yang sering bertengkar di rumah, biasanya saling membela di luar. Tugas kita memastikan rumah tetap aman bagi keduanya.",
      en: "Siblings who fight at home usually defend each other outside. Our job is to keep the home a safe place for both.",
    },
    seoQuery: {
      id: "cara mendamaikan anak yang bertengkar dengan saudara",
      en: "how to handle sibling rivalry islamic parenting",
    },
  },
  {
    slug: "screen-time",
    title: {
      id: "Screen Time yang Sehat",
      en: "Healthy Screen Time",
    },
    excerpt: {
      id: "Aturan praktis layar untuk anak muslim — tanpa harus melarang total dan tanpa membiarkan berlebihan.",
      en: "Practical screen rules for Muslim children — without total banning or letting it run wild.",
    },
    signs: {
      id: [
        "Tantrum saat layar diminta dimatikan",
        "Tidur terganggu setelah menonton lama",
        "Kurang minat pada permainan fisik atau buku",
      ],
      en: [
        "Tantrum when asked to put the screen down",
        "Sleep disrupted after long viewing",
        "Reduced interest in physical play or books",
      ],
    },
    steps: {
      id: [
        "Di bawah 2 tahun: hindari layar kecuali video call dengan keluarga.",
        "Usia 2–5: maksimal 1 jam sehari, konten edukatif yang dipilih dengan sengaja.",
        "Usia 5+: maksimal 1–2 jam, dengan jeda 5 menit per 30 menit.",
        "Layar mati saat makan, di tempat tidur, dan satu jam sebelum tidur.",
        "Tonton bareng — komentar dan ajak diskusi setelahnya.",
        "Pilih konten islami berkualitas. Konten Baby Mo Games adalah pilihan ramah anak.",
      ],
      en: [
        "Under 2: avoid screens except video calls with family.",
        "Ages 2–5: max 1 hour daily, intentionally chosen educational content.",
        "Ages 5+: max 1–2 hours, with 5-minute breaks every 30 minutes.",
        "Screens off during meals, in bed, and one hour before sleep.",
        "Watch together — comment and discuss after.",
        "Choose quality Islamic content. Baby Mo Games is a child-safe option.",
      ],
    },
    islamicNote: {
      id: "Layar bukan haram, tapi mengisi otak adalah amanah. Apa yang anak konsumsi membentuk apa yang mereka pikirkan. Pilihlah dengan niat seperti memilih makanan halal.",
      en: "Screens aren't forbidden, but filling the mind is a trust. What children consume shapes what they think. Choose with the same intent as choosing halal food.",
    },
    recommendedDoa: [],
    supportingHadith: ["anak-mukmin-amanat"],
    ageMin: 0,
    ageMax: 12,
    category: "rutinitas",
    published: "2026-05-27",
    updated: "2026-05-27",
    quote: {
      id: "Bukan layar yang buruk untuk anak. Yang buruk adalah ketika layar menggantikan suara orang tua di rumah.",
      en: "It's not the screen that's bad for kids. What's bad is when the screen replaces the parent's voice at home.",
    },
    seoQuery: {
      id: "berapa lama screen time anak menurut islam",
      en: "screen time for kids islamic view",
    },
  },
  {
    slug: "adab-sehari-hari",
    title: {
      id: "Mengajarkan Adab Sehari-Hari",
      en: "Teaching Daily Adab",
    },
    excerpt: {
      id: "Salam, makan, masuk kamar mandi, masuk-keluar rumah — adab kecil yang membentuk akhlak besar.",
      en: "Greetings, eating, bathroom, entering and leaving the house — small adabs that shape big character.",
    },
    signs: {
      id: [
        "Anak belum terbiasa mengucap salam",
        "Lupa baca doa di momen kunci",
        "Adab makan masih perlu dibimbing",
      ],
      en: [
        "Child doesn't habitually greet with salam",
        "Forgets duas at key moments",
        "Eating manners still need guidance",
      ],
    },
    steps: {
      id: [
        "Pilih satu adab dulu — jangan ajarkan sepuluh sekaligus.",
        "Berikan contoh konsisten. Anak meniru, bukan mendengar.",
        "Tempel kartu visual di lokasi — kartu doa kamar mandi di pintu kamar mandi.",
        "Rayakan saat anak melakukan tanpa diingatkan.",
        "Hindari koreksi di depan orang lain — itu mempermalukan.",
        "Sebut nama Allah dalam pujian: 'Alhamdulillah anak Mama hebat.'",
      ],
      en: [
        "Pick one adab first — don't teach ten at once.",
        "Model it consistently. Children imitate, not listen.",
        "Post visual cards in location — bathroom dua card on the bathroom door.",
        "Celebrate when the child does it without prompting.",
        "Avoid correction in front of others — that shames.",
        "Mention Allah in praise: 'Alhamdulillah, you did great.'",
      ],
    },
    islamicNote: {
      id: "Adab dahulu sebelum ilmu — kata para ulama klasik. Anak yang punya adab akan mudah menerima ilmu; anak yang punya ilmu tanpa adab adalah bahaya.",
      en: "Adab before knowledge — said classical scholars. A child with adab will receive knowledge easily; a child with knowledge but no adab is dangerous.",
    },
    recommendedDoa: [
      "sebelum-makan",
      "sesudah-makan",
      "masuk-kamar-mandi",
      "keluar-kamar-mandi",
      "memakai-pakaian",
      "bercermin",
      "doa-bersin",
      "keluar-rumah",
      "masuk-rumah",
    ],
    supportingHadith: ["hadiah-terbaik-adab", "muliakan-anak"],
    ageMin: 2,
    ageMax: 10,
    category: "perilaku",
    published: "2026-05-27",
    updated: "2026-05-27",
    quote: {
      id: "Adab tidak diajarkan lewat ceramah. Diajarkan lewat melakukan, di depan anak, setiap hari.",
      en: "Adab isn't taught through lectures. It's taught by doing it — in front of your child, every day.",
    },
    seoQuery: {
      id: "cara mengajarkan adab pada anak menurut islam",
      en: "teaching adab to children islamic guidance",
    },
  },
  {
    slug: "bersyukur",
    title: {
      id: "Menanam Rasa Syukur",
      en: "Planting Gratitude",
    },
    excerpt: {
      id: "Anak yang bersyukur lebih bahagia. Cara menanam syukur tanpa terdengar berkhotbah.",
      en: "Grateful children are happier. How to plant gratitude without sounding preachy.",
    },
    signs: {
      id: [
        "Anak sering mengeluh atau membandingkan dengan teman",
        "Mudah bosan dengan mainan baru",
        "Jarang mengucap terima kasih spontan",
      ],
      en: [
        "Child often complains or compares with friends",
        "Quickly bored with new toys",
        "Rarely says thank you spontaneously",
      ],
    },
    steps: {
      id: [
        "Mulai 'tiga syukur sebelum tidur' — sebutkan bergantian.",
        "Hindari menggantikan tanpa alasan. Biarkan anak menunggu sesekali.",
        "Pamerkan bukan apa yang dibeli, tapi pengalaman bersama.",
        "Ajarkan bahwa Alhamdulillah bukan cuma kata, tapi rasa.",
        "Ajak ke tempat yang membuat anak melihat keberagaman — pasar, panti.",
        "Modeling: orang tua yang sering bersyukur menumbuhkan anak yang bersyukur.",
      ],
      en: [
        "Start 'three thanks before sleep' — say them aloud, taking turns.",
        "Don't always replace things instantly. Let your child wait sometimes.",
        "Show off shared experiences, not purchases.",
        "Teach that Alhamdulillah is not just a word, but a feeling.",
        "Take them where they see diversity — markets, orphanages.",
        "Modeling: parents who frequently express gratitude grow grateful children.",
      ],
    },
    islamicNote: {
      id: "Allah berjanji menambah nikmat bagi yang bersyukur. Mengajar syukur adalah hadiah yang terus mengalir — anak yang bersyukur menjalani hidup lebih ringan.",
      en: "Allah promises to increase blessings for the grateful. Teaching gratitude is a gift that keeps giving — a grateful child carries life more lightly.",
    },
    recommendedDoa: ["sesudah-makan", "bangun-tidur", "ketika-hujan", "memakai-pakaian"],
    supportingHadith: ["muliakan-anak"],
    ageMin: 3,
    ageMax: 10,
    category: "spiritual",
    published: "2026-05-27",
    updated: "2026-05-27",
    quote: {
      id: "Anak belajar bersyukur dari orang tua yang mengucap 'alhamdulillah' atas hal-hal kecil — bukan dari ceramah tentang syukur.",
      en: "Children learn gratitude from parents who say 'alhamdulillah' over small things — not from lectures about gratitude.",
    },
    seoQuery: {
      id: "cara mengajarkan rasa syukur pada anak",
      en: "teaching gratitude to children islamic",
    },
  },
  {
    slug: "bonding-orangtua",
    title: {
      id: "Bonding dengan Anak yang Sibuk",
      en: "Bonding When You're Busy",
    },
    excerpt: {
      id: "Tidak punya banyak waktu? 15 menit penuh perhatian mengalahkan satu jam sambil HP.",
      en: "Short on time? 15 attentive minutes beat an hour while scrolling.",
    },
    signs: {
      id: [
        "Anak mencari perhatian dengan perilaku negatif",
        "Anak diam saat ditanya tentang hari mereka",
        "Orang tua merasa 'menemani' tapi tidak 'hadir'",
      ],
      en: [
        "Child seeks attention through negative behavior",
        "Child quiet when asked about their day",
        "Parent feels they're 'with' the child but not 'present'",
      ],
    },
    steps: {
      id: [
        "Pilih satu slot tetap — 15 menit setelah makan malam misalnya.",
        "Letakkan HP di ruangan lain. Mode pesawat selama bonding.",
        "Ikuti yang anak pilih — bukan apa yang orang tua mau ajarkan.",
        "Tatap mata saat dia berbicara. Tahan dorongan untuk multitasking.",
        "Tutup dengan doa singkat bersama — pelukan dan 'mama sayang adik'.",
        "Setiap akhir pekan, satu aktivitas khusus — masak bareng, jalan kaki.",
      ],
      en: [
        "Pick one fixed slot — 15 minutes after dinner, for example.",
        "Phone in another room. Airplane mode during bonding.",
        "Follow what the child chooses — not what you want to teach.",
        "Look in their eyes when they speak. Resist multitasking.",
        "Close with a short shared dua — a hug and 'I love you'.",
        "Each weekend, one special activity — cook together, walk together.",
      ],
    },
    islamicNote: {
      id: "Rasulullah ﷺ adalah orang yang sibuk — memimpin umat, memutus perkara, memimpin sholat. Tapi beliau masih sempat bermain dengan Hasan dan Husain. Kehadiran adalah ibadah, bukan kemewahan.",
      en: "The Prophet ﷺ was a busy man — leading the ummah, judging cases, leading prayer. Yet he made time to play with Hasan and Husain. Presence is worship, not luxury.",
    },
    recommendedDoa: ["sebelum-tidur"],
    supportingHadith: ["main-bersama-anak", "kasih-sayang-kepada-anak"],
    ageMin: 0,
    ageMax: 12,
    category: "sosial",
    published: "2026-05-27",
    updated: "2026-05-27",
    quote: {
      id: "Anak tidak butuh waktu berkualitas. Mereka butuh banyak waktu, dan menemukan kualitasnya sendiri.",
      en: "Children don't need 'quality time'. They need a lot of time, and they'll find the quality in it themselves.",
    },
    seoQuery: {
      id: "cara dekat dengan anak menurut islam",
      en: "bonding with child islamic parenting",
    },
  },
];

export function getAllParenting(): ParentingSituation[] {
  return parentingList;
}

export function getParentingBySlug(
  slug: string,
): ParentingSituation | undefined {
  return parentingList.find((p) => p.slug === slug);
}

export function getParentingByCategory(
  category: ParentingSituation["category"],
): ParentingSituation[] {
  return parentingList.filter((p) => p.category === category);
}
