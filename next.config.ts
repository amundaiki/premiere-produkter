import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "premiere-produkter.no",
      },
    ],
  },
};

export default nextConfig;
