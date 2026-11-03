"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { asset } from "@/lib/i18n/config";
import {
  PALETTES,
  type Assets,
  type Fmt,
  type Lang,
  type PromoGame,
  type Scene,
  type SceneText,
} from "./engine";
import { TEMPLATES, captionFor, type Template } from "./templates";

export interface GameSrc {
  slug: string;
  emoji: string;
  name: Record<Lang, string>;
  hook: Record<Lang, string>;
  url: string;
  shot: string;
  icon: string;
}

interface Settings {
  game: string;
  palette: string;
  dur: number;
  showMo: boolean;
  /** text edits; undefined = template default */
  text?: Partial<SceneText>;
}

const POSES = ["idea", "yeyy", "wow", "run", "thank-you", "yes", "ok", "pose-12", "pose-20"];
const DEFAULT_URL = "play.babymo.id";

function loadImg(src: string): Promise<HTMLImageElement> {
  return new Promise((res) => {
    const im = new Image();
    im.decoding = "async";
    im.onload = () => res(im);
    im.onerror = () => res(im);
    im.src = src;
  });
}

function useStudioAssets(games: GameSrc[]) {
  const [state, setState] = useState<{ assets: Assets; imgs: Record<string, { shot: HTMLImageElement; icon: HTMLImageElement }>; font: string } | null>(null);
  useEffect(() => {
    let alive = true;
    (async () => {
      const fam = getComputedStyle(document.documentElement).getPropertyValue("--font-rounded").trim() || "system-ui";
      const family = `${fam}, ui-rounded, system-ui, sans-serif`;
      try {
        await Promise.all([document.fonts.load(`800 40px ${fam}`), document.fonts.load(`700 40px ${fam}`), document.fonts.load(`600 40px ${fam}`)]);
      } catch {}
      const [logo, ...moImgs] = await Promise.all([
        loadImg(asset("/assets/logo-512.webp")),
        ...POSES.map((p) => loadImg(asset(`/baby-mo-poses/baby-mo-${p}.png`))),
      ]);
      const mo: Record<string, HTMLImageElement> = {};
      POSES.forEach((p, i) => (mo[p] = moImgs[i]!));
      const imgs: Record<string, { shot: HTMLImageElement; icon: HTMLImageElement }> = {};
      await Promise.all(
        games.map(async (g) => {
          const [shot, icon] = await Promise.all([loadImg(asset(g.shot)), loadImg(asset(g.icon))]);
          imgs[g.slug] = { shot, icon };
        }),
      );
      if (alive) setState({ assets: { logo: logo!, mo }, imgs, font: family });
    })();
    return () => {
      alive = false;
    };
  }, [games]);
  return state;
}

function pickMime() {
  const opts = [
    "video/mp4;codecs=avc1.42E01E",
    "video/mp4;codecs=avc1",
    "video/mp4",
    "video/webm;codecs=vp9",
    "video/webm;codecs=vp8",
    "video/webm",
  ];
  if (typeof MediaRecorder === "undefined") return null;
  return opts.find((m) => MediaRecorder.isTypeSupported(m)) ?? null;
}

function download(blob: Blob, name: string) {
  const a = document.createElement("a");
  a.href = URL.createObjectURL(blob);
  a.download = name;
  document.body.appendChild(a);
  a.click();
  a.remove();
  setTimeout(() => URL.revokeObjectURL(a.href), 4000);
}

export function PromoStudio({ locale, games: gameSrc }: { locale: Lang; games: GameSrc[] }) {
  const [lang, setLang] = useState<Lang>(locale);
  const [fmt, setFmt] = useState<Fmt>("story");
  const [filter, setFilter] = useState<"all" | "single" | "multi">("all");
  const [openId, setOpenId] = useState<string | null>(null);
  const [settings, setSettings] = useState<Record<string, Settings>>({});
  const loaded = useStudioAssets(gameSrc);

  const T = (id: string, en: string) => (locale === "id" ? id : en);

  const gamesFor = useCallback(
    (l: Lang): PromoGame[] =>
      loaded
        ? gameSrc.map((g) => ({
            slug: g.slug,
            emoji: g.emoji,
            name: g.name[l],
            hook: g.hook[l],
            url: g.url,
            shot: loaded.imgs[g.slug]!.shot,
            icon: loaded.imgs[g.slug]!.icon,
          }))
        : [],
    [loaded, gameSrc],
  );
  const games = useMemo(() => gamesFor(lang), [gamesFor, lang]);

  const settingsFor = useCallback(
    (tpl: Template, i: number): Settings =>
      settings[tpl.id] ?? {
        game: gameSrc[(i * 3) % gameSrc.length]!.slug,
        palette: tpl.palette,
        dur: tpl.dur,
        showMo: true,
      },
    [settings, gameSrc],
  );

  const sceneFor = useCallback(
    (tpl: Template, st: Settings, ctx: CanvasRenderingContext2D, t: number, f: Fmt): Scene | null => {
      if (!loaded || !games.length) return null;
      const game = games.find((g) => g.slug === st.game) ?? games[0]!;
      const def = tpl.copy(lang, game, games);
      const text: SceneText = {
        headline: st.text?.headline ?? def.headline,
        sub: st.text?.sub ?? def.sub,
        cta: st.text?.cta ?? def.cta,
        url: st.text?.url ?? DEFAULT_URL,
      };
      return {
        ctx,
        W: 1080,
        H: f === "story" ? 1920 : 1080,
        t,
        d: st.dur,
        p: Math.min(1, t / st.dur),
        fmt: f,
        lang,
        game,
        games,
        pal: PALETTES.find((p) => p.key === st.palette) ?? PALETTES[0]!,
        text,
        font: loaded.font,
        showMo: st.showMo,
        a: loaded.assets,
      };
    },
    [loaded, games, lang],
  );

  const drawTo = useCallback(
    (canvas: HTMLCanvasElement, tpl: Template, st: Settings, t: number, f: Fmt) => {
      const ctx = canvas.getContext("2d");
      if (!ctx) return;
      const sc = canvas.width / 1080;
      ctx.setTransform(sc, 0, 0, sc, 0, 0);
      const s = sceneFor(tpl, st, ctx, t, f);
      if (!s) return;
      ctx.clearRect(0, 0, 1080, s.H);
      ctx.save();
      tpl.draw(s);
      ctx.restore();
    },
    [sceneFor],
  );

  const list = TEMPLATES.map((t, i) => ({ t, i })).filter(({ t }) => filter === "all" || t.kind === filter);
  const open = openId ? TEMPLATES.findIndex((t) => t.id === openId) : -1;

  return (
    <div>
      {/* Toolbar */}
      <div className="sticky top-[60px] z-30 -mx-5 mb-6 flex flex-wrap items-center gap-2 border-b border-hairline bg-paper/90 px-5 py-3 backdrop-blur sm:-mx-8 sm:px-8">
        <Seg
          value={fmt}
          onChange={(v) => setFmt(v as Fmt)}
          options={[
            ["story", "9:16 Reels / Story / Shorts"],
            ["square", "1:1 Feed"],
          ]}
        />
        <Seg
          value={lang}
          onChange={(v) => setLang(v as Lang)}
          options={[
            ["id", T("Teks: Indonesia", "Text: Indonesian")],
            ["en", T("Teks: Inggris", "Text: English")],
          ]}
        />
        <Seg
          value={filter}
          onChange={(v) => setFilter(v as typeof filter)}
          options={[
            ["all", T("Semua", "All")],
            ["single", T("Satu game", "One game")],
            ["multi", T("Banyak game", "Many games")],
          ]}
        />
      </div>

      {!loaded && <p className="py-20 text-center text-whisper">{T("Memuat gambar game…", "Loading game art…")}</p>}

      {loaded && (
        <ul className={`grid gap-4 ${fmt === "story" ? "grid-cols-2 sm:grid-cols-3 lg:grid-cols-5" : "grid-cols-2 sm:grid-cols-3 lg:grid-cols-4"}`}>
          {list.map(({ t, i }) => (
            <li key={t.id}>
              <button
                type="button"
                onClick={() => setOpenId(t.id)}
                className="group block w-full overflow-hidden rounded-3xl border border-hairline bg-paper text-left shadow-sm transition hover:shadow-md active:scale-[0.98]"
              >
                <Thumb fmt={fmt} draw={(c, time) => drawTo(c, t, settingsFor(t, i), time % settingsFor(t, i).dur, fmt)} />
                <div className="p-3">
                  <p className="text-[11px] font-bold uppercase tracking-wide text-whisper">
                    #{i + 1} · {settingsFor(t, i).dur}s · {t.kind === "single" ? T("1 game", "1 game") : T("multi", "multi")}
                  </p>
                  <p className="mt-0.5 font-serif text-base font-semibold leading-tight text-ink">
                    {t.emoji} {t.name[locale]}
                  </p>
                  <p className="mt-1 line-clamp-2 text-xs leading-snug text-whisper">{t.desc[locale]}</p>
                </div>
              </button>
            </li>
          ))}
        </ul>
      )}

      {open >= 0 && loaded && (
        <Editor
          key={TEMPLATES[open]!.id + fmt + lang}
          tpl={TEMPLATES[open]!}
          index={open}
          fmt={fmt}
          lang={lang}
          uiLang={locale}
          games={games}
          gameSrc={gameSrc}
          st={settingsFor(TEMPLATES[open]!, open)}
          setSt={(s) => setSettings((m) => ({ ...m, [TEMPLATES[open]!.id]: s }))}
          drawTo={drawTo}
          onClose={() => setOpenId(null)}
          onNav={(dir) => setOpenId(TEMPLATES[(open + dir + TEMPLATES.length) % TEMPLATES.length]!.id)}
        />
      )}
    </div>
  );
}

function Seg({ value, onChange, options }: { value: string; onChange: (v: string) => void; options: [string, string][] }) {
  return (
    <div className="inline-flex rounded-full border border-hairline bg-paper-2 p-0.5 text-xs font-semibold">
      {options.map(([v, label]) => (
        <button
          key={v}
          type="button"
          onClick={() => onChange(v)}
          className={`rounded-full px-3 py-1.5 transition ${value === v ? "bg-ink text-paper" : "text-whisper hover:text-ink"}`}
        >
          {label}
        </button>
      ))}
    </div>
  );
}

/** Small live preview that only animates while on screen */
function Thumb({ fmt, draw }: { fmt: Fmt; draw: (c: HTMLCanvasElement, t: number) => void }) {
  const ref = useRef<HTMLCanvasElement>(null);
  const drawRef = useRef(draw);
  drawRef.current = draw;
  useEffect(() => {
    const c = ref.current;
    if (!c) return;
    let raf = 0, visible = false, last = 0;
    const t0 = performance.now() - Math.random() * 3000;
    const loop = (now: number) => {
      raf = requestAnimationFrame(loop);
      if (!visible || now - last < 40) return;
      last = now;
      drawRef.current(c, (now - t0) / 1000);
    };
    const io = new IntersectionObserver(([e]) => (visible = !!e?.isIntersecting), { rootMargin: "100px" });
    io.observe(c);
    drawRef.current(c, 2.5);
    raf = requestAnimationFrame(loop);
    return () => {
      cancelAnimationFrame(raf);
      io.disconnect();
    };
  }, [fmt]);
  return (
    <canvas
      ref={ref}
      width={270}
      height={fmt === "story" ? 480 : 270}
      className={`block w-full bg-paper-2 ${fmt === "story" ? "aspect-[9/16]" : "aspect-square"}`}
    />
  );
}

function Editor({
  tpl,
  index,
  fmt,
  lang,
  uiLang,
  games,
  gameSrc,
  st,
  setSt,
  drawTo,
  onClose,
  onNav,
}: {
  tpl: Template;
  index: number;
  fmt: Fmt;
  lang: Lang;
  uiLang: Lang;
  games: PromoGame[];
  gameSrc: GameSrc[];
  st: Settings;
  setSt: (s: Settings) => void;
  drawTo: (c: HTMLCanvasElement, tpl: Template, st: Settings, t: number, f: Fmt) => void;
  onClose: () => void;
  onNav: (dir: number) => void;
}) {
  const T = (id: string, en: string) => (uiLang === "id" ? id : en);
  const ref = useRef<HTMLCanvasElement>(null);
  const [playing, setPlaying] = useState(true);
  const [time, setTime] = useState(0);
  const [busy, setBusy] = useState<null | number>(null);
  const [msg, setMsg] = useState("");
  const [safe, setSafe] = useState(false);
  const timeRef = useRef(0);
  const stRef = useRef(st);
  stRef.current = st;

  const game = games.find((g) => g.slug === st.game) ?? games[0]!;
  const def = tpl.copy(lang, game, games);
  const txt: SceneText = {
    headline: st.text?.headline ?? def.headline,
    sub: st.text?.sub ?? def.sub,
    cta: st.text?.cta ?? def.cta,
    url: st.text?.url ?? DEFAULT_URL,
  };
  const edit = (k: keyof SceneText, v: string) => setSt({ ...st, text: { ...st.text, [k]: v } });

  useEffect(() => {
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", onKey);
    };
  }, [onClose]);

  useEffect(() => {
    let raf = 0, last = performance.now();
    const loop = (now: number) => {
      raf = requestAnimationFrame(loop);
      const dt = (now - last) / 1000;
      last = now;
      if (playing && busy === null) {
        timeRef.current = (timeRef.current + dt) % stRef.current.dur;
        setTime(timeRef.current);
      }
      if (ref.current) drawTo(ref.current, tpl, stRef.current, timeRef.current, fmt);
    };
    raf = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(raf);
  }, [playing, busy, drawTo, tpl, fmt]);

  const H = fmt === "story" ? 1920 : 1080;
  const base = `babymo-${String(index + 1).padStart(2, "0")}-${tpl.id}${tpl.kind === "single" ? `-${st.game}` : ""}-${fmt === "story" ? "9x16" : "1x1"}-${lang}`;

  const exportVideo = async () => {
    const mime = pickMime();
    if (!mime) {
      setMsg(T("Browser ini belum bisa merekam video. Coba Chrome/Edge di laptop.", "This browser can't record video. Try Chrome or Edge on a computer."));
      return;
    }
    setMsg("");
    setBusy(0);
    const c = document.createElement("canvas");
    c.width = 1080;
    c.height = H;
    drawTo(c, tpl, st, 0, fmt);
    const stream = c.captureStream(30);
    const rec = new MediaRecorder(stream, { mimeType: mime, videoBitsPerSecond: 10_000_000 });
    const chunks: Blob[] = [];
    rec.ondataavailable = (e) => e.data.size && chunks.push(e.data);
    const done = new Promise<void>((r) => (rec.onstop = () => r()));
    rec.start(250);
    const start = performance.now();
    await new Promise<void>((resolve) => {
      const tick = () => {
        const t = (performance.now() - start) / 1000;
        drawTo(c, tpl, st, Math.min(t, st.dur - 0.001), fmt);
        setBusy(Math.min(1, t / st.dur));
        if (t >= st.dur + 0.15) resolve();
        else requestAnimationFrame(tick);
      };
      requestAnimationFrame(tick);
    });
    rec.stop();
    await done;
    stream.getTracks().forEach((tr) => tr.stop());
    const ext = mime.startsWith("video/mp4") ? "mp4" : "webm";
    download(new Blob(chunks, { type: mime.split(";")[0] }), `${base}.${ext}`);
    setBusy(null);
    setMsg(
      ext === "mp4"
        ? T("✅ Video MP4 terunduh.", "✅ MP4 video downloaded.")
        : T("✅ Video WebM terunduh. Kalau aplikasi menolak WebM, ubah ke MP4 dulu (mis. lewat CapCut).", "✅ WebM video downloaded. If an app won't take WebM, convert it to MP4 first (e.g. in CapCut)."),
    );
  };

  const exportCover = () => {
    const c = document.createElement("canvas");
    c.width = 1080;
    c.height = H;
    drawTo(c, tpl, st, st.dur * 0.6, fmt);
    c.toBlob((b) => b && download(b, `${base}-cover.png`), "image/png");
  };

  const caption = captionFor(tpl, game, lang, txt.url);
  const copyCaption = async () => {
    try {
      await navigator.clipboard.writeText(caption);
      setMsg(T("✅ Caption tersalin.", "✅ Caption copied."));
    } catch {
      setMsg(caption);
    }
  };

  const field = "w-full rounded-xl border border-hairline bg-paper px-3 py-2 text-sm text-ink focus:border-sage focus:outline-none";

  return (
    <div className="fixed inset-0 z-[80] flex flex-col bg-paper md:flex-row" role="dialog" aria-modal="true" aria-label={tpl.name[uiLang]}>
      {/* Preview */}
      <div className="relative flex shrink-0 flex-col items-center justify-center gap-3 bg-paper-2 p-3 md:flex-1 md:p-6">
        <div className="flex w-full items-center justify-between gap-2 md:absolute md:left-4 md:right-4 md:top-4 md:w-auto">
          <button type="button" onClick={onClose} className="grid h-10 w-10 place-items-center rounded-full bg-paper text-lg font-bold shadow-sm" aria-label={T("Tutup", "Close")}>
            ✕
          </button>
          <p className="truncate font-serif text-base font-semibold text-ink">
            #{index + 1} {tpl.emoji} {tpl.name[uiLang]}
          </p>
          <div className="flex gap-1">
            <button type="button" onClick={() => onNav(-1)} className="grid h-10 w-10 place-items-center rounded-full bg-paper shadow-sm" aria-label={T("Sebelumnya", "Previous")}>
              ‹
            </button>
            <button type="button" onClick={() => onNav(1)} className="grid h-10 w-10 place-items-center rounded-full bg-paper shadow-sm" aria-label={T("Berikutnya", "Next")}>
              ›
            </button>
          </div>
        </div>
        <div className="relative">
          <canvas
            ref={ref}
            width={540}
            height={fmt === "story" ? 960 : 540}
            className={`rounded-2xl bg-paper shadow-xl ${fmt === "story" ? "h-[46vh] md:h-[78vh]" : "h-[40vh] md:h-[60vh]"} aspect-auto w-auto`}
            style={{ aspectRatio: fmt === "story" ? "9 / 16" : "1 / 1" }}
        />
          {safe && fmt === "story" && (
            <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden rounded-2xl">
              <div className="absolute inset-x-0 top-0 flex h-[11%] items-center justify-center bg-berry/25 text-[10px] font-bold text-ink">
                {T("Area profil & judul aplikasi", "App profile & title area")}
              </div>
              <div className="absolute inset-x-0 bottom-0 flex h-[17%] items-center justify-center bg-berry/25 text-[10px] font-bold text-ink">
                {T("Area caption & tombol aplikasi", "App caption & buttons area")}
              </div>
              <div className="absolute bottom-[17%] right-0 top-[45%] w-[14%] bg-berry/20" />
            </div>
          )}
        </div>
        <div className="flex w-full max-w-md items-center gap-2">
          <button type="button" onClick={() => setPlaying(!playing)} className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-ink text-paper" aria-label={playing ? "Pause" : "Play"}>
            {playing ? "❚❚" : "▶"}
          </button>
          <input
            type="range"
            min={0}
            max={st.dur}
            step={0.01}
            value={time}
            onChange={(e) => {
              timeRef.current = +e.target.value;
              setTime(+e.target.value);
              setPlaying(false);
            }}
            className="flex-1 accent-[var(--color-sage)]"
            aria-label={T("Waktu", "Time")}
          />
          <span className="w-12 text-right text-xs tabular-nums text-whisper">{time.toFixed(1)}s</span>
          {fmt === "story" && (
            <button
              type="button"
              onClick={() => setSafe(!safe)}
              aria-pressed={safe}
              className={`shrink-0 rounded-full px-3 py-2 text-xs font-bold ${safe ? "bg-berry text-white" : "bg-paper text-ink shadow-sm"}`}
              title={T("Tampilkan area yang tertutup tombol Reels/TikTok/Shorts", "Show the areas covered by Reels/TikTok/Shorts buttons")}
            >
              {T("Area aman", "Safe zone")}
            </button>
          )}
        </div>
      </div>

      {/* Controls */}
      <div className="flex-1 overflow-y-auto border-t border-hairline p-4 md:max-w-md md:flex-none md:border-l md:border-t-0 md:p-6">
        <p className="text-sm text-whisper">{tpl.desc[uiLang]}</p>

        <div className="mt-4 grid gap-3">
          <label className="grid gap-1 text-xs font-semibold text-whisper">
            {tpl.kind === "single" ? T("Game", "Game") : T("Game pertama", "First game")}
            <select value={st.game} onChange={(e) => setSt({ ...st, game: e.target.value, text: undefined })} className={field}>
              {gameSrc.map((g) => (
                <option key={g.slug} value={g.slug}>
                  {g.emoji} {g.name[lang]}
                </option>
              ))}
            </select>
          </label>
          <label className="grid gap-1 text-xs font-semibold text-whisper">
            {T("Judul", "Headline")}
            <textarea rows={2} value={txt.headline} onChange={(e) => edit("headline", e.target.value)} className={field} />
          </label>
          <label className="grid gap-1 text-xs font-semibold text-whisper">
            {T("Teks kedua (satu baris = satu poin untuk Ceklis & Tips)", "Second text (one line = one point for Checklist & Tips)")}
            <textarea rows={3} value={txt.sub} onChange={(e) => edit("sub", e.target.value)} className={field} />
          </label>
          <div className="grid grid-cols-2 gap-3">
            <label className="grid gap-1 text-xs font-semibold text-whisper">
              {T("Ajakan (CTA)", "Call to action")}
              <input value={txt.cta} onChange={(e) => edit("cta", e.target.value)} className={field} />
            </label>
            <label className="grid gap-1 text-xs font-semibold text-whisper">
              {T("Alamat", "Link")}
              <input value={txt.url} onChange={(e) => edit("url", e.target.value)} className={field} />
            </label>
          </div>

          <div className="grid gap-1 text-xs font-semibold text-whisper">
            {T("Warna", "Colours")}
            <div className="flex flex-wrap gap-2">
              {PALETTES.map((p) => (
                <button
                  key={p.key}
                  type="button"
                  onClick={() => setSt({ ...st, palette: p.key })}
                  aria-label={p.name}
                  title={p.name}
                  className={`h-10 w-10 rounded-full border-2 ${st.palette === p.key ? "border-ink" : "border-transparent"}`}
                  style={{ background: `linear-gradient(135deg, ${p.bg[0]}, ${p.bg[2]})`, boxShadow: `inset 0 0 0 6px ${p.accent}` }}
                />
              ))}
            </div>
          </div>

          <label className="grid gap-1 text-xs font-semibold text-whisper">
            {T("Durasi", "Length")}: {st.dur}s
            <input type="range" min={5} max={15} step={1} value={st.dur} onChange={(e) => setSt({ ...st, dur: +e.target.value })} className="accent-[var(--color-sage)]" />
          </label>
          <label className="flex items-center gap-2 text-sm font-semibold text-ink">
            <input type="checkbox" checked={st.showMo} onChange={(e) => setSt({ ...st, showMo: e.target.checked })} className="h-5 w-5 accent-[var(--color-sage)]" />
            {T("Tampilkan Baby Mo", "Show Baby Mo")}
          </label>
          <button type="button" onClick={() => setSt({ game: st.game, palette: tpl.palette, dur: tpl.dur, showMo: true })} className="justify-self-start text-xs font-semibold text-sage-deep hover:underline">
            ↺ {T("Kembalikan teks & warna awal", "Reset text & colours")}
          </button>
        </div>

        <div className="mt-6 grid gap-2">
          <button
            type="button"
            disabled={busy !== null}
            onClick={exportVideo}
            className="relative overflow-hidden rounded-full bg-gradient-to-r from-brave to-sky px-6 py-3.5 text-base font-bold text-white shadow-lg disabled:opacity-90"
          >
            {busy !== null && <span className="absolute inset-y-0 left-0 bg-white/25" style={{ width: `${Math.round(busy * 100)}%` }} />}
            <span className="relative">
              {busy !== null ? `${T("Merekam…", "Recording…")} ${Math.round(busy * 100)}%` : `⬇ ${T("Unduh video", "Download video")} (1080×${H})`}
            </span>
          </button>
          <div className="grid grid-cols-2 gap-2">
            <button type="button" onClick={exportCover} className="rounded-full border border-hairline bg-paper-2 px-4 py-3 text-sm font-bold text-ink">
              🖼️ {T("Unduh cover PNG", "Cover PNG")}
            </button>
            <button type="button" onClick={copyCaption} className="rounded-full border border-hairline bg-paper-2 px-4 py-3 text-sm font-bold text-ink">
              📋 {T("Salin caption", "Copy caption")}
            </button>
          </div>
          {busy !== null && (
            <p className="text-xs text-whisper">
              {T("Video direkam langsung — biarkan tab ini tetap terbuka sampai selesai.", "The video records in real time — keep this tab open until it finishes.")}
            </p>
          )}
          {msg && <p className="whitespace-pre-wrap rounded-xl bg-sage-soft p-3 text-xs text-ink">{msg}</p>}
          <details className="rounded-xl border border-hairline p-3 text-xs text-whisper">
            <summary className="cursor-pointer font-semibold text-ink">{T("Lihat caption", "Show caption")}</summary>
            <p className="mt-2 whitespace-pre-wrap">{caption}</p>
          </details>
        </div>
      </div>
    </div>
  );
}
