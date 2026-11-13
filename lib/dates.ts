/** Publish dates on scheduled content can sit in the future while the page is
 *  already live. For schema.org and the sitemap we never claim a date after
 *  the build day. */
export function notFuture(d: string): string {
  const today = new Date().toISOString().slice(0, 10);
  return d > today ? today : d;
}
