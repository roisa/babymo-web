import { type Locale, absoluteUrl, siteUrl } from "../i18n/config";
import type { BlogPost, Doa, Game, Hadith, ParentingSituation } from "../content/types";
import { getDictionary } from "../i18n/dictionaries";

const logo = `${siteUrl}/assets/logo-512.png`;

export function organizationSchema() {
  return {
    "@type": "Organization",
    "@id": `${siteUrl}/#org`,
    name: "Baby Mo",
    url: siteUrl,
    logo: { "@type": "ImageObject", url: logo, width: 512, height: 512 },
    email: "hello@babymo.id",
    telephone: "+62-823-1597-1002",
    sameAs: [
      "https://www.youtube.com/@babymo.official",
      "https://www.instagram.com/babymo.official",
      "https://www.tiktok.com/@babymo.official",
    ],
  };
}

export function websiteSchema(locale: Locale) {
  const dict = getDictionary(locale);
  return {
    "@type": "WebSite",
    "@id": `${siteUrl}/#website`,
    url: siteUrl,
    name: "Baby Mo",
    description: dict.meta.siteDescription,
    publisher: { "@id": `${siteUrl}/#org` },
    inLanguage: locale === "id" ? "id-ID" : "en",
  };
}

export function breadcrumbSchema(
  locale: Locale,
  trail: { name: string; path: string }[]
) {
  return {
    "@type": "BreadcrumbList",
    itemListElement: trail.map((t, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: t.name,
      item: absoluteUrl(locale, t.path),
    })),
  };
}

export function faqSchema(items: { q: string; a: string }[]) {
  return {
    "@type": "FAQPage",
    mainEntity: items.map((it) => ({
      "@type": "Question",
      name: it.q,
      acceptedAnswer: { "@type": "Answer", text: it.a },
    })),
  };
}

export function doaSchema(locale: Locale, doa: Doa) {
  return {
    "@type": ["Article", "LearningResource"],
    headline: doa.title[locale],
    name: doa.title[locale],
    description: doa.context[locale],
    inLanguage: locale === "id" ? "id-ID" : "en",
    datePublished: doa.published,
    dateModified: doa.updated,
    author: { "@id": `${siteUrl}/#org` },
    publisher: { "@id": `${siteUrl}/#org` },
    mainEntityOfPage: absoluteUrl(locale, `/doa/${doa.slug}`),
    educationalLevel: "early-childhood",
    audience: {
      "@type": "Audience",
      audienceType: "Muslim families with children aged 2-8",
    },
    citation: doa.source.reference,
    keywords: doa.situations.join(", "),
  };
}

/**
 * FAQPage schema for a blog post that defines its own FAQ array.
 * Returns null if the post has no FAQ — caller should spread the
 * result conditionally.
 */
export function blogFaqSchema(locale: Locale, post: BlogPost) {
  if (!post.faq || post.faq.length === 0) return null;
  return {
    "@type": "FAQPage",
    mainEntity: post.faq.map((f) => ({
      "@type": "Question",
      name: f.question[locale],
      acceptedAnswer: {
        "@type": "Answer",
        text: f.answer[locale],
      },
    })),
  };
}

export function blogPostingSchema(locale: Locale, post: BlogPost) {
  return {
    "@type": "BlogPosting",
    headline: post.title[locale],
    description: post.excerpt[locale],
    inLanguage: locale === "id" ? "id-ID" : "en",
    datePublished: post.published,
    dateModified: post.updated,
    author: { "@type": "Organization", name: post.author, "@id": `${siteUrl}/#org` },
    publisher: { "@id": `${siteUrl}/#org` },
    mainEntityOfPage: absoluteUrl(locale, `/blog/${post.slug}`),
    image: [`${siteUrl}/assets/og-image.jpg`],
    keywords: post.tags.join(", "),
  };
}

export function catatanSchema(
  locale: Locale,
  note: import("../content/types").Catatan,
) {
  const isStory = note.kind === "story";
  // Kids stories are brand content; reflective notes are by the founder.
  const author = isStory
    ? { "@id": `${siteUrl}/#org` }
    : { "@type": "Person", name: "Salman Alfa", "@id": `${siteUrl}/#person-salman` };
  const images = [`${siteUrl}/assets/og-image.jpg`];
  if (note.pose) images.unshift(`${siteUrl}/baby-mo-poses/${note.pose}`);
  return {
    "@type": isStory ? "Article" : "BlogPosting",
    headline: note.title[locale],
    description: note.hook[locale],
    inLanguage: locale === "id" ? "id-ID" : "en",
    datePublished: note.published,
    dateModified: note.published,
    author,
    publisher: { "@id": `${siteUrl}/#org` },
    mainEntityOfPage: absoluteUrl(locale, `/cerita/${note.slug}`),
    image: images,
    keywords: note.tags.join(", "),
    articleSection: isStory
      ? locale === "id"
        ? "Cerita Anak"
        : "Kids Story"
      : "Catatan",
    isFamilyFriendly: true,
  };
}

export function itemListSchema(
  locale: Locale,
  name: string,
  items: { name: string; url: string }[]
) {
  return {
    "@type": "ItemList",
    name,
    numberOfItems: items.length,
    inLanguage: locale === "id" ? "id-ID" : "en",
    itemListElement: items.map((it, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: it.name,
      url: it.url,
    })),
  };
}

export function hadithSchema(locale: Locale, h: Hadith) {
  return {
    "@type": ["Article", "Quotation"],
    headline: h.title[locale],
    name: h.title[locale],
    text: h.translation[locale],
    description: h.parentingNote[locale],
    inLanguage: locale === "id" ? "id-ID" : "en",
    datePublished: h.published,
    dateModified: h.updated,
    author: { "@id": `${siteUrl}/#org` },
    publisher: { "@id": `${siteUrl}/#org` },
    mainEntityOfPage: absoluteUrl(locale, `/hadith/${h.slug}`),
    citation: h.source.reference,
    spokenByCharacter: h.narrator,
    keywords: h.themes.join(", "),
    isBasedOn: {
      "@type": "CreativeWork",
      name: h.source.collection,
      identifier: h.source.reference,
    },
  };
}

export function parentingSchema(locale: Locale, p: ParentingSituation) {
  return {
    "@type": ["Article", "HowTo"],
    headline: p.title[locale],
    name: p.title[locale],
    description: p.excerpt[locale],
    inLanguage: locale === "id" ? "id-ID" : "en",
    datePublished: p.published,
    dateModified: p.updated,
    author: { "@id": `${siteUrl}/#org` },
    publisher: { "@id": `${siteUrl}/#org` },
    mainEntityOfPage: absoluteUrl(locale, `/parenting/${p.slug}`),
    audience: {
      "@type": "Audience",
      audienceType: `Muslim parents with children aged ${p.ageMin}-${p.ageMax}`,
    },
    step: p.steps[locale].map((s, i) => ({
      "@type": "HowToStep",
      position: i + 1,
      text: s,
    })),
    keywords: p.category,
  };
}

/**
 * FAQPage schema for a parenting situation — uses the seoQuery as
 * the Question and the islamicNote + first step as the Answer so
 * Google can show a rich snippet for that exact long-tail search.
 */
export function parentingFaqSchema(locale: Locale, p: ParentingSituation) {
  if (!p.seoQuery) return null;
  const firstStep = p.steps[locale][0] ?? "";
  const answer = `${p.islamicNote[locale]} ${firstStep}`.trim();
  return {
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: p.seoQuery[locale],
        acceptedAnswer: {
          "@type": "Answer",
          text: answer,
        },
      },
    ],
  };
}

export function videoGameSchema(locale: Locale, game: Game) {
  return {
    "@type": "VideoGame",
    name: game.title[locale],
    description: game.description[locale],
    url: game.externalUrl,
    ...(game.image ? { image: game.image } : {}),
    applicationCategory: "EducationalApplication",
    operatingSystem: "Any (Web)",
    inLanguage: locale === "id" ? "id-ID" : "en",
    publisher: { "@id": `${siteUrl}/#org` },
    isAccessibleForFree: true,
    audience: {
      "@type": "PeopleAudience",
      suggestedMinAge: 2,
      suggestedMaxAge: 8,
    },
  };
}

export function videoObjectSchema(
  locale: Locale,
  v: { id: string; name: string; description: string; uploadDate?: string },
) {
  return {
    "@type": "VideoObject",
    name: v.name,
    description: v.description,
    thumbnailUrl: [`https://i.ytimg.com/vi/${v.id}/hqdefault.jpg`],
    uploadDate: v.uploadDate ?? "2026-01-01",
    contentUrl: `https://www.youtube.com/watch?v=${v.id}`,
    embedUrl: `https://www.youtube-nocookie.com/embed/${v.id}`,
    inLanguage: locale === "id" ? "id-ID" : "en",
    publisher: { "@id": `${siteUrl}/#org` },
    isFamilyFriendly: true,
  };
}

export function graph(...nodes: Record<string, unknown>[]) {
  return {
    "@context": "https://schema.org",
    "@graph": nodes,
  };
}
