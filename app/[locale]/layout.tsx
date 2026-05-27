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
        {/* Unregister any leftover service worker from the previous static-HTML
            era. Without this, returning visitors see stale cached HTML and the
            EN/ID toggle never appears for them. Safe to remove after ~30 days. */}
        <script
          dangerouslySetInnerHTML={{
            __html: `if('serviceWorker' in navigator){navigator.serviceWorker.getRegistrations().then(rs=>rs.forEach(r=>r.unregister()));if(window.caches){caches.keys().then(ks=>ks.forEach(k=>caches.delete(k)))}}`,
          }}
        />
        <JsonLd
          data={graph(organizationSchema(), websiteSchema(locale as Locale))}
        />
        {children}
      </body>
    </html>
  );
}
