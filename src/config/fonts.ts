// Font Configuration for Versai Immigration Institute
export const FONT_CONFIG = {
  // Primary font family (Persian)
  primary: {
    family: 'IRANYekanX',
    fallback: ['Inter', 'system-ui', 'sans-serif'],
    weights: {
      light: 300,
      normal: 400,
      medium: 500,
      semibold: 600,
      bold: 700
    }
  },
  
  // Secondary font family (English)
  secondary: {
    family: 'Inter',
    fallback: ['system-ui', 'sans-serif'],
    weights: {
      light: 300,
      normal: 400,
      medium: 500,
      semibold: 600,
      bold: 700
    }
  },
  
  // Font files mapping
  files: {
    'IRANYekanX-Light': {
      woff2: '/fonts/IRANYekanX-Light.woff2',
      woff: '/fonts/IRANYekanX-Light.woff',
      weight: 300,
      style: 'normal'
    },
    'IRANYekanX-Regular': {
      woff2: '/fonts/IRANYekanX-Regular.woff2',
      woff: '/fonts/IRANYekanX-Regular.woff',
      weight: 400,
      style: 'normal'
    },
    'IRANYekanX-Bold': {
      woff2: '/fonts/IRANYekanX-Bold.woff2',
      woff: '/fonts/IRANYekanX-Bold.woff',
      weight: 700,
      style: 'normal'
    }
  },
  
  // Font usage guidelines
  usage: {
    // Persian text
    persian: {
      primary: 'IRANYekanX',
      weights: ['light', 'normal', 'bold'],
      sizes: {
        xs: '0.75rem',    // 12px
        sm: '0.875rem',   // 14px
        base: '1rem',     // 16px
        lg: '1.125rem',   // 18px
        xl: '1.25rem',    // 20px
        '2xl': '1.5rem',  // 24px
        '3xl': '1.875rem', // 30px
        '4xl': '2.25rem', // 36px
        '5xl': '3rem',    // 48px
        '6xl': '3.75rem'  // 60px
      }
    },
    
    // English text
    english: {
      primary: 'Inter',
      weights: ['light', 'normal', 'medium', 'semibold', 'bold'],
      sizes: {
        xs: '0.75rem',    // 12px
        sm: '0.875rem',   // 14px
        base: '1rem',     // 16px
        lg: '1.125rem',   // 18px
        xl: '1.25rem',    // 20px
        '2xl': '1.5rem',  // 24px
        '3xl': '1.875rem', // 30px
        '4xl': '2.25rem', // 36px
        '5xl': '3rem',    // 48px
        '6xl': '3.75rem'  // 60px
      }
    }
  }
}

// Font utility functions
export const getFontFamily = (type: 'primary' | 'secondary' = 'primary'): string => {
  const config = FONT_CONFIG[type]
  return `${config.family}, ${config.fallback.join(', ')}`
}

export const getFontWeight = (weight: keyof typeof FONT_CONFIG.primary.weights): number => {
  return FONT_CONFIG.primary.weights[weight]
}

export const getFontSize = (size: keyof typeof FONT_CONFIG.usage.persian.sizes): string => {
  return FONT_CONFIG.usage.persian.sizes[size]
}

// CSS classes for common font combinations
export const FONT_CLASSES = {
  // Persian text classes
  persian: {
    light: 'font-primary font-light',
    normal: 'font-primary font-normal',
    bold: 'font-primary font-bold',
    heading: 'font-primary font-bold text-2xl',
    subheading: 'font-primary font-semibold text-xl',
    body: 'font-primary font-normal text-base',
    caption: 'font-primary font-normal text-sm',
    small: 'font-primary font-normal text-xs'
  },
  
  // English text classes
  english: {
    light: 'font-secondary font-light',
    normal: 'font-secondary font-normal',
    medium: 'font-secondary font-medium',
    semibold: 'font-secondary font-semibold',
    bold: 'font-secondary font-bold',
    heading: 'font-secondary font-bold text-2xl',
    subheading: 'font-secondary font-semibold text-xl',
    body: 'font-secondary font-normal text-base',
    caption: 'font-secondary font-normal text-sm',
    small: 'font-secondary font-normal text-xs'
  },
  
  // Mixed language classes
  mixed: {
    primary: 'font-primary',
    secondary: 'font-secondary',
    heading: 'font-primary font-bold',
    subheading: 'font-primary font-semibold',
    body: 'font-primary font-normal',
    caption: 'font-primary font-normal text-sm'
  }
}

// Font loading optimization
export const preloadFonts = () => {
  const fontFiles = Object.values(FONT_CONFIG.files)
  
  fontFiles.forEach(font => {
    // Preload WOFF2 files for better performance
    const link = document.createElement('link')
    link.rel = 'preload'
    link.href = font.woff2
    link.as = 'font'
    link.type = 'font/woff2'
    link.crossOrigin = 'anonymous'
    document.head.appendChild(link)
  })
}

// Font fallback detection
export const detectFontSupport = (): boolean => {
  const canvas = document.createElement('canvas')
  const context = canvas.getContext('2d')
  
  if (!context) return false
  
  // Test IRANYekanX font
  context.font = '16px IRANYekanX'
  const iranYekanWidth = context.measureText('تست').width
  
  context.font = '16px sans-serif'
  const fallbackWidth = context.measureText('تست').width
  
  return iranYekanWidth !== fallbackWidth
}

// Font loading status
export const getFontLoadingStatus = (): Promise<boolean> => {
  return new Promise((resolve) => {
    if ('fonts' in document) {
      document.fonts.ready.then(() => {
        resolve(true)
      })
    } else {
      // Fallback for older browsers
      setTimeout(() => resolve(true), 1000)
    }
  })
}
