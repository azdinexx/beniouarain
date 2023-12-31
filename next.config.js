const { hostname } = require('os');

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      { hostname: 'cdn.shopify.com' },
      { hostname: 'images.ctfassets.net' },
    ],
  },
  experimental: {
    serverActions: true,
  },
};

module.exports = nextConfig;
