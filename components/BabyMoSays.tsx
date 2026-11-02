import { asset } from "@/lib/i18n/config";

/**
 * Baby Mo, speaking. A pose with a rounded speech bubble — used to
 * introduce pages in his voice instead of a grey paragraph.
 */
export function BabyMoSays({
  pose = "baby-mo-yes.png",
  children,
  className = "",
}: {
  pose?: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={`bm-says flex items-end gap-2 ${className}`}>
      <img
        src={asset(`/baby-mo-poses/${pose}`)}
        alt="Baby Mo"
        width={120}
        height={120}
        className="bm-says-pose h-[96px] w-[96px] shrink-0 select-none object-contain sm:h-[112px] sm:w-[112px]"
        draggable={false}
      />
      <p className="bm-bubble relative mb-10 rounded-[22px] px-4 py-3 text-[14.5px] font-semibold leading-snug text-ink">
        {children}
      </p>
    </div>
  );
}
