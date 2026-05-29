# Baby Mo — Growth & Monetization Plan

How the **games** (play.babymo.id) and the **content platform**
(babymo.id) work together to grow the brand for free, and how we earn
from it later — without charging for the games.

---

## The model: free games as the funnel, the platform as the asset

```
Game (play.babymo.id)
   → "Share your child's result"  ──►  friend plays
        → soft nudge to babymo.id (content + PWA install + newsletter)
             → loyal parent audience  ──►  this is what we monetize
```

- **Kids play** the games → games are the viral hook.
- **Parents share & read** → babymo.id is where trust and reach accrue.
- We never sell the games. We monetize the *audience* the games build.

---

## Growth (free, already in motion in this branch)

| Lever | Status | Where |
| --- | --- | --- |
| Branded share on every game page | ✅ shipped | `babymo-app/www/bm-kit.js` (`BabyMo.share` / `shareScore`) |
| Result-screen share (score brag) | ✅ doa-harian, hijaiyah; pattern ready for the rest | game result screens |
| Privacy-friendly analytics | ✅ wired, flip on by registering the domain | `bm-kit.js` + `components/Analytics.tsx` |
| Web → games links fixed & synced | ✅ now point to `play.babymo.id` | `lib/content/games.ts` |
| Tablet/iPad layout | ✅ portal + key games | `index.html`, card games |

**Next growth bets (not yet built):**
1. Finish result-screen share on all remaining games (memory-match,
   dua-game, arabic-spelling, look-and-find, beat, puzzles).
2. Generate a **shareable result image** (canvas → PNG) with the score
   + Baby Mo, so WhatsApp/IG shares carry a rich card, not just text.
3. "Challenge a friend" deep link that opens the same game.
4. Cross-link every game's end screen to one relevant babymo.id page
   (e.g. Doa Harian game → /doa), turning players into readers.
5. Turn on analytics (Plausible site for `babymo.id` + `play.babymo.id`)
   so we can see which game drives the most shares and platform visits.

---

## Monetization (planned — keep everything free to use)

Ordered by fit and friction, lowest friction first.

### 1. Sadaqah / "Traktir Baby Mo" (recommended first)
A simple donation CTA on babymo.id. Culturally natural for an Islamic
kids' brand, zero friction, keeps everything free.
- **Tools (ID):** Saweria, Trakteer, or a bank/QRIS link.
- **Build:** one `components/SupportCard.tsx` + a `/dukung` page; place a
  soft CTA in the footer and at the end of articles.
- **Effort:** small.

### 2. Sponsorship & affiliate placements
Native, relevant products on parenting/blog pages: Islamic kids' books,
prayer mats, modest kidswear, parenting courses.
- **Build:** an optional `sponsor` field on `blog`/`parenting` content
  types → renders a labelled "Rekomendasi" card. Clearly marked, never
  inside games.
- **Effort:** small–medium. **Needs:** analytics live first (reach proof).

### 3. Premium printables — "Baby Mo Pack"
Far more sellable than a paid game: du'a wall charts, hijaiyah
worksheets, a Ramadan activity pack. We already generate share images
and the README mentions printable checklists in the social `kit`.
- **Build:** a `/pack` page + a payment link (Gumroad / Lemon Squeezy /
  Mayar for ID). PDFs hosted as static assets.
- **Effort:** medium (content production is the real cost).

### 4. Brand partnerships
Once analytics prove reach, halal kids' brands will pay for the audience.
Gate this behind real numbers; don't pursue cold.

---

## What NOT to do (for now)
- ❌ Paid/locked games — they're short single-loop mini-games; gating
  them kills the funnel and the goodwill.
- ❌ Intrusive ad networks aimed at children — violates store/COPPA-style
  norms and breaks trust with parents.
- ❌ Account walls before value — keep first play and first read free.

---

## Suggested sequence
1. **Now:** ship this branch (share + tablet + fixed links + analytics).
2. **Week 1:** register Plausible, watch which game shares best.
3. **Week 2:** add result-image sharing to the top-shared game.
4. **Week 3:** add the Sadaqah CTA.
5. **Month 2:** based on traffic, add the printables pack or sponsor cards.
