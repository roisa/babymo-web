"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import {
  Coordinates,
  CalculationMethod,
  PrayerTimes,
  Prayer,
} from "adhan";
import { type Locale, pathFor } from "@/lib/i18n/config";

const LOC_KEY = "babymo.location";

// Major Indonesian cities — the reliable path. Geolocation is flaky in
// in-app browsers (WhatsApp/IG) and when location services are off, so
// a manual picker is the primary UX; GPS is an optional upgrade.
const CITIES: { name: string; lat: number; lng: number }[] = [
  { name: "Jakarta", lat: -6.2088, lng: 106.8456 },
  { name: "Bandung", lat: -6.9175, lng: 107.6191 },
  { name: "Surabaya", lat: -7.2575, lng: 112.7521 },
  { name: "Semarang", lat: -6.9667, lng: 110.4167 },
  { name: "Yogyakarta", lat: -7.7956, lng: 110.3695 },
  { name: "Medan", lat: 3.5952, lng: 98.6722 },
  { name: "Palembang", lat: -2.9761, lng: 104.7754 },
  { name: "Makassar", lat: -5.1477, lng: 119.4327 },
  { name: "Denpasar", lat: -8.6705, lng: 115.2126 },
  { name: "Banjarmasin", lat: -3.3194, lng: 114.5908 },
  { name: "Balikpapan", lat: -1.2379, lng: 116.8529 },
  { name: "Pekanbaru", lat: 0.5071, lng: 101.4478 },
  { name: "Padang", lat: -0.9471, lng: 100.4172 },
  { name: "Malang", lat: -7.9666, lng: 112.6326 },
  { name: "Pontianak", lat: -0.0263, lng: 109.3425 },
  { name: "Bekasi", lat: -6.2383, lng: 106.9756 },
  { name: "Tangerang", lat: -6.1781, lng: 106.6300 },
  { name: "Depok", lat: -6.4025, lng: 106.7942 },
  { name: "Banda Aceh", lat: 5.5483, lng: 95.3238 },
  { name: "Mataram", lat: -8.5833, lng: 116.1167 },
  { name: "Manado", lat: 1.4748, lng: 124.8421 },
  { name: "Jayapura", lat: -2.5337, lng: 140.7181 },
];

// Fallback: Jakarta (used until the user picks a city or grants GPS)
const DEFAULT = { lat: -6.2088, lng: 106.8456, label: "Jakarta" };

type PrayerName = "fajr" | "dhuhr" | "asr" | "maghrib" | "isha";

// Each prayer → a Baby Mo suggestion + a link into the content.
const SUGGESTION: Record<
  PrayerName,
  { id: { text: string; href: string }; en: { text: string; href: string } }
> = {
  fajr: {
    id: { text: "Mulai pagi dengan doa bangun tidur bersama si kecil.", href: "/doa/bangun-tidur" },
    en: { text: "Start the morning with the waking du'a together.", href: "/doa/bangun-tidur" },
  },
  dhuhr: {
    id: { text: "Waktu makan siang — ajak si kecil baca doa sebelum makan.", href: "/doa/sebelum-makan" },
    en: { text: "Lunchtime — read the meal du'a with your little one.", href: "/doa/sebelum-makan" },
  },
  asr: {
    id: { text: "Sore hari, waktu yang baik membaca doa petang.", href: "/doa/doa-petang" },
    en: { text: "Afternoon — a good time for the evening du'a.", href: "/doa/doa-petang" },
  },
  maghrib: {
    id: { text: "Menjelang malam — baca doa petang & dzikir perlindungan.", href: "/doa/doa-petang" },
    en: { text: "As night falls — evening du'a & protective dhikr.", href: "/doa/doa-petang" },
  },
  isha: {
    id: { text: "Sebentar lagi tidur — siapkan doa sebelum tidur.", href: "/doa/sebelum-tidur" },
    en: { text: "Almost bedtime — get ready with the bedtime du'a.", href: "/doa/sebelum-tidur" },
  },
};

const PRAYER_LABEL: Record<PrayerName, { id: string; en: string }> = {
  fajr: { id: "Subuh", en: "Fajr" },
  dhuhr: { id: "Dzuhur", en: "Dhuhr" },
  asr: { id: "Ashar", en: "Asr" },
  maghrib: { id: "Maghrib", en: "Maghrib" },
  isha: { id: "Isya", en: "Isha" },
};

const ORDER: PrayerName[] = ["fajr", "dhuhr", "asr", "maghrib", "isha"];

type Props = { locale: Locale };

export function PrayerWidget({ locale }: Props) {
  const [coords, setCoords] = useState<{ lat: number; lng: number; label: string } | null>(null);
  const [now, setNow] = useState<Date>(new Date());
  const [denied, setDenied] = useState(false);
  const [locating, setLocating] = useState(false);

  // Load saved location, else default to Jakarta. Try to upgrade to
  // real geolocation in the background (no blocking).
  useEffect(() => {
    try {
      const saved = localStorage.getItem(LOC_KEY);
      if (saved) {
        setCoords(JSON.parse(saved));
        return;
      }
    } catch {
      /* ignore */
    }
    setCoords(DEFAULT);
  }, []);

  // Tick every 30s so the countdown stays fresh
  useEffect(() => {
    const t = setInterval(() => setNow(new Date()), 30_000);
    return () => clearInterval(t);
  }, []);

  function pickCity(name: string) {
    const city = CITIES.find((c) => c.name === name);
    if (!city) return;
    const c = { lat: city.lat, lng: city.lng, label: city.name };
    setCoords(c);
    setNow(new Date());
    setDenied(false);
    try {
      localStorage.setItem(LOC_KEY, JSON.stringify(c));
    } catch {
      /* ignore */
    }
  }

  function useMyLocation() {
    if (!navigator.geolocation) {
      setDenied(true);
      return;
    }
    setDenied(false);
    setLocating(true);
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        const c = {
          lat: pos.coords.latitude,
          lng: pos.coords.longitude,
          label: locale === "id" ? "Lokasimu" : "Your location",
        };
        setCoords(c);
        setNow(new Date()); // force fresh recompute with new coords
        setLocating(false);
        try {
          localStorage.setItem(LOC_KEY, JSON.stringify(c));
        } catch {
          /* ignore */
        }
      },
      () => {
        setDenied(true);
        setLocating(false);
      },
      { enableHighAccuracy: false, timeout: 10000, maximumAge: 600000 },
    );
  }

  if (!coords) return null;

  const c = new Coordinates(coords.lat, coords.lng);
  // Kemenag / Indonesia commonly aligns with Muslim World League method.
  const params = CalculationMethod.MuslimWorldLeague();
  const times = new PrayerTimes(c, now, params);

  const current = times.currentPrayer(now);
  const next = times.nextPrayer(now);

  // Map adhan's Prayer enum to our names
  const nextName = prayerEnumToName(next);
  const nextTime = nextName ? times.timeForPrayer(next) : null;

  const minsToNext = nextTime
    ? Math.max(0, Math.round((nextTime.getTime() - now.getTime()) / 60000))
    : null;

  // Choose which suggestion to show: the upcoming prayer (or current
  // if between isha and fajr we show bedtime).
  const focusName: PrayerName =
    nextName ?? prayerEnumToName(current) ?? "isha";
  const sug = SUGGESTION[focusName][locale];

  const fmt = (d: Date | null) =>
    d
      ? d.toLocaleTimeString(locale === "id" ? "id-ID" : "en-US", {
          hour: "2-digit",
          minute: "2-digit",
        })
      : "—";

  const countdown = (() => {
    if (minsToNext == null) return "";
    if (minsToNext < 60) return `${minsToNext} ${locale === "id" ? "menit lagi" : "min"}`;
    const h = Math.floor(minsToNext / 60);
    const m = minsToNext % 60;
    return `${h}${locale === "id" ? " jam" : "h"} ${m}${locale === "id" ? " mnt" : "m"}`;
  })();

  return (
    <div className="rounded-[24px] border border-hairline bg-paper p-6 sm:p-7">
      <div className="flex items-start justify-between gap-4">
        <p className="flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.14em] text-brave-deep">
          <span className="pulse-dot inline-block h-1.5 w-1.5 rounded-full bg-brave text-brave" />
          {locale === "id" ? "Waktu Sholat" : "Prayer Times"}
        </p>
        <p className="text-[12.5px] text-whisper">
          {now.toLocaleDateString(locale === "id" ? "id-ID" : "en-US", {
            weekday: "long",
            day: "numeric",
            month: "short",
          })}
        </p>
      </div>

      {/* Location row: city dropdown (reliable) + GPS button (optional) */}
      <div className="mt-3 flex items-center gap-2">
        <div className="relative flex-1">
          <select
            value={CITIES.some((c) => c.name === coords.label) ? coords.label : ""}
            onChange={(e) => pickCity(e.target.value)}
            aria-label={locale === "id" ? "Pilih kota" : "Choose city"}
            className="w-full appearance-none rounded-full border border-hairline bg-paper py-2 pl-4 pr-9 text-[13px] font-semibold text-ink transition hover:border-brave/40 focus:border-brave/60 focus:outline-none"
          >
            {!CITIES.some((c) => c.name === coords.label) && (
              <option value="">{coords.label}</option>
            )}
            {CITIES.map((c) => (
              <option key={c.name} value={c.name}>
                {c.name}
              </option>
            ))}
          </select>
          <span className="pointer-events-none absolute right-3.5 top-1/2 -translate-y-1/2 text-whisper">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
              <path d="m6 9 6 6 6-6" />
            </svg>
          </span>
        </div>
        <button
          type="button"
          onClick={useMyLocation}
          disabled={locating}
          aria-label={locale === "id" ? "Pakai lokasiku (GPS)" : "Use my location (GPS)"}
          title={locale === "id" ? "Pakai lokasiku (GPS)" : "Use my location (GPS)"}
          className="tap inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-hairline text-ink-soft transition hover:border-brave/40 hover:text-brave-deep disabled:opacity-60"
        >
          {locating ? (
            <span className="inline-block h-3.5 w-3.5 animate-spin rounded-full border-2 border-brave border-t-transparent" />
          ) : (
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
              <path d="M12 2v3M12 19v3M2 12h3M19 12h3" />
              <circle cx="12" cy="12" r="7" />
              <circle cx="12" cy="12" r="2.5" fill="currentColor" stroke="none" />
            </svg>
          )}
        </button>
      </div>

      {/* Next prayer + countdown */}
      {nextName && (
        <div className="mt-5 flex items-end justify-between gap-4 rounded-[18px] bg-brave-soft/50 px-5 py-4">
          <div>
            <p className="text-[12px] font-semibold uppercase tracking-[0.1em] text-brave-deep">
              {locale === "id" ? "Berikutnya" : "Next"}
            </p>
            <p className="font-display mt-0.5 text-[24px] font-medium leading-none text-ink">
              {PRAYER_LABEL[nextName][locale]}
            </p>
          </div>
          <div className="text-right">
            <p className="font-display text-[24px] font-medium leading-none text-ink">
              {fmt(nextTime)}
            </p>
            {countdown && (
              <p className="mt-1 text-[12px] font-semibold text-brave-deep">
                {countdown}
              </p>
            )}
          </div>
        </div>
      )}

      {/* All five times */}
      <div className="mt-4 grid grid-cols-5 gap-1 text-center">
        {ORDER.map((p) => {
          const isActive = p === nextName;
          return (
            <div
              key={p}
              className={`rounded-xl py-2 ${isActive ? "bg-brave text-paper" : ""}`}
            >
              <div className={`text-[10.5px] font-semibold uppercase tracking-[0.06em] ${isActive ? "text-paper/90" : "text-whisper"}`}>
                {PRAYER_LABEL[p][locale]}
              </div>
              <div className={`mt-0.5 text-[12.5px] font-semibold ${isActive ? "text-paper" : "text-ink"}`}>
                {fmt(times.timeForPrayer(nameToPrayerEnum(p)))}
              </div>
            </div>
          );
        })}
      </div>

      {/* Baby Mo suggestion tied to the upcoming prayer */}
      <Link
        href={pathFor(locale, sug.href)}
        className="tap mt-5 flex items-center justify-between gap-3 rounded-[16px] border border-hairline px-4 py-3 transition hover:border-brave/40"
      >
        <span className="text-[13.5px] leading-snug text-ink">{sug.text}</span>
        <span className="shrink-0 text-[13px] font-semibold text-brave-deep">→</span>
      </Link>

      {denied && (
        <p className="mt-3 text-[11.5px] leading-relaxed text-whisper">
          {locale === "id"
            ? "GPS tidak tersedia (sering terjadi di browser dalam aplikasi). Pilih kotamu dari daftar di atas untuk waktu yang akurat."
            : "GPS unavailable (common in in-app browsers). Pick your city from the list above for accurate times."}
        </p>
      )}
    </div>
  );
}

type PrayerValue = ReturnType<PrayerTimes["nextPrayer"]>;

function prayerEnumToName(p: PrayerValue): PrayerName | null {
  switch (p) {
    case Prayer.Fajr:
      return "fajr";
    case Prayer.Dhuhr:
      return "dhuhr";
    case Prayer.Asr:
      return "asr";
    case Prayer.Maghrib:
      return "maghrib";
    case Prayer.Isha:
      return "isha";
    default:
      return null;
  }
}

function nameToPrayerEnum(n: PrayerName): PrayerValue {
  return {
    fajr: Prayer.Fajr,
    dhuhr: Prayer.Dhuhr,
    asr: Prayer.Asr,
    maghrib: Prayer.Maghrib,
    isha: Prayer.Isha,
  }[n];
}
