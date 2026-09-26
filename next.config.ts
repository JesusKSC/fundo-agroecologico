import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.fundoagroecologico.com",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
