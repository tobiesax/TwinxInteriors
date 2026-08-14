import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Tina Cloud resolves `image` fields (e.g. portfolio photos) to its own asset
    // CDN rather than passing through the plain /uploads/* path stored in content —
    // next/image's optimizer blocks any remote host that isn't explicitly allowed.
    remotePatterns: [
      {
        protocol: "https",
        hostname: "assets.tina.io",
      },
    ],
  },
};

export default nextConfig;
