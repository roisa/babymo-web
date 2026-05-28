import Link from "next/link";
import { notFound } from "next/navigation";
import { type Locale, isLocale, locales, pathFor, whatsappNumber } from "@/lib/i18n/config";
import { getDictionary } from "@/lib/i18n/dictionaries";
import { buildMetadata } from "@/lib/seo/metadata";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { MobileNav } from "@/components/MobileNav";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbSchema, graph } from "@/lib/seo/schemas";

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
    path: "/kontak",
    title: dict.pages.contact.title,
    description: dict.pages.contact.description,
  });
}

const CHANNELS = [
  ...(whatsappNumber
    ? [
        {
          label: "WhatsApp",
          handle: "+62 823-1597-1002",
          url: `https://wa.me/${whatsappNumber}`,
          desc: { id: "Chat langsung dengan tim kami.", en: "Chat directly with our team." },
        },
      ]
    : []),
  {
    label: "Email",
    handle: "hello@babymo.id",
    url: "mailto:hello@babymo.id",
    desc: {
      id: "Untuk pertanyaan, koreksi, atau kerjasama.",
      en: "For questions, corrections, or partnerships.",
    },
  },
  {
    label: "Instagram",
    handle: "@babymo.official",
    url: "https://www.instagram.com/babymo.official",
    desc: { id: "Update harian & behind the scenes.", en: "Daily updates & behind the scenes." },
  },
  {
    label: "TikTok",
    handle: "@babymo.official",
    url: "https://www.tiktok.com/@babymo.official",
    desc: { id: "Klip pendek edukatif untuk anak.", en: "Short educational clips for kids." },
  },
  {
    label: "YouTube",
    handle: "@babymo.official",
    url: "https://www.youtube.com/@babymo.official",
    desc: { id: "Animasi islami untuk anak.", en: "Islamic animation for children." },
  },
  {
    label: "PayPal",
    handle: "paypal.me/ibracreative",
    url: "https://paypal.me/ibracreative",
    desc: {
      id: "Dukung pengembangan Baby Mo via PayPal.",
      en: "Support Baby Mo's development via PayPal.",
    },
  },
] as const;

export default async function ContactPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const l = locale as Locale;
  const dict = getDictionary(l);

  return (
    <>
      <Header locale={l} currentPath="/kontak" />
      <main id="main" className="mx-auto max-w-4xl px-5 pb-24 pt-12 sm:px-8 sm:pt-16 md:pb-16">
        <nav aria-label="Breadcrumb" className="mb-6 text-xs text-whisper">
          <Link href={pathFor(l)} className="hover:text-ink">
            {dict.nav.home}
          </Link>{" "}
          / <span className="text-ink">{dict.pages.contact.title}</span>
        </nav>
        <h1 className="font-serif text-3xl font-medium tracking-tight text-ink sm:text-4xl">
          {dict.pages.contact.title}
        </h1>
        <p className="mt-3 max-w-xl text-base leading-relaxed text-whisper">
          {dict.pages.contact.description}
        </p>

        <ul className="mt-10 grid gap-4 sm:grid-cols-2">
          {CHANNELS.map((c) => (
            <li key={c.label}>
              <a
                href={c.url}
                target="_blank"
                rel="noopener"
                className="group block rounded-2xl border border-mist bg-paper p-6 transition hover:-translate-y-0.5 hover:border-sage/40"
              >
                <div className="text-[11px] font-semibold uppercase tracking-wider text-sage-deep">
                  {c.label}
                </div>
                <div className="mt-1 font-serif text-lg font-semibold text-ink group-hover:text-sage-deep">
                  {c.handle}
                </div>
                <p className="mt-1.5 text-sm leading-relaxed text-whisper">
                  {c.desc[l]}
                </p>
              </a>
            </li>
          ))}
        </ul>
      </main>
      <Footer locale={l} currentPath="/kontak" />
      <MobileNav locale={l} />
      <JsonLd
        data={graph(
          breadcrumbSchema(l, [
            { name: dict.nav.home, path: "/" },
            { name: dict.pages.contact.title, path: "/kontak" },
          ]),
          {
            "@type": "ContactPage",
            name: dict.pages.contact.title,
            inLanguage: l === "id" ? "id-ID" : "en",
          }
        )}
      />
    </>
  );
}
