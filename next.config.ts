import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  eslint: {
    // Disabling on production builds because we're running checks on PRs via GitHub Actions.
    ignoreDuringBuilds: true,
  },
  images: {
    minimumCacheTTL: 600,
    domains: ['res.cloudinary.com'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '*.optimizely.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
      },
    ],
    loader: 'custom',
    loaderFile: './lib/image/loader.ts',
  },
  // Fix for image loader, bug in next.js source code
  experimental: {
    turbo: {
      resolveAlias: {
        'next/dist/shared/lib/image-loader': './lib/image/loader.ts',
      },
    },
  },
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          { key: 'X-Frame-Options', value: 'SAMEORIGIN' },
          {
            key: 'Content-Security-Policy',
            value: "frame-ancestors 'self' *.optimizely.com",
          },
        ],
      },
    ]
  },
  async redirects() {
    return [
      {
        source: '/preview/:path*',
        destination: '/api/draft:path*',
        permanent: true,
      },
    ]
  },
}

export default nextConfig
