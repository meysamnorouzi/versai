/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_API_URL: string
  readonly VITE_WORDPRESS_URL: string
  readonly VITE_WORDPRESS_API_URL: string
  readonly VITE_API_KEY: string
  readonly VITE_GOOGLE_ANALYTICS_ID: string
  readonly VITE_GOOGLE_TAG_MANAGER_ID: string
  readonly VITE_FACEBOOK_APP_ID: string
  readonly VITE_TWITTER_HANDLE: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
