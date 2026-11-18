import { APP_STORE_URL } from "@/lib/content/store-pages";

/**
 * "Download on the App Store" badge for babymo.id pages (black, Apple's style).
 * Pass `lang` on the /[locale] pages; leave it out on the standalone store
 * pages (/support), which show the data-l="id"/"en" span for the active language.
 * Renders nothing until APP_STORE_URL is set.
 */
export default function AppStoreBadge({ lang, className }: { lang?: "id" | "en"; className?: string }) {
  if (!APP_STORE_URL) return null;
  const small = { id: "Unduh di", en: "Download on the" };
  return (
    <a
      href={APP_STORE_URL}
      className={className}
      aria-label={lang === "id" ? "Unduh Baby Mo di App Store" : "Download Baby Mo on the App Store"}
      style={{
        display: "inline-flex", alignItems: "center", gap: 10, minHeight: 56, padding: "8px 20px 8px 16px",
        borderRadius: 16, background: "#000", color: "#fff", textDecoration: "none",
        border: "1px solid rgba(255,255,255,.28)", boxShadow: "0 14px 30px -14px rgba(0,0,0,.6)",
      }}
    >
      <svg viewBox="0 0 24 24" width={28} height={28} aria-hidden="true" fill="currentColor">
        <path d="M16.37 12.3c-.02-2.22 1.82-3.29 1.9-3.34-1.04-1.52-2.65-1.72-3.22-1.75-1.36-.14-2.67.81-3.36.81-.7 0-1.76-.79-2.9-.77-1.49.02-2.87.87-3.64 2.2-1.56 2.7-.4 6.68 1.11 8.87.74 1.07 1.62 2.27 2.77 2.23 1.12-.05 1.54-.72 2.89-.72 1.34 0 1.73.72 2.9.7 1.2-.02 1.96-1.08 2.69-2.16.85-1.24 1.2-2.45 1.21-2.51-.03-.01-2.33-.89-2.35-3.56ZM14.17 5.78c.61-.75 1.03-1.78.92-2.81-.88.04-1.96.6-2.59 1.33-.57.65-1.07 1.71-.94 2.72.99.08 2-.5 2.61-1.24Z" />
      </svg>
      <span style={{ display: "block", textAlign: "left" }}>
        <small style={{ display: "block", fontSize: 11, fontWeight: 600, opacity: 0.85, lineHeight: 1 }}>
          {lang ? small[lang] : (<><span data-l="id">{small.id}</span><span data-l="en">{small.en}</span></>)}
        </small>
        <span style={{ display: "block", fontSize: 20, fontWeight: 700, lineHeight: 1.15, letterSpacing: "-.01em" }}>App Store</span>
      </span>
    </a>
  );
}
