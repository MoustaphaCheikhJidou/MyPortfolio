import type { NextConfig } from "next";

const repoName = "MyPortfolio";
// Only prefix paths when actually building in the GitHub Actions deployment
// workflow. Local `next dev` / `next build` stay at the site root so the
// portfolio can be previewed at http://localhost:3000/ without the repo
// name in the URL.
const isGithubActions = process.env.GITHUB_ACTIONS === "true";
const basePath = isGithubActions ? `/${repoName}` : "";

const nextConfig: NextConfig = {
  output: "export",
  basePath,
  assetPrefix: basePath ? `${basePath}/` : undefined,
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
  },
};

export default nextConfig;
