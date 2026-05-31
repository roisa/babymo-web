import type { MetadataRoute } from "next";
import { locales, siteUrl } from "@/lib/i18n/config";
import { getAllDoa } from "@/lib/content/doa";
import { getAllBlogPosts } from "@/lib/content/blog";
import { getAllHadith } from "@/lib/content/hadith";
import { getAllParenting } from "@/lib/content/parenting";
import { getAllCatatan } from "@/lib/content/catatan";
import { getAllSurah } from "@/lib/content/surah";
import { getAllProphets } from "@/lib/content/prophets";
import { allSpotOddSlugs } from "@/lib/games/spot-odd";
import { allSpotDiffSlugs } from "@/lib/games/spot-difference";
import { allArchetypeKeys } from "@/lib/games/personality";

export const dynamic = "force-static";

function uniqueDoaTags(): string[] {
  const t = new Set<string>();
  for (const d of getAllDoa()) for (const s of d.situations) t.add(s);
  return Array.from(t);
}

function uniqueHadithThemes(): string[] {
  const t = new Set<string>();
  for (const h of getAllHadith()) for (const th of h.themes) t.add(th);
  return Array.from(t);
}

const STATIC_PATHS = [
  "",
  // Primary nav hubs
  "/play",
  "/learn",
  "/watch",
  "/orangtua",
  // Content indexes
  "/doa",
  "/hadith",
  "/parenting",
  "/catatan",
  "/surat",
  "/asmaul-husna",
  "/kisah",
  "/blog",
  "/kalender",
  "/unduh",
  "/apps/kids-activity",
  "/permainan",
  "/momen",
  // Interactive quizzes & games
  "/kuis",
  "/kuis/cari-yang-beda",
  "/kuis/cari-perbedaan",
  "/kuis/tebak-perasaan",
  "/kuis/baby-mo-kamu",
  // Info & legal
  "/faq",
  "/tentang",
  "/tim",
  "/dukung",
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
    for (const tag of uniqueDoaTags()) {
      out.push({
        url: url(locale, `/doa/kategori/${tag}`),
        lastModified: now,
        changeFrequency: "weekly",
        priority: 0.7,
        alternates: {
          languages: Object.fromEntries(
            locales.map((ll) => [ll, url(ll, `/doa/kategori/${tag}`)]),
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
    for (const theme of uniqueHadithThemes()) {
      out.push({
        url: url(locale, `/hadith/tema/${theme}`),
        lastModified: now,
        changeFrequency: "weekly",
        priority: 0.7,
        alternates: {
          languages: Object.fromEntries(
            locales.map((ll) => [ll, url(ll, `/hadith/tema/${theme}`)]),
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
    for (const n of getAllCatatan()) {
      out.push({
        url: url(locale, `/catatan/${n.slug}`),
        lastModified: new Date(n.published),
        changeFrequency: "monthly",
        priority: 0.75,
        alternates: {
          languages: Object.fromEntries(
            locales.map((ll) => [ll, url(ll, `/catatan/${n.slug}`)]),
          ),
        },
      });
    }
    for (const s of getAllSurah()) {
      out.push({
        url: url(locale, `/surat/${s.slug}`),
        lastModified: new Date(s.published),
        changeFrequency: "yearly",
        priority: 0.85,
        alternates: {
          languages: Object.fromEntries(
            locales.map((ll) => [ll, url(ll, `/surat/${s.slug}`)]),
          ),
        },
      });
    }
    for (const p of getAllProphets()) {
      out.push({
        url: url(locale, `/kisah/${p.slug}`),
        lastModified: new Date(p.published),
        changeFrequency: "yearly",
        priority: 0.8,
        alternates: {
          languages: Object.fromEntries(
            locales.map((ll) => [ll, url(ll, `/kisah/${p.slug}`)]),
          ),
        },
      });
    }
    const quizPaths = [
      ...allSpotOddSlugs().map((s) => `/kuis/cari-yang-beda/${s}`),
      ...allSpotDiffSlugs().map((s) => `/kuis/cari-perbedaan/${s}`),
      ...allArchetypeKeys().map((k) => `/kuis/baby-mo-kamu/hasil/${k}`),
    ];
    for (const p of quizPaths) {
      out.push({
        url: url(locale, p),
        lastModified: now,
        changeFrequency: "monthly",
        priority: 0.7,
        alternates: {
          languages: Object.fromEntries(locales.map((ll) => [ll, url(ll, p)])),
        },
      });
    }
  }
  return out;
}
