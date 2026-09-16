import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "firebasestorage.googleapis.com",
        port: "",
        pathname: "/v0/b/**",
      },
      {
        protocol: "https",
        hostname: "img.youtube.com",
        port: "",
        pathname: "/vi/**",
      },
    ],
    formats: ["image/avif", "image/webp"],
  },
  // Optimize for Vercel deployment
  poweredByHeader: false,
  reactStrictMode: true,
};

export default nextConfig;
