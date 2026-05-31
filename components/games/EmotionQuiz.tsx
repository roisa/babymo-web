"use client";

import { useEffect, useMemo, useState } from "react";
import type { Locale } from "@/lib/i18n/config";
import { t } from "@/lib/games/poses";
import {
  EMOTIONS,
  EMOTION_ROUNDS,
  getEmotion,
  type EmotionRound,
} from "@/lib/games/emotions";
import { PoseImg } from "@/components/games/PoseImg";
import { GameShare } from "@/components/games/GameShare";

function shuffle<T>(input: readonly T[]): T[] {
  const a = [...input];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const tmp = a[i]!;
    a[i] = a[j]!;
    a[j] = tmp;
  }
  return a;
}

/** Build 4 options for a round: the answer + 3 distractors. */
function optionsFor(answer: string): string[] {
  const distractors = shuffle(EMOTIONS.map((e) => e.key).filter((k) => k !== answer)).slice(0, 3);
  return shuffle([answer, ...distractors]);
}

export function EmotionQuiz({
  locale,
  shareUrl,
}: {
  locale: Locale;
  shareUrl: string;
}) {
  const total = EMOTION_ROUNDS.length;

  const [rounds, setRounds] = useState<EmotionRound[]>(EMOTION_ROUNDS);
  const [step, setStep] = useState(0);
  const [score, setScore] = useState(0);
  const [picked, setPicked] = useState<string | null>(null);
  const [done, setDone] = useState(false);
  const [seeded, setSeeded] = useState(false);

  // Shuffle round order after mount (avoids SSR/hydration mismatch).
  useEffect(() => {
    setRounds(shuffle(EMOTION_ROUNDS));
    setSeeded(true);
  }, []);

  const current = rounds[step];
  const options = useMemo(
    () => (current ? optionsFor(current.answer) : []),
    // Re-roll options whenever the round changes.
    [current?.poseFile, current?.answer, step, seeded],
  );

  function pick(key: string) {
    if (picked || !current) return;
    setPicked(key);
    if (key === current.answer) setScore((s) => s + 1);
    setTimeout(() => {
      if (step + 1 < total) {
        setStep(step + 1);
        setPicked(null);
      } else {
        setDone(true);
      }
    }, 900);
  }

  function restart() {
    setRounds(shuffle(EMOTION_ROUNDS));
    setStep(0);
    setScore(0);
    setPicked(null);
    setDone(false);
  }

  const shareText =
    locale === "id"
      ? `Aku menebak ${score}/${total} perasaan Baby Mo dengan benar! Coba kamu:`
      : `I guessed ${score}/${total} of Baby Mo's feelings right! Try it:`;

  if (done) {
    const perfect = score === total;
    return (
      <div className="mx-auto max-w-xl rounded-3xl border border-hairline bg-sage-soft/60 p-8 text-center shadow-sm">
        <p className="font-serif text-2xl font-semibold text-ink">
          {perfect
            ? locale === "id"
              ? "Sempurna! 🌟"
              : "Perfect! 🌟"
            : locale === "id"
              ? "Selesai! 🎉"
              : "Done! 🎉"}
        </p>
        <p className="mt-2 text-lg text-ink">
          {locale === "id" ? "Skor kamu" : "Your score"}:{" "}
          <strong>
            {score}/{total}
          </strong>
        </p>
        <p className="mt-1 text-sm text-whisper">
          {locale === "id"
            ? "Mengenali perasaan adalah langkah pertama memahami emosi."
            : "Recognising feelings is the first step to understanding emotions."}
        </p>
        <div className="mt-6 flex flex-col items-center gap-4">
          <button
            type="button"
            onClick={restart}
            className="tap rounded-full bg-sage px-6 py-3 text-base font-semibold text-paper shadow transition hover:bg-sage-deep"
          >
            {locale === "id" ? "Main Lagi 🔁" : "Play Again 🔁"}
          </button>
          <GameShare locale={locale} url={shareUrl} text={shareText} />
        </div>
      </div>
    );
  }

  if (!current) return null;

  return (
    <div className="mx-auto w-full max-w-xl">
      <div className="mb-4 flex items-center justify-between text-sm text-whisper">
        <span>
          {locale === "id" ? "Soal" : "Question"} {step + 1}/{total}
        </span>
        <span>
          {locale === "id" ? "Skor" : "Score"}: {score}
        </span>
      </div>

      <div className="mb-6 flex justify-center">
        <div className="w-44 rounded-3xl bg-gradient-to-br from-sage-soft to-clay-soft p-3 sm:w-52">
          <PoseImg
            file={current.poseFile}
            alt={locale === "id" ? "Bagaimana perasaan Baby Mo?" : "How does Baby Mo feel?"}
            priority
            className="h-full w-full object-contain"
          />
        </div>
      </div>

      <h2 className="mb-5 text-center font-serif text-xl font-semibold text-ink">
        {locale === "id" ? "Bagaimana perasaan Baby Mo?" : "How does Baby Mo feel?"}
      </h2>

      <div className="grid grid-cols-2 gap-3">
        {options.map((key) => {
          const emotion = getEmotion(key);
          if (!emotion) return null;
          const isAnswer = key === current.answer;
          const isPicked = key === picked;
          let cls =
            "border-hairline bg-paper hover:-translate-y-0.5 hover:border-sage/40 hover:shadow-md";
          if (picked) {
            if (isAnswer) cls = "border-sage bg-sage-soft";
            else if (isPicked) cls = "border-clay bg-clay-soft";
            else cls = "border-hairline bg-paper opacity-60";
          }
          return (
            <button
              key={key}
              type="button"
              onClick={() => pick(key)}
              disabled={!!picked}
              className={`tap flex items-center gap-2.5 rounded-2xl border px-4 py-3.5 text-left font-semibold text-ink shadow-sm transition ${cls}`}
            >
              <span className="text-2xl" aria-hidden>
                {emotion.emoji}
              </span>
              <span>{t(emotion.label, locale)}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
