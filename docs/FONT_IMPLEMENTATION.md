# Font Implementation Guide

## Overview
This guide explains the comprehensive font implementation for the Versai Immigration Institute website using local IRANYekanX fonts.

## Font Files Structure

```
public/
└── fonts/
    ├── IRANYekanX-Light.woff2
    ├── IRANYekanX-Light.woff
    ├── IRANYekanX-Regular.woff2
    ├── IRANYekanX-Regular.woff
    ├── IRANYekanX-Bold.woff2
    └── IRANYekanX-Bold.woff
```

## Font Configuration

### 1. HTML Font Declarations
The fonts are declared in `index.html` with proper fallbacks:

```html
<style>
  /* IRANYekanX Font Family - Local Files */
  @font-face {
    font-family: 'IRANYekanX';
    src: url('/fonts/IRANYekanX-Regular.woff2') format('woff2'),
         url('/fonts/IRANYekanX-Regular.woff') format('woff');
    font-weight: 400;
    font-style: normal;
    font-display: swap;
  }
  
  @font-face {
    font-family: 'IRANYekanX';
    src: url('/fonts/IRANYekanX-Light.woff2') format('woff2'),
         url('/fonts/IRANYekanX-Light.woff') format('woff');
    font-weight: 300;
    font-style: normal;
    font-display: swap;
  }
  
  @font-face {
    font-family: 'IRANYekanX';
    src: url('/fonts/IRANYekanX-Bold.woff2') format('woff2'),
         url('/fonts/IRANYekanX-Bold.woff') format('woff');
    font-weight: 700;
    font-style: normal;
    font-display: swap;
  }
</style>
```

### 2. Tailwind Configuration
Updated `tailwind.config.js` with comprehensive font settings:

```javascript
fontFamily: {
  'sans': ['IRANYekanX', 'Inter', 'system-ui', 'sans-serif'],
  'iran-yekan': ['IRANYekanX', 'sans-serif'],
  'inter': ['Inter', 'system-ui', 'sans-serif'],
  'primary': ['IRANYekanX', 'sans-serif'],
  'secondary': ['Inter', 'system-ui', 'sans-serif'],
},
fontWeight: {
  'light': '300',
  'normal': '400',
  'medium': '500',
  'semibold': '600',
  'bold': '700',
}
```

### 3. CSS Configuration
Updated `src/index.css` with optimized font settings:

```css
html {
  font-family: 'IRANYekanX', 'Inter', system-ui, sans-serif;
  font-feature-settings: 'kern' 1, 'liga' 1, 'calt' 1;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

body {
  font-family: 'IRANYekanX', 'Inter', system-ui, sans-serif;
  font-weight: 400;
  line-height: 1.6;
}
```

## Font Usage

### 1. CSS Classes

#### Font Family Classes
```css
.font-persian     /* IRANYekanX for Persian text */
.font-english     /* Inter for English text */
.font-mixed       /* Both fonts with fallbacks */
```

#### Typography Classes
```css
.text-persian     /* Persian text with RTL direction */
.text-english     /* English text with LTR direction */
.text-mixed       /* Mixed text with RTL direction */
```

#### Heading Classes
```css
.heading-primary    /* Main headings */
.heading-secondary  /* Section headings */
.heading-tertiary   /* Subsection headings */
```

#### Body Text Classes
```css
.body-text         /* Regular body text */
.body-text-large   /* Large body text */
.body-text-small   /* Small body text */
```

#### Utility Classes
```css
.caption           /* Caption text */
.label             /* Form labels */
```

### 2. Tailwind Classes

#### Font Family
```html
<div class="font-primary">Persian Text</div>
<div class="font-secondary">English Text</div>
<div class="font-sans">Default Font</div>
```

#### Font Weight
```html
<div class="font-light">Light Text</div>
<div class="font-normal">Normal Text</div>
<div class="font-medium">Medium Text</div>
<div class="font-semibold">Semibold Text</div>
<div class="font-bold">Bold Text</div>
```

#### Combined Classes
```html
<h1 class="font-primary font-bold text-3xl">Main Title</h1>
<p class="font-persian font-normal text-base">Persian Paragraph</p>
<span class="font-english font-medium text-sm">English Label</span>
```

### 3. React Component Usage

#### Using Font Configuration
```tsx
import { getFontFamily, FONT_CLASSES } from '../config/fonts'

const MyComponent = () => {
  return (
    <div>
      <h1 className={FONT_CLASSES.persian.heading}>
        عنوان اصلی
      </h1>
      <p className={FONT_CLASSES.persian.body}>
        متن پاراگراف به فارسی
      </p>
      <span className={FONT_CLASSES.english.caption}>
        English caption
      </span>
    </div>
  )
}
```

#### Using FontLoader Component
```tsx
import FontLoader from '../components/ui/FontLoader'

const App = () => {
  return (
    <FontLoader>
      <div>Your app content</div>
    </FontLoader>
  )
}
```

## Font Optimization

### 1. Font Loading Strategy
- **Preloading**: Fonts are preloaded for better performance
- **Font Display Swap**: Prevents invisible text during font load
- **Fallback Fonts**: System fonts as fallbacks
- **WOFF2 Priority**: Modern format loaded first

### 2. Performance Features
- **Font Detection**: Checks if fonts are supported
- **Loading States**: Shows loading indicator while fonts load
- **Error Handling**: Graceful fallback if fonts fail to load
- **Caching**: Fonts are cached by the browser

### 3. Font Loading Component
The `FontLoader` component provides:
- Automatic font preloading
- Loading state management
- Font support detection
- Error handling and fallbacks

## Typography Guidelines

### 1. Persian Text
- **Primary Font**: IRANYekanX
- **Direction**: RTL (right-to-left)
- **Alignment**: Right-aligned
- **Weights**: Light (300), Normal (400), Bold (700)

### 2. English Text
- **Primary Font**: Inter
- **Direction**: LTR (left-to-right)
- **Alignment**: Left-aligned
- **Weights**: Light (300), Normal (400), Medium (500), Semibold (600), Bold (700)

### 3. Mixed Content
- **Primary Font**: IRANYekanX
- **Direction**: RTL (right-to-left)
- **Alignment**: Right-aligned
- **Fallback**: Inter for English words

## Font Sizes

### Standard Sizes
```css
text-xs    /* 12px */
text-sm    /* 14px */
text-base  /* 16px */
text-lg    /* 18px */
text-xl    /* 20px */
text-2xl   /* 24px */
text-3xl   /* 30px */
text-4xl   /* 36px */
text-5xl   /* 48px */
text-6xl   /* 60px */
```

### Custom Sizes
```css
.heading-primary    /* 3xl - 30px */
.heading-secondary  /* 2xl - 24px */
.heading-tertiary   /* xl - 20px */
.body-text          /* base - 16px */
.body-text-large    /* lg - 18px */
.body-text-small    /* sm - 14px */
.caption            /* xs - 12px */
```

## Browser Support

### Supported Browsers
- ✅ Chrome 60+
- ✅ Firefox 55+
- ✅ Safari 11+
- ✅ Edge 79+
- ✅ Mobile browsers

### Font Format Support
- **WOFF2**: Modern browsers (preferred)
- **WOFF**: Older browsers (fallback)
- **System Fonts**: Ultimate fallback

## Performance Metrics

### Font Loading Times
- **WOFF2**: ~50-100ms
- **WOFF**: ~100-200ms
- **System Fonts**: ~0ms (already loaded)

### Optimization Benefits
- **Faster Loading**: Local fonts load faster than CDN
- **Better Caching**: Fonts cached by browser
- **Reduced Dependencies**: No external font requests
- **Improved Privacy**: No data sent to external services

## Troubleshooting

### Common Issues

#### 1. Fonts Not Loading
**Problem**: Text appears in fallback fonts
**Solutions**:
- Check font file paths
- Verify file permissions
- Check browser console for errors
- Test with different browsers

#### 2. Font Display Issues
**Problem**: Text appears invisible during load
**Solutions**:
- Check `font-display: swap` is set
- Verify fallback fonts are available
- Test loading performance

#### 3. RTL/LTR Issues
**Problem**: Text direction is incorrect
**Solutions**:
- Check `direction: rtl` is set
- Verify `text-align: right` for Persian
- Test with mixed content

### Debug Steps

1. **Check Font Loading**
   ```javascript
   // In browser console
   document.fonts.ready.then(() => {
     console.log('Fonts loaded')
   })
   ```

2. **Verify Font Support**
   ```javascript
   // Check if IRANYekanX is loaded
   const canvas = document.createElement('canvas')
   const context = canvas.getContext('2d')
   context.font = '16px IRANYekanX'
   console.log(context.measureText('تست').width)
   ```

3. **Test Font Weights**
   ```css
   /* Test different weights */
   .test-light { font-weight: 300; }
   .test-normal { font-weight: 400; }
   .test-bold { font-weight: 700; }
   ```

## Best Practices

### 1. Font Usage
- Use IRANYekanX for all Persian text
- Use Inter for English text
- Apply appropriate font weights
- Maintain consistent typography

### 2. Performance
- Preload critical fonts
- Use font-display: swap
- Provide fallback fonts
- Monitor loading performance

### 3. Accessibility
- Ensure sufficient contrast
- Use appropriate font sizes
- Maintain readable line heights
- Test with screen readers

### 4. Maintenance
- Keep font files updated
- Monitor loading performance
- Test across browsers
- Optimize file sizes

## Future Enhancements

### Planned Features
- **Variable Fonts**: Support for variable font weights
- **Font Subsetting**: Reduce file sizes
- **Advanced Loading**: More sophisticated loading strategies
- **Font Analytics**: Monitor font usage and performance

### Performance Improvements
- **Font Compression**: Further optimize file sizes
- **Critical Fonts**: Load only essential fonts initially
- **Font Preloading**: More aggressive preloading
- **CDN Integration**: Use CDN for font delivery

---

**Implementation Date**: January 2024  
**Status**: ✅ Complete  
**Version**: 1.0  
**Next Review**: February 2024
