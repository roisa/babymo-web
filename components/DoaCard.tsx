import Link from "next/link";
import type { Doa } from "@/lib/content/types";
import { type Locale, pathFor } from "@/lib/i18n/config";

type Props = { doa: Doa; locale: Locale };

export function DoaCard({ doa, locale }: Props) {
  return (
    <Link
      href={pathFor(locale, `/doa/${doa.slug}`)}
      className="group block rounded-2xl border border-mist bg-paper p-6 transition hover:-translate-y-0.5 hover:border-sage/40 hover:shadow-[0_12px_28px_-12px_rgba(15,18,19,0.12)]"
    >
      <div className="mb-3 flex items-center gap-2">
        <span className="rounded-full bg-sage/10 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-sage-deep">
          {doa.source.grade === "quran" ? "Qur'an" : doa.source.grade}
        </span>
        <span className="text-xs text-whisper">{doa.source.reference}</span>
      </div>
      <p
        dir="rtl"
        lang="ar"
        className="mb-2 font-arabic text-2xl leading-relaxed text-ink"
      >
        {doa.arabic}
      </p>
      <h3 className="font-serif text-lg font-semibold text-ink group-hover:text-sage-deep">
        {doa.title[locale]}
      </h3>
      <p className="mt-1.5 text-sm leading-relaxed text-whisper">
        {doa.context[locale]}
      </p>
    </Link>
  );
}
