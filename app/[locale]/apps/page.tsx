import Link from "next/link";
import { notFound } from "next/navigation";
import { type Locale, isLocale, locales, pathFor } from "@/lib/i18n/config";
import { getDictionary } from "@/lib/i18n/dictionaries";
import { buildMetadata } from "@/lib/seo/metadata";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { MobileNav } from "@/components/MobileNav";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbSchema, graph } from "@/lib/seo/schemas";
import { getAllApps } from "@/lib/content/apps";

export async function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  const dict = getDictionary(locale);
  return buildMetadata({
    locale,
    path: "/apps",
    title: dict.pages.apps.title,
    description: dict.pages.apps.description,
  });
}

export default async function AppsIndex({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const l = locale as Locale;
  const dict = getDictionary(l);
  const apps = getAllApps();

  return (
    <>
      <Header locale={l} currentPath="/apps" />
      <main id="main" className="mx-auto max-w-6xl px-5 pb-24 pt-12 sm:px-8 sm:pt-16 md:pb-16">
        <nav aria-label="Breadcrumb" className="mb-6 text-xs text-whisper">
          <Link href={pathFor(l)} className="hover:text-ink">
            {dict.nav.home}
          </Link>{" "}
          / <span className="text-ink">{dict.nav.apps}</span>
        </nav>
        <header className="max-w-2xl">
          <h1 className="font-serif text-3xl font-medium tracking-tight text-ink sm:text-4xl">
            {dict.pages.apps.title}
          </h1>
          <p className="mt-3 text-base leading-relaxed text-whisper">
            {dict.pages.apps.description}
          </p>
        </header>
        <ul className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {apps.map((a) => {
            const isEmbed = a.mode === "embed";
            // Embedded apps open inside the site; external ones open in a new tab (like Games).
            const linkProps = isEmbed
              ? { href: pathFor(l, `/apps/${a.slug}`) }
              : { href: a.url, target: "_blank", rel: "noopener" };
            return (
              <li key={a.slug}>
                <Link
                  {...linkProps}
                  className="group flex h-full flex-col overflow-hidden rounded-2xl border border-mist bg-paper transition hover:-translate-y-0.5 hover:border-sage/40"
                >
                  <div className="relative flex aspect-[1200/630] w-full items-center justify-center overflow-hidden bg-gradient-to-br from-sage-soft to-clay-soft">
                    {a.image ? (
                      // eslint-disable-next-line @next/next/no-img-element
                      <img
                        src={a.image}
                        alt={a.title[l]}
                        loading="lazy"
                        width={1200}
                        height={630}
                        className="h-full w-full object-cover transition duration-300 group-hover:scale-[1.03]"
                      />
                    ) : (
                      <span className="text-6xl transition duration-300 group-hover:scale-110">
                        {a.emoji}
                      </span>
                    )}
                    <span className="absolute left-3 top-3 flex h-9 w-9 items-center justify-center rounded-xl bg-paper/90 text-xl shadow-sm backdrop-blur">
                      {a.emoji}
                    </span>
                  </div>
                  <div className="flex flex-1 flex-col p-6">
                    <h2 className="font-serif text-lg font-semibold text-ink group-hover:text-sage-deep">
                      {a.title[l]}
                    </h2>
                    <p className="mt-1.5 flex-1 text-sm leading-relaxed text-whisper">
                      {a.description[l]}
                    </p>
                    <span className="mt-4 inline-flex items-center gap-1 text-xs font-semibold text-sage-deep">
                      {l === "id" ? "Buka" : "Open"} →
                    </span>
                  </div>
                </Link>
              </li>
            );
          })}
        </ul>
      </main>
      <Footer locale={l} currentPath="/apps" />
      <MobileNav locale={l} />
      <JsonLd
        data={graph(
          breadcrumbSchema(l, [
            { name: dict.nav.home, path: "/" },
            { name: dict.nav.apps, path: "/apps" },
          ])
        )}
      />
    </>
  );
}
