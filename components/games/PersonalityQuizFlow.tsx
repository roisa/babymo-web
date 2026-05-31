"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { type Locale, pathFor } from "@/lib/i18n/config";
import { t } from "@/lib/games/poses";
import {
  QUIZ_QUESTIONS,
  scoreAnswers,
  type ArchetypeKey,
} from "@/lib/games/personality";

export function PersonalityQuizFlow({ locale }: { locale: Locale }) {
  const router = useRouter();
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<ArchetypeKey[][]>([]);

  const total = QUIZ_QUESTIONS.length;
  const current = QUIZ_QUESTIONS[step];
  const progress = Math.round((step / total) * 100);

  if (!current) return null;

  function choose(scores: ArchetypeKey[]) {
    const next = [...answers, scores];
    if (step + 1 < total) {
      setAnswers(next);
      setStep(step + 1);
    } else {
      const result = scoreAnswers(next);
      router.push(pathFor(locale, `/kuis/baby-mo-kamu/hasil/${result.key}`));
    }
  }

  function back() {
    if (step === 0) return;
    setAnswers(answers.slice(0, -1));
    setStep(step - 1);
  }

  return (
    <div className="mx-auto w-full max-w-xl">
      <div className="mb-6">
        <div className="mb-2 flex items-center justify-between text-sm text-whisper">
          <span>
            {locale === "id" ? "Pertanyaan" : "Question"} {step + 1}/{total}
          </span>
          <span>{progress}%</span>
        </div>
        <div className="h-2.5 w-full overflow-hidden rounded-full bg-mist">
          <div
            className="h-full rounded-full bg-sage transition-all duration-300"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      <h2 className="mb-6 text-center font-serif text-2xl font-semibold text-ink">
        {t(current.question, locale)}
      </h2>

      <div className="grid grid-cols-1 gap-3">
        {current.options.map((opt, i) => (
          <button
            key={i}
            type="button"
            onClick={() => choose(opt.scores)}
            className="tap flex items-center gap-3 rounded-2xl border border-hairline bg-paper px-5 py-4 text-left font-medium text-ink shadow-sm transition hover:-translate-y-0.5 hover:border-sage/40 hover:shadow-md"
          >
            <span className="text-2xl" aria-hidden>
              {opt.emoji}
            </span>
            <span>{t(opt.text, locale)}</span>
          </button>
        ))}
      </div>

      {step > 0 && (
        <button
          type="button"
          onClick={back}
          className="tap mt-6 text-sm font-semibold text-whisper hover:text-ink"
        >
          ← {locale === "id" ? "Kembali" : "Back"}
        </button>
      )}
    </div>
  );
}
