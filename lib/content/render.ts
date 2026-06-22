import { type Locale, basePath } from "../i18n/config";

/**
 * Convert internal `/_/...` links inside HTML body strings into proper paths
 * that respect the current locale and basePath.
 *
 * Authors write:   <a href="/_/doa/sebelum-tidur/">…</a>
 * Renders as (ID): <a href="/babymo-web/id/doa/sebelum-tidur/">…</a>
 * Renders as (EN): <a href="/babymo-web/en/doa/sebelum-tidur/">…</a>
 *
 * Survives the eventual cutover to babymo.id (basePath becomes "").
 *
 * Images use a separate prefix that is NOT locale-specific:
 *   <img src="/_img/blog/foo.jpg"> → <img src="${basePath}/blog/foo.jpg">
 */
export function renderBody(body: string, locale: Locale): string {
  return body
    .replace(/href="\/_\//g, `href="${basePath}/${locale}/`)
    .replace(/src="\/_img\//g, `src="${basePath}/`);
}
