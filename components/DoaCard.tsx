import Link from "next/link";
import type { Doa } from "@/lib/content/types";
import { type Locale, pathFor } from "@/lib/i18n/config";

type Props = { doa: Doa; locale: Locale };

const GRADE_LABEL: Record<string, string> = {
  sahih: "Sahih",
  hasan: "Hasan",
  dhaif: "Da'if",
  quran: "Qur'an",
};

export function DoaCard({ doa, locale }: Props) {
  return (
    <Link
      href={pathFor(locale, `/doa/${doa.slug}`)}
      className="tap group flex flex-col gap-4 rounded-[22px] border border-hairline bg-paper p-6 transition hover:border-sage/40"
    >
      <div className="flex items-center gap-2 text-[11px]">
        <span className="rounded-full bg-sage-soft px-2 py-0.5 font-semibold uppercase tracking-wider text-sage-deep">
          {GRADE_LABEL[doa.source.grade] ?? doa.source.grade}
        </span>
        <span className="text-whisper">{doa.source.reference}</span>
      </div>
      <p
        dir="rtl"
        lang="ar"
        className="font-arabic text-2xl leading-[1.9] text-ink"
      >
        {doa.arabic}
      </p>
      <div>
        <h3 className="font-serif text-[17px] font-medium tracking-tight text-ink group-hover:text-sage-deep">
          {doa.title[locale]}
        </h3>
        <p className="mt-1 text-[14px] leading-relaxed text-whisper">
          {doa.context[locale]}
        </p>
      </div>
    </Link>
  );
}
