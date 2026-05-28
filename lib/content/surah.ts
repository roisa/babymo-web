import type { Surah } from "./types";

/**
 * Short surahs from Juz 30 — the chapters Muslim parents teach
 * children first. Each entry has the full Arabic text broken down
 * ayah-by-ayah with transliteration + bilingual translation.
 *
 * EDITORIAL NOTE: Arabic text follows the standard Mushaf Madinah
 * orthography. Before public launch, every entry should be cross-
 * checked against an authoritative mushaf and reviewed by a qari.
 */
export const surahList: Surah[] = [
  {
    slug: "al-fatihah",
    number: 1,
    name: { id: "Al-Fatihah", en: "Al-Fatihah" },
    arabicName: "الْفَاتِحَة",
    meaning: { id: "Pembukaan", en: "The Opening" },
    ayahCount: 7,
    juz: 1,
    revelation: "makki",
    themes: ["pembukaan", "doa", "tauhid", "sholat"],
    introForKids: {
      id: "Surat pembuka Al-Qur'an. Dibaca di setiap rakaat sholat — paling sering kita baca dalam hidup.",
      en: "The opening chapter of the Qur'an. Recited in every unit of prayer — the verses we say most often in our lives.",
    },
    ayahs: [
      {
        number: 1,
        arabic: "بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ",
        transliteration: "Bismillaahir-rahmaanir-rahiim",
        translation: {
          id: "Dengan nama Allah Yang Maha Pengasih, Maha Penyayang.",
          en: "In the name of Allah, the Most Gracious, the Most Merciful.",
        },
      },
      {
        number: 2,
        arabic: "الْحَمْدُ لِلَّهِ رَبِّ الْعَالَمِينَ",
        transliteration: "Alhamdu lillaahi rabbil-'aalamiin",
        translation: {
          id: "Segala puji bagi Allah, Tuhan seluruh alam.",
          en: "All praise is due to Allah, Lord of all the worlds.",
        },
      },
      {
        number: 3,
        arabic: "الرَّحْمَٰنِ الرَّحِيمِ",
        transliteration: "Ar-rahmaanir-rahiim",
        translation: {
          id: "Yang Maha Pengasih, Maha Penyayang.",
          en: "The Most Gracious, the Most Merciful.",
        },
      },
      {
        number: 4,
        arabic: "مَالِكِ يَوْمِ الدِّينِ",
        transliteration: "Maaliki yawmid-diin",
        translation: {
          id: "Pemilik hari pembalasan.",
          en: "Master of the Day of Judgement.",
        },
      },
      {
        number: 5,
        arabic: "إِيَّاكَ نَعْبُدُ وَإِيَّاكَ نَسْتَعِينُ",
        transliteration: "Iyyaaka na'budu wa iyyaaka nasta'iin",
        translation: {
          id: "Hanya kepada-Mu kami menyembah, dan hanya kepada-Mu kami memohon pertolongan.",
          en: "You alone we worship, and You alone we ask for help.",
        },
      },
      {
        number: 6,
        arabic: "اهْدِنَا الصِّرَاطَ الْمُسْتَقِيمَ",
        transliteration: "Ihdinas-siraatal-mustaqiim",
        translation: {
          id: "Tunjukilah kami jalan yang lurus.",
          en: "Guide us to the straight path.",
        },
      },
      {
        number: 7,
        arabic: "صِرَاطَ الَّذِينَ أَنْعَمْتَ عَلَيْهِمْ غَيْرِ الْمَغْضُوبِ عَلَيْهِمْ وَلَا الضَّالِّينَ",
        transliteration: "Siraatal-ladziina an'amta 'alayhim ghayril-maghdhuubi 'alayhim wa lad-dhaalliin",
        translation: {
          id: "(Yaitu) jalan orang-orang yang telah Engkau beri nikmat, bukan (jalan) mereka yang dimurkai, dan bukan (pula jalan) mereka yang sesat.",
          en: "The path of those upon whom You have bestowed favor — not of those who have earned anger, nor of those who go astray.",
        },
      },
    ],
    tafsirForKids: {
      id: "Al-Fatihah adalah doa terindah yang Allah ajarkan kepada kita sendiri. Di dalamnya kita memuji Allah, menyatakan bahwa hanya kepada-Nya kita menyembah dan minta tolong, lalu minta ditunjukkan jalan yang lurus. Karena begitu pentingnya, surat ini dibaca minimal 17 kali sehari (setiap rakaat sholat lima waktu). Anak yang hafal Al-Fatihah dengan benar sudah memenuhi rukun untuk sholat sendiri.",
      en: "Al-Fatihah is the most beautiful du'a Allah taught us to say to Him. In it we praise Allah, declare that we worship only Him and ask only Him for help, then ask to be shown the straight path. Because it's so essential, this surah is recited at minimum 17 times each day (every rak'at of the five prayers). A child who memorizes Al-Fatihah correctly can already pray on their own.",
    },
    whenToRead: {
      id: "Di setiap rakaat sholat. Juga sebagai pembuka kebanyakan doa keluarga.",
      en: "In every rak'at of prayer. Also as the opening of most family supplications.",
    },
    searchQuery: {
      id: "surat al fatihah arab latin dan artinya",
      en: "surah al-fatihah arabic transliteration translation",
    },
    published: "2026-05-28",
  },

  {
    slug: "an-nas",
    number: 114,
    name: { id: "An-Nas", en: "An-Nas" },
    arabicName: "النَّاس",
    meaning: { id: "Manusia", en: "Mankind" },
    ayahCount: 6,
    juz: 30,
    revelation: "makki",
    themes: ["perlindungan", "tauhid", "akhir-juz"],
    introForKids: {
      id: "Surat terakhir di Al-Qur'an. Bersama Al-Falaq, dibaca sebelum tidur untuk minta perlindungan kepada Allah.",
      en: "The very last surah of the Qur'an. Together with Al-Falaq, recited before sleep to seek refuge in Allah.",
    },
    ayahs: [
      {
        number: 1,
        arabic: "قُلْ أَعُوذُ بِرَبِّ النَّاسِ",
        transliteration: "Qul a'uudzu birabbin-naas",
        translation: {
          id: "Katakanlah: \"Aku berlindung kepada Tuhannya manusia,\"",
          en: "Say: \"I seek refuge with the Lord of mankind,\"",
        },
      },
      {
        number: 2,
        arabic: "مَلِكِ النَّاسِ",
        transliteration: "Malikin-naas",
        translation: {
          id: "Raja manusia,",
          en: "The King of mankind,",
        },
      },
      {
        number: 3,
        arabic: "إِلَٰهِ النَّاسِ",
        transliteration: "Ilaahin-naas",
        translation: {
          id: "sembahan manusia,",
          en: "The God of mankind,",
        },
      },
      {
        number: 4,
        arabic: "مِنْ شَرِّ الْوَسْوَاسِ الْخَنَّاسِ",
        transliteration: "Min syarril-waswaasil-khannaas",
        translation: {
          id: "dari kejahatan (bisikan) setan yang bersembunyi,",
          en: "from the evil of the whisperer who hides,",
        },
      },
      {
        number: 5,
        arabic: "الَّذِي يُوَسْوِسُ فِي صُدُورِ النَّاسِ",
        transliteration: "Alladzii yuwaswisu fii suduurin-naas",
        translation: {
          id: "yang membisikkan (kejahatan) ke dalam dada manusia,",
          en: "who whispers into the breasts of mankind,",
        },
      },
      {
        number: 6,
        arabic: "مِنَ الْجِنَّةِ وَالنَّاسِ",
        transliteration: "Minal-jinnati wan-naas",
        translation: {
          id: "dari (golongan) jin dan manusia.",
          en: "from among the jinn and mankind.",
        },
      },
    ],
    tafsirForKids: {
      id: "An-Nas mengajarkan: kalau ada bisikan jahat di hati kita — entah dari setan atau dari orang lain — kita minta tolong langsung kepada Allah yang menciptakan kita, yang memiliki kita, dan yang kita sembah. Tiga kali kita panggil Allah dengan tiga sifat-Nya. Kemudian kita sebutkan masalahnya. Surat ini bersama Al-Falaq disebut Al-Mu'awwidzatain — dua surat perlindungan.",
      en: "An-Nas teaches: when there's an evil whisper in our heart — whether from a devil or from people — we ask Allah directly: the One who created us, who owns us, who we worship. We call on Allah three times by three of His attributes. Then we name the problem. This surah together with Al-Falaq are called Al-Mu'awwidhatain — the two surahs of refuge.",
    },
    whenToRead: {
      id: "Sebelum tidur (tiga kali, lalu tiup ke kedua tangan, usap ke seluruh tubuh). Setelah sholat fardhu. Saat merasa cemas atau dibayang-bayangi pikiran buruk.",
      en: "Before sleep (recite 3 times, blow on hands, wipe over the body). After obligatory prayers. When feeling anxious or troubled by intrusive thoughts.",
    },
    searchQuery: {
      id: "surat an nas arab latin artinya",
      en: "surah an-nas arabic translation",
    },
    published: "2026-05-28",
  },

  {
    slug: "al-falaq",
    number: 113,
    name: { id: "Al-Falaq", en: "Al-Falaq" },
    arabicName: "الْفَلَق",
    meaning: { id: "Waktu Subuh", en: "The Daybreak" },
    ayahCount: 5,
    juz: 30,
    revelation: "makki",
    themes: ["perlindungan", "tauhid"],
    introForKids: {
      id: "Surat ke-113 — pasangan An-Nas. Minta perlindungan kepada Allah dari kejahatan apapun yang Dia ciptakan.",
      en: "Surah 113 — companion to An-Nas. Seeks refuge in Allah from the evil of anything He has created.",
    },
    ayahs: [
      {
        number: 1,
        arabic: "قُلْ أَعُوذُ بِرَبِّ الْفَلَقِ",
        transliteration: "Qul a'uudzu birabbil-falaq",
        translation: {
          id: "Katakanlah: \"Aku berlindung kepada Tuhan yang menguasai waktu subuh,",
          en: "Say: \"I seek refuge with the Lord of the daybreak,",
        },
      },
      {
        number: 2,
        arabic: "مِنْ شَرِّ مَا خَلَقَ",
        transliteration: "Min syarri maa khalaq",
        translation: {
          id: "dari kejahatan apa yang Dia ciptakan,",
          en: "from the evil of what He has created,",
        },
      },
      {
        number: 3,
        arabic: "وَمِنْ شَرِّ غَاسِقٍ إِذَا وَقَبَ",
        transliteration: "Wa min syarri ghaasiqin idzaa waqab",
        translation: {
          id: "dan dari kejahatan malam apabila telah gelap gulita,",
          en: "and from the evil of darkness when it spreads,",
        },
      },
      {
        number: 4,
        arabic: "وَمِنْ شَرِّ النَّفَّاثَاتِ فِي الْعُقَدِ",
        transliteration: "Wa min syarrin-naffaatsaati fil-'uqad",
        translation: {
          id: "dan dari kejahatan (perempuan-perempuan) tukang sihir yang meniup pada buhul-buhul,",
          en: "and from the evil of those who blow on knots (practicing witchcraft),",
        },
      },
      {
        number: 5,
        arabic: "وَمِنْ شَرِّ حَاسِدٍ إِذَا حَسَدَ",
        transliteration: "Wa min syarri haasidin idzaa hasad",
        translation: {
          id: "dan dari kejahatan orang yang dengki apabila ia dengki.\"",
          en: "and from the evil of the envier when he envies.\"",
        },
      },
    ],
    tafsirForKids: {
      id: "Al-Falaq menyebut empat sumber bahaya: kejahatan makhluk secara umum, gelap malam, sihir, dan dengki. Allah Yang menciptakan subuh memecah kegelapan — Dia juga yang melindungi kita dari semua itu. Anak yang hafal surat ini punya 'perisai' yang dibawa setiap malam.",
      en: "Al-Falaq names four sources of harm: the evil of creation in general, the darkness of night, witchcraft, and envy. Allah who created the dawn that breaks the darkness — He is also the One who protects us from all of these. A child who memorizes this surah carries a 'shield' every night.",
    },
    whenToRead: {
      id: "Sebelum tidur bersama An-Nas dan Al-Ikhlas. Setelah sholat fardhu. Saat merasa diawasi atau didengki orang.",
      en: "Before sleep together with An-Nas and Al-Ikhlas. After obligatory prayers. When feeling watched or envied.",
    },
    searchQuery: {
      id: "surat al falaq arab latin dan artinya",
      en: "surah al-falaq arabic translation",
    },
    published: "2026-05-28",
  },

  {
    slug: "al-ikhlas",
    number: 112,
    name: { id: "Al-Ikhlas", en: "Al-Ikhlas" },
    arabicName: "الْإِخْلَاص",
    meaning: { id: "Memurnikan Keesaan Allah", en: "The Purity of Faith" },
    ayahCount: 4,
    juz: 30,
    revelation: "makki",
    themes: ["tauhid", "perlindungan"],
    introForKids: {
      id: "Empat ayat pendek yang menjawab pertanyaan paling dasar: siapa Allah? Rasulullah ﷺ bilang nilainya setara sepertiga Al-Qur'an.",
      en: "Four short verses that answer the most fundamental question: who is Allah? The Prophet ﷺ said its value equals one-third of the Qur'an.",
    },
    ayahs: [
      {
        number: 1,
        arabic: "قُلْ هُوَ اللَّهُ أَحَدٌ",
        transliteration: "Qul huwallaahu ahad",
        translation: {
          id: "Katakanlah (Muhammad): \"Dialah Allah, Yang Maha Esa.\"",
          en: "Say: \"He is Allah, the One.\"",
        },
      },
      {
        number: 2,
        arabic: "اللَّهُ الصَّمَدُ",
        transliteration: "Allaahus-samad",
        translation: {
          id: "Allah tempat meminta segala sesuatu.",
          en: "Allah, the Eternal, on Whom all depend.",
        },
      },
      {
        number: 3,
        arabic: "لَمْ يَلِدْ وَلَمْ يُولَدْ",
        transliteration: "Lam yalid wa lam yuulad",
        translation: {
          id: "Dia tidak beranak dan tidak pula diperanakkan.",
          en: "He neither begets nor is born.",
        },
      },
      {
        number: 4,
        arabic: "وَلَمْ يَكُنْ لَهُ كُفُوًا أَحَدٌ",
        transliteration: "Wa lam yakul-lahu kufuwan ahad",
        translation: {
          id: "Dan tidak ada sesuatu yang setara dengan Dia.",
          en: "And there is none comparable to Him.",
        },
      },
    ],
    tafsirForKids: {
      id: "Al-Ikhlas mengajarkan empat hal tentang Allah: (1) Dia satu, tidak ada yang seperti-Nya, (2) semua bergantung kepada-Nya, tapi Dia tidak butuh apa pun, (3) Dia bukan anak siapa-siapa dan tidak punya anak, (4) tidak ada yang setara dengan-Nya — bukan bulan, bukan matahari, bukan siapa pun. Inti tauhid dalam empat ayat.",
      en: "Al-Ikhlas teaches four things about Allah: (1) He is One, nothing like Him, (2) everything depends on Him while He needs nothing, (3) He is no one's child and has no children, (4) nothing is His equal — not the moon, not the sun, not anyone. The heart of tawhid in four verses.",
    },
    whenToRead: {
      id: "Sebelum tidur bersama Al-Falaq dan An-Nas. Setelah sholat fardhu. Sebagai pengajar tauhid sehari-hari pada anak.",
      en: "Before sleep with Al-Falaq and An-Nas. After obligatory prayers. As a daily tawhid teacher for children.",
    },
    searchQuery: {
      id: "surat al ikhlas arab latin dan artinya",
      en: "surah al-ikhlas arabic translation",
    },
    published: "2026-05-28",
  },

  {
    slug: "al-lahab",
    number: 111,
    name: { id: "Al-Lahab", en: "Al-Lahab" },
    arabicName: "الْمَسَد",
    meaning: { id: "Gejolak Api / Tali Sabut", en: "The Flame / The Palm Fiber" },
    ayahCount: 5,
    juz: 30,
    revelation: "makki",
    themes: ["sejarah", "akhirat", "peringatan"],
    introForKids: {
      id: "Cerita tentang seorang paman Nabi yang menentang dakwah Islam. Pelajaran: kekayaan tidak menyelamatkan dari akhirat.",
      en: "A story about an uncle of the Prophet who opposed his message. Lesson: wealth doesn't save us in the hereafter.",
    },
    ayahs: [
      {
        number: 1,
        arabic: "تَبَّتْ يَدَا أَبِي لَهَبٍ وَتَبَّ",
        transliteration: "Tabbat yadaa abii lahabin wa tabb",
        translation: {
          id: "Binasalah kedua tangan Abu Lahab dan benar-benar binasa dia!",
          en: "May the hands of Abu Lahab be ruined, and ruined is he!",
        },
      },
      {
        number: 2,
        arabic: "مَا أَغْنَىٰ عَنْهُ مَالُهُ وَمَا كَسَبَ",
        transliteration: "Maa aghnaa 'anhu maaluhuu wa maa kasab",
        translation: {
          id: "Tidak berguna baginya hartanya dan apa yang dia usahakan.",
          en: "His wealth and whatever he earned will not benefit him.",
        },
      },
      {
        number: 3,
        arabic: "سَيَصْلَىٰ نَارًا ذَاتَ لَهَبٍ",
        transliteration: "Sayaslaa naaran dzaata lahab",
        translation: {
          id: "Kelak dia akan masuk ke dalam api yang bergejolak (neraka).",
          en: "He will burn in a blazing fire,",
        },
      },
      {
        number: 4,
        arabic: "وَامْرَأَتُهُ حَمَّالَةَ الْحَطَبِ",
        transliteration: "Wamra-atuhuu hammaalatal-hatab",
        translation: {
          id: "Dan (begitu pula) istrinya, pembawa kayu bakar (penyebar fitnah).",
          en: "and his wife, the carrier of firewood (the spreader of slander),",
        },
      },
      {
        number: 5,
        arabic: "فِي جِيدِهَا حَبْلٌ مِنْ مَسَدٍ",
        transliteration: "Fii jiidihaa hablum-min masad",
        translation: {
          id: "Di lehernya ada tali dari sabut yang dipintal.",
          en: "around her neck a rope of twisted palm fiber.",
        },
      },
    ],
    tafsirForKids: {
      id: "Abu Lahab adalah paman kandung Nabi Muhammad ﷺ. Dia kaya raya, tapi memilih untuk menjadi musuh terkuat dakwah Islam. Allah turunkan surat ini sebagai peringatan: ikatan keluarga tidak menyelamatkan, kekayaan tidak menyelamatkan, hanya iman dan amal yang menyelamatkan. Untuk anak: jangan sombong dengan kekayaan atau kedudukan keluarga — yang Allah lihat adalah hati kita.",
      en: "Abu Lahab was a blood-uncle of the Prophet Muhammad ﷺ. He was very wealthy, but chose to be the strongest enemy of Islam's message. Allah revealed this surah as a warning: family ties don't save us, wealth doesn't save us — only faith and good deeds do. For children: don't be proud of wealth or family status — what Allah sees is our heart.",
    },
    whenToRead: {
      id: "Saat membaca Juz Amma. Saat anak butuh memahami bahwa kekayaan dunia bukan ukuran kemuliaan.",
      en: "When reading through Juz 'Amma. When a child needs to understand that worldly wealth isn't the measure of honor.",
    },
    searchQuery: {
      id: "surat al lahab arab latin artinya",
      en: "surah al-lahab arabic translation",
    },
    published: "2026-05-28",
  },

  {
    slug: "an-nasr",
    number: 110,
    name: { id: "An-Nasr", en: "An-Nasr" },
    arabicName: "النَّصْر",
    meaning: { id: "Pertolongan", en: "The Help" },
    ayahCount: 3,
    juz: 30,
    revelation: "madani",
    themes: ["kemenangan", "tasbih", "istighfar"],
    introForKids: {
      id: "Surat terakhir yang turun lengkap sebagai isyarat dekatnya wafat Rasulullah ﷺ — sekaligus janji kemenangan Islam.",
      en: "The last surah revealed in full — a sign of the Prophet's approaching passing, and a promise of Islam's victory.",
    },
    ayahs: [
      {
        number: 1,
        arabic: "إِذَا جَاءَ نَصْرُ اللَّهِ وَالْفَتْحُ",
        transliteration: "Idzaa jaa-a nasrullaahi wal-fath",
        translation: {
          id: "Apabila telah datang pertolongan Allah dan kemenangan,",
          en: "When Allah's help and victory come,",
        },
      },
      {
        number: 2,
        arabic: "وَرَأَيْتَ النَّاسَ يَدْخُلُونَ فِي دِينِ اللَّهِ أَفْوَاجًا",
        transliteration: "Wa ra-aytan-naasa yadkhuluuna fii diinillaahi afwaajaa",
        translation: {
          id: "dan engkau melihat manusia berbondong-bondong masuk agama Allah,",
          en: "and you see people entering Allah's religion in crowds,",
        },
      },
      {
        number: 3,
        arabic: "فَسَبِّحْ بِحَمْدِ رَبِّكَ وَاسْتَغْفِرْهُ ۚ إِنَّهُ كَانَ تَوَّابًا",
        transliteration: "Fasabbih bihamdi rabbika wastaghfirh, innahuu kaana tawwaabaa",
        translation: {
          id: "maka bertasbihlah dengan memuji Tuhanmu dan mohonlah ampun kepada-Nya. Sungguh, Dia Maha Penerima tobat.",
          en: "then glorify the praise of your Lord and seek His forgiveness. Indeed, He is ever Accepting of repentance.",
        },
      },
    ],
    tafsirForKids: {
      id: "Ketika Mekkah ditaklukkan dan orang-orang masuk Islam berbondong-bondong, Allah tidak menyuruh Nabi merayakan dengan pesta — tapi dengan bertasbih dan istighfar. Pelajaran: setelah dapat nikmat, jangan sombong. Kembali kepada Allah dengan rendah hati. Untuk anak: setelah dapat hadiah atau menang lomba, ucap alhamdulillah dan istighfar.",
      en: "When Makkah was conquered and people entered Islam in crowds, Allah didn't tell the Prophet to celebrate with a party — but with tasbih and istighfar. Lesson: after receiving blessings, don't be proud. Return to Allah humbly. For children: after getting a gift or winning a competition, say alhamdulillah and istighfar.",
    },
    whenToRead: {
      id: "Setelah dapat keberhasilan/kemenangan. Sebagai bagian rutinitas membaca Juz Amma.",
      en: "After receiving success/victory. As part of regular Juz 'Amma recitation.",
    },
    searchQuery: {
      id: "surat an nasr arab latin artinya",
      en: "surah an-nasr arabic translation",
    },
    published: "2026-05-28",
  },

  {
    slug: "al-kafirun",
    number: 109,
    name: { id: "Al-Kafirun", en: "Al-Kafirun" },
    arabicName: "الْكَافِرُون",
    meaning: { id: "Orang-orang Kafir", en: "The Disbelievers" },
    ayahCount: 6,
    juz: 30,
    revelation: "makki",
    themes: ["tauhid", "toleransi"],
    introForKids: {
      id: "Surat tentang keteguhan iman tanpa permusuhan. Mengajarkan: kita beribadah dengan cara kita, mereka dengan cara mereka — tanpa harus saling memaksa.",
      en: "A surah about firm faith without hostility. Teaches: we worship our way, they worship theirs — without coercion.",
    },
    ayahs: [
      {
        number: 1,
        arabic: "قُلْ يَا أَيُّهَا الْكَافِرُونَ",
        transliteration: "Qul yaa ayyuhal-kaafiruun",
        translation: {
          id: "Katakanlah (Muhammad), \"Wahai orang-orang kafir!\"",
          en: "Say: \"O disbelievers!\"",
        },
      },
      {
        number: 2,
        arabic: "لَا أَعْبُدُ مَا تَعْبُدُونَ",
        transliteration: "Laa a'budu maa ta'buduun",
        translation: {
          id: "Aku tidak akan menyembah apa yang kamu sembah,",
          en: "I do not worship what you worship,",
        },
      },
      {
        number: 3,
        arabic: "وَلَا أَنْتُمْ عَابِدُونَ مَا أَعْبُدُ",
        transliteration: "Wa laa antum 'aabiduuna maa a'bud",
        translation: {
          id: "dan kamu bukan penyembah apa yang aku sembah,",
          en: "nor are you worshippers of what I worship,",
        },
      },
      {
        number: 4,
        arabic: "وَلَا أَنَا عَابِدٌ مَا عَبَدْتُمْ",
        transliteration: "Wa laa ana 'aabidun maa 'abadtum",
        translation: {
          id: "dan aku tidak pernah menjadi penyembah apa yang kamu sembah,",
          en: "nor will I worship what you worship,",
        },
      },
      {
        number: 5,
        arabic: "وَلَا أَنْتُمْ عَابِدُونَ مَا أَعْبُدُ",
        transliteration: "Wa laa antum 'aabiduuna maa a'bud",
        translation: {
          id: "dan kamu tidak pernah (pula) menjadi penyembah apa yang aku sembah.",
          en: "nor will you worship what I worship.",
        },
      },
      {
        number: 6,
        arabic: "لَكُمْ دِينُكُمْ وَلِيَ دِينِ",
        transliteration: "Lakum diinukum wa liya diin",
        translation: {
          id: "Untukmu agamamu, dan untukku agamaku.",
          en: "For you is your religion, and for me is my religion.",
        },
      },
    ],
    tafsirForKids: {
      id: "Al-Kafirun mengajarkan tauhid yang teguh sekaligus toleransi yang sopan. Kita tidak ikut menyembah selain Allah — bahkan untuk basa-basi. Tapi kita juga tidak memaksa orang lain. 'Untukmu agamamu, untukku agamaku' adalah dasar bagaimana muslim hidup berdampingan dengan tetangga non-muslim di Indonesia.",
      en: "Al-Kafirun teaches firm tawhid alongside respectful coexistence. We don't worship besides Allah — not even for politeness. But we also don't force others. 'For you is your religion, and for me is mine' is the foundation of how Muslims live alongside non-Muslim neighbors.",
    },
    whenToRead: {
      id: "Sebelum tidur (bersama Al-Ikhlas — dianjurkan Rasulullah ﷺ). Saat anak mulai bertanya soal teman yang beragama berbeda.",
      en: "Before sleep (together with Al-Ikhlas — recommended by the Prophet ﷺ). When children start asking about friends of different faiths.",
    },
    searchQuery: {
      id: "surat al kafirun arab latin artinya",
      en: "surah al-kafirun arabic translation",
    },
    published: "2026-05-28",
  },

  {
    slug: "al-kautsar",
    number: 108,
    name: { id: "Al-Kautsar", en: "Al-Kautsar" },
    arabicName: "الْكَوْثَر",
    meaning: { id: "Nikmat yang Banyak", en: "Abundance" },
    ayahCount: 3,
    juz: 30,
    revelation: "makki",
    themes: ["sholat", "qurban", "syukur"],
    introForKids: {
      id: "Surat terpendek di Al-Qur'an — hanya 3 ayat. Mengandung perintah sholat dan berqurban sebagai bukti syukur.",
      en: "The shortest surah in the Qur'an — only 3 verses. Contains the command to pray and sacrifice as proof of gratitude.",
    },
    ayahs: [
      {
        number: 1,
        arabic: "إِنَّا أَعْطَيْنَاكَ الْكَوْثَرَ",
        transliteration: "Innaa a'taynaakal-kautsar",
        translation: {
          id: "Sungguh, Kami telah memberimu (Muhammad) nikmat yang banyak.",
          en: "Indeed, We have granted you (Muhammad) abundance.",
        },
      },
      {
        number: 2,
        arabic: "فَصَلِّ لِرَبِّكَ وَانْحَرْ",
        transliteration: "Fasalli lirabbika wanhar",
        translation: {
          id: "Maka laksanakanlah sholat karena Tuhanmu, dan berkurbanlah (sebagai ibadah dan mendekatkan diri kepada Allah).",
          en: "So pray to your Lord, and sacrifice.",
        },
      },
      {
        number: 3,
        arabic: "إِنَّ شَانِئَكَ هُوَ الْأَبْتَرُ",
        transliteration: "Inna syaani-aka huwal-abtar",
        translation: {
          id: "Sungguh, orang yang membencimu, dialah yang terputus (dari rahmat Allah).",
          en: "Indeed, your enemy is the one cut off.",
        },
      },
    ],
    tafsirForKids: {
      id: "Allah memberi Nabi Muhammad ﷺ 'al-kautsar' — nikmat yang banyak, termasuk sungai di surga yang juga bernama Kautsar. Lalu Allah mengingatkan: respons yang tepat atas nikmat adalah ibadah (sholat) dan berbagi (qurban). Untuk anak: setiap nikmat yang Allah beri (kesehatan, keluarga, makanan), respons kita adalah sholat dan berbagi.",
      en: "Allah gave Prophet Muhammad ﷺ 'al-kautsar' — abundance, including a river in Paradise also called Kautsar. Then Allah reminds: the right response to a blessing is worship (prayer) and sharing (sacrifice). For children: for every blessing Allah gives us (health, family, food), our response is to pray and share.",
    },
    whenToRead: {
      id: "Bagian dari Juz Amma yang paling pendek — biasanya disurahkan dalam sholat sunnah. Saat menjelaskan adab Idul Adha kepada anak.",
      en: "Part of the shortest in Juz 'Amma — often recited in voluntary prayers. When explaining Eid al-Adha etiquette to a child.",
    },
    searchQuery: {
      id: "surat al kautsar arab latin dan artinya",
      en: "surah al-kawthar arabic translation",
    },
    published: "2026-05-28",
  },

  {
    slug: "al-maun",
    number: 107,
    name: { id: "Al-Maun", en: "Al-Ma'un" },
    arabicName: "الْمَاعُون",
    meaning: { id: "Barang-barang yang Berguna", en: "Small Kindnesses" },
    ayahCount: 7,
    juz: 30,
    revelation: "makki",
    themes: ["sosial", "anak-yatim", "sholat", "peringatan"],
    introForKids: {
      id: "Surat yang mengaitkan kualitas sholat dengan kepedulian sosial. Sholat tanpa peduli sesama = sholat yang tidak utuh.",
      en: "A surah linking the quality of prayer with social compassion. Prayer without caring for others = incomplete prayer.",
    },
    ayahs: [
      {
        number: 1,
        arabic: "أَرَأَيْتَ الَّذِي يُكَذِّبُ بِالدِّينِ",
        transliteration: "Ara-aytalladzii yukadzdzibu bid-diin",
        translation: {
          id: "Tahukah kamu (orang) yang mendustakan agama?",
          en: "Do you see the one who denies the religion?",
        },
      },
      {
        number: 2,
        arabic: "فَذَٰلِكَ الَّذِي يَدُعُّ الْيَتِيمَ",
        transliteration: "Fadzaalikalladzii yadu'-'ul-yatiim",
        translation: {
          id: "Itulah orang yang menghardik anak yatim,",
          en: "That is the one who repulses the orphan,",
        },
      },
      {
        number: 3,
        arabic: "وَلَا يَحُضُّ عَلَىٰ طَعَامِ الْمِسْكِينِ",
        transliteration: "Wa laa yahudh-dhu 'alaa ta'aamil-miskiin",
        translation: {
          id: "dan tidak mendorong memberi makan orang miskin.",
          en: "and does not encourage the feeding of the poor.",
        },
      },
      {
        number: 4,
        arabic: "فَوَيْلٌ لِلْمُصَلِّينَ",
        transliteration: "Fawaylul-lil-mushalliin",
        translation: {
          id: "Maka celakalah orang-orang yang sholat,",
          en: "So woe to those who pray,",
        },
      },
      {
        number: 5,
        arabic: "الَّذِينَ هُمْ عَنْ صَلَاتِهِمْ سَاهُونَ",
        transliteration: "Alladziina hum 'an shalaatihim saahuun",
        translation: {
          id: "(yaitu) orang-orang yang lalai terhadap sholatnya,",
          en: "who are heedless of their prayer,",
        },
      },
      {
        number: 6,
        arabic: "الَّذِينَ هُمْ يُرَاءُونَ",
        transliteration: "Alladziina hum yuraa-uun",
        translation: {
          id: "yang berbuat riya,",
          en: "who show off,",
        },
      },
      {
        number: 7,
        arabic: "وَيَمْنَعُونَ الْمَاعُونَ",
        transliteration: "Wa yamna'uunal-maa'uun",
        translation: {
          id: "dan enggan (memberikan) bantuan.",
          en: "and refuse small kindnesses.",
        },
      },
    ],
    tafsirForKids: {
      id: "Al-Maun mengejutkan: bukan orang yang TIDAK sholat yang dianggap mendustakan agama, tapi orang yang SHOLAT tapi tidak peduli pada anak yatim dan orang miskin. Sholat seharusnya membuat kita lebih lembut, bukan lebih keras. Untuk anak: kalau sudah belajar sholat, langkah berikutnya adalah belajar peduli pada teman yang kekurangan — itulah ujian sholat yang sebenarnya.",
      en: "Al-Ma'un is surprising: it's not those who DON'T pray who are called religion-deniers, but those who DO pray yet don't care for orphans and the poor. Prayer should make us softer, not harder. For children: once they've learned to pray, the next step is learning to care for friends in need — that's the real test of prayer.",
    },
    whenToRead: {
      id: "Saat anak sudah belajar sholat dan butuh memahami dimensi sosial ibadah. Sebelum mengajak anak sedekah.",
      en: "When a child has learned to pray and needs to understand the social dimension of worship. Before taking a child to give sadaqah.",
    },
    searchQuery: {
      id: "surat al maun arab latin dan artinya",
      en: "surah al-maun arabic translation",
    },
    published: "2026-05-28",
  },

  {
    slug: "quraisy",
    number: 106,
    name: { id: "Quraisy", en: "Quraysh" },
    arabicName: "قُرَيْش",
    meaning: { id: "Suku Quraisy", en: "The Tribe of Quraysh" },
    ayahCount: 4,
    juz: 30,
    revelation: "makki",
    themes: ["syukur", "rezeki", "tauhid"],
    introForKids: {
      id: "Tentang nikmat keamanan dan rezeki yang Allah beri kepada suku Quraisy — dan kewajiban mereka untuk bersyukur.",
      en: "About the blessings of safety and provision Allah gave the Quraysh tribe — and their duty to be grateful.",
    },
    ayahs: [
      {
        number: 1,
        arabic: "لِإِيلَافِ قُرَيْشٍ",
        transliteration: "Li-iilaafi quraysy",
        translation: {
          id: "Karena kebiasaan orang-orang Quraisy,",
          en: "For the familiarity of the Quraysh,",
        },
      },
      {
        number: 2,
        arabic: "إِيلَافِهِمْ رِحْلَةَ الشِّتَاءِ وَالصَّيْفِ",
        transliteration: "Iilaafihim rihlatasy-syitaa-i wash-shayf",
        translation: {
          id: "(yaitu) kebiasaan mereka bepergian pada musim dingin dan musim panas,",
          en: "their familiarity with the journey of winter and summer,",
        },
      },
      {
        number: 3,
        arabic: "فَلْيَعْبُدُوا رَبَّ هَٰذَا الْبَيْتِ",
        transliteration: "Falya'buduu rabba haadzal-bayt",
        translation: {
          id: "maka hendaklah mereka menyembah Tuhan (pemilik) rumah ini (Ka'bah),",
          en: "let them worship the Lord of this House (the Ka'bah),",
        },
      },
      {
        number: 4,
        arabic: "الَّذِي أَطْعَمَهُمْ مِنْ جُوعٍ وَآمَنَهُمْ مِنْ خَوْفٍ",
        transliteration: "Alladzii at'amahum min juu'in wa aamanahum min khawf",
        translation: {
          id: "yang telah memberi makanan kepada mereka untuk menghilangkan lapar dan mengamankan mereka dari ketakutan.",
          en: "who has fed them, saving them from hunger, and secured them from fear.",
        },
      },
    ],
    tafsirForKids: {
      id: "Suku Quraisy dilindungi karena Ka'bah ada di tengah-tengah mereka. Mereka bisa berdagang dengan aman ke Yaman (musim dingin) dan ke Syam (musim panas). Allah ingatkan: bersyukurlah dengan menyembah-Nya. Untuk anak: dua nikmat paling dasar — makanan dan keamanan — datangnya dari Allah. Bukan kebetulan, bukan usaha sendiri sepenuhnya.",
      en: "The Quraysh were protected because the Ka'bah was among them. They could trade safely to Yemen (winter) and Syria (summer). Allah reminds them: be grateful by worshipping Him. For children: the two most basic blessings — food and safety — come from Allah. Not by accident, not entirely by our own effort.",
    },
    whenToRead: {
      id: "Saat berdoa minta keamanan perjalanan. Mengajarkan anak syukur atas hal-hal yang sering dianggap biasa.",
      en: "When praying for safe travel. Teaching children gratitude for things often taken for granted.",
    },
    searchQuery: {
      id: "surat quraisy arab latin dan artinya",
      en: "surah quraysh arabic translation",
    },
    published: "2026-05-28",
  },

  {
    slug: "al-fil",
    number: 105,
    name: { id: "Al-Fil", en: "Al-Fil" },
    arabicName: "الْفِيل",
    meaning: { id: "Gajah", en: "The Elephant" },
    ayahCount: 5,
    juz: 30,
    revelation: "makki",
    themes: ["sejarah", "tauhid", "perlindungan"],
    introForKids: {
      id: "Cerita pasukan gajah Abrahah yang hendak menghancurkan Ka'bah — dihancurkan Allah dengan burung kecil.",
      en: "The story of Abrahah's elephant army that tried to destroy the Ka'bah — defeated by small birds Allah sent.",
    },
    ayahs: [
      {
        number: 1,
        arabic: "أَلَمْ تَرَ كَيْفَ فَعَلَ رَبُّكَ بِأَصْحَابِ الْفِيلِ",
        transliteration: "Alam tara kayfa fa'ala rabbuka bi-as-haabil-fiil",
        translation: {
          id: "Tidakkah engkau (Muhammad) memperhatikan bagaimana Tuhanmu telah bertindak terhadap pasukan bergajah?",
          en: "Have you not seen how your Lord dealt with the army of the elephant?",
        },
      },
      {
        number: 2,
        arabic: "أَلَمْ يَجْعَلْ كَيْدَهُمْ فِي تَضْلِيلٍ",
        transliteration: "Alam yaj'al kaydahum fii tadhliil",
        translation: {
          id: "Bukankah Dia telah menjadikan tipu daya mereka sia-sia?",
          en: "Did He not bring their plan to nothing?",
        },
      },
      {
        number: 3,
        arabic: "وَأَرْسَلَ عَلَيْهِمْ طَيْرًا أَبَابِيلَ",
        transliteration: "Wa arsala 'alayhim tayran abaabiil",
        translation: {
          id: "Dan Dia mengirimkan kepada mereka burung yang berbondong-bondong,",
          en: "And He sent against them birds in flocks,",
        },
      },
      {
        number: 4,
        arabic: "تَرْمِيهِمْ بِحِجَارَةٍ مِنْ سِجِّيلٍ",
        transliteration: "Tarmiihim bihijaaratim-min sijjiil",
        translation: {
          id: "yang melempari mereka dengan batu dari tanah liat yang dibakar,",
          en: "striking them with stones of baked clay,",
        },
      },
      {
        number: 5,
        arabic: "فَجَعَلَهُمْ كَعَصْفٍ مَأْكُولٍ",
        transliteration: "Faja'alahum ka'asfim-ma'kuul",
        translation: {
          id: "sehingga mereka dijadikan-Nya seperti daun-daun yang dimakan (ulat).",
          en: "and made them like devoured chaff.",
        },
      },
    ],
    tafsirForKids: {
      id: "Sekitar 570 M, Abrahah — gubernur dari Yaman — membawa pasukan gajah besar untuk menghancurkan Ka'bah. Penduduk Mekkah tidak punya pasukan untuk melawan. Mereka berdoa, lalu Allah mengirim ribuan burung kecil ('ababil') yang melempar batu kecil. Pasukan gajah hancur. Tahun itu disebut 'Tahun Gajah' — dan di tahun itulah Nabi Muhammad ﷺ lahir. Untuk anak: Allah bisa melindungi dengan hal yang paling tidak diduga.",
      en: "Around 570 CE, Abrahah — governor of Yemen — brought a great elephant army to destroy the Ka'bah. The people of Makkah had no army to fight back. They prayed, and Allah sent thousands of small birds ('ababil') who threw small stones. The elephant army was destroyed. That year is called 'The Year of the Elephant' — and in that year, the Prophet Muhammad ﷺ was born. For children: Allah can protect using the most unexpected means.",
    },
    whenToRead: {
      id: "Bersama cerita kelahiran Nabi Muhammad. Saat anak takut akan sesuatu yang besar.",
      en: "Together with the story of the Prophet's birth. When a child is afraid of something big.",
    },
    searchQuery: {
      id: "surat al fil arab latin dan artinya kisah",
      en: "surah al-fil arabic translation story",
    },
    published: "2026-05-28",
  },

  {
    slug: "al-humazah",
    number: 104,
    name: { id: "Al-Humazah", en: "Al-Humazah" },
    arabicName: "الْهُمَزَة",
    meaning: { id: "Pengumpat", en: "The Slanderer" },
    ayahCount: 9,
    juz: 30,
    revelation: "makki",
    themes: ["akhlak", "peringatan", "harta"],
    introForKids: {
      id: "Peringatan keras terhadap dua sifat buruk: menggunjing orang dan menumpuk harta dengan kikir.",
      en: "A stern warning against two evil traits: backbiting others and hoarding wealth stingily.",
    },
    ayahs: [
      {
        number: 1,
        arabic: "وَيْلٌ لِكُلِّ هُمَزَةٍ لُمَزَةٍ",
        transliteration: "Waylul-likulli humazatil-lumazah",
        translation: {
          id: "Celakalah bagi setiap pengumpat dan pencela,",
          en: "Woe to every slanderer and backbiter,",
        },
      },
      {
        number: 2,
        arabic: "الَّذِي جَمَعَ مَالًا وَعَدَّدَهُ",
        transliteration: "Alladzii jama'a maalan wa 'addadah",
        translation: {
          id: "yang mengumpulkan harta dan menghitung-hitungnya,",
          en: "who collects wealth and counts it,",
        },
      },
      {
        number: 3,
        arabic: "يَحْسَبُ أَنَّ مَالَهُ أَخْلَدَهُ",
        transliteration: "Yahsabu anna maalahuu akhladah",
        translation: {
          id: "dia mengira bahwa hartanya itu dapat mengekalkannya.",
          en: "thinking his wealth will make him immortal.",
        },
      },
      {
        number: 4,
        arabic: "كَلَّا ۖ لَيُنْبَذَنَّ فِي الْحُطَمَةِ",
        transliteration: "Kallaa layunbadzanna fil-hutamah",
        translation: {
          id: "Sekali-kali tidak! Pasti dia akan dilemparkan ke dalam Huthamah.",
          en: "By no means! He will surely be cast into the Crusher.",
        },
      },
      {
        number: 5,
        arabic: "وَمَا أَدْرَاكَ مَا الْحُطَمَةُ",
        transliteration: "Wa maa adraaka mal-hutamah",
        translation: {
          id: "Dan tahukah engkau apa Huthamah itu?",
          en: "And what will make you know what the Crusher is?",
        },
      },
      {
        number: 6,
        arabic: "نَارُ اللَّهِ الْمُوقَدَةُ",
        transliteration: "Naarullaahil-muuqadah",
        translation: {
          id: "(Yaitu) api (azab) Allah yang dinyalakan,",
          en: "It is the kindled fire of Allah,",
        },
      },
      {
        number: 7,
        arabic: "الَّتِي تَطَّلِعُ عَلَى الْأَفْئِدَةِ",
        transliteration: "Allatii tat-tali'u 'alal-af-idah",
        translation: {
          id: "yang (membakar) sampai ke hati.",
          en: "which mounts up to the hearts.",
        },
      },
      {
        number: 8,
        arabic: "إِنَّهَا عَلَيْهِمْ مُؤْصَدَةٌ",
        transliteration: "Innahaa 'alayhim mu'shadah",
        translation: {
          id: "Sungguh, api itu ditutup rapat atas mereka,",
          en: "Indeed, it will be closed down upon them,",
        },
      },
      {
        number: 9,
        arabic: "فِي عَمَدٍ مُمَدَّدَةٍ",
        transliteration: "Fii 'amadim-mumaddadah",
        translation: {
          id: "(sedang mereka itu) diikat pada tiang-tiang yang panjang.",
          en: "in extended columns.",
        },
      },
    ],
    tafsirForKids: {
      id: "Al-Humazah mengecam dua perilaku: pertama, suka mengumpat dan menjelek-jelekkan orang di belakang mereka. Kedua, mengumpulkan harta sambil pelit. Yang menarik: kedua sifat ini sering ada pada orang yang sama — pelit pada harta cenderung juga 'pelit pada lidah' yaitu suka mencela orang. Untuk anak: jaga lidah dan jaga tangan untuk berbagi.",
      en: "Al-Humazah condemns two behaviors: first, gossiping and speaking ill of people behind their backs. Second, hoarding wealth stingily. Interestingly: these two often appear in the same person — being stingy with money often goes with being 'stingy with the tongue' too. For children: guard your tongue and keep your hands ready to share.",
    },
    whenToRead: {
      id: "Saat anak butuh memahami bahwa kata-kata punya konsekuensi. Saat membahas adab berbicara di rumah.",
      en: "When a child needs to understand that words have consequences. When discussing speech etiquette at home.",
    },
    searchQuery: {
      id: "surat al humazah arab latin dan artinya",
      en: "surah al-humazah arabic translation",
    },
    published: "2026-05-28",
  },

  {
    slug: "al-asr",
    number: 103,
    name: { id: "Al-Asr", en: "Al-Asr" },
    arabicName: "الْعَصْر",
    meaning: { id: "Masa / Waktu", en: "Time" },
    ayahCount: 3,
    juz: 30,
    revelation: "makki",
    themes: ["waktu", "iman", "amal", "sabar"],
    introForKids: {
      id: "Tiga ayat yang dianggap Imam Syafi'i sebagai rangkuman seluruh Al-Qur'an. Cara hidup yang tidak rugi.",
      en: "Three verses Imam Shafi'i considered a summary of the entire Qur'an. The way to live without loss.",
    },
    ayahs: [
      {
        number: 1,
        arabic: "وَالْعَصْرِ",
        transliteration: "Wal-'ashr",
        translation: {
          id: "Demi masa,",
          en: "By Time,",
        },
      },
      {
        number: 2,
        arabic: "إِنَّ الْإِنْسَانَ لَفِي خُسْرٍ",
        transliteration: "Innal-insaana lafii khusr",
        translation: {
          id: "sungguh, manusia berada dalam kerugian,",
          en: "indeed, mankind is in loss,",
        },
      },
      {
        number: 3,
        arabic: "إِلَّا الَّذِينَ آمَنُوا وَعَمِلُوا الصَّالِحَاتِ وَتَوَاصَوْا بِالْحَقِّ وَتَوَاصَوْا بِالصَّبْرِ",
        transliteration: "Illalladziina aamanuu wa 'amilush-shaalihaati wa tawaashaw bil-haqqi wa tawaashaw bish-shabr",
        translation: {
          id: "kecuali orang-orang yang beriman dan mengerjakan kebajikan serta saling menasihati untuk kebenaran dan saling menasihati untuk kesabaran.",
          en: "except those who believe and do righteous deeds, and advise each other to truth, and advise each other to patience.",
        },
      },
    ],
    tafsirForKids: {
      id: "Surat ini cuma tiga ayat tapi berisi resep lengkap hidup yang tidak rugi: (1) iman kepada Allah, (2) amal saleh (berbuat baik), (3) saling mengingatkan tentang kebenaran, (4) saling mengingatkan untuk sabar. Imam Syafi'i bilang: 'Jika Allah hanya menurunkan surat ini, itu sudah cukup sebagai petunjuk untuk manusia.' Untuk anak: hafalkan, lalu hidupkan empat poin itu di rumah.",
      en: "This surah is only three verses but contains the complete recipe for a life without loss: (1) faith in Allah, (2) good deeds, (3) reminding each other about truth, (4) reminding each other about patience. Imam Shafi'i said: 'If Allah had revealed only this surah, it would be sufficient guidance for humanity.' For children: memorize it, then live those four points at home.",
    },
    whenToRead: {
      id: "Setiap kali anak pulang dari sekolah atau bermain — dua ayat ini bisa jadi 'cek harian' apa yang dilakukan hari itu masuk yang mana.",
      en: "Each time a child returns from school or play — these verses can be a 'daily check' for what was done today.",
    },
    searchQuery: {
      id: "surat al asr arab latin dan artinya",
      en: "surah al-asr arabic translation",
    },
    published: "2026-05-28",
  },

  {
    slug: "at-takatsur",
    number: 102,
    name: { id: "At-Takatsur", en: "At-Takathur" },
    arabicName: "التَّكَاثُر",
    meaning: { id: "Bermegah-Megahan", en: "Rivalry in Worldly Increase" },
    ayahCount: 8,
    juz: 30,
    revelation: "makki",
    themes: ["dunia", "akhirat", "peringatan"],
    introForKids: {
      id: "Peringatan terhadap obsesi mengumpulkan harta dan jabatan sampai lupa akhirat.",
      en: "A warning against obsession with collecting wealth and status until we forget the afterlife.",
    },
    ayahs: [
      {
        number: 1,
        arabic: "أَلْهَاكُمُ التَّكَاثُرُ",
        transliteration: "Alhaakumut-takaatsur",
        translation: {
          id: "Bermegah-megahan telah melalaikan kamu,",
          en: "Competition for more has distracted you,",
        },
      },
      {
        number: 2,
        arabic: "حَتَّىٰ زُرْتُمُ الْمَقَابِرَ",
        transliteration: "Hattaa zurtumul-maqaabir",
        translation: {
          id: "sampai kamu masuk ke dalam kubur.",
          en: "until you visit the graves.",
        },
      },
      {
        number: 3,
        arabic: "كَلَّا سَوْفَ تَعْلَمُونَ",
        transliteration: "Kallaa sawfa ta'lamuun",
        translation: {
          id: "Sekali-kali tidak! Kelak kamu akan mengetahui (akibat perbuatanmu itu),",
          en: "No! You will come to know.",
        },
      },
      {
        number: 4,
        arabic: "ثُمَّ كَلَّا سَوْفَ تَعْلَمُونَ",
        transliteration: "Tsumma kallaa sawfa ta'lamuun",
        translation: {
          id: "kemudian sekali-kali tidak! Kelak kamu akan mengetahui.",
          en: "Then no! You will come to know.",
        },
      },
      {
        number: 5,
        arabic: "كَلَّا لَوْ تَعْلَمُونَ عِلْمَ الْيَقِينِ",
        transliteration: "Kallaa law ta'lamuuna 'ilmal-yaqiin",
        translation: {
          id: "Sekali-kali tidak! Sekiranya kamu mengetahui dengan pasti,",
          en: "No! If only you knew with certainty,",
        },
      },
      {
        number: 6,
        arabic: "لَتَرَوُنَّ الْجَحِيمَ",
        transliteration: "Latarawunnal-jahiim",
        translation: {
          id: "niscaya kamu benar-benar akan melihat neraka Jahim.",
          en: "you would surely see the Hellfire.",
        },
      },
      {
        number: 7,
        arabic: "ثُمَّ لَتَرَوُنَّهَا عَيْنَ الْيَقِينِ",
        transliteration: "Tsumma latarawunnahaa 'aynal-yaqiin",
        translation: {
          id: "Kemudian kamu benar-benar akan melihatnya dengan mata kepala sendiri,",
          en: "Then you would see it with the eye of certainty.",
        },
      },
      {
        number: 8,
        arabic: "ثُمَّ لَتُسْأَلُنَّ يَوْمَئِذٍ عَنِ النَّعِيمِ",
        transliteration: "Tsumma latus-alunna yawma-idzin 'anin-na'iim",
        translation: {
          id: "kemudian kamu benar-benar akan ditanya pada hari itu tentang kenikmatan (yang megah di dunia itu).",
          en: "Then you will surely be asked that day about pleasure.",
        },
      },
    ],
    tafsirForKids: {
      id: "Surat ini menggambarkan manusia yang sibuk bermegah-megahan — kekayaan, jabatan, gadget terbaru — sampai akhirnya 'masuk kubur.' Allah ingatkan: setiap nikmat yang kita rasakan di dunia akan ditanya di akhirat — bukan untuk dihukum, tapi untuk dilihat: digunakan untuk kebaikan atau dipamerkan saja. Untuk anak: barang baru yang kita punya bukan untuk dibanggakan, tapi untuk disyukuri dan dibagi.",
      en: "This surah depicts people busy competing — wealth, status, the latest gadgets — until finally 'visiting the graves.' Allah reminds: every blessing we enjoy in this life will be asked about in the next — not to be punished, but to be seen: used for good or just for showing off. For children: new things we own aren't for boasting — they're for gratitude and sharing.",
    },
    whenToRead: {
      id: "Saat anak ingin sesuatu hanya karena teman punya. Saat keluarga dapat rezeki tambahan.",
      en: "When a child wants something just because a friend has it. When a family receives extra provision.",
    },
    searchQuery: {
      id: "surat at takatsur arab latin dan artinya",
      en: "surah at-takathur arabic translation",
    },
    published: "2026-05-28",
  },

  {
    slug: "al-qariah",
    number: 101,
    name: { id: "Al-Qariah", en: "Al-Qari'ah" },
    arabicName: "الْقَارِعَة",
    meaning: { id: "Hari Kiamat", en: "The Striking Calamity" },
    ayahCount: 11,
    juz: 30,
    revelation: "makki",
    themes: ["kiamat", "akhirat", "timbangan-amal"],
    introForKids: {
      id: "Gambaran hari kiamat — dan timbangan amal yang menentukan nasib setiap orang.",
      en: "A depiction of the Day of Judgement — and the scales of deeds that determine everyone's fate.",
    },
    ayahs: [
      {
        number: 1,
        arabic: "الْقَارِعَةُ",
        transliteration: "Al-qaari'ah",
        translation: {
          id: "Hari Kiamat,",
          en: "The Striking Calamity!",
        },
      },
      {
        number: 2,
        arabic: "مَا الْقَارِعَةُ",
        transliteration: "Mal-qaari'ah",
        translation: {
          id: "apakah hari Kiamat itu?",
          en: "What is the Striking Calamity?",
        },
      },
      {
        number: 3,
        arabic: "وَمَا أَدْرَاكَ مَا الْقَارِعَةُ",
        transliteration: "Wa maa adraaka mal-qaari'ah",
        translation: {
          id: "Dan tahukah kamu apakah hari Kiamat itu?",
          en: "And what will make you know what the Striking Calamity is?",
        },
      },
      {
        number: 4,
        arabic: "يَوْمَ يَكُونُ النَّاسُ كَالْفَرَاشِ الْمَبْثُوثِ",
        transliteration: "Yawma yakuunun-naasu kal-faraasyil-mabtsuuts",
        translation: {
          id: "Pada hari itu manusia seperti laron yang berterbangan,",
          en: "The Day when people will be like scattered moths,",
        },
      },
      {
        number: 5,
        arabic: "وَتَكُونُ الْجِبَالُ كَالْعِهْنِ الْمَنْفُوشِ",
        transliteration: "Wa takuunul-jibaalu kal-'ihnil-manfuusy",
        translation: {
          id: "dan gunung-gunung seperti bulu yang dihambur-hamburkan.",
          en: "and the mountains will be like fluffed wool.",
        },
      },
      {
        number: 6,
        arabic: "فَأَمَّا مَنْ ثَقُلَتْ مَوَازِينُهُ",
        transliteration: "Fa-ammaa man tsaqulat mawaaziinuh",
        translation: {
          id: "Maka adapun orang yang berat timbangan (kebaikan)nya,",
          en: "Then as for one whose scales are heavy (with good),",
        },
      },
      {
        number: 7,
        arabic: "فَهُوَ فِي عِيشَةٍ رَاضِيَةٍ",
        transliteration: "Fahuwa fii 'iisyatir-raadhiyah",
        translation: {
          id: "maka dia berada dalam kehidupan yang memuaskan (senang),",
          en: "he will be in a pleasing life.",
        },
      },
      {
        number: 8,
        arabic: "وَأَمَّا مَنْ خَفَّتْ مَوَازِينُهُ",
        transliteration: "Wa ammaa man khaffat mawaaziinuh",
        translation: {
          id: "Dan adapun orang yang ringan timbangan (kebaikan)nya,",
          en: "But as for one whose scales are light,",
        },
      },
      {
        number: 9,
        arabic: "فَأُمُّهُ هَاوِيَةٌ",
        transliteration: "Fa-ummuhuu haawiyah",
        translation: {
          id: "maka tempat kembalinya adalah Hawiyah (neraka).",
          en: "his refuge will be an abyss.",
        },
      },
      {
        number: 10,
        arabic: "وَمَا أَدْرَاكَ مَا هِيَهْ",
        transliteration: "Wa maa adraaka maa hiyah",
        translation: {
          id: "Dan tahukah kamu apakah neraka Hawiyah itu?",
          en: "And what will make you know what it is?",
        },
      },
      {
        number: 11,
        arabic: "نَارٌ حَامِيَةٌ",
        transliteration: "Naarun haamiyah",
        translation: {
          id: "(Yaitu) api yang sangat panas.",
          en: "A fire intensely hot.",
        },
      },
    ],
    tafsirForKids: {
      id: "Al-Qariah menggambarkan hari kiamat dengan dua perumpamaan: manusia jadi seperti laron (banyak dan kacau-balau), gunung jadi seperti bulu domba yang dihambur-hamburkan. Lalu Allah menjelaskan: setiap orang amalnya ditimbang. Timbangan baik berat = hidup memuaskan di surga. Timbangan baik ringan = ke Hawiyah. Untuk anak: setiap kebaikan kecil (membantu adik, sopan ke orang tua, sholat tepat waktu) ditimbang oleh Allah.",
      en: "Al-Qari'ah depicts the Day of Judgement through two metaphors: people like scattered moths, mountains like fluffed wool. Then Allah explains: each person's deeds are weighed. Heavy good = a pleasing life in Paradise. Light good = the abyss. For children: every small kindness (helping a sibling, being polite to parents, praying on time) is weighed by Allah.",
    },
    whenToRead: {
      id: "Saat menjelaskan konsep akhirat ke anak dengan cara yang tidak menakutkan. Saat anak melakukan kebaikan kecil — ingatkan ia bahwa itu ditimbang.",
      en: "When explaining the afterlife to a child without frightening them. When a child does small good — remind them it's being weighed.",
    },
    searchQuery: {
      id: "surat al qariah arab latin dan artinya",
      en: "surah al-qari'ah arabic translation",
    },
    published: "2026-05-28",
  },
];

export function getAllSurah(): Surah[] {
  return [...surahList].sort((a, b) => b.number - a.number);
}

export function getSurahBySlug(slug: string): Surah | undefined {
  return surahList.find((s) => s.slug === slug);
}
