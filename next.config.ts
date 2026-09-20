import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      { source: "/computer", destination: "/lora", permanent: true },
      { source: "/phone", destination: "/lora", permanent: true },
      { source: "/tablet", destination: "/lora", permanent: true },
      { source: "/server", destination: "/lora", permanent: true },
      { source: "/vision", destination: "/lora", permanent: true },
      { source: "/auto", destination: "/hardware", permanent: true },
      { source: "/home", destination: "/hardware", permanent: true },
      { source: "/robotics", destination: "/hardware", permanent: true },
      { source: "/hardware/robots", destination: "/hardware", permanent: true },
      {
        source: "/hardware/robots/:path*",
        destination: "/hardware",
        permanent: true,
      },
      { source: "/hardware/vehicles", destination: "/hardware", permanent: true },
      {
        source: "/hardware/vehicles/:path*",
        destination: "/hardware",
        permanent: true,
      },
      { source: "/hardware/jewelry", destination: "/hardware", permanent: true },
      {
        source: "/hardware/jewelry/:path*",
        destination: "/hardware",
        permanent: true,
      },
      {
        source: "/hardware/wearables",
        destination: "/hardware",
        permanent: true,
      },
      {
        source: "/hardware/wearables/:path*",
        destination: "/hardware",
        permanent: true,
      },
      {
        source: "/hardware/fashion/ring",
        destination: "/hardware/fashion/puffer",
        permanent: true,
      },
      {
        source: "/hardware/fashion/necklace",
        destination: "/hardware/fashion/watch",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
