import type { NextConfig } from "next";

// `NEXT_PUBLIC_BASE_PATH` is set explicitly as a real env var by the
// GitHub Actions build step (see .github/workflows/nextjs.yml) — it is read
// directly from `process.env` here rather than proxied through the `env`
// config key below, because Turbopack does not reliably inline values passed
// through that key: it left a runtime `process.env` lookup in the client
// bundle that resolved to "" in the browser, breaking every asset URL and
// CV download link on the deployed site. Local `next dev` / `next build`
// leave it unset, so the site stays at the root URL for local preview.
const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

const nextConfig: NextConfig = {
  output: "export",
  basePath,
  assetPrefix: basePath ? `${basePath}/` : undefined,
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
};

export default nextConfig;
