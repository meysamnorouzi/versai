// Environment configuration
export const config = {
  wordpressApiUrl: process.env.NEXT_PUBLIC_WORDPRESS_API_URL || 'https://your-wordpress-site.com/wp-json/wp/v2',
  wordpressSiteUrl: process.env.NEXT_PUBLIC_WORDPRESS_SITE_URL || 'https://your-wordpress-site.com',
  apiKey: process.env.NEXT_PUBLIC_WORDPRESS_API_KEY || '',
  nodeEnv: process.env.NODE_ENV || 'development',
  isDevelopment: process.env.NODE_ENV === 'development',
  isProduction: process.env.NODE_ENV === 'production',
}
