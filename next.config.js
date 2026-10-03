const withNextIntl = require('next-intl/plugin')("./src/i18n.ts");

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
    domains: ['images.unsplash.com', 'via.placeholder.com'],
  },
  trailingSlash: true,
  experimental: {
    optimizePackageImports: ['@heroicons/react', 'framer-motion']
  },
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production'
  },
  swcMinify: true,
  compress: true
}

module.exports = withNextIntl(nextConfig);

