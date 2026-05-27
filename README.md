# Baby Mo Web

Islamic parenting knowledge platform for Muslim families.

- **Framework:** Next.js 15 (App Router, static export)
- **Style:** Tailwind v4 (CSS-first tokens)
- **Languages:** ID (default) + EN, routed under `/[locale]/...`
- **Deploy:** GitHub Pages — `https://roisa.github.io/babymo-web/`
- **Future:** custom domain `babymo.id` (DNS not yet pointed)

## Develop

```bash
npm install
npm run dev
```

Open <http://localhost:3000>. The site auto-redirects `/` → `/id/`.

## Build

```bash
npm run build
# Output: ./out — static, ready for any CDN
```

When building for the GitHub Pages subpath, set:

```bash
NEXT_PUBLIC_BASE_PATH=/babymo-web \
NEXT_PUBLIC_SITE_URL=https://roisa.github.io/babymo-web \
npm run build
```

When the time comes to cut over to `babymo.id`:

```bash
NEXT_PUBLIC_BASE_PATH= \
NEXT_PUBLIC_SITE_URL=https://babymo.id \
npm run build
```

## Repo structure

```
app/                Next.js App Router pages + sitemap/robots/manifest
  [locale]/         Locale-segmented routes (id, en)
components/         UI components
lib/
  i18n/             Locale config + dictionaries
  content/          Typed content collections (doa, blog, games)
  seo/              Schema + metadata helpers
public/assets/      Images, OG image, favicons
```

## Content authoring

For now, content is typed TypeScript in `lib/content/*.ts`. v2 will move to MDX
files in `content/` parsed by [Velite](https://velite.js.org/) — already planned,
not yet wired.

**Important:** every dua and hadith must be sourced and reviewed by a qualified
ustadz before merge. See `/[locale]/tentang` for the editorial standard.

## Deployment

GitHub Actions (`.github/workflows/deploy.yml`) builds and pushes to GitHub
Pages on every push to `main`.

To enable in repository settings:

1. Settings → Pages → Source: **GitHub Actions**.
2. Push to `main`. The first build takes ~2 minutes.

## Roadmap

See the architecture plan in the project chat — Phase 1 (this commit) bootstraps
the platform. Phases 2–8 layer in MDX content engine, hadith/parenting entity
collections, programmatic SEO pages, EN locale content depth, and the mobile app.
