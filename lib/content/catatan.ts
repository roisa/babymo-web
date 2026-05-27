import type { Catatan } from "./types";

/**
 * First-person notebook entries by Salman Alfa (founder).
 *
 * Editorial guardrails for every catatan:
 *   - First names of kids only (Ibra, Azka). Never surname. Never wife's name.
 *   - No identifying details (school, neighborhood, masjid, street).
 *   - No photos that show faces.
 *   - One Islamic anchor per note (doa / hadith / parenting), not three.
 *   - Closing "Catatan untuk diri sendiri" is the WhatsApp-forwardable line.
 *
 * URL slugs describe the MOMENT, not the kid — keeps Google's per-kid
 * archive minimal.
 */
export const catatanList: Catatan[] = [
  {
    slug: "bisikan-jam-tiga-pagi",
    child: "azka",
    published: "2026-05-26",
    title: {
      id: "Bisikan jam tiga pagi",
      en: "Whispers at three in the morning",
    },
    hook: {
      id: "Azka (2) bangun nangis dan belum bisa cerita kenapa. Saya jadi suara yang tenang.",
      en: "Azka (2) wakes crying and can't say why. I become a quiet voice.",
    },
    body: {
      id: `Tadi malam Azka bangun jam tiga, nangis. Belum bisa ngomong banyak, jadi belum bisa cerita kenapa.

Refleks pertama saya: "Yuk, baca doa sebelum tidur." Lalu sadar — Azka belum bisa ucap apa pun selain "mama", "yah", dan "ehmm" yang artinya minta gendong.

Saya pun gendong, jalan-jalan kecil di kamar. Sambil bisikkan di telinganya:

> *Bismika Allahumma ahyaa wa amuut.*

Pelan. Berulang. Bukan supaya dia hafal. Supaya dia kenal suara itu.

Beberapa minggu terakhir saya banyak baca soal anak usia 0–3 tahun. Salah satu yang stuck di kepala: anak menyerap doa jauh sebelum mereka bisa mengulanginya. Telinga mereka sudah mendengar Al-Fatihah dari dalam kandungan. Bahasa pertama yang mereka kenal dari kita bukan kata — tapi nada. Tenang atau panik. Lembut atau buru-buru.

Jadi malam itu saya tidak mengajarkan apa-apa. Saya cuma jadi suara yang tenang. Yang baca doa pelan-pelan sampai dia tertidur lagi di bahu saya.

Untuk istri saya yang tidur tepat di sebelah dan tidak terbangun: alhamdulillah. Untuk Azka: kalau besok dia bangun lagi jam tiga, saya akan kembali bisikkan kalimat yang sama. Bukan untuk mengajarinya. Untuk mengenalkan.

Ibra dulu juga begini. Sekarang enam tahun, dia yang justru kadang ingatkan saya: "Ayah belum baca doa." Anak-anak menyerap apa yang sering mereka dengar — bahkan ketika kita pikir mereka belum mengerti.`,
      en: `Last night Azka woke up at three, crying. He can't say much yet, so he couldn't tell me why.

My first reflex: "Let's read the bedtime du'a." Then I caught myself — Azka can't say much beyond "mama", "yah", and an "ehmm" that means "carry me".

So I carried him, walking slowly around the room. Whispering into his ear:

> *Bismika Allahumma ahyaa wa amuut.*

Slowly. On repeat. Not so he'd memorize it. So he'd recognize the sound.

I've been reading about kids aged 0–3 lately. One thing that stuck: children absorb du'as long before they can repeat them. Their ears have been hearing Al-Fatihah from inside the womb. The first language they learn from us isn't words — it's tone. Calm or panicked. Gentle or rushed.

So that night I taught him nothing. I was just a quiet voice. Reading the du'a slowly until he fell asleep again on my shoulder.

To my wife, sleeping right next to us and not waking up: alhamdulillah. To Azka: if you wake up again at three tomorrow, I'll whisper the same words. Not to teach you. To introduce them.

Ibra used to be like this too. Now six years old, he's the one who sometimes reminds me: "Ayah, you haven't read the du'a." Children absorb what they hear often — even when we think they don't yet understand.`,
    },
    anchor: { type: "doa", slug: "sebelum-tidur" },
    takeaway: {
      id: "Doa sebelum tidur bukan untuk dihafal. Untuk dijadikan suara latar belakang rumah ini.",
      en: "Bedtime du'a isn't for memorizing. It's for being the background sound of this home.",
    },
    tags: ["malam", "bayi", "doa-tidur"],
    readingTimeMin: 2,
  },

  {
    slug: "disindir-anak-saat-makan",
    child: "ibra",
    published: "2026-05-21",
    title: {
      id: "Disindir Ibra waktu lagi laper",
      en: "Called out by Ibra over breakfast",
    },
    hook: {
      id: "Saya yang ngajarin Ibra (6) Bismillah sebelum makan. Pagi itu dia yang ingatkan saya.",
      en: "I'm the one who taught Ibra (6) to say Bismillah before eating. That morning, he reminded me.",
    },
    body: {
      id: `Pagi tadi lagi buru-buru. Ibra (6) sudah duduk, piring nasi goreng di depannya, sendok di tangan. Saya juga — nyamper kursi sambil cek HP, langsung suap.

Ibra menatap saya. Saya kenal tatapan itu.

"Ayah belum baca Bismillah."

Diam sebentar. Sendok masih di mulut. Saya tarik balik, telan dulu, lalu — malu sendiri: "Astaghfirullah. Bismillah."

Dia ngangguk. Mulai makan.

Saya yang mengajarkannya membaca Bismillah sebelum makan, setiap hari, sejak dia bisa pegang sendok sendiri. Sekarang dia yang mengingatkan saya. Pelan, tanpa marah, tanpa nge-*judge* — cuma menunjuk fakta.

Ada hadits yang sering dikutip di group-group WhatsApp:

> *"Jika salah seorang dari kalian makan, hendaklah dia menyebut nama Allah. Jika dia lupa di awal, hendaklah dia ucapkan: Bismillaahi fii awwalihi wa aakhirihi."*
> — HR. Abu Dawud, Tirmidzi

Pintu cadangan, kalau lupa. Tapi pelajaran lain pagi itu: ngajarin anak adab itu tidak lewat ceramah. Lewat melakukan — bahkan ketika kita capek, ketika kita buru-buru, ketika kita berpikir "ah, sekali doang lupa nggak apa-apa."

Karena anak-anak nggak ngajarin diri mereka dari kata-kata kita. Dari kebiasaan kita.`,
      en: `Rushing this morning. Ibra (6) already sat down, fried rice in front of him, spoon in hand. So did I — slid into my chair while checking my phone, took a bite right away.

Ibra looked at me. I know that look.

"Ayah, you haven't said Bismillah."

Pause. Spoon still in my mouth. I pulled it back, swallowed, then — embarrassed at myself: "Astaghfirullah. Bismillah."

He nodded. Started eating.

I'm the one who taught him to say Bismillah before eating, every day, since he could hold a spoon. Now he's the one reminding me. Quietly. No anger. No judgment. Just pointing at the fact.

There's a hadith often quoted in WhatsApp groups:

> *"When one of you eats, let him mention the name of Allah. If he forgets at the start, let him say: Bismillaahi fii awwalihi wa aakhirihi."*
> — Abu Dawud, Tirmidhi

A back door, if we forget. But the other lesson that morning: teaching kids adab doesn't happen through lectures. It happens through doing it — even when we're tired, even when we're rushing, even when we think "it's fine to forget just this once."

Because kids don't teach themselves from our words. From our habits.`,
    },
    anchor: { type: "doa", slug: "sebelum-makan" },
    takeaway: {
      id: "Kalau Ibra di rumah, taro HP dulu sebelum makan. Bukan demi adab makan. Demi tidak lagi dapat sindiran 6 tahun yang menohok.",
      en: "When Ibra's home, put the phone down before eating. Not for the sake of table adab. To avoid getting a piercing reminder from a six-year-old.",
    },
    tags: ["adab", "makan", "anak-besar"],
    readingTimeMin: 2,
  },

  {
    slug: "ibra-ngajarin-azka-bismillah",
    child: "both",
    published: "2026-05-18",
    title: {
      id: "Kakaknya yang mengajar, bukan ayahnya",
      en: "His brother did the teaching, not his father",
    },
    hook: {
      id: "Azka (2) hampir ngerebut biskuit. Sebelum saya menengahi, Ibra (6) yang menahan tangannya.",
      en: "Azka (2) almost grabbed the biscuit. Before I could step in, Ibra (6) held his hand back.",
    },
    body: {
      id: `Sore kemarin di ruang makan. Azka (2) baru selesai mandi, lapar, ngerebut biskuit dari piring kakaknya. Saya bersiap-siap menengahi.

Tapi sebelum saya buka mulut, Ibra (6) menahan tangan Azka — bukan marah, lembut — dan bilang:

"Adek, baca Bismillah dulu."

Azka belum bisa ngomong utuh. Yang keluar cuma "BimimiLA". Ibra senyum, ngangguk, lepas tangannya. Azka langsung gigit biskuitnya.

Saya berdiri di pintu, nggak jadi masuk.

Dua hal yang nyangkut di kepala saya semalam.

**Pertama:** Saya nggak pernah bilang ke Ibra "tolong ajarin adek baca Bismillah." Itu inisiatifnya sendiri. Yang artinya dia sudah meng-*internalize* bahwa adab ini bukan aturan dari ayah — ini hal yang seharusnya dia lakukan, dan juga adiknya. Beda level.

**Kedua:** Azka belajar bukan dari saya, hari itu. Dari kakaknya. Kakak yang umurnya cuma 4 tahun di atas dia. Yang otoritasnya, bagi seorang 2-tahun, mungkin lebih nyata daripada otoritas orang tua. Anak-anak meniru anak-anak.

Ada hadits Nabi ﷺ:

> *"Bukan termasuk golongan kami orang yang tidak menyayangi yang lebih muda dan tidak menghormati yang lebih tua."*
> — HR. Tirmidzi

Saya pikir "menyayangi yang lebih muda" untuk anak laki-laki 6 tahun bentuknya bukan pelukan. Bentuknya: ngajarin pelan-pelan apa yang dia tahu, tanpa pamer, tanpa diminta.

*(Dan menjaga stok biskuit, supaya nggak ada perebutan asli berikutnya.)*`,
      en: `Yesterday evening in the dining room. Azka (2), fresh out of his bath, hungry, was about to snatch a biscuit from his brother's plate. I braced to mediate.

But before I could open my mouth, Ibra (6) held Azka's hand back — not angry, gentle — and said:

"Adek, say Bismillah first."

Azka can't form full words yet. What came out was "BimimiLA". Ibra smiled, nodded, let go of his hand. Azka immediately bit the biscuit.

I stood at the doorway, decided not to enter.

Two things stuck in my head last night.

**First:** I never told Ibra "please teach your brother to say Bismillah." That was his own initiative. Which means he's already internalized that this adab isn't a rule from dad — it's something he should do, and his little brother too. Different level.

**Second:** Azka didn't learn from me, that day. From his brother. A brother who's only 4 years older than him. Whose authority, to a 2-year-old, might be more real than a parent's. Children imitate children.

There's a hadith of the Prophet ﷺ:

> *"He is not one of us who does not show mercy to our young ones and respect our elders."*
> — Tirmidhi

I think "showing mercy to the young" for a 6-year-old boy isn't a hug. It looks like this: quietly teaching what you know, without showing off, without being asked.

*(And keeping the biscuit supply stocked, so no real fight happens next time.)*`,
    },
    anchor: { type: "hadith", slug: "kasih-sayang-kepada-anak" },
    takeaway: {
      id: "Kurangi micro-managing momen di antara mereka. Mereka punya cara sendiri jadi guru satu sama lain. Tugas saya memastikan rumah ini cukup tenang sehingga momen seperti itu punya ruang untuk muncul.",
      en: "Stop micro-managing the moments between them. They have their own way of becoming each other's teachers. My job is to keep this home calm enough that moments like that have room to appear.",
    },
    tags: ["kakak-adik", "adab", "makan"],
    readingTimeMin: 3,
  },
];

export function getAllCatatan(): Catatan[] {
  // newest first
  return [...catatanList].sort((a, b) => b.published.localeCompare(a.published));
}

export function getCatatanBySlug(slug: string): Catatan | undefined {
  return catatanList.find((c) => c.slug === slug);
}
