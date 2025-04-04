// next.config.js
const withPWA = require("@ducanh2912/next-pwa").default({
  dest: "public",
  cacheOnFrontEndNav: true,
  aggressiveFrontEndNavCaching: true,
  reloadOnOnline: true,
  swcMinify: true,
  disable: process.env.NODE_ENV === "development",
  workboxOptions: {
    disableDevLogs: true,
  },
  // ... other options you like
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  output:'export',
  trailingSlash: true,
  images: {
    unoptimized: true,
    domains: [
      "thesummary.blog",
      'img.freepik.com',
      "thaibusinessmate.com",
      "web.thaibusinessmate.com"
    ],
  },
};

module.exports = withPWA(nextConfig);
