import type { Metadata } from "next";
import { STORE_FONT_VARS } from "@/lib/content/store-fonts";
import { PRIVACY_EMAIL, PRIVACY_HTML, PRIVACY_UPDATED } from "@/lib/content/privacy";
import { LANG_SCRIPT } from "@/lib/content/store-pages";
import { asset } from "@/lib/i18n/config";

/**
 * babymo.id/privacy — the public privacy policy (Bahasa Indonesia + English,
 * switchable; both show without JavaScript). This is the URL entered in App
 * Store Connect, so it lives outside the /[locale] tree and renders its own
 * <html>. The policy TEXT comes unchanged from lib/content/privacy.ts (also
 * used at /id/privasi and /en/privasi); this page only lays it out: the
 * "in short" list becomes cards, the sections get anchors and a contents list.
 */

export const metadata: Metadata = {
  title: "Kebijakan Privasi · Privacy Policy — Baby Mo",
  description:
    "How Baby Mo (babymo.id, play.babymo.id and the Baby Mo app) handles information: no accounts, no ads, no tracking, no personal data from children.",
  alternates: { canonical: "https://babymo.id/privacy/" },
  robots: { index: true, follow: true },
};

type Lang = "id" | "en";
const ICONS = ["📋", "🧒", "🔌", "📍", "🛡️", "📱", "🗑️", "⚖️", "✉️", "🔄"];
const SUMMARY_ICONS = ["🙅", "🚫", "🧒", "📱"];
const TINTS = ["#FFE8B8", "#FFE1EA", "#DDF5E6", "#D9F2FF"];

/** Split the policy HTML into lead, "in short" items, and numbered sections. */
function parse(lang: Lang) {
  const html = PRIVACY_HTML[lang];
  const lead = html.match(/<p class="lead">([\s\S]*?)<\/p>/)?.[1] ?? "";
  const summaryBlock = html.match(/<div class="summary">([\s\S]*?)<\/div>/)?.[1] ?? "";
  const summary = [...summaryBlock.matchAll(/<li>([\s\S]*?)<\/li>/g)].map((m) => m[1]!);
  const body = html.slice(html.indexOf("<h2>"));
  const toc: { n: number; title: string }[] = [];
  const sections = body
    .replace(/<h2>(\d+)\.\s*([\s\S]*?)<\/h2>/g, (_m, n: string, title: string) => {
      const i = Number(n);
      toc.push({ n: i, title });
      return `<h2 id="${lang}-${i}"><span class="num" aria-hidden="true">${ICONS[i - 1] ?? "•"}</span><span><small>${i}</small>${title}</span></h2>`;
    });
  return { lead, summary, sections, toc };
}

const CSS = `
:root{color-scheme:light dark;--bg:#FBFAF6;--bg2:#F3F7F2;--card:#FFFFFF;--ink:#14181A;--soft:#5B615C;--line:#E7E4DB;--green:#1E8C53;--shadow:0 20px 50px -24px rgba(20,40,30,.35)}
@media (prefers-color-scheme:dark){:root{--bg:#0F1312;--bg2:#141A18;--card:#1A201E;--ink:#EEF1EC;--soft:#A7AEA8;--line:#29312D;--green:#5CCB8C;--shadow:0 20px 50px -24px rgba(0,0,0,.8)}}
*{box-sizing:border-box}
html,body{margin:0;background:var(--bg);color:var(--ink)}
html{scroll-behavior:smooth;scroll-padding-top:84px}
body{font-family:var(--f-body),-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,sans-serif;font-size:16px;line-height:1.7;-webkit-font-smoothing:antialiased}
html[data-lang="id"] [data-l="en"],html[data-lang="en"] [data-l="id"]{display:none!important}
a{color:var(--green)}
.wrap{max-width:1080px;margin:0 auto;padding:0 18px}
h1,h2,h3{font-family:var(--f-round),var(--f-body),sans-serif;letter-spacing:-.01em;margin:0}
.grad{background:linear-gradient(90deg,#1E8C53,#2FB3A0 45%,#5AA9E6);-webkit-background-clip:text;background-clip:text;color:transparent}

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

.hero{position:relative;overflow:hidden;padding:46px 0 26px}
.blob{position:absolute;border-radius:50%;filter:blur(60px);opacity:.5;pointer-events:none}
.b1{width:460px;height:460px;background:#BDEBCF;top:-200px;left:-140px}
.b2{width:400px;height:400px;background:#E6E0FF;top:-140px;right:-120px}
@media (prefers-color-scheme:dark){.blob{opacity:.16}}
.hero .wrap{position:relative;z-index:1;display:grid;gap:24px;align-items:center}
@media(min-width:860px){.hero .wrap{grid-template-columns:1fr auto}}
.shield{width:150px;height:150px;border-radius:44px;display:grid;place-items:center;background:linear-gradient(140deg,#2FB36F,#1E8C53);box-shadow:var(--shadow);position:relative;justify-self:center}
.shield img{width:120px;height:120px;object-fit:contain;filter:drop-shadow(0 10px 12px rgba(0,0,0,.25));animation:bob 4s ease-in-out infinite}
.shield::after{content:"🔒";position:absolute;right:-10px;bottom:-10px;width:52px;height:52px;border-radius:18px;background:var(--card);display:grid;place-items:center;font-size:26px;box-shadow:var(--shadow)}
@keyframes bob{0%,100%{translate:0 0}50%{translate:0 -7px}}
@media (prefers-reduced-motion:reduce){.shield img{animation:none}}
.chip{display:inline-flex;align-items:center;gap:8px;padding:6px 14px 6px 8px;border-radius:999px;background:var(--card);border:1px solid var(--line);font-weight:700;font-size:14px}
.chip b{background:var(--green);color:#fff;border-radius:999px;padding:2px 9px;font-size:12px}
.hero h1{font-size:clamp(36px,6vw,58px);line-height:1.04;font-weight:800;margin:14px 0 10px}
.lead{font-size:18px;color:var(--soft);max-width:40em;margin:0}
.lead strong{color:var(--ink)}

.short{display:grid;gap:12px;grid-template-columns:1fr;margin-top:26px}
@media(min-width:640px){.short{grid-template-columns:repeat(2,1fr)}}
@media(min-width:980px){.short{grid-template-columns:repeat(4,1fr)}}
.pcard{background:var(--card);border:1px solid var(--line);border-radius:22px;padding:18px;font-weight:600;line-height:1.45}
.pcard .ic{width:44px;height:44px;border-radius:14px;display:grid;place-items:center;font-size:22px;margin-bottom:10px}

.layout{display:grid;gap:24px;padding:30px 0 10px}
@media(min-width:900px){.layout{grid-template-columns:260px 1fr;align-items:start}}
.toc{background:var(--card);border:1px solid var(--line);border-radius:22px;padding:16px}
@media(min-width:900px){.toc{position:sticky;top:84px}}
.toc h3{font-size:16px;margin:0 0 8px;color:var(--soft)}
.toc ol{list-style:none;padding:0;margin:0;display:grid;gap:2px}
.toc a{display:flex;gap:10px;align-items:center;text-decoration:none;color:var(--ink);font-weight:600;font-size:14.5px;padding:7px 10px;border-radius:12px;line-height:1.3}
.toc a:hover{background:var(--bg2)}
.toc a span:first-child{width:24px;flex:0 0 auto;text-align:center}

.doc section{background:var(--card);border:1px solid var(--line);border-radius:26px;padding:8px 24px 18px}
.doc h2{display:flex;align-items:center;gap:12px;font-size:23px;line-height:1.25;margin:26px 0 10px;padding-top:18px;border-top:1px dashed var(--line)}
.doc h2:first-child{border-top:0;padding-top:10px}
.doc h2 .num{flex:0 0 auto;width:44px;height:44px;border-radius:14px;display:grid;place-items:center;font-size:22px;background:var(--bg2)}
.doc h2 small{display:block;font-family:var(--f-body);font-size:12px;font-weight:800;letter-spacing:.12em;color:var(--green);text-transform:uppercase}
.doc h2 small::before{content:"§ "}
.doc p,.doc li{color:var(--ink)}
.doc ul{padding-left:22px;list-style:disc}
.doc li::marker{color:var(--green)}
.doc li{margin:7px 0}
.doc strong{font-weight:700}

.contact{margin:26px 0 0;border-radius:28px;padding:28px 22px;background:linear-gradient(140deg,#0F3B27,#14533A 55%,#1E6F4D);color:#F2FAF5;display:grid;gap:16px;align-items:center}
@media(min-width:760px){.contact{grid-template-columns:1fr auto}}
.contact h2{color:#fff;font-size:28px}
.contact p{color:#CFE8DA;margin:6px 0 0}
.contact a.btn{display:inline-flex;align-items:center;gap:8px;padding:14px 22px;border-radius:16px;background:#fff;color:#14533A!important;font-weight:800;text-decoration:none;white-space:nowrap}
.doc .updated{color:var(--soft);font-size:14px}
footer{padding:30px 0 56px;color:var(--soft);font-size:14px;text-align:center}
footer a{margin:0 8px;font-weight:600}
`;

export default function PrivacyPolicyPage() {
  const L = { id: parse("id"), en: parse("en") };
  return (
    <html lang="id" data-lang="id" className={STORE_FONT_VARS} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: LANG_SCRIPT }} />
      </head>
      <body>
        <style dangerouslySetInnerHTML={{ __html: CSS }} />

        <nav className="nav" aria-label="Baby Mo">
          <div className="wrap">
            <a className="brand" href={asset("/app/")}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={asset("/baby-mo-poses/baby-mo-ok.png")} alt="" width={36} height={36} />
              Baby Mo <small><span data-l="id">Privasi</span><span data-l="en">Privacy</span></small>
            </a>
            <div className="links">
              <a href={asset("/app/")}><span data-l="id">Tentang app</span><span data-l="en">About the app</span></a>
              <a href={asset("/support/")}><span data-l="id">Bantuan</span><span data-l="en">Support</span></a>
            </div>
            <div className="lang" role="group" aria-label="Bahasa / Language">
              <button type="button" data-set-lang="id" lang="id">ID</button>
              <button type="button" data-set-lang="en" lang="en">EN</button>
            </div>
          </div>
        </nav>

        <main>
          <header className="hero">
            <div className="blob b1" /><div className="blob b2" />
            <div className="wrap">
              <div>
                <span className="chip">
                  <b><span data-l="id">Diperbarui</span><span data-l="en">Updated</span></b>
                  <span data-l="id">{PRIVACY_UPDATED.id}</span><span data-l="en">{PRIVACY_UPDATED.en}</span>
                </span>
                <h1>
                  <span data-l="id">Privasi si kecil, <span className="grad">kami jaga</span></span>
                  <span data-l="en">Your child&apos;s privacy, <span className="grad">protected</span></span>
                </h1>
                <p className="lead" data-l="id" dangerouslySetInnerHTML={{ __html: L.id.lead }} />
                <p className="lead" data-l="en" dangerouslySetInnerHTML={{ __html: L.en.lead }} />
              </div>
              <div className="shield" aria-hidden="true">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={asset("/baby-mo-poses/baby-mo-pose-25.png")} alt="" width={120} height={120} />
              </div>
            </div>

            <div className="wrap" style={{ display: "block" }}>
              {(["id", "en"] as const).map((lang) => (
                <div className="short" data-l={lang} key={lang}>
                  {L[lang].summary.map((s, i) => (
                    <div className="pcard" key={i}>
                      <div className="ic" style={{ background: TINTS[i % TINTS.length] }} aria-hidden="true">{SUMMARY_ICONS[i] ?? "✓"}</div>
                      <span dangerouslySetInnerHTML={{ __html: s }} />
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </header>

          <div className="wrap layout">
            {(["id", "en"] as const).map((lang) => (
              <nav className="toc" data-l={lang} key={lang} aria-label={lang === "id" ? "Daftar isi" : "Contents"}>
                <h3>{lang === "id" ? "Daftar isi" : "Contents"}</h3>
                <ol>
                  {L[lang].toc.map((t) => (
                    <li key={t.n}>
                      <a href={`#${lang}-${t.n}`}><span aria-hidden="true">{ICONS[t.n - 1]}</span><span dangerouslySetInnerHTML={{ __html: `${t.n}. ${t.title}` }} /></a>
                    </li>
                  ))}
                </ol>
              </nav>
            ))}

            <div className="doc">
              <section data-l="id" lang="id" dangerouslySetInnerHTML={{ __html: L.id.sections }} />
              <section data-l="en" lang="en" dangerouslySetInnerHTML={{ __html: L.en.sections }} />

              <div className="contact">
                <div>
                  <h2><span data-l="id">Ada pertanyaan tentang privasi?</span><span data-l="en">Questions about privacy?</span></h2>
                  <p>
                    <span data-l="id">Tulis kepada kami. Permintaan akses, koreksi, atau penghapusan data kami balas paling lambat 14 hari.</span>
                    <span data-l="en">Write to us. We answer requests to access, correct or delete data within 14 days.</span>
                  </p>
                </div>
                <a className="btn" href={`mailto:${PRIVACY_EMAIL}?subject=${encodeURIComponent("Privasi / Privacy — Baby Mo")}`}>✉️ {PRIVACY_EMAIL}</a>
              </div>
            </div>
          </div>
        </main>

        <footer>
          <div className="wrap">
            <a href={asset("/app/")}><span data-l="id">Tentang aplikasi</span><span data-l="en">About the app</span></a>·
            <a href={asset("/support/")}><span data-l="id">Bantuan</span><span data-l="en">Support</span></a>·
            <a href={asset("/")}>babymo.id</a>
            <p style={{ marginTop: 10 }}>© Baby Mo</p>
          </div>
        </footer>
      </body>
    </html>
  );
}
