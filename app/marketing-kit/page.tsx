import type { Metadata } from "next";
import { STORE_FONT_VARS } from "@/lib/content/store-fonts";
import { asset } from "@/lib/i18n/config";
import {
  ADS, APP_ID, APP_URL, CALENDAR, LINKS, CHANNELS, KPIS, MESSAGES, PERSONAS, POSITIONING, POST_CAPTIONS,
  REEL_SCRIPTS, RULES_DO, RULES_DONT, SEARCH_KEYWORDS, STORY_SETS, TEMPLATES, TONE, type Bi,
} from "@/lib/content/marketing-kit";

/**
 * babymo.id/marketing-kit — the team's playbook for promoting the Baby Mo app: who we talk to,
 * what we say, when, and ready-made stories, posts, carousels, banners, highlight covers and
 * Reels (Bahasa Indonesia + English) made from real app screens and the original Baby Mo renders.
 * Not linked from the site and not indexed. Images live in public/marketing-kit/.
 */
export const metadata: Metadata = {
  title: "Marketing Kit — Baby Mo",
  robots: { index: false, follow: false },
};

const DESIGNS = ["home", "doa", "ramadan", "susun", "wudhu", "watch", "parents", "cta"] as const;
const DESIGN_NAMES: Record<(typeof DESIGNS)[number], string> = {
  home: "01 Kenalan / Meet Baby Mo", doa: "02 Daily du'as", ramadan: "03 Ramadan", susun: "04 Build the Word",
  wudhu: "05 Wudhu", watch: "06 Apple Watch", parents: "07 For parents", cta: "08 Download (App Store)",
};
const REELS = [
  { k: "doa-harian", n: "Doa harian / Daily du'as" }, { k: "wudhu", n: "Wudhu / Wudu" }, { k: "kata-islam", n: "Susun Huruf / Build the Word" },
  { k: "doa-ramadan", n: "Doa Ramadan / Ramadan du'as" }, { k: "pray-with-mo", n: "Sholat Bareng Mo / Pray with Mo" },
  { k: "kebun-ais", n: "Kebun Ais / Ais's Garden" }, { k: "sahabat-hewan", n: "Sahabat Hewan / Animal Friends" }, { k: "tenis-adam", n: "Tenis Kak Adam / Tennis" },
];
const HIGHLIGHTS: [string, string][] = [["doa", "Doa / Du'as"], ["game", "Game / Games"], ["sholat", "Sholat / Prayer"], ["ramadan", "Ramadan"], ["ortu", "Ortu / Parents"], ["unduh", "Unduh / Download"]];

type F = { src: string; thumb: string; name: string; file: string; video?: boolean };
type G = { id: string; title: string; size: string; note: string; cls: string; files: F[] };
const f = (dir: string, base: string, ext: string, name: string, video = false): F =>
  ({ src: `marketing-kit/${dir}/${base}.${ext}`, thumb: `marketing-kit/thumbs/${base}.webp`, name, file: `${base}.${ext}`, video });
const GROUPS: G[] = [];
for (const lang of ["id", "en"] as const) {
  const L = lang === "id" ? "Bahasa Indonesia" : "English";
  GROUPS.push({ id: `stories-${lang}`, title: `Stories · ${L}`, size: "1080 × 1920 · JPG", cls: "tall",
    note: "Instagram/Facebook Stories and WhatsApp Status. Text and buttons sit inside the safe area (clear of the profile bar and reply box). Add the Link sticker to the App Store on frame 08.",
    files: DESIGNS.map((k) => f("stories", `story-${lang}-${k}`, "jpg", DESIGN_NAMES[k])) });
  GROUPS.push({ id: `posts-${lang}`, title: `Feed posts · ${L}`, size: "1080 × 1350 (4:5) · JPG", cls: "post",
    note: "Instagram and Facebook feed. Captions to copy are in “Captions” below.",
    files: DESIGNS.map((k) => f("posts", `post-${lang}-${k}`, "jpg", DESIGN_NAMES[k])) });
  GROUPS.push({ id: `carousel-${lang}`, title: `Carousel “5 alasan / 5 reasons” · ${L}`, size: "1080 × 1350 · 7 slides · JPG", cls: "post",
    note: "Upload in order 1 → 7 as one carousel post. Carousels get saved and shared: ask “Which reason matters most to you?”.",
    files: Array.from({ length: 7 }, (_, i) => f("carousel", `carousel-${lang}-${i + 1}`, "jpg", `Slide ${i + 1}`)) });
  GROUPS.push({ id: `reels-${lang}`, title: `Reels ready to post · ${L}`, size: "1080 × 1920 · MP4 · 12 s (9 s gameplay + 3 s App Store end card) · silent", cls: "tall",
    note: "Real gameplay with the App Store end card. They are silent on purpose: add a soft sound or Mo's voice in the Instagram/TikTok editor, and keep one no-music version. Captions and hooks are in “Reel scripts”.",
    files: REELS.map((r) => f("reels", `reel-${lang}-${r.k}`, "mp4", r.n, true)) });
}
GROUPS.push({ id: "banners", title: "Banners & ads · both languages", size: "1200 × 628 · 1080 × 1080 · 1640 × 624 · JPG", cls: "wide",
  note: "1200 × 628: Facebook/Instagram link ads, WhatsApp and website shares. 1080 × 1080: square ads. 1640 × 624: Facebook page cover (keep the left side clear for the profile picture on desktop).",
  files: [
    ...(["id", "en"] as const).flatMap((lang) => (["home", "ramadan", "doa", "watch"] as const).map((k) => f("banners", `banner-${lang}-${k}`, "jpg", `${lang.toUpperCase()} · 1200×628 · ${k}`))),
    ...(["id", "en"] as const).flatMap((lang) => (["home", "ramadan"] as const).map((k) => f("banners", `square-${lang}-${k}`, "jpg", `${lang.toUpperCase()} · 1080×1080 · ${k}`))),
    ...(["id", "en"] as const).map((lang) => f("banners", `cover-${lang}`, "jpg", `${lang.toUpperCase()} · Facebook cover 1640×624`)),
  ] });
GROUPS.push({ id: "highlights", title: "Instagram highlight covers", size: "1080 × 1920 · PNG", cls: "tall",
  note: "Add a story with this image, then use it as the highlight cover (Instagram crops the centre circle). Name the highlights in Indonesian or English.",
  files: HIGHLIGHTS.map(([k, n]) => f("highlights", `highlight-${k}`, "png", n)) });

const CSS = `
:root{color-scheme:light;--bg:#F6F7F4;--card:#FFFFFF;--ink:#16201B;--soft:#5D6A63;--line:#E2E6E1;--accent:#12A15A;--accent-ink:#FFFFFF;--warn:#B35C00;--warn-bg:#FFF4DE;--chip:#EEF4F0;--bad:#C92A2A}
@media (prefers-color-scheme:dark){:root{color-scheme:dark;--bg:#101412;--card:#181E1B;--ink:#E9EFEB;--soft:#9DABA3;--line:#28312C;--accent:#4FD08D;--accent-ink:#06231A;--warn:#FFC266;--warn-bg:#2A2214;--chip:#1F2824;--bad:#FF8787}}
*{box-sizing:border-box}html,body{margin:0;background:var(--bg);color:var(--ink)}
body{font-family:var(--f-body),system-ui,sans-serif;font-size:15px;line-height:1.55}
.w{max-width:1120px;margin:0 auto;padding-block:28px 64px;padding-left:max(16px,env(safe-area-inset-left,0px));padding-right:max(16px,env(safe-area-inset-right,0px))}
h1,h2,h3{font-family:var(--f-round),var(--f-body),sans-serif;margin:0;letter-spacing:-.01em}
h1{font-size:clamp(30px,5vw,44px);line-height:1.05}h2{font-size:26px;margin:48px 0 6px;scroll-margin-top:12px}h3{font-size:18px}
.lead{color:var(--soft);max-width:68ch;margin:8px 0 0}
.top{display:flex;gap:18px;align-items:center;flex-wrap:wrap}
.top img{width:84px;height:84px;border-radius:20px;box-shadow:0 10px 24px -14px rgba(0,0,0,.5)}
.btn{display:inline-flex;align-items:center;gap:8px;min-height:44px;padding:10px 18px;border-radius:12px;border:1px solid var(--line);background:var(--card);color:var(--ink);font:inherit;font-weight:800;cursor:pointer;text-decoration:none}
.btn.pri{background:var(--accent);border-color:var(--accent);color:var(--accent-ink)}
.btn:disabled{opacity:.6;cursor:wait}.btn:focus-visible{outline:3px solid var(--accent);outline-offset:2px}
.bar{display:flex;gap:10px;flex-wrap:wrap;align-items:center;margin-top:18px}
.toc{display:flex;gap:8px;flex-wrap:wrap;margin-top:16px}.toc a{font-weight:700;color:var(--ink);background:var(--chip);border-radius:999px;padding:6px 12px;text-decoration:none;font-size:14px}
.card,.group{margin-top:14px;background:var(--card);border:1px solid var(--line);border-radius:18px;padding:16px;min-width:0}
.cards{display:grid;grid-template-columns:1fr;gap:12px;margin-top:12px}.cards .card{margin-top:0}
@media(min-width:760px){.cards{grid-template-columns:1fr 1fr}.cards.three{grid-template-columns:repeat(3,1fr)}}
.card p{margin:6px 0 0}.card .k{font-size:12px;font-weight:800;letter-spacing:.08em;text-transform:uppercase;color:var(--accent)}
.muted{color:var(--soft);font-size:14px}
.big{font-size:17px;font-weight:700;line-height:1.5;margin:0}
.ghead{display:flex;justify-content:space-between;align-items:flex-start;gap:12px;flex-wrap:wrap;margin-bottom:12px}
.ghead p{margin:2px 0 0;color:var(--soft);font-size:14px;max-width:70ch}
.grid{display:grid;gap:12px;grid-template-columns:repeat(auto-fill,minmax(118px,1fr))}
.grid.post{grid-template-columns:repeat(auto-fill,minmax(150px,1fr))}.grid.wide{grid-template-columns:repeat(auto-fill,minmax(230px,1fr))}
.tile{display:flex;flex-direction:column;gap:6px;min-width:0;position:relative}
.tile img{width:100%;height:auto;border-radius:10px;border:1px solid var(--line);background:#fff;display:block}
.tile .play{position:absolute;left:8px;top:8px;background:rgba(0,0,0,.65);color:#fff;border-radius:999px;font-size:12px;font-weight:800;padding:3px 9px;text-decoration:none}
.tile a.dl{font-size:13px;font-weight:800;color:var(--accent);text-decoration:none;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}
.tbl{background:var(--card);border:1px solid var(--line);border-radius:16px;padding:4px 6px;margin-top:12px;overflow-x:auto}
table{width:100%;border-collapse:collapse;font-size:14.5px}th{text-align:left;font-size:12px;letter-spacing:.06em;text-transform:uppercase;color:var(--soft);padding:10px}
td{padding:10px;border-top:1px solid var(--line);vertical-align:top}td:first-child{font-weight:800;white-space:nowrap}
.val{margin-top:8px;white-space:pre-wrap;word-break:break-word;background:var(--chip);border-radius:10px;padding:10px 12px;font-size:14.5px}
.vhead{display:flex;justify-content:space-between;align-items:center;gap:8px;margin-top:10px}
.vhead b{font-size:13px;color:var(--soft);letter-spacing:.04em}
.copy{min-height:34px;padding:5px 12px;font-size:13.5px}
ol.scenes{margin:8px 0 0;padding-left:20px}ol.scenes li{margin:2px 0}
.tag{display:inline-block;font-size:12px;font-weight:800;background:var(--chip);border-radius:999px;padding:2px 9px;margin-left:6px;color:var(--soft)}
ul.rules{margin:8px 0 0;padding-left:20px}ul.rules li{margin:5px 0}
.yes h3{color:var(--accent)}.no h3{color:var(--bad)}
.note{background:var(--warn-bg);border-radius:14px;padding:12px 14px;margin-top:12px;font-size:14.5px}.note b{color:var(--warn)}
.builder{display:grid;gap:10px;margin-top:10px}@media(min-width:760px){.builder{grid-template-columns:1fr 1fr}}
.builder label{display:flex;flex-direction:column;gap:4px;font-weight:800;font-size:14px}
.builder input{font:inherit;padding:10px 12px;border-radius:10px;border:1px solid var(--line);background:var(--bg);color:var(--ink);min-height:44px}
.links{list-style:none;padding:0;margin:8px 0 0;display:grid;grid-template-columns:minmax(0,1fr);gap:6px}
.links li{display:flex;align-items:center;gap:8px;justify-content:space-between;border-top:1px solid var(--line);padding-top:6px;min-width:0}
.links li .copy{flex:0 0 auto}
.links a{flex:1 1 auto;min-width:0;font-weight:800;color:var(--ink);text-decoration:none}.links a small{display:block;font-weight:600;font-size:12.5px;color:var(--accent);overflow:hidden;text-overflow:ellipsis;white-space:nowrap}
.toast{position:fixed;left:50%;bottom:calc(20px + env(safe-area-inset-bottom,0px));transform:translateX(-50%);background:var(--ink);color:var(--bg);padding:10px 16px;border-radius:999px;font-weight:800;opacity:0;transition:opacity .2s;pointer-events:none}
.toast.on{opacity:1}
`;

const SCRIPT = `
(function(){
var toast=document.getElementById('toast'),tt;
function say(m){toast.textContent=m;toast.classList.add('on');clearTimeout(tt);tt=setTimeout(function(){toast.classList.remove('on')},1600)}
document.addEventListener('click',function(e){
  var c=e.target.closest('[data-copy]'); if(c){var el=document.getElementById(c.getAttribute('data-copy')),txt=el.value!==undefined&&el.tagName==='INPUT'?el.value:el.textContent;
    (navigator.clipboard?navigator.clipboard.writeText(txt):Promise.reject()).then(function(){say('Copied')}).catch(function(){var r=document.createRange();r.selectNodeContents(el);var s=getSelection();s.removeAllRanges();s.addRange(r);say('Selected — press Copy')});}
  var z=e.target.closest('[data-zip]'); if(z){zip(z);}
});
function zip(btn){
  if(!window.JSZip){say('ZIP tool is still loading — try again');return;}
  var sel=btn.getAttribute('data-zip'),files=[].slice.call(document.querySelectorAll(sel==='all'?'[data-file]':'#'+sel+' [data-file]'));
  var z=new JSZip(),done=0,label=btn.textContent; btn.disabled=true;
  Promise.all(files.map(function(a){return fetch(a.href).then(function(r){return r.blob()}).then(function(b){z.file(a.getAttribute('data-file'),b);done++;btn.textContent='Preparing '+done+'/'+files.length+'…';})}))
  .then(function(){return z.generateAsync({type:'blob'})}).then(function(b){var u=URL.createObjectURL(b),a=document.createElement('a');a.href=u;a.download=(sel==='all'?'baby-mo-marketing-kit':'baby-mo-'+sel)+'.zip';document.body.appendChild(a);a.click();a.remove();setTimeout(function(){URL.revokeObjectURL(u)},4000);})
  .catch(function(){say('Download failed — check your connection')}).then(function(){btn.disabled=false;btn.textContent=label;});
}
var pt=document.getElementById('pt'),ct=document.getElementById('ct'),out=document.getElementById('camp');
function build(){var p=(pt.value||'').replace(/[^0-9]/g,''),c=(ct.value||'').trim().toLowerCase().replace(/[^a-z0-9-_]+/g,'-').slice(0,40);
  out.textContent=p&&c?'https://apps.apple.com/app/apple-store/id${APP_ID}?pt='+p+'&ct='+c+'&mt=8':'Fill in both fields';
  try{localStorage.setItem('mk-pt',p)}catch(e){}}
try{pt.value=localStorage.getItem('mk-pt')||''}catch(e){}
pt.addEventListener('input',build);ct.addEventListener('input',build);build();
})();`;

function CopyBlock({ id, label, text }: { id: string; label: string; text: string }) {
  return (
    <>
      <div className="vhead"><b>{label}</b><button className="btn copy" type="button" data-copy={id}>Copy</button></div>
      <div className="val" id={id}>{text}</div>
    </>
  );
}
const Both = ({ id, t, labels = ["BAHASA INDONESIA", "ENGLISH"] }: { id: string; t: Bi; labels?: [string, string] | string[] }) => (
  <><CopyBlock id={`${id}-id`} label={labels[0]} text={t.id} /><CopyBlock id={`${id}-en`} label={labels[1]} text={t.en} /></>
);

export default function MarketingKit() {
  return (
    <html lang="en" className={STORE_FONT_VARS}>
      <head>
        <script src={asset("/vendor/jszip-3.10.1.min.js")} defer />
      </head>
      <body>
        <style dangerouslySetInnerHTML={{ __html: CSS }} />
        <main className="w">
          <div className="top">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={asset("/app-store-kit/app-icon-1024.png")} alt="Baby Mo app icon" width={84} height={84} />
            <div>
              <h1>Baby Mo · Marketing Kit</h1>
              <p className="lead">The team playbook for bringing Baby Mo to the right families: who we talk to, what we say, when we post, and ready-made stories, posts, banners and Reels in Bahasa Indonesia and English — all made from real app screens and the original Baby Mo renders.</p>
            </div>
          </div>
          <div className="bar">
            <button className="btn pri" data-zip="all" type="button">⬇ Download all designs &amp; Reels (ZIP)</button>
            <a className="btn" href={APP_URL}>App Store page ↗</a>
            <a className="btn" href={asset("/id/studio/")}>🎬 Promo Studio ↗</a>
            <a className="btn" href={asset("/app-store-kit/")}>App Store Kit ↗</a>
          </div>
          <nav className="toc" aria-label="Sections">
            <a href="#links">Links</a><a href="#why">Positioning</a><a href="#who">Audience</a><a href="#where">Channels</a><a href="#when">Calendar</a>
            <a href="#reels">Reel scripts</a><a href="#stories">Story sets</a><a href="#designs">Designs &amp; Reels</a><a href="#captions">Captions</a>
            <a href="#ads">Ads</a><a href="#outreach">Outreach</a><a href="#rules">Rules</a><a href="#measure">Measure</a>
          </nav>

          <h2 id="links">Links</h2>
          <p className="lead">Every Baby Mo page and tool in one place. Tap Copy to share a link.</p>
          <div className="cards">
            {LINKS.map((g, gi) => (
              <div className="card" key={g.group}>
                <h3>{g.group}</h3>
                {g.note ? <p className="muted">{g.note}</p> : null}
                <ul className="links">
                  {g.items.map((it, i) => (
                    <li key={it.url}>
                      <a href={it.url} target="_blank" rel="noopener">{it.name}<small id={`ln-${gi}-${i}`}>{it.url.replace(/^mailto:/, "")}</small></a>
                      <button className="btn copy" type="button" data-copy={`ln-${gi}-${i}`} aria-label={`Copy ${it.name}`}>Copy</button>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <h2 id="why">Positioning</h2>
          <div className="card">
            <p className="k">One sentence</p>
            <p className="big" lang="id">{POSITIONING.id}</p>
            <p className="muted" style={{ marginTop: 8 }}>{POSITIONING.en}</p>
          </div>
          <div className="cards">
            {MESSAGES.map((m, i) => (
              <div className="card" key={i}>
                <p className="k">Message {i + 1}</p>
                <h3 style={{ marginTop: 4 }}>{m.t.id}</h3>
                <p className="muted">{m.t.en}</p>
                <p>{m.d.id}</p>
                <p className="muted">{m.d.en}</p>
              </div>
            ))}
            <div className="card">
              <p className="k">Tone of voice</p>
              <p>{TONE.id}</p>
              <p className="muted">{TONE.en}</p>
            </div>
          </div>

          <h2 id="who">Who we talk to</h2>
          <p className="lead">Baby Mo is for children aged 2–8, but <b>parents and teachers decide</b>, so every post and ad speaks to them. Baby Mo runs on iPhone, iPad and Apple Watch only, so we aim for families with Apple devices.</p>
          <div className="cards">
            {PERSONAS.map((p) => (
              <div className="card" key={p.name}>
                <p className="k">{p.lang}</p>
                <h3 style={{ marginTop: 4 }}>{p.name}</h3>
                <p><b>Who:</b> {p.who}</p>
                <p><b>Cares about:</b> {p.cares}</p>
                <p><b>Say:</b> {p.msg}</p>
                <p className="muted"><b>Find them on:</b> {p.where}</p>
              </div>
            ))}
          </div>

          <h2 id="where">Channels &amp; rhythm</h2>
          <div className="tbl"><table>
            <thead><tr><th>Channel</th><th>What we post</th><th>How often</th></tr></thead>
            <tbody>{CHANNELS.map((c) => <tr key={c.ch}><td>{c.ch}</td><td>{c.what}</td><td>{c.cadence}</td></tr>)}</tbody>
          </table></div>

          <h2 id="when">Calendar · Nov 2026 → Idul Adha 2027</h2>
          <p className="lead">Islamic dates follow the Umm al-Qura calendar and can move a day with the local announcement. Ramadan (from about 8 Feb) is the biggest moment of the year, and the app&apos;s Ramadan theme switches on by itself.</p>
          <div className="tbl"><table>
            <thead><tr><th>When</th><th>Moment</th><th>What we do</th><th>Use</th></tr></thead>
            <tbody>{CALENDAR.map((c) => <tr key={c.date}><td>{c.date}</td><td><b>{c.title}</b></td><td>{c.what}</td><td className="muted">{c.assets}</td></tr>)}</tbody>
          </table></div>

          <h2 id="reels">Reel scripts</h2>
          <p className="lead">Ten short videos (10–15 s). The first two seconds decide everything: start with the hook on screen. Film real moments (hands-only shots are fine), screen-record the app, or use the ready Reels below. <b>🎬 Studio</b> opens the Promo Studio with that script already set up (game, template, hook text and App Store ending): choose 9:16, 4:5 or 1:1 and download the video.</p>
          <div className="cards">
            {REEL_SCRIPTS.map((r) => (
              <div className="card" key={r.id}>
                <p className="k">{r.who}</p>
                <h3 style={{ marginTop: 4 }}>{r.title}</h3>
                <p><b>Hook:</b> {r.hook.id}<br /><span className="muted">{r.hook.en}</span></p>
                <ol className="scenes">{r.scenes.map((s, i) => <li key={i}>{s}</li>)}</ol>
                <p><b>On-screen text:</b> {r.text.id} <span className="muted">· {r.text.en}</span></p>
                <p className="muted"><b>Use:</b> {r.asset}</p>
                <div className="bar" style={{ marginTop: 10 }}>
                  <a className="btn copy" href={asset(`/id/studio/?preset=${r.id}&lang=id`)}>🎬 Studio · ID</a>
                  <a className="btn copy" href={asset(`/en/studio/?preset=${r.id}&lang=en`)}>🎬 Studio · EN</a>
                </div>
                <CopyBlock id={`${r.id}-cid`} label="CAPTION · ID" text={`${r.cap.id}\n\n${r.tags.id}`} />
                <CopyBlock id={`${r.id}-cen`} label="CAPTION · EN" text={`${r.cap.en}\n\n${r.tags.en}`} />
              </div>
            ))}
          </div>

          <h2 id="stories">Story sets</h2>
          <p className="lead">Four frames each. Use the story designs below, add one interactive sticker (poll, quiz, question or slider), and finish with the Link sticker to the App Store. Save the best ones to highlights.</p>
          <div className="cards three">
            {STORY_SETS.map((s) => (
              <div className="card" key={s.id}>
                <h3>{s.title}</h3>
                <ol className="scenes">{s.frames.map((fr, i) => <li key={i}>{fr.id}<br /><span className="muted">{fr.en}</span></li>)}</ol>
              </div>
            ))}
          </div>

          <h2 id="designs">Designs &amp; Reels to download</h2>
          <p className="lead">Made from real captures of the current app (games build v296) and the original Baby Mo renders. Tap a picture to open it full size, or download a whole group as a ZIP.</p>
          {GROUPS.map((g) => (
            <section className="group" id={g.id} key={g.id}>
              <div className="ghead">
                <div><h3>{g.title}</h3><p>{g.size} · {g.files.length} files · {g.note}</p></div>
                <button className="btn" data-zip={g.id} type="button">⬇ Download group (ZIP)</button>
              </div>
              <div className={`grid ${g.cls}`}>
                {g.files.map((x) => (
                  <div className="tile" key={x.src}>
                    <a href={asset("/" + x.src)} target="_blank" rel="noopener">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img src={asset("/" + x.thumb)} alt={x.name} loading="lazy" />
                    </a>
                    {x.video ? <a className="play" href={asset("/" + x.src)} target="_blank" rel="noopener">▶ 12 s</a> : null}
                    <a className="dl" href={asset("/" + x.src)} download data-file={x.file}>⬇ {x.name}</a>
                  </div>
                ))}
              </div>
            </section>
          ))}
          <div className="note"><b>More videos:</b> the <a href={asset("/id/studio/")}>Promo Studio</a> makes animated Reels, Stories and feed videos (9:16, 4:5, 1:1) for any game in a few clicks: 24 templates including <a href={asset("/id/studio/?preset=r7")}>Ramadan hari ke-…</a>, <a href={asset("/id/studio/?preset=eid")}>Selamat Idul Fitri</a>, <a href={asset("/id/studio/?preset=r6")}>Apple Watch</a> and <a href={asset("/id/studio/?preset=r5")}>doa di mobil (CarPlay)</a>. It ends with the App Store button by default (switch to “web games” only for play.babymo.id posts). The plain 9-second gameplay clips for every game are on each game&apos;s page under <a href={asset("/id/permainan/")}>babymo.id/permainan</a>.</div>

          <h2 id="captions">Captions for the posts</h2>
          <p className="lead">One caption per design, in both languages. Add 3–6 hashtags from the Reel scripts above; more is not better.</p>
          <div className="cards">
            {POST_CAPTIONS.map((c) => (
              <div className="card" key={c.key}>
                <h3>{c.key === "carousel" ? "Carousel “5 alasan”" : DESIGN_NAMES[c.key as (typeof DESIGNS)[number]]}</h3>
                <Both id={`pc-${c.key}`} t={c.cap} />
              </div>
            ))}
          </div>

          <h2 id="ads">Ads</h2>
          <p className="lead"><b>Meta (Instagram/Facebook):</b> an App promotion campaign to the App Store page; audience parents aged 24–44 in Indonesia, Malaysia, Singapore and Brunei (ID set) or the UK, US, Australia, Canada and the Gulf (EN set); devices iOS only; interests parenting, early childhood education and Islamic content. Never target children. Test three creatives (a Reel, a story, a carousel), keep the winner, refresh every two weeks. <b>Apple Search Ads:</b> bid on the keywords below and on “Baby Mo”.</p>
          <div className="cards three">
            {ADS.map((a, i) => (
              <div className="card" key={i}>
                <h3>{a.label}</h3>
                <Both id={`ad${i}p`} t={a.primary} labels={["PRIMARY TEXT · ID", "PRIMARY TEXT · EN"]} />
                <Both id={`ad${i}h`} t={a.headline} labels={["HEADLINE · ID", "HEADLINE · EN"]} />
              </div>
            ))}
          </div>
          <div className="card">
            <h3>Apple Search Ads keywords</h3>
            <Both id="kw" t={SEARCH_KEYWORDS} />
          </div>

          <h2 id="outreach">Outreach templates</h2>
          <p className="lead">For creators and schools, send <b>promo codes</b> from App Store Connect → Promo Codes (check the current limit there) so they can try the app. Give each creator their own campaign link (see “Measure”).</p>
          <div className="cards">
            {TEMPLATES.map((t, i) => (
              <div className="card" key={i}>
                <h3>{t.title}</h3>
                <Both id={`tpl${i}`} t={t.body} />
              </div>
            ))}
          </div>

          <h2 id="rules">Rules</h2>
          <div className="cards">
            <div className="card yes"><h3>✓ Do</h3><ul className="rules">{RULES_DO.map((r) => <li key={r}>{r}</li>)}</ul></div>
            <div className="card no"><h3>✕ Don&apos;t</h3><ul className="rules">{RULES_DONT.map((r) => <li key={r}>{r}</li>)}</ul></div>
          </div>

          <h2 id="measure">Measure</h2>
          <div className="card">
            <h3>Campaign link builder</h3>
            <p className="muted">App Store Connect → Analytics → Acquisition → Campaigns shows your <b>provider token</b> (pt). Make one link per channel or creator (e.g. <code>ig-reel-ramadan</code>, <code>wa-launch</code>, <code>creator-ummu-aisyah</code>); App Analytics then shows views and downloads for each. The provider token is remembered in this browser only.</p>
            <div className="builder">
              <label>Provider token (pt)<input id="pt" inputMode="numeric" placeholder="e.g. 123456789" autoComplete="off" /></label>
              <label>Campaign name (ct)<input id="ct" placeholder="e.g. ig-reel-ramadan" autoComplete="off" /></label>
            </div>
            <div className="vhead"><b>LINK</b><button className="btn copy" type="button" data-copy="camp">Copy</button></div>
            <div className="val" id="camp">Fill in both fields</div>
          </div>
          <div className="card">
            <h3>What to watch</h3>
            <ul className="rules">{KPIS.map((k) => <li key={k}>{k}</li>)}</ul>
          </div>
          <div id="toast" className="toast" role="status" aria-live="polite" />
        </main>
        <script dangerouslySetInnerHTML={{ __html: SCRIPT }} />
      </body>
    </html>
  );
}
