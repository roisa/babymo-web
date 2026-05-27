import Link from "next/link";
import type { ParentingSituation } from "@/lib/content/types";
import { type Locale, pathFor } from "@/lib/i18n/config";

const CATEGORY_LABEL: Record<Locale, Record<string, string>> = {
  id: {
    perilaku: "Perilaku",
    emosi: "Emosi",
    rutinitas: "Rutinitas",
    spiritual: "Spiritual",
    sosial: "Sosial",
  },
  en: {
    perilaku: "Behavior",
    emosi: "Emotion",
    rutinitas: "Routine",
    spiritual: "Spiritual",
    sosial: "Social",
  },
};

type Props = { situation: ParentingSituation; locale: Locale };

export function SituationCard({ situation, locale }: Props) {
  return (
    <Link
      href={pathFor(locale, `/parenting/${situation.slug}`)}
      className="tap group flex h-full flex-col gap-3 rounded-[22px] border border-hairline bg-paper p-6 transition hover:border-sage/40"
    >
      <div className="flex items-center gap-2 text-[11px]">
        <span className="rounded-full bg-sage-soft px-2 py-0.5 font-semibold uppercase tracking-wider text-sage-deep">
          {CATEGORY_LABEL[locale][situation.category] ?? situation.category}
        </span>
        <span className="text-whisper">
          {situation.ageMin}–{situation.ageMax} thn
        </span>
      </div>
      <h3 className="font-serif text-[18px] font-medium tracking-tight text-ink group-hover:text-sage-deep">
        {situation.title[locale]}
      </h3>
      <p className="text-[14.5px] leading-relaxed text-whisper">
        {situation.excerpt[locale]}
      </p>
    </Link>
  );
}
