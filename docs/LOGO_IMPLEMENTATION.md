# Logo Implementation Guide

## Overview
This document outlines the comprehensive logo implementation for the Versai Immigration Institute website, including favicon, app icons, and component usage.

## Files Created/Updated

### 1. Logo Configuration
**File**: `src/config/logo.ts`
**Purpose**: Centralized logo configuration and utility functions

### 2. Logo Component
**File**: `src/components/ui/Logo.tsx`
**Purpose**: Reusable logo component with different sizes and contexts

### 3. HTML Updates
**File**: `index.html`
**Purpose**: Updated favicon and app icon references

### 4. Manifest File
**File**: `public/manifest.json`
**Purpose**: PWA manifest with app icons

## Logo Files Structure

```
public/
├── images/
│   ├── logo.png              # Main logo (used for favicon and app icons)
│   └── home/
│       └── logo.png          # Navigation logo (larger size for header)
```

## Implementation Details

### 1. Favicon Configuration
```html
<!-- Favicon and App Icons -->
<link rel="icon" type="image/png" href="/images/logo.png" />
<link rel="apple-touch-icon" href="/images/logo.png" />
<link rel="shortcut icon" href="/images/logo.png" />
<link rel="manifest" href="/manifest.json" />

<!-- Multiple favicon sizes for better compatibility -->
<link rel="icon" type="image/png" sizes="16x16" href="/images/logo.png" />
<link rel="icon" type="image/png" sizes="32x32" href="/images/logo.png" />
<link rel="icon" type="image/png" sizes="96x96" href="/images/logo.png" />
<link rel="icon" type="image/png" sizes="192x192" href="/images/logo.png" />
<link rel="icon" type="image/png" sizes="512x512" href="/images/logo.png" />
```

### 2. Logo Configuration
```typescript
export const LOGO_CONFIG = {
  // Main logo paths
  main: '/images/logo.png',
  home: '/images/home/logo.png',
  
  // Favicon paths
  favicon: '/images/logo.png',
  appleTouchIcon: '/images/logo.png',
  
  // Different sizes for different use cases
  sizes: {
    small: '/images/logo.png',      // 16x16, 32x32
    medium: '/images/logo.png',     // 96x96, 192x192
    large: '/images/logo.png',      // 512x512
    navigation: '/images/home/logo.png' // For navigation bar
  },
  
  // Alt text for accessibility
  altText: {
    main: 'موسسه مهاجرتی ورسای - Versai Immigration Institute',
    navigation: 'ورسای - موسسه مهاجرتی',
    favicon: 'ورسای'
  }
}
```

### 3. Logo Component Usage
```tsx
import Logo from '../components/ui/Logo'

// Basic usage
<Logo />

// With specific size and context
<Logo 
  size="navigation"
  context="navigation"
  className="w-48 h-16"
/>

// With text
<Logo 
  size="large"
  showText={true}
  className="flex-col"
/>

// Custom dimensions
<Logo 
  size="medium"
  width={100}
  height={50}
/>
```

## Component Props

### Logo Component Props
- **size**: `'small' | 'medium' | 'large' | 'navigation'` - Logo size variant
- **context**: `'main' | 'navigation' | 'favicon'` - Context for alt text
- **className**: `string` - Additional CSS classes
- **width**: `number` - Custom width (overrides size defaults)
- **height**: `number` - Custom height (overrides size defaults)
- **showText**: `boolean` - Whether to show text alongside logo

### Size Defaults
- **small**: 32x32px (favicon, small UI elements)
- **medium**: 64x64px (default size)
- **large**: 128x128px (hero sections, large displays)
- **navigation**: 192x64px (header navigation)

## PWA Manifest

### Manifest Configuration
```json
{
  "name": "موسسه مهاجرتی ورسای",
  "short_name": "ورسای",
  "description": "اقامت تمکن مالی و تحصیلی فرانسه - کانادا",
  "start_url": "/",
  "display": "standalone",
  "background_color": "#ffffff",
  "theme_color": "#1e40af",
  "orientation": "portrait",
  "icons": [
    {
      "src": "/images/logo.png",
      "sizes": "192x192",
      "type": "image/png",
      "purpose": "any maskable"
    },
    {
      "src": "/images/logo.png",
      "sizes": "512x512",
      "type": "image/png",
      "purpose": "any maskable"
    }
  ]
}
```

## SEO Integration

### Structured Data
The logo is properly integrated with SEO structured data:
```json
{
  "@type": "Organization",
  "name": "موسسه مهاجرتی ورسای",
  "logo": "https://versai.ir/images/logo.png"
}
```

### Open Graph
Logo is used in Open Graph meta tags:
```html
<meta property="og:image" content="https://versai.ir/images/logo.png" />
<meta property="twitter:image" content="https://versai.ir/images/logo.png" />
```

## Usage Examples

### 1. Navigation Header
```tsx
<Logo 
  size="navigation"
  context="navigation"
  className="w-48 h-16"
/>
```

### 2. Footer Logo
```tsx
<Logo 
  size="medium"
  context="main"
  showText={true}
  className="flex-col items-center"
/>
```

### 3. Mobile Menu
```tsx
<Logo 
  size="small"
  context="navigation"
  className="w-8 h-8"
/>
```

### 4. Hero Section
```tsx
<Logo 
  size="large"
  context="main"
  showText={true}
  className="flex-col items-center mb-8"
/>
```

## Accessibility Features

### Alt Text
- **Main context**: "موسسه مهاجرتی ورسای - Versai Immigration Institute"
- **Navigation context**: "ورسای - موسسه مهاجرتی"
- **Favicon context**: "ورسای"

### Loading Optimization
- **Lazy loading**: Images load only when needed
- **Object fit**: Maintains aspect ratio
- **Responsive**: Adapts to different screen sizes

## Browser Compatibility

### Favicon Support
- ✅ Chrome/Chromium
- ✅ Firefox
- ✅ Safari
- ✅ Edge
- ✅ Mobile browsers

### PWA Support
- ✅ Android Chrome
- ✅ iOS Safari
- ✅ Desktop browsers
- ✅ Progressive Web App features

## Performance Considerations

### Image Optimization
- **Single source**: Uses same logo file for all sizes
- **Lazy loading**: Images load when needed
- **Caching**: Proper cache headers for static assets
- **Compression**: Gzip compression for faster loading

### Loading Strategy
- **Critical path**: Favicon loads immediately
- **Deferred loading**: Other logos load as needed
- **Fallback**: Graceful degradation if images fail

## Maintenance

### Regular Tasks
1. **Logo updates**: Replace logo files when needed
2. **Size optimization**: Ensure logos are properly sized
3. **Accessibility**: Check alt text accuracy
4. **Performance**: Monitor loading times

### Testing
1. **Favicon display**: Check in different browsers
2. **PWA installation**: Test app icon display
3. **Responsive design**: Verify logo scaling
4. **Accessibility**: Test with screen readers

## Troubleshooting

### Common Issues

#### 1. Favicon Not Displaying
**Problem**: Favicon doesn't appear in browser tab
**Solution**: 
- Check file path is correct
- Clear browser cache
- Verify file permissions

#### 2. Logo Not Loading
**Problem**: Logo images don't display
**Solution**:
- Check image file exists
- Verify path in configuration
- Check network requests in dev tools

#### 3. PWA Icon Issues
**Problem**: App icon doesn't appear when installing PWA
**Solution**:
- Check manifest.json configuration
- Verify icon file sizes
- Test PWA installation

### Debug Steps
1. **Check file paths**: Verify all logo files exist
2. **Test in different browsers**: Ensure cross-browser compatibility
3. **Check console errors**: Look for 404 or loading errors
4. **Validate manifest**: Use PWA audit tools

## Future Enhancements

### Planned Features
- **Multiple logo variants**: Different styles for different contexts
- **SVG support**: Vector logos for better scaling
- **Dark mode logos**: Different logos for dark theme
- **Animated logos**: Subtle animations for engagement

### Performance Improvements
- **WebP format**: Modern image format support
- **Responsive images**: Different sizes for different screens
- **Preloading**: Critical logo preloading
- **CDN integration**: Global logo delivery

---

**Implementation Date**: January 2024  
**Status**: ✅ Complete  
**Version**: 1.0  
**Next Review**: February 2024
