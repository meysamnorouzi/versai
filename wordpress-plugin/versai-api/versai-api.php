<?php
/**
 * Plugin Name: Versai API
 * Plugin URI: https://versai.ir
 * Description: Custom API endpoints for Versai Immigration Institute website
 * Version: 1.0.0
 * Author: Versai Team
 * License: GPL v2 or later
 * Text Domain: versai-api
 */

// Prevent direct access
if (!defined('ABSPATH')) {
    exit;
}

// Define plugin constants
define('VERSAI_API_VERSION', '1.0.0');
define('VERSAI_API_PLUGIN_URL', plugin_dir_url(__FILE__));
define('VERSAI_API_PLUGIN_PATH', plugin_dir_path(__FILE__));

class VersaiAPI {
    
    public function __construct() {
        add_action('rest_api_init', array($this, 'register_routes'));
        add_action('init', array($this, 'init'));
    }
    
    public function init() {
        // Initialize plugin
        $this->create_custom_post_types();
        $this->create_custom_taxonomies();
        $this->create_custom_fields();
    }
    
    /**
     * Register custom post types
     */
    public function create_custom_post_types() {
        // Services
        register_post_type('versai_service', array(
            'labels' => array(
                'name' => 'خدمات',
                'singular_name' => 'خدمت',
                'menu_name' => 'خدمات ورسای',
                'add_new' => 'افزودن خدمت جدید',
                'add_new_item' => 'افزودن خدمت جدید',
                'edit_item' => 'ویرایش خدمت',
                'new_item' => 'خدمت جدید',
                'view_item' => 'مشاهده خدمت',
                'search_items' => 'جستجوی خدمات',
                'not_found' => 'هیچ خدمتی یافت نشد',
                'not_found_in_trash' => 'هیچ خدمتی در سطل زباله یافت نشد'
            ),
            'public' => true,
            'has_archive' => true,
            'supports' => array('title', 'editor', 'thumbnail', 'excerpt', 'custom-fields'),
            'show_in_rest' => true,
            'rest_base' => 'versai-services',
            'menu_icon' => 'dashicons-admin-tools'
        ));
        
        // Success Stories
        register_post_type('versai_success_story', array(
            'labels' => array(
                'name' => 'داستان‌های موفقیت',
                'singular_name' => 'داستان موفقیت',
                'menu_name' => 'داستان‌های موفقیت',
                'add_new' => 'افزودن داستان جدید',
                'add_new_item' => 'افزودن داستان جدید',
                'edit_item' => 'ویرایش داستان',
                'new_item' => 'داستان جدید',
                'view_item' => 'مشاهده داستان',
                'search_items' => 'جستجوی داستان‌ها',
                'not_found' => 'هیچ داستانی یافت نشد',
                'not_found_in_trash' => 'هیچ داستانی در سطل زباله یافت نشد'
            ),
            'public' => true,
            'has_archive' => true,
            'supports' => array('title', 'editor', 'thumbnail', 'excerpt', 'custom-fields'),
            'show_in_rest' => true,
            'rest_base' => 'versai-success-stories',
            'menu_icon' => 'dashicons-awards'
        ));
        
        // FAQs
        register_post_type('versai_faq', array(
            'labels' => array(
                'name' => 'سوالات متداول',
                'singular_name' => 'سوال متداول',
                'menu_name' => 'سوالات متداول',
                'add_new' => 'افزودن سوال جدید',
                'add_new_item' => 'افزودن سوال جدید',
                'edit_item' => 'ویرایش سوال',
                'new_item' => 'سوال جدید',
                'view_item' => 'مشاهده سوال',
                'search_items' => 'جستجوی سوالات',
                'not_found' => 'هیچ سوالی یافت نشد',
                'not_found_in_trash' => 'هیچ سوالی در سطل زباله یافت نشد'
            ),
            'public' => true,
            'has_archive' => true,
            'supports' => array('title', 'editor', 'custom-fields'),
            'show_in_rest' => true,
            'rest_base' => 'versai-faqs',
            'menu_icon' => 'dashicons-editor-help'
        ));
        
        // Testimonials
        register_post_type('versai_testimonial', array(
            'labels' => array(
                'name' => 'نظرات مشتریان',
                'singular_name' => 'نظر مشتری',
                'menu_name' => 'نظرات مشتریان',
                'add_new' => 'افزودن نظر جدید',
                'add_new_item' => 'افزودن نظر جدید',
                'edit_item' => 'ویرایش نظر',
                'new_item' => 'نظر جدید',
                'view_item' => 'مشاهده نظر',
                'search_items' => 'جستجوی نظرات',
                'not_found' => 'هیچ نظری یافت نشد',
                'not_found_in_trash' => 'هیچ نظری در سطل زباله یافت نشد'
            ),
            'public' => true,
            'has_archive' => true,
            'supports' => array('title', 'editor', 'thumbnail', 'custom-fields'),
            'show_in_rest' => true,
            'rest_base' => 'versai-testimonials',
            'menu_icon' => 'dashicons-format-quote'
        ));
        
        // Blog Articles
        register_post_type('versai_blog', array(
            'labels' => array(
                'name' => 'مقالات وبلاگ',
                'singular_name' => 'مقاله',
                'menu_name' => 'مقالات وبلاگ',
                'add_new' => 'افزودن مقاله جدید',
                'add_new_item' => 'افزودن مقاله جدید',
                'edit_item' => 'ویرایش مقاله',
                'new_item' => 'مقاله جدید',
                'view_item' => 'مشاهده مقاله',
                'search_items' => 'جستجوی مقالات',
                'not_found' => 'هیچ مقاله‌ای یافت نشد',
                'not_found_in_trash' => 'هیچ مقاله‌ای در سطل زباله یافت نشد'
            ),
            'public' => true,
            'has_archive' => true,
            'supports' => array('title', 'editor', 'thumbnail', 'excerpt', 'custom-fields', 'comments'),
            'show_in_rest' => true,
            'rest_base' => 'versai-blogs',
            'menu_icon' => 'dashicons-edit-page',
            'rewrite' => array('slug' => 'articles')
        ));
    }
    
    /**
     * Register custom taxonomies
     */
    public function create_custom_taxonomies() {
        // Countries
        register_taxonomy('versai_country', array('versai_service', 'versai_success_story', 'versai_blog'), array(
            'labels' => array(
                'name' => 'کشورها',
                'singular_name' => 'کشور',
                'menu_name' => 'کشورها',
                'add_new_item' => 'افزودن کشور جدید',
                'edit_item' => 'ویرایش کشور',
                'update_item' => 'به‌روزرسانی کشور',
                'search_items' => 'جستجوی کشورها',
                'not_found' => 'هیچ کشوری یافت نشد'
            ),
            'public' => true,
            'hierarchical' => true,
            'show_in_rest' => true,
            'rest_base' => 'versai-countries'
        ));
        
        // Visa Types
        register_taxonomy('versai_visa_type', array('versai_service', 'versai_success_story', 'versai_blog'), array(
            'labels' => array(
                'name' => 'انواع ویزا',
                'singular_name' => 'نوع ویزا',
                'menu_name' => 'انواع ویزا',
                'add_new_item' => 'افزودن نوع ویزای جدید',
                'edit_item' => 'ویرایش نوع ویزا',
                'update_item' => 'به‌روزرسانی نوع ویزا',
                'search_items' => 'جستجوی انواع ویزا',
                'not_found' => 'هیچ نوع ویزایی یافت نشد'
            ),
            'public' => true,
            'hierarchical' => true,
            'show_in_rest' => true,
            'rest_base' => 'versai-visa-types'
        ));
        
        // Blog Categories
        register_taxonomy('versai_blog_category', array('versai_blog'), array(
            'labels' => array(
                'name' => 'دسته‌بندی مقالات',
                'singular_name' => 'دسته‌بندی مقاله',
                'menu_name' => 'دسته‌بندی مقالات',
                'add_new_item' => 'افزودن دسته‌بندی جدید',
                'edit_item' => 'ویرایش دسته‌بندی',
                'update_item' => 'به‌روزرسانی دسته‌بندی',
                'search_items' => 'جستجوی دسته‌بندی‌ها',
                'not_found' => 'هیچ دسته‌بندی یافت نشد'
            ),
            'public' => true,
            'hierarchical' => true,
            'show_in_rest' => true,
            'rest_base' => 'versai-blog-categories'
        ));
    }
    
    /**
     * Create custom fields
     */
    public function create_custom_fields() {
        // Add custom fields using ACF or custom meta boxes
        add_action('add_meta_boxes', array($this, 'add_meta_boxes'));
        add_action('save_post', array($this, 'save_meta_boxes'));
    }
    
    /**
     * Add meta boxes
     */
    public function add_meta_boxes() {
        add_meta_box(
            'versai_service_details',
            'جزئیات خدمت',
            array($this, 'service_meta_box_callback'),
            'versai_service',
            'normal',
            'high'
        );
        
        add_meta_box(
            'versai_success_story_details',
            'جزئیات داستان موفقیت',
            array($this, 'success_story_meta_box_callback'),
            'versai_success_story',
            'normal',
            'high'
        );
        
        add_meta_box(
            'versai_blog_details',
            'جزئیات مقاله',
            array($this, 'blog_meta_box_callback'),
            'versai_blog',
            'normal',
            'high'
        );
    }
    
    /**
     * Service meta box callback
     */
    public function service_meta_box_callback($post) {
        wp_nonce_field('versai_meta_box', 'versai_meta_box_nonce');
        
        $service_type = get_post_meta($post->ID, 'versai_service_type', true);
        $visa_type = get_post_meta($post->ID, 'versai_visa_type', true);
        $country = get_post_meta($post->ID, 'versai_country', true);
        $duration = get_post_meta($post->ID, 'versai_duration', true);
        $price = get_post_meta($post->ID, 'versai_price', true);
        $featured = get_post_meta($post->ID, 'versai_featured', true);
        $priority = get_post_meta($post->ID, 'versai_priority', true);
        
        ?>
        <table class="form-table">
            <tr>
                <th><label for="versai_service_type">نوع خدمت</label></th>
                <td>
                    <select name="versai_service_type" id="versai_service_type">
                        <option value="">انتخاب کنید</option>
                        <option value="immigration" <?php selected($service_type, 'immigration'); ?>>مهاجرت</option>
                        <option value="study" <?php selected($service_type, 'study'); ?>>تحصیل</option>
                        <option value="work" <?php selected($service_type, 'work'); ?>>کار</option>
                        <option value="investment" <?php selected($service_type, 'investment'); ?>>سرمایه‌گذاری</option>
                        <option value="family" <?php selected($service_type, 'family'); ?>>خانواده</option>
                    </select>
                </td>
            </tr>
            <tr>
                <th><label for="versai_visa_type">نوع ویزا</label></th>
                <td>
                    <input type="text" name="versai_visa_type" id="versai_visa_type" value="<?php echo esc_attr($visa_type); ?>" class="regular-text" />
                </td>
            </tr>
            <tr>
                <th><label for="versai_country">کشور</label></th>
                <td>
                    <select name="versai_country" id="versai_country">
                        <option value="">انتخاب کنید</option>
                        <option value="france" <?php selected($country, 'france'); ?>>فرانسه</option>
                        <option value="canada" <?php selected($country, 'canada'); ?>>کانادا</option>
                        <option value="germany" <?php selected($country, 'germany'); ?>>آلمان</option>
                        <option value="australia" <?php selected($country, 'australia'); ?>>استرالیا</option>
                    </select>
                </td>
            </tr>
            <tr>
                <th><label for="versai_duration">مدت زمان</label></th>
                <td>
                    <input type="text" name="versai_duration" id="versai_duration" value="<?php echo esc_attr($duration); ?>" class="regular-text" placeholder="مثال: 6 ماه" />
                </td>
            </tr>
            <tr>
                <th><label for="versai_price">قیمت</label></th>
                <td>
                    <input type="text" name="versai_price" id="versai_price" value="<?php echo esc_attr($price); ?>" class="regular-text" placeholder="مثال: 5000 دلار" />
                </td>
            </tr>
            <tr>
                <th><label for="versai_featured">ویژه</label></th>
                <td>
                    <input type="checkbox" name="versai_featured" id="versai_featured" value="1" <?php checked($featured, '1'); ?> />
                    <label for="versai_featured">این خدمت را ویژه کنید</label>
                </td>
            </tr>
            <tr>
                <th><label for="versai_priority">اولویت</label></th>
                <td>
                    <input type="number" name="versai_priority" id="versai_priority" value="<?php echo esc_attr($priority); ?>" min="0" max="100" class="small-text" />
                    <p class="description">عدد بین 0 تا 100 (بالاتر = اولویت بیشتر)</p>
                </td>
            </tr>
        </table>
        <?php
    }
    
    /**
     * Success story meta box callback
     */
    public function success_story_meta_box_callback($post) {
        $visa_type = get_post_meta($post->ID, 'versai_visa_type', true);
        $country = get_post_meta($post->ID, 'versai_country', true);
        $client_name = get_post_meta($post->ID, 'versai_client_name', true);
        $client_age = get_post_meta($post->ID, 'versai_client_age', true);
        $processing_time = get_post_meta($post->ID, 'versai_processing_time', true);
        
        ?>
        <table class="form-table">
            <tr>
                <th><label for="versai_visa_type">نوع ویزا</label></th>
                <td>
                    <input type="text" name="versai_visa_type" id="versai_visa_type" value="<?php echo esc_attr($visa_type); ?>" class="regular-text" />
                </td>
            </tr>
            <tr>
                <th><label for="versai_country">کشور</label></th>
                <td>
                    <select name="versai_country" id="versai_country">
                        <option value="">انتخاب کنید</option>
                        <option value="france" <?php selected($country, 'france'); ?>>فرانسه</option>
                        <option value="canada" <?php selected($country, 'canada'); ?>>کانادا</option>
                        <option value="germany" <?php selected($country, 'germany'); ?>>آلمان</option>
                        <option value="australia" <?php selected($country, 'australia'); ?>>استرالیا</option>
                    </select>
                </td>
            </tr>
            <tr>
                <th><label for="versai_client_name">نام مشتری</label></th>
                <td>
                    <input type="text" name="versai_client_name" id="versai_client_name" value="<?php echo esc_attr($client_name); ?>" class="regular-text" />
                </td>
            </tr>
            <tr>
                <th><label for="versai_client_age">سن مشتری</label></th>
                <td>
                    <input type="number" name="versai_client_age" id="versai_client_age" value="<?php echo esc_attr($client_age); ?>" class="small-text" />
                </td>
            </tr>
            <tr>
                <th><label for="versai_processing_time">مدت زمان پردازش</label></th>
                <td>
                    <input type="text" name="versai_processing_time" id="versai_processing_time" value="<?php echo esc_attr($processing_time); ?>" class="regular-text" placeholder="مثال: 6 ماه" />
                </td>
            </tr>
        </table>
        <?php
    }
    
    /**
     * Blog meta box callback
     */
    public function blog_meta_box_callback($post) {
        $blog_category = get_post_meta($post->ID, 'versai_blog_category', true);
        $country = get_post_meta($post->ID, 'versai_country', true);
        $visa_type = get_post_meta($post->ID, 'versai_visa_type', true);
        $author_name = get_post_meta($post->ID, 'versai_author_name', true);
        $reading_time = get_post_meta($post->ID, 'versai_reading_time', true);
        $featured = get_post_meta($post->ID, 'versai_featured', true);
        $priority = get_post_meta($post->ID, 'versai_priority', true);
        $meta_title = get_post_meta($post->ID, 'versai_meta_title', true);
        $meta_description = get_post_meta($post->ID, 'versai_meta_description', true);
        $seo_keywords = get_post_meta($post->ID, 'versai_seo_keywords', true);
        
        ?>
        <table class="form-table">
            <tr>
                <th><label for="versai_blog_category">دسته‌بندی مقاله</label></th>
                <td>
                    <select name="versai_blog_category" id="versai_blog_category">
                        <option value="">انتخاب کنید</option>
                        <option value="immigration" <?php selected($blog_category, 'immigration'); ?>>مهاجرت</option>
                        <option value="study" <?php selected($blog_category, 'study'); ?>>تحصیل</option>
                        <option value="work" <?php selected($blog_category, 'work'); ?>>کار</option>
                        <option value="visa" <?php selected($blog_category, 'visa'); ?>>ویزا</option>
                        <option value="news" <?php selected($blog_category, 'news'); ?>>اخبار</option>
                        <option value="tips" <?php selected($blog_category, 'tips'); ?>>نکات و راهنما</option>
                    </select>
                </td>
            </tr>
            <tr>
                <th><label for="versai_country">کشور</label></th>
                <td>
                    <select name="versai_country" id="versai_country">
                        <option value="">انتخاب کنید</option>
                        <option value="france" <?php selected($country, 'france'); ?>>فرانسه</option>
                        <option value="canada" <?php selected($country, 'canada'); ?>>کانادا</option>
                        <option value="germany" <?php selected($country, 'germany'); ?>>آلمان</option>
                        <option value="australia" <?php selected($country, 'australia'); ?>>استرالیا</option>
                        <option value="italy" <?php selected($country, 'italy'); ?>>ایتالیا</option>
                        <option value="sweden" <?php selected($country, 'sweden'); ?>>سوئد</option>
                        <option value="turkey" <?php selected($country, 'turkey'); ?>>ترکیه</option>
                    </select>
                </td>
            </tr>
            <tr>
                <th><label for="versai_visa_type">نوع ویزا</label></th>
                <td>
                    <input type="text" name="versai_visa_type" id="versai_visa_type" value="<?php echo esc_attr($visa_type); ?>" class="regular-text" placeholder="مثال: ویزای تحصیلی" />
                </td>
            </tr>
            <tr>
                <th><label for="versai_author_name">نام نویسنده</label></th>
                <td>
                    <input type="text" name="versai_author_name" id="versai_author_name" value="<?php echo esc_attr($author_name); ?>" class="regular-text" />
                </td>
            </tr>
            <tr>
                <th><label for="versai_reading_time">زمان مطالعه (دقیقه)</label></th>
                <td>
                    <input type="number" name="versai_reading_time" id="versai_reading_time" value="<?php echo esc_attr($reading_time); ?>" min="1" max="60" class="small-text" />
                </td>
            </tr>
            <tr>
                <th><label for="versai_featured">ویژه</label></th>
                <td>
                    <input type="checkbox" name="versai_featured" id="versai_featured" value="1" <?php checked($featured, '1'); ?> />
                    <label for="versai_featured">این مقاله را ویژه کنید</label>
                </td>
            </tr>
            <tr>
                <th><label for="versai_priority">اولویت</label></th>
                <td>
                    <input type="number" name="versai_priority" id="versai_priority" value="<?php echo esc_attr($priority); ?>" min="0" max="100" class="small-text" />
                    <p class="description">عدد بین 0 تا 100 (بالاتر = اولویت بیشتر)</p>
                </td>
            </tr>
            <tr>
                <th><label for="versai_meta_title">عنوان SEO</label></th>
                <td>
                    <input type="text" name="versai_meta_title" id="versai_meta_title" value="<?php echo esc_attr($meta_title); ?>" class="large-text" />
                    <p class="description">عنوان مخصوص موتورهای جستجو (اختیاری)</p>
                </td>
            </tr>
            <tr>
                <th><label for="versai_meta_description">توضیحات SEO</label></th>
                <td>
                    <textarea name="versai_meta_description" id="versai_meta_description" rows="3" class="large-text"><?php echo esc_textarea($meta_description); ?></textarea>
                    <p class="description">توضیحات مخصوص موتورهای جستجو (اختیاری)</p>
                </td>
            </tr>
            <tr>
                <th><label for="versai_seo_keywords">کلمات کلیدی SEO</label></th>
                <td>
                    <input type="text" name="versai_seo_keywords" id="versai_seo_keywords" value="<?php echo esc_attr($seo_keywords); ?>" class="large-text" placeholder="کلمه1, کلمه2, کلمه3" />
                    <p class="description">کلمات کلیدی را با کاما جدا کنید</p>
                </td>
            </tr>
        </table>
        <?php
    }
    
    /**
     * Save meta boxes
     */
    public function save_meta_boxes($post_id) {
        if (!isset($_POST['versai_meta_box_nonce']) || !wp_verify_nonce($_POST['versai_meta_box_nonce'], 'versai_meta_box')) {
            return;
        }
        
        if (defined('DOING_AUTOSAVE') && DOING_AUTOSAVE) {
            return;
        }
        
        if (!current_user_can('edit_post', $post_id)) {
            return;
        }
        
        // Save service meta fields
        if (get_post_type($post_id) === 'versai_service') {
            $fields = array('versai_service_type', 'versai_visa_type', 'versai_country', 'versai_duration', 'versai_price', 'versai_priority');
            foreach ($fields as $field) {
                if (isset($_POST[$field])) {
                    update_post_meta($post_id, $field, sanitize_text_field($_POST[$field]));
                }
            }
            
            $featured = isset($_POST['versai_featured']) ? '1' : '0';
            update_post_meta($post_id, 'versai_featured', $featured);
        }
        
        // Save success story meta fields
        if (get_post_type($post_id) === 'versai_success_story') {
            $fields = array('versai_visa_type', 'versai_country', 'versai_client_name', 'versai_client_age', 'versai_processing_time');
            foreach ($fields as $field) {
                if (isset($_POST[$field])) {
                    update_post_meta($post_id, $field, sanitize_text_field($_POST[$field]));
                }
            }
        }
        
        // Save blog meta fields
        if (get_post_type($post_id) === 'versai_blog') {
            $fields = array('versai_blog_category', 'versai_country', 'versai_visa_type', 'versai_author_name', 'versai_reading_time', 'versai_priority', 'versai_meta_title', 'versai_meta_description', 'versai_seo_keywords');
            foreach ($fields as $field) {
                if (isset($_POST[$field])) {
                    update_post_meta($post_id, $field, sanitize_text_field($_POST[$field]));
                }
            }
            
            $featured = isset($_POST['versai_featured']) ? '1' : '0';
            update_post_meta($post_id, 'versai_featured', $featured);
        }
    }
    
    /**
     * Register REST API routes
     */
    public function register_routes() {
        // Services endpoint
        register_rest_route('versai/v1', '/services', array(
            'methods' => 'GET',
            'callback' => array($this, 'get_services'),
            'permission_callback' => '__return_true'
        ));
        
        // Success stories endpoint
        register_rest_route('versai/v1', '/success-stories', array(
            'methods' => 'GET',
            'callback' => array($this, 'get_success_stories'),
            'permission_callback' => '__return_true'
        ));
        
        // FAQs endpoint
        register_rest_route('versai/v1', '/faqs', array(
            'methods' => 'GET',
            'callback' => array($this, 'get_faqs'),
            'permission_callback' => '__return_true'
        ));
        
        // Testimonials endpoint
        register_rest_route('versai/v1', '/testimonials', array(
            'methods' => 'GET',
            'callback' => array($this, 'get_testimonials'),
            'permission_callback' => '__return_true'
        ));
        
        // Blogs endpoint
        register_rest_route('versai/v1', '/blogs', array(
            'methods' => 'GET',
            'callback' => array($this, 'get_blogs'),
            'permission_callback' => '__return_true'
        ));
        
        // Countries endpoint
        register_rest_route('versai/v1', '/countries', array(
            'methods' => 'GET',
            'callback' => array($this, 'get_countries'),
            'permission_callback' => '__return_true'
        ));
        
        // Visa types endpoint
        register_rest_route('versai/v1', '/visa-types', array(
            'methods' => 'GET',
            'callback' => array($this, 'get_visa_types'),
            'permission_callback' => '__return_true'
        ));
        
        // Blog categories endpoint
        register_rest_route('versai/v1', '/blog-categories', array(
            'methods' => 'GET',
            'callback' => array($this, 'get_blog_categories'),
            'permission_callback' => '__return_true'
        ));
        
        // Consultation submission endpoint
        register_rest_route('versai/v1', '/consultation', array(
            'methods' => 'POST',
            'callback' => array($this, 'submit_consultation'),
            'permission_callback' => '__return_true',
            'args' => array(
                'name' => array(
                    'required' => true,
                    'type' => 'string',
                    'sanitize_callback' => 'sanitize_text_field'
                ),
                'phone' => array(
                    'required' => true,
                    'type' => 'string',
                    'sanitize_callback' => 'sanitize_text_field'
                ),
                'email' => array(
                    'required' => true,
                    'type' => 'string',
                    'sanitize_callback' => 'sanitize_email'
                ),
                'subject' => array(
                    'required' => true,
                    'type' => 'string',
                    'sanitize_callback' => 'sanitize_text_field'
                ),
                'message' => array(
                    'required' => true,
                    'type' => 'string',
                    'sanitize_callback' => 'sanitize_textarea_field'
                )
            )
        ));
    }
    
    /**
     * Get services
     */
    public function get_services($request) {
        $args = array(
            'post_type' => 'versai_service',
            'post_status' => 'publish',
            'posts_per_page' => $request->get_param('per_page') ?: 10,
            'paged' => $request->get_param('page') ?: 1,
            'meta_key' => 'versai_priority',
            'orderby' => 'meta_value_num',
            'order' => 'DESC'
        );
        
        $query = new WP_Query($args);
        $services = array();
        
        if ($query->have_posts()) {
            while ($query->have_posts()) {
                $query->the_post();
                $post_id = get_the_ID();
                
                $services[] = array(
                    'id' => $post_id,
                    'title' => get_the_title(),
                    'content' => get_the_content(),
                    'excerpt' => get_the_excerpt(),
                    'featured_image' => get_the_post_thumbnail_url($post_id, 'large'),
                    'slug' => get_post_field('post_name', $post_id),
                    'date' => get_the_date('c'),
                    'service_type' => get_post_meta($post_id, 'versai_service_type', true),
                    'visa_type' => get_post_meta($post_id, 'versai_visa_type', true),
                    'country' => get_post_meta($post_id, 'versai_country', true),
                    'duration' => get_post_meta($post_id, 'versai_duration', true),
                    'price' => get_post_meta($post_id, 'versai_price', true),
                    'featured' => get_post_meta($post_id, 'versai_featured', true) === '1',
                    'priority' => (int) get_post_meta($post_id, 'versai_priority', true)
                );
            }
        }
        
        wp_reset_postdata();
        
        return new WP_REST_Response(array(
            'success' => true,
            'data' => $services,
            'total' => $query->found_posts,
            'pages' => $query->max_num_pages
        ), 200);
    }
    
    /**
     * Get success stories
     */
    public function get_success_stories($request) {
        $args = array(
            'post_type' => 'versai_success_story',
            'post_status' => 'publish',
            'posts_per_page' => $request->get_param('per_page') ?: 10,
            'paged' => $request->get_param('page') ?: 1,
            'orderby' => 'date',
            'order' => 'DESC'
        );
        
        $query = new WP_Query($args);
        $stories = array();
        
        if ($query->have_posts()) {
            while ($query->have_posts()) {
                $query->the_post();
                $post_id = get_the_ID();
                
                $stories[] = array(
                    'id' => $post_id,
                    'title' => get_the_title(),
                    'content' => get_the_content(),
                    'excerpt' => get_the_excerpt(),
                    'featured_image' => get_the_post_thumbnail_url($post_id, 'large'),
                    'slug' => get_post_field('post_name', $post_id),
                    'date' => get_the_date('c'),
                    'visa_type' => get_post_meta($post_id, 'versai_visa_type', true),
                    'country' => get_post_meta($post_id, 'versai_country', true),
                    'client_name' => get_post_meta($post_id, 'versai_client_name', true),
                    'client_age' => get_post_meta($post_id, 'versai_client_age', true),
                    'processing_time' => get_post_meta($post_id, 'versai_processing_time', true)
                );
            }
        }
        
        wp_reset_postdata();
        
        return new WP_REST_Response(array(
            'success' => true,
            'data' => $stories,
            'total' => $query->found_posts,
            'pages' => $query->max_num_pages
        ), 200);
    }
    
    /**
     * Get FAQs
     */
    public function get_faqs($request) {
        $args = array(
            'post_type' => 'versai_faq',
            'post_status' => 'publish',
            'posts_per_page' => $request->get_param('per_page') ?: -1,
            'orderby' => 'menu_order',
            'order' => 'ASC'
        );
        
        $query = new WP_Query($args);
        $faqs = array();
        
        if ($query->have_posts()) {
            while ($query->have_posts()) {
                $query->the_post();
                $post_id = get_the_ID();
                
                $faqs[] = array(
                    'id' => $post_id,
                    'question' => get_the_title(),
                    'answer' => get_the_content(),
                    'slug' => get_post_field('post_name', $post_id),
                    'date' => get_the_date('c')
                );
            }
        }
        
        wp_reset_postdata();
        
        return new WP_REST_Response(array(
            'success' => true,
            'data' => $faqs,
            'total' => $query->found_posts
        ), 200);
    }
    
    /**
     * Get testimonials
     */
    public function get_testimonials($request) {
        $args = array(
            'post_type' => 'versai_testimonial',
            'post_status' => 'publish',
            'posts_per_page' => $request->get_param('per_page') ?: 10,
            'paged' => $request->get_param('page') ?: 1,
            'orderby' => 'date',
            'order' => 'DESC'
        );
        
        $query = new WP_Query($args);
        $testimonials = array();
        
        if ($query->have_posts()) {
            while ($query->have_posts()) {
                $query->the_post();
                $post_id = get_the_ID();
                
                $testimonials[] = array(
                    'id' => $post_id,
                    'title' => get_the_title(),
                    'content' => get_the_content(),
                    'excerpt' => get_the_excerpt(),
                    'featured_image' => get_the_post_thumbnail_url($post_id, 'large'),
                    'slug' => get_post_field('post_name', $post_id),
                    'date' => get_the_date('c'),
                    'client_name' => get_post_meta($post_id, 'versai_client_name', true),
                    'client_position' => get_post_meta($post_id, 'versai_client_position', true),
                    'rating' => get_post_meta($post_id, 'versai_rating', true)
                );
            }
        }
        
        wp_reset_postdata();
        
        return new WP_REST_Response(array(
            'success' => true,
            'data' => $testimonials,
            'total' => $query->found_posts,
            'pages' => $query->max_num_pages
        ), 200);
    }
    
    /**
     * Get countries
     */
    public function get_countries($request) {
        $countries = get_terms(array(
            'taxonomy' => 'versai_country',
            'hide_empty' => false
        ));
        
        $countries_data = array();
        if (!is_wp_error($countries)) {
            foreach ($countries as $country) {
                $countries_data[] = array(
                    'id' => $country->term_id,
                    'name' => $country->name,
                    'slug' => $country->slug,
                    'description' => $country->description,
                    'count' => $country->count
                );
            }
        }
        
        return new WP_REST_Response(array(
            'success' => true,
            'data' => $countries_data,
            'total' => count($countries_data)
        ), 200);
    }
    
    /**
     * Get visa types
     */
    public function get_visa_types($request) {
        $visa_types = get_terms(array(
            'taxonomy' => 'versai_visa_type',
            'hide_empty' => false
        ));
        
        $visa_types_data = array();
        if (!is_wp_error($visa_types)) {
            foreach ($visa_types as $visa_type) {
                $visa_types_data[] = array(
                    'id' => $visa_type->term_id,
                    'name' => $visa_type->name,
                    'slug' => $visa_type->slug,
                    'description' => $visa_type->description,
                    'count' => $visa_type->count
                );
            }
        }
        
        return new WP_REST_Response(array(
            'success' => true,
            'data' => $visa_types_data,
            'total' => count($visa_types_data)
        ), 200);
    }
    
    /**
     * Get blogs
     */
    public function get_blogs($request) {
        $args = array(
            'post_type' => 'versai_blog',
            'post_status' => 'publish',
            'posts_per_page' => $request->get_param('per_page') ?: 10,
            'paged' => $request->get_param('page') ?: 1,
            'meta_key' => 'versai_priority',
            'orderby' => 'meta_value_num',
            'order' => 'DESC'
        );
        
        // Add category filter if provided
        if ($request->get_param('category')) {
            $args['meta_query'] = array(
                array(
                    'key' => 'versai_blog_category',
                    'value' => $request->get_param('category'),
                    'compare' => '='
                )
            );
        }
        
        // Add country filter if provided
        if ($request->get_param('country')) {
            if (!isset($args['meta_query'])) {
                $args['meta_query'] = array();
            }
            $args['meta_query'][] = array(
                'key' => 'versai_country',
                'value' => $request->get_param('country'),
                'compare' => '='
            );
        }
        
        // Add featured filter if provided
        if ($request->get_param('featured') === 'true') {
            if (!isset($args['meta_query'])) {
                $args['meta_query'] = array();
            }
            $args['meta_query'][] = array(
                'key' => 'versai_featured',
                'value' => '1',
                'compare' => '='
            );
        }
        
        $query = new WP_Query($args);
        $blogs = array();
        
        if ($query->have_posts()) {
            while ($query->have_posts()) {
                $query->the_post();
                $post_id = get_the_ID();
                
                $blogs[] = array(
                    'id' => $post_id,
                    'title' => get_the_title(),
                    'content' => get_the_content(),
                    'excerpt' => get_the_excerpt(),
                    'featured_image' => get_the_post_thumbnail_url($post_id, 'large'),
                    'slug' => get_post_field('post_name', $post_id),
                    'date' => get_the_date('c'),
                    'modified' => get_the_modified_date('c'),
                    'author' => get_the_author(),
                    'blog_category' => get_post_meta($post_id, 'versai_blog_category', true),
                    'country' => get_post_meta($post_id, 'versai_country', true),
                    'visa_type' => get_post_meta($post_id, 'versai_visa_type', true),
                    'author_name' => get_post_meta($post_id, 'versai_author_name', true),
                    'reading_time' => get_post_meta($post_id, 'versai_reading_time', true),
                    'featured' => get_post_meta($post_id, 'versai_featured', true) === '1',
                    'priority' => (int) get_post_meta($post_id, 'versai_priority', true),
                    'meta_title' => get_post_meta($post_id, 'versai_meta_title', true),
                    'meta_description' => get_post_meta($post_id, 'versai_meta_description', true),
                    'seo_keywords' => get_post_meta($post_id, 'versai_seo_keywords', true),
                    'comment_count' => get_comments_number($post_id)
                );
            }
        }
        
        wp_reset_postdata();
        
        return new WP_REST_Response(array(
            'success' => true,
            'data' => $blogs,
            'total' => $query->found_posts,
            'pages' => $query->max_num_pages
        ), 200);
    }
    
    /**
     * Get blog categories
     */
    public function get_blog_categories($request) {
        $categories = get_terms(array(
            'taxonomy' => 'versai_blog_category',
            'hide_empty' => false
        ));
        
        $categories_data = array();
        if (!is_wp_error($categories)) {
            foreach ($categories as $category) {
                $categories_data[] = array(
                    'id' => $category->term_id,
                    'name' => $category->name,
                    'slug' => $category->slug,
                    'description' => $category->description,
                    'count' => $category->count
                );
            }
        }
        
        return new WP_REST_Response(array(
            'success' => true,
            'data' => $categories_data,
            'total' => count($categories_data)
        ), 200);
    }
    
    /**
     * Submit consultation
     */
    public function submit_consultation($request) {
        $name = $request->get_param('name');
        $phone = $request->get_param('phone');
        $email = $request->get_param('email');
        $subject = $request->get_param('subject');
        $message = $request->get_param('message');
        
        // Create consultation post
        $post_id = wp_insert_post(array(
            'post_type' => 'versai_consultation',
            'post_title' => $subject,
            'post_content' => $message,
            'post_status' => 'private',
            'meta_input' => array(
                'versai_consultation_name' => $name,
                'versai_consultation_phone' => $phone,
                'versai_consultation_email' => $email,
                'versai_consultation_date' => current_time('mysql')
            )
        ));
        
        if (is_wp_error($post_id)) {
            return new WP_REST_Response(array(
                'success' => false,
                'message' => 'خطا در ارسال درخواست مشاوره'
            ), 500);
        }
        
        // Send email notification
        $admin_email = get_option('admin_email');
        $email_subject = 'درخواست مشاوره جدید - ' . $subject;
        $email_message = "نام: $name\n";
        $email_message .= "تلفن: $phone\n";
        $email_message .= "ایمیل: $email\n";
        $email_message .= "موضوع: $subject\n";
        $email_message .= "پیام:\n$message";
        
        wp_mail($admin_email, $email_subject, $email_message);
        
        return new WP_REST_Response(array(
            'success' => true,
            'message' => 'درخواست مشاوره شما با موفقیت ارسال شد',
            'data' => array('id' => $post_id)
        ), 200);
    }
}

// Initialize the plugin
new VersaiAPI();

// Activation hook
register_activation_hook(__FILE__, 'versai_api_activate');
function versai_api_activate() {
    // Flush rewrite rules
    flush_rewrite_rules();
}

// Deactivation hook
register_deactivation_hook(__FILE__, 'versai_api_deactivate');
function versai_api_deactivate() {
    // Flush rewrite rules
    flush_rewrite_rules();
}
?>
