"use client";

/**
 * Read-aloud for picture books: the browser's own voice (Web Speech API, so it
 * works offline and costs nothing) reads a page while the words light up.
 *
 * Word timing comes from the voice's `boundary` events where the browser sends
 * them; otherwise a timer estimates it, so the highlight always moves.
 * Sound words (PLOK!, Bzzz, DUAR!) are drawn big and bouncy so a child can
 * shout them.
 */
import { useCallback, useEffect, useRef } from "react";

export type Tok = { w: string; start: number; end: number; sfx: boolean };

const SFX =
  /^(b+z+(-b+z+)*|kr+e+k+|plo+k+|by+u+r+|kli+k+|ceklek|blu+p+(,?\s?blu+p+)*|slu+r+p+|br+r+m+|wu+s+h+|who+sh|kres(-kres)*|tu+t+(-tu+t+)*|du+a+r+|pu+f+f*|gubrak|crash|spla(sh|t)|boo+m+|click|scuttle(-scuttle)?|ting(-ting)*|gr+r+|rumble|choo(-choo)*|ha+-ciu+|a+-choo|plok-plek|flip-flop|tut-tuu+t)$/i;

/** Split text into words (with their punctuation) and mark sound words. */
export function tokenize(text: string): Tok[] {
  const out: Tok[] = [];
  const re = /\S+/g;
  let m: RegExpExecArray | null;
  while ((m = re.exec(text))) {
    const w = m[0];
    const core = w.replace(/^[^\p{L}]+|[^\p{L}]+$/gu, "");
    const shout = core.length >= 3 && core === core.toUpperCase() && /\p{Lu}/u.test(core) && /[!.…]/.test(w);
    out.push({ w, start: m.index, end: m.index + w.length, sfx: shout || (core.length >= 3 && SFX.test(core)) });
  }
  return out;
}

/** The page text as word spans; `active` is the word being read. */
export function ReadText({ text, active }: { text: string; active: number }) {
  const toks = tokenize(text);
  return (
    <>
      {toks.map((t, i) => (
        <span key={i}>
          <span className={`bk-w${t.sfx ? " bk-sfx" : ""}${i === active ? " bk-w--on" : ""}${active >= 0 && i < active ? " bk-w--read" : ""}`} style={t.sfx ? ({ "--r": `${((i * 7) % 9) - 4}deg` } as React.CSSProperties) : undefined}>
            {t.w}
          </span>
          {i < toks.length - 1 ? " " : ""}
        </span>
      ))}
    </>
  );
}

function pickVoice(lang: string): SpeechSynthesisVoice | null {
  if (typeof window === "undefined" || !window.speechSynthesis) return null;
  const vs = window.speechSynthesis.getVoices();
  const want = lang === "id" ? ["id-ID", "id_ID", "id", "in-ID"] : ["en-GB", "en-US", "en"];
  const match = vs.filter((v) => want.some((w) => v.lang.toLowerCase().startsWith(w.toLowerCase())));
  const pref = ["Damayanti", "Google", "Natural", "Female", "Siri"];
  for (const p of pref) {
    const v = match.find((x) => x.name.includes(p));
    if (v) return v;
  }
  return match[0] ?? null;
}

export function speechSupported() {
  return typeof window !== "undefined" && "speechSynthesis" in window && "SpeechSynthesisUtterance" in window;
}

/** speak(text) → highlights via onWord(i), calls onEnd when done. */
export function useNarrator(lang: string) {
  const timer = useRef<ReturnType<typeof setInterval> | null>(null);
  const gotBoundary = useRef(false);
  const token = useRef(0);

  useEffect(() => {
    if (!speechSupported()) return;
    // voices arrive asynchronously on some browsers
    const prime = () => window.speechSynthesis.getVoices();
    prime();
    window.speechSynthesis.addEventListener?.("voiceschanged", prime);
    return () => window.speechSynthesis.removeEventListener?.("voiceschanged", prime);
  }, []);

  const stop = useCallback(() => {
    token.current++;
    if (timer.current) clearInterval(timer.current);
    timer.current = null;
    if (speechSupported()) window.speechSynthesis.cancel();
  }, []);

  const speak = useCallback(
    (text: string, opts: { rate?: number; pitch?: number; onWord?: (i: number) => void; onEnd?: () => void }) => {
      stop();
      const my = ++token.current;
      const toks = tokenize(text);
      const rate = opts.rate ?? 0.92;
      // estimated timeline, used when the voice sends no boundary events
      const msPerChar = 62 / rate;
      let acc = 0;
      const due = toks.map((t) => (acc += (t.w.length + 1.6) * msPerChar + (/[.,!?…]$/.test(t.w) ? 260 / rate : 0)));
      const startFallback = (finish: boolean) => {
        let i = 0;
        opts.onWord?.(0);
        const t0 = Date.now();
        timer.current = setInterval(() => {
          if (token.current !== my) return;
          const el = Date.now() - t0;
          while (i < toks.length - 1 && el > due[i]!) i++;
          opts.onWord?.(i);
          const last = due[due.length - 1] ?? 0;
          // finish: no voice, end on the estimate. Otherwise the voice should end on
          // its own; if it never reports the end, give up after a generous margin.
          if (finish ? el > last + 300 : el > last * 1.7 + 2500) {
            if (!finish && speechSupported()) window.speechSynthesis.cancel();
            if (timer.current) clearInterval(timer.current);
            timer.current = null;
            opts.onWord?.(-1);
            opts.onEnd?.();
          }
        }, 90);
      };
      if (!speechSupported()) {
        // no voice at all: still walk the highlight and turn the page
        startFallback(true);
        return;
      }
      let started = false;
      const u = new SpeechSynthesisUtterance(text.replace(/[\u{1F300}-\u{1FAFF}☀-➿]/gu, ""));
      u.lang = lang === "id" ? "id-ID" : "en-GB";
      const v = pickVoice(lang);
      if (v) u.voice = v;
      u.rate = rate;
      u.pitch = opts.pitch ?? 1.05;
      gotBoundary.current = false;
      u.onboundary = (e: SpeechSynthesisEvent) => {
        if (token.current !== my || e.name === "sentence") return;
        if (!gotBoundary.current) {
          gotBoundary.current = true;
          if (timer.current) clearInterval(timer.current);
          timer.current = null;
        }
        const idx = toks.findIndex((t) => e.charIndex >= t.start && e.charIndex < t.end + 1);
        if (idx >= 0) opts.onWord?.(idx);
      };
      u.onstart = () => {
        started = true;
        if (token.current !== my) return;
        setTimeout(() => {
          if (token.current === my && !gotBoundary.current && !timer.current) startFallback(false);
        }, 500);
      };
      u.onend = () => {
        if (token.current !== my) return;
        if (timer.current) clearInterval(timer.current);
        timer.current = null;
        opts.onWord?.(-1);
        opts.onEnd?.();
      };
      window.speechSynthesis.speak(u);
      // some browsers have the API but never speak (no voice installed):
      // fall back to the silent timeline so the book keeps moving
      setTimeout(() => {
        if (token.current === my && !started) {
          window.speechSynthesis.cancel();
          startFallback(true);
        }
      }, 1500);
    },
    [lang, stop],
  );

  useEffect(() => stop, [stop]);
  return { speak, stop };
}

/**
 * Soft bedtime sound made in the browser (no audio files): brown noise
 * through a low-pass filter, swelling slowly like waves on a quiet beach.
 */
export function useLullabySound() {
  const ctx = useRef<AudioContext | null>(null);
  const nodes = useRef<{ src: AudioBufferSourceNode; gain: GainNode; lfo: OscillatorNode } | null>(null);

  const stop = useCallback(() => {
    const n = nodes.current;
    const c = ctx.current;
    if (n && c) {
      n.gain.gain.setTargetAtTime(0, c.currentTime, 0.6);
      const { src, lfo } = n;
      setTimeout(() => {
        try { src.stop(); lfo.stop(); } catch {}
      }, 2500);
    }
    nodes.current = null;
  }, []);

  const start = useCallback(() => {
    if (typeof window === "undefined") return;
    const AC = window.AudioContext || (window as unknown as { webkitAudioContext?: typeof AudioContext }).webkitAudioContext;
    if (!AC) return;
    if (!ctx.current) ctx.current = new AC();
    const c = ctx.current;
    void c.resume();
    if (nodes.current) return;
    const len = c.sampleRate * 4;
    const buf = c.createBuffer(1, len, c.sampleRate);
    const d = buf.getChannelData(0);
    let last = 0;
    for (let i = 0; i < len; i++) {
      const white = Math.random() * 2 - 1;
      last = (last + 0.02 * white) / 1.02;
      d[i] = last * 3.2;
    }
    const src = c.createBufferSource();
    src.buffer = buf;
    src.loop = true;
    const lp = c.createBiquadFilter();
    lp.type = "lowpass";
    lp.frequency.value = 520;
    const gain = c.createGain();
    gain.gain.value = 0;
    const swell = c.createGain();
    swell.gain.value = 0.5;
    const lfo = c.createOscillator();
    lfo.frequency.value = 0.09; // one slow wave every ~11 seconds
    const lfoAmt = c.createGain();
    lfoAmt.gain.value = 0.35;
    lfo.connect(lfoAmt).connect(swell.gain);
    src.connect(lp).connect(swell).connect(gain).connect(c.destination);
    gain.gain.setTargetAtTime(0.16, c.currentTime, 1.5);
    src.start();
    lfo.start();
    nodes.current = { src, gain, lfo };
  }, []);

  useEffect(() => stop, [stop]);
  return { start, stop };
}

/** Tiny tap sounds made in the browser: pop (creatures), boing (characters), chime (found it!). */
let blipCtx: AudioContext | null = null;
export function playBlip(kind: "pop" | "boing" | "chime", quiet = false) {
  if (typeof window === "undefined") return;
  const AC = window.AudioContext || (window as unknown as { webkitAudioContext?: typeof AudioContext }).webkitAudioContext;
  if (!AC) return;
  blipCtx ??= new AC();
  const c = blipCtx;
  void c.resume();
  const now = c.currentTime;
  const notes = kind === "chime" ? [784, 988, 1319] : [kind === "boing" ? 420 : 520];
  notes.forEach((f, i) => {
    const o = c.createOscillator();
    const g = c.createGain();
    o.type = kind === "pop" ? "triangle" : "sine";
    const t = now + i * 0.09;
    o.frequency.setValueAtTime(f, t);
    if (kind !== "chime") o.frequency.exponentialRampToValueAtTime(f * (kind === "boing" ? 2.1 : 1.7), t + 0.14);
    g.gain.setValueAtTime(0.0001, t);
    g.gain.exponentialRampToValueAtTime(quiet ? 0.05 : 0.14, t + 0.02);
    g.gain.exponentialRampToValueAtTime(0.0001, t + (kind === "chime" ? 0.5 : 0.22));
    o.connect(g).connect(c.destination);
    o.start(t);
    o.stop(t + 0.6);
  });
}
