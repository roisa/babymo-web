import type { MetadataRoute } from "next";
import { basePath } from "@/lib/i18n/config";

export const dynamic = "force-static";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Baby Mo — Islamic Parenting Companion",
    short_name: "Baby Mo",
    description:
      "Daily duas, hadith, parenting guidance, and educational games for Muslim families.",
    start_url: `${basePath}/id/`,
    scope: `${basePath}/`,
    display: "standalone",
    background_color: "#FAFAF7",
    theme_color: "#5F8B5A",
    orientation: "portrait",
    lang: "id-ID",
    categories: ["education", "kids", "lifestyle"],
    icons: [
      {
        src: `${basePath}/assets/logo-192.png`,
        sizes: "192x192",
        type: "image/png",
        purpose: "any",
      },
      {
        src: `${basePath}/assets/logo-512.png`,
        sizes: "512x512",
        type: "image/png",
        purpose: "any",
      },
      {
        src: `${basePath}/assets/logo-192.png`,
        sizes: "192x192",
        type: "image/png",
        purpose: "maskable",
      },
      {
        src: `${basePath}/assets/logo-512.png`,
        sizes: "512x512",
        type: "image/png",
        purpose: "maskable",
      },
    ],
  };
}
