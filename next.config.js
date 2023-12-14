/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [{ protocol: "https", hostname: "media.licdn.com" }, { protocol: "https", hostname: "raw.githubusercontent.com" }]
  }
};

module.exports = nextConfig;
