import Link from "next/link";
import { notFound } from "next/navigation";
import { type Locale, isLocale, locales, pathFor } from "@/lib/i18n/config";
import { getDictionary } from "@/lib/i18n/dictionaries";
import { buildMetadata } from "@/lib/seo/metadata";
import { Header } from "@/components/Header";
import { MobileNav } from "@/components/MobileNav";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbSchema, graph } from "@/lib/seo/schemas";
import { getAllApps, getAppBySlug } from "@/lib/content/apps";

export async function generateStaticParams() {
  // Only embedded apps get an in-site page; external ones link out from the hub.
  return locales.flatMap((locale) =>
    getAllApps()
      .filter((a) => a.mode === "embed")
      .map((a) => ({ locale, slug: a.slug }))
  );
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  if (!isLocale(locale)) return {};
  const app = getAppBySlug(slug);
  if (!app || app.mode !== "embed") return {};
  return buildMetadata({
    locale,
    path: `/apps/${slug}`,
    title: app.title[locale],
    description: app.description[locale],
  });
}

export default async function AppEmbed({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  if (!isLocale(locale)) notFound();
  const l = locale as Locale;
  const dict = getDictionary(l);
  const app = getAppBySlug(slug);
  if (!app || app.mode !== "embed") notFound();

  return (
    <>
      <Header locale={l} currentPath="/apps" />
      <main id="main" className="mx-auto max-w-6xl px-5 pb-24 pt-6 sm:px-8 md:pb-10">
        <nav aria-label="Breadcrumb" className="mb-4 text-xs text-whisper">
          <Link href={pathFor(l)} className="hover:text-ink">
            {dict.nav.home}
          </Link>{" "}
          /{" "}
          <Link href={pathFor(l, "/apps")} className="hover:text-ink">
            {dict.nav.apps}
          </Link>{" "}
          / <span className="text-ink">{app.title[l]}</span>
        </nav>
        <div className="overflow-hidden rounded-2xl border border-mist bg-paper shadow-sm">
          <iframe
            src={app.url}
            title={app.title[l]}
            loading="lazy"
            className="h-[calc(100dvh-9rem)] min-h-[520px] w-full border-0"
            // The app runs from its own origin (cross-origin → already isolated
            // from this site); it needs script execution + blob downloads for
            // its PDF/SVG export, so we intentionally do not sandbox it.
          />
        </div>
        <p className="mt-3 text-center text-xs text-whisper">
          {l === "id" ? (
            <>
              Tidak tampil dengan baik?{" "}
              <a href={app.url} target="_blank" rel="noopener" className="font-semibold text-sage-deep hover:underline">
                Buka di tab baru →
              </a>
            </>
          ) : (
            <>
              Not showing properly?{" "}
              <a href={app.url} target="_blank" rel="noopener" className="font-semibold text-sage-deep hover:underline">
                Open in a new tab →
              </a>
            </>
          )}
        </p>
      </main>
      <MobileNav locale={l} />
      <JsonLd
        data={graph(
          breadcrumbSchema(l, [
            { name: dict.nav.home, path: "/" },
            { name: dict.nav.apps, path: "/apps" },
            { name: app.title[l], path: `/apps/${slug}` },
          ])
        )}
      />
    </>
  );
}
