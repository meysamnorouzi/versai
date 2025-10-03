// Environment configuration
export const config = {
  wordpressApiUrl: import.meta.env.VITE_WORDPRESS_API_URL || 'https://your-wordpress-site.com/wp-json/wp/v2',
  wordpressSiteUrl: import.meta.env.VITE_WORDPRESS_SITE_URL || 'https://your-wordpress-site.com',
  apiKey: import.meta.env.VITE_WORDPRESS_API_KEY || '',
  nodeEnv: import.meta.env.VITE_NODE_ENV || 'development',
  isDevelopment: import.meta.env.VITE_NODE_ENV === 'development',
  isProduction: import.meta.env.VITE_NODE_ENV === 'production',
}
