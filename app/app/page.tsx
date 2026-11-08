import type { Metadata } from "next";
import { asset } from "@/lib/i18n/config";
import { APP_STORE_URL, LANG_SCRIPT, STORE_CSS, SUPPORT_EMAIL } from "@/lib/content/store-pages";

/**
 * babymo.id/app — the marketing page for the Baby Mo iPhone & iPad app
 * (the "Marketing URL" in App Store Connect). Keep every claim true to the
 * app in the babymo-app repo and to the privacy policy.
 */
export const metadata: Metadata = {
  title: "Baby Mo — Aplikasi Belajar Islam untuk Anak · Islamic learning app for kids",
  description:
    "Baby Mo for iPhone and iPad: Islamic games, daily du'as with Arabic audio, a step-by-step prayer guide, hijaiyah letters and prayer times for children aged 2–8. Free, no ads, no account, works offline.",
  alternates: { canonical: "https://babymo.id/app/" },
  robots: { index: true, follow: true },
  openGraph: {
    title: "Baby Mo — Belajar Islam sambil bermain",
    description: "Game islami, doa harian, panduan sholat & huruf hijaiyah untuk anak. Gratis, tanpa iklan.",
    url: "https://babymo.id/app/",
    images: [{ url: "https://babymo.id/app-store/app-hub-v1.webp" }],
  },
};

const SHOTS = [
  { src: "/app-store/app-hub-v1.webp", id: "Beranda", en: "Home" },
  { src: "/app-store/app-doa-v1.webp", id: "Doa Harian", en: "Daily du'as" },
  { src: "/app-store/app-sholat-v1.webp", id: "Sholat Bareng Mo", en: "Pray with Mo" },
  { src: "/app-store/app-hijaiyah-v1.webp", id: "Huruf Hijaiyah", en: "Hijaiyah letters" },
];

const FEATURES = [
  { ic: "🎮", id: ["11 game islami", "Puzzle, memory match, cari Baby Mo, susun kata Arab, game ritme, dan Pulau Hijaiyah — untuk usia 2–8 tahun."], en: ["11 Islamic games", "Puzzles, memory match, look-and-find, Arabic word building, a rhythm game and Hijaiyah Island — for ages 2–8."] },
  { ic: "🤲", id: ["6 doa harian + audio Arab", "Dari bangun tidur sampai tidur lagi, dengan bacaan Arab, latin, dan arti."], en: ["6 daily du'as with Arabic audio", "From waking up to bedtime, with Arabic, transliteration and meaning."] },
  { ic: "🕌", id: ["Sholat Bareng Mo", "Panduan gerakan dan bacaan sholat langkah demi langkah, plus belajar wudhu."], en: ["Pray with Mo", "Step-by-step guide to the prayer movements and recitations, plus learning wudhu."] },
  { ic: "ا", id: ["28 huruf hijaiyah", "Kenali huruf Arab dengan suara, kuis, dan bintang hadiah."], en: ["28 hijaiyah letters", "Meet the Arabic letters with sound, quizzes and reward stars."] },
  { ic: "🧭", id: ["Jadwal sholat & kiblat", "Waktu sholat hari ini dan arah kiblat. Lokasi opsional — bisa pilih kota sendiri."], en: ["Prayer times & Qibla", "Today's prayer times and the Qibla direction. Location is optional — you can pick a city instead."] },
  { ic: "🌙", id: ["Dreamtime", "Rutinitas tenang sebelum tidur dengan doa tidur bersama Baby Mo."], en: ["Dreamtime", "A calm bedtime routine with the sleep du'a, together with Baby Mo."] },
  { ic: "🗣️", id: ["Bahasa Indonesia & Inggris", "Ganti bahasa kapan saja dengan satu ketukan."], en: ["Indonesian & English", "Switch language any time with one tap."] },
  { ic: "⭐", id: ["Nama si kecil & bintang", "Ketik nama panggilan anak supaya Baby Mo menyapanya. Kumpulkan bintang dari setiap game."], en: ["Your child's name & stars", "Type your child's nickname so Baby Mo greets them. Collect stars from every game."] },
];

const PROMISES = {
  id: [
    "Gratis — tanpa iklan dan tanpa pembelian dalam aplikasi",
    "Tanpa akun, tanpa daftar, tanpa login",
    "Tidak mengumpulkan data pribadi anak — nama dan progres hanya tersimpan di perangkat",
    "Tidak ada chat, tidak ada fitur sosial",
    "Bisa dimainkan tanpa internet setelah diunduh",
    "Doa dan hadits disertai sumbernya",
  ],
  en: [
    "Free — no ads and no in-app purchases",
    "No account, no sign-up, no login",
    "No personal data collected from children — names and progress stay on the device",
    "No chat, no social features",
    "Works offline once downloaded",
    "Du'as and hadith come with their sources",
  ],
};

export default function AppMarketingPage() {
  return (
    <html lang="id" data-lang="id" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: LANG_SCRIPT }} />
      </head>
      <body>
        <style dangerouslySetInnerHTML={{ __html: STORE_CSS }} />
        <main className="sp">
          <header className="top">
            <a className="brand" href={asset("/")}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={asset("/baby-mo-poses/baby-mo-ok.png")} alt="" width={40} height={40} />
              Baby Mo
            </a>
            <div className="lang" role="group" aria-label="Bahasa / Language">
              <button type="button" data-set-lang="id" lang="id">ID</button>
              <button type="button" data-set-lang="en" lang="en">EN</button>
            </div>
          </header>

          <section className="card hero">
            <div>
              <p className="soft" style={{ fontWeight: 800, letterSpacing: ".08em", textTransform: "uppercase", fontSize: 13, margin: 0 }}>
                <span data-l="id">Aplikasi untuk iPhone &amp; iPad</span>
                <span data-l="en">App for iPhone &amp; iPad</span>
              </p>
              <h1>
                <span data-l="id">Belajar Islam sambil bermain bersama Baby Mo</span>
                <span data-l="en">Learn about Islam through play with Baby Mo</span>
              </h1>
              <p className="lead">
                <span data-l="id">Game islami, doa harian dengan audio Arab, panduan sholat, dan huruf hijaiyah untuk anak usia 2–8 tahun — dimainkan bersama Ayah dan Bunda.</span>
                <span data-l="en">Islamic games, daily du&apos;as with Arabic audio, a prayer guide and the hijaiyah letters for children aged 2–8 — to enjoy together with their parents.</span>
              </p>
              <div className="cta">
                {APP_STORE_URL ? (
                  <a className="btn primary" href={APP_STORE_URL}>
                     <span data-l="id">Unduh di App Store</span><span data-l="en">Download on the App Store</span>
                  </a>
                ) : (
                  <span className="btn primary soon" aria-disabled="true">
                     <span data-l="id">Segera di App Store</span><span data-l="en">Coming soon to the App Store</span>
                  </span>
                )}
                <a className="btn" href="https://play.babymo.id/">
                  🎮 <span data-l="id">Main di browser</span><span data-l="en">Play in your browser</span>
                </a>
              </div>
              <ul className="chips">
                <li data-l="id">✓ Gratis</li><li data-l="en">✓ Free</li>
                <li data-l="id">✓ Tanpa iklan</li><li data-l="en">✓ No ads</li>
                <li data-l="id">✓ Tanpa akun</li><li data-l="en">✓ No account</li>
                <li data-l="id">✓ Bisa offline</li><li data-l="en">✓ Works offline</li>
              </ul>
            </div>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img className="mo" src={asset("/baby-mo-poses/baby-mo-yeyy.png")} alt="Baby Mo" width={240} height={240} />
          </section>

          <section className="card" aria-labelledby="shots-h">
            <h2 id="shots-h"><span data-l="id">Lihat di dalam aplikasi</span><span data-l="en">A look inside the app</span></h2>
            <div className="shots">
              {SHOTS.map((s) => (
                <figure key={s.src}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={asset(s.src)} alt={`${s.en} screen`} width={390} height={664} loading="lazy" />
                  <figcaption><span data-l="id">{s.id}</span><span data-l="en">{s.en}</span></figcaption>
                </figure>
              ))}
            </div>
          </section>

          <section className="card" aria-labelledby="feat-h">
            <h2 id="feat-h"><span data-l="id">Ada apa saja?</span><span data-l="en">What&apos;s inside</span></h2>
            <div className="grid">
              {FEATURES.map((f) => (
                <div className="feat" key={f.en[0]}>
                  <div className="ic" aria-hidden="true">{f.ic}</div>
                  <h3><span data-l="id">{f.id[0]}</span><span data-l="en">{f.en[0]}</span></h3>
                  <p><span data-l="id">{f.id[1]}</span><span data-l="en">{f.en[1]}</span></p>
                </div>
              ))}
            </div>
          </section>

          <section className="card" aria-labelledby="safe-h">
            <h2 id="safe-h"><span data-l="id">Janji kami untuk orang tua</span><span data-l="en">Our promise to parents</span></h2>
            <ul className="ticks" data-l="id">{PROMISES.id.map((t) => <li key={t}>{t}</li>)}</ul>
            <ul className="ticks" data-l="en">{PROMISES.en.map((t) => <li key={t}>{t}</li>)}</ul>
            <p className="soft" style={{ marginTop: 12 }}>
              <span data-l="id">Baca <a href={asset("/privacy/")}>Kebijakan Privasi</a> lengkap kami.</span>
              <span data-l="en">Read our full <a href={asset("/privacy/")}>Privacy Policy</a>.</span>
            </p>
          </section>

          <section className="card" aria-labelledby="more-h">
            <h2 id="more-h"><span data-l="id">Lebih banyak dari Baby Mo</span><span data-l="en">More from Baby Mo</span></h2>
            <p>
              <span data-l="id">Di <a href={asset("/id/cerita/")}>babymo.id/cerita</a> ada lebih dari 150 buku cerita bergambar gratis — Ramadan, hari besar Islam, adab, dan petualangan si kembar Mo &amp; Ais — lengkap dengan suara bacaan dan kartu untuk orang tua.</span>
              <span data-l="en">At <a href={asset("/en/cerita/")}>babymo.id/cerita</a> there are more than 150 free picture books — Ramadan, Islamic celebrations, good manners and the adventures of the twins Mo &amp; Ais — with read-aloud and tips for parents.</span>
            </p>
            <p className="soft">
              <span data-l="id">Butuh untuk iPhone/iPad dengan iOS 15 atau lebih baru.</span>
              <span data-l="en">Requires iPhone or iPad with iOS 15 or later.</span>
            </p>
          </section>

          <footer className="foot">
            <a href={asset("/support/")}><span data-l="id">Bantuan</span><span data-l="en">Support</span></a>·
            <a href={asset("/privacy/")}><span data-l="id">Privasi</span><span data-l="en">Privacy</span></a>·
            <a href={`mailto:${SUPPORT_EMAIL}`}>{SUPPORT_EMAIL}</a>
            <p style={{ marginTop: 8 }}>© Baby Mo · babymo.id</p>
          </footer>
        </main>
      </body>
    </html>
  );
}
