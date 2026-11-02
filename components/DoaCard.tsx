import Link from "next/link";
import type { Doa } from "@/lib/content/types";
import { type Locale, pathFor } from "@/lib/i18n/config";
import { labelize } from "@/lib/labelize";
import { doaEmoji, doaTile } from "@/lib/doa-emoji";

type Props = { doa: Doa; locale: Locale };

const GRADE_LABEL: Record<string, string> = {
  sahih: "Sahih",
  hasan: "Hasan",
  dhaif: "Da'if",
  quran: "Qur'an",
};

export function DoaCard({ doa, locale }: Props) {
  const tile = doaTile(doa.slug);
  return (
    <Link
      href={pathFor(locale, `/doa/${doa.slug}`)}
      className="lift tap group flex flex-col gap-4 rounded-[24px] border border-hairline bg-paper p-5 sm:p-6"
    >
      <div className="flex items-center gap-3">
        <span aria-hidden className={`doa-tile doa-tile--${tile}`}>
          {doaEmoji(doa.slug)}
        </span>
        <h3 className="font-display text-[19px] leading-snug text-ink group-hover:text-[var(--color-sky-deep)]">
          {doa.title[locale]}
        </h3>
      </div>
      <p dir="rtl" lang="ar" className="font-arabic text-2xl leading-[1.9] text-ink">
        {doa.arabic}
      </p>
      <p className="text-[14px] leading-relaxed text-whisper">{doa.context[locale]}</p>
      <div className="mt-auto flex items-center gap-2 text-[11.5px] text-whisper">
        <span className="rounded-full bg-sage-soft px-2 py-0.5 font-semibold text-sage-deep">
          {GRADE_LABEL[doa.source.grade] ?? labelize(doa.source.grade)}
        </span>
        <span>{doa.source.reference}</span>
      </div>
    </Link>
  );
}
