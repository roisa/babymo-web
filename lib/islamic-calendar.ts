/**
 * Islamic calendar — drives the homepage banner, the /kalender page,
 * and any seasonal cross-linking between blog, doa, parenting, etc.
 *
 * Each event has a Gregorian start + end (used for matching "is this
 * happening / coming up soon"), a primary blog slug, and arrays of
 * related content slugs (doa / parenting / hadith / catatan / extra
 * blog posts). Server picks the active event at build time — for
 * accurate "today" status, the youtube-sync cron triggers a daily
 * rebuild.
 *
 * Hijri dates are approximate (±1 day depending on moon sighting).
 * For 2026–2027. Add more entries as the calendar advances.
 *
 * Order in this array matters when multiple events overlap — the
 * homepage banner picks the first match. Put more-specific windows
 * before broader ones.
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
  /** Primary blog post slug — what the homepage banner links to */
  blogSlug?: string;
  /** Related doa slugs — surfaced as chips on the calendar page */
  doaSlugs?: string[];
  /** Related parenting situation slugs */
  parentingSlugs?: string[];
  /** Related hadith slugs */
  hadithSlugs?: string[];
  /** Related catatan slugs */
  catatanSlugs?: string[];
  /** Additional blog posts (beyond primary) — for events with multiple */
  extraBlogSlugs?: string[];
};

export const islamicCalendar: IslamicEvent[] = [
  {
    // Eid + Tashriq days — listed FIRST so it takes priority over hajj-1447
    // during their overlap (most homepage visitors aren't on hajj).
    id: "idul-adha-1447",
    hijri: "10–13 Dzulhijjah 1447",
    name: { id: "Idul Adha 1447 H", en: "Eid al-Adha 1447 H" },
    caption: {
      id: "Hari Raya Kurban — momen meneladani pengorbanan Nabi Ibrahim ﷺ bersama keluarga.",
      en: "The Festival of Sacrifice — a moment to follow Prophet Ibrahim's example as a family.",
    },
    startISO: "2026-05-26",
    endISO: "2026-05-30",
    blogSlug: "panduan-idul-adha-dan-qurban-untuk-keluarga",
    doaSlugs: ["mengucap-salam", "sebelum-makan", "mendapat-rezeki"],
    parentingSlugs: ["adab-sehari-hari", "bersyukur"],
    hadithSlugs: ["kasih-sayang-kepada-anak", "main-bersama-anak"],
  },
  {
    // Hajj-specific lead-up. Active May 24–25, then idul-adha-1447
    // takes over from May 26.
    id: "hajj-1447",
    hijri: "8–13 Dzulhijjah 1447",
    name: { id: "Musim Haji 1447 H", en: "Hajj Season 1447 H" },
    caption: {
      id: "Jutaan jamaah dari seluruh dunia — termasuk 221.000+ jamaah Indonesia — sedang melaksanakan ibadah haji.",
      en: "Millions of pilgrims worldwide — including 221,000+ from Indonesia — are performing Hajj right now.",
    },
    startISO: "2026-05-24",
    endISO: "2026-05-30",
    blogSlug: "panduan-haji-untuk-jamaah-indonesia",
    doaSlugs: ["doa-untuk-orang-tua", "perlindungan-anak"],
    parentingSlugs: ["bonding-orangtua"],
    hadithSlugs: ["doa-orang-tua-mustajab"],
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
    doaSlugs: ["doa-pagi", "doa-petang", "melihat-bulan-baru"],
    parentingSlugs: ["mulai-sholat", "bersyukur"],
    catatanSlugs: ["doa-relay-anak-kembar"],
  },
  {
    id: "muharram-1448",
    hijri: "Muharram 1448",
    name: { id: "Awal Tahun Hijriyah 1448", en: "Islamic New Year 1448" },
    caption: {
      id: "Bulan suci pertama dalam kalender hijriyah — momen reset spiritual.",
      en: "The first sacred month of the Hijri year — a moment for spiritual reset.",
    },
    startISO: "2026-06-16",
    endISO: "2026-07-15",
    blogSlug: "doa-awal-tahun-hijriyah-untuk-anak",
    extraBlogSlugs: [
      "aktivitas-muharram-untuk-anak",
      "menjelaskan-tahun-baru-islam-ke-anak",
      "kisah-hijrah-nabi-untuk-anak",
    ],
    doaSlugs: ["melihat-bulan-baru", "doa-pagi", "doa-petang"],
    parentingSlugs: ["adab-sehari-hari"],
  },
  {
    id: "asyura-1448",
    hijri: "10 Muharram 1448",
    name: { id: "Hari Asyura", en: "Day of Ashura" },
    caption: {
      id: "Hari ke-10 Muharram — puasa sunnah yang dianjurkan Rasulullah ﷺ.",
      en: "The 10th of Muharram — a recommended fast of the Prophet ﷺ.",
    },
    startISO: "2026-06-24",
    endISO: "2026-06-27",
    blogSlug: "puasa-asyura-untuk-anak",
    doaSlugs: ["berbuka-puasa"],
    parentingSlugs: ["puasa-pertama"],
  },
  {
    id: "maulid-1448",
    hijri: "12 Rabiul Awal 1448",
    name: { id: "Maulid Nabi 1448", en: "Mawlid 1448" },
    caption: {
      id: "Memperingati kelahiran Rasulullah ﷺ — momen mengenalkan teladan beliau pada anak.",
      en: "Commemorating the Prophet's ﷺ birth — a moment to introduce his example to children.",
    },
    startISO: "2026-08-23",
    endISO: "2026-08-27",
    blogSlug: "maulid-mengenalkan-rasulullah-pada-anak",
    doaSlugs: ["doa-pagi", "doa-petang"],
  },
  {
    id: "isra-miraj-1448",
    hijri: "27 Rajab 1448",
    name: { id: "Isra Mi'raj 1448", en: "Isra & Mi'raj 1448" },
    caption: {
      id: "Perjalanan malam Rasulullah ﷺ — awal mula perintah sholat lima waktu.",
      en: "The Prophet's ﷺ night journey — the origin of the five daily prayers.",
    },
    startISO: "2027-01-04",
    endISO: "2027-01-07",
    blogSlug: "isra-miraj-untuk-anak",
    doaSlugs: ["doa-pagi", "doa-petang"],
  },
  {
    id: "rajab-1448",
    hijri: "Rajab 1448",
    name: { id: "Bulan Rajab", en: "Month of Rajab" },
    caption: {
      id: "Salah satu bulan haram — waktu yang baik untuk memperbanyak doa.",
      en: "One of the sacred months — a good time to increase your du'as.",
    },
    startISO: "2026-12-10",
    endISO: "2027-01-08",
    blogSlug: "rajab-bulan-haram-bersama-anak",
    extraBlogSlugs: ["isra-miraj-untuk-anak"],
    doaSlugs: ["doa-pagi", "doa-petang", "perlindungan-anak"],
    parentingSlugs: ["bersyukur"],
  },
  {
    id: "syaban-1448",
    hijri: "Sya'ban 1448",
    name: { id: "Bulan Sya'ban", en: "Month of Sha'ban" },
    caption: {
      id: "Persiapan menuju Ramadan — tradisi puasa sunnah dan amal kebaikan.",
      en: "Preparation for Ramadan — sunnah fasting and good deeds.",
    },
    startISO: "2027-01-09",
    endISO: "2027-02-07",
    blogSlug: "syaban-menyiapkan-hati-menuju-ramadan",
    doaSlugs: ["doa-pagi", "doa-petang"],
    parentingSlugs: ["puasa-pertama", "mulai-sholat"],
  },
  {
    id: "lailatul-qadar-1448",
    hijri: "10 Malam Terakhir Ramadan 1448",
    name: { id: "Lailatul Qadar 1448", en: "Laylatul Qadr 1448" },
    caption: {
      id: "Malam yang lebih baik dari seribu bulan — dicari di 10 malam terakhir Ramadan.",
      en: "The night better than a thousand months — sought in the last ten nights of Ramadan.",
    },
    startISO: "2027-02-28",
    endISO: "2027-03-10",
    blogSlug: "lailatul-qadar-untuk-anak",
    doaSlugs: ["doa-pagi", "doa-petang", "berbuka-puasa"],
  },
  {
    id: "ramadan-1448",
    hijri: "Ramadan 1448",
    name: { id: "Ramadan 1448", en: "Ramadan 1448" },
    caption: {
      id: "Bulan suci — puasa, qiyam, dan momen mengajarkan ibadah pada anak.",
      en: "The holy month — fasting, qiyam, and teaching children worship.",
    },
    startISO: "2027-02-08",
    endISO: "2027-03-09",
    blogSlug: "ramadan-bersama-anak",
    extraBlogSlugs: ["nuzulul-quran-untuk-anak"],
    doaSlugs: ["berbuka-puasa", "doa-pagi", "doa-petang"],
    parentingSlugs: ["puasa-pertama", "adab-sehari-hari", "anak-tidak-mau-sholat"],
    catatanSlugs: ["disindir-si-kembar-waktu-makan"],
  },
  {
    id: "idul-fitri-1448",
    hijri: "1 Syawal 1448",
    name: { id: "Idul Fitri 1448 H", en: "Eid al-Fitr 1448 H" },
    caption: {
      id: "Hari kemenangan setelah sebulan berpuasa — sholat Ied, takbir, dan saling memaafkan.",
      en: "The day of joy after a month of fasting — Eid prayer, takbir, and seeking forgiveness.",
    },
    startISO: "2027-03-10",
    endISO: "2027-03-13",
    blogSlug: "idul-fitri-untuk-anak",
    extraBlogSlugs: ["puasa-syawal-untuk-anak", "zakat-fitrah-untuk-anak"],
    doaSlugs: ["mengucap-salam", "doa-untuk-orang-tua", "mendapat-rezeki"],
  },
];

// ─── Helpers ────────────────────────────────────────────────────────

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

/**
 * Days since an event ended (0 if active or upcoming).
 */
export function daysSince(e: IslamicEvent, now: Date = new Date()): number {
  const x = new Date(e.endISO).getTime();
  const delta = now.getTime() - x;
  if (delta <= 0) return 0;
  return Math.ceil(delta / (24 * 60 * 60 * 1000));
}

/**
 * Groups all events by status, sorted within each bucket. Used by
 * the /kalender page.
 */
export function groupEvents(now: Date = new Date()) {
  const active: IslamicEvent[] = [];
  const upcoming: IslamicEvent[] = [];
  const past: IslamicEvent[] = [];
  for (const e of islamicCalendar) {
    const status = eventStatus(e, now);
    if (status === "active") active.push(e);
    else if (status === "upcoming") upcoming.push(e);
    else past.push(e);
  }
  // Active sorted by start asc; upcoming by start asc; past by end desc
  active.sort((a, b) => a.startISO.localeCompare(b.startISO));
  upcoming.sort((a, b) => a.startISO.localeCompare(b.startISO));
  past.sort((a, b) => b.endISO.localeCompare(a.endISO));
  return { active, upcoming, past };
}

/**
 * Current Hijri date formatted with native Intl Islamic calendar.
 * Examples:
 *   id → "12 Zulhijah 1447 H"
 *   en → "Dhū al-Ḥijjah 12, 1447 AH"
 *
 * Note: the native Islamic calendar in Intl is the tabular calendar,
 * which can be ±1 day off from sighting-based dates. Good enough for
 * a "today is roughly..." display; never use for prayer-time precision.
 */
export function todayHijri(
  locale: "id" | "en",
  now: Date = new Date(),
): string {
  const tag = locale === "id" ? "id-ID-u-ca-islamic" : "en-u-ca-islamic";
  try {
    return new Intl.DateTimeFormat(tag, {
      day: "numeric",
      month: "long",
      year: "numeric",
    }).format(now);
  } catch {
    // Old runtime without islamic calendar — fall back to Gregorian
    return new Intl.DateTimeFormat(locale === "id" ? "id-ID" : "en-US", {
      day: "numeric",
      month: "long",
      year: "numeric",
    }).format(now);
  }
}

// ─── Hijri month helpers ────────────────────────────────────────────

/**
 * Localized Hijri month names. Indexed 0–11.
 */
export const HIJRI_MONTHS: Record<"id" | "en", string[]> = {
  id: [
    "Muharram",
    "Safar",
    "Rabi'ul Awwal",
    "Rabi'ul Akhir",
    "Jumadil Awwal",
    "Jumadil Akhir",
    "Rajab",
    "Sya'ban",
    "Ramadan",
    "Syawal",
    "Dzulqa'idah",
    "Dzulhijjah",
  ],
  en: [
    "Muharram",
    "Safar",
    "Rabi' al-Awwal",
    "Rabi' al-Thani",
    "Jumada al-Awwal",
    "Jumada al-Thani",
    "Rajab",
    "Sha'ban",
    "Ramadan",
    "Shawwal",
    "Dhul Qa'dah",
    "Dhul Hijjah",
  ],
};

/**
 * Returns the Hijri month (1–12) and year for a given Gregorian date.
 * Used to align events to a 12-month strip without depending on the
 * exact day.
 */
export function hijriPosition(date: Date = new Date()): {
  month: number;
  year: number;
} {
  try {
    const parts = new Intl.DateTimeFormat("en-u-ca-islamic", {
      month: "numeric",
      year: "numeric",
    }).formatToParts(date);
    const month = parseInt(parts.find((p) => p.type === "month")!.value, 10);
    const year = parseInt(parts.find((p) => p.type === "year")!.value, 10);
    return { month, year };
  } catch {
    return { month: 12, year: 1447 };
  }
}

/**
 * Compact current Hijri month string — for chips and small surfaces.
 * Example: "Dzulhijjah 1447 H".
 */
export function currentHijriMonth(
  locale: "id" | "en",
  now: Date = new Date(),
): string {
  const { month, year } = hijriPosition(now);
  return `${HIJRI_MONTHS[locale][month - 1]} ${year} H`;
}

/**
 * 12 consecutive Hijri months starting from the current one — used
 * by the /kalender 12-month strip.
 */
export function nextHijriMonths(
  count: number = 12,
  now: Date = new Date(),
): { month: number; year: number }[] {
  const { month, year } = hijriPosition(now);
  const out: { month: number; year: number }[] = [];
  for (let i = 0; i < count; i++) {
    const m = ((month - 1 + i) % 12) + 1;
    const y = year + Math.floor((month - 1 + i) / 12);
    out.push({ month: m, year: y });
  }
  return out;
}

/**
 * For each event, returns its Hijri start month/year. Used by the
 * /kalender 12-month strip to mark which months contain events.
 */
export function eventHijriPosition(e: IslamicEvent): {
  month: number;
  year: number;
} {
  return hijriPosition(new Date(e.startISO));
}

/**
 * Gregorian date range as "DD MMM – DD MMM YYYY" or "DD MMM YYYY".
 */
export function formatGregorianRange(
  e: IslamicEvent,
  locale: "id" | "en",
): string {
  const start = new Date(e.startISO);
  const end = new Date(e.endISO);
  // Subtract 1 day from end (endISO is exclusive)
  end.setDate(end.getDate() - 1);
  const tag = locale === "id" ? "id-ID" : "en-US";
  const sameDay = start.toDateString() === end.toDateString();
  const sameYear = start.getFullYear() === end.getFullYear();
  const sameMonth = sameYear && start.getMonth() === end.getMonth();

  if (sameDay) {
    return new Intl.DateTimeFormat(tag, {
      day: "numeric",
      month: "long",
      year: "numeric",
    }).format(start);
  }
  if (sameMonth) {
    const day1 = new Intl.DateTimeFormat(tag, { day: "numeric" }).format(start);
    const rest = new Intl.DateTimeFormat(tag, {
      day: "numeric",
      month: "long",
      year: "numeric",
    }).format(end);
    return `${day1} – ${rest}`;
  }
  const sFmt = new Intl.DateTimeFormat(tag, {
    day: "numeric",
    month: "long",
    year: sameYear ? undefined : "numeric",
  }).format(start);
  const eFmt = new Intl.DateTimeFormat(tag, {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(end);
  return `${sFmt} – ${eFmt}`;
}
