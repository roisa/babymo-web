import Image from "next/image";
import { asset, type Locale } from "@/lib/i18n/config";
import type { SupportMethod } from "@/lib/support";

type Props = { method: SupportMethod; locale: Locale };

/**
 * One way-to-support card. Links out to the provider, or — for a QRIS
 * method that only has a QR image — shows the code inline.
 */
export function SupportCard({ method, locale }: Props) {
  const href = method.url || (method.qrImage ? asset(method.qrImage) : "#");

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener"
      className="lift tap flex h-full flex-col rounded-[22px] border border-hairline bg-paper p-6 transition hover:border-sage/40"
    >
      <div className="flex items-center gap-3">
        <span
          className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl text-sm font-bold ${method.accent}`}
        >
          {method.label.slice(0, 2)}
        </span>
        <div className="min-w-0">
          <p className="font-serif text-[17px] font-medium text-ink">
            {method.label}
          </p>
          <p className="truncate text-[13px] text-whisper">{method.handle}</p>
        </div>
        {method.recommended && (
          <span className="ml-auto rounded-full bg-clay/15 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-[0.1em] text-clay">
            {locale === "id" ? "Termudah" : "Easiest"}
          </span>
        )}
      </div>

      <p className="mt-3 flex-1 text-[13.5px] leading-relaxed text-whisper">
        {method.desc[locale]}
      </p>

      {method.qrImage && !method.url && (
        <Image
          src={asset(method.qrImage)}
          alt={`QRIS Baby Mo`}
          width={180}
          height={180}
          className="mt-4 h-44 w-44 self-center rounded-xl border border-mist bg-white p-2"
        />
      )}

      <span className="mt-4 inline-flex items-center gap-1 text-[13px] font-semibold text-sage-deep">
        {method.cta[locale]}
      </span>
    </a>
  );
}
