import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "s3-north1.viettelidc.com.vn",
        port: "",
        pathname: "/**", // Cho phép tất cả các đường dẫn ảnh từ host này
      },
    ],
  },
};

export default nextConfig;
