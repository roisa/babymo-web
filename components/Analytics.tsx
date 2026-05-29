"use client";

import { useEffect } from "react";

/**
 * Privacy-friendly analytics (no cookies, no PII) for babymo.id.
 *
 * Defaults to Plausible. It only loads on the production domain, so
 * local dev, previews, and PWA opens never pollute the numbers. To
 * turn it on, create a site for "babymo.id" at https://plausible.io
 * (or self-host) — no code change needed. To switch to GA4, replace
 * the script block below with the gtag.js snippet. To disable, set
 * DOMAIN to "".
 *
 * We inject the tag imperatively (rather than next/script) because the
 * site is a static export and we want a strict runtime host check.
 */
const DOMAIN = "babymo.id";

export function Analytics() {
  useEffect(() => {
    if (!DOMAIN) return;
    if (typeof window === "undefined") return;
    // Production host only — covers babymo.id and any www. subdomain.
    if (!/(^|\.)babymo\.id$/.test(window.location.hostname)) return;
    if (document.querySelector('script[data-domain="' + DOMAIN + '"]')) return;

    const s = document.createElement("script");
    s.defer = true;
    s.setAttribute("data-domain", DOMAIN);
    s.src = "https://plausible.io/js/script.outbound-links.js";
    document.head.appendChild(s);
  }, []);

  return null;
}
