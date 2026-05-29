import type { Locale } from "./i18n/config";

/**
 * Ways to support Baby Mo (sadaqah).
 *
 * Indonesia-first methods are listed first because that's the core
 * audience; PayPal covers international supporters. A method only shows
 * up on /dukung when it's actually usable — i.e. it has a `url` (or, for
 * QRIS, a `qrImage`). To enable Saweria / Trakteer / QRIS, just fill in
 * the blanks below; no other code change is needed.
 */
export type SupportMethod = {
  id: string;
  label: string;
  /** Short handle shown under the label, e.g. "saweria.co/babymo". */
  handle: string;
  /** Tap target. Leave "" to keep the method hidden until ready. */
  url: string;
  /** For QRIS: a static QR image under /public. Leave "" if none. */
  qrImage?: string;
  desc: Record<Locale, string>;
  cta: Record<Locale, string>;
  /** Tailwind classes for the icon chip. */
  accent: string;
  recommended?: boolean;
};

export const supportMethods: SupportMethod[] = [
  {
    id: "qris",
    label: "QRIS",
    handle: "Scan via aplikasi bank / e-wallet",
    url: "",
    qrImage: "", // e.g. "/assets/qris-babymo.png" — drop the QR in /public
    desc: {
      id: "Scan satu kali pakai aplikasi bank, GoPay, OVO, Dana, atau ShopeePay.",
      en: "Scan once with any Indonesian bank app or e-wallet.",
    },
    cta: { id: "Lihat QR", en: "Show QR" },
    accent: "bg-[#ecfdf3] text-[#1f8748]",
    recommended: true,
  },
  {
    id: "saweria",
    label: "Saweria",
    handle: "saweria.co/babymo",
    url: "", // e.g. "https://saweria.co/babymo"
    desc: {
      id: "Sedekah cepat tanpa biaya admin, langsung dari e-wallet.",
      en: "Quick, fee-free support straight from your e-wallet.",
    },
    cta: { id: "Buka Saweria →", en: "Open Saweria →" },
    accent: "bg-[#fff3e6] text-[#d97706]",
  },
  {
    id: "trakteer",
    label: "Trakteer",
    handle: "trakteer.id/babymo",
    url: "", // e.g. "https://trakteer.id/babymo"
    desc: {
      id: "Traktir Baby Mo segelas susu — dukungan sekali atau rutin.",
      en: "Buy Baby Mo a glass of milk — one-off or recurring.",
    },
    cta: { id: "Buka Trakteer →", en: "Open Trakteer →" },
    accent: "bg-[#ffeef0] text-[#e0395a]",
  },
  {
    id: "paypal",
    label: "PayPal",
    handle: "paypal.me/ibracreative",
    url: "https://paypal.me/ibracreative",
    desc: {
      id: "Untuk pendukung internasional.",
      en: "For international supporters.",
    },
    cta: { id: "Buka PayPal →", en: "Open PayPal →" },
    accent: "bg-[#eef4ff] text-[#0070ba]",
  },
];

/** Methods that are actually usable right now (have a url or a QR image). */
export function getEnabledSupportMethods(): SupportMethod[] {
  return supportMethods.filter((m) => m.url || m.qrImage);
}
