import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Vercel's Image Optimization API (/_next/image) has a monthly quota on the
    // Hobby plan; once exceeded it returns 402 and every optimized image breaks
    // site-wide. Serve images unoptimized (no resize/format conversion) instead.
    unoptimized: true,
  },
};

export default nextConfig;
