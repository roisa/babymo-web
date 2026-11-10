import type { Metadata } from "next";
import { STORE_FONT_VARS } from "@/lib/content/store-fonts";
import { LISTING } from "@/lib/content/app-store-kit";
import { asset } from "@/lib/i18n/config";

/**
 * babymo.id/app-store-kit — team page for the App Store submission:
 * screenshots + caption banners at Apple's required sizes (download one,
 * a group, or everything as a ZIP) and every App Store Connect field ready
 * to copy. Not linked from the site and not indexed.
 * Images live in public/app-store-kit/ (made from real captures of the app).
 */
export const metadata: Metadata = {
  title: "App Store Kit — Baby Mo",
  robots: { index: false, follow: false },
};

const SHOTS = ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10"];
const RAW = ["01-home", "02-doa-tab", "03-doa", "04-sholat", "05-wudhu", "06-huruf", "07-pulau", "08-tenis", "09-hewan", "10-kebun", "11-dream", "12-susun"];
const BANNER_NAMES = ["Home", "Daily du'as", "Hijaiyah letters", "Hijaiyah Island", "Tennis", "Animal Friends (new)", "Ais's Garden (new)", "Prayer", "Wudhu", "Safe for kids"];

/* Images retaken on 10 Nov 2026 (third retake) after the iOS glass redesign of Pray with Mo and the fresh look of the older games;
   the version before this retake stays downloadable as "versi lama" (public/app-store-kit/prev/). */
const CHANGED = new Set(["03", "08", "10", "04-sholat", "06-huruf", "11-dream", "12-susun"]);
const CHANGE_NOTE: Record<string, string> = {
  "03": "Huruf Hijaiyah fresh look: glass letter card, Fredoka letter name, capsule buttons",
  "08": "Pray with Mo iOS glass redesign: glass hero card with the prayer countdown and glass step cards",
  "10": "Dreamtime night-glass cards and capsule buttons",
  "04-sholat": "Pray with Mo iOS glass redesign (hero card, Live Activity countdown, step cards)",
  "06-huruf": "Glass letter card, Fredoka letter name, capsule buttons",
  "11-dream": "Night-glass cards, capsule Game Hub button",
  "12-susun": "Fredoka/Nunito type, glass cards, capsule buttons",
};
type Group = { id: string; title: string; size: string; note: string; files: { src: string; thumb: string; name: string }[] };
const DEVICES = [
  { key: "iphone63", label: 'iPhone · Dynamic Island (medium display)', size: "1206 × 2622 px", upload: true },
  { key: "ipad", label: 'iPad 13" display', size: "2064 × 2752 px", upload: true },
  { key: "ipad2048", label: 'iPad 13" display · alternative size', size: "2048 × 2732 px", upload: false },
] as const;
const groups: Group[] = [];
for (const kind of ["banner", "raw"] as const) {
  for (const d of DEVICES) {
    for (const lang of ["id", "en"] as const) {
      const keys = kind === "banner" ? SHOTS : RAW;
      groups.push({
        id: `${kind}-${d.key}-${lang}`,
        title: `${kind === "banner" ? "Banners" : "Plain screenshots"} · ${d.label} · ${lang === "id" ? "Bahasa Indonesia" : "English"}`,
        size: d.size,
        note: (d.upload ? "" : "Use only if App Store Connect rejects the 2064 × 2752 set. ") +
          (kind === "raw" ? "No captions. Use them instead of the banners, or for the website and social posts." :
            lang === "id" ? "Upload these to the Indonesian localization." : "Upload these to the English (U.S.) localization."),
        files: keys.map((k, i) => kind === "banner"
          ? { src: `app-store-kit/banners/${d.key}-${lang}-${k}.jpg`, thumb: `app-store-kit/thumbs/${d.key}-${lang}-${k}.webp`, name: `${k} ${BANNER_NAMES[i]}` }
          : { src: `app-store-kit/raw/${d.key}-${lang}-${k}.jpg`, thumb: `app-store-kit/thumbs/raw-${d.key}-${lang}-${k}.webp`, name: k }),
      });
    }
  }
}

const CREATIVE: { id: string; title: string; size: string; note: string; base: string; ext: string }[] = [
  { id: "header-16x9", title: "Header · 16:9 (recommended)", size: "5244 × 2950 px · PNG", ext: "png",
    note: "Product Page Information → Header and Search Results → Header → Upload. Apple can also reuse this one size in Search Results.", base: "header-16x9" },
  { id: "header-21x9", title: "Header · 21:9 (alternative)", size: "3840 × 1646 px · JPG", ext: "jpg",
    note: "The wider header size, if you prefer it to 16:9. Upload only one header per language.", base: "header-21x9" },
  { id: "search-3x2", title: "Search Results · 3:2", size: "3840 × 2560 px · PNG", ext: "png",
    note: "Header and Search Results → Search Results → Upload.", base: "search-3x2" },
];

type Field = { label: string; value: string; limit?: number; bytes?: boolean; where: string };
const L = LISTING;
const fields = (lang: "id" | "en"): Field[] => [
  { label: "Name", value: L.name[lang], limit: 30, where: "App Information → Localizable Information" },
  { label: "Subtitle", value: L.subtitle[lang], limit: 30, where: "App Information → Localizable Information" },
  { label: "Promotional Text", value: L.promo[lang], limit: 170, where: "Version → Promotional Text (can change any time)" },
  { label: "Description", value: L.desc[lang], limit: 4000, where: "Version → Description" },
  { label: "Keywords", value: L.keywords[lang], limit: 100, bytes: true, where: "Version → Keywords (comma-separated, no spaces)" },
  { label: "What's New in This Version", value: L.whatsNew[lang], limit: 4000, where: "Version → What's New (only shown for updates, not for 1.0)" },
];

const FACTS: { label: string; value: string; where: string; note?: string }[] = [
  { label: "Primary language", value: "Indonesian", where: "App Information", note: "Add English (U.S.) as a second localization." },
  { label: "Bundle ID", value: "id.babymo.app", where: "App Information (from Xcode)" },
  { label: "SKU", value: "babymo-ios-001", where: "New App form (any unique code you like)" },
  { label: "Version", value: "1.0", where: "Version (MARKETING_VERSION in Xcode)" },
  { label: "Primary category", value: "Education", where: "App Information → Category" },
  { label: "Secondary category", value: "Games — subcategories: Family, Educational", where: "App Information → Category" },
  { label: "Support URL", value: "https://babymo.id/support/", where: "Version → Support URL (required)" },
  { label: "Marketing URL", value: "https://babymo.id/app/", where: "Version → Marketing URL" },
  { label: "Privacy Policy URL", value: "https://babymo.id/privacy/", where: "App Privacy → Privacy Policy URL" },
  { label: "Copyright", value: "2026 Ibra Creative", where: "Version → Copyright", note: "Apple adds the © sign." },
  { label: "Price", value: "Free (Rp 0)", where: "Pricing and Availability", note: "Availability: all countries, or start with Indonesia, Malaysia, Singapore and Brunei." },
  { label: "Sign-in required for review", value: "No — the app has no accounts", where: "App Review Information → Sign-In Information (uncheck)" },
];

const REVIEW_NOTES = `Baby Mo is a free Islamic learning app for children aged 2–8 with 15 games: daily du'as, prayer and wudhu guides, Arabic letters, a letter-hunt island, a tennis-learning game, caring for farm animals and a little garden. There are no accounts, ads, in-app purchases, chat or social features.

• No login is needed: open the app and choose a language.
• Location is optional and only used for prayer times and the Qibla compass in the Prayer tab. If permission is denied, the user can pick a city by hand. Approximate coordinates (rounded to about 1 km) are sent to api.aladhan.com and api.bigdatacloud.net to calculate prayer times and show the city name; nothing else leaves the device.
• The child's nickname, stars and progress are stored only on the device.
• Read-aloud uses the device's built-in speech voices. Labels such as "PRO" in Memory Match are difficulty levels, not purchases.
• All games work offline.

Privacy policy: https://babymo.id/privacy/ · Support: https://babymo.id/support/`;

const AGE: [string, string][] = [
  ["Cartoon or fantasy violence", "None"], ["Realistic violence", "None"], ["Prolonged graphic or sadistic violence", "None"],
  ["Profanity or crude humor", "None"], ["Mature or suggestive themes", "None"], ["Horror or fear themes", "None"],
  ["Medical or treatment information", "None"], ["Alcohol, tobacco or drug use or references", "None"],
  ["Sexual content or nudity", "None"], ["Simulated gambling", "None"], ["Contests", "None"],
  ["Unrestricted web access", "No"], ["User-generated content", "No"], ["Messaging and chat", "No"],
  ["Advertising", "No"], ["Parental controls", "No"], ["Age assurance", "No"],
];

const PRIVACY: [string, string][] = [
  ["Do you or your third-party partners collect data from this app?", "Yes — only Coarse Location (see below)"],
  ["Data type", "Location → Coarse Location"],
  ["Used for", "App Functionality (prayer times and Qibla)"],
  ["Linked to the user's identity?", "No"],
  ["Used for tracking?", "No"],
  ["Everything else (contact info, health, identifiers, usage data, diagnostics…)", "Not collected"],
];

const CHECK: { t: string; d: string }[] = [
  { t: "Add the encryption key to Info.plist", d: "ITSAppUsesNonExemptEncryption = NO (Boolean). The app only uses standard HTTPS, so this skips the export-compliance question on every build." },
  { t: "Soften the location permission text", d: 'Info.plist NSLocationWhenInUseUsageDescription, for example: "Baby Mo uses your location only to show prayer times and the Qibla. You can also pick a city instead." Reviewers prefer text that says the feature is optional.' },
  { t: "Sync the latest web build into the iOS app", d: "In babymo-app: git pull, then npx cap sync ios. This brings in Sahabat Hewan Mo, Kebun Kecil Ais, the 14-du'a Doa Harian, the new Huruf Hijaiyah and Pulau Hijaiyah features, the tennis updates and the latest fixes." },
  { t: "Test on a real iPhone and iPad", d: "Open every game once, try airplane mode, deny location once, and switch ID/EN and light/dark." },
  { t: "Archive and upload", d: "Xcode → Product → Archive → Distribute App → App Store Connect. Wait for the build to finish processing, then select it in the version page." },
  { t: "Fill in App Review contact details", d: "Your name, phone number and email in App Review Information. Paste the review notes from the section above." },
  { t: "Upload the header and search-results artwork", d: "Product Page Information → Header and Search Results, for both languages. Use the 16:9 header (or the 21:9 one) and the 3:2 search image from the section above." },
  { t: "Upload screenshots for iPhone (medium display) and iPad 13\"", d: "Both are required because the app runs on iPad too: iPhone 1206 × 2622, iPad 2064 × 2752 (2048 × 2732 as a fallback). Up to 10 per device and language." },
  { t: "Complete Age Rating and App Privacy", d: "Use the answers below. The rating should come out as 4+." },
  { t: "Choose manual release", d: "Version Release → Manually release this version, so you can launch when babymo.id/app is ready (set APP_STORE_URL then)." },
];

const NOTES: string[] = [
  "\"File dimensions are invalid\" means the image doesn't match the slot. Check the sizes listed under the upload box: the iPhone slot (Dynamic Island, medium display) takes 1206 × 2622, the iPad 13\" slot takes 2064 × 2752 (or the 2048 × 2732 fallback set). Drop iPhone files only on the iPhone tab and iPad files only on the iPad tab.",
  "Kids Category: leave it off for version 1.0. Apps in the Kids Category must put a parental gate in front of every link that leaves the app and every share button, and Baby Mo has both (the footer links and Share on results). You can opt in later after adding a gate.",
  "iPad: the app is portrait-only (iPhone and iPad) with UIRequiresFullScreen, and on iPad every game is scaled to fill the screen. The iPad screenshots were captured that way. If you later want landscape on iPad, remove UIRequiresFullScreen and add the landscape orientations back in Info.plist — and check the layouts first.",
  "Memory Match still shows a \"PRO\" badge on the Juara level. It's only a difficulty level (the review notes say so), but renaming it would avoid any question about paid content.",
];

const CSS = `
:root{color-scheme:light;--bg:#F6F7F4;--card:#FFFFFF;--ink:#16201B;--soft:#5D6A63;--line:#E2E6E1;--accent:#12A15A;--accent-ink:#FFFFFF;--warn:#B35C00;--warn-bg:#FFF4DE;--chip:#EEF4F0}
@media (prefers-color-scheme:dark){:root{color-scheme:dark;--bg:#101412;--card:#181E1B;--ink:#E9EFEB;--soft:#9DABA3;--line:#28312C;--accent:#4FD08D;--accent-ink:#06231A;--warn:#FFC266;--warn-bg:#2A2214;--chip:#1F2824}}
*{box-sizing:border-box}html,body{margin:0;background:var(--bg);color:var(--ink)}
body{font-family:var(--f-body),system-ui,sans-serif;font-size:15px;line-height:1.55}
.w{max-width:1120px;margin:0 auto;padding-block:28px 64px;padding-left:max(16px,env(safe-area-inset-left,0px));padding-right:max(16px,env(safe-area-inset-right,0px))}
h1,h2,h3{font-family:var(--f-round),var(--f-body),sans-serif;margin:0;letter-spacing:-.01em}
h1{font-size:clamp(30px,5vw,44px);line-height:1.05}h2{font-size:26px;margin:44px 0 6px}h3{font-size:18px}
.lead{color:var(--soft);max-width:60ch;margin:8px 0 0}
.top{display:flex;gap:18px;align-items:center;flex-wrap:wrap}
.top img{width:84px;height:84px;border-radius:20px;box-shadow:0 10px 24px -14px rgba(0,0,0,.5)}
.btn{display:inline-flex;align-items:center;gap:8px;min-height:44px;padding:10px 18px;border-radius:12px;border:1px solid var(--line);background:var(--card);color:var(--ink);font:inherit;font-weight:800;cursor:pointer;text-decoration:none}
.btn.pri{background:var(--accent);border-color:var(--accent);color:var(--accent-ink)}
.btn:disabled{opacity:.6;cursor:wait}.btn:focus-visible{outline:3px solid var(--accent);outline-offset:2px}
.bar{display:flex;gap:10px;flex-wrap:wrap;align-items:center;margin-top:18px}
.status{font-weight:700;color:var(--soft)}
.toc{display:flex;gap:8px;flex-wrap:wrap;margin-top:16px}.toc a{font-weight:700;color:var(--ink);background:var(--chip);border-radius:999px;padding:6px 12px;text-decoration:none;font-size:14px}
.group{margin-top:22px;background:var(--card);border:1px solid var(--line);border-radius:18px;padding:16px}
.ghead{display:flex;justify-content:space-between;align-items:flex-start;gap:12px;flex-wrap:wrap;margin-bottom:12px}
.ghead p{margin:2px 0 0;color:var(--soft);font-size:14px}
.grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(118px,1fr));gap:12px}
.grid.ipad{grid-template-columns:repeat(auto-fill,minmax(150px,1fr))}
.grid.wide{grid-template-columns:repeat(auto-fill,minmax(260px,1fr))}
.tile{display:flex;flex-direction:column;gap:6px;min-width:0}
.tile img{width:100%;height:auto;border-radius:10px;border:1px solid var(--line);background:#fff;display:block}
.tile .new{font-size:12px;line-height:1.3;color:var(--soft)}
.tile a.old{font-weight:700;color:var(--soft)}
.tile a{font-size:13px;font-weight:800;color:var(--accent);text-decoration:none;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}
.lang{display:flex;gap:6px;margin:10px 0 0}
.lang button{font:inherit;font-weight:800;padding:7px 14px;border-radius:999px;border:1px solid var(--line);background:var(--card);color:var(--soft);cursor:pointer}
.lang button[aria-pressed=true]{background:var(--ink);color:var(--bg);border-color:var(--ink)}
.field{background:var(--card);border:1px solid var(--line);border-radius:16px;padding:14px 16px;margin-top:12px;min-width:0}
.fhead{display:flex;justify-content:space-between;gap:10px;align-items:center;flex-wrap:wrap}
.fhead small{color:var(--soft);font-size:13px}
.count{font-size:13px;font-weight:800;color:var(--accent);font-variant-numeric:tabular-nums}.count.over{color:#D9480F}
.val{margin-top:8px;white-space:pre-wrap;word-break:break-word;background:var(--chip);border-radius:10px;padding:10px 12px;font-size:14.5px;max-height:320px;overflow:auto}
.copy{min-height:36px;padding:6px 12px;font-size:14px}
.kv{display:grid;grid-template-columns:1fr;gap:10px;margin-top:12px}
@media(min-width:760px){.kv{grid-template-columns:1fr 1fr}}
table{width:100%;border-collapse:collapse;font-size:14.5px}td{padding:8px 10px;border-top:1px solid var(--line);vertical-align:top}td:last-child{font-weight:800;white-space:nowrap}
.tbl{background:var(--card);border:1px solid var(--line);border-radius:16px;padding:6px 6px;margin-top:12px;overflow-x:auto}
.check{list-style:none;padding:0;margin:12px 0 0;display:grid;gap:10px}
.check li{display:flex;gap:12px;align-items:flex-start;background:var(--card);border:1px solid var(--line);border-radius:14px;padding:12px 14px}
.check input{width:22px;height:22px;margin-top:2px;accent-color:var(--accent);flex:0 0 auto}
.check b{display:block}.check span{color:var(--soft);font-size:14px}
.check li.done b{text-decoration:line-through;color:var(--soft)}
.note{background:var(--warn-bg);color:var(--ink);border-radius:14px;padding:12px 14px;margin-top:10px;font-size:14.5px}
.note b{color:var(--warn)}
.toast{position:fixed;left:50%;bottom:calc(20px + env(safe-area-inset-bottom,0px));transform:translateX(-50%);background:var(--ink);color:var(--bg);padding:10px 16px;border-radius:999px;font-weight:800;opacity:0;transition:opacity .2s;pointer-events:none}
.toast.on{opacity:1}
`;

const SCRIPT = `
(function(){
var toast=document.getElementById('toast'),tt;
function say(m){toast.textContent=m;toast.classList.add('on');clearTimeout(tt);tt=setTimeout(function(){toast.classList.remove('on')},1600)}
document.addEventListener('click',function(e){
  var c=e.target.closest('[data-copy]'); if(c){var el=document.getElementById(c.getAttribute('data-copy')),txt=el.textContent;
    (navigator.clipboard?navigator.clipboard.writeText(txt):Promise.reject()).then(function(){say('Copied')}).catch(function(){var r=document.createRange();r.selectNodeContents(el);var s=getSelection();s.removeAllRanges();s.addRange(r);say('Selected — press Copy')});}
  var l=e.target.closest('[data-lang]'); if(l){var v=l.getAttribute('data-lang');document.querySelectorAll('[data-lang]').forEach(function(b){b.setAttribute('aria-pressed',String(b===l))});document.querySelectorAll('[data-pane]').forEach(function(p){p.hidden=p.getAttribute('data-pane')!==v});}
  var z=e.target.closest('[data-zip]'); if(z){zip(z);}
});
function zip(btn){
  if(!window.JSZip){say('ZIP tool is still loading — try again');return;}
  var sel=btn.getAttribute('data-zip'),files=[].slice.call(document.querySelectorAll(sel==='all'?'[data-file]':'#'+sel+' [data-file]'));
  var z=new JSZip(),done=0,label=btn.textContent; btn.disabled=true;
  Promise.all(files.map(function(a){return fetch(a.href).then(function(r){return r.blob()}).then(function(b){z.file(a.getAttribute('data-file'),b);done++;btn.textContent='Preparing '+done+'/'+files.length+'…';})}))
  .then(function(){return z.generateAsync({type:'blob'})}).then(function(b){var u=URL.createObjectURL(b),a=document.createElement('a');a.href=u;a.download=(sel==='all'?'baby-mo-app-store-kit':sel)+'.zip';document.body.appendChild(a);a.click();a.remove();setTimeout(function(){URL.revokeObjectURL(u)},4000);say('Download started');})
  .catch(function(){say('Download failed — check your connection')}).then(function(){btn.disabled=false;btn.textContent=label;});
}
document.querySelectorAll('.check input').forEach(function(cb){var k='ask-'+cb.id;try{cb.checked=localStorage.getItem(k)==='1'}catch(e){}cb.closest('li').classList.toggle('done',cb.checked);
  cb.addEventListener('change',function(){try{localStorage.setItem(k,cb.checked?'1':'0')}catch(e){}cb.closest('li').classList.toggle('done',cb.checked)})});
})();`;

function count(f: Field) {
  const n = f.bytes ? new TextEncoder().encode(f.value).length : [...f.value].length;
  return { n, over: f.limit ? n > f.limit : false };
}

export default function AppStoreKit() {
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
              <h1>Baby Mo · App Store Kit</h1>
              <p className="lead">Everything for the App Store Connect submission: screenshots at Apple&apos;s sizes, caption banners, and every listing field ready to copy. All facts are checked against the app.</p>
            </div>
          </div>
          <div className="bar">
            <button className="btn pri" data-zip="all" type="button">⬇ Download everything (ZIP)</button>
            <a className="btn" href={asset("/app-store-kit/app-icon-1024.png")} download="baby-mo-app-icon-1024.png">App icon 1024 px</a>
          </div>
          <nav className="toc" aria-label="Sections">
            <a href="#screens">Screenshots</a><a href="#creative">Header &amp; search</a><a href="#listing">Listing text</a><a href="#info">App information</a>
            <a href="#age">Age rating</a><a href="#privacy">App privacy</a><a href="#review">Review notes</a><a href="#checklist">Checklist</a><a href="#notes">Heads-up</a>
          </nav>

          <h2 id="screens">Screenshots &amp; banners</h2>
          <p className="lead">App Store Connect needs at least one image (up to 10) for <b>iPhone with Dynamic Island (medium display)</b> — 1206 × 2622 px — and for <b>iPad 13&quot; display</b> — 2064 × 2752 px — because the app also runs on iPad. Apple scales them for the other devices. Each file is a plain JPG, RGB, no transparency. Upload the banners in order 01 → 10; the first three show in search results. <b>Retaken a third time 10 Nov 2026</b> after the iOS glass redesign: images marked ✨ Baru changed (banners 03 Hijaiyah letters, 08 Prayer and 10 Safe for kids; plain screenshots Pray with Mo, Huruf Hijaiyah, Dreamtime and Susun Huruf) and each keeps a “↩ versi lama” link to the version before this retake; everything else is unchanged. Refreshed November 2026 with the latest build: 15 games, 14 du'as, Sahabat Hewan Mo and Kebun Kecil Ais.</p>
          {groups.map((g) => (
            <section className="group" id={g.id} key={g.id}>
              <div className="ghead">
                <div><h3>{g.title}</h3><p>{g.size} · {g.files.length} images · {g.note}</p></div>
                <button className="btn" data-zip={g.id} type="button">⬇ Download group (ZIP)</button>
              </div>
              <div className={`grid${g.id.includes("ipad") ? " ipad" : ""}`}>
                {g.files.map((f) => (
                  <div className="tile" key={f.src}>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={asset("/" + f.thumb)} alt={f.name} loading="lazy" />
                    <a href={asset("/" + f.src)} download data-file={f.src.split("/").pop()}>⬇ {f.name}</a>
                    {(() => { const k = f.src.split("/").pop()!.replace(/\.jpg$/, "").split("-").slice(2).join("-");
                      return CHANGED.has(k) ? (<>
                        <span className="new">✨ Baru: {CHANGE_NOTE[k]}</span>
                        <a className="old" href={asset("/app-store-kit/prev/" + f.src.replace("app-store-kit/", ""))} download>↩ versi lama</a>
                      </>) : null; })()}
                  </div>
                ))}
              </div>
            </section>
          ))}

          <h2 id="creative">Header &amp; Search Results</h2>
          <p className="lead">The product page header and the search-results artwork (App Store Connect → Product Page Information → <b>Header and Search Results</b>). No transparency, as Apple requires. The headline and characters sit in the middle so nothing important is hidden when Apple crops the image or places the app icon and Get button on top. Upload the <b>ID</b> files to the Indonesian localization and the <b>EN</b> files to English (U.S.).</p>
          <section className="group" id="creative-assets">
            <div className="ghead">
              <div><h3>Header &amp; search artwork · ID + EN</h3><p>6 images · Baby Mo, Kak Adam and Ais with the farm friends and hijaiyah blocks</p></div>
              <button className="btn" data-zip="creative-assets" type="button">⬇ Download group (ZIP)</button>
            </div>
            {CREATIVE.map((c) => (
              <div key={c.id} style={{ marginTop: 14 }}>
                <b>{c.title}</b> <small style={{ color: "var(--soft)" }}>· {c.size}</small>
                <p style={{ margin: "2px 0 8px", color: "var(--soft)", fontSize: 14 }}>{c.note}</p>
                <div className="grid wide">
                  {(["id", "en"] as const).map((lang) => {
                    const file = `${c.base}-${lang}.${c.ext}`;
                    return (
                      <div className="tile" key={file}>
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img src={asset(`/app-store-kit/thumbs/${c.base}-${lang}.webp`)} alt={`${c.title} ${lang.toUpperCase()}`} loading="lazy" />
                        <a href={asset(`/app-store-kit/creative/${file}`)} download data-file={file}>⬇ {lang === "id" ? "Bahasa Indonesia" : "English (U.S.)"}</a>
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
          </section>

          <h2 id="listing">Listing text</h2>
          <p className="lead">Paste each field into App Store Connect. The counter shows Apple&apos;s limit (keywords count in bytes).</p>
          <div className="lang" role="group" aria-label="Language">
            <button type="button" data-lang="id" aria-pressed="true">Bahasa Indonesia (primary)</button>
            <button type="button" data-lang="en" aria-pressed="false">English (U.S.)</button>
          </div>
          {(["id", "en"] as const).map((lang) => (
            <div data-pane={lang} hidden={lang !== "id"} key={lang}>
              {fields(lang).map((f, i) => {
                const c = count(f), id = `f-${lang}-${i}`;
                return (
                  <div className="field" key={id}>
                    <div className="fhead">
                      <div><b>{f.label}</b> <small>· {f.where}</small></div>
                      <div style={{ display: "flex", gap: 10, alignItems: "center" }}>
                        {f.limit ? <span className={`count${c.over ? " over" : ""}`}>{c.n} / {f.limit}</span> : null}
                        <button className="btn copy" type="button" data-copy={id}>Copy</button>
                      </div>
                    </div>
                    <div className="val" id={id}>{f.value}</div>
                  </div>
                );
              })}
            </div>
          ))}

          <h2 id="info">App information</h2>
          <div className="kv">
            {FACTS.map((f, i) => (
              <div className="field" key={f.label} style={{ marginTop: 0 }}>
                <div className="fhead"><div><b>{f.label}</b> <small>· {f.where}</small></div><button className="btn copy" type="button" data-copy={`k-${i}`}>Copy</button></div>
                <div className="val" id={`k-${i}`}>{f.value}</div>
                {f.note ? <small style={{ color: "var(--soft)", display: "block", marginTop: 6 }}>{f.note}</small> : null}
              </div>
            ))}
          </div>

          <h2 id="age">Age rating</h2>
          <p className="lead">App Information → Age Rating. With these answers the rating comes out as <b>4+</b>.</p>
          <div className="tbl"><table><tbody>{AGE.map(([q, a]) => <tr key={q}><td>{q}</td><td>{a}</td></tr>)}</tbody></table></div>

          <h2 id="privacy">App privacy</h2>
          <p className="lead">App Privacy → Data Types. These match the privacy policy at babymo.id/privacy.</p>
          <div className="tbl"><table><tbody>{PRIVACY.map(([q, a]) => <tr key={q}><td>{q}</td><td>{a}</td></tr>)}</tbody></table></div>

          <h2 id="review">Notes for App Review</h2>
          <div className="field">
            <div className="fhead"><div><b>Notes</b> <small>· App Review Information → Notes</small></div><button className="btn copy" type="button" data-copy="review-notes">Copy</button></div>
            <div className="val" id="review-notes">{REVIEW_NOTES}</div>
          </div>
          <div className="field">
            <div className="fhead"><div><b>Export compliance</b> <small>· asked when you select a build</small></div></div>
            <div className="val">Does your app use encryption? → Yes, only standard HTTPS (exempt). Choose &quot;None of the algorithms mentioned above&quot;. After adding ITSAppUsesNonExemptEncryption = NO to Info.plist, Apple stops asking.</div>
          </div>
          <div className="field">
            <div className="fhead"><div><b>Content rights</b> <small>· App Information</small></div></div>
            <div className="val">Does your app contain, show or access third-party content? → Yes, and you have the rights: Qur&apos;an and hadith texts are public domain, fonts are open-licensed (SIL OFL), and prayer times come from the free AlAdhan API.</div>
          </div>

          <h2 id="checklist">Before you press Submit</h2>
          <ul className="check">
            {CHECK.map((c, i) => (
              <li key={c.t}><input type="checkbox" id={`c${i}`} aria-label={c.t} /><label htmlFor={`c${i}`}><b>{c.t}</b><span>{c.d}</span></label></li>
            ))}
          </ul>

          <h2 id="notes">Heads-up</h2>
          {NOTES.map((n) => <div className="note" key={n}><b>Note · </b>{n}</div>)}
        </main>
        <div className="toast" id="toast" role="status" aria-live="polite" />
        <script dangerouslySetInnerHTML={{ __html: SCRIPT }} />
      </body>
    </html>
  );
}
