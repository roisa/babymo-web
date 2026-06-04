"use client";

import { useEffect, useState } from "react";
import type { EnrichedVideo } from "@/lib/youtube/types";
import type { Locale } from "@/lib/i18n/config";
import { VideoCard } from "./VideoCard";
import { ReelKitPanel } from "./ReelKitPanel";

type Group = { cat: string; label: string; items: EnrichedVideo[] };
type StoryLink = { href: string; title: string };
type Props = {
  groups: Group[];
  locale: Locale;
  storyByVideo?: Record<string, StoryLink>;
};

const STORAGE_KEY = "babymo:team-mode";

/**
 * The /momen video grid plus the "Baby Team Mode" toggle. When the team
 * turns it on, every card grows a ReelKitPanel with a ready-to-paste
 * caption + storyboard, and the grid relaxes to give the kits room. The
 * preference is remembered in localStorage so the team isn't re-toggling
 * on every visit.
 */
export function MomenGrid({ groups, locale, storyByVideo = {} }: Props) {
  const [team, setTeam] = useState(false);
  const [ready, setReady] = useState(false);
  const id = locale === "id";

  useEffect(() => {
    try {
      setTeam(localStorage.getItem(STORAGE_KEY) === "1");
    } catch {
      /* storage blocked — default off */
    }
    setReady(true);
  }, []);

  function toggle() {
    setTeam((prev) => {
      const next = !prev;
      try {
        localStorage.setItem(STORAGE_KEY, next ? "1" : "0");
      } catch {
        /* ignore */
      }
      return next;
    });
  }

  return (
    <div className="mt-12">
      <div className="flex flex-wrap items-center justify-between gap-3 rounded-[20px] border border-hairline bg-paper-2 px-4 py-3.5 sm:px-5">
        <div className="min-w-0">
          <p className="text-[14px] font-semibold text-ink">
            {id ? "Mode Tim Baby Mo" : "Baby Mo Team Mode"}
          </p>
          <p className="mt-0.5 text-[12.5px] leading-snug text-whisper">
            {id
              ? "Caption, hashtag & ide Reel siap pakai untuk tiap video."
              : "Ready-to-use captions, hashtags & Reel ideas for each video."}
          </p>
        </div>
        <button
          type="button"
          onClick={toggle}
          role="switch"
          aria-checked={team}
          aria-label={id ? "Aktifkan Mode Tim" : "Toggle Team Mode"}
          className={`tap inline-flex shrink-0 items-center gap-2 rounded-full px-4 py-2 text-[13px] font-semibold transition ${
            team
              ? "bg-brave text-paper"
              : "border border-hairline bg-paper text-ink-soft hover:border-brave/40"
          }`}
        >
          <SparkIcon />
          {ready && team
            ? id
              ? "Aktif"
              : "On"
            : id
              ? "Mode Tim"
              : "Team Mode"}
        </button>
      </div>

      <div className="mt-10 space-y-16">
        {groups.map((g) => (
          <section key={g.cat}>
            <div className="mb-6 flex items-baseline gap-3">
              <h2 className="font-serif text-2xl font-medium tracking-tight text-ink">
                {g.label}
              </h2>
              <span className="text-[12.5px] text-whisper">{g.items.length}</span>
            </div>
            <div
              className={`grid gap-4 ${
                team ? "sm:grid-cols-2" : "sm:grid-cols-2 lg:grid-cols-3"
              }`}
            >
              {g.items.map((v) => (
                <div key={v.id} className="flex flex-col">
                  <VideoCard video={v} locale={locale} story={storyByVideo[v.id]} />
                  {team && <ReelKitPanel video={v} locale={locale} />}
                </div>
              ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}

function SparkIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M12 2.5 14 9l6.5 2-6.5 2-2 6.5-2-6.5L3.5 11 10 9l2-6.5Z" />
    </svg>
  );
}
