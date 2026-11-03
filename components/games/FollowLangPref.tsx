"use client";

import { useEffect } from "react";
import { basePath, type Locale } from "@/lib/i18n/config";
import { readLangPref } from "@/lib/i18n/pref";

/**
 * Opens the page in the language the visitor chose on the main site: if they
 * picked EN (or ID) with the header/footer switch and land here on the other
 * locale (a shared link, a bookmark, a search result), swap the URL's locale
 * segment and keep the rest of the path, query and hash.
 */
export function FollowLangPref({ locale }: { locale: Locale }) {
  useEffect(() => {
    const want = readLangPref();
    if (!want || want === locale) return;
    const { pathname, search, hash } = window.location;
    const prefix = `${basePath}/${locale}`;
    if (!(pathname === prefix || pathname.startsWith(`${prefix}/`))) return;
    window.location.replace(`${basePath}/${want}${pathname.slice(prefix.length)}${search}${hash}`);
  }, [locale]);
  return null;
}
