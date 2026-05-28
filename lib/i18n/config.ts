export const locales = ["id", "en"] as const;
export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "id";

export const localeNames: Record<Locale, string> = {
  id: "Bahasa Indonesia",
  en: "English",
};

export const localeShort: Record<Locale, string> = {
  id: "ID",
  en: "EN",
};

export const localeHtmlLang: Record<Locale, string> = {
  id: "id-ID",
  en: "en",
};

export function isLocale(value: string): value is Locale {
  return (locales as readonly string[]).includes(value);
}

export const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://roisa.github.io/babymo-web";

export const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "/babymo-web";

export function pathFor(locale: Locale, path: string = ""): string {
  const clean = path.startsWith("/") ? path : `/${path}`;
  return `/${locale}${clean === "/" ? "" : clean}`;
}

export function absoluteUrl(locale: Locale, path: string = ""): string {
  // Append a trailing slash to match `trailingSlash: true` and the
  // sitemap, so canonical / hreflang / JSON-LD URLs never disagree
  // with the actually-served URL.
  const p = pathFor(locale, path);
  return `${siteUrl}${p}${p.endsWith("/") ? "" : "/"}`;
}

/** Prefix a /public asset path with the current basePath.
 *  e.g. asset("/assets/logo.png") -> "/babymo-web/assets/logo.png" */
export function asset(path: string): string {
  const clean = path.startsWith("/") ? path : `/${path}`;
  return `${basePath}${clean}`;
}
