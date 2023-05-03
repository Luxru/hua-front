/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production'

const nextConfig = {
  reactStrictMode: false,
  output: 'standalone',
  assetPrefix: isProd ? 'https://cdn.hua.luxru.top' : undefined,
}

module.exports = nextConfig
