import Link from "next/link";
import { type Locale, pathFor } from "@/lib/i18n/config";
import { getDictionary } from "@/lib/i18n/dictionaries";

type Props = { locale: Locale };

export function MobileNav({ locale }: Props) {
  const dict = getDictionary(locale);
  const items = [
    { href: "/", label: dict.nav.home, icon: HomeIcon },
    { href: "/doa", label: dict.nav.doa, icon: BookIcon },
    { href: "/permainan", label: dict.nav.games, icon: GameIcon },
    { href: "/blog", label: dict.nav.blog, icon: PenIcon },
  ];

  return (
    <nav
      aria-label="Mobile"
      className="fixed inset-x-0 bottom-0 z-40 border-t border-mist bg-paper/95 backdrop-blur md:hidden"
    >
      <ul className="mx-auto flex max-w-md items-stretch justify-around">
        {items.map((it) => {
          const Icon = it.icon;
          return (
            <li key={it.href} className="flex-1">
              <Link
                href={pathFor(locale, it.href)}
                className="flex flex-col items-center gap-1 py-2.5 text-[11px] font-medium text-whisper transition active:text-ink"
              >
                <Icon />
                {it.label}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

function HomeIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M3 11.5 12 4l9 7.5" /><path d="M5 10v10h14V10" />
    </svg>
  );
}
function BookIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M4 4h11a3 3 0 0 1 3 3v13" /><path d="M4 4v15a2 2 0 0 0 2 2h12" />
    </svg>
  );
}
function GameIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M6 9h4M8 7v4" /><circle cx="16" cy="11" r="1" /><path d="M3 13a5 5 0 0 1 5-5h8a5 5 0 0 1 5 5v1a4 4 0 0 1-7 2.6 4 4 0 0 1-4 0A4 4 0 0 1 3 14Z" />
    </svg>
  );
}
function PenIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M4 20h4l10-10-4-4L4 16Z" /><path d="m13.5 6.5 4 4" />
    </svg>
  );
}
