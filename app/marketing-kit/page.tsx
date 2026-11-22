import type { Metadata } from "next";
import { STORE_FONT_VARS } from "@/lib/content/store-fonts";
import { asset } from "@/lib/i18n/config";
import {
  ADS, APP_ID, APP_URL, BIG_PICTURE, CALENDAR, CORE_MESSAGE, FOUNDATION, FUNNEL, GOALS, IDEAL, LINKS, PHASES, SERIES, TARGETS, THE_GOAL, VISION, CHANNELS, KPIS, MESSAGES, PERSONAS, POSITIONING, POST_CAPTIONS,
  REEL_SCRIPTS, RULES_DO, RULES_DONT, SEARCH_KEYWORDS, STORY_SETS, TEMPLATES, TIKTOK, TIKTOK_FIXES, TIKTOK_POSTING, TIKTOK_RISKS, TONE, type Bi,
} from "@/lib/content/marketing-kit";

/**
 * babymo.id/marketing-kit — the team's growth strategy and playbook for the Baby Mo app (styled like babymo.id:
 * sky hero with Mo, Ais and Kak Adam, coloured section pills): the big picture, core message, ideal buyer,
 * 90-day plan, targets, foundation checklist, content engine, who we talk to,
 * what we say, when, and ready-made stories, posts, carousels, banners, highlight covers and
 * Reels (Bahasa Indonesia + English) made from real app screens and the original Baby Mo renders, and three
 * TikTok videos (real 1080p app footage with the app's own sound, public/marketing-kit/tiktok/).
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
    note: "Real gameplay with the App Store end card, for Instagram/Facebook. They are silent: add a soft sound or Mo's voice in the Instagram editor, and keep one no-music version. For TikTok use the three TikTok videos above. Captions and hooks are in “Reel scripts”.",
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
:root{color-scheme:light;--bg:#F7FBF4;--card:#FFFFFF;--ink:#152230;--soft:#5B6472;--line:#E3E8E1;--accent:#12A15A;--accent-ink:#FFFFFF;--warn:#B35C00;--warn-bg:#FFF4DE;--chip:#EEF4F0;--bad:#C92A2A;
 --sky1:#CDEBFF;--sky2:#EAF7FF;--hill1:#9BD77F;--hill2:#6CC35A;--wood:#E9C58F;--wood2:#C99657;--shadow:0 18px 40px -26px rgba(20,60,40,.45)}
@media (prefers-color-scheme:dark){:root{color-scheme:dark;--bg:#0F1613;--card:#18211D;--ink:#EEF3EF;--soft:#A6B2AB;--line:#2A3530;--accent:#5CD394;--accent-ink:#06231A;--warn:#FFC266;--warn-bg:#2A2214;--chip:#1F2A25;--bad:#FF8787;
 --sky1:#132341;--sky2:#0F1A2E;--hill1:#1F4A33;--hill2:#173A28;--wood:#5A4326;--wood2:#7A5A33;--shadow:0 18px 40px -26px rgba(0,0,0,.8)}}
*{box-sizing:border-box}html,body{margin:0;background:var(--bg);color:var(--ink)}
body{font-family:var(--f-body),system-ui,sans-serif;font-size:15px;line-height:1.55}
a{color:var(--accent)}
.w{max-width:1160px;margin:0 auto;padding-block:0 64px;padding-left:max(16px,env(safe-area-inset-left,0px));padding-right:max(16px,env(safe-area-inset-right,0px))}
h1,h2,h3{font-family:var(--f-round),var(--f-body),sans-serif;margin:0;letter-spacing:-.01em;line-height:1.1}
h3{font-size:19px}
.lead{color:var(--soft);max-width:72ch;margin:8px 0 0}
.muted{color:var(--soft);font-size:14px}
/* hero */
.hero{position:relative;overflow:hidden;border-radius:0 0 36px 36px;margin:0 calc(-1*max(16px,env(safe-area-inset-left,0px))) 0;padding:28px max(16px,env(safe-area-inset-left,0px)) 0;
 background:radial-gradient(60% 60% at 85% 0%,rgba(255,236,170,.75),transparent 60%),linear-gradient(180deg,var(--sky1),var(--sky2) 70%)}
.hero .cl{position:absolute;background:#fff;border-radius:999px;opacity:.85;filter:blur(.3px)}
@media (prefers-color-scheme:dark){.hero .cl{opacity:.08}}
.hgrid{position:relative;display:grid;gap:18px;align-items:end;max-width:1160px;margin:0 auto}
@media(min-width:900px){.hgrid{grid-template-columns:1.25fr .75fr}}
.brand{display:flex;align-items:center;gap:10px;font:800 15px var(--f-round);color:var(--ink)}
.brand img{width:44px;height:44px;border-radius:12px;box-shadow:0 8px 18px -10px rgba(0,0,0,.5)}
.hero h1{font-size:clamp(38px,6.4vw,66px);margin-top:14px;color:#1C5B3A}
@media (prefers-color-scheme:dark){.hero h1{color:#BDF0D0}}
.hero h1 span{color:var(--accent);position:relative;white-space:nowrap}
.hero h1 span::after{content:"";position:absolute;left:4%;right:4%;bottom:-.08em;height:.12em;border-radius:99px;background:#FFC93D}
.hero .sub{font-size:18px;color:var(--soft);max-width:44ch;margin:14px 0 0}
.bar{display:flex;gap:10px;flex-wrap:wrap;align-items:center;margin-top:18px}
.btn{display:inline-flex;align-items:center;gap:8px;min-height:44px;padding:10px 18px;border-radius:14px;border:1px solid var(--line);background:var(--card);color:var(--ink);font:inherit;font-weight:800;cursor:pointer;text-decoration:none;box-shadow:0 6px 14px -12px rgba(0,0,0,.5)}
.btn.pri{background:var(--accent);border-color:var(--accent);color:var(--accent-ink)}
.btn:disabled{opacity:.6;cursor:wait}.btn:focus-visible{outline:3px solid var(--accent);outline-offset:2px}
.sign{position:relative;justify-self:end;background:linear-gradient(180deg,var(--wood),var(--wood2));border-radius:16px;padding:14px 18px;transform:rotate(-2deg);box-shadow:var(--shadow);max-width:290px;width:100%}
.sign::before,.sign::after{content:"";position:absolute;bottom:-34px;width:12px;height:36px;background:var(--wood2);border-radius:4px}.sign::before{left:24%}.sign::after{right:24%}
.sign li{list-style:none;display:flex;gap:8px;align-items:center;font:800 17px var(--f-round);color:#4A2E0C;padding:3px 0}
@media (prefers-color-scheme:dark){.sign li{color:#FBE9CC}}
.sign ul{margin:0;padding:0}.sign li::before{content:"✓";display:grid;place-items:center;width:22px;height:22px;border-radius:50%;background:#12A15A;color:#fff;font-size:13px;flex:0 0 auto}
.family{position:relative;display:flex;align-items:flex-end;justify-content:center;gap:0;margin-top:26px;height:clamp(150px,22vw,230px)}
.family img{height:100%;width:auto;margin:0 -3%;filter:drop-shadow(0 12px 12px rgba(20,60,40,.25))}
.family img.adam{height:107%}
.hills{position:relative;height:56px;margin:-30px calc(-1*max(16px,env(safe-area-inset-left,0px))) 0;background:radial-gradient(70% 140% at 25% 100%,var(--hill1) 60%,transparent 61%),radial-gradient(70% 160% at 80% 100%,var(--hill2) 60%,transparent 61%)}
/* sticky nav */
.toc{position:sticky;top:0;z-index:5;display:flex;gap:8px;overflow-x:auto;padding:10px 2px;margin:0 0 6px;background:color-mix(in srgb,var(--bg) 88%,transparent);backdrop-filter:blur(10px);-webkit-backdrop-filter:blur(10px);scrollbar-width:none}
.toc::-webkit-scrollbar{display:none}
.toc a{flex:0 0 auto;font-weight:800;color:var(--ink);background:var(--card);border:1px solid var(--line);border-radius:999px;padding:7px 13px;text-decoration:none;font-size:14px}
/* section headers: coloured pill like the reference */
.sec{margin-top:44px;scroll-margin-top:62px}
.sh{display:inline-flex;flex-wrap:wrap;align-items:center;gap:4px 10px;line-height:1.15;padding:8px 18px 8px 10px;border-radius:999px;background:var(--c);color:#fff;font:800 clamp(20px,3vw,25px) var(--f-round);box-shadow:0 10px 22px -14px var(--c)}
.sh i{font-style:normal;display:grid;place-items:center;width:34px;height:34px;border-radius:50%;background:rgba(255,255,255,.25);font-size:18px}
.sh small{font:700 14px var(--f-body);opacity:.9}@media(max-width:600px){.sh small{flex-basis:100%;padding-left:44px}}
.tint{background:color-mix(in srgb,var(--c) 9%,var(--card));border:1px solid color-mix(in srgb,var(--c) 24%,var(--line))}
.card,.group{margin-top:14px;background:var(--card);border:1px solid var(--line);border-radius:22px;padding:18px;min-width:0;box-shadow:var(--shadow)}
.cards{display:grid;grid-template-columns:minmax(0,1fr);gap:14px;margin-top:14px}.cards .card{margin-top:0}
@media(min-width:760px){.cards{grid-template-columns:repeat(2,minmax(0,1fr))}.cards.three{grid-template-columns:repeat(3,minmax(0,1fr))}.cards.four{grid-template-columns:repeat(4,minmax(0,1fr))}}
.card p{margin:6px 0 0}.card .k{font-size:12px;font-weight:800;letter-spacing:.08em;text-transform:uppercase;color:var(--accent)}
.big{font-size:17px;font-weight:700;line-height:1.5;margin:0}
/* funnel */
.funnel{display:grid;gap:10px;margin-top:14px}
.fstep{display:grid;grid-template-columns:56px minmax(0,1fr);gap:14px;align-items:center;background:var(--card);border:1px solid var(--line);border-radius:20px;padding:12px 16px;box-shadow:var(--shadow)}
@media(min-width:760px){.fstep{grid-template-columns:56px 180px minmax(0,1fr) minmax(0,1fr)}.fstep>:not(.ic){grid-column:auto}.fstep .ic{grid-row:auto}}
.fstep>:not(.ic){grid-column:2}.fstep .ic{grid-row:span 3;place-items:center;width:56px;height:56px;border-radius:18px;background:var(--chip);font-size:28px}
.fstep b{font:800 21px var(--f-round)}.fstep .how{color:var(--accent);font-weight:700;font-size:14px}
/* core message */
.quote{text-align:center;padding:26px 18px}
.quote q{display:block;font:800 clamp(28px,4.6vw,44px)/1.1 var(--f-round);quotes:"“" "”"}
.quote q span{color:var(--accent)}
.pillars{display:flex;flex-wrap:wrap;justify-content:center;gap:10px;margin-top:16px}
.pillars div{display:grid;place-items:center;gap:4px;width:92px;padding:12px 6px;border-radius:18px;background:var(--card);border:1px solid var(--line);font-weight:800;font-size:13.5px}
.pillars div span{font-size:28px;line-height:1}
.promise{display:inline-block;margin-top:16px;padding:10px 18px;border-radius:999px;background:#FFE68A;color:#4A3500;font:800 17px var(--f-round)}
/* ideal customer */
.ideal{display:grid;gap:16px}@media(min-width:900px){.ideal{grid-template-columns:240px minmax(0,1fr)}}
.avatar{display:grid;place-items:center;text-align:center;border-radius:22px;padding:18px;background:linear-gradient(160deg,#FFE3EC,#E8F4FF)}
@media (prefers-color-scheme:dark){.avatar{background:linear-gradient(160deg,#3A2433,#1E2B44)}}
.avatar .face{font-size:72px;line-height:1}.avatar b{font:800 22px var(--f-round);margin-top:6px}
.facts{display:grid;grid-template-columns:minmax(0,1fr);gap:8px}
@media(min-width:760px){.facts{grid-template-columns:repeat(2,minmax(0,1fr))}}
.facts div{background:var(--chip);border-radius:14px;padding:10px 12px}.facts dt{font-size:12px;font-weight:800;letter-spacing:.06em;text-transform:uppercase;color:var(--accent)}.facts dd{margin:2px 0 0}
/* timeline */
.tl{position:relative;display:grid;gap:14px;margin-top:18px;grid-template-columns:minmax(0,1fr)}
@media(min-width:900px){.tl{grid-template-columns:repeat(4,minmax(0,1fr))}.tl::before{content:"";position:absolute;left:4%;right:4%;top:27px;height:6px;border-radius:9px;background:linear-gradient(90deg,#2D8CFF,#F06A1D,#12A15A,#6D3FD0);opacity:.35}}
.ph{position:relative;background:var(--card);border:1px solid var(--line);border-top:6px solid var(--c);border-radius:22px;padding:14px 16px;box-shadow:var(--shadow)}
.ph .dot{display:grid;place-items:center;width:46px;height:46px;border-radius:50%;background:var(--c);color:#fff;font-size:22px;margin-top:-34px;border:4px solid var(--bg)}
.ph .d{font:800 13px var(--f-body);color:var(--c);margin-top:6px;letter-spacing:.04em;text-transform:uppercase}
.ph h3{font-size:23px;margin-top:2px}.ph .dt{font-size:13.5px;color:var(--soft);font-weight:700}
.ph ul{margin:8px 0 0;padding-left:18px}.ph li{margin:3px 0;font-size:14.5px}
.today{display:inline-block;margin-top:8px;font-size:12px;font-weight:800;color:#fff;background:var(--c);border-radius:999px;padding:2px 9px}
/* targets */
.stats{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:12px;margin-top:14px}
@media(min-width:760px){.stats{grid-template-columns:repeat(4,minmax(0,1fr))}}
.stat{background:var(--card);border:1px solid var(--line);border-radius:20px;padding:14px;box-shadow:var(--shadow);min-width:0}
.stat .i{font-size:22px}.stat .n{font:800 34px/1 var(--f-round);color:var(--accent);margin-top:6px}
.stat .l{font-weight:800;margin-top:4px;line-height:1.25}.stat .s{font-size:12.5px;color:var(--soft);margin-top:4px}
.stat .st{display:inline-block;margin-top:6px;font-size:12px;font-weight:800;background:var(--chip);border-radius:999px;padding:2px 8px}
/* checklist */
.check{list-style:none;padding:0;margin:14px 0 0;display:grid;gap:10px;grid-template-columns:minmax(0,1fr)}
@media(min-width:760px){.check{grid-template-columns:repeat(3,minmax(0,1fr))}}
.check li{display:flex;gap:10px;align-items:flex-start;background:var(--card);border:1px solid var(--line);border-radius:16px;padding:12px 14px}
.check input{width:22px;height:22px;margin-top:1px;accent-color:var(--accent);flex:0 0 auto}
.check b{display:block;line-height:1.3}.check span{color:var(--soft);font-size:13.5px}
.check li.done{background:color-mix(in srgb,var(--accent) 10%,var(--card))}.check li.done b{text-decoration:line-through;color:var(--soft)}
.prog{height:10px;border-radius:99px;background:var(--chip);overflow:hidden;margin-top:12px}.prog i{display:block;height:100%;background:var(--accent);border-radius:99px;transition:width .3s}
/* series */
.series{display:grid;gap:10px;margin-top:14px}
.series div{display:grid;grid-template-columns:auto minmax(0,1fr);gap:12px;align-items:center;background:var(--card);border:1px solid var(--line);border-radius:18px;padding:12px 14px}
.series b.k{display:grid;place-items:center;min-width:92px;padding:6px 10px;border-radius:999px;background:var(--c);color:#fff;font:800 15px var(--f-round)}
.series h3{font-size:17px}
/* vision */
.vis{list-style:none;padding:0;margin:14px 0 0;display:flex;flex-wrap:wrap;gap:10px}
.vis li{display:flex;align-items:center;gap:8px;background:var(--card);border:1px solid var(--line);border-radius:999px;padding:8px 14px;font-weight:800}
.vis li::before{content:"○";color:var(--soft)}.vis li.now{border-color:var(--accent)}.vis li.now::before{content:"✓";color:var(--accent)}
.vis small{font-size:11.5px;font-weight:800;color:var(--accent);text-transform:uppercase;letter-spacing:.06em}
/* goal */
.goal{position:relative;display:grid;gap:14px;align-items:center;margin-top:44px;border-radius:30px;padding:24px;background:radial-gradient(80% 120% at 0% 0%,#FFF1B8,transparent 60%),linear-gradient(140deg,#E9F9EE,#E3F2FF);box-shadow:var(--shadow);overflow:hidden}
@media (prefers-color-scheme:dark){.goal{background:radial-gradient(80% 120% at 0% 0%,#3A3315,transparent 60%),linear-gradient(140deg,#14301F,#142640)}}
@media(min-width:760px){.goal{grid-template-columns:minmax(0,1fr) 220px}}
.goal h2{font-size:clamp(26px,4vw,36px)}.goal p{font:700 19px/1.45 var(--f-round);margin:8px 0 0}
.goal img{width:220px;height:auto;justify-self:center;filter:drop-shadow(0 12px 14px rgba(20,60,40,.25))}
/* existing blocks */
.ghead{display:flex;justify-content:space-between;align-items:flex-start;gap:12px;flex-wrap:wrap;margin-bottom:12px}
.ghead p{margin:2px 0 0;color:var(--soft);font-size:14px;max-width:70ch}
.tt .ttv{display:grid;grid-template-columns:1fr 1fr;gap:10px;margin:10px 0}
.tt figure{margin:0;min-width:0}.tt video{width:100%;aspect-ratio:9/16;border-radius:14px;background:#000;display:block;border:1px solid var(--line)}
.tt figcaption{font-size:12.5px;line-height:1.45;margin-top:6px;color:var(--soft)}.tt figcaption a{font-weight:800;text-decoration:none}
.grid{display:grid;gap:12px;grid-template-columns:repeat(auto-fill,minmax(118px,1fr))}
.grid.post{grid-template-columns:repeat(auto-fill,minmax(150px,1fr))}.grid.wide{grid-template-columns:repeat(auto-fill,minmax(230px,1fr))}
.tile{display:flex;flex-direction:column;gap:6px;min-width:0;position:relative}
.tile img{width:100%;height:auto;border-radius:12px;border:1px solid var(--line);background:#fff;display:block}
.tile .play{position:absolute;left:8px;top:8px;background:rgba(0,0,0,.65);color:#fff;border-radius:999px;font-size:12px;font-weight:800;padding:3px 9px;text-decoration:none}
.tile a.dl{font-size:13px;font-weight:800;color:var(--accent);text-decoration:none;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}
.tbl{background:var(--card);border:1px solid var(--line);border-radius:20px;padding:4px 6px;margin-top:14px;overflow-x:auto;box-shadow:var(--shadow)}
table{width:100%;border-collapse:collapse;font-size:14.5px}th{text-align:left;font-size:12px;letter-spacing:.06em;text-transform:uppercase;color:var(--soft);padding:10px}
td{padding:10px;border-top:1px solid var(--line);vertical-align:top}td:first-child{font-weight:800;white-space:nowrap}
.val{margin-top:8px;white-space:pre-wrap;word-break:break-word;background:var(--chip);border-radius:12px;padding:10px 12px;font-size:14.5px}
.vhead{display:flex;justify-content:space-between;align-items:center;gap:8px;margin-top:10px}
.vhead b{font-size:13px;color:var(--soft);letter-spacing:.04em}
.copy{min-height:34px;padding:5px 12px;font-size:13.5px}
ol.scenes{margin:8px 0 0;padding-left:20px}ol.scenes li{margin:2px 0}
ul.rules{margin:8px 0 0;padding-left:20px}ul.rules li{margin:5px 0}
.yes h3{color:var(--accent)}.no h3{color:var(--bad)}
.note{background:var(--warn-bg);border-radius:16px;padding:12px 14px;margin-top:12px;font-size:14.5px}.note b{color:var(--warn)}
.builder{display:grid;gap:10px;margin-top:10px}@media(min-width:760px){.builder{grid-template-columns:1fr 1fr}}
.builder label{display:flex;flex-direction:column;gap:4px;font-weight:800;font-size:14px}
.builder input{font:inherit;padding:10px 12px;border-radius:12px;border:1px solid var(--line);background:var(--bg);color:var(--ink);min-height:44px}
.links{list-style:none;padding:0;margin:8px 0 0;display:grid;grid-template-columns:minmax(0,1fr);gap:6px}
.links li{display:flex;align-items:center;gap:8px;justify-content:space-between;border-top:1px solid var(--line);padding-top:6px;min-width:0}
.links li .copy{flex:0 0 auto}
.links a{flex:1 1 auto;min-width:0;font-weight:800;color:var(--ink);text-decoration:none}.links a small{display:block;font-weight:600;font-size:12.5px;color:var(--accent);overflow:hidden;text-overflow:ellipsis;white-space:nowrap}
.toast{position:fixed;left:50%;bottom:calc(20px + env(safe-area-inset-bottom,0px));transform:translateX(-50%);background:var(--ink);color:var(--bg);padding:10px 16px;border-radius:999px;font-weight:800;opacity:0;transition:opacity .2s;pointer-events:none;z-index:9}
.toast.on{opacity:1}
@media (prefers-reduced-motion:no-preference){.family img{animation:bob 4s ease-in-out infinite}.family img:nth-child(2){animation-delay:-1.3s}.family img:nth-child(3){animation-delay:-2.6s}
 @keyframes bob{0%,100%{transform:translateY(0)}50%{transform:translateY(-6px)}}}
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

const PHASE_RANGE: [string, string][] = [["2026-11-23", "2026-11-29"], ["2026-11-30", "2026-12-22"], ["2026-12-23", "2027-01-21"], ["2027-01-22", "2027-02-20"]];
const EXTRA_SCRIPT = `
(function(){
function run(){
var t=new Date().toISOString().slice(0,10),ph=[].slice.call(document.querySelectorAll('[data-from]'));
function tag(el,txt){var s=document.createElement('span');s.className='today';s.textContent=txt;el.querySelector('.d').after(s);}
ph.forEach(function(el){if(t>=el.getAttribute('data-from')&&t<=el.getAttribute('data-to'))tag(el,'We are here');});
if(ph.length&&t<ph[0].getAttribute('data-from')){var n=Math.ceil((new Date(ph[0].getAttribute('data-from'))-new Date(t))/864e5);tag(ph[0],'Starts in '+n+(n===1?' day':' days'));}
var boxes=[].slice.call(document.querySelectorAll('#foundation input[type=checkbox]')),bar=document.getElementById('fprog'),lbl=document.getElementById('fcount');
function upd(){var n=boxes.filter(function(b){return b.checked}).length;bar.style.width=(100*n/boxes.length)+'%';lbl.textContent=n+' of '+boxes.length+' done';}
boxes.forEach(function(cb){var k='mk-f-'+cb.id;try{var v=localStorage.getItem(k);if(v!==null)cb.checked=v==='1'}catch(e){}cb.closest('li').classList.toggle('done',cb.checked);
  cb.addEventListener('change',function(){try{localStorage.setItem(k,cb.checked?'1':'0')}catch(e){}cb.closest('li').classList.toggle('done',cb.checked);upd();});});
upd();
}
/* after React has hydrated the page, so these DOM changes don't clash with it */
function later(){setTimeout(run,400)}
if(document.readyState==='complete')later();else window.addEventListener('load',later);
})();`;

const Sh = ({ c, icon, t, small }: { c: string; icon: string; t: string; small?: string }) => (
  <h2 className="sh" style={{ ["--c" as string]: c }}><i aria-hidden="true">{icon}</i>{t}{small ? <small>&nbsp;{small}</small> : null}</h2>
);

export default function MarketingKit() {
  const done = FOUNDATION.filter((x) => x.done).length;
  return (
    <html lang="en" className={STORE_FONT_VARS}>
      <head>
        <script src={asset("/vendor/jszip-3.10.1.min.js")} defer />
      </head>
      <body>
        <style dangerouslySetInnerHTML={{ __html: CSS }} />
        <main className="w">
          <header className="hero">
            <span className="cl" style={{ width: 160, height: 46, left: "6%", top: 40 }} />
            <span className="cl" style={{ width: 220, height: 58, right: "28%", top: 18 }} />
            <span className="cl" style={{ width: 120, height: 36, right: "4%", top: 120 }} />
            <div className="hgrid">
              <div>
                <div className="brand">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={asset("/app-store-kit/app-icon-1024.png")} alt="" width={44} height={44} />
                  Baby Mo · Marketing Kit
                </div>
                <h1>Baby Mo <span>Growth Strategy</span></h1>
                <p className="sub">A step-by-step plan to make Baby Mo widely known, trusted and bought by the right parents — with everything the team needs to post today.</p>
                <div className="bar">
                  <button className="btn pri" data-zip="all" type="button">⬇ All designs &amp; Reels (ZIP)</button>
                  <a className="btn" href={asset("/id/studio/")}>🎬 Promo Studio</a>
                  <a className="btn" href={APP_URL}>App Store page ↗</a>
                </div>
              </div>
              <div className="sign" aria-label="Goals"><ul>{GOALS.map((g) => <li key={g.en}>{g.en}</li>)}</ul></div>
            </div>
            <div className="family" aria-hidden="true">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={asset("/baby-ais-poses/baby-ais-arms-open-welcome.png")} alt="" />
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={asset("/baby-mo-poses/baby-mo-pose-01.png")} alt="" />
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img className="adam" src={asset("/adam-poses/adam-wave-hello.png")} alt="" />
            </div>
            <div className="hills" />
          </header>

          <nav className="toc" aria-label="Sections">
            <a href="#big">Big picture</a><a href="#message">Message</a><a href="#who">Audience</a><a href="#plan">90-day plan</a><a href="#targets">Targets</a>
            <a href="#foundation">Foundation</a><a href="#content">Content engine</a><a href="#tiktok">TikTok</a><a href="#designs">Designs &amp; Reels</a><a href="#captions">Captions</a>
            <a href="#buyers">Get buyers</a><a href="#calendar">Calendar</a><a href="#rules">Rules</a><a href="#measure">Measure</a><a href="#vision">Vision</a><a href="#links">Links</a>
          </nav>

          <section className="sec" id="big">
            <Sh c="#12A15A" icon="🧭" t="The Big Picture" />
            <p className="lead" style={{ fontSize: 17 }}>{BIG_PICTURE.en}</p>
            <div className="funnel">
              {FUNNEL.map((s, i) => (
                <div className="fstep" key={i}>
                  <span className="ic" aria-hidden="true">{s.icon}</span>
                  <b>{i + 1}. {s.t.en}</b>
                  <span>{s.d.en}</span>
                  <span className="how">→ {s.how.en}</span>
                </div>
              ))}
            </div>
          </section>

          <section className="sec" id="message">
            <Sh c="#F59F00" icon="📢" t="Our Core Message" />
            <div className="card tint quote" style={{ ["--c" as string]: "#F59F00" }}>
              <q>Little hands. <span>Big love for Islam.</span> 💚</q>
              <p className="big" style={{ marginTop: 10 }}>{CORE_MESSAGE.sub.en}</p>
              <p className="muted" lang="id">“{CORE_MESSAGE.line.id}” — {CORE_MESSAGE.sub.id}</p>
              <div className="pillars">{CORE_MESSAGE.pillars.map((p) => <div key={p.t.en}><span aria-hidden="true">{p.icon}</span>{p.t.en}</div>)}</div>
              <span className="promise">{CORE_MESSAGE.promise.en}</span>
            </div>
            <div className="cards three">
              <div className="card"><p className="k">One sentence</p><p className="big" lang="id">{POSITIONING.id}</p><p className="muted">{POSITIONING.en}</p></div>
              {MESSAGES.slice(0, 2).map((m, i) => <div className="card" key={i}><p className="k">Message {i + 1}</p><h3 style={{ marginTop: 4 }}>{m.t.id}</h3><p className="muted">{m.t.en}</p><p>{m.d.id}</p></div>)}
              {MESSAGES.slice(2).map((m, i) => <div className="card" key={i}><p className="k">Message {i + 3}</p><h3 style={{ marginTop: 4 }}>{m.t.id}</h3><p className="muted">{m.t.en}</p><p>{m.d.id}</p></div>)}
              <div className="card"><p className="k">Tone of voice</p><p>{TONE.id}</p><p className="muted">{TONE.en}</p></div>
            </div>
          </section>

          <section className="sec" id="who">
            <Sh c="#8B5CF6" icon="👨‍👩‍👧" t="Target Audience" />
            <p className="lead">Children aged 2–8 play; <b>parents and teachers decide</b>. Baby Mo runs on iPhone, iPad and Apple Watch only, so we aim for families with Apple devices.</p>
            <div className="card tint" style={{ ["--c" as string]: "#8B5CF6" }}>
              <p className="k">Our ideal buyer</p>
              <div className="ideal" style={{ marginTop: 8 }}>
                <div className="avatar"><span className="face" aria-hidden="true">🧕🏻</span><b>{IDEAL.name}</b><span className="muted">{IDEAL.photoNote}</span></div>
                <dl className="facts" style={{ margin: 0 }}>{IDEAL.facts.map(([k, v]) => <div key={k}><dt>{k}</dt><dd>{v}</dd></div>)}</dl>
              </div>
            </div>
            <div className="cards three">
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
          </section>

          <section className="sec" id="plan">
            <Sh c="#2D8CFF" icon="📅" t="90-Day Growth Plan" small="23 Nov 2026 → 20 Feb 2027" />
            <p className="lead">Day 1 is the week version 1.1 goes live; day 90 lands in the first days of Ramadan, the biggest moment of the year.</p>
            <div className="tl">
              {PHASES.map((ph, i) => (
                <div className="ph" key={ph.t} style={{ ["--c" as string]: ph.color }} data-from={PHASE_RANGE[i]![0]} data-to={PHASE_RANGE[i]![1]}>
                  <span className="dot" aria-hidden="true">{ph.icon}</span>
                  <p className="d">{ph.days}</p>
                  <h3>{ph.t}</h3>
                  <p className="dt">{ph.dates}</p>
                  <ul>{ph.tasks.map((x) => <li key={x}>{x}</li>)}</ul>
                </div>
              ))}
            </div>
          </section>

          <section className="sec" id="targets">
            <Sh c="#0EA5E9" icon="📊" t="Key Success Metrics" small="90-day targets" />
            <p className="lead">The big number is our target; “stretch” is the dream. Baby Mo is a paid app, and paid kids&apos; apps usually turn 2–6% of page views into purchases, so 4% is a strong, honest target. Check progress every Monday in App Store Connect → Analytics.</p>
            <div className="stats">
              {TARGETS.map((t) => (
                <div className="stat" key={t.k}>
                  <div className="i" aria-hidden="true">{t.icon}</div>
                  <div className="n">{t.target}</div>
                  <div className="l">{t.k}</div>
                  <span className="st">Stretch {t.stretch}</span>
                  <div className="s">{t.note}</div>
                </div>
              ))}
            </div>
          </section>

          <section className="sec" id="foundation">
            <Sh c="#4C6EF5" icon="✅" t="Fix the Foundation First" />
            <p className="lead">Before spending on ads, make sure everything a parent sees is right. Ticks are saved in this browser. <b id="fcount">{`${done} of ${FOUNDATION.length} done`}</b></p>
            <div className="prog"><i id="fprog" style={{ width: `${(100 * done) / FOUNDATION.length}%` }} /></div>
            <ul className="check">
              {FOUNDATION.map((x, i) => (
                <li key={x.t} className={x.done ? "done" : ""}>
                  <input type="checkbox" id={`f${i}`} defaultChecked={!!x.done} aria-label={x.t} />
                  <label htmlFor={`f${i}`}><b>{x.t}</b>{x.note ? <span>{x.note}</span> : null}</label>
                </li>
              ))}
            </ul>
          </section>

          <section className="sec" id="content">
            <Sh c="#E64980" icon="▶️" t="Build a Viral Content Engine" />
            <p className="lead">Short, shareable videos Muslim parents want to watch and send to each other. Rotate five series so the feed never feels like an ad.</p>
            <div className="series">
              {SERIES.map((s) => (
                <div key={s.k} style={{ ["--c" as string]: s.color }}>
                  <b className="k">Series {s.k}</b>
                  <span><h3>{s.t}</h3><span className="muted">{s.d.en}</span></span>
                </div>
              ))}
            </div>
            <h3 style={{ marginTop: 26 }} id="reels">Ten Reel scripts</h3>
            <p className="lead">10–15 s each. The first two seconds decide everything: put the hook on screen. <b>🎬 Studio</b> opens the Promo Studio with the script set up (game, template, hook and App Store ending).</p>
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
            <h3 style={{ marginTop: 26 }} id="stories">Story sets</h3>
            <p className="lead">Four frames each: a design below, one interactive sticker (poll, quiz, question or slider), and the Link sticker to the App Store. Save the best to highlights.</p>
            <div className="cards three">
              {STORY_SETS.map((s) => (
                <div className="card" key={s.id}>
                  <h3>{s.title}</h3>
                  <ol className="scenes">{s.frames.map((fr, i) => <li key={i}>{fr.id}<br /><span className="muted">{fr.en}</span></li>)}</ol>
                </div>
              ))}
            </div>
          </section>

          <section className="sec" id="tiktok">
            <Sh c="#111111" icon="🎵" t="TikTok" small="10 videos, ready to upload" />
            <p className="lead">The Studio videos and the 12 s Reels were made for Instagram. On TikTok they would likely be held back (shown to very few people) or flagged as unlabelled ads. These are made for TikTok: three real-app videos, four Baby Mo animations (“Pagi bareng Mo”, “3 syarat Mo”, “Mo vs. waktu tidur” and “Kalau ada tamu datang”, made from the render-3 poses) and three family videos with Umi, Abi and Ais (“Menilai alasan anak”, “Cari Baby Mo dalam 3 detik” and “Kata Umi & Abi vs yang Mo dengar”), with what changed and how to post.</p>
            <div className="cards">
              <div className="card no">
                <h3>✕ Why the Studio videos and Reels can fail on TikTok</h3>
                <ul className="rules">{TIKTOK_RISKS.map((r) => <li key={r.t}><b>{r.t}.</b> {r.d}</li>)}</ul>
              </div>
              <div className="card yes">
                <h3>✓ What the new videos do instead</h3>
                <ul className="rules">{TIKTOK_FIXES.map((x) => <li key={x}>{x}</li>)}</ul>
              </div>
            </div>
            <div className="cards three" style={{ marginTop: 14 }}>
              {TIKTOK.map((v) => (
                <div className="card tt" key={v.k}>
                  <h3>{v.title}</h3>
                  <div className="ttv">
                    {(["id", "en"] as const).map((l) => (
                      <figure key={l}>
                        <video src={asset(`/marketing-kit/tiktok/${v.files[l]}.mp4`)} poster={asset(`/marketing-kit/thumbs/${v.files[l]}.webp`)} controls playsInline preload="none" />
                        <figcaption>
                          <b>{l === "id" ? "Bahasa Indonesia" : "English"}</b> · {v.len[l]}<br />
                          <a href={asset(`/marketing-kit/tiktok/${v.files[l]}.mp4`)} download>⬇ MP4</a> · <a href={asset(`/marketing-kit/tiktok/${v.files[l]}-cover.jpg`)} download>⬇ Cover</a>
                        </figcaption>
                      </figure>
                    ))}
                  </div>
                  <p className="muted">{v.what}</p>
                  <CopyBlock id={`tt-${v.k}-id`} label="CAPTION · ID" text={`${v.cap.id}\n\n${v.tags.id}`} />
                  <CopyBlock id={`tt-${v.k}-en`} label="CAPTION · EN" text={`${v.cap.en}\n\n${v.tags.en}`} />
                </div>
              ))}
            </div>
            <div className="card" style={{ marginTop: 14 }}>
              <h3>Before you press Post</h3>
              <ol className="scenes">{TIKTOK_POSTING.map((x) => <li key={x}>{x}</li>)}</ol>
            </div>
          </section>

          <section className="sec" id="designs">
            <Sh c="#F06A1D" icon="🎨" t="Designs & Reels" small="ready to download" />
            <p className="lead">Made from real captures of the current app and the original Baby Mo renders. Tap a picture to open it, or download a whole group as a ZIP.</p>
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
            <div className="note"><b>More videos:</b> the <a href={asset("/id/studio/")}>Promo Studio</a> makes Reels, Stories and feed videos (9:16, 4:5, 1:1) in a few clicks: 24 templates including <a href={asset("/id/studio/?preset=r7")}>Ramadan hari ke-…</a>, <a href={asset("/id/studio/?preset=eid")}>Selamat Idul Fitri</a>, <a href={asset("/id/studio/?preset=r6")}>Apple Watch</a> and <a href={asset("/id/studio/?preset=r5")}>doa di mobil (CarPlay)</a>. It ends with the App Store button by default.</div>
          </section>

          <section className="sec" id="captions">
            <Sh c="#D9467E" icon="💬" t="Captions" small="for every design" />
            <div className="cards">
              {POST_CAPTIONS.map((c) => (
                <div className="card" key={c.key}>
                  <h3>{c.key === "carousel" ? "Carousel “5 alasan”" : DESIGN_NAMES[c.key as (typeof DESIGNS)[number]]}</h3>
                  <Both id={`pc-${c.key}`} t={c.cap} />
                </div>
              ))}
            </div>
          </section>

          <section className="sec" id="buyers">
            <Sh c="#12A15A" icon="🎯" t="Get Real Buyers" small="acquisition channels" />
            <div className="tbl"><table>
              <thead><tr><th>Channel</th><th>What we do</th><th>How often</th></tr></thead>
              <tbody>{CHANNELS.map((c) => <tr key={c.ch}><td>{c.ch}</td><td>{c.what}</td><td>{c.cadence}</td></tr>)}</tbody>
            </table></div>
            <h3 style={{ marginTop: 26 }} id="ads">Ads</h3>
            <p className="lead"><b>Meta (Instagram/Facebook):</b> an App promotion campaign to the App Store page; parents aged 24–44 in Indonesia, Malaysia, Singapore and Brunei (ID set) or the UK, US, Australia, Canada and the Gulf (EN set); iOS devices only; interests parenting, early childhood education and Islamic content. Never target children. Test three creatives, keep the winner, refresh every two weeks. <b>Apple Search Ads:</b> the keywords below and “Baby Mo”.</p>
            <div className="cards three">
              {ADS.map((a, i) => (
                <div className="card" key={i}>
                  <h3>{a.label}</h3>
                  <Both id={`ad${i}p`} t={a.primary} labels={["PRIMARY TEXT · ID", "PRIMARY TEXT · EN"]} />
                  <Both id={`ad${i}h`} t={a.headline} labels={["HEADLINE · ID", "HEADLINE · EN"]} />
                </div>
              ))}
            </div>
            <div className="card"><h3>Apple Search Ads keywords</h3><Both id="kw" t={SEARCH_KEYWORDS} /></div>
            <h3 style={{ marginTop: 26 }} id="outreach">Outreach templates</h3>
            <p className="lead">Send creators and schools <b>promo codes</b> from App Store Connect → Promo Codes, and give each creator their own campaign link (see Measure).</p>
            <div className="cards">
              {TEMPLATES.map((t, i) => <div className="card" key={i}><h3>{t.title}</h3><Both id={`tpl${i}`} t={t.body} /></div>)}
            </div>
          </section>

          <section className="sec" id="calendar">
            <Sh c="#6D3FD0" icon="🌙" t="Seasonal Calendar" small="Nov 2026 → Idul Adha 2027" />
            <p className="lead">Islamic dates follow the Umm al-Qura calendar and can move a day with the local announcement. The app&apos;s Ramadan theme switches on by itself.</p>
            <div className="tbl"><table>
              <thead><tr><th>When</th><th>Moment</th><th>What we do</th><th>Use</th></tr></thead>
              <tbody>{CALENDAR.map((c) => <tr key={c.date}><td>{c.date}</td><td><b>{c.title}</b></td><td>{c.what}</td><td className="muted">{c.assets}</td></tr>)}</tbody>
            </table></div>
          </section>

          <section className="sec" id="rules">
            <Sh c="#C92A2A" icon="🛡️" t="Rules" />
            <div className="cards">
              <div className="card yes"><h3>✓ Do</h3><ul className="rules">{RULES_DO.map((r) => <li key={r}>{r}</li>)}</ul></div>
              <div className="card no"><h3>✕ Don&apos;t</h3><ul className="rules">{RULES_DONT.map((r) => <li key={r}>{r}</li>)}</ul></div>
            </div>
          </section>

          <section className="sec" id="measure">
            <Sh c="#0EA5E9" icon="📈" t="Measure" />
            <div className="card">
              <h3>Campaign link builder</h3>
              <p className="muted">App Store Connect → Analytics → Acquisition → Campaigns shows your <b>provider token</b> (pt). Make one link per channel or creator (e.g. <code>ig-reel-ramadan</code>, <code>wa-launch</code>, <code>creator-ummu-aisyah</code>); App Analytics then shows views and purchases for each. The provider token is remembered in this browser only.</p>
              <div className="builder">
                <label>Provider token (pt)<input id="pt" inputMode="numeric" placeholder="e.g. 123456789" autoComplete="off" /></label>
                <label>Campaign name (ct)<input id="ct" placeholder="e.g. ig-reel-ramadan" autoComplete="off" /></label>
              </div>
              <div className="vhead"><b>LINK</b><button className="btn copy" type="button" data-copy="camp">Copy</button></div>
              <div className="val" id="camp">Fill in both fields</div>
            </div>
            <div className="card"><h3>What to watch</h3><ul className="rules">{KPIS.map((k) => <li key={k}>{k}</li>)}</ul></div>
          </section>

          <section className="sec" id="vision">
            <Sh c="#7C3AED" icon="🚀" t="Long-Term Vision" />
            <p className="lead">Build Baby Mo as a global Islamic kids&apos; brand, one product at a time.</p>
            <ul className="vis">{VISION.map((v) => <li key={v.t} className={v.now ? "now" : ""}>{v.t}{v.now ? <small>now</small> : <small style={{ color: "var(--soft)" }}>next</small>}</li>)}</ul>
          </section>

          <section className="sec" id="links">
            <Sh c="#475569" icon="🔗" t="Links" />
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
          </section>

          <section className="goal" aria-labelledby="goal-h">
            <div>
              <h2 id="goal-h">The Goal</h2>
              <p>{THE_GOAL.en} 💚</p>
              <p className="muted" lang="id" style={{ fontFamily: "var(--f-body)", fontWeight: 600, fontSize: 15 }}>{THE_GOAL.id}</p>
            </div>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={asset("/baby-mo-poses/baby-mo-pose-20.png")} alt="" width={220} height={220} />
          </section>
          <div id="toast" className="toast" role="status" aria-live="polite" />
        </main>
        <script dangerouslySetInnerHTML={{ __html: SCRIPT }} />
        <script dangerouslySetInnerHTML={{ __html: EXTRA_SCRIPT }} />
      </body>
    </html>
  );
}
