"use client";

import { useEffect } from "react";

/**
 * Privacy-friendly analytics (no cookies, no PII) for babymo.id via
 * Cloudflare Web Analytics — free, GDPR-friendly.
 *
 * It only loads on the production host, so local dev, previews, and PWA
 * opens never pollute the numbers. To turn it on: create a free site for
 * "babymo.id" in the Cloudflare dashboard → Web Analytics → copy the
 * token → paste it below. Leave "" to keep analytics disabled.
 *
 * Injected imperatively (not next/script) because the site is a static
 * export and we want a strict runtime host check.
 */
const CF_BEACON_TOKEN = ""; // e.g. "abc123…". Empty = disabled.

export function Analytics() {
  useEffect(() => {
    if (!CF_BEACON_TOKEN) return;
    if (typeof window === "undefined") return;
    // Production host only — covers babymo.id and any www. subdomain.
    if (!/(^|\.)babymo\.id$/.test(window.location.hostname)) return;
    if (document.querySelector("script[data-cf-beacon]")) return;

    const s = document.createElement("script");
    s.defer = true;
    s.src = "https://static.cloudflareinsights.com/beacon.min.js";
    s.setAttribute("data-cf-beacon", JSON.stringify({ token: CF_BEACON_TOKEN }));
    document.head.appendChild(s);
  }, []);

  return null;
}
