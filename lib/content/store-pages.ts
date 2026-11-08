/**
 * Shared look for the standalone App Store pages — babymo.id/app (marketing)
 * and babymo.id/support. Like /privacy they live outside the /[locale] tree
 * and render their own <html>, so reviewers get a fast, simple page.
 *
 * Both pages carry Bahasa Indonesia and English. Elements marked
 * data-l="id" / data-l="en" are shown for the active language; a tiny inline
 * script picks English for non-Indonesian browsers and the ID/EN buttons
 * switch it (no JavaScript → both languages show).
 */

/** Set when the app is live, e.g. "https://apps.apple.com/app/id1234567890". */
export const APP_STORE_URL: string | null = null;

export const SUPPORT_EMAIL = "hello@babymo.id";
export const INSTAGRAM_URL = "https://www.instagram.com/babymo.official";

export const STORE_CSS = `
:root{color-scheme:light dark;--bg:#FBFAF6;--card:#FFFFFF;--ink:#14181A;--soft:#5B615C;--line:#E5E2D9;--accent:#1E8C53;--accent2:#147A45;--tint:#E8F4EC;--sun:#FFC83D}
@media (prefers-color-scheme:dark){:root{--bg:#121514;--card:#1B201E;--ink:#EEF1EC;--soft:#A7AEA8;--line:#2C332F;--accent:#5CCB8C;--accent2:#7AD9A2;--tint:#1C2A22}}
html,body{margin:0;background:var(--bg);color:var(--ink)}
body{font:16px/1.6 -apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif}
*{box-sizing:border-box}
.sp{max-width:960px;margin:0 auto;padding:22px 16px 64px}
.sp a{color:var(--accent)}
.top{display:flex;align-items:center;justify-content:space-between;gap:12px;flex-wrap:wrap;margin-bottom:18px}
.brand{display:flex;align-items:center;gap:10px;color:var(--ink)!important;text-decoration:none;font-weight:800;font-size:18px}
.brand img{width:40px;height:40px;border-radius:12px;background:var(--tint);object-fit:contain}
.lang{display:flex;gap:6px}
.lang button{font:inherit;font-size:14px;font-weight:700;padding:7px 14px;border-radius:999px;border:1px solid var(--line);background:var(--card);color:var(--ink);cursor:pointer}
html[data-lang="id"] .lang [data-set-lang="id"],html[data-lang="en"] .lang [data-set-lang="en"]{background:var(--accent);border-color:var(--accent);color:#fff}
html[data-lang="id"] [data-l="en"],html[data-lang="en"] [data-l="id"]{display:none!important}
h1{font-size:clamp(30px,6vw,46px);line-height:1.1;margin:6px 0 10px;letter-spacing:-.02em}
h2{font-size:24px;line-height:1.25;margin:0 0 12px;letter-spacing:-.01em}
h3{font-size:17px;margin:0 0 4px}
p{margin:0 0 10px}
.soft{color:var(--soft)}
.card{background:var(--card);border:1px solid var(--line);border-radius:22px;padding:22px 20px;margin:0 0 20px}
.hero{display:grid;gap:22px;align-items:center;grid-template-columns:1fr;padding:26px 22px;background:linear-gradient(135deg,var(--tint),var(--card));}
@media (min-width:760px){.hero{grid-template-columns:1.25fr .75fr}}
.hero .mo{justify-self:center;width:min(240px,60vw)}
.hero .lead{font-size:18px;color:var(--soft);max-width:34em}
.cta{display:flex;flex-wrap:wrap;gap:10px;margin:16px 0 6px}
.btn{display:inline-flex;align-items:center;gap:8px;min-height:48px;padding:12px 20px;border-radius:999px;font-weight:800;text-decoration:none;border:1px solid var(--line);background:var(--card);color:var(--ink)!important}
.btn.primary{background:#111;color:#fff!important;border-color:#111}
@media (prefers-color-scheme:dark){.btn.primary{background:#fff;color:#111!important;border-color:#fff}}
.btn.soon{opacity:.85;cursor:default}
.chips{display:flex;flex-wrap:wrap;gap:8px;margin-top:12px;padding:0;list-style:none}
.chips li{padding:6px 12px;border-radius:999px;background:var(--card);border:1px solid var(--line);font-size:14px;font-weight:700}
.shots{display:flex;gap:14px;overflow-x:auto;padding:4px 2px 12px;scroll-snap-type:x mandatory}
.shots figure{flex:0 0 auto;width:min(220px,62vw);margin:0;scroll-snap-align:start}
.shots img{width:100%;height:auto;border-radius:26px;border:6px solid #1F2125;display:block;background:#fff}
.shots figcaption{text-align:center;font-size:14px;font-weight:700;margin-top:8px;color:var(--soft)}
.grid{display:grid;gap:12px;grid-template-columns:repeat(auto-fill,minmax(230px,1fr))}
.feat{background:var(--bg);border:1px solid var(--line);border-radius:18px;padding:16px}
.feat .ic{font-size:26px;line-height:1;margin-bottom:8px}
.feat p{color:var(--soft);font-size:15px;margin:0}
.ticks{list-style:none;padding:0;margin:0}
.ticks li{padding:8px 0 8px 30px;position:relative;border-bottom:1px solid var(--line)}
.ticks li:last-child{border-bottom:0}
.ticks li::before{content:"✓";position:absolute;left:4px;top:8px;font-weight:900;color:var(--accent)}
details{border:1px solid var(--line);border-radius:16px;padding:0 16px;margin:0 0 10px;background:var(--bg)}
summary{cursor:pointer;font-weight:700;padding:14px 0;list-style-position:outside}
details[open] summary{border-bottom:1px solid var(--line);margin-bottom:10px}
details > div{padding-bottom:12px}
details ol,details ul{padding-left:20px;margin:6px 0}
.contact{display:grid;gap:12px;grid-template-columns:repeat(auto-fill,minmax(220px,1fr))}
.contact a.box{display:block;text-decoration:none;color:var(--ink)!important;background:var(--bg);border:1px solid var(--line);border-radius:18px;padding:16px}
.contact a.box b{display:block;font-size:17px;color:var(--accent)}
.foot{text-align:center;color:var(--soft);font-size:14px;margin-top:28px}
.foot a{margin:0 6px}
`;

/** Picks the page language before paint and wires the ID/EN buttons. */
export const LANG_SCRIPT = `(function(){var d=document.documentElement,s=null;try{s=localStorage.getItem('bm-store-lang')}catch(e){}
var l=s||((navigator.language||'id').toLowerCase().indexOf('id')===0||(navigator.language||'').toLowerCase().indexOf('ms')===0?'id':'en');
d.setAttribute('data-lang',l);d.lang=l;
document.addEventListener('click',function(e){var b=e.target&&e.target.closest&&e.target.closest('[data-set-lang]');if(!b)return;var v=b.getAttribute('data-set-lang');d.setAttribute('data-lang',v);d.lang=v;try{localStorage.setItem('bm-store-lang',v)}catch(e){}})})();`;
