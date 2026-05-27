import type { Metadata } from "next";
import {
  type Locale,
  absoluteUrl,
  locales,
  pathFor,
  siteUrl,
} from "../i18n/config";
import { getDictionary } from "../i18n/dictionaries";

type Args = {
  locale: Locale;
  path?: string;
  title?: string;
  description?: string;
  image?: string;
  type?: "website" | "article";
};

export function buildMetadata({
  locale,
  path = "",
  title,
  description,
  image,
  type = "website",
}: Args): Metadata {
  const dict = getDictionary(locale);
  const fullTitle = title
    ? `${title} — Baby Mo`
    : dict.meta.siteTitle;
  const desc = description ?? dict.meta.siteDescription;
  const url = absoluteUrl(locale, path);
  const ogImage = image ?? `${siteUrl}/assets/og-image.jpg`;

  const languages: Record<string, string> = {};
  for (const l of locales) languages[l] = absoluteUrl(l, path);
  languages["x-default"] = absoluteUrl("id", path);

  return {
    title: fullTitle,
    description: desc,
    keywords: dict.meta.keywords,
    alternates: {
      canonical: url,
      languages,
    },
    openGraph: {
      type,
      siteName: "Baby Mo",
      locale: locale === "id" ? "id_ID" : "en_US",
      title: fullTitle,
      description: desc,
      url,
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: "Baby Mo",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description: desc,
      images: [ogImage],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-image-preview": "large",
        "max-snippet": -1,
        "max-video-preview": -1,
      },
    },
    other: {
      "format-detection": "telephone=no",
    },
  };
}

export { pathFor };
