"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import type { Locale } from "@/lib/i18n/config";
import { t, type Bilingual } from "@/lib/games/poses";
import {
  BRAIN_KIND_INFO,
  BRAIN_LEVELS,
  BRAIN_STORE_KEY,
  BRAIN_WORLDS,
  MEMORY_POSES,
  type BrainLevel,
} from "@/lib/games/brain";
import { SPOT_ODD_PUZZLES } from "@/lib/games/spot-odd";
import { SPOT_DIFF_PUZZLES, isAsymmetric } from "@/lib/games/spot-difference";
import { EMOTIONS } from "@/lib/games/emotions";
import { PoseImg } from "@/components/games/PoseImg";

/* ───────────────────────── helpers ───────────────────────── */

type Progress = { stars: Record<number, number> };
const HEARTS = 3;
const MAX_STARS = BRAIN_LEVELS.length * 3;

function L(locale: Locale, id: string, en: string) {
  return locale === "id" ? id : en;
}
function shuffle<T>(a: T[]): T[] {
  const b = a.slice();
  for (let i = b.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [b[i], b[j]] = [b[j]!, b[i]!];
  }
  return b;
}
function fmt(s: number) {
  const m = Math.floor(s / 60);
  return `${m}:${String(Math.floor(s % 60)).padStart(2, "0")}`;
}
function loadProgress(): Progress {
  try {
    const raw = localStorage.getItem(BRAIN_STORE_KEY);
    const p = raw ? (JSON.parse(raw) as Progress) : null;
    if (p && p.stars && typeof p.stars === "object") return p;
  } catch {}
  return { stars: {} };
}
function saveProgress(p: Progress) {
  try {
    localStorage.setItem(BRAIN_STORE_KEY, JSON.stringify(p));
  } catch {}
}
function rankFor(stars: number): Bilingual {
  if (stars >= 60) return { id: "Jenius Cilik 🏆", en: "Little Genius 🏆" };
  if (stars >= 36) return { id: "Pemikir Hebat 🧠", en: "Great Thinker 🧠" };
  if (stars >= 15) return { id: "Penjelajah Pintar 🧭", en: "Smart Explorer 🧭" };
  return { id: "Pemula Cerdas 🌱", en: "Bright Beginner 🌱" };
}

/* Tiny sound + haptics (no files) */
let actx: AudioContext | null = null;
function beep(kind: "ok" | "bad" | "win" | "tick" | "lose", muted: boolean) {
  if (typeof window === "undefined") return;
  try {
    if (kind === "bad" || kind === "lose") navigator.vibrate?.(kind === "lose" ? [60, 40, 60] : 40);
    else if (kind === "ok") navigator.vibrate?.(12);
  } catch {}
  if (muted) return;
  try {
    const AC = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
    if (!AC) return;
    actx = actx || new AC();
    const seq: Record<string, [number, number][]> = {
      ok: [[660, 0], [990, 0.07]],
      bad: [[220, 0], [180, 0.08]],
      tick: [[880, 0]],
      win: [[523, 0], [659, 0.1], [784, 0.2], [1047, 0.3]],
      lose: [[392, 0], [330, 0.15], [262, 0.3]],
    };
    const now = actx.currentTime;
    for (const [f, at] of seq[kind]!) {
      const o = actx.createOscillator();
      const g = actx.createGain();
      o.type = kind === "bad" || kind === "lose" ? "triangle" : "sine";
      o.frequency.value = f;
      g.gain.setValueAtTime(0.0001, now + at);
      g.gain.exponentialRampToValueAtTime(0.18, now + at + 0.02);
      g.gain.exponentialRampToValueAtTime(0.0001, now + at + 0.18);
      o.connect(g).connect(actx.destination);
      o.start(now + at);
      o.stop(now + at + 0.2);
    }
  } catch {}
}

/* ───────────────────────── games ───────────────────────── */

interface GameProps {
  level: BrainLevel;
  locale: Locale;
  muted: boolean;
  onMiss: () => void;
  onDone: () => void;
  /** progress text for the HUD, e.g. "2/5" */
  setStep: (s: string) => void;
}

function OddGame({ level, locale, muted, onMiss, onDone, setStep }: GameProps) {
  const puzzle = SPOT_ODD_PUZZLES[(level.set ?? 0) % SPOT_ODD_PUZZLES.length]!;
  const cols = level.cols ?? 4;
  const total = cols * (level.rows ?? 4);
  const [odd, setOdd] = useState(-1);
  const [wrong, setWrong] = useState<number | null>(null);
  const [found, setFound] = useState(false);
  useEffect(() => {
    setOdd(Math.floor(Math.random() * total));
    setStep("");
  }, [total, setStep]);
  return (
    <div>
      <p className="mb-3 text-center text-sm font-semibold text-whisper">
        {L(locale, "Temukan:", "Find:")}{" "}
        <span className="inline-flex items-center gap-1 align-middle text-ink">
          <span className="inline-block h-8 w-8 rounded-lg bg-sun-soft p-0.5">
            <PoseImg file={puzzle.oddFile} alt="" className="h-full w-full object-contain" priority />
          </span>
          {L(locale, "yang beda", "the odd one")}
        </span>
      </p>
      <div
        className="grid gap-1 rounded-3xl bg-paper-2 p-2 sm:gap-1.5 sm:p-3"
        style={{ gridTemplateColumns: `repeat(${cols}, minmax(0, 1fr))` }}
      >
        {Array.from({ length: total }, (_, i) => {
          const isOdd = i === odd;
          return (
            <button
              key={i}
              type="button"
              aria-label={isOdd ? L(locale, "Baby Mo yang beda", "The odd Baby Mo") : "Baby Mo"}
              onClick={() => {
                if (found || odd < 0) return;
                if (isOdd) {
                  setFound(true);
                  beep("ok", muted);
                  setTimeout(onDone, 650);
                } else {
                  setWrong(i);
                  beep("bad", muted);
                  onMiss();
                  setTimeout(() => setWrong((w) => (w === i ? null : w)), 450);
                }
              }}
              className={`aspect-square rounded-xl p-0.5 transition active:scale-90 ${
                wrong === i ? "bj-shake bg-berry-soft" : ""
              } ${found && isOdd ? "bj-pop bg-sun-soft ring-4 ring-sun" : ""} ${found && !isOdd ? "opacity-40" : ""}`}
            >
              {odd >= 0 && (
                <PoseImg
                  file={isOdd ? puzzle.oddFile : puzzle.baseFile}
                  alt=""
                  className="pointer-events-none h-full w-full object-contain"
                  priority
                />
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
}

interface Cell {
  file: string;
  flip: boolean;
}
function DiffGame({ level, locale, muted, onMiss, onDone, setStep }: GameProps) {
  const puzzle = SPOT_DIFF_PUZZLES[(level.set ?? 0) % SPOT_DIFF_PUZZLES.length]!;
  const cols = level.cols ?? 3;
  const total = cols * (level.rows ?? 3);
  const want = Math.min(level.diffs ?? 3, total);
  const [layout, setLayout] = useState<{ top: Cell[]; bottom: Cell[]; diffs: number[] } | null>(null);
  const [found, setFound] = useState<number[]>([]);
  const [wrong, setWrong] = useState<number | null>(null);

  useEffect(() => {
    const pool = puzzle.pool;
    const top: Cell[] = Array.from({ length: total }, () => ({
      file: pool[Math.floor(Math.random() * pool.length)]!,
      flip: false,
    }));
    const diffs = shuffle(Array.from({ length: total }, (_, i) => i)).slice(0, want);
    const bottom = top.map((c) => ({ ...c }));
    for (const d of diffs) {
      const base = top[d]!;
      if (Math.random() < 0.3 && isAsymmetric(base.file)) bottom[d] = { file: base.file, flip: true };
      else {
        const others = pool.filter((f) => f !== base.file);
        bottom[d] = { file: others[Math.floor(Math.random() * others.length)]!, flip: false };
      }
    }
    setLayout({ top, bottom, diffs });
    setFound([]);
  }, [puzzle, total, want]);

  useEffect(() => {
    setStep(`${found.length}/${want}`);
  }, [found.length, want, setStep]);

  const tap = (i: number) => {
    if (!layout || found.includes(i)) return;
    if (layout.diffs.includes(i)) {
      const nf = [...found, i];
      setFound(nf);
      beep("ok", muted);
      if (nf.length === want) setTimeout(onDone, 650);
    } else {
      setWrong(i);
      beep("bad", muted);
      onMiss();
      setTimeout(() => setWrong((w) => (w === i ? null : w)), 450);
    }
  };

  // Both panels must fit on a phone screen without scrolling: cap each
  // panel's width by half the available height × the grid's aspect ratio.
  const rows = level.rows ?? 3;
  const fit = { width: `min(100%, calc((100dvh - 210px) / 2 * ${cols / rows}))` };
  const panel = (cells: Cell[], label: string, active: boolean) => (
    <div className="mx-auto" style={fit}>
      <p className="mb-1 text-[11px] font-bold uppercase tracking-wide text-whisper">{label}</p>
      <div
        className={`grid gap-1 rounded-2xl p-1.5 ${active ? "bg-sun-soft/70" : "bg-paper-2"}`}
        style={{ gridTemplateColumns: `repeat(${cols}, minmax(0, 1fr))` }}
      >
        {cells.map((c, i) => {
          const hit = found.includes(i);
          return (
            <button
              key={i}
              type="button"
              aria-label={`${label} ${i + 1}`}
              onClick={() => tap(i)}
              className={`relative aspect-square rounded-lg bg-paper p-0.5 transition active:scale-90 ${
                wrong === i ? "bj-shake bg-berry-soft" : ""
              }`}
            >
              <PoseImg file={c.file} flip={c.flip} alt="" className="pointer-events-none h-full w-full object-contain" priority />
              {hit && <span className="bj-pop pointer-events-none absolute inset-0 rounded-lg ring-4 ring-brave" />}
            </button>
          );
        })}
      </div>
    </div>
  );

  if (!layout) return <div className="h-64" />;
  return (
    <div className="mx-auto grid max-w-md gap-2">
      {panel(layout.top, L(locale, "Gambar A", "Picture A"), false)}
      {panel(layout.bottom, L(locale, "Gambar B — ketuk yang beda", "Picture B — tap what's different"), true)}
    </div>
  );
}

function FeelGame({ level, locale, muted, onMiss, onDone, setStep }: GameProps) {
  const rounds = level.rounds ?? 3;
  const qTime = level.qTime ?? 0;
  const [qs, setQs] = useState<{ answer: string; pose: string; options: string[] }[]>([]);
  const [i, setI] = useState(0);
  const [picked, setPicked] = useState<string | null>(null);
  const [left, setLeft] = useState(qTime);
  const lock = useRef(false);

  useEffect(() => {
    const chosen = shuffle(EMOTIONS).slice(0, rounds);
    setQs(
      chosen.map((e) => ({
        answer: e.key,
        pose: e.poseFile,
        options: shuffle([e.key, ...shuffle(EMOTIONS.filter((x) => x.key !== e.key)).slice(0, 3).map((x) => x.key)]),
      })),
    );
  }, [rounds]);

  useEffect(() => {
    setStep(`${Math.min(i + 1, rounds)}/${rounds}`);
  }, [i, rounds, setStep]);

  const advance = useCallback(() => {
    setTimeout(() => {
      lock.current = false;
      setPicked(null);
      setLeft(qTime);
      setI((x) => {
        if (x + 1 >= rounds) {
          onDone();
          return x;
        }
        return x + 1;
      });
    }, 750);
  }, [qTime, rounds, onDone]);

  const choose = useCallback(
    (k: string) => {
      const q = qs[i];
      if (!q || lock.current) return;
      lock.current = true;
      setPicked(k);
      if (k === q.answer) beep("ok", muted);
      else {
        beep("bad", muted);
        onMiss();
      }
      advance();
    },
    [qs, i, muted, onMiss, advance],
  );

  useEffect(() => {
    if (!qTime || !qs.length || picked) return;
    if (left <= 0) {
      choose("__timeout");
      return;
    }
    const id = setTimeout(() => setLeft((s) => s - 1), 1000);
    return () => clearTimeout(id);
  }, [left, qTime, qs.length, picked, choose]);

  const q = qs[i];
  if (!q) return <div className="h-64" />;
  return (
    <div className="mx-auto max-w-md">
      <div key={i} className="bj-pop relative mx-auto mb-4 h-44 w-44 rounded-[2rem] bg-gradient-to-br from-sun-soft to-berry-soft p-3 sm:h-52 sm:w-52">
        <PoseImg file={q.pose} alt={L(locale, "Baby Mo", "Baby Mo")} className="h-full w-full object-contain" priority />
        {qTime > 0 && (
          <span className={`absolute -right-2 -top-2 grid h-10 w-10 place-items-center rounded-full text-sm font-bold text-paper shadow ${left <= 3 ? "bj-pulse bg-berry" : "bg-grape"}`}>
            {left}
          </span>
        )}
      </div>
      <p className="mb-3 text-center font-serif text-lg font-semibold text-ink">
        {L(locale, "Baby Mo sedang merasa…", "Baby Mo is feeling…")}
      </p>
      <div className="grid grid-cols-2 gap-2.5">
        {q.options.map((k) => {
          const e = EMOTIONS.find((x) => x.key === k)!;
          const right = picked && k === q.answer;
          const bad = picked === k && k !== q.answer;
          return (
            <button
              key={k}
              type="button"
              onClick={() => choose(k)}
              className={`flex min-h-14 items-center gap-2 rounded-2xl border-2 px-3 py-3 text-left text-base font-semibold transition active:scale-95 ${
                right
                  ? "bj-pop border-brave bg-brave-soft text-ink"
                  : bad
                    ? "bj-shake border-berry bg-berry-soft text-ink"
                    : "border-hairline bg-paper text-ink hover:border-grape"
              }`}
            >
              <span className="text-2xl">{e.emoji}</span>
              {t(e.label, locale)}
            </button>
          );
        })}
      </div>
    </div>
  );
}

function MemoryGame({ level, locale, muted, onMiss, onDone, setStep }: GameProps) {
  const show = level.show ?? 3;
  const rounds = level.rounds ?? 2;
  const peek = level.peekMs ?? 4000;
  const shufflePositions = level.world >= 3;
  const [r, setR] = useState(0);
  const [phase, setPhase] = useState<"peek" | "ask">("peek");
  const [seen, setSeen] = useState<string[]>([]);
  const [after, setAfter] = useState<(string | null)[]>([]);
  const [missing, setMissing] = useState("");
  const [options, setOptions] = useState<string[]>([]);
  const [picked, setPicked] = useState<string | null>(null);

  useEffect(() => {
    const pool = shuffle(MEMORY_POSES);
    const s = pool.slice(0, show);
    const miss = s[Math.floor(Math.random() * show)]!;
    const rest = s.filter((f) => f !== miss);
    const aft: (string | null)[] = shufflePositions ? shuffle([...rest, null]) : s.map((f) => (f === miss ? null : f));
    setSeen(s);
    setMissing(miss);
    setAfter(aft);
    setOptions(shuffle([miss, ...pool.slice(show, show + 3)]));
    setPicked(null);
    setPhase("peek");
    const id = setTimeout(() => setPhase("ask"), peek);
    return () => clearTimeout(id);
  }, [r, show, peek, shufflePositions]);

  useEffect(() => {
    setStep(`${r + 1}/${rounds}`);
  }, [r, rounds, setStep]);

  const choose = (f: string) => {
    if (picked || phase !== "ask") return;
    setPicked(f);
    if (f === missing) beep("ok", muted);
    else {
      beep("bad", muted);
      onMiss();
    }
    setTimeout(() => {
      if (r + 1 >= rounds) onDone();
      else setR((x) => x + 1);
    }, 900);
  };

  const gridCols = show <= 3 ? show : show === 4 ? 2 : 3;
  const cells = phase === "peek" ? seen : after;
  return (
    <div className="mx-auto max-w-md">
      <p className="mb-2 text-center font-serif text-lg font-semibold text-ink">
        {phase === "peek"
          ? L(locale, "Ingat-ingat semua Baby Mo ini! 👀", "Remember all these Baby Mo! 👀")
          : L(locale, "Siapa yang hilang? 🤔", "Who's missing? 🤔")}
      </p>
      <div className="mx-auto mb-3 h-2 w-full max-w-xs overflow-hidden rounded-full bg-mist">
        {phase === "peek" && (
          <div key={r} className="h-full rounded-full bg-grape" style={{ animation: `bj-drain ${peek}ms linear forwards` }} />
        )}
      </div>
      <div
        className="mx-auto grid max-w-sm gap-2 rounded-3xl bg-grape-soft/60 p-2.5"
        style={{ gridTemplateColumns: `repeat(${gridCols}, minmax(0, 1fr))` }}
      >
        {cells.map((f, i) => (
          <div
            key={`${phase}-${r}-${i}`}
            className={`bj-pop grid aspect-square place-items-center rounded-2xl ${f ? "bg-paper" : "bj-pulse border-2 border-dashed border-grape bg-paper/60"}`}
            style={{ animationDelay: `${i * 50}ms` }}
          >
            {f ? (
              <PoseImg file={f} alt="" className="h-full w-full object-contain p-1" priority />
            ) : picked ? (
              <PoseImg file={missing} alt="" className="bj-pop h-full w-full object-contain p-1" priority />
            ) : (
              <span className="font-serif text-4xl font-bold text-grape">?</span>
            )}
          </div>
        ))}
      </div>
      {phase === "ask" && (
        <div className="mt-4 grid grid-cols-4 gap-2">
          {options.map((f) => {
            const right = picked && f === missing;
            const bad = picked === f && f !== missing;
            return (
              <button
                key={f}
                type="button"
                aria-label="Baby Mo"
                onClick={() => choose(f)}
                className={`bj-pop aspect-square rounded-2xl border-2 bg-paper p-1 transition active:scale-90 ${
                  right ? "border-brave bg-brave-soft" : bad ? "bj-shake border-berry bg-berry-soft" : "border-hairline hover:border-grape"
                }`}
              >
                <PoseImg file={f} alt="" className="pointer-events-none h-full w-full object-contain" priority />
              </button>
            );
          })}
        </div>
      )}
      {/* preload the poses so the peek isn't spent waiting on images */}
      <div className="hidden">
        {MEMORY_POSES.map((f) => (
          <PoseImg key={f} file={f} alt="" priority />
        ))}
      </div>
    </div>
  );
}

/* ───────────────────────── stage (one level) ───────────────────────── */

function Confetti() {
  const bits = useMemo(
    () =>
      Array.from({ length: 36 }, (_, i) => ({
        left: Math.random() * 100,
        delay: Math.random() * 0.5,
        dur: 1.4 + Math.random() * 1.2,
        color: ["#F0975A", "#E86C9E", "#8A79D9", "#3AA7DA", "#E6B52E", "#1E8C53"][i % 6],
        rot: Math.random() * 360,
      })),
    [],
  );
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
      {bits.map((b, i) => (
        <i
          key={i}
          className="bj-confetti"
          style={{
            left: `${b.left}%`,
            background: b.color,
            animationDelay: `${b.delay}s`,
            animationDuration: `${b.dur}s`,
            transform: `rotate(${b.rot}deg)`,
          }}
        />
      ))}
    </div>
  );
}

function Stage({
  level,
  locale,
  muted,
  setMuted,
  best,
  onExit,
  onWin,
  onNext,
}: {
  level: BrainLevel;
  locale: Locale;
  muted: boolean;
  setMuted: (m: boolean) => void;
  best: number;
  onExit: () => void;
  onWin: (n: number, stars: number) => void;
  onNext: () => void;
}) {
  const info = BRAIN_KIND_INFO[level.kind];
  const world = BRAIN_WORLDS[level.world - 1]!;
  const [status, setStatus] = useState<"intro" | "play" | "won" | "lost">("intro");
  const [hearts, setHearts] = useState(HEARTS);
  const [misses, setMisses] = useState(0);
  const [elapsed, setElapsed] = useState(0);
  const [step, setStep] = useState("");
  const [attempt, setAttempt] = useState(0);
  const [stars, setStars] = useState(0);
  const heartsRef = useRef(HEARTS);
  const elapsedRef = useRef(0);
  const missRef = useRef(0);
  const doneRef = useRef(false);
  const last = level.n === BRAIN_LEVELS.length;

  useEffect(() => {
    setStatus("intro");
    setHearts(HEARTS);
    heartsRef.current = HEARTS;
    setMisses(0);
    missRef.current = 0;
    setElapsed(0);
    elapsedRef.current = 0;
    setStep("");
    doneRef.current = false;
  }, [level.n, attempt]);

  useEffect(() => {
    if (status !== "play") return;
    const t0 = Date.now() - elapsed * 1000;
    const id = setInterval(() => {
      elapsedRef.current = (Date.now() - t0) / 1000;
      setElapsed(elapsedRef.current);
    }, 250);
    return () => clearInterval(id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [status]);

  const onMiss = useCallback(() => {
    if (doneRef.current) return;
    missRef.current += 1;
    setMisses(missRef.current);
    heartsRef.current -= 1;
    setHearts(heartsRef.current);
    if (heartsRef.current <= 0) {
      doneRef.current = true;
      setTimeout(() => {
        beep("lose", muted);
        setStatus("lost");
      }, 500);
    }
  }, [muted]);

  const onDone = useCallback(() => {
    if (doneRef.current) return;
    doneRef.current = true;
    const e = elapsedRef.current;
    const m = missRef.current;
    const final = Math.max(1, 3 - (m > 0 ? 1 : 0) - (m > 1 ? 1 : 0) - (e > level.par ? 1 : 0));
    setStars(final);
    onWin(level.n, final);
    beep("win", muted);
    setStatus("won");
  }, [level.par, level.n, muted, onWin]);

  const stableSetStep = useCallback((s: string) => setStep(s), []);
  const props: GameProps = { level, locale, muted, onMiss, onDone, setStep: stableSetStep };

  return (
    <div className="fixed inset-0 z-[70] flex flex-col bg-paper" role="dialog" aria-modal="true" aria-label={`Level ${level.n}`}>
      {/* HUD */}
      <div className={`bg-gradient-to-r ${world.tone} border-b border-hairline px-3 pb-2 pt-[max(10px,env(safe-area-inset-top))]`}>
        <div className="mx-auto flex max-w-xl items-center gap-2">
          <button
            type="button"
            onClick={onExit}
            aria-label={L(locale, "Kembali ke peta", "Back to map")}
            className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-paper/80 text-lg font-bold text-ink shadow-sm active:scale-90"
          >
            ✕
          </button>
          <div className="min-w-0 flex-1">
            <p className="truncate text-[11px] font-bold uppercase tracking-wide text-whisper">
              {world.emoji} {t(world.name, locale)}
            </p>
            <p className="truncate font-serif text-base font-semibold text-ink">
              Level {level.n} · {t(info.name, locale)} {level.boss ? "👑" : ""}
            </p>
          </div>
          <button
            type="button"
            onClick={() => setMuted(!muted)}
            aria-label={muted ? L(locale, "Nyalakan suara", "Sound on") : L(locale, "Matikan suara", "Sound off")}
            className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-paper/80 text-lg shadow-sm active:scale-90"
          >
            {muted ? "🔇" : "🔊"}
          </button>
        </div>
        <div className="mx-auto mt-2 flex max-w-xl items-center justify-between gap-2 text-sm font-bold">
          <span className="flex gap-0.5" aria-label={`${hearts} ${L(locale, "nyawa", "lives")}`}>
            {Array.from({ length: HEARTS }, (_, i) => (
              <span key={i} className={`text-xl transition ${i < hearts ? "" : "scale-75 opacity-25 grayscale"}`}>
                ❤️
              </span>
            ))}
          </span>
          {step && <span className="rounded-full bg-paper/80 px-3 py-1 text-ink">{step}</span>}
          <span className={`rounded-full px-3 py-1 tabular-nums ${elapsed > level.par ? "bg-peach-soft text-ink" : "bg-paper/80 text-ink"}`}>
            ⏱️ {fmt(elapsed)}
          </span>
        </div>
      </div>

      {/* Body */}
      <div className="relative flex-1 overflow-y-auto px-3 pb-[max(16px,env(safe-area-inset-bottom))] pt-4">
        <div className="mx-auto max-w-xl">
          {status === "intro" && (
            <div className="bj-pop mx-auto mt-4 max-w-sm text-center">
              <div className="bj-float mx-auto h-36 w-36">
                <PoseImg file={level.boss ? "baby-mo-yes.png" : "baby-mo-idea.png"} alt="Baby Mo" className="h-full w-full object-contain" priority />
              </div>
              <p className="mt-2 text-5xl">{info.emoji}</p>
              <h2 className="mt-2 font-serif text-2xl font-semibold text-ink">
                {level.boss ? L(locale, "Level Bos! ", "Boss level! ") : ""}
                {t(info.name, locale)}
              </h2>
              <p className="mt-2 text-base leading-relaxed text-whisper">{t(info.how, locale)}</p>
              <p className="mt-3 text-sm text-whisper">
                ⭐ {L(locale, "Tanpa salah", "No mistakes")} · ⭐ {L(locale, `Di bawah ${level.par} detik`, `Under ${level.par} seconds`)}
              </p>
              <button
                type="button"
                onClick={() => setStatus("play")}
                className="bj-pulse mt-6 w-full rounded-full bg-gradient-to-r from-brave to-sky px-6 py-4 text-lg font-bold text-white shadow-lg active:scale-95"
              >
                {L(locale, "Siap? Mulai! ▶", "Ready? Go! ▶")}
              </button>
            </div>
          )}

          {(status === "play" || status === "won" || status === "lost") && (
            <div key={attempt} className={status !== "play" ? "pointer-events-none opacity-30 blur-[1px]" : ""}>
              {level.kind === "odd" && <OddGame {...props} />}
              {level.kind === "diff" && <DiffGame {...props} />}
              {level.kind === "feel" && <FeelGame {...props} />}
              {level.kind === "memory" && <MemoryGame {...props} />}
            </div>
          )}
        </div>

        {status === "won" && (
          <div className="absolute inset-0 flex items-start justify-center overflow-y-auto bg-paper/70 px-4 pt-6 backdrop-blur-sm">
            <Confetti />
            <div className="bj-pop relative w-full max-w-sm rounded-[2rem] border border-hairline bg-paper p-6 text-center shadow-2xl">
              <div className="bj-float mx-auto -mt-16 h-28 w-28">
                <PoseImg file={last ? "baby-mo-yes.png" : "baby-mo-yeyy.png"} alt="Baby Mo" className="h-full w-full object-contain" priority />
              </div>
              <p className="font-serif text-2xl font-semibold text-ink">
                {last
                  ? L(locale, "Kamu Juara Otak! 🏆", "Brain Champion! 🏆")
                  : stars === 3
                    ? L(locale, "Sempurna! 🌟", "Perfect! 🌟")
                    : L(locale, "Hebat! 🎉", "Great job! 🎉")}
              </p>
              <div className="mt-3 flex justify-center gap-2">
                {[1, 2, 3].map((s) => (
                  <span
                    key={s}
                    className={`bj-star text-5xl ${s <= stars ? "" : "opacity-20 grayscale"}`}
                    style={{ animationDelay: `${0.15 + s * 0.2}s` }}
                  >
                    ⭐
                  </span>
                ))}
              </div>
              <p className="mt-3 text-sm text-whisper">
                ⏱️ {fmt(elapsed)} · {misses === 0 ? L(locale, "tanpa salah!", "no mistakes!") : L(locale, `${misses} salah`, `${misses} mistake${misses > 1 ? "s" : ""}`)}
                {best > 0 && stars < best ? ` · ${L(locale, "terbaik", "best")} ${"⭐".repeat(best)}` : ""}
              </p>
              <div className="mt-5 grid gap-2">
                {!last && (
                  <button
                    type="button"
                    onClick={onNext}
                    className="rounded-full bg-gradient-to-r from-brave to-sky px-6 py-4 text-lg font-bold text-white shadow-lg active:scale-95"
                  >
                    {L(locale, `Level ${level.n + 1} ▶`, `Level ${level.n + 1} ▶`)}
                  </button>
                )}
                <div className="grid grid-cols-2 gap-2">
                  <button
                    type="button"
                    onClick={() => setAttempt((a) => a + 1)}
                    className="rounded-full border border-hairline bg-paper-2 px-4 py-3 text-sm font-bold text-ink active:scale-95"
                  >
                    🔁 {L(locale, "Ulangi", "Replay")}
                  </button>
                  <button
                    type="button"
                    onClick={onExit}
                    className="rounded-full border border-hairline bg-paper-2 px-4 py-3 text-sm font-bold text-ink active:scale-95"
                  >
                    🗺️ {L(locale, "Peta", "Map")}
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {status === "lost" && (
          <div className="absolute inset-0 flex items-start justify-center bg-paper/70 px-4 pt-10 backdrop-blur-sm">
            <div className="bj-pop w-full max-w-sm rounded-[2rem] border border-hairline bg-paper p-6 text-center shadow-2xl">
              <div className="mx-auto h-28 w-28">
                <PoseImg file="baby-mo-pose-37.png" alt="Baby Mo" className="h-full w-full object-contain" priority />
              </div>
              <p className="font-serif text-2xl font-semibold text-ink">{L(locale, "Hampir berhasil!", "So close!")}</p>
              <p className="mt-2 text-base text-whisper">
                {L(locale, "Nyawamu habis. Tarik napas, lalu coba lagi — kamu pasti bisa! 💪", "Out of lives. Take a breath and try again — you can do it! 💪")}
              </p>
              <div className="mt-5 grid gap-2">
                <button
                  type="button"
                  onClick={() => setAttempt((a) => a + 1)}
                  className="rounded-full bg-gradient-to-r from-peach to-berry px-6 py-4 text-lg font-bold text-white shadow-lg active:scale-95"
                >
                  🔁 {L(locale, "Coba Lagi", "Try Again")}
                </button>
                <button
                  type="button"
                  onClick={onExit}
                  className="rounded-full border border-hairline bg-paper-2 px-4 py-3 text-sm font-bold text-ink active:scale-95"
                >
                  🗺️ {L(locale, "Kembali ke peta", "Back to map")}
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

/* ───────────────────────── journey map ───────────────────────── */

const ZIG = [0, 28, 44, 28, 0, -28, -44, -28];

export function BrainJourney({ locale }: { locale: Locale }) {
  const [progress, setProgress] = useState<Progress>({ stars: {} });
  const [active, setActive] = useState<number | null>(null);
  const [muted, setMutedState] = useState(false);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    setProgress(loadProgress());
    try {
      setMutedState(localStorage.getItem("bm_brain_muted") === "1");
    } catch {}
    setReady(true);
  }, []);

  const setMuted = (m: boolean) => {
    setMutedState(m);
    try {
      localStorage.setItem("bm_brain_muted", m ? "1" : "0");
    } catch {}
  };

  useEffect(() => {
    if (active == null) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [active]);

  const unlocked = (n: number) => n === 1 || (progress.stars[n - 1] ?? 0) > 0;
  const totalStars = Object.values(progress.stars).reduce((a, b) => a + b, 0);
  const cleared = Object.keys(progress.stars).length;
  const current = BRAIN_LEVELS.find((lv) => !((progress.stars[lv.n] ?? 0) > 0))?.n ?? BRAIN_LEVELS.length;

  const onWin = useCallback((n: number, s: number) => {
    setProgress((p) => {
      const np = { stars: { ...p.stars, [n]: Math.max(p.stars[n] ?? 0, s) } };
      saveProgress(np);
      return np;
    });
  }, []);

  const level = active != null ? BRAIN_LEVELS[active - 1] : undefined;
  const rank = rankFor(totalStars);

  return (
    <section aria-labelledby="brain-title">
      {/* Progress card */}
      <div className="relative overflow-hidden rounded-[2rem] border border-hairline bg-gradient-to-br from-grape-soft via-sky-soft to-sun-soft p-5 shadow-sm sm:p-7">
        <div className="flex items-center gap-4">
          <div className="bj-float h-24 w-24 shrink-0 sm:h-28 sm:w-28">
            <PoseImg file="baby-mo-idea.png" alt="Baby Mo" className="h-full w-full object-contain" priority />
          </div>
          <div className="min-w-0 flex-1">
            <p className="text-[11px] font-bold uppercase tracking-wider text-grape">
              {L(locale, "Level otakmu", "Your brain level")}
            </p>
            <h2 id="brain-title" className="font-serif text-xl font-semibold text-ink sm:text-2xl">
              {ready ? t(rank, locale) : "…"}
            </h2>
            <div className="mt-2 h-3 overflow-hidden rounded-full bg-paper/70">
              <div
                className="h-full rounded-full bg-gradient-to-r from-sun via-peach to-berry transition-all duration-700"
                style={{ width: `${Math.round((totalStars / MAX_STARS) * 100)}%` }}
              />
            </div>
            <p className="mt-1.5 text-sm font-semibold text-whisper">
              ⭐ {totalStars}/{MAX_STARS} · 🏁 {cleared}/{BRAIN_LEVELS.length} level
            </p>
          </div>
        </div>
        <button
          type="button"
          onClick={() => setActive(current)}
          className="bj-pulse mt-5 w-full rounded-full bg-gradient-to-r from-brave to-sky px-6 py-4 text-lg font-bold text-white shadow-lg transition active:scale-95"
        >
          {cleared === 0
            ? L(locale, "Mulai Petualangan ▶", "Start the Adventure ▶")
            : cleared >= BRAIN_LEVELS.length
              ? L(locale, "Main lagi untuk ⭐⭐⭐", "Replay for ⭐⭐⭐")
              : L(locale, `Lanjut Level ${current} ▶`, `Continue Level ${current} ▶`)}
        </button>
      </div>

      {/* Map */}
      <div className="mt-8 space-y-8">
        {BRAIN_WORLDS.map((w) => {
          const lvls = BRAIN_LEVELS.filter((lv) => lv.world === w.n);
          const wStars = lvls.reduce((a, lv) => a + (progress.stars[lv.n] ?? 0), 0);
          const open = unlocked(lvls[0]!.n);
          return (
            <div key={w.n} className={`overflow-hidden rounded-[2rem] border border-hairline bg-gradient-to-b ${w.tone} ${open ? "" : "opacity-70"}`}>
              <div className="flex items-center gap-3 px-5 pt-5">
                <span className="grid h-12 w-12 place-items-center rounded-2xl bg-paper text-2xl shadow-sm">{w.emoji}</span>
                <div className="min-w-0 flex-1">
                  <p className="text-[11px] font-bold uppercase tracking-wider" style={{ color: w.accent }}>
                    {L(locale, `Dunia ${w.n}`, `World ${w.n}`)}
                  </p>
                  <h3 className="font-serif text-lg font-semibold leading-tight text-ink">{t(w.name, locale)}</h3>
                  <p className="text-sm leading-snug text-whisper">{t(w.tagline, locale)}</p>
                </div>
                <span className="shrink-0 rounded-full bg-paper/80 px-3 py-1 text-sm font-bold text-ink">⭐ {wStars}/18</span>
              </div>

              <ol className={`relative mx-auto flex max-w-xs flex-col items-center py-6 ${open ? "gap-3" : "gap-1"}`}>
                {lvls.map((lv, idx) => {
                  const s = progress.stars[lv.n] ?? 0;
                  const isOpen = ready && unlocked(lv.n);
                  const isCur = ready && lv.n === current && s === 0;
                  const info = BRAIN_KIND_INFO[lv.kind];
                  return (
                    <li key={lv.n} style={{ transform: `translateX(${ZIG[(idx + w.n * 2) % ZIG.length]}px)` }}>
                      <button
                        type="button"
                        disabled={!isOpen}
                        onClick={() => setActive(lv.n)}
                        aria-label={`Level ${lv.n}: ${t(info.name, locale)}${isOpen ? "" : L(locale, " (terkunci)", " (locked)")}`}
                        className={`relative grid place-items-center rounded-full border-4 font-serif text-xl font-bold shadow-md transition active:scale-90 ${
                          !isOpen ? (lv.boss ? "h-16 w-16" : "h-14 w-14") : lv.boss ? "h-20 w-20" : "h-16 w-16"
                        } ${
                          !isOpen
                            ? "border-dashed border-whisper-2/40 bg-paper/60 text-whisper-2 shadow-none"
                            : s > 0
                              ? "border-paper bg-gradient-to-br from-sun to-peach text-white"
                              : "border-paper text-white"
                        } ${isCur ? "bj-ring" : ""}`}
                        style={isOpen && s === 0 ? { background: w.accent } : undefined}
                      >
                        {isOpen ? lv.n : <span className="text-lg opacity-60 grayscale">{lv.boss ? "👑" : info.emoji}</span>}
                        {!isOpen && (
                          <span className="absolute -bottom-1 -right-1 grid h-6 w-6 place-items-center rounded-full bg-paper text-[11px] shadow-sm">🔒</span>
                        )}
                        {isOpen && (
                          <span className="absolute -right-1 -top-1 grid h-7 w-7 place-items-center rounded-full bg-paper text-sm shadow">
                            {lv.boss ? "👑" : info.emoji}
                          </span>
                        )}
                        {isCur && (
                          <span className="bj-float absolute -left-14 top-0 h-14 w-14">
                            <PoseImg file="baby-mo-run.png" alt="" className="h-full w-full object-contain" />
                          </span>
                        )}
                      </button>
                      <div className={`mt-1 flex justify-center gap-0.5 text-xs ${isOpen ? "h-4" : "h-1"}`} aria-hidden>
                        {s > 0 && [1, 2, 3].map((k) => <span key={k} className={k <= s ? "" : "opacity-25 grayscale"}>⭐</span>)}
                      </div>
                    </li>
                  );
                })}
              </ol>
            </div>
          );
        })}
      </div>

      {level && (
        <Stage
          key={level.n}
          level={level}
          locale={locale}
          muted={muted}
          setMuted={setMuted}
          best={progress.stars[level.n] ?? 0}
          onExit={() => setActive(null)}
          onWin={onWin}
          onNext={() => setActive((n) => (n != null && n < BRAIN_LEVELS.length ? n + 1 : n))}
        />
      )}
    </section>
  );
}
