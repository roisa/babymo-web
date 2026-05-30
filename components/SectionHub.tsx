import Link from "next/link";
import { type Locale, pathFor } from "@/lib/i18n/config";
import { getDictionary } from "@/lib/i18n/dictionaries";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { MobileNav } from "@/components/MobileNav";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbSchema, graph } from "@/lib/seo/schemas";

export type SectionItem = {
  emoji: string;
  /** Already-localized title. */
  title: string;
  /** Already-localized one-line description. */
  description: string;
  /** App-relative path ("/hadith") or absolute URL when external. */
  href: string;
  external?: boolean;
  /** Optional small badge, e.g. "Baru" / "Soon". */
  badge?: string;
};

type Props = {
  locale: Locale;
  /** App-relative path of this hub, used for nav active-state + breadcrumb. */
  currentPath: string;
  /** Localized hub title + description. */
  title: string;
  description: string;
  /** Localized breadcrumb label for this hub. */
  crumbLabel: string;
  items: SectionItem[];
};

/**
 * Outcome-based hub page (Learn / Play / Watch / For Parents). Renders the
 * standard page shell and a grid of section cards that link to the existing
 * deep-content pages — so navigation is organized around goals while the
 * underlying content URLs stay exactly where they are.
 */
export function SectionHub({
  locale,
  currentPath,
  title,
  description,
  crumbLabel,
  items,
}: Props) {
  const l = locale;
  const dict = getDictionary(l);

  return (
    <>
      <Header locale={l} currentPath={currentPath} />
      <main id="main" className="mx-auto max-w-6xl px-5 pb-24 pt-12 sm:px-8 sm:pt-16 md:pb-16">
        <nav aria-label="Breadcrumb" className="mb-6 text-xs text-whisper">
          <Link href={pathFor(l)} className="hover:text-ink">
            {dict.nav.home}
          </Link>{" "}
          / <span className="text-ink">{crumbLabel}</span>
        </nav>
        <header className="max-w-2xl">
          <h1 className="font-serif text-3xl font-medium tracking-tight text-ink sm:text-4xl">
            {title}
          </h1>
          <p className="mt-3 text-base leading-relaxed text-whisper">{description}</p>
        </header>
        <ul className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((it) => {
            const cardClass =
              "group flex h-full flex-col overflow-hidden rounded-2xl border border-mist bg-paper transition hover:-translate-y-0.5 hover:border-sage/40";
            const inner = (
              <>
                <div className="relative flex aspect-[1200/630] w-full items-center justify-center overflow-hidden bg-gradient-to-br from-sage-soft to-clay-soft">
                  <span className="text-6xl transition duration-300 group-hover:scale-110">
                    {it.emoji}
                  </span>
                  {it.badge && (
                    <span className="absolute right-3 top-3 rounded-full bg-brave-soft px-2.5 py-1 text-[11px] font-semibold text-brave-deep">
                      {it.badge}
                    </span>
                  )}
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <h2 className="font-serif text-lg font-semibold text-ink group-hover:text-sage-deep">
                    {it.title}
                  </h2>
                  <p className="mt-1.5 flex-1 text-sm leading-relaxed text-whisper">
                    {it.description}
                  </p>
                  <span className="mt-4 inline-flex items-center gap-1 text-xs font-semibold text-sage-deep">
                    {it.external ? (l === "id" ? "Buka" : "Open") : l === "id" ? "Lihat" : "View"} →
                  </span>
                </div>
              </>
            );
            return (
              <li key={it.href}>
                {it.external ? (
                  <a href={it.href} target="_blank" rel="noopener" className={cardClass}>
                    {inner}
                  </a>
                ) : (
                  <Link href={pathFor(l, it.href)} className={cardClass}>
                    {inner}
                  </Link>
                )}
              </li>
            );
          })}
        </ul>
      </main>
      <Footer locale={l} currentPath={currentPath} />
      <MobileNav locale={l} />
      <JsonLd
        data={graph(
          breadcrumbSchema(l, [
            { name: dict.nav.home, path: "/" },
            { name: crumbLabel, path: currentPath },
          ])
        )}
      />
    </>
  );
}
