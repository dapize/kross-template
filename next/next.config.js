/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    BASE_URL: process.env.BASE_URL,
  },
  experimental: {
    images: {
      layoutRaw: true
    }
  }
}

module.exports = nextConfig
