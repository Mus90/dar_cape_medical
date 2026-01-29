const withNextIntl = require('next-intl/plugin')("./src/i18n.ts");

/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    // Allow production builds to successfully complete even if
    // there are ESLint errors.
    ignoreDuringBuilds: true,
  },
  typescript: {
    // Allow production builds to successfully complete even if
    // there are type errors.
    ignoreBuildErrors: true,
  },
  // Static export for GitHub Pages
  output: 'export',
  images: {
    unoptimized: true,
    domains: ['images.unsplash.com', 'via.placeholder.com'],
  },
  trailingSlash: true,
  // Performance optimizations
  experimental: {
    optimizePackageImports: ['@heroicons/react', 'framer-motion']
  },
  // Reduce bundle size
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production'
  }
}

module.exports = withNextIntl(nextConfig);

