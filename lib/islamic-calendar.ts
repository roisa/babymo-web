/**
 * Islamic calendar context — used by the homepage banner and the
 * "Now in the Islamic calendar" widget to auto-promote seasonal content.
 *
 * Each event has a Gregorian start + end (used for matching "is this
 * happening / coming up soon"), a slug pointing at the blog post that
 * goes with it, and a CTA label. The active event is picked by the
 * server at build time — for true real-time accuracy run a daily
 * rebuild (the youtube-sync cron already does this).
 *
 * Hijri dates are approximate (±1 day depending on moon sighting).
 * For 2026–2027. Add more entries as the calendar advances.
 */
export type IslamicEvent = {
  /** Stable identifier */
  id: string;
  /** Hijri label, e.g. "Muharram 1448" */
  hijri: string;
  /** Bilingual display name */
  name: { id: string; en: string };
  /** Bilingual one-line context shown under the banner */
  caption: { id: string; en: string };
  /** ISO Gregorian start date (00:00 local) */
  startISO: string;
  /** ISO Gregorian end date (00:00 local) — exclusive */
  endISO: string;
  /** Blog post slug to link to; falls back if not yet published */
  blogSlug?: string;
  /** Doa slug for the auxiliary card (optional) */
  doaSlug?: string;
};

export const islamicCalendar: IslamicEvent[] = [
  {
    id: "muharram-1448",
    hijri: "Muharram 1448",
    name: { id: "Awal Tahun Hijriyah 1448", en: "Islamic New Year 1448" },
    caption: {
      id: "Bulan suci pertama dalam kalender hijriyah — momen reset spiritual.",
      en: "The first sacred month of the Hijri year — a moment for spiritual reset.",
    },
    startISO: "2026-06-26",
    endISO: "2026-07-25",
    blogSlug: "doa-awal-tahun-hijriyah-untuk-anak",
  },
  {
    id: "asyura-1448",
    hijri: "10 Muharram 1448",
    name: { id: "Hari Asyura", en: "Day of Ashura" },
    caption: {
      id: "Hari ke-10 Muharram — puasa sunnah yang dianjurkan Rasulullah ﷺ.",
      en: "The 10th of Muharram — a recommended fast of the Prophet ﷺ.",
    },
    startISO: "2026-07-04",
    endISO: "2026-07-06",
    blogSlug: "puasa-asyura-untuk-anak",
  },
  {
    id: "rajab-1448",
    hijri: "Rajab 1448",
    name: { id: "Bulan Rajab", en: "Month of Rajab" },
    caption: {
      id: "Salah satu bulan haram — waktu yang baik untuk memperbanyak doa.",
      en: "One of the sacred months — a good time to increase your du'as.",
    },
    startISO: "2026-12-22",
    endISO: "2027-01-20",
  },
  {
    id: "syaban-1448",
    hijri: "Sya'ban 1448",
    name: { id: "Bulan Sya'ban", en: "Month of Sha'ban" },
    caption: {
      id: "Persiapan menuju Ramadan — tradisi puasa sunnah dan amal kebaikan.",
      en: "Preparation for Ramadan — sunnah fasting and good deeds.",
    },
    startISO: "2027-01-21",
    endISO: "2027-02-18",
  },
  {
    id: "ramadan-1448",
    hijri: "Ramadan 1448",
    name: { id: "Ramadan 1448", en: "Ramadan 1448" },
    caption: {
      id: "Bulan suci — puasa, qiyam, dan momen mengajarkan ibadah pada anak.",
      en: "The holy month — fasting, qiyam, and teaching children worship.",
    },
    startISO: "2027-02-19",
    endISO: "2027-03-20",
    blogSlug: "ramadan-bersama-anak",
  },
  {
    id: "dzulhijjah-1447",
    hijri: "Dzulhijjah 1447",
    name: { id: "Dzulhijjah 1447", en: "Dhul Hijjah 1447" },
    caption: {
      id: "10 hari pertama bulan yang paling dicintai Allah — waktu emas amal saleh.",
      en: "The first 10 days — the most beloved days of the year for good deeds.",
    },
    startISO: "2026-05-17",
    endISO: "2026-06-15",
    blogSlug: "10-hari-dzulhijjah-bareng-anak",
  },
];

/**
 * Returns the event currently active OR coming up in the next 14 days.
 * Used to drive the homepage seasonal banner.
 */
export function getCurrentIslamicEvent(
  now: Date = new Date(),
): IslamicEvent | null {
  const t = now.getTime();
  const SOON = 14 * 24 * 60 * 60 * 1000; // 14 days
  // Active first
  for (const e of islamicCalendar) {
    const s = new Date(e.startISO).getTime();
    const x = new Date(e.endISO).getTime();
    if (t >= s && t < x) return e;
  }
  // Upcoming within SOON window — pick the nearest
  let best: { e: IslamicEvent; delta: number } | null = null;
  for (const e of islamicCalendar) {
    const s = new Date(e.startISO).getTime();
    const delta = s - t;
    if (delta > 0 && delta <= SOON) {
      if (!best || delta < best.delta) best = { e, delta };
    }
  }
  return best?.e ?? null;
}

/**
 * Status of an event — used for the eyebrow chip on the banner.
 */
export function eventStatus(
  e: IslamicEvent,
  now: Date = new Date(),
): "active" | "upcoming" | "past" {
  const t = now.getTime();
  const s = new Date(e.startISO).getTime();
  const x = new Date(e.endISO).getTime();
  if (t >= s && t < x) return "active";
  if (t < s) return "upcoming";
  return "past";
}

/**
 * Days until an upcoming event (0 if active or past).
 */
export function daysUntil(e: IslamicEvent, now: Date = new Date()): number {
  const s = new Date(e.startISO).getTime();
  const delta = s - now.getTime();
  if (delta <= 0) return 0;
  return Math.ceil(delta / (24 * 60 * 60 * 1000));
}
