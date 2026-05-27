import Link from "next/link";
import type { Hadith } from "@/lib/content/types";
import { type Locale, pathFor } from "@/lib/i18n/config";

const GRADE_LABEL: Record<string, string> = {
  sahih: "Sahih",
  hasan: "Hasan",
  dhaif: "Da'if",
};

type Props = { hadith: Hadith; locale: Locale };

export function HadithCard({ hadith, locale }: Props) {
  return (
    <Link
      href={pathFor(locale, `/hadith/${hadith.slug}`)}
      className="tap group flex flex-col gap-4 rounded-[22px] border border-hairline bg-paper p-6 transition hover:border-sage/40"
    >
      <div className="flex items-center gap-2 text-[11px]">
        <span className="rounded-full bg-clay-soft px-2 py-0.5 font-semibold uppercase tracking-wider text-clay">
          {GRADE_LABEL[hadith.source.grade] ?? hadith.source.grade}
        </span>
        <span className="text-whisper">{hadith.source.reference}</span>
      </div>
      <p
        dir="rtl"
        lang="ar"
        className="font-arabic text-xl leading-[1.9] text-ink line-clamp-3"
      >
        {hadith.arabic}
      </p>
      <div>
        <h3 className="font-serif text-[17px] font-medium tracking-tight text-ink group-hover:text-sage-deep">
          {hadith.title[locale]}
        </h3>
        <p className="mt-1 text-[14px] leading-relaxed text-whisper line-clamp-2">
          {hadith.translation[locale]}
        </p>
      </div>
    </Link>
  );
}
