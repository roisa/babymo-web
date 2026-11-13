import type { Metadata } from "next";
import type { ReactNode } from "react";
import { STORE_FONT_VARS } from "@/lib/content/store-fonts";
import { asset } from "@/lib/i18n/config";
import { APP_STORE_URL, LANG_SCRIPT, SUPPORT_EMAIL } from "@/lib/content/store-pages";

/**
 * babymo.id/app — the marketing page for the Baby Mo app (the "Marketing URL" in App Store
 * Connect). Redesigned 13 Nov 2026 in the current iOS look: frosted "liquid glass" panels over a
 * soft sky, large rounded titles, widget-style tiles, swipeable cards and settings-style toggles.
 *
 * Every claim is checked against the app (babymo-app) and the privacy policy — keep it that way.
 * Baby Mo is a paid app: one purchase, no in-app purchases, no subscription, no ads. The price is
 * never written here (Apple shows it per country on the App Store button/page).
 * Screenshots are real captures from the App Store kit (public/app-store/v3, versioned folder
 * because the service worker caches images).
 */

export const metadata: Metadata = {
  title: "Baby Mo — Aplikasi Belajar Islam untuk Anak · Islamic learning app for kids",
  description:
    "Baby Mo for iPhone, iPad and Apple Watch: 19 Islamic games and activities, 25 du'as with real Arabic audio, wudhu and prayer guides, the 28 hijaiyah letters, kindness to animals, a bedtime routine and a Ramadan series — for children aged 2–8. One purchase, no ads, no account, works offline.",
  alternates: { canonical: "https://babymo.id/app/" },
  robots: { index: true, follow: true },
  openGraph: {
    title: "Baby Mo — Belajar Islam sambil bermain",
    description: "19 game & aktivitas islami, 25 doa dengan suara Arab, wudhu & sholat, huruf hijaiyah, Ramadan, dan Apple Watch. Sekali beli, tanpa iklan, tanpa akun.",
    url: "https://babymo.id/app/",
    images: [{ url: "https://babymo.id/app-store/v3/id-01-home.webp" }],
  },
};

/* ───────────────────────── helpers ───────────────────────── */

type Bi = { id: ReactNode; en: ReactNode };
const B = ({ t }: { t: Bi }) => (
  <>
    <span data-l="id">{t.id}</span>
    <span data-l="en">{t.en}</span>
  </>
);
const V = "/app-store/v3/";
/** A real app screenshot in both languages (only the current language is shown). */
function Shot({ k, eager }: { k: string; eager?: boolean }) {
  return (
    <>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img data-l="id" src={asset(`${V}id-${k}.webp`)} alt="" width={540} height={1174} loading={eager ? "eager" : "lazy"} />
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img data-l="en" src={asset(`${V}en-${k}.webp`)} alt="" width={540} height={1174} loading={eager ? "eager" : "lazy"} />
    </>
  );
}
function Phone({ k, eager, tilt }: { k: string; eager?: boolean; tilt?: number }) {
  return (
    <div className="phone" style={tilt ? { transform: `rotate(${tilt}deg)` } : undefined}>
      <div className="scr"><Shot k={k} eager={eager} /></div>
      <i className="isl" />
    </div>
  );
}
const Mo = ({ f, cls }: { f: string; cls?: string }) => (
  // eslint-disable-next-line @next/next/no-img-element
  <img className={cls} src={asset(`/baby-mo-poses/baby-mo-${f}.png`)} alt="" width={400} height={400} loading="lazy" />
);

/* ───────────────────────── content ───────────────────────── */

const STATS: { n: string; c: string; t: Bi }[] = [
  { n: "19", c: "#FF9F1C", t: { id: "game & aktivitas islami", en: "Islamic games & activities" } },
  { n: "25", c: "#1FA35A", t: { id: "doa dengan suara Arab asli", en: "du'as with real Arabic audio" } },
  { n: "28", c: "#2D8CFF", t: { id: "huruf hijaiyah", en: "hijaiyah letters" } },
  { n: "2", c: "#8B6CF6", t: { id: "bahasa: Indonesia & Inggris", en: "languages: Indonesian & English" } },
  { n: "0", c: "#FF5C7A", t: { id: "iklan, akun & pelacak", en: "ads, accounts & trackers" } },
];

/* "A day with Baby Mo" — swipeable cards, like the App Store's Today tab */
const DAY: { when: Bi; tint: string; k: string; title: Bi; body: Bi }[] = [
  { when: { id: "Pagi", en: "Morning" }, tint: "linear-gradient(160deg,#FFE7B3,#FFD1DC)", k: "03-doa",
    title: { id: "Doa bangun tidur", en: "The waking-up du'a" },
    body: { id: "Dengarkan suara Arab asli, kata menyala satu per satu, lalu ketuk tombol aksi bersama Mo.", en: "Hear the real Arabic, watch each word light up, then tap the action with Mo." } },
  { when: { id: "Sebelum sholat", en: "Before prayer" }, tint: "linear-gradient(160deg,#CDEBFF,#D9F7EC)", k: "05-wudhu",
    title: { id: "Wudhu bareng Mo", en: "Wudhu with Mo" },
    body: { id: "10 langkah wudhu dengan niat dan doanya, lalu game mengurutkan.", en: "The 10 steps of wudhu with the intention and du'a, then a sorting game." } },
  { when: { id: "Waktu sholat", en: "Prayer time" }, tint: "linear-gradient(160deg,#E2DAFF,#CDEBFF)", k: "04-sholat",
    title: { id: "Sholat langkah demi langkah", en: "Prayer, step by step" },
    body: { id: "7 langkah gerakan dan bacaan, plus jadwal sholat dan arah kiblat.", en: "7 steps of movements and recitations, plus prayer times and the Qibla." } },
  { when: { id: "Siang", en: "Afternoon" }, tint: "linear-gradient(160deg,#FFE0C2,#FFF4C2)", k: "09-hewan",
    title: { id: "Sayang hewan", en: "Kindness to animals" },
    body: { id: "Beri makan dengan Bismillah, beri minum, bersihkan, dan elus pelan-pelan.", en: "Feed with Bismillah, give water, clean up and stroke gently." } },
  { when: { id: "Sore", en: "Late afternoon" }, tint: "linear-gradient(160deg,#D5F5D0,#FFF0D6)", k: "10-kebun",
    title: { id: "Berkebun bersama Ais", en: "Gardening with Ais" },
    body: { id: "Tanam, siram, panen, lalu berbagi dengan tetangga.", en: "Plant, water, harvest, then share with the neighbours." } },
  { when: { id: "Malam", en: "Night" }, tint: "linear-gradient(160deg,#2E2A78,#5B4FC9)", k: "11-dream",
    title: { id: "Waktunya tidur", en: "Time for bed" },
    body: { id: "4 langkah malam: gosok gigi, ganti baju, baca doa, lalu tidur.", en: "4 bedtime steps: brush teeth, change clothes, read the du'a, then sleep." } },
];

const LITTLE: { ic: string; t: Bi; d: Bi }[] = [
  { ic: "👆", t: { id: "Tombol besar", en: "Big buttons" }, d: { id: "Pas untuk jari mungil.", en: "Made for small fingers." } },
  { ic: "🔊", t: { id: "Suara dulu", en: "Sound first" }, d: { id: "Yang belum bisa membaca tetap bisa main.", en: "Pre-readers can play too." } },
  { ic: "⭐", t: { id: "Bintang & stiker", en: "Stars & stickers" }, d: { id: "Pujian kecil, tanpa tekanan.", en: "Little praise, no pressure." } },
  { ic: "🌗", t: { id: "Mode gelap", en: "Dark mode" }, d: { id: "Nyaman di malam hari.", en: "Easy on the eyes at night." } },
  { ic: "✈️", t: { id: "Bisa offline", en: "Works offline" }, d: { id: "Mudik dan perjalanan aman.", en: "Perfect for trips." } },
  { ic: "🗣️", t: { id: "ID & EN", en: "ID & EN" }, d: { id: "Ganti bahasa sekali ketuk.", en: "Switch language in one tap." } },
];

const AGES: { age: string; c: string; t: Bi; g: Bi }[] = [
  { age: "2–3", c: "#FF9F1C", t: { id: "Kenalan & bermain", en: "Meet & play" }, g: { id: "Kenalan dengan Baby Mo, Cari Baby Mo, Memory Match mudah, Dreamtime", en: "Meet Baby Mo, Find Baby Mo, easy Memory Match, Dreamtime" } },
  { age: "3–5", c: "#1FA35A", t: { id: "Doa & akhlak", en: "Du'as & good manners" }, g: { id: "Doa Harian, Dua Journey, Wudhu, Kalimat Thayyibah, Sahabat Hewan, Kebun Ais", en: "Daily Du'as, Dua Journey, Wudhu, Good Words, Animal Friends, Ais's Garden" } },
  { age: "5–8", c: "#2D8CFF", t: { id: "Membaca & beribadah", en: "Reading & worship" }, g: { id: "Huruf Hijaiyah, Pulau Hijaiyah, Susun Huruf, Sholat Bareng Mo, Tasbih, Akademi Tenis", en: "Hijaiyah Letters, Hijaiyah Island, Build the Word, Pray with Mo, Tasbih, Tennis Academy" } },
];

const OFF: Bi[] = [
  { id: "Iklan", en: "Ads" },
  { id: "Pembelian dalam aplikasi", en: "In-app purchases" },
  { id: "Langganan", en: "Subscriptions" },
  { id: "Akun & login", en: "Accounts & login" },
  { id: "Pelacakan & analitik", en: "Tracking & analytics" },
  { id: "Chat & fitur sosial", en: "Chat & social features" },
];

const FAQ: { q: Bi; a: Bi }[] = [
  { q: { id: "Berapa harganya?", en: "How much does it cost?" },
    a: { id: "Baby Mo dibeli sekali di App Store; harganya tertera di halaman App Store untuk negara Anda. Setelah itu semua game terbuka — tanpa langganan, tanpa pembelian dalam aplikasi, dan tanpa iklan.", en: "Baby Mo is a one-time purchase on the App Store; the price for your country is shown on its App Store page. After that every game is open — no subscription, no in-app purchases and no ads." } },
  { q: { id: "Bisa dicoba dulu?", en: "Can we try it first?" },
    a: { id: <>Bisa. Mainkan versi web di <a href="https://play.babymo.id/">play.babymo.id</a> langsung di browser.</>, en: <>Yes. Play the web version at <a href="https://play.babymo.id/">play.babymo.id</a> right in your browser.</> } },
  { q: { id: "Data apa yang disimpan?", en: "What data is stored?" },
    a: { id: "Hanya nama panggilan (jika diisi), bintang, progres, dan pengaturan — semuanya di perangkat Anda, tidak pernah dikirim ke kami.", en: "Only the nickname (if you add one), stars, progress and settings — all on your device, never sent to us." } },
  { q: { id: "Butuh internet?", en: "Does it need the internet?" },
    a: { id: "Tidak. Semua game, suara, dan jadwal sholat bekerja offline — jadwal sholat dihitung di perangkat dari kota pilihan Anda atau lokasi (opsional).", en: "No. All games, audio and prayer times work offline — prayer times are calculated on the device from the city you pick or your location (optional)." } },
  { q: { id: "Perangkat apa saja?", en: "Which devices?" },
    a: { id: "iPhone dan iPad dengan iOS 15 atau lebih baru, plus aplikasi Apple Watch (watchOS 10 atau lebih baru).", en: "iPhone and iPad with iOS 15 or later, plus an Apple Watch app (watchOS 10 or later)." } },
  { q: { id: "Doanya dari mana?", en: "Where do the du'as come from?" },
    a: { id: "Doa dan hadits disertai sumbernya. Teks Arab ditulis lengkap dengan harakat dan dibacakan dengan suara Arab asli.", en: "Du'as and hadith come with their sources. The Arabic is fully vowelled and read aloud with real Arabic audio." } },
];

/* ───────────────────────── styles ───────────────────────── */

const CSS = `
:root{color-scheme:light dark;
  --bg:#EEF2FB;--ink:#101426;--soft:#596079;--line:rgba(16,20,38,.08);
  --glass:rgba(255,255,255,.58);--glass2:rgba(255,255,255,.78);--edge:rgba(255,255,255,.85);--hl:rgba(255,255,255,.95);
  --green:#1FA35A;--blue:#2D8CFF;--sun:#FF9F1C;--pink:#FF5C7A;--violet:#8B6CF6;
  --sh:0 18px 40px -22px rgba(30,40,90,.35);--r:30px}
@media (prefers-color-scheme:dark){:root{--bg:#080B19;--ink:#F2F4FF;--soft:#A3A9C6;--line:rgba(255,255,255,.08);
  --glass:rgba(32,37,70,.52);--glass2:rgba(40,46,86,.72);--edge:rgba(255,255,255,.14);--hl:rgba(255,255,255,.18);
  --green:#4ED28A;--blue:#5AA8FF;--sh:0 18px 40px -22px rgba(0,0,0,.8)}}
*{box-sizing:border-box}
html,body{margin:0;background:var(--bg);color:var(--ink)}
body{font-family:var(--f-body),-apple-system,BlinkMacSystemFont,"SF Pro Text","Segoe UI",Roboto,sans-serif;font-size:17px;line-height:1.55;-webkit-font-smoothing:antialiased;overflow-x:hidden}
html[data-lang="id"] [data-l="en"],html[data-lang="en"] [data-l="id"]{display:none!important}
a{color:var(--blue);text-decoration:none}
img{max-width:100%}
h1,h2,h3{font-family:var(--f-round),var(--f-body),sans-serif;margin:0;letter-spacing:-.02em}
h2{font-size:clamp(32px,5vw,52px);line-height:1.04;font-weight:800}
h3{font-size:22px;line-height:1.15;font-weight:800}
.wrap{max-width:1160px;margin:0 auto;padding:0 max(18px,env(safe-area-inset-left))}
section{padding:64px 0}
.eyebrow{font-size:14px;font-weight:800;letter-spacing:.02em;color:var(--blue);margin-bottom:8px}
.lede{font-size:19px;color:var(--soft);max-width:34em;margin:12px 0 0}
.c{text-align:center}.c .lede{margin-left:auto;margin-right:auto}

/* sky: soft colour fields behind everything (the glass refracts these) */
.sky{position:fixed;inset:0;z-index:-1;pointer-events:none;overflow:hidden;background:var(--bg)}
.sky i{position:absolute;border-radius:50%;filter:blur(70px);opacity:.75}
.sky .a{width:60vw;height:60vw;left:-18vw;top:-22vw;background:#9CCBFF}
.sky .b{width:50vw;height:50vw;right:-16vw;top:6vw;background:#CDBBFF}
.sky .c2{width:46vw;height:46vw;left:22vw;top:44vh;background:#B8F0D2}
.sky .d{width:40vw;height:40vw;right:-10vw;bottom:-14vw;background:#FFD7B5}
@media (prefers-color-scheme:dark){.sky i{opacity:.32}}

/* liquid glass */
.glass{background:var(--glass);-webkit-backdrop-filter:blur(26px) saturate(1.8);backdrop-filter:blur(26px) saturate(1.8);
  border:1px solid var(--edge);box-shadow:inset 0 1px 0 var(--hl),inset 0 -1px 0 rgba(255,255,255,.12),var(--sh);border-radius:var(--r)}

/* floating tab-bar style nav */
.nav{position:sticky;top:max(10px,env(safe-area-inset-top));z-index:30;padding:0 12px;margin-top:10px}
.nav .bar{max-width:1060px;margin:0 auto;display:flex;align-items:center;gap:6px;padding:7px 7px 7px 12px;border-radius:999px}
.brand{display:flex;align-items:center;gap:8px;color:var(--ink);font-family:var(--f-round);font-weight:800;font-size:19px}
.brand img{width:34px;height:34px;border-radius:10px}
.links{display:none;gap:2px;margin-left:auto}
.links a{color:var(--ink);font-weight:700;font-size:15px;padding:8px 12px;border-radius:999px}
.links a:hover{background:var(--glass2)}
@media(min-width:900px){.links{display:flex}}
.seg{display:flex;margin-left:auto;padding:3px;border-radius:999px;background:var(--line)}
@media(min-width:900px){.seg{margin-left:6px}}
.seg button{font:inherit;font-size:13px;font-weight:800;padding:6px 11px;border-radius:999px;border:0;background:transparent;color:var(--soft);cursor:pointer}
html[data-lang="id"] .seg [data-set-lang="id"],html[data-lang="en"] .seg [data-set-lang="en"]{background:var(--glass2);color:var(--ink);box-shadow:0 2px 8px -3px rgba(0,0,0,.25)}
.get{margin-left:6px;padding:9px 16px;border-radius:999px;background:var(--ink);color:var(--bg)!important;font-weight:800;font-size:15px;white-space:nowrap}

/* hero */
.hero{padding:44px 0 30px}
.hg{display:grid;gap:30px;align-items:center}
@media(min-width:960px){.hg{grid-template-columns:1.05fr .95fr}}
.chip{display:inline-flex;align-items:center;gap:8px;padding:6px 14px 6px 6px;border-radius:999px;font-weight:700;font-size:14px}
.chip b{background:var(--green);color:#fff;border-radius:999px;padding:3px 10px;font-size:12px}
.hero h1{font-size:clamp(46px,8.2vw,88px);line-height:.98;font-weight:800;margin:18px 0 0;letter-spacing:-.035em}
.hero h1 .g{background:linear-gradient(95deg,#1FA35A 0%,#18B6A4 40%,#2D8CFF 75%,#8B6CF6 100%);-webkit-background-clip:text;background-clip:text;color:transparent}
.cta{display:flex;flex-wrap:wrap;gap:12px;margin:26px 0 16px}
.btn{display:inline-flex;align-items:center;gap:10px;min-height:58px;padding:10px 22px;border-radius:18px;font-weight:800;font-size:17px;color:var(--ink)!important;transition:transform .2s}
.btn:hover{transform:translateY(-2px) scale(1.01)}
.btn.store{background:#000;color:#fff!important;border:0;box-shadow:0 14px 30px -14px rgba(0,0,0,.6)}
@media (prefers-color-scheme:dark){.btn.store{background:#fff;color:#000!important}}
.btn.store svg{width:28px;height:28px}
.btn.store small{display:block;font-size:11px;font-weight:600;opacity:.8;line-height:1}
.btn.store .big{display:block;font-size:20px;line-height:1.1}
.btn.soon{cursor:default}.btn.soon:hover{transform:none}
.trust{display:flex;flex-wrap:wrap;gap:8px;padding:0;margin:0;list-style:none}
.trust li{font-size:14px;font-weight:800;padding:7px 12px;border-radius:999px;background:var(--glass);border:1px solid var(--edge)}
.trust li::before{content:"✓ ";color:var(--green)}

/* hero stage: phone + widget-style floating cards + Mo */
.stage{position:relative;justify-self:center;width:min(360px,82vw);padding:10px 0 30px}
.phone{position:relative;border-radius:54px;padding:11px;background:linear-gradient(150deg,#3B3F48,#121419 60%,#2B2E36);
  box-shadow:0 40px 80px -30px rgba(20,30,80,.55),inset 0 0 0 1.5px rgba(255,255,255,.18)}
.phone .scr{border-radius:44px;overflow:hidden;aspect-ratio:540/1174;background:#DDE6F6}
.phone .scr img{width:100%;height:100%;object-fit:cover;object-position:top;display:block}
.phone .isl{position:absolute;top:22px;left:50%;transform:translateX(-50%);width:31%;height:24px;border-radius:14px;background:#000}
.stage .phone{transform:rotate(-2deg)}
.wid{position:absolute;z-index:3;padding:12px 14px;border-radius:24px;min-width:150px;animation:bob 6s ease-in-out infinite}
.wid .k{font-size:12px;font-weight:800;color:var(--soft);text-transform:uppercase;letter-spacing:.05em}
.wid .v{font-family:var(--f-round);font-weight:800;font-size:24px;line-height:1.1}
.wid .s{font-size:13px;font-weight:700;color:var(--soft)}
.w1{top:12%;left:-34%}.w2{top:46%;right:-30%;animation-delay:-2s}.w3{bottom:10%;left:-30%;animation-delay:-4s}
.w1 .v{color:var(--green)}.w2 .v{color:var(--sun)}.w3 .ar{font-family:"Noto Naskh Arabic","Geeza Pro",serif;font-size:22px;line-height:1.5;direction:rtl}
@media(max-width:960px){.w1{left:-12%}.w2{right:-10%}.w3{left:-10%}}
@media(max-width:560px){.wid{min-width:0;padding:10px 12px;border-radius:20px}.wid .v{font-size:20px}.w1{left:-4%;top:-2%}.w2{right:-4%;top:40%}.w3{left:-4%;bottom:4%}}
.stage .mo{position:absolute;z-index:4;right:-22%;bottom:-2%;width:46%;filter:drop-shadow(0 20px 20px rgba(20,30,80,.25));animation:bob 4.5s ease-in-out infinite}
@media(max-width:560px){.stage .mo{right:-8%;width:40%}}
@keyframes bob{50%{translate:0 -10px}}

/* stats: widget row */
.stats{display:grid;grid-template-columns:repeat(2,1fr);gap:12px;margin-top:36px}
@media(min-width:780px){.stats{grid-template-columns:repeat(5,1fr)}}
.stat{padding:18px;border-radius:26px}
.stat b{display:block;font-family:var(--f-round);font-size:46px;line-height:1;font-weight:800}
.stat span{display:block;color:var(--soft);font-size:15px;font-weight:700;margin-top:6px;line-height:1.3}
.stats .stat:last-child{grid-column:1/-1}
@media(min-width:780px){.stats .stat:last-child{grid-column:auto}}

/* today-style swipe cards */
.rail{display:flex;gap:16px;overflow-x:auto;scroll-snap-type:x mandatory;padding:24px max(18px,calc((100vw - 1160px)/2 + 18px)) 30px;scrollbar-width:none;-webkit-overflow-scrolling:touch}
.rail::-webkit-scrollbar{display:none}
.today{flex:0 0 min(300px,78vw);scroll-snap-align:center;border-radius:34px;overflow:hidden;position:relative;display:flex;flex-direction:column;
  box-shadow:var(--sh);border:1px solid var(--edge);min-height:520px}
.today .tx{padding:20px 20px 0;color:#151A33}
.today.night .tx{color:#F4F1FF}
.today .when{font-size:13px;font-weight:800;text-transform:uppercase;letter-spacing:.06em;opacity:.7}
.today h3{font-size:26px;margin:6px 0 6px}
.today p{margin:0;font-size:15px;font-weight:600;opacity:.8}
.today .ph{margin-top:auto;padding:16px 34px 0}
.today .ph .phone{border-radius:40px 40px 0 0;padding:9px 9px 0}
.today .ph .phone .scr{border-radius:32px 32px 0 0;aspect-ratio:540/820}
.today .ph .phone .isl{top:18px;height:18px}
.hint{display:flex;justify-content:center;gap:8px;color:var(--soft);font-size:14px;font-weight:700}

/* bento */
.bento{display:grid;gap:16px;margin-top:34px}
@media(min-width:860px){.bento{grid-template-columns:repeat(6,1fr)}}
.tile{position:relative;overflow:hidden;padding:24px;border-radius:32px;min-height:260px}
.tile h3{font-size:26px;margin-top:6px}
.tile p{color:var(--soft);font-size:16px;margin:8px 0 0;max-width:30em}
.tile .tag{font-size:13px;font-weight:800;letter-spacing:.04em;text-transform:uppercase}
@media(min-width:860px){.t-dua{grid-column:span 4}.t-huruf{grid-column:span 2}.t-pray{grid-column:span 2}.t-kind{grid-column:span 4}.t-play{grid-column:span 3}.t-rama{grid-column:span 3}}
.tile .mini{position:absolute;right:20px;bottom:-60px;width:180px;transform:rotate(6deg)}
.tile .mini .phone{border-radius:34px;padding:7px}.tile .mini .phone .scr{border-radius:28px}.tile .mini .phone .isl{top:13px;height:14px}
.t-dua{padding-right:220px}
.t-kind{padding-right:220px}
@media(max-width:560px){.t-dua,.t-kind{padding-right:24px;padding-bottom:250px}.tile .mini{right:50%;transform:translateX(50%) rotate(4deg);width:160px;bottom:-130px}.t-rama{padding-right:24px;padding-top:96px}}
.ar-line{font-family:"Noto Naskh Arabic","Geeza Pro",serif;font-size:30px;direction:rtl;margin:14px 0 4px;line-height:1.7}
.ar-line span{transition:color .3s}.ar-line .on{color:#E8A400}
.pills{display:flex;flex-wrap:wrap;gap:8px;margin-top:14px}
.pills span{font-size:13px;font-weight:800;padding:6px 11px;border-radius:999px;background:var(--glass2);border:1px solid var(--edge)}
.big-n{font-family:var(--f-round);font-weight:800;font-size:76px;line-height:1;margin-top:10px;background:linear-gradient(135deg,#2D8CFF,#8B6CF6);-webkit-background-clip:text;background-clip:text;color:transparent}
.letters{display:grid;grid-template-columns:repeat(7,1fr);gap:6px;margin-top:14px;direction:rtl}
.letters i{font-style:normal;font-family:"Noto Naskh Arabic","Geeza Pro",serif;font-size:22px;display:grid;place-items:center;aspect-ratio:1;border-radius:12px;background:var(--glass2);border:1px solid var(--edge);color:var(--blue)}
.tile .mo-c{position:absolute;right:-10px;bottom:-14px;width:150px}
.t-pray{padding-bottom:150px}
.t-rama{padding-right:120px;background:linear-gradient(150deg,rgba(42,36,112,.92),rgba(91,79,201,.88));color:#F4F1FF;border-color:rgba(255,255,255,.18)}
.t-rama p{color:#D7D2FF}.t-rama .tag{color:#FFD86B}
.moon{position:absolute;right:26px;top:22px;width:70px;height:70px;border-radius:50%;box-shadow:-16px 8px 0 0 #FFD86B;transform:rotate(-20deg)}

/* watch */
.watchband{border-radius:40px;padding:44px 24px;background:linear-gradient(150deg,#0E1230,#1A2160 55%,#24307A);color:#EEF1FF;overflow:hidden;position:relative}
.watchband .eyebrow{color:#7FD3FF}.watchband .lede{color:#C5CBEA}
.watches{display:flex;gap:18px;overflow-x:auto;scroll-snap-type:x mandatory;margin-top:30px;padding:6px 4px 16px;scrollbar-width:none}
.watches::-webkit-scrollbar{display:none}
.wt{flex:0 0 auto;scroll-snap-align:center;text-align:center}
.wcase{width:180px;height:216px;border-radius:50px;padding:9px;background:linear-gradient(150deg,#4A4B55,#16171C 55%,#2B2C33);box-shadow:0 20px 40px -18px rgba(0,0,0,.7),inset 0 1px 1px rgba(255,255,255,.25);position:relative}
.wcase::after{content:"";position:absolute;right:-6px;top:52px;width:8px;height:32px;border-radius:4px;background:linear-gradient(90deg,#6a6b75,#2a2b31)}
.wcase img{width:100%;height:100%;object-fit:cover;border-radius:41px;display:block;background:#000}
.wt span{display:block;margin-top:12px;font-weight:800;font-size:15px}

/* little hands + ages */
.little{display:grid;gap:12px;grid-template-columns:repeat(auto-fill,minmax(160px,1fr));margin-top:30px}
.lt{padding:20px;border-radius:26px}
.lt .ic{font-size:30px;line-height:1}
.lt h3{font-size:18px;margin:10px 0 2px}
.lt p{margin:0;color:var(--soft);font-size:14px;font-weight:600}
.ages{display:grid;gap:14px;margin-top:30px}
@media(min-width:820px){.ages{grid-template-columns:repeat(3,1fr)}}
.age{padding:24px;border-radius:30px}
.age .n{font-family:var(--f-round);font-weight:800;font-size:52px;line-height:1}
.age .n small{font-size:18px;color:var(--soft)}
.age h3{margin:8px 0 4px}
.age p{margin:0;color:var(--soft);font-size:15px;font-weight:600}

/* settings-style privacy list */
.split{display:grid;gap:22px;align-items:center}
@media(min-width:900px){.split{grid-template-columns:1fr 1fr}}
.list{border-radius:28px;overflow:hidden;padding:4px 0}
.row{display:flex;align-items:center;gap:12px;padding:14px 18px;font-weight:700}
.row+.row{border-top:1px solid var(--line)}
.row .ico{width:30px;height:30px;border-radius:9px;display:grid;place-items:center;color:#fff;font-size:15px;flex:0 0 auto}
.row .sw{margin-left:auto;width:51px;height:31px;border-radius:999px;background:rgba(120,120,128,.24);position:relative;flex:0 0 auto}
.row .sw::after{content:"";position:absolute;left:2px;top:2px;width:27px;height:27px;border-radius:50%;background:#fff;box-shadow:0 3px 8px rgba(0,0,0,.18)}
.row .sw.on{background:#34C759}.row .sw.on::after{left:22px}
.listhead{font-size:13px;font-weight:700;color:var(--soft);text-transform:uppercase;letter-spacing:.04em;padding:0 18px 8px}

/* price card */
.price{border-radius:40px;padding:36px 26px;display:grid;gap:22px;align-items:center;position:relative;overflow:hidden}
@media(min-width:900px){.price{grid-template-columns:1.1fr .9fr;padding:48px}}
.price h2{font-size:clamp(34px,5vw,56px)}
.inc{list-style:none;padding:0;margin:18px 0 0;display:grid;gap:10px}
.inc li{display:flex;gap:10px;align-items:flex-start;font-weight:700}
.inc li::before{content:"";flex:0 0 24px;height:24px;border-radius:50%;background:#34C759 url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cpath d='M6.5 12.5l3.5 3.5 7.5-8' fill='none' stroke='%23fff' stroke-width='3' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E") center/16px no-repeat;margin-top:1px}
.price .mo-p{width:min(300px,70%);justify-self:center;filter:drop-shadow(0 24px 24px rgba(20,30,80,.25));animation:bob 4s ease-in-out infinite}

/* faq: inset grouped disclosure list */
.faq{border-radius:28px;overflow:hidden;margin-top:28px;max-width:820px;margin-left:auto;margin-right:auto}
.faq details+details{border-top:1px solid var(--line)}
.faq summary{list-style:none;cursor:pointer;padding:18px 54px 18px 20px;font-weight:800;font-size:17px;position:relative}
.faq summary::-webkit-details-marker{display:none}
.faq summary::after{content:"";position:absolute;right:22px;top:50%;width:9px;height:9px;border-right:2.5px solid var(--soft);border-bottom:2.5px solid var(--soft);transform:translateY(-70%) rotate(45deg);transition:transform .25s}
.faq details[open] summary::after{transform:translateY(-30%) rotate(225deg)}
.faq details p{margin:0;padding:0 20px 18px;color:var(--soft);font-weight:600}

/* final */
.final{border-radius:44px;padding:48px 24px;text-align:center;position:relative;overflow:hidden}
.final h2{font-size:clamp(34px,5.4vw,60px)}
.final .cta{justify-content:center}
.final .mo-f{width:160px;margin:-6px auto 6px;display:block;animation:bob 3.6s ease-in-out infinite}
footer{padding:20px 0 60px;color:var(--soft);font-size:14px;text-align:center}
footer a{margin:0 8px;font-weight:700}
@media (prefers-reduced-motion:reduce){*{animation:none!important;transition:none!important}}
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

const TryButton = () => (
  <a className="btn glass" href="https://play.babymo.id/">🎮 <B t={{ id: "Coba di browser", en: "Try it in your browser" }} /></a>
);

/* ───────────────────────── page ───────────────────────── */

export default function AppMarketingPage() {
  return (
    <html lang="id" data-lang="id" className={STORE_FONT_VARS} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: LANG_SCRIPT }} />
      </head>
      <body>
        <style dangerouslySetInnerHTML={{ __html: CSS }} />
        <div className="sky" aria-hidden="true"><i className="a" /><i className="b" /><i className="c2" /><i className="d" /></div>

        <nav className="nav" aria-label="Baby Mo">
          <div className="bar glass">
            <a className="brand" href={asset("/")}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={asset("/app-store/v3/icon-128.png")} alt="" width={34} height={34} />
              Baby Mo
            </a>
            <div className="links">
              <a href="#hari"><B t={{ id: "Sehari bersama Mo", en: "A day with Mo" }} /></a>
              <a href="#fitur"><B t={{ id: "Fitur", en: "Features" }} /></a>
              <a href="#watch">Apple Watch</a>
              <a href="#orangtua"><B t={{ id: "Orang tua", en: "Parents" }} /></a>
              <a href="#faq">FAQ</a>
            </div>
            <div className="seg" role="group" aria-label="Bahasa / Language">
              <button type="button" data-set-lang="id" lang="id">ID</button>
              <button type="button" data-set-lang="en" lang="en">EN</button>
            </div>
            <a className="get" href="#beli"><B t={{ id: "Dapatkan", en: "Get" }} /></a>
          </div>
        </nav>

        <main>
          {/* ── hero ── */}
          <header className="hero">
            <div className="wrap hg">
              <div>
                <span className="chip glass"><b><B t={{ id: "Baru", en: "New" }} /></b><B t={{ id: "iPhone · iPad · Apple Watch", en: "iPhone · iPad · Apple Watch" }} /></span>
                <h1>
                  <span data-l="id">Belajar Islam <span className="g">sambil bermain.</span></span>
                  <span data-l="en">Learn Islam <span className="g">through play.</span></span>
                </h1>
                <p className="lede">
                  <B t={{
                    id: "Doa harian dengan suara Arab asli, wudhu dan sholat langkah demi langkah, huruf hijaiyah, sayang hewan, Ramadan, dan rutinitas tidur — 19 game & aktivitas bersama Baby Mo untuk anak 2–8 tahun.",
                    en: "Daily du'as with real Arabic audio, wudhu and prayer step by step, the hijaiyah letters, kindness to animals, Ramadan and a bedtime routine — 19 games & activities with Baby Mo for children aged 2–8.",
                  }} />
                </p>
                <div className="cta">
                  <StoreButton />
                  <TryButton />
                </div>
                <ul className="trust">
                  <li><B t={{ id: "Sekali beli", en: "One purchase" }} /></li>
                  <li><B t={{ id: "Tanpa iklan", en: "No ads" }} /></li>
                  <li><B t={{ id: "Tanpa akun", en: "No account" }} /></li>
                  <li><B t={{ id: "Bisa offline", en: "Works offline" }} /></li>
                </ul>
              </div>

              <div className="stage" aria-hidden="true">
                <Phone k="01-home" eager />
                <div className="wid glass w1">
                  <div className="k"><B t={{ id: "Sholat berikutnya", en: "Next prayer" }} /></div>
                  <div className="v"><B t={{ id: "Ashar 14.58", en: "Asr 2:58" }} /></div>
                  <div className="s"><B t={{ id: "Yuk wudhu bareng Mo", en: "Wudhu with Mo first" }} /></div>
                </div>
                <div className="wid glass w2">
                  <div className="k"><B t={{ id: "Hari ini", en: "Today" }} /></div>
                  <div className="v">⭐ +3</div>
                  <div className="s"><B t={{ id: "Masya Allah!", en: "Masha Allah!" }} /></div>
                </div>
                <div className="wid glass w3">
                  <div className="k"><B t={{ id: "Doa hari ini", en: "Du'a of the day" }} /></div>
                  <div className="ar" lang="ar">بِسْمِ اللَّهِ</div>
                </div>
                <Mo f="pose-01" cls="mo" />
              </div>
            </div>

            <div className="wrap">
              <div className="stats">
                {STATS.map((s) => (
                  <div className="stat glass" key={s.n + String(s.t.en)}>
                    <b style={{ color: s.c }}>{s.n}</b>
                    <span><B t={s.t} /></span>
                  </div>
                ))}
              </div>
            </div>
          </header>

          {/* ── a day with Baby Mo (swipe) ── */}
          <section id="hari" style={{ paddingBottom: 30 }}>
            <div className="wrap">
              <div className="eyebrow"><B t={{ id: "Sehari bersama Baby Mo", en: "A day with Baby Mo" }} /></div>
              <h2><B t={{ id: "Dari doa pagi sampai doa tidur.", en: "From the morning du'a to bedtime." }} /></h2>
              <p className="lede"><B t={{ id: "Sesi singkat yang pas dengan rutinitas si kecil — lembut, seru, dan penuh makna.", en: "Short moments that fit your child's day — gentle, fun and meaningful." }} /></p>
            </div>
            <div className="rail" role="list">
              {DAY.map((d) => (
                <article role="listitem" className={`today${d.k === "11-dream" ? " night" : ""}`} key={d.k} style={{ background: d.tint }}>
                  <div className="tx">
                    <div className="when"><B t={d.when} /></div>
                    <h3><B t={d.title} /></h3>
                    <p><B t={d.body} /></p>
                  </div>
                  <div className="ph"><Phone k={d.k} /></div>
                </article>
              ))}
            </div>
            <div className="hint"><B t={{ id: "← geser →", en: "← swipe →" }} /></div>
          </section>

          {/* ── bento features ── */}
          <section id="fitur">
            <div className="wrap">
              <div className="c">
                <div className="eyebrow"><B t={{ id: "Di dalam aplikasi", en: "Inside the app" }} /></div>
                <h2><B t={{ id: "Semua yang dibutuhkan si kecil.", en: "Everything your little one needs." }} /></h2>
              </div>
              <div className="bento">
                <div className="tile glass t-dua">
                  <div className="tag" style={{ color: "var(--green)" }}><B t={{ id: "Doa Harian", en: "Daily Du'as" }} /></div>
                  <h3><B t={{ id: "Dengar, lihat, ikuti.", en: "Hear it. See it. Say it." }} /></h3>
                  <div className="ar-line" lang="ar"><span>سُبْحَانَ</span> <span className="on">الَّذِي</span> <span>سَخَّرَ</span> <span>لَنَا</span> <span>هَذَا</span></div>
                  <p><B t={{ id: "14 doa harian dan 11 doa Ramadan dengan suara Arab asli. Kata menyala satu per satu, bisa diperlambat dan diulang 2×, lengkap dengan latin dan arti.", en: "14 daily du'as and 11 Ramadan du'as with real Arabic audio. Each word lights up as it's read; slow it down or repeat it twice, with transliteration and meaning." }} /></p>
                  <div className="pills"><span>🔊 <B t={{ id: "Suara Arab asli", en: "Real Arabic audio" }} /></span><span>🐢 <B t={{ id: "Pelan 0,5×", en: "Slow 0.5×" }} /></span><span>🔁 2×</span></div>
                  <div className="mini"><Phone k="03-doa" /></div>
                </div>
                <div className="tile glass t-huruf">
                  <div className="tag" style={{ color: "var(--blue)" }}><B t={{ id: "Huruf Hijaiyah", en: "Hijaiyah letters" }} /></div>
                  <div className="big-n">28</div>
                  <h3><B t={{ id: "Dari alif sampai ya.", en: "From alif to ya." }} /></h3>
                  <p><B t={{ id: "Dengar, tulis, lalu tangkap hurufnya. Jelajahi Pulau Hijaiyah 3D dan susun kata Arab pertama.", en: "Listen, trace, then catch the letters. Explore the 3D Hijaiyah Island and build first Arabic words." }} /></p>
                  <div className="letters" lang="ar">{"ا ب ت ث ج ح خ".split(" ").map((l) => <i key={l}>{l}</i>)}</div>
                </div>
                <div className="tile glass t-pray">
                  <div className="tag" style={{ color: "#18B6A4" }}><B t={{ id: "Wudhu & Sholat", en: "Wudhu & prayer" }} /></div>
                  <h3><B t={{ id: "Ibadah, langkah demi langkah.", en: "Worship, one step at a time." }} /></h3>
                  <p><B t={{ id: "10 langkah wudhu, 7 langkah sholat, jadwal sholat & kiblat, tasbih sebelum tidur, dan dzikir sesudah sholat.", en: "10 wudhu steps, 7 prayer steps, prayer times & Qibla, bedtime tasbih and dhikr after prayer." }} /></p>
                  <Mo f="pose-05" cls="mo-c" />
                </div>
                <div className="tile glass t-kind">
                  <div className="tag" style={{ color: "var(--sun)" }}><B t={{ id: "Akhlak", en: "Good manners" }} /></div>
                  <h3><B t={{ id: "Sayang hewan, rajin berbagi.", en: "Kind to animals, happy to share." }} /></h3>
                  <p><B t={{ id: "Rawat sahabat hewan Mo dengan Bismillah, berkebun bersama Ais lalu bagikan panennya, dan belajar 10 Kalimat Thayyibah lewat puzzle.", en: "Care for Mo's animal friends with Bismillah, garden with Ais and share the harvest, and learn 10 Good Words through puzzles." }} /></p>
                  <div className="pills"><span>🐱 <B t={{ id: "Sahabat Hewan", en: "Animal Friends" }} /></span><span>🌱 <B t={{ id: "Kebun Ais", en: "Ais's Garden" }} /></span><span>🧩 <B t={{ id: "Kalimat Thayyibah", en: "Good Words" }} /></span></div>
                  <div className="mini"><Phone k="09-hewan" /></div>
                </div>
                <div className="tile glass t-play">
                  <div className="tag" style={{ color: "var(--pink)" }}><B t={{ id: "Main & bergerak", en: "Play & move" }} /></div>
                  <h3><B t={{ id: "Seru, tapi tetap bermakna.", en: "Fun with a purpose." }} /></h3>
                  <p><B t={{ id: "Akademi Tenis Kak Adam, Forehand Beat, Memory Match 7 level, Cari Baby Mo, dan album 40 stiker Baby Mo.", en: "Kak Adam's Tennis Academy, Forehand Beat, 7-level Memory Match, Find Baby Mo and a 40-sticker Baby Mo album." }} /></p>
                  <div className="pills"><span>🎾 <B t={{ id: "Tenis", en: "Tennis" }} /></span><span>🃏 Memory</span><span>🔎 <B t={{ id: "Cari Mo", en: "Find Mo" }} /></span><span>📒 <B t={{ id: "Stiker", en: "Stickers" }} /></span></div>
                </div>
                <div className="tile glass t-rama">
                  <i className="moon" aria-hidden="true" />
                  <div className="tag"><B t={{ id: "Seri Ramadan", en: "Ramadan series" }} /></div>
                  <h3><B t={{ id: "Siap menyambut Ramadan.", en: "Ready for Ramadan." }} /></h3>
                  <p><B t={{ id: "Doa melihat hilal, niat puasa, berbuka, Lailatul Qadr, sampai takbir Idul Fitri — 11 doa Ramadan dengan suara.", en: "From seeing the new moon, the intention to fast and breaking the fast to Laylatul Qadr and the Eid takbir — 11 Ramadan du'as with audio." }} /></p>
                </div>
              </div>
            </div>
          </section>

          {/* ── apple watch ── */}
          <section id="watch" style={{ paddingTop: 20 }}>
            <div className="wrap">
              <div className="watchband">
                <div className="eyebrow">Apple Watch</div>
                <h2 style={{ color: "#fff" }}><B t={{ id: "Baby Mo di pergelangan tangan.", en: "Baby Mo on the wrist." }} /></h2>
                <p className="lede"><B t={{ id: "Doa dengan suara Mo, tasbih dengan getaran lembut di setiap hitungan, jadwal sholat, hitung mundur berbuka saat Ramadan, dan Mimi si kucing yang menunggu dirawat. Semua offline.", en: "Du'as in Mo's voice, a tasbih with a gentle tap on every count, prayer times, an iftar countdown in Ramadan, and Mimi the cat waiting to be cared for. All offline." }} /></p>
                <div className="watches">
                  {([
                    ["home", { id: "Beranda", en: "Home" }],
                    ["dua", { id: "Doa dengan suara Mo", en: "Du'as in Mo's voice" }],
                    ["tasbih", { id: "Tasbih", en: "Tasbih" }],
                    ["prayer", { id: "Jadwal sholat", en: "Prayer times" }],
                    ["ramadan", { id: "Ramadan", en: "Ramadan" }],
                    ["pet", { id: "Mimi si kucing", en: "Mimi the cat" }],
                  ] as [string, Bi][]).map(([k, t]) => (
                    <div className="wt" key={k}>
                      <div className="wcase">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img data-l="id" src={asset(`${V}watch-id-${k}.webp`)} alt="" width={416} height={496} loading="lazy" />
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img data-l="en" src={asset(`${V}watch-en-${k}.webp`)} alt="" width={416} height={496} loading="lazy" />
                      </div>
                      <span><B t={t} /></span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* ── little hands + ages ── */}
          <section>
            <div className="wrap">
              <div className="c">
                <div className="eyebrow"><B t={{ id: "Ramah anak", en: "Child-friendly" }} /></div>
                <h2><B t={{ id: "Dirancang untuk tangan mungil.", en: "Designed for little hands." }} /></h2>
              </div>
              <div className="little">
                {LITTLE.map((l) => (
                  <div className="lt glass" key={String(l.t.en)}>
                    <div className="ic" aria-hidden="true">{l.ic}</div>
                    <h3><B t={l.t} /></h3>
                    <p><B t={l.d} /></p>
                  </div>
                ))}
              </div>
              <div className="ages">
                {AGES.map((a) => (
                  <div className="age glass" key={a.age}>
                    <div className="n" style={{ color: a.c }}>{a.age} <small><B t={{ id: "tahun", en: "years" }} /></small></div>
                    <h3><B t={a.t} /></h3>
                    <p><B t={a.g} /></p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* ── parents: settings-style switches ── */}
          <section id="orangtua" style={{ paddingTop: 20 }}>
            <div className="wrap split">
              <div>
                <div className="eyebrow"><B t={{ id: "Untuk Ayah & Bunda", en: "For parents" }} /></div>
                <h2><B t={{ id: "Tenang, semuanya sudah dimatikan.", en: "Relax — it's all switched off." }} /></h2>
                <p className="lede"><B t={{ id: "Nama, bintang, dan progres si kecil tersimpan hanya di perangkat Anda. Tautan keluar dan berbagi dilindungi gerbang orang tua.", en: "Your child's name, stars and progress stay only on your device. External links and sharing sit behind a parental gate." }} /></p>
                <p style={{ marginTop: 16 }}><a href={asset("/privacy/")}><B t={{ id: "Baca Kebijakan Privasi →", en: "Read the Privacy Policy →" }} /></a></p>
              </div>
              <div>
                <div className="listhead"><B t={{ id: "Di Baby Mo", en: "In Baby Mo" }} /></div>
                <div className="list glass">
                  {OFF.map((o, i) => (
                    <div className="row" key={String(o.en)}>
                      <span className="ico" style={{ background: ["#FF3B30", "#FF9500", "#AF52DE", "#007AFF", "#5856D6", "#34C759"][i] }}>✕</span>
                      <B t={o} /><span className="sw" aria-label="off" />
                    </div>
                  ))}
                  <div className="row">
                    <span className="ico" style={{ background: "#34C759" }}>✓</span>
                    <B t={{ id: "Gerbang orang tua", en: "Parental gate" }} /><span className="sw on" aria-label="on" />
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* ── price ── */}
          <section id="beli" style={{ paddingTop: 20 }}>
            <div className="wrap">
              <div className="price glass">
                <div>
                  <div className="eyebrow"><B t={{ id: "Harga", en: "Pricing" }} /></div>
                  <h2><B t={{ id: "Sekali beli. Semuanya terbuka.", en: "One purchase. Everything unlocked." }} /></h2>
                  <ul className="inc">
                    <li><B t={{ id: "Semua 19 game & aktivitas, untuk iPhone dan iPad", en: "All 19 games & activities, on iPhone and iPad" }} /></li>
                    <li><B t={{ id: "Aplikasi Apple Watch sudah termasuk", en: "The Apple Watch app is included" }} /></li>
                    <li><B t={{ id: "Tanpa langganan, tanpa pembelian dalam aplikasi", en: "No subscription, no in-app purchases" }} /></li>
                    <li><B t={{ id: "Tanpa iklan, tanpa akun, bisa offline", en: "No ads, no account, works offline" }} /></li>
                  </ul>
                  <div className="cta"><StoreButton /><TryButton /></div>
                  <p style={{ margin: 0, color: "var(--soft)", fontSize: 14, fontWeight: 600 }}>
                    <B t={{ id: "Harga untuk negara Anda tertera di halaman App Store.", en: "The price for your country is shown on the App Store page." }} />
                  </p>
                </div>
                <Mo f="yeyy" cls="mo-p" />
              </div>
            </div>
          </section>

          {/* ── faq ── */}
          <section id="faq" style={{ paddingTop: 20 }}>
            <div className="wrap">
              <div className="c">
                <div className="eyebrow"><B t={{ id: "Pertanyaan", en: "Questions" }} /></div>
                <h2><B t={{ id: "Yang sering ditanyakan.", en: "Often asked." }} /></h2>
              </div>
              <div className="faq glass">
                {FAQ.map((f) => (
                  <details key={String(f.q.en)}>
                    <summary><B t={f.q} /></summary>
                    <p><B t={f.a} /></p>
                  </details>
                ))}
              </div>
              <p className="c" style={{ marginTop: 16 }}>
                <a href={asset("/support/")}><B t={{ id: "Semua pertanyaan di halaman Bantuan →", en: "All questions on the Support page →" }} /></a>
              </p>
            </div>
          </section>

          {/* ── final ── */}
          <section style={{ paddingTop: 10 }}>
            <div className="wrap">
              <div className="final glass">
                <Mo f="pose-29" cls="mo-f" />
                <h2><B t={{ id: "Yuk, mulai petualangan bersama Baby Mo!", en: "Start the adventure with Baby Mo!" }} /></h2>
                <p className="lede">
                  <B t={{
                    id: <>Dan di <a href={asset("/id/cerita/")}>babymo.id/cerita</a> ada lebih dari 150 buku cerita bergambar — Ramadan, hari besar Islam, dan petualangan si kembar Mo &amp; Ais.</>,
                    en: <>And at <a href={asset("/en/cerita/")}>babymo.id/cerita</a> there are more than 150 picture books — Ramadan, Islamic celebrations and the adventures of the twins Mo &amp; Ais.</>,
                  }} />
                </p>
                <div className="cta"><StoreButton /><TryButton /></div>
                <p style={{ fontSize: 14, margin: 0, color: "var(--soft)", fontWeight: 600 }}>
                  <B t={{ id: "iPhone & iPad dengan iOS 15+ · Apple Watch dengan watchOS 10+", en: "iPhone & iPad with iOS 15+ · Apple Watch with watchOS 10+" }} />
                </p>
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
