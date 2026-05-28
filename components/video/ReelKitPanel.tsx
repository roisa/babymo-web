"use client";

import type { EnrichedVideo } from "@/lib/youtube/types";
import type { Locale } from "@/lib/i18n/config";
import { buildReelKit } from "@/lib/youtube/reel-kit";
import { CopyButton } from "@/components/CopyButton";

type Props = { video: EnrichedVideo; locale: Locale };

/**
 * The per-video Reels kit shown under each card when Baby Team Mode is on.
 * Everything the social/animation team needs to turn a YouTube video into
 * an Instagram Reel: format advice, a 3-beat storyboard, a cut tip for long
 * videos, and a copy-paste caption + hashtags.
 */
export function ReelKitPanel({ video, locale }: Props) {
  const kit = buildReelKit(video, locale);
  const id = locale === "id";

  const hashtagText = kit.hashtags.map((t) => `#${t}`).join(" ");

  return (
    <div className="mt-2 rounded-[20px] border border-brave/25 bg-brave-soft/40 p-4 sm:p-5">
      <div className="flex flex-wrap items-center gap-2">
        <span className="inline-flex items-center gap-1.5 rounded-full bg-brave px-2.5 py-1 text-[11px] font-semibold uppercase tracking-[0.08em] text-paper">
          {kit.format === "repost" ? <RepostIcon /> : <ScissorsIcon />}
          {kit.formatLabel}
        </span>
        <span className="rounded-full bg-paper px-2.5 py-1 text-[11px] font-semibold text-ink-soft">
          {video.duration}
        </span>
        <a
          href={video.url}
          target="_blank"
          rel="noopener noreferrer"
          className="tap ml-auto inline-flex items-center gap-1.5 text-[12px] font-semibold text-brave-deep hover:underline"
        >
          {id ? "Ambil sumber" : "Get source"}
          <ArrowIcon />
        </a>
      </div>

      <p className="mt-2.5 text-[13px] leading-relaxed text-ink-soft">
        {kit.formatHint}
      </p>

      {kit.cutTip && (
        <div className="mt-3 rounded-[14px] border border-clay/30 bg-clay-soft/60 px-3.5 py-2.5">
          <p className="text-[11px] font-semibold uppercase tracking-[0.1em] text-clay">
            {id ? "Tips potong" : "Cut tip"}
          </p>
          <p className="mt-1 text-[13px] leading-relaxed text-ink">{kit.cutTip}</p>
        </div>
      )}

      <div className="mt-4">
        <p className="text-[11px] font-semibold uppercase tracking-[0.1em] text-whisper">
          {id ? "Alur 3 detik" : "3-beat storyboard"}
        </p>
        <ol className="mt-2 space-y-1.5">
          {kit.storyboard.map((beat, i) => (
            <li key={i} className="flex gap-2.5 text-[13px] leading-relaxed text-ink">
              <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brave/15 text-[11px] font-semibold text-brave-deep">
                {i + 1}
              </span>
              <span>{beat}</span>
            </li>
          ))}
        </ol>
      </div>

      <div className="mt-4">
        <p className="text-[11px] font-semibold uppercase tracking-[0.1em] text-whisper">
          {id ? "Caption (siap tempel)" : "Caption (ready to paste)"}
        </p>
        <pre className="mt-2 max-h-44 overflow-auto whitespace-pre-wrap break-words rounded-[14px] border border-hairline bg-paper px-3.5 py-3 font-sans text-[12.5px] leading-relaxed text-ink">
{kit.caption}
        </pre>
      </div>

      <div className="mt-3 flex flex-wrap gap-2">
        <CopyButton
          text={kit.caption}
          label={id ? "Salin caption" : "Copy caption"}
          copiedLabel={id ? "Tersalin" : "Copied"}
        />
        <CopyButton
          text={hashtagText}
          label={id ? "Salin hashtag" : "Copy hashtags"}
          copiedLabel={id ? "Tersalin" : "Copied"}
        />
      </div>
    </div>
  );
}

function RepostIcon() {
  return (
    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M17 2.1 21 6l-4 3.9" />
      <path d="M3 11V9a4 4 0 0 1 4-4h14" />
      <path d="M7 21.9 3 18l4-3.9" />
      <path d="M21 13v2a4 4 0 0 1-4 4H3" />
    </svg>
  );
}
function ScissorsIcon() {
  return (
    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <circle cx="6" cy="6" r="3" />
      <circle cx="6" cy="18" r="3" />
      <path d="M20 4 8.12 15.88M14.47 14.48 20 20M8.12 8.12 12 12" />
    </svg>
  );
}
function ArrowIcon() {
  return (
    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M7 17 17 7M9 7h8v8" />
    </svg>
  );
}
