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
import { useCallback, useEffect, useRef, useState } from "react";

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

/* ───────── voices ───────── */

const NOVELTY = /Albert|Bad News|Bahh|Bells|Boing|Bubbles|Cellos|Deranged|Good News|Hysterical|Jester|Junior|Organ|Superstar|Trinoids|Whisper|Wobble|Zarvox|Fred|Ralph|Kathy|Princess|Grandma|Grandpa|Rocko|Shelley|Flo|Eddy|Reed|Sandy/;
const GOOD: Record<string, RegExp> = {
  id: /Damayanti|Gadis|Ardi|Indonesia/i,
  en: /Samantha|Karen|Daniel|Moira|Serena|Kate|Aria|Jenny|Libby|Sonia|Ava|Allison|Susan|Martha|Arthur|Catherine/i,
};
const langOf = (v: SpeechSynthesisVoice) => v.lang.toLowerCase().replace("_", "-");

/** Voices that really speak this language (Malay only as a last resort for Indonesian). */
export function voicesFor(lang: string): SpeechSynthesisVoice[] {
  if (typeof window === "undefined" || !window.speechSynthesis) return [];
  const vs = window.speechSynthesis.getVoices().filter((v) => !NOVELTY.test(v.name));
  const own = vs.filter((v) => (lang === "id" ? /^(id|in)(-|$)/.test(langOf(v)) : /^en(-|$)/.test(langOf(v))));
  if (own.length || lang !== "id") return own;
  return vs.filter((v) => /^ms(-|$)/.test(langOf(v)));
}

function score(v: SpeechSynthesisVoice, lang: string) {
  let s = 0;
  if (/natural|neural/i.test(v.name)) s += 120; // Edge "(Natural)" voices sound almost human
  if (/premium|enhanced|siri/i.test(v.name)) s += 90;
  if (/online/i.test(v.name)) s += 60;
  if (/google/i.test(v.name)) s += 55;
  if (GOOD[lang]?.test(v.name)) s += 50;
  if (lang === "en") s += /en-gb/.test(langOf(v)) ? 12 : /en-us/.test(langOf(v)) ? 10 : /en-(au|ie|nz)/.test(langOf(v)) ? 6 : 0;
  if (lang === "id" && /^ms/.test(langOf(v))) s -= 80;
  if (!v.localService) s += 5;
  return s;
}

export const VOICE_KEY = (lang: string) => `bm-voice-${lang}`;
export function pickVoice(lang: string): SpeechSynthesisVoice | null {
  const vs = voicesFor(lang);
  if (!vs.length) return null;
  try {
    const want = localStorage.getItem(VOICE_KEY(lang));
    const mine = want && vs.find((v) => v.name === want);
    if (mine) return mine;
  } catch {}
  return [...vs].sort((a, b) => score(b, lang) - score(a, lang))[0] ?? null;
}

export function speechSupported() {
  return typeof window !== "undefined" && "speechSynthesis" in window && "SpeechSynthesisUtterance" in window;
}

/* ───────── pronunciation ───────── */

// Indonesian: read Arabic phrases, abbreviations and sound words like a local would
const ID_WORDS: Record<string, string> = {
  "assalamu'alaikum": "assalamualaikum", "assalamu’alaikum": "assalamualaikum", "wa'alaikumsalam": "waalaikumsalam",
  "ﷺ": "shallallahu alaihi wasallam", swt: "subhanahu wa taala", qs: "Quran surat", hr: "hadis riwayat",
  hp: "ha pe", "hp-nya": "ha pe nya", tpa: "te pe a", bmkg: "be em ka ge", bpbd: "be pe be de", who: "we ha o", sd: "es de", tk: "te ka",
  innaa: "inna", lillaahi: "lillahi", "raaji'uun": "rojiun", "raaji’uun": "rojiun",
  "allaahummaghfir": "allahummaghfir", "'aafihi": "afihi", "wa'fu": "wafu", "'anhu": "anhu", warhamhu: "warhamhu",
  hasbunallaahu: "hasbunallahu", "ni'mal": "nimal", wakiil: "wakil",
  rabbisyrah: "robbisyroh", lii: "li", shadrii: "shodri", amrii: "amri", "'uqdatan": "uqdatan", lisaanii: "lisani", yafqahuu: "yafqohu", qaulii: "qouli",
  "qur'an": "quran", "al-qur'an": "al quran", "du'a": "doa", "jum'at": "jumat", "ma'idah": "maidah", "'imran": "imron",
};
// English: say the family's Indonesian names and words the Indonesian way
const EN_WORDS: Record<string, string> = {
  umi: "Oomee", abi: "Ah-bee", kakek: "Kah-keck", nenek: "Neh-neck", kak: "Kahk", ais: "Ah-ees", tukik: "Too-kick",
  jingga: "Jing-gah", rimba: "Rim-bah", utan: "Oo-tahn", nala: "Nah-lah", darto: "Dar-toh", rina: "Ree-nah", bu: "Boo", pak: "Pahk", om: "Ohm",
  masya: "Masha", insya: "Insha", alhamdulillah: "Al-hamdu-lillah", bismillah: "Bis-millah", "assalamu'alaikum": "Assalamu alaikum", "assalamu’alaikum": "Assalamu alaikum",
  "ﷺ": "peace be upon him", "du'a": "doo-ah", "qur'an": "Koran", sholat: "sha-laat", salat: "sa-laat", peci: "peh-chee", tasbih: "tas-bee",
  lebaran: "Leh-bah-ran", ketupat: "keh-too-pat", opor: "oh-por", mudik: "moo-dick", sedekah: "seh-deh-kah", dhikr: "thikr", nastar: "nahs-tar",
  kalimantan: "Kah-lee-mahn-tahn", "an-nahl": "An Nahl", innaa: "Inna", lillaahi: "lillahi", "raaji'uun": "raa-jee-oon", hasbunallaahu: "Has-bu-nallahu",
  wakiil: "wakeel", rabbisyrah: "Rabbish-rah", lii: "lee", shadrii: "sadree", amrii: "amree", lisaanii: "lisaanee", yafqahuu: "yafqahoo", qaulii: "qawlee",
  mengaji: "meng-ah-jee", tadarus: "ta-da-roos",
};
const ACRONYM = /^(QS|HR|HP|TPA|BMKG|BPBD|WHO|SD|TK|SWT)$/;

/** How one written word should be spoken. */
export function spokenWord(w: string, lang: string): string {
  let out = w.replace(/[\u{1F300}-\u{1FAFF}☀-➿️]/gu, "").replace(/[“”"«»]/g, "").replace(/…/g, ",").replace(/[—–]/g, ",");
  const m = out.match(/^([^\p{L}ﷺ']*)([\p{L}ﷺ'’-]*?)((?:['’]s)?)([^\p{L}ﷺ]*)$/u);
  if (!m) return out;
  const [, pre, core0, poss, post] = m as unknown as [string, string, string, string, string];
  let core = core0;
  const key = core.toLowerCase();
  const dict = lang === "id" ? ID_WORDS : EN_WORDS;
  if (dict[key]) {
    core = dict[key]!;
    // "QS." / "HR." are abbreviations, not the end of a sentence
    if (/^(qs|hr|swt)$/.test(key)) return `${pre}${core}${post.replace(/^\./, "")}`;
  }
  else if (ACRONYM.test(core)) core = core; // spelled by the voice
  else if (core.length >= 2 && core === core.toUpperCase() && /\p{Lu}/u.test(core)) core = core[0] + core.slice(1).toLowerCase(); // TIGA! → Tiga! (not spelled out)
  core = core.replace(/(\p{L})\1{3,}/gu, "$1$1$1"); // Bzzzzz → Bzzz
  if (lang === "id") core = core.replace(/['’]/g, ""); // apostrophes in Arabic transliteration
  return `${pre}${core}${poss}${post}`;
}

type Chunk = { text: string; toks: { i: number; start: number; end: number }[] };
/** Split a page into sentences, each with a map from spoken offsets back to the written words. */
function chunksFor(toks: Tok[], lang: string): Chunk[] {
  const out: Chunk[] = [];
  let cur: Chunk = { text: "", toks: [] };
  toks.forEach((t, i) => {
    const sw = spokenWord(t.w, lang).trim();
    if (sw && !/\p{L}|\p{N}/u.test(sw)) {
      // a lone dash or ellipsis: just a pause after the previous word
      if (cur.text && !/[,.!?]$/.test(cur.text)) cur.text += ",";
    } else if (sw) {
      if (cur.text) cur.text += " ";
      cur.toks.push({ i, start: cur.text.length, end: cur.text.length + sw.length });
      cur.text += sw;
    }
    if (/[.!?]["”’)]*$/.test(sw) && cur.text) { out.push(cur); cur = { text: "", toks: [] }; }
  });
  if (cur.text) out.push(cur);
  return out;
}

/** speak(text) → highlights via onWord(i), calls onEnd when done. */
export function useNarrator(lang: string) {
  const timer = useRef<ReturnType<typeof setInterval> | null>(null);
  const token = useRef(0);
  const [voices, setVoices] = useState<SpeechSynthesisVoice[]>([]);
  const [voiceName, setVoiceName] = useState<string>("");
  const [noVoice, setNoVoice] = useState(false);

  useEffect(() => {
    if (!speechSupported()) return;
    // voices arrive asynchronously on some browsers
    const load = () => {
      const vs = voicesFor(lang);
      setVoices(vs);
      setVoiceName(pickVoice(lang)?.name ?? "");
    };
    load();
    window.speechSynthesis.addEventListener?.("voiceschanged", load);
    return () => window.speechSynthesis.removeEventListener?.("voiceschanged", load);
  }, [lang]);

  const chooseVoice = useCallback((name: string) => {
    try { localStorage.setItem(VOICE_KEY(lang), name); } catch {}
    setVoiceName(name);
  }, [lang]);

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
      const msPerChar = 58 / rate;
      const est = (w: string) => (w.length + 1.6) * msPerChar + (/[.,!?…]$/.test(w) ? 260 / rate : 0);
      const finish = () => {
        if (timer.current) clearInterval(timer.current);
        timer.current = null;
        opts.onWord?.(-1);
        opts.onEnd?.();
      };
      // silent timeline: no voice for this language — the highlight still runs
      const silent = () => {
        let acc = 0;
        const due = toks.map((t) => (acc += est(t.w)));
        const t0 = Date.now();
        let i = 0;
        opts.onWord?.(0);
        timer.current = setInterval(() => {
          if (token.current !== my) return;
          const el = Date.now() - t0;
          while (i < toks.length - 1 && el > due[i]!) i++;
          opts.onWord?.(i);
          if (el > acc + 300) finish();
        }, 90);
      };
      if (!speechSupported()) return silent();
      const all = window.speechSynthesis.getVoices();
      const v = pickVoice(lang);
      // voices are listed but none speaks this language: never let a wrong-language voice read it
      if (all.length && !v) {
        setNoVoice(true);
        return silent();
      }
      setNoVoice(false);
      const chunks = chunksFor(toks, lang);
      let started = false;
      const sayChunk = (k: number) => {
        if (token.current !== my) return;
        const c = chunks[k];
        if (!c) return finish();
        const u = new SpeechSynthesisUtterance(c.text);
        u.lang = lang === "id" ? (v?.lang ?? "id-ID") : (v?.lang ?? "en-GB");
        if (v) u.voice = v;
        u.rate = rate;
        u.pitch = opts.pitch ?? 1;
        let gotBoundary = false;
        u.onboundary = (e: SpeechSynthesisEvent) => {
          if (token.current !== my || e.name === "sentence") return;
          gotBoundary = true;
          if (timer.current) { clearInterval(timer.current); timer.current = null; }
          const hit = c.toks.find((t) => e.charIndex >= t.start && e.charIndex <= t.end);
          if (hit) opts.onWord?.(hit.i);
        };
        u.onstart = () => {
          started = true;
          if (token.current !== my) return;
          opts.onWord?.(c.toks[0]?.i ?? 0);
          // this voice sends no word events: estimate inside the sentence
          setTimeout(() => {
            if (token.current !== my || gotBoundary || timer.current) return;
            const t0 = Date.now();
            let acc = 0;
            const due = c.toks.map((t) => (acc += est(toks[t.i]!.w)));
            let j = 0;
            timer.current = setInterval(() => {
              if (token.current !== my) return;
              const el = Date.now() - t0 + 400;
              while (j < c.toks.length - 1 && el > due[j]!) j++;
              opts.onWord?.(c.toks[j]!.i);
              // never trust a voice that forgets to say it's done
              if (el > acc * 1.8 + 3000) { window.speechSynthesis.cancel(); if (timer.current) clearInterval(timer.current); timer.current = null; sayChunk(k + 1); }
            }, 90);
          }, 400);
        };
        u.onend = () => {
          if (token.current !== my) return;
          if (timer.current) { clearInterval(timer.current); timer.current = null; }
          // a short natural breath between sentences
          setTimeout(() => sayChunk(k + 1), /[!?]$/.test(c.text) ? 450 : 380);
        };
        u.onerror = () => { if (token.current === my) sayChunk(k + 1); };
        window.speechSynthesis.speak(u);
      };
      sayChunk(0);
      // some browsers have the API but never speak: fall back to the silent timeline
      setTimeout(() => {
        if (token.current === my && !started) {
          window.speechSynthesis.cancel();
          silent();
        }
      }, 1800);
    },
    [lang, stop, voiceName], // eslint-disable-line react-hooks/exhaustive-deps
  );

  useEffect(() => stop, [stop]);
  return { speak, stop, voices, voiceName, chooseVoice, noVoice };
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
