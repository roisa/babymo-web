// A gentle daily-learning streak, persisted client-side. A "day" is the same
// integer day-index used by lib/doa-of-the-day, so it's stable across timezones
// in the same way the rest of the app reckons days.
const KEY = "babymo.streak.v1";
const EVENT = "babymo:streak";

export type Streak = { count: number; best: number };

function dayIndex(now: Date = new Date()): number {
  return Math.floor(now.getTime() / 86_400_000);
}

type Stored = { last: number; count: number; best: number };

function read(): Stored | null {
  if (typeof window === "undefined") return null;
  try {
    const raw = window.localStorage.getItem(KEY);
    if (!raw) return null;
    const p = JSON.parse(raw);
    if (p && typeof p.last === "number") return p as Stored;
    return null;
  } catch {
    return null;
  }
}

function write(s: Stored) {
  if (typeof window === "undefined") return;
  try {
    window.localStorage.setItem(KEY, JSON.stringify(s));
    window.dispatchEvent(new CustomEvent(EVENT));
  } catch {
    /* storage blocked */
  }
}

/**
 * Record a visit for today and return the current streak. Called once when the
 * streak badge mounts. Idempotent within the same day.
 */
export function recordVisit(now: Date = new Date()): Streak {
  const today = dayIndex(now);
  const prev = read();

  if (!prev) {
    const s = { last: today, count: 1, best: 1 };
    write(s);
    return { count: s.count, best: s.best };
  }
  if (prev.last === today) {
    return { count: prev.count, best: prev.best };
  }
  // Consecutive day continues the streak; any gap resets it to 1.
  const count = today === prev.last + 1 ? prev.count + 1 : 1;
  const best = Math.max(prev.best, count);
  write({ last: today, count, best });
  return { count, best };
}

export function onStreakChange(cb: () => void): () => void {
  if (typeof window === "undefined") return () => {};
  const handler = () => cb();
  window.addEventListener(EVENT, handler);
  window.addEventListener("storage", handler);
  return () => {
    window.removeEventListener(EVENT, handler);
    window.removeEventListener("storage", handler);
  };
}
