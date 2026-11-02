import type { Metadata, Viewport } from "next";
import { Inter, Noto_Naskh_Arabic, Baloo_2 } from "next/font/google";
import {
  type Locale,
  isLocale,
  locales,
  localeHtmlLang,
} from "@/lib/i18n/config";
import { buildMetadata } from "@/lib/seo/metadata";
import { JsonLd } from "@/components/JsonLd";
import { PwaBootstrap } from "@/components/PwaBootstrap";
import { Analytics } from "@/components/Analytics";
import { ScrollTop } from "@/components/ScrollTop";
import { organizationSchema, websiteSchema, graph } from "@/lib/seo/schemas";
import { notFound } from "next/navigation";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const arabic = Noto_Naskh_Arabic({
  subsets: ["arabic"],
  variable: "--font-arabic",
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

// Rounded, friendly display face for every heading — reads well in
// Indonesian and feels made-for-kids without hurting parent readability.
const baloo = Baloo_2({
  subsets: ["latin"],
  variable: "--font-rounded",
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#FBFAF6" },
    { media: "(prefers-color-scheme: dark)", color: "#15171B" },
  ],
  colorScheme: "light dark",
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
      className={`${inter.variable} ${baloo.variable} ${arabic.variable}`}
    >
      <body>
        {/* Set theme before first paint to avoid a flash of the wrong
            mode. Reads saved preference, else falls back to OS setting. */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem('babymo.theme');if(t==='dark'||(!t&&window.matchMedia&&window.matchMedia('(prefers-color-scheme: dark)').matches)){document.documentElement.classList.add('dark');}}catch(e){}})();`,
          }}
        />
        <JsonLd
          data={graph(organizationSchema(), websiteSchema(locale as Locale))}
        />
        {children}
        <ScrollTop locale={locale as Locale} />
        <PwaBootstrap locale={locale as Locale} />
        <Analytics />
      </body>
    </html>
  );
}
