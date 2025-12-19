# Video Assets Directory

This directory contains video files for the Versai website.

## Required Videos

### 1. Services Introduction Video
- **File**: `versai-services-intro.mp4`
- **Format**: MP4 (H.264)
- **Resolution**: 1920x1080 (Full HD)
- **Duration**: 3-5 minutes
- **Content**: Introduction to Versai services
- **Poster**: `/images/home-page/video-poster.jpg`

### 2. About Versai Video
- **File**: `about-versai.mp4`
- **Format**: MP4 (H.264)
- **Resolution**: 1920x1080 (Full HD)
- **Duration**: 2-3 minutes
- **Content**: Company history and team introduction

### 3. Success Stories Video
- **File**: `success-stories.mp4`
- **Format**: MP4 (H.264)
- **Resolution**: 1920x1080 (Full HD)
- **Duration**: 3-4 minutes
- **Content**: Client success stories and testimonials

### 4. Testimonials Video
- **File**: `testimonials.mp4`
- **Format**: MP4 (H.264)
- **Resolution**: 1920x1080 (Full HD)
- **Duration**: 2-3 minutes
- **Content**: Customer testimonials and reviews

## Video Specifications

- **Primary Format**: MP4 (H.264)
- **Secondary Format**: WebM (for better browser support)
- **Aspect Ratio**: 16:9
- **Frame Rate**: 30fps
- **Audio**: Stereo, 44.1kHz
- **Bitrate**: 2-5 Mbps (for web optimization)

## Optimization Tips

1. **Compress videos** for web delivery
2. **Create multiple resolutions** (1080p, 720p, 480p)
3. **Add captions/subtitles** for accessibility
4. **Use poster images** for better loading experience
5. **Consider lazy loading** for better performance

## File Structure

```
public/
├── videos/
│   ├── versai-services-intro.mp4
│   ├── versai-services-intro.webm
│   ├── about-versai.mp4
│   ├── success-stories.mp4
│   └── testimonials.mp4
└── images/
    └── home-page/
        ├── video-poster.jpg
        ├── about-video-poster.jpg
        ├── success-video-poster.jpg
        └── testimonials-video-poster.jpg
```

## Usage

Videos are automatically served from the `/videos/` path and can be referenced in components using the video configuration.

Example:
```typescript
import { getVideoUrl, getPosterUrl } from '../config/videos'

const videoSrc = getVideoUrl('servicesIntro')
const posterSrc = getPosterUrl('servicesIntro')
```
