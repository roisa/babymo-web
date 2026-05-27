import type { Metadata, Viewport } from "next";
import { Inter, Newsreader, Noto_Naskh_Arabic } from "next/font/google";
import {
  type Locale,
  isLocale,
  locales,
  localeHtmlLang,
} from "@/lib/i18n/config";
import { buildMetadata } from "@/lib/seo/metadata";
import { JsonLd } from "@/components/JsonLd";
import { PwaBootstrap } from "@/components/PwaBootstrap";
import { organizationSchema, websiteSchema, graph } from "@/lib/seo/schemas";
import { notFound } from "next/navigation";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const newsreader = Newsreader({
  subsets: ["latin"],
  variable: "--font-newsreader",
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const arabic = Noto_Naskh_Arabic({
  subsets: ["arabic"],
  variable: "--font-arabic",
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#5F8B5A",
  colorScheme: "light",
  width: "device-width",
  initialScale: 1,
};

export async function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  return buildMetadata({ locale });
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();

  return (
    <html
      lang={localeHtmlLang[locale]}
      className={`${inter.variable} ${newsreader.variable} ${arabic.variable}`}
    >
      <body>
        <JsonLd
          data={graph(organizationSchema(), websiteSchema(locale as Locale))}
        />
        {children}
        <PwaBootstrap locale={locale as Locale} />
      </body>
    </html>
  );
}
