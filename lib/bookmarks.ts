/**
 * Local-only bookmarks. No account, no server — everything lives in
 * the browser's localStorage. A custom window event ("babymo:bookmarks")
 * lets all mounted components stay in sync after a toggle.
 */

export type BookmarkType =
  | "doa"
  | "hadith"
  | "parenting"
  | "catatan"
  | "surah"
  | "blog"
  | "prophet";

export type Bookmark = {
  type: BookmarkType;
  slug: string;
  /** Localized display title at save time */
  title: string;
  /** Locale-relative path WITHOUT the /locale prefix, e.g. "/doa/sebelum-tidur" */
  url: string;
  /** Saved timestamp (ms) */
  ts: number;
};

const KEY = "babymo.bookmarks.v1";
const EVENT = "babymo:bookmarks";

export function getBookmarks(): Bookmark[] {
  if (typeof window === "undefined") return [];
  try {
    const raw = window.localStorage.getItem(KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

function save(list: Bookmark[]) {
  if (typeof window === "undefined") return;
  try {
    window.localStorage.setItem(KEY, JSON.stringify(list));
    window.dispatchEvent(new CustomEvent(EVENT));
  } catch {
    /* storage full / blocked — fail silent */
  }
}

export function isBookmarked(type: BookmarkType, slug: string): boolean {
  return getBookmarks().some((b) => b.type === type && b.slug === slug);
}

/** Toggles a bookmark. Returns the new saved state (true = now saved). */
export function toggleBookmark(bm: Omit<Bookmark, "ts">): boolean {
  const list = getBookmarks();
  const idx = list.findIndex((b) => b.type === bm.type && b.slug === bm.slug);
  if (idx >= 0) {
    list.splice(idx, 1);
    save(list);
    return false;
  }
  list.unshift({ ...bm, ts: Date.now() });
  save(list);
  return true;
}

export function removeBookmark(type: BookmarkType, slug: string) {
  const list = getBookmarks().filter(
    (b) => !(b.type === type && b.slug === slug),
  );
  save(list);
}

/** Subscribe to bookmark changes. Returns an unsubscribe function. */
export function onBookmarksChange(cb: () => void): () => void {
  if (typeof window === "undefined") return () => {};
  const handler = () => cb();
  window.addEventListener(EVENT, handler);
  window.addEventListener("storage", handler); // cross-tab sync
  return () => {
    window.removeEventListener(EVENT, handler);
    window.removeEventListener("storage", handler);
  };
}

export const BOOKMARK_EVENT = EVENT;
