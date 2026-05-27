import { redirect } from "next/navigation";
import { defaultLocale, pathFor } from "@/lib/i18n/config";

// Root URL — redirect into the default locale.
// On GitHub Pages (static export) Next emits an HTML page with a meta-refresh.
export default function RootPage() {
  redirect(pathFor(defaultLocale));
}
