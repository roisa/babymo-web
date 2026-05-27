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

  for (const locale of locales) {
    for (const p of STATIC_PATHS) {
      out.push({
        url: `${siteUrl}/${locale}${p}`,
        lastModified: now,
        changeFrequency: p === "" ? "weekly" : "monthly",
        priority: p === "" ? 1.0 : 0.7,
        alternates: {
          languages: Object.fromEntries(
            locales.map((l) => [l, `${siteUrl}/${l}${p}`])
          ),
        },
      });
    }
    for (const d of getAllDoa()) {
      out.push({
        url: `${siteUrl}/${locale}/doa/${d.slug}`,
        lastModified: new Date(d.updated),
        changeFrequency: "monthly",
        priority: 0.8,
        alternates: {
          languages: Object.fromEntries(
            locales.map((l) => [l, `${siteUrl}/${l}/doa/${d.slug}`])
          ),
        },
      });
    }
    for (const h of getAllHadith()) {
      out.push({
        url: `${siteUrl}/${locale}/hadith/${h.slug}`,
        lastModified: new Date(h.updated),
        changeFrequency: "monthly",
        priority: 0.8,
        alternates: {
          languages: Object.fromEntries(
            locales.map((ll) => [ll, `${siteUrl}/${ll}/hadith/${h.slug}`]),
          ),
        },
      });
    }
    for (const p of getAllParenting()) {
      out.push({
        url: `${siteUrl}/${locale}/parenting/${p.slug}`,
        lastModified: new Date(p.updated),
        changeFrequency: "monthly",
        priority: 0.85,
        alternates: {
          languages: Object.fromEntries(
            locales.map((ll) => [ll, `${siteUrl}/${ll}/parenting/${p.slug}`]),
          ),
        },
      });
    }
    for (const b of getAllBlogPosts()) {
      out.push({
        url: `${siteUrl}/${locale}/blog/${b.slug}`,
        lastModified: new Date(b.updated),
        changeFrequency: "monthly",
        priority: 0.8,
        alternates: {
          languages: Object.fromEntries(
            locales.map((l) => [l, `${siteUrl}/${l}/blog/${b.slug}`])
          ),
        },
      });
    }
  }
  return out;
}
