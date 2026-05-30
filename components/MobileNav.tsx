"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { type Locale, pathFor } from "@/lib/i18n/config";
import { getDictionary } from "@/lib/i18n/dictionaries";

type Props = { locale: Locale };

export function MobileNav({ locale }: Props) {
  const dict = getDictionary(locale);
  const pathname = usePathname() || "";
  // Strip the basePath + /locale prefix to get the app-relative path.
  // e.g. "/babymo-web/id/doa/sebelum-tidur" → "/doa/sebelum-tidur"
  const rel = pathname.replace(/^.*?\/(id|en)(?=\/|$)/, "") || "/";

  // Five outcome tabs. `match` lets a tab stay highlighted when the user is on
  // one of its deep sub-pages (e.g. /hadith lights up Learn).
  const items: { href: string; label: string; icon: (p: IconProps) => React.JSX.Element; match: string[] }[] = [
    { href: "/", label: dict.nav.home, icon: HomeIcon, match: ["/"] },
    { href: "/doa", label: dict.nav.doa, icon: BookIcon, match: ["/doa"] },
    {
      href: "/permainan",
      label: dict.nav.play ?? "Play",
      icon: GameIcon,
      match: ["/play", "/permainan", "/apps"],
    },
    {
      href: "/learn",
      label: dict.nav.learn ?? "Learn",
      icon: LearnIcon,
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
    { href: "/momen", label: dict.nav.watch ?? "Watch", icon: WatchIcon, match: ["/watch", "/momen"] },
  ];

  function isActive(match: string[]) {
    return match.some((href) =>
      href === "/" ? rel === "/" || rel === "" : rel === href || rel.startsWith(`${href}/`)
    );
  }

  return (
    <nav
      aria-label="Mobile"
      className="fixed inset-x-0 bottom-0 z-40 border-t border-hairline bg-paper md:hidden"
      style={{
        paddingBottom: "env(safe-area-inset-bottom)",
        // Promote to its own layer + solid (no backdrop-blur): stops the
        // fixed bar from detaching/floating during momentum scroll in
        // iOS in-app webviews (Gojek/IG/etc.).
        transform: "translateZ(0)",
      }}
    >
      <ul className="mx-auto flex max-w-md items-stretch justify-around">
        {items.map((it) => {
          const Icon = it.icon;
          const active = isActive(it.match);
          return (
            <li key={it.href} className="flex-1">
              <Link
                href={pathFor(locale, it.href)}
                aria-current={active ? "page" : undefined}
                className={`relative flex flex-col items-center gap-1 py-2.5 text-[11px] font-medium transition ${
                  active ? "text-brave-deep" : "text-whisper active:text-ink"
                }`}
              >
                {active && (
                  <span className="absolute top-0 h-0.5 w-8 rounded-full bg-brave" />
                )}
                <Icon filled={active} />
                {it.label}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

type IconProps = { filled?: boolean };

function HomeIcon({ filled }: IconProps) {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill={filled ? "currentColor" : "none"} stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M3 11.5 12 4l9 7.5" /><path d="M5 10v10h14V10" />
    </svg>
  );
}
function BookIcon({ filled }: IconProps) {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill={filled ? "currentColor" : "none"} stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M4 4h11a3 3 0 0 1 3 3v13" /><path d="M4 4v15a2 2 0 0 0 2 2h12" />
    </svg>
  );
}
function LearnIcon({ filled }: IconProps) {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill={filled ? "currentColor" : "none"} stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M12 4 2.5 9 12 14l9.5-5L12 4Z" /><path d="M6 11v5.5c0 .8 2.7 2.5 6 2.5s6-1.7 6-2.5V11" /><path d="M21.5 9v5" />
    </svg>
  );
}
function WatchIcon({ filled }: IconProps) {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill={filled ? "currentColor" : "none"} stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <rect x="2.5" y="4.5" width="19" height="13" rx="2.5" /><path d="M8 21h8" /><path d="m10.5 8.5 4 2.5-4 2.5V8.5Z" fill={filled ? "var(--paper, #fff)" : "currentColor"} stroke="none" />
    </svg>
  );
}
function GameIcon({ filled }: IconProps) {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill={filled ? "currentColor" : "none"} stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M6 12h4M8 10v4" /><circle cx="15.5" cy="11" r="0.6" fill="currentColor" stroke="none" /><circle cx="18" cy="13" r="0.6" fill="currentColor" stroke="none" />
      <path d="M17.5 6H6.5a4.5 4.5 0 0 0-4.4 3.6l-1 5A3 3 0 0 0 4 18c1 0 1.8-.5 2.4-1.3L7.5 15h9l1.1 1.7c.6.8 1.4 1.3 2.4 1.3a3 3 0 0 0 2.9-3.4l-1-5A4.5 4.5 0 0 0 17.5 6Z" />
    </svg>
  );
}
