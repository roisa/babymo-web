import Link from "next/link";
import { type Locale, pathFor } from "@/lib/i18n/config";
import { getDictionary } from "@/lib/i18n/dictionaries";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { MobileNav } from "@/components/MobileNav";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbSchema, graph } from "@/lib/seo/schemas";

export interface Crumb {
  name: string;
  path: string;
}

/**
 * Standard page shell for the interactive quiz/game pages: header, breadcrumb,
 * footer, mobile nav, and breadcrumb JSON-LD. Extra structured data can be
 * passed via `extraSchema` (merged into the same @graph).
 */
export function GameLayout({
  locale,
  currentPath,
  trail,
  extraSchema = [],
  children,
}: {
  locale: Locale;
  currentPath: string;
  /** Breadcrumb trail excluding Home (Home is prepended automatically). */
  trail: Crumb[];
  extraSchema?: Record<string, unknown>[];
  children: React.ReactNode;
}) {
  const dict = getDictionary(locale);
  const fullTrail: Crumb[] = [{ name: dict.nav.home, path: "/" }, ...trail];

  return (
    <>
      <Header locale={locale} currentPath={currentPath} />
      <main
        id="main"
        className="mx-auto max-w-5xl overflow-x-clip px-5 pb-28 pt-10 sm:px-8 sm:pt-14 md:pb-16"
      >
        <nav aria-label="Breadcrumb" className="mb-6 text-xs text-whisper">
          {fullTrail.map((c, i) => (
            <span key={c.path}>
              {i > 0 && " / "}
              {i < fullTrail.length - 1 ? (
                <Link href={pathFor(locale, c.path)} className="hover:text-ink">
                  {c.name}
                </Link>
              ) : (
                <span className="text-ink">{c.name}</span>
              )}
            </span>
          ))}
        </nav>
        {children}
      </main>
      <Footer locale={locale} currentPath={currentPath} />
      <MobileNav locale={locale} />
      <JsonLd
        data={graph(breadcrumbSchema(locale, fullTrail), ...extraSchema)}
      />
    </>
  );
}
