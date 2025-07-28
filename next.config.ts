import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  transpilePackages: ['@remotion/player', 'remotion'],
  webpack: (config: any) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      '@remotion/player': '@remotion/player/dist/esm/index.js',
    };
    return config;
  },
  experimental: {
    esmExternals: false
  }
};

export default nextConfig;
