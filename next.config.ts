import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      { source: "/lora", destination: "/one", permanent: true },
      { source: "/cander", destination: "/products", permanent: true },
      { source: "/computer", destination: "/one", permanent: true },
      { source: "/phone", destination: "/one", permanent: true },
      { source: "/tablet", destination: "/one", permanent: true },
      { source: "/server", destination: "/one", permanent: true },
      { source: "/vision", destination: "/one", permanent: true },
      { source: "/hardware", destination: "/products", permanent: true },
      { source: "/hardware/:path*", destination: "/products", permanent: true },
      { source: "/auto", destination: "/products", permanent: true },
      { source: "/robotics", destination: "/products", permanent: true },
    ];
  },
};

export default nextConfig;
