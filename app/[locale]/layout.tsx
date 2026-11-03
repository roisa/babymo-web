import type { Metadata, Viewport } from "next";
import { Inter, Noto_Naskh_Arabic, Baloo_2 } from "next/font/google";
import {
  type Locale,
  isLocale,
  locales,
  localeHtmlLang,
  basePath,
} from "@/lib/i18n/config";
import { LANG_PREF_KEY } from "@/lib/i18n/pref";
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
        {/* Open every page in the language the visitor chose with the ID/EN
            switch: if a link or bookmark points at the other locale, swap
            the locale segment (keeping path, query and hash) before paint.
            Visitors who never chose keep the URL's language. */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var w=localStorage.getItem(${JSON.stringify(LANG_PREF_KEY)}),c=${JSON.stringify(locale)},b=${JSON.stringify(basePath)};if(!w||w===c||${JSON.stringify(locales)}.indexOf(w)<0)return;var p=location.pathname,x=b+'/'+c;if(p!==x&&p.indexOf(x+'/')!==0)return;document.documentElement.style.visibility='hidden';location.replace(b+'/'+w+p.slice(x.length)+location.search+location.hash);}catch(e){}})();`,
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
