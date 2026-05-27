import Link from "next/link";
import Image from "next/image";
import { type Locale, asset, pathFor } from "@/lib/i18n/config";
import { getDictionary } from "@/lib/i18n/dictionaries";
import { LanguageSwitcher } from "./LanguageSwitcher";

type Props = { locale: Locale; currentPath: string };

export function Footer({ locale, currentPath }: Props) {
  const dict = getDictionary(locale);
  const year = new Date().getFullYear();

  return (
    <footer className="mt-24 border-t border-mist bg-paper">
      <div className="mx-auto max-w-6xl px-5 py-12 sm:px-8 sm:py-16">
        <div className="grid gap-10 md:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div>
            <Link href={pathFor(locale)} className="inline-flex items-center gap-2.5">
              <Image src={asset("/assets/logo-96.png")} alt="" width={36} height={36} className="h-9 w-9" />
              <span className="font-serif text-lg font-semibold text-ink">Baby Mo</span>
            </Link>
            <p className="mt-3 max-w-xs text-sm leading-relaxed text-whisper">
              {dict.footer.tagline}
            </p>
            <div className="mt-5 inline-flex items-center gap-2 text-xs text-whisper">
              <span>{dict.footer.languageLabel}:</span>
              <LanguageSwitcher currentLocale={locale} path={currentPath} />
            </div>
          </div>

          <FooterCol heading={dict.footer.explore}>
            <FooterLink locale={locale} href="/doa">{dict.nav.doa}</FooterLink>
            <FooterLink locale={locale} href="/hadith">{dict.nav.hadith}</FooterLink>
            <FooterLink locale={locale} href="/parenting">{dict.nav.parenting}</FooterLink>
            <FooterLink locale={locale} href="/blog">{dict.nav.blog}</FooterLink>
            <FooterLink locale={locale} href="/permainan">{dict.nav.games}</FooterLink>
            <FooterLink locale={locale} href="/faq">{dict.nav.faq}</FooterLink>
          </FooterCol>

          <FooterCol heading={dict.footer.info}>
            <FooterLink locale={locale} href="/tentang">{dict.nav.about}</FooterLink>
            <FooterLink locale={locale} href="/kontak">{dict.nav.contact}</FooterLink>
            <FooterLink locale={locale} href="/privasi">{dict.pages.privacy.title}</FooterLink>
            <FooterLink locale={locale} href="/syarat">{dict.pages.terms.title}</FooterLink>
          </FooterCol>

          <FooterCol heading={dict.footer.follow}>
            <ExternalLink href="https://www.youtube.com/@babymo.official">YouTube</ExternalLink>
            <ExternalLink href="https://www.instagram.com/babymo.official">Instagram</ExternalLink>
            <ExternalLink href="https://www.tiktok.com/@babymo.official">TikTok</ExternalLink>
            <ExternalLink href="https://wa.me/6282315971002">WhatsApp</ExternalLink>
            <ExternalLink href="https://paypal.me/ibracreative">
              {locale === "id" ? "Dukung via PayPal" : "Donate via PayPal"}
            </ExternalLink>
          </FooterCol>
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-3 border-t border-mist pt-6 text-xs text-whisper sm:flex-row sm:items-center">
          <p>© {year} Baby Mo. {dict.footer.rights}</p>
          <p>babymo.id · roisa.github.io/babymo-web</p>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({ heading, children }: { heading: string; children: React.ReactNode }) {
  return (
    <div>
      <h3 className="mb-3 text-xs font-semibold uppercase tracking-wider text-ink">
        {heading}
      </h3>
      <ul className="space-y-2 text-sm">{children}</ul>
    </div>
  );
}

function FooterLink({ locale, href, children }: { locale: Locale; href: string; children: React.ReactNode }) {
  return (
    <li>
      <Link href={pathFor(locale, href)} className="text-whisper transition hover:text-ink">
        {children}
      </Link>
    </li>
  );
}

function ExternalLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <li>
      <a
        href={href}
        target="_blank"
        rel="noopener"
        className="text-whisper transition hover:text-ink"
      >
        {children}
      </a>
    </li>
  );
}
