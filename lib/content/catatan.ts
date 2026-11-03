import type { Catatan } from "./types";
import { illustratedStories } from "./catatan-illustrated";
import { illustratedStories2 } from "./catatan-illustrated-2";

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
    surahs: ["al-fatihah"],
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

> *Bismika Allahumma ahyaa wa amuut.* (HR. Bukhari 6324, Muslim 2711)

Pelan. Berulang. Bukan supaya dia hafal. Supaya dia kenal suara itu.

Beberapa minggu terakhir Abi banyak baca soal anak usia 0–3 tahun — terutama yang kembar. Salah satu yang stuck di kepala: anak menyerap doa jauh sebelum mereka bisa mengulanginya. Telinga mereka sudah mendengar Al-Fatihah dari dalam kandungan — dua telinga, dua anak. Bahasa pertama yang mereka kenal dari kita bukan kata — tapi nada. Tenang atau panik. Lembut atau buru-buru.

Jadi malam itu Abi tidak mengajarkan apa-apa. Cuma jadi suara yang tenang. Yang baca doa pelan-pelan sampai Baby Mo tertidur lagi di bahu Abi. Baby Ais masih bersuara tidur kecil di kasur sebelahnya. Tidak terbangun. Alhamdulillah.

Kalau besok Baby Mo bangun lagi jam tiga, Abi akan kembali bisikkan kalimat yang sama. Kalau gantinya Baby Ais, juga kalimat yang sama. Bukan untuk mengajarinya. Untuk mengenalkan.`,
      en: `Last night Baby Mo woke up at three, crying. He can't say much yet, so he couldn't tell me why. Baby Ais, his twin sister, slept on in the bed beside him — sometimes I'm amazed how one child can cry that loudly without waking his twin sister.

Abi's first reflex: "Let's read the bedtime du'a." Then I caught myself — Baby Mo can't say anything yet beyond "umi", "abi", and an "mmmm" that means "carry me".

So Abi carried him, walking slowly around the room. Whispering into his ear:

> *Bismika Allahumma ahyaa wa amuut.* (Bukhari 6324, Muslim 2711)

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

> *"Jika salah seorang dari kalian makan, hendaklah dia menyebut nama Allah. Jika dia lupa di awal, hendaklah dia ucapkan: Bismillaahi fii awwalihi wa aakhirihi."* (HR. Abu Dawud 3767, Tirmidzi 1858)

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

> *"When one of you eats, let him mention the name of Allah. If he forgets at the start, let him say: Bismillaahi fii awwalihi wa aakhirihi."* (Abu Dawud 3767, Tirmidhi 1858)

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

> *"Barangsiapa menunjukkan kepada kebaikan, maka ia mendapat pahala seperti pahala orang yang mengerjakannya."* (HR. Muslim 1893)

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

> *"Whoever guides someone to goodness will have a reward like that of the one who does it."* (Muslim 1893)

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

> *Sebaik-baik kalian adalah yang paling baik akhlaknya.* (HR. Bukhari 3559, Muslim 2321)

Berbagi bukan bawaan lahir. Itu diajari, satu krayon ungu setiap kali. Umi tidak menyelesaikan masalahnya untuk mereka — Umi cuma menunjukkan jalannya, lalu memberi mereka ruang untuk memilih sendiri.`,
      en: `This morning there was only one purple crayon still whole. Baby Mo grabbed it first, Baby Ais pulled at it. Two little hands, one crayon, and an "Ais's one!" — the first time Umi heard it that clearly.

Umi's reflex was to just take the crayon and buy a new one this evening. But I held back. I sat on the floor, level with their eyes, and said softly: "Let's take turns. Mo colours the moon first, then the crayon goes to Ais for the stars."

It took three repeats. But Baby Mo finally let the crayon go into his sister's hand — slowly, unsure, but he let go. Baby Ais said "ankyu" (her version of thank you). And Umi quietly held her breath.

> *The best of you are those with the best character.* (Bukhari 3559, Muslim 2321)

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

> *Hendaklah kalian jujur, karena kejujuran menuntun pada kebaikan.* (HR. Bukhari 6094, Muslim 2607)

Anak kecil berbohong bukan karena jahat — karena takut. Kalau jujur selalu disambut amarah, dia belajar menyembunyikan. Kalau jujur disambut tenang, dia belajar terbuka. Malam ini Abi pilih jadi tempat yang aman untuk berkata benar.`,
      en: `A cup shattered in the kitchen. Abi walked in, and Baby Mo immediately pointed at Baby Ais — even though she was sitting far away, playing with blocks.

Abi crouched down. Not angry, not rushed. Just asked: "Was Mo holding the cup?" Baby Mo went quiet. Then nodded, small. He can't talk fluently yet, but he already understands shame.

Abi didn't punish. I said: "Cups can be replaced. Honesty is what Abi loves." Then we cleaned up the pieces together. Baby Mo helped pick up (the plastic bits only).

> *Hold to truthfulness, for truthfulness leads to goodness.* (Bukhari 6094, Muslim 2607)

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

> *"Barangsiapa tidak berterima kasih kepada manusia, ia tidak bersyukur kepada Allah."* (HR. Abu Dawud 4811, Tirmidzi 1954)

Jadi kalau Umi mau Baby Ais dan Baby Mo tumbuh jadi anak yang tahu terima kasih, tugas Umi sederhana: jadi orang yang paling sering berterima kasih di rumah ini.`,
      en: `A small thing, but Umi thought about it all day. I gave Baby Ais a slice of banana. Before I could even say "what do you say?", she'd already beaten me to it: "ankyu."

I never taught her formally. It's just that every time Abi hands me something, we say "thank you" in front of them. Every time. Turns out they're watching. Always watching.

A two-year-old is a master mimic. They don't do what we tell them — they do what we do. Good manners aren't a lesson you teach; they're the air a child breathes at home.

> *"Whoever does not thank people has not thanked Allah."* (Abu Dawud 4811, Tirmidhi 1954)

So if Umi wants Baby Ais and Baby Mo to grow up grateful, my job is simple: be the person who says thank you the most in this house.`,
    },
    anchor: { type: "parenting", slug: "adab-sehari-hari" },
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

> *Bukan golongan kami orang yang tidak menyayangi yang kecil.* (HR. Tirmidzi 1919)

Beberapa menit kemudian mereka main bareng lagi seolah tidak terjadi apa-apa. Tapi Abi tahu, sesuatu yang kecil baru saja ditanam.`,
      en: `Baby Mo snatched a toy, Baby Ais fell and cried. Abi didn't order Baby Mo to say "sorry" in a commanding tone — that only turns sorry into an empty word.

I carried Baby Ais first until she calmed. Then I showed Baby Mo: "Look, Ais is hurt. Try to soothe her." Baby Mo hesitated, then patted his sister's head with his chubby hand. That was his apology — before he could even say it.

Empathy comes before words. A child needs to see the effect of his action on someone's face first; only then does "sorry" mean anything. Abi wasn't chasing the word; I was chasing the understanding.

> *He is not one of us who does not show mercy to our young ones.* (Tirmidhi 1919)

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

> *Sungguh, bersama kesulitan ada kemudahan.* (QS. Al-Insyirah: 6)

Menunggu giliran adalah ibadah kecil. Dan ternyata, sepuluh hitungan adalah panjang yang pas untuk hati yang masih belajar bersabar.`,
      en: `At the park there was only one free swing. Baby Mo got on first. Baby Ais stood beside it, tugging his shirt: my turn, my turn.

Umi didn't want to just force Baby Mo off — that teaches that whoever cries loudest wins. So I used counting: "Mo swings until ten, okay. We'll count together. Then it's Ais." And we counted out loud: one… two… all the way to ten.

At ten, Baby Mo climbed off on his own. Proud, even. Patience became measurable, with a clear end — instead of a vague "wait" that feels like forever to a two-year-old.

> *Indeed, with hardship comes ease.* (Qur'an, Ash-Sharh 94:6)

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

> *Sebarkanlah salam di antara kalian.* (HR. Muslim 54)

Tetangga tadi tersenyum lebar, dan Abi diam-diam berdoa: semoga lambaian kecil ini jadi kebiasaan yang besar.`,
      en: `This afternoon we took a short walk. Passing a neighbour's house, she greeted us. Suddenly Baby Mo waved and said "samlekum" — his lisped version of assalamualaikum.

Abi never sat down to teach "say salam." But every time I enter the house, I say salam out loud. Every time I meet someone. Turns out those little ears record everything.

Salam is a prayer: may peace be upon you. Teaching a child to spread salam is teaching him to scatter goodness to people he doesn't even know yet. That's a seed of warmth that grows for a lifetime.

> *Spread salam (peace) amongst yourselves.* (Muslim 54)

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

> *Bismillah… makanlah dengan tangan kananmu.* (HR. Bukhari 5376, Muslim 2022)

Jadi Umi tahan suapan, kami ucap bismillah bareng, baru dia buka mulut lebar-lebar. Lampu hijau.`,
      en: `At lunch, Umi was about to feed Baby Ais straight away. But she held my hand back, looked at me, waiting for something. I was puzzled for a second — then realised. She was waiting for "bismillah".

Every first bite, we always say bismillah together. It's become their signal that eating begins, like a green light. Without it, Baby Ais felt something was missing.

What Umi loves: she doesn't understand the words yet, but she already understands that eating begins by mentioning Allah's name. The meaning will follow later; the habit gets planted first. That's how a du'a enters a child's body — through routine, not memorisation.

> *Say Bismillah… and eat with your right hand.* (Bukhari 5376, Muslim 2022)

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

> *Setiap kalian adalah pemimpin, dan akan dimintai tanggung jawab atas yang dipimpinnya.* (HR. Bukhari 893, Muslim 1829)

Tanggung jawab atas barang sendiri dimulai dari satu keranjang balok. Dan ternyata, sambil bernyanyi, jauh lebih ringan.`,
      en: `Toys everywhere. If Abi says "let's tidy up" in a tired voice, the result is zero. So I turned it into a race: "Who can put the blocks in the basket fastest?"

Suddenly tidying was fun. Baby Mo ran for blocks, Baby Ais copied him stuffing in dolls. Abi sang a made-up cleanup song, they laughed. Five minutes, clean floor.

Children don't hate helping — they hate being ordered in a bored voice. The same task can be a burden or a game, depending on our face when we ask. Responsibility is easiest planted while it still feels like play.

> *Each of you is a shepherd, and each is responsible for his flock.* (Bukhari 893, Muslim 1829)

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

> *Para penyayang akan disayangi oleh Yang Maha Penyayang.* (HR. Abu Dawud 4941, Tirmidzi 1924)

Kucingnya pergi setelah beberapa menit. Tapi Baby Ais masih menatap tangannya sendiri, seperti baru menemukan kekuatan baru: tangan yang lembut.`,
      en: `A street cat wandered onto the porch. Baby Ais was thrilled and went to grab its tail. Umi gently held her hand back: "Gently, love. The cat hurts too if you pull."

I held her little hand and taught her to stroke from head to back. Slowly. The cat stayed still, even purred. Baby Ais's eyes went wide — wow — amazed that gentleness produced something roughness couldn't.

Tenderness toward small creatures is the first rehearsal of tenderness toward people. A child who learns gentleness with a cat learns that strength isn't for hurting. That's a big lesson, arriving through cat fur.

> *The merciful are shown mercy by the Most Merciful.* (Abu Dawud 4941, Tirmidhi 1924)

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
    surahs: ["al-falaq", "an-nas"],
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

> *Dengan nama-Mu, ya Allah, aku hidup dan aku mati.* (HR. Bukhari 6324, Muslim 2711)

Beberapa menit, tangisnya reda jadi napas tidur. Lampu kecil tetap menyala. Tapi yang sebenarnya menenangkannya bukan lampu itu — Abi tahu itu.`,
      en: `The moment Abi turned off the light, Baby Mo cried. The dark is enormous for someone so small. I could have just switched it back on — but that teaches that the dark is rightly feared.

So I turned on a small night light, carried him, and whispered the du'a softly. I said: "Allah is watching over Mo. Abi is here. The dark just means the light is sleeping." My calm voice was brighter than any lamp.

A child's fear isn't beaten with "don't be scared" — that never works. It's met with presence. A child borrows our calm until he has his own. And the bedtime du'a is how we lend it.

> *In Your name, O Allah, I live and I die.* (Bukhari 6324, Muslim 2711)

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

> *Orang kuat bukanlah yang jago berkelahi, tapi yang menahan diri ketika marah.* (HR. Bukhari 6114, Muslim 2609)

Setelah reda, Umi peluk. Tidak ada ceramah. Mainannya tetap tidak dibeli — tapi Baby Mo belajar bahwa marahnya tidak menakutkan Umi, dan tidak juga menang.`,
      en: `Baby Mo wanted a toy off the shelf, Umi said no. He dropped straight to the shop floor, screaming. Every head turned. My face burned.

I used to just give in to end it fast. But this time I crouched, took a breath, and didn't catch his panic. I just said softly: "Mo is angry. Umi will stay with you until it passes." Then quiet. Accompanying, not fighting.

The storm took time, but it passed on its own. A two-year-old has no brakes for his emotions yet — the only brakes he has are ours. If we erupt too, that's two people in a storm. If we stay calm, he has something to hold.

> *The strong one is not the good wrestler; the strong one is he who controls himself when angry.* (Bukhari 6114, Muslim 2609)

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

> *"Amalan yang paling dicintai Allah adalah yang paling terus-menerus, walaupun sedikit."* (HR. Bukhari 6464, Muslim 783)

Membiarkan anak gagal dengan aman adalah salah satu bentuk sayang yang paling sulit. Tapi di situlah ketangguhan lahir — bukan di menara yang Abi susunkan.`,
      en: `Baby Mo stacked blocks. They fell. Stacked again. Fell again. Five times. Abi's hands itched to build him a neat one — but I held back.

Because if Abi builds it, all he learns is "when it's hard, call Abi." If he succeeds on his own on the sixth try, he learns "I can, if I try again." Two very different lessons from one block tower.

The sixth try held. Three blocks standing. Baby Mo clapped for himself, then turned to Abi for applause too. Abi clapped the loudest.

> *"The deeds most beloved to Allah are those done consistently, even if small."* (Bukhari 6464, Muslim 783)

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

> *Sebaik-baik kalian adalah yang paling bermanfaat bagi orang lain.* (HR. Ath-Thabrani dalam Al-Mu'jam Al-Ausath; dinilai hasan oleh Al-Albani)

Kue itu sedikit bantat. Tapi Baby Ais makan dengan bangga karena "Ais yang bikin." Dan jujur, itu kue terenak yang Umi makan minggu ini.`,
      en: `Umi was rushing to make batter. Baby Ais tugged at my apron, wanting in. The fast way: "later, Umi's busy." But I paused and thought.

I gave her a little bowl and a wooden spoon. "This is Ais's job: stir this one." The batter was a mess, flour everywhere, and the kitchen took twice as long. But Baby Ais's face — feeling useful — was priceless.

A child allowed to help grows up feeling "I'm part of this family, I have a role." A child always waved aside because "it's faster alone" grows up feeling like a spectator. Today's mess is an investment in tomorrow's sense of worth.

> *The best of people are those most beneficial to others.* (At-Tabarani, Al-Mu'jam Al-Awsat; graded hasan by Al-Albani)

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

> *Ya Allah, jadikanlah hujan ini hujan yang membawa manfaat.* (HR. Bukhari 1032)

Sepuluh menit kami cuma memandangi hujan. Tidak produktif sama sekali. Tapi mungkin itu sepuluh menit terbaik hari itu.`,
      en: `The rain came down hard this afternoon. Abi's reflex was to shut the window and get back to work. But Baby Mo and Baby Ais were already pressed to the glass, amazed. So I sat down between them.

I pointed at the droplets and said: "That's a gift from Allah, my loves. The water makes the trees grow, lets us drink." Then we said the rain du'a slowly. They didn't understand the words, but they understood rain is something to be grateful for, not annoyed by.

Children learn wonder from us. If we greet rain with "ugh, rain," they learn to complain. If we greet it with "masha'Allah, look," they learn to see Allah's signs in ordinary things.

> *O Allah, make it a beneficial rain.* (Bukhari 1032)

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

> *"Makanlah di antara rezeki yang baik-baik yang Kami berikan kepadamu, dan bersyukurlah kepada Allah."* (QS. Al-Baqarah: 172)

Sisa brokolinya? Tetap di piring. Tapi satu suap hari ini lebih berharga dari sepiring yang dipaksakan dengan air mata.`,
      en: `Broccoli on the plate, Baby Mo's mouth locked tight. I used to force it, and we'd both end up crying. This time Umi tried another way: I ate the broccoli myself first, saying "mmm, yummy."

Baby Mo watched. Curious. I didn't order, just offered one little floret: "Want to try just one?" He bit the tip. His face unsure, but he chewed. One bite. That was the victory.

Appetite can't be forced, only invited. A child forced to eat learns to hate the table; a child calmly offered learns that trying is safe. Umi didn't need him to finish a plate — I needed him to not be afraid to try.

> *"Eat from the good things We have provided for you, and be grateful to Allah."* (Qur'an, Al-Baqarah 2:172)

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

> *Jika salah seorang kalian bersin, ucapkanlah alhamdulillah.* (HR. Bukhari 6224)

Abi ucapkan "alhamdulillah" untuknya, dan wajah Baby Ais langsung lega — seperti lagu yang akhirnya selesai dengan pas.`,
      en: `Baby Ais gave a small sneeze. Then — this is what made Abi smile — she looked at me, waiting. Because every time she or Baby Mo sneezes, Abi always says "alhamdulillah" then "yarhamukillah".

She can't say it herself yet. But she's memorised the rhythm: sneeze, then a good word follows. She waits for that good word like waiting for the last part of her favourite song.

Tiny adab like this — alhamdulillah after a sneeze — is a gentle way of teaching a child that everything, even a sneeze, connects to Allah. This body is a trust, and we thank Him for how it works.

> *When one of you sneezes, let him say alhamdulillah.* (Bukhari 6224)

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

> *Ya Allah, sebagaimana Engkau perindah rupaku, perindahlah akhlakku.* (HR. Ahmad 3823; dinilai sahih oleh Al-Albani)

Mereka cuma ketawa lihat bayangan. Tapi Umi menanam satu kalimat: cantik dan ganteng itu dari Allah; baik hati itu yang kita usahakan.`,
      en: `Baby Mo and Baby Ais stood before the mirror, pointing at their reflections, laughing. They don't quite grasp it's themselves yet. Umi sat behind them and joined the reflection.

I whispered the mirror du'a: "O Allah, You have made my form good, so make my character good too." Then I told them: "Look, Allah made Mo and Ais this lovely. Now we ask for lovely hearts too."

The mirror teaches a child to look outward; this du'a teaches them to care about inward. Umi wants them to grow up knowing a face is a gift, but character is a choice — and the second matters far more.

> *O Allah, as You have beautified my form, beautify my character.* (Ahmad 3823; graded sahih by Al-Albani)

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

> *Ya Allah, bukakanlah untukku pintu-pintu rahmat-Mu.* (HR. Muslim 713)

Di perjalanan pulang Baby Mo masih menunjuk-nunjuk ke arah masjid. Abi berdoa dalam hati: semoga kamu selalu rindu pulang ke sana, Nak.`,
      en: `Abi took Baby Mo to the mosque for the first time. I didn't expect him to sit still and solemn — that's impossible for a two-year-old. I just wanted him to know: this is Allah's house, and you are welcome here.

We said the entering-the-mosque du'a at the door. Inside, Baby Mo gazed at the lights, the carpet, the high ceiling, amazed. A few times he made noise, and Abi just smiled apologetically at the worshippers nearby. It's okay. He has to feel welcome first, before being asked to be quiet.

A child scolded at the mosque in childhood grows up keeping his distance from it. A child welcomed warmly grows up feeling the mosque is home. Abi chose to plant love first; adab will follow with age.

> *O Allah, open for me the doors of Your mercy.* (Muslim 713)

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

> *Dan Dia bersama kalian di mana pun kalian berada.* (QS. Al-Hadid: 4)

Baby Mo cuma mengangguk seolah puas, lalu lanjut makan. Tapi Umi tahu, satu jari yang menunjuk langit tadi adalah awal dari percakapan seumur hidup.`,
      en: `Umi was saying "Allah loves Mo" while feeding him. Suddenly Baby Mo pointed up, at the ceiling, then looked at Umi as if asking: up there?

Umi paused. A big question from a very small finger. I didn't want to answer with complexity. I just said: "Allah is. Allah made Mo, Ais, the sky, everything. Allah sees us and loves us." Simple, honest, no overreach.

Children absorb the idea of Allah far earlier than we think. Our job isn't to explain it perfectly — that's impossible — but to plant the feeling that Allah is near, good, and loving. Security in Allah first; theology later.

> *And He is with you wherever you are.* (Qur'an, Al-Hadid 57:4)

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

> *Jibril terus berpesan kepadaku tentang tetangga, sampai aku mengira ia akan mewariskannya.* (HR. Bukhari 6014, Muslim 2624)

Dua biskuit, dua anak, satu teras kecil. Tapi Abi melihat akhlak besar sedang berlatih dalam tubuh yang sangat kecil.`,
      en: `On the porch, a neighbour's child the same age came to play. Baby Ais was holding a biscuit. Without Abi asking, she broke off half and gave it to her friend. Abi just watched from afar, stunned.

I never designed a lesson on "sharing with neighbours." But the kids absorb it from our table — we often send food to the neighbours, and they see it. What is seen repeatedly becomes what is done automatically.

Giving to a neighbour, even half a biscuit, is the seed of the hadith about a neighbour's rights. A child who grows up used to sharing with those nearby becomes an adult generous to the wider world.

> *Jibril kept advising me about the neighbour, until I thought he would make him an heir.* (Bukhari 6014, Muslim 2624)

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

> *Tidak ada penyakit yang Allah turunkan kecuali Dia turunkan pula obatnya.* (HR. Bukhari 5678)

Pagi-pagi demamnya turun. Baby Mo masih tidur miring menghadap saudarinya. Umi memandang keduanya dan diam-diam bersyukur: mereka punya satu sama lain.`,
      en: `Baby Ais had a fever all night, fussy, unable to sleep. What Umi didn't expect: Baby Mo wouldn't stay away from his sister. He brought his teddy, placed it beside Baby Ais, then sat keeping watch.

They're twins; the bond is different. But seeing Baby Mo — who usually fights with Ais over toys — suddenly that gentle, reminded Umi: beneath all the squabbling is a deep love they don't yet have a name for.

Umi stroked Baby Ais's forehead while reading the du'a for the sick. Baby Mo watched, then copied, stroking with his own hand. Empathy is contagious, even from parent to child to sibling in one night.

> *Allah has not sent down a disease without also sending down its cure.* (Bukhari 5678)

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

> *Kami berpagi hari dan kerajaan ini milik Allah.* (HR. Muslim 2723)

Setelah itu mereka langsung lari main, lupa segalanya. Tidak apa. Yang menanam bukan ingatan mereka — tapi pengulangan kami.`,
      en: `Early morning, before the house gets loud, Abi started a new habit. As soon as Baby Mo and Baby Ais wake, before screens, before anything, we sit a moment and say "alhamdulillah" for waking again today.

They're still half-asleep, hair a mess. But Abi believes: the first thing to touch a child's heart in the morning sets the colour of the day. I want the first thing they hear to be gratitude, not hurry.

The morning habit is an invisible anchor. A child whose day always opens by mentioning Allah grows up feeling the day belongs to Allah. Not a heavy ritual — just one sentence, every morning, until it becomes a pulse.

> *We have reached the morning and the dominion belongs to Allah.* (Muslim 2723)

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

> *Sesungguhnya Allah Maha Lembut dan mencintai kelembutan dalam segala hal.* (HR. Bukhari 6927, Muslim 2165)

Tangan kecil itu masih belajar. Tapi sekarang dia tahu tangannya punya tugas yang lebih baik daripada memukul.`,
      en: `When frustrated, Baby Mo hit — Umi, the floor, sometimes Baby Ais. I didn't hit back (that only teaches that the big may hit the small). I held his hand gently and said the same sentence every time: "Hands are for loving, not for hitting."

Then I showed the right version: "When Mo is upset, say it or stroke, like this." I demonstrated patting. A child forbidden without an alternative gets confused; a child shown the way out learns.

It took dozens of times. But yesterday, upset, Baby Mo raised his hand… then lowered it and hugged instead. Umi nearly cried. Gentleness, it turns out, can be taught, one calm sentence at a time.

> *Indeed Allah is Gentle and loves gentleness in all things.* (Bukhari 6927, Muslim 2165)

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
    surahs: ["al-ikhlas"],
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

> *Jika kalian bersyukur, niscaya akan Aku tambah nikmat untuk kalian.* (QS. Ibrahim: 7)

Lalu kami baca doa tidur, dan mereka terlelap. Hari ditutup bukan dengan kurang, tapi dengan cukup. Itu cara Abi mau mereka memandang dunia.`,
      en: `Every night before the sleep du'a, Abi started naming three things I'm grateful for today, out loud. "Alhamdulillah I was healthy today. Alhamdulillah I got to be with Mo and Ais. Alhamdulillah for good food."

At first they just listened. Then Baby Mo started joining in: "mam!" (food) — his version of gratitude. Baby Ais pointed at her teddy. They learn that even an ordinary day is full of things to be thankful for, if we're willing to count them.

Gratitude isn't a feeling that arrives on its own; it's a trained habit. A child invited to count blessings each night grows into someone who sees the glass half full. That's a lifelong gift, wrapped in a two-minute ritual.

> *If you are grateful, I will surely increase you.* (Qur'an, Ibrahim 14:7)

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

> *Ya Allah, Tuhan manusia, hilangkanlah penyakit dan sembuhkanlah.* (HR. Bukhari 5743, Muslim 2191)

Lima menit kemudian dia sudah ketawa lagi sambil pegang stiker. Tapi yang Umi harap dia ingat seumur hidup: saat takut, ada tangan yang menggenggam.`,
      en: `Vaccination day. Baby Mo saw the needle and clung to Umi. I didn't say "don't be scared" — because he had every right to be, and denying it only makes him feel alone.

I said: "It hurts for a moment, then it's done. Umi will hold you tight." I hugged him, whispered the du'a for protection softly in his ear. He still cried at the jab. But crying while held is different from crying while left alone.

Brave doesn't mean unafraid; brave means afraid but getting through it with someone alongside. Umi wants Baby Mo to grow up knowing he doesn't have to fake being strong — he just needs to know Umi always holds him when the hard thing comes.

> *O Allah, Lord of mankind, remove the harm and heal.* (Bukhari 5743, Muslim 2191)

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

> *Siapa yang ingin dilapangkan rezekinya, sambunglah silaturahmi.* (HR. Bukhari 5986, Muslim 2557)

Di perjalanan pulang keduanya tidur kelelahan, masih memegang oleh-oleh dari nenek. Abi berdoa: semoga lingkaran ini tidak pernah putus di tangan mereka.`,
      en: `On the weekend we went to Grandma's house. The moment the door opened, Baby Mo and Baby Ais ran straight into her arms, laughing. Grandma's face lit up like the sun. Abi stood behind, watching, his heart warm.

For Abi, this isn't just an outing. It teaches the children that family is a circle bigger than mum and dad. That there are elders to be honoured, visited, missed. That's a lesson in keeping family ties you can't teach with words, only with a car that sets off every week.

A child who grows up close to grandparents grows up with roots. They know where they come from, and know that family love flows upward and downward, not just sideways.

> *Whoever wishes for his provision to be expanded, let him keep the ties of kinship.* (Bukhari 5986, Muslim 2557)

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

> *Barang siapa tidak menyayangi manusia, tidak akan disayangi Allah.* (HR. Bukhari 7376, Muslim 2319)

Sekarang "to-yong" jadi kata kesukaannya, dipakai untuk segala hal. Dan Umi dengan senang hati mengabulkan — karena yang dia minta dengan cara baik, pantas dibalas dengan baik.`,
      en: `Baby Ais wanted a biscuit on the table. Her method: pointing and whining "eh, eh!" louder and louder. Umi didn't hand it over right away — not out of stinginess, but because whining mustn't become the way to get things.

I crouched and taught: "Say 'please', love." I demonstrated a soft voice. Baby Ais tried: "pwease." The moment that word came out, Umi handed her the biscuit with a big smile. She learned: a kind word opens more doors than crying.

The manner of asking politely is the earliest social provision. A child who learns "please" and "thank you" young grows into someone easy to love. Not because it's manipulative — but because respect is contagious.

> *Whoever does not show mercy to people, Allah will not show mercy to him.* (Bukhari 7376, Muslim 2319)

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
    slug: "apa-itu-alquran-untuk-anak",
    kind: "story",
    child: "mo",
    pose: "baby-mo-thank-you.png",
    published: "2026-06-23",
    title: { id: "Apa Itu Al-Qur'an?", en: "What Is the Qur'an?" },
    hook: {
      id: "Baby Mo melihat Abi memegang sebuah kitab dengan begitu hati-hati. \"Umi, buku apa itu? Kenapa istimewa sekali?\"",
      en: "Baby Mo watches Abi hold a book so carefully. \"Umi, what book is that? Why is it so special?\"",
    },
    body: {
      id: `Baby Mo memperhatikan Abi mencuci tangan, lalu mengambil sebuah kitab dari tempat yang tinggi, menaruhnya di atas bantalan kecil, dan membukanya dengan lembut sekali — seperti memegang sesuatu yang sangat berharga.

"Umi," bisik Baby Mo, "buku apa itu? Kenapa Abi hati-hati sekali?"

"Itu Al-Qur'an, sayang," kata Umi. "Al-Qur'an bukan buku biasa. Itu adalah firman Allah — kata-kata dari Allah sendiri untuk kita semua. Seperti surat cinta dan petunjuk, supaya kita tahu cara hidup yang baik."

"Kata-kata dari Allah?" Mata Baby Mo membulat. "Untuk aku juga?"

"Untuk semua orang. Tidak ada satu pun manusia yang bisa membuat kitab seindah ini. Makanya kita memuliakannya."

"Aku boleh pegang?" tanya Baby Mo penuh harap.

"Boleh, dengan cara yang baik." Maka Umi menuntunnya. Pertama, Baby Mo mencuci tangannya sampai bersih. Lalu dengan dua tangan, pelan-pelan, ia memegang Al-Qur'an seperti memegang seekor burung kecil yang rapuh.

Umi membacakan satu ayat pendek dengan suara merdu. Baby Mo mendengarkan, lalu menirukannya pelan-pelan. Kata-katanya terasa indah di lidahnya, walau ia belum mengerti semuanya. Ia mengulanginya sekali lagi, dan Umi tersenyum bangga.

Selesai membaca, Baby Mo menutup Al-Qur'an, lalu — tanpa diminta — menciumnya dengan lembut dan menaruhnya kembali di tempat yang tinggi dan bersih.

"Umi," katanya, "aku mau belajar membaca Al-Qur'an sampai bisa, biar aku ngerti semua suratnya."

Umi memeluknya. "Masya Allah. Tahukah kamu, orang yang belajar Al-Qur'an dan mengajarkannya adalah orang yang terbaik. Setiap satu huruf yang kamu baca, Allah memberi kebaikan."

Mata Baby Mo berbinar. Ternyata setiap huruf kecil pun berharga.

> *"Sebaik-baik kalian adalah orang yang belajar Al-Qur'an dan mengajarkannya."* (HR. Bukhari 5027)

Sekarang, ajak si kecil mendengar satu ayat pendek, lalu menirukannya. Awali dengan tangan bersih dan hati yang gembira. 📖`,
      en: `Baby Mo watched Abi wash his hands, then take a book down from a high place, set it on a small cushion, and open it ever so gently — like holding something very precious.

"Umi," Baby Mo whispered, "what book is that? Why is Abi so careful?"

"That's the Qur'an, dear," said Umi. "The Qur'an is no ordinary book. It is the word of Allah — words from Allah Himself, for all of us. Like a letter of love and guidance, so we know how to live well."

"Words from Allah?" Baby Mo's eyes went round. "For me too?"

"For everyone. No human being could ever make a book as beautiful as this. That's why we honour it."

"May I hold it?" Baby Mo asked hopefully.

"Yes, in a good way." So Umi guided him. First, Baby Mo washed his hands clean. Then with both hands, slowly, he held the Qur'an like holding a small, delicate bird.

Umi recited one short verse in a lovely voice. Baby Mo listened, then echoed it softly. The words felt beautiful on his tongue, even though he didn't understand them all yet. He repeated it once more, and Umi smiled proudly.

When the reading was done, Baby Mo closed the Qur'an, then — without being asked — kissed it gently and placed it back up high and clean.

"Umi," he said, "I want to learn to read the Qur'an properly, so I can understand all of it."

Umi hugged him. "Masha'Allah. Did you know, the one who learns the Qur'an and teaches it is among the very best of people? For every single letter you read, Allah gives a reward."

Baby Mo's eyes sparkled. So even every little letter was precious.

> *"The best of you are those who learn the Qur'an and teach it."* (Bukhari 5027)

Now, have your little one listen to one short verse, then echo it. Begin with clean hands and a happy heart. 📖`,
    },
    anchor: { type: "doa", slug: "minta-ilmu-bermanfaat" },
    takeaway: {
      id: "Al-Qur'an adalah firman Allah — petunjuk dan surat cinta untuk kita. Kita memuliakannya dengan tangan bersih, hati gembira, dan belajar membacanya.",
      en: "The Qur'an is Allah's word — guidance and a love-letter for us. We honour it with clean hands, a happy heart, and by learning to read it.",
    },
    tags: ["al-quran", "ilmu", "adab", "tanya-anak", "buku"],
    readingTimeMin: 3,
  },

  {
    slug: "kenapa-kita-berpuasa-untuk-anak",
    kind: "story",
    child: "mo",
    pose: "baby-mo-yeyy.png",
    published: "2026-06-23",
    title: { id: "Kenapa Kita Berpuasa?", en: "Why Do We Fast?" },
    hook: {
      id: "Baby Mo ingin ikut puasa seperti Abi. \"Tapi kenapa sih kita menahan lapar?\" Sebuah puasa setengah hari mengajarkannya jawabannya.",
      en: "Baby Mo wants to fast like Abi. \"But why do we hold back from food?\" A half-day fast teaches him the answer.",
    },
    body: {
      id: `Pagi-pagi sekali, Baby Mo melihat Abi dan Umi makan sahur. "Aku mau ikut puasa!" serunya bersemangat.

Abi tersenyum. "Boleh coba puasa setengah hari dulu, ya. Sampai zuhur."

Baby Mo mengangguk mantap. Pagi terasa mudah — ia sibuk bermain. Tapi menjelang siang, perutnya mulai berbunyi. Kruuuk. "Umi," rengeknya pelan, "lapar…"

Umi duduk di sebelahnya. "Nah, rasa lapar itu justru gurunya, sayang. Coba pikirkan: di luar sana ada anak-anak yang lapar bukan karena puasa, tapi karena tidak punya makanan. Saat kita puasa, kita ikut merasakannya. Jadi hati kita jadi lembut, dan kita ingin berbagi."

Baby Mo terdiam, memikirkan anak-anak itu. "Jadi puasa mengajari kita supaya sayang sama yang lapar?"

"Iya. Dan puasa juga melatih kita sabar dan menuruti Allah — menahan yang kita suka, demi cinta kepada-Nya."

Baby Mo memutuskan untuk bertahan. Untuk mengalihkan lapar, ia membantu Umi menyiapkan kurma dan air di meja untuk berbuka nanti. Ia menata gelas dengan rapi, dan diam-diam menyisihkan satu kotak makanan "untuk dibagi ke orang yang lapar".

Akhirnya azan zuhur berkumandang — waktunya berbuka untuk puasa setengah harinya! Baby Mo menggigit kurma pertamanya. Manisnya… luar biasa. Ia tidak pernah merasa kurma seenak ini.

"Umi! Kenapa makanannya jadi terasa jauh lebih enak?"

Umi tertawa lembut. "Itulah hadiah orang berpuasa: kebahagiaan saat berbuka. Setelah sabar menahan, semuanya terasa lebih nikmat dan lebih disyukuri."

Malam itu Baby Mo tidur dengan bangga. Hari ini ia belajar tiga hal sekaligus: sabar, syukur, dan sayang pada yang kekurangan.

> *"Orang yang berpuasa memiliki dua kebahagiaan: kebahagiaan ketika berbuka, dan kebahagiaan ketika berjumpa dengan Rabb-nya."* (HR. Bukhari 1904, Muslim 1151)

Sekarang, kalau si kecil ingin mencoba, mulai dari puasa setengah hari. Rayakan berbukanya, dan ajak berbagi satu makanan untuk yang membutuhkan. 🌙🍪`,
      en: `Very early in the morning, Baby Mo saw Abi and Umi eating the pre-dawn meal. "I want to fast too!" he cried eagerly.

Abi smiled. "You may try a half-day fast first, okay — until midday."

Baby Mo nodded firmly. The morning felt easy — he was busy playing. But as noon neared, his tummy began to rumble. Grrrr. "Umi," he whined softly, "I'm hungry…"

Umi sat beside him. "That hungry feeling is actually the teacher, dear. Think about it: out there are children who are hungry not from fasting, but because they have no food. When we fast, we feel a little of what they feel. So our hearts grow tender, and we want to share."

Baby Mo went quiet, thinking of those children. "So fasting teaches us to care for the hungry?"

"Yes. And fasting also trains us to be patient and to obey Allah — holding back from what we love, out of love for Him."

Baby Mo decided to hold on. To take his mind off his hunger, he helped Umi set out dates and water on the table for breaking the fast later. He arranged the cups neatly, and quietly set aside one food box "to share with someone who's hungry."

At last the midday call to prayer rang out — time to break his half-day fast! Baby Mo bit into his first date. The sweetness… was incredible. He had never tasted a date this good.

"Umi! Why does the food taste so much better?"

Umi laughed gently. "That's the gift of the one who fasts: the joy of breaking it. After patiently holding back, everything tastes nicer and is more appreciated."

That night Baby Mo slept proudly. Today he had learned three things at once: patience, gratitude, and love for those who have less.

> *"The fasting person has two joys: a joy when he breaks his fast, and a joy when he meets his Lord."* (Bukhari 1904, Muslim 1151)

Now, if your little one wants to try, start with a half-day fast. Celebrate the breaking, and share one food item with someone in need. 🌙🍪`,
    },
    anchor: { type: "doa", slug: "berbuka-puasa" },
    takeaway: {
      id: "Puasa mengajarkan tiga hal: sabar dan taat pada Allah, merasakan lapar agar sayang pada yang kekurangan, dan syukur lewat kebahagiaan berbuka.",
      en: "Fasting teaches three things: patience and obeying Allah, feeling hunger so we care for those in need, and gratitude through the joy of breaking it.",
    },
    tags: ["puasa", "ramadan", "sabar", "tanya-anak", "buku"],
    readingTimeMin: 3,
  },

  {
    slug: "apa-itu-rezeki-untuk-anak",
    kind: "story",
    child: "both",
    pose: "baby-mo-idea.png",
    published: "2026-06-23",
    title: { id: "Apa Itu Rezeki?", en: "What Is Rezeki?" },
    hook: {
      id: "Sambil makan, Baby Mo bertanya, \"Umi, nasi ini datang dari mana?\" Maka mereka menelusuri perjalanan sebutir nasi — sampai ke pemberinya.",
      en: "While eating, Baby Mo asks, \"Umi, where does this rice come from?\" So they trace the journey of a grain of rice — all the way to its Giver.",
    },
    body: {
      id: `Baby Mo menatap sesendok nasi di piringnya. "Umi, nasi ini datang dari mana sih?"

"Pertanyaan bagus! Ayo kita telusuri," kata Umi. "Nasi ini tadinya beras. Beras tadinya padi yang ditanam petani di sawah. Petani menanam benih kecil… lalu siapa yang menumbuhkannya?"

"Hujan!" jawab Baby Mo. "Dan matahari!"

"Betul. Dan siapa yang mengirim hujan dan matahari?"

"Allah," kata Baby Mo, mulai mengerti ke mana arah ceritanya.

"Nah. Jadi sebutir nasi di piringmu sebenarnya melewati perjalanan panjang — petani, tanah, hujan, matahari — dan semuanya diatur oleh Allah. Itulah yang namanya rezeki: setiap pemberian baik dari Allah."

Baby Mo memandangi nasinya dengan rasa kagum yang baru. "Berarti rezeki itu cuma makanan?"

"Bukan cuma makanan, sayang. Coba kita berburu rezeki!" Umi mengajaknya menghitung. "Rumah yang hangat — rezeki. Umi dan Abi yang sayang — rezeki. Mata yang sehat, kaki yang bisa berlari, Baby Ais sebagai teman — semuanya rezeki dari Allah."

Baby Mo menghitung dengan jarinya sampai kehabisan jari. Ternyata rezekinya banyak sekali!

"Dan karena rezeki itu pemberian Allah," lanjut Umi, "kita berterima kasih dengan mengucap Alhamdulillah, dan kita berbagi dengan yang lain."

Maka Baby Mo menyisihkan beberapa butir nasi dan remah roti, lalu menaburkannya di teras untuk burung-burung kecil. Tak lama, seekor burung pipit hinggap dan mematuknya dengan riang.

"Umi, lihat! Aku berbagi rezekiku!" serunya bahagia.

Umi mengusap kepalanya. "Masya Allah. Rezeki yang dibagi tidak pernah berkurang — malah makin berkah."

> *"Dan tidak ada satu makhluk melata pun di bumi melainkan Allah-lah yang menanggung rezekinya."* (QS. Hud: 6)

Sekarang, ajak si kecil berburu rezeki: hitung lima pemberian Allah hari ini, lalu ucapkan bersama, "Alhamdulillah." 🍚🐦`,
      en: `Baby Mo stared at a spoonful of rice on his plate. "Umi, where does this rice even come from?"

"Great question! Let's trace it," said Umi. "This rice was once raw grain. The grain came from rice plants a farmer grew in the field. The farmer planted a tiny seed… then who made it grow?"

"The rain!" answered Baby Mo. "And the sun!"

"Right. And who sends the rain and the sun?"

"Allah," said Baby Mo, beginning to see where the story was going.

"There you go. So one grain of rice on your plate actually went on a long journey — the farmer, the soil, the rain, the sun — and all of it was arranged by Allah. That's what rezeki is: every good gift from Allah."

Baby Mo looked at his rice with fresh wonder. "So rezeki is just food?"

"Not just food, dear. Let's go on a rezeki hunt!" Umi counted with him. "A warm home — rezeki. Umi and Abi who love you — rezeki. Healthy eyes, legs that can run, Baby Ais as a friend — all rezeki from Allah."

Baby Mo counted on his fingers until he ran out of fingers. It turned out he had so much rezeki!

"And because rezeki is a gift from Allah," Umi went on, "we say thank you with Alhamdulillah, and we share with others."

So Baby Mo set aside a few grains of rice and some bread crumbs, then scattered them on the porch for the little birds. Before long, a sparrow landed and pecked happily.

"Umi, look! I shared my rezeki!" he cried with joy.

Umi stroked his head. "Masha'Allah. Rezeki that is shared never decreases — it only grows more blessed."

> *"There is no creature on earth but that upon Allah is its provision."* (Qur'an, Hud 11:6)

Now, go on a rezeki hunt with your little one: count five of Allah's gifts today, then say together, "Alhamdulillah." 🍚🐦`,
    },
    anchor: { type: "doa", slug: "mendapat-rezeki" },
    takeaway: {
      id: "Rezeki adalah setiap pemberian baik dari Allah — bukan cuma makanan, tapi keluarga, kesehatan, dan teman. Kita syukuri dengan Alhamdulillah dan kita bagi.",
      en: "Rezeki is every good gift from Allah — not just food, but family, health, and friends. We thank Him with Alhamdulillah and we share it.",
    },
    tags: ["rezeki", "bersyukur", "berbagi", "tanya-anak", "buku"],
    readingTimeMin: 3,
  },

  {
    slug: "kenapa-harus-jujur-untuk-anak",
    kind: "story",
    child: "mo",
    pose: "baby-mo-ok.png",
    published: "2026-06-23",
    title: { id: "Kenapa Harus Jujur?", en: "Why Be Honest?" },
    hook: {
      id: "Sebuah gelas pecah, dan tidak ada yang melihat. Baby Mo hampir berbohong — sampai ia menemukan bahwa kejujuran membuat hati terasa ringan.",
      en: "A cup breaks, and no one saw. Baby Mo almost lies — until he discovers that honesty makes the heart feel light.",
    },
    body: {
      id: `Praang! Gelas itu terlepas dari tangan Baby Mo dan pecah di lantai. Jantungnya berdebar kencang. Ia melihat sekeliling — tidak ada siapa-siapa. Baby Ais sedang bermain di kamar.

Saat Umi datang dan bertanya, "Siapa yang memecahkan gelas?", sebuah pikiran melintas cepat di kepala Baby Mo: "Bilang saja Baby Ais…"

Mulutnya hampir berkata begitu. Tapi dadanya terasa berat, seperti ada batu kecil yang mengganjal. Ia teringat kata Umi, bahwa berbohong membuat hati jadi gelap.

Baby Mo menarik napas panjang. Lalu, dengan suara kecil tapi jujur, ia berkata, "Aku, Umi. Aku yang tidak sengaja memecahkannya. Maaf."

Sesuatu yang ajaib terjadi. Batu kecil di dadanya hilang. Hatinya terasa ringan, seperti dibersihkan.

Umi berlutut dan memeluknya. "Terima kasih sudah jujur, sayang. Gelas yang pecah bisa diganti. Tapi kejujuranmu jauh lebih berharga daripada seribu gelas."

"Umi nggak marah?"

"Sedikit pun tidak. Justru Umi bangga. Karena berani jujur itu lebih sulit daripada berbohong — dan kamu memilih yang sulit tapi benar." Umi tersenyum. "Lihat, kan? Jujur membuat hati lega dan bersih. Dan setiap kali kamu jujur, orang makin percaya padamu."

Mereka membereskan pecahan gelas bersama-sama. Anehnya, Baby Mo merasa lebih bahagia setelah mengakui kesalahannya daripada kalau ia menyembunyikannya.

Sejak hari itu, kalau Baby Mo berbuat salah, ia langsung mengakuinya. Karena ia sudah tahu rahasianya: kejujuran selalu menuntun pada kebaikan, dan hati yang jujur terasa ringan.

> *"Hendaklah kalian selalu jujur, karena kejujuran menuntun kepada kebaikan, dan kebaikan menuntun ke surga."* (HR. Bukhari 6094, Muslim 2607)

Sekarang, ceritakan pada si kecil: kalau berbuat salah, berani jujur itu hebat. Peluk dan puji setiap kali ia jujur — bukan dimarahi. 💙`,
      en: `Crash! The cup slipped from Baby Mo's hand and shattered on the floor. His heart pounded. He looked around — no one was there. Baby Ais was playing in her room.

When Umi came and asked, "Who broke the cup?", a thought darted quickly through Baby Mo's head: "Just say it was Baby Ais…"

His mouth almost said it. But his chest felt heavy, like a little stone was stuck there. He remembered Umi's words, that lying makes the heart go dark.

Baby Mo took a deep breath. Then, in a small but honest voice, he said, "It was me, Umi. I broke it by accident. I'm sorry."

Something magical happened. The little stone in his chest vanished. His heart felt light, as if it had been cleaned.

Umi knelt and hugged him. "Thank you for being honest, dear. A broken cup can be replaced. But your honesty is far more precious than a thousand cups."

"You're not angry, Umi?"

"Not in the least. In fact, I'm proud. Because daring to be honest is harder than lying — and you chose the hard but right thing." Umi smiled. "See? Honesty makes the heart light and clean. And every time you're honest, people trust you more."

They cleaned up the broken cup together. Strangely, Baby Mo felt happier after owning up to his mistake than if he had hidden it.

From that day on, whenever Baby Mo did something wrong, he admitted it right away. Because he knew the secret now: honesty always leads to good, and an honest heart feels light.

> *"Hold fast to truthfulness, for truthfulness leads to goodness, and goodness leads to Paradise."* (Bukhari 6094, Muslim 2607)

Now, tell your little one: if you make a mistake, being brave and honest is wonderful. Hug and praise them each time they're honest — not scold. 💙`,
    },
    anchor: { type: "parenting", slug: "anak-bohong" },
    takeaway: {
      id: "Jujur kadang lebih sulit daripada berbohong, tapi ia membuat hati ringan dan bersih, dan membuat orang makin percaya. Kejujuran selalu menuntun pada kebaikan.",
      en: "Honesty is sometimes harder than lying, but it makes the heart light and clean, and earns trust. Truthfulness always leads to goodness.",
    },
    tags: ["jujur", "akhlak", "kejujuran", "tanya-anak", "buku"],
    readingTimeMin: 3,
  },

  {
    slug: "kenapa-sayang-orang-tua-untuk-anak",
    kind: "story",
    child: "mo",
    pose: "baby-mo-pose-15.png",
    published: "2026-06-23",
    title: { id: "Kenapa Kita Sayang Orang Tua?", en: "Why Do We Love Our Parents?" },
    hook: {
      id: "\"Umi, kenapa aku harus sayang dan nurut sama Umi dan Abi?\" Lewat satu misi kecil, Baby Mo menemukan betapa besar cinta orang tuanya.",
      en: "\"Umi, why should I love and obey Umi and Abi?\" Through one little mission, Baby Mo discovers just how big his parents' love is.",
    },
    body: {
      id: `Suatu malam Baby Mo bertanya, "Umi, kenapa sih aku harus sayang dan nurut sama Umi dan Abi?"

Umi tidak langsung menjawab. Ia justru mengajak Baby Mo bermain "misi detektif cinta". "Ayo kita hitung: apa saja yang Umi dan Abi lakukan untukmu setiap hari?"

Baby Mo mulai berpikir, dan menghitung dengan jarinya. "Umi memasak untukku… Abi bekerja supaya aku punya rumah dan mainan… Umi menjagaku waktu aku sakit… Abi menggendongku waktu aku capek… kalian membacakan cerita sebelum tidur…"

Jarinya habis, tapi daftarnya belum selesai. Baby Mo terdiam. Ternyata begitu banyak.

"Dan tahukah kamu," kata Umi lembut, "Umi dan Abi melakukan semua itu bukan supaya dibayar. Kami melakukannya karena sayang. Dulu, saat kamu masih bayi mungil dan belum bisa apa-apa, kami yang merawatmu siang dan malam."

Mata Baby Mo berkaca-kaca. "Sebanyak itu…"

"Karena itulah Allah menyuruh kita berbakti dan menyayangi orang tua. Bahkan Allah berfirman agar kita berbuat baik kepada mereka. Ridha Allah ada pada ridha orang tua."

Baby Mo melompat berdiri. "Kalau begitu, aku juga mau melakukan misi cinta untuk Umi dan Abi!"

Maka ia mulai beraksi. Ia membantu membereskan piring. Ia memijat lengan Abi yang lelah dengan tangan mungilnya. Lalu, sebelum tidur, ia menengadahkan tangannya dan berdoa, "Ya Allah, sayangilah Umi dan Abi seperti mereka menyayangiku waktu aku kecil."

Umi dan Abi berpandangan, dan mata mereka basah. Doa kecil itu adalah hadiah paling indah malam itu.

> *"Ridha Allah ada pada ridha orang tua, dan murka Allah ada pada murka orang tua."* (HR. Tirmidzi 1899)

Sekarang, ajak si kecil membuat "misi cinta" untuk orang tua: satu bantuan, satu pelukan, dan satu doa — "Rabbighfirli wa liwalidayya." 🏡💛`,
      en: `One night Baby Mo asked, "Umi, why do I have to love and obey Umi and Abi?"

Umi didn't answer right away. Instead she invited Baby Mo to play a "love detective mission." "Let's count: what do Umi and Abi do for you every day?"

Baby Mo began to think, counting on his fingers. "Umi cooks for me… Abi works so I have a home and toys… Umi looks after me when I'm sick… Abi carries me when I'm tired… you read me stories before bed…"

He ran out of fingers, but the list wasn't finished. Baby Mo went quiet. It turned out to be so much.

"And do you know," Umi said gently, "Umi and Abi do all of that not to be paid. We do it out of love. Long ago, when you were a tiny baby who couldn't do anything yet, we cared for you day and night."

Baby Mo's eyes glistened. "That much…"

"That's why Allah commands us to honour and love our parents. Allah even tells us to be good to them. The pleasure of Allah lies in the pleasure of one's parents."

Baby Mo jumped to his feet. "Then I want to do a love mission for Umi and Abi too!"

So he sprang into action. He helped clear the dishes. He massaged Abi's tired arm with his tiny hands. Then, before bed, he raised his hands and prayed, "O Allah, love Umi and Abi the way they loved me when I was small."

Umi and Abi looked at each other, their eyes wet. That little prayer was the most beautiful gift of the night.

> *"The Lord's pleasure is in the parent's pleasure, and the Lord's displeasure is in the parent's displeasure."* (Tirmidzi 1899)

Now, invite your little one to do a "love mission" for their parents: one act of help, one hug, and one prayer — "Rabbighfirli wa liwalidayya." 🏡💛`,
    },
    anchor: { type: "doa", slug: "doa-untuk-orang-tua" },
    takeaway: {
      id: "Orang tua merawat kita dengan cinta tanpa minta balasan. Karena itu kita berbakti dan menyayangi mereka — sebab ridha Allah ada pada ridha orang tua.",
      en: "Parents care for us with love, asking nothing back. So we honour and love them — for Allah's pleasure lies in our parents' pleasure.",
    },
    tags: ["orang-tua", "berbakti", "keluarga", "tanya-anak", "buku"],
    readingTimeMin: 3,
  },

  // ═══════════════════════════════════════════════════════════════════
  {
    slug: "siapa-yang-menciptakan-aku",
    kind: "story",
    child: "mo",
    pose: "baby-mo-ok.png",
    published: "2026-06-23",
    title: { id: "Siapa yang Menciptakan Aku?", en: "Who Created Me?" },
    hook: {
      id: "Di depan cermin, Baby Mo bertanya, \"Umi, siapa yang membuat aku?\" Maka mereka main \"penjelajah tubuh\" — menemukan betapa ajaibnya ciptaan Allah.",
      en: "In front of the mirror, Baby Mo asks, \"Umi, who made me?\" So they play \"body explorer\" — discovering how amazing Allah's creation is.",
    },
    body: {
      id: `Pagi itu Baby Mo berdiri di depan cermin, memiringkan kepala ke kiri dan ke kanan. "Umi," tanyanya, "siapa yang membuat aku? Mataku, tanganku, semuanya?"

Umi berlutut di belakangnya, ikut memandang cermin. "Allah, sayang. Allah yang menciptakanmu dengan sebaik-baik bentuk. Mau buktikan betapa hebatnya buatan Allah? Ayo main penjelajah tubuh!"

"Penjelajah tubuh?" Mata Baby Mo berbinar.

"Pos pertama: mata." Umi menutup matanya sendiri dengan tangan. "Coba pejamkan matamu. Gelap, kan? Sekarang buka." Baby Mo membuka mata, dan dunia kembali penuh warna. "Allah memberimu mata untuk melihat semua keindahan."

"Pos kedua: telinga." Umi berbisik sangat pelan, "Baby Mo sayang Umi." Baby Mo terkikik — ia mendengarnya! "Allah memberimu telinga untuk mendengar suara sayang."

"Pos ketiga: tangan." Baby Mo menggoyangkan sepuluh jarinya, lalu memegang gelas, lalu memeluk Umi erat-erat. "Allah memberimu tangan untuk bekerja dan memeluk."

"Pos terakhir," kata Umi, menempelkan tangan Baby Mo ke dadanya. Dug… dug… dug… "Jantung kecil yang berdetak tanpa pernah kamu suruh. Bahkan saat kamu tidur, ia terus bekerja. Hanya Allah yang bisa membuat yang seajaib itu."

Baby Mo menatap pantulannya di cermin dengan kagum, seakan baru berkenalan dengan dirinya sendiri. "Wah… aku ini buatan Allah."

"Iya, sayang. Dan karena Allah membuatmu dengan begitu sayang, kita berterima kasih dengan cara menjaganya dan memakainya untuk kebaikan."

Malam itu, sebelum tidur, Baby Mo berbisik, "Terima kasih, Allah, sudah membuat aku."

> *"Sungguh, Kami telah menciptakan manusia dalam bentuk yang sebaik-baiknya."* (QS. At-Tin: 4)

Sekarang, main penjelajah tubuh bareng si kecil: tunjuk mata, telinga, tangan, dan dada, lalu ucapkan, "Terima kasih, Allah." 👀👂✋💓`,
      en: `That morning Baby Mo stood in front of the mirror, tilting his head left and right. "Umi," he asked, "who made me? My eyes, my hands, all of it?"

Umi knelt behind him, looking into the mirror too. "Allah, dear. Allah created you in the very best form. Want to see how amazing Allah's work is? Let's play body explorer!"

"Body explorer?" Baby Mo's eyes sparkled.

"Station one: eyes." Umi covered her own eyes with her hands. "Close your eyes. It's dark, right? Now open them." Baby Mo opened his eyes, and the world was full of colour again. "Allah gave you eyes to see all this beauty."

"Station two: ears." Umi whispered very softly, "Baby Mo loves Umi." Baby Mo giggled — he heard it! "Allah gave you ears to hear loving words."

"Station three: hands." Baby Mo wiggled all ten fingers, then held a cup, then hugged Umi tight. "Allah gave you hands to work and to hug."

"Last station," said Umi, pressing Baby Mo's hand to his chest. Thump… thump… thump… "A little heart that beats without you ever telling it to. Even while you sleep, it keeps working. Only Allah can make something that wonderful."

Baby Mo stared at his reflection in awe, as if meeting himself for the first time. "Wow… I'm made by Allah."

"Yes, dear. And because Allah made you with such love, we thank Him by taking care of ourselves and using ourselves for good."

That night, before sleep, Baby Mo whispered, "Thank you, Allah, for making me."

> *"We have certainly created man in the best of forms."* (Qur'an, At-Tin 95:4)

Now, play body explorer with your little one: point to eyes, ears, hands, and chest, then say, "Thank you, Allah." 👀👂✋💓`,
    },
    anchor: { type: "parenting", slug: "bersyukur" },
    takeaway: {
      id: "Allah menciptakan kita dengan sebaik-baik bentuk — mata, telinga, tangan, dan jantung yang berdetak. Cara berterima kasih: menjaganya dan memakainya untuk kebaikan.",
      en: "Allah made us in the best form — eyes, ears, hands, a beating heart. We give thanks by caring for ourselves and using ourselves for good.",
    },
    tags: ["allah", "ciptaan", "bersyukur", "tanya-anak", "buku"],
    readingTimeMin: 3,
  },

  {
    slug: "apa-itu-malaikat-untuk-anak",
    kind: "story",
    child: "mo",
    pose: "baby-mo-idea.png",
    published: "2026-06-23",
    title: { id: "Apa Itu Malaikat?", en: "What Are Angels?" },
    hook: {
      id: "\"Umi, apa itu malaikat? Kenapa aku tidak bisa melihatnya?\" Baby Mo belajar bahwa ada teman-teman baik yang tak terlihat — selalu mencatat kebaikannya.",
      en: "\"Umi, what are angels? Why can't I see them?\" Baby Mo learns there are kind, unseen friends — always writing down his good deeds.",
    },
    body: {
      id: `Sehabis mendengar kata "malaikat" dalam sebuah doa, Baby Mo bertanya, "Umi, apa itu malaikat? Kenapa aku tidak pernah melihatnya?"

Umi mengajaknya ke jendela. "Coba lihat ke luar. Kamu bisa lihat angin?"

Baby Mo memicingkan mata. "Tidak… tapi aku bisa lihat daun yang bergoyang!"

"Nah, begitu juga malaikat," kata Umi. "Allah menciptakan mereka dari cahaya. Kita tidak bisa melihatnya, tapi mereka ada, selalu taat melakukan perintah Allah. Ada malaikat yang menjaga, ada yang menyampaikan rahmat… dan ada dua malaikat istimewa yang selalu menemani setiap anak."

"Dua malaikat? Menemani aku?" Baby Mo melihat ke bahu kiri dan kanannya.

"Iya. Yang di kanan mencatat setiap kebaikanmu, dan yang di kiri mencatat kesalahan. Jadi setiap kali kamu berbuat baik…" Umi pura-pura menulis di udara, "…sret! Tercatat sebagai bintang kebaikan."

Mata Baby Mo membulat. Lalu, diam-diam, ia punya rencana.

Sepanjang hari itu, ia berbuat banyak kebaikan — membereskan mainan, berbagi biskuit, mengucap terima kasih. Dan setiap kali, ia berbisik kecil sambil tersenyum, "Tolong dicatat, ya."

Saat ia hampir marah pada Baby Ais yang merebut krayonnya, Baby Mo berhenti. Ia ingat malaikat di kiri yang siap mencatat. Ia menarik napas, lalu berkata pelan, "Nggak apa-apa, Ais, pakai dulu." Dan ia merasa lega.

Menjelang tidur, Baby Mo berkata, "Umi, walaupun aku tidak bisa melihat mereka, mereka melihatku. Jadi aku mau jadi anak baik — biar buku kebaikanku penuh."

Umi mencium keningnya. "Masya Allah, sayang. Itulah hadiah dari percaya pada yang gaib: kita jadi baik, bahkan saat tak ada yang terlihat menonton."

> *"Bagi manusia ada malaikat-malaikat yang selalu menjaganya secara bergiliran, di depan dan di belakangnya, atas perintah Allah."* (QS. Ar-Ra'd: 11)

Sekarang, ajak si kecil: setiap kali berbuat baik hari ini, bisikkan, "Tolong dicatat, ya." Lihat berapa banyak kebaikan yang bisa terkumpul. ✨`,
      en: `After hearing the word "angels" in a dua, Baby Mo asked, "Umi, what are angels? Why have I never seen them?"

Umi led him to the window. "Look outside. Can you see the wind?"

Baby Mo squinted. "No… but I can see the leaves swaying!"

"That's just like the angels," said Umi. "Allah created them from light. We can't see them, but they're there, always obeying Allah's commands. Some angels protect us, some bring mercy… and two special angels always stay with every child."

"Two angels? With me?" Baby Mo glanced at his left and right shoulders.

"Yes. The one on the right writes down every good thing you do, and the one on the left writes down mistakes. So every time you do good…" Umi pretended to write in the air, "…swish! Recorded as a star of goodness."

Baby Mo's eyes went round. Then, quietly, he had a plan.

All that day, he did lots of good — tidying toys, sharing a biscuit, saying thank you. And each time, he whispered with a little smile, "Please write that down."

When he was about to get angry at Baby Ais for grabbing his crayon, Baby Mo stopped. He remembered the angel on the left, ready to write. He took a breath, then said gently, "It's okay, Ais, you use it first." And he felt relieved.

At bedtime, Baby Mo said, "Umi, even though I can't see them, they can see me. So I want to be a good boy — to fill up my book of good deeds."

Umi kissed his forehead. "Masha'Allah, dear. That's the gift of believing in the unseen: we become good, even when no one visible is watching."

> *"For each person there are angels in succession, before and behind him, who protect him by the command of Allah."* (Qur'an, Ar-Ra'd 13:11)

Now, invite your little one: each time you do good today, whisper, "Please write that down." See how many good deeds you can gather. ✨`,
    },
    anchor: { type: "parenting", slug: "adab-sehari-hari" },
    takeaway: {
      id: "Malaikat adalah ciptaan Allah dari cahaya yang tak terlihat namun selalu taat. Dua malaikat mencatat amal kita — jadi kita berbuat baik walau tak ada yang terlihat menonton.",
      en: "Angels are Allah's creation of light — unseen yet always obedient. Two angels record our deeds, so we do good even when no one visible is watching.",
    },
    tags: ["malaikat", "iman", "akhlak", "tanya-anak", "buku"],
    readingTimeMin: 3,
  },

  {
    slug: "kenapa-harus-berbagi-untuk-anak",
    kind: "story",
    child: "both",
    pose: "baby-mo-pose-15.png",
    published: "2026-06-23",
    title: { id: "Kenapa Harus Berbagi?", en: "Why Should I Share?" },
    hook: {
      id: "Baby Mo punya dua biskuit dan tidak mau berbagi. Tapi sebuah percobaan kecil mengajarkannya rahasia: kebahagiaan yang dibagi malah bertambah.",
      en: "Baby Mo has two biscuits and doesn't want to share. But a little experiment teaches him a secret: happiness shared only grows.",
    },
    body: {
      id: `Baby Mo memegang dua biskuit cokelat erat-erat di dadanya. Baby Ais memandanginya dengan mata besar penuh harap.

"Ini punyaku," kata Baby Mo cepat. "Semua."

Umi tidak memarahinya. Ia justru duduk dan berkata, "Baby Mo, Umi punya percobaan seru. Mau coba?"

Baby Mo penasaran. "Percobaan apa?"

"Coba makan satu biskuit sendirian, di pojok sana. Lalu rasakan: seberapa senang?"

Baby Mo pergi ke pojok dan memakan satu biskuit. Enak… tapi sepi. Baby Ais hanya memandang dari jauh. Entah kenapa, biskuitnya terasa kurang manis.

"Sekarang," kata Umi lembut, "yang satu lagi, coba bagi dua dengan Baby Ais. Lalu rasakan lagi."

Baby Mo ragu sebentar. Lalu ia mematahkan biskuit terakhirnya — krak! — dan memberikan separuhnya kepada Baby Ais.

Wajah Baby Ais langsung berseri. "Tewima katih, Kakak!" serunya, lalu memeluk Baby Mo. Mereka mengunyah bersama, saling pandang, dan tertawa.

Dan… ajaib. Setengah biskuit yang ini terasa jauh lebih nikmat daripada satu biskuit utuh tadi.

Baby Mo terdiam, lalu berkata pelan, "Umi… kok yang dibagi malah terasa lebih enak?"

Umi tersenyum. "Itulah rahasianya, sayang. Saat kita berbagi, kita tidak kehilangan kebahagiaan — kebahagiaannya malah jadi dua. Dan Allah sayang pada orang yang suka berbagi. Memberi tidak pernah membuat kita berkurang."

Sejak hari itu, kalau Baby Mo punya sesuatu yang enak, matanya langsung mencari Baby Ais. Karena ia sudah tahu rahasianya: berbagi membuat segala sesuatu terasa lebih manis.

> *"Setiap kebaikan adalah sedekah."* (HR. Bukhari 6021, Muslim 1005)

Sekarang, coba percobaan berbagi bareng si kecil: satu camilan dibagi berdua. Tanyakan, "Lebih enak yang mana?" 🍪💞`,
      en: `Baby Mo clutched two chocolate biscuits tight to his chest. Baby Ais watched him with big, hopeful eyes.

"These are mine," Baby Mo said quickly. "All of them."

Umi didn't scold him. Instead she sat down and said, "Baby Mo, I have a fun experiment. Want to try?"

Baby Mo was curious. "What experiment?"

"Eat one biscuit by yourself, over in that corner. Then notice: how happy do you feel?"

Baby Mo went to the corner and ate one biscuit. Tasty… but lonely. Baby Ais just watched from afar. Somehow, the biscuit felt less sweet.

"Now," Umi said gently, "the other one — try splitting it in half with Baby Ais. Then notice again."

Baby Mo hesitated a moment. Then he snapped his last biscuit — crack! — and gave half to Baby Ais.

Baby Ais's face lit up at once. "Tank you, broder!" she cried, then hugged Baby Mo. They munched together, looked at each other, and laughed.

And… how strange. This half a biscuit tasted far nicer than the whole one before.

Baby Mo went quiet, then said softly, "Umi… why does the shared one taste even better?"

Umi smiled. "That's the secret, dear. When we share, we don't lose our happiness — it actually doubles. And Allah loves those who love to share. Giving never makes us less."

From that day on, whenever Baby Mo had something nice, his eyes searched for Baby Ais. Because he knew the secret now: sharing makes everything taste sweeter.

> *"Every act of goodness is charity."* (Bukhari 6021, Muslim 1005)

Now, try the sharing experiment with your little one: split one snack between two. Ask, "Which one tasted better?" 🍪💞`,
    },
    anchor: { type: "parenting", slug: "anak-tidak-mau-berbagi" },
    takeaway: {
      id: "Berbagi tidak membuat kita kekurangan — kebahagiaan yang dibagi justru jadi dua, dan Allah menambah keberkahan bagi yang suka memberi.",
      en: "Sharing doesn't leave us with less — happiness shared doubles, and Allah adds blessing for those who love to give.",
    },
    tags: ["berbagi", "sedekah", "akhlak", "tanya-anak", "buku"],
    readingTimeMin: 3,
  },

  {
    slug: "ke-mana-kita-saat-tidur",
    kind: "story",
    child: "mo",
    pose: "baby-mo-alright.png",
    published: "2026-06-23",
    title: { id: "Ke Mana Kita Saat Tidur?", en: "Where Do We Go When We Sleep?" },
    hook: {
      id: "Di bawah selimut, Baby Mo bertanya, \"Umi, kita pergi ke mana waktu tidur?\" Maka ia belajar bahwa tidur adalah hadiah istirahat — dan pagi adalah hadiah hidup yang baru.",
      en: "Under the blanket, Baby Mo asks, \"Umi, where do we go when we sleep?\" And he learns that sleep is a gift of rest — and morning is the gift of a new day.",
    },
    body: {
      id: `Malam sudah larut. Lampu kamar redup, dan bintang-bintang mengintip dari balik tirai. Baby Mo menarik selimut sampai ke dagu, lalu bertanya, "Umi, kita pergi ke mana sih waktu tidur? Kenapa aku tidak ingat apa-apa?"

Umi duduk di tepi tempat tidur. "Pertanyaan yang dalam sekali, sayang. Begini: setiap malam, Allah memberi kita hadiah bernama istirahat. Tubuh kita yang lelah seharian dibiarkan beristirahat, dan Allah yang menjaga kita sepanjang malam."

"Allah menjaga aku… walaupun aku tidur?"

"Selalu. Allah tidak pernah mengantuk dan tidak pernah tidur. Saat matamu terpejam, Dia tetap menjagamu." Umi mengusap rambutnya. "Tidur itu sedikit seperti dititipkan dengan aman. Lalu pagi datang, mata kita terbuka lagi, dan itu… seperti hadiah hidup yang baru."

Baby Mo memikirkannya. "Jadi setiap pagi aku dapat hadiah?"

"Iya. Makanya saat bangun nanti, kita ucapkan terima kasih: 'Alhamdulillah, yang telah menghidupkan aku kembali setelah mematikan aku.' Sekarang, sebelum dititipkan, kita baca doa tidur, ya."

Bersama-sama mereka berbisik doa sebelum tidur. Baby Mo merapatkan matanya, merasa hangat dan aman, seperti dipeluk dari segala arah.

"Selamat beristirahat, jagoan," bisik Umi. "Sampai jumpa di pagi yang baru."

Esok paginya, cahaya masuk lembut lewat jendela. Baby Mo membuka mata, meregangkan tangannya, dan — ia ingat. Sambil tersenyum mengantuk ia berkata, "Alhamdulillah… aku dapat hari baru lagi!"

> *"Dan Kami jadikan tidurmu untuk istirahat."* (QS. An-Naba': 9)

Sekarang, tutup hari bersama si kecil dengan doa tidur, dan buka pagi dengan satu ucapan: "Alhamdulillah, hari baru!" 🌙⭐`,
      en: `It was late. The bedroom light was dim, and stars peeked through the curtains. Baby Mo pulled the blanket up to his chin and asked, "Umi, where do we go when we sleep? Why don't I remember anything?"

Umi sat on the edge of the bed. "What a deep question, dear. Here's how it is: every night, Allah gives us a gift called rest. Our body, tired from the whole day, gets to rest, and Allah watches over us all night long."

"Allah watches me… even when I'm asleep?"

"Always. Allah never gets drowsy and never sleeps. When your eyes are closed, He still keeps you safe." Umi stroked his hair. "Sleep is a little like being placed somewhere safe for keeping. Then morning comes, our eyes open again, and that… is like the gift of a brand-new life."

Baby Mo thought about it. "So every morning I get a gift?"

"Yes. That's why when you wake, we say thank you: 'Alhamdulillah, the One who gave me life after taking it.' Now, before we're placed in safekeeping, let's read the sleeping dua."

Together they whispered the dua before sleep. Baby Mo closed his eyes tight, feeling warm and safe, as if hugged from every side.

"Rest well, champ," whispered Umi. "See you in a new morning."

The next morning, light slipped softly through the window. Baby Mo opened his eyes, stretched his arms, and — he remembered. With a sleepy smile he said, "Alhamdulillah… I got a new day again!"

> *"And We made your sleep a means of rest."* (Qur'an, An-Naba' 78:9)

Now, close the day with your little one with the sleeping dua, and open the morning with one phrase: "Alhamdulillah, a new day!" 🌙⭐`,
    },
    anchor: { type: "doa", slug: "sebelum-tidur" },
    takeaway: {
      id: "Tidur adalah hadiah istirahat; Allah yang Maha Menjaga tak pernah tidur. Pagi adalah hadiah hidup baru — sambut dengan Alhamdulillah.",
      en: "Sleep is a gift of rest; Allah, the Ever-Watchful, never sleeps. Morning is the gift of new life — greet it with Alhamdulillah.",
    },
    tags: ["tidur", "doa", "tawakal", "tanya-anak", "buku"],
    readingTimeMin: 3,
  },

  {
    slug: "siapa-yang-membuat-hujan",
    kind: "story",
    child: "both",
    pose: "baby-mo-yeyy.png",
    published: "2026-06-23",
    title: { id: "Siapa yang Membuat Hujan?", en: "Who Makes the Rain?" },
    hook: {
      id: "Saat hujan turun, Baby Mo menempelkan wajahnya ke jendela. \"Umi, siapa yang mengirim hujan?\" Lalu ia melihat sendiri bagaimana hujan adalah kasih sayang Allah.",
      en: "As the rain falls, Baby Mo presses his face to the window. \"Umi, who sends the rain?\" Then he sees for himself how rain is Allah's mercy.",
    },
    body: {
      id: `Tetes pertama jatuh — tik. Lalu tik-tik-tik, dan sebentar saja hujan turun rapat di luar. Baby Mo dan Baby Ais menempelkan hidung mereka ke kaca jendela.

"Umi! Siapa sih yang mengirim hujan sebanyak ini?" tanya Baby Mo.

"Allah, sayang," kata Umi. "Allah menggiring awan, lalu menurunkan hujan dari langit. Dan tahukah kamu? Hujan itu salah satu tanda kasih sayang Allah."

"Kasih sayang? Tapi kan jadi becek," kata Baby Mo sambil cemberut kecil.

"Yuk kita lihat ke mana perginya air hujan," ajak Umi.

Mereka memakai jas hujan dan keluar ke teras. Baby Mo menengadahkan tangannya dan menampung tetes-tetes hujan yang dingin dan segar. Ia melihat air mengalir membasahi tanah, lalu memandang pot kacang hijaunya — daun-daunnya tampak lebih hijau dan segar, seakan sedang minum dengan gembira.

"Lihat," kata Umi. "Tanpa hujan, tanaman layu, sungai kering, dan kita tidak punya air untuk minum. Lewat satu hujan, Allah memberi minum pada bunga, pohon, hewan, dan manusia — semuanya sekaligus."

Mata Baby Mo membulat. "Jadi hujan itu hadiah buat semua makhluk?"

"Betul sekali. Makanya saat hujan turun, kita berdoa: 'Ya Allah, jadikanlah hujan ini hujan yang bermanfaat.'"

Baby Mo menengadah ke langit kelabu, membiarkan satu tetes jatuh di pipinya, lalu tersenyum lebar. "Terima kasih, Allah, sudah memberi minum bunga-bungaku."

Sejak hari itu, Baby Mo tidak lagi cemberut saat hujan. Ia tahu, di balik tetes-tetes itu ada kasih sayang yang sedang turun dari langit.

> *"Dan Allah menurunkan air dari langit, lalu dengan air itu dihidupkan-Nya bumi sesudah matinya."* (QS. An-Nahl: 65)

Sekarang, saat hujan berikutnya, ajak si kecil menampung setetes di tangan dan berdoa, "Ya Allah, hujan yang bermanfaat." 🌧️🌱`,
      en: `The first drop fell — tap. Then tap-tap-tap, and in no time the rain came down thick outside. Baby Mo and Baby Ais pressed their noses to the window glass.

"Umi! Who sends down all this rain?" asked Baby Mo.

"Allah, dear," said Umi. "Allah drives the clouds, then sends rain from the sky. And do you know what? Rain is one of the signs of Allah's mercy."

"Mercy? But it gets all muddy," said Baby Mo with a little pout.

"Let's go see where the rainwater goes," Umi invited.

They put on raincoats and stepped onto the porch. Baby Mo held up his hands and caught the cool, fresh drops. He watched the water flow and soak the soil, then looked at his mung-bean pot — the leaves looked greener and fresher, as if drinking happily.

"See," said Umi. "Without rain, plants wilt, rivers dry up, and we'd have no water to drink. Through one rainfall, Allah gives a drink to flowers, trees, animals, and people — all at once."

Baby Mo's eyes went round. "So rain is a gift for all creatures?"

"Exactly. That's why when it rains, we pray: 'O Allah, make this a beneficial rain.'"

Baby Mo looked up at the grey sky, let one drop land on his cheek, then beamed. "Thank you, Allah, for giving my flowers a drink."

From that day on, Baby Mo no longer pouted at the rain. He knew that behind those drops was a mercy coming down from the sky.

> *"And Allah sends down water from the sky and gives life thereby to the earth after its death."* (Qur'an, An-Nahl 16:65)

Now, at the next rain, invite your little one to catch a drop in their hand and pray, "O Allah, a beneficial rain." 🌧️🌱`,
    },
    anchor: { type: "doa", slug: "ketika-hujan" },
    takeaway: {
      id: "Hujan adalah kasih sayang Allah yang memberi minum bunga, pohon, hewan, dan manusia sekaligus. Sambut dengan doa, bukan keluhan.",
      en: "Rain is Allah's mercy, giving a drink to flowers, trees, animals, and people all at once. Greet it with a dua, not a complaint.",
    },
    tags: ["hujan", "ciptaan", "kasih-sayang", "tanya-anak", "buku"],
    readingTimeMin: 3,
  },

  {
    slug: "siapa-allah-untuk-anak",
    kind: "story",
    child: "mo",
    pose: "baby-mo-idea.png",
    published: "2026-06-23",
    title: { id: "Siapa Itu Allah?", en: "Who Is Allah?" },
    hook: {
      id: "Baby Mo bertanya, \"Umi, siapa itu Allah?\" Maka Umi mengajaknya berburu harta karun — mencari tanda-tanda Allah di sekeliling mereka.",
      en: "Baby Mo asks, \"Umi, who is Allah?\" So Umi takes him on a treasure hunt — to find the signs of Allah all around them.",
    },
    body: {
      id: `Suatu sore yang tenang, Baby Mo memandangi langit dari jendela. Lalu ia bertanya dengan suara kecil, "Umi… siapa itu Allah? Kenapa aku tidak bisa melihat-Nya?"

Umi tersenyum, lalu berlutut di sampingnya. "Pertanyaan yang bagus sekali, sayang. Ayo, Umi ajak main. Kita berburu harta karun — mencari tanda-tanda Allah."

Baby Mo melompat girang. Harta karun!

"Tanda pertama," kata Umi. "Tutup matamu, lalu hadapkan wajahmu ke jendela."

Baby Mo memejamkan mata. Cahaya matahari yang hangat membelai pipinya. "Hangat, Umi…"

"Siapa yang membuat matahari sehangat itu untukmu?" bisik Umi.

"Allah," jawab Baby Mo pelan, mulai mengerti.

"Tanda kedua." Umi memberinya sepotong apel. Baby Mo menggigitnya — kriuk! — manis dan segar. "Siapa yang menaruh rasa manis di dalam apel?"

"Allah!" kata Baby Mo, kali ini lebih yakin.

"Tanda ketiga." Umi menempelkan tangan mungil Baby Mo ke dadanya sendiri. Di sana ada sesuatu yang berdetak. Dug… dug… dug… "Itu jantungmu, sayang. Berdetak siang dan malam tanpa kamu suruh. Siapa yang membuatnya terus berdetak?"

Mata Baby Mo membulat. "Allah… yang membuat jantungku?"

Umi mengangguk. "Kita memang tidak bisa melihat Allah dengan mata kita sekarang. Tapi lihat — kita bisa merasakan kebaikan-Nya di mana-mana. Di matahari yang hangat, di apel yang manis, di jantung yang berdetak, dan…" Umi memeluknya erat, "…di pelukan yang sayang. Allah yang menciptakan semuanya, dan Allah sangat menyayangimu."

Baby Mo terdiam, lalu tersenyum lebar. Ternyata harta karun itu bukan emas. Harta karunnya adalah: di mana pun ada kebaikan, di situ ada hadiah dari Allah.

Malam itu, sebelum tidur, Baby Mo berbisik sambil memeluk gulingnya, "Terima kasih, Allah, untuk matahari, apel, dan pelukan Umi."

> *"Katakanlah: Dialah Allah, Yang Maha Esa… dan tidak ada sesuatu pun yang setara dengan-Nya."* (QS. Al-Ikhlas: 1, 4)

Sekarang, yuk berburu harta karun bareng si kecil: cari tiga hal baik hari ini, lalu ucapkan bersama, "Ini dari Allah." 🌟`,
      en: `One calm afternoon, Baby Mo gazed at the sky through the window. Then he asked in a small voice, "Umi… who is Allah? Why can't I see Him?"

Umi smiled and knelt beside him. "What a wonderful question, dear. Come, let's play a game. A treasure hunt — to find the signs of Allah."

Baby Mo jumped up. Treasure!

"First sign," said Umi. "Close your eyes and turn your face to the window."

Baby Mo shut his eyes. Warm sunlight stroked his cheeks. "It's warm, Umi…"

"Who made the sun that warm just for you?" whispered Umi.

"Allah," Baby Mo answered softly, beginning to understand.

"Second sign." Umi handed him a slice of apple. Baby Mo took a bite — crunch! — sweet and fresh. "Who put the sweetness inside the apple?"

"Allah!" said Baby Mo, surer this time.

"Third sign." Umi pressed Baby Mo's tiny hand to his own chest. Something was beating there. Thump… thump… thump… "That's your heart, dear. Beating day and night without you telling it to. Who keeps it beating?"

Baby Mo's eyes went round. "Allah… made my heart?"

Umi nodded. "We can't see Allah with our eyes right now. But look — we can feel His kindness everywhere. In the warm sun, in the sweet apple, in a beating heart, and…" Umi hugged him tight, "…in a loving hug. Allah created it all, and Allah loves you so much."

Baby Mo went quiet, then beamed. It turned out the treasure wasn't gold. His treasure was this: wherever there is goodness, there is a gift from Allah.

That night, before sleep, Baby Mo whispered while hugging his pillow, "Thank you, Allah, for the sun, the apple, and Umi's hug."

> *"Say: He is Allah, the One… and there is none comparable to Him."* (Qur'an, Al-Ikhlas 112:1, 4)

Now, go on a treasure hunt with your little one: find three good things today, then say together, "This is from Allah." 🌟`,
    },
    anchor: { type: "parenting", slug: "anak-bertanya-allah-di-mana" },
    takeaway: {
      id: "Kita belum bisa melihat Allah, tapi kita bisa merasakan kasih sayang-Nya di setiap hal baik — matahari, apel manis, dan pelukan.",
      en: "We can't see Allah yet, but we can feel His love in every good thing — the sun, a sweet apple, and a hug.",
    },
    tags: ["allah", "tauhid", "tanya-anak", "buku"],
    readingTimeMin: 4,
  },

  {
    slug: "apakah-allah-melihatku",
    kind: "story",
    child: "mo",
    pose: "baby-mo-wow.png",
    published: "2026-06-23",
    title: { id: "Apakah Allah Bisa Melihatku?", en: "Can Allah See Me?" },
    hook: {
      id: "Saat main petak umpet, Baby Mo bersembunyi di tempat paling gelap. \"Tidak ada yang bisa melihatku!\" pikirnya. Tapi… benarkah begitu?",
      en: "Playing hide-and-seek, Baby Mo hides in the darkest spot. \"Nobody can see me!\" he thinks. But… is that really true?",
    },
    body: {
      id: `Sore itu Baby Mo dan Baby Ais bermain petak umpet. Baby Mo paling jago bersembunyi. Ia menyelinap ke dalam lemari selimut, menutup pintunya rapat-rapat, dan duduk di kegelapan.

"Hihi," kikiknya pelan. "Di sini gelap sekali. Tidak ada yang bisa melihatku!"

Sambil menunggu, tangannya meraba-raba dan menemukan sesuatu — toples kue cokelat kesukaannya, yang tadi pagi Umi bilang, "Nanti dulu, ya, sesudah makan malam."

Baby Mo menelan ludah. Kuenya wangi sekali. Di sini gelap. Tidak ada Umi. Tidak ada Baby Ais. Tidak ada siapa-siapa yang melihat…

Tangannya hampir membuka toples itu.

Tapi tiba-tiba ia teringat sesuatu yang pernah Umi katakan. Ia berbisik pada dirinya sendiri di dalam gelap, "Tidak ada siapa-siapa yang melihat… kecuali Allah. Allah selalu melihat. Bahkan di tempat yang paling gelap."

Baby Mo menarik tangannya kembali. Pelan-pelan ia menutup toples itu rapat-rapat, seakan menyimpan rahasia kebaikan. Dadanya terasa hangat dan ringan — perasaan yang jauh lebih enak daripada kue mana pun.

"Ketemu!" Pintu lemari terbuka, dan Baby Ais tertawa menemukan kakaknya.

Malam harinya, sesudah makan, Umi memberi mereka kue cokelat. Baby Mo memakannya dengan senyum paling lebar sedunia. Lalu ia berbisik ke telinga Umi, "Umi, tadi aku hampir ambil kue di lemari. Tapi aku ingat… Allah melihat. Jadi aku tunggu."

Umi memeluknya erat sekali. "Masya Allah, jagoan. Itu namanya menjaga diri karena Allah. Kamu baik bukan hanya saat dilihat orang — tapi juga saat sendirian. Itu yang paling istimewa."

> *"Tidakkah dia mengetahui bahwa sesungguhnya Allah melihat?"* (QS. Al-'Alaq: 14)

Sekarang, tanyakan pada si kecil: "Kalau tidak ada yang melihat, siapa yang tetap melihat?" Lalu tersenyumlah bersama: "Allah." 👀💚`,
      en: `That afternoon Baby Mo and Baby Ais played hide-and-seek. Baby Mo was the best hider. He slipped into the blanket closet, shut the door tight, and sat in the dark.

"Hehe," he giggled softly. "It's so dark in here. Nobody can see me!"

While he waited, his hands felt around and found something — the jar of his favourite chocolate cookies, the ones Umi had said that morning, "Not yet, okay, after dinner."

Baby Mo swallowed. The cookies smelled wonderful. It was dark in here. No Umi. No Baby Ais. Nobody watching…

His hand almost opened the jar.

But suddenly he remembered something Umi had once told him. He whispered to himself in the dark, "Nobody is watching… except Allah. Allah always sees. Even in the darkest place."

Baby Mo pulled his hand back. Slowly he closed the jar up tight, as if keeping a little secret of goodness. His chest felt warm and light — a feeling far nicer than any cookie.

"Found you!" The closet door opened, and Baby Ais laughed at finding her brother.

That night, after dinner, Umi gave them chocolate cookies. Baby Mo ate his with the biggest smile in the world. Then he whispered into Umi's ear, "Umi, I almost took a cookie from the closet. But I remembered… Allah sees. So I waited."

Umi hugged him ever so tight. "Masha'Allah, champ. That's guarding yourself for Allah's sake. You're good not only when people are watching — but also when you're alone. That's the most special thing of all."

> *"Does he not know that Allah sees?"* (Qur'an, Al-'Alaq 96:14)

Now, ask your little one: "If no one is watching, who still sees?" Then smile together: "Allah." 👀💚`,
    },
    anchor: { type: "parenting", slug: "anak-bohong" },
    takeaway: {
      id: "Allah selalu melihat — bahkan di tempat gelap. Maka kita bisa berbuat baik bukan hanya saat dilihat, tapi juga saat sendirian.",
      en: "Allah always sees — even in the dark. So we can do good not just when watched, but also when alone.",
    },
    tags: ["allah", "ihsan", "kejujuran", "tanya-anak", "buku"],
    readingTimeMin: 3,
  },

  {
    slug: "kenapa-kita-sholat-untuk-anak",
    kind: "story",
    child: "mo",
    pose: "baby-mo-thank-you.png",
    published: "2026-06-23",
    title: { id: "Kenapa Kita Sholat?", en: "Why Do We Pray?" },
    hook: {
      id: "Baby Mo melihat Abi berhenti bermain untuk sholat. \"Kenapa harus sholat, Abi?\" Lalu Baby Mo menemukan jawabannya — dengan sujud kecilnya sendiri.",
      en: "Baby Mo watches Abi stop playing to pray. \"Why do we pray, Abi?\" Then Baby Mo finds the answer — with a little sujud of his own.",
    },
    body: {
      id: `Mereka sedang asyik menyusun balok ketika terdengar suara azan dari masjid. Abi langsung berhenti, tersenyum, dan berdiri. "Sebentar, ya, jagoan. Abi mau sholat dulu."

Baby Mo cemberut sedikit. "Kenapa harus berhenti, Abi? Kenapa sih kita sholat?"

Abi duduk kembali sebentar. "Coba Abi tanya. Kalau Baby Mo sayang sekali sama seseorang, Baby Mo mau nggak ketemu dia tiap hari?"

"Mau!" jawab Baby Mo cepat.

"Nah, sholat itu seperti janji ketemu yang membahagiakan dengan Allah," kata Abi. "Lima kali sehari, kita berhenti sebentar dari main, dari sibuk, lalu bilang: 'Terima kasih, Allah. Aku sayang Allah.' Seperti lima pelukan dalam sehari."

Baby Mo memiringkan kepalanya. "Lima pelukan untuk Allah?"

"Iya. Mau lihat caranya?"

Baby Mo mengangguk dan mengikuti Abi ke sajadah. Ia memperhatikan dengan saksama. Abi mengangkat kedua tangan — "Allahu Akbar" — lalu membungkuk, lalu turun bersujud, dahinya menyentuh sajadah dengan tenang.

"Waktu sujud itu," bisik Abi setelah selesai, "kepala kita yang paling tinggi, kita letakkan paling rendah. Itu cara kita bilang ke Allah: Engkau yang paling besar, dan aku sayang sekali sama-Mu."

Sore itu mereka bermain seharian — kejar-kejaran, tertawa, sampai capek dan bahagia. Menjelang magrib, tiba-tiba Baby Mo berlari ke sajadah kecilnya. Tanpa diminta, ia mengangkat kedua tangannya yang mungil, lalu sujud pelan-pelan, meniru Abi.

"Terima kasih, Allah," katanya dengan suara teredam sajadah, "hari ini menyenangkan sekali."

Abi memandanginya dari pintu, dan matanya berkaca-kaca. Ternyata Baby Mo sudah mengerti: sholat bukan beban yang membuat kita berhenti bermain. Sholat adalah cara kita berterima kasih kepada Yang memberi kita hari yang indah.

> *"…dan dirikanlah sholat untuk mengingat-Ku."* (QS. Thaha: 14)

Sekarang, ajak si kecil membuat satu "sujud terima kasih" hari ini — letakkan dahi dengan tenang, lalu ucapkan, "Terima kasih, Allah." 🕌`,
      en: `They were busy building blocks when the call to prayer drifted from the mosque. Abi stopped at once, smiled, and stood up. "One moment, champ. Abi's going to pray first."

Baby Mo pouted a little. "Why stop, Abi? Why do we even pray?"

Abi sat back down for a moment. "Let me ask you. If you love someone very much, would you want to see them every day?"

"Yes!" Baby Mo answered quickly.

"Well, prayer is like a happy appointment with Allah," said Abi. "Five times a day, we pause from playing, from being busy, and say: 'Thank you, Allah. I love You.' Like five hugs in a day."

Baby Mo tilted his head. "Five hugs for Allah?"

"Yes. Want to see how?"

Baby Mo nodded and followed Abi to the prayer mat. He watched closely. Abi raised both hands — "Allahu Akbar" — then bowed, then went down into sujud, his forehead resting calmly on the mat.

"In sujud," Abi whispered afterward, "we take our head — the highest part of us — and place it the lowest. That's how we tell Allah: You are the greatest, and I love You so much."

That afternoon they played all day — chasing, laughing, until they were tired and happy. As sunset neared, Baby Mo suddenly ran to his little prayer mat. Without being asked, he raised his tiny hands, then slowly went into sujud, copying Abi.

"Thank you, Allah," he said, his voice muffled by the mat, "today was so much fun."

Abi watched from the doorway, his eyes glistening. Baby Mo had understood: prayer isn't a burden that stops our play. Prayer is how we thank the One who gives us a beautiful day.

> *"…and establish prayer for My remembrance."* (Qur'an, Taha 20:14)

Now, invite your little one to make one "thank-you sujud" today — rest the forehead gently, then say, "Thank you, Allah." 🕌`,
    },
    anchor: { type: "parenting", slug: "mulai-sholat" },
    takeaway: {
      id: "Sholat bukan beban — ia janji ketemu yang membahagiakan dengan Allah, lima pelukan kecil untuk berterima kasih setiap hari.",
      en: "Prayer isn't a burden — it's a happy appointment with Allah, five little hugs of thanks every day.",
    },
    tags: ["sholat", "ibadah", "tanya-anak", "buku"],
    readingTimeMin: 3,
  },

  {
    slug: "apa-itu-surga-untuk-anak",
    kind: "story",
    child: "both",
    pose: "baby-mo-yeyy.png",
    published: "2026-06-23",
    title: { id: "Apa Itu Surga?", en: "What Is Jannah?" },
    hook: {
      id: "\"Umi, surga itu seperti apa?\" tanya Baby Mo. Maka mereka membuat kebun kebaikan — dan Baby Mo belajar cara menanam jalan menuju surga.",
      en: "\"Umi, what is Jannah like?\" asks Baby Mo. So they make a garden of good deeds — and Baby Mo learns how to plant his way there.",
    },
    body: {
      id: `Sehabis membaca cerita, Baby Mo bertanya, "Umi, surga itu seperti apa? Apa benar di sana ada sungai dan tidak pernah ada yang menangis?"

"Benar, sayang," kata Umi. "Surga itu tempat paling indah yang Allah siapkan untuk orang yang beriman dan suka berbuat baik. Di sana semua bahagia, dan tidak ada lagi sedih sedikit pun."

Mata Baby Mo berbinar. "Aku mau ke sana! Bagaimana caranya, Umi?"

Umi tersenyum penuh rahasia. "Bukan dengan berangan-angan saja. Surga itu seperti kebun — kita menanamnya pelan-pelan, satu kebaikan satu bunga. Ayo kita buat Kebun Kebaikan hari ini!"

Umi menggambar sebuah taman kosong di selembar kertas besar. "Setiap kali kamu berbuat baik, kita tempel satu bunga."

Baby Mo berpikir sebentar. Lalu ia berlari membagi dua biskuitnya dengan Baby Ais. "Ini berbagi!" Umi pun menempel satu bunga merah di kertas. 🌷

Tak lama, Baby Ais menjatuhkan mainannya dan hampir menangis. Baby Mo memungutnya dan mengembalikannya dengan lembut. "Ini menolong!" — dan tumbuh satu bunga kuning. 🌻

Sebelum makan, Baby Mo mengucap "Bismillah", dan sesudahnya "Alhamdulillah". Dua bunga lagi mekar di kebun itu.

Saat matahari terbenam, kertas itu sudah penuh dengan bunga warna-warni. Baby Mo memandanginya dengan kagum. "Kebunku jadi cantik sekali, Umi!"

"Lihat," kata Umi lembut, memeluk kedua anaknya. "Setiap kebaikan kecil yang kamu lakukan hari ini menanam satu bunga. Begitulah cara kita merindukan surga — bukan cuma membayangkannya, tapi menanamnya dengan kebaikan, sedikit demi sedikit, sambil meminta rahmat Allah."

Malam itu Baby Mo tidur dengan senyum. Dalam mimpinya, kebun kebaikannya tumbuh sangat luas — seluas yang bisa ia bayangkan.

> *Allah berfirman: "Aku telah menyiapkan untuk hamba-hamba-Ku yang saleh apa yang belum pernah dilihat mata, belum pernah didengar telinga, dan belum pernah terlintas di hati manusia."* (HR. Bukhari 3244, Muslim 2824)

Sekarang, buat Kebun Kebaikan bersama si kecil: tiap satu kebaikan hari ini, gambar atau tempel satu bunga. Lihat kebunnya tumbuh! 🌸`,
      en: `After story time, Baby Mo asked, "Umi, what is Jannah like? Is it true there are rivers and no one ever cries?"

"It's true, dear," said Umi. "Jannah is the most beautiful place Allah has prepared for those who believe and love to do good. Everyone there is happy, and there's not a single bit of sadness anymore."

Baby Mo's eyes sparkled. "I want to go there! How, Umi?"

Umi smiled a secret smile. "Not by only wishing. Jannah is like a garden — we plant it slowly, one good deed, one flower. Let's make a Garden of Good Deeds today!"

Umi drew an empty garden on a big sheet of paper. "Every time you do something good, we'll stick on a flower."

Baby Mo thought for a moment. Then he ran to share his biscuit in half with Baby Ais. "This is sharing!" And Umi stuck a red flower on the paper. 🌷

Soon, Baby Ais dropped her toy and nearly cried. Baby Mo picked it up and gently gave it back. "This is helping!" — and a yellow flower grew. 🌻

Before eating, Baby Mo said "Bismillah," and after, "Alhamdulillah." Two more flowers bloomed in the garden.

As the sun set, the paper was full of colourful flowers. Baby Mo gazed at it in wonder. "My garden turned out so pretty, Umi!"

"See," said Umi gently, hugging both her children. "Every little good thing you did today planted one flower. That's how we long for Jannah — not just imagining it, but planting it with good deeds, little by little, while asking for Allah's mercy."

That night Baby Mo slept with a smile. In his dream, his garden of good deeds grew vast — as wide as he could imagine.

> *Allah says: "I have prepared for My righteous servants what no eye has seen, no ear has heard, and no human heart has ever imagined."* (Bukhari 3244, Muslim 2824)

Now, make a Garden of Good Deeds with your little one: for each kind act today, draw or stick on a flower. Watch the garden grow! 🌸`,
    },
    anchor: { type: "parenting", slug: "bersyukur" },
    takeaway: {
      id: "Surga adalah hadiah indah dari Allah. Kita menanam jalan ke sana dengan kebaikan-kebaikan kecil setiap hari.",
      en: "Jannah is Allah's beautiful gift. We plant our way there with small good deeds, every day.",
    },
    tags: ["surga", "akhirat", "kebaikan", "tanya-anak", "buku"],
    readingTimeMin: 4,
  },

  {
    slug: "siapa-nabi-muhammad-untuk-anak",
    kind: "story",
    child: "mo",
    pose: "baby-mo-pose-15.png",
    published: "2026-06-23",
    title: { id: "Siapa Nabi Muhammad ﷺ?", en: "Who Is Prophet Muhammad ﷺ?" },
    hook: {
      id: "\"Umi, siapa Nabi Muhammad? Bisa aku melihatnya?\" Baby Mo belajar mengenal beliau dengan cara yang seru — dengan meniru kebaikannya seharian.",
      en: "\"Umi, who is Prophet Muhammad? Can I see him?\" Baby Mo gets to know him in a fun way — by copying his kindness all day.",
    },
    body: {
      id: `Baby Mo sering mendengar nama itu disebut dengan penuh sayang: Nabi Muhammad ﷺ. Suatu pagi ia bertanya, "Umi, siapa Nabi Muhammad? Apa aku bisa melihatnya?"

Umi mengajaknya duduk. "Nabi Muhammad ﷺ adalah manusia terbaik, utusan Allah yang paling Allah cintai. Beliau datang untuk mengajari kita cara hidup yang baik dan penuh kasih sayang. Kita memang tidak bisa melihat beliau sekarang… tapi kita bisa mencintainya dengan cara yang istimewa."

"Caranya?" tanya Baby Mo penasaran.

"Dengan meniru kebaikan beliau," kata Umi sambil tersenyum. "Hari ini, yuk kita main jadi 'sahabat kecil Nabi'. Setiap kali kita melakukan satu kebaikan yang beliau ajarkan, kita kumpulkan satu bintang."

Baby Mo langsung bersemangat.

Saat bertemu Pak Satpam di depan, Baby Mo melambaikan tangan, "Assalamualaikum!" — karena Nabi ﷺ mengajarkan menyebar salam. ⭐

Ketika Baby Ais terlihat murung, Baby Mo memberinya senyum paling lebar. "Kata Umi, senyum itu sedekah, dan Nabi ﷺ paling sering tersenyum." ⭐

Di teras, ada kucing kurus yang mengeong. Baby Mo menaruh sedikit makanan dan air dengan lembut. "Nabi ﷺ sayang pada binatang." ⭐

Saat makan siang, Baby Mo membaca Bismillah, makan dengan tangan kanan, dan tidak menyisakan makanan — semua adab yang beliau contohkan. ⭐⭐

Sore harinya, bintang-bintang Baby Mo sudah banyak sekali. Ia memandangnya dengan bangga. "Umi, aku jadi merasa dekat dengan Nabi Muhammad, walaupun aku belum pernah melihatnya."

Umi memeluknya. "Itulah cinta yang sebenarnya, sayang. Kita mencintai Nabi ﷺ bukan hanya dengan menyebut namanya, tapi dengan menjadi anak yang baik seperti yang beliau ajarkan. Dan kelak, orang yang mencintainya akan dikumpulkan bersama beliau."

Baby Mo memejamkan mata dan berbisik, "Shalawat untukmu, ya Nabi."

> *"Seseorang akan bersama orang yang ia cintai."* (HR. Bukhari 6168, Muslim 2640)

Sekarang, kumpulkan "bintang sunnah" bersama si kecil hari ini: ucap salam, tersenyum, sayangi yang kecil. Berapa bintang yang bisa kalian kumpulkan? ⭐`,
      en: `Baby Mo often heard that name spoken with such love: Prophet Muhammad ﷺ. One morning he asked, "Umi, who is Prophet Muhammad? Can I see him?"

Umi sat him down. "Prophet Muhammad ﷺ is the best of all people, the messenger most beloved to Allah. He came to teach us how to live well and with kindness. We can't see him now… but we can love him in a special way."

"How?" asked Baby Mo, curious.

"By copying his kindness," said Umi with a smile. "Today, let's play 'the Prophet's little companions.' Every time we do one good thing he taught, we collect a star."

Baby Mo lit up at once.

Meeting the guard out front, Baby Mo waved, "Assalamu'alaikum!" — because the Prophet ﷺ taught us to spread the greeting of peace. ⭐

When Baby Ais looked gloomy, Baby Mo gave her his biggest smile. "Umi says a smile is charity, and the Prophet ﷺ smiled the most." ⭐

On the porch, a skinny cat meowed. Baby Mo gently set out a little food and water. "The Prophet ﷺ was kind to animals." ⭐

At lunch, Baby Mo said Bismillah, ate with his right hand, and left no food behind — all manners he had shown us. ⭐⭐

By late afternoon, Baby Mo had collected so many stars. He looked at them proudly. "Umi, I feel close to Prophet Muhammad, even though I've never seen him."

Umi hugged him. "That's true love, dear. We love the Prophet ﷺ not just by saying his name, but by being a good child the way he taught. And one day, those who love him will be gathered with him."

Baby Mo closed his eyes and whispered, "Blessings upon you, O Prophet."

> *"A person will be with those he loves."* (Bukhari 6168, Muslim 2640)

Now, collect "sunnah stars" with your little one today: give salam, smile, be kind to the small. How many stars can you gather? ⭐`,
    },
    anchor: { type: "hadith", slug: "kelembutan-keindahan" },
    takeaway: {
      id: "Kita tak bisa melihat Nabi ﷺ sekarang, tapi kita mencintainya dengan meniru kebaikannya: salam, senyum, dan sayang pada yang kecil.",
      en: "We can't see the Prophet ﷺ now, but we love him by copying his kindness: greetings, smiles, and care for the small.",
    },
    tags: ["nabi-muhammad", "sunnah", "akhlak", "tanya-anak", "buku"],
    readingTimeMin: 3,
  },

  {
    slug: "stoples-liburan-baby-mo",
    kind: "story",
    child: "both",
    pose: "baby-mo-yeyy.png",
    published: "2026-06-22",
    title: { id: "Stoples Liburan Baby Mo", en: "Baby Mo's Holiday Jar" },
    hook: {
      id: "Hari pertama libur, Baby Mo berkata, \"Bosaaan.\" Lalu Umi mengeluarkan sebuah stoples ajaib berisi kertas-kertas kecil.",
      en: "On the first day of the break, Baby Mo said, \"I'm booored.\" Then Umi brought out a magic jar full of little folded papers.",
    },
    body: {
      id: `Hari pertama libur sekolah, matahari bersinar cerah, tapi Baby Mo justru berguling-guling di sofa sambil mengeluh, "Bosaaan. Mau ngapain, Umi?"

Baby Ais menirukan kakaknya, ikut berguling, "Bosaaan juga."

Umi tersenyum. Ia masuk ke dapur dan kembali membawa sebuah stoples kaca yang penuh dengan gulungan kertas kecil berwarna-warni. "Ini," katanya, "Stoples Liburan. Setiap kertas ada satu kejutan kegiatan. Tapi ada satu aturan: setiap kegiatan kita mulai dengan… apa hayo?"

"Bismillah!" seru Baby Mo dan Baby Ais bersamaan.

"Pintar!" Umi mengangguk. "Ayo, siapa yang mau ambil pertama?"

Baby Mo melompat. Tangannya yang mungil mengaduk-aduk stoples, lalu menarik satu gulungan. Ia membukanya pelan-pelan, seperti membuka harta karun. "Me… na… nam… biji!" ejanya.

Maka pagi itu mereka menanam biji kacang hijau di gelas plastik bekas. "Bismillah," kata Baby Mo sebelum menaruh bijinya di atas kapas basah. "Tumbuh yang tinggi, ya," bisik Baby Ais pada bijinya, seakan biji itu bisa mendengar.

Siangnya, kertas kedua bertuliskan "Telepon Nenek". Baby Mo bercerita panjang lebar tentang bijinya, dan suara Nenek di seberang tertawa hangat. "Itu namanya silaturahmi," kata Umi. "Allah suka kalau kita menyambung kasih sayang dengan keluarga."

Hari-hari berikutnya, stoples itu seperti tak pernah kehabisan kejutan. Ada "Hari Membaca" — mereka meringkuk di bawah selimut sambil mendengar kisah para nabi. Ada "Bantu Umi" — Baby Ais melap meja sampai mengkilap, dan Baby Mo membereskan mainannya sambil bernyanyi. Ada "Sedekah Kecil" — mereka memasukkan beberapa koin ke kotak amal masjid, dan dada Baby Mo terasa hangat dengan cara yang lucu.

Suatu sore, kertas yang keluar bertuliskan "Lihat Ciptaan Allah". Mereka pergi ke taman. Baby Mo menengadah memandang awan yang berarak seperti domba-domba putih. "Umi, yang bikin awan siapa?" tanyanya.

"Allah," jawab Umi.

"Yang bikin angin?"

"Allah."

"Yang bikin… Baby Ais bawel?" Baby Mo terkikik, dan Baby Ais mengejarnya keliling taman sambil tertawa.

Malam terakhir liburan, biji kacang hijau mereka sudah tumbuh menjadi tunas hijau mungil yang menjulur ke arah jendela. Baby Mo memandanginya takjub. Liburan yang tadinya terasa "bosaaan" ternyata penuh — bukan penuh layar dan teriakan, tapi penuh tawa, biji yang tumbuh, dan Bismillah di setiap awalnya.

"Umi," kata Baby Mo sambil menguap, "besok masih ada kertasnya?"

Umi menyelimutinya. "Selalu ada, sayang. Karena hari yang dimulai bersama Allah, tidak pernah benar-benar membosankan."

> *"Dua nikmat yang banyak manusia tertipu karenanya: kesehatan dan waktu luang."* (HR. Bukhari 6412)

Sekarang, yuk buat Stoples Liburan-mu sendiri bersama si kecil. Tulis kegiatan-kegiatan kecil, gulung, dan masukkan ke stoples. Jangan lupa: setiap kegiatan dimulai dengan "Bismillah!" 🫙✨`,
      en: `On the first day of the school holidays, the sun shone bright — but Baby Mo just rolled around on the sofa, groaning, "I'm booored. What can we do, Umi?"

Baby Ais copied her brother, rolling too. "Booored as well."

Umi smiled. She went to the kitchen and came back with a glass jar full of little colourful rolled-up papers. "Here," she said, "the Holiday Jar. Each paper has one surprise activity. But there's one rule: every activity we begin with… what was it again?"

"Bismillah!" cried Baby Mo and Baby Ais together.

"Clever!" Umi nodded. "Now, who wants to pick first?"

Baby Mo leapt up. His tiny hands stirred the jar, then pulled out a roll. He opened it slowly, like opening treasure. "Plant… a… seed!" he read.

So that morning they planted mung beans in an old plastic cup. "Bismillah," said Baby Mo before setting his bean on the damp cotton. "Grow nice and tall, okay," Baby Ais whispered to her bean, as if it could hear.

In the afternoon, the second paper said "Call Grandma." Baby Mo told a long story about his bean, and Grandma's voice laughed warmly down the line. "That's called keeping family ties," said Umi. "Allah loves it when we keep love flowing between family."

In the days that followed, the jar never seemed to run out of surprises. There was "Reading Day" — they curled up under a blanket listening to stories of the prophets. There was "Help Umi" — Baby Ais wiped the table until it gleamed, and Baby Mo tidied his toys while singing. There was "A Small Charity" — they slipped a few coins into the mosque donation box, and Baby Mo's chest felt warm in a funny way.

One evening, the paper read "Look at Allah's Creation." They went to the park. Baby Mo tilted his head back at the clouds drifting like little white sheep. "Umi, who made the clouds?" he asked.

"Allah," said Umi.

"Who made the wind?"

"Allah."

"Who made… Baby Ais so chatty?" Baby Mo giggled, and Baby Ais chased him around the park, laughing.

On the last night of the break, their mung beans had sprouted into tiny green shoots reaching for the window. Baby Mo stared in wonder. The holiday that once felt so "booored" turned out to be full — not full of screens and shouting, but full of laughter, a growing seed, and a Bismillah at the start of each thing.

"Umi," said Baby Mo with a yawn, "is there still a paper for tomorrow?"

Umi tucked him in. "There always is, dear. Because a day begun with Allah is never truly boring."

> *"There are two blessings which many people are deceived about: good health and free time."* (Bukhari 6412)

Now, let's make your own Holiday Jar with your little one. Write small activities, roll them up, and drop them in the jar. Don't forget: every activity begins with "Bismillah!" 🫙✨`,
    },
    anchor: { type: "parenting", slug: "bersyukur" },
    takeaway: {
      id: "Liburan yang berkesan bukan soal banyaknya layar, tapi waktu bersama yang sederhana — dan setiap kegiatan dimulai dengan Bismillah.",
      en: "A memorable holiday isn't about more screen time, but simple time together — and every activity begins with Bismillah.",
    },
    tags: ["liburan", "keluarga", "bersyukur", "buku"],
    readingTimeMin: 5,
  },

  {
    slug: "teman-baru-di-kelas-baru",
    kind: "story",
    child: "mo",
    pose: "baby-mo-alright.png",
    published: "2026-06-21",
    title: { id: "Teman Baru di Kelas Baru", en: "A New Friend in a New Class" },
    hook: {
      id: "Baby Mo naik ke kelas yang lebih besar. Tapi pagi itu kakinya terasa berat — bagaimana kalau tidak ada yang mau berteman dengannya?",
      en: "Baby Mo is moving up to a bigger class. But that morning his feet felt heavy — what if no one wants to be his friend?",
    },
    body: {
      id: `Hari ini istimewa. Baby Mo tidak lagi pergi ke kelompok bermain yang kecil dan akrab itu — hari ini ia naik ke kelas yang lebih besar, kelas anak-anak yang sudah lebih besar. Taman Kanak-kanak!

Tapi anehnya, pagi itu kaki Baby Mo terasa berat seperti diisi pasir. Ia berpegangan erat pada ujung baju Umi di depan gerbang sekolah yang baru.

"Umi," bisiknya, "bagaimana kalau teman-teman lamaku tidak ada di sini? Bagaimana kalau… tidak ada yang mau bermain denganku?"

Umi berjongkok. Ia merapikan rambut Baby Mo yang sedikit berantakan. "Dengar, jagoan. Dulu teman-teman lamamu juga awalnya orang asing, kan? Lalu jadi sahabat. Begitu juga teman-teman barumu nanti."

Baby Mo menunduk, belum yakin.

"Umi ajari satu rahasia," lanjut Umi. "Tahu cara paling mudah membuka pintu hati seseorang? Ucapkan salam. 'Assalamualaikum.' Artinya, 'semoga keselamatan untukmu'. Itu doa, sayang. Kamu mendoakan teman barumu sebelum kalian sempat saling kenal."

Baby Mo mengangkat wajahnya sedikit. "Cuma… salam?"

"Cuma salam. Dan satu senyum. Bismillah, ya."

Baby Mo menarik napas dalam-dalam, seperti hendak menyelam. "Bismillah," gumamnya. Lalu ia melangkah masuk.

Di dalam, ada seorang anak laki-laki yang duduk sendirian di pojok, memeluk lututnya. Wajahnya murung. Sepertinya ia juga sedang berpikir, "bagaimana kalau tidak ada yang mau berteman denganku?"

Baby Mo teringat rahasia Umi. Jantungnya berdebar. Ia berjalan mendekat, pelan-pelan, lalu dengan suara yang sedikit gemetar berkata, "Assalamualaikum. Aku Baby Mo. Mau main bareng?"

Anak itu mendongak. Matanya yang tadi sendu perlahan berbinar. "Wa… waalaikumsalam," jawabnya. "Aku Faiz." Dan ia tersenyum — senyum lega seorang anak yang baru saja ditemukan.

Ternyata, di balik wajah murung tadi, Faiz hanya butuh satu orang yang berani menyapa lebih dulu.

Hari itu mereka membangun menara balok bersama, berbagi krayon, dan tertawa sampai Bu Guru harus mengingatkan agar tidak terlalu ramai. Saat dijemput, Baby Mo berlari ke arah Umi dengan wajah berseri-seri.

"Umi! Rahasianya berhasil! Aku punya teman baru namanya Faiz! Tadinya dia sedih sendirian, tapi aku ucapkan salam dulu — seperti kata Umi!"

Umi memeluknya erat. "Masya Allah. Lihat? Satu salam kecilmu tadi bukan cuma membuatmu punya teman. Tapi juga membuat hari Faiz jadi lebih cerah."

Baby Mo tersenyum bangga. Ternyata, kelas baru itu tidak menakutkan. Ia hanya butuh keberanian sebesar satu kata: salam.

> *"Maukah aku tunjukkan sesuatu yang jika kalian lakukan, kalian akan saling mencintai? Sebarkanlah salam di antara kalian."* (HR. Muslim 54)

Sekarang, kalau si kecil bertemu teman baru besok, ajak ia mencoba rahasia Baby Mo: ucapkan "Assalamualaikum" dengan satu senyum. Pintu pertemanan akan terbuka. 🤝🌟`,
      en: `Today was special. Baby Mo wasn't going to that small, cosy playgroup anymore — today he was moving up to a bigger class, the class for older children. Kindergarten!

But strangely, that morning Baby Mo's feet felt heavy, as if filled with sand. He clung tightly to the hem of Umi's dress in front of the new school gate.

"Umi," he whispered, "what if my old friends aren't here? What if… no one wants to play with me?"

Umi crouched down. She smoothed Baby Mo's slightly messy hair. "Listen, champ. Your old friends were strangers at first too, weren't they? Then they became best friends. Your new friends will be just the same."

Baby Mo looked down, not yet convinced.

"Let me teach you a secret," Umi went on. "Do you know the easiest way to open someone's heart? Give the greeting of peace. 'Assalamu'alaikum.' It means, 'may peace be upon you.' That's a prayer, dear. You're praying for your new friend before you even know each other."

Baby Mo lifted his face a little. "Just… a greeting?"

"Just a greeting. And one smile. Say Bismillah."

Baby Mo took a deep breath, as if about to dive underwater. "Bismillah," he murmured. Then he stepped inside.

Inside, there was a little boy sitting alone in the corner, hugging his knees. His face was gloomy. He seemed to be thinking the very same thing: "what if no one wants to be my friend?"

Baby Mo remembered Umi's secret. His heart pounded. He walked closer, slowly, then in a slightly trembling voice said, "Assalamu'alaikum. I'm Baby Mo. Want to play together?"

The boy looked up. His once-sad eyes slowly lit up. "Wa… waalaikumussalam," he answered. "I'm Faiz." And he smiled — the relieved smile of a child who had just been found.

It turned out that behind that gloomy face, Faiz had only needed one person brave enough to say hello first.

That day they built a block tower together, shared crayons, and laughed until the teacher had to remind them not to be too loud. At pick-up time, Baby Mo ran toward Umi, his face beaming.

"Umi! The secret worked! I have a new friend named Faiz! He was sad and alone, but I gave the greeting first — just like you said!"

Umi hugged him tight. "Masha'Allah. See? That one little greeting didn't just get you a friend. It made Faiz's whole day brighter too."

Baby Mo smiled proudly. It turned out the new class wasn't scary at all. He had only needed courage the size of one word: a greeting.

> *"Shall I tell you of something which, if you do it, you will love one another? Spread the greeting of peace among yourselves."* (Muslim 54)

Now, if your little one meets a new friend tomorrow, invite them to try Baby Mo's secret: say "Assalamu'alaikum" with a smile. The door to friendship will open. 🤝🌟`,
    },
    anchor: { type: "doa", slug: "mengucap-salam" },
    takeaway: {
      id: "Mengucap salam lebih dulu adalah keberanian kecil yang membuka pintu pertemanan — sekaligus doa kebaikan untuk teman baru.",
      en: "Greeting first is a small act of courage that opens the door to friendship — and a prayer of good for a new friend.",
    },
    tags: ["persahabatan", "salam", "sekolah", "keberanian", "buku"],
    readingTimeMin: 5,
  },

  {
    slug: "bismillah-dulu",
    surahs: ["al-fatihah"],
    kind: "story",
    child: "mo",
    pose: "baby-mo-idea.png",
    video: "cq6ODPSWGdc",
    published: "2026-06-03",
    title: { id: "Bismillah Dulu", en: "Bismillah First" },
    hook: {
      id: "Baby Mo selalu terburu-buru. Sampai ia menemukan satu kata kecil yang membuat semuanya terasa lebih berkah.",
      en: "Baby Mo is always in a hurry. Until he discovers one little word that makes everything feel more blessed.",
    },
    body: {
      id: `Baby Mo adalah anak yang paling cepat sedunia. Cepat bangun, cepat lari, cepat-cepat mau melakukan segalanya. Kalau Baby Mo punya semboyan, semboyannya pasti: "Cepat! Cepat! Cepaaat!"

Pagi itu matahari baru saja mengintip malu-malu di balik tirai. Baby Mo sudah melompat dari tempat tidur — hap! — berlari ke meja makan, dan langsung menyambar roti selai cokelat kesukaannya. Hap lagi! Hampir masuk ke mulut.

"Eit, tunggu dulu, jagoan," kata Umi lembut sambil menahan tawa. "Sudah baca apa belum?"

Baby Mo berhenti. Pipinya sudah menggembung seperti tupai yang menyimpan kacang. Ia menggeleng pelan-pelan. "Mmm?"

Umi duduk sejajar dengan matanya. "Bismillah dulu," katanya. "Artinya, 'dengan nama Allah'. Jadi apa pun yang kita mulai, kita mulai bareng Allah. Seperti memegang tangan Allah dulu sebelum melangkah."

Baby Mo menelan rotinya — gluk — lalu mencoba kata itu pelan-pelan. "Bis… mil… lah." Kata itu terasa bulat dan hangat di mulutnya, seperti seteguk susu cokelat di pagi yang dingin. Ia menyukainya. Ia mengulanginya lagi, lebih keras, "Bismillah!" sampai Baby Ais yang masih mengantuk ikut kaget dan berkata, "Lah!"

Sejak pagi itu, Baby Mo jadi penasaran. Apa benar kata kecil ini punya kekuatan?

Maka ia mencobanya ke mana-mana, seperti seorang ilmuwan cilik.

Sebelum memakai sepatu — "Bismillah!" — dan entah kenapa, kaki kanannya masuk lebih mulus. (Biasanya selalu tertukar.)

Sebelum menyiram bunga di teras — "Bismillah!" — dan tetesan airnya berkilau ditimpa matahari, seperti hujan permata kecil. Baby Mo ternganga.

Sebelum menyusun balok jadi menara — "Bismillah!" — dan ia menyusun lebih pelan, lebih hati-hati, satu per satu. Menara itu berdiri lebih tinggi dari kepalanya sendiri! Baby Mo melompat girang. Ternyata "Bismillah" tidak membuatnya lebih cepat — tapi membuatnya lebih tenang. Dan yang tenang, ternyata, lebih kuat.

Siang itu ada satu ujian. Baby Ais terpeleset di lantai dan menangis karena lututnya lecet sedikit. Air matanya bulat-bulat besar. Biasanya Baby Mo akan ikut panik. Tapi kali ini ia berlari, menggenggam tangan adik kembarnya, dan berbisik pelan seperti yang Umi ajarkan, "Bismillah, Ais. Nggak apa-apa."

Aneh sekali. Pelan-pelan, isak Baby Ais mereda. Mungkin bukan karena lututnya tiba-tiba sembuh — tapi karena ada suara tenang di sampingnya. Suara yang memulai segala sesuatu bersama Allah.

Malam tiba. Lampu kamar dimatikan, dan kamar menjadi gelap dan teduh. Baby Mo menarik selimut sampai ke dagu. Ia teringat semua kejadian hari itu: sepatu, bunga, menara, tangan Baby Ais. Lalu ia memejamkan mata dan tersenyum kecil di dalam gelap.

"Bismillah," bisiknya, hampir tak terdengar.

Di balik pintu, Umi diam-diam mendengar. Ia menahan napas, lalu tersenyum. Karena Baby Mo, si anak paling cepat sedunia, akhirnya menemukan satu rahasia yang besar di dalam satu kata yang kecil: yang dimulai dengan nama Allah, selalu terasa cukup.

> *Rasulullah ﷺ berkata kepada seorang anak kecil: "Nak, sebutlah nama Allah, makanlah dengan tangan kananmu, dan makanlah dari yang dekat denganmu."* (HR. Bukhari 5376, Muslim 2022)

Dan begitulah, satu kata kecil mengubah seluruh hari Baby Mo — bukan menjadi lebih cepat, tapi menjadi lebih berkah.

Sekarang, sebelum menutup buku ini, yuk kita coba bersama si kecil: tarik napas… lalu ucapkan pelan-pelan, "Bismillah." Rasakan, ya — hangat seperti susu cokelat. 🤎`,
      en: `Baby Mo was the fastest child in the whole world. Fast to wake, fast to run, fast to do absolutely everything. If Baby Mo had a motto, it would surely be: "Fast! Fast! Faaast!"

That morning the sun had only just peeked shyly through the curtains. Baby Mo had already leapt out of bed — hop! — sprinted to the table, and snatched his favourite chocolate-jam bread. Hop again! Nearly into his mouth.

"Wait just a moment, champ," said Umi gently, holding back a laugh. "Have you said it yet?"

Baby Mo froze. His cheeks were already puffed out like a squirrel storing nuts. He shook his head slowly. "Mmm?"

Umi sat down level with his eyes. "Bismillah first," she said. "It means 'with the name of Allah'. So whatever we begin, we begin together with Allah. Like holding Allah's hand before we take a step."

Baby Mo swallowed his bread — gulp — and tried the word slowly. "Bis… mil… lah." It felt round and warm in his mouth, like a sip of cocoa on a cold morning. He liked it. He said it again, louder, "Bismillah!" — until sleepy Baby Ais startled awake and said, "Lah!"

From that morning on, Baby Mo grew curious. Could such a little word really have power?

So he tried it everywhere, like a tiny scientist.

Before putting on his shoes — "Bismillah!" — and somehow his right foot slid in more smoothly. (Usually he got them mixed up.)

Before watering the flowers on the porch — "Bismillah!" — and the droplets glittered in the sun like a little rain of jewels. Baby Mo's jaw dropped.

Before stacking his blocks into a tower — "Bismillah!" — and he built more slowly, more carefully, one by one. The tower rose taller than his own head! Baby Mo jumped for joy. It turned out "Bismillah" didn't make him faster — it made him calmer. And calm, it turned out, was stronger.

That afternoon came a little test. Baby Ais slipped on the floor and cried over a small scrape on her knee. Her tears were big and round. Normally Baby Mo would panic too. But this time he ran over, held his twin sister's hand, and whispered softly, just as Umi had taught him, "Bismillah, Ais. It's okay."

How strange. Slowly, Baby Ais's sobbing settled. Maybe not because her knee suddenly healed — but because there was a calm voice beside her. A voice that began everything with Allah.

Night came. The bedroom light went out, and the room turned dark and cosy. Baby Mo pulled the blanket up to his chin. He remembered everything from the day: the shoes, the flowers, the tower, Baby Ais's hand. Then he closed his eyes and smiled a tiny smile in the dark.

"Bismillah," he whispered, almost too soft to hear.

Behind the door, Umi quietly listened. She held her breath, then smiled. Because Baby Mo, the fastest child in the whole world, had finally found one big secret inside one little word: whatever begins with the name of Allah always feels like enough.

> *The Prophet ﷺ said to a young boy: "Child, mention the name of Allah, eat with your right hand, and eat from what is nearest to you."* (Bukhari 5376, Muslim 2022)

And so, one little word changed Baby Mo's whole day — not into something faster, but into something more blessed.

Now, before we close this book, let's try it together with your little one: take a breath… then say it slowly, "Bismillah." Feel it — warm, like cocoa. 🤎`,
    },
    anchor: { type: "doa", slug: "sebelum-makan" },
    takeaway: {
      id: "Satu kata kecil — Bismillah — mengajarkan anak bahwa setiap hal baik dimulai bersama Allah. Bukan supaya lebih cepat, tapi supaya lebih tenang dan berkah.",
      en: "One little word — Bismillah — teaches a child that every good thing begins with Allah. Not to be faster, but to be calmer and more blessed.",
    },
    tags: ["bismillah", "adab", "akhlak", "buku"],
    readingTimeMin: 6,
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

> *"Bersemangatlah terhadap apa yang bermanfaat bagimu, mintalah pertolongan kepada Allah, dan jangan merasa lemah."* (HR. Muslim 2664)

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

> *"Strive for what benefits you, seek help from Allah, and do not give up."* (Muslim 2664)

And the tower that wouldn't give up stood all afternoon — just like the little heart that built it.`,
    },
    anchor: { type: "parenting", slug: "adab-sehari-hari" },
    takeaway: {
      id: "Roboh bukan berarti gagal — roboh berarti 'coba lagi, sedikit lebih sabar'. Ketangguhan lahir saat anak dibiarkan bangkit sendiri.",
      en: "Falling isn't failing — it means 'try again, a little more patiently'. Resilience is born when a child is allowed to rise on his own.",
    },
    tags: ["ketangguhan", "sabar", "akhlak", "buku"],
    readingTimeMin: 3,
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

> *"Orang-orang yang penyayang akan disayangi oleh Yang Maha Penyayang. Sayangilah yang ada di bumi, niscaya Yang di langit akan menyayangi kalian."* (HR. Abu Dawud 4941, Tirmidzi 1924)

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

> *"The merciful are shown mercy by the Most Merciful. Be merciful to those on earth, and the One above the heavens will be merciful to you."* (Abu Dawud 4941, Tirmidzi 1924)

The rain still fell outside. But on that little porch was one cat that was cold no longer — because a little girl chose to be kind.`,
    },
    anchor: { type: "hadith", slug: "kasih-sayang-kepada-anak" },
    takeaway: {
      id: "Tangan yang kecil pun bisa jadi tempat berlindung. Mengajari anak lembut pada makhluk kecil adalah latihan pertama menyayangi sesama.",
      en: "Even little hands can be a shelter. Teaching a child gentleness toward small creatures is the first rehearsal of loving others.",
    },
    tags: ["kasih-sayang", "akhlak", "binatang", "buku"],
    readingTimeMin: 3,
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

> *"…dan tidaklah Allah menambah seorang hamba yang pemaaf melainkan kemuliaan."* (HR. Muslim 2588)

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

> *"…and Allah increases a servant who forgives in nothing but honour."* (Muslim 2588)

That afternoon the sandcastle stood again. But the sturdiest thing wasn't the castle — it was the bond that had just been mended with one warm word.`,
    },
    anchor: { type: "parenting", slug: "adab-sehari-hari" },
    takeaway: {
      id: "Maaf yang tulus tidak menghancurkan apa-apa — ia membangun sesuatu yang lebih kuat. Tunjukkan akibatnya pada hati, bukan paksa kata-katanya.",
      en: "A sincere sorry destroys nothing — it builds something stronger. Show a child the effect on a heart, don't force the word.",
    },
    tags: ["maaf", "empati", "akhlak", "buku"],
    readingTimeMin: 3,
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

> *"Sesungguhnya jika kamu bersyukur, pasti Aku akan menambah (nikmat) kepadamu."* (QS. Ibrahim: 7)

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

> *"If you are grateful, I will surely increase you."* (Qur'an, Ibrahim 14:7)

That night, Baby Mo and Baby Ais drifted to sleep beneath a heart-ceiling full of stars. Not because their day was perfect — but because they'd learned to count what was enough, not what was missing.`,
    },
    anchor: { type: "parenting", slug: "bersyukur" },
    takeaway: {
      id: "Hari yang biasa pun penuh bintang kalau kita mau mencarinya. Ajak anak menghitung nikmat tiap malam — ia tumbuh melihat yang cukup, bukan yang kurang.",
      en: "Even an ordinary day is full of stars if we look. Count blessings with a child each night — and they grow up seeing what's enough, not what's missing.",
    },
    tags: ["syukur", "malam", "akhlak", "buku"],
    readingTimeMin: 3,
  },

  {
    slug: "keberanian-sebesar-biji-sawi",
    surahs: ["al-falaq", "an-nas"],
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

> *A'uudzu bikalimaatillaahit-taammaati min syarri maa khalaq.* — "Aku berlindung dengan kalimat-kalimat Allah yang sempurna dari kejahatan makhluk yang Dia ciptakan." (HR. Muslim 2708)

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

> *A'uudhu bikalimaatillaahit-taammaati min sharri maa khalaq.* — "I seek refuge in the perfect words of Allah from the evil of what He has created." (Muslim 2708)

That night Baby Mo fell asleep with a courage the size of a mustard seed inside his chest. Small. But enough to make the whole dark feel safe.`,
    },
    anchor: { type: "doa", slug: "perlindungan-anak" },
    takeaway: {
      id: "Berani bukan berarti tidak takut — berani berarti takut, tapi tetap percaya Allah menjaga. Beri anak doa kecil, dan gelap pun terasa aman.",
      en: "Brave doesn't mean unafraid — it means scared, but still trusting Allah watches over you. Give a child a small du'a, and even the dark feels safe.",
    },
    tags: ["berani", "takut-gelap", "akhlak", "buku"],
    readingTimeMin: 3,
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

> *"Jibril terus-menerus berpesan kepadaku tentang tetangga, sampai aku mengira ia akan menjadikan tetangga sebagai ahli waris."* (HR. Bukhari 6014, Muslim 2624)

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

> *"Jibril kept advising me about the neighbour until I thought he would make him an heir."* (Bukhari 6014, Muslim 2624)

That night the stew tasted twice as good. Because the sweetest thing, it turned out, wasn't the sugar — it was a plate shared with a neighbour.`,
    },
    anchor: { type: "hadith", slug: "tetangga-keluarga-luas" },
    takeaway: {
      id: "Berbagi itu mengenyangkan hati. Kebiasaan memberi ke tetangga di depan anak menanam kemurahan hati yang akan tumbuh seumur hidup.",
      en: "Sharing fills the heart. The habit of giving to neighbours, done in front of a child, plants a generosity that grows for a lifetime.",
    },
    tags: ["berbagi", "tetangga", "akhlak", "buku"],
    readingTimeMin: 3,
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

> *"Sesungguhnya bersama kesulitan ada kemudahan."* (QS. Al-Insyirah: 6)

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

> *"Indeed, with hardship comes ease."* (Qur'an, Ash-Sharh 94:6)

A few weeks later, the sunflower grew taller than Baby Ais herself, its face turned toward the sun. And every time she looked at it, Baby Ais remembered: what is planted with patience will bloom in its time.`,
    },
    anchor: { type: "doa", slug: "mendapat-rezeki" },
    takeaway: {
      id: "Yang ditanam dengan sabar akan mekar pada waktunya. Hal baik — bunga, hati yang baik — tumbuh pelan-pelan di tempat yang tak terlihat.",
      en: "What is planted with patience blooms in its time. Good things — a flower, a kind heart — grow slowly in places we cannot see.",
    },
    tags: ["sabar", "syukur", "akhlak", "buku"],
    readingTimeMin: 3,
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

> *"Tidak sempurna iman salah seorang dari kalian, hingga ia mencintai untuk saudaranya apa yang ia cintai untuk dirinya sendiri."* (HR. Bukhari 13, Muslim 45)

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

> *"None of you truly believes until he loves for his brother what he loves for himself."* (Bukhari 13, Muslim 45)

That night, Baby Mo sneezed a little. But he smiled under his blanket. Because sharing an umbrella, it turned out, was far warmer than being dry alone.`,
    },
    anchor: { type: "parenting", slug: "anak-tidak-mau-berbagi" },
    takeaway: {
      id: "Bahu yang basah bisa dikeringkan; hati yang belajar mendahulukan orang lain menghangatkan seluruh rumah. Berbagi lebih hangat daripada kering sendirian.",
      en: "A wet shoulder can be dried; a heart that learns to put others first warms the whole house. Sharing is warmer than being dry alone.",
    },
    tags: ["berbagi", "kasih-sayang", "akhlak", "buku"],
    readingTimeMin: 3,
  },

  {
    slug: "selamat-tidur-sayang",
    surahs: ["al-ikhlas", "al-falaq", "an-nas"],
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

> *Bismika Allahumma ahyaa wa amuut.* — "Dengan nama-Mu, ya Allah, aku hidup dan aku mati." (HR. Bukhari 6324, Muslim 2711)

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

> *Bismika Allahumma ahyaa wa amuut.* — "In Your name, O Allah, I live and I die." (Bukhari 6324, Muslim 2711)

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
    readingTimeMin: 3,
  },


  // ═══════════════════════════════════════════════════════════════════
  //  CERITA ANAK × MOMEN — book-draft stories tied to the Baby Mo videos
  //  (embedded + VideoObject schema) so the written + video content
  //  cross-link for SEO. Longer, with facts, humour and curiosity.
  // ═══════════════════════════════════════════════════════════════════
  {
    slug: "bulan-yang-mengikuti-baby-mo",
    surahs: ["al-ikhlas", "al-falaq", "an-nas"],
    kind: "story",
    child: "both",
    pose: "baby-mo-pose-09.png",
    video: "orXDAOHAKw8",
    published: "2026-06-04",
    title: {
      id: "Bulan yang Mengikuti Baby Mo",
      en: "The Moon That Followed Baby Mo",
    },
    hook: {
      id: "Sepanjang perjalanan pulang, bulan terus mengikuti mobil. Apakah bulan benar-benar teman Baby Mo? Dan kenapa kita harus tidur, sih?",
      en: "All the way home, the moon kept following the car. Is the moon really Baby Mo's friend? And why do we have to sleep, anyway?",
    },
    body: {
      id: `Malam itu Baby Mo dan Baby Ais pulang naik mobil. Di luar jendela, langit sudah gelap dan penuh taburan bintang. Lalu Baby Mo melihatnya — sebuah bulan besar bulat berwarna keperakan.

"Umi!" seru Baby Mo. "Bulannya jalan! Bulannya ngikutin Mo!"

Memang benar. Setiap kali mobil belok, bulan ikut belok. Mobil ngebut, bulan ikut ngebut. Baby Mo melambai. "Hai, Bulan!" Dan ia yakin sekali bulan itu melambai balik.

"Tahukah kamu," kata Abi pelan, "kenapa bulan terlihat mengikuti kita?" Baby Mo menggeleng, matanya berbinar. "Karena bulan itu sangat, sangat jauh. Jauuuh sekali. Jadi walaupun mobil kita bergerak, bulan terlihat tetap di tempatnya — seakan-akan ia setia menemani kita pulang."

Baby Ais menempelkan hidungnya ke kaca. "Bu-yan," bisiknya kagum.

"Dan ada rahasia lagi," lanjut Abi. "Bulan itu sebenarnya tidak punya cahaya sendiri. Cahaya bulan itu pinjaman dari matahari! Matahari menyinari bulan, lalu bulan memantulkannya ke kita, supaya malam tidak terlalu gelap. Allah yang mengaturnya sebagai lampu malam untuk seluruh dunia."

"Lampu malam sedunia," ulang Baby Mo takjub. Ia membayangkan satu lampu tidur raksasa untuk semua anak di bumi.

Sampai di rumah, mata Baby Mo sudah berat. Tapi ia belum mau tidur. "Mo nggak ngantuk," katanya — sambil menguap lebar sekali, "hoaaahm" — sampai Baby Ais ikut menguap. (Tahukah kamu? Menguap itu menular. Kalau satu orang menguap, yang lain sering ikut. Coba perhatikan!)

Abi tergelak. "Badan kecilmu sudah bekerja keras seharian, Sayang. Tidur itu seperti mengisi baterai. Saat kamu tidur, badanmu diam-diam memperbaiki dirinya, supaya besok kamu bisa berlari dan bermain lagi."

Maka Baby Mo dan Baby Ais naik ke tempat tidur. Abi mematikan lampu, dan dari jendela, bulan keperakan itu masih mengintip, setia menjaga.

"Sebelum tidur, kita titipkan diri kita kepada Allah, ya," bisik Abi. Lalu mereka membaca bersama, pelan-pelan:

> *Bismika Allahumma ahyaa wa amuut.* — "Dengan nama-Mu, ya Allah, aku hidup dan aku mati." (HR. Bukhari 6324, Muslim 2711)

"Artinya," kata Abi, "saat kita tidur dan tidak bisa melihat apa-apa, Allah tetap melihat kita. Allah tidak pernah tidur. Jadi kita bisa tidur dengan tenang."

Baby Mo memandang bulan untuk terakhir kali. "Selamat malam, Bulan," gumamnya. "Allah jaga kita semua."

Dan dengan itu, mata kecilnya pun terpejam — di bawah lampu malam sedunia yang dinyalakan Allah, khusus untuk anak-anak yang akan tidur.

Selamat tidur, ya, Sayang. Mimpi indah. 🌙`,
      en: `That night Baby Mo and Baby Ais were driving home. Outside the window, the sky was already dark and sprinkled with stars. Then Baby Mo saw it — a big, round, silvery moon.

"Umi!" cried Baby Mo. "The moon is moving! The moon is following Mo!"

And it was true. Every time the car turned, the moon turned too. The car sped up, the moon sped up. Baby Mo waved. "Hi, Moon!" And he was quite sure the moon waved back.

"Do you know," said Abi softly, "why the moon looks like it's following us?" Baby Mo shook his head, eyes shining. "Because the moon is very, very far away. Sooo far. So even though our car moves, the moon looks like it stays in place — as if it's faithfully keeping us company on the way home."

Baby Ais pressed her nose to the glass. "Moo-n," she whispered in awe.

"And there's another secret," Abi went on. "The moon doesn't actually have its own light. Moonlight is borrowed from the sun! The sun shines on the moon, and the moon reflects it down to us, so the night isn't too dark. Allah arranged it as a night light for the whole world."

"A night light for the whole world," repeated Baby Mo, amazed. He pictured one giant night light for every child on earth.

By the time they got home, Baby Mo's eyes were heavy. But he didn't want to sleep yet. "Mo's not sleepy," he said — while yawning enormously, "yaaawn" — until Baby Ais yawned too. (Did you know? Yawning is contagious. When one person yawns, others often follow. Try watching!)

Abi chuckled. "Your little body has worked hard all day, sweetheart. Sleep is like recharging a battery. While you sleep, your body quietly repairs itself, so tomorrow you can run and play all over again."

So Baby Mo and Baby Ais climbed into bed. Abi switched off the light, and from the window, that silvery moon still peeked in, faithfully keeping watch.

"Before sleep, let's entrust ourselves to Allah," whispered Abi. Then they recited together, slowly:

> *Bismika Allahumma ahyaa wa amuut.* — "In Your name, O Allah, I live and I die." (Bukhari 6324, Muslim 2711)

"It means," said Abi, "when we sleep and can't see anything, Allah still sees us. Allah never sleeps. So we can rest in peace."

Baby Mo looked at the moon one last time. "Goodnight, Moon," he mumbled. "May Allah watch over us all."

And with that, his little eyes closed — beneath the world's night light that Allah switched on, just for children about to fall asleep.

Goodnight, sweetheart. Sweet dreams. 🌙`,
    },
    anchor: { type: "doa", slug: "sebelum-tidur" },
    takeaway: {
      id: "Bulan terlihat mengikuti kita karena ia sangat jauh, dan cahayanya pinjaman dari matahari — lampu malam yang Allah nyalakan. Saat kita tidur dan tak bisa melihat, Allah tetap menjaga.",
      en: "The moon seems to follow us because it's so far away, and its light is borrowed from the sun — a night light Allah switched on. When we sleep and can't see, Allah still watches over us.",
    },
    tags: ["malam", "doa-tidur", "fakta-seru", "buku"],
    readingTimeMin: 4,
  },

  {
    slug: "ayam-jago-paling-pagi",
    kind: "story",
    child: "ais",
    pose: "baby-mo-yeyy.png",
    video: "L6bXkRuO5vc",
    published: "2026-05-15",
    title: {
      id: "Ayam Jago Paling Pagi",
      en: "The Earliest Rooster",
    },
    hook: {
      id: "Siapa yang bangun paling pagi di dunia? Baby Ais bertekad mengalahkan Pak Ayam Jago. Tapi pagi menyimpan kejutan yang lebih besar.",
      en: "Who wakes up earliest in the world? Baby Ais is determined to beat Mr. Rooster. But the morning holds a bigger surprise.",
    },
    body: {
      id: `"Kukuruyuuuk!"

Setiap pagi, sebelum matahari benar-benar naik, suara Pak Ayam Jago tetangga sudah membangunkan seisi kampung. Dan setiap pagi, Baby Ais merasa kesal sedikit. "Pak Ayam selalu menang," gerutunya. "Ais mau bangun paling pagi sedunia!"

Maka suatu malam, Baby Ais bertekad. Ia tidur lebih awal, memeluk boneka beruangnya erat-erat. "Besok," bisiknya, "Ais yang menang."

Keesokan harinya, Baby Ais membuka mata di kegelapan yang masih biru keabu-abuan. Belum ada suara ayam! Ia melompat ke jendela. "Ais menang! Ais menang!" — rambutnya berdiri ke segala arah, persis seperti jambul Pak Ayam Jago. Baby Mo yang ikut terbangun terkikik melihatnya.

Tapi tunggu… ternyata Baby Ais tidak sendirian.

Dari pohon di luar, terdengar seekor burung kecil mulai bernyanyi. Lalu burung kedua. Lalu ketiga. Pelan-pelan, seluruh pohon dipenuhi kicauan — seperti paduan suara. (Tahukah kamu? Para ahli menyebutnya "paduan suara fajar". Burung-burung memang bernyanyi paling ramai saat pagi mulai datang, seakan mengucapkan selamat pagi pada dunia.)

"Wah," bisik Baby Ais, takjub. "Burung-burung bangun lebih pagi dari Ais."

Lalu — "Kukuruyuuuk!" — Pak Ayam Jago pun ikut. Baby Ais tertawa. Ia mencoba menirukannya, "Ku-ku-yuuu!" Suaranya lucu sekali sampai Baby Mo terguling-guling.

Umi masuk sambil tersenyum. "Masya Allah, sudah bangun pagi sekali. Tahukah kalian, ada satu hal yang bangun lebih dulu dari burung dan ayam?"

"Apa, Umi?" tanya Baby Ais.

"Hati yang bersyukur," kata Umi lembut. "Saat kita tidur, kita seperti 'dititipkan' kepada Allah. Lalu setiap pagi, Allah mengembalikan nyawa dan kekuatan kita, supaya kita bisa membuka mata lagi. Itu hadiah besar! Maka kita ucapkan terima kasih dulu."

Mereka pun duduk bersila, dan membaca pelan-pelan doa bangun tidur:

> *Alhamdulillahilladzii ahyaanaa ba'da maa amaatanaa wa ilaihin-nusyuur.* — "Segala puji bagi Allah yang menghidupkan kami setelah mematikan kami, dan kepada-Nya kami kembali." (HR. Bukhari 6312)

"Jadi," kata Baby Ais sambil berpikir keras, "Ais memang nggak menang lawan burung. Tapi Ais menang karena bilang terima kasih duluan?"

Umi memeluknya. "Itu kemenangan yang paling indah, Sayang."

Pagi itu matahari akhirnya naik, hangat dan keemasan. Burung-burung masih bernyanyi, Pak Ayam masih berkokok, dan dua anak kembar memulai hari mereka dengan satu kalimat syukur.

Selamat pagi, dunia! Selamat pagi dari Baby Mo dan Baby Ais. ☀️`,
      en: `"Cock-a-doodle-doo!"

Every morning, before the sun was truly up, the neighbour's rooster, Mr. Rooster, woke the whole village. And every morning, Baby Ais felt a little annoyed. "Mr. Rooster always wins," she grumbled. "Ais wants to wake up earliest in the world!"

So one night, Baby Ais made up her mind. She went to bed early, hugging her teddy bear tight. "Tomorrow," she whispered, "Ais wins."

The next day, Baby Ais opened her eyes in a darkness still tinted blue-grey. No rooster yet! She leapt to the window. "Ais wins! Ais wins!" — her hair sticking out in every direction, exactly like Mr. Rooster's crest. Baby Mo, who'd woken too, giggled at the sight.

But wait… Baby Ais wasn't alone.

From the tree outside, a little bird began to sing. Then a second bird. Then a third. Slowly, the whole tree filled with chirping — like a choir. (Did you know? Experts call it the "dawn chorus". Birds really do sing loudest as morning arrives, as if saying good morning to the world.)

"Wow," whispered Baby Ais, amazed. "The birds woke up earlier than Ais."

Then — "Cock-a-doodle-doo!" — Mr. Rooster joined in. Baby Ais laughed. She tried to copy him, "Cock-a-doodle-doooo!" Her voice was so funny that Baby Mo rolled over giggling.

Umi came in smiling. "Masha'Allah, awake so early. Do you know, there's one thing that wakes up even before the birds and the rooster?"

"What, Umi?" asked Baby Ais.

"A grateful heart," said Umi gently. "When we sleep, we are like something 'entrusted' to Allah. Then every morning, Allah returns our life and strength, so we can open our eyes again. That's a huge gift! So we say thank you first."

So they sat cross-legged and recited, slowly, the waking-up du'a:

> *Alhamdulillahilladhi ahyana ba'da ma amatana wa ilaihin-nushur.* — "All praise is for Allah who gave us life after causing us to die, and to Him is the return." (Bukhari 6312)

"So," said Baby Ais, thinking hard, "Ais didn't really beat the birds. But Ais wins because she said thank you first?"

Umi hugged her. "That's the most beautiful kind of winning, sweetheart."

That morning the sun finally rose, warm and golden. The birds still sang, Mr. Rooster still crowed, and two little twins began their day with one sentence of gratitude.

Good morning, world! Good morning from Baby Mo and Baby Ais. ☀️`,
    },
    anchor: { type: "doa", slug: "bangun-tidur" },
    takeaway: {
      id: "Setiap pagi Allah mengembalikan nyawa dan kekuatan kita — hadiah besar. Bangun pagi bukan soal mengalahkan ayam, tapi soal siapa yang lebih dulu berterima kasih.",
      en: "Every morning Allah returns our life and strength — a huge gift. Waking early isn't about beating the rooster; it's about who says thank you first.",
    },
    tags: ["pagi", "syukur", "fakta-seru", "buku"],
    readingTimeMin: 4,
  },

  {
    slug: "rahasia-lebah-dan-roti-madu",
    kind: "story",
    child: "mo",
    pose: "baby-mo-idea.png",
    video: "cmK8ruUiCbA",
    published: "2026-05-14",
    title: {
      id: "Rahasia Lebah dan Roti Madu",
      en: "The Secret of the Bee and the Honey Bread",
    },
    hook: {
      id: "Sebelum menggigit roti madunya, Baby Mo bertanya: dari mana, sih, datangnya madu? Jawabannya membawanya pada seekor pahlawan kecil bergaris kuning-hitam.",
      en: "Before biting his honey bread, Baby Mo asked: where does honey even come from? The answer leads him to a tiny hero in yellow-and-black stripes.",
    },
    body: {
      id: `Di meja makan, ada sepotong roti hangat yang diolesi madu keemasan. Baby Mo sudah siap menggigitnya. Tapi tiba-tiba ia berhenti dan bertanya, "Umi… madu ini datang dari mana?"

Umi tersenyum. "Dari seekor pahlawan kecil. Namanya: lebah."

Baby Mo membulatkan mata. "Lebah yang dengung-dengung itu?"

"Iya," kata Umi. "Dan dengarkan ini — untuk membuat madu sebanyak satu sendok saja yang ada di rotimu, seekor lebah harus mengunjungi ribuan bunga. Ribuan! Ia terbang dari bunga ke bunga, mengumpulkan sari manisnya sedikit demi sedikit, tanpa pernah mengeluh."

"Ribuan bunga?" Baby Mo memandang sesendok madunya dengan rasa hormat yang baru. Tadinya cuma madu. Sekarang ia tahu itu hasil kerja keras seekor makhluk mungil.

"Ada lagi yang lebih menakjubkan," lanjut Umi. "Kalau seekor lebah menemukan kebun bunga yang banyak, ia pulang ke sarang dan… menari! Ya, menari. Gerakan tariannya memberitahu teman-temannya ke arah mana harus terbang. Itulah cara lebah berkata, 'Teman-teman, makanan enak ada di sebelah sana!'"

Baby Mo terkikik membayangkan lebah-lebah berjoget. Lalu ia berbisik, setengah serius, "Berarti waktu lebah dengung 'zzzz', mungkin dia lagi bilang 'bismillaaah-zzz' sebelum kerja!" Umi tertawa. "Bisa jadi, Sayang."

"Dan kamu tahu," tambah Abi yang baru bergabung, "di dalam Al-Qur'an ada satu surat yang namanya An-Nahl — artinya 'Lebah'. Allah menyebut lebah secara khusus, dan mengabarkan bahwa dari perutnya keluar minuman bermacam warna yang ada obat untuk manusia. Madu kecil ini ternyata disebut di kitab yang paling mulia."

Baby Mo memandang rotinya — roti yang sama, tapi sekarang terasa istimewa. Begitu banyak perjalanan untuk satu gigitan: bunga, lebah, tarian, sarang, sampai ke mejanya.

"Jadi," kata Umi lembut, "sebelum makan, pantas sekali kita berhenti sebentar dan berterima kasih kepada Allah yang menciptakan semua itu. Yuk."

Baby Mo memegang rotinya dengan dua tangan, menarik napas, dan berkata dengan sungguh-sungguh:

> *Bismillah.* — "Dengan nama Allah." (HR. Abu Dawud 3767)

Gigitan pertama itu terasa paling manis seumur hidupnya. Bukan cuma karena madunya — tapi karena kini ia tahu betapa panjang dan ajaib perjalanan rezeki sampai ke tangannya.

Lain kali kamu makan madu, ingat ya: ada ribuan bunga dan seekor pahlawan kecil bergaris kuning-hitam di baliknya. Masya Allah. 🐝`,
      en: `On the table sat a piece of warm bread spread with golden honey. Baby Mo was ready to take a bite. But suddenly he stopped and asked, "Umi… where does this honey come from?"

Umi smiled. "From a tiny hero. Its name: the bee."

Baby Mo's eyes went round. "The buzzy-buzzy bee?"

"Yes," said Umi. "And listen to this — to make just one spoonful of the honey on your bread, a bee has to visit thousands of flowers. Thousands! It flies from flower to flower, gathering the sweet nectar little by little, never once complaining."

"Thousands of flowers?" Baby Mo looked at his spoonful of honey with new respect. Before, it was just honey. Now he knew it was the hard work of a tiny creature.

"There's something even more amazing," Umi went on. "When a bee finds a garden full of flowers, it flies home to the hive and… dances! Yes, dances. Its dance moves tell its friends which way to fly. That's how a bee says, 'Friends, delicious food is over there!'"

Baby Mo giggled, picturing bees boogying. Then he whispered, half serious, "So when a bee buzzes 'zzzz', maybe it's saying 'bismillaaah-zzz' before it works!" Umi laughed. "Could be, sweetheart."

"And you know," added Abi, just joining them, "in the Qur'an there's a chapter called An-Nahl — meaning 'The Bee'. Allah mentions the bee specially, and tells us that from its belly comes a drink of many colours in which there is healing for people. This little honey is named in the most noble Book."

Baby Mo looked at his bread — the same bread, but now it felt special. So many journeys for one bite: the flower, the bee, the dance, the hive, all the way to his table.

"So," said Umi gently, "before we eat, it's only fitting to pause a moment and thank Allah who created all of it. Come on."

Baby Mo held his bread with both hands, took a breath, and said, sincerely:

> *Bismillah.* — "In the name of Allah." (Abu Dawud 3767)

That first bite tasted the sweetest of his whole life. Not only because of the honey — but because now he knew how long and wondrous the journey of provision was, all the way to his hands.

Next time you eat honey, remember: there are thousands of flowers and a tiny striped hero behind it. Masha'Allah. 🐝`,
    },
    anchor: { type: "doa", slug: "sebelum-makan" },
    takeaway: {
      id: "Satu sendok madu butuh ribuan bunga dan kerja keras seekor lebah (yang Allah sebut dalam Surah An-Nahl). Sebelum makan, kita berhenti sejenak dan berterima kasih atas perjalanan panjang rezeki.",
      en: "One spoon of honey takes thousands of flowers and a bee's hard work (which Allah names in Surah An-Nahl). Before eating, we pause and give thanks for provision's long journey.",
    },
    tags: ["adab-makan", "syukur", "fakta-seru", "buku"],
    readingTimeMin: 4,
  },

  {
    slug: "semut-kecil-yang-kuat",
    kind: "story",
    child: "both",
    pose: "baby-mo-thank-you.png",
    video: "X6ZGk_e7A00",
    published: "2026-05-13",
    title: {
      id: "Semut Kecil yang Kuat",
      en: "The Mighty Little Ant",
    },
    hook: {
      id: "Sebutir remah jatuh dari piring Baby Ais. Lalu datanglah seekor semut — dan sebuah pelajaran besar tentang kekuatan, kerja sama, dan ucapan terima kasih.",
      en: "A crumb falls from Baby Ais's plate. Then comes an ant — and a big lesson about strength, teamwork, and saying thank you.",
    },
    body: {
      id: `Baby Mo dan Baby Ais baru saja selesai makan. Piring mereka hampir bersih — kecuali sebutir remah roti yang jatuh ke lantai.

Baby Ais hendak menyapunya, tapi Baby Mo berseru, "Tunggu! Lihat!" Seekor semut kecil datang menghampiri remah itu. Mungil sekali, lebih kecil dari kuku jari. Lalu — hup! — semut itu mengangkat remah yang ukurannya berkali-kali lipat dari badannya sendiri, dan mulai membawanya pergi.

"Wah!" Baby Mo dan Baby Ais ternganga bersamaan. "Kuat sekali!"

Abi yang sedang minum teh ikut menonton. "Tahukah kalian," katanya, "semut itu bisa mengangkat benda yang jauh lebih berat dari tubuhnya. Bayangkan kalau kamu, Mo, bisa mengangkat mobil di atas kepalamu — kira-kira begitulah hebatnya semut!"

Baby Mo langsung mencoba mengangkat kursi, dan… tidak bisa. Ia tertawa. "Semut menang!"

Mereka mengikuti si semut. Ternyata ia tidak sendirian. Ada barisan semut lain, berjalan rapi satu-satu, saling menyapa dengan antena mereka. "Mereka kerja sama," kata Abi. "Tidak ada satu semut pun yang berkata, 'ah, itu bukan tugasku.' Mereka semua saling membantu membawa makanan untuk keluarga besar mereka."

Baby Ais berjongkok dekat-dekat dan berbisik sopan ke arah si semut, "Terima kasih sudah membersihkan remahnya, ya." Baby Mo terkikik, tapi diam-diam ikut mengangguk.

"Dan dengarkan ini," kata Abi, suaranya menjadi lembut. "Di dalam Al-Qur'an ada satu surat bernama An-Naml — artinya 'Semut'. Diceritakan, dulu ada seekor semut yang melihat pasukan Nabi Sulaiman datang. Semut itu cepat-cepat berkata kepada teman-temannya, 'Masuklah ke sarang, supaya kalian tidak terinjak!' Ia menjaga teman-temannya. Dan Nabi Sulaiman — yang bisa memahami bahasa hewan — tersenyum mendengarnya."

"Semut yang baik," bisik Baby Ais.

"Nah," kata Abi, "kita juga baru saja diberi makanan yang mengenyangkan. Pantas sekali kita meniru hati yang bersyukur. Yuk, kita ucapkan terima kasih kepada Allah."

Maka mereka pun membaca doa setelah makan, pelan-pelan:

> *Alhamdulillaahilladzii ath'amanii haadzaa wa razaqaniihi min ghairi haulin minnii wa laa quwwah.* — "Segala puji bagi Allah yang telah memberiku makanan ini dan merezekikannya kepadaku tanpa daya dan kekuatan dariku." (HR. Abu Dawud 4023, Tirmidzi 3458)

Setelah itu, Baby Ais dengan hati-hati meletakkan satu remah kecil lagi di dekat barisan semut. "Buat kamu, ya," katanya. "Berbagi itu enak."

Si semut mungil pun melanjutkan perjalanannya, membawa hadiah kecil itu pulang — kuat, rajin, dan tidak pernah lupa bekerja sama.

Hebat ya, makhluk sekecil itu. Masya Allah. 🐜`,
      en: `Baby Mo and Baby Ais had just finished eating. Their plates were nearly clean — except for one bread crumb that had fallen to the floor.

Baby Ais was about to sweep it up, but Baby Mo cried, "Wait! Look!" A tiny ant came up to the crumb. So tiny, smaller than a fingernail. Then — hup! — the ant lifted the crumb, many times the size of its own body, and started carrying it away.

"Whoa!" Baby Mo and Baby Ais gasped together. "So strong!"

Abi, sipping his tea, watched too. "Did you know," he said, "an ant can lift things far heavier than its own body. Imagine if you, Mo, could lift a car over your head — that's about how mighty an ant is!"

Baby Mo immediately tried to lift a chair, and… couldn't. He laughed. "The ant wins!"

They followed the ant. It turned out it wasn't alone. There was a line of other ants, walking neatly one by one, greeting each other with their antennae. "They work as a team," said Abi. "Not a single ant says, 'ah, that's not my job.' They all help carry food for their big family."

Baby Ais crouched down close and whispered politely to the ant, "Thank you for cleaning up the crumb." Baby Mo giggled, but secretly nodded along.

"And listen to this," said Abi, his voice turning gentle. "In the Qur'an there's a chapter called An-Naml — meaning 'The Ant'. It tells of an ant that saw Prophet Sulaiman's army coming. The ant quickly told its friends, 'Get into your homes, so you won't be trampled!' It protected its friends. And Prophet Sulaiman — who could understand animal speech — smiled when he heard it."

"A kind ant," whispered Baby Ais.

"Now," said Abi, "we too were just given a filling meal. It's only right we copy that grateful heart. Come, let's thank Allah."

So they recited, slowly, the du'a after eating:

> *Alhamdulillaahilladhii at'amanii haadhaa wa razaqaniihi min ghairi hawlin minnii wa laa quwwah.* — "All praise is for Allah who fed me this and provided it for me without any power or strength from me." (Abu Dawud 4023, Tirmidzi 3458)

After that, Baby Ais carefully placed one more little crumb near the line of ants. "This is for you," she said. "Sharing feels nice."

The mighty little ant carried on its journey, taking that small gift home — strong, hard-working, and never forgetting to team up.

Amazing, isn't it, such a tiny creature. Masha'Allah. 🐜`,
    },
    anchor: { type: "doa", slug: "sesudah-makan" },
    takeaway: {
      id: "Semut kecil bisa mengangkat berkali-kali berat tubuhnya dan selalu bekerja sama (Allah sebut dalam Surah An-Naml). Setelah makan, kita meniru hati yang bersyukur — dan berbagi.",
      en: "A tiny ant can lift many times its own weight and always teams up (Allah names it in Surah An-Naml). After eating, we copy that grateful heart — and share.",
    },
    tags: ["adab-makan", "syukur", "fakta-seru", "buku"],
    readingTimeMin: 4,
  },

  {
    slug: "dua-gambar-yang-hampir-sama",
    kind: "story",
    child: "both",
    pose: "baby-mo-wow.png",
    video: "BhLRQP_Nfdk",
    published: "2026-05-12",
    title: {
      id: "Dua Gambar yang Hampir Sama",
      en: "Two Pictures That Look Almost the Same",
    },
    hook: {
      id: "Dua gambar terlihat persis sama… atau tidak? Baby Mo dan Baby Ais belajar bahwa mata yang sabar dan teliti bisa menemukan keajaiban yang tersembunyi.",
      en: "Two pictures look exactly the same… or do they? Baby Mo and Baby Ais learn that patient, careful eyes can find hidden wonders.",
    },
    body: {
      id: `Suatu sore yang santai, Abi mengeluarkan dua gambar dan meletakkannya berdampingan. "Coba lihat baik-baik," katanya. "Dua gambar ini hampir sama. Tapi ada lima perbedaan yang bersembunyi. Siapa yang bisa menemukannya?"

"AKU!" seru Baby Mo, langsung menunjuk asal. "Itu! Itu beda!"

Abi tersenyum. "Itu sama, Sayang. Coba lihat lebih pelan."

Baby Mo cemberut sebentar. Ternyata menemukan perbedaan tidak bisa buru-buru. Ia harus melihat pelan-pelan, sabar, dari atas ke bawah. Baby Ais ikut menempelkan wajahnya ke gambar, matanya bergerak teliti seperti detektif kecil.

"Ketemu!" pekik Baby Ais. "Awannya beda! Yang ini ada tiga, yang itu dua!"

"Masya Allah, hebat!" kata Abi. "Itu satu. Empat lagi."

Pelan-pelan mereka menemukannya: bunga yang hilang, warna sepatu yang berbeda, seekor kupu-kupu yang pindah tempat. Tinggal satu lagi. Mereka mencari… dan mencari…

"Kucingnya ngedip!" seru Baby Mo tiba-tiba, sangat yakin. "Di gambar ini matanya buka, di sini merem! Kucingnya ngedip ke Mo!" Abi tertawa terbahak-bahak. "Betuuul! Itu yang kelima! Tapi kucingnya bukan ngedip ke kamu — pelukisnya yang sengaja membuatnya begitu."

Setelah semua perbedaan ketemu, Abi berkata, "Tahukah kalian satu rahasia tentang mata kalian? Setiap menit, mata kita berkedip sekitar lima belas sampai dua puluh kali — dan kita bahkan tidak menyadarinya! Mata itu hadiah yang luar biasa dari Allah. Tapi mata hanya bisa benar-benar 'melihat' kalau kita mau memperhatikan dengan sabar."

"Memperhatikan dengan sabar," ulang Baby Ais pelan.

"Betul," kata Abi. "Banyak keindahan di dunia ini yang tersembunyi di hal-hal kecil. Sayap kupu-kupu yang sisi kiri dan kanannya sama persis. Garis-garis di ujung jarimu yang tidak sama dengan siapa pun di seluruh dunia — bahkan tidak sama dengan Baby Ais, walaupun kalian kembar! Semua itu buatan Allah yang Maha Teliti. Orang yang suka memperhatikan, akan selalu menemukan alasan untuk berkata 'Masya Allah'."

Baby Mo memandang ujung jarinya sendiri, lalu jari Baby Ais. Benar — garisnya beda! Ia ternganga. "Wow."

Sejak hari itu, Baby Mo dan Baby Ais punya permainan kesukaan baru: berjalan pelan-pelan dan mencari "perbedaan" serta keajaiban kecil di mana-mana. Di daun, di awan, di sayap capung. Dan setiap kali menemukan sesuatu yang menakjubkan, mereka berseru bersama:

"Masya Allah!"

Karena ternyata, dunia ini penuh keajaiban — bagi mata yang sabar dan hati yang mau memperhatikan. 👀✨`,
      en: `One relaxed afternoon, Abi took out two pictures and laid them side by side. "Look carefully," he said. "These two pictures are almost the same. But there are five differences hiding. Who can find them?"

"ME!" cried Baby Mo, pointing at random. "That one! That's different!"

Abi smiled. "That's the same, sweetheart. Look more slowly."

Baby Mo pouted for a second. It turned out finding differences couldn't be rushed. He had to look slowly, patiently, from top to bottom. Baby Ais pressed her face to the picture too, her eyes moving carefully like a little detective.

"Found one!" squealed Baby Ais. "The clouds are different! This one has three, that one has two!"

"Masha'Allah, well done!" said Abi. "That's one. Four to go."

Slowly they found them: a missing flower, a different shoe colour, a butterfly that had moved. Just one left. They searched… and searched…

"The cat winked!" Baby Mo suddenly cried, utterly certain. "In this picture its eyes are open, here they're shut! The cat winked at Mo!" Abi burst out laughing. "Correct! That's the fifth! But the cat didn't wink at you — the artist drew it that way on purpose."

Once all the differences were found, Abi said, "Do you know a secret about your eyes? Every minute, our eyes blink about fifteen to twenty times — and we don't even notice! Eyes are an amazing gift from Allah. But eyes can only truly 'see' if we're willing to pay patient attention."

"Patient attention," repeated Baby Ais softly.

"Exactly," said Abi. "So much beauty in this world is hidden in little things. A butterfly's wings, identical on the left and right. The lines on your fingertips, which match no one else in the whole world — not even Baby Ais, even though you're twins! All made by Allah, the Most Precise. Those who love to notice will always find a reason to say 'Masha'Allah'."

Baby Mo looked at his own fingertip, then at Baby Ais's. It was true — the lines were different! His jaw dropped. "Whoa."

From that day on, Baby Mo and Baby Ais had a new favourite game: walking slowly and hunting for "differences" and little wonders everywhere. In a leaf, in a cloud, on a dragonfly's wing. And every time they found something amazing, they cried out together:

"Masha'Allah!"

Because it turns out, this world is full of wonders — for patient eyes and a heart willing to pay attention. 👀✨`,
    },
    anchor: { type: "parenting", slug: "adab-sehari-hari" },
    takeaway: {
      id: "Mata kita berkedip 15–20 kali tiap menit tanpa kita sadari — hadiah dari Allah. Tapi keindahan dunia hanya terlihat oleh mata yang sabar memperhatikan. Yang suka memperhatikan, selalu menemukan alasan berkata 'Masya Allah'.",
      en: "Our eyes blink 15–20 times a minute without us noticing — a gift from Allah. But the world's beauty is only seen by patient, attentive eyes. Those who notice always find a reason to say 'Masha'Allah'.",
    },
    tags: ["fakta-seru", "sabar", "tadabbur", "buku"],
    readingTimeMin: 4,
  },


  // ═══════════════════════════════════════════════════════════════════
  //  CERITA ANAK — the Baby Mo & Baby Ais bond. Warm, funny, cute twin
  //  moments so young readers learn to love and enjoy their siblings.
  // ═══════════════════════════════════════════════════════════════════
  {
    slug: "bahasa-rahasia-si-kembar",
    kind: "story",
    child: "both",
    pose: "baby-mo-wow.png",
    published: "2026-05-11",
    title: {
      id: "Bahasa Rahasia Si Kembar",
      en: "The Twins' Secret Language",
    },
    hook: {
      id: "Baby Mo dan Baby Ais sering mengobrol dengan kata-kata yang tidak dimengerti siapa pun — kecuali mereka berdua. Apa, ya, yang mereka bicarakan?",
      en: "Baby Mo and Baby Ais often chatter in words nobody understands — except the two of them. What on earth are they talking about?",
    },
    body: {
      id: `Pagi-pagi, Umi mendengar suara dari kamar anak-anak. "Da-bu-da?" tanya Baby Mo. "Mbe-mbe-ya!" jawab Baby Ais. Lalu keduanya tertawa terbahak-bahak, seakan baru saja mendengar lelucon paling lucu sedunia.

Umi mengintip. Baby Mo memberikan satu balok merah kepada Baby Ais sambil berkata, "Tu-tu?" Baby Ais menerimanya dan menjawab mantap, "Tu-tu!" Lalu mereka tos dengan tangan gemuk mereka.

Umi tersenyum bingung. "Mereka ngomong apa, sih?" Tidak ada satu kata pun yang ia kenali. Tapi anehnya, Baby Mo dan Baby Ais saling mengerti dengan sempurna. Kalau Baby Ais berkata "nyam-nyam", Baby Mo langsung mengambilkan biskuit. Kalau Baby Mo berkata "wush!", Baby Ais langsung berlari ke jendela melihat burung.

(Tahukah kamu? Ini benar-benar terjadi pada banyak anak kembar! Para ahli menyebutnya "bahasa kembar". Karena setiap hari bersama sejak di dalam perut Umi, anak kembar kadang menciptakan kata-kata kecil yang hanya mereka berdua yang mengerti. Bukan sihir — tapi memang ajaib, ya?)

Siang itu Abi pulang dan ikut penasaran. "Coba Abi tebak," katanya. Ia menunjuk boneka beruang. "Ini namanya apa?" Baby Mo dan Baby Ais berpandangan, lalu serempak menjawab, "Bo-bo!" Abi tertawa. "Bo-bo? Wah, Abi belajar bahasa baru hari ini."

Tapi yang paling membuat Umi terharu adalah malam harinya. Baby Ais terbangun sebentar, sedikit takut karena mimpi. Sebelum Umi sempat datang, Baby Mo sudah lebih dulu menggenggam tangan saudarinya dan berbisik pelan, "Da-da. Da-da." Entah apa artinya. Tapi Baby Ais langsung tenang, lalu tertidur lagi.

Mungkin "da-da" artinya, "Ada Mo di sini. Jangan takut."

Umi memandang dua anak kembarnya dari pintu. Mereka punya banyak hal yang sama: wajah yang mirip, ulang tahun yang sama, mainan yang sama. Tapi yang paling istimewa adalah ini — sebuah bahasa kecil yang hanya milik mereka berdua. Sebuah tali tak terlihat yang Allah ikatkan di hati keduanya.

> *"Sesungguhnya orang-orang mukmin itu bersaudara."* (QS. Al-Hujurat: 10)

"Semoga kalian selalu saling mengerti, ya," bisik Umi, "bahkan saat kalian sudah besar nanti dan tidak lagi berkata 'da-bu-da'."

Dan di kamar yang temaram itu, dua anak kembar tidur berdampingan — masih saling menggenggam tangan, dalam bahasa yang tidak butuh kata-kata.

Punya saudara itu seperti punya sahabat sejak hari pertama. Masya Allah. 💛`,
      en: `Early one morning, Umi heard sounds from the children's room. "Da-boo-da?" asked Baby Mo. "Mbe-mbe-ya!" answered Baby Ais. Then the two of them burst out laughing, as if they'd just heard the funniest joke in the world.

Umi peeked in. Baby Mo handed a red block to Baby Ais, saying, "Too-too?" Baby Ais took it and answered firmly, "Too-too!" Then they high-fived with their chubby hands.

Umi smiled, puzzled. "What are they even saying?" Not a single word she recognised. But strangely, Baby Mo and Baby Ais understood each other perfectly. When Baby Ais said "nyum-nyum", Baby Mo immediately fetched a biscuit. When Baby Mo said "whoosh!", Baby Ais ran straight to the window to look at a bird.

(Did you know? This really happens with many twins! Experts call it a "twin language". Because they've been together every day since inside Umi's tummy, twins sometimes invent little words only the two of them understand. Not magic — but wondrous, isn't it?)

That afternoon Abi came home and grew curious too. "Let me guess," he said. He pointed at the teddy bear. "What's this called?" Baby Mo and Baby Ais looked at each other, then answered together, "Bo-bo!" Abi laughed. "Bo-bo? Well, I learned a new language today."

But what moved Umi most was that night. Baby Ais woke up briefly, a little scared from a dream. Before Umi could even come, Baby Mo had already taken his sister's hand and whispered softly, "Da-da. Da-da." Who knows what it meant. But Baby Ais settled at once, then fell back asleep.

Maybe "da-da" meant, "Mo is here. Don't be afraid."

Umi watched her two twins from the doorway. They shared so much: matching faces, the same birthday, the same toys. But the most special thing was this — a little language belonging only to the two of them. An invisible thread that Allah had tied between their hearts.

> *"The believers are but brothers."* (Qur'an, Al-Hujurat 49:10)

"May you always understand each other," whispered Umi, "even when you're all grown up and no longer say 'da-boo-da'."

And in that dim room, two twins slept side by side — still holding hands, in a language that needs no words.

Having a sibling is like having a best friend from day one. Masha'Allah. 💛`,
    },
    anchor: { type: "hadith", slug: "main-bersama-anak" },
    takeaway: {
      id: "Anak kembar kadang punya 'bahasa' sendiri — tali tak terlihat yang Allah ikat di hati mereka. Punya saudara itu seperti punya sahabat sejak hari pertama.",
      en: "Twins sometimes have their own 'language' — an invisible thread Allah ties between their hearts. Having a sibling is like having a best friend from day one.",
    },
    tags: ["saudara", "kembar", "fakta-seru", "buku"],
    readingTimeMin: 4,
  },

  {
    slug: "satu-selimut-untuk-berdua",
    kind: "story",
    child: "both",
    pose: "baby-mo-pose-09.png",
    published: "2026-05-10",
    title: {
      id: "Satu Selimut untuk Berdua",
      en: "One Blanket for Two",
    },
    hook: {
      id: "Baby Mo dan Baby Ais punya kasur sendiri-sendiri. Tapi setiap pagi, Umi selalu menemukan mereka di tempat yang sama. Kenapa, ya?",
      en: "Baby Mo and Baby Ais each have their own bed. But every morning, Umi finds them in the very same spot. Why is that?",
    },
    body: {
      id: `Di kamar Baby Mo dan Baby Ais ada dua kasur kecil yang lucu. Satu bersprei bintang, satu bersprei bulan. Satu untuk Mo, satu untuk Ais. Setiap malam, Umi menyelimuti mereka di kasur masing-masing.

"Selamat tidur, Mo. Selamat tidur, Ais," bisik Umi sambil mematikan lampu.

Tapi setiap pagi — selalu, tanpa pernah gagal — Umi menemukan keduanya di SATU kasur. Berdempetan. Kaki Baby Ais di atas kepala Baby Mo. Tangan Baby Mo memeluk boneka beruang Baby Ais. Selimut bintang dan selimut bulan tercampur jadi satu gulungan besar. Dan keduanya tidur pulas dengan wajah paling damai sedunia.

Suatu malam, Umi penasaran. Ia mengintip diam-diam dari balik pintu.

Mula-mula keduanya tidur di kasur sendiri. Tapi tak lama, dalam gelap, terdengar suara kecil. "Mo?" panggil Baby Ais pelan. "Mo," jawab Baby Mo. Lalu — bruk, bruk — terdengar suara dua badan kecil merangkak. Dan dalam sekejap, mereka sudah berkumpul di satu kasur lagi, saling memeluk, lalu tidur.

Umi menahan tawa, dan juga menahan air mata harunya.

Esoknya ia bertanya sambil tersenyum, "Mo, Ais, kenapa nggak tidur di kasur sendiri-sendiri? Kan masing-masing sudah punya selimut hangat."

Baby Mo berpikir keras dengan jari di dagu. Lalu ia menjawab dengan polos, "Kasur Mo… kosong. Kalau ada Ais, baru penuh."

Baby Ais mengangguk setuju sambil mengunyah pisang. "Penuh!"

Umi memeluk keduanya. Ternyata, selimut paling hangat bukanlah selimut bintang atau selimut bulan. Selimut paling hangat adalah saudara di sebelahmu.

> *"Perumpamaan orang-orang beriman dalam hal saling mencintai, menyayangi, dan berlemah lembut adalah seperti satu tubuh."* (HR. Bukhari 6011, Muslim 2586)

Sejak itu, Umi tidak lagi memaksa mereka tidur sendiri-sendiri. Ia cuma menggeser dua kasur kecil itu menjadi rapat, supaya jadi satu tempat tidur besar. Dan setiap malam, Baby Mo dan Baby Ais tidur berdampingan, di bawah dua selimut yang tercampur jadi satu.

Karena hati yang saling menyayangi memang tidak suka tidur sendirian.

Selamat tidur, Mo. Selamat tidur, Ais. 🌙`,
      en: `In Baby Mo and Baby Ais's room were two cute little beds. One with star sheets, one with moon sheets. One for Mo, one for Ais. Every night, Umi tucked them into their own beds.

"Goodnight, Mo. Goodnight, Ais," whispered Umi, switching off the light.

But every morning — always, without ever failing — Umi found them both in ONE bed. Squished together. Baby Ais's foot on top of Baby Mo's head. Baby Mo's arm hugging Baby Ais's teddy. The star blanket and the moon blanket all tangled into one big bundle. And both fast asleep with the most peaceful faces in the world.

One night, Umi grew curious. She peeked quietly from behind the door.

At first they each slept in their own bed. But before long, in the dark, came a tiny sound. "Mo?" Baby Ais called softly. "Mo," answered Baby Mo. Then — thump, thump — the sound of two little bodies crawling. And in a flash, they'd gathered into one bed again, hugging each other, and fell asleep.

Umi held back a laugh, and also held back a happy tear.

The next day she asked, smiling, "Mo, Ais, why not sleep in your own beds? You each have a warm blanket."

Baby Mo thought hard with a finger on his chin. Then he answered innocently, "Mo's bed… is empty. With Ais, it's full."

Baby Ais nodded in agreement, chewing a banana. "Full!"

Umi hugged them both. It turned out the warmest blanket wasn't the star blanket or the moon blanket. The warmest blanket is the sibling beside you.

> *"The believers in their love, mercy and kindness towards one another are like a single body."* (Bukhari 6011, Muslim 2586)

From then on, Umi stopped forcing them to sleep apart. She simply slid the two little beds together to make one big bed. And every night, Baby Mo and Baby Ais slept side by side, under two blankets tangled into one.

Because hearts that love each other don't much like sleeping alone.

Goodnight, Mo. Goodnight, Ais. 🌙`,
    },
    anchor: { type: "hadith", slug: "kasih-sayang-kepada-anak" },
    takeaway: {
      id: "Selimut paling hangat bukan yang paling tebal — tapi saudara di sebelahmu. Hati yang saling menyayangi tidak suka tidur sendirian.",
      en: "The warmest blanket isn't the thickest — it's the sibling beside you. Hearts that love each other don't like sleeping alone.",
    },
    tags: ["saudara", "malam", "kasih-sayang", "buku"],
    readingTimeMin: 4,
  },

  {
    slug: "kakak-cuma-lima-menit",
    kind: "story",
    child: "both",
    pose: "baby-mo-alright.png",
    published: "2026-05-09",
    title: {
      id: "Kakak Cuma Lima Menit",
      en: "Big Brother by Five Minutes",
    },
    hook: {
      id: "Baby Mo lahir lima menit lebih dulu dari Baby Ais. Lima menit saja! Tapi Baby Mo menganggapnya tugas yang sangat, sangat penting.",
      en: "Baby Mo was born five minutes before Baby Ais. Just five minutes! But Baby Mo takes it as a very, very important job.",
    },
    body: {
      id: `Baby Mo punya satu hal yang sangat ia banggakan. Ia lahir lima menit lebih dulu daripada Baby Ais. Lima menit! Maka, menurut Baby Mo, itu menjadikannya seorang KAKAK. Dan kakak, katanya, punya tugas penting: menjaga adik.

"Mo kakak," katanya mantap setiap pagi, sambil bertolak pinggang. Baby Ais cuma mengangguk sambil menyusu botolnya, tidak terlalu peduli soal lima menit.

Tugas pertama Sang Kakak: mencicipi makanan dulu. Kalau Umi memberi bubur baru, Baby Mo akan menyendok satu suap untuk dirinya, mengunyah dengan wajah serius seperti seorang ahli, lalu mengangguk. "Aman." Baru Baby Ais boleh makan. (Padahal sebenarnya ia cuma ingin makan duluan, tapi ssst, jangan bilang-bilang.)

Tugas kedua: berjalan paling depan. Setiap mereka jalan-jalan, Baby Mo melangkah di depan seperti penjaga kecil, sesekali menengok ke belakang memastikan adiknya masih ada.

Tapi tugas Sang Kakak benar-benar diuji suatu sore di taman.

Baby Ais sedang asyik bermain pasir, ketika seekor anjing besar lewat dan menggonggong, "Guk! Guk!" Baby Ais kaget, matanya langsung berkaca-kaca, dan ia mundur ketakutan.

Dan dalam sekejap — bahkan sebelum Umi sempat bergerak — Baby Mo sudah berlari, berdiri di depan adiknya, merentangkan kedua tangan kecilnya lebar-lebar. Suaranya gemetar, tapi ia tetap berkata kepada anjing itu, "Jangan! Ini adik Mo!"

Anjing itu, yang ternyata jinak, cuma mengibaskan ekornya dan pergi. Tapi Umi terpaku. Anak sekecil itu, yang juga takut, memilih untuk berdiri di depan saudarinya.

Malam itu Umi memeluk Baby Mo. "Mo tadi berani sekali. Padahal Mo juga takut, ya?"

Baby Mo mengangguk jujur. "Takut. Tapi Ais lebih takut. Jadi Mo harus jagain. Mo kan kakak." Lalu ia menambahkan dengan serius, "Lima menit."

Umi tertawa dan menciumnya. "Iya, Sayang. Kakak yang hebat. Tahukah kamu, menjaga yang lebih lemah itu disukai Allah."

> *"Bukan termasuk golongan kami orang yang tidak menyayangi yang lebih muda dan tidak menghormati yang lebih tua."* (HR. Tirmidzi 1919)

Lima menit memang tidak lama. Tapi di hati Baby Mo, lima menit itu cukup untuk membuatnya bertekad menjaga saudarinya seumur hidup.

Dan Baby Ais? Ia memang tidak peduli soal lima menit. Tapi diam-diam, ia sangat bersyukur punya kakak seperti Baby Mo. 💪`,
      en: `Baby Mo had one thing he was very proud of. He was born five minutes before Baby Ais. Five minutes! So, according to Baby Mo, that made him a BIG BROTHER. And a big brother, he said, has an important job: protecting his little sister.

"Mo is big brother," he declared every morning, hands on his hips. Baby Ais just nodded, sucking her bottle, not too fussed about five minutes.

Big Brother's first duty: taste the food first. When Umi served fresh porridge, Baby Mo would spoon a bite for himself, chew with a serious expert's face, then nod. "Safe." Only then could Baby Ais eat. (Really he just wanted to eat first, but shh, don't tell.)

Second duty: walk in front. Whenever they went out, Baby Mo marched ahead like a tiny guard, glancing back now and then to make sure his sister was still there.

But Big Brother's duty was truly tested one afternoon at the park.

Baby Ais was happily playing in the sand when a big dog walked by and barked, "Woof! Woof!" Baby Ais startled, her eyes welling up at once, and she backed away in fear.

And in a flash — even before Umi could move — Baby Mo had run over, stood in front of his sister, and stretched both his little arms out wide. His voice trembled, but he still said to the dog, "No! This is Mo's sister!"

The dog, which turned out to be friendly, just wagged its tail and left. But Umi stood frozen. Such a small child, who was scared too, had chosen to stand in front of his sister.

That night Umi hugged Baby Mo. "You were so brave today. Even though you were scared too, right?"

Baby Mo nodded honestly. "Scared. But Ais was more scared. So Mo had to protect her. Mo is big brother." Then he added solemnly, "Five minutes."

Umi laughed and kissed him. "Yes, sweetheart. A wonderful big brother. Do you know, protecting the weaker one is beloved to Allah."

> *"He is not one of us who does not show mercy to our young and respect to our elders."* (Tirmidzi 1919)

Five minutes really isn't long. But in Baby Mo's heart, those five minutes were enough to make him resolve to protect his sister for a lifetime.

And Baby Ais? She really didn't care about the five minutes. But secretly, she was very grateful to have a big brother like Baby Mo. 💪`,
    },
    anchor: { type: "hadith", slug: "kelembutan-keindahan" },
    takeaway: {
      id: "Menjaga yang lebih lemah — bahkan saat kita sendiri takut — adalah tanda hati yang kuat dan disukai Allah. Kakak hebat bukan soal usia, tapi soal keberanian menyayangi.",
      en: "Protecting the weaker one — even when we're scared ourselves — is the mark of a strong heart, beloved to Allah. A great big sibling isn't about age, but the courage to care.",
    },
    tags: ["saudara", "berani", "kasih-sayang", "buku"],
    readingTimeMin: 4,
  },

  {
    slug: "kejutan-untuk-umi",
    kind: "story",
    child: "both",
    pose: "baby-mo-yeyy.png",
    published: "2026-05-08",
    title: {
      id: "Kejutan untuk Umi",
      en: "A Surprise for Umi",
    },
    hook: {
      id: "Baby Mo dan Baby Ais punya satu misi rahasia: membuat kejutan untuk Umi. Tapi menyimpan rahasia ternyata sangat, sangat sulit!",
      en: "Baby Mo and Baby Ais have a secret mission: to surprise Umi. But keeping a secret turns out to be very, very hard!",
    },
    body: {
      id: `Suatu pagi, Abi berbisik kepada Baby Mo dan Baby Ais, "Pssst. Hari ini ulang tahun Umi. Yuk, kita buat kejutan. Tapi ingat — ini RAHASIA."

Mata Baby Mo dan Baby Ais langsung berbinar-binar. Sebuah misi rahasia! Mereka berdua mengangguk penuh semangat dan menempelkan jari ke bibir, "Ssssst!"

Maka dimulailah Operasi Kejutan.

Tugas Baby Mo: menggambar. Ia mengambil krayon dan menggambar sesuatu yang ia sebut "Umi" — sebuah lingkaran besar dengan rambut keriting dan senyum yang sangat lebar (dan, entah kenapa, delapan kaki). Tugas Baby Ais: menempel bintang-bintang kertas di gambar itu. Mereka bekerja diam-diam di pojok kamar, sambil terus berbisik, "Ssst! Ssst!"

Tapi menyimpan rahasia, ternyata, adalah hal paling sulit di dunia bagi anak dua tahun.

Saat sarapan, Baby Ais yang paling tidak tahan. Ia memandang Umi, lalu tersenyum penuh arti, lalu berbisik keras-keras (yang sebenarnya tidak bisik sama sekali), "Umi! Ada keju— mmpfh!" Untung Baby Mo cepat-cepat menutup mulut adiknya dengan tangan. "Ssst, Ais! Rahasia!"

Umi pura-pura tidak mendengar, dan diam-diam tersenyum.

Sepanjang pagi, "rahasia" itu hampir bocor sepuluh kali. Baby Ais terus terkikik setiap melihat Umi. Baby Mo terus menarik tangan adiknya menjauh sambil berbisik, "Belum! Belum!"

Akhirnya, saat sore tiba, semuanya siap. Abi memanggil Umi ke ruang tamu. Baby Mo dan Baby Ais bersembunyi di balik sofa, menahan napas, badan kecil mereka gemetar karena gembira.

"Satu… dua… tiga!" hitung Abi.

"KEJUTAAAN!" teriak Baby Mo dan Baby Ais bersamaan, melompat keluar sambil mengangkat gambar buatan mereka. Confetti dari potongan kertas beterbangan (yang tadi diam-diam mereka gunting).

Umi menutup mulutnya, dan matanya benar-benar berkaca-kaca. "Masya Allah… ini untuk Umi?"

"Iya!" seru keduanya. Baby Ais menambahkan bangga, "Ais yang tempel bintang!" Baby Mo menunjuk gambarnya, "Ini Umi. Cantik."

Umi memeluk kedua anaknya erat-erat, lama sekali. Hadiah itu cuma selembar kertas dengan gambar berkaki delapan. Tapi bagi Umi, itu adalah lukisan paling indah di seluruh dunia — karena dibuat oleh dua tangan kecil yang bekerja sama, dengan hati yang penuh cinta.

> *Seseorang bertanya, "Siapa yang paling berhak aku perlakukan dengan baik?" Rasulullah ﷺ menjawab, "Ibumu." "Lalu siapa?" "Ibumu." "Lalu siapa?" "Ibumu." "Lalu siapa?" "Ayahmu."* (HR. Bukhari 5971, Muslim 2548)

"Terima kasih, Sayang," bisik Umi. "Ini hadiah terindah yang pernah Umi terima."

Dan Baby Mo serta Baby Ais saling pandang, lalu tos. Misi rahasia: berhasil! (Walaupun hampir bocor sepuluh kali.)

Ternyata, hal terbaik dari membuat kejutan bukan kejutannya — tapi mengerjakannya bersama saudara tersayang. 🎁`,
      en: `One morning, Abi whispered to Baby Mo and Baby Ais, "Psst. Today is Umi's birthday. Let's make a surprise. But remember — it's a SECRET."

Baby Mo and Baby Ais's eyes lit up at once. A secret mission! They both nodded eagerly and pressed a finger to their lips, "Shhhh!"

So Operation Surprise began.

Baby Mo's job: drawing. He took the crayons and drew something he called "Umi" — a big circle with curly hair and a very wide smile (and, for some reason, eight legs). Baby Ais's job: sticking paper stars onto the drawing. They worked quietly in the corner of the room, whispering all the while, "Shh! Shh!"

But keeping a secret, it turned out, was the hardest thing in the world for a two-year-old.

At breakfast, Baby Ais was the one who couldn't hold it. She looked at Umi, then smiled meaningfully, then whisper-shouted (which wasn't a whisper at all), "Umi! There's a surpri— mmpfh!" Luckily Baby Mo quickly covered his sister's mouth with his hand. "Shh, Ais! Secret!"

Umi pretended not to hear, and secretly smiled.

All morning, the "secret" nearly leaked ten times. Baby Ais kept giggling every time she saw Umi. Baby Mo kept pulling his sister away, whispering, "Not yet! Not yet!"

Finally, when evening came, everything was ready. Abi called Umi into the living room. Baby Mo and Baby Ais hid behind the sofa, holding their breath, their little bodies trembling with excitement.

"One… two… three!" counted Abi.

"SURPRIIISE!" shouted Baby Mo and Baby Ais together, leaping out and holding up their drawing. Confetti made of paper scraps fluttered down (which they'd secretly cut earlier).

Umi covered her mouth, and her eyes truly welled up. "Masha'Allah… this is for me?"

"Yes!" cried them both. Baby Ais added proudly, "Ais stuck the stars!" Baby Mo pointed at his drawing, "This is Umi. Pretty."

Umi hugged both her children tight, for a long, long time. The gift was just a sheet of paper with an eight-legged drawing. But to Umi, it was the most beautiful painting in the whole world — because it was made by two little hands working together, with hearts full of love.

> *A man asked, "Who most deserves my good company?" The Prophet ﷺ said, "Your mother." "Then who?" "Your mother." "Then who?" "Your mother." "Then who?" "Your father."* (Bukhari 5971, Muslim 2548)

"Thank you, my loves," whispered Umi. "This is the loveliest gift I've ever received."

And Baby Mo and Baby Ais looked at each other, then high-fived. Secret mission: accomplished! (Even if it nearly leaked ten times.)

It turned out the best part of making a surprise wasn't the surprise — it was making it together with a beloved sibling. 🎁`,
    },
    anchor: { type: "hadith", slug: "berbakti-pada-ibu" },
    takeaway: {
      id: "Hal terbaik dari membuat kejutan bukan kejutannya — tapi mengerjakannya bersama saudara tersayang. Dan hadiah kecil dari hati anak adalah yang paling berharga bagi orang tua.",
      en: "The best part of making a surprise isn't the surprise — it's making it together with a beloved sibling. And a small gift from a child's heart is the most precious thing to a parent.",
    },
    tags: ["saudara", "keluarga", "kerja-sama", "buku"],
    readingTimeMin: 4,
  },

  {
    slug: "saat-ais-pergi-ke-rumah-nenek",
    kind: "story",
    child: "both",
    pose: "baby-mo-pose-07.png",
    published: "2026-05-07",
    title: {
      id: "Saat Ais Pergi ke Rumah Nenek",
      en: "When Ais Went to Grandma's",
    },
    hook: {
      id: "Untuk pertama kalinya, Baby Ais menginap di rumah Nenek — tanpa Baby Mo. Satu hari terasa biasa saja… atau ternyata tidak?",
      en: "For the first time, Baby Ais slept over at Grandma's — without Baby Mo. One day felt ordinary… or did it?",
    },
    body: {
      id: `Suatu hari, Nenek mengajak Baby Ais menginap satu malam di rumahnya. Hanya Baby Ais. Baby Mo tetap di rumah.

"Dah, Mo!" Baby Ais melambai riang dari mobil. Baby Mo melambai balik. "Dah, Ais!" Ia bahkan tersenyum lebar. Satu hari tanpa rebutan mainan? Asyik! Baby Mo membayangkan ia bisa memainkan SEMUA balok sendirian.

Pagi itu, Baby Mo bermain balok. Sendirian. Ia menyusun menara paling tinggi. Lalu ia menoleh ke samping untuk berkata "lihat!" — tapi tidak ada siapa-siapa di sana. "Oh iya," gumamnya. "Ais lagi di rumah Nenek."

Siang itu, Umi memberi dua potong biskuit. Refleks, Baby Mo menyimpan satu di tangan kirinya. "Buat Ais," katanya. Lalu ia ingat. Ais tidak ada. Pelan-pelan, ia memandang biskuit kedua itu dengan bingung.

Sore itu, ada anjing menggonggong di luar. Baby Mo agak takut, dan secara otomatis ia menoleh untuk menggenggam tangan saudarinya — tapi tangan itu tidak ada di sana.

Dan saat makan malam, meja terasa terlalu sepi. Tidak ada yang berkata "nyam-nyam". Tidak ada yang tertawa saat ia membuat wajah lucu. Tidak ada yang berebut kursi sebelahnya.

Malam tiba. Umi menyelimuti Baby Mo di kasurnya. Tapi kasur di sebelahnya — kasur bersprei bulan — kosong dan rapi.

Baby Mo memandanginya lama sekali. Lalu bibir kecilnya bergetar. "Umi," bisiknya pelan, "Mo… kangen Ais."

Umi duduk dan memeluknya. "Umi tahu, Sayang. Kadang kita baru sadar betapa kita menyayangi seseorang… justru saat ia sedang tidak ada."

"Padahal tadi pagi Mo senang," kata Baby Mo, bingung dengan perasaannya sendiri.

Umi tersenyum lembut. "Itu karena menyayangi saudara itu seperti udara, Sayang. Kita tidak selalu menyadarinya — sampai sebentar saja ia tidak ada."

Baby Mo memeluk boneka beruang milik Baby Ais, mencium baunya yang seperti adiknya, lalu tertidur sambil menggenggamnya.

Keesokan paginya — "MO!" Pintu terbuka dan Baby Ais berlari masuk. Baby Mo melompat dari kursinya dan keduanya berpelukan erat sekali, berputar-putar, tertawa, seakan sudah berpisah seratus tahun. "Ais! Ais pulang!"

"Mo kangen Ais?" tanya Umi sambil tersenyum.

Baby Mo mengangguk kuat-kuat. Lalu, untuk pertama kalinya, ia berkata sesuatu yang membuat Umi terharu: "Mo nggak mau main balok sendirian lagi. Lebih seru sama Ais."

> *"Barangsiapa ingin dilapangkan rezekinya dan dipanjangkan umurnya, hendaklah ia menyambung silaturahmi."* (HR. Bukhari 5986, Muslim 2557)

Ternyata, mainan terbaik di dunia bukanlah menara balok yang paling tinggi. Mainan terbaik adalah saudara yang duduk di sebelahmu, ikut tertawa, bahkan saat berebut.

Selamat datang kembali, Baby Ais. Baby Mo, dan satu kasur yang lagi-lagi akan penuh malam ini, sudah menunggumu. 💛`,
      en: `One day, Grandma invited Baby Ais to sleep over for one night at her house. Just Baby Ais. Baby Mo stayed home.

"Bye, Mo!" Baby Ais waved cheerfully from the car. Baby Mo waved back. "Bye, Ais!" He even smiled wide. A whole day with no fighting over toys? Brilliant! Baby Mo imagined he could play with ALL the blocks by himself.

That morning, Baby Mo played with blocks. Alone. He built the tallest tower. Then he turned to the side to say "look!" — but there was no one there. "Oh right," he mumbled. "Ais is at Grandma's."

That afternoon, Umi gave him two biscuits. Out of habit, Baby Mo kept one in his left hand. "For Ais," he said. Then he remembered. Ais wasn't there. Slowly, he stared at the second biscuit, puzzled.

That evening, a dog barked outside. Baby Mo was a little scared, and automatically he turned to grab his sister's hand — but the hand wasn't there.

And at dinner, the table felt too quiet. No one said "nyum-nyum". No one laughed when he made a funny face. No one squabbled over the chair beside him.

Night came. Umi tucked Baby Mo into his bed. But the bed beside it — the one with moon sheets — was empty and neatly made.

Baby Mo stared at it for a long time. Then his little lip trembled. "Umi," he whispered, "Mo… misses Ais."

Umi sat down and hugged him. "I know, sweetheart. Sometimes we only realise how much we love someone… exactly when they're not around."

"But this morning Mo was happy," said Baby Mo, confused by his own feelings.

Umi smiled gently. "That's because loving a sibling is like air, sweetheart. We don't always notice it — until, for just a little while, it's gone."

Baby Mo hugged Baby Ais's teddy bear, breathed in its smell that was like his sister, then fell asleep holding it.

The next morning — "MO!" The door opened and Baby Ais ran in. Baby Mo leapt from his chair and the two hugged so tightly, spinning around, laughing, as if they'd been apart a hundred years. "Ais! Ais is home!"

"Did Mo miss Ais?" asked Umi, smiling.

Baby Mo nodded hard. Then, for the first time, he said something that moved Umi: "Mo doesn't want to play blocks alone anymore. It's more fun with Ais."

> *"Whoever wishes for his provision to be expanded and his life to be extended, let him maintain ties of kinship."* (Bukhari 5986, Muslim 2557)

It turned out the best toy in the world wasn't the tallest block tower. The best toy is the sibling sitting beside you, laughing along, even while squabbling.

Welcome home, Baby Ais. Baby Mo — and one bed that will, once again, be full tonight — have been waiting for you. 💛`,
    },
    anchor: { type: "hadith", slug: "silaturahmi-rezeki" },
    takeaway: {
      id: "Kadang kita baru sadar betapa menyayangi saudara justru saat ia sedang tidak ada. Mainan terbaik bukan menara tertinggi — tapi saudara yang duduk di sebelahmu.",
      en: "Sometimes we only realise how much we love a sibling exactly when they're away. The best toy isn't the tallest tower — it's the sibling sitting beside you.",
    },
    tags: ["saudara", "keluarga", "kasih-sayang", "buku"],
    readingTimeMin: 5,
  },

  {
    slug: "kenapa-harus-minta-izin-untuk-anak",
    kind: "story",
    child: "both",
    pose: "baby-mo-alright.png",
    published: "2026-06-25",
    title: { id: "Kenapa Harus Minta Izin?", en: "Why Do We Ask Permission?" },
    hook: {
      id: "Mobil merah Baby Ais tergeletak sendirian, dan Baby Mo langsung mengambilnya. Tapi kenapa rasanya tidak enak waktu Ais balik melakukan hal yang sama?",
      en: "Baby Ais's red car was lying all alone, and Baby Mo just took it. So why did it feel so bad when Ais did the same thing back?",
    },
    body: {
      id: `Mobil merah itu tergeletak di lantai ruang tengah. Rodanya mengilap. Pintunya bisa dibuka-tutup. Itu mobil kesayangan Baby Ais.

Baby Ais sedang di dapur, minum susu.

Baby Mo melihat mobil itu. Melihat ke dapur. Melihat mobil itu lagi. Lalu — hap! — ia mengambilnya. Cepat-cepat. Tanpa bertanya.

"Ngeeeng!" Mobil merah itu melaju di atas karpet, naik ke sofa, terbang di atas bantal.

Baby Ais kembali dengan kumis susu di bibirnya. Ia berhenti. "ITU PUNYA AIS!"

Lalu tangisnya pecah, kencang sekali.

Baby Mo memeluk mobil itu erat-erat. "Tadi nggak ada yang main! Jadi boleh, dong!"

Umi datang dari kamar. Ia tidak mengambil mobil itu dari tangan Baby Mo. Ia cuma duduk dan bertanya, "Mo, robot biru kesayanganmu di mana?"

"Di kasur," jawab Baby Mo bingung.

"Ais, coba ambil robot biru Mo dari kasur. Jangan tanya dulu, ya."

Baby Ais mengusap air matanya, lalu berlari ke kamar dan kembali dengan robot biru. Ia langsung memainkannya. "Bip bop bip!"

Mata Baby Mo membulat. "Eh! Itu robotku! Aku nggak bilang boleh!"

"Rasanya bagaimana?" tanya Umi pelan.

Baby Mo membuka mulut, lalu menutupnya lagi. Rasanya… seperti ada yang diambil dari dadanya. Padahal cuma robot.

"Nggak enak," gumamnya.

"Itu yang Ais rasakan tadi," kata Umi. "Barang orang lain tetap punya orang itu, walaupun sedang tidak dipegang. Makanya ada kalimat ajaib: *Boleh aku pinjam?*"

Baby Mo memandangi mobil merah di tangannya. Lalu ia berjalan ke Baby Ais, menyodorkan mobilnya dulu.

"Ais," katanya pelan. "Maaf. Boleh Mo pinjam mobilnya?"

Baby Ais memandangnya lama. Lalu ia mengangguk. "Boleh. Tapi gantian, ya." Ia menyodorkan robot biru. "Boleh Ais pinjam robotnya?"

"Boleh!"

Sore itu, ruang tengah jadi kota yang sibuk. Mobil merah mengantar robot biru ke mana-mana. Dan setiap kali ada mainan baru yang ingin dipegang, terdengar kalimat yang sama.

"Boleh aku pinjam?"

"Boleh!"

"Boleh aku pinjam?"

"Sebentar ya, habis ini."

Dan itu juga tidak apa-apa.

> *"Janganlah salah seorang dari kalian mengambil barang milik saudaranya, baik bercanda maupun sungguh-sungguh."* (HR. Abu Dawud 5003, Tirmidzi 2160)

Ngobrol bareng si kecil: barang apa yang paling tidak ingin kamu dipinjam tanpa izin? Yuk latihan bilang, "Boleh aku pinjam?" 🤝`,
      en: `The red car was lying on the living-room floor. Shiny wheels. Doors that opened and closed. It was Baby Ais's favourite car.

Baby Ais was in the kitchen, drinking her milk.

Baby Mo looked at the car. Looked at the kitchen. Looked at the car again. Then — grab! — he took it. Quickly. Without asking.

"Vrrrm!" The red car zoomed across the carpet, up the sofa, flying over the cushions.

Baby Ais came back with a milk moustache. She stopped. "THAT'S AIS'S!"

And she burst into tears, very loudly.

Baby Mo hugged the car tight. "Nobody was playing with it! So it's allowed!"

Umi came out of the bedroom. She didn't take the car from Baby Mo's hands. She just sat down and asked, "Mo, where's your favourite blue robot?"

"On the bed," said Baby Mo, puzzled.

"Ais, go and get Mo's blue robot from the bed. Don't ask first, okay?"

Baby Ais wiped her tears, ran to the bedroom and came back with the blue robot. She started playing with it straight away. "Beep boop beep!"

Baby Mo's eyes went round. "Hey! That's my robot! I didn't say you could!"

"How does that feel?" Umi asked softly.

Baby Mo opened his mouth, then closed it again. It felt… like something had been taken from his chest. Even though it was only a robot.

"Not nice," he mumbled.

"That's how Ais felt just now," said Umi. "Someone's things still belong to them, even when they're not holding them. That's why we have a magic sentence: *May I borrow it?*"

Baby Mo looked at the red car in his hands. Then he walked over to Baby Ais and held the car out first.

"Ais," he said quietly. "Sorry. May I borrow your car?"

Baby Ais looked at him for a long moment. Then she nodded. "Yes. But we take turns." She held out the blue robot. "May Ais borrow your robot?"

"Yes!"

That afternoon, the living room became a busy town. The red car drove the blue robot everywhere. And every time someone wanted to hold a new toy, the same sentence could be heard.

"May I borrow it?"

"Yes!"

"May I borrow it?"

"In a minute, after this."

And that was okay too.

> *"None of you should take his brother's belongings, whether jokingly or seriously."* (Abu Dawud 5003, Tirmidzi 2160)

Talk it over with your little one: what's the one thing you'd least like someone to borrow without asking? Let's practise saying, "May I borrow it?" 🤝`,
    },
    anchor: { type: "parenting", slug: "adab-sehari-hari" },
    takeaway: {
      id: "Anak paling cepat paham soal izin ketika ia merasakan sendiri sisi yang lain — dengan lembut, bukan dengan hukuman.",
      en: "Children understand permission fastest when they gently feel the other side themselves — not through punishment.",
    },
    tags: ["adab", "izin", "saudara", "buku"],
    readingTimeMin: 4,
  },

  {
    slug: "apa-itu-sedekah-untuk-anak",
    kind: "story",
    child: "mo",
    pose: "baby-mo-thank-you.png",
    published: "2026-06-26",
    title: { id: "Apa Itu Sedekah?", en: "What Is Sadaqah?" },
    hook: {
      id: "Dua koin di tangan, satu es lilin yang ia impikan, dan seorang kakek penjual sapu yang belum laku seharian. Baby Mo harus memilih.",
      en: "Two coins in his hand, one ice lolly he'd been dreaming of, and an old broom seller who hadn't sold a thing all day. Baby Mo has to choose.",
    },
    body: {
      id: `Baby Mo punya dua koin. Hadiah dari Abi karena sudah membereskan mainan tanpa disuruh. Koinnya berat dan dingin di telapak tangan.

Ting… ting… Ia menggoyangkannya di dekat telinga. Bunyinya seperti lonceng kecil.

"Abi, dua koin cukup buat beli es lilin stroberi?" tanyanya.

"Cukup," kata Abi. "Pas sekali."

Baby Mo tersenyum lebar. Ia sudah membayangkan es lilin merah muda yang dingin, yang menetes ke jari kalau dimakan pelan-pelan.

Mereka berjalan ke warung. Matahari siang terik sekali. Di pinggir jalan, Baby Mo melihat seorang kakek. Punggungnya bungkuk. Ia memikul banyak sapu lidi dan kemoceng. Langkahnya pelan, dan bajunya basah oleh keringat.

"Sapu… sapu…," kata Kakek, suaranya serak. Tidak ada yang berhenti.

Baby Mo memperlambat langkah. "Abi, Kakek itu dari tadi jalan terus, ya?"

"Sepertinya begitu," kata Abi. "Mungkin belum ada yang membeli sapunya hari ini."

Baby Mo melihat koinnya. Ting… ting… Lalu melihat Kakek. Lalu melihat warung di ujung jalan, tempat es lilin stroberi menunggu.

Abi tidak berkata apa-apa. Abi hanya menunggu.

"Abi," kata Baby Mo akhirnya, "kalau aku kasih satu koin ke Kakek, esnya nggak jadi, ya?"

"Nggak jadi hari ini," jawab Abi jujur.

Baby Mo menggenggam koinnya erat-erat. Berat sekali memilih. Lalu ia melihat Kakek duduk di trotoar, mengipasi wajahnya dengan topi.

Baby Mo berlari kecil. "Kek! Ini untuk Kakek!"

Kakek mendongak, kaget. Lalu senyumnya mengembang, lebar sekali, sampai matanya tinggal garis. "Masya Allah… terima kasih, Nak. Semoga Allah membalas kebaikanmu."

Baby Mo lari kembali ke Abi. Pipinya merah. Dadanya terasa hangat, seperti baru minum teh manis.

"Abi, koinku tinggal satu," katanya. "Tapi kok rasanya malah tambah banyak?"

Abi berjongkok dan memeluknya. "Itu namanya sedekah, Mo. Uangnya berkurang satu. Tapi bahagianya bertambah. Dan Allah tidak pernah lupa."

Mereka meneruskan jalan ke warung. Dengan satu koin, Baby Mo membeli satu es lilin kecil — bukan stroberi, tapi kacang hijau. Ternyata enak juga.

Waktu pulang, mereka lewat lagi di tempat tadi. Kakek sudah tidak ada. Di tempatnya duduk, sapu-sapunya juga tidak ada.

"Abi! Sapunya habis! Ada yang beli!"

"Alhamdulillah," kata Abi.

Baby Mo melompat-lompat sepanjang jalan pulang, sambil menjilat es kacang hijaunya yang menetes ke jari.

> *"Sedekah tidak akan mengurangi harta."* (HR. Muslim 2588)

Ngobrol bareng si kecil: kalau kamu punya dua koin, satu untuk apa dan satu untuk siapa? 🌱`,
      en: `Baby Mo had two coins. A present from Abi for tidying his toys without being asked. The coins were heavy and cool in his palm.

Ting… ting… He shook them by his ear. They sounded like tiny bells.

"Abi, are two coins enough for a strawberry ice lolly?" he asked.

"Enough," said Abi. "Exactly enough."

Baby Mo grinned. He could already picture the cold pink lolly that drips onto your fingers if you eat it slowly.

They walked to the corner shop. The midday sun was blazing. By the roadside, Baby Mo saw an old man. His back was bent. He was carrying lots of brooms and feather dusters. His steps were slow, and his shirt was wet with sweat.

"Brooms… brooms…," the old man called, his voice hoarse. No one stopped.

Baby Mo slowed down. "Abi, has that grandpa been walking all this time?"

"It looks like it," said Abi. "Maybe nobody has bought a broom from him today."

Baby Mo looked at his coins. Ting… ting… Then at the old man. Then at the shop at the end of the road, where the strawberry lolly was waiting.

Abi didn't say anything. Abi just waited.

"Abi," said Baby Mo at last, "if I give one coin to the grandpa, I can't get the lolly, can I?"

"Not today," Abi answered honestly.

Baby Mo squeezed his coins tight. It was so hard to choose. Then he saw the old man sit down on the pavement, fanning his face with his hat.

Baby Mo trotted over. "Grandpa! This is for you!"

The old man looked up, surprised. Then his smile spread wide, so wide his eyes became two lines. "Masha Allah… thank you, little one. May Allah reward your kindness."

Baby Mo ran back to Abi. His cheeks were red. His chest felt warm, like he had just drunk sweet tea.

"Abi, I only have one coin left," he said. "So why does it feel like I have more?"

Abi crouched down and hugged him. "That's called sadaqah, Mo. The money goes down by one. But the happiness goes up. And Allah never forgets."

They carried on to the shop. With one coin, Baby Mo bought one small lolly — not strawberry, but mung bean. It turned out to be delicious too.

On the way home, they passed the same spot. The old man was gone. Where he had sat, the brooms were gone too.

"Abi! The brooms are gone! Someone bought them!"

"Alhamdulillah," said Abi.

Baby Mo skipped all the way home, licking his mung-bean lolly as it dripped onto his fingers.

> *"Charity does not decrease wealth."* (Muslim 2588)

Talk it over with your little one: if you had two coins, what would one be for, and who would the other be for? 🌱`,
    },
    anchor: { type: "hadith", slug: "menyantuni-anak-yatim" },
    takeaway: {
      id: "Sedekah paling bermakna bagi anak adalah yang terasa sedikit berat. Jangan buru-buru memutuskan untuknya — tunggu, dan biarkan ia memilih.",
      en: "The most meaningful charity for a child is the kind that feels a little heavy. Don't rush to decide for them — wait, and let them choose.",
    },
    tags: ["sedekah", "rezeki", "akhlak", "buku"],
    readingTimeMin: 4,
  },

  {
    slug: "kenapa-berwudhu-sebelum-sholat",
    kind: "story",
    child: "ais",
    pose: "baby-mo-ok.png",
    published: "2026-06-27",
    title: { id: "Kenapa Berwudhu Sebelum Sholat?", en: "Why Do We Wash Up Before Praying?" },
    hook: {
      id: "\"Tanganku kan nggak kotor!\" kata Baby Ais. Lalu Abi memberinya kaca pembesar — dan sebuah rahasia tentang tetes-tetes air wudhu.",
      en: "\"But my hands aren't dirty!\" said Baby Ais. Then Abi handed her a magnifying glass — and a secret about the drops of wudhu water.",
    },
    body: {
      id: `Adzan Maghrib berkumandang. Baby Ais langsung menggelar sajadah kecilnya yang bergambar bulan sabit. Ia berdiri di atasnya, siap sholat.

"Ais, sudah wudhu?" tanya Abi.

"Belum. Tapi tanganku kan nggak kotor." Baby Ais mengangkat kedua tangannya. "Lihat, bersih!"

Abi tersenyum, lalu mengambil kaca pembesar dari laci — yang biasa mereka pakai untuk melihat semut. "Coba lihat pakai ini."

Baby Ais mendekatkan kaca pembesar ke jarinya. Lalu ia menjerit kecil. "Iiih! Ada debu! Ada remah biskuit! Di bawah kuku ada hitam-hitam!"

"Tadi sore Ais main pasir, kan?" kata Abi sambil tertawa. "Mata kita kadang tidak bisa melihat semuanya. Yuk, ikut Abi."

Mereka berdiri di depan keran. Air mengalir, dingin dan berkilau.

"Rasulullah ﷺ mengajarkan, kalau kita berwudhu dengan baik, bukan cuma debu yang luruh. Kesalahan-kesalahan kecil kita juga ikut jatuh bersama tetes airnya," kata Abi. "Dari wajah, dari tangan, dari kaki, sampai dari bawah kuku."

Baby Ais memandangi airnya dengan mata membulat. "Kesalahan bisa jatuh?"

"Allah yang membuatnya jatuh. Kita tinggal berwudhu baik-baik. Lihat Abi dulu, ya."

Abi membaca bismillah, lalu membasuh tangan. Baby Ais menirukan. Byur. Dingin!

Berkumur — Baby Ais menggembungkan pipi seperti ikan buntal, lalu pfuuuh.

Membasuh wajah — airnya dingin sampai Baby Ais terkikik.

Tangan sampai siku. Mengusap kepala. Membasuh telinga. Lalu kaki — dan di sini Baby Ais berhenti.

"Abi, tadi kan aku bilang kakiku agak nakal. Aku menendang mainan Mo waktu kesal."

"Kalau begitu, basuh baik-baik," kata Abi lembut. "Lalu nanti minta maaf ke Mo, ya."

Baby Ais membasuh kakinya pelan-pelan sekali. Kanan, lalu kiri. Ia memperhatikan tetes-tetes air yang jatuh ke lantai dan mengalir ke saluran. Wajahnya serius sekali, seolah sedang melihat kesalahannya pergi satu per satu.

Selesai, Abi mengangkat jari telunjuknya dan membaca, "Asyhadu an laa ilaaha illallah…" Baby Ais menirukan, terbata-bata.

Lalu ia berdiri tegak. Wajahnya basah dan bersinar. "Abi! Aku berasa ringan banget! Kayak habis mandi, tapi dalam hati."

Sebelum ke sajadah, Baby Ais mampir dulu ke kamar. "Mo, maaf ya tadi aku tendang robotmu."

Baby Mo mengangguk. "Iya. Aku juga mau wudhu! Aku juga mau ringan!"

Malam itu, ada tiga sajadah berjejer. Satu besar, dua kecil. Dan dua wajah kecil yang masih basah, bersinar, siap menghadap Allah.

> *"Barangsiapa berwudhu lalu memperbagus wudhunya, keluarlah dosa-dosanya dari tubuhnya, hingga keluar dari bawah kuku-kukunya."* (HR. Muslim 245)

Ngobrol bareng si kecil: bagian wudhu mana yang paling kamu suka? Yuk wudhu bersama sebelum sholat berikutnya, satu gerakan demi satu gerakan. 💧`,
      en: `The Maghrib adhan rang out. Baby Ais rolled out her little prayer mat with the crescent moon on it straight away. She stood on it, ready to pray.

"Ais, have you done wudhu?" asked Abi.

"Not yet. But my hands aren't dirty." Baby Ais held up both hands. "Look, clean!"

Abi smiled, then took the magnifying glass out of the drawer — the one they used for looking at ants. "Have a look with this."

Baby Ais held the magnifying glass to her fingers. Then she gave a little shriek. "Eww! There's dust! There's biscuit crumbs! There's black stuff under my nails!"

"You played in the sand this afternoon, didn't you?" Abi laughed. "Our eyes can't always see everything. Come with me."

They stood at the tap. The water flowed, cold and sparkling.

"The Prophet ﷺ taught that when we do wudhu well, it's not only dust that washes away. Our little mistakes fall away with the drops of water too," said Abi. "From the face, from the hands, from the feet, even from under the nails."

Baby Ais stared at the water, eyes wide. "Mistakes can fall off?"

"Allah makes them fall away. We just do our wudhu properly. Watch Abi first."

Abi said bismillah, then washed his hands. Baby Ais copied. Splash. Cold!

Rinsing the mouth — Baby Ais puffed her cheeks like a pufferfish, then pfffff.

Washing the face — the water was so cold she giggled.

Arms up to the elbows. Wiping the head. Washing the ears. Then the feet — and here Baby Ais stopped.

"Abi, remember I said my feet were a bit naughty? I kicked Mo's toy when I was cross."

"Then wash them carefully," Abi said gently. "And say sorry to Mo afterwards, okay?"

Baby Ais washed her feet very, very slowly. Right, then left. She watched the drops fall to the floor and run into the drain. Her face was very serious, as if she were watching her mistakes leave one by one.

When she finished, Abi raised his index finger and said, "Ash-hadu an laa ilaaha illallah…" Baby Ais repeated it, stumbling.

Then she stood up straight. Her face was wet and shining. "Abi! I feel so light! Like I've had a bath, but on the inside."

Before going to the prayer mat, Baby Ais stopped by the bedroom. "Mo, sorry I kicked your robot."

Baby Mo nodded. "Okay. I want to do wudhu too! I want to feel light too!"

That evening, three prayer mats lay side by side. One big, two small. And two little faces, still wet and shining, ready to stand before Allah.

> *"Whoever performs wudhu and does it well, his sins leave his body, even from beneath his nails."* (Muslim 245)

Talk it over with your little one: which part of wudhu do you like best? Let's do wudhu together before the next prayer, one step at a time. 💧`,
    },
    anchor: { type: "doa", slug: "selesai-wudhu" },
    takeaway: {
      id: "Wudhu bukan sekadar cuci tangan. Bagi anak, ia bisa menjadi momen kecil untuk \"melepaskan\" kesalahan hari itu — lalu memperbaikinya.",
      en: "Wudhu isn't just hand-washing. For a child, it can be a small moment to \"let go\" of the day's mistakes — and then put them right.",
    },
    tags: ["wudhu", "sholat", "ibadah", "buku"],
    readingTimeMin: 4,
  },

  {
    slug: "semangkuk-sup-untuk-pak-becak",
    kind: "story",
    child: "both",
    pose: "baby-mo-yes.png",
    published: "2026-06-28",
    title: { id: "Semangkuk Sup untuk Pak Becak", en: "A Bowl of Soup for the Pedicab Driver" },
    hook: {
      id: "Hujan deras, dan seorang bapak tukang becak menggigil di depan rumah. Si kembar punya ide — tapi rantang sup itu panas, payungnya kecil, dan jalannya licin.",
      en: "Pouring rain, and a pedicab driver shivering outside the house. The twins have an idea — but the soup tin is hot, the umbrella is small, and the path is slippery.",
    },
    body: {
      id: `Sore itu hujan turun deras sekali. Bunyinya di atap seperti ribuan kelereng yang jatuh bersamaan. Tik-tik-tik-tik-TIK!

Baby Mo dan Baby Ais berlutut di sofa, hidung menempel ke kaca jendela. Di seberang jalan, di bawah pohon ketapang, ada sebuah becak. Di dalamnya duduk seorang bapak. Bajunya basah. Bahunya naik-turun.

"Umi," bisik Baby Ais, "bapak itu gemetar."

Dari dapur, tercium wangi sup ayam. Wortel, kentang, seledri, dan kaldu yang mengepul. Sup untuk makan malam.

Baby Mo dan Baby Ais saling pandang. Kembar kadang tidak perlu bicara.

"Umi!" seru mereka bersamaan. "Supnya boleh dikasih ke bapak itu?"

Umi mematikan kompor dan tersenyum. "Boleh. Tapi siapa yang mau mengantar?"

"KAMI!"

Umi menuang sup ke dalam rantang besi, menutupnya rapat-rapat, lalu membungkusnya dengan kain supaya tidak panas dipegang. Abi mengambil payung besar.

Tapi masalah pertama muncul: rantangnya berat. Baby Mo mencoba mengangkat sendiri — miring ke kiri. Baby Ais mencoba sendiri — miring ke kanan.

"Berdua!" kata Baby Ais. Mereka memegang satu pegangan bersama, empat tangan kecil di satu gagang. Rantangnya lurus.

Masalah kedua: jalan depan rumah licin dan becek. Air menggenang di mana-mana.

"Pelan-pelan," kata Abi yang memayungi mereka dari belakang. "Kanan… kiri… kanan… kiri…"

"Kanan, kiri, kanan, kiri," ulang si kembar, melangkah serempak seperti tentara kecil. Sepatu mereka berbunyi cepak-cepak di genangan.

Sampai di bawah pohon ketapang, bapak tukang becak itu kaget melihat dua anak kecil dan seorang ayah di bawah satu payung.

"Pak," kata Baby Mo, napasnya terengah. "Ini sup hangat. Dari Umi. Eh, dari kami."

"Supaya Bapak nggak kedinginan," tambah Baby Ais.

Bapak itu membuka rantangnya. Uap hangat mengepul ke wajahnya. Ia terdiam sebentar. Matanya berkaca-kaca. "Masya Allah… dari pagi saya belum makan, Nak. Terima kasih. Terima kasih banyak."

Ia menyuap sup itu, pelan-pelan. Lalu ia tersenyum — senyum yang lebar sekali, sampai giginya yang ompong satu kelihatan.

Baby Mo dan Baby Ais ikut tersenyum. Tanpa disuruh. Senyumnya menular, seperti hangatnya sup.

Malam itu, mereka makan malam dengan telur dadar, karena supnya sudah dibagi. Tapi tidak ada yang protes.

Sebelum tidur, Baby Mo berbisik ke Baby Ais di kasur sebelah. "Ais, besok kalau hujan lagi…"

"…kita kasih lagi," jawab Baby Ais, sudah setengah tidur.

> *"Senyummu di hadapan saudaramu adalah sedekah."* (HR. Tirmidzi 1956)

Ngobrol bareng si kecil: siapa saja orang yang bekerja di luar saat hujan atau panas? Apa satu hal kecil yang bisa kita berikan untuk mereka? ☔`,
      en: `That afternoon the rain came down very hard. On the roof it sounded like thousands of marbles falling at once. Tik-tik-tik-tik-TIK!

Baby Mo and Baby Ais knelt on the sofa, noses pressed to the window. Across the road, under the almond tree, was a pedicab. A man was sitting in it. His clothes were soaked. His shoulders were shaking.

"Umi," whispered Baby Ais, "that man is shivering."

From the kitchen came the smell of chicken soup. Carrots, potatoes, celery, and steaming broth. Soup for dinner.

Baby Mo and Baby Ais looked at each other. Twins sometimes don't need to talk.

"Umi!" they cried together. "Can we give the soup to that man?"

Umi turned off the stove and smiled. "You can. But who's going to take it?"

"US!"

Umi poured the soup into a metal food tin, closed it tight, and wrapped it in a cloth so it wouldn't be too hot to hold. Abi fetched the big umbrella.

But the first problem appeared: the tin was heavy. Baby Mo tried to lift it by himself — it tipped to the left. Baby Ais tried by herself — it tipped to the right.

"Together!" said Baby Ais. They held the handle together, four little hands on one grip. The tin stayed straight.

The second problem: the path outside was slippery and muddy. There were puddles everywhere.

"Slowly," said Abi, holding the umbrella over them from behind. "Right… left… right… left…"

"Right, left, right, left," the twins repeated, stepping in time like little soldiers. Their shoes went splish-splash in the puddles.

When they reached the almond tree, the pedicab driver was surprised to see two small children and a father under one umbrella.

"Sir," said Baby Mo, out of breath. "This is warm soup. From Umi. I mean, from us."

"So you won't be cold," added Baby Ais.

The man opened the tin. Warm steam rose to his face. He was quiet for a moment. His eyes filled with tears. "Masha Allah… I haven't eaten since this morning, children. Thank you. Thank you so much."

He ate the soup, slowly. Then he smiled — a very wide smile, so wide you could see the gap where one tooth was missing.

Baby Mo and Baby Ais smiled too. Without being told. Smiles are catching, like the warmth of soup.

That night, they had omelette for dinner, because the soup had been given away. But nobody complained.

Before sleep, Baby Mo whispered to Baby Ais in the next bed. "Ais, tomorrow if it rains again…"

"…we'll give some again," answered Baby Ais, already half asleep.

> *"Your smiling in the face of your brother is charity."* (Tirmidzi 1956)

Talk it over with your little one: who are the people who work outside in the rain or the heat? What's one small thing we could give them? ☔`,
    },
    anchor: { type: "hadith", slug: "tetangga-keluarga-luas" },
    takeaway: {
      id: "Biarkan anak yang mengantar kebaikannya sendiri — memegang rantangnya, melihat wajah yang menerima. Itu yang membuatnya ingin mengulang.",
      en: "Let children deliver their own kindness — holding the tin, seeing the face that receives it. That's what makes them want to do it again.",
    },
    tags: ["sedekah", "empati", "hujan", "akhlak", "buku"],
    readingTimeMin: 4,
  },

  {
    slug: "antrian-es-krim-yang-panjang",
    kind: "story",
    child: "mo",
    pose: "baby-mo-run.png",
    published: "2026-06-29",
    title: { id: "Antrian Es Krim yang Panjang", en: "The Long Ice Cream Line" },
    hook: {
      id: "Sepuluh orang di depan Baby Mo, dan es krim cokelatnya terasa sejauh bulan. Tapi menunggu ternyata bisa diisi dengan permainan rahasia.",
      en: "Ten people ahead of Baby Mo, and his chocolate ice cream feels as far away as the moon. But it turns out waiting can be filled with a secret game.",
    },
    body: {
      id: `Hari itu panas sekali. Matahari seperti lampu raksasa yang lupa dimatikan. Dan di taman kota, ada gerobak es krim dengan payung bergaris-garis.

"Es krim!" Baby Mo berlari ke sana. Lalu ia berhenti mendadak.

Di depan gerobak ada antrean. Panjaaang sekali. Baby Mo menghitung dengan jarinya. Satu, dua, tiga… sepuluh orang!

"Lamaaa, Umi!" Ia menghentakkan kaki. "Nanti es krimnya habis! Nanti cokelatnya habis duluan!"

Di kepalanya, ia sudah membayangkan orang terakhir sebelum dia membeli es krim cokelat terakhir. Lalu yang tersisa cuma rasa pare. Baby Mo hampir menangis.

Umi berlutut di depannya. "Mo, kakimu sedang mau lari ke depan, ya?"

Baby Mo mengangguk. Kakinya memang tidak bisa diam.

"Hatimu juga sedang lari," kata Umi. "Yuk, kita kasih hatinya kerjaan. Main *Mata Elang*. Umi sebut satu warna, kamu cari sebanyak-banyaknya. Siap? Cari… BIRU!"

Baby Mo menoleh ke kiri dan ke kanan. "Baju bapak itu biru! Balon anak itu biru! Langit biru! Sepatu Ais biru!"

"Empat! Sekarang cari… KUNING!"

"Payung es krim! Bunga di sana! Tas kakak itu!"

Antrean maju satu langkah. Baby Mo tidak sadar.

"Sekarang cari yang lebih susah. Cari… sesuatu yang Allah ciptakan, yang bisa terbang!"

Baby Mo memicingkan mata. "Burung! Di pohon! Terus… capung! Terus… daun kering yang ketiup angin, itu terbang juga, kan?"

Umi tertawa. "Boleh."

Antrean maju lagi. Dan lagi.

Di tengah permainan, Baby Ais menarik baju Baby Mo. "Mo, giliranmu cari. Cari… orang yang lagi senyum!"

Baby Mo melihat sekeliling. Penjual es krim tersenyum. Nenek di bangku tersenyum. Lalu ia melihat anak kecil di depannya — yang juga sedang menunggu dan cemberut, persis seperti Baby Mo tadi.

Baby Mo menepuk pundaknya. "Mau ikut main? Cari yang warnanya merah!"

Anak itu ragu sebentar, lalu menunjuk. "Itu! Mobil merah!"

Dan sekarang ada tiga anak bermain Mata Elang di antrean es krim.

"Selamat siang, mau rasa apa?"

Baby Mo kaget. Ia sudah di depan gerobak! Dan di wadah besi itu, es krim cokelatnya masih ada. Masih banyak.

"Cokelat!" serunya.

Sambil menjilat es krim di bangku taman, Baby Mo berpikir keras. "Umi, tadi aku kira nunggunya lamaaa banget. Tapi kok cepat?"

"Waktunya sama," kata Umi. "Yang berubah, hatimu. Waktu hatimu tenang, menunggu jadi tidak berat. Itu namanya sabar. Dan Allah bersama orang-orang yang sabar."

Baby Mo menjilat es krimnya lagi. Cokelat menetes ke dagunya. "Allah juga ikut antre tadi?"

Umi tertawa sampai harus memegang perutnya. "Allah bersamamu di mana pun, Mo. Termasuk di antrean es krim."

> *"Sesungguhnya Allah beserta orang-orang yang sabar."* (QS. Al-Baqarah: 153)

Ngobrol bareng si kecil: kapan terakhir kamu harus menunggu lama? Permainan apa yang bisa kita mainkan lain kali? 🍦`,
      en: `It was a very hot day. The sun was like a giant lamp someone forgot to switch off. And in the town park, there was an ice cream cart with a striped umbrella.

"Ice cream!" Baby Mo ran towards it. Then he stopped suddenly.

In front of the cart was a queue. A loooong one. Baby Mo counted on his fingers. One, two, three… ten people!

"Too loooong, Umi!" He stamped his feet. "The ice cream will run out! The chocolate will be gone first!"

In his head, he could already see the last person before him buying the very last chocolate ice cream. And all that would be left was bitter-gourd flavour. Baby Mo nearly cried.

Umi knelt in front of him. "Mo, your feet want to run to the front, don't they?"

Baby Mo nodded. His feet really couldn't keep still.

"Your heart is running too," said Umi. "Let's give your heart a job. Let's play *Eagle Eyes*. I say a colour, and you find as many as you can. Ready? Find… BLUE!"

Baby Mo looked left and right. "That man's shirt is blue! That kid's balloon is blue! The sky is blue! Ais's shoes are blue!"

"Four! Now find… YELLOW!"

"The ice cream umbrella! The flowers over there! That girl's bag!"

The queue moved forward one step. Baby Mo didn't notice.

"Now a harder one. Find… something Allah created that can fly!"

Baby Mo squinted. "A bird! In the tree! And… a dragonfly! And… a dry leaf blowing in the wind, that's flying too, isn't it?"

Umi laughed. "That counts."

The queue moved forward again. And again.

In the middle of the game, Baby Ais tugged Baby Mo's shirt. "Mo, your turn to find. Find… someone smiling!"

Baby Mo looked around. The ice cream seller was smiling. The grandma on the bench was smiling. Then he saw the little boy in front of him — also waiting and scowling, exactly like Baby Mo had been.

Baby Mo tapped his shoulder. "Want to play? Find something red!"

The boy hesitated, then pointed. "There! A red car!"

And now there were three children playing Eagle Eyes in the ice cream queue.

"Good afternoon, which flavour?"

Baby Mo jumped. He was at the front of the cart! And in the metal tub, the chocolate ice cream was still there. Lots of it.

"Chocolate!" he cried.

Licking his ice cream on the park bench, Baby Mo thought hard. "Umi, I thought the waiting would take ages. So why was it quick?"

"The time was the same," said Umi. "What changed was your heart. When your heart is calm, waiting isn't heavy. That's called patience. And Allah is with those who are patient."

Baby Mo licked his ice cream again. Chocolate dripped down his chin. "Was Allah in the queue too?"

Umi laughed so hard she had to hold her tummy. "Allah is with you everywhere, Mo. Including in the ice cream queue."

> *"Indeed, Allah is with the patient."* (Qur'an, Al-Baqarah 2:153)

Talk it over with your little one: when did you last have to wait a long time? What game could we play next time? 🍦`,
    },
    anchor: { type: "parenting", slug: "tantrum" },
    takeaway: {
      id: "Sabar untuk anak bukan \"diam saja\". Beri hatinya pekerjaan — sebuah permainan — dan menunggu berubah jadi petualangan.",
      en: "Patience for a child isn't \"just be quiet\". Give their heart a job — a game — and waiting turns into an adventure.",
    },
    tags: ["sabar", "tantrum", "menunggu", "taman", "buku"],
    readingTimeMin: 5,
  },

  {
    slug: "apa-itu-adzan-untuk-anak",
    kind: "story",
    child: "ais",
    pose: "baby-mo-wow.png",
    published: "2026-06-30",
    title: { id: "Apa Itu Adzan?", en: "What Is the Adhan?" },
    hook: {
      id: "Suara merdu terdengar dari jauh, dan Abi langsung berhenti bekerja. Baby Ais penasaran — dan menemukan bahwa adzan adalah panggilan yang bisa dijawab.",
      en: "A beautiful voice drifts from far away, and Abi stops working at once. Baby Ais is curious — and discovers that the adhan is a call you can answer.",
    },
    body: {
      id: `Sore itu Baby Ais sedang menyusun boneka-bonekanya jadi barisan, seperti murid di kelas. Kelinci di depan. Beruang di belakang. Jerapah paling ujung karena lehernya panjang.

Lalu terdengar suara dari kejauhan. Merdu. Panjang. Seperti nyanyian yang naik ke langit.

*Allaahu akbar, Allaahu akbar…*

Baby Ais menoleh ke arah Abi. Abi sedang mengetik di laptop — tapi tiba-tiba jarinya berhenti. Abi menutup laptopnya pelan-pelan. Lalu Abi duduk diam, mendengarkan, dan bibirnya bergerak sedikit.

Baby Ais memperhatikan. Abi tidak pernah berhenti mengetik, bahkan waktu Baby Mo minta digendong. Tapi suara ini membuat Abi berhenti.

Pelan-pelan, Baby Ais meletakkan jerapahnya. Ia ikut duduk diam.

Setelah suara itu selesai, Abi mengangkat tangan dan berdoa sebentar. Lalu ia menoleh dan tersenyum melihat Baby Ais yang duduk tegak seperti patung.

"Abi, itu suara apa? Kenapa Abi langsung berhenti?"

"Itu adzan, sayang. Panggilan untuk sholat. Seseorang di masjid sedang memanggil semua orang: *Ayo sholat! Ayo menuju kebahagiaan!*"

"Memanggil kita juga?"

"Memanggil kita juga."

Baby Ais berpikir. "Kalau dipanggil, kan harus dijawab, Abi. Kalau Umi panggil Ais, Ais jawab 'Iyaaa!'"

Abi tertawa. "Betul sekali! Dan adzan juga bisa dijawab. Rasulullah ﷺ mengajarkan: kalau mendengar adzan, ucapkan seperti yang diucapkan muadzin. Dia bilang *Allaahu akbar*, kita jawab *Allaahu akbar*."

Mata Baby Ais berbinar. "Kayak main gema!"

"Kayak main gema," kata Abi.

Baby Ais tidak sabar menunggu adzan berikutnya. Ia bertanya pada Umi setiap sepuluh menit, "Masih lama adzannya?"

Akhirnya, waktu Maghrib, langit menjadi oranye, dan suara itu datang lagi.

*Allaahu akbar, Allaahu akbar.*

"Allaahu akbar, Allaahu akbar," bisik Baby Ais.

*Asyhadu an laa ilaaha illallaah.*

"Asyhadu an laa… ilaaha… illallaah," ulangnya, sedikit tersandung.

Baby Mo yang sedang main mobil-mobilan berhenti, heran. "Ais ngomong sama siapa?"

"Aku lagi jawab panggilan!" kata Baby Ais serius. "Sini, ikut!"

Maka Baby Mo ikut duduk. Mereka menjawab bersama, kadang terlambat, kadang salah, kadang Abi membisikkan dari belakang. Waktu adzan selesai, Abi membacakan doa sesudah adzan, dan dua tangan kecil ikut terangkat di sampingnya.

Malam itu, barisan boneka Baby Ais berubah. Kelinci, beruang, dan jerapah semuanya menghadap ke satu arah, rapi seperti saf sholat.

"Mereka juga sudah dengar adzan," jelas Baby Ais.

> *"Apabila kalian mendengar adzan, ucapkanlah seperti yang diucapkan muadzin."* (HR. Bukhari 611, Muslim 383)

Ngobrol bareng si kecil: di adzan berikutnya, mau main gema bersama? Siapa yang bisa menjawab paling lengkap? 🕌`,
      en: `That afternoon Baby Ais was lining up her dolls in rows, like pupils in a classroom. Rabbit at the front. Bear at the back. Giraffe at the very end because of its long neck.

Then a sound came from far away. Beautiful. Long. Like a song rising into the sky.

*Allaahu akbar, Allaahu akbar…*

Baby Ais looked at Abi. Abi was typing on his laptop — but suddenly his fingers stopped. Abi closed the laptop gently. Then Abi sat quietly, listening, and his lips moved a little.

Baby Ais watched. Abi never stopped typing, not even when Baby Mo wanted to be carried. But this sound made Abi stop.

Slowly, Baby Ais put down her giraffe. She sat quietly too.

When the sound ended, Abi raised his hands and made a short du'a. Then he turned and smiled at Baby Ais, sitting up straight like a statue.

"Abi, what was that sound? Why did you stop straight away?"

"That was the adhan, sweetheart. The call to prayer. Someone at the mosque is calling everyone: *Come to prayer! Come to success!*"

"Calling us too?"

"Calling us too."

Baby Ais thought. "If someone calls you, you have to answer, Abi. When Umi calls Ais, Ais says 'Yeees!'"

Abi laughed. "Exactly right! And you can answer the adhan too. The Prophet ﷺ taught: when you hear the adhan, say what the caller says. He says *Allaahu akbar*, we answer *Allaahu akbar*."

Baby Ais's eyes sparkled. "Like an echo game!"

"Like an echo game," said Abi.

Baby Ais couldn't wait for the next adhan. She asked Umi every ten minutes, "Is it nearly time for the adhan?"

At last, at Maghrib, the sky turned orange, and the sound came again.

*Allaahu akbar, Allaahu akbar.*

"Allaahu akbar, Allaahu akbar," whispered Baby Ais.

*Ash-hadu an laa ilaaha illallaah.*

"Ash-hadu an laa… ilaaha… illallaah," she repeated, stumbling a little.

Baby Mo, playing with his cars, stopped, puzzled. "Who's Ais talking to?"

"I'm answering the call!" said Baby Ais seriously. "Come on, join in!"

So Baby Mo sat down too. They answered together, sometimes late, sometimes wrong, sometimes with Abi whispering from behind. When the adhan finished, Abi recited the du'a after the adhan, and two little pairs of hands rose beside him.

That night, Baby Ais's rows of dolls changed. Rabbit, bear and giraffe all faced the same way, neat as a line of people at prayer.

"They heard the adhan too," Baby Ais explained.

> *"When you hear the call, say what the caller says."* (Bukhari 611, Muslim 383)

Talk it over with your little one: at the next adhan, shall we play the echo game together? Who can answer the most? 🕌`,
    },
    anchor: { type: "doa", slug: "mendengar-adzan" },
    takeaway: {
      id: "Anak belajar menghormati adzan dengan melihat orang tuanya berhenti. Lalu beri ia cara ikut: menjawab, seperti main gema.",
      en: "Children learn to honour the adhan by watching their parents stop. Then give them a way to join in: answering it, like an echo game.",
    },
    tags: ["adzan", "sholat", "ibadah", "buku"],
    readingTimeMin: 4,
  },

  {
    slug: "layang-layang-yang-nyangkut",
    kind: "story",
    child: "mo",
    pose: "baby-mo-run.png",
    published: "2026-07-01",
    title: { id: "Layang-Layang yang Nyangkut", en: "The Kite Stuck in the Tree" },
    hook: {
      id: "Layang-layang merah Baby Mo tersangkut tinggi di pohon. Makin kuat ditarik, makin kusut talinya. Ternyata yang ia butuhkan bukan tenaga lebih besar.",
      en: "Baby Mo's red kite is stuck high in a tree. The harder he pulls, the more tangled the string gets. It turns out what he needs isn't more strength.",
    },
    body: {
      id: `Angin sore bertiup kencang di lapangan. Layang-layang merah Baby Mo menari di langit, ekornya yang panjang meliuk-liuk seperti ular.

"Lihat, Abi! Paling tinggi!"

Tapi angin tiba-tiba berbelok. Layang-layang itu menukik, berputar-putar, lalu — srak! — tersangkut di dahan pohon mangga yang paling tinggi.

"TIDAAAK!"

Baby Mo menarik talinya. Kuat-kuat. Layang-layangnya tidak bergerak. Ia menarik lebih kuat lagi, sampai kakinya terseret di rumput. Dahannya bergoyang, tapi layang-layangnya malah makin terbelit.

"Nggak bisa! Nggak bisa!" Baby Mo menghentak-hentakkan tali. Sekarang talinya kusut di tangannya, seperti mi goreng.

Ia melempar gulungan talinya ke rumput dan duduk dengan wajah cemberut. "Aku nyerah. Layang-layangnya jahat."

Abi duduk di sampingnya. Abi tidak langsung mengambil tali itu. Abi hanya memandangi pohon mangga lama sekali.

"Mo, kalau kamu jadi layang-layang itu, dan ada yang menarikmu kuat-kuat padahal kakimu tersangkut, rasanya bagaimana?"

Baby Mo berpikir. "Sakit. Makin nyangkut."

"Nah. Mungkin yang dibutuhkan bukan tarikan yang lebih kuat. Tapi tarikan yang lebih pelan."

Abi mengangkat tangannya dan berdoa pelan, "*Allahumma laa sahla illaa maa ja'altahu sahlaa…* Ya Allah, tidak ada yang mudah kecuali yang Engkau jadikan mudah."

Baby Mo mengikuti, terbata-bata. "Allahumma laa sahla…"

Lalu ia mengambil gulungan talinya lagi. Pertama, mengurai benang yang kusut. Satu simpul. Dua simpul. Tiga. Jarinya pegal, tapi ia tidak berhenti. Abi memegangi ujungnya.

Setelah talinya lurus, Baby Mo berdiri lagi menghadap pohon.

"Tarik sedikit," bisik Abi.

Baby Mo menarik sedikit.

"Sekarang kendurkan."

Baby Mo mengendurkan.

Tarik sedikit. Kendurkan. Tarik sedikit. Kendurkan.

Dahan itu bergoyang pelan, seperti mengangguk. Angin datang lagi, kali ini dari arah yang benar.

Tarik sedikit. Kendurkan.

Lalu — wuuush! — layang-layang merah itu terlepas dari dahan, terangkat angin, dan melayang lagi ke langit. Ekornya meliuk-liuk, seperti tidak pernah terjadi apa-apa.

"BISA, ABI! BISAAA!" Baby Mo melompat-lompat sambil tetap memegang tali, tertawa sampai layang-layangnya ikut menari.

Abi bertepuk tangan. "Siapa yang menyerah tadi?"

Baby Mo nyengir. "Bukan aku. Itu Mo yang tadi."

Sebelum pulang, Baby Mo menurunkan layang-layangnya pelan-pelan. Ia memeluknya, lalu menengadah ke langit. "Terima kasih, Allah, sudah bikin mudah."

> *Allahumma laa sahla illaa maa ja'altahu sahlaa, wa anta taj'alul hazna idzaa syi'ta sahlaa.* — "Ya Allah, tidak ada kemudahan kecuali yang Engkau jadikan mudah, dan Engkau menjadikan kesulitan — jika Engkau kehendaki — menjadi mudah." (HR. Ibnu Hibban 2427)

Ngobrol bareng si kecil: hal apa yang sedang terasa susah buatmu? Yuk coba pelan-pelan, sambil membaca doa ini bersama. 🪁`,
      en: `The afternoon wind blew hard across the field. Baby Mo's red kite danced in the sky, its long tail wriggling like a snake.

"Look, Abi! The highest!"

But suddenly the wind changed direction. The kite dived, spun round and round, then — shhhk! — got caught on the highest branch of the mango tree.

"NOOOO!"

Baby Mo pulled the string. Hard. The kite didn't move. He pulled even harder, until his feet slid on the grass. The branch shook, but the kite only got more tangled.

"I can't! I can't!" Baby Mo yanked at the string. Now it was knotted in his hands, like a plate of fried noodles.

He threw the reel onto the grass and sat down, scowling. "I give up. The kite is mean."

Abi sat down beside him. Abi didn't take the string straight away. Abi just looked at the mango tree for a long time.

"Mo, if you were that kite, and someone pulled you really hard while your foot was stuck, how would it feel?"

Baby Mo thought. "It would hurt. I'd get more stuck."

"Right. Maybe what's needed isn't a stronger pull. But a gentler one."

Abi raised his hands and prayed softly, "*Allahumma laa sahla illaa maa ja'altahu sahlaa…* O Allah, nothing is easy except what You make easy."

Baby Mo followed, stumbling. "Allahumma laa sahla…"

Then he picked up the reel again. First, untangling the knotted string. One knot. Two knots. Three. His fingers ached, but he didn't stop. Abi held the other end.

Once the string was straight, Baby Mo stood facing the tree again.

"Pull a little," whispered Abi.

Baby Mo pulled a little.

"Now let it go slack."

Baby Mo let it go slack.

Pull a little. Let go. Pull a little. Let go.

The branch swayed gently, as if nodding. The wind came again, this time from the right direction.

Pull a little. Let go.

Then — whoosh! — the red kite slipped off the branch, lifted on the wind, and floated back into the sky. Its tail wriggled as if nothing had ever happened.

"I DID IT, ABI! I DID IIIT!" Baby Mo jumped up and down, still holding the string, laughing until the kite danced along with him.

Abi clapped. "Who gave up a minute ago?"

Baby Mo grinned. "Not me. That was the old Mo."

Before going home, Baby Mo brought the kite down slowly. He hugged it, then looked up at the sky. "Thank you, Allah, for making it easy."

> *Allahumma laa sahla illaa maa ja'altahu sahlaa, wa anta taj'alul hazna idzaa syi'ta sahlaa.* — "O Allah, nothing is easy except what You make easy, and You make the difficult easy if You will." (Ibn Hibban 2427)

Talk it over with your little one: what feels hard for you right now? Let's try it slowly, saying this du'a together. 🪁`,
    },
    anchor: { type: "doa", slug: "doa-dimudahkan-urusan" },
    takeaway: {
      id: "Saat anak frustrasi, jangan buru-buru mengambil alih. Bantu ia melambat, berdoa, lalu mencoba lagi dengan tangannya sendiri.",
      en: "When a child is frustrated, don't rush to take over. Help them slow down, pray, then try again with their own hands.",
    },
    tags: ["sabar", "usaha", "doa", "buku"],
    readingTimeMin: 4,
  },

  {
    slug: "permintaan-pada-bintang-jatuh",
    kind: "story",
    child: "ais",
    pose: "baby-mo-wow.png",
    published: "2026-07-02",
    title: { id: "Permintaan pada Bintang Jatuh", en: "A Wish Upon a Falling Star" },
    hook: {
      id: "\"Itu bintang jatuh! Aku boleh minta sesuatu, kan?\" Baby Ais punya permintaan besar. Tapi kepada siapa sebenarnya ia harus meminta?",
      en: "\"A shooting star! I can make a wish, can't I?\" Baby Ais has a big wish. But who should she really be asking?",
    },
    body: {
      id: `Malam itu listrik padam di seluruh kampung. Rumah gelap, kipas berhenti, dan udara terasa gerah. Maka Umi mengajak Baby Ais duduk di teras dengan tikar dan sepiring jagung rebus.

Tanpa lampu-lampu rumah, langit jadi penuh sekali. Bintang di mana-mana, seperti gula yang tumpah di atas taplak hitam.

"Masya Allah," bisik Umi. "Jarang-jarang bisa lihat sebanyak ini."

Baby Ais berbaring telentang, mencoba menghitung. "Satu, dua, tiga… seratus… sejuta…"

Tiba-tiba — wuuussh — sebuah cahaya melesat melintasi langit, cepat sekali, lalu hilang.

Baby Ais langsung duduk. "UMI! ITU BINTANG JATUH! Kata teman di sekolah, kalau lihat bintang jatuh boleh minta apa saja! Aku mau minta sepeda pink yang ada keranjangnya!"

Ia memejamkan mata rapat-rapat dan menunjuk ke langit. "Bintang jatuh, aku mau sepeda pink yang ada—"

Umi menyentuh tangannya pelan. "Ais, boleh Umi tanya sesuatu dulu?"

Baby Ais membuka satu mata.

"Bintang itu siapa yang membuat?"

"Allah," jawab Baby Ais.

"Bulan?"

"Allah."

"Langit, awan, angin?"

"Allah, Allah, Allah."

"Kalau bintangnya saja diciptakan Allah," kata Umi, "bintang bisa mengabulkan permintaan, nggak?"

Baby Ais membuka kedua matanya. Ia memandangi langit lama sekali. "Nggak bisa," katanya pelan. "Bintang kan cuma… ciptaan. Kayak aku."

"Bintang itu indah sekali. Tapi bintang tidak bisa mendengar doamu. Yang bisa mendengar, yang bisa mengabulkan, cuma Yang menciptakan bintang."

"Jadi aku minta ke Allah?"

"Kapan saja. Tidak perlu menunggu bintang jatuh. Bahkan Allah sendiri yang bilang: *Berdoalah kepada-Ku, niscaya Aku kabulkan.*"

Baby Ais duduk bersila. Ia mengangkat kedua tangannya, seperti yang sering ia lihat Abi lakukan sesudah sholat. Ia berpikir lama.

Lalu ia berdoa pelan. "Ya Allah, aku mau sepeda pink yang ada keranjangnya."

Ia berhenti sebentar. Lalu menambahkan.

"Terus, ya Allah, tolong sembuhkan Nenek yang batuk. Terus, besok aku mau main sama Mo, jangan berantem. Terus… terima kasih sudah bikin bintang sebanyak ini."

Umi memandangnya diam-diam. Doa itu dimulai dengan sepeda, tapi berakhir dengan terima kasih.

Lampu tiba-tiba menyala lagi. Kipas berputar. Dari dalam rumah terdengar Baby Mo bersorak.

Baby Ais menoleh ke langit. Bintang-bintangnya jadi lebih sedikit, kalah oleh lampu. "Umi, bintangnya pergi."

"Bintangnya tetap di sana," kata Umi. "Sama seperti Allah. Selalu ada, walaupun kadang kita lupa melihat."

> *"Berdoalah kepada-Ku, niscaya akan Aku perkenankan bagimu."* (QS. Ghafir: 60)

Ngobrol bareng si kecil: kalau kamu boleh minta tiga hal kepada Allah malam ini, apa saja? Jangan lupa satu terima kasih di akhir, ya. ⭐`,
      en: `That night the power went out across the whole neighbourhood. The house was dark, the fan stopped, and the air felt stuffy. So Umi took Baby Ais to sit on the porch with a mat and a plate of boiled corn.

Without the house lights, the sky was completely full. Stars everywhere, like sugar spilled across a black tablecloth.

"Masha Allah," whispered Umi. "We hardly ever get to see this many."

Baby Ais lay on her back, trying to count. "One, two, three… a hundred… a million…"

Suddenly — whoosh — a streak of light shot across the sky, very fast, and vanished.

Baby Ais sat straight up. "UMI! A SHOOTING STAR! My friend at school says if you see a shooting star you can wish for anything! I want a pink bike with a basket!"

She squeezed her eyes shut and pointed at the sky. "Shooting star, I want a pink bike with a—"

Umi touched her hand gently. "Ais, may I ask you something first?"

Baby Ais opened one eye.

"Who made that star?"

"Allah," answered Baby Ais.

"The moon?"

"Allah."

"The sky, the clouds, the wind?"

"Allah, Allah, Allah."

"If even the star was made by Allah," said Umi, "can a star grant wishes?"

Baby Ais opened both eyes. She looked at the sky for a long time. "No," she said quietly. "A star is just… something that was made. Like me."

"Stars are so beautiful. But a star can't hear your prayer. The only One who can hear, and the only One who can grant it, is the One who made the stars."

"So I ask Allah?"

"Any time. You don't need to wait for a shooting star. Allah Himself says: *Call upon Me, and I will answer you.*"

Baby Ais sat cross-legged. She raised both her hands, the way she often saw Abi do after prayer. She thought for a long time.

Then she prayed softly. "O Allah, I want a pink bike with a basket."

She paused. Then she added more.

"And, O Allah, please make Nenek's cough better. And tomorrow I want to play with Mo without fighting. And… thank You for making so many stars."

Umi watched her quietly. The prayer had started with a bike, but it ended with a thank-you.

Suddenly the lights came back on. The fan whirred. From inside, Baby Mo cheered.

Baby Ais looked up at the sky. There were fewer stars now, outshone by the lights. "Umi, the stars went away."

"The stars are still there," said Umi. "Just like Allah. Always there, even when we sometimes forget to look."

> *"Call upon Me; I will respond to you."* (Qur'an, Ghafir 40:60)

Talk it over with your little one: if you could ask Allah for three things tonight, what would they be? Don't forget one thank-you at the end. ⭐`,
    },
    anchor: { type: "doa", slug: "doa-pandai-bersyukur" },
    takeaway: {
      id: "Jangan hanya meluruskan \"minta ke bintang\". Ajak anak berdoa langsung kepada Allah — dan lihat bagaimana doanya tumbuh dari keinginan menjadi syukur.",
      en: "Don't just correct \"wishing on a star\". Help your child pray to Allah directly — and watch the prayer grow from wanting into gratitude.",
    },
    tags: ["doa", "tauhid", "bintang", "malam", "buku"],
    readingTimeMin: 4,
  },

  {
    slug: "kupu-kupu-di-tangan-baby-ais",
    kind: "story",
    child: "ais",
    pose: "baby-mo-pose-15.png",
    published: "2026-07-03",
    title: { id: "Kupu-Kupu di Tangan Baby Ais", en: "The Butterfly in Baby Ais's Hand" },
    hook: {
      id: "Baby Ais berhasil menangkap kupu-kupu kuning dan ingin memeliharanya selamanya. Tapi makin erat ia menggenggam, makin sedih kupu-kupunya.",
      en: "Baby Ais catches a yellow butterfly and wants to keep it forever. But the tighter she holds it, the sadder the butterfly gets.",
    },
    body: {
      id: `Di kebun belakang, bunga-bunga kembang sepatu sedang mekar. Merah, merah muda, dan oranye. Dan di antara bunga-bunga itu, terbang seekor kupu-kupu kuning. Sayapnya seperti potongan sinar matahari.

Baby Ais menahan napas. Ia mengendap-endap, pelan-pelan, seperti kucing. Satu langkah. Dua langkah. Kupu-kupu itu hinggap di bunga merah, sayapnya membuka-menutup.

HAP!

"DAPAT!" Baby Ais melompat girang. Kupu-kupu itu ada di dalam kedua tangannya yang tertangkup. "Mo! Mo! Aku dapat kupu-kupu! Aku mau pelihara dia di kamar! Selamanya!"

Baby Mo berlari mendekat. "Lihat! Lihat!"

Baby Ais membuka sedikit celah di antara jarinya. Sayap kuning itu bergerak-gerak, menabrak-nabrak tangannya. Takut kupu-kupunya kabur, Baby Ais buru-buru menggenggam lebih erat.

Gerakan di dalam tangannya jadi makin lemah.

"Ais," bisik Baby Mo. "Lihat tanganmu. Ada bubuk kuning."

Baby Ais membuka sedikit tangannya. Telapak tangannya penuh debu kuning yang halus seperti bedak. Dan sayap kupu-kupu itu… kusut. Satu sisinya terlipat.

"Itu bubuk sayapnya," kata Umi yang datang membawa keranjang jemuran. Suaranya lembut. "Sayap kupu-kupu itu rapuh sekali, Ais. Kalau terlalu banyak bubuknya hilang, dia susah terbang."

Mata Baby Ais berkaca-kaca. "Tapi aku sayang sama dia. Aku mau dia sama aku terus."

Umi berjongkok di sampingnya. "Umi tahu. Tapi coba pikir. Kalau Ais dipeluk erat-erat terus, nggak boleh lari, nggak boleh main, nggak boleh ketemu Mo… itu rasanya disayang, atau rasanya terkurung?"

Baby Ais diam lama sekali. Kupu-kupu di tangannya hampir tidak bergerak.

"Terkurung," bisiknya.

Pelan-pelan, sangat pelan, Baby Ais membuka telapak tangannya lebar-lebar. Datar. Seperti piring kecil.

Kupu-kupu itu diam saja. Satu detik. Dua detik. Lima detik. Baby Ais tidak berani bernapas.

"Ayo," bisiknya. "Terbang. Nggak apa-apa."

Lalu sayap yang kusut itu bergetar. Membuka. Menutup. Membuka lagi — dan kupu-kupu kuning itu terangkat, oleng sedikit, lalu terbang. Rendah, lalu tinggi, lalu hinggap di bunga kembang sepatu yang paling atas.

Baby Ais menghela napas panjang. "Dia bisa terbang."

Baby Mo merangkul pundaknya. "Ais, mungkin kalau sayang sama sesuatu, kita pegangnya pelan-pelan aja. Pakai tangan terbuka."

Sore itu Baby Ais tidak menangkap kupu-kupu lagi. Ia duduk diam di dekat kembang sepatu, dengan telapak tangan terbuka di pangkuannya.

Dan sebelum matahari terbenam, sesuatu yang luar biasa terjadi. Seekor kupu-kupu kuning — mungkin yang tadi, mungkin yang lain — terbang turun, dan hinggap sebentar di telapak tangan Baby Ais yang terbuka.

Baby Ais tersenyum sangat lebar, tapi tidak bergerak sedikit pun.

> *"Sesungguhnya kelembutan tidaklah ada pada sesuatu kecuali ia akan menghiasinya, dan tidaklah dicabut dari sesuatu kecuali ia akan memperburuknya."* (HR. Muslim 2594)

Ngobrol bareng si kecil: hewan apa yang ingin kamu sayangi dengan tangan terbuka? Yuk latihan memegang sesuatu dengan sangat lembut. 🦋`,
      en: `In the back garden, the hibiscus flowers were blooming. Red, pink and orange. And among the flowers flew a yellow butterfly. Its wings were like little pieces of sunshine.

Baby Ais held her breath. She crept, slowly, slowly, like a cat. One step. Two steps. The butterfly landed on a red flower, its wings opening and closing.

SNAP!

"GOT IT!" Baby Ais jumped for joy. The butterfly was inside her cupped hands. "Mo! Mo! I caught a butterfly! I'm going to keep it in my room! Forever!"

Baby Mo ran over. "Let me see! Let me see!"

Baby Ais opened a tiny gap between her fingers. The yellow wings fluttered, bumping against her hands. Afraid it would escape, Baby Ais quickly squeezed tighter.

The movement inside her hands grew weaker.

"Ais," whispered Baby Mo. "Look at your hands. There's yellow powder."

Baby Ais opened her hands a little. Her palms were covered in fine yellow dust, soft as talcum powder. And the butterfly's wings were… crumpled. One side was folded over.

"That's the powder from its wings," said Umi, who had come out with the laundry basket. Her voice was gentle. "Butterfly wings are very delicate, Ais. If too much of the powder comes off, it's hard for them to fly."

Baby Ais's eyes filled with tears. "But I love it. I want it to stay with me always."

Umi crouched down beside her. "I know. But think about it. If Ais were hugged tight all the time, not allowed to run, not allowed to play, not allowed to see Mo… would that feel like being loved, or like being trapped?"

Baby Ais was quiet for a long time. The butterfly in her hands was barely moving.

"Trapped," she whispered.

Slowly, very slowly, Baby Ais opened her hands wide. Flat. Like a little plate.

The butterfly stayed still. One second. Two seconds. Five seconds. Baby Ais didn't dare breathe.

"Go on," she whispered. "Fly. It's okay."

Then the crumpled wings trembled. Opened. Closed. Opened again — and the yellow butterfly lifted, wobbled a little, then flew. Low, then high, then landed on the very top hibiscus flower.

Baby Ais let out a long breath. "It can fly."

Baby Mo put his arm round her shoulders. "Ais, maybe when you love something, you hold it gently. With open hands."

That afternoon Baby Ais didn't catch any more butterflies. She sat quietly by the hibiscus, with her open palms resting in her lap.

And before the sun set, something wonderful happened. A yellow butterfly — maybe the same one, maybe another — floated down and landed for a moment on Baby Ais's open palm.

Baby Ais smiled the biggest smile, but she didn't move even a little bit.

> *"Gentleness is not found in anything except that it beautifies it, and it is not removed from anything except that it makes it ugly."* (Muslim 2594)

Talk it over with your little one: which animal would you like to love with open hands? Let's practise holding something very, very gently. 🦋`,
    },
    anchor: { type: "hadith", slug: "kelembutan-keindahan" },
    takeaway: {
      id: "Anak sering menggenggam terlalu erat karena terlalu sayang. Ajari bedanya menyayangi dan memiliki — dengan tangan terbuka.",
      en: "Children often hold too tightly because they love too much. Teach the difference between loving and owning — with open hands.",
    },
    tags: ["kelembutan", "hewan", "kebun", "akhlak", "buku"],
    readingTimeMin: 5,
  },

  {
    slug: "hujan-pertama-setelah-lama-kering",
    kind: "story",
    child: "both",
    pose: "baby-mo-yeyy.png",
    published: "2026-07-04",
    title: { id: "Hujan Pertama Setelah Lama Kering", en: "The First Rain After a Long Dry Spell" },
    hook: {
      id: "Sudah berminggu-minggu tidak hujan, dan tomat kecil yang ditanam si kembar mulai layu. Mereka menyiraminya setiap hari — lalu belajar berdoa untuk hujan yang bermanfaat.",
      en: "It hasn't rained for weeks, and the twins' little tomato plant is wilting. They water it every day — then learn to pray for a rain that brings benefit.",
    },
    body: {
      id: `Di pojok halaman, ada satu pot kecil. Isinya pohon tomat yang ditanam Baby Mo dan Baby Ais bersama Abi. Namanya Pak Tomat. Daunnya dulu hijau segar, dan ada tiga buah tomat kecil yang masih hijau.

Tapi sudah berminggu-minggu tidak turun hujan.

Matahari bersinar terik setiap hari. Tanah di halaman retak-retak seperti kulit biskuit. Debu beterbangan kalau diinjak. Dan daun Pak Tomat mulai layu, melengkung ke bawah seperti orang yang sedang sedih.

"Pak Tomat haus," kata Baby Ais.

Maka setiap pagi, si kembar membawa gembor kecil. Baby Mo mengisi air dari keran. Baby Ais menyiramkannya pelan-pelan ke akar. Byur.

Tapi siang harinya, tanahnya sudah kering lagi. Daunnya layu lagi.

"Kenapa nggak bisa segar terus, Abi?" tanya Baby Mo, putus asa.

"Air dari gembor kita sedikit, Mo. Pak Tomat butuh banyak. Sawah-sawah juga butuh. Sungai juga butuh. Hanya Allah yang bisa menurunkan air sebanyak itu."

"Hujan," kata Baby Ais.

"Hujan," kata Abi.

Malam itu, sesudah sholat Isya, Baby Ais menambahkan sesuatu di doanya. "Ya Allah, turunin hujan ya. Pak Tomat haus. Sawah juga haus."

Baby Mo mengintip, lalu ikut menambahkan. "Tapi jangan yang banjir ya, Allah. Yang pas aja."

Abi tersenyum mendengarnya.

Tiga hari kemudian, sore-sore, langit tiba-tiba berubah. Awan kelabu bergulung-gulung. Angin bertiup dingin. Daun-daun bergoyang.

Lalu — tes.

Satu tetes jatuh di pipi Baby Mo.

Tes. Tes. Tes-tes-tes. Lalu bresssss!

"HUJAAAN!" Si kembar berlari ke teras, melompat-lompat.

Umi membuka pintu lebar-lebar. "Alhamdulillah."

Hujan turun makin deras. Bau tanah basah naik dari halaman, wangi sekali, seperti tanah yang sedang menarik napas lega. Retakan-retakan di tanah terisi air. Dan di pojok halaman, daun-daun Pak Tomat bergoyang-goyang di bawah hujan, seperti sedang menari.

"Abi! Pak Tomat minum!"

Abi mengajak mereka menengadahkan tangan, merasakan tetes hujan dari tepi atap. "Ada doa yang diajarkan Rasulullah ﷺ ketika hujan turun. Pendek sekali. *Allahumma shayyiban naafi'an.*"

"Allahumma shayyiban naafi'an," ulang si kembar.

"Artinya, ya Allah, jadikanlah hujan ini hujan yang bermanfaat."

Baby Mo mengangguk serius. "Yang pas. Bukan yang banjir."

"Betul sekali," kata Abi.

Mereka berdiri lama di teras. Tetes hujan jatuh di telapak tangan mereka, dingin dan geli. Dan setiap kali hujan makin deras, Baby Ais berbisik lagi, "Allahumma shayyiban naafi'an."

Seminggu kemudian, Pak Tomat berdiri tegak lagi. Daunnya hijau. Dan salah satu tomatnya mulai berubah warna — oranye, lalu merah.

"Ini tomat dari hujan," kata Baby Ais bangga.

> *Allahumma shayyiban naafi'an.* — "Ya Allah, jadikanlah hujan ini hujan yang membawa manfaat." (HR. Bukhari 1032)

Ngobrol bareng si kecil: siapa saja yang senang kalau hujan turun? Lain kali hujan, yuk berdiri di teras dan baca doanya bersama. 🌧️`,
      en: `In the corner of the yard there was a small pot. In it grew a tomato plant that Baby Mo and Baby Ais had planted with Abi. They called it Mr Tomato. Its leaves used to be fresh and green, and it had three little tomatoes that were still green.

But it hadn't rained for weeks.

The sun blazed every day. The ground in the yard cracked like a biscuit crust. Dust flew up when you stepped on it. And Mr Tomato's leaves began to wilt, drooping down like someone feeling sad.

"Mr Tomato is thirsty," said Baby Ais.

So every morning, the twins brought out their little watering can. Baby Mo filled it from the tap. Baby Ais poured it slowly onto the roots. Splash.

But by midday, the soil was dry again. The leaves were drooping again.

"Why won't it stay fresh, Abi?" asked Baby Mo, in despair.

"Our watering can only holds a little water, Mo. Mr Tomato needs a lot. The rice fields need it too. The rivers need it too. Only Allah can send down that much water."

"Rain," said Baby Ais.

"Rain," said Abi.

That night, after Isha prayer, Baby Ais added something to her du'a. "O Allah, please send rain. Mr Tomato is thirsty. The rice fields are thirsty too."

Baby Mo peeked, then added his own. "But not the flooding kind, Allah. Just the right amount."

Abi smiled to hear it.

Three days later, in the afternoon, the sky suddenly changed. Grey clouds rolled in. A cool wind blew. Leaves swayed.

Then — plip.

One drop landed on Baby Mo's cheek.

Plip. Plip. Plip-plip-plip. Then whooooosh!

"RAAAIN!" The twins ran to the porch, jumping up and down.

Umi opened the door wide. "Alhamdulillah."

The rain fell harder and harder. The smell of wet earth rose from the yard, so lovely, like the ground letting out a sigh of relief. The cracks in the soil filled with water. And in the corner of the yard, Mr Tomato's leaves bobbed under the rain, as if they were dancing.

"Abi! Mr Tomato is drinking!"

Abi had them hold out their hands to feel the drops falling from the edge of the roof. "There's a du'a the Prophet ﷺ taught for when rain falls. It's very short. *Allahumma shayyiban naafi'an.*"

"Allahumma shayyiban naafi'an," the twins repeated.

"It means, O Allah, make this a rain that brings benefit."

Baby Mo nodded seriously. "The right amount. Not the flooding kind."

"Exactly," said Abi.

They stood on the porch for a long time. Raindrops fell on their palms, cold and tickly. And every time the rain grew heavier, Baby Ais whispered again, "Allahumma shayyiban naafi'an."

A week later, Mr Tomato was standing tall again. His leaves were green. And one of his tomatoes was beginning to change colour — orange, then red.

"This is a rain tomato," said Baby Ais proudly.

> *Allahumma shayyiban naafi'an.* — "O Allah, make it a beneficial rain." (Bukhari 1032)

Talk it over with your little one: who is happy when the rain comes? Next time it rains, let's stand on the porch and say the du'a together. 🌧️`,
    },
    anchor: { type: "doa", slug: "ketika-hujan" },
    takeaway: {
      id: "Anak paling menghargai hujan ketika ia pernah merawat sesuatu yang kehausan. Beri ia satu pot kecil — dan biarkan doanya tumbuh bersama tanamannya.",
      en: "Children value rain most when they've cared for something thirsty. Give them one small pot — and let their prayers grow with the plant.",
    },
    tags: ["hujan", "syukur", "doa", "kebun", "buku"],
    readingTimeMin: 5,
  },

  {
    slug: "membantu-umi-bikin-kue",
    kind: "story",
    child: "mo",
    pose: "baby-mo-pose-30.png",
    published: "2026-07-05",
    title: { id: "Membantu Umi Bikin Kue", en: "Helping Umi Bake Cookies" },
    hook: {
      id: "Baby Mo mau bantu bikin kue. Tepungnya berhamburan, telurnya pecah di lantai, dan ia yakin akan dimarahi. Tapi dapur hari itu menyimpan kejutan.",
      en: "Baby Mo wants to help bake cookies. The flour goes everywhere, an egg smashes on the floor, and he's sure he'll be told off. But the kitchen has a surprise in store.",
    },
    body: {
      id: `Besok Nenek ulang tahun. Umi akan membuat kue kering cokelat kesukaan Nenek — yang bulat-bulat, dengan butiran cokelat di atasnya.

"Umi, aku mau bantu!" Baby Mo sudah berdiri di samping meja dapur dengan celemek yang kebesaran. Talinya diikat tiga kali di pinggangnya.

Umi memandangi dapurnya yang bersih mengilap. Lalu memandangi Baby Mo. Lalu tersenyum. "Boleh. Kita mulai dengan bismillah, ya."

"Bismillah!"

Tugas pertama: menuang tepung. Baby Mo mengangkat kantong tepung yang besar. Berat sekali. Kantongnya miring, miring, miring — dan WUSSS!

Tepung tumpah ke mangkuk, ke meja, ke lantai, ke celemek, ke rambut Baby Mo. Ia jadi putih dari kepala sampai kaki, seperti boneka salju.

Baby Mo membeku. Ia menunggu suara marah.

Tapi yang terdengar malah tawa. Umi tertawa sampai harus bersandar di kulkas. "Mo! Kamu jadi hantu tepung!"

Baby Mo ikut tertawa, lega. Tepung beterbangan dari rambutnya setiap kali ia tertawa.

Tugas kedua: memecahkan telur. "Ketuk pelan di pinggir mangkuk," kata Umi.

Baby Mo mengetuk. Terlalu pelan. Tidak retak. Ia mengetuk lagi, lebih kuat — PRAK! Telurnya pecah. Di tangannya. Kuning telurnya meluncur, melewati mangkuk, dan jatuh ke lantai. Plok.

Bibir Baby Mo mulai bergetar. "Maaf, Umi… aku bikin berantakan terus."

Umi berjongkok sampai matanya sejajar. "Mo, tahu nggak? Rasulullah ﷺ, manusia paling mulia, dulu juga suka membantu pekerjaan di rumah. Beliau tidak malu. Dan Umi yakin, waktu pertama kali belajar, semua orang pasti pernah menjatuhkan telur."

"Umi juga pernah?"

"Umi pernah menjatuhkan sepuluh telur sekaligus," bisik Umi. "Satu kardus."

Baby Mo tertawa lagi.

Mereka membersihkan lantai berdua. Lalu Umi memegang tangan Baby Mo, dan mereka memecahkan telur berikutnya bersama-sama. Tek… krek. Sempurna.

Tugas ketiga: mengaduk. Tugas keempat: membentuk bola-bola kecil. Bola buatan Baby Mo ada yang besar, ada yang kecil, ada yang bentuknya seperti kentang. Tapi Umi tidak membetulkan satu pun.

Tugas kelima — tugas paling penting: menaburkan butiran cokelat. Baby Mo menaburnya dengan sangat serius, satu per satu, seperti menanam biji.

Kue-kue itu masuk oven. Baby Mo menempelkan hidungnya ke kaca oven, menunggu. Wanginya mulai keluar — cokelat, mentega, manis. Rasanya seperti menunggu sepanjang tahun.

TING!

Kuenya matang. Yang buatan Umi bulat sempurna. Yang buatan Baby Mo… macam-macam. Ada yang gepeng. Ada yang gosong sedikit di pinggir.

"Umi, kueku jelek," katanya pelan.

Umi mengambil satu kue buatan Baby Mo — yang bentuknya seperti kentang — dan menggigitnya. "Hmm. Ini yang paling enak."

"Bohong!"

"Sungguh. Karena yang ini ada rasa *bersama*-nya."

Besoknya, Nenek membuka kotak kue. Ia mengambil satu, yang bentuknya paling aneh, dan memandanginya lama. "Ini pasti buatan Mo," katanya sambil tersenyum. Lalu Nenek memakannya duluan.

> *Aisyah radhiyallahu 'anha ditanya apa yang dilakukan Nabi ﷺ di rumah. Ia menjawab: "Beliau biasa membantu pekerjaan keluarganya, dan bila datang waktu sholat, beliau keluar untuk sholat."* (HR. Bukhari 676)

Ngobrol bareng si kecil: pekerjaan rumah apa yang ingin kamu bantu minggu ini? Berantakan sedikit tidak apa-apa — yang penting bersama. 🍪`,
      en: `Tomorrow was Nenek's birthday. Umi was going to bake Nenek's favourite chocolate cookies — the round ones, with chocolate sprinkles on top.

"Umi, I want to help!" Baby Mo was already standing by the kitchen counter in an apron that was far too big. The strings were wrapped three times around his waist.

Umi looked at her sparkling clean kitchen. Then at Baby Mo. Then she smiled. "Okay. We start with bismillah."

"Bismillah!"

Job one: pouring the flour. Baby Mo lifted the big bag of flour. It was so heavy. The bag tilted, tilted, tilted — and WHOOSH!

Flour poured into the bowl, onto the counter, onto the floor, onto the apron, into Baby Mo's hair. He was white from head to toe, like a snowman.

Baby Mo froze. He waited for an angry voice.

But what he heard was laughter. Umi laughed so hard she had to lean against the fridge. "Mo! You're a flour ghost!"

Baby Mo laughed too, relieved. Flour puffed out of his hair every time he giggled.

Job two: cracking the eggs. "Tap it gently on the edge of the bowl," said Umi.

Baby Mo tapped. Too gently. No crack. He tapped again, harder — CRACK! The egg broke. In his hand. The yolk slid out, past the bowl, and landed on the floor. Splat.

Baby Mo's lip began to wobble. "Sorry, Umi… I keep making a mess."

Umi crouched down until their eyes were level. "Mo, do you know something? The Prophet ﷺ, the noblest person ever, used to help with the work at home. He wasn't embarrassed. And I'm sure that when everyone first learns, they drop an egg or two."

"Did you ever?"

"I once dropped ten eggs at once," Umi whispered. "A whole box."

Baby Mo laughed again.

They cleaned the floor together. Then Umi held Baby Mo's hands, and they cracked the next egg together. Tap… crack. Perfect.

Job three: stirring. Job four: rolling little balls. Baby Mo's balls were big, small, and one was shaped like a potato. But Umi didn't fix a single one.

Job five — the most important job: sprinkling the chocolate. Baby Mo sprinkled very seriously, one at a time, as if planting seeds.

The cookies went into the oven. Baby Mo pressed his nose to the oven glass, waiting. The smell began to drift out — chocolate, butter, sweetness. It felt like waiting a whole year.

DING!

The cookies were done. Umi's were perfectly round. Baby Mo's were… all sorts. Some were flat. Some were a bit burnt at the edges.

"Umi, my cookies are ugly," he said quietly.

Umi picked up one of Baby Mo's cookies — the potato-shaped one — and bit into it. "Mmm. This one's the tastiest."

"You're fibbing!"

"Truly. Because this one has the taste of *together* in it."

The next day, Nenek opened the box of cookies. She picked one, the strangest-looking of all, and looked at it for a long time. "This must be Mo's," she said with a smile. And Nenek ate it first.

> *Aishah was asked what the Prophet ﷺ did at home. She said: "He used to help with the work of his family, and when the time for prayer came, he would go out to pray."* (Bukhari 676)

Talk it over with your little one: which job at home would you like to help with this week? A little mess is fine — what matters is doing it together. 🍪`,
    },
    anchor: { type: "parenting", slug: "bonding-orangtua" },
    takeaway: {
      id: "Kebersamaan lebih penting daripada kerapian. Satu kue berbentuk kentang yang dibuat bersama lebih berharga dari sekotak kue sempurna.",
      en: "Togetherness matters more than tidiness. One potato-shaped cookie made together is worth more than a box of perfect ones.",
    },
    tags: ["bonding", "dapur", "keluarga", "nenek", "buku"],
    readingTimeMin: 5,
  },


  // ── Batch Oktober–November 2026 ──────────────────────────────────────
  // Written to the "Cerita v2" bar: a real problem the CHILD solves, a
  // read-aloud refrain, one exactly-quoted & sourced Islamic anchor, and a
  // closing question for parent + child instead of a lecture.

  {
    slug: "awan-petir-di-dada-baby-ais",
    kind: "story",
    child: "ais",
    pose: "baby-mo-pose-07.png",
    published: "2026-10-24",
    title: {
      id: "Awan Petir di Dada Baby Ais",
      en: "The Thundercloud in Baby Ais's Chest",
    },
    hook: {
      id: "Puzzle unta Baby Ais tinggal satu keping lagi — lalu, vrooom, semuanya berantakan. Ada awan petir yang tumbuh di dadanya.",
      en: "Baby Ais's camel puzzle was one piece from done — then, vrooom, it all went flying. A thundercloud began to grow in her chest.",
    },
    body: {
      id: `Baby Ais sedang menyusun puzzle unta. Dua puluh keping! Tinggal satu lagi — punuknya.

Lalu datanglah Baby Mo dengan pesawat mainannya. "Vrooom! Vrooom!"

Kaki Baby Mo menyenggol meja. Kepingan puzzle beterbangan ke mana-mana. Unta yang hampir jadi itu… hilang.

Baby Ais diam. Lalu ada yang aneh di dadanya. Panas. Berat. Bergemuruh. Seperti ada awan petir yang tumbuh di dalam sana, makin besar, makin gelap.

Tangannya mengepal. Ia berdiri, memungut satu keping, dan mengangkatnya tinggi-tinggi, siap dilempar ke arah Baby Mo.

"Ais," panggil Abi dari pintu. Pelan. Tidak marah.

Baby Ais berhenti, tangannya masih di atas.

"Awannya sebesar apa?" tanya Abi.

Baby Ais membentangkan kedua tangannya selebar-lebarnya. "SEBESAR INI!"

Abi mengangguk. "Itu awan yang besar sekali. Mau Abi ajari cara Rasulullah mengecilkan awan seperti itu?"

Baby Ais mengangguk sedikit. Sedikit saja.

"Pertama: kalau marah sambil berdiri, duduk dulu," kata Abi. Baby Ais duduk di lantai. Awannya masih besar, tapi tidak bisa ke mana-mana.

"Kedua: tarik napas, pelan-pelan, sampai perutmu kembung seperti balon." Baby Ais menarik napas. Fuuuh.

"Ketiga: minta tolong sama Allah. *A'uudzu billaahi minasy-syaithaanir-rajiim.*"

Baby Ais mengulanginya, pelan-pelan. *A'uudzu billaahi minasy-syaithaanir-rajiim.*

Awannya… mengecil. Dari sebesar kamar, jadi sebesar bantal.

Duduk. Tarik napas. A'uudzu billah.

Dari sebesar bantal, jadi sebesar apel.

Duduk. Tarik napas. A'uudzu billah.

Sekarang tinggal gerimis kecil di matanya. Baby Ais mengusapnya.

Lalu ia menoleh ke Baby Mo, yang sejak tadi berdiri kaku memeluk pesawatnya. Suaranya masih bergetar, tapi jelas: "Mo. Aku marah. Puzzle-ku berantakan."

Baby Mo menunduk. "Maaf, Ais. Aku nggak lihat." Lalu ia berjongkok dan mulai memungut kepingan satu per satu. "Aku bantu susun lagi, ya?"

Mereka menyusunnya berdua. Kali ini lebih cepat, karena ada empat tangan. Keping terakhir — punuk unta — Baby Mo memberikannya pada Baby Ais. "Kamu yang pasang."

Klik. Untanya utuh.

Sore itu, menara balok Baby Mo roboh disenggol kucing. Wajahnya memerah, tangannya mulai mengepal.

Baby Ais buru-buru datang dan duduk di sampingnya. "Mo," bisiknya, "awannya sebesar apa?"

> *A'uudzu billaahi minasy-syaithaanir-rajiim.* — "Aku berlindung kepada Allah dari setan yang terkutuk." Rasulullah ﷺ mengajarkannya untuk orang yang sedang marah. (HR. Bukhari 3282, Muslim 2610)

Ngobrol bareng si kecil: kalau kamu marah, awannya biasanya sebesar apa? Yuk latihan bertiga sekarang — duduk, tarik napas, A'uudzu billah. ⛈️`,
      en: `Baby Ais was building a camel puzzle. Twenty pieces! Just one left — the hump.

Then along came Baby Mo with his toy plane. "Vrooom! Vrooom!"

Baby Mo's foot bumped the table. Puzzle pieces flew everywhere. The almost-finished camel… was gone.

Baby Ais went still. Then something strange happened in her chest. Hot. Heavy. Rumbling. As if a thundercloud were growing in there, bigger and darker.

Her hands made fists. She stood up, grabbed a piece, and lifted it high, ready to throw it at Baby Mo.

"Ais," Abi called from the door. Softly. Not angry.

Baby Ais stopped, her hand still in the air.

"How big is the cloud?" Abi asked.

Baby Ais stretched her arms as wide as they would go. "THIS BIG!"

Abi nodded. "That's a very big cloud. Want me to show you how the Prophet taught us to shrink a cloud like that?"

Baby Ais nodded a little. Just a little.

"One: if you're angry while standing, sit down," said Abi. Baby Ais sat on the floor. The cloud was still big, but now it couldn't go anywhere.

"Two: take a breath, slowly, until your tummy puffs up like a balloon." Baby Ais breathed in. Whoooo.

"Three: ask Allah for help. *A'uudzu billaahi minasy-syaithaanir-rajiim.*"

Baby Ais repeated it, slowly. *A'uudzu billaahi minasy-syaithaanir-rajiim.*

The cloud… shrank. From as big as the room to as big as a pillow.

Sit. Breathe. A'uudzu billah.

From as big as a pillow to as big as an apple.

Sit. Breathe. A'uudzu billah.

Now there was only a little drizzle left in her eyes. Baby Ais wiped it away.

Then she turned to Baby Mo, who had been standing stiffly the whole time, hugging his plane. Her voice still wobbled, but it was clear: "Mo. I'm angry. My puzzle got messed up."

Baby Mo looked down. "Sorry, Ais. I didn't see." Then he crouched and began picking up the pieces one by one. "Can I help you build it again?"

They built it together. Faster this time, because there were four hands. The last piece — the camel's hump — Baby Mo handed to Baby Ais. "You put it in."

Click. The camel was whole.

That afternoon, the cat knocked over Baby Mo's block tower. His face went red and his hands began to curl into fists.

Baby Ais hurried over and sat down beside him. "Mo," she whispered, "how big is the cloud?"

> *A'uudzu billaahi minasy-syaithaanir-rajiim.* — "I seek refuge in Allah from the accursed devil." The Prophet ﷺ taught it for someone who is angry. (Bukhari 3282, Muslim 2610)

Talk it over with your little one: when you get angry, how big is your cloud? Let's practise together now — sit, breathe, A'uudzu billah. ⛈️`,
    },
    anchor: { type: "doa", slug: "ketika-marah" },
    takeaway: {
      id: "Marah itu boleh dirasakan, bukan dilemparkan. Duduk, tarik napas, A'uudzu billah — lalu katakan dengan kata-kata.",
      en: "Anger is allowed to be felt, not thrown. Sit, breathe, A'uudzu billah — then say it with words.",
    },
    tags: ["marah", "emosi", "kembar", "buku"],
    readingTimeMin: 4,
  },

  {
    slug: "duar-siapa-takut-petir",
    kind: "story",
    child: "mo",
    pose: "baby-mo-wow.png",
    published: "2026-10-25",
    title: { id: "DUAR! Siapa Takut Petir?", en: "BOOM! Who's Afraid of Thunder?" },
    hook: {
      id: "Setiap kali langit berbunyi DUAR, Baby Mo menghilang ke bawah selimut. Sampai ia tahu apa yang sebenarnya diucapkan petir.",
      en: "Every time the sky went BOOM, Baby Mo vanished under the blanket. Until he learned what the thunder was really saying.",
    },
    body: {
      id: `Malam itu hujan turun deras. Lalu langit menyala putih sekejap — kilat! — dan sesudahnya:

DUAR!

Baby Mo melompat ke bawah selimut secepat kilat. Yang kelihatan cuma dua kaki kecil yang gemetar.

Baby Ais malah menempelkan hidungnya ke jendela. "Mo! Lihat! Langitnya kayak lampu blitz!"

"Nggak mau!" suara Baby Mo teredam dari dalam selimut.

DUAR!

Selimutnya bergetar makin kencang.

Umi duduk di tepi kasur. Ia tidak menarik selimutnya. Ia cuma berbisik, "Mo, mau main tebak-tebakan? Kita hitung dari kilat sampai bunyinya. Makin besar angkanya, makin jauh petirnya."

Dari dalam selimut, satu mata mengintip.

Kilat! Umi dan Baby Ais menghitung, "Satu… dua… tiga… empat…"

DUAR!

"Empat!" seru Baby Ais. "Jauh!"

Abi masuk membawa segelas air hangat. "Tahu nggak, Mo, petir itu sebenarnya sedang bilang sesuatu."

Baby Mo mengintip dengan dua mata sekarang. "Bilang apa?"

"Petir sedang bertasbih. Memuji Allah. Seperti bedug raksasa yang bilang *Subhanallah* sekeras-kerasnya. Makanya, setiap dengar petir, sahabat Nabi membaca doa ini." Abi mengucapkannya pelan-pelan:

*Subhanalladzi yusabbihur-ra'du bihamdihi wal-mala'ikatu min khifatih.*

"Jadi petirnya nggak marah?" tanya Baby Mo.

"Nggak. Petirnya sedang memuji Allah. Kita boleh ikut memuji."

Kilat! "Satu… dua… tiga… empat… lima…"

DUAR!

Kali ini, dari dalam selimut terdengar suara kecil: "Subhanallah…"

Kilat lagi! Baby Mo menurunkan selimutnya sampai ke dagu. "Satu… dua… tiga… empat… lima… enam…"

DUAR!

"SUBHANALLAH!" seru Baby Mo, lebih keras dari petirnya. Baby Ais tertawa sampai terguling.

Petir makin jauh. Tujuh. Delapan. Sembilan. Bunyinya tinggal "duar" kecil, seperti bedug dari kampung sebelah.

Baby Mo sekarang duduk di samping Baby Ais di jendela. Masih memegang ujung baju Umi — tapi duduk di jendela.

"Ais," katanya, "petirnya sudah capek memuji Allah."

"Gantian kita," jawab Baby Ais. Lalu mereka berbisik bersama, "Subhanallah."

Malam itu Baby Mo tertidur sambil menghitung. Bukan menghitung rasa takut. Menghitung pujian.

> *Subhanalladzi yusabbihur-ra'du bihamdihi wal-mala'ikatu min khifatih.* — "Maha Suci Dzat yang petir bertasbih dengan memuji-Nya, dan para malaikat pun bertasbih karena takut kepada-Nya." (Diriwayatkan dalam Al-Muwatta' Imam Malik)

Ngobrol bareng si kecil: saat hujan petir berikutnya, mau ikut menghitung dan bilang Subhanallah bersama? ⚡`,
      en: `That night the rain came pouring down. Then the sky flashed white for a moment — lightning! — and after it:

BOOM!

Baby Mo leapt under the blanket faster than lightning. All you could see were two small, trembling feet.

Baby Ais, on the other hand, pressed her nose to the window. "Mo! Look! The sky is like a camera flash!"

"Don't want to!" came Baby Mo's muffled voice from under the blanket.

BOOM!

The blanket shook even harder.

Umi sat on the edge of the bed. She didn't pull the blanket away. She just whispered, "Mo, want to play a guessing game? We count from the flash to the sound. The bigger the number, the farther away the thunder is."

From under the blanket, one eye peeked out.

Flash! Umi and Baby Ais counted, "One… two… three… four…"

BOOM!

"Four!" cried Baby Ais. "Far away!"

Abi came in with a glass of warm water. "Did you know, Mo, the thunder is actually saying something?"

Baby Mo peeked out with both eyes now. "Saying what?"

"The thunder is glorifying Allah. Praising Him. Like a giant drum saying *Subhanallah* as loud as it can. That's why, whenever they heard thunder, a companion of the Prophet would say this du'a." Abi said it slowly:

*Subhanalladzi yusabbihur-ra'du bihamdihi wal-mala'ikatu min khifatih.*

"So the thunder isn't angry?" asked Baby Mo.

"No. The thunder is praising Allah. We can praise along with it."

Flash! "One… two… three… four… five…"

BOOM!

This time, from under the blanket, came a small voice: "Subhanallah…"

Another flash! Baby Mo pulled the blanket down to his chin. "One… two… three… four… five… six…"

BOOM!

"SUBHANALLAH!" shouted Baby Mo, louder than the thunder. Baby Ais laughed so hard she rolled over.

The thunder moved farther away. Seven. Eight. Nine. Now it was only a little "boom", like a drum from the next village.

Baby Mo was sitting beside Baby Ais at the window now. Still holding the corner of Umi's shirt — but sitting at the window.

"Ais," he said, "the thunder is tired of praising Allah."

"Our turn," Baby Ais replied. And together they whispered, "Subhanallah."

That night Baby Mo fell asleep counting. Not counting his fears. Counting praises.

> *Subhanalladzi yusabbihur-ra'du bihamdihi wal-mala'ikatu min khifatih.* — "Glory be to the One whom the thunder glorifies with His praise, and the angels too, out of awe of Him." (Narrated in Imam Malik's Al-Muwatta')

Talk it over with your little one: at the next thunderstorm, shall we count and say Subhanallah together? ⚡`,
    },
    anchor: { type: "doa", slug: "mendengar-petir" },
    takeaway: {
      id: "Rasa takut anak tidak perlu ditarik paksa dari bawah selimut. Beri ia sesuatu untuk dilakukan — menghitung, lalu memuji Allah.",
      en: "A child's fear doesn't need to be pulled out from under the blanket. Give them something to do — count, then praise Allah.",
    },
    tags: ["petir", "takut", "hujan", "malam", "buku"],
    readingTimeMin: 4,
  },

  {
    slug: "juara-dua-yang-paling-berani",
    kind: "story",
    child: "both",
    pose: "baby-mo-run.png",
    published: "2026-10-26",
    title: { id: "Juara Dua yang Paling Berani", en: "The Bravest Runner-Up" },
    hook: {
      id: "Baby Mo selalu menang lomba lari ke pohon mangga. Selalu. Sampai hari ini, Baby Ais sampai duluan.",
      en: "Baby Mo always won the race to the mango tree. Always. Until today, when Baby Ais got there first.",
    },
    body: {
      id: `Setiap sore, di taman, Baby Mo dan Baby Ais lomba lari ke pohon mangga.

"Siap… siaaap… MULAI!"

Dan setiap sore, Baby Mo yang menang. Ia akan menepuk batang pohon, mengangkat kedua tangan, dan berteriak, "JUARA SATU!"

Baby Ais akan sampai beberapa detik kemudian, terengah-engah, lalu tersenyum. "Selamat, Mo!"

Selalu begitu. Menang — "Juara satu!" — "Selamat, Mo!"

Tapi sore ini berbeda.

"Siap… siaaap… MULAI!"

Baby Ais melesat seperti kucing yang melihat kupu-kupu. Kakinya kecil tapi cepat sekali. Baby Mo berlari sekuat tenaga — tapi punggung Baby Ais tetap di depan. Makin jauh. Makin jauh.

Tep! Baby Ais yang menepuk pohon duluan.

Baby Mo berhenti. Wajahnya panas. Ia menendang rumput. "Nggak adil! Sepatuku licin! Tadi aku belum siap! Ulang!"

Baby Ais menurunkan tangannya yang tadi terangkat. Senyumnya pelan-pelan hilang.

Abi, yang duduk di bangku taman, memanggil Baby Mo. "Mo, sini sebentar."

Baby Mo datang sambil cemberut, tangan dilipat di dada.

"Kalah itu rasanya nggak enak, ya," kata Abi.

Baby Mo mengangguk keras. Matanya mulai berair.

"Abi mau tanya satu hal saja. Kalau kamu yang menang, Ais biasanya bilang apa?"

Baby Mo terdiam. Ia ingat. Setiap sore. Setiap kali Ais kalah.

"…'Selamat, Mo,'" bisiknya.

"Padahal Ais juga pasti pernah sedih karena kalah, kan?"

Baby Mo menatap Baby Ais di bawah pohon mangga. Adiknya sedang memungut daun, sendirian, tidak merayakan apa-apa.

Rasanya berat sekali. Kakinya seperti ditempeli batu. Mengucapkan selamat ketika kita sendiri sedang sedih — ternyata itu lebih susah daripada lomba lari mana pun.

Tapi Baby Mo berjalan. Satu langkah. Dua langkah. Sampai di bawah pohon mangga.

"Ais," katanya, masih sedikit cemberut. "Selamat. Kamu cepat banget tadi."

Wajah Baby Ais langsung bersinar seperti matahari sore. "Mau lomba lagi?"

Baby Mo menggeleng. Lalu ia duduk di samping adiknya. "Besok saja. Sekarang ceritain dong — gimana caranya kamu bisa secepat itu?"

Dan Baby Ais pun bercerita, panjang sekali, dengan tangan bergerak-gerak seperti sayap.

Abi tersenyum dari bangku. Sore itu ada dua juara. Juara satu lomba lari. Dan juara dua yang paling berani.

> *"Tidak sempurna iman salah seorang dari kalian, hingga ia mencintai untuk saudaranya apa yang ia cintai untuk dirinya sendiri."* (HR. Bukhari 13, Muslim 45)

Ngobrol bareng si kecil: kenapa bilang "selamat" waktu kalah itu butuh keberanian? Kapan terakhir kamu melakukannya? 🏃`,
      en: `Every afternoon, at the park, Baby Mo and Baby Ais raced to the mango tree.

"Ready… set… GO!"

And every afternoon, Baby Mo won. He would slap the tree trunk, throw both arms in the air, and shout, "NUMBER ONE!"

Baby Ais would arrive a few seconds later, out of breath, and smile. "Congratulations, Mo!"

Always the same. A win — "Number one!" — "Congratulations, Mo!"

But this afternoon was different.

"Ready… set… GO!"

Baby Ais shot off like a cat that has spotted a butterfly. Her legs were small but so fast. Baby Mo ran as hard as he could — but Baby Ais's back stayed ahead of him. Farther. And farther.

Tap! Baby Ais touched the tree first.

Baby Mo stopped. His face went hot. He kicked the grass. "Not fair! My shoes are slippery! I wasn't ready! Do it again!"

Baby Ais lowered the arms she had raised. Her smile slowly faded.

Abi, sitting on the park bench, called Baby Mo over. "Mo, come here a moment."

Baby Mo came, scowling, arms folded across his chest.

"Losing doesn't feel nice, does it," said Abi.

Baby Mo nodded hard. His eyes were starting to water.

"I just want to ask you one thing. When you win, what does Ais usually say?"

Baby Mo went quiet. He remembered. Every afternoon. Every time Ais lost.

"…'Congratulations, Mo,'" he whispered.

"And Ais must have felt sad about losing sometimes too, right?"

Baby Mo looked at Baby Ais under the mango tree. His sister was picking up leaves, alone, celebrating nothing.

It felt so heavy. His feet felt like they had stones stuck to them. Saying congratulations while you're sad yourself — that turned out to be harder than any race.

But Baby Mo walked. One step. Two steps. All the way to the mango tree.

"Ais," he said, still scowling a little. "Congratulations. You were really fast."

Baby Ais's face lit up like the afternoon sun. "Want to race again?"

Baby Mo shook his head. Then he sat down beside his sister. "Tomorrow. Right now, tell me — how did you get so fast?"

And Baby Ais told him, for a very long time, her hands flapping like wings.

Abi smiled from the bench. That afternoon there were two champions. The winner of the race. And the bravest runner-up.

> *"None of you truly believes until he loves for his brother what he loves for himself."* (Bukhari 13, Muslim 45)

Talk it over with your little one: why does saying "congratulations" when you lose take courage? When did you last do it? 🏃`,
    },
    anchor: { type: "parenting", slug: "rivalitas-saudara" },
    takeaway: {
      id: "Mengucapkan selamat saat kalah adalah keberanian yang paling sulit — dan paling indah. Ajak anak mengingat bagaimana saudaranya pernah memperlakukannya.",
      en: "Congratulating someone when you've lost is the hardest courage — and the most beautiful. Help your child remember how their sibling once treated them.",
    },
    tags: ["kalah", "lomba", "kembar", "taman", "buku"],
    readingTimeMin: 4,
  },

  {
    slug: "tujuh-kali-doa-untuk-nenek",
    kind: "story",
    child: "ais",
    pose: "baby-mo-thank-you.png",
    published: "2026-10-27",
    title: { id: "Tujuh Kali Doa untuk Nenek", en: "Seven Prayers for Nenek" },
    hook: {
      id: "Nenek sakit. Baby Ais membawa gambar bunga matahari dan satu doa yang ia latih di mobil — tujuh kali, dihitung dengan jari.",
      en: "Nenek is sick. Baby Ais brings a sunflower drawing and one du'a she practised in the car — seven times, counted on her fingers.",
    },
    body: {
      id: `"Nenek sakit," kata Umi pagi itu. "Hari ini kita jenguk, ya."

Baby Ais langsung mengambil krayon. Ia menggambar kebun Nenek: bunga matahari yang tinggi-tinggi, kursi bambu, dan kucing oranye yang suka tidur di sana. Kuningnya banyak sekali. Supaya Nenek ingat kebunnya menunggu.

Di mobil, Umi mengajarkan sebuah doa. "Rasulullah ﷺ mengajarkan doa ini untuk orang sakit. Diucapkan tujuh kali."

*As'alullaahal-'azhiima…*

"As-a-lul-lo-hal-a-zhi-ma," ulang Baby Ais, pelan-pelan.

*…rabbal-'arsyil-'azhiimi…*

"Rob-bal-ar-syil-a-zhi-mi."

*…an yasyfiyak.*

"An yasy-fi-yak." Baby Ais mengulanginya sepanjang jalan. Kadang lancar, kadang tersandung. Baby Mo ikut-ikutan, tapi lalu tertidur dengan mulut terbuka.

"Artinya apa, Umi?"

"Aku memohon kepada Allah Yang Maha Agung, agar menyembuhkanmu."

Di rumah Nenek, semuanya terasa berbeda. Tidak ada suara Nenek memanggil dari dapur. Kamarnya redup. Nenek berbaring, wajahnya pucat, suaranya kecil sekali.

Baby Ais berhenti di pintu. Kertas gambarnya ia remas sedikit. Nenek yang ini bukan Nenek yang biasanya mengejarnya keliling kebun.

"Ais takut, ya?" bisik Umi.

Baby Ais mengangguk.

"Nggak apa-apa. Nenek tetap Nenek. Yuk, pegang tangannya."

Baby Ais berjalan pelan ke samping kasur. Tangan Nenek terasa hangat, dan sedikit keriput, seperti kertas yang lembut. Nenek membuka mata dan tersenyum. "Ais…"

Baby Ais memberikan gambarnya. Nenek memandanginya lama sekali. "Kucingnya mirip," katanya, dan mereka berdua tertawa kecil.

Lalu Baby Ais mengangkat jari-jarinya. Ia mulai berbisik.

"As'alullaahal-'azhiima rabbal-'arsyil-'azhiimi an yasyfiyak." Satu jari.

Dua jari. Tiga jari. Di jari keempat ia lupa di tengah, dan Umi membisikkan lanjutannya.

Lima. Enam. Tujuh.

Tujuh jari terangkat. Nenek menggenggam tangan kecil itu. "Doamu sampai, sayang. Nenek dengar. Allah juga dengar."

Nenek tidak langsung sembuh hari itu. Ia masih harus banyak tidur dan minum obat. Tapi waktu mereka pamit, wajah Nenek tidak sepucat tadi.

Seminggu kemudian, telepon berdering. Suara Nenek terdengar jelas dan ceria. "Ais! Gambarmu Nenek tempel di dinding. Kucingnya setiap hari duduk di bawahnya!"

Baby Ais melompat-lompat. Lalu ia mengangkat tujuh jarinya ke arah telepon, seolah Nenek bisa melihat.

> *As'alullaahal-'azhiima rabbal-'arsyil-'azhiimi an yasyfiyak.* — "Aku memohon kepada Allah Yang Maha Agung, Tuhan 'Arsy yang agung, agar menyembuhkanmu." Diucapkan tujuh kali saat menjenguk orang sakit. (HR. Tirmidzi 2083, Abu Dawud 3106)

Ngobrol bareng si kecil: siapa yang mau kita doakan hari ini? Yuk hitung tujuh dengan jari, bersama-sama. 🌻`,
      en: `"Nenek is sick," Umi said that morning. "We're going to visit her today."

Baby Ais grabbed her crayons straight away. She drew Nenek's garden: tall, tall sunflowers, the bamboo chair, and the orange cat who liked to nap there. Lots and lots of yellow. So Nenek would remember her garden was waiting.

In the car, Umi taught her a du'a. "The Prophet ﷺ taught this du'a for someone who is sick. You say it seven times."

*As'alullaahal-'azhiima…*

"As-a-lul-lo-hal-a-zhi-ma," Baby Ais repeated, slowly.

*…rabbal-'arsyil-'azhiimi…*

"Rob-bal-ar-syil-a-zhi-mi."

*…an yasyfiyak.*

"An yasy-fi-yak." Baby Ais practised it the whole way. Sometimes smoothly, sometimes stumbling. Baby Mo joined in, then fell asleep with his mouth open.

"What does it mean, Umi?"

"I ask Allah the Almighty to heal you."

At Nenek's house, everything felt different. No Nenek calling from the kitchen. The room was dim. Nenek was lying down, her face pale, her voice very small.

Baby Ais stopped at the door. She crumpled her drawing a little. This Nenek wasn't the Nenek who usually chased her around the garden.

"Are you scared, Ais?" Umi whispered.

Baby Ais nodded.

"That's okay. Nenek is still Nenek. Come, hold her hand."

Baby Ais walked slowly to the bedside. Nenek's hand felt warm and a little wrinkly, like soft paper. Nenek opened her eyes and smiled. "Ais…"

Baby Ais gave her the drawing. Nenek looked at it for a long, long time. "The cat looks just like him," she said, and they both giggled.

Then Baby Ais held up her fingers. She began to whisper.

"As'alullaahal-'azhiima rabbal-'arsyil-'azhiimi an yasyfiyak." One finger.

Two fingers. Three fingers. On the fourth she forgot the middle, and Umi whispered the rest.

Five. Six. Seven.

Seven fingers raised. Nenek held the little hand tight. "Your du'a arrived, sweetheart. Nenek heard it. Allah heard it too."

Nenek didn't get better right away that day. She still needed lots of sleep and medicine. But when they said goodbye, her face wasn't as pale as before.

A week later, the phone rang. Nenek's voice sounded clear and cheerful. "Ais! I stuck your drawing on the wall. The cat sits under it every day!"

Baby Ais jumped up and down. Then she held up seven fingers to the phone, as if Nenek could see.

> *As'alullaahal-'azhiima rabbal-'arsyil-'azhiimi an yasyfiyak.* — "I ask Allah the Almighty, Lord of the Mighty Throne, to heal you." Said seven times when visiting the sick. (Tirmidzi 2083, Abu Dawud 3106)

Talk it over with your little one: who shall we pray for today? Let's count to seven on our fingers, together. 🌻`,
    },
    anchor: { type: "doa", slug: "doa-menjenguk-orang-sakit" },
    takeaway: {
      id: "Anak boleh takut melihat orang yang ia sayangi sakit. Beri ia peran kecil — sebuah gambar, sebuah doa tujuh kali — supaya takutnya berubah jadi kasih.",
      en: "Children may feel scared seeing someone they love unwell. Give them a small role — a drawing, a du'a seven times — so the fear turns into care.",
    },
    tags: ["sakit", "nenek", "menjenguk", "silaturahmi", "buku"],
    readingTimeMin: 4,
  },

  {
    slug: "baju-yang-terbalik",
    kind: "story",
    child: "mo",
    pose: "baby-mo-yeyy.png",
    published: "2026-10-28",
    title: { id: "Baju yang Terbalik", en: "The Back-to-Front Shirt" },
    hook: {
      id: "\"Aku bisa sendiri!\" kata Baby Mo. Kepalanya masuk ke lubang lengan, labelnya di depan, dan Umi harus duduk di atas tangannya sendiri supaya tidak membantu.",
      en: "\"I can do it myself!\" said Baby Mo. His head went into the armhole, the label ended up in front, and Umi had to sit on her own hands so she wouldn't help.",
    },
    body: {
      id: `Pagi itu Baby Mo punya pengumuman penting.

"Mulai hari ini, aku pakai baju SENDIRI!"

Umi mengangkat alis. Kaus hijau bergambar bintang sudah terlipat di kasur. "Yakin, Mo?"

"Aku bisa sendiri!"

Baby Mo memasukkan kepalanya ke dalam kaus. Dorong… dorong… Lho, kok gelap? Kepalanya ternyata masuk ke lubang lengan. Yang keluar cuma sebelah telinga.

Tangan Umi sudah bergerak mau menolong. Tapi Umi ingat: Baby Mo bilang ingin sendiri. Maka Umi melakukan sesuatu yang lucu — ia duduk di atas kedua tangannya sendiri.

"Aku bisa sendiri!" kata Baby Mo dari dalam kaus.

Ia menarik kepalanya keluar, mencoba lagi. Kali ini kepalanya muncul dari lubang yang benar! Tapi… kok ada label menggelitik dagunya? Dan gambar bintangnya ke mana?

Bintangnya ada di punggung. Kausnya terbalik — yang belakang di depan.

Baby Ais yang sedang menyisir rambut bonekanya tertawa cekikikan. "Mo, kamu kayak jalan mundur!"

Baby Mo menunduk, melihat dadanya yang polos. Bibirnya mulai bergetar. Umi masih duduk di atas tangannya. Susah sekali.

"Mau dicoba lagi, atau mau dipakai begitu dulu?" tanya Umi.

Baby Mo berpikir. Lalu ia membusungkan dada. "Begini dulu! Yang penting AKU YANG PAKAI!"

Umi tersenyum lebar, akhirnya membebaskan tangannya — untuk bertepuk. "Kalau begitu, ada doa khusus untuk orang yang baru pakai baju. Yuk."

Mereka mengucapkannya bersama, pelan-pelan:

*Alhamdulillahilladzi kasani hadza wa razaqanihi min ghairi haulin minni wa la quwwah.*

"Artinya," kata Umi, "segala puji bagi Allah yang memberiku pakaian ini, tanpa daya dan kekuatan dariku."

Baby Mo mengerutkan dahi. "Tapi tadi aku pakai kekuatanku, Umi. Susah banget!"

Umi tertawa. "Betul. Tapi siapa yang memberimu tangan untuk menarik? Siapa yang memberi kita baju untuk dipakai?"

Baby Mo melihat kedua tangannya. "…Allah."

"Jadi kamu yang berusaha, Allah yang memberi. Dua-duanya hebat."

Hari itu Baby Mo pergi ke warung bersama Abi dengan kaus terbalik. Bu Warung bertanya, "Wah, bintangnya di belakang, ya?" Baby Mo menjawab dengan bangga, "Aku pakai SENDIRI!"

Sore harinya, waktu ganti baju untuk mandi, Baby Mo memegang kausnya lama sekali. Ia mencari label kecil itu. Label di belakang. Bintang di depan.

Dorong… dorong… plop!

Kepalanya keluar. Bintangnya di depan. Tepat di depan.

"UMIIII!" teriaknya. "Alhamdulillahilladzi kasani hadza!"

> *Alhamdulillahilladzi kasani hadza wa razaqanihi min ghairi haulin minni wa la quwwah.* — "Segala puji bagi Allah yang telah memberiku pakaian ini dan memberikannya kepadaku tanpa daya dan kekuatan dariku." (HR. Abu Dawud 4023, Tirmidzi 3458)

Ngobrol bareng si kecil: apa satu hal yang ingin kamu coba lakukan sendiri minggu ini? Umi dan Abi janji akan duduk di atas tangan. 👕`,
      en: `That morning Baby Mo had an important announcement.

"Starting today, I put my clothes on BY MYSELF!"

Umi raised an eyebrow. The green T-shirt with the star on it was folded on the bed. "Are you sure, Mo?"

"I can do it myself!"

Baby Mo pushed his head into the shirt. Push… push… Huh, why is it dark? His head had gone into the armhole. Only one ear poked out.

Umi's hands were already moving to help. But Umi remembered: Baby Mo said he wanted to do it himself. So Umi did something funny — she sat on both of her own hands.

"I can do it myself!" said Baby Mo from inside the shirt.

He pulled his head out and tried again. This time his head popped out of the right hole! But… why was a label tickling his chin? And where had the star gone?

The star was on his back. The shirt was back to front.

Baby Ais, who was brushing her doll's hair, giggled. "Mo, you look like you're walking backwards!"

Baby Mo looked down at his plain front. His lip began to wobble. Umi was still sitting on her hands. It was very hard.

"Do you want to try again, or wear it like that for now?" asked Umi.

Baby Mo thought. Then he puffed out his chest. "Like this for now! What matters is I PUT IT ON!"

Umi grinned and finally freed her hands — to clap. "Then there's a special du'a for someone who has just put on clothes. Let's say it."

They said it together, slowly:

*Alhamdulillahilladzi kasani hadza wa razaqanihi min ghairi haulin minni wa la quwwah.*

"It means," said Umi, "all praise is for Allah who gave me this clothing, without any power or strength from me."

Baby Mo frowned. "But I did use my strength, Umi. It was really hard!"

Umi laughed. "True. But who gave you hands to pull with? Who gave us clothes to wear?"

Baby Mo looked at his two hands. "…Allah."

"So you did the trying, and Allah did the giving. Both are wonderful."

That day Baby Mo went to the corner shop with Abi, shirt still back to front. The shopkeeper asked, "Oh, your star's on the back?" Baby Mo answered proudly, "I put it on MYSELF!"

In the afternoon, changing for his bath, Baby Mo held his shirt for a long time. He looked for that little label. Label at the back. Star at the front.

Push… push… pop!

His head came out. The star was at the front. Right at the front.

"UMIIII!" he shouted. "Alhamdulillahilladzi kasani hadza!"

> *Alhamdulillahilladzi kasani hadza wa razaqanihi min ghairi haulin minni wa la quwwah.* — "All praise is for Allah who clothed me with this and provided it for me without any power or strength from me." (Abu Dawud 4023, Tirmidzi 3458)

Talk it over with your little one: what is one thing you'd like to try doing by yourself this week? Umi and Abi promise to sit on their hands. 👕`,
    },
    anchor: { type: "doa", slug: "memakai-pakaian" },
    takeaway: {
      id: "Baju terbalik yang dipakai sendiri lebih berharga dari baju rapi yang dipakaikan. Kadang tugas kita cuma duduk di atas tangan sendiri.",
      en: "A back-to-front shirt put on by yourself is worth more than a neat one put on for you. Sometimes our job is just to sit on our hands.",
    },
    tags: ["mandiri", "pakaian", "pagi", "buku"],
    readingTimeMin: 5,
  },

  {
    slug: "langit-merah-muda-yang-terlewat",
    kind: "story",
    child: "mo",
    pose: "baby-mo-idea.png",
    published: "2026-10-29",
    title: { id: "Langit Merah Muda yang Terlewat", en: "The Pink Sky He Missed" },
    hook: {
      id: "Tiga kali Baby Ais memanggil, tiga kali Baby Mo menjawab \"sebentar\". Waktu ia akhirnya menoleh dari layar, langitnya sudah gelap.",
      en: "Three times Baby Ais called, three times Baby Mo said \"in a minute\". When he finally looked up from the screen, the sky had gone dark.",
    },
    body: {
      id: `Sore itu Baby Mo menonton video di tablet. Kartun truk pemadam kebakaran. Satu selesai, langsung muncul yang berikutnya. Dan berikutnya. Dan berikutnya.

Dari teras, Baby Ais memanggil. "Mo! Sini! Langitnya jadi oranye!"

"Sebentar," jawab Baby Mo. Matanya tidak bergerak dari layar.

Truk merah menyemprotkan air. Video berganti.

"Mo! Sekarang langitnya merah muda! Kayak permen kapas!"

"Sebentaaar."

Video berganti lagi. Truk kuning. Truk biru.

"MO! Ada burung banyak terbang pulang! Cepetan!"

"Iya, sebentar…"

Ketika video berikutnya habis, Baby Mo akhirnya meletakkan tablet dan berlari ke teras.

Langitnya sudah gelap. Ungu tua, lalu hitam. Tidak ada oranye. Tidak ada merah muda. Burung-burungnya sudah pulang.

Baby Ais duduk memeluk lutut. "Tadi bagus banget," katanya pelan. "Ada awan bentuknya kayak gajah."

Baby Mo berdiri lama memandangi langit yang kosong. Dadanya terasa aneh. Bukan marah. Bukan sedih biasa. Seperti kehilangan sesuatu yang tidak bisa diulang.

"Abi," katanya ketika Abi datang, "bisa nggak langitnya diputar ulang? Kayak video?"

Abi duduk di samping mereka. "Video bisa diputar ulang, Mo. Langit sore tadi tidak. Hari ini tidak akan datang dua kali."

Baby Mo terdiam.

"Rasulullah ﷺ pernah bilang, ada dua nikmat yang sering membuat orang tertipu: sehat dan waktu luang. Kita punya waktu, tapi sering tidak sadar sedang menghabiskannya."

"Tabletnya yang nyuri waktuku," gumam Baby Mo.

"Tabletnya cuma kotak kecil," kata Abi lembut. "Yang memutuskan kapan berhenti, siapa?"

Baby Mo berpikir lama. Lalu matanya berbinar. Ia berlari ke dalam dan kembali membawa jam pasir kecil dari dapur — yang biasa Umi pakai untuk merebus telur.

"Besok," katanya, "aku nonton sampai pasirnya habis. Terus aku matikan sendiri. Biar nggak ketinggalan langit lagi."

Abi mengangkat jempol. "Itu ide siapa?"

"Ideku!"

Besok sorenya, pasir terakhir jatuh tepat saat truk pemadam sedang menyemprot. Tangan Baby Mo ragu sebentar di atas tombol. Sebentar saja.

Klik. Layarnya gelap.

Ia berlari ke teras. Baby Ais menunjuk ke atas. Langitnya sedang berubah dari oranye ke merah muda, dan ada satu awan panjang yang bentuknya seperti truk pemadam kebakaran.

"Subhanallah," bisik mereka berdua.

> *"Dua nikmat yang banyak manusia tertipu karenanya: kesehatan dan waktu luang."* (HR. Bukhari 6412)

Ngobrol bareng si kecil: apa yang mungkin kita lewatkan kalau terlalu lama menatap layar? Mau bikin jam pasir sendiri? ⏳`,
      en: `That afternoon Baby Mo was watching videos on the tablet. A cartoon about fire engines. One ended, and the next started right away. And the next. And the next.

From the porch, Baby Ais called. "Mo! Come here! The sky's turning orange!"

"In a minute," Baby Mo answered. His eyes didn't move from the screen.

The red truck sprayed water. The video changed.

"Mo! Now the sky is pink! Like candy floss!"

"In a minuuute."

The video changed again. Yellow truck. Blue truck.

"MO! Lots of birds are flying home! Hurry!"

"Yes, in a minute…"

When the next video ended, Baby Mo finally put down the tablet and ran to the porch.

The sky was already dark. Deep purple, then black. No orange. No pink. The birds had all gone home.

Baby Ais sat hugging her knees. "It was really pretty," she said quietly. "There was a cloud shaped like an elephant."

Baby Mo stood for a long time looking at the empty sky. His chest felt strange. Not angry. Not the usual sad. More like losing something that can't be played again.

"Abi," he said when Abi came out, "can we replay the sky? Like a video?"

Abi sat down beside them. "Videos can be replayed, Mo. This afternoon's sky can't. Today will never come twice."

Baby Mo said nothing.

"The Prophet ﷺ once said there are two blessings that many people are fooled about: good health and free time. We have time, but we often don't notice we're spending it."

"The tablet stole my time," Baby Mo mumbled.

"The tablet is just a little box," said Abi gently. "Who decides when to stop?"

Baby Mo thought for a long time. Then his eyes lit up. He ran inside and came back with the little sand timer from the kitchen — the one Umi uses for boiling eggs.

"Tomorrow," he said, "I'll watch until the sand runs out. Then I'll turn it off myself. So I don't miss the sky again."

Abi gave a thumbs up. "Whose idea was that?"

"My idea!"

The next afternoon, the last grain of sand fell just as the fire engine was spraying. Baby Mo's hand hovered over the button for a moment. Just a moment.

Click. The screen went dark.

He ran to the porch. Baby Ais pointed up. The sky was turning from orange to pink, and there was one long cloud shaped exactly like a fire engine.

"Subhanallah," they both whispered.

> *"There are two blessings which many people are deceived about: good health and free time."* (Bukhari 6412)

Talk it over with your little one: what might we miss if we look at a screen for too long? Shall we make our own sand timer? ⏳`,
    },
    anchor: { type: "parenting", slug: "screen-time" },
    takeaway: {
      id: "Aturan layar paling kuat adalah yang anak ikut buat sendiri. Biarkan ia merasakan apa yang terlewat — lalu bantu ia menemukan caranya berhenti.",
      en: "The strongest screen rule is one the child helps make. Let them feel what they missed — then help them find their own way to stop.",
    },
    tags: ["layar", "gadget", "waktu", "sore", "buku"],
    readingTimeMin: 4,
  },

  {
    slug: "pak-telinga-yang-hilang",
    kind: "story",
    child: "ais",
    pose: "baby-mo-alright.png",
    published: "2026-10-30",
    title: { id: "Pak Telinga yang Hilang", en: "Mr Ears Goes Missing" },
    hook: {
      id: "Kelinci biru Baby Ais hilang di taman. Mereka mencari ke ayunan, perosotan, dan warung. \"Kita cari dulu, lalu kita serahkan ke Allah.\"",
      en: "Baby Ais's blue rabbit is lost at the park. They search the swings, the slide, and the shop. \"First we look, then we leave it to Allah.\"",
    },
    body: {
      id: `Pak Telinga adalah kelinci biru milik Baby Ais. Telinganya panjang sebelah, karena sering digigit waktu Baby Ais mengantuk. Ia ikut ke mana-mana: ke meja makan, ke kamar mandi (tunggu di luar), dan ke taman.

Sore itu, waktu mau pulang dari taman, Baby Ais menjerit. "Pak Telinga mana?!"

Tangannya kosong. Keranjang sepedanya kosong. Kantong Umi kosong.

Air mata Baby Ais langsung tumpah. "Pak Telinga hilang! Dia sendirian! Nanti dia kedinginan!"

Umi berjongkok dan memegang kedua bahunya. "Ais, dengar. Kita cari dulu, lalu kita serahkan ke Allah. Yuk, kita ingat-ingat. Tadi kita ke mana saja?"

Baby Ais terisak, tapi mulai berpikir. "Ayunan…"

Mereka ke ayunan. Baby Mo merangkak ke bawahnya. Ada sandal jepit, ada daun kering. Tidak ada Pak Telinga.

"Kita cari dulu," gumam Baby Ais, "lalu kita serahkan ke Allah."

"Habis itu ke perosotan!" kata Baby Mo.

Mereka ke perosotan. Baby Mo meluncur turun sambil melihat ke kiri dan ke kanan. Ada botol minum orang lain. Tidak ada Pak Telinga.

"Kita cari dulu, lalu kita serahkan ke Allah."

"Terus kita beli es di warung!"

Mereka ke warung. Ibu warung menggeleng. "Belum lihat, Nak. Nanti kalau ketemu, Ibu simpankan."

Langit mulai gelap. Mereka harus pulang. Tanpa Pak Telinga.

Malam itu Baby Ais tidak bisa tidur. Kasurnya terasa terlalu luas. Ia menangis pelan di bantal.

Umi duduk di sampingnya. "Kita sudah mencari ke semua tempat. Sekarang bagian yang kedua — kita serahkan ke Allah. Ada doa untuk itu: *Hasbunallaahu wa ni'mal-wakiil.* Cukuplah Allah bagi kita, Dia sebaik-baik penolong."

"Kalau Pak Telinga nggak kembali?" bisik Baby Ais.

Umi memeluknya. "Kalau pun tidak kembali, Allah tetap cukup untuk kita. Allah tahu Ais sedih. Allah tidak pernah kehilangan apa pun."

Baby Ais memejamkan mata. "Hasbunallaahu wa ni'mal-wakiil," bisiknya.

Lalu ada yang mengetuk pintu kamar. Baby Mo masuk sambil memeluk beruang cokelatnya — beruang yang tidak pernah, tidak pernah ia pinjamkan pada siapa pun.

"Ini," katanya, menyodorkan beruangnya. "Buat jagain Ais malam ini. Sampai Pak Telinga pulang."

Baby Ais tidur memeluk beruang Baby Mo.

Besok paginya, bel rumah berbunyi. Di depan pagar berdiri ibu warung — dan seorang anak perempuan kecil. Di tangan anak itu ada kelinci biru dengan telinga panjang sebelah, sedikit kotor, tapi utuh.

"Anak saya menemukannya di bawah bangku taman," kata ibu warung. "Dia tidak mau tidur sebelum kelincinya dikembalikan ke pemiliknya."

Baby Ais memeluk Pak Telinga erat-erat. Lalu ia menatap anak perempuan itu. "Terima kasih," katanya. "Kamu mau main ayunan sama kami nanti sore?"

> *Hasbunallaahu wa ni'mal-wakiil.* — "Cukuplah Allah menjadi penolong kami, dan Dia sebaik-baik pelindung." (QS. Ali 'Imran: 173)

Ngobrol bareng si kecil: kalau ada barang kita yang hilang, apa dua hal yang kita lakukan? (Bisikan: cari dulu… lalu serahkan ke Allah.) 🐰`,
      en: `Mr Ears was Baby Ais's blue rabbit. One of his ears was longer than the other, because Baby Ais chewed it when she got sleepy. He went everywhere with her: to the dinner table, to the bathroom (waiting outside), and to the park.

That afternoon, as they were about to leave the park, Baby Ais shrieked. "Where's Mr Ears?!"

Her hands were empty. Her bike basket was empty. Umi's bag was empty.

Baby Ais burst into tears. "Mr Ears is lost! He's all alone! He'll get cold!"

Umi crouched down and held both her shoulders. "Ais, listen. First we look, then we leave it to Allah. Come on, let's remember. Where did we go today?"

Baby Ais sniffled, but she began to think. "The swings…"

They went to the swings. Baby Mo crawled underneath. There was a flip-flop, there were dry leaves. No Mr Ears.

"First we look," Baby Ais mumbled, "then we leave it to Allah."

"Then the slide!" said Baby Mo.

They went to the slide. Baby Mo slid down looking left and right. There was someone else's water bottle. No Mr Ears.

"First we look, then we leave it to Allah."

"Then we bought ice lollies at the shop!"

They went to the shop. The shopkeeper shook her head. "Haven't seen him, dear. If I find him, I'll keep him safe for you."

The sky was getting dark. They had to go home. Without Mr Ears.

That night Baby Ais couldn't sleep. Her bed felt too big. She cried quietly into her pillow.

Umi sat beside her. "We looked everywhere. Now comes the second part — we leave it to Allah. There's a du'a for that: *Hasbunallaahu wa ni'mal-wakiil.* Allah is enough for us, and He is the best helper."

"What if Mr Ears doesn't come back?" whispered Baby Ais.

Umi hugged her. "Even if he doesn't, Allah is still enough for us. Allah knows Ais is sad. And Allah never loses anything."

Baby Ais closed her eyes. "Hasbunallaahu wa ni'mal-wakiil," she whispered.

Then someone knocked on the bedroom door. Baby Mo came in hugging his brown bear — the bear he never, ever lent to anyone.

"Here," he said, holding out his bear. "To look after you tonight. Until Mr Ears comes home."

Baby Ais slept hugging Baby Mo's bear.

The next morning, the doorbell rang. At the gate stood the shopkeeper — and a little girl. In the girl's hands was a blue rabbit with one long ear, a bit dirty, but whole.

"My daughter found him under the park bench," said the shopkeeper. "She wouldn't go to sleep until we brought him back to his owner."

Baby Ais hugged Mr Ears tight. Then she looked at the girl. "Thank you," she said. "Do you want to play on the swings with us this afternoon?"

> *Hasbunallaahu wa ni'mal-wakiil.* — "Allah is sufficient for us, and He is the best Disposer of affairs." (Qur'an, Ali 'Imran 3:173)

Talk it over with your little one: when we lose something, what are the two things we do? (Whisper: first we look… then we leave it to Allah.) 🐰`,
    },
    anchor: { type: "doa", slug: "doa-hasbunallah" },
    takeaway: {
      id: "Tawakal untuk anak itu sederhana: cari dulu sungguh-sungguh, lalu serahkan ke Allah. Dan kadang, pertolongan Allah datang lewat tangan seorang anak lain.",
      en: "Tawakkul for a child is simple: search properly first, then leave it to Allah. And sometimes Allah's help arrives through another child's hands.",
    },
    tags: ["hilang", "tawakal", "taman", "kembar", "buku"],
    readingTimeMin: 5,
  },

  {
    slug: "perjalanan-paling-panjang-sedunia",
    kind: "story",
    child: "both",
    pose: "baby-mo-yes.png",
    published: "2026-10-31",
    title: { id: "Perjalanan Paling Panjang Sedunia", en: "The Longest Trip in the World" },
    hook: {
      id: "Delapan jam ke rumah Nenek. \"Masih lama?\" tanya si kembar, lagi dan lagi. Abi punya doa yang katanya bisa \"mendekatkan jarak\".",
      en: "Eight hours to Nenek's house. \"Are we there yet?\" the twins ask, again and again. Abi has a du'a that he says can \"bring the distance closer\".",
    },
    body: {
      id: `Pagi-pagi sekali, mobil sudah penuh. Tas, bantal, termos, sekotak kue untuk Nenek, dan dua anak kembar yang masih memakai piyama.

"Rumah Nenek jauh," kata Abi sambil memasang sabuk pengaman. "Delapan jam."

"Delapan jam itu berapa lama?" tanya Baby Ais.

"Kira-kira… dari bangun tidur sampai makan siang, lalu sampai sore."

Baby Mo membelalak. "Itu perjalanan paling panjang SEDUNIA!"

Sebelum mobil berjalan, Abi mengangkat tangan dan berdoa. Si kembar ikut mengangkat tangan, meskipun belum hafal.

*Allahumma innaa nas'aluka fii safarinaa haadzal-birra wat-taqwaa… Allahumma hawwin 'alainaa safaranaa haadzaa, wathwi 'annaa bu'dah.*

"Artinya apa, Abi?"

"Ya Allah, mudahkanlah perjalanan kami, dan dekatkanlah jaraknya."

Baby Ais memandang jalan di depan. "Jadi jalannya nanti jadi pendek?"

Abi tersenyum. "Kita lihat saja nanti."

Satu jam kemudian.

"Abi, masih lama?"

"Masih, sayang."

Dua jam kemudian.

"Abi, masih lamaaa?"

"Masih."

Tiga jam kemudian, Baby Mo menempelkan pipinya ke kaca. "Abi… masih lama nggak siiih?"

Abi melirik ke kaca spion. "Kita main yuk. Namanya *Cari Ciptaan Allah.* Siapa yang lihat duluan, dapat satu poin. Mulai: cari… sapi!"

"SAPI!" teriak Baby Ais, menunjuk ke sawah. "Satu poin buat aku!"

"Cari… gunung!"

"Itu! Itu! Yang ada awannya di atas!" seru Baby Mo.

Mereka menemukan kerbau yang berendam di lumpur. Sungai yang airnya cokelat. Pohon kelapa yang berbaris seperti tentara. Burung bangau putih yang berdiri dengan satu kaki. Setiap kali, Umi bertanya, "Siapa yang menciptakan?" dan mereka menjawab bersama, "Allaaah!"

Baby Ais mengumpulkan dua puluh tiga poin. Baby Mo mengumpulkan sembilan belas — lalu tertidur di tengah kata "kerbau", dengan mulut terbuka dan kue setengah dimakan di tangannya.

Ia tidur lama sekali.

Waktu ia membuka mata, mobil sudah berhenti. Di luar ada pagar hijau yang ia kenal, pohon jambu, dan Nenek yang melambai-lambai dari teras.

Baby Mo mengucek matanya. "Lho? Sudah sampai?"

"Sudah," kata Abi.

Baby Mo melompat girang. "Abi! Doanya BERHASIL! Jalannya jadi pendek banget!"

Baby Ais memutar bola matanya. "Itu karena kamu TIDUR, Mo."

Abi tertawa sampai harus menyandarkan kepala ke setir. "Dua-duanya benar," katanya. "Allah memudahkan perjalanan dengan banyak cara. Kadang dengan sapi dan gunung. Kadang dengan tidur yang nyenyak."

> *Allahumma innaa nas'aluka fii safarinaa haadzal-birra wat-taqwaa, wa minal-'amali maa tardhaa. Allahumma hawwin 'alainaa safaranaa haadzaa, wathwi 'annaa bu'dah.* — "Ya Allah, kami memohon kebaikan dan ketakwaan dalam perjalanan kami ini, serta amal yang Engkau ridai. Ya Allah, mudahkanlah perjalanan kami ini dan dekatkanlah jaraknya." (HR. Muslim 1342)

Ngobrol bareng si kecil: di perjalanan berikutnya, mau main *Cari Ciptaan Allah*? Siapa yang menurutmu akan menang? 🚗`,
      en: `Very early in the morning, the car was already full. Bags, pillows, a flask, a box of cakes for Nenek, and two twins still in their pyjamas.

"Nenek's house is far," said Abi, buckling up. "Eight hours."

"How long is eight hours?" asked Baby Ais.

"About… from waking up until lunch, and then until the afternoon."

Baby Mo's eyes went wide. "That's the longest trip in the WORLD!"

Before the car moved, Abi raised his hands and prayed. The twins raised their hands too, though they hadn't memorised it yet.

*Allahumma innaa nas'aluka fii safarinaa haadzal-birra wat-taqwaa… Allahumma hawwin 'alainaa safaranaa haadzaa, wathwi 'annaa bu'dah.*

"What does it mean, Abi?"

"O Allah, make this journey easy for us, and bring its distance closer."

Baby Ais looked at the road ahead. "So the road will get shorter?"

Abi smiled. "We'll see."

One hour later.

"Abi, are we there yet?"

"Not yet, sweetheart."

Two hours later.

"Abi, are we there yeeet?"

"Not yet."

Three hours later, Baby Mo pressed his cheek against the window. "Abi… are we there yet or what?"

Abi glanced in the mirror. "Let's play a game. It's called *Find Allah's Creation.* Whoever spots it first gets a point. Ready: find… a cow!"

"COW!" yelled Baby Ais, pointing at a rice field. "One point for me!"

"Find… a mountain!"

"There! There! The one with the cloud on top!" shouted Baby Mo.

They found a buffalo wallowing in mud. A river with brown water. Coconut trees standing in line like soldiers. A white heron standing on one leg. Each time, Umi asked, "Who created it?" and they answered together, "Allaaah!"

Baby Ais collected twenty-three points. Baby Mo collected nineteen — then fell asleep in the middle of the word "buffalo", mouth open, a half-eaten cake in his hand.

He slept for a very long time.

When he opened his eyes, the car had stopped. Outside was a green fence he knew, a guava tree, and Nenek waving and waving from the porch.

Baby Mo rubbed his eyes. "Huh? We're here?"

"We're here," said Abi.

Baby Mo jumped for joy. "Abi! The du'a WORKED! The road got really short!"

Baby Ais rolled her eyes. "That's because you were ASLEEP, Mo."

Abi laughed so hard he had to rest his head on the steering wheel. "You're both right," he said. "Allah makes journeys easy in lots of ways. Sometimes with cows and mountains. Sometimes with a really good nap."

> *Allahumma innaa nas'aluka fii safarinaa haadzal-birra wat-taqwaa, wa minal-'amali maa tardhaa. Allahumma hawwin 'alainaa safaranaa haadzaa, wathwi 'annaa bu'dah.* — "O Allah, we ask You on this journey of ours for goodness and piety, and for deeds that please You. O Allah, make this journey easy for us and fold up its distance for us." (Muslim 1342)

Talk it over with your little one: on our next trip, shall we play *Find Allah's Creation*? Who do you think will win? 🚗`,
    },
    anchor: { type: "doa", slug: "doa-bepergian" },
    takeaway: {
      id: "Perjalanan jauh adalah kelas terbuka: doa safar di awal, lalu jendela mobil jadi buku tentang ciptaan Allah.",
      en: "A long journey is an open classroom: the travel du'a at the start, then the car window becomes a book about Allah's creation.",
    },
    tags: ["mudik", "perjalanan", "nenek", "kembar", "buku"],
    readingTimeMin: 5,
  },

  {
    slug: "pasukan-pemungut-sampah",
    kind: "story",
    child: "both",
    pose: "baby-mo-ok.png",
    published: "2026-11-01",
    title: { id: "Pasukan Pemungut Sampah", en: "The Litter-Picking Squad" },
    hook: {
      id: "Seekor burung kecil mematuk bungkus plastik di taman. Baby Mo dan Baby Ais memutuskan sesuatu — dan taman itu tidak pernah sama lagi.",
      en: "A little bird pecks at a plastic wrapper in the park. Baby Mo and Baby Ais decide something — and the park is never the same again.",
    },
    body: {
      id: `Hari Minggu pagi, taman dekat rumah ramai sekali. Ada yang bersepeda, ada yang jogging, ada yang jualan bubur ayam.

Tapi Baby Ais melihat sesuatu yang lain.

Di bawah bangku, ada botol plastik. Di dekat ayunan, bungkus permen. Di pinggir kolam, gelas kopi yang sudah penyok. Dan di rumput, seekor burung pipit kecil sedang mematuk-matuk bungkus plastik, mengira itu makanan.

"Mo," bisik Baby Ais. "Burungnya mau makan plastik."

Baby Mo bertepuk tangan keras-keras. Burung itu terbang. Tapi bungkus plastiknya masih di sana.

Mereka berdua memandanginya. Lalu memandang satu sama lain. Mereka kembar — kadang mereka tidak perlu bicara untuk tahu isi kepala satu sama lain.

"Abi!" seru mereka bersamaan. "Kami mau mungutin sampah!"

Abi mengangkat alis, lalu tersenyum. Ia mengeluarkan kantong belanja kosong dari tas dan dua pasang sarung tangan kebun. "Boleh. Tapi aturannya: pakai sarung tangan, dan jangan pegang yang tajam. Kalau ketemu beling, panggil Abi."

"Siap, Komandan!"

Maka berdirilah Pasukan Pemungut Sampah. Anggotanya dua orang.

Botol plastik — masuk kantong. Bungkus permen — masuk kantong. Sedotan — masuk kantong. Gelas kopi penyok — masuk kantong.

Seorang anak laki-laki yang sedang main bola berhenti dan menonton. "Kalian lagi ngapain?"

"Kami Pasukan Pemungut Sampah," kata Baby Mo dengan bangga. "Biar burungnya nggak makan plastik."

Anak itu berpikir sebentar. Lalu ia memungut tutup botol di dekat kakinya. "Aku boleh ikut?"

Anggotanya jadi tiga orang.

Lalu datang dua anak kakak-beradik. Lalu seorang kakek yang membawa kantong plastiknya sendiri. Lalu ibu penjual bubur, yang menyumbang kantong besar dan berkata, "Nanti selesai, Ibu traktir bubur, ya!"

Anggotanya jadi tujuh orang.

Sambil memungut, Abi bercerita. "Tahu nggak, Rasulullah ﷺ bilang, menyingkirkan sesuatu yang mengganggu dari jalan itu sedekah."

"Sedekah?" Baby Ais heran. "Tapi kita nggak kasih uang."

"Sedekah bukan cuma uang. Membuat jalan bersih supaya orang tidak tersandung, supaya burung tidak sakit — itu juga hadiah. Hadiah untuk semua yang lewat."

Baby Mo memandangi kantong yang sekarang penuh. "Berarti hari ini kita sedekah banyak banget."

Menjelang siang, taman itu tampak berbeda. Rumputnya hijau, tanpa warna-warni plastik. Kolamnya jernih. Dan di rumput, burung pipit kecil tadi kembali — kali ini mematuk biji-bijian sungguhan.

Pasukan Pemungut Sampah duduk berjejer di bangku, makan bubur ayam gratis.

"Minggu depan lagi?" tanya anak laki-laki pemain bola.

"Minggu depan lagi!" jawab tujuh suara sekaligus.

> *"…dan menyingkirkan gangguan dari jalan adalah sedekah."* (HR. Bukhari 2989, Muslim 1009)

Ngobrol bareng si kecil: di sekitar rumah kita, adakah "gangguan" kecil yang bisa kita singkirkan minggu ini? 🌿`,
      en: `On Sunday morning the park near home was packed. People cycling, people jogging, someone selling chicken porridge.

But Baby Ais noticed something else.

Under a bench, a plastic bottle. By the swings, a sweet wrapper. At the edge of the pond, a squashed coffee cup. And on the grass, a little sparrow was pecking and pecking at a plastic wrapper, thinking it was food.

"Mo," whispered Baby Ais. "The bird is trying to eat plastic."

Baby Mo clapped loudly. The bird flew off. But the plastic wrapper was still there.

The two of them stared at it. Then at each other. They were twins — sometimes they didn't need to speak to know what the other was thinking.

"Abi!" they cried together. "We want to pick up the litter!"

Abi raised his eyebrows, then smiled. He took an empty shopping bag from his backpack and two pairs of gardening gloves. "Okay. But the rules are: wear gloves, and don't touch anything sharp. If you find broken glass, call me."

"Yes, Commander!"

And so the Litter-Picking Squad was born. It had two members.

Plastic bottle — into the bag. Sweet wrapper — into the bag. Straw — into the bag. Squashed coffee cup — into the bag.

A boy playing football stopped to watch. "What are you doing?"

"We're the Litter-Picking Squad," said Baby Mo proudly. "So the birds don't eat plastic."

The boy thought for a moment. Then he picked up a bottle cap near his foot. "Can I join?"

Now there were three members.

Then came a brother and sister. Then a grandfather who had brought his own plastic bag. Then the porridge seller, who donated a big bag and said, "When you're done, porridge is on me!"

Now there were seven members.

As they picked, Abi told a story. "Did you know, the Prophet ﷺ said that removing something harmful from the path is charity?"

"Charity?" Baby Ais was puzzled. "But we're not giving money."

"Charity isn't only money. Making the path clean so people don't trip, so birds don't get sick — that's a gift too. A gift for everyone who passes by."

Baby Mo looked at the now-full bag. "So today we gave loads of charity."

By late morning, the park looked different. The grass was green, with no flecks of coloured plastic. The pond was clear. And on the grass, the little sparrow was back — this time pecking at real seeds.

The Litter-Picking Squad sat in a row on the bench, eating free chicken porridge.

"Again next week?" asked the football boy.

"Again next week!" answered seven voices at once.

> *"…and removing something harmful from the path is charity."* (Bukhari 2989, Muslim 1009)

Talk it over with your little one: around our home, is there a small "harm" we could remove this week? 🌿`,
    },
    anchor: { type: "parenting", slug: "adab-sehari-hari" },
    takeaway: {
      id: "Sedekah anak tidak harus uang. Memungut satu bungkus plastik supaya burung tidak sakit — itu juga sedekah, dan sering menular.",
      en: "A child's charity doesn't have to be money. Picking up one wrapper so a bird doesn't get sick is charity too — and it's often contagious.",
    },
    tags: ["kebersihan", "sedekah", "taman", "alam", "buku"],
    readingTimeMin: 5,
  },

  {
    slug: "pelukan-tidak-pernah-habis",
    kind: "story",
    child: "mo",
    pose: "baby-mo-pose-15.png",
    published: "2026-11-02",
    title: { id: "Pelukan Tidak Pernah Habis", en: "Hugs Never Run Out" },
    hook: {
      id: "Sepupu bayi datang menginap, dan Umi menggendongnya sepanjang hari. \"Aku juga bayi!\" teriak Baby Mo. Apakah sayang Umi bisa habis?",
      en: "A baby cousin comes to stay, and Umi holds her all day long. \"I'm a baby too!\" Baby Mo shouts. Can Umi's love run out?",
    },
    body: {
      id: `Hari itu ada tamu kecil di rumah: Dedek Hana, sepupu bayi yang baru berumur tiga bulan. Tante harus pergi ke dokter, jadi Dedek Hana dititipkan seharian.

Dedek Hana kecil sekali. Jari-jarinya sebesar kacang. Kalau menangis, suaranya seperti anak kucing.

Dan Umi menggendongnya. Sepanjang pagi.

Waktu Baby Mo mau menunjukkan menara baloknya, Umi sedang memberi Dedek Hana susu botol. "Sebentar ya, Mo."

Waktu Baby Mo mau dibacakan buku, Umi sedang mengganti popok Dedek Hana. "Sebentar ya, Mo."

Waktu Baby Mo mau dipeluk sebelum tidur siang, Umi sedang menimang Dedek Hana yang rewel. "Sebentar ya, Mo."

Sebentar. Sebentar. Sebentar.

Baby Mo merasa ada yang mengecil di dalam dadanya. Seperti balon yang kempes pelan-pelan.

Lalu ia melakukan sesuatu yang aneh. Ia berbaring di lantai, menendang-nendang kaki ke udara, dan menangis keras-keras: "Oeeek! Oeeek! Aku juga bayi! Gendong aku juga!"

Baby Ais menatapnya bingung. Dedek Hana ikut menangis karena kaget.

Umi tidak marah. Ia membaringkan Dedek Hana di keranjang, lalu duduk di lantai di samping Baby Mo.

"Mo," katanya pelan, "kamu takut sayang Umi habis dibagi ke Dedek Hana, ya?"

Tangis Baby Mo berhenti. Ia mengangguk kecil. Itu persis yang ia rasakan, padahal ia tidak tahu cara mengatakannya.

Umi tersenyum. "Sini. Umi tunjukkan sesuatu."

Umi membuka kedua tangannya lebar-lebar dan memeluk Baby Mo. Lalu ia memanggil, "Ais, sini!" — dan Baby Ais masuk ke pelukan itu juga. Lalu Umi meraih keranjang dan menarik Dedek Hana ke tengah-tengah.

Tiga anak. Satu pelukan. Hangat dan sedikit sesak.

"Lihat," kata Umi. "Tangan Umi cukup. Sayang itu bukan kue yang kalau dibagi jadi kecil. Sayang itu seperti pelukan. Makin banyak yang masuk, makin hangat."

Di tengah pelukan itu, tangan Dedek Hana yang mungil menyentuh jari Baby Mo. Lalu — tiba-tiba — menggenggamnya. Erat sekali, untuk tangan sekecil itu.

Baby Mo membeku. "Umi… dia pegang aku."

"Dia sayang kamu," bisik Umi. "Kamu kakaknya hari ini."

Sore itu, Baby Mo mengambil tugas baru. Ia duduk di samping keranjang dan menyanyikan lagu "Bismillah Dulu" setiap kali Dedek Hana mulai merengek. Kadang berhasil. Kadang tidak. Tapi ia tidak beranjak.

Waktu Tante datang menjemput, Baby Mo berdiri di depan keranjang seperti penjaga. "Tante, Dedek Hana tadi pegang jariku. Kapan dia nginap lagi?"

Malamnya, sebelum tidur, Umi memeluk Baby Mo lama sekali. Tanpa "sebentar". Tanpa "nanti".

"Umi," bisik Baby Mo dengan mata setengah terpejam, "pelukan nggak pernah habis, ya?"

"Nggak pernah, sayang."

> *"Barangsiapa yang tidak menyayangi, maka ia tidak akan disayangi."* Rasulullah ﷺ mengucapkannya saat ada yang heran melihat beliau mencium cucunya. (HR. Bukhari 5997, Muslim 2318)

Ngobrol bareng si kecil: pernah merasa takut sayang Umi atau Abi berkurang? Yuk, coba pelukan sebanyak-banyaknya orang sekarang! 🤗`,
      en: `There was a tiny guest at home that day: baby Hana, a cousin only three months old. Auntie had to go to the doctor, so baby Hana was staying with them all day.

Baby Hana was so small. Her fingers were the size of peanuts. When she cried, she sounded like a kitten.

And Umi held her. All morning.

When Baby Mo wanted to show off his block tower, Umi was giving baby Hana her bottle. "In a minute, Mo."

When Baby Mo wanted a story read to him, Umi was changing baby Hana's nappy. "In a minute, Mo."

When Baby Mo wanted a hug before his nap, Umi was rocking a fussy baby Hana. "In a minute, Mo."

In a minute. In a minute. In a minute.

Baby Mo felt something shrinking in his chest. Like a balloon slowly going flat.

Then he did something strange. He lay on the floor, kicked his legs in the air, and cried as loudly as he could: "Waaah! Waaah! I'm a baby too! Hold me too!"

Baby Ais stared at him, confused. Baby Hana started crying too, from the shock.

Umi didn't get angry. She laid baby Hana in the basket, then sat on the floor beside Baby Mo.

"Mo," she said softly, "are you worried Umi's love will run out because it's being shared with baby Hana?"

Baby Mo stopped crying. He gave a tiny nod. That was exactly how he felt, even though he hadn't known how to say it.

Umi smiled. "Come here. Let me show you something."

Umi opened her arms wide and hugged Baby Mo. Then she called, "Ais, come here!" — and Baby Ais squeezed into the hug too. Then Umi reached for the basket and pulled baby Hana into the middle.

Three children. One hug. Warm and a little squashed.

"Look," said Umi. "Umi's arms are enough. Love isn't a cake that gets smaller when you share it. Love is like a hug. The more people come in, the warmer it gets."

In the middle of that hug, baby Hana's tiny hand touched Baby Mo's finger. Then — suddenly — it grabbed hold. So tight, for such a small hand.

Baby Mo froze. "Umi… she's holding me."

"She loves you," whispered Umi. "You're her big brother today."

That afternoon, Baby Mo took on a new job. He sat beside the basket and sang "Bismillah First" every time baby Hana began to fuss. Sometimes it worked. Sometimes it didn't. But he didn't leave.

When Auntie came to pick her up, Baby Mo stood in front of the basket like a guard. "Auntie, baby Hana held my finger. When can she stay again?"

That night, before bed, Umi hugged Baby Mo for a very long time. No "in a minute". No "later".

"Umi," Baby Mo whispered, his eyes half closed, "hugs never run out, do they?"

"Never, sweetheart."

> *"Whoever does not show mercy will not be shown mercy."* The Prophet ﷺ said it when someone was surprised to see him kiss his grandson. (Bukhari 5997, Muslim 2318)

Talk it over with your little one: have you ever worried that Umi's or Abi's love might get smaller? Let's try a hug with as many people as we can, right now! 🤗`,
    },
    anchor: { type: "hadith", slug: "kasih-sayang-kepada-anak" },
    takeaway: {
      id: "Cemburu anak sering berarti satu pertanyaan: \"Apakah sayangmu masih cukup untukku?\" Jawablah dengan pelukan, bukan teguran.",
      en: "A child's jealousy often means one question: \"Is there still enough love for me?\" Answer it with a hug, not a telling-off.",
    },
    tags: ["cemburu", "sepupu", "bayi", "keluarga", "buku"],
    readingTimeMin: 5,
  },

  ...illustratedStories,
  ...illustratedStories2,
];

export function getAllCatatan(): Catatan[] {
  // newest first
  return [...catatanList].sort((a, b) => b.published.localeCompare(a.published));
}

export function getCatatanBySlug(slug: string): Catatan | undefined {
  return catatanList.find((c) => c.slug === slug);
}

/** Stories/notes whose Islamic anchor points at a given doa/hadith/parenting
 *  entry — used to cross-link content (e.g. "Cerita terkait" on a doa page),
 *  which strengthens internal linking & discovery. Newest first. */
export function getCatatanByAnchor(
  type: "doa" | "hadith" | "parenting",
  slug: string,
): Catatan[] {
  return getAllCatatan().filter(
    (c) => c.anchor.type === type && c.anchor.slug === slug,
  );
}

/** Stories that reference a given surah (via the optional `surahs` field) —
 *  used for "Cerita terkait" on /surat pages. Newest first. */
export function getCatatanBySurah(slug: string): Catatan[] {
  return getAllCatatan().filter((c) => c.surahs?.includes(slug));
}

/** Story that embeds a given YouTube video id (via the `video` field) —
 *  lets the Momen page link a video back to its written story. */
export function getCatatanByVideo(videoId: string): Catatan | undefined {
  return getAllCatatan().find((c) => c.video === videoId);
}
