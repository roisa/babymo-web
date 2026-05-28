# Baby Mo

Islamic parenting platform for Indonesian Muslim families — daily doa,
hadith, short surahs, prophet stories, parenting guides, a founder's
notebook, and an auto-updating Islamic calendar.

**Live:** https://babymo.id · **Stack:** Next.js 15 (static export) ·
Tailwind v4 · bilingual ID/EN

---

## Run it

```bash
npm install
npm run dev        # http://localhost:3000  (/ redirects to /id)
npm run build      # outputs static site to ./out
```

`npm run build` automatically (via `prebuild`) fetches YouTube videos,
generates all share images, and builds the search index.

---

## Where the content lives

All content is plain TypeScript in `lib/content/`. To add or edit
anything, open the matching file — no CMS, no database.

| File                       | What it holds                          | Pages it builds        |
| -------------------------- | -------------------------------------- | ---------------------- |
| `doa.ts`                   | 26 daily duas (Arabic + arti + source) | `/doa/[slug]`          |
| `surah.ts`                 | 15 short surahs, verse by verse        | `/surat/[slug]`        |
| `hadith.ts`                | 20 parenting-framed hadith             | `/hadith/[slug]`       |
| `prophets.ts`              | 25 prophet stories for kids            | `/kisah/[slug]`        |
| `parenting.ts`             | 18 situation guides                    | `/parenting/[slug]`    |
| `blog.ts`                  | Long-form articles + **social kits**   | `/blog/[slug]`         |
| `catatan.ts`               | Abi's first-person notes               | `/catatan/[slug]`      |
| `lib/islamic-calendar.ts`  | Seasonal events + cross-links          | `/kalender`            |

Every new entry automatically flows into the sitemap, search index,
homepage, and (for blog/doa) a generated share image — no extra wiring.

> **Editorial rule:** every doa, hadith, and surah must be checked
> against an authoritative source before publishing.

---

## Content for social media (team reference)

Each blog post in `blog.ts` can carry a `kit` — ready-to-post content
for every channel, so the team doesn't start from a blank page:

```ts
kit: {
  quote:       // 1-line WhatsApp / image quote
  carousel:    // 7 Instagram carousel slides (title + body)
  shortScript: // 60-second TikTok / Reels script (hook → body → CTA)
  pin:         // Pinterest title + keyword description
  checklist:   // printable one-page checklist
}
```

These render on the live blog post page under "Multiplication Kit," and
are bilingual (ID + EN). Copy straight from the page when scheduling
posts.

### Generated design assets (auto-built, ready to download)

| Asset                | Size       | Location                       |
| -------------------- | ---------- | ------------------------------ |
| Blog share images    | 1200×630   | `public/og/blog/{locale}/`     |
| Doa share images     | 1200×630   | `public/og/doa/{locale}/`      |
| Doa lockscreens      | 1170×2532  | `public/lockscreens/`          |

Regenerate any of them:

```bash
npm run og          # blog share images (per-tag icon + brand colors)
npm run og:doa      # doa share images
npm run lockscreen  # phone lockscreen wallpapers
```

Edit the design in the matching `scripts/generate-*.mjs` file.

---

## Deploy

Push to `main` → GitHub Actions builds and publishes to `babymo.id`
(`.github/workflows/deploy.yml`). A daily cron
(`.github/workflows/youtube-sync.yml`) rebuilds so the YouTube feed,
"Doa Hari Ini," and the Islamic calendar stay current.

Build env for the live domain:

```bash
NEXT_PUBLIC_BASE_PATH= NEXT_PUBLIC_SITE_URL=https://babymo.id npm run build
```

---

## Roadmap

- [x] Bilingual content platform (doa, hadith, surah, kisah, parenting, blog)
- [x] Islamic calendar with seasonal cross-linking
- [x] Social-media multiplication kits + generated share assets
- [x] Local bookmarks + Doa Hari Ini
- [ ] Audio recitation for doa & surah
- [ ] Merchandise shop (Baby Mo products)
