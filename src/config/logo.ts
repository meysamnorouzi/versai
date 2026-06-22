export const LOGO_CONFIG = {
  // Main logo paths (absolute — required for static export on nested routes)
  main: '/images/logo.png',
  home: '/images/logo.png',

  // Favicon paths
  favicon: '/images/logo.png',
  appleTouchIcon: '/images/logo.png',

  // Different sizes for different use cases
  sizes: {
    small: '/images/logo.png',
    medium: '/images/logo.png',
    large: '/images/logo.png',
    navigation: '/images/logo.png',
  },
  
  // Alt text for accessibility
  altText: {
    main: 'موسسه مهاجرتی ورسای - Versai Immigration Institute',
    navigation: 'ورسای - موسسه مهاجرتی',
    favicon: 'ورسای'
  },
  
  // Dimensions (update these based on actual logo dimensions)
  dimensions: {
    navigation: {
      width: 192,
      height: 64
    },
    favicon: {
      width: 32,
      height: 32
    }
  }
}

export const getLogoPath = (size: 'small' | 'medium' | 'large' | 'navigation' = 'medium') => {
  return LOGO_CONFIG.sizes[size]
}

export const getLogoAlt = (context: 'main' | 'navigation' | 'favicon' = 'main') => {
  return LOGO_CONFIG.altText[context]
}
