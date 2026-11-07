import { notFound } from "next/navigation";
import Link from "next/link";
import { type Locale, isLocale, locales, pathFor } from "@/lib/i18n/config";
import { buildMetadata } from "@/lib/seo/metadata";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { MobileNav } from "@/components/MobileNav";
import { StoryArt } from "@/components/story-art/StoryArt";
import { COLORING } from "@/lib/cerita/coloring";
import { PrintButton } from "@/components/book/PrintButton";

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  return buildMetadata({
    locale,
    path: "/warnai",
    title: locale === "id" ? "Halaman Mewarnai Cerita Baby Mo" : "Baby Mo Colouring Pages",
    description: locale === "id" ? "Halaman mewarnai gratis dari cerita bergambar Baby Mo: gurita, penyu, paus, kepiting, lebah, dan lainnya. Siap dicetak." : "Free printable colouring pages from Baby Mo's picture books: an octopus, turtle, whale, crab, bees and more.",
  });
}

export default async function WarnaiPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const l = locale as Locale;
  const id = l === "id";
  return (
    <>
      <Header locale={l} currentPath="/warnai" />
      <main id="main" className="warnai mx-auto max-w-4xl px-5 pb-28 pt-10 sm:px-8 sm:pt-14 md:pb-16">
        <header className="warnai-head mb-6 max-w-2xl">
          <h1 className="font-display text-3xl text-ink sm:text-4xl">{id ? "Halaman Mewarnai" : "Colouring Pages"} 🖍️</h1>
          <p className="mt-2 text-base leading-relaxed text-whisper">
            {id
              ? "Gambar dari cerita bergambar Baby Mo, siap dicetak. Warnai sambil membacakan ceritanya, atau setelahnya sambil mengobrol."
              : "Pictures from Baby Mo's picture books, ready to print. Colour while you read the story, or afterwards while you chat about it."}
          </p>
          <div className="mt-4"><PrintButton label={id ? "🖨️ Cetak semua" : "🖨️ Print all"} /></div>
        </header>
        <svg width="0" height="0" style={{ position: "absolute" }} aria-hidden>
          <defs>
            <filter id="lineart" colorInterpolationFilters="sRGB" x="0" y="0" width="100%" height="100%">
              <feConvolveMatrix order="3" kernelMatrix="-1 -1 -1 -1 8 -1 -1 -1 -1" preserveAlpha="true" result="e" />
              <feColorMatrix in="e" type="matrix" values="2.2 2.2 2.2 0 0  2.2 2.2 2.2 0 0  2.2 2.2 2.2 0 0  0 0 0 0 1" result="g" />
              <feComponentTransfer in="g" result="t"><feFuncR type="linear" slope="3" intercept="-0.55" /><feFuncG type="linear" slope="3" intercept="-0.55" /><feFuncB type="linear" slope="3" intercept="-0.55" /></feComponentTransfer>
              <feMorphology in="t" operator="dilate" radius="0.9" result="d" />
              <feColorMatrix in="d" type="matrix" values="-1 0 0 0 1  0 -1 0 0 1  0 0 -1 0 1  0 0 0 0 1" />
            </filter>
          </defs>
        </svg>
        <ol className="warnai-list">
          {COLORING.map((c, i) => (
            <li key={c.slug} id={c.slug} className="warnai-sheet">
              <div className="warnai-top">
                <h2 className="font-display">{i + 1}. {c.title[l]}</h2>
                <span className="warnai-name">{id ? "Nama:" : "Name:"} ____________</span>
              </div>
              <div className="warnai-art"><StoryArt scene={c.scene} title={c.title[l]} /></div>
              <p className="warnai-from">
                {id ? "Dari cerita: " : "From the story: "}
                <Link href={pathFor(l, `/cerita/${c.slug}`)}>babymo.id/cerita/{c.slug}</Link>
              </p>
            </li>
          ))}
        </ol>
        <style>{`
          .warnai-list{display:grid;gap:22px;list-style:none;padding:0;}
          .warnai-sheet{padding:16px;border-radius:20px;background:#fff;border:1px solid #e9e4da;box-shadow:0 10px 24px -20px rgba(0,0,0,.4);}
          .warnai-top{display:flex;flex-wrap:wrap;align-items:baseline;justify-content:space-between;gap:8px;margin-bottom:8px;color:#222;}
          .warnai-top h2{font-size:20px;}
          .warnai-name{font-size:14px;color:#555;}
          .warnai-art{aspect-ratio:16/9;border:2px solid #222;border-radius:12px;overflow:hidden;background:#fff;}
          .warnai-art .story-art{filter:url(#lineart);}
          .warnai-art .story-art *{animation:none !important;}
          .warnai-art .story-art image,.warnai-art .story-art .sa-ray,.warnai-art .story-art .sa-rise{display:none;}
          .warnai-from{margin-top:8px;font-size:12px;color:#777;}
          @media print{
            header,nav,footer,.warnai-head,[data-mobile-nav]{display:none !important;}
            .warnai{padding:0 !important;max-width:none !important;}
            .warnai-sheet{break-after:page;border:0;box-shadow:none;padding:0;}
            .warnai-art{border-width:3px;}
          }
        `}</style>
      </main>
      <Footer locale={l} currentPath="/warnai" />
      <MobileNav locale={l} />
    </>
  );
}
