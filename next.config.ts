import type { NextConfig } from "next";
import { withPayload } from "@payloadcms/next/withPayload";

// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   // Your Next.js config here
//   experimental: {
//     reactCompiler: false,
//   },
// };

const nextConfig: NextConfig = {
  experimental: {
    reactCompiler: false,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "lrbogqzvnkxhatqgtwtr.supabase.co",
        port: "",
        pathname: "/storage/v1/object/public/images/**",
      },
    ],
  },
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },
};

// Make sure you wrap your `nextConfig`
// with the `withPayload` plugin
export default withPayload(nextConfig); 
