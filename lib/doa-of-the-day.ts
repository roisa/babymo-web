import { getAllDoa, getDoaBySlug } from "./content/doa";
import { getCurrentIslamicEvent, type IslamicEvent } from "./islamic-calendar";
import type { Doa } from "./content/types";

/**
 * Picks one doa to feature as "Doa Hari Ini" on the homepage.
 *
 * Logic:
 *   1. If an Islamic event is active/upcoming and has related doa,
 *      rotate through those (so Ramadan surfaces berbuka-puasa, etc.)
 *   2. Otherwise rotate through all doa by day index.
 *
 * Deterministic per calendar day — the same doa shows all day, then
 * changes at the next daily rebuild (youtube-sync cron triggers it).
 */
export function getDoaOfTheDay(now: Date = new Date()): {
  doa: Doa;
  contextEvent: IslamicEvent | null;
} {
  const dayIndex = Math.floor(now.getTime() / 86_400_000); // days since epoch
  const event = getCurrentIslamicEvent(now);

  if (event?.doaSlugs?.length) {
    const slug = event.doaSlugs[dayIndex % event.doaSlugs.length]!;
    const doa = getDoaBySlug(slug);
    if (doa) return { doa, contextEvent: event };
  }

  const all = getAllDoa();
  const doa = all[dayIndex % all.length]!;
  return { doa, contextEvent: null };
}
