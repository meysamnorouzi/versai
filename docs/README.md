# Versai Immigration Website

A modern React + TypeScript website for Versai Immigration Institute, built with Vite, Tailwind CSS, and integrated with WordPress headless CMS.

## Features

- 🚀 **Modern Stack**: React 18 + TypeScript + Vite
- 🎨 **Beautiful UI**: Tailwind CSS with RTL support for Farsi
- 📱 **Responsive Design**: Mobile-first approach
- 🌐 **RTL Support**: Right-to-left layout for Farsi content
- 🔌 **WordPress Integration**: Headless CMS for content management
- 🧩 **Component Library**: Reusable UI components
- 🎯 **SEO Optimized**: Meta tags and structured data

## Project Structure

```
src/
├── components/          # Reusable components
│   ├── ui/             # Basic UI components (Button, Card, Input, etc.)
│   ├── layout/         # Layout components (Header, Footer, Layout)
│   └── home/           # Homepage specific components
├── pages/              # Page components
├── services/           # API services (WordPress integration)
├── types/              # TypeScript type definitions
├── utils/              # Utility functions
└── assets/             # Static assets
```

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd versai-website
```

2. Install dependencies:
```bash
npm install
```

3. Create environment file:
```bash
cp .env.example .env
```

4. Configure WordPress API URL in `.env`:
```env
VITE_WORDPRESS_API_URL=https://your-wordpress-site.com/wp-json/wp/v2
VITE_WORDPRESS_SITE_URL=https://your-wordpress-site.com
```

5. Start development server:
```bash
npm run dev
```

6. Open [http://localhost:3000](http://localhost:3000) in your browser.

## WordPress Integration

This project is designed to work with WordPress as a headless CMS. The following endpoints are expected:

### Posts API
- `GET /wp-json/wp/v2/posts` - Get all posts
- `GET /wp-json/wp/v2/posts/{id}` - Get post by ID
- `GET /wp-json/wp/v2/posts?slug={slug}` - Get post by slug

### Media API
- `GET /wp-json/wp/v2/media/{id}` - Get media by ID

### Categories API
- `GET /wp-json/wp/v2/categories` - Get all categories

### Custom Versai Endpoints
- `GET /wp-json/versai/v1/services` - Get services
- `GET /wp-json/versai/v1/success-stories` - Get success stories
- `GET /wp-json/versai/v1/faqs` - Get FAQs
- `POST /wp-json/versai/v1/consultation` - Submit consultation request

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## Technologies Used

- **React 18** - UI library
- **TypeScript** - Type safety
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **React Router** - Client-side routing
- **Axios** - HTTP client
- **Lucide React** - Icon library

## RTL Support

The website is fully configured for RTL (Right-to-Left) layout for Farsi content:

- HTML `dir="rtl"` attribute
- Tailwind CSS RTL utilities
- Farsi font (IRANYekanX) integration
- Proper text alignment and spacing

## Component Library

The project includes a comprehensive component library extracted from Figma designs:

### UI Components
- `Button` - Various button styles and sizes
- `Card` - Content cards with different variants
- `Input` - Form inputs with validation
- `Dropdown` - Dropdown menus

### Layout Components
- `Header` - Navigation header with mobile menu
- `Footer` - Site footer with links and contact info
- `Layout` - Main layout wrapper

### Homepage Components
- `HeroSection` - Main hero section with CTA
- `ServicesSection` - Services grid
- `AboutSection` - About us section
- `ConsultationForm` - Contact form

## Customization

### Colors
The project uses a custom color palette defined in `tailwind.config.js`:

- `versai-red-*` - Primary red colors
- `versai-blue-*` - Blue accent colors
- `versai-cyan-*` - Cyan accent colors

### Fonts
- Primary: IRANYekanX (Farsi)
- Fallback: Inter (English)

## Deployment

1. Build the project:
```bash
npm run build
```

2. Deploy the `dist` folder to your hosting provider.

3. Configure your WordPress site to allow CORS requests from your domain.

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is proprietary and confidential.
