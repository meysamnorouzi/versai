# WordPress Integration Guide

## Overview
This guide explains how to connect your React frontend to WordPress APIs for the Versai Immigration Institute website.

## Prerequisites

### WordPress Requirements
- WordPress 5.0 or higher
- PHP 7.4 or higher
- REST API enabled
- CORS headers configured

### React Requirements
- Node.js 16 or higher
- React 18
- Axios for API calls

## Installation Steps

### 1. WordPress Plugin Installation

1. **Download the Versai API Plugin**
   - Copy the `wordpress-plugin/versai-api` folder to your WordPress plugins directory
   - Path: `/wp-content/plugins/versai-api/`

2. **Activate the Plugin**
   - Go to WordPress Admin → Plugins
   - Find "Versai API" and click "Activate"

3. **Configure Permalinks**
   - Go to Settings → Permalinks
   - Select "Post name" or "Custom Structure"
   - Save changes

### 2. Environment Configuration

1. **Create Environment File**
   ```bash
   cp env.example .env
   ```

2. **Update Environment Variables**
   ```env
   VITE_WORDPRESS_API_URL=https://your-wordpress-site.com/wp-json/wp/v2
   VITE_WORDPRESS_SITE_URL=https://your-wordpress-site.com
   VITE_WORDPRESS_API_KEY=your-api-key-here
   ```

### 3. CORS Configuration

Add this to your WordPress `wp-config.php`:
```php
// CORS Headers
add_action('rest_api_init', function() {
    remove_filter('rest_pre_serve_request', 'rest_send_cors_headers');
    add_filter('rest_pre_serve_request', function($value) {
        header('Access-Control-Allow-Origin: *');
        header('Access-Control-Allow-Methods: GET, POST, OPTIONS');
        header('Access-Control-Allow-Headers: Content-Type, Authorization');
        return $value;
    });
});
```

## API Endpoints

### Standard WordPress Endpoints
- `GET /wp-json/wp/v2/posts` - Get blog posts
- `GET /wp-json/wp/v2/pages` - Get pages
- `GET /wp-json/wp/v2/media` - Get media files
- `GET /wp-json/wp/v2/categories` - Get categories
- `GET /wp-json/wp/v2/tags` - Get tags

### Custom Versai Endpoints
- `GET /wp-json/versai/v1/services` - Get immigration services
- `GET /wp-json/versai/v1/success-stories` - Get success stories
- `GET /wp-json/versai/v1/faqs` - Get FAQs
- `GET /wp-json/versai/v1/testimonials` - Get testimonials
- `GET /wp-json/versai/v1/countries` - Get countries
- `GET /wp-json/versai/v1/visa-types` - Get visa types
- `POST /wp-json/versai/v1/consultation` - Submit consultation

## Usage Examples

### 1. Using WordPress Hooks

```tsx
import { useWordPressPosts, useVersaiData } from '../hooks/useWordPress'

const ServicesPage = () => {
  const { services, loading, error, fetchServices } = useVersaiData()
  
  useEffect(() => {
    fetchServices()
  }, [])
  
  if (loading) return <Loading />
  if (error) return <Error message={error} />
  
  return (
    <div>
      {services.map(service => (
        <ServiceCard key={service.id} service={service} />
      ))}
    </div>
  )
}
```

### 2. Using WordPress Components

```tsx
import WordPressPostList from '../components/wordpress/WordPressPostList'
import WordPressSearch from '../components/wordpress/WordPressSearch'

const BlogPage = () => {
  return (
    <div>
      <WordPressSearch />
      <WordPressPostList 
        perPage={10}
        showExcerpt={true}
        showFeaturedImage={true}
      />
    </div>
  )
}
```

### 3. Using WordPress Content Renderer

```tsx
import WordPressContent from '../components/wordpress/WordPressContent'

const PostPage = ({ post }) => {
  return (
    <WordPressContent
      post={post}
      showExcerpt={false}
      showFeaturedImage={true}
    />
  )
}
```

## Content Management

### 1. Services Management
- Go to WordPress Admin → Services
- Add new services with custom fields
- Set service type, visa type, country, duration, price
- Mark as featured and set priority

### 2. Success Stories Management
- Go to WordPress Admin → Success Stories
- Add client success stories
- Include visa type, country, client details
- Add processing time information

### 3. FAQ Management
- Go to WordPress Admin → FAQs
- Add questions and answers
- Organize by categories if needed

### 4. Testimonials Management
- Go to WordPress Admin → Testimonials
- Add customer testimonials
- Include client name, position, rating

## Custom Fields

### Service Fields
- `versai_service_type` - Type of service
- `versai_visa_type` - Visa type
- `versai_country` - Destination country
- `versai_duration` - Service duration
- `versai_price` - Service price
- `versai_featured` - Featured service
- `versai_priority` - Display priority

### Success Story Fields
- `versai_visa_type` - Visa type obtained
- `versai_country` - Destination country
- `versai_client_name` - Client name
- `versai_client_age` - Client age
- `versai_processing_time` - Processing time

## Error Handling

### 1. API Error Handling
```tsx
const { posts, loading, error, refetch } = useWordPressPosts()

if (error) {
  return (
    <div className="error">
      <p>خطا در بارگذاری مطالب: {error}</p>
      <button onClick={refetch}>تلاش مجدد</button>
    </div>
  )
}
```

### 2. Error Boundary
```tsx
import WordPressErrorBoundary from '../components/wordpress/WordPressErrorBoundary'

const App = () => {
  return (
    <WordPressErrorBoundary>
      <WordPressPostList />
    </WordPressErrorBoundary>
  )
}
```

## Performance Optimization

### 1. Caching
- Enable WordPress caching plugins
- Use CDN for media files
- Implement client-side caching

### 2. Image Optimization
- Use appropriate image sizes
- Implement lazy loading
- Use WebP format when possible

### 3. API Optimization
- Use pagination for large datasets
- Implement search and filtering
- Cache frequently accessed data

## Security Considerations

### 1. API Security
- Use HTTPS for all API calls
- Implement rate limiting
- Validate all input data
- Use authentication when needed

### 2. CORS Configuration
- Restrict allowed origins
- Use proper headers
- Validate requests

### 3. Data Validation
- Sanitize all input
- Validate data types
- Check permissions

## Troubleshooting

### Common Issues

#### 1. CORS Errors
**Problem**: CORS policy blocks API requests
**Solution**: 
- Check CORS configuration in WordPress
- Verify allowed origins
- Test with different browsers

#### 2. 404 Errors
**Problem**: API endpoints return 404
**Solution**:
- Check permalink settings
- Verify plugin activation
- Test endpoints directly

#### 3. Authentication Errors
**Problem**: API returns 401/403 errors
**Solution**:
- Check API credentials
- Verify user permissions
- Test with different authentication methods

#### 4. Data Not Loading
**Problem**: Components show loading state indefinitely
**Solution**:
- Check network requests
- Verify API responses
- Check error handling

### Debug Steps

1. **Check Network Tab**
   - Open browser dev tools
   - Check Network tab for failed requests
   - Verify request/response data

2. **Test API Endpoints**
   - Use Postman or curl
   - Test endpoints directly
   - Verify response format

3. **Check WordPress Logs**
   - Enable WordPress debug mode
   - Check error logs
   - Verify plugin functionality

4. **Validate Data**
   - Check data structure
   - Verify required fields
   - Test with sample data

## Best Practices

### 1. Content Management
- Use consistent naming conventions
- Organize content with categories
- Use featured images
- Write SEO-friendly content

### 2. API Usage
- Implement proper error handling
- Use loading states
- Cache data when appropriate
- Optimize requests

### 3. Performance
- Use pagination for large lists
- Implement search and filtering
- Optimize images
- Use CDN for static assets

### 4. Security
- Validate all input
- Use HTTPS
- Implement rate limiting
- Regular security updates

## Support

For issues with WordPress integration:
1. Check this guide first
2. Review WordPress logs
3. Test API endpoints
4. Contact support if needed

---

**Last Updated**: January 2024  
**Version**: 1.0  
**Status**: ✅ Complete
