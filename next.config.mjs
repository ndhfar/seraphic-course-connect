/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverActions: {
      bodySizeLimit: "2mb",
    },
  },
  images: {
    remotePatterns: [
      {
        hostname: "pub-ad7d2470a3134bc88e9085652938aa32.r2.dev",
        pathname: "/**",
        protocol: "https",
      },
    ],
  },
};

export default nextConfig;