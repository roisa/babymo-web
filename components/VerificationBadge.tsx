"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import {
  type Locale,
  pathFor,
  absoluteUrl,
  whatsappNumber,
} from "@/lib/i18n/config";
import { getPersonBySlug } from "@/lib/content/people";

type Props = {
  locale: Locale;
  /** Person slug of the reviewing scholar — set when officially verified */
  reviewedBy?: string;
  /** Content type label, e.g. "doa" | "surat" | "hadis" */
  kindLabel: string;
  /** Display title of the content (for the review message) */
  title: string;
  /** App-relative path, e.g. "/doa/sebelum-tidur" */
  path: string;
};

const LS_KEY = "babymo.verify.v1";

function readSent(): Record<string, boolean> {
  if (typeof window === "undefined") return {};
  try {
    return JSON.parse(window.localStorage.getItem(LS_KEY) || "{}") || {};
  } catch {
    return {};
  }
}

function markSent(path: string) {
  if (typeof window === "undefined") return;
  try {
    const map = readSent();
    map[path] = true;
    window.localStorage.setItem(LS_KEY, JSON.stringify(map));
  } catch {
    /* storage blocked */
  }
}

/**
 * Verification status + a two-step "help verify" flow for religious content.
 *
 *   - Officially verified (reviewedBy set): green "Diperiksa oleh ___" badge.
 *   - Otherwise: a button that opens a small dialog asking whether the
 *     content is correct:
 *       • "Ya, sudah sesuai" → records a local acknowledgement AND opens
 *         WhatsApp to Baby Mo with a ready approval message (the owner then
 *         sets reviewedBy to flip the official badge). A distinct, softer
 *         "Verifikasi terkirim" state shows on-device — it never imitates
 *         the official badge.
 *       • "Perlu perbaikan" → opens WhatsApp to Baby Mo with a fillable
 *         correction template.
 */
export function VerificationBadge({
  locale,
  reviewedBy,
  kindLabel,
  title,
  path,
}: Props) {
  const reviewer = getPersonBySlug(reviewedBy);
  const [mounted, setMounted] = useState(false);
  const [open, setOpen] = useState(false);
  const [sent, setSent] = useState(false);

  useEffect(() => {
    setMounted(true);
    setSent(Boolean(readSent()[path]));
  }, [path]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  const id = locale === "id";

  // ── Officially verified — unchanged green badge ──────────────────────
  if (reviewer) {
    return (
      <Link
        href={pathFor(locale, `/tim#${reviewer.slug}`)}
        className="inline-flex items-center gap-2 rounded-full border border-brave/30 bg-brave-soft px-3.5 py-1.5 text-[12.5px] font-semibold text-brave-deep transition hover:border-brave/50"
      >
        <ShieldCheckIcon />
        {id ? "Diperiksa oleh" : "Verified by"} {reviewer.name}
      </Link>
    );
  }

  const url = absoluteUrl(locale, path);
  const waBase = whatsappNumber
    ? `https://wa.me/${whatsappNumber}`
    : "https://wa.me/";

  const approveMsg = id
    ? `Assalamu'alaikum, saya sudah memeriksa ${kindLabel} ini di Baby Mo dan menurut saya sudah benar serta sesuai sumber:\n\n"${title}"\n${url}\n\nMohon ditandai sebagai terverifikasi.\n— (nama peninjau): `
    : `Assalamu'alaikum, I've reviewed this ${kindLabel} on Baby Mo and it looks correct and faithful to the source:\n\n"${title}"\n${url}\n\nPlease mark it as verified.\n— (reviewer name): `;

  const fixMsg = id
    ? `Assalamu'alaikum, ada masukan perbaikan untuk ${kindLabel} ini di Baby Mo:\n\n"${title}"\n${url}\n\n• Bagian yang perlu diperbaiki: \n• Usulan perbaikan: \n• Sumber/alasan: \n\nJazakallahu khairan.`
    : `Assalamu'alaikum, I have a correction for this ${kindLabel} on Baby Mo:\n\n"${title}"\n${url}\n\n• Part that needs fixing: \n• Suggested correction: \n• Source/reason: \n\nJazakallahu khairan.`;

  function openWA(text: string) {
    window.open(`${waBase}?text=${encodeURIComponent(text)}`, "_blank", "noopener");
  }

  function onApprove() {
    markSent(path);
    setSent(true);
    setOpen(false);
    openWA(approveMsg);
  }

  function onNeedsFix() {
    setOpen(false);
    openWA(fixMsg);
  }

  // ── Local "sent" acknowledgement — distinct from the official badge ──
  if (mounted && sent) {
    return (
      <span
        className="inline-flex items-center gap-2 rounded-full border border-sage/30 bg-sage-soft px-3.5 py-1.5 text-[12.5px] font-semibold text-sage-deep"
        title={
          id
            ? "Konfirmasimu terkirim ke tim Baby Mo untuk ditandai resmi."
            : "Your confirmation was sent to the Baby Mo team for official marking."
        }
      >
        <CheckCircleIcon />
        {id ? "Verifikasi terkirim — terima kasih" : "Verification sent — thank you"}
      </span>
    );
  }

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="inline-flex items-center gap-2 rounded-full border border-hairline bg-paper px-3.5 py-1.5 text-[12.5px] font-medium text-whisper transition hover:border-brave/40 hover:text-brave-deep"
      >
        <CheckSeekIcon />
        {id ? "Bantu verifikasi konten ini" : "Help verify this content"}
      </button>

      {open && (
        <div
          className="fixed inset-0 z-[60] flex items-end justify-center bg-black/50 p-4 backdrop-blur-sm dark:bg-black/65 sm:items-center"
          role="dialog"
          aria-modal="true"
          aria-label={id ? "Verifikasi konten" : "Verify content"}
          onClick={(e) => e.target === e.currentTarget && setOpen(false)}
        >
          <div className="animate-bounce-in w-full max-w-md rounded-[24px] border border-hairline bg-paper p-6 shadow-2xl sm:p-7">
            <div className="flex items-start justify-between gap-4">
              <div className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-brave-soft text-brave-deep">
                <ShieldCheckIcon />
              </div>
              <button
                type="button"
                onClick={() => setOpen(false)}
                aria-label={id ? "Tutup" : "Close"}
                className="tap -mr-1 -mt-1 grid h-8 w-8 place-items-center rounded-full text-whisper hover:bg-paper-2 hover:text-ink"
              >
                ✕
              </button>
            </div>

            <h2 className="font-display mt-3 text-[20px] font-medium leading-tight text-ink">
              {id ? "Verifikasi konten ini" : "Verify this content"}
            </h2>
            <p className="mt-2 text-[14px] leading-relaxed text-whisper">
              {id
                ? "Apakah teks Arab, transliterasi, terjemahan, dan sumbernya sudah tepat?"
                : "Are the Arabic text, transliteration, translation, and source accurate?"}
            </p>

            <div className="mt-5 grid gap-2.5">
              <button
                type="button"
                onClick={onApprove}
                className="tap group flex items-center gap-3 rounded-2xl border border-brave/30 bg-brave-soft/60 p-4 text-left transition hover:border-brave/50"
              >
                <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-brave text-white">
                  <CheckIcon />
                </span>
                <span className="min-w-0">
                  <span className="block text-[14.5px] font-semibold text-ink">
                    {id ? "Ya, sudah sesuai" : "Yes, it's correct"}
                  </span>
                  <span className="block text-[12.5px] text-whisper">
                    {id
                      ? "Kirim konfirmasi ke Baby Mo untuk ditandai resmi"
                      : "Send confirmation to Baby Mo for official marking"}
                  </span>
                </span>
              </button>

              <button
                type="button"
                onClick={onNeedsFix}
                className="tap group flex items-center gap-3 rounded-2xl border border-hairline bg-paper p-4 text-left transition hover:border-clay/50"
              >
                <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-clay-soft text-clay">
                  <PencilIcon />
                </span>
                <span className="min-w-0">
                  <span className="block text-[14.5px] font-semibold text-ink">
                    {id ? "Perlu perbaikan" : "Needs improvement"}
                  </span>
                  <span className="block text-[12.5px] text-whisper">
                    {id
                      ? "Tulis masukan via WhatsApp (template siap pakai)"
                      : "Write feedback via WhatsApp (ready-made template)"}
                  </span>
                </span>
              </button>
            </div>

            <p className="mt-4 text-[11.5px] leading-relaxed text-whisper-2">
              {id
                ? "Masukanmu dikirim ke tim Baby Mo. Badge resmi “Diperiksa oleh” ditampilkan setelah ditinjau peninjau bersertifikat."
                : "Your input is sent to the Baby Mo team. The official “Verified by” badge appears after a qualified reviewer confirms."}
            </p>
          </div>
        </div>
      )}
    </>
  );
}

function ShieldCheckIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z" />
      <path d="m9 12 2 2 4-4" />
    </svg>
  );
}

function CheckSeekIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z" />
      <path d="M12 8v4M12 15.5v.5" />
    </svg>
  );
}

function CheckCircleIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <circle cx="12" cy="12" r="9" />
      <path d="m8.5 12 2.5 2.5 4.5-5" />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="m5 12 5 5L20 7" />
    </svg>
  );
}

function PencilIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M12 20h9" />
      <path d="M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4Z" />
    </svg>
  );
}
