export const SEO_CONFIG = {
  siteName: 'موسسه مهاجرتی ورسای',
  siteNameEn: 'Versai Immigration Institute',
  siteDescription: 'اقامت تمکن مالی و تحصیلی فرانسه - کانادا',
  siteDescriptionEn: 'Financial and Educational Residence for France - Canada',
  siteUrl: 'https://versai.ir',
  siteLogo: 'https://versai.ir/images/logo.png',
  defaultImage: 'https://versai.ir/images/og-image.jpg',
  twitterHandle: '@versai_immigration',
  facebookAppId: 'your-facebook-app-id',
  googleAnalyticsId: 'G-XXXXXXXXXX',
  googleTagManagerId: 'GTM-XXXXXXX',
  language: 'fa',
  alternateLanguage: 'en',
  country: 'IR',
  author: 'موسسه مهاجرتی ورسای',
  keywords: [
    'مهاجرت به فرانسه',
    'مهاجرت به کانادا',
    'اقامت فرانسه',
    'اقامت کانادا',
    'تمکن مالی',
    'تحصیل در فرانسه',
    'تحصیل در کانادا',
    'ویزا فرانسه',
    'ویزا کانادا',
    'موسسه مهاجرتی',
    'immigration france',
    'immigration canada',
    'france residence',
    'canada residence',
    'study france',
    'study canada'
  ],
  socialLinks: {
    instagram: 'https://instagram.com/versai_immigration',
    telegram: 'https://t.me/versai_immigration',
    whatsapp: 'https://wa.me/989123456789',
    linkedin: 'https://linkedin.com/company/versai-immigration'
  }
}

export const PAGE_SEO = {
  home: {
    title: 'موسسه مهاجرتی ورسای - اقامت تمکن مالی و تحصیلی فرانسه و کانادا',
    description: 'موسسه مهاجرتی ورسای ارائه دهنده خدمات مهاجرت به فرانسه و کانادا، اقامت تمکن مالی و تحصیلی با بالاترین کیفیت و تضمین',
    keywords: 'مهاجرت فرانسه، مهاجرت کانادا، اقامت تمکن مالی، تحصیل فرانسه، تحصیل کانادا'
  },
  services: {
    title: 'خدمات مهاجرتی - موسسه مهاجرتی ورسای',
    description: 'خدمات کامل مهاجرت به فرانسه و کانادا شامل اقامت تمکن مالی، تحصیلی و کاری',
    keywords: 'خدمات مهاجرتی، اقامت تمکن مالی، اقامت تحصیلی، مهاجرت کاری'
  },
  about: {
    title: 'درباره ما - موسسه مهاجرتی ورسای',
    description: 'آشنایی با موسسه مهاجرتی ورسای و تیم متخصص ما در زمینه مهاجرت',
    keywords: 'درباره ما، موسسه مهاجرتی، تیم متخصص'
  },
  contact: {
    title: 'تماس با ما - موسسه مهاجرتی ورسای',
    description: 'راه های تماس با موسسه مهاجرتی ورسای برای مشاوره رایگان',
    keywords: 'تماس با ما، مشاوره رایگان، پشتیبانی'
  }
}

export const STRUCTURED_DATA = {
  organization: {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "موسسه مهاجرتی ورسای",
    "alternateName": "Versai Immigration Institute",
    "url": "https://versai.ir",
    "logo": "https://versai.ir/images/logo.png",
    "description": "اقامت تمکن مالی و تحصیلی فرانسه - کانادا",
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "IR",
      "addressLocality": "تهران"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+98-21-12345678",
      "contactType": "customer service",
      "availableLanguage": ["Persian", "English"]
    },
    "sameAs": [
      "https://instagram.com/versai_immigration",
      "https://t.me/versai_immigration",
      "https://linkedin.com/company/versai-immigration"
    ]
  },
  website: {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "موسسه مهاجرتی ورسای",
    "url": "https://versai.ir",
    "description": "اقامت تمکن مالی و تحصیلی فرانسه - کانادا",
    "inLanguage": "fa-IR",
    "publisher": {
      "@type": "Organization",
      "name": "موسسه مهاجرتی ورسای"
    }
  },
  service: {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "خدمات مهاجرتی فرانسه و کانادا",
    "description": "ارائه خدمات مهاجرت، اقامت تمکن مالی و تحصیلی به فرانسه و کانادا",
    "provider": {
      "@type": "Organization",
      "name": "موسسه مهاجرتی ورسای"
    },
    "areaServed": ["فرانسه", "کانادا"],
    "serviceType": "مهاجرت و اقامت"
  }
}
