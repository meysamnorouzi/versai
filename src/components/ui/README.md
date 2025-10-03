# Reusable UI Components

## FAQSection Component

A reusable FAQ (Frequently Asked Questions) component with accordion functionality.

### Usage

```tsx
import FAQSection from '../components/ui/FAQSection'

const faqItems = [
  {
    question: 'سوال اول چیست؟',
    answer: 'پاسخ سوال اول این است که...'
  },
  {
    question: 'سوال دوم چیست؟',
    answer: 'پاسخ سوال دوم این است که...'
  }
]

<FAQSection 
  faqItems={faqItems}
  title="سوالات متداول"
  className="py-20"
/>
```

### Props

- `faqItems`: Array of FAQ items with question and answer
- `title`: Optional title for the section (default: "سوالات متداول")
- `className`: Optional additional CSS classes

## RelatedArticlesSection Component

A reusable component for displaying related articles with image cards.

### Usage

```tsx
import RelatedArticlesSection from '../components/ui/RelatedArticlesSection'

const articles = [
  {
    title: 'عنوان مقاله اول',
    image: '/path/to/image1.jpg',
    link: '/article/1'
  },
  {
    title: 'عنوان مقاله دوم',
    image: '/path/to/image2.jpg',
    link: '/article/2'
  }
]

<RelatedArticlesSection 
  articles={articles}
  title="مقالات مرتبط"
  showViewAll={true}
  viewAllLink="/articles"
  className="py-16"
/>
```

### Props

- `articles`: Array of article objects with title, image, and link
- `title`: Optional title for the section (default: "مقالات مرتبط")
- `showViewAll`: Whether to show "View All" button (default: true)
- `viewAllLink`: Link for the "View All" button (default: "/articles")
- `className`: Optional additional CSS classes

## Features

- **Responsive Design**: Both components are fully responsive
- **Accessibility**: Proper ARIA attributes and keyboard navigation
- **Smooth Animations**: CSS transitions for better user experience
- **TypeScript Support**: Full type safety with TypeScript interfaces
- **Customizable**: Flexible props for different use cases
- **RTL Support**: Optimized for right-to-left languages like Persian
