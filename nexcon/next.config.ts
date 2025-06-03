import type { NextConfig } from "next";

// next.config.ts
const nextConfig: NextConfig = {
  // ... other configurations
  experimental: {
    esmExternals: true, // Optional, might help with some ESM issues
  },
  transpilePackages: ["problematic-library-name"], // Replace with the actual library name

  // Add these lines to ignore build errors for lint and typescript
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
};

export default nextConfig;
