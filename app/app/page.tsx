import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Baloo_2, Inter } from "next/font/google";
import { asset } from "@/lib/i18n/config";
import { APP_STORE_URL, LANG_SCRIPT, SUPPORT_EMAIL } from "@/lib/content/store-pages";

/**
 * babymo.id/app — the marketing page for the Baby Mo iPhone & iPad app
 * (the "Marketing URL" in App Store Connect). Every claim here is checked
 * against the app in the babymo-app repo and the privacy policy — keep it
 * that way when the app changes. Screenshots are real captures of the app
 * (public/app-store, versioned filenames because the service worker caches
 * images).
 */
const rounded = Baloo_2({ subsets: ["latin"], weight: ["600", "700", "800"], variable: "--f-round", display: "swap" });
const inter = Inter({ subsets: ["latin"], variable: "--f-body", display: "swap" });

export const metadata: Metadata = {
  title: "Baby Mo — Aplikasi Belajar Islam untuk Anak · Islamic learning app for kids",
  description:
    "Baby Mo for iPhone and iPad: 11 Islamic games, daily du'as with Arabic audio, a step-by-step prayer and wudhu guide, the hijaiyah letters, prayer times and a bedtime routine for children aged 2–8. Free, no ads, no account, works offline.",
  alternates: { canonical: "https://babymo.id/app/" },
  robots: { index: true, follow: true },
  openGraph: {
    title: "Baby Mo — Belajar Islam sambil bermain",
    description: "11 game islami, doa harian dengan audio Arab, panduan sholat & wudhu, huruf hijaiyah. Gratis, tanpa iklan, tanpa akun.",
    url: "https://babymo.id/app/",
    images: [{ url: "https://babymo.id/app-store/app-hub-v1.webp" }],
  },
};

/* ───────────────────────── content ───────────────────────── */

type Bi = { id: ReactNode; en: ReactNode };
const B = ({ t }: { t: Bi }) => (
  <>
    <span data-l="id">{t.id}</span>
    <span data-l="en">{t.en}</span>
  </>
);

const STATS: { n: string; t: Bi }[] = [
  { n: "11", t: { id: "game islami", en: "Islamic games" } },
  { n: "6", t: { id: "doa harian + audio", en: "daily du'as + audio" } },
  { n: "28", t: { id: "huruf hijaiyah", en: "hijaiyah letters" } },
  { n: "10", t: { id: "langkah wudhu", en: "wudhu steps" } },
  { n: "2", t: { id: "bahasa: ID & EN", en: "languages: ID & EN" } },
  { n: "0", t: { id: "iklan, akun, pelacak", en: "ads, accounts, trackers" } },
];

const DAY: { time: Bi; icon: string; title: Bi; body: Bi; shot: string; tone: string }[] = [
  {
    time: { id: "Pagi", en: "Morning" }, icon: "🌅", tone: "#FFE8B8", shot: "/app-store/app-doa-v1.webp",
    title: { id: "Doa bangun tidur", en: "The waking-up du'a" },
    body: { id: "Mulai hari dengan Doa Harian: 6 doa dari bangun tidur, kamar mandi, makan, belajar, keluar rumah, sampai tidur — dengan suara Arab, latin, dan arti.", en: "Start the day with Daily Du'as: 6 du'as for waking up, the bathroom, eating, studying, leaving home and bedtime — with Arabic audio, transliteration and meaning." },
  },
  {
    time: { id: "Siang", en: "Midday" }, icon: "🎮", tone: "#D9F2FF", shot: "/app-store/app-find-v1.webp",
    title: { id: "Main sambil belajar", en: "Play and learn" },
    body: { id: "Cari Baby Mo di kamar, ruang keluarga, sampai Pasar Ramadan. Memory Match dari 4 kartu (usia 2+) sampai 18 kartu (usia 5+), plus mode hijaiyah.", en: "Find Baby Mo in his bedroom, the living room and even a Ramadan market. Memory Match grows from 4 cards (age 2+) to 18 cards (age 5+), with a hijaiyah mode too." },
  },
  {
    time: { id: "Sore", en: "Afternoon" }, icon: "🕌", tone: "#DDF5E6", shot: "/app-store/app-wudhu-v1.webp",
    title: { id: "Wudhu & sholat bareng Mo", en: "Wudhu & prayer with Mo" },
    body: { id: "Wudhu Bareng Mo mengajarkan 10 langkah wudhu plus niat dan doanya, lalu game mengurutkan. Sholat Bareng Mo memandu 7 langkah gerakan dan bacaan, dengan hitung mundur ke waktu sholat berikutnya.", en: "Wudhu with Mo teaches the 10 steps of wudhu with its intention and du'a, then a sorting game. Pray with Mo guides the 7 steps of the prayer, with a countdown to the next prayer time." },
  },
  {
    time: { id: "Malam", en: "Night" }, icon: "🌙", tone: "#E6E0FF", shot: "/app-store/app-dream-v1.webp",
    title: { id: "Dreamtime", en: "Dreamtime" },
    body: { id: "Rutinitas tidur 4 langkah: gosok gigi, ganti baju, baca doa, lalu tidur — dipandu Baby Mo dengan suasana malam yang tenang.", en: "A 4-step bedtime routine: brush teeth, change clothes, read the du'a, then sleep — guided by Baby Mo in a calm night-time scene." },
  },
];

const SHOWCASE: { shot: string; kicker: Bi; title: Bi; points: Bi[] }[] = [
  {
    shot: "/app-store/app-hub-v1.webp",
    kicker: { id: "Beranda", en: "Home" },
    title: { id: "Baby Mo menyapa si kecil dengan namanya", en: "Baby Mo greets your child by name" },
    points: [
      { id: "Ketik nama panggilan anak — tersimpan hanya di perangkat.", en: "Type your child's nickname — it stays on the device." },
      { id: "Sapaan berubah mengikuti waktu: pagi, siang, sore, malam.", en: "The greeting changes with the time of day." },
      { id: "Kumpulkan bintang dari setiap game.", en: "Collect stars from every game." },
    ],
  },
  {
    shot: "/app-store/app-sholat-v1.webp",
    kicker: { id: "Sholat Bareng Mo", en: "Pray with Mo" },
    title: { id: "Sholat langkah demi langkah", en: "Prayer, one step at a time" },
    points: [
      { id: "Panduan 7 langkah gerakan dan bacaan sholat.", en: "A 7-step guide to the prayer movements and recitations." },
      { id: "Jadwal sholat hari ini dan arah kiblat — lokasi opsional, bisa pilih kota.", en: "Today's prayer times and the Qibla — location optional, or pick a city." },
      { id: "Catatan progres dan streak untuk menyemangati.", en: "Progress and streaks to keep motivation up." },
    ],
  },
  {
    shot: "/app-store/app-hijaiyah-v1.webp",
    kicker: { id: "Huruf Hijaiyah", en: "Hijaiyah letters" },
    title: { id: "Dari alif sampai ya, dengan suara", en: "From alif to ya, with sound" },
    points: [
      { id: "28 huruf Arab dengan audio, kuis, dan bintang.", en: "28 Arabic letters with audio, quizzes and stars." },
      { id: "Pulau Hijaiyah: jelajahi pulau, gali, bangun, dan temukan huruf yang tersembunyi.", en: "Hijaiyah Island: explore, dig, build and find the hidden letters." },
      { id: "Kata Islam: susun huruf menjadi kata Arab pertama.", en: "Islamic Words: put letters together into first Arabic words." },
    ],
  },
];

const LITTLE: { icon: string; t: Bi; d: Bi }[] = [
  { icon: "👆", t: { id: "Tombol besar", en: "Big buttons" }, d: { id: "Mudah ditekan jari mungil.", en: "Easy for small fingers." } },
  { icon: "🔊", t: { id: "Suara lebih dulu", en: "Sound first" }, d: { id: "Anak yang belum bisa membaca tetap bisa bermain.", en: "Children who can't read yet can still play." } },
  { icon: "⭐", t: { id: "Bintang hadiah", en: "Reward stars" }, d: { id: "Pujian kecil di setiap langkah, tanpa tekanan.", en: "Little praise at every step, no pressure." } },
  { icon: "🌗", t: { id: "Mode gelap", en: "Dark mode" }, d: { id: "Nyaman untuk mata di malam hari.", en: "Easy on the eyes at night." } },
  { icon: "✈️", t: { id: "Bisa offline", en: "Works offline" }, d: { id: "Cocok untuk perjalanan dan mudik.", en: "Great for car trips and travel." } },
  { icon: "🇮🇩", t: { id: "Indonesia & Inggris", en: "Indonesian & English" }, d: { id: "Ganti bahasa dengan satu ketukan.", en: "Switch language in one tap." } },
];

const AGES: { age: string; color: string; t: Bi; games: Bi }[] = [
  { age: "2–3", color: "#FFB627", t: { id: "Kenalan & bermain", en: "Meet & play" }, games: { id: "Kenalan dengan Baby Mo (puzzle), Cari Baby Mo, Memory Match mudah, Dreamtime", en: "Meet Baby Mo (puzzle), Find Baby Mo, easy Memory Match, Dreamtime" } },
  { age: "3–5", color: "#3FA57A", t: { id: "Doa & kebiasaan baik", en: "Du'as & good habits" }, games: { id: "Doa Harian, Dua Journey, Wudhu Bareng Mo, Puzzle Kalimat Thayyibah", en: "Daily Du'as, Dua Journey, Wudhu with Mo, Kind Words puzzle" } },
  { age: "5–8", color: "#5AA9E6", t: { id: "Membaca & beribadah", en: "Reading & worship" }, games: { id: "Huruf Hijaiyah, Pulau Hijaiyah, Kata Islam, Sholat Bareng Mo, Forehand Beat", en: "Hijaiyah Letters, Hijaiyah Island, Islamic Words, Pray with Mo, Forehand Beat" } },
];

const NOS: Bi[] = [
  { id: "Iklan", en: "Ads" },
  { id: "Akun & login", en: "Accounts & login" },
  { id: "Pembelian dalam app", en: "In-app purchases" },
  { id: "Pelacakan & analitik", en: "Tracking & analytics" },
  { id: "Chat & fitur sosial", en: "Chat & social features" },
  { id: "Data pribadi anak", en: "Children's personal data" },
];

const FAQ: { q: Bi; a: Bi }[] = [
  { q: { id: "Benar-benar gratis?", en: "Is it really free?" }, a: { id: "Ya. Tanpa iklan dan tanpa pembelian dalam aplikasi. Baby Mo dibuat untuk berbagi ilmu.", en: "Yes. No ads and no in-app purchases. Baby Mo is made to share knowledge." } },
  { q: { id: "Data apa yang disimpan?", en: "What data is stored?" }, a: { id: "Hanya nama panggilan (jika diisi), bintang, progres, dan pengaturan — semuanya di perangkat Anda, tidak dikirim ke kami.", en: "Only the nickname (if you add one), stars, progress and settings — all on your device, never sent to us." } },
  { q: { id: "Butuh internet?", en: "Does it need the internet?" }, a: { id: "Tidak untuk bermain. Internet hanya dipakai untuk menghitung jadwal sholat.", en: "Not to play. The internet is only used to calculate prayer times." } },
];

/* ───────────────────────── styles ───────────────────────── */

const CSS = `
:root{color-scheme:light dark;--bg:#FBFAF6;--bg2:#F3F7F2;--card:#FFFFFF;--ink:#14181A;--soft:#5B615C;--line:#E7E4DB;--green:#1E8C53;--green2:#2FB36F;--sky:#5AA9E6;--sun:#FFB627;--pink:#FF8FAD;--violet:#8B7CF6;--shadow:0 20px 50px -24px rgba(20,40,30,.35)}
@media (prefers-color-scheme:dark){:root{--bg:#0F1312;--bg2:#141A18;--card:#1A201E;--ink:#EEF1EC;--soft:#A7AEA8;--line:#29312D;--green:#5CCB8C;--green2:#7AD9A2;--shadow:0 20px 50px -24px rgba(0,0,0,.8)}}
*{box-sizing:border-box}
html,body{margin:0;background:var(--bg);color:var(--ink)}
body{font-family:var(--f-body),-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,sans-serif;font-size:16px;line-height:1.6;-webkit-font-smoothing:antialiased}
html[data-lang="id"] [data-l="en"],html[data-lang="en"] [data-l="id"]{display:none!important}
a{color:var(--green)}
img{max-width:100%}
.wrap{max-width:1120px;margin:0 auto;padding:0 18px}
.r{font-family:var(--f-round),var(--f-body),sans-serif}
h1,h2,h3{font-family:var(--f-round),var(--f-body),sans-serif;letter-spacing:-.01em;margin:0}
h2{font-size:clamp(28px,4.4vw,42px);line-height:1.08;font-weight:800}
h3{font-size:21px;line-height:1.2;font-weight:700}
.kick{display:inline-flex;align-items:center;gap:8px;font-size:13px;font-weight:800;letter-spacing:.12em;text-transform:uppercase;color:var(--green);margin-bottom:10px}
.kick::before{content:"";width:18px;height:3px;border-radius:2px;background:currentColor}
.lede{font-size:18px;color:var(--soft);max-width:36em;margin:12px 0 0}
section{padding:72px 0}
.c{text-align:center}.c .lede{margin-left:auto;margin-right:auto}

/* nav */
.nav{position:sticky;top:0;z-index:20;backdrop-filter:saturate(1.6) blur(14px);-webkit-backdrop-filter:saturate(1.6) blur(14px);background:color-mix(in srgb,var(--bg) 78%,transparent);border-bottom:1px solid color-mix(in srgb,var(--line) 70%,transparent)}
.nav .wrap{display:flex;align-items:center;gap:14px;height:62px}
.brand{display:flex;align-items:center;gap:9px;text-decoration:none;color:var(--ink);font-family:var(--f-round);font-weight:800;font-size:20px}
.brand img{width:36px;height:36px;border-radius:11px;background:#E8F4EC;object-fit:contain}
.links{display:none;gap:4px;margin-left:auto}
.links a{color:var(--ink);text-decoration:none;font-weight:600;font-size:15px;padding:8px 12px;border-radius:999px}
.links a:hover{background:var(--bg2)}
@media(min-width:860px){.links{display:flex}}
.lang{display:flex;gap:4px;margin-left:auto;background:var(--bg2);padding:4px;border-radius:999px;border:1px solid var(--line)}
@media(min-width:860px){.lang{margin-left:8px}}
.lang button{font:inherit;font-size:13px;font-weight:800;padding:6px 12px;border-radius:999px;border:0;background:transparent;color:var(--soft);cursor:pointer}
html[data-lang="id"] .lang [data-set-lang="id"],html[data-lang="en"] .lang [data-set-lang="en"]{background:var(--card);color:var(--ink);box-shadow:0 2px 8px -4px rgba(0,0,0,.3)}

/* hero */
.hero{position:relative;overflow:hidden;padding:56px 0 40px}
.blob{position:absolute;border-radius:50%;filter:blur(60px);opacity:.55;pointer-events:none}
.b1{width:520px;height:520px;background:#BDEBCF;top:-180px;left:-160px}
.b2{width:420px;height:420px;background:#CFE6FF;top:40px;right:-140px}
.b3{width:360px;height:360px;background:#FFE1EA;bottom:-180px;left:35%}
@media (prefers-color-scheme:dark){.blob{opacity:.18}}
.hero .wrap{position:relative;z-index:1}
.hgrid{position:relative;display:grid;gap:40px;align-items:center}
@media(min-width:900px){.hgrid{grid-template-columns:1.1fr .9fr}}
.pill{display:inline-flex;align-items:center;gap:8px;padding:7px 14px 7px 8px;border-radius:999px;background:var(--card);border:1px solid var(--line);font-weight:700;font-size:14px;box-shadow:var(--shadow)}
.pill b{background:var(--green);color:#fff;border-radius:999px;padding:2px 9px;font-size:12px}
.hero h1{font-size:clamp(40px,7vw,72px);line-height:1.02;font-weight:800;margin:18px 0 0}
.grad{background:linear-gradient(90deg,#1E8C53,#2FB3A0 45%,#5AA9E6);-webkit-background-clip:text;background-clip:text;color:transparent}
.cta{display:flex;flex-wrap:wrap;gap:12px;margin:26px 0 18px}
.btn{display:inline-flex;align-items:center;gap:10px;min-height:56px;padding:10px 22px;border-radius:16px;font-weight:800;text-decoration:none;font-size:16px;border:1px solid var(--line);background:var(--card);color:var(--ink)!important;transition:transform .15s}
.btn:hover{transform:translateY(-2px)}
.btn.store{background:#0B0B0C;color:#fff!important;border-color:#0B0B0C}
@media (prefers-color-scheme:dark){.btn.store{background:#fff;color:#0B0B0C!important;border-color:#fff}}
.btn.store small{display:block;font-size:11px;font-weight:600;opacity:.75;line-height:1}
.btn.store span.big{display:block;font-size:19px;line-height:1.1}
.btn.store svg{width:26px;height:26px}
.btn.soon{cursor:default}
.btn.soon:hover{transform:none}
.trust{display:flex;flex-wrap:wrap;gap:8px 18px;padding:0;margin:0;list-style:none;color:var(--soft);font-weight:700;font-size:15px}
.trust li::before{content:"✓ ";color:var(--green);font-weight:900}

.stage{position:relative;justify-self:center;width:min(340px,82vw);aspect-ratio:9/16.5}
.phone{position:absolute;inset:0;border-radius:44px;background:#16181C;padding:11px;box-shadow:0 40px 80px -30px rgba(10,30,20,.55),inset 0 0 0 2px #2A2D33}
.phone img{width:100%;height:100%;object-fit:cover;object-position:top;border-radius:34px;display:block;background:#fff}
.float{position:absolute;display:flex;align-items:center;gap:8px;padding:10px 14px;border-radius:16px;background:var(--card);border:1px solid var(--line);box-shadow:var(--shadow);font-weight:800;font-size:14px;white-space:nowrap;animation:bob 5s ease-in-out infinite}
.float .ic{font-size:20px}
.f1{top:30%;left:-22%}.f2{top:52%;right:-24%;animation-delay:-1.6s}.f3{bottom:4%;left:-18%;animation-delay:-3.2s}
@media(max-width:520px){.f1{left:-6%}.f2{right:-6%}.f3{left:-4%}}
.peek{position:absolute;width:44%;right:-16%;bottom:-6%;filter:drop-shadow(0 18px 18px rgba(0,0,0,.2));animation:bob 4s ease-in-out infinite}
@keyframes bob{0%,100%{translate:0 0}50%{translate:0 -10px}}
@media (prefers-reduced-motion:reduce){.float,.peek{animation:none}}

/* stats */
.stats{display:grid;grid-template-columns:repeat(2,1fr);gap:10px;margin-top:8px}
@media(min-width:760px){.stats{grid-template-columns:repeat(6,1fr)}}
.stat{background:var(--card);border:1px solid var(--line);border-radius:20px;padding:16px 14px;text-align:center}
.stat b{display:block;font-family:var(--f-round);font-size:40px;line-height:1;font-weight:800}
.stat:nth-child(1) b{color:var(--sun)}.stat:nth-child(2) b{color:var(--green)}.stat:nth-child(3) b{color:var(--sky)}.stat:nth-child(4) b{color:#2FB3A0}.stat:nth-child(5) b{color:var(--violet)}.stat:nth-child(6) b{color:var(--pink)}
.stat span{display:block;color:var(--soft);font-size:14px;font-weight:600;margin-top:6px}

/* day timeline */
.day{display:grid;gap:16px;margin-top:34px}
@media(min-width:760px){.day{grid-template-columns:repeat(2,1fr)}}
@media(min-width:1060px){.day{grid-template-columns:repeat(4,1fr)}}
.slot{position:relative;background:var(--card);border:1px solid var(--line);border-radius:26px;overflow:hidden;display:flex;flex-direction:column}
.slot .top{padding:18px 18px 0}
.slot .when{display:inline-flex;align-items:center;gap:6px;font-weight:800;font-size:13px;padding:5px 11px;border-radius:999px;color:#14181A}
.slot h3{margin:12px 0 6px}
.slot p{color:var(--soft);font-size:15px;margin:0 0 16px}
.slot .shot{margin-top:auto;height:210px;overflow:hidden;padding:0 26px}
.slot .shot img{width:100%;border-radius:22px 22px 0 0;border:6px solid #16181C;border-bottom:0;display:block}

/* showcase */
.show{display:grid;gap:40px;align-items:center;padding:28px 0}
@media(min-width:880px){.show{grid-template-columns:1fr 1fr}.show.flip .shotbox{order:2}}
.shotbox{position:relative;display:flex;justify-content:center;padding:34px 0;border-radius:32px;background:linear-gradient(160deg,var(--bg2),transparent)}
.shotbox .mini{width:min(260px,70vw);border-radius:36px;background:#16181C;padding:9px;box-shadow:var(--shadow);transform:rotate(-3deg)}
.show.flip .shotbox .mini{transform:rotate(3deg)}
.shotbox .mini img{display:block;border-radius:28px;width:100%}
.ticks{list-style:none;padding:0;margin:18px 0 0}
.ticks li{position:relative;padding:10px 0 10px 38px;font-size:17px;border-bottom:1px dashed var(--line)}
.ticks li:last-child{border:0}
.ticks li::before{content:"✓";position:absolute;left:0;top:9px;width:26px;height:26px;border-radius:50%;display:grid;place-items:center;background:color-mix(in srgb,var(--green) 16%,transparent);color:var(--green);font-weight:900;font-size:14px}

/* little hands */
.little{display:grid;gap:14px;grid-template-columns:repeat(auto-fill,minmax(160px,1fr));margin-top:30px}
.lt{background:var(--card);border:1px solid var(--line);border-radius:22px;padding:20px 16px;text-align:center}
.lt .ic{font-size:34px;line-height:1}
.lt h3{font-size:18px;margin:10px 0 4px}
.lt p{color:var(--soft);font-size:14px;margin:0}

/* ages */
.ages{display:grid;gap:14px;margin-top:30px}
@media(min-width:820px){.ages{grid-template-columns:repeat(3,1fr)}}
.age{border-radius:26px;padding:22px;background:var(--card);border:1px solid var(--line);position:relative;overflow:hidden}
.age .n{font-family:var(--f-round);font-weight:800;font-size:46px;line-height:1}
.age .n small{font-size:18px;font-weight:700;color:var(--soft)}
.age h3{margin:8px 0 6px}
.age p{color:var(--soft);margin:0;font-size:15px}
.age::after{content:"";position:absolute;right:-30px;top:-30px;width:110px;height:110px;border-radius:50%;background:var(--c);opacity:.16}

/* parents */
.parents{border-radius:36px;padding:40px 24px;background:linear-gradient(140deg,#0F3B27,#14533A 55%,#1E6F4D);color:#F2FAF5;position:relative;overflow:hidden}
.parents h2{color:#fff}
.parents .lede{color:#CFE8DA}
.parents .kick{color:#9FE3BE}
.nos{display:grid;gap:10px;grid-template-columns:repeat(auto-fill,minmax(200px,1fr));margin-top:26px}
.no{display:flex;align-items:center;gap:12px;background:rgba(255,255,255,.08);border:1px solid rgba(255,255,255,.14);border-radius:18px;padding:14px 16px;font-weight:700}
.no i{font-style:normal;width:30px;height:30px;border-radius:50%;display:grid;place-items:center;background:#FF6B6B;color:#fff;font-weight:900;flex:0 0 auto}
.parents a{color:#9FE3BE}
.parents .mo{position:absolute;right:-10px;bottom:-20px;width:170px;opacity:.95}
@media(max-width:700px){.parents .mo{display:none}}

/* faq */
.faq{display:grid;gap:12px;margin-top:26px}
@media(min-width:880px){.faq{grid-template-columns:repeat(3,1fr)}}
.qa{background:var(--card);border:1px solid var(--line);border-radius:22px;padding:20px}
.qa h3{font-size:18px;margin-bottom:6px}
.qa p{margin:0;color:var(--soft);font-size:15px}

/* final cta */
.final{border-radius:36px;padding:44px 24px;text-align:center;background:linear-gradient(120deg,#FFF1C9,#FFE1EA 50%,#DDEEFF);color:#14181A;position:relative;overflow:hidden}
.final h2{color:#14181A}
.final p{color:#4A4F4B}
.final .cta{justify-content:center}
.final .lede{margin-left:auto;margin-right:auto;text-align:center}
.final img.jump{width:150px;margin:-10px auto 4px;display:block;animation:bob 3.4s ease-in-out infinite}

footer{padding:36px 0 56px;color:var(--soft);font-size:14px;text-align:center}
footer a{margin:0 8px;font-weight:600}
`;

const AppleLogo = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true" fill="currentColor">
    <path d="M16.37 12.3c-.02-2.22 1.82-3.29 1.9-3.34-1.04-1.52-2.65-1.72-3.22-1.75-1.36-.14-2.67.81-3.36.81-.7 0-1.76-.79-2.9-.77-1.49.02-2.87.87-3.64 2.2-1.56 2.7-.4 6.68 1.11 8.87.74 1.07 1.62 2.27 2.77 2.23 1.12-.05 1.54-.72 2.89-.72 1.34 0 1.73.72 2.9.7 1.2-.02 1.96-1.08 2.69-2.16.85-1.24 1.2-2.45 1.21-2.51-.03-.01-2.33-.89-2.35-3.56ZM14.17 5.78c.61-.75 1.03-1.78.92-2.81-.88.04-1.96.6-2.59 1.33-.57.65-1.07 1.71-.94 2.72.99.08 2-.5 2.61-1.24Z" />
  </svg>
);

function StoreButton() {
  const inner = (
    <>
      <AppleLogo />
      <span>
        <small><span data-l="id">{APP_STORE_URL ? "Unduh di" : "Segera di"}</span><span data-l="en">{APP_STORE_URL ? "Download on the" : "Coming soon to the"}</span></small>
        <span className="big">App Store</span>
      </span>
    </>
  );
  return APP_STORE_URL ? (
    <a className="btn store" href={APP_STORE_URL}>{inner}</a>
  ) : (
    <span className="btn store soon" aria-disabled="true">{inner}</span>
  );
}

/* ───────────────────────── page ───────────────────────── */

export default function AppMarketingPage() {
  return (
    <html lang="id" data-lang="id" className={`${rounded.variable} ${inter.variable}`} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: LANG_SCRIPT }} />
      </head>
      <body>
        <style dangerouslySetInnerHTML={{ __html: CSS }} />

        <nav className="nav" aria-label="Baby Mo">
          <div className="wrap">
            <a className="brand" href={asset("/")}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={asset("/baby-mo-poses/baby-mo-ok.png")} alt="" width={36} height={36} />
              Baby Mo
            </a>
            <div className="links">
              <a href="#hari"><B t={{ id: "Sehari bersama Mo", en: "A day with Mo" }} /></a>
              <a href="#fitur"><B t={{ id: "Fitur", en: "Features" }} /></a>
              <a href="#usia"><B t={{ id: "Usia", en: "Ages" }} /></a>
              <a href="#orangtua"><B t={{ id: "Orang tua", en: "Parents" }} /></a>
              <a href={asset("/support/")}><B t={{ id: "Bantuan", en: "Support" }} /></a>
            </div>
            <div className="lang" role="group" aria-label="Bahasa / Language">
              <button type="button" data-set-lang="id" lang="id">ID</button>
              <button type="button" data-set-lang="en" lang="en">EN</button>
            </div>
          </div>
        </nav>

        <main>
          {/* ── hero ── */}
          <header className="hero">
            <div className="blob b1" /><div className="blob b2" /><div className="blob b3" />
            <div className="wrap hgrid">
              <div>
                <span className="pill"><b><B t={{ id: "Baru", en: "New" }} /></b><B t={{ id: "Untuk iPhone & iPad", en: "For iPhone & iPad" }} /></span>
                <h1>
                  <span data-l="id">Belajar Islam <span className="grad">sambil bermain</span> bersama Baby Mo</span>
                  <span data-l="en">Learn about Islam <span className="grad">through play</span> with Baby Mo</span>
                </h1>
                <p className="lede">
                  <B t={{
                    id: "11 game islami, doa harian dengan suara Arab, panduan wudhu & sholat, huruf hijaiyah, dan rutinitas tidur — untuk anak 2–8 tahun, dimainkan bersama Ayah dan Bunda.",
                    en: "11 Islamic games, daily du'as with Arabic audio, wudhu & prayer guides, the hijaiyah letters and a bedtime routine — for children aged 2–8, to enjoy together with their parents.",
                  }} />
                </p>
                <div className="cta">
                  <StoreButton />
                  <a className="btn" href="https://play.babymo.id/">🎮 <B t={{ id: "Coba di browser", en: "Try it in your browser" }} /></a>
                </div>
                <ul className="trust">
                  <li><B t={{ id: "Gratis", en: "Free" }} /></li>
                  <li><B t={{ id: "Tanpa iklan", en: "No ads" }} /></li>
                  <li><B t={{ id: "Tanpa akun", en: "No account" }} /></li>
                  <li><B t={{ id: "Bisa offline", en: "Works offline" }} /></li>
                </ul>
              </div>

              <div className="stage" aria-hidden="true">
                <div className="phone">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={asset("/app-store/app-hub-v1.webp")} alt="" width={390} height={664} />
                </div>
                <div className="float f1"><span className="ic">🔊</span><B t={{ id: "Suara Arab asli", en: "Real Arabic audio" }} /></div>
                <div className="float f2"><span className="ic">⭐</span><B t={{ id: "+3 bintang!", en: "+3 stars!" }} /></div>
                <div className="float f3"><span className="ic">🕌</span><B t={{ id: "Dzuhur · 12:00", en: "Dhuhr · 12:00" }} /></div>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img className="peek" src={asset("/baby-mo-poses/baby-mo-pose-01.png")} alt="" width={200} height={200} />
              </div>
            </div>

            <div className="wrap">
              <div className="stats" style={{ marginTop: 48 }}>
                {STATS.map((s) => (
                  <div className="stat" key={s.n + String(s.t.en)}>
                    <b>{s.n}</b>
                    <span><B t={s.t} /></span>
                  </div>
                ))}
              </div>
            </div>
          </header>

          {/* ── a day with Baby Mo ── */}
          <section id="hari">
            <div className="wrap">
              <div className="c">
                <div className="kick"><B t={{ id: "Sehari bersama Baby Mo", en: "A day with Baby Mo" }} /></div>
                <h2><B t={{ id: "Dari doa pagi sampai doa tidur", en: "From the morning du'a to the bedtime du'a" }} /></h2>
                <p className="lede"><B t={{ id: "Baby Mo menemani rutinitas si kecil sepanjang hari — singkat, lembut, dan menyenangkan.", en: "Baby Mo fits into your child's whole day — short, gentle and fun." }} /></p>
              </div>
              <div className="day">
                {DAY.map((d) => (
                  <article className="slot" key={d.shot}>
                    <div className="top">
                      <span className="when" style={{ background: d.tone }}>{d.icon} <B t={d.time} /></span>
                      <h3><B t={d.title} /></h3>
                      <p><B t={d.body} /></p>
                    </div>
                    <div className="shot">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img src={asset(d.shot)} alt="" width={390} height={664} loading="lazy" />
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </section>

          {/* ── showcase ── */}
          <section id="fitur" style={{ paddingTop: 24 }}>
            <div className="wrap">
              <div className="c">
                <div className="kick"><B t={{ id: "Di dalam aplikasi", en: "Inside the app" }} /></div>
                <h2><B t={{ id: "Dibuat untuk tumbuh bersama si kecil", en: "Made to grow with your child" }} /></h2>
              </div>
              {SHOWCASE.map((s, i) => (
                <div className={`show${i % 2 ? " flip" : ""}`} key={s.shot}>
                  <div className="shotbox">
                    <div className="mini">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img src={asset(s.shot)} alt="" width={390} height={664} loading="lazy" />
                    </div>
                  </div>
                  <div>
                    <div className="kick"><B t={s.kicker} /></div>
                    <h2 style={{ fontSize: "clamp(26px,3.6vw,36px)" }}><B t={s.title} /></h2>
                    <ul className="ticks">
                      {s.points.map((p) => <li key={String(p.en)}><B t={p} /></li>)}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* ── little hands ── */}
          <section style={{ paddingTop: 24 }}>
            <div className="wrap c">
              <div className="kick"><B t={{ id: "Ramah anak", en: "Child-friendly" }} /></div>
              <h2><B t={{ id: "Dirancang untuk tangan mungil", en: "Designed for little hands" }} /></h2>
              <div className="little">
                {LITTLE.map((l) => (
                  <div className="lt" key={String(l.t.en)}>
                    <div className="ic" aria-hidden="true">{l.icon}</div>
                    <h3><B t={l.t} /></h3>
                    <p><B t={l.d} /></p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* ── ages ── */}
          <section id="usia" style={{ paddingTop: 24 }}>
            <div className="wrap">
              <div className="c">
                <div className="kick"><B t={{ id: "Panduan usia", en: "Age guide" }} /></div>
                <h2><B t={{ id: "Mulai dari mana?", en: "Where to start?" }} /></h2>
                <p className="lede"><B t={{ id: "Setiap game mencantumkan usia yang disarankan. Ini titik awal yang bagus:", en: "Every game shows a suggested age. Here's a good place to start:" }} /></p>
              </div>
              <div className="ages">
                {AGES.map((a) => (
                  <div className="age" key={a.age} style={{ ["--c" as string]: a.color }}>
                    <div className="n" style={{ color: a.color }}>{a.age} <small><B t={{ id: "tahun", en: "years" }} /></small></div>
                    <h3><B t={a.t} /></h3>
                    <p><B t={a.games} /></p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* ── parents ── */}
          <section id="orangtua" style={{ paddingTop: 24 }}>
            <div className="wrap">
              <div className="parents">
                <div className="kick"><B t={{ id: "Untuk Ayah & Bunda", en: "For parents" }} /></div>
                <h2><B t={{ id: "Yang tidak ada di Baby Mo", en: "What you won't find in Baby Mo" }} /></h2>
                <p className="lede">
                  <B t={{
                    id: "Nama, bintang, dan progres si kecil tersimpan hanya di perangkat Anda. Doa dan hadits disertai sumbernya.",
                    en: "Your child's name, stars and progress stay only on your device. Du'as and hadith come with their sources.",
                  }} />
                </p>
                <div className="nos">
                  {NOS.map((n) => <div className="no" key={String(n.en)}><i>✕</i><B t={n} /></div>)}
                </div>
                <p style={{ marginTop: 22, marginBottom: 0 }}>
                  <B t={{ id: <>Baca <a href={asset("/privacy/")}>Kebijakan Privasi</a> lengkap kami.</>, en: <>Read our full <a href={asset("/privacy/")}>Privacy Policy</a>.</> }} />
                </p>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img className="mo" src={asset("/baby-mo-poses/baby-mo-thank-you.png")} alt="" width={170} height={170} />
              </div>
            </div>
          </section>

          {/* ── more + faq ── */}
          <section style={{ paddingTop: 24 }}>
            <div className="wrap">
              <div className="c">
                <div className="kick"><B t={{ id: "Pertanyaan singkat", en: "Quick questions" }} /></div>
                <h2><B t={{ id: "Yang sering ditanyakan", en: "Often asked" }} /></h2>
              </div>
              <div className="faq">
                {FAQ.map((f) => (
                  <div className="qa" key={String(f.q.en)}>
                    <h3><B t={f.q} /></h3>
                    <p><B t={f.a} /></p>
                  </div>
                ))}
              </div>
              <p className="c" style={{ marginTop: 18 }}>
                <a href={asset("/support/")}><B t={{ id: "Lihat semua pertanyaan di halaman Bantuan →", en: "See all questions on the Support page →" }} /></a>
              </p>
            </div>
          </section>

          {/* ── final cta ── */}
          <section style={{ paddingTop: 24 }}>
            <div className="wrap">
              <div className="final">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img className="jump" src={asset("/baby-mo-poses/baby-mo-yeyy.png")} alt="" width={150} height={150} />
                <h2><B t={{ id: "Yuk, mulai petualangan bersama Baby Mo!", en: "Start the adventure with Baby Mo!" }} /></h2>
                <p className="lede" style={{ color: "#4A4F4B" }}>
                  <B t={{
                    id: <>Dan di <a href={asset("/id/cerita/")}>babymo.id/cerita</a> ada lebih dari 150 buku cerita bergambar gratis — Ramadan, hari besar Islam, dan petualangan si kembar Mo &amp; Ais.</>,
                    en: <>And at <a href={asset("/en/cerita/")}>babymo.id/cerita</a> there are more than 150 free picture books — Ramadan, Islamic celebrations and the adventures of the twins Mo &amp; Ais.</>,
                  }} />
                </p>
                <div className="cta">
                  <StoreButton />
                  <a className="btn" href="https://play.babymo.id/">🎮 <B t={{ id: "Coba di browser", en: "Try it in your browser" }} /></a>
                </div>
                <p style={{ fontSize: 14, margin: 0 }}><B t={{ id: "Untuk iPhone & iPad dengan iOS 15 atau lebih baru.", en: "For iPhone & iPad with iOS 15 or later." }} /></p>
              </div>
            </div>
          </section>
        </main>

        <footer>
          <div className="wrap">
            <a href={asset("/support/")}><B t={{ id: "Bantuan", en: "Support" }} /></a>·
            <a href={asset("/privacy/")}><B t={{ id: "Privasi", en: "Privacy" }} /></a>·
            <a href={`mailto:${SUPPORT_EMAIL}`}>{SUPPORT_EMAIL}</a>
            <p style={{ marginTop: 10 }}>© Baby Mo · babymo.id</p>
          </div>
        </footer>
      </body>
    </html>
  );
}
