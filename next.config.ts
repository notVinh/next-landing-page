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
  async rewrites() {
    return [
      {
        source: "/api-proxy/:path*",
        // Ưu tiên BACKEND_URL (cho Docker), nếu không có thì dùng NEXT_PUBLIC (cho Local)
        destination: `${process.env.BACKEND_URL || process.env.NEXT_PUBLIC_BACKEND_URL}/:path*`,
      },
    ];
  },
};

export default nextConfig;
