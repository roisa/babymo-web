import type { Metadata } from "next";
import type { ReactNode } from "react";
import { asset } from "@/lib/i18n/config";
import { INSTAGRAM_URL, LANG_SCRIPT, STORE_CSS, SUPPORT_EMAIL } from "@/lib/content/store-pages";

/**
 * babymo.id/support — the "Support URL" in App Store Connect. Answers the
 * questions parents actually ask, and tells them how to reach us. Keep it
 * true to the app (babymo-app repo) and to the privacy policy.
 */
export const metadata: Metadata = {
  title: "Bantuan · Support — Baby Mo",
  description: "Help for the Baby Mo app and website: contact us, frequently asked questions, sound, language, prayer times, and deleting data.",
  alternates: { canonical: "https://babymo.id/support/" },
  robots: { index: true, follow: true },
};

interface Faq {
  q: { id: string; en: string };
  a: { id: ReactNode; en: ReactNode };
}

const FAQS: Faq[] = [
  {
    q: { id: "Apakah Baby Mo gratis?", en: "Is Baby Mo free?" },
    a: {
      id: <p>Ya. Baby Mo gratis, tanpa iklan, dan tanpa pembelian dalam aplikasi. Label seperti &ldquo;PRO&rdquo; atau &ldquo;Juara&rdquo; di beberapa game hanyalah tingkat kesulitan, bukan fitur berbayar.</p>,
      en: <p>Yes. Baby Mo is free, with no ads and no in-app purchases. Labels such as &ldquo;PRO&rdquo; or &ldquo;Champion&rdquo; in some games are just difficulty levels, not paid features.</p>,
    },
  },
  {
    q: { id: "Perlu membuat akun?", en: "Do I need an account?" },
    a: {
      id: <p>Tidak. Tidak ada akun, pendaftaran, atau login. Buka aplikasinya dan langsung bermain.</p>,
      en: <p>No. There are no accounts, sign-ups or logins. Open the app and start playing.</p>,
    },
  },
  {
    q: { id: "Bisakah dipakai tanpa internet?", en: "Does it work offline?" },
    a: {
      id: <p>Bisa. Semua game, doa, dan panduan sholat ada di dalam aplikasi. Internet hanya dipakai untuk menghitung jadwal sholat dan menampilkan nama kota — jika offline, aplikasi memakai data terakhir yang tersimpan.</p>,
      en: <p>Yes. All the games, du&apos;as and the prayer guide are inside the app. The internet is only used to calculate prayer times and show your city name — offline, the app uses the last saved data.</p>,
    },
  },
  {
    q: { id: "Bagaimana mengganti bahasa?", en: "How do I change the language?" },
    a: {
      id: <p>Ketuk tombol <b>ID / EN</b> di bagian atas layar Beranda. Pilihan bahasa tersimpan di perangkat.</p>,
      en: <p>Tap the <b>ID / EN</b> button at the top of the Home screen. Your choice is saved on the device.</p>,
    },
  },
  {
    q: { id: "Bagaimana mengatur nama si kecil?", en: "How do I set my child's name?" },
    a: {
      id: <p>Di Beranda, ketuk <b>&ldquo;Siapa nama si kecil?&rdquo;</b> lalu ketik nama panggilannya. Ketuk lagi untuk mengubahnya. Nama ini hanya tersimpan di perangkat Anda dan tidak pernah dikirim ke kami.</p>,
      en: <p>On Home, tap <b>&ldquo;What&apos;s your little one&apos;s name?&rdquo;</b> and type a nickname. Tap it again to change it. The name is stored only on your device and is never sent to us.</p>,
    },
  },
  {
    q: { id: "Suara tidak keluar. Apa yang harus dilakukan?", en: "There's no sound. What can I do?" },
    a: {
      id: (
        <ol>
          <li>Pastikan iPhone/iPad tidak dalam mode senyap dan volume sudah dinaikkan.</li>
          <li>Periksa tombol suara 🔊 di bagian atas aplikasi — pastikan tidak dimatikan.</li>
          <li>Suara bacaan memakai suara bawaan perangkat. Untuk suara yang lebih jelas, buka <b>Pengaturan → Aksesibilitas → Konten Lisan → Suara</b> dan unduh suara Bahasa Indonesia atau Arab.</li>
          <li>Tutup aplikasi sepenuhnya lalu buka lagi.</li>
        </ol>
      ),
      en: (
        <ol>
          <li>Make sure the iPhone/iPad isn&apos;t on silent and the volume is up.</li>
          <li>Check the 🔊 sound button at the top of the app is switched on.</li>
          <li>Read-aloud uses your device&apos;s built-in voices. For clearer voices, go to <b>Settings → Accessibility → Spoken Content → Voices</b> and download an Indonesian or Arabic voice.</li>
          <li>Close the app completely and open it again.</li>
        </ol>
      ),
    },
  },
  {
    q: { id: "Jadwal sholat atau arah kiblat tidak tepat.", en: "Prayer times or the Qibla look wrong." },
    a: {
      id: (
        <ul>
          <li>Lokasi bersifat opsional. Jika Anda mengizinkan, buka <b>Pengaturan → Baby Mo → Lokasi</b> dan pilih <b>&ldquo;Saat Aplikasi Digunakan&rdquo;</b>.</li>
          <li>Jika tidak ingin memberi lokasi, pilih kota secara manual di menu Sholat.</li>
          <li>Untuk arah kiblat, kalibrasi kompas dengan menggerakkan perangkat membentuk angka 8, dan jauhkan dari benda logam atau magnet.</li>
        </ul>
      ),
      en: (
        <ul>
          <li>Location is optional. If you want to allow it, go to <b>Settings → Baby Mo → Location</b> and choose <b>&ldquo;While Using the App&rdquo;</b>.</li>
          <li>If you prefer not to share location, pick your city by hand in the Prayer section.</li>
          <li>For the Qibla, calibrate the compass by moving the device in a figure-8, away from metal or magnets.</li>
        </ul>
      ),
    },
  },
  {
    q: { id: "Bagaimana menghapus data atau mengulang progres?", en: "How do I delete data or reset progress?" },
    a: {
      id: <p>Semua data Baby Mo (nama, bintang, progres, pengaturan) hanya tersimpan di perangkat Anda — kami tidak menyimpannya di server. Untuk menghapus semuanya, hapus aplikasi Baby Mo dari perangkat, lalu pasang lagi bila ingin mulai dari awal. Jika Anda pernah mengirim email kepada kami dan ingin email itu dihapus, kirim permintaan ke <a href={`mailto:${SUPPORT_EMAIL}`}>{SUPPORT_EMAIL}</a>.</p>,
      en: <p>All Baby Mo data (name, stars, progress, settings) is stored only on your device — we don&apos;t keep it on a server. To delete everything, delete the Baby Mo app from your device, then reinstall it if you want to start fresh. If you have emailed us and want that email deleted, send a request to <a href={`mailto:${SUPPORT_EMAIL}`}>{SUPPORT_EMAIL}</a>.</p>,
    },
  },
  {
    q: { id: "Perangkat apa saja yang didukung?", en: "Which devices are supported?" },
    a: {
      id: <p>iPhone dan iPad dengan iOS 15 atau lebih baru. Di perangkat lain, semua game juga bisa dimainkan lewat browser di <a href="https://play.babymo.id/">play.babymo.id</a>.</p>,
      en: <p>iPhone and iPad with iOS 15 or later. On other devices, all the games can be played in a browser at <a href="https://play.babymo.id/">play.babymo.id</a>.</p>,
    },
  },
  {
    q: { id: "Untuk usia berapa?", en: "What age is it for?" },
    a: {
      id: <p>Untuk anak sekitar 2–8 tahun, sebaiknya dimainkan bersama orang tua. Setiap game mencantumkan usia yang disarankan.</p>,
      en: <p>For children aged about 2–8, ideally playing alongside a parent. Each game shows a suggested age.</p>,
    },
  },
  {
    q: { id: "Saya menemukan kesalahan pada doa, ayat, atau hadits.", en: "I found a mistake in a du'a, verse or hadith." },
    a: {
      id: <p>Terima kasih sudah teliti! Kirim email ke <a href={`mailto:${SUPPORT_EMAIL}`}>{SUPPORT_EMAIL}</a> dengan nama game atau halaman dan bagian yang keliru. Kami akan memeriksanya dengan sumber aslinya dan memperbaikinya.</p>,
      en: <p>Thank you for checking! Email <a href={`mailto:${SUPPORT_EMAIL}`}>{SUPPORT_EMAIL}</a> with the game or page name and the part that&apos;s wrong. We&apos;ll check it against the original source and fix it.</p>,
    },
  },
];

export default function SupportPage() {
  const mailSubject = encodeURIComponent("Baby Mo — Bantuan / Support");
  return (
    <html lang="id" data-lang="id" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: LANG_SCRIPT }} />
      </head>
      <body>
        <style dangerouslySetInnerHTML={{ __html: STORE_CSS }} />
        <main className="sp" style={{ maxWidth: 800 }}>
          <header className="top">
            <a className="brand" href={asset("/app/")}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={asset("/baby-mo-poses/baby-mo-ok.png")} alt="" width={40} height={40} />
              Baby Mo
            </a>
            <div className="lang" role="group" aria-label="Bahasa / Language">
              <button type="button" data-set-lang="id" lang="id">ID</button>
              <button type="button" data-set-lang="en" lang="en">EN</button>
            </div>
          </header>

          <h1><span data-l="id">Bantuan Baby Mo</span><span data-l="en">Baby Mo Support</span></h1>
          <p className="soft" style={{ fontSize: 18 }}>
            <span data-l="id">Ada pertanyaan atau masalah dengan aplikasi Baby Mo? Kami senang membantu.</span>
            <span data-l="en">Questions or trouble with the Baby Mo app? We&apos;re happy to help.</span>
          </p>

          <section className="card" aria-labelledby="contact-h">
            <h2 id="contact-h"><span data-l="id">Hubungi kami</span><span data-l="en">Contact us</span></h2>
            <div className="contact">
              <a className="box" href={`mailto:${SUPPORT_EMAIL}?subject=${mailSubject}`}>
                <b>✉️ Email</b>
                {SUPPORT_EMAIL}
                <span className="soft" style={{ display: "block", fontSize: 14 }}>
                  <span data-l="id">Biasanya kami balas dalam 1–2 hari kerja.</span>
                  <span data-l="en">We usually reply within 1–2 working days.</span>
                </span>
              </a>
              <a className="box" href={INSTAGRAM_URL}>
                <b>📷 Instagram</b>
                @babymo.official
                <span className="soft" style={{ display: "block", fontSize: 14 }}>
                  <span data-l="id">Kabar terbaru dan pesan langsung.</span>
                  <span data-l="en">News and direct messages.</span>
                </span>
              </a>
            </div>
            <p className="soft" style={{ marginTop: 14 }}>
              <span data-l="id">Saat melaporkan masalah, mohon sebutkan: model iPhone/iPad, versi iOS, nama game atau layar, apa yang terjadi, dan tangkapan layar bila ada.</span>
              <span data-l="en">When reporting a problem, please include: your iPhone/iPad model, iOS version, the game or screen, what happened, and a screenshot if you can.</span>
            </p>
          </section>

          <section className="card" aria-labelledby="faq-h">
            <h2 id="faq-h"><span data-l="id">Pertanyaan yang sering diajukan</span><span data-l="en">Frequently asked questions</span></h2>
            {FAQS.map((f) => (
              <details key={f.q.en}>
                <summary><span data-l="id">{f.q.id}</span><span data-l="en">{f.q.en}</span></summary>
                <div>
                  <div data-l="id">{f.a.id}</div>
                  <div data-l="en">{f.a.en}</div>
                </div>
              </details>
            ))}
          </section>

          <section className="card" aria-labelledby="privacy-h">
            <h2 id="privacy-h"><span data-l="id">Privasi &amp; keamanan anak</span><span data-l="en">Privacy &amp; child safety</span></h2>
            <ul className="ticks">
              <li><span data-l="id">Tanpa iklan, tanpa pelacakan, tanpa analitik di dalam aplikasi.</span><span data-l="en">No ads, no tracking and no analytics inside the app.</span></li>
              <li><span data-l="id">Tidak mengumpulkan data pribadi anak.</span><span data-l="en">No personal data collected from children.</span></li>
              <li><span data-l="id">Tidak ada chat, profil, atau fitur sosial.</span><span data-l="en">No chat, profiles or social features.</span></li>
            </ul>
            <p style={{ marginTop: 12 }}>
              <span data-l="id">Selengkapnya di <a href={asset("/privacy/")}>Kebijakan Privasi</a>.</span>
              <span data-l="en">Read more in our <a href={asset("/privacy/")}>Privacy Policy</a>.</span>
            </p>
          </section>

          <footer className="foot">
            <a href={asset("/app/")}><span data-l="id">Tentang aplikasi</span><span data-l="en">About the app</span></a>·
            <a href={asset("/privacy/")}><span data-l="id">Privasi</span><span data-l="en">Privacy</span></a>·
            <a href={asset("/")}>babymo.id</a>
            <p style={{ marginTop: 8 }}>© Baby Mo</p>
          </footer>
        </main>
      </body>
    </html>
  );
}
