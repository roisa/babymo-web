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
    "slug": "seri-ramadan-baby-mo",
    "title": {
      "id": "Seri Ramadan Baby Mo: 11 Doa, 10 Cerita, dan Permainan untuk Ramadan Si Kecil",
      "en": "Baby Mo's Ramadan Series: 11 Du'as, 10 Stories and Games for Your Child's Ramadan"
    },
    "excerpt": {
      "id": "Dari doa melihat hilal sampai takbir Lebaran: doa Ramadan dengan suara Arab asli, 10 cerita bergambar Mo dan Ais, permainan bertema Ramadan, dan hitung mundur berbuka di Apple Watch. Plus rencana 30 hari yang ringan.",
      "en": "From the crescent du'a to the Eid takbir: Ramadan du'as with real Arabic audio, 10 picture books with Mo and Ais, Ramadan-themed games and an iftar countdown on Apple Watch. Plus an easy 30-day plan."
    },
    "body": {
      "id": "<style>\n.rm-hero{position:relative;overflow:hidden;border-radius:28px;padding:46px 24px 30px;margin:0 0 1.4em;color:#fff;text-align:center;background:radial-gradient(120% 90% at 50% 0%,#5B4FC9 0%,#2E2A78 50%,#16183F 100%);box-shadow:0 24px 50px -28px rgba(30,20,90,.8)}\n.rm-hero h2{color:#fff!important;margin:.3em 0 .2em!important;font-size:clamp(28px,6vw,40px);line-height:1.05}\n.rm-hero h2 em{font-style:normal;color:#FFD86B}\n.rm-hero p{margin:0 auto;max-width:30em;opacity:.92}\n.rm-kick{display:inline-block;padding:6px 14px;border-radius:999px;background:rgba(255,216,107,.16);border:1.5px solid rgba(255,216,107,.5);color:#FFD86B;font-weight:800;font-size:13px}\n.rm-moon{position:absolute;right:10px;top:8px;width:38px;height:38px;border-radius:50%;box-shadow:-8px 4px 0 0 #FFD86B;transform:rotate(-20deg);filter:drop-shadow(0 0 12px rgba(255,216,107,.6))}\n.rm-lan{position:absolute;top:-4px;transform-origin:50% 0;animation:rmSw 2.6s ease-in-out infinite;font-size:28px;line-height:1}\n.rm-lan:before{content:\"\";display:block;width:1.5px;height:var(--h,30px);margin:0 auto;background:rgba(255,255,255,.5)}\n.rm-star{position:absolute;width:4px;height:4px;border-radius:50%;background:#fff;animation:rmTw 2.2s ease-in-out infinite}\n@keyframes rmSw{50%{transform:rotate(8deg)}}@keyframes rmTw{50%{opacity:.2;transform:scale(.5)}}\n.rm-btns{display:flex;flex-wrap:wrap;gap:10px;justify-content:center;margin-top:18px}\n.rm-btn{display:inline-block;padding:12px 20px;border-radius:999px;font-weight:800;text-decoration:none!important;line-height:1.1}\n.rm-btn.y{background:#FFD86B;color:#2A2462!important;box-shadow:0 10px 22px -10px rgba(255,216,107,.8)}\n.rm-btn.g{background:rgba(255,255,255,.14);color:#fff!important;border:1.5px solid rgba(255,255,255,.35)}\n.gmp-shot{margin:1.4em auto;max-width:320px;text-align:center}.gmp-shot video{width:100%;height:auto;border-radius:22px;border:1px solid var(--color-hairline);box-shadow:0 16px 36px -16px rgba(0,0,0,.45);display:block}.gmp-shot figcaption{margin-top:8px;font-size:12px;color:var(--color-whisper)}\n.rm-stats{display:grid;grid-template-columns:repeat(4,1fr);gap:8px;margin:1.2em 0}\n.rm-stats div{border-radius:18px;padding:12px 6px;text-align:center;background:var(--color-grape-soft);border:1px solid var(--color-hairline)}\n.rm-stats b{display:block;font-size:26px;line-height:1.1;color:var(--color-grape-deep)}\n.rm-stats span{font-size:12px;font-weight:700;color:var(--color-ink-soft)}\n.rm-tl{list-style:none!important;padding:0!important;margin:1.2em 0!important;position:relative}\n.rm-tl:before{content:\"\";position:absolute;left:23px;top:10px;bottom:10px;width:3px;border-radius:2px;background:linear-gradient(#FFD86B,#7C6CF0,#2E2A78)}\n.rm-tl li{position:relative;padding:0 0 0 62px!important;margin:0 0 14px!important;list-style:none!important}\n.rm-tl li:before{display:none!important}\n.rm-tl .e{position:absolute;left:0;top:2px;width:48px;height:48px;border-radius:50%;display:grid;place-items:center;font-size:24px;background:var(--color-paper);border:2px solid var(--color-hairline);box-shadow:0 6px 14px -8px rgba(0,0,0,.35)}\n.rm-tl .c{border-radius:18px;padding:12px 14px;background:var(--color-paper);border:1px solid var(--color-hairline)}\n.rm-tl .t{font-size:12px;font-weight:800;letter-spacing:.02em;color:var(--color-grape-deep)}\n.rm-tl strong{display:block;font-size:17px;margin:2px 0}\n.rm-tl .c p{margin:4px 0 0!important;font-size:14px}\n.rm-tl a.l{font-size:13px;font-weight:800}\n.rm-ar{font-size:24px;line-height:1.9;text-align:center;margin:10px 0 2px;font-family:'Amiri','Scheherazade New',serif}\n.rm-books{display:grid;grid-template-columns:repeat(2,1fr);gap:8px;margin:1em 0}\n.rm-books a{display:flex;gap:8px;align-items:center;padding:10px 12px;border-radius:16px;border:1px solid var(--color-hairline);background:var(--color-paper);text-decoration:none!important;font-weight:700;font-size:14px;line-height:1.2}\n.rm-books a b{flex:none;display:grid;place-items:center;width:28px;height:28px;border-radius:50%;background:var(--color-sun-soft);color:var(--color-sun-deep);font-size:13px}\n.rm-plan{display:grid;gap:10px;margin:1em 0}\n.rm-plan div{border-radius:20px;padding:14px 16px;border:1px solid var(--color-hairline)}\n.rm-plan div:nth-child(1){background:var(--color-sky-soft)}.rm-plan div:nth-child(2){background:var(--color-sage-soft)}.rm-plan div:nth-child(3){background:var(--color-grape-soft)}\n.rm-plan h3{margin:0 0 4px!important;font-size:17px}\n.rm-plan p{margin:0!important;font-size:14px}\n.rm-app{position:relative;overflow:hidden;border-radius:28px;padding:24px 20px;margin:1.6em 0;background:linear-gradient(150deg,rgba(124,108,240,.16),rgba(255,216,107,.18));border:1px solid var(--color-hairline);backdrop-filter:blur(12px)}\n.rm-app h2{margin-top:0!important}\n.rm-app ul{columns:2;column-gap:16px;padding-left:0!important;margin:.6em 0 1em!important}\n.rm-app li{list-style:none!important;break-inside:avoid;font-size:14px;margin:0 0 6px!important;padding-left:0!important}\n.rm-app li:before{display:none!important}\n.rm-app .rm-btn.y{font-size:17px}\n.rm-faq details{border:1px solid var(--color-hairline);border-radius:16px;padding:12px 16px;margin:0 0 8px;background:var(--color-paper)}\n.rm-faq summary{cursor:pointer;font-weight:800}\n.rm-faq details p{margin:.5em 0 0!important;font-size:15px}\n@media (max-width:420px){.rm-stats{grid-template-columns:repeat(2,1fr)}.rm-books{grid-template-columns:1fr}.rm-app ul{columns:1}}\n@media (prefers-reduced-motion:reduce){.rm-lan,.rm-star{animation:none}}\n</style>\n\n<div class=\"rm-hero\"><i class=\"rm-moon\"></i><span class=\"rm-lan\" style=\"left:18px;--h:46px;animation-delay:-.4s\">🏮</span><span class=\"rm-lan\" style=\"left:62px;--h:22px;animation-delay:-1.2s\">🏮</span><i class=\"rm-star\" style=\"left:8%;top:62%;animation-delay:-0.3s\"></i><i class=\"rm-star\" style=\"left:18%;top:30%;animation-delay:-1.1s\"></i><i class=\"rm-star\" style=\"left:30%;top:78%;animation-delay:-0.7s\"></i><i class=\"rm-star\" style=\"left:44%;top:14%;animation-delay:-1.6s\"></i><i class=\"rm-star\" style=\"left:58%;top:70%;animation-delay:-0.2s\"></i><i class=\"rm-star\" style=\"left:70%;top:24%;animation-delay:-1.3s\"></i><i class=\"rm-star\" style=\"left:84%;top:58%;animation-delay:-0.9s\"></i><i class=\"rm-star\" style=\"left:92%;top:84%;animation-delay:-1.8s\"></i><i class=\"rm-star\" style=\"left:36%;top:46%;animation-delay:-1.4s\"></i><i class=\"rm-star\" style=\"left:76%;top:88%;animation-delay:-0.5s\"></i>\n<span class=\"rm-kick\">🌙 Seri Ramadan Baby Mo</span>\n<h2>Ramadan pertama si kecil,<br><em>bersama Baby Mo</em></h2>\n<p>Doa untuk setiap momen, cerita untuk setiap malam, dan permainan yang membuat anak menunggu-nunggu datangnya Ramadan.</p>\n<div class=\"rm-btns\"><a class=\"rm-btn y\" href=\"https://play.babymo.id/babymo-doa-harian.html?series=ramadan\" target=\"_blank\" rel=\"noopener\">▶ Coba Doa Ramadan</a><a class=\"rm-btn g\" href=\"/app/\">Lihat aplikasinya →</a></div></div>\n\n<p>Anak kecil belum wajib berpuasa — tapi mereka <em>merasakan</em> Ramadan lebih kuat daripada siapa pun: suara sahur, lampu-lampu, takjil, dan tarawih yang terasa sangat panjang. Seri Ramadan Baby Mo mengubah semua momen itu menjadi kebiasaan kecil yang menyenangkan, supaya Ramadan diingat sebagai bulan yang paling ditunggu.</p>\n\n<figure class=\"gmp-shot\"><video src=\"/_img/games/video/id-ramadan-trailer.mp4?v=2\" poster=\"/_img/games/video/id-ramadan-trailer.webp?v=2\" autoplay muted loop playsinline preload=\"metadata\" width=\"540\" height=\"960\" aria-label=\"Video Seri Ramadan Baby Mo\"></video><figcaption>Sehari Ramadan bersama Mo — dari hilal sampai Lebaran 🌙</figcaption></figure>\n\n<div class=\"rm-stats\"><div><b>11</b><span>doa Ramadan</span></div><div><b>10</b><span>buku cerita</span></div><div><b>8</b><span>momen Ramadan</span></div><div><b>0</b><span>iklan</span></div></div>\n\n<h2>Satu Ramadan, delapan momen, satu doa untuk masing-masing</h2>\n\n<p>Doa Ramadan disusun mengikuti perjalanan bulan Ramadan. Setiap doa dibacakan dengan suara Arab asli, katanya menyala satu per satu, bisa diperlambat, dan dilengkapi arti serta sumber haditsnya.</p>\n\n<ol class=\"rm-tl\"><li><span class=\"e\" aria-hidden=\"true\">🌙</span><div class=\"c\"><span class=\"t\">Akhir Sya’ban</span><strong>Doa melihat hilal</strong><p>Ajak si kecil mencari bulan sabit paling tipis. Begitu terlihat, Mo membacakan doanya.</p><a class=\"l\" href=\"https://play.babymo.id/babymo-doa-harian.html?series=ramadan&amp;doa=r_hilal\" target=\"_blank\" rel=\"noopener\">▶ Dengar bersama Mo</a></div></li><li><span class=\"e\" aria-hidden=\"true\">🌌</span><div class=\"c\"><span class=\"t\">Sahur</span><strong>Niat puasa</strong><p>Bangun sahur jadi petualangan malam — lafaz niat dibacakan pelan, kata demi kata.</p><a class=\"l\" href=\"https://play.babymo.id/babymo-doa-harian.html?series=ramadan&amp;doa=r_niat\" target=\"_blank\" rel=\"noopener\">▶ Dengar bersama Mo</a></div></li><li><span class=\"e\" aria-hidden=\"true\">😊</span><div class=\"c\"><span class=\"t\">Siang hari</span><strong>“Aku sedang puasa”</strong><p>Saat lapar atau diajak bertengkar, Mo mengajarkan untuk tetap tenang dan berkata: aku sedang puasa.</p><a class=\"l\" href=\"https://play.babymo.id/babymo-doa-harian.html?series=ramadan&amp;doa=r_shaim\" target=\"_blank\" rel=\"noopener\">▶ Dengar bersama Mo</a></div></li><li><span class=\"e\" aria-hidden=\"true\">🥁</span><div class=\"c\"><span class=\"t\">Maghrib</span><strong>Doa berbuka puasa</strong><p>Ketuk bedugnya, lalu baca bersama:<div class=\"rm-ar\" dir=\"rtl\" lang=\"ar\">اللَّهُمَّ لَكَ صُمْتُ وَعَلَى رِزْقِكَ أَفْطَرْتُ</div></p><a class=\"l\" href=\"https://play.babymo.id/babymo-doa-harian.html?series=ramadan&amp;doa=r_buka\" target=\"_blank\" rel=\"noopener\">▶ Dengar bersama Mo</a></div></li><li><span class=\"e\" aria-hidden=\"true\">🕌</span><div class=\"c\"><span class=\"t\">Malam</span><strong>Tarawih & dzikir sesudah witir</strong><p>Hitung tiga kali bersama Mo di masjid yang berkilau lentera.</p><a class=\"l\" href=\"https://play.babymo.id/babymo-doa-harian.html?series=ramadan&amp;doa=r_witr\" target=\"_blank\" rel=\"noopener\">▶ Dengar bersama Mo</a></div></li><li><span class=\"e\" aria-hidden=\"true\">✨</span><div class=\"c\"><span class=\"t\">10 malam terakhir</span><strong>Doa Lailatul Qadr</strong><p>Doa pendek yang diajarkan Rasulullah ﷺ kepada Aisyah:<div class=\"rm-ar\" dir=\"rtl\" lang=\"ar\">اللَّهُمَّ إِنَّكَ عَفُوٌّ تُحِبُّ الْعَفْوَ فَاعْفُ عَنِّي</div></p><a class=\"l\" href=\"https://play.babymo.id/babymo-doa-harian.html?series=ramadan&amp;doa=r_qadr\" target=\"_blank\" rel=\"noopener\">▶ Dengar bersama Mo</a></div></li><li><span class=\"e\" aria-hidden=\"true\">🌾</span><div class=\"c\"><span class=\"t\">Sebelum sholat Id</span><strong>Niat zakat fitrah</strong><p>Si kecil ikut menyerahkan beras — belajar bahwa Lebaran dimulai dengan berbagi.</p><a class=\"l\" href=\"https://play.babymo.id/babymo-doa-harian.html?series=ramadan&amp;doa=r_zakat\" target=\"_blank\" rel=\"noopener\">▶ Dengar bersama Mo</a></div></li><li><span class=\"e\" aria-hidden=\"true\">🎉</span><div class=\"c\"><span class=\"t\">Lebaran</span><strong>Takbir & ucapan Id</strong><p>Allahu akbar, Allahu akbar… lalu “Taqabbalallahu minna wa minkum” untuk keluarga.</p><a class=\"l\" href=\"https://play.babymo.id/babymo-doa-harian.html?series=ramadan&amp;doa=r_takbir\" target=\"_blank\" rel=\"noopener\">▶ Dengar bersama Mo</a></div></li></ol>\n\n<figure class=\"gmp-shot\"><video src=\"/_img/games/video/id-doa-ramadan.mp4\" poster=\"/_img/games/video/id-doa-ramadan.webp\" autoplay muted loop playsinline preload=\"metadata\" width=\"540\" height=\"960\" aria-label=\"Video game Doa Ramadan\"></video><figcaption>Doa berbuka: ketuk bedug, dengar, ulangi 🥁</figcaption></figure>\n\n<h2>10 cerita bergambar: Ramadan Si Kembar</h2>\n\n<p>Mo dan Ais menjalani satu Ramadan penuh — dari lentera pertama sampai malam takbiran. Ceritanya pendek, kalimatnya sederhana, dan setiap buku ditutup dengan pesan untuk dibicarakan bersama. Pas dibaca satu per malam sebelum tidur.</p>\n\n<figure class=\"gmp-shot\"><video src=\"/_img/games/video/id-ramadan-books.mp4\" poster=\"/_img/games/video/id-ramadan-books.webp\" autoplay muted loop playsinline preload=\"metadata\" width=\"540\" height=\"960\" aria-label=\"Video seri cerita Ramadan Si Kembar\"></video><figcaption>10 buku, satu Ramadan penuh 📚</figcaption></figure>\n\n<div class=\"rm-books\"><a href=\"/_/cerita/lampu-ramadan-si-kembar/\"><b>1</b>Lampu Ramadan Si Kembar</a><a href=\"/_/cerita/puasa-bedug-si-kembar/\"><b>2</b>Puasa Bedug Si Kembar</a><a href=\"/_/cerita/mo-lupa-sedang-puasa/\"><b>3</b>Mo Lupa Sedang Puasa</a><a href=\"/_/cerita/mulut-mo-wangi-kesturi/\"><b>4</b>Mulut Mo Wangi Kesturi?</a><a href=\"/_/cerita/menunggu-bedug-maghrib/\"><b>5</b>Menunggu Bedug Maghrib</a><a href=\"/_/cerita/pasar-takjil-si-kembar/\"><b>6</b>Pasar Takjil Si Kembar</a><a href=\"/_/cerita/satu-huruf-satu-juz/\"><b>7</b>Satu Huruf, Satu Juz</a><a href=\"/_/cerita/tarawih-pertama-baby-mo/\"><b>8</b>Tarawih Pertama Baby Mo</a><a href=\"/_/cerita/detektif-lailatul-qadar/\"><b>9</b>Detektif Lailatul Qadar</a><a href=\"/_/cerita/malam-takbiran-si-kembar/\"><b>10</b>Malam Takbiran Si Kembar</a></div>\n\n<h2>Rencana 30 hari yang ringan</h2>\n\n<div class=\"rm-plan\">\n<div><h3>🌙 Hari 1–10 · Kenalan</h3><p>Doa melihat hilal, niat puasa, dan “aku sedang puasa”. Baca buku 1–3. Untuk balita, coba puasa sampai jam 10 pagi atau bedug Dzuhur.</p></div>\n<div><h3>🥁 Hari 11–20 · Kebiasaan</h3><p>Doa berbuka setiap Maghrib, berbagi takjil, belajar satu huruf hijaiyah sehari, dan ikut tarawih walau hanya beberapa rakaat. Baca buku 4–7.</p></div>\n<div><h3>✨ Hari 21–30 · Malam istimewa</h3><p>Doa Lailatul Qadr sebelum tidur, menyiapkan zakat fitrah bersama, lalu takbir dan ucapan Id. Baca buku 8–10.</p></div>\n</div>\n\n<blockquote>Rasulullah ﷺ bersabda: “Barang siapa memberi makan orang yang berpuasa untuk berbuka, ia mendapat pahala seperti orang yang berpuasa itu, tanpa mengurangi pahalanya sedikit pun.” (HR. Tirmidzi 807)</blockquote>\n\n<h2>Ramadan juga ada di permainannya</h2>\n\n<ul>\n  <li><strong>Cari Baby Mo — Pasar Ramadan:</strong> cari Mo yang bersembunyi di pasar malam penuh lentera.</li>\n  <li><strong>Memory Match — kartu Ramadan:</strong> hilal, lentera, kurma, sahur, dan berbuka. Terbuka setelah mengumpulkan 10 bintang.</li>\n  <li><strong><a href=\"/_/blog/game-tasbih-sebelum-tidur-anak/\">Tasbih Sebelum Tidur</a>:</strong> 33 · 33 · 34 untuk menutup malam Ramadan dengan tenang.</li>\n  <li><strong><a href=\"/_/blog/game-huruf-hijaiyah-anak/\">Huruf Hijaiyah</a>:</strong> bulan Al-Qur’an adalah waktu terbaik untuk mengenal huruf pertama.</li>\n</ul>\n\n<h2>⌚ Di Apple Watch: hitung mundur berbuka</h2>\n\n<p>Aplikasi Apple Watch sudah termasuk. Selama Ramadan, jam tangan menampilkan hitung mundur menuju waktu berbuka — anak bisa melihat sendiri “tinggal berapa lama lagi?” tanpa bertanya setiap lima menit. Ada juga doa dengan suara Mo dan tasbih yang bergetar lembut di setiap hitungan.</p>\n\n<div class=\"rm-app\">\n<span class=\"rm-kick\" style=\"color:var(--color-grape-deep);border-color:var(--color-grape);background:var(--color-grape-soft)\">Aplikasi Baby Mo</span>\n<h2>Semua seri Ramadan, dalam satu aplikasi</h2>\n<ul>\n  <li>📿 11 doa Ramadan + 14 doa harian</li>\n  <li>🔊 Suara Arab asli, bisa diperlambat</li>\n  <li>🎮 19 permainan Islami</li>\n  <li>⌚ Apple Watch: hitung mundur berbuka</li>\n  <li>📴 Bisa offline — pas untuk mudik</li>\n  <li>🚫 Tanpa iklan, tanpa langganan</li>\n  <li>🔒 Tidak ada data yang dikumpulkan</li>\n  <li>🇮🇩 Bahasa Indonesia & English</li>\n</ul>\n<p>Sekali beli, untuk seluruh keluarga — tanpa pembelian di dalam aplikasi.</p>\n<a class=\"rm-btn y\" href=\"/app/\">Dapatkan aplikasi Baby Mo →</a>\n</div>\n\n<h2>Pertanyaan yang sering ditanyakan</h2>\n\n<div class=\"rm-faq\">\n<details><summary>Untuk usia berapa?</summary><p>Sekitar 2–8 tahun. Balita cukup mendengar dan mengetuk; anak yang lebih besar bisa ikut membaca latin dan memahami artinya.</p></details>\n<details><summary>Apakah anak harus ikut berpuasa?</summary><p>Tidak. Anak yang belum baligh tidak wajib berpuasa. Seri ini untuk mengenalkan suasana dan doa-doa Ramadan dengan gembira — puasa latihan boleh dimulai pelan-pelan sesuai kesiapan anak.</p></details>\n<details><summary>Bisa dicoba dulu?</summary><p>Bisa. Doa Ramadan dan cerita Ramadan Si Kembar bisa dicoba langsung di browser. Aplikasinya menyatukan semuanya, bisa dipakai offline, dan menambahkan Apple Watch.</p></details>\n<details><summary>Bagaimana dengan teks Arabnya?</summary><p>Teks Arab ditulis lengkap dengan harakat, dengan sumber hadits di setiap doa. Lafaz niat mengikuti yang umum diajarkan di Indonesia.</p></details>\n</div>\n\n<p>Baca juga: <a href=\"/_/blog/ramadan-bersama-anak/\">panduan Ramadan bersama anak</a>, <a href=\"/_/blog/lailatul-qadar-untuk-anak/\">Lailatul Qadar untuk anak</a>, dan <a href=\"/_/puasa/\">niat & doa puasa lengkap</a>.</p>",
      "en": "<style>\n.rm-hero{position:relative;overflow:hidden;border-radius:28px;padding:46px 24px 30px;margin:0 0 1.4em;color:#fff;text-align:center;background:radial-gradient(120% 90% at 50% 0%,#5B4FC9 0%,#2E2A78 50%,#16183F 100%);box-shadow:0 24px 50px -28px rgba(30,20,90,.8)}\n.rm-hero h2{color:#fff!important;margin:.3em 0 .2em!important;font-size:clamp(28px,6vw,40px);line-height:1.05}\n.rm-hero h2 em{font-style:normal;color:#FFD86B}\n.rm-hero p{margin:0 auto;max-width:30em;opacity:.92}\n.rm-kick{display:inline-block;padding:6px 14px;border-radius:999px;background:rgba(255,216,107,.16);border:1.5px solid rgba(255,216,107,.5);color:#FFD86B;font-weight:800;font-size:13px}\n.rm-moon{position:absolute;right:10px;top:8px;width:38px;height:38px;border-radius:50%;box-shadow:-8px 4px 0 0 #FFD86B;transform:rotate(-20deg);filter:drop-shadow(0 0 12px rgba(255,216,107,.6))}\n.rm-lan{position:absolute;top:-4px;transform-origin:50% 0;animation:rmSw 2.6s ease-in-out infinite;font-size:28px;line-height:1}\n.rm-lan:before{content:\"\";display:block;width:1.5px;height:var(--h,30px);margin:0 auto;background:rgba(255,255,255,.5)}\n.rm-star{position:absolute;width:4px;height:4px;border-radius:50%;background:#fff;animation:rmTw 2.2s ease-in-out infinite}\n@keyframes rmSw{50%{transform:rotate(8deg)}}@keyframes rmTw{50%{opacity:.2;transform:scale(.5)}}\n.rm-btns{display:flex;flex-wrap:wrap;gap:10px;justify-content:center;margin-top:18px}\n.rm-btn{display:inline-block;padding:12px 20px;border-radius:999px;font-weight:800;text-decoration:none!important;line-height:1.1}\n.rm-btn.y{background:#FFD86B;color:#2A2462!important;box-shadow:0 10px 22px -10px rgba(255,216,107,.8)}\n.rm-btn.g{background:rgba(255,255,255,.14);color:#fff!important;border:1.5px solid rgba(255,255,255,.35)}\n.gmp-shot{margin:1.4em auto;max-width:320px;text-align:center}.gmp-shot video{width:100%;height:auto;border-radius:22px;border:1px solid var(--color-hairline);box-shadow:0 16px 36px -16px rgba(0,0,0,.45);display:block}.gmp-shot figcaption{margin-top:8px;font-size:12px;color:var(--color-whisper)}\n.rm-stats{display:grid;grid-template-columns:repeat(4,1fr);gap:8px;margin:1.2em 0}\n.rm-stats div{border-radius:18px;padding:12px 6px;text-align:center;background:var(--color-grape-soft);border:1px solid var(--color-hairline)}\n.rm-stats b{display:block;font-size:26px;line-height:1.1;color:var(--color-grape-deep)}\n.rm-stats span{font-size:12px;font-weight:700;color:var(--color-ink-soft)}\n.rm-tl{list-style:none!important;padding:0!important;margin:1.2em 0!important;position:relative}\n.rm-tl:before{content:\"\";position:absolute;left:23px;top:10px;bottom:10px;width:3px;border-radius:2px;background:linear-gradient(#FFD86B,#7C6CF0,#2E2A78)}\n.rm-tl li{position:relative;padding:0 0 0 62px!important;margin:0 0 14px!important;list-style:none!important}\n.rm-tl li:before{display:none!important}\n.rm-tl .e{position:absolute;left:0;top:2px;width:48px;height:48px;border-radius:50%;display:grid;place-items:center;font-size:24px;background:var(--color-paper);border:2px solid var(--color-hairline);box-shadow:0 6px 14px -8px rgba(0,0,0,.35)}\n.rm-tl .c{border-radius:18px;padding:12px 14px;background:var(--color-paper);border:1px solid var(--color-hairline)}\n.rm-tl .t{font-size:12px;font-weight:800;letter-spacing:.02em;color:var(--color-grape-deep)}\n.rm-tl strong{display:block;font-size:17px;margin:2px 0}\n.rm-tl .c p{margin:4px 0 0!important;font-size:14px}\n.rm-tl a.l{font-size:13px;font-weight:800}\n.rm-ar{font-size:24px;line-height:1.9;text-align:center;margin:10px 0 2px;font-family:'Amiri','Scheherazade New',serif}\n.rm-books{display:grid;grid-template-columns:repeat(2,1fr);gap:8px;margin:1em 0}\n.rm-books a{display:flex;gap:8px;align-items:center;padding:10px 12px;border-radius:16px;border:1px solid var(--color-hairline);background:var(--color-paper);text-decoration:none!important;font-weight:700;font-size:14px;line-height:1.2}\n.rm-books a b{flex:none;display:grid;place-items:center;width:28px;height:28px;border-radius:50%;background:var(--color-sun-soft);color:var(--color-sun-deep);font-size:13px}\n.rm-plan{display:grid;gap:10px;margin:1em 0}\n.rm-plan div{border-radius:20px;padding:14px 16px;border:1px solid var(--color-hairline)}\n.rm-plan div:nth-child(1){background:var(--color-sky-soft)}.rm-plan div:nth-child(2){background:var(--color-sage-soft)}.rm-plan div:nth-child(3){background:var(--color-grape-soft)}\n.rm-plan h3{margin:0 0 4px!important;font-size:17px}\n.rm-plan p{margin:0!important;font-size:14px}\n.rm-app{position:relative;overflow:hidden;border-radius:28px;padding:24px 20px;margin:1.6em 0;background:linear-gradient(150deg,rgba(124,108,240,.16),rgba(255,216,107,.18));border:1px solid var(--color-hairline);backdrop-filter:blur(12px)}\n.rm-app h2{margin-top:0!important}\n.rm-app ul{columns:2;column-gap:16px;padding-left:0!important;margin:.6em 0 1em!important}\n.rm-app li{list-style:none!important;break-inside:avoid;font-size:14px;margin:0 0 6px!important;padding-left:0!important}\n.rm-app li:before{display:none!important}\n.rm-app .rm-btn.y{font-size:17px}\n.rm-faq details{border:1px solid var(--color-hairline);border-radius:16px;padding:12px 16px;margin:0 0 8px;background:var(--color-paper)}\n.rm-faq summary{cursor:pointer;font-weight:800}\n.rm-faq details p{margin:.5em 0 0!important;font-size:15px}\n@media (max-width:420px){.rm-stats{grid-template-columns:repeat(2,1fr)}.rm-books{grid-template-columns:1fr}.rm-app ul{columns:1}}\n@media (prefers-reduced-motion:reduce){.rm-lan,.rm-star{animation:none}}\n</style>\n\n<div class=\"rm-hero\"><i class=\"rm-moon\"></i><span class=\"rm-lan\" style=\"left:18px;--h:46px;animation-delay:-.4s\">🏮</span><span class=\"rm-lan\" style=\"left:62px;--h:22px;animation-delay:-1.2s\">🏮</span><i class=\"rm-star\" style=\"left:8%;top:62%;animation-delay:-0.3s\"></i><i class=\"rm-star\" style=\"left:18%;top:30%;animation-delay:-1.1s\"></i><i class=\"rm-star\" style=\"left:30%;top:78%;animation-delay:-0.7s\"></i><i class=\"rm-star\" style=\"left:44%;top:14%;animation-delay:-1.6s\"></i><i class=\"rm-star\" style=\"left:58%;top:70%;animation-delay:-0.2s\"></i><i class=\"rm-star\" style=\"left:70%;top:24%;animation-delay:-1.3s\"></i><i class=\"rm-star\" style=\"left:84%;top:58%;animation-delay:-0.9s\"></i><i class=\"rm-star\" style=\"left:92%;top:84%;animation-delay:-1.8s\"></i><i class=\"rm-star\" style=\"left:36%;top:46%;animation-delay:-1.4s\"></i><i class=\"rm-star\" style=\"left:76%;top:88%;animation-delay:-0.5s\"></i>\n<span class=\"rm-kick\">🌙 Baby Mo Ramadan series</span>\n<h2>Your little one’s Ramadan,<br><em>with Baby Mo</em></h2>\n<p>A du‘a for every moment, a story for every night, and games that make children count down to Ramadan.</p>\n<div class=\"rm-btns\"><a class=\"rm-btn y\" href=\"https://play.babymo.id/babymo-doa-harian.html?series=ramadan\" target=\"_blank\" rel=\"noopener\">▶ Try Ramadan Du‘as</a><a class=\"rm-btn g\" href=\"/app/\">See the app →</a></div></div>\n\n<p>Little children don’t have to fast yet — but they <em>feel</em> Ramadan more than anyone: the suhoor sounds, the lights, the iftar treats and the tarawih that seems to go on forever. Baby Mo’s Ramadan series turns each of those moments into a small, happy habit, so Ramadan is remembered as the month they wait for.</p>\n\n<figure class=\"gmp-shot\"><video src=\"/_img/games/video/en-ramadan-trailer.mp4?v=2\" poster=\"/_img/games/video/en-ramadan-trailer.webp?v=2\" autoplay muted loop playsinline preload=\"metadata\" width=\"540\" height=\"960\" aria-label=\"Baby Mo Ramadan series video\"></video><figcaption>A Ramadan with Mo — from the crescent to Eid 🌙</figcaption></figure>\n\n<div class=\"rm-stats\"><div><b>11</b><span>Ramadan du‘as</span></div><div><b>10</b><span>picture books</span></div><div><b>8</b><span>Ramadan moments</span></div><div><b>0</b><span>ads</span></div></div>\n\n<h2>One Ramadan, eight moments, a du‘a for each</h2>\n\n<p>Ramadan Du‘as follows the journey of the month. Every du‘a is read with real Arabic audio, each word lights up as it is read, it can be slowed down, and it comes with its meaning and hadith source.</p>\n\n<ol class=\"rm-tl\"><li><span class=\"e\" aria-hidden=\"true\">🌙</span><div class=\"c\"><span class=\"t\">End of Sha‘ban</span><strong>The du‘a on seeing the crescent</strong><p>Go outside together to look for the thinnest crescent. When you see it, Mo reads the du‘a.</p><a class=\"l\" href=\"https://play.babymo.id/babymo-doa-harian.html?series=ramadan&amp;doa=r_hilal\" target=\"_blank\" rel=\"noopener\">▶ Listen with Mo</a></div></li><li><span class=\"e\" aria-hidden=\"true\">🌌</span><div class=\"c\"><span class=\"t\">Suhoor</span><strong>The intention to fast</strong><p>Suhoor becomes a night-time adventure — the intention is read slowly, word by word.</p><a class=\"l\" href=\"https://play.babymo.id/babymo-doa-harian.html?series=ramadan&amp;doa=r_niat\" target=\"_blank\" rel=\"noopener\">▶ Listen with Mo</a></div></li><li><span class=\"e\" aria-hidden=\"true\">😊</span><div class=\"c\"><span class=\"t\">During the day</span><strong>“I am fasting”</strong><p>When hungry or teased, Mo shows how to stay calm and say: I am fasting.</p><a class=\"l\" href=\"https://play.babymo.id/babymo-doa-harian.html?series=ramadan&amp;doa=r_shaim\" target=\"_blank\" rel=\"noopener\">▶ Listen with Mo</a></div></li><li><span class=\"e\" aria-hidden=\"true\">🥁</span><div class=\"c\"><span class=\"t\">Maghrib</span><strong>The du‘a for breaking the fast</strong><p>Tap the drum, then read it together:<div class=\"rm-ar\" dir=\"rtl\" lang=\"ar\">اللَّهُمَّ لَكَ صُمْتُ وَعَلَى رِزْقِكَ أَفْطَرْتُ</div></p><a class=\"l\" href=\"https://play.babymo.id/babymo-doa-harian.html?series=ramadan&amp;doa=r_buka\" target=\"_blank\" rel=\"noopener\">▶ Listen with Mo</a></div></li><li><span class=\"e\" aria-hidden=\"true\">🕌</span><div class=\"c\"><span class=\"t\">Night</span><strong>Tarawih & dhikr after witr</strong><p>Count three times with Mo in a lantern-lit mosque.</p><a class=\"l\" href=\"https://play.babymo.id/babymo-doa-harian.html?series=ramadan&amp;doa=r_witr\" target=\"_blank\" rel=\"noopener\">▶ Listen with Mo</a></div></li><li><span class=\"e\" aria-hidden=\"true\">✨</span><div class=\"c\"><span class=\"t\">The last ten nights</span><strong>The du‘a of Laylatul Qadr</strong><p>The short du‘a the Prophet ﷺ taught Aisha:<div class=\"rm-ar\" dir=\"rtl\" lang=\"ar\">اللَّهُمَّ إِنَّكَ عَفُوٌّ تُحِبُّ الْعَفْوَ فَاعْفُ عَنِّي</div></p><a class=\"l\" href=\"https://play.babymo.id/babymo-doa-harian.html?series=ramadan&amp;doa=r_qadr\" target=\"_blank\" rel=\"noopener\">▶ Listen with Mo</a></div></li><li><span class=\"e\" aria-hidden=\"true\">🌾</span><div class=\"c\"><span class=\"t\">Before the Eid prayer</span><strong>Zakat al-Fitr</strong><p>Little ones help hand over the rice — learning that Eid begins with giving.</p><a class=\"l\" href=\"https://play.babymo.id/babymo-doa-harian.html?series=ramadan&amp;doa=r_zakat\" target=\"_blank\" rel=\"noopener\">▶ Listen with Mo</a></div></li><li><span class=\"e\" aria-hidden=\"true\">🎉</span><div class=\"c\"><span class=\"t\">Eid</span><strong>The takbir & Eid greeting</strong><p>Allahu akbar, Allahu akbar… then “Taqabbalallahu minna wa minkum” for the family.</p><a class=\"l\" href=\"https://play.babymo.id/babymo-doa-harian.html?series=ramadan&amp;doa=r_takbir\" target=\"_blank\" rel=\"noopener\">▶ Listen with Mo</a></div></li></ol>\n\n<figure class=\"gmp-shot\"><video src=\"/_img/games/video/en-doa-ramadan.mp4\" poster=\"/_img/games/video/en-doa-ramadan.webp\" autoplay muted loop playsinline preload=\"metadata\" width=\"540\" height=\"960\" aria-label=\"Ramadan Du‘as game video\"></video><figcaption>The iftar du‘a: tap the drum, listen, repeat 🥁</figcaption></figure>\n\n<h2>10 picture books: The Twins’ Ramadan</h2>\n\n<p>Mo and Ais live through a whole Ramadan — from the first lantern to the night of takbir. The stories are short, the sentences simple, and every book ends with something to talk about together. Perfect for one a night at bedtime.</p>\n\n<figure class=\"gmp-shot\"><video src=\"/_img/games/video/en-ramadan-books.mp4\" poster=\"/_img/games/video/en-ramadan-books.webp\" autoplay muted loop playsinline preload=\"metadata\" width=\"540\" height=\"960\" aria-label=\"The Twins’ Ramadan story series video\"></video><figcaption>10 books, one whole Ramadan 📚</figcaption></figure>\n\n<div class=\"rm-books\"><a href=\"/_/cerita/lampu-ramadan-si-kembar/\"><b>1</b>The Twins' Ramadan Lights</a><a href=\"/_/cerita/puasa-bedug-si-kembar/\"><b>2</b>The Twins' Half-Day Fast</a><a href=\"/_/cerita/mo-lupa-sedang-puasa/\"><b>3</b>Mo Forgot He Was Fasting</a><a href=\"/_/cerita/mulut-mo-wangi-kesturi/\"><b>4</b>Does Mo's Breath Smell of Musk?</a><a href=\"/_/cerita/menunggu-bedug-maghrib/\"><b>5</b>Waiting for the Sunset Drum</a><a href=\"/_/cerita/pasar-takjil-si-kembar/\"><b>6</b>The Twins at the Iftar Market</a><a href=\"/_/cerita/satu-huruf-satu-juz/\"><b>7</b>One Letter, One Juz</a><a href=\"/_/cerita/tarawih-pertama-baby-mo/\"><b>8</b>Baby Mo's First Tarawih</a><a href=\"/_/cerita/detektif-lailatul-qadar/\"><b>9</b>The Laylatul Qadr Detectives</a><a href=\"/_/cerita/malam-takbiran-si-kembar/\"><b>10</b>The Twins' Night of Takbir</a></div>\n\n<h2>An easy 30-day plan</h2>\n\n<div class=\"rm-plan\">\n<div><h3>🌙 Days 1–10 · Getting started</h3><p>The crescent du‘a, the intention to fast and “I am fasting”. Read books 1–3. For toddlers, try fasting until 10 am or until Dhuhr.</p></div>\n<div><h3>🥁 Days 11–20 · Building habits</h3><p>The iftar du‘a every Maghrib, sharing iftar treats, one hijaiyah letter a day, and joining tarawih even for a few rakaat. Read books 4–7.</p></div>\n<div><h3>✨ Days 21–30 · Special nights</h3><p>The Laylatul Qadr du‘a before bed, preparing Zakat al-Fitr together, then the takbir and Eid greeting. Read books 8–10.</p></div>\n</div>\n\n<blockquote>The Prophet ﷺ said: “Whoever gives food to a fasting person to break their fast will have a reward like theirs, without it reducing their reward in the slightest.” (Tirmidhi 807)</blockquote>\n\n<h2>Ramadan is in the games too</h2>\n\n<ul>\n  <li><strong>Find Baby Mo — Ramadan Market:</strong> spot Mo hiding in a lantern-lit night market.</li>\n  <li><strong>Memory Match — Ramadan cards:</strong> crescent, lantern, dates, suhoor and iftar. Unlocks after collecting 10 stars.</li>\n  <li><strong><a href=\"/_/blog/game-tasbih-sebelum-tidur-anak/\">Bedtime Tasbih</a>:</strong> 33 · 33 · 34 to end each Ramadan night calmly.</li>\n  <li><strong><a href=\"/_/blog/game-huruf-hijaiyah-anak/\">Hijaiyah Letters</a>:</strong> the month of the Qur’an is the best time to meet the first letters.</li>\n</ul>\n\n<h2>⌚ On Apple Watch: an iftar countdown</h2>\n\n<p>The Apple Watch app is included. During Ramadan the watch shows a countdown to iftar — children can see “how much longer?” for themselves instead of asking every five minutes. There are also du‘as in Mo’s voice and a tasbih with a gentle tap on every count.</p>\n\n<div class=\"rm-app\">\n<span class=\"rm-kick\" style=\"color:var(--color-grape-deep);border-color:var(--color-grape);background:var(--color-grape-soft)\">The Baby Mo app</span>\n<h2>The whole Ramadan series, in one app</h2>\n<ul>\n  <li>📿 11 Ramadan du‘as + 14 daily du‘as</li>\n  <li>🔊 Real Arabic audio, can be slowed down</li>\n  <li>🎮 19 Islamic games</li>\n  <li>⌚ Apple Watch: iftar countdown</li>\n  <li>📴 Works offline — great for Eid travel</li>\n  <li>🚫 No ads, no subscription</li>\n  <li>🔒 No data collected</li>\n  <li>🇮🇩 Indonesian & English</li>\n</ul>\n<p>Buy once, for the whole family — no in-app purchases.</p>\n<a class=\"rm-btn y\" href=\"/app/\">Get the Baby Mo app →</a>\n</div>\n\n<h2>Frequently asked questions</h2>\n\n<div class=\"rm-faq\">\n<details><summary>What age is it for?</summary><p>Roughly 2–8. Toddlers listen and tap; older children can read along with the transliteration and learn the meanings.</p></details>\n<details><summary>Does my child need to be fasting?</summary><p>No. Children are not obliged to fast before puberty. The series introduces the atmosphere and du‘as of Ramadan joyfully — practice fasts can start gently whenever your child is ready.</p></details>\n<details><summary>Can we try it first?</summary><p>Yes. Ramadan Du‘as and the Twins’ Ramadan stories can be tried right in the browser. The app brings everything together, works offline and adds Apple Watch.</p></details>\n<details><summary>What about the Arabic texts?</summary><p>The Arabic is fully voweled, with the hadith source shown for every du‘a. The intention wordings follow those commonly taught in Indonesia.</p></details>\n</div>\n\n<p>Read next: <a href=\"/_/blog/ramadan-bersama-anak/\">Ramadan with kids</a>, <a href=\"/_/blog/lailatul-qadar-untuk-anak/\">Laylatul Qadr for children</a> and <a href=\"/_/puasa/\">all fasting intentions & du‘as</a>.</p>"
    },
    "tags": [
      "ramadan",
      "puasa",
      "doa",
      "game",
      "cerita",
      "aplikasi"
    ],
    "published": "2026-11-13",
    "updated": "2026-11-13",
    "readingTimeMin": 5,
    "author": "tim-baby-mo"
  },
  {
    "slug": "game-huruf-hijaiyah-anak",
    "title": {
      "id": "Game Huruf Hijaiyah: 28 Huruf dalam 9 Pelajaran untuk Anak (Gratis)",
      "en": "Hijaiyah Letters Game: All 28 Arabic Letters in 9 Lessons for Kids (Free)"
    },
    "excerpt": {
      "id": "Dengar suaranya, tulis mengikuti titik, lalu tangkap hurufnya di balon. 28 huruf hijaiyah dalam 9 pelajaran bertahap bersama Baby Mo — gratis, tanpa iklan.",
      "en": "Hear each sound, trace it along the dots, then catch the letter in a balloon. The 28 hijaiyah letters in 9 step-by-step lessons with Baby Mo — free and ad-free."
    },
    "body": {
      "id": "<p>Mengenal huruf hijaiyah adalah langkah pertama menuju membaca Al-Qur’an. <strong>Huruf Hijaiyah</strong> mengajak si kecil berkenalan dengan 28 huruf satu per satu: mendengar bunyinya, menuliskannya, lalu menemukannya lagi dalam permainan.</p>\n\n<p><a class=\"gmp-play\" href=\"https://play.babymo.id/babymo-hijaiyah-classic.html\" target=\"_blank\" rel=\"noopener\">▶ Main Huruf Hijaiyah sekarang</a></p>\n\n<style>.gmp-play{display:inline-block;margin:.4em 0;padding:12px 22px;border-radius:999px;background:linear-gradient(135deg,#3FD08C,#1FA971);color:#fff!important;font-weight:800;text-decoration:none!important;box-shadow:0 8px 20px -8px rgba(31,169,113,.55);}.gmp-shot{margin:1.4em auto;max-width:300px;text-align:center}.gmp-shot img,.gmp-shot video{width:100%;height:auto;border-radius:22px;border:1px solid var(--color-hairline);box-shadow:0 16px 36px -16px rgba(0,0,0,.45);display:block}.gmp-shot figcaption{margin-top:8px;font-size:12px;color:var(--color-whisper)}</style>\n\n<figure class=\"gmp-shot\"><video src=\"/_img/games/video/id-huruf-hijaiyah.mp4\" poster=\"/_img/games/video/id-huruf-hijaiyah.webp\" autoplay muted loop playsinline preload=\"metadata\" width=\"540\" height=\"960\" aria-label=\"Video game Huruf Hijaiyah Baby Mo\"></video><figcaption>Dengar, tulis, lalu tangkap hurufnya 🔤</figcaption></figure>\n\n<h2>Apa yang dimainkan?</h2>\n\n<ul>\n  <li><strong>9 pelajaran bertahap</strong> — dari alif, ba, ta, tsa sampai ya.</li>\n  <li><strong>Dengar</strong> bunyi setiap huruf dan contoh katanya.</li>\n  <li><strong>Tulis</strong> huruf dengan jari mengikuti titik-titik.</li>\n  <li><strong>Tangkap Huruf</strong> — pilih balon berisi huruf yang disebut, lalu kuis kecil dan bintang.</li>\n</ul>\n\n<h2>Apa yang dilatih?</h2>\n\n<ul>\n  <li>Mengenal bentuk dan bunyi 28 huruf hijaiyah.</li>\n  <li>Motorik halus lewat menulis huruf.</li>\n  <li>Mendengar dan membedakan bunyi yang mirip.</li>\n</ul>\n\n<h2>Tips untuk Ayah & Bunda</h2>\n\n<ul>\n  <li>Satu pelajaran per hari sudah cukup — ulangi besok sebelum lanjut.</li>\n  <li>Ucapkan bunyinya bersama, lalu cari huruf yang sama di mushaf atau buku iqra.</li>\n  <li>Rayakan setiap huruf baru; jangan menunggu semuanya hafal.</li>\n</ul>\n\n<blockquote>Rasulullah ﷺ bersabda: “Sebaik-baik kalian adalah orang yang belajar Al-Qur’an dan mengajarkannya.” (HR. Bukhari 5027)</blockquote>\n\n<p>Sudah kenal hurufnya? Jelajahi <a href=\"/_/blog/game-belajar-hijaiyah-anak/\">Pulau Hijaiyah</a> atau susun kata pertama di <a href=\"/_/blog/game-kata-islam-menyusun-kata-arab/\">Kata Islam</a>. Lihat juga <a href=\"/_/permainan/\">semua game Baby Mo</a> — semuanya juga ada di <a href=\"/app/\">aplikasi Baby Mo</a> untuk iPhone dan iPad.</p>",
      "en": "<p>Knowing the hijaiyah letters is the first step towards reading the Qur’an. <strong>Hijaiyah Letters</strong> introduces little ones to the 28 letters one by one: hearing the sound, tracing it, then finding it again in a game.</p>\n\n<p><a class=\"gmp-play\" href=\"https://play.babymo.id/babymo-hijaiyah-classic.html\" target=\"_blank\" rel=\"noopener\">▶ Play Hijaiyah Letters now</a></p>\n\n<style>.gmp-play{display:inline-block;margin:.4em 0;padding:12px 22px;border-radius:999px;background:linear-gradient(135deg,#3FD08C,#1FA971);color:#fff!important;font-weight:800;text-decoration:none!important;box-shadow:0 8px 20px -8px rgba(31,169,113,.55);}.gmp-shot{margin:1.4em auto;max-width:300px;text-align:center}.gmp-shot img,.gmp-shot video{width:100%;height:auto;border-radius:22px;border:1px solid var(--color-hairline);box-shadow:0 16px 36px -16px rgba(0,0,0,.45);display:block}.gmp-shot figcaption{margin-top:8px;font-size:12px;color:var(--color-whisper)}</style>\n\n<figure class=\"gmp-shot\"><video src=\"/_img/games/video/en-huruf-hijaiyah.mp4\" poster=\"/_img/games/video/en-huruf-hijaiyah.webp\" autoplay muted loop playsinline preload=\"metadata\" width=\"540\" height=\"960\" aria-label=\"Baby Mo Hijaiyah Letters game video\"></video><figcaption>Listen, trace, then catch the letter 🔤</figcaption></figure>\n\n<h2>What children do</h2>\n\n<ul>\n  <li><strong>9 step-by-step lessons</strong> — from alif, ba, ta, tha all the way to ya.</li>\n  <li><strong>Listen</strong> to each letter’s sound and an example word.</li>\n  <li><strong>Trace</strong> the letter with a finger along the dots.</li>\n  <li><strong>Letter Catch</strong> — pick the balloon with the letter you hear, then a little quiz and stars.</li>\n</ul>\n\n<h2>What it builds</h2>\n\n<ul>\n  <li>Recognising the shapes and sounds of the 28 letters.</li>\n  <li>Fine motor skills through tracing.</li>\n  <li>Listening for sounds that are close to each other.</li>\n</ul>\n\n<h2>Tips for parents</h2>\n\n<ul>\n  <li>One lesson a day is plenty — repeat it tomorrow before moving on.</li>\n  <li>Say the sounds together, then find the same letter in a mushaf or iqra book.</li>\n  <li>Celebrate every new letter; don’t wait until they know them all.</li>\n</ul>\n\n<blockquote>The Prophet ﷺ said: “The best of you are those who learn the Qur’an and teach it.” (Bukhari 5027)</blockquote>\n\n<p>Know the letters? Explore <a href=\"/_/blog/game-belajar-hijaiyah-anak/\">Hijaiyah Island</a> or build first words in <a href=\"/_/blog/game-kata-islam-menyusun-kata-arab/\">Islamic Words</a>. See <a href=\"/_/permainan/\">all Baby Mo games</a> — they are all in the <a href=\"/app/\">Baby Mo app</a> for iPhone and iPad too.</p>"
    },
    "tags": [
      "game",
      "hijaiyah",
      "huruf-arab",
      "huruf-hijaiyah"
    ],
    "published": "2026-11-13",
    "updated": "2026-11-13",
    "readingTimeMin": 2,
    "author": "tim-baby-mo"
  },
  {
    "slug": "game-sahabat-hewan-mo",
    "title": {
      "id": "Sahabat Hewan Mo: Game Merawat Hewan untuk Belajar Akhlak (Gratis)",
      "en": "Mo's Animal Friends: An Animal-Care Game That Teaches Kindness (Free)"
    },
    "excerpt": {
      "id": "Beri makan dengan Bismillah, beri minum, bersihkan, dan elus pelan-pelan. Game peternakan kecil Baby Mo yang mengajarkan kasih sayang kepada hewan.",
      "en": "Feed with Bismillah, give water, clean up and stroke gently. Baby Mo’s little farm game teaches children kindness to animals."
    },
    "body": {
      "id": "<p>Anak-anak sangat menyukai hewan — dan itu kesempatan emas untuk belajar akhlak. Di <strong>Sahabat Hewan Mo</strong>, si kecil merawat kucing Mimi dan hewan-hewan di peternakan kecil Baby Mo, satu per satu, dengan lembut.</p>\n\n<p><a class=\"gmp-play\" href=\"https://play.babymo.id/babymo-sahabat-hewan.html\" target=\"_blank\" rel=\"noopener\">▶ Main Sahabat Hewan Mo sekarang</a></p>\n\n<style>.gmp-play{display:inline-block;margin:.4em 0;padding:12px 22px;border-radius:999px;background:linear-gradient(135deg,#3FD08C,#1FA971);color:#fff!important;font-weight:800;text-decoration:none!important;box-shadow:0 8px 20px -8px rgba(31,169,113,.55);}.gmp-shot{margin:1.4em auto;max-width:300px;text-align:center}.gmp-shot img,.gmp-shot video{width:100%;height:auto;border-radius:22px;border:1px solid var(--color-hairline);box-shadow:0 16px 36px -16px rgba(0,0,0,.45);display:block}.gmp-shot figcaption{margin-top:8px;font-size:12px;color:var(--color-whisper)}</style>\n\n<figure class=\"gmp-shot\"><video src=\"/_img/games/video/id-sahabat-hewan.mp4\" poster=\"/_img/games/video/id-sahabat-hewan.webp\" autoplay muted loop playsinline preload=\"metadata\" width=\"540\" height=\"960\" aria-label=\"Video game Sahabat Hewan Mo\"></video><figcaption>Bismillah, lalu beri makan dengan lembut 🐱</figcaption></figure>\n\n<h2>Apa yang dimainkan?</h2>\n\n<ul>\n  <li><strong>Beri makan</strong> sambil mengucap Bismillah.</li>\n  <li><strong>Beri minum</strong>, <strong>bersihkan</strong>, dan <strong>elus pelan-pelan</strong>.</li>\n  <li>Ambil telur dan susu, lalu <strong>berbagi</strong> dengan keluarga dan tetangga.</li>\n  <li>Buka buku sahabat berisi kisah dan adab terhadap hewan.</li>\n</ul>\n\n<h2>Apa yang dilatih?</h2>\n\n<ul>\n  <li>Kasih sayang dan kelembutan kepada makhluk Allah.</li>\n  <li>Tanggung jawab merawat setiap hari.</li>\n  <li>Kebiasaan mengucap Bismillah sebelum memberi makan.</li>\n</ul>\n\n<h2>Tips untuk Ayah & Bunda</h2>\n\n<ul>\n  <li>Tanyakan: “Kalau kamu haus, rasanya bagaimana?” supaya anak memahami perasaan hewan.</li>\n  <li>Ajak memberi makan kucing atau burung di sekitar rumah setelah bermain.</li>\n  <li>Ingatkan: elus pelan-pelan, tidak memukul, tidak menarik ekor.</li>\n</ul>\n\n<blockquote>Rasulullah ﷺ bersabda tentang seorang lelaki yang memberi minum anjing yang kehausan: “Allah berterima kasih kepadanya dan mengampuninya.” Para sahabat bertanya apakah berbuat baik kepada hewan juga berpahala. Beliau menjawab: “Pada setiap makhluk hidup ada pahala.” (HR. Bukhari 2363, Muslim 2244)</blockquote>\n\n<p>Lanjutkan dengan berkebun di <a href=\"/_/blog/game-kebun-kecil-ais/\">Kebun Kecil Ais</a>. Lihat juga <a href=\"/_/permainan/\">semua game Baby Mo</a> — semuanya juga ada di <a href=\"/app/\">aplikasi Baby Mo</a> untuk iPhone dan iPad.</p>",
      "en": "<p>Children love animals — a golden chance to learn good character. In <strong>Mo’s Animal Friends</strong>, little ones look after Mimi the cat and the animals on Baby Mo’s small farm, one by one, gently.</p>\n\n<p><a class=\"gmp-play\" href=\"https://play.babymo.id/babymo-sahabat-hewan.html\" target=\"_blank\" rel=\"noopener\">▶ Play Mo's Animal Friends now</a></p>\n\n<style>.gmp-play{display:inline-block;margin:.4em 0;padding:12px 22px;border-radius:999px;background:linear-gradient(135deg,#3FD08C,#1FA971);color:#fff!important;font-weight:800;text-decoration:none!important;box-shadow:0 8px 20px -8px rgba(31,169,113,.55);}.gmp-shot{margin:1.4em auto;max-width:300px;text-align:center}.gmp-shot img,.gmp-shot video{width:100%;height:auto;border-radius:22px;border:1px solid var(--color-hairline);box-shadow:0 16px 36px -16px rgba(0,0,0,.45);display:block}.gmp-shot figcaption{margin-top:8px;font-size:12px;color:var(--color-whisper)}</style>\n\n<figure class=\"gmp-shot\"><video src=\"/_img/games/video/en-sahabat-hewan.mp4\" poster=\"/_img/games/video/en-sahabat-hewan.webp\" autoplay muted loop playsinline preload=\"metadata\" width=\"540\" height=\"960\" aria-label=\"Mo's Animal Friends game video\"></video><figcaption>Bismillah, then feed them gently 🐱</figcaption></figure>\n\n<h2>What children do</h2>\n\n<ul>\n  <li><strong>Feed</strong> the animals while saying Bismillah.</li>\n  <li><strong>Give water</strong>, <strong>clean up</strong> and <strong>stroke gently</strong>.</li>\n  <li>Collect eggs and milk, then <strong>share</strong> with family and neighbours.</li>\n  <li>Open the friends book with stories and manners towards animals.</li>\n</ul>\n\n<h2>What it builds</h2>\n\n<ul>\n  <li>Kindness and gentleness towards Allah’s creatures.</li>\n  <li>Responsibility for daily care.</li>\n  <li>The habit of saying Bismillah before feeding.</li>\n</ul>\n\n<h2>Tips for parents</h2>\n\n<ul>\n  <li>Ask: “How does it feel when you’re thirsty?” to help children understand animals.</li>\n  <li>After playing, feed a cat or birds near your home together.</li>\n  <li>Remind them: stroke gently, no hitting, no pulling tails.</li>\n</ul>\n\n<blockquote>The Prophet ﷺ told of a man who gave water to a thirsty dog: “Allah thanked him and forgave him.” The companions asked whether there is reward in kindness to animals. He said: “There is a reward for every living creature.” (Bukhari 2363, Muslim 2244)</blockquote>\n\n<p>Next, try gardening in <a href=\"/_/blog/game-kebun-kecil-ais/\">Ais's Little Garden</a>. See <a href=\"/_/permainan/\">all Baby Mo games</a> — they are all in the <a href=\"/app/\">Baby Mo app</a> for iPhone and iPad too.</p>"
    },
    "tags": [
      "game",
      "akhlak",
      "hewan",
      "sahabat-hewan"
    ],
    "published": "2026-11-13",
    "updated": "2026-11-13",
    "readingTimeMin": 2,
    "author": "tim-baby-mo"
  },
  {
    "slug": "game-kebun-kecil-ais",
    "title": {
      "id": "Kebun Kecil Ais: Game Berkebun yang Mengajarkan Sabar dan Berbagi (Gratis)",
      "en": "Ais's Little Garden: A Gardening Game About Patience and Sharing (Free)"
    },
    "excerpt": {
      "id": "Tanam benih, siram, cabut rumput, panen tomat dan stroberi, lalu bagikan hasilnya. Game berkebun bersama Ais — gratis dan tanpa iklan.",
      "en": "Plant seeds, water, pull the weeds, harvest tomatoes and strawberries, then share them. A gardening game with Ais — free and ad-free."
    },
    "body": {
      "id": "<p>Menanam mengajarkan sesuatu yang sulit diajarkan dengan kata-kata: <em>sabar</em>. Di <strong>Kebun Kecil Ais</strong>, si kecil membantu Ais merawat kebunnya dari benih sampai panen — lalu belajar bahwa hasil terbaik adalah yang dibagikan.</p>\n\n<p><a class=\"gmp-play\" href=\"https://play.babymo.id/babymo-kebun-ais.html\" target=\"_blank\" rel=\"noopener\">▶ Main Kebun Kecil Ais sekarang</a></p>\n\n<style>.gmp-play{display:inline-block;margin:.4em 0;padding:12px 22px;border-radius:999px;background:linear-gradient(135deg,#3FD08C,#1FA971);color:#fff!important;font-weight:800;text-decoration:none!important;box-shadow:0 8px 20px -8px rgba(31,169,113,.55);}.gmp-shot{margin:1.4em auto;max-width:300px;text-align:center}.gmp-shot img,.gmp-shot video{width:100%;height:auto;border-radius:22px;border:1px solid var(--color-hairline);box-shadow:0 16px 36px -16px rgba(0,0,0,.45);display:block}.gmp-shot figcaption{margin-top:8px;font-size:12px;color:var(--color-whisper)}</style>\n\n<figure class=\"gmp-shot\"><video src=\"/_img/games/video/id-kebun-ais.mp4\" poster=\"/_img/games/video/id-kebun-ais.webp\" autoplay muted loop playsinline preload=\"metadata\" width=\"540\" height=\"960\" aria-label=\"Video game Kebun Kecil Ais\"></video><figcaption>Tanam, siram, panen, lalu berbagi 🌱</figcaption></figure>\n\n<h2>Apa yang dimainkan?</h2>\n\n<ul>\n  <li>Pilih petak dan <strong>tanam</strong> benih.</li>\n  <li><strong>Siram</strong> setiap hari dan <strong>cabut</strong> rumput liar.</li>\n  <li><strong>Panen</strong> tomat, stroberi, bunga matahari, dan lainnya.</li>\n  <li><strong>Berbagi</strong> hasil panen dan kumpulkan halaman di buku kebun.</li>\n</ul>\n\n<h2>Apa yang dilatih?</h2>\n\n<ul>\n  <li>Sabar menunggu tanaman tumbuh.</li>\n  <li>Merawat sesuatu setiap hari.</li>\n  <li>Senang berbagi dengan orang lain.</li>\n</ul>\n\n<h2>Tips untuk Ayah & Bunda</h2>\n\n<ul>\n  <li>Tanam biji kacang hijau di kapas bersama anak dan amati setiap hari.</li>\n  <li>Tanyakan: “Hasil panennya mau dibagi ke siapa?”</li>\n  <li>Hubungkan dengan rasa syukur: hujan, matahari, dan tanah adalah nikmat Allah.</li>\n</ul>\n\n<blockquote>Rasulullah ﷺ bersabda: “Tidaklah seorang muslim menanam pohon atau tanaman, lalu dimakan oleh burung, manusia, atau hewan, melainkan menjadi sedekah baginya.” (HR. Bukhari 2320, Muslim 1553)</blockquote>\n\n<p>Lanjutkan merawat hewan di <a href=\"/_/blog/game-sahabat-hewan-mo/\">Sahabat Hewan Mo</a>. Lihat juga <a href=\"/_/permainan/\">semua game Baby Mo</a> — semuanya juga ada di <a href=\"/app/\">aplikasi Baby Mo</a> untuk iPhone dan iPad.</p>",
      "en": "<p>Gardening teaches something that is hard to teach with words: <em>patience</em>. In <strong>Ais’s Little Garden</strong>, little ones help Ais look after her garden from seed to harvest — and learn that the best harvest is the one you share.</p>\n\n<p><a class=\"gmp-play\" href=\"https://play.babymo.id/babymo-kebun-ais.html\" target=\"_blank\" rel=\"noopener\">▶ Play Ais's Little Garden now</a></p>\n\n<style>.gmp-play{display:inline-block;margin:.4em 0;padding:12px 22px;border-radius:999px;background:linear-gradient(135deg,#3FD08C,#1FA971);color:#fff!important;font-weight:800;text-decoration:none!important;box-shadow:0 8px 20px -8px rgba(31,169,113,.55);}.gmp-shot{margin:1.4em auto;max-width:300px;text-align:center}.gmp-shot img,.gmp-shot video{width:100%;height:auto;border-radius:22px;border:1px solid var(--color-hairline);box-shadow:0 16px 36px -16px rgba(0,0,0,.45);display:block}.gmp-shot figcaption{margin-top:8px;font-size:12px;color:var(--color-whisper)}</style>\n\n<figure class=\"gmp-shot\"><video src=\"/_img/games/video/en-kebun-ais.mp4\" poster=\"/_img/games/video/en-kebun-ais.webp\" autoplay muted loop playsinline preload=\"metadata\" width=\"540\" height=\"960\" aria-label=\"Ais's Little Garden game video\"></video><figcaption>Plant, water, harvest, then share 🌱</figcaption></figure>\n\n<h2>What children do</h2>\n\n<ul>\n  <li>Choose a bed and <strong>plant</strong> the seeds.</li>\n  <li><strong>Water</strong> every day and <strong>pull</strong> the weeds.</li>\n  <li><strong>Harvest</strong> tomatoes, strawberries, sunflowers and more.</li>\n  <li><strong>Share</strong> the harvest and fill the garden book.</li>\n</ul>\n\n<h2>What it builds</h2>\n\n<ul>\n  <li>Patience while plants grow.</li>\n  <li>Caring for something every day.</li>\n  <li>Enjoying sharing with others.</li>\n</ul>\n\n<h2>Tips for parents</h2>\n\n<ul>\n  <li>Grow mung beans on cotton wool together and look at them every day.</li>\n  <li>Ask: “Who shall we share the harvest with?”</li>\n  <li>Link it to gratitude: rain, sunshine and soil are gifts from Allah.</li>\n</ul>\n\n<blockquote>The Prophet ﷺ said: “No Muslim plants a tree or sows a crop, and then a bird, a person or an animal eats from it, except that it is charity for him.” (Bukhari 2320, Muslim 1553)</blockquote>\n\n<p>Next, look after the animals in <a href=\"/_/blog/game-sahabat-hewan-mo/\">Mo's Animal Friends</a>. See <a href=\"/_/permainan/\">all Baby Mo games</a> — they are all in the <a href=\"/app/\">Baby Mo app</a> for iPhone and iPad too.</p>"
    },
    "tags": [
      "game",
      "akhlak",
      "berkebun",
      "kebun-ais"
    ],
    "published": "2026-11-13",
    "updated": "2026-11-13",
    "readingTimeMin": 2,
    "author": "tim-baby-mo"
  },
  {
    "slug": "game-akademi-tenis-kak-adam",
    "title": {
      "id": "Akademi Tenis Kak Adam: Game Tenis Langkah demi Langkah untuk Anak (Gratis)",
      "en": "Kak Adam's Tennis Academy: A Step-by-Step Tennis Game for Kids (Free)"
    },
    "excerpt": {
      "id": "Tunggu pantulan, forehand, backhand dua tangan, servis, sampai menghitung skor — belajar dasar tenis bersama Kak Adam, dengan bintang di setiap pelajaran.",
      "en": "Wait for the bounce, forehand, two-handed backhand, serving and scoring — learn tennis basics with Kak Adam, with stars for every lesson."
    },
    "body": {
      "id": "<p>Kak Adam suka sekali tenis — dan ia ingin mengajak adik-adiknya ikut berlatih. <strong>Akademi Tenis Kak Adam</strong> memperkenalkan dasar-dasar tenis lewat pelajaran pendek: lihat bolanya, tunggu pantulannya, lalu pukul di saat yang tepat.</p>\n\n<p><a class=\"gmp-play\" href=\"https://play.babymo.id/babymo-tenis-adam.html\" target=\"_blank\" rel=\"noopener\">▶ Main Akademi Tenis sekarang</a></p>\n\n<style>.gmp-play{display:inline-block;margin:.4em 0;padding:12px 22px;border-radius:999px;background:linear-gradient(135deg,#3FD08C,#1FA971);color:#fff!important;font-weight:800;text-decoration:none!important;box-shadow:0 8px 20px -8px rgba(31,169,113,.55);}.gmp-shot{margin:1.4em auto;max-width:300px;text-align:center}.gmp-shot img,.gmp-shot video{width:100%;height:auto;border-radius:22px;border:1px solid var(--color-hairline);box-shadow:0 16px 36px -16px rgba(0,0,0,.45);display:block}.gmp-shot figcaption{margin-top:8px;font-size:12px;color:var(--color-whisper)}</style>\n\n<figure class=\"gmp-shot\"><video src=\"/_img/games/video/id-tenis-adam.mp4\" poster=\"/_img/games/video/id-tenis-adam.webp\" autoplay muted loop playsinline preload=\"metadata\" width=\"540\" height=\"960\" aria-label=\"Video game Akademi Tenis Kak Adam\"></video><figcaption>Forehand atau backhand? Pukul bersama Kak Adam 🎾</figcaption></figure>\n\n<h2>Apa yang dimainkan?</h2>\n\n<ul>\n  <li><strong>Tunggu pantulan</strong> — belajar memperhatikan bola.</li>\n  <li><strong>Forehand</strong> dan <strong>backhand dua tangan</strong>: ketuk sisi yang benar saat bola datang.</li>\n  <li><strong>Servis</strong> dan <strong>menghitung skor</strong> tenis.</li>\n  <li>Kumpulkan bintang dan buka pelajaran berikutnya sampai sertifikat.</li>\n</ul>\n\n<h2>Apa yang dilatih?</h2>\n\n<ul>\n  <li>Koordinasi mata dan tangan.</li>\n  <li>Fokus dan ketepatan waktu.</li>\n  <li>Sportivitas: kalah dan menang sama-sama bagian dari belajar.</li>\n</ul>\n\n<h2>Tips untuk Ayah & Bunda</h2>\n\n<ul>\n  <li>Setelah bermain, ajak anak bermain lempar tangkap bola sungguhan.</li>\n  <li>Puji usahanya, bukan hanya hasilnya.</li>\n  <li>Ingatkan: sebelum olahraga baca Bismillah, sesudahnya Alhamdulillah.</li>\n</ul>\n\n<blockquote>Rasulullah ﷺ bersabda: “Mukmin yang kuat lebih baik dan lebih dicintai Allah daripada mukmin yang lemah, dan pada keduanya ada kebaikan.” (HR. Muslim 2664)</blockquote>\n\n<p>Masih ingin bergerak? Coba <a href=\"/_/blog/game-forehand-beat-ritme-anak/\">Forehand Beat</a>. Lihat juga <a href=\"/_/permainan/\">semua game Baby Mo</a> — semuanya juga ada di <a href=\"/app/\">aplikasi Baby Mo</a> untuk iPhone dan iPad.</p>",
      "en": "<p>Kak Adam loves tennis — and he wants his little brother and sister to practise too. <strong>Kak Adam’s Tennis Academy</strong> introduces the basics in short lessons: watch the ball, wait for the bounce, then hit at just the right moment.</p>\n\n<p><a class=\"gmp-play\" href=\"https://play.babymo.id/babymo-tenis-adam.html\" target=\"_blank\" rel=\"noopener\">▶ Play the Tennis Academy now</a></p>\n\n<style>.gmp-play{display:inline-block;margin:.4em 0;padding:12px 22px;border-radius:999px;background:linear-gradient(135deg,#3FD08C,#1FA971);color:#fff!important;font-weight:800;text-decoration:none!important;box-shadow:0 8px 20px -8px rgba(31,169,113,.55);}.gmp-shot{margin:1.4em auto;max-width:300px;text-align:center}.gmp-shot img,.gmp-shot video{width:100%;height:auto;border-radius:22px;border:1px solid var(--color-hairline);box-shadow:0 16px 36px -16px rgba(0,0,0,.45);display:block}.gmp-shot figcaption{margin-top:8px;font-size:12px;color:var(--color-whisper)}</style>\n\n<figure class=\"gmp-shot\"><video src=\"/_img/games/video/en-tenis-adam.mp4\" poster=\"/_img/games/video/en-tenis-adam.webp\" autoplay muted loop playsinline preload=\"metadata\" width=\"540\" height=\"960\" aria-label=\"Kak Adam's Tennis Academy game video\"></video><figcaption>Forehand or backhand? Hit it with Kak Adam 🎾</figcaption></figure>\n\n<h2>What children do</h2>\n\n<ul>\n  <li><strong>Wait for the bounce</strong> — learning to watch the ball.</li>\n  <li><strong>Forehand</strong> and <strong>two-handed backhand</strong>: tap the right side as the ball arrives.</li>\n  <li><strong>Serving</strong> and <strong>keeping score</strong> in tennis.</li>\n  <li>Collect stars and unlock the next lesson, all the way to a certificate.</li>\n</ul>\n\n<h2>What it builds</h2>\n\n<ul>\n  <li>Hand–eye coordination.</li>\n  <li>Focus and timing.</li>\n  <li>Good sportsmanship: winning and losing are both part of learning.</li>\n</ul>\n\n<h2>Tips for parents</h2>\n\n<ul>\n  <li>After playing, have a real game of throw-and-catch.</li>\n  <li>Praise the effort, not only the result.</li>\n  <li>Remind them: Bismillah before sport, Alhamdulillah after.</li>\n</ul>\n\n<blockquote>The Prophet ﷺ said: “The strong believer is better and more beloved to Allah than the weak believer, while there is good in both.” (Muslim 2664)</blockquote>\n\n<p>Want to keep moving? Try <a href=\"/_/blog/game-forehand-beat-ritme-anak/\">Forehand Beat</a>. See <a href=\"/_/permainan/\">all Baby Mo games</a> — they are all in the <a href=\"/app/\">Baby Mo app</a> for iPhone and iPad too.</p>"
    },
    "tags": [
      "game",
      "olahraga",
      "tenis",
      "kak-adam"
    ],
    "published": "2026-11-13",
    "updated": "2026-11-13",
    "readingTimeMin": 2,
    "author": "tim-baby-mo"
  },
  {
    "slug": "game-doa-ramadan-anak",
    "title": {
      "id": "Game Doa Ramadan untuk Anak: 11 Doa dengan Suara Arab Asli (Gratis)",
      "en": "Ramadan Du'as Game for Kids: 11 Du'as with Real Arabic Audio (Free)"
    },
    "excerpt": {
      "id": "Doa melihat hilal, niat puasa, berbuka, Lailatul Qadr, zakat, sampai takbir Idul Fitri — 11 doa Ramadan dengan suara, arti, dan kata yang menyala satu per satu.",
      "en": "Seeing the crescent, the intention to fast, breaking the fast, Laylatul Qadr, zakat and the Eid takbir — 11 Ramadan du'as with audio, meaning and words that light up one by one."
    },
    "body": {
      "id": "<p>Ramadan adalah bulan yang paling ditunggu anak-anak: sahur bersama, berbuka, tarawih, lalu Lebaran. <strong>Doa Ramadan</strong> menemani setiap momennya dengan doa yang tepat — dibacakan dengan suara Arab asli dan kata yang menyala satu per satu.</p>\n\n<p><a class=\"gmp-play\" href=\"https://play.babymo.id/babymo-doa-harian.html?series=ramadan\" target=\"_blank\" rel=\"noopener\">▶ Main Doa Ramadan sekarang</a></p>\n\n<style>.gmp-play{display:inline-block;margin:.4em 0;padding:12px 22px;border-radius:999px;background:linear-gradient(135deg,#3FD08C,#1FA971);color:#fff!important;font-weight:800;text-decoration:none!important;box-shadow:0 8px 20px -8px rgba(31,169,113,.55);}.gmp-shot{margin:1.4em auto;max-width:300px;text-align:center}.gmp-shot img,.gmp-shot video{width:100%;height:auto;border-radius:22px;border:1px solid var(--color-hairline);box-shadow:0 16px 36px -16px rgba(0,0,0,.45);display:block}.gmp-shot figcaption{margin-top:8px;font-size:12px;color:var(--color-whisper)}</style>\n\n<figure class=\"gmp-shot\"><video src=\"/_img/games/video/id-doa-ramadan.mp4\" poster=\"/_img/games/video/id-doa-ramadan.webp\" autoplay muted loop playsinline preload=\"metadata\" width=\"540\" height=\"960\" aria-label=\"Video game Doa Ramadan Baby Mo\"></video><figcaption>Doa berbuka, dibacakan kata demi kata 🌙</figcaption></figure>\n\n<h2>Apa yang dimainkan?</h2>\n\n<ul>\n  <li><strong>11 doa Ramadan</strong>: melihat hilal, niat puasa, “aku sedang puasa”, berbuka, sesudah berbuka, untuk tuan rumah, witir, Lailatul Qadr, zakat, takbir, dan ucapan Id.</li>\n  <li>Dengarkan suaranya — kata menyala mengikuti bacaan, bisa diperlambat.</li>\n  <li>Ketuk tombol aksi dan ikuti adegannya bersama Mo dan keluarganya.</li>\n  <li>Kumpulkan bintang di setiap doa.</li>\n</ul>\n\n<h2>Apa yang dilatih?</h2>\n\n<ul>\n  <li>Mengenal doa-doa Ramadan sejak dini.</li>\n  <li>Memahami arti doa yang diucapkan.</li>\n  <li>Menyambut Ramadan dengan gembira.</li>\n</ul>\n\n<h2>Tips untuk Ayah & Bunda</h2>\n\n<ul>\n  <li>Pelajari satu doa sebelum momennya: doa berbuka beberapa hari sebelum Ramadan.</li>\n  <li>Baca doa berbuka bersama saat azan Maghrib.</li>\n  <li>Lihat juga <a href=\"/_/blog/persiapan-ramadan-untuk-anak/\">persiapan Ramadan untuk anak</a>.</li>\n</ul>\n\n<blockquote>Rasulullah ﷺ bersabda: “Barang siapa berpuasa Ramadan karena iman dan mengharap pahala, diampuni dosa-dosanya yang telah lalu.” (HR. Bukhari 38, Muslim 760)</blockquote>\n\n<p>Ingin doa sehari-hari juga? Buka <a href=\"/_/blog/game-doa-harian-anak/\">Doa Harian</a>. Lihat juga <a href=\"/_/permainan/\">semua game Baby Mo</a> — semuanya juga ada di <a href=\"/app/\">aplikasi Baby Mo</a> untuk iPhone dan iPad.</p>",
      "en": "<p>Ramadan is the month children look forward to most: suhoor together, iftar, tarawih and then Eid. <strong>Ramadan Du'as</strong> brings the right du'a to every moment — read with real Arabic audio while each word lights up.</p>\n\n<p><a class=\"gmp-play\" href=\"https://play.babymo.id/babymo-doa-harian.html?series=ramadan\" target=\"_blank\" rel=\"noopener\">▶ Play Ramadan Du'as now</a></p>\n\n<style>.gmp-play{display:inline-block;margin:.4em 0;padding:12px 22px;border-radius:999px;background:linear-gradient(135deg,#3FD08C,#1FA971);color:#fff!important;font-weight:800;text-decoration:none!important;box-shadow:0 8px 20px -8px rgba(31,169,113,.55);}.gmp-shot{margin:1.4em auto;max-width:300px;text-align:center}.gmp-shot img,.gmp-shot video{width:100%;height:auto;border-radius:22px;border:1px solid var(--color-hairline);box-shadow:0 16px 36px -16px rgba(0,0,0,.45);display:block}.gmp-shot figcaption{margin-top:8px;font-size:12px;color:var(--color-whisper)}</style>\n\n<figure class=\"gmp-shot\"><video src=\"/_img/games/video/en-doa-ramadan.mp4\" poster=\"/_img/games/video/en-doa-ramadan.webp\" autoplay muted loop playsinline preload=\"metadata\" width=\"540\" height=\"960\" aria-label=\"Baby Mo Ramadan Du'as game video\"></video><figcaption>The iftar du'a, word by word 🌙</figcaption></figure>\n\n<h2>What children do</h2>\n\n<ul>\n  <li><strong>11 Ramadan du'as</strong>: seeing the crescent, the intention to fast, “I am fasting”, breaking the fast, after iftar, for the host, witr, Laylatul Qadr, zakat, the takbir and the Eid greeting.</li>\n  <li>Listen — each word lights up as it is read, and you can slow it down.</li>\n  <li>Tap the action button and follow the scene with Mo and his family.</li>\n  <li>Collect stars for every du'a.</li>\n</ul>\n\n<h2>What it builds</h2>\n\n<ul>\n  <li>Getting to know the Ramadan du'as early.</li>\n  <li>Understanding what each du'a means.</li>\n  <li>Welcoming Ramadan with joy.</li>\n</ul>\n\n<h2>Tips for parents</h2>\n\n<ul>\n  <li>Learn a du'a before its moment: the iftar du'a a few days before Ramadan.</li>\n  <li>Say the iftar du'a together at the Maghrib adhan.</li>\n  <li>See also <a href=\"/_/blog/persiapan-ramadan-untuk-anak/\">getting children ready for Ramadan</a>.</li>\n</ul>\n\n<blockquote>The Prophet ﷺ said: “Whoever fasts Ramadan out of faith and hoping for reward, his past sins are forgiven.” (Bukhari 38, Muslim 760)</blockquote>\n\n<p>Want the everyday du'as too? Open <a href=\"/_/blog/game-doa-harian-anak/\">Daily Du'as</a>. See <a href=\"/_/permainan/\">all Baby Mo games</a> — they are all in the <a href=\"/app/\">Baby Mo app</a> for iPhone and iPad too.</p>"
    },
    "tags": [
      "game",
      "doa",
      "ramadan",
      "puasa"
    ],
    "published": "2026-11-13",
    "updated": "2026-11-13",
    "readingTimeMin": 2,
    "author": "tim-baby-mo"
  },
  {
    "slug": "game-tasbih-sebelum-tidur-anak",
    "title": {
      "id": "Tasbih Sebelum Tidur untuk Anak: 33 · 33 · 34 bersama Baby Mo (Gratis)",
      "en": "Bedtime Tasbih for Kids: 33 · 33 · 34 with Baby Mo (Free)"
    },
    "excerpt": {
      "id": "Subhanallah 33, Alhamdulillah 33, Allahu akbar 34 — ketuk manik demi manik bersama Baby Mo, dengan versi singkat untuk si kecil. Rutinitas malam yang menenangkan.",
      "en": "Subhanallah 33, Alhamdulillah 33, Allahu akbar 34 — tap bead by bead with Baby Mo, with a short version for little ones. A calming bedtime routine."
    },
    "body": {
      "id": "<p>Menjelang tidur, anak butuh sesuatu yang menenangkan. <strong>Tasbih Sebelum Tidur</strong> mengajak si kecil berdzikir bersama Baby Mo: ketuk untuk menghitung, dengar bacaannya, dan lihat lingkaran tasbih terisi pelan-pelan.</p>\n\n<p><a class=\"gmp-play\" href=\"https://play.babymo.id/babymo-doa-harian.html?doa=bedtime_tasbih\" target=\"_blank\" rel=\"noopener\">▶ Main Tasbih Sebelum Tidur sekarang</a></p>\n\n<style>.gmp-play{display:inline-block;margin:.4em 0;padding:12px 22px;border-radius:999px;background:linear-gradient(135deg,#3FD08C,#1FA971);color:#fff!important;font-weight:800;text-decoration:none!important;box-shadow:0 8px 20px -8px rgba(31,169,113,.55);}.gmp-shot{margin:1.4em auto;max-width:300px;text-align:center}.gmp-shot img,.gmp-shot video{width:100%;height:auto;border-radius:22px;border:1px solid var(--color-hairline);box-shadow:0 16px 36px -16px rgba(0,0,0,.45);display:block}.gmp-shot figcaption{margin-top:8px;font-size:12px;color:var(--color-whisper)}</style>\n\n<figure class=\"gmp-shot\"><video src=\"/_img/games/video/id-tasbih.mp4\" poster=\"/_img/games/video/id-tasbih.webp\" autoplay muted loop playsinline preload=\"metadata\" width=\"540\" height=\"960\" aria-label=\"Video game Tasbih Sebelum Tidur\"></video><figcaption>Ketuk, hitung, dan tenang 📿</figcaption></figure>\n\n<h2>Apa yang dimainkan?</h2>\n\n<ul>\n  <li><strong>Subhanallah 33×</strong>, <strong>Alhamdulillah 33×</strong>, <strong>Allahu akbar 34×</strong>.</li>\n  <li>Ketuk layar untuk setiap hitungan — lingkaran tasbih terisi.</li>\n  <li><strong>Versi singkat</strong> untuk anak yang masih kecil: cukup satu kali setiap bacaan.</li>\n  <li>Selesai? Lanjutkan dengan doa sebelum tidur.</li>\n</ul>\n\n<h2>Apa yang dilatih?</h2>\n\n<ul>\n  <li>Kebiasaan dzikir sebelum tidur.</li>\n  <li>Belajar berhitung sampai 33.</li>\n  <li>Menenangkan diri sebelum tidur.</li>\n</ul>\n\n<h2>Tips untuk Ayah & Bunda</h2>\n\n<ul>\n  <li>Lakukan di tempat tidur dengan lampu redup.</li>\n  <li>Mulai dengan versi singkat, lalu naik pelan-pelan.</li>\n  <li>Contohkan: anak paling mudah meniru dzikir orang tuanya.</li>\n</ul>\n\n<blockquote>Rasulullah ﷺ mengajarkan kepada Ali dan Fatimah: “Apabila kalian berdua hendak tidur, bertakbirlah 34 kali, bertasbihlah 33 kali, dan bertahmidlah 33 kali. Itu lebih baik bagi kalian daripada seorang pembantu.” (HR. Bukhari 3705, Muslim 2727)</blockquote>\n\n<p>Bagian dari rutinitas malam: lanjutkan dengan <a href=\"/_/blog/game-dreamtime-rutinitas-tidur-anak/\">Baby Mo Dreamtime</a>. Lihat juga <a href=\"/_/permainan/\">semua game Baby Mo</a> — semuanya juga ada di <a href=\"/app/\">aplikasi Baby Mo</a> untuk iPhone dan iPad.</p>",
      "en": "<p>Before sleep, children need something calming. <strong>Bedtime Tasbih</strong> invites little ones to make dhikr with Baby Mo: tap to count, hear the words, and watch the tasbih circle slowly fill up.</p>\n\n<p><a class=\"gmp-play\" href=\"https://play.babymo.id/babymo-doa-harian.html?doa=bedtime_tasbih\" target=\"_blank\" rel=\"noopener\">▶ Play Bedtime Tasbih now</a></p>\n\n<style>.gmp-play{display:inline-block;margin:.4em 0;padding:12px 22px;border-radius:999px;background:linear-gradient(135deg,#3FD08C,#1FA971);color:#fff!important;font-weight:800;text-decoration:none!important;box-shadow:0 8px 20px -8px rgba(31,169,113,.55);}.gmp-shot{margin:1.4em auto;max-width:300px;text-align:center}.gmp-shot img,.gmp-shot video{width:100%;height:auto;border-radius:22px;border:1px solid var(--color-hairline);box-shadow:0 16px 36px -16px rgba(0,0,0,.45);display:block}.gmp-shot figcaption{margin-top:8px;font-size:12px;color:var(--color-whisper)}</style>\n\n<figure class=\"gmp-shot\"><video src=\"/_img/games/video/en-tasbih.mp4\" poster=\"/_img/games/video/en-tasbih.webp\" autoplay muted loop playsinline preload=\"metadata\" width=\"540\" height=\"960\" aria-label=\"Bedtime Tasbih game video\"></video><figcaption>Tap, count and calm down 📿</figcaption></figure>\n\n<h2>What children do</h2>\n\n<ul>\n  <li><strong>Subhanallah 33×</strong>, <strong>Alhamdulillah 33×</strong>, <strong>Allahu akbar 34×</strong>.</li>\n  <li>Tap the screen for every count — the tasbih circle fills up.</li>\n  <li>A <strong>short version</strong> for the youngest: just once for each phrase.</li>\n  <li>Done? Carry on with the du'a before sleeping.</li>\n</ul>\n\n<h2>What it builds</h2>\n\n<ul>\n  <li>A habit of dhikr before sleep.</li>\n  <li>Counting up to 33.</li>\n  <li>Calming down at bedtime.</li>\n</ul>\n\n<h2>Tips for parents</h2>\n\n<ul>\n  <li>Do it in bed with the lights dimmed.</li>\n  <li>Start with the short version, then build up slowly.</li>\n  <li>Lead by example: children copy their parents’ dhikr most easily.</li>\n</ul>\n\n<blockquote>The Prophet ﷺ taught Ali and Fatimah: “When you go to bed, say Allahu akbar 34 times, Subhanallah 33 times and Alhamdulillah 33 times. That is better for you than a servant.” (Bukhari 3705, Muslim 2727)</blockquote>\n\n<p>Part of the bedtime routine: carry on with <a href=\"/_/blog/game-dreamtime-rutinitas-tidur-anak/\">Baby Mo Dreamtime</a>. See <a href=\"/_/permainan/\">all Baby Mo games</a> — they are all in the <a href=\"/app/\">Baby Mo app</a> for iPhone and iPad too.</p>"
    },
    "tags": [
      "game",
      "dzikir",
      "tidur",
      "tasbih"
    ],
    "published": "2026-11-13",
    "updated": "2026-11-13",
    "readingTimeMin": 2,
    "author": "tim-baby-mo"
  },
  {
    slug: "game-kenalan-baby-mo-puzzle",
    title: {
      id: "Kenalan Baby Mo: Game Puzzle Pertama untuk Balita (Gratis)",
      en: "Meet Baby Mo: A First Puzzle Game for Toddlers (Free)",
    },
    excerpt: {
      id: "Game pertama yang pas untuk si kecil: ketuk sembilan petak sampai Baby Mo muncul. Melatih rasa ingin tahu dan koordinasi tangan — gratis, tanpa iklan, langsung di browser.",
      en: "The perfect first game: tap nine tiles until Baby Mo appears. Builds curiosity and hand coordination — free, ad-free, right in the browser.",
    },
    body: {
      id: `<p>Untuk anak yang baru pertama kali memegang layar, game yang rumit justru membuat frustrasi. <strong>Kenalan Baby Mo</strong> dibuat sesederhana mungkin: ada sembilan petak, dan di baliknya bersembunyi Baby Mo. Ketuk satu per satu, dan lihat siapa yang muncul!</p>

<p><a class="gmp-play" href="https://play.babymo.id/babymo-puzzle.html" target="_blank" rel="noopener">▶ Main Kenalan Baby Mo sekarang</a></p>

<style>.gmp-play{display:inline-block;margin:.4em 0;padding:12px 22px;border-radius:999px;background:linear-gradient(135deg,#3FD08C,#1FA971);color:#fff!important;font-weight:800;text-decoration:none!important;box-shadow:0 8px 20px -8px rgba(31,169,113,.55);}.gmp-shot{margin:1.4em auto;max-width:300px;text-align:center}.gmp-shot img,.gmp-shot video{width:100%;height:auto;border-radius:22px;border:1px solid var(--color-hairline);box-shadow:0 16px 36px -16px rgba(0,0,0,.45);display:block}.gmp-shot figcaption{margin-top:8px;font-size:12px;color:var(--color-whisper)}</style>

<figure class="gmp-shot"><video src="/_img/games/video/id-puzzle.mp4" poster="/_img/games/video/id-puzzle.webp" autoplay muted loop playsinline preload="metadata" width="540" height="960" aria-label="Tampilan game Kenalan Baby Mo dengan petak-petak puzzle"></video><figcaption>Ketuk petaknya, temukan Baby Mo 🧩</figcaption></figure>

<h2>Apa yang dilatih?</h2>

<ul>
  <li><strong>Rasa ingin tahu</strong> — setiap petak yang terbuka memancing pertanyaan "di balik yang ini ada apa?".</li>
  <li><strong>Koordinasi tangan dan mata</strong> — mengetuk tepat di petak adalah latihan motorik halus yang nyata untuk balita.</li>
  <li><strong>Sebab-akibat</strong> — "kalau aku ketuk, sesuatu terjadi". Pelajaran dasar yang membuat anak percaya diri.</li>
</ul>

<h2>Cocok untuk siapa?</h2>

<p>Usia 2–6 tahun, terutama yang baru pertama kali main game. Tidak ada waktu, tidak ada kalah — jadi tidak ada tangis. Setelah Baby Mo muncul, si kecil biasanya langsung minta main lagi.</p>

<h2>Cara main bersama</h2>

<ol>
  <li>Pangku si kecil dan biarkan ia memilih petak sendiri.</li>
  <li>Tebak bersama sebelum mengetuk: "Kira-kira bagian apa ya? Tangan? Mata?"</li>
  <li>Saat Baby Mo muncul, ajak menyapa: "Assalamualaikum, Baby Mo!"</li>
</ol>

<h2>Tips untuk Ayah & Bunda</h2>

<ul>
  <li>Main 5–10 menit sudah cukup. Akhiri saat anak masih senang, bukan saat sudah rewel.</li>
  <li>Jadikan momen bicara: sebut warna, bagian tubuh, dan ekspresi wajah Baby Mo.</li>
  <li>Ajarkan salam sejak dini — game ini kesempatan yang pas.</li>
</ul>

<blockquote>Rasulullah ﷺ bersabda: "Maukah aku tunjukkan sesuatu yang jika kalian lakukan, kalian akan saling mencintai? Sebarkanlah salam di antara kalian." (HR. Muslim 54)</blockquote>

<p>Setelah berkenalan, lanjut ke <a href="/_/blog/game-anak-islami-baby-mo/">game Baby Mo lainnya</a>, atau baca <a href="/_/cerita/">cerita bergambar Baby Mo</a> bersama si kecil.</p>`,
      en: `<p>For a child holding a screen for the first time, complicated games only frustrate. <strong>Meet Baby Mo</strong> is as simple as it gets: nine tiles, with Baby Mo hiding behind them. Tap them one by one and see who appears!</p>

<p><a class="gmp-play" href="https://play.babymo.id/babymo-puzzle.html" target="_blank" rel="noopener">▶ Play Meet Baby Mo now</a></p>

<style>.gmp-play{display:inline-block;margin:.4em 0;padding:12px 22px;border-radius:999px;background:linear-gradient(135deg,#3FD08C,#1FA971);color:#fff!important;font-weight:800;text-decoration:none!important;box-shadow:0 8px 20px -8px rgba(31,169,113,.55);}.gmp-shot{margin:1.4em auto;max-width:300px;text-align:center}.gmp-shot img,.gmp-shot video{width:100%;height:auto;border-radius:22px;border:1px solid var(--color-hairline);box-shadow:0 16px 36px -16px rgba(0,0,0,.45);display:block}.gmp-shot figcaption{margin-top:8px;font-size:12px;color:var(--color-whisper)}</style>

<figure class="gmp-shot"><video src="/_img/games/video/en-puzzle.mp4" poster="/_img/games/video/en-puzzle.webp" autoplay muted loop playsinline preload="metadata" width="540" height="960" aria-label="Meet Baby Mo game screen with puzzle tiles"></video><figcaption>Tap the tiles, find Baby Mo 🧩</figcaption></figure>

<h2>What it builds</h2>

<ul>
  <li><strong>Curiosity</strong> — every tile that opens invites "what's behind this one?".</li>
  <li><strong>Hand-eye coordination</strong> — tapping exactly on a tile is real fine-motor practice for toddlers.</li>
  <li><strong>Cause and effect</strong> — "when I tap, something happens". A basic lesson that builds confidence.</li>
</ul>

<h2>Who is it for?</h2>

<p>Ages 2–6, especially first-time players. No timer, no losing — so no tears. Once Baby Mo appears, little ones usually ask to play again straight away.</p>

<h2>How to play together</h2>

<ol>
  <li>Sit your child on your lap and let them choose the tiles.</li>
  <li>Guess together before tapping: "Which part could it be? A hand? An eye?"</li>
  <li>When Baby Mo appears, greet him: "Assalamu'alaikum, Baby Mo!"</li>
</ol>

<h2>Tips for parents</h2>

<ul>
  <li>5–10 minutes is plenty. Stop while it's still fun, not when they're tired.</li>
  <li>Make it a talking moment: name colours, body parts and Baby Mo's expressions.</li>
  <li>Teach salam early — this game is the perfect chance.</li>
</ul>

<blockquote>The Prophet ﷺ said: "Shall I tell you something that, if you do it, you will love one another? Spread salam among yourselves." (Muslim 54)</blockquote>

<p>After saying hello, try the <a href="/_/blog/game-anak-islami-baby-mo/">other Baby Mo games</a>, or read <a href="/_/cerita/">Baby Mo's picture books</a> together.</p>`,
    },
    tags: ["game", "puzzle", "balita", "kenalan-baby-mo"],
    published: "2026-11-06",
    updated: "2026-11-13",
    readingTimeMin: 3,
    author: "tim-baby-mo",
  },
  {
    slug: "game-doa-harian-anak",
    title: {
      id: "Game Doa Harian Anak: 14 Doa dengan Audio Arab Asli (Gratis)",
      en: "Daily Du'as Game for Kids: 14 Du'as with Real Arabic Audio (Free)",
    },
    excerpt: {
      id: "14 doa sehari-hari dari bangun tidur sampai tidur lagi — kata menyala mengikuti suara Arab asli, bisa diperlambat, lengkap dengan arti dan kuis kecil. Gratis dan tanpa iklan.",
      en: "14 everyday du'as from waking up to bedtime — each word lights up with the real Arabic audio, can be slowed down, with meanings and a little quiz. Free and ad-free.",
    },
    body: {
      id: `<p>Anak menghafal doa paling mudah lewat <em>telinga</em>, bukan lewat tulisan. <strong>Doa Harian</strong> mengajak si kecil mendengar, mengulang, lalu menebak doa untuk setiap momen dalam sehari — dari membuka mata di pagi hari sampai memejamkannya lagi di malam hari.</p>

<p><a class="gmp-play" href="https://play.babymo.id/babymo-doa-harian.html" target="_blank" rel="noopener">▶ Main Doa Harian sekarang</a></p>

<style>.gmp-play{display:inline-block;margin:.4em 0;padding:12px 22px;border-radius:999px;background:linear-gradient(135deg,#3FD08C,#1FA971);color:#fff!important;font-weight:800;text-decoration:none!important;box-shadow:0 8px 20px -8px rgba(31,169,113,.55);}.gmp-shot{margin:1.4em auto;max-width:300px;text-align:center}.gmp-shot img,.gmp-shot video{width:100%;height:auto;border-radius:22px;border:1px solid var(--color-hairline);box-shadow:0 16px 36px -16px rgba(0,0,0,.45);display:block}.gmp-shot figcaption{margin-top:8px;font-size:12px;color:var(--color-whisper)}</style>

<figure class="gmp-shot"><video src="/_img/games/video/id-doa-harian.mp4" poster="/_img/games/video/id-doa-harian.webp" autoplay muted loop playsinline preload="metadata" width="540" height="960" aria-label="Tampilan game Doa Harian Baby Mo dengan kartu doa"></video><figcaption>Dengar, ulangi, dan uji hafalan 🤲</figcaption></figure>

<h2>14 doa dalam satu hari</h2>

<ul>
  <li><strong>Pagi:</strong> doa bangun tidur, masuk dan keluar kamar mandi, keluar rumah.</li>
  <li><strong>Siang:</strong> doa naik kendaraan, belajar, sebelum makan, sesudah makan.</li>
  <li><strong>Sore:</strong> doa ketika hujan, masuk rumah, dzikir sore.</li>
  <li><strong>Malam:</strong> doa untuk orang tua, tasbih sebelum tidur, doa sebelum tidur.</li>
</ul>

<p>Setiap kata Arab menyala satu per satu mengikuti suaranya, bisa diperlambat (sampai 0,5×) dan diulang 2×. Ada juga seri <a href="/_/blog/game-doa-ramadan-anak/">Doa Ramadan</a> dengan 11 doa.</p>

<h2>Apa yang dilatih?</h2>

<ul>
  <li><strong>Hafalan doa</strong> lewat audio Arab yang bisa diputar berulang kali.</li>
  <li><strong>Memahami arti</strong> — setiap doa disertai artinya, jadi anak tahu apa yang ia ucapkan.</li>
  <li><strong>Mengingat momen</strong> — kuis kecil menanyakan doa mana untuk situasi mana.</li>
</ul>

<h2>Cara main bersama</h2>

<ol>
  <li>Pilih satu doa saja per hari. Putar audionya, lalu ulangi bersama.</li>
  <li>Praktikkan langsung di momennya: doa makan saat makan, doa tidur saat tidur.</li>
  <li>Setelah beberapa hari, coba kuisnya — rayakan setiap jawaban benar.</li>
</ol>

<h2>Tips untuk Ayah & Bunda</h2>

<ul>
  <li>Ucapkan doa dengan suara terdengar di depan anak. Anak meniru apa yang ia dengar setiap hari.</li>
  <li>Jangan buru-buru: satu doa yang benar-benar dihafal lebih baik daripada banyak doa yang setengah-setengah.</li>
  <li>Lihat juga daftar <a href="/_/blog/doa-harian-anak-sebelum-usia-7/">doa yang perlu dikenal anak sebelum usia 7</a>.</li>
</ul>

<blockquote>"Dan Tuhanmu berfirman: Berdoalah kepada-Ku, niscaya akan Aku perkenankan bagimu." (QS. Ghafir: 60)</blockquote>

<p>Ingin teks lengkapnya? Buka <a href="/_/doa/">kumpulan doa harian anak</a>, lalu lanjut uji hafalan di <a href="/_/blog/game-dua-journey-mencocokkan-doa/">Dua Journey</a>.</p>`,
      en: `<p>Children memorise du'as most easily through their <em>ears</em>, not through text. <strong>Daily Du'as</strong> invites little ones to listen, repeat and then guess the du'a for each moment of the day — from opening their eyes in the morning to closing them again at night.</p>

<p><a class="gmp-play" href="https://play.babymo.id/babymo-doa-harian.html" target="_blank" rel="noopener">▶ Play Daily Du'as now</a></p>

<style>.gmp-play{display:inline-block;margin:.4em 0;padding:12px 22px;border-radius:999px;background:linear-gradient(135deg,#3FD08C,#1FA971);color:#fff!important;font-weight:800;text-decoration:none!important;box-shadow:0 8px 20px -8px rgba(31,169,113,.55);}.gmp-shot{margin:1.4em auto;max-width:300px;text-align:center}.gmp-shot img,.gmp-shot video{width:100%;height:auto;border-radius:22px;border:1px solid var(--color-hairline);box-shadow:0 16px 36px -16px rgba(0,0,0,.45);display:block}.gmp-shot figcaption{margin-top:8px;font-size:12px;color:var(--color-whisper)}</style>

<figure class="gmp-shot"><video src="/_img/games/video/en-doa-harian.mp4" poster="/_img/games/video/en-doa-harian.webp" autoplay muted loop playsinline preload="metadata" width="540" height="960" aria-label="Baby Mo Daily Du'as game screen with du'a cards"></video><figcaption>Listen, repeat and test yourself 🤲</figcaption></figure>

<h2>14 du'as through the day</h2>

<ul>
  <li><strong>Morning:</strong> waking up, entering and leaving the bathroom, leaving home.</li>
  <li><strong>Daytime:</strong> riding, studying, before eating, after eating.</li>
  <li><strong>Afternoon:</strong> when it rains, coming home, the evening dhikr.</li>
  <li><strong>Night:</strong> the du'a for parents, the bedtime tasbih, before sleeping.</li>
</ul>

<p>Each Arabic word lights up as it is read, and you can slow it down (to 0.5×) or repeat it twice. There is also a <a href="/_/blog/game-doa-ramadan-anak/">Ramadan Du'as</a> series with 11 du'as.</p>

<h2>What it builds</h2>

<ul>
  <li><strong>Memorising du'as</strong> with Arabic audio you can replay again and again.</li>
  <li><strong>Understanding meaning</strong> — each du'a comes with its translation, so children know what they're saying.</li>
  <li><strong>Remembering the moment</strong> — a little quiz asks which du'a goes with which situation.</li>
</ul>

<h2>How to play together</h2>

<ol>
  <li>Pick just one du'a a day. Play the audio, then repeat it together.</li>
  <li>Practise it in the real moment: the eating du'a at meals, the sleep du'a at bedtime.</li>
  <li>After a few days, try the quiz — and celebrate every right answer.</li>
</ol>

<h2>Tips for parents</h2>

<ul>
  <li>Say du'as out loud in front of your child. Children copy what they hear every day.</li>
  <li>Don't rush: one du'a truly memorised beats many half-learned ones.</li>
  <li>See also the <a href="/_/blog/doa-harian-anak-sebelum-usia-7/">du'as every child should know before age 7</a>.</li>
</ul>

<blockquote>"And your Lord says: Call upon Me; I will respond to you." (Qur'an 40:60)</blockquote>

<p>Want the full texts? Open the <a href="/_/doa/">daily du'a collection</a>, then test yourselves in <a href="/_/blog/game-dua-journey-mencocokkan-doa/">Dua Journey</a>.</p>`,
    },
    tags: ["game", "doa", "doa-harian", "edukasi-anak"],
    published: "2026-11-06",
    updated: "2026-11-13",
    readingTimeMin: 4,
    author: "tim-baby-mo",
  },
  {
    slug: "game-dua-journey-mencocokkan-doa",
    title: {
      id: "Dua Journey: Game Mencocokkan Doa dengan Situasinya (Gratis)",
      en: "Dua Journey: A Game to Match Du'as with Their Moments (Free)",
    },
    excerpt: {
      id: "Doa yang mana untuk momen ini? Cocokkan kartu doa dengan situasinya dalam tiga tingkat — Mudah, Sedang, dan Hebat. Melatih ingatan dan pemahaman doa.",
      en: "Which du'a fits this moment? Match du'a cards with their situations across three levels — Easy, Medium and Great. Builds memory and understanding of du'as.",
    },
    body: {
      id: `<p>Menghafal doa adalah langkah pertama. Langkah berikutnya: <em>tahu kapan membacanya</em>. Di <strong>Dua Journey</strong>, anak mencocokkan kartu doa dengan gambar situasinya — mau makan, mau tidur, keluar rumah — sampai semua pasangan ketemu.</p>

<p><a class="gmp-play" href="https://play.babymo.id/babymo-dua-game.html" target="_blank" rel="noopener">▶ Main Dua Journey sekarang</a></p>

<style>.gmp-play{display:inline-block;margin:.4em 0;padding:12px 22px;border-radius:999px;background:linear-gradient(135deg,#3FD08C,#1FA971);color:#fff!important;font-weight:800;text-decoration:none!important;box-shadow:0 8px 20px -8px rgba(31,169,113,.55);}.gmp-shot{margin:1.4em auto;max-width:300px;text-align:center}.gmp-shot img,.gmp-shot video{width:100%;height:auto;border-radius:22px;border:1px solid var(--color-hairline);box-shadow:0 16px 36px -16px rgba(0,0,0,.45);display:block}.gmp-shot figcaption{margin-top:8px;font-size:12px;color:var(--color-whisper)}</style>

<figure class="gmp-shot"><video src="/_img/games/video/id-dua-journey.mp4" poster="/_img/games/video/id-dua-journey.webp" autoplay muted loop playsinline preload="metadata" width="540" height="960" aria-label="Tampilan game Dua Journey dengan kartu doa dan situasi"></video><figcaption>Doa yang mana untuk momen ini? 🃏</figcaption></figure>

<h2>Tiga tingkat kesulitan</h2>

<ul>
  <li><strong>Mudah 🌱</strong> — 3 doa, pas untuk pemula.</li>
  <li><strong>Sedang 🌿</strong> — lebih banyak doa untuk yang mulai hafal.</li>
  <li><strong>Hebat 🌟</strong> — sampai 8 doa untuk sang juara.</li>
</ul>

<h2>Apa yang dilatih?</h2>

<ul>
  <li><strong>Memahami doa</strong> — bukan sekadar hafal bunyinya, tapi tahu fungsinya.</li>
  <li><strong>Daya ingat</strong> — mengingat letak kartu dan pasangannya.</li>
  <li><strong>Kebiasaan</strong> — anak mulai mengingatkan sendiri: "Eh, belum baca doa makan!"</li>
</ul>

<h2>Cara main bersama</h2>

<ol>
  <li>Mulai dari tingkat Mudah, walau anak sudah besar. Sukses pertama itu penting.</li>
  <li>Setiap pasangan yang cocok, bacakan doanya bersama dengan suara pelan.</li>
  <li>Naik tingkat hanya kalau anak yang minta.</li>
</ol>

<h2>Tips untuk Ayah & Bunda</h2>

<ul>
  <li>Mainkan Dua Journey setelah anak mengenal doanya lewat <a href="/_/blog/game-doa-harian-anak/">game Doa Harian</a>.</li>
  <li>Hubungkan dengan hari ini: "Tadi pagi kita baca doa yang mana, ya?"</li>
  <li>Pujian untuk usaha, bukan hanya untuk jawaban benar.</li>
</ul>

<blockquote>Rasulullah ﷺ bersabda: "Doa adalah ibadah." (HR. Abu Dawud 1479, Tirmidzi 2969)</blockquote>

<p>Butuh teks doanya? Buka <a href="/_/doa/">kumpulan doa harian</a>. Atau lihat <a href="/_/blog/game-anak-islami-baby-mo/">semua game Baby Mo</a>.</p>`,
      en: `<p>Memorising a du'a is step one. Step two: <em>knowing when to say it</em>. In <strong>Dua Journey</strong>, children match du'a cards with pictures of the moment — before eating, before sleep, leaving home — until every pair is found.</p>

<p><a class="gmp-play" href="https://play.babymo.id/babymo-dua-game.html" target="_blank" rel="noopener">▶ Play Dua Journey now</a></p>

<style>.gmp-play{display:inline-block;margin:.4em 0;padding:12px 22px;border-radius:999px;background:linear-gradient(135deg,#3FD08C,#1FA971);color:#fff!important;font-weight:800;text-decoration:none!important;box-shadow:0 8px 20px -8px rgba(31,169,113,.55);}.gmp-shot{margin:1.4em auto;max-width:300px;text-align:center}.gmp-shot img,.gmp-shot video{width:100%;height:auto;border-radius:22px;border:1px solid var(--color-hairline);box-shadow:0 16px 36px -16px rgba(0,0,0,.45);display:block}.gmp-shot figcaption{margin-top:8px;font-size:12px;color:var(--color-whisper)}</style>

<figure class="gmp-shot"><video src="/_img/games/video/en-dua-journey.mp4" poster="/_img/games/video/en-dua-journey.webp" autoplay muted loop playsinline preload="metadata" width="540" height="960" aria-label="Dua Journey game screen with du'a and situation cards"></video><figcaption>Which du'a fits this moment? 🃏</figcaption></figure>

<h2>Three levels</h2>

<ul>
  <li><strong>Easy 🌱</strong> — 3 du'as, perfect for beginners.</li>
  <li><strong>Medium 🌿</strong> — more du'as for those starting to remember.</li>
  <li><strong>Great 🌟</strong> — up to 8 du'as for champions.</li>
</ul>

<h2>What it builds</h2>

<ul>
  <li><strong>Understanding du'as</strong> — not just the sounds, but what each one is for.</li>
  <li><strong>Memory</strong> — remembering where the cards and their pairs are.</li>
  <li><strong>Habit</strong> — children start reminding themselves: "Oh, we haven't said the eating du'a!"</li>
</ul>

<h2>How to play together</h2>

<ol>
  <li>Start on Easy, even with older children. A first success matters.</li>
  <li>For every matched pair, say the du'a together softly.</li>
  <li>Only move up a level when your child asks to.</li>
</ol>

<h2>Tips for parents</h2>

<ul>
  <li>Play Dua Journey after your child has met the du'as in the <a href="/_/blog/game-doa-harian-anak/">Daily Du'as game</a>.</li>
  <li>Connect it to today: "Which du'a did we say this morning?"</li>
  <li>Praise effort, not only right answers.</li>
</ul>

<blockquote>The Prophet ﷺ said: "Du'a is worship." (Abu Dawud 1479, Tirmidhi 2969)</blockquote>

<p>Need the du'a texts? Open the <a href="/_/doa/">daily du'a collection</a>. Or see <a href="/_/blog/game-anak-islami-baby-mo/">all Baby Mo games</a>.</p>`,
    },
    tags: ["game", "doa", "matching", "edukasi-anak"],
    published: "2026-11-06",
    updated: "2026-11-13",
    readingTimeMin: 3,
    author: "tim-baby-mo",
  },
  {
    slug: "game-kata-islam-menyusun-kata-arab",
    title: {
      id: "Kata Islam: Game Menyusun Kata Arab Pertama untuk Anak (Gratis)",
      en: "Islamic Words: A Game to Build First Arabic Words (Free)",
    },
    excerpt: {
      id: "21 kata Arab dari keluarga, ibadah, dan alam — Ummi, Abi, Masjid, Syams — disusun huruf demi huruf sambil mendengar cara membacanya. Gratis, tanpa iklan.",
      en: "21 Arabic words about family, worship and nature — Ummi, Abi, Masjid, Shams — built letter by letter while hearing how they're read. Free, ad-free.",
    },
    body: {
      id: `<p>Setelah mengenal huruf hijaiyah, anak sering bertanya: "Huruf-huruf ini bisa jadi kata apa?" <strong>Kata Islam</strong> menjawabnya. Anak menyeret huruf Arab satu per satu sampai tersusun jadi kata — lalu mendengar cara membacanya.</p>

<p><a class="gmp-play" href="https://play.babymo.id/babymo-arabic-spelling.html" target="_blank" rel="noopener">▶ Main Kata Islam sekarang</a></p>

<style>.gmp-play{display:inline-block;margin:.4em 0;padding:12px 22px;border-radius:999px;background:linear-gradient(135deg,#3FD08C,#1FA971);color:#fff!important;font-weight:800;text-decoration:none!important;box-shadow:0 8px 20px -8px rgba(31,169,113,.55);}.gmp-shot{margin:1.4em auto;max-width:300px;text-align:center}.gmp-shot img,.gmp-shot video{width:100%;height:auto;border-radius:22px;border:1px solid var(--color-hairline);box-shadow:0 16px 36px -16px rgba(0,0,0,.45);display:block}.gmp-shot figcaption{margin-top:8px;font-size:12px;color:var(--color-whisper)}</style>

<figure class="gmp-shot"><video src="/_img/games/video/id-kata-islam.mp4" poster="/_img/games/video/id-kata-islam.webp" autoplay muted loop playsinline preload="metadata" width="540" height="960" aria-label="Tampilan game Kata Islam: menyusun huruf Arab menjadi kata"></video><figcaption>Huruf demi huruf, jadilah kata 🔤</figcaption></figure>

<h2>21 kata dalam tiga tema</h2>

<ul>
  <li><strong>Keluarga & rumah:</strong> Ummi, Abi, Akhi, Ukhti, Bayt (rumah), Maa' (air), Nawm (tidur)…</li>
  <li><strong>Ibadah:</strong> Allah, Bismillah, Du'a, Masjid, Kitab, Salam, Syukran…</li>
  <li><strong>Alam:</strong> Syams (matahari), Qamar (bulan), Najm (bintang), Zahrah (bunga), Samak (ikan), Thayr (burung)…</li>
</ul>

<h2>Apa yang dilatih?</h2>

<ul>
  <li><strong>Mengenali bentuk huruf</strong> di dalam kata — tidak lagi berdiri sendiri.</li>
  <li><strong>Kosakata Arab pertama</strong> yang dekat dengan kehidupan anak.</li>
  <li><strong>Mendengar dan meniru</strong> cara membaca setiap kata.</li>
</ul>

<h2>Cara main bersama</h2>

<ol>
  <li>Mulai dari tema keluarga: kata "Ummi" dan "Abi" paling menyenangkan untuk anak.</li>
  <li>Setelah kata selesai, ucapkan bersama dan tunjuk orangnya: "Ummi!"</li>
  <li>Pakai kata-kata baru itu sepanjang hari: "Ayo minum <em>maa'</em>!"</li>
</ol>

<h2>Tips untuk Ayah & Bunda</h2>

<ul>
  <li>Pastikan anak sudah kenal sebagian huruf hijaiyah. Lihat <a href="/_/blog/cara-mengenalkan-huruf-hijaiyah-pada-anak/">cara mengenalkan huruf hijaiyah</a>.</li>
  <li>Satu tema per minggu sudah cukup.</li>
  <li>Puji usahanya menyusun, bukan kecepatannya.</li>
</ul>

<blockquote>Rasulullah ﷺ bersabda: "Sebaik-baik kalian adalah orang yang belajar Al-Qur'an dan mengajarkannya." (HR. Bukhari 5027)</blockquote>

<p>Lanjutkan dengan <a href="/_/blog/game-belajar-hijaiyah-anak/">game Huruf Hijaiyah</a> atau <a href="/_/blog/puzzle-hijaiyah-belajar-sambil-bermain/">puzzle hijaiyah</a>.</p>`,
      en: `<p>Once children know some hijaiyah letters, they often ask: "What words can these letters make?" <strong>Islamic Words</strong> answers that. Children drag Arabic letters one by one until they form a word — then hear how it's read.</p>

<p><a class="gmp-play" href="https://play.babymo.id/babymo-arabic-spelling.html" target="_blank" rel="noopener">▶ Play Islamic Words now</a></p>

<style>.gmp-play{display:inline-block;margin:.4em 0;padding:12px 22px;border-radius:999px;background:linear-gradient(135deg,#3FD08C,#1FA971);color:#fff!important;font-weight:800;text-decoration:none!important;box-shadow:0 8px 20px -8px rgba(31,169,113,.55);}.gmp-shot{margin:1.4em auto;max-width:300px;text-align:center}.gmp-shot img,.gmp-shot video{width:100%;height:auto;border-radius:22px;border:1px solid var(--color-hairline);box-shadow:0 16px 36px -16px rgba(0,0,0,.45);display:block}.gmp-shot figcaption{margin-top:8px;font-size:12px;color:var(--color-whisper)}</style>

<figure class="gmp-shot"><video src="/_img/games/video/en-kata-islam.mp4" poster="/_img/games/video/en-kata-islam.webp" autoplay muted loop playsinline preload="metadata" width="540" height="960" aria-label="Islamic Words game: arranging Arabic letters into a word"></video><figcaption>Letter by letter, a word appears 🔤</figcaption></figure>

<h2>21 words in three themes</h2>

<ul>
  <li><strong>Family & home:</strong> Ummi, Abi, Akhi, Ukhti, Bayt (house), Maa' (water), Nawm (sleep)…</li>
  <li><strong>Worship:</strong> Allah, Bismillah, Du'a, Masjid, Kitab, Salam, Shukran…</li>
  <li><strong>Nature:</strong> Shams (sun), Qamar (moon), Najm (star), Zahrah (flower), Samak (fish), Tayr (bird)…</li>
</ul>

<h2>What it builds</h2>

<ul>
  <li><strong>Recognising letter shapes</strong> inside words — not just on their own.</li>
  <li><strong>A first Arabic vocabulary</strong> close to children's daily life.</li>
  <li><strong>Listening and copying</strong> how each word is read.</li>
</ul>

<h2>How to play together</h2>

<ol>
  <li>Start with family: "Ummi" and "Abi" are the most fun words for children.</li>
  <li>When a word is done, say it together and point at the person: "Ummi!"</li>
  <li>Use the new words all day: "Let's drink some <em>maa'</em>!"</li>
</ol>

<h2>Tips for parents</h2>

<ul>
  <li>Make sure your child already knows some hijaiyah letters. See <a href="/_/blog/cara-mengenalkan-huruf-hijaiyah-pada-anak/">how to introduce hijaiyah letters</a>.</li>
  <li>One theme a week is enough.</li>
  <li>Praise the effort of building, not the speed.</li>
</ul>

<blockquote>The Prophet ﷺ said: "The best of you are those who learn the Qur'an and teach it." (Bukhari 5027)</blockquote>

<p>Carry on with the <a href="/_/blog/game-belajar-hijaiyah-anak/">Hijaiyah Letters game</a> or the <a href="/_/blog/puzzle-hijaiyah-belajar-sambil-bermain/">hijaiyah puzzles</a>.</p>`,
    },
    tags: ["game", "bahasa-arab", "kosa-kata", "hijaiyah"],
    published: "2026-11-06",
    updated: "2026-11-13",
    readingTimeMin: 4,
    author: "tim-baby-mo",
  },
  {
    slug: "game-dreamtime-rutinitas-tidur-anak",
    title: {
      id: "Baby Mo Dreamtime: Game Rutinitas Tidur Islami untuk Balita (Gratis)",
      en: "Baby Mo Dreamtime: An Islamic Bedtime Routine Game for Toddlers (Free)",
    },
    excerpt: {
      id: "Gosok gigi, ganti baju tidur, berdoa, lalu tidur — empat langkah rutinitas malam yang menenangkan bersama Baby Mo. Membantu si kecil bersiap tidur tanpa drama.",
      en: "Brush teeth, change into pyjamas, say the du'a, then sleep — a calming four-step bedtime routine with Baby Mo. Helps little ones get ready for bed without the drama.",
    },
    body: {
      id: `<p>Jam tidur sering jadi jam paling ramai di rumah. <strong>Baby Mo Dreamtime</strong> mengubah rutinitas malam jadi permainan yang tenang: anak membantu Baby Mo bersiap tidur, langkah demi langkah, sampai lampu redup dan doa tidur dibaca.</p>

<p><a class="gmp-play" href="https://play.babymo.id/babymo-dreamtime.html" target="_blank" rel="noopener">▶ Main Baby Mo Dreamtime sekarang</a></p>

<style>.gmp-play{display:inline-block;margin:.4em 0;padding:12px 22px;border-radius:999px;background:linear-gradient(135deg,#3FD08C,#1FA971);color:#fff!important;font-weight:800;text-decoration:none!important;box-shadow:0 8px 20px -8px rgba(31,169,113,.55);}.gmp-shot{margin:1.4em auto;max-width:300px;text-align:center}.gmp-shot img,.gmp-shot video{width:100%;height:auto;border-radius:22px;border:1px solid var(--color-hairline);box-shadow:0 16px 36px -16px rgba(0,0,0,.45);display:block}.gmp-shot figcaption{margin-top:8px;font-size:12px;color:var(--color-whisper)}</style>

<figure class="gmp-shot"><video src="/_img/games/video/id-dreamtime.mp4" poster="/_img/games/video/id-dreamtime.webp" autoplay muted loop playsinline preload="metadata" width="540" height="960" aria-label="Tampilan game Baby Mo Dreamtime di kamar tidur malam hari"></video><figcaption>Rutinitas malam yang menenangkan 🌙</figcaption></figure>

<h2>Empat langkah sebelum tidur</h2>

<ol>
  <li><strong>Gosok gigi</strong> sampai bersih.</li>
  <li><strong>Ganti baju</strong> — baju tidur dan celana tidur.</li>
  <li><strong>Ambil boneka</strong> kesayangan.</li>
  <li><strong>Berdoa</strong> — <em>Bismika Allahumma ahya wa amut</em> — lalu tidur.</li>
</ol>

<h2>Kenapa rutinitas penting?</h2>

<p>Balita merasa aman saat tahu apa yang akan terjadi berikutnya. Urutan yang sama setiap malam memberi sinyal ke tubuh dan hati: sebentar lagi waktunya istirahat. Game ini memperkenalkan urutan itu lewat Baby Mo, sehingga anak lebih mudah mengikutinya di dunia nyata.</p>

<h2>Cara main bersama</h2>

<ol>
  <li>Mainkan setelah makan malam, bukan tepat sebelum tidur — layar tetap layar.</li>
  <li>Setelah game selesai, matikan layar dan lakukan langkah yang sama sungguhan.</li>
  <li>Tutup dengan doa tidur bersama, lampu redup, dan pelukan.</li>
</ol>

<h2>Tips untuk Ayah & Bunda</h2>

<ul>
  <li>Jaga urutannya sama setiap malam; konsistensi lebih penting daripada kesempurnaan.</li>
  <li>Biarkan anak memilih bonekanya sendiri — memberi rasa kendali yang menenangkan.</li>
  <li>Dengarkan juga <a href="/_/blog/lagu-doa-sebelum-tidur-anak/">lagu doa sebelum tidur</a>.</li>
</ul>

<blockquote>"Bismika Allahumma ahyaa wa amuut" — Dengan nama-Mu, ya Allah, aku hidup dan aku mati. (HR. Bukhari 6324, Muslim 2711)</blockquote>

<p>Baca juga cerita bergambar <a href="/_/cerita/selamat-tidur-sayang/">Selamat Tidur, Sayang</a> sebagai pengantar tidur.</p>`,
      en: `<p>Bedtime is often the busiest hour at home. <strong>Baby Mo Dreamtime</strong> turns the evening routine into a calm game: children help Baby Mo get ready for bed, step by step, until the lights dim and the sleep du'a is said.</p>

<p><a class="gmp-play" href="https://play.babymo.id/babymo-dreamtime.html" target="_blank" rel="noopener">▶ Play Baby Mo Dreamtime now</a></p>

<style>.gmp-play{display:inline-block;margin:.4em 0;padding:12px 22px;border-radius:999px;background:linear-gradient(135deg,#3FD08C,#1FA971);color:#fff!important;font-weight:800;text-decoration:none!important;box-shadow:0 8px 20px -8px rgba(31,169,113,.55);}.gmp-shot{margin:1.4em auto;max-width:300px;text-align:center}.gmp-shot img,.gmp-shot video{width:100%;height:auto;border-radius:22px;border:1px solid var(--color-hairline);box-shadow:0 16px 36px -16px rgba(0,0,0,.45);display:block}.gmp-shot figcaption{margin-top:8px;font-size:12px;color:var(--color-whisper)}</style>

<figure class="gmp-shot"><video src="/_img/games/video/en-dreamtime.mp4" poster="/_img/games/video/en-dreamtime.webp" autoplay muted loop playsinline preload="metadata" width="540" height="960" aria-label="Baby Mo Dreamtime game in a night-time bedroom"></video><figcaption>A calming evening routine 🌙</figcaption></figure>

<h2>Four steps before sleep</h2>

<ol>
  <li><strong>Brush teeth</strong> until they're clean.</li>
  <li><strong>Change clothes</strong> — pyjama top and bottoms.</li>
  <li><strong>Fetch a teddy</strong> to cuddle.</li>
  <li><strong>Say the du'a</strong> — <em>Bismika Allahumma ahya wa amut</em> — then sleep.</li>
</ol>

<h2>Why routines matter</h2>

<p>Toddlers feel safe when they know what comes next. The same order every night tells the body and heart: rest time is coming. This game introduces that order through Baby Mo, so it's easier to follow in real life.</p>

<h2>How to play together</h2>

<ol>
  <li>Play after dinner, not right before sleep — a screen is still a screen.</li>
  <li>When the game ends, switch off and do the same steps for real.</li>
  <li>Finish with the sleep du'a together, dim lights and a hug.</li>
</ol>

<h2>Tips for parents</h2>

<ul>
  <li>Keep the same order every night; consistency beats perfection.</li>
  <li>Let your child choose their own teddy — a little control is calming.</li>
  <li>Also listen to the <a href="/_/blog/lagu-doa-sebelum-tidur-anak/">bedtime du'a song</a>.</li>
</ul>

<blockquote>"Bismika Allahumma ahyaa wa amoot" — In Your name, O Allah, I live and I die. (Bukhari 6324, Muslim 2711)</blockquote>

<p>Also read the picture book <a href="/_/cerita/selamat-tidur-sayang/">Goodnight, My Loves</a> as a bedtime story.</p>`,
    },
    tags: ["game", "rutinitas", "tidur", "doa-tidur"],
    published: "2026-11-06",
    updated: "2026-11-13",
    readingTimeMin: 4,
    author: "tim-baby-mo",
  },
  {
    slug: "game-memory-match-islami-anak",
    title: {
      id: "Memory Match Islami: Game Kartu Ingatan untuk Anak (Gratis)",
      en: "Islamic Memory Match: A Card Memory Game for Kids (Free)",
    },
    excerpt: {
      id: "Balik dua kartu, ingat letaknya! Dari 4 kartu untuk balita sampai 20 kartu untuk juara — bulan, bintang, Ka'bah, masjid, kurma, sampai huruf hijaiyah.",
      en: "Flip two cards, remember where they are! From 4 cards for toddlers to 20 for champions — moons, stars, the Kaaba, mosques, dates and even hijaiyah letters.",
    },
    body: {
      id: `<p>Permainan kartu ingatan adalah salah satu latihan otak tertua dan paling disukai anak. <strong>Memory Match</strong> Baby Mo memakai gambar-gambar islami yang ceria — bulan, bintang, Ka'bah, lentera, masjid, kurma, Al-Qur'an — sampai huruf hijaiyah untuk yang lebih besar.</p>

<p><a class="gmp-play" href="https://play.babymo.id/babymo-memory-match.html" target="_blank" rel="noopener">▶ Main Memory Match sekarang</a></p>

<style>.gmp-play{display:inline-block;margin:.4em 0;padding:12px 22px;border-radius:999px;background:linear-gradient(135deg,#3FD08C,#1FA971);color:#fff!important;font-weight:800;text-decoration:none!important;box-shadow:0 8px 20px -8px rgba(31,169,113,.55);}.gmp-shot{margin:1.4em auto;max-width:300px;text-align:center}.gmp-shot img,.gmp-shot video{width:100%;height:auto;border-radius:22px;border:1px solid var(--color-hairline);box-shadow:0 16px 36px -16px rgba(0,0,0,.45);display:block}.gmp-shot figcaption{margin-top:8px;font-size:12px;color:var(--color-whisper)}</style>

<figure class="gmp-shot"><video src="/_img/games/video/id-memory-match.mp4" poster="/_img/games/video/id-memory-match.webp" autoplay muted loop playsinline preload="metadata" width="540" height="960" aria-label="Tampilan game Memory Match dengan kartu bergambar islami"></video><figcaption>Balik dua kartu, ingat letaknya 🎴</figcaption></figure>

<h2>Delapan tingkat, dari balita sampai juara</h2>

<p>Tingkatnya naik pelan-pelan: <strong>Mudah, Pemula, Sedang, Sulit, Dreamtime, Ahli, Master, sampai Juara</strong> — dari 4 kartu untuk usia 2 tahun sampai 20 kartu untuk kakak yang sudah jago. Ada juga set kartu bertema rutinitas tidur dan huruf hijaiyah.</p>

<h2>Apa yang dilatih?</h2>

<ul>
  <li><strong>Daya ingat kerja</strong> — menyimpan letak kartu di kepala.</li>
  <li><strong>Konsentrasi</strong> — fokus beberapa menit tanpa terganggu.</li>
  <li><strong>Kosakata</strong> — sebut nama setiap gambar: "Ini Ka'bah, ini lentera."</li>
</ul>

<h2>Cara main bersama</h2>

<ol>
  <li>Mulai dari tingkat yang membuat anak menang di percobaan pertama.</li>
  <li>Bergantian: Ayah/Bunda membalik dua kartu, lalu giliran anak.</li>
  <li>Saat menemukan pasangan, ceritakan sedikit tentang gambarnya.</li>
</ol>

<h2>Tips untuk Ayah & Bunda</h2>

<ul>
  <li>Sesekali "lupa" dengan sengaja — anak senang sekali bisa mengingatkan orang tuanya.</li>
  <li>Naikkan tingkat hanya setelah anak menang dua kali berturut-turut.</li>
  <li>Kalau anak frustrasi, turun satu tingkat. Tujuannya senang, bukan menang.</li>
</ul>

<p>Suka melatih fokus? Coba juga <a href="/_/blog/game-cari-baby-mo-look-and-find/">Cari Baby Mo</a> dan <a href="/_/kuis/">Tantangan Otak Baby Mo</a>.</p>`,
      en: `<p>Card-matching is one of the oldest brain games — and one children love. Baby Mo's <strong>Memory Match</strong> uses cheerful Islamic pictures — the moon, stars, the Kaaba, lanterns, mosques, dates, the Qur'an — and hijaiyah letters for older children.</p>

<p><a class="gmp-play" href="https://play.babymo.id/babymo-memory-match.html" target="_blank" rel="noopener">▶ Play Memory Match now</a></p>

<style>.gmp-play{display:inline-block;margin:.4em 0;padding:12px 22px;border-radius:999px;background:linear-gradient(135deg,#3FD08C,#1FA971);color:#fff!important;font-weight:800;text-decoration:none!important;box-shadow:0 8px 20px -8px rgba(31,169,113,.55);}.gmp-shot{margin:1.4em auto;max-width:300px;text-align:center}.gmp-shot img,.gmp-shot video{width:100%;height:auto;border-radius:22px;border:1px solid var(--color-hairline);box-shadow:0 16px 36px -16px rgba(0,0,0,.45);display:block}.gmp-shot figcaption{margin-top:8px;font-size:12px;color:var(--color-whisper)}</style>

<figure class="gmp-shot"><video src="/_img/games/video/en-memory-match.mp4" poster="/_img/games/video/en-memory-match.webp" autoplay muted loop playsinline preload="metadata" width="540" height="960" aria-label="Memory Match game with Islamic picture cards"></video><figcaption>Flip two cards, remember where they are 🎴</figcaption></figure>

<h2>Eight levels, toddler to champion</h2>

<p>The levels rise gently: <strong>Easy, Beginner, Medium, Hard, Dreamtime, Expert, Master and Champion</strong> — from 4 cards for two-year-olds to 20 cards for confident older children. There are also bedtime-themed and hijaiyah-letter card sets.</p>

<h2>What it builds</h2>

<ul>
  <li><strong>Working memory</strong> — holding where each card is in your head.</li>
  <li><strong>Concentration</strong> — focusing for a few minutes without drifting.</li>
  <li><strong>Vocabulary</strong> — name each picture: "This is the Kaaba, this is a lantern."</li>
</ul>

<h2>How to play together</h2>

<ol>
  <li>Start at a level where your child wins on the first try.</li>
  <li>Take turns: you flip two cards, then it's your child's turn.</li>
  <li>When you find a pair, share a little about the picture.</li>
</ol>

<h2>Tips for parents</h2>

<ul>
  <li>Now and then "forget" on purpose — children love reminding their parents.</li>
  <li>Only move up a level after two wins in a row.</li>
  <li>If frustration shows, drop a level. The goal is fun, not winning.</li>
</ul>

<p>Enjoy focus games? Try <a href="/_/blog/game-cari-baby-mo-look-and-find/">Find Baby Mo</a> and the <a href="/_/kuis/">Baby Mo Brain Challenge</a>.</p>`,
    },
    tags: ["game", "memori", "matching", "fokus"],
    published: "2026-11-06",
    updated: "2026-11-13",
    readingTimeMin: 3,
    author: "tim-baby-mo",
  },
  {
    slug: "game-forehand-beat-ritme-anak",
    title: {
      id: "Forehand Beat: Game Ritme Ceria untuk Anak (Gratis)",
      en: "Forehand Beat: A Cheerful Rhythm Game for Kids (Free)",
    },
    excerpt: {
      id: "Ketuk untuk melompat, ketuk tiga kali untuk terbang, kumpulkan bintang tanpa kehilangan nyawa. Game ritme Baby Mo yang melatih refleks dan rasa irama.",
      en: "Tap to jump, tap three times to soar, collect stars without losing a life. Baby Mo's rhythm game builds reflexes and a sense of rhythm.",
    },
    body: {
      id: `<p>Ada hari-hari ketika si kecil butuh <em>bergerak</em>, bukan duduk tenang. <strong>Forehand Beat</strong> adalah game ritme yang ceria: Baby Mo berlari mengikuti irama, dan anak mengetuk layar tepat waktu untuk melompat, terbang, dan mengumpulkan bintang.</p>

<p><a class="gmp-play" href="https://play.babymo.id/baby-mo-forehand-beat.html" target="_blank" rel="noopener">▶ Main Forehand Beat sekarang</a></p>

<style>.gmp-play{display:inline-block;margin:.4em 0;padding:12px 22px;border-radius:999px;background:linear-gradient(135deg,#3FD08C,#1FA971);color:#fff!important;font-weight:800;text-decoration:none!important;box-shadow:0 8px 20px -8px rgba(31,169,113,.55);}.gmp-shot{margin:1.4em auto;max-width:300px;text-align:center}.gmp-shot img,.gmp-shot video{width:100%;height:auto;border-radius:22px;border:1px solid var(--color-hairline);box-shadow:0 16px 36px -16px rgba(0,0,0,.45);display:block}.gmp-shot figcaption{margin-top:8px;font-size:12px;color:var(--color-whisper)}</style>

<figure class="gmp-shot"><video src="/_img/games/video/id-forehand-beat.mp4" poster="/_img/games/video/id-forehand-beat.webp" autoplay muted loop playsinline preload="metadata" width="540" height="960" aria-label="Tampilan game Forehand Beat dengan Baby Mo melompat"></video><figcaption>Ketuk, lompat, terbang! 🎵</figcaption></figure>

<h2>Cara mainnya</h2>

<ul>
  <li><strong>Ketuk sekali</strong> untuk melompat.</li>
  <li><strong>Ketuk tiga kali</strong> untuk terbang tinggi.</li>
  <li><strong>Kumpulkan bintang ⭐</strong> dan jaga nyawamu ❤️ — tabrak rintangan, nyawa berkurang.</li>
</ul>

<h2>Apa yang dilatih?</h2>

<ul>
  <li><strong>Rasa irama</strong> — mengetuk mengikuti ketukan musik.</li>
  <li><strong>Refleks dan timing</strong> — kapan harus melompat, kapan menunggu.</li>
  <li><strong>Ketekunan</strong> — mencoba lagi setelah kalah, sampai skornya naik.</li>
</ul>

<h2>Cara main bersama</h2>

<ol>
  <li>Main bergantian dan bandingkan jumlah bintang — tantangan keluarga yang seru.</li>
  <li>Ajak anak bertepuk mengikuti iramanya sebelum mulai.</li>
  <li>Saat kalah, katakan "Hampir! Coba lagi?" — bukan "Yah, kalah."</li>
</ol>

<h2>Tips untuk Ayah & Bunda</h2>

<ul>
  <li>Game ini paling pas untuk sesi singkat 5–10 menit, misalnya setelah belajar.</li>
  <li>Setelah main, ajak anak bergerak sungguhan: lompat-lompat di tempat mengikuti irama.</li>
  <li>Belajar menerima kalah dengan baik juga pelajaran akhlak.</li>
</ul>

<blockquote>Rasulullah ﷺ bersabda: "Mukmin yang kuat lebih baik dan lebih dicintai Allah daripada mukmin yang lemah, dan pada keduanya ada kebaikan." (HR. Muslim 2664)</blockquote>

<p>Habis bergerak, saatnya tenang: coba <a href="/_/blog/game-dreamtime-rutinitas-tidur-anak/">Baby Mo Dreamtime</a>. Atau lihat <a href="/_/blog/game-anak-islami-baby-mo/">semua game Baby Mo</a>.</p>`,
      en: `<p>Some days little ones need to <em>move</em>, not sit still. <strong>Forehand Beat</strong> is a cheerful rhythm game: Baby Mo runs to the music, and children tap the screen in time to jump, fly and collect stars.</p>

<p><a class="gmp-play" href="https://play.babymo.id/baby-mo-forehand-beat.html" target="_blank" rel="noopener">▶ Play Forehand Beat now</a></p>

<style>.gmp-play{display:inline-block;margin:.4em 0;padding:12px 22px;border-radius:999px;background:linear-gradient(135deg,#3FD08C,#1FA971);color:#fff!important;font-weight:800;text-decoration:none!important;box-shadow:0 8px 20px -8px rgba(31,169,113,.55);}.gmp-shot{margin:1.4em auto;max-width:300px;text-align:center}.gmp-shot img,.gmp-shot video{width:100%;height:auto;border-radius:22px;border:1px solid var(--color-hairline);box-shadow:0 16px 36px -16px rgba(0,0,0,.45);display:block}.gmp-shot figcaption{margin-top:8px;font-size:12px;color:var(--color-whisper)}</style>

<figure class="gmp-shot"><video src="/_img/games/video/en-forehand-beat.mp4" poster="/_img/games/video/en-forehand-beat.webp" autoplay muted loop playsinline preload="metadata" width="540" height="960" aria-label="Forehand Beat game with Baby Mo jumping"></video><figcaption>Tap, jump, fly! 🎵</figcaption></figure>

<h2>How it works</h2>

<ul>
  <li><strong>Tap once</strong> to jump.</li>
  <li><strong>Tap three times</strong> to soar.</li>
  <li><strong>Collect stars ⭐</strong> and keep your lives ❤️ — hit an obstacle and you lose one.</li>
</ul>

<h2>What it builds</h2>

<ul>
  <li><strong>A sense of rhythm</strong> — tapping along to the beat.</li>
  <li><strong>Reflexes and timing</strong> — when to jump, when to wait.</li>
  <li><strong>Perseverance</strong> — trying again after losing, until the score climbs.</li>
</ul>

<h2>How to play together</h2>

<ol>
  <li>Take turns and compare star counts — a fun family challenge.</li>
  <li>Clap along to the rhythm together before you start.</li>
  <li>When they lose, say "So close! Again?" — not "Oh no, you lost."</li>
</ol>

<h2>Tips for parents</h2>

<ul>
  <li>Best for short 5–10 minute sessions, for example after study time.</li>
  <li>After playing, get moving for real: jump on the spot to the rhythm.</li>
  <li>Learning to lose gracefully is a character lesson too.</li>
</ul>

<blockquote>The Prophet ﷺ said: "The strong believer is better and more beloved to Allah than the weak believer, and in both there is good." (Muslim 2664)</blockquote>

<p>After moving, time to calm down: try <a href="/_/blog/game-dreamtime-rutinitas-tidur-anak/">Baby Mo Dreamtime</a>. Or see <a href="/_/blog/game-anak-islami-baby-mo/">all Baby Mo games</a>.</p>`,
    },
    tags: ["game", "musik", "ritme", "refleks"],
    published: "2026-11-06",
    updated: "2026-11-13",
    readingTimeMin: 3,
    author: "tim-baby-mo",
  },
  {
    slug: "game-kata-baik-kalimat-thayyibah",
    title: {
      id: "Kata Baik: Game Puzzle Kalimat Thayyibah untuk Anak (Gratis)",
      en: "Kind Words: A Kalimat Thayyibah Puzzle Game for Kids (Free)",
    },
    excerpt: {
      id: "Buka petak teka-teki dan temukan kalimat thayyibah — Bismillah, Alhamdulillah, InsyaAllah, MasyaAllah, Assalamualaikum — beserta kapan mengucapkannya.",
      en: "Open the puzzle tiles to discover kalimat thayyibah — Bismillah, Alhamdulillah, Insha Allah, Masha Allah, Assalamu'alaikum — and when to say them.",
    },
    body: {
      id: `<p>Kalimat thayyibah adalah ucapan-ucapan baik yang dicintai Allah. Anak bisa mulai mengenalnya sejak kecil — dan <strong>Kata Baik</strong> mengenalkannya lewat puzzle: buka petaknya, susun gambarnya, lalu temukan ucapan baik yang tersembunyi beserta momen mengucapkannya.</p>

<p><a class="gmp-play" href="https://play.babymo.id/babymo-puzzle-katabaik.html" target="_blank" rel="noopener">▶ Main Kata Baik sekarang</a></p>

<style>.gmp-play{display:inline-block;margin:.4em 0;padding:12px 22px;border-radius:999px;background:linear-gradient(135deg,#3FD08C,#1FA971);color:#fff!important;font-weight:800;text-decoration:none!important;box-shadow:0 8px 20px -8px rgba(31,169,113,.55);}.gmp-shot{margin:1.4em auto;max-width:300px;text-align:center}.gmp-shot img,.gmp-shot video{width:100%;height:auto;border-radius:22px;border:1px solid var(--color-hairline);box-shadow:0 16px 36px -16px rgba(0,0,0,.45);display:block}.gmp-shot figcaption{margin-top:8px;font-size:12px;color:var(--color-whisper)}</style>

<figure class="gmp-shot"><video src="/_img/games/video/id-kata-baik.mp4" poster="/_img/games/video/id-kata-baik.webp" autoplay muted loop playsinline preload="metadata" width="540" height="960" aria-label="Tampilan game puzzle Kata Baik dengan kalimat thayyibah"></video><figcaption>Ucapan baik apa yang tersembunyi di sini? 💖</figcaption></figure>

<h2>Ucapan baik yang dipelajari</h2>

<ul>
  <li><strong>Bismillah</strong> — sebelum memulai sesuatu.</li>
  <li><strong>Alhamdulillah</strong> — saat bersyukur.</li>
  <li><strong>InsyaAllah</strong> — saat berjanji atau merencanakan sesuatu.</li>
  <li><strong>MasyaAllah</strong> — saat kagum melihat sesuatu yang indah.</li>
  <li><strong>Assalamualaikum</strong> — saat bertemu orang.</li>
</ul>

<h2>Apa yang dilatih?</h2>

<ul>
  <li><strong>Akhlak lisan</strong> — membiasakan mulut mengucapkan yang baik.</li>
  <li><strong>Mengaitkan ucapan dengan momen</strong> — bukan sekadar hafal kata.</li>
  <li><strong>Pemecahan masalah</strong> lewat puzzle yang pas untuk anak.</li>
</ul>

<h2>Cara main bersama</h2>

<ol>
  <li>Setelah puzzle selesai, ucapkan kalimatnya bersama.</li>
  <li>Cari momennya hari itu juga: "Tadi waktu lihat pelangi, kita bilang apa?"</li>
  <li>Jadikan kebiasaan keluarga: siapa yang lupa, diingatkan dengan senyum.</li>
</ol>

<h2>Tips untuk Ayah & Bunda</h2>

<ul>
  <li>Anak meniru. Ucapkan kalimat thayyibah sendiri dengan suara terdengar.</li>
  <li>Satu kalimat per minggu sudah cukup untuk balita.</li>
  <li>Dengarkan juga <a href="/_/blog/lagu-bismillah-dulu/">lagu Bismillah Dulu</a>.</li>
</ul>

<blockquote>"Kalimat yang baik itu seperti pohon yang baik, akarnya kuat dan cabangnya menjulang ke langit." (QS. Ibrahim: 24)</blockquote>

<p>Lihat juga <a href="/_/blog/game-anak-islami-baby-mo/">semua game Baby Mo</a> dan <a href="/_/cerita/">cerita bergambar Baby Mo</a> tentang akhlak.</p>`,
      en: `<p>Kalimat thayyibah are the good words Allah loves. Children can start learning them very young — and <strong>Kind Words</strong> introduces them through puzzles: open the tiles, complete the picture, and discover the good word hiding inside, along with the moment to say it.</p>

<p><a class="gmp-play" href="https://play.babymo.id/babymo-puzzle-katabaik.html" target="_blank" rel="noopener">▶ Play Kind Words now</a></p>

<style>.gmp-play{display:inline-block;margin:.4em 0;padding:12px 22px;border-radius:999px;background:linear-gradient(135deg,#3FD08C,#1FA971);color:#fff!important;font-weight:800;text-decoration:none!important;box-shadow:0 8px 20px -8px rgba(31,169,113,.55);}.gmp-shot{margin:1.4em auto;max-width:300px;text-align:center}.gmp-shot img,.gmp-shot video{width:100%;height:auto;border-radius:22px;border:1px solid var(--color-hairline);box-shadow:0 16px 36px -16px rgba(0,0,0,.45);display:block}.gmp-shot figcaption{margin-top:8px;font-size:12px;color:var(--color-whisper)}</style>

<figure class="gmp-shot"><video src="/_img/games/video/en-kata-baik.mp4" poster="/_img/games/video/en-kata-baik.webp" autoplay muted loop playsinline preload="metadata" width="540" height="960" aria-label="Kind Words puzzle game with kalimat thayyibah"></video><figcaption>Which good word is hiding here? 💖</figcaption></figure>

<h2>The good words</h2>

<ul>
  <li><strong>Bismillah</strong> — before starting something.</li>
  <li><strong>Alhamdulillah</strong> — when we're thankful.</li>
  <li><strong>Insha Allah</strong> — when promising or planning.</li>
  <li><strong>Masha Allah</strong> — when amazed by something beautiful.</li>
  <li><strong>Assalamu'alaikum</strong> — when we meet someone.</li>
</ul>

<h2>What it builds</h2>

<ul>
  <li><strong>Good speech</strong> — getting used to saying good things.</li>
  <li><strong>Linking words to moments</strong> — not just memorising them.</li>
  <li><strong>Problem solving</strong> through child-sized puzzles.</li>
</ul>

<h2>How to play together</h2>

<ol>
  <li>When a puzzle is done, say the phrase together.</li>
  <li>Find the moment that same day: "When we saw the rainbow, what did we say?"</li>
  <li>Make it a family habit: whoever forgets gets a smiling reminder.</li>
</ol>

<h2>Tips for parents</h2>

<ul>
  <li>Children copy. Say these words yourself, out loud.</li>
  <li>One phrase a week is plenty for toddlers.</li>
  <li>Also listen to the <a href="/_/blog/lagu-bismillah-dulu/">Bismillah First song</a>.</li>
</ul>

<blockquote>"A good word is like a good tree, whose root is firm and whose branches reach the sky." (Qur'an 14:24)</blockquote>

<p>See also <a href="/_/blog/game-anak-islami-baby-mo/">all Baby Mo games</a> and <a href="/_/cerita/">Baby Mo's picture books</a> about good character.</p>`,
    },
    tags: ["game", "akhlak", "kalimat-thayyibah", "puzzle"],
    published: "2026-11-06",
    updated: "2026-11-13",
    readingTimeMin: 4,
    author: "tim-baby-mo",
  },
  {
    slug: "game-wudhu-bareng-mo",
    title: {
      id: "Wudhu Bareng Mo: Belajar Wudhu Langkah demi Langkah untuk Anak (Gratis)",
      en: "Wudu with Mo: Learn Wudu Step by Step for Kids (Free)",
    },
    excerpt: {
      id: "Sepuluh langkah wudhu dari niat sampai doa, dengan Baby Mo di depan keran. Ketuk tombol air untuk membasuh, lalu uji hafalan lewat game urutkan.",
      en: "Ten wudu steps from the intention to the du'a, with Baby Mo at the tap. Tap the water button to wash, then test yourself with the ordering game.",
    },
    body: {
      id: `<p>Sebelum sholat, ada wudhu. Dan wudhu adalah ibadah pertama yang bisa anak <em>lakukan sendiri</em> dengan tangannya. <strong>Wudhu Bareng Mo</strong> mengajarkannya satu langkah demi satu: Baby Mo berdiri di depan keran, dan anak mengetuk tombol air untuk ikut membasuh.</p>

<p><a class="gmp-play" href="https://play.babymo.id/babymo-wudhu.html" target="_blank" rel="noopener">▶ Main Wudhu Bareng Mo sekarang</a></p>

<style>.gmp-play{display:inline-block;margin:.4em 0;padding:12px 22px;border-radius:999px;background:linear-gradient(135deg,#3FD08C,#1FA971);color:#fff!important;font-weight:800;text-decoration:none!important;box-shadow:0 8px 20px -8px rgba(31,169,113,.55);}.gmp-shot{margin:1.4em auto;max-width:300px;text-align:center}.gmp-shot img,.gmp-shot video{width:100%;height:auto;border-radius:22px;border:1px solid var(--color-hairline);box-shadow:0 16px 36px -16px rgba(0,0,0,.45);display:block}.gmp-shot figcaption{margin-top:8px;font-size:12px;color:var(--color-whisper)}</style>

<figure class="gmp-shot"><video src="/_img/games/video/id-wudhu.mp4" poster="/_img/games/video/id-wudhu.webp" autoplay muted loop playsinline preload="metadata" width="540" height="960" aria-label="Tampilan game Wudhu Bareng Mo dengan Baby Mo di depan keran"></video><figcaption>Wudhu dulu, baru sholat 💧</figcaption></figure>

<h2>Sepuluh langkah wudhu</h2>

<ol>
  <li>Niat & Bismillah</li>
  <li>Membasuh kedua telapak tangan</li>
  <li>Berkumur</li>
  <li>Membersihkan hidung</li>
  <li>Membasuh wajah</li>
  <li>Membasuh tangan sampai siku</li>
  <li>Mengusap kepala</li>
  <li>Membersihkan telinga</li>
  <li>Membasuh kaki sampai mata kaki</li>
  <li>Doa setelah wudhu</li>
</ol>

<h2>Apa yang dilatih?</h2>

<ul>
  <li><strong>Tata cara wudhu</strong> yang benar dan berurutan.</li>
  <li><strong>Ingatan urutan</strong> — game urutkan menguji langkah mana yang lebih dulu.</li>
  <li><strong>Doa setelah wudhu</strong> — <em>Asyhadu an laa ilaaha illallah…</em></li>
</ul>

<h2>Cara main bersama</h2>

<ol>
  <li>Mainkan sekali bersama, lalu langsung praktik di keran sungguhan.</li>
  <li>Sebut nama setiap langkah saat anak membasuh: "Sekarang wajah!"</li>
  <li>Setelah beberapa kali, coba game urutkan — siapa yang paling cepat?</li>
</ol>

<h2>Tips untuk Ayah & Bunda</h2>

<ul>
  <li>Wudhu bersama sebelum sholat Maghrib adalah kebiasaan yang paling mudah dimulai.</li>
  <li>Tidak perlu sempurna di awal; yang penting anak senang menyentuh air dan menyebut Bismillah.</li>
  <li>Baca juga cerita bergambar <a href="/_/cerita/kenapa-berwudhu-sebelum-sholat/">Kenapa Berwudhu Sebelum Sholat?</a></li>
</ul>

<blockquote>Rasulullah ﷺ bersabda: "Barangsiapa berwudhu lalu memperbagus wudhunya, keluarlah dosa-dosanya dari tubuhnya, hingga keluar dari bawah kuku-kukunya." (HR. Muslim 245)</blockquote>

<p>Setelah wudhu, lanjut belajar sholat bersama <a href="/_/blog/game-pray-with-mo-panduan-sholat/">Pray with Mo</a>, atau baca <a href="/_/blog/cara-mengajarkan-sholat-ke-anak/">cara mengajarkan sholat ke anak</a>.</p>`,
      en: `<p>Before prayer comes wudu. And wudu is the first act of worship a child can <em>do themselves</em> with their own hands. <strong>Wudu with Mo</strong> teaches it one step at a time: Baby Mo stands at the tap, and children tap the water button to wash along.</p>

<p><a class="gmp-play" href="https://play.babymo.id/babymo-wudhu.html" target="_blank" rel="noopener">▶ Play Wudu with Mo now</a></p>

<style>.gmp-play{display:inline-block;margin:.4em 0;padding:12px 22px;border-radius:999px;background:linear-gradient(135deg,#3FD08C,#1FA971);color:#fff!important;font-weight:800;text-decoration:none!important;box-shadow:0 8px 20px -8px rgba(31,169,113,.55);}.gmp-shot{margin:1.4em auto;max-width:300px;text-align:center}.gmp-shot img,.gmp-shot video{width:100%;height:auto;border-radius:22px;border:1px solid var(--color-hairline);box-shadow:0 16px 36px -16px rgba(0,0,0,.45);display:block}.gmp-shot figcaption{margin-top:8px;font-size:12px;color:var(--color-whisper)}</style>

<figure class="gmp-shot"><video src="/_img/games/video/en-wudhu.mp4" poster="/_img/games/video/en-wudhu.webp" autoplay muted loop playsinline preload="metadata" width="540" height="960" aria-label="Wudu with Mo game with Baby Mo at the tap"></video><figcaption>Wudu first, then prayer 💧</figcaption></figure>

<h2>Ten wudu steps</h2>

<ol>
  <li>Intention & Bismillah</li>
  <li>Wash both hands</li>
  <li>Rinse the mouth</li>
  <li>Clean the nose</li>
  <li>Wash the face</li>
  <li>Wash the arms to the elbows</li>
  <li>Wipe the head</li>
  <li>Clean the ears</li>
  <li>Wash the feet to the ankles</li>
  <li>The du'a after wudu</li>
</ol>

<h2>What it builds</h2>

<ul>
  <li><strong>The correct wudu</strong>, in the right order.</li>
  <li><strong>Remembering the sequence</strong> — the ordering game tests which step comes first.</li>
  <li><strong>The du'a after wudu</strong> — <em>Ash-hadu an laa ilaaha illallah…</em></li>
</ul>

<h2>How to play together</h2>

<ol>
  <li>Play once together, then practise right away at a real tap.</li>
  <li>Name each step as your child washes: "Now the face!"</li>
  <li>After a few times, try the ordering game — who's fastest?</li>
</ol>

<h2>Tips for parents</h2>

<ul>
  <li>Doing wudu together before Maghrib is the easiest habit to start.</li>
  <li>It doesn't need to be perfect at first; what matters is enjoying the water and saying Bismillah.</li>
  <li>Also read the picture book <a href="/_/cerita/kenapa-berwudhu-sebelum-sholat/">Why Do We Do Wudu Before Prayer?</a></li>
</ul>

<blockquote>The Prophet ﷺ said: "Whoever performs wudu and does it well, his sins leave his body, even from beneath his nails." (Muslim 245)</blockquote>

<p>After wudu, learn to pray with <a href="/_/blog/game-pray-with-mo-panduan-sholat/">Pray with Mo</a>, or read <a href="/_/blog/cara-mengajarkan-sholat-ke-anak/">how to teach children to pray</a>.</p>`,
    },
    tags: ["game", "ibadah", "wudhu", "panduan"],
    published: "2026-11-06",
    updated: "2026-11-13",
    readingTimeMin: 4,
    author: "tim-baby-mo",
  },
  {
    slug: "game-pray-with-mo-panduan-sholat",
    title: {
      id: "Pray with Mo: Panduan Sholat Interaktif untuk Anak (Gratis)",
      en: "Pray with Mo: An Interactive Prayer Guide for Kids (Free)",
    },
    excerpt: {
      id: "Belajar sholat gerakan demi gerakan — takbiratul ihram, qiyam, ruku', sujud, duduk, tasyahud, dan salam — dengan gambar, bacaan Arab, audio, waktu sholat, dan dzikir.",
      en: "Learn to pray one movement at a time — takbir, standing, ruku', sujud, sitting, tashahhud and salam — with pictures, Arabic recitation, audio, prayer times and dhikr.",
    },
    body: {
      id: `<p>Anak belajar sholat dengan meniru. Tapi kadang mereka butuh melihat setiap gerakan dengan pelan, sambil mendengar bacaannya. <strong>Pray with Mo</strong> adalah panduan sholat interaktif: Baby Mo memperagakan setiap gerakan, lengkap dengan bacaan Arab, latin, arti, dan audio.</p>

<p><a class="gmp-play" href="https://play.babymo.id/babymo-pray-with-mo.html" target="_blank" rel="noopener">▶ Main Pray with Mo sekarang</a></p>

<style>.gmp-play{display:inline-block;margin:.4em 0;padding:12px 22px;border-radius:999px;background:linear-gradient(135deg,#3FD08C,#1FA971);color:#fff!important;font-weight:800;text-decoration:none!important;box-shadow:0 8px 20px -8px rgba(31,169,113,.55);}.gmp-shot{margin:1.4em auto;max-width:300px;text-align:center}.gmp-shot img,.gmp-shot video{width:100%;height:auto;border-radius:22px;border:1px solid var(--color-hairline);box-shadow:0 16px 36px -16px rgba(0,0,0,.45);display:block}.gmp-shot figcaption{margin-top:8px;font-size:12px;color:var(--color-whisper)}</style>

<figure class="gmp-shot"><video src="/_img/games/video/id-pray-with-mo.mp4" poster="/_img/games/video/id-pray-with-mo.webp" autoplay muted loop playsinline preload="metadata" width="540" height="960" aria-label="Tampilan Pray with Mo dengan Baby Mo memperagakan gerakan sholat"></video><figcaption>Belajar sholat, gerakan demi gerakan 🕌</figcaption></figure>

<h2>Langkah demi langkah</h2>

<ol>
  <li>Takbiratul ihram</li>
  <li>Qiyam (berdiri) dan bacaan Al-Fatihah</li>
  <li>Ruku'</li>
  <li>Sujud</li>
  <li>Duduk di antara dua sujud</li>
  <li>Tasyahud dan salam</li>
</ol>

<h2>Lebih dari sekadar panduan</h2>

<ul>
  <li><strong>Waktu sholat</strong> Subuh, Dzuhur, Ashar, Maghrib, dan Isya.</li>
  <li><strong>Dzikir pemula</strong> setelah sholat.</li>
  <li><strong>Lencana "Khatam Panduan"</strong> saat semua langkah selesai dipelajari.</li>
</ul>

<h2>Cara main bersama</h2>

<ol>
  <li>Pelajari satu gerakan per hari, lalu praktikkan di atas sajadah.</li>
  <li>Putar audionya dan ulangi bacaan bersama, pelan-pelan.</li>
  <li>Setelah hafal beberapa gerakan, ajak anak sholat di samping Ayah/Bunda.</li>
</ol>

<h2>Tips untuk Ayah & Bunda</h2>

<ul>
  <li>Untuk anak kecil, ikut berdiri di saf saja sudah ibadah yang indah — jangan menuntut sempurna.</li>
  <li>Hindari memarahi gerakan yang salah; betulkan dengan lembut setelah sholat selesai.</li>
  <li>Baca panduan lengkap <a href="/_/blog/cara-mengajarkan-sholat-ke-anak/">cara mengajarkan sholat ke anak</a>.</li>
</ul>

<blockquote>Rasulullah ﷺ bersabda: "Perintahkan anak-anak kalian untuk sholat ketika berusia tujuh tahun." (HR. Abu Dawud 495)</blockquote>

<p>Mulai dengan <a href="/_/blog/game-wudhu-bareng-mo/">Wudhu Bareng Mo</a>, lalu jaga semangatnya dengan <a href="/_/blog/streak-sholat-mo-jadwal-sholat-anak/">Streak Sholat Mo</a>.</p>`,
      en: `<p>Children learn to pray by copying. But sometimes they need to see each movement slowly, while hearing what's recited. <strong>Pray with Mo</strong> is an interactive prayer guide: Baby Mo shows each movement, with the Arabic, transliteration, meaning and audio.</p>

<p><a class="gmp-play" href="https://play.babymo.id/babymo-pray-with-mo.html" target="_blank" rel="noopener">▶ Play Pray with Mo now</a></p>

<style>.gmp-play{display:inline-block;margin:.4em 0;padding:12px 22px;border-radius:999px;background:linear-gradient(135deg,#3FD08C,#1FA971);color:#fff!important;font-weight:800;text-decoration:none!important;box-shadow:0 8px 20px -8px rgba(31,169,113,.55);}.gmp-shot{margin:1.4em auto;max-width:300px;text-align:center}.gmp-shot img,.gmp-shot video{width:100%;height:auto;border-radius:22px;border:1px solid var(--color-hairline);box-shadow:0 16px 36px -16px rgba(0,0,0,.45);display:block}.gmp-shot figcaption{margin-top:8px;font-size:12px;color:var(--color-whisper)}</style>

<figure class="gmp-shot"><video src="/_img/games/video/en-pray-with-mo.mp4" poster="/_img/games/video/en-pray-with-mo.webp" autoplay muted loop playsinline preload="metadata" width="540" height="960" aria-label="Pray with Mo with Baby Mo showing a prayer movement"></video><figcaption>Learn to pray, one movement at a time 🕌</figcaption></figure>

<h2>Step by step</h2>

<ol>
  <li>Takbiratul ihram</li>
  <li>Standing (qiyam) and Al-Fatihah</li>
  <li>Ruku'</li>
  <li>Sujud</li>
  <li>Sitting between the two prostrations</li>
  <li>Tashahhud and salam</li>
</ol>

<h2>More than a guide</h2>

<ul>
  <li><strong>Prayer times</strong> for Fajr, Dhuhr, Asr, Maghrib and Isha.</li>
  <li><strong>Beginner dhikr</strong> after prayer.</li>
  <li><strong>A "Guide Completed" badge</strong> once every step is learned.</li>
</ul>

<h2>How to play together</h2>

<ol>
  <li>Learn one movement a day, then practise it on a prayer mat.</li>
  <li>Play the audio and repeat the recitation together, slowly.</li>
  <li>Once a few movements are known, invite your child to pray beside you.</li>
</ol>

<h2>Tips for parents</h2>

<ul>
  <li>For little ones, simply standing in the row is beautiful worship — don't demand perfection.</li>
  <li>Avoid scolding wrong movements; correct gently after the prayer ends.</li>
  <li>Read the full guide on <a href="/_/blog/cara-mengajarkan-sholat-ke-anak/">teaching children to pray</a>.</li>
</ul>

<blockquote>The Prophet ﷺ said: "Instruct your children to pray when they are seven years old." (Abu Dawud 495)</blockquote>

<p>Start with <a href="/_/blog/game-wudhu-bareng-mo/">Wudu with Mo</a>, then keep the habit going with <a href="/_/blog/streak-sholat-mo-jadwal-sholat-anak/">Prayer Streak with Mo</a>.</p>`,
    },
    tags: ["game", "ibadah", "sholat", "panduan"],
    published: "2026-11-06",
    updated: "2026-11-13",
    readingTimeMin: 4,
    author: "tim-baby-mo",
  },
  {
    slug: "streak-sholat-mo-jadwal-sholat-anak",
    title: {
      id: "Streak Sholat Mo: Jadwal Sholat, Kiblat, dan Streak Harian untuk Anak (Gratis)",
      en: "Prayer Streak with Mo: Prayer Times, Qibla and a Daily Streak for Kids (Free)",
    },
    excerpt: {
      id: "Jadwal sholat sesuai kotamu, arah kiblat, kalender hijriah, dan streak harian yang merayakan setiap sholat yang dijaga — cara seru membiasakan sholat 5 waktu.",
      en: "Prayer times for your city, the qibla direction, a Hijri calendar and a daily streak that celebrates every prayer kept — a fun way to build the five-prayer habit.",
    },
    body: {
      id: `<p>Belajar gerakan sholat itu satu hal. <em>Menjaganya setiap hari</em> adalah tantangan berikutnya. <strong>Streak Sholat Mo</strong> membantu anak (dan orang tua!) melihat perjalanan sholatnya: setiap sholat yang dijaga dicentang, dan api streak terus menyala hari demi hari.</p>

<p><a class="gmp-play" href="https://play.babymo.id/babymo-companion/" target="_blank" rel="noopener">▶ Buka Streak Sholat Mo sekarang</a></p>

<style>.gmp-play{display:inline-block;margin:.4em 0;padding:12px 22px;border-radius:999px;background:linear-gradient(135deg,#3FD08C,#1FA971);color:#fff!important;font-weight:800;text-decoration:none!important;box-shadow:0 8px 20px -8px rgba(31,169,113,.55);}.gmp-shot{margin:1.4em auto;max-width:300px;text-align:center}.gmp-shot img,.gmp-shot video{width:100%;height:auto;border-radius:22px;border:1px solid var(--color-hairline);box-shadow:0 16px 36px -16px rgba(0,0,0,.45);display:block}.gmp-shot figcaption{margin-top:8px;font-size:12px;color:var(--color-whisper)}</style>

<figure class="gmp-shot"><video src="/_img/games/video/id-streak-sholat-mo.mp4" poster="/_img/games/video/id-streak-sholat-mo.webp" autoplay muted loop playsinline preload="metadata" width="540" height="960" aria-label="Tampilan Streak Sholat Mo dengan jadwal sholat dan streak harian"></video><figcaption>Jaga semangat sholat 5 waktu 🔥</figcaption></figure>

<h2>Isinya</h2>

<ul>
  <li><strong>Jadwal sholat</strong> sesuai kotamu.</li>
  <li><strong>Arah kiblat</strong> — anak bisa ikut mencari arah sebelum sholat.</li>
  <li><strong>Kalender hijriah</strong> untuk mengenal bulan-bulan Islam.</li>
  <li><strong>Streak harian</strong> yang merayakan setiap sholat yang dijaga.</li>
</ul>

<h2>Kenapa streak membantu?</h2>

<p>Anak suka melihat kemajuan. Satu centang kecil setelah sholat memberi rasa "aku berhasil", dan streak yang terus bertambah membuat mereka ingin menjaganya. Yang penting: streak adalah penyemangat, bukan alat menghukum.</p>

<h2>Cara memakainya bersama</h2>

<ol>
  <li>Setelah sholat, biarkan anak sendiri yang mencentang.</li>
  <li>Rayakan hari ke-3, ke-7, dan ke-30 dengan pelukan atau cerita favorit.</li>
  <li>Kalau streak putus, mulai lagi tanpa drama: "Besok kita mulai lagi, ya."</li>
</ol>

<h2>Tips untuk Ayah & Bunda</h2>

<ul>
  <li>Mulai dari satu waktu yang paling mudah, misalnya Maghrib bersama.</li>
  <li>Untuk anak di bawah 7 tahun, ini latihan pembiasaan — bukan kewajiban.</li>
  <li>Lengkapi dengan <a href="/_/blog/game-pray-with-mo-panduan-sholat/">Pray with Mo</a> untuk belajar gerakannya.</li>
</ul>

<blockquote>Rasulullah ﷺ bersabda: "Amalan yang paling dicintai Allah adalah yang paling rutin, walaupun sedikit." (HR. Bukhari 6464, Muslim 783)</blockquote>

<p>Baca juga <a href="/_/blog/kebiasaan-kecil-yang-tumbuh-besar/">kebiasaan kecil yang tumbuh besar</a> dan <a href="/_/blog/mengajak-anak-ke-masjid/">mengajak anak ke masjid</a>.</p>`,
      en: `<p>Learning the movements of prayer is one thing. <em>Keeping it every day</em> is the next challenge. <strong>Prayer Streak with Mo</strong> helps children (and parents!) see their prayer journey: every prayer kept gets a tick, and the streak flame keeps burning day after day.</p>

<p><a class="gmp-play" href="https://play.babymo.id/babymo-companion/" target="_blank" rel="noopener">▶ Open Prayer Streak with Mo now</a></p>

<style>.gmp-play{display:inline-block;margin:.4em 0;padding:12px 22px;border-radius:999px;background:linear-gradient(135deg,#3FD08C,#1FA971);color:#fff!important;font-weight:800;text-decoration:none!important;box-shadow:0 8px 20px -8px rgba(31,169,113,.55);}.gmp-shot{margin:1.4em auto;max-width:300px;text-align:center}.gmp-shot img,.gmp-shot video{width:100%;height:auto;border-radius:22px;border:1px solid var(--color-hairline);box-shadow:0 16px 36px -16px rgba(0,0,0,.45);display:block}.gmp-shot figcaption{margin-top:8px;font-size:12px;color:var(--color-whisper)}</style>

<figure class="gmp-shot"><video src="/_img/games/video/en-streak-sholat-mo.mp4" poster="/_img/games/video/en-streak-sholat-mo.webp" autoplay muted loop playsinline preload="metadata" width="540" height="960" aria-label="Prayer Streak with Mo with prayer times and a daily streak"></video><figcaption>Keep the five prayers going 🔥</figcaption></figure>

<h2>What's inside</h2>

<ul>
  <li><strong>Prayer times</strong> for your city.</li>
  <li><strong>The qibla direction</strong> — children can help find it before praying.</li>
  <li><strong>A Hijri calendar</strong> to get to know the Islamic months.</li>
  <li><strong>A daily streak</strong> that celebrates every prayer kept.</li>
</ul>

<h2>Why a streak helps</h2>

<p>Children love to see progress. A small tick after prayer gives a sense of "I did it", and a growing streak makes them want to keep it going. What matters: a streak is encouragement, not a tool for punishment.</p>

<h2>How to use it together</h2>

<ol>
  <li>After praying, let your child tick it themselves.</li>
  <li>Celebrate day 3, day 7 and day 30 with a hug or a favourite story.</li>
  <li>If the streak breaks, start again without drama: "We'll begin again tomorrow."</li>
</ol>

<h2>Tips for parents</h2>

<ul>
  <li>Start with the easiest prayer, such as Maghrib together.</li>
  <li>For children under 7 this is gentle habit-building — not an obligation.</li>
  <li>Pair it with <a href="/_/blog/game-pray-with-mo-panduan-sholat/">Pray with Mo</a> to learn the movements.</li>
</ul>

<blockquote>The Prophet ﷺ said: "The most beloved deeds to Allah are the most consistent ones, even if small." (Bukhari 6464, Muslim 783)</blockquote>

<p>Also read <a href="/_/blog/kebiasaan-kecil-yang-tumbuh-besar/">small habits that grow big</a> and <a href="/_/blog/mengajak-anak-ke-masjid/">taking children to the masjid</a>.</p>`,
    },
    tags: ["game", "ibadah", "sholat", "rutinitas"],
    published: "2026-11-06",
    updated: "2026-11-13",
    readingTimeMin: 4,
    author: "tim-baby-mo",
  },
  {
    slug: "persiapan-ramadan-untuk-anak",
    title: {
      id: "Persiapan Ramadan untuk Anak: Mulai dari Sekarang",
      en: "Preparing Your Child for Ramadan: Start Now",
    },
    excerpt: {
      id: "Ramadan masih terasa jauh — dan justru itulah waktu terbaik untuk mulai. Anak yang disiapkan sejak jauh hari menyambut Ramadan dengan rindu, bukan sebagai beban yang tiba-tiba. Panduan bertahap dari tiga bulan sebelum sampai malam pertama.",
      en: "Ramadan still feels far away — which is exactly why now is the best time to start. A child prepared early greets Ramadan with longing, not as a burden that lands overnight. A phased guide from three months out to the first night.",
    },
    body: {
      id: `<p>Setiap tahun, cerita yang sama terulang: Ramadan datang, dan keluarga baru sibuk "menyiapkan" anak di H-3. Rutinitas berubah mendadak, anak kaget, dan bulan yang seharusnya dirindukan justru terasa melelahkan. Padahal anak kecil tidak butuh persiapan yang berat — mereka butuh <em>waktu</em> untuk menanti.</p>

<p>Kabar baiknya: kita masih punya beberapa bulan. Dan beberapa bulan adalah hadiah. Berikut panduan bertahap menyiapkan anak menyambut Ramadan — satu lapis setiap bulan, tanpa paksaan.</p>

<blockquote>Rasulullah ﷺ paling banyak berpuasa sunnah di bulan Sya'ban — bulan tepat sebelum Ramadan. Beliau mengajarkan kita bahwa Ramadan disiapkan dari jauh, bukan dimulai dari nol di malam pertama.</blockquote>

<h2>Tiga bulan sebelum (sekarang): tanam rasa rindu</h2>

<p>Tujuan fase ini bukan ibadah, tapi <strong>emosi</strong>. Anak harus mulai mengasosiasikan kata "Ramadan" dengan sesuatu yang hangat dan ditunggu.</p>

<ul>
  <li><strong>Sebut Ramadan dalam percakapan santai.</strong> "Sebentar lagi ada bulan istimewa, namanya Ramadan. Bulan yang paling disayang Allah." Tidak perlu ceramah — cukup ditanam.</li>
  <li><strong>Ceritakan kenangan Ramadanmu sendiri</strong> saat kecil: sahur bareng, suara beduk, ketupat. Anak menyerap kehangatan dari suaramu.</li>
  <li><strong>Mulai kebiasaan kecil yang akan berlanjut</strong> — satu doa harian, atau membaca satu surat pendek sebelum tidur. Lihat <a href="/_/blog/doa-harian-anak-sebelum-usia-7/">doa harian yang perlu anak kenal</a>.</li>
</ul>

<h2>Dua bulan sebelum — Rajab: mulai ritme</h2>

<p>Rajab adalah bulan haram dan "bulan pembuka" menuju Ramadan. Orang dahulu berkata: <em>Rajab menanam, Sya'ban menyirami, Ramadan memanen.</em></p>

<ul>
  <li><strong>Mulai hitung mundur.</strong> "Dua bulan lagi Ramadan, lho!" Anak jadi menanti, bukan kaget.</li>
  <li><strong>Ajarkan doa Rajab yang singkat:</strong> "Allahumma baarik lanaa fii Rajab wa Sya'baan, wa ballighnaa Ramadhaan." Mudah dihafal, dibaca tiap pagi.</li>
  <li><strong>Pilih satu "proyek kebaikan"</strong> — sedekah seribu tiap hari ke celengan, atau rutin sholat Subuh. Selengkapnya: <a href="/_/blog/rajab-bulan-haram-bersama-anak/">bulan Rajab bersama anak</a>.</li>
</ul>

<h2>Satu bulan sebelum — Sya'ban: latihan</h2>

<p>Inilah fase latihan yang sesungguhnya. Tujuannya: saat Ramadan tiba, tubuh dan hati anak sudah terbiasa.</p>

<ul>
  <li><strong>Latihan puasa setengah hari</strong> untuk anak 7 tahun ke atas — dari sahur sampai Dzuhur. Bukan kewajiban, tapi latihan yang terbukti membuat puasa pertama Ramadan terasa ringan.</li>
  <li><strong>Mulai jadwal mengaji bersama</strong> sekarang, supaya saat Ramadan rutinitasnya sudah jalan — bukan dimulai dari nol.</li>
  <li><strong>Beres-beres rumah dan hati:</strong> rapikan kamar, saling memaafkan. "Sebentar lagi Ramadan, kita siapkan rumah dan hati yang bersih." Selengkapnya: <a href="/_/blog/syaban-menyiapkan-hati-menuju-ramadan/">bulan Sya'ban menyiapkan hati</a>.</li>
</ul>

<h2>Minggu terakhir: bangun suasana</h2>

<ul>
  <li><strong>Hitung mundur visual</strong> — tempel kalender Ramadan di kulkas, anak mencoret satu kotak setiap pagi.</li>
  <li><strong>Satu dekorasi baru</strong> — lampu bulan-bintang, taplak baru. Anak menyerap bahwa bulan ini berbeda sebelum kata-kata.</li>
  <li><strong>Ceritakan apa yang akan berubah</strong> — sahur subuh-subuh, buka sore, banyak doa, banyak tamu. Anak yang tahu apa yang datang jauh lebih kooperatif.</li>
</ul>

<h2>Panduan singkat per usia</h2>

<ul>
  <li><strong>Usia 0–3:</strong> cukup hadir di suasana. Tidak perlu puasa, tidak perlu diajarkan apa pun secara formal. Yang mereka serap: nada rumah.</li>
  <li><strong>Usia 4–6:</strong> sahur opsional, puasa setengah hari sebagai "pencapaian", satu doa baru per minggu.</li>
  <li><strong>Usia 7–10:</strong> mulai puasa setengah hari di Sya'ban, penuh hari adalah tahap lanjut — hormati ketika anak menyerah.</li>
</ul>

<h2>Yang harus dihindari</h2>

<p>Memaksa puasa penuh terlalu dini. Membandingkan dengan anak lain. Marah karena anak lapar. Menjadikan Ramadan tentang target, bukan tentang rasa. <a href="/_/blog/saat-orang-tua-marah-ke-anak/">Marah justru menanam perlawanan jangka panjang</a>.</p>

<h2>Penutup</h2>

<p>Ramadan tahun ini tidak harus sempurna. Anak tidak harus puasa penuh atau hafal semua doa. Yang anak butuhkan: orang tua yang hadir, rumah yang terasa berbeda, dan pesan diam-diam bahwa bulan ini adalah bulan yang dirindukan. Panduan lengkap saat Ramadan tiba: <a href="/_/blog/ramadan-bersama-anak/">Ramadan bersama anak</a>.</p>`,
      en: `<p>Every year, the same story repeats: Ramadan arrives, and families scramble to "prepare" the child three days out. Routines change overnight, the child is startled, and a month that should be longed for feels exhausting instead. Yet young children don't need heavy preparation — they need <em>time</em> to anticipate.</p>

<p>The good news: we still have a few months. And a few months is a gift. Here's a phased guide to preparing your child for Ramadan — one layer each month, without force.</p>

<blockquote>The Prophet ﷺ fasted the most voluntary days in Sha'ban — the month just before Ramadan. He taught us that Ramadan is prepared from afar, not begun from zero on the first night.</blockquote>

<h2>Three months out (now): plant the longing</h2>

<p>The goal of this phase isn't worship — it's <strong>emotion</strong>. The child should begin to associate the word "Ramadan" with something warm and awaited.</p>

<ul>
  <li><strong>Mention Ramadan in casual talk.</strong> "Soon there's a special month called Ramadan — the month Allah loves most." No lecture needed — just plant it.</li>
  <li><strong>Tell your own childhood Ramadan memories</strong>: sahur together, the drum at dawn, the festive food. The child absorbs the warmth in your voice.</li>
  <li><strong>Start one small habit that will continue</strong> — a daily du'a, or one short surah before bed. See <a href="/_/blog/doa-harian-anak-sebelum-usia-7/">the daily du'as a child should know</a>.</li>
</ul>

<h2>Two months out — Rajab: begin the rhythm</h2>

<p>Rajab is a sacred month and the "opening month" toward Ramadan. The elders said: <em>Rajab plants, Sha'ban waters, Ramadan harvests.</em></p>

<ul>
  <li><strong>Start the countdown.</strong> "Two months to Ramadan!" The child anticipates instead of being caught off guard.</li>
  <li><strong>Teach the short Rajab du'a:</strong> "Allahumma barik lana fi Rajab wa Sha'ban, wa ballighna Ramadan." Easy to memorize, said each morning.</li>
  <li><strong>Pick one "good-deed project"</strong> — a daily coin of charity, or consistent Fajr prayer. More: <a href="/_/blog/rajab-bulan-haram-bersama-anak/">the month of Rajab with kids</a>.</li>
</ul>

<h2>One month out — Sha'ban: practice</h2>

<p>This is the real practice phase. The goal: by the time Ramadan arrives, the child's body and heart are already used to it.</p>

<ul>
  <li><strong>Half-day fasting practice</strong> for ages 7+ — from sahur to Dhuhr. Not an obligation, but practice that proves to make the first Ramadan fast feel light.</li>
  <li><strong>Start a Qur'an schedule now</strong>, so that by Ramadan the routine is already running — not starting from zero.</li>
  <li><strong>Tidy the home and the heart:</strong> organize the room, forgive one another. "Ramadan's near — let's ready a clean home and heart." More: <a href="/_/blog/syaban-menyiapkan-hati-menuju-ramadan/">the month of Sha'ban</a>.</li>
</ul>

<h2>The final week: build the atmosphere</h2>

<ul>
  <li><strong>A visual countdown</strong> — a Ramadan calendar on the fridge, the child crossing off a box each morning.</li>
  <li><strong>One new decoration</strong> — moon-and-star lights, a new tablecloth. The child feels the month is different before any words.</li>
  <li><strong>Tell them what will change</strong> — early sahur, evening iftar, more du'a, more guests. A child who knows what's coming is far more cooperative.</li>
</ul>

<h2>A quick age guide</h2>

<ul>
  <li><strong>Ages 0–3:</strong> just be present in the atmosphere. No fasting, nothing formal. What they absorb is the home's tone.</li>
  <li><strong>Ages 4–6:</strong> optional sahur, a half-day fast as an "achievement," one new du'a per week.</li>
  <li><strong>Ages 7–10:</strong> start half-day fasts in Sha'ban; full days are a later milestone — respect it when they give up.</li>
</ul>

<h2>What to avoid</h2>

<p>Forcing a full fast too early. Comparing to other children. Anger when the child is hungry. Making Ramadan about targets instead of feeling. <a href="/_/blog/saat-orang-tua-marah-ke-anak/">Anger plants long-term resistance</a>.</p>

<h2>Closing</h2>

<p>This Ramadan doesn't have to be perfect. The child doesn't have to complete every fast or memorize every du'a. What they need: present parents, a home that feels different, and the quiet message that this month is one to long for. The full guide once Ramadan begins: <a href="/_/blog/ramadan-bersama-anak/">Ramadan with your child</a>.</p>`,
    },
    tags: ["ramadan", "persiapan-ramadan", "puasa", "parenting", "ibadah-musiman"],
    published: "2026-11-01",
    updated: "2026-11-01",
    readingTimeMin: 8,
    author: "tim-baby-mo",
    faq: [
      {
        question: {
          id: "Kapan sebaiknya mulai menyiapkan anak untuk Ramadan?",
          en: "When should I start preparing my child for Ramadan?",
        },
        answer: {
          id: "Sejak <strong>beberapa bulan sebelumnya</strong>, bukan H-3. Anak kecil butuh waktu untuk <em>menanti</em>, bukan perubahan rutinitas yang mendadak. Mulai dari menanam rasa rindu (3 bulan sebelum), membangun ritme di bulan Rajab (2 bulan sebelum), lalu latihan nyata di bulan Sya'ban (1 bulan sebelum).",
          en: "From <strong>a few months out</strong>, not three days before. Young children need time to <em>anticipate</em>, not an abrupt routine change. Begin by planting longing (3 months out), building rhythm in Rajab (2 months out), then real practice in Sha'ban (1 month out).",
        },
      },
      {
        question: {
          id: "Apakah anak kecil wajib puasa Ramadan?",
          en: "Are young children required to fast in Ramadan?",
        },
        answer: {
          id: "Tidak. Anak yang <strong>belum baligh tidak diwajibkan puasa</strong>. Latihan puasa setengah hari (sahur sampai Dzuhur) untuk anak 7 tahun ke atas adalah sunnah pembiasaan — latihan, bukan kewajiban atau ujian.",
          en: "No. A child <strong>before puberty is not obligated to fast</strong>. A half-day fast (sahur to Dhuhr) for ages 7+ is habit-building practice — training, not an obligation or a test.",
        },
      },
      {
        question: {
          id: "Bagaimana melatih anak puasa sebelum Ramadan?",
          en: "How do I train my child to fast before Ramadan?",
        },
        answer: {
          id: "Manfaatkan <strong>bulan Sya'ban</strong> (satu bulan sebelum Ramadan). Ajak anak 7+ mencoba puasa setengah hari — bangunkan sahur dengan makanan yang ia suka, sediakan aktivitas agar lupa lapar, dan beri makanan favorit saat berbuka. Hormati ketika ia menyerah; yang penting mau coba lagi.",
          en: "Use <strong>Sha'ban</strong> (the month before Ramadan). Have ages 7+ try a half-day fast — wake them for sahur with food they like, offer activities to distract from hunger, and serve a favorite at iftar. Respect it when they give up; what matters is willingness to try again.",
        },
      },
      {
        question: {
          id: "Bagaimana membuat anak menanti Ramadan, bukan takut?",
          en: "How do I make my child look forward to Ramadan, not dread it?",
        },
        answer: {
          id: "Fokus pada <strong>suasana dan emosi</strong>, bukan target. Ceritakan kenangan Ramadanmu, buat hitung mundur visual di kulkas, tambahkan satu dekorasi baru, dan hindari memaksa atau membandingkan. Anak yang Ramadannya hangat dan ditunggu akan membawa hubungan positif dengan ibadah seumur hidup.",
          en: "Focus on <strong>atmosphere and emotion</strong>, not targets. Share your Ramadan memories, make a visual countdown on the fridge, add one new decoration, and avoid forcing or comparing. A child whose Ramadan feels warm and awaited carries a positive relationship with worship for life.",
        },
      },
    ],
    kit: {
      quote: {
        id: "Anak kecil tidak butuh persiapan Ramadan yang berat — mereka butuh waktu untuk menanti. Mulai dari sekarang: tanam rasa rindu di hati, dan Ramadan akan datang sebagai tamu yang dirindukan, bukan beban yang tiba-tiba.",
        en: "Young children don't need heavy Ramadan preparation — they need time to anticipate. Start now: plant the longing in their heart, and Ramadan will arrive as a cherished guest, not a sudden burden.",
      },
      carousel: {
        id: [
          { title: "Persiapan Ramadan untuk Anak — 1/6", body: "Jangan tunggu H-3. Anak yang disiapkan sejak jauh hari menyambut Ramadan dengan rindu, bukan beban. Kita masih punya beberapa bulan — itu hadiah." },
          { title: "3 bulan sebelum: tanam rasa rindu", body: "Sebut Ramadan dalam obrolan santai. Ceritakan kenangan Ramadanmu. Mulai satu kebiasaan kecil: satu doa harian." },
          { title: "2 bulan (Rajab): mulai ritme", body: "Mulai hitung mundur. Ajarkan doa Rajab singkat. Pilih satu 'proyek kebaikan' — sedekah harian atau sholat Subuh." },
          { title: "1 bulan (Sya'ban): latihan", body: "Anak 7+ coba puasa setengah hari. Mulai jadwal mengaji. Beres-beres rumah & hati bareng anak." },
          { title: "Minggu terakhir: suasana", body: "Hitung mundur visual di kulkas. Satu dekorasi baru. Ceritakan apa yang akan berubah — sahur, buka, banyak doa." },
          { title: "Hindari ini", body: "Memaksa puasa penuh terlalu dini. Membandingkan anak. Marah karena lapar. Jadikan Ramadan soal rasa, bukan target. Simpan & bagikan." },
        ],
        en: [
          { title: "Preparing Kids for Ramadan — 1/6", body: "Don't wait until 3 days out. A child prepared early greets Ramadan with longing, not dread. We still have a few months — that's a gift." },
          { title: "3 months out: plant the longing", body: "Mention Ramadan in casual talk. Share your Ramadan memories. Start one small habit: a daily du'a." },
          { title: "2 months (Rajab): begin the rhythm", body: "Start the countdown. Teach the short Rajab du'a. Pick one 'good-deed project' — daily charity or Fajr prayer." },
          { title: "1 month (Sha'ban): practice", body: "Ages 7+ try a half-day fast. Start a Qur'an schedule. Tidy the home & heart with your child." },
          { title: "Final week: atmosphere", body: "A visual countdown on the fridge. One new decoration. Tell them what changes — sahur, iftar, more du'a." },
          { title: "Avoid these", body: "Forcing a full fast too early. Comparing kids. Anger from hunger. Make Ramadan about feeling, not targets. Save & share." },
        ],
      },
      shortScript: {
        id: `[0–3 detik] HOOK: Jangan tunggu H-3 Ramadan untuk "menyiapkan" anak. Mulai dari sekarang.

[3–15 detik] MASALAH: Setiap tahun keluarga baru sibuk di H-3. Rutinitas berubah mendadak, anak kaget, dan Ramadan terasa melelahkan, bukan dirindukan.

[15–35 detik] SOLUSI: Bertahap. 3 bulan sebelum: tanam rasa rindu lewat cerita. 2 bulan (Rajab): mulai hitung mundur & doa singkat. 1 bulan (Sya'ban): latihan puasa setengah hari untuk anak 7+.

[35–55 detik] BUKTI: Rasulullah ﷺ paling banyak puasa sunnah di Sya'ban — Ramadan disiapkan dari jauh, bukan dari nol di malam pertama.

[55–60 detik] CTA: "Simpan panduan bertahap ini & mulai dari obrolan santai hari ini."`,
        en: `[0–3s] HOOK: Don't wait until 3 days before Ramadan to "prepare" your child. Start now.

[3–15s] PROBLEM: Every year families scramble 3 days out. Routines change overnight, the child is startled, and Ramadan feels exhausting instead of longed for.

[15–35s] SOLUTION: Go in phases. 3 months out: plant longing through stories. 2 months (Rajab): start the countdown & a short du'a. 1 month (Sha'ban): half-day fasting practice for ages 7+.

[35–55s] PROOF: The Prophet ﷺ fasted most in Sha'ban — Ramadan is prepared from afar, not from zero on the first night.

[55–60s] CTA: "Save this phased guide & start with a casual chat today."`,
      },
      pin: {
        id: {
          title: "Persiapan Ramadan untuk Anak: Panduan Bertahap dari Sekarang",
          description: "Cara menyiapkan anak menyambut Ramadan sejak jauh hari — fase 3 bulan, 2 bulan (Rajab), 1 bulan (Sya'ban), dan minggu terakhir. Tanpa memaksa. Untuk keluarga muslim.",
        },
        en: {
          title: "Preparing Kids for Ramadan: A Phased Guide, Starting Now",
          description: "How to ready your child for Ramadan months ahead — the 3-month, 2-month (Rajab), 1-month (Sha'ban), and final-week phases. Without forcing. For Muslim families.",
        },
      },
      checklist: {
        id: [
          "3 bulan sebelum: sebut Ramadan dalam obrolan santai",
          "Ceritakan kenangan Ramadan masa kecilmu",
          "Mulai satu kebiasaan kecil (satu doa harian)",
          "Rajab: mulai hitung mundur Ramadan",
          "Ajarkan doa Rajab singkat tiap pagi",
          "Pilih satu 'proyek kebaikan' harian",
          "Sya'ban: latihan puasa setengah hari (anak 7+)",
          "Mulai jadwal mengaji bersama",
          "Minggu terakhir: hitung mundur visual + satu dekorasi baru",
          "Hindari memaksa puasa penuh & membandingkan anak",
        ],
        en: [
          "3 months out: mention Ramadan in casual talk",
          "Share your own childhood Ramadan memories",
          "Start one small habit (a daily du'a)",
          "Rajab: start the Ramadan countdown",
          "Teach the short Rajab du'a each morning",
          "Pick one daily 'good-deed project'",
          "Sha'ban: half-day fasting practice (ages 7+)",
          "Start a shared Qur'an schedule",
          "Final week: a visual countdown + one new decoration",
          "Avoid forcing a full fast & comparing children",
        ],
      },
    },
  },
  {
    slug: "generator-aktivitas-anak-gratis",
    title: {
      id: "Generator Lembar Aktivitas Anak Gratis: Buat & Cetak dalam Hitungan Detik",
      en: "Free Kids Activity Worksheet Generator: Make & Print in Seconds",
    },
    excerpt: {
      id: "Buat lembar kerja anak siap cetak — labirin, mewarnai, menjiplak, cari kata, sambung titik, dan banyak lagi. Pilih tema & usia, klik buat, lalu cetak. Gratis, tanpa daftar.",
      en: "Make printable kids worksheets — mazes, coloring, tracing, word search, dot-to-dot, and more. Pick a theme & age, click generate, then print. Free, no sign-up.",
    },
    body: {
      id: `<p>Butuh kegiatan cepat untuk si kecil — tanpa harus beli buku aktivitas atau berlangganan apa pun? <strong>Generator Lembar Aktivitas Anak</strong> dari Baby Mo membuat lembar kerja siap cetak hanya dalam hitungan detik. Pilih tema, tentukan usia, pilih jenis aktivitas, klik <em>Buat</em> — selesai.</p>

<figure class="actg-hero">
  <img src="/_img/blog/activity-pack.jpg" alt="Generator Lembar Aktivitas Anak Baby Mo menampilkan paket lembar kerja tema Luar Angkasa untuk usia 5–6" width="2360" height="2000" loading="lazy">
  <figcaption>Pilih di kiri, paket lembar kerja langsung muncul di kanan — siap diunduh PDF atau dicetak.</figcaption>
</figure>

<p><a class="actg-cta" href="/_/apps/kids-activity/">✨ Buka Generator Aktivitas Anak</a></p>

<h2>Kenapa orang tua menyukainya</h2>
<ul>
  <li><strong>Gratis &amp; tanpa daftar.</strong> Tidak ada biaya, akun, atau batas jumlah lembar.</li>
  <li><strong>Berjalan di peramban.</strong> Tidak perlu mengunduh aplikasi; data tidak dikirim ke mana-mana.</li>
  <li><strong>Siap cetak.</strong> Unduh satu paket PDF, simpan per lembar (PDF/SVG), atau cetak langsung.</li>
  <li><strong>Sesuai usia.</strong> Tiga tingkat — 3–4, 5–6, dan 7–8 — yang menyesuaikan tingkat kesulitan.</li>
</ul>

<h2>9 jenis aktivitas dalam satu tempat</h2>
<p>🌀 Labirin · ✏️ Menjiplak · 🎨 Mewarnai · 🔗 Mencocokkan · 🧩 Puzzle · 🔎 Cari Kata · 🔢 Hitung &amp; Tulis · ➡️ Lanjutkan Pola · 🔵 Sambung Titik. Tersedia 8 tema: Dinosaurus, Luar Angkasa, Hewan, Putri, Kendaraan, Alfabet, Ramadan, dan Laut.</p>

<div class="actg-2">
  <figure>
    <img src="/_img/blog/activity-picker.jpg" alt="Panel pilihan: tema, usia, dan jenis aktivitas" width="680" height="1578" loading="lazy">
    <figcaption>Pilih tema, usia, dan centang aktivitasnya.</figcaption>
  </figure>
  <figure>
    <img src="/_img/blog/activity-sample.jpg" alt="Contoh lembar menjiplak tema Luar Angkasa: kata MOON dan COMET" width="704" height="1138" loading="lazy">
    <figcaption>Contoh hasil: lembar menjiplak tema Luar Angkasa, lengkap kolom nama &amp; tanggal.</figcaption>
  </figure>
</div>

<h2>Ide pemakaian sehari-hari</h2>
<ul>
  <li><strong>Hari hujan di rumah.</strong> Cetak paket labirin + mewarnai, anak sibuk berkreasi tanpa layar.</li>
  <li><strong>Menunggu di restoran.</strong> Bawa satu lembar cari kata atau sambung titik di tas — penyelamat saat menunggu makanan.</li>
  <li><strong>Perjalanan &amp; <a href="/_/blog/liburan-sekolah-keluarga-muslim/">liburan sekolah</a>.</strong> Siapkan beberapa lembar untuk dikerjakan di mobil atau penginapan.</li>
  <li><strong>Belajar di rumah (homeschool).</strong> Campur menjiplak huruf, berhitung, dan pola jadi satu paket latihan harian.</li>
  <li><strong>Untuk guru.</strong> Atur 1–10 lembar per aktivitas untuk seisi kelas dalam sekali buat.</li>
  <li><strong>Momen islami.</strong> Pilih tema <strong>Ramadan</strong> untuk lembar bertema yang terasa spesial.</li>
</ul>

<h2>Cara kerjanya — 3 langkah</h2>
<ol>
  <li><strong>Pilih tema &amp; usia.</strong> Delapan tema, tiga tingkat usia.</li>
  <li><strong>Pilih aktivitas.</strong> Centang satu atau lebih, atur berapa lembar tiap aktivitas.</li>
  <li><strong>Buat &amp; cetak.</strong> Klik Buat, lalu unduh PDF, simpan SVG, atau cetak.</li>
</ol>

<p>Lengkapi juga dengan <a href="/_/permainan/">permainan Baby Mo</a> yang lain — semuanya gratis dan ramah anak. <a class="actg-cta" href="/_/apps/kids-activity/">✨ Coba sekarang</a></p>

<style>
.actg-hero{margin:1.3em 0;}
.actg-hero img{width:100%;height:auto;border-radius:18px;border:1px solid var(--color-hairline);box-shadow:0 16px 34px -18px rgba(0,0,0,.4);display:block;}
.actg-hero figcaption,.actg-2 figcaption{margin-top:8px;font-size:12px;color:var(--color-whisper);text-align:center;line-height:1.4;}
.actg-2{display:grid;grid-template-columns:1fr 1fr;gap:14px;margin:1.3em 0;align-items:start;}
.actg-2 figure{margin:0;}
.actg-2 img{width:100%;height:auto;border-radius:16px;border:1px solid var(--color-hairline);box-shadow:0 12px 28px -16px rgba(0,0,0,.4);display:block;}
.actg-cta{display:inline-block;margin:.4em 0;padding:12px 22px;border-radius:999px;background:linear-gradient(135deg,#5BB0F0,#2F7FD8);color:#fff!important;font-weight:800;text-decoration:none!important;box-shadow:0 8px 20px -8px rgba(47,127,216,.6);}
@media(max-width:520px){.actg-2{grid-template-columns:1fr;}}
</style>`,
      en: `<p>Need a quick activity for your little one — without buying an activity book or subscribing to anything? Baby Mo's <strong>Kids Activity Worksheet Generator</strong> makes printable worksheets in seconds. Pick a theme, choose an age, select the activity types, hit <em>Generate</em> — done.</p>

<figure class="actg-hero">
  <img src="/_img/blog/activity-pack.jpg" alt="Baby Mo Kids Activity Generator showing a Space-themed worksheet pack for ages 5–6" width="2360" height="2000" loading="lazy">
  <figcaption>Choose on the left, the worksheet pack appears on the right — ready to download as PDF or print.</figcaption>
</figure>

<p><a class="actg-cta" href="/_/apps/kids-activity/">✨ Open the Kids Activity Generator</a></p>

<h2>Why parents love it</h2>
<ul>
  <li><strong>Free &amp; no sign-up.</strong> No cost, no account, no limit on how many sheets you make.</li>
  <li><strong>Runs in your browser.</strong> Nothing to install; no data sent anywhere.</li>
  <li><strong>Print-ready.</strong> Download a single PDF pack, save per sheet (PDF/SVG), or print directly.</li>
  <li><strong>Age-appropriate.</strong> Three levels — 3–4, 5–6, and 7–8 — that adjust the difficulty.</li>
</ul>

<h2>9 activity types in one place</h2>
<p>🌀 Mazes · ✏️ Tracing · 🎨 Coloring · 🔗 Matching · 🧩 Puzzles · 🔎 Word Search · 🔢 Count &amp; Write · ➡️ What Comes Next · 🔵 Dot-to-Dot. Eight themes: Dinosaurs, Space, Animals, Princess, Vehicles, Alphabet, Ramadan, and Ocean.</p>

<div class="actg-2">
  <figure>
    <img src="/_img/blog/activity-picker.jpg" alt="Picker panel: theme, age, and activity types" width="680" height="1578" loading="lazy">
    <figcaption>Pick a theme, an age, and tick the activities.</figcaption>
  </figure>
  <figure>
    <img src="/_img/blog/activity-sample.jpg" alt="Sample Space-themed tracing sheet with the words MOON and COMET" width="704" height="1138" loading="lazy">
    <figcaption>A real result: a Space-themed tracing sheet with name &amp; date fields.</figcaption>
  </figure>
</div>

<h2>Real, everyday use cases</h2>
<ul>
  <li><strong>Rainy day at home.</strong> Print a maze + coloring pack and your child is happily busy, screen-free.</li>
  <li><strong>Waiting at a restaurant.</strong> Keep a word search or dot-to-dot in your bag — a lifesaver while food arrives.</li>
  <li><strong>Travel &amp; <a href="/_/blog/liburan-sekolah-keluarga-muslim/">school holidays</a>.</strong> Prep a few sheets to do in the car or at the hotel.</li>
  <li><strong>Homeschooling.</strong> Mix letter tracing, counting, and patterns into one daily practice pack.</li>
  <li><strong>For teachers.</strong> Set 1–10 sheets per activity to cover a whole class in one go.</li>
  <li><strong>Islamic moments.</strong> Choose the <strong>Ramadan</strong> theme for sheets that feel special.</li>
</ul>

<h2>How it works — 3 steps</h2>
<ol>
  <li><strong>Pick a theme &amp; age.</strong> Eight themes, three age levels.</li>
  <li><strong>Choose activities.</strong> Tick one or more, set how many sheets each.</li>
  <li><strong>Generate &amp; print.</strong> Hit Generate, then download PDF, save SVG, or print.</li>
</ol>

<p>Round it out with the other <a href="/_/permainan/">Baby Mo games</a> — all free and kid-friendly. <a class="actg-cta" href="/_/apps/kids-activity/">✨ Try it now</a></p>

<style>
.actg-hero{margin:1.3em 0;}
.actg-hero img{width:100%;height:auto;border-radius:18px;border:1px solid var(--color-hairline);box-shadow:0 16px 34px -18px rgba(0,0,0,.4);display:block;}
.actg-hero figcaption,.actg-2 figcaption{margin-top:8px;font-size:12px;color:var(--color-whisper);text-align:center;line-height:1.4;}
.actg-2{display:grid;grid-template-columns:1fr 1fr;gap:14px;margin:1.3em 0;align-items:start;}
.actg-2 figure{margin:0;}
.actg-2 img{width:100%;height:auto;border-radius:16px;border:1px solid var(--color-hairline);box-shadow:0 12px 28px -16px rgba(0,0,0,.4);display:block;}
.actg-cta{display:inline-block;margin:.4em 0;padding:12px 22px;border-radius:999px;background:linear-gradient(135deg,#5BB0F0,#2F7FD8);color:#fff!important;font-weight:800;text-decoration:none!important;box-shadow:0 8px 20px -8px rgba(47,127,216,.6);}
@media(max-width:520px){.actg-2{grid-template-columns:1fr;}}
</style>`,
    },
    tags: ["aktivitas-anak", "lembar-kerja", "printable", "edukasi-anak", "homeschool"],
    published: "2026-06-23",
    updated: "2026-06-23",
    readingTimeMin: 5,
    author: "tim-baby-mo",
    faq: [
      { question: { id: "Apakah generator lembar aktivitas ini gratis?", en: "Is the activity worksheet generator free?" },
        answer: { id: "Ya, sepenuhnya gratis — tanpa biaya, tanpa akun, dan tanpa batas jumlah lembar yang bisa dibuat dan dicetak.", en: "Yes, completely free — no cost, no account, and no limit on how many sheets you can make and print." } },
      { question: { id: "Perlukah mendaftar atau memasang aplikasi?", en: "Do I need to sign up or install an app?" },
        answer: { id: "Tidak. Semua berjalan langsung di peramban dan tidak ada data yang dikirim ke server.", en: "No. Everything runs in your browser and no data is sent to a server." } },
      { question: { id: "Untuk usia berapa lembar ini cocok?", en: "What ages are the worksheets for?" },
        answer: { id: "Tersedia tiga tingkat: 3–4, 5–6, dan 7–8 tahun, dengan tingkat kesulitan yang menyesuaikan.", en: "Three levels: ages 3–4, 5–6, and 7–8, with difficulty that adjusts to each." } },
      { question: { id: "Bisakah dicetak atau disimpan sebagai PDF?", en: "Can I print or save as PDF?" },
        answer: { id: "Bisa. Unduh seluruh paket sebagai satu PDF, simpan tiap lembar sebagai PDF/SVG, atau cetak langsung dari peramban.", en: "Yes. Download the whole pack as one PDF, save each sheet as PDF/SVG, or print directly from the browser." } },
      { question: { id: "Cocok untuk guru dan homeschooling?", en: "Is it good for teachers and homeschooling?" },
        answer: { id: "Sangat cocok. Buat banyak lembar sekaligus untuk satu kelas, atau campur beberapa aktivitas jadi satu paket latihan.", en: "Very much. Make many sheets at once for a class, or mix activities into one practice pack." } },
    ],
  },
  {
    slug: "liburan-sekolah-keluarga-muslim",
    title: {
      id: "Liburan Sekolah untuk Keluarga Muslim: 10 Ide Seru yang Tetap Berkah",
      en: "School Holidays for Muslim Families: 10 Fun Ideas That Stay Blessed",
    },
    excerpt: {
      id: "Panduan praktis mengisi libur sekolah bersama anak — ide aktivitas, menjaga rutinitas ibadah, batas layar yang sehat, hingga doa saat bepergian.",
      en: "A practical guide to filling school holidays with your kids — activity ideas, keeping worship routines, healthy screen limits, and prayers for travel.",
    },
    body: {
      id: `<p>Libur sekolah adalah hadiah: waktu lebih lapang untuk dekat dengan anak. Tapi tanpa rencana, liburan mudah habis di depan layar dan rutinitas baik ikut berantakan. Berikut cara mengisi libur yang seru sekaligus menjaganya tetap berkah.</p>

<h2>10 ide aktivitas libur sekolah</h2>
<ol>
  <li><strong>Proyek kecil di rumah.</strong> Menanam biji di pot, membuat kue, atau membereskan mainan sambil bernyanyi.</li>
  <li><strong>Silaturahmi.</strong> Berkunjung ke nenek-kakek atau saudara — pahala dan kenangan sekaligus. <em>(HR. Bukhari: silaturahmi melapangkan rezeki & umur.)</em></li>
  <li><strong>Wisata alam.</strong> Pantai, kebun, atau taman — sambil mengenalkan ciptaan Allah.</li>
  <li><strong>Ke masjid bareng.</strong> Lihat <a href="/_/blog/mengajak-anak-ke-masjid/">tips mengajak anak ke masjid</a>.</li>
  <li><strong>Hari membaca.</strong> Buku cerita nabi atau <a href="/_/cerita/">cerita Baby Mo</a> sebelum tidur.</li>
  <li><strong>Sedekah kecil.</strong> Ajak anak menyisihkan jajan untuk diberikan — melatih empati.</li>
  <li><strong>Belajar sambil bermain.</strong> <a href="/_/permainan/">Permainan islami</a> seperti <a href="/_/blog/puzzle-hijaiyah-belajar-sambil-bermain/">puzzle hijaiyah</a> dan belajar doa harian.</li>
  <li><strong>Memasak bersama.</strong> Anak belajar adab makan dan bersyukur atas rezeki.</li>
  <li><strong>Olahraga ringan.</strong> Bersepeda atau jalan pagi — tubuh sehat, hati gembira.</li>
  <li><strong>Proyek hafalan ringan.</strong> Satu surat pendek atau satu doa baru selama liburan.</li>
</ol>

<h2>Jaga rutinitas ibadah</h2>
<p>Liburan bukan libur dari Allah. Pertahankan sholat tepat waktu, <a href="/_/doa/doa-pagi/">doa pagi</a> &amp; <a href="/_/doa/doa-petang/">petang</a>, dan tidur tidak terlalu larut. Rutinitas yang dijaga membuat anak kembali sekolah tanpa "kaget".</p>

<h2>Batas layar yang sehat</h2>
<p>Sepakati aturan sederhana sejak awal: kapan boleh menonton, berapa lama, dan tontonan apa. Pilih konten yang aman — seperti <a href="/_/blog/youtube-anak-aman-tanpa-iklan/">video anak tanpa iklan judi</a>. Layar sebagai pelengkap, bukan pengasuh.</p>

<h2>Kalau bepergian</h2>
<p>Mudik atau liburan ke luar kota? Siapkan <a href="/_/blog/doa-perjalanan-untuk-anak/">doa-doa perjalanan</a> dan pelajari <a href="/_/blog/solat-jamak-qasar-saat-liburan/">sholat jamak &amp; qasar</a> agar ibadah tetap jalan di perjalanan.</p>

<p>Lihat juga <a href="/_/kalender/">Kalender Islam</a> untuk momen-momen yang bisa dirayakan bersama selama liburan.</p>`,
      en: `<p>School holidays are a gift: more space to be close to your children. But without a plan, the break easily melts into screen time and good routines fall apart. Here is how to fill the holidays with fun while keeping them blessed.</p>

<h2>10 school-holiday activity ideas</h2>
<ol>
  <li><strong>Small home projects.</strong> Plant a seed in a pot, bake, or tidy toys while singing.</li>
  <li><strong>Visit family.</strong> Grandparents or relatives — reward and memories at once. <em>(Bukhari: keeping family ties expands provision &amp; life.)</em></li>
  <li><strong>Nature trips.</strong> Beach, garden, or park — while pointing out Allah's creation.</li>
  <li><strong>Go to the mosque together.</strong> See <a href="/_/blog/mengajak-anak-ke-masjid/">tips for taking kids to the mosque</a>.</li>
  <li><strong>Reading day.</strong> Prophet stories or <a href="/_/cerita/">Baby Mo stories</a> before bed.</li>
  <li><strong>Small charity.</strong> Have your child set aside pocket money to give — building empathy.</li>
  <li><strong>Learn through play.</strong> <a href="/_/permainan/">Islamic games</a> like the <a href="/_/blog/puzzle-hijaiyah-belajar-sambil-bermain/">hijaiyah puzzle</a> and daily-dua learning.</li>
  <li><strong>Cook together.</strong> Kids learn table manners and gratitude for provision.</li>
  <li><strong>Light exercise.</strong> Cycling or a morning walk — healthy body, happy heart.</li>
  <li><strong>A small memorization project.</strong> One short surah or one new dua over the break.</li>
</ol>

<h2>Keep worship routines</h2>
<p>A holiday is not a holiday from Allah. Keep prayers on time, <a href="/_/doa/doa-pagi/">morning</a> &amp; <a href="/_/doa/doa-petang/">evening</a> remembrance, and not-too-late bedtimes. Protected routines let kids return to school without a jolt.</p>

<h2>Healthy screen limits</h2>
<p>Agree on simple rules up front: when watching is allowed, how long, and what. Choose safe content — like <a href="/_/blog/youtube-anak-aman-tanpa-iklan/">kids' videos without gambling ads</a>. Screens as a supplement, not a babysitter.</p>

<h2>If you travel</h2>
<p>Heading out of town? Prepare the <a href="/_/blog/doa-perjalanan-untuk-anak/">prayers for travel</a> and learn <a href="/_/blog/solat-jamak-qasar-saat-liburan/">combining &amp; shortening prayers</a> so worship keeps going on the road.</p>

<p>See also the <a href="/_/kalender/">Islamic Calendar</a> for moments you can celebrate together over the break.</p>`,
    },
    tags: ["liburan-sekolah", "parenting", "keluarga", "panduan", "edukasi-anak"],
    published: "2026-06-22",
    updated: "2026-06-22",
    readingTimeMin: 6,
    author: "tim-baby-mo",
    faq: [
      { question: { id: "Bagaimana mengisi libur sekolah agar tidak hanya main HP?", en: "How do we fill school holidays so it isn't just phones?" },
        answer: { id: "Sepakati jadwal sederhana: campur aktivitas fisik, silaturahmi, proyek kecil, dan ibadah, dengan layar sebagai pelengkap yang dibatasi waktunya.", en: "Agree on a simple schedule: mix physical activity, family visits, small projects, and worship, with screens as a time-limited supplement." } },
      { question: { id: "Apakah rutinitas anak boleh longgar saat liburan?", en: "Can a child's routine loosen during holidays?" },
        answer: { id: "Boleh sedikit, tapi jaga inti rutinitas — sholat, makan, dan tidur — agar anak tidak kaget saat kembali sekolah.", en: "A little, but keep the core routine — prayer, meals, and sleep — so the child isn't shocked when school resumes." } },
    ],
  },
  {
    slug: "doa-perjalanan-untuk-anak",
    title: {
      id: "Doa Perjalanan untuk Anak: Bekal Lengkap Saat Mudik & Liburan",
      en: "Travel Duas for Kids: A Complete Kit for Trips & Holidays",
    },
    excerpt: {
      id: "Kumpulan doa perjalanan yang mudah dihafal anak — keluar rumah, naik kendaraan, doa safar, singgah di tempat baru, hingga doa pulang dengan selamat.",
      en: "A set of easy-to-memorize travel duas for kids — leaving home, boarding a vehicle, the travel dua, stopping somewhere new, and returning home safely.",
    },
    body: {
      id: `<p>Perjalanan adalah waktu yang istimewa: doa seorang musafir termasuk doa yang mustajab. <em>(HR. Tirmidzi.)</em> Saat liburan atau mudik, jadikan tiap tahap perjalanan momen mengajarkan anak menyebut nama Allah.</p>

<h2>1. Sebelum keluar rumah</h2>
<p>Ajarkan <a href="/_/doa/keluar-rumah/">doa keluar rumah</a> — "Bismillah, tawakkaltu 'alallah…" — agar anak terbiasa berserah kepada Allah sejak melangkah.</p>

<h2>2. Naik kendaraan</h2>
<p>Saat naik mobil, kereta, atau pesawat, baca <a href="/_/doa/naik-kendaraan/">doa naik kendaraan</a> ("Subhanalladzi sakhkhara lana hadza…"). Lihat juga <a href="/_/doa/naik-turun-kendaraan-selamat/">doa agar selamat naik-turun kendaraan</a>.</p>

<h2>3. Doa bepergian (safar)</h2>
<p>Untuk perjalanan jauh, ada <a href="/_/doa/doa-bepergian/">doa safar</a> yang memohon kebaikan, takwa, dan kemudahan di perjalanan. Anak cukup ikut mengaminkan dulu, lalu pelan-pelan menghafalnya.</p>

<h2>4. Singgah di tempat baru</h2>
<p>Sampai di penginapan atau rest area, baca <a href="/_/doa/doa-singgah/">doa singgah</a>: "A'udzu bikalimatillahit-tammati min syarri ma khalaq" — memohon perlindungan dari keburukan tempat itu.</p>

<h2>5. Pulang dengan selamat</h2>
<p>Saat kembali, ucapkan <a href="/_/doa/doa-kembali-dari-perjalanan/">doa pulang dari perjalanan</a> dengan hati bersyukur. Tutup perjalanan seperti membukanya: bersama Allah.</p>

<h2>Tips menghafal bareng anak</h2>
<ul>
  <li>Pilih satu doa per perjalanan — jangan semua sekaligus.</li>
  <li>Bacakan keras-keras, anak menirukan potongan akhirnya.</li>
  <li>Puji setiap usaha, bukan hanya hasil sempurna.</li>
</ul>

<p>Butuh lebih banyak? Lihat <a href="/_/blog/kumpulan-doa-harian-anak/">kumpulan doa harian anak</a> dan panduan <a href="/_/blog/liburan-sekolah-keluarga-muslim/">liburan sekolah keluarga Muslim</a>.</p>`,
      en: `<p>Travel is a special time: a traveller's dua is among those readily answered. <em>(Tirmidhi.)</em> On holidays or trips home, turn each stage of the journey into a moment to teach your child to mention Allah's name.</p>

<h2>1. Before leaving home</h2>
<p>Teach the <a href="/_/doa/keluar-rumah/">dua for leaving home</a> — "Bismillah, tawakkaltu 'alallah…" — so your child gets used to relying on Allah from the first step.</p>

<h2>2. Boarding a vehicle</h2>
<p>When getting into a car, train, or plane, read the <a href="/_/doa/naik-kendaraan/">dua for boarding</a> ("Subhanalladhi sakhkhara lana hadha…"). See also the <a href="/_/doa/naik-turun-kendaraan-selamat/">dua for safe travel</a>.</p>

<h2>3. The travel dua (safar)</h2>
<p>For long journeys, there is the <a href="/_/doa/doa-bepergian/">safar dua</a> asking for goodness, piety, and ease on the road. Children can simply say "ameen" at first, then slowly memorize it.</p>

<h2>4. Stopping somewhere new</h2>
<p>Arriving at a hotel or rest stop, read the <a href="/_/doa/doa-singgah/">dua for stopping</a>: "A'udhu bikalimatillahit-tammati min sharri ma khalaq" — seeking protection from any harm in that place.</p>

<h2>5. Returning home safely</h2>
<p>On the way back, say the <a href="/_/doa/doa-kembali-dari-perjalanan/">dua for returning</a> with a grateful heart. Close the journey the way you opened it: with Allah.</p>

<h2>Tips for memorizing with kids</h2>
<ul>
  <li>Pick one dua per trip — not all at once.</li>
  <li>Read it aloud; let the child echo the final phrase.</li>
  <li>Praise every effort, not only perfect results.</li>
</ul>

<p>Want more? See the <a href="/_/blog/kumpulan-doa-harian-anak/">collection of daily duas for kids</a> and the <a href="/_/blog/liburan-sekolah-keluarga-muslim/">Muslim family school-holiday guide</a>.</p>`,
    },
    tags: ["doa", "perjalanan", "liburan-sekolah", "edukasi-anak", "panduan"],
    published: "2026-06-22",
    updated: "2026-06-22",
    readingTimeMin: 5,
    author: "tim-baby-mo",
    faq: [
      { question: { id: "Apa doa saat naik kendaraan untuk anak?", en: "What is the dua for boarding a vehicle for kids?" },
        answer: { id: "Bacaan 'Subhanalladzi sakhkhara lana hadza wa ma kunna lahu muqrinin'. Anak bisa mulai dengan menghafal potongan awalnya saja.", en: "It is 'Subhanalladhi sakhkhara lana hadha wa ma kunna lahu muqrinin'. Children can start by memorizing just the opening phrase." } },
      { question: { id: "Kenapa doa musafir istimewa?", en: "Why is a traveller's dua special?" },
        answer: { id: "Rasulullah ﷺ menyebut doa musafir termasuk doa yang dikabulkan (HR. Tirmidzi), sehingga perjalanan adalah waktu yang baik untuk berdoa.", en: "The Prophet ﷺ named the traveller's dua among those answered (Tirmidhi), so travel is a good time to make dua." } },
    ],
  },
  {
    slug: "solat-jamak-qasar-saat-liburan",
    title: {
      id: "Sholat Jamak & Qasar Saat Liburan: Panduan Ringkas untuk Keluarga",
      en: "Combining & Shortening Prayers on Holiday: A Short Family Guide",
    },
    excerpt: {
      id: "Apa itu jamak dan qasar, kapan boleh dilakukan saat bepergian, dan cara sederhana menjelaskannya pada anak agar ibadah tetap terjaga di perjalanan.",
      en: "What jama' and qasar are, when they're allowed while travelling, and a simple way to explain them to children so prayers stay protected on the road.",
    },
    body: {
      id: `<p>Islam itu mudah. Saat bepergian jauh, Allah memberi keringanan agar sholat tetap bisa dijalankan: <strong>jamak</strong> (menggabung dua sholat) dan <strong>qasar</strong> (meringkas sholat empat rakaat menjadi dua). Allah berfirman tentang bolehnya meringkas sholat saat bepergian — <strong>QS. An-Nisa: 101</strong>.</p>

<h2>Apa itu qasar?</h2>
<p>Qasar artinya meringkas sholat yang empat rakaat (Zuhur, Asar, Isya) menjadi dua rakaat. Magrib dan Subuh tidak diqasar. Keringanan ini untuk musafir (orang yang sedang dalam perjalanan jauh).</p>

<h2>Apa itu jamak?</h2>
<p>Jamak artinya menggabungkan dua sholat dalam satu waktu:</p>
<ul>
  <li><strong>Jamak taqdim</strong> — Zuhur &amp; Asar dikerjakan di waktu Zuhur; Magrib &amp; Isya di waktu Magrib.</li>
  <li><strong>Jamak takhir</strong> — keduanya dikerjakan di waktu yang belakangan.</li>
</ul>
<p>Rasulullah ﷺ menjamak sholat dalam perjalanan. <em>(HR. Bukhari &amp; Muslim.)</em> Sering kali jamak dan qasar dilakukan sekaligus saat safar.</p>

<h2>Kapan boleh?</h2>
<p>Saat menempuh perjalanan jauh (jumhur ulama: sekitar 80–90 km atau lebih) dan bukan untuk maksiat. Jika ragu, ikuti panduan ustaz tepercaya — yang penting niat menjaga sholat, bukan meninggalkannya.</p>

<h2>Menjelaskan pada anak</h2>
<p>Katakan sederhana: "Karena kita sedang dalam perjalanan jauh, Allah memberi kita cara yang lebih ringan supaya sholat tetap jalan." Anak belajar bahwa ibadah itu fleksibel namun tidak ditinggalkan. Ajak mereka menggelar sajadah di rest area atau musala.</p>

<p>Pelajari gerakan dan bacaannya di <a href="/_/sholat/">panduan bacaan sholat</a>. Lihat juga <a href="/_/blog/doa-perjalanan-untuk-anak/">doa perjalanan untuk anak</a> dan <a href="/_/blog/liburan-sekolah-keluarga-muslim/">panduan liburan sekolah</a>.</p>`,
      en: `<p>Islam is meant to be easy. When travelling far, Allah grants a concession so prayers can still be performed: <strong>jama'</strong> (combining two prayers) and <strong>qasar</strong> (shortening a four-unit prayer to two). Allah mentions shortening prayer while travelling — <strong>Qur'an, An-Nisa: 101</strong>.</p>

<h2>What is qasar?</h2>
<p>Qasar means shortening the four-unit prayers (Dhuhr, Asr, Isha) to two units. Maghrib and Fajr are not shortened. The concession is for a traveller on a long journey.</p>

<h2>What is jama'?</h2>
<p>Jama' means combining two prayers in one time slot:</p>
<ul>
  <li><strong>Jama' taqdim</strong> — Dhuhr &amp; Asr prayed in Dhuhr's time; Maghrib &amp; Isha in Maghrib's time.</li>
  <li><strong>Jama' takhir</strong> — both prayed in the later time.</li>
</ul>
<p>The Prophet ﷺ combined prayers while travelling. <em>(Bukhari &amp; Muslim.)</em> Often jama' and qasar are done together during a journey.</p>

<h2>When is it allowed?</h2>
<p>On a long journey (the majority of scholars: roughly 80–90 km or more) and not for a sinful purpose. If unsure, follow a trusted scholar's guidance — the point is to protect the prayer, not abandon it.</p>

<h2>Explaining it to children</h2>
<p>Say it simply: "Because we're on a long trip, Allah gives us an easier way so the prayer still happens." Children learn that worship is flexible yet never dropped. Have them roll out the prayer mat at a rest stop or prayer room.</p>

<p>Learn the movements and recitations in the <a href="/_/sholat/">prayer guide</a>. See also <a href="/_/blog/doa-perjalanan-untuk-anak/">travel duas for kids</a> and the <a href="/_/blog/liburan-sekolah-keluarga-muslim/">school-holiday guide</a>.</p>`,
    },
    tags: ["sholat", "jamak-qasar", "perjalanan", "liburan-sekolah", "panduan"],
    published: "2026-06-22",
    updated: "2026-06-22",
    readingTimeMin: 5,
    author: "tim-baby-mo",
    faq: [
      { question: { id: "Sholat apa saja yang boleh dijamak?", en: "Which prayers can be combined?" },
        answer: { id: "Zuhur dengan Asar, dan Magrib dengan Isya. Subuh tidak dijamak dengan sholat lain.", en: "Dhuhr with Asr, and Maghrib with Isha. Fajr is not combined with another prayer." } },
      { question: { id: "Berapa jarak agar boleh qasar?", en: "What distance allows shortening (qasar)?" },
        answer: { id: "Mayoritas ulama menyebut sekitar 80–90 km atau lebih. Jika ragu, ikuti panduan ustaz tepercaya.", en: "Most scholars cite roughly 80–90 km or more. If unsure, follow a trusted scholar's guidance." } },
    ],
  },
  {
    slug: "puzzle-hijaiyah-belajar-sambil-bermain",
    title: {
      id: "Belajar Huruf Hijaiyah Sambil Main Puzzle: Cara Seru & Tepercaya",
      en: "Learning Hijaiyah Letters Through Puzzle Play: Fun & Trustworthy",
    },
    excerpt: {
      id: "Gabungkan permainan huruf hijaiyah dengan puzzle menyusun huruf agar anak belajar huruf Arab sambil bermain — gratis, tanpa iklan, langsung di browser bersama orang tua.",
      en: "Pair the hijaiyah letters game with letter-arranging puzzles so kids learn Arabic letters through play — free, ad-free, right in the browser with a parent.",
    },
    body: {
      id: `<p>Anak belajar paling baik saat ia merasa sedang bermain. Daripada menghafal dengan tegang, kita bisa <strong>menggabungkan dua jenis permainan</strong> Baby Mo: permainan <em>belajar huruf hijaiyah</em> untuk mengenali bentuk &amp; bunyinya, lalu permainan <em>puzzle menyusun huruf</em> untuk menguatkan ingatannya.</p>

<h2>Kenapa puzzle bagus untuk belajar huruf?</h2>
<ul>
  <li><strong>Mengenali bentuk.</strong> Menyusun huruf melatih anak membedakan bentuk ﺍ، ﺏ، ﺕ dan titik-titiknya.</li>
  <li><strong>Belajar dengan banyak indra.</strong> Lihat hurufnya, dengar bunyinya, gerakkan tangannya — ingatan jadi lebih kuat.</li>
  <li><strong>Sabar &amp; fokus.</strong> Puzzle melatih ketekunan, satu kepingan demi satu kepingan.</li>
  <li><strong>Rasa berhasil.</strong> Setiap puzzle selesai memberi anak dorongan percaya diri untuk lanjut.</li>
</ul>

<h2>Urutan main yang disarankan</h2>
<ol>
  <li><strong>Kenali dulu.</strong> Mulai dari <a href="https://play.babymo.id/babymo-hijaiyah.html" target="_blank" rel="noopener">Belajar Huruf Hijaiyah</a> — 28 huruf lengkap dengan suara, kuis, dan bintang.</li>
  <li><strong>Susun &amp; mainkan.</strong> Lanjut ke <a href="https://play.babymo.id/babymo-arabic-spelling.html" target="_blank" rel="noopener">Kata Islam</a> (seret huruf menyusun kata) dan puzzle <a href="https://play.babymo.id/babymo-puzzle-katabaik.html" target="_blank" rel="noopener">Kata Baik</a> untuk menguatkan apa yang baru dipelajari.</li>
  <li><strong>Ulangi dengan riang.</strong> Sedikit tiap hari lebih baik daripada banyak tapi cepat bosan.</li>
</ol>

<div class="psg">
  <figure><img src="/_img/blog/hijaiyah-letter-card.jpg" alt="Kartu huruf Alif besar dengan tombol Dengar Huruf di game Baby Mo" width="412" height="560" loading="lazy"><figcaption>1. Kenali hurufnya dulu 🔊</figcaption></figure>
  <figure><img src="/_img/blog/kata-islam-play.jpg" alt="Menyusun huruf hijaiyah menjadi kata pada game Kata Islam" width="412" height="640" loading="lazy"><figcaption>2. Susun huruf jadi kata</figcaption></figure>
  <figure><img src="/_img/blog/kata-baik-play.jpg" alt="Puzzle Kata Baik Baby Mo tanpa iklan dan aman untuk anak" width="412" height="840" loading="lazy"><figcaption>3. Puzzle seru — tanpa iklan</figcaption></figure>
</div>
<style>
.psg{display:grid;grid-template-columns:repeat(3,1fr);gap:12px;margin:1.3em 0;align-items:start;}
.psg figure{margin:0;}
.psg img{width:100%;height:auto;border-radius:16px;border:1px solid var(--color-hairline);box-shadow:0 12px 28px -14px rgba(0,0,0,.4);display:block;}
.psg figcaption{margin-top:7px;font-size:11.5px;color:var(--color-whisper);text-align:center;line-height:1.35;}
@media(max-width:560px){.psg{grid-template-columns:1fr 1fr;}.psg figure:last-child{grid-column:1 / -1;max-width:50%;margin:0 auto;}}
</style>

<h2>Main bareng orang tua</h2>
<p>Permainan ini paling bermakna saat dimainkan berdua. Sebut nama hurufnya bersama anak, tirukan bunyinya, dan beri tepuk tangan kecil setiap satu huruf dikenali. Inilah cara <a href="/_/blog/cara-mengenalkan-huruf-hijaiyah-pada-anak/">mengenalkan huruf hijaiyah</a> yang hangat, bukan menghafal yang menegangkan.</p>

<h2>Aman &amp; bisa dipercaya</h2>
<p>Semua <a href="/_/permainan/">permainan Baby Mo</a> <strong>gratis, tanpa iklan, tanpa pembelian dalam aplikasi</strong>, dan langsung jalan di browser tanpa perlu mengunduh. Orang tua tenang, anak fokus belajar.</p>

<p>Selengkapnya di <a href="/_/blog/game-belajar-hijaiyah-anak/">game belajar hijaiyah untuk anak</a> dan <a href="/_/blog/game-anak-islami-baby-mo/">kumpulan game anak islami Baby Mo</a>.</p>`,
      en: `<p>Children learn best when they feel they're playing. Instead of tense rote memorizing, we can <strong>combine two kinds of Baby Mo games</strong>: the <em>learn-the-hijaiyah-letters</em> game to recognize their shapes &amp; sounds, then <em>letter-arranging puzzles</em> to lock the memory in.</p>

<h2>Why puzzles help with learning letters</h2>
<ul>
  <li><strong>Shape recognition.</strong> Arranging letters trains kids to tell apart ﺍ، ﺏ، ﺕ and their dots.</li>
  <li><strong>Multi-sensory learning.</strong> See the letter, hear its sound, move your hands — memory grows stronger.</li>
  <li><strong>Patience &amp; focus.</strong> Puzzles build perseverance, one piece at a time.</li>
  <li><strong>A sense of achievement.</strong> Each finished puzzle gives a confidence boost to keep going.</li>
</ul>

<h2>A suggested play order</h2>
<ol>
  <li><strong>Get to know them.</strong> Start with <a href="https://play.babymo.id/babymo-hijaiyah.html" target="_blank" rel="noopener">Learn Hijaiyah Letters</a> — all 28 letters with sound, quizzes, and stars.</li>
  <li><strong>Arrange &amp; play.</strong> Move on to <a href="https://play.babymo.id/babymo-arabic-spelling.html" target="_blank" rel="noopener">Islamic Words</a> (drag letters to spell) and the <a href="https://play.babymo.id/babymo-puzzle-katabaik.html" target="_blank" rel="noopener">Kind Words</a> puzzle to reinforce what was just learned.</li>
  <li><strong>Repeat joyfully.</strong> A little each day beats a lot that quickly bores.</li>
</ol>

<div class="psg">
  <figure><img src="/_img/blog/hijaiyah-letter-card.jpg" alt="Large Alif letter card with a Listen button in the Baby Mo game" width="412" height="560" loading="lazy"><figcaption>1. Get to know the letter 🔊</figcaption></figure>
  <figure><img src="/_img/blog/kata-islam-play.jpg" alt="Arranging hijaiyah letters into a word in the Islamic Words game" width="412" height="640" loading="lazy"><figcaption>2. Arrange letters into a word</figcaption></figure>
  <figure><img src="/_img/blog/kata-baik-play.jpg" alt="Baby Mo's Kind Words puzzle, ad-free and kid-safe" width="412" height="840" loading="lazy"><figcaption>3. A fun puzzle — ad-free</figcaption></figure>
</div>
<style>
.psg{display:grid;grid-template-columns:repeat(3,1fr);gap:12px;margin:1.3em 0;align-items:start;}
.psg figure{margin:0;}
.psg img{width:100%;height:auto;border-radius:16px;border:1px solid var(--color-hairline);box-shadow:0 12px 28px -14px rgba(0,0,0,.4);display:block;}
.psg figcaption{margin-top:7px;font-size:11.5px;color:var(--color-whisper);text-align:center;line-height:1.35;}
@media(max-width:560px){.psg{grid-template-columns:1fr 1fr;}.psg figure:last-child{grid-column:1 / -1;max-width:50%;margin:0 auto;}}
</style>

<h2>Play with a parent</h2>
<p>These games mean the most played together. Say each letter's name with your child, echo its sound, and give a little clap for every letter recognized. This is the warm way to <a href="/_/blog/cara-mengenalkan-huruf-hijaiyah-pada-anak/">introduce the hijaiyah letters</a> — not tense rote memorization.</p>

<h2>Safe &amp; trustworthy</h2>
<p>All <a href="/_/permainan/">Baby Mo games</a> are <strong>free, ad-free, with no in-app purchases</strong>, and run straight in the browser with no download. Parents relax, kids focus on learning.</p>

<p>More in <a href="/_/blog/game-belajar-hijaiyah-anak/">the hijaiyah learning game for kids</a> and the <a href="/_/blog/game-anak-islami-baby-mo/">collection of Baby Mo Islamic kids' games</a>.</p>`,
    },
    tags: ["hijaiyah", "permainan", "edukasi-anak", "huruf-arab", "belajar-sambil-bermain"],
    published: "2026-06-22",
    updated: "2026-06-22",
    readingTimeMin: 4,
    author: "tim-baby-mo",
    faq: [
      { question: { id: "Apakah permainan hijaiyah Baby Mo gratis?", en: "Are the Baby Mo hijaiyah games free?" },
        answer: { id: "Ya, gratis sepenuhnya, tanpa iklan dan tanpa pembelian dalam aplikasi. Langsung dimainkan di browser tanpa mengunduh.", en: "Yes, completely free, with no ads and no in-app purchases. They play straight in the browser with no download." } },
      { question: { id: "Umur berapa cocok belajar hijaiyah sambil bermain?", en: "What age suits learning hijaiyah through play?" },
        answer: { id: "Cocok untuk anak usia sekitar 3–7 tahun, terutama saat dimainkan bersama orang tua.", en: "Suitable for children around 3–7 years old, especially when played together with a parent." } },
    ],
  },
  {
    slug: "safar-bukan-bulan-sial-untuk-anak",
    title: {
      id: "Bulan Safar: Bukan Bulan Sial — Mengajarkan Tawakal pada Anak",
      en: "The Month of Safar: Not Unlucky — Teaching Children Tawakkul",
    },
    excerpt: {
      id: "Safar sering dianggap bulan sial. Islam menolak anggapan itu. Cara menjelaskan pada anak bahwa keberuntungan dan keburukan hanya di tangan Allah.",
      en: "Safar is often thought of as unlucky. Islam rejects that. How to explain to children that good and bad are in Allah's hands alone.",
    },
    body: {
      id: `<p>Safar adalah bulan kedua dalam <a href="/_/blog/12-bulan-hijriah-untuk-anak/">kalender Hijriah</a>. Sejak zaman dahulu, sebagian orang menganggap Safar sebagai bulan sial — penuh musibah. Islam dengan tegas <strong>menolak</strong> kepercayaan ini.</p>

<h2>Tidak ada hari atau bulan yang membawa sial</h2>
<p>Rasulullah ﷺ bersabda: <em>"Tidak ada penularan (dengan sendirinya), tidak ada thiyarah (anggapan sial), tidak ada hammah, dan tidak ada (kesialan) bulan Safar."</em> <strong>(HR. Bukhari &amp; Muslim.)</strong></p>
<p>Artinya, tidak ada waktu yang dengan sendirinya membawa keberuntungan atau keburukan. Semua kebaikan dan ketetapan datang dari Allah.</p>

<h2>Menjelaskan pada anak</h2>
<ol>
  <li><strong>Allah pengatur segala sesuatu.</strong> Katakan: "Tidak ada hari sial. Yang menjaga kita adalah Allah, kapan pun."</li>
  <li><strong>Ganti rasa takut dengan doa.</strong> Saat anak cemas, ajak baca <a href="/_/doa/doa-pagi/">doa pagi</a> &amp; <a href="/_/doa/doa-petang/">petang</a> dan <a href="/_/doa/perlindungan-anak/">doa perlindungan</a>.</li>
  <li><strong>Tanam tawakal.</strong> Berusaha sebaik mungkin, lalu serahkan hasilnya pada Allah — itulah inti tawakal.</li>
</ol>

<h2>Tetap penuh kebaikan</h2>
<p>Safar adalah bulan biasa yang bisa diisi amal baik seperti bulan lain: sholat, sedekah, berbuat baik pada keluarga. Justru di bulan ini kita ajarkan anak bahwa keberkahan datang dari ketaatan, bukan dari tanggal di kalender.</p>

<p>Lihat momen lain di <a href="/_/kalender/">Kalender Islam</a>.</p>`,
      en: `<p>Safar is the second month of the <a href="/_/blog/12-bulan-hijriah-untuk-anak/">Hijri calendar</a>. Since ancient times, some have considered Safar an unlucky, calamity-filled month. Islam firmly <strong>rejects</strong> this belief.</p>

<h2>No day or month brings bad luck</h2>
<p>The Prophet ﷺ said: <em>"There is no contagion (by itself), no evil omen, no hamah, and no (bad luck in) Safar."</em> <strong>(Bukhari &amp; Muslim.)</strong></p>
<p>This means no time by itself brings fortune or misfortune. All good and every decree comes from Allah.</p>

<h2>Explaining it to children</h2>
<ol>
  <li><strong>Allah governs everything.</strong> Say: "There is no unlucky day. The One who protects us is Allah, at any time."</li>
  <li><strong>Replace fear with dua.</strong> When your child worries, read the <a href="/_/doa/doa-pagi/">morning</a> &amp; <a href="/_/doa/doa-petang/">evening</a> remembrance and the <a href="/_/doa/perlindungan-anak/">dua of protection</a>.</li>
  <li><strong>Plant tawakkul.</strong> Do your best, then entrust the outcome to Allah — that is the heart of reliance.</li>
</ol>

<h2>Still full of good</h2>
<p>Safar is an ordinary month that can be filled with good deeds like any other: prayer, charity, kindness to family. In this very month we teach children that blessing comes from obedience, not from a date on the calendar.</p>

<p>See other moments in the <a href="/_/kalender/">Islamic Calendar</a>.</p>`,
    },
    tags: ["kalender-islam", "safar", "tawakal", "akidah", "edukasi-anak"],
    published: "2026-06-22",
    updated: "2026-06-22",
    readingTimeMin: 4,
    author: "tim-baby-mo",
    faq: [
      { question: { id: "Apakah bulan Safar membawa sial?", en: "Does the month of Safar bring bad luck?" },
        answer: { id: "Tidak. Rasulullah ﷺ menegaskan tidak ada kesialan pada bulan Safar (HR. Bukhari & Muslim). Semua ketetapan ada di tangan Allah.", en: "No. The Prophet ﷺ affirmed there is no bad luck in Safar (Bukhari & Muslim). All decree is in Allah's hands." } },
      { question: { id: "Bagaimana menjelaskan tahayul pada anak?", en: "How do we explain superstition to a child?" },
        answer: { id: "Ganti rasa takut dengan tawakal: ajarkan bahwa hanya Allah yang menjaga, dan biasakan berdoa daripada percaya pada kesialan.", en: "Replace fear with reliance on Allah: teach that only Allah protects, and make dua a habit instead of believing in bad luck." } },
    ],
  },
  {
    slug: "rabiul-akhir-menjaga-kebiasaan-baik",
    title: {
      id: "Bulan Rabiul Akhir: Merawat Kebiasaan Baik yang Kecil tapi Istiqamah",
      en: "The Month of Rabi' al-Akhir: Nurturing Small, Consistent Good Habits",
    },
    excerpt: {
      id: "Rabiul Akhir tidak punya hari besar khusus — dan justru di situ pelajarannya: amal yang dicintai Allah adalah yang rutin meski sedikit. Cara menumbuhkan istiqamah pada anak.",
      en: "Rabi' al-Akhir has no special major day — and that's exactly the lesson: the deeds Allah loves most are the consistent ones, even if small. How to build istiqamah in children.",
    },
    body: {
      id: `<p>Rabiul Akhir adalah bulan keempat dalam <a href="/_/blog/12-bulan-hijriah-untuk-anak/">kalender Hijriah</a>. Berbeda dengan Ramadan atau Dzulhijjah, bulan ini tidak memiliki hari raya atau ibadah khusus. Tapi justru "bulan yang tenang" ini menyimpan pelajaran berharga untuk anak.</p>

<h2>Amal terbaik adalah yang konsisten</h2>
<p>Rasulullah ﷺ bersabda: <em>"Amal yang paling dicintai Allah adalah yang paling rutin walaupun sedikit."</em> <strong>(HR. Bukhari &amp; Muslim.)</strong> Bulan tanpa hari besar adalah waktu sempurna melatih istiqamah — ketaatan harian yang kecil tapi tak putus.</p>

<h2>Kebiasaan kecil yang bisa dijaga anak</h2>
<ul>
  <li>Membaca <a href="/_/doa/doa-pagi/">doa pagi</a> &amp; <a href="/_/doa/doa-petang/">petang</a> setiap hari.</li>
  <li>Satu halaman atau satu baris hafalan <a href="/_/surat/">surat pendek</a>.</li>
  <li>Membantu satu pekerjaan rumah tanpa diminta.</li>
  <li>Mengucap Bismillah sebelum makan dan Alhamdulillah sesudahnya.</li>
</ul>

<h2>Tips untuk orang tua</h2>
<p>Pilih satu kebiasaan, bukan sepuluh. Buat papan ceklis sederhana, dan rayakan setiap "centang" sebagai kemenangan kecil. Lihat <a href="/_/blog/kebiasaan-kecil-yang-tumbuh-besar/">kebiasaan kecil yang tumbuh besar</a> untuk idenya.</p>

<p>Lihat momen lain di <a href="/_/kalender/">Kalender Islam</a>.</p>`,
      en: `<p>Rabi' al-Akhir is the fourth month of the <a href="/_/blog/12-bulan-hijriah-untuk-anak/">Hijri calendar</a>. Unlike Ramadan or Dhul-Hijjah, this month has no festival or special worship. Yet this "quiet month" holds a precious lesson for children.</p>

<h2>The best deeds are the consistent ones</h2>
<p>The Prophet ﷺ said: <em>"The deeds most beloved to Allah are the most consistent, even if small."</em> <strong>(Bukhari &amp; Muslim.)</strong> A month with no major day is the perfect time to train istiqamah — small daily obedience that never stops.</p>

<h2>Small habits a child can keep</h2>
<ul>
  <li>Reading the <a href="/_/doa/doa-pagi/">morning</a> &amp; <a href="/_/doa/doa-petang/">evening</a> remembrance daily.</li>
  <li>One line of memorizing a <a href="/_/surat/">short surah</a>.</li>
  <li>Helping with one chore without being asked.</li>
  <li>Saying Bismillah before eating and Alhamdulillah after.</li>
</ul>

<h2>Tips for parents</h2>
<p>Pick one habit, not ten. Make a simple checklist board, and celebrate each "tick" as a small win. See <a href="/_/blog/kebiasaan-kecil-yang-tumbuh-besar/">small habits that grow big</a> for ideas.</p>

<p>See other moments in the <a href="/_/kalender/">Islamic Calendar</a>.</p>`,
    },
    tags: ["kalender-islam", "rabiul-akhir", "istiqamah", "kebiasaan", "edukasi-anak"],
    published: "2026-06-22",
    updated: "2026-06-22",
    readingTimeMin: 4,
    author: "tim-baby-mo",
    faq: [
      { question: { id: "Apakah ada ibadah khusus di bulan Rabiul Akhir?", en: "Is there special worship in Rabi' al-Akhir?" },
        answer: { id: "Tidak ada ibadah khusus yang dikhususkan untuk bulan ini. Justru ia menjadi waktu baik untuk menjaga amalan harian yang konsisten.", en: "There is no worship singled out for this month. It is instead a good time to maintain consistent daily deeds." } },
    ],
  },
  {
    slug: "jumadil-awal-belajar-berani-berbuat-baik",
    title: {
      id: "Bulan Jumadil Awal: Belajar Berani Membela Kebaikan dari Kisah Mu'tah",
      en: "The Month of Jumada al-Awwal: Learning Courage for Good from Mu'tah",
    },
    excerpt: {
      id: "Di bulan Jumadil Awal, sejarah Islam mencatat keteguhan para sahabat dalam Perang Mu'tah. Cara mengambil pelajaran keberanian yang lembut untuk anak.",
      en: "In Jumada al-Awwal, Islamic history records the steadfastness of the Companions at the Battle of Mu'tah. How to draw a gentle lesson of courage for kids.",
    },
    body: {
      id: `<p>Jumadil Awal adalah bulan kelima dalam <a href="/_/blog/12-bulan-hijriah-untuk-anak/">kalender Hijriah</a>. Menurut catatan sejarah Islam (sirah), di bulan ini terjadi <strong>Perang Mu'tah</strong> pada tahun 8 Hijriah — saat para sahabat menunjukkan keberanian luar biasa membela kebenaran.</p>

<h2>Keberanian yang bukan sekadar tidak takut</h2>
<p>Untuk anak, keberanian tidak perlu dijelaskan lewat detail peperangan. Cukup intinya: berani itu adalah <strong>tetap melakukan hal yang benar walau terasa sulit</strong>. Para sahabat berani karena mereka percaya pada Allah.</p>

<h2>Keberanian sehari-hari untuk si kecil</h2>
<ul>
  <li>Berani <strong>jujur</strong> dan mengakui kesalahan.</li>
  <li>Berani <strong>berkata baik</strong> dan menolak ajakan buruk.</li>
  <li>Berani <strong>meminta maaf</strong> lebih dulu.</li>
  <li>Berani <strong>membela teman</strong> yang diperlakukan tidak adil.</li>
</ul>

<h2>Sandarkan pada Allah</h2>
<p>Ajari anak bahwa sumber keberanian adalah tawakal. Saat takut, ajak baca <a href="/_/doa/doa-keteguhan-hati/">doa keteguhan hati</a> dan <a href="/_/doa/perlindungan-anak/">doa perlindungan</a>. Hati yang dekat dengan Allah lebih tenang dan kuat.</p>

<p>Lihat juga kisah-kisah teladan di <a href="/_/kisah/">Kisah Para Nabi</a> dan momen lain di <a href="/_/kalender/">Kalender Islam</a>.</p>`,
      en: `<p>Jumada al-Awwal is the fifth month of the <a href="/_/blog/12-bulan-hijriah-untuk-anak/">Hijri calendar</a>. According to Islamic history (sirah), this month saw the <strong>Battle of Mu'tah</strong> in 8 AH — when the Companions showed extraordinary courage in defending the truth.</p>

<h2>Courage that is more than just fearlessness</h2>
<p>For children, courage needn't be taught through battle details. The core is enough: bravery is <strong>still doing what is right even when it feels hard</strong>. The Companions were brave because they trusted Allah.</p>

<h2>Everyday courage for little ones</h2>
<ul>
  <li>Brave enough to be <strong>honest</strong> and admit mistakes.</li>
  <li>Brave enough to <strong>speak kindly</strong> and refuse bad invitations.</li>
  <li>Brave enough to <strong>apologize</strong> first.</li>
  <li>Brave enough to <strong>stand up for a friend</strong> treated unfairly.</li>
</ul>

<h2>Lean on Allah</h2>
<p>Teach your child that the source of courage is reliance on Allah. When afraid, read the <a href="/_/doa/doa-keteguhan-hati/">dua for a steadfast heart</a> and the <a href="/_/doa/perlindungan-anak/">dua of protection</a>. A heart close to Allah is calmer and stronger.</p>

<p>See also the role-model stories in <a href="/_/kisah/">Prophet Stories</a> and other moments in the <a href="/_/kalender/">Islamic Calendar</a>.</p>`,
    },
    tags: ["kalender-islam", "jumadil-awal", "keberanian", "akhlak", "edukasi-anak"],
    published: "2026-06-22",
    updated: "2026-06-22",
    readingTimeMin: 4,
    author: "tim-baby-mo",
    faq: [
      { question: { id: "Peristiwa apa yang terjadi di bulan Jumadil Awal?", en: "What event happened in Jumada al-Awwal?" },
        answer: { id: "Menurut catatan sirah, Perang Mu'tah terjadi pada Jumadil Awal tahun 8 Hijriah, contoh keberanian para sahabat membela kebenaran.", en: "According to sirah accounts, the Battle of Mu'tah took place in Jumada al-Awwal, 8 AH — an example of the Companions' courage in defending the truth." } },
    ],
  },
  {
    slug: "jumadil-akhir-sahabat-setia-abu-bakar",
    title: {
      id: "Bulan Jumadil Akhir: Belajar Setia dari Abu Bakar Ash-Shiddiq",
      en: "The Month of Jumada al-Akhir: Learning Loyalty from Abu Bakr As-Siddiq",
    },
    excerpt: {
      id: "Menurut riwayat, Abu Bakar Ash-Shiddiq wafat di bulan Jumadil Akhir. Kisah sahabat paling setia ini mengajarkan anak arti persahabatan, kejujuran, dan kelembutan hati.",
      en: "By many narrations, Abu Bakr As-Siddiq passed away in Jumada al-Akhir. The story of the most loyal Companion teaches kids friendship, honesty, and a gentle heart.",
    },
    body: {
      id: `<p>Jumadil Akhir adalah bulan keenam dalam <a href="/_/blog/12-bulan-hijriah-untuk-anak/">kalender Hijriah</a>. Menurut banyak riwayat, di bulan ini wafat <strong>Abu Bakar Ash-Shiddiq رضي الله عنه</strong> — sahabat paling dekat dan paling setia kepada Rasulullah ﷺ.</p>

<h2>Sahabat yang setia</h2>
<p>Abu Bakar adalah orang dewasa pertama yang beriman. Ia menemani Rasulullah ﷺ saat hijrah, bersembunyi bersama di Gua Tsur, dan selalu membenarkan beliau — sampai diberi gelar <strong>"Ash-Shiddiq"</strong> (yang sangat jujur dan membenarkan). Allah menyebut momen di gua itu dalam <strong>QS. At-Taubah: 40</strong>.</p>

<h2>Pelajaran untuk anak</h2>
<ul>
  <li><strong>Setia.</strong> Teman sejati ada di saat senang maupun susah.</li>
  <li><strong>Jujur.</strong> Selalu berkata benar membuat orang percaya pada kita.</li>
  <li><strong>Lembut &amp; dermawan.</strong> Abu Bakar terkenal lembut hatinya dan suka menolong.</li>
</ul>

<h2>Ajak anak mempraktikkan</h2>
<p>Tanyakan: "Bagaimana cara jadi teman yang baik hari ini?" Mungkin dengan berbagi bekal, menemani teman yang sedih, atau menepati janji. Ceritakan pula kisah ini lewat <a href="/_/cerita/">cerita Baby Mo</a> tentang persahabatan.</p>

<p>Lihat juga <a href="/_/kisah/">Kisah Para Nabi</a> dan momen lain di <a href="/_/kalender/">Kalender Islam</a>.</p>`,
      en: `<p>Jumada al-Akhir is the sixth month of the <a href="/_/blog/12-bulan-hijriah-untuk-anak/">Hijri calendar</a>. By many narrations, this month saw the passing of <strong>Abu Bakr As-Siddiq (may Allah be pleased with him)</strong> — the closest and most loyal Companion of the Prophet ﷺ.</p>

<h2>The loyal friend</h2>
<p>Abu Bakr was the first adult man to believe. He accompanied the Prophet ﷺ on the migration, hid with him in the Cave of Thawr, and always affirmed him — earning the title <strong>"As-Siddiq"</strong> (the truthful, the affirmer). Allah mentions that moment in the cave in <strong>Qur'an, At-Tawbah: 40</strong>.</p>

<h2>Lessons for children</h2>
<ul>
  <li><strong>Loyalty.</strong> A true friend is there in ease and hardship alike.</li>
  <li><strong>Honesty.</strong> Always telling the truth makes people trust us.</li>
  <li><strong>Gentleness &amp; generosity.</strong> Abu Bakr was known for his tender heart and love of helping.</li>
</ul>

<h2>Help your child practice</h2>
<p>Ask: "How can you be a good friend today?" Perhaps by sharing a snack, sitting with a sad friend, or keeping a promise. Tell this through <a href="/_/cerita/">Baby Mo stories</a> about friendship too.</p>

<p>See also <a href="/_/kisah/">Prophet Stories</a> and other moments in the <a href="/_/kalender/">Islamic Calendar</a>.</p>`,
    },
    tags: ["kalender-islam", "jumadil-akhir", "abu-bakar", "persahabatan", "edukasi-anak"],
    published: "2026-06-22",
    updated: "2026-06-22",
    readingTimeMin: 4,
    author: "tim-baby-mo",
    faq: [
      { question: { id: "Siapa Abu Bakar Ash-Shiddiq?", en: "Who was Abu Bakr As-Siddiq?" },
        answer: { id: "Sahabat terdekat Rasulullah ﷺ dan khalifah pertama, dikenal sangat jujur dan setia. Menurut riwayat beliau wafat di bulan Jumadil Akhir.", en: "The closest Companion of the Prophet ﷺ and the first caliph, known for great honesty and loyalty. By narration he passed away in Jumada al-Akhir." } },
    ],
  },
  {
    slug: "dzulqadah-bulan-haram-cinta-damai",
    title: {
      id: "Bulan Dzulqadah: Bulan Haram yang Mengajarkan Anak Cinta Damai",
      en: "The Month of Dhul-Qa'dah: A Sacred Month Teaching Children to Love Peace",
    },
    excerpt: {
      id: "Dzulqadah adalah salah satu dari empat bulan haram. Dari Perjanjian Hudaibiyah, anak belajar bahwa kesabaran dan memilih damai adalah kekuatan, bukan kelemahan.",
      en: "Dhul-Qa'dah is one of the four sacred months. From the Treaty of Hudaybiyyah, kids learn that patience and choosing peace are strength, not weakness.",
    },
    body: {
      id: `<p>Dzulqadah adalah bulan kesebelas dalam <a href="/_/blog/12-bulan-hijriah-untuk-anak/">kalender Hijriah</a> dan termasuk salah satu dari <strong>empat bulan haram</strong> yang dimuliakan Allah — <strong>QS. At-Taubah: 36</strong>. Pada bulan haram, umat Islam dianjurkan menjauhi pertikaian dan memperbanyak kebaikan.</p>

<h2>Belajar damai dari Hudaibiyah</h2>
<p>Menurut sirah, pada bulan Dzulqadah tahun 6 Hijriah terjadi <strong>Perjanjian Hudaibiyah</strong> — saat Rasulullah ﷺ memilih berdamai meski syaratnya terasa berat. Ternyata perdamaian itu membuka jalan kebaikan yang besar. Anak belajar: <em>memilih damai dan sabar bukan tanda kalah.</em></p>

<h2>Pelajaran untuk anak</h2>
<ul>
  <li><strong>Menahan diri.</strong> Tidak membalas keburukan dengan keburukan.</li>
  <li><strong>Sabar.</strong> Kebaikan kadang datang setelah kita menunggu.</li>
  <li><strong>Cinta damai.</strong> Berdamai dengan teman setelah bertengkar adalah keberanian.</li>
</ul>

<h2>Praktik sederhana di rumah</h2>
<p>Saat kakak-adik bertengkar, jadikan momen ini latihan "Hudaibiyah kecil": siapa yang mau mengalah dulu demi damai? Bantu dengan <a href="/_/blog/adab-bersaudara-mengurangi-pertengkaran/">adab bersaudara</a> dan <a href="/_/doa/ketika-marah/">doa ketika marah</a>.</p>

<p>Lihat momen lain di <a href="/_/kalender/">Kalender Islam</a>.</p>`,
      en: `<p>Dhul-Qa'dah is the eleventh month of the <a href="/_/blog/12-bulan-hijriah-untuk-anak/">Hijri calendar</a> and one of the <strong>four sacred months</strong> honored by Allah — <strong>Qur'an, At-Tawbah: 36</strong>. In sacred months, Muslims are urged to avoid conflict and do more good.</p>

<h2>Learning peace from Hudaybiyyah</h2>
<p>According to sirah, in Dhul-Qa'dah of 6 AH came the <strong>Treaty of Hudaybiyyah</strong> — when the Prophet ﷺ chose peace even though the terms felt hard. That peace opened the way to great good. Children learn: <em>choosing peace and patience is not a sign of losing.</em></p>

<h2>Lessons for children</h2>
<ul>
  <li><strong>Self-restraint.</strong> Not answering bad with bad.</li>
  <li><strong>Patience.</strong> Good sometimes comes after we wait.</li>
  <li><strong>Loving peace.</strong> Making up with a friend after a quarrel is courage.</li>
</ul>

<h2>A simple practice at home</h2>
<p>When siblings quarrel, make it a "little Hudaybiyyah": who will give way first for the sake of peace? Help with <a href="/_/blog/adab-bersaudara-mengurangi-pertengkaran/">sibling manners</a> and the <a href="/_/doa/ketika-marah/">dua when angry</a>.</p>

<p>See other moments in the <a href="/_/kalender/">Islamic Calendar</a>.</p>`,
    },
    tags: ["kalender-islam", "dzulqadah", "bulan-haram", "damai", "edukasi-anak"],
    published: "2026-06-22",
    updated: "2026-06-22",
    readingTimeMin: 4,
    author: "tim-baby-mo",
    faq: [
      { question: { id: "Apa saja empat bulan haram?", en: "What are the four sacred months?" },
        answer: { id: "Dzulqadah, Dzulhijjah, Muharram, dan Rajab. Pada bulan-bulan ini dianjurkan memperbanyak kebaikan dan menjauhi kezaliman.", en: "Dhul-Qa'dah, Dhul-Hijjah, Muharram, and Rajab. In them we are encouraged to do more good and avoid wrongdoing." } },
      { question: { id: "Apa itu Perjanjian Hudaibiyah?", en: "What was the Treaty of Hudaybiyyah?" },
        answer: { id: "Perjanjian damai pada masa Rasulullah ﷺ (sekitar Dzulqadah 6 H) yang mengajarkan bahwa memilih damai dan sabar bisa membawa kebaikan besar.", en: "A peace treaty in the Prophet's ﷺ time (around Dhul-Qa'dah 6 AH) teaching that choosing peace and patience can bring great good." } },
    ],
  },
  {
    slug: "idul-fitri-untuk-anak",
    title: {
      id: "Idul Fitri untuk Anak: Panduan Lebaran (Sholat Ied, Takbir & Maaf-maafan)",
      en: "Eid al-Fitr for Kids: A Family Guide (Eid Prayer, Takbir & Forgiveness)",
    },
    excerpt: {
      id: "Cara mengenalkan makna Idul Fitri pada anak — takbir, sholat Ied, zakat fitrah, baju baru, dan tradisi maaf-maafan — agar Lebaran terasa istimewa dan penuh makna.",
      en: "How to teach children the meaning of Eid al-Fitr — takbir, the Eid prayer, zakat al-fitr, new clothes, and asking forgiveness — so Eid feels special and meaningful.",
    },
    body: {
      id: `<p>Idul Fitri adalah hari kemenangan setelah sebulan berpuasa di bulan Ramadan. Bagi anak, Lebaran bisa jadi salah satu kenangan paling indah — asal kita jelaskan maknanya, bukan sekadar baju baru dan uang.</p>

<h2>Yang dilakukan saat Idul Fitri</h2>
<ul>
  <li><strong>Takbir.</strong> Mulai malam Lebaran hingga sebelum sholat Ied, kumandangkan takbir: “Allahu akbar, Allahu akbar, laa ilaaha illallah…”</li>
  <li><strong>Zakat fitrah.</strong> Ditunaikan sebelum sholat Ied — ajak anak ikut menyerahkannya. Selengkapnya: <a href="/_/blog/zakat-fitrah-untuk-anak/">zakat fitrah untuk anak</a>.</li>
  <li><strong>Mandi &amp; pakai pakaian terbaik.</strong> Tidak harus baru — yang penting bersih dan rapi.</li>
  <li><strong>Sholat Ied berjamaah.</strong> Ajak anak ke lapangan/masjid; biarkan ia merasakan kebersamaan.</li>
  <li><strong>Saling memaafkan.</strong> Mulai dari keluarga — ajarkan anak meminta dan memberi maaf dengan tulus.</li>
</ul>

<h2>Mengajarkan makna Idul Fitri pada anak</h2>
<p>Idul Fitri bukan akhir dari ibadah, tapi perayaan atas sebulan latihan kesabaran dan syukur. Sampaikan dengan bahasa sederhana: “Kita senang karena sudah berusaha taat selama Ramadan, dan hari ini kita berterima kasih kepada Allah.”</p>
<ul>
  <li>Ceritakan bahwa kebahagiaan terbesar adalah kembali suci dan dekat dengan Allah.</li>
  <li>Ajak berbagi: sisihkan sebagian THR anak untuk sedekah.</li>
  <li>Jadikan maaf-maafan momen hangat, bukan formalitas.</li>
</ul>

<p>Lanjutkan kebaikan Ramadan dengan <a href="/_/blog/puasa-syawal-untuk-anak/">puasa Syawal</a>. Lihat juga <a href="/_/blog/ramadan-bersama-anak/">Ramadan bersama anak</a> dan <a href="/_/doa/">kumpulan doa harian</a>.</p>`,
      en: `<p>Eid al-Fitr is the day of joy after a month of fasting in Ramadan. For a child it can become one of the loveliest memories — as long as we explain its meaning, not just new clothes and money.</p>

<h2>What we do on Eid</h2>
<ul>
  <li><strong>Takbir.</strong> From the eve of Eid until the Eid prayer: “Allahu akbar, Allahu akbar, laa ilaaha illallah…”</li>
  <li><strong>Zakat al-fitr.</strong> Given before the Eid prayer — let your child help hand it over. More: <a href="/_/blog/zakat-fitrah-untuk-anak/">zakat al-fitr for kids</a>.</li>
  <li><strong>Bathe &amp; wear your best.</strong> Not necessarily new — just clean and tidy.</li>
  <li><strong>Pray Eid in congregation.</strong> Take your child along to feel the togetherness.</li>
  <li><strong>Seek forgiveness.</strong> Start with family — teach children to ask for and give pardon sincerely.</li>
</ul>

<h2>Teaching the meaning of Eid</h2>
<p>Eid isn't the end of worship but a celebration of a month of practicing patience and gratitude. Say it simply: “We're happy because we tried to obey Allah all Ramadan, and today we thank Him.”</p>
<ul>
  <li>Tell them the greatest joy is returning pure and close to Allah.</li>
  <li>Encourage sharing: set aside part of their Eid money for charity.</li>
  <li>Make seeking forgiveness a warm moment, not a formality.</li>
</ul>

<p>Continue Ramadan's good with <a href="/_/blog/puasa-syawal-untuk-anak/">six days of Shawwal</a>. See also <a href="/_/blog/ramadan-bersama-anak/">Ramadan with your child</a> and the <a href="/_/doa/">daily duas</a>.</p>`,
    },
    tags: ["idul-fitri", "syawal", "ibadah-musiman", "parenting", "panduan"],
    published: "2026-06-22",
    updated: "2026-06-22",
    readingTimeMin: 5,
    author: "tim-baby-mo",
    faq: [
      { question: { id: "Apa saja yang dilakukan anak saat Idul Fitri?", en: "What should kids do on Eid?" },
        answer: { id: "Bertakbir, ikut menyerahkan zakat fitrah, mandi dan berpakaian rapi, sholat Ied berjamaah, lalu saling memaafkan dengan keluarga.", en: "Recite takbir, help give zakat al-fitr, bathe and dress neatly, pray Eid in congregation, then exchange forgiveness with family." } },
      { question: { id: "Kapan zakat fitrah ditunaikan?", en: "When is zakat al-fitr given?" },
        answer: { id: "Paling utama sebelum sholat Idul Fitri, dan boleh ditunaikan beberapa hari sebelumnya pada akhir Ramadan.", en: "Best before the Eid prayer, and it may be given in the last days of Ramadan." } },
    ],
  },
  {
    slug: "puasa-syawal-untuk-anak",
    title: {
      id: "Puasa Syawal 6 Hari: Keutamaan & Cara Mengajak Anak",
      en: "Six Days of Shawwal: Virtue & How to Involve Your Child",
    },
    excerpt: {
      id: "Puasa enam hari di bulan Syawal — keutamaannya seperti puasa setahun, cara melakukannya, dan tips lembut mengajak anak ikut berlatih.",
      en: "Fasting six days in Shawwal — its reward like fasting a whole year, how to do it, and gentle ways to involve your child.",
    },
    body: {
      id: `<p>Setelah Idul Fitri, ada amalan ringan tapi besar pahalanya: <strong>puasa enam hari di bulan Syawal</strong>. Rasulullah ﷺ bersabda, “Barang siapa berpuasa Ramadan lalu mengikutinya dengan enam hari di bulan Syawal, maka seperti berpuasa setahun penuh.” — <strong>HR. Muslim</strong>.</p>

<h2>Cara melakukannya</h2>
<ul>
  <li>Dilakukan <strong>setelah</strong> hari raya Idul Fitri (tidak boleh puasa pada 1 Syawal).</li>
  <li>Enam hari, boleh berurutan atau terpisah, selama masih di bulan Syawal.</li>
  <li>Niat puasa sunnah; pahalanya melengkapi puasa Ramadan.</li>
</ul>

<h2>Mengajak anak ikut berlatih</h2>
<p>Bagi anak yang belum wajib puasa, Syawal adalah lanjutan latihan yang menyenangkan setelah Ramadan.</p>
<ol>
  <li><strong>Tawarkan, jangan paksa.</strong> “Mau coba puasa setengah hari lagi seperti waktu Ramadan?”</li>
  <li><strong>Puasa bersama.</strong> Anak lebih semangat saat orang tua ikut berpuasa di hari yang sama.</li>
  <li><strong>Rayakan berbuka.</strong> Jadikan momen berbuka hangat dan istimewa.</li>
</ol>

<p>Lihat <a href="/_/doa/berbuka-puasa/">doa berbuka puasa</a>, atau jelajahi <a href="/_/blog/kalender-puasa-sunnah/">kalender puasa sunnah setahun</a> untuk amalan puasa lainnya.</p>`,
      en: `<p>After Eid comes a light deed with a great reward: <strong>fasting six days in Shawwal</strong>. The Prophet ﷺ said, “Whoever fasts Ramadan then follows it with six days of Shawwal, it is as if he fasted the whole year.” — <strong>Muslim</strong>.</p>

<h2>How to do it</h2>
<ul>
  <li>Done <strong>after</strong> Eid al-Fitr (fasting on the 1st of Shawwal is not allowed).</li>
  <li>Six days, consecutive or separate, as long as it's within Shawwal.</li>
  <li>Intend a voluntary fast; its reward completes the Ramadan fast.</li>
</ul>

<h2>Involving your child</h2>
<p>For children not yet obligated to fast, Shawwal is a fun continuation of Ramadan's practice.</p>
<ol>
  <li><strong>Offer, don't force.</strong> “Want to try a half-day fast again like in Ramadan?”</li>
  <li><strong>Fast together.</strong> Kids are keener when parents fast the same day.</li>
  <li><strong>Celebrate iftar.</strong> Make breaking the fast a warm, special moment.</li>
</ol>

<p>See the <a href="/_/doa/berbuka-puasa/">dua for breaking fast</a>, or explore the <a href="/_/blog/kalender-puasa-sunnah/">year-round sunnah fasting calendar</a>.</p>`,
    },
    tags: ["puasa", "syawal", "ibadah-musiman", "parenting"],
    published: "2026-06-22",
    updated: "2026-06-22",
    readingTimeMin: 4,
    author: "tim-baby-mo",
    faq: [
      { question: { id: "Kapan boleh mulai puasa Syawal?", en: "When can the Shawwal fast begin?" },
        answer: { id: "Mulai tanggal 2 Syawal (sehari setelah Idul Fitri) hingga akhir bulan Syawal. Tanggal 1 Syawal dilarang berpuasa karena hari raya.", en: "From the 2nd of Shawwal (the day after Eid) until the month ends. Fasting on the 1st of Shawwal is forbidden as it is the day of Eid." } },
      { question: { id: "Harus berurutan enam harinya?", en: "Must the six days be consecutive?" },
        answer: { id: "Tidak harus. Boleh berurutan atau dipisah-pisah, asalkan total enam hari dan masih dalam bulan Syawal.", en: "No. They may be consecutive or spread out, as long as it totals six days within Shawwal." } },
    ],
  },
  {
    slug: "zakat-fitrah-untuk-anak",
    title: {
      id: "Zakat Fitrah Dijelaskan ke Anak: Panduan Keluarga (Kapan, Berapa, untuk Siapa)",
      en: "Zakat al-Fitr Explained to Kids: A Family Guide (When, How Much, For Whom)",
    },
    excerpt: {
      id: "Apa itu zakat fitrah, berapa besarnya, kapan ditunaikan, dan cara melibatkan anak agar mereka belajar berbagi dan peduli sejak dini.",
      en: "What zakat al-fitr is, how much, when to give, and how to involve children so they learn to share and care early.",
    },
    body: {
      id: `<p>Zakat fitrah adalah zakat yang wajib ditunaikan setiap muslim di akhir Ramadan — termasuk untuk anak-anak (ditunaikan oleh orang tua). Tujuannya menyucikan diri setelah berpuasa dan membantu yang membutuhkan agar ikut bahagia di hari raya.</p>

<h2>Hal penting tentang zakat fitrah</h2>
<ul>
  <li><strong>Untuk siapa?</strong> Setiap jiwa muslim — besar maupun kecil, bahkan bayi. Orang tua menunaikan untuk anak-anaknya.</li>
  <li><strong>Berapa?</strong> Satu sha' makanan pokok (sekitar 2,5–3 kg beras), atau senilai uang sesuai ketentuan lembaga zakat setempat. <strong>(HR. Bukhari &amp; Muslim, dari Ibnu Umar.)</strong></li>
  <li><strong>Kapan?</strong> Paling utama sebelum sholat Idul Fitri; boleh sejak akhir Ramadan.</li>
  <li><strong>Untuk siapa diberikan?</strong> Fakir miskin dan golongan yang berhak.</li>
</ul>

<h2>Melibatkan anak</h2>
<ol>
  <li><strong>Ajak menimbang &amp; menyiapkan.</strong> Biarkan anak ikut menakar beras atau memasukkan ke kantong.</li>
  <li><strong>Ajak menyerahkan.</strong> Pengalaman langsung memberi membekas lebih dalam daripada penjelasan.</li>
  <li><strong>Jelaskan tujuannya.</strong> “Agar teman-teman yang kurang mampu juga bisa makan enak dan senang saat Lebaran.”</li>
</ol>

<p>Bagian dari rangkaian <a href="/_/blog/idul-fitri-untuk-anak/">Idul Fitri</a>. Lihat juga <a href="/_/blog/ramadan-bersama-anak/">Ramadan bersama anak</a>.</p>`,
      en: `<p>Zakat al-fitr is an obligatory charity every Muslim gives at the end of Ramadan — including for children (paid by parents). It purifies the one who fasted and helps those in need share in the joy of Eid.</p>

<h2>Key points</h2>
<ul>
  <li><strong>For whom?</strong> Every Muslim soul — young or old, even an infant. Parents pay on behalf of their children.</li>
  <li><strong>How much?</strong> One sha' of staple food (about 2.5–3 kg of rice), or its cash value per your local zakat authority. <strong>(Bukhari &amp; Muslim, from Ibn Umar.)</strong></li>
  <li><strong>When?</strong> Best before the Eid prayer; may be given from the last days of Ramadan.</li>
  <li><strong>To whom?</strong> The poor and those entitled.</li>
</ul>

<h2>Involving your child</h2>
<ol>
  <li><strong>Measure &amp; prepare together.</strong> Let your child help weigh the rice or fill the bag.</li>
  <li><strong>Let them hand it over.</strong> Giving in person leaves a deeper mark than any explanation.</li>
  <li><strong>Explain the purpose.</strong> “So friends who have less can also eat well and be happy on Eid.”</li>
</ol>

<p>Part of the <a href="/_/blog/idul-fitri-untuk-anak/">Eid al-Fitr</a> series. See also <a href="/_/blog/ramadan-bersama-anak/">Ramadan with your child</a>.</p>`,
    },
    tags: ["zakat", "idul-fitri", "ibadah-musiman", "akhlak", "panduan"],
    published: "2026-06-22",
    updated: "2026-06-22",
    readingTimeMin: 4,
    author: "tim-baby-mo",
    faq: [
      { question: { id: "Apakah bayi juga wajib zakat fitrah?", en: "Is zakat al-fitr due for a baby too?" },
        answer: { id: "Ya. Zakat fitrah wajib untuk setiap jiwa muslim, termasuk bayi dan anak-anak, dan ditunaikan oleh orang tua atau walinya.", en: "Yes. Zakat al-fitr is due for every Muslim soul, including babies and children, and is paid by the parent or guardian." } },
      { question: { id: "Berapa besar zakat fitrah?", en: "How much is zakat al-fitr?" },
        answer: { id: "Satu sha' makanan pokok (sekitar 2,5–3 kg beras) per orang, atau senilai uang sesuai ketentuan lembaga zakat resmi setempat.", en: "One sha' of staple food (about 2.5–3 kg of rice) per person, or its cash value per your local official zakat body." } },
    ],
  },
  {
    slug: "12-bulan-hijriah-untuk-anak",
    title: {
      id: "Mengenal 12 Bulan Hijriah & Artinya untuk Anak (Plus 4 Bulan Haram)",
      en: "The 12 Hijri Months & Their Meaning for Kids (Plus the 4 Sacred Months)",
    },
    excerpt: {
      id: "Kenalkan anak pada kalender Islam: 12 bulan Hijriah, peristiwa pentingnya, dan empat bulan haram yang dimuliakan — dengan tautan ke setiap momen.",
      en: "Introduce children to the Islamic calendar: the 12 Hijri months, their key events, and the four sacred months — with links to each occasion.",
    },
    body: {
      id: `<p>Kalender Islam (Hijriah) mengikuti peredaran <strong>bulan (qamariah)</strong>, sehingga satu tahunnya sekitar 354 hari — sebelas hari lebih pendek dari kalender Masehi. Itulah sebabnya Ramadan dan Idul Fitri "bergeser" maju setiap tahun. Allah berfirman bahwa jumlah bulan ada dua belas, dan empat di antaranya adalah bulan haram (yang dimuliakan). — <strong>QS. At-Taubah: 36</strong>.</p>

<p>Setiap nama bulan punya arti yang indah dan sering terkait cuaca atau kebiasaan bangsa Arab dahulu. Mengenalkannya membantu anak merasa terhubung dengan waktu secara islami — bukan sekadar menghafal nama.</p>

<h2>12 Bulan Hijriah & maknanya</h2>
<ol>
  <li><strong>Muharram</strong> 🌙 — artinya "yang diharamkan/dimuliakan". Bulan haram pembuka tahun: <a href="/_/blog/menjelaskan-tahun-baru-islam-ke-anak/">tahun baru Islam</a> &amp; <a href="/_/blog/puasa-asyura-untuk-anak/">puasa Asyura</a>.</li>
  <li><strong>Safar</strong> — artinya "kosong". <a href="/_/blog/safar-bukan-bulan-sial-untuk-anak/">Bukan bulan sial</a> — momen mengajarkan tawakal.</li>
  <li><strong>Rabiul Awal</strong> — "musim semi pertama". Bulan kelahiran <a href="/_/blog/maulid-mengenalkan-rasulullah-pada-anak/">Rasulullah ﷺ</a>.</li>
  <li><strong>Rabiul Akhir</strong> — "musim semi kedua". Bulan tenang untuk <a href="/_/blog/rabiul-akhir-menjaga-kebiasaan-baik/">menjaga kebiasaan baik (istiqamah)</a>.</li>
  <li><strong>Jumadil Awal</strong> — "musim beku pertama". Belajar <a href="/_/blog/jumadil-awal-belajar-berani-berbuat-baik/">berani membela kebaikan</a>.</li>
  <li><strong>Jumadil Akhir</strong> — "musim beku kedua". Mengenang <a href="/_/blog/jumadil-akhir-sahabat-setia-abu-bakar/">Abu Bakar Ash-Shiddiq, sahabat setia</a>.</li>
  <li><strong>Rajab</strong> 🌙 — "mengagungkan". Bulan haram; peristiwa <a href="/_/blog/isra-miraj-untuk-anak/">Isra Mi'raj</a>.</li>
  <li><strong>Sya'ban</strong> — "berpencar". <a href="/_/blog/syaban-menyiapkan-hati-menuju-ramadan/">Persiapan menuju Ramadan</a>; ada juga <a href="/_/blog/nisfu-syaban/">Nisfu Sya'ban</a>.</li>
  <li><strong>Ramadan</strong> — "membakar (dosa)". Bulan puasa &amp; <a href="/_/blog/lailatul-qadar-untuk-anak/">Lailatul Qadar</a>.</li>
  <li><strong>Syawal</strong> — "mengangkat/meninggi". <a href="/_/blog/idul-fitri-untuk-anak/">Idul Fitri</a> &amp; <a href="/_/blog/puasa-syawal-untuk-anak/">puasa enam hari Syawal</a>.</li>
  <li><strong>Dzulqadah</strong> 🌙 — "pemilik istirahat" (berhenti dari perang). Bulan haram, <a href="/_/blog/dzulqadah-bulan-haram-cinta-damai/">cinta damai</a>.</li>
  <li><strong>Dzulhijjah</strong> 🌙 — "pemilik haji". Bulan haram; <a href="/_/blog/10-hari-dzulhijjah-bareng-anak/">10 hari pertama</a>, haji &amp; <a href="/_/blog/panduan-idul-adha-dan-qurban-untuk-keluarga/">Idul Adha</a>.</li>
</ol>

<h2>Empat bulan haram</h2>
<p>Empat bulan yang dimuliakan adalah <strong>Dzulqadah, Dzulhijjah, Muharram, dan Rajab</strong> (tiga berurutan, satu terpisah). Pada bulan-bulan ini umat Islam dianjurkan memperbanyak kebaikan dan lebih menjauhi kezaliman, karena dosa pun lebih berat nilainya.</p>

<h2>Setiap bulan ada hikmahnya</h2>
<p>Tidak semua bulan punya hari raya — dan itu disengaja. Bulan-bulan "tenang" seperti Rabiul Akhir, Jumadil Awal, dan Jumadil Akhir mengajarkan anak bahwa kebaikan tidak menunggu momen besar. Justru di sanalah kita melatih amal harian yang kecil tapi rutin.</p>

<h2>Cara memakai kalender ini bersama anak</h2>
<ul>
  <li><strong>Tandai bulan berjalan.</strong> Tunjukkan kita sedang di bulan apa, dan apa keistimewaannya.</li>
  <li><strong>Satu amalan per bulan.</strong> Pilih satu kebiasaan baik untuk dijaga sepanjang bulan itu.</li>
  <li><strong>Ceritakan maknanya.</strong> Arti nama bulan membuat anak penasaran dan mudah mengingat.</li>
</ul>

<p>Lihat kalender lengkap dengan tanggalnya di <a href="/_/kalender/">Kalender Islam</a>, dan <a href="/_/blog/kalender-puasa-sunnah/">kalender puasa sunnah</a> sepanjang tahun.</p>`,
      en: `<p>The Islamic (Hijri) calendar follows the <strong>moon (lunar) cycle</strong>, so a year is about 354 days — eleven days shorter than the Gregorian calendar. That's why Ramadan and Eid "move" earlier each year. Allah states that the number of months is twelve, four of which are sacred. — <strong>Qur'an, At-Tawbah: 36</strong>.</p>

<p>Each month's name carries a beautiful meaning, often tied to old Arabian weather or customs. Knowing them helps a child feel connected to time in an Islamic way — not just memorizing names.</p>

<h2>The 12 Hijri Months & their meanings</h2>
<ol>
  <li><strong>Muharram</strong> 🌙 — "the forbidden/sacred". The sacred month that opens the year: <a href="/_/blog/menjelaskan-tahun-baru-islam-ke-anak/">Islamic new year</a> &amp; <a href="/_/blog/puasa-asyura-untuk-anak/">the Ashura fast</a>.</li>
  <li><strong>Safar</strong> — "empty". <a href="/_/blog/safar-bukan-bulan-sial-untuk-anak/">Not an unlucky month</a> — a time to teach tawakkul.</li>
  <li><strong>Rabi' al-Awwal</strong> — "first spring". The birth month of the <a href="/_/blog/maulid-mengenalkan-rasulullah-pada-anak/">Prophet ﷺ</a>.</li>
  <li><strong>Rabi' al-Akhir</strong> — "second spring". A quiet month to <a href="/_/blog/rabiul-akhir-menjaga-kebiasaan-baik/">keep good habits (istiqamah)</a>.</li>
  <li><strong>Jumada al-Awwal</strong> — "first frozen month". Learning to <a href="/_/blog/jumadil-awal-belajar-berani-berbuat-baik/">bravely stand for good</a>.</li>
  <li><strong>Jumada al-Akhir</strong> — "second frozen month". Remembering <a href="/_/blog/jumadil-akhir-sahabat-setia-abu-bakar/">Abu Bakr As-Siddiq, the loyal friend</a>.</li>
  <li><strong>Rajab</strong> 🌙 — "to honor". Sacred; the <a href="/_/blog/isra-miraj-untuk-anak/">Isra & Mi'raj</a>.</li>
  <li><strong>Sha'ban</strong> — "to scatter". <a href="/_/blog/syaban-menyiapkan-hati-menuju-ramadan/">Preparing for Ramadan</a>; also <a href="/_/blog/nisfu-syaban/">mid-Sha'ban</a>.</li>
  <li><strong>Ramadan</strong> — "to burn (away sins)". The month of fasting &amp; <a href="/_/blog/lailatul-qadar-untuk-anak/">Laylatul Qadr</a>.</li>
  <li><strong>Shawwal</strong> — "to lift/raise". <a href="/_/blog/idul-fitri-untuk-anak/">Eid al-Fitr</a> &amp; the <a href="/_/blog/puasa-syawal-untuk-anak/">six days of Shawwal</a>.</li>
  <li><strong>Dhul-Qa'dah</strong> 🌙 — "the one of rest" (a pause from war). Sacred; <a href="/_/blog/dzulqadah-bulan-haram-cinta-damai/">loving peace</a>.</li>
  <li><strong>Dhul-Hijjah</strong> 🌙 — "the one of Hajj". Sacred; <a href="/_/blog/10-hari-dzulhijjah-bareng-anak/">first 10 days</a>, Hajj &amp; <a href="/_/blog/panduan-idul-adha-dan-qurban-untuk-keluarga/">Eid al-Adha</a>.</li>
</ol>

<h2>The four sacred months</h2>
<p>The four honored months are <strong>Dhul-Qa'dah, Dhul-Hijjah, Muharram, and Rajab</strong> (three in a row, one apart). In them, Muslims are encouraged to do more good and avoid wrongdoing all the more, since even sins weigh heavier.</p>

<h2>Every month has its wisdom</h2>
<p>Not every month has a festival — and that's by design. The "quiet" months like Rabi' al-Akhir, Jumada al-Awwal, and Jumada al-Akhir teach children that goodness doesn't wait for a big occasion. That's exactly where we train small, consistent daily deeds.</p>

<h2>How to use this calendar with your child</h2>
<ul>
  <li><strong>Mark the current month.</strong> Show which month we're in and what makes it special.</li>
  <li><strong>One deed per month.</strong> Choose one good habit to keep all month long.</li>
  <li><strong>Tell the meaning.</strong> A month's name sparks curiosity and sticks in memory.</li>
</ul>

<p>See the full calendar with dates at <a href="/_/kalender/">Islamic Calendar</a>, and the year-round <a href="/_/blog/kalender-puasa-sunnah/">sunnah fasting calendar</a>.</p>`,
    },
    tags: ["kalender-islam", "hijriah", "edukasi-anak", "panduan"],
    published: "2026-06-22",
    updated: "2026-06-22",
    readingTimeMin: 5,
    author: "tim-baby-mo",
  },
  {
    slug: "kalender-puasa-sunnah",
    title: {
      id: "Kalender Puasa Sunnah Setahun untuk Keluarga (Lengkap & Bersumber)",
      en: "A Year-Round Sunnah Fasting Calendar for Families (Sourced)",
    },
    excerpt: {
      id: "Daftar puasa sunnah sepanjang tahun — Senin-Kamis, Ayyamul Bidh, Arafah, Asyura, Syawal, dan puasa Daud — beserta keutamaan dan tips melibatkan anak.",
      en: "A list of voluntary fasts through the year — Mondays/Thursdays, Ayyamul Bidh, Arafah, Ashura, Shawwal, and the fast of Dawud — with virtues and tips to involve kids.",
    },
    body: {
      id: `<p>Selain puasa wajib Ramadan, ada banyak puasa sunnah yang bisa menjadi latihan ringan dan penuh berkah sepanjang tahun. Berikut yang paling dikenal, lengkap dengan sumbernya.</p>

<h2>Puasa sunnah sepanjang tahun</h2>
<ul>
  <li><strong>Senin &amp; Kamis.</strong> Hari diangkatnya amal; Rasulullah ﷺ rutin berpuasa pada keduanya. <em>(HR. Tirmidzi.)</em></li>
  <li><strong>Ayyamul Bidh.</strong> Tiga hari terang bulan: 13, 14, 15 setiap bulan Hijriah. <em>(HR. Tirmidzi &amp; Nasa'i.)</em></li>
  <li><strong>Puasa Arafah.</strong> 9 Dzulhijjah — menghapus dosa setahun lalu dan setahun mendatang (bagi yang tidak berhaji). <em>(HR. Muslim.)</em></li>
  <li><strong>Puasa Asyura.</strong> 10 Muharram (disunnahkan juga Tasua, 9 Muharram). <em>(HR. Muslim.)</em> Lihat <a href="/_/blog/puasa-asyura-untuk-anak/">Asyura untuk anak</a>.</li>
  <li><strong>Enam hari Syawal.</strong> Setelah Idul Fitri — pahalanya seperti puasa setahun. <em>(HR. Muslim.)</em> Lihat <a href="/_/blog/puasa-syawal-untuk-anak/">puasa Syawal</a>.</li>
  <li><strong>Puasa Daud.</strong> Sehari puasa, sehari tidak — puasa yang paling dicintai Allah. <em>(HR. Bukhari &amp; Muslim.)</em></li>
</ul>

<h2>Melibatkan anak</h2>
<p>Anak belum wajib berpuasa, tapi bisa ikut berlatih. Mulai dari puasa setengah hari di hari Senin atau Kamis, puasa bersama, dan rayakan berbukanya. Konsistensi kecil lebih baik daripada banyak tapi cepat menyerah.</p>

<p>Lihat <a href="/_/doa/berbuka-puasa/">doa berbuka puasa</a> dan <a href="/_/blog/12-bulan-hijriah-untuk-anak/">kalender 12 bulan Hijriah</a>.</p>`,
      en: `<p>Beyond the obligatory Ramadan fast, there are many voluntary fasts that make light, blessed practice all year. Here are the best-known, with their sources.</p>

<h2>Sunnah fasts through the year</h2>
<ul>
  <li><strong>Mondays &amp; Thursdays.</strong> Days when deeds are raised; the Prophet ﷺ regularly fasted them. <em>(Tirmidhi.)</em></li>
  <li><strong>Ayyamul Bidh.</strong> The three bright days: the 13th, 14th, 15th of each Hijri month. <em>(Tirmidhi &amp; Nasa'i.)</em></li>
  <li><strong>Arafah.</strong> 9th of Dhul-Hijjah — expiates the past and coming year (for non-pilgrims). <em>(Muslim.)</em></li>
  <li><strong>Ashura.</strong> 10th of Muharram (with Tasua, the 9th, recommended too). <em>(Muslim.)</em> See <a href="/_/blog/puasa-asyura-untuk-anak/">Ashura for kids</a>.</li>
  <li><strong>Six days of Shawwal.</strong> After Eid — reward like fasting a year. <em>(Muslim.)</em> See <a href="/_/blog/puasa-syawal-untuk-anak/">Shawwal fasting</a>.</li>
  <li><strong>Fast of Dawud.</strong> Fast one day, skip the next — the fast most beloved to Allah. <em>(Bukhari &amp; Muslim.)</em></li>
</ul>

<h2>Involving your child</h2>
<p>Children aren't obligated to fast but can join the practice. Start with a half-day fast on Monday or Thursday, fast together, and celebrate iftar. Small consistency beats a lot that quickly fades.</p>

<p>See the <a href="/_/doa/berbuka-puasa/">dua for breaking fast</a> and the <a href="/_/blog/12-bulan-hijriah-untuk-anak/">12 Hijri months</a>.</p>`,
    },
    tags: ["puasa", "puasa-sunnah", "ibadah", "panduan", "edukasi-anak"],
    published: "2026-06-22",
    updated: "2026-06-22",
    readingTimeMin: 5,
    author: "tim-baby-mo",
    faq: [
      { question: { id: "Puasa sunnah apa yang paling mudah untuk memulai?", en: "Which sunnah fast is easiest to start with?" },
        answer: { id: "Puasa Senin-Kamis paling mudah dijadikan rutinitas karena berulang tiap pekan dan dicontohkan Rasulullah ﷺ.", en: "Mondays and Thursdays are easiest to make routine — they recur weekly and follow the Prophet's ﷺ example." } },
      { question: { id: "Bolehkah anak ikut puasa sunnah?", en: "Can children join voluntary fasts?" },
        answer: { id: "Boleh, sebagai latihan. Anak belum wajib berpuasa, jadi mulailah dari setengah hari dan tanpa paksaan.", en: "Yes, as practice. Children aren't obligated, so start with half-days and without pressure." } },
    ],
  },
  {
    slug: "lailatul-qadar-untuk-anak",
    title: {
      id: "Lailatul Qadar untuk Anak: Malam Seribu Bulan di 10 Hari Terakhir Ramadan",
      en: "Laylatul Qadr for Kids: The Night of a Thousand Months in the Last 10 Days",
    },
    excerpt: {
      id: "Apa itu Lailatul Qadar, kapan dicari, dan cara melibatkan anak di sepuluh malam terakhir Ramadan dengan cara yang ringan dan berkesan.",
      en: "What Laylatul Qadr is, when to seek it, and how to involve children in the last ten nights of Ramadan in a light, memorable way.",
    },
    body: {
      id: `<p>Lailatul Qadar adalah malam yang <strong>lebih baik dari seribu bulan</strong> — disebutkan dalam <strong>QS. Al-Qadr</strong>. Pada malam ini Al-Qur'an pertama kali diturunkan, dan ibadah di dalamnya bernilai sangat besar.</p>

<h2>Kapan dicari?</h2>
<p>Rasulullah ﷺ bersabda agar mencarinya di <strong>sepuluh malam terakhir Ramadan</strong>, terutama pada malam-malam ganjil (21, 23, 25, 27, 29). <em>(HR. Bukhari &amp; Muslim.)</em></p>

<h2>Doa Lailatul Qadar</h2>
<blockquote dir="rtl" lang="ar" style="font-family:'Amiri Quran','Amiri','Noto Naskh Arabic',serif;font-size:1.4em;line-height:2;color:var(--color-sage-deep);">اللَّهُمَّ إِنَّكَ عَفُوٌّ تُحِبُّ الْعَفْوَ فَاعْفُ عَنِّي</blockquote>
<p><em>Allahumma innaka 'afuwwun tuhibbul-'afwa fa'fu 'anni</em> — “Ya Allah, Engkau Maha Pemaaf dan menyukai maaf, maka maafkanlah aku.” <em>(HR. Tirmidzi.)</em></p>

<h2>Melibatkan anak</h2>
<ol>
  <li><strong>Hitung mundur 10 malam terakhir.</strong> Buat kalender sederhana yang anak tandai tiap malam.</li>
  <li><strong>Sholat &amp; doa singkat bersama.</strong> Tidak harus lama — yang penting anak ikut merasakan istimewanya malam itu.</li>
  <li><strong>Ajarkan doa di atas.</strong> Pendek dan mudah dihafal.</li>
</ol>

<p>Bagian dari <a href="/_/blog/ramadan-bersama-anak/">Ramadan bersama anak</a>. Lihat juga <a href="/_/blog/nuzulul-quran-untuk-anak/">Nuzulul Qur'an</a>.</p>`,
      en: `<p>Laylatul Qadr is a night <strong>better than a thousand months</strong> — described in <strong>Surah Al-Qadr</strong>. On it the Qur'an was first revealed, and worship within it carries immense reward.</p>

<h2>When to seek it</h2>
<p>The Prophet ﷺ told us to seek it in the <strong>last ten nights of Ramadan</strong>, especially the odd nights (21st, 23rd, 25th, 27th, 29th). <em>(Bukhari &amp; Muslim.)</em></p>

<h2>The du'a of Laylatul Qadr</h2>
<blockquote dir="rtl" lang="ar" style="font-family:'Amiri Quran','Amiri','Noto Naskh Arabic',serif;font-size:1.4em;line-height:2;color:var(--color-sage-deep);">اللَّهُمَّ إِنَّكَ عَفُوٌّ تُحِبُّ الْعَفْوَ فَاعْفُ عَنِّي</blockquote>
<p><em>Allahumma innaka 'afuwwun tuhibbul-'afwa fa'fu 'anni</em> — “O Allah, You are Pardoning and love to pardon, so pardon me.” <em>(Tirmidhi.)</em></p>

<h2>Involving your child</h2>
<ol>
  <li><strong>Count down the last 10 nights.</strong> Make a simple calendar your child marks each night.</li>
  <li><strong>Short prayer &amp; du'a together.</strong> It needn't be long — just let them feel the night's specialness.</li>
  <li><strong>Teach the du'a above.</strong> Short and easy to memorize.</li>
</ol>

<p>Part of <a href="/_/blog/ramadan-bersama-anak/">Ramadan with your child</a>. See also <a href="/_/blog/nuzulul-quran-untuk-anak/">Nuzulul Qur'an</a>.</p>`,
    },
    tags: ["lailatul-qadar", "ramadan", "ibadah-musiman", "edukasi-anak"],
    published: "2026-06-22",
    updated: "2026-06-22",
    readingTimeMin: 4,
    author: "tim-baby-mo",
  },
  {
    slug: "nisfu-syaban",
    title: {
      id: "Nisfu Sya'ban: Apa Itu dan Sikap yang Seimbang (Penjelasan Bersumber)",
      en: "Nisfu Sha'ban: What It Is and a Balanced Stance (Sourced)",
    },
    excerpt: {
      id: "Apa itu malam Nisfu Sya'ban, bagaimana status riwayatnya menurut ulama, dan sikap yang seimbang — memperbanyak amal umum tanpa ritual khusus yang tidak berdasar.",
      en: "What the night of Nisfu Sha'ban is, how scholars view its narrations, and a balanced stance — increasing general worship without baseless special rituals.",
    },
    body: {
      id: `<p>Malam Nisfu Sya'ban (pertengahan bulan Sya'ban, malam ke-15) sering diperingati di Indonesia. Agar anak tumbuh dengan pemahaman yang lurus, penting menyampaikannya secara seimbang dan jujur tentang dalilnya.</p>

<h2>Bagaimana status riwayatnya?</h2>
<p>Keutamaan malam Nisfu Sya'ban disebut dalam sejumlah riwayat, namun <strong>sebagian besar dinilai lemah atau diperdebatkan</strong> para ahli hadith; sebagian ulama menerimanya karena saling menguatkan. Yang disepakati: <strong>tidak ada tuntunan ibadah khusus</strong> (seperti sholat atau bacaan tertentu dengan jumlah tertentu) yang shahih untuk malam itu.</p>

<h2>Sikap yang seimbang</h2>
<ul>
  <li><strong>Boleh memperbanyak amal umum</strong> yang memang disyariatkan kapan saja: doa, istighfar, sholat sunnah, dan sedekah.</li>
  <li><strong>Hindari ritual khusus</strong> yang tidak ada dasarnya — jumlah rakaat tertentu, bacaan tertentu, atau keyakinan tertentu yang dikaitkan khusus dengan malam ini.</li>
  <li><strong>Manfaatkan Sya'ban</strong> sesuai sunnah yang jelas: memperbanyak puasa sunnah sebagai <a href="/_/blog/syaban-menyiapkan-hati-menuju-ramadan/">persiapan menuju Ramadan</a>.</li>
</ul>

<h2>Untuk anak</h2>
<p>Cukup ajarkan inti yang lurus: memperbanyak kebaikan itu baik di bulan apa pun, dan kita mengikuti contoh yang jelas dari Rasulullah ﷺ. Ini menanamkan kebiasaan beramal sekaligus berpegang pada dalil.</p>

<p>Lihat <a href="/_/blog/kalender-puasa-sunnah/">kalender puasa sunnah</a> dan <a href="/_/doa/sayyidul-istighfar/">Sayyidul Istighfar</a>.</p>`,
      en: `<p>The night of Nisfu Sha'ban (the 15th night of Sha'ban) is widely observed in Indonesia. So children grow with a sound understanding, it's important to present it honestly and in balance regarding the evidence.</p>

<h2>What is the status of its narrations?</h2>
<p>The virtue of Nisfu Sha'ban appears in several narrations, but <strong>most are graded weak or disputed</strong> by hadith scholars; some scholars accept them via corroboration. What is agreed: there is <strong>no authentic special prescribed worship</strong> (a specific prayer or recitation with a set count) for that night.</p>

<h2>A balanced stance</h2>
<ul>
  <li><strong>It's fine to increase general worship</strong> that is encouraged at any time: du'a, istighfar, voluntary prayer, and charity.</li>
  <li><strong>Avoid baseless special rituals</strong> — a fixed number of units, particular recitations, or specific beliefs tied uniquely to this night.</li>
  <li><strong>Use Sha'ban</strong> per the clear sunnah: increasing voluntary fasts as <a href="/_/blog/syaban-menyiapkan-hati-menuju-ramadan/">preparation for Ramadan</a>.</li>
</ul>

<h2>For children</h2>
<p>Teach the sound core: doing good is praiseworthy in any month, and we follow the Prophet's ﷺ clear example. This builds the habit of good deeds while holding to evidence.</p>

<p>See the <a href="/_/blog/kalender-puasa-sunnah/">sunnah fasting calendar</a> and <a href="/_/doa/sayyidul-istighfar/">Sayyidul Istighfar</a>.</p>`,
    },
    tags: ["syaban", "ibadah-musiman", "fiqh", "panduan"],
    published: "2026-06-22",
    updated: "2026-06-22",
    readingTimeMin: 4,
    author: "tim-baby-mo",
    faq: [
      { question: { id: "Apakah ada sholat khusus malam Nisfu Sya'ban?", en: "Is there a special prayer for Nisfu Sha'ban night?" },
        answer: { id: "Tidak ada tuntunan shahih tentang sholat khusus dengan jumlah rakaat atau bacaan tertentu untuk malam itu. Yang dianjurkan adalah amal umum seperti doa, istighfar, dan sholat sunnah biasa.", en: "There is no authentic guidance for a special prayer with a set number of units or recitations for that night. What's encouraged is general worship like du'a, istighfar, and ordinary voluntary prayer." } },
    ],
  },
  {
    slug: "youtube-anak-aman-tanpa-iklan",
    title: {
      id: "YouTube Anak Aman Tanpa Iklan: Cara Memilih Tontonan Islami untuk Anak",
      en: "Safe, Ad-Free YouTube for Kids: How to Choose Islamic Content",
    },
    excerpt: {
      id: "Khawatir dengan iklan dan tontonan yang tidak pantas? Panduan praktis menyetel YouTube yang aman untuk anak — plus pilihan tontonan islami yang tenang dan bebas iklan.",
      en: "Worried about ads and unsuitable content? A practical guide to setting up safe YouTube for kids — plus calm, ad-free Islamic options.",
    },
    body: {
      id: `<p>Setiap orang tua ingin anak menonton dengan tenang dan aman — bukan diganggu iklan, autoplay yang melompat ke video aneh, atau tontonan yang terlalu cepat dan bising. Kabar baiknya: dengan beberapa pengaturan sederhana, waktu layar anak bisa jauh lebih aman. Berikut panduannya.</p>

<h2>Langkah menyetel YouTube aman untuk anak</h2>
<ol>
  <li><strong>Pakai aplikasi YouTube Kids.</strong> Dirancang khusus untuk anak, dengan kontrol orang tua, timer, dan konten yang lebih terkurasi.</li>
  <li><strong>Aktifkan Mode Terbatas (Restricted Mode)</strong> di YouTube biasa untuk menyaring konten dewasa.</li>
  <li><strong>Matikan autoplay.</strong> Ini mencegah anak "terbawa" ke video berikutnya yang tidak Anda pilih.</li>
  <li><strong>Buat playlist sendiri.</strong> Kumpulkan video yang sudah Anda tonton lebih dulu, lalu biarkan anak hanya menonton playlist itu.</li>
  <li><strong>Tonton bersama.</strong> Pendampingan adalah filter terbaik — sekaligus momen belajar bersama.</li>
  <li><strong>Pilih channel yang dikurasi &amp; sesuai nilai keluarga.</strong> Channel anak islami yang tenang membantu menjaga isi dan nuansanya.</li>
</ol>

<h2>Ingin benar-benar bebas iklan?</h2>
<p>Untuk pengalaman yang sepenuhnya tanpa iklan, gunakan properti web yang memang dibuat tanpa iklan: <a href="/_/doa/">doa harian</a> dan <a href="/_/permainan/">permainan Baby Mo</a> di babymo.id dan play.babymo.id — tidak ada iklan, tidak ada autoplay ke konten asing, dan bisa dimainkan offline setelah dibuka.</p>

<h2>Contoh tontonan yang tenang &amp; islami</h2>
<p>Konten Baby Mo dibuat tenang, ramah balita, dan berfokus pada nilai baik — doa harian, lagu islami, dan game edukatif. Misalnya lagu “Bismillah Dulu”:</p>
<div style="position:relative;padding-top:56.25%;border-radius:16px;overflow:hidden;border:1px solid var(--color-hairline);margin:10px 0;">
<iframe src="https://www.youtube-nocookie.com/embed/cq6ODPSWGdc" title="BABY MO - Bismillah Dulu | Lagu Anak Islami" loading="lazy" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen style="position:absolute;inset:0;width:100%;height:100%;border:0;"></iframe>
</div>
<p>Lihat lebih banyak: <a href="/_/blog/lagu-anak-islami-baby-mo/">lagu anak islami</a>, <a href="/_/blog/video-edukasi-anak-islami-baby-mo/">video edukasi Baby Mo</a>, atau <a href="https://www.youtube.com/@babymo.official?sub_confirmation=1" target="_blank" rel="noopener">subscribe channel Baby Mo</a> untuk tontonan yang aman dan terkurasi.</p>

<h2>Tanda tontonan anak yang sehat</h2>
<ul>
  <li>Tenang dan tidak berlebihan secara visual/suara.</li>
  <li>Durasi pendek dan jelas, bukan video panjang yang membuat lengket.</li>
  <li>Mengajarkan sesuatu yang baik — adab, doa, huruf, atau nilai.</li>
  <li>Tanpa autoplay liar ke konten yang tak berkaitan.</li>
</ul>

<p>Tonton bersama si kecil, batasi durasinya, dan jadikan layar sebagai jembatan ke kebiasaan baik di dunia nyata.</p>`,
      en: `<p>Every parent wants their child to watch calmly and safely — not interrupted by ads, autoplay jumping to strange videos, or content that's too fast and loud. The good news: with a few simple settings, kids' screen time can be far safer. Here's how.</p>

<h2>How to set up safe YouTube for kids</h2>
<ol>
  <li><strong>Use the YouTube Kids app.</strong> Built for children, with parental controls, timers, and more curated content.</li>
  <li><strong>Turn on Restricted Mode</strong> on regular YouTube to filter mature content.</li>
  <li><strong>Disable autoplay.</strong> This stops kids being carried off to a next video you didn't choose.</li>
  <li><strong>Build your own playlist.</strong> Pre-watch videos, then let your child watch only that playlist.</li>
  <li><strong>Watch together.</strong> Co-viewing is the best filter — and a shared learning moment.</li>
  <li><strong>Choose curated channels aligned with your values.</strong> A calm Islamic kids' channel keeps the content and tone in check.</li>
</ol>

<h2>Want fully ad-free?</h2>
<p>For a completely ad-free experience, use web properties built without ads: the <a href="/_/doa/">daily duas</a> and <a href="/_/permainan/">Baby Mo games</a> on babymo.id and play.babymo.id — no ads, no autoplay into unrelated content, and playable offline once opened.</p>

<h2>An example of calm, Islamic content</h2>
<p>Baby Mo's content is calm, toddler-friendly, and focused on good values — daily duas, Islamic songs, and educational games. For example, the song “Bismillah Dulu”:</p>
<div style="position:relative;padding-top:56.25%;border-radius:16px;overflow:hidden;border:1px solid var(--color-hairline);margin:10px 0;">
<iframe src="https://www.youtube-nocookie.com/embed/cq6ODPSWGdc" title="BABY MO - Bismillah Dulu | Islamic Kids Song" loading="lazy" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen style="position:absolute;inset:0;width:100%;height:100%;border:0;"></iframe>
</div>
<p>See more: <a href="/_/blog/lagu-anak-islami-baby-mo/">Islamic kids songs</a>, <a href="/_/blog/video-edukasi-anak-islami-baby-mo/">Baby Mo educational videos</a>, or <a href="https://www.youtube.com/@babymo.official?sub_confirmation=1" target="_blank" rel="noopener">subscribe to Baby Mo</a> for safe, curated content.</p>

<h2>Signs of healthy kids' content</h2>
<ul>
  <li>Calm, not over-stimulating in visuals or sound.</li>
  <li>Short and clear, not long videos designed to keep them glued.</li>
  <li>Teaches something good — manners, duas, letters, or values.</li>
  <li>No wild autoplay into unrelated content.</li>
</ul>

<p>Watch with your little one, keep it short, and let the screen be a bridge to good habits in real life.</p>`,
    },
    tags: ["screen-time", "parenting", "youtube", "tontonan-anak", "panduan"],
    published: "2026-06-22",
    updated: "2026-06-22",
    readingTimeMin: 5,
    author: "tim-baby-mo",
    faq: [
      {
        question: { id: "Bagaimana cara menonton YouTube tanpa iklan untuk anak?", en: "How can kids watch YouTube without ads?" },
        answer: {
          id: "Gunakan aplikasi YouTube Kids dengan kontrol orang tua, atau YouTube Premium untuk bebas iklan. Untuk tontonan yang benar-benar tanpa iklan, gunakan <a href=\"/_/permainan/\">permainan</a> dan <a href=\"/_/doa/\">doa</a> di babymo.id / play.babymo.id yang memang dibuat tanpa iklan.",
          en: "Use the YouTube Kids app with parental controls, or YouTube Premium for ad-free viewing. For a truly ad-free experience, use the <a href=\"/_/permainan/\">games</a> and <a href=\"/_/doa/\">duas</a> on babymo.id / play.babymo.id, which are built without ads.",
        },
      },
      {
        question: { id: "Apakah YouTube Kids aman untuk anak?", en: "Is YouTube Kids safe for children?" },
        answer: {
          id: "Lebih aman daripada YouTube biasa karena ada kontrol orang tua, timer, dan kurasi konten. Tetap disarankan menemani anak dan memilih channel yang sesuai nilai keluarga.",
          en: "Safer than regular YouTube thanks to parental controls, timers, and content curation. Co-viewing and choosing channels aligned with your values is still recommended.",
        },
      },
      {
        question: { id: "Channel YouTube islami untuk anak yang aman apa?", en: "Which Islamic YouTube channel for kids is safe?" },
        answer: {
          id: "Baby Mo (@babymo.official) menyediakan doa harian, lagu islami, dan game edukatif yang tenang dan ramah anak — bisa ditonton di YouTube dan dimainkan tanpa iklan di babymo.id.",
          en: "Baby Mo (@babymo.official) offers calm, child-friendly daily duas, Islamic songs, and educational games — watch on YouTube and play ad-free on babymo.id.",
        },
      },
    ],
  },
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

<p>Mau yang lebih tenang? Pelajari <a href="/_/doa/">doa harian</a> atau tonton <a href="/_/blog/video-edukasi-anak-islami-baby-mo/">video edukasi Baby Mo</a>.</p>

<h2>Panduan lengkap per game</h2>
<p>Setiap game punya panduannya sendiri — apa yang dilatih, cara main bersama, dan tips untuk Ayah &amp; Bunda:</p>
<ul>
  <li><a href="/_/blog/game-kenalan-baby-mo-puzzle/">Kenalan Baby Mo</a></li>
  <li><a href="/_/blog/game-doa-harian-anak/">Doa Harian</a></li>
  <li><a href="/_/blog/game-dua-journey-mencocokkan-doa/">Dua Journey</a></li>
  <li><a href="/_/blog/game-kata-islam-menyusun-kata-arab/">Kata Islam</a></li>
  <li><a href="/_/blog/game-belajar-hijaiyah-anak/">Huruf Hijaiyah</a></li>
  <li><a href="/_/blog/game-cari-baby-mo-look-and-find/">Cari Baby Mo</a></li>
  <li><a href="/_/blog/game-memory-match-islami-anak/">Memory Match</a></li>
  <li><a href="/_/blog/game-forehand-beat-ritme-anak/">Forehand Beat</a></li>
  <li><a href="/_/blog/game-kata-baik-kalimat-thayyibah/">Kata Baik</a></li>
  <li><a href="/_/blog/game-dreamtime-rutinitas-tidur-anak/">Baby Mo Dreamtime</a></li>
  <li><a href="/_/blog/game-wudhu-bareng-mo/">Wudhu Bareng Mo</a></li>
  <li><a href="/_/blog/game-pray-with-mo-panduan-sholat/">Pray with Mo</a></li>
  <li><a href="/_/blog/streak-sholat-mo-jadwal-sholat-anak/">Streak Sholat Mo</a></li>
</ul>`,
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

<p>Prefer something calmer? Learn the <a href="/_/doa/">daily duas</a> or watch <a href="/_/blog/video-edukasi-anak-islami-baby-mo/">Baby Mo’s educational videos</a>.</p>

<h2>A full guide for every game</h2>
<p>Each game has its own guide — what it builds, how to play together, and tips for parents:</p>
<ul>
  <li><a href="/_/blog/game-kenalan-baby-mo-puzzle/">Meet Baby Mo</a></li>
  <li><a href="/_/blog/game-doa-harian-anak/">Daily Du'as</a></li>
  <li><a href="/_/blog/game-dua-journey-mencocokkan-doa/">Dua Journey</a></li>
  <li><a href="/_/blog/game-kata-islam-menyusun-kata-arab/">Islamic Words</a></li>
  <li><a href="/_/blog/game-belajar-hijaiyah-anak/">Hijaiyah Letters</a></li>
  <li><a href="/_/blog/game-cari-baby-mo-look-and-find/">Find Baby Mo</a></li>
  <li><a href="/_/blog/game-memory-match-islami-anak/">Memory Match</a></li>
  <li><a href="/_/blog/game-forehand-beat-ritme-anak/">Forehand Beat</a></li>
  <li><a href="/_/blog/game-kata-baik-kalimat-thayyibah/">Kind Words</a></li>
  <li><a href="/_/blog/game-dreamtime-rutinitas-tidur-anak/">Baby Mo Dreamtime</a></li>
  <li><a href="/_/blog/game-wudhu-bareng-mo/">Wudu with Mo</a></li>
  <li><a href="/_/blog/game-pray-with-mo-panduan-sholat/">Pray with Mo</a></li>
  <li><a href="/_/blog/streak-sholat-mo-jadwal-sholat-anak/">Prayer Streak with Mo</a></li>
</ul>`,
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

<style>.gmp-shot{margin:1.4em auto;max-width:300px;text-align:center}.gmp-shot img,.gmp-shot video{width:100%;height:auto;border-radius:22px;border:1px solid var(--color-hairline);box-shadow:0 16px 36px -16px rgba(0,0,0,.45);display:block}.gmp-shot figcaption{margin-top:8px;font-size:12px;color:var(--color-whisper)}</style>
<figure class="gmp-shot"><video src="/_img/games/video/id-cari-baby-mo.mp4" poster="/_img/games/video/id-cari-baby-mo.webp" autoplay muted loop playsinline preload="metadata" width="540" height="960" aria-label="Video game Cari Baby Mo"></video><figcaption>Temukan benda-benda dan Baby Mo yang ngumpet 🔍</figcaption></figure>
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

<style>.gmp-shot{margin:1.4em auto;max-width:300px;text-align:center}.gmp-shot img,.gmp-shot video{width:100%;height:auto;border-radius:22px;border:1px solid var(--color-hairline);box-shadow:0 16px 36px -16px rgba(0,0,0,.45);display:block}.gmp-shot figcaption{margin-top:8px;font-size:12px;color:var(--color-whisper)}</style>
<figure class="gmp-shot"><video src="/_img/games/video/en-cari-baby-mo.mp4" poster="/_img/games/video/en-cari-baby-mo.webp" autoplay muted loop playsinline preload="metadata" width="540" height="960" aria-label="Find Baby Mo game video"></video><figcaption>Find the objects — and Baby Mo hiding 🔍</figcaption></figure>
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
    updated: "2026-11-13",
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

<style>.gmp-shot{margin:1.4em auto;max-width:300px;text-align:center}.gmp-shot img,.gmp-shot video{width:100%;height:auto;border-radius:22px;border:1px solid var(--color-hairline);box-shadow:0 16px 36px -16px rgba(0,0,0,.45);display:block}.gmp-shot figcaption{margin-top:8px;font-size:12px;color:var(--color-whisper)}</style>
<figure class="gmp-shot"><video src="/_img/games/video/id-hijaiyah.mp4" poster="/_img/games/video/id-hijaiyah.webp" autoplay muted loop playsinline preload="metadata" width="540" height="960" aria-label="Video game Pulau Hijaiyah"></video><figcaption>Jelajahi pulau dan temukan 28 huruf hijaiyah 🏝️</figcaption></figure>
<style>.gmp-play{display:inline-block;margin:.4em 0;padding:12px 22px;border-radius:999px;background:linear-gradient(135deg,#3FD08C,#1FA971);color:#fff!important;font-weight:800;text-decoration:none!important;box-shadow:0 8px 20px -8px rgba(31,169,113,.55);}</style>

<h2>Lihat di dalam game</h2>
<p>Beginilah tampilan game Huruf Hijaiyah Baby Mo — bersih, ceria, dan mudah diikuti si kecil.</p>
<div class="hsg">
  <figure><img src="/_img/blog/hijaiyah-welcome.jpg" alt="Layar pembuka game Huruf Hijaiyah Baby Mo dengan 28 huruf Arab" width="412" height="840" loading="lazy"><figcaption>Layar pembuka — 28 huruf menanti 🌟</figcaption></figure>
  <figure><img src="/_img/blog/hijaiyah-lessons.jpg" alt="Peta pelajaran huruf hijaiyah yang dibagi bertahap per jilid" width="412" height="840" loading="lazy"><figcaption>Pelajaran bertahap per jilid</figcaption></figure>
  <figure><img src="/_img/blog/hijaiyah-letter-card.jpg" alt="Kartu huruf Alif berukuran besar dengan tombol Dengar Huruf" width="412" height="560" loading="lazy"><figcaption>Kartu huruf + tombol suara 🔊</figcaption></figure>
  <figure><img src="/_img/blog/hijaiyah-quiz.jpg" alt="Kuis menebak nama huruf hijaiyah dengan tiga nyawa" width="412" height="520" loading="lazy"><figcaption>Kuis seru dengan nyawa ❤️</figcaption></figure>
</div>
<style>
.hsg{display:grid;grid-template-columns:repeat(4,1fr);gap:12px;margin:1.2em 0;align-items:start;}
.hsg figure{margin:0;}
.hsg img{width:100%;height:auto;border-radius:16px;border:1px solid var(--color-hairline);box-shadow:0 12px 28px -14px rgba(0,0,0,.4);display:block;}
.hsg figcaption{margin-top:7px;font-size:11.5px;color:var(--color-whisper);text-align:center;line-height:1.35;}
@media(max-width:560px){.hsg{grid-template-columns:repeat(2,1fr);}}
</style>

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

<style>.gmp-shot{margin:1.4em auto;max-width:300px;text-align:center}.gmp-shot img,.gmp-shot video{width:100%;height:auto;border-radius:22px;border:1px solid var(--color-hairline);box-shadow:0 16px 36px -16px rgba(0,0,0,.45);display:block}.gmp-shot figcaption{margin-top:8px;font-size:12px;color:var(--color-whisper)}</style>
<figure class="gmp-shot"><video src="/_img/games/video/en-hijaiyah.mp4" poster="/_img/games/video/en-hijaiyah.webp" autoplay muted loop playsinline preload="metadata" width="540" height="960" aria-label="Hijaiyah Island game video"></video><figcaption>Explore the island and find all 28 letters 🏝️</figcaption></figure>
<style>.gmp-play{display:inline-block;margin:.4em 0;padding:12px 22px;border-radius:999px;background:linear-gradient(135deg,#3FD08C,#1FA971);color:#fff!important;font-weight:800;text-decoration:none!important;box-shadow:0 8px 20px -8px rgba(31,169,113,.55);}</style>

<h2>A look inside the game</h2>
<p>Here is what Baby Mo’s Hijaiyah Letters game looks like — clean, cheerful, and easy for little ones to follow.</p>
<div class="hsg">
  <figure><img src="/_img/blog/hijaiyah-welcome.jpg" alt="Welcome screen of Baby Mo’s Hijaiyah Letters game with 28 Arabic letters" width="412" height="840" loading="lazy"><figcaption>Welcome screen — 28 letters await 🌟</figcaption></figure>
  <figure><img src="/_img/blog/hijaiyah-lessons.jpg" alt="Hijaiyah lesson path split into gradual levels" width="412" height="840" loading="lazy"><figcaption>Step-by-step lessons by level</figcaption></figure>
  <figure><img src="/_img/blog/hijaiyah-letter-card.jpg" alt="Large Alif letter card with a Listen button" width="412" height="560" loading="lazy"><figcaption>Letter card + sound button 🔊</figcaption></figure>
  <figure><img src="/_img/blog/hijaiyah-quiz.jpg" alt="Quiz guessing the name of a hijaiyah letter with three lives" width="412" height="520" loading="lazy"><figcaption>A fun quiz with lives ❤️</figcaption></figure>
</div>
<style>
.hsg{display:grid;grid-template-columns:repeat(4,1fr);gap:12px;margin:1.2em 0;align-items:start;}
.hsg figure{margin:0;}
.hsg img{width:100%;height:auto;border-radius:16px;border:1px solid var(--color-hairline);box-shadow:0 12px 28px -14px rgba(0,0,0,.4);display:block;}
.hsg figcaption{margin-top:7px;font-size:11.5px;color:var(--color-whisper);text-align:center;line-height:1.35;}
@media(max-width:560px){.hsg{grid-template-columns:repeat(2,1fr);}}
</style>

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
    updated: "2026-11-13",
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

<h2>Kenapa main bareng anak itu penting?</h2>
<p>Menemani anak bermain mengubah waktu layar yang pasif menjadi momen berharga bersama. Ini bukan soal mengawasi, tapi terhubung.</p>
<ul>
  <li><strong>Mempererat ikatan.</strong> Tertawa dan menang bersama membangun rasa aman pada anak.</li>
  <li><strong>Menumbuhkan bahasa.</strong> Saat Anda menyebut benda dan mengajukan pertanyaan, kosakata anak bertambah cepat.</li>
  <li><strong>Anak meniru cara berpikir Anda.</strong> “Hmm, coba kita lihat pelan-pelan…” mengajarkan kesabaran dan strategi.</li>
  <li><strong>Layar jadi interaktif, bukan menyendiri.</strong> Bermain bersama menjaga durasi tetap wajar dan terarah.</li>
</ul>

<h2>Cara bermain bersama</h2>
<ol>
  <li><strong>Duduk berdampingan.</strong> Jeda videonya, ajak anak menunjuk layar saat menemukan perbedaan.</li>
  <li><strong>Beri petunjuk, bukan jawaban.</strong> “Coba lihat bagian atas…” lebih melatih daripada langsung menunjuk.</li>
  <li><strong>Rayakan setiap temuan.</strong> Tepuk tangan kecil membuat anak ingin lanjut.</li>
</ol>

<h2>Ide seru main bareng</h2>
<ul>
  <li><strong>Bergantian.</strong> Anak menemukan satu, lalu giliran Anda — adil dan menyenangkan.</li>
  <li><strong>Lomba ramah.</strong> Pakai hitungan mundur: berapa yang ketemu sebelum waktu habis?</li>
  <li><strong>Sebutkan bendanya.</strong> Bukan sekadar menunjuk — “kucing oranye!” untuk menambah kosakata.</li>
  <li><strong>Hitung bersama.</strong> “Ada berapa perbedaan semuanya?” sambil belajar berhitung.</li>
  <li><strong>Buat versi sendiri di rumah.</strong> Susun dua baris mainan yang mirip, ubah satu, lalu minta anak mencari perbedaannya.</li>
  <li><strong>Ceritakan gambarnya.</strong> “Menurutmu Baby Mo sedang apa di sini?” untuk melatih imajinasi &amp; bercerita.</li>
</ul>

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

<h2>Why play together?</h2>
<p>Joining in turns passive screen time into a precious shared moment. It's not about supervising — it's about connecting.</p>
<ul>
  <li><strong>Strengthens your bond.</strong> Laughing and winning together builds a child's sense of safety.</li>
  <li><strong>Grows language.</strong> As you name things and ask questions, your child's vocabulary expands fast.</li>
  <li><strong>Kids copy how you think.</strong> “Hmm, let's look slowly…” teaches patience and strategy.</li>
  <li><strong>Screen time becomes interactive, not isolating.</strong> Playing together keeps it reasonable and purposeful.</li>
</ul>

<h2>How to play together</h2>
<ol>
  <li><strong>Sit side by side.</strong> Pause the video and let your child point at the screen when they spot a difference.</li>
  <li><strong>Give hints, not answers.</strong> “Look near the top…” trains more than pointing it out.</li>
  <li><strong>Celebrate each find.</strong> A little clap makes them want to continue.</li>
</ol>

<h2>Fun ideas to play together</h2>
<ul>
  <li><strong>Take turns.</strong> Your child finds one, then it's your turn — fair and fun.</li>
  <li><strong>Friendly race.</strong> Use a countdown: how many can you find before time's up?</li>
  <li><strong>Name it.</strong> Not just pointing — “the orange cat!” to grow vocabulary.</li>
  <li><strong>Count together.</strong> “How many differences in total?” while practicing numbers.</li>
  <li><strong>Make your own at home.</strong> Lay out two near-identical rows of toys, change one, and let your child spot it.</li>
  <li><strong>Tell the picture's story.</strong> “What do you think Baby Mo is doing here?” to build imagination &amp; storytelling.</li>
</ul>

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
    updated: "2026-09-12",
    readingTimeMin: 6,
    author: "tim-baby-mo",
    faq: [
      {
        question: {
          id: "Apa doa awal tahun Hijriyah yang shahih untuk anak?",
          en: "What is the authentic Islamic New Year du'a to teach a child?",
        },
        answer: {
          id: "Yang paling shahih dan jelas sanadnya adalah <strong>doa melihat bulan sabit baru</strong>: \"Allahumma ahillahu 'alayna bil-amni wal-iman, was-salamati wal-islam, rabbi wa rabbukallah\" — \"Ya Allah, tampakkanlah bulan ini kepada kami dengan keamanan dan keimanan, keselamatan dan Islam\" (HR. Tirmidzi 3451, hasan). Ajarkan doa ini dulu kepada anak; sudah cukup.",
          en: "The most authentic, clearly-chained one is the <strong>du'a for sighting the new crescent</strong>: \"Allahumma ahillahu 'alayna bil-amni wal-iman, was-salamati wal-islam, rabbi wa rabbukallah\" — \"O Allah, bring it over us with security and faith, safety and Islam\" (Tirmidhi 3451, hasan). Teach a child this first; it's enough.",
        },
      },
      {
        question: {
          id: "Apakah doa \"Allahumma anta al-abadiyyul qadim\" itu sunnah?",
          en: "Is the popular \"Allahumma anta al-abadiyyul qadim\" du'a from the Sunnah?",
        },
        answer: {
          id: "Doa \"awal tahun\" yang viral itu <strong>sanadnya diperdebatkan</strong> para ulama — sebagian menerimanya sebagai amal baik tanpa keyakinan sunnah, sebagian menolak. Sikap kami: ajarkan yang <em>paling shahih</em> dulu (doa melihat bulan sabit). Doa lain bisa diperkenalkan setelah anak besar dan mampu memahami diskusi sanad.",
          en: "That viral \"new year\" du'a has a <strong>disputed chain</strong> — some scholars accept it as a good deed without claiming it's Sunnah, others reject it. Our stance: teach the <em>most authentic</em> one first (the crescent du'a). Others can wait until the child is older and can grasp the discussion.",
        },
      },
      {
        question: {
          id: "Bagaimana menandai tahun baru Hijriyah untuk anak kecil?",
          en: "How do I make the Islamic New Year meaningful for a young child?",
        },
        answer: {
          id: "Anak kecil tidak butuh penjelasan fiqih panjang — mereka butuh <strong>momen yang terasa istimewa</strong>. Tandai malam munculnya bulan sabit dengan doa bersama, sarapan spesial, atau menempel kalender Hijriyah di kulkas. Anak belajar bahwa waktu dihitung dengan cara berbeda: dengan bulan, dengan hijrah, dengan ibadah.",
          en: "Young children don't need long fiqh — they need a <strong>moment that feels special</strong>. Mark the crescent night with a shared du'a, a special breakfast, or a Hijri calendar on the fridge. The child learns that time can be counted differently: by the moon, by the Hijrah, by worship.",
        },
      },
    ],
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
    updated: "2026-09-12",
    readingTimeMin: 7,
    author: "tim-baby-mo",
    faq: [
      {
        question: {
          id: "Apa saja aktivitas Muharram yang bisa dilakukan bersama anak?",
          en: "What Muharram activities can I do with my kids?",
        },
        answer: {
          id: "Beberapa yang mudah: <strong>kalender Hijriyah di kulkas</strong> (anak mencoret tanggal tiap pagi), <strong>menyebut tanggal Hijriyah</strong> dalam doa harian, <strong>cerita hijrah Nabi</strong> seminggu sekali, <strong>persiapan puasa Asyura</strong> (10 Muharram), dan <strong>sedekah pertama tahun</strong>. Tidak perlu semua — pilih dua atau tiga yang cocok dengan ritme keluargamu.",
          en: "Easy ones: a <strong>Hijri calendar on the fridge</strong> (the child crosses off each morning), <strong>naming the Hijri date</strong> in daily du'as, a weekly <strong>Hijrah story</strong>, <strong>preparing for the Ashura fast</strong> (10 Muharram), and a <strong>first charity of the year</strong>. You don't need all of them — pick two or three that fit your family's rhythm.",
        },
      },
      {
        question: {
          id: "Kenapa bulan Muharram istimewa dalam Islam?",
          en: "Why is Muharram a special month in Islam?",
        },
        answer: {
          id: "Muharram adalah salah satu dari <strong>empat bulan haram (suci)</strong> yang Allah sebut secara eksplisit dalam Al-Qur'an: Dzulqa'dah, Dzulhijjah, Muharram, dan Rajab (QS. At-Taubah 9:36). Ini bulan yang dimuliakan — waktu yang baik untuk memperbanyak kebaikan bersama anak.",
          en: "Muharram is one of the <strong>four sacred months</strong> Allah names explicitly in the Qur'an: Dhul-Qa'dah, Dhul-Hijjah, Muharram, and Rajab (At-Tawbah 9:36). It's an honored month — a good time to increase good deeds together with children.",
        },
      },
      {
        question: {
          id: "Apakah anak harus melakukan semua amalan Muharram?",
          en: "Do children need to do every Muharram practice?",
        },
        answer: {
          id: "Tidak. Tujuannya bukan kesempurnaan tapi <strong>menanam memori bahwa bulan ini berbeda</strong>. Pilih dua atau tiga aktivitas ringan dan lakukan konsisten. Aktivitas 5 detik seperti mencoret kalender pun efeknya bisa seumur hidup.",
          en: "No. The goal isn't perfection but <strong>planting the memory that this month is different</strong>. Pick two or three light activities and do them consistently. Even a 5-second habit like crossing off a calendar can have a lifelong effect.",
        },
      },
    ],
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
    updated: "2026-09-12",
    readingTimeMin: 8,
    author: "tim-baby-mo",
    faq: [
      {
        question: {
          id: "Tahun baru Islam dihitung sejak peristiwa apa?",
          en: "What event marks the start of the Islamic calendar?",
        },
        answer: {
          id: "Sejak <strong>hijrahnya Nabi ﷺ dari Makkah ke Madinah</strong> — bukan dari kelahiran beliau dan bukan dari wahyu pertama. Itulah kenapa kalender ini disebut kalender Hijriyah. Tiga inti yang perlu anak pahami: muslim punya kalender sendiri (paralel dengan Masehi), dihitung sejak hijrah, dan bulan pertamanya Muharram — salah satu bulan haram.",
          en: "From the <strong>Prophet's ﷺ migration (Hijrah) from Makkah to Madinah</strong> — not his birth, not the first revelation. That's why it's the Hijri calendar. Three ideas for a child: Muslims have their own calendar (parallel to the Gregorian one), counted from the Hijrah, and its first month is Muharram — a sacred month.",
        },
      },
      {
        question: {
          id: "Bagaimana menjelaskan tahun baru Islam ke anak usia 3–5 tahun?",
          en: "How do I explain the Islamic New Year to a 3–5 year old?",
        },
        answer: {
          id: "Gunakan bahasa <strong>konkret dan singkat</strong>, hindari kata abstrak seperti \"kalender\" atau \"hijrah\" tanpa konteks. Contoh: \"Ada dua tahun baru. Satu, 1 Januari, dirayakan dengan kembang api. Satu lagi, 1 Muharram, tahun barunya muslim — tidak ada kembang api, tapi ada doa dan makan enak. Mau bantu Mama bikin sarapan istimewa besok?\"",
          en: "Use <strong>concrete, short</strong> language; avoid abstract words like \"calendar\" or \"Hijrah\" without context. Try: \"There are two new years. One, January 1, has fireworks. The other, 1 Muharram, is the Muslims' new year — no fireworks, but we have du'a and good food. Want to help make a special breakfast tomorrow?\"",
        },
      },
      {
        question: {
          id: "Apakah harus melarang anak merayakan tahun baru Masehi?",
          en: "Should I forbid my child from the Gregorian new year?",
        },
        answer: {
          id: "Tidak perlu melarang. Caranya bukan melarang yang satu, tapi <strong>membuat tahun baru Islam masuk akal</strong> dan terasa bermakna bagi anak. Tanpa penjelasan, anak menyimpulkan sendiri bahwa yang lebih ramai lebih penting — jadi tugas kita memberi makna, bukan sekadar larangan.",
          en: "No need to forbid it. The approach isn't banning one but <strong>making the Islamic New Year make sense</strong> and feel meaningful. Without explanation, a child assumes the louder one matters more — so our job is to give meaning, not just prohibition.",
        },
      },
    ],
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
    updated: "2026-09-12",
    readingTimeMin: 7,
    author: "tim-baby-mo",
    faq: [
      {
        question: {
          id: "Kapan puasa Asyura dilaksanakan?",
          en: "When is the fast of Ashura?",
        },
        answer: {
          id: "Puasa Asyura jatuh pada <strong>10 Muharram</strong>. Dianjurkan juga berpuasa pada <strong>9 Muharram (Tasu'a)</strong> agar berbeda dengan praktik Yahudi yang hanya berpuasa tanggal 10 — jadi bisa puasa 9 & 10, atau 10 & 11, atau ketiganya.",
          en: "Ashura falls on the <strong>10th of Muharram</strong>. It's also recommended to fast the <strong>9th (Tasu'a)</strong> to differ from the Jewish practice of fasting only the 10th — so you may fast the 9th & 10th, the 10th & 11th, or all three.",
        },
      },
      {
        question: {
          id: "Apa keutamaan puasa Asyura?",
          en: "What is the reward of fasting Ashura?",
        },
        answer: {
          id: "Puasa Asyura adalah <strong>sunnah muakkadah</strong> (sangat dianjurkan) dan <strong>mengampuni dosa setahun yang lalu</strong> (HR. Muslim 1162) — yakni dosa-dosa kecil, dengan syarat menjauhi dosa besar.",
          en: "Fasting Ashura is a <strong>strongly recommended (muakkadah) sunnah</strong> and <strong>expiates the sins of the previous year</strong> (Muslim 1162) — meaning minor sins, provided major ones are avoided.",
        },
      },
      {
        question: {
          id: "Apakah anak wajib puasa Asyura?",
          en: "Are children obligated to fast on Ashura?",
        },
        answer: {
          id: "Tidak. Anak yang belum baligh <strong>tidak diwajibkan puasa apa pun</strong> — termasuk Ramadan, apalagi Asyura. Tapi melatih sejak usia 5–7 tahun adalah sunnah. Para sahabat di Madinah membiasakan anak berpuasa Asyura dan memberi mainan dari bulu domba — saat anak lapar, mereka bermain. Prinsipnya: latih, jangan paksa.",
          en: "No. A child before puberty is <strong>not obligated to fast at all</strong> — not even Ramadan, let alone Ashura. But training from ages 5–7 is Sunnah. The Companions in Madinah had children fast Ashura and gave them wool toys — when they got hungry, they'd play. The principle: train, don't force.",
        },
      },
      {
        question: {
          id: "Apa sejarah Asyura yang bisa diceritakan ke anak?",
          en: "What Ashura story can I tell my child?",
        },
        answer: {
          id: "Saat Rasulullah ﷺ hijrah ke Madinah, beliau melihat orang Yahudi berpuasa pada 10 Muharram karena itu <strong>hari Allah menyelamatkan Nabi Musa dan Bani Israil dari Firaun</strong>. Beliau bersabda, \"Aku lebih berhak atas Musa daripada kalian,\" lalu berpuasa dan memerintahkan kaum muslimin berpuasa (HR. Bukhari 2004, Muslim 1130). Anak menyukai kisah ini: Musa, Firaun, laut yang terbelah, lalu syukur kepada Allah.",
          en: "When the Prophet ﷺ migrated to Madinah, he saw Jews fasting on 10 Muharram because it was <strong>the day Allah saved Prophet Musa and the Israelites from Pharaoh</strong>. He said, \"I have more right to Musa than you,\" then fasted and told the Muslims to fast (Bukhari 2004, Muslim 1130). Children love this story: Musa, Pharaoh, the parting sea, then gratitude to Allah.",
        },
      },
    ],
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
    updated: "2026-09-12",
    readingTimeMin: 9,
    author: "tim-baby-mo",
    faq: [
      {
        question: {
          id: "Kenapa kalender Islam dimulai dari hijrah, bukan dari kelahiran Nabi?",
          en: "Why does the Islamic calendar start from the Hijrah, not the Prophet's birth?",
        },
        answer: {
          id: "Karena <strong>hijrah adalah ujian terbesar</strong> yang dilalui umat Islam awal — dan dari ujian itu sebuah komunitas (Madinah) tumbuh. Bukan kelahiran Nabi ﷺ, bukan wahyu pertama, tapi peristiwa yang menandai lahirnya masyarakat muslim yang dipilih sebagai titik awal penanggalan.",
          en: "Because the <strong>Hijrah was the greatest test</strong> the early Muslims passed — and from it a community (Madinah) grew. Not the Prophet's ﷺ birth, not the first revelation, but the event that marked the birth of the Muslim society was chosen as the starting point.",
        },
      },
      {
        question: {
          id: "Bagaimana cara menceritakan kisah hijrah ke anak?",
          en: "How do I tell the Hijrah story to a child?",
        },
        answer: {
          id: "Gunakan <strong>struktur tiga babak</strong> yang anak suka: (1) <strong>Makkah yang makin sulit</strong> — kaum Quraisy mengganggu; (2) <strong>perjalanan bersama Abu Bakar</strong> — persiapan rahasia, Ali menjadi umpan, persembunyian di gua Tsur; (3) <strong>tiba di Madinah</strong> dan komunitas baru. Kaitkan dengan perasaan anak: \"Bayangkan kalau adik harus pindah karena ada yang terus mengganggu — susah, ya? Itu yang Nabi rasakan.\"",
          en: "Use a <strong>three-act structure</strong> children love: (1) <strong>Makkah growing harder</strong> — Quraysh persecution; (2) <strong>the journey with Abu Bakr</strong> — secret prep, Ali as a decoy, hiding in the Cave of Thawr; (3) <strong>arrival in Madinah</strong> and a new community. Connect it to feelings: \"Imagine having to move because someone kept bothering you — hard, right? That's what the Prophet felt.\"",
        },
      },
      {
        question: {
          id: "Siapa yang tidur di tempat tidur Nabi ﷺ saat malam hijrah?",
          en: "Who slept in the Prophet's ﷺ bed on the night of the Hijrah?",
        },
        answer: {
          id: "<strong>Ali bin Abi Thalib</strong>, sepupu Nabi yang masih muda, tidur di tempat tidur beliau sebagai umpan agar para pengejar mengira Nabi ﷺ masih di rumah. Ini contoh keberanian anak muda yang bagus untuk diceritakan.",
          en: "<strong>Ali ibn Abi Talib</strong>, the Prophet's young cousin, slept in his bed as a decoy so the pursuers would think the Prophet ﷺ was still home. It's a great example of youthful courage to share.",
        },
      },
    ],
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
    updated: "2026-09-12",
    readingTimeMin: 7,
    author: "tim-baby-mo",
    kit: {
      quote: {
        id: "Sepuluh hari pertama Dzulhijjah adalah hari-hari yang amal salehnya paling dicintai Allah (HR. Bukhari 969). Untuk anak, ini bukan soal mengikuti semua amalan dewasa — tapi menanam memori bahwa hari-hari ini istimewa.",
        en: "The first ten days of Dhul-Hijjah are days when good deeds are most beloved to Allah (Bukhari 969). For a child, it's not about matching adult worship — it's about planting the memory that these days are special.",
      },
      carousel: {
        id: [
          { title: "10 Hari Dzulhijjah Bareng Anak — 1/7", body: "Rasulullah ﷺ bersabda: amal saleh di 10 hari ini lebih dicintai Allah daripada hari lain (HR. Bukhari 969). Panduan hari-per-hari." },
          { title: "Hari 1–3: Bangun suasana", body: "Belum perlu puasa. Ceritakan kisah Ibrahim & Ismail sesuai usia. Dekorasi ringan. Mulai biasakan takbir setelah sholat." },
          { title: "Hari 4–6: Latihan puasa pendek", body: "Anak 5+ yang penasaran: coba puasa setengah hari (sahur–Dzuhur). Bukan kewajiban, bukan ujian. Sediakan aktivitas agar lupa lapar." },
          { title: "Hari Arafah (9 Dzulhijjah)", body: "Puncak spiritual. Untuk anak: ceritakan jutaan jamaah wukuf di Arafah. Perbanyak doa bersama, sebut nama anak dalam doamu." },
          { title: "Idul Adha (10 Dzulhijjah)", body: "Sholat Ied bersama, baju terbaik, takbir. Libatkan anak melihat proses kurban — napak tilas Nabi Ibrahim ﷺ." },
          { title: "Hari Tasyriq (11–13)", body: "Hari makan-makan dan bersyukur. Bagikan daging kurban bersama anak — pelajaran berbagi yang nyata." },
          { title: "Inti untuk anak", body: "Idul Adha berbeda dari Idul Fitri, dan kurban punya cerita yang dimulai dari cinta Ibrahim kepada Allah. Simpan & bagikan." },
        ],
        en: [
          { title: "10 Days of Dhul-Hijjah with Kids — 1/7", body: "The Prophet ﷺ said good deeds in these 10 days are more beloved to Allah than any other (Bukhari 969). A day-by-day guide." },
          { title: "Days 1–3: Build atmosphere", body: "No fasting needed. Tell the Ibrahim & Ismail story by age. Light decorations. Begin the takbir habit after prayer." },
          { title: "Days 4–6: Short fasting practice", body: "Curious 5+ kids: try a half-day fast (sahur–Dhuhr). Not an obligation, not a test. Offer activities to distract from hunger." },
          { title: "Day of Arafah (9th)", body: "The spiritual peak. For kids: describe millions of pilgrims at Arafah. Increase du'a together; name your child in your prayers." },
          { title: "Eid al-Adha (10th)", body: "Eid prayer together, best clothes, takbir. Let the child witness the qurbani — following Prophet Ibrahim's ﷺ example." },
          { title: "Days of Tashriq (11–13)", body: "Days of eating and gratitude. Distribute the qurbani meat with your child — a real lesson in sharing." },
          { title: "The core for kids", body: "Eid al-Adha differs from Eid al-Fitr, and the sacrifice has a story that began with Ibrahim's love for Allah. Save & share." },
        ],
      },
      shortScript: {
        id: `[0–3 detik] HOOK: Ada 10 hari yang amalnya lebih dicintai Allah daripada hari lain — dan kebanyakan keluarga melewatinya begitu saja.

[3–15 detik] MASALAH: 10 hari Dzulhijjah sering lewat tanpa terasa istimewa di rumah dengan anak kecil. Padahal ini momen emas.

[15–35 detik] SOLUSI: Hari 1–3 bangun suasana + cerita Nabi Ibrahim. Hari 4–6 latihan puasa setengah hari (opsional). Hari Arafah perbanyak doa. Idul Adha libatkan anak lihat kurban.

[35–55 detik] BUKTI: "Amal saleh di 10 hari ini lebih dicintai Allah" (HR. Bukhari 969). Untuk anak, tujuannya bukan sempurna — tapi menanam memori bahwa hari ini istimewa.

[55–60 detik] CTA: "Simpan panduan hari-per-hari ini sebelum Dzulhijjah."`,
        en: `[0–3s] HOOK: There are 10 days whose deeds are more beloved to Allah than any other — and most families let them slip by.

[3–15s] PROBLEM: The 10 days of Dhul-Hijjah often pass without feeling special in a home with young kids. Yet they're golden.

[15–35s] SOLUTION: Days 1–3 build atmosphere + the Ibrahim story. Days 4–6 optional half-day fasting. Day of Arafah, more du'a. Eid al-Adha, involve the child in the qurbani.

[35–55s] PROOF: "Good deeds in these 10 days are most beloved to Allah" (Bukhari 969). For a child the aim isn't perfection — it's planting the memory that these days are special.

[55–60s] CTA: "Save this day-by-day guide before Dhul-Hijjah."`,
      },
      pin: {
        id: {
          title: "10 Hari Dzulhijjah Bareng Anak: Panduan Hari-per-Hari",
          description: "Cara mengisi 10 hari pertama Dzulhijjah bersama anak menuju Idul Adha: suasana, takbir, latihan puasa, hari Arafah, dan kurban. Untuk keluarga muslim.",
        },
        en: {
          title: "10 Days of Dhul-Hijjah with Kids: A Day-by-Day Guide",
          description: "How to fill the first 10 days of Dhul-Hijjah with your child toward Eid al-Adha: atmosphere, takbir, fasting practice, Arafah, and qurbani. For Muslim families.",
        },
      },
      checklist: {
        id: [
          "Hari 1–3: cerita Nabi Ibrahim & Ismail sesuai usia anak",
          "Dekorasi ringan + mulai biasakan takbir setelah sholat",
          "Hari 4–6: latihan puasa setengah hari (opsional, anak 5+)",
          "Sediakan aktivitas agar anak lupa lapar (buku, jalan pagi)",
          "Hari Arafah (9): perbanyak doa, sebut nama anak",
          "Idul Adha (10): sholat Ied, baju terbaik, takbir",
          "Libatkan anak melihat proses kurban",
          "Hari Tasyriq (11–13): bagikan daging kurban bersama anak",
          "Tekankan bedanya Idul Adha & Idul Fitri",
          "Ceritakan kurban sebagai kisah cinta Ibrahim kepada Allah",
        ],
        en: [
          "Days 1–3: tell the Ibrahim & Ismail story by the child's age",
          "Light decorations + begin the takbir habit after prayer",
          "Days 4–6: half-day fasting practice (optional, ages 5+)",
          "Offer activities to distract from hunger (books, morning walk)",
          "Day of Arafah (9th): more du'a, name your child",
          "Eid al-Adha (10th): Eid prayer, best clothes, takbir",
          "Let the child witness the qurbani process",
          "Days of Tashriq (11–13): distribute the meat with your child",
          "Emphasize how Eid al-Adha differs from Eid al-Fitr",
          "Tell the sacrifice as Ibrahim's love story with Allah",
        ],
      },
    },
    faq: [
      {
        question: {
          id: "Kenapa 10 hari pertama Dzulhijjah istimewa?",
          en: "Why are the first 10 days of Dhul-Hijjah special?",
        },
        answer: {
          id: "Ini <strong>satu-satunya hari</strong> di mana Rasulullah ﷺ bersabda bahwa amal saleh padanya <strong>lebih dicintai Allah daripada hari-hari lain</strong> — bahkan melebihi jihad, kecuali orang yang berjihad dengan harta dan dirinya lalu tidak kembali (HR. Bukhari 969). Untuk keluarga, ini soal mengenalkan bahwa hari-hari ini istimewa.",
          en: "These are the <strong>only days</strong> the Prophet ﷺ described good deeds as <strong>more beloved to Allah than any others</strong> — even greater than jihad, except one who goes out with wealth and self and doesn't return (Bukhari 969). For families, it's about introducing that these days are special.",
        },
      },
      {
        question: {
          id: "Apa yang bisa dilakukan anak selama 10 hari Dzulhijjah?",
          en: "What can kids do during the 10 days of Dhul-Hijjah?",
        },
        answer: {
          id: "Panduan bertahap: <strong>Hari 1–3</strong> bangun suasana — cerita Nabi Ibrahim & Ismail, dekorasi ringan, mulai biasakan takbir; <strong>Hari 4–6</strong> latihan puasa setengah hari (opsional, untuk 5+), sediakan aktivitas agar lupa lapar; menjelang Idul Adha, libatkan anak dalam kurban dan sholat Ied. Sesuaikan dengan usia anak.",
          en: "A gradual guide: <strong>Days 1–3</strong> build atmosphere — the story of Ibrahim & Ismail, light decorations, begin the takbir habit; <strong>Days 4–6</strong> optional half-day fasting (ages 5+), with activities to distract from hunger; toward Eid al-Adha, involve the child in the qurbani and Eid prayer. Adapt to the child's age.",
        },
      },
      {
        question: {
          id: "Apakah anak wajib puasa di 10 hari Dzulhijjah?",
          en: "Must children fast during the first 10 days of Dhul-Hijjah?",
        },
        answer: {
          id: "Tidak wajib. Anak yang belum baligh tidak diwajibkan puasa. Puasa setengah hari (dari sahur sampai Dzuhur) untuk anak 5 tahun ke atas adalah <strong>latihan, bukan kewajiban atau ujian</strong> — bangunkan sahur dengan makanan yang anak suka, dan beri makanan favorit saat berbuka.",
          en: "Not obligatory. A child before puberty isn't required to fast. A half-day fast (sahur to Dhuhr) for ages 5+ is <strong>training, not an obligation or a test</strong> — wake them for sahur with food they like, and serve a favorite at iftar.",
        },
      },
    ],
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
    updated: "2026-09-12",
    readingTimeMin: 9,
    author: "tim-baby-mo",
    kit: {
      quote: {
        id: "Anak yang dipaksa sholat sering tumbuh menjadi dewasa yang menjauhinya. Rasulullah ﷺ sendiri tidak pernah memerintahkan sholat pada anak kecil — beliau memberi waktu tujuh tahun untuk mengenal, dan tiga tahun lagi untuk terbiasa. Yang lembut justru yang paling sesuai sunnah.",
        en: "A child forced to pray often becomes an adult who avoids it. The Prophet ﷺ never commanded young children to pray — he gave seven years to get to know it, and three more to grow used to it. The gentle way is the one truest to the Sunnah.",
      },
      carousel: {
        id: [
          { title: "Mengajarkan Sholat Tanpa Paksaan — 1/7", body: "Rasulullah ﷺ tidak pernah memaksa anak kecil sholat. Beliau memberi kerangka waktu yang jauh lebih lembut dari yang kebanyakan orang tua terapkan." },
          { title: "Apa yang benar-benar diperintahkan", body: "\"Perintahkan anak sholat di usia tujuh, tegur di usia sepuluh\" (HR. Abu Dawud 495). Tujuh = awal pengenalan, bukan kewajiban penuh. Ada 3 tahun jeda untuk membentuk kebiasaan." },
          { title: "Usia 3–4: Cukup mengamati", body: "Jangan ajarkan apa pun. Biarkan anak melihat ayah rukuk dan ibu sujud setiap hari. Ia menyerap: ini bagian hidup, seperti makan dan tidur." },
          { title: "Usia 5–6: Mulai gerakan", body: "Takbir, rukuk, sujud. Ajarkan takbiratul ihram + satu surat pendek (Al-Ikhlas). Beri sajadah yang anak pilih sendiri." },
          { title: "Usia 7: Lima waktu — bertahap", body: "Bulan 1–2: Maghrib & Isya. Bulan 3–4: tambah Subuh. Bulan 5–6: tambah Dzuhur. Bulan 7+: lengkap. Bukan sakelar yang tiba-tiba menyala." },
          { title: "Lima hal yang harus dihindari", body: "Membandingkan dengan anak lain. Mempermalukan di depan tamu. Membentak saat salah gerakan. Menjadikan sholat hukuman. Memberi imbalan materi besar." },
          { title: "Yang paling penting", body: "Anak meniru, bukan mendengar. Sholat anakmu dimulai dari sholatmu sendiri. Simpan & bagikan ke orang tua muslim yang lain." },
        ],
        en: [
          { title: "Teaching Salah Without Force — 1/7", body: "The Prophet ﷺ never forced young children to pray. He set a timeline far gentler than what most parents enforce." },
          { title: "What was actually commanded", body: "\"Command children to pray at seven, correct them at ten\" (Abu Dawud 495). Seven = the start of introduction, not full obligation. There's a 3-year window to build the habit." },
          { title: "Ages 3–4: Just let them watch", body: "Teach nothing. Let the child see father bow and mother prostrate daily. They absorb: this is part of life, like eating and sleeping." },
          { title: "Ages 5–6: Begin the movements", body: "Takbir, ruku, sujud. Teach takbiratul ihram + one short surah (Al-Ikhlas). Give them a prayer mat they choose themselves." },
          { title: "Age 7: Five prayers — gradually", body: "Months 1–2: Maghrib & Isha. Months 3–4: add Fajr. Months 5–6: add Dhuhr. Month 7+: complete. It's not a switch that flips at once." },
          { title: "Five things to avoid", body: "Comparing to other kids. Shaming in front of guests. Yelling at mistakes. Using prayer as punishment. Big material rewards." },
          { title: "The most important thing", body: "Children imitate, they don't listen. Your child's prayer begins with your own. Save & share with another Muslim parent." },
        ],
      },
      shortScript: {
        id: `[0–3 detik] HOOK: Kesalahan #1 orang tua soal sholat anak: memaksa terlalu cepat.

[3–15 detik] MASALAH: Anak yang dipaksa sholat di usia 5–6 sering jadi dewasa yang menjauhinya. Padahal Rasulullah ﷺ tidak pernah memerintahkan anak kecil sholat.

[15–35 detik] SOLUSI: Usia 3–4 cukup mengamati. Usia 5–6 mulai gerakan + satu surat pendek. Usia 7 baru lima waktu — itu pun bertahap: mulai Maghrib & Isya, tambah satu waktu tiap dua bulan.

[35–55 detik] BUKTI: Hadith Abu Dawud 495 — "perintahkan di tujuh, tegur di sepuluh". Ada tiga tahun jeda. Tujuh bukan sakelar, tapi awal pengenalan.

[55–60 detik] CTA: "Simpan ini. Bagikan ke orang tua yang lagi berjuang ngajarin anak sholat."`,
        en: `[0–3s] HOOK: The #1 parenting mistake with kids and salah: forcing it too early.

[3–15s] PROBLEM: Children forced to pray at 5–6 often become adults who avoid it. Yet the Prophet ﷺ never commanded young children to pray.

[15–35s] SOLUTION: Ages 3–4, just observe. Ages 5–6, begin the movements + one short surah. Age 7, start the five prayers — and even then gradually: begin with Maghrib & Isha, add one prayer every two months.

[35–55s] PROOF: Abu Dawud 495 — "command at seven, correct at ten." There's a three-year window. Seven isn't a switch; it's the start of introduction.

[55–60s] CTA: "Save this. Share it with a parent struggling to teach their child salah."`,
      },
      pin: {
        id: {
          title: "Cara Mengajarkan Sholat ke Anak per Usia (Tanpa Paksaan)",
          description: "Panduan mengajarkan sholat ke anak usia 3–7 tahun sesuai sunnah: kapan mulai, apa yang diajarkan tiap usia, dan lima hal yang harus dihindari. Untuk orang tua muslim.",
        },
        en: {
          title: "How to Teach Kids to Pray, Age by Age (Without Force)",
          description: "A gentle, Sunnah-based guide to teaching salah to children ages 3–7: when to start, what to teach at each age, and five things to avoid. For Muslim parents.",
        },
      },
      checklist: {
        id: [
          "Usia 3–4: biarkan anak mengamati, jangan larang mendekat saat sholat",
          "Usia 5–6: ajarkan takbiratul ihram + Al-Ikhlas",
          "Beri sajadah/mukena/peci yang anak pilih sendiri",
          "Sholat berjamaah keluarga minimal 1× sehari (Maghrib paling mudah)",
          "Usia 7 bulan 1–2: Maghrib & Isya dulu",
          "Bulan 3–4: tambah Subuh; bulan 5–6: tambah Dzuhur; bulan 7+: lengkap",
          "Puji usaha, bukan hasil: \"Mama suka caranya kakak rukuk pelan-pelan\"",
          "Doakan anak dengan menyebut namanya, setelah sholat",
          "Hindari: membandingkan, mempermalukan, membentak, hukuman, imbalan besar",
          "Saat anak menolak: jangan paksa fisik, tanya tenang, beri keringanan bila sakit/lelah",
        ],
        en: [
          "Ages 3–4: let the child watch; don't push them away during prayer",
          "Ages 5–6: teach takbiratul ihram + Al-Ikhlas",
          "Give a prayer mat/clothes the child picks themselves",
          "Family congregational prayer at least 1×/day (Maghrib is easiest)",
          "Age 7, months 1–2: Maghrib & Isha first",
          "Months 3–4: add Fajr; months 5–6: add Dhuhr; month 7+: all five",
          "Praise effort, not outcome: \"I liked how slowly you did ruku\"",
          "Make du'a for the child by name, after prayer",
          "Avoid: comparing, shaming, yelling, punishment, big rewards",
          "When they refuse: no physical force, ask calmly, ease off if sick/tired",
        ],
      },
    },
    faq: [
      {
        question: {
          id: "Umur berapa anak mulai wajib sholat?",
          en: "At what age must a child start praying?",
        },
        answer: {
          id: "Anak <strong>mulai diperintahkan</strong> sholat di usia <strong>7 tahun</strong> dan ditegur lebih tegas jika meninggalkannya di usia <strong>10 tahun</strong> (HR. Abu Dawud 495, hasan). Namun ini tahap <em>pembiasaan</em> — kewajiban penuh (dan dosa jika ditinggalkan) baru berlaku setelah anak <strong>baligh</strong>. Usia 7–10 adalah masa membentuk kebiasaan, bukan menuntut kesempurnaan.",
          en: "A child <strong>begins to be instructed</strong> to pray at <strong>age 7</strong> and is corrected more firmly if they neglect it at <strong>age 10</strong> (Abu Dawud 495, hasan). But this is a <em>habit-forming</em> stage — full obligation (and sin for skipping) only applies after <strong>puberty</strong>. Ages 7–10 are for building the habit, not demanding perfection.",
        },
      },
      {
        question: {
          id: "Bolehkah memaksa anak sholat?",
          en: "Is it okay to force a child to pray?",
        },
        answer: {
          id: "Sebaiknya tidak. Paksaan fisik menanam benih perlawanan jangka panjang — banyak anak yang dipaksa justru menjauhi sholat saat dewasa. Rasulullah ﷺ sendiri tidak pernah memerintahkan sholat pada anak kecil, bahkan pernah sholat sambil menggendong cucunya, Umamah. Pendekatan yang lembut dan bertahap terbukti lebih sesuai sunnah <em>dan</em> lebih efektif.",
          en: "Better not to. Physical force plants long-term resistance — many forced children avoid prayer as adults. The Prophet ﷺ never commanded young children to pray, and even prayed while carrying his granddaughter Umamah. A gentle, gradual approach is both more in line with the Sunnah <em>and</em> more effective.",
        },
      },
      {
        question: {
          id: "Bagaimana mengajarkan sholat pada anak usia 3–4 tahun?",
          en: "How do I teach prayer to a 3–4 year old?",
        },
        answer: {
          id: "Di usia ini jangan ajarkan apa pun secara formal — <strong>cukup biarkan anak mengamati</strong>. Anak yang setiap hari melihat orang tuanya rukuk dan sujud menyerap pesan bahwa sholat adalah bagian normal dari hidup, seperti makan dan tidur. Jangan larang anak mendekat saat Anda sholat, agar ia tidak mengasosiasikan sholat dengan ketegangan.",
          en: "At this age, teach nothing formal — <strong>just let them watch</strong>. A child who sees a parent bow and prostrate every day absorbs that prayer is a normal part of life, like eating and sleeping. Don't push them away while you pray, so they never associate prayer with tension.",
        },
      },
      {
        question: {
          id: "Surat apa yang pertama diajarkan untuk sholat anak?",
          en: "Which surah should I teach a child first for prayer?",
        },
        answer: {
          id: "Mulai dari <strong>takbiratul ihram</strong> dan satu surat pendek. <strong>Al-Ikhlas</strong> adalah pilihan klasik karena pendek, mudah dihafal, dan indah. Belum perlu anak hafal semua bacaan atau khusyuk sempurna di usia 5–6 tahun — yang penting anak ikut gerakan dan merasa memiliki sajadahnya sendiri.",
          en: "Start with <strong>takbiratul ihram</strong> and one short surah. <strong>Al-Ikhlas</strong> is the classic choice — short, easy to memorize, and beautiful. A 5–6 year old need not memorize every recitation or achieve full focus — what matters is joining the movements and feeling ownership over their own prayer mat.",
        },
      },
      {
        question: {
          id: "Apa yang harus dilakukan kalau anak tidak mau sholat?",
          en: "What should I do when my child refuses to pray?",
        },
        answer: {
          id: "Tarik nafas — ini normal dan perjalanan panjang. <strong>Jangan paksa fisik.</strong> Tanya dengan tenang: \"Kenapa belum mau sholat? Mama mau dengar.\" Jika anak lelah atau sakit, beri keringanan (Allah Maha Penyayang). Jika penolakan jadi pola, evaluasi apakah ada paksaan yang membuat anak resisten, dan kapan terakhir Anda memuji usahanya — bukan hanya hasilnya.",
          en: "Breathe — this is normal and it's a long road. <strong>Don't force physically.</strong> Ask calmly: \"Why don't you want to pray? I want to hear.\" If they're tired or ill, give a pass (Allah is Most Merciful). If refusal becomes a pattern, check whether built-up coercion is driving resistance, and when you last praised their effort — not just the result.",
        },
      },
    ],
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
    updated: "2026-09-12",
    readingTimeMin: 8,
    author: "tim-baby-mo",
    kit: {
      quote: {
        id: "Daftar doa yang harus anak kenal sebelum usia 7 jauh lebih pendek dari yang dibayangkan: 7 doa inti, lalu 5 tambahan. Kuncinya bukan banyaknya — tapi satu doa per minggu, dibaca di momennya, tanpa hukuman kalau lupa.",
        en: "The list of du'as a child should know before age 7 is far shorter than you think: 7 core ones, then 5 more. The key isn't quantity — it's one du'a a week, said in context, with no punishment for forgetting.",
      },
      carousel: {
        id: [
          { title: "12 Doa Sebelum Usia 7 — 1/7", body: "Daftar di Google panjang, buku doa tebal. Padahal daftar inti yang penting jauh lebih pendek — dan jauh lebih bisa dicapai." },
          { title: "Kenapa kebiasaan ini penting", body: "Anak yang mengucap Bismillah sebelum makan sedang membentuk koneksi harian dengan Allah — belajar bahwa hidup punya nara-sumber." },
          { title: "7 doa inti (tier 1)", body: "Sebelum & bangun tidur, sebelum & sesudah makan, masuk & keluar kamar mandi, naik kendaraan. Banyak yang cuma satu kata: Bismillah, Ghufranaka." },
          { title: "5 doa tambahan (tier 2)", body: "Setelah 7 inti dikenal: keluar/masuk rumah, saat hujan, saat bersin, dan doa untuk orang tua. Tidak terburu-buru." },
          { title: "Prinsip: satu doa per minggu", body: "Otak balita butuh konsolidasi. Tujuh doa dalam seminggu = tidak ada yang menempel. Satu doa, diulang tiap hari, sepekan penuh." },
          { title: "Selalu di momennya", body: "Doa makan diajarkan saat mau makan, bukan di meja belajar. Otak menyimpan info yang terkoneksi konteks fisik jauh lebih kuat." },
          { title: "Tidak ada hukuman kalau lupa", body: "\"Lupa Bismillah ya? Yuk diulang.\" Asosiasi dengan doa harus positif. Modelkan, jangan hanya menyuruh. Simpan & bagikan." },
        ],
        en: [
          { title: "12 Du'as Before Age 7 — 1/7", body: "Google's list is long, the du'a books are thick. But the core list that matters is far shorter — and far more achievable." },
          { title: "Why this habit matters", body: "A child who says Bismillah before eating is building a daily connection with Allah — learning that life has a Source." },
          { title: "7 core du'as (tier 1)", body: "Before & after sleep, before & after eating, entering & leaving the bathroom, riding transport. Many are one word: Bismillah, Ghufranaka." },
          { title: "5 more (tier 2)", body: "Once the 7 are known: leaving/entering home, when it rains, when sneezing, and a du'a for parents. No rush." },
          { title: "Principle: one du'a a week", body: "A toddler's brain needs consolidation. Seven in a week = none stick. One du'a, repeated daily, for a full week." },
          { title: "Always in context", body: "The meal du'a is taught when about to eat, not at a desk. The brain stores context-linked info far more strongly." },
          { title: "No punishment for forgetting", body: "\"Forgot Bismillah? Let's say it.\" The association must stay positive. Model it, don't just command. Save & share." },
        ],
      },
      shortScript: {
        id: `[0–3 detik] HOOK: Berapa doa yang harus anak hafal sebelum usia 7? Lebih sedikit dari yang kamu kira.

[3–15 detik] MASALAH: Orang tua sering kewalahan — daftar doa panjang, anak baru hafal satu sudah disodorkan lima. Hasilnya tidak ada yang menempel.

[15–35 detik] SOLUSI: Cukup 7 doa inti dulu — banyak yang satu kata seperti Bismillah. Ajarkan SATU per minggu, di momennya: doa makan saat mau makan, doa tidur saat mau tidur.

[35–55 detik] BUKTI: Otak balita butuh waktu konsolidasi. 3 bulan konsisten = lima doa pertama jadi otomatis. Tanpa hukuman kalau lupa — asosiasi harus positif.

[55–60 detik] CTA: "Simpan daftarnya. Bagikan ke orang tua yang lagi bingung mulai dari mana."`,
        en: `[0–3s] HOOK: How many du'as should a child know before age 7? Fewer than you think.

[3–15s] PROBLEM: Parents get overwhelmed — long lists, five new du'as before the child has learned one. Nothing sticks.

[15–35s] SOLUTION: Just 7 core du'as first — many are one word like Bismillah. Teach ONE a week, in context: the meal du'a when eating, the sleep du'a at bedtime.

[35–55s] PROOF: A toddler's brain needs consolidation. 3 consistent months = the first five become automatic. No punishment for forgetting — keep it positive.

[55–60s] CTA: "Save the list. Share it with a parent who doesn't know where to start."`,
      },
      pin: {
        id: {
          title: "12 Doa Harian Anak Sebelum Usia 7 Tahun",
          description: "Daftar doa inti yang perlu dikenal anak sebelum 7 tahun + cara mengajarkannya: satu doa per minggu, di momennya, tanpa hukuman. Untuk keluarga muslim.",
        },
        en: {
          title: "12 Daily Du'as for Kids Before Age 7",
          description: "The core du'as a child should know before 7 + how to teach them: one a week, in context, without punishment. For Muslim families.",
        },
      },
      checklist: {
        id: [
          "Tier 1 — 7 doa inti dulu (tidur, bangun, makan, kamar mandi, kendaraan)",
          "Ajarkan SATU doa per minggu, bukan satu per hari",
          "Baca di momennya: doa makan saat mau makan",
          "Orang tua membaca dulu dengan keras, anak menirukan",
          "Jangan tanya \"ingat ga doanya?\" — cukup contohkan",
          "Tidak ada hukuman kalau anak lupa",
          "Modelkan: orang tua juga membaca Bismillah saat makan",
          "Tier 2 (5 doa) ditambahkan setelah tier 1 dikenal",
          "Target 3 bulan: lima doa pertama jadi otomatis",
          "Setelah usia 7: pelan-pelan kenalkan dzikir pagi/petang & surat pendek",
        ],
        en: [
          "Tier 1 — the 7 core du'as first (sleep, waking, eating, bathroom, transport)",
          "Teach ONE du'a a week, not one a day",
          "Say it in context: the meal du'a when about to eat",
          "Parent recites aloud first, child imitates",
          "Don't quiz (\"do you remember it?\") — just model it",
          "No punishment when the child forgets",
          "Model it: the parent says Bismillah when eating too",
          "Tier 2 (5 du'as) added once tier 1 is known",
          "3-month target: the first five become automatic",
          "After age 7: gently introduce morning/evening adhkar & short surahs",
        ],
      },
    },
    faq: [
      {
        question: {
          id: "Berapa banyak doa yang harus diajarkan ke anak sebelum usia 7 tahun?",
          en: "How many du'as should a child learn before age 7?",
        },
        answer: {
          id: "Daftar intinya jauh lebih pendek dari yang dibayangkan: <strong>7 doa inti</strong> (tier 1) — sebelum/sesudah tidur, sebelum/sesudah makan, masuk/keluar kamar mandi, dan naik kendaraan — lalu <strong>5 doa tambahan</strong> (tier 2) yang ditambahkan bertahap. Total 12. Targetnya anak <em>mengenal</em>, bukan harus hafal sempurna.",
          en: "The core list is far shorter than most parents fear: <strong>7 essential du'as</strong> (tier 1) — before/after sleep, before/after eating, entering/leaving the bathroom, and riding transport — then <strong>5 more</strong> (tier 2) added gradually. Twelve in total. The goal is that the child <em>knows</em> them, not that they memorize them perfectly.",
        },
      },
      {
        question: {
          id: "Apa cara paling efektif mengajarkan doa ke balita?",
          en: "What's the most effective way to teach du'as to a toddler?",
        },
        answer: {
          id: "Lima prinsip yang terbukti: (1) <strong>satu doa per minggu</strong>, bukan satu per hari; (2) ajarkan <strong>di momennya</strong> — doa makan saat mau makan, bukan saat duduk belajar; (3) <strong>orang tua membaca dulu</strong>, anak menirukan; (4) <strong>tidak ada hukuman</strong> jika lupa; (5) modelkan, jangan hanya mengajarkan.",
          en: "Five proven principles: (1) <strong>one du'a per week</strong>, not one per day; (2) teach <strong>in context</strong> — the meal du'a when about to eat, not at a study desk; (3) <strong>the parent reads first</strong>, the child imitates; (4) <strong>no punishment</strong> for forgetting; (5) model it, don't just instruct it.",
        },
      },
      {
        question: {
          id: "Berapa lama sampai anak hafal doa harian?",
          en: "How long until a child memorizes the daily du'as?",
        },
        answer: {
          id: "Untuk sebagian besar anak, sekitar <strong>3 bulan konsisten</strong> membuat lima doa pertama menjadi otomatis, dan setelah <strong>6 bulan</strong> anak biasanya membacanya sendiri tanpa diingatkan. Anak yang butuh waktu lebih lama tidak masalah — tidak ada balapan.",
          en: "For most children, about <strong>3 consistent months</strong> makes the first five du'as automatic, and after <strong>6 months</strong> they usually recite them unprompted. Children who need longer are fine — there's no race.",
        },
      },
      {
        question: {
          id: "Haruskah anak dihukum kalau lupa membaca doa?",
          en: "Should a child be punished for forgetting a du'a?",
        },
        answer: {
          id: "Tidak. Asosiasi anak dengan doa harus <strong>positif</strong>. Kalau anak lupa Bismillah sebelum makan, cukup katakan santai: \"Lupa Bismillah ya? Yuk diulang.\" Orang tua yang sendiri lupa Bismillah tapi memarahi anak yang lupa justru mengajarkan kemunafikan kecil — anak meniru lebih dari yang ia dengar.",
          en: "No. A child's association with du'a must stay <strong>positive</strong>. If they forget Bismillah before eating, just say lightly: \"Forgot Bismillah? Let's say it.\" A parent who forgets it themselves but scolds the child teaches a small hypocrisy — children imitate more than they hear.",
        },
      },
    ],
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
    updated: "2026-09-12",
    readingTimeMin: 9,
    author: "tim-baby-mo",
    kit: {
      quote: {
        id: "Anak tidak butuh orang tua yang tidak pernah marah. Anak butuh orang tua yang memodelkan cara mengelola marah. Rasulullah ﷺ memberi kita lima langkah yang bisa dilakukan dalam 30 detik — sebelum kata-kata yang tak bisa ditarik terlanjur keluar.",
        en: "A child doesn't need a parent who never gets angry. They need a parent who models how to manage it. The Prophet ﷺ gave us five steps you can do in 30 seconds — before words you can't take back slip out.",
      },
      carousel: {
        id: [
          { title: "Saat Orang Tua Marah — 1/7", body: "Setiap orang tua pernah marah. Yang berbeda bukan seberapa sering — tapi seberapa cepat mereda, dan apa yang dilakukan sesudahnya." },
          { title: "1. Ta'awwudz", body: "Saat panas naik di dada: \"A'udzu billahi minasy-syaithonir-rajim.\" Rasulullah ﷺ mengajarkan ini untuk meredakan amarah. Banyak yang merasakan denyut menurun." },
          { title: "2. Ganti posisi", body: "Berdiri? Duduklah. Masih marah? Berbaringlah. Perubahan postur mengubah kondisi mental — dan membuatmu sejajar tinggi anak." },
          { title: "3. Ambil wudhu", body: "\"Marah dari setan, setan dari api, api dipadamkan air\" (HR. Abu Dawud). 60 detik air dingin sering cukup memutus reaksi amarah." },
          { title: "4. Diam", body: "\"Jika marah, hendaklah diam\" (HR. Ahmad). Luka jangka panjang bukan pukulan — tapi kata-kata. Dan ucapan marah bisa jadi doa yang dikabulkan." },
          { title: "Setelah terlanjur membentak", body: "Beri ruang 5–10 menit. Datang di ketinggian anak. Minta maaf jujur TANPA \"tapi\": \"Mama minta maaf. Kamu ga salah.\"" },
          { title: "Kalau polanya berulang", body: "Selalu di jam yang sama? Cek akarnya: kurang tidur, lapar, tekanan kerja. Mengakui masalah bukan kelemahan. Simpan & bagikan." },
        ],
        en: [
          { title: "When Parents Get Angry — 1/7", body: "Every parent gets angry. What differs isn't how often — it's how fast it subsides, and what you do after." },
          { title: "1. Ta'awwudz", body: "As the heat rises: \"A'udhu billahi minash-shaytanir-rajim.\" The Prophet ﷺ taught this to defuse anger. Many feel their pulse drop." },
          { title: "2. Change posture", body: "Standing? Sit. Still angry? Lie down. Shifting posture shifts your mental state — and brings you level with the child." },
          { title: "3. Make wudu", body: "\"Anger is from Shaytan, from fire, and fire is put out with water\" (Abu Dawud). 60 seconds of cool water often breaks the reaction." },
          { title: "4. Stay silent", body: "\"If one of you is angry, be silent\" (Ahmad). The lasting wound isn't a blow — it's words. And angry words can become an answered du'a." },
          { title: "After you've already yelled", body: "Give 5–10 minutes. Come to their level. Apologize honestly with NO \"but\": \"I'm sorry. You did nothing wrong.\"" },
          { title: "If it's a pattern", body: "Always the same hour? Check the root: lack of sleep, hunger, work stress. Admitting it isn't weakness. Save & share." },
        ],
      },
      shortScript: {
        id: `[0–3 detik] HOOK: Rasulullah ﷺ memberi 5 langkah meredakan marah dalam 30 detik. Kebanyakan orang tua tidak pernah diajari ini.

[3–15 detik] MASALAH: Luka terdalam yang ditinggalkan orang tua bukan pukulan — tapi kata-kata yang terucap saat marah. Sekali keluar, tidak bisa ditarik.

[15–35 detik] SOLUSI: Satu, ta'awwudz. Dua, ganti posisi — berdiri jadi duduk. Tiga, ambil wudhu. Empat, diam. Lima, tinggalkan ruangan sebentar setelah anak aman.

[35–55 detik] BUKTI: "Jika marah, hendaklah diam" (HR. Ahmad). Dan hati-hati: ucapan marah orang tua bisa jadi doa yang dikabulkan untuk anak.

[55–60 detik] CTA: "Simpan lima langkah ini. Bagikan ke orang tua yang butuh."`,
        en: `[0–3s] HOOK: The Prophet ﷺ gave 5 steps to defuse anger in 30 seconds. Most parents were never taught them.

[3–15s] PROBLEM: The deepest wound a parent leaves isn't a blow — it's the words said in anger. Once out, they can't be recalled.

[15–35s] SOLUTION: One, ta'awwudz. Two, change posture — stand to sit. Three, make wudu. Four, stay silent. Five, briefly leave once the child is safe.

[35–55s] PROOF: "If one of you is angry, be silent" (Ahmad). And beware: a parent's angry words can become an answered du'a over their child.

[55–60s] CTA: "Save these five steps. Share them with a parent who needs them."`,
      },
      pin: {
        id: {
          title: "5 Langkah Sunnah Meredakan Marah ke Anak",
          description: "Cara meredakan amarah pada anak menurut sunnah Rasulullah ﷺ: ta'awwudz, ganti posisi, wudhu, diam, dan cara minta maaf yang benar setelah terlanjur. Untuk orang tua muslim.",
        },
        en: {
          title: "5 Sunnah Steps to Calm Anger at Your Child",
          description: "How to defuse anger toward your child the Prophet's ﷺ way: ta'awwudz, change posture, wudu, silence, and how to apologize properly afterward. For Muslim parents.",
        },
      },
      checklist: {
        id: [
          "Langkah 1: ucapkan ta'awwudz saat panas mulai naik",
          "Langkah 2: ganti posisi — berdiri jadi duduk, lalu berbaring",
          "Langkah 3: ambil wudhu (air dingin ± 60 detik)",
          "Langkah 4: diam — jangan bicara saat puncak marah",
          "Langkah 5: tinggalkan ruangan sebentar setelah anak aman",
          "Setelah tenang: beri anak ruang 5–10 menit",
          "Minta maaf jujur tanpa \"tapi\"",
          "Janji yang realistis: \"Mama akan coba lebih tenang\"",
          "Jangan mendoakan keburukan untuk anak, walau kesal",
          "Kalau pola berulang: cek akarnya (tidur, lapar, tekanan) & bicarakan",
        ],
        en: [
          "Step 1: say ta'awwudz as the heat rises",
          "Step 2: change posture — stand to sit, then lie down",
          "Step 3: make wudu (cool water, ~60 seconds)",
          "Step 4: stay silent — don't speak at peak anger",
          "Step 5: briefly leave the room once the child is safe",
          "Once calm: give the child 5–10 minutes",
          "Apologize honestly with no \"but\"",
          "Make a realistic promise: \"I'll try to stay calmer\"",
          "Never invoke bad against your child, even when upset",
          "If it recurs: check the root (sleep, hunger, stress) & talk it out",
        ],
      },
    },
    faq: [
      {
        question: {
          id: "Bagaimana cara meredakan marah ke anak menurut sunnah?",
          en: "How do I calm anger toward my child the Sunnah way?",
        },
        answer: {
          id: "Rasulullah ﷺ memberi protokol lima langkah yang bisa dilakukan dalam ±30 detik: (1) <strong>ta'awwudz</strong> — \"A'udzu billahi minasy-syaithonir-rajim\"; (2) <strong>ganti posisi</strong> — berdiri lalu duduk, lalu berbaring; (3) <strong>ambil wudhu</strong> (\"marah dari api, dipadamkan dengan air\"); (4) <strong>diam</strong>, jangan bicara; (5) <strong>tinggalkan ruangan</strong> sebentar setelah memastikan anak aman.",
          en: "The Prophet ﷺ gave a five-step protocol you can run in ~30 seconds: (1) <strong>ta'awwudz</strong> — \"A'udhu billahi minash-shaytanir-rajim\"; (2) <strong>change posture</strong> — if standing, sit, then lie down; (3) <strong>make wudu</strong> (\"anger is from fire, extinguished by water\"); (4) <strong>stay silent</strong>; (5) <strong>briefly leave the room</strong> after making sure the child is safe.",
        },
      },
      {
        question: {
          id: "Apakah normal orang tua marah ke anak?",
          en: "Is it normal for parents to get angry at their kids?",
        },
        answer: {
          id: "Ya — <strong>setiap orang tua muslim pernah marah</strong>, dan marah itu manusiawi. Yang membedakan bukan seberapa sering, tapi seberapa cepat amarah mereda dan apa yang dilakukan setelahnya. Sering kali marah berlebihan adalah tanda kelelahan, kurang tidur, atau tekanan — kasihanilah dirimu juga.",
          en: "Yes — <strong>every Muslim parent gets angry</strong>, and anger is human. What differs isn't how often, but how quickly it subsides and what you do afterward. Excess anger is often a sign of exhaustion, lack of sleep, or pressure — be gentle with yourself too.",
        },
      },
      {
        question: {
          id: "Apa yang harus dilakukan setelah terlanjur membentak anak?",
          en: "What should I do after I've already yelled at my child?",
        },
        answer: {
          id: "Yang menentukan bukan kejadiannya, tapi apa yang dilakukan setelahnya. Beri anak ruang tenang 5–10 menit, datang di ketinggian mereka (jongkok, jangan menjulang), lalu <strong>minta maaf dengan jujur tanpa \"tapi\"</strong>: \"Mama tadi marah dan suaranya keras. Mama minta maaf. Kamu ga salah.\" Tutup dengan janji yang realistis: \"Mama akan coba lebih tenang\" — bukan \"tidak akan pernah marah lagi\".",
          en: "What matters isn't the incident but what follows. Give the child 5–10 minutes to settle, come down to their level (crouch, don't loom), then <strong>apologize honestly with no \"but\"</strong>: \"I was angry and my voice was loud. I'm sorry. You did nothing wrong.\" Close with a realistic promise: \"I'll try to stay calmer\" — not \"I'll never get angry again.\"",
        },
      },
      {
        question: {
          id: "Kenapa tidak boleh berkata kasar saat marah ke anak?",
          en: "Why shouldn't I say harsh words when angry at my child?",
        },
        answer: {
          id: "Sebagian besar luka jangka panjang yang ditinggalkan orang tua bukan pukulan — tapi <strong>kata-kata</strong> yang terucap saat marah, dan sekali keluar tidak bisa ditarik. Lebih berat lagi: Rasulullah ﷺ memperingatkan agar <strong>jangan mendoakan keburukan untuk anak</strong>, karena ucapan kemarahan orang tua bisa menjadi doa yang dikabulkan. Karena itu langkah \"diam\" begitu penting.",
          en: "Most long-term wounds parents leave aren't blows — they're the <strong>words</strong> spoken in anger, and once out they can't be recalled. Worse: the Prophet ﷺ warned <strong>never to invoke bad against your children</strong>, because a parent's angry words can become an answered supplication. That's why the \"stay silent\" step matters so much.",
        },
      },
    ],
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
    updated: "2026-09-12",
    readingTimeMin: 7,
    author: "tim-baby-mo",
    kit: {
      quote: {
        id: "Rasulullah ﷺ membawa cucunya Umamah di pundak saat sholat — bukan karena tidak ada penjaga di rumah, tapi karena bersama anak di dalam ibadah adalah bagian dari ibadah. Bawa anakmu ke masjid, walau dia belum sempurna.",
        en: "The Prophet ﷺ carried his granddaughter Umamah on his shoulders during prayer — not for lack of a caregiver at home, but because being with a child inside worship is part of worship. Take your child to the mosque, even imperfectly.",
      },
      carousel: {
        id: [
          { title: "Mengajak Anak ke Masjid — 1/7", body: "\"Apa anakku akan mengganggu jamaah?\" Lalu sholat berjamaah ditinggalkan — dan anak kehilangan pengalaman melihat sendiri ayahnya rukuk." },
          { title: "Mulai usia berapa", body: "Tidak ada minimum, tapi bermakna sekitar usia 3 tahun. 3–5: Maghrib di masjid dekat rumah, 1–2× seminggu. 6+: lebih sering, mulai Jum'at." },
          { title: "Persiapan sebelum berangkat", body: "Toilet dulu. Beri makan ringan. Pakaian nyaman. Kit darurat: tisu, buku tipis, satu mainan tenang. Cerita di jalan." },
          { title: "Di dalam masjid", body: "Pilih shaf pinggir dekat pintu. Anak berdiri di SAMPING, bukan di belakang — mereka harus melihat ayahnya rukuk." },
          { title: "Kalau anak menangis", body: "Jangan panik. Ambil anak, keluar pelan, tenangkan. Tidak ada jamaah yang baik akan menegur ayah yang membawa anaknya." },
          { title: "Yang anak pelajari", body: "Bukan tata cara sholat — itu bisa kapan saja. Yang dipelajari adalah IDENTITAS: masjid adalah tempatku, jamaah adalah orang-orangku." },
          { title: "Efek jangka panjang", body: "Saat usia 7 dan disuruh sholat, dia tidak menolak — karena sudah di sana sejak usia 3. Simpan & bagikan." },
        ],
        en: [
          { title: "Taking Your Child to the Mosque — 1/7", body: "\"Will my child disturb the congregation?\" So congregational prayer is skipped — and the child loses the sight of their own father bowing." },
          { title: "From what age", body: "No minimum, but meaningful around age 3. Ages 3–5: Maghrib at a nearby mosque, 1–2× a week. 6+: more often, starting Jumu'ah." },
          { title: "Prep before leaving", body: "Toilet first. A light snack. Comfortable clothes. Emergency kit: tissues, a thin book, one quiet toy. A short story on the way." },
          { title: "Inside the mosque", body: "Pick an edge row near the door. The child stands BESIDE you, not behind — they need to see their father bow." },
          { title: "If the child cries", body: "Don't panic. Pick them up, step out gently, soothe them. No good worshipper will reproach a father who brought his child." },
          { title: "What the child learns", body: "Not the mechanics of prayer — that can come anytime. They learn IDENTITY: the mosque is my place, the congregation is my people." },
          { title: "The long-term effect", body: "At 7, when told to pray, they don't refuse — because they've been there since age 3. Save & share." },
        ],
      },
      shortScript: {
        id: `[0–3 detik] HOOK: Takut anak mengganggu jamaah di masjid? Jangan sampai itu bikin kamu berhenti membawanya.

[3–15 detik] MASALAH: Banyak orang tua muda meninggalkan sholat berjamaah karena khawatir anak rewel. Anak pun kehilangan pengalaman paling penting: melihat ayahnya rukuk.

[15–35 detik] SOLUSI: Mulai usia 3. Siapkan: toilet, makan ringan, kit darurat. Di masjid, pilih shaf pinggir dekat pintu. Anak berdiri di samping, bukan di belakang.

[35–55 detik] BUKTI: Rasulullah ﷺ sholat sambil menggendong cucunya, Umamah. Yang anak pelajari bukan tata cara — tapi identitas: masjid adalah tempatnya.

[55–60 detik] CTA: "Bawa anakmu ke masjid minggu ini. Bagikan pengingat ini."`,
        en: `[0–3s] HOOK: Afraid your child will disturb the congregation? Don't let it stop you from bringing them.

[3–15s] PROBLEM: Many young parents skip congregational prayer fearing a fussy child. The child loses the most important experience: seeing their father bow.

[15–35s] SOLUTION: Start at age 3. Prep: toilet, light snack, emergency kit. At the mosque, take an edge row near the door. The child stands beside you, not behind.

[35–55s] PROOF: The Prophet ﷺ prayed while carrying his granddaughter Umamah. What the child learns isn't mechanics — it's identity: the mosque is their place.

[55–60s] CTA: "Take your child to the mosque this week. Share this reminder."`,
      },
      pin: {
        id: {
          title: "Panduan Mengajak Anak ke Masjid (per Usia)",
          description: "Kapan mulai mengajak anak ke masjid, apa yang disiapkan, posisi anak saat sholat, dan cara menghadapi anak yang rewel. Untuk orang tua muslim Indonesia.",
        },
        en: {
          title: "A Parent's Guide to Bringing Kids to the Mosque",
          description: "When to start, what to pack, where the child should stand during prayer, and how to handle a fussy child. For Muslim parents.",
        },
      },
      checklist: {
        id: [
          "Mulai ajak sekitar usia 3 tahun (Maghrib paling cocok)",
          "Toilet dulu sebelum berangkat",
          "Beri makan ringan — anak lapar = rewel",
          "Bawa kit darurat: tisu, buku tipis, satu mainan tenang",
          "Cerita di jalan: \"Kita ke rumah Allah\"",
          "Pilih shaf pinggir, dekat pintu",
          "Anak berdiri di samping, bukan di belakang",
          "Kalau menangis: keluar pelan, tenangkan, jangan panik",
          "Jangan tegur keras kalau anak gelisah di rakaat akhir",
          "Konsisten — identitas tumbuh dari pengulangan",
        ],
        en: [
          "Start around age 3 (Maghrib works best)",
          "Toilet first before leaving",
          "A light snack — a hungry child is fussy",
          "Bring an emergency kit: tissues, thin book, one quiet toy",
          "A story on the way: \"We're going to Allah's house\"",
          "Choose an edge row, near the door",
          "The child stands beside you, not behind",
          "If they cry: step out gently, soothe, don't panic",
          "Don't scold if they fidget in the last rakaat",
          "Be consistent — identity grows from repetition",
        ],
      },
    },
    faq: [
      {
        question: {
          id: "Umur berapa anak boleh diajak ke masjid?",
          en: "At what age can I take my child to the mosque?",
        },
        answer: {
          id: "Tidak ada usia minimum, tapi pengalaman yang bermakna biasanya mulai sekitar <strong>usia 3 tahun</strong> — saat anak bisa diajak komunikasi singkat dan menahan diri 5–10 menit. Panduan kasar: 0–2 tahun hanya hari raya/acara khusus; 3–5 tahun sholat Maghrib di masjid dekat rumah 1–2× seminggu; 6+ lebih sering, mulai diajak Jum'at dan tarawih pendek.",
          en: "There's no minimum age, but meaningful experiences usually start around <strong>age 3</strong> — when a child can handle brief communication and hold still for 5–10 minutes. Rough guide: ages 0–2 only for Eid/special occasions; 3–5 for Maghrib at a nearby mosque 1–2× a week; 6+ more often, starting Jumu'ah and short tarawih.",
        },
      },
      {
        question: {
          id: "Bagaimana kalau anak menangis atau mengganggu jamaah di masjid?",
          en: "What if my child cries or disturbs the congregation?",
        },
        answer: {
          id: "Jangan panik. Ambil anak, keluar pelan, dan tenangkan. <strong>Tidak ada jamaah yang baik akan menegur seorang ayah yang membawa anaknya</strong> — Rasulullah ﷺ sendiri sholat sambil menggendong cucunya, Umamah. Pilih shaf di pinggir dekat pintu agar mudah keluar bila perlu, dan fokus pada apa yang sedang kamu bangun jangka panjang.",
          en: "Don't panic. Pick the child up, step out gently, and soothe them. <strong>No good worshipper will reproach a father who brought his child</strong> — the Prophet ﷺ himself prayed while carrying his granddaughter Umamah. Choose a row on the edge near the door for an easy exit, and stay focused on what you're building long term.",
        },
      },
      {
        question: {
          id: "Apa yang perlu disiapkan sebelum mengajak anak ke masjid?",
          en: "What should I prepare before taking my child to the mosque?",
        },
        answer: {
          id: "Lima persiapan sederhana: <strong>ke toilet dulu</strong> (sering dilupakan), <strong>beri makan ringan</strong> (anak lapar = rewel), <strong>pakaian nyaman</strong> yang tidak gatal, <strong>kit darurat</strong> (tisu, buku gambar tipis, satu mainan tenang), dan <strong>cerita singkat di jalan</strong>: \"Kita ke rumah Allah. Adik tunggu Mama selesai sholat ya.\"",
          en: "Five simple prep steps: <strong>use the toilet first</strong> (often forgotten), <strong>a light snack</strong> (a hungry child is fussy), <strong>comfortable clothes</strong> that don't itch, an <strong>emergency kit</strong> (tissues, a thin drawing book, one quiet toy), and a <strong>short story on the way</strong>: \"We're going to Allah's house. Wait while Mama finishes praying, okay?\"",
        },
      },
      {
        question: {
          id: "Di mana sebaiknya posisi anak saat sholat berjamaah?",
          en: "Where should my child stand during congregational prayer?",
        },
        answer: {
          id: "Anak berdiri <strong>di sebelah</strong> orang tua, bukan di belakang — mereka perlu <em>melihat</em> ayahnya rukuk dan sujud, karena itulah pelajaran yang paling membekas. Pilih shaf di pinggir dekat pintu. Jika anak gelisah di rakaat ketiga, biarkan; mereka sudah memberi yang mereka bisa.",
          en: "The child stands <strong>beside</strong> the parent, not behind — they need to <em>see</em> the bowing and prostration, because that's the lesson that sticks. Pick an edge row near the door. If they get restless by the third rakaat, let it be; they've given what they can.",
        },
      },
    ],
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
    updated: "2026-09-12",
    readingTimeMin: 7,
    author: "tim-baby-mo",
    kit: {
      quote: {
        id: "Ada perbedaan besar antara menyebut Nabi Yunus berada di dalam ikan, dan membawa anak masuk ke dalam perut ikan itu bersama beliau. Yang pertama informasi. Yang kedua pengalaman. Hanya yang kedua yang diingat anak saat ia berusia 25 tahun.",
        en: "There's a big difference between mentioning that Prophet Yunus was inside the fish, and taking your child inside that fish with him. The first is information. The second is experience. Only the second is remembered at 25.",
      },
      carousel: {
        id: [
          { title: "Cerita Nabi yang Diingat Seumur Hidup — 1/7", body: "Ubah informasi menjadi pengalaman. Itu rahasia kenapa satu anak lupa kisah nabi dan anak lain mengingatnya puluhan tahun." },
          { title: "1. Karakter yang dikenali", body: "\"Nabi Musa yang shalih\" — anak mengangguk dan lupa. \"Anak kecil yang dihanyutkan di sungai\" — anak ingat, karena karakternya seperti dia." },
          { title: "2. Detail kecil yang hidup", body: "\"Yusuf dilemas ke sumur\" = informasi. \"Sumurnya gelap, dingin, dia sendirian — tapi tidak menangis, karena tahu Allah melihatnya\" = pengalaman." },
          { title: "3. Bertanya, bukan menjelaskan", body: "Berhenti di satu titik. Tanya: \"Menurut adik, gimana perasaan Yusuf di sumur?\" Bayangan anak itulah yang membekas." },
          { title: "Format praktis", body: "Sebelum tidur. Maksimal 7 menit. 3× seminggu: Senin (kenalan), Rabu (konflik), Jumat (resolusi). Anak yang mau lebih akan minta." },
          { title: "5 kisah untuk mulai", body: "Ibrahim (berani berbeda), Yusuf (saudara yang iri), Musa (dihanyutkan), Yunus (doa saat susah), Muhammad ﷺ (masa kecil bersama Halimah)." },
          { title: "Yang harus dihindari", body: "Sumber tidak jelas. Menakut-nakuti. Moralisasi di akhir. Membaca dari HP. Simpan & bagikan ke orang tua yang suka bercerita." },
        ],
        en: [
          { title: "Prophet Stories Kids Remember for Life — 1/7", body: "Turn information into experience. That's the secret to why one child forgets a prophet story and another remembers it for decades." },
          { title: "1. A recognizable character", body: "\"The righteous Prophet Musa\" — a nod and forgotten. \"A little boy set adrift on a river\" — remembered, because he's like them." },
          { title: "2. Small living details", body: "\"Yusuf was thrown in a well\" = information. \"The well was dark, cold, he was alone — but didn't cry, knowing Allah saw him\" = experience." },
          { title: "3. Ask, don't explain", body: "Pause at one moment. Ask: \"How do you think Yusuf felt in the well?\" The child's own image is what sticks." },
          { title: "Practical format", body: "Bedtime. 7 minutes max. 3× a week: Mon (setup), Wed (conflict), Fri (resolution). A child who wants more will ask." },
          { title: "5 stories to start", body: "Ibrahim (daring to differ), Yusuf (jealous brothers), Musa (set adrift), Yunus (du'a in hardship), Muhammad ﷺ (childhood with Halimah)." },
          { title: "What to avoid", body: "Unclear sources. Frightening detail. Moralizing at the end. Reading off a phone. Save & share with a storytelling parent." },
        ],
      },
      shortScript: {
        id: `[0–3 detik] HOOK: Kenapa anakmu lupa kisah nabi yang kamu ceritakan? Karena kamu memberi informasi, bukan pengalaman.

[3–15 detik] MASALAH: "Nabi Yunus di dalam ikan paus" — anak mengangguk, lalu lupa. Fakta tidak melekat. Yang melekat adalah rasa.

[15–35 detik] SOLUSI: Bawa anak MASUK ke cerita. Detail kecil: gua yang gelap, sumur yang dingin. Lalu berhenti dan tanya: "Gimana perasaan dia?" Biarkan anak membayangkan.

[35–55 detik] BUKTI: Maksimal 7 menit, sebelum tidur, 3× seminggu. Anak yang tumbuh dengan kisah nabi punya cadangan emosi: saat takut, mereka punya Yunus.

[55–60 detik] CTA: "Simpan 5 kisah pembuka ini. Bagikan ke orang tua lain."`,
        en: `[0–3s] HOOK: Why does your child forget the prophet stories you tell? Because you're giving information, not experience.

[3–15s] PROBLEM: "Prophet Yunus was in the whale" — a nod, then forgotten. Facts don't stick. Feelings do.

[15–35s] SOLUTION: Take the child INTO the story. Small details: the dark cave, the cold well. Then pause and ask: "How did he feel?" Let them imagine.

[35–55s] PROOF: 7 minutes max, at bedtime, 3× a week. A child raised on prophet stories has an emotional reserve: when afraid, they have Yunus.

[55–60s] CTA: "Save these 5 starter stories. Share with another parent."`,
      },
      pin: {
        id: {
          title: "Cara Bercerita Kisah Nabi agar Anak Ingat Seumur Hidup",
          description: "Tiga prinsip bercerita kisah nabi untuk anak + format 7 menit + 5 kisah untuk memulai. Ubah informasi jadi pengalaman. Untuk orang tua muslim.",
        },
        en: {
          title: "How to Tell Prophet Stories Kids Remember Forever",
          description: "Three storytelling principles for prophet stories + a 7-minute format + 5 stories to start. Turn information into experience. For Muslim parents.",
        },
      },
      checklist: {
        id: [
          "Pilih karakter yang anak kenali (anak kecil, saudara, ayah)",
          "Tambah detail kecil yang menghidupkan (gelap, dingin, sendirian)",
          "Berhenti dan bertanya: \"Gimana perasaan dia?\"",
          "Waktu: sebelum tidur, maksimal 7 menit",
          "Ritme: 3× seminggu (kenalan, konflik, resolusi)",
          "Mulai dari 5 kisah: Ibrahim, Yusuf, Musa, Yunus, Muhammad ﷺ",
          "Pilih sumber dari Qur'an atau hadith shahih",
          "Jangan menakut-nakuti dengan detail siksa",
          "Jangan moralisasi di akhir (\"makanya kamu harus…\")",
          "Jangan baca dari HP — ceritakan dengan suaramu",
        ],
        en: [
          "Pick a character the child recognizes (a little boy, a sibling, a father)",
          "Add small details that bring it alive (dark, cold, alone)",
          "Pause and ask: \"How did he feel?\"",
          "Time: at bedtime, 7 minutes max",
          "Rhythm: 3× a week (setup, conflict, resolution)",
          "Start with 5 stories: Ibrahim, Yusuf, Musa, Yunus, Muhammad ﷺ",
          "Choose sources from the Qur'an or authentic hadith",
          "Don't frighten with graphic punishment",
          "Don't moralize at the end (\"so that's why you must…\")",
          "Don't read off a phone — tell it in your own voice",
        ],
      },
    },
    faq: [
      {
        question: {
          id: "Bagaimana cara bercerita kisah nabi agar anak mengingatnya seumur hidup?",
          en: "How do I tell prophet stories so a child remembers them for life?",
        },
        answer: {
          id: "Ubah <em>informasi</em> menjadi <em>pengalaman</em>. Tiga prinsip: (1) hadirkan <strong>karakter yang anak kenali</strong> — \"anak kecil yang dihanyutkan di sungai\" lebih membekas daripada \"Nabi Musa yang shalih\"; (2) tambahkan <strong>detail kecil</strong> yang membuat dunia hidup (sumur yang gelap dan dingin); (3) <strong>bertanya, bukan menjelaskan</strong> — \"Menurut adik, gimana perasaan Nabi Yusuf di dalam sumur?\"",
          en: "Turn <em>information</em> into <em>experience</em>. Three principles: (1) bring in a <strong>character the child recognizes</strong> — \"a little boy set adrift on a river\" lands harder than \"the righteous Prophet Musa\"; (2) add <strong>small sensory details</strong> that make the world alive (the dark, cold well); (3) <strong>ask, don't explain</strong> — \"How do you think Prophet Yusuf felt in the well?\"",
        },
      },
      {
        question: {
          id: "Berapa lama durasi ideal bercerita kisah nabi untuk anak?",
          en: "How long should a prophet story for kids be?",
        },
        answer: {
          id: "<strong>Maksimal 7 menit, sekitar 3× seminggu.</strong> Pilih waktu yang sudah ada — sebelum tidur paling alami. Satu kisah dibagi sepekan: Senin (kenalan), Rabu (puncak konflik), Jumat (resolusi). Anak yang ingin lebih akan meminta sendiri.",
          en: "<strong>Seven minutes max, about 3× a week.</strong> Use a slot that already exists — bedtime is most natural. Split one story across the week: Monday (setup), Wednesday (climax), Friday (resolution). A child who wants more will ask.",
        },
      },
      {
        question: {
          id: "Kisah nabi apa yang cocok untuk anak yang baru mulai?",
          en: "Which prophet stories are best to start with?",
        },
        answer: {
          id: "Lima kisah pembuka yang kaya emosi: <strong>Nabi Ibrahim</strong> (berani berbeda), <strong>Nabi Yusuf</strong> (saudara yang iri), <strong>Nabi Musa</strong> (bayi yang dihanyutkan, tawakal seorang ibu), <strong>Nabi Yunus</strong> (doa di saat susah), dan <strong>Nabi Muhammad ﷺ</strong> (masa kecil bersama Halimah). Anak yang tumbuh dengan kisah ini punya cadangan emosi: saat takut mereka punya Yunus, saat dikhianati mereka punya Yusuf.",
          en: "Five emotionally rich openers: <strong>Ibrahim</strong> (daring to be different), <strong>Yusuf</strong> (jealous brothers), <strong>Musa</strong> (the baby set adrift, a mother's trust), <strong>Yunus</strong> (prayer in hardship), and <strong>Muhammad ﷺ</strong> (childhood with Halimah). Children raised on these build an emotional reserve: when afraid they have Yunus, when betrayed they have Yusuf.",
        },
      },
      {
        question: {
          id: "Apa yang harus dihindari saat bercerita kisah nabi ke anak?",
          en: "What should I avoid when telling prophet stories?",
        },
        answer: {
          id: "Empat hal: (1) <strong>jangan menambah cerita dari sumber tidak jelas</strong> — pilih dari Qur'an atau hadith shahih; (2) jangan menakut-nakuti anak 4 tahun dengan detail siksa; (3) jangan <strong>moralisasi</strong> di akhir (\"makanya kamu harus rajin sholat\") — itu merusak pengalaman; (4) jangan membaca dari HP — anak menyerap bahwa cerita ini tidak cukup penting untuk dihafal.",
          en: "Four things: (1) <strong>don't add material from unclear sources</strong> — draw from the Qur'an or authentic hadith; (2) don't frighten a 4-year-old with graphic punishment; (3) don't <strong>moralize</strong> at the end (\"so that's why you must pray\") — it ruins the experience; (4) don't read off your phone — the child absorbs that the story wasn't important enough to know by heart.",
        },
      },
    ],
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
    updated: "2026-09-12",
    readingTimeMin: 7,
    author: "tim-baby-mo",
    kit: {
      quote: {
        id: "Perbedaan antara rumah yang pertengkarannya berakhir dalam 5 menit dan yang berlanjut jadi dendam bukan jumlah anak — tapi adab yang ditanam. Saudara adalah teman paling lama dalam hidup: adab di usia 5 adalah pelukan di usia 50.",
        en: "The difference between a home where fights end in 5 minutes and one where they turn to grudges isn't the number of kids — it's the manners instilled. Siblings are life's longest friends: manners at 5 are the embrace at 50.",
      },
      carousel: {
        id: [
          { title: "Adab Bersaudara — 1/7", body: "\"Kenapa anak-anakku tidak bisa akur 30 menit saja?\" Kamu tidak sendiri. Rumah dengan dua anak adalah arena negosiasi 24 jam." },
          { title: "Akarnya sering di orang tua", body: "\"Bertakwalah kepada Allah dan berlaku adillah di antara anak-anak kalian\" (HR. Bukhari 2587) — hadith ini ditujukan kepada ORANG TUA." },
          { title: "Adab 1 & 2", body: "Panggilan yang baik (jangan biarkan ejekan walau bercanda). Salam & minta izin sebelum masuk kamar saudara." },
          { title: "Adab 3 & 4", body: "Berbagi tanpa dipaksa — tiap anak punya satu laci pribadi. Saling mendoakan: \"Ya Allah, sembuhkan adek\" menyembuhkan luka tak terlihat." },
          { title: "Saat bertengkar: 4 langkah", body: "Pisahkan 5 menit. Dengar bergantian (yang muda dulu). Cari fakta, bukan menyalahkan. Minta maaf tatap mata, lalu peluk." },
          { title: "Yang harus dihindari", body: "\"Kamu kan kakak, harus ngalah\" (ketidakadilan). \"Lihat adek, lebih pintar\" (iri). Tertawa di pertengkaran. Mengungkit kesalahan lama." },
          { title: "Yang harus dibiasakan", body: "Foto bareng dibingkai. Doakan bersama sebut nama. Tugas berdua. Cerita Hasan & Husain. Simpan & bagikan." },
        ],
        en: [
          { title: "Manners Between Siblings — 1/7", body: "\"Why can't my kids get along for 30 minutes?\" You're not alone. A home with two children is a 24-hour negotiation arena." },
          { title: "The root is often the parents", body: "\"Fear Allah and be just among your children\" (Bukhari 2587) — this hadith is addressed to PARENTS." },
          { title: "Manners 1 & 2", body: "Kind forms of address (no mocking nicknames, even joking). Greeting & asking permission before entering a sibling's room." },
          { title: "Manners 3 & 4", body: "Sharing without force — each child has one private drawer. Praying for each other: \"O Allah, heal my sibling\" heals unseen wounds." },
          { title: "When they fight: 4 steps", body: "Separate 5 min. Listen in turns (younger first). Find facts, not blame. Apologize with eye contact, then hug." },
          { title: "What to avoid", body: "\"You're older, give in\" (injustice). \"Look, they're smarter\" (envy). Laughing at their fights. Dredging up old mistakes." },
          { title: "What to build", body: "A framed photo together. Praying together by name. Shared chores. The story of Hasan & Husain. Save & share." },
        ],
      },
      shortScript: {
        id: `[0–3 detik] HOOK: Anak-anakmu bertengkar terus? Akarnya sering bukan di anak — tapi di sikap orang tua.

[3–15 detik] MASALAH: "Kamu kan kakak, harus ngalah." "Lihat adek, lebih pintar." Dua kalimat ini menanam ketidakadilan dan iri yang sulit dicabut.

[15–35 detik] SOLUSI: Empat adab: panggilan baik, salam & izin, berbagi tanpa dipaksa, saling mendoakan. Saat bertengkar: pisahkan, dengar bergantian, cari fakta bukan menyalahkan.

[35–55 detik] BUKTI: "Berlaku adillah di antara anak-anak kalian" (HR. Bukhari) — ditujukan ke orang tua. Adil bukan sama persis, tapi tiap anak merasa dihormati.

[55–60 detik] CTA: "Simpan 4 langkah ini untuk pertengkaran berikutnya."`,
        en: `[0–3s] HOOK: Your kids fight constantly? The root is often not the kids — it's the parents' stance.

[3–15s] PROBLEM: "You're the older one, give in." "Look, your sibling is smarter." These two lines plant injustice and hard-to-remove envy.

[15–35s] SOLUTION: Four manners: kind address, greeting & permission, sharing without force, praying for each other. When they fight: separate, listen in turns, find facts not blame.

[35–55s] PROOF: "Be just among your children" (Bukhari) — addressed to parents. Justice isn't identical treatment; it's each child feeling respected.

[55–60s] CTA: "Save these 4 steps for the next fight."`,
      },
      pin: {
        id: {
          title: "Adab Bersaudara: Mengurangi Pertengkaran Kakak-Adik",
          description: "Empat adab antar saudara dalam Islam + 4 langkah menengahi pertengkaran + hal yang harus dihindari orang tua. Untuk keluarga muslim dengan lebih dari satu anak.",
        },
        en: {
          title: "Sibling Manners in Islam: Fewer Fights at Home",
          description: "Four Islamic manners between siblings + 4 steps to mediate a fight + what parents should avoid. For Muslim families with more than one child.",
        },
      },
      checklist: {
        id: [
          "Biasakan panggilan yang baik (\"kakak\", \"adik\"), larang ejekan",
          "Salam & ketuk sebelum masuk kamar saudara",
          "Beri tiap anak satu laci pribadi — tidak diambil tanpa izin",
          "Ajarkan saling mendoakan (saat sakit, ulang tahun, ujian)",
          "Saat bertengkar: pisahkan dulu ±5 menit",
          "Dengar bergantian — yang lebih muda bicara dulu",
          "Cari fakta, bukan menyalahkan",
          "Minta maaf sambil tatap mata, lalu peluk",
          "Hindari: \"kamu kan kakak harus ngalah\" & membanding-bandingkan",
          "Bangun kenangan bersama: foto, tugas berdua, doa sebut nama",
        ],
        en: [
          "Use kind address (\"big brother\", \"little sister\"), ban mockery",
          "Greet & knock before entering a sibling's room",
          "Give each child one private drawer — not taken without permission",
          "Teach them to pray for each other (illness, birthday, exams)",
          "When they fight: separate first for ~5 minutes",
          "Listen in turns — the younger speaks first",
          "Find facts, not blame",
          "Apologize with eye contact, then hug",
          "Avoid: \"you're older, give in\" & comparisons",
          "Build shared memories: photos, joint chores, du'a by name",
        ],
      },
    },
    faq: [
      {
        question: {
          id: "Bagaimana cara mengurangi pertengkaran kakak-adik menurut Islam?",
          en: "How can I reduce sibling fighting the Islamic way?",
        },
        answer: {
          id: "Kuncinya <strong>adab yang ditanam</strong>, dan sering kali akarnya ada pada orang tua, bukan anak. Rasulullah ﷺ bersabda: \"Bertakwalah kepada Allah dan berlaku adillah di antara anak-anak kalian\" (HR. Bukhari 2587, Muslim 1623) — hadith ini ditujukan kepada <em>orang tua</em>. Empat adab yang dibiasakan: panggilan yang baik, salam & minta izin sebelum masuk kamar, berbagi tanpa dipaksa, dan saling mendoakan.",
          en: "The key is the <strong>manners you instill</strong>, and the root is often the parents, not the children. The Prophet ﷺ said: \"Fear Allah and be just among your children\" (Bukhari 2587, Muslim 1623) — addressed to <em>parents</em>. Four manners to build: kind forms of address, greeting & asking permission before entering a room, sharing without being forced, and praying for one another.",
        },
      },
      {
        question: {
          id: "Apakah kakak harus selalu mengalah pada adik?",
          en: "Should the older sibling always give in to the younger?",
        },
        answer: {
          id: "Tidak. Kalimat \"Kamu kan kakak, harus ngalah\" justru <strong>mengajarkan ketidakadilan</strong> dan menanam rasa tidak dihargai. Begitu juga membanding-bandingkan (\"lihat adek, lebih pintar\") menanam iri yang sulit dicabut. Adil bukan berarti sama persis, tapi setiap anak merasa haknya dihormati.",
          en: "No. Saying \"You're the older one, you must give in\" actually <strong>teaches injustice</strong> and plants a sense of being unappreciated. Likewise, comparisons (\"look, your sibling is smarter\") plant hard-to-remove envy. Fairness isn't identical treatment — it's each child feeling their rights are respected.",
        },
      },
      {
        question: {
          id: "Apa langkah menengahi saat anak-anak sedang bertengkar?",
          en: "What steps should I take to mediate a fight between kids?",
        },
        answer: {
          id: "Empat langkah: (1) <strong>pisahkan dulu</strong> — masing-masing ke ruang sendiri ±5 menit; (2) <strong>dengar bergantian</strong> — yang lebih muda bicara dulu; (3) <strong>cari fakta, bukan menyalahkan</strong> — \"Jadi tadi kakak ambil mainan, lalu adek dorong. Begitu?\"; (4) <strong>minta maaf sambil tatap mata</strong>, lalu pelukan. Hindari mengungkit kesalahan lama — setiap pertengkaran adalah pertengkaran baru.",
          en: "Four steps: (1) <strong>separate first</strong> — each to their own space for ~5 minutes; (2) <strong>listen in turns</strong> — the younger speaks first; (3) <strong>find facts, not blame</strong> — \"So you took the toy, then your brother pushed. Right?\"; (4) <strong>apologize with eye contact</strong>, then a hug. Don't dredge up old mistakes — each fight is a new one.",
        },
      },
    ],
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
    updated: "2026-09-12",
    readingTimeMin: 8,
    author: "tim-baby-mo",
    kit: {
      quote: {
        id: "Kamu tidak bisa menjaga anakmu 24 jam. Tapi kamu bisa mengajarinya meminta penjagaan dari Yang Maha Menjaga — setiap pagi sebelum ia keluar pintu, setiap petang sebelum tidur. Itu warisan yang tidak terlihat, tapi terasa seumur hidupnya.",
        en: "You can't protect your child 24 hours a day. But you can teach them to ask protection from the Ever-Watchful — every morning before they step out, every evening before sleep. An invisible legacy they'll feel for life.",
      },
      carousel: {
        id: [
          { title: "Dzikir Pagi & Petang untuk Anak — 1/7", body: "Islam memberi lebih dari sekadar kekhawatiran: ada amal yang bisa kita ajarkan pada anak yang menjadi perlindungan dirinya sendiri." },
          { title: "Kenapa pagi & petang", body: "\"Sebutlah nama Tuhanmu pada pagi dan petang\" (QS. Al-Insan 25). Pagi = pintu masuk hari. Petang = pintu masuk malam." },
          { title: "Versi paling sederhana", body: "Untuk anak 3–6, satu doa yang sama pagi & petang: \"Bismillahilladzi la yadhurru ma'asmihi syai'un…\" (3×). Tidak perlu hafal sepuluh." },
          { title: "Minggu 1–2", body: "Minggu 1: orang tua baca, anak mengamati. Minggu 2: ajak menirukan — sekali pagi, sekali petang. Pegang tangan anak saat membaca." },
          { title: "Minggu 3–4", body: "Minggu 3: balik posisi, anak yang memimpin, bantu kalau lupa. Minggu 4: otomatis. Belum? Lanjut ritme yang sama. Tidak ada balapan." },
          { title: "Apa yang berubah", body: "Setelah 2–3 bulan: anak yang cemas berangkat sekolah lebih tenang, yang sulit tidur cepat tertidur — dan mulai mengajak orang tuanya membaca." },
          { title: "Setelah terbiasa", body: "Usia 7–8: tambah Al-Ikhlas, Al-Falaq, An-Nas & Ayat Kursi. Tapi 2 doa rutin > 10 doa terlupakan. Simpan & bagikan." },
        ],
        en: [
          { title: "Morning & Evening Adhkar for Kids — 1/7", body: "Islam gives more than worry: deeds we can teach a child that become their own protection." },
          { title: "Why morning & evening", body: "\"Remember the name of your Lord morning and evening\" (Al-Insan 25). Morning = the day's gateway. Evening = the night's gateway." },
          { title: "The simplest version", body: "For ages 3–6, one du'a both times: \"Bismillahilladhi la yadurru ma'asmihi shay'un…\" (3×). No need to memorize ten." },
          { title: "Weeks 1–2", body: "Week 1: parent recites, child watches. Week 2: invite them to repeat — once morning, once evening. Hold the child's hand while reciting." },
          { title: "Weeks 3–4", body: "Week 3: flip roles, the child leads, you help if they forget. Week 4: automatic. Not yet? Keep the rhythm. No race." },
          { title: "What changes", body: "After 2–3 months: an anxious child is calmer going to school, a restless one falls asleep faster — and starts inviting you to recite." },
          { title: "Once it's a habit", body: "Ages 7–8: add Al-Ikhlas, Al-Falaq, An-Nas & Ayat al-Kursi. But 2 consistent du'as > 10 forgotten ones. Save & share." },
        ],
      },
      shortScript: {
        id: `[0–3 detik] HOOK: Kamu tidak bisa jaga anakmu 24 jam. Tapi kamu bisa ajari dia satu doa perlindungan.

[3–15 detik] MASALAH: Orang tua khawatir — anak main di luar, tidur sendirian, berangkat sekolah. Tapi kekhawatiran saja tidak menjaga.

[15–35 detik] SOLUSI: Ajari satu doa pagi & petang: "Bismillahilladzi la yadhurru ma'asmihi syai'un…" 3 kali. Pagi sebelum keluar pintu, petang sebelum tidur. Cukup satu, tidak perlu sepuluh.

[35–55 detik] BUKTI: Rasulullah ﷺ menjanjikan perlindungan menyeluruh bagi yang membacanya 3× pagi/petang. Bangun rutinitas 4 minggu: orang tua dulu, lalu anak memimpin.

[55–60 detik] CTA: "Simpan doanya. Mulai besok pagi."`,
        en: `[0–3s] HOOK: You can't guard your child 24/7. But you can teach them one protection du'a.

[3–15s] PROBLEM: Parents worry — kids playing outside, sleeping alone, heading to school. But worry alone doesn't protect.

[15–35s] SOLUTION: Teach one du'a morning & evening: "Bismillahilladhi la yadurru ma'asmihi shay'un…" 3 times. Morning before the door, evening before sleep. Just one, not ten.

[35–55s] PROOF: The Prophet ﷺ promised complete protection to whoever recites it 3× morning/evening. Build it over 4 weeks: parent first, then the child leads.

[55–60s] CTA: "Save the du'a. Start tomorrow morning."`,
      },
      pin: {
        id: {
          title: "Dzikir Pagi & Petang Anak: Rutinitas Perlindungan Harian",
          description: "Satu doa perlindungan pagi & petang untuk anak + cara membangun rutinitasnya dalam 4 minggu. Sederhana, tanpa memaksa. Untuk keluarga muslim.",
        },
        en: {
          title: "Morning & Evening Adhkar: A Child's Daily Protection",
          description: "One morning & evening protection du'a for children + how to build the routine in 4 weeks. Simple, without forcing. For Muslim families.",
        },
      },
      checklist: {
        id: [
          "Mulai satu doa yang sama untuk pagi dan petang",
          "Pagi: sebelum berangkat sekolah / keluar rumah",
          "Petang: sebelum malam / sebelum tidur",
          "Minggu 1: orang tua baca, anak cukup mengamati",
          "Minggu 2: ajak anak menirukan, pegang tangannya",
          "Minggu 3: anak memimpin, bantu kalau lupa",
          "Minggu 4: biarkan otomatis — tidak ada balapan",
          "Manfaatkan waktu yang sudah ada (pakai sepatu, tunggu Maghrib)",
          "Jangan korelasikan dengan hukuman kalau lupa",
          "Usia 7–8: tambah Al-Ikhlas, Al-Falaq, An-Nas, Ayat Kursi",
        ],
        en: [
          "Start with one du'a used both morning and evening",
          "Morning: before school / leaving the house",
          "Evening: before night / before sleep",
          "Week 1: parent recites, child just watches",
          "Week 2: invite the child to repeat, hold their hand",
          "Week 3: the child leads, help if they forget",
          "Week 4: let it become automatic — no race",
          "Use existing moments (putting on shoes, waiting for Maghrib)",
          "Don't tie it to punishment when they forget",
          "Ages 7–8: add Al-Ikhlas, Al-Falaq, An-Nas, Ayat al-Kursi",
        ],
      },
    },
    faq: [
      {
        question: {
          id: "Apa doa perlindungan pagi dan petang yang paling sederhana untuk anak?",
          en: "What's the simplest morning & evening protection du'a for a child?",
        },
        answer: {
          id: "Untuk anak 3–6 tahun, mulai dari satu doa yang sama di pagi dan petang: <strong>\"Bismillahilladzi la yadhurru ma'asmihi syai'un fil-ardhi wa la fis-sama', wa huwas-sami'ul-'alim\"</strong> (dibaca 3×) — \"Dengan nama Allah yang dengan menyebut nama-Nya, segala sesuatu di bumi dan langit tidak akan memberi mudharat.\" Rasulullah ﷺ menjanjikan perlindungan menyeluruh bagi yang membacanya 3× pagi dan petang.",
          en: "For ages 3–6, start with one du'a used both morning and evening: <strong>\"Bismillahilladhi la yadurru ma'asmihi shay'un fil-ardi wa la fis-sama', wa huwas-sami'ul-'alim\"</strong> (recited 3×) — \"In the name of Allah, with whose name nothing on earth or in heaven can cause harm.\" The Prophet ﷺ promised complete protection to whoever recites it 3× morning and evening.",
        },
      },
      {
        question: {
          id: "Kapan waktu membaca dzikir pagi dan petang untuk anak?",
          en: "When should a child recite the morning and evening adhkar?",
        },
        answer: {
          id: "<strong>Pagi</strong> adalah pintu masuk hari — untuk anak, sebelum berangkat sekolah, sebelum bertemu dunia yang lebih besar dari rumah. <strong>Petang</strong> adalah pintu masuk malam — sebelum anak tidur sendirian di kamarnya. Manfaatkan waktu yang sudah ada: sambil pakai sepatu di pagi hari, sambil menunggu Maghrib di sore hari.",
          en: "<strong>Morning</strong> is the day's gateway — for a child, before leaving for school, before meeting the world beyond home. <strong>Evening</strong> is the night's gateway — before they sleep alone in their room. Use existing moments: while putting on shoes in the morning, while waiting for Maghrib in the evening.",
        },
      },
      {
        question: {
          id: "Bagaimana membangun rutinitas dzikir pada anak?",
          en: "How do I build a daily adhkar routine for a child?",
        },
        answer: {
          id: "Pola empat minggu: <strong>Minggu 1</strong> — orang tua membaca dengan suara terdengar, anak cukup mengamati; <strong>Minggu 2</strong> — ajak menirukan, sekali pagi sekali petang; <strong>Minggu 3</strong> — balik posisi, anak yang memimpin dan orang tua membantu jika lupa; <strong>Minggu 4</strong> — otomatis. Kalau belum, lanjut dengan ritme yang sama; tidak ada balapan. Pegang tangan anak saat membaca agar terasa bermakna.",
          en: "A four-week pattern: <strong>Week 1</strong> — the parent recites audibly, the child just watches; <strong>Week 2</strong> — invite them to repeat, once morning, once evening; <strong>Week 3</strong> — flip roles, the child leads and you help if they forget; <strong>Week 4</strong> — automatic. If not yet, continue the same rhythm; there's no race. Hold the child's hand while reciting to make it feel meaningful.",
        },
      },
      {
        question: {
          id: "Berapa banyak doa yang perlu diajarkan di awal?",
          en: "How many du'as should I teach at first?",
        },
        answer: {
          id: "Cukup <strong>satu doa di pagi dan satu di petang</strong> — tidak perlu langsung hafal sepuluh. Setelah anak nyaman (biasanya usia 7–8), baru tambahkan Al-Ikhlas, Al-Falaq, An-Nas (3× pagi/petang) dan Ayat Kursi. Prinsipnya: <strong>lebih baik 2 doa rutin daripada 10 doa terlupakan.</strong>",
          en: "Just <strong>one du'a in the morning and one in the evening</strong> — no need to memorize ten at once. Once the child is comfortable (usually age 7–8), add Al-Ikhlas, Al-Falaq, An-Nas (3× morning/evening) and Ayat al-Kursi. The principle: <strong>two consistent du'as beat ten forgotten ones.</strong>",
        },
      },
    ],
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
    updated: "2026-09-12",
    readingTimeMin: 6,
    author: "tim-baby-mo",
    kit: {
      quote: {
        id: "Mengenalkan huruf hijaiyah pada anak 3–6 tahun bukan tentang kecepatan, tapi konsistensi dan kesenangan. Mulai dari 3 huruf, bukan 28. 10 menit sehari selama sebulan mengalahkan 70 menit seminggu sekali.",
        en: "Introducing the hijaiyah letters to a 3–6 year old isn't about speed — it's about consistency and joy. Start with 3 letters, not 28. Ten minutes a day for a month beats 70 minutes once a week.",
      },
      carousel: {
        id: [
          { title: "7 Cara Mengenalkan Hijaiyah — 1/7", body: "Usia 3–6 adalah golden age — otak menyerap paling cepat. Ini fondasi cinta Al-Qur'an seumur hidup, bukan sekadar hafalan." },
          { title: "1. Mulai 3 huruf, bukan 28", body: "Kesalahan umum: ingin anak hafal Alif–Ya' seminggu. Mulai Alif, Ba, Ta — kuasai 3 huruf ini 3–5 hari dulu." },
          { title: "2. Gunakan lagu hijaiyah", body: "Otak anak menyerap melodi 10× lebih cepat dari kata biasa. Nyanyikan berirama ceria sambil menggerakkan badan." },
          { title: "3. Kartu warna kontras", body: "Cetak kartu hijaiyah warna-warni. Tunjukkan 1 kartu per hari, tempel di pintu kulkas." },
          { title: "4. Game & 5. Tracing jari", body: "Game ramah anak membuat belajar terasa bermain. Tracing di nampan pasir/krayon membantu mengingat bentuk huruf." },
          { title: "6. Konsisten 10 menit/hari", body: "10 menit setiap hari selama 4 minggu = retensi 3× lipat dibanding 70 menit seminggu sekali." },
          { title: "7. Rayakan kemajuan kecil", body: "\"Subhanallah, kakak sudah hafal 5 huruf!\" — kalimat sederhana ini melepas dopamin di otak anak. Simpan & bagikan." },
        ],
        en: [
          { title: "7 Ways to Teach Hijaiyah — 1/7", body: "Ages 3–6 are the golden age — the brain absorbs fastest. This is a lifelong foundation of Qur'an love, not mere memorization." },
          { title: "1. Start with 3 letters, not 28", body: "Common mistake: wanting Alif–Ya in a week. Begin Alif, Ba, Ta — master these 3 over 3–5 days first." },
          { title: "2. Use a hijaiyah song", body: "A child's brain absorbs melody 10× faster than plain words. Sing it cheerfully while moving." },
          { title: "3. High-contrast color cards", body: "Print colorful hijaiyah cards. Show one a day, stick it on the fridge." },
          { title: "4. Games & 5. Finger tracing", body: "Child-friendly games make learning feel like play. Tracing in a sand tray/with crayons helps remember letter shapes." },
          { title: "6. Consistent 10 min/day", body: "10 minutes daily for 4 weeks = 3× the retention of 70 minutes once a week." },
          { title: "7. Celebrate small wins", body: "\"SubhanAllah, you know 5 letters!\" — this simple line releases dopamine in the child's brain. Save & share." },
        ],
      },
      shortScript: {
        id: `[0–3 detik] HOOK: Mau anak cinta Al-Qur'an? Jangan mulai dari 28 huruf hijaiyah. Mulai dari 3.

[3–15 detik] MASALAH: Orang tua sering ingin anak hafal Alif sampai Ya' dalam seminggu. Otak balita belum siap — hasilnya frustrasi, bukan cinta.

[15–35 detik] SOLUSI: Mulai Alif, Ba, Ta — kuasai 3 huruf dulu. Gabungkan lagu, kartu warna, game, dan tracing jari. 10 menit sehari, tiap hari.

[35–55 detik] BUKTI: 10 menit/hari selama sebulan menghasilkan retensi 3× lipat dibanding 70 menit seminggu sekali. Dan selalu rayakan: "Subhanallah, sudah 5 huruf!"

[55–60 detik] CTA: "Simpan 7 cara ini. Mulai dari 3 huruf hari ini."`,
        en: `[0–3s] HOOK: Want your child to love the Qur'an? Don't start with 28 hijaiyah letters. Start with 3.

[3–15s] PROBLEM: Parents often want Alif to Ya in a week. A toddler's brain isn't ready — the result is frustration, not love.

[15–35s] SOLUTION: Start Alif, Ba, Ta — master 3 first. Mix a song, color cards, games, and finger tracing. Ten minutes a day, every day.

[35–55s] PROOF: 10 min/day for a month yields 3× the retention of 70 minutes weekly. And always celebrate: "SubhanAllah, that's 5 letters!"

[55–60s] CTA: "Save these 7 ways. Start with 3 letters today."`,
      },
      pin: {
        id: {
          title: "7 Cara Menyenangkan Mengenalkan Huruf Hijaiyah ke Anak",
          description: "Cara mengajarkan huruf hijaiyah pada anak 3–6 tahun tanpa memaksa: mulai 3 huruf, lagu, kartu, game, tracing, 10 menit sehari. Untuk keluarga muslim.",
        },
        en: {
          title: "7 Fun Ways to Teach Kids the Hijaiyah Letters",
          description: "How to teach the Arabic letters to a 3–6 year old without pressure: start with 3 letters, songs, cards, games, tracing, 10 minutes a day. For Muslim families.",
        },
      },
      checklist: {
        id: [
          "Mulai dari 3 huruf (Alif, Ba, Ta), bukan 28",
          "Kuasai 3 huruf itu selama 3–5 hari sebelum menambah",
          "Nyanyikan lagu hijaiyah berirama ceria",
          "Buat kartu warna kontras, tempel di kulkas",
          "Tunjukkan 1 kartu per hari",
          "Gunakan game hijaiyah yang ramah anak",
          "Tracing huruf dengan jari (nampan pasir / krayon)",
          "Konsisten 10 menit setiap hari",
          "Lakukan rutin selama 4 minggu",
          "Rayakan setiap kemajuan kecil dengan pujian tulus",
        ],
        en: [
          "Start with 3 letters (Alif, Ba, Ta), not 28",
          "Master those 3 over 3–5 days before adding more",
          "Sing a cheerful hijaiyah song",
          "Make high-contrast color cards, stick them on the fridge",
          "Show one card a day",
          "Use a child-friendly hijaiyah game",
          "Trace letters with a finger (sand tray / crayons)",
          "Be consistent — 10 minutes every day",
          "Keep it up for 4 weeks",
          "Celebrate every small win with sincere praise",
        ],
      },
    },
    faq: [
      {
        question: {
          id: "Umur berapa anak mulai belajar huruf hijaiyah?",
          en: "At what age should a child start learning the hijaiyah letters?",
        },
        answer: {
          id: "Usia <strong>3–6 tahun</strong> adalah <em>golden age</em> — masa otak menyerap informasi paling cepat. Mengenalkan huruf hijaiyah di usia ini bukan sekadar hafalan, tapi membangun fondasi cinta Al-Qur'an seumur hidup. Yang penting bukan kecepatan, tapi konsistensi dan kesenangan.",
          en: "Ages <strong>3–6</strong> are the <em>golden age</em> — when the brain absorbs information fastest. Introducing the hijaiyah letters now isn't just memorization; it lays a lifelong foundation of love for the Qur'an. What matters isn't speed but consistency and enjoyment.",
        },
      },
      {
        question: {
          id: "Berapa huruf hijaiyah yang sebaiknya diajarkan di awal?",
          en: "How many hijaiyah letters should I teach at the start?",
        },
        answer: {
          id: "Mulai dari <strong>3 huruf, bukan 28</strong>. Kesalahan umum adalah ingin anak hafal Alif sampai Ya' dalam seminggu — otak balita belum siap. Mulai dari Alif (ا), Ba (ب), Ta (ت), dan kuasai tiga huruf ini selama 3–5 hari sebelum menambah yang berikutnya.",
          en: "Start with <strong>3 letters, not 28</strong>. The common mistake is wanting a child to memorize Alif through Ya in a week — a toddler's brain isn't ready. Begin with Alif (ا), Ba (ب), Ta (ت), and master these three over 3–5 days before adding more.",
        },
      },
      {
        question: {
          id: "Bagaimana cara mengenalkan huruf hijaiyah yang menyenangkan?",
          en: "What are fun ways to introduce the hijaiyah letters?",
        },
        answer: {
          id: "Gabungkan beberapa cara: <strong>lagu hijaiyah</strong> (otak anak menyerap melodi jauh lebih cepat dari kata biasa), <strong>kartu bergambar warna kontras</strong> yang ditempel di kulkas, <strong>game interaktif</strong> ramah anak, dan <strong>tracing dengan jari</strong> di nampan pasir atau krayon. Selalu rayakan kemajuan kecil: \"Subhanallah, kakak sudah hafal 5 huruf!\"",
          en: "Mix several methods: a <strong>hijaiyah song</strong> (children absorb melody far faster than plain words), <strong>high-contrast picture cards</strong> stuck on the fridge, a child-friendly <strong>interactive game</strong>, and <strong>finger tracing</strong> in a sand tray or with crayons. Always celebrate small wins: \"SubhanAllah, you know 5 letters now!\"",
        },
      },
      {
        question: {
          id: "Berapa lama waktu belajar hijaiyah yang ideal per hari?",
          en: "How much daily practice is ideal for learning hijaiyah?",
        },
        answer: {
          id: "<strong>10 menit setiap hari</strong> jauh lebih efektif daripada satu sesi panjang seminggu sekali. Konsistensi 10 menit/hari selama 4 minggu menghasilkan retensi sekitar <strong>3× lipat</strong> dibanding 70 menit dalam satu kali pertemuan. Sedikit tapi rutin mengalahkan banyak tapi jarang.",
          en: "<strong>Ten minutes every day</strong> beats one long weekly session. Consistent 10 minutes/day for 4 weeks yields roughly <strong>3× the retention</strong> of 70 minutes in a single sitting. A little but regular beats a lot but rare.",
        },
      },
    ],
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
    updated: "2026-09-12",
    readingTimeMin: 14,
    author: "salman",
    faq: [
      {
        question: {
          id: "Apakah anak kecil wajib puasa Ramadan?",
          en: "Are young children required to fast in Ramadan?",
        },
        answer: {
          id: "Tidak. <strong>Tidak ada anak usia 0–10 tahun yang diwajibkan puasa</strong> — kewajiban baru berlaku setelah baligh. Tugas orang tua hanya satu: membuat Ramadan <em>terasa istimewa</em>, sehingga hubungan anak dengan ibadah tumbuh hangat, bukan sebagai beban.",
          en: "No. <strong>No child aged 0–10 is obligated to fast</strong> — the obligation begins after puberty. A parent's only task is to make Ramadan <em>feel special</em>, so the child's relationship with worship grows warm rather than burdensome.",
        },
      },
      {
        question: {
          id: "Bagaimana melatih anak puasa secara bertahap?",
          en: "How do I ease a child into fasting gradually?",
        },
        answer: {
          id: "Per usia: <strong>0–3 tahun</strong> cukup hadir di suasana (sahur/buka bersama); <strong>4–6 tahun</strong> sahur opsional dan puasa setengah hari sampai Dzuhur sebagai pencapaian besar; <strong>7–10 tahun</strong> mulai setengah hari, penuh hari adalah tahap lanjut — hormati ketika anak menyerah, yang penting mau coba lagi besok.",
          en: "By age: <strong>0–3</strong> just be present (sahur/iftar together); <strong>4–6</strong> optional sahur and a half-day fast to Dhuhr as a big win; <strong>7–10</strong> start half days, with full days a later milestone — respect when they give up; what matters is willingness to try again tomorrow.",
        },
      },
      {
        question: {
          id: "Bagaimana mempersiapkan anak sebelum Ramadan tiba?",
          en: "How do I prepare a child before Ramadan begins?",
        },
        answer: {
          id: "<strong>Bangun antisipasi.</strong> Hitung mundur visual di kulkas, ceritakan apa yang akan berubah (sahur, buka, banyak doa), beli/buat satu dekorasi baru, dan bila anak >7 dan berminat, latih satu-dua hari puasa Sya'ban setengah hari sebagai pemanasan. Anak yang tahu apa yang datang jauh lebih kooperatif.",
          en: "<strong>Build anticipation.</strong> A visual countdown on the fridge, tell them what will change (sahur, iftar, more du'a), make one new decoration, and if the child is 7+ and interested, practice a day or two of half-day Sha'ban fasting as a warm-up. A child who knows what's coming is far more cooperative.",
        },
      },
      {
        question: {
          id: "Bolehkah anak ikut sholat tarawih?",
          en: "Can children join tarawih prayers?",
        },
        answer: {
          id: "Boleh, tapi <strong>mulai dari rumah</strong>: 2–4 rakaat bersama keluarga, lalu anak tidur dan orang tua melanjutkan. Kalau ke masjid, bawa \"ransel masjid\": sajadah kecil, buku tenang, air, dan biskuit. Jangan jadikan beban — kehadiran yang menyenangkan lebih penting daripada jumlah rakaat.",
          en: "Yes, but <strong>start at home</strong>: 2–4 rakaat as a family, then the child sleeps while parents continue. At the mosque, pack a \"mosque bag\": a small rug, a quiet book, water, and a biscuit. Don't make it a burden — a pleasant presence matters more than the rakaat count.",
        },
      },
    ],
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
    updated: "2026-09-12",
    readingTimeMin: 22,
    author: "tim-baby-mo",
    kit: {
      quote: {
        id: "Haji adalah rukun Islam kelima — wajib sekali seumur hidup bagi yang mampu (istitha'ah). Tapi tanda haji mabrur bukan di Tanah Suci: akhlak yang lebih baik, lebih lembut kepada keluarga, dan tidak kembali kepada dosa lama setelah pulang.",
        en: "Hajj is the fifth pillar of Islam — obligatory once in a lifetime for those able (istita'ah). But the sign of an accepted Hajj isn't in the Holy Land: better character, gentleness with family, and not returning to old sins after coming home.",
      },
      carousel: {
        id: [
          { title: "Panduan Haji untuk Jamaah Indonesia — 1/7", body: "Haji adalah rukun Islam kelima — kunjungan ke Baitullah pada waktu tertentu, wajib sekali seumur hidup bagi yang mampu." },
          { title: "5 syarat wajib", body: "Islam, baligh, berakal, merdeka, dan mampu (istitha'ah) — mampu secara fisik, finansial, dan keamanan perjalanan." },
          { title: "3 jenis pelaksanaan", body: "Ifrad, Tamattu', dan Qiran — berbeda dalam urutan haji & umrah serta ada/tidaknya dam (denda). Mayoritas jamaah Indonesia: Tamattu'." },
          { title: "3 jalur di Indonesia", body: "Reguler (Kemenag, Rp 56–60 jt, tunggu 15–48 th), Khusus/ONH Plus (USD 10–13 rb, 5–9 th), Furoda (visa undangan, tanpa tunggu)." },
          { title: "Cara mulai daftar reguler", body: "Buka tabungan haji (setoran awal Rp 25 jt) → dapat Bukti Setoran Awal → bawa ke Kemenag → dapat nomor porsi → tunggu giliran." },
          { title: "Bolehkah anak ikut haji?", body: "Boleh, hajinya sah (sunnah). Tapi setelah baligh tetap wajib haji lagi. Fisik berat untuk anak — banyak ulama sarankan tunda sampai 7+ / 12+." },
          { title: "Haji mabrur", body: "Tolok ukurnya bukan di Makkah, tapi perubahan hidup setelah pulang: akhlak lebih baik, lebih dekat ibadah, lebih dermawan. Simpan & bagikan." },
        ],
        en: [
          { title: "A Hajj Guide for Indonesian Pilgrims — 1/7", body: "Hajj is the fifth pillar — a visit to the House of Allah at a set time, obligatory once in a lifetime for those able." },
          { title: "5 conditions of obligation", body: "Islam, puberty, sound mind, freedom, and ability (istita'ah) — physical, financial, and travel-safety capacity." },
          { title: "3 types of performance", body: "Ifrad, Tamattu', and Qiran — differing in the order of Hajj & Umrah and whether a dam (offering) applies. Most Indonesians: Tamattu'." },
          { title: "3 registration paths (Indonesia)", body: "Regular (Kemenag, IDR 56–60M, 15–48 yr wait), Special/ONH Plus (USD 10–13K, 5–9 yr), Furoda (invitation visa, no wait)." },
          { title: "Starting regular registration", body: "Open a Hajj savings account (IDR 25M initial deposit) → get the deposit receipt → bring to Kemenag → receive a portion number → wait your turn." },
          { title: "Can children do Hajj?", body: "Yes, it's valid (supererogatory). But after puberty it's still obligatory if able. It's physically demanding — many scholars suggest waiting to 7+ / 12+." },
          { title: "A mabrur Hajj", body: "The measure isn't in Makkah but the life change after: better character, closer worship, more generosity. Save & share." },
        ],
      },
      shortScript: {
        id: `[0–3 detik] HOOK: Waiting list haji reguler di Indonesia bisa 15 sampai 48 tahun. Kalau belum daftar, kamu sudah "telat".

[3–15 detik] MASALAH: Banyak yang menunda daftar haji karena bingung alurnya, padahal antriannya berjalan puluhan tahun.

[15–35 detik] SOLUSI: Ada 3 jalur: Reguler, Khusus (ONH Plus), Furoda. Untuk reguler: buka tabungan haji, setoran awal Rp 25 juta, dapat nomor porsi, masuk antrian.

[35–55 detik] BUKTI: Haji wajib sekali seumur hidup bagi yang mampu. Tapi haji mabrur diukur setelah pulang — akhlak lebih baik, lebih lembut ke keluarga.

[55–60 detik] CTA: "Simpan panduan ini. Bagikan ke keluarga yang berencana haji."`,
        en: `[0–3s] HOOK: Indonesia's regular Hajj waiting list can be 15 to 48 years. If you haven't registered, you're already "late."

[3–15s] PROBLEM: Many delay registering because the process confuses them — yet the queue runs for decades.

[15–35s] SOLUTION: Three paths: Regular, Special (ONH Plus), Furoda. For regular: open a Hajj savings account, IDR 25M initial deposit, get a portion number, join the queue.

[35–55s] PROOF: Hajj is obligatory once in a lifetime for the able. But a mabrur Hajj is measured after you return — better character, gentler with family.

[55–60s] CTA: "Save this guide. Share it with family planning for Hajj."`,
      },
      pin: {
        id: {
          title: "Panduan Haji untuk Jamaah Indonesia: Syarat, Jalur & Alur",
          description: "Panduan haji lengkap untuk jamaah Indonesia: 5 syarat wajib, 3 jenis haji, 3 jalur pendaftaran (Reguler/ONH Plus/Furoda), cara daftar, dan tanda haji mabrur.",
        },
        en: {
          title: "A Hajj Guide for Indonesian Pilgrims: Conditions, Paths & Steps",
          description: "A complete Hajj guide for Indonesian pilgrims: 5 conditions, 3 types of Hajj, 3 registration paths (Regular/ONH Plus/Furoda), how to register, and signs of a mabrur Hajj.",
        },
      },
      checklist: {
        id: [
          "Pahami haji sebagai rukun Islam kelima (wajib 1× bagi yang mampu)",
          "Cek 5 syarat wajib, terutama istitha'ah (kemampuan)",
          "Pilih jalur: Reguler, Khusus (ONH Plus), atau Furoda",
          "Reguler: buka tabungan haji, setoran awal Rp 25 juta",
          "Dapatkan Bukti Setoran Awal, bawa ke Kantor Kemenag",
          "Dapat nomor porsi seumur hidup di Siskohat",
          "Cek estimasi keberangkatan di haji.kemenag.go.id",
          "Saat dipanggil: pelunasan, manasik, tes kesehatan",
          "Pertimbangkan matang jika ingin membawa anak (fisik berat)",
          "Ingat tolok ukur haji mabrur: perubahan akhlak setelah pulang",
        ],
        en: [
          "Understand Hajj as the fifth pillar (obligatory once for the able)",
          "Check the 5 conditions, especially istita'ah (ability)",
          "Choose a path: Regular, Special (ONH Plus), or Furoda",
          "Regular: open a Hajj savings account, IDR 25M initial deposit",
          "Get the deposit receipt, bring it to the Kemenag office",
          "Receive a lifetime portion number in Siskohat",
          "Check departure estimates at haji.kemenag.go.id",
          "When called: final payment, manasik training, medical exam",
          "Weigh carefully before bringing a child (physically demanding)",
          "Remember the measure of a mabrur Hajj: changed character after return",
        ],
      },
    },
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
    updated: "2026-09-12",
    readingTimeMin: 18,
    author: "tim-baby-mo",
    kit: {
      quote: {
        id: "Tidak ada Idul Adha tanpa kisah Nabi Ibrahim ﷺ dan Ismail. Setiap anak muslim sebaiknya mendengarnya, kalau bisa setiap tahun — kisah cinta seorang ayah kepada Allah yang melebihi cintanya pada segalanya, dan seorang anak yang berserah dengan tenang.",
        en: "There is no Eid al-Adha without the story of Prophet Ibrahim ﷺ and Ismail. Every Muslim child should hear it, ideally every year — a father's love for Allah above all else, and a son who submitted with calm trust.",
      },
      carousel: {
        id: [
          { title: "Idul Adha & Qurban untuk Keluarga — 1/7", body: "Salah satu dari dua hari raya Islam, jatuh 10 Dzulhijjah. Disebut \"Yaumun Nahr\" — hari penyembelihan, napak tilas pengorbanan Nabi Ibrahim ﷺ." },
          { title: "Kisah Ibrahim & Ismail", body: "Ibrahim ﷺ diperintahkan menyembelih putra yang lama dinanti. Keduanya berserah — lalu Allah menggantinya dengan seekor domba. Cerita ini untuk anak setiap tahun." },
          { title: "Sholat Ied", body: "Dua rakaat berjamaah pagi hari, dengan takbir tambahan. Ajak anak pakai baju terbaik, berangkat sambil takbir." },
          { title: "Syarat & tata cara qurban", body: "Hewan (kambing/sapi/unta) cukup umur & sehat, disembelih setelah Sholat Ied sampai 13 Dzulhijjah. Sebut nama, hadap kiblat, baca bismillah & takbir." },
          { title: "Hari Tasyriq (11–13)", body: "Hari makan, minum, dan mengingat Allah. Dilarang puasa. Waktu berbagi daging & bersyukur bersama keluarga." },
          { title: "Cara melibatkan anak", body: "Ajak lihat proses qurban (sesuai kesiapan), bagikan daging ke tetangga, dan jelaskan makna berkurban: mendekat kepada Allah." },
          { title: "Inti untuk anak", body: "Berkurban bukan soal daging — tapi menyerahkan yang kita cintai karena Allah, seperti Ibrahim ﷺ. Simpan & bagikan." },
        ],
        en: [
          { title: "Eid al-Adha & Qurbani for Families — 1/7", body: "One of Islam's two Eids, on 10 Dhul-Hijjah. Called \"Yawm an-Nahr\" — the day of sacrifice, following Prophet Ibrahim's ﷺ example." },
          { title: "The Ibrahim & Ismail story", body: "Ibrahim ﷺ was commanded to sacrifice his long-awaited son. Both submitted — then Allah replaced him with a ram. A story for kids every year." },
          { title: "The Eid prayer", body: "Two rakaat in congregation in the morning, with extra takbirs. Have the child wear their best and set out saying takbir." },
          { title: "Qurbani rules & method", body: "The animal (goat/cow/camel) of proper age & healthy, slaughtered after the Eid prayer through 13 Dhul-Hijjah. Name it, face qibla, say bismillah & takbir." },
          { title: "Days of Tashriq (11–13)", body: "Days of eating, drinking, and remembering Allah. Fasting is forbidden. A time to share meat & give thanks as a family." },
          { title: "Involving the child", body: "Let them watch the qurbani (per readiness), distribute meat to neighbors, and explain its meaning: drawing near to Allah." },
          { title: "The core for kids", body: "Sacrifice isn't about meat — it's giving up what we love for Allah, like Ibrahim ﷺ. Save & share." },
        ],
      },
      shortScript: {
        id: `[0–3 detik] HOOK: Anakmu tahu KENAPA kita berkurban di Idul Adha? Jawabannya bukan soal daging.

[3–15 detik] MASALAH: Banyak anak melihat Idul Adha hanya sebagai "hari potong hewan" — tanpa memahami kisah cinta di baliknya.

[15–35 detik] SOLUSI: Ceritakan Nabi Ibrahim ﷺ yang bersedia menyembelih putranya karena cinta kepada Allah, lalu Allah menggantinya dengan domba. Libatkan anak: lihat qurban, bagikan daging.

[35–55 detik] BUKTI: Idul Adha jatuh 10 Dzulhijjah, "Yaumun Nahr". Berkurban = menyerahkan yang kita cintai karena Allah. Itu inti yang anak harus bawa.

[55–60 detik] CTA: "Ceritakan kisah Ibrahim ke anakmu tahun ini. Simpan & bagikan."`,
        en: `[0–3s] HOOK: Does your child know WHY we sacrifice on Eid al-Adha? The answer isn't about the meat.

[3–15s] PROBLEM: Many kids see Eid al-Adha only as "animal-slaughter day" — without the love story behind it.

[15–35s] SOLUTION: Tell of Prophet Ibrahim ﷺ, willing to sacrifice his son out of love for Allah, then replaced with a ram. Involve the child: watch the qurbani, share the meat.

[35–55s] PROOF: Eid al-Adha falls on 10 Dhul-Hijjah, "Yawm an-Nahr". Sacrifice = giving up what we love for Allah. That's the core the child should carry.

[55–60s] CTA: "Tell the Ibrahim story to your child this year. Save & share."`,
      },
      pin: {
        id: {
          title: "Panduan Idul Adha & Qurban untuk Keluarga",
          description: "Makna Idul Adha, kisah Nabi Ibrahim untuk anak, tata cara Sholat Ied & qurban, hari Tasyriq, dan cara melibatkan anak. Untuk keluarga muslim Indonesia.",
        },
        en: {
          title: "Eid al-Adha & Qurbani Guide for Families",
          description: "The meaning of Eid al-Adha, the Ibrahim story for kids, the Eid prayer & qurbani method, the days of Tashriq, and how to involve children. For Muslim families.",
        },
      },
      checklist: {
        id: [
          "Ceritakan kisah Nabi Ibrahim & Ismail (setiap tahun)",
          "Idul Adha jatuh 10 Dzulhijjah — \"Yaumun Nahr\"",
          "Sholat Ied berjamaah + baju terbaik + takbir",
          "Qurban: hewan cukup umur & sehat, setelah Sholat Ied s/d 13 Dzulhijjah",
          "Saat menyembelih: hadap kiblat, bismillah & takbir, sebut nama",
          "Hari Tasyriq (11–13): hari makan & syukur, dilarang puasa",
          "Libatkan anak melihat proses qurban sesuai kesiapan",
          "Ajak anak membagikan daging ke tetangga & yang membutuhkan",
          "Jelaskan makna: mendekat kepada Allah, bukan soal daging",
          "Ulangi kisah & maknanya setiap Idul Adha",
        ],
        en: [
          "Tell the Ibrahim & Ismail story (every year)",
          "Eid al-Adha falls on 10 Dhul-Hijjah — \"Yawm an-Nahr\"",
          "Eid prayer in congregation + best clothes + takbir",
          "Qurbani: animal of proper age & healthy, after Eid prayer through 13 Dhul-Hijjah",
          "When slaughtering: face qibla, bismillah & takbir, name it",
          "Days of Tashriq (11–13): days of eating & gratitude, no fasting",
          "Let the child watch the qurbani per their readiness",
          "Have the child help distribute meat to neighbors & the needy",
          "Explain the meaning: drawing near to Allah, not about meat",
          "Repeat the story & its meaning every Eid al-Adha",
        ],
      },
    },
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
    updated: "2026-09-12",
    readingTimeMin: 7,
    author: "tim-baby-mo",
    kit: {
      quote: {
        id: "Rajab menanam, Sya'ban menyirami, Ramadan memanen. Bulan Rajab adalah waktu mulai mempersiapkan hati anak menuju Ramadan yang tinggal dua bulan lagi — dengan hitung mundur, doa singkat, dan satu proyek kebaikan kecil.",
        en: "Rajab plants, Sha'ban waters, Ramadan harvests. Rajab is when we begin preparing a child's heart for Ramadan, two months away — with a countdown, a short du'a, and one small good-deed project.",
      },
      carousel: {
        id: [
          { title: "Bulan Rajab Bersama Anak — 1/6", body: "Rajab adalah salah satu dari empat bulan haram (suci). Bulan pembuka menuju Ramadan — waktu mulai mempersiapkan hati." },
          { title: "Kenapa Rajab istimewa", body: "Termasuk bulan haram — kebaikan lebih berbobot, keburukan lebih berat. Waktu yang baik menjaga lisan dan memperbanyak doa." },
          { title: "Doa Rajab yang singkat", body: "\"Allahumma baarik lanaa fii Rajab wa Sya'baan, wa ballighnaa Ramadhaan.\" Mudah dihafal anak, dibaca tiap pagi." },
          { title: "Mulai hitung mundur Ramadan", body: "\"Dua bulan lagi Ramadan, lho! Yuk siap-siap dari sekarang.\" Anak jadi menanti, bukan kaget." },
          { title: "Satu proyek Rajab", body: "Pilih satu kebaikan kecil rutin: sholat Subuh, atau sedekah seribu tiap hari ke celengan masjid. Latih konsistensi." },
          { title: "Yang perlu diluruskan", body: "\"Puasa Rajab\" yang dianggap wajib atau ritual malam tertentu tidak berdasar kuat. Puasa sunnah biasa boleh. Simpan & bagikan." },
        ],
        en: [
          { title: "The Month of Rajab with Kids — 1/6", body: "Rajab is one of the four sacred months. The opening month toward Ramadan — time to begin preparing the heart." },
          { title: "Why Rajab is special", body: "A sacred month — good weighs more, wrong weighs heavier. A good time to guard the tongue and increase du'a." },
          { title: "A short Rajab du'a", body: "\"Allahumma barik lana fi Rajab wa Sha'ban, wa ballighna Ramadan.\" Easy for kids to memorize, recited each morning." },
          { title: "Start the Ramadan countdown", body: "\"Two months to Ramadan! Let's get ready now.\" The child anticipates rather than being caught off guard." },
          { title: "One Rajab project", body: "Pick one small recurring good deed: Fajr prayer, or a coin of charity daily into a mosque jar. Train consistency." },
          { title: "What to set straight", body: "A \"Rajab fast\" treated as obligatory, or specific night rituals, have no firm basis. Ordinary sunnah fasting is fine. Save & share." },
        ],
      },
      shortScript: {
        id: `[0–3 detik] HOOK: Rajab menanam, Sya'ban menyirami, Ramadan memanen. Ramadan dimulai dari sekarang.

[3–15 detik] MASALAH: Banyak keluarga baru "sadar Ramadan" H-3. Anak kaget, rutinitas mendadak berubah, dan bulan suci terasa melelahkan.

[15–35 detik] SOLUSI: Mulai dari Rajab. Ajarkan doa singkat "Allahumma baarik lanaa fii Rajab wa Sya'baan…". Mulai hitung mundur. Pilih satu proyek kebaikan kecil.

[35–55 detik] BUKTI: Rajab termasuk bulan haram — kebaikan lebih berbobot. Tapi hati-hati: "puasa Rajab" wajib atau ritual khusus tidak berdasar kuat. Puasa sunnah biasa boleh.

[55–60 detik] CTA: "Simpan doa Rajab ini & mulai hitung mundur bareng anak."`,
        en: `[0–3s] HOOK: Rajab plants, Sha'ban waters, Ramadan harvests. Ramadan starts now.

[3–15s] PROBLEM: Many families only "realize Ramadan" 3 days before. The child is startled, routines change abruptly, and the sacred month feels exhausting.

[15–35s] SOLUTION: Start in Rajab. Teach the short du'a "Allahumma barik lana fi Rajab wa Sha'ban…". Begin the countdown. Pick one small good-deed project.

[35–55s] PROOF: Rajab is a sacred month — good deeds weigh more. But beware: an obligatory "Rajab fast" or special rituals have no firm basis. Ordinary sunnah fasting is fine.

[55–60s] CTA: "Save this Rajab du'a & start the countdown with your child."`,
      },
      pin: {
        id: {
          title: "Bulan Rajab Bersama Anak: Bulan Haram & Persiapan Ramadan",
          description: "Cara mengenalkan bulan Rajab ke anak: doa singkat Rajab, hitung mundur Ramadan, proyek kebaikan kecil, dan amalan yang perlu diluruskan. Untuk keluarga muslim.",
        },
        en: {
          title: "The Month of Rajab with Kids: Sacred Month & Ramadan Prep",
          description: "How to introduce Rajab to children: the short Rajab du'a, a Ramadan countdown, a small good-deed project, and practices to clarify. For Muslim families.",
        },
      },
      checklist: {
        id: [
          "Jelaskan Rajab sebagai salah satu dari 4 bulan haram",
          "Ajarkan doa singkat: \"Allahumma baarik lanaa fii Rajab wa Sya'baan…\"",
          "Baca doa itu bersama anak tiap pagi",
          "Mulai hitung mundur Ramadan (\"dua bulan lagi!\")",
          "Pilih satu \"proyek Rajab\": kebaikan kecil yang rutin",
          "Contoh proyek: sholat Subuh rutin / sedekah harian ke celengan",
          "Ajak anak lebih hati-hati menjaga lisan di bulan haram",
          "Puasa sunnah biasa (Senin–Kamis) boleh dilatih",
          "Luruskan: tidak ada \"puasa Rajab\" wajib atau ritual malam khusus",
          "Tekankan Rajab sebagai awal persiapan, bukan puncak",
        ],
        en: [
          "Explain Rajab as one of the 4 sacred months",
          "Teach the short du'a: \"Allahumma barik lana fi Rajab wa Sha'ban…\"",
          "Recite it with the child each morning",
          "Start the Ramadan countdown (\"two months to go!\")",
          "Pick one \"Rajab project\": a small recurring good deed",
          "Example: consistent Fajr prayer / daily coin of charity",
          "Encourage extra care with the tongue in a sacred month",
          "Ordinary sunnah fasting (Mon–Thu) may be practiced",
          "Clarify: there's no obligatory \"Rajab fast\" or special night ritual",
          "Frame Rajab as the start of preparation, not the peak",
        ],
      },
    },
    faq: [
      {
        question: {
          id: "Apa keutamaan bulan Rajab?",
          en: "What is the significance of the month of Rajab?",
        },
        answer: {
          id: "Rajab adalah salah satu dari <strong>empat bulan haram</strong> (bersama Dzulqa'dah, Dzulhijjah, Muharram). Orang dahulu berkata: <em>\"Rajab menanam, Sya'ban menyirami, Ramadan memanen\"</em> — artinya Rajab adalah waktu mulai mempersiapkan hati menuju Ramadan yang tinggal dua bulan lagi. Di bulan haram, kebaikan lebih berbobot dan keburukan lebih berat.",
          en: "Rajab is one of the <strong>four sacred months</strong> (with Dhul-Qa'dah, Dhul-Hijjah, Muharram). The elders said: <em>\"Rajab plants, Sha'ban waters, Ramadan harvests\"</em> — Rajab is when you begin preparing the heart for Ramadan, two months away. In a sacred month, good weighs more and wrong weighs heavier.",
        },
      },
      {
        question: {
          id: "Apa doa bulan Rajab yang bisa diajarkan ke anak?",
          en: "What Rajab du'a can I teach my child?",
        },
        answer: {
          id: "Doa masyhur yang pendek dan mudah dihafal anak: <strong>\"Allahumma baarik lanaa fii Rajab wa Sya'baan, wa ballighnaa Ramadhaan\"</strong> — \"Ya Allah, berkahilah kami di bulan Rajab dan Sya'ban, dan sampaikanlah kami ke bulan Ramadan.\" Bisa dibaca tiap pagi sebagai pengingat menyambut Ramadan.",
          en: "A short, well-known du'a that's easy for kids to memorize: <strong>\"Allahumma barik lana fi Rajab wa Sha'ban, wa ballighna Ramadan\"</strong> — \"O Allah, bless us in Rajab and Sha'ban, and let us reach Ramadan.\" Recite it each morning as a reminder that Ramadan is coming.",
        },
      },
      {
        question: {
          id: "Apakah ada puasa khusus yang wajib di bulan Rajab?",
          en: "Is there a special obligatory fast in Rajab?",
        },
        answer: {
          id: "Tidak. Berpuasa sunnah di Rajab <strong>boleh</strong> — sebagai puasa sunnah biasa (misalnya Senin-Kamis). Namun \"puasa Rajab\" yang dianggap <em>wajib</em> atau ritual malam tertentu dengan keutamaan yang dibuat-buat <strong>tidak memiliki dasar yang kuat</strong> dalam sunnah. Para ulama mengingatkan agar berhati-hati terhadap amalan tanpa dalil.",
          en: "No. Voluntary fasting in Rajab is <strong>permitted</strong> — as ordinary sunnah fasting (e.g. Mondays and Thursdays). But a \"Rajab fast\" treated as <em>obligatory</em>, or specific night rituals with invented virtues, have <strong>no strong basis</strong> in the Sunnah. Scholars caution against practices without evidence.",
        },
      },
    ],
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
    updated: "2026-09-12",
    readingTimeMin: 7,
    author: "tim-baby-mo",
    kit: {
      quote: {
        id: "Sya'ban sering \"terlewat\" karena berada di antara Rajab dan Ramadan. Padahal Rasulullah ﷺ justru paling banyak berpuasa sunnah di bulan ini — karena di Sya'ban amal-amal diangkat kepada Allah, dan beliau senang amalnya diangkat dalam keadaan berpuasa.",
        en: "Sha'ban is often \"skipped\" because it sits between Rajab and Ramadan. Yet the Prophet ﷺ fasted most in this very month — because in Sha'ban deeds are raised to Allah, and he loved for his to be raised while fasting.",
      },
      carousel: {
        id: [
          { title: "Bulan Sya'ban Bersama Anak — 1/6", body: "Bulan kedelapan, tepat sebelum Ramadan. Sering dilalaikan, padahal Rasulullah ﷺ paling banyak berpuasa sunnah di bulan ini." },
          { title: "Kenapa Nabi banyak puasa", body: "\"Sya'ban bulan yang dilalaikan manusia, padahal amal diangkat kepada Allah — aku senang amalku diangkat saat berpuasa\" (HR. Nasa'i)." },
          { title: "Latihan puasa untuk anak", body: "Sya'ban waktu sempurna anak 7+ mencoba puasa setengah hari — supaya saat Ramadan tiba mereka sudah terbiasa." },
          { title: "Beres rumah & hati", body: "Ajak anak menata kamar, merapikan mainan, saling memaafkan. \"Sebentar lagi Ramadan — kita siapkan rumah & hati yang bersih.\"" },
          { title: "Mulai jadwal mengaji", body: "Bangun kebiasaan membaca Al-Qur'an bersama, supaya saat Ramadan rutinitasnya sudah jalan, bukan dimulai dari nol." },
          { title: "Nisfu Sya'ban: yang aman", body: "Ulama berbeda soal amalan khusus malam Nisfu Sya'ban. Pendekatan aman: perbanyak doa & istighfar seperti malam lain. Simpan & bagikan." },
        ],
        en: [
          { title: "The Month of Sha'ban with Kids — 1/6", body: "The eighth month, right before Ramadan. Often neglected, yet the Prophet ﷺ fasted most in it." },
          { title: "Why the Prophet fasted a lot", body: "\"Sha'ban is a month people neglect, yet deeds are raised to Allah — I love mine to be raised while fasting\" (Nasa'i)." },
          { title: "Fasting practice for kids", body: "Sha'ban is the perfect time for ages 7+ to try a half-day fast — so that when Ramadan comes they're already used to it." },
          { title: "Tidy the home & the heart", body: "Have the child organize their room, tidy toys, forgive one another. \"Ramadan's near — let's ready a clean home & heart.\"" },
          { title: "Start a Qur'an schedule", body: "Build the habit of reading together, so by Ramadan the routine is already running, not starting from zero." },
          { title: "Nisfu Sha'ban: the safe way", body: "Scholars differ on special worship that night. Safe approach: increase du'a & istighfar as on any night. Save & share." },
        ],
      },
      shortScript: {
        id: `[0–3 detik] HOOK: Ada bulan yang Rasulullah ﷺ paling banyak berpuasa di dalamnya — dan kebanyakan orang melewatinya.

[3–15 detik] MASALAH: Sya'ban terjepit antara Rajab dan Ramadan, jadi sering dilalaikan. Anak pun tiba di Ramadan tanpa persiapan.

[15–35 detik] SOLUSI: Pakai Sya'ban untuk latihan puasa setengah hari (anak 7+), mulai jadwal mengaji, dan beres-beres rumah + hati bareng anak.

[35–55 detik] BUKTI: Nabi bersabda amal diangkat kepada Allah di Sya'ban, dan beliau senang amalnya diangkat saat berpuasa (HR. Nasa'i). Soal Nisfu Sya'ban: perbanyak doa, hindari ritual tanpa dalil.

[55–60 detik] CTA: "Simpan ini & mulai persiapan Ramadan dari Sya'ban."`,
        en: `[0–3s] HOOK: There's a month the Prophet ﷺ fasted in most — and most people skip it.

[3–15s] PROBLEM: Sha'ban is wedged between Rajab and Ramadan, so it's often neglected. Kids reach Ramadan unprepared.

[15–35s] SOLUTION: Use Sha'ban for half-day fasting practice (ages 7+), start a Qur'an schedule, and tidy the home + heart with your child.

[35–55s] PROOF: The Prophet said deeds are raised to Allah in Sha'ban, and he loved his raised while fasting (Nasa'i). On Nisfu Sha'ban: increase du'a, avoid rituals without evidence.

[55–60s] CTA: "Save this & start Ramadan prep from Sha'ban."`,
      },
      pin: {
        id: {
          title: "Bulan Sya'ban: Menyiapkan Hati & Anak Menuju Ramadan",
          description: "Cara memanfaatkan Sya'ban bersama anak: latihan puasa setengah hari, mulai mengaji, beres rumah & hati, dan sikap yang aman soal Nisfu Sya'ban. Untuk keluarga muslim.",
        },
        en: {
          title: "The Month of Sha'ban: Preparing the Heart & Kids for Ramadan",
          description: "How to use Sha'ban with your child: half-day fasting practice, starting Qur'an reading, tidying home & heart, and a safe stance on Nisfu Sha'ban. For Muslim families.",
        },
      },
      checklist: {
        id: [
          "Jelaskan Sya'ban sebagai bulan sebelum Ramadan yang sering dilalaikan",
          "Ceritakan Nabi ﷺ paling banyak puasa sunnah di Sya'ban",
          "Anak 7+: latihan puasa setengah hari",
          "Mulai jadwal mengaji bersama sebelum Ramadan",
          "Ajak anak beres-beres kamar & mainan",
          "Latih saling memaafkan di rumah",
          "Bagi yang baligh: lunasi utang puasa Ramadan lalu",
          "Nisfu Sya'ban: perbanyak doa & istighfar",
          "Hindari ritual malam khusus yang tidak berdalil kuat",
          "Bingkai semuanya sebagai 'pemanasan' menuju Ramadan",
        ],
        en: [
          "Explain Sha'ban as the often-neglected month before Ramadan",
          "Tell how the Prophet ﷺ fasted most in Sha'ban",
          "Ages 7+: half-day fasting practice",
          "Start a shared Qur'an schedule before Ramadan",
          "Have the child tidy their room & toys",
          "Practice mutual forgiveness at home",
          "For those past puberty: make up missed Ramadan fasts",
          "Nisfu Sha'ban: increase du'a & istighfar",
          "Avoid special night rituals lacking firm evidence",
          "Frame it all as a 'warm-up' toward Ramadan",
        ],
      },
    },
    faq: [
      {
        question: {
          id: "Kenapa Rasulullah ﷺ banyak berpuasa di bulan Sya'ban?",
          en: "Why did the Prophet ﷺ fast so much in Sha'ban?",
        },
        answer: {
          id: "Saat Usamah bin Zaid bertanya, Rasulullah ﷺ menjawab bahwa Sya'ban adalah <strong>bulan yang sering dilalaikan manusia</strong> (karena berada di antara Rajab dan Ramadan), padahal di bulan ini <strong>amal-amal diangkat kepada Allah</strong> — dan beliau senang amalnya diangkat dalam keadaan berpuasa (HR. Nasa'i).",
          en: "When Usamah ibn Zayd asked, the Prophet ﷺ said Sha'ban is <strong>a month people neglect</strong> (falling between Rajab and Ramadan), yet in it <strong>deeds are raised to Allah</strong> — and he loved for his deeds to be raised while fasting (Nasa'i).",
        },
      },
      {
        question: {
          id: "Bagaimana memanfaatkan Sya'ban bersama anak?",
          en: "How can I make the most of Sha'ban with my kids?",
        },
        answer: {
          id: "Empat hal: <strong>latihan puasa setengah hari</strong> untuk anak 7+ agar terbiasa sebelum Ramadan; <strong>beres-beres rumah dan hati</strong> (rapikan mainan, saling memaafkan); <strong>mulai jadwal mengaji</strong> supaya rutinitas sudah jalan saat Ramadan; dan bagi yang baligh, <strong>lunasi utang puasa</strong> Ramadan lalu selagi sempat.",
          en: "Four things: <strong>half-day fasting practice</strong> for ages 7+ to build the habit before Ramadan; <strong>tidy the home and the heart</strong> (organize toys, forgive one another); <strong>start a Qur'an schedule</strong> so the routine is running by Ramadan; and for those past puberty, <strong>make up missed fasts</strong> from last Ramadan while there's time.",
        },
      },
      {
        question: {
          id: "Apa hukum amalan khusus malam Nisfu Sya'ban?",
          en: "What about special worship on the night of Nisfu Sha'ban?",
        },
        answer: {
          id: "Malam pertengahan Sya'ban disebut dalam beberapa hadits sebagai malam ampunan yang luas, namun para ulama <strong>berbeda pendapat</strong> tentang amalan khusus malam itu. Pendekatan yang aman: <strong>perbanyak doa dan istighfar</strong> sebagaimana malam-malam lain, tanpa ritual khusus yang tidak berdalil kuat.",
          en: "The middle night of Sha'ban is mentioned in some narrations as a night of wide forgiveness, but scholars <strong>differ</strong> on special worship that night. The safe approach: <strong>increase du'a and istighfar</strong> as on any night, without specific rituals lacking firm evidence.",
        },
      },
    ],
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
    updated: "2026-09-12",
    readingTimeMin: 8,
    author: "tim-baby-mo",
    kit: {
      quote: {
        id: "Anak meniru tokoh yang mereka kagumi. Kalau kita tidak mengisi hati mereka dengan kekaguman pada Rasulullah ﷺ, dunia akan mengisinya dengan tokoh lain. Mencintai Nabi bukan sekadar emosi — itu pintu untuk mencintai akhlaknya, lalu menirunya.",
        en: "Children imitate the figures they admire. If we don't fill their hearts with love for the Prophet ﷺ, the world will fill it with someone else. Loving the Prophet isn't mere emotion — it's the door to loving his character, then living it.",
      },
      carousel: {
        id: [
          { title: "Mengenalkan Rasulullah ﷺ ke Anak — 1/6", body: "Setiap Rabi'ul Awal kita teringat kelahiran manusia terbaik. Terlepas dari perbedaan soal perayaan, mencintai Nabi adalah kewajiban semua." },
          { title: "Kenapa sejak dini", body: "Anak meniru yang mereka kagumi. Isi hati mereka dengan kekaguman pada Rasulullah ﷺ sebelum dunia mengisinya dengan tokoh lain." },
          { title: "Usia 3–5: Nabi yang penyayang", body: "Beliau menyayangi anak, mencium cucunya, memendekkan sholat saat mendengar bayi menangis. Anak kecil paling mudah terhubung dengan kasih sayang." },
          { title: "Usia 6–8: Nabi yang jujur & adil", body: "Ceritakan gelar \"Al-Amin\" (yang terpercaya) yang diberikan penduduk Mekkah bahkan sebelum beliau jadi nabi." },
          { title: "Usia 9+: Nabi sebagai teladan", body: "Diskusikan cara beliau menyikapi kesulitan, memaafkan musuh, tetap rendah hati. Ajak anak pilih satu sunnah untuk ditiru pekan ini." },
          { title: "Satu sunnah pekan ini", body: "Senyum, memberi salam, atau membantu pekerjaan rumah — Nabi pun membantu keluarganya. Cinta yang berubah jadi amal. Simpan & bagikan." },
        ],
        en: [
          { title: "Introducing the Prophet ﷺ to Kids — 1/6", body: "Every Rabi' al-Awwal we remember the birth of the best of humanity. Whatever the view on celebrating, loving the Prophet is everyone's duty." },
          { title: "Why start early", body: "Children imitate whom they admire. Fill their hearts with love for the Prophet ﷺ before the world fills it with someone else." },
          { title: "Ages 3–5: the compassionate Prophet", body: "He loved children, kissed his grandchildren, shortened prayer on hearing a baby cry. Young children connect most easily with kindness." },
          { title: "Ages 6–8: the honest & just Prophet", body: "Tell of the title \"Al-Amin\" (the trustworthy) the people of Makkah gave him even before prophethood." },
          { title: "Ages 9+: the Prophet as a model", body: "Discuss how he met hardship, forgave enemies, stayed humble. Have the child pick one sunnah to imitate this week." },
          { title: "One sunnah this week", body: "Smiling, greeting with salam, or helping at home — the Prophet helped his family too. Love turned into action. Save & share." },
        ],
      },
      shortScript: {
        id: `[0–3 detik] HOOK: Anak meniru tokoh yang mereka kagumi. Pertanyaannya: siapa yang mengisi hati anakmu?

[3–15 detik] MASALAH: Kalau kita tidak mengenalkan Rasulullah ﷺ sejak dini, dunia akan mengisi hati anak dengan tokoh lain — dan akhlak mengikuti siapa yang dikagumi.

[15–35 detik] SOLUSI: Sesuaikan usia. 3–5: Nabi yang penyayang. 6–8: Nabi "Al-Amin" yang jujur. 9+: Nabi teladan hidup — ajak pilih satu sunnah untuk ditiru pekan ini.

[35–55 detik] BUKTI: Mencintai Nabi bukan sekadar emosi — itu pintu mencintai akhlaknya lalu menirunya. Mulai dari senyum, salam, membantu di rumah.

[55–60 detik] CTA: "Pilih satu sunnah untuk keluargamu tiru pekan ini. Bagikan."`,
        en: `[0–3s] HOOK: Children imitate whom they admire. The question is: who's filling your child's heart?

[3–15s] PROBLEM: If we don't introduce the Prophet ﷺ early, the world fills the child's heart with someone else — and character follows whoever is admired.

[15–35s] SOLUTION: Match the age. 3–5: the compassionate Prophet. 6–8: the honest "Al-Amin." 9+: the Prophet as a life model — pick one sunnah to imitate this week.

[35–55s] PROOF: Loving the Prophet isn't mere emotion — it's the door to loving his character, then living it. Start with a smile, salam, helping at home.

[55–60s] CTA: "Pick one sunnah for your family to imitate this week. Share it."`,
      },
      pin: {
        id: {
          title: "Cara Mengenalkan Rasulullah ﷺ ke Anak (per Usia)",
          description: "Cara mengenalkan sosok dan akhlak Nabi Muhammad ﷺ kepada anak sesuai usia, dari kasih sayang sampai teladan hidup. Untuk keluarga muslim di bulan Maulid.",
        },
        en: {
          title: "How to Introduce the Prophet ﷺ to Kids, by Age",
          description: "How to introduce the person and character of Prophet Muhammad ﷺ to children by age, from compassion to life model. For Muslim families in the Mawlid month.",
        },
      },
      checklist: {
        id: [
          "Usia 3–5: ceritakan sisi penyayang Nabi (menyayangi anak & cucu)",
          "Usia 6–8: ceritakan gelar \"Al-Amin\" — jujur & adil",
          "Usia 9+: diskusikan cara Nabi menghadapi kesulitan & memaafkan",
          "Ajak anak memilih SATU sunnah untuk ditiru pekan ini",
          "Contoh sunnah: senyum, memberi salam, membantu pekerjaan rumah",
          "Fokus pada mengenal & mencintai Nabi (disepakati semua)",
          "Kaitkan cinta Nabi dengan meniru akhlaknya, bukan sekadar emosi",
          "Bacakan kisah Nabi Muhammad ﷺ dari sumber terpercaya",
          "Jadikan Rasulullah ﷺ 'pahlawan' anak, bukan tokoh kartun",
          "Ulangi sepanjang bulan Rabi'ul Awal, bukan sekali saja",
        ],
        en: [
          "Ages 3–5: tell the Prophet's compassionate side (loving kids & grandkids)",
          "Ages 6–8: tell of the title \"Al-Amin\" — honest & just",
          "Ages 9+: discuss how the Prophet met hardship & forgave",
          "Have the child pick ONE sunnah to imitate this week",
          "Example sunnahs: smiling, giving salam, helping at home",
          "Focus on knowing & loving the Prophet (agreed by all)",
          "Tie loving the Prophet to imitating his character, not just emotion",
          "Read the Prophet's ﷺ story from trustworthy sources",
          "Make the Prophet ﷺ the child's 'hero', not a cartoon figure",
          "Repeat through the month of Rabi' al-Awwal, not just once",
        ],
      },
    },
    faq: [
      {
        question: {
          id: "Kapan Maulid Nabi diperingati?",
          en: "When is Mawlid an-Nabi observed?",
        },
        answer: {
          id: "Maulid mengingat kelahiran Nabi Muhammad ﷺ dan dikaitkan dengan bulan <strong>Rabi'ul Awal</strong> (umumnya tanggal 12). Terlepas dari tanggalnya, seluruh bulan ini adalah momen alami untuk mengenalkan sosok dan akhlak Rasulullah ﷺ kepada anak.",
          en: "Mawlid commemorates the birth of the Prophet Muhammad ﷺ and is associated with the month of <strong>Rabi' al-Awwal</strong> (commonly the 12th). Regardless of the exact date, the whole month is a natural time to introduce the Prophet's ﷺ person and character to children.",
        },
      },
      {
        question: {
          id: "Apa hukum merayakan Maulid Nabi?",
          en: "What is the ruling on celebrating Mawlid?",
        },
        answer: {
          id: "Ulama <strong>berbeda pendapat</strong>: sebagian membolehkan sebagai sarana mengingat dan mencintai Nabi, sebagian tidak menganjurkan karena tidak dilakukan di masa salaf. Kami tidak masuk ke perdebatan itu — fokus pada satu hal yang <strong>disepakati semua</strong>: mengenal dan mencintai Rasulullah ﷺ adalah kewajiban setiap muslim, termasuk anak-anak.",
          en: "Scholars <strong>differ</strong>: some permit it as a means to remember and love the Prophet, some don't recommend it since the early generations didn't do it. We stay out of that debate and focus on what <strong>everyone agrees on</strong>: knowing and loving the Prophet ﷺ is an obligation on every Muslim, children included.",
        },
      },
      {
        question: {
          id: "Bagaimana mengenalkan Rasulullah ﷺ ke anak sesuai usia?",
          en: "How do I introduce the Prophet ﷺ to a child by age?",
        },
        answer: {
          id: "<strong>Usia 3–5:</strong> Nabi yang penyayang — beliau menyayangi anak, mencium cucunya, memendekkan sholat saat mendengar bayi menangis. <strong>Usia 6–8:</strong> Nabi yang jujur & adil — gelar \"Al-Amin\" (yang terpercaya). <strong>Usia 9+:</strong> Nabi sebagai teladan hidup — ajak anak memilih satu sunnah untuk ditiru pekan ini (senyum, memberi salam, membantu pekerjaan rumah).",
          en: "<strong>Ages 3–5:</strong> the compassionate Prophet — he loved children, kissed his grandchildren, shortened prayer on hearing a baby cry. <strong>Ages 6–8:</strong> the honest and just Prophet — the title \"Al-Amin\" (the trustworthy). <strong>Ages 9+:</strong> the Prophet as a life model — have the child pick one sunnah to imitate this week (smiling, greeting, helping at home).",
        },
      },
      {
        question: {
          id: "Kenapa penting anak mencintai Nabi ﷺ sejak dini?",
          en: "Why is it important for a child to love the Prophet ﷺ early?",
        },
        answer: {
          id: "Anak <strong>meniru tokoh yang mereka kagumi</strong>. Kalau kita tidak mengisi hati mereka dengan kekaguman pada Rasulullah ﷺ, dunia akan mengisinya dengan tokoh lain. Mencintai Nabi bukan sekadar emosi — itu pintu untuk mencintai akhlaknya, lalu menirunya.",
          en: "Children <strong>imitate the figures they admire</strong>. If we don't fill their hearts with admiration for the Prophet ﷺ, the world will fill it with someone else. Loving the Prophet isn't mere emotion — it's the door to loving his character, then emulating it.",
        },
      },
    ],
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
    updated: "2026-09-12",
    readingTimeMin: 8,
    author: "tim-baby-mo",
    kit: {
      quote: {
        id: "Di puncak perjalanan Isra Mi'raj, Allah memberikan perintah sholat — awalnya 50 kali, lalu menjadi 5 tapi pahalanya senilai 50. Pelajaran besar untuk anak: sholat adalah hadiah, bukan beban — begitu istimewa sampai diberikan langsung di langit.",
        en: "At the peak of Isra Mi'raj, Allah gave the command to pray — first 50 times, then reduced to 5 but rewarded as 50. The big lesson for a child: prayer is a gift, not a burden — so special it was given directly in the heavens.",
      },
      carousel: {
        id: [
          { title: "Isra Mi'raj untuk Anak — 1/6", body: "Dua peristiwa luar biasa dalam satu malam, sekitar setahun sebelum hijrah. Diperingati 27 Rajab. Penuh mukjizat, berakhir dengan hadiah terbesar." },
          { title: "Isra — perjalanan mendatar", body: "Dari Masjidil Haram (Mekkah) ke Masjidil Aqsa (Yerusalem) dengan Buraq — secepat kilat. Di sana beliau mengimami para nabi." },
          { title: "Mi'raj — perjalanan naik", body: "Dari Baitul Maqdis naik ke langit demi langit, bertemu para nabi, hingga Sidratul Muntaha — batas yang tak pernah dicapai makhluk." },
          { title: "Hadiah terbesar: sholat", body: "Awalnya 50× sehari. Atas saran Nabi Musa, Nabi memohon keringanan hingga jadi 5× — tapi pahalanya tetap 50." },
          { title: "Sholat = hadiah, bukan beban", body: "Perintahnya diberikan langsung di langit, bukan lewat perantara seperti perintah lain. Betapa istimewanya sholat kita." },
          { title: "Cara cerita per usia", body: "3–5: fokus keajaiban Buraq & naik ke langit. 6–8: tekankan sholat sebagai hadiah dari perjalanan itu. Simpan & bagikan." },
        ],
        en: [
          { title: "Isra Mi'raj for Kids — 1/6", body: "Two extraordinary events in one night, about a year before the Hijrah. Marked on 27 Rajab. Full of miracles, ending with the greatest gift." },
          { title: "Isra — the horizontal journey", body: "From the Sacred Mosque (Makkah) to al-Aqsa (Jerusalem) on Buraq — swift as lightning. There he led the prophets in prayer." },
          { title: "Mi'raj — the ascent", body: "From Jerusalem up through the heavens, meeting the prophets, to Sidrat al-Muntaha — a limit no creature had reached." },
          { title: "The greatest gift: prayer", body: "First 50× a day. On Prophet Musa's advice, he sought relief until it became 5× — yet rewarded as 50." },
          { title: "Prayer = gift, not burden", body: "Its command was given directly in the heavens, not through an intermediary like other commands. How special our salah is." },
          { title: "Telling it by age", body: "3–5: focus on the wonder of Buraq & the ascent. 6–8: stress prayer as the gift from that journey. Save & share." },
        ],
      },
      shortScript: {
        id: `[0–3 detik] HOOK: Kenapa kita sholat 5 kali sehari, bukan 50? Jawabannya ada di kisah Isra Mi'raj.

[3–15 detik] MASALAH: Banyak anak melihat sholat sebagai kewajiban yang berat. Padahal asal-usulnya adalah sebuah hadiah dari langit.

[15–35 detik] SOLUSI: Ceritakan perjalanannya — Buraq dari Mekkah ke Aqsa, naik ke langit bertemu para nabi. Di puncak, perintah sholat: 50 lalu jadi 5, tapi pahala tetap 50.

[35–55 detik] BUKTI: Sholat begitu istimewa sampai perintahnya diberikan langsung di langit, bukan lewat perantara. Untuk anak: sholat adalah hadiah, bukan beban.

[55–60 detik] CTA: "Ceritakan kisah ini ke anakmu malam ini. Simpan & bagikan."`,
        en: `[0–3s] HOOK: Why do we pray 5 times a day, not 50? The answer is in the Isra Mi'raj.

[3–15s] PROBLEM: Many children see prayer as a heavy duty. Yet its very origin is a gift from the heavens.

[15–35s] SOLUTION: Tell the journey — Buraq from Makkah to al-Aqsa, ascending the heavens, meeting the prophets. At the peak, the command to pray: 50, then 5, but rewarded as 50.

[35–55s] PROOF: Prayer is so special its command came directly in the heavens, not through an intermediary. For a child: prayer is a gift, not a burden.

[55–60s] CTA: "Tell this story to your child tonight. Save & share."`,
      },
      pin: {
        id: {
          title: "Isra Mi'raj untuk Anak: Kisah & Asal-Usul Sholat 5 Waktu",
          description: "Cara menceritakan Isra Mi'raj kepada anak: perjalanan Buraq, naik ke langit, dan hadiah sholat lima waktu. Sholat adalah hadiah, bukan beban. Untuk keluarga muslim.",
        },
        en: {
          title: "Isra Mi'raj for Kids: The Story & Origin of the 5 Daily Prayers",
          description: "How to tell the Isra Mi'raj to children: the Buraq journey, the ascent, and the gift of the five daily prayers. Prayer is a gift, not a burden. For Muslim families.",
        },
      },
      checklist: {
        id: [
          "Ceritakan bahwa Isra Mi'raj terjadi dalam satu malam (27 Rajab)",
          "Isra: Mekkah → Yerusalem dengan Buraq",
          "Mi'raj: naik ke langit, bertemu para nabi, hingga Sidratul Muntaha",
          "Hadiah terbesar: perintah sholat (50 → 5, pahala tetap 50)",
          "Tekankan: sholat adalah hadiah, bukan beban",
          "Usia 3–5: fokus pada keajaiban (Buraq, naik ke langit)",
          "Usia 6–8: tekankan makna sholat sebagai hadiah",
          "Kaitkan dengan sholat harian keluarga",
          "Ceritakan dari sumber terpercaya, tanpa menambah detail",
          "Ulangi menjelang 27 Rajab tiap tahun",
        ],
        en: [
          "Explain Isra Mi'raj happened in one night (27 Rajab)",
          "Isra: Makkah → Jerusalem on the Buraq",
          "Mi'raj: ascending the heavens, meeting prophets, to Sidrat al-Muntaha",
          "The greatest gift: the command to pray (50 → 5, still rewarded as 50)",
          "Emphasize: prayer is a gift, not a burden",
          "Ages 3–5: focus on the wonder (Buraq, the ascent)",
          "Ages 6–8: stress the meaning of prayer as a gift",
          "Connect it to the family's daily prayers",
          "Tell it from trustworthy sources, without adding details",
          "Repeat near 27 Rajab each year",
        ],
      },
    },
    faq: [
      {
        question: {
          id: "Kapan Isra Mi'raj diperingati?",
          en: "When is Isra Mi'raj commemorated?",
        },
        answer: {
          id: "Isra Mi'raj diperingati pada <strong>27 Rajab</strong>, dan peristiwanya terjadi sekitar setahun sebelum hijrah Rasulullah ﷺ ke Madinah.",
          en: "Isra Mi'raj is commemorated on the <strong>27th of Rajab</strong>, and the event took place about a year before the Prophet's ﷺ migration to Madinah.",
        },
      },
      {
        question: {
          id: "Apa itu Isra dan apa itu Mi'raj?",
          en: "What is Isra and what is Mi'raj?",
        },
        answer: {
          id: "<strong>Isra</strong> adalah perjalanan mendatar Rasulullah ﷺ dari Masjidil Haram (Mekkah) ke Masjidil Aqsa (Yerusalem) dengan kendaraan istimewa bernama <strong>Buraq</strong>. <strong>Mi'raj</strong> adalah perjalanan naik dari Baitul Maqdis ke langit demi langit, bertemu para nabi, hingga Sidratul Muntaha — batas yang tidak pernah dicapai makhluk mana pun.",
          en: "<strong>Isra</strong> is the Prophet's ﷺ horizontal journey from the Sacred Mosque (Makkah) to al-Aqsa Mosque (Jerusalem) on a special mount called <strong>Buraq</strong>. <strong>Mi'raj</strong> is the ascent from Jerusalem through the heavens, meeting the prophets, up to Sidrat al-Muntaha — a limit no creature had reached.",
        },
      },
      {
        question: {
          id: "Apa hadiah terbesar dari peristiwa Isra Mi'raj?",
          en: "What was the greatest gift of Isra Mi'raj?",
        },
        answer: {
          id: "<strong>Perintah sholat.</strong> Awalnya 50 kali sehari; atas saran Nabi Musa, Rasulullah ﷺ berulang kali memohon keringanan hingga menjadi <strong>5 kali sehari — tetapi pahalanya senilai 50</strong>. Pelajaran besar untuk anak: sholat adalah <em>hadiah</em>, bukan beban, dan begitu istimewa sampai perintahnya diberikan langsung di langit.",
          en: "<strong>The command to pray.</strong> Originally 50 times a day; on Prophet Musa's advice, the Prophet ﷺ repeatedly asked for relief until it became <strong>5 a day — but rewarded as 50</strong>. The big lesson for a child: prayer is a <em>gift</em>, not a burden, and so special its command was given directly in the heavens.",
        },
      },
    ],
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
    updated: "2026-09-12",
    readingTimeMin: 8,
    author: "tim-baby-mo",
    kit: {
      quote: {
        id: "Sangat istimewa bahwa kata pertama yang Allah turunkan adalah \"Bacalah\" — bukan \"sholatlah\" atau \"puasalah.\" Islam memuliakan ilmu dan membaca. Untuk anak: belajar membaca, membaca Al-Qur'an, mencari ilmu — semuanya adalah perintah pertama Allah.",
        en: "It's striking that the first word Allah revealed was \"Read\" — not \"pray\" or \"fast.\" Islam honors knowledge and reading. For a child: learning to read, reading the Qur'an, seeking knowledge — all are Allah's very first command.",
      },
      carousel: {
        id: [
          { title: "Nuzulul Qur'an untuk Anak — 1/6", body: "Peringatan turunnya wahyu pertama Al-Qur'an, di Indonesia biasa diperingati 17 Ramadan. Momen tepat mengenalkan lahirnya Al-Qur'an." },
          { title: "Gua Hira", body: "Sebelum menjadi nabi, Rasulullah ﷺ sering menyendiri di Gua Hira di atas Jabal Nur (Gunung Cahaya) untuk merenung." },
          { title: "\"Iqra!\"", body: "Suatu malam Ramadan, Malaikat Jibril memeluk beliau erat: \"Iqra!\" (Bacalah!). Beliau menjawab, \"Aku tidak bisa membaca.\"" },
          { title: "Ayat pertama", body: "Jibril mengulang tiga kali, lalu: \"Bacalah dengan (menyebut) nama Tuhanmu yang menciptakan\" (QS. Al-'Alaq 1)." },
          { title: "Khadijah menenangkan", body: "Beliau pulang gemetar. Khadijah menyelimutinya: \"Allah tidak akan menelantarkanmu — engkau jujur, menyambung silaturahmi, membantu yang lemah.\"" },
          { title: "Cara memperingati", body: "Ceritakan kisah Gua Hira, tambah waktu mengaji malam itu, jelaskan kenapa kita sayang Al-Qur'an. Simpan & bagikan." },
        ],
        en: [
          { title: "Nuzulul Qur'an for Kids — 1/6", body: "Commemorating the first revelation, marked in Indonesia on 17 Ramadan. A perfect moment to introduce the Qur'an's beginning." },
          { title: "The Cave of Hira", body: "Before prophethood, the Prophet ﷺ often retreated to the Cave of Hira on Jabal an-Nur (the Mountain of Light) to reflect." },
          { title: "\"Iqra!\"", body: "One Ramadan night, the Angel Jibril embraced him tightly: \"Iqra!\" (Read!). He replied, \"I cannot read.\"" },
          { title: "The first verse", body: "Jibril repeated three times, then: \"Read in the name of your Lord who created\" (Al-'Alaq 1)." },
          { title: "Khadijah reassures", body: "He returned trembling. Khadijah wrapped him: \"Allah will not forsake you — you are honest, keep ties, help the weak.\"" },
          { title: "How to observe it", body: "Tell the Cave of Hira story, add Qur'an time that night, explain why we love the Qur'an. Save & share." },
        ],
      },
      shortScript: {
        id: `[0–3 detik] HOOK: Kata pertama yang Allah turunkan bukan "sholatlah" atau "puasalah" — tapi "Bacalah."

[3–15 detik] MASALAH: Anak sering tidak tahu dari mana Al-Qur'an berasal. Nuzulul Qur'an (17 Ramadan) adalah momen sempurna menceritakannya.

[15–35 detik] SOLUSI: Ceritakan Gua Hira — Nabi menyendiri, Malaikat Jibril datang berkata "Iqra!". Beliau pulang gemetar, dan Khadijah menenangkannya.

[35–55 detik] BUKTI: Ayat pertama: "Bacalah dengan nama Tuhanmu yang menciptakan" (Al-'Alaq 1). Islam memuliakan ilmu — belajar membaca adalah perintah pertama.

[55–60 detik] CTA: "Ceritakan kisah Gua Hira ke anakmu di 17 Ramadan. Simpan & bagikan."`,
        en: `[0–3s] HOOK: The first word Allah revealed wasn't "pray" or "fast" — it was "Read."

[3–15s] PROBLEM: Children often don't know where the Qur'an came from. Nuzulul Qur'an (17 Ramadan) is the perfect moment to tell them.

[15–35s] SOLUTION: Tell the Cave of Hira — the Prophet in retreat, the Angel Jibril saying "Iqra!". He returned trembling, and Khadijah reassured him.

[35–55s] PROOF: The first verse: "Read in the name of your Lord who created" (Al-'Alaq 1). Islam honors knowledge — learning to read is the very first command.

[55–60s] CTA: "Tell the Cave of Hira story to your child on 17 Ramadan. Save & share."`,
      },
      pin: {
        id: {
          title: "Nuzulul Qur'an untuk Anak: Saat Al-Qur'an Pertama Turun",
          description: "Cara menceritakan turunnya wahyu pertama kepada anak: Gua Hira, \"Iqra\", dan kenapa Islam memuliakan ilmu & membaca. Untuk keluarga muslim di bulan Ramadan.",
        },
        en: {
          title: "Nuzulul Qur'an for Kids: When the Qur'an First Descended",
          description: "How to tell children about the first revelation: the Cave of Hira, \"Iqra\", and why Islam honors knowledge & reading. For Muslim families in Ramadan.",
        },
      },
      checklist: {
        id: [
          "Ceritakan Nuzulul Qur'an diperingati 17 Ramadan",
          "Gua Hira di atas Jabal Nur — tempat Nabi merenung",
          "Malaikat Jibril datang berkata \"Iqra!\" (Bacalah)",
          "Ayat pertama: QS. Al-'Alaq 1 — \"Bacalah dengan nama Tuhanmu\"",
          "Khadijah menenangkan Nabi yang pulang gemetar",
          "Pelajaran: kata pertama adalah \"Bacalah\" — Islam muliakan ilmu",
          "Tambah waktu mengaji di malam 17 Ramadan",
          "Jelaskan kenapa keluarga menyayangi Al-Qur'an",
          "Anak suka detail: gua, gunung, malaikat, kata \"Iqra\"",
          "Ceritakan dari sumber terpercaya, tanpa menambah-nambah",
        ],
        en: [
          "Explain Nuzulul Qur'an is marked on 17 Ramadan",
          "The Cave of Hira on Jabal an-Nur — where the Prophet reflected",
          "The Angel Jibril came saying \"Iqra!\" (Read)",
          "The first verse: Al-'Alaq 1 — \"Read in the name of your Lord\"",
          "Khadijah reassured the Prophet who returned trembling",
          "Lesson: the first word was \"Read\" — Islam honors knowledge",
          "Add Qur'an reading time on the night of 17 Ramadan",
          "Explain why the family loves the Qur'an",
          "Kids love the detail: cave, mountain, angel, the word \"Iqra\"",
          "Tell it from trustworthy sources, without embellishing",
        ],
      },
    },
    faq: [
      {
        question: {
          id: "Kapan Nuzulul Qur'an diperingati?",
          en: "When is Nuzulul Qur'an observed?",
        },
        answer: {
          id: "Nuzulul Qur'an memperingati turunnya wahyu pertama Al-Qur'an kepada Rasulullah ﷺ, dan di Indonesia biasa diperingati setiap <strong>17 Ramadan</strong>.",
          en: "Nuzulul Qur'an commemorates the first revelation of the Qur'an to the Prophet ﷺ, and in Indonesia it is commonly observed on the <strong>17th of Ramadan</strong>.",
        },
      },
      {
        question: {
          id: "Bagaimana kisah wahyu pertama untuk diceritakan ke anak?",
          en: "What is the story of the first revelation to tell a child?",
        },
        answer: {
          id: "Rasulullah ﷺ sering menyendiri di <strong>Gua Hira</strong> di atas Jabal Nur. Suatu malam Ramadan, <strong>Malaikat Jibril</strong> datang dan berkata \"Iqra!\" (Bacalah!). Beliau menjawab \"Aku tidak bisa membaca,\" hingga Jibril menyampaikan ayat pertama: \"Bacalah dengan (menyebut) nama Tuhanmu yang menciptakan\" (QS. Al-'Alaq 1). Beliau pulang gemetar, lalu istrinya Khadijah menenangkannya.",
          en: "The Prophet ﷺ often retreated to the <strong>Cave of Hira</strong> on Jabal an-Nur. One Ramadan night, the <strong>Angel Jibril</strong> came and said \"Iqra!\" (Read!). He replied \"I cannot read,\" until Jibril conveyed the first verse: \"Read in the name of your Lord who created\" (Al-'Alaq 1). He returned trembling, and his wife Khadijah reassured him.",
        },
      },
      {
        question: {
          id: "Apa pelajaran dari ayat pertama \"Iqra\"?",
          en: "What is the lesson of the first word, \"Iqra\"?",
        },
        answer: {
          id: "Sangat istimewa bahwa kata pertama yang Allah turunkan adalah <strong>\"Bacalah\"</strong> — bukan \"sholatlah\" atau \"puasalah.\" Ini menunjukkan betapa Islam memuliakan <strong>ilmu dan membaca</strong>. Untuk anak: belajar membaca, membaca Al-Qur'an, dan mencari ilmu semuanya sejalan dengan perintah pertama Allah.",
          en: "It's striking that the first word revealed was <strong>\"Read\"</strong> — not \"pray\" or \"fast.\" It shows how deeply Islam honors <strong>knowledge and reading</strong>. For a child: learning to read, reading the Qur'an, and seeking knowledge all align with Allah's very first command.",
        },
      },
    ],
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
