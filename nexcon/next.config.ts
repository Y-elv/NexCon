import type { NextConfig } from "next";

// next.config.js
const nextConfig = {
  // ... other configurations
  experimental: {
    esmExternals: true, // Optional, might help with some ESM issues
  },
  transpilePackages: ['problematic-library-name'], // Replace with the actual library name
};

export default nextConfig;
