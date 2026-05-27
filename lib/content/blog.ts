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
