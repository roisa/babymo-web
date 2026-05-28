import Link from "next/link";
import Image from "next/image";
import { type Locale, asset, pathFor } from "@/lib/i18n/config";
import { getDictionary } from "@/lib/i18n/dictionaries";
import { LanguageSwitcher } from "./LanguageSwitcher";
import { SearchOverlay } from "./SearchOverlay";

type Props = {
  locale: Locale;
  currentPath: string;
};

export function Header({ locale, currentPath }: Props) {
  const dict = getDictionary(locale);
  const items: { href: string; label: string }[] = [
    { href: "/doa", label: dict.nav.doa },
    { href: "/hadith", label: dict.nav.hadith ?? "Hadith" },
    { href: "/parenting", label: dict.nav.parenting ?? "Parenting" },
    { href: "/catatan", label: dict.nav.catatan ?? "Catatan" },
    { href: "/blog", label: dict.nav.blog },
    { href: "/permainan", label: dict.nav.games },
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
          <span className="font-serif text-[17px] font-medium tracking-tight">
            Baby Mo
          </span>
        </Link>

        <nav aria-label="Primary" className="hidden md:block">
          <ul className="flex items-center gap-0.5">
            {items.map((it) => {
              const isActive =
                currentPath === it.href ||
                currentPath.startsWith(`${it.href}/`);
              return (
                <li key={it.href}>
                  <Link
                    href={pathFor(locale, it.href)}
                    aria-current={isActive ? "page" : undefined}
                    className={
                      isActive
                        ? "tap inline-flex items-center rounded-full bg-brave-soft px-3.5 py-1.5 text-[13.5px] font-semibold text-brave-deep shadow-[inset_0_0_0_1px_rgba(31,139,63,0.18)]"
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
          <LanguageSwitcher currentLocale={locale} path={currentPath} />
        </div>
      </div>
    </header>
  );
}
