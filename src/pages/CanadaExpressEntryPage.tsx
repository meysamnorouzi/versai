import React from 'react';
import SEOHead from '../components/seo/SEOHead';
import Container from '../components/ui/Container';
import Button from '../components/ui/Button';
import Card from '../components/ui/Card';
import Input from '../components/ui/Input';
import FAQSection from '../components/ui/FAQSection';
import RelatedArticlesSection from '../components/ui/RelatedArticlesSection';

const CanadaExpressEntryPage: React.FC = () => {
  const faqItems = [
    {
      question: "اولین گام اقدام برای دوره‌های زبان چیست؟",
      answer: "اولین گام، ارزیابی شرایط و مدارک شما توسط مشاوران ورسای است."
    },
    {
      question: "مشاوره در ورسای چگونه برگزار می‌شود و هزینه‌اش چقدر است؟",
      answer: "مشاوره به صورت حضوری و آنلاین برگزار می‌شود و هزینه آن بر اساس نوع مشاوره متفاوت است."
    },
    {
      question: "مدت زمان لازم تا شروع دوره زبان معمولاً چقدر است؟",
      answer: "معمولاً 3-6 ماه زمان نیاز است تا تمام مراحل آماده شود."
    },
    {
      question: "شرایط لازم برای شرکت در دوره زبان چیست؟",
      answer: "داشتن مدرک دیپلم، پاسپورت معتبر و تمکن مالی کافی از شرایط اصلی است."
    },
    {
      question: "آیا ورسای پرونده اکسپرس انتری را به‌صورت کامل آماده و ثبت می‌کند؟",
      answer: "بله، ورسای تمام مراحل آماده‌سازی و ثبت پرونده اکسپرس انتری را انجام می‌دهد."
    },
    {
      question: "چه مدارکی برای پروندهٔ اقامت تحصیلی فرانسه لازم است؟",
      answer: "مدارک تحصیلی، پاسپورت، عکس، گواهی زبان و مدارک مالی از جمله مدارک مورد نیاز است."
    }
  ];

  const relatedArticles = [
    {
      title: "مزایای دوره زبان کشور فرانسه",
      image: "/images/canada-express-entry-page/pexels-mikhail-nilov-8430274 1.png",
      link: "/articles/french-language-course-benefits"
    },
    {
      title: "شرایط درخواست ویزای دیجیتال نومد اسپانیا",
      image: "/images/canada-express-entry-page/Rectangle 49 (1).png",
      link: "/articles/spain-digital-nomad-visa"
    },
    {
      title: "معرفی دانشگاه UCLY شهر لیون فرانسه",
      image: "/images/canada-express-entry-page/Rectangle 71.png",
      link: "/articles/ucly-university-lyon"
    }
  ];

  const crsFactors = [
    {
      title: "زبان:",
      description: "نمره زبان انگلیسی (IELTS/SAT/TEF معادل) یا فرانسه (TEF/TCF)، هر چه نمره بالاتر باشد، CRS بالاتر می‌رود."
    },
    {
      title: "تحصیلات:",
      description: "داشتن مدرک تحصیلی معتبر (لیسانس، فوق‌لیسانس، دکترا)، ارزیابی اعتبار مدرک خارج از کانادا."
    },
    {
      title: "تجربه کاری:",
      description: "سال‌های تجربه کار معتبر مرتبط با NOC، کار در سطح ماهر، سابقه کار کانادایی یا خارجی معتبر."
    },
    {
      title: "سازگاری با کانادا:",
      description: "داشتن پیشنهاد کار کانادایی، داشتن اقوام مقیم کانادا، تحصیل در کانادا، سازگاری با فرهنگ و بازار کار."
    },
    {
      title: "منابع مالی و توانایی تأمین هزینه‌ها:",
      description: "اثبات دارایی مالی کافی برای حمایت از خود و خانواده بدون نیاز به کار سریع، بسته به اندازه خانواده."
    },
    {
      title: "سن:",
      description: "با توجه به جداول سنی CSA، سن کمتر معمولاً امتیاز بالاتری در CRS می‌دهد."
    },
    {
      title: "سایر امتیازات:",
      description: "گواهی‌های تخصصی اضافی، دوره‌های آموزشی کوتاه‌مدت مرتبط با بازار کار کانادا، فرصت‌های زبان دوم."
    }
  ];

  const benefits = [
    "نسبت به مسیرهای سنتی مهاجرت، Express Entry امکان دعوت‌نامه در بازه زمانی کوتاه‌تر را فراهم می‌کند—به خصوص برای متقاضیانی که مدارک کامل و امتیاز بالا دارند.",
    "این مسیر شفاف است. کاربر می‌تواند وضعیت پرونده خود را رهگیری کند و با راهنمایی تخصصی، مسیر بهینه را در پیش بگیرد.",
    "پس از دریافت ITA، فرصت‌های کار، اقامت و بهره‌مندی از مزایای قانونی کانادا برای کارآفرینی و زندگی در کانادا فراهم می‌شود.",
    "به کمک ورسای با تمرکز روی کاهش خطاها، بهبود سریع CRS، و استراتژی استانی، شما می‌توانید نرخ پذیرش و زمان رسیدگی را بهینه کنید."
  ];

  return (
    <>
      <SEOHead
        title="اکسپرس انتری کانادا - مسیر سریع اقامت با راهنمایی تخصصی | ورسای"
        description="Express Entry یک سیستم مدیریتیِ سه گروه نیروی کار متخصص است که برای انتخاب متقاضیان واجد شرایط برای اقامت دائم کانادا عمل می‌کند."
        keywords="اکسپرس انتری کانادا، اقامت کانادا، مهاجرت کانادا، CRS Score، ورسای"
      />
      
      <div className="min-h-screen bg-zinc-100 relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
          <div className="absolute top-1/4 right-0 w-96 h-96 border border-slate-400/50 opacity-20 transform translate-x-1/2 -translate-y-1/2 rotate-[21.72deg]"></div>
          <div className="absolute bottom-1/4 left-0 w-80 h-80 border border-slate-400/50 opacity-20 transform -translate-x-1/2 translate-y-1/2 rotate-[21.72deg]"></div>
        </div>



        {/* Hero Section */}
        <section className="py-16">
          <Container>
            <div className="text-center mb-16">
              <h1 className="text-3xl font-extrabold font-['IRANYekanX'] leading-10 mb-4">
                <span className="text-red-700">اکسپرس انتری</span>
                <span className="text-cyan-800"> کانادا، مسیر سریع اقامت با راهنمایی تخصصی</span>
              </h1>
              <p className="text-neutral-500 text-lg font-medium font-['IRANYekanX'] leading-7 max-w-4xl mx-auto text-right">
                Express Entry یک سیستم مدیریتیِ سه گروه نیروی کار متخصص است که برای انتخاب متقاضیان واجد شرایط برای اقامت دائم کانادا عمل می‌کند. این سیستم با معیار CRSScore کار می‌کند و از میان پروفایل‌های واجد شرایط، دعوت‌نامه (ITA) برای اقدام به اقامت صادر می‌شود. هر چه CRSScore بالاتر باشد، احتمال دریافت ITA سریع‌تر است. هدف ورسای، کمک به شما در افزایش CRSScore به شکل عملی و قابل دستیابی است.
              </p>
            </div>

            {/* Target Audience */}
            <div className="text-center mb-16">
              <h2 className="text-red-700 text-xl font-semibold font-['IRANYekanX'] leading-snug mb-4">مخاطبین هدف</h2>
              <p className="text-cyan-800 text-sm font-semibold font-['IRANYekanX'] leading-tight mb-8 max-w-2xl mx-auto">
                متقاضیان دارای تحصیلات دانشگاهی یا کارشناسی، سابقه کار مرتبط، سطح زبان قابل قبول، و سازگاری با نیازهای بازار کار کانادا (مثلاً در زمینه‌های تقاضا محور مانند فناوری، بهداشت، مهندسی، و خدمات)
              </p>
              <div className="flex justify-center gap-10 mb-8">
                <div className="w-12 h-12 bg-red-700 rounded"></div>
                <div className="w-12 h-12 bg-red-700 rounded"></div>
                <div className="w-12 h-12 bg-red-700 rounded"></div>
              </div>
              <div className="w-full h-px bg-white max-w-2xl mx-auto"></div>
            </div>

            {/* Benefits Section */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
              <div className="relative">
                <img 
                  src="/images/canada-express-entry-page/pexels-mikhail-nilov-8430274 1.png" 
                  alt="Canada Express Entry" 
                  className="w-full h-96 object-cover rounded-2xl border border-stone-300"
                />
              </div>
              <div className="space-y-4">
                <h2 className="text-red-700 text-2xl font-semibold font-['IRANYekanX'] leading-relaxed text-right">مزایای اکسپرس انتری</h2>
                <div className="space-y-4">
                  {benefits.map((benefit, index) => (
                    <div key={index} className="flex items-start gap-2 text-right">
                      <div className="w-6 h-6 bg-red-700 rounded flex-shrink-0 mt-1"></div>
                      <p className="text-cyan-800 text-base font-medium font-['IRANYekanX'] leading-relaxed">{benefit}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Container>
        </section>

        {/* Banner Section */}
        <section className="bg-slate-700/80 py-20 mb-16">
          <Container>
            <div className="text-center text-white">
              <h2 className="text-3xl font-extrabold font-['IRANYekanX'] leading-10 mb-4" style={{textShadow: '0px 0px 6px rgba(255,255,255,0.71)'}}>
                برای رویای کانادا، یک قدم بردار.
              </h2>
              <p className="text-xl font-extrabold font-['IRANYekanX'] leading-relaxed mb-8" style={{textShadow: '0px 0px 6px rgba(255,255,255,0.71)'}}>
                ارزیابی امتیاز شما با ورسای
              </p>
              <Button className="bg-red-500 hover:bg-red-600 text-white px-6 py-3 rounded-[32px] text-lg font-bold font-['IRANYekanX']">
                درخواست مشاوره
              </Button>
            </div>
          </Container>
        </section>

        {/* CRS Factors Section */}
        <section className="py-16">
          <Container>
            <Card className="bg-sky-50 border-red-200 p-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div className="relative">
                  <img 
                    src="/images/canada-express-entry-page/1743016666528 1.png" 
                    alt="CRS Factors" 
                    className="w-full h-80 object-cover rounded-2xl"
                  />
                </div>
                <div className="space-y-4">
                  <h2 className="text-red-700 text-xl font-semibold font-['IRANYekanX'] leading-snug text-right">چه عواملی بر روی امتیاز CRS تاثیر می گذارند؟</h2>
                  <div className="space-y-4">
                    {crsFactors.map((factor, index) => (
                      <div key={index} className="text-right">
                        <p className="text-base font-medium font-['IRANYekanX'] leading-relaxed">
                          <span className="text-red-700">{factor.title}</span>
                          <span className="text-cyan-800"> {factor.description}</span>
                        </p>
                      </div>
                    ))}
                    <p className="text-cyan-800 text-base font-semibold font-['IRANYekanX'] leading-normal text-right">
                      با دریافت مشاوره از ورسای، می توانید حدود امتیاز فعلی خود را بدانید و سعی در بالاتر بردن آن کنید.
                    </p>
                  </div>
                </div>
              </div>
            </Card>
          </Container>
        </section>

        {/* Consultation Form Section */}
        <section className="py-16">
          <Container>
            <Card className="bg-stone-300/25 border-2 border-slate-200 p-8 relative">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent to-blue-950/20 rounded-2xl"></div>
              <div className="relative z-10">
                <h2 className="text-sky-50 text-xl font-semibold font-['IRANYekanX'] leading-snug text-right mb-8">
                  ثبت درخواست مشاوره با ورسای
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div className="space-y-2">
                    <label className="text-sky-50 text-sm font-semibold font-['IRANYekanX'] text-right">
                      <span className="text-red-200">*</span>نام و نام خانوادگی
                    </label>
                    <Input 
                      placeholder="نام و نام خانوادگی خود را وارد کنید."
                      className="bg-sky-50 border-stone-300 text-right"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sky-50 text-sm font-semibold font-['IRANYekanX'] text-right">
                      <span className="text-red-200">*</span>شماره تماس
                    </label>
                    <Input 
                      placeholder="شماره تماس خود را وارد کنید."
                      className="bg-sky-50 border-stone-300 text-right"
                    />
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div className="space-y-2">
                    <label className="text-sky-50 text-sm font-semibold font-['IRANYekanX'] text-right">
                      <span className="text-red-200">*</span>موضوع مشاوره
                    </label>
                    <select 
                      className="w-full px-4 py-3 bg-sky-50 border border-stone-300 rounded-lg text-right text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                      <option value="">موضوع مشاوره را انتخاب کنید.</option>
                      <option value="express-entry">اکسپرس انتری کانادا</option>
                      <option value="study">تحصیل در کانادا</option>
                      <option value="work">کار در کانادا</option>
                      <option value="investment">سرمایه گذاری</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sky-50 text-sm font-semibold font-['IRANYekanX'] text-right">
                      <span className="text-red-200">*</span>ایمیل
                    </label>
                    <Input 
                      placeholder="آدرس ایمیل خود را وارد کنید."
                      className="bg-sky-50 border-stone-300 text-right"
                    />
                  </div>
                </div>
                <div className="mb-6">
                  <label className="text-sky-50 text-sm font-semibold font-['IRANYekanX'] text-right block mb-2">
                    متن پیام
                  </label>
                  <textarea 
                    placeholder="در صورت تمایل، متن پیام خود را بنویسید."
                    className="w-full h-24 p-3 bg-sky-50 border border-stone-300 rounded-2xl text-right text-neutral-400 text-sm font-medium font-['IRANYekanX'] resize-none"
                  />
                </div>
                <div className="flex justify-center">
                  <Button className="bg-red-500 hover:bg-red-600 text-sky-50 px-6 py-3 rounded-[32px] text-lg font-bold font-['IRANYekanX']">
                    ارسال درخواست
                  </Button>
                </div>
                <div className="mt-8 flex items-center justify-center gap-2">
                  <div className="w-6 h-6 bg-red-200 rounded"></div>
                  <span className="text-stone-50 text-xl font-medium font-['IRANYekanX']">۰۲۱۲۸۴۲۱۶۹۰</span>
                </div>
                <div className="mt-4 flex justify-center">
                  <Button className="bg-sky-50 border border-red-500 text-red-500 px-6 py-3 rounded-[32px] text-lg font-bold font-['IRANYekanX'] flex items-center gap-2">
                    <div className="w-6 h-6 bg-red-500 rounded"></div>
                    ارتباط در واتساپ
                  </Button>
                </div>
              </div>
            </Card>
          </Container>
        </section>

        {/* FAQ Section */}
        <FAQSection 
          faqItems={faqItems}
          title="سوالات متداول"
          className="py-16"
        />

        {/* Related Articles Section */}
        <RelatedArticlesSection 
          articles={relatedArticles}
          title="مقالات مرتبط"
          showViewAll={true}
          viewAllLink="/articles"
          className="py-16"
        />

        {/* Footer */}
        <footer className="bg-gradient-to-b from-blue-950 py-16">
          <Container>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-white">
              <div className="space-y-4">
                <h3 className="text-red-200 text-lg font-semibold font-['IRANYekanX'] leading-relaxed">پیوند های مفید</h3>
                <div className="space-y-3">
                  <p className="text-sky-50 text-sm font-semibold font-['IRANYekanX'] leading-tight">سایت سفارت فرانسه</p>
                  <p className="text-sky-50 text-sm font-semibold font-['IRANYekanX'] leading-tight">سایت مترجم معتمد سفارت فرانسه</p>
                </div>
              </div>
              <div className="space-y-4">
                <h3 className="text-red-200 text-lg font-semibold font-['IRANYekanX'] leading-relaxed">دسترسی سریع</h3>
                <div className="space-y-3">
                  <p className="text-sky-50 text-base font-semibold font-['IRANYekanX'] leading-normal">دوره زبان</p>
                  <p className="text-sky-50 text-base font-semibold font-['IRANYekanX'] leading-normal">اکسپرس انتری کانادا</p>
                  <p className="text-sky-50 text-base font-semibold font-['IRANYekanX'] leading-normal">اقامت فرانسه</p>
                  <p className="text-sky-50 text-base font-semibold font-['IRANYekanX'] leading-normal">تماس با ما</p>
                  <p className="text-sky-50 text-base font-semibold font-['IRANYekanX'] leading-normal">مقالات</p>
                  <p className="text-sky-50 text-base font-semibold font-['IRANYekanX'] leading-normal">ثبت شرکت در فرانسه</p>
                </div>
              </div>
              <div className="space-y-4">
                <h3 className="text-red-200 text-lg font-semibold font-['IRANYekanX'] leading-relaxed">تماس با ما</h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 bg-red-200 rounded"></div>
                    <p className="text-white text-lg font-semibold font-['IRANYekanX'] leading-relaxed">
                      +۹۸۲۱۲۸۴۲۱۶۹۰ / +۹۸۹۳۵۴۲۴۲۷۱۵
                    </p>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 bg-red-200 rounded"></div>
                    <p className="text-white text-lg font-semibold font-['IRANYekanX'] leading-relaxed">
                      +33679949935
                    </p>
                  </div>
                </div>
              </div>
              <div className="space-y-4">
                <div className="space-y-4">
                  <div className="flex items-start gap-2">
                    <div className="w-6 h-6 bg-red-200 rounded"></div>
                    <p className="text-sky-50 text-base font-semibold font-['IRANYekanX'] leading-normal text-right">
                      دفتر تهران: تهران، ونک پارک، خیابان شیراز جنوبی، پایین تر از بزرگراه همت، پلاک ۲۰، برج سبز، طبقه دهم ، واحد ۲۱ ، موسسه مهاجرتی ورسای
                    </p>
                  </div>
                  <div className="flex items-end gap-2">
                    <div className="w-6 h-6 bg-red-200 rounded"></div>
                    <p className="text-sky-50 text-base font-semibold font-['IRANYekanX'] leading-normal text-right">
                      دفتر فرانسه: 29A Route de Woippy, Metz 57050, France
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-12 pt-8 border-t border-blue-950">
              <div className="flex flex-col items-center space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-sky-50 rounded"></div>
                  <div className="w-6 h-6 bg-sky-50 rounded"></div>
                  <div className="w-6 h-6 bg-sky-50 rounded"></div>
                  <div className="w-6 h-6 bg-sky-50 rounded"></div>
                </div>
                <div className="w-full h-px bg-blue-950"></div>
                <p className="text-slate-200 text-base font-semibold font-['IRANYekanX'] leading-normal text-center">
                  تمام حقوق این وبسایت متعلق به موسسه مهاجرتی <span className="text-white">ورسای</span> است.
                </p>
              </div>
            </div>
          </Container>
        </footer>
      </div>
    </>
  );
};

export default CanadaExpressEntryPage;
