import type { Catatan } from "./types";

/**
 * First-person notebook entries by Salman (writing as "Abi") about
 * the family's twin two-year-olds, Baby Mo and Baby Ais.
 *
 * Editorial guardrails for every catatan:
 *   - First names only (Baby Mo, Baby Ais). Never surname. Never wife's name.
 *   - No identifying details (school, neighborhood, photos).
 *   - One Islamic anchor per note (doa / hadith / parenting), not three.
 *   - Closing "Catatan untuk diri sendiri" is the WhatsApp-forwardable line.
 *
 * URL slugs describe the MOMENT, not the kid — keeps Google's per-kid
 * archive minimal.
 *
 * The mascot character "Baby Mo" on the site is named after the founder's
 * son. The notes intentionally blur the line — readers should feel that
 * the brand IS the family.
 */
export const catatanList: Catatan[] = [
  {
    slug: "bisikan-jam-tiga-pagi",
    child: "mo",
    pov: "abi",
    pose: "baby-mo-pose-09.png",
    published: "2026-05-26",
    title: {
      id: "Bisikan jam tiga pagi",
      en: "Whispers at three in the morning",
    },
    hook: {
      id: "Baby Mo bangun nangis tengah malam. Baby Ais, kembar perempuannya, tetap nyenyak. Abi jadi suara yang tenang.",
      en: "Baby Mo wakes crying in the middle of the night. Baby Ais, his twin sister, sleeps through. Abi becomes a quiet voice.",
    },
    body: {
      id: `Tadi malam Baby Mo bangun jam tiga, nangis. Belum bisa ngomong banyak, jadi belum bisa cerita kenapa. Baby Ais, kembar perempuannya, tetap tidur nyenyak di kasur sebelah — kadang Abi takjub bagaimana satu anak bisa nangis sekencang itu tanpa membangunkan saudara kembarnya.

Refleks pertama Abi: "Yuk, baca doa sebelum tidur." Lalu sadar — Baby Mo belum bisa ucap apa pun selain "umi", "abi", dan "mmmm" yang artinya minta gendong.

Abi pun gendong, jalan-jalan kecil di kamar. Sambil bisikkan di telinganya:

> *Bismika Allahumma ahyaa wa amuut.*

Pelan. Berulang. Bukan supaya dia hafal. Supaya dia kenal suara itu.

Beberapa minggu terakhir Abi banyak baca soal anak usia 0–3 tahun — terutama yang kembar. Salah satu yang stuck di kepala: anak menyerap doa jauh sebelum mereka bisa mengulanginya. Telinga mereka sudah mendengar Al-Fatihah dari dalam kandungan — dua telinga, dua anak. Bahasa pertama yang mereka kenal dari kita bukan kata — tapi nada. Tenang atau panik. Lembut atau buru-buru.

Jadi malam itu Abi tidak mengajarkan apa-apa. Cuma jadi suara yang tenang. Yang baca doa pelan-pelan sampai Baby Mo tertidur lagi di bahu Abi. Baby Ais masih bersuara tidur kecil di kasur sebelahnya. Tidak terbangun. Alhamdulillah.

Kalau besok Baby Mo bangun lagi jam tiga, Abi akan kembali bisikkan kalimat yang sama. Kalau gantinya Baby Ais, juga kalimat yang sama. Bukan untuk mengajarinya. Untuk mengenalkan.`,
      en: `Last night Baby Mo woke up at three, crying. He can't say much yet, so he couldn't tell me why. Baby Ais, his twin sister, slept on in the bed beside him — sometimes I'm amazed how one child can cry that loudly without waking his twin sister.

Abi's first reflex: "Let's read the bedtime du'a." Then I caught myself — Baby Mo can't say anything yet beyond "umi", "abi", and an "mmmm" that means "carry me".

So Abi carried him, walking slowly around the room. Whispering into his ear:

> *Bismika Allahumma ahyaa wa amuut.*

Slowly. On repeat. Not so he'd memorize it. So he'd recognize the sound.

I've been reading a lot about kids aged 0–3 lately — especially twins. One thing that stuck: children absorb du'as long before they can repeat them. Their ears have been hearing Al-Fatihah from inside the womb — two ears, two children. The first language they learn from us isn't words — it's tone. Calm or panicked. Gentle or rushed.

So that night Abi taught him nothing. I was just a quiet voice. Reading the du'a slowly until Baby Mo fell asleep again on my shoulder. Baby Ais was still making small sleep-sounds in the bed beside us — she didn't wake up. Alhamdulillah.

If tomorrow Baby Mo wakes at three again, Abi will whisper the same words. If instead it's Baby Ais, the same words. Not to teach them. To introduce them.`,
    },
    anchor: { type: "doa", slug: "sebelum-tidur" },
    takeaway: {
      id: "Doa sebelum tidur bukan untuk dihafal. Untuk dijadikan suara latar belakang rumah ini. Dua anak, satu suara yang sama — itu jangkar mereka.",
      en: "The bedtime du'a isn't for memorizing. It's for being the background sound of this home. Two children, one same voice — that's their anchor.",
    },
    tags: ["malam", "bayi-kembar", "doa-tidur"],
    readingTimeMin: 2,
  },

  {
    slug: "disindir-si-kembar-waktu-makan",
    child: "both",
    pov: "abi",
    pose: "baby-mo-ok.png",
    published: "2026-05-22",
    title: {
      id: "Disindir si kembar waktu makan",
      en: "Called out by both twins over breakfast",
    },
    hook: {
      id: "Abi lupa baca Bismillah. Baby Mo dan Baby Ais kompak teriak \"BIMIMILA!\" sambil melotot. Punya anak kembar = double accountability.",
      en: "Abi forgot to say Bismillah. Baby Mo and Baby Ais shouted \"BIMIMILA!\" in unison, glaring. Having twins = double accountability.",
    },
    body: {
      id: `Pagi tadi lagi buru-buru. Baby Mo dan Baby Ais sudah duduk di kursi makan tinggi mereka — dua piring nasi tim, dua sendok kecil yang gambar kelincinya sama. Abi nyamper kursi sambil cek HP, langsung suap.

Baby Mo menatap Abi.
Baby Ais menatap Abi.

Lalu — barengan, seperti sudah latihan diam-diam — keduanya teriak:

"BIMIMILA!"

Diam sebentar. Sendok masih di mulut. Abi tarik balik, telan dulu, lalu — malu sendiri sambil ketawa: "Astaghfirullah. Bismillah."

Baby Mo balik ke piringnya. Baby Ais menatap Abi sebentar lagi, seolah memastikan, lalu juga makan.

Abi yang mengajarkan mereka Bismillah sebelum makan — pelan-pelan, beberapa bulan ini, setiap waktu makan. Awalnya cuma Abi yang ucap, mereka cuma mendengar sambil ngunyah. Belakangan satu kata itu mulai muncul: "BimimiLA" — kadang dari Baby Mo, kadang dari Baby Ais, kadang barengan kayak pagi tadi.

Ada hadits yang sering dikutip di group-group WhatsApp:

> *"Jika salah seorang dari kalian makan, hendaklah dia menyebut nama Allah. Jika dia lupa di awal, hendaklah dia ucapkan: Bismillaahi fii awwalihi wa aakhirihi."*
> — HR. Abu Dawud, Tirmidzi

Pintu cadangan, kalau lupa. Tapi pelajaran lain pagi itu: punya anak kembar berarti punya dua "auditor" sekaligus. Kalau satu lupa mengoreksi, yang satunya yang inget. Susah sembunyi.

Yang lebih penting lagi: mereka tidak nge-judge. Tidak marah. Cuma menunjuk fakta — sambil melotot, ya, tapi tanpa marah. Anak-anak menyerap apa yang sering mereka dengar, lalu memantulkannya kembali ke kita di waktu yang sering tidak kita duga.`,
      en: `Rushing this morning. Baby Mo and Baby Ais were already in their high chairs — two bowls of porridge, two tiny spoons with the same rabbit pattern. Abi slid into a chair while checking the phone, took a bite right away.

Baby Mo looked at Abi.
Baby Ais looked at Abi.

Then — in unison, like they'd secretly practiced — both shouted:

"BIMIMILA!"

Pause. Spoon still in my mouth. Abi pulled it back, swallowed, then — embarrassed and laughing at myself: "Astaghfirullah. Bismillah."

Baby Mo returned to his bowl. Baby Ais kept staring at Abi for another second, as if confirming, then she went back to eating too.

Abi taught them Bismillah before eating — slowly, over the last few months, at every meal. At first only I'd say it, they'd just hear it while chewing. Lately the word started showing up: "BimimiLA" — sometimes from Baby Mo, sometimes from Baby Ais, sometimes both together like this morning.

There's a hadith often quoted in WhatsApp groups:

> *"When one of you eats, let him mention the name of Allah. If he forgets at the start, let him say: Bismillaahi fii awwalihi wa aakhirihi."*
> — Abu Dawud, Tirmidhi

A back door, if we forget. But the other lesson this morning: having twins means having two auditors at once. If one forgets to correct you, the other remembers. Hard to hide.

What's more important: they didn't judge. No anger. Just pointing out the fact — yes, while glaring, but without anger. Children absorb what they hear often, and reflect it back to us at times we don't expect.`,
    },
    anchor: { type: "doa", slug: "sebelum-makan" },
    takeaway: {
      id: "Kalau di meja makan, taro HP dulu. Bukan demi adab makan — demi tidak ketangkap basah oleh dua pasang mata yang sama.",
      en: "When you're at the table, put the phone down first. Not for the sake of table adab — to avoid getting caught by two identical pairs of eyes.",
    },
    tags: ["adab", "makan", "anak-kembar"],
    readingTimeMin: 2,
  },

  {
    slug: "doa-relay-anak-kembar",
    child: "both",
    pov: "abi",
    pose: "baby-mo-thank-you.png",
    published: "2026-05-18",
    title: {
      id: "Doa relay — satu doa, dua gema",
      en: "Du'a relay — one du'a, two echoes",
    },
    hook: {
      id: "Sebelum tidur, Abi mulai. Baby Mo ikut setengah detik kemudian. Baby Ais ikut setengah detik setelahnya. Tiga suara, satu doa.",
      en: "At bedtime, Abi starts. Baby Mo follows half a second later. Baby Ais follows half a second after that. Three voices, one du'a.",
    },
    body: {
      id: `Sebelum tidur kemarin malam, ritual yang sama: Baby Mo dan Baby Ais di kasur kecil mereka berdampingan, Abi duduk di antara mereka. Lampu meja menyala redup. Boneka kelinci di pelukan Baby Mo, boneka domba di pelukan Baby Ais.

Abi mulai pelan: "Bismika Allahumma..."

Sebelum Abi lanjut, dari sisi Baby Mo: "Bimika..."

Setengah detik kemudian, dari sisi Baby Ais: "Mika..."

Abi diam. Mereka belum tahu apa yang baru saja mereka lakukan. Mungkin mereka pikir ini cuma kebiasaan menjelang tidur. Cuma irama. Cuma suara.

Tapi Abi tahu — sesuatu sudah mulai menempel.

Selama dua tahun, doa ini dibacakan ke telinga mereka. Belum pernah Abi minta mereka mengulang. Tidak ada sesi "ayo hafalkan, Nak." Cuma diulang, malam ke malam, sebagai suara latar tidur. Dan sekarang, tanpa Abi minta, sepotongnya kembali — dari dua arah, dengan jeda yang sedikit berbeda, seperti gema.

Ada keunikan anak kembar yang Abi pelan-pelan mulai pahami: mereka belajar dua kali. Sekali dari kita, sekali dari saudaranya. Yang satu nangkep duluan, yang satunya nangkep dari yang pertama. Bahasa, doa, kebiasaan — semua lewat dua pintu.

Ada hadits Nabi ﷺ:

> *"Tidaklah seorang ayah memberikan pemberian yang lebih utama bagi anaknya daripada budi pekerti yang baik."*
> — HR. Tirmidzi

Budi pekerti, dalam praktik Abi, dimulai dari satu kalimat di malam hari. Yang Abi tahu satu malam akan tiba, ketika Abi terlalu lelah atau lupa, dan suara yang membaca doa itu bukan lagi Abi — tapi mereka berdua. Buat satu sama lain.

*(Dan kadang, untuk membuat ayahnya menangis di pintu kamar.)*`,
      en: `Bedtime last night, the same ritual: Baby Mo and Baby Ais on their little side-by-side mattresses, Abi sitting between them. Desk lamp dimmed. The rabbit doll in Baby Mo's arms, the lamb in Baby Ais's.

Abi started softly: "Bismika Allahumma..."

Before Abi could continue, from Baby Mo's side: "Bimika..."

Half a second later, from Baby Ais's side: "Mika..."

Abi went quiet. They don't yet know what they just did. They probably think it's just a bedtime habit. Just rhythm. Just sound.

But Abi knows — something has started to stick.

For two years, this du'a has been read into their ears. Abi has never once asked them to repeat. No "let's memorize this, kids" session. Just repeated, night after night, as the background sound of sleep. And now, without Abi asking, a piece of it has returned — from two directions, with slightly different timing, like an echo.

There's a uniqueness to twins that Abi is slowly starting to understand: they learn twice. Once from us, once from their sibling. One catches it first, the other catches it from the first. Language, du'a, habits — everything passes through two doors.

There's a hadith of the Prophet ﷺ:

> *"No father has given his child a gift more valuable than good character."*
> — Tirmidhi

Good character, in Abi's practice, begins with one sentence at night. I know a night will come, when Abi is too tired or forgets, and the voice reciting the du'a is no longer Abi's — but theirs. For each other.

*(And sometimes, to make their father quietly cry at the doorway.)*`,
    },
    anchor: { type: "doa", slug: "sebelum-tidur" },
    takeaway: {
      id: "Konsistensi mengalahkan intensitas. Tidak perlu mengajarkan doa 'dengan benar.' Cukup ucap, malam demi malam, sampai doa itu masuk ke gema rumah ini — dan satu hari ke mulut mereka sendiri.",
      en: "Consistency beats intensity. You don't need to teach a du'a 'correctly.' Just say it, night after night, until it becomes the echo of this home — and one day, the sound of their own voices.",
    },
    tags: ["malam", "anak-kembar", "doa-tidur", "konsistensi"],
    readingTimeMin: 3,
  },

  // ───────────────────────────── ATTITUDE / AKHLAK ─────────────────────────────
  {
    slug: "krayon-ungu-untuk-berdua",
    child: "both",
    pov: "umi",
    pose: "baby-mo-thank-you.png",
    published: "2026-06-02",
    title: {
      id: "Krayon ungu untuk berdua",
      en: "The purple crayon, for two",
    },
    hook: {
      id: "Cuma ada satu krayon ungu. Baby Mo dan Baby Ais sama-sama mau. Umi menahan diri untuk tidak langsung melerai.",
      en: "There was only one purple crayon. Baby Mo and Baby Ais both wanted it. Umi held back from stepping in too fast.",
    },
    body: {
      id: `Pagi tadi cuma ada satu krayon ungu yang masih utuh. Baby Mo memegangnya duluan, Baby Ais menariknya. Dua tangan kecil, satu krayon, dan suara "punya Ais!" yang pertama kali Umi dengar sejelas itu.

Refleks Umi mau langsung ambil krayonnya dan beli yang baru nanti sore. Tapi Umi tahan. Umi cuma duduk di lantai, sejajar mata mereka, dan bilang pelan: "Gantian, ya. Mo dulu warnai bulan, terus krayonnya buat Ais warnai bintang."

Butuh tiga kali diulang. Tapi akhirnya Baby Mo melepas krayon itu ke tangan saudarinya — pelan, ragu, tapi melepas. Baby Ais bilang "ankyu" (terima kasih versinya). Dan Umi diam-diam menahan napas.

> *Sebaik-baik kalian adalah yang paling baik akhlaknya.*

Berbagi bukan bawaan lahir. Itu diajari, satu krayon ungu setiap kali. Umi tidak menyelesaikan masalahnya untuk mereka — Umi cuma menunjukkan jalannya, lalu memberi mereka ruang untuk memilih sendiri.`,
      en: `This morning there was only one purple crayon still whole. Baby Mo grabbed it first, Baby Ais pulled at it. Two little hands, one crayon, and an "Ais's one!" — the first time Umi heard it that clearly.

Umi's reflex was to just take the crayon and buy a new one this evening. But I held back. I sat on the floor, level with their eyes, and said softly: "Let's take turns. Mo colours the moon first, then the crayon goes to Ais for the stars."

It took three repeats. But Baby Mo finally let the crayon go into his sister's hand — slowly, unsure, but he let go. Baby Ais said "ankyu" (her version of thank you). And Umi quietly held her breath.

> *The best of you are those with the best character.*

Sharing isn't something they're born with. It's taught, one purple crayon at a time. Umi didn't solve it for them — I just showed the path, then gave them room to choose it themselves.`,
    },
    anchor: { type: "parenting", slug: "anak-tidak-mau-berbagi" },
    takeaway: {
      id: "Jangan selalu selesaikan rebutan mereka. Tunjukkan jalannya — 'gantian, ya' — lalu beri ruang untuk memilih sendiri. Akhlak tumbuh dari pilihan kecil yang diulang.",
      en: "Don't always solve their squabbles. Show the path — 'let's take turns' — then leave room for them to choose it. Character grows from small choices, repeated.",
    },
    tags: ["akhlak", "berbagi", "anak-kembar"],
    readingTimeMin: 2,
  },

  {
    slug: "siapa-yang-jatuhkan-gelas",
    child: "mo",
    pov: "abi",
    pose: "baby-mo-alright.png",
    published: "2026-05-31",
    title: {
      id: "Siapa yang menjatuhkan gelas",
      en: "Who knocked the cup over",
    },
    hook: {
      id: "Gelas pecah di dapur. Baby Mo menunjuk Baby Ais. Tapi matanya bilang hal lain.",
      en: "A cup shattered in the kitchen. Baby Mo pointed at Baby Ais. But his eyes said otherwise.",
    },
    body: {
      id: `Terdengar gelas pecah dari dapur. Abi masuk, Baby Mo langsung menunjuk Baby Ais — padahal Baby Ais lagi duduk jauh, main balok.

Abi jongkok. Tidak marah, tidak buru-buru. Cuma tanya: "Mo yang pegang gelasnya tadi?" Baby Mo diam. Lalu mengangguk kecil. Belum lancar bicara, tapi sudah paham rasa malu.

Abi tidak menghukum. Abi bilang: "Gelas bisa diganti. Jujur itu yang Abi sayang." Lalu kami bereskan pecahannya bareng-bareng. Baby Mo ikut memungut (yang plastik saja).

> *Hendaklah kalian jujur, karena kejujuran menuntun pada kebaikan.*

Anak kecil berbohong bukan karena jahat — karena takut. Kalau jujur selalu disambut amarah, dia belajar menyembunyikan. Kalau jujur disambut tenang, dia belajar terbuka. Malam ini Abi pilih jadi tempat yang aman untuk berkata benar.`,
      en: `A cup shattered in the kitchen. Abi walked in, and Baby Mo immediately pointed at Baby Ais — even though she was sitting far away, playing with blocks.

Abi crouched down. Not angry, not rushed. Just asked: "Was Mo holding the cup?" Baby Mo went quiet. Then nodded, small. He can't talk fluently yet, but he already understands shame.

Abi didn't punish. I said: "Cups can be replaced. Honesty is what Abi loves." Then we cleaned up the pieces together. Baby Mo helped pick up (the plastic bits only).

> *Hold to truthfulness, for truthfulness leads to goodness.*

Small children lie not out of malice — out of fear. If honesty is always met with anger, they learn to hide. If honesty is met with calm, they learn to open up. Tonight Abi chose to be the safe place to tell the truth.`,
    },
    anchor: { type: "parenting", slug: "anak-bohong" },
    takeaway: {
      id: "Sambut kejujuran dengan tenang, bukan amarah. Anak yang jujurnya selalu dimarahi akan belajar menyembunyikan. Jadilah tempat yang aman untuk berkata benar.",
      en: "Meet honesty with calm, not anger. A child whose truth is always punished learns to hide. Be the safe place to tell the truth.",
    },
    tags: ["akhlak", "jujur", "Baby Mo"],
    readingTimeMin: 2,
  },

  {
    slug: "ankyu-pertama-baby-ais",
    child: "ais",
    pov: "umi",
    pose: "baby-mo-thank-you.png",
    published: "2026-05-30",
    title: {
      id: "'Ankyu' pertama Baby Ais",
      en: "Baby Ais's first 'thank you'",
    },
    hook: {
      id: "Umi memberi Baby Ais sepotong pisang. Tanpa diminta, dia bilang 'ankyu'. Umi hampir menangis.",
      en: "Umi handed Baby Ais a slice of banana. Unprompted, she said 'ankyu'. Umi nearly cried.",
    },
    body: {
      id: `Hal kecil, tapi Umi ingat seharian. Umi kasih sepotong pisang ke Baby Ais. Belum sempat Umi bilang "bilang apa?", dia sudah lebih dulu: "ankyu."

Umi tidak pernah mengajarinya dengan serius. Cuma, setiap Abi memberi sesuatu ke Umi, kami selalu bilang "terima kasih" di depan mereka. Setiap kali. Ternyata mereka menonton. Selalu menonton.

Anak usia dua tahun adalah peniru ulung. Mereka tidak melakukan yang kita suruh — mereka melakukan yang kita lakukan. Adab bukan pelajaran yang diajarkan; adab itu udara yang dihirup di rumah.

> *Tidak ada pemberian orang tua kepada anaknya yang lebih utama daripada adab yang baik.*

Jadi kalau Umi mau Baby Ais dan Baby Mo tumbuh jadi anak yang tahu terima kasih, tugas Umi sederhana: jadi orang yang paling sering berterima kasih di rumah ini.`,
      en: `A small thing, but Umi thought about it all day. I gave Baby Ais a slice of banana. Before I could even say "what do you say?", she'd already beaten me to it: "ankyu."

I never taught her formally. It's just that every time Abi hands me something, we say "thank you" in front of them. Every time. Turns out they're watching. Always watching.

A two-year-old is a master mimic. They don't do what we tell them — they do what we do. Good manners aren't a lesson you teach; they're the air a child breathes at home.

> *No gift a parent gives a child is better than good character.*

So if Umi wants Baby Ais and Baby Mo to grow up grateful, my job is simple: be the person who says thank you the most in this house.`,
    },
    anchor: { type: "hadith", slug: "hadiah-terbaik-adab" },
    takeaway: {
      id: "Anak tidak melakukan yang kita suruh — mereka melakukan yang kita lakukan. Mau anak tahu terima kasih? Jadilah yang paling sering berterima kasih di rumah.",
      en: "Children don't do what we say — they do what we do. Want a grateful child? Be the one who says thank you the most at home.",
    },
    tags: ["akhlak", "adab", "Baby Ais"],
    readingTimeMin: 2,
  },

  {
    slug: "kata-maaf-yang-berat",
    child: "both",
    pov: "abi",
    pose: "baby-mo-alright.png",
    published: "2026-05-29",
    title: {
      id: "Kata maaf yang berat",
      en: "The heavy little word: sorry",
    },
    hook: {
      id: "Baby Mo mendorong Baby Ais sampai jatuh. Meminta maaf ternyata lebih sulit daripada yang Abi kira.",
      en: "Baby Mo pushed Baby Ais until she fell. Saying sorry turned out harder than Abi expected.",
    },
    body: {
      id: `Baby Mo merebut mainan, Baby Ais jatuh, nangis. Abi tidak menyuruh Baby Mo bilang "maaf" dengan nada perintah — itu cuma bikin kata maaf jadi mantra kosong.

Abi gendong Baby Ais dulu sampai tenang. Baru Abi tunjukkan ke Baby Mo: "Lihat, Ais sakit. Coba usap." Baby Mo ragu, lalu mengusap kepala saudarinya dengan tangan gemuknya. Itu maafnya — sebelum dia bisa mengucapkannya.

Empati datang sebelum kata. Anak perlu melihat akibat perbuatannya pada wajah orang lain dulu, baru kata "maaf" punya arti. Abi tidak mengejar ucapannya; Abi mengejar pengertiannya.

> *Bukan golongan kami orang yang tidak menyayangi yang kecil.*

Beberapa menit kemudian mereka main bareng lagi seolah tidak terjadi apa-apa. Tapi Abi tahu, sesuatu yang kecil baru saja ditanam.`,
      en: `Baby Mo snatched a toy, Baby Ais fell and cried. Abi didn't order Baby Mo to say "sorry" in a commanding tone — that only turns sorry into an empty word.

I carried Baby Ais first until she calmed. Then I showed Baby Mo: "Look, Ais is hurt. Try to soothe her." Baby Mo hesitated, then patted his sister's head with his chubby hand. That was his apology — before he could even say it.

Empathy comes before words. A child needs to see the effect of his action on someone's face first; only then does "sorry" mean anything. Abi wasn't chasing the word; I was chasing the understanding.

> *He is not one of us who does not show mercy to our young ones.*

A few minutes later they were playing together again as if nothing happened. But Abi knows something small was just planted.`,
    },
    anchor: { type: "parenting", slug: "adab-sehari-hari" },
    takeaway: {
      id: "Empati datang sebelum kata. Tunjukkan akibat perbuatan pada wajah orang lain dulu — baru kata 'maaf' punya arti. Kejar pengertiannya, bukan ucapannya.",
      en: "Empathy comes before words. Show the effect on someone's face first — then 'sorry' means something. Chase the understanding, not the word.",
    },
    tags: ["akhlak", "empati", "anak-kembar"],
    readingTimeMin: 2,
  },

  {
    slug: "gantian-di-ayunan",
    child: "both",
    pov: "umi",
    pose: "baby-mo-ok.png",
    published: "2026-05-28",
    title: {
      id: "Gantian di ayunan",
      en: "Taking turns on the swing",
    },
    hook: {
      id: "Satu ayunan, dua anak. Umi belajar bahwa 'sabar' paling mudah diajarkan lewat hitungan.",
      en: "One swing, two children. Umi learned that 'patience' is easiest taught by counting.",
    },
    body: {
      id: `Di taman cuma ada satu ayunan yang kosong. Baby Mo naik duluan. Baby Ais berdiri di samping, menarik-narik bajunya: giliranku, giliranku.

Umi tidak mau memaksa Baby Mo turun begitu saja — itu mengajarkan bahwa yang menangis paling kencang yang menang. Jadi Umi pakai hitungan: "Mo ayun sampai sepuluh, ya. Kita hitung bareng. Habis itu Ais." Dan kami menghitung keras-keras: satu… dua… sampai sepuluh.

Sampai hitungan sepuluh, Baby Mo turun sendiri. Bangga, malah. Sabar jadi terukur, ada ujungnya yang jelas — bukan "tunggu" yang kabur dan terasa selamanya buat anak dua tahun.

> *Sungguh, bersama kesulitan ada kemudahan.*

Menunggu giliran adalah ibadah kecil. Dan ternyata, sepuluh hitungan adalah panjang yang pas untuk hati yang masih belajar bersabar.`,
      en: `At the park there was only one free swing. Baby Mo got on first. Baby Ais stood beside it, tugging his shirt: my turn, my turn.

Umi didn't want to just force Baby Mo off — that teaches that whoever cries loudest wins. So I used counting: "Mo swings until ten, okay. We'll count together. Then it's Ais." And we counted out loud: one… two… all the way to ten.

At ten, Baby Mo climbed off on his own. Proud, even. Patience became measurable, with a clear end — instead of a vague "wait" that feels like forever to a two-year-old.

> *Indeed, with hardship comes ease.*

Waiting your turn is a small act of worship. And it turns out, a count of ten is just the right length for a heart still learning to be patient.`,
    },
    anchor: { type: "parenting", slug: "rivalitas-saudara" },
    takeaway: {
      id: "Buat 'sabar' jadi terukur. 'Tunggu' terasa selamanya buat anak; hitungan sampai sepuluh punya ujung yang jelas — dan anak bisa melepas dengan bangga.",
      en: "Make 'patience' measurable. 'Wait' feels like forever to a child; a count to ten has a clear end — and a child can let go with pride.",
    },
    tags: ["akhlak", "sabar", "anak-kembar"],
    readingTimeMin: 2,
  },

  {
    slug: "assalamualaikum-ke-pak-rt",
    child: "mo",
    pov: "abi",
    pose: "baby-mo-yes.png",
    published: "2026-05-16",
    title: {
      id: "Assalamualaikum ke tetangga",
      en: "Assalamualaikum to the neighbour",
    },
    hook: {
      id: "Baby Mo melambai dan menggumam 'samlekum' ke tetangga. Abi sadar salam itu menular.",
      en: "Baby Mo waved and mumbled 'samlekum' to a neighbour. Abi realised salam is contagious.",
    },
    body: {
      id: `Sore tadi kami jalan kaki kecil. Lewat depan rumah tetangga, beliau menyapa. Tiba-tiba Baby Mo melambai dan bilang "samlekum" — versi cadelnya dari assalamualaikum.

Abi tidak pernah duduk dan mengajari "ayo bilang salam." Tapi setiap masuk rumah, Abi selalu ucap salam keras-keras. Setiap ketemu orang. Ternyata telinga kecil itu merekam semuanya.

Salam itu doa: semoga keselamatan untukmu. Mengajari anak menyebar salam berarti mengajarinya menebar kebaikan ke orang yang bahkan belum dia kenal. Itu bibit ramah yang akan tumbuh seumur hidup.

> *Sebarkanlah salam di antara kalian.*

Tetangga tadi tersenyum lebar, dan Abi diam-diam berdoa: semoga lambaian kecil ini jadi kebiasaan yang besar.`,
      en: `This afternoon we took a short walk. Passing a neighbour's house, she greeted us. Suddenly Baby Mo waved and said "samlekum" — his lisped version of assalamualaikum.

Abi never sat down to teach "say salam." But every time I enter the house, I say salam out loud. Every time I meet someone. Turns out those little ears record everything.

Salam is a prayer: may peace be upon you. Teaching a child to spread salam is teaching him to scatter goodness to people he doesn't even know yet. That's a seed of warmth that grows for a lifetime.

> *Spread salam (peace) amongst yourselves.*

The neighbour beamed, and Abi quietly prayed: may this little wave become a big habit.`,
    },
    anchor: { type: "doa", slug: "mengucap-salam" },
    takeaway: {
      id: "Anak menyebar salam karena melihat kita menyebarnya. Salam adalah doa keselamatan — mengajarkannya berarti mengajarkan menebar kebaikan ke orang yang belum dikenal.",
      en: "A child spreads salam because he sees us spread it. Salam is a prayer for peace — teaching it teaches kindness toward people not yet known.",
    },
    tags: ["adab", "salam", "Baby Mo"],
    readingTimeMin: 2,
  },

  {
    slug: "bismillah-sebelum-suap",
    child: "ais",
    pov: "umi",
    pose: "baby-mo-ok.png",
    published: "2026-05-15",
    title: {
      id: "Bismillah sebelum suap pertama",
      en: "Bismillah before the first bite",
    },
    hook: {
      id: "Baby Ais menahan tangan Umi sebelum makan, menunggu. Ternyata dia menunggu 'bismillah'.",
      en: "Baby Ais held Umi's hand back before eating, waiting. She was waiting for 'bismillah'.",
    },
    body: {
      id: `Waktu makan siang, Umi mau langsung menyuapi Baby Ais. Tapi dia menahan tangan Umi, menatap, menunggu sesuatu. Umi bingung sebentar — lalu sadar. Dia menunggu "bismillah".

Setiap suap pertama, kami selalu bilang bismillah bareng. Sudah jadi tanda mulai makan buat mereka, seperti lampu hijau. Tanpa itu, Baby Ais merasa ada yang kurang.

Yang Umi sukai: dia belum paham arti katanya, tapi sudah paham bahwa makan dimulai dengan menyebut nama Allah. Maknanya menyusul nanti; kebiasaannya dulu yang ditanam. Itu cara doa masuk ke tubuh anak — lewat rutinitas, bukan hafalan.

> *Bismillah… makanlah dengan tangan kananmu.*

Jadi Umi tahan suapan, kami ucap bismillah bareng, baru dia buka mulut lebar-lebar. Lampu hijau.`,
      en: `At lunch, Umi was about to feed Baby Ais straight away. But she held my hand back, looked at me, waiting for something. I was puzzled for a second — then realised. She was waiting for "bismillah".

Every first bite, we always say bismillah together. It's become their signal that eating begins, like a green light. Without it, Baby Ais felt something was missing.

What Umi loves: she doesn't understand the words yet, but she already understands that eating begins by mentioning Allah's name. The meaning will follow later; the habit gets planted first. That's how a du'a enters a child's body — through routine, not memorisation.

> *Say Bismillah… and eat with your right hand.*

So I held the spoon, we said bismillah together, and only then did she open wide. Green light.`,
    },
    anchor: { type: "doa", slug: "sebelum-makan" },
    takeaway: {
      id: "Makna doa menyusul; kebiasaannya ditanam dulu. Bismillah sebelum makan jadi 'lampu hijau' — doa masuk ke tubuh anak lewat rutinitas, bukan hafalan.",
      en: "A du'a's meaning follows later; the habit is planted first. Bismillah before eating becomes a 'green light' — du'a enters a child through routine, not memorisation.",
    },
    tags: ["doa", "adab-makan", "Baby Ais"],
    readingTimeMin: 2,
  },

  {
    slug: "beres-beres-sambil-nyanyi",
    child: "both",
    pov: "abi",
    pose: "baby-mo-yeyy.png",
    published: "2026-05-13",
    title: {
      id: "Beres-beres sambil bernyanyi",
      en: "Tidying up with a song",
    },
    hook: {
      id: "Ruang tamu seperti kapal pecah. Abi menemukan trik: beres-beres jadi permainan.",
      en: "The living room looked like a shipwreck. Abi found the trick: make tidying a game.",
    },
    body: {
      id: `Mainan di mana-mana. Kalau Abi bilang "ayo beresin" dengan nada capek, hasilnya nol. Jadi Abi ubah jadi lomba: "Siapa paling cepat masukin balok ke keranjang?"

Tiba-tiba beres-beres jadi seru. Baby Mo berlari ambil balok, Baby Ais ikut-ikutan memasukkan boneka. Abi nyanyi lagu beres-beres asal-asalan, mereka ketawa. Lima menit, lantai bersih.

Anak tidak benci membantu — mereka benci diperintah dengan nada bosan. Tugas yang sama bisa jadi beban atau jadi main, tergantung wajah kita waktu mengajaknya. Tanggung jawab paling mudah ditanam saat masih terasa seperti permainan.

> *Setiap kalian adalah pemimpin, dan akan dimintai tanggung jawab atas yang dipimpinnya.*

Tanggung jawab atas barang sendiri dimulai dari satu keranjang balok. Dan ternyata, sambil bernyanyi, jauh lebih ringan.`,
      en: `Toys everywhere. If Abi says "let's tidy up" in a tired voice, the result is zero. So I turned it into a race: "Who can put the blocks in the basket fastest?"

Suddenly tidying was fun. Baby Mo ran for blocks, Baby Ais copied him stuffing in dolls. Abi sang a made-up cleanup song, they laughed. Five minutes, clean floor.

Children don't hate helping — they hate being ordered in a bored voice. The same task can be a burden or a game, depending on our face when we ask. Responsibility is easiest planted while it still feels like play.

> *Each of you is a shepherd, and each is responsible for his flock.*

Responsibility for your own things starts with one basket of blocks. And it turns out, with a song, it's much lighter.`,
    },
    anchor: { type: "parenting", slug: "adab-sehari-hari" },
    takeaway: {
      id: "Anak tidak benci membantu — mereka benci diperintah dengan nada bosan. Jadikan beres-beres permainan; tanggung jawab paling mudah ditanam saat masih terasa seperti main.",
      en: "Children don't hate helping — they hate being ordered in a bored voice. Make tidying a game; responsibility is easiest planted while it still feels like play.",
    },
    tags: ["akhlak", "tanggung-jawab", "anak-kembar"],
    readingTimeMin: 2,
  },

  {
    slug: "ais-dan-kucing-jalanan",
    child: "ais",
    pov: "umi",
    pose: "baby-mo-wow.png",
    published: "2026-05-11",
    title: {
      id: "Baby Ais dan kucing kecil",
      en: "Baby Ais and the little cat",
    },
    hook: {
      id: "Seekor kucing lewat. Baby Ais mau menariknya kasar — lalu belajar tangan yang lembut.",
      en: "A cat wandered by. Baby Ais wanted to grab it roughly — then learned a gentle hand.",
    },
    body: {
      id: `Kucing kampung lewat di teras. Baby Ais girang, langsung mau menarik ekornya. Umi tahan tangannya pelan: "Sayang, pelan. Kucingnya juga sakit kalau ditarik."

Umi pegang tangan kecilnya, ajari mengelus dari kepala ke punggung. Pelan. Kucing itu diam, malah mendengkur. Mata Baby Ais membulat — wow — takjub bahwa lembut menghasilkan sesuatu yang kasar tidak bisa.

Kasih sayang ke makhluk kecil adalah latihan pertama kasih sayang ke manusia. Anak yang belajar lembut pada kucing belajar bahwa kekuatan bukan untuk menyakiti. Itu pelajaran besar yang masuk lewat bulu kucing.

> *Para penyayang akan disayangi oleh Yang Maha Penyayang.*

Kucingnya pergi setelah beberapa menit. Tapi Baby Ais masih menatap tangannya sendiri, seperti baru menemukan kekuatan baru: tangan yang lembut.`,
      en: `A street cat wandered onto the porch. Baby Ais was thrilled and went to grab its tail. Umi gently held her hand back: "Gently, love. The cat hurts too if you pull."

I held her little hand and taught her to stroke from head to back. Slowly. The cat stayed still, even purred. Baby Ais's eyes went wide — wow — amazed that gentleness produced something roughness couldn't.

Tenderness toward small creatures is the first rehearsal of tenderness toward people. A child who learns gentleness with a cat learns that strength isn't for hurting. That's a big lesson, arriving through cat fur.

> *The merciful are shown mercy by the Most Merciful.*

The cat left after a few minutes. But Baby Ais kept staring at her own hand, as if she'd discovered a new power: a gentle one.`,
    },
    anchor: { type: "hadith", slug: "kasih-sayang-kepada-anak" },
    takeaway: {
      id: "Kasih sayang ke makhluk kecil adalah latihan pertama kasih sayang ke manusia. Anak yang lembut pada kucing belajar bahwa kekuatan bukan untuk menyakiti.",
      en: "Tenderness toward small creatures is the first rehearsal of tenderness toward people. A child gentle with a cat learns that strength isn't for hurting.",
    },
    tags: ["akhlak", "kasih-sayang", "Baby Ais"],
    readingTimeMin: 2,
  },

  // ───────────────────────────── BEDTIME / FEELINGS ─────────────────────────────
  {
    slug: "mo-takut-gelap-lampu-kecil",
    child: "mo",
    pov: "abi",
    pose: "baby-mo-pose-09.png",
    published: "2026-05-09",
    title: {
      id: "Baby Mo dan gelap yang menakutkan",
      en: "Baby Mo and the scary dark",
    },
    hook: {
      id: "Lampu kamar dimatikan, Baby Mo menangis. Abi tidak menyalakan lampu — Abi menyalakan ketenangan.",
      en: "The light went off and Baby Mo cried. Abi didn't switch the light on — Abi switched on calm.",
    },
    body: {
      id: `Begitu lampu kamar Abi matikan, Baby Mo nangis. Gelap itu besar buat anak sekecil dia. Abi bisa saja langsung nyalakan lampu lagi — tapi itu mengajarkan bahwa gelap memang patut ditakuti.

Jadi Abi nyalakan lampu tidur kecil, gendong dia, dan bisikkan doa pelan. Abi bilang: "Allah jaga Mo. Abi di sini. Gelap itu cuma lampunya tidur." Suara tenang Abi lebih terang dari lampu mana pun.

Rasa takut anak tidak dilawan dengan "jangan takut" — itu tidak pernah berhasil. Dilawan dengan kehadiran. Anak perlu meminjam ketenangan kita sampai punya ketenangan sendiri. Dan doa sebelum tidur adalah cara meminjamkannya.

> *Dengan nama-Mu, ya Allah, aku hidup dan aku mati.*

Beberapa menit, tangisnya reda jadi napas tidur. Lampu kecil tetap menyala. Tapi yang sebenarnya menenangkannya bukan lampu itu — Abi tahu itu.`,
      en: `The moment Abi turned off the light, Baby Mo cried. The dark is enormous for someone so small. I could have just switched it back on — but that teaches that the dark is rightly feared.

So I turned on a small night light, carried him, and whispered the du'a softly. I said: "Allah is watching over Mo. Abi is here. The dark just means the light is sleeping." My calm voice was brighter than any lamp.

A child's fear isn't beaten with "don't be scared" — that never works. It's met with presence. A child borrows our calm until he has his own. And the bedtime du'a is how we lend it.

> *In Your name, O Allah, I live and I die.*

In a few minutes his crying eased into sleeping breath. The little light stayed on. But what truly calmed him wasn't the lamp — Abi knows that.`,
    },
    anchor: { type: "parenting", slug: "takut-gelap" },
    takeaway: {
      id: "Rasa takut anak tidak dilawan dengan 'jangan takut' — tapi dengan kehadiran. Anak meminjam ketenangan kita sampai punya sendiri; doa sebelum tidur cara meminjamkannya.",
      en: "A child's fear isn't beaten with 'don't be scared' — but with presence. A child borrows our calm until he has his own; the bedtime du'a is how we lend it.",
    },
    tags: ["malam", "takut-gelap", "Baby Mo"],
    readingTimeMin: 2,
  },

  {
    slug: "tantrum-di-tengah-toko",
    child: "mo",
    pov: "umi",
    pose: "baby-mo-pose-07.png",
    published: "2026-05-07",
    title: {
      id: "Tantrum di tengah toko",
      en: "A meltdown in the middle of the shop",
    },
    hook: {
      id: "Baby Mo menjerit di lantai toko karena tidak dibelikan mainan. Umi belajar diam dulu.",
      en: "Baby Mo screamed on the shop floor over a toy he couldn't have. Umi learned to go quiet first.",
    },
    body: {
      id: `Baby Mo mau mainan di rak, Umi bilang tidak. Dia langsung jatuhkan diri ke lantai toko, menjerit. Semua mata menoleh. Wajah Umi panas.

Dulu Umi akan menyerah saja biar cepat selesai. Tapi kali ini Umi jongkok, tarik napas, dan tidak ikut panik. Umi cuma bilang pelan: "Mo lagi marah ya. Umi temani sampai reda." Lalu diam. Menemani, bukan melawan.

Badai itu butuh waktu, tapi reda sendiri. Anak dua tahun belum punya rem untuk emosinya — yang dia punya cuma rem kita. Kalau kita ikut meledak, dua orang yang badai. Kalau kita tenang, dia punya pegangan.

> *Orang kuat bukanlah yang jago berkelahi, tapi yang menahan diri ketika marah.*

Setelah reda, Umi peluk. Tidak ada ceramah. Mainannya tetap tidak dibeli — tapi Baby Mo belajar bahwa marahnya tidak menakutkan Umi, dan tidak juga menang.`,
      en: `Baby Mo wanted a toy off the shelf, Umi said no. He dropped straight to the shop floor, screaming. Every head turned. My face burned.

I used to just give in to end it fast. But this time I crouched, took a breath, and didn't catch his panic. I just said softly: "Mo is angry. Umi will stay with you until it passes." Then quiet. Accompanying, not fighting.

The storm took time, but it passed on its own. A two-year-old has no brakes for his emotions yet — the only brakes he has are ours. If we erupt too, that's two people in a storm. If we stay calm, he has something to hold.

> *The strong one is not the good wrestler; the strong one is he who controls himself when angry.*

After it passed, Umi hugged him. No lecture. The toy still wasn't bought — but Baby Mo learned that his anger doesn't frighten Umi, and doesn't win either.`,
    },
    anchor: { type: "doa", slug: "ketika-marah" },
    takeaway: {
      id: "Anak belum punya rem untuk emosinya — yang dia punya cuma rem kita. Kalau kita ikut meledak, dua orang badai. Kalau kita tenang, dia punya pegangan.",
      en: "A child has no brakes for his emotions yet — the only brakes he has are ours. If we erupt too, that's two storms. If we stay calm, he has something to hold.",
    },
    tags: ["emosi", "tantrum", "Baby Mo"],
    readingTimeMin: 2,
  },

  {
    slug: "menara-balok-yang-roboh",
    child: "mo",
    pov: "abi",
    pose: "baby-mo-idea.png",
    published: "2026-05-05",
    title: {
      id: "Menara balok yang roboh lagi",
      en: "The block tower that kept falling",
    },
    hook: {
      id: "Menara Baby Mo roboh untuk kelima kalinya. Abi menahan diri untuk tidak membantunya.",
      en: "Baby Mo's tower fell for the fifth time. Abi held back from helping him.",
    },
    body: {
      id: `Baby Mo menyusun balok. Roboh. Susun lagi. Roboh lagi. Sampai lima kali. Tangan Abi gatal mau membantu menyusunkan yang rapi — tapi Abi tahan.

Karena kalau Abi yang menyusun, yang dia pelajari cuma "kalau susah, panggil Abi." Kalau dia yang berhasil sendiri di percobaan keenam, yang dia pelajari "aku bisa kalau coba lagi." Dua pelajaran yang sangat berbeda dari satu menara balok.

Percobaan keenam berhasil. Tiga balok berdiri. Baby Mo tepuk tangan sendiri, lalu menoleh ke Abi minta tepuk tangan juga. Abi bertepuk paling kencang.

> *Allah mencintai hamba yang apabila mengerjakan sesuatu, ia menyempurnakannya.*

Membiarkan anak gagal dengan aman adalah salah satu bentuk sayang yang paling sulit. Tapi di situlah ketangguhan lahir — bukan di menara yang Abi susunkan.`,
      en: `Baby Mo stacked blocks. They fell. Stacked again. Fell again. Five times. Abi's hands itched to build him a neat one — but I held back.

Because if Abi builds it, all he learns is "when it's hard, call Abi." If he succeeds on his own on the sixth try, he learns "I can, if I try again." Two very different lessons from one block tower.

The sixth try held. Three blocks standing. Baby Mo clapped for himself, then turned to Abi for applause too. Abi clapped the loudest.

> *Allah loves that when one of you does a task, he does it well.*

Letting a child fail safely is one of the hardest forms of love. But that's where resilience is born — not in the tower Abi builds for him.`,
    },
    anchor: { type: "parenting", slug: "adab-sehari-hari" },
    takeaway: {
      id: "Membiarkan anak gagal dengan aman adalah sayang yang paling sulit. Kalau kita yang menyelesaikan, dia belajar 'panggil bantuan.' Kalau dia berhasil sendiri, dia belajar 'aku bisa.'",
      en: "Letting a child fail safely is the hardest love. If we finish it, he learns 'call for help.' If he succeeds himself, he learns 'I can.'",
    },
    tags: ["ketangguhan", "coba-lagi", "Baby Mo"],
    readingTimeMin: 2,
  },

  {
    slug: "ais-pengaduk-adonan",
    child: "ais",
    pov: "umi",
    pose: "baby-mo-yes.png",
    published: "2026-05-03",
    title: {
      id: "Baby Ais si pengaduk adonan",
      en: "Baby Ais, the batter-stirrer",
    },
    hook: {
      id: "Umi butuh dapur cepat selesai. Tapi membiarkan Baby Ais 'membantu' ternyata lebih berharga.",
      en: "Umi needed the kitchen done fast. But letting Baby Ais 'help' turned out worth more.",
    },
    body: {
      id: `Umi lagi buru-buru bikin adonan. Baby Ais menarik-narik celemek Umi, mau ikut. Cara cepat: bilang "nanti ya, Umi sibuk." Tapi Umi berhenti sebentar dan berpikir.

Umi kasih dia mangkuk kecil dan sendok kayu. "Ini tugas Ais: aduk yang ini." Adonannya berantakan, tepung ke mana-mana, dan dapur jadi dua kali lebih lama beres. Tapi wajah Baby Ais — merasa berguna — itu tidak ada harganya.

Anak yang dibiarkan membantu tumbuh merasa "aku bagian dari keluarga ini, aku punya peran." Anak yang selalu disuruh minggir karena "lebih cepat sendiri" tumbuh merasa jadi penonton. Berantakan hari ini adalah investasi rasa berguna besok.

> *Sebaik-baik kalian adalah yang paling bermanfaat bagi orang lain.*

Kue itu sedikit bantat. Tapi Baby Ais makan dengan bangga karena "Ais yang bikin." Dan jujur, itu kue terenak yang Umi makan minggu ini.`,
      en: `Umi was rushing to make batter. Baby Ais tugged at my apron, wanting in. The fast way: "later, Umi's busy." But I paused and thought.

I gave her a little bowl and a wooden spoon. "This is Ais's job: stir this one." The batter was a mess, flour everywhere, and the kitchen took twice as long. But Baby Ais's face — feeling useful — was priceless.

A child allowed to help grows up feeling "I'm part of this family, I have a role." A child always waved aside because "it's faster alone" grows up feeling like a spectator. Today's mess is an investment in tomorrow's sense of worth.

> *The best of people are those most beneficial to others.*

The cake came out a little dense. But Baby Ais ate it proudly because "Ais made it." And honestly, it was the best cake Umi ate all week.`,
    },
    anchor: { type: "parenting", slug: "adab-sehari-hari" },
    takeaway: {
      id: "Anak yang dibiarkan membantu tumbuh merasa punya peran; yang selalu disuruh minggir tumbuh jadi penonton. Berantakan hari ini adalah investasi rasa berguna besok.",
      en: "A child allowed to help grows up feeling they have a role; one always waved aside becomes a spectator. Today's mess is an investment in tomorrow's worth.",
    },
    tags: ["akhlak", "membantu", "Baby Ais"],
    readingTimeMin: 2,
  },

  // ───────────────────────────── WONDER / FAITH ─────────────────────────────
  {
    slug: "hujan-pertama-yang-mereka-ingat",
    child: "both",
    pov: "abi",
    pose: "baby-mo-wow.png",
    published: "2026-05-01",
    title: {
      id: "Hujan pertama yang mereka pandangi",
      en: "The first rain they really watched",
    },
    hook: {
      id: "Hujan turun deras. Alih-alih menutup jendela, Abi mengajak si kembar memandanginya dan berdoa.",
      en: "The rain came down hard. Instead of shutting the window, Abi had the twins watch it and pray.",
    },
    body: {
      id: `Hujan turun deras sore tadi. Refleks Abi mau tutup jendela dan lanjut kerja. Tapi Baby Mo dan Baby Ais sudah menempel di kaca, takjub. Jadi Abi ikut duduk di antara mereka.

Abi tunjuk titik-titik air dan bilang: "Itu rezeki dari Allah, sayang. Airnya bikin pohon tumbuh, bikin kita bisa minum." Lalu kami ucap doa hujan pelan-pelan. Mereka belum paham kata-katanya, tapi paham bahwa hujan itu sesuatu yang disyukuri, bukan diganggu.

Anak belajar takjub dari kita. Kalau hujan kita sambut dengan keluhan "yah, hujan", mereka belajar mengeluh. Kalau kita sambut dengan "masya Allah, lihat", mereka belajar melihat tanda-tanda Allah di hal biasa.

> *Ya Allah, jadikanlah hujan ini hujan yang membawa manfaat.*

Sepuluh menit kami cuma memandangi hujan. Tidak produktif sama sekali. Tapi mungkin itu sepuluh menit terbaik hari itu.`,
      en: `The rain came down hard this afternoon. Abi's reflex was to shut the window and get back to work. But Baby Mo and Baby Ais were already pressed to the glass, amazed. So I sat down between them.

I pointed at the droplets and said: "That's a gift from Allah, my loves. The water makes the trees grow, lets us drink." Then we said the rain du'a slowly. They didn't understand the words, but they understood rain is something to be grateful for, not annoyed by.

Children learn wonder from us. If we greet rain with "ugh, rain," they learn to complain. If we greet it with "masha'Allah, look," they learn to see Allah's signs in ordinary things.

> *O Allah, make it a beneficial rain.*

For ten minutes we just watched the rain. Not productive at all. But maybe the best ten minutes of the day.`,
    },
    anchor: { type: "doa", slug: "ketika-hujan" },
    takeaway: {
      id: "Anak belajar takjub dari kita. Hujan disambut keluhan, mereka belajar mengeluh; disambut 'masya Allah, lihat', mereka belajar melihat tanda Allah di hal biasa.",
      en: "Children learn wonder from us. Greet rain with complaint and they learn to complain; greet it with 'masha'Allah, look' and they learn to see Allah's signs in ordinary things.",
    },
    tags: ["syukur", "doa", "anak-kembar"],
    readingTimeMin: 2,
  },

  {
    slug: "satu-suap-brokoli",
    child: "mo",
    pov: "umi",
    pose: "baby-mo-ok.png",
    published: "2026-04-29",
    title: {
      id: "Satu suap brokoli",
      en: "One bite of broccoli",
    },
    hook: {
      id: "Baby Mo menutup mulut rapat untuk sayur. Umi belajar bahwa memaksa kalah oleh sabar.",
      en: "Baby Mo clamped his mouth shut at vegetables. Umi learned that forcing loses to patience.",
    },
    body: {
      id: `Brokoli di piring, mulut Baby Mo terkunci rapat. Dulu Umi akan memaksa, ujungnya dua-duanya nangis. Kali ini Umi coba cara lain: Umi makan brokoli sendiri dulu, sambil bilang "mmm, enak."

Baby Mo memperhatikan. Penasaran. Umi tidak menyuruh, cuma menawarkan satu kuntum kecil: "Mau coba satu aja?" Dia gigit ujungnya. Wajahnya ragu, tapi dia kunyah. Satu suap. Itu kemenangan.

Selera makan tidak bisa dipaksa, cuma bisa diundang. Anak yang dipaksa makan belajar membenci meja makan; anak yang ditawari dengan tenang belajar bahwa mencoba itu aman. Umi tidak butuh dia habiskan sepiring — Umi butuh dia tidak takut mencoba.

> *Makanlah dari yang baik-baik dan bersyukurlah.*

Sisa brokolinya? Tetap di piring. Tapi satu suap hari ini lebih berharga dari sepiring yang dipaksakan dengan air mata.`,
      en: `Broccoli on the plate, Baby Mo's mouth locked tight. I used to force it, and we'd both end up crying. This time Umi tried another way: I ate the broccoli myself first, saying "mmm, yummy."

Baby Mo watched. Curious. I didn't order, just offered one little floret: "Want to try just one?" He bit the tip. His face unsure, but he chewed. One bite. That was the victory.

Appetite can't be forced, only invited. A child forced to eat learns to hate the table; a child calmly offered learns that trying is safe. Umi didn't need him to finish a plate — I needed him to not be afraid to try.

> *Eat of the good things and be grateful.*

The rest of the broccoli? Still on the plate. But one bite today is worth more than a forced plate with tears.`,
    },
    anchor: { type: "parenting", slug: "susah-makan" },
    takeaway: {
      id: "Selera makan tidak bisa dipaksa, cuma diundang. Anak dipaksa makan belajar benci meja makan; ditawari tenang belajar mencoba itu aman. Satu suap kalahkan sepiring penuh air mata.",
      en: "Appetite can't be forced, only invited. A forced child learns to hate the table; a calmly offered one learns trying is safe. One bite beats a forced plate of tears.",
    },
    tags: ["makan", "sabar", "Baby Mo"],
    readingTimeMin: 2,
  },

  {
    slug: "alhamdulillah-setelah-bersin",
    child: "ais",
    pov: "abi",
    pose: "baby-mo-alright.png",
    published: "2026-04-27",
    title: {
      id: "Alhamdulillah sehabis bersin",
      en: "Alhamdulillah after a sneeze",
    },
    hook: {
      id: "Baby Ais bersin, lalu menatap Abi menunggu. Sebuah kebiasaan kecil yang manis ketahuan.",
      en: "Baby Ais sneezed, then looked at Abi, waiting. A sweet little habit gave itself away.",
    },
    body: {
      id: `Baby Ais bersin kecil. Lalu — ini yang bikin Abi tersenyum — dia menatap Abi, menunggu. Karena setiap dia atau Baby Mo bersin, Abi selalu bilang "alhamdulillah" lalu "yarhamukillah".

Dia belum bisa mengucapkannya sendiri. Tapi dia sudah hafal alurnya: bersin, lalu ada kata baik yang menyusul. Dia menunggu kata baik itu seperti menunggu bagian akhir lagu kesukaannya.

Adab-adab kecil seperti ini — alhamdulillah sehabis bersin — adalah cara halus mengajari anak bahwa setiap hal, bahkan bersin, terhubung dengan Allah. Tubuh ini titipan, dan kita berterima kasih atas cara kerjanya.

> *Jika salah seorang kalian bersin, ucapkanlah alhamdulillah.*

Abi ucapkan "alhamdulillah" untuknya, dan wajah Baby Ais langsung lega — seperti lagu yang akhirnya selesai dengan pas.`,
      en: `Baby Ais gave a small sneeze. Then — this is what made Abi smile — she looked at me, waiting. Because every time she or Baby Mo sneezes, Abi always says "alhamdulillah" then "yarhamukillah".

She can't say it herself yet. But she's memorised the rhythm: sneeze, then a good word follows. She waits for that good word like waiting for the last part of her favourite song.

Tiny adab like this — alhamdulillah after a sneeze — is a gentle way of teaching a child that everything, even a sneeze, connects to Allah. This body is a trust, and we thank Him for how it works.

> *When one of you sneezes, let him say alhamdulillah.*

Abi said "alhamdulillah" for her, and Baby Ais's face relaxed at once — like a song that finally ends just right.`,
    },
    anchor: { type: "doa", slug: "doa-bersin" },
    takeaway: {
      id: "Adab kecil seperti alhamdulillah sehabis bersin mengajari anak bahwa setiap hal — bahkan bersin — terhubung dengan Allah. Tubuh ini titipan yang disyukuri.",
      en: "Tiny adab like alhamdulillah after a sneeze teaches a child that everything — even a sneeze — connects to Allah. This body is a trust to be thankful for.",
    },
    tags: ["adab", "syukur", "Baby Ais"],
    readingTimeMin: 2,
  },

  {
    slug: "di-depan-cermin-bareng",
    child: "both",
    pov: "umi",
    pose: "baby-mo-wow.png",
    published: "2026-04-25",
    title: {
      id: "Di depan cermin, berdua",
      en: "In front of the mirror, the two of them",
    },
    hook: {
      id: "Si kembar menatap cermin dan tertawa. Umi pakai momen itu untuk doa yang indah.",
      en: "The twins stared at the mirror and laughed. Umi used the moment for a beautiful du'a.",
    },
    body: {
      id: `Baby Mo dan Baby Ais berdiri depan cermin, saling tunjuk bayangan, tertawa. Mereka belum benar-benar paham itu diri mereka sendiri. Umi duduk di belakang dan ikut masuk ke pantulan.

Umi bisikkan doa bercermin: "Ya Allah, Engkau telah memperbaiki bentukku, maka perbaikilah akhlakku." Lalu Umi bilang ke mereka: "Lihat, Allah yang bikin Mo dan Ais sebagus ini. Sekarang kita minta hati yang bagus juga."

Cermin mengajari anak melihat luar; doa ini mengajari mereka peduli pada dalam. Umi mau mereka tumbuh tahu bahwa wajah itu pemberian, tapi akhlak itu pilihan — dan yang kedua jauh lebih penting.

> *Ya Allah, sebagaimana Engkau perindah rupaku, perindahlah akhlakku.*

Mereka cuma ketawa lihat bayangan. Tapi Umi menanam satu kalimat: cantik dan ganteng itu dari Allah; baik hati itu yang kita usahakan.`,
      en: `Baby Mo and Baby Ais stood before the mirror, pointing at their reflections, laughing. They don't quite grasp it's themselves yet. Umi sat behind them and joined the reflection.

I whispered the mirror du'a: "O Allah, You have made my form good, so make my character good too." Then I told them: "Look, Allah made Mo and Ais this lovely. Now we ask for lovely hearts too."

The mirror teaches a child to look outward; this du'a teaches them to care about inward. Umi wants them to grow up knowing a face is a gift, but character is a choice — and the second matters far more.

> *O Allah, as You have beautified my form, beautify my character.*

They just laughed at their reflections. But Umi planted one sentence: pretty and handsome are from Allah; kindness is what we work for.`,
    },
    anchor: { type: "doa", slug: "bercermin" },
    takeaway: {
      id: "Cermin mengajari melihat luar; doa bercermin mengajari peduli dalam. Wajah itu pemberian, akhlak itu pilihan — dan yang kedua jauh lebih penting.",
      en: "The mirror teaches looking outward; the mirror du'a teaches caring inward. A face is a gift, character is a choice — and the second matters far more.",
    },
    tags: ["akhlak", "doa", "anak-kembar"],
    readingTimeMin: 2,
  },

  {
    slug: "ke-masjid-untuk-pertama-kali",
    child: "mo",
    pov: "abi",
    pose: "baby-mo-yes.png",
    published: "2026-04-23",
    title: {
      id: "Ke masjid untuk pertama kali",
      en: "To the mosque for the first time",
    },
    hook: {
      id: "Abi membawa Baby Mo ke masjid. Bukan untuk khusyuk — untuk jatuh cinta pada tempatnya.",
      en: "Abi took Baby Mo to the mosque. Not to be solemn — to fall in love with the place.",
    },
    body: {
      id: `Abi bawa Baby Mo ke masjid pertama kalinya. Abi tidak berharap dia diam dan khusyuk — itu mustahil untuk anak dua tahun. Abi cuma mau dia mengenal: ini rumah Allah, dan kamu disambut di sini.

Kami ucap doa masuk masjid di pintu. Di dalam, Baby Mo memandang lampu, karpet, langit-langit tinggi, takjub. Beberapa kali dia bersuara, dan Abi cuma tersenyum minta maaf ke jamaah sekitar. Tidak apa. Dia harus merasa diterima dulu, sebelum diminta tenang.

Anak yang masa kecilnya dimarahi di masjid akan tumbuh menjauh dari masjid. Anak yang disambut hangat akan tumbuh merasa masjid itu rumah. Abi memilih menanam cinta dulu; adab akan menyusul seiring usia.

> *Ya Allah, bukakanlah untukku pintu-pintu rahmat-Mu.*

Di perjalanan pulang Baby Mo masih menunjuk-nunjuk ke arah masjid. Abi berdoa dalam hati: semoga kamu selalu rindu pulang ke sana, Nak.`,
      en: `Abi took Baby Mo to the mosque for the first time. I didn't expect him to sit still and solemn — that's impossible for a two-year-old. I just wanted him to know: this is Allah's house, and you are welcome here.

We said the entering-the-mosque du'a at the door. Inside, Baby Mo gazed at the lights, the carpet, the high ceiling, amazed. A few times he made noise, and Abi just smiled apologetically at the worshippers nearby. It's okay. He has to feel welcome first, before being asked to be quiet.

A child scolded at the mosque in childhood grows up keeping his distance from it. A child welcomed warmly grows up feeling the mosque is home. Abi chose to plant love first; adab will follow with age.

> *O Allah, open for me the doors of Your mercy.*

On the way home Baby Mo kept pointing back toward the mosque. Abi prayed quietly: may you always long to return there, son.`,
    },
    anchor: { type: "doa", slug: "masuk-masjid" },
    takeaway: {
      id: "Anak yang dimarahi di masjid tumbuh menjauh; yang disambut hangat tumbuh merasa masjid itu rumah. Tanam cinta dulu — adab menyusul seiring usia.",
      en: "A child scolded at the mosque grows distant from it; one welcomed warmly grows up feeling it's home. Plant love first — adab follows with age.",
    },
    tags: ["masjid", "doa", "Baby Mo"],
    readingTimeMin: 2,
  },

  {
    slug: "mo-bertanya-allah-di-mana",
    child: "mo",
    pov: "umi",
    pose: "baby-mo-idea.png",
    published: "2026-04-21",
    title: {
      id: "Baby Mo menunjuk langit",
      en: "Baby Mo points at the sky",
    },
    hook: {
      id: "Belum bisa bertanya dengan kata, Baby Mo menunjuk langit waktu Umi sebut Allah. Umi terdiam.",
      en: "Not yet able to ask in words, Baby Mo pointed at the sky when Umi said Allah. Umi paused.",
    },
    body: {
      id: `Umi sedang bilang "Allah sayang Mo" waktu menyuapinya. Tiba-tiba Baby Mo menunjuk ke atas, ke langit-langit, lalu menatap Umi seperti bertanya: di sana?

Umi terdiam sebentar. Pertanyaan besar dari jari yang sangat kecil. Umi tidak mau menjawab dengan rumit. Umi cuma bilang: "Allah ada. Allah yang bikin Mo, Ais, langit, semuanya. Allah lihat dan sayang kita." Sederhana, jujur, tanpa berlebihan.

Anak menyerap konsep Allah jauh lebih awal dari yang kita kira. Tugas kita bukan menjelaskan sempurna — itu mustahil — tapi menanam rasa bahwa Allah itu dekat, baik, dan menyayangi. Rasa aman pada Allah dulu; teologi belakangan.

> *Dan Dia bersama kalian di mana pun kalian berada.*

Baby Mo cuma mengangguk seolah puas, lalu lanjut makan. Tapi Umi tahu, satu jari yang menunjuk langit tadi adalah awal dari percakapan seumur hidup.`,
      en: `Umi was saying "Allah loves Mo" while feeding him. Suddenly Baby Mo pointed up, at the ceiling, then looked at Umi as if asking: up there?

Umi paused. A big question from a very small finger. I didn't want to answer with complexity. I just said: "Allah is. Allah made Mo, Ais, the sky, everything. Allah sees us and loves us." Simple, honest, no overreach.

Children absorb the idea of Allah far earlier than we think. Our job isn't to explain it perfectly — that's impossible — but to plant the feeling that Allah is near, good, and loving. Security in Allah first; theology later.

> *And He is with you wherever you are.*

Baby Mo just nodded as if satisfied, then went back to eating. But Umi knows that one finger pointing at the sky was the start of a lifelong conversation.`,
    },
    anchor: { type: "parenting", slug: "anak-bertanya-allah-di-mana" },
    takeaway: {
      id: "Tugas kita bukan menjelaskan Allah dengan sempurna — itu mustahil — tapi menanam rasa bahwa Allah dekat, baik, dan menyayangi. Rasa aman dulu; teologi belakangan.",
      en: "Our job isn't to explain Allah perfectly — that's impossible — but to plant the feeling that Allah is near, good, and loving. Security first; theology later.",
    },
    tags: ["iman", "pertanyaan-anak", "Baby Mo"],
    readingTimeMin: 2,
  },

  {
    slug: "ais-bagi-bekal-ke-teman",
    child: "ais",
    pov: "abi",
    pose: "baby-mo-thank-you.png",
    published: "2026-04-19",
    title: {
      id: "Baby Ais membagi bekalnya",
      en: "Baby Ais shares her snack",
    },
    hook: {
      id: "Tanpa disuruh, Baby Ais memberikan separuh biskuitnya ke anak tetangga. Abi cuma menonton.",
      en: "Unprompted, Baby Ais gave half her biscuit to the neighbour's child. Abi just watched.",
    },
    body: {
      id: `Di teras, anak tetangga sebaya datang main. Baby Ais lagi pegang biskuit. Tanpa Abi suruh, dia patahkan separuh dan kasih ke temannya. Abi cuma menonton dari jauh, tertegun.

Abi tidak pernah merancang pelajaran "berbagi dengan tetangga." Tapi anak-anak menyerap dari meja makan kami — kami sering kirim makanan ke tetangga, dan mereka melihatnya. Yang dilihat berulang menjadi yang dilakukan otomatis.

Memberi ke tetangga, bahkan separuh biskuit, adalah benih dari hadis tentang menjaga hak tetangga. Anak yang tumbuh terbiasa berbagi dengan orang dekat akan jadi dewasa yang murah hati ke dunia yang lebih luas.

> *Jibril terus berpesan kepadaku tentang tetangga, sampai aku mengira ia akan mewariskannya.*

Dua biskuit, dua anak, satu teras kecil. Tapi Abi melihat akhlak besar sedang berlatih dalam tubuh yang sangat kecil.`,
      en: `On the porch, a neighbour's child the same age came to play. Baby Ais was holding a biscuit. Without Abi asking, she broke off half and gave it to her friend. Abi just watched from afar, stunned.

I never designed a lesson on "sharing with neighbours." But the kids absorb it from our table — we often send food to the neighbours, and they see it. What is seen repeatedly becomes what is done automatically.

Giving to a neighbour, even half a biscuit, is the seed of the hadith about a neighbour's rights. A child who grows up used to sharing with those nearby becomes an adult generous to the wider world.

> *Jibril kept advising me about the neighbour, until I thought he would make him an heir.*

Two biscuits, two children, one small porch. But Abi watched a great character rehearsing in a very small body.`,
    },
    anchor: { type: "hadith", slug: "tetangga-keluarga-luas" },
    takeaway: {
      id: "Yang anak lihat berulang menjadi yang dia lakukan otomatis. Kebiasaan berbagi dengan tetangga di depan anak menanam kemurahan hati yang akan tumbuh ke dunia yang lebih luas.",
      en: "What a child sees repeatedly becomes automatic. Sharing with neighbours in front of a child plants a generosity that grows toward the wider world.",
    },
    tags: ["akhlak", "tetangga", "Baby Ais"],
    readingTimeMin: 2,
  },

  {
    slug: "mo-jaga-ais-yang-demam",
    child: "both",
    pov: "umi",
    pose: "baby-mo-pose-07.png",
    published: "2026-04-17",
    title: {
      id: "Baby Mo menunggui Baby Ais demam",
      en: "Baby Mo keeps watch over a feverish Baby Ais",
    },
    hook: {
      id: "Baby Ais demam dan rewel. Yang tak terduga: Baby Mo menolak meninggalkan sisinya.",
      en: "Baby Ais ran a fever and was fussy. The surprise: Baby Mo refused to leave her side.",
    },
    body: {
      id: `Baby Ais demam semalaman, rewel, susah tidur. Yang Umi tidak sangka: Baby Mo tidak mau jauh dari saudarinya. Dia bawa bonekanya, letakkan di samping Baby Ais, lalu duduk menunggui.

Mereka kembar; ikatannya beda. Tapi melihat Baby Mo — yang biasanya rebutan mainan dengan Ais — tiba-tiba selembut itu, Umi jadi ingat: di balik semua rebutan, ada kasih yang dalam yang belum mereka tahu namanya.

Umi usap kening Baby Ais sambil baca doa untuk orang sakit. Baby Mo memperhatikan, lalu ikut-ikutan mengusap dengan tangannya. Empati itu menular, bahkan dari orang tua ke anak ke saudara dalam satu malam.

> *Tidak ada penyakit yang Allah turunkan kecuali Dia turunkan pula obatnya.*

Pagi-pagi demamnya turun. Baby Mo masih tidur miring menghadap saudarinya. Umi memandang keduanya dan diam-diam bersyukur: mereka punya satu sama lain.`,
      en: `Baby Ais had a fever all night, fussy, unable to sleep. What Umi didn't expect: Baby Mo wouldn't stay away from his sister. He brought his teddy, placed it beside Baby Ais, then sat keeping watch.

They're twins; the bond is different. But seeing Baby Mo — who usually fights with Ais over toys — suddenly that gentle, reminded Umi: beneath all the squabbling is a deep love they don't yet have a name for.

Umi stroked Baby Ais's forehead while reading the du'a for the sick. Baby Mo watched, then copied, stroking with his own hand. Empathy is contagious, even from parent to child to sibling in one night.

> *Allah has not sent down a disease without also sending down its cure.*

By morning her fever broke. Baby Mo was still asleep on his side, facing his sister. Umi looked at them both and quietly gave thanks: they have each other.`,
    },
    anchor: { type: "parenting", slug: "anak-sakit" },
    takeaway: {
      id: "Di balik semua rebutan saudara ada kasih yang dalam. Empati menular — dari orang tua yang mengusap kening dan berdoa, ke anak yang menirukannya malam itu juga.",
      en: "Beneath all the sibling squabbling is a deep love. Empathy is contagious — from a parent who strokes a forehead and prays, to a child who copies it that very night.",
    },
    tags: ["kasih-sayang", "saudara", "anak-kembar"],
    readingTimeMin: 2,
  },

  {
    slug: "doa-pagi-sebelum-ramai",
    child: "both",
    pov: "abi",
    pose: "baby-mo-yeyy.png",
    published: "2026-04-15",
    title: {
      id: "Doa pagi sebelum rumah ramai",
      en: "The morning du'a before the house wakes up",
    },
    hook: {
      id: "Abi mulai kebiasaan kecil: doa pagi bareng si kembar sebelum hari dimulai.",
      en: "Abi began a small habit: the morning du'a with the twins before the day begins.",
    },
    body: {
      id: `Pagi-pagi, sebelum rumah ramai, Abi mulai kebiasaan baru. Begitu Baby Mo dan Baby Ais bangun, sebelum gawai, sebelum apa pun, kami duduk sebentar dan ucap "alhamdulillah" karena bangun lagi hari ini.

Mereka masih setengah ngantuk, rambut berantakan. Tapi Abi percaya: hal pertama yang menyentuh hati anak di pagi hari menentukan warna harinya. Abi mau yang pertama mereka dengar adalah syukur, bukan terburu-buru.

Kebiasaan pagi adalah jangkar yang tak terlihat. Anak yang harinya selalu dibuka dengan menyebut Allah tumbuh merasa hari itu milik Allah. Bukan ritual berat — cuma satu kalimat, setiap pagi, sampai jadi denyut.

> *Kami berpagi hari dan kerajaan ini milik Allah.*

Setelah itu mereka langsung lari main, lupa segalanya. Tidak apa. Yang menanam bukan ingatan mereka — tapi pengulangan kami.`,
      en: `Early morning, before the house gets loud, Abi started a new habit. As soon as Baby Mo and Baby Ais wake, before screens, before anything, we sit a moment and say "alhamdulillah" for waking again today.

They're still half-asleep, hair a mess. But Abi believes: the first thing to touch a child's heart in the morning sets the colour of the day. I want the first thing they hear to be gratitude, not hurry.

The morning habit is an invisible anchor. A child whose day always opens by mentioning Allah grows up feeling the day belongs to Allah. Not a heavy ritual — just one sentence, every morning, until it becomes a pulse.

> *We have reached the morning and the dominion belongs to Allah.*

After that they run off to play, forgetting everything. That's fine. What plants it isn't their memory — it's our repetition.`,
    },
    anchor: { type: "doa", slug: "doa-pagi" },
    takeaway: {
      id: "Hal pertama yang menyentuh hati anak di pagi hari mewarnai harinya. Buka hari dengan syukur, bukan terburu-buru. Yang menanam bukan ingatan anak — tapi pengulangan kita.",
      en: "The first thing to touch a child's heart in the morning colours the day. Open the day with gratitude, not hurry. What plants it isn't the child's memory — it's our repetition.",
    },
    tags: ["rutinitas", "doa", "anak-kembar"],
    readingTimeMin: 2,
  },

  {
    slug: "tangan-lembut-bukan-pukul",
    child: "mo",
    pov: "umi",
    pose: "baby-mo-alright.png",
    published: "2026-04-13",
    title: {
      id: "Tangan untuk menyayang, bukan memukul",
      en: "Hands are for loving, not hitting",
    },
    hook: {
      id: "Baby Mo memukul saat kesal. Umi mengajari satu kalimat yang dia ulang setiap kali.",
      en: "Baby Mo hit when frustrated. Umi taught one sentence she repeats every time.",
    },
    body: {
      id: `Waktu kesal, Baby Mo memukul — Umi, lantai, kadang Baby Ais. Umi tidak balas memukul (itu cuma mengajari bahwa yang besar boleh memukul yang kecil). Umi pegang tangannya lembut dan bilang satu kalimat yang sama setiap kali: "Tangan untuk menyayang, bukan untuk memukul."

Lalu Umi tunjukkan versi benarnya: "Kalau Mo kesal, bilang atau usap, begini." Umi peragakan mengelus. Anak yang dilarang tanpa diberi gantinya akan bingung; anak yang ditunjukkan jalan keluarnya belajar.

Butuh puluhan kali. Tapi kemarin, saat kesal, Baby Mo mengangkat tangan… lalu menurunkannya dan malah memeluk. Umi hampir menangis. Kelembutan ternyata bisa diajarkan, satu kalimat tenang setiap kali.

> *Sesungguhnya Allah Maha Lembut dan mencintai kelembutan dalam segala hal.*

Tangan kecil itu masih belajar. Tapi sekarang dia tahu tangannya punya tugas yang lebih baik daripada memukul.`,
      en: `When frustrated, Baby Mo hit — Umi, the floor, sometimes Baby Ais. I didn't hit back (that only teaches that the big may hit the small). I held his hand gently and said the same sentence every time: "Hands are for loving, not for hitting."

Then I showed the right version: "When Mo is upset, say it or stroke, like this." I demonstrated patting. A child forbidden without an alternative gets confused; a child shown the way out learns.

It took dozens of times. But yesterday, upset, Baby Mo raised his hand… then lowered it and hugged instead. Umi nearly cried. Gentleness, it turns out, can be taught, one calm sentence at a time.

> *Indeed Allah is Gentle and loves gentleness in all things.*

That little hand is still learning. But now he knows his hands have a better job than hitting.`,
    },
    anchor: { type: "hadith", slug: "kelembutan-keindahan" },
    takeaway: {
      id: "Jangan cuma melarang — tunjukkan gantinya. 'Tangan untuk menyayang, bukan memukul,' lalu peragakan jalan keluarnya. Kelembutan bisa diajarkan, satu kalimat tenang setiap kali.",
      en: "Don't just forbid — show the alternative. 'Hands are for loving, not hitting,' then demonstrate the way out. Gentleness can be taught, one calm sentence at a time.",
    },
    tags: ["akhlak", "kelembutan", "Baby Mo"],
    readingTimeMin: 2,
  },

  {
    slug: "tiga-syukur-sebelum-tidur",
    child: "both",
    pov: "abi",
    pose: "baby-mo-pose-09.png",
    published: "2026-04-11",
    title: {
      id: "Tiga syukur sebelum tidur",
      en: "Three thank-yous before sleep",
    },
    hook: {
      id: "Sebuah ritual kecil sebelum tidur: menyebut tiga hal baik hari ini. Si kembar mulai ikut.",
      en: "A small bedtime ritual: naming three good things from today. The twins began joining in.",
    },
    body: {
      id: `Tiap malam sebelum doa tidur, Abi mulai menyebut tiga hal yang Abi syukuri hari ini, keras-keras. "Alhamdulillah hari ini Abi sehat. Alhamdulillah ketemu Mo dan Ais. Alhamdulillah makan enak."

Awalnya mereka cuma dengar. Lalu Baby Mo mulai ikut menyebut: "mam!" (makan) — syukur versi dia. Baby Ais menunjuk bonekanya. Mereka belajar bahwa hari yang biasa pun penuh dengan hal untuk disyukuri, kalau kita mau menghitungnya.

Syukur bukan perasaan yang datang sendiri; ia kebiasaan yang dilatih. Anak yang diajak menghitung nikmat tiap malam tumbuh jadi orang yang melihat gelas setengah penuh. Itu hadiah seumur hidup, dibungkus dalam ritual dua menit.

> *Jika kalian bersyukur, niscaya akan Aku tambah nikmat untuk kalian.*

Lalu kami baca doa tidur, dan mereka terlelap. Hari ditutup bukan dengan kurang, tapi dengan cukup. Itu cara Abi mau mereka memandang dunia.`,
      en: `Every night before the sleep du'a, Abi started naming three things I'm grateful for today, out loud. "Alhamdulillah I was healthy today. Alhamdulillah I got to be with Mo and Ais. Alhamdulillah for good food."

At first they just listened. Then Baby Mo started joining in: "mam!" (food) — his version of gratitude. Baby Ais pointed at her teddy. They learn that even an ordinary day is full of things to be thankful for, if we're willing to count them.

Gratitude isn't a feeling that arrives on its own; it's a trained habit. A child invited to count blessings each night grows into someone who sees the glass half full. That's a lifelong gift, wrapped in a two-minute ritual.

> *If you are grateful, I will surely increase you.*

Then we read the sleep du'a, and they drifted off. The day closed not with lack, but with enough. That's how Abi wants them to see the world.`,
    },
    anchor: { type: "parenting", slug: "bersyukur" },
    takeaway: {
      id: "Syukur bukan perasaan yang datang sendiri — ia kebiasaan yang dilatih. Hitung tiga nikmat tiap malam, dan anak tumbuh melihat gelas setengah penuh seumur hidup.",
      en: "Gratitude isn't a feeling that just arrives — it's a trained habit. Count three blessings each night, and a child grows up seeing the glass half full for life.",
    },
    tags: ["syukur", "malam", "anak-kembar"],
    readingTimeMin: 2,
  },

  {
    slug: "berani-di-ruang-dokter",
    child: "mo",
    pov: "umi",
    pose: "baby-mo-alright.png",
    published: "2026-04-09",
    title: {
      id: "Berani di ruang dokter",
      en: "Brave in the doctor's room",
    },
    hook: {
      id: "Imunisasi, jarum, dan tangis. Umi belajar bahwa berani bukan berarti tidak takut.",
      en: "A vaccination, a needle, and tears. Umi learned that brave doesn't mean unafraid.",
    },
    body: {
      id: `Hari imunisasi. Baby Mo lihat jarum, langsung menempel ke Umi. Umi tidak bilang "jangan takut" — karena dia memang pantas takut, dan menyangkalnya cuma bikin dia merasa sendirian.

Umi bilang: "Sakit sebentar, terus selesai. Umi pegang erat-erat, ya." Umi peluk, baca doa minta perlindungan pelan di telinganya. Dia tetap nangis waktu disuntik. Tapi nangis sambil dipeluk berbeda dengan nangis sambil ditinggal.

Berani bukan berarti tidak takut; berani berarti takut tapi tetap dilewati dengan ada yang menemani. Umi mau Baby Mo tumbuh tahu bahwa dia tidak harus pura-pura kuat — dia cukup tahu bahwa Umi selalu memeluk saat hal sulit datang.

> *Ya Allah, Tuhan manusia, hilangkanlah penyakit dan sembuhkanlah.*

Lima menit kemudian dia sudah ketawa lagi sambil pegang stiker. Tapi yang Umi harap dia ingat seumur hidup: saat takut, ada tangan yang menggenggam.`,
      en: `Vaccination day. Baby Mo saw the needle and clung to Umi. I didn't say "don't be scared" — because he had every right to be, and denying it only makes him feel alone.

I said: "It hurts for a moment, then it's done. Umi will hold you tight." I hugged him, whispered the du'a for protection softly in his ear. He still cried at the jab. But crying while held is different from crying while left alone.

Brave doesn't mean unafraid; brave means afraid but getting through it with someone alongside. Umi wants Baby Mo to grow up knowing he doesn't have to fake being strong — he just needs to know Umi always holds him when the hard thing comes.

> *O Allah, Lord of mankind, remove the harm and heal.*

Five minutes later he was laughing again, clutching a sticker. But what Umi hopes he remembers for life: when scared, there's a hand that holds.`,
    },
    anchor: { type: "doa", slug: "ketika-sakit" },
    takeaway: {
      id: "Jangan bilang 'jangan takut' — akui rasa takutnya dan temani. Berani bukan berarti tidak takut; berani berarti takut tapi tetap dilewati dengan ada yang memeluk.",
      en: "Don't say 'don't be scared' — acknowledge the fear and stay close. Brave doesn't mean unafraid; it means afraid but getting through it, held.",
    },
    tags: ["berani", "emosi", "Baby Mo"],
    readingTimeMin: 2,
  },

  {
    slug: "silaturahmi-ke-rumah-nenek",
    child: "both",
    pov: "abi",
    pose: "baby-mo-run.png",
    published: "2026-04-07",
    title: {
      id: "Silaturahmi ke rumah Nenek",
      en: "Visiting Grandma's house",
    },
    hook: {
      id: "Si kembar berlari ke pelukan nenek. Abi melihat lebih dari sekadar kunjungan akhir pekan.",
      en: "The twins ran into Grandma's arms. Abi saw more than a weekend visit.",
    },
    body: {
      id: `Akhir pekan kami ke rumah nenek. Begitu pintu dibuka, Baby Mo dan Baby Ais langsung berlari ke pelukan beliau, ketawa. Wajah nenek berseri seperti matahari. Abi berdiri di belakang, menonton, dan hatinya hangat.

Buat Abi, ini bukan sekadar jalan-jalan. Ini mengajarkan anak bahwa keluarga itu lingkaran yang lebih besar dari ayah-ibu. Bahwa ada orang-orang tua yang harus dimuliakan, dikunjungi, dirindukan. Itu pelajaran silaturahmi yang tidak bisa diajarkan lewat kata, cuma lewat mobil yang berangkat tiap pekan.

Anak yang tumbuh dekat dengan kakek-neneknya tumbuh dengan akar. Mereka tahu dari mana mereka berasal, dan tahu bahwa cinta keluarga itu mengalir ke atas dan ke bawah, bukan cuma ke samping.

> *Siapa yang ingin dilapangkan rezekinya, sambunglah silaturahmi.*

Di perjalanan pulang keduanya tidur kelelahan, masih memegang oleh-oleh dari nenek. Abi berdoa: semoga lingkaran ini tidak pernah putus di tangan mereka.`,
      en: `On the weekend we went to Grandma's house. The moment the door opened, Baby Mo and Baby Ais ran straight into her arms, laughing. Grandma's face lit up like the sun. Abi stood behind, watching, his heart warm.

For Abi, this isn't just an outing. It teaches the children that family is a circle bigger than mum and dad. That there are elders to be honoured, visited, missed. That's a lesson in keeping family ties you can't teach with words, only with a car that sets off every week.

A child who grows up close to grandparents grows up with roots. They know where they come from, and know that family love flows upward and downward, not just sideways.

> *Whoever wishes for his provision to be expanded, let him keep the ties of kinship.*

On the way home both slept, exhausted, still clutching treats from Grandma. Abi prayed: may this circle never break in their hands.`,
    },
    anchor: { type: "hadith", slug: "silaturahmi-rezeki" },
    takeaway: {
      id: "Silaturahmi tidak bisa diajarkan lewat kata, cuma lewat mobil yang berangkat tiap pekan. Anak yang dekat dengan kakek-neneknya tumbuh dengan akar — tahu dari mana ia berasal.",
      en: "Keeping family ties can't be taught with words, only with a car that sets off every week. A child close to grandparents grows up with roots — knowing where they come from.",
    },
    tags: ["keluarga", "silaturahmi", "anak-kembar"],
    readingTimeMin: 2,
  },

  {
    slug: "kata-tolong-yang-ajaib",
    child: "ais",
    pov: "umi",
    pose: "baby-mo-ok.png",
    published: "2026-04-05",
    title: {
      id: "Kata 'tolong' yang ajaib",
      en: "The magic word: please",
    },
    hook: {
      id: "Baby Ais menunjuk dan merengek minta sesuatu. Umi mengajari satu kata yang mengubah segalanya.",
      en: "Baby Ais pointed and whined for something. Umi taught one word that changed everything.",
    },
    body: {
      id: `Baby Ais mau biskuit di atas meja. Caranya: menunjuk sambil merengek "eh, eh!" makin lama makin kencang. Umi tidak langsung kasih — bukan karena pelit, tapi karena merengek tidak boleh jadi cara dapat sesuatu.

Umi jongkok dan ajari: "Bilang 'tolong', sayang." Umi peragakan suara lembut. Baby Ais coba: "to-yong." Begitu kata itu keluar, Umi langsung kasih biskuitnya sambil senyum lebar. Dia belajar: kata baik membuka lebih banyak pintu daripada tangisan.

Adab meminta dengan sopan adalah bekal sosial paling awal. Anak yang belajar "tolong" dan "terima kasih" sejak kecil tumbuh jadi orang yang mudah disayang. Bukan karena manipulatif — tapi karena hormat itu menular.

> *Barang siapa tidak menyayangi manusia, tidak akan disayangi Allah.*

Sekarang "to-yong" jadi kata kesukaannya, dipakai untuk segala hal. Dan Umi dengan senang hati mengabulkan — karena yang dia minta dengan cara baik, pantas dibalas dengan baik.`,
      en: `Baby Ais wanted a biscuit on the table. Her method: pointing and whining "eh, eh!" louder and louder. Umi didn't hand it over right away — not out of stinginess, but because whining mustn't become the way to get things.

I crouched and taught: "Say 'please', love." I demonstrated a soft voice. Baby Ais tried: "pwease." The moment that word came out, Umi handed her the biscuit with a big smile. She learned: a kind word opens more doors than crying.

The manner of asking politely is the earliest social provision. A child who learns "please" and "thank you" young grows into someone easy to love. Not because it's manipulative — but because respect is contagious.

> *Whoever does not show mercy to people, Allah will not show mercy to him.*

Now "pwease" is her favourite word, used for everything. And Umi happily grants it — because what she asks for kindly deserves a kind reply.`,
    },
    anchor: { type: "parenting", slug: "adab-sehari-hari" },
    takeaway: {
      id: "Jangan biarkan merengek jadi cara anak dapat sesuatu. Ajari 'tolong' dan 'terima kasih' sejak dini — kata baik membuka lebih banyak pintu daripada tangisan.",
      en: "Don't let whining become how a child gets things. Teach 'please' and 'thank you' early — a kind word opens more doors than crying.",
    },
    tags: ["adab", "sopan-santun", "Baby Ais"],
    readingTimeMin: 2,
  },


  // ═══════════════════════════════════════════════════════════════════
  //  CERITA ANAK — longer narrative drafts, written as inspiration for the
  //  Baby Mo picture-book series. Third-person, warm, with a clear akhlak
  //  lesson and a gentle Islamic anchor. (kind: "story")
  // ═══════════════════════════════════════════════════════════════════
  {
    slug: "bismillah-dulu",
    kind: "story",
    child: "mo",
    pose: "baby-mo-idea.png",
    published: "2026-06-03",
    title: { id: "Bismillah Dulu", en: "Bismillah First" },
    hook: {
      id: "Baby Mo selalu terburu-buru. Sampai ia menemukan satu kata kecil yang membuat semuanya terasa lebih berkah.",
      en: "Baby Mo is always in a hurry. Until he discovers one little word that makes everything feel more blessed.",
    },
    body: {
      id: `Pagi itu matahari baru saja mengintip di balik tirai. Baby Mo melompat dari tempat tidur, berlari ke meja makan, dan langsung menyambar roti selai kesukaannya.

"Eit, tunggu," kata Umi lembut sambil tersenyum. "Sudah baca apa belum, Sayang?"

Baby Mo berhenti. Mulutnya sudah penuh. Ia menggeleng pelan-pelan.

"Bismillah dulu," kata Umi. "Artinya, 'dengan nama Allah'. Supaya setiap yang kita mulai, dimulai bersama Allah."

Baby Mo menelan rotinya, lalu menirukan, "Bis-mil-lah." Kata itu terasa bulat dan hangat di mulutnya, seperti susu cokelat.

Hari itu Baby Mo penasaran. Sebelum memakai sepatu — "Bismillah." Sepatunya seperti masuk lebih mudah. Sebelum menyiram bunga — "Bismillah." Airnya berkilau seperti permata kecil. Sebelum menyusun balok jadi menara tinggi — "Bismillah." Dan menara itu berdiri paling tinggi yang pernah ia buat.

Sore hari, Baby Ais jatuh dan menangis karena lututnya lecet. Baby Mo berlari, memegang tangan adik kembarnya, dan berbisik, "Bismillah, Ais." Entah kenapa, tangis Baby Ais pelan-pelan reda.

Malam itu, sebelum tidur, Baby Mo menarik selimut sampai ke dagu. Ia memejamkan mata, lalu tersenyum kecil di kegelapan.

"Bismillah," bisiknya pelan.

Umi yang mendengar dari pintu menahan napas. Baby Mo tidak terburu-buru lagi. Ia sudah menemukan rahasianya: hal yang dimulai dengan nama Allah, selalu terasa cukup.

> *Setiap perkara baik yang tidak dimulai dengan Bismillah, maka kurang keberkahannya.*

Dan begitulah, satu kata kecil mengubah seluruh hari Baby Mo — bukan jadi lebih cepat, tapi jadi lebih berkah.`,
      en: `That morning the sun had only just peeked through the curtains. Baby Mo leapt out of bed, ran to the table, and grabbed his favourite jam bread.

"Wait a moment," said Umi gently, smiling. "Have you said it yet, sweetheart?"

Baby Mo stopped. His mouth was already full. He shook his head slowly.

"Bismillah first," said Umi. "It means 'with the name of Allah'. So that everything we begin, begins together with Allah."

Baby Mo swallowed his bread and repeated, "Bis-mil-lah." The word felt round and warm in his mouth, like cocoa.

That day Baby Mo grew curious. Before putting on his shoes — "Bismillah." They seemed to slip on more easily. Before watering the flowers — "Bismillah." The water sparkled like little jewels. Before stacking blocks into a tall tower — "Bismillah." And the tower stood taller than any he'd built.

In the afternoon, Baby Ais fell and cried over a scraped knee. Baby Mo ran over, held his twin sister's hand, and whispered, "Bismillah, Ais." Somehow, her crying slowly settled.

That night, before sleep, Baby Mo pulled the blanket up to his chin. He closed his eyes, then smiled a small smile in the dark.

"Bismillah," he whispered.

Umi, listening from the doorway, held her breath. Baby Mo wasn't in a hurry anymore. He'd found the secret: whatever begins with the name of Allah always feels like enough.

> *Every good matter that does not begin with Bismillah is lacking in blessing.*

And so, one little word changed Baby Mo's whole day — not into something faster, but into something more blessed.`,
    },
    anchor: { type: "doa", slug: "sebelum-makan" },
    takeaway: {
      id: "Satu kata kecil — Bismillah — mengajarkan anak bahwa setiap hal baik dimulai bersama Allah. Bukan supaya lebih cepat, tapi supaya lebih berkah.",
      en: "One little word — Bismillah — teaches a child that every good thing begins with Allah. Not to be faster, but to be more blessed.",
    },
    tags: ["bismillah", "adab", "akhlak", "buku"],
    readingTimeMin: 5,
  },

  {
    slug: "menara-yang-tak-mau-menyerah",
    kind: "story",
    child: "mo",
    pose: "baby-mo-yeyy.png",
    published: "2026-06-01",
    title: {
      id: "Menara yang Tak Mau Menyerah",
      en: "The Tower That Wouldn't Give Up",
    },
    hook: {
      id: "Lima kali menara Baby Mo roboh. Apakah ia akan menyerah, atau mencoba sekali lagi?",
      en: "Five times Baby Mo's tower fell. Will he give up, or try just one more time?",
    },
    body: {
      id: `Baby Mo punya satu impian besar untuk anak sekecil dia: membangun menara balok yang lebih tinggi dari kepalanya sendiri.

Ia menumpuk balok merah. Lalu balok biru. Lalu balok kuning. Tinggi… lebih tinggi… dan—

BRUK!

Menara itu roboh berhamburan ke lantai. Baby Mo mengerucutkan bibir.

Ia mencoba lagi. Merah, biru, kuning, hijau. Tinggi… lebih tinggi…

BRUK!

Empat kali. Lima kali. Setiap kali, balok-balok itu jatuh seperti hujan kayu. Mata Baby Mo mulai berkaca-kaca. Ia ingin melempar semua baloknya jauh-jauh.

Dari sofa, Abi tidak ikut membereskan. Abi hanya berkata pelan, "Tarik napas, Sayang. Coba lihat — kenapa robohnya?"

Baby Mo mengusap matanya. Ia memperhatikan. Ternyata balok paling bawah selalu miring. Pelan-pelan, ia membetulkan yang bawah dulu. Diluruskannya. Ditekannya supaya kokoh.

"Bismillah," bisik Baby Mo.

Merah. Biru. Kuning. Hijau. Ungu. Tangannya gemetar, tapi ia tahan napas. Menara itu naik… naik… melewati dadanya… melewati dagunya… sampai—

Lebih tinggi dari kepalanya!

Baby Mo memekik girang. "Yeeey! Berdiri! Berdiri!" Ia bertepuk tangan untuk dirinya sendiri, lalu menoleh ke Abi, meminta tepuk tangan juga.

Abi bertepuk paling kencang di seluruh rumah. "Kamu tidak menyerah," kata Abi. "Itu lebih hebat daripada menaranya."

Baby Mo memandang menaranya yang menjulang. Ternyata roboh bukan berarti gagal. Roboh hanya berarti: ayo coba lagi, sedikit lebih sabar.

> *Sesungguhnya Allah mencintai seseorang yang apabila mengerjakan sesuatu, ia menyempurnakannya.*

Dan menara yang tak mau menyerah itu berdiri sepanjang sore — sama seperti hati kecil yang membangunnya.`,
      en: `Baby Mo had one big dream for someone so small: to build a block tower taller than his own head.

He stacked a red block. Then a blue one. Then a yellow one. Higher… higher… and—

CRASH!

The tower tumbled across the floor. Baby Mo pursed his lips.

He tried again. Red, blue, yellow, green. Higher… higher…

CRASH!

Four times. Five times. Each time the blocks fell like a rain of wood. Baby Mo's eyes began to glisten. He wanted to throw all his blocks far, far away.

From the sofa, Abi didn't rush to tidy up. He only said softly, "Take a breath, sweetheart. Look — why does it fall?"

Baby Mo wiped his eyes. He watched closely. It turned out the very bottom block was always crooked. Slowly, he fixed the bottom first. Straightened it. Pressed it down to make it firm.

"Bismillah," whispered Baby Mo.

Red. Blue. Yellow. Green. Purple. His hands trembled, but he held his breath. The tower rose… and rose… past his chest… past his chin… until—

Taller than his head!

Baby Mo squealed with joy. "Yaaay! It's standing! It's standing!" He clapped for himself, then turned to Abi for applause too.

Abi clapped the loudest in the whole house. "You didn't give up," he said. "That's greater than the tower."

Baby Mo gazed up at his soaring tower. It turned out that falling didn't mean failing. Falling only meant: try again, a little more patiently.

> *Indeed Allah loves that when one of you does a task, he does it well.*

And the tower that wouldn't give up stood all afternoon — just like the little heart that built it.`,
    },
    anchor: { type: "parenting", slug: "adab-sehari-hari" },
    takeaway: {
      id: "Roboh bukan berarti gagal — roboh berarti 'coba lagi, sedikit lebih sabar'. Ketangguhan lahir saat anak dibiarkan bangkit sendiri.",
      en: "Falling isn't failing — it means 'try again, a little more patiently'. Resilience is born when a child is allowed to rise on his own.",
    },
    tags: ["ketangguhan", "sabar", "akhlak", "buku"],
    readingTimeMin: 5,
  },

  {
    slug: "kucing-kecil-di-bawah-hujan",
    kind: "story",
    child: "ais",
    pose: "baby-mo-wow.png",
    published: "2026-05-30",
    title: {
      id: "Kucing Kecil di Bawah Hujan",
      en: "The Little Cat in the Rain",
    },
    hook: {
      id: "Hujan turun deras, dan Baby Ais mendengar suara kecil yang sedih dari balik pagar. Tangan sekecil apa yang bisa menolong?",
      en: "The rain pours, and Baby Ais hears a small, sad sound behind the fence. What can such little hands do to help?",
    },
    body: {
      id: `Hujan turun deras sore itu. Baby Ais menempelkan hidungnya ke jendela, menonton titik-titik air berlomba turun di kaca.

Lalu ia mendengarnya. Suara kecil. "Meong… meong…" Sedih sekali.

Di balik pagar, seekor kucing kecil basah kuyup, menggigil. Bulunya menempel ke badannya yang mungil. Matanya yang bulat menatap Baby Ais.

Baby Ais berlari ke Umi. "Umi! Kucing! Basah! Dingin!" katanya, menarik-narik tangan Umi.

Mereka membuka pintu. Baby Ais ingin sekali memeluk kucing itu erat-erat, tapi Umi memegang tangannya. "Pelan-pelan, Sayang. Dia takut. Kita harus lembut."

Baby Ais belajar. Ia duduk jongkok, mengulurkan tangan kecilnya pelan-pelan, dan berbisik, "Sini… sini… nggak apa-apa."

Kucing kecil itu mengendus jarinya. Lalu — pelan sekali — ia melangkah masuk ke teras yang kering.

Baby Ais membawakan handuk kecil. Umi menuangkan sedikit susu hangat ke mangkuk. Kucing itu menjilatnya, lalu mendengkur — suara kecil yang bergetar seperti mesin mainan.

"Dia bilang terima kasih," kata Umi tersenyum.

Baby Ais memandang kucing yang kini hangat dan kenyang itu. Hatinya penuh, sepenuh mangkuk susu tadi. Ternyata tangan yang kecil pun bisa menjadi tempat berlindung bagi yang lebih kecil lagi.

> *Para penyayang akan disayangi oleh Yang Maha Penyayang. Sayangilah yang ada di bumi, niscaya Yang di langit menyayangimu.*

Hujan masih turun di luar. Tapi di teras kecil itu, ada satu kucing yang tidak lagi kedinginan — karena seorang anak perempuan memilih untuk menyayangi.`,
      en: `The rain came down hard that afternoon. Baby Ais pressed her nose to the window, watching the droplets race down the glass.

Then she heard it. A tiny sound. "Meow… meow…" So sad.

Behind the fence, a little cat was soaked through, shivering. Its fur clung to its tiny body. Its round eyes looked up at Baby Ais.

Baby Ais ran to Umi. "Umi! Cat! Wet! Cold!" she said, tugging at Umi's hand.

They opened the door. Baby Ais wanted so badly to scoop the cat up and squeeze it, but Umi held her hand. "Gently, sweetheart. He's scared. We must be soft."

Baby Ais learned. She crouched down, reached out her little hand slowly, and whispered, "Here… here… it's okay."

The little cat sniffed her finger. Then — ever so slowly — it stepped onto the dry porch.

Baby Ais fetched a small towel. Umi poured a little warm milk into a bowl. The cat lapped it up, then purred — a tiny trembling sound, like a toy engine.

"He's saying thank you," said Umi, smiling.

Baby Ais looked at the cat, now warm and full. Her heart felt full too, as full as that bowl of milk. It turned out even little hands could be a shelter for something littler still.

> *The merciful are shown mercy by the Most Merciful. Be merciful to those on earth, and the One above the heavens will be merciful to you.*

The rain still fell outside. But on that little porch was one cat that was cold no longer — because a little girl chose to be kind.`,
    },
    anchor: { type: "hadith", slug: "kasih-sayang-kepada-anak" },
    takeaway: {
      id: "Tangan yang kecil pun bisa jadi tempat berlindung. Mengajari anak lembut pada makhluk kecil adalah latihan pertama menyayangi sesama.",
      en: "Even little hands can be a shelter. Teaching a child gentleness toward small creatures is the first rehearsal of loving others.",
    },
    tags: ["kasih-sayang", "akhlak", "binatang", "buku"],
    readingTimeMin: 5,
  },

  {
    slug: "maaf-yang-hangat",
    kind: "story",
    child: "both",
    pose: "baby-mo-alright.png",
    published: "2026-05-28",
    title: { id: "Maaf yang Hangat", en: "A Warm Sorry" },
    hook: {
      id: "Baby Mo merobohkan istana pasir Baby Ais. Kata 'maaf' terasa berat — sampai ia menemukan cara mengucapkannya.",
      en: "Baby Mo knocks down Baby Ais's sandcastle. The word 'sorry' feels heavy — until he finds a way to say it.",
    },
    body: {
      id: `Di halaman belakang, Baby Ais sedang membangun istana pasir. Ada menara, ada parit, bahkan ada bendera dari daun kecil di puncaknya. Ia bangga sekali.

Baby Mo datang berlari, mengejar bola. Ia tidak melihat istana itu, dan—

BRAK! Kakinya menabrak istana pasir. Menara runtuh, parit rata, bendera daun terbang tertiup angin.

Baby Ais terdiam sebentar. Lalu bibirnya bergetar, dan air mata besar menggelinding di pipinya. "Istanaku…" isaknya.

Baby Mo ingin sekali lari bersembunyi. Dadanya terasa sesak. Kata "maaf" tersangkut di tenggorokannya, berat seperti batu.

Abi datang mendekat, tapi ia tidak memarahi Baby Mo. Abi berkata pelan, "Lihat wajah Ais, Sayang. Dia sedih. Apa yang bisa membuat hatinya hangat lagi?"

Baby Mo memandang adiknya yang menangis. Sesuatu di dalam dadanya ikut sakit. Pelan-pelan, ia berjalan mendekat. Ia tidak tahu harus berkata apa, jadi ia melakukan yang ia bisa: ia mengulurkan tangan dan mengusap kepala Baby Ais.

"Maaf, Ais," bisiknya akhirnya. Lalu ia jongkok di pasir. "Mo bantu bikin lagi, ya?"

Mata Baby Ais masih basah, tapi ia mengangguk. Dan di sanalah mereka berdua, dua tangan kecil membangun istana baru — kali ini bersama. Menaranya lebih tinggi. Paritnya lebih lebar. Dan benderanya dua, satu untuk masing-masing.

Maaf yang tulus, ternyata, tidak menghancurkan apa-apa. Ia justru membangun sesuatu yang lebih kuat dari sebelumnya.

> *Orang yang paling dicintai Allah adalah yang paling baik akhlaknya, dan yang paling lembut hatinya.*

Sore itu istana pasir berdiri lagi. Tapi yang paling kokoh bukan istananya — melainkan persaudaraan yang baru saja diperbaiki dengan satu kata hangat.`,
      en: `In the back garden, Baby Ais was building a sandcastle. It had a tower, a moat, even a flag made from a little leaf at the top. She was very proud.

Baby Mo came running, chasing a ball. He didn't see the castle, and—

CRASH! His foot struck the sandcastle. The tower collapsed, the moat flattened, the leaf-flag blew away on the wind.

Baby Ais went quiet for a moment. Then her lip trembled, and big tears rolled down her cheeks. "My castle…" she sobbed.

Baby Mo wanted so badly to run and hide. His chest felt tight. The word "sorry" stuck in his throat, heavy as a stone.

Abi came closer, but he did not scold Baby Mo. He said softly, "Look at Ais's face, sweetheart. She's sad. What could make her heart warm again?"

Baby Mo looked at his crying sister. Something inside his own chest hurt too. Slowly, he walked over. He didn't know what to say, so he did what he could: he reached out and stroked Baby Ais's head.

"Sorry, Ais," he whispered at last. Then he crouched in the sand. "Mo will help build it again, okay?"

Baby Ais's eyes were still wet, but she nodded. And there they were, two little hands building a new castle — this time together. The tower was taller. The moat was wider. And there were two flags, one for each of them.

A sincere sorry, it turned out, destroyed nothing. It built something stronger than before.

> *The most beloved to Allah are those with the best character and the gentlest hearts.*

That afternoon the sandcastle stood again. But the sturdiest thing wasn't the castle — it was the bond that had just been mended with one warm word.`,
    },
    anchor: { type: "parenting", slug: "adab-sehari-hari" },
    takeaway: {
      id: "Maaf yang tulus tidak menghancurkan apa-apa — ia membangun sesuatu yang lebih kuat. Tunjukkan akibatnya pada hati, bukan paksa kata-katanya.",
      en: "A sincere sorry destroys nothing — it builds something stronger. Show a child the effect on a heart, don't force the word.",
    },
    tags: ["maaf", "empati", "akhlak", "buku"],
    readingTimeMin: 5,
  },

  {
    slug: "bintang-bintang-rasa-syukur",
    kind: "story",
    child: "both",
    pose: "baby-mo-pose-09.png",
    published: "2026-05-26",
    title: {
      id: "Bintang-Bintang Rasa Syukur",
      en: "The Gratitude Stars",
    },
    hook: {
      id: "Setiap malam, Abi dan si kembar menghitung bintang. Tapi bintang yang ini tidak ada di langit.",
      en: "Every night, Abi and the twins count stars. But these stars aren't in the sky.",
    },
    body: {
      id: `Setiap malam, sebelum tidur, ada satu permainan kesukaan di rumah Baby Mo dan Baby Ais. Namanya: Mengumpulkan Bintang.

Tapi bintang-bintang ini istimewa. Mereka tidak ada di langit. Mereka bersembunyi di sepanjang hari yang baru saja lewat.

"Ayo kita kumpulkan bintang hari ini," kata Abi sambil duduk di antara dua kasur kecil. "Satu bintang untuk setiap hal yang kita syukuri."

Baby Mo berpikir keras. Lalu ia berseru, "Mam!" — maksudnya makan. Hari ini ada pisang goreng kesukaannya. Satu bintang menyala.

Baby Ais menunjuk bonekanya. Hari ini boneka beruangnya menemaninya bermain seharian. Satu bintang lagi menyala.

"Abi juga punya," kata Abi. "Abi bersyukur bisa pulang dan memeluk kalian berdua." Bintang ketiga.

Mereka terus menghitung. Bintang untuk hujan yang membuat rumput hijau. Bintang untuk Umi yang masak enak. Bintang untuk kaki yang bisa berlari. Bintang untuk mata yang bisa melihat bulan dari jendela.

Semakin mereka menghitung, semakin banyak bintang yang mereka temukan. Ternyata hari yang biasa pun penuh bintang — kalau kita mau mencarinya.

"Siapa yang menyalakan semua bintang ini?" tanya Abi pelan.

"Allah," jawab Baby Mo, sudah hampir terlelap.

Abi tersenyum dan menyelimuti keduanya. "Betul. Dan Allah suka pada hati yang pandai berterima kasih."

> *Jika kalian bersyukur, niscaya Aku akan menambah nikmat untuk kalian.*

Malam itu, Baby Mo dan Baby Ais tertidur dengan langit-langit hati yang penuh bintang. Bukan karena hari mereka sempurna — tapi karena mereka belajar menghitung yang cukup, bukan yang kurang.`,
      en: `Every night, before bed, there was one favourite game in the home of Baby Mo and Baby Ais. It was called: Collecting Stars.

But these stars were special. They weren't in the sky. They hid all through the day that had just passed.

"Let's collect today's stars," said Abi, sitting between two little beds. "One star for each thing we're grateful for."

Baby Mo thought hard. Then he cried, "Mam!" — meaning food. Today there had been his favourite fried banana. One star lit up.

Baby Ais pointed at her teddy. Today her bear had kept her company all day. Another star lit up.

"Abi has one too," said Abi. "I'm grateful I could come home and hug you both." A third star.

They kept counting. A star for the rain that made the grass green. A star for Umi's delicious cooking. A star for legs that can run. A star for eyes that can see the moon from the window.

The more they counted, the more stars they found. It turned out even an ordinary day is full of stars — if we're willing to look.

"Who lights all these stars?" asked Abi softly.

"Allah," answered Baby Mo, almost asleep.

Abi smiled and tucked them both in. "That's right. And Allah loves a heart that knows how to give thanks."

> *If you are grateful, I will surely increase you.*

That night, Baby Mo and Baby Ais drifted to sleep beneath a heart-ceiling full of stars. Not because their day was perfect — but because they'd learned to count what was enough, not what was missing.`,
    },
    anchor: { type: "parenting", slug: "bersyukur" },
    takeaway: {
      id: "Hari yang biasa pun penuh bintang kalau kita mau mencarinya. Ajak anak menghitung nikmat tiap malam — ia tumbuh melihat yang cukup, bukan yang kurang.",
      en: "Even an ordinary day is full of stars if we look. Count blessings with a child each night — and they grow up seeing what's enough, not what's missing.",
    },
    tags: ["syukur", "malam", "akhlak", "buku"],
    readingTimeMin: 5,
  },

  {
    slug: "keberanian-sebesar-biji-sawi",
    kind: "story",
    child: "mo",
    pose: "baby-mo-alright.png",
    published: "2026-05-24",
    title: {
      id: "Keberanian Sebesar Biji Sawi",
      en: "Courage the Size of a Mustard Seed",
    },
    hook: {
      id: "Lampu kamar dimatikan, dan gelap terasa sangat besar. Bagaimana Baby Mo menemukan keberanian yang lebih besar dari rasa takutnya?",
      en: "The light goes out, and the dark feels enormous. How will Baby Mo find a courage bigger than his fear?",
    },
    body: {
      id: `Klik. Umi mematikan lampu kamar.

Tiba-tiba kamar Baby Mo terasa sangat besar dan sangat gelap. Bayangan lemari terlihat seperti raksasa. Bayangan gantungan baju terlihat seperti tangan-tangan panjang. Jantung Baby Mo berdebar cepat.

"Umi…" panggilnya dengan suara kecil. "Mo takut."

Umi tidak menyalakan lampu lagi. Ia juga tidak berkata "jangan takut" — karena Umi tahu, gelap memang terasa besar bagi anak sekecil itu. Ia duduk di tepi tempat tidur dan menggenggam tangan Baby Mo.

"Sayang," bisik Umi, "Mo tahu siapa yang menjaga Mo di tempat gelap?"

Baby Mo menggeleng di kegelapan.

"Allah," kata Umi. "Allah tidak pernah tidur. Saat Mo tidak bisa melihat apa-apa, Allah tetap melihat Mo. Dan Allah menjaga Mo."

Lalu Umi mengajarkan satu kalimat kecil, sekecil biji sawi. "Coba ucapkan: A'udzu bikalimatillahit-tammah… Mo minta perlindungan kepada Allah."

Baby Mo mengucapkannya pelan-pelan. Suaranya gemetar di kata pertama. Lebih mantap di kata kedua. Dan saat selesai, sesuatu yang aneh terjadi di dadanya — debar yang cepat tadi mulai melambat.

Ia memandang bayangan lemari lagi. Ternyata… cuma lemari. Bayangan gantungan baju… cuma baju. Gelap tidak berubah. Tapi hati Baby Mo yang berubah.

"Berani itu bukan berarti tidak takut," bisik Umi sambil mencium keningnya. "Berani itu takut, tapi tetap percaya Allah menjaga."

> *Aku berlindung dengan kalimat-kalimat Allah yang sempurna dari kejahatan makhluk-Nya.*

Malam itu Baby Mo tertidur dengan keberanian sebesar biji sawi di dalam dadanya. Kecil. Tapi cukup untuk membuat seluruh gelap terasa aman.`,
      en: `Click. Umi turned off the bedroom light.

Suddenly Baby Mo's room felt very big and very dark. The shadow of the wardrobe looked like a giant. The shadow of the coat hooks looked like long reaching arms. Baby Mo's heart thumped fast.

"Umi…" he called in a small voice. "Mo is scared."

Umi did not turn the light back on. Nor did she say "don't be scared" — because she knew the dark really does feel big to someone so small. She sat at the edge of the bed and held Baby Mo's hand.

"Sweetheart," whispered Umi, "do you know who watches over Mo in the dark?"

Baby Mo shook his head in the darkness.

"Allah," said Umi. "Allah never sleeps. When Mo can't see anything, Allah still sees Mo. And Allah keeps Mo safe."

Then Umi taught him one little sentence, small as a mustard seed. "Try saying: A'udhu bikalimatillahit-tammah… I seek Allah's protection."

Baby Mo said it slowly. His voice trembled on the first word. Steadier on the second. And when he finished, something strange happened in his chest — the fast thumping began to slow.

He looked at the wardrobe shadow again. It was just… a wardrobe. The coat-hook shadow… just coats. The dark hadn't changed. But Baby Mo's heart had.

"Brave doesn't mean you're not scared," whispered Umi, kissing his forehead. "Brave means you're scared, but you still trust that Allah is watching over you."

> *I seek refuge in the perfect words of Allah from the evil of His creation.*

That night Baby Mo fell asleep with a courage the size of a mustard seed inside his chest. Small. But enough to make the whole dark feel safe.`,
    },
    anchor: { type: "doa", slug: "perlindungan-anak" },
    takeaway: {
      id: "Berani bukan berarti tidak takut — berani berarti takut, tapi tetap percaya Allah menjaga. Beri anak doa kecil, dan gelap pun terasa aman.",
      en: "Brave doesn't mean unafraid — it means scared, but still trusting Allah watches over you. Give a child a small du'a, and even the dark feels safe.",
    },
    tags: ["berani", "takut-gelap", "akhlak", "buku"],
    readingTimeMin: 5,
  },

  {
    slug: "sepiring-untuk-tetangga",
    kind: "story",
    child: "both",
    pose: "baby-mo-thank-you.png",
    published: "2026-05-22",
    title: { id: "Sepiring untuk Tetangga", en: "A Plate for the Neighbour" },
    hook: {
      id: "Umi membuat kolak paling enak sedunia. Tapi sebelum dimakan, ada satu kebiasaan kecil yang mengajarkan hal besar.",
      en: "Umi makes the best sweet stew in the world. But before anyone eats, one small habit teaches something big.",
    },
    body: {
      id: `Wangi kolak pisang memenuhi seluruh rumah. Baby Mo dan Baby Ais sudah duduk manis di meja, sendok di tangan, mata berbinar.

Tapi Umi tidak langsung menghidangkannya. Ia menyiapkan satu mangkuk lagi, menutupnya rapi dengan kain bersih.

"Untuk siapa itu, Umi?" tanya Baby Mo, sedikit cemas mangkuknya berkurang.

"Untuk Nenek sebelah," jawab Umi. "Beliau tinggal sendirian. Kalau kita masak yang enak, kita bagi sedikit ke tetangga. Itu kebiasaan baik di rumah ini."

Baby Mo memandang mangkuk yang ditutup itu. Sejujurnya, ia ingin semuanya untuk dirinya. Tapi lalu ia teringat wajah Nenek sebelah yang selalu tersenyum saat mereka lewat.

"Mo yang antar!" serunya tiba-tiba.

Maka berangkatlah mereka bertiga. Baby Mo memegang mangkuk dengan dua tangan, hati-hati sekali, seolah membawa harta karun. Baby Ais mengetuk pintu, "Tok tok!"

Pintu terbuka. Wajah Nenek sebelah langsung berseri seperti matahari pagi. "Masya Allah! Untuk Nenek?"

Baby Mo mengangguk bangga. Nenek mengusap kepala keduanya, dan mendoakan sesuatu yang lembut — doa yang tidak sepenuhnya mereka mengerti, tapi terasa hangat sampai ke dada.

Di perjalanan pulang, Baby Mo merasa ada yang aneh. Mangkuknya sudah kosong, tapi hatinya justru terasa lebih penuh daripada sebelum berangkat.

"Umi," katanya, "berbagi itu… kenyang juga, ya?"

Umi tertawa lembut. "Itu kenyang yang paling enak, Sayang."

> *Jibril terus berpesan kepadaku tentang tetangga, hingga aku mengira ia akan menjadikannya ahli waris.*

Malam itu kolaknya terasa dua kali lebih enak. Karena yang paling manis, ternyata, bukan gulanya — melainkan sepiring yang dibagi dengan tetangga.`,
      en: `The scent of banana stew filled the whole house. Baby Mo and Baby Ais were already sitting nicely at the table, spoons in hand, eyes shining.

But Umi didn't serve it right away. She prepared one more bowl, covering it neatly with a clean cloth.

"Who's that for, Umi?" asked Baby Mo, a little worried his share was shrinking.

"For the grandma next door," answered Umi. "She lives alone. When we cook something nice, we share a little with the neighbours. That's a good habit in this house."

Baby Mo looked at the covered bowl. Honestly, he wanted all of it for himself. But then he remembered the next-door grandma's face, always smiling whenever they passed.

"Mo will deliver it!" he suddenly cried.

So off the three of them went. Baby Mo held the bowl with both hands, ever so carefully, as if carrying treasure. Baby Ais knocked on the door, "Knock knock!"

The door opened. The grandma's face lit up at once like the morning sun. "Masha'Allah! For me?"

Baby Mo nodded proudly. Grandma stroked both their heads and prayed something gentle over them — a prayer they didn't fully understand, but that felt warm all the way to their chests.

On the walk home, Baby Mo felt something odd. His bowl was empty now, yet his heart felt fuller than before they left.

"Umi," he said, "sharing… it fills you up too, doesn't it?"

Umi laughed softly. "That's the most delicious kind of full, sweetheart."

> *Jibril kept advising me about the neighbour, until I thought he would make him an heir.*

That night the stew tasted twice as good. Because the sweetest thing, it turned out, wasn't the sugar — it was a plate shared with a neighbour.`,
    },
    anchor: { type: "hadith", slug: "tetangga-keluarga-luas" },
    takeaway: {
      id: "Berbagi itu mengenyangkan hati. Kebiasaan memberi ke tetangga di depan anak menanam kemurahan hati yang akan tumbuh seumur hidup.",
      en: "Sharing fills the heart. The habit of giving to neighbours, done in front of a child, plants a generosity that grows for a lifetime.",
    },
    tags: ["berbagi", "tetangga", "akhlak", "buku"],
    readingTimeMin: 5,
  },

  {
    slug: "kebun-sabar-baby-ais",
    kind: "story",
    child: "ais",
    pose: "baby-mo-ok.png",
    published: "2026-05-20",
    title: { id: "Kebun Sabar Baby Ais", en: "Baby Ais's Garden of Patience" },
    hook: {
      id: "Baby Ais menanam satu biji kecil dan ingin bunganya mekar HARI INI. Tapi kebun punya pelajarannya sendiri.",
      en: "Baby Ais plants one little seed and wants the flower to bloom TODAY. But the garden has a lesson of its own.",
    },
    body: {
      id: `Abi memberi Baby Ais sebutir biji bunga matahari, sekecil kuku jarinya. "Tanam ini, Sayang. Dengan izin Allah, nanti tumbuh tinggi sekali."

Baby Ais menggali lubang kecil, memasukkan bijinya, dan menutupnya dengan tanah. "Bismillah," bisiknya, meniru Abi.

Lalu ia berdiri, bertolak pinggang, dan menunggu.

Satu menit. Dua menit. Tidak ada apa-apa.

"Abi! Kok belum tumbuh?" tanyanya, dahinya berkerut.

Abi tersenyum. "Sabar, Sayang. Bunga tidak tumbuh karena kita teriaki. Ia tumbuh pelan-pelan, dari dalam, di tempat yang tak terlihat."

Esok paginya Baby Ais berlari ke kebun. Masih tanah. Ia hampir menangis. Tapi Abi mengajaknya menyiram, sedikit air setiap pagi. "Bismillah," dan sedikit air. "Bismillah," dan sedikit air.

Hari berganti hari. Baby Ais menyiram. Menunggu. Menyiram lagi. Kadang ia lupa, dan kebun terasa membosankan. Tapi Abi selalu mengajaknya kembali, dengan sabar yang sama seperti yang sedang ia ajarkan.

Lalu, suatu pagi—

"ABI! ABI!" Baby Ais berteriak. Dari dalam tanah, sehelai daun hijau kecil mengintip, lembut seperti telinga kelinci.

Baby Ais terpana. Selama ini, di bawah tanah yang terlihat kosong, sesuatu sedang tumbuh diam-diam. Kesabarannya tidak sia-sia. Ia hanya tidak bisa melihatnya.

"Hal-hal yang baik butuh waktu," kata Abi sambil memeluknya. "Seperti bunga. Seperti hati yang baik. Allah yang menumbuhkan, kita yang menyiram dengan sabar."

> *Sesungguhnya bersama kesulitan ada kemudahan.*

Beberapa minggu kemudian, bunga matahari itu tumbuh lebih tinggi dari Baby Ais sendiri, wajahnya menghadap matahari. Dan setiap kali memandangnya, Baby Ais ingat: yang ditanam dengan sabar, akan mekar pada waktunya.`,
      en: `Abi gave Baby Ais a single sunflower seed, as small as her fingernail. "Plant this, sweetheart. By Allah's leave, it will grow ever so tall."

Baby Ais dug a little hole, dropped the seed in, and covered it with soil. "Bismillah," she whispered, copying Abi.

Then she stood up, hands on her hips, and waited.

One minute. Two minutes. Nothing.

"Abi! Why isn't it growing?" she asked, her brow furrowed.

Abi smiled. "Patience, sweetheart. A flower doesn't grow because we shout at it. It grows slowly, from the inside, in a place we can't see."

The next morning Baby Ais ran to the garden. Still just soil. She nearly cried. But Abi invited her to water it, a little each morning. "Bismillah," and a little water. "Bismillah," and a little water.

Day followed day. Baby Ais watered. Waited. Watered again. Sometimes she forgot, and the garden felt boring. But Abi always brought her back, with the very same patience he was teaching.

Then, one morning—

"ABI! ABI!" Baby Ais shouted. From the soil, a tiny green leaf peeked out, soft as a rabbit's ear.

Baby Ais was amazed. All this time, beneath the soil that looked so empty, something had been quietly growing. Her patience had not been wasted. She just couldn't see it.

"Good things take time," said Abi, hugging her. "Like a flower. Like a kind heart. Allah makes it grow; we water it with patience."

> *Indeed, with hardship comes ease.*

A few weeks later, the sunflower grew taller than Baby Ais herself, its face turned toward the sun. And every time she looked at it, Baby Ais remembered: what is planted with patience will bloom in its time.`,
    },
    anchor: { type: "doa", slug: "mendapat-rezeki" },
    takeaway: {
      id: "Yang ditanam dengan sabar akan mekar pada waktunya. Hal baik — bunga, hati yang baik — tumbuh pelan-pelan di tempat yang tak terlihat.",
      en: "What is planted with patience blooms in its time. Good things — a flower, a kind heart — grow slowly in places we cannot see.",
    },
    tags: ["sabar", "syukur", "akhlak", "buku"],
    readingTimeMin: 5,
  },

  {
    slug: "berbagi-payung",
    kind: "story",
    child: "both",
    pose: "baby-mo-yes.png",
    published: "2026-05-18",
    title: { id: "Berbagi Payung", en: "Sharing the Umbrella" },
    hook: {
      id: "Hanya ada satu payung dan dua anak. Hujan turun deras. Apa yang akan dilakukan Baby Mo?",
      en: "There is only one umbrella and two children. The rain is pouring. What will Baby Mo do?",
    },
    body: {
      id: `Pulang dari taman, langit tiba-tiba berubah kelabu. Tetes pertama jatuh — tes. Lalu tes-tes-tes. Lalu hujan turun deras sekali.

Baby Mo membuka payung kuningnya yang kecil. Tapi payung itu hanya cukup untuk satu orang. Dan di sebelahnya, Baby Ais mulai basah, bajunya menempel, rambutnya menetes.

Sebentar, Baby Mo ragu. Payung ini miliknya. Kalau ia berbagi, ia juga akan ikut basah sedikit.

Ia memandang adik kembarnya yang menggigil. Lalu ia teringat kata Umi: "Yang kuat itu yang menjaga yang lain."

"Sini, Ais!" seru Baby Mo, menarik adiknya mendekat. Ia memiringkan payung — lebih banyak menutupi Baby Ais daripada dirinya sendiri. Satu bahu Baby Mo basah kuyup. Tapi ia tidak peduli.

Mereka berjalan pelan-pelan, berdempetan di bawah satu payung kuning kecil, kaki kecil mereka melompati genangan. Baby Ais tertawa. Baby Mo ikut tertawa. Hujan tidak lagi terasa dingin saat ditembus berdua.

Di depan pintu, Umi sudah menunggu dengan handuk. Ia melihat satu bahu Baby Mo yang basah, dan langsung mengerti apa yang terjadi.

"Kenapa bahu Mo basah, Sayang?" tanya Umi, padahal ia sudah tahu jawabannya.

"Mo kasih payungnya lebih banyak ke Ais," jawab Baby Mo polos. "Ais kan lebih kecil." (Padahal mereka kembar, hanya beda beberapa menit.)

Umi memeluk keduanya erat-erat. Bahu yang basah bisa dikeringkan dengan handuk. Tapi hati yang belajar mendahulukan orang lain — itu menghangatkan seluruh rumah.

> *Tidak sempurna iman salah seorang dari kalian sampai ia mencintai untuk saudaranya apa yang ia cintai untuk dirinya sendiri.*

Malam itu, Baby Mo sedikit bersin. Tapi ia tersenyum di balik selimutnya. Karena berbagi payung, ternyata, jauh lebih hangat daripada kering sendirian.`,
      en: `On the way home from the park, the sky suddenly turned grey. The first drop fell — plip. Then plip-plip-plip. Then the rain poured down hard.

Baby Mo opened his small yellow umbrella. But it was only big enough for one. And beside him, Baby Ais was starting to get wet, her clothes clinging, her hair dripping.

For a moment, Baby Mo hesitated. This umbrella was his. If he shared it, he'd get a little wet too.

He looked at his shivering twin sister. Then he remembered Umi's words: "The strong one looks after others."

"Come here, Ais!" cried Baby Mo, pulling his sister close. He tilted the umbrella — covering Baby Ais more than himself. One of Baby Mo's shoulders got soaked. But he didn't mind.

They walked slowly, huddled under one little yellow umbrella, their small feet hopping over puddles. Baby Ais laughed. Baby Mo laughed too. The rain didn't feel cold anymore when they faced it together.

At the door, Umi was already waiting with a towel. She saw Baby Mo's one wet shoulder and understood at once what had happened.

"Why is Mo's shoulder wet, sweetheart?" asked Umi, though she already knew the answer.

"Mo gave more of the umbrella to Ais," answered Baby Mo simply. "Ais is smaller." (Though they were twins, just a few minutes apart.)

Umi hugged them both tightly. A wet shoulder can be dried with a towel. But a heart that learns to put others first — that warms the whole house.

> *None of you truly believes until he loves for his brother what he loves for himself.*

That night, Baby Mo sneezed a little. But he smiled under his blanket. Because sharing an umbrella, it turned out, was far warmer than being dry alone.`,
    },
    anchor: { type: "parenting", slug: "anak-tidak-mau-berbagi" },
    takeaway: {
      id: "Bahu yang basah bisa dikeringkan; hati yang belajar mendahulukan orang lain menghangatkan seluruh rumah. Berbagi lebih hangat daripada kering sendirian.",
      en: "A wet shoulder can be dried; a heart that learns to put others first warms the whole house. Sharing is warmer than being dry alone.",
    },
    tags: ["berbagi", "kasih-sayang", "akhlak", "buku"],
    readingTimeMin: 5,
  },

  {
    slug: "selamat-tidur-sayang",
    kind: "story",
    child: "both",
    pose: "baby-mo-pose-09.png",
    published: "2026-05-16",
    title: { id: "Selamat Tidur, Sayang", en: "Goodnight, My Love" },
    hook: {
      id: "Bulan mengintip di jendela, dan dua mata kecil belum mau terpejam. Doa apa yang membuat malam terasa aman?",
      en: "The moon peeks at the window, and two little eyes won't close. What du'a makes the night feel safe?",
    },
    body: {
      id: `Malam sudah larut. Bulan mengintip di jendela kamar, bulat dan keperakan, seperti lampu tidur raksasa dari langit.

Tapi dua pasang mata kecil masih terbuka. Baby Mo membolak-balik badannya. Baby Ais memeluk boneka beruangnya erat-erat.

"Belum ngantuk?" tanya Abi sambil duduk di antara dua kasur.

"Belum," kata mereka berdua, padahal mata mereka sudah sayu.

Abi tersenyum. "Kalau begitu, kita siapkan hati dulu untuk tidur. Sama seperti kita cuci tangan sebelum makan, kita bersihkan hati sebelum tidur."

Abi mulai mematikan lampu satu per satu, dan kamar menjadi temaram dan hangat. "Yuk, maafkan dulu hari ini," bisik Abi. "Kalau tadi Mo rebutan mainan sama Ais… sekarang dimaafkan, ya."

Baby Mo melirik adiknya. "Maaf, Ais," gumamnya. Baby Ais terkikik kecil.

"Sekarang, kita titipkan diri kita kepada Allah," kata Abi. Lalu ia membaca pelan, dan si kembar menirukan sebisanya:

> *Bismika Allahumma ahyaa wa amuut.* — Dengan nama-Mu, ya Allah, aku hidup dan aku mati.

"Artinya," bisik Abi, "kita tidur dalam pelukan penjagaan Allah. Allah yang menjaga napas kita sampai pagi. Jadi kita tidak perlu takut apa-apa."

Baby Ais menguap lebar. Baby Mo merasa kelopak matanya menjadi berat, seberat selimut hangat.

Abi mencium kening keduanya. "Selamat tidur, Sayang. Mimpi yang indah. Allah menjaga kalian."

Bulan terus berjaga di jendela. Dan di bawah cahayanya yang lembut, Baby Mo dan Baby Ais tertidur — bukan karena lelah, tapi karena hati yang dititipkan kepada Allah selalu bisa tidur dengan tenang.

Selamat tidur, Baby Mo. Selamat tidur, Baby Ais. Sampai jumpa di pagi yang baru, insya Allah.`,
      en: `It was late at night. The moon peeked at the bedroom window, round and silvery, like a giant night light from the sky.

But two pairs of little eyes were still open. Baby Mo tossed and turned. Baby Ais hugged her teddy bear tightly.

"Not sleepy yet?" asked Abi, sitting between the two beds.

"Not yet," they both said, though their eyes were already heavy.

Abi smiled. "Then let's get our hearts ready for sleep first. Just as we wash our hands before eating, we clean our hearts before sleeping."

Abi began turning off the lamps one by one, and the room grew dim and warm. "Let's forgive today first," whispered Abi. "If Mo fought with Ais over a toy earlier… it's forgiven now, okay?"

Baby Mo glanced at his sister. "Sorry, Ais," he mumbled. Baby Ais giggled softly.

"Now, let's entrust ourselves to Allah," said Abi. Then he recited softly, and the twins copied as best they could:

> *Bismika Allahumma ahyaa wa amuut.* — In Your name, O Allah, I live and I die.

"It means," whispered Abi, "we sleep in the embrace of Allah's protection. Allah keeps our breath safe until morning. So we don't need to fear anything."

Baby Ais yawned wide. Baby Mo felt his eyelids grow heavy, as heavy as a warm blanket.

Abi kissed both their foreheads. "Goodnight, my loves. Sweet dreams. Allah is watching over you."

The moon kept watch at the window. And beneath its gentle light, Baby Mo and Baby Ais drifted to sleep — not because they were tired, but because a heart entrusted to Allah can always rest in peace.

Goodnight, Baby Mo. Goodnight, Baby Ais. See you in a brand-new morning, insha'Allah.`,
    },
    anchor: { type: "doa", slug: "sebelum-tidur" },
    takeaway: {
      id: "Bersihkan hati sebelum tidur: maafkan hari ini, lalu titipkan diri kepada Allah. Hati yang dititipkan kepada-Nya selalu bisa tidur dengan tenang.",
      en: "Clean the heart before sleep: forgive the day, then entrust yourself to Allah. A heart given to Him can always rest in peace.",
    },
    tags: ["malam", "doa-tidur", "akhlak", "buku"],
    readingTimeMin: 5,
  },

];

export function getAllCatatan(): Catatan[] {
  // newest first
  return [...catatanList].sort((a, b) => b.published.localeCompare(a.published));
}

export function getCatatanBySlug(slug: string): Catatan | undefined {
  return catatanList.find((c) => c.slug === slug);
}
