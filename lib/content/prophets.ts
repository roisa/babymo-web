import type { Prophet } from "./types";

/**
 * Kisah 25 Nabi — the 25 prophets named in the Qur'an, retold for
 * children. Each story focuses on ONE memorable spiritual moment
 * rather than a full biography. Three takeaway lessons per prophet.
 *
 * EDITORIAL NOTE: Stories follow mainstream Sunni sources (Qur'an,
 * Tafsir Ibn Kathir, Bidayah wan-Nihayah). Some details vary by
 * source. Before public launch every story should be reviewed by
 * a qualified ustadz.
 */
export const prophetList: Prophet[] = [
  {
    slug: "adam",
    order: 1,
    name: { id: "Nabi Adam", en: "Prophet Adam" },
    arabicName: "آدَم",
    era: { id: "Manusia pertama", en: "The first human" },
    keyMoment: {
      id: "Diciptakan dari tanah, dimuliakan dengan ilmu, lalu diturunkan ke bumi setelah diuji.",
      en: "Created from earth, honored with knowledge, then sent to earth after being tested.",
    },
    story: {
      id: `<p>Allah menciptakan Nabi Adam dari tanah, lalu meniupkan ruh ke dalamnya. Allah mengajari Adam nama-nama segala sesuatu — dan ketika para malaikat ditanya, mereka tidak tahu. Hanya Adam yang bisa menjawab. Ini menunjukkan kemuliaan manusia: bukan kekuatan atau ukuran, tapi <em>ilmu</em>.</p>

<p>Allah lalu memerintahkan para malaikat untuk sujud hormat kepada Adam. Semua sujud, kecuali Iblis. Iblis sombong: "Aku diciptakan dari api, dia dari tanah." Karena kesombongannya, Iblis diusir dari surga.</p>

<p>Adam dan Hawa diizinkan tinggal di surga, dengan satu larangan: jangan dekati satu pohon tertentu. Tapi Iblis membisikkan godaan, dan mereka memakan dari pohon itu. Sadar telah salah, Adam dan Hawa langsung bertobat: <em>"Rabbana zhalamna anfusana"</em> — "Tuhan kami, kami telah menzalimi diri sendiri."</p>

<p>Allah menerima tobat mereka, tapi menurunkan mereka ke bumi sebagai khalifah — bukan sebagai hukuman, tapi sebagai misi. Dari Adam dan Hawa lah seluruh manusia berasal.</p>`,
      en: `<p>Allah created Prophet Adam from earth, then breathed soul into him. Allah taught Adam the names of all things — and when the angels were asked, they didn't know. Only Adam could answer. This shows humanity's honor: not through strength or size, but through <em>knowledge</em>.</p>

<p>Allah then commanded the angels to bow in respect to Adam. All did, except Iblis. Iblis was proud: "I was created from fire, he from earth." Because of his arrogance, Iblis was cast out of Paradise.</p>

<p>Adam and Hawa were allowed to live in Paradise, with one prohibition: don't approach a particular tree. But Iblis whispered temptation, and they ate from it. Realizing their mistake, Adam and Hawa immediately repented: <em>"Rabbana zhalamna anfusana"</em> — "Our Lord, we have wronged ourselves."</p>

<p>Allah accepted their repentance, but sent them down to earth as His vicegerents — not as punishment, but as a mission. From Adam and Hawa, all humanity descends.</p>`,
    },
    lessons: {
      id: [
        "Yang membuat manusia mulia adalah ilmu, bukan ukuran tubuh atau bahan tubuh.",
        "Iblis jatuh karena sombong — sifat paling berbahaya bagi manusia juga.",
        "Setiap orang bisa salah. Yang penting: cepat sadar, cepat bertobat — seperti Nabi Adam.",
      ],
      en: [
        "What makes humans honored is knowledge, not body size or origin material.",
        "Iblis fell because of arrogance — the most dangerous trait for humans too.",
        "Everyone makes mistakes. What matters: quick awareness, quick repentance — like Prophet Adam.",
      ],
    },
    relatedSurah: ["al-fatihah"],
    relatedDoa: ["doa-untuk-orang-tua"],
    searchQuery: {
      id: "kisah nabi adam untuk anak singkat",
      en: "story of prophet adam for kids",
    },
    published: "2026-05-28",
  },

  {
    slug: "idris",
    order: 2,
    name: { id: "Nabi Idris", en: "Prophet Idris" },
    arabicName: "إِدْرِيس",
    era: { id: "Setelah Nabi Adam", en: "After Prophet Adam" },
    keyMoment: {
      id: "Nabi yang pertama belajar menulis dan diangkat Allah ke langit tinggi.",
      en: "The first prophet to learn writing — raised by Allah to a lofty station.",
    },
    story: {
      id: `<p>Nabi Idris adalah keturunan Nabi Adam, hidup ratusan tahun setelah Adam wafat. Allah memberinya banyak ilmu: dia adalah orang pertama yang belajar menulis dengan pena, orang pertama yang menjahit pakaian, dan orang pertama yang mempelajari ilmu falak (bintang).</p>

<p>Allah memuji Idris dalam Al-Qur'an: <em>"Dia adalah seorang yang sangat membenarkan dan seorang nabi"</em> (QS. Maryam: 56). Idris terus-menerus berzikir, beribadah, dan menyebarkan ajaran tauhid pada zamannya.</p>

<p>Karena ketinggian derajatnya di sisi Allah, Allah berfirman: <em>"Dan Kami telah mengangkatnya ke martabat yang tinggi"</em> (QS. Maryam: 57). Para ulama berbeda pendapat soal arti "diangkat" — sebagian menyebut Allah mengangkat ruhnya ke langit ke-empat, sebagian menyebut maknanya derajat spiritual yang tinggi.</p>

<p>Yang jelas: ilmu dan ibadah Nabi Idris membuatnya mulia di sisi Allah. Untuk anak: orang yang rajin belajar dan beribadah, derajatnya tinggi — bukan di mata manusia, tapi di mata Allah.</p>`,
      en: `<p>Prophet Idris was a descendant of Prophet Adam, living centuries after Adam passed away. Allah gave him much knowledge: he was the first to learn to write with a pen, the first to sew clothing, and the first to study astronomy.</p>

<p>Allah praised Idris in the Qur'an: <em>"He was a truthful one, and a prophet"</em> (Maryam: 56). Idris constantly remembered Allah, worshipped, and spread the message of tawhid in his era.</p>

<p>Because of his lofty rank with Allah, Allah said: <em>"And We raised him to a high station"</em> (Maryam: 57). Scholars differ on the meaning of "raised" — some say Allah raised his soul to the fourth heaven, others say it means a high spiritual rank.</p>

<p>What's clear: Prophet Idris's knowledge and worship made him honored with Allah. For children: those who diligently learn and worship are exalted — not in human eyes, but in Allah's.</p>`,
    },
    lessons: {
      id: [
        "Belajar (menulis, membaca, ilmu pengetahuan) adalah bagian dari ibadah.",
        "Allah mengangkat derajat orang yang menggabungkan ilmu dengan amal.",
        "Setiap zaman butuh orang yang menyebarkan kebaikan — kita juga bisa.",
      ],
      en: [
        "Learning (writing, reading, knowledge) is part of worship.",
        "Allah elevates those who combine knowledge with action.",
        "Every era needs someone who spreads good — we can too.",
      ],
    },
    searchQuery: {
      id: "kisah nabi idris singkat",
      en: "story of prophet idris for kids",
    },
    published: "2026-05-28",
  },

  {
    slug: "nuh",
    order: 3,
    name: { id: "Nabi Nuh", en: "Prophet Nuh (Noah)" },
    arabicName: "نُوح",
    era: { id: "Setelah generasi Adam-Idris menyimpang dari tauhid", en: "After generations of Adam-Idris drifted from tawhid" },
    keyMoment: {
      id: "Berdakwah 950 tahun dengan sabar — lalu membangun kapal besar atas perintah Allah.",
      en: "Preached for 950 years with patience — then built a great ark by Allah's command.",
    },
    story: {
      id: `<p>Setelah generasi-generasi berlalu, manusia mulai menyembah berhala. Allah mengutus Nabi Nuh untuk mengajak kaumnya kembali kepada tauhid. Tapi mereka menolak. Selama <strong>950 tahun</strong> Nabi Nuh berdakwah — siang, malam, sembunyi-sembunyi, terang-terangan. Yang beriman hanya sedikit. Bahkan istri dan satu anaknya menolak.</p>

<p>Akhirnya Allah memerintahkan Nabi Nuh membangun kapal besar. Kaumnya menertawakan: "Untuk apa kapal di tengah daratan?" Tapi Nabi Nuh terus membangun.</p>

<p>Lalu datanglah banjir besar. Air keluar dari bumi dan langit. Nabi Nuh memanggil keluarganya dan orang-orang beriman. Anaknya yang tidak beriman menolak naik kapal, berkata: "Aku akan naik gunung tinggi." Nabi Nuh memanggilnya, tapi dia tetap menolak. Anaknya pun tenggelam.</p>

<p>Setelah air surut, kapal Nabi Nuh berlabuh di Gunung Judi. Dari Nabi Nuh dan pengikutnya, bumi kembali dihuni manusia beriman.</p>

<p>Untuk anak: dakwah Nabi Nuh tidak selalu berhasil dengan cepat. Tapi dia tidak pernah menyerah. Hasil di tangan Allah, usaha di tangan kita.</p>`,
      en: `<p>After generations passed, people began worshipping idols. Allah sent Prophet Nuh to invite his people back to tawhid. But they refused. For <strong>950 years</strong> Prophet Nuh preached — day and night, secretly and openly. Only a few believed. Even his wife and one son refused.</p>

<p>Finally Allah commanded Prophet Nuh to build a great ark. His people mocked: "An ark in the middle of dry land?" But Prophet Nuh kept building.</p>

<p>Then came the great flood. Water burst from the earth and fell from the sky. Prophet Nuh called his family and the believers. His unbelieving son refused to board, saying: "I'll climb a high mountain." Prophet Nuh called him, but he refused. His son drowned.</p>

<p>After the water receded, Prophet Nuh's ark rested on Mount Judi. From Prophet Nuh and his followers, the earth was repopulated with believers.</p>

<p>For children: Prophet Nuh's preaching didn't succeed quickly. But he never gave up. Results are in Allah's hands, effort is in ours.</p>`,
    },
    lessons: {
      id: [
        "Sabar berdakwah meski hasilnya lama datang — 950 tahun belum tentu bandingannya hari ini.",
        "Hubungan darah tidak menyelamatkan kalau tidak ada iman — anak Nabi Nuh sendiri tenggelam.",
        "Saat Allah perintahkan sesuatu yang aneh, taat saja — kapal di darat akhirnya jadi penyelamat.",
      ],
      en: [
        "Be patient in calling to good even when results are slow — 950 years dwarfs anything today.",
        "Blood ties don't save without faith — Prophet Nuh's own son drowned.",
        "When Allah commands something strange, just obey — an ark on land became salvation.",
      ],
    },
    relatedSurah: ["al-fil"],
    relatedDoa: ["ketika-hujan"],
    searchQuery: {
      id: "kisah nabi nuh dan banjir besar untuk anak",
      en: "story of prophet nuh and the flood for kids",
    },
    published: "2026-05-28",
  },

  {
    slug: "hud",
    order: 4,
    name: { id: "Nabi Hud", en: "Prophet Hud" },
    arabicName: "هُود",
    era: { id: "Untuk kaum 'Ad — bangsa berfisik raksasa di selatan Arab", en: "Sent to the 'Ad — a tribe of giants in southern Arabia" },
    keyMoment: {
      id: "Memperingatkan kaum kuat dan tinggi dari kesombongan — diabaikan, lalu mereka dibinasakan angin.",
      en: "Warned a strong, tall people against arrogance — ignored, then destroyed by wind.",
    },
    story: {
      id: `<p>Setelah masa Nabi Nuh, lahirlah bangsa 'Ad — kaum yang Allah karuniai badan besar, kekuatan, dan kemakmuran. Mereka membangun istana-istana tinggi dan gedung-gedung megah, hingga sombong dengan kekuatannya.</p>

<p>Allah mengutus Nabi Hud kepada mereka. Beliau berkata: <em>"Wahai kaumku, sembahlah Allah. Tidak ada tuhan bagimu selain Dia. Maka mengapa kamu tidak bertakwa?"</em> Tapi kaum 'Ad menjawab dengan ejekan: "Apakah kamu datang untuk mengajak kami menyembah Allah saja, dan meninggalkan apa yang nenek moyang kami sembah?"</p>

<p>Mereka berkata: "Siapa yang lebih kuat dari kami?" Mereka lupa: yang menciptakan mereka kuat adalah Allah.</p>

<p>Allah memperingatkan mereka berkali-kali lewat Nabi Hud. Mereka tetap sombong. Akhirnya Allah kirim angin dingin yang sangat kencang — selama 7 malam 8 hari tanpa henti. Angin itu mencabut mereka seperti pohon-pohon yang tumbang. Yang selamat hanyalah Nabi Hud dan pengikutnya.</p>

<p>Untuk anak: badan kuat, kepintaran, kekayaan — semua itu pinjaman dari Allah. Kalau kita lupa siapa yang memberi, kita kehilangan keduanya.</p>`,
      en: `<p>After Prophet Nuh's time, the 'Ad people emerged — a tribe Allah blessed with great stature, strength, and prosperity. They built tall palaces and grand structures, becoming arrogant with their power.</p>

<p>Allah sent Prophet Hud to them. He said: <em>"O my people, worship Allah. There is no god for you but Him. Will you not be mindful?"</em> But the 'Ad mocked: "Have you come to make us worship Allah alone and leave what our forefathers worshipped?"</p>

<p>They said: "Who is stronger than us?" They forgot: the One who made them strong was Allah.</p>

<p>Allah warned them repeatedly through Prophet Hud. They remained arrogant. Eventually Allah sent a fierce cold wind — for 7 nights and 8 days nonstop. The wind uprooted them like fallen trees. Only Prophet Hud and his followers survived.</p>

<p>For children: a strong body, intelligence, wealth — all of it is on loan from Allah. If we forget who gave it, we lose both.</p>`,
    },
    lessons: {
      id: [
        "Kekuatan tanpa rendah hati = sombong. Sombong adalah pintu jatuh.",
        "Allah bisa membinasakan kaum sebesar apa pun — dengan apa pun, bahkan angin.",
        "Sebanyak apa pun kekuasaan, akhirnya kembali kepada Allah.",
      ],
      en: [
        "Strength without humility = arrogance. Arrogance is the door to falling.",
        "Allah can destroy any people, no matter how mighty — by anything, even wind.",
        "However much power, eventually it all returns to Allah.",
      ],
    },
    searchQuery: {
      id: "kisah nabi hud dan kaum ad",
      en: "story of prophet hud and people of ad",
    },
    published: "2026-05-28",
  },

  {
    slug: "salih",
    order: 5,
    name: { id: "Nabi Salih", en: "Prophet Salih" },
    arabicName: "صَالِح",
    era: { id: "Untuk kaum Tsamud — keturunan kaum 'Ad", en: "Sent to the Thamud — descendants of the 'Ad" },
    keyMoment: {
      id: "Memohon satu mukjizat: unta dari batu. Kaumnya membunuhnya — dan binasa.",
      en: "Asked for one miracle: a she-camel from rock. His people killed it — and were destroyed.",
    },
    story: {
      id: `<p>Kaum Tsamud adalah keturunan kaum 'Ad yang selamat. Mereka tinggal di lembah berbatu dan ahli memahat rumah di dalam batu cadas. Allah memberi mereka kekuatan, tapi mereka pun mulai menyembah berhala.</p>

<p>Allah mengutus Nabi Salih, salah seorang di antara mereka sendiri. Beliau mengajak mereka kembali kepada tauhid. Mereka berkata: "Beri kami bukti. Keluarkan seekor unta hidup-hidup dari batu cadas itu!"</p>

<p>Nabi Salih berdoa kepada Allah, dan keluarlah seekor unta betina yang besar dari batu. Allah berfirman: "Unta ini tanda. Biarkan dia minum dari sumur sehari, kalian sehari. Jangan ganggu, atau azab akan datang."</p>

<p>Sebagian beriman. Tapi sembilan orang jahat dari kaum Tsamud berencana membunuh unta itu. Mereka berhasil. Lalu mereka mendekati Nabi Salih untuk membunuhnya juga, tapi Allah melindungi sang Nabi.</p>

<p>Setelah tiga hari, Allah kirim suara petir yang dahsyat — semua kaum Tsamud yang ingkar mati seketika. Yang selamat hanyalah Nabi Salih dan pengikutnya.</p>

<p>Untuk anak: kadang Allah memberi tanda yang sangat jelas. Yang ingkar bukan karena tidak tahu — tapi karena tidak mau.</p>`,
      en: `<p>The Thamud were descendants of the surviving 'Ad. They lived in rocky valleys and were masters at carving homes into stone cliffs. Allah gave them strength, but they too began worshipping idols.</p>

<p>Allah sent Prophet Salih, one of their own. He invited them back to tawhid. They said: "Give us proof. Bring out a live she-camel from that rock!"</p>

<p>Prophet Salih prayed to Allah, and a great she-camel emerged from the stone. Allah said: "This camel is a sign. Let her drink from the well one day, you another. Don't harm her, or punishment will come."</p>

<p>Some believed. But nine wicked men from Thamud plotted to kill the camel. They succeeded. Then they approached Prophet Salih to kill him too, but Allah protected the Prophet.</p>

<p>After three days, Allah sent a tremendous thunderclap — all the disbelievers of Thamud died instantly. Only Prophet Salih and his followers survived.</p>

<p>For children: sometimes Allah gives very clear signs. Those who deny don't deny because they don't know — but because they don't want to.</p>`,
    },
    lessons: {
      id: [
        "Allah bisa memberi mukjizat sebesar apa pun. Mempertanyakan bukti bukan keimanan.",
        "Setiap pemberian Allah ada batasannya. Jangan rakus.",
        "Sembilan orang jahat bisa merusak satu kaum. Pilih siapa kawanmu.",
      ],
      en: [
        "Allah can give any miracle. Demanding more proof isn't faith.",
        "Every blessing has limits. Don't be greedy.",
        "Nine wicked men can ruin a whole people. Choose your friends wisely.",
      ],
    },
    searchQuery: {
      id: "kisah nabi salih dan unta",
      en: "story of prophet salih and the she-camel",
    },
    published: "2026-05-28",
  },

  {
    slug: "ibrahim",
    order: 6,
    name: { id: "Nabi Ibrahim", en: "Prophet Ibrahim (Abraham)" },
    arabicName: "إِبْرَاهِيم",
    era: { id: "Bapak para nabi — leluhur Ismail dan Ishaq", en: "Father of the prophets — ancestor of Ismail and Ishaq" },
    keyMoment: {
      id: "Mempertanyakan berhala ayahnya, dilemparkan ke api, lalu mendirikan Ka'bah bersama Ismail.",
      en: "Questioned his father's idols, was thrown into fire, then built the Ka'bah with Ismail.",
    },
    story: {
      id: `<p>Nabi Ibrahim lahir di Babilonia, di tengah kaum yang menyembah berhala. Bahkan ayahnya, Azar, adalah pembuat berhala. Sejak kecil Ibrahim bertanya: "Bagaimana bisa patung-patung yang tidak bicara, tidak mendengar, tidak bisa menolong dirinya sendiri — disembah?"</p>

<p>Suatu hari saat orang-orang pergi, Ibrahim masuk ke kuil dan menghancurkan semua berhala kecuali yang paling besar. Saat orang-orang kembali dan marah, Ibrahim bilang: "Mungkin yang besar itu yang melakukannya. Tanya saja padanya!" Mereka berkata: "Kamu tahu berhala itu tidak bisa bicara." Ibrahim menjawab: "Lalu kenapa kalian menyembah sesuatu yang tidak bisa bicara dan tidak bisa memberi manfaat?"</p>

<p>Raja Namrud marah dan memerintahkan Ibrahim dilemparkan ke api raksasa. Saat Ibrahim dilempar, Allah berfirman kepada api: <em>"Wahai api, jadilah dingin dan keselamatan bagi Ibrahim."</em> Api yang membara itu menjadi dingin — Ibrahim keluar tanpa luka.</p>

<p>Setelah berbagai ujian, Allah memberinya dua anak: Ismail dan Ishaq. Ibrahim diperintahkan menyembelih Ismail — dan saat ia siap, Allah menggantinya dengan domba. Bersama Ismail, Ibrahim mendirikan Ka'bah di Mekkah, rumah ibadah pertama untuk Allah.</p>

<p>Allah memanggilnya <em>"Khalilullah"</em> — kekasih Allah.</p>`,
      en: `<p>Prophet Ibrahim was born in Babylon, among people who worshipped idols. Even his father, Azar, was an idol-maker. From childhood Ibrahim asked: "How can statues that don't speak, don't hear, can't help themselves — be worshipped?"</p>

<p>One day when the people had left, Ibrahim entered the temple and destroyed all the idols except the biggest one. When people returned and grew angry, Ibrahim said: "Maybe the big one did it. Ask him!" They said: "You know idols can't speak." Ibrahim replied: "Then why worship something that can't speak and can't help?"</p>

<p>King Nimrod was furious and ordered Ibrahim thrown into a great fire. As Ibrahim was thrown, Allah said to the fire: <em>"O fire, be cool and safe for Ibrahim."</em> The blazing fire turned cold — Ibrahim emerged unharmed.</p>

<p>After many trials, Allah gave him two sons: Ismail and Ishaq. Ibrahim was commanded to sacrifice Ismail — and as he was ready, Allah replaced him with a ram. With Ismail, Ibrahim built the Ka'bah in Makkah, the first house of worship for Allah.</p>

<p>Allah called him <em>"Khalilullah"</em> — Allah's beloved.</p>`,
    },
    lessons: {
      id: [
        "Berani bertanya — agama yang benar tahan dipertanyakan.",
        "Allah Mahabesar dari hukum alam. Api bisa jadi dingin kalau Allah berkehendak.",
        "Pengorbanan terbesar adalah menyerahkan apa yang paling kita cintai untuk Allah.",
      ],
      en: [
        "Be brave to question — true religion can stand being questioned.",
        "Allah is above the laws of nature. Fire can be cold if He wills.",
        "The greatest sacrifice is giving up what we love most for Allah.",
      ],
    },
    relatedSurah: ["al-fatihah"],
    relatedDoa: ["doa-untuk-orang-tua"],
    searchQuery: {
      id: "kisah nabi ibrahim dan api",
      en: "story of prophet ibrahim and the fire",
    },
    published: "2026-05-28",
  },

  {
    slug: "lut",
    order: 7,
    name: { id: "Nabi Lut", en: "Prophet Lut (Lot)" },
    arabicName: "لُوط",
    era: { id: "Keponakan Nabi Ibrahim — diutus ke negeri Sodom", en: "Nephew of Ibrahim — sent to Sodom" },
    keyMoment: {
      id: "Memperingatkan kaumnya dari perbuatan keji — mereka menolak, dan negeri itu dibalik.",
      en: "Warned his people from grave immorality — they refused, and the city was overturned.",
    },
    story: {
      id: `<p>Nabi Lut adalah keponakan Nabi Ibrahim. Allah mengutusnya ke negeri Sodom — kota yang penduduknya melakukan perbuatan keji yang belum pernah dilakukan sebelumnya: laki-laki kawin dengan laki-laki, dan melakukan perampokan terhadap musafir.</p>

<p>Nabi Lut berdakwah lama, tapi mereka menolak. Bahkan istri Nabi Lut sendiri ikut bersama kaumnya, bukan dengan suaminya.</p>

<p>Allah mengirim malaikat dalam wujud pemuda tampan untuk menguji kaum Sodom. Saat malaikat-malaikat itu sampai di rumah Nabi Lut, kaum Sodom datang mengetuk pintu ingin menyakiti tamu. Nabi Lut sangat sedih dan bingung — sampai malaikat berkata: "Jangan khawatir. Kami adalah malaikat yang diutus untuk membinasakan mereka."</p>

<p>Malam itu, malaikat memerintahkan Nabi Lut keluar dari kota bersama keluarganya — kecuali istrinya yang ikut binasa. "Jangan ada yang menoleh ke belakang," kata malaikat.</p>

<p>Saat fajar, Allah membalik kota Sodom. Yang atas jadi di bawah, yang bawah jadi di atas. Lalu Allah menghujani mereka dengan batu dari tanah liat yang dibakar. Nabi Lut dan keluarganya selamat.</p>

<p>Untuk anak: ada perbuatan yang sangat dibenci Allah — termasuk merusak fitrah laki-laki/perempuan. Allah Maha Penyayang, tapi kepada yang terus-menerus menolak kebenaran, Allah juga Maha Adil.</p>`,
      en: `<p>Prophet Lut was the nephew of Prophet Ibrahim. Allah sent him to Sodom — a city whose people committed grave immorality never before done: men marrying men, and robbing travelers.</p>

<p>Prophet Lut preached long, but they refused. Even his own wife sided with his people, not her husband.</p>

<p>Allah sent angels in the form of handsome young men to test the people of Sodom. When the angels arrived at Prophet Lut's house, the people of Sodom came pounding on the door wanting to harm the guests. Prophet Lut was deeply distressed — until the angels said: "Don't worry. We are angels sent to destroy them."</p>

<p>That night, the angels commanded Prophet Lut to leave the city with his family — except his wife, who perished with them. "Don't look back," said the angels.</p>

<p>At dawn, Allah overturned the city of Sodom. The top became the bottom, the bottom the top. Then Allah rained baked clay stones on them. Prophet Lut and his family were saved.</p>

<p>For children: there are acts Allah greatly dislikes — including violating the natural design of man/woman. Allah is Most Merciful, but to those who persistently reject truth, He is also Most Just.</p>`,
    },
    lessons: {
      id: [
        "Hubungan keluarga tidak menyelamatkan — istri Nabi Lut sendiri tidak selamat.",
        "Berani bicara meski mayoritas salah — Nabi Lut sendirian melawan satu kota.",
        "Saat diperintah meninggalkan tempat yang rusak, jangan menoleh ke belakang.",
      ],
      en: [
        "Family ties don't save — Prophet Lut's own wife wasn't saved.",
        "Be brave to speak even when the majority is wrong — Lut was alone against a whole city.",
        "When commanded to leave a corrupt place, don't look back.",
      ],
    },
    searchQuery: {
      id: "kisah nabi luth dan kaum sodom",
      en: "story of prophet lut and sodom",
    },
    published: "2026-05-28",
  },

  {
    slug: "ismail",
    order: 8,
    name: { id: "Nabi Ismail", en: "Prophet Ismail (Ishmael)" },
    arabicName: "إِسْمَاعِيل",
    era: { id: "Anak sulung Nabi Ibrahim — leluhur bangsa Arab dan Nabi Muhammad ﷺ", en: "Eldest son of Ibrahim — ancestor of the Arabs and Prophet Muhammad ﷺ" },
    keyMoment: {
      id: "Berusia muda saat ditinggal di lembah Mekkah — lalu menjadi sumber zam-zam dan kota suci.",
      en: "Left as a child in the valley of Makkah — became the source of zam-zam and a holy city.",
    },
    story: {
      id: `<p>Nabi Ibrahim diberi anak pertama, Ismail, dari istrinya Hajar. Atas perintah Allah, Ibrahim membawa Hajar dan bayi Ismail ke lembah tandus yang akan menjadi Mekkah. Tidak ada air, tidak ada tanaman. Ibrahim meninggalkan mereka dengan air dan kurma sedikit, lalu kembali ke Syam — atas perintah Allah.</p>

<p>Hajar bertanya: "Ke mana kamu akan tinggalkan kami?" Ibrahim diam. Hajar bertanya lagi: "Apakah Allah memerintahkanmu?" Ibrahim mengangguk. Hajar berkata: "Kalau begitu, Allah tidak akan menelantarkan kami."</p>

<p>Saat air dan kurma habis, Ismail menangis kehausan. Hajar berlari antara bukit Shafa dan Marwah, mencari air — tujuh kali. Sampai akhirnya Allah memunculkan air dari bawah kaki bayi Ismail. Itulah sumur Zamzam, yang masih mengalir sampai hari ini, 4000 tahun kemudian.</p>

<p>Tahun-tahun berlalu. Saat Ismail beranjak remaja, Nabi Ibrahim datang dan berkata: "Anakku, aku mimpi menyembelihmu. Bagaimana pendapatmu?" Ismail menjawab: <em>"Wahai ayah, kerjakan apa yang diperintahkan kepadamu. Insya Allah engkau akan mendapatiku termasuk orang sabar."</em></p>

<p>Saat pisau hampir menyentuh leher Ismail, Allah menggantinya dengan domba dari surga. Bersama ayahnya, Ismail kemudian membangun Ka'bah di Mekkah.</p>`,
      en: `<p>Prophet Ibrahim was given his first son, Ismail, by his wife Hajar. By Allah's command, Ibrahim took Hajar and baby Ismail to a barren valley that would become Makkah. No water, no plants. Ibrahim left them with a little water and dates, then returned to Sham — by Allah's command.</p>

<p>Hajar asked: "Where will you leave us?" Ibrahim was silent. Hajar asked again: "Did Allah command this?" Ibrahim nodded. Hajar said: "Then Allah won't abandon us."</p>

<p>When the water and dates ran out, baby Ismail cried from thirst. Hajar ran between the hills Safa and Marwah, searching for water — seven times. Until finally Allah brought forth water from beneath baby Ismail's feet. That is the well of Zamzam, still flowing today, 4000 years later.</p>

<p>Years passed. When Ismail was a young teen, Prophet Ibrahim came and said: "My son, I saw in a dream that I am sacrificing you. What do you think?" Ismail replied: <em>"O my father, do as you are commanded. Allah willing, you will find me among the patient."</em></p>

<p>As the knife was about to touch Ismail's neck, Allah replaced him with a ram from Paradise. With his father, Ismail then built the Ka'bah in Makkah.</p>`,
    },
    lessons: {
      id: [
        "Kepatuhan kepada Allah lebih utama daripada kenyamanan dunia.",
        "Anak yang dibesarkan dengan cinta Allah, akan mengucap 'kerjakan, ayah' saat diuji.",
        "Allah tidak menelantarkan hamba-Nya — bahkan di tempat tandus pun bisa muncul mata air.",
      ],
      en: [
        "Obedience to Allah is greater than worldly comfort.",
        "A child raised with Allah's love will say 'do it, father' when tested.",
        "Allah doesn't abandon His servants — even in barren places a spring can appear.",
      ],
    },
    relatedSurah: ["quraisy"],
    searchQuery: {
      id: "kisah nabi ismail dan air zamzam",
      en: "story of prophet ismail and zamzam",
    },
    published: "2026-05-28",
  },

  {
    slug: "ishaq",
    order: 9,
    name: { id: "Nabi Ishaq", en: "Prophet Ishaq (Isaac)" },
    arabicName: "إِسْحَاق",
    era: { id: "Anak Nabi Ibrahim dari Sarah — leluhur Bani Israil", en: "Son of Ibrahim by Sarah — ancestor of the Children of Israel" },
    keyMoment: {
      id: "Lahir dari ibu yang sudah lanjut usia — bukti Allah Mahakuasa atas yang mustahil.",
      en: "Born to a mother in old age — proof Allah is over what seems impossible.",
    },
    story: {
      id: `<p>Sarah, istri Nabi Ibrahim, sudah lanjut usia — sekitar 90 tahun — dan tidak pernah punya anak. Suatu hari malaikat-malaikat datang sebagai tamu ke rumah Ibrahim, dan menyampaikan kabar: "Sarah akan punya anak laki-laki, Ishaq, dan dari Ishaq akan lahir Ya'qub."</p>

<p>Sarah tertawa kaget: "Aku perempuan tua dan suamiku juga tua. Bagaimana mungkin?" Malaikat menjawab: <em>"Apakah engkau heran terhadap urusan Allah? Itu rahmat Allah dan berkah-Nya."</em></p>

<p>Beberapa waktu kemudian, Sarah hamil. Lahirlah Nabi Ishaq, anak yang dijanjikan. Allah memberkati Ishaq dan keturunannya. Ishaq menjadi nabi di Palestina, hidup berdampingan dengan saudara tirinya Ismail yang ada di Mekkah.</p>

<p>Dari Ishaq lahir Nabi Ya'qub, yang juga disebut Israil. Dari Ya'qub lahir 12 anak, yang keturunannya disebut Bani Israil. Dari Bani Israil lahir banyak nabi: Musa, Daud, Sulaiman, Zakariya, Yahya, sampai Nabi Isa.</p>

<p>Untuk anak: tidak ada yang mustahil bagi Allah. Anak yang lama dinanti, rezeki yang terasa tertutup, jalan keluar yang sudah putus harapan — semuanya bisa Allah buka kapan saja.</p>`,
      en: `<p>Sarah, Prophet Ibrahim's wife, was elderly — around 90 — and had never had a child. One day angels came as guests to Ibrahim's home and brought news: "Sarah will have a son, Ishaq, and from Ishaq will come Ya'qub."</p>

<p>Sarah laughed in surprise: "I am an old woman and my husband is also old. How is this possible?" The angels replied: <em>"Are you amazed at Allah's affair? It is the mercy and blessing of Allah."</em></p>

<p>Some time later, Sarah conceived. Prophet Ishaq was born, the promised child. Allah blessed Ishaq and his descendants. Ishaq became a prophet in Palestine, living alongside his brother Ismail in Makkah.</p>

<p>From Ishaq came Prophet Ya'qub, also called Israel. From Ya'qub came 12 sons, whose descendants are called the Children of Israel. From them came many prophets: Musa, Daud, Sulaiman, Zakariya, Yahya, up to Prophet Isa.</p>

<p>For children: nothing is impossible for Allah. A long-awaited child, a closed door of sustenance, a path out that seems lost — Allah can open any of them at any moment.</p>`,
    },
    lessons: {
      id: [
        "Apa yang menurut manusia mustahil, mudah bagi Allah.",
        "Doa yang lama belum dijawab — bukan berarti tidak akan dijawab.",
        "Dari satu keluarga yang sabar bisa lahir banyak generasi penuh berkah.",
      ],
      en: [
        "What seems impossible to humans is easy for Allah.",
        "A du'a not yet answered isn't a du'a that won't be.",
        "From one patient family can come many generations of blessing.",
      ],
    },
    searchQuery: {
      id: "kisah nabi ishaq singkat",
      en: "story of prophet ishaq",
    },
    published: "2026-05-28",
  },

  {
    slug: "yaqub",
    order: 10,
    name: { id: "Nabi Ya'qub", en: "Prophet Ya'qub (Jacob)" },
    arabicName: "يَعْقُوب",
    era: { id: "Anak Ishaq — ayah Yusuf dan 11 saudaranya", en: "Son of Ishaq — father of Yusuf and his 11 brothers" },
    keyMoment: {
      id: "Buta karena menangis terlalu lama merindukan Yusuf — penglihatannya dipulihkan saat baju Yusuf diusapkan ke wajahnya.",
      en: "Lost his sight from weeping over Yusuf — vision restored when Yusuf's shirt touched his face.",
    },
    story: {
      id: `<p>Nabi Ya'qub adalah anak Nabi Ishaq. Allah memanggilnya juga "Israil," yang berarti "hamba Allah." Dia memiliki 12 anak laki-laki. Yang paling disayanginya adalah Yusuf — bukan karena ayahnya pilih kasih, tapi karena Ya'qub melihat keistimewaan ruhani pada Yusuf sejak kecil.</p>

<p>Saudara-saudara Yusuf yang lain iri. Mereka melemparnya ke sumur dan membawa pulang baju Yusuf yang dilumuri darah palsu, mengatakan: "Serigala memakannya."</p>

<p>Ya'qub menangis. Tahun-tahun berlalu. Dia tidak pernah berhenti merindukan Yusuf. Penglihatannya mulai memudar karena tangisan yang tak putus. Tapi yang luar biasa: Ya'qub <em>tidak pernah berhenti percaya</em> bahwa Yusuf masih hidup. Saat anak-anaknya bilang dia berlebihan, dia menjawab: <em>"Aku hanya mengadukan kesusahanku kepada Allah."</em></p>

<p>Akhirnya, setelah belasan tahun, Yusuf yang menjadi raja Mesir bertemu kembali dengan saudara-saudaranya. Yusuf memberi mereka bajunya dan berkata: "Bawa ini, usapkan ke wajah ayah, dia akan melihat lagi."</p>

<p>Saat baju Yusuf diusapkan ke wajah Ya'qub, penglihatannya kembali. Mereka berkumpul di Mesir — keluarga yang lama terpisah.</p>

<p>Untuk anak: kesabaran orang tua adalah doa yang panjang. Allah mendengar, meski jawabannya butuh waktu.</p>`,
      en: `<p>Prophet Ya'qub was the son of Prophet Ishaq. Allah also called him "Israel," meaning "Allah's servant." He had 12 sons. The one he loved most was Yusuf — not from favoritism, but because Ya'qub saw spiritual specialness in Yusuf from a young age.</p>

<p>Yusuf's brothers were jealous. They threw him into a well and brought home Yusuf's shirt stained with fake blood, saying: "A wolf ate him."</p>

<p>Ya'qub wept. Years passed. He never stopped longing for Yusuf. His vision began to fade from continuous tears. But remarkably: Ya'qub <em>never stopped believing</em> Yusuf was alive. When his sons said he was overreacting, he replied: <em>"I only complain of my grief to Allah."</em></p>

<p>Finally, after many years, Yusuf — now ruler of Egypt — was reunited with his brothers. Yusuf gave them his shirt and said: "Take this, place it on father's face, he will see again."</p>

<p>When Yusuf's shirt touched Ya'qub's face, his vision returned. They gathered in Egypt — a family long separated.</p>

<p>For children: a parent's patience is a long du'a. Allah hears, even when the answer takes time.</p>`,
    },
    lessons: {
      id: [
        "Doakan anak terus-menerus — meski mereka jauh, meski tidak ada kabar.",
        "Sabar bukan diam tanpa rasa. Sabar adalah mengeluh kepada Allah, bukan kepada manusia.",
        "Setelah ujian yang panjang, Allah selalu mengumpulkan kembali yang terpisah — kalau bukan di dunia, di akhirat.",
      ],
      en: [
        "Keep praying for your children — even when they're far, even when there's no news.",
        "Patience isn't silence without feeling. Patience is complaining to Allah, not to people.",
        "After long trials, Allah always reunites what was separated — if not in this world, then the next.",
      ],
    },
    relatedDoa: ["doa-untuk-orang-tua"],
    searchQuery: {
      id: "kisah nabi yaqub dan yusuf",
      en: "story of prophet yaqub and yusuf",
    },
    published: "2026-05-28",
  },

  {
    slug: "yusuf",
    order: 11,
    name: { id: "Nabi Yusuf", en: "Prophet Yusuf (Joseph)" },
    arabicName: "يُوسُف",
    era: { id: "Anak ke-11 Ya'qub — kisahnya menjadi satu surah utuh", en: "11th son of Ya'qub — his story is an entire surah" },
    keyMoment: {
      id: "Dibuang ke sumur, dijual sebagai budak, dipenjara — lalu menjadi raja Mesir dan menyelamatkan keluarganya.",
      en: "Thrown into a well, sold as a slave, imprisoned — then became ruler of Egypt and saved his family.",
    },
    story: {
      id: `<p>Sebagai anak kecil, Yusuf bermimpi melihat 11 bintang, matahari, dan bulan sujud kepadanya. Ayahnya, Nabi Ya'qub, berpesan agar Yusuf tidak menceritakan mimpinya kepada saudara-saudaranya — karena dia tahu mereka akan iri.</p>

<p>Tapi 10 saudara Yusuf sudah iri. Mereka membawa Yusuf jauh dari rumah dan melemparkannya ke sumur. Lalu menjual bajunya dengan darah palsu kepada ayah mereka. Yusuf diambil pedagang yang lewat dan dijual sebagai budak di Mesir.</p>

<p>Di Mesir, Yusuf dibeli oleh seorang menteri. Istri sang menteri mencoba menggoda Yusuf, tapi Yusuf menolak. Karena difitnah, dia dipenjara — meski tidak bersalah.</p>

<p>Di penjara, Yusuf menafsirkan mimpi dua tahanan dengan benar. Beberapa tahun kemudian, raja Mesir bermimpi yang aneh, dan Yusuf-lah yang bisa menafsirkannya: akan datang 7 tahun panen baik diikuti 7 tahun kelaparan. Yusuf menyarankan menyimpan hasil panen 7 tahun pertama.</p>

<p>Raja terkesan. Yusuf diangkat menjadi bendahara negara. Saat kelaparan tiba, banyak orang dari berbagai negeri datang ke Mesir mencari makanan — termasuk saudara-saudara Yusuf yang dulu membuangnya.</p>

<p>Yusuf mengenali mereka, tapi mereka tidak mengenalinya. Setelah beberapa kali bertemu, Yusuf mengaku: "Aku Yusuf, dan ini saudaraku." Saudara-saudaranya malu dan menyesal. Yusuf berkata: <em>"Tidak ada celaan atas kalian hari ini. Semoga Allah mengampuni kalian."</em></p>

<p>Mimpi masa kecilnya terbukti: ayah, ibu tiri, dan 11 saudaranya sujud hormat — bukan menyembah Yusuf, tapi mensyukuri pertemuan.</p>`,
      en: `<p>As a young boy, Yusuf dreamed of 11 stars, the sun, and the moon prostrating to him. His father, Prophet Ya'qub, warned him not to tell his brothers — knowing they would be jealous.</p>

<p>But Yusuf's 10 brothers were already jealous. They took Yusuf far from home and threw him in a well. Then sold his shirt with fake blood to their father. Yusuf was taken by passing traders and sold as a slave in Egypt.</p>

<p>In Egypt, Yusuf was bought by a minister. The minister's wife tried to seduce Yusuf, but Yusuf refused. Falsely accused, he was imprisoned — though innocent.</p>

<p>In prison, Yusuf interpreted two prisoners' dreams correctly. Years later, the king of Egypt had a strange dream, and only Yusuf could interpret it: seven years of good harvest would be followed by seven years of famine. Yusuf advised storing the first seven years' harvest.</p>

<p>The king was impressed. Yusuf became state treasurer. When the famine came, people from many lands came to Egypt seeking food — including the brothers who had abandoned him.</p>

<p>Yusuf recognized them, but they didn't recognize him. After several meetings, Yusuf revealed himself: "I am Yusuf, and this is my brother." His brothers were ashamed and remorseful. Yusuf said: <em>"There is no blame on you today. May Allah forgive you."</em></p>

<p>His childhood dream came true: father, stepmother, and 11 brothers bowed in respect — not worshipping Yusuf, but grateful for the reunion.</p>`,
    },
    lessons: {
      id: [
        "Jangan pamerkan kelebihan ke orang yang bisa iri — termasuk saudara sendiri.",
        "Difitnah dan dipenjara tanpa salah bukan akhir. Allah punya rencana yang lebih besar.",
        "Memaafkan orang yang pernah menyakiti kita adalah puncak kemuliaan.",
      ],
      en: [
        "Don't show off your gifts to those who might envy — including your own siblings.",
        "Being falsely accused and imprisoned isn't the end. Allah has a larger plan.",
        "Forgiving those who hurt us is the peak of nobility.",
      ],
    },
    searchQuery: {
      id: "kisah nabi yusuf untuk anak singkat",
      en: "story of prophet yusuf for kids",
    },
    published: "2026-05-28",
  },

  {
    slug: "ayyub",
    order: 12,
    name: { id: "Nabi Ayyub", en: "Prophet Ayyub (Job)" },
    arabicName: "أَيُّوب",
    era: { id: "Hidup di tanah Uz, sekitar zaman Bani Israil awal", en: "Lived in the land of Uz, around early Children of Israel times" },
    keyMoment: {
      id: "Diuji dengan kehilangan harta, anak, dan kesehatan — tetap bersyukur sampai dipulihkan.",
      en: "Tested with loss of wealth, children, and health — kept giving thanks until restored.",
    },
    story: {
      id: `<p>Nabi Ayyub dulunya orang yang sangat kaya — tanah, ternak, kebun, anak-anak yang sehat. Allah ingin menguji apakah ibadahnya tulus karena nikmat, atau karena Allah sendiri.</p>

<p>Pertama, hartanya hilang semua. Ayyub bersyukur: "Allah yang memberi, Allah yang mengambil. Terpujilah nama Allah."</p>

<p>Kedua, semua anaknya wafat. Ayyub menangis tapi berkata: "Innaa lillaahi wa innaa ilaihi raji'uun." Tidak menyalahkan Allah.</p>

<p>Ketiga, tubuh Ayyub terkena penyakit kulit yang parah. Selama 18 tahun dia menderita. Hanya istrinya yang setia yang merawatnya. Orang-orang menjauhinya. Tapi setiap hari Ayyub tetap berdoa kepada Allah.</p>

<p>Akhirnya Ayyub berkata dengan sangat sopan kepada Allah: <em>"(Ya Tuhanku), sesungguhnya aku ditimpa penyakit, dan Engkau Maha Penyayang dari semua yang penyayang."</em> (QS. Al-Anbiya: 83) — perhatikan: Ayyub tidak menuntut, hanya menyampaikan keadaannya.</p>

<p>Allah memerintahkan Ayyub menghentakkan kakinya ke tanah. Keluarlah mata air. Allah menyuruhnya minum dan mandi dengan air itu. Penyakitnya hilang. Allah mengembalikan hartanya dua kali lipat. Allah pun mengganti anak-anaknya.</p>

<p>Untuk anak: orang yang paling sabar bukan yang tidak merasakan sakit — tapi yang sakit dan tetap berkata "alhamdulillah."</p>`,
      en: `<p>Prophet Ayyub was once very wealthy — land, livestock, gardens, healthy children. Allah wanted to test whether his worship was sincere because of blessings, or because of Allah Himself.</p>

<p>First, all his wealth was lost. Ayyub gave thanks: "Allah gives, Allah takes. Praised be Allah's name."</p>

<p>Second, all his children passed away. Ayyub wept but said: "Innaa lillaahi wa innaa ilaihi raji'uun." He didn't blame Allah.</p>

<p>Third, Ayyub's body was struck with severe skin disease. For 18 years he suffered. Only his loyal wife cared for him. People distanced themselves. But every day Ayyub kept praying to Allah.</p>

<p>Finally Ayyub said very politely to Allah: <em>"(My Lord), affliction has touched me, and You are the Most Merciful of those who show mercy."</em> (Al-Anbiya: 83) — notice: Ayyub didn't demand, only described his state.</p>

<p>Allah commanded Ayyub to strike the ground with his foot. A spring burst forth. Allah told him to drink and bathe in that water. His illness disappeared. Allah returned his wealth doubled. Allah also replaced his children.</p>

<p>For children: the most patient person isn't one who feels no pain — but one who feels pain and still says "alhamdulillah."</p>`,
    },
    lessons: {
      id: [
        "Sabar bukan tidak merasa sakit. Sabar adalah tetap percaya Allah saat sedang sakit.",
        "Cara bicara kepada Allah: sopan, tidak menuntut, sampaikan keadaan.",
        "Setelah ujian yang panjang, Allah mengembalikan dengan berlipat — kalau bukan di dunia, di akhirat.",
      ],
      en: [
        "Patience isn't feeling no pain. Patience is still trusting Allah while in pain.",
        "How to speak to Allah: politely, without demanding, just describe your state.",
        "After long trials, Allah restores manifold — if not in this world, in the next.",
      ],
    },
    searchQuery: {
      id: "kisah nabi ayub dan sabar",
      en: "story of prophet ayyub and patience",
    },
    published: "2026-05-28",
  },

  {
    slug: "syuaib",
    order: 13,
    name: { id: "Nabi Syu'aib", en: "Prophet Syu'aib (Shuaib)" },
    arabicName: "شُعَيْب",
    era: { id: "Diutus ke kaum Madyan — kota dagang yang penuh kecurangan", en: "Sent to Madyan — a trading city full of fraud" },
    keyMoment: {
      id: "Mengajak kaumnya berdagang jujur — diabaikan, mereka dibinasakan gempa.",
      en: "Called his people to honest trade — ignored, they were destroyed by an earthquake.",
    },
    story: {
      id: `<p>Nabi Syu'aib diutus kepada kaum Madyan — kota perdagangan yang strategis di jalur antara Hijaz dan Syam. Mereka kaya dari berdagang, tapi suka curang: mengurangi takaran dan timbangan, menipu pembeli, merampok pelancong.</p>

<p>Syu'aib berkata: <em>"Sempurnakanlah takaran dan timbangan dengan adil. Janganlah kamu rugikan manusia pada hak-haknya."</em> (QS. Hud: 85). Dia juga mengajak mereka menyembah Allah saja.</p>

<p>Mereka menjawab dengan ejekan: "Apakah sembahyangmu yang menyuruh kamu mengajari kami meninggalkan apa yang disembah nenek moyang kami, atau melarang kami berbuat apa yang kami kehendaki tentang harta kami?"</p>

<p>Syu'aib tetap sabar berdakwah. Dia bilang: <em>"Aku tidak ingin menyalahi kalian dalam apa yang aku larang dari kalian. Aku hanya ingin perbaikan sebatas kemampuanku."</em></p>

<p>Mereka tetap menolak. Akhirnya Allah mengirim gempa bumi dahsyat. Kota Madyan hancur dalam semalam. Hanya Syu'aib dan pengikutnya yang selamat.</p>

<p>Karena kefasihan dan kesabarannya berdakwah, Syu'aib mendapat julukan "Khatibul Anbiya" — Pengkhotbah para Nabi.</p>

<p>Untuk anak: jujur dalam transaksi sekecil apa pun — kembalian, timbangan, janji, antrian — adalah ibadah.</p>`,
      en: `<p>Prophet Syu'aib was sent to the people of Madyan — a strategic trading city on the route between Hijaz and Syam. They were wealthy from trade, but loved to cheat: shortchanging measures and weights, deceiving customers, robbing travelers.</p>

<p>Syu'aib said: <em>"Give full measure and weight with justice. Do not deprive people of their rights."</em> (Hud: 85). He also called them to worship Allah alone.</p>

<p>They mocked: "Does your prayer command you to teach us to leave what our forefathers worshipped, or to forbid us from doing what we want with our wealth?"</p>

<p>Syu'aib remained patient. He said: <em>"I don't wish to differ from you in what I forbid you from. I only want reform within my capacity."</em></p>

<p>They kept refusing. Eventually Allah sent a terrible earthquake. Madyan was destroyed overnight. Only Syu'aib and his followers survived.</p>

<p>For his eloquence and patience in preaching, Syu'aib earned the title "Khatib al-Anbiya" — Preacher of the Prophets.</p>

<p>For children: honesty in the smallest transactions — change, weights, promises, queues — is worship.</p>`,
    },
    lessons: {
      id: [
        "Allah peduli pada hal-hal yang kelihatannya 'urusan dunia' — termasuk timbangan di pasar.",
        "Kekayaan yang didapat dengan curang akhirnya rusak.",
        "Berdakwah dengan lemah lembut tetap penting, meski kaum menolak.",
      ],
      en: [
        "Allah cares about what seem like 'worldly matters' — including scales in the market.",
        "Wealth gained dishonestly eventually ruins.",
        "Preaching gently is still important, even when people refuse.",
      ],
    },
    searchQuery: {
      id: "kisah nabi syuaib dan kaum madyan",
      en: "story of prophet shuaib",
    },
    published: "2026-05-28",
  },

  {
    slug: "musa",
    order: 14,
    name: { id: "Nabi Musa", en: "Prophet Musa (Moses)" },
    arabicName: "مُوسَى",
    era: { id: "Mesir kuno, zaman Fir'aun", en: "Ancient Egypt, era of Pharaoh" },
    keyMoment: {
      id: "Bayi yang dihanyutkan, dibesarkan di istana musuhnya, lalu memimpin Bani Israil keluar dari Mesir.",
      en: "A baby set adrift, raised in his enemy's palace, then led the Children of Israel out of Egypt.",
    },
    story: {
      id: `<p>Fir'aun di Mesir bermimpi seorang bayi laki-laki dari Bani Israil akan menjatuhkan kekuasaannya. Dia memerintahkan setiap bayi laki-laki Bani Israil dibunuh. Saat Musa lahir, ibunya diilhami Allah: "Hanyutkan dia di sungai. Aku akan kembalikan kepadamu."</p>

<p>Ibu Musa memasukkan Musa dalam keranjang dan menghanyutkannya di Sungai Nil. Keranjang itu sampai di taman istana Fir'aun. Istri Fir'aun, Asiyah, menemukan dan jatuh cinta pada bayi itu. Lebih luar biasa: Allah mengatur Musa hanya mau menyusu dari ibunya sendiri — yang dipanggil ke istana sebagai "pengasuh."</p>

<p>Musa tumbuh dewasa di istana Fir'aun. Suatu hari dia tidak sengaja membunuh seorang Mesir saat membela seorang Bani Israil. Dia kabur ke Madyan, dimana dia bertemu Nabi Syu'aib, menikah dengan putrinya, dan menggembala kambing selama 10 tahun.</p>

<p>Saat kembali ke Mesir, Allah berbicara langsung kepadanya di Gunung Sinai — di pohon yang menyala. Allah memerintahkannya menghadap Fir'aun. Allah memberinya dua mukjizat: tongkat yang bisa jadi ular besar, dan tangan yang bercahaya.</p>

<p>Fir'aun menolak. Setelah 9 mukjizat (banjir, belalang, kutu, katak, darah, dll), akhirnya Musa membawa Bani Israil keluar dari Mesir. Fir'aun mengejar dengan pasukan. Saat sampai di Laut Merah, Musa memukul air dengan tongkatnya — laut terbelah. Bani Israil menyeberang. Fir'aun ikut, dan laut menutup di atasnya.</p>

<p>Musa adalah satu-satunya nabi yang berbicara langsung dengan Allah tanpa perantara. Dia disebut "Kalimullah" — yang diajak bicara Allah.</p>`,
      en: `<p>Pharaoh in Egypt dreamed a male baby of the Children of Israel would topple his rule. He ordered every Israelite baby boy killed. When Musa was born, his mother was inspired by Allah: "Set him adrift on the river. I will return him to you."</p>

<p>Musa's mother placed him in a basket and floated it down the Nile. The basket reached the garden of Pharaoh's palace. Pharaoh's wife, Asiyah, found him and fell in love with the baby. Even more remarkable: Allah arranged that Musa would only nurse from his own mother — who was called to the palace as a "nurse."</p>

<p>Musa grew up in Pharaoh's palace. One day he accidentally killed an Egyptian while defending an Israelite. He fled to Madyan, where he met Prophet Syu'aib, married his daughter, and herded sheep for 10 years.</p>

<p>When he returned to Egypt, Allah spoke directly to him at Mount Sinai — at the burning tree. Allah commanded him to face Pharaoh. Allah gave him two miracles: a staff that became a great serpent, and a hand that glowed.</p>

<p>Pharaoh refused. After nine miracles (floods, locusts, lice, frogs, blood, etc.), Musa finally led the Children of Israel out of Egypt. Pharaoh pursued with his army. At the Red Sea, Musa struck the water with his staff — the sea split. The Israelites crossed. Pharaoh followed, and the sea closed over him.</p>

<p>Musa is the only prophet who spoke directly with Allah without intermediary. He is called "Kalimullah" — the one Allah spoke to.</p>`,
    },
    lessons: {
      id: [
        "Allah bisa membesarkan musuh kekuasaan zalim di dalam istana zalim itu sendiri.",
        "Tidak ada kebebasan tanpa keberanian — Musa bisa saja terus tinggal nyaman di istana.",
        "Mukjizat sebesar laut terbelah hanya muncul setelah kita melangkah lebih dulu dengan iman.",
      ],
      en: [
        "Allah can raise the enemy of tyranny inside the tyrant's own palace.",
        "There's no freedom without courage — Musa could have stayed comfortable in the palace.",
        "A miracle as big as the sea parting only appears after we step forward in faith first.",
      ],
    },
    relatedSurah: ["al-fatihah"],
    searchQuery: {
      id: "kisah nabi musa dan firaun untuk anak",
      en: "story of prophet musa and pharaoh for kids",
    },
    published: "2026-05-28",
  },

  {
    slug: "harun",
    order: 15,
    name: { id: "Nabi Harun", en: "Prophet Harun (Aaron)" },
    arabicName: "هَارُون",
    era: { id: "Kakak Nabi Musa — partner dakwah", en: "Older brother of Musa — partner in mission" },
    keyMoment: {
      id: "Menemani Musa menghadapi Fir'aun, dan menjaga Bani Israil saat Musa pergi ke Sinai.",
      en: "Accompanied Musa facing Pharaoh, and guarded the Children of Israel when Musa went to Sinai.",
    },
    story: {
      id: `<p>Saat Musa dipanggil Allah untuk menghadap Fir'aun, dia merasa lidahnya kelu — dia memang sedikit gagap sejak kecil. Musa berdoa: <em>"Ya Tuhanku, lapangkanlah dadaku, lancarkan urusanku, dan lepaskanlah simpul dari lidahku. Jadikan Harun saudaraku sebagai pembantuku."</em> (QS. Taha: 25–30)</p>

<p>Allah mengabulkan. Harun, yang fasih bicaranya, diangkat menjadi nabi dan diutus mendampingi Musa. Bersama mereka berdua menghadap Fir'aun.</p>

<p>Saat Musa pergi ke Gunung Sinai untuk menerima Taurat (40 hari), dia menitipkan Bani Israil kepada Harun: "Gantikan aku di tengah kaumku. Perbaiki, dan jangan ikuti jalan orang yang berbuat kerusakan."</p>

<p>Tapi saat itu, seseorang bernama Samiri membuat patung anak sapi dari emas dan mengaku itulah tuhan Bani Israil. Banyak yang ikut menyembah. Harun mencoba menasihati: "Sungguh kalian hanya diuji. Tuhan kalian sebenarnya adalah Yang Maha Pengasih. Ikutilah aku."</p>

<p>Sebagian besar menolak. Mereka mengancam Harun. Saat Musa kembali dan marah, Harun berkata: <em>"Wahai anak ibuku, jangan pegang janggutku dan jangan tarik rambutku. Aku takut kamu akan berkata 'kamu telah memecah belah Bani Israil.'"</em></p>

<p>Musa menyadari Harun benar — dia memilih bertahan tanpa pertumpahan darah daripada bertindak keras.</p>`,
      en: `<p>When Musa was called by Allah to face Pharaoh, he felt his tongue was tied — he had a slight stutter from childhood. Musa prayed: <em>"My Lord, expand my chest, ease my task, untie the knot from my tongue. Make Harun, my brother, my helper."</em> (Taha: 25–30)</p>

<p>Allah granted it. Harun, who was fluent in speech, was made a prophet and sent to accompany Musa. Together they faced Pharaoh.</p>

<p>When Musa went to Mount Sinai to receive the Torah (40 days), he entrusted the Children of Israel to Harun: "Take my place among my people. Reform, and don't follow the path of corruptors."</p>

<p>But during that time, a man named Samiri made a golden calf and claimed it was the Children of Israel's god. Many followed in worship. Harun tried to counsel: "You are only being tested. Your real Lord is the Most Merciful. Follow me."</p>

<p>Most refused. They threatened Harun. When Musa returned and grew angry, Harun said: <em>"O son of my mother, don't grab my beard, don't pull my hair. I feared you would say 'you've divided the Children of Israel.'"</em></p>

<p>Musa realized Harun was right — he chose to hold the people together without bloodshed rather than act harshly.</p>`,
    },
    lessons: {
      id: [
        "Setiap orang punya kelemahan. Doa Musa: 'tambahkan Harun untukku' — tidak gengsi minta bantuan.",
        "Pemimpin yang baik tahu kapan harus tegas, kapan harus menjaga persatuan.",
        "Saudara yang baik adalah yang menemani dakwah, bukan yang membiarkan kita sendirian.",
      ],
      en: [
        "Everyone has weaknesses. Musa's du'a: 'add Harun for me' — not too proud to ask for help.",
        "A good leader knows when to be firm, when to preserve unity.",
        "A good brother accompanies the mission, not leaves us alone.",
      ],
    },
    searchQuery: {
      id: "kisah nabi harun saudara musa",
      en: "story of prophet harun brother of musa",
    },
    published: "2026-05-28",
  },

  {
    slug: "dzulkifli",
    order: 16,
    name: { id: "Nabi Dzulkifli", en: "Prophet Dzulkifli" },
    arabicName: "ذُو الْكِفْل",
    era: { id: "Setelah masa Nabi Ayyub", en: "After Prophet Ayyub's era" },
    keyMoment: {
      id: "Memilih dirinya sendiri untuk tugas berat — tiga janji: puasa, qiyam, dan tidak marah saat memerintah.",
      en: "Volunteered for a heavy task — three promises: fasting, qiyam, and not getting angry while ruling.",
    },
    story: {
      id: `<p>Ada seorang raja yang sudah tua dan ingin menyerahkan kekuasaannya. Dia memanggil rakyatnya dan berkata: "Siapa yang sanggup tiga hal ini — berpuasa setiap hari, sholat malam (qiyam), dan tidak marah saat memerintah — akan kuangkat jadi penggantiku."</p>

<p>Semua diam. Tiga hal itu berat. Tiba-tiba seorang pemuda berdiri: "Saya sanggup, ya Raja." Pemuda itu Dzulkifli. Raja tidak yakin: "Kamu masih muda. Bisa kamu lakukan?" Dzulkifli mengangguk.</p>

<p>Saat menjadi raja, Dzulkifli memenuhi tiga janjinya. Puasa setiap hari. Sholat malam selalu. Tidak marah saat memutuskan perkara, meski rakyat datang silih berganti dengan masalah.</p>

<p>Suatu hari, ada orang yang sengaja datang berkali-kali, di waktu istirahat Dzulkifli, hanya untuk membuatnya marah. Tapi Dzulkifli tetap melayaninya dengan sabar.</p>

<p>Allah memuji Dzulkifli dalam Al-Qur'an: <em>"Dan ingatlah Isma'il, Ilyasa', dan Dzulkifli. Semuanya termasuk orang-orang yang paling baik."</em> (QS. Sad: 48)</p>

<p>Nama "Dzulkifli" sendiri berarti "yang memiliki bagian" — yaitu yang sanggup menanggung beban besar.</p>

<p>Untuk anak: jangan janji yang tidak bisa ditepati. Tapi kalau sudah berjanji, tepati — meski berat.</p>`,
      en: `<p>There was an aged king who wanted to hand over his rule. He called his people and said: "Whoever can do three things — fast every day, pray night prayer (qiyam), and not get angry while ruling — I will appoint as my successor."</p>

<p>All were silent. Three things are heavy. Suddenly a young man stood: "I can, O King." That young man was Dzulkifli. The king was unsure: "You are still young. Can you do it?" Dzulkifli nodded.</p>

<p>As king, Dzulkifli fulfilled his three promises. Fasted every day. Always prayed night prayer. Did not get angry when judging cases, though people came one after another with problems.</p>

<p>One day, someone deliberately came again and again, during Dzulkifli's rest time, just to make him angry. But Dzulkifli served him patiently.</p>

<p>Allah praised Dzulkifli in the Qur'an: <em>"And remember Isma'il, Ilyasa', and Dzulkifli. All were among the most excellent."</em> (Sad: 48)</p>

<p>The name "Dzulkifli" itself means "the one with a portion" — one who can bear a great burden.</p>

<p>For children: don't promise what you can't keep. But once you promise, keep it — even if heavy.</p>`,
    },
    lessons: {
      id: [
        "Jangan janji ringan-ringan. Tapi kalau sudah, tepati.",
        "Tidak marah saat menerima ujian dari orang lain adalah ibadah tersendiri.",
        "Umur muda bukan halangan untuk amanah besar — kalau ada kesiapan.",
      ],
      en: [
        "Don't promise lightly. But once you do, keep it.",
        "Not getting angry under provocation is its own worship.",
        "Young age isn't a barrier to great responsibility — if there's readiness.",
      ],
    },
    searchQuery: {
      id: "kisah nabi dzulkifli",
      en: "story of prophet dzulkifli",
    },
    published: "2026-05-28",
  },

  {
    slug: "daud",
    order: 17,
    name: { id: "Nabi Daud", en: "Prophet Daud (David)" },
    arabicName: "دَاوُد",
    era: { id: "Raja Bani Israil — penerima kitab Zabur", en: "King of the Children of Israel — recipient of the Zabur" },
    keyMoment: {
      id: "Mengalahkan raksasa Jalut dengan ketapel, lalu menjadi raja yang adil dan suaranya bisa menenangkan gunung.",
      en: "Defeated the giant Jalut (Goliath) with a sling, then became a just king whose voice calmed mountains.",
    },
    story: {
      id: `<p>Saat Nabi Daud masih muda, Bani Israil berperang melawan kaum Jalut. Pasukan Jalut punya raksasa bernama Jalut — sangat besar dan menakutkan. Tidak ada yang berani melawannya.</p>

<p>Daud muda maju. Dengan ketapel dan satu batu kecil, dia membidik dahi Jalut. Allah mengarahkan batu itu tepat ke kepalanya. Raksasa Jalut tumbang. Pasukan musuh berlari.</p>

<p>Setelah itu, Daud diangkat menjadi raja Bani Israil. Allah memberinya banyak karunia: suara yang sangat indah, sehingga ketika dia membaca Zabur, gunung-gunung dan burung-burung ikut bertasbih bersamanya. Allah juga melembutkan besi di tangannya — Daud bisa membentuk baju zirah seperti membentuk tanah liat.</p>

<p>Yang istimewa: Daud, meski raja, makan dari hasil tangannya sendiri. Setiap hari dia membuat baju zirah dan menjual hasilnya. Itu pelajaran dari Allah: kerja halal lebih mulia daripada hidup dari fasilitas negara.</p>

<p>Daud juga sangat adil dalam memutuskan perkara. Tapi suatu kali dia memutuskan terlalu cepat tanpa mendengar kedua pihak. Allah menegurnya lewat ujian — dan Daud langsung bertobat.</p>

<p>Untuk anak: kekuatan terbesar bukan ukuran badan. Daud kecil mengalahkan raksasa karena Allah bersamanya.</p>`,
      en: `<p>When Prophet Daud was young, the Children of Israel fought against Jalut's people. Jalut's army had a giant named Jalut (Goliath) — huge and terrifying. No one dared to face him.</p>

<p>Young Daud stepped forward. With a sling and one small stone, he aimed at Jalut's forehead. Allah guided the stone exactly to his head. The giant Jalut fell. The enemy army fled.</p>

<p>After this, Daud was made king of the Children of Israel. Allah gave him many gifts: a beautiful voice — when he recited the Zabur, mountains and birds glorified Allah with him. Allah also softened iron in his hands — Daud could shape armor like shaping clay.</p>

<p>What's special: though king, Daud ate from his own labor. Every day he made armor and sold it. That's a lesson from Allah: honest work is more honorable than living off state benefits.</p>

<p>Daud was also very just in judging cases. But once he judged too quickly without hearing both sides. Allah corrected him through a test — and Daud immediately repented.</p>

<p>For children: the greatest strength isn't body size. Little Daud defeated a giant because Allah was with him.</p>`,
    },
    lessons: {
      id: [
        "Yang penting di sisi Allah bukan ukuran tubuh — tapi keberanian dan iman.",
        "Cari rezeki dengan tangan sendiri — itu sunnah para nabi, termasuk raja Daud.",
        "Sebelum memutuskan, dengar dulu kedua pihak. Adil butuh kesabaran.",
      ],
      en: [
        "What matters to Allah isn't body size — but courage and faith.",
        "Earn your living with your own hands — the way of the prophets, including King Daud.",
        "Before deciding, hear both sides. Justice requires patience.",
      ],
    },
    searchQuery: {
      id: "kisah nabi daud dan jalut",
      en: "story of prophet daud and goliath",
    },
    published: "2026-05-28",
  },

  {
    slug: "sulaiman",
    order: 18,
    name: { id: "Nabi Sulaiman", en: "Prophet Sulaiman (Solomon)" },
    arabicName: "سُلَيْمَان",
    era: { id: "Anak Nabi Daud — kerajaan yang belum pernah ada sebelumnya", en: "Son of Daud — a kingdom unlike any before" },
    keyMoment: {
      id: "Diberi kekuasaan atas jin, hewan, dan angin — tetap menyebut dirinya 'hamba yang banyak kembali kepada Allah.'",
      en: "Given dominion over jinn, animals, and the wind — yet called himself 'a servant who returns much to Allah.'",
    },
    story: {
      id: `<p>Nabi Sulaiman adalah anak Nabi Daud. Saat ayahnya wafat, Sulaiman menjadi raja. Tapi dia tidak mau jadi raja biasa. Dia berdoa: <em>"Ya Tuhanku, ampunilah aku dan anugerahkan kepadaku kerajaan yang tidak dimiliki oleh seorang pun setelahku."</em> (QS. Sad: 35)</p>

<p>Allah mengabulkan. Sulaiman diberi:</p>

<ul>
  <li>Kuasa atas <strong>jin</strong> — mereka tunduk membangun apa pun yang dia perintahkan.</li>
  <li>Kuasa atas <strong>angin</strong> — dia bisa terbang dari satu kerajaan ke kerajaan lain dalam sekejap.</li>
  <li>Kemampuan <strong>memahami bahasa hewan</strong> — dia tahu apa kata semut, burung, ikan.</li>
</ul>

<p>Suatu hari Sulaiman lewat dengan pasukan besar. Seekor semut berkata kepada teman-temannya: "Masuk ke sarang kalian! Jangan sampai Sulaiman dan tentaranya menginjak kalian tanpa sadar." Sulaiman mendengar dan tersenyum: <em>"Ya Tuhanku, anugerahkanlah kepadaku ilham untuk tetap mensyukuri nikmat-Mu yang telah Engkau anugerahkan kepadaku dan kepada kedua orang tuaku."</em> (QS. An-Naml: 19)</p>

<p>Sulaiman juga bertemu Ratu Bilqis dari Saba' (Yaman). Dia mengajaknya kepada Allah. Bilqis akhirnya beriman.</p>

<p>Yang luar biasa: dengan semua kekuasaan itu, Sulaiman tetap rendah hati. Dia tidak pernah lupa bahwa semua itu dari Allah. Saat wafat, dia sedang bersandar pada tongkatnya, dan tubuhnya tetap tegak — hingga rayap memakan tongkatnya.</p>

<p>Untuk anak: kalau Allah memberi kelebihan (pintar, kuat, kaya), tetap ingat — semua itu pinjaman.</p>`,
      en: `<p>Prophet Sulaiman was the son of Prophet Daud. When his father passed, Sulaiman became king. But he didn't want to be an ordinary king. He prayed: <em>"My Lord, forgive me, and grant me a kingdom such as none after me will possess."</em> (Sad: 35)</p>

<p>Allah granted it. Sulaiman was given:</p>

<ul>
  <li>Power over <strong>jinn</strong> — they obeyed him to build whatever he commanded.</li>
  <li>Power over <strong>the wind</strong> — he could fly from one kingdom to another in moments.</li>
  <li>The ability to <strong>understand animal speech</strong> — he knew what ants, birds, fish said.</li>
</ul>

<p>One day Sulaiman passed with a great army. An ant said to her companions: "Enter your nests! Lest Sulaiman and his soldiers trample you unknowingly." Sulaiman heard and smiled: <em>"My Lord, inspire me to keep giving thanks for the blessings You have bestowed on me and my parents."</em> (An-Naml: 19)</p>

<p>Sulaiman also met Queen Bilqis of Saba (Yemen). He invited her to Allah. Bilqis eventually believed.</p>

<p>What's remarkable: with all that power, Sulaiman stayed humble. He never forgot all of it was from Allah. When he died, he was leaning on his staff, and his body remained upright — until termites consumed the staff.</p>

<p>For children: when Allah gives extra (intelligence, strength, wealth), remember — it's all on loan.</p>`,
    },
    lessons: {
      id: [
        "Doakan kelebihan, tapi kelebihan untuk mengabdi pada Allah — bukan untuk pamer.",
        "Yang paling kuat tahu cara menghormati yang paling kecil — Sulaiman senyum mendengar semut.",
        "Kekuasaan terbesar di tangan orang yang paling rendah hati.",
      ],
      en: [
        "Pray for greatness — but greatness in Allah's service, not in showing off.",
        "The mightiest know how to respect the smallest — Sulaiman smiled at the ant.",
        "The greatest power is in the hands of the most humble.",
      ],
    },
    searchQuery: {
      id: "kisah nabi sulaiman dan semut",
      en: "story of prophet sulaiman and the ant",
    },
    published: "2026-05-28",
  },

  {
    slug: "ilyas",
    order: 19,
    name: { id: "Nabi Ilyas", en: "Prophet Ilyas (Elijah)" },
    arabicName: "إِلْيَاس",
    era: { id: "Bani Israil setelah masa Sulaiman — saat mereka menyembah berhala Ba'al", en: "Children of Israel after Sulaiman — when they worshipped the idol Ba'al" },
    keyMoment: {
      id: "Berseru pada kaumnya yang menyembah berhala bernama Ba'al — diabaikan, lalu Allah uji mereka dengan kemarau.",
      en: "Called his people away from worshipping the idol Ba'al — ignored, then Allah tested them with drought.",
    },
    story: {
      id: `<p>Setelah Nabi Sulaiman wafat, Bani Israil mulai menyimpang. Sebagian kelompok mulai menyembah berhala bernama Ba'al — patung dari emas yang besar. Allah mengutus Nabi Ilyas untuk mengembalikan mereka.</p>

<p>Ilyas berkata: <em>"Apakah kamu tidak bertakwa? Apakah kamu menyembah Ba'al dan meninggalkan sebaik-baik Pencipta — Allah, Tuhanmu dan Tuhan nenek moyangmu yang dahulu?"</em> (QS. As-Saffat: 124–126)</p>

<p>Mereka menolak. Bahkan mengusir Ilyas. Allah pun mengirim ujian: kemarau panjang selama 3,5 tahun. Tanaman mati, ternak mati, sumur kering.</p>

<p>Setelah penderitaan yang panjang, sebagian kaum Ilyas akhirnya kembali kepada Allah. Mereka mencari Ilyas untuk minta doa. Ilyas berdoa, dan Allah menurunkan hujan deras.</p>

<p>Sebagian besar masih tetap menyembah Ba'al. Allah memuji Ilyas dalam Al-Qur'an dan menyebutnya termasuk orang-orang saleh.</p>

<p>Untuk anak: terkadang Allah memberi kesusahan supaya kita kembali mengingat-Nya. Hujan yang lama tidak datang, makanan yang berkurang — itu juga cara Allah memanggil.</p>`,
      en: `<p>After Prophet Sulaiman passed away, the Children of Israel began to stray. Some groups began worshipping an idol called Ba'al — a large gold statue. Allah sent Prophet Ilyas to bring them back.</p>

<p>Ilyas said: <em>"Will you not be mindful? Will you worship Ba'al and forsake the best of Creators — Allah, your Lord and the Lord of your ancestors?"</em> (As-Saffat: 124–126)</p>

<p>They refused. They even cast out Ilyas. So Allah sent a trial: a long drought for 3.5 years. Plants died, livestock died, wells dried up.</p>

<p>After long suffering, some of Ilyas's people finally returned to Allah. They sought Ilyas to ask for prayer. Ilyas prayed, and Allah sent heavy rain.</p>

<p>Most still kept worshipping Ba'al. Allah praised Ilyas in the Qur'an and counted him among the righteous.</p>

<p>For children: sometimes Allah sends difficulty so we return to remembering Him. Rain that's late, food that's scarce — that too is Allah's way of calling us.</p>`,
    },
    lessons: {
      id: [
        "Allah memanggil hamba-Nya yang lupa dengan berbagai cara — kadang lembut, kadang dengan ujian.",
        "Berdakwah meski sendirian dan diusir.",
        "Doa orang yang bertaqwa membuka pintu rahmat.",
      ],
      en: [
        "Allah calls forgetful servants in various ways — sometimes gently, sometimes through trial.",
        "Keep preaching even when alone and rejected.",
        "The du'a of the God-conscious opens the door of mercy.",
      ],
    },
    searchQuery: {
      id: "kisah nabi ilyas dan kaum baal",
      en: "story of prophet ilyas",
    },
    published: "2026-05-28",
  },

  {
    slug: "ilyasa",
    order: 20,
    name: { id: "Nabi Ilyasa'", en: "Prophet Ilyasa' (Elisha)" },
    arabicName: "الْيَسَع",
    era: { id: "Penerus dakwah Nabi Ilyas", en: "Successor of Prophet Ilyas's mission" },
    keyMoment: {
      id: "Murid setia Ilyas yang melanjutkan dakwah setelah gurunya wafat.",
      en: "Loyal student of Ilyas who continued the mission after his teacher's passing.",
    },
    story: {
      id: `<p>Ilyasa' adalah murid setia Nabi Ilyas. Sejak muda dia menemani Ilyas berdakwah, belajar dari beliau, dan menyaksikan banyak peristiwa. Ketika Ilyas mulai tua, dia menunjuk Ilyasa' sebagai penerusnya.</p>

<p>Setelah Ilyas wafat, Ilyasa' meneruskan dakwah ke Bani Israil. Kaumnya masih banyak yang menyimpang. Ilyasa' mengajak mereka kembali kepada Allah dengan sabar.</p>

<p>Yang istimewa dari Nabi Ilyasa': beliau tidak punya cerita-cerita besar yang dramatis dalam Al-Qur'an. Beliau hanya disebut dalam dua ayat. Tapi Allah memujinya: <em>"Dan ingatlah Isma'il, Ilyasa', dan Dzulkifli. Semuanya termasuk orang-orang yang paling baik."</em> (QS. Sad: 48)</p>

<p>Untuk anak: tidak semua orang yang Allah cintai memiliki kisah dramatis. Banyak hamba-Nya yang istimewa justru karena ketekunan yang tidak menonjol — yang dilakukan setiap hari tanpa drama.</p>

<p>Beberapa generasi setelah Ilyasa' wafat, sebagian besar Bani Israil makin jauh dari Allah — sampai akhirnya Allah mengirim nabi-nabi berikutnya: Yunus, Zakariya, Yahya, Isa.</p>`,
      en: `<p>Ilyasa' was the faithful student of Prophet Ilyas. From youth he accompanied Ilyas in his mission, learned from him, and witnessed many events. When Ilyas grew old, he appointed Ilyasa' as his successor.</p>

<p>After Ilyas passed away, Ilyasa' continued the mission to the Children of Israel. Many of his people had strayed. Ilyasa' patiently called them back to Allah.</p>

<p>What's special about Prophet Ilyasa': he doesn't have dramatic stories in the Qur'an. He's only mentioned in two verses. But Allah praised him: <em>"And remember Isma'il, Ilyasa', and Dzulkifli. All were among the most excellent."</em> (Sad: 48)</p>

<p>For children: not everyone Allah loves has a dramatic story. Many of His special servants are special precisely for unflashy persistence — done every day without drama.</p>

<p>Several generations after Ilyasa' died, most of the Children of Israel grew even further from Allah — until finally Allah sent the next prophets: Yunus, Zakariya, Yahya, Isa.</p>`,
    },
    lessons: {
      id: [
        "Tidak harus heboh untuk dicintai Allah. Ketekunan setiap hari sudah cukup.",
        "Murid yang baik menjadi penerus yang baik.",
        "Allah memuji yang konsisten, bahkan kalau tidak banyak cerita yang menempel.",
      ],
      en: [
        "You don't have to be dramatic to be loved by Allah. Daily diligence is enough.",
        "A good student becomes a good successor.",
        "Allah praises the consistent, even when not many stories are remembered.",
      ],
    },
    searchQuery: {
      id: "kisah nabi ilyasa",
      en: "story of prophet ilyasa",
    },
    published: "2026-05-28",
  },

  {
    slug: "yunus",
    order: 21,
    name: { id: "Nabi Yunus", en: "Prophet Yunus (Jonah)" },
    arabicName: "يُونُس",
    era: { id: "Diutus ke Niniwe — kota besar di Asyur", en: "Sent to Nineveh — a great city of Assyria" },
    keyMoment: {
      id: "Marah meninggalkan kaumnya — ditelan ikan besar — berdoa di dalam perut ikan dan diselamatkan.",
      en: "Angrily left his people — swallowed by a great fish — prayed inside the fish and was rescued.",
    },
    story: {
      id: `<p>Allah mengutus Nabi Yunus ke kota Niniwe, kota yang sangat besar di tanah Asyur. Penduduknya sekitar 100.000 orang dan mereka menyembah berhala. Yunus berdakwah dengan keras, tapi mereka menolak.</p>

<p>Setelah lama tidak ada yang beriman, Yunus marah. Dia meninggalkan kota tanpa menunggu perintah Allah. Dia naik kapal dan pergi.</p>

<p>Saat di laut, badai besar datang. Kapal hampir tenggelam. Para penumpang mengundi siapa yang harus dilemparkan ke laut untuk meringankan kapal. Undian jatuh pada Yunus. Mereka mengulang tiga kali — tetap jatuh pada Yunus. Akhirnya dia dilempar ke laut.</p>

<p>Allah mengirim seekor ikan besar (nun/paus) yang menelan Yunus utuh-utuh. Di dalam perut ikan, di tiga kegelapan (kegelapan perut ikan, kegelapan laut, kegelapan malam), Yunus berdoa:</p>

<p style="font-family: var(--font-arabic); font-size: 24px; text-align: right; direction: rtl;">لَا إِلَٰهَ إِلَّا أَنْتَ سُبْحَانَكَ إِنِّي كُنْتُ مِنَ الظَّالِمِينَ</p>

<p><em>"Tidak ada tuhan selain Engkau. Mahasuci Engkau. Sesungguhnya aku termasuk orang-orang yang zalim."</em></p>

<p>Allah mendengar dan menyelamatkannya. Ikan itu mengeluarkan Yunus di pantai. Sementara itu, Allah membuka hati penduduk Niniwe. Semuanya beriman — kota yang tidak mau mendengar Yunus, kini mencari-cari Yunus untuk diajari.</p>

<p>Untuk anak: kalau marah dan ingin lari dari masalah, ingat Yunus. Lari tidak menyelesaikan apa-apa. Kembali kepada Allah, dengan rendah hati, selalu jadi pintu keluar.</p>`,
      en: `<p>Allah sent Prophet Yunus to the city of Nineveh, a great city in Assyria. Its population was around 100,000 people who worshipped idols. Yunus preached firmly, but they refused.</p>

<p>After a long time with no one believing, Yunus grew angry. He left the city without waiting for Allah's command. He boarded a ship and sailed away.</p>

<p>At sea, a great storm came. The ship was sinking. Passengers drew lots to decide who would be thrown overboard to lighten the ship. The lot fell on Yunus. They repeated three times — it still fell on Yunus. Finally he was thrown into the sea.</p>

<p>Allah sent a great fish (nun/whale) that swallowed Yunus whole. In the fish's belly, in three darknesses (the fish's belly, the sea, the night), Yunus prayed:</p>

<p style="font-family: var(--font-arabic); font-size: 24px; text-align: right; direction: rtl;">لَا إِلَٰهَ إِلَّا أَنْتَ سُبْحَانَكَ إِنِّي كُنْتُ مِنَ الظَّالِمِينَ</p>

<p><em>"There is no god but You. Glory be to You. Indeed, I have been among the wrongdoers."</em></p>

<p>Allah heard and rescued him. The fish brought Yunus out on the shore. Meanwhile, Allah opened the hearts of Nineveh's people. They all believed — the city that wouldn't hear Yunus now searched for him to learn.</p>

<p>For children: when you're angry and want to run from a problem, remember Yunus. Running solves nothing. Returning to Allah, humbly, is always the way out.</p>`,
    },
    lessons: {
      id: [
        "Jangan tinggalkan tugas yang Allah amanahkan, meski berat.",
        "Doa Yunus di perut ikan adalah doa terbaik saat kita dalam kesempitan.",
        "Allah bisa membuka hati seluruh kota dalam semalam — tugas kita cuma tidak berhenti berdoa.",
      ],
      en: [
        "Don't abandon the task Allah entrusted, however heavy.",
        "Yunus's du'a in the fish's belly is the best du'a when we're in distress.",
        "Allah can open an entire city's heart overnight — our job is just to keep praying.",
      ],
    },
    relatedDoa: ["perlindungan-anak"],
    searchQuery: {
      id: "kisah nabi yunus dan ikan paus",
      en: "story of prophet yunus and the whale",
    },
    published: "2026-05-28",
  },

  {
    slug: "zakariya",
    order: 22,
    name: { id: "Nabi Zakariya", en: "Prophet Zakariya (Zachariah)" },
    arabicName: "زَكَرِيَّا",
    era: { id: "Penjaga Maryam di Baitul Maqdis — ayah Nabi Yahya", en: "Guardian of Maryam at Bayt al-Maqdis — father of Prophet Yahya" },
    keyMoment: {
      id: "Berdoa minta anak di usia sangat tua — dijawab dengan Nabi Yahya.",
      en: "Prayed for a child in extreme old age — answered with Prophet Yahya.",
    },
    story: {
      id: `<p>Nabi Zakariya adalah seorang nabi tua dan miskin dari Bani Israil. Dia bekerja sebagai tukang kayu untuk menafkahi keluarganya. Tugas khusus yang Allah berikan: menjaga Maryam (yang nanti akan menjadi ibu Nabi Isa), keponakannya, yang dipersembahkan ke Baitul Maqdis sejak kecil.</p>

<p>Setiap kali Zakariya datang menjaga Maryam di mihrabnya, dia melihat ada makanan dan buah-buahan yang tidak musim. Dia bertanya: "Maryam, dari mana ini?" Maryam menjawab: <em>"Dari Allah. Sesungguhnya Allah memberi rezeki kepada siapa yang Dia kehendaki tanpa batas."</em></p>

<p>Melihat itu, hati Zakariya tergerak. Dia sendiri sudah tua sekali, dan istrinya mandul sejak muda. Tidak punya anak. Tapi melihat keajaiban di mihrab Maryam, dia jadi yakin: kalau Allah bisa beri makanan di luar musim, Allah juga bisa beri anak.</p>

<p>Zakariya berdoa diam-diam: <em>"Ya Tuhanku, jangan biarkan aku sendiri (tanpa keturunan). Engkau adalah ahli waris yang terbaik."</em> (QS. Al-Anbiya: 89)</p>

<p>Allah mengabulkan. Malaikat datang membawa kabar: "Zakariya, Allah memberi kabar gembira: anakmu Yahya akan lahir." Zakariya kaget: "Bagaimana? Istriku mandul, dan aku sudah sangat tua." Malaikat menjawab: "Tuhanmu berfirman: 'Itu mudah bagi-Ku.'"</p>

<p>Lahirlah Yahya, yang juga menjadi nabi.</p>

<p>Untuk anak: doa untuk hal yang terlihat mustahil tetap mustajab — Allah suka hamba yang masih berharap saat orang lain sudah putus asa.</p>`,
      en: `<p>Prophet Zakariya was an old, poor prophet of the Children of Israel. He worked as a carpenter to support his family. A special task Allah gave him: guarding Maryam (who would later be the mother of Prophet Isa), his niece, who was dedicated to the Bayt al-Maqdis from childhood.</p>

<p>Every time Zakariya came to guard Maryam in her mihrab, he saw food and out-of-season fruits. He asked: "Maryam, where is this from?" Maryam replied: <em>"From Allah. Indeed Allah provides for whom He wills without measure."</em></p>

<p>Seeing this, Zakariya's heart stirred. He himself was very old, and his wife had been barren since youth. They had no child. But seeing the miracle in Maryam's mihrab, he became certain: if Allah can give food out of season, Allah can give a child.</p>

<p>Zakariya prayed quietly: <em>"My Lord, do not leave me alone (without heir). You are the best of inheritors."</em> (Al-Anbiya: 89)</p>

<p>Allah granted it. An angel came with news: "Zakariya, Allah gives glad tidings: your son Yahya will be born." Zakariya was astonished: "How? My wife is barren, and I am very old." The angel replied: "Your Lord says: 'It is easy for Me.'"</p>

<p>Yahya was born, who also became a prophet.</p>

<p>For children: a du'a for what seems impossible is still answerable — Allah loves servants who still hope when others have despaired.</p>`,
    },
    lessons: {
      id: [
        "Tidak ada doa yang terlalu besar atau terlambat untuk Allah.",
        "Melihat keajaiban Allah pada orang lain bisa membangkitkan harapan untuk diri sendiri.",
        "Cari nafkah dengan tangan sendiri — Zakariya nabi yang bekerja sebagai tukang kayu.",
      ],
      en: [
        "No du'a is too big or too late for Allah.",
        "Witnessing Allah's miracles in others' lives can revive our own hope.",
        "Earn your living with your own hands — Zakariya was a prophet who worked as a carpenter.",
      ],
    },
    relatedDoa: ["doa-untuk-orang-tua"],
    searchQuery: {
      id: "kisah nabi zakariya doa anak",
      en: "story of prophet zakariya and du'a for child",
    },
    published: "2026-05-28",
  },

  {
    slug: "yahya",
    order: 23,
    name: { id: "Nabi Yahya", en: "Prophet Yahya (John the Baptist)" },
    arabicName: "يَحْيَى",
    era: { id: "Anak Zakariya — sepupu Nabi Isa", en: "Son of Zakariya — cousin of Prophet Isa" },
    keyMoment: {
      id: "Lahir saat ibu mandul dan ayah tua — menjadi pemuda saleh yang tidak pernah berbuat dosa.",
      en: "Born to a barren mother and aged father — grew into a young man who never sinned.",
    },
    story: {
      id: `<p>Nabi Yahya lahir dari doa panjang ayahnya Nabi Zakariya. Sejak masih anak-anak, Yahya sudah luar biasa — Allah memberinya hikmah (kebijaksanaan) sejak kecil.</p>

<p>Allah berfirman tentang Yahya: <em>"Wahai Yahya, ambillah Al-Kitab itu dengan sungguh-sungguh."</em> Allah memberinya hikmah selagi dia masih anak-anak. Dia berbakti kepada kedua orang tuanya. Dan dia tidak pernah sombong atau durhaka.</p>

<p>Yahya hidup sederhana. Dia tidak menikah. Dia banyak berpuasa dan berdoa. Dia sering masuk ke padang pasir dan beribadah sendirian. Saat orang-orang datang ke sungai Yordan untuk dimandikan (tobat), Yahya menjadi pembimbing mereka.</p>

<p>Yang istimewa dari Yahya: para ulama menyebut beliau termasuk nabi yang <strong>tidak pernah berbuat dosa</strong> sepanjang hidupnya — bahkan tidak juga dosa kecil. Itu kemuliaan yang sangat tinggi.</p>

<p>Yahya akhirnya wafat sebagai syahid — dibunuh oleh raja zalim setelah Yahya menegurnya karena ingin menikahi orang yang tidak halal baginya.</p>

<p>Untuk anak: hidup sederhana, tidak sombong, berbakti pada orang tua, dan tegas terhadap kebenaran — itu rangkuman hidup Nabi Yahya.</p>`,
      en: `<p>Prophet Yahya was born from his father Prophet Zakariya's long du'a. From childhood, Yahya was extraordinary — Allah gave him wisdom from a young age.</p>

<p>Allah said about Yahya: <em>"O Yahya, take hold of the Scripture with strength."</em> Allah granted him wisdom while he was still a child. He honored both his parents. And he was never arrogant or disobedient.</p>

<p>Yahya lived simply. He never married. He fasted and prayed often. He often went into the wilderness to worship alone. When people came to the Jordan river to be washed (in repentance), Yahya guided them.</p>

<p>What's special about Yahya: scholars count him among the prophets who <strong>never committed a sin</strong> in his entire life — not even a small one. That is an exceptionally high honor.</p>

<p>Yahya eventually died as a martyr — killed by a tyrant king after Yahya rebuked him for wanting to marry someone forbidden to him.</p>

<p>For children: live simply, not arrogantly, honor your parents, and stand firm for truth — that's a summary of Prophet Yahya's life.</p>`,
    },
    lessons: {
      id: [
        "Anak yang Allah beri ilmu sejak kecil — itu nikmat besar untuk orang tua.",
        "Berbakti kepada orang tua adalah ciri orang yang dicintai Allah.",
        "Berani menegur kekuasaan saat keliru — meski risikonya nyawa.",
      ],
      en: [
        "A child Allah gives knowledge to from young — a great blessing for parents.",
        "Honoring parents is a sign of one beloved by Allah.",
        "Be brave to rebuke power when wrong — even at the risk of life.",
      ],
    },
    searchQuery: {
      id: "kisah nabi yahya bin zakariya",
      en: "story of prophet yahya",
    },
    published: "2026-05-28",
  },

  {
    slug: "isa",
    order: 24,
    name: { id: "Nabi Isa", en: "Prophet Isa (Jesus)" },
    arabicName: "عِيسَى",
    era: { id: "Lahir dari perawan suci Maryam — diutus ke Bani Israil", en: "Born of the pure virgin Maryam — sent to the Children of Israel" },
    keyMoment: {
      id: "Lahir tanpa ayah, bicara di buaian, melakukan banyak mukjizat — diangkat hidup-hidup oleh Allah ke langit.",
      en: "Born without a father, spoke from the cradle, performed many miracles — raised alive to heaven by Allah.",
    },
    story: {
      id: `<p>Maryam adalah perempuan paling mulia dalam sejarah. Dia dibesarkan di Baitul Maqdis, dirawat oleh Nabi Zakariya. Suatu hari, malaikat Jibril datang dalam wujud manusia dan menyampaikan: "Maryam, Allah memberimu kabar dengan seorang anak laki-laki. Namanya Isa al-Masih, putra Maryam."</p>

<p>Maryam terkejut: "Bagaimana mungkin? Aku tidak pernah disentuh laki-laki." Jibril menjawab: <em>"Demikianlah. Allah berfirman: 'Kun, fa yakuun' — Jadilah, maka jadi."</em></p>

<p>Maryam hamil dengan kuasa Allah. Saat melahirkan di bawah pohon kurma, dalam kesepian dan ketakutan, Allah memberi pertolongan. Saat dia kembali ke kotanya membawa bayi Isa, orang-orang menuduh: "Maryam, kamu telah berbuat sesuatu yang buruk!"</p>

<p>Maryam tidak menjawab — dia menunjuk ke bayi. Maka bayi Isa di buaian berbicara, dengan izin Allah: <em>"Sesungguhnya aku ini hamba Allah. Dia memberiku Al-Kitab dan menjadikan aku seorang Nabi."</em></p>

<p>Isa tumbuh dan diutus kepada Bani Israil. Allah memberinya banyak mukjizat: menyembuhkan orang buta dan kusta, menghidupkan orang mati dengan izin Allah, membuat burung dari tanah liat yang lalu hidup. Tapi tetap saja banyak yang menolaknya.</p>

<p>Beberapa orang berencana membunuhnya. Tapi Allah mengangkat Isa hidup-hidup ke langit. <em>"Mereka tidak membunuhnya dan tidak menyalibnya, tetapi (yang mereka bunuh adalah) orang yang diserupakan dengan Isa bagi mereka."</em> (QS. An-Nisa: 157)</p>

<p>Muslim percaya Isa akan kembali ke bumi di akhir zaman.</p>

<p>Untuk anak: Isa adalah hamba Allah, bukan tuhan. Dia menghormati ibunya dan mengajak manusia menyembah Allah saja.</p>`,
      en: `<p>Maryam was the most honored woman in history. She was raised in Bayt al-Maqdis, cared for by Prophet Zakariya. One day, the angel Jibril came in human form and announced: "Maryam, Allah gives you news of a son. His name is Isa al-Masih, son of Maryam."</p>

<p>Maryam was startled: "How? No man has touched me." Jibril replied: <em>"So it is. Allah says: 'Kun, fa yakun' — Be, and it is."</em></p>

<p>Maryam conceived by Allah's power. When she gave birth under a date palm, alone and afraid, Allah provided. When she returned to her town with baby Isa, people accused: "Maryam, you have done something terrible!"</p>

<p>Maryam didn't answer — she pointed to the baby. So baby Isa in the cradle spoke, by Allah's permission: <em>"I am indeed a servant of Allah. He has given me the Book and made me a prophet."</em></p>

<p>Isa grew and was sent to the Children of Israel. Allah gave him many miracles: he healed the blind and leprous, raised the dead by Allah's leave, made birds from clay that came to life. Yet many still refused him.</p>

<p>Some plotted to kill him. But Allah raised Isa alive to heaven. <em>"They did not kill him or crucify him, but it was made to appear so."</em> (An-Nisa: 157)</p>

<p>Muslims believe Isa will return to earth at the end of times.</p>

<p>For children: Isa is a servant of Allah, not a god. He honored his mother and called people to worship Allah alone.</p>`,
    },
    lessons: {
      id: [
        "Kelahiran adalah keajaiban Allah — Isa lahir tanpa ayah, Adam tanpa ayah-ibu. Allah Maha Kuasa.",
        "Maryam, seorang ibu tunggal, dipuji Allah sebagai sebaik-baik wanita di dunia. Status sosial bukan ukuran kemuliaan.",
        "Isa selalu mengaku sebagai hamba Allah — bukan tuhan. Itu inti tauhid.",
      ],
      en: [
        "Birth is Allah's miracle — Isa born without a father, Adam without parents. Allah is All-Capable.",
        "Maryam, a single mother, was praised by Allah as the best of women. Social status isn't the measure of honor.",
        "Isa always identified as a servant of Allah — not a god. That is the core of tawhid.",
      ],
    },
    relatedSurah: ["al-ikhlas"],
    searchQuery: {
      id: "kisah nabi isa dan maryam untuk anak",
      en: "story of prophet isa and maryam for kids",
    },
    published: "2026-05-28",
  },

  {
    slug: "muhammad",
    order: 25,
    name: { id: "Nabi Muhammad ﷺ", en: "Prophet Muhammad ﷺ" },
    arabicName: "مُحَمَّد",
    era: { id: "Nabi terakhir — diutus untuk seluruh manusia sampai akhir zaman", en: "The final prophet — sent to all humanity until the end of time" },
    keyMoment: {
      id: "Yatim sejak kecil, dipercaya dengan gelar 'Al-Amin,' menerima wahyu pertama di Gua Hira, dan menyatukan jazirah Arab dalam 23 tahun.",
      en: "Orphaned young, trusted with the title 'Al-Amin,' received the first revelation at Cave Hira, and united Arabia in 23 years.",
    },
    story: {
      id: `<p>Nabi Muhammad ﷺ lahir di Mekkah pada tahun 570 M — Tahun Gajah (lihat <a href="/_/surat/al-fil/">Surat Al-Fil</a>). Ayahnya, Abdullah, wafat sebelum beliau lahir. Ibunya, Aminah, wafat saat beliau berusia 6 tahun. Beliau dirawat kakeknya Abdul Muthalib, lalu pamannya Abu Thalib.</p>

<p>Sejak muda Muhammad dikenal sebagai orang yang paling jujur. Para penduduk Mekkah memanggilnya "Al-Amin" — yang dapat dipercaya. Beliau bekerja sebagai penggembala kambing, lalu pedagang. Pada usia 25, beliau menikahi Khadijah, perempuan terpandang.</p>

<p>Pada usia 40, saat sedang menyendiri di Gua Hira, malaikat Jibril datang dan menyampaikan wahyu pertama: <em>"Bacalah dengan nama Tuhanmu yang menciptakan."</em> (QS. Al-'Alaq: 1)</p>

<p>Beliau pulang ketakutan. Khadijah menenangkannya: "Allah tidak akan menelantarkanmu. Engkau menyambung silaturahmi, jujur dalam bicara, membantu yang lemah, memuliakan tamu."</p>

<p>Selama 13 tahun di Mekkah, Nabi berdakwah dalam tekanan berat. Banyak yang menyiksa para sahabat awal. Akhirnya beliau dan kaum muslimin hijrah ke Madinah. Di sana, Islam berkembang. Dalam 10 tahun, jazirah Arab bersatu dalam Islam.</p>

<p>Yang istimewa dari Nabi Muhammad ﷺ: meski memimpin perubahan terbesar dalam sejarah manusia, beliau tetap menambal sandalnya sendiri, memperbaiki bajunya sendiri, dan duduk di lantai bersama sahabat. Ketika orang Yahudi menanyakan ciri seorang Nabi, salah satu ciri yang disebut: dia akan tidur di tikar yang sederhana.</p>

<p>Saat wafat di usia 63, Nabi tidak meninggalkan dinar atau dirham. Hanya meninggalkan Al-Qur'an dan sunnahnya — pedoman seluruh manusia sampai kiamat.</p>

<p>Untuk anak: Nabi Muhammad ﷺ adalah teladan terbaik dalam segala hal — sebagai anak, suami, ayah, pedagang, pemimpin, dan hamba Allah.</p>`,
      en: `<p>Prophet Muhammad ﷺ was born in Makkah in 570 CE — the Year of the Elephant (see <a href="/_/surat/al-fil/">Surah Al-Fil</a>). His father, Abdullah, passed away before his birth. His mother, Aminah, passed away when he was 6 years old. He was raised by his grandfather Abdul Muthalib, then his uncle Abu Thalib.</p>

<p>From youth, Muhammad was known as the most honest. The people of Makkah called him "Al-Amin" — the trustworthy. He worked as a shepherd, then a merchant. At age 25, he married Khadijah, a noble lady.</p>

<p>At age 40, while alone in Cave Hira, the angel Jibril came with the first revelation: <em>"Read in the name of your Lord who created."</em> (Al-'Alaq: 1)</p>

<p>He went home frightened. Khadijah comforted him: "Allah will not abandon you. You maintain kinship, you speak truthfully, you help the weak, you honor guests."</p>

<p>For 13 years in Makkah, the Prophet preached under severe pressure. Many early companions were tortured. Eventually he and the Muslims migrated to Madinah. There, Islam flourished. In 10 years, the Arabian peninsula united in Islam.</p>

<p>What's special about Prophet Muhammad ﷺ: despite leading the greatest change in human history, he still mended his own sandals, repaired his own clothes, and sat on the floor with companions. When Jews asked the signs of a prophet, one sign mentioned: he would sleep on a simple mat.</p>

<p>When he passed at age 63, the Prophet left no dinars or dirhams. He left only the Qur'an and his sunnah — guidance for all humanity until the end of time.</p>

<p>For children: Prophet Muhammad ﷺ is the best example in everything — as a child, husband, father, merchant, leader, and servant of Allah.</p>`,
    },
    lessons: {
      id: [
        "Kepercayaan dibangun pelan-pelan dengan kejujuran setiap hari. Sampai orang memanggilmu 'Al-Amin.'",
        "Sehebat apa pun amanah yang Allah beri, tetap kerja dengan tangan sendiri — Nabi menambal sandal sendiri.",
        "Tidak meninggalkan harta saat wafat tapi meninggalkan teladan — itu warisan terbesar yang bisa kita berikan kepada anak.",
      ],
      en: [
        "Trust is built slowly through daily honesty. Until people call you 'Al-Amin.'",
        "However great the trust Allah gives you, still work with your own hands — the Prophet mended his own sandals.",
        "Leaving no wealth at death but leaving an example — that's the greatest inheritance we can give our children.",
      ],
    },
    relatedSurah: ["al-fil", "quraisy", "al-fatihah"],
    searchQuery: {
      id: "kisah nabi muhammad untuk anak singkat",
      en: "story of prophet muhammad for kids",
    },
    published: "2026-05-28",
  },
];

export function getAllProphets(): Prophet[] {
  return [...prophetList].sort((a, b) => a.order - b.order);
}

export function getProphetBySlug(slug: string): Prophet | undefined {
  return prophetList.find((p) => p.slug === slug);
}
