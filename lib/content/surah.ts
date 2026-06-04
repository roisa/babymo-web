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

  {
    slug: "adh-dhuha",
    number: 93,
    name: { id: "Adh-Dhuha", en: "Ad-Duha" },
    arabicName: "الضُّحَى",
    meaning: { id: "Waktu Dhuha (Pagi)", en: "The Morning Hours" },
    ayahCount: 11,
    juz: 30,
    revelation: "makki",
    themes: ["penghiburan", "syukur", "anak-yatim"],
    introForKids: {
      id: "Surat yang turun untuk menghibur Rasulullah ﷺ saat sedih — Allah tidak pernah meninggalkan beliau, dan tidak akan meninggalkan kita.",
      en: "Revealed to comfort the Prophet ﷺ when he was sad — Allah never left him, and won't leave us.",
    },
    ayahs: [
      { number: 1, arabic: "وَالضُّحَىٰ", transliteration: "Wadh-dhuhaa", translation: { id: "Demi waktu dhuha (ketika matahari naik sepenggalah),", en: "By the morning brightness," } },
      { number: 2, arabic: "وَاللَّيْلِ إِذَا سَجَىٰ", transliteration: "Wal-laili idzaa sajaa", translation: { id: "dan demi malam apabila telah sunyi,", en: "and by the night when it grows still," } },
      { number: 3, arabic: "مَا وَدَّعَكَ رَبُّكَ وَمَا قَلَىٰ", transliteration: "Maa wadda'aka rabbuka wa maa qalaa", translation: { id: "Tuhanmu tidak meninggalkanmu dan tidak (pula) membencimu.", en: "Your Lord has not forsaken you, nor does He despise you." } },
      { number: 4, arabic: "وَلَلْآخِرَةُ خَيْرٌ لَكَ مِنَ الْأُولَىٰ", transliteration: "Wa lal-aakhiratu khairul-laka minal-uulaa", translation: { id: "Dan sungguh, akhir itu lebih baik bagimu daripada permulaan.", en: "And the Hereafter is better for you than the first life." } },
      { number: 5, arabic: "وَلَسَوْفَ يُعْطِيكَ رَبُّكَ فَتَرْضَىٰ", transliteration: "Wa lasaufa yu'thiika rabbuka fatardhaa", translation: { id: "Dan sungguh, kelak Tuhanmu pasti memberikan karunia-Nya kepadamu, sehingga engkau menjadi puas.", en: "And your Lord is going to give you, and you will be satisfied." } },
      { number: 6, arabic: "أَلَمْ يَجِدْكَ يَتِيمًا فَآوَىٰ", transliteration: "Alam yajidka yatiiman fa-aawaa", translation: { id: "Bukankah Dia mendapatimu sebagai seorang yatim, lalu Dia melindungimu?", en: "Did He not find you an orphan and give you refuge?" } },
      { number: 7, arabic: "وَوَجَدَكَ ضَالًّا فَهَدَىٰ", transliteration: "Wa wajadaka dhaallan fahadaa", translation: { id: "Dan Dia mendapatimu sebagai seorang yang bingung, lalu Dia memberikan petunjuk.", en: "And He found you lost and guided you," } },
      { number: 8, arabic: "وَوَجَدَكَ عَائِلًا فَأَغْنَىٰ", transliteration: "Wa wajadaka 'aa-ilan fa-aghnaa", translation: { id: "Dan Dia mendapatimu sebagai seorang yang kekurangan, lalu Dia memberikan kecukupan.", en: "And He found you poor and made you self-sufficient." } },
      { number: 9, arabic: "فَأَمَّا الْيَتِيمَ فَلَا تَقْهَرْ", transliteration: "Fa-ammal-yatiima falaa taqhar", translation: { id: "Maka terhadap anak yatim janganlah engkau berlaku sewenang-wenang.", en: "So as for the orphan, do not oppress him." } },
      { number: 10, arabic: "وَأَمَّا السَّائِلَ فَلَا تَنْهَرْ", transliteration: "Wa ammas-saa-ila falaa tanhar", translation: { id: "Dan terhadap orang yang meminta-minta janganlah engkau menghardiknya.", en: "And as for the one who asks, do not repel him." } },
      { number: 11, arabic: "وَأَمَّا بِنِعْمَةِ رَبِّكَ فَحَدِّثْ", transliteration: "Wa ammaa bini'mati rabbika fahaddits", translation: { id: "Dan terhadap nikmat Tuhanmu hendaklah engkau menyebut-nyebutnya (dengan bersyukur).", en: "And as for the favor of your Lord, proclaim it." } },
    ],
    tafsirForKids: {
      id: "Suatu ketika wahyu berhenti turun beberapa lama, dan orang-orang mengejek Rasulullah ﷺ bahwa Allah telah meninggalkannya. Beliau sangat sedih. Lalu turunlah surat ini: Allah tidak meninggalkanmu, tidak membencimu — ingatlah bagaimana Allah menjagamu sejak yatim. Untuk anak: saat sedih atau merasa sendiri, ingat — Allah selalu ada dan sayang. Dan kalau kita diberi nikmat, jangan sombong: jadilah baik pada yatim dan orang yang kekurangan.",
      en: "Revelation once paused for a while, and people mocked the Prophet ﷺ that Allah had abandoned him. He was deeply saddened. Then this surah came: Allah hasn't left you or despised you — remember how He cared for you as an orphan. For children: when you feel sad or alone, remember — Allah is always there and loving. And when blessed, don't be proud: be kind to orphans and those in need.",
    },
    whenToRead: {
      id: "Saat anak sedih atau merasa ditinggalkan. Bagian dari hafalan Juz Amma.",
      en: "When a child is sad or feels left out. Part of Juz 'Amma memorization.",
    },
    searchQuery: { id: "surat ad dhuha arab latin dan artinya", en: "surah ad-duha arabic translation" },
    published: "2026-05-28",
  },

  {
    slug: "al-insyirah",
    number: 94,
    name: { id: "Al-Insyirah (Asy-Syarh)", en: "Al-Inshirah (Ash-Sharh)" },
    arabicName: "الشَّرْح",
    meaning: { id: "Melapangkan", en: "The Relief" },
    ayahCount: 8,
    juz: 30,
    revelation: "makki",
    themes: ["penghiburan", "harapan", "sabar"],
    introForKids: {
      id: "Surat penuh harapan: setelah kesulitan pasti ada kemudahan. Diulang dua kali supaya kita yakin.",
      en: "A surah full of hope: after hardship comes ease. Repeated twice so we're sure.",
    },
    ayahs: [
      { number: 1, arabic: "أَلَمْ نَشْرَحْ لَكَ صَدْرَكَ", transliteration: "Alam nasyrah laka shadrak", translation: { id: "Bukankah Kami telah melapangkan dadamu (Muhammad)?", en: "Did We not expand for you your breast?" } },
      { number: 2, arabic: "وَوَضَعْنَا عَنْكَ وِزْرَكَ", transliteration: "Wa wadha'naa 'anka wizrak", translation: { id: "Dan Kami pun telah menurunkan bebanmu darimu,", en: "And We removed from you your burden," } },
      { number: 3, arabic: "الَّذِي أَنْقَضَ ظَهْرَكَ", transliteration: "Alladzii anqadha zhahrak", translation: { id: "yang memberatkan punggungmu,", en: "which had weighed upon your back," } },
      { number: 4, arabic: "وَرَفَعْنَا لَكَ ذِكْرَكَ", transliteration: "Wa rafa'naa laka dzikrak", translation: { id: "dan Kami tinggikan sebutan (nama)mu bagimu.", en: "And raised high for you your repute." } },
      { number: 5, arabic: "فَإِنَّ مَعَ الْعُسْرِ يُسْرًا", transliteration: "Fa-inna ma'al-'usri yusraa", translation: { id: "Maka sesungguhnya bersama kesulitan ada kemudahan,", en: "For indeed, with hardship comes ease." } },
      { number: 6, arabic: "إِنَّ مَعَ الْعُسْرِ يُسْرًا", transliteration: "Inna ma'al-'usri yusraa", translation: { id: "sesungguhnya bersama kesulitan ada kemudahan.", en: "Indeed, with hardship comes ease." } },
      { number: 7, arabic: "فَإِذَا فَرَغْتَ فَانْصَبْ", transliteration: "Fa-idzaa faraghta fanshab", translation: { id: "Maka apabila engkau telah selesai (dari suatu urusan), tetaplah bekerja keras (untuk urusan yang lain),", en: "So when you have finished, then stand up (for worship)." } },
      { number: 8, arabic: "وَإِلَىٰ رَبِّكَ فَارْغَبْ", transliteration: "Wa ilaa rabbika farghab", translation: { id: "dan hanya kepada Tuhanmulah engkau berharap.", en: "And to your Lord direct your longing." } },
    ],
    tafsirForKids: {
      id: "Allah mengingatkan: setiap kesulitan pasti diikuti kemudahan — diulang dua kali supaya kita benar-benar yakin. Untuk anak: kalau lagi susah belajar, susah hafalan, atau lagi sedih — ingat, sebentar lagi akan ada kemudahan. Dan setelah selesai satu hal, lanjut berbuat baik yang lain, sambil terus berharap kepada Allah.",
      en: "Allah reminds: every hardship is followed by ease — said twice so we truly believe it. For children: when studying is hard, memorizing is hard, or you're sad — remember, ease is coming soon. And after finishing one thing, move on to another good deed, always hoping in Allah.",
    },
    whenToRead: {
      id: "Saat anak menghadapi kesulitan atau hampir menyerah. Sering dibaca berpasangan dengan Adh-Dhuha.",
      en: "When a child faces difficulty or is about to give up. Often paired with Ad-Duha.",
    },
    searchQuery: { id: "surat al insyirah arab latin dan artinya", en: "surah al-inshirah arabic translation" },
    published: "2026-05-28",
  },

  {
    slug: "at-tin",
    number: 95,
    name: { id: "At-Tin", en: "At-Tin" },
    arabicName: "التِّين",
    meaning: { id: "Buah Tin", en: "The Fig" },
    ayahCount: 8,
    juz: 30,
    revelation: "makki",
    themes: ["penciptaan", "iman", "amal"],
    introForKids: {
      id: "Allah menciptakan manusia dalam bentuk yang terbaik — dan mengingatkan agar kita menjaga kebaikan itu dengan iman dan amal.",
      en: "Allah created humans in the best form — and reminds us to keep that goodness through faith and good deeds.",
    },
    ayahs: [
      { number: 1, arabic: "وَالتِّينِ وَالزَّيْتُونِ", transliteration: "Wat-tiini waz-zaituun", translation: { id: "Demi (buah) Tin dan (buah) Zaitun,", en: "By the fig and the olive," } },
      { number: 2, arabic: "وَطُورِ سِينِينَ", transliteration: "Wa thuuri siiniin", translation: { id: "dan demi bukit Sinai,", en: "and by Mount Sinai," } },
      { number: 3, arabic: "وَهَٰذَا الْبَلَدِ الْأَمِينِ", transliteration: "Wa haadzal-baladil-amiin", translation: { id: "dan demi negeri (Mekkah) yang aman ini.", en: "and by this secure city (Makkah)," } },
      { number: 4, arabic: "لَقَدْ خَلَقْنَا الْإِنْسَانَ فِي أَحْسَنِ تَقْوِيمٍ", transliteration: "Laqad khalaqnal-insaana fii ahsani taqwiim", translation: { id: "Sungguh, Kami telah menciptakan manusia dalam bentuk yang sebaik-baiknya.", en: "We have certainly created man in the best of stature." } },
      { number: 5, arabic: "ثُمَّ رَدَدْنَاهُ أَسْفَلَ سَافِلِينَ", transliteration: "Tsumma radadnaahu asfala saafiliin", translation: { id: "Kemudian Kami kembalikan dia ke tempat yang serendah-rendahnya,", en: "Then We return him to the lowest of the low," } },
      { number: 6, arabic: "إِلَّا الَّذِينَ آمَنُوا وَعَمِلُوا الصَّالِحَاتِ فَلَهُمْ أَجْرٌ غَيْرُ مَمْنُونٍ", transliteration: "Illalladziina aamanuu wa 'amilush-shaalihaati falahum ajrun ghairu mamnuun", translation: { id: "kecuali orang-orang yang beriman dan mengerjakan kebajikan; maka mereka akan mendapat pahala yang tidak ada putus-putusnya.", en: "except those who believe and do righteous deeds, for they will have a reward uninterrupted." } },
      { number: 7, arabic: "فَمَا يُكَذِّبُكَ بَعْدُ بِالدِّينِ", transliteration: "Famaa yukadzdzibuka ba'du bid-diin", translation: { id: "Maka apa yang menyebabkan (mereka) mendustakanmu (tentang) hari pembalasan setelah (adanya keterangan) itu?", en: "So what yet causes you to deny the Recompense?" } },
      { number: 8, arabic: "أَلَيْسَ اللَّهُ بِأَحْكَمِ الْحَاكِمِينَ", transliteration: "Alaisallaahu bi-ahkamil-haakimiin", translation: { id: "Bukankah Allah hakim yang paling adil?", en: "Is not Allah the most just of judges?" } },
    ],
    tafsirForKids: {
      id: "Allah bersumpah dengan tempat-tempat penuh berkah, lalu menyampaikan: manusia diciptakan dalam bentuk paling baik — tubuh sempurna, akal, hati. Tapi yang menjaga kemuliaan itu hanyalah iman dan amal saleh. Untuk anak: kita diciptakan istimewa oleh Allah. Cara menjaga keistimewaan itu: percaya kepada Allah dan berbuat baik.",
      en: "Allah swears by blessed places, then says: humans are created in the best form — perfect body, mind, heart. But what preserves that honor is only faith and good deeds. For children: we were created special by Allah. The way to keep that specialness: believe in Allah and do good.",
    },
    whenToRead: {
      id: "Mengajarkan anak bahwa setiap manusia diciptakan istimewa. Bagian hafalan Juz Amma.",
      en: "Teaching children that every human is created special. Part of Juz 'Amma.",
    },
    searchQuery: { id: "surat at tin arab latin dan artinya", en: "surah at-tin arabic translation" },
    published: "2026-05-28",
  },

  {
    slug: "al-qadr",
    number: 97,
    name: { id: "Al-Qadr", en: "Al-Qadr" },
    arabicName: "الْقَدْر",
    meaning: { id: "Kemuliaan", en: "The Power / Decree" },
    ayahCount: 5,
    juz: 30,
    revelation: "makki",
    themes: ["ramadan", "lailatul-qadr", "al-quran"],
    introForKids: {
      id: "Tentang Lailatul Qadr — satu malam di Ramadan yang lebih baik dari 1000 bulan. Malam Al-Qur'an pertama kali turun.",
      en: "About Lailatul Qadr — one night in Ramadan better than 1000 months. The night the Qur'an first descended.",
    },
    ayahs: [
      { number: 1, arabic: "إِنَّا أَنْزَلْنَاهُ فِي لَيْلَةِ الْقَدْرِ", transliteration: "Innaa anzalnaahu fii lailatil-qadr", translation: { id: "Sesungguhnya Kami telah menurunkannya (Al-Qur'an) pada malam kemuliaan (Lailatul Qadr).", en: "Indeed, We sent it (the Qur'an) down during the Night of Decree." } },
      { number: 2, arabic: "وَمَا أَدْرَاكَ مَا لَيْلَةُ الْقَدْرِ", transliteration: "Wa maa adraaka maa lailatul-qadr", translation: { id: "Dan tahukah kamu apakah malam kemuliaan itu?", en: "And what can make you know what the Night of Decree is?" } },
      { number: 3, arabic: "لَيْلَةُ الْقَدْرِ خَيْرٌ مِنْ أَلْفِ شَهْرٍ", transliteration: "Lailatul-qadri khairum-min alfi syahr", translation: { id: "Malam kemuliaan itu lebih baik daripada seribu bulan.", en: "The Night of Decree is better than a thousand months." } },
      { number: 4, arabic: "تَنَزَّلُ الْمَلَائِكَةُ وَالرُّوحُ فِيهَا بِإِذْنِ رَبِّهِمْ مِنْ كُلِّ أَمْرٍ", transliteration: "Tanazzalul-malaa-ikatu war-ruuhu fiihaa bi-idzni rabbihim min kulli amr", translation: { id: "Pada malam itu turun para malaikat dan Ruh (Jibril) dengan izin Tuhannya untuk mengatur semua urusan.", en: "The angels and the Spirit descend therein by permission of their Lord for every matter." } },
      { number: 5, arabic: "سَلَامٌ هِيَ حَتَّىٰ مَطْلَعِ الْفَجْرِ", transliteration: "Salaamun hiya hattaa mathla'il-fajr", translation: { id: "Sejahteralah (malam itu) sampai terbit fajar.", en: "Peace it is until the emergence of dawn." } },
    ],
    tafsirForKids: {
      id: "Di salah satu malam ganjil di 10 hari terakhir Ramadan ada Lailatul Qadr — malam yang ibadah di dalamnya lebih baik dari ibadah 1000 bulan (lebih dari 83 tahun!). Malaikat turun membawa rahmat sampai subuh. Untuk anak: di malam-malam terakhir Ramadan, ajak anak berdoa sebentar — siapa tahu bertepatan dengan malam yang sangat istimewa ini.",
      en: "On one of the odd nights in the last 10 days of Ramadan is Lailatul Qadr — a night whose worship is better than 1000 months (over 83 years!). Angels descend with mercy until dawn. For children: on the last nights of Ramadan, invite them to pray briefly — it might coincide with this most special night.",
    },
    whenToRead: {
      id: "Selama Ramadan, terutama 10 malam terakhir. Mengenalkan anak pada Lailatul Qadr.",
      en: "During Ramadan, especially the last 10 nights. Introducing children to Lailatul Qadr.",
    },
    searchQuery: { id: "surat al qadr arab latin dan artinya", en: "surah al-qadr arabic translation" },
    published: "2026-05-28",
  },

  {
    slug: "az-zalzalah",
    number: 99,
    name: { id: "Az-Zalzalah", en: "Az-Zalzalah" },
    arabicName: "الزَّلْزَلَة",
    meaning: { id: "Kegoncangan", en: "The Earthquake" },
    ayahCount: 8,
    juz: 30,
    revelation: "madani",
    themes: ["kiamat", "amal", "timbangan"],
    introForKids: {
      id: "Tentang hari kiamat — dan janji Allah: sekecil apa pun kebaikan akan dibalas, sekecil apa pun keburukan akan terlihat.",
      en: "About the Day of Judgement — Allah's promise: the smallest good is rewarded, the smallest bad is seen.",
    },
    ayahs: [
      { number: 1, arabic: "إِذَا زُلْزِلَتِ الْأَرْضُ زِلْزَالَهَا", transliteration: "Idzaa zulzilatil-ardhu zilzaalahaa", translation: { id: "Apabila bumi diguncangkan dengan guncangan yang dahsyat,", en: "When the earth is shaken with its (final) earthquake," } },
      { number: 2, arabic: "وَأَخْرَجَتِ الْأَرْضُ أَثْقَالَهَا", transliteration: "Wa akhrajatil-ardhu atsqaalahaa", translation: { id: "dan bumi telah mengeluarkan beban-beban beratnya,", en: "and the earth discharges its burdens," } },
      { number: 3, arabic: "وَقَالَ الْإِنْسَانُ مَا لَهَا", transliteration: "Wa qaalal-insaanu maa lahaa", translation: { id: "dan manusia bertanya, \"Apa yang terjadi pada bumi ini?\"", en: "and man says, \"What is wrong with it?\"" } },
      { number: 4, arabic: "يَوْمَئِذٍ تُحَدِّثُ أَخْبَارَهَا", transliteration: "Yauma-idzin tuhadditsu akhbaarahaa", translation: { id: "Pada hari itu bumi menyampaikan beritanya,", en: "That Day, it will report its news," } },
      { number: 5, arabic: "بِأَنَّ رَبَّكَ أَوْحَىٰ لَهَا", transliteration: "Bi-anna rabbaka auhaa lahaa", translation: { id: "karena sesungguhnya Tuhanmu telah memerintahkan (yang demikian itu) kepadanya.", en: "because your Lord has inspired it." } },
      { number: 6, arabic: "يَوْمَئِذٍ يَصْدُرُ النَّاسُ أَشْتَاتًا لِيُرَوْا أَعْمَالَهُمْ", transliteration: "Yauma-idziy yashdurun-naasu asytaatal-liyurau a'maalahum", translation: { id: "Pada hari itu manusia keluar dari kuburnya dalam keadaan berkelompok-kelompok, untuk diperlihatkan kepada mereka (balasan) semua perbuatannya.", en: "That Day, the people will depart separated to be shown their deeds." } },
      { number: 7, arabic: "فَمَنْ يَعْمَلْ مِثْقَالَ ذَرَّةٍ خَيْرًا يَرَهُ", transliteration: "Faman ya'mal mitsqaala dzarratin khairay-yarah", translation: { id: "Maka barangsiapa mengerjakan kebaikan seberat zarah, niscaya dia akan melihat (balasan)nya.", en: "So whoever does an atom's weight of good will see it." } },
      { number: 8, arabic: "وَمَنْ يَعْمَلْ مِثْقَالَ ذَرَّةٍ شَرًّا يَرَهُ", transliteration: "Wa may-ya'mal mitsqaala dzarratin syarray-yarah", translation: { id: "Dan barangsiapa mengerjakan keburukan seberat zarah, niscaya dia akan melihat (balasan)nya.", en: "And whoever does an atom's weight of evil will see it." } },
    ],
    tafsirForKids: {
      id: "Di hari kiamat bumi berguncang dan menceritakan semua yang pernah terjadi di atasnya. Lalu Allah menegaskan: kebaikan sekecil debu pun dibalas, keburukan sekecil debu pun terlihat. Untuk anak: tidak ada kebaikan yang sia-sia — membantu teman, berbagi mainan, menyenangkan orang tua, semua dicatat. Begitu juga keburukan kecil. Jadi pilih selalu yang baik.",
      en: "On the Day of Judgement the earth shakes and tells everything that happened on it. Then Allah affirms: even a speck of good is rewarded, even a speck of bad is seen. For children: no kindness is wasted — helping a friend, sharing a toy, pleasing your parents, all recorded. So are small bad deeds. So always choose good.",
    },
    whenToRead: {
      id: "Mengajarkan anak bahwa setiap kebaikan kecil berarti. Bagian hafalan Juz Amma.",
      en: "Teaching children that every small good matters. Part of Juz 'Amma.",
    },
    searchQuery: { id: "surat az zalzalah arab latin dan artinya", en: "surah az-zalzalah arabic translation" },
    published: "2026-05-28",
  },

  {
    slug: "al-adiyat",
    number: 100,
    name: { id: "Al-'Adiyat", en: "Al-'Adiyat" },
    arabicName: "الْعَادِيَات",
    meaning: { id: "Kuda Perang yang Berlari Kencang", en: "The Racers" },
    ayahCount: 11,
    juz: 30,
    revelation: "makki",
    themes: ["syukur", "peringatan", "akhirat"],
    introForKids: {
      id: "Allah bersumpah dengan kuda perang yang gagah — lalu mengingatkan manusia agar tidak lupa bersyukur kepada Tuhannya.",
      en: "Allah swears by galloping war horses — then reminds people not to forget to thank their Lord.",
    },
    ayahs: [
      { number: 1, arabic: "وَالْعَادِيَاتِ ضَبْحًا", transliteration: "Wal-'aadiyaati dhabhaa", translation: { id: "Demi kuda perang yang berlari kencang terengah-engah,", en: "By the racers, panting," } },
      { number: 2, arabic: "فَالْمُورِيَاتِ قَدْحًا", transliteration: "Fal-muuriyaati qadhaa", translation: { id: "dan kuda yang memercikkan bunga api (dengan pukulan kuku kakinya),", en: "and the producers of sparks (when striking)," } },
      { number: 3, arabic: "فَالْمُغِيرَاتِ صُبْحًا", transliteration: "Fal-mughiiraati shubhaa", translation: { id: "dan kuda yang menyerang (dengan tiba-tiba) pada waktu pagi,", en: "and the chargers at dawn," } },
      { number: 4, arabic: "فَأَثَرْنَ بِهِ نَقْعًا", transliteration: "Fa-atsarna bihii naq'aa", translation: { id: "sehingga menerbangkan debu,", en: "stirring up thereby clouds of dust," } },
      { number: 5, arabic: "فَوَسَطْنَ بِهِ جَمْعًا", transliteration: "Fawasathna bihii jam'aa", translation: { id: "lalu menyerbu ke tengah-tengah kumpulan musuh.", en: "arriving thereby in the center collectively." } },
      { number: 6, arabic: "إِنَّ الْإِنْسَانَ لِرَبِّهِ لَكَنُودٌ", transliteration: "Innal-insaana lirabbihii lakanuud", translation: { id: "Sungguh, manusia itu sangat ingkar (tidak bersyukur) kepada Tuhannya,", en: "Indeed, mankind, to his Lord, is ungrateful." } },
      { number: 7, arabic: "وَإِنَّهُ عَلَىٰ ذَٰلِكَ لَشَهِيدٌ", transliteration: "Wa innahuu 'alaa dzaalika lasyahiid", translation: { id: "dan sesungguhnya dia (manusia) menyaksikan (sendiri) keingkarannya,", en: "And indeed, he is to that a witness." } },
      { number: 8, arabic: "وَإِنَّهُ لِحُبِّ الْخَيْرِ لَشَدِيدٌ", transliteration: "Wa innahuu lihubbil-khairi lasyadiid", translation: { id: "dan sesungguhnya cintanya kepada harta benar-benar berlebihan.", en: "And indeed he is, in love of wealth, intense." } },
      { number: 9, arabic: "أَفَلَا يَعْلَمُ إِذَا بُعْثِرَ مَا فِي الْقُبُورِ", transliteration: "Afalaa ya'lamu idzaa bu'tsira maa fil-qubuur", translation: { id: "Maka tidakkah dia mengetahui apabila apa yang di dalam kubur dikeluarkan,", en: "But does he not know that when the contents of the graves are scattered," } },
      { number: 10, arabic: "وَحُصِّلَ مَا فِي الصُّدُورِ", transliteration: "Wa hushshila maa fish-shuduur", translation: { id: "dan apa yang tersimpan di dalam dada dilahirkan?", en: "and that within the breasts is obtained," } },
      { number: 11, arabic: "إِنَّ رَبَّهُمْ بِهِمْ يَوْمَئِذٍ لَخَبِيرٌ", transliteration: "Inna rabbahum bihim yauma-idzil-lakhabiir", translation: { id: "sungguh, Tuhan mereka pada hari itu Mahateliti terhadap keadaan mereka.", en: "indeed, their Lord with them, that Day, is (fully) Aware." } },
    ],
    tafsirForKids: {
      id: "Allah bersumpah dengan kuda perang yang gagah berlari, untuk menggugah manusia: kalian sering lupa bersyukur kepada Allah, dan terlalu cinta harta. Padahal nanti semua isi hati akan diperlihatkan. Untuk anak: jangan jadi anak yang cuma ingat mainan dan lupa berterima kasih. Ucap 'alhamdulillah' atas nikmat, dan ingat Allah Maha Tahu isi hati kita.",
      en: "Allah swears by galloping war horses to stir people: you often forget to thank Allah, and love wealth too much. Yet all that's in the heart will be exposed. For children: don't be a child who only remembers toys and forgets to give thanks. Say 'alhamdulillah' for blessings, and remember Allah knows what's in our hearts.",
    },
    whenToRead: {
      id: "Mengajarkan anak bersyukur dan tidak terlalu cinta pada benda. Bagian hafalan Juz Amma.",
      en: "Teaching children gratitude and not over-loving possessions. Part of Juz 'Amma.",
    },
    searchQuery: { id: "surat al adiyat arab latin dan artinya", en: "surah al-adiyat arabic translation" },
    published: "2026-05-28",
  },
  {
    slug: "asy-syams",
    number: 91,
    name: { id: "Asy-Syams", en: "Ash-Shams" },
    arabicName: "الشَّمْس",
    meaning: { id: "Matahari", en: "The Sun" },
    ayahCount: 15,
    juz: 30,
    revelation: "makki",
    themes: ["alam", "jiwa", "tazkiyah", "tsamud", "tanda kekuasaan allah"],
    introForKids: { id: "Surat ini dibuka dengan sumpah Allah atas matahari, bulan, siang, malam, langit, dan bumi — lalu mengajak kita merawat hati agar tetap bersih.", en: "This surah opens with Allah swearing by the sun, moon, day, night, sky, and earth — then invites us to keep our hearts pure." },
    ayahs: [
      {
        number: 1,
        arabic: "وَالشَّمْسِ وَضُحَىٰهَا",
        transliteration: "Wasy-syamsi wa dhuhaahaa",
        translation: { id: "Demi matahari dan sinar paginya,", en: "By the sun and its morning brightness," },
      },
      {
        number: 2,
        arabic: "وَالْقَمَرِ إِذَا تَلَىٰهَا",
        transliteration: "Wal-qamari idzaa talaahaa",
        translation: { id: "demi bulan apabila mengiringinya,", en: "and the moon when it follows it," },
      },
      {
        number: 3,
        arabic: "وَالنَّهَارِ إِذَا جَلَّىٰهَا",
        transliteration: "Wan-nahaari idzaa jallaahaa",
        translation: { id: "demi siang apabila menampakkannya,", en: "and the day when it displays it," },
      },
      {
        number: 4,
        arabic: "وَالَّيْلِ إِذَا يَغْشَىٰهَا",
        transliteration: "Wal-laili idzaa yaghsyaahaa",
        translation: { id: "demi malam apabila menutupinya (gelap),", en: "and the night when it covers it," },
      },
      {
        number: 5,
        arabic: "وَالسَّمَآءِ وَمَا بَنَىٰهَا",
        transliteration: "Was-samaa-i wa maa banaahaa",
        translation: { id: "demi langit serta pembinaannya,", en: "and the sky and He who built it," },
      },
      {
        number: 6,
        arabic: "وَالْأَرْضِ وَمَا طَحَىٰهَا",
        transliteration: "Wal-ardhi wa maa thahaahaa",
        translation: { id: "demi bumi serta penghamparannya,", en: "and the earth and He who spread it," },
      },
      {
        number: 7,
        arabic: "وَنَفْسٍ وَمَا سَوَّىٰهَا",
        transliteration: "Wa nafsiw wa maa sawwaahaa",
        translation: { id: "demi jiwa serta penyempurnaan (ciptaan)nya,", en: "and the soul and He who proportioned it," },
      },
      {
        number: 8,
        arabic: "فَأَلْهَمَهَا فُجُورَهَا وَتَقْوَىٰهَا",
        transliteration: "Fa-alhamahaa fujuurahaa wa taqwaahaa",
        translation: { id: "maka Dia mengilhamkan kepadanya (jalan) kejahatan dan ketakwaannya,", en: "and inspired it with its wickedness and its righteousness," },
      },
      {
        number: 9,
        arabic: "قَدْ أَفْلَحَ مَن زَكَّىٰهَا",
        transliteration: "Qad aflaha man zakkaahaa",
        translation: { id: "sungguh beruntung orang yang menyucikannya (jiwa itu),", en: "he has truly succeeded who purifies it," },
      },
      {
        number: 10,
        arabic: "وَقَدْ خَابَ مَن دَسَّىٰهَا",
        transliteration: "Wa qad khaaba man dassaahaa",
        translation: { id: "dan sungguh rugi orang yang mengotorinya.", en: "and he has truly failed who corrupts it." },
      },
      {
        number: 11,
        arabic: "كَذَّبَتْ ثَمُودُ بِطَغْوَىٰهَآ",
        transliteration: "Kadzdzabat tsamuudu bithaghwaahaa",
        translation: { id: "(Kaum) Tsamud telah mendustakan (rasulnya) karena mereka melampaui batas,", en: "Thamud denied the truth out of their transgression," },
      },
      {
        number: 12,
        arabic: "إِذِ انۢبَعَثَ أَشْقَىٰهَا",
        transliteration: "Idzim ba'atsa asyqaahaa",
        translation: { id: "ketika bangkit orang yang paling celaka di antara mereka,", en: "when the most wretched of them was sent forth," },
      },
      {
        number: 13,
        arabic: "فَقَالَ لَهُمْ رَسُولُ اللَّهِ نَاقَةَ اللَّهِ وَسُقْيَٰهَا",
        transliteration: "Fa qaala lahum rasuulullaahi naaqatallaahi wa suqyaahaa",
        translation: { id: "lalu Rasul Allah (Saleh) berkata kepada mereka, \"(Biarkanlah) unta betina dari Allah ini dan (jangan ganggu) minumannya.\"", en: "so the messenger of Allah said to them, \"This is the she-camel of Allah, so let her drink.\"" },
      },
      {
        number: 14,
        arabic: "فَكَذَّبُوهُ فَعَقَرُوهَا فَدَمْدَمَ عَلَيْهِمْ رَبُّهُم بِذَنۢبِهِمْ فَسَوَّىٰهَا",
        transliteration: "Fa kadzdzabuuhu fa 'aqaruuhaa fa damdama 'alaihim rabbuhum bidzambihim fa sawwaahaa",
        translation: { id: "Namun mereka mendustakannya dan menyembelih unta itu, maka Tuhan membinasakan mereka karena dosanya, lalu Dia ratakan (mereka dengan tanah).", en: "But they denied him and hamstrung her, so their Lord crushed them for their sin and leveled them," },
      },
      {
        number: 15,
        arabic: "وَلَا يَخَافُ عُقْبَٰهَا",
        transliteration: "Wa laa yakhaafu 'uqbaahaa",
        translation: { id: "Dan Dia tidak takut terhadap akibatnya.", en: "and He does not fear its outcome." },
      },
    ],
    tafsirForKids: { id: "Allah bersumpah dengan ciptaan-ciptaan-Nya yang menakjubkan, lalu menyampaikan satu pelajaran besar: Dia telah mengilhami setiap jiwa untuk mengenali mana yang baik dan mana yang buruk. Orang yang merawat dan menyucikan hatinya akan beruntung, dan yang membiarkannya kotor akan rugi. Kisah kaum Tsamud yang menyembelih unta Nabi Saleh menjadi contoh akibat mengikuti hawa nafsu. Untuk anak: hati kita seperti taman kecil — kalau dirawat dengan kebaikan, ia tumbuh indah.", en: "Allah swears by His wondrous creations, then teaches one great lesson: He has inspired every soul to know right from wrong. The one who tends and purifies their heart succeeds; the one who lets it grow corrupt loses. The story of Thamud, who hamstrung Prophet Salih's camel, shows where following one's whims leads. For children: our heart is like a little garden — cared for with goodness, it grows beautiful." },
    whenToRead: { id: "Sering dibaca dalam sholat dan saat mengajak anak mengenal tanda-tanda kebesaran Allah di alam.", en: "Often recited in prayer and when helping a child notice the signs of Allah in nature." },
    searchQuery: { id: "surat asy syams arab latin dan artinya", en: "surah ash-shams arabic translation" },
    published: "2026-06-04",
  },
  {
    slug: "al-ala",
    number: 87,
    name: { id: "Al-A'la", en: "Al-A'la" },
    arabicName: "الْأَعْلَى",
    meaning: { id: "Yang Paling Tinggi", en: "The Most High" },
    ayahCount: 19,
    juz: 30,
    revelation: "makki",
    themes: ["tasbih", "wahyu", "akhirat", "peringatan", "kitab terdahulu"],
    introForKids: { id: "Surat yang ringan dihafal dan disukai untuk dibaca dalam sholat. Mengajak kita menyucikan dan mengagungkan nama Tuhan Yang Maha Tinggi.", en: "A surah that is easy to memorize and loved in prayer. It calls us to glorify the name of our Lord, the Most High." },
    ayahs: [
      {
        number: 1,
        arabic: "سَبِّحِ اسْمَ رَبِّكَ الْأَعْلَى",
        transliteration: "Sabbihisma rabbikal-a'laa",
        translation: { id: "Sucikanlah nama Tuhanmu Yang Maha Tinggi,", en: "Glorify the name of your Lord, the Most High," },
      },
      {
        number: 2,
        arabic: "الَّذِى خَلَقَ فَسَوَّىٰ",
        transliteration: "Alladzii khalaqa fa sawwaa",
        translation: { id: "yang menciptakan lalu menyempurnakan (ciptaan-Nya),", en: "who created and proportioned," },
      },
      {
        number: 3,
        arabic: "وَالَّذِى قَدَّرَ فَهَدَىٰ",
        transliteration: "Walladzii qaddara fa hadaa",
        translation: { id: "yang menentukan kadar (masing-masing) lalu memberi petunjuk,", en: "and who destined and then guided," },
      },
      {
        number: 4,
        arabic: "وَالَّذِىٓ أَخْرَجَ الْمَرْعَىٰ",
        transliteration: "Walladzii akhrajal-mar'aa",
        translation: { id: "dan yang menumbuhkan rerumputan,", en: "and who brings out the pasture," },
      },
      {
        number: 5,
        arabic: "فَجَعَلَهُ غُثَآءً أَحْوَىٰ",
        transliteration: "Fa ja'alahu ghutsaa-an ahwaa",
        translation: { id: "lalu dijadikan-Nya (rumput itu) kering kehitam-hitaman.", en: "then makes it dark stubble." },
      },
      {
        number: 6,
        arabic: "سَنُقْرِئُكَ فَلَا تَنسَىٰٓ",
        transliteration: "Sanuqri-uka fa laa tansaa",
        translation: { id: "Kami akan membacakan (Al-Qur'an) kepadamu (Muhammad) sehingga engkau tidak lupa,", en: "We will make you recite, [O Prophet], so you will not forget," },
      },
      {
        number: 7,
        arabic: "إِلَّا مَا شَآءَ اللَّهُ إِنَّهُ يَعْلَمُ الْجَهْرَ وَمَا يَخْفَىٰ",
        transliteration: "Illaa maa syaa-allaah, innahu ya'lamul-jahra wa maa yakhfaa",
        translation: { id: "kecuali jika Allah menghendaki. Sungguh, Dia mengetahui yang terang dan yang tersembunyi.", en: "except what Allah wills. Indeed, He knows what is open and what is hidden." },
      },
      {
        number: 8,
        arabic: "وَنُيَسِّرُكَ لِلْيُسْرَىٰ",
        transliteration: "Wa nuyassiruka lil-yusraa",
        translation: { id: "Dan Kami akan memudahkanmu menuju (jalan) kemudahan,", en: "And We will ease you toward ease," },
      },
      {
        number: 9,
        arabic: "فَذَكِّرْ إِن نَّفَعَتِ الذِّكْرَىٰ",
        transliteration: "Fa dzakkir in nafa'atidz-dzikraa",
        translation: { id: "maka berilah peringatan, karena peringatan itu bermanfaat,", en: "so remind, for the reminder benefits," },
      },
      {
        number: 10,
        arabic: "سَيَذَّكَّرُ مَن يَخْشَىٰ",
        transliteration: "Sayadzdzakkaru may yakhsyaa",
        translation: { id: "orang yang takut (kepada Allah) akan mengambil pelajaran,", en: "the one who fears [Allah] will be reminded," },
      },
      {
        number: 11,
        arabic: "وَيَتَجَنَّبُهَا الْأَشْقَى",
        transliteration: "Wa yatajannabuhal-asyqaa",
        translation: { id: "dan orang yang celaka akan menjauhinya,", en: "but the most wretched will avoid it," },
      },
      {
        number: 12,
        arabic: "الَّذِى يَصْلَى النَّارَ الْكُبْرَىٰ",
        transliteration: "Alladzii yashlan-naaral-kubraa",
        translation: { id: "(yaitu) orang yang akan memasuki api yang besar (neraka),", en: "he who will burn in the greatest Fire," },
      },
      {
        number: 13,
        arabic: "ثُمَّ لَا يَمُوتُ فِيهَا وَلَا يَحْيَىٰ",
        transliteration: "Tsumma laa yamuutu fiihaa wa laa yahyaa",
        translation: { id: "selanjutnya dia di sana tidak mati dan tidak (pula) hidup.", en: "then neither dying therein nor living." },
      },
      {
        number: 14,
        arabic: "قَدْ أَفْلَحَ مَن تَزَكَّىٰ",
        transliteration: "Qad aflaha man tazakkaa",
        translation: { id: "Sungguh beruntung orang yang menyucikan diri (dengan beriman),", en: "He has truly succeeded who purifies himself," },
      },
      {
        number: 15,
        arabic: "وَذَكَرَ اسْمَ رَبِّهِ فَصَلَّىٰ",
        transliteration: "Wa dzakarasma rabbihi fa shallaa",
        translation: { id: "dan dia mengingat nama Tuhannya, lalu dia sholat.", en: "and remembers the name of his Lord and prays." },
      },
      {
        number: 16,
        arabic: "بَلْ تُؤْثِرُونَ الْحَيَوٰةَ الدُّنْيَا",
        transliteration: "Bal tu'tsiruunal-hayaatad-dunyaa",
        translation: { id: "Tetapi kamu (orang-orang kafir) lebih memilih kehidupan dunia,", en: "But you prefer the worldly life," },
      },
      {
        number: 17,
        arabic: "وَالْآخِرَةُ خَيْرٌ وَأَبْقَىٰٓ",
        transliteration: "Wal-aakhiratu khairuw wa abqaa",
        translation: { id: "padahal kehidupan akhirat itu lebih baik dan lebih kekal.", en: "while the Hereafter is better and more lasting." },
      },
      {
        number: 18,
        arabic: "إِنَّ هَٰذَا لَفِى الصُّحُفِ الْأُولَىٰ",
        transliteration: "Inna haadzaa lafish-shuhufil-uulaa",
        translation: { id: "Sungguh, ini benar-benar terdapat dalam kitab-kitab yang terdahulu,", en: "Indeed, this is in the former scriptures," },
      },
      {
        number: 19,
        arabic: "صُحُفِ إِبْرَٰهِيمَ وَمُوسَىٰ",
        transliteration: "Shuhufi ibraahiima wa muusaa",
        translation: { id: "(yaitu) kitab-kitab Nabi Ibrahim dan Nabi Musa.", en: "the scriptures of Abraham and Moses." },
      },
    ],
    tafsirForKids: { id: "Allah memerintahkan kita memuji dan mengagungkan nama-Nya — Dia yang menciptakan segala sesuatu dengan ukuran yang pas lalu memberi petunjuk. Allah menjanjikan akan menjaga hafalan Nabi ﷺ, dan mengingatkan bahwa orang yang takut kepada Allah akan menerima nasihat. Di akhir, Allah mengingatkan: kehidupan akhirat lebih baik dan lebih kekal daripada dunia — pelajaran yang sama yang ada di kitab Nabi Ibrahim dan Nabi Musa. Untuk anak: utamakan hal yang kekal, jangan hanya yang sebentar.", en: "Allah commands us to praise and exalt His name — the One who created everything in perfect measure and then guided it. Allah promises to preserve the Prophet's ﷺ memorization, and reminds that whoever fears Allah will heed the reminder. At the end Allah reminds us: the Hereafter is better and more lasting than this world — the same lesson found in the scriptures of Abraham and Moses. For children: choose what lasts over what is fleeting." },
    whenToRead: { id: "Termasuk surat yang sering dibaca Nabi ﷺ dalam sholat Witir, dua hari raya, dan Jumat. Bagus untuk hafalan tahap berikutnya bagi anak.", en: "Among the surahs the Prophet ﷺ often recited in Witr, the two Eids, and Friday prayer. Great for a child's next memorization step." },
    searchQuery: { id: "surat al a'la arab latin dan artinya", en: "surah al-a'la arabic translation" },
    published: "2026-06-04",
  },
  {
    slug: "al-alaq",
    number: 96,
    name: { id: "Al-Alaq", en: "Al-Alaq" },
    arabicName: "الْعَلَق",
    meaning: { id: "Segumpal Darah", en: "The Clot" },
    ayahCount: 19,
    juz: 30,
    revelation: "makki",
    themes: ["wahyu pertama", "membaca", "ilmu", "iqra", "sujud"],
    introForKids: { id: "Inilah wahyu pertama yang turun kepada Nabi Muhammad ﷺ di Gua Hira — dimulai dengan satu kata: \"Bacalah!\" Surat tentang ilmu dan kemuliaan membaca.", en: "These are the very first verses revealed to Prophet Muhammad ﷺ in the Cave of Hira — beginning with one word: \"Read!\" A surah about knowledge and the honor of reading." },
    ayahs: [
      {
        number: 1,
        arabic: "اقْرَأْ بِاسْمِ رَبِّكَ الَّذِى خَلَقَ",
        transliteration: "Iqra' bismi rabbikal-ladzii khalaq",
        translation: { id: "Bacalah dengan (menyebut) nama Tuhanmu yang menciptakan,", en: "Read in the name of your Lord who created," },
      },
      {
        number: 2,
        arabic: "خَلَقَ الْإِنسَٰنَ مِنْ عَلَقٍ",
        transliteration: "Khalaqal-insaana min 'alaq",
        translation: { id: "Dia telah menciptakan manusia dari segumpal darah.", en: "created man from a clinging clot." },
      },
      {
        number: 3,
        arabic: "اقْرَأْ وَرَبُّكَ الْأَكْرَمُ",
        transliteration: "Iqra' wa rabbukal-akram",
        translation: { id: "Bacalah, dan Tuhanmulah Yang Maha Pemurah,", en: "Read, and your Lord is the Most Generous," },
      },
      {
        number: 4,
        arabic: "الَّذِى عَلَّمَ بِالْقَلَمِ",
        transliteration: "Alladzii 'allama bil-qalam",
        translation: { id: "yang mengajar (manusia) dengan pena.", en: "who taught by the pen," },
      },
      {
        number: 5,
        arabic: "عَلَّمَ الْإِنسَٰنَ مَا لَمْ يَعْلَمْ",
        transliteration: "'Allamal-insaana maa lam ya'lam",
        translation: { id: "Dia mengajarkan manusia apa yang tidak diketahuinya.", en: "taught man what he did not know." },
      },
      {
        number: 6,
        arabic: "كَلَّآ إِنَّ الْإِنسَٰنَ لَيَطْغَىٰٓ",
        transliteration: "Kallaa innal-insaana layathghaa",
        translation: { id: "Sekali-kali tidak! Sungguh, manusia itu benar-benar melampaui batas,", en: "No! Indeed, man transgresses," },
      },
      {
        number: 7,
        arabic: "أَن رَّءَاهُ اسْتَغْنَىٰٓ",
        transliteration: "Ar ra-aahus-taghnaa",
        translation: { id: "apabila melihat dirinya serba cukup.", en: "when he sees himself self-sufficient." },
      },
      {
        number: 8,
        arabic: "إِنَّ إِلَىٰ رَبِّكَ الرُّجْعَىٰٓ",
        transliteration: "Inna ilaa rabbikar-ruj'aa",
        translation: { id: "Sungguh, hanya kepada Tuhanmulah tempat kembali.", en: "Indeed, to your Lord is the return." },
      },
      {
        number: 9,
        arabic: "أَرَءَيْتَ الَّذِى يَنْهَىٰ",
        transliteration: "Ara-aital-ladzii yanhaa",
        translation: { id: "Bagaimana pendapatmu tentang orang yang melarang,", en: "Have you seen the one who forbids," },
      },
      {
        number: 10,
        arabic: "عَبْدًا إِذَا صَلَّىٰٓ",
        transliteration: "'Abdan idzaa shallaa",
        translation: { id: "seorang hamba ketika dia melaksanakan sholat?", en: "a servant when he prays?" },
      },
      {
        number: 11,
        arabic: "أَرَءَيْتَ إِن كَانَ عَلَى الْهُدَىٰٓ",
        transliteration: "Ara-aita in kaana 'alal-hudaa",
        translation: { id: "Bagaimana pendapatmu jika dia (yang dilarang) itu berada di atas petunjuk,", en: "Have you seen if he is upon guidance," },
      },
      {
        number: 12,
        arabic: "أَوْ أَمَرَ بِالتَّقْوَىٰٓ",
        transliteration: "Au amara bit-taqwaa",
        translation: { id: "atau dia menyuruh bertakwa (kepada Allah)?", en: "or enjoins righteousness?" },
      },
      {
        number: 13,
        arabic: "أَرَءَيْتَ إِن كَذَّبَ وَتَوَلَّىٰٓ",
        transliteration: "Ara-aita in kadzdzaba wa tawallaa",
        translation: { id: "Bagaimana pendapatmu jika dia (yang melarang) itu mendustakan dan berpaling?", en: "Have you seen if he denies and turns away?" },
      },
      {
        number: 14,
        arabic: "أَلَمْ يَعْلَم بِأَنَّ اللَّهَ يَرَىٰ",
        transliteration: "Alam ya'lam bi-annallaaha yaraa",
        translation: { id: "Tidakkah dia mengetahui bahwa sesungguhnya Allah melihat (segala perbuatannya)?", en: "Does he not know that Allah sees?" },
      },
      {
        number: 15,
        arabic: "كَلَّا لَئِن لَّمْ يَنتَهِ لَنَسْفَعًۢا بِالنَّاصِيَةِ",
        transliteration: "Kallaa la-il lam yantahi lanasfa'am bin-naashiyah",
        translation: { id: "Sekali-kali tidak! Sungguh, jika dia tidak berhenti, niscaya Kami tarik ubun-ubunnya,", en: "No! If he does not stop, We will surely drag him by the forelock —" },
      },
      {
        number: 16,
        arabic: "نَاصِيَةٍ كَٰذِبَةٍ خَاطِئَةٍ",
        transliteration: "Naashiyatin kaadzibatin khaathi-ah",
        translation: { id: "(yaitu) ubun-ubun orang yang mendustakan lagi durhaka.", en: "a lying, sinful forelock." },
      },
      {
        number: 17,
        arabic: "فَلْيَدْعُ نَادِيَهُ",
        transliteration: "Fal-yad'u naadiyah",
        translation: { id: "Maka biarlah dia memanggil kawan-kawannya (untuk menolong),", en: "Then let him call his associates;" },
      },
      {
        number: 18,
        arabic: "سَنَدْعُ الزَّبَانِيَةَ",
        transliteration: "Sanad'uz-zabaaniyah",
        translation: { id: "Kami pun akan memanggil malaikat Zabaniyah (penyiksa).", en: "We will call the angels of Hell." },
      },
      {
        number: 19,
        arabic: "كَلَّا لَا تُطِعْهُ وَاسْجُدْ وَاقْتَرِب",
        transliteration: "Kallaa, laa tuthi'hu wasjud waqtarib",
        translation: { id: "Sekali-kali tidak! Janganlah engkau patuh kepadanya; tetapi sujudlah dan dekatkanlah (dirimu kepada Allah).", en: "No! Do not obey him. But prostrate and draw near [to Allah]." },
      },
    ],
    tafsirForKids: { id: "Lima ayat pertama surat ini adalah wahyu yang paling awal turun. Allah memerintahkan \"Iqra\" — bacalah — dengan menyebut nama Tuhan yang menciptakan, dan mengajarkan manusia dengan pena hal-hal yang belum diketahuinya. Betapa Allah memuliakan ilmu! Ayat berikutnya memperingatkan orang yang sombong karena merasa cukup dan bahkan melarang orang lain beribadah. Surat ditutup dengan perintah untuk tidak menaatinya, lalu sujud dan mendekat kepada Allah. Untuk anak: belajar dan membaca adalah ibadah, dan ilmu pertama selalu diawali dengan nama Allah.", en: "The first five verses of this surah are the earliest revelation. Allah commands \"Iqra\" — read — in the name of the Lord who created, and who taught humankind by the pen what they did not know. How greatly Allah honors knowledge! The following verses warn the arrogant who feel self-sufficient and even forbid others from worship. The surah closes with the command not to obey such a person, but to prostrate and draw near to Allah. For children: learning and reading are worship, and the first knowledge always begins with the name of Allah." },
    whenToRead: { id: "Indah dibaca saat mengenalkan anak pada pentingnya membaca dan belajar, serta kisah turunnya wahyu pertama. Ayat terakhir adalah ayat sajdah.", en: "Lovely to read when introducing a child to the importance of reading and learning, and the story of the first revelation. The final verse is a verse of prostration (sajdah)." },
    searchQuery: { id: "surat al alaq arab latin dan artinya wahyu pertama", en: "surah al-alaq arabic translation first revelation" },
    published: "2026-06-04",
  },
];

export function getAllSurah(): Surah[] {
  return [...surahList].sort((a, b) => b.number - a.number);
}

export function getSurahBySlug(slug: string): Surah | undefined {
  return surahList.find((s) => s.slug === slug);
}
