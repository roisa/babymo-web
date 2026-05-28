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

  // ─── Tier 1 expansion: 6 SEO-targeted long-tail problems ──────────
  {
    slug: "anak-pemalu",
    title: {
      id: "Anak Pemalu di Depan Orang",
      en: "The Shy Child in Public",
    },
    excerpt: {
      id: "Anak menarik diri saat bertemu orang baru — bagaimana orang tua memahami dan menemani tanpa memaksa.",
      en: "When your child shrinks back from new people — how to understand and walk alongside without forcing.",
    },
    signs: {
      id: [
        "Menempel di kaki orang tua saat bertemu orang baru",
        "Menolak menyapa atau menjawab pertanyaan dari kerabat",
        "Lebih hidup di rumah, lebih diam di luar",
      ],
      en: [
        "Clings to a parent's leg when meeting new people",
        "Refuses to greet or answer questions from relatives",
        "Lively at home, quiet outside",
      ],
    },
    steps: {
      id: [
        "Jangan label 'pemalu' di depan anak — label menempel dan menjadi identitas.",
        "Beri waktu pemanasan. Pegang tangannya, jangan dorong.",
        "Pratekkan sapaan di rumah dulu lewat permainan boneka atau role-play.",
        "Hargai usaha kecil — 'tadi adik berani senyum, alhamdulillah.'",
        "Hindari membandingkan dengan saudara atau teman yang lebih ekstrover.",
      ],
      en: [
        "Don't label 'shy' in front of the child — labels stick and become identity.",
        "Give warm-up time. Hold their hand, don't push.",
        "Practice greetings at home through puppet play or role-play.",
        "Acknowledge small wins — 'you smiled, alhamdulillah.'",
        "Avoid comparing with siblings or friends who are more extroverted.",
      ],
    },
    islamicNote: {
      id: "Rasulullah ﷺ mengenal anak-anak yang pemalu di sekitarnya dan tidak pernah mempermalukan mereka. Beliau memanggil dengan lembut, memberi waktu, dan memuji ketika mereka berani. Pemalu bukan kekurangan — tapi temperamen yang perlu ditemani.",
      en: "The Prophet ﷺ knew shy children around him and never embarrassed them. He called them gently, gave them time, and praised them when they took courage. Shyness isn't a flaw — it's a temperament that needs company.",
    },
    recommendedDoa: ["keluar-rumah", "perlindungan-anak", "doa-pagi"],
    supportingHadith: ["kelembutan-keindahan", "muliakan-anak"],
    ageMin: 2,
    ageMax: 8,
    category: "sosial",
    published: "2026-05-27",
    updated: "2026-05-27",
    quote: {
      id: "Anak pemalu bukan anak yang kurang berani. Mereka anak yang masih membaca situasi — dan butuh kita di sampingnya, bukan mendorong dari belakang.",
      en: "A shy child isn't lacking in courage. They're still reading the room — and they need us beside them, not pushing from behind.",
    },
    seoQuery: {
      id: "cara mengatasi anak pemalu menurut islam",
      en: "how to help a shy child islamic parenting",
    },
  },

  {
    slug: "anak-bohong",
    title: {
      id: "Anak Mulai Berbohong",
      en: "When the Child Starts Lying",
    },
    excerpt: {
      id: "Bohong pada anak usia dini bukan tanda karakter buruk — biasanya tanda mereka takut, ingin disayang, atau belum bisa membedakan fantasi dan fakta.",
      en: "Lying in early childhood isn't a sign of bad character — usually it's fear, a wish to be loved, or not yet separating fantasy from fact.",
    },
    signs: {
      id: [
        "Anak menyangkal sesuatu yang jelas mereka lakukan",
        "Bohong sederhana untuk menghindari hukuman",
        "Membuat cerita yang tidak masuk akal (sering tanda imajinasi, bukan bohong)",
      ],
      en: [
        "Denies something they clearly did",
        "Simple lies to avoid punishment",
        "Tells unrealistic stories (often imagination, not lying)",
      ],
    },
    steps: {
      id: [
        "Cari penyebabnya, bukan langsung menghukum. 'Adik takut Mama marah, ya?'",
        "Jangan jebak — kalau sudah tahu jawabannya, jangan bertanya untuk memancing bohong.",
        "Hargai kejujuran lebih keras dari hukuman atas kesalahan: 'Mama bangga adik jujur.'",
        "Beri konsekuensi yang adil — jangan berlebihan, sehingga anak tidak takut jujur lain kali.",
        "Tunjukkan kejujuran orang tua — bahkan dalam hal kecil seperti 'Maaf, Ayah salah ucap tadi.'",
      ],
      en: [
        "Look for the cause before punishing. 'Are you afraid Mama will be upset?'",
        "Don't set traps — if you already know the answer, don't ask in a way that invites a lie.",
        "Reward honesty louder than you punish the mistake: 'I'm proud you told the truth.'",
        "Use fair consequences — overreaction teaches children to lie next time.",
        "Model honesty in small things — 'Sorry, Ayah misspoke just now.'",
      ],
    },
    islamicNote: {
      id: "Rasulullah ﷺ pernah menegur sahabat yang memanggil anak dengan 'kemari, akan kuberi sesuatu' lalu tidak memberinya — beliau berkata: 'Itu tercatat sebagai dusta atasmu.' Kejujuran pada anak dimulai dari kejujuran orang tua kepada anak.",
      en: "The Prophet ﷺ once corrected a companion who called their child with 'come here, I'll give you something' then didn't — he said: 'That is recorded against you as a lie.' Honesty in children begins with parents' honesty toward children.",
    },
    recommendedDoa: ["doa-pagi", "doa-petang"],
    supportingHadith: ["hadiah-terbaik-adab", "muliakan-anak"],
    ageMin: 3,
    ageMax: 9,
    category: "perilaku",
    published: "2026-05-27",
    updated: "2026-05-27",
    quote: {
      id: "Anak yang berbohong biasanya bukan kurang akhlak. Mereka anak yang takut, dan belum percaya bahwa jujur itu aman.",
      en: "A lying child usually doesn't lack character. They're afraid — and don't yet trust that honesty is safe.",
    },
    seoQuery: {
      id: "cara mengatasi anak suka berbohong menurut islam",
      en: "child lying islamic parenting how to handle",
    },
  },

  {
    slug: "anak-sakit",
    title: {
      id: "Saat Anak Sedang Sakit",
      en: "When Your Child Is Sick",
    },
    excerpt: {
      id: "Yang harus orang tua lakukan saat anak demam atau sakit — perawatan praktis dan doa yang diajarkan Rasulullah ﷺ.",
      en: "What to do when your child is sick — practical care and the du'as taught by the Prophet ﷺ.",
    },
    signs: {
      id: [
        "Demam, rewel berlebihan, atau tidak mau makan",
        "Lebih banyak diam, lebih cepat lelah",
        "Mencari pelukan lebih sering dari biasanya",
      ],
      en: [
        "Fever, unusual fussiness, or refusing food",
        "Quieter, tires more quickly",
        "Seeks hugs more often than usual",
      ],
    },
    steps: {
      id: [
        "Tenangkan diri dulu. Anak sakit menyerap kepanikan orang tua.",
        "Pertahankan rutinitas dasar: minum cukup, makanan ringan, tidur lebih banyak.",
        "Bacakan doa untuk yang sakit sambil mengusap kepala mereka.",
        "Jangan tanya terus 'sakitnya di mana?' — anak butuh tenang, bukan diinterogasi.",
        "Konsultasi ke dokter jika demam > 39°C, > 3 hari, atau ada gejala mengkhawatirkan.",
        "Setelah sembuh, ajak anak ucap syukur — 'alhamdulillah Allah kasih kita sehat lagi.'",
      ],
      en: [
        "Calm yourself first. A sick child absorbs parental panic.",
        "Maintain the basics: enough fluids, light food, more sleep.",
        "Recite the du'a for the sick while stroking their head.",
        "Don't keep asking 'where does it hurt?' — they need calm, not interrogation.",
        "See a doctor if fever > 39°C, > 3 days, or worrying symptoms appear.",
        "Once they recover, lead them in gratitude — 'alhamdulillah, Allah gave us health again.'",
      ],
    },
    islamicNote: {
      id: "Rasulullah ﷺ mengusap kepala orang yang sakit sambil membaca doa, dan mengajarkan bahwa orang tua yang merawat anak sakit dengan sabar akan diganjar. Doa orang tua untuk anak yang sakit adalah salah satu yang paling mustajab — pakailah momen itu.",
      en: "The Prophet ﷺ stroked the heads of the sick while reciting du'a, and taught that parents who patiently care for a sick child are rewarded. A parent's du'a for a sick child is among the most accepted — use that moment.",
    },
    recommendedDoa: ["perlindungan-anak", "doa-pagi", "doa-petang"],
    supportingHadith: ["kasih-sayang-kepada-anak", "doa-orang-tua-mustajab"],
    ageMin: 0,
    ageMax: 12,
    category: "rutinitas",
    published: "2026-05-27",
    updated: "2026-05-27",
    quote: {
      id: "Saat anak sakit, mereka tidak butuh orang tua yang panik. Mereka butuh tangan yang mengusap kepalanya sambil membisikkan doa.",
      en: "When a child is sick, they don't need a panicked parent. They need a hand stroking their head while whispering a du'a.",
    },
    seoQuery: {
      id: "doa untuk anak yang sedang sakit demam",
      en: "dua for sick child fever islamic",
    },
  },

  {
    slug: "mengajarkan-quran",
    title: {
      id: "Kapan Mulai Mengajarkan Qur'an",
      en: "When to Start Teaching the Qur'an",
    },
    excerpt: {
      id: "Tidak harus menunggu anak bisa baca latin. Pengenalan Al-Qur'an bisa mulai dari dalam rahim — dan terus berlanjut sepanjang hidup mereka.",
      en: "You don't have to wait until a child can read. Introducing the Qur'an can begin in the womb — and continues their whole life.",
    },
    signs: {
      id: [
        "Anak tertarik melihat orang tua memegang mushaf",
        "Anak mulai meniru gerakan ruku' / sujud",
        "Mulai bertanya 'itu tulisan apa?' saat melihat huruf Arab",
      ],
      en: [
        "Child shows interest when a parent holds the mushaf",
        "Begins imitating bowing or prostration",
        "Asks 'what's that writing?' when seeing Arabic letters",
      ],
    },
    steps: {
      id: [
        "Mulai dari pendengaran — putar bacaan Qur'an lembut di rumah, terutama waktu pagi.",
        "Pilih satu ayat / surah pendek favorit keluarga, ulang-ulang setiap hari.",
        "Buat momen Qur'an menyenangkan: di pangkuan, sambil dipeluk, bukan di meja seperti PR.",
        "Mulai pengenalan huruf hijaiyah lewat permainan, bukan drill.",
        "Untuk usia 4–6 tahun, satu metode konsisten (Iqro, Tilawati, dll) lebih baik daripada gonta-ganti.",
        "Hindari memarahi anak saat salah baca — Qur'an harus selalu jadi sumber rasa nyaman, bukan stres.",
      ],
      en: [
        "Start with listening — play gentle Qur'an recitation at home, especially mornings.",
        "Pick one favorite short surah/verse, repeat it daily.",
        "Make Qur'an moments warm: on your lap, in a hug — not at a desk like homework.",
        "Introduce Arabic letters through play, not drilling.",
        "For ages 4–6, one consistent method (Iqro, Tilawati, etc.) beats switching often.",
        "Don't scold mistakes — Qur'an should always be a source of comfort, not stress.",
      ],
    },
    islamicNote: {
      id: "Rumah yang dibacakan Al-Qur'an menjadi tempat yang dijauhi setan dan diisi malaikat. Anak yang tumbuh dengan suara Qur'an di rumah akan merasakan kerinduan padanya seumur hidup — bahkan ketika ia sedang jauh dari iman.",
      en: "A home in which the Qur'an is recited becomes a place avoided by devils and filled with angels. A child raised with the Qur'an's sound in their home will feel a lifelong longing for it — even in seasons far from faith.",
    },
    recommendedDoa: ["sebelum-belajar", "setelah-belajar", "doa-pagi"],
    supportingHadith: ["perintah-sholat-tujuh-tahun", "rumah-tempat-paling-utama"],
    ageMin: 0,
    ageMax: 10,
    category: "spiritual",
    published: "2026-05-27",
    updated: "2026-05-27",
    quote: {
      id: "Qur'an tidak diajarkan paling efektif lewat metode. Diajarkan lewat suara orang tua yang membacanya — di mobil, di dapur, sebelum tidur — sampai anak menganggapnya bagian dari rumah.",
      en: "The Qur'an isn't most effectively taught through a method. It's taught through the parent's voice reading it — in the car, in the kitchen, at bedtime — until the child experiences it as part of home.",
    },
    seoQuery: {
      id: "kapan mulai mengajarkan al quran pada anak",
      en: "when to start teaching quran to child",
    },
  },

  {
    slug: "anak-tidak-mau-berbagi",
    title: {
      id: "Anak Tidak Mau Berbagi",
      en: "When Your Child Won't Share",
    },
    excerpt: {
      id: "Berbagi adalah keterampilan yang dipelajari — bukan instingnya. Anak usia 2–4 tahun secara perkembangan memang belum siap. Yang bisa kita lakukan: menemani prosesnya.",
      en: "Sharing is a learned skill — not an instinct. Children 2–4 aren't developmentally ready yet. What we can do: walk them through it.",
    },
    signs: {
      id: [
        "Menangis atau marah saat mainannya dipakai temannya",
        "Menyembunyikan benda favorit saat ada tamu anak",
        "Bilang 'punyaku!' bahkan untuk benda yang bukan miliknya",
      ],
      en: [
        "Cries or rages when a friend uses their toy",
        "Hides favorite items when other children visit",
        "Says 'mine!' even for things that aren't theirs",
      ],
    },
    steps: {
      id: [
        "Akui kepemilikan dulu sebelum minta berbagi: 'Itu mainan adik, ya.'",
        "Gunakan timer — 'lima menit lagi, baru gantian.' Konkret lebih dimengerti daripada 'sebentar.'",
        "Beri pilihan: 'mau pinjamkan yang ini atau yang itu?'",
        "Hargai usaha berbagi, sekecil apa pun: 'Alhamdulillah, terima kasih sudah pinjamkan.'",
        "Contohkan dalam keseharian: 'Ayah pinjam HP Mama, ya' — anak menyerap dari kebiasaan rumah.",
        "Jangan paksa berbagi setiap benda — anak juga berhak punya barang yang khusus miliknya.",
      ],
      en: [
        "Acknowledge ownership first before asking to share: 'That's your toy.'",
        "Use a timer — 'five more minutes, then it's their turn.' Concrete beats vague 'soon'.",
        "Offer choices: 'do you want to lend this one or that one?'",
        "Praise every effort to share, however small.",
        "Model it daily: 'Ayah is borrowing Mama's phone' — kids absorb home patterns.",
        "Don't force sharing of every item — children can have special things that are just theirs.",
      ],
    },
    islamicNote: {
      id: "Berbagi adalah induk dari banyak akhlak dalam Islam — sedekah, zakat, menyantuni tetangga. Tapi Rasulullah ﷺ juga mengajarkan keadilan: ketika ada anak yang sudah memegang sesuatu, sahabat lain tidak boleh merebut. Ajarkan berbagi dengan menghormati hak anak, bukan dengan memalsukan kemurahan.",
      en: "Sharing is the parent of many virtues in Islam — sadaqah, zakat, neighborly kindness. But the Prophet ﷺ also taught fairness: when a child held something first, others couldn't snatch it. Teach sharing through respect for a child's right, not forced generosity.",
    },
    recommendedDoa: ["doa-pagi", "perlindungan-anak"],
    supportingHadith: ["adil-kepada-anak", "tetangga-keluarga-luas"],
    ageMin: 2,
    ageMax: 6,
    category: "sosial",
    published: "2026-05-27",
    updated: "2026-05-27",
    quote: {
      id: "Berbagi tidak diajarkan lewat memaksa. Diajarkan lewat menghargai kepemilikan anak dulu — supaya mereka belajar bahwa memberi adalah pilihan, bukan kehilangan.",
      en: "Sharing isn't taught by force. It's taught by respecting a child's ownership first — so they learn that giving is a choice, not a loss.",
    },
    seoQuery: {
      id: "cara mengajarkan anak berbagi dengan teman",
      en: "how to teach a child to share islamic parenting",
    },
  },

  {
    slug: "anak-tidak-mau-sholat",
    title: {
      id: "Anak Sudah 7 Tahun Tapi Belum Mau Sholat",
      en: "When a 7-Year-Old Won't Pray",
    },
    excerpt: {
      id: "Hadits menyuruh sholat anak di usia 7 tahun. Tapi 'menyuruh' tidak sama dengan 'memaksa' — dan cara kita menyampaikan jauh lebih penting daripada usia.",
      en: "The hadith instructs prayer at age 7. But 'instruct' isn't 'force' — and how we deliver it matters far more than the age itself.",
    },
    signs: {
      id: [
        "Anak sudah cukup usia tapi masih malas atau menolak sholat",
        "Sholat hanya saat dipaksa, ekspresinya tertekan",
        "Mengelak dengan alasan ('capek', 'nanti dulu') secara konsisten",
      ],
      en: [
        "Child is old enough but still resists or skips prayer",
        "Prays only when forced, looking stressed",
        "Consistently makes excuses ('tired', 'in a bit')",
      ],
    },
    steps: {
      id: [
        "Audit dulu: apakah orang tua sholat tepat waktu dan tampak senang melakukannya?",
        "Ajak sholat bersama, bukan menyuruh sendirian — anak ingin masuk komunitas, bukan diuji.",
        "Ringankan rukun bagi pemula — selesaikan satu rakaat lebih baik daripada dipaksa empat lalu trauma.",
        "Ceritakan keutamaan sholat dengan bahasa anak, bukan ancaman neraka di usia dini.",
        "Beri ruang untuk bertanya 'kenapa kita harus sholat?' — itu tanda berpikir, bukan tanda durhaka.",
        "Konsisten tanpa marah. Hadits 'pukul di usia 10' sering disalahpahami — itu opsi terakhir, bukan default.",
      ],
      en: [
        "Audit first: do the parents pray on time and look glad doing it?",
        "Pray together, don't just send them — children want to join the community, not be tested.",
        "Lighten the practice for beginners — finishing one calm rak'ah beats four forced into trauma.",
        "Share salah's beauty in their language — not threats of hellfire at a young age.",
        "Allow questions like 'why do we have to pray?' — that's thinking, not disobedience.",
        "Be consistent without anger. The 'strike at 10' hadith is often misread — it's a last resort, not a default.",
      ],
    },
    islamicNote: {
      id: "Rasulullah ﷺ memerintahkan kita menyuruh anak sholat di usia 7 dan memisahkan tempat tidur mereka di usia 10. Tapi beliau juga teladan kelembutan tertinggi pada anak. Anak yang dipaksa sholat dengan marah belajar bahwa Allah dikaitkan dengan marah — bukan dengan cinta. Sabar di usia 7–10 adalah investasi terbesar.",
      en: "The Prophet ﷺ instructed us to command prayer at age 7 and separate sleeping mats at 10. But he was also the model of utmost gentleness with children. A child forced into salah with anger learns that Allah is tied to anger — not to love. Patience at ages 7–10 is the largest investment.",
    },
    recommendedDoa: ["sebelum-belajar", "doa-pagi"],
    supportingHadith: ["perintah-sholat-tujuh-tahun", "kelembutan-keindahan"],
    ageMin: 5,
    ageMax: 12,
    category: "spiritual",
    published: "2026-05-27",
    updated: "2026-05-27",
    quote: {
      id: "Anak yang menolak sholat jarang menolak Allah. Mereka menolak cara kita mengajarkannya — terlalu cepat, terlalu marah, atau tanpa kita ikut.",
      en: "A child resisting salah is rarely resisting Allah. They're resisting how we teach it — too fast, too angry, or without us joining.",
    },
    seoQuery: {
      id: "anak tidak mau sholat usia 7 tahun cara mengatasi",
      en: "child won't pray age 7 islamic guidance",
    },
  },

  // ─── Shareable "big question" situations — high emotional value ───
  {
    slug: "anak-bertanya-allah-di-mana",
    title: {
      id: "Saat Anak Bertanya: \"Allah Di Mana?\"",
      en: "When Your Child Asks: \"Where Is Allah?\"",
    },
    excerpt: {
      id: "Pertanyaan yang membuat banyak orang tua kaku. Cara menjawab dengan jujur, sesuai akidah, dan dengan bahasa yang dimengerti anak kecil.",
      en: "The question that freezes many parents. How to answer honestly, soundly, and in words a small child understands.",
    },
    signs: {
      id: [
        "Anak tiba-tiba bertanya \"Allah itu di mana?\" atau \"Allah seperti apa?\"",
        "Anak menunjuk langit dan bertanya apakah Allah ada di sana",
        "Anak bingung kenapa tidak bisa melihat Allah",
      ],
      en: [
        "Child suddenly asks \"where is Allah?\" or \"what does Allah look like?\"",
        "Child points to the sky asking if Allah is there",
        "Child is confused about why they can't see Allah",
      ],
    },
    steps: {
      id: [
        "Jangan panik atau menjawab \"jangan tanya begitu.\" Pertanyaan ini fitrah — tanda anak mulai berpikir tentang Penciptanya.",
        "Jawab dengan dalil yang shahih: Allah berada di atas 'Arsy, di atas langit — sebagaimana disebut dalam Al-Qur'an. Saat ada hadits anak budak ditanya Rasulullah ﷺ \"di mana Allah?\", ia menjawab \"di langit,\" dan Nabi membenarkannya.",
        "Tekankan: kita tidak bisa membayangkan bentuk Allah, karena \"tidak ada sesuatu pun yang serupa dengan-Nya\" (QS. Asy-Syura: 11). Allah Maha Besar, tidak seperti makhluk.",
        "Hubungkan dengan hal yang anak rasakan: \"Walau kita tidak bisa lihat Allah, Allah selalu lihat kita, dengar kita, dan sayang kita.\"",
        "Tutup dengan rasa aman, bukan kebingungan: \"Makanya kita berdoa — karena Allah pasti dengar, di mana pun kita berada.\"",
      ],
      en: [
        "Don't panic or say \"don't ask that.\" This question is natural fitrah — a sign the child is starting to think about their Creator.",
        "Answer with sound evidence: Allah is above the Throne, above the heavens — as stated in the Qur'an. When the Prophet ﷺ asked a servant girl \"where is Allah?\", she said \"in the heaven,\" and he affirmed her.",
        "Emphasize: we cannot picture Allah's form, for \"there is nothing like unto Him\" (Ash-Shura: 11). Allah is Most Great, unlike any creation.",
        "Connect to what the child feels: \"Even though we can't see Allah, Allah always sees us, hears us, and loves us.\"",
        "Close with security, not confusion: \"That's why we pray — because Allah surely hears, wherever we are.\"",
      ],
    },
    islamicNote: {
      id: "Pertanyaan \"di mana Allah\" punya jawaban yang jelas dalam Islam, dan Rasulullah ﷺ sendiri menanyakannya kepada seorang budak perempuan untuk menguji imannya (HR. Muslim). Jawaban yang benar — Allah di atas langit, di atas 'Arsy, tanpa kita bisa membayangkan bentuk-Nya — justru menanamkan tauhid yang lurus sejak dini. Yang harus dihindari: jawaban panteistik seperti \"Allah ada di mana-mana / di dalam hatimu\" yang mengaburkan akidah.",
      en: "The question \"where is Allah\" has a clear answer in Islam, and the Prophet ﷺ himself asked it of a servant girl to test her faith (Muslim). The correct answer — Allah is above the heavens, above the Throne, without us being able to imagine His form — plants sound tawhid early. Avoid pantheistic answers like \"Allah is everywhere / inside your heart\" that blur the creed.",
    },
    recommendedDoa: ["doa-pagi", "sebelum-tidur"],
    supportingHadith: ["anak-mukmin-amanat", "muliakan-anak"],
    ageMin: 3,
    ageMax: 9,
    category: "spiritual",
    published: "2026-05-28",
    updated: "2026-05-28",
    quote: {
      id: "\"Allah di mana?\" bukan pertanyaan nakal. Itu pertanyaan pertama seorang hamba kecil kepada Tuhannya — jawab dengan jujur dan penuh kasih.",
      en: "\"Where is Allah?\" isn't a naughty question. It's a small servant's first question to their Lord — answer it honestly and with love.",
    },
    seoQuery: {
      id: "cara menjawab anak bertanya allah di mana",
      en: "how to answer child where is allah",
    },
  },

  {
    slug: "anak-bertanya-tentang-kematian",
    title: {
      id: "Saat Anak Bertanya Tentang Kematian",
      en: "When Your Child Asks About Death",
    },
    excerpt: {
      id: "Kakek meninggal, hewan peliharaan mati, atau anak tiba-tiba takut Mama akan pergi. Cara bicara tentang kematian dengan jujur, menenangkan, dan islami.",
      en: "A grandparent passes, a pet dies, or a child suddenly fears Mama will leave. How to talk about death honestly, calmly, and through faith.",
    },
    signs: {
      id: [
        "Anak bertanya \"apa itu mati?\" atau \"apakah aku akan mati?\"",
        "Anak takut orang tua akan meninggal dan meninggalkannya",
        "Anak sedih atau bingung setelah ada anggota keluarga / hewan yang wafat",
      ],
      en: [
        "Child asks \"what is death?\" or \"will I die?\"",
        "Child fears a parent will die and leave them",
        "Child is sad or confused after a family member or pet passes",
      ],
    },
    steps: {
      id: [
        "Jangan menghindar atau berbohong (\"kakek cuma tidur panjang\") — itu membuat anak takut tidur. Gunakan kata yang jujur: \"meninggal\" / \"wafat.\"",
        "Jelaskan dengan tenang: setiap makhluk yang bernyawa akan kembali kepada Allah. Itu bukan akhir — orang beriman akan bertemu lagi di surga, tempat yang jauh lebih indah.",
        "Validasi kesedihan: \"Boleh sedih, Nak. Nabi Muhammad ﷺ pun menangis saat putranya wafat. Menangis karena sayang itu wajar.\"",
        "Ajarkan respons islami: ucapkan \"Innaa lillaahi wa innaa ilaihi raji'uun\" dan doakan yang wafat.",
        "Beri rasa aman: \"Hidup dan mati di tangan Allah. Tugas kita berbuat baik selama hidup, supaya nanti berkumpul di tempat yang bahagia.\"",
        "Jangan beri detail yang menakutkan (siksa kubur, dll) pada anak kecil. Fokus pada kasih sayang Allah dan harapan berjumpa kembali.",
      ],
      en: [
        "Don't avoid or lie (\"grandpa is just sleeping a long time\") — it makes children afraid of sleep. Use honest words: \"died\" / \"passed away.\"",
        "Explain calmly: every living being returns to Allah. It's not the end — believers meet again in Paradise, a far more beautiful place.",
        "Validate sadness: \"It's okay to be sad. Even the Prophet ﷺ wept when his son passed. Crying out of love is natural.\"",
        "Teach the Islamic response: say \"Innaa lillaahi wa innaa ilaihi raji'uun\" and pray for the deceased.",
        "Give security: \"Life and death are in Allah's hands. Our job is to do good while we live, so we gather later in a happy place.\"",
        "Don't give frightening details (punishment of the grave, etc.) to small children. Focus on Allah's mercy and the hope of reunion.",
      ],
    },
    islamicNote: {
      id: "Rasulullah ﷺ menangis saat cucunya sekarat dan saat putranya Ibrahim wafat, sambil bersabda: \"Mata menangis, hati bersedih, tapi kami tidak mengucapkan kecuali yang diridhai Allah\" (HR. Bukhari). Islam tidak menyuruh anak menyembunyikan kesedihan — tapi mengarahkannya menjadi penerimaan atas takdir Allah dan harapan akan perjumpaan di akhirat. Kematian, bagi anak muslim, sebaiknya dibingkai sebagai perpindahan, bukan kehancuran.",
      en: "The Prophet ﷺ wept as his grandson lay dying and when his son Ibrahim passed, saying: \"The eye weeps, the heart grieves, but we say only what pleases Allah\" (Bukhari). Islam doesn't ask a child to hide grief — it channels it into acceptance of Allah's decree and hope of reunion in the hereafter. Death, for a Muslim child, is best framed as a move, not a destruction.",
    },
    recommendedDoa: ["doa-untuk-orang-tua", "perlindungan-anak"],
    supportingHadith: ["kasih-sayang-kepada-anak", "kelembutan-keindahan"],
    ageMin: 3,
    ageMax: 10,
    category: "emosi",
    published: "2026-05-28",
    updated: "2026-05-28",
    quote: {
      id: "Anak tidak butuh kita menyembunyikan kematian. Mereka butuh kita menemaninya memahami: bahwa berpisah itu sementara, dan Allah Maha Penyayang.",
      en: "Children don't need us to hide death from them. They need us beside them as they understand: that parting is temporary, and Allah is Most Merciful.",
    },
    seoQuery: {
      id: "cara menjelaskan kematian pada anak menurut islam",
      en: "how to explain death to a child islamic",
    },
  },

  {
    slug: "anak-melihat-orang-tua-bertengkar",
    title: {
      id: "Saat Anak Melihat Orang Tua Bertengkar",
      en: "When Your Child Sees You Argue",
    },
    excerpt: {
      id: "Tidak ada rumah tangga tanpa selisih. Yang membentuk anak bukan ketiadaan konflik, tapi bagaimana konflik diselesaikan dan diperbaiki di depan mereka.",
      en: "No marriage is without disagreement. What shapes a child isn't the absence of conflict, but how conflict is resolved and repaired in front of them.",
    },
    signs: {
      id: [
        "Anak menjadi diam, menarik diri, atau menangis saat orang tua berselisih",
        "Anak mencoba menengahi atau menyalahkan dirinya atas pertengkaran",
        "Anak menjadi lebih rewel / sulit tidur setelah menyaksikan konflik",
      ],
      en: [
        "Child goes quiet, withdraws, or cries when parents argue",
        "Child tries to mediate or blames themselves for the fight",
        "Child becomes fussier / sleeps poorly after witnessing conflict",
      ],
    },
    steps: {
      id: [
        "Sadari: anak merekam nada suara dan wajah jauh sebelum mengerti kata-kata. Turunkan suara, bukan menaikkannya.",
        "Kalau sudah terlanjur bertengkar di depan anak — jangan pura-pura tidak terjadi apa-apa. Anak tahu.",
        "Lakukan 'perbaikan' di depan anak: saling minta maaf, berpelukan, atau bicara baik-baik. Anak yang melihat orang tua berdamai belajar bahwa konflik bisa diselesaikan dengan kasih.",
        "Yakinkan anak: \"Ayah dan Bunda tadi beda pendapat, tapi kami tetap saling sayang, dan kami sangat sayang kamu. Ini bukan salahmu.\"",
        "Hindari menjadikan anak sebagai penengah, kurir pesan, atau tempat mengadu tentang pasangan.",
        "Jadikan rumah tempat aman: Rasulullah ﷺ adalah suami paling lembut di rumahnya, dan tidak pernah membentak keluarga.",
      ],
      en: [
        "Realize: children record tone and faces long before they understand words. Lower your voice, don't raise it.",
        "If you've already argued in front of them — don't pretend nothing happened. The child knows.",
        "Do the 'repair' in front of the child: apologize to each other, hug, or talk it through kindly. A child who sees parents reconcile learns that conflict can be resolved with love.",
        "Reassure the child: \"Ayah and Bunda disagreed, but we still love each other, and we love you very much. This is not your fault.\"",
        "Don't make the child a mediator, a message courier, or a confidant for complaints about your spouse.",
        "Make home a safe place: the Prophet ﷺ was the gentlest husband at home, and never shouted at his family.",
      ],
    },
    islamicNote: {
      id: "Rasulullah ﷺ bersabda: \"Sebaik-baik kalian adalah yang paling baik kepada keluarganya, dan aku adalah yang paling baik kepada keluargaku\" (HR. Tirmidzi). Rumah dalam Islam adalah tempat ketenangan (sakinah). Anak yang tumbuh menyaksikan orang tua menyelesaikan selisih dengan adab — bukan dengan teriakan atau diam berhari-hari — belajar model pernikahan yang sehat yang akan ia bawa kelak.",
      en: "The Prophet ﷺ said: \"The best of you are the best to their families, and I am the best to my family\" (Tirmidhi). The home in Islam is a place of tranquility (sakinah). A child who grows up watching parents resolve differences with adab — not with shouting or days of silence — learns a healthy marriage model they'll carry forward.",
    },
    recommendedDoa: ["masuk-rumah", "doa-untuk-orang-tua"],
    supportingHadith: ["kelembutan-keindahan", "rumah-tempat-paling-utama"],
    ageMin: 1,
    ageMax: 12,
    category: "emosi",
    published: "2026-05-28",
    updated: "2026-05-28",
    quote: {
      id: "Yang membekas pada anak bukan bahwa orang tuanya pernah bertengkar — tapi apakah mereka melihat orang tuanya berbaikan.",
      en: "What stays with a child isn't that their parents argued — it's whether they saw their parents make up.",
    },
    seoQuery: {
      id: "dampak anak melihat orang tua bertengkar islam",
      en: "child witnessing parents argue islamic parenting",
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
