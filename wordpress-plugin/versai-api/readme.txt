=== Versai API ===
Contributors: versai-team
Tags: api, rest, immigration, services
Requires at least: 5.0
Tested up to: 6.4
Requires PHP: 7.4
Stable tag: 1.0.0
License: GPLv2 or later
License URI: https://www.gnu.org/licenses/gpl-2.0.html

Custom API endpoints for Versai Immigration Institute website.

== Description ==

Versai API is a WordPress plugin that provides custom REST API endpoints for the Versai Immigration Institute website. It allows the React frontend to fetch and manage immigration services, success stories, FAQs, testimonials, and other content.

== Features ==

* Custom post types for services, success stories, FAQs, testimonials, and blog articles
* Custom taxonomies for countries and visa types
* REST API endpoints for all content types
* Custom meta fields for enhanced content management
* Consultation form submission endpoint
* CORS support for frontend integration
* SEO-friendly content structure

== Installation ==

1. Upload the plugin files to the `/wp-content/plugins/versai-api` directory
2. Activate the plugin through the 'Plugins' screen in WordPress
3. Configure the plugin settings if needed
4. The API endpoints will be available at `/wp-json/versai/v1/`

== API Endpoints ==

* `GET /wp-json/versai/v1/services` - Get immigration services
* `GET /wp-json/versai/v1/success-stories` - Get success stories
* `GET /wp-json/versai/v1/faqs` - Get frequently asked questions
* `GET /wp-json/versai/v1/testimonials` - Get customer testimonials
* `GET /wp-json/versai/v1/blogs` - Get blog articles
* `GET /wp-json/versai/v1/blog-categories` - Get blog categories
* `GET /wp-json/versai/v1/countries` - Get available countries
* `GET /wp-json/versai/v1/visa-types` - Get visa types
* `POST /wp-json/versai/v1/consultation` - Submit consultation request

== Custom Post Types ==

* **Services** - Immigration services with custom fields
* **Success Stories** - Client success stories
* **FAQs** - Frequently asked questions
* **Testimonials** - Customer testimonials
* **Blog Articles** - Blog posts with SEO and categorization

== Custom Taxonomies ==

* **Countries** - Available destination countries
* **Visa Types** - Types of visas available
* **Blog Categories** - Categories for blog articles

== Custom Fields ==

For Services:
* Service Type (immigration, study, work, investment, family)
* Visa Type
* Country
* Duration
* Price
* Featured (boolean)
* Priority (0-100)

For Success Stories:
* Visa Type
* Country
* Client Name
* Client Age
* Processing Time

For Blog Articles:
* Blog Category (immigration, study, work, visa, news, tips)
* Country
* Visa Type
* Author Name
* Reading Time (minutes)
* Featured (boolean)
* Priority (0-100)
* SEO Title
* SEO Description
* SEO Keywords

== Changelog ==

= 1.1.0 =
* Added blog articles custom post type
* Added blog categories taxonomy
* Added blog API endpoints
* Added SEO meta fields for blogs
* Enhanced filtering options for blogs

= 1.0.0 =
* Initial release
* Custom post types and taxonomies
* REST API endpoints
* Custom meta fields
* Consultation form submission

== Upgrade Notice ==

= 1.1.0 =
Added blog functionality with SEO support and categorization.

= 1.0.0 =
Initial release of Versai API plugin.
