import type { Metadata } from "next";
import type { ReactNode } from "react";
import { STORE_FONT_VARS } from "@/lib/content/store-fonts";
import { asset } from "@/lib/i18n/config";
import { INSTAGRAM_URL, LANG_SCRIPT, SUPPORT_EMAIL } from "@/lib/content/store-pages";

/**
 * babymo.id/support — the "Support URL" in App Store Connect. Same look as
 * /app. Answers the questions parents actually ask, grouped by topic and
 * searchable, plus quick fixes and a ready-made bug-report email. Keep every
 * answer true to the app (babymo-app repo) and to the privacy policy.
 */

export const metadata: Metadata = {
  title: "Bantuan · Support — Baby Mo",
  description:
    "Help for the Baby Mo app: contact us, quick fixes, and answers about sound, language, your child's name, prayer times and Qibla, offline use, devices and deleting data.",
  alternates: { canonical: "https://babymo.id/support/" },
  robots: { index: true, follow: true },
};

type Bi = { id: ReactNode; en: ReactNode };
const B = ({ t }: { t: Bi }) => (
  <>
    <span data-l="id">{t.id}</span>
    <span data-l="en">{t.en}</span>
  </>
);

interface Faq { q: Bi; a: Bi }
interface Group { id: string; icon: string; tone: string; title: Bi; blurb: Bi; faqs: Faq[] }

const mail = (s: string) => <a href={`mailto:${SUPPORT_EMAIL}?subject=${encodeURIComponent(s)}`}>{SUPPORT_EMAIL}</a>;

const GROUPS: Group[] = [
  {
    id: "mulai", icon: "🚀", tone: "#FFE8B8",
    title: { id: "Memulai", en: "Getting started" },
    blurb: { id: "Harga, akun, usia, perangkat", en: "Price, accounts, ages, devices" },
    faqs: [
      {
        q: { id: "Berapa harga Baby Mo?", en: "How much does Baby Mo cost?" },
        a: {
          id: <p>Baby Mo dibeli sekali di App Store; harganya tertera di halaman App Store untuk negara Anda. Setelah itu semua game terbuka: tanpa langganan, tanpa pembelian dalam aplikasi, dan tanpa iklan. Label seperti &ldquo;PRO&rdquo; atau &ldquo;Juara&rdquo; di beberapa game hanyalah tingkat kesulitan, bukan fitur berbayar.</p>,
          en: <p>Baby Mo is a one-time purchase on the App Store; the price for your country is shown on its App Store page. After that every game is open: no subscription, no in-app purchases and no ads. Labels such as &ldquo;PRO&rdquo; or &ldquo;Champion&rdquo; in some games are just difficulty levels, not paid features.</p>,
        },
      },
      {
        q: { id: "Perlu membuat akun?", en: "Do I need an account?" },
        a: { id: <p>Tidak. Tidak ada akun, pendaftaran, atau login. Buka aplikasinya dan langsung bermain.</p>, en: <p>No. There are no accounts, sign-ups or logins. Open the app and start playing.</p> },
      },
      {
        q: { id: "Untuk usia berapa?", en: "What age is it for?" },
        a: {
          id: <p>Untuk anak sekitar 2–8 tahun, sebaiknya dimainkan bersama orang tua. Setiap game mencantumkan usia yang disarankan — lihat <a href={asset("/app/#usia")}>panduan usia</a>.</p>,
          en: <p>For children aged about 2–8, ideally playing alongside a parent. Each game shows a suggested age — see the <a href={asset("/app/#usia")}>age guide</a>.</p>,
        },
      },
      {
        q: { id: "Perangkat apa saja yang didukung?", en: "Which devices are supported?" },
        a: {
          id: <p>iPhone dan iPad dengan iOS 15 atau lebih baru. Di perangkat lain (Android, laptop), semua game bisa dimainkan lewat browser di <a href="https://play.babymo.id/">play.babymo.id</a>.</p>,
          en: <p>iPhone and iPad with iOS 15 or later. On other devices (Android, laptops), all the games can be played in a browser at <a href="https://play.babymo.id/">play.babymo.id</a>.</p>,
        },
      },
      {
        q: { id: "Bisakah dipakai tanpa internet?", en: "Does it work offline?" },
        a: {
          id: <p>Bisa. Semua game, doa, dan panduan sholat ada di dalam aplikasi — cocok untuk perjalanan dan mudik. Internet hanya dipakai untuk menghitung jadwal sholat dan menampilkan nama kota; saat offline, aplikasi memakai data terakhir yang tersimpan.</p>,
          en: <p>Yes. All the games, du&apos;as and the prayer guide are inside the app — great for trips. The internet is only used to calculate prayer times and show your city name; offline, the app uses the last saved data.</p>,
        },
      },
    ],
  },
  {
    id: "pengaturan", icon: "⚙️", tone: "#D9F2FF",
    title: { id: "Pengaturan", en: "Settings" },
    blurb: { id: "Bahasa, nama, tema", en: "Language, name, theme" },
    faqs: [
      {
        q: { id: "Bagaimana mengganti bahasa?", en: "How do I change the language?" },
        a: { id: <p>Ketuk tombol <b>ID / EN</b> di bagian atas layar Beranda. Pilihan bahasa tersimpan di perangkat.</p>, en: <p>Tap the <b>ID / EN</b> button at the top of the Home screen. Your choice is saved on the device.</p> },
      },
      {
        q: { id: "Bagaimana mengatur nama si kecil?", en: "How do I set my child's name?" },
        a: {
          id: <p>Di Beranda, ketuk <b>&ldquo;Siapa nama si kecil?&rdquo;</b> lalu ketik nama panggilannya. Ketuk lagi untuk mengubahnya. Nama ini hanya tersimpan di perangkat Anda dan tidak pernah dikirim ke kami.</p>,
          en: <p>On Home, tap <b>&ldquo;What&apos;s your little one&apos;s name?&rdquo;</b> and type a nickname. Tap it again to change it. The name is stored only on your device and is never sent to us.</p>,
        },
      },
      {
        q: { id: "Bagaimana memakai mode gelap?", en: "How do I use dark mode?" },
        a: { id: <p>Ketuk tombol tema ◐ di bagian atas Beranda untuk berganti antara terang dan gelap. Mode gelap lebih nyaman untuk mata di malam hari.</p>, en: <p>Tap the theme button ◐ at the top of Home to switch between light and dark. Dark mode is easier on the eyes at night.</p> },
      },
    ],
  },
  {
    id: "suara", icon: "🔊", tone: "#E6E0FF",
    title: { id: "Suara", en: "Sound" },
    blurb: { id: "Audio dan suara bacaan", en: "Audio and read-aloud voices" },
    faqs: [
      {
        q: { id: "Suara tidak keluar. Apa yang harus dilakukan?", en: "There's no sound. What can I do?" },
        a: {
          id: (
            <ol>
              <li>Pastikan iPhone/iPad tidak dalam mode senyap dan volume sudah dinaikkan.</li>
              <li>Periksa tombol suara 🔊 di bagian atas aplikasi — pastikan tidak dimatikan.</li>
              <li>Jika memakai earphone Bluetooth, pastikan sudah tersambung atau lepaskan dulu.</li>
              <li>Tutup aplikasi sepenuhnya lalu buka lagi.</li>
            </ol>
          ),
          en: (
            <ol>
              <li>Make sure the iPhone/iPad isn&apos;t on silent and the volume is up.</li>
              <li>Check the 🔊 sound button at the top of the app is switched on.</li>
              <li>If you use Bluetooth earphones, make sure they&apos;re connected — or disconnect them.</li>
              <li>Close the app completely and open it again.</li>
            </ol>
          ),
        },
      },
      {
        q: { id: "Suara bacaan terdengar seperti robot.", en: "The read-aloud voice sounds robotic." },
        a: {
          id: <p>Suara bacaan memakai suara bawaan perangkat. Untuk suara yang lebih jelas, buka <b>Pengaturan → Aksesibilitas → Konten Lisan → Suara</b>, lalu unduh suara Bahasa Indonesia atau Arab versi &ldquo;Enhanced&rdquo;. Baby Mo tidak merekam atau mengirim suara apa pun.</p>,
          en: <p>Read-aloud uses your device&apos;s built-in voices. For clearer voices, go to <b>Settings → Accessibility → Spoken Content → Voices</b> and download an &ldquo;Enhanced&rdquo; Indonesian or Arabic voice. Baby Mo never records or sends any audio.</p>,
        },
      },
    ],
  },
  {
    id: "sholat", icon: "🕌", tone: "#DDF5E6",
    title: { id: "Jadwal sholat & kiblat", en: "Prayer times & Qibla" },
    blurb: { id: "Lokasi, kota, kompas", en: "Location, city, compass" },
    faqs: [
      {
        q: { id: "Jadwal sholat tidak sesuai kota saya.", en: "Prayer times don't match my city." },
        a: {
          id: (
            <ul>
              <li>Lokasi bersifat opsional. Jika ingin memakainya, buka <b>Pengaturan → Baby Mo → Lokasi</b> dan pilih <b>&ldquo;Saat Aplikasi Digunakan&rdquo;</b>.</li>
              <li>Tidak ingin memberi lokasi? Ketuk <b>&ldquo;Pilih kota&rdquo;</b> di kartu jadwal sholat dan pilih kota Anda.</li>
              <li>Lokasi dibulatkan sekitar 1 km sebelum dipakai menghitung jadwal.</li>
            </ul>
          ),
          en: (
            <ul>
              <li>Location is optional. To use it, go to <b>Settings → Baby Mo → Location</b> and choose <b>&ldquo;While Using the App&rdquo;</b>.</li>
              <li>Prefer not to share location? Tap <b>&ldquo;Pick a city&rdquo;</b> on the prayer-times card and choose yours.</li>
              <li>Location is rounded to about 1 km before it&apos;s used to calculate times.</li>
            </ul>
          ),
        },
      },
      {
        q: { id: "Arah kiblat tidak tepat.", en: "The Qibla direction looks wrong." },
        a: {
          id: <p>Kalibrasi kompas dengan menggerakkan perangkat membentuk angka 8 di udara, jauhkan dari benda logam atau magnet (termasuk casing bermagnet), lalu pegang perangkat mendatar.</p>,
          en: <p>Calibrate the compass by moving the device in a figure-8 in the air, keep it away from metal or magnets (including magnetic cases), then hold it flat.</p>,
        },
      },
    ],
  },
  {
    id: "data", icon: "🔒", tone: "#FFE1EA",
    title: { id: "Data & privasi", en: "Data & privacy" },
    blurb: { id: "Apa yang disimpan, cara menghapus", en: "What's stored, how to delete" },
    faqs: [
      {
        q: { id: "Data apa yang disimpan Baby Mo?", en: "What data does Baby Mo store?" },
        a: {
          id: <p>Hanya nama panggilan (jika diisi), bintang, progres, pilihan bahasa dan tema, serta kota untuk jadwal sholat — semuanya di perangkat Anda. Tidak ada iklan, pelacakan, atau analitik di dalam aplikasi. Selengkapnya di <a href={asset("/privacy/")}>Kebijakan Privasi</a>.</p>,
          en: <p>Only the nickname (if you add one), stars, progress, language and theme, and the city for prayer times — all on your device. There are no ads, tracking or analytics in the app. More in our <a href={asset("/privacy/")}>Privacy Policy</a>.</p>,
        },
      },
      {
        q: { id: "Bagaimana menghapus data atau mengulang progres?", en: "How do I delete data or reset progress?" },
        a: {
          id: <p>Karena semua data hanya ada di perangkat, cara menghapusnya adalah menghapus aplikasi Baby Mo, lalu memasangnya lagi bila ingin mulai dari awal. Jika Anda pernah mengirim email kepada kami dan ingin email itu dihapus, kirim permintaan ke {mail("Hapus data / Delete data")}.</p>,
          en: <p>Because all data lives only on your device, delete the Baby Mo app to remove it, then reinstall if you want to start fresh. If you have emailed us and want that email deleted, send a request to {mail("Hapus data / Delete data")}.</p>,
        },
      },
    ],
  },
  {
    id: "konten", icon: "📖", tone: "#FFF1C9",
    title: { id: "Konten & saran", en: "Content & ideas" },
    blurb: { id: "Koreksi doa, ide game baru", en: "Corrections, new game ideas" },
    faqs: [
      {
        q: { id: "Saya menemukan kesalahan pada doa, ayat, atau hadits.", en: "I found a mistake in a du'a, verse or hadith." },
        a: {
          id: <p>Terima kasih sudah teliti! Kirim email ke {mail("Koreksi konten / Content correction")} dengan nama game atau halaman dan bagian yang keliru. Kami memeriksanya dengan sumber aslinya dan memperbaikinya.</p>,
          en: <p>Thank you for checking! Email {mail("Koreksi konten / Content correction")} with the game or page name and the part that&apos;s wrong. We check it against the original source and fix it.</p>,
        },
      },
      {
        q: { id: "Saya punya ide game atau doa baru.", en: "I have an idea for a new game or du'a." },
        a: {
          id: <p>Kami senang sekali mendengarnya! Ceritakan idenya ke {mail("Ide untuk Baby Mo / Idea for Baby Mo")} atau lewat Instagram. Banyak fitur Baby Mo lahir dari saran orang tua.</p>,
          en: <p>We&apos;d love to hear it! Tell us at {mail("Ide untuk Baby Mo / Idea for Baby Mo")} or on Instagram. Many Baby Mo features started as a parent&apos;s suggestion.</p>,
        },
      },
    ],
  },
];

/** Home-screen top bar, positions in % of the cropped screenshot (app-hub-v1). */
const BUTTONS: { x: number; y: number; t: Bi; d: Bi }[] = [
  { x: 17.5, y: 6, t: { id: "⭐ Bintang", en: "⭐ Stars" }, d: { id: "Jumlah bintang yang dikumpulkan si kecil dari semua game.", en: "How many stars your child has collected across the games." } },
  { x: 57, y: 23, t: { id: "ID / EN", en: "ID / EN" }, d: { id: "Ganti bahasa Indonesia atau Inggris.", en: "Switch between Indonesian and English." } },
  { x: 69, y: 23, t: { id: "🌗 Tema", en: "🌗 Theme" }, d: { id: "Mode terang atau gelap.", en: "Light or dark mode." } },
  { x: 80.5, y: 23, t: { id: "🔊 Suara", en: "🔊 Sound" }, d: { id: "Nyalakan atau matikan suara. Cek ini dulu kalau suara tidak keluar.", en: "Sound on or off. Check this first if there's no sound." } },
  { x: 92, y: 23, t: { id: "✨ Kejutan", en: "✨ Surprise" }, d: { id: "Ketuk untuk percikan bintang dan kata-kata penyemangat.", en: "Tap for a burst of sparkles and a word of encouragement." } },
  { x: 54, y: 89, t: { id: "✏️ Nama si kecil", en: "✏️ Child's name" }, d: { id: "Ketik nama panggilan supaya Baby Mo menyapanya. Tersimpan hanya di perangkat.", en: "Type a nickname so Baby Mo greets them. Stored only on the device." } },
];

const BUG_BODY = encodeURIComponent(
  "Perangkat / Device (contoh: iPhone 13):\nVersi iOS / iOS version:\nGame atau layar / Game or screen:\nApa yang terjadi / What happened:\nApa yang seharusnya terjadi / What should happen:\n\n(Lampirkan tangkapan layar bila ada / Attach a screenshot if you can)\n",
);

const CSS = `
:root{color-scheme:light dark;--bg:#FBFAF6;--bg2:#F3F7F2;--card:#FFFFFF;--ink:#14181A;--soft:#5B615C;--line:#E7E4DB;--green:#1E8C53;--sky:#5AA9E6;--shadow:0 20px 50px -24px rgba(20,40,30,.35)}
@media (prefers-color-scheme:dark){:root{--bg:#0F1312;--bg2:#141A18;--card:#1A201E;--ink:#EEF1EC;--soft:#A7AEA8;--line:#29312D;--green:#5CCB8C;--shadow:0 20px 50px -24px rgba(0,0,0,.8)}}
*{box-sizing:border-box}
html,body{margin:0;background:var(--bg);color:var(--ink)}
html{scroll-behavior:smooth;scroll-padding-top:80px}
body{font-family:var(--f-body),-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,sans-serif;font-size:16px;line-height:1.6;-webkit-font-smoothing:antialiased}
html[data-lang="id"] [data-l="en"],html[data-lang="en"] [data-l="id"]{display:none!important}
a{color:var(--green)}
.wrap{max-width:980px;margin:0 auto;padding:0 18px}
h1,h2,h3{font-family:var(--f-round),var(--f-body),sans-serif;letter-spacing:-.01em;margin:0}
h2{font-size:clamp(26px,4vw,34px);line-height:1.1;font-weight:800}
.kick{display:inline-flex;align-items:center;gap:8px;font-size:13px;font-weight:800;letter-spacing:.12em;text-transform:uppercase;color:var(--green);margin-bottom:8px}
.kick::before{content:"";width:18px;height:3px;border-radius:2px;background:currentColor}
section{padding:40px 0}

.nav{position:sticky;top:0;z-index:20;backdrop-filter:saturate(1.6) blur(14px);-webkit-backdrop-filter:saturate(1.6) blur(14px);background:color-mix(in srgb,var(--bg) 78%,transparent);border-bottom:1px solid color-mix(in srgb,var(--line) 70%,transparent)}
.nav .wrap{display:flex;align-items:center;gap:14px;height:62px}
.brand{display:flex;align-items:center;gap:9px;text-decoration:none;color:var(--ink);font-family:var(--f-round);font-weight:800;font-size:20px}
.brand img{width:36px;height:36px;border-radius:11px;background:#E8F4EC;object-fit:contain}
.brand small{font-family:var(--f-body);font-size:13px;font-weight:700;color:var(--soft);padding-left:10px;border-left:1px solid var(--line)}
.links{display:none;gap:4px;margin-left:auto}
.links a{color:var(--ink);text-decoration:none;font-weight:600;font-size:15px;padding:8px 12px;border-radius:999px}
.links a:hover{background:var(--bg2)}
@media(min-width:760px){.links{display:flex}}
.lang{display:flex;gap:4px;margin-left:auto;background:var(--bg2);padding:4px;border-radius:999px;border:1px solid var(--line)}
@media(min-width:760px){.lang{margin-left:8px}}
.lang button{font:inherit;font-size:13px;font-weight:800;padding:6px 12px;border-radius:999px;border:0;background:transparent;color:var(--soft);cursor:pointer}
html[data-lang="id"] .lang [data-set-lang="id"],html[data-lang="en"] .lang [data-set-lang="en"]{background:var(--card);color:var(--ink);box-shadow:0 2px 8px -4px rgba(0,0,0,.3)}

.hero{position:relative;overflow:hidden;padding:48px 0 28px;text-align:center}
.blob{position:absolute;border-radius:50%;filter:blur(60px);opacity:.5;pointer-events:none}
.b1{width:460px;height:460px;background:#BDEBCF;top:-200px;left:-120px}
.b2{width:420px;height:420px;background:#CFE6FF;top:-120px;right:-140px}
.b3{width:360px;height:360px;background:#FFE1EA;top:140px;left:40%}
@media (prefers-color-scheme:dark){.blob{opacity:.16}}
.hero .wrap{position:relative;z-index:1}
.hero .mo{display:block;margin:0 auto;width:120px;height:120px;object-fit:contain;filter:drop-shadow(0 14px 16px rgba(0,0,0,.18));animation:bob 4s ease-in-out infinite}
.hero h1{font-size:clamp(36px,6vw,56px);line-height:1.05;font-weight:800;margin:6px 0 8px}
.grad{background:linear-gradient(90deg,#1E8C53,#2FB3A0 40%,#5AA9E6 70%,#8B7CF6);-webkit-background-clip:text;background-clip:text;color:transparent}
.bubble{display:inline-block;position:relative;margin:4px 0 6px;padding:8px 16px;border-radius:18px;background:var(--card);border:1px solid var(--line);font-weight:800;font-size:15px;box-shadow:var(--shadow)}
.bubble::after{content:"";position:absolute;left:50%;top:-7px;width:12px;height:12px;background:var(--card);border-left:1px solid var(--line);border-top:1px solid var(--line);transform:translateX(-50%) rotate(45deg)}
.hero p b{font-weight:800}
.c1{color:#E0812A}.c2{color:#E0507A}.c3{color:#1E8C53}.c4{color:#7A5CF0}.c5{color:#2F86C9}.c6{color:#C94F4F}
@media (prefers-color-scheme:dark){.c1{color:#FFB66B}.c2{color:#FF8FB0}.c3{color:#5CCB8C}.c4{color:#B4A6FF}.c5{color:#7CC4F5}.c6{color:#FF9A9A}}
.tags{position:absolute;inset:0;pointer-events:none;display:none}
@media(min-width:900px){.tags{display:block}}
.tag{position:absolute;padding:9px 14px;border-radius:999px;font-weight:800;font-size:14px;color:#14181A;box-shadow:var(--shadow);animation:bob 5s ease-in-out infinite}
.t1{background:#E6E0FF;top:40px;left:4%}.t2{background:#DDF5E6;top:120px;left:12%;animation-delay:-1.5s}
.t3{background:#FFE8B8;top:44px;right:5%;animation-delay:-2.5s}.t4{background:#FFE1EA;top:128px;right:12%;animation-delay:-3.5s}
@media (prefers-reduced-motion:reduce){.tag{animation:none}}
.hero p{color:var(--soft);font-size:18px;margin:0 auto;max-width:32em}
@keyframes bob{0%,100%{translate:0 0}50%{translate:0 -8px}}
@media (prefers-reduced-motion:reduce){.hero .mo{animation:none}}

.search{position:relative;max-width:560px;margin:24px auto 0}
.search input{width:100%;font:inherit;font-size:17px;padding:16px 18px 16px 50px;border-radius:18px;border:1px solid var(--line);background:var(--card);color:var(--ink);box-shadow:var(--shadow);outline:none}
.search input:focus{border-color:var(--green)}
.search svg{position:absolute;left:18px;top:50%;transform:translateY(-50%);width:20px;height:20px;color:var(--soft)}

.topics{display:grid;gap:12px;grid-template-columns:repeat(2,1fr);margin-top:26px}
@media(min-width:760px){.topics{grid-template-columns:repeat(3,1fr)}}
.topic{display:flex;gap:12px;align-items:center;text-align:left;text-decoration:none;color:var(--ink);background:var(--card);border:1px solid var(--line);border-radius:20px;padding:14px;transition:transform .15s}
.topic:hover{transform:translateY(-2px)}
.topic .ic{flex:0 0 auto;width:46px;height:46px;border-radius:14px;display:grid;place-items:center;font-size:22px}
.topic b{display:block;font-size:16px;line-height:1.2}
.topic small{display:block;color:var(--soft);font-size:13px;line-height:1.3;margin-top:2px}

.quick{display:grid;gap:12px;margin-top:18px}
@media(min-width:760px){.quick{grid-template-columns:repeat(3,1fr)}}
.step{background:var(--card);border:1px solid var(--line);border-radius:20px;padding:18px;position:relative}
.step .n{width:34px;height:34px;border-radius:50%;display:grid;place-items:center;font-family:var(--f-round);font-weight:800;font-size:18px;background:color-mix(in srgb,var(--green) 16%,transparent);color:var(--green);margin-bottom:8px}
.step h3{font-size:18px;margin-bottom:4px}
.step p{margin:0;color:var(--soft);font-size:15px}

.fgroup{margin-top:30px}
.ghead{display:flex;align-items:center;gap:12px;margin-bottom:12px}
.ghead .ic{width:42px;height:42px;border-radius:13px;display:grid;place-items:center;font-size:20px}
.ghead h3{font-size:22px}
details{border:1px solid var(--line);border-radius:18px;margin:0 0 10px;background:var(--card);overflow:hidden}
summary{cursor:pointer;font-weight:700;font-size:17px;padding:16px 50px 16px 18px;list-style:none;position:relative}
summary::-webkit-details-marker{display:none}
summary::after{content:"+";position:absolute;right:16px;top:50%;transform:translateY(-50%);width:26px;height:26px;border-radius:50%;display:grid;place-items:center;background:var(--bg2);color:var(--green);font-weight:900;font-size:18px;line-height:1;transition:transform .2s}
details[open] summary::after{content:"–"}
details[open] summary{border-bottom:1px dashed var(--line)}
.ans{padding:12px 18px 6px;color:var(--ink)}
.ans p{margin:0 0 10px}
.ans ol,.ans ul{padding-left:20px;margin:0 0 10px}
.ans li{margin:5px 0}
.guide{display:grid;gap:18px;margin-top:18px;align-items:center}
@media(min-width:820px){.guide{grid-template-columns:1.1fr 1fr}}
.gshot{position:relative;aspect-ratio:780/400;border-radius:24px;overflow:hidden;border:8px solid #16181C;box-shadow:var(--shadow);background:#fff}
.gshot img{width:100%;height:auto;display:block}
.pin{position:absolute;transform:translate(-50%,-50%);width:22px;height:22px;border-radius:50%;display:grid;place-items:center;background:#FF5A7E;color:#fff;font-weight:900;font-size:12px;box-shadow:0 0 0 2px #fff,0 6px 14px -4px rgba(0,0,0,.4)}
.gshot .pin{animation:pulse 2.4s ease-in-out infinite}
@keyframes pulse{0%,100%{box-shadow:0 0 0 3px #fff,0 0 0 3px rgba(255,90,126,.0)}50%{box-shadow:0 0 0 3px #fff,0 0 0 9px rgba(255,90,126,.25)}}
@media (prefers-reduced-motion:reduce){.gshot .pin{animation:none}}
.pin.static{position:static;transform:none;flex:0 0 auto;box-shadow:none;width:26px;height:26px;font-size:13px}
.legend{list-style:none;padding:0;margin:0;display:grid;gap:8px}
.legend li{display:flex;gap:12px;align-items:flex-start;background:var(--card);border:1px solid var(--line);border-radius:16px;padding:10px 14px}
.legend b{display:block;font-size:15px}
.legend small{display:block;color:var(--soft);font-size:14px;line-height:1.4}
.empty{display:none;text-align:center;background:var(--card);border:1px dashed var(--line);border-radius:20px;padding:24px;margin-top:20px}
.empty.show{display:block}

.contact{border-radius:32px;padding:34px 22px;background:linear-gradient(140deg,#0F3B27,#14533A 55%,#1E6F4D);color:#F2FAF5;position:relative;overflow:hidden}
.contact h2{color:#fff}
.contact .kick{color:#9FE3BE}
.contact p.lead{color:#CFE8DA;margin:8px 0 0;max-width:34em}
.cgrid{display:grid;gap:12px;margin-top:22px}
@media(min-width:760px){.cgrid{grid-template-columns:repeat(3,1fr)}}
.cbox{display:block;text-decoration:none;color:#F2FAF5!important;background:rgba(255,255,255,.08);border:1px solid rgba(255,255,255,.16);border-radius:20px;padding:18px;transition:background .15s}
.cbox:hover{background:rgba(255,255,255,.14)}
.cbox .ic{font-size:26px}
.cbox b{display:block;font-family:var(--f-round);font-size:20px;margin:6px 0 2px}
.cbox span.s{display:block;color:#CFE8DA;font-size:14px}
.searching .topics,.searching #coba,.searching #tombol{display:none}

.safe{display:grid;gap:10px;margin-top:16px}
@media(min-width:760px){.safe{grid-template-columns:repeat(3,1fr)}}
.safe div{display:flex;gap:10px;align-items:flex-start;background:var(--card);border:1px solid var(--line);border-radius:18px;padding:14px 16px;font-weight:600}
.safe i{font-style:normal;flex:0 0 auto;width:26px;height:26px;border-radius:50%;display:grid;place-items:center;background:color-mix(in srgb,var(--green) 16%,transparent);color:var(--green);font-weight:900;font-size:14px}

footer{padding:36px 0 56px;color:var(--soft);font-size:14px;text-align:center}
footer a{margin:0 8px;font-weight:600}
`;

/** Filters the FAQ by the search box, in whichever language is showing. */
const SEARCH_SCRIPT = `document.addEventListener('DOMContentLoaded',function(){var i=document.getElementById('faq-q');if(!i)return;
var H=document.documentElement,ph=function(){i.placeholder=H.getAttribute('data-lang')==='en'?'Search: sound, language, prayer times…':'Cari: suara, bahasa, jadwal sholat…';if(i.value)i.dispatchEvent(new Event('input'))};ph();new MutationObserver(ph).observe(H,{attributes:true,attributeFilter:['data-lang']});
var ds=[].slice.call(document.querySelectorAll('[data-faq]')),gs=[].slice.call(document.querySelectorAll('[data-group]')),e=document.getElementById('faq-empty');
i.addEventListener('input',function(){var q=i.value.trim().toLowerCase(),any=false,lang=document.documentElement.getAttribute('data-lang')||'id';
ds.forEach(function(d){var t=[].slice.call(d.querySelectorAll('[data-l="'+lang+'"]')).map(function(x){return x.textContent}).join(' ').toLowerCase();var m=!q||t.indexOf(q)>=0;d.hidden=!m;if(q&&m){d.open=true}if(!q){d.open=false}if(m)any=true});
gs.forEach(function(g){g.hidden=!g.querySelector('[data-faq]:not([hidden])')});document.body.classList.toggle('searching',!!q);e.classList.toggle('show',!any)})});`;

export default function SupportPage() {
  const bugHref = `mailto:${SUPPORT_EMAIL}?subject=${encodeURIComponent("Laporan masalah / Bug report — Baby Mo")}&body=${BUG_BODY}`;
  return (
    <html lang="id" data-lang="id" className={STORE_FONT_VARS} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: LANG_SCRIPT }} />
        <script dangerouslySetInnerHTML={{ __html: SEARCH_SCRIPT }} />
      </head>
      <body>
        <style dangerouslySetInnerHTML={{ __html: CSS }} />

        <nav className="nav" aria-label="Baby Mo">
          <div className="wrap">
            <a className="brand" href={asset("/app/")}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={asset("/baby-mo-poses/baby-mo-ok.png")} alt="" width={36} height={36} />
              Baby Mo <small><B t={{ id: "Bantuan", en: "Support" }} /></small>
            </a>
            <div className="links">
              <a href="#coba"><B t={{ id: "Coba dulu", en: "Quick fixes" }} /></a>
              <a href="#tombol"><B t={{ id: "Tombol", en: "Buttons" }} /></a>
              <a href="#faq">FAQ</a>
              <a href="#kontak"><B t={{ id: "Hubungi", en: "Contact" }} /></a>
              <a href={asset("/app/")}><B t={{ id: "Tentang app", en: "About the app" }} /></a>
            </div>
            <div className="lang" role="group" aria-label="Bahasa / Language">
              <button type="button" data-set-lang="id" lang="id">ID</button>
              <button type="button" data-set-lang="en" lang="en">EN</button>
            </div>
          </div>
        </nav>

        <main>
          <header className="hero">
            <div className="blob b1" /><div className="blob b2" /><div className="blob b3" />
            <div className="wrap">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img className="mo" src={asset("/baby-mo-poses/baby-mo-idea.png")} alt="" width={120} height={120} />
              <div className="bubble"><B t={{ id: "Assalamu'alaikum! 👋", en: "Assalamu'alaikum! 👋" }} /></div>
              <h1>
                <span data-l="id">Ada yang bisa <span className="grad">Mo bantu</span>?</span>
                <span data-l="en">How can <span className="grad">Mo help</span>?</span>
              </h1>
              <p>
                <span data-l="id">Jawaban cepat untuk pertanyaan <b className="c1">Ayah</b> dan <b className="c2">Bunda</b> — tentang <b className="c3">game</b>, <b className="c4">suara</b>, <b className="c5">jadwal sholat</b>, dan <b className="c6">privasi</b>.</span>
                <span data-l="en">Quick answers for <b className="c1">mums</b> and <b className="c2">dads</b> — about <b className="c3">games</b>, <b className="c4">sound</b>, <b className="c5">prayer times</b> and <b className="c6">privacy</b>.</span>
              </p>
              <div className="tags" aria-hidden="true">
                <span className="tag t1">🔊 <B t={{ id: "Suara", en: "Sound" }} /></span>
                <span className="tag t2">🕌 <B t={{ id: "Sholat", en: "Prayer" }} /></span>
                <span className="tag t3">🌗 <B t={{ id: "Tema", en: "Theme" }} /></span>
                <span className="tag t4">🔒 <B t={{ id: "Privasi", en: "Privacy" }} /></span>
              </div>
              <label className="search">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" aria-hidden="true"><circle cx="11" cy="11" r="7" /><path d="m20 20-3.5-3.5" /></svg>
                <input id="faq-q" suppressHydrationWarning type="search" placeholder="Cari: suara, bahasa, jadwal sholat…" aria-label="Cari pertanyaan / Search questions" autoComplete="off" />
              </label>
              <div className="topics">
                {GROUPS.map((g) => (
                  <a className="topic" href={`#${g.id}`} key={g.id}>
                    <span className="ic" style={{ background: g.tone }} aria-hidden="true">{g.icon}</span>
                    <span><b><B t={g.title} /></b><small><B t={g.blurb} /></small></span>
                  </a>
                ))}
              </div>
            </div>
          </header>

          <section id="coba">
            <div className="wrap">
              <div className="kick"><B t={{ id: "Coba ini dulu", en: "Try these first" }} /></div>
              <h2><B t={{ id: "3 langkah yang sering menyelesaikan masalah", en: "3 steps that fix most problems" }} /></h2>
              <div className="quick">
                <div className="step"><div className="n">1</div><h3><B t={{ id: "Tutup & buka lagi", en: "Close & reopen" }} /></h3><p><B t={{ id: "Usap ke atas dari bawah layar, geser Baby Mo ke atas untuk menutupnya, lalu buka kembali.", en: "Swipe up from the bottom of the screen, flick Baby Mo away to close it, then open it again." }} /></p></div>
                <div className="step"><div className="n">2</div><h3><B t={{ id: "Perbarui aplikasi", en: "Update the app" }} /></h3><p><B t={{ id: "Buka App Store, ketuk foto profil Anda, lalu perbarui Baby Mo jika ada versi baru.", en: "Open the App Store, tap your profile photo, and update Baby Mo if a new version is available." }} /></p></div>
                <div className="step"><div className="n">3</div><h3><B t={{ id: "Mulai ulang perangkat", en: "Restart the device" }} /></h3><p><B t={{ id: "Matikan iPhone/iPad sebentar lalu nyalakan lagi. Data Baby Mo tetap aman.", en: "Turn the iPhone/iPad off for a moment, then on again. Your Baby Mo data stays safe." }} /></p></div>
              </div>
            </div>
          </section>

          <section id="tombol" style={{ paddingTop: 10 }}>
            <div className="wrap">
              <div className="kick"><B t={{ id: "Kenali tombolnya", en: "Know the buttons" }} /></div>
              <h2><B t={{ id: "Tombol di bagian atas Beranda", en: "The buttons at the top of Home" }} /></h2>
              <div className="guide">
                <div className="gshot">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={asset("/app-store/app-hub-v1.webp")} alt="" width={390} height={664} loading="lazy" />
                  {BUTTONS.map((b, i) => (
                    <span className="pin" key={i} style={{ left: `${b.x}%`, top: `${b.y}%` }}>{i + 1}</span>
                  ))}
                </div>
                <ol className="legend">
                  {BUTTONS.map((b, i) => (
                    <li key={i}><span className="pin static">{i + 1}</span><span><b><B t={b.t} /></b><small><B t={b.d} /></small></span></li>
                  ))}
                </ol>
              </div>
            </div>
          </section>

          <section id="faq" style={{ paddingTop: 10 }}>
            <div className="wrap">
              <div className="kick"><B t={{ id: "Pertanyaan umum", en: "Frequently asked" }} /></div>
              <h2><B t={{ id: "Jawaban per topik", en: "Answers by topic" }} /></h2>
              {GROUPS.map((g) => (
                <div className="fgroup" id={g.id} data-group key={g.id}>
                  <div className="ghead">
                    <span className="ic" style={{ background: g.tone }} aria-hidden="true">{g.icon}</span>
                    <h3><B t={g.title} /></h3>
                  </div>
                  {g.faqs.map((f) => (
                    <details data-faq key={String(f.q.en)}>
                      <summary><B t={f.q} /></summary>
                      <div className="ans">
                        <div data-l="id">{f.a.id}</div>
                        <div data-l="en">{f.a.en}</div>
                      </div>
                    </details>
                  ))}
                </div>
              ))}
              <div className="empty" id="faq-empty">
                <p style={{ margin: 0 }}>
                  <B t={{ id: <>Belum ketemu jawabannya? <a href="#kontak">Hubungi kami</a> — kami senang membantu.</>, en: <>No answer yet? <a href="#kontak">Contact us</a> — we&apos;re happy to help.</> }} />
                </p>
              </div>
            </div>
          </section>

          <section id="kontak">
            <div className="wrap">
              <div className="contact">
                <div className="kick"><B t={{ id: "Hubungi kami", en: "Contact us" }} /></div>
                <h2><B t={{ id: "Masih butuh bantuan?", en: "Still need help?" }} /></h2>
                <p className="lead"><B t={{ id: "Kami biasanya membalas dalam 1–2 hari kerja. Tulis dalam Bahasa Indonesia atau Inggris.", en: "We usually reply within 1–2 working days. Write in Indonesian or English." }} /></p>
                <div className="cgrid">
                  <a className="cbox" href={bugHref}>
                    <span className="ic" aria-hidden="true">🐞</span>
                    <b><B t={{ id: "Laporkan masalah", en: "Report a problem" }} /></b>
                    <span className="s"><B t={{ id: "Email berisi format laporan: perangkat, versi iOS, game, dan apa yang terjadi.", en: "An email with a ready-made form: device, iOS version, game and what happened." }} /></span>
                  </a>
                  <a className="cbox" href={`mailto:${SUPPORT_EMAIL}?subject=${encodeURIComponent("Pertanyaan / Question — Baby Mo")}`}>
                    <span className="ic" aria-hidden="true">✉️</span>
                    <b>{SUPPORT_EMAIL}</b>
                    <span className="s"><B t={{ id: "Pertanyaan, saran, koreksi konten, atau permintaan hapus data.", en: "Questions, ideas, content corrections or data-deletion requests." }} /></span>
                  </a>
                  <a className="cbox" href={INSTAGRAM_URL}>
                    <span className="ic" aria-hidden="true">📷</span>
                    <b>@babymo.official</b>
                    <span className="s"><B t={{ id: "Kabar terbaru dan pesan langsung di Instagram.", en: "News and direct messages on Instagram." }} /></span>
                  </a>
                </div>
              </div>
            </div>
          </section>

          <section style={{ paddingTop: 10 }}>
            <div className="wrap">
              <div className="kick"><B t={{ id: "Privasi & keamanan anak", en: "Privacy & child safety" }} /></div>
              <h2><B t={{ id: "Aman untuk si kecil", en: "Safe for little ones" }} /></h2>
              <div className="safe">
                <div><i>✓</i><B t={{ id: "Tanpa iklan, pelacakan, atau analitik di dalam aplikasi.", en: "No ads, tracking or analytics inside the app." }} /></div>
                <div><i>✓</i><B t={{ id: "Tidak mengumpulkan data pribadi anak.", en: "No personal data collected from children." }} /></div>
                <div><i>✓</i><B t={{ id: "Tidak ada chat, profil, atau fitur sosial.", en: "No chat, profiles or social features." }} /></div>
              </div>
              <p style={{ marginTop: 14 }}>
                <B t={{ id: <>Selengkapnya di <a href={asset("/privacy/")}>Kebijakan Privasi</a>.</>, en: <>Read more in our <a href={asset("/privacy/")}>Privacy Policy</a>.</> }} />
              </p>
            </div>
          </section>
        </main>

        <footer>
          <div className="wrap">
            <a href={asset("/app/")}><B t={{ id: "Tentang aplikasi", en: "About the app" }} /></a>·
            <a href={asset("/privacy/")}><B t={{ id: "Privasi", en: "Privacy" }} /></a>·
            <a href={asset("/")}>babymo.id</a>
            <p style={{ marginTop: 10 }}>© Baby Mo</p>
          </div>
        </footer>
      </body>
    </html>
  );
}
