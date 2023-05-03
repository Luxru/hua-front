/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production'

const nextConfig = {
  reactStrictMode: false,
  output: 'standalone',
  // Use the CDN in production and localhost for development.
  assetPrefix: isProd ? 'https://cdn.hua.luxru.top' : undefined,
}

module.exports = nextConfig
