import Link from "next/link";
import { notFound } from "next/navigation";
import {
  type Locale,
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
import { breadcrumbSchema, graph } from "@/lib/seo/schemas";
import { TemanTumbuh } from "@/components/teman/TemanTumbuh";
import { getMissionOfTheDay } from "@/lib/content/missions";

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
    path: "/teman-tumbuh",
    title:
      locale === "id"
        ? "Teman Tumbuh — Satu Kebaikan Setiap Hari Bareng Baby Mo"
        : "Teman Tumbuh — One Good Deed a Day with Baby Mo",
    description:
      locale === "id"
        ? "Teman harian si kecil: setiap hari Baby Mo menyapa namanya dan mengajak menanam satu kebaikan — doa, akhlak, atau ibadah kecil. Kebun amal tumbuh seiring kebiasaan baik tertanam."
        : "Your child's daily companion: each day Baby Mo greets them by name and plants one good deed — a du'a, a kindness, a small act of worship. A garden of deeds grows as good habits take root.",
  });
}

export default async function TemanTumbuhPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const l = locale as Locale;
  const dict = getDictionary(l);
  const mission = getMissionOfTheDay();

  return (
    <>
      <Header locale={l} currentPath="/teman-tumbuh" />
      <main id="main" className="mx-auto max-w-3xl px-5 pb-28 pt-8 sm:px-7 sm:pt-12 md:pb-16">
        <nav aria-label="Breadcrumb" className="mb-5 text-[12px] text-whisper">
          <Link href={pathFor(l)} className="hover:text-ink">
            {dict.nav.home}
          </Link>{" "}
          / <span className="text-ink">{l === "id" ? "Teman Tumbuh" : "Teman Tumbuh"}</span>
        </nav>

        <header className="mb-8 max-w-2xl">
          <span className="inline-flex items-center gap-2 rounded-full bg-sage-soft px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.14em] text-sage-deep">
            <span className="pulse-dot inline-block h-1.5 w-1.5 rounded-full bg-sage text-sage" />
            {l === "id" ? "Teman harian si kecil" : "Your child's daily friend"}
          </span>
          <h1 className="font-display mt-4 text-[38px] font-medium leading-[1.05] text-ink sm:text-[50px]">
            {l === "id" ? "Teman Tumbuh" : "Teman Tumbuh"}
          </h1>
          <p className="mt-4 text-[16.5px] leading-[1.65] text-whisper">
            {l === "id"
              ? "Setiap hari, Baby Mo menyapa si kecil dan mengajaknya menanam satu kebaikan — doa, akhlak, atau ibadah kecil. Tandai selesai, dan kebun amalnya tumbuh sedikit demi sedikit."
              : "Each day, Baby Mo greets your little one and invites them to plant one good deed — a du'a, a kindness, or a small act of worship. Mark it done, and their garden of deeds grows little by little."}
          </p>
        </header>

        <TemanTumbuh locale={l} mission={mission} />

        {/* Static explainer (SEO + works without JS) */}
        <section className="mt-14 border-t border-hairline pt-10">
          <h2 className="font-display text-[24px] font-medium text-ink">
            {l === "id" ? "Cara kerjanya" : "How it works"}
          </h2>
          <ol className="mt-5 grid gap-4 sm:grid-cols-3">
            {[
              {
                n: "1",
                t: l === "id" ? "Kenalkan namanya" : "Add their name",
                d: l === "id"
                  ? "Baby Mo menyapa si kecil dengan namanya. Tersimpan hanya di perangkatmu — tanpa akun."
                  : "Baby Mo greets your child by name. Stored only on your device — no account.",
              },
              {
                n: "2",
                t: l === "id" ? "Satu misi tiap hari" : "One mission a day",
                d: l === "id"
                  ? "Satu kebaikan kecil yang mudah dilakukan — doa, senyum, berbagi, atau mengenal Allah."
                  : "One small, doable good deed — a du'a, a smile, sharing, or knowing Allah.",
              },
              {
                n: "3",
                t: l === "id" ? "Kebun amal tumbuh" : "The garden grows",
                d: l === "id"
                  ? "Tandai selesai dan lihat kebun tumbuh dari benih hingga pohon rindang. Jaga harinya beruntun!"
                  : "Mark it done and watch the garden grow from seed to a flourishing tree. Keep the streak!",
              },
            ].map((s) => (
              <li key={s.n} className="rounded-[20px] border border-hairline bg-paper p-5">
                <span className="grid h-8 w-8 place-items-center rounded-full bg-sage-soft text-[13px] font-semibold text-sage-deep">
                  {s.n}
                </span>
                <p className="font-display mt-3 text-[17px] font-medium text-ink">{s.t}</p>
                <p className="mt-1.5 text-[14px] leading-snug text-whisper">{s.d}</p>
              </li>
            ))}
          </ol>

          <p className="mt-8 text-[13.5px] leading-relaxed text-whisper">
            {l === "id"
              ? "Teman Tumbuh dibuat untuk menumbuhkan kebiasaan baik dengan gembira, tanpa tekanan. Tidak ada akun, tidak ada iklan, dan semua data hanya tersimpan di perangkatmu."
              : "Teman Tumbuh is built to grow good habits joyfully, without pressure. No account, no ads, and all data stays on your device."}
          </p>
        </section>
      </main>

      <Footer locale={l} currentPath="/teman-tumbuh" />
      <MobileNav locale={l} />
      <JsonLd
        data={graph(
          breadcrumbSchema(l, [
            { name: dict.nav.home, path: "/" },
            { name: "Teman Tumbuh", path: "/teman-tumbuh" },
          ]),
        )}
      />
    </>
  );
}
