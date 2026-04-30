/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    // Provide your environment variables here
    TEMU_API_KEY: process.env.TEMU_API_KEY,
  },
};

module.exports = nextConfig;