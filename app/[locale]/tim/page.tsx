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
import { getAllPeople } from "@/lib/content/people";

export async function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

const COPY = {
  id: {
    title: "Tim Baby Mo",
    description:
      "Tim editorial, pendiri, dan ustadz reviewer yang menyusun dan memverifikasi konten Baby Mo.",
    intro:
      "Setiap doa dan hadith di Baby Mo ditulis oleh tim editorial kami dan ditinjau oleh ustadz mitra sebelum dipublikasi. Halaman ini memperkenalkan siapa di balik konten yang menemani keluarga Anda.",
    ctaContact: "Hubungi tim kami",
  },
  en: {
    title: "Baby Mo Team",
    description:
      "Editorial team, founders, and scholar reviewers who write and verify Baby Mo content.",
    intro:
      "Every dua and hadith on Baby Mo is drafted by our editorial team and reviewed by partner asatidz before going public. This page introduces the people behind the content that accompanies your family.",
    ctaContact: "Contact the team",
  },
} as const;

const ROLE_LABEL: Record<Locale, { team: string; founder: string; reviewer: string }> = {
  id: { team: "Tim Editorial", founder: "Pendiri", reviewer: "Ustadz Reviewer" },
  en: { team: "Editorial", founder: "Founder", reviewer: "Scholar Reviewer" },
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  const c = COPY[locale];
  return buildMetadata({
    locale,
    path: "/tim",
    title: c.title,
    description: c.description,
  });
}

export default async function TimPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const l = locale as Locale;
  const dict = getDictionary(l);
  const c = COPY[l];
  const list = getAllPeople();

  // Group by role
  const founders = list.filter((p) => p.role === "founder");
  const team = list.filter((p) => p.role === "team");
  const reviewers = list.filter((p) => p.role === "reviewer");

  return (
    <>
      <Header locale={l} currentPath="/tim" />
      <main id="main" className="mx-auto max-w-4xl px-5 pb-28 pt-12 sm:px-7 sm:pt-16 md:pb-16">
        <nav aria-label="Breadcrumb" className="mb-5 text-[12px] text-whisper">
          <Link href={pathFor(l)} className="hover:text-ink">
            {dict.nav.home}
          </Link>{" "}
          / <span className="text-ink">{c.title}</span>
        </nav>
        <header className="max-w-2xl">
          <h1 className="tracking-display font-serif text-[36px] font-medium leading-[1.1] text-ink sm:text-[44px]">
            {c.title}
          </h1>
          <p className="mt-3 text-[16.5px] leading-relaxed text-whisper">
            {c.intro}
          </p>
        </header>

        {founders.length > 0 && (
          <Section heading={ROLE_LABEL[l].founder} people={founders} locale={l} />
        )}
        {team.length > 0 && (
          <Section heading={ROLE_LABEL[l].team} people={team} locale={l} />
        )}
        {reviewers.length > 0 ? (
          <Section
            heading={ROLE_LABEL[l].reviewer}
            people={reviewers}
            locale={l}
          />
        ) : (
          <section className="mt-14">
            <h2 className="tracking-display font-serif text-2xl font-medium text-ink">
              {ROLE_LABEL[l].reviewer}
            </h2>
            <p className="mt-3 max-w-xl text-[14.5px] leading-relaxed text-whisper">
              {l === "id"
                ? "Kami sedang menjalin kerjasama dengan ustadz mitra untuk meninjau setiap doa dan hadith sebelum publikasi resmi. Jika Anda atau ustadz yang Anda kenal tertarik berkontribusi sebagai reviewer, "
                : "We are partnering with qualified asatidz to review every dua and hadith before public release. If you, or an ustadz you know, would like to contribute as a reviewer, "}
              <Link
                href={pathFor(l, "/kontak")}
                className="font-semibold text-sage-deep hover:underline"
              >
                {c.ctaContact}
              </Link>
              .
            </p>
          </section>
        )}
      </main>
      <Footer locale={l} currentPath="/tim" />
      <MobileNav locale={l} />
      <JsonLd
        data={graph(
          breadcrumbSchema(l, [
            { name: dict.nav.home, path: "/" },
            { name: c.title, path: "/tim" },
          ]),
          ...list.map((p) => ({
            "@type": "Person",
            "@id": `${pathFor(l, "/tim")}#${p.slug}`,
            name: p.name,
            jobTitle: p.title[l],
            description: p.bio[l],
            sameAs: p.socials
              ? Object.values(p.socials).filter(Boolean)
              : undefined,
          })),
        )}
      />
    </>
  );
}

function Section({
  heading,
  people,
  locale,
}: {
  heading: string;
  people: ReturnType<typeof getAllPeople>;
  locale: Locale;
}) {
  return (
    <section className="mt-14">
      <h2 className="tracking-display font-serif text-2xl font-medium text-ink">
        {heading}
      </h2>
      <ul className="mt-6 grid gap-5 sm:grid-cols-2">
        {people.map((p) => (
          <li
            key={p.slug}
            id={p.slug}
            className="scroll-mt-20 rounded-[22px] border border-hairline bg-paper p-6"
          >
            <div className="flex items-start gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-sage-soft text-[14px] font-semibold text-sage-deep">
                {initials(p.name)}
              </div>
              <div className="min-w-0">
                <h3 className="font-serif text-[17px] font-medium text-ink">
                  {p.name}
                </h3>
                <p className="text-[12.5px] uppercase tracking-[0.1em] text-whisper">
                  {p.title[locale]}
                </p>
              </div>
            </div>
            <p className="mt-4 text-[14.5px] leading-relaxed text-whisper">
              {p.bio[locale]}
            </p>
            {p.credentials && p.credentials.length > 0 && (
              <ul className="mt-3 flex flex-wrap gap-1.5">
                {p.credentials.map((c) => (
                  <li
                    key={c}
                    className="rounded-full bg-paper-2 px-2 py-0.5 text-[11px] text-ink-soft"
                  >
                    {c}
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </section>
  );
}

function initials(name: string): string {
  return name
    .split(/\s+/)
    .map((p) => p[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();
}
