import type { Locale } from "@/lib/i18n/config";

type Props = { locale: Locale };

/**
 * Slow horizontal marquee between hero and Values. Short Arabic
 * phrases families say daily — Bismillah, Alhamdulillah, MashaAllah.
 *
 * Pure CSS marquee (see globals.css → @keyframes ribbon-drift). The
 * track contains the phrase list twice so the loop seamlessly resets
 * at -50%.
 */
export function QuoteRibbon({ locale }: Props) {
  const items =
    locale === "id"
      ? [
          { ar: "بِسْمِ اللَّهِ", id: "Bismillah" },
          { ar: "اَلْحَمْدُ لِلَّهِ", id: "Alhamdulillah" },
          { ar: "مَا شَاءَ اللَّهُ", id: "Masha Allah" },
          { ar: "سُبْحَانَ اللَّهِ", id: "Subhanallah" },
          { ar: "بَارَكَ اللَّهُ فِيكَ", id: "Barakallahu fik" },
          { ar: "اَللَّهُمَّ بَارِكْ", id: "Allahumma barik" },
        ]
      : [
          { ar: "بِسْمِ اللَّهِ", id: "In the name of Allah" },
          { ar: "اَلْحَمْدُ لِلَّهِ", id: "Praise be to Allah" },
          { ar: "مَا شَاءَ اللَّهُ", id: "As Allah willed" },
          { ar: "سُبْحَانَ اللَّهِ", id: "Glory to Allah" },
          { ar: "بَارَكَ اللَّهُ فِيكَ", id: "May Allah bless you" },
          { ar: "اَللَّهُمَّ بَارِكْ", id: "O Allah, bless" },
        ];

  // Repeat the base set enough that ONE half of the track is wider than
  // the largest display, then duplicate that half. The -50% translate
  // then loops seamlessly with no empty gap on big iMac screens.
  const half = [...items, ...items, ...items, ...items];
  const track = [...half, ...half];

  return (
    <section
      aria-label={locale === "id" ? "Kalimat baik harian" : "Daily phrases"}
      className="border-y border-hairline bg-sage-soft/40"
    >
      <div className="marquee py-3">
        <div className="marquee-track">
          {track.map((it, i) => (
            <span
              key={i}
              className="mx-6 inline-flex items-center gap-3 text-[13px]"
            >
              <span
                dir="rtl"
                lang="ar"
                className="font-arabic text-[20px] leading-none text-sage-deep"
              >
                {it.ar}
              </span>
              <span className="text-whisper">{it.id}</span>
              <span className="text-hairline" aria-hidden>
                ✦
              </span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
