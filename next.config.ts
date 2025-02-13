import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  images: {
    minimumCacheTTL: 600,
    domains: ['res.cloudinary.com'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com'
      }
    ],
    loader: 'custom',
    loaderFile: './lib/image/loader.ts'
  },
  // Fix for image loader, bug in next.js source code
  experimental: {
    turbo: {
      resolveAlias: {
        'next/dist/shared/lib/image-loader': './lib/image/loader.ts'
      }
    }
  },
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          { key: 'X-Frame-Options', value: 'SAMEORIGIN' },
          { key: 'Content-Security-Policy', value: "frame-ancestors 'self'" }
        ]
      }
    ];
  }
};

export default nextConfig;