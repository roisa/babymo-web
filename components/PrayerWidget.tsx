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

// Fallback: Jakarta (used until the user grants location)
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
        <div>
          <p className="flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.14em] text-brave-deep">
            <span className="pulse-dot inline-block h-1.5 w-1.5 rounded-full bg-brave text-brave" />
            {locale === "id" ? "Waktu Sholat" : "Prayer Times"}
          </p>
          <p className="mt-1 text-[12.5px] text-whisper">
            {coords.label}
            {" · "}
            {now.toLocaleDateString(locale === "id" ? "id-ID" : "en-US", {
              weekday: "long",
              day: "numeric",
              month: "short",
            })}
          </p>
        </div>
        <button
          type="button"
          onClick={useMyLocation}
          disabled={locating}
          className="tap inline-flex shrink-0 items-center gap-1.5 rounded-full border border-hairline px-3 py-1.5 text-[11.5px] font-semibold text-ink-soft transition hover:border-brave/40 hover:text-brave-deep disabled:opacity-60"
        >
          {locating && (
            <span className="inline-block h-3 w-3 animate-spin rounded-full border-2 border-brave border-t-transparent" />
          )}
          {locating
            ? locale === "id" ? "Mencari…" : "Locating…"
            : locale === "id" ? "Pakai lokasiku" : "Use my location"}
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
        <p className="mt-3 text-[11.5px] text-whisper">
          {locale === "id"
            ? "Lokasi tidak diizinkan — menampilkan waktu untuk Jakarta. Aktifkan izin lokasi untuk kotamu sendiri."
            : "Location denied — showing times for Jakarta. Allow location access for your own city."}
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
