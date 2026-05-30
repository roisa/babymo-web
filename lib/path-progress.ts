// Per-path step completion, persisted client-side. Mirrors lib/bookmarks.ts:
// a versioned localStorage key plus a CustomEvent so multiple components
// (and tabs) stay in sync.
const KEY = "babymo.paths.v1";
const EVENT = "babymo:paths";

type Store = Record<string, string[]>; // pathSlug -> completed step ids

function read(): Store {
  if (typeof window === "undefined") return {};
  try {
    const raw = window.localStorage.getItem(KEY);
    const parsed = raw ? JSON.parse(raw) : {};
    return parsed && typeof parsed === "object" ? (parsed as Store) : {};
  } catch {
    return {};
  }
}

function write(store: Store) {
  if (typeof window === "undefined") return;
  try {
    window.localStorage.setItem(KEY, JSON.stringify(store));
    window.dispatchEvent(new CustomEvent(EVENT));
  } catch {
    /* storage full / blocked */
  }
}

export function getDoneSteps(pathSlug: string): string[] {
  return read()[pathSlug] ?? [];
}

export function isStepDone(pathSlug: string, stepId: string): boolean {
  return getDoneSteps(pathSlug).includes(stepId);
}

/** Toggle a step's completion; returns the new done-state. */
export function toggleStep(pathSlug: string, stepId: string): boolean {
  const store = read();
  const list = store[pathSlug] ?? [];
  const idx = list.indexOf(stepId);
  if (idx >= 0) {
    list.splice(idx, 1);
    store[pathSlug] = list;
    write(store);
    return false;
  }
  store[pathSlug] = [...list, stepId];
  write(store);
  return true;
}

export function onPathsChange(cb: () => void): () => void {
  if (typeof window === "undefined") return () => {};
  const handler = () => cb();
  window.addEventListener(EVENT, handler);
  window.addEventListener("storage", handler);
  return () => {
    window.removeEventListener(EVENT, handler);
    window.removeEventListener("storage", handler);
  };
}
