import Link from "next/link";
import Image from "next/image";
import { type Locale, asset, pathFor } from "@/lib/i18n/config";
import { getDictionary } from "@/lib/i18n/dictionaries";
import { LanguageSwitcher } from "./LanguageSwitcher";
import { SearchOverlay } from "./SearchOverlay";
import { ThemeToggle } from "./ThemeToggle";
import type { SectionKey } from "@/lib/sections";
import { AppIcon } from "./AppIcon";

type Props = {
  locale: Locale;
  currentPath: string;
};

export function Header({ locale, currentPath }: Props) {
  const dict = getDictionary(locale);
  // Outcome-based primary nav (Home lives on the logo). Every content format
  // sits as a sub-section inside one of these destinations.
  const items: { href: string; label: string; sec: SectionKey; match: string[] }[] = [
    { href: "/momen", label: locale === "id" ? "Momen" : "Moments", sec: "momen", match: ["/momen", "/watch"] },
    { href: "/cerita", label: dict.nav.catatan, sec: "cerita", match: ["/cerita"] },
    {
      href: "/permainan",
      label: dict.nav.play ?? "Play",
      sec: "main",
      match: ["/play", "/permainan", "/apps", "/kuis"],
    },
    {
      href: "/learn",
      label: dict.nav.learn ?? "Learn",
      sec: "belajar",
      match: [
        "/learn",
        "/doa",
        "/dzikir",
        "/sholat",
        "/puasa",
        "/hadith",
        "/kisah",
        "/surat",
        "/asmaul-husna",
        "/kalender",
        "/parenting",
        "/blog",
      ],
    },
  ];

  return (
    <header className="glass sticky top-0 z-40 border-b border-hairline">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-3 focus:top-3 focus:z-50 focus:rounded-full focus:bg-sage-deep focus:px-3 focus:py-1.5 focus:text-[12px] focus:font-semibold focus:text-paper"
      >
        {locale === "id" ? "Lewati ke konten" : "Skip to content"}
      </a>
      <div className="mx-auto flex h-14 max-w-6xl items-center justify-between px-5 sm:h-16 sm:px-7">
        <Link
          href={pathFor(locale)}
          className="tap flex items-center gap-2.5 text-ink"
          aria-label="Baby Mo"
        >
          <Image
            src={asset("/assets/logo-96.png")}
            alt=""
            width={32}
            height={32}
            priority
            className="h-8 w-8"
          />
          <span className="font-display text-[19px] tracking-tight">
            Baby Mo
          </span>
        </Link>

        <nav aria-label="Primary" className="hidden md:block">
          <ul className="flex items-center gap-0.5">
            {items.map((it) => {
              const isActive = it.match.some(
                (m) => currentPath === m || currentPath.startsWith(`${m}/`)
              );
              return (
                <li key={it.href}>
                  <Link
                    href={pathFor(locale, it.href)}
                    aria-current={isActive ? "page" : undefined}
                    className={`nav-sec sec-${it.sec} tap inline-flex items-center gap-1.5 rounded-full px-3.5 py-1.5 text-[14px] font-bold transition`}
                  >
                    <AppIcon name={it.sec} size={22} />
                    {it.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="flex items-center gap-2">
          <SearchOverlay locale={locale} />
          <ThemeToggle locale={locale} />
          <LanguageSwitcher currentLocale={locale} path={currentPath} />
        </div>
      </div>
    </header>
  );
}
