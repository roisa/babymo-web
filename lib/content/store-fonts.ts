import { Baloo_2, Inter } from "next/font/google";

/**
 * Fonts for the standalone App Store pages (/app, /support, /privacy).
 * Declared ONCE here so the build fetches them once, instead of once per
 * page — a flaky Google Fonts response during `next build` broke a deploy.
 */
export const storeRounded = Baloo_2({ subsets: ["latin"], weight: ["600", "700", "800"], variable: "--f-round", display: "swap" });
export const storeBody = Inter({ subsets: ["latin"], variable: "--f-body", display: "swap" });
export const STORE_FONT_VARS = `${storeRounded.variable} ${storeBody.variable}`;
