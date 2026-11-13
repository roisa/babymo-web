/** Tiny shared state between the shelf filters and the "show more" button. */
type S = { limit: number; hiddenByLimit: number };
let state: S = { limit: 12, hiddenByLimit: 0 };
const subs = new Set<() => void>();
export const shelfStore = {
  get: () => state,
  set(p: Partial<S>) { state = { ...state, ...p }; subs.forEach((f) => f()); },
  sub(f: () => void) { subs.add(f); return () => { subs.delete(f); }; },
};
export const SHELF_STEP = 12;
