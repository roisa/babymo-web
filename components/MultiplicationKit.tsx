import type { BlogKit } from "@/lib/content/types";
import type { Locale } from "@/lib/i18n/config";

const LABELS = {
  id: {
    heading: "Bagikan & Bawa ke Mana Saja",
    sub: "Konten siap-pakai untuk dibagikan di media sosial atau dicetak. Salin yang kamu butuhkan.",
    quote: "Kutipan untuk WhatsApp / Story",
    carousel: "Slide IG Carousel",
    short: "Skrip TikTok / YouTube Shorts (60 detik)",
    pin: "Pinterest Pin",
    checklist: "Checklist untuk Dicetak",
    title: "Judul",
    description: "Deskripsi",
    slide: "Slide",
    eyebrow: "Kit Multiplikasi Konten",
  },
  en: {
    heading: "Share & Take It Anywhere",
    sub: "Ready-to-use content for social media or printing. Copy what you need.",
    quote: "Quote for WhatsApp / Story",
    carousel: "IG Carousel Slides",
    short: "TikTok / YouTube Shorts script (60 seconds)",
    pin: "Pinterest Pin",
    checklist: "Printable Checklist",
    title: "Title",
    description: "Description",
    slide: "Slide",
    eyebrow: "Content Multiplication Kit",
  },
} as const;

type Props = { kit: BlogKit; locale: Locale };

export function MultiplicationKit({ kit, locale }: Props) {
  const L = LABELS[locale];

  return (
    <aside className="mt-16 rounded-[28px] border border-hairline bg-paper-2 p-6 sm:p-10">
      <header className="mb-8 max-w-xl">
        <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-clay">
          {L.eyebrow}
        </p>
        <h2 className="tracking-display mt-1 font-serif text-2xl font-medium text-ink sm:text-3xl">
          {L.heading}
        </h2>
        <p className="mt-2 text-[14.5px] leading-relaxed text-whisper">{L.sub}</p>
      </header>

      <div className="grid gap-6 lg:grid-cols-2">
        <Card heading={L.quote} icon={QuoteIcon}>
          <blockquote className="border-l-2 border-clay pl-4 font-serif text-[17px] italic leading-[1.55] text-ink">
            {kit.quote[locale]}
          </blockquote>
          <div className="mt-4 flex flex-wrap gap-2">
            <ShareLink
              label="WhatsApp"
              href={`https://wa.me/?text=${encodeURIComponent(kit.quote[locale])}`}
            />
            <ShareLink
              label="Telegram"
              href={`https://t.me/share/url?text=${encodeURIComponent(kit.quote[locale])}`}
            />
            <ShareLink
              label="X / Twitter"
              href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(kit.quote[locale])}`}
            />
          </div>
        </Card>

        <Card heading={L.pin} icon={PinIcon}>
          <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-whisper">
            {L.title}
          </p>
          <p className="mt-1 font-serif text-[15.5px] text-ink">
            {kit.pin[locale].title}
          </p>
          <p className="mt-4 text-[10px] font-semibold uppercase tracking-[0.14em] text-whisper">
            {L.description}
          </p>
          <p className="mt-1 text-[13.5px] leading-relaxed text-ink-soft">
            {kit.pin[locale].description}
          </p>
        </Card>

        <Card heading={L.carousel} icon={LayersIcon} wide>
          <ol className="grid gap-3 sm:grid-cols-2">
            {kit.carousel[locale].map((s, i) => (
              <li
                key={i}
                className="rounded-2xl border border-hairline bg-paper p-4"
              >
                <div className="mb-1.5 text-[10px] font-semibold uppercase tracking-[0.14em] text-whisper">
                  {L.slide} {i + 1} / {kit.carousel[locale].length}
                </div>
                <h4 className="font-serif text-[15px] font-semibold text-ink">
                  {s.title}
                </h4>
                <p className="mt-1 text-[13.5px] leading-relaxed text-ink-soft">
                  {s.body}
                </p>
              </li>
            ))}
          </ol>
        </Card>

        <Card heading={L.short} icon={VideoIcon} wide>
          <pre className="whitespace-pre-wrap rounded-2xl border border-hairline bg-paper p-4 font-sans text-[14px] leading-relaxed text-ink">
            {kit.shortScript[locale]}
          </pre>
        </Card>

        <Card heading={L.checklist} icon={ListIcon} wide>
          <ul className="space-y-2">
            {kit.checklist[locale].map((it, i) => (
              <li key={i} className="flex gap-3 text-[14px] text-ink">
                <span className="mt-1 inline-block h-4 w-4 shrink-0 rounded border border-ink-soft" />
                <span>{it}</span>
              </li>
            ))}
          </ul>
          <p className="mt-4 text-[12px] text-whisper">
            {locale === "id"
              ? "Tip: gunakan 'Print' di browser, pilih 'Save as PDF' untuk cetakan rapi."
              : "Tip: use 'Print' in your browser, then 'Save as PDF' for a clean handout."}
          </p>
        </Card>
      </div>
    </aside>
  );
}

function Card({
  heading,
  icon: Icon,
  wide,
  children,
}: {
  heading: string;
  icon: React.ComponentType;
  wide?: boolean;
  children: React.ReactNode;
}) {
  return (
    <section
      className={
        "rounded-[22px] border border-hairline bg-paper p-5 sm:p-6 " +
        (wide ? "lg:col-span-2" : "")
      }
    >
      <header className="mb-4 flex items-center gap-2.5">
        <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-sage-soft text-sage-deep">
          <Icon />
        </span>
        <h3 className="font-serif text-[15.5px] font-semibold text-ink">
          {heading}
        </h3>
      </header>
      {children}
    </section>
  );
}

function ShareLink({ label, href }: { label: string; href: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener"
      className="tap rounded-full border border-hairline bg-paper px-3 py-1.5 text-[12.5px] font-semibold text-ink-soft transition hover:border-sage/40"
    >
      {label}
    </a>
  );
}

function QuoteIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M7 7h4v4l-2 4H5v-5l2-3Zm10 0h4v4l-2 4h-4v-5l2-3Z" />
    </svg>
  );
}
function LayersIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="m12 3 9 5-9 5-9-5 9-5Zm-9 9 9 5 9-5M3 17l9 5 9-5" />
    </svg>
  );
}
function VideoIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <rect x="3" y="6" width="14" height="12" rx="2" />
      <path d="m17 10 4-2v8l-4-2Z" />
    </svg>
  );
}
function PinIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M12 2C8 2 5 5 5 9c0 5 7 13 7 13s7-8 7-13c0-4-3-7-7-7Z" />
      <circle cx="12" cy="9" r="2.5" />
    </svg>
  );
}
function ListIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M9 6h12M9 12h12M9 18h12" />
      <circle cx="4.5" cy="6" r="1.5" />
      <circle cx="4.5" cy="12" r="1.5" />
      <circle cx="4.5" cy="18" r="1.5" />
    </svg>
  );
}
