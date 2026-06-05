// Teman Tumbuh — local-only state for the daily companion. No account, no
// server: the child's name and their completed-days log live in the browser.
// A custom window event keeps mounted components in sync (same pattern as
// lib/streak.ts and lib/bookmarks.ts).

const CHILD_KEY = "babymo.child.v1";
const LOG_KEY = "babymo.teman.v1";
const EVENT = "babymo:teman";

/** Stable day-index — matches lib/streak.ts and lib/content/missions.ts. */
export function dayIndex(now: Date = new Date()): number {
  return Math.floor(now.getTime() / 86_400_000);
}

export type Child = { name: string };
export type TemanLog = { done: number[] }; // sorted-ish list of completed day-indices

export type TemanStats = {
  total: number;
  streak: number;
  best: number;
  /** Last 7 days, oldest → today; true if that day was completed. */
  week: boolean[];
  todayDone: boolean;
};

function readJSON<T>(key: string, fallback: T): T {
  if (typeof window === "undefined") return fallback;
  try {
    const raw = window.localStorage.getItem(key);
    if (!raw) return fallback;
    const parsed = JSON.parse(raw);
    return parsed ?? fallback;
  } catch {
    return fallback;
  }
}

function writeJSON(key: string, value: unknown) {
  if (typeof window === "undefined") return;
  try {
    window.localStorage.setItem(key, JSON.stringify(value));
    window.dispatchEvent(new CustomEvent(EVENT));
  } catch {
    /* storage blocked */
  }
}

export function getChild(): Child | null {
  const c = readJSON<Child | null>(CHILD_KEY, null);
  if (c && typeof c.name === "string" && c.name.trim()) return c;
  return null;
}

export function setChild(name: string) {
  writeJSON(CHILD_KEY, { name: name.trim().slice(0, 24) });
}

export function getLog(): TemanLog {
  const l = readJSON<TemanLog>(LOG_KEY, { done: [] });
  return { done: Array.isArray(l.done) ? l.done : [] };
}

export function isTodayDone(now: Date = new Date()): boolean {
  return getLog().done.includes(dayIndex(now));
}

/** Mark today complete (idempotent). Returns the new stats. */
export function markTodayDone(now: Date = new Date()): TemanStats {
  const today = dayIndex(now);
  const log = getLog();
  if (!log.done.includes(today)) {
    log.done = [...log.done, today].sort((a, b) => a - b);
    writeJSON(LOG_KEY, log);
  }
  return computeStats(now);
}

/** Longest run of consecutive day-indices ending at `end` (if present). */
function runEndingAt(set: Set<number>, end: number): number {
  let n = 0;
  let d = end;
  while (set.has(d)) {
    n += 1;
    d -= 1;
  }
  return n;
}

export function computeStats(now: Date = new Date()): TemanStats {
  const today = dayIndex(now);
  const done = getLog().done;
  const set = new Set(done);

  // Current streak: a run ending today, or ending yesterday (grace until
  // today's mission is done) — so the streak doesn't look "broken" all day.
  const streak = set.has(today)
    ? runEndingAt(set, today)
    : runEndingAt(set, today - 1);

  // Best streak across all recorded days.
  let best = 0;
  for (const d of set) {
    if (!set.has(d - 1)) best = Math.max(best, runEndingAt(set, d));
  }

  const week: boolean[] = [];
  for (let i = 6; i >= 0; i--) week.push(set.has(today - i));

  return { total: done.length, streak, best, week, todayDone: set.has(today) };
}

export function onTemanChange(cb: () => void): () => void {
  if (typeof window === "undefined") return () => {};
  const handler = () => cb();
  window.addEventListener(EVENT, handler);
  window.addEventListener("storage", handler);
  return () => {
    window.removeEventListener(EVENT, handler);
    window.removeEventListener("storage", handler);
  };
}

/** Growth stage from total completed missions — the garden that grows. */
export type GrowthStage = {
  key: string;
  emoji: string;
  label: Record<"id" | "en", string>;
  /** Total needed to reach the NEXT stage, or null if final. */
  next: number | null;
};

const STAGES: { min: number; stage: Omit<GrowthStage, "next">; nextAt: number | null }[] = [
  { min: 0, nextAt: 1, stage: { key: "benih", emoji: "🌰", label: { id: "Benih", en: "Seed" } } },
  { min: 1, nextAt: 3, stage: { key: "tunas", emoji: "🌱", label: { id: "Tunas", en: "Sprout" } } },
  { min: 3, nextAt: 7, stage: { key: "kecambah", emoji: "🌿", label: { id: "Kecambah", en: "Seedling" } } },
  { min: 7, nextAt: 14, stage: { key: "bunga", emoji: "🌷", label: { id: "Berbunga", en: "Blossoming" } } },
  { min: 14, nextAt: 30, stage: { key: "pohon", emoji: "🌳", label: { id: "Pohon Kecil", en: "Young Tree" } } },
  { min: 30, nextAt: null, stage: { key: "rindang", emoji: "🌳", label: { id: "Pohon Rindang", en: "Flourishing Tree" } } },
];

export function growthStage(total: number): GrowthStage {
  let chosen = STAGES[0]!;
  for (const s of STAGES) if (total >= s.min) chosen = s;
  return { ...chosen.stage, next: chosen.nextAt };
}
