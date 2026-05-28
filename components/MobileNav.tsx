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

  const items = [
    { href: "/", label: dict.nav.home, icon: HomeIcon },
    { href: "/doa", label: dict.nav.doa, icon: BookIcon },
    { href: "/parenting", label: dict.nav.parenting, icon: HeartIcon },
    { href: "/blog", label: dict.nav.blog, icon: PenIcon },
  ];

  function isActive(href: string) {
    if (href === "/") return rel === "/" || rel === "";
    return rel === href || rel.startsWith(`${href}/`);
  }

  return (
    <nav
      aria-label="Mobile"
      className="fixed inset-x-0 bottom-0 z-40 border-t border-hairline bg-paper/95 backdrop-blur md:hidden"
    >
      <ul className="mx-auto flex max-w-md items-stretch justify-around">
        {items.map((it) => {
          const Icon = it.icon;
          const active = isActive(it.href);
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
function HeartIcon({ filled }: IconProps) {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill={filled ? "currentColor" : "none"} stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M12 21s-7-4.5-9.3-9.1A5.4 5.4 0 0 1 7.1 4.4 5 5 0 0 1 12 7a5 5 0 0 1 4.9-2.6 5.4 5.4 0 0 1 4.4 7.5C19 16.5 12 21 12 21Z" />
    </svg>
  );
}
function PenIcon({ filled }: IconProps) {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill={filled ? "currentColor" : "none"} stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M4 20h4l10-10-4-4L4 16Z" /><path d="m13.5 6.5 4 4" />
    </svg>
  );
}
