/**
 * Baby Mo privacy policy — one source for babymo.id/privacy (both languages
 * on one page, for app-store reviewers and parents) and /[locale]/privasi.
 *
 * Keep this TRUE to the code. If you add an SDK, analytics, a server, a
 * login or anything that sends data off the device, update this text AND
 * the App Store privacy answers before shipping.
 */

export const PRIVACY_UPDATED = { id: "8 November 2026", en: "8 November 2026" } as const;
export const PRIVACY_EMAIL = "hello@babymo.id";

export const PRIVACY_HTML = {
  en: `
<p class="lead">Baby Mo is a free Islamic learning world for young children and their families: the website <strong>babymo.id</strong>, the games at <strong>play.babymo.id</strong>, and the <strong>Baby Mo</strong> app for iPhone and iPad. This policy explains, in plain words, what happens to information when your family uses Baby Mo.</p>

<div class="summary">
  <p><strong>In short</strong></p>
  <ul>
    <li>No accounts, no sign-up, no login.</li>
    <li>No advertising, no tracking, and we never sell or share data.</li>
    <li>We do not collect personal information from children.</li>
    <li>Things like your child's nickname, stickers and game progress stay <em>on your device</em> — they are never sent to us.</li>
  </ul>
</div>

<h2>1. Information Baby Mo collects</h2>
<p><strong>We do not collect personal information.</strong> We do not ask for names, email addresses, phone numbers, birthdays, photos, voice recordings, contacts or payment details, and we do not run a database of users.</p>
<p>To make Baby Mo work, some small settings are saved <strong>only on your own device</strong> (in the browser's local storage or the app's storage):</p>
<ul>
  <li>a first name or nickname for your child, <em>only if you type one in</em> (for example "This book is read for…" or the greeting in the games);</li>
  <li>stickers collected, fact cards opened, game scores and progress, completed missions and prayer check-ins;</li>
  <li>preferences such as language, light/dark theme, sound on/off, reading speed and chosen voice;</li>
  <li>bookmarks and saved items;</li>
  <li>the location or city you chose for prayer times (see section 4).</li>
</ul>
<p>This information never leaves your device and is not visible to us.</p>

<h2>2. Children's personal information</h2>
<p>Baby Mo is made for children aged about 2–8 to use together with a parent. <strong>We do not knowingly collect any personal information from children.</strong> There is no chat, no messaging, no profiles, no photos or video uploads, no social features, no advertising and no in-app purchases.</p>
<p>If you type your child's nickname, it is stored only on your device to personalise the stories and games, and it is never transmitted. If you believe a child has sent us personal information (for example by email), contact us and we will delete it.</p>

<h2>3. Analytics and third-party services</h2>
<p><strong>The Baby Mo app contains no analytics, advertising or tracking SDKs.</strong> We do not use Apple's advertising identifier and we do not track users across other companies' apps or websites.</p>
<p>The services below may receive limited technical information. We have chosen privacy-respecting options and none of them receive your child's name or any account details:</p>
<ul>
  <li><strong>Hosting (GitHub Pages).</strong> babymo.id and play.babymo.id are static websites hosted by GitHub. Like any web server, GitHub may keep short-lived technical logs (such as IP address and browser type) for security. We do not receive or use these logs.</li>
  <li><strong>Website analytics (Cloudflare Web Analytics, websites only).</strong> If enabled, this counts page views in aggregate. It uses no cookies, does not fingerprint visitors and does not identify anyone. It is never used inside the iOS app.</li>
  <li><strong>Prayer times (AlAdhan) and city name (BigDataCloud), games and app only.</strong> If you allow location, approximate coordinates — rounded to about 1 km — are sent to <em>api.aladhan.com</em> to calculate today's prayer times and to <em>api.bigdatacloud.net</em> to show your city's name. Nothing else is sent with them. On babymo.id, prayer times are calculated entirely on your device and no coordinates are sent anywhere.</li>
  <li><strong>Videos (YouTube).</strong> Some pages on babymo.id show Baby Mo videos using YouTube's privacy-enhanced mode (youtube-nocookie.com). YouTube may collect information when a video is played, under Google's privacy policy. The iOS app does not embed YouTube.</li>
  <li><strong>Read-aloud voices.</strong> Stories and duas are read by your device's built-in speech engine. Baby Mo does not record or send audio. (Some browsers may use their own online voices — that is controlled by your browser or operating system.)</li>
  <li><strong>Links for parents.</strong> Pages for parents may link to WhatsApp, Instagram, TikTok, YouTube or donation pages (Saweria, Trakteer, PayPal). These open only if you tap them, and those sites have their own privacy policies.</li>
</ul>
<p>Fonts, images, sounds and code are served from our own websites or bundled inside the app.</p>

<h2>4. Location</h2>
<p>Location is optional and is used only to show prayer times and the Qibla direction. The app asks for permission ("While Using the App") before using it, and you can say no and choose a city by hand instead. The location is saved only on your device, and the Qibla direction is calculated on the device. You can turn location off at any time in your device settings (on iPhone: Settings → Privacy &amp; Security → Location Services → Baby Mo).</p>

<h2>5. How children's information is protected</h2>
<ul>
  <li><strong>Data minimisation:</strong> we designed Baby Mo so it does not need personal information at all.</li>
  <li><strong>On-device storage:</strong> nicknames, progress and settings are kept on your device, not on our servers.</li>
  <li><strong>No ads, no profiling, no tracking,</strong> and no selling or sharing of data with anyone.</li>
  <li><strong>Encrypted connections:</strong> our websites and the services above use HTTPS.</li>
  <li><strong>Reduced precision:</strong> location sent for prayer times is rounded to about 1 km and is not linked to any identity.</li>
  <li><strong>Parents in control:</strong> you can clear everything at any time (see section 7).</li>
</ul>

<h2>6. Where information is stored</h2>
<p>Information is stored <strong>locally on your device</strong>. Baby Mo has no user accounts and no server database, so we have no personal information about you or your child on our servers. Our servers only deliver the website files, pictures and games.</p>

<h2>7. Deleting data</h2>
<p>Because information is stored on your device, you can delete it yourself at any time:</p>
<ul>
  <li><strong>iPhone/iPad app:</strong> delete the Baby Mo app — all its saved data is removed with it.</li>
  <li><strong>Websites:</strong> clear the site data for babymo.id and play.babymo.id in your browser settings (for example in Safari: Settings → Safari → Advanced → Website Data).</li>
</ul>
<p>You can also email us at <a href="mailto:${PRIVACY_EMAIL}?subject=Data%20deletion%20request">${PRIVACY_EMAIL}</a> with the subject <em>"Data deletion request"</em>. We will reply within 14 days and delete any information we hold about you or your child, such as emails you have sent us. Parents can also ask us what information, if any, we hold.</p>

<h2>8. Your rights</h2>
<p>We follow Indonesia's Personal Data Protection Law (UU No. 27 Tahun 2022) and the principles of children's privacy laws such as COPPA (United States) and the GDPR (European Union). You may ask to access, correct or delete any personal data about you or your child by contacting us.</p>

<h2>9. Contact</h2>
<p>For any privacy question or request, contact the Baby Mo team (Ibra Creative, Indonesia):<br>
Email: <a href="mailto:${PRIVACY_EMAIL}">${PRIVACY_EMAIL}</a><br>
Website: <a href="https://babymo.id">babymo.id</a></p>

<h2>10. Changes to this policy</h2>
<p>If we change how Baby Mo handles information, we will update this page and the date below before the change takes effect. We will never start collecting children's personal information without first updating this policy.</p>
<p class="updated">Last updated: ${"8 November 2026"}</p>
`,
  id: `
<p class="lead">Baby Mo adalah dunia belajar Islam gratis untuk anak usia dini dan keluarganya: situs <strong>babymo.id</strong>, permainan di <strong>play.babymo.id</strong>, dan aplikasi <strong>Baby Mo</strong> untuk iPhone dan iPad. Kebijakan ini menjelaskan dengan bahasa sederhana apa yang terjadi pada informasi saat keluarga Anda menggunakan Baby Mo.</p>

<div class="summary">
  <p><strong>Singkatnya</strong></p>
  <ul>
    <li>Tanpa akun, tanpa pendaftaran, tanpa login.</li>
    <li>Tanpa iklan, tanpa pelacakan, dan kami tidak pernah menjual atau membagikan data.</li>
    <li>Kami tidak mengumpulkan informasi pribadi dari anak.</li>
    <li>Nama panggilan anak, stiker, dan kemajuan bermain tersimpan <em>di perangkat Anda</em> — tidak pernah dikirim kepada kami.</li>
  </ul>
</div>

<h2>1. Informasi yang dikumpulkan Baby Mo</h2>
<p><strong>Kami tidak mengumpulkan informasi pribadi.</strong> Kami tidak meminta nama, alamat email, nomor telepon, tanggal lahir, foto, rekaman suara, kontak, atau data pembayaran, dan kami tidak memiliki database pengguna.</p>
<p>Agar Baby Mo bisa berjalan, beberapa pengaturan kecil disimpan <strong>hanya di perangkat Anda sendiri</strong> (penyimpanan lokal browser atau aplikasi):</p>
<ul>
  <li>nama depan atau panggilan anak, <em>hanya jika Anda mengetikkannya</em> (misalnya "Dibacakan untuk…" atau sapaan di permainan);</li>
  <li>stiker yang dikumpulkan, kartu fakta, skor dan kemajuan permainan, misi yang selesai, dan catatan sholat;</li>
  <li>preferensi seperti bahasa, tema terang/gelap, suara, kecepatan membaca, dan pilihan suara;</li>
  <li>penanda halaman dan konten tersimpan;</li>
  <li>lokasi atau kota yang dipilih untuk jadwal sholat (lihat bagian 4).</li>
</ul>
<p>Informasi ini tidak pernah keluar dari perangkat Anda dan tidak dapat kami lihat.</p>

<h2>2. Informasi pribadi anak</h2>
<p>Baby Mo dibuat untuk anak usia sekitar 2–8 tahun yang menggunakannya bersama orang tua. <strong>Kami tidak dengan sengaja mengumpulkan informasi pribadi apa pun dari anak.</strong> Tidak ada fitur obrolan, pesan, profil, unggah foto atau video, fitur sosial, iklan, maupun pembelian dalam aplikasi.</p>
<p>Jika Anda mengetikkan nama panggilan anak, nama itu hanya disimpan di perangkat Anda untuk mempersonalisasi cerita dan permainan, dan tidak pernah dikirim. Jika Anda merasa seorang anak telah mengirimkan informasi pribadi kepada kami (misalnya lewat email), hubungi kami dan kami akan menghapusnya.</p>

<h2>3. Analitik dan layanan pihak ketiga</h2>
<p><strong>Aplikasi Baby Mo tidak berisi SDK analitik, iklan, maupun pelacakan.</strong> Kami tidak menggunakan pengenal iklan Apple dan tidak melacak pengguna di aplikasi atau situs milik perusahaan lain.</p>
<p>Layanan berikut dapat menerima informasi teknis yang terbatas. Kami memilih opsi yang menghormati privasi, dan tidak satu pun menerima nama anak atau data akun:</p>
<ul>
  <li><strong>Hosting (GitHub Pages).</strong> babymo.id dan play.babymo.id adalah situs statis yang dihosting oleh GitHub. Seperti server web pada umumnya, GitHub dapat menyimpan log teknis sementara (seperti alamat IP dan jenis browser) untuk keamanan. Kami tidak menerima atau menggunakan log tersebut.</li>
  <li><strong>Analitik situs (Cloudflare Web Analytics, hanya situs web).</strong> Bila diaktifkan, layanan ini menghitung jumlah kunjungan halaman secara agregat. Tanpa cookie, tanpa sidik jari perangkat, dan tidak mengidentifikasi siapa pun. Tidak pernah digunakan di dalam aplikasi iOS.</li>
  <li><strong>Jadwal sholat (AlAdhan) dan nama kota (BigDataCloud), hanya permainan dan aplikasi.</strong> Jika Anda mengizinkan lokasi, koordinat perkiraan — dibulatkan sekitar 1 km — dikirim ke <em>api.aladhan.com</em> untuk menghitung jadwal sholat hari itu dan ke <em>api.bigdatacloud.net</em> untuk menampilkan nama kota. Tidak ada data lain yang ikut dikirim. Di babymo.id, jadwal sholat dihitung sepenuhnya di perangkat Anda tanpa mengirim koordinat ke mana pun.</li>
  <li><strong>Video (YouTube).</strong> Beberapa halaman babymo.id menampilkan video Baby Mo dengan mode privasi YouTube (youtube-nocookie.com). YouTube dapat mengumpulkan informasi saat video diputar, sesuai kebijakan privasi Google. Aplikasi iOS tidak menyematkan YouTube.</li>
  <li><strong>Suara pembaca.</strong> Cerita dan doa dibacakan oleh mesin suara bawaan perangkat Anda. Baby Mo tidak merekam atau mengirim suara. (Beberapa browser dapat memakai suara daring miliknya sendiri — hal itu diatur oleh browser atau sistem operasi Anda.)</li>
  <li><strong>Tautan untuk orang tua.</strong> Halaman untuk orang tua dapat berisi tautan ke WhatsApp, Instagram, TikTok, YouTube, atau halaman donasi (Saweria, Trakteer, PayPal). Tautan ini hanya terbuka jika Anda mengetuknya, dan situs-situs tersebut memiliki kebijakan privasinya sendiri.</li>
</ul>
<p>Font, gambar, suara, dan kode disajikan dari situs kami sendiri atau sudah dibundel di dalam aplikasi.</p>

<h2>4. Lokasi</h2>
<p>Lokasi bersifat opsional dan hanya dipakai untuk menampilkan jadwal sholat dan arah kiblat. Aplikasi meminta izin ("Saat Menggunakan App") sebelum memakainya, dan Anda boleh menolak lalu memilih kota secara manual. Lokasi hanya disimpan di perangkat Anda, dan arah kiblat dihitung di perangkat. Anda dapat mematikan lokasi kapan saja di pengaturan perangkat (di iPhone: Pengaturan → Privasi &amp; Keamanan → Layanan Lokasi → Baby Mo).</p>

<h2>5. Cara kami melindungi informasi anak</h2>
<ul>
  <li><strong>Data seminimal mungkin:</strong> Baby Mo dirancang agar tidak membutuhkan informasi pribadi sama sekali.</li>
  <li><strong>Disimpan di perangkat:</strong> nama panggilan, kemajuan, dan pengaturan tersimpan di perangkat Anda, bukan di server kami.</li>
  <li><strong>Tanpa iklan, tanpa profil, tanpa pelacakan,</strong> dan tanpa menjual atau membagikan data kepada siapa pun.</li>
  <li><strong>Koneksi terenkripsi:</strong> situs kami dan layanan di atas menggunakan HTTPS.</li>
  <li><strong>Presisi dikurangi:</strong> lokasi yang dikirim untuk jadwal sholat dibulatkan sekitar 1 km dan tidak terhubung dengan identitas siapa pun.</li>
  <li><strong>Orang tua memegang kendali:</strong> Anda dapat menghapus semuanya kapan saja (lihat bagian 7).</li>
</ul>

<h2>6. Tempat informasi disimpan</h2>
<p>Informasi disimpan <strong>secara lokal di perangkat Anda</strong>. Baby Mo tidak memiliki akun pengguna maupun database server, sehingga kami tidak menyimpan informasi pribadi Anda atau anak Anda di server kami. Server kami hanya mengirimkan file situs, gambar, dan permainan.</p>

<h2>7. Menghapus data</h2>
<p>Karena informasi tersimpan di perangkat Anda, Anda dapat menghapusnya sendiri kapan saja:</p>
<ul>
  <li><strong>Aplikasi iPhone/iPad:</strong> hapus aplikasi Baby Mo — semua data tersimpannya ikut terhapus.</li>
  <li><strong>Situs web:</strong> hapus data situs babymo.id dan play.babymo.id di pengaturan browser (misalnya di Safari: Pengaturan → Safari → Lanjutan → Data Situs Web).</li>
</ul>
<p>Anda juga dapat mengirim email ke <a href="mailto:${PRIVACY_EMAIL}?subject=Permintaan%20hapus%20data">${PRIVACY_EMAIL}</a> dengan subjek <em>"Permintaan hapus data"</em>. Kami akan membalas dalam 14 hari dan menghapus informasi apa pun yang kami simpan tentang Anda atau anak Anda, seperti email yang pernah Anda kirim. Orang tua juga dapat menanyakan informasi apa, jika ada, yang kami simpan.</p>

<h2>8. Hak Anda</h2>
<p>Kami mengikuti Undang-Undang Pelindungan Data Pribadi (UU No. 27 Tahun 2022) dan prinsip undang-undang privasi anak seperti COPPA (Amerika Serikat) dan GDPR (Uni Eropa). Anda dapat meminta akses, perbaikan, atau penghapusan data pribadi tentang Anda atau anak Anda dengan menghubungi kami.</p>

<h2>9. Kontak</h2>
<p>Untuk pertanyaan atau permintaan terkait privasi, hubungi tim Baby Mo (Ibra Creative, Indonesia):<br>
Email: <a href="mailto:${PRIVACY_EMAIL}">${PRIVACY_EMAIL}</a><br>
Situs: <a href="https://babymo.id">babymo.id</a></p>

<h2>10. Perubahan kebijakan</h2>
<p>Jika kami mengubah cara Baby Mo menangani informasi, kami akan memperbarui halaman ini beserta tanggal di bawah sebelum perubahan berlaku. Kami tidak akan pernah mulai mengumpulkan informasi pribadi anak tanpa terlebih dahulu memperbarui kebijakan ini.</p>
<p class="updated">Terakhir diperbarui: ${"8 November 2026"}</p>
`,
} as const;
