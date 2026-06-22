import type { BlogPost } from "./types";

/**
 * Long-form articles. Body is HTML — keep it simple, semantic, and use the
 * `/_/...` internal link prefix so renderBody() can route per-locale and
 * survive the babymo.id cutover.
 *
 * Editorial guardrails:
 *   - Religious claims must be sourced (hadith reference inline).
 *   - Parenting claims should match the tone of /parenting/[situation] entries.
 *   - Headings: 1 h1 only (the page title — body starts at h2).
 *   - Reading time ≈ words ÷ 230.
 */
export const blogPosts: BlogPost[] = [
  {
    slug: "lagu-anak-islami-baby-mo",
    title: {
      id: "Lagu Anak Islami Baby Mo: Video & Lirik Lengkap (Ceria untuk Balita)",
      en: "Baby Mo Islamic Kids Songs: Videos & Full Lyrics (Cheerful for Toddlers)",
    },
    excerpt: {
      id: "Kumpulan lagu anak islami Baby Mo yang ceria — lengkap dengan video dan lirik. Mudah dihafal, menanamkan kebiasaan baik, dan koleksinya terus bertambah.",
      en: "A collection of Baby Mo’s cheerful Islamic kids songs — with videos and lyrics. Easy to memorize, instilling good habits, and growing over time.",
    },
    body: {
      id: `<p>Lagu adalah salah satu cara tercepat anak belajar. Melodi dan pengulangan membuat kata-kata mudah menempel — jauh lebih cepat daripada hafalan biasa. Berikut <strong>lagu anak islami Baby Mo</strong> yang ceria dan ramah balita, lengkap dengan video dan liriknya.</p>

<h2>🎵 Bismillah Dulu</h2>
<p>Lagu untuk membiasakan anak mengucap <em>bismillah</em> sebelum makan, minum, bermain, belajar, hingga tidur.</p>
<div style="position:relative;padding-top:56.25%;border-radius:16px;overflow:hidden;border:1px solid var(--color-hairline);margin:10px 0;">
<iframe src="https://www.youtube-nocookie.com/embed/cq6ODPSWGdc" title="BABY MO - Bismillah Dulu | Lagu Anak Islami" loading="lazy" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen style="position:absolute;inset:0;width:100%;height:100%;border:0;"></iframe>
</div>
<p style="font-style:italic;color:var(--color-whisper);">“Bismillah dulu, Bismillah dulu / Mau makan, Bismillah dulu / Mau minum, Bismillah dulu / Bismillah (Prok 2x), Bismillah…”</p>
<p>Lirik lengkap &amp; cara memakainya di rumah: <a href="/_/blog/lagu-bismillah-dulu/">Lirik Lagu “Bismillah Dulu”</a>.</p>

<h2>🎵 Hujan Turun Rintik-Rintik</h2>
<p>Lagu hangat tentang hujan, bunga yang mekar, dan kasih sayang ayah-bunda — cocok jadi momen bonding.</p>
<div style="position:relative;padding-top:56.25%;border-radius:16px;overflow:hidden;border:1px solid var(--color-hairline);margin:10px 0;">
<iframe src="https://www.youtube-nocookie.com/embed/h0JAjIsyrSs" title="BABY MO - Hujan Turun Rintik Rintik | Lagu Anak" loading="lazy" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen style="position:absolute;inset:0;width:100%;height:100%;border:0;"></iframe>
</div>
<p style="font-style:italic;color:var(--color-whisper);">“Hujan turun rintik-rintik / Bunga mekar sangat cantik / Anak soleh, anak baik / Sini ayah kasih klitik…”</p>
<p>Lirik lengkap: <a href="/_/blog/lagu-hujan-turun-rintik-rintik/">Lirik Lagu “Hujan Turun Rintik-Rintik”</a>.</p>

<h2>Kenapa lagu efektif untuk anak?</h2>
<ul>
  <li><strong>Cepat hafal.</strong> Irama dan rima membantu otak anak menyimpan kata.</li>
  <li><strong>Menanamkan kebiasaan baik.</strong> Satu lagu bisa jadi penanda rutinitas (bismillah sebelum makan).</li>
  <li><strong>Menambah kosakata</strong> dan mempererat momen bersama orang tua.</li>
</ul>

<h2>🔔 Koleksi yang terus bertambah</h2>
<p>Baby Mo rutin merilis lagu anak islami baru. Agar tidak ketinggalan lagu terbaru, <a href="https://www.youtube.com/@babymo.official?sub_confirmation=1" target="_blank" rel="noopener">subscribe channel YouTube Baby Mo</a> dan nyalakan lonceng notifikasinya.</p>

<p>Mau yang lain? Lihat <a href="/_/blog/video-edukasi-anak-islami-baby-mo/">semua video edukasi Baby Mo</a>, pelajari <a href="/_/doa/">doa harian</a>, atau mainkan <a href="/_/permainan/">permainan Baby Mo</a>.</p>`,
      en: `<p>Songs are one of the fastest ways children learn. Melody and repetition make words stick — far faster than rote memorization. Here are <strong>Baby Mo’s Islamic kids songs</strong>, cheerful and toddler-friendly, with videos and lyrics.</p>

<h2>🎵 Bismillah Dulu</h2>
<p>A song to get kids into the habit of saying <em>bismillah</em> before eating, drinking, playing, learning, and sleeping.</p>
<div style="position:relative;padding-top:56.25%;border-radius:16px;overflow:hidden;border:1px solid var(--color-hairline);margin:10px 0;">
<iframe src="https://www.youtube-nocookie.com/embed/cq6ODPSWGdc" title="BABY MO - Bismillah Dulu | Islamic Kids Song" loading="lazy" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen style="position:absolute;inset:0;width:100%;height:100%;border:0;"></iframe>
</div>
<p style="font-style:italic;color:var(--color-whisper);">“Bismillah dulu, Bismillah dulu / Mau makan, Bismillah dulu / Mau minum, Bismillah dulu…”</p>
<p>Full lyrics &amp; how to use it at home: <a href="/_/blog/lagu-bismillah-dulu/">“Bismillah Dulu” lyrics</a>.</p>

<h2>🎵 Hujan Turun Rintik-Rintik</h2>
<p>A warm song about rain, blooming flowers, and a parent’s love — a lovely bonding moment.</p>
<div style="position:relative;padding-top:56.25%;border-radius:16px;overflow:hidden;border:1px solid var(--color-hairline);margin:10px 0;">
<iframe src="https://www.youtube-nocookie.com/embed/h0JAjIsyrSs" title="BABY MO - Hujan Turun Rintik Rintik | Kids Song" loading="lazy" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen style="position:absolute;inset:0;width:100%;height:100%;border:0;"></iframe>
</div>
<p style="font-style:italic;color:var(--color-whisper);">“Hujan turun rintik-rintik / Bunga mekar sangat cantik / Anak soleh, anak baik / Sini ayah kasih klitik…”</p>
<p>Full lyrics: <a href="/_/blog/lagu-hujan-turun-rintik-rintik/">“Hujan Turun Rintik-Rintik” lyrics</a>.</p>

<h2>Why songs work for kids</h2>
<ul>
  <li><strong>Fast to memorize.</strong> Rhythm and rhyme help a child’s brain store words.</li>
  <li><strong>Builds good habits.</strong> One song can cue a routine (bismillah before eating).</li>
  <li><strong>Grows vocabulary</strong> and strengthens moments with parents.</li>
</ul>

<h2>🔔 A growing collection</h2>
<p>Baby Mo releases new Islamic kids songs regularly. So you don’t miss the latest, <a href="https://www.youtube.com/@babymo.official?sub_confirmation=1" target="_blank" rel="noopener">subscribe to the Baby Mo YouTube channel</a> and turn on notifications.</p>

<p>Want more? See <a href="/_/blog/video-edukasi-anak-islami-baby-mo/">all Baby Mo educational videos</a>, learn the <a href="/_/doa/">daily duas</a>, or play <a href="/_/permainan/">Baby Mo games</a>.</p>`,
    },
    tags: ["lagu", "lagu-anak-islami", "video", "musik", "balita"],
    published: "2026-06-22",
    updated: "2026-06-22",
    readingTimeMin: 3,
    author: "tim-baby-mo",
    faq: [
      {
        question: { id: "Di mana bisa menonton lagu anak islami Baby Mo?", en: "Where can I watch Baby Mo’s Islamic kids songs?" },
        answer: {
          id: "Semua lagu tersedia gratis di <a href=\"https://www.youtube.com/@babymo.official\" target=\"_blank\" rel=\"noopener\">channel YouTube Baby Mo</a>. Subscribe untuk lagu-lagu terbaru.",
          en: "All songs are free on the <a href=\"https://www.youtube.com/@babymo.official\" target=\"_blank\" rel=\"noopener\">Baby Mo YouTube channel</a>. Subscribe for the newest songs.",
        },
      },
      {
        question: { id: "Apakah lagunya cocok untuk balita?", en: "Are the songs suitable for toddlers?" },
        answer: {
          id: "Ya. Lagu dibuat ceria, pendek, dan mudah diikuti — pas untuk balita dan anak usia 2–8 tahun, dengan lirik yang menanamkan kebiasaan baik.",
          en: "Yes. The songs are cheerful, short, and easy to follow — ideal for toddlers and kids aged 2–8, with lyrics that build good habits.",
        },
      },
    ],
  },
  {
    slug: "surat-pendek-untuk-anak",
    title: {
      id: "Surat Pendek untuk Anak: Urutan Hafalan & Tips Menghafal",
      en: "Short Surahs for Kids: A Memorization Order & Tips",
    },
    excerpt: {
      id: "Panduan menghafal surat-surat pendek untuk anak — mulai dari yang termudah, dengan urutan jelas, arti singkat, dan tips agar hafalan menempel tanpa dipaksa.",
      en: "A guide to memorizing short surahs with children — easiest first, a clear order, short meanings, and tips so it sticks without pressure.",
    },
    body: {
      id: `<p>Surat-surat pendek adalah pintu pertama anak mengenal Al-Qur'an. Pendek, berirama, dan dibaca setiap hari dalam sholat — sempurna untuk dihafal sejak dini. Mulailah dari yang paling pendek, satu per satu, tanpa terburu-buru.</p>

<h2>Urutan menghafal surat pendek untuk anak</h2>
<p>Urutan yang ramah anak: dimulai dari surat terpendek dan yang paling sering dibaca dalam sholat.</p>
<ol>
  <li><a href="/_/surat/al-fatihah/">Al-Fatihah</a> — pembuka, dibaca di setiap rakaat.</li>
  <li><a href="/_/surat/an-nas/">An-Nas</a> — perlindungan dari kejahatan.</li>
  <li><a href="/_/surat/al-falaq/">Al-Falaq</a> — perlindungan di waktu subuh.</li>
  <li><a href="/_/surat/al-ikhlas/">Al-Ikhlas</a> — keesaan Allah, setara sepertiga Qur'an.</li>
  <li><a href="/_/surat/al-kautsar/">Al-Kautsar</a> — surat terpendek dalam Al-Qur'an.</li>
  <li><a href="/_/surat/al-asr/">Al-'Asr</a> — pentingnya waktu dan kebaikan.</li>
  <li><a href="/_/surat/an-nasr/">An-Nasr</a> — pertolongan Allah.</li>
  <li><a href="/_/surat/quraisy/">Quraisy</a> — nikmat keamanan dan rezeki.</li>
  <li><a href="/_/surat/al-fil/">Al-Fil</a> — kisah pasukan gajah.</li>
  <li><a href="/_/surat/al-maun/">Al-Ma'un</a> — peduli pada sesama.</li>
  <li><a href="/_/surat/al-kafirun/">Al-Kafirun</a> — keteguhan tauhid.</li>
  <li><a href="/_/surat/al-lahab/">Al-Lahab</a>.</li>
  <li><a href="/_/surat/at-takatsur/">At-Takatsur</a>.</li>
  <li><a href="/_/surat/al-humazah/">Al-Humazah</a>.</li>
  <li><a href="/_/surat/al-qariah/">Al-Qari'ah</a>.</li>
  <li><a href="/_/surat/al-adiyat/">Al-'Adiyat</a>.</li>
  <li><a href="/_/surat/az-zalzalah/">Az-Zalzalah</a>.</li>
  <li><a href="/_/surat/al-qadr/">Al-Qadr</a>.</li>
  <li><a href="/_/surat/al-insyirah/">Al-Insyirah</a>.</li>
  <li><a href="/_/surat/adh-dhuha/">Adh-Dhuha</a>.</li>
  <li><a href="/_/surat/at-tin/">At-Tin</a>.</li>
  <li><a href="/_/surat/asy-syams/">Asy-Syams</a>.</li>
  <li><a href="/_/surat/al-ala/">Al-A'la</a>.</li>
  <li><a href="/_/surat/al-alaq/">Al-'Alaq</a> — wahyu pertama.</li>
</ol>

<h2>Tips menghafal bareng anak</h2>
<ul>
  <li><strong>Sedikit tapi rutin.</strong> Cukup satu-dua ayat per hari, diulang setiap sholat.</li>
  <li><strong>Dengar berulang.</strong> Putar murottal yang sama tiap hari; telinga anak menghafal sebelum lisannya.</li>
  <li><strong>Pakai irama.</strong> Anak menghafal lewat nada — lihat juga <a href="/_/blog/video-edukasi-anak-islami-baby-mo/">video &amp; lagu Baby Mo</a>.</li>
  <li><strong>Pahami arti singkatnya.</strong> Satu kalimat makna membuat hafalan lebih bermakna.</li>
</ul>

<p>Buka bacaan lengkap tiap surat di <a href="/_/surat/">Surat Pendek</a>.</p>`,
      en: `<p>Short surahs are a child's first door into the Qur'an. Brief, rhythmic, and recited every day in prayer — perfect to memorize early. Start with the shortest, one at a time, no rushing.</p>

<h2>A kid-friendly memorization order</h2>
<p>Begin with the shortest surahs and the ones most often recited in prayer.</p>
<ol>
  <li><a href="/_/surat/al-fatihah/">Al-Fatihah</a> — the opening, recited in every unit of prayer.</li>
  <li><a href="/_/surat/an-nas/">An-Nas</a> — seeking refuge from evil.</li>
  <li><a href="/_/surat/al-falaq/">Al-Falaq</a> — refuge at daybreak.</li>
  <li><a href="/_/surat/al-ikhlas/">Al-Ikhlas</a> — the oneness of Allah.</li>
  <li><a href="/_/surat/al-kautsar/">Al-Kautsar</a> — the shortest surah.</li>
  <li><a href="/_/surat/al-asr/">Al-'Asr</a> — the value of time.</li>
  <li><a href="/_/surat/an-nasr/">An-Nasr</a>.</li>
  <li><a href="/_/surat/quraisy/">Quraisy</a>.</li>
  <li><a href="/_/surat/al-fil/">Al-Fil</a>.</li>
  <li><a href="/_/surat/al-maun/">Al-Ma'un</a>.</li>
  <li><a href="/_/surat/al-kafirun/">Al-Kafirun</a>.</li>
  <li><a href="/_/surat/al-lahab/">Al-Lahab</a>.</li>
  <li><a href="/_/surat/at-takatsur/">At-Takatsur</a>.</li>
  <li><a href="/_/surat/al-humazah/">Al-Humazah</a>.</li>
  <li><a href="/_/surat/al-qariah/">Al-Qari'ah</a>.</li>
  <li><a href="/_/surat/al-adiyat/">Al-'Adiyat</a>.</li>
  <li><a href="/_/surat/az-zalzalah/">Az-Zalzalah</a>.</li>
  <li><a href="/_/surat/al-qadr/">Al-Qadr</a>.</li>
  <li><a href="/_/surat/al-insyirah/">Al-Insyirah</a>.</li>
  <li><a href="/_/surat/adh-dhuha/">Adh-Dhuha</a>.</li>
  <li><a href="/_/surat/at-tin/">At-Tin</a>.</li>
  <li><a href="/_/surat/asy-syams/">Asy-Syams</a>.</li>
  <li><a href="/_/surat/al-ala/">Al-A'la</a>.</li>
  <li><a href="/_/surat/al-alaq/">Al-'Alaq</a> — the first revelation.</li>
</ol>

<h2>Tips for memorizing together</h2>
<ul>
  <li><strong>Little but consistent.</strong> One or two verses a day, repeated each prayer.</li>
  <li><strong>Repeated listening.</strong> Play the same recitation daily; the ear memorizes before the tongue.</li>
  <li><strong>Use rhythm.</strong> Kids memorize through melody — see <a href="/_/blog/video-edukasi-anak-islami-baby-mo/">Baby Mo videos &amp; songs</a>.</li>
  <li><strong>Know the short meaning.</strong> One line of meaning makes memorization meaningful.</li>
</ul>

<p>Open the full reading of each surah at <a href="/_/surat/">Short Surahs</a>.</p>`,
    },
    tags: ["surat", "hafalan", "quran", "edukasi-anak", "panduan"],
    published: "2026-06-22",
    updated: "2026-06-22",
    readingTimeMin: 5,
    author: "tim-baby-mo",
    faq: [
      { question: { id: "Mulai menghafal surat pendek dari umur berapa?", en: "What age to start memorizing short surahs?" },
        answer: { id: "Anak bisa mulai mendengar dan menirukan sejak usia 2–3 tahun. Hafalan yang lebih sadar biasanya mulai usia 4–6 tahun. Tidak perlu bisa membaca Arab dulu — mendengar dan menirukan sudah cukup untuk memulai.", en: "Children can start listening and imitating from age 2–3. More conscious memorization usually begins at 4–6. They don't need to read Arabic first — listening and repeating is enough to start." } },
      { question: { id: "Surat apa yang paling baik dihafal pertama?", en: "Which surah is best to memorize first?" },
        answer: { id: "Setelah Al-Fatihah (yang wajib di tiap rakaat), mulailah dari surat terpendek seperti Al-Ikhlas, An-Nas, Al-Falaq, dan Al-Kautsar.", en: "After Al-Fatihah (recited in every prayer unit), begin with the shortest like Al-Ikhlas, An-Nas, Al-Falaq, and Al-Kautsar." } },
    ],
  },
  {
    slug: "asmaul-husna-untuk-anak",
    title: {
      id: "Asmaul Husna untuk Anak: Cara Mudah Menghafal 99 Nama Allah",
      en: "Asmaul Husna for Kids: An Easy Way to Memorize the 99 Names",
    },
    excerpt: {
      id: "Kenalkan anak pada 99 nama indah Allah dengan cara yang menyenangkan — apa itu Asmaul Husna, manfaatnya, dan tips menghafal sedikit demi sedikit.",
      en: "Introduce children to Allah's 99 beautiful names the fun way — what Asmaul Husna is, its benefits, and tips to memorize a little at a time.",
    },
    body: {
      id: `<p><strong>Asmaul Husna</strong> adalah 99 nama indah Allah — seperti Ar-Rahman (Maha Pengasih) dan Ar-Rahim (Maha Penyayang). Mengenalkannya pada anak bukan sekadar hafalan, tapi cara menumbuhkan cinta dan rasa dekat kepada Allah sejak kecil.</p>

<h2>Cara mudah menghafal bareng anak</h2>
<ol>
  <li><strong>Kelompok kecil.</strong> Hafalkan 3–5 nama per minggu, bukan sekaligus.</li>
  <li><strong>Pahami artinya.</strong> "Allah Ar-Razzaq — Maha Pemberi rezeki" lebih melekat saat anak tahu maknanya.</li>
  <li><strong>Kaitkan ke kehidupan.</strong> Saat hujan turun: "Allah Ar-Rahman, sayang pada kita." Saat sembuh dari sakit: "Allah Asy-Syafi, Maha Penyembuh."</li>
  <li><strong>Ulangi dengan irama.</strong> Banyak anak hafal Asmaul Husna lewat lagu — dengar bersama setiap hari.</li>
</ol>

<h2>Beberapa nama untuk mulai</h2>
<ul>
  <li><strong>Ar-Rahman</strong> — Maha Pengasih</li>
  <li><strong>Ar-Rahim</strong> — Maha Penyayang</li>
  <li><strong>Al-Malik</strong> — Maha Merajai</li>
  <li><strong>Al-Quddus</strong> — Maha Suci</li>
  <li><strong>As-Salam</strong> — Maha Pemberi Keselamatan</li>
  <li><strong>Al-Khaliq</strong> — Maha Pencipta</li>
  <li><strong>Ar-Razzaq</strong> — Maha Pemberi Rezeki</li>
  <li><strong>Al-Ghafur</strong> — Maha Pengampun</li>
  <li><strong>Al-Wadud</strong> — Maha Mencintai</li>
</ul>

<p>Lihat 99 nama lengkap beserta arti di <a href="/_/asmaul-husna/">Asmaul Husna</a>. Mau lanjut belajar doa? Lihat <a href="/_/blog/kumpulan-doa-harian-anak/">kumpulan doa harian anak</a>.</p>`,
      en: `<p><strong>Asmaul Husna</strong> are the 99 beautiful names of Allah — like Ar-Rahman (the Most Compassionate) and Ar-Rahim (the Most Merciful). Introducing them to a child isn't just memorization; it nurtures love and closeness to Allah from a young age.</p>

<h2>An easy way to memorize together</h2>
<ol>
  <li><strong>Small groups.</strong> Learn 3–5 names a week, not all at once.</li>
  <li><strong>Know the meaning.</strong> "Allah Ar-Razzaq — the Provider" sticks when a child knows what it means.</li>
  <li><strong>Connect to life.</strong> When it rains: "Allah Ar-Rahman loves us." When recovering from illness: "Allah Ash-Shafi, the Healer."</li>
  <li><strong>Repeat with rhythm.</strong> Many kids learn the names through song — listen together daily.</li>
</ol>

<h2>A few names to start with</h2>
<ul>
  <li><strong>Ar-Rahman</strong> — the Most Compassionate</li>
  <li><strong>Ar-Rahim</strong> — the Most Merciful</li>
  <li><strong>Al-Malik</strong> — the King</li>
  <li><strong>Al-Quddus</strong> — the Most Holy</li>
  <li><strong>As-Salam</strong> — the Giver of Peace</li>
  <li><strong>Al-Khaliq</strong> — the Creator</li>
  <li><strong>Ar-Razzaq</strong> — the Provider</li>
  <li><strong>Al-Ghafur</strong> — the Most Forgiving</li>
  <li><strong>Al-Wadud</strong> — the Most Loving</li>
</ul>

<p>See all 99 names with meanings at <a href="/_/asmaul-husna/">Asmaul Husna</a>. Want to keep learning duas? See the <a href="/_/blog/kumpulan-doa-harian-anak/">daily duas for children</a>.</p>`,
    },
    tags: ["asmaul-husna", "tauhid", "hafalan", "edukasi-anak", "panduan"],
    published: "2026-06-22",
    updated: "2026-06-22",
    readingTimeMin: 4,
    author: "tim-baby-mo",
    faq: [
      { question: { id: "Apa itu Asmaul Husna?", en: "What is Asmaul Husna?" },
        answer: { id: "Asmaul Husna adalah 99 nama indah dan mulia milik Allah yang disebutkan dalam Al-Qur'an dan hadith, masing-masing menggambarkan sifat kesempurnaan-Nya.", en: "Asmaul Husna are the 99 beautiful, noble names of Allah mentioned in the Qur'an and hadith, each describing an attribute of His perfection." } },
      { question: { id: "Bagaimana cara anak menghafal 99 nama?", en: "How can a child memorize 99 names?" },
        answer: { id: "Bertahap: 3–5 nama per minggu, dipahami artinya, diulang lewat lagu, dan dikaitkan dengan kejadian sehari-hari. Tidak perlu sekaligus.", en: "Gradually: 3–5 names a week, with meanings, repeated through song, and connected to everyday moments. No need to do it all at once." } },
    ],
  },
  {
    slug: "kumpulan-doa-harian-anak",
    title: {
      id: "Kumpulan Doa Harian Anak Lengkap (Arab, Latin & Arti) untuk Berbagai Situasi",
      en: "Complete Daily Duas for Children (Arabic, Transliteration & Meaning)",
    },
    excerpt: {
      id: "Kumpulan doa harian anak untuk berbagai situasi — bangun tidur, makan, bepergian, belajar, hingga perlindungan. Lengkap dengan Arab, latin, dan artinya.",
      en: "A collection of daily duas for children across situations — waking, eating, travel, learning, and protection. With Arabic, transliteration, and meaning.",
    },
    body: {
      id: `<p>Doa harian mengajarkan anak untuk selalu mengingat Allah di setiap kegiatan. Berikut kumpulan doa untuk berbagai situasi — pilih beberapa dulu, lalu tambah perlahan sampai jadi kebiasaan.</p>

<h2>Bangun &amp; tidur</h2>
<ul><li><a href="/_/doa/bangun-tidur/">Doa bangun tidur</a></li><li><a href="/_/doa/sebelum-tidur/">Doa sebelum tidur</a></li></ul>

<h2>Makan &amp; minum</h2>
<ul><li><a href="/_/doa/sebelum-makan/">Doa sebelum makan</a></li><li><a href="/_/doa/sesudah-makan/">Doa sesudah makan</a></li><li><a href="/_/doa/mendapat-rezeki/">Doa mendapat rezeki</a></li></ul>

<h2>Bersuci, adzan &amp; masjid</h2>
<ul><li><a href="/_/doa/selesai-wudhu/">Doa selesai wudhu</a></li><li><a href="/_/doa/mendengar-adzan/">Doa mendengar adzan</a></li><li><a href="/_/doa/masuk-masjid/">Doa masuk masjid</a></li><li><a href="/_/doa/keluar-masjid/">Doa keluar masjid</a></li></ul>

<h2>Pakaian &amp; diri</h2>
<ul><li><a href="/_/doa/memakai-pakaian/">Doa memakai pakaian</a></li><li><a href="/_/doa/bercermin/">Doa bercermin</a></li><li><a href="/_/doa/doa-bersin/">Doa ketika bersin</a></li></ul>

<h2>Rumah, kamar mandi &amp; perjalanan</h2>
<ul><li><a href="/_/doa/masuk-rumah/">Doa masuk rumah</a></li><li><a href="/_/doa/keluar-rumah/">Doa keluar rumah</a></li><li><a href="/_/doa/masuk-kamar-mandi/">Doa masuk kamar mandi</a></li><li><a href="/_/doa/keluar-kamar-mandi/">Doa keluar kamar mandi</a></li><li><a href="/_/doa/naik-kendaraan/">Doa naik kendaraan</a></li><li><a href="/_/doa/doa-bepergian/">Doa bepergian</a></li><li><a href="/_/doa/doa-masuk-pasar/">Doa masuk pasar</a></li></ul>

<h2>Belajar &amp; ilmu</h2>
<ul><li><a href="/_/doa/sebelum-belajar/">Doa sebelum belajar</a></li><li><a href="/_/doa/setelah-belajar/">Doa setelah belajar</a></li><li><a href="/_/doa/minta-ilmu-bermanfaat/">Doa minta ilmu bermanfaat</a></li></ul>

<h2>Pagi, petang &amp; perlindungan</h2>
<ul><li><a href="/_/doa/doa-pagi/">Doa pagi</a></li><li><a href="/_/doa/doa-petang/">Doa petang</a></li><li><a href="/_/doa/perlindungan-anak/">Doa perlindungan anak</a></li><li><a href="/_/doa/sayyidul-istighfar/">Sayyidul Istighfar</a></li></ul>

<h2>Cuaca &amp; alam</h2>
<ul><li><a href="/_/doa/ketika-hujan/">Doa ketika hujan</a></li><li><a href="/_/doa/mendengar-petir/">Doa mendengar petir</a></li><li><a href="/_/doa/melihat-bulan-baru/">Doa melihat bulan baru</a></li></ul>

<h2>Saat sulit &amp; sakit</h2>
<ul><li><a href="/_/doa/ketika-sakit/">Doa ketika sakit</a></li><li><a href="/_/doa/ketika-marah/">Doa ketika marah</a></li><li><a href="/_/doa/doa-ketika-kesulitan/">Doa ketika kesulitan</a></li><li><a href="/_/doa/doa-dimudahkan-urusan/">Doa dimudahkan urusan</a></li></ul>

<h2>Keluarga &amp; akhlak</h2>
<ul><li><a href="/_/doa/doa-untuk-orang-tua/">Doa untuk orang tua</a></li><li><a href="/_/doa/doa-keturunan-shalih/">Doa agar anak sholeh</a></li><li><a href="/_/doa/doa-akhlak-mulia/">Doa akhlak mulia</a></li><li><a href="/_/doa/doa-pandai-bersyukur/">Doa pandai bersyukur</a></li><li><a href="/_/doa/kebaikan-dunia-akhirat/">Doa kebaikan dunia &amp; akhirat</a></li></ul>

<p>Lihat semua doa beserta bacaan lengkap di <a href="/_/doa/">Kumpulan Doa</a>. Mau lewat lagu? Lihat <a href="/_/blog/video-edukasi-anak-islami-baby-mo/">video Baby Mo</a>.</p>`,
      en: `<p>Daily duas teach a child to remember Allah in everything. Here's a collection across situations — pick a few first, then add slowly until they become habit.</p>

<h2>Waking &amp; sleeping</h2>
<ul><li><a href="/_/doa/bangun-tidur/">Dua upon waking</a></li><li><a href="/_/doa/sebelum-tidur/">Dua before sleeping</a></li></ul>

<h2>Eating &amp; drinking</h2>
<ul><li><a href="/_/doa/sebelum-makan/">Dua before eating</a></li><li><a href="/_/doa/sesudah-makan/">Dua after eating</a></li><li><a href="/_/doa/mendapat-rezeki/">Dua for provision</a></li></ul>

<h2>Purification, adhan &amp; mosque</h2>
<ul><li><a href="/_/doa/selesai-wudhu/">After wudu</a></li><li><a href="/_/doa/mendengar-adzan/">Hearing the adhan</a></li><li><a href="/_/doa/masuk-masjid/">Entering the mosque</a></li><li><a href="/_/doa/keluar-masjid/">Leaving the mosque</a></li></ul>

<h2>Home, bathroom &amp; travel</h2>
<ul><li><a href="/_/doa/masuk-rumah/">Entering the home</a></li><li><a href="/_/doa/keluar-rumah/">Leaving the home</a></li><li><a href="/_/doa/masuk-kamar-mandi/">Entering the bathroom</a></li><li><a href="/_/doa/keluar-kamar-mandi/">Leaving the bathroom</a></li><li><a href="/_/doa/naik-kendaraan/">Boarding a vehicle</a></li><li><a href="/_/doa/doa-bepergian/">For travel</a></li></ul>

<h2>Learning</h2>
<ul><li><a href="/_/doa/sebelum-belajar/">Before studying</a></li><li><a href="/_/doa/setelah-belajar/">After studying</a></li><li><a href="/_/doa/minta-ilmu-bermanfaat/">For beneficial knowledge</a></li></ul>

<h2>Morning, evening &amp; protection</h2>
<ul><li><a href="/_/doa/doa-pagi/">Morning</a></li><li><a href="/_/doa/doa-petang/">Evening</a></li><li><a href="/_/doa/perlindungan-anak/">Protection</a></li><li><a href="/_/doa/sayyidul-istighfar/">Sayyidul Istighfar</a></li></ul>

<h2>Family &amp; character</h2>
<ul><li><a href="/_/doa/doa-untuk-orang-tua/">For one's parents</a></li><li><a href="/_/doa/doa-keturunan-shalih/">For righteous children</a></li><li><a href="/_/doa/doa-akhlak-mulia/">For good character</a></li><li><a href="/_/doa/kebaikan-dunia-akhirat/">Good in this life &amp; the next</a></li></ul>

<p>See every dua with its full reading at <a href="/_/doa/">Daily Duas</a>. Prefer songs? See <a href="/_/blog/video-edukasi-anak-islami-baby-mo/">Baby Mo videos</a>.</p>`,
    },
    tags: ["doa", "doa-harian", "edukasi-anak", "panduan", "balita"],
    published: "2026-06-22",
    updated: "2026-06-22",
    readingTimeMin: 6,
    author: "tim-baby-mo",
    faq: [
      { question: { id: "Berapa doa yang sebaiknya diajarkan dulu?", en: "How many duas should I teach first?" },
        answer: { id: "Mulai dari 2–3 doa yang paling sering dipakai, seperti doa sebelum makan, doa sebelum tidur, dan doa bangun tidur. Setelah terbiasa, tambahkan yang lain sedikit demi sedikit.", en: "Start with 2–3 of the most-used duas — before eating, before sleeping, and upon waking. Once they're habit, add more gradually." } },
      { question: { id: "Anak belum bisa baca Arab, bagaimana?", en: "My child can't read Arabic yet — what do I do?" },
        answer: { id: "Tidak masalah. Anak menghafal lewat mendengar dan menirukan. Gunakan latin dan artinya sebagai bantuan, dan ulangi bersama setiap hari.", en: "No problem. Children memorize by listening and repeating. Use the transliteration and meaning as a guide, and repeat together daily." } },
    ],
  },
  {
    slug: "kisah-nabi-untuk-anak",
    title: {
      id: "Kumpulan Kisah 25 Nabi untuk Anak: Ringkas & Penuh Hikmah",
      en: "The 25 Prophets' Stories for Kids: Short & Full of Lessons",
    },
    excerpt: {
      id: "Kumpulan kisah 25 nabi dan rasul untuk anak — ringkas, mudah dipahami, dan penuh teladan. Lengkap dengan tautan tiap kisah dan tips cara menceritakannya.",
      en: "A collection of the 25 prophets' stories for children — short, easy to follow, and full of example. With a link to each story and tips for telling them.",
    },
    body: {
      id: `<p>Kisah para nabi adalah cara terbaik mengenalkan iman, kesabaran, dan akhlak kepada anak — lewat tokoh nyata yang penuh teladan. Berikut 25 nabi dan rasul yang wajib dikenal, masing-masing dengan kisahnya.</p>

<h2>25 Nabi &amp; Rasul</h2>
<ul>
  <li><a href="/_/kisah/adam/">Nabi Adam</a> — manusia pertama.</li>
  <li><a href="/_/kisah/idris/">Nabi Idris</a></li>
  <li><a href="/_/kisah/nuh/">Nabi Nuh</a> — bahtera &amp; kesabaran.</li>
  <li><a href="/_/kisah/hud/">Nabi Hud</a></li>
  <li><a href="/_/kisah/salih/">Nabi Salih</a> — unta mukjizat.</li>
  <li><a href="/_/kisah/ibrahim/">Nabi Ibrahim</a> — bapak para nabi.</li>
  <li><a href="/_/kisah/lut/">Nabi Lut</a></li>
  <li><a href="/_/kisah/ismail/">Nabi Ismail</a> — kisah kurban.</li>
  <li><a href="/_/kisah/ishaq/">Nabi Ishaq</a></li>
  <li><a href="/_/kisah/yaqub/">Nabi Ya'qub</a></li>
  <li><a href="/_/kisah/yusuf/">Nabi Yusuf</a> — sabar &amp; memaafkan.</li>
  <li><a href="/_/kisah/ayyub/">Nabi Ayyub</a> — kesabaran luar biasa.</li>
  <li><a href="/_/kisah/syuaib/">Nabi Syu'aib</a></li>
  <li><a href="/_/kisah/musa/">Nabi Musa</a> — menghadapi Fir'aun.</li>
  <li><a href="/_/kisah/harun/">Nabi Harun</a></li>
  <li><a href="/_/kisah/dzulkifli/">Nabi Dzulkifli</a></li>
  <li><a href="/_/kisah/daud/">Nabi Daud</a> — suara yang merdu.</li>
  <li><a href="/_/kisah/sulaiman/">Nabi Sulaiman</a> — memahami bahasa hewan.</li>
  <li><a href="/_/kisah/ilyas/">Nabi Ilyas</a></li>
  <li><a href="/_/kisah/ilyasa/">Nabi Ilyasa'</a></li>
  <li><a href="/_/kisah/yunus/">Nabi Yunus</a> — di perut ikan.</li>
  <li><a href="/_/kisah/zakariya/">Nabi Zakariya</a></li>
  <li><a href="/_/kisah/yahya/">Nabi Yahya</a></li>
  <li><a href="/_/kisah/isa/">Nabi Isa</a></li>
  <li><a href="/_/kisah/muhammad/">Nabi Muhammad ﷺ</a> — penutup para nabi.</li>
</ul>

<h2>Tips menceritakan kisah nabi</h2>
<p>Mulai dari yang paling dikenal — Nabi Adam, Nuh, Ibrahim, Musa, Yusuf, dan Muhammad ﷺ. Ceritakan singkat, fokus pada satu pelajaran, dan tutup dengan pertanyaan ringan. Panduan lengkap: <a href="/_/blog/cara-bercerita-kisah-nabi-untuk-anak/">cara bercerita kisah nabi untuk anak</a>.</p>

<p>Baca semua kisah lengkap di <a href="/_/kisah/">Kisah Nabi</a>.</p>`,
      en: `<p>The prophets' stories are the best way to introduce faith, patience, and good character to a child — through real figures full of example. Here are the 25 prophets every child should know, each with its story.</p>

<h2>The 25 Prophets</h2>
<ul>
  <li><a href="/_/kisah/adam/">Prophet Adam</a> — the first human.</li>
  <li><a href="/_/kisah/idris/">Prophet Idris</a></li>
  <li><a href="/_/kisah/nuh/">Prophet Nuh (Noah)</a> — the ark &amp; patience.</li>
  <li><a href="/_/kisah/hud/">Prophet Hud</a></li>
  <li><a href="/_/kisah/salih/">Prophet Salih</a></li>
  <li><a href="/_/kisah/ibrahim/">Prophet Ibrahim (Abraham)</a></li>
  <li><a href="/_/kisah/lut/">Prophet Lut (Lot)</a></li>
  <li><a href="/_/kisah/ismail/">Prophet Ismail (Ishmael)</a></li>
  <li><a href="/_/kisah/ishaq/">Prophet Ishaq (Isaac)</a></li>
  <li><a href="/_/kisah/yaqub/">Prophet Ya'qub (Jacob)</a></li>
  <li><a href="/_/kisah/yusuf/">Prophet Yusuf (Joseph)</a> — patience &amp; forgiveness.</li>
  <li><a href="/_/kisah/ayyub/">Prophet Ayyub (Job)</a> — remarkable patience.</li>
  <li><a href="/_/kisah/syuaib/">Prophet Syu'aib</a></li>
  <li><a href="/_/kisah/musa/">Prophet Musa (Moses)</a></li>
  <li><a href="/_/kisah/harun/">Prophet Harun (Aaron)</a></li>
  <li><a href="/_/kisah/dzulkifli/">Prophet Dzulkifli</a></li>
  <li><a href="/_/kisah/daud/">Prophet Daud (David)</a></li>
  <li><a href="/_/kisah/sulaiman/">Prophet Sulaiman (Solomon)</a></li>
  <li><a href="/_/kisah/ilyas/">Prophet Ilyas (Elijah)</a></li>
  <li><a href="/_/kisah/ilyasa/">Prophet Ilyasa' (Elisha)</a></li>
  <li><a href="/_/kisah/yunus/">Prophet Yunus (Jonah)</a> — in the whale.</li>
  <li><a href="/_/kisah/zakariya/">Prophet Zakariya</a></li>
  <li><a href="/_/kisah/yahya/">Prophet Yahya (John)</a></li>
  <li><a href="/_/kisah/isa/">Prophet Isa (Jesus)</a></li>
  <li><a href="/_/kisah/muhammad/">Prophet Muhammad ﷺ</a> — the final prophet.</li>
</ul>

<h2>Tips for telling prophet stories</h2>
<p>Start with the most familiar — Adam, Nuh, Ibrahim, Musa, Yusuf, and Muhammad ﷺ. Keep it short, focus on one lesson, and close with a light question. Full guide: <a href="/_/blog/cara-bercerita-kisah-nabi-untuk-anak/">how to tell prophet stories to kids</a>.</p>

<p>Read all the full stories at <a href="/_/kisah/">Prophet Stories</a>.</p>`,
    },
    tags: ["kisah-nabi", "sejarah-islam", "akhlak", "edukasi-anak", "panduan"],
    published: "2026-06-22",
    updated: "2026-06-22",
    readingTimeMin: 5,
    author: "tim-baby-mo",
    faq: [
      { question: { id: "Berapa jumlah nabi yang wajib diketahui anak?", en: "How many prophets should a child know?" },
        answer: { id: "Ada 25 nabi dan rasul yang wajib diketahui dan namanya disebut dalam Al-Qur'an. Anak bisa mulai dari yang paling dikenal lalu menambah lainnya.", en: "There are 25 prophets and messengers a child should know, named in the Qur'an. Kids can start with the most familiar and add the rest over time." } },
      { question: { id: "Kisah nabi mana yang cocok diceritakan lebih dulu?", en: "Which prophet's story is best to start with?" },
        answer: { id: "Mulai dari kisah yang penuh teladan dan mudah diingat: Nabi Nuh, Nabi Ibrahim, Nabi Yusuf, Nabi Musa, dan tentu Nabi Muhammad ﷺ.", en: "Start with the most memorable and exemplary: Nuh, Ibrahim, Yusuf, Musa, and of course Muhammad ﷺ." } },
    ],
  },
  {
    slug: "game-anak-islami-baby-mo",
    title: {
      id: "Game Anak Islami Gratis: Permainan Edukatif Baby Mo (Online, Tanpa Iklan)",
      en: "Free Islamic Games for Kids: Baby Mo’s Educational Games (Online, Ad-Free)",
    },
    excerpt: {
      id: "Kumpulan game anak islami gratis dari Baby Mo — belajar doa, huruf hijaiyah, sholat, dan melatih fokus. Bisa dimainkan langsung di browser, tanpa iklan, tanpa install.",
      en: "A collection of free Islamic games for kids from Baby Mo — learn duas, hijaiyah letters, prayer, and build focus. Play right in the browser, no ads, no install.",
    },
    body: {
      id: `<p>Mencari <strong>game anak yang aman, islami, dan benar-benar bermanfaat</strong>? Baby Mo punya kumpulan permainan edukatif yang bisa dimainkan langsung di browser — <strong>gratis, tanpa iklan, tanpa perlu install</strong>. Semua bekerja di HP, tablet, maupun laptop, dan bahkan bisa dimainkan offline setelah dibuka sekali.</p>

<h2>Kenapa game edukatif islami?</h2>
<p>Anak belajar paling cepat lewat bermain. Game yang tepat bisa menanamkan doa harian, mengenalkan huruf hijaiyah, dan melatih fokus — semua sambil bersenang-senang. Yang membedakan: konten Baby Mo dibuat tenang, ramah balita, dan sejalan dengan nilai keluarga muslim.</p>

<h2>🤲 Belajar doa &amp; ibadah</h2>
<div class="gmp-grid">
  <a class="gmp-game" href="https://play.babymo.id/babymo-doa-harian.html" target="_blank" rel="noopener"><span class="gmp-em">🤲</span><b>Doa Harian</b><span>Belajar 6 doa sehari-hari sambil bermain.</span></a>
  <a class="gmp-game" href="https://play.babymo.id/babymo-dua-game.html" target="_blank" rel="noopener"><span class="gmp-em">🃏</span><b>Dua Journey</b><span>Cocokkan kartu doa dengan situasinya.</span></a>
  <a class="gmp-game" href="https://play.babymo.id/babymo-pray-with-mo.html" target="_blank" rel="noopener"><span class="gmp-em">🕌</span><b>Pray with Mo</b><span>Belajar gerakan sholat bareng Baby Mo.</span></a>
  <a class="gmp-game" href="https://play.babymo.id/babymo-dreamtime.html" target="_blank" rel="noopener"><span class="gmp-em">🛌</span><b>Dreamtime</b><span>Rutinitas &amp; doa sebelum tidur yang menenangkan.</span></a>
</div>

<h2>🔤 Belajar huruf &amp; kata</h2>
<div class="gmp-grid">
  <a class="gmp-game" href="https://play.babymo.id/babymo-hijaiyah.html" target="_blank" rel="noopener"><span class="gmp-em">🌙</span><b>Huruf Hijaiyah</b><span>Kenali huruf hijaiyah satu per satu.</span></a>
  <a class="gmp-game" href="https://play.babymo.id/babymo-arabic-spelling.html" target="_blank" rel="noopener"><span class="gmp-em">🔤</span><b>Kata Islam</b><span>Susun huruf jadi kata-kata islami.</span></a>
  <a class="gmp-game" href="https://play.babymo.id/babymo-puzzle-katabaik.html" target="_blank" rel="noopener"><span class="gmp-em">💖</span><b>Kata Baik</b><span>Belajar ucapan baik &amp; akhlak terpuji.</span></a>
</div>

<h2>🔍 Latih fokus &amp; daya ingat</h2>
<div class="gmp-grid">
  <a class="gmp-game" href="https://play.babymo.id/babymo-look-and-find.html" target="_blank" rel="noopener"><span class="gmp-em">🔍</span><b>Cari Baby Mo</b><span>Cari objek tersembunyi di 12 scene seru.</span></a>
  <a class="gmp-game" href="https://play.babymo.id/babymo-memory-match.html" target="_blank" rel="noopener"><span class="gmp-em">🎴</span><b>Memory Match</b><span>Latih daya ingat dengan kartu pasangan.</span></a>
  <a class="gmp-game" href="https://play.babymo.id/babymo-puzzle.html" target="_blank" rel="noopener"><span class="gmp-em">🧩</span><b>Kenalan Baby Mo</b><span>Buka petak dan temui Baby Mo.</span></a>
  <a class="gmp-game" href="https://play.babymo.id/baby-mo-forehand-beat.html" target="_blank" rel="noopener"><span class="gmp-em">🎵</span><b>Forehand Beat</b><span>Ketuk mengikuti irama yang ceria.</span></a>
</div>
<style>
.gmp-grid{display:grid;grid-template-columns:repeat(2,1fr);gap:10px;margin:1em 0;}
.gmp-game{display:flex;flex-direction:column;gap:3px;padding:14px;border-radius:16px;background:var(--color-paper-2);border:1px solid var(--color-hairline);text-decoration:none!important;}
.gmp-game .gmp-em{font-size:26px;}
.gmp-game b{font-size:14px;color:var(--color-ink);}
.gmp-game span:last-child{font-size:11.5px;color:var(--color-whisper);line-height:1.35;}
.gmp-play{display:inline-block;margin-top:.4em;padding:12px 22px;border-radius:999px;background:linear-gradient(135deg,#3FD08C,#1FA971);color:#fff!important;font-weight:800;text-decoration:none!important;box-shadow:0 8px 20px -8px rgba(31,169,113,.55);}
@media(max-width:380px){.gmp-grid{grid-template-columns:1fr;}}
</style>

<h2>Pilih sesuai tujuan</h2>
<ul>
  <li><strong>Mau anak hafal doa?</strong> Mulai dari <a href="https://play.babymo.id/babymo-doa-harian.html" target="_blank" rel="noopener">Doa Harian</a> dan <a href="https://play.babymo.id/babymo-dua-game.html" target="_blank" rel="noopener">Dua Journey</a>.</li>
  <li><strong>Mulai mengenal huruf Arab?</strong> Pilih <a href="https://play.babymo.id/babymo-hijaiyah.html" target="_blank" rel="noopener">Huruf Hijaiyah</a>.</li>
  <li><strong>Anak susah fokus?</strong> Game tenang seperti <a href="https://play.babymo.id/babymo-look-and-find.html" target="_blank" rel="noopener">Cari Baby Mo</a> melatih konsentrasi.</li>
  <li><strong>Waktu menjelang tidur?</strong> <a href="https://play.babymo.id/babymo-dreamtime.html" target="_blank" rel="noopener">Dreamtime</a> menutup hari dengan tenang.</li>
</ul>

<h2>Tips bermain yang sehat</h2>
<ul>
  <li>Temani anak bermain — sebut huruf/doa bersama agar belajarnya menempel.</li>
  <li>Batasi durasi; game pendek membantu menjaga waktu layar tetap wajar.</li>
  <li>Hubungkan ke kehidupan nyata: setelah game doa makan, praktikkan saat makan.</li>
</ul>

<p><a class="gmp-play" href="https://play.babymo.id/" target="_blank" rel="noopener">▶ Main semua game di play.babymo.id</a></p>

<p>Mau yang lebih tenang? Pelajari <a href="/_/doa/">doa harian</a> atau tonton <a href="/_/blog/video-edukasi-anak-islami-baby-mo/">video edukasi Baby Mo</a>.</p>`,
      en: `<p>Looking for <strong>kids’ games that are safe, Islamic, and genuinely useful</strong>? Baby Mo has a set of educational games you can play right in the browser — <strong>free, no ads, no install</strong>. They work on phone, tablet, and laptop, and even play offline once opened.</p>

<h2>Why educational Islamic games?</h2>
<p>Children learn fastest through play. The right game can plant daily duas, introduce hijaiyah letters, and build focus — all while having fun. What sets Baby Mo apart: calm, toddler-friendly content aligned with a Muslim family’s values.</p>

<h2>🤲 Learn duas &amp; worship</h2>
<div class="gmp-grid">
  <a class="gmp-game" href="https://play.babymo.id/babymo-doa-harian.html" target="_blank" rel="noopener"><span class="gmp-em">🤲</span><b>Daily Duas</b><span>Learn 6 everyday duas through play.</span></a>
  <a class="gmp-game" href="https://play.babymo.id/babymo-dua-game.html" target="_blank" rel="noopener"><span class="gmp-em">🃏</span><b>Dua Journey</b><span>Match dua cards to their situations.</span></a>
  <a class="gmp-game" href="https://play.babymo.id/babymo-pray-with-mo.html" target="_blank" rel="noopener"><span class="gmp-em">🕌</span><b>Pray with Mo</b><span>Learn the prayer movements with Baby Mo.</span></a>
  <a class="gmp-game" href="https://play.babymo.id/babymo-dreamtime.html" target="_blank" rel="noopener"><span class="gmp-em">🛌</span><b>Dreamtime</b><span>A calming bedtime routine &amp; dua.</span></a>
</div>

<h2>🔤 Learn letters &amp; words</h2>
<div class="gmp-grid">
  <a class="gmp-game" href="https://play.babymo.id/babymo-hijaiyah.html" target="_blank" rel="noopener"><span class="gmp-em">🌙</span><b>Hijaiyah Letters</b><span>Get to know the Arabic letters one by one.</span></a>
  <a class="gmp-game" href="https://play.babymo.id/babymo-arabic-spelling.html" target="_blank" rel="noopener"><span class="gmp-em">🔤</span><b>Islamic Words</b><span>Arrange letters into Islamic words.</span></a>
  <a class="gmp-game" href="https://play.babymo.id/babymo-puzzle-katabaik.html" target="_blank" rel="noopener"><span class="gmp-em">💖</span><b>Kind Words</b><span>Learn good words &amp; praiseworthy manners.</span></a>
</div>

<h2>🔍 Build focus &amp; memory</h2>
<div class="gmp-grid">
  <a class="gmp-game" href="https://play.babymo.id/babymo-look-and-find.html" target="_blank" rel="noopener"><span class="gmp-em">🔍</span><b>Find Baby Mo</b><span>Find hidden objects across 12 fun scenes.</span></a>
  <a class="gmp-game" href="https://play.babymo.id/babymo-memory-match.html" target="_blank" rel="noopener"><span class="gmp-em">🎴</span><b>Memory Match</b><span>Train memory with matching pairs.</span></a>
  <a class="gmp-game" href="https://play.babymo.id/babymo-puzzle.html" target="_blank" rel="noopener"><span class="gmp-em">🧩</span><b>Meet Baby Mo</b><span>Reveal the tiles to meet Baby Mo.</span></a>
  <a class="gmp-game" href="https://play.babymo.id/baby-mo-forehand-beat.html" target="_blank" rel="noopener"><span class="gmp-em">🎵</span><b>Forehand Beat</b><span>Tap along to a cheerful rhythm.</span></a>
</div>
<style>
.gmp-grid{display:grid;grid-template-columns:repeat(2,1fr);gap:10px;margin:1em 0;}
.gmp-game{display:flex;flex-direction:column;gap:3px;padding:14px;border-radius:16px;background:var(--color-paper-2);border:1px solid var(--color-hairline);text-decoration:none!important;}
.gmp-game .gmp-em{font-size:26px;}
.gmp-game b{font-size:14px;color:var(--color-ink);}
.gmp-game span:last-child{font-size:11.5px;color:var(--color-whisper);line-height:1.35;}
.gmp-play{display:inline-block;margin-top:.4em;padding:12px 22px;border-radius:999px;background:linear-gradient(135deg,#3FD08C,#1FA971);color:#fff!important;font-weight:800;text-decoration:none!important;box-shadow:0 8px 20px -8px rgba(31,169,113,.55);}
@media(max-width:380px){.gmp-grid{grid-template-columns:1fr;}}
</style>

<h2>Pick by goal</h2>
<ul>
  <li><strong>Want your child to memorize duas?</strong> Start with <a href="https://play.babymo.id/babymo-doa-harian.html" target="_blank" rel="noopener">Daily Duas</a> and <a href="https://play.babymo.id/babymo-dua-game.html" target="_blank" rel="noopener">Dua Journey</a>.</li>
  <li><strong>Just starting Arabic letters?</strong> Pick <a href="https://play.babymo.id/babymo-hijaiyah.html" target="_blank" rel="noopener">Hijaiyah Letters</a>.</li>
  <li><strong>Struggling with focus?</strong> Calm games like <a href="https://play.babymo.id/babymo-look-and-find.html" target="_blank" rel="noopener">Find Baby Mo</a> build concentration.</li>
  <li><strong>Near bedtime?</strong> <a href="https://play.babymo.id/babymo-dreamtime.html" target="_blank" rel="noopener">Dreamtime</a> closes the day calmly.</li>
</ul>

<h2>Healthy play tips</h2>
<ul>
  <li>Play alongside your child — say the letters/duas together so it sticks.</li>
  <li>Keep sessions short; brief games help keep screen time reasonable.</li>
  <li>Connect to real life: after the eating-dua game, practice it at the meal.</li>
</ul>

<p><a class="gmp-play" href="https://play.babymo.id/" target="_blank" rel="noopener">▶ Play all games at play.babymo.id</a></p>

<p>Prefer something calmer? Learn the <a href="/_/doa/">daily duas</a> or watch <a href="/_/blog/video-edukasi-anak-islami-baby-mo/">Baby Mo’s educational videos</a>.</p>`,
    },
    tags: ["game", "permainan-anak", "islami", "edukasi-anak", "panduan"],
    published: "2026-06-22",
    updated: "2026-06-22",
    readingTimeMin: 6,
    author: "tim-baby-mo",
    faq: [
      {
        question: { id: "Apakah game Baby Mo gratis?", en: "Are Baby Mo games free?" },
        answer: {
          id: "Ya, semua game gratis dimainkan langsung di <a href=\"https://play.babymo.id/\" target=\"_blank\" rel=\"noopener\">play.babymo.id</a> — tanpa biaya dan tanpa iklan.",
          en: "Yes, all games are free to play right at <a href=\"https://play.babymo.id/\" target=\"_blank\" rel=\"noopener\">play.babymo.id</a> — no cost and no ads.",
        },
      },
      {
        question: { id: "Perlu install aplikasi?", en: "Do I need to install an app?" },
        answer: {
          id: "Tidak. Game berjalan di browser HP, tablet, atau laptop. Kamu juga bisa menambahkannya ke layar utama (Add to Home Screen) agar terbuka seperti aplikasi, dan bisa dimainkan offline setelah dibuka sekali.",
          en: "No. The games run in the browser on phone, tablet, or laptop. You can also Add to Home Screen so they open like an app, and they work offline once opened.",
        },
      },
      {
        question: { id: "Untuk umur berapa?", en: "What age are they for?" },
        answer: {
          id: "Paling cocok untuk anak usia sekitar 2–8 tahun, dengan tingkat kesulitan yang bervariasi antar game.",
          en: "Best for children around ages 2–8, with difficulty varying across the games.",
        },
      },
    ],
  },
  {
    slug: "game-cari-baby-mo-look-and-find",
    title: {
      id: "Cari Baby Mo: Game Cari Objek untuk Melatih Fokus Anak (Gratis)",
      en: "Find Baby Mo: A Hidden-Object Game to Build Kids’ Focus (Free)",
    },
    excerpt: {
      id: "Game cari objek tersembunyi dengan 12 scene seru — melatih fokus, ketelitian, dan kesabaran anak. Gratis, tanpa iklan, langsung main di browser.",
      en: "A hidden-object game with 12 fun scenes — building focus, attention to detail, and patience. Free, ad-free, play right in the browser.",
    },
    body: {
      id: `<p><strong>Cari Baby Mo</strong> adalah game cari objek tersembunyi: di setiap scene, anak mencari benda-benda — dan Baby Mo yang ngumpet — sebelum semuanya ketemu. Tenang, penuh warna, dan melatih konsentrasi tanpa terasa seperti belajar.</p>

<p><a class="gmp-play" href="https://play.babymo.id/babymo-look-and-find.html" target="_blank" rel="noopener">▶ Main Cari Baby Mo sekarang</a></p>
<style>.gmp-play{display:inline-block;margin:.4em 0;padding:12px 22px;border-radius:999px;background:linear-gradient(135deg,#3FD08C,#1FA971);color:#fff!important;font-weight:800;text-decoration:none!important;box-shadow:0 8px 20px -8px rgba(31,169,113,.55);}</style>

<h2>Apa yang dilatih?</h2>
<ul>
  <li><strong>Fokus &amp; ketelitian</strong> — anak belajar mengamati detail, bukan sekadar melihat sekilas.</li>
  <li><strong>Kesabaran</strong> — menemukan objek butuh waktu, latihan kecil untuk tidak terburu-buru.</li>
  <li><strong>Kosakata</strong> — sambil mencari, ajak anak menyebut benda yang ditemukan.</li>
</ul>

<h2>12 scene yang berbeda</h2>
<p>Dari kamar tidur, ruang keluarga, taman, pasar Ramadan, masjid, dapur, kelas, pantai, kebun binatang, taman bermain, kebun, sampai bawah laut — setiap scene punya benda baru untuk dicari, dan Baby Mo yang bersembunyi di tempat berbeda lalu muncul ceria saat ditemukan.</p>

<h2>Cara main bersama</h2>
<ol>
  <li>Duduk berdampingan; biarkan anak menunjuk layar saat menemukan objek.</li>
  <li>Beri petunjuk, bukan jawaban: “coba lihat bagian atas…”.</li>
  <li>Rayakan setiap temuan dengan tepuk tangan kecil.</li>
</ol>

<p>Suka game ini? Lihat <a href="/_/blog/game-anak-islami-baby-mo/">semua game Baby Mo</a>, atau pelajari <a href="/_/doa/">doa harian</a>.</p>`,
      en: `<p><strong>Find Baby Mo</strong> is a hidden-object game: in each scene, kids look for objects — and a hidden Baby Mo — before finding them all. Calm, colorful, and focus-building without feeling like a lesson.</p>

<p><a class="gmp-play" href="https://play.babymo.id/babymo-look-and-find.html" target="_blank" rel="noopener">▶ Play Find Baby Mo now</a></p>
<style>.gmp-play{display:inline-block;margin:.4em 0;padding:12px 22px;border-radius:999px;background:linear-gradient(135deg,#3FD08C,#1FA971);color:#fff!important;font-weight:800;text-decoration:none!important;box-shadow:0 8px 20px -8px rgba(31,169,113,.55);}</style>

<h2>What it builds</h2>
<ul>
  <li><strong>Focus &amp; attention to detail</strong> — kids learn to observe, not just glance.</li>
  <li><strong>Patience</strong> — finding objects takes time; small practice in not rushing.</li>
  <li><strong>Vocabulary</strong> — name each object as you search together.</li>
</ul>

<h2>12 different scenes</h2>
<p>From the bedroom, living room, garden, Ramadan market, mosque, kitchen, classroom, beach, zoo, playground, farm, to under the sea — each scene has new objects to find, and a Baby Mo hiding in a different spot who pops up happily when found.</p>

<h2>How to play together</h2>
<ol>
  <li>Sit side by side; let your child point at the screen when they spot something.</li>
  <li>Give hints, not answers: “try looking near the top…”.</li>
  <li>Celebrate each find with a little clap.</li>
</ol>

<p>Enjoyed it? See <a href="/_/blog/game-anak-islami-baby-mo/">all Baby Mo games</a>, or learn the <a href="/_/doa/">daily duas</a>.</p>`,
    },
    tags: ["game", "cari-objek", "fokus", "cari-baby-mo", "edukasi-anak"],
    published: "2026-06-22",
    updated: "2026-06-22",
    readingTimeMin: 3,
    author: "tim-baby-mo",
  },
  {
    slug: "game-belajar-hijaiyah-anak",
    title: {
      id: "Belajar Huruf Hijaiyah Sambil Bermain: Game Hijaiyah Baby Mo (Gratis)",
      en: "Learn Hijaiyah Letters Through Play: Baby Mo’s Hijaiyah Game (Free)",
    },
    excerpt: {
      id: "Cara menyenangkan mengenalkan huruf hijaiyah ke anak — game interaktif Baby Mo yang gratis, tanpa iklan, dan bisa dimainkan langsung di browser.",
      en: "A fun way to introduce hijaiyah letters to your child — Baby Mo’s free, ad-free interactive game you can play right in the browser.",
    },
    body: {
      id: `<p>Mengenalkan <strong>huruf hijaiyah</strong> tidak harus dengan hafalan yang kaku. Lewat game <strong>Huruf Hijaiyah</strong> dari Baby Mo, anak mengenal bentuk dan bunyi huruf Arab satu per satu, dengan cara yang ceria dan interaktif.</p>

<p><a class="gmp-play" href="https://play.babymo.id/babymo-hijaiyah.html" target="_blank" rel="noopener">▶ Main game Hijaiyah sekarang</a></p>
<style>.gmp-play{display:inline-block;margin:.4em 0;padding:12px 22px;border-radius:999px;background:linear-gradient(135deg,#3FD08C,#1FA971);color:#fff!important;font-weight:800;text-decoration:none!important;box-shadow:0 8px 20px -8px rgba(31,169,113,.55);}</style>

<h2>Kenapa lewat game?</h2>
<ul>
  <li><strong>Mengenal bentuk huruf</strong> tanpa tekanan — anak bermain, bukan diuji.</li>
  <li><strong>Mengaitkan bentuk dengan bunyi</strong> lewat interaksi langsung.</li>
  <li><strong>Pengulangan yang menyenangkan</strong> membuat huruf lebih cepat dikenal.</li>
</ul>

<h2>Tips untuk orang tua</h2>
<ol>
  <li>Temani dan ucapkan bunyi hurufnya bersama anak.</li>
  <li>Cukup beberapa huruf per sesi — jangan terburu mengejar semua.</li>
  <li>Lanjutkan ke <a href="https://play.babymo.id/babymo-arabic-spelling.html" target="_blank" rel="noopener">Kata Islam</a> saat anak mulai kenal huruf, untuk menyusun kata sederhana.</li>
</ol>

<p>Lihat juga <a href="/_/blog/game-anak-islami-baby-mo/">semua game Baby Mo</a> dan <a href="/_/doa/">kumpulan doa harian</a>.</p>`,
      en: `<p>Introducing the <strong>hijaiyah letters</strong> doesn’t have to be rigid memorization. With Baby Mo’s <strong>Hijaiyah Letters</strong> game, kids get to know the shape and sound of each Arabic letter one by one, in a cheerful, interactive way.</p>

<p><a class="gmp-play" href="https://play.babymo.id/babymo-hijaiyah.html" target="_blank" rel="noopener">▶ Play the Hijaiyah game now</a></p>
<style>.gmp-play{display:inline-block;margin:.4em 0;padding:12px 22px;border-radius:999px;background:linear-gradient(135deg,#3FD08C,#1FA971);color:#fff!important;font-weight:800;text-decoration:none!important;box-shadow:0 8px 20px -8px rgba(31,169,113,.55);}</style>

<h2>Why through a game?</h2>
<ul>
  <li><strong>Recognize letter shapes</strong> without pressure — kids play, not get tested.</li>
  <li><strong>Link shape to sound</strong> through direct interaction.</li>
  <li><strong>Fun repetition</strong> makes the letters stick faster.</li>
</ul>

<h2>Tips for parents</h2>
<ol>
  <li>Sit along and say each letter’s sound together.</li>
  <li>A few letters per session is plenty — no need to rush through all.</li>
  <li>Move on to <a href="https://play.babymo.id/babymo-arabic-spelling.html" target="_blank" rel="noopener">Islamic Words</a> once they know the letters, to build simple words.</li>
</ol>

<p>See also <a href="/_/blog/game-anak-islami-baby-mo/">all Baby Mo games</a> and the <a href="/_/doa/">daily duas</a>.</p>`,
    },
    tags: ["game", "hijaiyah", "belajar-membaca", "edukasi-anak"],
    published: "2026-06-22",
    updated: "2026-06-22",
    readingTimeMin: 3,
    author: "tim-baby-mo",
  },
  {
    slug: "video-edukasi-anak-islami-baby-mo",
    title: {
      id: "Video Edukasi Anak Islami: Panduan Tontonan Baby Mo (Doa, Lagu & Game)",
      en: "Islamic Educational Videos for Kids: A Guide to Baby Mo (Duas, Songs & Games)",
    },
    excerpt: {
      id: "Bingung cari tontonan anak yang aman dan islami? Panduan ini merangkum video Baby Mo — doa harian, lagu anak, dan game edukatif — lengkap dengan manfaat dan kapan paling pas diputar.",
      en: "Looking for safe, Islamic screen time for your child? This guide rounds up Baby Mo’s videos — daily duas, kids’ songs, and educational games — with their benefits and when to use each.",
    },
    body: {
      id: `<p>Sebagai orang tua, kita ingin waktu layar anak <strong>tenang, aman, dan sejalan dengan nilai keluarga</strong> — bukan yang penuh iklan dan terlalu cepat. Baby Mo dibuat untuk itu: video doa harian, lagu anak islami, dan game edukatif yang ramah balita. Panduan ini merangkum tontonannya, manfaatnya, dan kapan paling pas diputar.</p>

<div class="vrev-cards" aria-hidden="true">
  <div class="vrev-card"><span class="vrev-em">🤲</span><b>Doa Harian</b><span>Belajar doa lewat video pendek</span></div>
  <div class="vrev-card"><span class="vrev-em">🎵</span><b>Lagu Islami</b><span>Hafal sambil bernyanyi</span></div>
  <div class="vrev-card"><span class="vrev-em">🧩</span><b>Game Edukatif</b><span>Latih fokus &amp; ketelitian</span></div>
</div>
<style>
.vrev-cards{display:grid;grid-template-columns:repeat(3,1fr);gap:10px;margin-top:1.4em;}
.vrev-card{display:flex;flex-direction:column;align-items:center;gap:4px;text-align:center;padding:16px 8px;border-radius:18px;background:var(--color-paper-2);border:1px solid var(--color-hairline);}
.vrev-card .vrev-em{font-size:30px;}
.vrev-card b{font-size:13.5px;color:var(--color-ink);}
.vrev-card span:last-child{font-size:11px;color:var(--color-whisper);line-height:1.3;}
.vrev-uc{margin-top:1em;border:1px solid var(--color-hairline);border-radius:16px;overflow:hidden;}
.vrev-row{display:flex;align-items:center;justify-content:space-between;gap:12px;padding:12px 14px;border-top:1px solid var(--color-hairline);}
.vrev-row:first-child{border-top:none;}
.vrev-when{font-weight:700;color:var(--color-ink);font-size:14px;}
.vrev-pick{font-size:13.5px;text-align:right;}
@media(max-width:380px){.vrev-cards{grid-template-columns:1fr;}}
</style>

<h2>1. Doa harian anak</h2>
<p>Video pendek (30–45 detik) yang mengajarkan satu doa lewat tingkah Baby Mo yang menggemaskan. Karena singkat, cocok dijadikan <strong>penanda rutinitas</strong>: diputar setiap kali momennya tiba.</p>
<ul>
  <li><a href="/_/blog/lagu-doa-sebelum-tidur-anak/">Doa Sebelum Tidur</a> — penutup hari yang menenangkan.</li>
  <li><a href="/_/blog/lagu-doa-bangun-tidur-anak/">Doa Bangun Tidur</a> — buka hari dengan syukur.</li>
  <li><a href="/_/blog/lagu-doa-sebelum-makan-anak/">Doa Sebelum Makan</a> dan <a href="/_/blog/lagu-doa-sesudah-makan-anak/">Doa Sesudah Makan</a> — adab di meja makan.</li>
</ul>
<p><strong>Manfaatnya:</strong> menanamkan kebiasaan ibadah kecil yang konsisten. Doa yang dibaca tiap hari perlahan menjadi otomatis — dan kebiasaan baik adalah fondasi akhlak.</p>

<h2>2. Lagu anak islami</h2>
<p>Melodi dan pengulangan membuat anak hafal jauh lebih cepat daripada hafalan biasa, sekaligus menambah kosakata.</p>
<ul>
  <li><a href="/_/blog/lagu-bismillah-dulu/">Bismillah Dulu</a> — biasakan mengawali apa pun dengan nama Allah.</li>
  <li><a href="/_/blog/lagu-hujan-turun-rintik-rintik/">Hujan Turun Rintik-Rintik</a> — lagu hangat untuk momen bonding ayah-bunda.</li>
</ul>
<div style="position:relative;padding-top:56.25%;border-radius:16px;overflow:hidden;border:1px solid var(--color-hairline);margin-top:10px;">
<iframe src="https://www.youtube-nocookie.com/embed/cq6ODPSWGdc" title="BABY MO - Bismillah Dulu | Lagu Anak Islami" loading="lazy" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen style="position:absolute;inset:0;width:100%;height:100%;border:0;"></iframe>
</div>

<h2>3. Game cari perbedaan &amp; temukan emoji</h2>
<p>Tidak semua waktu layar harus ramai. Seri <a href="/_/blog/cari-perbedaan-anak-baby-mo/">Cari Perbedaan &amp; Temukan Emoji</a> mengajak anak duduk tenang, mengamati, dan menemukan — melatih <strong>fokus, ketelitian, dan kesabaran</strong> tanpa terasa seperti belajar.</p>

<h2>Pilih sesuai momen</h2>
<div class="vrev-uc">
  <div class="vrev-row"><span class="vrev-when">😴 Mau tidur</span><span class="vrev-pick"><a href="/_/blog/lagu-doa-sebelum-tidur-anak/">Doa Sebelum Tidur</a></span></div>
  <div class="vrev-row"><span class="vrev-when">☀️ Bangun pagi</span><span class="vrev-pick"><a href="/_/blog/lagu-doa-bangun-tidur-anak/">Doa Bangun Tidur</a></span></div>
  <div class="vrev-row"><span class="vrev-when">🍽️ Waktu makan</span><span class="vrev-pick"><a href="/_/blog/lagu-doa-sebelum-makan-anak/">Doa Makan</a></span></div>
  <div class="vrev-row"><span class="vrev-when">🌧️ Hari hujan</span><span class="vrev-pick"><a href="/_/blog/lagu-hujan-turun-rintik-rintik/">Hujan Rintik-Rintik</a></span></div>
  <div class="vrev-row"><span class="vrev-when">🧩 Waktu tenang</span><span class="vrev-pick"><a href="/_/blog/cari-perbedaan-anak-baby-mo/">Game Cari Perbedaan</a></span></div>
</div>

<h2>Tips waktu layar yang sehat</h2>
<ul>
  <li><strong>Tonton bersama.</strong> Anak belajar paling baik saat orang tua ikut menyanyi atau menunjuk layar.</li>
  <li><strong>Pendek dan terjadwal.</strong> Video doa yang singkat membantu menjaga durasi tetap wajar.</li>
  <li><strong>Hubungkan ke kehidupan nyata.</strong> Setelah video doa makan, langsung ajak praktik saat makan beneran.</li>
</ul>

<h2>Kenapa memilih Baby Mo</h2>
<ul>
  <li>Konten islami yang ramah anak — fokus pada doa, adab, dan nilai baik.</li>
  <li>Tenang dan tidak berlebihan secara visual, cocok untuk balita.</li>
  <li>Gratis ditonton, dan tersedia juga sebagai doa &amp; game interaktif di babymo.id.</li>
</ul>

<p>Tonton semuanya di <a href="https://www.youtube.com/@babymo.official?sub_confirmation=1" target="_blank" rel="noopener">channel YouTube Baby Mo</a>, mainkan langsung di <a href="/_/permainan/">permainan Baby Mo</a>, atau pelajari <a href="/_/doa/">kumpulan doa harian</a>.</p>`,
      en: `<p>As parents, we want screen time that is <strong>calm, safe, and aligned with our values</strong> — not ad-filled and over-stimulating. That’s what Baby Mo is for: daily dua videos, Islamic kids’ songs, and toddler-friendly educational games. This guide rounds them up, with benefits and when each fits best.</p>

<div class="vrev-cards" aria-hidden="true">
  <div class="vrev-card"><span class="vrev-em">🤲</span><b>Daily Duas</b><span>Learn duas via short videos</span></div>
  <div class="vrev-card"><span class="vrev-em">🎵</span><b>Islamic Songs</b><span>Memorize by singing</span></div>
  <div class="vrev-card"><span class="vrev-em">🧩</span><b>Educational Games</b><span>Train focus &amp; attention</span></div>
</div>
<style>
.vrev-cards{display:grid;grid-template-columns:repeat(3,1fr);gap:10px;margin-top:1.4em;}
.vrev-card{display:flex;flex-direction:column;align-items:center;gap:4px;text-align:center;padding:16px 8px;border-radius:18px;background:var(--color-paper-2);border:1px solid var(--color-hairline);}
.vrev-card .vrev-em{font-size:30px;}
.vrev-card b{font-size:13.5px;color:var(--color-ink);}
.vrev-card span:last-child{font-size:11px;color:var(--color-whisper);line-height:1.3;}
.vrev-uc{margin-top:1em;border:1px solid var(--color-hairline);border-radius:16px;overflow:hidden;}
.vrev-row{display:flex;align-items:center;justify-content:space-between;gap:12px;padding:12px 14px;border-top:1px solid var(--color-hairline);}
.vrev-row:first-child{border-top:none;}
.vrev-when{font-weight:700;color:var(--color-ink);font-size:14px;}
.vrev-pick{font-size:13.5px;text-align:right;}
@media(max-width:380px){.vrev-cards{grid-template-columns:1fr;}}
</style>

<h2>1. Daily duas for kids</h2>
<p>Short videos (30–45 seconds) that teach one dua through Baby Mo’s adorable antics. Being short, they make perfect <strong>routine cues</strong> — play one whenever the moment arrives.</p>
<ul>
  <li><a href="/_/blog/lagu-doa-sebelum-tidur-anak/">Dua Before Sleeping</a> — a calming close to the day.</li>
  <li><a href="/_/blog/lagu-doa-bangun-tidur-anak/">Dua Upon Waking</a> — open the day with gratitude.</li>
  <li><a href="/_/blog/lagu-doa-sebelum-makan-anak/">Dua Before Eating</a> and <a href="/_/blog/lagu-doa-sesudah-makan-anak/">After Eating</a> — table manners.</li>
</ul>
<p><strong>The benefit:</strong> planting small, consistent acts of worship. A dua read daily slowly becomes automatic — and good habits are the foundation of character.</p>

<h2>2. Islamic kids’ songs</h2>
<p>Melody and repetition help kids memorize far faster than rote learning, while building vocabulary.</p>
<ul>
  <li><a href="/_/blog/lagu-bismillah-dulu/">Bismillah Dulu</a> — begin everything with Allah’s name.</li>
  <li><a href="/_/blog/lagu-hujan-turun-rintik-rintik/">Hujan Turun Rintik-Rintik</a> — a warm song for parent-child bonding.</li>
</ul>
<div style="position:relative;padding-top:56.25%;border-radius:16px;overflow:hidden;border:1px solid var(--color-hairline);margin-top:10px;">
<iframe src="https://www.youtube-nocookie.com/embed/cq6ODPSWGdc" title="BABY MO - Bismillah Dulu | Islamic Kids Song" loading="lazy" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen style="position:absolute;inset:0;width:100%;height:100%;border:0;"></iframe>
</div>

<h2>3. Spot-the-difference &amp; find-the-emoji games</h2>
<p>Not all screen time has to be loud. The <a href="/_/blog/cari-perbedaan-anak-baby-mo/">Spot the Difference &amp; Find the Emoji</a> series invites kids to sit calmly, observe, and find — building <strong>focus, attention to detail, and patience</strong> without feeling like a lesson.</p>

<h2>Pick by the moment</h2>
<div class="vrev-uc">
  <div class="vrev-row"><span class="vrev-when">😴 Bedtime</span><span class="vrev-pick"><a href="/_/blog/lagu-doa-sebelum-tidur-anak/">Dua Before Sleeping</a></span></div>
  <div class="vrev-row"><span class="vrev-when">☀️ Waking up</span><span class="vrev-pick"><a href="/_/blog/lagu-doa-bangun-tidur-anak/">Dua Upon Waking</a></span></div>
  <div class="vrev-row"><span class="vrev-when">🍽️ Mealtime</span><span class="vrev-pick"><a href="/_/blog/lagu-doa-sebelum-makan-anak/">Eating Dua</a></span></div>
  <div class="vrev-row"><span class="vrev-when">🌧️ Rainy day</span><span class="vrev-pick"><a href="/_/blog/lagu-hujan-turun-rintik-rintik/">Hujan Rintik-Rintik</a></span></div>
  <div class="vrev-row"><span class="vrev-when">🧩 Quiet time</span><span class="vrev-pick"><a href="/_/blog/cari-perbedaan-anak-baby-mo/">Spot the Difference</a></span></div>
</div>

<h2>Healthy screen-time tips</h2>
<ul>
  <li><strong>Watch together.</strong> Kids learn best when a parent sings along or points at the screen.</li>
  <li><strong>Short and scheduled.</strong> Brief dua videos help keep total time reasonable.</li>
  <li><strong>Connect to real life.</strong> After the eating-dua video, practice it at the actual meal.</li>
</ul>

<h2>Why choose Baby Mo</h2>
<ul>
  <li>Child-friendly Islamic content — focused on duas, manners, and good values.</li>
  <li>Calm and not visually over-stimulating, suitable for toddlers.</li>
  <li>Free to watch, and also available as interactive duas &amp; games on babymo.id.</li>
</ul>

<p>Watch them all on the <a href="https://www.youtube.com/@babymo.official?sub_confirmation=1" target="_blank" rel="noopener">Baby Mo YouTube channel</a>, play directly in <a href="/_/permainan/">Baby Mo games</a>, or learn the <a href="/_/doa/">daily duas</a>.</p>`,
    },
    tags: ["video", "edukasi-anak", "islami", "tontonan-anak", "panduan"],
    published: "2026-06-22",
    updated: "2026-06-22",
    readingTimeMin: 6,
    author: "tim-baby-mo",
    faq: [
      {
        question: {
          id: "Apakah video Baby Mo aman untuk anak?",
          en: "Are Baby Mo videos safe for children?",
        },
        answer: {
          id: "Ya. Baby Mo dibuat khusus untuk anak: konten islami yang ramah anak, tanpa kekerasan, dan tidak berlebihan secara visual. Tetap disarankan menonton bersama anak.",
          en: "Yes. Baby Mo is made for children: child-friendly Islamic content, no violence, and not visually over-stimulating. Co-viewing with your child is still recommended.",
        },
      },
      {
        question: {
          id: "Untuk umur berapa video Baby Mo cocok?",
          en: "What age are Baby Mo videos for?",
        },
        answer: {
          id: "Paling cocok untuk balita dan anak usia sekitar 2–8 tahun. Video doa yang pendek pas untuk balita, sementara game cari perbedaan cocok untuk anak yang lebih besar.",
          en: "Best for toddlers and children around ages 2–8. The short dua videos suit toddlers, while the spot-the-difference games suit older kids.",
        },
      },
      {
        question: {
          id: "Apakah perlu membayar?",
          en: "Is it free?",
        },
        answer: {
          id: "Gratis. Semua video bisa ditonton di <a href=\"https://www.youtube.com/@babymo.official\" target=\"_blank\" rel=\"noopener\">channel YouTube Baby Mo</a>, dan doa serta game interaktif tersedia gratis di babymo.id.",
          en: "Free. All videos are on the <a href=\"https://www.youtube.com/@babymo.official\" target=\"_blank\" rel=\"noopener\">Baby Mo YouTube channel</a>, and the duas and interactive games are free on babymo.id.",
        },
      },
      {
        question: {
          id: "Di mana saya bisa menonton dan belajar lebih lanjut?",
          en: "Where can I watch and learn more?",
        },
        answer: {
          id: "Tonton di channel YouTube @babymo.official. Untuk belajar interaktif, buka <a href=\"/_/doa/\">kumpulan doa harian</a> dan <a href=\"/_/permainan/\">permainan Baby Mo</a> di situs ini.",
          en: "Watch on the @babymo.official YouTube channel. For interactive learning, open the <a href=\"/_/doa/\">daily duas</a> and <a href=\"/_/permainan/\">Baby Mo games</a> on this site.",
        },
      },
    ],
  },
  {
    slug: "lagu-hujan-turun-rintik-rintik",
    title: {
      id: "Lirik Lagu “Hujan Turun Rintik-Rintik” — Lagu Anak Ceria Baby Mo",
      en: "“Hujan Turun Rintik-Rintik” Lyrics — Baby Mo’s Cheerful Kids Song",
    },
    excerpt: {
      id: "Lagu anak ceria tentang hujan, bunga yang mekar, dan kehangatan ayah-bunda. Lengkap dengan video, lirik, dan ide momen bonding sederhana lewat “klitik-klitik”.",
      en: "A cheerful kids’ song about rain, blooming flowers, and a parent’s warmth. With the video, lyrics, and a simple bonding moment through tickles.",
    },
    body: {
      id: `<p>Hujan tidak selalu berarti tidak bisa bermain. Lewat lagu <strong>“Hujan Turun Rintik-Rintik”</strong> dari Baby Mo, hujan jadi momen ceria — bunga mekar, dan ayah-bunda memberi <em>klitik-klitik</em> (gelitikan sayang) pada si kecil.</p>

<div class="hjn-stage" aria-hidden="true">
  <div class="hjn-sky">
    <span class="hjn-cloud"></span>
    <span class="hjn-drop" style="--x:18%;--d:0s"></span>
    <span class="hjn-drop" style="--x:34%;--d:.5s"></span>
    <span class="hjn-drop" style="--x:50%;--d:.2s"></span>
    <span class="hjn-drop" style="--x:66%;--d:.7s"></span>
    <span class="hjn-drop" style="--x:82%;--d:.35s"></span>
    <div class="hjn-flower">
      <span class="hjn-stem"></span>
      <span class="hjn-head">
        <span class="hjn-petal" style="--r:0deg"></span>
        <span class="hjn-petal" style="--r:72deg"></span>
        <span class="hjn-petal" style="--r:144deg"></span>
        <span class="hjn-petal" style="--r:216deg"></span>
        <span class="hjn-petal" style="--r:288deg"></span>
        <span class="hjn-core"></span>
      </span>
    </div>
  </div>
</div>
<style>
.hjn-stage{margin-top:1.4em;padding:14px;border-radius:22px;background:var(--color-paper-2);border:1px solid var(--color-hairline);}
.hjn-sky{position:relative;height:160px;border-radius:16px;overflow:hidden;background:linear-gradient(#bfe4f5,#eaf7ff);}
.hjn-cloud{position:absolute;top:14px;left:50%;margin-left:-45px;width:90px;height:26px;background:#fff;border-radius:20px;box-shadow:-26px 6px 0 -4px #fff,26px 6px 0 -2px #fff;opacity:.95;}
.hjn-drop{position:absolute;top:38px;left:var(--x);width:3px;height:12px;border-radius:3px;background:rgba(86,150,200,.7);animation:hjn-fall 1.1s linear infinite;animation-delay:var(--d);}
@keyframes hjn-fall{0%{transform:translateY(0);opacity:0}10%{opacity:1}100%{transform:translateY(92px);opacity:0}}
.hjn-flower{position:absolute;bottom:0;left:50%;margin-left:-32px;width:64px;height:80px;transform-origin:bottom center;animation:hjn-sway 3.6s ease-in-out infinite;}
.hjn-stem{position:absolute;bottom:0;left:50%;margin-left:-2.5px;width:5px;height:44px;background:#4ea84e;border-radius:3px;}
.hjn-head{position:absolute;top:0;left:50%;margin-left:-22px;width:44px;height:44px;}
.hjn-petal{position:absolute;top:50%;left:50%;width:20px;height:20px;margin:-10px 0 0 -10px;border-radius:50%;background:#ff9ec0;transform:rotate(var(--r)) translateY(-13px);}
.hjn-core{position:absolute;top:50%;left:50%;width:18px;height:18px;margin:-9px 0 0 -9px;border-radius:50%;background:#ffd166;}
@keyframes hjn-sway{0%,100%{transform:translateX(0) rotate(-4deg)}50%{transform:translateX(0) rotate(4deg)}}
@media(prefers-reduced-motion:reduce){.hjn-drop{animation:none;opacity:.5}.hjn-flower{animation:none}}
</style>

<h2>Lirik “Hujan Turun Rintik-Rintik”</h2>
<p class="bmlg-credit"><em>Ciptaan: Yaniko, Felly</em></p>
<div class="bmlg-lyrics">
<p>Hujan turun rintik-rintik<br>Bunga mekar sangat cantik<br>Anak soleh, anak baik<br>Sini ayah kasih klitik<br>Klitik klitik klitik</p>
<p class="bmlg-dot">· · ·</p>
<p>Hujan turun rintik-rintik<br>Bunga mekar sangat cantik<br>Anak solehah, anak cantik<br>Sini bunda kasih klitik<br>Klitik klitik klitik</p>
</div>
<style>
.bmlg-credit{margin-top:.2em;font-size:13px;color:var(--color-whisper);}
.bmlg-lyrics{margin-top:1em;padding:20px 18px;border-radius:18px;background:var(--color-brave-soft);border:1px solid var(--color-hairline);text-align:center;font-weight:600;color:var(--color-ink);line-height:1.9;}
.bmlg-lyrics p{margin:0;}
.bmlg-dot{margin:10px 0!important;color:var(--color-sage);letter-spacing:6px;}
</style>

<h2>Kenapa lagu ini terasa hangat</h2>
<p>Lagu ini sederhana tapi penuh kasih. Bagian “sini ayah/bunda kasih klitik” mengubah lagu menjadi <strong>momen bonding</strong>: peluk anak, gelitik lembut, tertawa bersama. Sentuhan dan tawa membangun rasa aman yang jadi dasar tumbuh kembang anak.</p>
<ul>
  <li><strong>Kosakata baru.</strong> Hujan, rintik, bunga, mekar — sambil bernyanyi, tunjuk benda di sekitar.</li>
  <li><strong>Menyambut hari hujan dengan ceria.</strong> Anak belajar bahwa hujan itu nikmat, bukan halangan.</li>
  <li><strong>Tawa sebelum tidur siang.</strong> Lagu pendek ini pas untuk jeda hangat di siang hari.</li>
</ul>

<p>Suka lagunya? <a href="https://www.youtube.com/@babymo.official?sub_confirmation=1" target="_blank" rel="noopener">Subscribe channel Baby Mo di YouTube</a> untuk lagu anak ceria lainnya. Lihat juga lagu <a href="/_/blog/lagu-bismillah-dulu/">“Bismillah Dulu”</a> dan <a href="/_/permainan/">permainan Baby Mo</a>.</p>`,
      en: `<p>Rain doesn’t have to mean no play. With Baby Mo’s <strong>“Hujan Turun Rintik-Rintik”</strong> (“Rain Falls in Droplets”), rain becomes a happy moment — flowers bloom, and mum and dad give the little one loving <em>klitik-klitik</em> (gentle tickles).</p>

<div class="hjn-stage" aria-hidden="true">
  <div class="hjn-sky">
    <span class="hjn-cloud"></span>
    <span class="hjn-drop" style="--x:18%;--d:0s"></span>
    <span class="hjn-drop" style="--x:34%;--d:.5s"></span>
    <span class="hjn-drop" style="--x:50%;--d:.2s"></span>
    <span class="hjn-drop" style="--x:66%;--d:.7s"></span>
    <span class="hjn-drop" style="--x:82%;--d:.35s"></span>
    <div class="hjn-flower">
      <span class="hjn-stem"></span>
      <span class="hjn-head">
        <span class="hjn-petal" style="--r:0deg"></span>
        <span class="hjn-petal" style="--r:72deg"></span>
        <span class="hjn-petal" style="--r:144deg"></span>
        <span class="hjn-petal" style="--r:216deg"></span>
        <span class="hjn-petal" style="--r:288deg"></span>
        <span class="hjn-core"></span>
      </span>
    </div>
  </div>
</div>
<style>
.hjn-stage{margin-top:1.4em;padding:14px;border-radius:22px;background:var(--color-paper-2);border:1px solid var(--color-hairline);}
.hjn-sky{position:relative;height:160px;border-radius:16px;overflow:hidden;background:linear-gradient(#bfe4f5,#eaf7ff);}
.hjn-cloud{position:absolute;top:14px;left:50%;margin-left:-45px;width:90px;height:26px;background:#fff;border-radius:20px;box-shadow:-26px 6px 0 -4px #fff,26px 6px 0 -2px #fff;opacity:.95;}
.hjn-drop{position:absolute;top:38px;left:var(--x);width:3px;height:12px;border-radius:3px;background:rgba(86,150,200,.7);animation:hjn-fall 1.1s linear infinite;animation-delay:var(--d);}
@keyframes hjn-fall{0%{transform:translateY(0);opacity:0}10%{opacity:1}100%{transform:translateY(92px);opacity:0}}
.hjn-flower{position:absolute;bottom:0;left:50%;margin-left:-32px;width:64px;height:80px;transform-origin:bottom center;animation:hjn-sway 3.6s ease-in-out infinite;}
.hjn-stem{position:absolute;bottom:0;left:50%;margin-left:-2.5px;width:5px;height:44px;background:#4ea84e;border-radius:3px;}
.hjn-head{position:absolute;top:0;left:50%;margin-left:-22px;width:44px;height:44px;}
.hjn-petal{position:absolute;top:50%;left:50%;width:20px;height:20px;margin:-10px 0 0 -10px;border-radius:50%;background:#ff9ec0;transform:rotate(var(--r)) translateY(-13px);}
.hjn-core{position:absolute;top:50%;left:50%;width:18px;height:18px;margin:-9px 0 0 -9px;border-radius:50%;background:#ffd166;}
@keyframes hjn-sway{0%,100%{transform:translateX(0) rotate(-4deg)}50%{transform:translateX(0) rotate(4deg)}}
@media(prefers-reduced-motion:reduce){.hjn-drop{animation:none;opacity:.5}.hjn-flower{animation:none}}
</style>

<h2>Lyrics (original Indonesian)</h2>
<p class="bmlg-credit"><em>Written by: Yaniko, Felly</em></p>
<div class="bmlg-lyrics">
<p>Hujan turun rintik-rintik<br>Bunga mekar sangat cantik<br>Anak soleh, anak baik<br>Sini ayah kasih klitik<br>Klitik klitik klitik</p>
<p class="bmlg-dot">· · ·</p>
<p>Hujan turun rintik-rintik<br>Bunga mekar sangat cantik<br>Anak solehah, anak cantik<br>Sini bunda kasih klitik<br>Klitik klitik klitik</p>
</div>
<style>
.bmlg-credit{margin-top:.2em;font-size:13px;color:var(--color-whisper);}
.bmlg-lyrics{margin-top:1em;padding:20px 18px;border-radius:18px;background:var(--color-brave-soft);border:1px solid var(--color-hairline);text-align:center;font-weight:600;color:var(--color-ink);line-height:1.9;}
.bmlg-lyrics p{margin:0;}
.bmlg-dot{margin:10px 0!important;color:var(--color-sage);letter-spacing:6px;}
</style>

<p><em>Meaning:</em> Rain falls in droplets, flowers bloom so pretty; good little one, come here for a loving tickle — klitik klitik klitik.</p>

<h2>Why this song feels warm</h2>
<p>It’s simple but full of affection. The “come here for a tickle” line turns the song into a <strong>bonding moment</strong>: hug your child, tickle gently, laugh together. Touch and laughter build the sense of safety that underpins healthy development.</p>
<ul>
  <li><strong>New words.</strong> Rain, droplets, flower, bloom — point to things around you as you sing.</li>
  <li><strong>Greet rainy days happily.</strong> Kids learn that rain is a blessing, not an obstacle.</li>
  <li><strong>A laugh before nap time.</strong> A short, warm midday pause.</li>
</ul>

<p>Enjoyed it? <a href="https://www.youtube.com/@babymo.official?sub_confirmation=1" target="_blank" rel="noopener">Subscribe to Baby Mo on YouTube</a> for more cheerful kids’ songs. See also the <a href="/_/blog/lagu-bismillah-dulu/">“Bismillah Dulu”</a> song and <a href="/_/permainan/">Baby Mo games</a>.</p>`,
    },
    tags: ["lagu", "anak", "bonding", "video", "balita"],
    published: "2026-06-22",
    updated: "2026-06-22",
    readingTimeMin: 2,
    author: "tim-baby-mo",
    youtube: "h0JAjIsyrSs",
  },
  {
    slug: "lagu-doa-sebelum-tidur-anak",
    title: {
      id: "Doa Sebelum Tidur untuk Anak: Video Lagu, Lirik, dan Artinya",
      en: "Dua Before Sleeping for Kids: Song Video, Lyrics, and Meaning",
    },
    excerpt: {
      id: "Ajarkan doa sebelum tidur ke anak lewat video lagu Baby Mo yang ceria — lengkap dengan bacaan Arab, latin, arti, dan cara mengajarkannya setiap malam.",
      en: "Teach your child the dua before sleeping with Baby Mo’s cheerful song video — complete with Arabic, transliteration, meaning, and how to make it a nightly habit.",
    },
    body: {
      id: `<p>Doa sebelum tidur adalah salah satu doa pertama yang bisa diajarkan ke anak — pendek, mudah dihafal, dan dibaca setiap malam. Lewat video lagu <strong>“Doa Sebelum Tidur”</strong> dari Baby Mo, anak belajar sambil bernyanyi, bukan menghafal dengan terpaksa.</p>

<h2>Bacaan doa sebelum tidur</h2>
<blockquote dir="rtl" lang="ar" style="font-family:'Amiri Quran','Amiri','Noto Naskh Arabic',serif;font-size:1.55em;line-height:2;color:var(--color-sage-deep);">بِاسْمِكَ اللَّهُمَّ أَحْيَا وَبِاسْمِكَ أَمُوتُ</blockquote>
<p><em>Bismika Allāhumma aḥyā wa bismika amūtu</em></p>
<p>“Dengan nama-Mu ya Allah aku hidup dan dengan nama-Mu aku mati.”</p>
<p>Bacaan lengkap dengan sumbernya bisa dilihat di halaman <a href="/_/doa/sebelum-tidur/">Doa Sebelum Tidur</a>.</p>

<h2>Cara mengajarkan lewat video</h2>
<ol>
  <li><strong>Putar saat rutinitas tidur.</strong> Jadikan video ini bagian dari ritual malam: sikat gigi, matikan lampu, lalu nyanyikan doanya bersama.</li>
  <li><strong>Nyanyikan bersama, jangan hanya diputar.</strong> Suara orang tua membuat anak merasa aman dan lebih cepat hafal.</li>
  <li><strong>Ulangi setiap malam.</strong> Konsistensi mengubah lagu menjadi kebiasaan, dan kebiasaan menjadi karakter.</li>
</ol>

<h2>Kenapa lagu efektif untuk anak</h2>
<p>Melodi dan pengulangan membantu otak anak menyimpan kata-kata jauh lebih baik daripada hafalan biasa. Lagu pendek berdurasi setengah menit cocok dengan rentang fokus balita — cukup untuk satu doa, tidak membuat bosan.</p>

<p>Suka videonya? <a href="https://www.youtube.com/@babymo.official?sub_confirmation=1" target="_blank" rel="noopener">Subscribe channel Baby Mo di YouTube</a> untuk video doa &amp; lagu anak islami lainnya. Lihat juga <a href="/_/doa/">kumpulan doa harian</a> dan <a href="/_/permainan/">permainan Baby Mo</a>.</p>`,
      en: `<p>The dua before sleeping is one of the first duas you can teach a child — short, easy to memorize, and read every night. With Baby Mo’s cheerful <strong>“Doa Sebelum Tidur”</strong> song video, kids learn by singing rather than forced memorizing.</p>

<h2>The dua before sleeping</h2>
<blockquote dir="rtl" lang="ar" style="font-family:'Amiri Quran','Amiri','Noto Naskh Arabic',serif;font-size:1.55em;line-height:2;color:var(--color-sage-deep);">بِاسْمِكَ اللَّهُمَّ أَحْيَا وَبِاسْمِكَ أَمُوتُ</blockquote>
<p><em>Bismika Allāhumma aḥyā wa bismika amūtu</em></p>
<p>“With Your name, O Allah, I live and with Your name I die.”</p>
<p>Full reading with the source on the <a href="/_/doa/sebelum-tidur/">Doa Sebelum Tidur</a> page.</p>

<h2>How to teach it with the video</h2>
<ol>
  <li><strong>Play it during the bedtime routine.</strong> Make it part of the nightly ritual: brush teeth, lights down, then sing the dua together.</li>
  <li><strong>Sing along — don’t just press play.</strong> A parent’s voice helps a child feel safe and memorize faster.</li>
  <li><strong>Repeat every night.</strong> Consistency turns a song into a habit, and a habit into character.</li>
</ol>

<h2>Why songs work for kids</h2>
<p>Melody and repetition help a child’s brain store words far better than plain memorization. A half-minute song fits a toddler’s attention span — enough for one dua, never boring.</p>

<p>Enjoyed it? <a href="https://www.youtube.com/@babymo.official?sub_confirmation=1" target="_blank" rel="noopener">Subscribe to Baby Mo on YouTube</a> for more Islamic dua &amp; song videos for kids. Also see the <a href="/_/doa/">daily duas</a> and <a href="/_/permainan/">Baby Mo games</a>.</p>`,
    },
    tags: ["doa", "sebelum-tidur", "lagu", "video", "balita"],
    published: "2026-06-22",
    updated: "2026-06-22",
    readingTimeMin: 3,
    author: "tim-baby-mo",
    youtube: "orXDAOHAKw8",
  },
  {
    slug: "lagu-doa-bangun-tidur-anak",
    title: {
      id: "Doa Bangun Tidur untuk Anak: Video Lagu, Lirik, dan Artinya",
      en: "Dua Upon Waking for Kids: Song Video, Lyrics, and Meaning",
    },
    excerpt: {
      id: "Mulai pagi anak dengan rasa syukur. Video lagu “Doa Bangun Tidur” dari Baby Mo membantu anak menghafal doa pagi — lengkap dengan Arab, latin, dan artinya.",
      en: "Start your child’s morning with gratitude. Baby Mo’s “Doa Bangun Tidur” song video helps kids memorize the waking dua — with Arabic, transliteration, and meaning.",
    },
    body: {
      id: `<p>Hal pertama yang diucapkan seorang muslim saat bangun adalah syukur — bahwa Allah menghidupkannya kembali untuk satu hari baru. Video lagu <strong>“Doa Bangun Tidur”</strong> dari Baby Mo mengajarkan kebiasaan indah ini sejak dini.</p>

<h2>Bacaan doa bangun tidur</h2>
<blockquote dir="rtl" lang="ar" style="font-family:'Amiri Quran','Amiri','Noto Naskh Arabic',serif;font-size:1.5em;line-height:2;color:var(--color-sage-deep);">الْحَمْدُ لِلَّهِ الَّذِي أَحْيَانَا بَعْدَ مَا أَمَاتَنَا وَإِلَيْهِ النُّشُورُ</blockquote>
<p><em>Alhamdulillāhilladzī aḥyānā ba‘da mā amātanā wa ilayhin-nusyūr</em></p>
<p>“Segala puji bagi Allah yang menghidupkan kami setelah mematikan kami, dan kepada-Nya kami dibangkitkan.”</p>
<p>Selengkapnya: <a href="/_/doa/bangun-tidur/">Doa Bangun Tidur</a>.</p>

<h2>Jadikan rutinitas pagi</h2>
<ol>
  <li><strong>Putar saat anak baru bangun.</strong> Sebelum gawai, sebelum sarapan — satu lagu pendek untuk membuka hari.</li>
  <li><strong>Pasangkan dengan doa sebelum tidur.</strong> Anak belajar siklus indah: tidur dengan bismillah, bangun dengan alhamdulillah.</li>
  <li><strong>Beri pujian, bukan tekanan.</strong> “MasyaAllah, sudah ingat doanya!” lebih ampuh daripada menyuruh.</li>
</ol>

<p>Suka videonya? <a href="https://www.youtube.com/@babymo.official?sub_confirmation=1" target="_blank" rel="noopener">Subscribe channel Baby Mo</a>. Lihat juga <a href="/_/doa/sebelum-tidur/">doa sebelum tidur</a> dan <a href="/_/doa/">doa harian lainnya</a>.</p>`,
      en: `<p>The first thing a Muslim says upon waking is gratitude — that Allah has given life back for a new day. Baby Mo’s <strong>“Doa Bangun Tidur”</strong> song video teaches this beautiful habit early.</p>

<h2>The dua upon waking</h2>
<blockquote dir="rtl" lang="ar" style="font-family:'Amiri Quran','Amiri','Noto Naskh Arabic',serif;font-size:1.5em;line-height:2;color:var(--color-sage-deep);">الْحَمْدُ لِلَّهِ الَّذِي أَحْيَانَا بَعْدَ مَا أَمَاتَنَا وَإِلَيْهِ النُّشُورُ</blockquote>
<p><em>Alhamdulillāhilladzī aḥyānā ba‘da mā amātanā wa ilayhin-nusyūr</em></p>
<p>“All praise is for Allah who gave us life after causing us to die, and to Him is the return.”</p>
<p>More: <a href="/_/doa/bangun-tidur/">Doa Bangun Tidur</a>.</p>

<h2>Make it a morning routine</h2>
<ol>
  <li><strong>Play it as your child wakes.</strong> Before screens, before breakfast — one short song to open the day.</li>
  <li><strong>Pair it with the sleeping dua.</strong> Kids learn a beautiful cycle: sleep with bismillah, wake with alhamdulillah.</li>
  <li><strong>Praise, don’t pressure.</strong> “MashaAllah, you remembered!” beats nagging.</li>
</ol>

<p>Enjoyed it? <a href="https://www.youtube.com/@babymo.official?sub_confirmation=1" target="_blank" rel="noopener">Subscribe to Baby Mo</a>. See also the <a href="/_/doa/sebelum-tidur/">dua before sleeping</a> and <a href="/_/doa/">other daily duas</a>.</p>`,
    },
    tags: ["doa", "bangun-tidur", "lagu", "video", "rutinitas"],
    published: "2026-06-22",
    updated: "2026-06-22",
    readingTimeMin: 3,
    author: "tim-baby-mo",
    youtube: "L6bXkRuO5vc",
  },
  {
    slug: "lagu-doa-sebelum-makan-anak",
    title: {
      id: "Doa Sebelum Makan untuk Anak: Video Lagu & Adab Makan Islami",
      en: "Dua Before Eating for Kids: Song Video & Islamic Table Manners",
    },
    excerpt: {
      id: "Biasakan anak membaca bismillah sebelum makan lewat video lagu Baby Mo — plus adab makan sederhana yang bisa diajarkan sejak balita.",
      en: "Help kids say bismillah before eating with Baby Mo’s song video — plus simple Islamic table manners you can teach from toddlerhood.",
    },
    body: {
      id: `<p>Sebelum suapan pertama, ada satu kata kecil yang mengubah makan biasa menjadi ibadah: <strong>bismillah</strong>. Video lagu <strong>“Doa Sebelum Makan”</strong> dari Baby Mo membuat adab ini menyenangkan untuk anak.</p>

<h2>Bacaan doa sebelum makan</h2>
<blockquote dir="rtl" lang="ar" style="font-family:'Amiri Quran','Amiri','Noto Naskh Arabic',serif;font-size:1.7em;line-height:1.9;color:var(--color-sage-deep);">بِسْمِ اللَّهِ</blockquote>
<p><em>Bismillāh</em> — “Dengan nama Allah.”</p>
<p>Rasulullah ﷺ mengajarkan membaca bismillah sebelum makan. Selengkapnya: <a href="/_/doa/sebelum-makan/">Doa Sebelum Makan</a>.</p>

<h2>Adab makan sederhana untuk anak</h2>
<ul>
  <li>Baca <em>bismillah</em> sebelum mulai.</li>
  <li>Makan dengan tangan kanan.</li>
  <li>Makan yang ada di dekatnya, secukupnya, tidak berlebihan.</li>
  <li>Tutup dengan <a href="/_/doa/sesudah-makan/">doa sesudah makan</a> dan ucapan syukur.</li>
</ul>

<p>Lagu ini juga sejalan dengan lagu <a href="/_/blog/lagu-bismillah-dulu/">“Bismillah Dulu”</a> — keduanya menanamkan kebiasaan mengawali dengan nama Allah.</p>

<p>Suka videonya? <a href="https://www.youtube.com/@babymo.official?sub_confirmation=1" target="_blank" rel="noopener">Subscribe channel Baby Mo</a> untuk lagu &amp; doa anak islami lainnya.</p>`,
      en: `<p>Before the first bite, one small word turns an ordinary meal into worship: <strong>bismillah</strong>. Baby Mo’s <strong>“Doa Sebelum Makan”</strong> song video makes this manner fun for kids.</p>

<h2>The dua before eating</h2>
<blockquote dir="rtl" lang="ar" style="font-family:'Amiri Quran','Amiri','Noto Naskh Arabic',serif;font-size:1.7em;line-height:1.9;color:var(--color-sage-deep);">بِسْمِ اللَّهِ</blockquote>
<p><em>Bismillāh</em> — “In the name of Allah.”</p>
<p>The Prophet ﷺ taught saying bismillah before eating. More: <a href="/_/doa/sebelum-makan/">Doa Sebelum Makan</a>.</p>

<h2>Simple table manners for kids</h2>
<ul>
  <li>Say <em>bismillah</em> before starting.</li>
  <li>Eat with the right hand.</li>
  <li>Eat what’s nearest, in moderation, without waste.</li>
  <li>Finish with the <a href="/_/doa/sesudah-makan/">dua after eating</a> and a word of thanks.</li>
</ul>

<p>This pairs with the <a href="/_/blog/lagu-bismillah-dulu/">“Bismillah Dulu”</a> song — both plant the habit of beginning with Allah’s name.</p>

<p>Enjoyed it? <a href="https://www.youtube.com/@babymo.official?sub_confirmation=1" target="_blank" rel="noopener">Subscribe to Baby Mo</a> for more Islamic songs &amp; duas for kids.</p>`,
    },
    tags: ["doa", "makan", "lagu", "video", "adab"],
    published: "2026-06-22",
    updated: "2026-06-22",
    readingTimeMin: 3,
    author: "tim-baby-mo",
    youtube: "cmK8ruUiCbA",
  },
  {
    slug: "lagu-doa-sesudah-makan-anak",
    title: {
      id: "Doa Sesudah Makan untuk Anak: Video Lagu, Lirik, dan Artinya",
      en: "Dua After Eating for Kids: Song Video, Lyrics, and Meaning",
    },
    excerpt: {
      id: "Ajari anak bersyukur setelah makan lewat video lagu Baby Mo — lengkap dengan bacaan Arab, latin, arti, dan tips menanamkan kebiasaan syukur.",
      en: "Teach kids gratitude after eating with Baby Mo’s song video — Arabic, transliteration, meaning, and tips for nurturing a habit of thankfulness.",
    },
    body: {
      id: `<p>Rasa kenyang adalah nikmat yang mudah dilupakan. Doa sesudah makan mengajak anak berhenti sejenak dan bersyukur. Video lagu <strong>“Doa Sesudah Makan”</strong> dari Baby Mo membuatnya mudah diingat.</p>

<h2>Bacaan doa sesudah makan</h2>
<blockquote dir="rtl" lang="ar" style="font-family:'Amiri Quran','Amiri','Noto Naskh Arabic',serif;font-size:1.5em;line-height:2;color:var(--color-sage-deep);">الْحَمْدُ لِلَّهِ الَّذِي أَطْعَمَنَا وَسَقَانَا وَجَعَلَنَا مُسْلِمِينَ</blockquote>
<p><em>Alhamdulillāhilladzī aṭ‘amanā wa saqānā wa ja‘alanā muslimīn</em></p>
<p>“Segala puji bagi Allah yang memberi kami makan dan minum, serta menjadikan kami muslim.”</p>
<p>Selengkapnya: <a href="/_/doa/sesudah-makan/">Doa Sesudah Makan</a>.</p>

<h2>Menanamkan kebiasaan syukur</h2>
<ol>
  <li><strong>Baca bersama setelah suapan terakhir.</strong> Jadikan penutup makan, sama rutinnya dengan membuka dengan bismillah.</li>
  <li><strong>Hubungkan dengan rasa.</strong> “Tadi enak ya? Yuk, ucap terima kasih ke Allah.”</li>
  <li><strong>Contohkan.</strong> Saat orang tua ikut bersyukur, anak meniru tanpa diperintah.</li>
</ol>

<p>Suka videonya? <a href="https://www.youtube.com/@babymo.official?sub_confirmation=1" target="_blank" rel="noopener">Subscribe channel Baby Mo</a>. Lihat juga <a href="/_/doa/sebelum-makan/">doa sebelum makan</a> dan <a href="/_/doa/">doa harian lainnya</a>.</p>`,
      en: `<p>Feeling full is a blessing that’s easy to forget. The dua after eating invites a child to pause and give thanks. Baby Mo’s <strong>“Doa Sesudah Makan”</strong> song video makes it easy to remember.</p>

<h2>The dua after eating</h2>
<blockquote dir="rtl" lang="ar" style="font-family:'Amiri Quran','Amiri','Noto Naskh Arabic',serif;font-size:1.5em;line-height:2;color:var(--color-sage-deep);">الْحَمْدُ لِلَّهِ الَّذِي أَطْعَمَنَا وَسَقَانَا وَجَعَلَنَا مُسْلِمِينَ</blockquote>
<p><em>Alhamdulillāhilladzī aṭ‘amanā wa saqānā wa ja‘alanā muslimīn</em></p>
<p>“All praise is for Allah who fed us, gave us drink, and made us Muslims.”</p>
<p>More: <a href="/_/doa/sesudah-makan/">Doa Sesudah Makan</a>.</p>

<h2>Nurturing the habit of gratitude</h2>
<ol>
  <li><strong>Recite together after the last bite.</strong> Make it the meal’s closing, as routine as opening with bismillah.</li>
  <li><strong>Connect it to taste.</strong> “That was tasty, right? Let’s thank Allah.”</li>
  <li><strong>Model it.</strong> When parents give thanks too, children copy without being told.</li>
</ol>

<p>Enjoyed it? <a href="https://www.youtube.com/@babymo.official?sub_confirmation=1" target="_blank" rel="noopener">Subscribe to Baby Mo</a>. See also the <a href="/_/doa/sebelum-makan/">dua before eating</a> and <a href="/_/doa/">other daily duas</a>.</p>`,
    },
    tags: ["doa", "makan", "syukur", "video", "adab"],
    published: "2026-06-22",
    updated: "2026-06-22",
    readingTimeMin: 3,
    author: "tim-baby-mo",
    youtube: "X6ZGk_e7A00",
  },
  {
    slug: "cari-perbedaan-anak-baby-mo",
    title: {
      id: "Game Cari Perbedaan untuk Anak: Melatih Fokus Sambil Bermain",
      en: "Spot the Difference for Kids: Building Focus Through Play",
    },
    excerpt: {
      id: "Video “Cari dan Temukan Perbedaan Bareng Baby Mo” melatih fokus, ketelitian, dan kesabaran anak — tontonan tenang yang ramah anak. Plus cara memainkannya bersama.",
      en: "Baby Mo’s “Spot the Difference” videos build focus, attention to detail, and patience — calm, kid-friendly screen time. Plus how to play along together.",
    },
    body: {
      id: `<p>Tidak semua waktu layar harus ramai dan cepat. Video <strong>“Cari dan Temukan Perbedaan Bareng Baby Mo”</strong> mengajak anak duduk tenang, mengamati, dan menemukan — melatih fokus tanpa terasa seperti belajar.</p>

<h2>Apa yang dilatih?</h2>
<ul>
  <li><strong>Fokus &amp; perhatian.</strong> Anak belajar mengamati detail, bukan sekadar melihat sekilas.</li>
  <li><strong>Kesabaran.</strong> Menemukan perbedaan butuh waktu — latihan kecil untuk tidak terburu-buru.</li>
  <li><strong>Kosakata.</strong> Sambil mencari, ajak anak menyebut benda yang dilihat.</li>
</ul>

<h2>Cara bermain bersama</h2>
<ol>
  <li><strong>Duduk berdampingan.</strong> Jeda videonya, ajak anak menunjuk layar saat menemukan perbedaan.</li>
  <li><strong>Beri petunjuk, bukan jawaban.</strong> “Coba lihat bagian atas…” lebih melatih daripada langsung menunjuk.</li>
  <li><strong>Rayakan setiap temuan.</strong> Tepuk tangan kecil membuat anak ingin lanjut.</li>
</ol>

<h2>Episode 2</h2>
<p>Sudah selesai episode pertama di atas? Lanjut ke episode berikutnya:</p>
<div style="position:relative;padding-top:56.25%;border-radius:16px;overflow:hidden;border:1px solid var(--color-hairline);margin-top:10px;">
<iframe src="https://www.youtube-nocookie.com/embed/-4mkpvahJnE" title="Cari dan Temukan Perbedaan Bareng Baby Mo — Episode 2" loading="lazy" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen style="position:absolute;inset:0;width:100%;height:100%;border:0;"></iframe>
</div>

<h2>Seri lain: Temukan Emoji yang Berbeda</h2>
<p>Selain cari perbedaan gambar, Baby Mo juga punya seri <strong>“Temukan Emoji”</strong> — temukan satu emoji yang berbeda di antara banyak emoji yang mirip, sebelum waktu habis. Levelnya makin sulit, seru untuk melatih kecepatan dan ketelitian mata.</p>
<div style="position:relative;padding-top:56.25%;border-radius:16px;overflow:hidden;border:1px solid var(--color-hairline);margin-top:10px;">
<iframe src="https://www.youtube-nocookie.com/embed/wFs26KUovCk" title="Temukan Emoji yang Berbeda — Baby Mo" loading="lazy" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen style="position:absolute;inset:0;width:100%;height:100%;border:0;"></iframe>
</div>
<p>Seri cari perbedaan dan temukan emoji ini terus bertambah episode baru.</p>

<p>Suka serunya? <a href="https://www.youtube.com/@babymo.official?sub_confirmation=1" target="_blank" rel="noopener">Subscribe channel Baby Mo</a> untuk episode berikutnya. Mau yang interaktif? Mainkan <a href="/_/permainan/">permainan Baby Mo</a> langsung di web.</p>`,
      en: `<p>Not all screen time has to be loud and fast. Baby Mo’s <strong>“Spot the Difference”</strong> videos invite kids to sit calmly, observe, and find — building focus without feeling like a lesson.</p>

<h2>What it builds</h2>
<ul>
  <li><strong>Focus &amp; attention.</strong> Kids learn to observe details, not just glance.</li>
  <li><strong>Patience.</strong> Finding differences takes time — small practice in not rushing.</li>
  <li><strong>Vocabulary.</strong> While searching, have your child name what they see.</li>
</ul>

<h2>How to play together</h2>
<ol>
  <li><strong>Sit side by side.</strong> Pause the video and let your child point at the screen when they spot a difference.</li>
  <li><strong>Give hints, not answers.</strong> “Look near the top…” trains more than pointing it out.</li>
  <li><strong>Celebrate each find.</strong> A little clap makes them want to continue.</li>
</ol>

<h2>Episode 2</h2>
<p>Finished the first episode above? Continue to the next one:</p>
<div style="position:relative;padding-top:56.25%;border-radius:16px;overflow:hidden;border:1px solid var(--color-hairline);margin-top:10px;">
<iframe src="https://www.youtube-nocookie.com/embed/-4mkpvahJnE" title="Spot the Difference with Baby Mo — Episode 2" loading="lazy" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen style="position:absolute;inset:0;width:100%;height:100%;border:0;"></iframe>
</div>

<h2>Another series: Find the Different Emoji</h2>
<p>Besides spot-the-difference, Baby Mo also has a <strong>“Find the Emoji”</strong> series — find the one emoji that’s different among many look-alikes before time runs out. Levels get harder — great for training speed and visual attention.</p>
<div style="position:relative;padding-top:56.25%;border-radius:16px;overflow:hidden;border:1px solid var(--color-hairline);margin-top:10px;">
<iframe src="https://www.youtube-nocookie.com/embed/wFs26KUovCk" title="Find the Different Emoji — Baby Mo" loading="lazy" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen style="position:absolute;inset:0;width:100%;height:100%;border:0;"></iframe>
</div>
<p>New episodes are added to both series regularly.</p>

<p>Enjoyed it? <a href="https://www.youtube.com/@babymo.official?sub_confirmation=1" target="_blank" rel="noopener">Subscribe to Baby Mo</a> for the next episodes. Want interactive? Play <a href="/_/permainan/">Baby Mo games</a> right in your browser.</p>`,
    },
    tags: ["game", "cari-perbedaan", "temukan-emoji", "fokus", "video", "aktivitas"],
    published: "2026-06-22",
    updated: "2026-06-22",
    readingTimeMin: 3,
    author: "tim-baby-mo",
    youtube: "BhLRQP_Nfdk",
  },
  {
    slug: "lagu-bismillah-dulu",
    title: {
      id: "Lirik Lagu “Bismillah Dulu” — Biasakan Anak Mengawali dengan Bismillah",
      en: "“Bismillah Dulu” Song Lyrics — Helping Kids Begin Everything with Bismillah",
    },
    excerpt: {
      id: "Lagu ceria untuk menanamkan satu kebiasaan kecil yang besar maknanya: mengucap bismillah sebelum makan, minum, bermain, belajar, dan tidur. Lengkap dengan lirik dan cara memakainya di rumah.",
      en: "A cheerful song that plants one small, meaningful habit: saying bismillah before eating, drinking, playing, learning, and sleeping. With full lyrics and how to use it at home.",
    },
    body: {
      id: `<p>Anak-anak belajar paling cepat lewat hal yang menyenangkan — dan lagu adalah salah satu cara terbaik menanamkan kebiasaan baik. Lagu <strong>“Bismillah Dulu”</strong> mengajak anak mengucap <em>bismillah</em> sebelum memulai apa pun: makan, minum, bermain, belajar, sampai tidur.</p>

<h2>Kenapa “Bismillah dulu”?</h2>
<p>Mengucap <em>bismillah</em> (“dengan nama Allah”) sebelum berbuat sesuatu mengajarkan anak bahwa setiap kegiatan kecil pun dimulai dengan mengingat Allah. Rasulullah ﷺ menganjurkan membaca bismillah sebelum makan, dan adab ini bisa anak bawa ke seluruh harinya.</p>
<p>Buat anak, manfaatnya sederhana tapi besar: satu jeda kecil, satu tarikan napas, sebelum bertindak. Kebiasaan ini menumbuhkan kesadaran dan ketenangan sejak dini.</p>

<div class="bmlg-stage" aria-hidden="true">
  <div class="bmlg-ar">بِسْمِ اللّٰه</div>
  <div class="bmlg-ribbon">Bismillah dulu!</div>
  <div class="bmlg-row">
    <span class="bmlg-act" style="--i:0"><span class="bmlg-ico">\u{1F37D}\u{FE0F}</span><b>makan</b></span>
    <span class="bmlg-act" style="--i:1"><span class="bmlg-ico">\u{1F95B}</span><b>minum</b></span>
    <span class="bmlg-act" style="--i:2"><span class="bmlg-ico">\u{1F9E9}</span><b>main</b></span>
    <span class="bmlg-act" style="--i:3"><span class="bmlg-ico">\u{1F4D6}</span><b>belajar</b></span>
    <span class="bmlg-act" style="--i:4"><span class="bmlg-ico">\u{1F634}</span><b>tidur</b></span>
  </div>
</div>
<style>
.bmlg-stage{margin-top:1.4em;padding:22px 16px;border-radius:22px;background:var(--color-paper-2);border:1px solid var(--color-hairline);text-align:center;}
.bmlg-ar{font-family:'Amiri Quran','Amiri',serif;font-size:30px;color:var(--color-sage-deep);line-height:1.4;}
.bmlg-ribbon{display:inline-block;margin-top:6px;font-weight:800;font-size:14px;color:#fff;background:linear-gradient(135deg,#3FD08C,#1FA971);padding:7px 18px;border-radius:999px;box-shadow:0 6px 16px -6px rgba(31,169,113,.5);animation:bmlg-pop 2.6s ease-in-out infinite;}
.bmlg-row{display:flex;justify-content:center;gap:6px;flex-wrap:wrap;margin-top:18px;}
.bmlg-act{display:flex;flex-direction:column;align-items:center;gap:4px;width:60px;opacity:.4;transform:scale(.9);animation:bmlg-glow 5s ease-in-out infinite;animation-delay:calc(var(--i)*1s);}
.bmlg-ico{font-size:30px;line-height:1;}
.bmlg-act b{font-size:10.5px;font-weight:800;text-transform:uppercase;letter-spacing:.4px;color:var(--color-whisper);}
@keyframes bmlg-pop{0%,100%{transform:translateY(0) scale(1)}50%{transform:translateY(-3px) scale(1.05)}}
@keyframes bmlg-glow{0%{opacity:1;transform:scale(1.16)}15%{opacity:1;transform:scale(1.12)}26%,100%{opacity:.4;transform:scale(.92)}}
@media(prefers-reduced-motion:reduce){.bmlg-ribbon,.bmlg-act{animation:none!important}.bmlg-act{opacity:1;transform:none}}
</style>

<h2>Lirik “Bismillah Dulu”</h2>
<p class="bmlg-credit"><em>Ciptaan: Salman, Yaniko, Felly</em></p>
<div class="bmlg-lyrics">
<p>Bismillah dulu, Bismillah dulu<br>Mau makan, Bismillah dulu<br>Mau minum, Bismillah dulu<br>Bismillah (Prok 2x), Bismillah</p>
<p class="bmlg-dot">· · ·</p>
<p>Mau main, Bismillah dulu<br>Mau belajar, Bismillah dulu<br>Mau sekolah, Bismillah dulu<br>Bismillah (Prok 2x), Bismillah</p>
<p class="bmlg-dot">· · ·</p>
<p>Mau doa, Bismillah dulu<br>Mau tidur, Bismillah dulu<br>Semuanya, Baca Bismillah<br>Semuanya, apa? Bismillah</p>
<p class="bmlg-dot">· · ·</p>
<p>Yuk kita baca apa? Bismillah<br>Yuk kita baca apa? Bismillah<br>Yuk kita baca apa? Bismillah</p>
</div>
<style>
.bmlg-credit{margin-top:.2em;font-size:13px;color:var(--color-whisper);}
.bmlg-lyrics{margin-top:1em;padding:20px 18px;border-radius:18px;background:var(--color-brave-soft);border:1px solid var(--color-hairline);text-align:center;font-weight:600;color:var(--color-ink);line-height:1.9;}
.bmlg-lyrics p{margin:0;}
.bmlg-dot{margin:10px 0!important;color:var(--color-sage);letter-spacing:6px;}
</style>

<h2>Cara memakai lagu ini di rumah</h2>
<ol>
  <li><strong>Nyanyikan saat momennya tiba.</strong> Sebelum anak makan, nyanyikan baris “Mau makan, Bismillah dulu” — lalu ucapkan bismillah bersama. Lagu jadi penanda, bukan sekadar hiburan.</li>
  <li><strong>Pakai bagian “Prok 2x” untuk bertepuk.</strong> Tepuk tangan dua kali membuat anak ikut aktif dan menandai ritme — cocok untuk balita yang belum lancar bicara.</li>
  <li><strong>Tanya-jawab di akhir.</strong> Bagian “Yuk kita baca apa? Bismillah” bisa jadi permainan: orang tua bertanya, anak menjawab. Ulangi dengan ceria.</li>
  <li><strong>Konsisten, bukan sempurna.</strong> Cukup satu-dua kegiatan dulu (misalnya makan dan tidur). Setelah terbiasa, tambah yang lain.</li>
</ol>

<p>Mau lanjut? Lihat <a href="/_/doa/">kumpulan doa harian anak</a>, atau ajak anak bermain sambil belajar di <a href="/_/permainan/">permainan Baby Mo</a>.</p>`,
      en: `<p>Children learn fastest through joy — and songs are one of the best ways to plant good habits. The song <strong>“Bismillah Dulu”</strong> (“Bismillah First”) invites kids to say <em>bismillah</em> before they start anything: eating, drinking, playing, learning, and sleeping.</p>

<h2>Why “Bismillah first”?</h2>
<p>Saying <em>bismillah</em> (“in the name of Allah”) before doing something teaches a child that even small activities begin by remembering Allah. The Prophet ﷺ encouraged saying bismillah before eating, and a child can carry this manner through the whole day.</p>
<p>For a child the benefit is simple but big: one small pause, one breath, before acting — growing awareness and calm from an early age.</p>

<div class="bmlg-stage" aria-hidden="true">
  <div class="bmlg-ar">بِسْمِ اللّٰه</div>
  <div class="bmlg-ribbon">Bismillah first!</div>
  <div class="bmlg-row">
    <span class="bmlg-act" style="--i:0"><span class="bmlg-ico">\u{1F37D}\u{FE0F}</span><b>eat</b></span>
    <span class="bmlg-act" style="--i:1"><span class="bmlg-ico">\u{1F95B}</span><b>drink</b></span>
    <span class="bmlg-act" style="--i:2"><span class="bmlg-ico">\u{1F9E9}</span><b>play</b></span>
    <span class="bmlg-act" style="--i:3"><span class="bmlg-ico">\u{1F4D6}</span><b>learn</b></span>
    <span class="bmlg-act" style="--i:4"><span class="bmlg-ico">\u{1F634}</span><b>sleep</b></span>
  </div>
</div>
<style>
.bmlg-stage{margin-top:1.4em;padding:22px 16px;border-radius:22px;background:var(--color-paper-2);border:1px solid var(--color-hairline);text-align:center;}
.bmlg-ar{font-family:'Amiri Quran','Amiri',serif;font-size:30px;color:var(--color-sage-deep);line-height:1.4;}
.bmlg-ribbon{display:inline-block;margin-top:6px;font-weight:800;font-size:14px;color:#fff;background:linear-gradient(135deg,#3FD08C,#1FA971);padding:7px 18px;border-radius:999px;box-shadow:0 6px 16px -6px rgba(31,169,113,.5);animation:bmlg-pop 2.6s ease-in-out infinite;}
.bmlg-row{display:flex;justify-content:center;gap:6px;flex-wrap:wrap;margin-top:18px;}
.bmlg-act{display:flex;flex-direction:column;align-items:center;gap:4px;width:60px;opacity:.4;transform:scale(.9);animation:bmlg-glow 5s ease-in-out infinite;animation-delay:calc(var(--i)*1s);}
.bmlg-ico{font-size:30px;line-height:1;}
.bmlg-act b{font-size:10.5px;font-weight:800;text-transform:uppercase;letter-spacing:.4px;color:var(--color-whisper);}
@keyframes bmlg-pop{0%,100%{transform:translateY(0) scale(1)}50%{transform:translateY(-3px) scale(1.05)}}
@keyframes bmlg-glow{0%{opacity:1;transform:scale(1.16)}15%{opacity:1;transform:scale(1.12)}26%,100%{opacity:.4;transform:scale(.92)}}
@media(prefers-reduced-motion:reduce){.bmlg-ribbon,.bmlg-act{animation:none!important}.bmlg-act{opacity:1;transform:none}}
</style>

<h2>Lyrics (original Indonesian)</h2>
<p class="bmlg-credit"><em>Written by: Salman, Yaniko, Felly</em></p>
<div class="bmlg-lyrics">
<p>Bismillah dulu, Bismillah dulu<br>Mau makan, Bismillah dulu<br>Mau minum, Bismillah dulu<br>Bismillah (Clap 2x), Bismillah</p>
<p class="bmlg-dot">· · ·</p>
<p>Mau main, Bismillah dulu<br>Mau belajar, Bismillah dulu<br>Mau sekolah, Bismillah dulu<br>Bismillah (Clap 2x), Bismillah</p>
<p class="bmlg-dot">· · ·</p>
<p>Mau doa, Bismillah dulu<br>Mau tidur, Bismillah dulu<br>Semuanya, Baca Bismillah<br>Semuanya, apa? Bismillah</p>
<p class="bmlg-dot">· · ·</p>
<p>Yuk kita baca apa? Bismillah<br>Yuk kita baca apa? Bismillah<br>Yuk kita baca apa? Bismillah</p>
</div>
<style>
.bmlg-credit{margin-top:.2em;font-size:13px;color:var(--color-whisper);}
.bmlg-lyrics{margin-top:1em;padding:20px 18px;border-radius:18px;background:var(--color-brave-soft);border:1px solid var(--color-hairline);text-align:center;font-weight:600;color:var(--color-ink);line-height:1.9;}
.bmlg-lyrics p{margin:0;}
.bmlg-dot{margin:10px 0!important;color:var(--color-sage);letter-spacing:6px;}
</style>

<p><em>Meaning:</em> Before eating, drinking, playing, learning, going to school, making dua, and sleeping — say bismillah first. Before everything, what do we read? Bismillah.</p>

<h2>How to use this song at home</h2>
<ol>
  <li><strong>Sing it at the moment.</strong> Right before your child eats, sing “Mau makan, Bismillah dulu” — then say bismillah together. The song becomes a cue, not just entertainment.</li>
  <li><strong>Use the “Clap 2x” part.</strong> Two claps get your child physically involved and mark the rhythm — great for toddlers still building speech.</li>
  <li><strong>Turn the ending into call-and-response.</strong> “What do we read? Bismillah” — you ask, the child answers. Repeat with a smile.</li>
  <li><strong>Consistent, not perfect.</strong> Start with one or two activities (say, eating and sleeping). Add more once it sticks.</li>
</ol>

<p>Keep going: browse the <a href="/_/doa/">daily duas for children</a>, or play and learn with <a href="/_/permainan/">Baby Mo games</a>.</p>`,
    },
    tags: ["bismillah", "lagu", "adab", "balita", "doa"],
    published: "2026-06-22",
    updated: "2026-06-22",
    readingTimeMin: 3,
    author: "salman",
    youtube: "cq6ODPSWGdc",
  },
  {
    slug: "kebiasaan-kecil-yang-tumbuh-besar",
    title: {
      id: "Kebiasaan Kecil yang Tumbuh Besar: Cara Menanam Akhlak pada Anak",
      en: "Small Habits That Grow Big: Planting Good Character in Children",
    },
    excerpt: {
      id: "Karakter anak tidak dibangun dalam satu hari besar, tapi dalam ratusan hari biasa. Sebuah ilustrasi bergerak tentang bagaimana satu kebiasaan kecil tumbuh menjadi akhlak — dan cara menanamnya.",
      en: "A child’s character isn’t built in one big day, but across hundreds of ordinary ones. An animated look at how one small habit grows into character — and how to plant it.",
    },
    body: {
      id: `<p>Karakter anak tidak dibangun dalam satu hari besar, melainkan dalam ratusan hari biasa. Satu kebiasaan kecil yang diulang — mengucap bismillah, merapikan mainan, memeluk orang tua sebelum tidur — perlahan tumbuh menjadi akhlak.</p>

<div class="htree-stage" aria-hidden="true">
  <div class="htree-sway">
  <svg viewBox="0 0 260 200" class="htree-svg" role="img">
    <ellipse cx="130" cy="184" rx="92" ry="12" fill="#000" opacity=".06"/>
    <ellipse cx="130" cy="182" rx="78" ry="10" fill="#7ace7e"/>
    <g class="htree-tree">
      <path d="M130 182 C128 150 132 140 130 108" stroke="#a8703f" stroke-width="11" fill="none" stroke-linecap="round"/>
      <path d="M130 150 C120 142 110 138 100 132" stroke="#a8703f" stroke-width="7" fill="none" stroke-linecap="round"/>
      <path d="M130 138 C142 132 152 128 162 124" stroke="#a8703f" stroke-width="7" fill="none" stroke-linecap="round"/>
    </g>
    <g>
      <circle class="htree-leaf" style="--d:0s"  cx="130" cy="96"  r="30" fill="#5aa066"/>
      <circle class="htree-leaf" style="--d:.12s" cx="100" cy="112" r="22" fill="#6bbf72"/>
      <circle class="htree-leaf" style="--d:.24s" cx="162" cy="108" r="22" fill="#6bbf72"/>
      <circle class="htree-leaf" style="--d:.36s" cx="130" cy="78"  r="24" fill="#7ace7e"/>
      <circle class="htree-leaf" style="--d:.48s" cx="148" cy="96"  r="18" fill="#8fd98a"/>
      <circle class="htree-leaf" style="--d:.6s"  cx="112" cy="92"  r="16" fill="#8fd98a"/>
    </g>
    <g fill="#ff8fb3" class="htree-fruit">
      <circle style="--d:1.0s" cx="108" cy="104" r="5"/>
      <circle style="--d:1.15s" cx="152" cy="98" r="5"/>
      <circle style="--d:1.3s" cx="132" cy="86" r="5"/>
    </g>
  </svg>
  </div>
  <p class="htree-cap">Satu kebiasaan kecil, diulang setiap hari… tumbuh jadi akhlak.</p>
</div>
<style>
.htree-stage{margin-top:1.4em;padding:18px 16px 14px;border-radius:22px;background:var(--color-paper-2);border:1px solid var(--color-hairline);text-align:center;}
.htree-svg{width:100%;max-width:300px;height:auto;}
.htree-sway{display:inline-block;transform-box:fill-box;transform-origin:50% 100%;animation:htree-sway 5s ease-in-out 1.6s infinite;}
.htree-tree{transform-box:fill-box;transform-origin:50% 100%;transform:scaleY(0);animation:htree-grow 1.1s cubic-bezier(.2,.8,.3,1) .1s forwards;}
.htree-leaf{transform-box:fill-box;transform-origin:center;transform:scale(0);animation:htree-pop .5s cubic-bezier(.18,.9,.32,1.4) forwards;animation-delay:calc(1s + var(--d));}
.htree-fruit circle{transform-box:fill-box;transform-origin:center;transform:scale(0);animation:htree-pop .5s ease-out forwards;animation-delay:var(--d);}
.htree-cap{margin-top:6px;font-size:13.5px;font-weight:700;color:var(--color-whisper);}
@keyframes htree-grow{to{transform:scaleY(1)}}
@keyframes htree-pop{0%{transform:scale(0)}70%{transform:scale(1.15)}100%{transform:scale(1)}}
@keyframes htree-sway{0%,100%{transform:rotate(-1.5deg)}50%{transform:rotate(1.5deg)}}
@media(prefers-reduced-motion:reduce){.htree-sway,.htree-tree,.htree-leaf,.htree-fruit circle{animation:none!important;transform:none!important}}
</style>

<h2>Sedikit tapi rutin</h2>
<p>Rasulullah ﷺ mengajarkan bahwa amal yang paling dicintai Allah adalah yang paling konsisten, walaupun sedikit — <strong>HR. Bukhari dan Muslim</strong>. Prinsip ini sangat cocok untuk anak: lebih baik satu kebiasaan kecil setiap hari daripada banyak aturan yang cepat ditinggalkan.</p>

<h2>Cara menanam satu kebiasaan</h2>
<ol>
  <li><strong>Pilih SATU dulu.</strong> Jangan semua sekaligus. Misalnya: mengucap bismillah sebelum makan. Itu saja, sampai jadi otomatis.</li>
  <li><strong>Tempelkan ke kegiatan yang sudah ada.</strong> Kebiasaan baru lebih mudah menempel pada rutinitas lama: “setelah cuci tangan, baca bismillah.”</li>
  <li><strong>Rayakan yang kecil.</strong> Senyum, pelukan, “MasyaAllah!” — anak mengulang apa yang membuatnya merasa dihargai.</li>
  <li><strong>Ulangi, jangan menuntut sempurna.</strong> Akan ada hari yang terlewat. Tidak apa-apa. Pohon tetap tumbuh meski satu-dua hari tak disiram.</li>
</ol>

<h2>Air dan cahaya sang kebiasaan</h2>
<p>Pohon butuh air dan cahaya; kebiasaan anak butuh <em>contoh</em> dan <em>kehangatan</em>. Anak meniru apa yang ia lihat lebih daripada apa yang ia dengar. Saat orang tua sendiri mengawali dengan bismillah, benih itu mendapat cahayanya.</p>

<p>Mulai dari yang paling ringan: <a href="/_/doa/sebelum-tidur/">doa sebelum tidur</a>, atau jelajahi <a href="/_/doa/">doa harian lainnya</a>.</p>`,
      en: `<p>A child’s character isn’t built in one big day, but across hundreds of ordinary ones. One small habit, repeated — saying bismillah, tidying toys, a hug before bed — slowly grows into character.</p>

<div class="htree-stage" aria-hidden="true">
  <div class="htree-sway">
  <svg viewBox="0 0 260 200" class="htree-svg" role="img">
    <ellipse cx="130" cy="184" rx="92" ry="12" fill="#000" opacity=".06"/>
    <ellipse cx="130" cy="182" rx="78" ry="10" fill="#7ace7e"/>
    <g class="htree-tree">
      <path d="M130 182 C128 150 132 140 130 108" stroke="#a8703f" stroke-width="11" fill="none" stroke-linecap="round"/>
      <path d="M130 150 C120 142 110 138 100 132" stroke="#a8703f" stroke-width="7" fill="none" stroke-linecap="round"/>
      <path d="M130 138 C142 132 152 128 162 124" stroke="#a8703f" stroke-width="7" fill="none" stroke-linecap="round"/>
    </g>
    <g>
      <circle class="htree-leaf" style="--d:0s"  cx="130" cy="96"  r="30" fill="#5aa066"/>
      <circle class="htree-leaf" style="--d:.12s" cx="100" cy="112" r="22" fill="#6bbf72"/>
      <circle class="htree-leaf" style="--d:.24s" cx="162" cy="108" r="22" fill="#6bbf72"/>
      <circle class="htree-leaf" style="--d:.36s" cx="130" cy="78"  r="24" fill="#7ace7e"/>
      <circle class="htree-leaf" style="--d:.48s" cx="148" cy="96"  r="18" fill="#8fd98a"/>
      <circle class="htree-leaf" style="--d:.6s"  cx="112" cy="92"  r="16" fill="#8fd98a"/>
    </g>
    <g fill="#ff8fb3" class="htree-fruit">
      <circle style="--d:1.0s" cx="108" cy="104" r="5"/>
      <circle style="--d:1.15s" cx="152" cy="98" r="5"/>
      <circle style="--d:1.3s" cx="132" cy="86" r="5"/>
    </g>
  </svg>
  </div>
  <p class="htree-cap">One small habit, repeated daily… grows into character.</p>
</div>
<style>
.htree-stage{margin-top:1.4em;padding:18px 16px 14px;border-radius:22px;background:var(--color-paper-2);border:1px solid var(--color-hairline);text-align:center;}
.htree-svg{width:100%;max-width:300px;height:auto;}
.htree-sway{display:inline-block;transform-box:fill-box;transform-origin:50% 100%;animation:htree-sway 5s ease-in-out 1.6s infinite;}
.htree-tree{transform-box:fill-box;transform-origin:50% 100%;transform:scaleY(0);animation:htree-grow 1.1s cubic-bezier(.2,.8,.3,1) .1s forwards;}
.htree-leaf{transform-box:fill-box;transform-origin:center;transform:scale(0);animation:htree-pop .5s cubic-bezier(.18,.9,.32,1.4) forwards;animation-delay:calc(1s + var(--d));}
.htree-fruit circle{transform-box:fill-box;transform-origin:center;transform:scale(0);animation:htree-pop .5s ease-out forwards;animation-delay:var(--d);}
.htree-cap{margin-top:6px;font-size:13.5px;font-weight:700;color:var(--color-whisper);}
@keyframes htree-grow{to{transform:scaleY(1)}}
@keyframes htree-pop{0%{transform:scale(0)}70%{transform:scale(1.15)}100%{transform:scale(1)}}
@keyframes htree-sway{0%,100%{transform:rotate(-1.5deg)}50%{transform:rotate(1.5deg)}}
@media(prefers-reduced-motion:reduce){.htree-sway,.htree-tree,.htree-leaf,.htree-fruit circle{animation:none!important;transform:none!important}}
</style>

<h2>Little but consistent</h2>
<p>The Prophet ﷺ taught that the deeds most beloved to Allah are the most consistent ones, even if small — <strong>narrated by Bukhari and Muslim</strong>. This fits children perfectly: one small habit every day beats many rules that are quickly abandoned.</p>

<h2>How to plant one habit</h2>
<ol>
  <li><strong>Pick ONE first.</strong> Not everything at once. For example: bismillah before eating. Just that, until it’s automatic.</li>
  <li><strong>Attach it to an existing routine.</strong> New habits stick best onto old ones: “after we wash hands, we say bismillah.”</li>
  <li><strong>Celebrate small.</strong> A smile, a hug, “MashaAllah!” — children repeat what makes them feel valued.</li>
  <li><strong>Repeat; don’t demand perfection.</strong> Days will be missed. That’s fine. A tree still grows even if it isn’t watered once or twice.</li>
</ol>

<h2>The water and light of a habit</h2>
<p>A tree needs water and light; a child’s habit needs <em>example</em> and <em>warmth</em>. Children copy what they see more than what they hear. When parents begin with bismillah themselves, the seed gets its light.</p>

<p>Start with the lightest one: the <a href="/_/doa/sebelum-tidur/">dua before sleeping</a>, or explore <a href="/_/doa/">other daily duas</a>.</p>`,
    },
    tags: ["kebiasaan", "parenting", "tarbiyah", "akhlak"],
    published: "2026-06-22",
    updated: "2026-06-22",
    readingTimeMin: 4,
    author: "tim-baby-mo",
  },
  // ═════════════════════════════════════════════════════════════════
  //  MUHARRAM 1448 H series — 5 posts for the Islamic New Year window
  //  (~16 June 2026 = 1 Muharram, ~25 June = 10 Muharram / Asyura)
  //  Each carries a full multiplication kit for IG / TikTok / Pinterest /
  //  WhatsApp / printable PDF reuse.
  // ═════════════════════════════════════════════════════════════════

  {
    slug: "doa-awal-tahun-hijriyah-untuk-anak",
    title: {
      id: "Doa Awal Tahun Hijriyah untuk Anak: Apa yang Diajarkan Sunnah",
      en: "New Hijri Year Duas for Children: What the Sunnah Teaches",
    },
    excerpt: {
      id: "Tahun baru Hijriyah datang dengan tenang, bukan dengan kembang api. Doa apa yang sebenarnya diajarkan Rasulullah ﷺ untuk menyambutnya, dan bagaimana mengajarkannya pada anak.",
      en: "The Hijri new year arrives quietly, not with fireworks. The dua the Prophet ﷺ actually taught for it, and how to teach your child.",
    },
    body: {
      id: `<p>Sebentar lagi, 1 Muharram 1448 H. Bagi keluarga muslim, ini adalah pintu masuk ke tahun baru — tapi sering lewat tanpa ditandai karena tidak ada pesta atau kembang api. Padahal momen ini punya nilai tarbiyah yang dalam untuk anak: mereka belajar bahwa waktu dihitung dengan cara yang berbeda — dengan bulan, dengan hijrah, dengan ibadah.</p>

<h2>Doa yang shahih: melihat bulan sabit baru</h2>

<p>Yang sering disangka "doa awal tahun" adalah doa yang sanadnya diperdebatkan. Doa yang <strong>shahih dan jelas sanadnya</strong> adalah doa melihat bulan sabit baru — yang dibaca ketika bulan sabit Muharram (atau bulan apapun) baru terlihat:</p>

<blockquote dir="rtl" lang="ar" style="font-family:'Noto Naskh Arabic',serif;font-size:1.5em;">اللَّهُمَّ أَهِلَّهُ عَلَيْنَا بِالْأَمْنِ وَالْإِيمَانِ، وَالسَّلَامَةِ وَالْإِسْلَامِ، رَبِّي وَرَبُّكَ اللَّهُ</blockquote>

<p><em>Allahumma ahillahu 'alayna bil-amni wal-iman, was-salamati wal-islam, rabbi wa rabbukallah</em></p>

<p>"Ya Allah, tampakkanlah bulan ini kepada kami dengan keamanan dan keimanan, keselamatan dan Islam. Tuhanku dan Tuhanmu adalah Allah." — <strong>HR. Tirmidzi 3451 (Hasan)</strong></p>

<p>Selengkapnya: <a href="/_/doa/melihat-bulan-baru/">Doa Melihat Bulan Sabit Baru</a>.</p>

<h2>Tentang "doa awal tahun" yang viral</h2>

<p>Ada doa yang sering dibagikan menjelang 1 Muharram: <em>"Allahumma anta al-abadiyyul qadim..."</em>. Para ulama berbeda pendapat tentang keshahihan sanad doa ini. Beberapa menerima sebagai "amal yang baik tanpa keyakinan sunnah", lainnya menolak.</p>

<p>Sikap kami: <strong>ajarkan yang paling shahih dulu</strong> kepada anak. Doa melihat bulan sabit sudah cukup. Doa-doa lain bisa diperkenalkan setelah anak besar dan bisa memahami diskusi sanad.</p>

<h2>Bagaimana mengajarkan pada anak</h2>

<p>Anak kecil tidak butuh penjelasan fiqih panjang. Mereka butuh momen yang terasa istimewa.</p>

<ol>
  <li><strong>Beberapa malam sebelum 1 Muharram</strong> — ajak anak melihat langit setelah Maghrib. Tunjukkan bulan yang makin tipis. "Lihat, sebentar lagi bulan baru. Itu tanda tahun baru dalam kalender muslim."</li>
  <li><strong>Pada malam pertama bulan sabit terlihat</strong> — ajak anak ke teras/jendela. Baca doa bersama. Pegang tangan anak saat membaca.</li>
  <li><strong>Pagi 1 Muharram</strong> — beri sarapan khusus. Tidak harus mewah. Cukup makanan favorit anak + ucapan "Selamat tahun baru Hijriyah, sayang." Anak akan ingat ucapan ini lebih dari penjelasan kalender mana pun.</li>
</ol>

<h2>Bahasa untuk anak 3–5 tahun</h2>

<p>"Adik, bulan ini namanya Muharram. Ini bulan pertama dalam kalender muslim. Kayak kalau orang lain bilang Januari, muslim bilang Muharram. Yuk kita doa biar tahun ini banyak kebaikan."</p>

<h2>Bahasa untuk anak 6–8 tahun</h2>

<p>"Anak Mama, kalender muslim itu dimulai sejak Nabi Muhammad ﷺ pindah dari Makkah ke Madinah. Itu peristiwa penting banget — sampai jadi awal kalender kita. Bulan ini, Muharram, adalah bulan pertama. Yuk kita rayakan dengan doa."</p>

<p>Lebih dalam: <a href="/_/blog/kisah-hijrah-nabi-untuk-anak/">Kisah Hijrah Nabi untuk Anak</a>.</p>

<h2>Apa yang sebenarnya kamu bangun</h2>

<p>Anak yang besar dengan kalender Hijriyah <em>terlihat</em> di rumahnya — di kalkulator harian, dalam ucapan orang tua, dalam doa awal bulan — adalah anak yang waktunya bergerak menurut ritme Islam, bukan ritme komersial.</p>

<p>Itu tidak datang dari satu malam 1 Muharram. Itu datang dari konsistensi mengulang kebiasaan kecil ini, setiap awal bulan, setiap tahun.</p>

<p>Mulai tahun ini.</p>`,

      en: `<p>Soon, 1 Muharram 1448 H. For Muslim families, this is the gateway to a new year — but it often passes unmarked because there are no fireworks. Yet the moment carries deep tarbiyah value: children learn that time is counted differently — by the moon, by hijrah, by worship.</p>

<h2>The authentic dua: sighting the new crescent</h2>

<p>What's often called "the new year dua" has a disputed chain. The dua with the <strong>clearest and most authentic chain</strong> is the one for sighting the new crescent — recited when the Muharram (or any month) crescent first appears:</p>

<blockquote dir="rtl" lang="ar" style="font-family:'Noto Naskh Arabic',serif;font-size:1.5em;">اللَّهُمَّ أَهِلَّهُ عَلَيْنَا بِالْأَمْنِ وَالْإِيمَانِ، وَالسَّلَامَةِ وَالْإِسْلَامِ، رَبِّي وَرَبُّكَ اللَّهُ</blockquote>

<p><em>Allahumma ahillahu 'alayna bil-amni wal-iman, was-salamati wal-islam, rabbi wa rabbukallah</em></p>

<p>"O Allah, let this crescent rise upon us with security, faith, safety, and Islam. My Lord and your Lord is Allah." — <strong>Tirmidhi 3451 (Hasan)</strong></p>

<p>Full text: <a href="/_/doa/melihat-bulan-baru/">Dua at the Sighting of the New Crescent</a>.</p>

<h2>About the "viral new year dua"</h2>

<p>A different dua often circulates before 1 Muharram: <em>"Allahumma anta al-abadiyyul qadim..."</em>. Scholars differ on its chain. Some accept it as a generally good supplication, others reject it as not sunnah.</p>

<p>Our stance: <strong>teach the most authentic first</strong>. The crescent-sighting dua is enough. Others can be introduced later, once the child is mature enough to discuss chain authenticity.</p>

<h2>How to teach a child</h2>

<p>Young children don't need long fiqh explanations. They need a moment that feels special.</p>

<ol>
  <li><strong>A few nights before 1 Muharram</strong> — sky-gaze with your child after Maghrib. Show them the moon thinning. "Look, soon there'll be a new crescent. That's the start of the new year on the Muslim calendar."</li>
  <li><strong>On the night the crescent first appears</strong> — bring your child to the porch/window. Recite the dua together. Hold their hand while you do.</li>
  <li><strong>The morning of 1 Muharram</strong> — give a special breakfast. Doesn't have to be lavish. A favorite food + "Happy Hijri new year, sweetheart" is enough. The child will remember those words more than any calendar explanation.</li>
</ol>

<h2>Language for ages 3–5</h2>

<p>"Honey, this month is called Muharram. It's the first month on the Muslim calendar. Just like other people say January, Muslims say Muharram. Let's make dua for a year full of good."</p>

<h2>Language for ages 6–8</h2>

<p>"Sweetheart, the Muslim calendar starts from when Prophet Muhammad ﷺ moved from Makkah to Madinah. That was such an important event that it became the start of our calendar. This month, Muharram, is the first. Let's celebrate with a dua."</p>

<p>Deeper: <a href="/_/blog/kisah-hijrah-nabi-untuk-anak/">The Story of the Hijrah for Children</a>.</p>

<h2>What you're actually building</h2>

<p>A child raised seeing the Hijri calendar <em>present</em> at home — on the daily counter, in parents' greetings, in the new-month dua — is a child whose time moves to an Islamic rhythm, not a commercial one.</p>

<p>That doesn't come from one 1-Muharram night. It comes from repeating this small habit every new month, every year.</p>

<p>Start this year.</p>`,
    },
    tags: ["muharram", "tahun-baru-hijriyah", "doa", "parenting"],
    published: "2026-05-27",
    updated: "2026-05-27",
    readingTimeMin: 6,
    author: "tim-baby-mo",
    kit: {
      quote: {
        id: "Tahun baru Hijriyah datang dengan tenang, bukan dengan kembang api. Ajarkan anak menandai waktu dengan doa, bukan dengan bunyi.",
        en: "The Hijri new year arrives quietly, not with fireworks. Teach your child to mark time with dua, not with noise.",
      },
      carousel: {
        id: [
          { title: "1 Muharram = tahun baru muslim", body: "Tahun baru Hijriyah dimulai dari hijrah Rasulullah ﷺ dari Makkah ke Madinah." },
          { title: "Doa yang shahih", body: "Allahumma ahillahu 'alayna bil-amni wal-iman… (HR. Tirmidzi 3451, hasan)." },
          { title: "Bukan kembang api", body: "Rayakan dengan langit, bukan dengan keramaian. Ajak anak melihat bulan sabit." },
          { title: "Sarapan istimewa", body: "Tidak harus mewah. Makanan favorit + ucapan 'Selamat tahun baru' = momen yang anak ingat." },
          { title: "Hindari doa lemah", body: "Doa awal tahun yang viral sanadnya diperdebatkan. Mulai dari yang shahih." },
          { title: "Bahasa untuk anak", body: "'Bulan ini namanya Muharram, kayak Januari kalau di kalender lain.'" },
          { title: "Konsistensi tahunan", body: "Anak yang melihat tahun baru Hijriyah dirayakan setiap tahun tumbuh dengan ritme Islam." },
        ],
        en: [
          { title: "1 Muharram = the Muslim new year", body: "The Hijri new year starts from the Prophet's ﷺ migration from Makkah to Madinah." },
          { title: "The authentic dua", body: "Allahumma ahillahu 'alayna bil-amni wal-iman… (Tirmidhi 3451, hasan)." },
          { title: "Not fireworks", body: "Celebrate with the sky, not with noise. Take your child to see the new crescent." },
          { title: "Special breakfast", body: "Doesn't have to be lavish. A favorite food + 'Happy new year' = a moment they remember." },
          { title: "Skip weak duas", body: "The viral 'new year dua' has a disputed chain. Start with what's authentic." },
          { title: "Words for the child", body: "'This month is Muharram, like January on the other calendar.'" },
          { title: "Yearly consistency", body: "A child who sees the Hijri new year celebrated every year grows in an Islamic rhythm." },
        ],
      },
      shortScript: {
        id: `[0–3 detik] HOOK: "Tahun baru Hijriyah datang lusa. Tau ga doa yang dibaca?"

[3–15 detik] PROBLEM: Banyak yang bagikan doa awal tahun yang viral — tapi sanadnya diperdebatkan. Yang shahih sebenarnya doa melihat bulan sabit.

[15–35 detik] SOLUTION: Doa melihat bulan sabit dari HR. Tirmidzi 3451: "Allahumma ahillahu 'alayna bil-amni wal-iman…" Ajak anak lihat langit setelah Maghrib. Baca bareng. Pegang tangannya.

[35–55 detik] PROOF: Anak yang melihat tahun baru Hijriyah dirayakan SETIAP tahun, tumbuh dengan ritme Islam. Bukan ritme komersial. Bukan dari satu malam — dari konsistensi kebiasaan kecil.

[55–60 detik] CTA: "Save post ini buat 1 Muharram. Bagikan ke teman keluarga muslim yang butuh pengingat."`,
        en: `[0–3 sec] HOOK: "The Hijri new year is days away. Do you know which dua to say?"

[3–15 sec] PROBLEM: Many share a viral 'new year dua' — but its chain is disputed. The authentic one is the new-crescent dua.

[15–35 sec] SOLUTION: From Tirmidhi 3451: "Allahumma ahillahu 'alayna bil-amni wal-iman…" Take your child to look at the sky after Maghrib. Recite together. Hold their hand.

[35–55 sec] PROOF: A child who sees the Hijri new year celebrated EVERY year grows in an Islamic rhythm — not a commercial one. Not from one night, but from small habits repeated.

[55–60 sec] CTA: "Save this for 1 Muharram. Share with a Muslim family who needs the reminder."`,
      },
      pin: {
        id: {
          title: "Doa Awal Tahun Hijriyah untuk Anak — Yang Sunnah dan Yang Tidak",
          description: "Panduan doa shahih menyambut 1 Muharram bersama anak muslim usia 3–8 tahun. Doa melihat bulan sabit, langkah ritual sederhana, dan bahasa yang sesuai usia. Konten tarbiyah islami untuk keluarga muslim Indonesia.",
        },
        en: {
          title: "New Hijri Year Duas for Children — Authentic vs Weak",
          description: "A guide to authentic duas for welcoming 1 Muharram with Muslim children ages 3–8. The new-crescent dua, a simple ritual flow, and age-appropriate language. Islamic parenting content for Muslim families.",
        },
      },
      checklist: {
        id: [
          "Tunjukkan bulan tipis di langit pada 3–5 malam sebelum 1 Muharram",
          "Pada malam pertama bulan sabit terlihat: ajak anak ke jendela",
          "Baca doa melihat bulan sabit bersama, pegang tangan anak",
          "Pagi 1 Muharram: sarapan favorit + ucapan 'Selamat Tahun Baru Hijriyah'",
          "Jelaskan dengan kalimat sesuai usia (3–5 vs 6–8)",
          "Hindari doa yang sanadnya diperdebatkan",
          "Ulangi tahun depan, dan tahun depannya lagi",
        ],
        en: [
          "Show the thinning moon 3–5 nights before 1 Muharram",
          "On the night the crescent first appears: bring your child to the window",
          "Recite the new-crescent dua together, hold their hand",
          "Morning of 1 Muharram: favorite breakfast + 'Happy Hijri New Year'",
          "Explain in age-appropriate language (3–5 vs 6–8)",
          "Avoid duas with disputed chains",
          "Repeat next year, and the year after",
        ],
      },
    },
  },

  {
    slug: "aktivitas-muharram-untuk-anak",
    title: {
      id: "7 Aktivitas Muharram untuk Anak: Membuat Bulan Suci Terasa Istimewa",
      en: "7 Muharram Activities for Children: Making the Sacred Month Feel Special",
    },
    excerpt: {
      id: "Muharram adalah satu dari empat bulan suci dalam Islam. Tujuh aktivitas konkret untuk membuat bulan ini terasa nyata di rumah — bukan hanya tanggal di kalender.",
      en: "Muharram is one of four sacred months in Islam. Seven concrete activities to make it real at home — not just a date on the calendar.",
    },
    body: {
      id: `<p>Allah ﷻ menyebut empat bulan suci secara eksplisit dalam Al-Qur'an: Dzulqa'dah, Dzulhijjah, Muharram, dan Rajab (QS. At-Taubah 9:36). Tiga di antaranya berurutan — termasuk Muharram, yang menutup rangkaian. Tapi kebanyakan rumah muslim modern tidak punya cara untuk membuat anak <em>merasakan</em> bahwa bulan ini berbeda.</p>

<p>Berikut tujuh aktivitas konkret yang bisa kamu lakukan sepanjang Muharram bareng anak. Tidak perlu semua. Pilih dua atau tiga yang paling cocok dengan ritme keluargamu.</p>

<h2>1. Kalender Hijriyah di kulkas</h2>

<p>Cetak kalender Muharram dengan tanggal Hijriyah dan Masehi berdampingan. Tempel di pintu kulkas. Setiap pagi, ajak anak coret tanggal kemarin. Aktivitas 5 detik — efeknya seumur hidup.</p>

<h2>2. Sebut tanggal Hijriyah dalam doa harian</h2>

<p>Saat anak baca doa makan, doa pagi, atau apapun — sebutkan tanggal Hijriyah hari itu. "Sekarang tanggal 3 Muharram." Ini menanam ritme di telinga anak tanpa pelajaran apapun.</p>

<h2>3. Cerita Hijrah Nabi (mingguan)</h2>

<p>Sepanjang Muharram, sisihkan satu sesi cerita per minggu tentang hijrah Rasulullah ﷺ. Minggu pertama: tekanan di Makkah. Minggu kedua: perjalanan ke Madinah. Minggu ketiga: kedatangan di Madinah. Minggu keempat: refleksi.</p>

<p>Lebih dalam: <a href="/_/blog/kisah-hijrah-nabi-untuk-anak/">Cara Menceritakan Kisah Hijrah</a>.</p>

<h2>4. Persiapan puasa Asyura (10 Muharram)</h2>

<p>Puasa Asyura jatuh pada tanggal 10 Muharram. Mulailah berbicara tentangnya seminggu sebelumnya, agar anak siap mental.</p>

<ul>
  <li>Untuk anak 4–6: tonton ayah/ibu yang puasa.</li>
  <li>Untuk anak 6+: puasa setengah hari opsional.</li>
  <li>Sahur bersama, tidak peduli siapa yang berpuasa.</li>
</ul>

<p>Detail: <a href="/_/blog/puasa-asyura-untuk-anak/">Puasa Asyura untuk Anak</a>.</p>

<h2>5. Sedekah pertama tahun</h2>

<p>Awal tahun adalah momen yang baik untuk anak melakukan sedekah pertama. Beri anak uang kecil (Rp 5.000–10.000), ajak ke tukang sayur tetangga atau ke kotak amal masjid. Sedekah yang anak <em>lakukan sendiri</em> berbeda nilainya dari sedekah orang tua.</p>

<h2>6. Buku doa Muharram</h2>

<p>Beli atau bikin buku kecil (10 halaman) berisi doa-doa yang anak akan hafal selama Muharram. Tidak perlu banyak — 3 doa baru selama satu bulan cukup. Anak ikut menggambar di tiap halaman.</p>

<p>Doa yang cocok untuk Muharram: <a href="/_/doa/melihat-bulan-baru/">melihat bulan sabit</a>, <a href="/_/doa/doa-pagi/">doa pagi perlindungan</a>, dan <a href="/_/doa/doa-untuk-orang-tua/">doa untuk orang tua</a>.</p>

<h2>7. Surat untuk diri sendiri di tahun depan</h2>

<p>Untuk anak 7+, di 1 Muharram ajak anak menulis surat ke "aku tahun depan." Apa yang kamu doakan untuk dirimu? Apa yang ingin kamu pelajari? Lipat, simpan di amplop, buka 1 Muharram tahun depan.</p>

<p>Ini bukan resolusi — ini doa yang ditulis. Tahun depan, anak akan lihat sendiri doa-doanya dikabulkan atau perlu dilanjutkan.</p>

<h2>Yang harus dihindari</h2>

<ul>
  <li>Jangan paksa anak puasa Asyura penuh jika belum siap.</li>
  <li>Jangan campur Muharram dengan tahun baru Masehi — keduanya berbeda, dan anak yang dipaksa "merayakan dua-duanya" kebingungan.</li>
  <li>Jangan ciptakan "resolusi tahunan" ala Barat. Islam tidak mengenal ritual itu. Refleksi iya, kontrak diri tidak.</li>
</ul>

<h2>Penutup</h2>

<p>Muharram tidak butuh dekorasi mewah atau pesta. Cukup beberapa kebiasaan kecil yang anak bisa <em>lihat</em> di rumah. Setelah 2–3 tahun, mereka akan tahu sendiri bahwa Muharram berbeda — bukan karena kamu mengatakannya, tapi karena mereka mengalaminya.</p>`,

      en: `<p>Allah ﷻ explicitly names four sacred months in the Qur'an: Dhulqa'dah, Dhulhijjah, Muharram, and Rajab (Qur'an 9:36). Three are consecutive — including Muharram, which closes the sequence. Yet most modern Muslim homes have no way of letting children <em>feel</em> that this month is different.</p>

<p>Here are seven concrete activities for Muharram with your child. You don't need all. Pick two or three that fit your family's rhythm.</p>

<h2>1. Hijri calendar on the fridge</h2>

<p>Print a Muharram calendar with Hijri and Gregorian dates side by side. Stick it on the fridge door. Each morning, have your child cross off yesterday. A 5-second activity — with a lifelong effect.</p>

<h2>2. Mention the Hijri date in daily duas</h2>

<p>When your child says a meal dua, morning dua, or any — say today's Hijri date. "Today is 3 Muharram." It plants a rhythm in their ear without any lesson.</p>

<h2>3. Hijrah story (weekly)</h2>

<p>Through Muharram, set aside one story session a week about the Prophet's ﷺ hijrah. Week 1: pressure in Makkah. Week 2: journey to Madinah. Week 3: arrival. Week 4: reflection.</p>

<p>Deeper: <a href="/_/blog/kisah-hijrah-nabi-untuk-anak/">How to Tell the Hijrah Story</a>.</p>

<h2>4. Asyura prep (10 Muharram)</h2>

<p>The fast of Asyura falls on 10 Muharram. Start talking about it a week before, so your child can prepare mentally.</p>

<ul>
  <li>Ages 4–6: watch parents fast.</li>
  <li>Ages 6+: optional half-day fast.</li>
  <li>Suhoor together, no matter who is fasting.</li>
</ul>

<p>Details: <a href="/_/blog/puasa-asyura-untuk-anak/">Asyura Fast for Children</a>.</p>

<h2>5. First sadaqah of the year</h2>

<p>The start of the year is a good moment for your child's first sadaqah. Give them a small note (≈ a dollar), bring them to the neighborhood shop or a mosque donation box. A sadaqah the child <em>does themselves</em> hits differently from one a parent does.</p>

<h2>6. A Muharram dua book</h2>

<p>Buy or make a small (10-page) book of duas your child will memorize this month. Don't overload — 3 new duas in a month is enough. Let them draw on each page.</p>

<p>Suitable duas: <a href="/_/doa/melihat-bulan-baru/">new crescent</a>, <a href="/_/doa/doa-pagi/">morning protection</a>, <a href="/_/doa/doa-untuk-orang-tua/">for parents</a>.</p>

<h2>7. A letter to next-year-self</h2>

<p>For ages 7+, on 1 Muharram have your child write a letter to "future me." What are you praying for yourself? What do you want to learn? Fold, seal, open on 1 Muharram next year.</p>

<p>This isn't a resolution — it's a dua written down. Next year, the child sees their own duas answered, or continuing.</p>

<h2>What to avoid</h2>

<ul>
  <li>Don't force a full Asyura fast on an unprepared child.</li>
  <li>Don't blend Muharram with Gregorian new year — they're different, and a child forced to "celebrate both" gets confused.</li>
  <li>Don't create Western-style "yearly resolutions." Islam doesn't have that ritual. Reflection yes, self-contracts no.</li>
</ul>

<h2>Closing</h2>

<p>Muharram doesn't need lavish decoration or parties. Just a few small habits a child can <em>see</em> at home. After 2–3 years, they'll know on their own that Muharram is different — not because you told them, but because they lived it.</p>`,
    },
    tags: ["muharram", "tahun-baru-hijriyah", "aktivitas", "tarbiyah"],
    published: "2026-05-26",
    updated: "2026-05-26",
    readingTimeMin: 7,
    author: "tim-baby-mo",
    kit: {
      quote: {
        id: "Anak akan tahu Muharram berbeda — bukan karena kamu mengatakannya, tapi karena mereka mengalaminya.",
        en: "A child will know Muharram is different — not because you told them, but because they lived it.",
      },
      carousel: {
        id: [
          { title: "Muharram = bulan suci", body: "Satu dari empat bulan suci yang Allah sebut dalam QS. At-Taubah 9:36." },
          { title: "1. Kalender di kulkas", body: "Cetak kalender Hijriyah + Masehi. Anak coret tanggal tiap pagi." },
          { title: "2. Sebut tanggal Hijriyah", body: "'Sekarang 3 Muharram.' Tanam ritme tanpa pelajaran." },
          { title: "3. Cerita Hijrah mingguan", body: "4 sesi mingguan: tekanan Makkah, perjalanan, kedatangan, refleksi." },
          { title: "4. Siapkan Asyura", body: "Mulai bicara seminggu sebelum 10 Muharram. Puasa setengah hari opsional." },
          { title: "5. Sedekah pertama", body: "Beri anak uang kecil. Ajak ke kotak amal masjid sendiri." },
          { title: "6. Surat ke diri tahun depan", body: "Untuk anak 7+. Apa yang didoakan? Buka 1 Muharram tahun depan." },
        ],
        en: [
          { title: "Muharram = sacred month", body: "One of four sacred months Allah names in Qur'an 9:36." },
          { title: "1. Calendar on the fridge", body: "Print a Hijri + Gregorian calendar. Child crosses off each morning." },
          { title: "2. Speak the Hijri date", body: "'Today is 3 Muharram.' Plant the rhythm without a lesson." },
          { title: "3. Weekly Hijrah story", body: "4 weekly sessions: Makkah pressure, journey, arrival, reflection." },
          { title: "4. Prep for Asyura", body: "Start talking a week before 10 Muharram. Half-day fast optional." },
          { title: "5. First sadaqah", body: "Give the child a small note. Let them put it in the mosque box." },
          { title: "6. Letter to future-self", body: "Ages 7+. What are they praying for? Open 1 Muharram next year." },
        ],
      },
      shortScript: {
        id: `[0–3 detik] HOOK: "Muharram itu bulan suci, tapi rumah-rumah muslim sering ngga ada bedanya. Ini 5 cara fix-nya."

[3–15 detik] #1: Cetak kalender Hijriyah, tempel di kulkas. Anak coret tanggal tiap pagi.

[15–25 detik] #2: Sebut tanggal Hijriyah dalam doa. "Sekarang 3 Muharram." Ritme masuk tanpa diajari.

[25–35 detik] #3: Cerita Hijrah Nabi, 1 sesi per minggu, 4 minggu.

[35–45 detik] #4: Siapkan Asyura. Anak 6+ boleh puasa setengah hari kalau siap.

[45–55 detik] #5: Sedekah pertama tahun. Beri anak uang kecil. Ajak masuk masjid, taruh di kotak amal.

[55–60 detik] CTA: "Save untuk Muharram. Tag teman keluarga muslim."`,
        en: `[0–3 sec] HOOK: "Muharram is a sacred month, but most Muslim homes feel no different. 5 ways to fix that."

[3–15 sec] #1: Print a Hijri calendar, stick it on the fridge. Child crosses off each morning.

[15–25 sec] #2: Speak the Hijri date in daily duas. "Today is 3 Muharram." Rhythm enters without a lesson.

[25–35 sec] #3: Tell the Hijrah story, 1 session a week, 4 weeks.

[35–45 sec] #4: Prep for Asyura. Ages 6+ can try a half-day fast if ready.

[45–55 sec] #5: First sadaqah of the year. Give the child a small note. Let them put it in the mosque box.

[55–60 sec] CTA: "Save for Muharram. Tag a Muslim family friend."`,
      },
      pin: {
        id: {
          title: "7 Aktivitas Muharram untuk Anak Muslim — Tahun Baru Hijriyah",
          description: "Tujuh aktivitas konkret untuk membuat bulan Muharram terasa istimewa bersama anak: kalender Hijriyah, cerita hijrah, persiapan puasa Asyura, sedekah pertama, dan surat ke diri tahun depan. Untuk keluarga muslim Indonesia.",
        },
        en: {
          title: "7 Muharram Activities for Muslim Children — Hijri New Year Guide",
          description: "Seven concrete activities to make Muharram feel special with your child: Hijri calendar, weekly Hijrah story, Asyura prep, first sadaqah, and a letter to next-year-self. For Muslim families.",
        },
      },
      checklist: {
        id: [
          "Cetak kalender Muharram (Hijriyah + Masehi)",
          "Tempel di kulkas — anak coret setiap pagi",
          "Sebutkan tanggal Hijriyah dalam doa harian",
          "Sesi cerita Hijrah 1× per minggu (4 minggu)",
          "Beli/cetak buku doa Muharram untuk anak",
          "Siapkan sahur Asyura — diskusi 1 minggu sebelumnya",
          "Sedekah pertama tahun — anak yang taruh sendiri",
          "Surat ke diri tahun depan (untuk anak 7+)",
          "Refleksi akhir bulan: apa yang dipelajari?",
        ],
        en: [
          "Print a Muharram calendar (Hijri + Gregorian)",
          "Stick on fridge — child crosses off daily",
          "Speak the Hijri date in daily duas",
          "1 Hijrah story session per week (4 weeks)",
          "Buy/make a Muharram dua book for the child",
          "Prepare Asyura suhoor — discuss 1 week prior",
          "First sadaqah of the year — child places it themselves",
          "Letter to future-self (ages 7+)",
          "End-of-month reflection: what did we learn?",
        ],
      },
    },
  },

  {
    slug: "menjelaskan-tahun-baru-islam-ke-anak",
    title: {
      id: "Cara Menjelaskan Tahun Baru Islam ke Anak: Bahasa untuk Tiap Usia",
      en: "How to Explain the Islamic New Year to Your Child: Age-by-Age Language",
    },
    excerpt: {
      id: "Anak yang melihat kembang api tahun baru Masehi di mall tapi tidak tahu Muharram membentuk identitas dari yang dirayakan di sekitarnya. Cara menjelaskan tahun baru Islam yang masuk akal di setiap usia.",
      en: "A child who sees Gregorian new year fireworks at the mall but doesn't know Muharram forms identity from what's celebrated around them. How to explain the Islamic new year in a way that lands at every age.",
    },
    body: {
      id: `<p>Anak yang tumbuh di Indonesia melihat dua tahun baru: 1 Januari yang riuh, dan 1 Muharram yang sering lewat tanpa suara. Tanpa penjelasan, mereka akan menyimpulkan sendiri bahwa yang pertama lebih penting — karena lebih ramai.</p>

<p>Cara mengoreksi ini bukan dengan melarang tahun baru Masehi. Caranya adalah membuat tahun baru Islam <em>masuk akal</em>, dengan bahasa yang sesuai usia anakmu.</p>

<h2>Inti yang harus disampaikan</h2>

<p>Apapun usia anak, tiga ide ini harus mereka pahami pada akhirnya:</p>

<ol>
  <li><strong>Muslim punya kalender sendiri</strong> — bukan menggantikan kalender Masehi, tapi paralel.</li>
  <li><strong>Tahun ini dihitung sejak hijrahnya Nabi ﷺ</strong> dari Makkah ke Madinah, bukan dari kelahiran beliau.</li>
  <li><strong>Bulan pertama adalah Muharram</strong>, salah satu dari empat bulan suci.</li>
</ol>

<p>Bagaimana cara menyampaikan tiga ide ini berbeda untuk setiap usia.</p>

<h2>Usia 3–5: konkret dan singkat</h2>

<p>Anak di usia ini berpikir konkret. Hindari kata abstrak seperti "kalender" atau "hijrah" tanpa konteks.</p>

<blockquote><em>"Adik, tahu ngga? Ada dua macam tahun baru. Yang satu, 1 Januari — yang biasa dirayakan dengan kembang api di mall. Yang satu lagi, 1 Muharram — tahun barunya muslim. Tahun baru muslim ngga ada kembang api. Tapi kita ada doa. Dan kita ada makan enak. Mau bantu mama bikin sarapan istimewa besok?"</em></blockquote>

<p>Bahasa yang dipakai: dua, kembang api, doa, sarapan istimewa. Konkret semua.</p>

<h2>Usia 6–8: cerita dan sebab-akibat</h2>

<p>Anak di usia ini sudah bisa memahami sebab-akibat sederhana. Tahun baru Islam jadi cerita.</p>

<blockquote><em>"Sayang, tahu ngga kenapa kalender muslim mulai dari Muharram? Karena dulu, Nabi Muhammad ﷺ dan sahabat-sahabatnya harus pindah dari Makkah ke Madinah. Itu perjalanan jauh, susah, penuh risiko. Sampai di Madinah, mereka mulai babak baru. Itu yang dirayakan sebagai awal kalender muslim. Bukan ulang tahun Nabi — tapi awal masa baru bagi umat Islam."</em></blockquote>

<p>Setelah cerita itu, ajukan satu pertanyaan: <em>"Menurut adik, kenapa pindah ke Madinah itu penting?"</em> Biarkan dia menjawab. Jawabannya akan membuat dia mengingat.</p>

<p>Detail lengkap: <a href="/_/blog/kisah-hijrah-nabi-untuk-anak/">Kisah Hijrah Nabi untuk Anak</a>.</p>

<h2>Usia 9+: nuansa dan refleksi</h2>

<p>Anak di usia ini bisa memegang nuansa.</p>

<blockquote><em>"Kak, ada perbedaan mendasar antara tahun baru Masehi dan tahun baru Hijriyah. Masehi dihitung dari perkiraan kelahiran Nabi Isa. Hijriyah dihitung dari peristiwa — bukan dari orang. Kita merayakan momen transisi, bukan ulang tahun. Itu cara berpikir yang berbeda."</em></blockquote>

<p>Bahas juga: kenapa kalender Hijriyah lebih pendek 11 hari dari Masehi (lunar vs solar), kenapa Asyura penting, mengapa Rasulullah ﷺ tidak melarang puasa pada hari-hari ini.</p>

<h2>Pertanyaan yang sering anak tanya</h2>

<h3>"Kalau tahun baru muslim ngga seru, kenapa kita rayakan?"</h3>

<p>"Karena seru bukan satu-satunya alasan merayakan. Ada hal yang dirayakan dengan kembang api, ada yang dirayakan dengan doa. Kita merayakan dengan doa karena ini hal yang besar — kita dapat tahun baru penuh, kesempatan baru untuk jadi lebih baik."</p>

<h3>"Boleh ikut tahun baru Masehi?"</h3>

<p>Jawaban realistis: tergantung. Kembang api di balkon dengan keluarga = silakan. Pesta dengan alkohol dan musik tidak halal = tidak. Tahun baru Masehi itu peristiwa kalender, bukan ritual agama lain. Tapi <em>cara orang merayakannya</em> bisa halal atau haram.</p>

<h3>"Teman aku ngga tahu apa itu Muharram. Berarti aneh ya?"</h3>

<p>"Kakak, bukan aneh — beda. Kita beruntung kenal dua kalender. Banyak teman cuma kenal satu. Mungkin kakak bisa ceritakan ke mereka."</p>

<h2>Yang harus dihindari</h2>

<ul>
  <li><strong>Jangan bilang tahun baru Masehi haram.</strong> Itu hanya peristiwa kalender. Yang bisa haram adalah cara merayakannya.</li>
  <li><strong>Jangan paksa anak menolak ucapan teman.</strong> "Happy New Year" tetap bisa dibalas "thanks, kamu juga."</li>
  <li><strong>Jangan ciptakan rivalitas antara dua tahun baru.</strong> Anak akan kebingungan dan akhirnya tidak menghargai keduanya.</li>
</ul>

<h2>Penutup</h2>

<p>Yang anakmu butuhkan bukan ceramah tentang mana tahun baru yang lebih baik. Yang dia butuhkan adalah <em>melihat sendiri</em> bahwa di rumahnya, kedua tahun baru dirayakan secara berbeda — dan yang Islami dirayakan dengan cinta, bukan dengan kewajiban.</p>

<p>Ulangi setiap tahun. Lihat sendiri hasilnya saat dia berusia 18.</p>`,

      en: `<p>A child growing up in Indonesia sees two new years: a noisy January 1 and a 1 Muharram that often passes in silence. With no explanation, they'll conclude on their own that the first matters more — because it's louder.</p>

<p>The fix isn't forbidding the Gregorian new year. The fix is making the Islamic new year <em>make sense</em>, in language that fits your child's age.</p>

<h2>The core to communicate</h2>

<p>Whatever the age, three ideas must eventually land:</p>

<ol>
  <li><strong>Muslims have their own calendar</strong> — not replacing the Gregorian, but parallel.</li>
  <li><strong>This year is counted from the Prophet's hijrah</strong> from Makkah to Madinah, not from his birth.</li>
  <li><strong>The first month is Muharram</strong>, one of four sacred months.</li>
</ol>

<p>How to deliver these three differs by age.</p>

<h2>Ages 3–5: concrete and short</h2>

<p>At this age, thinking is concrete. Avoid abstract words like "calendar" or "hijrah" without context.</p>

<blockquote><em>"Honey, did you know? There are two kinds of new year. One is January 1 — the one with fireworks at the mall. The other is 1 Muharram — the Muslim new year. The Muslim new year doesn't have fireworks. But we have duas. And we have a special breakfast. Want to help mom make a special breakfast tomorrow?"</em></blockquote>

<p>Vocabulary: two, fireworks, dua, special breakfast. All concrete.</p>

<h2>Ages 6–8: story and cause-effect</h2>

<p>Now they can hold simple cause-effect. The Islamic new year becomes a story.</p>

<blockquote><em>"Sweetheart, do you know why the Muslim calendar starts in Muharram? Because long ago, Prophet Muhammad ﷺ and his companions had to move from Makkah to Madinah. It was a long, hard, risky journey. When they arrived in Madinah, a new chapter began. That's what's marked as the start of the Muslim calendar. Not the Prophet's birthday — the start of a new era for Muslims."</em></blockquote>

<p>After the story, ask one question: <em>"Why do you think moving to Madinah mattered?"</em> Let them answer. Their answer is what makes them remember.</p>

<p>Full story: <a href="/_/blog/kisah-hijrah-nabi-untuk-anak/">The Hijrah Story for Children</a>.</p>

<h2>Ages 9+: nuance and reflection</h2>

<p>They can hold nuance now.</p>

<blockquote><em>"There's a deeper difference between the Gregorian and Hijri new year. The Gregorian is counted from the estimated birth of Prophet Jesus. The Hijri is counted from an event — not from a person. We're marking a moment of transition, not a birthday. That's a different way of thinking."</em></blockquote>

<p>Discuss too: why the Hijri calendar is 11 days shorter than the Gregorian (lunar vs solar), why Asyura matters, why the Prophet ﷺ didn't forbid fasting on these days.</p>

<h2>Questions children often ask</h2>

<h3>"If the Muslim new year isn't fun, why celebrate it?"</h3>

<p>"Because fun isn't the only reason to celebrate. Some things are celebrated with fireworks, some with dua. We celebrate this with dua because it's important — we get a whole new year, a new chance to become better."</p>

<h3>"Can I join the Gregorian new year?"</h3>

<p>Realistic answer: it depends. Fireworks on the balcony with family = fine. A party with alcohol and music that isn't halal = no. The Gregorian new year is a calendar event, not another religion's ritual. But <em>how people celebrate it</em> can be halal or haram.</p>

<h3>"My friends don't know what Muharram is. Are we weird?"</h3>

<p>"You're not weird — you're different. We're lucky to know two calendars. Many friends only know one. Maybe you can tell them about ours."</p>

<h2>What to avoid</h2>

<ul>
  <li><strong>Don't say the Gregorian new year is haram.</strong> It's a calendar event. What can be haram is how it's celebrated.</li>
  <li><strong>Don't force your child to reject friends' greetings.</strong> "Happy New Year" can still be answered "thanks, you too."</li>
  <li><strong>Don't create rivalry between the two new years.</strong> The child gets confused and ends up valuing neither.</li>
</ul>

<h2>Closing</h2>

<p>What your child needs isn't a lecture on which new year is better. They need to <em>see</em> that in their home, both new years are marked differently — and the Islamic one is celebrated with love, not with obligation.</p>

<p>Repeat every year. See for yourself when they're 18.</p>`,
    },
    tags: ["muharram", "tahun-baru-hijriyah", "parenting", "identitas"],
    published: "2026-05-25",
    updated: "2026-05-25",
    readingTimeMin: 8,
    author: "tim-baby-mo",
    kit: {
      quote: {
        id: "Anak yang melihat kembang api tahun baru Masehi tapi tidak tahu Muharram, akan membentuk identitas dari yang dirayakan di sekitarnya.",
        en: "A child who sees Gregorian new year fireworks but doesn't know Muharram will form identity from what's celebrated around them.",
      },
      carousel: {
        id: [
          { title: "Dua tahun baru", body: "Anak Indonesia melihat 1 Januari + 1 Muharram. Tanpa penjelasan, yang ramai dianggap lebih penting." },
          { title: "Inti 3 ide", body: "1) Muslim punya kalender. 2) Mulai dari hijrah, bukan kelahiran. 3) Muharram = bulan pertama." },
          { title: "Usia 3–5: konkret", body: "'Ada dua tahun baru. Yang Januari ada kembang api. Yang Muharram ada doa dan sarapan istimewa.'" },
          { title: "Usia 6–8: cerita", body: "Nabi ﷺ pindah dari Makkah ke Madinah. Itu yang dirayakan — momen transisi, bukan ulang tahun." },
          { title: "Usia 9+: nuansa", body: "Masehi dari kelahiran orang. Hijriyah dari peristiwa. Cara berpikir yang berbeda." },
          { title: "Pertanyaan klasik", body: "'Boleh ikut tahun baru Masehi?' Jawaban: tergantung cara merayakannya, bukan tanggalnya." },
          { title: "Tahun baru Masehi ≠ haram", body: "Itu peristiwa kalender. Yang haram bisa cara merayakan, bukan tanggalnya sendiri." },
        ],
        en: [
          { title: "Two new years", body: "An Indonesian Muslim child sees Jan 1 + 1 Muharram. Without explanation, the louder one seems more important." },
          { title: "3 core ideas", body: "1) Muslims have a calendar. 2) Starts from hijrah, not a birth. 3) Muharram = first month." },
          { title: "Ages 3–5: concrete", body: "'There are two new years. One in January has fireworks. The Muharram one has duas and a special breakfast.'" },
          { title: "Ages 6–8: story", body: "The Prophet ﷺ moved from Makkah to Madinah. That's what's marked — a transition, not a birthday." },
          { title: "Ages 9+: nuance", body: "Gregorian from a person's birth. Hijri from an event. Two different ways of thinking." },
          { title: "Classic question", body: "'Can I join Gregorian new year?' Answer: depends on how it's celebrated, not the date." },
          { title: "Gregorian ≠ haram", body: "It's a calendar event. The how of celebration can be haram, not the date itself." },
        ],
      },
      shortScript: {
        id: `[0–3 detik] HOOK: "Anakmu liat kembang api tahun baru Masehi di TV, tapi ngga ada penjelasan apa-apa soal Muharram. Itu masalah."

[3–15 detik] KENAPA: Anak membentuk identitas dari yang dirayakan di sekitarnya. Kalau di rumah Muharram lewat dalam diam, dia akan kesimpulan sendiri yang Masehi lebih penting.

[15–35 detik] SOLUSI: Jelaskan sesuai usia. 3–5 tahun: konkret — "ada dua tahun baru". 6–8: cerita hijrah Nabi. 9+: nuansa — Masehi dari kelahiran, Hijriyah dari peristiwa.

[35–50 detik] PERTANYAAN KLASIK: "Boleh ikut tahun baru Masehi?" Jawabannya: tergantung CARA merayakan. Kembang api di balkon ok. Pesta haram tidak.

[50–60 detik] CTA: "Save buat 1 Muharram. Bagikan ke orang tua muslim yang anak-anaknya juga liat dua tahun baru."`,
        en: `[0–3 sec] HOOK: "Your child sees Gregorian new year fireworks on TV, but hears nothing about Muharram. That's a problem."

[3–15 sec] WHY: Children form identity from what's celebrated around them. If Muharram passes in silence at home, they'll conclude the Gregorian matters more.

[15–35 sec] FIX: Explain by age. 3–5: concrete — "two new years". 6–8: the Hijrah story. 9+: nuance — Gregorian from a birth, Hijri from an event.

[35–50 sec] CLASSIC QUESTION: "Can I join the Gregorian new year?" Answer: depends on HOW it's celebrated. Balcony fireworks fine. Haram parties no.

[50–60 sec] CTA: "Save this for 1 Muharram. Share with Muslim parents whose kids also see two new years."`,
      },
      pin: {
        id: {
          title: "Cara Menjelaskan Tahun Baru Islam ke Anak — Bahasa untuk Tiap Usia",
          description: "Panduan menjelaskan 1 Muharram / tahun baru Hijriyah ke anak muslim di setiap kelompok usia: 3–5, 6–8, 9+. Termasuk jawaban untuk pertanyaan yang sering anak ajukan tentang perbedaan dengan tahun baru Masehi. Tarbiyah islami untuk keluarga muslim Indonesia.",
        },
        en: {
          title: "How to Explain the Islamic New Year to Your Child — Age-by-Age",
          description: "A guide for explaining 1 Muharram / Hijri new year to Muslim children at every age group: 3–5, 6–8, 9+. Includes answers to common questions about the difference from the Gregorian new year. Islamic parenting for Muslim families.",
        },
      },
      checklist: {
        id: [
          "Tonton/lihat tahun baru Masehi bersama anak — tanpa komentar negatif",
          "Sebut Muharram secara natural dalam percakapan minggu ini",
          "Sesuaikan bahasa dengan usia anak (3–5 / 6–8 / 9+)",
          "Siapkan jawaban untuk 'kenapa ngga seru?'",
          "Hindari kata 'haram' untuk tahun baru Masehi sendiri",
          "Ulangi cerita hijrah di awal Muharram",
          "Rayakan 1 Muharram dengan doa + sarapan khusus",
          "Refleksi keluarga di akhir Muharram",
        ],
        en: [
          "Watch the Gregorian new year together — without negative commentary",
          "Mention Muharram naturally in conversation this week",
          "Match your language to your child's age (3–5 / 6–8 / 9+)",
          "Prepare answers for 'why isn't ours fun?'",
          "Avoid calling the Gregorian new year itself 'haram'",
          "Repeat the hijrah story at the start of Muharram",
          "Celebrate 1 Muharram with duas + special breakfast",
          "Family reflection at the end of Muharram",
        ],
      },
    },
  },

  {
    slug: "puasa-asyura-untuk-anak",
    title: {
      id: "Puasa Asyura untuk Anak: Sejarah, Hukum, dan Cara Mengajarkannya",
      en: "The Asyura Fast for Children: History, Ruling, and How to Teach It",
    },
    excerpt: {
      id: "Tanggal 10 Muharram adalah hari Asyura — puasa sunnah yang paling dianjurkan setelah Ramadan. Sejarahnya menarik, hukumnya jelas, dan untuk anak ada cara halus mengenalkannya.",
      en: "10 Muharram is the day of Asyura — the most recommended optional fast after Ramadan. Its history is rich, its ruling clear, and there's a gentle way to introduce it to a child.",
    },
    body: {
      id: `<p>Tahun ini, hari Asyura jatuh pada sekitar tanggal 25 Juni 2026 (tepatnya 10 Muharram 1448 H). Ini adalah salah satu puasa sunnah paling istimewa dalam Islam — dianjurkan kuat, mengampuni dosa setahun yang lalu, dan punya sejarah yang anak-anak akan suka mendengarnya.</p>

<h2>Sejarah Asyura: Nabi Musa dan Bani Israil</h2>

<p>Saat Rasulullah ﷺ hijrah ke Madinah, beliau melihat orang-orang Yahudi berpuasa pada tanggal 10 Muharram. Beliau bertanya kenapa. Mereka menjawab: "Ini hari Allah menyelamatkan Nabi Musa dan Bani Israil dari Firaun. Musa berpuasa sebagai syukur."</p>

<p>Rasulullah ﷺ berkata: <em>"Aku lebih berhak atas Musa daripada kalian"</em> — dan beliau pun berpuasa, dan memerintahkan kaum muslimin untuk berpuasa juga. (HR. Bukhari 2004, Muslim 1130)</p>

<p>Ini cerita yang anak-anak akan tertarik. Tentang Musa, Firaun, laut yang terbelah, perjuangan, kemudian syukur kepada Allah.</p>

<h2>Hukum puasa Asyura</h2>

<ul>
  <li><strong>Sunnah muakkadah</strong> (sangat dianjurkan) untuk semua muslim dewasa yang mampu.</li>
  <li><strong>Mengampuni dosa setahun yang lalu</strong> (HR. Muslim 1162) — dosa-dosa kecil, dengan syarat menjauhi dosa besar.</li>
  <li><strong>Anjuran tambahan:</strong> puasa juga pada tanggal 9 Muharram (Tasu'a) — agar berbeda dengan praktik Yahudi yang hanya 10.</li>
  <li><strong>Atau:</strong> puasa 10 dan 11 Muharram. Atau ketiganya: 9, 10, 11.</li>
</ul>

<h2>Hukum puasa untuk anak</h2>

<p>Anak <em>belum baligh</em> tidak diwajibkan puasa apapun — termasuk Ramadan, apalagi Asyura. Tapi <strong>dilatih</strong> sejak usia 5–7 tahun adalah sunnah. Sahabat-sahabat di Madinah membiasakan anak-anak mereka berpuasa Asyura dengan memberikan mainan dari bulu domba — saat anak lapar, mereka bermain.</p>

<p>Pelajaran: latih, jangan paksa. Beri pengalaman, bukan beban.</p>

<h2>Cara mengajarkan, per usia</h2>

<h3>Usia 3–5: cukup mengamati</h3>

<p>Sahur bersama, walau anak tidak puasa. Bicarakan: "Hari ini Mama puasa. Namanya puasa Asyura, hari ke-10 bulan Muharram." Saat ibu/ayah berbuka, anak ikut menyaksikan. Itu sudah cukup.</p>

<h3>Usia 6–8: setengah hari, jika tertarik</h3>

<p>Kalau anak penasaran, ajak coba puasa <em>setengah hari</em> — dari sahur sampai dzuhur. Sediakan aktivitas yang membuat lupa lapar (buku, jalan pagi). Buka di waktu dzuhur dengan makanan favorit. Bahkan setengah hari penuh sudah pengalaman besar.</p>

<p>Detail: <a href="/_/parenting/puasa-pertama/">Puasa Pertama Anak</a>.</p>

<h3>Usia 9+: puasa penuh, jika sudah biasa</h3>

<p>Anak yang sudah biasa puasa Ramadan setengah hari atau lebih, bisa diajak puasa Asyura penuh. Tapi pertimbangkan: apakah dia sekolah hari itu? Apakah aktivitas fisiknya berat? Sesuaikan.</p>

<h2>Cerita sebagai pembuka</h2>

<p>Beberapa hari sebelum 10 Muharram, ceritakan kisah Musa dan Firaun ke anak — sebagai pembukaan emosional. Ketika hari Asyura tiba, anak sudah punya konteks emosional kenapa hari ini istimewa.</p>

<p>Lebih dalam: <a href="/_/blog/cara-bercerita-kisah-nabi-untuk-anak/">Cara Bercerita Kisah Nabi</a>.</p>

<h2>Yang harus dihindari</h2>

<ul>
  <li><strong>Jangan paksa puasa penuh anak yang belum siap.</strong> Trauma puasa di usia 6 bisa membuat anak menolak puasa di usia 16.</li>
  <li><strong>Jangan janjikan imbalan materi.</strong> "Kalau kamu puasa penuh, Mama belikan mainan." Itu mengajarkan transaksi, bukan ibadah.</li>
  <li><strong>Jangan campur dengan budaya non-Islam.</strong> Asyura punya makna sendiri yang lengkap — tidak perlu pinjam dari Ashura kultural Syiah atau perayaan lain.</li>
</ul>

<h2>Yang harus dibiasakan</h2>

<ul>
  <li><strong>Sahur bersama,</strong> walau hanya 1–2 anggota keluarga yang puasa.</li>
  <li><strong>Buka bersama,</strong> dengan kurma + air, seperti Ramadan.</li>
  <li><strong>Doa berbuka</strong> tetap dibaca anak yang baru coba puasa setengah hari. Lihat <a href="/_/doa/berbuka-puasa/">Doa Berbuka Puasa</a>.</li>
  <li><strong>Refleksi:</strong> "Bagaimana rasanya? Mau dicoba lagi tahun depan?"</li>
</ul>

<h2>Penutup</h2>

<p>Asyura adalah salah satu hari yang Rasulullah ﷺ paling jaga setelah Ramadan. Mengenalkannya ke anak adalah menanam benih hubungan dengan ibadah yang akan tumbuh seumur hidupnya.</p>

<p>Tidak perlu sempurna tahun ini. Cukup mulai. Tahun depan lebih baik dari tahun ini.</p>`,

      en: `<p>This year, Asyura falls around June 25, 2026 (10 Muharram 1448 H). It's one of the most special optional fasts in Islam — strongly recommended, wipes a year of sins, and has a story children love.</p>

<h2>The history: Prophet Musa and the Children of Israel</h2>

<p>When the Prophet ﷺ migrated to Madinah, he saw Jews fasting on 10 Muharram. He asked why. They said: "This is the day Allah saved Prophet Musa and the Children of Israel from Pharaoh. Musa fasted in gratitude."</p>

<p>The Prophet ﷺ said: <em>"I have more right to Musa than you"</em> — and fasted, and instructed the Muslims to fast too. (Bukhari 2004, Muslim 1130)</p>

<p>This is a story children love. About Musa, Pharaoh, a sea splitting, struggle, then gratitude to Allah.</p>

<h2>The ruling on Asyura fast</h2>

<ul>
  <li><strong>Strongly recommended (sunnah mu'akkadah)</strong> for every able adult Muslim.</li>
  <li><strong>Wipes the sins of the past year</strong> (Muslim 1162) — minor sins, conditional on staying away from major ones.</li>
  <li><strong>Extra recommendation:</strong> also fast on 9 Muharram (Tasu'a) — to differ from the Jewish practice of fasting only on 10.</li>
  <li><strong>Or:</strong> fast 10 and 11 Muharram. Or all three: 9, 10, 11.</li>
</ul>

<h2>The ruling for children</h2>

<p>Children who are <em>not yet baligh</em> are not obligated for any fast — not even Ramadan, let alone Asyura. But <strong>training</strong> from ages 5–7 is sunnah. The companions in Madinah trained their children to fast Asyura by giving them wool toys — when the child got hungry, they played.</p>

<p>The lesson: train, don't force. Give experience, not burden.</p>

<h2>How to teach, by age</h2>

<h3>Ages 3–5: just observe</h3>

<p>Suhoor together, even though the child won't fast. Mention: "Today mom is fasting. It's called Asyura, the 10th day of Muharram." When you break, the child watches. That's enough.</p>

<h3>Ages 6–8: half-day, if interested</h3>

<p>If they're curious, try a <em>half-day</em> — from suhoor until noon. Plan distractions (books, morning walks). Break at noon with a favorite food. Even half a day is a big experience.</p>

<p>Details: <a href="/_/parenting/puasa-pertama/">Your Child's First Fast</a>.</p>

<h3>Ages 9+: full day, if used to it</h3>

<p>A child who already does half-day or more of Ramadan can try a full Asyura. But consider: school that day? Heavy physical activity? Adjust.</p>

<h2>Story as the opener</h2>

<p>A few days before 10 Muharram, tell the child the story of Musa and Pharaoh — as emotional preparation. By the time Asyura arrives, the child already has emotional context for why this day is special.</p>

<p>Deeper: <a href="/_/blog/cara-bercerita-kisah-nabi-untuk-anak/">How to Tell Prophet Stories</a>.</p>

<h2>What to avoid</h2>

<ul>
  <li><strong>Don't force a full fast on an unready child.</strong> Fasting trauma at 6 can make them refuse at 16.</li>
  <li><strong>Don't promise material rewards.</strong> "If you fast the whole day I'll buy you a toy." That teaches transaction, not worship.</li>
  <li><strong>Don't mix with non-Islamic culture.</strong> Asyura's meaning is complete on its own — no need to borrow from Shia Ashura culture or other observances.</li>
</ul>

<h2>What to build</h2>

<ul>
  <li><strong>Suhoor together,</strong> even if only 1–2 family members are fasting.</li>
  <li><strong>Iftar together,</strong> with dates + water, like Ramadan.</li>
  <li><strong>The break-fast dua</strong> for a child who just did a half-day. See <a href="/_/doa/berbuka-puasa/">Dua When Breaking Fast</a>.</li>
  <li><strong>Reflection:</strong> "How did that feel? Want to try again next year?"</li>
</ul>

<h2>Closing</h2>

<p>Asyura is one of the days the Prophet ﷺ kept most consistently after Ramadan. Introducing it to your child plants the seed of a lifelong relationship with this worship.</p>

<p>Doesn't need to be perfect this year. Just start. Next year will be better.</p>`,
    },
    tags: ["asyura", "puasa", "muharram", "ibadah-musiman"],
    published: "2026-05-24",
    updated: "2026-05-24",
    readingTimeMin: 7,
    author: "tim-baby-mo",
    kit: {
      quote: {
        id: "Latih, jangan paksa. Beri anak pengalaman puasa, bukan beban. Trauma puasa di usia 6 bisa membuat anak menolak puasa di usia 16.",
        en: "Train, don't force. Give your child experience, not burden. Fasting trauma at 6 can make them refuse at 16.",
      },
      carousel: {
        id: [
          { title: "10 Muharram = Asyura", body: "Puasa sunnah paling dianjurkan setelah Ramadan. Mengampuni dosa setahun yang lalu (HR. Muslim 1162)." },
          { title: "Kisah Nabi Musa", body: "Asyura adalah hari Allah menyelamatkan Musa dari Firaun. Cerita yang anak akan suka." },
          { title: "Anjuran tambahan", body: "Puasa 9 + 10 Muharram (atau 10 + 11) — agar berbeda dari praktik Yahudi yang hanya 1 hari." },
          { title: "Untuk anak: belum wajib", body: "Anak belum baligh tidak diwajibkan. Tapi latih sejak 5–7 tahun adalah sunnah." },
          { title: "Usia 3–5: amati", body: "Sahur bersama, tonton orang tua puasa. Itu sudah cukup pengalaman pertama." },
          { title: "Usia 6–8: setengah hari", body: "Dari sahur sampai dzuhur. Aktivitas distraksi: buku, jalan pagi. Buka dengan favorit." },
          { title: "Hindari", body: "Jangan paksa penuh. Jangan janjikan mainan. Jangan campur dengan budaya non-Islam." },
        ],
        en: [
          { title: "10 Muharram = Asyura", body: "The most recommended optional fast after Ramadan. Wipes the past year's sins (Muslim 1162)." },
          { title: "Story of Prophet Musa", body: "Asyura is when Allah saved Musa from Pharaoh. A story children will love." },
          { title: "Extra recommendation", body: "Fast 9 + 10 (or 10 + 11) Muharram — to differ from Jewish practice of fasting only 1 day." },
          { title: "For children: not obligatory", body: "Pre-baligh children aren't obligated. But training from 5–7 is sunnah." },
          { title: "Ages 3–5: observe", body: "Suhoor together, watch parents fast. That alone is enough first experience." },
          { title: "Ages 6–8: half-day", body: "From suhoor to noon. Distractions: books, morning walks. Break with a favorite." },
          { title: "Avoid", body: "Don't force a full day. Don't promise toys. Don't mix with non-Islamic culture." },
        ],
      },
      shortScript: {
        id: `[0–3 detik] HOOK: "10 Muharram itu Asyura. Puasa sunnah yang paling utama setelah Ramadan."

[3–15 detik] SEJARAH: Asyura adalah hari Allah menyelamatkan Nabi Musa dari Firaun. Rasulullah ﷺ puasa hari ini sebagai syukur. (HR. Bukhari 2004)

[15–30 detik] KEUTAMAAN: Mengampuni dosa setahun yang lalu (HR. Muslim 1162). Anjuran: puasa 9 + 10 Muharram, bukan cuma 10.

[30–45 detik] UNTUK ANAK: Anak ngga wajib puasa. Tapi latih sejak 5–7 tahun. Mulai dari setengah hari. Trauma puasa di 6 bisa bikin tolak puasa di 16. Latih, jangan paksa.

[45–55 detik] CARA: Cerita kisah Musa beberapa hari sebelumnya. Sahur bersama walau anak ngga puasa. Buka pakai kurma + favorit. Doa berbuka.

[55–60 detik] CTA: "Save buat 10 Muharram. Bagikan ke keluarga muslim."`,
        en: `[0–3 sec] HOOK: "10 Muharram is Asyura. The most virtuous optional fast after Ramadan."

[3–15 sec] HISTORY: Asyura is the day Allah saved Prophet Musa from Pharaoh. The Prophet ﷺ fasted in gratitude. (Bukhari 2004)

[15–30 sec] REWARD: Wipes the past year's minor sins (Muslim 1162). Recommended: fast 9 + 10 Muharram, not just 10.

[30–45 sec] FOR KIDS: Children aren't obligated. But training from 5–7 is sunnah. Start with half-day. Fasting trauma at 6 can make them refuse at 16. Train, don't force.

[45–55 sec] HOW: Tell Musa's story days before. Suhoor together even if the child doesn't fast. Break with dates + favorite. Recite the iftar dua.

[55–60 sec] CTA: "Save this for 10 Muharram. Share with Muslim families."`,
      },
      pin: {
        id: {
          title: "Puasa Asyura untuk Anak — Sejarah, Hukum, dan Panduan Latihan",
          description: "Panduan lengkap puasa Asyura 10 Muharram untuk anak muslim. Sejarah Nabi Musa dan Firaun, hukum sunnah muakkadah, dan cara melatih anak puasa per kelompok usia: 3–5, 6–8, 9+. Tarbiyah islami untuk keluarga muslim Indonesia.",
        },
        en: {
          title: "Asyura Fast for Children — History, Ruling, and Training Guide",
          description: "A complete guide to the 10 Muharram Asyura fast for Muslim children. The story of Prophet Musa and Pharaoh, the strongly recommended ruling, and how to train children to fast at each age: 3–5, 6–8, 9+. Islamic parenting for Muslim families.",
        },
      },
      checklist: {
        id: [
          "Ceritakan kisah Nabi Musa & Firaun 3–4 hari sebelum 10 Muharram",
          "Diskusi keluarga: siapa puasa, siapa coba setengah hari, siapa observasi",
          "Sahur bersama (semua bangun, walau hanya 1–2 yang puasa)",
          "Beri anak aktivitas distraksi: buku, jalan pagi, mainan kayu",
          "Buka puasa: kurma + air + makanan favorit anak",
          "Baca doa berbuka bersama",
          "Refleksi: 'Bagaimana rasanya? Mau coba lagi tahun depan?'",
          "Pertimbangkan puasa Tasu'a (9 Muharram) sebagai pelengkap",
        ],
        en: [
          "Tell the story of Prophet Musa & Pharaoh 3–4 days before 10 Muharram",
          "Family discussion: who fasts, who tries half-day, who observes",
          "Suhoor together (everyone wakes, even if only 1–2 fast)",
          "Give child distractions: books, morning walk, wooden toys",
          "Iftar: dates + water + child's favorite food",
          "Recite the iftar dua together",
          "Reflection: 'How did that feel? Want to try again next year?'",
          "Consider Tasu'a (9 Muharram) as a complement",
        ],
      },
    },
  },

  {
    slug: "kisah-hijrah-nabi-untuk-anak",
    title: {
      id: "Kisah Hijrah Nabi untuk Anak: Cerita yang Membentuk Kalender Muslim",
      en: "The Story of the Hijrah for Children: The Tale That Shaped the Muslim Calendar",
    },
    excerpt: {
      id: "Hijrah Nabi ﷺ dari Makkah ke Madinah bukan cuma pelajaran sejarah — itu cerita keberanian, kawan setia, dan harapan baru. Cara menyampaikannya kepada anak agar membekas seumur hidup.",
      en: "The Prophet's ﷺ hijrah from Makkah to Madinah is not just a history lesson — it's a story of courage, loyal friendship, and renewed hope. How to tell it so it stays with a child for life.",
    },
    body: {
      id: `<p>Setiap 1 Muharram, kita memulai tahun baru — dan tahun itu dihitung sejak satu peristiwa. Bukan kelahiran Nabi ﷺ. Bukan wahyu pertama. Tapi <em>hijrahnya</em> — perjalanan dari Makkah ke Madinah.</p>

<p>Mengapa peristiwa ini, dari semua peristiwa hidup Nabi ﷺ, yang dipilih untuk menjadi awal kalender? Karena hijrah adalah ujian terbesar yang dilalui umat Islam awal — dan dari ujian itu, sebuah komunitas tumbuh.</p>

<p>Berikut cara menceritakannya pada anak, dengan struktur tiga babak yang anak-anak suka.</p>

<h2>Babak 1: Makkah yang semakin sulit</h2>

<p>Mulai dengan keseharian. Rasulullah ﷺ tinggal di Makkah. Itu kota beliau. Di sana keluarga beliau, sahabat-sahabat beliau, masjid yang baru dibangun.</p>

<p>Tapi kaum Quraisy makin marah dengan ajaran beliau. Mereka mengganggu sahabat-sahabat. Mereka menyiksa Bilal, Sumayyah, Yasir. Mereka memboikot Bani Hasyim selama tiga tahun — sampai anak-anak makan dedaunan.</p>

<p>Beliau berdoa. Beliau bertahan. Tapi Allah memberinya wahyu: <em>"Saatnya pergi."</em></p>

<p>Untuk anak: <em>"Bayangkan kalau adik harus pindah karena di rumah ada orang yang ngga suka adik dan terus ganggu. Susah ya? Itu yang Nabi rasakan."</em></p>

<h2>Babak 2: Perjalanan dengan Abu Bakar</h2>

<p>Ini babak yang paling kaya emosinya. Tiga elemen yang harus masuk:</p>

<h3>Persiapan rahasia</h3>

<p>Hanya Abu Bakar yang tahu rencana. Mereka berdua menyiapkan diam-diam: makanan, kendaraan unta, jalur yang berbeda dari yang dikira musuh.</p>

<p>Ali bin Abi Thalib, sepupu Nabi yang masih muda, tidur di tempat tidur beliau — menjadi umpan agar pengejar mengira beliau masih di rumah. Berani sekali, anak muda itu.</p>

<h3>Kejaran dan gua Tsur</h3>

<p>Quraisy mengejar. Mereka sampai ke mulut gua Tsur — di mana Nabi dan Abu Bakar bersembunyi. Sangat dekat. Abu Bakar khawatir: <em>"Wahai Rasulullah, kalau salah satu dari mereka melihat ke bawah kakinya, dia akan melihat kita."</em></p>

<p>Jawaban Rasulullah ﷺ yang anak-anak akan ingat seumur hidup:</p>

<blockquote>"Apa pendapatmu tentang dua orang yang Allah adalah yang ketiganya?" — <strong>QS. At-Taubah 9:40</strong></blockquote>

<p>Pengejar tidak melihat. Allah menjaga. Mereka pergi.</p>

<h3>Sampai di Madinah</h3>

<p>Setelah perjalanan panjang, mereka tiba di Madinah. Penduduk Madinah sudah lama menunggu. Anak-anak menari di jalan, menyanyikan lagu pelantun yang masih dinyanyikan sampai sekarang: <em>thala'al badru 'alayna...</em> "Telah terbit bulan purnama atas kami..."</p>

<p>Untuk anak: <em>"Bayangkan adik baru pindah ke kota baru, dan saat sampai, semua orang di kota itu keluar menyambut adik dengan lagu. Itu rasa diterima yang Nabi rasakan setelah perjalanan susah."</em></p>

<h2>Babak 3: Yang dibangun di Madinah</h2>

<p>Hijrah bukan akhir cerita. Itu pembukaan.</p>

<p>Di Madinah, Nabi ﷺ membangun:</p>

<ul>
  <li><strong>Masjid pertama</strong> — bersama, tangan beliau ikut mengangkat batu.</li>
  <li><strong>Persaudaraan</strong> — Muhajirin (yang hijrah) dipersaudarakan dengan Anshar (yang menerima).</li>
  <li><strong>Konstitusi</strong> — yang mengatur hidup bersama Yahudi dan orang non-muslim di kota itu.</li>
</ul>

<p>Dari sini, Islam menyebar ke seluruh dunia. Kalau hijrah tidak terjadi, mungkin kita semua di sini sekarang tidak akan menjadi muslim.</p>

<h2>Pertanyaan yang biasa anak tanya</h2>

<h3>"Kenapa Nabi tidak bertarung saja di Makkah?"</h3>

<p>"Karena Allah belum mengizinkan. Ada waktu untuk berdoa, ada waktu untuk pindah, ada waktu untuk berjuang. Nabi taat pada waktu Allah."</p>

<h3>"Apakah Abu Bakar takut?"</h3>

<p>"Iya. Beliau takut. Tapi beliau tetap pergi bersama Nabi. Berani bukan berarti tidak takut — berani berarti pergi meski takut."</p>

<h3>"Apakah anak-anak juga ikut hijrah?"</h3>

<p>"Iya, banyak. Banyak keluarga yang membawa anak-anak mereka. Anak-anak itu jadi sahabat Anshar yang besarnya membantu menyebarkan Islam."</p>

<h2>Format praktis: cerita 4 minggu di Muharram</h2>

<ul>
  <li><strong>Minggu 1:</strong> Babak 1 — tekanan di Makkah.</li>
  <li><strong>Minggu 2:</strong> Babak 2 bagian A — persiapan dan keberangkatan.</li>
  <li><strong>Minggu 3:</strong> Babak 2 bagian B — gua Tsur dan kedatangan.</li>
  <li><strong>Minggu 4:</strong> Babak 3 — yang dibangun di Madinah.</li>
</ul>

<p>Satu sesi per minggu, 10–15 menit. Anak-anak akan menunggu sesi berikutnya.</p>

<h2>Yang harus dihindari</h2>

<ul>
  <li><strong>Jangan tambahkan detail dari sumber tidak jelas.</strong> Kisah hijrah ada di Bukhari, Muslim, dan sirah klasik. Gunakan itu.</li>
  <li><strong>Jangan jadikan Quraisy "jahat" satu dimensi.</strong> Mereka adalah orang-orang yang takut perubahan. Anak akan lebih sayang jika musuh punya alasan.</li>
  <li><strong>Jangan moralisasi.</strong> Biarkan anak menemukan moralnya sendiri lewat pertanyaan.</li>
</ul>

<p>Lebih luas: <a href="/_/blog/cara-bercerita-kisah-nabi-untuk-anak/">Cara Bercerita Kisah Nabi yang Bikin Anak Mengingat</a>.</p>

<h2>Penutup</h2>

<p>Anak yang besar dengan kisah hijrah punya cetakan emosional yang dalam. Saat dia harus meninggalkan zona nyaman demi sesuatu yang lebih baik, dia punya Nabi untuk diingat. Saat dia takut tapi harus melangkah, dia punya Abu Bakar. Saat dia diterima di tempat baru, dia punya Anshar.</p>

<p>Itu warisan yang tidak diberikan oleh ujian sekolah, oleh prestasi olahraga, oleh apapun.</p>

<p>Mulai minggu pertama Muharram tahun ini.</p>`,

      en: `<p>Every 1 Muharram, a new year begins — and that year is counted from one event. Not the Prophet's ﷺ birth. Not the first revelation. But his <em>hijrah</em> — the migration from Makkah to Madinah.</p>

<p>Why this event, out of all the events of the Prophet's life, was chosen to begin the calendar? Because the hijrah was the greatest trial early Muslims passed through — and from that trial, a community grew.</p>

<p>Here's how to tell it to a child, in a three-act structure children love.</p>

<h2>Act 1: Makkah grows harder</h2>

<p>Start in the everyday. The Prophet ﷺ lived in Makkah. It was his city. His family was there, his friends, the new mosque.</p>

<p>But the Quraysh grew angrier at his teaching. They harassed his companions. They tortured Bilal, Sumayyah, Yasir. They boycotted Bani Hashim for three years — until children ate leaves.</p>

<p>He made dua. He endured. Then Allah revealed: <em>"It is time to leave."</em></p>

<p>For the child: <em>"Imagine if you had to move because someone at home didn't like you and kept bothering you. Hard, right? That's what the Prophet felt."</em></p>

<h2>Act 2: The journey with Abu Bakr</h2>

<p>The emotional heart of the story. Three elements must land:</p>

<h3>Secret preparation</h3>

<p>Only Abu Bakr knew the plan. Together they prepared quietly: food, camels, a route different from the one the enemy expected.</p>

<p>Ali ibn Abi Talib, the Prophet's young cousin, slept in his bed — a decoy so pursuers thought he was still home. So brave, that young man.</p>

<h3>The chase and Cave Thawr</h3>

<p>Quraysh chased. They reached the mouth of Cave Thawr — where the Prophet and Abu Bakr were hiding. Very close. Abu Bakr was anxious: <em>"O Messenger of Allah, if one of them looks down at his feet, he'll see us."</em></p>

<p>The Prophet's reply, which children will remember for life:</p>

<blockquote>"What do you think of two whose third is Allah?" — <strong>Qur'an 9:40</strong></blockquote>

<p>The pursuers didn't see. Allah protected them. They left.</p>

<h3>Arrival in Madinah</h3>

<p>After a long journey, they reached Madinah. The people had been waiting. Children danced in the streets, singing the song still sung today: <em>thala'al badru 'alayna...</em> "The full moon rose over us..."</p>

<p>For the child: <em>"Imagine moving to a new city, and when you arrive, everyone comes out to greet you with a song. That's the welcome the Prophet felt after a hard journey."</em></p>

<h2>Act 3: What was built in Madinah</h2>

<p>The hijrah wasn't the end of the story. It was the opening.</p>

<p>In Madinah, the Prophet ﷺ built:</p>

<ul>
  <li><strong>The first mosque</strong> — together, his own hand lifting stones.</li>
  <li><strong>Brotherhood</strong> — the Muhajirin (migrants) paired with the Ansar (helpers).</li>
  <li><strong>The Constitution</strong> — governing life with the Jews and non-Muslims of the city.</li>
</ul>

<p>From here, Islam spread to the world. If the hijrah hadn't happened, perhaps none of us reading this would be Muslim.</p>

<h2>Questions children often ask</h2>

<h3>"Why didn't the Prophet just fight in Makkah?"</h3>

<p>"Because Allah hadn't permitted it yet. There's a time for dua, a time to move, a time to fight. The Prophet followed Allah's timing."</p>

<h3>"Was Abu Bakr scared?"</h3>

<p>"Yes. He was. But he went with the Prophet anyway. Brave doesn't mean unafraid — brave means going forward despite fear."</p>

<h3>"Did children make the hijrah too?"</h3>

<p>"Yes, many. Many families brought their children. Those children became Ansar companions who as adults helped spread Islam."</p>

<h2>Practical format: a 4-week story in Muharram</h2>

<ul>
  <li><strong>Week 1:</strong> Act 1 — pressure in Makkah.</li>
  <li><strong>Week 2:</strong> Act 2A — preparation and departure.</li>
  <li><strong>Week 3:</strong> Act 2B — Cave Thawr and arrival.</li>
  <li><strong>Week 4:</strong> Act 3 — what was built in Madinah.</li>
</ul>

<p>One session a week, 10–15 minutes. Children will look forward to the next.</p>

<h2>What to avoid</h2>

<ul>
  <li><strong>Don't add details from unclear sources.</strong> The hijrah story is in Bukhari, Muslim, and classical sirah. Use them.</li>
  <li><strong>Don't make Quraysh one-dimensionally "evil".</strong> They were people who feared change. Children connect more deeply when the antagonist has a reason.</li>
  <li><strong>Don't moralize.</strong> Let the child find the moral themselves through questions.</li>
</ul>

<p>Broader guide: <a href="/_/blog/cara-bercerita-kisah-nabi-untuk-anak/">How to Tell Prophet Stories That Children Remember</a>.</p>

<h2>Closing</h2>

<p>A child raised on the hijrah story carries a deep emotional template. When they must leave a comfort zone for something better, they have the Prophet to remember. When they must move forward in fear, they have Abu Bakr. When they're welcomed somewhere new, they have the Ansar.</p>

<p>That inheritance isn't given by school exams, sports trophies, or anything else.</p>

<p>Start the first week of Muharram this year.</p>`,
    },
    tags: ["hijrah", "muharram", "kisah-nabi", "sejarah-islam"],
    published: "2026-05-23",
    updated: "2026-05-23",
    readingTimeMin: 9,
    author: "tim-baby-mo",
    kit: {
      quote: {
        id: "Berani bukan berarti tidak takut. Berani berarti pergi meski takut — itu yang Abu Bakar ajarkan kepada anak-anak yang mendengar kisah hijrah.",
        en: "Brave doesn't mean unafraid. Brave means going forward despite fear — that's what Abu Bakr teaches children who hear the hijrah story.",
      },
      carousel: {
        id: [
          { title: "Kenapa hijrah jadi awal kalender", body: "Bukan kelahiran Nabi ﷺ, bukan wahyu pertama. Tapi hijrah — karena dari sini umat tumbuh." },
          { title: "Babak 1: tekanan di Makkah", body: "Quraisy memboikot Bani Hasyim 3 tahun. Sahabat disiksa. Allah berfirman: 'Saatnya pergi.'" },
          { title: "Ali tidur di tempat tidur Nabi", body: "Anak muda yang menjadi umpan agar pengejar mengira Nabi masih di rumah. Berani." },
          { title: "Gua Tsur", body: "Quraisy hampir menemukan. Abu Bakar khawatir. Nabi: 'Apa pendapatmu tentang dua orang yang Allah ketiganya?'" },
          { title: "Disambut di Madinah", body: "Anak-anak menyanyikan thala'al badru 'alayna. Pengalaman diterima setelah perjalanan susah." },
          { title: "Apa yang dibangun", body: "Masjid pertama. Persaudaraan Muhajirin–Anshar. Konstitusi. Dari sini Islam menyebar." },
          { title: "4 minggu, 1 sesi/minggu", body: "Pisahkan jadi 4 babak: tekanan, persiapan, gua, kedatangan. Anak menunggu sesi berikutnya." },
        ],
        en: [
          { title: "Why hijrah starts the calendar", body: "Not the Prophet's birth, not the first revelation. The hijrah — because from here a community grew." },
          { title: "Act 1: pressure in Makkah", body: "Quraysh boycotted Bani Hashim 3 years. Companions tortured. Allah said: 'It is time to leave.'" },
          { title: "Ali slept in the Prophet's bed", body: "A young man, a decoy so pursuers thought the Prophet was still home. Brave." },
          { title: "Cave Thawr", body: "Quraysh nearly found them. Abu Bakr worried. The Prophet: 'What of two whose third is Allah?'" },
          { title: "Welcomed in Madinah", body: "Children sang thala'al badru 'alayna. The feeling of arrival after a hard journey." },
          { title: "What was built", body: "The first mosque. Brotherhood Muhajirin–Ansar. The Constitution. From here Islam spread." },
          { title: "4 weeks, 1 session each", body: "Split into 4 acts: pressure, preparation, cave, arrival. The child anticipates the next." },
        ],
      },
      shortScript: {
        id: `[0–3 detik] HOOK: "Kalender muslim mulai dari satu peristiwa. Bukan kelahiran Nabi ﷺ. Bukan wahyu. Tapi hijrah."

[3–15 detik] BABAK 1: Makkah makin sulit. Quraisy memboikot Bani Hasyim 3 tahun sampai anak-anak makan dedaunan. Allah berfirman: 'Saatnya pergi.'

[15–35 detik] BABAK 2: Nabi ﷺ dan Abu Bakar pergi. Ali tidur di tempat tidur Nabi jadi umpan. Di gua Tsur, pengejar sangat dekat. Abu Bakar khawatir. Nabi: 'Apa pendapatmu tentang dua orang yang Allah ketiganya?' Allah menjaga.

[35–50 detik] BABAK 3: Sampai di Madinah, anak-anak menyanyikan thala'al badru 'alayna. Nabi membangun masjid, persaudaraan, konstitusi. Dari sini Islam menyebar.

[50–60 detik] PESAN: Berani bukan berarti tidak takut. Berani berarti pergi meski takut. Itu yang Abu Bakar ajarkan ke anak-anak yang mendengar kisah ini. CTA: "Save buat dibacakan ke anak."`,
        en: `[0–3 sec] HOOK: "The Muslim calendar starts from one event. Not the Prophet's birth. Not revelation. The hijrah."

[3–15 sec] ACT 1: Makkah grew harder. Quraysh boycotted Bani Hashim 3 years until children ate leaves. Allah said: 'It is time to leave.'

[15–35 sec] ACT 2: Prophet ﷺ and Abu Bakr left. Ali slept in the Prophet's bed as a decoy. In Cave Thawr, pursuers very close. Abu Bakr worried. Prophet: 'What of two whose third is Allah?' Allah protected them.

[35–50 sec] ACT 3: Arrived in Madinah, children sang thala'al badru 'alayna. Prophet built the mosque, brotherhood, constitution. From here Islam spread.

[50–60 sec] MESSAGE: Brave doesn't mean unafraid. Brave means going forward despite fear. That's what Abu Bakr teaches children who hear this. CTA: "Save to read to your child."`,
      },
      pin: {
        id: {
          title: "Kisah Hijrah Nabi untuk Anak — Cerita 3 Babak yang Membekas Seumur Hidup",
          description: "Panduan menceritakan kisah hijrah Nabi Muhammad ﷺ dari Makkah ke Madinah untuk anak muslim. Struktur 3 babak (tekanan Makkah, perjalanan, kedatangan Madinah), pertanyaan yang biasa anak tanyakan, dan format 4 minggu untuk dibacakan sepanjang Muharram. Tarbiyah islami untuk keluarga muslim Indonesia.",
        },
        en: {
          title: "The Hijrah Story for Children — A 3-Act Tale That Lasts a Lifetime",
          description: "How to tell the story of the Prophet's ﷺ hijrah from Makkah to Madinah to Muslim children. The 3-act structure (Makkah pressure, journey, Madinah arrival), common questions kids ask, and a 4-week format for Muharram. Islamic parenting for Muslim families.",
        },
      },
      checklist: {
        id: [
          "Sesi minggu 1: tekanan di Makkah (10–15 menit)",
          "Sesi minggu 2: persiapan dan keberangkatan",
          "Sesi minggu 3: gua Tsur dan perjalanan",
          "Sesi minggu 4: kedatangan + apa yang dibangun di Madinah",
          "Bertanya, jangan menjelaskan: biarkan anak menemukan moralnya",
          "Hindari membuat Quraisy 'jahat' satu dimensi",
          "Sebutkan nama-nama: Ali, Abu Bakar, Anshar, Muhajirin",
          "Tutup tiap sesi dengan: 'Menurut adik, gimana perasaan Nabi tadi?'",
        ],
        en: [
          "Week 1 session: pressure in Makkah (10–15 minutes)",
          "Week 2 session: preparation and departure",
          "Week 3 session: Cave Thawr and the journey",
          "Week 4 session: arrival + what was built in Madinah",
          "Ask, don't explain: let the child find the moral",
          "Avoid making Quraysh one-dimensionally 'evil'",
          "Use names: Ali, Abu Bakr, Ansar, Muhajirin",
          "Close each session with: 'How do you think the Prophet felt?'",
        ],
      },
    },
  },

  // ═════════════════════════════════════════════════════════════════
  //  Pre-Muharram series (Dzulhijjah) and earlier evergreen posts
  //  follow below.
  // ═════════════════════════════════════════════════════════════════

  // ─────────────────────────────────────────────────────────────────
  // 1. SEASONAL — Dzulhijjah window (early June 2026, Eid al-Adha)
  // ─────────────────────────────────────────────────────────────────
  {
    slug: "10-hari-dzulhijjah-bareng-anak",
    title: {
      id: "10 Hari Dzulhijjah Bareng Anak: Panduan Hari-per-Hari Menuju Idul Adha",
      en: "10 Days of Dhul Hijjah with Children: A Day-by-Day Guide to Eid al-Adha",
    },
    excerpt: {
      id: "Sepuluh hari pertama Dzulhijjah adalah hari-hari paling dicintai Allah. Panduan praktis hari-per-hari untuk mengisinya bersama anak — puasa, doa, dan persiapan Idul Adha.",
      en: "The first ten days of Dhul Hijjah are the most beloved to Allah. A practical day-by-day guide to spend them with your children — fasting, duas, and preparing for Eid al-Adha.",
    },
    body: {
      id: `<p>Sepuluh hari pertama bulan Dzulhijjah adalah satu-satunya hari di mana Rasulullah ﷺ bersabda bahwa amal saleh padanya lebih dicintai Allah daripada hari-hari lain — bahkan melebihi jihad, kecuali seseorang yang berjihad dengan harta dan dirinya dan tidak kembali (HR. Bukhari 969).</p>

<p>Untuk keluarga muslim dengan anak kecil, ini bukan soal mengikuti semua amalan dewasa. Ini soal <strong>mengenalkan</strong> — menanam memori bahwa hari-hari ini istimewa, bahwa Idul Adha berbeda dari Idul Fitri, bahwa kurban punya cerita yang dimulai dari Nabi Ibrahim.</p>

<p>Berikut panduan hari-per-hari yang bisa kamu adaptasi sesuai usia anak.</p>

<h2>Hari 1–3: Bangun suasana</h2>

<p>Tiga hari pertama adalah masa "warming up". Anak belum perlu puasa, belum perlu pemahaman fiqih yang dalam. Yang dibutuhkan adalah suasana.</p>

<ul>
  <li><strong>Ceritakan kisah Nabi Ibrahim dan Nabi Ismail</strong> — versi yang sesuai usia. Untuk balita: "Nabi Ibrahim sangat cinta Allah, lebih dari segalanya." Untuk anak 5–7: kisah ujian dan kurban, dengan penekanan pada cinta ayah-anak yang utuh.</li>
  <li><strong>Dekorasi rumah ringan</strong> — kertas berbentuk bulan sabit, lampu hangat, sajadah baru. Anak menyerap suasana sebelum kata-kata.</li>
  <li><strong>Mulai biasakan takbir setelah sholat</strong> — sunnah-nya dari subuh hari Arafah, tapi mengenalkan sekarang membentuk kebiasaan.</li>
</ul>

<h2>Hari 4–6: Latihan puasa pendek</h2>

<p>Anak 5 tahun ke atas yang penasaran bisa diajak <em>mencoba</em> puasa setengah hari — dari sahur sampai dzuhur. Bukan kewajiban, bukan ujian. Latihan.</p>

<ul>
  <li>Bangunkan sahur dengan makanan yang anak suka — bukan paksaan.</li>
  <li>Sediakan aktivitas yang membuat lupa lapar — buku, jalan pagi, bermain di taman.</li>
  <li>Saat berbuka, beri makanan favorit. "Finish line" harus terasa istimewa.</li>
</ul>

<p>Detail lebih lengkap di panduan parenting kami: <a href="/_/parenting/puasa-pertama/">Puasa Pertama Anak</a>.</p>

<h2>Hari 7–8: Puasa Tarwiyah (opsional)</h2>

<p>Tanggal 8 Dzulhijjah adalah puasa Tarwiyah — dianjurkan untuk dewasa. Anak yang sudah terbiasa puasa Ramadan setengah hari bisa diajak. Yang penting, jangan sampai pengalaman ini meninggalkan trauma.</p>

<h2>Hari 9: Puasa Arafah — momen paling istimewa</h2>

<p>Puasa Arafah (9 Dzulhijjah) menggugurkan dosa setahun yang lalu dan setahun yang akan datang (HR. Muslim 1162). Untuk dewasa, ini puasa paling utama setelah Ramadan.</p>

<p>Untuk anak, hari ini bisa diisi dengan:</p>

<ul>
  <li><strong>Bangun bareng untuk sahur</strong> meski anak tidak ikut puasa — momen kekeluargaan.</li>
  <li><strong>Tonton tayangan jamaah haji wukuf di Arafah</strong> — beri tahu bahwa jutaan muslim sedang berdoa di tempat yang sama.</li>
  <li><strong>Ajak berdoa bersama setelah Ashar</strong> — waktu yang paling mustajab di Arafah. Doa singkat, dipegang tangannya, untuk anak dan untuk keluarga.</li>
  <li><strong>Buka puasa bersama di rumah</strong> — bukan di restoran. Sederhana, hangat, penuh syukur.</li>
</ul>

<h2>Hari 10: Idul Adha</h2>

<p>Pagi hari raya: mandi, pakai baju terbaik, sholat Id di lapangan atau masjid. Bawa anak — bahkan yang masih balita. Mereka mungkin tidak khusyuk, tapi mereka <em>melihat</em>.</p>

<p>Setelah sholat:</p>

<ul>
  <li><strong>Kunjungi tempat kurban</strong> — sesuai usia. Anak di bawah 5 tahun mungkin terlalu kecil untuk menyaksikan proses penyembelihan; tidak apa-apa, mereka bisa ikut bagian distribusi daging.</li>
  <li><strong>Jelaskan dengan lembut</strong> bahwa hewan ini diperlakukan dengan adil dan kasih sayang, dan dagingnya dibagikan kepada yang membutuhkan.</li>
  <li><strong>Ajak ikut membagikan</strong> — anak yang menyerahkan satu kantong daging ke tetangga belajar makna berbagi lebih dari ribuan kata.</li>
</ul>

<h2>Hari 11–13: Tasyriq</h2>

<p>Hari raya belum selesai. Tiga hari setelah Idul Adha disebut hari Tasyriq — dilarang puasa, dianjurkan makan, minum, dan berdzikir. Untuk anak, ini hari-hari piknik kecil bareng keluarga besar.</p>

<h2>Catatan terakhir untuk orang tua</h2>

<p>Sepuluh hari ini bukan tentang anak hafal segalanya. Bukan tentang puasa penuh. Bukan tentang doa yang panjang.</p>

<p>Ini tentang <strong>satu kenangan yang utuh</strong> — bau makanan sahur, suara takbir di mobil, tangan ayah memegang tangan anak saat sholat Id, daging kurban yang diserahkan ke tetangga.</p>

<p>Tahun depan, anak mungkin lupa apa yang kamu ajarkan. Tapi memori bahwa <em>hari-hari ini istimewa</em> akan tinggal lama setelah kamu tidak lagi ada untuk mengingatkan.</p>

<p>Itulah investasi yang Rasulullah ﷺ sebut sebagai <a href="/_/hadith/doa-anak-shalih/">anak shalih yang mendoakan orang tuanya</a> — pahala yang terus mengalir.</p>

<p>Selamat menyambut Idul Adha. Semoga Allah menerima amal kita dan keluarga kita.</p>`,

      en: `<p>The first ten days of Dhul Hijjah are the only days for which the Prophet ﷺ said that righteous deeds are more beloved to Allah than at any other time — even surpassing jihad, except for someone who goes out with their wealth and self and never returns (Bukhari 969).</p>

<p>For Muslim families with young children, this isn't about following every adult devotion. It's about <strong>introducing</strong> — planting the memory that these days are special, that Eid al-Adha differs from Eid al-Fitr, that the sacrifice has a story going back to Prophet Ibrahim.</p>

<p>Here's a day-by-day guide you can adapt for your child's age.</p>

<h2>Days 1–3: Set the atmosphere</h2>

<p>The first three days are a warm-up. The child doesn't need to fast or grasp fiqh. They need atmosphere.</p>

<ul>
  <li><strong>Tell the story of Prophet Ibrahim and Prophet Isma'il</strong> — age-appropriate. For toddlers: "Prophet Ibrahim loved Allah more than anything." For 5–7s: the test and the sacrifice, with the emphasis on a love between father and son that stayed whole.</li>
  <li><strong>Light decoration at home</strong> — paper crescents, warm lamps, a new prayer mat. Children absorb atmosphere before words.</li>
  <li><strong>Begin saying takbir after prayer</strong> — the sunnah is from Fajr on the day of Arafah, but introducing it now builds the habit.</li>
</ul>

<h2>Days 4–6: Short fasting trials</h2>

<p>A curious child of 5 or older can <em>try</em> a half-day fast — from suhoor until noon. Not obligation, not a test. Practice.</p>

<ul>
  <li>Wake them for suhoor with foods they like — never force.</li>
  <li>Plan activities that make them forget hunger — books, a morning walk, the park.</li>
  <li>At iftar, give a favorite food. The "finish line" should feel special.</li>
</ul>

<p>See our parenting guide for the full approach: <a href="/_/parenting/puasa-pertama/">Your Child's First Fast</a>.</p>

<h2>Days 7–8: Tarwiyah fast (optional)</h2>

<p>The 8th of Dhul Hijjah is the fast of Tarwiyah — recommended for adults. A child already used to half-day Ramadan fasts can join in. The key: don't let this experience leave a wound.</p>

<h2>Day 9: Arafah — the highest day</h2>

<p>The fast of Arafah (9 Dhul Hijjah) expiates the sins of the past year and the year to come (Muslim 1162). For adults, it is the most virtuous fast after Ramadan.</p>

<p>For children, the day can be filled with:</p>

<ul>
  <li><strong>Waking up together for suhoor</strong> even if the child won't fast — a family moment.</li>
  <li><strong>Watching the pilgrims at Arafah on broadcast</strong> — tell them that millions of Muslims are praying at the same spot.</li>
  <li><strong>Making dua together after Asr</strong> — the most accepted time at Arafah. A short prayer, hand in hand, for the child and the family.</li>
  <li><strong>Iftar at home</strong> — not a restaurant. Simple, warm, full of gratitude.</li>
</ul>

<h2>Day 10: Eid al-Adha</h2>

<p>Morning of Eid: shower, best clothes, prayer at the field or mosque. Bring the child — even the toddler. They may not be reverent. But they <em>see</em>.</p>

<p>After the prayer:</p>

<ul>
  <li><strong>Visit the sacrifice site</strong> — age-appropriate. Under 5 may be too young to watch the slaughter itself; that's fine, they can join in distributing the meat.</li>
  <li><strong>Explain gently</strong> that the animal is treated justly and with mercy, and its meat is shared with those in need.</li>
  <li><strong>Have them help deliver</strong> — a child handing one bag of meat to a neighbor learns the meaning of sharing more than a thousand words could teach.</li>
</ul>

<h2>Days 11–13: Tashriq</h2>

<p>The festival isn't over. The three days after Eid al-Adha are the days of Tashriq — fasting is forbidden, eating and remembrance encouraged. For children, these are small picnic days with extended family.</p>

<h2>A note for parents</h2>

<p>These ten days are not about your child memorizing everything. Not about completing a full fast. Not about long duas.</p>

<p>They're about <strong>one whole memory</strong> — the smell of suhoor food, the sound of takbir in the car, your father's hand holding theirs at Eid prayer, the meat handed to a neighbor.</p>

<p>Next year, the child may forget what you taught. But the memory that <em>these days were special</em> will stay long after you're no longer there to remind them.</p>

<p>That is the investment the Prophet ﷺ called <a href="/_/hadith/doa-anak-shalih/">a righteous child praying for their parent</a> — a reward that keeps flowing.</p>

<p>May Allah accept your fast, your prayer, and your sacrifice. Eid Mubarak.</p>`,
    },
    tags: ["dzulhijjah", "idul-adha", "ibadah-musiman", "parenting"],
    published: "2026-05-27",
    updated: "2026-05-27",
    readingTimeMin: 7,
    author: "tim-baby-mo",
  },

  // ─────────────────────────────────────────────────────────────────
  // 2. EVERGREEN — Mengajarkan sholat
  // ─────────────────────────────────────────────────────────────────
  {
    slug: "cara-mengajarkan-sholat-ke-anak",
    title: {
      id: "Cara Mengajarkan Sholat ke Anak 4–7 Tahun Tanpa Paksaan",
      en: "How to Teach Salah to Children 4–7 Without Force",
    },
    excerpt: {
      id: "Anak yang dipaksa sholat sering jadi dewasa yang menjauhinya. Pendekatan bertahap, lembut, dan menyenangkan terbukti jauh lebih efektif — dan justru lebih sesuai sunnah.",
      en: "Forced prayer often raises adults who avoid it. A gradual, gentle, and joyful approach proves more effective — and more in line with the Prophet's own method.",
    },
    body: {
      id: `<p>Setiap orang tua muslim ingin anaknya sholat lima waktu — bukan karena dipaksa, tapi karena cinta. Tapi tekanan untuk "menghasilkan" anak yang khusyuk sering membuat orang tua justru memaksa, dan paksaan menanam benih perlawanan jangka panjang.</p>

<p>Yang menarik: Rasulullah ﷺ sendiri tidak pernah memerintahkan anak kecil untuk sholat. Beliau memberikan kerangka waktu yang sangat jelas — dan itu jauh lebih lembut dari yang kebanyakan orang tua terapkan.</p>

<h2>Apa yang sebenarnya Rasulullah perintahkan</h2>

<blockquote>"Perintahkan anak-anak kalian untuk sholat ketika mereka berusia tujuh tahun, dan pukullah mereka (dengan lembut) jika belum sholat di usia sepuluh tahun, dan pisahkanlah tempat tidur mereka." — <strong>HR. Abu Dawud 495 (Hasan)</strong></blockquote>

<p>Tiga hal yang sering terlewat dari hadith ini:</p>

<ul>
  <li><strong>Tujuh tahun adalah awal pengenalan, bukan kewajiban penuh.</strong> Banyak ulama menjelaskan: di usia 7, anak <em>mulai diperintahkan</em> — belum berdosa jika meninggalkan.</li>
  <li><strong>"Pukulan" yang dimaksud bukan kekerasan.</strong> Ulama klasik menjelaskan ini sebagai teguran tegas atau isyarat disiplin, tidak melukai dan tidak meninggalkan bekas. Banyak yang justru menafsirkannya sebagai "perintah tegas".</li>
  <li><strong>Ada tiga tahun jeda</strong> — usia 7 sampai 10 — sebagai masa pembentukan kebiasaan. Tidak instan.</li>
</ul>

<p>Detail penerapan lebih lengkap di panduan parenting kami: <a href="/_/parenting/mulai-sholat/">Mengajarkan Sholat ke Anak</a>, dan referensi haditsnya di <a href="/_/hadith/perintah-sholat-tujuh-tahun/">Hadith Perintah Sholat di Tujuh Tahun</a>.</p>

<h2>Usia 3–4 tahun: Cukup mengamati</h2>

<p>Di usia ini, jangan ajarkan apapun. Cukup biarkan anak berada di dekat orang tua yang sedang sholat. Anak yang melihat ayahnya rukuk dan ibunya bersujud setiap hari menyerap pesan: <em>ini bagian dari hidup, sama seperti makan dan tidur</em>.</p>

<p>Jangan larang anak mendekat. Anak yang ditegur saat mengganggu sholat akan mengasosiasikan sholat dengan ketegangan. Rasulullah ﷺ sendiri pernah sholat sambil menggendong cucunya, Umamah.</p>

<h2>Usia 5–6 tahun: Mulai gerakan</h2>

<p>Anak mulai bisa diajak ikut gerakan sholat — takbir, rukuk, sujud. Belum perlu khusyuk. Belum perlu hafal semua bacaan. Yang penting:</p>

<ul>
  <li>Ajarkan <strong>takbiratul ihram</strong> dan satu surat pendek — Al-Ikhlas adalah pilihan klasik (pendek, mudah, indah).</li>
  <li>Beri <strong>sajadah dan perlengkapan sholat</strong> yang anak pilih sendiri. Rasa kepemilikan penting.</li>
  <li>Sesekali, ajak <strong>sholat berjamaah di rumah</strong> — Maghrib adalah waktu yang biasanya kompatibel dengan jadwal anak.</li>
</ul>

<h2>Usia 7 tahun: Mulai 5 waktu — tapi bertahap</h2>

<p>Usia 7 bukan sakelar yang tiba-tiba menyala. Pertimbangkan tahapan ini:</p>

<ul>
  <li><strong>Bulan 1–2:</strong> Maghrib dan Isya saja. Kedua waktu ini paling mudah karena keluarga sudah berkumpul di rumah.</li>
  <li><strong>Bulan 3–4:</strong> Tambahkan Subuh. Bangunkan dengan lembut, bukan kasar. Sholat lalu boleh kembali tidur jika belum sekolah.</li>
  <li><strong>Bulan 5–6:</strong> Tambahkan Dzuhur. Saat sekolah, ajarkan tempat berwudhu dan sholat di sekolah.</li>
  <li><strong>Bulan 7+:</strong> Lima waktu lengkap. Tetap dengan toleransi terhadap kelalaian sesekali — anak masih belajar.</li>
</ul>

<h2>Lima hal yang harus dihindari</h2>

<ol>
  <li><strong>Membandingkan dengan anak lain</strong> — "Lihat sepupumu, dia sudah hafal semua surat pendek." Pembandingan menanam rasa tidak cukup.</li>
  <li><strong>Mempermalukan di depan tamu</strong> — "Coba tunjukkan ke om, gimana kakak sholat." Itu jadi pertunjukan, bukan ibadah.</li>
  <li><strong>Membentak saat anak salah gerakan</strong> — anak yang takut tidak bisa fokus. <a href="/_/hadith/kelembutan-keindahan/">Kelembutan menghiasi segalanya</a>.</li>
  <li><strong>Menjadikan sholat sebagai hukuman</strong> — "Kalau nakal, kamu sholat sekarang juga!" Ini menghancurkan asosiasi positif.</li>
  <li><strong>Memberi imbalan materi yang besar</strong> — sholat untuk dapat hadiah mengajar anak transaksi, bukan ibadah.</li>
</ol>

<h2>Lima hal yang harus dibiasakan</h2>

<ol>
  <li><strong>Memuji usaha, bukan hasil</strong> — "Mama suka caranya kakak rukuk pelan-pelan."</li>
  <li><strong>Sholat berjamaah keluarga</strong> minimal satu kali sehari. Bonding sekaligus belajar.</li>
  <li><strong>Doa untuk anak</strong> dengan menyebut namanya, di depan dia, setelah sholat.</li>
  <li><strong>Sajadah favorit, mukena/peci yang anak pilih</strong> — kepemilikan membentuk identitas.</li>
  <li><strong>Cerita Rasulullah dan sholatnya</strong> — anak suka karakter. Jadikan Rasulullah ﷺ pahlawannya.</li>
</ol>

<h2>Saat anak menolak — apa yang dilakukan</h2>

<p>Pasti akan ada hari di mana anak menolak sholat. Tidak apa-apa. Tarik nafas. Ingat: ini perjalanan panjang.</p>

<ul>
  <li>Jangan paksa fisik. Tarik mundur, evaluasi kapan terakhir kali kamu memuji.</li>
  <li>Tanya dengan tenang: "Adik kenapa ga mau sholat? Mama mau dengar."</li>
  <li>Jika anak sedang kelelahan atau sakit, beri keringanan. Allah Maha Penyayang.</li>
  <li>Jika ini pola — bukan kejadian satu kali — periksa apakah ada paksaan yang membuat anak resisten. Mungkin saatnya pendekatan diperbaharui.</li>
</ul>

<h2>Yang paling penting</h2>

<p>Anak meniru, bukan mendengar. Orang tua yang sholatnya tergesa-gesa sambil melihat HP tidak bisa berharap anak khusyuk. Orang tua yang menggerutu saat adzan tidak bisa berharap anak rindu sholat.</p>

<p>Sholat anakmu dimulai dari sholatmu sendiri. Itu pelajaran yang paling jujur dan paling sulit.</p>

<p>Lihat juga hadith pendukung: <a href="/_/hadith/muliakan-anak/">Muliakan dan didik anak-anakmu</a>.</p>`,

      en: `<p>Every Muslim parent wants their child to pray the five daily prayers — not from coercion, but from love. Yet the pressure to "produce" a devout child often pushes parents into force, and force plants seeds of long-term resistance.</p>

<p>What's striking: the Prophet ﷺ never commanded young children to pray. He set a very clear timeline — and it's far gentler than what most parents enforce.</p>

<h2>What the Prophet actually said</h2>

<blockquote>"Command your children to pray when they are seven, and discipline them gently at ten if they neglect it, and separate their bedding." — <strong>Abu Dawud 495 (Hasan)</strong></blockquote>

<p>Three things this hadith makes clear that are often missed:</p>

<ul>
  <li><strong>Seven is the start of introduction, not full obligation.</strong> Many scholars explain: at 7, the child <em>begins to be instructed</em> — they don't yet sin by skipping.</li>
  <li><strong>The "discipline" referenced is not violence.</strong> Classical scholars explain it as firm correction or a disciplinary signal — never injury, never marks. Many interpret it as "firm command" rather than physical action.</li>
  <li><strong>There's a three-year window</strong> — 7 to 10 — for habit-formation. Not instant.</li>
</ul>

<p>Full practical detail in our parenting guide: <a href="/_/parenting/mulai-sholat/">Teaching a Child to Pray</a>, with the hadith reference at <a href="/_/hadith/perintah-sholat-tujuh-tahun/">Teach prayer at seven</a>.</p>

<h2>Ages 3–4: Just let them watch</h2>

<p>At this age, teach nothing explicit. Just let the child be near you when you pray. A child who sees their father bow and their mother prostrate every day absorbs the message: <em>this is part of life, like eating and sleeping</em>.</p>

<p>Don't push them away. A child scolded for "interrupting" prayer associates prayer with tension. The Prophet ﷺ himself once prayed while carrying his granddaughter Umamah.</p>

<h2>Ages 5–6: Begin the movements</h2>

<p>The child can now join the motions — takbir, ruku, sujud. No need for full focus. No need to memorize everything. What matters:</p>

<ul>
  <li>Teach <strong>takbiratul ihram</strong> and one short surah — Al-Ikhlas is the classic choice (short, simple, beautiful).</li>
  <li>Provide <strong>a prayer mat and clothes the child picks themselves</strong>. Ownership matters.</li>
  <li>Occasionally, do <strong>family congregational prayer</strong> — Maghrib usually aligns with a child's schedule.</li>
</ul>

<h2>Age 7: Begin five daily prayers — gradually</h2>

<p>Seven isn't a switch that suddenly flips. Consider this progression:</p>

<ul>
  <li><strong>Months 1–2:</strong> Maghrib and Isha only. Both fall when the family is home anyway.</li>
  <li><strong>Months 3–4:</strong> Add Fajr. Wake them gently, never harshly. They can return to bed after if it's not a school day.</li>
  <li><strong>Months 5–6:</strong> Add Dhuhr. For school-age kids, teach where to make wudhu and pray at school.</li>
  <li><strong>Month 7+:</strong> All five. Tolerate occasional lapses — they're still learning.</li>
</ul>

<h2>Five things to avoid</h2>

<ol>
  <li><strong>Comparing with other children</strong> — "Look at your cousin, she already knows all the surahs." Comparison plants insufficiency.</li>
  <li><strong>Shaming in front of guests</strong> — "Show uncle how you pray." That makes it a performance, not worship.</li>
  <li><strong>Yelling when they make mistakes</strong> — a frightened child can't focus. <a href="/_/hadith/kelembutan-keindahan/">Gentleness beautifies everything</a>.</li>
  <li><strong>Using prayer as punishment</strong> — "If you misbehave, pray now!" That kills positive association.</li>
  <li><strong>Giving big material rewards</strong> — prayer for prizes teaches transaction, not worship.</li>
</ol>

<h2>Five habits to build</h2>

<ol>
  <li><strong>Praise the effort, not the outcome</strong> — "I liked how slowly you did ruku."</li>
  <li><strong>Family congregational prayer</strong> at least once a day. Bonding plus learning.</li>
  <li><strong>Dua for your child by name</strong>, in front of them, after prayer.</li>
  <li><strong>Their own prayer mat, their own clothes</strong> — ownership shapes identity.</li>
  <li><strong>Stories about the Prophet's prayer</strong> — children love characters. Make the Prophet ﷺ their hero.</li>
</ol>

<h2>When the child refuses — what to do</h2>

<p>There will be days when your child refuses. That's normal. Breathe. Remember: this is a long road.</p>

<ul>
  <li>Don't force physically. Step back, audit when you last praised them.</li>
  <li>Ask calmly: "Why don't you want to pray? I want to hear."</li>
  <li>If they're tired or sick, give them a pass. Allah is Most Merciful.</li>
  <li>If this is a pattern — not a one-off — check whether coercion has built up resistance. It may be time to reset the approach.</li>
</ul>

<h2>The hardest truth</h2>

<p>Children imitate, they don't listen. A parent who rushes through prayer while checking their phone cannot expect a focused child. A parent who grumbles at adhan cannot expect a child who longs for prayer.</p>

<p>Your child's prayer begins with your prayer. That is the most honest and most difficult lesson.</p>

<p>See also: <a href="/_/hadith/muliakan-anak/">Honor and educate your children</a>.</p>`,
    },
    tags: ["sholat", "tarbiyah", "parenting", "tujuh-tahun"],
    published: "2026-05-26",
    updated: "2026-05-26",
    readingTimeMin: 9,
    author: "tim-baby-mo",
  },

  // ─────────────────────────────────────────────────────────────────
  // 3. EVERGREEN — Doa harian hub
  // ─────────────────────────────────────────────────────────────────
  {
    slug: "doa-harian-anak-sebelum-usia-7",
    title: {
      id: "12 Doa Harian yang Wajib Diajarkan ke Anak Sebelum Usia 7 Tahun",
      en: "12 Daily Duas Every Muslim Child Should Learn Before Age 7",
    },
    excerpt: {
      id: "Bukan tentang menghafal sebanyak mungkin, tapi menanamkan kebiasaan terhubung dengan Allah di setiap aktivitas harian. Daftar lengkap dengan teks Arab, transliterasi, dan cara mengajarkannya.",
      en: "Not about memorizing as many as possible, but planting the habit of staying connected to Allah throughout the day. Full list with Arabic, transliteration, and how to teach each one.",
    },
    body: {
      id: `<p>Banyak orang tua merasa kewalahan saat memikirkan harus mengajarkan berapa banyak doa kepada anak. Daftar di Google panjang. Buku doa anak tebal. Anak baru hafal satu, sudah disodorkan lima yang lain.</p>

<p>Sebenarnya, daftar inti yang paling penting jauh lebih pendek dari yang dibayangkan — dan jauh lebih bisa dicapai. Berikut 12 doa yang sebaiknya anak <strong>kenal</strong> (bukan harus hafal sempurna) sebelum usia 7 tahun.</p>

<h2>Kenapa kebiasaan ini penting</h2>

<p>Anak yang mengucap <em>Bismillah</em> sebelum makan dan <em>Alhamdulillah</em> setelahnya bukan sekadar menjalankan ritual — dia sedang membentuk koneksi sehari-hari dengan Allah. Otaknya belajar bahwa hidup punya nara-sumber, bahwa makanan datang dari Yang Memberi, bahwa setiap aktivitas bisa diawali dengan rasa syukur.</p>

<blockquote>Tidak ada pemberian seorang ayah kepada anaknya yang lebih utama dari pada (mengajarkan) adab yang baik. — <strong>HR. Tirmidzi 1952 (Hasan)</strong></blockquote>

<p>Detail referensi hadith: <a href="/_/hadith/hadiah-terbaik-adab/">Hadiah terbaik adalah adab</a>.</p>

<h2>Doa wajib hafal (tier 1) — 7 inti</h2>

<h3>1. Doa Sebelum Tidur</h3>
<p><strong>Bismika Allahumma amutu wa ahya</strong> — Dengan nama-Mu ya Allah aku mati dan aku hidup. Doa pendek, dibaca menutup hari. Selengkapnya di <a href="/_/doa/sebelum-tidur/">Doa Sebelum Tidur</a>.</p>

<h3>2. Doa Bangun Tidur</h3>
<p><strong>Alhamdulillahilladzi ahyana ba'da ma amatana</strong> — Segala puji bagi Allah yang menghidupkan kami setelah mematikan kami. Pembuka hari. <a href="/_/doa/bangun-tidur/">Selengkapnya</a>.</p>

<h3>3. Doa Sebelum Makan</h3>
<p><strong>Bismillah</strong> — Satu kata. Mungkin doa termudah yang akan anak pelajari, dan paling sering diulang. <a href="/_/doa/sebelum-makan/">Selengkapnya</a>.</p>

<h3>4. Doa Sesudah Makan</h3>
<p><strong>Alhamdulillahilladzi at'amana wa saqana wa ja'alana muslimin</strong> — Syukur setelah makan dan minum. <a href="/_/doa/sesudah-makan/">Selengkapnya</a>.</p>

<h3>5. Doa Masuk Kamar Mandi</h3>
<p><strong>Allahumma inni a'udzubika minal khubutsi wal khaba'its</strong> — Perlindungan. <a href="/_/doa/masuk-kamar-mandi/">Selengkapnya</a>.</p>

<h3>6. Doa Keluar Kamar Mandi</h3>
<p><strong>Ghufranaka</strong> — Aku memohon ampunan-Mu. Satu kata. <a href="/_/doa/keluar-kamar-mandi/">Selengkapnya</a>.</p>

<h3>7. Doa Naik Kendaraan</h3>
<p><strong>Subhanalladzi sakhkhara lana hadza</strong> — Doa keseharian zaman modern. <a href="/_/doa/naik-kendaraan/">Selengkapnya</a>.</p>

<h2>Doa anjuran (tier 2) — 5 tambahan</h2>

<p>Setelah tujuh inti di atas dikenal, lima berikut ini bisa ditambahkan secara bertahap. Tidak terburu-buru.</p>

<ul>
  <li><strong>Doa keluar rumah:</strong> <em>Bismillahi tawakkaltu 'alallah, la haula wa la quwwata illa billah</em></li>
  <li><strong>Doa masuk rumah:</strong> <em>Bismillahi walajna, wa bismillahi kharajna, wa 'ala rabbina tawakkalna</em></li>
  <li><strong>Doa ketika hujan:</strong> <em>Allahumma shayyiban nafi'an</em></li>
  <li><strong>Doa ketika bersin (bagi yang bersin):</strong> <em>Alhamdulillah</em></li>
  <li><strong>Doa untuk orang tua:</strong> <em>Rabbighfirli wa liwalidayya warhamhuma kama rabbayani shaghira</em></li>
</ul>

<h2>Cara mengajarkan: 5 prinsip yang terbukti</h2>

<h3>1. Satu doa per minggu, bukan satu per hari</h3>

<p>Otak balita butuh waktu konsolidasi. Mengajarkan tujuh doa dalam seminggu berakhir dengan tidak ada satupun yang menempel. Ajarkan satu, ulang setiap hari di momennya, selama minggu penuh.</p>

<h3>2. Selalu di momennya — bukan saat duduk belajar</h3>

<p>Doa makan diajarkan saat anak akan makan, bukan saat duduk di meja belajar. Doa kamar mandi saat anak akan ke kamar mandi. Otak menyimpan informasi yang terkoneksi dengan konteks fisik jauh lebih kuat.</p>

<h3>3. Orang tua membaca dulu, anak menirukan</h3>

<p>Jangan tanya "ingat ga doanya?". Orang tua yang membaca dulu dengan keras, anak akan ikut menirukan. Repetisi tanpa tekanan adalah kunci.</p>

<h3>4. Tidak ada hukuman jika lupa</h3>

<p>Anak yang lupa doa sebelum makan jangan dimarahi. Cukup berkata santai, "Lupa Bismillah ya? Yuk diulang." Asosiasi dengan doa harus positif.</p>

<h3>5. Modelkan, jangan hanya mengajarkan</h3>

<p>Orang tua yang lupa membaca Bismillah saat makan, tapi marah saat anak lupa, sedang mengajarkan kemunafikan kecil. Anak melihat lebih dari apa yang didengar.</p>

<h2>Berapa lama sampai kebiasaan ini terbentuk?</h2>

<p>Bagi sebagian besar anak: <strong>3 bulan konsisten</strong> untuk lima doa pertama menjadi otomatis. Setelah 6 bulan, anak biasanya membacanya sendiri tanpa diingatkan.</p>

<p>Bagi anak yang lebih perlu waktu, beri waktu. Tidak ada balapan. Yang penting bukan kapan, tapi bahwa anak <em>mulai</em> dan kebiasaan ini menjadi bagian hidupnya.</p>

<h2>Setelah usia 7</h2>

<p>Setelah tujuh tahun, anak biasanya sudah mengenal sebagian besar doa di atas. Saatnya pelan-pelan memperkenalkan doa-doa sunnah lainnya — doa setelah sholat, dzikir pagi/petang, dan surat-surat pendek.</p>

<p>Tapi yang paling penting: jangan ganti fondasi yang sudah terbentuk dengan ambisi baru. Doa harian ini akan menemani anak seumur hidup. Itu sudah cukup.</p>

<p>Jelajahi seluruh koleksi doa di <a href="/_/doa/">halaman Doa Baby Mo</a>.</p>`,

      en: `<p>Many parents feel overwhelmed thinking about how many duas to teach their child. Google lists are long. Children's dua books are thick. The child has barely memorized one when five more get pushed at them.</p>

<p>The truth is, the core list that matters most is much shorter than imagined — and far more reachable. Here are 12 duas a child should <strong>recognize</strong> (not have to perfect) before age 7.</p>

<h2>Why this habit matters</h2>

<p>A child who says <em>Bismillah</em> before eating and <em>Alhamdulillah</em> after isn't merely performing a ritual — they're forming a daily connection to Allah. Their brain learns that life has a source, that food comes from the Giver, that every act can begin with gratitude.</p>

<blockquote>A father has not given his child a better gift than good manners. — <strong>Tirmidhi 1952 (Hasan)</strong></blockquote>

<p>Reference: <a href="/_/hadith/hadiah-terbaik-adab/">The best gift is good manners</a>.</p>

<h2>Must-know (tier 1) — the core 7</h2>

<h3>1. Bedtime dua</h3>
<p><strong>Bismika Allahumma amutu wa ahya</strong> — In Your name, O Allah, I die and I live. Short, closes the day. Full text at <a href="/_/doa/sebelum-tidur/">Dua Before Sleeping</a>.</p>

<h3>2. Upon waking</h3>
<p><strong>Alhamdulillahilladzi ahyana ba'da ma amatana</strong> — All praise to Allah Who gave us life after taking it. Opens the day. <a href="/_/doa/bangun-tidur/">Full text</a>.</p>

<h3>3. Before eating</h3>
<p><strong>Bismillah</strong> — One word. Possibly the easiest dua a child will learn, and the most often repeated. <a href="/_/doa/sebelum-makan/">Full text</a>.</p>

<h3>4. After eating</h3>
<p><strong>Alhamdulillahilladzi at'amana wa saqana wa ja'alana muslimin</strong> — Gratitude after food and drink. <a href="/_/doa/sesudah-makan/">Full text</a>.</p>

<h3>5. Entering the bathroom</h3>
<p><strong>Allahumma inni a'udzubika minal khubutsi wal khaba'its</strong> — Protection. <a href="/_/doa/masuk-kamar-mandi/">Full text</a>.</p>

<h3>6. Leaving the bathroom</h3>
<p><strong>Ghufranaka</strong> — Your forgiveness. One word. <a href="/_/doa/keluar-kamar-mandi/">Full text</a>.</p>

<h3>7. Boarding a vehicle</h3>
<p><strong>Subhanalladzi sakhkhara lana hadza</strong> — The modern-life dua. <a href="/_/doa/naik-kendaraan/">Full text</a>.</p>

<h2>Recommended (tier 2) — 5 more</h2>

<p>Once the core seven are familiar, the next five can come in gradually. No rush.</p>

<ul>
  <li><strong>Leaving the house:</strong> <em>Bismillahi tawakkaltu 'alallah, la haula wa la quwwata illa billah</em></li>
  <li><strong>Entering the house:</strong> <em>Bismillahi walajna, wa bismillahi kharajna, wa 'ala rabbina tawakkalna</em></li>
  <li><strong>When it rains:</strong> <em>Allahumma shayyiban nafi'an</em></li>
  <li><strong>After sneezing (for the one who sneezed):</strong> <em>Alhamdulillah</em></li>
  <li><strong>For one's parents:</strong> <em>Rabbighfirli wa liwalidayya warhamhuma kama rabbayani shaghira</em></li>
</ul>

<h2>How to teach: 5 proven principles</h2>

<h3>1. One dua a week, not one a day</h3>

<p>Toddler brains need time to consolidate. Teaching seven duas in one week ends with none of them sticking. Teach one, repeat it daily in its moment, for the whole week.</p>

<h3>2. Always in its moment — not at a study desk</h3>

<p>The meal dua is taught when the child is about to eat, not at a study table. The bathroom dua when they're about to go. The brain stores information linked to physical context far more strongly.</p>

<h3>3. Parent reads first, child echoes</h3>

<p>Don't ask "do you remember the dua?". The parent reads aloud first, the child follows. Repetition without pressure is the key.</p>

<h3>4. No punishment for forgetting</h3>

<p>A child who forgets Bismillah before eating shouldn't be scolded. Just say calmly, "Forgot Bismillah? Let's say it now." The association with the dua must stay positive.</p>

<h3>5. Model it, don't just teach it</h3>

<p>A parent who forgets Bismillah at meals but scolds the child for forgetting is teaching a small hypocrisy. Children see far more than they hear.</p>

<h2>How long until it sticks?</h2>

<p>For most children: <strong>3 months of consistency</strong> for the first five duas to become automatic. After 6 months, the child usually says them unprompted.</p>

<p>For children who need longer, give them longer. There's no race. What matters isn't when, but that the child <em>begins</em> and these become part of their life.</p>

<h2>After age 7</h2>

<p>By seven, most children know most of the duas above. Time to gently introduce other sunnah duas — post-prayer adhkar, morning and evening dhikr, short surahs.</p>

<p>But the most important rule: don't replace the foundation you've built with new ambition. These daily duas will accompany your child for life. That alone is enough.</p>

<p>Browse the full collection at <a href="/_/doa/">Baby Mo Duas</a>.</p>`,
    },
    tags: ["doa", "edukasi", "hijaiyah-doa", "balita"],
    published: "2026-05-25",
    updated: "2026-05-25",
    readingTimeMin: 8,
    author: "tim-baby-mo",
  },

  // ─────────────────────────────────────────────────────────────────
  // 4. EVERGREEN — Marah ke anak (high empathy, high share)
  // ─────────────────────────────────────────────────────────────────
  {
    slug: "saat-orang-tua-marah-ke-anak",
    title: {
      id: "Saat Orang Tua Marah ke Anak: Cara Sunnah Meredakannya",
      en: "When Parents Lose Their Temper: The Sunnah Way to Calm Down",
    },
    excerpt: {
      id: "Setiap orang tua pernah marah. Pertanyaannya bukan 'bagaimana tidak marah', tapi 'bagaimana marah tidak melukai anak'. Lima langkah dari sunnah Rasulullah ﷺ untuk meredakan amarah.",
      en: "Every parent has lost their temper. The question isn't 'how to never get angry', it's 'how to be angry without wounding your child'. Five steps from the Sunnah for cooling anger down.",
    },
    body: {
      id: `<p>Setiap orang tua muslim pernah marah ke anak. Setiap satu. Yang berbeda bukanlah seberapa sering — tapi seberapa cepat amarah itu mereda, dan apa yang dilakukan setelahnya.</p>

<p>Tulisan ini bukan tentang menjadi orang tua sempurna yang tidak pernah marah. Itu mustahil. Ini tentang bagaimana sunnah Rasulullah ﷺ memberikan kita protokol yang sangat praktis — bahkan ilmiah — untuk meredakan amarah sebelum melukai jiwa yang paling kita sayangi.</p>

<h2>Marah adalah manusiawi. Membiarkannya merusak adalah pilihan</h2>

<p>Rasulullah ﷺ sendiri pernah disebut marah — tapi marahnya tidak pernah meninggalkan bekas pada hubungannya dengan keluarga. Beliau memberikan kita lima langkah konkret yang bisa dilakukan dalam 30 detik.</p>

<p>Sebelum lanjut, mari sepakati satu hal: orang tua yang sering marah bukan orang tua yang buruk. Sering kali itu tanda kelelahan, kurang tidur, tekanan kerja, atau pola dari masa kecil sendiri. Kasihanilah dirimu juga.</p>

<h2>Lima langkah dari sunnah</h2>

<h3>1. Ta'awwudz: minta perlindungan</h3>

<p>Saat panas mulai naik di dada, ucapkan dalam hati atau dengan suara pelan: <strong>A'udzu billahi minasy-syaithonir-rajim</strong>. Aku berlindung kepada Allah dari setan yang terkutuk.</p>

<p>Rasulullah ﷺ mengajarkan ini saat melihat dua orang yang bertengkar — beliau berkata bahwa jika salah satu mengucap ta'awwudz, amarahnya akan hilang. Banyak orang tua membuktikan ini bekerja secara fisik: hanya dengan mengucap kalimat ini, denyut jantung menurun.</p>

<h3>2. Ganti posisi</h3>

<p>Rasulullah ﷺ menganjurkan: jika sedang berdiri, duduklah. Jika masih marah, berbaringlah. Perubahan postur fisik mengubah kondisi mental.</p>

<p>Riset neurosains modern mengkonfirmasi ini — duduk menurunkan respons "fight or flight" lebih cepat daripada tetap berdiri menjulang di atas anak. Ini juga membuat orang tua lebih sejajar dengan tinggi anak, yang otomatis melembutkan komunikasi.</p>

<h3>3. Ambil wudhu</h3>

<p>"Marah berasal dari setan, dan setan diciptakan dari api. Api dipadamkan dengan air." (HR. Abu Dawud)</p>

<p>Air dingin yang menyentuh tangan, mulut, dan wajah saat wudhu adalah fisiologi pendinginan yang nyata. Hanya 60 detik ini sering kali cukup untuk memutus reaksi amarah.</p>

<h3>4. Diam, jangan bicara</h3>

<p>Rasulullah ﷺ bersabda: "Jika salah seorang di antara kalian marah, hendaklah ia diam." (HR. Ahmad)</p>

<p>Sebagian besar luka jangka panjang yang ditinggalkan orang tua bukan pukulan — tapi kata-kata yang terucap saat marah. "Kamu menyusahkan." "Mama nyesel punya anak kayak kamu." Kata-kata ini, sekali keluar, tidak bisa ditarik.</p>

<p>Lebih buruk lagi: ucapan kemarahan orang tua bisa menjadi doa yang dikabulkan. Rasulullah ﷺ memperingatkan ini secara eksplisit: <a href="/_/hadith/tidak-mendoakan-buruk-anak/">jangan mendoakan keburukan untuk anak-anakmu</a>.</p>

<h3>5. Tinggalkan ruangan, sebentar saja</h3>

<p>Jika empat langkah di atas belum cukup, tidak apa-apa untuk meninggalkan ruangan 60 detik. Bukan untuk menghukum anak — tapi untuk melindungi anak dari versi terburuk dirimu.</p>

<p>Pastikan anak aman dulu (terutama balita), lalu pergi ke kamar mandi atau dapur. Ambil nafas. Kembali setelah tenang.</p>

<h2>Yang anak butuhkan, bukan orang tua sempurna</h2>

<p>Anak tidak butuh orang tua yang tidak pernah marah. Anak butuh orang tua yang <strong>memodelkan</strong> bagaimana mengelola marah.</p>

<p>Anak yang melihat ayahnya bilang "Maaf ya, ayah tadi marah karena capek, bukan karena adik salah" sedang belajar pelajaran paling penting: <em>orang dewasa pun harus bertanggung jawab atas emosinya</em>.</p>

<p>Anak yang melihat ibunya pergi wudhu saat hampir membentak sedang belajar protokol regulasi emosi yang akan dia bawa sampai dewasa.</p>

<blockquote>Sesungguhnya kelembutan tidaklah ada pada sesuatu, kecuali akan menghiasinya. Dan tidaklah kelembutan itu dicabut dari sesuatu, kecuali akan memburukkannya. — <strong>HR. Muslim 2594</strong></blockquote>

<p>Selengkapnya: <a href="/_/hadith/kelembutan-keindahan/">Kelembutan menghiasi segalanya</a>.</p>

<h2>Yang dilakukan setelah terlanjur marah</h2>

<p>Pasti ada saat di mana lima langkah di atas gagal — kamu sudah terlanjur membentak. Tidak apa-apa. Yang menentukan bukan kejadian tunggal, tapi apa yang kamu lakukan setelahnya.</p>

<ol>
  <li><strong>Beri ruang anak tenang.</strong> Jangan langsung peluk atau minta maaf — itu memburu mereka. Tunggu 5–10 menit.</li>
  <li><strong>Datang di ketinggian mereka.</strong> Jongkok, duduk di samping. Jangan menjulang.</li>
  <li><strong>Minta maaf dengan jujur.</strong> "Mama tadi marah dan suaranya keras. Mama minta maaf. Kamu ga salah." Tidak ada "tapi…". Permintaan maaf yang ada "tapi" bukan permintaan maaf.</li>
  <li><strong>Tanya bagaimana perasaannya.</strong> "Kamu merasa kaget tadi ya?"</li>
  <li><strong>Janji yang bisa ditepati.</strong> "Mama akan coba lebih tenang lain kali." Bukan "Mama tidak akan pernah marah lagi" — itu janji yang akan dilanggar.</li>
</ol>

<h2>Bila pola ini berulang setiap minggu</h2>

<p>Jika kamu mendapati dirimu marah berlebihan di pola yang sama berulang — selalu di jam tertentu, selalu dengan pemicu yang sama — itu sinyal bahwa ada akar yang perlu diobati, bukan sekadar reaksi yang perlu ditahan.</p>

<p>Akar yang paling sering:</p>

<ul>
  <li>Kurang tidur kronis</li>
  <li>Lapar yang tidak diperhatikan</li>
  <li>Tekanan kerja yang dibawa pulang</li>
  <li>Trauma kecil dari masa kecil sendiri yang ter-trigger</li>
  <li>Pasangan yang tidak terlibat sehingga beban menumpuk di satu pihak</li>
</ul>

<p>Bicarakan dengan pasangan, dengan sahabat, atau dengan profesional. Mengakui ada masalah bukan kelemahan — itu langkah pertama untuk tidak mewariskan pola yang sama ke anak.</p>

<h2>Penutup: ini bukan tentang kamu</h2>

<p>Setiap orang tua yang membaca tulisan ini sampai bagian ini adalah orang tua yang <em>peduli</em>. Itu sudah lebih dari banyak orang. Anak-anakmu beruntung punya orang tua yang masih mau belajar.</p>

<p>Marahmu yang lalu, dengan tobat yang tulus, akan dimaafkan Allah. Marahmu yang akan datang — dengan lima langkah di atas — bisa dilemahkan sebelum melukai.</p>

<p>Detail penerapan ada di panduan <a href="/_/parenting/marah-orang-tua/">Ketika Orang Tua Marah</a>.</p>

<p>Semoga Allah memberi kita kesabaran. Aamiin.</p>`,

      en: `<p>Every Muslim parent has lost their temper with their child. Every single one. The difference isn't how often — it's how quickly the anger eases, and what's done afterward.</p>

<p>This article isn't about becoming a perfect parent who never gets angry. That's impossible. It's about how the Sunnah of the Prophet ﷺ gives us a deeply practical — even neurologically sound — protocol for cooling anger before it wounds the soul we love most.</p>

<h2>Anger is human. Letting it damage is a choice</h2>

<p>The Prophet ﷺ himself was described as becoming angry — but his anger never left scars on his family. He gave us five concrete steps that can be done in 30 seconds.</p>

<p>Before continuing, let's agree on one thing: a parent who often gets angry isn't a bad parent. It's often a sign of exhaustion, sleep debt, work pressure, or patterns from one's own childhood. Be merciful to yourself, too.</p>

<h2>Five steps from the Sunnah</h2>

<h3>1. Ta'awwudz: seek protection</h3>

<p>When the heat starts rising in your chest, say silently or softly: <strong>A'udhu billahi minash-shaytanir-rajim</strong>. I seek refuge in Allah from the accursed Satan.</p>

<p>The Prophet ﷺ taught this when he saw two men arguing — he said that if either had said ta'awwudz, his anger would have left. Many parents prove this works physiologically: just speaking the phrase lowers heart rate.</p>

<h3>2. Change posture</h3>

<p>The Prophet ﷺ instructed: if you are standing, sit. If you are still angry, lie down. A physical change shifts the mental state.</p>

<p>Modern neuroscience confirms this — sitting reduces the "fight or flight" response faster than towering over a child. It also brings you closer to the child's height, which softens communication automatically.</p>

<h3>3. Perform wudhu</h3>

<p>"Anger is from Satan, and Satan was created from fire. Fire is extinguished with water." (Abu Dawud)</p>

<p>The cold water touching your hands, mouth, and face during wudhu is real cooling physiology. Sixty seconds is often enough to break the anger reaction.</p>

<h3>4. Be silent, don't speak</h3>

<p>The Prophet ﷺ said: "If one of you becomes angry, let him be silent." (Ahmad)</p>

<p>Most of the long-term wounds parents leave aren't blows — they're words spoken in anger. "You're such a burden." "I regret having you." Words like these, once out, cannot be taken back.</p>

<p>Worse: an angry parent's words can become invoked prayers. The Prophet ﷺ warned us about this explicitly: <a href="/_/hadith/tidak-mendoakan-buruk-anak/">do not invoke evil against your children</a>.</p>

<h3>5. Leave the room, just briefly</h3>

<p>If the four steps above aren't enough, it's okay to leave the room for 60 seconds. Not to punish the child — but to protect the child from your worst version.</p>

<p>Make sure the child is safe first (especially toddlers), then step to the bathroom or kitchen. Breathe. Return when calmer.</p>

<h2>Children don't need perfect parents</h2>

<p>Your child doesn't need a parent who never gets angry. They need a parent who <strong>models</strong> how to manage anger.</p>

<p>A child who sees their father say "Sorry, I got angry because I was tired, not because of you" learns the most important lesson: <em>adults are responsible for their emotions, too</em>.</p>

<p>A child who sees their mother go to make wudhu before snapping is learning an emotion-regulation protocol they'll carry into adulthood.</p>

<blockquote>Gentleness is not found in anything except that it beautifies it, and it is not removed from anything except that it disfigures it. — <strong>Muslim 2594</strong></blockquote>

<p>Full text: <a href="/_/hadith/kelembutan-keindahan/">Gentleness beautifies everything</a>.</p>

<h2>What to do after you've already lost it</h2>

<p>There will be times when the five steps fail — you've already raised your voice. That's fine. What matters isn't the single incident, it's what you do afterward.</p>

<ol>
  <li><strong>Give your child space to calm down.</strong> Don't immediately hug or apologize — that's chasing them. Wait 5–10 minutes.</li>
  <li><strong>Come down to their level.</strong> Crouch, sit beside them. Don't tower.</li>
  <li><strong>Apologize honestly.</strong> "I got angry and my voice was loud. I'm sorry. You didn't deserve that." No "but…". An apology with a "but" isn't an apology.</li>
  <li><strong>Ask how they feel.</strong> "Did that scare you?"</li>
  <li><strong>Make a promise you can keep.</strong> "I'll try to stay calmer next time." Not "I'll never get angry again" — that's a promise you'll break.</li>
</ol>

<h2>When this pattern repeats weekly</h2>

<p>If you find yourself losing it on the same schedule — always at the same hour, with the same trigger — that's a signal that something needs treating at the root, not just reactions to suppress.</p>

<p>Most common roots:</p>

<ul>
  <li>Chronic sleep debt</li>
  <li>Unattended hunger</li>
  <li>Work stress brought home</li>
  <li>Small traumas from your own childhood being re-triggered</li>
  <li>A partner who isn't involved, so the load piles on one side</li>
</ul>

<p>Talk to your spouse, a close friend, or a professional. Admitting there's a problem isn't weakness — it's the first step toward not passing the same pattern to your child.</p>

<h2>Closing: this isn't about you</h2>

<p>Every parent who reads this article to the end is a parent who <em>cares</em>. That alone is more than many. Your children are fortunate to have a parent still willing to learn.</p>

<p>Your past anger, with sincere repentance, will be forgiven by Allah. Your future anger — with the five steps above — can be weakened before it wounds.</p>

<p>Practical detail in our parenting guide: <a href="/_/parenting/marah-orang-tua/">When You Lose Your Temper</a>.</p>

<p>May Allah grant us patience. Ameen.</p>`,
    },
    tags: ["emosi", "parenting", "akhlak", "sunnah"],
    published: "2026-05-24",
    updated: "2026-05-24",
    readingTimeMin: 9,
    author: "tim-baby-mo",
  },

  // ─────────────────────────────────────────────────────────────────
  // 5. EVERGREEN — Mengajak anak ke masjid
  // ─────────────────────────────────────────────────────────────────
  {
    slug: "mengajak-anak-ke-masjid",
    title: {
      id: "Mengajak Anak ke Masjid: Panduan untuk Orang Tua Muslim Indonesia",
      en: "Bringing Your Child to the Mosque: A Guide for Muslim Parents",
    },
    excerpt: {
      id: "Anak menangis di masjid bukan aib — itu suara generasi yang sedang dikenalkan dengan rumah Allah. Cara membawa anak ke masjid dengan persiapan yang tepat.",
      en: "A crying child at the mosque is not a shame — it is the sound of a generation being introduced to Allah's house.",
    },
    body: {
      id: `<p>Pertanyaan yang sering hidup di kepala orang tua muda: <em>"Apa anakku akan mengganggu jamaah?"</em> Lalu sholat berjamaah ditinggalkan, dan anak kehilangan satu pengalaman paling penting dalam pendidikan agamanya — melihat sendiri ayahnya rukuk.</p>

<p>Rasulullah ﷺ sendiri membawa cucunya, Umamah, di pundak saat sholat. Bukan karena tidak ada penjaga di rumah. Karena bersama anak <em>di dalam ibadah</em> adalah bagian dari ibadah itu sendiri.</p>

<h2>Mulai dari usia berapa</h2>

<p>Tidak ada usia minimum. Tapi pengalaman <em>bermakna</em> dimulai sekitar usia 3 tahun — saat anak mulai bisa diajak komunikasi singkat dan menahan diri 5–10 menit.</p>

<ul>
  <li><strong>0–2 tahun:</strong> hanya hari raya atau acara khusus.</li>
  <li><strong>3–5 tahun:</strong> sholat Maghrib di masjid dekat rumah, 1–2 kali seminggu.</li>
  <li><strong>6+:</strong> sholat berjamaah lebih sering, mulai diajak Jum'at, ikut tarawih pendek.</li>
</ul>

<h2>Persiapan sebelum berangkat</h2>

<ol>
  <li><strong>Toilet dulu</strong> — sederhana, sering dilupakan.</li>
  <li><strong>Beri makan ringan</strong> — anak lapar = anak rewel.</li>
  <li><strong>Pakaian nyaman</strong> — bersih dan rapi, tapi tidak gatal.</li>
  <li><strong>Kit darurat</strong> — tisu, buku gambar tipis, satu mainan kecil yang tenang.</li>
  <li><strong>Cerita di mobil</strong> — "Kita ke rumah Allah. Adik tunggu mama selesai sholat ya."</li>
</ol>

<h2>Di dalam masjid</h2>

<p>Pilih shaf di pinggir, dekat pintu. Bukan untuk bersembunyi — untuk mudah keluar jika anak benar-benar harus.</p>

<ul>
  <li>Anak berdiri di sebelah, bukan di belakang. Mereka harus melihat ayahnya rukuk.</li>
  <li>Tunjukkan adab pelan-pelan: "Tangan di dada, kakinya lurus."</li>
  <li>Jika anak gelisah di rakaat ketiga, biarkan. Mereka sudah memberi yang mereka bisa.</li>
</ul>

<h2>Jika anak menangis</h2>

<p>Jangan panik. Ambil anak, keluar pelan, tenangkan. Tidak ada jamaah yang baik akan menegur ayah membawa anak. Fokus pada apa yang sedang kamu bangun.</p>

<h2>Apa yang anakmu pelajari</h2>

<p>Bukan tata cara sholat. Itu bisa diajarkan kapan saja.</p>

<p>Yang dipelajari anak yang sering ke masjid adalah <strong>identitas</strong>: dia tahu masjid terdekat, dia kenal wajah jamaah tetap, dia tahu Maghrib datang berarti papa pakai baju koko dan kita keluar.</p>

<p>Ketika dia berusia 7 dan disuruh sholat, dia tidak menolak — karena dia sudah <em>di sana</em> sejak dia berusia 3. Selengkapnya: <a href="/_/hadith/perintah-sholat-tujuh-tahun/">Hadith Perintah Sholat</a> dan <a href="/_/parenting/mulai-sholat/">Mengajarkan Sholat ke Anak</a>.</p>

<h2>Penutup</h2>

<p>Bawa anakmu ke masjid. Bawa walau dia tidak sempurna. Generasi berikutnya tumbuh di tempat yang sering kamu ajak mereka. Pastikan masjid adalah salah satu tempat itu.</p>`,

      en: `<p>A question that lives in many young parents' heads: <em>"Will my child disturb the congregation?"</em> So congregational prayer gets skipped, and the child loses one of the most important experiences in their religious upbringing — seeing their father bow.</p>

<p>The Prophet ﷺ himself carried his granddaughter Umamah on his shoulder during prayer. Because being with your child <em>inside worship</em> is part of worship.</p>

<h2>From what age</h2>

<p>No minimum. But <em>meaningful</em> experience starts around age 3 — when the child can manage short communication and stay still for 5–10 minutes.</p>

<ul>
  <li><strong>0–2:</strong> Eid or special occasions.</li>
  <li><strong>3–5:</strong> Maghrib at the nearest mosque, 1–2 times a week.</li>
  <li><strong>6+:</strong> more often, occasional Friday, short tarawih.</li>
</ul>

<h2>Before you leave</h2>

<ol>
  <li><strong>Toilet first</strong> — simplest, most forgotten.</li>
  <li><strong>Light snack</strong> — hungry child = fussy child.</li>
  <li><strong>Comfortable clothes</strong> — clean, but not itchy or restrictive.</li>
  <li><strong>Emergency kit</strong> — tissues, a thin drawing book, one quiet small toy.</li>
  <li><strong>Brief in the car</strong> — "We're going to Allah's house. You wait for daddy to finish, okay?"</li>
</ol>

<h2>Inside the mosque</h2>

<p>Pick the edge row, near the door. Not to hide — for a clean exit if needed.</p>

<ul>
  <li>Stand them beside you, not behind. They should see their father bow.</li>
  <li>Show adab slowly: "Hands on chest, feet straight."</li>
  <li>If they get restless by the third raka'ah, let them. They've given what they could.</li>
</ul>

<h2>If your child cries</h2>

<p>Don't panic. Pick them up, walk out quietly, settle them. No good congregant will scold a father with his child. Focus on what you're building.</p>

<h2>What your child is actually learning</h2>

<p>Not how to pray. That can be taught any time.</p>

<p>A child who comes often is learning <strong>identity</strong>: they know where the nearest mosque is, they recognize regulars, they know Maghrib means dad puts on the kufi and we go.</p>

<p>When they're 7 and asked to pray, they don't resist — because they've been <em>there</em> since they were 3. See <a href="/_/hadith/perintah-sholat-tujuh-tahun/">Hadith on Teaching Prayer at Seven</a> and <a href="/_/parenting/mulai-sholat/">Teaching a Child to Pray</a>.</p>

<h2>Closing</h2>

<p>Bring your child to the mosque. Even if imperfect. The next generation grows in the places you take them often.</p>`,
    },
    tags: ["masjid", "sholat", "parenting", "identitas"],
    published: "2026-05-23",
    updated: "2026-05-23",
    readingTimeMin: 7,
    author: "tim-baby-mo",
  },

  // ─────────────────────────────────────────────────────────────────
  // 6. EVERGREEN — Cara bercerita kisah nabi
  // ─────────────────────────────────────────────────────────────────
  {
    slug: "cara-bercerita-kisah-nabi-untuk-anak",
    title: {
      id: "Cara Bercerita Kisah Nabi yang Bikin Anak Mengingat Seumur Hidup",
      en: "How to Tell Prophet Stories That Children Remember for Life",
    },
    excerpt: {
      id: "Anak tidak mengingat informasi — anak mengingat perasaan. Cara bercerita kisah para nabi agar membekas di hati anak.",
      en: "Children don't remember information — they remember feelings. How to tell prophet stories so they settle in your child's heart.",
    },
    body: {
      id: `<p>Ada perbedaan besar antara <em>menyebut</em> Nabi Yunus berada di dalam ikan paus dan <em>membawa anak masuk</em> ke dalam perut ikan itu bersama Nabi Yunus.</p>

<p>Yang pertama informasi. Yang kedua pengalaman. Hanya yang kedua yang diingat anak ketika dia berusia 25 tahun.</p>

<h2>Tiga prinsip dasar</h2>

<h3>1. Anak butuh karakter yang mereka kenali</h3>

<p>"Nabi Musa AS yang shalih" — anak mengangguk dan lupa. "Anak kecil yang ibunya menaruhnya di keranjang, hanyut di sungai, dipungut istri Firaun" — anak ingat, karena karakternya adalah anak kecil seperti dia.</p>

<h3>2. Detail kecil yang membuat dunia hidup</h3>

<p>"Nabi Yusuf dilemparkan ke sumur" — informasi.</p>

<p>"Nabi Yusuf yang masih kecil dilemparkan ke sumur oleh saudara-saudaranya. Sumurnya gelap, dingin, dan dia sendirian. Tapi tahukah adik, dia tidak menangis. Dia tahu Allah bisa melihat dia di mana saja." — pengalaman.</p>

<h3>3. Bertanya, bukan menjelaskan</h3>

<p>Setelah satu kejadian, berhenti. Tanya: "Menurut adik, gimana perasaan Nabi Yusuf di dalam sumur?" Jawaban anak akan membuat dia membayangkan — dan bayangan itu yang membekas.</p>

<h2>Format praktis: 7 menit, 3× seminggu</h2>

<ul>
  <li>Pilih waktu yang sudah ada — sebelum tidur paling alami.</li>
  <li>Satu cerita per minggu. Senin (kenalan), Rabu (puncak konflik), Jumat (resolusi).</li>
  <li>Maksimal 7 menit. Anak yang ingin lebih akan minta sendiri.</li>
</ul>

<h2>Lima kisah untuk mulai</h2>

<ol>
  <li><strong>Nabi Ibrahim — anak yang memecahkan berhala.</strong> Berani bertanya, berani bersikap berbeda.</li>
  <li><strong>Nabi Yusuf — saudara-saudara yang iri.</strong> Lihat <a href="/_/parenting/rivalitas-saudara/">Rivalitas Antar Saudara</a>.</li>
  <li><strong>Nabi Musa — anak yang dihanyutkan di sungai Nil.</strong> Tawakal seorang ibu.</li>
  <li><strong>Nabi Yunus — di dalam perut ikan.</strong> Doa di saat susah.</li>
  <li><strong>Nabi Muhammad ﷺ — saat anak kecil di gurun bersama Halimah.</strong> Cinta orang tua angkat.</li>
</ol>

<h2>Yang harus dihindari</h2>

<ul>
  <li>Jangan menambah cerita dari sumber tidak jelas. Pilih dari Qur'an atau hadith shahih.</li>
  <li>Jangan menakut-nakuti dengan detail siksa untuk anak 4 tahun.</li>
  <li>Jangan moralisasi: "makanya kamu harus rajin sholat" di akhir cerita merusak pengalaman.</li>
  <li>Jangan baca dari HP. Anak belajar bahwa cerita ini tidak cukup penting untuk dihafal.</li>
</ul>

<h2>Catatan akhir</h2>

<p>Anak yang tumbuh dengan kisah para nabi punya cadangan emosi yang besar. Saat takut, mereka punya Yunus. Saat dikhianati teman, mereka punya Yusuf. Saat harus mengambil keputusan sulit, mereka punya Ibrahim.</p>

<p>Itu warisan yang hanya bisa diberikan oleh suara orang tua, di kamar yang tenang, di waktu sebelum tidur.</p>`,

      en: `<p>There's a big difference between <em>mentioning</em> that Prophet Yunus was inside the whale, and <em>taking your child inside</em> alongside him.</p>

<p>The first is information. The second is experience. Only the second is remembered at 25.</p>

<h2>Three core principles</h2>

<h3>1. Children need characters they recognize</h3>

<p>"The righteous Prophet Musa" — your child nods and forgets. "A baby whose mother put him in a basket and floated him down a river, where Pharaoh's wife found him" — your child remembers, because the character is a child like them.</p>

<h3>2. Small details that make the world alive</h3>

<p>"Prophet Yusuf was thrown into a well" — information.</p>

<p>"Young Prophet Yusuf was thrown into a well by his brothers. The well was dark, cold, and he was alone. But do you know what? He didn't cry. He knew Allah could see him anywhere." — experience.</p>

<h3>3. Ask, don't explain</h3>

<p>After one event, pause. Ask: "How do you think Prophet Yusuf felt in that well?" Their answer makes them imagine — and that image is what sticks.</p>

<h2>Practical format: 7 minutes, 3× a week</h2>

<ul>
  <li>Pick an existing time — bedtime is most natural.</li>
  <li>One story per week. Monday (intro), Wednesday (peak), Friday (resolution).</li>
  <li>Max 7 minutes. A child wanting more will ask.</li>
</ul>

<h2>Five stories to begin</h2>

<ol>
  <li><strong>Prophet Ibrahim — the child who broke the idols.</strong> Daring to ask, daring to stand apart.</li>
  <li><strong>Prophet Yusuf — the jealous brothers.</strong> See <a href="/_/parenting/rivalitas-saudara/">Sibling Rivalry</a>.</li>
  <li><strong>Prophet Musa — the baby floated down the Nile.</strong> A mother's tawakkul.</li>
  <li><strong>Prophet Yunus — inside the whale.</strong> Dua in hardship.</li>
  <li><strong>Prophet Muhammad ﷺ — as a small child with Halimah.</strong> Love of a foster parent.</li>
</ol>

<h2>What to avoid</h2>

<ul>
  <li>Don't add stories from unclear sources. Pick from Qur'an or authentic hadith.</li>
  <li>Don't scare a 4-year-old with details of torment.</li>
  <li>Don't moralize: "that's why you must pray" ruins the experience.</li>
  <li>Don't read from a phone. Your child learns the story isn't important enough to know by heart.</li>
</ul>

<h2>Final note</h2>

<p>A child raised on prophet stories carries a deep emotional reserve. When afraid, they have Yunus. When betrayed, Yusuf. When forced into a hard decision, Ibrahim.</p>

<p>That inheritance is only given by a parent's voice, in a quiet room, at the time before sleep.</p>`,
    },
    tags: ["cerita-nabi", "parenting", "tarbiyah"],
    published: "2026-05-22",
    updated: "2026-05-22",
    readingTimeMin: 7,
    author: "tim-baby-mo",
  },

  // ─────────────────────────────────────────────────────────────────
  // 7. EVERGREEN — Adab bersaudara
  // ─────────────────────────────────────────────────────────────────
  {
    slug: "adab-bersaudara-mengurangi-pertengkaran",
    title: {
      id: "Adab Bersaudara dalam Islam: Mengurangi Pertengkaran Kakak-Adik",
      en: "Sibling Manners in Islam: Reducing Brother-Sister Fights",
    },
    excerpt: {
      id: "Pertengkaran antar saudara akan selalu ada — tapi adab yang ditanam sejak kecil bisa membuatnya jauh lebih pendek dan cepat selesai.",
      en: "Sibling fights will always happen — but manners planted early make them much shorter and faster to resolve.",
    },
    body: {
      id: `<p>Kalau kamu pernah berpikir "kenapa anak-anakku tidak bisa akur 30 menit saja", kamu tidak sendiri. Rumah dengan dua anak adalah arena negosiasi 24 jam.</p>

<p>Tapi ada perbedaan besar antara rumah di mana pertengkaran berakhir dalam 5 menit dengan saling memaafkan, dan rumah di mana pertengkaran berlanjut menjadi dendam. Perbedaannya bukan jumlah anak — perbedaannya adalah <em>adab</em> yang ditanam.</p>

<h2>Apa kata Islam tentang hubungan saudara</h2>

<blockquote>"Bertakwalah kepada Allah dan berlaku adillah di antara anak-anak kalian." — <strong>HR. Bukhari 2587, Muslim 1623</strong></blockquote>

<p>Hadith ini ditujukan kepada <strong>orang tua</strong>. Akar pertengkaran saudara sering bukan di anak — tapi di sikap orang tua. Lihat <a href="/_/hadith/adil-kepada-anak/">Berlaku Adil di Antara Anak</a>.</p>

<h2>Empat adab yang harus dibiasakan</h2>

<h3>1. Memanggil dengan panggilan yang baik</h3>

<p>"Adik" dan "Kakak" adalah pengingat hierarki kasih sayang Islam. Jangan biarkan anak memanggil saudara dengan panggilan ejekan, walau bercanda.</p>

<h3>2. Memberi salam dan minta izin</h3>

<p>Sebelum masuk kamar saudara: ketuk pintu, ucap salam, tunggu jawaban. Lihat <a href="/_/doa/mengucap-salam/">Mengucap Salam</a>.</p>

<h3>3. Berbagi tanpa dipaksa</h3>

<ul>
  <li>Setiap anak punya <em>satu</em> laci yang isinya hanya miliknya. Saudara tidak boleh ambil tanpa izin.</li>
  <li>Mainan komunal disimpan terpisah.</li>
  <li>Saat meminjam, ajarkan: "Boleh aku pinjam? Aku akan kembalikan."</li>
</ul>

<h3>4. Saling mendoakan</h3>

<p>Ajarkan anak mendoakan saudaranya: saat sakit, saat ulang tahun, saat ujian. "Ya Allah, sembuhkan adek." Doa singkat dari kakak ke adek bisa menyembuhkan luka yang tidak terlihat.</p>

<h2>Saat pertengkaran terjadi: 4 langkah</h2>

<ol>
  <li><strong>Pisahkan dulu.</strong> Setiap anak ke ruang masing-masing 5 menit.</li>
  <li><strong>Dengar bergantian.</strong> Yang lebih muda bicara dulu, yang lebih tua menyusul.</li>
  <li><strong>Cari fakta, bukan menyalahkan.</strong> "Jadi tadi, kakak ambil mainan, lalu adek dorong. Begitu?"</li>
  <li><strong>Minta maaf, tatap mata.</strong> "Aku minta maaf karena tadi aku mendorongmu." Pelukan setelahnya.</li>
</ol>

<p>Lihat juga <a href="/_/parenting/rivalitas-saudara/">Rivalitas Antar Saudara</a>.</p>

<h2>Yang harus dihindari oleh orang tua</h2>

<ul>
  <li><strong>"Kamu kan kakak, harus ngalah."</strong> Mengajarkan ketidakadilan.</li>
  <li><strong>"Liat adek tuh, lebih pintar."</strong> Pembandingan menanam iri yang sulit dicabut.</li>
  <li><strong>Tertawa di pertengkaran mereka.</strong> Terasa direndahkan di mata anak.</li>
  <li><strong>Mengingat-ingat kesalahan lama.</strong> Setiap pertengkaran adalah pertengkaran baru.</li>
</ul>

<h2>Yang harus dibiasakan</h2>

<ul>
  <li><strong>Foto bareng yang dibingkai.</strong> Hubungan tumbuh dari momen yang diabadikan.</li>
  <li><strong>Doakan bersama, sebut nama.</strong> "Ya Allah, sayangilah Aisyah dan Yusuf."</li>
  <li><strong>Tugas berdua.</strong> Beli sayur, lipat baju, siapkan piring makan. Kerjasama membangun kasih.</li>
  <li><strong>Cerita tentang Hasan dan Husain.</strong> Ajak anak <a href="/_/blog/cara-bercerita-kisah-nabi-untuk-anak/">membayangkan kasih sayang di keluarga Rasul</a>.</li>
</ul>

<h2>Penutup</h2>

<p>Saudara adalah teman paling lama dalam hidup. Adab yang kamu tanam saat mereka 5 tahun adalah pelukan yang akan mereka berikan saat mereka 50 tahun.</p>`,

      en: `<p>If you've ever thought "why can't my kids get along for 30 minutes", you are not alone. A home with two children is a 24-hour negotiation arena.</p>

<p>But there's a big difference between a home where fights end in 5 minutes with forgiveness, and a home where fights become grudges. The difference isn't the number of children — it's the <em>adab</em> planted.</p>

<h2>What Islam says about sibling relations</h2>

<blockquote>"Fear Allah and treat your children with justice." — <strong>Bukhari 2587, Muslim 1623</strong></blockquote>

<p>This hadith addresses <strong>parents</strong>. The root of sibling fights is often not the children — but the parents. See <a href="/_/hadith/adil-kepada-anak/">Be Just Between Your Children</a>.</p>

<h2>Four manners to instill</h2>

<h3>1. Calling each other by good names</h3>

<p>"Sister" and "brother" are reminders of the hierarchy of mercy Islam teaches. Don't allow mocking nicknames, even in jest.</p>

<h3>2. Greeting and asking permission</h3>

<p>Before entering a sibling's room: knock, say salam, wait. See <a href="/_/doa/mengucap-salam/">Saying Salam</a>.</p>

<h3>3. Sharing without coercion</h3>

<ul>
  <li>Each child has <em>one</em> drawer only theirs. A sibling can't take from it without permission.</li>
  <li>Communal toys live separately.</li>
  <li>When borrowing, teach: "May I borrow this? I'll return it."</li>
</ul>

<h3>4. Praying for each other</h3>

<p>Teach the child to make dua for their sibling: when sick, on birthdays, before exams. "O Allah, heal my sister." A short dua from an older sibling can heal wounds parents don't see.</p>

<h2>When a fight happens: 4 steps</h2>

<ol>
  <li><strong>Separate first.</strong> Each child to their room for 5 minutes.</li>
  <li><strong>Listen in turn.</strong> Younger first, older after.</li>
  <li><strong>Find facts, not blame.</strong> "So brother took the toy, then sister pushed. Is that right?"</li>
  <li><strong>Apologize, eye contact.</strong> "I'm sorry I pushed you." A hug after.</li>
</ol>

<p>See also <a href="/_/parenting/rivalitas-saudara/">Sibling Rivalry</a>.</p>

<h2>What parents should avoid</h2>

<ul>
  <li><strong>"You're the older one, you should give in."</strong> Teaches injustice.</li>
  <li><strong>"Look at your sister, she's smarter."</strong> Plants envy that's hard to uproot.</li>
  <li><strong>Laughing at their fights.</strong> Feels belittling to a child.</li>
  <li><strong>Bringing up old offenses.</strong> Every fight is a new fight.</li>
</ul>

<h2>What to build</h2>

<ul>
  <li><strong>A framed photo of them together.</strong> Bonds grow from preserved moments.</li>
  <li><strong>Pray for them by name, together.</strong> "O Allah, take care of Aisha and Yusuf."</li>
  <li><strong>Tasks together.</strong> Buy vegetables, fold laundry, set the table. Cooperation builds love.</li>
  <li><strong>Stories of Hasan and Husain.</strong> Invite your child to <a href="/_/blog/cara-bercerita-kisah-nabi-untuk-anak/">imagine the affection in the Prophet's family</a>.</li>
</ul>

<h2>Closing</h2>

<p>Siblings are the longest friends in life. The adab you plant when they're 5 is the embrace they'll give each other when they're 50.</p>`,
    },
    tags: ["saudara", "adab", "parenting", "akhlak"],
    published: "2026-05-21",
    updated: "2026-05-21",
    readingTimeMin: 7,
    author: "tim-baby-mo",
  },

  // ─────────────────────────────────────────────────────────────────
  // 8. EVERGREEN — Dzikir pagi & petang rutinitas
  // ─────────────────────────────────────────────────────────────────
  {
    slug: "doa-pagi-petang-rutinitas-perlindungan-anak",
    title: {
      id: "Doa Pagi & Petang sebagai Rutinitas Perlindungan Harian Anak",
      en: "Morning & Evening Duas as Your Child's Daily Protection Routine",
    },
    excerpt: {
      id: "Dzikir pagi dan petang adalah benteng spiritual yang Rasulullah ﷺ ajarkan. Cara membangun rutinitas sederhana untuk anak.",
      en: "Morning and evening adhkar are spiritual shields the Prophet ﷺ taught. How to build a simple routine for your child.",
    },
    body: {
      id: `<p>Setiap orang tua muslim pernah khawatir — anak yang main di luar, anak yang sakit, anak yang tertidur sendirian. Tapi Islam memberi kita lebih dari sekadar kekhawatiran: ada <em>amal</em> yang bisa kita ajarkan kepada anak yang menjadi perlindungan dirinya sendiri.</p>

<p>Itulah dzikir pagi dan petang — amalan harian yang dianjurkan Rasulullah ﷺ untuk dewasa <em>dan</em> anak.</p>

<h2>Mengapa pagi dan petang</h2>

<blockquote>"Dan sebutlah nama Tuhanmu pada (waktu) pagi dan petang." — <strong>QS. Al-Insan 76:25</strong></blockquote>

<p>Pagi adalah pintu masuk hari. Petang adalah pintu masuk malam. Untuk anak:</p>

<ul>
  <li><strong>Pagi:</strong> sebelum berangkat sekolah, sebelum bertemu dunia yang lebih besar dari rumah.</li>
  <li><strong>Petang:</strong> sebelum malam, sebelum tidur sendirian di kamarnya.</li>
</ul>

<h2>Apa yang dibaca — versi paling sederhana</h2>

<p>Untuk anak 3–6 tahun, mulai dari <strong>satu doa</strong> di pagi dan satu di petang. Tidak perlu hafal sepuluh.</p>

<h3>Pagi & petang (dua-duanya doa yang sama)</h3>

<p><strong>Bismillahilladzi la yadhurru ma'asmihi syai'un fil-ardhi wa la fis-sama', wa huwas-sami'ul-'alim</strong> (3×)</p>

<p>"Dengan nama Allah yang dengan menyebut nama-Nya, segala sesuatu di bumi dan di langit tidak akan memberi mudharat. Dan Dia-lah Yang Maha Mendengar lagi Maha Mengetahui."</p>

<p>Rasulullah ﷺ menjanjikan perlindungan menyeluruh bagi yang membacanya 3 kali di pagi/petang. Selengkapnya: <a href="/_/doa/doa-pagi/">Doa Pagi</a> dan <a href="/_/doa/doa-petang/">Doa Petang</a>.</p>

<h2>Cara membangun rutinitas — 4 minggu</h2>

<h3>Minggu 1: Orang tua dulu, anak mengamati</h3>

<p>Setiap pagi sebelum sekolah, orang tua baca dengan suara terdengar. Tidak suruh anak ikut. Cukup dilihat.</p>

<h3>Minggu 2: Ajak menirukan</h3>

<p>Anak biasanya minta sendiri. Kalau belum: "Yuk baca bareng Mama." Sekali pagi, sekali petang.</p>

<h3>Minggu 3: Anak yang memimpin</h3>

<p>Balik posisi. Orang tua diam, anak yang memulai. Bantu jika lupa.</p>

<h3>Minggu 4: Otomatis</h3>

<p>Anak sudah membacanya tanpa diingatkan. Kalau belum, lanjut minggu kelima dengan ritme yang sama. Tidak ada balapan.</p>

<h2>Cara membuat ini bukan beban</h2>

<ul>
  <li><strong>Waktu yang sudah ada</strong> — sambil pakai sepatu, sambil tunggu Maghrib.</li>
  <li><strong>Pegang tangan anak saat membaca</strong> — sentuhan fisik membuat doa terasa bermakna.</li>
  <li><strong>Jangan korelasikan dengan hukuman.</strong> Anak yang lupa tidak boleh dimarahi.</li>
  <li><strong>Modelkan, jangan instruksikan.</strong> Anak yang melihat ayahnya membaca akan mengikuti tanpa diminta.</li>
</ul>

<h2>Apa yang berubah</h2>

<p>Setelah 2–3 bulan:</p>

<ul>
  <li>Anak yang cemas berangkat sekolah jadi lebih tenang — karena "berangkat dengan Allah".</li>
  <li>Anak yang sulit tidur jadi cepat tertidur — karena petang ditutup dengan dzikir.</li>
  <li>Anak mulai mengajak orang tuanya membaca. Tanda paling jelas rutinitas sudah jadi miliknya.</li>
</ul>

<h2>Setelah anak terbiasa</h2>

<p>Pada usia 7–8 tahun, tambahkan:</p>

<ul>
  <li>Surat Al-Ikhlas, Al-Falaq, An-Nas (3× pagi, 3× petang)</li>
  <li>Ayat Kursi (1× pagi, 1× petang)</li>
</ul>

<p>Tapi jangan tambah sampai dasar benar-benar nyaman. Lebih baik 2 doa rutin daripada 10 doa terlupakan.</p>

<h2>Penutup</h2>

<p>Kamu tidak bisa menjaga anakmu 24 jam. Tapi kamu bisa mengajarinya meminta penjagaan dari Yang Maha Menjaga — setiap pagi sebelum dia keluar pintu, setiap petang sebelum tidur.</p>

<p>Itu warisan yang tidak terlihat, tapi terasa seumur hidupnya.</p>`,

      en: `<p>Every Muslim parent has felt anxious — the child playing outside, the sick child, the child falling asleep alone. But Islam gives us more than worry: there is an <em>act</em> we can teach our child that becomes their own protection.</p>

<p>That is the morning and evening adhkar — daily acts the Prophet ﷺ taught for adults <em>and</em> children.</p>

<h2>Why morning and evening</h2>

<blockquote>"And mention the name of your Lord in the morning and the evening." — <strong>Qur'an 76:25</strong></blockquote>

<p>Morning is the door of the day. Evening is the door of the night. For children:</p>

<ul>
  <li><strong>Morning:</strong> before school, before meeting a world bigger than home.</li>
  <li><strong>Evening:</strong> before night, before sleeping alone in their room.</li>
</ul>

<h2>What to recite — the simplest version</h2>

<p>For ages 3–6, start with <strong>one dua</strong> morning and one evening. No need to memorize ten.</p>

<h3>Morning & evening (the same dua)</h3>

<p><strong>Bismillahilladhi la yadhurru ma'asmihi shay'un fil-ardhi wa la fis-sama'i, wa huwas-sami'ul-'alim</strong> (3×)</p>

<p>"In the name of Allah, with whose name nothing on earth or in heaven can do harm. He is the All-Hearing, the All-Knowing."</p>

<p>The Prophet ﷺ promised complete protection for the one who says this 3 times in the morning/evening. See: <a href="/_/doa/doa-pagi/">Morning Dua</a> and <a href="/_/doa/doa-petang/">Evening Dua</a>.</p>

<h2>How to build the routine — 4 weeks</h2>

<h3>Week 1: Parent first, child watches</h3>

<p>Every morning before school, parent recites aloud. Don't ask child to join. Just let them watch.</p>

<h3>Week 2: Invite to echo</h3>

<p>The child usually asks on their own. If not: "Let's recite together." Once morning, once evening.</p>

<h3>Week 3: Child leads</h3>

<p>Reverse roles. Parent silent; child starts. Help if they forget.</p>

<h3>Week 4: Automatic</h3>

<p>The child recites unprompted. If not, continue at the same rhythm. No race.</p>

<h2>How to keep it from feeling like a burden</h2>

<ul>
  <li><strong>An existing time</strong> — while putting on shoes, while waiting for Maghrib.</li>
  <li><strong>Hold their hand while reciting</strong> — physical touch makes the dua meaningful.</li>
  <li><strong>Don't link it to punishment.</strong> A child who forgets shouldn't be scolded.</li>
  <li><strong>Model, don't instruct.</strong> A child who sees their father recite will follow unprompted.</li>
</ul>

<h2>What changes</h2>

<p>After 2–3 months:</p>

<ul>
  <li>A child anxious leaving for school becomes calmer — "going with Allah".</li>
  <li>A child who struggled to sleep settles faster — evening closed with dhikr.</li>
  <li>The child invites the parent to recite. The clearest sign the routine is theirs.</li>
</ul>

<h2>Once your child is comfortable</h2>

<p>By 7–8, add:</p>

<ul>
  <li>Surahs Al-Ikhlas, Al-Falaq, An-Nas (3× morning, 3× evening)</li>
  <li>Ayatul Kursi (1× morning, 1× evening)</li>
</ul>

<p>Don't add until the basics are comfortable. Better 2 duas recited daily than 10 forgotten.</p>

<h2>Closing</h2>

<p>You can't guard your child 24 hours. But you can teach them to ask for guarding from the Most Guarding — every morning before they walk out, every evening before sleep.</p>

<p>That is an invisible inheritance — but felt, for the rest of your child's life.</p>`,
    },
    tags: ["dzikir", "doa", "perlindungan", "rutinitas"],
    published: "2026-05-20",
    updated: "2026-05-20",
    readingTimeMin: 8,
    author: "tim-baby-mo",
  },

  // ─────────────────────────────────────────────────────────────────
  // 9. The original hijaiyah article — kept as-is
  // ─────────────────────────────────────────────────────────────────
  {
    slug: "cara-mengenalkan-huruf-hijaiyah-pada-anak",
    title: {
      id: "7 Cara Menyenangkan Mengenalkan Huruf Hijaiyah pada Anak Usia 3–6 Tahun",
      en: "7 Joyful Ways to Introduce Arabic Letters to Children Aged 3–6",
    },
    excerpt: {
      id: "Anak susah hafal hijaiyah? 7 metode bermain yang terbukti — kartu warna, lagu, game interaktif — supaya anak 3–6 tahun hafal 28 huruf hijaiyah dalam 30 hari.",
      en: "Child struggling with Arabic letters? 7 proven play-based methods — color cards, songs, interactive games — to help a 3–6 year old master 28 letters in 30 days.",
    },
    body: {
      id: `<p>Anak usia 3–6 tahun ada di masa <em>golden age</em> — saat otak menyerap informasi paling cepat. Mengenalkan <strong>huruf hijaiyah</strong> di usia ini bukan hanya soal hafalan, tapi membangun fondasi cinta Al-Qur'an seumur hidup.</p>

<h2>1. Mulai dari 3 Huruf, Bukan 28</h2>
<p>Kesalahan umum: ingin anak langsung hafal Alif sampai Ya' dalam seminggu. Otak balita belum siap. Mulai dari <strong>Alif (ا), Ba (ب), Ta (ت)</strong> dulu — kuasai 3 huruf ini selama 3–5 hari.</p>

<h2>2. Gunakan Lagu Hijaiyah</h2>
<p>Otak anak menyerap melodi 10× lebih cepat dari kata-kata biasa. Nyanyikan lagu hijaiyah berirama ceria sambil menggerakkan badan.</p>

<h2>3. Kartu Bergambar Warna-warni</h2>
<p>Cetak kartu hijaiyah dengan warna kontras tinggi. Tunjukkan 1 kartu per hari sambil tempel di pintu kulkas.</p>

<h2>4. Game Interaktif Edukatif</h2>
<p>Game khusus balita muslim membuat belajar terasa seperti bermain. Anak menyeret huruf, mendengar bunyi yang benar, dapat reward visual saat berhasil. Coba <a href="/_/permainan/">game Baby Mo</a> — gratis dan ramah anak.</p>

<h2>5. Tracing dengan Jari</h2>
<p>Aktivitas kinestetik membantu anak mengingat bentuk huruf. Sediakan nampan pasir, atau kertas dan krayon.</p>

<h2>6. Konsisten 10 Menit per Hari</h2>
<p><strong>10 menit setiap hari selama 4 minggu</strong> menghasilkan retensi 3× lipat dibanding 70 menit seminggu sekali.</p>

<h2>7. Rayakan Setiap Kemajuan Kecil</h2>
<p>"Subhanallah, kakak sudah hafal 5 huruf!" — kalimat sederhana ini melepas dopamin di otak anak.</p>

<h2>Kesimpulan</h2>
<p>Mengenalkan huruf hijaiyah pada anak usia 3–6 tahun bukan tentang kecepatan, tapi konsistensi dan kesenangan. Mulai dari 3 huruf, gabungkan lagu, kartu, game, dan tracing — lakukan <strong>10 menit per hari</strong> selama sebulan.</p>`,

      en: `<p>Children aged 3–6 are in their <em>golden age</em> — when the brain absorbs information fastest. Introducing the <strong>Arabic alphabet</strong> at this age is not just about memorization, but building a lifelong love for the Qur'an.</p>

<h2>1. Start with 3 Letters, Not 28</h2>
<p>A common mistake: wanting your child to memorize Alif through Ya' in a week. A toddler's brain isn't ready. Start with <strong>Alif (ا), Ba (ب), Ta (ت)</strong> — master these 3 letters over 3–5 days.</p>

<h2>2. Use Hijaiyah Songs</h2>
<p>A child's brain absorbs melody 10× faster than plain words. Sing rhythmic hijaiyah songs while moving the body.</p>

<h2>3. Colorful Picture Cards</h2>
<p>Print hijaiyah cards in high-contrast colors. Show 1 per day, taped to the fridge door.</p>

<h2>4. Interactive Educational Games</h2>
<p>Games designed for Muslim toddlers turn learning into play. The child drags letters, hears the correct sound, and gets visual rewards. Try the <a href="/_/permainan/">Baby Mo games</a> — free and child-safe.</p>

<h2>5. Finger Tracing</h2>
<p>Kinesthetic activity helps children remember letter shapes. Provide a sand tray, or paper and crayons.</p>

<h2>6. Consistent 10 Minutes a Day</h2>
<p><strong>10 minutes every day for 4 weeks</strong> yields 3× the retention of 70 minutes once a week.</p>

<h2>7. Celebrate Every Small Win</h2>
<p>"SubhanAllah, you've memorized 5 letters!" — this simple sentence releases dopamine in your child's brain.</p>

<h2>Conclusion</h2>
<p>Teaching the Arabic alphabet to a 3–6 year old is not about speed, but consistency and joy. Start with 3 letters, mix in songs, cards, games, and tracing — for <strong>10 minutes a day</strong> over a month.</p>`,
    },
    tags: ["hijaiyah", "parenting", "edukasi"],
    published: "2026-05-23",
    updated: "2026-05-23",
    readingTimeMin: 6,
    author: "tim-baby-mo",
  },

  {
    slug: "ramadan-bersama-anak",
    title: {
      id: "Ramadan Bersama Anak: Panduan Praktis untuk Keluarga dengan Anak Kecil",
      en: "Ramadan with Kids: A Practical Guide for Families with Young Children",
    },
    excerpt: {
      id: "Ramadan tahun ini dimulai sekitar 19 Februari 2027 (1 Ramadan 1448 H). Panduan untuk membantu anak — dari yang masih bayi sampai yang sudah coba puasa pertama — merasakan bulan suci sebagai bulan yang ditunggu, bukan bulan yang ditakuti.",
      en: "Ramadan this year begins around 19 February 2027 (1 Ramadan 1448 H). A guide to help children — from infants to first-time fasters — feel the holy month as one to look forward to, not to fear.",
    },
    body: {
      id: `<p>Ramadan adalah bulan paling berharga dalam kalender Islam — dan juga bulan yang paling membentuk identitas Muslim seorang anak. Yang anak rasakan di Ramadan-Ramadan kecil mereka — apakah hangat dan ditunggu, atau melelahkan dan menakutkan — ikut menentukan hubungan mereka dengan ibadah seumur hidup.</p>

<p>Tulisan ini dirancang untuk orang tua dengan anak usia 0–10 tahun. Tidak ada satu pun anak di rentang ini yang <em>diwajibkan</em> puasa. Yang ada hanya satu tugas kita: membuat Ramadan terasa istimewa.</p>

<h2>Sebelum Ramadan: bangun antisipasi</h2>

<p>Tujuan minggu-minggu sebelum Ramadan: anak menanti, bukan mendadak ditodong perubahan rutinitas.</p>

<ul>
  <li><strong>Hitung mundur visual</strong> — tempel kalender Ramadan di kulkas, anak mencoret satu kotak setiap pagi sambil bilang "Sebentar lagi Ramadan!"</li>
  <li><strong>Ceritakan apa yang akan berubah</strong> — sahur subuh-subuh, buka sore, banyak doa, banyak tamu, banyak ketupat di akhir. Anak yang tahu apa yang akan datang lebih kooperatif.</li>
  <li><strong>Beli atau buat dekorasi</strong> — lampu bulan-bintang di kamar, taplak meja baru, satu mainan/buku tema Ramadan yang baru dibuka pas malam pertama.</li>
  <li><strong>Latih puasa Sya'ban</strong> — kalau anak >7 dan minat puasa, satu dua hari Sya'ban setengah hari = pemanasan yang baik.</li>
</ul>

<h2>Anak usia 0–3: cukup ada di tengah suasana</h2>

<p>Bayi dan balita tidak perlu puasa, tidak perlu sholat tarawih, tidak perlu diajarkan apa-apa secara formal. Yang mereka serap di usia ini: <strong>nada rumah</strong>.</p>

<ul>
  <li>Saat sahur dan buka, tetap libatkan mereka di meja — walau cuma duduk dengan dot atau susu.</li>
  <li>Putar bacaan Qur'an di rumah lebih sering. Sediakan satu surah favorit yang berulang.</li>
  <li>Saat sholat tarawih, kalau di rumah — ajak mereka di pangkuan atau di sajadah sebelah.</li>
  <li>Jangan stres kalau rutinitas tidur kacau. Tidur siang lebih panjang untuk yang masih napping.</li>
</ul>

<p>Yang menempel: ingatan emosional. "Ramadan = rumah lebih sibuk, lebih banyak cium, lebih banyak makanan enak."</p>

<h2>Anak usia 4–6: latihan tanpa beban</h2>

<p>Ini fase mengenalkan, bukan menuntut. Anak penasaran dengan apa yang orang tua lakukan dan mau coba meniru.</p>

<ul>
  <li><strong>Sahur opsional</strong> — kalau anak mau bangun, beri makanan ringan kesukaan. Kalau tidak, biarkan tidur.</li>
  <li><strong>Puasa "mainan"</strong> — beberapa keluarga punya tradisi "puasa beduk" (sahur sampai Dzuhur). Untuk usia ini, itu sudah pencapaian besar.</li>
  <li><strong>Buka bersama setiap hari</strong> — anak ikut menunggu maghrib, diberi kurma dan air, ikut baca <a href="/_/doa/berbuka-puasa/">doa berbuka</a>.</li>
  <li><strong>Satu doa harian baru</strong> — kenalkan satu doa pendek per minggu Ramadan. Empat doa baru dalam satu bulan = bagus.</li>
  <li><strong>Hadiah sederhana untuk usaha kecil</strong> — bukan transaksional, tapi penanda momen.</li>
</ul>

<p>Lihat juga: <a href="/_/parenting/puasa-pertama/">Puasa Pertama Anak</a> — panduan praktis menghadapi pertanyaan-pertanyaan emosional.</p>

<h2>Anak usia 7–10: mulai puasa, dengan kelembutan</h2>

<p>Hadits "perintahkan anak sholat di usia 7" sering dibaca sebagai "perintahkan puasa juga di usia 7." Tapi konsensus ulama: <strong>puasa tidak wajib sampai baligh.</strong> Latihan ya, paksaan tidak.</p>

<ul>
  <li><strong>Mulai dari setengah hari</strong> — sahur subuh sampai Dzuhur, atau sampai jam 12. Penuh hari adalah pencapaian tahap lanjut, bukan target tahun pertama.</li>
  <li><strong>Sediakan aktivitas yang membuat lupa lapar</strong> — buku baru, jadwal jalan pagi ringan, main bersama saudara.</li>
  <li><strong>Hormati ketika anak menyerah</strong> — tidak ada hadiah untuk yang sampai maghrib, tidak ada hukuman untuk yang batal di Dzuhur. Yang penting: mau coba lagi besok.</li>
  <li><strong>Bicarakan rasa lapar dengan empati</strong> — "Iya, lapar itu nggak enak. Mama juga lapar. Tapi kita lagi belajar pelan-pelan."</li>
  <li><strong>Bedakan rasa lapar dari rasa haus</strong> — anak usia ini boleh diingatkan: kalau benar-benar haus parah dan masih siang, lebih baik batal puasa daripada dehidrasi.</li>
</ul>

<h2>Tarawih dengan anak kecil</h2>

<p>Tarawih bersama keluarga adalah salah satu kenangan paling kuat seorang anak Muslim. Tapi 8–20 rakaat dengan anak balita bisa jadi medan perang. Strateginya:</p>

<ul>
  <li><strong>Lakukan di rumah pertama-pertama</strong> — anak usia <5 lebih baik mulai dari sholat di rumah, baru ke masjid setelah bisa duduk tenang ~20 menit.</li>
  <li><strong>Cukup beberapa rakaat dulu</strong> — 2 atau 4 rakaat tarawih dengan keluarga, lalu anak tidur, lalu orang dewasa lanjutkan.</li>
  <li><strong>Ke masjid kalau memungkinkan</strong> — anak yang dibawa rutin ke masjid sejak kecil menganggap masjid sebagai "rumah kedua." Tapi pilih masjid yang ramah anak (lihat <a href="/_/parenting/screen-time/">menyiapkan anak untuk ruang publik</a>).</li>
  <li><strong>Sediakan ransel masjid</strong> — sajadah kecil, buku tenang, botol air, biskuit. Aktivitas darurat saat anak gelisah.</li>
</ul>

<h2>Membuat rumah terasa "Ramadan"</h2>

<p>Anak menyerap <em>suasana</em> sebelum mereka memahami <em>makna</em>. Investasi terbesar: bikin rumah terasa berbeda di bulan Ramadan.</p>

<ul>
  <li>Lampu bulan-bintang yang dinyalakan setiap maghrib (LED warna hangat, batere atau colok).</li>
  <li>Kotak kurma di meja, selalu terbuka, dengan air mineral di sebelahnya — siap untuk siapa pun yang berbuka.</li>
  <li>Sticker chart sederhana untuk anak: ✓ untuk sahur, ✓ untuk buka bersama, ✓ untuk sedekah hari ini.</li>
  <li>Resep buka yang sama setiap minggu (kolak Senin, gorengan Selasa, dst) — anak mengenang Ramadan lewat rasa.</li>
  <li>Sediakan satu sudut "tilawah" — bantal di lantai dekat jendela, mushaf kecil yang anak boleh pegang, lampu khusus.</li>
</ul>

<h2>10 hari terakhir: Lailatul Qadr untuk anak</h2>

<p>10 hari terakhir Ramadan istimewa karena di dalamnya ada <strong>Lailatul Qadr</strong> — malam yang lebih baik dari 1000 bulan. Untuk anak kecil, ini sulit dijelaskan. Tapi <em>dirasakan</em> bisa.</p>

<ul>
  <li>Beberapa keluarga mengizinkan anak tidur sebentar setelah Maghrib, lalu bangun jam 21:00 untuk "menemani" orang tua tilawah/sholat sebentar — anak merasa diikutsertakan dalam sesuatu yang istimewa.</li>
  <li>Cerita pendek tentang Lailatul Qadr setiap malam — Allah turunkan banyak rahmat, banyak malaikat, banyak ampunan.</li>
  <li>Untuk anak yang lebih besar (>7): ajak baca doa Lailatul Qadr — <em>"Allahumma innaka 'afuwwun tuhibbul 'afwa fa'fu 'annii."</em> Ringkas, mudah dihafal.</li>
  <li>Iktikaf di masjid untuk anak >8 selama satu-dua malam terakhir — pengalaman seumur hidup.</li>
</ul>

<h2>Idul Fitri: puncak yang ditunggu</h2>

<p>Anak yang sudah sebulan dalam ritme Ramadan akan merasakan Idul Fitri sebagai hadiah — bukan sebagai liburan biasa. Yang penting:</p>

<ul>
  <li>Baju baru — tidak mewah, tapi <em>baru</em>. Anak ingat ini seumur hidup.</li>
  <li>Sholat Ied di tanah lapang atau masjid bersama keluarga besar. Bawa anak <strong>walau menangis di tengah jamaah</strong> — itu kenangan, bukan masalah.</li>
  <li>Saling memaafkan dengan ucapan singkat ke anak: "Maaf ya Nak, kalau Ayah marah-marah selama Ramadan." Mereka belajar bahwa orang tua juga bisa salah.</li>
  <li>Silaturahmi dengan ritme yang santai — tidak harus 10 rumah dalam satu hari.</li>
</ul>

<h2>Yang harus dihindari</h2>

<ul>
  <li><strong>Memaksa puasa penuh anak yang belum siap</strong> — bukan kebaikan, bukan kemandirian. Itu trauma yang anak ingat di Ramadan-Ramadan dewasa.</li>
  <li><strong>Membandingkan dengan anak lain</strong> — "Si Ahmad sudah puasa penuh padahal seumuran kamu." Hindari, selalu.</li>
  <li><strong>Marah-marah karena lapar</strong> — orang tua yang puasa dengan emosi pendek mengajarkan: "puasa = marah." Hubungan jangka panjang anak dengan puasa rusak. Lebih baik makan kurma dan ngopi sebelum subuh.</li>
  <li><strong>Janji hadiah materi besar untuk puasa</strong> — transaksional. Ramadan adalah ibadah, bukan kontrak.</li>
  <li><strong>Stres soal kesempurnaan</strong> — kalau anak melewatkan sahur, kalau tarawih tidak khusyuk, kalau anak rewel di masjid — semua wajar. Ramadan adalah perjalanan keluarga, bukan ujian.</li>
</ul>

<h2>Yang harus dibiasakan</h2>

<ul>
  <li><strong>Sahur bersama</strong> — walau anak cuma minum susu.</li>
  <li><strong>Buka bersama</strong> — wajib, tidak boleh anak buka sendiri di kamar.</li>
  <li><strong>Doa berbuka bareng</strong> — anak ikut, walau dia tidak puasa. Lihat <a href="/_/doa/berbuka-puasa/">Doa Berbuka Puasa</a>.</li>
  <li><strong>Satu sedekah sebagai keluarga setiap pekan Ramadan</strong> — anak ikut. Beri ke tukang sapu, ke pengamen kecil, ke tetangga.</li>
  <li><strong>Refleksi malam terakhir</strong> — "Apa yang paling kamu suka dari Ramadan tahun ini?" Anak akan ingat jawaban mereka tahun depan.</li>
</ul>

<h2>Penutup</h2>

<p>Ramadan tahun ini tidak harus sempurna. Anak tidak harus puasa penuh, sholat semua tarawih, hafal semua doa. Yang anak butuh: orang tua yang hadir, suasana rumah yang berbeda, dan pesan diam-diam bahwa bulan ini adalah bulan yang dirindukan.</p>

<p>Dari Ramadan ke Ramadan, sedikit demi sedikit, anak tumbuh ke dalam ibadah. Tugas kita hanyalah menjaga pintu tetap terbuka — lebar dan hangat — sampai mereka siap masuk dengan langkah mereka sendiri.</p>

<p>Insya Allah, Ramadan tahun ini lebih hangat dari tahun lalu. Dan tahun depan, lebih hangat dari tahun ini.</p>`,
      en: `<p>Ramadan is the most valuable month in the Islamic calendar — and also the month that most shapes a child's Muslim identity. What a child feels in their small Ramadans — whether warm and anticipated, or exhausting and frightening — helps determine their lifelong relationship with worship.</p>

<p>This guide is for parents with children aged 0–10. Not a single child in this range is <em>obligated</em> to fast. Our only task: make Ramadan feel special.</p>

<h2>Before Ramadan: build anticipation</h2>

<p>Goal of the weeks before Ramadan: the child waits for it, not gets blindsided by a routine change.</p>

<ul>
  <li><strong>Visual countdown</strong> — stick a Ramadan calendar on the fridge; the child crosses out a box each morning, saying "Ramadan is almost here!"</li>
  <li><strong>Tell them what changes</strong> — eating before dawn, breaking after sunset, more du'a, more guests, more ketupat at the end. A child who knows what's coming is more cooperative.</li>
  <li><strong>Buy or make decorations</strong> — moon-and-star string lights, a new tablecloth, one Ramadan-themed toy or book opened on the first night.</li>
  <li><strong>Practice with Sha'ban fasts</strong> — if the child is >7 and curious, one or two half-day fasts in Sha'ban are good warm-ups.</li>
</ul>

<h2>Ages 0–3: just be in the atmosphere</h2>

<p>Babies and toddlers don't need to fast, don't need tarawih, don't need formal teaching. What they absorb at this age: <strong>the tone of the home</strong>.</p>

<ul>
  <li>At sahur and iftar, keep them at the table — even just sitting with a bottle.</li>
  <li>Play Qur'an recitation more often in the home. Pick one favorite surah that repeats.</li>
  <li>At tarawih, if at home — let them on your lap or on the prayer rug beside you.</li>
  <li>Don't stress if sleep routines fall apart. Longer naps for those still napping.</li>
</ul>

<p>What sticks: emotional memory. "Ramadan = a busier home, more kisses, more good food."</p>

<h2>Ages 4–6: practice without pressure</h2>

<p>This is the introduction phase, not the demand phase. The child is curious about what parents are doing and wants to copy.</p>

<ul>
  <li><strong>Optional sahur</strong> — if the child wants to wake up, give them a favorite light snack. If not, let them sleep.</li>
  <li><strong>"Practice" fast</strong> — some families have a "puasa beduk" tradition (sahur until Dzuhur). For this age, that's a big achievement.</li>
  <li><strong>Iftar together every day</strong> — the child waits for maghrib, gets a date and water, reads <a href="/_/doa/berbuka-puasa/">the iftar du'a</a>.</li>
  <li><strong>One new daily du'a per week</strong> — four new du'as in a month = good.</li>
  <li><strong>Simple gifts for small efforts</strong> — not transactional, just markers of moments.</li>
</ul>

<p>Also see: <a href="/_/parenting/puasa-pertama/">A Child's First Fast</a> — practical guide for the emotional questions.</p>

<h2>Ages 7–10: start fasting, with gentleness</h2>

<p>The hadith "command prayer at age 7" is often read as "command fasting at 7 too." But scholarly consensus: <strong>fasting isn't obligatory until puberty.</strong> Training yes, forcing no.</p>

<ul>
  <li><strong>Start with half-day fasts</strong> — sahur to Dzuhur, or to noon. Full day is a later milestone, not a year-one target.</li>
  <li><strong>Provide distractions from hunger</strong> — new books, light morning walks, play with siblings.</li>
  <li><strong>Respect when the child gives up</strong> — no reward for reaching maghrib, no punishment for breaking at Dzuhur. What matters: willingness to try again tomorrow.</li>
  <li><strong>Talk about hunger with empathy</strong> — "Yes, hunger doesn't feel good. Mama's hungry too. But we're learning, little by little."</li>
  <li><strong>Distinguish hunger from thirst</strong> — children this age can be reminded: if truly thirsty and still daytime, breaking the fast is better than dehydration.</li>
</ul>

<h2>Tarawih with small children</h2>

<p>Family tarawih is one of the strongest memories a Muslim child carries. But 8–20 rakaat with toddlers can be a battlefield. The strategy:</p>

<ul>
  <li><strong>Start at home</strong> — children under 5 are better off starting with home prayer, moving to the mosque once they can sit still for ~20 minutes.</li>
  <li><strong>A few rakaat first</strong> — 2 or 4 rakaat of tarawih as a family, then the child sleeps, then adults continue.</li>
  <li><strong>Mosque if possible</strong> — children brought to the mosque early consider it a "second home." But pick a child-friendly mosque.</li>
  <li><strong>Pack a mosque bag</strong> — small prayer rug, quiet book, water bottle, biscuit. Emergency activities for restless moments.</li>
</ul>

<h2>Making the home feel "Ramadan"</h2>

<p>Children absorb <em>atmosphere</em> before they understand <em>meaning</em>. Biggest investment: make the home feel different in Ramadan.</p>

<ul>
  <li>Moon-and-star lights turned on every maghrib (warm LED, battery or plug-in).</li>
  <li>A box of dates always open on the table with water beside it — ready for anyone breaking their fast.</li>
  <li>Simple sticker chart for the child: ✓ for sahur, ✓ for iftar together, ✓ for today's sadaqah.</li>
  <li>The same iftar recipe each week (compote Mondays, fried snacks Tuesdays, etc.) — children remember Ramadan through taste.</li>
  <li>Set up a "tilawah corner" — a floor cushion near a window, a small mushaf the child can hold, a dedicated lamp.</li>
</ul>

<h2>The last 10 days: Lailatul Qadr for children</h2>

<p>The last 10 days of Ramadan are special because they contain <strong>Lailatul Qadr</strong> — the night better than 1000 months. For small children, this is hard to explain. But it can be <em>felt</em>.</p>

<ul>
  <li>Some families let the child nap after Maghrib, then wake at 21:00 to "join" parents reading Qur'an / praying briefly — the child feels included in something special.</li>
  <li>A short story about Lailatul Qadr each night — Allah pours down mercy, angels descend, forgiveness flows.</li>
  <li>For older children (>7): teach the Lailatul Qadr du'a — <em>"Allahumma innaka 'afuwwun tuhibbul 'afwa fa'fu 'annii."</em> Short, easy to memorize.</li>
  <li>I'tikaf at the mosque for children >8 for one or two of the final nights — a lifelong experience.</li>
</ul>

<h2>Eid al-Fitr: the awaited peak</h2>

<p>A child who has spent a month in Ramadan's rhythm experiences Eid as a gift — not just an ordinary holiday. What matters:</p>

<ul>
  <li>New clothes — not lavish, but <em>new</em>. The child remembers this for life.</li>
  <li>Eid prayer in an open field or mosque with extended family. Bring the child <strong>even if they cry in the middle of the jama'ah</strong> — that's a memory, not a problem.</li>
  <li>Mutual forgiveness with a short word to your child: "Sorry, kid, if Mama got grumpy during Ramadan." They learn that parents can be wrong too.</li>
  <li>Silaturahmi (visiting family) at a calm pace — doesn't have to be 10 houses in one day.</li>
</ul>

<h2>What to avoid</h2>

<ul>
  <li><strong>Forcing a child to complete a full fast before they're ready</strong> — not kindness, not maturity. It's the trauma they remember in adult Ramadans.</li>
  <li><strong>Comparing to other children</strong> — "Ahmad already fasts the full day at your age." Avoid, always.</li>
  <li><strong>Anger from hunger</strong> — parents who fast with short fuses teach: "fasting = anger." The child's long-term relationship with worship is damaged. Better to eat dates and have coffee before fajr.</li>
  <li><strong>Big material rewards for fasting</strong> — transactional. Ramadan is worship, not a contract.</li>
  <li><strong>Stressing over perfection</strong> — missed sahur, distracted tarawih, restless child at the mosque — all normal. Ramadan is a family journey, not an exam.</li>
</ul>

<h2>What to make habit</h2>

<ul>
  <li><strong>Sahur together</strong> — even if the child only has milk.</li>
  <li><strong>Iftar together</strong> — no exception; no child breaks fast alone in their room.</li>
  <li><strong>Iftar du'a together</strong> — the child joins, even when not fasting. See <a href="/_/doa/berbuka-puasa/">Iftar Du'a</a>.</li>
  <li><strong>One family sadaqah each week of Ramadan</strong> — the child participates. Give to the street sweeper, the small busker, the neighbor.</li>
  <li><strong>Last-night reflection</strong> — "What did you like best about Ramadan this year?" The child will remember their answer next year.</li>
</ul>

<h2>Closing</h2>

<p>This year's Ramadan doesn't have to be perfect. The child doesn't have to complete every fast, attend every tarawih, memorize every du'a. What the child needs: present parents, a different feel in the home, and the quiet message that this month is one to long for.</p>

<p>From Ramadan to Ramadan, little by little, the child grows into worship. Our job is simply to keep the door open — wide and warm — until they're ready to walk in on their own.</p>

<p>Insha Allah, this Ramadan will be warmer than last year's. And next year, warmer still.</p>`,
    },
    tags: ["ramadan", "puasa", "anak", "ibadah", "keluarga"],
    published: "2026-05-28",
    updated: "2026-05-28",
    readingTimeMin: 14,
    author: "salman",
    kit: {
      quote: {
        id: "Ramadan tahun ini tidak harus sempurna. Anak tidak harus puasa penuh, sholat semua tarawih, hafal semua doa. Yang anak butuh: orang tua yang hadir, suasana rumah yang berbeda, dan pesan diam-diam bahwa bulan ini adalah bulan yang dirindukan.",
        en: "This Ramadan doesn't have to be perfect. The child doesn't have to complete every fast, attend every tarawih, memorize every du'a. They need present parents, a different feel in the home, and the quiet message that this month is one to long for.",
      },
      carousel: {
        id: [
          { title: "Ramadan dengan Anak — 1/7", body: "Sebelum Ramadan, bangun antisipasi. Hitung mundur visual di kulkas. Anak yang tahu apa yang datang lebih kooperatif." },
          { title: "Usia 0–3: Cukup ada", body: "Bayi tidak perlu puasa, tidak perlu tarawih. Yang mereka serap: nada rumah. Lebih banyak cium, lebih banyak makanan enak, suara Qur'an." },
          { title: "Usia 4–6: Latihan tanpa beban", body: "Sahur opsional. Puasa beduk (sahur sampai Dzuhur) = pencapaian besar. Buka bersama setiap hari. Empat doa baru dalam sebulan." },
          { title: "Usia 7–10: Setengah hari dulu", body: "Penuh hari adalah tahap lanjut, bukan target tahun pertama. Hormati ketika anak menyerah. Yang penting: mau coba lagi besok." },
          { title: "Tarawih dengan balita", body: "Mulai di rumah. 2–4 rakaat keluarga, lalu anak tidur, lalu lanjutkan. Bawa ransel masjid: sajadah, buku, air, biskuit." },
          { title: "10 hari terakhir = Lailatul Qadr", body: "Untuk anak: tidur sore, bangun jam 21:00 menemani orang tua sebentar. Itu kenangan seumur hidup." },
          { title: "Hindari ini", body: "Memaksa puasa penuh. Membandingkan anak. Marah karena lapar. Janji hadiah materi. Stres soal kesempurnaan." },
        ],
        en: [
          { title: "Ramadan with Kids — 1/7", body: "Before Ramadan, build anticipation. Visual countdown on the fridge. A child who knows what's coming is more cooperative." },
          { title: "Ages 0–3: Just be present", body: "Babies don't need to fast or pray tarawih. What they absorb: the home's tone. More kisses, more good food, more Qur'an in the background." },
          { title: "Ages 4–6: Practice without pressure", body: "Optional sahur. Half-day fast (sahur to Dzuhur) = big achievement. Iftar together daily. Four new du'as in a month." },
          { title: "Ages 7–10: Half day first", body: "Full day is a later milestone, not a year-one target. Respect when they give up. What matters: willing to try again tomorrow." },
          { title: "Tarawih with toddlers", body: "Start at home. 2–4 rakaat as family, child sleeps, adults continue. Pack a mosque bag: small rug, quiet book, water, biscuit." },
          { title: "Last 10 days = Lailatul Qadr", body: "For children: nap after Maghrib, wake at 21:00 to join parents briefly. That's a lifelong memory." },
          { title: "Avoid these", body: "Forcing a full fast. Comparing to other children. Anger from hunger. Big material rewards. Stressing over perfection." },
        ],
      },
      shortScript: {
        id: `[0–3 detik] HOOK: Pertanyaan terbesar orang tua Ramadan ini: anak saya harus puasa atau tidak?

[3–15 detik] MASALAH: Anak <belum baligh> tidak diwajibkan puasa apapun. Tapi banyak orang tua memaksa puasa penuh di usia 6–7. Hasil: anak yang menolak puasa di usia 16.

[15–35 detik] SOLUSI: Untuk usia 0–3, cukup mereka ada di suasana rumah. Untuk 4–6, sahur opsional dan puasa setengah hari. Untuk 7–10, mulai setengah hari, hormati kalau menyerah. Tidak ada hadiah, tidak ada hukuman.

[35–55 detik] BUKTI: Sahabat Nabi melatih anak puasa Asyura dengan kasih mainan bulu domba. Saat anak lapar, mereka main. Latihan, bukan paksaan. Itu yang membuat hubungan dengan ibadah bertahan.

[55–60 detik] CTA: "Simpan sebelum Ramadan datang. Bagikan ke orang tua muslim yang lagi cari panduan."`,
        en: `[0–3s] HOOK: The biggest parent question this Ramadan: should my child fast or not?

[3–15s] PROBLEM: Children <before puberty> aren't obligated to fast at all. But many parents force full fasts at age 6–7. Result: children who refuse to fast at 16.

[15–35s] SOLUTION: Ages 0–3, just be in the atmosphere. Ages 4–6, optional sahur and half-day fast. Ages 7–10, start half-day, respect when they give up. No rewards, no punishments.

[35–55s] PROOF: The Companions trained children on Asyura by giving them wool toys. When the child got hungry, they'd play. Training, not forcing. That's what makes the relationship with worship last.

[55–60s] CTA: "Save this before Ramadan arrives. Share with a Muslim parent looking for guidance."`,
      },
      pin: {
        id: {
          title: "Ramadan Bersama Anak — Panduan Praktis per Usia",
          description: "Cara mengenalkan Ramadan ke anak usia 0–10 tahun. Sahur, tarawih, puasa pertama, Lailatul Qadr, dan Idul Fitri. Tanpa memaksa, tanpa membandingkan. Untuk keluarga muslim Indonesia.",
        },
        en: {
          title: "Ramadan with Kids — A Practical Age-by-Age Guide",
          description: "How to introduce Ramadan to children ages 0–10. Sahur, tarawih, first fasts, Lailatul Qadr, and Eid. Without forcing, without comparing. For Muslim families everywhere.",
        },
      },
      checklist: {
        id: [
          "Sebelum Ramadan: hitung mundur visual di kulkas",
          "Beli/buat satu dekorasi baru — lampu bulan-bintang, taplak baru",
          "Sediakan kotak kurma + air di meja, selalu terbuka",
          "Usia 0–3: tetap libatkan di sahur/buka, jangan stres rutinitas",
          "Usia 4–6: sahur opsional, ajak buka tiap hari, satu doa baru per minggu",
          "Usia 7–10: mulai puasa setengah hari, hormati kalau menyerah",
          "Tarawih: mulai di rumah dulu, 2–4 rakaat keluarga",
          "10 hari terakhir: ajak anak menemani 30 menit sebelum tidur lagi",
          "Idul Fitri: baju baru + sholat Ied + maafkan anak walau dia tidak salah",
          "Refleksi malam terakhir: 'Apa yang paling kamu suka dari Ramadan tahun ini?'",
        ],
        en: [
          "Before Ramadan: visual countdown on the fridge",
          "Buy or make one new decoration — moon-star lights, new tablecloth",
          "Always-open box of dates + water on the table",
          "Ages 0–3: keep them at sahur/iftar, don't stress about routine",
          "Ages 4–6: optional sahur, daily iftar together, one new du'a per week",
          "Ages 7–10: start half-day fasts, respect when they give up",
          "Tarawih: start at home, 2–4 rakaat as a family",
          "Last 10 days: invite the child to join you 30 minutes before sleeping again",
          "Eid: new clothes + Eid prayer + ask the child's forgiveness even if no wrong",
          "Last-night reflection: 'What did you like best about Ramadan this year?'",
        ],
      },
    },
  },

  {
    slug: "panduan-haji-untuk-jamaah-indonesia",
    title: {
      id: "Panduan Lengkap Ibadah Haji untuk Jamaah Indonesia: Jenis, Cara Daftar, dan Alur Pelaksanaan",
      en: "Complete Hajj Guide for Indonesian Pilgrims: Types, Registration, and Step-by-Step Flow",
    },
    excerpt: {
      id: "Penjelasan menyeluruh tentang ibadah haji untuk calon jamaah Indonesia: syarat wajib, tiga jalur pendaftaran (Reguler, Khusus, Furoda), alur pelaksanaan dari ihram sampai tawaf wada' lengkap dengan doa, dan jawaban atas pertanyaan paling umum.",
      en: "A comprehensive guide to Hajj for Indonesian pilgrims: the five conditions, three registration paths (Regular, Plus, Furoda), the full performance flow from ihram to farewell tawaf with all duas, and answers to the most common questions.",
    },
    body: {
      id: `<p>Saat tulisan ini diterbitkan (28 Mei 2026 / 12 Dzulhijjah 1447 H), jutaan jamaah haji dari seluruh dunia — termasuk lebih dari 221.000 jamaah Indonesia — sedang menyelesaikan tahapan terakhir ibadah haji di Mina. Panduan ini dirancang untuk siapa pun yang sedang mempertimbangkan untuk berangkat haji, sedang menunggu giliran, atau ingin memahami ibadah ini dengan lebih dalam.</p>

<p>Konten dibagi menjadi: <strong>(1) konsep dasar haji</strong>, <strong>(2) lima syarat wajib</strong>, <strong>(3) tiga jenis pelaksanaan haji</strong>, <strong>(4) tiga jalur pendaftaran di Indonesia</strong>, <strong>(5) alur ibadah lengkap dengan doa</strong>, dan <strong>(6) tips persiapan</strong>.</p>

<h2>Apa itu Ibadah Haji</h2>

<p>Haji adalah rukun Islam kelima — kunjungan ke Baitullah (Ka'bah di Mekkah) pada waktu tertentu untuk melaksanakan rangkaian ibadah yang spesifik. Diwajibkan satu kali seumur hidup bagi muslim yang mampu (<em>istitha'ah</em>), sebagaimana firman Allah:</p>

<blockquote>
<p>"Dan kewajiban manusia terhadap Allah adalah melaksanakan ibadah haji ke Baitullah, yaitu bagi orang-orang yang mampu mengadakan perjalanan ke sana." <em>(QS. Ali Imran: 97)</em></p>
</blockquote>

<p>Waktu pelaksanaan: <strong>8 sampai 13 Dzulhijjah</strong> setiap tahun. Tempat: Mekkah, Mina, Arafah, dan Muzdalifah — keempat lokasi ini disebut <em>masya'ir muqaddasah</em> (tempat-tempat suci ibadah haji).</p>

<h2>Lima Syarat Wajib Haji</h2>

<p>Sebelum berbicara cara, harus jelas dulu siapa yang <em>wajib</em> berangkat. Para ulama menyepakati lima syarat:</p>

<ol>
  <li><strong>Islam</strong> — bukan kewajiban bagi non-muslim.</li>
  <li><strong>Baligh</strong> — telah mencapai usia dewasa. Anak boleh ikut, hajinya sah (haji sunnah), tapi tetap wajib haji lagi setelah baligh jika mampu.</li>
  <li><strong>Berakal</strong> — bukan dalam kondisi gangguan jiwa yang menghilangkan kesadaran.</li>
  <li><strong>Merdeka</strong> — di masa lalu, status budak tidak diwajibkan haji.</li>
  <li><strong>Mampu (<em>istitha'ah</em>)</strong> — punya kemampuan finansial, fisik, dan keamanan perjalanan.</li>
</ol>

<p>Syarat kelima yang paling sering diperdebatkan untuk konteks Indonesia. Mampu finansial artinya: punya bekal pulang-pergi, mencukupi nafkah keluarga selama ditinggal, dan tidak menggadaikan kebutuhan pokok (rumah, alat usaha). Mampu fisik artinya: kuat menjalani perjalanan dan rangkaian ibadah yang melelahkan.</p>

<h2>Tiga Jenis Pelaksanaan Haji</h2>

<p>Ini adalah pilihan tata cara — semua sah, masing-masing punya konsekuensi berbeda terkait umrah dan <em>dam</em> (denda hewan ternak).</p>

<h3>1. Haji Ifrad — Haji Saja</h3>

<p>Jamaah niat hanya untuk haji (tidak digabung umrah). Setelah haji selesai, baru bisa umrah secara terpisah. <strong>Tidak ada kewajiban dam.</strong></p>

<p>Cocok untuk: jamaah yang sampai di Mekkah sangat dekat dengan tanggal 8 Dzulhijjah dan tidak sempat umrah dulu.</p>

<h3>2. Haji Tamattu' — Umrah Dulu, Lalu Haji</h3>

<p>Jamaah niat umrah dulu saat tiba di miqat. Setelah selesai umrah (tawaf, sa'i, tahallul), boleh keluar dari ihram. Pada tanggal 8 Dzulhijjah, niat ihram lagi untuk haji. <strong>Wajib dam</strong> (menyembelih satu kambing).</p>

<p>Cocok untuk: <strong>mayoritas jamaah haji Indonesia</strong>, karena sebagian besar tiba di Mekkah/Madinah jauh hari sebelum hari haji dan punya waktu untuk umrah lebih dulu.</p>

<h3>3. Haji Qiran — Haji dan Umrah Bersamaan</h3>

<p>Jamaah niat haji dan umrah sekaligus dari miqat. Tetap dalam ihram dari awal sampai hari Idul Adha. Pelaksanaan tawaf dan sa'i bisa dilakukan satu kali untuk dua ibadah. <strong>Wajib dam</strong>.</p>

<p>Cocok untuk: jamaah yang tidak melepas ihram sama sekali — kurang umum di Indonesia.</p>

<h2>Tiga Jalur Pendaftaran Haji di Indonesia</h2>

<p>Indonesia adalah negara dengan jamaah haji terbanyak di dunia — dan juga daftar tunggu terpanjang. Pemerintah (melalui Kementerian Agama) mengatur tiga jalur resmi.</p>

<h3>Jalur 1: Haji Reguler</h3>

<div style="display:grid;gap:0.5rem;margin:1rem 0;">
  <div style="display:grid;grid-template-columns:140px 1fr;gap:0.5rem;font-size:14px;">
    <div style="font-weight:600;color:var(--color-ink);">Pengelola</div>
    <div style="color:var(--color-whisper);">Kementerian Agama RI</div>
    <div style="font-weight:600;color:var(--color-ink);">Setoran awal</div>
    <div style="color:var(--color-whisper);">Rp 25 juta</div>
    <div style="font-weight:600;color:var(--color-ink);">BPIH 2026</div>
    <div style="color:var(--color-whisper);">Sekitar Rp 56–60 juta (bervariasi per embarkasi)</div>
    <div style="font-weight:600;color:var(--color-ink);">Waiting list</div>
    <div style="color:var(--color-whisper);">15–48 tahun (paling pendek di Sulawesi Utara; paling panjang di Sulawesi Selatan, Kalimantan Selatan)</div>
    <div style="font-weight:600;color:var(--color-ink);">Cocok untuk</div>
    <div style="color:var(--color-whisper);">Mayoritas jamaah — biaya paling terjangkau</div>
  </div>
</div>

<p><strong>Cara mendaftar haji reguler:</strong></p>

<ol>
  <li>Buka tabungan haji di Bank Penerima Setoran BPS BPIH (BNI, BSI, BRI Syariah, Mandiri Syariah, dll). Setor minimal Rp 25 juta.</li>
  <li>Bank menerbitkan <strong>Bukti Setoran Awal (BSA)</strong>.</li>
  <li>Bawa BSA + KTP + KK + paspor + buku tabungan ke Kantor Kementerian Agama (Kemenag) Kabupaten/Kota.</li>
  <li>Petugas Kemenag mendaftarkan ke Sistem Informasi dan Komputerisasi Haji Terpadu (<strong>Siskohat</strong>). Anda dapat <strong>nomor porsi</strong> seumur hidup.</li>
  <li>Tunggu giliran sesuai estimasi waktu di sertifikat. Cek berkala via <a href="https://haji.kemenag.go.id" rel="noopener nofollow">haji.kemenag.go.id</a>.</li>
  <li>Sekitar 1–2 tahun sebelum keberangkatan, dipanggil untuk pelunasan, manasik, dan tes kesehatan.</li>
</ol>

<h3>Jalur 2: Haji Khusus (ONH Plus)</h3>

<div style="display:grid;gap:0.5rem;margin:1rem 0;">
  <div style="display:grid;grid-template-columns:140px 1fr;gap:0.5rem;font-size:14px;">
    <div style="font-weight:600;color:var(--color-ink);">Pengelola</div>
    <div style="color:var(--color-whisper);">Penyelenggara Ibadah Haji Khusus (PIHK) — biro swasta berizin Kemenag</div>
    <div style="font-weight:600;color:var(--color-ink);">Setoran awal</div>
    <div style="color:var(--color-whisper);">USD 5.000</div>
    <div style="font-weight:600;color:var(--color-ink);">Total biaya</div>
    <div style="color:var(--color-whisper);">USD 10.000–13.000 (bervariasi per PIHK)</div>
    <div style="font-weight:600;color:var(--color-ink);">Waiting list</div>
    <div style="color:var(--color-whisper);">5–9 tahun</div>
    <div style="font-weight:600;color:var(--color-ink);">Cocok untuk</div>
    <div style="color:var(--color-whisper);">Yang ingin berangkat lebih cepat dengan akomodasi premium</div>
  </div>
</div>

<p>Haji Khusus tetap masuk kuota resmi Indonesia (15% dari total kuota nasional). Bedanya: pengelolaan oleh PIHK swasta, akomodasi hotel lebih dekat ke Masjidil Haram, jumlah jamaah per kelompok lebih kecil, makan/transport lebih nyaman.</p>

<p><strong>Cara mendaftar:</strong> langsung ke PIHK terdaftar. Daftar PIHK resmi tersedia di <a href="https://haji.kemenag.go.id" rel="noopener nofollow">haji.kemenag.go.id</a>. Hati-hati biro tidak berizin — pastikan terdaftar di Kemenag dan punya izin operasional yang masih berlaku.</p>

<h3>Jalur 3: Haji Furoda (Visa Mujamalah)</h3>

<div style="display:grid;gap:0.5rem;margin:1rem 0;">
  <div style="display:grid;grid-template-columns:140px 1fr;gap:0.5rem;font-size:14px;">
    <div style="font-weight:600;color:var(--color-ink);">Pengelola</div>
    <div style="color:var(--color-whisper);">Visa undangan dari pemerintah Arab Saudi, melalui agen resmi</div>
    <div style="font-weight:600;color:var(--color-ink);">Total biaya</div>
    <div style="color:var(--color-whisper);">USD 20.000–35.000</div>
    <div style="font-weight:600;color:var(--color-ink);">Waiting list</div>
    <div style="color:var(--color-whisper);">Tidak ada — berangkat tahun yang sama</div>
    <div style="font-weight:600;color:var(--color-ink);">Cocok untuk</div>
    <div style="color:var(--color-whisper);">Yang punya kemampuan finansial besar dan tidak bisa menunggu</div>
  </div>
</div>

<p>Haji Furoda menggunakan kuota tambahan dari pemerintah Saudi (di luar kuota resmi Indonesia). Sejak 2022 pemerintah mensyaratkan: agen wajib berizin, jamaah wajib menggunakan PIHK terdaftar, tidak boleh visa turis untuk haji.</p>

<p><strong>Peringatan:</strong> banyak penipuan di jalur ini. Pastikan agen punya izin Kemenag sebagai PIHK + perjanjian dengan muassasah resmi Saudi.</p>

<h2>Alur Ibadah Haji — 6 Hari Inti</h2>

<p>Ringkasan visual rangkaian ibadah dari 8 sampai 13 Dzulhijjah:</p>

<div style="margin:1.5rem 0;padding:1.5rem;border:1px solid var(--color-hairline);border-radius:24px;background:var(--color-paper-2);">
  <div style="font-size:11px;font-weight:700;letter-spacing:0.14em;text-transform:uppercase;color:var(--color-brave-deep);margin-bottom:1rem;">Alur Ibadah Haji Tamattu' (Paling Umum untuk Jamaah Indonesia)</div>

  <div style="display:grid;gap:0.75rem;">

    <div style="display:flex;gap:1rem;align-items:flex-start;">
      <div style="width:84px;min-height:64px;padding:6px 4px;border-radius:14px;background:var(--color-brave);color:#FBFAF6;font-weight:700;font-size:13px;display:flex;flex-direction:column;align-items:center;justify-content:center;line-height:1.1;">
        <div style="font-size:18px;">8</div>
        <div style="font-size:10.5px;margin-top:4px;letter-spacing:0.08em;white-space:nowrap;">DZULH.</div>
      </div>
      <div style="flex:1;border:1px solid var(--color-hairline);border-radius:14px;background:var(--color-paper);padding:1rem;">
        <div style="font-weight:600;color:var(--color-ink);font-size:15px;">Hari Tarwiyah — Berangkat ke Mina</div>
        <div style="margin-top:4px;color:var(--color-whisper);font-size:13.5px;line-height:1.55;">Pagi: mandi sunnah, kenakan pakaian ihram, niat haji di hotel. Berangkat ke Mina. Sholat lima waktu di Mina (qashar tanpa jama'). Mabit (menginap) semalam.</div>
      </div>
    </div>

    <div style="display:flex;gap:1rem;align-items:flex-start;">
      <div style="width:84px;min-height:64px;padding:6px 4px;border-radius:14px;background:var(--color-brave-deep);color:#FBFAF6;font-weight:700;font-size:13px;display:flex;flex-direction:column;align-items:center;justify-content:center;line-height:1.1;">
        <div style="font-size:18px;">9</div>
        <div style="font-size:10.5px;margin-top:4px;letter-spacing:0.08em;white-space:nowrap;">DZULH.</div>
      </div>
      <div style="flex:1;border:1px solid var(--color-hairline);border-radius:14px;background:var(--color-paper);padding:1rem;">
        <div style="font-weight:600;color:var(--color-ink);font-size:15px;">⭐ Wukuf di Arafah — Puncak Haji</div>
        <div style="margin-top:4px;color:var(--color-whisper);font-size:13.5px;line-height:1.55;">Pagi: bergerak ke Arafah. Sholat Dzuhur–Ashar dijama' qashar di awal waktu. Wukuf (berdiam) dari tergelincirnya matahari sampai terbenam — perbanyak doa, dzikir, istighfar. Setelah Maghrib: bergerak ke Muzdalifah, mabit di sana, kumpulkan kerikil untuk lempar jumrah.</div>
      </div>
    </div>

    <div style="display:flex;gap:1rem;align-items:flex-start;">
      <div style="width:84px;min-height:64px;padding:6px 4px;border-radius:14px;background:var(--color-clay);color:#FBFAF6;font-weight:700;font-size:13px;display:flex;flex-direction:column;align-items:center;justify-content:center;line-height:1.1;">
        <div style="font-size:18px;">10</div>
        <div style="font-size:10.5px;margin-top:4px;letter-spacing:0.08em;white-space:nowrap;">IDUL ADHA</div>
      </div>
      <div style="flex:1;border:1px solid var(--color-hairline);border-radius:14px;background:var(--color-paper);padding:1rem;">
        <div style="font-weight:600;color:var(--color-ink);font-size:15px;">Lempar Jumrah Aqabah · Sembelih Hadyu · Tahallul Awal</div>
        <div style="margin-top:4px;color:var(--color-whisper);font-size:13.5px;line-height:1.55;">Subuh: dari Muzdalifah ke Mina. Lempar 7 kerikil ke Jumrah Aqabah (yang terbesar). Sembelih dam (hadyu) — biasanya diuruskan petugas. Cukur/potong rambut → tahallul awal (larangan ihram dilepas, kecuali jima'). Bergerak ke Mekkah untuk tawaf ifadhah dan sa'i, lalu kembali ke Mina untuk mabit malam ke-10/11.</div>
      </div>
    </div>

    <div style="display:flex;gap:1rem;align-items:flex-start;">
      <div style="width:84px;min-height:64px;padding:6px 4px;border-radius:14px;background:var(--color-clay);color:#FBFAF6;font-weight:700;font-size:13px;display:flex;flex-direction:column;align-items:center;justify-content:center;line-height:1.1;">
        <div style="font-size:18px;">11</div>
        <div style="font-size:10.5px;margin-top:4px;letter-spacing:0.08em;white-space:nowrap;">TASYRIQ 1</div>
      </div>
      <div style="flex:1;border:1px solid var(--color-hairline);border-radius:14px;background:var(--color-paper);padding:1rem;">
        <div style="font-weight:600;color:var(--color-ink);font-size:15px;">Mabit di Mina — Lempar 3 Jumrah</div>
        <div style="margin-top:4px;color:var(--color-whisper);font-size:13.5px;line-height:1.55;">Setelah dzuhur (waktu utama): lempar Jumrah Ula (7 kerikil) → Wustha (7) → Aqabah (7) = 21 kerikil. Mabit lagi di Mina.</div>
      </div>
    </div>

    <div style="display:flex;gap:1rem;align-items:flex-start;">
      <div style="width:84px;min-height:64px;padding:6px 4px;border-radius:14px;background:var(--color-clay);color:#FBFAF6;font-weight:700;font-size:13px;display:flex;flex-direction:column;align-items:center;justify-content:center;line-height:1.1;">
        <div style="font-size:18px;">12</div>
        <div style="font-size:10.5px;margin-top:4px;letter-spacing:0.08em;white-space:nowrap;">TASYRIQ 2</div>
      </div>
      <div style="flex:1;border:1px solid var(--color-hairline);border-radius:14px;background:var(--color-paper);padding:1rem;">
        <div style="font-weight:600;color:var(--color-ink);font-size:15px;">Lempar 3 Jumrah — Nafar Awal atau Nafar Tsani</div>
        <div style="margin-top:4px;color:var(--color-whisper);font-size:13.5px;line-height:1.55;">Lempar 21 kerikil lagi (3 jumrah × 7). Pilihan: <strong>Nafar Awal</strong> — pulang ke Mekkah sebelum maghrib (harus sudah keluar Mina sebelum matahari terbenam). <strong>Nafar Tsani</strong> — tetap di Mina sampai 13 Dzulhijjah untuk lempar 21 kerikil lagi.</div>
      </div>
    </div>

    <div style="display:flex;gap:1rem;align-items:flex-start;">
      <div style="width:84px;min-height:64px;padding:6px 4px;border-radius:14px;background:var(--color-sage);color:#FBFAF6;font-weight:700;font-size:13px;display:flex;flex-direction:column;align-items:center;justify-content:center;line-height:1.1;">
        <div style="font-size:18px;">13</div>
        <div style="font-size:10.5px;margin-top:4px;letter-spacing:0.08em;white-space:nowrap;">TASYRIQ 3</div>
      </div>
      <div style="flex:1;border:1px solid var(--color-hairline);border-radius:14px;background:var(--color-paper);padding:1rem;">
        <div style="font-weight:600;color:var(--color-ink);font-size:15px;">Lempar Jumrah (Jika Nafar Tsani) — Tawaf Wada'</div>
        <div style="margin-top:4px;color:var(--color-whisper);font-size:13.5px;line-height:1.55;">Bagi yang mengambil Nafar Tsani: lempar 21 kerikil terakhir setelah dzuhur. Lalu semua jamaah kembali ke Mekkah. Sebelum meninggalkan Mekkah: <strong>Tawaf Wada'</strong> (perpisahan) — sah jika Anda akan langsung pulang ke negara asal.</div>
      </div>
    </div>

  </div>
</div>

<h2>Doa-Doa di Setiap Tahapan</h2>

<h3>1. Niat Ihram</h3>

<p>Dibaca setelah memakai pakaian ihram (kain putih), sebelum atau saat melewati miqat:</p>

<blockquote>
<p style="font-family:var(--font-arabic);font-size:22px;line-height:1.8;direction:rtl;text-align:right;" lang="ar">لَبَّيْكَ اللَّهُمَّ حَجًّا</p>
<p><em>Labbaika Allahumma hajjan.</em></p>
<p>"Aku penuhi panggilan-Mu ya Allah, untuk berhaji."</p>
</blockquote>

<p>Untuk haji tamattu', niat umrah dulu: <em>Labbaika Allahumma 'umratan</em>. Untuk qiran: <em>Labbaika Allahumma hajjan wa 'umratan.</em></p>

<h3>2. Talbiyah — Diulang-Ulang Sejak Ihram Sampai Mulai Tawaf</h3>

<blockquote>
<p style="font-family:var(--font-arabic);font-size:22px;line-height:1.9;direction:rtl;text-align:right;" lang="ar">لَبَّيْكَ اللَّهُمَّ لَبَّيْكَ، لَبَّيْكَ لاَ شَرِيكَ لَكَ لَبَّيْكَ، إِنَّ الْحَمْدَ وَالنِّعْمَةَ لَكَ وَالْمُلْكَ، لاَ شَرِيكَ لَكَ</p>
<p><em>Labbaika Allahumma labbaik. Labbaika laa syariika laka labbaik. Innal-hamda wan-ni'mata laka wal-mulk. Laa syariika laka.</em></p>
<p>"Aku penuhi panggilan-Mu ya Allah, aku penuhi panggilan-Mu. Tidak ada sekutu bagi-Mu. Sesungguhnya segala pujian, kenikmatan, dan kerajaan adalah milik-Mu. Tidak ada sekutu bagi-Mu."</p>
</blockquote>

<p>Talbiyah adalah suara haji — diulang keras (untuk pria), pelan (untuk wanita), kapan saja: di kendaraan, saat berdiri, sambil jalan.</p>

<h3>3. Doa Ketika Memandang Ka'bah</h3>

<blockquote>
<p style="font-family:var(--font-arabic);font-size:22px;line-height:1.8;direction:rtl;text-align:right;" lang="ar">اَللَّهُمَّ زِدْ هَذَا الْبَيْتَ تَشْرِيفًا وَتَعْظِيمًا وَتَكْرِيمًا وَمَهَابَةً</p>
<p><em>Allahumma zid haadzal-baita tasyriifan wa ta'dziiman wa takriiman wa mahaabah.</em></p>
<p>"Ya Allah, tambahkanlah pada rumah ini kemuliaan, keagungan, kehormatan, dan kewibawaan."</p>
</blockquote>

<h3>4. Doa Sa'i — Dimulai dari Bukit Shafa</h3>

<p>Di awal Shafa dan di awal Marwah, hadap kiblat, ucapkan:</p>

<blockquote>
<p style="font-family:var(--font-arabic);font-size:22px;line-height:1.8;direction:rtl;text-align:right;" lang="ar">إِنَّ الصَّفَا وَالْمَرْوَةَ مِنْ شَعَائِرِ اللَّهِ</p>
<p>"Sesungguhnya Shafa dan Marwah adalah sebagian dari syi'ar-syi'ar Allah." <em>(QS. Al-Baqarah: 158)</em></p>
</blockquote>

<p>Lalu Allahu Akbar 3x. Sa'i adalah satu putaran = Shafa → Marwah = 1. Total 7 putaran (selesai di Marwah).</p>

<h3>5. Doa Wukuf di Arafah</h3>

<p>Wukuf adalah <em>rukun</em> haji — tanpa wukuf, haji tidak sah. Tidak ada teks doa khusus yang diwajibkan; ini waktu paling utama untuk berdoa apa saja. Rasulullah ﷺ bersabda bahwa doa terbaik adalah doa hari Arafah:</p>

<blockquote>
<p style="font-family:var(--font-arabic);font-size:22px;line-height:1.8;direction:rtl;text-align:right;" lang="ar">لاَ إِلَهَ إِلاَّ اللَّهُ وَحْدَهُ لاَ شَرِيكَ لَهُ، لَهُ الْمُلْكُ وَلَهُ الْحَمْدُ وَهُوَ عَلَى كُلِّ شَيْءٍ قَدِيرٌ</p>
<p><em>Laa ilaaha illallahu wahdahu laa syariika lah, lahul-mulku wa lahul-hamdu wa huwa 'alaa kulli syai'in qadiir.</em></p>
<p>"Tiada tuhan selain Allah, Yang Maha Esa, tidak ada sekutu bagi-Nya. Milik-Nya kerajaan, milik-Nya segala pujian, dan Dia Mahakuasa atas segala sesuatu." <em>(HR. Tirmidzi 3585)</em></p>
</blockquote>

<p>Selama wukuf: ucapkan dzikir ini berkali-kali, baca Al-Qur'an, dan paling penting — <strong>berdoa untuk diri sendiri, keluarga, dan kaum muslimin</strong>. Banyak ulama menyarankan menulis daftar nama orang yang ingin didoakan agar tidak terlewat.</p>

<h3>6. Doa Lempar Jumrah</h3>

<p>Setiap lemparan satu kerikil, ucapkan:</p>

<blockquote>
<p style="font-family:var(--font-arabic);font-size:22px;line-height:1.8;direction:rtl;text-align:right;" lang="ar">اَللَّهُ أَكْبَر</p>
<p><em>Allahu Akbar.</em></p>
</blockquote>

<p>Lempar dari jarak yang aman, kerikil masuk ke kolam — bukan ke tembok. Jangan berdesakan atau membahayakan diri.</p>

<h3>7. Doa Tahallul (Cukur Rambut)</h3>

<blockquote>
<p style="font-family:var(--font-arabic);font-size:22px;line-height:1.8;direction:rtl;text-align:right;" lang="ar">اَلْحَمْدُ لِلَّهِ عَلَى مَا هَدَانَا، اَللَّهُمَّ هَذِهِ نَاصِيَتِي بِيَدِكَ، فَتَقَبَّلْ مِنِّي</p>
<p><em>Alhamdulillaahi 'alaa maa hadaanaa. Allahumma haadzihi naashiyatii bi yadika, fa taqabbal minnii.</em></p>
<p>"Segala puji bagi Allah yang telah memberi kami petunjuk. Ya Allah, ubun-ubunku ada di tangan-Mu, terimalah dari hamba-Mu ini."</p>
</blockquote>

<h3>8. Tawaf Wada' — Doa Perpisahan</h3>

<p>Tidak ada doa wajib khusus, tapi inilah momen yang banyak air mata. Lihat ke arah Ka'bah dan ucapkan apa yang ada di hati. Banyak jamaah mengulang:</p>

<blockquote>
<p style="font-family:var(--font-arabic);font-size:20px;line-height:1.8;direction:rtl;text-align:right;" lang="ar">اَللَّهُمَّ لاَ تَجْعَلْ هَذَا آخِرَ الْعَهْدِ بِبَيْتِكَ الْحَرَامِ</p>
<p><em>Allahumma laa taj'al haadzaa aakhiral-'ahdi bi baitikal-haraam.</em></p>
<p>"Ya Allah, jangan jadikan ini kunjungan terakhir hamba-Mu ke rumah-Mu yang suci."</p>
</blockquote>

<h2>Tips Praktis untuk Jamaah Indonesia</h2>

<h3>Sebelum Berangkat</h3>

<ul>
  <li><strong>Tes kesehatan jauh hari</strong> — jangan tunggu tes Kemenag. Cek jantung, paru, lutut, gula darah. Ada beberapa kondisi yang membuat dokter <em>melarang</em> berangkat haji demi keselamatan.</li>
  <li><strong>Latihan fisik 3 bulan sebelumnya</strong> — jalan kaki minimal 5–7 km setiap hari. Naik tangga. Haji secara fisik berat: total jalan kaki bisa 100+ km.</li>
  <li><strong>Tuntaskan hutang dan urusan keluarga</strong> — banyak ulama menganjurkan menulis wasiat sebelum berangkat haji.</li>
  <li><strong>Mintalah maaf</strong> ke orang-orang sekitar — keluarga, tetangga, rekan kerja. Haji adalah pencucian besar; persiapkan hati dulu.</li>
  <li><strong>Pelajari manasik sungguh-sungguh</strong> — manasik Kemenag bagus, tapi tambah dengan baca buku/menonton video. Pahami SETIAP tahapan sebelum berangkat.</li>
</ul>

<h3>Yang Harus Dibawa</h3>

<ul>
  <li>Dua kain ihram (laki-laki) atau pakaian putih longgar (perempuan) — bawa cadangan.</li>
  <li>Sandal ihram (tidak menutupi mata kaki dan tumit).</li>
  <li>Tas pinggang waterproof untuk paspor + uang tunai.</li>
  <li>Botol semprot kosong (diisi air zamzam dingin selama wukuf — sangat membantu).</li>
  <li>Payung kecil + topi (matahari Mekkah/Mina sangat terik, bisa 45°C+).</li>
  <li>Obat pribadi minimal 60 hari + resep dokter (terjemahkan ke bahasa Inggris/Arab).</li>
  <li>Sandwich/roti tahan lama untuk hari Tarwiyah & Wukuf (catering kadang terlambat saat traffic puncak).</li>
</ul>

<h3>Hal yang Sering Diabaikan</h3>

<ul>
  <li><strong>Identitas gelang</strong> — pakai gelang Kemenag SELAMA haji. Memudahkan petugas mengembalikan ke maktab jika tersesat.</li>
  <li><strong>Foto wajah jamaah</strong> dengan keluarga rombongan — kalau hilang, lebih mudah mencari.</li>
  <li><strong>Posisi tenda di Mina</strong> — hafal nomor maktab, sektor, dan jalan. Mina yang luas dan mirip-mirip menyesatkan ribuan jamaah setiap tahun.</li>
  <li><strong>Hati-hati pickpocket di Masjidil Haram</strong> — terutama saat tawaf. Simpan paspor di hotel, bawa hanya fotokopi.</li>
</ul>

<h2>Catatan Penting Tentang Anak dan Haji</h2>

<p>Anak <strong>belum baligh boleh ikut haji</strong> — hajinya sah dan dicatat sebagai haji sunnah. Tetapi setelah baligh tetap wajib haji lagi jika mampu. Bagi orang tua yang membawa anak: ini perjalanan fisik yang sangat berat; sebagian besar ulama dan dokter menyarankan menunda sampai anak minimal usia 7 tahun, idealnya 12+.</p>

<p>Untuk anak yang ditinggal di rumah, lihat panduan: <a href="/_/parenting/bonding-orangtua/">Tetap Dekat dengan Anak yang Sibuk</a>, dan kalau Anda berangkat saat anak masih kecil, ajarkan mereka mengikuti haji secara virtual — tonton siaran wukuf di Arafah bersama mereka di rumah, ceritakan ulang setelah pulang.</p>

<h2>Penutup</h2>

<p>Haji adalah ibadah seumur hidup — secara harfiah satu kali wajib, tapi pengaruhnya bertahan seumur hidup. Untuk jamaah Indonesia yang menunggu giliran 15+ tahun, perjalanan haji bahkan dimulai jauh sebelum berangkat — dari setoran pertama, dari niat yang dijaga, dari persiapan harta dan tubuh dan hati.</p>

<p>Bagi yang sedang menjalani haji saat tulisan ini diterbitkan: semoga haji mabrur, yang tidak ada balasannya kecuali surga. Bagi yang sedang menunggu giliran: <em>Labbaikallahumma labbaik</em> — Allah sudah memanggil Anda, tinggal jaga panggilan itu sampai waktunya.</p>

<p>Bagi yang belum mampu: doa adalah ibadah. Mulai doakan diri Anda dapat panggilan haji. Mulai menabung sedikit. Allah Maha Tahu niat hamba-Nya — dan Allah <em>mendekatkan jarak</em> bagi yang tulus.</p>`,
      en: `<p>As this is published (28 May 2026 / 12 Dhul Hijjah 1447 H), millions of pilgrims from around the world — including over 221,000 Indonesians — are completing the final stages of Hajj in Mina. This guide is for anyone considering performing Hajj, currently on the waiting list, or wanting to understand the ritual more deeply.</p>

<p>It's structured as: <strong>(1) what Hajj is</strong>, <strong>(2) the five conditions</strong>, <strong>(3) the three types of Hajj performance</strong>, <strong>(4) the three registration paths available in Indonesia</strong>, <strong>(5) the full performance flow with all duas</strong>, and <strong>(6) practical preparation tips</strong>.</p>

<h2>What is Hajj</h2>

<p>Hajj is the fifth pillar of Islam — a visit to the House of Allah (the Ka'bah in Makkah) at a specific time to perform a specific sequence of acts of worship. It's obligatory once in a lifetime for every Muslim who is able (<em>istita'ah</em>), as Allah says:</p>

<blockquote>
<p>"And due to Allah from the people is a pilgrimage to the House — for whoever is able to find thereto a way." <em>(Qur'an 3:97)</em></p>
</blockquote>

<p>Time: <strong>8th to 13th of Dhul Hijjah</strong> each year. Places: Makkah, Mina, Arafah, and Muzdalifah — together called <em>masha'ir muqaddasah</em> (the sacred sites of Hajj).</p>

<h2>The Five Conditions of Hajj</h2>

<p>Before discussing how, it must be clear who is <em>obligated</em>. Scholars agree on five conditions:</p>

<ol>
  <li><strong>Islam</strong> — not obligatory for non-Muslims.</li>
  <li><strong>Maturity</strong> (baligh) — children may join, their Hajj is valid (as supererogatory), but they must perform it again after reaching maturity if able.</li>
  <li><strong>Sanity</strong> — not obligatory under mental impairment that removes awareness.</li>
  <li><strong>Freedom</strong> — historically, slaves were not obligated.</li>
  <li><strong>Ability</strong> (<em>istita'ah</em>) — financial means, physical fitness, and safety of travel.</li>
</ol>

<p>The fifth condition is the most debated in Indonesia's context. Financial ability means: round-trip funds, sufficient maintenance for family during your absence, and not mortgaging life essentials (home, livelihood). Physical ability means strength to handle the demanding journey and rites.</p>

<h2>Three Types of Hajj Performance</h2>

<p>This is a choice of method — all valid, with different consequences regarding umrah and the <em>dam</em> (sacrificial offering).</p>

<h3>1. Hajj Ifrad — Hajj Only</h3>

<p>Pilgrim intends only Hajj (not combined with umrah). After Hajj, umrah may be performed separately. <strong>No dam required.</strong></p>

<p>Suited for: pilgrims arriving in Makkah very close to 8 Dhul Hijjah without time for umrah first.</p>

<h3>2. Hajj Tamattu' — Umrah First, Then Hajj</h3>

<p>Pilgrim intends umrah at the miqat. After completing umrah (tawaf, sa'i, tahallul), they leave ihram. On 8 Dhul Hijjah, they enter ihram again for Hajj. <strong>Dam required</strong> (one sheep).</p>

<p>Suited for: <strong>most Indonesian pilgrims</strong>, since they typically arrive well before Hajj days and have time for umrah first.</p>

<h3>3. Hajj Qiran — Hajj and Umrah Together</h3>

<p>Pilgrim intends both Hajj and umrah simultaneously at the miqat. Remains in ihram from start through Eid. Tawaf and sa'i may be performed once for both. <strong>Dam required.</strong></p>

<p>Suited for: pilgrims who don't break ihram at all — less common in Indonesia.</p>

<h2>Three Registration Paths in Indonesia</h2>

<p>Indonesia sends the largest national contingent in the world — and has the longest waiting list. The government (through the Ministry of Religious Affairs / Kemenag) regulates three official paths.</p>

<h3>Path 1: Regular Hajj (Reguler)</h3>

<ul>
  <li><strong>Operator:</strong> Ministry of Religious Affairs (Kemenag)</li>
  <li><strong>Initial deposit:</strong> IDR 25 million (~USD 1,600)</li>
  <li><strong>2026 total fee:</strong> IDR 56–60 million (varies by embarkation point)</li>
  <li><strong>Waiting list:</strong> 15–48 years (shortest in North Sulawesi; longest in South Sulawesi, South Kalimantan)</li>
  <li><strong>Best for:</strong> majority of pilgrims — most affordable</li>
</ul>

<p><strong>How to register for regular Hajj:</strong></p>

<ol>
  <li>Open a Hajj savings account at a designated Sharia bank (BSI, BNI, BRI Syariah, Mandiri Syariah, etc.). Deposit at least IDR 25 million.</li>
  <li>Bank issues a <strong>Bukti Setoran Awal (BSA)</strong> — initial deposit receipt.</li>
  <li>Bring BSA + national ID + family card + passport + savings book to the local Kemenag office.</li>
  <li>Kemenag staff registers you in the Integrated Hajj Information System (<strong>Siskohat</strong>). You receive a <strong>portion number</strong> for life.</li>
  <li>Wait for your turn per estimated date. Check periodically at <a href="https://haji.kemenag.go.id" rel="noopener nofollow">haji.kemenag.go.id</a>.</li>
  <li>About 1–2 years before departure, you'll be called for final payment, manasik training, and medical exams.</li>
</ol>

<h3>Path 2: Special Hajj (Khusus / ONH Plus)</h3>

<ul>
  <li><strong>Operator:</strong> Licensed private travel agencies (PIHK)</li>
  <li><strong>Initial deposit:</strong> USD 5,000</li>
  <li><strong>Total fee:</strong> USD 10,000–13,000</li>
  <li><strong>Waiting list:</strong> 5–9 years</li>
  <li><strong>Best for:</strong> those who want to depart sooner with premium accommodation</li>
</ul>

<p>Khusus pilgrims still use Indonesia's official quota (15% of national total). Difference: managed by private PIHK, hotels closer to the Haram, smaller group sizes, more comfortable food and transport.</p>

<p><strong>To register:</strong> directly with a registered PIHK. List of registered PIHK is at <a href="https://haji.kemenag.go.id" rel="noopener nofollow">haji.kemenag.go.id</a>. Beware of unlicensed brokers.</p>

<h3>Path 3: Hajj Furoda (Mujamalah Visa)</h3>

<ul>
  <li><strong>Operator:</strong> Invitation visa from the Saudi government, via approved agents</li>
  <li><strong>Total fee:</strong> USD 20,000–35,000</li>
  <li><strong>Waiting list:</strong> none — depart same year</li>
  <li><strong>Best for:</strong> those with large financial capacity and no time to wait</li>
</ul>

<p>Hajj Furoda uses additional Saudi-issued quota (beyond Indonesia's official allocation). Since 2022, agents must be licensed, pilgrims must use a registered PIHK, and tourist visas may not be used for Hajj.</p>

<p><strong>Warning:</strong> many scams in this path. Verify the agent has Kemenag PIHK licensing + valid arrangements with Saudi muassasah.</p>

<h2>Hajj Flow — The 6 Core Days</h2>

<p>Visual summary of acts from 8 to 13 Dhul Hijjah:</p>

<div style="margin:1.5rem 0;padding:1.5rem;border:1px solid var(--color-hairline);border-radius:24px;background:var(--color-paper-2);">
  <div style="font-size:11px;font-weight:700;letter-spacing:0.14em;text-transform:uppercase;color:var(--color-brave-deep);margin-bottom:1rem;">Hajj Tamattu' Flow (Most Common for Indonesian Pilgrims)</div>

  <div style="display:grid;gap:0.75rem;">

    <div style="display:flex;gap:1rem;align-items:flex-start;">
      <div style="width:84px;min-height:64px;padding:6px 4px;border-radius:14px;background:var(--color-brave);color:#FBFAF6;font-weight:700;font-size:13px;display:flex;flex-direction:column;align-items:center;justify-content:center;line-height:1.1;">
        <div style="font-size:18px;">8</div>
        <div style="font-size:10.5px;margin-top:4px;letter-spacing:0.08em;white-space:nowrap;">DHU H.</div>
      </div>
      <div style="flex:1;border:1px solid var(--color-hairline);border-radius:14px;background:var(--color-paper);padding:1rem;">
        <div style="font-weight:600;color:var(--color-ink);font-size:15px;">Day of Tarwiyah — Travel to Mina</div>
        <div style="margin-top:4px;color:var(--color-whisper);font-size:13.5px;line-height:1.55;">Morning: ritual bath, don ihram, intend Hajj at the hotel. Travel to Mina. Pray five prayers at Mina (shortened, not combined). Overnight stay.</div>
      </div>
    </div>

    <div style="display:flex;gap:1rem;align-items:flex-start;">
      <div style="width:84px;min-height:64px;padding:6px 4px;border-radius:14px;background:var(--color-brave-deep);color:#FBFAF6;font-weight:700;font-size:13px;display:flex;flex-direction:column;align-items:center;justify-content:center;line-height:1.1;">
        <div style="font-size:18px;">9</div>
        <div style="font-size:10.5px;margin-top:4px;letter-spacing:0.08em;white-space:nowrap;">DHU H.</div>
      </div>
      <div style="flex:1;border:1px solid var(--color-hairline);border-radius:14px;background:var(--color-paper);padding:1rem;">
        <div style="font-weight:600;color:var(--color-ink);font-size:15px;">⭐ Wuquf at Arafah — Peak of Hajj</div>
        <div style="margin-top:4px;color:var(--color-whisper);font-size:13.5px;line-height:1.55;">Morning: move to Arafah. Dhuhr and Asr combined-shortened at the start. Wuquf (standing) from noon until sunset — du'a, dhikr, istighfar. After Maghrib: move to Muzdalifah, overnight, collect pebbles for stoning.</div>
      </div>
    </div>

    <div style="display:flex;gap:1rem;align-items:flex-start;">
      <div style="width:84px;min-height:64px;padding:6px 4px;border-radius:14px;background:var(--color-clay);color:#FBFAF6;font-weight:700;font-size:13px;display:flex;flex-direction:column;align-items:center;justify-content:center;line-height:1.1;">
        <div style="font-size:18px;">10</div>
        <div style="font-size:10.5px;margin-top:4px;letter-spacing:0.08em;white-space:nowrap;">EID</div>
      </div>
      <div style="flex:1;border:1px solid var(--color-hairline);border-radius:14px;background:var(--color-paper);padding:1rem;">
        <div style="font-weight:600;color:var(--color-ink);font-size:15px;">Stone Jamrat Aqabah · Sacrifice · First Tahallul</div>
        <div style="margin-top:4px;color:var(--color-whisper);font-size:13.5px;line-height:1.55;">Dawn: from Muzdalifah to Mina. Throw 7 pebbles at Jamrat Aqabah. Sacrifice (hadyu) — usually arranged by your operator. Cut/shave hair → first tahallul (ihram restrictions lifted, except marital relations). Travel to Makkah for tawaf ifadhah and sa'i, then back to Mina for the night.</div>
      </div>
    </div>

    <div style="display:flex;gap:1rem;align-items:flex-start;">
      <div style="width:84px;min-height:64px;padding:6px 4px;border-radius:14px;background:var(--color-clay);color:#FBFAF6;font-weight:700;font-size:13px;display:flex;flex-direction:column;align-items:center;justify-content:center;line-height:1.1;">
        <div style="font-size:18px;">11</div>
        <div style="font-size:10.5px;margin-top:4px;letter-spacing:0.08em;white-space:nowrap;">TASHR. 1</div>
      </div>
      <div style="flex:1;border:1px solid var(--color-hairline);border-radius:14px;background:var(--color-paper);padding:1rem;">
        <div style="font-weight:600;color:var(--color-ink);font-size:15px;">Overnight at Mina — Stone All 3 Jamrat</div>
        <div style="margin-top:4px;color:var(--color-whisper);font-size:13.5px;line-height:1.55;">After Dhuhr (prime time): stone Jamrat Ula (7) → Wustha (7) → Aqabah (7) = 21 pebbles total. Spend another night in Mina.</div>
      </div>
    </div>

    <div style="display:flex;gap:1rem;align-items:flex-start;">
      <div style="width:84px;min-height:64px;padding:6px 4px;border-radius:14px;background:var(--color-clay);color:#FBFAF6;font-weight:700;font-size:13px;display:flex;flex-direction:column;align-items:center;justify-content:center;line-height:1.1;">
        <div style="font-size:18px;">12</div>
        <div style="font-size:10.5px;margin-top:4px;letter-spacing:0.08em;white-space:nowrap;">TASHR. 2</div>
      </div>
      <div style="flex:1;border:1px solid var(--color-hairline);border-radius:14px;background:var(--color-paper);padding:1rem;">
        <div style="font-weight:600;color:var(--color-ink);font-size:15px;">Stone 3 Jamrat — Nafr Awwal or Nafr Thani</div>
        <div style="margin-top:4px;color:var(--color-whisper);font-size:13.5px;line-height:1.55;">Stone another 21 pebbles. Choice: <strong>Nafr Awwal</strong> — leave Mina before sunset and return to Makkah. <strong>Nafr Thani</strong> — stay until 13 Dhul Hijjah for one more round of stoning.</div>
      </div>
    </div>

    <div style="display:flex;gap:1rem;align-items:flex-start;">
      <div style="width:84px;min-height:64px;padding:6px 4px;border-radius:14px;background:var(--color-sage);color:#FBFAF6;font-weight:700;font-size:13px;display:flex;flex-direction:column;align-items:center;justify-content:center;line-height:1.1;">
        <div style="font-size:18px;">13</div>
        <div style="font-size:10.5px;margin-top:4px;letter-spacing:0.08em;white-space:nowrap;">TASHR. 3</div>
      </div>
      <div style="flex:1;border:1px solid var(--color-hairline);border-radius:14px;background:var(--color-paper);padding:1rem;">
        <div style="font-weight:600;color:var(--color-ink);font-size:15px;">Final Stoning (Nafr Thani) — Farewell Tawaf</div>
        <div style="margin-top:4px;color:var(--color-whisper);font-size:13.5px;line-height:1.55;">For Nafr Thani: stone 21 pebbles after Dhuhr. All pilgrims return to Makkah. Before leaving: <strong>Tawaf Wada'</strong> (farewell) — valid if you're heading straight home.</div>
      </div>
    </div>

  </div>
</div>

<h2>Duas at Each Stage</h2>

<p>(For brevity, see the Indonesian version above for full Arabic + transliteration of each du'a. Key ones in summary:)</p>

<ul>
  <li><strong>Intention for Ihram:</strong> "Labbaika Allahumma hajjan" (or 'umratan / hajjan wa 'umratan).</li>
  <li><strong>Talbiyah</strong> (repeated from ihram to start of tawaf): "Labbaika Allahumma labbaik..."</li>
  <li><strong>Upon seeing the Ka'bah:</strong> "Allahumma zid haadzal-baita tasyriifan..."</li>
  <li><strong>Sa'i</strong> at Safa and Marwa: recite the verse from Al-Baqarah 158, then Allahu Akbar 3×.</li>
  <li><strong>Wuquf at Arafah</strong> — no specific obligatory text; the Prophet ﷺ named "Laa ilaaha illallahu wahdahu laa syariika lah, lahul-mulku..." as the best du'a of that day.</li>
  <li><strong>Stoning</strong> — say "Allahu Akbar" with each pebble.</li>
  <li><strong>Tahallul:</strong> "Alhamdulillaahi 'alaa maa hadaanaa..."</li>
  <li><strong>Farewell tawaf:</strong> "Allahumma laa taj'al haadzaa aakhiral-'ahdi bi baitikal-haraam."</li>
</ul>

<h2>Practical Tips</h2>

<ul>
  <li><strong>Health check months in advance</strong> — don't wait for Kemenag's. Heart, lungs, knees, blood sugar. Some conditions disqualify on safety grounds.</li>
  <li><strong>Three months of physical training</strong> — walk 5–7 km daily. Climb stairs. Hajj is physically demanding: total walking can exceed 100 km.</li>
  <li><strong>Settle debts and family matters</strong> — many scholars recommend writing a will before departing.</li>
  <li><strong>Seek forgiveness</strong> from family, neighbors, colleagues. Hajj is a great cleansing; prepare the heart first.</li>
  <li><strong>Study the manasik seriously</strong> — beyond what Kemenag provides. Understand each stage thoroughly before departing.</li>
  <li><strong>Pack:</strong> two ihram cloths (men), modest white (women); ihram-compliant sandals; waterproof waist bag for passport + cash; spray bottle for cool zamzam; umbrella + hat; 60-day medications + prescriptions translated; durable food for Tarwiyah and Wuquf days.</li>
  <li><strong>Wear your Kemenag wristband</strong> — helps officials return you to your maktab if lost.</li>
  <li><strong>Memorize your tent location in Mina</strong> — maktab number, sector, road. Mina's similarity gets thousands lost yearly.</li>
  <li><strong>Watch for pickpockets at the Haram</strong> — especially during tawaf. Leave passport at hotel; carry only a photocopy.</li>
</ul>

<h2>A Note on Children</h2>

<p>Children before puberty <strong>may join Hajj</strong> — their Hajj is valid and counted as supererogatory. But once mature, they must perform Hajj again if able. For parents bringing children: the physical demands are significant; most scholars and doctors recommend waiting until at least age 7, ideally 12+.</p>

<p>For children left at home, see: <a href="/_/parenting/bonding-orangtua/">Bonding with Children You're Away From</a>. And if you depart while your child is young, teach them to follow Hajj virtually — watch the Arafah livestream together with them at home, retell the journey when you return.</p>

<h2>Closing</h2>

<p>Hajj is a lifetime act of worship — literally obligatory once, but its effect lasts a lifetime. For Indonesian pilgrims waiting 15+ years, the journey begins long before departure — from the first deposit, the kept intention, the years of preparing wealth, body, and heart.</p>

<p>For those performing Hajj as this is published: may yours be <em>mabrur</em>, the reward of which is nothing less than Paradise. For those waiting: <em>Labbaikallahumma labbaik</em> — Allah has already called you; keep that call alive until the time comes.</p>

<p>For those not yet able: du'a is itself worship. Begin praying that you will be called. Begin saving, even a little. Allah knows His servants' intentions — and Allah <em>shortens the distance</em> for those who are sincere.</p>`,
    },
    tags: ["haji", "ibadah-haji", "jamaah-indonesia", "fiqh", "dzulhijjah"],
    published: "2026-05-28",
    updated: "2026-05-28",
    readingTimeMin: 22,
    author: "tim-baby-mo",
    faq: [
      {
        question: {
          id: "Apa saja jenis pendaftaran haji di Indonesia?",
          en: "What are the registration types for Hajj in Indonesia?",
        },
        answer: {
          id: "Ada tiga jalur resmi: <strong>Haji Reguler</strong> (Kemenag, biaya Rp 56–60 juta, waiting list 15–48 tahun), <strong>Haji Khusus / ONH Plus</strong> (PIHK swasta, USD 10–13 ribu, waiting list 5–9 tahun), dan <strong>Haji Furoda</strong> (visa undangan, USD 20–35 ribu, tanpa waiting list). Ketiganya legal dan diakui Kemenag. Pilih sesuai kemampuan dan urgensi.",
          en: "Three official paths: <strong>Regular Hajj</strong> (Ministry of Religion, IDR 56–60 million, 15–48 year wait), <strong>Special Hajj (ONH Plus)</strong> (private PIHK, USD 10–13K, 5–9 year wait), and <strong>Hajj Furoda</strong> (invitation visa, USD 20–35K, no wait). All three are legal. Choose based on means and urgency.",
        },
      },
      {
        question: {
          id: "Berapa lama waiting list haji reguler di Indonesia?",
          en: "How long is the regular Hajj waiting list in Indonesia?",
        },
        answer: {
          id: "Bervariasi per provinsi: paling pendek di Sulawesi Utara sekitar 15 tahun, paling panjang di Sulawesi Selatan dan Kalimantan Selatan bisa 47–48 tahun. Provinsi Jawa rata-rata 25–35 tahun. Cek estimasi terkini di <a href=\"https://haji.kemenag.go.id\" rel=\"noopener nofollow\">haji.kemenag.go.id</a> setelah Anda mendapat nomor porsi.",
          en: "Varies by province: shortest in North Sulawesi at ~15 years, longest in South Sulawesi and South Kalimantan reaching 47–48 years. Java provinces average 25–35 years. Check current estimates at haji.kemenag.go.id after you receive your portion number.",
        },
      },
      {
        question: {
          id: "Apa beda haji reguler dan haji plus (ONH Plus)?",
          en: "What's the difference between regular Hajj and ONH Plus?",
        },
        answer: {
          id: "<strong>Reguler:</strong> dikelola Kemenag, biaya paling murah (Rp 56–60 juta), waiting list panjang (15–48 tahun), hotel agak jauh dari Masjidil Haram, rombongan besar. <strong>Plus:</strong> dikelola PIHK swasta, biaya 4–5× lebih mahal (USD 10–13 ribu), waiting list jauh lebih pendek (5–9 tahun), hotel premium dekat Haram, rombongan kecil, layanan lebih personal. Hukum dan rukun ibadahnya sama persis.",
          en: "<strong>Regular:</strong> managed by Kemenag, cheapest (IDR 56–60M), long wait (15–48 years), hotels farther from the Haram, large groups. <strong>Plus:</strong> private PIHK, 4–5× more expensive (USD 10–13K), much shorter wait (5–9 years), premium hotels near the Haram, smaller groups, more personal service. The fiqh and rituals are identical.",
        },
      },
      {
        question: {
          id: "Bagaimana cara daftar haji reguler dari awal?",
          en: "How do I register for regular Hajj from scratch?",
        },
        answer: {
          id: "Lima langkah: (1) Buka tabungan haji di bank syariah (BSI, BNI, dll) dengan setoran awal minimal Rp 25 juta. (2) Dapatkan Bukti Setoran Awal (BSA) dari bank. (3) Bawa BSA + KTP + KK + paspor ke Kantor Kemenag kabupaten/kota. (4) Dapat nomor porsi seumur hidup di sistem Siskohat. (5) Tunggu giliran — saat dipanggil (1–2 tahun sebelum berangkat), lakukan pelunasan, manasik, dan tes kesehatan.",
          en: "Five steps: (1) Open a Hajj savings account at a Sharia bank (BSI, BNI, etc.) with an initial deposit of at least IDR 25 million. (2) Get the Bukti Setoran Awal (BSA) receipt. (3) Bring BSA + ID + family card + passport to your local Kemenag office. (4) Receive a lifetime portion number in the Siskohat system. (5) Wait for your turn — when called (1–2 years before departure), pay the balance, complete manasik training, and get a medical exam.",
        },
      },
      {
        question: {
          id: "Apakah anak boleh ikut haji?",
          en: "Can children join Hajj?",
        },
        answer: {
          id: "Boleh, hajinya sah dan dicatat sebagai haji sunnah. <strong>Tetapi</strong> setelah baligh, dia tetap wajib haji lagi jika mampu. Ditambah lagi: haji secara fisik sangat berat untuk anak kecil — sebagian besar ulama dan dokter menyarankan menunda sampai anak minimal usia 7 tahun, idealnya 12 tahun ke atas. Pikirkan kesiapan fisik dan keamanan anak di kerumunan jutaan jamaah sebelum memutuskan.",
          en: "Yes, the Hajj is valid and counted as supererogatory. <strong>However</strong>, after reaching puberty, they must perform Hajj again if able. Also: Hajj is physically very demanding for young children — most scholars and doctors recommend waiting until at least age 7, ideally 12+. Consider physical readiness and safety in crowds of millions before deciding.",
        },
      },
      {
        question: {
          id: "Apa hukumnya jika wanita haid saat haji?",
          en: "What's the ruling if a woman menstruates during Hajj?",
        },
        answer: {
          id: "Haid tidak menggagalkan haji. Wanita yang haid <strong>tetap melakukan semua manasik</strong> (ihram, wukuf di Arafah, mabit, lempar jumrah, sa'i) kecuali <strong>tawaf</strong> — yang harus ditunda sampai suci. Khusus untuk Tawaf Wada' (perpisahan), wanita haid <em>tidak diwajibkan</em>. Jika haid datang saat sudah memasuki tahallul awal, tinggal tunggu suci untuk Tawaf Ifadhah saja. Konsultasikan dengan ustadzah pembimbing rombongan untuk kasus spesifik.",
          en: "Menstruation does not invalidate Hajj. A menstruating woman <strong>still performs all the rites</strong> (ihram, Wuquf at Arafah, overnight stays, stoning, sa'i) except <strong>tawaf</strong> — which is postponed until purification. For Farewell Tawaf, menstruating women are <em>exempted</em>. If menstruation starts after first tahallul, simply wait for purification before Tawaf Ifadhah. Consult your group's female religious guide for specific cases.",
        },
      },
      {
        question: {
          id: "Berapa biaya minimum untuk mulai daftar haji?",
          en: "What's the minimum cost to start registering for Hajj?",
        },
        answer: {
          id: "Untuk haji reguler, setoran awal yang masuk Siskohat adalah <strong>Rp 25 juta</strong>. Setelah itu Anda mendapat nomor porsi dan masuk antrian. BPIH (biaya pelunasan) sekitar Rp 30–35 juta lagi, dilakukan saat dipanggil berangkat (15–48 tahun lagi). Selama menunggu, dana setoran awal Anda dikelola oleh Badan Pengelola Keuangan Haji (BPKH) dan menghasilkan nilai manfaat yang ikut mengurangi BPIH. Untuk haji khusus, setoran awal USD 5.000.",
          en: "For regular Hajj, the initial deposit recorded in Siskohat is <strong>IDR 25 million</strong>. After this you receive a portion number and join the queue. The final balance (BPIH) is around IDR 30–35 million more, paid when called to depart (15–48 years later). While waiting, your deposit is managed by BPKH and generates returns that offset the final BPIH. For special Hajj, the initial deposit is USD 5,000.",
        },
      },
      {
        question: {
          id: "Apa yang dimaksud dengan haji mabrur?",
          en: "What is a mabrur Hajj?",
        },
        answer: {
          id: "Haji mabrur adalah haji yang diterima Allah. Rasulullah ﷺ bersabda bahwa balasannya tidak lain adalah surga (HR. Bukhari & Muslim). Tanda-tanda haji mabrur menurut ulama: (1) <em>akhlaknya lebih baik setelah pulang</em> dari sebelum berangkat, (2) lebih dekat dengan ibadah, (3) lebih lembut kepada keluarga, (4) lebih banyak sedekah, (5) tidak kembali kepada dosa lama. Jadi tolok ukur mabrur bukan sekadar di Tanah Suci, tapi <strong>perubahan hidup setelah pulang</strong>.",
          en: "A mabrur Hajj is one that is accepted by Allah. The Prophet ﷺ said its reward is nothing less than Paradise (Bukhari & Muslim). Scholars identify signs: (1) <em>better character after return</em> than before departure, (2) closer to worship, (3) gentler with family, (4) more generous, (5) not returning to old sins. The measure isn't in Makkah — it's in the <strong>life change after coming home</strong>.",
        },
      },
    ],
  },

  {
    slug: "panduan-idul-adha-dan-qurban-untuk-keluarga",
    title: {
      id: "Panduan Idul Adha & Qurban untuk Keluarga: Tata Cara, Doa, dan Cara Melibatkan Anak",
      en: "Eid al-Adha & Qurbani Guide for Families: Rituals, Duas, and Involving Children",
    },
    excerpt: {
      id: "Panduan lengkap menyambut Hari Raya Idul Adha untuk keluarga Indonesia: kisah Nabi Ibrahim ﷺ, tata cara sholat Ied, syarat dan tata cara qurban (kambing/sapi/online), 3 hari Tasyriq, doa-doa penting, dan cara melibatkan anak sehingga Idul Adha jadi kenangan emosional yang dibawa seumur hidup.",
      en: "A complete guide to celebrating Eid al-Adha for families: the story of Prophet Ibrahim ﷺ, the Eid prayer, qurbani requirements and procedure (goat/cow/online), the three Tashriq days, key duas, and how to involve children so Eid becomes an emotional memory carried for life.",
    },
    body: {
      id: `<p>Saat tulisan ini diterbitkan (28 Mei 2026 / 12 Dzulhijjah 1447 H), umat Islam Indonesia sedang berada di hari kedua Tasyriq — dua hari setelah hari raya Idul Adha (Selasa, 26 Mei 2026). Masih dalam masa penyembelihan hewan kurban yang berlangsung hingga 13 Dzulhijjah (Jumat, 29 Mei).</p>

<p>Panduan ini untuk keluarga muslim Indonesia: <strong>(1) makna Idul Adha</strong>, <strong>(2) kisah Nabi Ibrahim ﷺ untuk diceritakan ke anak</strong>, <strong>(3) tata cara Sholat Ied</strong>, <strong>(4) syarat dan tata cara qurban</strong>, <strong>(5) hari Tasyriq</strong>, <strong>(6) cara melibatkan anak</strong>, <strong>(7) doa-doa penting</strong>.</p>

<h2>Apa itu Idul Adha</h2>

<p>Idul Adha adalah salah satu dari dua hari raya umat Islam (yang satu lagi: Idul Fitri). Jatuh pada <strong>10 Dzulhijjah</strong> — hari ke-10 bulan terakhir dalam kalender Hijriyah. Disebut juga "Yaumun Nahr" (hari penyembelihan), karena di hari ini disunnahkan menyembelih hewan qurban sebagai napak tilas pengorbanan Nabi Ibrahim ﷺ.</p>

<p>Di Indonesia, Idul Adha 1447 H jatuh pada <strong>Selasa, 26 Mei 2026</strong> berdasarkan pengumuman Kementerian Agama. Penyembelihan hewan qurban dilakukan setelah Sholat Ied (10 Dzulhijjah) sampai sebelum maghrib 13 Dzulhijjah (29 Mei).</p>

<h2>Kisah Nabi Ibrahim ﷺ — Untuk Diceritakan ke Anak</h2>

<p>Tidak ada Idul Adha tanpa kisah ini. Setiap anak muslim sebaiknya mendengarnya, kalau bisa setiap tahun.</p>

<p>Nabi Ibrahim ﷺ — kekasih Allah — sudah tua dan lama menanti anak. Akhirnya Allah memberinya seorang putra: <strong>Ismail</strong>. Ketika Ismail menginjak usia yang sudah bisa berjalan dan membantu ayahnya, Nabi Ibrahim mendapat mimpi yang berulang-ulang — mimpi yang bagi seorang nabi adalah wahyu — yaitu perintah dari Allah untuk menyembelih anaknya sendiri.</p>

<p>Yang luar biasa dari kisah ini bukan perintahnya. Tapi <strong>jawaban Nabi Ibrahim dan Ismail</strong>. Nabi Ibrahim berbicara dulu kepada anaknya. Tidak menyembunyikan. Tidak menipu. Beliau berkata:</p>

<blockquote>
<p>"Wahai anakku, sesungguhnya aku melihat dalam mimpi bahwa aku menyembelihmu. Bagaimana pendapatmu?"</p>
</blockquote>

<p>Ismail muda menjawab dengan kalimat yang membuat hati setiap orang tua bergetar:</p>

<blockquote>
<p>"Wahai ayahku, kerjakan apa yang diperintahkan kepadamu. Insya Allah engkau akan mendapatiku termasuk orang-orang yang sabar." <em>(QS. As-Saffat: 102)</em></p>
</blockquote>

<p>Mereka berdua pergi ke tempat penyembelihan. Saat pisau hampir menyentuh leher Ismail, Allah mengganti Ismail dengan seekor kibas (domba) besar dari surga. Ujian sudah lulus. Perintah itu memang bukan untuk benar-benar menyembelih anak — tapi untuk menguji apakah Ibrahim dan Ismail rela menyerahkan apa yang paling mereka cintai kepada Allah.</p>

<p>Dari peristiwa inilah qurban Idul Adha berasal.</p>

<h3>Cara Bercerita ke Anak (per Usia)</h3>

<ul>
  <li><strong>Usia 3–5:</strong> Cerita pendek dengan suara naratif. "Nabi Ibrahim sayang sekali sama anaknya, namanya Ismail..." Skip detail traumatis pisau/leher; cukup "Allah suruh ayahnya untuk... percaya saja sama Allah. Allah sayang. Akhirnya yang disembelih bukan Ismail, tapi domba dari surga."</li>
  <li><strong>Usia 6–8:</strong> Lebih lengkap. Jelaskan kenapa Allah menguji. Tekankan jawaban Ismail. Ajak anak bertanya: "Kalau adik jadi Ismail, kira-kira bisa nggak bilang seperti itu ke Ayah?"</li>
  <li><strong>Usia 9+:</strong> Diskusikan makna spiritualnya. Apa yang paling kita cintai di dunia ini? Apakah kita rela melepaskannya untuk Allah? Qurban hewan adalah simbol — yang dilihat Allah adalah ketakwaan di hati, bukan dagingnya.</li>
</ul>

<p>Lihat juga panduan: <a href="/_/blog/cara-bercerita-kisah-nabi-untuk-anak/">Cara Bercerita Kisah Nabi untuk Anak</a>.</p>

<h2>Sholat Idul Adha</h2>

<p>Sholat Ied adalah <strong>sunnah muakkadah</strong> (sangat dianjurkan), dikerjakan berjamaah di lapangan terbuka atau masjid pada pagi hari 10 Dzulhijjah. Dua rakaat. Dilakukan sebelum khutbah (kebalikan dari sholat Jumat).</p>

<h3>Tata Cara Singkat</h3>

<div style="margin:1.5rem 0;padding:1.5rem;border:1px solid var(--color-hairline);border-radius:24px;background:var(--color-paper-2);">
  <div style="font-size:11px;font-weight:700;letter-spacing:0.14em;text-transform:uppercase;color:var(--color-brave-deep);margin-bottom:1rem;">Tata Cara Sholat Idul Adha (2 Rakaat)</div>

  <div style="display:grid;gap:0.75rem;">

    <div style="display:flex;gap:1rem;align-items:flex-start;">
      <div style="flex-shrink:0;width:48px;height:48px;border-radius:14px;background:var(--color-brave);color:#FBFAF6;font-weight:700;font-size:18px;display:flex;align-items:center;justify-content:center;">1</div>
      <div style="flex:1;border:1px solid var(--color-hairline);border-radius:14px;background:var(--color-paper);padding:1rem;">
        <div style="font-weight:600;color:var(--color-ink);font-size:15px;">Niat dalam hati</div>
        <div style="margin-top:4px;color:var(--color-whisper);font-size:13.5px;line-height:1.55;">"Aku niat sholat sunnah Idul Adha dua rakaat (sebagai imam/makmum) karena Allah Ta'ala."</div>
      </div>
    </div>

    <div style="display:flex;gap:1rem;align-items:flex-start;">
      <div style="flex-shrink:0;width:48px;height:48px;border-radius:14px;background:var(--color-brave);color:#FBFAF6;font-weight:700;font-size:18px;display:flex;align-items:center;justify-content:center;">2</div>
      <div style="flex:1;border:1px solid var(--color-hairline);border-radius:14px;background:var(--color-paper);padding:1rem;">
        <div style="font-weight:600;color:var(--color-ink);font-size:15px;">Takbiratul Ihram → 7 takbir tambahan</div>
        <div style="margin-top:4px;color:var(--color-whisper);font-size:13.5px;line-height:1.55;">Rakaat pertama: setelah takbir pembuka, baca doa iftitah, lalu <strong>7 takbir tambahan</strong> (mengangkat tangan setiap takbir). Di antara takbir, baca: "Subhanallah, walhamdulillah, wa laa ilaaha illallah, wallahu akbar."</div>
      </div>
    </div>

    <div style="display:flex;gap:1rem;align-items:flex-start;">
      <div style="flex-shrink:0;width:48px;height:48px;border-radius:14px;background:var(--color-brave-deep);color:#FBFAF6;font-weight:700;font-size:18px;display:flex;align-items:center;justify-content:center;">3</div>
      <div style="flex:1;border:1px solid var(--color-hairline);border-radius:14px;background:var(--color-paper);padding:1rem;">
        <div style="font-weight:600;color:var(--color-ink);font-size:15px;">Al-Fatihah + Surah → Ruku' → Sujud (seperti biasa)</div>
        <div style="margin-top:4px;color:var(--color-whisper);font-size:13.5px;line-height:1.55;">Imam disunnahkan membaca surat panjang yang mengandung kisah Nabi Ibrahim atau ujian, seperti Surat Al-A'la atau Qaf.</div>
      </div>
    </div>

    <div style="display:flex;gap:1rem;align-items:flex-start;">
      <div style="flex-shrink:0;width:48px;height:48px;border-radius:14px;background:var(--color-brave);color:#FBFAF6;font-weight:700;font-size:18px;display:flex;align-items:center;justify-content:center;">4</div>
      <div style="flex:1;border:1px solid var(--color-hairline);border-radius:14px;background:var(--color-paper);padding:1rem;">
        <div style="font-weight:600;color:var(--color-ink);font-size:15px;">Rakaat kedua: 5 takbir tambahan</div>
        <div style="margin-top:4px;color:var(--color-whisper);font-size:13.5px;line-height:1.55;">Setelah bangun dari sujud, takbir bangun, lalu <strong>5 takbir tambahan</strong> sebelum membaca Al-Fatihah. Sama dzikirnya di antara takbir.</div>
      </div>
    </div>

    <div style="display:flex;gap:1rem;align-items:flex-start;">
      <div style="flex-shrink:0;width:48px;height:48px;border-radius:14px;background:var(--color-sage);color:#FBFAF6;font-weight:700;font-size:18px;display:flex;align-items:center;justify-content:center;">5</div>
      <div style="flex:1;border:1px solid var(--color-hairline);border-radius:14px;background:var(--color-paper);padding:1rem;">
        <div style="font-weight:600;color:var(--color-ink);font-size:15px;">Salam → Khutbah Idul Adha</div>
        <div style="margin-top:4px;color:var(--color-whisper);font-size:13.5px;line-height:1.55;">Setelah salam, jangan langsung pulang. Dengarkan khutbah (dua khutbah, dipisah duduk sebentar). Khutbah Ied adalah bagian dari ibadah.</div>
      </div>
    </div>

  </div>
</div>

<h3>Adab Sebelum Berangkat Sholat Ied</h3>

<ul>
  <li>Mandi sunnah pagi-pagi.</li>
  <li>Memakai pakaian terbaik yang dimiliki — bersih, harum, putih bila ada.</li>
  <li><strong>Tidak makan sebelum sholat</strong> (kebalikan dari Idul Fitri — di Idul Adha justru sunnah menunda sarapan sampai setelah sholat / setelah daging qurban tersedia).</li>
  <li>Berangkat lewat jalan yang berbeda dengan pulangnya (sunnah).</li>
  <li>Bertakbir sepanjang perjalanan: "Allahu akbar, Allahu akbar, laa ilaaha illallah, wallahu akbar, Allahu akbar wa lillahil-hamd."</li>
</ul>

<h2>Qurban — Penyembelihan Hewan</h2>

<p>Qurban adalah ibadah inti Idul Adha. Hukumnya <strong>sunnah muakkadah</strong> bagi yang mampu (sebagian ulama Hanafi menganggapnya wajib). Yang menyembelih satu kambing/domba = pahala untuk satu orang. Satu sapi/kerbau = pahala untuk maksimal 7 orang (patungan).</p>

<h3>Syarat Hewan Qurban</h3>

<ul>
  <li><strong>Jenis:</strong> kambing, domba, sapi, kerbau, atau unta. (Ayam tidak sah untuk qurban.)</li>
  <li><strong>Usia minimal:</strong>
    <ul>
      <li>Kambing: sudah berumur ≥1 tahun</li>
      <li>Domba: sudah berumur ≥6 bulan dan giginya sudah berganti</li>
      <li>Sapi/kerbau: sudah berumur ≥2 tahun</li>
      <li>Unta: sudah berumur ≥5 tahun</li>
    </ul>
  </li>
  <li><strong>Sehat sempurna</strong> — tidak ada cacat yang mempengaruhi daging. Tidak buta, tidak pincang parah, tidak terlalu kurus.</li>
  <li><strong>Anggota tubuh utuh</strong> — tidak putus telinganya, tidak patah tanduknya sampai akarnya, tidak putus ekor.</li>
</ul>

<p>Cacat ringan (telinga belah sedikit, ekor terpotong sedikit) <strong>diperbolehkan</strong> oleh sebagian ulama, tapi pilih yang paling sempurna jika ada pilihan — qurban yang paling utama adalah yang paling baik.</p>

<h3>Waktu Penyembelihan</h3>

<p>Sah dilakukan mulai <strong>setelah sholat Idul Adha tanggal 10 Dzulhijjah</strong> sampai <strong>sebelum maghrib 13 Dzulhijjah</strong>. Untuk 1447 H di Indonesia: dari Selasa 26 Mei pagi sampai Jumat 29 Mei sore.</p>

<p>Penyembelihan sebelum sholat Ied: <em>tidak sah</em> sebagai qurban (jadi sedekah biasa saja, kata Nabi ﷺ).</p>

<h3>Tata Cara Menyembelih</h3>

<ol>
  <li>Hadapkan hewan ke arah kiblat.</li>
  <li>Baringkan di sisi kiri, ikat kakinya kecuali kaki kanan belakang.</li>
  <li>Pisau harus tajam — Rasulullah ﷺ memerintahkan menyembelih dengan cepat agar hewan tidak menderita.</li>
  <li>Penyembelih membaca:
    <blockquote>
      <p style="font-family:var(--font-arabic);font-size:22px;line-height:1.8;direction:rtl;text-align:right;" lang="ar">بِسْمِ اللَّهِ، اَللَّهُ أَكْبَر، اَللَّهُمَّ هَذَا مِنْكَ وَلَكَ، تَقَبَّلْ مِنِّي يَا كَرِيم</p>
      <p><em>Bismillah, Allahu akbar. Allahumma haadzaa minka wa laka, taqabbal minnii yaa Kariim.</em></p>
      <p>"Dengan nama Allah, Allah Maha Besar. Ya Allah, ini dari-Mu dan untuk-Mu, terimalah dariku wahai Yang Maha Pemurah."</p>
    </blockquote>
  </li>
  <li>Sembelih dengan satu gerakan tegas — putus saluran napas, saluran makanan, dan dua urat darah leher.</li>
  <li>Tunggu hewan tenang sepenuhnya sebelum dikuliti.</li>
</ol>

<h3>Distribusi Daging Qurban</h3>

<p>Daging qurban dibagi menjadi <strong>tiga bagian</strong> (umumnya):</p>

<ul>
  <li><strong>1/3 untuk keluarga</strong> yang berqurban — boleh dimakan, disimpan, dimasak menjadi hidangan.</li>
  <li><strong>1/3 untuk kerabat dan tetangga</strong> — termasuk yang non-muslim.</li>
  <li><strong>1/3 untuk fakir miskin</strong> — yang paling membutuhkan.</li>
</ul>

<p>Pembagian ini sunnah; pembagian lain juga sah selama tidak menjual sebagian darinya. Yang menyembelih tidak boleh menjual daging atau kulit qurban (kecuali untuk kepentingan fakir miskin lewat panitia).</p>

<h2>Tiga Cara Berqurban di Indonesia 2026</h2>

<h3>1. Qurban Langsung di Kampung / Masjid Setempat</h3>

<p>Yang paling tradisional. Beli hewan di peternak/pasar hewan, bawa ke masjid, panitia menyembelih dan membagikan ke warga setempat.</p>

<ul>
  <li><strong>Biaya 2026:</strong> Kambing Rp 3,5–6 juta; sapi 1/7 orang Rp 4–7 juta.</li>
  <li><strong>Kelebihan:</strong> langsung kontribusi ke lingkungan sekitar, anak bisa ikut menyaksikan, suasana komunal.</li>
  <li><strong>Kekurangan:</strong> di daerah perkotaan yang sudah surplus daging, manfaatnya tidak sebesar di daerah miskin.</li>
</ul>

<h3>2. Qurban Lewat Lembaga Amil (Online)</h3>

<p>Lembaga seperti Dompet Dhuafa, BAZNAS, Aksi Cepat Tanggap (ACT), Rumah Zakat, dan banyak lainnya menerima qurban online. Hewan disembelih di daerah pelosok / luar negeri (Palestina, Yaman, Suriah) yang membutuhkan.</p>

<ul>
  <li><strong>Biaya 2026:</strong> Kambing Rp 2,4–3 juta (program luar negeri lebih murah karena harga hewan beda).</li>
  <li><strong>Kelebihan:</strong> dampak lebih besar di daerah yang benar-benar kekurangan, bisa qurban dari mana saja, transparan via laporan.</li>
  <li><strong>Kekurangan:</strong> tidak menyaksikan langsung, anak tidak terlibat fisik.</li>
</ul>

<h3>3. Qurban Patungan Sapi 1/7</h3>

<p>Tujuh orang patungan satu sapi. Setiap orang dapat porsi 1/7 dari biaya sapi. Lebih terjangkau dari beli kambing sendiri.</p>

<ul>
  <li><strong>Biaya 2026:</strong> Rp 4–7 juta per orang (1/7 sapi).</li>
  <li><strong>Cocok untuk:</strong> jamaah masjid, kantor, keluarga besar yang ingin berqurban bersama.</li>
  <li><strong>Tata cara:</strong> niat ditetapkan masing-masing dari 7 orang. Bukan satu orang qurban dengan niat 7 orang.</li>
</ul>

<h2>Hari Tasyriq (11–13 Dzulhijjah)</h2>

<p>Tiga hari setelah Idul Adha disebut <strong>hari Tasyriq</strong>. Untuk Indonesia 1447 H: Rabu 27 Mei – Jumat 29 Mei 2026.</p>

<h3>Aturan Khusus Hari Tasyriq</h3>

<ul>
  <li><strong>Dilarang berpuasa</strong> — Nabi ﷺ bersabda hari-hari ini adalah "hari makan, minum, dan dzikir kepada Allah" (HR. Muslim). Yang sedang qadha puasa Ramadan pun ditunda.</li>
  <li><strong>Masih dianjurkan takbir</strong> — Mulai dari subuh hari Arafah (9 Dzulhijjah) sampai ashar hari Tasyriq terakhir (13 Dzulhijjah), disunnahkan takbir setelah setiap sholat fardhu.</li>
  <li><strong>Masih boleh menyembelih qurban</strong> — Penyembelihan sah sampai sebelum maghrib 13 Dzulhijjah.</li>
  <li><strong>Banyak-banyak dzikir</strong> — Allah berfirman: "Dan berdzikirlah (dengan menyebut) nama Allah dalam hari-hari yang sudah ditentukan." (QS. Al-Baqarah: 203) — yang dimaksud adalah hari Tasyriq.</li>
</ul>

<h2>Cara Melibatkan Anak</h2>

<p>Idul Adha tanpa keterlibatan anak hanya akan jadi "hari libur." Dengan keterlibatan, jadi kenangan emosional yang dibawa seumur hidup. Beberapa cara:</p>

<h3>Sehari Sebelum (9 Dzulhijjah)</h3>

<ul>
  <li>Ceritakan ulang kisah Nabi Ibrahim dan Ismail sebelum tidur.</li>
  <li>Siapkan pakaian Ied bersama — anak pilih baju sendiri yang akan dipakai esok.</li>
  <li>Ajarkan takbir Idul Adha — anak ulang sambil bermain.</li>
</ul>

<h3>Pagi Idul Adha</h3>

<ul>
  <li>Bangunkan anak lebih awal — ini hari spesial, bukan hari biasa.</li>
  <li>Mandi, pakai pakaian terbaik, parfum (untuk yang lebih besar).</li>
  <li>Berangkat ke lapangan sholat Ied — kalau anak masih kecil dan lapangan terbuka, gendong/dorong stroller.</li>
  <li>Pulang lewat jalan berbeda — sebagai aktivitas eksplorasi anak ("ayo coba jalan satunya").</li>
</ul>

<h3>Saat Penyembelihan Qurban</h3>

<ul>
  <li><strong>Usia 0–4:</strong> Jangan bawa ke tempat penyembelihan. Trauma visual + bau bisa lama menempel.</li>
  <li><strong>Usia 5–7:</strong> Boleh saksikan dari jarak agak jauh, sambil dipegangi orang tua. Jelaskan pelan: "Hewan ini ibadah, untuk Allah, untuk dibagikan ke orang yang butuh." Jangan paksa kalau anak tidak mau melihat.</li>
  <li><strong>Usia 8+:</strong> Bisa lebih dekat, bahkan ikut membantu memegang hewan (untuk anak yang siap). Banyak anak Indonesia merasakan momen ini sebagai pengalaman spiritual mendalam.</li>
</ul>

<h3>Saat Membagikan Daging</h3>

<ul>
  <li>Ajak anak ikut mengantar daging ke tetangga atau panti asuhan. Biarkan dia yang mengetuk pintu dan memberi langsung.</li>
  <li>Jelaskan: "Daging ini bukan untuk kita semua — ini hadiah untuk orang yang jarang makan daging."</li>
  <li>Ajarkan ucapan saat memberi: "Idul Adha Mubarak, semoga berkah."</li>
</ul>

<h3>Saat Makan Bersama</h3>

<ul>
  <li>Masak sate/gulai/rendang bersama anak (sesuai usia). Anak yang ikut memasak akan lebih menghargai daging tersebut.</li>
  <li>Sebelum makan, baca <a href="/_/doa/sebelum-makan/">doa sebelum makan</a> bersama keras-keras.</li>
  <li>Ceritakan ulang ke anak: "Dulu Nabi Ibrahim siap menyembelih Ismail untuk Allah. Sekarang kita menyembelih hewan untuk dibagikan. Itulah qurban."</li>
</ul>

<h2>Doa-Doa Penting Idul Adha</h2>

<h3>1. Takbir Idul Adha (Sejak 9 Dzulhijjah Subuh – 13 Dzulhijjah Ashar)</h3>

<blockquote>
<p style="font-family:var(--font-arabic);font-size:22px;line-height:1.9;direction:rtl;text-align:right;" lang="ar">اَللَّهُ أَكْبَرُ، اَللَّهُ أَكْبَرُ، اَللَّهُ أَكْبَرُ، لاَ إِلٰهَ إِلاَّ اللَّهُ، وَاللَّهُ أَكْبَرُ، اَللَّهُ أَكْبَرُ، وَلِلَّهِ الْحَمْدُ</p>
<p><em>Allahu akbar, Allahu akbar, Allahu akbar. Laa ilaaha illallah, wallahu akbar. Allahu akbar, wa lillahil-hamd.</em></p>
<p>"Allah Maha Besar, Allah Maha Besar, Allah Maha Besar. Tiada Tuhan selain Allah, Allah Maha Besar. Allah Maha Besar, dan bagi-Nya segala pujian."</p>
</blockquote>

<h3>2. Doa Saat Berqurban</h3>

<blockquote>
<p style="font-family:var(--font-arabic);font-size:22px;line-height:1.8;direction:rtl;text-align:right;" lang="ar">بِسْمِ اللَّهِ، اَللَّهُ أَكْبَر، اَللَّهُمَّ مِنْكَ وَلَكَ، عَنْ [نَامَ مَنْ يَضَحِّي]</p>
<p><em>Bismillah, Allahu akbar. Allahumma minka wa laka, 'an [sebut nama orang yang berqurban].</em></p>
<p>"Dengan nama Allah, Allah Maha Besar. Ya Allah, [qurban ini] dari-Mu dan untuk-Mu, dari [nama]."</p>
</blockquote>

<h3>3. Ucapan Selamat Idul Adha</h3>

<p>Yang sunnah dari para sahabat:</p>

<blockquote>
<p style="font-family:var(--font-arabic);font-size:22px;line-height:1.8;direction:rtl;text-align:right;" lang="ar">تَقَبَّلَ اللَّهُ مِنَّا وَمِنْكُمْ</p>
<p><em>Taqabbalallahu minnaa wa minkum.</em></p>
<p>"Semoga Allah menerima (amal ibadah) dari kami dan dari kalian."</p>
</blockquote>

<p>Bukan "Selamat Idul Adha, Mohon Maaf Lahir Batin" — itu lebih khusus untuk Idul Fitri (di Idul Adha tidak ada konsep saling maaf-memaafkan secara khusus).</p>

<h2>Yang Harus Dihindari</h2>

<ul>
  <li><strong>Berpuasa di hari Idul Adha dan Tasyriq</strong> — haram bagi muslim (kecuali jamaah haji yang qiran/tamattu' dan tidak punya hadyu, boleh puasa hari Tasyriq).</li>
  <li><strong>Memamerkan qurban di media sosial</strong> — ibadah yang dipamerkan bisa hilang pahalanya. Boleh memberitahu sebagai dakwah, tapi hindari tonjolkan diri.</li>
  <li><strong>Menyembelih sebelum sholat Ied</strong> — tidak sah sebagai qurban.</li>
  <li><strong>Memilih hewan termurah dan jelek</strong> — qurban adalah pemberian terbaik untuk Allah. Pilih hewan yang sehat dan baik dalam batas kemampuan.</li>
  <li><strong>Menjual kulit atau daging qurban</strong> — yang menyembelih tidak boleh menjual sebagian dari qurban. Boleh dimakan, dihadiahkan, atau disedekahkan.</li>
  <li><strong>Mengejek atau memaksa anak yang takut melihat sembelihan</strong> — anak punya kepekaan berbeda; hormati.</li>
</ul>

<h2>Penutup</h2>

<p>Idul Adha adalah hari raya pengorbanan — bukan hanya pengorbanan hewan, tapi pengorbanan dari hal-hal yang paling kita cintai untuk Allah. Bagi anak, ini adalah satu-satunya hari raya yang melibatkan darah dan daging dan komunitas dan kisah heroik — campuran yang langka. Manfaatkan.</p>

<p>Tahun depan, anak Anda akan ingat: "Tahun lalu Ayah/Ibu ajak saya bagi daging ke tetangga." Atau: "Tahun lalu saya pegang kambing pertama kali." Atau: "Tahun lalu Bunda cerita Nabi Ibrahim sebelum tidur dan saya nggak bisa tidur karena pikirin Ismail."</p>

<p>Itulah Idul Adha. Bukan hari libur — hari yang membentuk identitas.</p>

<p><em>Taqabbalallahu minnaa wa minkum.</em></p>`,
      en: `<p>As this is published (28 May 2026 / 12 Dhul Hijjah 1447 H), Muslims in Indonesia are in the second day of Tashriq — two days after Eid al-Adha (Tuesday, 26 May 2026). Qurbani sacrifices continue through 13 Dhul Hijjah (Friday, 29 May).</p>

<p>This guide is for Muslim families: <strong>(1) the meaning of Eid al-Adha</strong>, <strong>(2) the story of Prophet Ibrahim ﷺ to tell children</strong>, <strong>(3) how to perform the Eid prayer</strong>, <strong>(4) qurbani conditions and procedure</strong>, <strong>(5) the Tashriq days</strong>, <strong>(6) how to involve children</strong>, <strong>(7) the essential duas</strong>.</p>

<h2>What is Eid al-Adha</h2>

<p>Eid al-Adha is one of two Islamic celebrations (the other being Eid al-Fitr). It falls on <strong>10 Dhul Hijjah</strong> — the 10th day of the final month of the Hijri calendar. Also called "Yawm al-Nahr" (the Day of Sacrifice), because on this day Muslims are encouraged to sacrifice an animal — retracing the footsteps of Prophet Ibrahim's ﷺ sacrifice.</p>

<p>In Indonesia, Eid al-Adha 1447 H falls on <strong>Tuesday, 26 May 2026</strong>. Animal sacrifices may be performed from after the Eid prayer (10 Dhul Hijjah) until before maghrib on 13 Dhul Hijjah (29 May).</p>

<h2>The Story of Prophet Ibrahim ﷺ — For Children</h2>

<p>There is no Eid al-Adha without this story. Every Muslim child should hear it, ideally every year.</p>

<p>Prophet Ibrahim ﷺ — the beloved of Allah — was old and had long awaited a son. Finally Allah granted him <strong>Ismail</strong>. When Ismail reached the age where he could walk and help his father, Prophet Ibrahim had a recurring dream — and for a prophet, dreams are revelation — to sacrifice his own son.</p>

<p>What's remarkable about this story isn't the command. It's <strong>the response of Ibrahim and Ismail</strong>. Ibrahim spoke to his son first. Didn't hide it. Didn't deceive him. He said:</p>

<blockquote>
<p>"O my son, I have seen in a dream that I am sacrificing you. So tell me — what do you think?"</p>
</blockquote>

<p>Young Ismail replied with words that make any parent's heart tremble:</p>

<blockquote>
<p>"O my father, do as you are commanded. You will find me — Allah willing — among the patient." <em>(Qur'an As-Saffat: 102)</em></p>
</blockquote>

<p>They went together to the place of sacrifice. As the knife was about to touch Ismail's neck, Allah replaced Ismail with a great ram from Paradise. The test was passed. The command was never to actually take a child's life — but to test whether Ibrahim and Ismail would surrender what they loved most to Allah.</p>

<p>From this event, the Eid al-Adha qurbani originates.</p>

<h3>How to Tell Children (by Age)</h3>

<ul>
  <li><strong>Ages 3–5:</strong> Short narrative voice. "Prophet Ibrahim loved his son Ismail very much..." Skip traumatic details (knife/neck); just "Allah asked his father to... trust Allah. Allah loves us. In the end it wasn't Ismail who was sacrificed but a ram from Paradise."</li>
  <li><strong>Ages 6–8:</strong> More complete. Explain why Allah tested. Emphasize Ismail's reply. Ask: "If you were Ismail, could you say that to your dad?"</li>
  <li><strong>Ages 9+:</strong> Discuss the spiritual meaning. What do we love most in this world? Are we willing to give it up for Allah? Animal sacrifice is symbol — what Allah sees is the taqwa in the heart, not the meat.</li>
</ul>

<p>See also: <a href="/_/blog/cara-bercerita-kisah-nabi-untuk-anak/">How to Tell Prophet Stories to Children</a>.</p>

<h2>The Eid al-Adha Prayer</h2>

<p>Eid prayer is <strong>sunnah muakkadah</strong> (strongly recommended), performed in congregation in an open field or mosque on the morning of 10 Dhul Hijjah. Two rakaat. Performed before the khutbah (opposite of Friday prayer).</p>

<h3>Quick Procedure</h3>

<ul>
  <li><strong>Intention</strong> in the heart: "I intend the two-rakaat sunnah Eid al-Adha prayer for Allah."</li>
  <li><strong>Opening takbir → 7 extra takbirs</strong> in the first rakat. Between takbirs, say: "Subhanallah, walhamdulillah, wa laa ilaaha illallah, wallahu akbar."</li>
  <li><strong>Al-Fatihah + a surah</strong> → ruku → sujud (as normal). Imam preferably reads a surah with the story of Ibrahim or trials (Al-A'la, Qaf).</li>
  <li><strong>Second rakat: 5 extra takbirs</strong> after rising from sujud, before Al-Fatihah. Same dhikr between takbirs.</li>
  <li><strong>Salam → Khutbah</strong> — don't leave immediately. Listen to both khutbahs.</li>
</ul>

<h3>Etiquette Before Going</h3>

<ul>
  <li>Ritual bath in the early morning.</li>
  <li>Wear your best clean clothes — white if you have them.</li>
  <li><strong>Don't eat before the prayer</strong> (opposite of Eid al-Fitr — here it's sunnah to delay breakfast until after the prayer or until qurbani meat is available).</li>
  <li>Take a different route home than the one you came (sunnah).</li>
  <li>Recite takbir along the way.</li>
</ul>

<h2>Qurbani — The Animal Sacrifice</h2>

<p>Qurbani is the core ritual of Eid al-Adha. It's <strong>sunnah muakkadah</strong> for those able (some Hanafi scholars consider it obligatory). One goat or sheep = reward for one person. One cow or buffalo = reward for up to 7 people (group qurbani).</p>

<h3>Animal Requirements</h3>

<ul>
  <li><strong>Type:</strong> goat, sheep, cow, buffalo, or camel. (Chicken is not valid.)</li>
  <li><strong>Minimum age:</strong> Goat ≥1 year; sheep ≥6 months with teeth replaced; cow/buffalo ≥2 years; camel ≥5 years.</li>
  <li><strong>Fully healthy</strong> — no defects that affect the meat. Not blind, not severely lame, not emaciated.</li>
  <li><strong>Intact body parts</strong> — no ears cut off, horns not broken to the root, tail not severed.</li>
</ul>

<h3>Time of Sacrifice</h3>

<p>Valid from <strong>after the Eid prayer on 10 Dhul Hijjah</strong> until <strong>before maghrib on 13 Dhul Hijjah</strong>. For 1447 H in Indonesia: from Tuesday 26 May morning until Friday 29 May evening.</p>

<p>Sacrifice before the Eid prayer is <em>not valid</em> as qurbani (it becomes regular sadaqah, the Prophet ﷺ said).</p>

<h3>Procedure</h3>

<ol>
  <li>Face the animal toward the qiblah.</li>
  <li>Lay it on its left side, tie its legs except the right hind leg.</li>
  <li>The knife must be sharp — the Prophet ﷺ commanded slaughter to be quick so the animal doesn't suffer.</li>
  <li>The one slaughtering recites: <em>"Bismillah, Allahu akbar. Allahumma minka wa laka, taqabbal minnii."</em></li>
  <li>Cut with one decisive motion — through windpipe, esophagus, and both jugular veins.</li>
  <li>Wait until the animal is fully still before skinning.</li>
</ol>

<h3>Meat Distribution</h3>

<p>Qurbani meat is traditionally divided into thirds:</p>

<ul>
  <li><strong>1/3 for the family</strong> who performed the qurbani.</li>
  <li><strong>1/3 for relatives and neighbors</strong> — including non-Muslims.</li>
  <li><strong>1/3 for the poor</strong> — those most in need.</li>
</ul>

<p>This split is sunnah; other splits are valid as long as nothing is sold. The slaughterer may not sell the meat or skin (except for the benefit of the poor via the committee).</p>

<h2>Three Ways to Perform Qurbani in Indonesia 2026</h2>

<h3>1. Local at Village / Mosque</h3>

<p>Most traditional. Buy from a farmer/livestock market, bring to mosque, the committee slaughters and distributes locally.</p>

<ul>
  <li><strong>2026 cost:</strong> Goat IDR 3.5–6M; 1/7 of a cow IDR 4–7M.</li>
  <li><strong>Pros:</strong> direct community contribution, children can witness, communal feel.</li>
  <li><strong>Cons:</strong> in urban areas with meat surplus, impact is smaller than in poorer regions.</li>
</ul>

<h3>2. Through Charity Institutions (Online)</h3>

<p>Organizations like Dompet Dhuafa, BAZNAS, Rumah Zakat, and many others accept online qurbani. Animals are slaughtered in remote areas or abroad (Palestine, Yemen, Syria) where the meat is most needed.</p>

<ul>
  <li><strong>2026 cost:</strong> Goat IDR 2.4–3M (foreign programs cheaper due to lower local prices).</li>
  <li><strong>Pros:</strong> bigger impact in actually-needy areas, qurbani from anywhere, transparent reports.</li>
  <li><strong>Cons:</strong> no live witness, child not physically involved.</li>
</ul>

<h3>3. Group Cow Qurbani (1/7)</h3>

<p>Seven people share one cow. Each gets 1/7 of the cost. More affordable than buying a goat alone.</p>

<ul>
  <li><strong>2026 cost:</strong> IDR 4–7M per person.</li>
  <li><strong>Suited for:</strong> mosque congregations, offices, extended families wanting to do qurbani together.</li>
  <li><strong>Procedure:</strong> each of the 7 has their own intention. Not one person intending on behalf of 7.</li>
</ul>

<h2>Tashriq Days (11–13 Dhul Hijjah)</h2>

<p>The three days after Eid al-Adha are called <strong>Tashriq days</strong>. For Indonesia 1447 H: Wednesday 27 May – Friday 29 May 2026.</p>

<h3>Special Rules</h3>

<ul>
  <li><strong>Fasting is prohibited</strong> — the Prophet ﷺ said these are "days of eating, drinking, and remembering Allah" (Muslim). Even those owing Ramadan fasts must wait.</li>
  <li><strong>Takbir still recommended</strong> — From dawn on the Day of Arafah (9 Dhul Hijjah) until Asr of the final Tashriq day (13 Dhul Hijjah), takbir after every fard prayer is sunnah.</li>
  <li><strong>Qurbani still valid</strong> — sacrifice is valid until before maghrib on 13 Dhul Hijjah.</li>
  <li><strong>Increased dhikr</strong> — Allah says: "And remember Allah during the appointed days." (Qur'an 2:203) — referring to the Tashriq days.</li>
</ul>

<h2>How to Involve Children</h2>

<p>Eid al-Adha without children's involvement is just a "day off." With involvement, it becomes an emotional memory carried for life.</p>

<h3>The Day Before (9 Dhul Hijjah)</h3>

<ul>
  <li>Retell the story of Ibrahim and Ismail before bedtime.</li>
  <li>Prepare Eid clothes together — child picks their outfit for tomorrow.</li>
  <li>Teach Eid takbir — child repeats while playing.</li>
</ul>

<h3>Eid Morning</h3>

<ul>
  <li>Wake the child earlier than usual — this is a special day, not a regular one.</li>
  <li>Bath, best clothes, perfume (for older ones).</li>
  <li>Go to the open prayer ground — for small children, carry or stroller.</li>
  <li>Return home a different way — frame as exploration ("let's try the other road").</li>
</ul>

<h3>During the Sacrifice</h3>

<ul>
  <li><strong>Ages 0–4:</strong> Don't bring to the slaughter site. Visual + smell trauma can linger.</li>
  <li><strong>Ages 5–7:</strong> May watch from a slight distance, held by a parent. Gently explain: "This animal is for Allah, to be shared with people who need food." Don't force if they don't want to look.</li>
  <li><strong>Ages 8+:</strong> Can come closer, even help hold the animal (for those ready). Many Indonesian children describe this as a deeply spiritual experience.</li>
</ul>

<h3>Distributing Meat</h3>

<ul>
  <li>Take the child along when delivering meat to neighbors or orphanages. Let them knock and hand over personally.</li>
  <li>Explain: "This meat isn't all for us — it's a gift for people who rarely have meat."</li>
  <li>Teach: "Eid Mubarak, may it bring blessing."</li>
</ul>

<h3>Eating Together</h3>

<ul>
  <li>Cook sate / gulai / rendang together (age-appropriate). A child who helps cook appreciates the meat more.</li>
  <li>Before eating, recite <a href="/_/doa/sebelum-makan/">the meal du'a</a> together aloud.</li>
  <li>Retell: "Long ago Prophet Ibrahim was willing to sacrifice Ismail for Allah. Today we sacrifice an animal to share. That is qurbani."</li>
</ul>

<h2>Key Duas</h2>

<h3>1. Eid Takbir</h3>

<p><em>Allahu akbar, Allahu akbar, Allahu akbar. Laa ilaaha illallah, wallahu akbar. Allahu akbar, wa lillahil-hamd.</em></p>

<h3>2. During Sacrifice</h3>

<p><em>Bismillah, Allahu akbar. Allahumma minka wa laka, 'an [name].</em></p>

<h3>3. Eid Greeting</h3>

<p>From the Companions: <em>"Taqabbalallahu minnaa wa minkum."</em> ("May Allah accept from us and from you.") — not "Eid Mubarak, mohon maaf lahir batin" which is more associated with Eid al-Fitr.</p>

<h2>What to Avoid</h2>

<ul>
  <li><strong>Fasting on Eid al-Adha and Tashriq days</strong> — prohibited (except for hajj pilgrims who couldn't afford hadyu, who may fast Tashriq).</li>
  <li><strong>Showing off qurbani on social media</strong> — worship that's publicly displayed can lose reward. Sharing as dawah is fine, but avoid self-prominence.</li>
  <li><strong>Slaughtering before the Eid prayer</strong> — not valid as qurbani.</li>
  <li><strong>Choosing the cheapest, poorest animal</strong> — qurbani is your best gift to Allah. Choose a healthy, good animal within your means.</li>
  <li><strong>Selling qurbani skin or meat</strong> — the slaughterer may not sell any of it.</li>
  <li><strong>Mocking or forcing children afraid to watch the sacrifice</strong> — children have different sensitivities; respect this.</li>
</ul>

<h2>Closing</h2>

<p>Eid al-Adha is the festival of sacrifice — not just of animals, but of giving up what we love most for Allah. For a child, it's the only festival involving blood and meat and community and a heroic story — a rare combination. Make use of it.</p>

<p>Next year, your child will remember: "Last year Dad/Mom took me to deliver meat to the neighbor." Or: "Last year I held a goat for the first time." Or: "Last year Mom told the story of Prophet Ibrahim before bed and I couldn't sleep thinking about Ismail."</p>

<p>That is Eid al-Adha. Not a day off — a day that shapes identity.</p>

<p><em>Taqabbalallahu minnaa wa minkum.</em></p>`,
    },
    tags: ["idul-adha", "qurban", "eid", "dzulhijjah", "fiqh", "anak"],
    published: "2026-05-28",
    updated: "2026-05-28",
    readingTimeMin: 18,
    author: "tim-baby-mo",
    faq: [
      {
        question: {
          id: "Kapan Idul Adha 1447 H di Indonesia?",
          en: "When is Eid al-Adha 1447 H in Indonesia?",
        },
        answer: {
          id: "Idul Adha 1447 H di Indonesia jatuh pada <strong>Selasa, 26 Mei 2026</strong>, berdasarkan pengumuman Kementerian Agama. Hari Tasyriq (di mana qurban masih bisa disembelih) berlangsung 27–29 Mei 2026.",
          en: "Eid al-Adha 1447 H in Indonesia falls on <strong>Tuesday, 26 May 2026</strong>, per the Ministry of Religious Affairs. The Tashriq days (when qurbani may still be sacrificed) run 27–29 May 2026.",
        },
      },
      {
        question: {
          id: "Apa hukum berqurban — wajib atau sunnah?",
          en: "Is qurbani obligatory or recommended?",
        },
        answer: {
          id: "Mayoritas ulama (Maliki, Syafi'i, Hanbali) berpendapat qurban hukumnya <strong>sunnah muakkadah</strong> — sangat dianjurkan bagi yang mampu, tapi tidak berdosa kalau ditinggalkan. Mazhab Hanafi menganggap <strong>wajib</strong> bagi yang mampu (memiliki nisab). Yang disepakati semua: bagi yang mampu, jangan sampai meninggalkannya — Rasulullah ﷺ memperingatkan keras orang yang mampu tapi tidak berqurban.",
          en: "Most schools (Maliki, Shafi'i, Hanbali) hold qurbani is <strong>sunnah muakkadah</strong> — strongly recommended for those able, but not sinful to skip. The Hanafi school considers it <strong>wajib</strong> for those who can afford it. All agree: those who can afford it shouldn't skip — the Prophet ﷺ warned strongly against this.",
        },
      },
      {
        question: {
          id: "Apa syarat hewan qurban yang sah?",
          en: "What are the requirements for a valid qurbani animal?",
        },
        answer: {
          id: "Hewan harus: (1) jenis yang diizinkan — <strong>kambing, domba, sapi, kerbau, atau unta</strong> (ayam tidak sah); (2) usia minimum — kambing ≥1 tahun, domba ≥6 bulan dengan gigi sudah berganti, sapi/kerbau ≥2 tahun, unta ≥5 tahun; (3) sehat sempurna tanpa cacat yang mempengaruhi daging — tidak buta, tidak pincang parah, tidak terlalu kurus; (4) anggota tubuh utuh.",
          en: "The animal must be: (1) of an allowed type — <strong>goat, sheep, cow, buffalo, or camel</strong> (chicken not valid); (2) of minimum age — goat ≥1 year, sheep ≥6 months with replaced teeth, cow/buffalo ≥2 years, camel ≥5 years; (3) fully healthy with no defects affecting meat — not blind, not severely lame, not emaciated; (4) intact body parts.",
        },
      },
      {
        question: {
          id: "Berapa biaya qurban kambing dan sapi 2026?",
          en: "How much does qurbani cost for goat and cow in 2026?",
        },
        answer: {
          id: "<strong>Kambing</strong> di Indonesia 2026: Rp 3,5–6 juta (lokal) atau Rp 2,4–3 juta (program luar negeri via lembaga amil). <strong>Sapi patungan 1/7 orang:</strong> Rp 4–7 juta per orang. Harga bervariasi berdasarkan daerah, berat hewan, dan rute distribusi. Untuk lokasi pelosok atau luar negeri biaya lebih murah karena harga ternak setempat lebih rendah.",
          en: "<strong>Goat</strong> in Indonesia 2026: IDR 3.5–6M (local) or IDR 2.4–3M (overseas programs via charities). <strong>Group cow 1/7 share:</strong> IDR 4–7M per person. Prices vary by region, animal weight, and distribution route. Remote or overseas programs are cheaper due to lower local livestock prices.",
        },
      },
      {
        question: {
          id: "Sampai kapan batas waktu menyembelih hewan qurban?",
          en: "Until when is qurbani sacrifice valid?",
        },
        answer: {
          id: "Penyembelihan qurban sah dilakukan mulai <strong>setelah Sholat Idul Adha pada 10 Dzulhijjah</strong> sampai <strong>sebelum maghrib 13 Dzulhijjah</strong>. Untuk Indonesia 1447 H: dari Selasa 26 Mei pagi (setelah Sholat Ied) sampai Jumat 29 Mei sore (sebelum maghrib). Yang menyembelih sebelum Sholat Ied: <strong>tidak sah sebagai qurban</strong>, hanya dianggap sedekah biasa.",
          en: "Qurbani slaughter is valid from <strong>after the Eid prayer on 10 Dhul Hijjah</strong> until <strong>before maghrib on 13 Dhul Hijjah</strong>. For Indonesia 1447 H: from Tuesday 26 May morning (after Eid prayer) until Friday 29 May before maghrib. Slaughter before the Eid prayer is <strong>not valid as qurbani</strong> — it counts only as ordinary sadaqah.",
        },
      },
      {
        question: {
          id: "Bolehkah qurban diniatkan untuk orang yang sudah meninggal?",
          en: "Can qurbani be intended on behalf of a deceased person?",
        },
        answer: {
          id: "Ada perbedaan pendapat ulama. <strong>Mazhab Hanafi dan Hanbali:</strong> sah, pahalanya sampai kepada yang meninggal. <strong>Mazhab Maliki dan Syafi'i:</strong> tidak sah kecuali jika almarhum berwasiat sebelum meninggal. Mayoritas ulama kontemporer membolehkan dengan catatan: qurban untuk diri sendiri tetap utama dulu, baru qurban untuk yang meninggal sebagai amalan tambahan.",
          en: "Scholars differ. <strong>Hanafi and Hanbali:</strong> valid, reward reaches the deceased. <strong>Maliki and Shafi'i:</strong> not valid unless the deceased explicitly willed it. Most contemporary scholars permit it on the condition that one's own qurbani is prioritized first, then qurbani for the deceased as an additional act.",
        },
      },
      {
        question: {
          id: "Apa beda qurban dan aqiqah?",
          en: "What's the difference between qurbani and aqiqah?",
        },
        answer: {
          id: "<strong>Qurban</strong> dilakukan setiap Idul Adha oleh muslim dewasa yang mampu — meneladani pengorbanan Nabi Ibrahim. <strong>Aqiqah</strong> dilakukan untuk seorang anak yang baru lahir (idealnya hari ke-7) — sebagai syukur atas kelahiran. Aqiqah: 2 kambing untuk anak laki-laki, 1 untuk perempuan. Daging aqiqah dimasak dulu, baru dibagikan; daging qurban boleh mentah. Hukum aqiqah: sunnah muakkadah untuk orang tua.",
          en: "<strong>Qurbani</strong> is performed every Eid al-Adha by able adult Muslims — following the example of Prophet Ibrahim. <strong>Aqiqah</strong> is performed for a newborn (ideally on day 7) — as gratitude for the birth. Aqiqah: 2 goats for a boy, 1 for a girl. Aqiqah meat is cooked first, then distributed; qurbani meat may be distributed raw. Aqiqah ruling: sunnah muakkadah for parents.",
        },
      },
      {
        question: {
          id: "Apa hukum potong rambut dan kuku sebelum berqurban?",
          en: "What's the ruling on cutting hair and nails before qurbani?",
        },
        answer: {
          id: "Bagi yang berniat berqurban, disunnahkan tidak memotong rambut, kuku, atau kulit <strong>sejak masuk tanggal 1 Dzulhijjah sampai setelah menyembelih hewan qurban</strong> (HR. Muslim). Ini adalah <strong>sunnah, bukan wajib</strong> — kalau terlanjur potong, tetap sah qurbannya. Hikmahnya: menyerupai jamaah haji yang sedang ihram, dan menambah keistimewaan momen qurban.",
          en: "For those intending qurbani, it's recommended <strong>not to cut hair, nails, or skin from 1 Dhul Hijjah until after the sacrifice</strong> (Muslim). This is <strong>sunnah, not obligatory</strong> — if you've already cut, the qurbani is still valid. The wisdom: resembling the pilgrims in ihram, and adding distinction to the qurbani moment.",
        },
      },
    ],
  },

  {
    slug: "rajab-bulan-haram-bersama-anak",
    title: {
      id: "Bulan Rajab Bersama Anak: Bulan Haram dan Persiapan Menuju Ramadan",
      en: "The Month of Rajab with Kids: A Sacred Month and the Road to Ramadan",
    },
    excerpt: {
      id: "Rajab adalah satu dari empat bulan haram yang dimuliakan Allah. Cara mengenalkannya kepada anak, amalan yang dianjurkan, dan menghindari amalan yang tidak ada tuntunannya.",
      en: "Rajab is one of the four sacred months Allah honored. How to introduce it to children, the recommended deeds, and avoiding baseless practices.",
    },
    body: {
      id: `<p>Rajab adalah bulan ketujuh dalam kalender Hijriyah, dan termasuk salah satu dari <strong>empat bulan haram</strong> (bulan yang dimuliakan) bersama Dzulqa'idah, Dzulhijjah, dan Muharram. Allah berfirman bahwa di bulan-bulan ini kita dianjurkan memperbanyak kebaikan dan menjauhi kezaliman.</p>

<h2>Apa yang istimewa dari Rajab</h2>

<p>Rajab adalah "bulan pembuka" — orang-orang dahulu mengatakan: Rajab menanam, Sya'ban menyirami, Ramadan memanen. Artinya, Rajab adalah waktu mulai mempersiapkan hati menuju Ramadan yang tinggal dua bulan lagi.</p>

<ul>
  <li><strong>Termasuk bulan haram</strong> — pahala kebaikan dilipatgandakan, dan dosa juga lebih berat. Waktu yang baik untuk lebih hati-hati menjaga lisan dan perbuatan.</li>
  <li><strong>Waktu memperbanyak doa</strong> — terutama doa yang masyhur: <em>"Allahumma baarik lanaa fii Rajab wa Sya'baan, wa ballighnaa Ramadhaan"</em> (Ya Allah, berkahilah kami di bulan Rajab dan Sya'ban, dan sampaikanlah kami ke bulan Ramadan).</li>
</ul>

<h2>Cara mengenalkan Rajab kepada anak</h2>

<ul>
  <li><strong>Mulai hitung mundur Ramadan</strong> — "Dua bulan lagi Ramadan, lho! Yuk siap-siap dari sekarang." Anak jadi menanti, bukan kaget.</li>
  <li><strong>Ajarkan doa Rajab yang singkat</strong> di atas — mudah dihafal anak, dibaca tiap pagi.</li>
  <li><strong>Latih satu kebaikan kecil</strong> sebagai "proyek Rajab" — misalnya rutin sholat Subuh, atau bersedekah seribu rupiah tiap hari ke celengan masjid.</li>
</ul>

<h2>Yang perlu diluruskan</h2>

<p>Banyak amalan yang beredar di bulan Rajab tetapi <strong>tidak memiliki dasar yang kuat</strong> dalam sunnah, seperti puasa khusus "puasa Rajab" yang dianggap wajib, atau ritual malam tertentu dengan keutamaan yang dibuat-buat. Para ulama mengingatkan: berpuasa sunnah di bulan Rajab boleh (sebagai puasa sunnah biasa, seperti Senin-Kamis), tetapi tidak ada puasa khusus yang dikhususkan untuk Rajab dengan dalil yang sahih.</p>

<p>Untuk anak: ajarkan yang jelas dan benar — memperbanyak doa, menjaga sholat, berbuat baik. Itu sudah cukup memuliakan bulan Rajab.</p>

<h2>Penutup</h2>

<p>Rajab adalah undangan halus dari Allah: "Ramadan sudah dekat, siapkan hatimu." Mengajak anak menyambut Rajab berarti mengajarkan mereka satu keterampilan hidup yang besar — mempersiapkan sesuatu yang penting jauh-jauh hari, dengan penuh kegembiraan.</p>`,
      en: `<p>Rajab is the seventh month of the Hijri calendar and one of the <strong>four sacred months</strong> (the honored months) along with Dhul Qa'dah, Dhul Hijjah, and Muharram. Allah states that in these months we are encouraged to increase good deeds and avoid wrongdoing.</p>

<h2>What makes Rajab special</h2>

<p>Rajab is the "opening month" — the early Muslims used to say: Rajab is for planting, Sha'ban for watering, Ramadan for harvesting. Meaning Rajab is the time to begin preparing the heart for Ramadan, now just two months away.</p>

<ul>
  <li><strong>One of the sacred months</strong> — rewards for good are multiplied, and sins weigh heavier. A good time to be extra careful with one's tongue and actions.</li>
  <li><strong>A time to increase du'a</strong> — especially the well-known one: <em>"Allahumma baarik lanaa fii Rajab wa Sya'baan, wa ballighnaa Ramadhaan"</em> (O Allah, bless us in Rajab and Sha'ban, and let us reach Ramadan).</li>
</ul>

<h2>How to introduce Rajab to children</h2>

<ul>
  <li><strong>Start the Ramadan countdown</strong> — "Two months until Ramadan! Let's get ready now." The child anticipates rather than being surprised.</li>
  <li><strong>Teach the short Rajab du'a</strong> above — easy for kids to memorize, recited each morning.</li>
  <li><strong>Practice one small good deed</strong> as a "Rajab project" — like praying Fajr consistently, or putting a small coin in the mosque box daily.</li>
</ul>

<h2>What to clarify</h2>

<p>Many practices circulate in Rajab that <strong>have no strong basis</strong> in the sunnah — like a special obligatory "Rajab fast," or specific night rituals with invented virtues. Scholars remind us: optional fasting in Rajab is fine (as a normal voluntary fast, like Monday-Thursday), but there is no fast singled out specifically for Rajab with authentic evidence.</p>

<p>For children: teach what is clear and correct — increasing du'a, guarding prayer, doing good. That alone honors Rajab.</p>

<h2>Closing</h2>

<p>Rajab is Allah's gentle invitation: "Ramadan is near, prepare your heart." Inviting children to welcome Rajab teaches them a great life skill — preparing for something important well in advance, with joy.</p>`,
    },
    tags: ["rajab", "bulan-haram", "ramadan", "ibadah-musiman"],
    published: "2026-05-28",
    updated: "2026-05-28",
    readingTimeMin: 7,
    author: "tim-baby-mo",
  },

  {
    slug: "syaban-menyiapkan-hati-menuju-ramadan",
    title: {
      id: "Bulan Sya'ban: Menyiapkan Hati (dan Anak) Menuju Ramadan",
      en: "The Month of Sha'ban: Preparing Hearts (and Kids) for Ramadan",
    },
    excerpt: {
      id: "Sya'ban adalah bulan terakhir sebelum Ramadan — bulan yang sering dilupakan, padahal Rasulullah ﷺ paling banyak berpuasa di bulan ini. Cara memanfaatkannya bersama keluarga.",
      en: "Sha'ban is the last month before Ramadan — often forgotten, yet the Prophet ﷺ fasted most in this month. How to make the most of it as a family.",
    },
    body: {
      id: `<p>Sya'ban adalah bulan kedelapan dalam kalender Hijriyah, tepat sebelum Ramadan. Bulan ini sering "terlewat" karena berada di antara dua bulan istimewa: Rajab dan Ramadan. Padahal, Rasulullah ﷺ justru paling banyak berpuasa sunnah di bulan Sya'ban.</p>

<h2>Kenapa Rasulullah ﷺ memperbanyak puasa di Sya'ban</h2>

<p>Usamah bin Zaid pernah bertanya kepada Rasulullah ﷺ kenapa beliau banyak berpuasa di Sya'ban. Beliau menjawab bahwa Sya'ban adalah bulan yang sering dilalaikan manusia (karena di antara Rajab dan Ramadan), padahal di bulan ini amal-amal diangkat kepada Allah — dan beliau senang amalnya diangkat dalam keadaan berpuasa. (HR. Nasa'i)</p>

<h2>Cara memanfaatkan Sya'ban bersama anak</h2>

<ul>
  <li><strong>Latihan puasa untuk anak</strong> — Sya'ban adalah waktu sempurna untuk anak (usia 7+) mencoba puasa setengah hari, supaya saat Ramadan tiba mereka sudah terbiasa. Lihat panduan <a href="/_/parenting/puasa-pertama/">Puasa Pertama Anak</a>.</li>
  <li><strong>Beres-beres rumah dan hati</strong> — ajak anak menata kamar, merapikan mainan, dan saling memaafkan. "Sebentar lagi Ramadan, kita siapkan rumah yang bersih dan hati yang bersih."</li>
  <li><strong>Mulai jadwal mengaji</strong> — bangun kebiasaan membaca Al-Qur'an bersama, sehingga saat Ramadan rutinitasnya sudah jalan.</li>
  <li><strong>Lunasi utang puasa</strong> — bagi yang sudah baligh dan punya utang puasa Ramadan lalu, Sya'ban adalah kesempatan terakhir untuk meng-qadha sebelum Ramadan berikutnya.</li>
</ul>

<h2>Tentang Nisfu Sya'ban</h2>

<p>Malam pertengahan Sya'ban (Nisfu Sya'ban) memang disebut dalam beberapa hadits sebagai malam yang Allah memberikan ampunan luas kepada hamba-hamba-Nya. Namun para ulama berbeda pendapat tentang amalan khusus malam itu. Pendekatan yang aman: perbanyak doa dan istighfar seperti malam-malam lainnya, tanpa ritual khusus yang tidak ada tuntunannya. Yang disepakati: perbanyak amal di sepanjang Sya'ban, bukan hanya satu malam.</p>

<h2>Penutup</h2>

<p>Kalau Rajab menanam dan Ramadan memanen, maka Sya'ban adalah bulan menyirami — bulan kerja yang tenang yang membuat panen Ramadan jadi melimpah. Anak yang memasuki Ramadan dengan tubuh dan kebiasaan yang sudah disiapkan di Sya'ban akan menjalani Ramadan jauh lebih ringan dan gembira.</p>`,
      en: `<p>Sha'ban is the eighth month of the Hijri calendar, right before Ramadan. It's often "skipped" because it sits between two special months: Rajab and Ramadan. Yet the Prophet ﷺ actually fasted most in Sha'ban.</p>

<h2>Why the Prophet ﷺ fasted often in Sha'ban</h2>

<p>Usamah ibn Zaid once asked the Prophet ﷺ why he fasted so much in Sha'ban. He answered that Sha'ban is a month people often neglect (being between Rajab and Ramadan), yet in it deeds are raised to Allah — and he loved for his deeds to be raised while fasting. (Nasa'i)</p>

<h2>How to use Sha'ban as a family</h2>

<ul>
  <li><strong>Fasting practice for kids</strong> — Sha'ban is the perfect time for a child (age 7+) to try half-day fasts, so by Ramadan they're already used to it. See <a href="/_/parenting/puasa-pertama/">A Child's First Fast</a>.</li>
  <li><strong>Tidy the home and the heart</strong> — have kids tidy their room, organize toys, and forgive one another. "Ramadan is near, let's prepare a clean home and a clean heart."</li>
  <li><strong>Start a Qur'an schedule</strong> — build a habit of reading the Qur'an together so the routine is running by Ramadan.</li>
  <li><strong>Pay off missed fasts</strong> — for those past puberty with missed fasts from last Ramadan, Sha'ban is the last chance to make them up.</li>
</ul>

<h2>About Nisfu Sha'ban</h2>

<p>The mid-Sha'ban night (Nisfu Sha'ban) is mentioned in some narrations as a night Allah extends wide forgiveness. However, scholars differ on specific practices for that night. The safe approach: increase du'a and istighfar as on any night, without invented special rituals. What's agreed upon: increase good deeds throughout Sha'ban, not just one night.</p>

<h2>Closing</h2>

<p>If Rajab is for planting and Ramadan for harvesting, Sha'ban is for watering — the quiet working month that makes the Ramadan harvest abundant. A child who enters Ramadan with a body and habits prepared in Sha'ban will find Ramadan far lighter and more joyful.</p>`,
    },
    tags: ["syaban", "ramadan", "puasa", "ibadah-musiman"],
    published: "2026-05-28",
    updated: "2026-05-28",
    readingTimeMin: 7,
    author: "tim-baby-mo",
  },

  {
    slug: "maulid-mengenalkan-rasulullah-pada-anak",
    title: {
      id: "Maulid Nabi: Cara Mengenalkan Sosok Rasulullah ﷺ kepada Anak",
      en: "Mawlid: How to Introduce the Prophet ﷺ to Your Child",
    },
    excerpt: {
      id: "Bulan Rabi'ul Awal mengingatkan kita pada kelahiran Rasulullah ﷺ. Lepas dari perbedaan pendapat tentang perayaannya, ini momen emas mengenalkan akhlak dan kisah Nabi kepada anak.",
      en: "The month of Rabi' al-Awwal reminds us of the Prophet's ﷺ birth. Beyond differences over celebration, it's a golden moment to introduce his character and story to children.",
    },
    body: {
      id: `<p>Setiap bulan Rabi'ul Awal, umat Islam teringat pada kelahiran manusia terbaik sepanjang sejarah: Nabi Muhammad ﷺ. Tentang hukum merayakan Maulid secara khusus, ulama berbeda pendapat — sebagian membolehkan sebagai sarana mengingat dan mencintai Nabi, sebagian tidak menganjurkan karena tidak dilakukan di masa salaf. Tulisan ini tidak masuk ke perdebatan itu; fokusnya satu hal yang disepakati semua: <strong>mengenal dan mencintai Rasulullah ﷺ adalah kewajiban setiap muslim, termasuk anak-anak kita.</strong></p>

<h2>Kenapa anak perlu mengenal Rasulullah ﷺ sejak dini</h2>

<p>Anak-anak meniru tokoh yang mereka kagumi. Kalau kita tidak mengisi hati mereka dengan kekaguman pada Rasulullah ﷺ, dunia akan mengisinya dengan tokoh lain. Mencintai Nabi bukan sekadar emosi — itu pintu untuk mencintai akhlaknya, lalu menirunya.</p>

<h2>Cara mengenalkan, sesuai usia</h2>

<h3>Usia 3–5: Nabi yang penyayang</h3>
<p>Ceritakan sisi lembut Rasulullah ﷺ: beliau menyayangi anak-anak, mencium cucu-cucunya, memendekkan sholat saat mendengar bayi menangis, dan tersenyum kepada siapa saja. Anak kecil paling mudah terhubung dengan kasih sayang.</p>

<h3>Usia 6–8: Nabi yang jujur dan adil</h3>
<p>Ceritakan gelar "Al-Amin" (yang terpercaya) yang diberikan penduduk Mekkah sebelum beliau menjadi nabi. Ceritakan bagaimana beliau jujur dalam berdagang dan adil kepada semua orang. Lihat <a href="/_/kisah/muhammad/">Kisah Nabi Muhammad ﷺ</a>.</p>

<h3>Usia 9+: Nabi sebagai teladan hidup</h3>
<p>Diskusikan bagaimana Rasulullah ﷺ menyikapi kesulitan, memaafkan musuh, dan tetap rendah hati meski menjadi pemimpin. Ajak anak memilih satu sunnah untuk ditiru pekan ini — senyum, memberi salam, atau membantu pekerjaan rumah (Nabi pun membantu istrinya di rumah).</p>

<h2>Aktivitas keluarga di Rabi'ul Awal</h2>

<ul>
  <li><strong>Bacakan satu kisah Nabi setiap malam</strong> sepanjang bulan ini — dari kelahiran sampai dakwah di Madinah.</li>
  <li><strong>Perbanyak sholawat</strong> bersama: "Allahumma shalli 'ala Sayyidina Muhammad." Anak suka mengulang kalimat berirama.</li>
  <li><strong>Pilih satu akhlak Nabi</strong> untuk dilatih sekeluarga sepekan — misalnya menjaga lisan, atau memuliakan tamu.</li>
</ul>

<h2>Penutup</h2>

<p>Apa pun pandangan keluarga tentang perayaan Maulid, satu hal pasti: anak yang tumbuh dengan kisah dan akhlak Rasulullah ﷺ tertanam di hatinya, memiliki teladan terbaik yang akan menemaninya seumur hidup. Itulah hadiah terindah yang bisa kita berikan.</p>`,
      en: `<p>Every month of Rabi' al-Awwal, Muslims remember the birth of the best human in history: Prophet Muhammad ﷺ. On the ruling of specifically celebrating the Mawlid, scholars differ — some permit it as a means of remembering and loving the Prophet, others discourage it as not practiced by the early generations. This article doesn't enter that debate; it focuses on the one thing all agree upon: <strong>knowing and loving the Prophet ﷺ is an obligation upon every Muslim, including our children.</strong></p>

<h2>Why children need to know the Prophet ﷺ early</h2>

<p>Children imitate the figures they admire. If we don't fill their hearts with admiration for the Prophet ﷺ, the world will fill it with other figures. Loving the Prophet isn't just emotion — it's the door to loving his character, then imitating it.</p>

<h2>How to introduce him, by age</h2>

<h3>Ages 3–5: The loving Prophet</h3>
<p>Tell of his gentleness: he loved children, kissed his grandchildren, shortened his prayer when he heard a baby cry, and smiled at everyone. Small children connect most easily with love.</p>

<h3>Ages 6–8: The honest and just Prophet</h3>
<p>Tell of the title "Al-Amin" (the trustworthy) given by the people of Makkah before he became a prophet. Tell how he was honest in trade and just to all. See <a href="/_/kisah/muhammad/">The Story of Prophet Muhammad ﷺ</a>.</p>

<h3>Ages 9+: The Prophet as a life model</h3>
<p>Discuss how the Prophet ﷺ faced hardship, forgave enemies, and stayed humble despite leading. Have your child pick one sunnah to imitate this week — smiling, giving salam, or helping with chores (the Prophet helped his wife at home too).</p>

<h2>Family activities in Rabi' al-Awwal</h2>

<ul>
  <li><strong>Read one story of the Prophet each night</strong> through the month — from his birth to his mission in Madinah.</li>
  <li><strong>Increase salawat</strong> together: "Allahumma salli 'ala Sayyidina Muhammad." Children love repeating rhythmic phrases.</li>
  <li><strong>Pick one of the Prophet's traits</strong> to practice as a family for a week — guarding speech, or honoring guests.</li>
</ul>

<h2>Closing</h2>

<p>Whatever your family's view on celebrating the Mawlid, one thing is certain: a child who grows up with the Prophet's ﷺ stories and character planted in their heart has the best role model to accompany them for life. That is the most beautiful gift we can give.</p>`,
    },
    tags: ["maulid", "rabiul-awal", "kisah-nabi", "akhlak"],
    published: "2026-05-28",
    updated: "2026-05-28",
    readingTimeMin: 8,
    author: "tim-baby-mo",
  },

  {
    slug: "isra-miraj-untuk-anak",
    title: {
      id: "Isra Mi'raj untuk Anak: Kisah Perjalanan Malam dan Asal-Usul Sholat 5 Waktu",
      en: "Isra Mi'raj for Kids: The Night Journey and the Origin of the Five Daily Prayers",
    },
    excerpt: {
      id: "Salah satu mukjizat terbesar Rasulullah ﷺ — perjalanan malam dari Mekkah ke Baitul Maqdis lalu naik ke langit. Dari peristiwa inilah perintah sholat 5 waktu turun.",
      en: "One of the Prophet's ﷺ greatest miracles — the night journey from Makkah to Jerusalem and the ascension. From this event came the command of the five daily prayers.",
    },
    body: {
      id: `<p>Isra Mi'raj adalah dua peristiwa luar biasa yang terjadi dalam satu malam, sekitar setahun sebelum hijrah Rasulullah ﷺ ke Madinah. Diperingati pada 27 Rajab. Ini salah satu kisah paling menakjubkan untuk diceritakan kepada anak — penuh mukjizat, dan berakhir dengan hadiah terbesar: sholat.</p>

<h2>Dua bagian perjalanan</h2>

<h3>Isra — perjalanan mendatar</h3>
<p>Pada suatu malam, Rasulullah ﷺ diberangkatkan oleh Allah dari Masjidil Haram di Mekkah ke Masjidil Aqsa di Baitul Maqdis (Yerusalem), dengan kendaraan istimewa bernama Buraq — secepat kilat. Di sana beliau mengimami para nabi terdahulu dalam sholat.</p>

<h3>Mi'raj — perjalanan naik</h3>
<p>Dari Baitul Maqdis, Rasulullah ﷺ dinaikkan ke langit, melewati langit demi langit, bertemu para nabi: Adam, Isa, Yahya, Yusuf, Idris, Harun, Musa, hingga Ibrahim. Beliau sampai ke Sidratul Muntaha — batas yang tidak pernah dicapai makhluk mana pun.</p>

<h2>Hadiah terbesar: perintah sholat</h2>

<p>Di puncak perjalanan, Allah memberikan perintah sholat — mulanya 50 kali sehari. Saat turun, Nabi Musa menyarankan Rasulullah ﷺ kembali memohon keringanan kepada Allah. Beliau bolak-balik memohon, hingga akhirnya menjadi <strong>5 kali sehari</strong> — tetapi pahalanya senilai 50. Inilah asal-usul sholat lima waktu yang kita kerjakan hari ini.</p>

<blockquote>
<p>Pelajaran besar untuk anak: sholat adalah <em>hadiah</em>, bukan beban. Hadiah ini begitu istimewa sampai-sampai perintahnya diberikan langsung di langit, bukan melalui perantara seperti perintah lain.</p>
</blockquote>

<h2>Cara menceritakan kepada anak</h2>

<ul>
  <li><strong>Usia 3–5:</strong> Fokus pada keajaibannya — Buraq yang super cepat, naik ke langit, bertemu para nabi. Anak suka petualangan.</li>
  <li><strong>Usia 6–8:</strong> Tekankan bahwa dari perjalanan ini turun perintah sholat. "Sholat itu oleh-oleh Rasulullah dari langit untuk kita."</li>
  <li><strong>Usia 9+:</strong> Diskusikan makna iman terhadap hal gaib — Abu Bakar langsung percaya saat orang lain ragu, sehingga digelari "Ash-Shiddiq" (yang membenarkan).</li>
</ul>

<h2>Penutup</h2>

<p>Isra Mi'raj mengubah cara kita memandang sholat. Lima kali sehari kita berdiri menghadap Allah — itu bukan rutinitas kosong, tapi hadiah yang Rasulullah ﷺ bawa langsung dari perjalanan paling mulia dalam sejarah. Ceritakan ini ke anak, dan sholat lima waktu akan terasa berbeda di hati mereka.</p>`,
      en: `<p>Isra Mi'raj is two extraordinary events that happened in one night, about a year before the Prophet's ﷺ migration to Madinah. Commemorated on 27 Rajab. It's one of the most amazing stories to tell children — full of miracles, ending with the greatest gift: prayer.</p>

<h2>Two parts of the journey</h2>

<h3>Isra — the horizontal journey</h3>
<p>One night, Allah took the Prophet ﷺ from the Sacred Mosque in Makkah to the Aqsa Mosque in Jerusalem, on a special mount called Buraq — fast as lightning. There he led the earlier prophets in prayer.</p>

<h3>Mi'raj — the ascension</h3>
<p>From Jerusalem, the Prophet ﷺ was raised through the heavens, level by level, meeting the prophets: Adam, Isa, Yahya, Yusuf, Idris, Harun, Musa, and Ibrahim. He reached Sidratul Muntaha — a boundary no creation had ever reached.</p>

<h2>The greatest gift: the command of prayer</h2>

<p>At the journey's peak, Allah gave the command of prayer — initially 50 times a day. On the way down, Prophet Musa advised the Prophet ﷺ to return and ask Allah for ease. He went back repeatedly until it became <strong>five times a day</strong> — yet rewarded as fifty. This is the origin of the five daily prayers we perform today.</p>

<blockquote>
<p>A great lesson for children: prayer is a <em>gift</em>, not a burden. So special that its command was given directly in the heavens, not through an intermediary like other commands.</p>
</blockquote>

<h2>How to tell it to children</h2>

<ul>
  <li><strong>Ages 3–5:</strong> Focus on the wonder — the super-fast Buraq, rising to the heavens, meeting the prophets. Children love adventure.</li>
  <li><strong>Ages 6–8:</strong> Emphasize that this journey brought the command of prayer. "Prayer is the Prophet's gift from the heavens for us."</li>
  <li><strong>Ages 9+:</strong> Discuss faith in the unseen — Abu Bakr believed instantly when others doubted, earning the title "Ash-Siddiq" (the affirmer of truth).</li>
</ul>

<h2>Closing</h2>

<p>Isra Mi'raj changes how we see prayer. Five times a day we stand before Allah — not an empty routine, but a gift the Prophet ﷺ brought back from the noblest journey in history. Tell this to your child, and the five daily prayers will feel different in their heart.</p>`,
    },
    tags: ["isra-miraj", "rajab", "sholat", "kisah-nabi"],
    published: "2026-05-28",
    updated: "2026-05-28",
    readingTimeMin: 8,
    author: "tim-baby-mo",
  },

  {
    slug: "nuzulul-quran-untuk-anak",
    title: {
      id: "Nuzulul Qur'an untuk Anak: Saat Al-Qur'an Pertama Kali Turun",
      en: "Nuzulul Qur'an for Kids: When the Qur'an First Descended",
    },
    excerpt: {
      id: "Diperingati pada 17 Ramadan, Nuzulul Qur'an mengingatkan kita pada wahyu pertama di Gua Hira. Momen istimewa untuk menanamkan cinta Al-Qur'an pada anak.",
      en: "Commemorated on 17 Ramadan, Nuzulul Qur'an reminds us of the first revelation in Cave Hira. A special moment to instill love of the Qur'an in children.",
    },
    body: {
      id: `<p>Nuzulul Qur'an adalah peringatan turunnya wahyu pertama Al-Qur'an kepada Rasulullah ﷺ. Di Indonesia, biasa diperingati setiap <strong>17 Ramadan</strong>. Ini adalah momen yang sangat tepat untuk mengenalkan anak pada kisah lahirnya Al-Qur'an — kitab yang akan menemani mereka seumur hidup.</p>

<h2>Kisah wahyu pertama</h2>

<p>Sebelum menjadi nabi, Rasulullah ﷺ sering menyendiri di Gua Hira di atas Jabal Nur (Gunung Cahaya) dekat Mekkah, untuk merenung. Pada suatu malam di bulan Ramadan, datanglah Malaikat Jibril dan memeluk beliau erat sambil berkata: <em>"Iqra!"</em> (Bacalah!).</p>

<p>Rasulullah ﷺ menjawab, "Aku tidak bisa membaca." Jibril mengulang tiga kali, lalu menyampaikan ayat pertama Al-Qur'an:</p>

<blockquote>
<p style="font-family: var(--font-arabic); font-size: 24px; text-align: right; direction: rtl;">اقْرَأْ بِاسْمِ رَبِّكَ الَّذِي خَلَقَ</p>
<p><em>"Bacalah dengan (menyebut) nama Tuhanmu yang menciptakan."</em> (QS. Al-'Alaq: 1)</p>
</blockquote>

<p>Beliau pulang dengan gemetar dan ketakutan. Istrinya, Khadijah, menyelimuti dan menenangkannya: "Allah tidak akan pernah menelantarkanmu, karena engkau menyambung silaturahmi, jujur, dan membantu yang lemah."</p>

<h2>Pelajaran besar dari ayat pertama</h2>

<p>Sangat istimewa bahwa kata pertama yang Allah turunkan adalah <strong>"Bacalah"</strong> — bukan "sholatlah" atau "puasalah." Ini menunjukkan betapa Islam memuliakan ilmu dan membaca. Untuk anak: belajar membaca, membaca Al-Qur'an, mencari ilmu — semuanya adalah perintah pertama Allah.</p>

<h2>Cara memperingati bersama anak</h2>

<ul>
  <li><strong>Ceritakan kisah Gua Hira</strong> menjelang 17 Ramadan — anak suka detailnya: gua di atas gunung, malaikat, kata "Iqra."</li>
  <li><strong>Tambah waktu mengaji</strong> di malam itu — walau hanya beberapa ayat, sebagai penghormatan pada hari turunnya Al-Qur'an.</li>
  <li><strong>Jelaskan kenapa kita sayang Al-Qur'an</strong> — "Ini surat cinta dari Allah untuk kita. Sudah 1400 tahun, tidak berubah satu huruf pun."</li>
  <li><strong>Buat target kecil</strong> — hafal satu surah pendek baru selama Ramadan. Lihat koleksi <a href="/_/surat/">Surat Pendek</a>.</li>
</ul>

<h2>Penutup</h2>

<p>Nuzulul Qur'an bukan sekadar tanggal di kalender — ini perayaan atas hadiah terbesar yang Allah berikan kepada manusia: petunjuk hidup. Anak yang memahami bahwa Al-Qur'an adalah "surat cinta dari Allah" akan memegangnya dengan hati yang berbeda — bukan sebagai kewajiban, tapi sebagai harta.</p>`,
      en: `<p>Nuzulul Qur'an commemorates the descent of the first revelation of the Qur'an to the Prophet ﷺ. In Indonesia, it's usually observed on <strong>17 Ramadan</strong>. It's a fitting moment to introduce children to the story of how the Qur'an was born — the book that will accompany them for life.</p>

<h2>The story of the first revelation</h2>

<p>Before becoming a prophet, the Prophet ﷺ would often retreat alone to Cave Hira atop Jabal Nur (the Mountain of Light) near Makkah, to reflect. On a night in Ramadan, the Angel Jibril came and embraced him firmly, saying: <em>"Iqra!"</em> (Read!).</p>

<p>The Prophet ﷺ replied, "I cannot read." Jibril repeated three times, then conveyed the first verse of the Qur'an:</p>

<blockquote>
<p style="font-family: var(--font-arabic); font-size: 24px; text-align: right; direction: rtl;">اقْرَأْ بِاسْمِ رَبِّكَ الَّذِي خَلَقَ</p>
<p><em>"Read in the name of your Lord who created."</em> (Al-'Alaq: 1)</p>
</blockquote>

<p>He returned home trembling and afraid. His wife, Khadijah, wrapped him in a cloak and comforted him: "Allah will never forsake you, for you maintain kinship, you are honest, and you help the weak."</p>

<h2>The great lesson of the first verse</h2>

<p>It's deeply significant that the first word Allah revealed was <strong>"Read"</strong> — not "pray" or "fast." This shows how Islam honors knowledge and reading. For children: learning to read, reading the Qur'an, seeking knowledge — all are Allah's first command.</p>

<h2>How to observe it with children</h2>

<ul>
  <li><strong>Tell the Cave Hira story</strong> approaching 17 Ramadan — kids love the details: a cave atop a mountain, an angel, the word "Iqra."</li>
  <li><strong>Add Qur'an time</strong> that night — even just a few verses, honoring the day the Qur'an descended.</li>
  <li><strong>Explain why we love the Qur'an</strong> — "It's a love letter from Allah to us. 1400 years and not one letter has changed."</li>
  <li><strong>Set a small goal</strong> — memorize one new short surah during Ramadan. See the <a href="/_/surat/">Short Surahs</a> collection.</li>
</ul>

<h2>Closing</h2>

<p>Nuzulul Qur'an isn't just a date on the calendar — it's a celebration of the greatest gift Allah gave humanity: guidance for life. A child who understands the Qur'an as "a love letter from Allah" will hold it with a different heart — not as an obligation, but as a treasure.</p>`,
    },
    tags: ["nuzulul-quran", "ramadan", "al-quran", "kisah-nabi"],
    published: "2026-05-28",
    updated: "2026-05-28",
    readingTimeMin: 8,
    author: "tim-baby-mo",
  },

  // ═════════════════════════════════════════════════════════════════
  //  Parenting INSIGHT essays (reflective, not how-to) — "Bacaan untuk
  //  Orang Tua". Warm, shareable, Islamic lens. Added 2026-06.
  // ═════════════════════════════════════════════════════════════════
  {
    slug: "anak-sedang-mengalami-masa-sulit",
    title: {
      id: "Anakmu Bukan Memberi Masa Sulit — Ia Sedang Mengalami Masa Sulit",
      en: "Your Child Isn't Giving You a Hard Time — They're Having a Hard Time",
    },
    excerpt: {
      id: "Satu pergeseran cara pandang yang mengubah hampir semua hal: tangisan dan amukan kecil itu bukan serangan kepada kita, melainkan tanda bahwa hati kecilnya sedang kewalahan.",
      en: "One shift in how we see it changes almost everything: the meltdown isn't an attack on us — it's a small heart that's overwhelmed.",
    },
    body: {
      id: `<p>Ada satu kalimat yang, ketika benar-benar Abi pahami, mengubah cara Abi menemani anak yang sedang menangis: <strong>anak bukan sedang memberi kita masa sulit — ia sedang mengalami masa sulit.</strong></p>

<p>Bedanya halus, tapi besar. Kalimat pertama membuat kita merasa diserang, lalu membela diri. Kalimat kedua membuat kita melihat seorang manusia kecil yang kewalahan, lalu mendekat.</p>

<h2>Yang sebenarnya terjadi di kepala kecil itu</h2>

<p>Bagian otak yang mengatur emosi — yang membuat orang dewasa bisa menahan diri, menarik napas, dan berkata "tidak apa-apa" — pada anak usia dua-tiga tahun belum selesai dibangun. Itu bukan kenakalan. Itu konstruksi yang belum jadi.</p>

<p>Maka ketika anak menjerit di lantai toko, ia tidak sedang menyusun rencana untuk mempermalukan kita. Ia benar-benar tidak punya rem yang kita punya. Satu-satunya rem yang ia punya, untuk sementara, adalah <em>rem kita</em>. Kalau kita ikut meledak, ada dua orang yang badai. Kalau kita tetap tenang, ia punya pegangan.</p>

<h2>Kelembutan bukan kelemahan</h2>

<p>Kita kadang takut bahwa bersikap lembut berarti memanjakan. Padahal Rasulullah ﷺ — manusia paling tegas dalam prinsip — adalah manusia paling lembut kepada anak-anak.</p>

<blockquote>"Sesungguhnya Allah Maha Lembut dan mencintai kelembutan dalam segala urusan." (HR. Bukhari & Muslim)</blockquote>

<p>Kelembutan di sini bukan berarti membiarkan. Batas tetap ada — mainan tetap tidak dibeli, waktu tidur tetap datang. Yang berubah hanya <em>nada</em>-nya: dari melawan menjadi menemani. "Adik lagi marah, ya. Umi temani sampai reda." Lalu diam, hadir, menunggu badainya lewat.</p>

<h2>Apa yang sedang anak pelajari</h2>

<p>Setiap kali kita tetap tenang saat ia tidak, anak belajar sesuatu yang tidak bisa diajarkan lewat kata-kata: <strong>bahwa perasaan sebesar apa pun bisa dilalui, dan ia tidak ditinggalkan saat sedang sulit.</strong> Itu rasa aman yang ia bawa seumur hidup.</p>

<p>Dan diam-diam, kita pun sedang belajar hal yang sama — menahan diri saat marah adalah salah satu bentuk kekuatan yang paling Allah cintai.</p>

<blockquote>"Orang yang kuat bukanlah yang pandai bergulat, tetapi yang mampu menahan dirinya ketika marah." (HR. Bukhari & Muslim)</blockquote>

<h2>Malam ini</h2>

<p>Tidak ada langkah-langkah. Hanya satu pergeseran kecil: lain kali anak "sulit", coba ganti pertanyaan di kepala dari <em>"kenapa dia begini ke aku?"</em> menjadi <em>"apa yang sedang berat untuknya?"</em></p>

<p>Pertanyaan yang berbeda akan membawa kita pada wajah yang berbeda. Dan wajah kita, bagi anak, adalah cuaca seluruh rumahnya.</p>

<p>Bacaan terkait: <a href="/_/doa/ketika-marah/">Doa Ketika Marah</a> · <a href="/_/parenting/tantrum/">Menghadapi Tantrum</a>.</p>`,
      en: `<p>There's one sentence that, once it truly landed, changed how I sit with a crying child: <strong>a child isn't giving us a hard time — they're having a hard time.</strong></p>

<p>The difference is subtle but enormous. The first makes us feel attacked, so we defend. The second lets us see a small human who is overwhelmed, so we move closer.</p>

<h2>What's really happening in that little head</h2>

<p>The part of the brain that regulates emotion — the part that lets an adult pause, breathe, and say "it's okay" — is, in a two- or three-year-old, still under construction. That's not naughtiness. It's an unfinished build.</p>

<p>So when a child screams on the shop floor, they aren't plotting to embarrass us. They genuinely don't have the brakes we have. The only brakes they have, for now, are <em>ours</em>. If we erupt too, that's two people in a storm. If we stay calm, they have something to hold.</p>

<h2>Gentleness isn't weakness</h2>

<p>We sometimes fear that being gentle means spoiling. Yet the Prophet ﷺ — the firmest of people in principle — was the gentlest of people with children.</p>

<blockquote>"Indeed Allah is Gentle and loves gentleness in all matters." (Bukhari & Muslim)</blockquote>

<p>Gentleness here doesn't mean giving in. The boundary stays — the toy still isn't bought, bedtime still comes. What changes is only the <em>tone</em>: from fighting to accompanying. "You're angry. I'll stay with you until it passes." Then quiet, present, waiting out the storm.</p>

<h2>What the child is learning</h2>

<p>Each time we stay calm while they can't, a child learns something words can't teach: <strong>that even the biggest feeling can be survived, and that they aren't abandoned when things are hard.</strong> That's a security they carry for life.</p>

<p>And quietly, we're learning it too — restraining anger is one of the forms of strength Allah loves most.</p>

<blockquote>"The strong one is not the good wrestler; the strong one is he who controls himself when angry." (Bukhari & Muslim)</blockquote>

<h2>Tonight</h2>

<p>No steps. Just one small shift: next time your child is "difficult", swap the question in your head from <em>"why is he doing this to me?"</em> to <em>"what is hard for him right now?"</em></p>

<p>A different question leads to a different face. And our face, to a child, is the weather of their whole home.</p>

<p>Related reading: <a href="/_/doa/ketika-marah/">Dua When Angry</a> · <a href="/_/parenting/tantrum/">Handling Tantrums</a>.</p>`,
    },
    tags: ["parenting", "emosi", "tarbiyah"],
    published: "2026-06-04",
    updated: "2026-06-04",
    readingTimeMin: 4,
    author: "salman",
  },
  {
    slug: "anak-belajar-doa-dari-nada",
    title: {
      id: "Anak Belajar Doa dari Nada, Sebelum dari Kata",
      en: "Children Learn Du'a from Tone, Before Words",
    },
    excerpt: {
      id: "Kita sibuk ingin anak hafal. Padahal yang pertama mereka serap bukan teksnya, melainkan suasana — tenang atau buru-buru, hangat atau terpaksa.",
      en: "We're busy wanting them to memorise. But the first thing they absorb isn't the text — it's the atmosphere: calm or rushed, warm or forced.",
    },
    body: {
      id: `<p>Sebelum anak bisa mengucap satu kata doa, ia sudah lebih dulu hafal sesuatu yang lain: <strong>nada saat doa itu diucapkan.</strong></p>

<p>Telinga bayi mulai bekerja sejak dalam kandungan. Yang ia tangkap dari kita pertama kali bukanlah arti — tapi irama. Tenang atau panik. Lembut atau buru-buru. Doa, bagi anak kecil, mula-mula adalah <em>suara</em>, bukan makna.</p>

<h2>Maka jangan terburu mengejar hafalan</h2>

<p>Wajar kita ingin anak cepat hafal doa sebelum makan, doa tidur, doa naik kendaraan. Tapi kalau pengejaran hafalan itu datang dengan nada tegang — "ayo, yang benar, ulangi!" — anak memang akan hafal teksnya, tapi ia juga hafal bahwa doa itu terasa seperti ujian.</p>

<p>Sebaliknya, kalau setiap malam ia mendengar doa tidur dibisikkan pelan di telinganya, dengan tangan yang mengelus, ia akan menyimpan doa itu sebagai sesuatu yang <em>aman dan hangat</em>. Maknanya menyusul nanti. Rasanya yang ditanam dulu.</p>

<h2>Rumah punya "suara latar"</h2>

<p>Setiap rumah punya bunyi latar yang anak hirup tanpa sadar. Pada sebagian rumah, itu suara televisi. Pada rumah yang lain, itu "bismillah" sebelum makan, "alhamdulillah" setelah bersin, gumaman doa kecil yang berulang sepanjang hari.</p>

<p>Anak tidak menghafal suara latar itu dengan sengaja. Ia menyerapnya, seperti menyerap bahasa ibu. Itulah kenapa anak yang tumbuh di rumah yang sering menyebut Allah akan menyebut Allah dengan wajar — bukan karena disuruh, tapi karena itulah bunyi rumahnya.</p>

<h2>Yang menanam bukan ingatan anak</h2>

<p>Ini melegakan: keberhasilan tidak diukur dari apakah <em>anak</em> ingat hari ini. Yang menanam adalah <em>pengulangan kita</em>. Malam demi malam, satu kalimat yang sama, sampai ia masuk ke gema rumah — dan suatu hari, ke mulutnya sendiri.</p>

<p>Konsistensi mengalahkan intensitas. Tidak perlu "mengajarkan doa dengan benar" dalam satu sesi serius. Cukup ucapkan, pelan, setiap hari.</p>

<h2>Malam ini</h2>

<p>Coba satu hal: malam ini, saat membacakan doa tidur, turunkan suara serendah bisikan. Tidak untuk mengajari. Hanya supaya anak mengenal — bahwa di rumah ini, hari ditutup dengan suara yang tenang dan nama Allah yang lembut.</p>

<p>Bacaan terkait: <a href="/_/doa/sebelum-tidur/">Doa Sebelum Tidur</a> · <a href="/_/cerita/bismillah-dulu/">Cerita: Bismillah Dulu</a>.</p>`,
      en: `<p>Before a child can say a single word of a du'a, they have already memorised something else: <strong>the tone in which it was said.</strong></p>

<p>A baby's ears work from inside the womb. The first thing they catch from us isn't meaning — it's rhythm. Calm or panicked. Gentle or rushed. A du'a, to a small child, is at first a <em>sound</em>, not a meaning.</p>

<h2>So don't rush the memorising</h2>

<p>It's natural to want a child to quickly memorise the du'a before eating, before sleep, for the car. But if that chase comes with a tense tone — "come on, properly, again!" — the child will memorise the text, yes, but they'll also memorise that the du'a feels like a test.</p>

<p>Whereas if every night they hear the sleep du'a whispered softly in their ear, with a hand stroking them, they'll store it as something <em>safe and warm</em>. The meaning follows later. The feeling is planted first.</p>

<h2>A home has a "background sound"</h2>

<p>Every home has a background hum the child breathes in without noticing. In some homes it's the television. In others it's "bismillah" before eating, "alhamdulillah" after a sneeze, the murmur of small du'as repeated through the day.</p>

<p>A child doesn't memorise that background on purpose. They absorb it, like absorbing a mother tongue. That's why a child raised in a home that often mentions Allah will mention Allah naturally — not because they're told to, but because that's the sound of their home.</p>

<h2>What plants it isn't the child's memory</h2>

<p>This is a relief: success isn't measured by whether the <em>child</em> remembers today. What plants it is <em>our repetition</em>. Night after night, the same sentence, until it becomes the echo of the home — and one day, the sound of their own voice.</p>

<p>Consistency beats intensity. You don't need to "teach the du'a correctly" in one serious session. Just say it, softly, every day.</p>

<h2>Tonight</h2>

<p>Try one thing: tonight, as you read the sleep du'a, lower your voice to a whisper. Not to teach. Just so the child knows — that in this home, the day closes with a calm sound and Allah's gentle name.</p>

<p>Related reading: <a href="/_/doa/sebelum-tidur/">Dua Before Sleeping</a> · <a href="/_/cerita/bismillah-dulu/">Story: Bismillah First</a>.</p>`,
    },
    tags: ["parenting", "tarbiyah", "doa"],
    published: "2026-06-04",
    updated: "2026-06-04",
    readingTimeMin: 4,
    author: "salman",
  },
  {
    slug: "orang-tua-yang-mau-memperbaiki",
    title: {
      id: "Kamu Tak Perlu Jadi Orang Tua Sempurna — Cukup yang Mau Memperbaiki",
      en: "You Don't Need to Be a Perfect Parent — Just One Who Repairs",
    },
    excerpt: {
      id: "Yang membentuk anak bukan orang tua yang tak pernah salah, melainkan orang tua yang berani berkata 'maaf' setelah salah. Anak belajar tobat dengan melihatnya, bukan mendengarnya.",
      en: "What shapes a child isn't a parent who never errs, but one brave enough to say 'sorry' after they do. Children learn repentance by seeing it, not hearing about it.",
    },
    body: {
      id: `<p>Banyak orang tua diam-diam memikul beban yang tak mungkin: menjadi sempurna. Tidak boleh marah, tidak boleh salah, tidak boleh kehilangan kesabaran. Lalu ketika — sebagaimana semua manusia — kita gagal, kita dihantui rasa bersalah.</p>

<p>Tapi anak tidak butuh orang tua yang sempurna. Anak butuh orang tua yang <strong>mau memperbaiki.</strong></p>

<h2>Yang anak ingat bukan kesalahannya</h2>

<p>Suatu sore mungkin kita meninggikan suara lebih dari yang kita mau. Wajah anak berubah. Dada kita sesak. Di titik itu, yang akan paling membekas pada anak bukanlah suara tinggi tadi — melainkan apa yang terjadi <em>setelahnya</em>.</p>

<p>Kalau kita berlutut sejajar dengan matanya dan berkata, "Maaf ya, tadi Abi terlalu keras. Abi sedang lelah, tapi itu bukan salahmu," — anak belajar sesuatu yang berharga: bahwa cinta tidak hilang karena satu kesalahan, dan bahwa orang yang ia hormati pun meminta maaf.</p>

<h2>Memperbaiki adalah sunnah, bukan kelemahan</h2>

<p>Kita sering mengira meminta maaf kepada anak akan menjatuhkan wibawa. Justru sebaliknya. Manusia paling mulia, Rasulullah ﷺ, beristighfar — memohon ampun — puluhan kali setiap hari, padahal beliau ma'shum.</p>

<blockquote>"Demi Allah, sungguh aku beristighfar kepada Allah dan bertaubat kepada-Nya dalam sehari lebih dari tujuh puluh kali." (HR. Bukhari)</blockquote>

<p>Kalau manusia terbaik pun tak berhenti memperbaiki diri, maka mengakui kekeliruan di depan anak bukanlah aib. Itu justru pelajaran tobat yang paling hidup yang bisa kita berikan — bukan lewat ceramah, tapi lewat teladan.</p>

<h2>Anak yang dimaafkan, belajar memaafkan</h2>

<p>Ada lingkaran kecil yang indah di sini. Anak yang sering mendengar orang tuanya berkata "maaf" tumbuh menjadi anak yang ringan berkata "maaf". Anak yang kesalahannya disambut dengan tenang, bukan amarah, tumbuh menjadi anak yang jujur — karena ia tahu mengaku itu aman.</p>

<p>Rumah yang sehat bukan rumah tanpa keretakan. Rumah yang sehat adalah rumah yang tahu cara memperbaiki keretakannya.</p>

<h2>Malam ini</h2>

<p>Kalau hari ini ada momen yang ingin kita ulang dengan lebih baik, tidak terlambat. Sebelum anak tidur, satu kalimat sederhana sudah cukup: "Maaf ya, sayang." Kita tidak sedang menjatuhkan diri. Kita sedang mengajarkan, dengan tubuh kita sendiri, bagaimana seorang mukmin kembali.</p>

<p>Bacaan terkait: <a href="/_/doa/ketika-marah/">Doa Ketika Marah</a> · <a href="/_/parenting/marah-orang-tua/">Saat Orang Tua Marah</a>.</p>`,
      en: `<p>Many parents quietly carry an impossible weight: to be perfect. Never angry, never wrong, never out of patience. Then when — as all humans do — we fail, we're haunted by guilt.</p>

<p>But a child doesn't need a perfect parent. A child needs a parent who is <strong>willing to repair.</strong></p>

<h2>What the child remembers isn't the mistake</h2>

<p>One afternoon we might raise our voice more than we meant to. The child's face changes. Our chest tightens. At that point, what will mark the child most is not the raised voice — it's what happens <em>afterward</em>.</p>

<p>If we kneel level with their eyes and say, "I'm sorry, I was too harsh just now. I was tired, but that wasn't your fault," — the child learns something precious: that love isn't lost over one mistake, and that even the person they look up to says sorry.</p>

<h2>Repair is sunnah, not weakness</h2>

<p>We often think apologising to a child will undercut our authority. It's the opposite. The noblest of humans, the Prophet ﷺ, sought forgiveness dozens of times a day, though he was sinless.</p>

<blockquote>"By Allah, I seek Allah's forgiveness and turn to Him in repentance more than seventy times a day." (Bukhari)</blockquote>

<p>If even the best of humans never stopped repairing himself, then admitting our error before our child is no shame. It's the most living lesson in repentance we can give — not through a lecture, but through example.</p>

<h2>A forgiven child learns to forgive</h2>

<p>There's a beautiful little loop here. A child who often hears their parents say "sorry" grows up quick to say "sorry". A child whose mistakes are met with calm, not anger, grows up honest — because they know that owning up is safe.</p>

<p>A healthy home isn't one without cracks. A healthy home is one that knows how to repair its cracks.</p>

<h2>Tonight</h2>

<p>If there's a moment today you wish you could redo better, it isn't too late. Before your child sleeps, one simple sentence is enough: "I'm sorry, love." We aren't lowering ourselves. We're teaching, with our own body, how a believer returns.</p>

<p>Related reading: <a href="/_/doa/ketika-marah/">Dua When Angry</a> · <a href="/_/parenting/marah-orang-tua/">When Parents Get Angry</a>.</p>`,
    },
    tags: ["parenting", "akhlak", "tarbiyah"],
    published: "2026-06-04",
    updated: "2026-06-04",
    readingTimeMin: 5,
    author: "salman",
  },
  {
    slug: "hal-kecil-yang-anak-ingat",
    title: {
      id: "Hal-Hal Kecil yang Akan Anak Ingat",
      en: "The Small Things Your Child Will Remember",
    },
    excerpt: {
      id: "Anak jarang mengingat liburan mahal atau mainan mewah. Yang melekat justru hal-hal kecil yang kita anggap remeh — dan kabar baiknya, hal kecil itu gratis.",
      en: "Children rarely remember the expensive trips or fancy toys. What stays are the small things we think don't matter — and the good news is, small things are free.",
    },
    body: {
      id: `<p>Kalau kita bertanya kepada orang dewasa, "apa kenangan terindahmu bersama orang tua waktu kecil?", jawabannya hampir tidak pernah liburan mahal atau hadiah besar. Hampir selalu sesuatu yang kecil: bau masakan ibu di pagi hari, ayah yang menunggu di depan pintu, sebuah lagu yang dinyanyikan menjelang tidur.</p>

<p>Ini kabar yang melegakan bagi orang tua yang lelah dan tidak punya banyak uang: <strong>hal-hal yang paling diingat anak justru yang paling sederhana.</strong></p>

<h2>Anak mengukur cinta dengan kehadiran</h2>

<p>Bagi anak kecil, cinta tidak diukur dengan nominal. Ia diukur dengan kehadiran. Lima menit kita duduk di lantai, ikut menyusun balok tanpa memegang ponsel, terasa lebih panjang di hati anak daripada satu jam di tempat bermain mahal sambil kita sibuk.</p>

<p>Rasulullah ﷺ memberi kita teladan yang menakjubkan dalam hal-hal kecil ini. Beliau memanjangkan sujud karena cucunya naik ke punggungnya. Beliau menjawab salam anak-anak. Beliau bercanda dengan mereka. Hal-hal yang dunia anggap "tidak penting" justru beliau muliakan.</p>

<blockquote>"Bukan termasuk golongan kami orang yang tidak menyayangi yang kecil di antara kami." (HR. Tirmidzi)</blockquote>

<h2>Daftar yang tak butuh biaya</h2>

<p>Tanpa menjadikannya perintah, ini sekadar pengingat tentang hal-hal kecil yang akan tinggal lama di hati anak: menyebut namanya dengan lembut saat membangunkannya; menatap matanya saat ia bercerita hal yang menurut kita sepele; tertawa atas leluconnya yang tidak lucu; mendoakannya dengan suara pelan saat ia hampir tidur; berkata "Abi/Umi senang jadi orang tuamu".</p>

<p>Tidak satu pun dari itu butuh uang. Semuanya butuh sesuatu yang lebih langka: <em>perhatian yang utuh</em>.</p>

<h2>Yang sebenarnya kita bangun</h2>

<p>Setiap momen kecil yang hangat adalah satu batu bata. Anak tidak akan ingat batu batanya satu per satu. Tapi suatu hari ia akan berdiri di dalam bangunan itu — rasa bahwa ia dicintai, layak, dan aman — tanpa tahu persis kapan bangunan itu didirikan.</p>

<p>Itu didirikan pada hari-hari biasa yang kita kira tidak istimewa.</p>

<h2>Hari ini</h2>

<p>Pilih satu momen kecil hari ini dan hadir sepenuhnya di dalamnya — tanpa ponsel, tanpa terburu. Mungkin itulah momen yang, dua puluh tahun lagi, anak ceritakan sebagai kenangan terindahnya.</p>

<p>Bacaan terkait: <a href="/_/parenting/bonding-orangtua/">Bonding dengan Anak</a> · <a href="/_/hadith/main-bersama-anak/">Hadis: Bermain Bersama Anak</a>.</p>`,
      en: `<p>If you ask an adult, "what's your loveliest memory with your parents as a child?", the answer is almost never an expensive holiday or a big gift. It's almost always something small: the smell of mother's cooking in the morning, a father waiting at the door, a song sung at bedtime.</p>

<p>This is reassuring news for tired parents without much money: <strong>the things a child remembers most are the simplest ones.</strong></p>

<h2>A child measures love by presence</h2>

<p>To a small child, love isn't measured in money. It's measured in presence. Five minutes of us sitting on the floor, building blocks with no phone in hand, feels longer in a child's heart than an hour at an expensive playground while we're distracted.</p>

<p>The Prophet ﷺ gives us astonishing example in these small things. He lengthened his prostration because his grandson had climbed on his back. He returned children's greetings. He joked with them. The things the world calls "unimportant" he honoured.</p>

<blockquote>"He is not one of us who does not show mercy to our young ones." (Tirmidhi)</blockquote>

<h2>A list that costs nothing</h2>

<p>Without making it a command, just a reminder of small things that linger long in a child's heart: saying their name softly as you wake them; meeting their eyes when they tell you something you find trivial; laughing at their unfunny joke; praying over them in a low voice as they drift to sleep; saying "I'm glad to be your parent".</p>

<p>Not one of these needs money. All of them need something rarer: <em>undivided attention</em>.</p>

<h2>What we're really building</h2>

<p>Every small warm moment is one brick. A child won't remember the bricks one by one. But one day they'll stand inside that building — a sense of being loved, worthy, and safe — without knowing exactly when it was built.</p>

<p>It was built on the ordinary days we thought weren't special.</p>

<h2>Today</h2>

<p>Pick one small moment today and be fully present in it — no phone, no rushing. It might be the very moment that, twenty years from now, your child tells as their loveliest memory.</p>

<p>Related reading: <a href="/_/parenting/bonding-orangtua/">Bonding with Your Child</a> · <a href="/_/hadith/main-bersama-anak/">Hadith: Playing with Children</a>.</p>`,
    },
    tags: ["parenting", "keluarga", "kasih-sayang"],
    published: "2026-06-04",
    updated: "2026-06-04",
    readingTimeMin: 4,
    author: "salman",
  },
  {
    slug: "ketika-kita-marah-pada-anak",
    title: {
      id: "Ketika Kita Marah pada Anak: Apa yang Sebenarnya Terjadi di Hati Kita",
      en: "When We Get Angry at Our Children: What's Really Happening in Our Hearts",
    },
    excerpt: {
      id: "Sering kali marah kita pada anak bukan tentang anak sama sekali — tapi tentang lelah, kewalahan, dan hal-hal yang kita pendam. Menyadarinya adalah separuh jalan menuju tenang.",
      en: "Often our anger at our children isn't about the child at all — it's about exhaustion, overwhelm, and things we've held in. Noticing that is half the way to calm.",
    },
    body: {
      id: `<p>Ada rahasia kecil yang jarang diakui: sering kali, ledakan marah kita pada anak terlalu besar untuk pemicunya. Susu yang tumpah tidak sepadan dengan amarah yang keluar. Maka pertanyaan jujurnya bukan "kenapa anak ini menyebalkan?" melainkan <strong>"kenapa cangkir hatiku sudah sepenuh ini sebelum susu itu tumpah?"</strong></p>

<h2>Marah sering kali bukan tentang anak</h2>

<p>Anak kecil yang menumpahkan susu hampir tidak pernah jadi penyebab sebenarnya. Ia hanya tetes terakhir. Cangkirnya sudah penuh sejak tadi — oleh lelah, kurang tidur, pekerjaan yang menumpuk, atau hal yang sama sekali tidak ia tahu.</p>

<p>Menyadari ini bukan untuk menambah rasa bersalah. Justru sebaliknya: ketika kita tahu marah kita lebih banyak tentang <em>kita</em> daripada tentang <em>dia</em>, kita berhenti melihat anak sebagai musuh, dan mulai melihat diri kita sebagai orang yang butuh istirahat.</p>

<h2>Nasihat yang sangat singkat</h2>

<p>Seseorang pernah datang kepada Rasulullah ﷺ meminta nasihat. Beliau menjawab dengan satu kalimat. Orang itu meminta lagi, dan lagi. Jawabannya tetap sama:</p>

<blockquote>"Jangan marah." (HR. Bukhari)</blockquote>

<p>Para ulama menjelaskan: maknanya bukan "jangan pernah merasa marah" — perasaan itu manusiawi. Maknanya adalah "jangan <em>bertindak</em> dari dalam marahmu". Beri jeda antara rasa dan reaksi. Di jeda sekecil itulah seluruh akhlak kita diuji.</p>

<h2>Jeda yang menyelamatkan</h2>

<p>Sunnah memberi kita alat-alat yang sangat praktis untuk jeda itu: mengucap ta'awudz (memohon perlindungan dari setan), berpindah posisi — jika berdiri maka duduk, mengambil wudhu, atau sekadar diam dan menarik napas sebelum bicara.</p>

<p>Bukan karena anak tidak perlu diluruskan. Tapi karena teguran yang keluar dari hati yang tenang menyembuhkan, sedangkan teguran yang keluar dari hati yang meledak melukai — dan sering kali harus kita sesali nanti.</p>

<h2>Lembut pada diri sendiri</h2>

<p>Orang tua yang terus-menerus menghakimi dirinya sendiri akan kehabisan tenaga untuk lembut kepada anak. Maka termasuk bagian dari mendidik anak adalah merawat hati kita sendiri: cukup tidur, meminta bantuan, dan tidak menuntut diri menjadi sempurna.</p>

<p>Anak tidak butuh orang tua yang tak pernah marah. Ia butuh orang tua yang mengenali marahnya, lalu memilih untuk tetap lembut — dan ketika gagal, kembali memperbaiki.</p>

<h2>Malam ini</h2>

<p>Sebelum tidur, tanyakan pada diri dengan lembut, bukan dengan hakim: "Apa yang membuat cangkirku penuh hari ini?" Kadang, sekadar menamai bebannya sudah membuatnya sedikit lebih ringan untuk besok.</p>

<p>Bacaan terkait: <a href="/_/doa/ketika-marah/">Doa Ketika Marah</a> · <a href="/_/parenting/marah-orang-tua/">Saat Orang Tua Marah</a>.</p>`,
      en: `<p>There's a small secret rarely admitted: often, our angry outburst at a child is too big for its trigger. Spilled milk doesn't equal the anger that comes out. So the honest question isn't "why is this child so annoying?" but <strong>"why was the cup of my heart already this full before the milk spilled?"</strong></p>

<h2>Anger often isn't about the child</h2>

<p>A small child spilling milk is almost never the real cause. They're just the last drop. The cup was already full — with exhaustion, lost sleep, piled-up work, or something they know nothing about.</p>

<p>Noticing this isn't to add guilt. Quite the opposite: once we know our anger is more about <em>us</em> than about <em>them</em>, we stop seeing the child as an enemy and start seeing ourselves as someone who needs rest.</p>

<h2>A very short piece of advice</h2>

<p>A man once came to the Prophet ﷺ asking for advice. He answered with one sentence. The man asked again, and again. The answer stayed the same:</p>

<blockquote>"Do not get angry." (Bukhari)</blockquote>

<p>The scholars explain: it doesn't mean "never feel anger" — the feeling is human. It means "don't <em>act</em> from within your anger". Put a gap between the feeling and the reaction. In that tiny gap, all of our character is tested.</p>

<h2>The gap that saves</h2>

<p>The sunnah gives us very practical tools for that gap: saying the ta'awwudh (seeking refuge from Shaytan), changing position — if standing, sit — making wudu, or simply going quiet and taking a breath before speaking.</p>

<p>Not because the child never needs correcting. But because correction that comes from a calm heart heals, while correction that comes from an exploding heart wounds — and often has to be regretted later.</p>

<h2>Gentle with yourself</h2>

<p>A parent who constantly judges themselves will run out of energy to be gentle with a child. So part of raising a child is tending to our own heart: enough sleep, asking for help, and not demanding perfection of ourselves.</p>

<p>A child doesn't need a parent who never gets angry. They need a parent who notices their anger, then chooses to stay gentle — and when they fail, returns to repair.</p>

<h2>Tonight</h2>

<p>Before sleep, ask yourself gently, not as a judge: "What filled my cup today?" Sometimes, simply naming the weight makes it a little lighter for tomorrow.</p>

<p>Related reading: <a href="/_/doa/ketika-marah/">Dua When Angry</a> · <a href="/_/parenting/marah-orang-tua/">When Parents Get Angry</a>.</p>`,
    },
    tags: ["parenting", "emosi", "akhlak"],
    published: "2026-06-04",
    updated: "2026-06-04",
    readingTimeMin: 5,
    author: "salman",
  },
];

export function getAllBlogPosts(): BlogPost[] {
  return [...blogPosts].sort((a, b) => b.published.localeCompare(a.published));
}

export function getBlogPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((p) => p.slug === slug);
}

export function getBlogPostsByTag(tag: string): BlogPost[] {
  return blogPosts.filter((p) => p.tags.includes(tag));
}
