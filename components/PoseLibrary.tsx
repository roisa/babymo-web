"use client";

import { useEffect, useMemo, useState, useCallback } from "react";
import { asset, type Locale } from "@/lib/i18n/config";

export interface PoseRow {
  who: "mo" | "ais" | "adam" | "ayah" | "umi";
  name: string;
  src: string;
  category: string;
  mood: string;
  use: string;
  props?: string[];
  low?: boolean;
  air?: boolean;
  duo?: boolean;
  alt?: boolean;
  check?: string;
  /** titles of books that already use this pose */
  books: string[];
}

export interface FrameSet {
  who: PoseRow["who"];
  key: string;
  frames: string[];
}

const WHO: Record<PoseRow["who"], { label: string; color: string; soft: string }> = {
  mo: { label: "Baby Mo", color: "#3f9b3a", soft: "#e4f4e1" },
  ais: { label: "Baby Ais", color: "#d9568f", soft: "#fbe7f1" },
  adam: { label: "Kak Adam", color: "#2f7fd6", soft: "#e2effc" },
  ayah: { label: "Abi", color: "#8a6a3f", soft: "#f3ece1" },
  umi: { label: "Umi", color: "#9b6bc4", soft: "#f1e8f8" },
};
const WHO_ORDER: PoseRow["who"][] = ["mo", "ais", "adam", "ayah", "umi"];

const T = {
  id: {
    search: "Cari pose… (doa, tidur, raket, sedih, pose-12)",
    all: "Semua",
    allCats: "Semua kategori",
    low: "Duduk / rendah",
    unused: "Belum dipakai",
    hideCheck: "Sembunyikan yang perlu dicek",
    sortDefault: "Urutan pustaka",
    sortUsed: "Paling sering dipakai",
    sortName: "Nama A–Z",
    results: (n: number) => `${n} pose`,
    none: "Tidak ada pose yang cocok. Coba kata lain.",
    reset: "Hapus filter",
    copyName: "Salin nama",
    copySnippet: "Salin kode scene",
    copyLink: "Salin tautan",
    download: "Unduh PNG",
    copied: "Tersalin ✓",
    props: "Benda di gambar",
    usedIn: (n: number) => (n ? `Dipakai di ${n} buku` : "Belum dipakai di buku mana pun"),
    check: "Perlu dicek",
    animations: "Animasi frame",
    animHint: "Set 6 frame untuk gerakan. Klik untuk melihat detail.",
    play: "Putar",
    pause: "Jeda",
    frameOf: (i: number, n: number) => `Frame ${i} dari ${n}`,
    badge: { low: "rendah", air: "melompat", duo: "dengan Mo", alt: "mirip" },
    close: "Tutup",
    prev: "Sebelumnya",
    next: "Berikutnya",
    poses: "Pose",
  },
  en: {
    search: "Search poses… (dua, sleep, racket, sad, pose-12)",
    all: "All",
    allCats: "All categories",
    low: "Sitting / low",
    unused: "Not used yet",
    hideCheck: "Hide poses to check",
    sortDefault: "Library order",
    sortUsed: "Most used",
    sortName: "Name A–Z",
    results: (n: number) => `${n} poses`,
    none: "No poses match. Try another word.",
    reset: "Clear filters",
    copyName: "Copy name",
    copySnippet: "Copy scene code",
    copyLink: "Copy link",
    download: "Download PNG",
    copied: "Copied ✓",
    props: "Objects in the image",
    usedIn: (n: number) => (n ? `Used in ${n} book${n > 1 ? "s" : ""}` : "Not used in any book yet"),
    check: "Needs a check",
    animations: "Frame animations",
    animHint: "Six-frame sets for movement. Click one for details.",
    play: "Play",
    pause: "Pause",
    frameOf: (i: number, n: number) => `Frame ${i} of ${n}`,
    badge: { low: "low", air: "jumping", duo: "with Mo", alt: "near-duplicate" },
    close: "Close",
    prev: "Previous",
    next: "Next",
    poses: "Poses",
  },
};

/** Indonesian (and casual) search words → words used in the English pose notes */
const SYN: Record<string, string[]> = {
  doa: ["dua", "pray", "worship"], berdoa: ["dua", "pray"], sholat: ["pray", "sholat", "salah", "worship"], solat: ["pray", "sholat"], shalat: ["pray", "sholat"],
  ngaji: ["quran", "read"], mengaji: ["quran", "read"], quran: ["quran"], wudhu: ["wudhu", "wash"], masjid: ["mosque", "masjid"], adzan: ["adhan", "adzan"],
  tidur: ["sleep", "bed"], ngantuk: ["sleepy", "yawn"], bangun: ["wake"], mandi: ["bath"], sikat: ["brush"], gigi: ["teeth", "tooth"],
  makan: ["eat", "food"], minum: ["drink", "water"], lapar: ["hungry"], kenyang: ["full"],
  sedih: ["sad", "cry"], nangis: ["cry"], menangis: ["cry"], marah: ["angry", "grumpy", "cross"], takut: ["scared", "afraid", "fear"], kaget: ["surprise", "shock"],
  senang: ["happy", "joy"], bahagia: ["happy", "joy"], gembira: ["happy", "excited"], malu: ["shy", "bashful"], bingung: ["confused", "unsure"], sakit: ["sick", "hurt"],
  capek: ["tired"], lelah: ["tired"], bosan: ["bored"], cemas: ["worried", "nervous"], khawatir: ["worried"], bangga: ["proud"], kecewa: ["disappointed", "sad"],
  peluk: ["hug"], pelukan: ["hug"], cium: ["kiss"], sayang: ["love", "hug"], tolong: ["help"], bantu: ["help"], memberi: ["give", "offer"], sedekah: ["sedekah", "charity", "coin"],
  halo: ["hello", "wave", "greet"], dadah: ["wave", "bye"], salam: ["salam", "greet"], terima: ["thank"], makasih: ["thank"], maaf: ["sorry"],
  lari: ["run"], lompat: ["jump"], jalan: ["walk"], duduk: ["sit"], berdiri: ["stand"], jongkok: ["crouch", "squat"], berlutut: ["kneel"], tunjuk: ["point"], menunjuk: ["point"],
  main: ["play"], bermain: ["play"], bola: ["ball"], raket: ["racket"], tenis: ["tennis"], sepeda: ["bike", "bicycle"], layang: ["kite"], renang: ["swim"],
  baca: ["read", "book"], membaca: ["read", "book"], buku: ["book"], belajar: ["learn", "study"], sekolah: ["school"], tulis: ["write"], menulis: ["write"], gambar: ["draw"], menggambar: ["draw"],
  hujan: ["rain", "umbrella"], payung: ["umbrella"], panas: ["hot", "sun"], dingin: ["cold"], tanaman: ["plant"], bunga: ["flower"], kucing: ["cat", "kitten"],
  hadiah: ["gift", "present"], kado: ["gift", "present"], ulang: ["birthday"], lebaran: ["eid", "lebaran"], ramadan: ["ramadan", "fast"], puasa: ["fast", "ramadan"],
  kakak: ["adam"], adik: ["baby", "twins"], ayah: ["ayah", "abi"], abi: ["abi", "ayah"], umi: ["umi"], ibu: ["umi"], bunda: ["umi"], mama: ["umi"], nur: ["umi"], belanja: ["groceries", "shop", "market"], jilbab: ["hijab"], kerudung: ["hijab"], kembar: ["twins"], pikir: ["think"], berpikir: ["think"], ide: ["idea"],
  hp: ["phone", "screen"], telepon: ["phone"], tv: ["tv", "screen"], mobil: ["car"], kerja: ["work", "laptop"], masak: ["cook"], memasak: ["cook"],
};
const norm = (s: string) => s.toLowerCase().replace(/['’`]/g, "");
const alts = (w: string) => [w, ...(SYN[w] ?? [])];

const keyOf = (r: { who: string; name: string }) => `${r.who}:${r.name}`;
const snippet = (r: PoseRow) => (r.who === "mo" ? `{ pose: "${r.name}", x: 400 }` : `{ who: "${r.who}", pose: "${r.name}", x: 400 }`);
const seqSnippet = (s: FrameSet) =>
  `{ ${s.who === "mo" ? "" : `who: "${s.who}", `}pose: "${s.frames[0]}", seq: [${s.frames.map((f) => `"${f}"`).join(", ")}], fps: 7, x: 400 }`;

function useCopy() {
  const [done, setDone] = useState<string | null>(null);
  const copy = useCallback((text: string, tag: string) => {
    const ok = () => {
      setDone(tag);
      window.setTimeout(() => setDone((d) => (d === tag ? null : d)), 1400);
    };
    if (navigator.clipboard?.writeText) navigator.clipboard.writeText(text).then(ok, ok);
    else {
      const ta = document.createElement("textarea");
      ta.value = text;
      document.body.appendChild(ta);
      ta.select();
      try { document.execCommand("copy"); } catch {}
      ta.remove();
      ok();
    }
  }, []);
  return { done, copy };
}

function Frames({ srcs, playing, fps = 7, className, alt }: { srcs: string[]; playing: boolean; fps?: number; className?: string; alt: string }) {
  const [i, setI] = useState(0);
  useEffect(() => {
    if (!playing) return;
    const t = window.setInterval(() => setI((n) => (n + 1) % srcs.length), 1000 / fps);
    return () => window.clearInterval(t);
  }, [playing, fps, srcs.length]);
  return (
    <div className={`relative ${className ?? ""}`}>
      {srcs.map((s, n) => (
        // eslint-disable-next-line @next/next/no-img-element
        <img key={s} src={s} alt={n === i ? alt : ""} loading="lazy" draggable={false} className="pl-img absolute inset-0 h-full w-full object-contain" style={{ opacity: n === i ? 1 : 0 }} />
      ))}
    </div>
  );
}

export function PoseLibrary({ locale, rows, sets, categories }: { locale: Locale; rows: PoseRow[]; sets: FrameSet[]; categories: Record<string, string> }) {
  const t = T[locale];
  const [q, setQ] = useState("");
  const [who, setWho] = useState<PoseRow["who"] | "all">("all");
  const [cat, setCat] = useState("all");
  const [low, setLow] = useState(false);
  const [unused, setUnused] = useState(false);
  const [hideCheck, setHideCheck] = useState(false);
  const [sort, setSort] = useState<"default" | "used" | "name">("default");
  const [open, setOpen] = useState<string | null>(null);
  const [playing, setPlaying] = useState(true);
  const { done, copy } = useCopy();

  const byKey = useMemo(() => new Map(rows.map((r) => [keyOf(r), r])), [rows]);
  const setFor = useMemo(() => {
    const m = new Map<string, FrameSet>();
    for (const s of sets) for (const f of s.frames) m.set(`${s.who}:${f}`, s);
    return m;
  }, [sets]);

  // read ?q= &who= &cat= &pose= once, so the team can share links
  useEffect(() => {
    const p = new URLSearchParams(window.location.search);
    if (p.get("q")) setQ(p.get("q")!);
    const w = p.get("who");
    if (w && w in WHO) setWho(w as PoseRow["who"]);
    if (p.get("cat")) setCat(p.get("cat")!);
    if (p.get("pose")) setOpen(p.get("pose"));
  }, []);
  useEffect(() => {
    const p = new URLSearchParams();
    if (q) p.set("q", q);
    if (who !== "all") p.set("who", who);
    if (cat !== "all") p.set("cat", cat);
    if (open) p.set("pose", open);
    const s = p.toString();
    window.history.replaceState(null, "", `${window.location.pathname}${s ? `?${s}` : ""}`);
  }, [q, who, cat, open]);

  const base = useMemo(() => {
    const words = norm(q).trim().split(/\s+/).filter(Boolean);
    return rows.filter((r) => {
      if (cat !== "all" && r.category !== cat) return false;
      if (low && !r.low) return false;
      if (unused && r.books.length) return false;
      if (hideCheck && r.check) return false;
      if (!words.length) return true;
      const hay = norm(`${r.name} ${r.mood} ${r.use} ${categories[r.category] ?? ""} ${r.category} ${(r.props ?? []).join(" ")} ${WHO[r.who].label} ${r.who}`);
      return words.every((w) => alts(w).some((a) => hay.includes(a)));
    });
  }, [rows, q, cat, low, unused, hideCheck, categories]);

  const list = useMemo(() => {
    const l = who === "all" ? base : base.filter((r) => r.who === who);
    if (sort === "used") return [...l].sort((a, b) => b.books.length - a.books.length);
    if (sort === "name") return [...l].sort((a, b) => a.name.localeCompare(b.name));
    return l;
  }, [base, who, sort]);

  const counts = useMemo(() => {
    const c: Record<string, number> = { all: base.length };
    for (const r of base) c[r.who] = (c[r.who] ?? 0) + 1;
    return c;
  }, [base]);

  const catCounts = useMemo(() => {
    const c: Record<string, number> = {};
    for (const r of rows) if (who === "all" || r.who === who) c[r.category] = (c[r.category] ?? 0) + 1;
    return c;
  }, [rows, who]);

  const visibleSets = useMemo(() => {
    const words = norm(q).trim().split(/\s+/).filter(Boolean);
    return sets.filter((s) => {
      if (who !== "all" && s.who !== who) return false;
      if (cat !== "all" && cat !== "play") return false;
      if (!words.length) return true;
      const hay = norm(`${s.key} ${s.frames.join(" ")} ${WHO[s.who].label} ${s.who} tennis animasi animation frames`);
      return words.every((w) => alts(w).some((a) => hay.includes(a)));
    });
  }, [sets, q, who, cat]);

  const cur = open ? byKey.get(open) : undefined;
  const curIdx = cur ? list.findIndex((r) => keyOf(r) === open) : -1;
  const curSet = open ? setFor.get(open) : undefined;

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(null);
      if (e.key === "ArrowRight" && curIdx >= 0 && curIdx < list.length - 1) setOpen(keyOf(list[curIdx + 1]!));
      if (e.key === "ArrowLeft" && curIdx > 0) setOpen(keyOf(list[curIdx - 1]!));
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open, curIdx, list]);

  const filtered = q || who !== "all" || cat !== "all" || low || unused || hideCheck;
  const reset = () => {
    setQ(""); setWho("all"); setCat("all"); setLow(false); setUnused(false); setHideCheck(false);
  };

  return (
    <div className="pl">
      {/* controls */}
      <div className="pl-bar top-0 z-20 md:sticky -mx-4 mb-4 px-4 py-3 sm:-mx-8 sm:px-8">
        <div className="flex flex-col gap-3">
          <div className="relative">
            <span className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-lg" aria-hidden>🔍</span>
            <input
              type="search"
              value={q}
              onChange={(e) => setQ(e.target.value)}
              placeholder={t.search}
              aria-label={t.search}
              className="pl-input w-full rounded-2xl py-3 pl-11 pr-4 text-base"
            />
          </div>
          <div className="pl-row flex items-center gap-2">
            <button type="button" onClick={() => setWho("all")} className={`pl-chip ${who === "all" ? "is-on" : ""}`}>
              {t.all} <span className="pl-n">{counts.all ?? 0}</span>
            </button>
            {WHO_ORDER.map((w) => (
              <button
                type="button"
                key={w}
                onClick={() => setWho(who === w ? "all" : w)}
                className={`pl-chip ${who === w ? "is-on" : ""}`}
                style={who === w ? { background: WHO[w].color, borderColor: WHO[w].color, color: "#fff" } : { borderColor: WHO[w].color }}
              >
                <span className="pl-dot" style={{ background: WHO[w].color }} />
                {WHO[w].label} <span className="pl-n">{counts[w] ?? 0}</span>
              </button>
            ))}
          </div>
          <div className="pl-row flex items-center gap-2 text-sm">
            <select value={cat} onChange={(e) => setCat(e.target.value)} className="pl-select rounded-xl px-3 py-2" aria-label={t.allCats}>
              <option value="all">{t.allCats}</option>
              {Object.entries(categories).map(([k, v]) => (
                <option key={k} value={k} disabled={!catCounts[k]}>
                  {v} ({catCounts[k] ?? 0})
                </option>
              ))}
            </select>
            <select value={sort} onChange={(e) => setSort(e.target.value as typeof sort)} className="pl-select rounded-xl px-3 py-2" aria-label="Sort">
              <option value="default">{t.sortDefault}</option>
              <option value="used">{t.sortUsed}</option>
              <option value="name">{t.sortName}</option>
            </select>
            <label className={`pl-chip pl-toggle ${low ? "is-on" : ""}`}>
              <input type="checkbox" checked={low} onChange={(e) => setLow(e.target.checked)} /> {t.low}
            </label>
            <label className={`pl-chip pl-toggle ${unused ? "is-on" : ""}`}>
              <input type="checkbox" checked={unused} onChange={(e) => setUnused(e.target.checked)} /> {t.unused}
            </label>
            <label className={`pl-chip pl-toggle ${hideCheck ? "is-on" : ""}`}>
              <input type="checkbox" checked={hideCheck} onChange={(e) => setHideCheck(e.target.checked)} /> {t.hideCheck}
            </label>
            <span className="ml-auto text-whisper">{t.results(list.length)}</span>
            {filtered && (
              <button type="button" onClick={reset} className="font-semibold text-berry underline-offset-2 hover:underline">
                {t.reset}
              </button>
            )}
          </div>
        </div>
      </div>

      {/* frame animations */}
      {visibleSets.length > 0 && !low && !unused && (
        <section className="mb-8">
          <h2 className="font-serif text-xl font-medium text-ink">{t.animations} <span className="text-base text-whisper">· {visibleSets.length}</span></h2>
          <p className="mb-3 text-sm text-whisper">{t.animHint}</p>
          <div className="pl-grid">
            {visibleSets.map((s) => {
              const srcs = s.frames.map((f) => asset(byKey.get(`${s.who}:${f}`)?.src ?? ""));
              return (
                <button type="button" key={`${s.who}-${s.key}`} onClick={() => setOpen(`${s.who}:${s.frames[0]}`)} className="pl-card text-left">
                  <Frames srcs={srcs} playing className="pl-thumb" alt={`${WHO[s.who].label} ${s.key}`} />
                  <div className="p-3">
                    <div className="flex items-center gap-1.5">
                      <span className="pl-dot" style={{ background: WHO[s.who].color }} />
                      <code className="truncate text-sm font-semibold text-ink">{s.key}</code>
                    </div>
                    <p className="mt-0.5 text-xs text-whisper">▶ {s.frames.length} frames · {WHO[s.who].label}</p>
                  </div>
                </button>
              );
            })}
          </div>
        </section>
      )}

      {/* poses */}
      {visibleSets.length > 0 && !low && !unused && <h2 className="mb-3 font-serif text-xl font-medium text-ink">{t.poses} <span className="text-base text-whisper">· {list.length}</span></h2>}
      {list.length === 0 ? (
        <p className="rounded-2xl border border-dashed p-10 text-center text-whisper">{t.none}</p>
      ) : (
        <div className="pl-grid">
          {list.map((r) => (
            <button type="button" key={keyOf(r)} onClick={() => setOpen(keyOf(r))} className="pl-card text-left" title={r.use}>
              <div className="pl-thumb">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={asset(r.src)} alt={`${WHO[r.who].label} – ${r.name}`} loading="lazy" decoding="async" draggable={false} className="pl-img h-full w-full object-contain" />
                {r.check && <span className="pl-warn" title={r.check}>⚠️</span>}
                {r.books.length > 0 && <span className="pl-used" title={t.usedIn(r.books.length)}>📖 {r.books.length}</span>}
              </div>
              <div className="p-3">
                <div className="flex items-center gap-1.5">
                  <span className="pl-dot shrink-0" style={{ background: WHO[r.who].color }} />
                  <code className="truncate text-sm font-semibold text-ink">{r.name}</code>
                </div>
                <p className="mt-0.5 line-clamp-2 text-xs leading-snug text-whisper">{r.use}</p>
              </div>
            </button>
          ))}
        </div>
      )}

      {/* detail */}
      {cur && (
        <div className="pl-modal fixed inset-0 z-50 flex items-end justify-center sm:items-center" role="dialog" aria-modal="true" aria-label={cur.name} onClick={() => setOpen(null)}>
          <div className="pl-sheet relative max-h-[92vh] w-full max-w-3xl overflow-auto rounded-t-3xl sm:rounded-3xl" onClick={(e) => e.stopPropagation()}>
            <button type="button" onClick={() => setOpen(null)} className="pl-x absolute right-3 top-3 z-10" aria-label={t.close}>✕</button>
            <div className="grid gap-0 sm:grid-cols-2">
              <div className="pl-thumb pl-big relative">
                {curSet ? (
                  <Frames srcs={curSet.frames.map((f) => asset(byKey.get(`${curSet.who}:${f}`)?.src ?? ""))} playing={playing} className="h-full w-full" alt={curSet.key} />
                ) : (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img src={asset(cur.src)} alt={`${WHO[cur.who].label} – ${cur.name}`} className="pl-img h-full w-full object-contain" />
                )}
              </div>
              <div className="flex flex-col gap-3 p-5">
                <div>
                  <span className="inline-flex items-center gap-1.5 rounded-full px-2.5 py-0.5 text-xs font-bold" style={{ background: WHO[cur.who].soft, color: WHO[cur.who].color }}>
                    <span className="pl-dot" style={{ background: WHO[cur.who].color }} />
                    {WHO[cur.who].label}
                  </span>
                  <h3 className="mt-2 break-all font-mono text-xl font-semibold text-ink">{cur.name}</h3>
                  <p className="text-sm text-whisper">
                    {categories[cur.category] ?? cur.category} · {cur.mood}
                  </p>
                </div>
                <p className="text-base leading-relaxed text-ink">{cur.use}</p>
                <div className="flex flex-wrap gap-1.5">
                  {cur.low && <span className="pl-tag">{t.badge.low}</span>}
                  {cur.air && <span className="pl-tag">{t.badge.air}</span>}
                  {cur.duo && <span className="pl-tag">{t.badge.duo}</span>}
                  {cur.alt && <span className="pl-tag">{t.badge.alt}</span>}
                </div>
                {cur.props && cur.props.length > 0 && (
                  <p className="text-sm text-whisper">
                    <b className="text-ink">{t.props}:</b> {cur.props.join(", ")}
                  </p>
                )}
                {cur.check && (
                  <p className="pl-checkbox rounded-xl p-3 text-sm">
                    <b>⚠️ {t.check}:</b> {cur.check}
                  </p>
                )}
                {curSet && (
                  <div className="rounded-xl border p-3 text-sm">
                    <div className="flex items-center justify-between gap-2">
                      <b className="text-ink">▶ {curSet.key}</b>
                      <button type="button" className="pl-chip" onClick={() => setPlaying((p) => !p)}>{playing ? t.pause : t.play}</button>
                    </div>
                    <div className="mt-2 flex flex-wrap gap-1">
                      {curSet.frames.map((f, i) => (
                        <button type="button" key={f} onClick={() => setOpen(`${curSet.who}:${f}`)} className={`pl-frame ${`${curSet.who}:${f}` === open ? "is-on" : ""}`} title={t.frameOf(i + 1, curSet.frames.length)}>
                          {/* eslint-disable-next-line @next/next/no-img-element */}
                          <img src={asset(byKey.get(`${curSet.who}:${f}`)?.src ?? "")} alt={f} loading="lazy" className="h-full w-full object-contain" />
                        </button>
                      ))}
                    </div>
                    <button type="button" className="mt-2 text-xs font-semibold text-berry" onClick={() => copy(seqSnippet(curSet), "seq")}>
                      {done === "seq" ? t.copied : `${t.copySnippet} (seq)`}
                    </button>
                  </div>
                )}
                <p className="text-sm text-whisper">
                  📖 <b className="text-ink">{t.usedIn(cur.books.length)}</b>
                  {cur.books.length > 0 && <span className="block pt-1">{cur.books.join(" · ")}</span>}
                </p>
                <code className="pl-code block overflow-x-auto rounded-xl p-3 text-xs">{snippet(cur)}</code>
                <div className="flex flex-wrap gap-2">
                  <button type="button" className="pl-btn is-main" onClick={() => copy(cur.name, "name")}>{done === "name" ? t.copied : t.copyName}</button>
                  <button type="button" className="pl-btn" onClick={() => copy(snippet(cur), "snip")}>{done === "snip" ? t.copied : t.copySnippet}</button>
                  <button type="button" className="pl-btn" onClick={() => copy(window.location.href, "link")}>{done === "link" ? t.copied : t.copyLink}</button>
                  <a className="pl-btn" href={asset(cur.src)} download={cur.src.split("/").pop()}>{t.download}</a>
                </div>
                <div className="mt-auto flex justify-between pt-2 text-sm">
                  <button type="button" disabled={curIdx <= 0} onClick={() => setOpen(keyOf(list[curIdx - 1]!))} className="font-semibold text-ink disabled:opacity-30">← {t.prev}</button>
                  <button type="button" disabled={curIdx < 0 || curIdx >= list.length - 1} onClick={() => setOpen(keyOf(list[curIdx + 1]!))} className="font-semibold text-ink disabled:opacity-30">{t.next} →</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
