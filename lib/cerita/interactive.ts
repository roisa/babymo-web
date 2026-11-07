/**
 * Join-the-story extras for some picture books (by page index):
 *  - chants: a short line the child says out loud ("Giliranmu! 🎤")
 *  - choices: "Apa yang harus Mo lakukan?" — tap an answer; the wrong one
 *    gets a gentle, funny reply and another try
 *  - friend: a friend's name in the text that becomes the child's own name
 */
import type { Locale } from "@/lib/i18n/config";

type L = Record<Locale, string>;
export interface Choice {
  q: L;
  options: { label: L; good: boolean; reply: L }[];
}
export interface Interactive {
  chants?: Record<number, L>;
  choices?: Record<number, Choice>;
  friend?: string;
  /** "Versi pendek" for 2–3 year olds: one short line per page [id, en] */
  short?: [string, string][];
  /** "Ngobrol, yuk!" — three questions for after the story */
  talk?: { id: string[]; en: string[] };
}

export const INTERACTIVE: Record<string, Interactive> = {
  "baby-mo-terpisah-di-supermarket": {
    chants: { 1: { id: "Berhenti! Penolong aman! Nomor Abi!", en: "Stop! Safe helper! Abi's number!" }, 15: { id: "Berhenti! Penolong aman! Nomor Abi!", en: "Stop! Safe helper! Abi's number!" } },
    choices: {
      6: {
        q: { id: "Apa yang harus Mo lakukan?", en: "What should Mo do?" },
        options: [
          { label: { id: "Lari mencari Abi ke mana-mana", en: "Run around looking for Abi" }, good: false, reply: { id: "Ups! Kalau Mo berlari, Abi jadi makin sulit menemukannya. Coba lagi!", en: "Oops! If Mo runs around, Abi will find it harder to find him. Try again!" } },
          { label: { id: "Berhenti dan tarik napas", en: "Stop and take a breath" }, good: true, reply: { id: "Betul! Langkah pertama: BERHENTI.", en: "Yes! Step one: STOP." } },
        ],
      },
      8: {
        q: { id: "Siapa penolong yang aman?", en: "Who is a safe helper?" },
        options: [
          { label: { id: "Kakak kasir berseragam", en: "The cashier in uniform" }, good: true, reply: { id: "Hebat! Petugas berseragam adalah penolong yang aman.", en: "Great! Staff in uniform are safe helpers." } },
          { label: { id: "Om asing yang mengajak keluar", en: "A stranger who says 'come outside'" }, good: false, reply: { id: "Hmm, orang asing yang mengajak pergi bukan penolong aman. Coba lagi!", en: "Hmm, a stranger who wants to take you away isn't a safe helper. Try again!" } },
        ],
      },
    },
  },
  "lebah-kecil-dan-madu": {
    chants: { 15: { id: "Diam seperti patung!", en: "Freeze like a statue!" } },
    choices: {
      0: {
        q: { id: "Apa yang sebaiknya Mo lakukan?", en: "What should Mo do?" },
        options: [
          { label: { id: "Kibas-kibaskan tangan", en: "Flap his hands" }, good: false, reply: { id: "Bzzz! Lebahnya malah kaget dan merasa terancam. Coba lagi!", en: "Bzzz! That startles the bee and makes it feel threatened. Try again!" } },
          { label: { id: "Diam seperti patung", en: "Freeze like a statue" }, good: true, reply: { id: "Betul! Diam seperti patung, lalu menjauh pelan-pelan.", en: "Yes! Freeze like a statue, then move away slowly." } },
        ],
      },
    },
  },
  "saat-bumi-bergoyang": {
    chants: { 2: { id: "Merunduk, berlindung, berpegangan!", en: "Drop, cover, hold on!" }, 15: { id: "Merunduk, berlindung, berpegangan!", en: "Drop, cover, hold on!" } },
    choices: {
      1: {
        q: { id: "Lantai bergoyang! Apa yang harus dilakukan?", en: "The floor is shaking! What should we do?" },
        options: [
          { label: { id: "Lari keluar rumah sekarang", en: "Run outside right now" }, good: false, reply: { id: "Waduh, berlari saat lantai bergoyang bisa membuat jatuh. Coba lagi!", en: "Uh-oh, running while the floor shakes can make you fall. Try again!" } },
          { label: { id: "Merunduk di bawah meja yang kokoh", en: "Get under a sturdy table" }, good: true, reply: { id: "Tepat! Merunduk, berlindung, berpegangan!", en: "Exactly! Drop, cover, hold on!" } },
        ],
      },
    },
  },
  "kepiting-yang-berjalan-miring": {
    chants: { 13: { id: "Semua beda, semua keren!", en: "Everyone's different, everyone's cool!" } },
    choices: {
      3: {
        q: { id: "Kepitingnya bersembunyi. Apa yang sebaiknya Mo lakukan?", en: "The crab is hiding. What should Mo do?" },
        options: [
          { label: { id: "Terus menertawakannya", en: "Keep laughing at it" }, good: false, reply: { id: "Kasihan… kepitingnya jadi makin takut. Coba lagi!", en: "Poor thing… the crab gets even more scared. Try again!" } },
          { label: { id: "Berhenti mengejek", en: "Stop teasing" }, good: true, reply: { id: "Betul! Mengejek membuat hati sedih.", en: "Yes! Teasing makes hearts sad." } },
        ],
      },
    },
  },
  "gurita-kecil-yang-pemalu": { chants: { 12: { id: "TIGA!", en: "THREE!" } }, friend: "Nala" },
  "tukik-pulang-ke-laut": { chants: { 5: { id: "Ayo, tukik! Kamu bisa!", en: "Go, little turtles! You can do it!" } } },
  "saat-lampu-padam-bintang-menyala": { chants: { 4: { id: "MASYA ALLAH!", en: "MASYA ALLAH!" } } },
  "jingga-ikan-badut-mencari-rumah": { chants: { 8: { id: "Masuklah, Jingga!", en: "Come in, Jingga!" } } },
  "lagu-paus-untuk-bayinya": { chants: { 5: { id: "Ibu di sini.", en: "I'm here." } } },
  "tablet-juga-perlu-tidur": { chants: { 5: { id: "Selamat tidur, tablet!", en: "Good night, tablet!" } } },
};

const EXTRA: Record<string, Interactive> = {
  "gurita-kecil-yang-pemalu": {
    talk: { id: ["Kapan kamu pernah merasa malu?", "Apa yang membuat gurita akhirnya berani keluar?", "Siapa teman baru yang ingin kamu sapa?"], en: ["When have you felt shy?", "What helped the octopus feel brave enough to come out?", "Which new friend would you like to say hello to?"] },
    short: [
      ["Mo malu. Mo sembunyi di belakang Umi.", "Mo feels shy. He hides behind Umi."],
      ["Ada mata mengintip dari balik batu!", "Eyes are peeking from behind a rock!"],
      ["Itu gurita! Warnanya berubah-ubah.", "It's an octopus! It changes colour."],
      ["Gurita punya berapa lengan? Mo diam saja.", "How many arms does an octopus have? Mo stays quiet."],
      ["\"Tidak apa-apa malu,\" kata Umi.", "\"It's okay to feel shy,\" says Umi."],
      ["Gurita punya tiga jantung!", "An octopus has three hearts!"],
      ["Mo menunggu. Sabar… sabar…", "Mo waits. Patient… patient…"],
      ["Gurita keluar! Satu, dua… delapan lengan!", "Out comes the octopus! One, two… eight arms!"],
      ["Gurita melambai: \"Hai, Mo!\"", "The octopus waves: \"Hi, Mo!\""],
      ["Hati Mo hangat.", "Mo's heart feels warm."],
      ["Mo berdoa: \"Rabbisyrah lii shadrii.\"", "Mo prays: \"Rabbisyrah lii shadrii.\""],
      ["Mo mengangkat tangan.", "Mo raises his hand."],
      ["\"TIGA!\" Hore!", "\"THREE!\" Hooray!"],
      ["\"Aku Nala.\" \"Aku Mo.\"", "\"I'm Nala.\" \"I'm Mo.\""],
      ["Mo menggambar gurita.", "Mo draws an octopus."],
      ["Kamu juga boleh malu. Pelan-pelan saja! 🐙", "You can feel shy too. Take it slowly! 🐙"],
    ],
  },
  "tukik-pulang-ke-laut": {
    talk: { id: ["Kenapa tukik tidak boleh digendong?", "Kenapa plastik berbahaya untuk penyu?", "Apa yang bisa kita lakukan supaya laut tetap bersih?"], en: ["Why shouldn't we pick up the baby turtles?", "Why is plastic dangerous for turtles?", "What can we do to keep the sea clean?"] },
    short: [
      ["Ayo ke pantai!", "Let's go to the beach!"],
      ["Ibu penyu bertelur, lalu pulang ke laut.", "Mother turtle lays eggs, then goes back to the sea."],
      ["Krek, krek! Tukik keluar!", "Crack, crack! Baby turtles!"],
      ["Tukik mencari cahaya bulan.", "Baby turtles look for the moonlight."],
      ["\"Biarkan mereka jalan sendiri,\" kata Abi.", "\"Let them walk by themselves,\" says Abi."],
      ["Tukik jalan ke laut. Ayo, tukik!", "The baby turtles walk to the sea. Go, turtles!"],
      ["Oh tidak! Ada sampah.", "Oh no! There's litter."],
      ["Kak Adam memungut sampahnya.", "Kak Adam picks up the litter."],
      ["Plastik mirip ubur-ubur.", "Plastic looks like a jellyfish."],
      ["Mo memegang tangan Abi.", "Mo holds Abi's hand."],
      ["Ayo jaga laut!", "Let's look after the sea!"],
      ["Mereka memungut sampah.", "They pick up litter."],
      ["Setiap tukik berharga.", "Every baby turtle matters."],
      ["\"Mo bawa botol sendiri!\"", "\"I'll bring my own bottle!\""],
      ["Tukik tumbuh jadi penyu besar.", "The baby turtle grows into a big turtle."],
      ["Sampah apa yang bisa kamu pungut? 🐢", "What litter can you pick up? 🐢"],
    ],
  },
  "jingga-ikan-badut-mencari-rumah": {
    talk: { id: ["Kenapa anemon mau menerima Jingga?", "Barang apa yang paling susah kamu bagi?", "Bagaimana rasanya saat Mo dan Ais berbagi selimut?"], en: ["Why did the anemone let Jingga in?", "What's the hardest thing for you to share?", "How do you think Mo and Ais felt sharing the blanket?"] },
  },
  "lagu-paus-untuk-bayinya": {
    talk: { id: ["Apa yang kamu lakukan kalau takut petir?", "Bagaimana ibu paus menjaga bayinya?", "Lagu apa yang ingin kamu nyanyikan untuk Umi atau Abi?"], en: ["What do you do when thunder scares you?", "How did the mother whale look after her baby?", "Which song would you like to sing for Umi or Abi?"] },
    short: [
      ["DUAR! Petir! Mo takut.", "BOOM! Thunder! Mo is scared."],
      ["Umi memeluk Mo.", "Umi hugs Mo."],
      ["Ada ibu paus dan bayinya.", "Here's a mother whale and her baby."],
      ["Mereka berenang jauh sekali.", "They swim far, far away."],
      ["Badai datang. Bayi paus takut.", "A storm comes. The baby whale is scared."],
      ["Ibu paus mendekat. \"Ibu di sini.\"", "Mother whale comes close. \"I'm here.\""],
      ["Ibu paus bernyanyi pelan sekali.", "Mother whale sings very softly."],
      ["Umi juga bernyanyi untuk Mo.", "Umi sings to Mo too."],
      ["Bayi paus naik ke atas untuk bernapas.", "The baby whale goes up to breathe."],
      ["Ibu paus terus menjaga bayinya.", "Mother whale keeps looking after her baby."],
      ["\"Ibu paus sayang sekali.\"", "\"Mother whale loves him so much.\""],
      ["Umi mencium Mo.", "Umi kisses Mo."],
      ["Laut hangat. Paus senang.", "Warm sea. Happy whales."],
      ["Hujan berhenti. Mo mengantuk.", "The rain stops. Mo is sleepy."],
      ["\"Nanti Mo bernyanyi untuk Umi.\"", "\"One day I'll sing for you, Umi.\""],
      ["Lagu apa yang kamu suka? 🐋", "Which song do you like? 🐋"],
    ],
  },
  "kepiting-yang-berjalan-miring": {
    talk: { id: ["Kenapa kepiting berjalan miring?", "Bagaimana perasaan Mo saat ditertawakan?", "Apa yang berbeda dari temanmu, yang membuatnya keren?"], en: ["Why do crabs walk sideways?", "How did Mo feel when he was laughed at?", "What's different about a friend of yours that makes them cool?"] },
    short: [
      ["Kres-kres! Kepiting berjalan miring.", "Scuttle-scuttle! A crab walks sideways."],
      ["Mo tertawa: \"Kepiting aneh!\"", "Mo laughs: \"Silly crab!\""],
      ["Ais ikut tertawa.", "Ais laughs too."],
      ["Kepiting sembunyi di lubang.", "The crab hides in a hole."],
      ["\"Kakinya memang begitu,\" kata Kak Adam.", "\"That's how its legs work,\" says Kak Adam."],
      ["Kepiting itu hebat!", "The crab is amazing!"],
      ["Sandal Mo kebesaran. Plok-plek!", "Mo's sandals are too big. Flip-flop!"],
      ["Anak-anak menertawakan Mo.", "Some children laugh at Mo."],
      ["Mo sedih.", "Mo feels sad."],
      ["\"Ditertawakan itu tidak enak.\"", "\"Being laughed at feels bad.\""],
      ["Umi duduk di samping Mo.", "Umi sits beside Mo."],
      ["\"Maaf ya, kepiting.\"", "\"Sorry, crab.\""],
      ["Kepiting keluar dan melambai.", "The crab comes out and waves."],
      ["Semua beda, semua keren!", "Everyone's different, everyone's cool!"],
      ["Istana pasir untuk kepiting!", "A sandcastle for the crab!"],
      ["Apa kata-kata baik untuk temanmu? 🦀", "What kind words can you say to a friend? 🦀"],
    ],
  },
  "orangutan-dan-pohon-untuk-anaknya": {
    talk: { id: ["Berapa lama bayi orangutan tinggal bersama ibunya?", "Kenapa pohon penting untuk hewan?", "Pohon apa yang ingin kamu tanam dan rawat?"], en: ["How long do baby orangutans stay with their mothers?", "Why are trees important for animals?", "What tree would you like to plant and look after?"] },
  },
  "saat-bumi-bergoyang": {
    talk: { id: ["Apa tiga langkah saat gempa?", "Di mana tempat paling aman di rumah kita saat gempa?", "Apa saja isi tas siaga kita?"], en: ["What are the three steps in an earthquake?", "Where is the safest spot in our home during an earthquake?", "What's in our go-bag?"] },
  },
  "kursi-kakek": {
    talk: { id: ["Apa kenangan favoritmu bersama Kakek atau Nenek?", "Kenapa Abi boleh menangis?", "Doa apa yang bisa kita kirim untuk orang yang sudah meninggal?"], en: ["What's your favourite memory with Kakek or Nenek?", "Why is it okay for Abi to cry?", "What du'a can we send to someone who has passed away?"] },
  },
  "saat-lampu-padam-bintang-menyala": {
    talk: { id: ["Kenapa bintang tidak terlihat saat lampu kota menyala?", "Apa yang membuat gelap jadi tidak seram?", "Berapa bintang yang bisa kamu hitung malam ini?"], en: ["Why can't we see the stars when the city lights are on?", "What made the dark less scary?", "How many stars can you count tonight?"] },
  },
  "lebah-kecil-dan-madu": {
    talk: { id: ["Apa yang harus kita lakukan kalau ada lebah?", "Bagaimana lebah memberi tahu temannya di mana bunga berada?", "Buah apa saja yang ada karena bantuan lebah?"], en: ["What should we do when a bee comes close?", "How do bees tell their friends where the flowers are?", "Which fruits do we have thanks to bees?"] },
    short: [
      ["Bzzz! Ada lebah! Mo takut.", "Bzzz! A bee! Mo is scared."],
      ["\"Diam seperti patung,\" kata Umi.", "\"Freeze like a statue,\" says Umi."],
      ["Mo diam. Lebah terbang pergi. Fiuh!", "Mo freezes. The bee flies away. Phew!"],
      ["Ayo lihat rumah lebah!", "Let's see a bee house!"],
      ["Banyak sekali lebah! Bzzz-bzzz!", "So many bees! Bzzz-bzzz!"],
      ["Rumah lebah bentuknya segi enam.", "Bee homes have six sides."],
      ["Lebah menari!", "Bees dance!"],
      ["Lebah membantu bunga jadi buah.", "Bees help flowers turn into fruit."],
      ["Lebah bekerja sama membuat madu.", "Bees work together to make honey."],
      ["Ada surat An-Nahl, artinya lebah!", "There's a surah called An-Nahl — the Bee!"],
      ["\"Wah, lebah istimewa!\"", "\"Wow, bees are special!\""],
      ["Madu manis sekali. Alhamdulillah!", "Honey is so sweet. Alhamdulillah!"],
      ["\"Maaf ya, lebah.\"", "\"Sorry, little bee.\""],
      ["Mo dan Ais menanam bunga.", "Mo and Ais plant flowers."],
      ["Lebah datang. Mo tersenyum.", "A bee comes. Mo smiles."],
      ["Ada lebah? Diam seperti patung! 🐝", "A bee? Freeze like a statue! 🐝"],
    ],
  },
};
for (const [k, v] of Object.entries(EXTRA)) INTERACTIVE[k] = { ...INTERACTIVE[k], ...v };

export const NAME_KEY = "bm-child-name";
