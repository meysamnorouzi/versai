import React from 'react'
import FAQSection from '../components/ui/FAQSection'
import RelatedArticlesSection from '../components/ui/RelatedArticlesSection'
import { FAQItem, RelatedArticle } from '../types'

const PRFrancePage: React.FC = () => {

  // FAQ data
  const faqItems: FAQItem[] = [
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
      answer: "مدارک اصلی شامل پاسپورت، مدرک تحصیلی، گواهی تمکن مالی، بیمه درمانی و مدارک زبان فرانسه است."
    }
  ]

  // Related articles data
  const relatedArticles: RelatedArticle[] = [
    {
      title: "مزایای دوره زبان کشور فرانسه",
      image: "https://www.figma.com/api/mcp/asset/d5ffaa7c-b8ed-4b0d-88da-88d6c42b3ada",
      link: "/articles/french-language-course-benefits"
    },
    {
      title: "شرایط درخواست ویزای دیجیتال نومد اسپانیا",
      image: "https://www.figma.com/api/mcp/asset/0d41dbe2-6de4-4174-8066-0c8e6d6d60a1",
      link: "/articles/spain-digital-nomad-visa"
    },
    {
      title: "معرفی دانشگاه UCLY شهر لیون فرانسه",
      image: "https://www.figma.com/api/mcp/asset/b7e7b437-d958-4bdf-853b-f31f8fcfebf6",
      link: "/articles/ucly-university-lyon-france"
    }
  ]

  return (
    <div className="w-full bg-[#f2f1f1] text-lg text-[#6d6e70] font-['IRANYekanX']">
      {/* Background decorative elements */}
      <div className="absolute h-[65.92%] w-[171.9%] top-[-19.81%] right-[-50.1%] bottom-[53.88%] left-[-21.81%] max-w-full overflow-hidden max-h-full object-contain">
        <img 
          src="https://www.figma.com/api/mcp/asset/08f154d3-ab9a-4e22-9eb3-10ea960712e6" 
          alt="" 
          className="w-full h-full object-contain"
        />
      </div>
      <div className="absolute h-[65.92%] w-[171.9%] top-[21.51%] right-[-50.1%] bottom-[12.57%] left-[-21.81%] max-w-full overflow-hidden max-h-full object-contain">
        <img 
          src="https://www.figma.com/api/mcp/asset/08f154d3-ab9a-4e22-9eb3-10ea960712e6" 
          alt="" 
          className="w-full h-full object-contain"
        />
      </div>



      {/* Hero Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col items-center gap-8 text-center text-[32px] text-[#316086]">
            <h1 className="text-[32px] font-extrabold leading-[1.41]">
              اقامت در فرانسه
            </h1>
            <div className="max-w-4xl text-lg leading-[1.53] font-medium text-[#6d6e70] text-right">
              <p className="mb-4">
                مهاجرت به فرانسه روش های مختلفی دارد و هر فرد با توجه به شرایطی که دارد می تواند بهترین روش مهاجرت را انتخاب و اقدامات لازم را انجام دهد. نگران نباشید ما تمام این روش ها را می دانیم و با دغدغه های شما آشنا هستیم. در این مقاله سعی داریم به صورت مختصر و مفید اطلاعات مورد نیاز را در اختیار شما قرار دهیم،
              </p>
              <p>به طور کلی راه های مهاجرت به فرانسه عبارت اند از:</p>
            </div>
          </div>
        </div>
      </section>

      {/* Immigration Methods */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap items-center justify-center gap-16 text-center text-[#316086]">
            <div className="flex flex-col items-center gap-1 min-w-[52px]">
              <img className="w-12 h-12" src="https://www.figma.com/api/mcp/asset/d7dfabc3-b50b-46f6-b8a6-4e34aa280da2" alt="تولد" />
              <div className="text-center">تولد</div>
            </div>
            <div className="flex flex-col items-center gap-1 min-w-[52px]">
              <img className="w-12 h-12" src="https://www.figma.com/api/mcp/asset/38c67111-d863-488a-9134-6bd2685f8a8f" alt="ازدواج" />
              <div className="text-center">ازدواج</div>
            </div>
            <div className="flex flex-col items-center gap-1 min-w-[83px]">
              <img className="w-12 h-12" src="https://www.figma.com/api/mcp/asset/717e3575-75cf-4ec6-906d-84bd58d1d015" alt="پناهندگی" />
              <div className="text-center">پناهندگی</div>
            </div>
            <div className="flex flex-col items-center gap-1 min-w-[116px]">
              <img className="w-12 h-12" src="https://www.figma.com/api/mcp/asset/cb157c25-33e1-4b95-9818-ae929217cb0d" alt="سرمایه گذاری" />
              <div className="text-center">سرمایه گذاری</div>
            </div>
            <div className="flex flex-col items-center gap-1 min-w-[55px]">
              <img className="w-12 h-12" src="https://www.figma.com/api/mcp/asset/9a837890-e17c-4024-945e-28798bb1da21" alt="کاری" />
              <div className="text-center">کاری</div>
            </div>
            <div className="flex flex-col items-center gap-1 min-w-[86px]">
              <img className="w-12 h-12" src="https://www.figma.com/api/mcp/asset/5a8dacd3-b0c1-4a64-8c40-1ed8eb007a19" alt="تحصیلی" />
              <div className="text-center">تحصیلی</div>
            </div>
          </div>
        </div>
      </section>

      {/* Banner Section */}
      <section className="relative h-[399px] text-center text-[32px] text-white overflow-hidden">
        <div className="absolute inset-0">
          <img className="absolute top-[58px] left-0 w-full h-[294px] object-cover" src="https://www.figma.com/api/mcp/asset/cd18f91d-c272-424e-8fd0-a2fb76f32c4e" alt="" />
          <div className="absolute top-0 left-[146px] w-[490px] h-full">
            <img className="absolute top-0 left-0 w-full h-full object-cover" src="https://www.figma.com/api/mcp/asset/d59f4b12-83bc-4109-875d-087bb570463d" alt="" />
          </div>
        </div>
        <div className="relative z-10 flex flex-col items-center justify-center h-full">
          <div className="leading-[1.41] font-extrabold w-[454px] h-[86px] [text-shadow:0px_0px_6px_rgba(255,255,255,0.71)]">
            <p className="m-0">آینده‌تان در فرانسه،</p>
            <p className="m-0"> با یک مسیر ساده آغاز می‌شود.</p>
          </div>
          <div className="mt-8 rounded-[32px] bg-[#d74a3c] border border-[#e5867d] flex items-center justify-center py-3 px-6 text-left text-lg text-[#fdfeff]">
            <b className="leading-[1.1]">درخواست مشاوره</b>
          </div>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col items-end gap-6 text-right text-[24px] text-[#b23124]">
            <div className="w-full flex flex-col items-end gap-3">
              <div className="flex items-start justify-end gap-2">
                <div className="max-w-[746px]">
                  <h2 className="leading-[1.1] text-[24px] font-bold">چگونه می توانیم بعد از مهاجرت به فرانسه، اقامت دائم فرانسه را بگیریم؟</h2>
                </div>
                <img className="w-8 h-8 flex-shrink-0" src="https://www.figma.com/api/mcp/asset/288ea5dc-3207-4e5c-88b0-fd3b3d64aa6d" alt="" />
              </div>
              <div className="w-full text-lg leading-[1.53] font-medium text-[#6d6e70]">
                <p className="mb-4">
                  افراد عادی معمولا اگر بتوانند به مدت 5 سال در فرانسه بمانند (از طریق روش های مهاجرت که اشاره می شود)، در این صورت می توانند تقاضای اقامت دائم نمایند. اما افرادی که از دانشگاه های فرانسه فارغ التحصیل شده اند، دو سال بعد از اتمام درس می توانند درخواست اقامت دائم نمایند. سوالی که در اینجا ممکن است برایتان پیش بیاید این است که بعد از پایان تحصیل فرد باید مجددا راهی برای ماندن در فرانسه پیدا کند، در این شرایط می توانید ویزای کار گرفته یا مجددا ادامه تحصیل دهید. در هر دو حالت فرد می تواند بعد از گذشت دو سال نسبت به دریافت اقامت دائم در فرانسه اقدام نماید.
                </p>
                <p>در موارد زیر چهار روش ذکر شده است که می توان به وسیله آن اقامت کشور فرانسه را دریافت کرد.</p>
              </div>
            </div>
            <div className="w-full flex flex-col items-end gap-4 text-base text-[#316086]">
              <div className="flex items-center gap-2">
                <div className="max-w-[614px] font-medium leading-[1.61]">
                  تولد در فرانسه: افرادی که در فرانسه متولد می شوند، در ۱۸ سالگی ملیت فرانسوی می گیرند.
                </div>
                <img className="w-6 h-6 flex-shrink-0" src="https://www.figma.com/api/mcp/asset/2b7d9432-307f-4b52-8975-b941c6421a1a" alt="" />
              </div>
              <div className="flex items-center gap-2">
                <div className="max-w-[614px] font-medium leading-[1.61]">
                  داشتن پدر یا مادر فرانسوی: افرادی که والدین آن ها (پدر یا مادر) فرانسوی است.
                </div>
                <img className="w-6 h-6 flex-shrink-0" src="https://www.figma.com/api/mcp/asset/2b7d9432-307f-4b52-8975-b941c6421a1a" alt="" />
              </div>
              <div className="w-full flex items-center justify-end gap-2">
                <div className="max-w-[907px] font-medium leading-[1.61]">
                  اقامت در فرانسه بیش از ۵ سال: افرادی که بیشتر از پنج سال در فرانسه اقامت داشته باشند می توانند برای اقامت فرانسه اقدام کنند.
                </div>
                <img className="w-6 h-6 flex-shrink-0" src="https://www.figma.com/api/mcp/asset/2b7d9432-307f-4b52-8975-b941c6421a1a" alt="" />
              </div>
              <div className="flex items-center gap-2">
                <div className="max-w-[735px] font-medium leading-[1.61]">
                  ازدواج با فرد فرانسوی: از طریق ازدواج با یک فرانسوی بعد از ۴ سال می توان تقاضای ملیت فرانسوی کرد.
                </div>
                <img className="w-6 h-6 flex-shrink-0" src="https://www.figma.com/api/mcp/asset/2b7d9432-307f-4b52-8975-b941c6421a1a" alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Consultation Form Section */}
      <section className="relative py-16 px-4 text-right text-sm text-[#f2f9ff]">
        <div className="max-w-7xl mx-auto">
          <div className="relative rounded-2xl overflow-hidden h-[624px]">
            <img className="absolute inset-0 w-full h-full object-cover" src="https://www.figma.com/api/mcp/asset/15f8d84a-2eaf-46e7-99da-a49a81d87804" alt="" />
            <div className="relative z-10 p-8 h-full flex flex-col justify-center">
              <h3 className="text-[20px] leading-[1.1] text-left mb-8">ثبت درخواست مشاوره با ورسای</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div className="flex flex-col items-end gap-2">
                  <div className="w-full">
                    <span className="text-[#f2c3be]">*</span>
                    <span className="text-[#f2f9ff]">نام و نام خانوادگی</span>
                  </div>
                  <div className="w-full rounded-2xl bg-[#f2f9ff] border border-[#cbcbcb] flex items-center justify-end p-3 text-[#6d6e70]">
                    <div className="font-medium">نام و نام خانوادگی خود را وارد کنید.</div>
                  </div>
                </div>
                <div className="flex flex-col items-end gap-2">
                  <div className="w-full">
                    <span className="text-[#f2c3be]">*</span>
                    <span className="text-[#f2f9ff]">شماره تماس</span>
                  </div>
                  <div className="w-full rounded-2xl bg-[#f2f9ff] border border-[#cbcbcb] flex items-center justify-end p-3 text-[#6d6e70]">
                    <div className="font-medium">شماره تماس خود را وارد کنید.</div>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div className="flex flex-col items-end gap-2">
                  <div className="w-full">
                    <span className="text-[#f2c3be]">*</span>
                    <span className="text-[#f2f9ff]">موضوع مشاوره</span>
                  </div>
                  <div className="w-full rounded-2xl bg-[#f2f9ff] border border-[#cbcbcb] h-[45px] flex items-center justify-between py-2 px-3 text-[#6d6e70]">
                    <img className="w-6 h-6" src="https://www.figma.com/api/mcp/asset/4371ddbb-0b47-4ddf-9edc-b2d7c707be12" alt="" />
                    <div className="font-medium">موضوع مشاوره را انتخاب کنید.</div>
                  </div>
                </div>
                <div className="flex flex-col items-end gap-2">
                  <div className="w-full">
                    <span className="text-[#f2c3be]">*</span>
                    <span className="text-[#f2f9ff]">ایمیل</span>
                  </div>
                  <div className="w-full rounded-2xl bg-[#f2f9ff] border border-[#cbcbcb] flex items-center justify-end p-3 text-[#6d6e70]">
                    <div className="font-medium">آدرس ایمیل خود را وارد کنید.</div>
                  </div>
                </div>
              </div>

              <div className="mb-6">
                <div className="mb-2">متن پیام</div>
                <div className="rounded-2xl bg-[#f2f9ff] border border-[#cbcbcb] h-[92px] flex items-start justify-end p-3 text-[#6d6e70]">
                  <div className="font-medium">در صورت تمایل، متن پیام خود را بنویسید.</div>
                </div>
              </div>

              <div className="flex justify-center mb-8">
                <div className="rounded-[32px] bg-[#d74a3c] border border-[#e5867d] flex items-center justify-center py-3 px-6 text-left text-lg">
                  <b className="leading-[1.1]">ارسال درخواست</b>
                </div>
              </div>

              <div className="flex flex-col items-center gap-4 text-center text-[20px] text-white">
                <div className="flex items-center gap-2">
                  <img className="w-6 h-6" src="https://www.figma.com/api/mcp/asset/442b3b5f-d359-4c26-b723-e653ba4c7d55" alt="" />
                  <div className="font-medium">۰۲۱۲۸۴۲۱۶۹۰</div>
                </div>
                <div className="rounded-[32px] bg-[#f2f9ff] border border-[#d74a3c] h-11 flex items-center justify-center py-3 px-6 gap-2 text-left text-lg text-[#d74a3c]">
                  <img className="w-6 h-6" src="https://www.figma.com/api/mcp/asset/e6241416-3500-4b55-a174-73ae2aa73395" alt="" />
                  <b className="leading-[1.1]">ارتباط در واتساپ</b>
                </div>
              </div>
            </div>
          </div>
        </div>
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
  )
}

export default PRFrancePage
