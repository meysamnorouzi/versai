import React from 'react';
import SEOHead from '../components/seo/SEOHead';
import Container from '../components/ui/Container';
import Button from '../components/ui/Button';
import Input from '../components/ui/Input';
import Card from '../components/ui/Card';
import FAQSection from '../components/ui/FAQSection';
import RelatedArticlesSection from '../components/ui/RelatedArticlesSection';

const FranceVisaPage: React.FC = () => {

  const faqData = [
    {
      question: "اولین گام اقدام برای دوره‌های زبان چیست؟",
      answer: "اولین گام برای اقدام به دوره‌های زبان، انتخاب دوره مناسب و بررسی شرایط پذیرش است."
    },
    {
      question: "مشاوره در ورسای چگونه برگزار می‌شود و هزینه‌اش چقدر است؟",
      answer: "مشاوره در ورسای به صورت حضوری و آنلاین برگزار می‌شود و هزینه آن بسته به نوع مشاوره متفاوت است."
    },
    {
      question: "مدت زمان لازم تا شروع دوره زبان معمولاً چقدر است؟",
      answer: "مدت زمان لازم برای شروع دوره زبان معمولاً 2-4 ماه است که شامل آماده‌سازی مدارک و دریافت ویزا می‌شود."
    },
    {
      question: "شرایط لازم برای شرکت در دوره زبان چیست؟",
      answer: "شرایط اصلی شامل داشتن مدرک دیپلم، تسلط نسبی به زبان فرانسه و تمکن مالی کافی است."
    },
    {
      question: "آیا ورسای پرونده اکسپرس انتری را به‌صورت کامل آماده و ثبت می‌کند؟",
      answer: "بله، ورسای تمام مراحل آماده‌سازی و ثبت پرونده اکسپرس انتری را به صورت کامل انجام می‌دهد."
    },
    {
      question: "چه مدارکی برای پروندهٔ اقامت تحصیلی فرانسه لازم است؟",
      answer: "مدارک اصلی شامل پاسپورت، مدارک تحصیلی، گواهی تمکن مالی، بیمه درمانی و نامه پذیرش از دانشگاه است."
    }
  ];

  const relatedArticles = [
    {
      title: "مزایای دوره زبان کشور فرانسه",
      image: "/images/france-visa-page/pexels-mikhail-nilov-8430274 1.png"
    },
    {
      title: "شرایط درخواست ویزای دیجیتال نومد اسپانیا",
      image: "/images/france-visa-page/Rectangle 49 (1).png"
    },
    {
      title: "معرفی دانشگاه UCLY شهر لیون فرانسه",
      image: "/images/france-visa-page/Rectangle 71.png"
    }
  ];

  const visaTypes = [
    {
      title: "ویزای ۱ بار ورود (Single)",
      description: "با این نوع ویزا شما تنها ۱ بار امکان ورود به فرانسه و به طور کلی کشورهای حوزه شنگن را خواهید داشت. بعد از اینکه وارد فرانسه شدید و در مدت زمان تعیین شده ویزا، اقامت در فرانسه را تجربه کردید، با پایان اعتبار ویزا و خروج از کشور فرانسه ویزای شما باطل می‌شود و برای ورود مجدد به فرانسه باید دوباره درخواست ویزا بدهید."
    },
    {
      title: "ویزای ۲ بار ورود (Double)",
      description: "با ویزای ۲ بار ورود، شما حداکثر ۲ بار اجازه ورود به کشورهای حوزه شنگن را خواهید داشت. برای مثال شما بعد از دریافت ویزای شنگن کوتاه مدت وارد فرانسه می‌شوید. سپس، فرانسه را به مقصد یک کشور دیگر ترک می‌کنید. شما بعد از این سفر ۱ بار دیگر می‌توانید وارد حوزه شنگن بشوید. با دومین خروج شما از حوزه شنگن، ویزای شما دیگر اعتبار نخواهد داشت."
    },
    {
      title: "ویزای ورود متعدد (Multiple)",
      description: "شما با این نوع ویزا می‌توانید در طول مدت زمان اعتبار آن بدون محدودیت در رفت و آمد، به کشورهای حوزه شنگن وارد و از آن‌ها خارج شوید. این نوع ویزا هم برای اقامت‌های کوتاه مدت و هم برای اقامت‌های بلند مدت صادر می‌شود."
    }
  ];

  const reasons = [
    { icon: "🏖️", title: "سفر توریستی" },
    { icon: "💼", title: "سفر کاری" },
    { icon: "📚", title: "تحصیل در فرانسه\nدوره زبان" },
    { icon: "💼", title: "سفر تجاری/بازرگانی" },
    { icon: "👨‍👩‍👧‍👦", title: "دیدار خانوادگی" },
    { icon: "🎓", title: "شرکت در دوره آموزشی" },
    { icon: "⚽", title: "شرکت در دوره ورزشی/هنری" }
  ];

  return (
    <>
      <SEOHead
        title="ویزای کوتاه مدت فرانسه (Type C) | موسسه مهاجرتی ورسای"
        description="راهنمای کامل ویزای کوتاه مدت فرانسه (Type C) - شرایط، مدارک مورد نیاز، انواع ویزا و مراحل درخواست. مشاوره رایگان با کارشناسان ورسای."
        keywords="ویزای فرانسه, ویزای کوتاه مدت, ویزای شنگن, Type C, موسسه ورسای"
      />
      
      <div className="min-h-screen france-visa-bg relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="france-visa-bg-element-1" />
        <div className="france-visa-bg-element-2" />


        <Container>
          {/* Main Title */}
          <div className="text-center mt-16 mb-8">
            <h1 className="france-visa-title">
              ویزای کوتاه مدت فرانسه
              <span className="france-visa-subtitle"> (Type C)</span>
            </h1>
          </div>

          {/* Introduction */}
          <div className="text-right mb-12">
            <p className="france-visa-text mb-4">
              در راستای برنامه مهاجرت به فرانسه و در سری مقالات انواع ویزای فرانسه به ویزای کوتاه مدت فرانسه رسیدیم. در این مقاله سعی داریم تا به صورت اختصاصی در مورد ویزای کوتاه مدت فرانسه مواردی را با هم بررسی کنیم.
            </p>
            <p className="france-visa-text">
              بسیاری از افراد به دلایل کاری، خانوادگی، تحصیلی، توریستی و … برای دریافت ویزای کوتاه مدت فرانسه اقدام می‌کنند. با اخذ ویزای کوتاه مدت فرانسه (type C) شما می‌توانید تا حداکثر ۹۰ روز در فرانسه اقامت داشته باشید. اما نکته‌ای که در مورد ویزای کوتاه مدت فرانسه حائز اهمیت است، تعداد دفعاتی است که فرد مجاز است وارد کشور فرانسه شود. بر این اساس ویزای کوتاه مدت فرانسه به ۳ دسته تقسیم می‌شوند:
            </p>
          </div>

          {/* Visa Types Section */}
          <div className="mb-16">
            <div className="flex justify-center gap-8 mb-8">
              <div className="w-12 h-12 bg-red-700 rounded-full flex items-center justify-center">
                <div className="w-8 h-5 bg-white rounded-sm" />
              </div>
              <div className="w-12 h-12 bg-red-700 rounded-full flex items-center justify-center">
                <div className="w-8 h-5 bg-white rounded-sm" />
              </div>
              <div className="w-12 h-12 bg-red-700 rounded-full flex items-center justify-center">
                <div className="w-8 h-5 bg-white rounded-sm" />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {visaTypes.map((type, index) => (
                <Card key={index} className="p-6 text-center">
                  <h3 className="france-visa-card-title mb-4">
                    {type.title}
                  </h3>
                  <p className="france-visa-card-text">
                    {type.description}
                  </p>
                </Card>
              ))}
            </div>
          </div>

          {/* Reasons and Documents Section */}
          <div className="france-visa-blue-section p-12 mb-16 relative overflow-hidden">
            <div className="relative z-10">
              <h2 className="france-visa-white-text text-2xl font-semibold font-['IRANYekanX'] leading-relaxed text-right mb-8">
                دلیل درخواست ویزای کوتاه مدت فرانسه
              </h2>
              
              <p className="france-visa-white-text text-right mb-8">
                "دلیل حضور در فرانسه" یکی از اصلی‌ترین موارد برای تعیین نوع ویزا است. افراد مختلف می‌توانند با توجه تمایلات و دلایل متفاوت برای صدور ویزای کوتاه مدت فرانسه اقدام نمایند که در اینجا به چند مورد اصلی آن اشاره می‌کنیم :
              </p>

              <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-6 mb-12">
                {reasons.map((reason, index) => (
                  <div key={index} className="text-center">
                    <div className="w-12 h-12 bg-slate-200 rounded-full flex items-center justify-center mx-auto mb-2">
                      <span className="text-2xl">{reason.icon}</span>
                    </div>
                    <p className="text-white text-base font-medium font-['IRANYekanX'] leading-relaxed whitespace-pre-line">
                      {reason.title}
                    </p>
                  </div>
                ))}
              </div>

              <h3 className="france-visa-red-text text-right mb-6">
                مدارک موردنیاز ویزای کوتاه مدت
              </h3>

              <div className="france-visa-white-text text-right">
                <p className="mb-4">
                  متقاضیان دریافت ویزای کوتاه مدت فرانسه باید نسبت به ارائه یک سری مدارک مشخص اقدام نمایند و آن‌ها را برای بررسی درخواست ویزا به{' '}
                  <a href="https://visa.vfsglobal.com/irn/fa/fra" className="underline">
                    سازمان VFS Global
                  </a>{' '}
                  ارائه دهند :
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="text-red-200">–</span>
                    <span>فرم ویزا</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-200">–</span>
                    <span>پاسپورت</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-200">–</span>
                    <span>مدارک مبنی بر دلایل شما برای اقامت در حوزه شنگن</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-200">–</span>
                    <span>مدارک مبنی بر اثبات منابع مالی شما برای تامین نیازهای اقتصادی در حین اقامت در حوزه شنگن</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-200">–</span>
                    <span>قرارداد بیمه</span>
                  </li>
                </ul>
                <p className="mt-4">
                  سازمان VFS global پرونده شما را به{' '}
                  <a href="https://ir.ambafrance.org/-%D9%81%D8%A7%D8%B1%D8%B3%DB%8C-" className="underline">
                    سفارت فرانسه در ایران
                  </a>{' '}
                  ارجاع می‌دهد. پرونده درخواست ویزای شما توسط کارشناسان سفارت فرانسه در ایران بررسی می‌شود و در صورت تایید صلاحیت، ویزا شما صادر خواهد شد.
                </p>
              </div>
            </div>
          </div>

          {/* Extension Section */}
          <div className="mb-16">
            <h2 className="text-red-700 text-xl font-semibold font-['IRANYekanX'] leading-snug text-right mb-6">
              تمدید ویزای کوتاه مدت فرانسه
            </h2>
            <div className="text-cyan-800 text-lg font-medium font-['IRANYekanX'] leading-7 text-right">
              <p className="mb-4">
                هنگامی که شما در فرانسه هستید می‌توانید مدت اعتبار ویزای خود را تمدید کنید. اما این تمدید به دو دلیل قابل انجام است:
              </p>
              <ul className="space-y-2 mb-4">
                <li className="flex items-start gap-2">
                  <span>–</span>
                  <span>مسائل خانوادگی (فوت، بیماری، تصادف در خانواده)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span>–</span>
                  <span>مسائل کاری</span>
                </li>
              </ul>
              <p>
                این شرایط خاص است و مدت تمدید حداکثر ۹۰ روزی خواهد بود و متقاضی (غیر از موارد اضطراری و مسائل مربوط به حقوق بشر) ملزم به پرداخت ۳۰ یورو خواهد بود.
              </p>
            </div>
          </div>

          {/* Conclusion */}
          <div className="text-right mb-16">
            <p className="text-neutral-500 text-lg font-medium font-['IRANYekanX'] leading-7">
              در این مقاله با ویزای کوتاه مدت فرانسه (Type C) آشنا شدیم. خواندیم که اعتبار این نوع ویزا حداکثر ۹۰ روز است و زمان صدور، انقضاء ویزا و دفعات ورود و خروج به فرانسه با توجه به دلایل ارائه شده توسط افراد متقاضی می‌تواند متفاوت باشد. ویزای کوتاه مدت فرانسه در بعضی موارد خاص قابل تمدید است.
            </p>
          </div>

          {/* Consultation Form */}
          <div className="bg-stone-300/25 rounded-2xl border-2 border-slate-200 p-12 mb-16 relative">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent to-blue-950/20 rounded-2xl" />
            <div className="relative z-10">
              <h2 className="text-sky-50 text-xl font-semibold font-['IRANYekanX'] leading-snug text-right mb-8">
                ثبت درخواست مشاوره با ورسای
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div className="space-y-2">
                  <label className="text-sky-50 text-sm font-semibold font-['IRANYekanX'] leading-tight text-right block">
                    <span className="text-red-200">*</span>نام و نام خانوادگی
                  </label>
                  <Input
                    placeholder="نام و نام خانوادگی خود را وارد کنید."
                    className="bg-sky-50 border-stone-300 text-neutral-400"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sky-50 text-sm font-semibold font-['IRANYekanX'] leading-tight text-right block">
                    <span className="text-red-200">*</span>شماره تماس
                  </label>
                  <Input
                    placeholder="شماره تماس خود را وارد کنید."
                    className="bg-sky-50 border-stone-300 text-neutral-400"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div className="space-y-2">
                  <label className="text-sky-50 text-sm font-semibold font-['IRANYekanX'] leading-tight text-right block">
                    <span className="text-red-200">*</span>موضوع مشاوره
                  </label>
                  <div className="bg-sky-50 border border-stone-300 rounded-2xl px-3 py-2 flex items-center justify-between">
                    <div className="w-6 h-6 flex items-center justify-center">
                      <div className="w-3 h-1.5 bg-neutral-400" />
                    </div>
                    <span className="text-neutral-400 text-sm font-medium font-['IRANYekanX'] leading-tight text-right">
                      موضوع مشاوره را انتخاب کنید.
                    </span>
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sky-50 text-sm font-semibold font-['IRANYekanX'] leading-tight text-right block">
                    <span className="text-red-200">*</span>ایمیل
                  </label>
                  <Input
                    placeholder="آدرس ایمیل خود را وارد کنید."
                    className="bg-sky-50 border-stone-300 text-neutral-400"
                  />
                </div>
              </div>

              <div className="mb-6">
                <label className="text-sky-50 text-sm font-semibold font-['IRANYekanX'] leading-tight text-right block mb-2">
                  متن پیام
                </label>
                <textarea
                  placeholder="در صورت تمایل، متن پیام خود را بنویسید."
                  className="w-full h-24 bg-sky-50 border border-stone-300 rounded-2xl p-3 text-neutral-400 text-sm font-medium font-['IRANYekanX'] leading-tight text-right resize-none"
                />
              </div>

              <div className="flex justify-center">
                <Button className="bg-red-500 border-red-400 text-sky-50 px-6 py-3 rounded-[32px] text-lg font-bold font-['IRANYekanX'] leading-tight">
                  ارسال درخواست
                </Button>
              </div>

              <div className="mt-8 flex items-center justify-center gap-2">
                <div className="w-6 h-6 bg-red-200 rounded-full flex items-center justify-center">
                  <div className="w-4 h-4 bg-white rounded-sm" />
                </div>
                <span className="text-stone-50 text-xl font-medium font-['IRANYekanX'] leading-7">
                  ۰۲۱۲۸۴۲۱۶۹۰
                </span>
              </div>

              <div className="mt-4 flex justify-center">
                <Button className="bg-sky-50 border-red-500 text-red-500 px-6 py-3 rounded-[32px] text-lg font-bold font-['IRANYekanX'] leading-tight flex items-center gap-2">
                  <div className="w-6 h-6 bg-red-500 rounded-full flex items-center justify-center">
                    <div className="w-4 h-4 bg-white rounded-sm" />
                  </div>
                  ارتباط در واتساپ
                </Button>
              </div>
            </div>
          </div>

          {/* Related Articles */}
          <RelatedArticlesSection 
            articles={relatedArticles.map(article => ({
              ...article,
              link: '/articles'
            }))}
            title="مقالات مرتبط"
            showViewAll={true}
            viewAllLink="/articles"
            className="mb-16"
          />

          {/* FAQ Section */}
          <FAQSection 
            faqItems={faqData}
            title="سوالات متداول"
            className="mb-16"
          />
        </Container>
      </div>
    </>
  );
};

export default FranceVisaPage;