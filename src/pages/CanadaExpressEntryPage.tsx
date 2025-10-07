import React from 'react';
import SEOHead from '../components/seo/SEOHead';
import Container from '../components/ui/Container';
import Button from '../components/ui/Button';
import Card from '../components/ui/Card';
import Icon from '../components/ui/Icon';
import ConsultationForm from '../components/ui/ConsultationForm';
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
      image: "/images/blog-page/Rectangle 41.png",
      link: "/articles/french-language-course-benefits",
      excerpt: "اگر به دنبال تقویت زبان فرانسوی هستید، این مقاله راهنمای شماست."
    },
    {
      title: "شرایط درخواست ویزای دیجیتال نومد اسپانیا",
      image: "/images/blog-page/Rectangle 41(1).png",
      link: "/articles/spain-digital-nomad-visa",
      excerpt: "از مدارک تا زمان‌بندی، هرآنچه برای این ویزا باید بدانید."
    },
    {
      title: "معرفی دانشگاه UCLY شهر لیون فرانسه",
      image: "/images/blog-page/Rectangle 41(2).png",
      link: "/articles/ucly-university-lyon",
      excerpt: "نگاهی به دانشگاه UCLY و فرصت‌های تحصیلی در شهر لیون."
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
             
              <div className="flex justify-center gap-10 mb-8">
                <Icon 
                  section="easyImmigration" 
                  name="component" 
                  className="w-12 h-12" 
                  alt="Component" 
                />
                <Icon 
                  section="easyImmigration" 
                  name="delivery" 
                  className="w-12 h-12" 
                  alt="Delivery" 
                />
                <Icon 
                  section="easyImmigration" 
                  name="coins" 
                  className="w-12 h-12" 
                  alt="Coins" 
                />
              </div>
              <p className="text-cyan-800 text-sm font-semibold font-['IRANYekanX'] leading-tight mb-8 max-w-2xl mx-auto">
                متقاضیان دارای تحصیلات دانشگاهی یا کارشناسی، سابقه کار مرتبط، سطح زبان قابل قبول، و سازگاری با نیازهای بازار کار کانادا (مثلاً در زمینه‌های تقاضا محور مانند فناوری، بهداشت، مهندسی، و خدمات)
              </p>
            </div>

            {/* Benefits Section */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            <div className="space-y-4">
                <h2 className="text-red-700 text-2xl font-semibold font-['IRANYekanX'] leading-relaxed text-right">مزایای اکسپرس انتری</h2>
                <div className="space-y-4">
                  {benefits.map((benefit, index) => (
                    <div key={index} className="flex items-start gap-2 text-right">
                <img src="/icons/france office page/Group.svg" alt="" className="w-6 h-6 flex-shrink-0" />
                <p className="text-cyan-800 text-base font-medium font-['IRANYekanX'] leading-relaxed">{benefit}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div className="relative">
                <img 
                  src="/images/canada-express-entry-page/pexels-olly-3777559 1.png" 
                  alt="Canada Express Entry" 
                  className="w-full h-96 object-cover rounded-2xl border border-stone-300"
                />
              </div>
              
            </div>
          </Container>
        </section>

        {/* Banner Section */}
        <section className="relative py-20 mb-16">
          <div className="absolute inset-0">
            <img
              src="/images/canada-immigration-page/Rectangle 66.png"
              alt="Canada Immigration"
              className="w-full h-full object-cover"
            />
          </div>
          <Container>
            <div className="relative text-center text-white">
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
            <Card className="bg-[#F2F9FF] border-red-200 p-8 border">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

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
                <div className="relative">
                  <img 
                    src="/images/canada-express-entry-page/2-etoiles-bienvenue-en-france-2_petit 1.png" 
                    alt="CRS Factors" 
                    className="w-2/3 object-cover rounded-2xl mx-auto"
                  />
                </div>
              </div>
            </Card>
          </Container>
        </section>

        {/* Consultation Form Section */}
        <section className="py-16">
          <Container>
            <ConsultationForm backgroundImageSrc="/images/form-bgs/IMG_9564.PNG" />
          </Container>
        </section>


        {/* Related Articles Section */}
        <RelatedArticlesSection 
          articles={relatedArticles}
          title="مقالات مرتبط"
          showViewAll={true}
          viewAllLink="/articles"
          className="py-16"
        />

        {/* FAQ Section */}
        <FAQSection 
          faqItems={faqItems}
          title="سوالات متداول"
          className="py-16"
        />


      </div>
    </>
  );
};

export default CanadaExpressEntryPage;
