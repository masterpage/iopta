import childProcess from "child_process";

import { NextConfig } from "next";

const commitHash = childProcess
  .execSync('git log --pretty=format:"%H" -n1')
  .toString()
  .trim();

const nextConfig: NextConfig = {
  compiler: {
    emotion: { labelFormat: "['parent']" },
    reactRemoveProperties: process.env.NODE_ENV === "production",
  },
  crossOrigin: "anonymous",
  devIndicators: false,
  env: {
    GIT_COMMIT_HASH: commitHash,
  },
  experimental: {
    authInterrupts: true,
    optimizePackageImports: ["@/utils", "@mui/material", "lodash"],
    swcTraceProfiling: true,
  },
  generateBuildId: async () => commitHash,
  reactStrictMode: true,
  webpack: (config) => {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"],
    });

    return config;
  },
};

export default nextConfig;
