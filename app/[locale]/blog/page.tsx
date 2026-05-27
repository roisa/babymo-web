import Link from "next/link";
import { notFound } from "next/navigation";
import { type Locale, isLocale, locales, pathFor, absoluteUrl } from "@/lib/i18n/config";
import { getDictionary } from "@/lib/i18n/dictionaries";
import { buildMetadata } from "@/lib/seo/metadata";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { MobileNav } from "@/components/MobileNav";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbSchema, graph, itemListSchema } from "@/lib/seo/schemas";
import { getAllBlogPosts } from "@/lib/content/blog";

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
    path: "/blog",
    title: dict.blog.indexTitle,
    description: dict.blog.indexDescription,
  });
}

export default async function BlogIndex({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const l = locale as Locale;
  const dict = getDictionary(l);
  const posts = getAllBlogPosts();

  return (
    <>
      <Header locale={l} currentPath="/blog" />
      <main className="mx-auto max-w-5xl px-5 pb-24 pt-12 sm:px-8 sm:pt-16 md:pb-16">
        <nav aria-label="Breadcrumb" className="mb-6 text-xs text-whisper">
          <Link href={pathFor(l)} className="hover:text-ink">
            {dict.nav.home}
          </Link>{" "}
          / <span className="text-ink">{dict.nav.blog}</span>
        </nav>
        <header className="max-w-2xl">
          <h1 className="font-serif text-3xl font-medium tracking-tight text-ink sm:text-4xl">
            {dict.blog.indexTitle}
          </h1>
          <p className="mt-3 text-base leading-relaxed text-whisper">
            {dict.blog.indexDescription}
          </p>
        </header>
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {posts.map((p) => (
            <Link
              key={p.slug}
              href={pathFor(l, `/blog/${p.slug}`)}
              className="group rounded-2xl border border-mist bg-paper p-6 transition hover:-translate-y-0.5 hover:border-sage/40"
            >
              <div className="text-[11px] font-semibold uppercase tracking-wider text-sage-deep">
                {p.tags[0]}
              </div>
              <h2 className="mt-2 font-serif text-xl font-semibold leading-snug text-ink group-hover:text-sage-deep">
                {p.title[l]}
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-whisper">
                {p.excerpt[l]}
              </p>
              <div className="mt-4 flex items-center gap-3 text-xs text-whisper">
                <time dateTime={p.published}>{p.published}</time>
                <span>·</span>
                <span>
                  {p.readingTimeMin} {dict.blog.readingTime}
                </span>
              </div>
            </Link>
          ))}
        </div>
      </main>
      <Footer locale={l} currentPath="/blog" />
      <MobileNav locale={l} />
      <JsonLd
        data={graph(
          breadcrumbSchema(l, [
            { name: dict.nav.home, path: "/" },
            { name: dict.nav.blog, path: "/blog" },
          ]),
          itemListSchema(
            l,
            dict.blog.indexTitle,
            posts.map((p) => ({
              name: p.title[l],
              url: absoluteUrl(l, `/blog/${p.slug}`),
            }))
          )
        )}
      />
    </>
  );
}
