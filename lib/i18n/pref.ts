/**
 * The visitor's chosen site language, remembered when they tap ID/EN in the
 * header or footer. Pages that should always open in that language (the
 * quiz / Brain Challenge pages) read it and switch the URL locale to match.
 */
import { locales, type Locale } from "@/lib/i18n/config";

export const LANG_PREF_KEY = "bm_site_lang";

export function readLangPref(): Locale | null {
  try {
    const v = localStorage.getItem(LANG_PREF_KEY);
    return (locales as readonly string[]).includes(v ?? "") ? (v as Locale) : null;
  } catch {
    return null;
  }
}

export function saveLangPref(l: Locale) {
  try {
    localStorage.setItem(LANG_PREF_KEY, l);
  } catch {}
}
