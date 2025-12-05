/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  
  // Image optimization
  images: {
    domains: [],
    unoptimized: false,
  },
  
  // Output configuration
  output: 'standalone',
  
  // Environment variables
  env: {
    WORDPRESS_API_URL: process.env.NEXT_PUBLIC_WORDPRESS_API_URL,
    WORDPRESS_SITE_URL: process.env.NEXT_PUBLIC_WORDPRESS_SITE_URL,
  },
  
  // Headers for SEO and security
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'X-DNS-Prefetch-Control',
            value: 'on'
          },
          {
            key: 'X-Frame-Options',
            value: 'SAMEORIGIN'
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff'
          },
          {
            key: 'Referrer-Policy',
            value: 'origin-when-cross-origin'
          }
        ],
      },
    ]
  },
  
  // Redirects if needed
  async redirects() {
    return []
  },
}

module.exports = nextConfig


