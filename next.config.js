/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  output: 'export',
  images: {
    unoptimized: true,
  },
  env: {
    WORDPRESS_API_URL: process.env.NEXT_PUBLIC_WORDPRESS_API_URL,
    WORDPRESS_SITE_URL: process.env.NEXT_PUBLIC_WORDPRESS_SITE_URL,
    VERSAI_API_URL: process.env.NEXT_PUBLIC_VERSAI_API_URL,
  },
}

module.exports = nextConfig
