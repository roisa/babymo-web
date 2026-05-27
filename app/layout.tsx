import type { Metadata } from "next";
import "./globals.css";

// Root layout — required by Next.js. The visible markup lives in
// [locale]/layout.tsx so we can ship locale-aware <html lang>.
export const metadata: Metadata = {
  title: "Baby Mo",
  description: "Islamic parenting companion for Muslim families.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return children as React.ReactElement;
}
