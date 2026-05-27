import type { NextConfig } from "next";

// GitHub Pages serves the repo from /babymo-web/, so we must prefix everything.
// When/if you switch to a custom domain (babymo.id) at the apex, set
// NEXT_PUBLIC_BASE_PATH="" and NEXT_PUBLIC_SITE_URL="https://babymo.id".
const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "/babymo-web";

const nextConfig: NextConfig = {
  output: "export",
  basePath,
  assetPrefix: basePath ? `${basePath}/` : undefined,
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  reactStrictMode: true,
  poweredByHeader: false,
};

export default nextConfig;
