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
    { href: "/hadith", label: dict.nav.hadith ?? "Hadith" },
    { href: "/parenting", label: dict.nav.parenting ?? "Parenting" },
    { href: "/blog", label: dict.nav.blog },
    { href: "/permainan", label: dict.nav.games },
  ];

  return (
    <header className="glass sticky top-0 z-40 border-b border-hairline">
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
            {items.map((it) => (
              <li key={it.href}>
                <Link
                  href={pathFor(locale, it.href)}
                  className="tap rounded-full px-3 py-1.5 text-[13.5px] font-medium text-whisper transition hover:text-ink"
                >
                  {it.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-2">
          <LanguageSwitcher currentLocale={locale} path={currentPath} />
        </div>
      </div>
    </header>
  );
}
