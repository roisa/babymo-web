"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { type Locale, asset, pathFor } from "@/lib/i18n/config";
import {
  type Mission,
  CATEGORY_LABEL,
} from "@/lib/content/missions";
import {
  type Child,
  type TemanStats,
  computeStats,
  getChild,
  growthStage,
  isTodayDone,
  markTodayDone,
  onTemanChange,
  setChild,
} from "@/lib/teman";

type Props = { locale: Locale; mission: Mission };

export function TemanTumbuh({ locale: l, mission }: Props) {
  const [mounted, setMounted] = useState(false);
  const [child, setChildState] = useState<Child | null>(null);
  const [stats, setStats] = useState<TemanStats | null>(null);
  const [nameInput, setNameInput] = useState("");
  const [justDone, setJustDone] = useState(false);

  useEffect(() => {
    setMounted(true);
    const refresh = () => {
      setChildState(getChild());
      setStats(computeStats());
    };
    refresh();
    return onTemanChange(refresh);
  }, []);

  function saveName(e: React.FormEvent) {
    e.preventDefault();
    const name = nameInput.trim();
    if (!name) return;
    setChild(name);
  }

  function complete() {
    const already = isTodayDone();
    markTodayDone();
    if (!already) {
      setJustDone(true);
      window.setTimeout(() => setJustDone(false), 2600);
    }
  }

  const cat = CATEGORY_LABEL[mission.category][l];

  // ── Onboarding: ask the child's name (after mount only) ──────────────
  if (mounted && !child) {
    return (
      <section className="rounded-[28px] border border-sage/25 bg-gradient-to-br from-sage-soft/70 via-paper to-brave-soft/40 p-7 sm:p-10">
        <div className="flex flex-col items-center text-center">
          <img
            src={asset("/baby-mo-poses/baby-mo-pose-01.png")}
            alt="Baby Mo"
            width={200}
            height={200}
            className="h-32 w-32 select-none drop-shadow-[0_14px_28px_rgba(15,18,19,0.12)]"
            draggable={false}
          />
          <h2 className="font-display mt-4 text-[26px] font-medium text-ink sm:text-[30px]">
            {l === "id" ? "Assalamualaikum! Siapa nama si kecil?" : "Assalamualaikum! What's your little one's name?"}
          </h2>
          <p className="mt-2 max-w-md text-[15px] text-whisper">
            {l === "id"
              ? "Baby Mo akan menemani si kecil belajar satu kebaikan setiap hari. Namanya hanya disimpan di perangkat ini."
              : "Baby Mo will guide your little one through one good deed each day. The name is stored only on this device."}
          </p>
          <form onSubmit={saveName} className="mt-6 flex w-full max-w-sm flex-col gap-3 sm:flex-row">
            <input
              value={nameInput}
              onChange={(e) => setNameInput(e.target.value)}
              maxLength={24}
              autoFocus
              placeholder={l === "id" ? "Nama si kecil…" : "Your child's name…"}
              aria-label={l === "id" ? "Nama si kecil" : "Child's name"}
              className="tap flex-1 rounded-full border border-hairline bg-paper px-5 py-3 text-[15px] text-ink outline-none focus:border-sage"
            />
            <button
              type="submit"
              className="magnet tap rounded-full bg-sage-deep px-6 py-3 text-[14px] font-semibold text-paper hover:bg-sage-deep/90"
            >
              {l === "id" ? "Mulai" : "Start"} →
            </button>
          </form>
        </div>
      </section>
    );
  }

  const stage = stats ? growthStage(stats.total) : null;
  const done = stats?.todayDone ?? false;
  const dayNames =
    l === "id"
      ? ["S", "S", "R", "K", "J", "S", "M"]
      : ["S", "M", "T", "W", "T", "F", "S"];

  return (
    <div className="space-y-6">
      {/* Greeting + garden */}
      <section className="overflow-hidden rounded-[28px] border border-sage/25 bg-gradient-to-br from-sage-soft/70 via-paper to-brave-soft/40">
        <div className="grid items-center gap-6 p-7 sm:grid-cols-[auto_1fr] sm:p-9">
          <div className="relative mx-auto">
            <div className="grid h-28 w-28 place-items-center rounded-full bg-paper/70 text-[56px] shadow-inner sm:h-32 sm:w-32 sm:text-[64px]">
              {stage ? stage.emoji : "🌱"}
            </div>
            {child && (
              <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full bg-sage-deep px-3 py-0.5 text-[11px] font-semibold text-paper">
                {stage ? stage.label[l] : ""}
              </span>
            )}
          </div>

          <div className="text-center sm:text-left">
            <h2 className="font-display text-[24px] font-medium leading-[1.15] text-ink sm:text-[30px]">
              {child
                ? l === "id"
                  ? `Assalamualaikum, ${child.name}! 🌟`
                  : `Assalamualaikum, ${child.name}! 🌟`
                : l === "id"
                  ? "Assalamualaikum! 🌟"
                  : "Assalamualaikum! 🌟"}
            </h2>
            <p className="mt-1.5 text-[15px] text-whisper">
              {done
                ? l === "id"
                  ? "Alhamdulillah, misi hari ini selesai. Kebunmu makin tumbuh!"
                  : "Alhamdulillah, today's mission is done. Your garden is growing!"
                : l === "id"
                  ? "Yuk tanam satu kebaikan hari ini untuk menumbuhkan kebunmu."
                  : "Let's plant one good deed today to grow your garden."}
            </p>

            {/* Stats */}
            <div className="mt-4 flex flex-wrap items-center justify-center gap-2 sm:justify-start">
              <Stat emoji="🌿" value={stats?.total ?? 0} label={l === "id" ? "amal" : "deeds"} />
              <Stat emoji="🔥" value={stats?.streak ?? 0} label={l === "id" ? "hari beruntun" : "day streak"} />
              {stage?.next != null && stats && (
                <span className="rounded-full bg-paper/70 px-3 py-1 text-[12px] font-semibold text-ink-soft">
                  {l === "id"
                    ? `${stage.next - stats.total} amal lagi menuju tahap berikutnya`
                    : `${stage.next - stats.total} more to the next stage`}
                </span>
              )}
            </div>

            {/* This week */}
            <div className="mt-4 flex items-center justify-center gap-1.5 sm:justify-start">
              {(stats?.week ?? Array(7).fill(false)).map((d, i) => (
                <div key={i} className="flex flex-col items-center gap-1">
                  <span
                    className={`grid h-7 w-7 place-items-center rounded-full text-[12px] font-semibold ${
                      d
                        ? "bg-sage-deep text-paper"
                        : i === 6
                          ? "border border-dashed border-sage/50 text-sage-deep"
                          : "bg-paper-2 text-whisper"
                    }`}
                    title={i === 6 ? (l === "id" ? "Hari ini" : "Today") : undefined}
                  >
                    {d ? "✓" : ""}
                  </span>
                  <span className="text-[9px] text-whisper">{dayNames[i]}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Today's mission */}
      <section className="relative overflow-hidden rounded-[28px] border border-hairline bg-paper p-7 sm:p-9">
        {justDone && (
          <div className="pointer-events-none absolute inset-0 z-10 grid place-items-center bg-paper/80 text-center backdrop-blur-sm">
            <div className="animate-bounce-in">
              <div className="text-[64px]">🎉</div>
              <p className="font-display mt-2 text-[22px] font-medium text-sage-deep">
                {l === "id" ? "MashaAllah, hebat!" : "MashaAllah, wonderful!"}
              </p>
              <p className="mt-1 text-[14px] text-whisper">
                {l === "id" ? "Satu kebaikan tertanam 🌱" : "One good deed planted 🌱"}
              </p>
            </div>
          </div>
        )}

        <div className="flex items-center justify-between gap-3">
          <span className="inline-flex items-center gap-2 rounded-full bg-clay-soft px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.12em] text-clay">
            {cat}
          </span>
          <span className="text-[11px] font-semibold uppercase tracking-[0.12em] text-whisper">
            {l === "id" ? "Misi Hari Ini" : "Today's Mission"}
          </span>
        </div>

        <div className="mt-5 flex items-start gap-4">
          <div className="grid h-16 w-16 shrink-0 place-items-center rounded-2xl bg-sage-soft text-[34px]">
            {mission.emoji}
          </div>
          <div className="min-w-0 flex-1">
            <h3 className="font-display text-[22px] font-medium leading-[1.2] text-ink sm:text-[26px]">
              {mission.title[l]}
            </h3>
            <p className="mt-2 text-[15.5px] leading-[1.6] text-whisper">{mission.detail[l]}</p>
            {mission.link && (
              <Link
                href={pathFor(l, mission.link.href)}
                className="mt-3 inline-flex items-center gap-1.5 text-[13.5px] font-semibold text-sage-deep hover:underline"
              >
                {mission.link.label[l]} →
              </Link>
            )}
          </div>
        </div>

        <button
          onClick={complete}
          disabled={done}
          className={`magnet tap mt-7 flex w-full items-center justify-center gap-2 rounded-full px-6 py-4 text-[15px] font-semibold transition ${
            done
              ? "cursor-default border border-sage/30 bg-sage-soft text-sage-deep"
              : "bg-sage-deep text-paper hover:bg-sage-deep/90"
          }`}
        >
          {done
            ? l === "id"
              ? "Sudah selesai hari ini! 🎉"
              : "Done for today! 🎉"
            : l === "id"
              ? "Selesai — tanam kebaikan ✓"
              : "Done — plant the deed ✓"}
        </button>
      </section>

      {/* Share + change name */}
      {mounted && (
        <div className="flex flex-wrap items-center justify-between gap-3 px-1">
          <ShareButton locale={l} child={child} stats={stats} />
          <button
            onClick={() => {
              const n = window.prompt(
                l === "id" ? "Ubah nama si kecil:" : "Change child's name:",
                child?.name ?? "",
              );
              if (n && n.trim()) setChild(n);
            }}
            className="tap text-[12.5px] font-medium text-whisper hover:text-ink"
          >
            {l === "id" ? "Ubah nama" : "Change name"}
          </button>
        </div>
      )}
    </div>
  );
}

function Stat({ emoji, value, label }: { emoji: string; value: number; label: string }) {
  return (
    <span className="inline-flex items-center gap-1.5 rounded-full bg-paper/70 px-3 py-1 text-[13px] font-semibold text-ink-soft">
      <span aria-hidden>{emoji}</span>
      <span className="text-ink">{value}</span> {label}
    </span>
  );
}

function ShareButton({
  locale: l,
  child,
  stats,
}: {
  locale: Locale;
  child: Child | null;
  stats: TemanStats | null;
}) {
  const onShare = async () => {
    const name = child?.name ?? (l === "id" ? "Si kecil" : "My little one");
    const total = stats?.total ?? 0;
    const streak = stats?.streak ?? 0;
    const text =
      l === "id"
        ? `🌱 ${name} sudah menanam ${total} kebaikan bareng Baby Mo (${streak} hari beruntun)! Ikut tumbuh bareng di`
        : `🌱 ${name} has planted ${total} good deeds with Baby Mo (${streak}-day streak)! Grow along at`;
    const url = `${window.location.origin}${pathFor(l, "/teman-tumbuh")}`;
    try {
      if (navigator.share) {
        await navigator.share({ title: "Teman Tumbuh — Baby Mo", text, url });
      } else {
        window.open(
          `https://wa.me/?text=${encodeURIComponent(`${text} ${url}`)}`,
          "_blank",
          "noopener",
        );
      }
    } catch {
      /* user cancelled */
    }
  };

  return (
    <button
      onClick={onShare}
      className="tap inline-flex items-center gap-2 rounded-full border border-hairline bg-paper px-4 py-2 text-[13px] font-semibold text-ink hover:border-sage/40"
    >
      <span aria-hidden>📤</span>
      {l === "id" ? "Bagikan tumbuh kembang" : "Share their progress"}
    </button>
  );
}
