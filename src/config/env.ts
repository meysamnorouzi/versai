export const config = {
  wordpressApiUrl:
    process.env.NEXT_PUBLIC_WORDPRESS_API_URL ||
    'https://admin.versai.fr/wp-json/wp/v2',
  versaiApiUrl:
    process.env.NEXT_PUBLIC_VERSAI_API_URL ||
    'https://admin.versai.fr/wp-json/versai/v1',
  wordpressSiteUrl:
    process.env.NEXT_PUBLIC_WORDPRESS_SITE_URL || 'https://admin.versai.fr',
  apiKey: process.env.NEXT_PUBLIC_WORDPRESS_API_KEY || '',
  nodeEnv: process.env.NODE_ENV || 'development',
  isDevelopment: process.env.NODE_ENV === 'development',
  isProduction: process.env.NODE_ENV === 'production',
}
