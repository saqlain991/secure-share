/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["firebasestorage.googleapis.com"],
    unoptimized: true,
  },
  webpack: (config) => {
    config.resolve.alias["@"] = __dirname;
    return config;
  },
};

module.exports = nextConfig;
