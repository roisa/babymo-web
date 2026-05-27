import Link from "next/link";
import { notFound } from "next/navigation";
import { type Locale, absoluteUrl, isLocale, locales, pathFor } from "@/lib/i18n/config";
import { getDictionary } from "@/lib/i18n/dictionaries";
import { buildMetadata } from "@/lib/seo/metadata";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { MobileNav } from "@/components/MobileNav";
import { ShareBar } from "@/components/ShareBar";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbSchema, catatanSchema, graph } from "@/lib/seo/schemas";
import { getAllCatatan, getCatatanBySlug } from "@/lib/content/catatan";
import { getDoaBySlug } from "@/lib/content/doa";
import { getHadithBySlug } from "@/lib/content/hadith";
import { getParentingBySlug } from "@/lib/content/parenting";

export async function generateStaticParams() {
  const out: { locale: string; slug: string }[] = [];
  for (const locale of locales)
    for (const n of getAllCatatan()) out.push({ locale, slug: n.slug });
  return out;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  if (!isLocale(locale)) return {};
  const n = getCatatanBySlug(slug);
  if (!n) return {};
  return buildMetadata({
    locale,
    path: `/catatan/${slug}`,
    title: n.title[locale],
    description: n.hook[locale],
    type: "article",
  });
}

export default async function CatatanDetail({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  if (!isLocale(locale)) notFound();
  const l = locale as Locale;
  const n = getCatatanBySlug(slug);
  if (!n) notFound();
  const dict = getDictionary(l);

  const anchor = resolveAnchor(n.anchor, l);

  return (
    <>
      <Header locale={l} currentPath={`/catatan/${slug}`} />
      <main id="main" className="mx-auto max-w-2xl px-5 pb-28 pt-10 sm:px-7 sm:pt-14 md:pb-20">
        <nav aria-label="Breadcrumb" className="mb-5 text-[12px] text-whisper">
          <Link href={pathFor(l)} className="hover:text-ink">
            {dict.nav.home}
          </Link>{" "}
          /{" "}
          <Link href={pathFor(l, "/catatan")} className="hover:text-ink">
            {dict.nav.catatan}
          </Link>{" "}
          / <span className="text-ink">{n.title[l]}</span>
        </nav>

        <header className="mb-8">
          <div className="mb-4 flex flex-wrap items-center gap-2 text-[11px]">
            <span className="rounded-full bg-sage-soft px-2.5 py-0.5 font-semibold uppercase tracking-[0.1em] text-sage-deep">
              {dict.catatan.childChip[n.child]}
            </span>
            <span className="text-whisper">
              {formatDate(n.published, l)}
            </span>
            <span className="text-whisper">·</span>
            <span className="text-whisper">
              {n.readingTimeMin} {dict.blog.readingTime}
            </span>
          </div>
          <h1 className="font-display text-[36px] font-medium leading-[1.05] text-ink sm:text-[46px]">
            {n.title[l]}
          </h1>
          <p className="mt-4 text-[17px] leading-[1.6] text-whisper">
            {n.hook[l]}
          </p>
        </header>

        <div className="catatan-body">
          {renderBody(n.body[l])}
        </div>

        {/* Takeaway pull-quote */}
        <aside className="mt-10 rounded-[22px] border border-brave/20 bg-brave-soft/40 p-6 sm:p-8">
          <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-brave-deep">
            {dict.catatan.takeaway}
          </p>
          <p className="font-display mt-3 text-[19px] leading-[1.5] text-ink sm:text-[21px]">
            {n.takeaway[l]}
          </p>
          <p className="mt-4 text-[13px] text-whisper">— {dict.catatan.bySalman}</p>
        </aside>

        {/* Anchor link to the related doa / hadith / parenting */}
        {anchor && (
          <section className="mt-10">
            <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-whisper">
              {dict.catatan.relatedAnchor}
            </p>
            <Link
              href={pathFor(l, anchor.href)}
              className="lift tap mt-3 block rounded-[22px] border border-hairline bg-paper p-6 hover:border-brave/40"
            >
              <p className="text-[11px] font-semibold uppercase tracking-[0.1em] text-brave-deep">
                {anchor.kind}
              </p>
              <p className="font-serif mt-1 text-[17px] font-medium text-ink">
                {anchor.title}
              </p>
              <p className="mt-3 text-[13px] font-semibold text-brave-deep">
                {dict.catatan.readMore} →
              </p>
            </Link>
          </section>
        )}

        <hr className="my-12 border-hairline" />

        {/* Other notes */}
        <RelatedNotes currentSlug={n.slug} locale={l} />
      </main>

      <Footer locale={l} currentPath={`/catatan/${slug}`} />
      <MobileNav locale={l} />
      <ShareBar
        locale={l}
        title={n.title[l]}
        text={n.takeaway[l]}
        url={absoluteUrl(l, `/catatan/${slug}`)}
      />

      <JsonLd
        data={graph(
          breadcrumbSchema(l, [
            { name: dict.nav.home, path: "/" },
            { name: dict.nav.catatan, path: "/catatan" },
            { name: n.title[l], path: `/catatan/${slug}` },
          ]),
          catatanSchema(l, n),
        )}
      />
    </>
  );
}

function RelatedNotes({
  currentSlug,
  locale,
}: {
  currentSlug: string;
  locale: Locale;
}) {
  const dict = getDictionary(locale);
  const others = getAllCatatan()
    .filter((n) => n.slug !== currentSlug)
    .slice(0, 2);
  if (others.length === 0) return null;
  return (
    <div>
      <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-whisper">
        {locale === "id" ? "Catatan lain" : "Other notes"}
      </p>
      <div className="mt-4 grid gap-4 sm:grid-cols-2">
        {others.map((o) => (
          <Link
            key={o.slug}
            href={pathFor(locale, `/catatan/${o.slug}`)}
            className="lift tap group rounded-[20px] border border-hairline bg-paper p-5"
          >
            <span className="text-[10.5px] font-semibold uppercase tracking-[0.1em] text-sage-deep">
              {dict.catatan.childChip[o.child]}
            </span>
            <p className="font-display mt-2 text-[18px] font-medium leading-snug text-ink group-hover:text-brave-deep">
              {o.title[locale]}
            </p>
            <p className="mt-2 line-clamp-2 text-[13px] text-whisper">
              {o.hook[locale]}
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
}

function resolveAnchor(
  a: { type: "doa" | "hadith" | "parenting"; slug: string },
  locale: Locale,
): { href: string; title: string; kind: string } | null {
  if (a.type === "doa") {
    const d = getDoaBySlug(a.slug);
    if (!d) return null;
    return {
      href: `/doa/${a.slug}`,
      title: d.title[locale],
      kind: locale === "id" ? "Doa" : "Dua",
    };
  }
  if (a.type === "hadith") {
    const h = getHadithBySlug(a.slug);
    if (!h) return null;
    return {
      href: `/hadith/${a.slug}`,
      title: h.title[locale],
      kind: locale === "id" ? "Hadis" : "Hadith",
    };
  }
  const p = getParentingBySlug(a.slug);
  if (!p) return null;
  return {
    href: `/parenting/${a.slug}`,
    title: p.title[locale],
    kind: "Parenting",
  };
}

function formatDate(iso: string, locale: Locale): string {
  const d = new Date(iso);
  return d.toLocaleDateString(locale === "id" ? "id-ID" : "en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

/**
 * Tiny markdown renderer for catatan body. Supports:
 *   - Paragraphs (blank line separated)
 *   - Blockquotes (lines starting with "> ")
 *   - **bold** and *italic*
 *
 * No external dependencies. Keep it small — catatan are short.
 */
function renderBody(body: string): React.ReactNode {
  const blocks = body.trim().split(/\n\s*\n/);
  return blocks.map((block, i) => {
    if (block.startsWith("> ")) {
      const text = block
        .split("\n")
        .map((l) => l.replace(/^>\s?/, ""))
        .join(" ");
      return (
        <blockquote
          key={i}
          className="my-7 border-l-2 border-brave/50 pl-5 font-serif text-[18px] italic leading-[1.55] text-ink sm:text-[19px]"
        >
          {applyInline(text)}
        </blockquote>
      );
    }
    return (
      <p
        key={i}
        className="my-5 text-[17px] leading-[1.75] text-ink first:mt-0"
      >
        {applyInline(block)}
      </p>
    );
  });
}

function applyInline(text: string): React.ReactNode {
  // Process **bold** then *italic*. Keep it dumb and safe — no HTML.
  const tokens: { type: "text" | "b" | "i"; value: string }[] = [];
  let rest = text;
  while (rest.length > 0) {
    const bm = rest.match(/\*\*([^*]+)\*\*/);
    const im = rest.match(/\*([^*]+)\*/);
    // pick whichever appears first
    const bi = bm?.index ?? Infinity;
    const ii = im?.index ?? Infinity;
    if (bi === Infinity && ii === Infinity) {
      tokens.push({ type: "text", value: rest });
      break;
    }
    if (bi <= ii && bm) {
      if (bi > 0) tokens.push({ type: "text", value: rest.slice(0, bi) });
      tokens.push({ type: "b", value: bm[1]! });
      rest = rest.slice(bi + bm[0].length);
    } else if (im) {
      if (ii > 0) tokens.push({ type: "text", value: rest.slice(0, ii) });
      tokens.push({ type: "i", value: im[1]! });
      rest = rest.slice(ii + im[0].length);
    }
  }
  return tokens.map((t, i) => {
    if (t.type === "b") return <strong key={i} className="font-semibold text-ink">{t.value}</strong>;
    if (t.type === "i") return <em key={i} className="italic text-ink-soft">{t.value}</em>;
    return <span key={i}>{t.value}</span>;
  });
}
