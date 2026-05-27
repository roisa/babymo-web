"use client";

import { useMemo, useState } from "react";
import type { Doa } from "@/lib/content/types";
import type { Locale } from "@/lib/i18n/config";
import { DoaCard } from "@/components/DoaCard";
import { FilterChips, type Chip } from "@/components/FilterChips";

const SITUATION_LABEL: Record<Locale, Record<string, string>> = {
  id: {
    all: "Semua",
    pagi: "Pagi",
    malam: "Malam",
    tidur: "Tidur",
    bangun: "Bangun",
    makan: "Makan",
    minum: "Minum",
    syukur: "Syukur",
    "kamar-mandi": "Kamar Mandi",
    perjalanan: "Perjalanan",
    kendaraan: "Kendaraan",
  },
  en: {
    all: "All",
    pagi: "Morning",
    malam: "Night",
    tidur: "Sleep",
    bangun: "Wake",
    makan: "Eating",
    minum: "Drinking",
    syukur: "Gratitude",
    "kamar-mandi": "Bathroom",
    perjalanan: "Travel",
    kendaraan: "Vehicle",
  },
};

type Props = { doas: Doa[]; locale: Locale };

export function DoaList({ doas, locale }: Props) {
  const chips: Chip[] = useMemo(() => {
    const counts = new Map<string, number>();
    for (const d of doas) for (const s of d.situations)
      counts.set(s, (counts.get(s) ?? 0) + 1);
    const top = [...counts.entries()]
      .sort((a, b) => b[1] - a[1])
      .slice(0, 8);
    const lookup = SITUATION_LABEL[locale];
    return [
      { value: "all", label: lookup.all ?? "All", count: doas.length },
      ...top.map(([k, n]) => ({
        value: k,
        label: lookup[k] ?? k,
        count: n,
      })),
    ];
  }, [doas, locale]);

  const [active, setActive] = useState<string>("all");
  const filtered =
    active === "all"
      ? doas
      : doas.filter((d) => d.situations.includes(active));

  return (
    <>
      <FilterChips chips={chips} initial="all" onChange={setActive} />
      <div className="mt-8 grid gap-4 sm:grid-cols-2">
        {filtered.map((d) => (
          <DoaCard key={d.slug} doa={d} locale={locale} />
        ))}
      </div>
    </>
  );
}
