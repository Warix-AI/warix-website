import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      { source: "/one", destination: "/software/one", permanent: true },
      { source: "/products", destination: "/software", permanent: true },
      { source: "/fashion", destination: "/", permanent: false },
      { source: "/fashion/:path*", destination: "/", permanent: false },
      { source: "/vehicles", destination: "/", permanent: false },
      { source: "/vehicles/:path*", destination: "/", permanent: false },
      { source: "/consumables", destination: "/", permanent: false },
      { source: "/consumables/:path*", destination: "/", permanent: false },
      { source: "/cander", destination: "/software", permanent: true },
      { source: "/lora", destination: "/software/one", permanent: true },
      { source: "/computer", destination: "/software/one", permanent: true },
      { source: "/phone", destination: "/software/one", permanent: true },
      { source: "/tablet", destination: "/software/one", permanent: true },
      { source: "/server", destination: "/software/one", permanent: true },
      { source: "/vision", destination: "/software/one", permanent: true },
      {
        source: "/hardware/fashion",
        destination: "/hardware",
        permanent: true,
      },
      {
        source: "/hardware/fashion/:path*",
        destination: "/hardware",
        permanent: true,
      },
      {
        source: "/hardware/:category/:product/design",
        destination: "/hardware/:product/configure",
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
