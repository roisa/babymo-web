import type { Catatan } from "./types";

/**
 * Illustrated picture-book stories (November 2026). Each one has a set of
 * animated scenes in lib/cerita/illus.ts, matched to paragraphs — so the
 * Indonesian and English bodies keep the SAME paragraph count and order.
 *
 * Standard: the child solves the problem, a read-aloud refrain, one
 * Islamic anchor quoted exactly with its source, and a closing question
 * for parent and child.
 */
export const illustratedStories: Catatan[] = [
  /* 1 ───────────────────────────────────────────── */
  {
    slug: "monster-gigi-takut-sikat",
    kind: "story",
    child: "mo",
    pose: "baby-mo-ok.png",
    published: "2026-11-03",
    title: { id: "Monster Gigi Takut Sikat", en: "The Tooth Monsters Who Fear the Brush" },
    hook: {
      id: "Baby Mo tidak mau sikat gigi malam ini. Tapi Abi bilang ada monster kecil yang sedang berpesta di mulutnya…",
      en: "Baby Mo doesn't want to brush his teeth tonight. But Abi says tiny monsters are having a party in his mouth…",
    },
    body: {
      id: `Malam itu Baby Mo sudah pakai piyama bergambar bintang. Ia sudah minum susu. Ia sudah memeluk boneka beruangnya.

"Ayo sikat gigi dulu, Mo," panggil Abi dari kamar mandi.

"Nggak mau!" Baby Mo menyembunyikan mulutnya di balik bantal. "Sikat giginya geli. Odolnya pedas."

Abi datang dan duduk di tepi kasur. "Hmm. Kalau begitu, para monster gigi pasti senang sekali malam ini."

Baby Mo mengintip dari balik bantal. "Monster… gigi?"

"Monster kecil sekali," bisik Abi. "Lebih kecil dari semut. Mereka suka sisa biskuit dan susu yang menempel di gigi. Kalau kita tidak sikat gigi, mereka berpesta sampai pagi."

Baby Mo membayangkan monster-monster mungil menari di atas giginya, sambil membawa remah biskuit seperti membawa bantal.

"Apa mereka bawa terompet?" tanyanya.

"Mungkin," kata Abi serius. "Dan balon."

Baby Mo langsung turun dari kasur. "Aku mau usir mereka!"

Di kamar mandi, Abi memberi sikat gigi biru dengan odol sebesar kacang polong. Baby Mo berdiri di bangku kecil dan menatap cermin.

"Monster, siap-siap ya," katanya pada bayangannya sendiri.

Lalu ia mulai menyikat. Atas, bawah. Depan, belakang. Abi mengajarinya sebuah lagu:

"Sikat kiri, sikat kanan, monster gigi lari ketakutan! Sikat atas, sikat bawah, gigi bersih, hati pun cerah!"

Busa putih memenuhi mulut Baby Mo. Gelembung-gelembung kecil terbang ke udara. Baby Mo tertawa sampai busanya hampir tumpah.

"Sikat kiri, sikat kanan, monster gigi lari ketakutan!" nyanyi Baby Mo lagi, lebih keras.

Setelah berkumur, Abi menyalakan senter kecil dan memeriksa mulut Baby Mo. "Coba lihat… kiri bersih. Kanan bersih. Belakang… hmm, ada satu monster bersembunyi!"

Baby Mo cepat-cepat menyikat sekali lagi di bagian belakang. "Sudah, Abi?"

"Sudah. Semua monster sudah kabur."

Baby Mo tersenyum lebar di depan cermin. Giginya berkilau. "Abi, Nabi juga sikat gigi?"

"Nabi Muhammad ﷺ sangat suka bersiwak — itu sikat gigi zaman dulu, dari ranting kayu. Beliau sampai bilang begini," kata Abi.

> *"Seandainya tidak memberatkan umatku, niscaya aku perintahkan mereka untuk bersiwak setiap kali hendak sholat."* (HR. Bukhari 887, Muslim 252)

"Wah, berarti sikat gigi itu disukai Nabi," kata Baby Mo bangga.

Malam itu Baby Mo tidur dengan mulut segar. Dan sebelum matanya terpejam, ia berbisik pada boneka beruangnya, "Besok pagi kita usir monster lagi, ya."

Ngobrol bareng si kecil: lagu apa yang paling seru untuk menemani sikat gigi? Yuk, bikin lagu sikat gigi versimu sendiri! 🪥`,
      en: `That night Baby Mo was already wearing his star pyjamas. He'd had his milk. He was hugging his teddy bear.

"Time to brush your teeth, Mo," Abi called from the bathroom.

"No!" Baby Mo hid his mouth behind his pillow. "The toothbrush tickles. The toothpaste is spicy."

Abi came and sat on the edge of the bed. "Hmm. Then the tooth monsters must be very happy tonight."

Baby Mo peeked out from behind the pillow. "Tooth… monsters?"

"Very tiny monsters," Abi whispered. "Smaller than ants. They love the bits of biscuit and milk stuck on your teeth. If we don't brush, they party until morning."

Baby Mo imagined tiny monsters dancing on his teeth, carrying biscuit crumbs like pillows.

"Do they have trumpets?" he asked.

"Maybe," said Abi seriously. "And balloons."

Baby Mo jumped straight off the bed. "I'm going to chase them away!"

In the bathroom, Abi gave him a blue toothbrush with a pea-sized dot of toothpaste. Baby Mo stood on his little stool and looked in the mirror.

"Get ready, monsters," he told his reflection.

Then he started brushing. Top, bottom. Front, back. Abi taught him a song:

"Brush the left and brush the right, tooth monsters run away in fright! Brush up high and brush down low, clean teeth make my whole heart glow!"

White foam filled Baby Mo's mouth. Tiny bubbles floated into the air. Baby Mo laughed so hard the foam nearly spilled.

"Brush the left and brush the right, tooth monsters run away in fright!" Baby Mo sang again, even louder.

After he rinsed, Abi switched on a little torch and checked Baby Mo's mouth. "Let's see… left side clean. Right side clean. At the back… hmm, one monster is hiding!"

Baby Mo quickly brushed the back once more. "Done, Abi?"

"Done. Every monster has run away."

Baby Mo grinned wide at the mirror. His teeth sparkled. "Abi, did the Prophet brush his teeth too?"

"The Prophet Muhammad ﷺ loved using the siwak — a toothbrush from long ago, made from a twig. He even said this," said Abi.

> *"Were it not that it would be hard on my ummah, I would have commanded them to use the siwak before every prayer."* (Bukhari 887, Muslim 252)

"Wow, so brushing teeth is something the Prophet loved," said Baby Mo proudly.

That night Baby Mo fell asleep with a fresh mouth. And just before his eyes closed, he whispered to his teddy bear, "Tomorrow morning we chase the monsters again, okay?"

Talk it over with your little one: which song makes brushing the most fun? Let's make up your very own toothbrushing song! 🪥`,
    },
    anchor: { type: "parenting", slug: "adab-sehari-hari" },
    takeaway: {
      id: "Rutinitas yang dilawan anak sering hanya butuh cerita dan lagu. Ubah perintah menjadi petualangan kecil.",
      en: "The routines children resist often just need a story and a song. Turn the instruction into a small adventure.",
    },
    tags: ["sikat gigi", "kebersihan", "malam", "sunnah", "rutinitas"],
    readingTimeMin: 4,
  },

  /* 2 ───────────────────────────────────────────── */
  {
    slug: "senyum-untuk-bu-sayur",
    kind: "story",
    child: "ais",
    pose: "baby-mo-alright.png",
    published: "2026-11-03",
    title: { id: "Senyum untuk Bu Sayur", en: "A Smile for the Vegetable Lady" },
    hook: {
      id: "Di pasar, ibu penjual sayur tampak cemberut dan lelah. Baby Ais tidak punya uang untuk diberikan. Tapi ia punya sesuatu yang lain…",
      en: "At the market, the vegetable lady looks tired and grumpy. Baby Ais has no money to give. But she has something else…",
    },
    body: {
      id: `Sabtu pagi, Umi mengajak Baby Ais dan Baby Mo ke pasar. Pasarnya ramai sekali. Ada tenda merah, tenda biru, dan tenda kuning seperti payung raksasa.

Baby Ais memegang ujung baju Umi erat-erat. Ia suka pasar. Baunya campur-campur: wangi jeruk, bau ikan, dan harum kue pandan.

"Kita beli tomat dan wortel di Bu Sayur, ya," kata Umi.

Bu Sayur duduk di balik tumpukan tomat merah. Tapi hari ini wajahnya tidak seperti biasa. Alisnya turun. Mulutnya datar. Ia menghitung uang kembalian sambil menghela napas panjang.

"Umi," bisik Baby Ais, "Bu Sayur kenapa?"

"Mungkin capek, Sayang. Bu Sayur berangkat ke pasar sebelum subuh."

Baby Ais memandangi Bu Sayur lama sekali. Ia ingin membantu. Tapi ia tidak punya uang. Ia tidak bisa mengangkat karung wortel. Ia bahkan belum bisa menghitung kembalian.

Lalu ia ingat kata-kata Abi waktu makan malam kemarin: "Senyum itu sedekah, lho. Sedekah yang tidak perlu uang."

Baby Ais menarik napas. Ia melangkah maju, sampai kepalanya tepat di depan tumpukan tomat.

Lalu ia tersenyum. Senyum paling lebar yang ia punya. Sampai pipinya naik dan matanya menyipit.

"Assalamu'alaikum, Bu Sayur!"

Bu Sayur mendongak. Untuk sesaat ia diam saja. Lalu… sudut bibirnya bergerak. Sedikit. Lalu lebih banyak. Lalu ia tersenyum juga!

"Wa'alaikumussalam, cantik," katanya. Suaranya jadi lembut.

Senyum itu menular seperti tawa. Baby Mo ikut tersenyum. Umi tersenyum. Bahkan bapak penjual ikan di sebelah ikut tersenyum, entah kenapa.

Baby Ais berbisik pada dirinya sendiri, "Senyum kecil, sedekah besar. Senyum kecil, sedekah besar."

Bu Sayur memilihkan tomat yang paling merah dan wortel yang paling lurus. Lalu ia menambahkan sesuatu ke dalam kantong: satu buah jeruk.

"Ini untuk yang punya senyum paling manis di pasar hari ini," katanya.

Di jalan pulang, Baby Ais memegang jeruk itu dengan dua tangan seperti memegang harta karun.

"Umi, aku sedekah pakai senyum, terus dapat jeruk," katanya heran.

Umi tertawa. "Kebaikan itu memang suka kembali, Sayang. Rasulullah ﷺ bersabda:"

> *"Senyummu di hadapan saudaramu adalah sedekah bagimu."* (HR. Tirmidzi 1956)

Sejak hari itu, setiap ke pasar, Baby Ais punya tugas penting. Sebelum membeli apa-apa, ia membagikan senyum dulu. Satu untuk Bu Sayur. Satu untuk bapak ikan. Satu untuk ibu kue pandan. Gratis, dan tidak pernah habis.

Ngobrol bareng si kecil: siapa yang bisa kita beri senyum hari ini? Yuk, hitung berapa senyum yang kamu bagikan sebelum tidur! 😊`,
      en: `On Saturday morning, Umi took Baby Ais and Baby Mo to the market. It was so busy. There were red tents, blue tents and yellow tents like giant umbrellas.

Baby Ais held tightly to the edge of Umi's dress. She loved the market. It smelled of everything at once: oranges, fish and sweet pandan cakes.

"Let's buy tomatoes and carrots from the Vegetable Lady," said Umi.

The Vegetable Lady sat behind a pile of red tomatoes. But today her face wasn't the same as usual. Her eyebrows drooped. Her mouth was flat. She counted out change and let out a long sigh.

"Umi," whispered Baby Ais, "what's wrong with the Vegetable Lady?"

"Maybe she's tired, sweetheart. She comes to the market before dawn."

Baby Ais watched the Vegetable Lady for a long time. She wanted to help. But she had no money. She couldn't lift a sack of carrots. She couldn't even count change yet.

Then she remembered what Abi said at dinner the night before: "A smile is charity, you know. Charity that doesn't need any money."

Baby Ais took a breath. She stepped forward until her head was right in front of the pile of tomatoes.

Then she smiled. The widest smile she had. So wide her cheeks went up and her eyes squeezed small.

"Assalamu'alaikum, Vegetable Lady!"

The Vegetable Lady looked up. For a moment she said nothing. Then… the corner of her mouth moved. A little. Then more. Then she smiled too!

"Wa'alaikumussalam, sweetie," she said. Her voice went soft.

The smile spread like laughter. Baby Mo smiled. Umi smiled. Even the fish seller next door smiled, though he didn't know why.

Baby Ais whispered to herself, "A little smile, a big charity. A little smile, a big charity."

The Vegetable Lady picked out the reddest tomatoes and the straightest carrots. Then she added something to the bag: one orange.

"This is for the girl with the sweetest smile in the market today," she said.

On the way home, Baby Ais held the orange in both hands like treasure.

"Umi, I gave charity with a smile, and I got an orange," she said, amazed.

Umi laughed. "Kindness does like to come back, sweetheart. The Messenger of Allah ﷺ said:"

> *"Your smile in the face of your brother is charity for you."* (Tirmidhi 1956)

From that day on, every trip to the market, Baby Ais had an important job. Before buying anything, she handed out smiles first. One for the Vegetable Lady. One for the fish seller. One for the pandan cake lady. Free, and they never ran out.

Talk it over with your little one: who can we give a smile to today? Let's count how many smiles you share before bedtime! 😊`,
    },
    anchor: { type: "doa", slug: "doa-masuk-pasar" },
    takeaway: {
      id: "Anak kecil belum bisa memberi banyak hal, tapi ia selalu bisa memberi senyum. Ajari bahwa itu juga sedekah.",
      en: "Little children can't give much yet, but they can always give a smile. Teach them that it counts as charity too.",
    },
    tags: ["senyum", "sedekah", "pasar", "kebaikan", "sayur"],
    readingTimeMin: 4,
  },

  /* 3 ───────────────────────────────────────────── */
  {
    slug: "anak-kucing-di-bawah-hujan",
    kind: "story",
    child: "both",
    pose: "baby-mo-wow.png",
    published: "2026-11-03",
    title: { id: "Anak Kucing di Bawah Hujan", en: "The Kitten in the Rain" },
    hook: {
      id: "Ada suara kecil 'meong' dari kardus basah di depan rumah. Baby Mo dan Baby Ais harus memutuskan: masuk ke rumah yang hangat, atau menolong?",
      en: "A tiny 'meow' comes from a soggy box outside. Baby Mo and Baby Ais must decide: go into the warm house, or help?",
    },
    body: {
      id: `Sore itu langit berubah abu-abu. Lalu tik… tik… tik… hujan turun, makin lama makin deras.

Baby Mo dan Baby Ais berjalan pulang bersama Abi di bawah payung kuning besar. Sepatu bot mereka berbunyi cepluk-cepluk di genangan air.

Tiba-tiba Baby Ais berhenti. "Dengar!"

Mereka semua diam. Di antara suara hujan, ada suara kecil sekali: "Meong… meong…"

Suara itu datang dari kardus di pinggir jalan. Kardusnya basah dan hampir roboh. Di dalamnya ada anak kucing oranye, bulunya lepek, badannya gemetar.

"Kasihan…" bisik Baby Mo.

"Abi, kucingnya kedinginan," kata Baby Ais. Matanya berkaca-kaca.

Abi berjongkok. "Kalian mau menolongnya?"

Baby Mo dan Baby Ais mengangguk bersamaan, cepat sekali sampai topi hujan mereka bergoyang.

"Kalau begitu, apa yang dibutuhkan anak kucing yang kehujanan?" tanya Abi.

Baby Mo berpikir keras. "Tempat yang kering!"

Baby Ais menambahkan, "Dan hangat! Dan… minum!"

Abi tersenyum. "Pintar. Ayo kita bagi tugas."

Baby Mo memegang payung kuning tinggi-tinggi di atas kardus, walaupun tangannya pegal. Baby Ais berlari kecil ke teras dan membawa handuk tua dari keranjang.

Abi mengangkat anak kucing itu pelan-pelan dan membungkusnya dengan handuk. Kucing itu masih gemetar, tapi tidak lagi mengeong keras.

Di teras, Baby Ais menuang air ke tutup botol. Anak kucing itu menjilat-jilat airnya. Slurp, slurp.

"Dia minum!" seru Baby Ais.

Baby Mo jongkok di sampingnya dan berbisik, "Pelan-pelan, kucing kecil. Kamu aman sekarang."

Mereka menyanyikan lagu kecil yang mereka karang sendiri: "Kucing kecil, jangan takut, ada kami di sini. Hujan boleh turun terus, kamu tetap kering di sini."

Pelan-pelan, anak kucing itu berhenti gemetar. Ia mendengkur pelan — prrr, prrr — seperti mesin kecil.

Abi duduk di samping mereka. "Kalian tahu? Rasulullah ﷺ pernah bercerita tentang seorang laki-laki yang memberi minum anjing yang kehausan. Allah berterima kasih kepadanya dan mengampuni dosanya. Lalu para sahabat bertanya, apakah berbuat baik kepada hewan juga dapat pahala? Rasulullah ﷺ menjawab:"

> *"Pada setiap (berbuat baik kepada) makhluk yang bernyawa ada pahala."* (HR. Bukhari 6009, Muslim 2244)

Baby Ais mengusap kepala anak kucing itu dengan satu jari. "Berarti tadi kita dapat pahala?"

"Insya Allah," kata Abi. "Dan kucingnya dapat rumah sementara."

Malam itu, hujan masih turun. Tapi di teras, di dalam kardus baru yang kering, anak kucing oranye tidur nyenyak di atas handuk. Dan di dalam rumah, dua anak kecil tidur dengan hati yang hangat.

Ngobrol bareng si kecil: kalau melihat hewan kesusahan, apa yang bisa kita lakukan dengan aman? Ingat, selalu ajak orang dewasa dulu, ya! 🐱`,
      en: `That afternoon the sky turned grey. Then tip… tip… tip… the rain began, harder and harder.

Baby Mo and Baby Ais walked home with Abi under a big yellow umbrella. Their boots went splish-splosh in the puddles.

Suddenly Baby Ais stopped. "Listen!"

They all went quiet. Between the sounds of the rain was a very tiny sound: "Meow… meow…"

It came from a box at the side of the road. The box was wet and almost falling apart. Inside was an orange kitten, its fur flat and soggy, its body shivering.

"Poor thing…" whispered Baby Mo.

"Abi, the kitten is cold," said Baby Ais. Her eyes were shining with tears.

Abi crouched down. "Do you want to help it?"

Baby Mo and Baby Ais nodded together, so fast their rain hats wobbled.

"Then what does a kitten caught in the rain need?" asked Abi.

Baby Mo thought hard. "A dry place!"

Baby Ais added, "And warm! And… a drink!"

Abi smiled. "Clever. Let's share the jobs."

Baby Mo held the yellow umbrella high over the box, even though his arms ached. Baby Ais trotted to the porch and brought an old towel from the basket.

Abi lifted the kitten gently and wrapped it in the towel. It was still shivering, but it wasn't meowing so loudly any more.

On the porch, Baby Ais poured water into a bottle cap. The kitten lapped it up. Slurp, slurp.

"It's drinking!" cried Baby Ais.

Baby Mo crouched beside it and whispered, "Slowly, little kitten. You're safe now."

They sang a little song they made up themselves: "Little kitten, don't you fear, we are here and you are near. Let the rain keep falling down, you'll stay dry here safe and sound."

Slowly, the kitten stopped shivering. It purred softly — prrr, prrr — like a tiny engine.

Abi sat down beside them. "Did you know? The Messenger of Allah ﷺ once told of a man who gave water to a thirsty dog. Allah thanked him and forgave him. The companions asked whether being kind to animals is rewarded too. The Messenger of Allah ﷺ answered:"

> *"In (kindness to) every living creature there is a reward."* (Bukhari 6009, Muslim 2244)

Baby Ais stroked the kitten's head with one finger. "So we got a reward just now?"

"In sha Allah," said Abi. "And the kitten got a home for now."

That night, the rain kept falling. But on the porch, in a new dry box, the orange kitten slept soundly on the towel. And inside the house, two little children fell asleep with warm hearts.

Talk it over with your little one: when we see an animal in trouble, what can we do safely? Remember, always get a grown-up first! 🐱`,
    },
    anchor: { type: "hadith", slug: "kelembutan-keindahan" },
    takeaway: {
      id: "Belas kasih kepada hewan adalah latihan pertama anak untuk peka pada makhluk yang lebih lemah darinya.",
      en: "Compassion for animals is a child's first practice in caring for creatures weaker than themselves.",
    },
    tags: ["kucing", "hewan", "hujan", "menolong", "kasih sayang"],
    readingTimeMin: 5,
  },

  /* 4 ───────────────────────────────────────────── */
  {
    slug: "benteng-selimut-hari-hujan",
    kind: "story",
    child: "both",
    pose: "baby-mo-yeyy.png",
    published: "2026-11-03",
    title: { id: "Benteng Selimut di Hari Hujan", en: "The Blanket Fort on a Rainy Day" },
    hook: {
      id: "Piknik ke taman batal karena hujan. Baby Mo cemberut, Baby Ais menangis. Lalu Umi mengeluarkan selimut paling besar di rumah…",
      en: "The picnic is cancelled because of the rain. Baby Mo sulks, Baby Ais cries. Then Umi brings out the biggest blanket in the house…",
    },
    body: {
      id: `Sudah seminggu Baby Mo dan Baby Ais menunggu hari ini. Hari piknik! Keranjang sudah siap. Ada roti isi, kue cokelat, dan jus jeruk.

Tapi pagi itu, jendela penuh tetesan air. Hujan turun deras sekali, seperti langit sedang menuang ember.

"Pikniknya batal, ya, Sayang," kata Umi pelan.

Baby Mo melipat tangan dan cemberut. Baby Ais menangis sambil memeluk keranjang piknik.

"Hujannya jahat," gerutu Baby Mo.

Umi duduk di antara mereka. "Hmm. Hujan memang membatalkan piknik di taman. Tapi hujan tidak bisa membatalkan… piknik di dalam benteng."

Tangis Baby Ais berhenti. "Benteng?"

Umi membuka lemari dan mengeluarkan selimut paling besar di rumah — selimut oranye yang biasanya dipakai Nenek kalau menginap.

Lalu mereka membangun benteng. Kursi makan jadi tiang. Sofa jadi tembok. Selimut oranye jadi atap. Bantal-bantal jadi lantai yang empuk.

Baby Mo menemukan lampu hias berbentuk bintang di laci, dan Umi menggantungnya di dalam benteng. Lampunya berkelap-kelip: merah, kuning, biru.

"Wah…" kata Baby Ais. Matanya ikut berkelap-kelip.

Mereka masuk ke dalam benteng dan membuka keranjang piknik. Roti isi, kue cokelat, jus jeruk. Semuanya masih ada!

Di luar, hujan masih turun. Tapi di dalam benteng, suara hujan terdengar seperti lagu. Tik-tik-tik di atap. Dug-dug di jendela.

Umi berkata, "Ayo kita main 'Untung Ada'. Sebut satu hal yang kita syukuri hari ini."

"Untung ada selimut besar!" seru Baby Mo.

"Untung ada lampu bintang!" kata Baby Ais.

"Untung ada kue cokelat!" kata Baby Mo lagi, mulutnya penuh.

"Untung ada hujan," kata Umi, "jadi tanaman di kebun bisa minum."

Baby Ais berpikir sebentar. Lalu ia berkata pelan, "Untung ada Umi dan Mo… jadi pikniknya tetap seru."

Mereka bermain "Untung Ada" sampai tidak bisa berhenti. Untung ada bantal. Untung ada atap. Untung ada telinga untuk mendengar hujan. Rasanya hal-hal baik bertambah terus, makin banyak dari yang mereka kira.

Umi tersenyum. "Itu janji Allah, lho. Kalau kita bersyukur, Allah tambahkan."

> *"Sesungguhnya jika kamu bersyukur, niscaya Aku akan menambah (nikmat) kepadamu."* (QS. Ibrahim: 7)

Sore harinya, hujan berhenti. Pelangi muncul di langit. Tapi Baby Mo dan Baby Ais tidak mau keluar dari benteng.

"Umi," kata Baby Mo, "besok kalau hujan lagi, kita piknik di benteng lagi, ya?"

Ngobrol bareng si kecil: kalau rencana kita batal, apa saja yang masih bisa kita syukuri? Yuk, main "Untung Ada" sebelum tidur! 🏕️`,
      en: `Baby Mo and Baby Ais had been waiting a whole week for this day. Picnic day! The basket was ready. There were sandwiches, chocolate cake and orange juice.

But that morning, the window was covered in drops. The rain was pouring down, as if the sky were emptying a bucket.

"The picnic is cancelled, sweethearts," said Umi gently.

Baby Mo folded his arms and sulked. Baby Ais cried, hugging the picnic basket.

"The rain is mean," grumbled Baby Mo.

Umi sat down between them. "Hmm. The rain did cancel the picnic in the park. But the rain can't cancel… a picnic inside a fort."

Baby Ais stopped crying. "A fort?"

Umi opened the cupboard and took out the biggest blanket in the house — the orange one Grandma uses when she stays over.

Then they built a fort. Dining chairs became poles. The sofa became a wall. The orange blanket became the roof. Cushions became a soft floor.

Baby Mo found star-shaped fairy lights in a drawer, and Umi hung them inside the fort. The lights twinkled: red, yellow, blue.

"Wow…" said Baby Ais. Her eyes twinkled too.

They climbed inside the fort and opened the picnic basket. Sandwiches, chocolate cake, orange juice. Everything was still there!

Outside, the rain kept falling. But inside the fort, the rain sounded like a song. Tap-tap-tap on the roof. Thud-thud on the window.

Umi said, "Let's play 'Lucky We Have'. Say one thing we're thankful for today."

"Lucky we have a big blanket!" cried Baby Mo.

"Lucky we have star lights!" said Baby Ais.

"Lucky we have chocolate cake!" said Baby Mo again, his mouth full.

"Lucky we have rain," said Umi, "so the plants in the garden can drink."

Baby Ais thought for a moment. Then she said softly, "Lucky we have Umi and Mo… so the picnic is still fun."

They played "Lucky We Have" until they couldn't stop. Lucky we have pillows. Lucky we have a roof. Lucky we have ears to hear the rain. It felt like the good things kept adding up, more and more than they'd expected.

Umi smiled. "That's Allah's promise, you know. When we're thankful, Allah gives us more."

> *"If you are grateful, I will surely give you more."* (Qur'an, Ibrahim 14:7)

In the afternoon, the rain stopped. A rainbow appeared in the sky. But Baby Mo and Baby Ais didn't want to leave the fort.

"Umi," said Baby Mo, "if it rains again tomorrow, can we have a fort picnic again?"

Talk it over with your little one: when our plans get cancelled, what can we still be thankful for? Let's play "Lucky We Have" before bed! 🏕️`,
    },
    anchor: { type: "doa", slug: "doa-pandai-bersyukur" },
    takeaway: {
      id: "Kecewa itu wajar. Bantu anak melewatinya dengan mencari hal-hal kecil yang masih bisa disyukuri — bersama-sama.",
      en: "Disappointment is normal. Help children through it by looking together for the small things that are still worth thanking Allah for.",
    },
    tags: ["syukur", "hujan", "piknik", "kecewa", "keluarga"],
    readingTimeMin: 5,
  },

  /* 5 ───────────────────────────────────────────── */
  {
    slug: "hari-umi-sakit",
    kind: "story",
    child: "both",
    pose: "baby-mo-thank-you.png",
    published: "2026-11-03",
    title: { id: "Hari Ketika Umi Sakit", en: "The Day Umi Was Sick" },
    hook: {
      id: "Pagi ini Umi tidak bangun untuk membuat sarapan. Badannya panas. Baby Mo dan Baby Ais memutuskan: hari ini, merekalah yang merawat Umi.",
      en: "This morning Umi doesn't get up to make breakfast. She has a fever. Baby Mo and Baby Ais decide: today, they'll take care of Umi.",
    },
    body: {
      id: `Biasanya, setiap pagi, Umi sudah ada di dapur. Ada bau roti panggang dan suara Umi bersenandung.

Tapi pagi ini dapur sepi. Kamar Umi gelap. Umi masih berbaring di kasur dengan selimut sampai ke dagu.

"Umi?" Baby Mo mengintip dari pintu.

"Umi sedang sakit, Sayang," kata Abi pelan. Ia meletakkan termometer di meja kecil. "Badan Umi panas. Umi perlu istirahat."

Baby Ais memandang Umi dengan cemas. Umi yang selalu kuat. Umi yang selalu menggendong. Umi yang selalu tahu di mana kaus kaki yang hilang. Sekarang Umi terlihat lemah.

"Kalau Umi sakit, siapa yang merawat Umi?" tanya Baby Ais.

Abi berjongkok. "Bagaimana kalau hari ini… kita yang merawat Umi?"

Baby Mo langsung berdiri tegak seperti tentara. "Siap!"

Mereka membuat rencana. Tugas Baby Mo: membawa air minum. Tugas Baby Ais: menjaga Umi tetap hangat. Tugas Abi: memasak sup.

Baby Mo membawa gelas air dengan dua tangan, berjalan pelan-pelan sekali supaya tidak tumpah. Satu langkah. Dua langkah. Tiga langkah. "Ini, Umi. Diminum, ya."

Umi tersenyum lemah. "Terima kasih, Kakak Mo."

Baby Ais menarik selimut Umi supaya rapi, lalu menaruh boneka kelincinya di samping bantal Umi. "Biar Umi ada temannya."

Lalu Baby Ais punya ide. Ia mengambil kertas dan krayon, dan menggambar sesuatu: Umi tersenyum, di bawah matahari besar, dengan tulisan cakar ayam "CPT SMBH UMI".

"Cepat sembuh, Umi," Baby Ais membaca tulisannya sendiri dengan bangga.

Dari dapur, harum sup ayam mulai tercium. Abi membawa mangkuk sup yang mengepul. Baby Mo meniup-niup supnya supaya tidak terlalu panas. Fuuh, fuuh.

Siang itu rumah sangat tenang. Baby Mo dan Baby Ais berbicara dengan berbisik-bisik supaya Umi bisa tidur. Mereka bermain di lantai dengan sangat pelan, seperti dua tikus kecil.

Setiap kali lewat kamar, mereka berbisik bersama, "Umi istirahat, kami yang jaga. Umi istirahat, kami yang jaga."

Sore harinya, Umi duduk di kasur. Wajahnya sudah lebih segar. "Rasanya Umi sudah agak baikan," katanya. "Mungkin karena dirawat oleh dua perawat terbaik di dunia."

Baby Mo dan Baby Ais naik ke kasur dan memeluk Umi pelan-pelan, hati-hati sekali.

Abi berkata, "Kalian tahu? Ada orang yang bertanya kepada Rasulullah ﷺ, siapa yang paling berhak kita perlakukan dengan baik."

> *"Ibumu." Orang itu bertanya, "Kemudian siapa?" Beliau menjawab, "Ibumu." "Kemudian siapa?" "Ibumu." "Kemudian siapa?" "Kemudian ayahmu."* (HR. Bukhari 5971, Muslim 2548)

"Tiga kali Ibu!" seru Baby Ais sambil mengacungkan tiga jari.

"Hari ini kalian sudah berbuat baik kepada Umi, tiga kali, empat kali, banyak kali," kata Abi.

Malam itu, giliran Umi yang berbisik kepada mereka sebelum tidur, "Terima kasih sudah merawat Umi. Umi sayang kalian."

Ngobrol bareng si kecil: kalau ada anggota keluarga yang sakit, kebaikan kecil apa yang bisa kita lakukan untuknya? 💐`,
      en: `Usually, every morning, Umi was already in the kitchen. There was the smell of toast and the sound of Umi humming.

But this morning the kitchen was quiet. Umi's room was dark. Umi was still lying in bed with the blanket up to her chin.

"Umi?" Baby Mo peeked round the door.

"Umi is sick, sweetheart," Abi said softly. He put a thermometer on the little table. "Umi has a fever. She needs to rest."

Baby Ais looked at Umi anxiously. Umi who was always strong. Umi who always carried them. Umi who always knew where the lost socks were. Now Umi looked weak.

"If Umi is sick, who takes care of Umi?" asked Baby Ais.

Abi crouched down. "What if today… we take care of Umi?"

Baby Mo stood up straight like a soldier. "Ready!"

They made a plan. Baby Mo's job: bring water. Baby Ais's job: keep Umi warm. Abi's job: make soup.

Baby Mo carried the glass of water in both hands, walking very, very slowly so it wouldn't spill. One step. Two steps. Three steps. "Here, Umi. Drink up."

Umi smiled weakly. "Thank you, big brother Mo."

Baby Ais pulled Umi's blanket straight, then put her toy rabbit beside Umi's pillow. "So Umi has a friend."

Then Baby Ais had an idea. She got paper and crayons and drew something: Umi smiling under a big sun, with wobbly letters that said "GT WEL UMI".

"Get well, Umi," Baby Ais read her own writing proudly.

From the kitchen came the smell of chicken soup. Abi brought in a steaming bowl. Baby Mo blew on the soup so it wouldn't be too hot. Phoo, phoo.

That afternoon the house was very calm. Baby Mo and Baby Ais talked in whispers so Umi could sleep. They played on the floor very quietly, like two little mice.

Every time they passed the bedroom, they whispered together, "Umi rests, we keep watch. Umi rests, we keep watch."

In the evening, Umi sat up in bed. Her face looked fresher. "I feel a bit better," she said. "Maybe because I had the two best nurses in the world."

Baby Mo and Baby Ais climbed onto the bed and hugged Umi gently, very carefully.

Abi said, "Do you know? Someone once asked the Messenger of Allah ﷺ who most deserves our kindness."

> *"Your mother." The man asked, "Then who?" He said, "Your mother." "Then who?" "Your mother." "Then who?" "Then your father."* (Bukhari 5971, Muslim 2548)

"Mother three times!" cried Baby Ais, holding up three fingers.

"Today you were kind to Umi three times, four times, lots of times," said Abi.

That night, it was Umi's turn to whisper to them before sleep, "Thank you for taking care of me. I love you both."

Talk it over with your little one: when someone in the family is sick, what small kindness can we do for them? 💐`,
    },
    anchor: { type: "hadith", slug: "berbakti-pada-ibu" },
    takeaway: {
      id: "Anak yang diberi tugas kecil saat orang tuanya sakit belajar bahwa sayang itu bukan hanya diterima, tapi juga diberikan.",
      en: "Children given small jobs when a parent is sick learn that love isn't only received — it's given too.",
    },
    tags: ["umi", "sakit", "berbakti", "merawat", "keluarga"],
    readingTimeMin: 5,
  },
];
