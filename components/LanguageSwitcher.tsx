import Link from "next/link";
import { type Locale, locales, localeShort, pathFor } from "@/lib/i18n/config";

type Props = {
  currentLocale: Locale;
  /** Current path WITHOUT the locale prefix, e.g. "/doa/sebelum-tidur" */
  path: string;
  variant?: "compact" | "inline";
};

export function LanguageSwitcher({ currentLocale, path, variant = "compact" }: Props) {
  return (
    <div
      className={
        variant === "compact"
          ? "inline-flex items-center rounded-full border border-mist bg-paper p-0.5 text-xs font-semibold"
          : "inline-flex gap-2 text-sm"
      }
      role="group"
      aria-label="Language"
    >
      {locales.map((l) => {
        const active = l === currentLocale;
        return (
          <Link
            key={l}
            href={pathFor(l, path)}
            hrefLang={l}
            aria-current={active ? "true" : undefined}
            className={
              variant === "compact"
                ? `rounded-full px-2.5 py-1 transition ${
                    active
                      ? "bg-ink text-paper"
                      : "text-whisper hover:text-ink"
                  }`
                : `${active ? "font-semibold text-ink" : "text-whisper hover:text-ink"}`
            }
          >
            {localeShort[l]}
          </Link>
        );
      })}
    </div>
  );
}
