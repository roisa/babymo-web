import type { Metadata } from "next";
import { STORE_FONT_VARS } from "@/lib/content/store-fonts";
import { PRIVACY_EMAIL, PRIVACY_HTML, PRIVACY_UPDATED } from "@/lib/content/privacy";
import { LANG_SCRIPT } from "@/lib/content/store-pages";
import { asset } from "@/lib/i18n/config";

/**
 * babymo.id/privacy — the public privacy policy (Bahasa Indonesia + English, switchable; both
 * show without JavaScript). This is the URL entered in App Store Connect, so it lives outside the
 * /[locale] tree and renders its own <html>.
 *
 * The policy TEXT comes unchanged from lib/content/privacy.ts (also used at /id/privasi and
 * /en/privasi); this page only lays it out. Redesigned 13 Nov 2026 in the same current-iOS look
 * as babymo.id/app: soft sky, liquid-glass panels, an App Store-style privacy label, the "in
 * short" points as a Settings-style list, one glass card per section and a sticky contents list.
 */

export const metadata: Metadata = {
  title: "Kebijakan Privasi · Privacy Policy — Baby Mo",
  description:
    "How Baby Mo (babymo.id, play.babymo.id and the Baby Mo app) handles information: no accounts, no ads, no tracking, no personal data from children.",
  alternates: { canonical: "https://babymo.id/privacy/" },
  robots: { index: true, follow: true },
};

type Lang = "id" | "en";

/* iOS Settings-style icons (white glyph on a coloured rounded square) */
const G = {
  doc: '<path d="M7 3h7l4 4v14H7z" fill="none" stroke="#fff" stroke-width="2" stroke-linejoin="round"/><path d="M10 11h5M10 15h5" stroke="#fff" stroke-width="2" stroke-linecap="round"/>',
  child: '<circle cx="12" cy="7.5" r="3.3" fill="#fff"/><path d="M5.5 20a6.5 6.5 0 0 1 13 0z" fill="#fff"/>',
  plug: '<path d="M9 3v5M15 3v5M6 8h12v3a6 6 0 0 1-12 0zM12 17v4" fill="none" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>',
  pin: '<path d="M12 21s-7-6.2-7-11.5a7 7 0 0 1 14 0C19 14.8 12 21 12 21z" fill="#fff"/><circle cx="12" cy="9.5" r="2.6" fill="currentColor"/>',
  shield: '<path d="M12 3l7 3v5.5c0 4.6-3 8.2-7 9.5-4-1.3-7-4.9-7-9.5V6z" fill="#fff"/><path d="M8.8 12.2l2.2 2.2 4.3-4.6" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/>',
  phone: '<rect x="7" y="2.5" width="10" height="19" rx="2.6" fill="none" stroke="#fff" stroke-width="2"/><path d="M10.5 18.5h3" stroke="#fff" stroke-width="2" stroke-linecap="round"/>',
  trash: '<path d="M5 7h14M10 7V4.5h4V7M7 7l1 13h8l1-13" fill="none" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>',
  scale: '<path d="M12 4v16M7 20h10M5 7h14M5 7l-2.5 6a2.5 2.5 0 0 0 5 0zM19 7l-2.5 6a2.5 2.5 0 0 0 5 0z" fill="none" stroke="#fff" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"/>',
  mail: '<rect x="3" y="5.5" width="18" height="13" rx="2.6" fill="none" stroke="#fff" stroke-width="2"/><path d="M4 7l8 6 8-6" fill="none" stroke="#fff" stroke-width="2" stroke-linejoin="round"/>',
  refresh: '<path d="M19 8a7.5 7.5 0 1 0 1 6" fill="none" stroke="#fff" stroke-width="2.2" stroke-linecap="round"/><path d="M20 3.5V8h-4.5" fill="none" stroke="#fff" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/>',
  noacct: '<circle cx="12" cy="8" r="3.3" fill="#fff"/><path d="M5.5 20a6.5 6.5 0 0 1 13 0z" fill="#fff"/><path d="M4 4l16 16" stroke="currentColor" stroke-width="4" stroke-linecap="round"/><path d="M4 4l16 16" stroke="#fff" stroke-width="2" stroke-linecap="round"/>',
  noad: '<rect x="3.5" y="6" width="17" height="12" rx="3" fill="none" stroke="#fff" stroke-width="2"/><path d="M4 4l16 16" stroke="currentColor" stroke-width="4" stroke-linecap="round"/><path d="M4 4l16 16" stroke="#fff" stroke-width="2" stroke-linecap="round"/>',
  device: '<rect x="7" y="2.5" width="10" height="19" rx="2.6" fill="#fff"/><path d="M9.6 12.2l1.8 1.8 3.3-3.6" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>',
};
const ico = (g: keyof typeof G, c: string) =>
  `<span class="si" style="background:${c};color:${c}"><svg viewBox="0 0 24 24" aria-hidden="true">${G[g]}</svg></span>`;
const SECTION_ICONS: [keyof typeof G, string][] = [
  ["doc", "#8E8E93"], ["child", "#FF9500"], ["plug", "#5856D6"], ["pin", "#007AFF"], ["shield", "#34C759"],
  ["phone", "#30B0C7"], ["trash", "#FF3B30"], ["scale", "#AF52DE"], ["mail", "#0A84FF"], ["refresh", "#FF2D55"],
];
const SUMMARY_ICONS: [keyof typeof G, string][] = [["noacct", "#007AFF"], ["noad", "#FF3B30"], ["child", "#FF9500"], ["device", "#34C759"]];

/** Split the policy HTML into lead, "in short" items and one block per numbered section. */
function parse(lang: Lang) {
  const html = PRIVACY_HTML[lang];
  const lead = html.match(/<p class="lead">([\s\S]*?)<\/p>/)?.[1] ?? "";
  const summaryBlock = html.match(/<div class="summary">([\s\S]*?)<\/div>/)?.[1] ?? "";
  const summary = [...summaryBlock.matchAll(/<li>([\s\S]*?)<\/li>/g)].map((m) => m[1]!);
  const body = html.slice(html.indexOf("<h2>"));
  const parts = body.split(/(?=<h2>)/).filter((s) => s.startsWith("<h2>"));
  const sections = parts.map((part) => {
    const m = part.match(/^<h2>(\d+)\.\s*([\s\S]*?)<\/h2>/);
    const n = m ? Number(m[1]) : 0;
    const title = m ? m[2]! : "";
    return { n, title, body: part.replace(/^<h2>[\s\S]*?<\/h2>/, "") };
  });
  return { lead, summary, sections };
}

const CSS = `
:root{color-scheme:light dark;
  --bg:#EEF2FB;--ink:#101426;--soft:#596079;--line:rgba(16,20,38,.08);
  --glass:rgba(255,255,255,.6);--glass2:rgba(255,255,255,.8);--edge:rgba(255,255,255,.85);--hl:rgba(255,255,255,.95);
  --green:#1FA35A;--blue:#2D8CFF;--sh:0 18px 40px -22px rgba(30,40,90,.35)}
@media (prefers-color-scheme:dark){:root{--bg:#080B19;--ink:#F2F4FF;--soft:#A3A9C6;--line:rgba(255,255,255,.08);
  --glass:rgba(32,37,70,.55);--glass2:rgba(40,46,86,.75);--edge:rgba(255,255,255,.14);--hl:rgba(255,255,255,.18);
  --green:#4ED28A;--blue:#5AA8FF;--sh:0 18px 40px -22px rgba(0,0,0,.8)}}
*{box-sizing:border-box}
html,body{margin:0;background:var(--bg);color:var(--ink)}
html{scroll-behavior:smooth;scroll-padding-top:96px}
body{font-family:var(--f-body),-apple-system,BlinkMacSystemFont,"SF Pro Text","Segoe UI",Roboto,sans-serif;font-size:16.5px;line-height:1.7;-webkit-font-smoothing:antialiased;overflow-x:hidden}
html[data-lang="id"] [data-l="en"],html[data-lang="en"] [data-l="id"]{display:none!important}
a{color:var(--blue);text-decoration:none}
a:hover{text-decoration:underline}
h1,h2,h3{font-family:var(--f-round),var(--f-body),sans-serif;margin:0;letter-spacing:-.02em}
.wrap{max-width:1120px;margin:0 auto;padding:0 max(18px,env(safe-area-inset-left))}
.sky{position:fixed;inset:0;z-index:-1;pointer-events:none;overflow:hidden;background:var(--bg)}
.sky i{position:absolute;border-radius:50%;filter:blur(70px);opacity:.7}
.sky .a{width:56vw;height:56vw;left:-18vw;top:-22vw;background:#B8F0D2}
.sky .b{width:50vw;height:50vw;right:-16vw;top:-6vw;background:#CDBBFF}
.sky .c{width:44vw;height:44vw;left:30vw;top:55vh;background:#9CCBFF}
@media (prefers-color-scheme:dark){.sky i{opacity:.28}}
.glass{background:var(--glass);-webkit-backdrop-filter:blur(26px) saturate(1.8);backdrop-filter:blur(26px) saturate(1.8);
  border:1px solid var(--edge);box-shadow:inset 0 1px 0 var(--hl),var(--sh);border-radius:28px}
.si{flex:0 0 auto;width:30px;height:30px;border-radius:8px;display:inline-grid;place-items:center}
.si svg{width:19px;height:19px}

/* floating nav */
.nav{position:sticky;top:max(10px,env(safe-area-inset-top));z-index:30;padding:0 12px;margin-top:10px}
.nav .bar{max-width:1060px;margin:0 auto;display:flex;align-items:center;gap:6px;padding:7px 7px 7px 12px;border-radius:999px}
.brand{display:flex;align-items:center;gap:8px;color:var(--ink);font-family:var(--f-round);font-weight:800;font-size:19px;text-decoration:none!important}
.brand img{width:34px;height:34px;border-radius:10px}
.brand small{font-family:var(--f-body);font-size:13px;font-weight:700;color:var(--soft);padding-left:9px;border-left:1px solid var(--line)}
.links{display:none;gap:2px;margin-left:auto}
.links a{color:var(--ink);font-weight:700;font-size:15px;padding:8px 12px;border-radius:999px;text-decoration:none}
.links a:hover{background:var(--glass2)}
@media(min-width:780px){.links{display:flex}}
.seg{display:flex;margin-left:auto;padding:3px;border-radius:999px;background:var(--line)}
@media(min-width:780px){.seg{margin-left:6px}}
.seg button{font:inherit;font-size:13px;font-weight:800;padding:6px 11px;border-radius:999px;border:0;background:transparent;color:var(--soft);cursor:pointer}
html[data-lang="id"] .seg [data-set-lang="id"],html[data-lang="en"] .seg [data-set-lang="en"]{background:var(--glass2);color:var(--ink);box-shadow:0 2px 8px -3px rgba(0,0,0,.25)}

/* hero */
.hero{padding:40px 0 10px}
.hg{display:grid;gap:22px;align-items:center}
@media(min-width:900px){.hg{grid-template-columns:1.15fr .85fr}}
.chip{display:inline-flex;align-items:center;gap:8px;padding:6px 14px 6px 6px;border-radius:999px;font-weight:700;font-size:14px}
.chip b{background:var(--green);color:#fff;border-radius:999px;padding:3px 10px;font-size:12px}
.hero h1{font-size:clamp(40px,7vw,74px);line-height:1;font-weight:800;margin:16px 0 14px;letter-spacing:-.035em}
.hero h1 .g{background:linear-gradient(95deg,#1FA35A,#18B6A4 45%,#2D8CFF);-webkit-background-clip:text;background-clip:text;color:transparent}
.lead{font-size:18.5px;color:var(--soft);max-width:36em;margin:0}
.lead strong{color:var(--ink)}

/* App Store-style privacy label */
.label{padding:22px;position:relative;overflow:hidden}
.label .k{font-size:13px;font-weight:800;color:var(--soft);text-transform:uppercase;letter-spacing:.05em}
.label .card{margin-top:12px;border-radius:20px;background:var(--glass2);border:1px solid var(--edge);padding:22px 18px;text-align:center}
.label .shield{width:64px;height:64px;margin:0 auto 10px;border-radius:20px;display:grid;place-items:center;background:linear-gradient(150deg,#34C759,#1FA35A);box-shadow:0 12px 24px -12px rgba(31,163,90,.7)}
.label .shield svg{width:38px;height:38px}
.label h2{font-size:24px}
.label p{margin:6px 0 0;color:var(--soft);font-size:15px;line-height:1.5}
.label .mo{position:absolute;right:-18px;bottom:-26px;width:120px;opacity:.95;pointer-events:none}
@media(max-width:520px){.label .mo{width:96px;right:-14px}}
.label .rows{margin-top:12px;display:grid;gap:8px}
.label .rows div{display:flex;align-items:center;gap:10px;font-weight:700;font-size:14.5px;padding-right:90px}

/* "in short": Settings-style grouped list */
.short{margin-top:26px;border-radius:26px;overflow:hidden;padding:4px 0}
.short .row{display:flex;align-items:flex-start;gap:14px;padding:14px 18px;font-weight:600;line-height:1.5}
.short .row+.row{border-top:1px solid var(--line)}
.short .row .si{margin-top:1px}
@media(min-width:900px){.short{display:grid;grid-template-columns:1fr 1fr}.short .row:nth-child(2){border-top:0}.short .row:nth-child(even){border-left:1px solid var(--line)}}

/* body: sticky contents + one card per section */
.layout{display:grid;gap:22px;padding:28px 0 10px}
@media(min-width:960px){.layout{grid-template-columns:290px 1fr;align-items:start}}
.toc{padding:12px;border-radius:24px}
@media(min-width:960px){.toc{position:sticky;top:96px}}
.toc h3{font-size:13px;margin:4px 8px 8px;color:var(--soft);text-transform:uppercase;letter-spacing:.05em;font-family:var(--f-body)}
.toc ol{list-style:none;padding:0;margin:0;display:grid;gap:1px}
.toc a{display:flex;gap:10px;align-items:center;color:var(--ink);font-weight:700;font-size:14.5px;padding:7px 8px;border-radius:12px;line-height:1.3;text-decoration:none}
.toc a:hover{background:var(--glass2)}
.toc .si{width:26px;height:26px;border-radius:7px}.toc .si svg{width:16px;height:16px}
@media(max-width:959px){.toc ol{grid-template-columns:1fr 1fr}}
@media(max-width:560px){.toc ol{grid-template-columns:1fr}}
.doc{display:grid;gap:16px}
.sec{padding:22px 24px 14px}
.sec h2{display:flex;align-items:center;gap:12px;font-size:23px;line-height:1.2;margin-bottom:10px}
.sec h2 .si{width:40px;height:40px;border-radius:11px}.sec h2 .si svg{width:24px;height:24px}
.sec h2 small{display:block;font-family:var(--f-body);font-size:12px;font-weight:800;letter-spacing:.08em;color:var(--soft);text-transform:uppercase}
.sec p,.sec li{color:var(--ink)}
.sec ul{padding-left:0;list-style:none}
.sec li{position:relative;margin:9px 0;padding-left:26px}
.sec li::before{content:"";position:absolute;left:4px;top:.62em;width:8px;height:8px;border-radius:50%;background:var(--green)}
.sec strong{font-weight:800}
.sec .updated{color:var(--soft);font-size:14px}

/* contact */
.contact{margin-top:6px;border-radius:30px;padding:28px 24px;display:grid;gap:16px;align-items:center;position:relative;overflow:hidden;
  background:linear-gradient(140deg,rgba(31,163,90,.92),rgba(24,182,164,.9) 55%,rgba(45,140,255,.9));color:#fff;border:1px solid rgba(255,255,255,.3)}
@media(min-width:760px){.contact{grid-template-columns:1fr auto}}
.contact h2{color:#fff;font-size:28px}
.contact p{color:rgba(255,255,255,.88);margin:6px 0 0}
.contact a.btn{display:inline-flex;align-items:center;gap:8px;padding:14px 22px;border-radius:999px;background:#fff;color:#14533A!important;font-weight:800;white-space:nowrap;text-decoration:none!important;box-shadow:0 10px 24px -12px rgba(0,0,0,.4)}
footer{padding:30px 0 60px;color:var(--soft);font-size:14px;text-align:center}
footer a{margin:0 8px;font-weight:700}
@media (prefers-reduced-motion:reduce){html{scroll-behavior:auto}}
`;

export default function PrivacyPolicyPage() {
  const L = { id: parse("id"), en: parse("en") };
  const shieldSvg = `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 3l7 3v5.5c0 4.6-3 8.2-7 9.5-4-1.3-7-4.9-7-9.5V6z" fill="#fff"/><path d="M8.8 12.2l2.2 2.2 4.3-4.6" fill="none" stroke="#1FA35A" stroke-width="2.3" stroke-linecap="round" stroke-linejoin="round"/></svg>`;
  return (
    <html lang="id" data-lang="id" className={STORE_FONT_VARS} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: LANG_SCRIPT }} />
      </head>
      <body>
        <style dangerouslySetInnerHTML={{ __html: CSS }} />
        <div className="sky" aria-hidden="true"><i className="a" /><i className="b" /><i className="c" /></div>

        <nav className="nav" aria-label="Baby Mo">
          <div className="bar glass">
            <a className="brand" href={asset("/app/")}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={asset("/app-store/v3/icon-128.png")} alt="" width={34} height={34} />
              Baby Mo <small><span data-l="id">Privasi</span><span data-l="en">Privacy</span></small>
            </a>
            <div className="links">
              <a href={asset("/app/")}><span data-l="id">Tentang app</span><span data-l="en">About the app</span></a>
              <a href={asset("/support/")}><span data-l="id">Bantuan</span><span data-l="en">Support</span></a>
            </div>
            <div className="seg" role="group" aria-label="Bahasa / Language">
              <button type="button" data-set-lang="id" lang="id">ID</button>
              <button type="button" data-set-lang="en" lang="en">EN</button>
            </div>
          </div>
        </nav>

        <main>
          <header className="hero">
            <div className="wrap hg">
              <div>
                <span className="chip glass">
                  <b><span data-l="id">Diperbarui</span><span data-l="en">Updated</span></b>
                  <span data-l="id">{PRIVACY_UPDATED.id}</span><span data-l="en">{PRIVACY_UPDATED.en}</span>
                </span>
                <h1>
                  <span data-l="id">Privasi si kecil, <span className="g">kami jaga.</span></span>
                  <span data-l="en">Your child&apos;s privacy, <span className="g">protected.</span></span>
                </h1>
                <p className="lead" data-l="id" dangerouslySetInnerHTML={{ __html: L.id.lead }} />
                <p className="lead" data-l="en" dangerouslySetInnerHTML={{ __html: L.en.lead }} />
              </div>

              <aside className="label glass" aria-label="App privacy">
                <div className="k"><span data-l="id">Privasi aplikasi</span><span data-l="en">App privacy</span></div>
                <div className="card">
                  <div className="shield" dangerouslySetInnerHTML={{ __html: shieldSvg }} />
                  <h2><span data-l="id">Data tidak dikumpulkan</span><span data-l="en">Data Not Collected</span></h2>
                  <p>
                    <span data-l="id">Aplikasi Baby Mo tidak mengumpulkan data apa pun. Semua tersimpan di perangkat Anda.</span>
                    <span data-l="en">The Baby Mo app does not collect any data. Everything stays on your device.</span>
                  </p>
                </div>
                <div className="rows">
                  <div><span dangerouslySetInnerHTML={{ __html: ico("noad", "#FF3B30") }} /><span data-l="id">Tanpa iklan & pelacakan</span><span data-l="en">No ads or tracking</span></div>
                  <div><span dangerouslySetInnerHTML={{ __html: ico("noacct", "#007AFF") }} /><span data-l="id">Tanpa akun & login</span><span data-l="en">No accounts or logins</span></div>
                  <div><span dangerouslySetInnerHTML={{ __html: ico("shield", "#34C759") }} /><span data-l="id">Gerbang orang tua</span><span data-l="en">Parental gate</span></div>
                </div>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img className="mo" src={asset("/baby-mo-poses/baby-mo-pose-25.png")} alt="" width={120} height={120} />
              </aside>
            </div>

            <div className="wrap">
              {(["id", "en"] as const).map((lang) => (
                <div className="short glass" data-l={lang} key={lang}>
                  {L[lang].summary.map((s, i) => {
                    const [g, c] = SUMMARY_ICONS[i] ?? ["shield", "#34C759"];
                    return (
                      <div className="row" key={i}>
                        <span dangerouslySetInnerHTML={{ __html: ico(g, c) }} />
                        <span dangerouslySetInnerHTML={{ __html: s }} />
                      </div>
                    );
                  })}
                </div>
              ))}
            </div>
          </header>

          <div className="wrap layout">
            {(["id", "en"] as const).map((lang) => (
              <nav className="toc glass" data-l={lang} key={lang} aria-label={lang === "id" ? "Daftar isi" : "Contents"}>
                <h3>{lang === "id" ? "Daftar isi" : "Contents"}</h3>
                <ol>
                  {L[lang].sections.map((s) => {
                    const [g, c] = SECTION_ICONS[s.n - 1] ?? ["doc", "#8E8E93"];
                    return (
                      <li key={s.n}>
                        <a href={`#${lang}-${s.n}`}>
                          <span dangerouslySetInnerHTML={{ __html: ico(g, c) }} />
                          <span dangerouslySetInnerHTML={{ __html: s.title }} />
                        </a>
                      </li>
                    );
                  })}
                </ol>
              </nav>
            ))}

            <div className="doc">
              {(["id", "en"] as const).map((lang) =>
                L[lang].sections.map((s) => {
                  const [g, c] = SECTION_ICONS[s.n - 1] ?? ["doc", "#8E8E93"];
                  return (
                    <section className="sec glass" data-l={lang} lang={lang} key={`${lang}-${s.n}`} id={`${lang}-${s.n}`}>
                      <h2>
                        <span dangerouslySetInnerHTML={{ __html: ico(g, c) }} />
                        <span><small>{lang === "id" ? "Bagian" : "Section"} {s.n}</small><span dangerouslySetInnerHTML={{ __html: s.title }} /></span>
                      </h2>
                      <div dangerouslySetInnerHTML={{ __html: s.body }} />
                    </section>
                  );
                })
              )}

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
