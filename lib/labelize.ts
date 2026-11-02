/** "aktivitas-anak" → "Aktivitas anak". For data values shown as labels
 *  (tags, categories, kinds) now that labels are no longer ALL CAPS. */
export function labelize(s: string | undefined | null): string {
  const t = String(s ?? "").replace(/[-_]+/g, " ").trim();
  return t ? t[0]!.toUpperCase() + t.slice(1) : t;
}
