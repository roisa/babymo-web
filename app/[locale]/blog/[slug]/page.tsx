import Link from "next/link";
import { notFound } from "next/navigation";
import { type Locale, isLocale, locales, pathFor } from "@/lib/i18n/config";
import { getDictionary } from "@/lib/i18n/dictionaries";
import { buildMetadata } from "@/lib/seo/metadata";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { MobileNav } from "@/components/MobileNav";
import { JsonLd } from "@/components/JsonLd";
import { blogPostingSchema, breadcrumbSchema, graph } from "@/lib/seo/schemas";
import { getAllBlogPosts, getBlogPostBySlug } from "@/lib/content/blog";

export async function generateStaticParams() {
  const out: { locale: string; slug: string }[] = [];
  for (const locale of locales) {
    for (const p of getAllBlogPosts()) out.push({ locale, slug: p.slug });
  }
  return out;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  if (!isLocale(locale)) return {};
  const post = getBlogPostBySlug(slug);
  if (!post) return {};
  return buildMetadata({
    locale,
    path: `/blog/${slug}`,
    title: post.title[locale],
    description: post.excerpt[locale],
    type: "article",
  });
}

export default async function BlogDetail({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  if (!isLocale(locale)) notFound();
  const l = locale as Locale;
  const post = getBlogPostBySlug(slug);
  if (!post) notFound();
  const dict = getDictionary(l);

  return (
    <>
      <Header locale={l} currentPath={`/blog/${slug}`} />
      <main className="mx-auto max-w-3xl px-5 pb-24 pt-10 sm:px-8 sm:pt-14 md:pb-16">
        <nav aria-label="Breadcrumb" className="mb-6 text-xs text-whisper">
          <Link href={pathFor(l)} className="hover:text-ink">
            {dict.nav.home}
          </Link>{" "}
          /{" "}
          <Link href={pathFor(l, "/blog")} className="hover:text-ink">
            {dict.nav.blog}
          </Link>{" "}
          / <span className="text-ink">{post.title[l]}</span>
        </nav>

        <header className="mb-10">
          <div className="text-[11px] font-semibold uppercase tracking-wider text-sage-deep">
            {post.tags.join(" · ")}
          </div>
          <h1 className="mt-3 font-serif text-3xl font-medium leading-tight tracking-tight text-ink sm:text-4xl">
            {post.title[l]}
          </h1>
          <div className="mt-4 flex flex-wrap items-center gap-2 text-xs text-whisper">
            <span>
              {dict.blog.by} <strong className="text-ink">{post.author}</strong>
            </span>
            <span>·</span>
            <time dateTime={post.published}>{post.published}</time>
            <span>·</span>
            <span>
              {post.readingTimeMin} {dict.blog.readingTime}
            </span>
          </div>
        </header>

        <article
          className="prose"
          dangerouslySetInnerHTML={{ __html: post.body[l] }}
        />
      </main>

      <Footer locale={l} currentPath={`/blog/${slug}`} />
      <MobileNav locale={l} />

      <JsonLd
        data={graph(
          breadcrumbSchema(l, [
            { name: dict.nav.home, path: "/" },
            { name: dict.nav.blog, path: "/blog" },
            { name: post.title[l], path: `/blog/${slug}` },
          ]),
          blogPostingSchema(l, post)
        )}
      />
    </>
  );
}
