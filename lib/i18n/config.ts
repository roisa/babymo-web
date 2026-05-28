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

/**
 * Baby Mo's WhatsApp number (digits only, country code first).
 * Keep empty while the line is not yet registered on WhatsApp — every
 * chat link checks this and hides itself when it's blank, so we never
 * point people at a dead "isn't on WhatsApp" screen.
 */
export const whatsappNumber: string = "6282315971002";

/** Friendly opener pre-filled when someone taps a contact WhatsApp link. */
const WHATSAPP_GREETING: Record<Locale, string> = {
  id: "Assalamu'alaikum Tim Baby Mo! 😊 Saya menemukan Baby Mo di babymo.id dan ingin tahu lebih lanjut.",
  en: "Assalamu'alaikum Baby Mo Team! 😊 I found Baby Mo on babymo.id and would love to know more.",
};

/** wa.me link to Baby Mo's line with a pre-filled greeting. Empty string
 *  when no number is set, so callers can hide the link. */
export function whatsappUrl(locale: Locale): string {
  if (!whatsappNumber) return "";
  return `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(WHATSAPP_GREETING[locale])}`;
}

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
