import type { Metadata } from "next";
import { PRIVACY_HTML, PRIVACY_UPDATED } from "@/lib/content/privacy";
import { asset } from "@/lib/i18n/config";

/**
 * babymo.id/privacy — the public privacy policy (English + Bahasa Indonesia
 * on one page). This is the URL entered in App Store Connect, so it lives
 * outside the /[locale] tree and renders its own <html>.
 * The same text is shown at /id/privasi and /en/privasi.
 */
export const metadata: Metadata = {
  title: "Privacy Policy · Kebijakan Privasi — Baby Mo",
  description:
    "How Baby Mo (babymo.id, play.babymo.id and the Baby Mo app) handles information: no accounts, no ads, no tracking, no personal data from children.",
  alternates: { canonical: "https://babymo.id/privacy/" },
  robots: { index: true, follow: true },
};

const CSS = `
:root{color-scheme:light dark;--bg:#FBFAF6;--card:#FFFFFF;--ink:#14181A;--soft:#5B615C;--line:#E5E2D9;--accent:#1E8C53;--tint:#E8F4EC}
@media (prefers-color-scheme:dark){:root{--bg:#121514;--card:#1B201E;--ink:#EEF1EC;--soft:#A7AEA8;--line:#2C332F;--accent:#5CCB8C;--tint:#1C2A22}}
html,body{margin:0;background:var(--bg);color:var(--ink)}
body{font:16px/1.65 -apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif}
.pp{max-width:760px;margin:0 auto;padding:28px 18px 64px}
.pp header{display:flex;align-items:center;justify-content:space-between;gap:12px;flex-wrap:wrap;margin-bottom:22px}
.pp .brand{display:flex;align-items:center;gap:10px;color:var(--ink);text-decoration:none;font-weight:800;font-size:18px}
.pp .brand img{width:40px;height:40px;border-radius:12px}
.pp nav a{display:inline-block;margin-left:6px;padding:7px 14px;border-radius:999px;border:1px solid var(--line);color:var(--ink);text-decoration:none;font-size:14px;font-weight:600;background:var(--card)}
.pp h1{font-size:30px;line-height:1.2;margin:8px 0 4px;letter-spacing:-.01em}
.pp .sub{color:var(--soft);margin:0 0 18px;font-size:14px}
.pp section{background:var(--card);border:1px solid var(--line);border-radius:20px;padding:22px 20px;margin:0 0 22px}
.pp section > .lang{font-size:12px;font-weight:800;letter-spacing:.12em;text-transform:uppercase;color:var(--accent);margin:0 0 6px}
.pp h2{font-size:19px;margin:26px 0 8px;line-height:1.3}
.pp ul{padding-left:20px;margin:8px 0}
.pp li{margin:6px 0}
.pp a{color:var(--accent)}
.pp .lead{font-size:17px}
.pp .summary{background:var(--tint);border-radius:14px;padding:12px 16px;margin:16px 0}
.pp .summary p{margin:0 0 4px}
.pp .updated{color:var(--soft);font-size:14px;margin-top:24px}
.pp footer{text-align:center;color:var(--soft);font-size:13px}
`;

export default function PrivacyPolicyPage() {
  return (
    <html lang="en">
      <body>
        <style dangerouslySetInnerHTML={{ __html: CSS }} />
        <main className="pp">
          <header>
            <a className="brand" href={asset("/")}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={asset("/baby-mo-poses/baby-mo-ok.png")} alt="" width={40} height={40} style={{ objectFit: "contain", background: "var(--tint)" }} />
              Baby Mo
            </a>
            <nav aria-label="Language">
              <a href="#english">English</a>
              <a href="#indonesia" hrefLang="id">Bahasa Indonesia</a>
            </nav>
          </header>
          <h1>Privacy Policy</h1>
          <p className="sub">
            Kebijakan Privasi · babymo.id, play.babymo.id &amp; the Baby Mo app · Last updated {PRIVACY_UPDATED.en}
          </p>
          <section id="english" lang="en">
            <p className="lang">English</p>
            <div dangerouslySetInnerHTML={{ __html: PRIVACY_HTML.en }} />
          </section>
          <section id="indonesia" lang="id">
            <p className="lang">Bahasa Indonesia</p>
            <h2 style={{ marginTop: 4 }}>Kebijakan Privasi</h2>
            <div dangerouslySetInnerHTML={{ __html: PRIVACY_HTML.id }} />
          </section>
          <footer>
            © Baby Mo · <a href={asset("/")}>babymo.id</a> · <a href="mailto:hello@babymo.id">hello@babymo.id</a>
          </footer>
        </main>
      </body>
    </html>
  );
}
