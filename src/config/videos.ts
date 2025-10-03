// Video Assets Configuration
export const VIDEO_CONFIG = {
  // Video file paths
  paths: {
    servicesIntro: '/videos/versai-services-intro.mp4',
    servicesIntroWebm: '/videos/versai-services-intro.webm',
    aboutVersai: '/videos/about-versai.mp4',
    successStories: '/videos/success-stories.mp4',
    testimonials: '/videos/testimonials.mp4'
  },
  
  // Poster images
  posters: {
    servicesIntro: '/images/home-page/video-poster-placeholder.svg',
    aboutVersai: '/images/home-page/video-poster-placeholder.svg',
    successStories: '/images/home-page/video-poster-placeholder.svg',
    testimonials: '/images/home-page/video-poster-placeholder.svg'
  },
  
  // Video settings
  settings: {
    defaultHeight: '500px',
    mobileHeight: '300px',
    autoplay: false,
    controls: true,
    loop: false,
    muted: false,
    preload: 'metadata' as const
  },
  
  // Supported formats
  formats: ['mp4', 'webm', 'ogg'],
  
  // Fallback messages
  fallbacks: {
    notSupported: 'مرورگر شما از پخش ویدیو پشتیبانی نمی‌کند.',
    loading: 'در حال بارگذاری ویدیو...',
    error: 'خطا در بارگذاری ویدیو'
  }
} as const

// Video metadata
export const VIDEO_METADATA = {
  servicesIntro: {
    title: 'معرفی خدمات ورسای',
    description: 'آشنایی با خدمات تخصصی موسسه مهاجرتی ورسای',
    duration: '3:45',
    category: 'services'
  },
  aboutVersai: {
    title: 'درباره ورسای',
    description: 'تاریخچه و تیم موسسه مهاجرتی ورسای',
    duration: '2:30',
    category: 'about'
  },
  successStories: {
    title: 'داستان‌های موفقیت',
    description: 'تجربیات موفق مشتریان ورسای',
    duration: '4:15',
    category: 'success'
  },
  testimonials: {
    title: 'نظرات مشتریان',
    description: 'نظرات و تجربیات مشتریان ورسای',
    duration: '3:20',
    category: 'testimonials'
  }
} as const

// Helper function to get video URL
export const getVideoUrl = (videoKey: keyof typeof VIDEO_CONFIG.paths): string => {
  return VIDEO_CONFIG.paths[videoKey]
}

// Helper function to get poster URL
export const getPosterUrl = (posterKey: keyof typeof VIDEO_CONFIG.posters): string => {
  return VIDEO_CONFIG.posters[posterKey]
}

// Helper function to get video metadata
export const getVideoMetadata = (videoKey: keyof typeof VIDEO_METADATA) => {
  return VIDEO_METADATA[videoKey]
}
