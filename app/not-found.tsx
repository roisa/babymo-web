import Link from "next/link";
import { defaultLocale, pathFor } from "@/lib/i18n/config";

// Static export 404
export default function NotFound() {
  return (
    <html lang="id">
      <body
        style={{
          margin: 0,
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontFamily:
            "system-ui, -apple-system, Segoe UI, Roboto, sans-serif",
          background: "#FAFAF7",
          color: "#0E1213",
          padding: 24,
          textAlign: "center",
        }}
      >
        <div>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/baby-mo-poses/baby-mo-pose-38.png"
            alt="Baby Mo"
            width={160}
            height={160}
            style={{ width: 160, height: 160, objectFit: "contain", margin: "0 auto 4px", display: "block" }}
          />
          <p style={{ fontSize: 56, fontWeight: 700, margin: 0, color: "#5F8B5A" }}>
            404
          </p>
          <h1 style={{ fontSize: 24, margin: "12px 0 6px" }}>
            Halaman tidak ditemukan
          </h1>
          <p style={{ color: "#6B7068", margin: "0 0 24px" }}>
            Page not found.
          </p>
          <Link
            href={pathFor(defaultLocale)}
            style={{
              display: "inline-block",
              background: "#0E1213",
              color: "#FAFAF7",
              padding: "10px 22px",
              borderRadius: 999,
              textDecoration: "none",
              fontWeight: 600,
            }}
          >
            Kembali ke beranda · Back home
          </Link>
        </div>
      </body>
    </html>
  );
}
