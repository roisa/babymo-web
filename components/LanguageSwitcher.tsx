"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { type Locale, locales, localeShort, pathFor } from "@/lib/i18n/config";
import { saveLangPref } from "@/lib/i18n/pref";

type Props = {
  currentLocale: Locale;
  /** Current path WITHOUT the locale prefix, e.g. "/doa/sebelum-tidur" */
  path: string;
  variant?: "compact" | "inline";
};

export function LanguageSwitcher({ currentLocale, path, variant = "compact" }: Props) {
  // Keep the visitor on the exact page they're reading (e.g. a single puzzle
  // or du'a), not just the section hub passed in as `path`.
  const pathname = usePathname();
  const prefix = `/${currentLocale}`;
  const here =
    pathname && (pathname === prefix || pathname.startsWith(`${prefix}/`))
      ? pathname.slice(prefix.length) || "/"
      : path;
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
            href={pathFor(l, here)}
            hrefLang={l}
            onClick={() => saveLangPref(l)}
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
