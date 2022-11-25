/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["iili.io", "cdn.pixabay.com"]
  }
}

module.exports = nextConfig
