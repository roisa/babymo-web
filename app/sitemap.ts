import type { MetadataRoute } from "next";
import { locales, siteUrl } from "@/lib/i18n/config";
import { getAllDoa } from "@/lib/content/doa";
import { getAllBlogPosts } from "@/lib/content/blog";
import { getAllHadith } from "@/lib/content/hadith";
import { getAllParenting } from "@/lib/content/parenting";

export const dynamic = "force-static";

const STATIC_PATHS = [
  "",
  "/doa",
  "/hadith",
  "/parenting",
  "/blog",
  "/permainan",
  "/faq",
  "/tentang",
  "/kontak",
  "/privasi",
  "/syarat",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const out: MetadataRoute.Sitemap = [];
  const now = new Date();

  // Trailing-slash URL builder — matches Next.js `trailingSlash: true` output
  // and the canonical tag in every rendered page.
  const url = (locale: string, p: string) => {
    const path = p === "" ? "" : p.startsWith("/") ? p : `/${p}`;
    return `${siteUrl}/${locale}${path}/`;
  };

  for (const locale of locales) {
    for (const p of STATIC_PATHS) {
      out.push({
        url: url(locale, p),
        lastModified: now,
        changeFrequency: p === "" ? "weekly" : "monthly",
        priority: p === "" ? 1.0 : 0.7,
        alternates: {
          languages: Object.fromEntries(
            locales.map((ll) => [ll, url(ll, p)]),
          ),
        },
      });
    }
    for (const d of getAllDoa()) {
      out.push({
        url: url(locale, `/doa/${d.slug}`),
        lastModified: new Date(d.updated),
        changeFrequency: "monthly",
        priority: 0.8,
        alternates: {
          languages: Object.fromEntries(
            locales.map((ll) => [ll, url(ll, `/doa/${d.slug}`)]),
          ),
        },
      });
    }
    for (const h of getAllHadith()) {
      out.push({
        url: url(locale, `/hadith/${h.slug}`),
        lastModified: new Date(h.updated),
        changeFrequency: "monthly",
        priority: 0.8,
        alternates: {
          languages: Object.fromEntries(
            locales.map((ll) => [ll, url(ll, `/hadith/${h.slug}`)]),
          ),
        },
      });
    }
    for (const p of getAllParenting()) {
      out.push({
        url: url(locale, `/parenting/${p.slug}`),
        lastModified: new Date(p.updated),
        changeFrequency: "monthly",
        priority: 0.85,
        alternates: {
          languages: Object.fromEntries(
            locales.map((ll) => [ll, url(ll, `/parenting/${p.slug}`)]),
          ),
        },
      });
    }
    for (const b of getAllBlogPosts()) {
      out.push({
        url: url(locale, `/blog/${b.slug}`),
        lastModified: new Date(b.updated),
        changeFrequency: "monthly",
        priority: 0.8,
        alternates: {
          languages: Object.fromEntries(
            locales.map((ll) => [ll, url(ll, `/blog/${b.slug}`)]),
          ),
        },
      });
    }
  }
  return out;
}
