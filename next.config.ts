import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    localPatterns: [
      {
        pathname: "/src/assets/images/**",
        search: "",
      },
    ],
  },
};

export default nextConfig;
