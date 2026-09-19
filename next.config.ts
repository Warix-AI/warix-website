import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      { source: "/computer", destination: "/lora", permanent: true },
      { source: "/phone", destination: "/lora", permanent: true },
      { source: "/tablet", destination: "/lora", permanent: true },
      { source: "/server", destination: "/lora", permanent: true },
      { source: "/vision", destination: "/lora", permanent: true },
      { source: "/auto", destination: "/hardware/vehicles", permanent: true },
      { source: "/home", destination: "/hardware", permanent: true },
      { source: "/robotics", destination: "/hardware/robots", permanent: true },
    ];
  },
};

export default nextConfig;
