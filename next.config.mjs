/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    optimizePackageImports: ["framer-motion"]
  },
  webpack: (config, { dev }) => {
    if (dev) {
      // Avoid flaky filesystem cache writes in synced folders like OneDrive.
      config.cache = false;
    }
    return config;
  }
};

export default nextConfig;
