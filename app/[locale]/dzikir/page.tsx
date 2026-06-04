import Link from "next/link";
import { notFound } from "next/navigation";
import {
  type Locale,
  absoluteUrl,
  isLocale,
  locales,
  pathFor,
} from "@/lib/i18n/config";
import { getDictionary } from "@/lib/i18n/dictionaries";
import { buildMetadata } from "@/lib/seo/metadata";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { MobileNav } from "@/components/MobileNav";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbSchema, graph, itemListSchema } from "@/lib/seo/schemas";
import { getAllDzikir } from "@/lib/content/dzikir";

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
  return buildMetadata({
    locale,
    path: "/dzikir",
    title:
      locale === "id"
        ? "Dzikir Pagi & Petang (Al-Ma'tsurat) — Arab, Latin, dan Artinya"
        : "Morning & Evening Dhikr (Al-Ma'thurat) — Arabic, Transliteration & Meaning",
    description:
      locale === "id"
        ? "Bacaan dzikir pagi dan petang lengkap — Ayat Kursi, tiga Qul, sayyidul istighfar, dan dzikir lainnya beserta jumlah bacaannya. Arab, latin, arti, dan keutamaannya. Mudah diamalkan bersama anak."
        : "The complete morning and evening dhikr — Ayat al-Kursi, the three Quls, Sayyidul Istighfar, and more, with counts, Arabic, transliteration, meaning, and virtues. Easy to practise with children.",
  });
}

export default async function DzikirIndex({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const l = locale as Locale;
  const dict = getDictionary(l);
  const all = getAllDzikir();

  const timeLabel = (t: string) =>
    t === "pagi"
      ? l === "id" ? "Pagi" : "Morning"
      : t === "petang"
        ? l === "id" ? "Petang" : "Evening"
        : l === "id" ? "Pagi & Petang" : "Morning & Evening";

  return (
    <>
      <Header locale={l} currentPath="/dzikir" />
      <main id="main" className="mx-auto max-w-4xl px-5 pb-28 pt-10 sm:px-7 sm:pt-14 md:pb-16">
        <nav aria-label="Breadcrumb" className="mb-5 text-[12px] text-whisper">
          <Link href={pathFor(l)} className="hover:text-ink">
            {dict.nav.home}
          </Link>{" "}
          / <span className="text-ink">{l === "id" ? "Dzikir Pagi & Petang" : "Morning & Evening Dhikr"}</span>
        </nav>

        <header className="max-w-2xl">
          <span className="inline-flex items-center gap-2 rounded-full bg-sage-soft px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.14em] text-sage-deep">
            {l === "id" ? "Al-Ma'tsurat" : "Al-Ma'thurat"}
          </span>
          <h1 className="font-display mt-4 text-[40px] font-medium leading-[1.05] text-ink sm:text-[52px]">
            {l === "id" ? "Dzikir Pagi & Petang" : "Morning & Evening Dhikr"}
          </h1>
          <p className="mt-4 text-[16.5px] leading-[1.65] text-whisper">
            {l === "id"
              ? "Bacaan dzikir yang dianjurkan setiap pagi (setelah Subuh) dan petang (setelah Ashar) — pelindung dan penenang hati sepanjang hari. Lengkap dengan jumlah bacaan, tulisan Arab, cara baca, arti, dan keutamaannya."
              : "The dhikr recommended each morning (after Subuh) and evening (after Asr) — a shield and a calm for the whole day. With counts, Arabic, transliteration, meaning, and virtues."}
          </p>
        </header>

        <ol className="mt-12 grid gap-3 sm:grid-cols-2">
          {all.map((d) => (
            <li key={d.slug}>
              <Link
                href={pathFor(l, `/dzikir/${d.slug}`)}
                className="lift tap group flex h-full items-start gap-4 rounded-[18px] border border-hairline bg-paper p-5 hover:border-sage/40"
              >
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-sage-soft text-[13px] font-semibold text-sage-deep">
                  {d.order}
                </span>
                <div className="min-w-0 flex-1">
                  <p className="font-display text-[17px] font-medium text-ink group-hover:text-sage-deep">
                    {d.title[l]}
                  </p>
                  <div className="mt-1.5 flex flex-wrap items-center gap-1.5">
                    <span className="rounded-full bg-paper-2 px-2 py-0.5 text-[10.5px] font-semibold text-ink-soft">
                      {timeLabel(d.time)}
                    </span>
                    {d.count && (
                      <span className="rounded-full bg-clay-soft px-2 py-0.5 text-[10.5px] font-semibold text-clay">
                        {d.count}
                      </span>
                    )}
                  </div>
                </div>
              </Link>
            </li>
          ))}
        </ol>

        <div className="mt-12 flex flex-wrap gap-3 text-[13.5px]">
          <Link href={pathFor(l, "/doa")} className="font-semibold text-sage-deep hover:underline">
            {l === "id" ? "Doa harian →" : "Daily du'a →"}
          </Link>
          <Link href={pathFor(l, "/sholat")} className="font-semibold text-sage-deep hover:underline">
            {l === "id" ? "Bacaan sholat →" : "Prayer recitations →"}
          </Link>
        </div>

        <p className="mt-10 rounded-[18px] border border-hairline bg-paper-2 px-5 py-4 text-[12.5px] leading-relaxed text-whisper">
          {l === "id"
            ? "Catatan: teks mengikuti riwayat yang masyhur. Sedang dalam tinjauan guru — mohon bantu verifikasi bila menemukan kekeliruan."
            : "Note: the texts follow well-known narrations. Under teacher review — please help us verify if you spot an error."}
        </p>
      </main>

      <Footer locale={l} currentPath="/dzikir" />
      <MobileNav locale={l} />
      <JsonLd
        data={graph(
          breadcrumbSchema(l, [
            { name: dict.nav.home, path: "/" },
            { name: l === "id" ? "Dzikir Pagi & Petang" : "Morning & Evening Dhikr", path: "/dzikir" },
          ]),
          itemListSchema(
            l,
            l === "id" ? "Dzikir Pagi & Petang" : "Morning & Evening Dhikr",
            all.map((d) => ({
              name: d.title[l],
              url: absoluteUrl(l, `/dzikir/${d.slug}`),
            })),
          ),
        )}
      />
    </>
  );
}
