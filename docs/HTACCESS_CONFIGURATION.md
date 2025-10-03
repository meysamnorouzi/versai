# .htaccess Configuration Guide

## Overview
This document explains the `.htaccess` configuration for the Versai Immigration Institute website to handle URL routing and prevent 404 errors in the React Single Page Application (SPA).

## Files Created

### 1. Root `.htaccess` (Main Configuration)
**Location**: `/htaccess` (root directory)

**Purpose**: 
- Handles main routing and redirects
- Manages security headers
- Configures compression and caching
- Redirects all requests to the public directory

### 2. Public `.htaccess` (React App Configuration)
**Location**: `/public/.htaccess`

**Purpose**:
- Handles React Router routing
- Prevents 404 errors on direct URL access
- Manages static file serving
- Configures error pages

## Key Features

### URL Routing
```apache
# Handle React Router routes
RewriteCond %{REQUEST_FILENAME} !-f
RewriteCond %{REQUEST_FILENAME} !-d
RewriteRule . /index.html [L]
```

This configuration ensures that:
- All existing files and directories are served normally
- Any non-existent routes are redirected to `index.html`
- React Router can handle client-side routing
- No 404 errors occur when users directly enter URLs

### Security Headers
```apache
# Security Headers
<IfModule mod_headers.c>
    Header always append X-Frame-Options SAMEORIGIN
    Header always set X-Content-Type-Options nosniff
    Header always set X-XSS-Protection "1; mode=block"
    Header always set Referrer-Policy "strict-origin-when-cross-origin"
</IfModule>
```

### Compression
```apache
# Compression
<IfModule mod_deflate.c>
    AddOutputFilterByType DEFLATE application/javascript
    AddOutputFilterByType DEFLATE text/css
    AddOutputFilterByType DEFLATE text/html
    # ... more file types
</IfModule>
```

### Browser Caching
```apache
# Browser Caching
<IfModule mod_expires.c>
    ExpiresActive on
    ExpiresByType image/jpg "access plus 1 month"
    ExpiresByType text/css "access plus 1 month"
    ExpiresByType application/javascript "access plus 1 month"
    # ... more file types
</IfModule>
```

## Configuration Details

### 1. React Router Support
The `.htaccess` files are configured to support React Router by:
- Redirecting all non-file requests to `index.html`
- Allowing React Router to handle client-side routing
- Preventing 404 errors on direct URL access

### 2. Security Configuration
- **X-Frame-Options**: Prevents clickjacking attacks
- **X-Content-Type-Options**: Prevents MIME type sniffing
- **X-XSS-Protection**: Enables XSS protection
- **Referrer-Policy**: Controls referrer information
- **Content-Security-Policy**: Restricts resource loading

### 3. Performance Optimization
- **Gzip Compression**: Reduces file sizes for faster loading
- **Browser Caching**: Caches static assets for better performance
- **Cache Control**: Different caching strategies for different file types

### 4. File Protection
- Prevents access to sensitive files (`.htaccess`, `.env`, etc.)
- Blocks access to version control directories (`.git`, `.svn`)
- Protects source files from direct access

## URL Examples

### Working URLs
- `https://versai.ir/` → Serves `index.html`
- `https://versai.ir/services` → Serves `index.html` (React Router handles routing)
- `https://versai.ir/about` → Serves `index.html` (React Router handles routing)
- `https://versai.ir/dashboard` → Serves `index.html` (React Router handles routing)

### Static Files
- `https://versai.ir/images/logo.png` → Serves the actual image file
- `https://versai.ir/css/style.css` → Serves the actual CSS file
- `https://versai.ir/js/app.js` → Serves the actual JavaScript file

## Testing the Configuration

### 1. Test Direct URL Access
1. Open your browser
2. Navigate to `https://versai.ir/services` directly
3. The page should load without 404 errors
4. React Router should handle the routing

### 2. Test Static Files
1. Navigate to `https://versai.ir/images/logo.png`
2. The image should load directly
3. No redirect to `index.html` should occur

### 3. Test Error Handling
1. Navigate to a non-existent route like `https://versai.ir/nonexistent`
2. The page should load `index.html`
3. React Router should handle the 404 page

## Troubleshooting

### Common Issues

#### 1. 404 Errors Still Occurring
**Problem**: Direct URL access still results in 404 errors
**Solution**: 
- Check if `.htaccess` files are in the correct locations
- Ensure Apache `mod_rewrite` is enabled
- Verify file permissions

#### 2. Static Files Not Loading
**Problem**: Images, CSS, or JS files not loading
**Solution**:
- Check if the files exist in the correct directories
- Verify file permissions
- Check browser console for errors

#### 3. Infinite Redirects
**Problem**: Page keeps redirecting in a loop
**Solution**:
- Check the rewrite rules for conflicts
- Ensure the redirect target exists
- Verify the file structure

### Debugging Steps

1. **Check Apache Error Logs**
   ```bash
   tail -f /var/log/apache2/error.log
   ```

2. **Test Rewrite Rules**
   ```bash
   # Test if mod_rewrite is working
   php -r "echo 'mod_rewrite test';"
   ```

3. **Verify File Permissions**
   ```bash
   chmod 644 .htaccess
   chmod 755 public/
   ```

## Production Considerations

### 1. HTTPS Configuration
Uncomment the HTTPS redirect lines when SSL certificate is installed:
```apache
# Force HTTPS
RewriteCond %{HTTPS} off
RewriteRule ^(.*)$ https://%{HTTP_HOST}%{REQUEST_URI} [L,R=301]
```

### 2. WWW Configuration
Uncomment the www removal lines if needed:
```apache
# Remove www
RewriteCond %{HTTP_HOST} ^www\.(.*)$ [NC]
RewriteRule ^(.*)$ https://%1/$1 [R=301,L]
```

### 3. HSTS Configuration
Uncomment the HSTS header when HTTPS is enabled:
```apache
# HSTS
Header always set Strict-Transport-Security "max-age=31536000; includeSubDomains; preload"
```

## Maintenance

### Regular Tasks
1. **Monitor Error Logs**: Check for any routing issues
2. **Test URL Access**: Ensure all routes work correctly
3. **Update Security Headers**: Keep security configurations current
4. **Optimize Caching**: Adjust cache settings based on usage

### Performance Monitoring
1. **Page Load Times**: Monitor with tools like GTmetrix
2. **Cache Hit Rates**: Check server logs for cache effectiveness
3. **Compression Ratios**: Monitor file size reductions

## Support

For issues with the `.htaccess` configuration:
1. Check Apache error logs
2. Verify mod_rewrite is enabled
3. Test with a simple rewrite rule first
4. Consult Apache documentation for specific directives

---

**Configuration Date**: January 2024  
**Version**: 1.0  
**Status**: ✅ Complete
