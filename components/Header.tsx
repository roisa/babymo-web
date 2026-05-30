import Link from "next/link";
import Image from "next/image";
import { type Locale, asset, pathFor } from "@/lib/i18n/config";
import { getDictionary } from "@/lib/i18n/dictionaries";
import { LanguageSwitcher } from "./LanguageSwitcher";
import { SearchOverlay } from "./SearchOverlay";
import { ThemeToggle } from "./ThemeToggle";

type Props = {
  locale: Locale;
  currentPath: string;
};

export function Header({ locale, currentPath }: Props) {
  const dict = getDictionary(locale);
  // Outcome-based primary nav (Home lives on the logo). Every content format
  // sits as a sub-section inside one of these four destinations.
  const items: { href: string; label: string; match: string[] }[] = [
    { href: "/doa", label: dict.nav.doa, match: ["/doa"] },
    {
      href: "/permainan",
      label: dict.nav.play ?? "Play",
      match: ["/play", "/permainan", "/apps"],
    },
    {
      href: "/learn",
      label: dict.nav.learn ?? "Learn",
      match: [
        "/learn",
        "/hadith",
        "/kisah",
        "/surat",
        "/asmaul-husna",
        "/kalender",
        "/parenting",
        "/blog",
        "/catatan",
      ],
    },
    { href: "/momen", label: dict.nav.watch ?? "Watch", match: ["/watch", "/momen"] },
  ];
  const parentsActive = currentPath.startsWith("/orangtua");

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
          <span className="font-serif text-[17px] font-medium tracking-tight">
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
                    className={
                      isActive
                        ? "tap inline-flex items-center rounded-full bg-brave-soft px-3.5 py-1.5 text-[13.5px] font-semibold text-brave-deep shadow-[inset_0_0_0_1px_rgba(30,140,83,0.18)]"
                        : "tap inline-flex items-center rounded-full px-3 py-1.5 text-[13.5px] font-medium text-whisper transition hover:bg-paper-2 hover:text-ink"
                    }
                  >
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
          <Link
            href={pathFor(locale, "/orangtua")}
            aria-label={dict.nav.parents ?? "For Parents"}
            aria-current={parentsActive ? "page" : undefined}
            title={dict.nav.parents ?? "For Parents"}
            className={
              parentsActive
                ? "tap inline-flex h-9 items-center gap-1.5 rounded-full bg-brave-soft px-2.5 text-brave-deep"
                : "tap inline-flex h-9 items-center gap-1.5 rounded-full px-2.5 text-whisper transition hover:bg-paper-2 hover:text-ink"
            }
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
              <circle cx="12" cy="8" r="3.2" />
              <path d="M5.5 20a6.5 6.5 0 0 1 13 0" />
            </svg>
            <span className="hidden text-[13px] font-medium sm:inline">
              {dict.nav.parents ?? "For Parents"}
            </span>
          </Link>
        </div>
      </div>
    </header>
  );
}
