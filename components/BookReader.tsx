"use client";

import { useCallback, useEffect, useLayoutEffect, useRef, useState } from "react";
import { Literata } from "next/font/google";
import { asset } from "@/lib/i18n/config";
import { posePath } from "@/lib/games/poses";
import { StoryScene } from "@/components/StoryScene";
import type { SceneKey } from "@/lib/cerita/scene";
import { StoryArt } from "@/components/story-art/StoryArt";
import type { ArtScene } from "@/lib/cerita/illus-types";
import { ReadText, useNarrator, useLullabySound, playBlip } from "@/components/book/readaloud";
import { FIND_IT, TAP_NAMES } from "@/lib/cerita/find-it";
import { stickerFor, awardSticker, getStickers, collectFact, factKey, isFact } from "@/lib/cerita/stickers";
import { INTERACTIVE, NAME_KEY } from "@/lib/cerita/interactive";
import { coloringFor } from "@/lib/cerita/coloring";

type Block = { type: "p" | "quote"; html: string; src?: number; cont?: boolean };

/** A real book typeface for the story text (designed for long reading in
 *  e-books). Headings keep the rounded Baby Mo display face. */
const bookFace = Literata({
  subsets: ["latin"],
  style: ["normal", "italic"],
  display: "swap",
  fallback: ["Georgia", "Cambria", "Times New Roman", "serif"],
});

type Sheet =
  | { kind: "cover" }
  | { kind: "content"; blocks: Block[]; vig?: string; pose?: string; art?: number }
  | { kind: "pic"; i: number }
  | { kind: "talk" }
  | { kind: "card" }
  | { kind: "end" };

export type PicturePage = { text: string; quote?: string; scene: ArtScene };

/**
 * Keyword → drawn CSS "vignette" kind. Ordered: more specific first.
 * Bilingual (id + en). Each kind renders as a small CSS illustration in the
 * page corner (see renderVignette + the .bk-vig styles) — a real little
 * drawing rather than an emoji.
 */
const VIGNETTES: [RegExp, string][] = [
  [/matahari|sinar|\bsun\b|sunny|sunshine|cerah/i, "sun"],
  [/bulan|malam|\bmoon|night|tidur|sleep|selimut|mengantuk|menguap/i, "moon"],
  [/bintang|\bstar/i, "star"],
  [/awan|cloud/i, "cloud"],
  [/hujan|\brain|gerimis/i, "rain"],
  [/tunas|tumbuh|grow|sprout|biji|kacang|seed|menanam|tanam|\bplant|kecambah/i, "sprout"],
  [/bunga|flower|mawar|tulip|melati|kebun|taman|garden/i, "flower"],
  [/malaikat|angel|sayap|\bwing/i, "wing"],
  [/berbagi|\bshare|sharing|hadiah|\bgift|memberi|sedekah|\bgive/i, "gift"],
  [/stoples|toples|\bjar\b/i, "jar"],
  [/masjid|mosque|sholat|salat|\bpray|sujud|takbir/i, "mosque"],
  [/qur'?an|quran|mushaf|kitab suci|ayat|surah|mengaji|ngaji/i, "quran"],
  [/buku|\bbook\b|baca|\bread|cerita|story/i, "book"],
  [/puasa|ramadan|ramadhan|berbuka|sahur|\bfast/i, "lantern"],
  [/rezeki|rizki|\bnasi\b|\broti|\bbread|lapar|kenyang|panen|sawah|makanan/i, "bread"],
  [/jujur|kejujuran|honest|truth|bohong|berbohong/i, "shield"],
  [/keluarga|family|orang ?tua|berbakti|silaturahmi/i, "house"],
  [/hati|sayang|\blove\b|peluk|\bhug|cinta/i, "heart"],
  [/\bair\b|water|siram|tetes/i, "drop"],
  [/daun|leaf|pohon|\btree|hijau/i, "leaf"],
  [/\bdoa\b|\bdua\b|bismillah|berdoa|alhamdulillah|syukur|grateful/i, "star"],
];

/** Reveal label for each vignette kind, shown when a child taps the art. */
const VIG_LABEL: Record<string, { id: string; en: string }> = {
  sun: { id: "Matahari", en: "Sun" },
  moon: { id: "Bulan", en: "Moon" },
  star: { id: "Bintang", en: "Star" },
  cloud: { id: "Awan", en: "Cloud" },
  rain: { id: "Hujan", en: "Rain" },
  sprout: { id: "Tunas", en: "Sprout" },
  flower: { id: "Bunga", en: "Flower" },
  jar: { id: "Stoples", en: "Jar" },
  mosque: { id: "Masjid", en: "Mosque" },
  book: { id: "Buku", en: "Book" },
  heart: { id: "Sayang", en: "Love" },
  drop: { id: "Air", en: "Water" },
  leaf: { id: "Daun", en: "Leaf" },
  wing: { id: "Malaikat", en: "Angel" },
  gift: { id: "Hadiah", en: "Gift" },
  quran: { id: "Al-Qur'an", en: "Qur'an" },
  lantern: { id: "Ramadan", en: "Ramadan" },
  bread: { id: "Rezeki", en: "Provision" },
  shield: { id: "Jujur", en: "Honest" },
  house: { id: "Keluarga", en: "Family" },
};

/** Generic "scenery" kinds — common across stories; the rest are the more
 *  distinctive/topical illustrations we prefer to surface when present. */
const GENERIC_VIG = new Set(["sun", "moon", "star", "cloud", "heart", "leaf", "drop"]);

function vignetteFor(text: string, exclude?: string): string | null {
  // Prefer a distinctive (non-generic) match so unique art surfaces; avoid
  // repeating the previous page's vignette; fall back gracefully.
  for (const [re, k] of VIGNETTES) if (!GENERIC_VIG.has(k) && k !== exclude && re.test(text)) return k;
  for (const [re, k] of VIGNETTES) if (!GENERIC_VIG.has(k) && re.test(text)) return k;
  for (const [re, k] of VIGNETTES) if (k !== exclude && re.test(text)) return k;
  for (const [re, k] of VIGNETTES) if (re.test(text)) return k;
  return null;
}

/** Keyword → Baby Mo pose filename, for the character that appears on pages
 *  that don't get a drawn vignette. Falls back to a rotating set. */
const POSE_RULES: [RegExp, string][] = [
  [/senang|gembira|girang|tertawa|laugh|happy|\bjoy|melompat|hore|asyik/i, "baby-mo-yeyy.png"],
  [/penasaran|\bide\b|idea|wonder|curious|berpikir|kenapa|mengapa|takjub/i, "baby-mo-idea.png"],
  [/berani|semangat|brave|yakin|\bbisa\b|hebat/i, "baby-mo-yes.png"],
  [/terima kasih|syukur|thank|alhamdulillah|berdoa|\bdoa\b/i, "baby-mo-thank-you.png"],
  [/lari|\brun|cepat|kejar|buru/i, "baby-mo-run.png"],
];
const FALLBACK_CPOSES = [
  "baby-mo-ok.png",
  "baby-mo-alright.png",
  "baby-mo-pose-22.png",
  "baby-mo-idea.png",
  "baby-mo-pose-31.png",
];
function contentPose(text: string, idx: number): string {
  for (const [re, f] of POSE_RULES) if (re.test(text)) return f;
  return FALLBACK_CPOSES[idx % FALLBACK_CPOSES.length]!;
}

/** Render a drawn CSS vignette for a kind (some kinds need inner elements). */
function renderVignette(kind: string) {
  if (
    kind === "cloud" ||
    kind === "sprout" ||
    kind === "wing" ||
    kind === "gift" ||
    kind === "quran" ||
    kind === "lantern" ||
    kind === "house" ||
    kind === "mosque" ||
    kind === "book"
  ) {
    return (
      <span className={`bk-vig bk-vig--${kind}`} aria-hidden>
        <i />
      </span>
    );
  }
  if (kind === "rain") {
    return (
      <span className="bk-vig bk-vig--rain" aria-hidden>
        <i className="c" />
        <i className="dp" style={{ left: "30%" }} />
        <i className="dp" style={{ left: "52%" }} />
        <i className="dp" style={{ left: "72%" }} />
      </span>
    );
  }
  return <span className={`bk-vig bk-vig--${kind}`} aria-hidden />;
}

/**
 * One page's illustration (a drawn vignette or a Baby Mo pose), made
 * interactive: tapping it pops the art, sends out a little sparkle, and
 * reveals the thing's name. Each instance owns its own state so left/right
 * pages in a spread behave independently.
 */
function PageArt({
  vig,
  poseSrc,
  label,
  hint,
  tapHint,
}: {
  vig?: string;
  poseSrc?: string;
  label?: string;
  hint?: boolean;
  tapHint: string;
}) {
  const [n, setN] = useState(0);
  const [show, setShow] = useState(false);
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);
  useEffect(() => () => {
    if (timer.current) clearTimeout(timer.current);
  }, []);
  const tap = () => {
    setN((x) => x + 1);
    setShow(true);
    if (timer.current) clearTimeout(timer.current);
    timer.current = setTimeout(() => setShow(false), 1700);
  };
  return (
    <button type="button" className="bk-art-btn" onClick={tap} aria-label={label}>
      <span className={`bk-art-fig${n ? " bk-pop" : ""}`} key={n}>
        {vig ? (
          renderVignette(vig)
        ) : poseSrc ? (
          <img className="bk-cpose" src={poseSrc} alt="" draggable={false} loading="lazy" />
        ) : null}
        {n > 0 && (
          <span className="bk-art-spark" key={`s${n}`} aria-hidden>
            <i />
            <i />
            <i />
            <i />
          </span>
        )}
      </span>
      {show && label && <span className="bk-art-label">{label}</span>}
      {hint && n === 0 && <span className="bk-art-hint">{tapHint}</span>}
    </button>
  );
}

type Props = {
  locale: "id" | "en";
  /** story slug — turns on per-book extras (find-it, stickers) */
  slug?: string;
  title: string;
  hook: string;
  body: string;
  takeaway: string;
  poseSrc?: string | null;
  /** Scene key for the illustrated cover (sky/sun/moon/hills). */
  scene: SceneKey;
  /** Pose filename shown standing in the cover scene. */
  coverPose: string;
  /** Optional different pose for the closing page (e.g. a waving goodbye). */
  endPose?: string | null;
  /** Recommended next story shown on the closing page. */
  nextStory?: { href: string; title: string } | null;
  byline?: string;
  /** Decorative drifting emoji themed to the story (ambient layer). */
  accent?: string[];
  /** Illustrated stories: animated scenes shown big at the top of each
   *  page, matched to the text by paragraph index. */
  art?: ArtScene[] | null;
  /** Picture books: every page is one full illustration with its text. */
  picture?: PicturePage[] | null;
  pictureCover?: ArtScene | null;
  /** "Kartu untuk Ayah & Bunda" — three practical tips, its own page before the end. */
  card?: { title: string; items: string[] } | null;
};

const FONT_STEPS = [17, 19, 22, 25];

function parseBlocks(body: string): Block[] {
  return body
    .trim()
    .split(/\n\s*\n/)
    .map((raw) => {
      const quote = raw.startsWith("> ");
      let text = quote
        ? raw
            .split("\n")
            .map((l) => l.replace(/^>\s?/, ""))
            .join(" ")
        : raw;
      text = text
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/\*\*([^*]+)\*\*/g, "<strong>$1</strong>")
        .replace(/\*([^*]+)\*/g, "<em>$1</em>");
      return { type: quote ? ("quote" as const) : ("p" as const), html: text };
    });
}

/* Line icons for the Book Mode controls — same style as the site's icons. */
const Ico = ({ children }: { children: React.ReactNode }) => (
  <svg className="bk-ico" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
    {children}
  </svg>
);
const SpeakerIcon = () => (
  <Ico>
    <path d="M11 5 6 9H3v6h3l5 4V5z" fill="currentColor" fillOpacity=".15" />
    <path d="M15.5 8.5a5 5 0 0 1 0 7" />
    <path d="M18.5 5.5a9 9 0 0 1 0 13" />
  </Ico>
);
/** Playing: three bars bouncing like a sound meter. */
const PlayingIcon = () => (
  <span className="bk-eq" aria-hidden><i /><i /><i /></span>
);
const ShortIcon = () => (
  <Ico>
    <rect x="3" y="4" width="18" height="16" rx="4" />
    <path d="M7 10h10" />
    <path d="M7 14h5" />
  </Ico>
);
const MoonIcon = () => (
  <Ico>
    <path d="M20 14.5A8 8 0 1 1 9.5 4a6.5 6.5 0 0 0 10.5 10.5z" fill="currentColor" fillOpacity=".15" />
    <path d="M17 3v3M15.5 4.5h3" />
  </Ico>
);
const VoiceIcon = () => (
  <svg className="bk-ico" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" aria-hidden>
    <rect x="9" y="3" width="6" height="11" rx="3" />
    <path d="M5 11a7 7 0 0 0 14 0M12 18v3" />
  </svg>
);

export function BookReader({
  locale,
  slug,
  title,
  hook,
  body,
  takeaway,
  poseSrc,
  scene,
  coverPose,
  endPose,
  nextStory,
  byline = "Baby Mo",
  accent = ["✨", "🌙", "⭐"],
  art = null,
  picture = null,
  pictureCover = null,
  card = null,
}: Props) {
  const t =
    locale === "id"
      ? {
          open: "Baca Mode Buku",
          openSub: "Tampilan buku interaktif untuk dibaca bareng si kecil",
          close: "Tutup",
          prev: "Sebelumnya",
          next: "Berikutnya",
          cover: "Cerita Baby Mo",
          start: "Buka buku →",
          end: "Tamat",
          endSub: "Sampai jumpa di cerita berikutnya, ya!",
          page: "Halaman",
          font: "Ukuran huruf",
          bye: "Dadah! 👋",
          tapHint: "Ketuk Baby Mo 👆",
          wave: "Lambaikan tangan Baby Mo",
          nextStory: "Baca cerita berikutnya",
          tapReveal: "Ketuk untuk lihat! 👆",
          babymo: "Baby Mo",
          backTag: "Cerita bergambar untuk dibaca bersama",
          cardBadge: "Kartu untuk Ayah & Bunda",
          read: "Bacakan",
          readStop: "Berhenti",
          night: "Mode tidur",
          nightOn: "Mode tidur aktif · suara ombak pelan",
          sleepDone: "Selamat tidur 🌙",
          find: "Cari",
          found: "Ketemu!",
          sticker: "Hore! Kamu dapat stiker baru!",
          stickerAgain: "Stiker cerita ini sudah ada di koleksimu",
          stickers: (n: number) => `Koleksimu: ${n} stiker`,
          seeCollection: "Lihat koleksi stikermu →",
          newFact: "Kartu fakta baru!",
          yourTurn: "Giliranmu!",
          yourTurnSay: "Ayo, giliranmu!",
          wellDone: "Hebat!",
          readFor: "Dibacakan untuk",
          namePh: "nama si kecil",
          hooray: (n: string) => `Hore, ${n}!`,
          voice: "Suara",
          speedLabel: "Kecepatan",
          speeds: { slow: "Pelan", mid: "Sedang", fast: "Cepat" },
          noVoice: "Perangkat ini belum punya suara Bahasa Indonesia, jadi teks disorot tanpa suara. Tambahkan di Pengaturan › Bahasa › Teks-ke-ucapan (pilih Bahasa Indonesia).",
          short: "Pendek",
          shortOn: "Versi pendek untuk si kecil",
          talk: "Ngobrol, yuk!",
          talkSub: "Pertanyaan untuk dibahas bersama setelah membaca",
          color: "🖍️ Halaman mewarnai cerita ini",
        }
      : {
          open: "Read in Book Mode",
          openSub: "An interactive book view to read with your little one",
          close: "Close",
          prev: "Previous",
          next: "Next",
          cover: "A Baby Mo Story",
          start: "Open the book →",
          end: "The End",
          endSub: "See you in the next story!",
          page: "Page",
          font: "Text size",
          bye: "Bye-bye! 👋",
          tapHint: "Tap Baby Mo 👆",
          wave: "Make Baby Mo wave",
          nextStory: "Read the next story",
          tapReveal: "Tap to reveal! 👆",
          babymo: "Baby Mo",
          backTag: "A picture book to read together",
          cardBadge: "A card for parents",
          read: "Read to me",
          readStop: "Stop",
          night: "Bedtime",
          nightOn: "Bedtime mode · soft waves",
          sleepDone: "Good night 🌙",
          find: "Find",
          found: "Found it!",
          sticker: "Hooray! You earned a new sticker!",
          stickerAgain: "This story's sticker is already in your collection",
          stickers: (n: number) => `Your collection: ${n} stickers`,
          seeCollection: "See your sticker book →",
          newFact: "New fact card!",
          yourTurn: "Your turn!",
          yourTurnSay: "Now it's your turn!",
          wellDone: "Well done!",
          readFor: "Read for",
          namePh: "your child's name",
          hooray: (n: string) => `Hooray, ${n}!`,
          voice: "Voice",
          speedLabel: "Speed",
          speeds: { slow: "Slow", mid: "Medium", fast: "Fast" },
          noVoice: "This device has no English voice installed, so the words light up silently. Add one in Settings › Language › Text-to-speech.",
          short: "Short",
          shortOn: "Short version for little ones",
          talk: "Let's talk!",
          talkSub: "Questions to chat about after reading",
          color: "🖍️ Colouring page for this story",
        };

  const blocksRef = useRef<Block[]>(parseBlocks(body));
  const [open, setOpen] = useState(false);
  const [isSpread, setIsSpread] = useState(false);
  const [fontIdx, setFontIdx] = useState(1);
  const [sheets, setSheets] = useState<Sheet[] | null>(null);
  const [pos, setPos] = useState(0); // sheet index (single) / left sheet index (spread)
  const [dir, setDir] = useState<"next" | "prev" | "open">("open");
  const [waved, setWaved] = useState(0); // bump to replay the goodbye wave
  const waveTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const bookRef = useRef<HTMLDivElement>(null);
  const sizeRef = useRef<HTMLDivElement>(null);

  const fontPx = FONT_STEPS[fontIdx];

  // Track spread vs single by viewport width.
  useEffect(() => {
    if (!open) return;
    const mq = window.matchMedia("(min-width: 860px)");
    const apply = () => setIsSpread(mq.matches);
    apply();
    mq.addEventListener("change", apply);
    return () => mq.removeEventListener("change", apply);
  }, [open]);

  // Lock scroll + Escape to close while open.
  useEffect(() => {
    if (!open) return;
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
      if (e.key === "ArrowRight") go(1);
      if (e.key === "ArrowLeft") go(-1);
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prevOverflow;
      window.removeEventListener("keydown", onKey);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [open, sheets, pos, isSpread]);

  // Paginate the body to fit the measured page-content box.
  const paginate = useCallback(() => {
    if (picture && picture.length) {
      const out: Sheet[] = [
        { kind: "cover" },
        ...picture.map((_, i) => ({ kind: "pic" as const, i })),
        ...(slug && INTERACTIVE[slug]?.talk ? [{ kind: "talk" as const }] : []),
        ...(card ? [{ kind: "card" as const }] : []),
        { kind: "end" },
      ];
      setSheets(out);
      setPos((prev) => Math.min(prev, out.length - 1));
      return;
    }
    const content = sizeRef.current;
    if (!content) return;
    // Real pages are a hair narrower than the sizer in the two-page spread
    // (the spine sits between them), so measure slightly narrower and keep a
    // little air at the bottom — otherwise the last line can be clipped.
    const width = content.clientWidth - 6;
    // The sizer already includes the top art band, so the measured content
    // box is the space left for text.
    const maxH = content.clientHeight - 4;
    if (maxH < 40 || width < 40) return;

    const measurer = document.createElement("div");
    measurer.className = "bk-prose";
    measurer.style.cssText = `position:absolute;left:-99999px;top:0;visibility:hidden;width:${width}px;`;
    // The .bk-prose rules read var(--bk-fs); set it here so the measurer
    // reflows at the chosen size (it's outside .bk-book, so the var would
    // otherwise fall back to the default and pagination would never change).
    measurer.style.setProperty("--bk-fs", `${fontPx}px`);
    document.body.appendChild(measurer);

    const contentPages: Block[][] = [];
    let cur: Block[] = [];
    measurer.classList.add("bk-prose--first");
    const blocks = blocksRef.current;

    const reset = () => {
      measurer.innerHTML = "";
    };
    const addEl = (b: Block) => {
      const el = document.createElement(b.type === "quote" ? "blockquote" : "p");
      el.innerHTML = b.html;
      measurer.appendChild(el);
    };

    const newPage = () => {
      contentPages.push(cur);
      cur = [];
      measurer.classList.remove("bk-prose--first");
      reset();
    };
    // Like a printed book, a long paragraph may continue on the next page:
    // when it doesn't fit, break it at the last sentence that does.
    const sentences = (html: string) => html.split(/(?<=[.!?…]["”’']?)\s+(?=\S)/);
    for (let bi = 0; bi < blocks.length; bi++) {
      let b: Block = { ...blocks[bi]!, src: bi };
      for (;;) {
        addEl(b);
        if (measurer.scrollHeight <= maxH) {
          cur.push(b);
          break;
        }
        measurer.lastChild?.remove();
        const parts = b.type === "p" && !/<[a-z]/i.test(b.html) ? sentences(b.html) : [b.html];
        let fit = 0;
        for (let k = parts.length - 1; k >= 1; k--) {
          addEl({ type: "p", html: parts.slice(0, k).join(" ") });
          const ok = measurer.scrollHeight <= maxH;
          measurer.lastChild?.remove();
          if (ok) {
            fit = k;
            break;
          }
        }
        if (fit > 0) {
          cur.push({ ...b, html: parts.slice(0, fit).join(" ") });
          b = { ...b, html: parts.slice(fit).join(" "), cont: true };
          newPage();
          continue;
        }
        if (cur.length === 0) {
          // a single block taller than the page — let it be its own page
          cur.push(b);
          break;
        }
        newPage();
      }
    }
    if (cur.length) contentPages.push(cur);
    document.body.removeChild(measurer);

    // Give every content page a real illustration: alternate a drawn CSS
    // vignette (keyword-matched) with a Baby Mo pose, so it reads as an
    // illustrated book rather than text. Avoid repeating the same vignette.
    const out: Sheet[] = [{ kind: "cover" }];
    let lastVig: string | undefined;
    if (art && art.length) {
      contentPages.forEach((p) => {
        const first = p[0]?.src ?? 0;
        let k = 0;
        art.forEach((sc, j) => {
          if (sc.at <= first) k = j;
        });
        out.push({ kind: "content", blocks: p, art: k });
      });
      out.push({ kind: "end" });
      setSheets(out);
      setPos((prev) => Math.min(prev, out.length - 1));
      return;
    }
    contentPages.forEach((p, i) => {
      const text = p.map((b) => b.html.replace(/<[^>]+>/g, "")).join(" ");
      let vig: string | undefined;
      let pose: string | undefined;
      const v = vignetteFor(text, lastVig);
      if (v && !GENERIC_VIG.has(v)) {
        // Distinctive/topical art always shows (it's the point of the page).
        vig = v;
        lastVig = v;
      } else if (i % 2 === 0 && v) {
        // Generic scenery alternates with the Baby Mo character.
        vig = v;
        lastVig = v;
      } else {
        pose = contentPose(text, i);
      }
      out.push({ kind: "content", blocks: p, vig, pose });
    });
    out.push({ kind: "end" });
    setSheets(out);
    setPos((prev) => Math.min(prev, out.length - 1));
  }, [fontPx, art, picture, card]);

  // Recompute pagination on open / font / layout change.
  useLayoutEffect(() => {
    if (!open) return;
    const id = requestAnimationFrame(paginate);
    const ro = new ResizeObserver(() => paginate());
    if (bookRef.current) ro.observe(bookRef.current);
    return () => {
      cancelAnimationFrame(id);
      ro.disconnect();
    };
  }, [open, isSpread, fontPx, paginate]);

  const total = sheets?.length ?? 1;

  // Picture books on a wide screen: one story page per spread, its
  // illustration running across both halves like a printed picture book.
  const picSpread = isSpread && !!(picture && picture.length);

  const go = (delta: number) => {
    setPos((p) => {
      const nextLeft = isSpread && !picSpread
        ? Math.max(0, Math.min(p + delta * 2, (total % 2 === 0 ? total : total + 1) - 2))
        : Math.max(0, Math.min(p + delta, total - 1));
      if (nextLeft !== p) setDir(delta > 0 ? "next" : "prev");
      return nextLeft;
    });
  };

  /* ── join the story: name, chants, choices ── */
  const inter = slug ? INTERACTIVE[slug] : undefined;
  const [childName, setChildName] = useState("");
  useEffect(() => {
    try { setChildName(localStorage.getItem(NAME_KEY) ?? ""); } catch {}
  }, []);
  const saveName = (v: string) => {
    const n = v.replace(/[<>]/g, "").slice(0, 20);
    setChildName(n);
    try { localStorage.setItem(NAME_KEY, n.trim()); } catch {}
  };
  const nameIn = (text: string) => (inter?.friend && childName.trim() ? text.split(inter.friend).join(childName.trim()) : text);
  const [shortMode, setShortMode] = useState(false);
  useEffect(() => {
    try { setShortMode(localStorage.getItem("bm-short") === "1"); } catch {}
  }, []);
  const toggleShort = () => {
    setShortMode((v) => {
      try { localStorage.setItem("bm-short", v ? "0" : "1"); } catch {}
      return !v;
    });
  };
  const textOf = (i: number) => {
    const sh = shortMode ? inter?.short?.[i] : undefined;
    return nameIn(sh ? sh[locale === "id" ? 0 : 1] : picture?.[i]?.text ?? "");
  };
  const [picked, setPicked] = useState<Record<number, number[]>>({});
  const [chantOn, setChantOn] = useState(-1);
  const choiceDone = (i: number) => {
    const c = inter?.choices?.[i];
    return !c || (picked[i] ?? []).some((o) => c.options[o]?.good);
  };

  /* ── read-aloud + bedtime ── */
  const [readOn, setReadOn] = useState(false);
  const [night, setNight] = useState(false);
  const [word, setWord] = useState(-1);
  const narrator = useNarrator(locale);
  const lullaby = useLullabySound();
  const turnTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const sleepTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const [slept, setSlept] = useState(false);
  const [speed, setSpeedState] = useState<"slow" | "mid" | "fast">("mid");
  useEffect(() => {
    try { const v = localStorage.getItem("bm-speed"); if (v === "slow" || v === "mid" || v === "fast") setSpeedState(v); } catch {}
  }, []);
  const setSpeed = (v: "slow" | "mid" | "fast") => {
    setSpeedState(v);
    try { localStorage.setItem("bm-speed", v); } catch {}
  };
  const skipOnce = useRef(false);

  const narrateAt = useCallback(
    (p: number) => {
      if (turnTimer.current) clearTimeout(turnTimer.current);
      const sh = sheets?.[p];
      if (!sh || !picture) return;
      // a calm storyteller pace (most voices run fast at 1.0); bedtime slower still
      const base = { slow: locale === "id" ? 0.66 : 0.7, mid: locale === "id" ? 0.76 : 0.8, fast: locale === "id" ? 0.88 : 0.92 }[speed];
      const rate = night ? base * 0.9 : base;
      const pitch = night ? 0.95 : 1;
      const next = (delay: number) => {
        turnTimer.current = setTimeout(() => go(1), delay);
      };
      if (sh.kind === "cover") {
        narrator.speak(title, { rate, pitch, onEnd: () => next(night ? 2000 : 1400) });
      } else if (sh.kind === "pic") {
        const pg = picture[sh.i];
        if (!pg) return;
        const chant = inter?.chants?.[sh.i];
        const choice = inter?.choices?.[sh.i];
        narrator.speak(textOf(sh.i), {
          rate, pitch, onWord: setWord,
          onEnd: () => {
            if (choice && !choiceDone(sh.i)) {
              // ask, then wait for the child to tap an answer
              narrator.speak(`${choice.q[locale]} ${choice.options.map((o) => o.label[locale]).join("? ")}?`, { rate, pitch });
            } else if (chant) {
              setChantOn(sh.i);
              narrator.speak(t.yourTurnSay, { rate, pitch: pitch + 0.08, onEnd: () => {
                turnTimer.current = setTimeout(() => {
                  narrator.speak(t.wellDone, { rate, pitch, onEnd: () => { setChantOn(-1); next(night ? 1400 : 800); } });
                }, 3600);
              } });
            } else next(night ? 3000 : 2000);
          },
        });
      } else if (sh.kind === "talk" && inter?.talk) {
        narrator.speak(`${t.talk} ${inter.talk[locale].join(" ")}`, { rate, pitch, onEnd: () => next(night ? 4000 : 3000) });
      } else if (sh.kind === "card") {
        next(400); // the parents' card is for grown-ups to read
      } else if (sh.kind === "end") {
        narrator.speak(locale === "id" ? "Tamat." : "The end.", { rate, pitch });
        setReadOn(false);
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [sheets, picture, night, title, locale, shortMode, childName, speed],
  );

  // read each page as it opens while read-aloud is on. Keyed on the page itself
  // (not the sheets array), so a re-layout never restarts the reading.
  const narrateRef = useRef(narrateAt);
  narrateRef.current = narrateAt;
  const curSheet = sheets?.[pos];
  const pageKey = curSheet ? `${curSheet.kind}-${"i" in curSheet ? curSheet.i : ""}` : "";
  useEffect(() => {
    if (!open || !readOn) return;
    if (skipOnce.current) { skipOnce.current = false; return; }
    setWord(-1);
    const id = setTimeout(() => narrateRef.current(pos), 500);
    return () => clearTimeout(id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [open, readOn, pageKey, night, shortMode, speed]);

  // stop everything when the book closes
  useEffect(() => {
    if (open) return;
    narrator.stop();
    lullaby.stop();
    setReadOn(false);
    setNight(false);
    setWord(-1);
    if (turnTimer.current) clearTimeout(turnTimer.current);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [open]);

  // bedtime: the waves fade out 20 s after "The End", or after 20 minutes
  useEffect(() => {
    if (!night) return;
    const atEndNow = sheets?.[pos]?.kind === "end";
    if (sleepTimer.current) clearTimeout(sleepTimer.current);
    sleepTimer.current = setTimeout(() => { lullaby.stop(); setSlept(true); }, atEndNow ? 20000 : 20 * 60000);
    return () => { if (sleepTimer.current) clearTimeout(sleepTimer.current); };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [night, pos]);

  const toggleRead = () => {
    if (readOn) {
      setReadOn(false);
      narrator.stop();
      setWord(-1);
      if (turnTimer.current) clearTimeout(turnTimer.current);
    } else {
      skipOnce.current = true;
      setReadOn(true);
      narrateAt(pos); // start inside the tap so phones allow the voice
    }
  };
  const toggleNight = () => {
    if (night) {
      setNight(false);
      lullaby.stop();
    } else {
      setNight(true);
      setSlept(false);
      lullaby.start();
    }
  };

  /* ── tap-to-play + "Cari, yuk!" ── */
  const findCfg = slug ? FIND_IT[slug] : undefined;
  const [found, setFound] = useState<Set<number>>(() => new Set());
  const burst = (host: HTMLElement, x: number, y: number, chars: string[]) => {
    const r = host.getBoundingClientRect();
    const b = document.createElement("span");
    b.className = "bk-tapburst";
    b.style.left = `${x - r.left}px`;
    b.style.top = `${y - r.top}px`;
    chars.forEach((ch, i) => {
      const it = document.createElement("i");
      it.textContent = ch;
      it.style.setProperty("--n", String(i));
      b.appendChild(it);
    });
    host.appendChild(b);
    setTimeout(() => b.remove(), 1000);
  };
  const onArtTap = (e: React.MouseEvent<HTMLDivElement>, pageI: number) => {
    const host = e.currentTarget;
    let el = (e.target as Element).closest("[data-find],[data-k],[data-who]") as SVGGElement | null;
    if (!el) {
      // small fingers miss small things: take the nearest tappable thing within reach
      const R = 34;
      let best: { el: SVGGElement; d: number; area: number } | null = null;
      host.querySelectorAll<SVGGElement>("[data-find],[data-k],[data-who]").forEach((c) => {
        const b = c.getBoundingClientRect();
        if (!b.width || !b.height) return;
        const dx = Math.max(b.left - e.clientX, 0, e.clientX - b.right);
        const dy = Math.max(b.top - e.clientY, 0, e.clientY - b.bottom);
        const d = Math.hypot(dx, dy);
        const area = b.width * b.height;
        if (d <= R && (!best || d < best.d || (d === best.d && area < best.area))) best = { el: c, d, area };
      });
      el = (best as { el: SVGGElement } | null)?.el ?? null;
    }
    if (!el) {
      // the sky, the sea, the floor: still answer every tap with a little sparkle
      playBlip("pop", true);
      burst(host, e.clientX, e.clientY, ["✨", "·", "✨"]);
      return;
    }
    if (el.dataset.find) {
      if (!found.has(pageI)) {
        setFound((f) => new Set(f).add(pageI));
        playBlip("chime", night);
        burst(host, e.clientX, e.clientY, ["⭐", "✨", "🌟", "✨"]);
        if (!readOn && findCfg) narrator.speak(`${t.found} ${findCfg.label[locale]}!`, { rate: 0.95, pitch: 1.04 });
      }
      return;
    }
    const k = el.dataset.k ?? el.dataset.who ?? "";
    el.classList.remove("sa-poke", "sa-poke-color");
    void el.getBoundingClientRect();
    el.classList.add("sa-poke");
    if (k.startsWith("octopus")) el.classList.add("sa-poke-color");
    setTimeout(() => el.classList.remove("sa-poke", "sa-poke-color"), 900);
    const person = !!el.dataset.who;
    playBlip(person ? "boing" : "pop", night);
    burst(host, e.clientX, e.clientY, person ? ["💖", "✨", "💖"] : ["✨", "💫", "✨"]);
    const name = TAP_NAMES[k]?.[locale];
    if (name && !readOn) narrator.speak(name, { rate: 0.95, pitch: 1.04 });
  };
  const findFor = (i: number) => (findCfg ? { k: findCfg.k, zone: findCfg.zone, s: findCfg.s, seed: i + 1 + (slug?.length ?? 0), found: found.has(i) } : undefined);
  const findChip = (i: number) =>
    findCfg && picture ? (
      <div className={`bk-findchip${found.has(i) ? " is-found" : ""}`} aria-live="polite">
        {found.has(i) ? `✅ ${t.found}` : `🔍 ${t.find} ${findCfg.label[locale]}`}
        <span className="bk-findcount">⭐ {found.size}/{picture.length}</span>
      </div>
    ) : null;

  /* ── stickers + fact cards ── */
  const [award, setAward] = useState<{ fresh: boolean; count: number } | null>(null);
  const [factToast, setFactToast] = useState(0);
  useEffect(() => {
    if (!open || !slug || !picture) return;
    const cur = sheets?.[pos];
    if (cur?.kind === "end" && !award) {
      const fresh = awardSticker(slug);
      setAward({ fresh, count: Object.keys(getStickers()).length });
      if (fresh) playBlip("chime", night);
    }
    if (cur?.kind === "pic") {
      const pg = picture[cur.i];
      if (pg && isFact(pg.text, slug, cur.i) && collectFact(factKey(slug, cur.i))) {
        setFactToast(Date.now());
        setTimeout(() => setFactToast(0), 2600);
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [open, pos, sheets]);
  useEffect(() => { if (!open) setAward(null); }, [open]);

  const pick = (i: number, o: number, e: React.MouseEvent) => {
    const c = inter?.choices?.[i];
    const opt = c?.options[o];
    if (!c || !opt) return;
    setPicked((p) => ({ ...p, [i]: [...(p[i] ?? []).filter((x) => x !== o), o] }));
    const host = (e.currentTarget as HTMLElement).closest(".bk-page") as HTMLElement | null;
    if (opt.good) {
      playBlip("chime", night);
      if (host) burst(host, e.clientX, e.clientY, ["🎉", "⭐", "✨", "🎉"]);
    } else playBlip("pop", night);
    narrator.speak(opt.reply[locale], {
      rate: night ? 0.8 : 0.95,
      onEnd: () => {
        if (opt.good && readOn) turnTimer.current = setTimeout(() => go(1), 900);
      },
    });
  };
  const extras = (i: number) => {
    const chant = inter?.chants?.[i];
    const c = inter?.choices?.[i];
    const mine = picked[i] ?? [];
    const last = mine.length ? c?.options[mine[mine.length - 1]!] : undefined;
    return (
      <>
        {c && (
          <div className="bk-choice">
            <p className="bk-choice-q">🤔 {c.q[locale]}</p>
            <div className="bk-choice-opts">
              {c.options.map((o, k) => (
                <button type="button" key={k} onClick={(e) => pick(i, k, e)}
                  className={`bk-choice-btn${mine.includes(k) ? (o.good ? " is-good" : " is-bad") : ""}`}>
                  {mine.includes(k) ? (o.good ? "✅ " : "🙈 ") : ""}{o.label[locale]}
                </button>
              ))}
            </div>
            {last && <p className={`bk-choice-reply${last.good ? " is-good" : ""}`} key={mine.length}>{last.reply[locale]}</p>}
          </div>
        )}
        {chant && (
          <div className={`bk-chant${chantOn === i ? " is-on" : ""}`}>
            <span className="bk-chant-tag">🎤 {t.yourTurn}</span>
            <span className="bk-chant-line">“{chant[locale]}”</span>
          </div>
        )}
      </>
    );
  };

  const waveNow = () => {
    setWaved((w) => w + 1);
    if (waveTimer.current) clearTimeout(waveTimer.current);
    waveTimer.current = setTimeout(() => setWaved(0), 2200);
  };
  useEffect(() => () => {
    if (waveTimer.current) clearTimeout(waveTimer.current);
  }, []);

  // Touch swipe (phone).
  const touch = useRef<{ x: number; y: number } | null>(null);
  const onTouchStart = (e: React.TouchEvent) => {
    const p = e.touches[0];
    if (p) touch.current = { x: p.clientX, y: p.clientY };
  };
  const onTouchEnd = (e: React.TouchEvent) => {
    const p = e.changedTouches[0];
    if (!touch.current || !p) return;
    const dx = p.clientX - touch.current.x;
    const dy = p.clientY - touch.current.y;
    if (Math.abs(dx) > 50 && Math.abs(dx) > Math.abs(dy)) go(dx < 0 ? 1 : -1);
    touch.current = null;
  };

  /** Solid back-cover panel for the empty half of the opening / closing spread. */
  const backPanel = (key: string, blurb?: string) => (
    <div className="bk-page bk-page--back" key={key}>
      <div className="bk-back-inner">
        <span className="bk-back-logo">Baby Mo</span>
        {blurb && <p className="bk-back-blurb">{blurb}</p>}
        <span className="bk-back-tag">{t.backTag}</span>
        <span className="bk-back-url">babymo.id</span>
      </div>
    </div>
  );

  const renderSpread = (s: Sheet | undefined) => {
    if (!s || !picture) return null;
    if (s.kind === "cover") return <>{backPanel("BL", hook)}<div className="bk-spine" aria-hidden />{renderSheet(s, "R")}</>;
    if (s.kind === "end") return <>{renderSheet(s, "L")}<div className="bk-spine" aria-hidden />{backPanel("BR")}</>;
    if (s.kind === "card") return <>{renderSheet(s, "L")}<div className="bk-spine" aria-hidden />{backPanel("BR2")}</>;
    if (s.kind === "talk") return <>{renderSheet(s, "L")}<div className="bk-spine" aria-hidden />{backPanel("BR3")}</>;
    if (s.kind !== "pic") return renderSheet(s, "S");
    const pg = picture[s.i]!;
    // keep the words away from the characters: text on the emptier half
    const xs = (pg.scene.mo ?? []).map((m) => m.x);
    const mid = xs.length ? xs.reduce((a, b) => a + b, 0) / xs.length : 400;
    const side = mid > 410 ? "left" : "right";
    return (
      <div className="bk-page bk-page--spread" key="SP">
        <div className="bk-pic-art" onClick={(e) => onArtTap(e, s.i)}>
          <StoryArt scene={pg.scene} title={pg.scene.alt[locale]} spread find={findFor(s.i)} />
        </div>
        <div className="bk-gutter" aria-hidden />
        <div className={`bk-pic-text bk-spread-text bk-spread-text--${side}`}>
          <p className={s.i === 0 ? "bk-pic-first" : undefined}><ReadText text={textOf(s.i)} active={word} /></p>
          {pg.quote && !(shortMode && inter?.short) && <blockquote>{pg.quote}</blockquote>}
          {extras(s.i)}
        </div>
        <div className={`bk-pic-num bk-spread-num--${side}`} aria-label={`${t.page} ${s.i + 1}`}>{s.i + 1}</div>
      </div>
    );
  };

  const renderSheet = (s: Sheet | undefined, key: string) => {
    if (!s) return <div className="bk-page bk-page--blank" key={key} aria-hidden />;
    if (s.kind === "cover" && picture && pictureCover) {
      return (
        <div className="bk-page bk-page--pic bk-page--piccover" key={key}>
          <div className="bk-pic-art">
            <StoryArt scene={pictureCover} title={title} page />
          </div>
          <div className="bk-pic-title">
            <span className="bk-cover-badge">📖 {t.cover}</span>
            <h2>{title}</h2>
            <label className="bk-dedic" onClick={(e) => e.stopPropagation()}>
              <span>❤️ {t.readFor}</span>
              <input value={childName} onChange={(e) => saveName(e.target.value)} placeholder={t.namePh} maxLength={20} aria-label={t.readFor} />
            </label>
          </div>
          <div className="bk-pic-start">{t.start}</div>
        </div>
      );
    }
    if (s.kind === "pic" && picture) {
      const pg = picture[s.i]!;
      return (
        <div className="bk-page bk-page--pic" key={key}>
          <div className="bk-pic-art" onClick={(e) => onArtTap(e, s.i)}>
            <StoryArt scene={pg.scene} title={pg.scene.alt[locale]} page find={findFor(s.i)} />
          </div>
          <div className="bk-pic-text">
            <p className={s.i === 0 ? "bk-pic-first" : undefined}><ReadText text={textOf(s.i)} active={sheets?.[pos] === s ? word : -1} /></p>
            {pg.quote && !(shortMode && inter?.short) && <blockquote>{pg.quote}</blockquote>}
            {extras(s.i)}
          </div>
          <div className="bk-pic-num" aria-label={`${t.page} ${s.i + 1}`}>{s.i + 1}</div>
        </div>
      );
    }
    if (s.kind === "cover") {
      return (
        <div className="bk-page bk-page--cover" key={key}>
          <div className="bk-cover-scene">
            {art && art[0] ? (
              <div className="bk-art-frame bk-art-frame--cover">
                <StoryArt scene={art[0]} title={art[0].alt[locale]} />
              </div>
            ) : (
              <StoryScene scene={scene} pose={coverPose} className="sc--cover" />
            )}
          </div>
          <div className="bk-cover-text">
            <span className="bk-cover-badge">📖 {t.cover}</span>
            <h2 className="bk-cover-title">{title}</h2>
            <p className="bk-cover-hook">{hook}</p>
          </div>
          <div className="bk-page-foot">{t.start}</div>
        </div>
      );
    }
    if (s.kind === "talk" && inter?.talk) {
      const col = slug ? coloringFor(slug) : undefined;
      return (
        <div className="bk-page bk-page--card" key={key}>
          <div className="bk-card bk-talk">
            <span className="bk-card-badge">💬 {t.talk}</span>
            <p className="bk-talk-sub">{t.talkSub}</p>
            <ol className="bk-card-list">
              {inter.talk[locale].map((q, i) => (
                <li key={i}><span className="bk-card-num">{i + 1}</span><span>{q}</span></li>
              ))}
            </ol>
            {col && <a className="bk-talk-color" href={asset(`/${locale}/warnai/#${slug}`)}>{t.color} →</a>}
          </div>
        </div>
      );
    }
    if (s.kind === "card" && card) {
      return (
        <div className="bk-page bk-page--card" key={key}>
          <div className="bk-card">
            <span className="bk-card-badge">{t.cardBadge}</span>
            <h3 className="bk-card-title">{card.title}</h3>
            <ol className="bk-card-list">
              {card.items.map((it, i) => (
                <li key={i}><span className="bk-card-num">{i + 1}</span><span>{it}</span></li>
              ))}
            </ol>
            <span className="bk-card-foot">babymo.id</span>
          </div>
        </div>
      );
    }
    if (s.kind === "end") {
      const endImg = endPose ?? poseSrc;
      return (
        <div className="bk-page bk-page--end" key={key}>
          <div className="bk-page-content bk-end-inner">
            <div className="bk-end-quote" dangerouslySetInnerHTML={{ __html: parseBlocks(takeaway)[0]?.html ?? takeaway }} />
            {endImg && (
              <div className="bk-end-pose-wrap">
                <button type="button" className="bk-end-pose-btn" onClick={waveNow} aria-label={t.wave}>
                  <img
                    key={waved}
                    className={`bk-end-pose${waved ? " bk-wave" : ""}`}
                    src={endImg}
                    alt="Baby Mo"
                    draggable={false}
                  />
                </button>
                {waved > 0 && (
                  <>
                    <span className="bk-bubble" key={`b${waved}`}>{t.bye}</span>
                    <span className="bk-burst" key={`x${waved}`} aria-hidden>
                      {accent.slice(0, 4).map((e, i) => (
                        <i key={i} style={{ "--n": i } as React.CSSProperties}>{e}</i>
                      ))}
                    </span>
                  </>
                )}
                <span className="bk-tap-hint">{t.tapHint}</span>
              </div>
            )}
            <p className="bk-end-word">{t.end}</p>
            <p className="bk-end-sub">{t.endSub}</p>
            {award && slug && (
              <div className={`bk-sticker${award.fresh ? " is-fresh" : ""}`}>
                <span className="bk-sticker-badge" aria-hidden>{stickerFor(slug)}</span>
                <span className="bk-sticker-text">
                  <b>{award.fresh ? (childName.trim() ? `${t.hooray(childName.trim())} ${t.sticker.replace(/^Hore!\s*|^Hooray!\s*/, "")}` : t.sticker) : t.stickerAgain}</b>
                  <span>{t.stickers(award.count)}</span>
                  <a href={asset(`/${locale}/koleksi/`)}>{t.seeCollection}</a>
                </span>
              </div>
            )}
            {nextStory && (
              <a className="bk-nextstory" href={nextStory.href}>
                <span className="bk-nextstory-label">📖 {t.nextStory}</span>
                <span className="bk-nextstory-title">{nextStory.title} →</span>
              </a>
            )}
          </div>
          <div className="bk-page-foot">— {byline}</div>
        </div>
      );
    }
    if (s.kind !== "content") return <div className="bk-page bk-page--blank" key={key} aria-hidden />;
    const idx = sheets ? sheets.indexOf(s) : 0;
    return (
      <div className="bk-page" key={key}>
        <div className={`bk-page-art${art ? " bk-page-art--big" : ""}`}>
          {art && s.art !== undefined && art[s.art] && (
            <div className="bk-art-frame">
              <StoryArt scene={art[s.art]!} title={art[s.art]!.alt[locale]} />
            </div>
          )}
          {!art && (s.vig || s.pose) && (
            <PageArt
              vig={s.vig}
              poseSrc={s.pose ? asset(posePath(s.pose)) : undefined}
              label={s.vig ? VIG_LABEL[s.vig]?.[locale] : t.babymo}
              hint={idx === 1}
              tapHint={t.tapReveal}
            />
          )}
        </div>
        <div className={`bk-prose bk-page-content${idx === 1 ? " bk-prose--first" : ""}`} lang={locale}>
          {s.blocks.map((b, i) =>
            b.type === "quote" ? (
              <blockquote key={i} dangerouslySetInnerHTML={{ __html: b.html }} />
            ) : (
              <p key={i} className={b.cont ? "bk-cont" : undefined} dangerouslySetInnerHTML={{ __html: b.html }} />
            ),
          )}
        </div>
        <div className="bk-page-foot bk-page-num" aria-label={`${t.page} ${idx}`}>
          {idx}
        </div>
      </div>
    );
  };

  const atStart = pos <= 0;
  const atEnd = isSpread && !picSpread ? pos + 2 >= total : pos >= total - 1;

  return (
    <>
      <button type="button" className="bk-trigger" onClick={() => { setDir("open"); setPos(0); setOpen(true); }}>
        <span className="bk-trigger-em" aria-hidden>📖</span>
        <span className="bk-trigger-text">
          <span className="bk-trigger-title">{t.open}</span>
          <span className="bk-trigger-sub">{t.openSub}</span>
        </span>
      </button>

      {open && (
        <div className={`bk-overlay${isSpread ? " bk-overlay--wide" : ""}${night ? " bk-overlay--night" : ""}`} role="dialog" aria-modal="true" aria-label={title}>
          <div className="bk-ambient" aria-hidden>
            {accent.map((em, i) => (
              <span key={i} className="bk-amb" style={{ "--i": i } as React.CSSProperties}>
                {em}
              </span>
            ))}
          </div>

          <div className="bk-topbar">
            <button type="button" className="bk-icon" onClick={() => setOpen(false)} aria-label={t.close}>
              ✕
            </button>
            <div className="bk-fontctl" role="group" aria-label={t.font}>
              <button
                type="button"
                className="bk-icon bk-icon--sm"
                onClick={() => setFontIdx((f) => Math.max(0, f - 1))}
                disabled={fontIdx === 0}
                aria-label="A-"
              >
                A−
              </button>
              <button
                type="button"
                className="bk-icon bk-icon--sm"
                onClick={() => setFontIdx((f) => Math.min(FONT_STEPS.length - 1, f + 1))}
                disabled={fontIdx === FONT_STEPS.length - 1}
                aria-label="A+"
              >
                A+
              </button>
            </div>
            {picture && (
              <div className="bk-readctl">
                <button type="button" className={`bk-icon bk-icon--pill${readOn ? " is-on" : ""}`} onClick={toggleRead} aria-pressed={readOn}>
                  {readOn ? <PlayingIcon /> : <SpeakerIcon />}<span className="bk-pill-label">{readOn ? t.readStop : t.read}</span>
                </button>
                {inter?.short && (
                  <button type="button" className={`bk-icon bk-icon--pill${shortMode ? " is-on" : ""}`} onClick={toggleShort} aria-pressed={shortMode} aria-label={t.shortOn} title={t.shortOn}>
                    <ShortIcon /><span className="bk-pill-label">{t.short}</span>
                  </button>
                )}
                <button type="button" className={`bk-icon bk-icon--pill${night ? " is-on" : ""}`} onClick={toggleNight} aria-pressed={night} aria-label={t.night}>
                  <MoonIcon /><span className="bk-pill-label">{t.night}</span>
                </button>
              </div>
            )}
          </div>
          <div className="bk-floatnotes">
          {night && <div className="bk-night-note" role="status">{slept ? t.sleepDone : t.nightOn}</div>}
          {readOn && narrator.noVoice && <div className="bk-night-note bk-novoice" role="status">{t.noVoice}</div>}
          {readOn && (
            <div className="bk-speed" role="group" aria-label={t.speedLabel}>
              {(["slow", "mid", "fast"] as const).map((k) => (
                <button type="button" key={k} className={speed === k ? "is-on" : ""} aria-pressed={speed === k} onClick={() => setSpeed(k)}>
                  {t.speeds[k]}
                </button>
              ))}
            </div>
          )}
          {readOn && narrator.voices.length > 1 && (
            <label className="bk-voicepick">
              <span className="bk-voicepick-label"><VoiceIcon /> {t.voice}</span>
              <select value={narrator.voiceName} onChange={(e) => { narrator.chooseVoice(e.target.value); setTimeout(() => narrateAt(pos), 50); }}>
                {narrator.voices.map((v) => (
                  <option key={v.name} value={v.name}>{v.name.replace(/^(Microsoft|Google)\s+/, "").replace(/\s*-\s*.*$/, "").replace(/\s*\(.*\)$/, (m) => (/natural/i.test(m) ? " ✨" : ""))}</option>
                ))}
              </select>
            </label>
          )}
          {factToast > 0 && <div className="bk-fact-toast" role="status" key={factToast}>🃏 {t.newFact}</div>}
          </div>

          <div className="bk-stage" onTouchStart={onTouchStart} onTouchEnd={onTouchEnd}>
            <button
              type="button"
              className="bk-nav bk-nav--prev"
              onClick={() => go(-1)}
              disabled={atStart}
              aria-label={t.prev}
            >
              ‹
            </button>

            <div
              ref={bookRef}
              className={`bk-book ${isSpread ? "bk-book--spread" : "bk-book--single"}`}
              style={{ ["--bk-fs" as string]: `${fontPx}px` }}
            >
              {/* Invisible sizer — measures the page content box for pagination */}
              <div className="bk-sizer" aria-hidden>
                <div className="bk-page">
                  <div className={`bk-page-art${art ? " bk-page-art--big" : ""}`} />
                  <div className="bk-prose bk-page-content" ref={sizeRef} />
                  <div className="bk-page-foot">0</div>
                </div>
              </div>

              <div className={`bk-leaf bk-leaf--${dir}${picSpread ? " bk-leaf--spreadpic" : ""}`} key={`${pos}-${isSpread}`}>
                {picSpread ? (
                  renderSpread(sheets?.[pos])
                ) : isSpread ? (
                  <>
                    {renderSheet(sheets?.[pos], "L")}
                    <div className="bk-spine" aria-hidden />
                    {renderSheet(sheets?.[pos + 1], "R")}
                  </>
                ) : (
                  renderSheet(sheets?.[pos], "S")
                )}
              </div>
            </div>

            <button
              type="button"
              className="bk-nav bk-nav--next"
              onClick={() => go(1)}
              disabled={atEnd}
              aria-label={t.next}
            >
              ›
            </button>
          </div>

          <div className="bk-botbar">
            <button type="button" className="bk-pgbtn" onClick={() => go(-1)} disabled={atStart}>
              ‹ {t.prev}
            </button>
            {(() => {
              const cur = sheets?.[pos];
              return cur?.kind === "pic" && findChip(cur.i) ? findChip(cur.i) : (
                <span className="bk-pgcount">
                  {Math.min(pos + 1, total)} / {total}
                </span>
              );
            })()}
            <button type="button" className="bk-pgbtn" onClick={() => go(1)} disabled={atEnd}>
              {t.next} ›
            </button>
          </div>
        </div>
      )}

      <style>{`
        .bk-trigger{display:flex;align-items:center;gap:12px;width:100%;text-align:left;margin-top:14px;padding:14px 18px;border-radius:18px;cursor:pointer;
          border:1px solid var(--color-clay);background:linear-gradient(135deg,var(--color-clay-soft),var(--color-paper-2));
          transition:transform .12s ease, box-shadow .2s ease;}
        .bk-trigger:hover{transform:translateY(-1px);box-shadow:0 10px 26px -16px rgba(0,0,0,.5);}
        .bk-trigger:active{transform:scale(.99);}
        .bk-trigger-em{font-size:26px;line-height:1;}
        .bk-trigger-text{display:flex;flex-direction:column;gap:2px;}
        .bk-trigger-title{font-weight:800;font-size:15px;color:var(--color-ink);}
        .bk-trigger-sub{font-size:12px;color:var(--color-whisper);}

        .bk-overlay{position:fixed;inset:0;height:100%;height:100dvh;z-index:120;display:flex;flex-direction:column;
          background:radial-gradient(120% 90% at 50% -10%, rgba(60,46,20,.55), rgba(10,9,7,.82));
          -webkit-backdrop-filter:blur(8px);backdrop-filter:blur(8px);animation:bkFade .25s ease;}
        @keyframes bkFade{from{opacity:0}to{opacity:1}}

        .bk-ambient{position:absolute;inset:0;overflow:hidden;pointer-events:none;}
        .bk-amb{position:absolute;bottom:-10%;left:calc(8% + (var(--i)) * 17%);font-size:clamp(20px,3vw,30px);opacity:.5;
          animation:bkDrift calc(11s + var(--i) * 2.5s) linear infinite;animation-delay:calc(var(--i) * -3s);}
        @keyframes bkDrift{0%{transform:translateY(0) rotate(0);opacity:0}10%{opacity:.55}90%{opacity:.4}100%{transform:translateY(-115vh) rotate(220deg);opacity:0}}

        .bk-topbar{position:relative;z-index:3;display:flex;align-items:center;justify-content:space-between;
          flex-shrink:0;padding:10px 14px 8px;padding-top:calc(10px + env(safe-area-inset-top));
          background:linear-gradient(180deg,rgba(8,6,4,.5),rgba(8,6,4,0));}
        .bk-fontctl{display:flex;gap:8px;}
        .bk-readctl{display:flex;gap:8px;order:3;}
        .bk-topbar{flex-wrap:wrap;gap:8px;}
        .bk-icon--pill{height:40px;font-size:14px;gap:7px;padding:0 15px 0 12px;border-radius:999px;transition:background .2s ease,color .2s ease,transform .12s ease;}
        .bk-icon--pill:active{transform:scale(.96);}
        .bk-icon--pill.is-on{background:#FFD447;color:#3a2a00;border-color:#FFD447;box-shadow:0 4px 14px -4px rgba(255,212,71,.6);}
        .bk-ico{flex:none;display:block;}
        .bk-eq{display:inline-flex;align-items:flex-end;gap:2.5px;width:20px;height:16px;padding:0 2px;}
        .bk-eq i{flex:1;border-radius:2px;background:currentColor;animation:bkEq .9s ease-in-out infinite;}
        .bk-eq i:nth-child(2){animation-delay:-.3s;} .bk-eq i:nth-child(3){animation-delay:-.6s;}
        @keyframes bkEq{0%,100%{height:30%}50%{height:100%}}
        .bk-voicepick-label{display:inline-flex;align-items:center;gap:5px;}
        .bk-speed{display:inline-flex;padding:3px;border-radius:999px;background:rgba(18,14,10,.6);}
        .bk-speed button{padding:5px 12px;border-radius:999px;font-size:12px;font-weight:800;color:#fff;cursor:pointer;}
        .bk-speed button.is-on{background:#FFE27A;color:#3a2a00;}
        @media (max-width:520px){ .bk-pill-label{display:none;} .bk-icon--pill{min-width:46px;padding:0 12px;} }
        .bk-w{border-radius:6px;transition:background .15s ease,color .15s ease;}
        .bk-w--on{background:#FFE27A;color:#3a2a00;box-shadow:0 0 0 3px #FFE27A;}
        .bk-sfx{display:inline-block;font-family:var(--font-display, inherit);font-weight:900;font-size:1.22em;letter-spacing:.02em;color:#E8475F;
          text-shadow:0 2px 0 #FFD447;transform:rotate(var(--r,0deg));animation:bkSfx 1.6s ease-in-out infinite;}
        .bk-sfx.bk-w--on{color:#E8475F;animation:bkSfxPop .5s ease-out;}
        @keyframes bkSfx{0%,100%{transform:rotate(var(--r,0deg)) scale(1)}50%{transform:rotate(calc(var(--r,0deg) * -1)) scale(1.08)}}
        @keyframes bkSfxPop{0%{transform:scale(1)}40%{transform:scale(1.45)}100%{transform:scale(1)}}
        .bk-overlay--night{background:radial-gradient(120% 90% at 50% -10%, rgba(20,24,60,.75), rgba(4,5,14,.94));}
        .bk-overlay--night .bk-book{filter:brightness(.74) saturate(.8) sepia(.12);transition:filter 1.2s ease;}
        .bk-overlay--night .bk-amb{opacity:.25;}
        .bk-novoice{max-width:min(92vw,520px);text-align:center;line-height:1.35;background:rgba(120,40,30,.75);}
        .bk-voicepick{position:relative;z-index:3;align-self:center;display:flex;align-items:center;gap:6px;margin-top:4px;padding:3px 6px 3px 12px;border-radius:999px;
          font-size:12px;font-weight:700;color:#fff;background:rgba(18,14,10,.6);}
        .bk-voicepick select{max-width:180px;border-radius:999px;border:0;padding:4px 8px;font:inherit;font-weight:800;color:#3a2a00;background:#FFE27A;}
        .bk-floatnotes{position:absolute;left:0;right:0;top:calc(58px + env(safe-area-inset-top));z-index:6;display:flex;flex-direction:column;align-items:center;gap:6px;pointer-events:none;}
        .bk-floatnotes > *{pointer-events:auto;}
        .bk-night-note{position:relative;z-index:3;align-self:center;margin-top:-2px;padding:4px 12px;border-radius:999px;font-size:12px;font-weight:700;
          color:#E3E8FF;background:rgba(40,46,96,.6);}
        @media (prefers-reduced-motion: reduce){ .bk-sfx{animation:none;} }
        .bk-icon{display:inline-flex;align-items:center;justify-content:center;min-width:46px;height:46px;padding:0 12px;border-radius:14px;cursor:pointer;
          border:1px solid rgba(255,255,255,.45);background:rgba(18,14,10,.62);color:#fff;font-weight:800;font-size:17px;
          box-shadow:0 3px 12px rgba(0,0,0,.4);-webkit-backdrop-filter:blur(6px);backdrop-filter:blur(6px);}
        .bk-icon--sm{height:40px;min-width:46px;font-size:15px;}
        .bk-icon:disabled{opacity:.4;cursor:default;}
        .bk-icon:active{transform:scale(.95);}

        /* The book fills exactly the space between the top and bottom bars,
           so it never slides under them (phone browsers' vh includes the
           hidden toolbars, which made a fixed 78vh too tall on iPhone). */
        .bk-stage{position:relative;z-index:1;flex:1 1 0;display:flex;align-items:center;justify-content:center;gap:10px;padding:0 8px;min-height:0;}
        .bk-book{position:relative;perspective:2200px;}
        .bk-book--spread{width:min(94vw,1060px);height:min(100%,720px);}
        .bk-book--single{width:min(92vw,540px);height:min(100%,760px);}

        .bk-sizer{position:absolute;inset:0;visibility:hidden;pointer-events:none;display:flex;}
        .bk-book--spread .bk-sizer .bk-page{width:50%;}
        .bk-book--single .bk-sizer .bk-page{width:100%;}

        .bk-leaf{position:absolute;inset:0;display:flex;border-radius:16px;
          box-shadow:0 30px 60px -28px rgba(0,0,0,.7);transform-style:preserve-3d;}
        .bk-leaf--next{animation:bkTurnNext .5s cubic-bezier(.2,.7,.3,1);}
        .bk-leaf--prev{animation:bkTurnPrev .5s cubic-bezier(.2,.7,.3,1);}
        .bk-leaf--open{animation:bkOpenIn .45s ease;}
        @keyframes bkTurnNext{from{transform:rotateY(-26deg) translateX(6%);opacity:.35;transform-origin:left center}to{transform:none;opacity:1}}
        @keyframes bkTurnPrev{from{transform:rotateY(26deg) translateX(-6%);opacity:.35;transform-origin:right center}to{transform:none;opacity:1}}
        @keyframes bkOpenIn{from{transform:scale(.94) translateY(8px);opacity:0}to{transform:none;opacity:1}}

        .bk-page{flex:1;min-width:0;position:relative;display:flex;flex-direction:column;
          --bk-paper:#FFFBF1;--bk-paper-2:#F8F1E2;--bk-ink:#2B2620;--bk-accent:#B5532F;
          background:
            radial-gradient(120% 80% at 50% 0%,rgba(255,255,255,.55),transparent 60%),
            linear-gradient(180deg,var(--bk-paper),var(--bk-paper-2));
          padding:clamp(22px,3.6vw,44px) clamp(24px,4vw,52px) clamp(14px,2.4vw,26px);overflow:hidden;}
        /* faint paper grain */
        .bk-page::before{content:"";position:absolute;inset:0;pointer-events:none;opacity:.5;
          background-image:radial-gradient(rgba(120,90,40,.07) 1px,transparent 1.2px),radial-gradient(rgba(120,90,40,.05) 1px,transparent 1.2px);
          background-size:7px 7px,11px 11px;background-position:0 0,3px 5px;}
        /* gutter shading toward the spine, like a bound book */
        .bk-book--spread .bk-page:first-child::after{content:"";position:absolute;top:0;bottom:0;right:0;width:34px;pointer-events:none;background:linear-gradient(90deg,transparent,rgba(90,60,20,.12));}
        .bk-book--spread .bk-page:last-child::after{content:"";position:absolute;top:0;bottom:0;left:0;width:34px;pointer-events:none;background:linear-gradient(270deg,transparent,rgba(90,60,20,.12));}
        .bk-book--single .bk-page::after{content:"";position:absolute;top:0;bottom:0;left:0;width:14px;pointer-events:none;background:linear-gradient(90deg,rgba(90,60,20,.10),transparent);}
        html.dark .bk-page{--bk-paper:#2A2620;--bk-paper-2:#221F1A;--bk-ink:#EFE7D8;--bk-accent:#F0A27A;}
        .bk-book--single .bk-page{border-radius:16px;}
        .bk-book--spread .bk-page:first-child{border-radius:16px 6px 6px 16px;}
        .bk-book--spread .bk-page:last-child{border-radius:6px 16px 16px 6px;}
        .bk-page--blank{background:var(--color-paper-2);opacity:.55;}
        .bk-spine{width:2px;align-self:stretch;background:linear-gradient(180deg,transparent,rgba(0,0,0,.18),transparent);}

        .bk-page-content{position:relative;z-index:1;flex:1;min-height:0;overflow:hidden;}
        .bk-page-foot{position:relative;z-index:1;flex-shrink:0;padding-top:10px;text-align:center;font-size:11px;letter-spacing:.08em;text-transform:uppercase;color:var(--color-whisper);}
        .bk-page-num{font-family:${bookFace.style.fontFamily};font-style:italic;font-size:13px;letter-spacing:0;text-transform:none;color:color-mix(in srgb,var(--bk-ink) 55%,transparent);}
        .bk-page-num::before,.bk-page-num::after{content:"";display:inline-block;width:18px;height:1px;margin:0 10px;vertical-align:middle;background:currentColor;opacity:.5;}
        /* Top-centered art band that sits above the text on each content page */
        .bk-page-art{flex-shrink:0;height:clamp(94px,18vw,122px);display:flex;align-items:center;justify-content:center;margin-bottom:clamp(8px,1.6vw,14px);}
        .bk-page-art--big{height:clamp(150px,40%,320px);margin-bottom:clamp(10px,1.8vw,16px);}
        .bk-art-frame{width:100%;height:100%;border-radius:10px;overflow:hidden;box-shadow:0 0 0 1px rgba(90,60,20,.10),0 8px 18px -12px rgba(60,40,10,.45);background:#EAF7FF;}
        .bk-art-frame--cover{border-radius:12px;}

        /* Baby Mo character on content pages (alternates with vignettes) */
        .bk-cpose{height:clamp(90px,17vw,118px);width:auto;object-fit:contain;pointer-events:none;
          filter:drop-shadow(0 6px 10px rgba(0,0,0,.16));animation:bkCpose 5s ease-in-out infinite;}
        @keyframes bkCpose{0%,100%{transform:translateY(0)}50%{transform:translateY(-5px)}}

        /* Drawn CSS "vignette" illustrations (top-center spot art per page) */
        .bk-vig{position:relative;width:clamp(78px,17vw,110px);height:clamp(78px,17vw,110px);pointer-events:none;
          filter:drop-shadow(0 5px 9px rgba(0,0,0,.14));}
        .bk-vig i{position:absolute;}
        .bk-vig--sun::before{content:"";position:absolute;inset:0;border-radius:50%;background:repeating-conic-gradient(#F6C23D 0 9deg,transparent 9deg 30deg);opacity:.9;}
        .bk-vig--sun::after{content:"";position:absolute;inset:24%;border-radius:50%;background:radial-gradient(circle at 38% 34%,#FFEFAE,#F6C23D 72%);}
        .bk-vig--moon::before{content:"";position:absolute;inset:8%;border-radius:50%;background:radial-gradient(circle at 38% 36%,#FCE9A6,#E6B544);
          -webkit-mask:radial-gradient(circle at 80% 30%,transparent 0 50%,#000 51%);mask:radial-gradient(circle at 80% 30%,transparent 0 50%,#000 51%);}
        .bk-vig--star::before{content:"";position:absolute;inset:4%;background:#F4C540;clip-path:polygon(50% 0,61% 35%,98% 35%,68% 57%,79% 91%,50% 70%,21% 91%,32% 57%,2% 35%,39% 35%);}
        .bk-vig--star::after{content:"";position:absolute;width:34%;height:34%;right:0;top:2%;background:#F7D261;clip-path:polygon(50% 0,61% 35%,98% 35%,68% 57%,79% 91%,50% 70%,21% 91%,32% 57%,2% 35%,39% 35%);}
        .bk-vig--cloud i,.bk-vig--rain .c{left:4%;bottom:32%;width:92%;height:38%;background:#E3EEF8;border-radius:999px;}
        .bk-vig--cloud i::before,.bk-vig--cloud i::after,.bk-vig--rain .c::before,.bk-vig--rain .c::after{content:"";position:absolute;background:#E3EEF8;border-radius:50%;bottom:8%;}
        .bk-vig--cloud i::before,.bk-vig--rain .c::before{width:50%;height:150%;left:10%;}
        .bk-vig--cloud i::after,.bk-vig--rain .c::after{width:40%;height:115%;right:12%;}
        .bk-vig--rain .c{top:12%;bottom:auto;height:34%;background:#C9D6DF;}
        .bk-vig--rain .c::before,.bk-vig--rain .c::after{background:#C9D6DF;}
        .bk-vig--rain .dp{top:60%;width:6%;height:18%;background:#5FA8D8;border-radius:50% 50% 50% 0;transform:rotate(45deg);}
        .bk-vig--sprout i{left:47%;bottom:12%;width:6%;height:44%;background:#4E9A52;border-radius:3px;}
        .bk-vig--sprout i::before,.bk-vig--sprout i::after{content:"";position:absolute;width:150%;height:78%;background:linear-gradient(160deg,#86C97A,#4E9A52);}
        .bk-vig--sprout i::before{right:50%;bottom:48%;border-radius:50% 50% 50% 0;transform:rotate(-12deg);transform-origin:bottom right;}
        .bk-vig--sprout i::after{left:50%;bottom:24%;border-radius:50% 50% 0 50%;transform:rotate(12deg);transform-origin:bottom left;}
        .bk-vig--flower::before{content:"";position:absolute;inset:6% 6% 30% 6%;
          background:radial-gradient(circle at 50% 18%,#F2849E 13%,transparent 14%),radial-gradient(circle at 82% 48%,#F2849E 13%,transparent 14%),radial-gradient(circle at 18% 48%,#F2849E 13%,transparent 14%),radial-gradient(circle at 33% 82%,#F2849E 13%,transparent 14%),radial-gradient(circle at 67% 82%,#F2849E 13%,transparent 14%),radial-gradient(circle at 50% 50%,#F6C945 15%,transparent 16%);}
        .bk-vig--flower::after{content:"";position:absolute;left:46%;top:62%;width:8%;height:34%;background:#4E9A52;border-radius:2px;}
        .bk-vig--jar::before{content:"";position:absolute;inset:26% 24% 8% 24%;border:3px solid #8FB7C9;border-top:none;border-radius:5px 5px 14px 14px;background:rgba(143,183,201,.16);}
        .bk-vig--jar::after{content:"";position:absolute;top:18%;left:30%;width:40%;height:9%;background:#8FB7C9;border-radius:4px;}
        .bk-vig--mosque::before{content:"";position:absolute;left:18%;top:50%;width:64%;height:36%;background:#D8B871;border-radius:3px;}
        .bk-vig--mosque::after{content:"";position:absolute;left:28%;top:14%;width:44%;height:48%;background:radial-gradient(circle at 40% 30%,#E0C079,#C9A55B);clip-path:polygon(50% 0,60% 13%,90% 48%,78% 100%,22% 100%,10% 48%,40% 13%);}
        .bk-vig--mosque i{position:absolute;left:44%;top:60%;width:12%;height:26%;background:#9C7A33;border-radius:50% 50% 0 0;}
        .bk-vig--mosque i::before{content:"";position:absolute;left:-230%;bottom:-8%;width:55%;height:150%;background:#D8B871;border-radius:2px 2px 0 0;}
        .bk-vig--mosque i::after{content:"";position:absolute;right:-230%;bottom:-8%;width:55%;height:150%;background:#D8B871;border-radius:2px 2px 0 0;}
        .bk-vig--book::before{content:"";position:absolute;left:26%;top:22%;width:52%;height:60%;background:repeating-linear-gradient(#F4EDDB 0 3px,#DDD0AE 3px 5px);border-radius:2px 4px 4px 2px;box-shadow:0 1px 2px rgba(0,0,0,.15);}
        .bk-vig--book i{position:absolute;left:20%;top:18%;width:54%;height:60%;background:linear-gradient(145deg,#5A86C2,#39629F);border-radius:4px 3px 3px 4px;box-shadow:inset 7px 0 0 rgba(0,0,0,.22),inset 0 0 0 2px rgba(255,255,255,.12);}
        .bk-vig--book::after{content:"";position:absolute;left:31%;top:40%;width:30%;height:5%;background:rgba(244,197,64,.9);border-radius:2px;box-shadow:0 9px 0 -1px rgba(244,197,64,.55);}
        .bk-vig--heart::before,.bk-vig--heart::after{content:"";position:absolute;top:22%;width:40%;height:60%;background:#F2849E;border-radius:50% 50% 0 0;}
        .bk-vig--heart::before{left:50%;transform:rotate(-45deg);transform-origin:0 100%;}
        .bk-vig--heart::after{left:10%;transform:rotate(45deg);transform-origin:100% 100%;}
        .bk-vig--drop::before{content:"";position:absolute;inset:18% 28%;background:linear-gradient(160deg,#86C7F0,#3E9BD8);border-radius:50% 50% 50% 0;transform:rotate(45deg);}
        .bk-vig--leaf::before{content:"";position:absolute;inset:24%;background:linear-gradient(150deg,#8FCF7E,#4E9A52);border-radius:0 50% 0 50%;}
        .bk-vig--leaf::after{content:"";position:absolute;left:48%;top:30%;width:3%;height:46%;background:rgba(255,255,255,.55);transform:rotate(-45deg);transform-origin:top;}
        .bk-vig--wing::before,.bk-vig--wing::after{content:"";position:absolute;top:34%;width:44%;height:48%;background:linear-gradient(160deg,#FFFFFF,#E3ECF6);border-radius:100% 26% 100% 30%;box-shadow:0 2px 6px rgba(0,0,0,.08);}
        .bk-vig--wing::before{left:5%;transform:rotate(-12deg);}
        .bk-vig--wing::after{right:5%;transform:scaleX(-1) rotate(-12deg);}
        .bk-vig--wing i{left:50%;top:16%;transform:translateX(-50%);width:30%;height:16%;border:4px solid #F4C540;border-radius:50%;background:transparent;}
        .bk-vig--gift::before{content:"";position:absolute;left:16%;top:36%;width:68%;height:52%;background:#F2849E;border-radius:6px;}
        .bk-vig--gift::after{content:"";position:absolute;left:16%;top:36%;width:68%;height:52%;border-radius:6px;
          background:linear-gradient(90deg,transparent 43%,#FBE3A0 43% 57%,transparent 57%);}
        .bk-vig--gift i{left:10%;top:24%;width:80%;height:16%;background:#F4A0B4;border-radius:4px;box-shadow:0 0 0 0 transparent;}
        .bk-vig--gift i::before,.bk-vig--gift i::after{content:"";position:absolute;top:-70%;width:42%;height:90%;background:#F2849E;border-radius:50% 50% 0 50%;}
        .bk-vig--gift i::before{left:6%;transform:rotate(-18deg);}
        .bk-vig--gift i::after{right:6%;transform:scaleX(-1) rotate(-18deg);}

        .bk-vig--quran::before{content:"";position:absolute;left:26%;top:20%;width:54%;height:64%;background:#F1E7CC;border-radius:2px 4px 4px 2px;box-shadow:inset -4px 0 0 rgba(0,0,0,.06);}
        .bk-vig--quran i{position:absolute;left:22%;top:17%;width:54%;height:64%;background:linear-gradient(145deg,#2E8B66,#1C6B4D);border-radius:4px 3px 3px 4px;box-shadow:inset 0 0 0 3px rgba(244,197,64,.55),inset 7px 0 0 rgba(0,0,0,.16);}
        .bk-vig--quran::after{content:"";position:absolute;left:34%;top:35%;width:21%;height:21%;border-radius:50%;background:#F4C540;-webkit-mask:radial-gradient(circle at 78% 32%,transparent 0 52%,#000 53%);mask:radial-gradient(circle at 78% 32%,transparent 0 52%,#000 53%);}
        .bk-vig--lantern::before{content:"";position:absolute;left:30%;top:24%;width:40%;height:54%;border-radius:14px 14px 18px 18px;background:linear-gradient(180deg,#F6C84C,#E0992F);box-shadow:inset 0 0 0 3px rgba(255,255,255,.25);}
        .bk-vig--lantern::after{content:"";position:absolute;left:34%;top:78%;width:32%;height:10%;background:#C9A55B;border-radius:0 0 4px 4px;}
        .bk-vig--lantern i{position:absolute;left:38%;top:10%;width:24%;height:12%;background:#C9A55B;border-radius:4px 4px 0 0;}
        .bk-vig--lantern i::before{content:"";position:absolute;left:34%;top:-70%;width:32%;height:80%;border:3px solid #C9A55B;border-bottom:none;border-radius:50% 50% 0 0;}
        .bk-vig--bread::before{content:"";position:absolute;left:14%;top:38%;width:72%;height:42%;background:linear-gradient(180deg,#E0A765,#C07F3E);border-radius:50% 50% 30% 30%/70% 70% 30% 30%;}
        .bk-vig--bread::after{content:"";position:absolute;left:26%;top:46%;width:48%;height:3%;background:rgba(120,70,30,.5);box-shadow:0 8px 0 rgba(120,70,30,.42),0 16px 0 rgba(120,70,30,.32);border-radius:2px;}
        .bk-vig--shield::before{content:"";position:absolute;inset:10% 18%;background:linear-gradient(160deg,#5AA9E6,#2F7FD8);clip-path:polygon(50% 0,100% 16%,100% 60%,50% 100%,0 60%,0 16%);}
        .bk-vig--shield::after{content:"";position:absolute;left:35%;top:30%;width:30%;height:30%;border-left:5px solid #fff;border-bottom:5px solid #fff;transform:rotate(-50deg);}
        .bk-vig--house::before{content:"";position:absolute;left:22%;top:44%;width:56%;height:42%;background:#F2C28B;border-radius:0 0 4px 4px;}
        .bk-vig--house::after{content:"";position:absolute;left:14%;top:24%;width:72%;height:28%;background:#D86C5A;clip-path:polygon(50% 0,100% 100%,0 100%);}
        .bk-vig--house i{position:absolute;left:44%;top:62%;width:12%;height:24%;background:#9B5A3C;border-radius:3px 3px 0 0;}

        /* Tap-to-reveal interaction on page art */
        .bk-art-btn{position:relative;background:none;border:none;padding:0;margin:0;cursor:pointer;display:flex;align-items:center;justify-content:center;}
        .bk-art-fig{position:relative;display:flex;align-items:center;justify-content:center;}
        .bk-art-fig.bk-pop{animation:bkPop .5s cubic-bezier(.34,1.56,.64,1);}
        @keyframes bkPop{0%{transform:scale(1)}40%{transform:scale(1.18) rotate(-3deg)}70%{transform:scale(.95)}100%{transform:scale(1)}}
        .bk-art-spark{position:absolute;inset:0;pointer-events:none;}
        .bk-art-spark i{position:absolute;top:50%;left:50%;width:7px;height:7px;border-radius:50%;background:#F6C945;opacity:0;animation:bkSpark .65s ease-out forwards;}
        .bk-art-spark i:nth-child(1){--ax:-48px;--ay:-30px}
        .bk-art-spark i:nth-child(2){--ax:48px;--ay:-30px}
        .bk-art-spark i:nth-child(3){--ax:-40px;--ay:34px}
        .bk-art-spark i:nth-child(4){--ax:40px;--ay:34px}
        @keyframes bkSpark{0%{opacity:0;transform:translate(-50%,-50%) scale(.4)}30%{opacity:1}100%{opacity:0;transform:translate(calc(-50% + var(--ax)),calc(-50% + var(--ay))) scale(1)}}
        .bk-art-label{position:absolute;top:100%;left:50%;transform:translateX(-50%);margin-top:2px;white-space:nowrap;z-index:2;
          background:linear-gradient(135deg,#FFE3A0,#F0C463);color:#06231a;font-weight:800;font-size:12px;padding:4px 12px;border-radius:999px;
          box-shadow:0 4px 10px -4px rgba(0,0,0,.4);animation:bkLabelIn .3s ease;}
        @keyframes bkLabelIn{from{opacity:0;transform:translateX(-50%) translateY(-4px) scale(.8)}to{opacity:1;transform:translateX(-50%) translateY(0) scale(1)}}
        .bk-art-hint{position:absolute;top:100%;left:50%;transform:translateX(-50%);margin-top:3px;white-space:nowrap;
          font-size:10.5px;font-weight:700;color:var(--color-clay);opacity:.85;animation:bkHint 2s ease-in-out infinite;}

        /* Illustrated cover */
        .bk-page--cover{padding:0;}
        .bk-cover-scene{width:100%;flex-shrink:0;}
        .bk-cover-scene .sc{border-radius:16px 16px 0 0;border-left:0;border-right:0;border-top:0;}
        .bk-cover-scene .sc--cover{aspect-ratio:4 / 3;}
        .bk-cover-scene .bk-art-frame{aspect-ratio:16 / 10;height:auto;border-radius:16px 16px 0 0;box-shadow:none;}
        .bk-cover-text{flex:1;display:flex;flex-direction:column;align-items:center;justify-content:center;text-align:center;gap:10px;padding:clamp(16px,3.2vw,30px);}
        .bk-page--cover .bk-page-foot{padding-bottom:clamp(12px,2vw,18px);}

        /* ── Picture-book pages: the illustration fills the whole page ── */
        .bk-page--pic{padding:0;background:#EAF7FF;}
        .bk-page--pic::before,.bk-page--pic::after{display:none;}
        .bk-pic-art{position:absolute;inset:0;}
        .bk-pic-art [data-k],.bk-pic-art [data-who],.bk-pic-art [data-find]{cursor:pointer;}
        .bk-findchip{display:flex;flex-direction:column;align-items:center;gap:1px;padding:5px 12px;border-radius:14px;max-width:46vw;text-align:center;line-height:1.15;
          font-size:11.5px;font-weight:800;color:#3a2a00;background:rgba(255,255,255,.92);box-shadow:0 4px 12px -6px rgba(0,0,0,.4);}
        .bk-findchip.is-found{background:#FFE27A;}
        .bk-findcount{font-weight:700;opacity:.75;}
        .bk-choice{margin-top:10px;padding-top:10px;border-top:1.5px dashed rgba(0,0,0,.12);}
        .bk-choice-q{margin:0 0 8px;font-weight:800;font-size:.86em;color:#5a3a00;}
        .bk-choice-opts{display:flex;flex-wrap:wrap;gap:8px;justify-content:center;}
        .bk-choice-btn{flex:1 1 40%;min-height:42px;padding:8px 12px;border-radius:14px;font:inherit;font-size:.78em;font-weight:800;line-height:1.25;cursor:pointer;
          color:#3a2a00;background:#FFF3C4;border:2px solid #FFD447;box-shadow:0 3px 0 #E8B92E;transition:transform .12s ease;}
        .bk-choice-btn:active{transform:translateY(2px);box-shadow:0 1px 0 #E8B92E;}
        .bk-choice-btn.is-good{background:#D9F7DD;border-color:#5BBF5B;box-shadow:0 3px 0 #3E9A3E;}
        .bk-choice-btn.is-bad{background:#FFE3E3;border-color:#FF9B9B;box-shadow:0 3px 0 #E07070;animation:bkNo .4s ease;}
        @keyframes bkNo{0%,100%{transform:translateX(0)}25%{transform:translateX(-6px)}75%{transform:translateX(6px)}}
        .bk-choice-reply{margin:8px 0 0;font-size:.8em;font-weight:700;color:#B4462E;animation:bkToast 4s ease both;}
        .bk-choice-reply.is-good{color:#2F7A2F;}
        .bk-chant{display:flex;flex-direction:column;align-items:center;gap:2px;margin-top:10px;padding:8px 12px;border-radius:16px;background:#EAF4FF;border:2px dashed #7FB3F0;}
        .bk-chant.is-on{background:#FFE27A;border-color:#E8B92E;animation:bkChant 1s ease-in-out infinite;}
        @keyframes bkChant{0%,100%{transform:scale(1)}50%{transform:scale(1.04)}}
        .bk-chant-tag{font-size:.7em;font-weight:800;letter-spacing:.04em;color:#2B5A99;text-transform:uppercase;}
        .bk-chant.is-on .bk-chant-tag{color:#7a4a00;}
        .bk-chant-line{font-family:var(--font-display,inherit);font-weight:900;font-size:1.05em;color:#1E3A66;}
        .bk-talk-sub{margin:4px 0 10px;font-size:13px;color:#6b5a3a;}
        .bk-talk-color{display:inline-block;margin-top:12px;font-weight:800;font-size:13.5px;color:#C2410C;}
        .bk-dedic{display:flex;align-items:center;justify-content:center;gap:6px;margin-top:8px;font-size:13px;font-weight:700;color:#7a4a1a;}
        .bk-dedic input{width:140px;padding:5px 10px;border-radius:999px;border:1.5px dashed #E8B04B;background:rgba(255,255,255,.85);font:inherit;font-weight:800;color:#3a2a00;text-align:center;}
        .bk-sticker{display:flex;align-items:center;gap:12px;margin:10px auto 0;padding:10px 14px;border-radius:18px;max-width:340px;text-align:left;
          background:linear-gradient(135deg,#FFF6D6,#FFE7F0);box-shadow:0 8px 20px -14px rgba(0,0,0,.5);}
        .bk-sticker-badge{flex:none;display:grid;place-items:center;width:58px;height:58px;border-radius:50%;font-size:34px;background:#fff;
          box-shadow:0 0 0 4px #FFD447, 0 6px 14px -6px rgba(0,0,0,.4);}
        .bk-sticker.is-fresh .bk-sticker-badge{animation:bkStickerIn .9s cubic-bezier(.2,1.6,.4,1) both;}
        @keyframes bkStickerIn{0%{transform:scale(0) rotate(-40deg)}100%{transform:scale(1) rotate(0)}}
        .bk-sticker-text{display:flex;flex-direction:column;gap:2px;font-size:12.5px;color:#4a3a1a;}
        .bk-sticker-text b{font-size:13.5px;color:#3a2a00;}
        .bk-sticker-text a{font-weight:800;color:#C2410C;}
        .bk-fact-toast{position:relative;z-index:3;align-self:center;margin-top:4px;padding:6px 14px;border-radius:999px;font-size:13px;font-weight:800;
          color:#3a2a00;background:#FFE27A;box-shadow:0 6px 16px -8px rgba(0,0,0,.5);animation:bkToast 2.6s ease both;}
        @keyframes bkToast{0%{opacity:0;transform:translateY(-8px) scale(.9)}12%,85%{opacity:1;transform:none}100%{opacity:0}}
        .bk-tapburst{position:absolute;z-index:4;pointer-events:none;width:0;height:0;}
        .bk-tapburst i{position:absolute;left:-10px;top:-10px;font-style:normal;font-size:22px;animation:bkTapBurst .9s ease-out forwards;
          --a:calc(var(--n) * 90deg - 135deg);}
        @keyframes bkTapBurst{0%{transform:translate(0,0) scale(.4);opacity:0}25%{opacity:1}
          100%{transform:rotate(var(--a)) translateY(-54px) rotate(calc(var(--a) * -1)) scale(1);opacity:0}}
        .bk-pic-art .story-art{width:100%;height:100%;}
        .bk-pic-text{position:absolute;left:clamp(12px,3vw,22px);right:clamp(12px,3vw,22px);top:clamp(12px,3vw,22px);z-index:2;
          padding:clamp(12px,2.4vw,18px) clamp(14px,2.8vw,22px);border-radius:18px;text-align:center;
          background:rgba(255,251,241,.9);-webkit-backdrop-filter:blur(6px);backdrop-filter:blur(6px);
          box-shadow:0 10px 26px -18px rgba(40,30,10,.55),inset 0 0 0 1px rgba(255,255,255,.7);
          font-family:${bookFace.style.fontFamily};color:#2B2620;}
        .bk-pic-text p{margin:0;font-size:calc(var(--bk-fs,19px) * 1.06);line-height:1.5;text-wrap:balance;}
        .bk-pic-first::first-letter{font-family:var(--font-display);font-weight:700;color:#B5532F;font-size:1.5em;line-height:1;}
        .bk-pic-text blockquote{margin:.6em auto 0;padding-top:.55em;max-width:32ch;border-top:1px solid rgba(181,83,47,.35);
          font-style:italic;font-size:calc(var(--bk-fs,19px) * .9);line-height:1.45;color:#2F5D3F;text-wrap:balance;}
        .bk-pic-num{position:absolute;bottom:10px;left:50%;transform:translateX(-50%);z-index:2;min-width:30px;padding:2px 10px;border-radius:999px;
          background:rgba(255,251,241,.85);font-family:${bookFace.style.fontFamily};font-style:italic;font-size:13px;color:#5A4A3A;text-align:center;}
        .bk-pic-title{position:absolute;left:16px;right:16px;top:clamp(18px,5%,40px);z-index:2;text-align:center;
          padding:16px 18px;border-radius:22px;background:rgba(255,251,241,.9);-webkit-backdrop-filter:blur(6px);backdrop-filter:blur(6px);
          box-shadow:0 12px 30px -18px rgba(40,30,10,.6);}
        .bk-pic-title h2{margin:.25em 0 0;font-family:var(--font-display);font-weight:700;font-size:clamp(26px,calc(var(--bk-fs,19px) * 1.7),44px);line-height:1.08;color:#2B2620;}
        .bk-pic-start{position:absolute;bottom:14px;left:50%;transform:translateX(-50%);z-index:2;padding:8px 16px;border-radius:999px;
          background:rgba(255,251,241,.92);font-size:12px;font-weight:800;letter-spacing:.06em;text-transform:uppercase;color:#5A4A3A;white-space:nowrap;}
        html.dark .bk-pic-text,html.dark .bk-pic-title,html.dark .bk-pic-num,html.dark .bk-pic-start{background:rgba(36,32,26,.88);color:#F1E9DA;}
        html.dark .bk-pic-title h2{color:#F1E9DA;}
        html.dark .bk-pic-text blockquote{color:#A8D8B4;}

        /* Story text set like a printed picture book: a reading serif,
           book-like leading, gentle paragraph spacing, balanced lines. */
        .bk-prose{font-family:${bookFace.style.fontFamily};color:var(--bk-ink,var(--color-ink));
          font-size:var(--bk-fs,19px);font-weight:400;letter-spacing:.003em;
          font-kerning:normal;font-variant-ligatures:common-ligatures;font-feature-settings:"onum" 0,"liga" 1;
          -webkit-font-smoothing:antialiased;}
        .bk-prose p{font-size:var(--bk-fs,19px);line-height:1.62;margin:0 0 .62em;text-wrap:pretty;hanging-punctuation:first;}
        .bk-prose p:last-child{margin-bottom:0;}
        .bk-prose strong{font-weight:600;}
        .bk-prose em{font-style:italic;}
        /* opening drop cap on the first page */
        .bk-prose--first p:first-child::first-letter{font-family:var(--font-display);font-weight:700;float:left;
          font-size:3.35em;line-height:.8;margin:.07em .1em 0 0;color:var(--bk-accent,var(--color-clay));}
        .bk-prose--first p:first-child::first-line{font-variant-caps:all-small-caps;letter-spacing:.04em;}
        /* the Qur'an / hadith quote: centred, set off with rules */
        .bk-prose blockquote{margin:.5em auto .7em;padding:.55em .4em;max-width:30ch;text-align:center;border:0;
          border-top:1px solid color-mix(in srgb,var(--bk-accent,#B5532F) 35%,transparent);
          border-bottom:1px solid color-mix(in srgb,var(--bk-accent,#B5532F) 35%,transparent);
          font-style:italic;font-size:calc(var(--bk-fs,19px) * .98);line-height:1.55;color:color-mix(in srgb,var(--bk-ink,#2B2620) 82%,#1E8C53);text-wrap:balance;}

        .bk-cover-inner,.bk-end-inner{display:flex;flex-direction:column;align-items:center;justify-content:center;text-align:center;gap:14px;height:100%;}
        .bk-cover-badge{font-size:11px;font-weight:800;letter-spacing:.16em;text-transform:uppercase;color:var(--color-clay);}
        .bk-cover-pose{width:clamp(120px,22vw,168px);height:auto;object-fit:contain;filter:drop-shadow(0 12px 22px rgba(0,0,0,.18));}
        .bk-cover-title{font-family:var(--font-display);font-size:clamp(26px,calc(var(--bk-fs,22px) * 1.55),48px);line-height:1.12;color:var(--color-ink);margin:0;}
        .bk-cover-hook{font-family:${bookFace.style.fontFamily};font-style:italic;font-size:calc(var(--bk-fs,22px) * 0.86);line-height:1.6;color:var(--color-whisper);max-width:34ch;margin:0;}
        .bk-end-quote{font-family:${bookFace.style.fontFamily};font-style:italic;font-size:calc(var(--bk-fs,22px) * 0.98);line-height:1.6;color:var(--color-ink);max-width:32ch;}
        .bk-end-pose-wrap{position:relative;display:flex;flex-direction:column;align-items:center;}
        .bk-end-pose-btn{background:none;border:none;padding:0;cursor:pointer;line-height:0;}
        .bk-end-pose-btn:active{transform:scale(.97);}
        .bk-end-pose{width:clamp(110px,19vw,150px);height:auto;object-fit:contain;transform-origin:62% 88%;}
        .bk-end-pose.bk-wave{animation:bkWave .85s ease;}
        @keyframes bkWave{0%{transform:rotate(0)}14%{transform:rotate(-13deg)}30%{transform:rotate(10deg)}46%{transform:rotate(-8deg)}62%{transform:rotate(6deg)}78%{transform:rotate(-3deg)}100%{transform:rotate(0)}}
        .bk-bubble{position:absolute;top:-6px;left:50%;transform:translateX(-50%);white-space:nowrap;
          background:linear-gradient(135deg,#FFE3A0,#F0C463);color:#06231a;font-weight:800;font-size:14px;
          padding:7px 14px;border-radius:16px;box-shadow:0 6px 16px -8px rgba(0,0,0,.5);animation:bkBubble 1.8s ease forwards;}
        .bk-bubble::after{content:"";position:absolute;bottom:-6px;left:50%;transform:translateX(-50%);
          border:7px solid transparent;border-top-color:#F0C463;border-bottom:0;}
        @keyframes bkBubble{0%{opacity:0;transform:translateX(-50%) translateY(6px) scale(.7)}15%{opacity:1;transform:translateX(-50%) translateY(0) scale(1)}80%{opacity:1}100%{opacity:0;transform:translateX(-50%) translateY(-4px)}}
        .bk-burst{position:absolute;top:14%;left:50%;width:0;height:0;pointer-events:none;}
        .bk-burst i{position:absolute;font-style:normal;font-size:22px;left:0;top:0;opacity:0;
          animation:bkBurst 1.1s ease-out forwards;animation-delay:calc(var(--n) * .05s);}
        .bk-burst i:nth-child(1){--dx:-54px}.bk-burst i:nth-child(2){--dx:-18px}
        .bk-burst i:nth-child(3){--dx:18px}.bk-burst i:nth-child(4){--dx:54px}
        @keyframes bkBurst{0%{opacity:0;transform:translate(0,0) scale(.5)}25%{opacity:1}100%{opacity:0;transform:translate(var(--dx,0),-60px) scale(1.1)}}
        .bk-tap-hint{margin-top:6px;font-size:11px;font-weight:700;letter-spacing:.04em;color:var(--color-clay);opacity:.9;animation:bkHint 2s ease-in-out infinite;}
        @keyframes bkHint{0%,100%{opacity:.5}50%{opacity:1}}
        .bk-end-word{font-family:var(--font-display);font-size:clamp(24px,calc(var(--bk-fs,22px) * 1.45),44px);color:var(--color-clay);margin:0;}
        .bk-end-sub{font-size:calc(var(--bk-fs,22px) * 0.62);color:var(--color-whisper);margin:0;}
        .bk-nextstory{margin-top:14px;display:flex;flex-direction:column;align-items:center;gap:2px;text-align:center;
          text-decoration:none;background:linear-gradient(135deg,#FFE3A0,#F0C463);color:#06231a;
          padding:10px 18px;border-radius:16px;max-width:88%;box-shadow:0 6px 16px -8px rgba(0,0,0,.5);transition:transform .12s ease;}
        .bk-nextstory:active{transform:scale(.98);}
        .bk-nextstory-label{font-size:10.5px;font-weight:800;letter-spacing:.08em;text-transform:uppercase;opacity:.75;}
        .bk-nextstory-title{font-family:var(--font-display);font-size:15px;font-weight:700;line-height:1.2;}

        .bk-nav{flex-shrink:0;width:54px;height:54px;border-radius:50%;cursor:pointer;font-size:30px;line-height:1;
          display:flex;align-items:center;justify-content:center;color:#fff;
          border:1px solid rgba(255,255,255,.22);background:rgba(255,255,255,.12);transition:background .15s,transform .1s;}
        .bk-nav:hover:not(:disabled){background:rgba(255,255,255,.22);}
        .bk-nav:active:not(:disabled){transform:scale(.92);}
        .bk-nav:disabled{opacity:.25;cursor:default;}

        .bk-botbar{position:relative;z-index:2;flex-shrink:0;display:flex;align-items:center;justify-content:center;gap:14px;
          padding:10px 16px;padding-bottom:calc(10px + env(safe-area-inset-bottom));}
        .bk-pgbtn{padding:12px clamp(12px,3.6vw,18px);white-space:nowrap;border-radius:14px;cursor:pointer;font-weight:800;font-size:14px;color:#06231a;
          border:none;background:linear-gradient(135deg,#FFE3A0,#F0C463);box-shadow:0 6px 18px -8px rgba(0,0,0,.5);}
        .bk-pgbtn:disabled{opacity:.4;cursor:default;filter:saturate(.6);}
        .bk-pgbtn:active:not(:disabled){transform:scale(.97);}
        .bk-pgcount{font-size:13px;font-weight:700;color:rgba(255,255,255,.85);min-width:64px;text-align:center;}

        /* Phone: hide the big side arrows, rely on the bottom bar + swipe */

        /* ── Wide screens: calm motion, one continuous picture per spread ── */
        .bk-overlay--wide .bk-ambient{display:none;}
        .bk-book--spread .bk-leaf--next,.bk-book--spread .bk-leaf--prev{animation:bkSoftIn .5s ease;}
        .bk-book--spread .bk-leaf--open{animation:bkSoftIn .45s ease;}
        @keyframes bkSoftIn{from{opacity:0}to{opacity:1}}
        .bk-page--spread{flex:1 1 100%;border-radius:16px;overflow:hidden;}
        .bk-page--spread .bk-pic-art .story-art{width:100%;height:100%;}
        .bk-gutter{position:absolute;top:0;bottom:0;left:50%;width:90px;transform:translateX(-50%);z-index:1;pointer-events:none;
          background:linear-gradient(90deg,transparent 0,rgba(60,40,15,.07) 38%,rgba(60,40,15,.2) 49.5%,rgba(255,255,255,.18) 50.5%,rgba(60,40,15,.07) 62%,transparent 100%);}
        .bk-spread-text{right:auto;width:min(40%,420px);}
        .bk-spread-text--left{left:clamp(18px,3vw,34px);}
        .bk-spread-text--right{left:auto;right:clamp(18px,3vw,34px);}
        .bk-spread-num--left{left:25%;}
        .bk-spread-num--right{left:75%;}
        .bk-leaf--spreadpic .bk-spine{display:none;}
        .bk-page--back{background:linear-gradient(160deg,#C6643C,#A94F2C);color:#FFF4E6;}
        html.dark .bk-page--back{background:linear-gradient(160deg,#7A3A22,#5C2B19);}
        .bk-back-inner{flex:1;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:18px;padding:12%;text-align:center;
          background-image:radial-gradient(rgba(255,255,255,.08) 1.5px,transparent 1.6px);background-size:22px 22px;}
        .bk-back-logo{font-family:var(--font-display);font-weight:800;font-size:clamp(28px,3.4vw,46px);letter-spacing:.01em;}
        .bk-back-blurb{margin:0;max-width:30ch;font-size:calc(var(--bk-fs,19px) * 1.02);line-height:1.55;opacity:.95;text-wrap:balance;}
        .bk-back-tag{font-size:13px;letter-spacing:.06em;text-transform:uppercase;opacity:.75;}
        .bk-back-url{margin-top:6px;padding:6px 14px;border-radius:999px;background:rgba(255,255,255,.16);font-weight:700;font-size:13px;}
        .bk-book--spread .bk-page--back:first-child{border-radius:16px 6px 6px 16px;}
        .bk-book--spread .bk-page--back:last-child{border-radius:6px 16px 16px 6px;}

        /* ── Parents' card ── */
        .bk-page--card{background:linear-gradient(170deg,#FFF6E8,#FDECD6);}
        html.dark .bk-page--card{background:linear-gradient(170deg,#2E2820,#272118);}
        .bk-card{margin:auto;width:min(88%,460px);max-height:calc(100% - 24px);overflow:auto;padding:clamp(18px,4vw,30px);border-radius:22px;background:#FFFFFF;
          box-shadow:0 18px 40px -24px rgba(90,50,10,.45);border:2px dashed #F0B98A;display:flex;flex-direction:column;gap:12px;}
        html.dark .bk-card{background:#332C23;border-color:#8A5A34;}
        .bk-card-badge{align-self:flex-start;padding:4px 12px;border-radius:999px;background:#FDE3CE;color:#A9472A;font-weight:800;font-size:12px;letter-spacing:.04em;text-transform:uppercase;}
        .bk-card-title{margin:0;font-family:var(--font-display);font-weight:800;font-size:clamp(20px,calc(var(--bk-fs,19px) * 1.15),28px);line-height:1.2;color:var(--color-ink);}
        .bk-card-list{list-style:none;margin:0;padding:0;display:flex;flex-direction:column;gap:12px;}
        .bk-card-list li{display:flex;gap:12px;align-items:flex-start;font-size:clamp(14px,calc(var(--bk-fs,19px) * .8),18px);line-height:1.45;color:var(--color-ink);}
        .bk-card-num{flex:0 0 30px;height:30px;border-radius:50%;display:grid;place-items:center;background:#4FB477;color:#fff;font-weight:900;}
        .bk-card-foot{align-self:flex-end;font-size:12px;font-weight:700;color:#B5532F;opacity:.8;}
        @media (max-width: 859px){ .bk-nav{display:none;} .bk-pic-num{display:none;} }
        /* Desktop/tablet: keep the bottom bar minimal (count only via arrows) */
        @media (min-width: 860px){ .bk-botbar .bk-pgbtn{display:none;} }

        @media (prefers-reduced-motion: reduce){
          .bk-leaf--next,.bk-leaf--prev,.bk-leaf--open,.bk-amb,.bk-cpose,
          .bk-wave,.bk-burst i,.bk-tap-hint,.bk-pop,.bk-art-spark i,.bk-art-hint{animation:none;}
        }
      `}</style>
    </>
  );
}
