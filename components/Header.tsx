import Link from "next/link";
import Image from "next/image";
import { type Locale, asset, pathFor } from "@/lib/i18n/config";
import { getDictionary } from "@/lib/i18n/dictionaries";
import { LanguageSwitcher } from "./LanguageSwitcher";

type Props = {
  locale: Locale;
  currentPath: string;
};

export function Header({ locale, currentPath }: Props) {
  const dict = getDictionary(locale);
  const items: { href: string; label: string }[] = [
    { href: "/doa", label: dict.nav.doa },
    { href: "/blog", label: dict.nav.blog },
    { href: "/permainan", label: dict.nav.games },
    { href: "/faq", label: dict.nav.faq },
    { href: "/tentang", label: dict.nav.about },
  ];

  return (
    <header className="sticky top-0 z-40 border-b border-mist/70 bg-paper/85 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:px-8">
        <Link
          href={pathFor(locale)}
          className="flex items-center gap-2.5 text-ink"
          aria-label="Baby Mo"
        >
          <Image
            src={asset("/assets/logo-96.png")}
            alt=""
            width={36}
            height={36}
            priority
            className="h-9 w-9"
          />
          <span className="font-serif text-lg font-semibold tracking-tight">
            Baby Mo
          </span>
        </Link>

        <nav aria-label="Primary" className="hidden md:block">
          <ul className="flex items-center gap-1">
            {items.map((it) => (
              <li key={it.href}>
                <Link
                  href={pathFor(locale, it.href)}
                  className="rounded-full px-3 py-1.5 text-sm font-medium text-whisper transition hover:bg-mist/50 hover:text-ink"
                >
                  {it.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-3">
          <LanguageSwitcher currentLocale={locale} path={currentPath} />
          <Link
            href="https://www.youtube.com/@babymo.official"
            target="_blank"
            rel="noopener"
            className="hidden rounded-full bg-ink px-4 py-1.5 text-xs font-semibold text-paper transition hover:bg-sage-deep sm:inline-flex"
          >
            YouTube
          </Link>
        </div>
      </div>
    </header>
  );
}
