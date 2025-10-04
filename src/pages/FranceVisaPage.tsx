import React, { useState } from 'react'
import { FunctionComponent } from 'react'
import Header from '../components/layout/Header'
import Footer from '../components/layout/Footer'
import Container from '../components/ui/Container'
import Icon from '../components/ui/Icon'
import { ChevronDown, ChevronUp, Phone, Mail, MapPin, ExternalLink } from 'lucide-react'

const FranceVisaPage: FunctionComponent = () => {
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null)
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    subject: '',
    message: ''
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log('Form submitted:', formData)
  }

  const toggleFaq = (index: number) => {
    setExpandedFaq(expandedFaq === index ? null : index)
  }

  const faqItems = [
    {
      question: "اولین گام اقدام برای دوره‌های زبان چیست؟",
      answer: "اولین گام، مشاوره با کارشناسان ما و تعیین سطح زبان شما است."
    },
    {
      question: "مشاوره در ورسای چگونه برگزار می‌شود و هزینه‌اش چقدر است؟",
      answer: "مشاوره به صورت حضوری و آنلاین برگزار می‌شود و کاملاً رایگان است."
    },
    {
      question: "مدت زمان لازم تا شروع دوره زبان معمولاً چقدر است؟",
      answer: "معمولاً 2-4 هفته پس از تکمیل مدارک، می‌توانید دوره را شروع کنید."
    },
    {
      question: "شرایط لازم برای شرکت در دوره زبان چیست؟",
      answer: "حداقل مدرک دیپلم و انگیزه قوی برای یادگیری زبان فرانسوی."
    },
    {
      question: "آیا ورسای پرونده اکسپرس انتری را به‌صورت کامل آماده و ثبت می‌کند؟",
      answer: "بله، ما تمام مراحل آماده‌سازی و ثبت پرونده اکسپرس انتری را انجام می‌دهیم."
    },
    {
      question: "چه مدارکی برای پروندهٔ اقامت تحصیلی فرانسه لازم است؟",
      answer: "مدارک تحصیلی، مدرک زبان، نامه پذیرش دانشگاه و مدارک مالی."
    }
  ]

  return (
    <div className="w-full relative bg-gray-50 min-h-screen" dir="rtl">
      {/* Top Contact Bar */}
      <div className="w-full bg-blue-50 h-10 flex items-center justify-between px-4">
        <div className="flex items-center gap-2 text-cyan-800">
          <Phone className="w-5 h-5" />
          <span className="text-sm font-medium">۰۲۱۲۸۴۲۱۶۹۰</span>
        </div>
        <div className="flex items-center gap-3">
          <a href="#" className="w-6 h-6 hover:opacity-80 transition-opacity">
            <Icon section="footer" name="whatsapp" className="w-6 h-6" alt="WhatsApp" />
          </a>
          <a href="#" className="w-6 h-6 hover:opacity-80 transition-opacity">
            <Icon section="footer" name="telegram" className="w-6 h-6" alt="Telegram" />
          </a>
          <a href="#" className="w-6 h-6 hover:opacity-80 transition-opacity">
            <Icon section="footer" name="instagram" className="w-6 h-6" alt="Instagram" />
          </a>
          <a href="#" className="w-6 h-6 hover:opacity-80 transition-opacity">
            <Icon section="footer" name="email" className="w-6 h-6" alt="Email" />
          </a>
        </div>
      </div>

      {/* Header */}
      <div className="w-full bg-gray-800 rounded-bl-2xl rounded-br-2xl border-b border-gray-100">
        <Container className="h-24 py-3 flex justify-between items-center gap-10">
          {/* Logo */}
          <div className="flex-shrink-0">
            <img 
              className="w-48 h-16" 
              src="/images/logo-white.png" 
              alt="موسسه مهاجرتی ورسای"
            />
          </div>

          {/* Navigation Items - Desktop Only */}
          <div className="hidden lg:flex justify-center items-center gap-24">
            <div className="flex justify-center items-center gap-8">
              <a href="#" className="text-center text-base font-semibold font-['IRANYekanX'] leading-normal text-cyan-200 hover:text-red-300 transition-colors">صفحه اصلی</a>
              <a href="#" className="text-center text-base font-semibold font-['IRANYekanX'] leading-normal text-red-300">فرانسه</a>
              <a href="#" className="text-center text-base font-semibold font-['IRANYekanX'] leading-normal text-cyan-200 hover:text-red-300 transition-colors">کانادا</a>
              <a href="#" className="text-center text-base font-semibold font-['IRANYekanX'] leading-normal text-cyan-200 hover:text-red-300 transition-colors">سایر کشورها</a>
              <a href="#" className="text-center text-base font-semibold font-['IRANYekanX'] leading-normal text-cyan-200 hover:text-red-300 transition-colors">مقالات</a>
              <a href="#" className="text-center text-base font-semibold font-['IRANYekanX'] leading-normal text-cyan-200 hover:text-red-300 transition-colors">دوره زبان</a>
              <a href="#" className="text-center text-base font-semibold font-['IRANYekanX'] leading-normal text-cyan-200 hover:text-red-300 transition-colors">تماس با ما</a>
            </div>
          </div>
          
          {/* Search Icon */}
          <div className="flex items-center gap-4">
            <button className="w-6 h-6 flex items-center justify-center text-cyan-200 hover:text-red-300 transition-colors">
              <Icon section="header" name="search" className="w-5 h-5" alt="Search" />
            </button>
          </div>
        </Container>
      </div>

      {/* Main Content */}
      <div className="w-full relative">
        {/* Hero Section */}
        <div className="w-full py-16 bg-gray-50">
          <Container>
            <div className="text-center mb-8">
              <h1 className="text-4xl font-extrabold text-gray-800 mb-4 leading-tight">
                ویزای کوتاه مدت فرانسه
                <span className="text-red-600"> (Type C)</span>
              </h1>
              <div className="max-w-5xl mx-auto text-lg font-medium text-gray-600 leading-relaxed">
                <p className="mb-4">
                  در راستای برنامه مهاجرت به فرانسه و در سری مقالات انواع ویزای فرانسه به ویزای کوتاه مدت فرانسه رسیدیم. در این مقاله سعی داریم تا به صورت اختصاصی در مورد ویزای کوتاه مدت فرانسه مواردی را با هم بررسی کنیم.
                </p>
                <p>
                  بسیاری از افراد به دلایل کاری، خانوادگی، تحصیلی، توریستی و … برای دریافت ویزای کوتاه مدت فرانسه اقدام می‌کنند. با اخذ ویزای کوتاه مدت فرانسه (type C) شما می‌توانید تا حداکثر ۹۰ روز در فرانسه اقامت داشته باشید. اما نکته‌ای که در مورد ویزای کوتاه مدت فرانسه حائز اهمیت است، تعداد دفعاتی است که فرد مجاز است وارد کشور فرانسه شود. بر این اساس ویزای کوتاه مدت فرانسه به ۳ دسته تقسیم می‌شوند:
                </p>
              </div>
            </div>
          </Container>
        </div>

        {/* Visa Types Section */}
        <div className="w-full py-16 bg-white">
          <Container>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
              {/* Vertical dividers */}
              <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-gray-300 transform -translate-x-1/2"></div>
              <div className="hidden md:block absolute left-1/4 top-0 bottom-0 w-px bg-gray-300 transform -translate-x-1/2"></div>
              <div className="hidden md:block absolute left-3/4 top-0 bottom-0 w-px bg-gray-300 transform -translate-x-1/2"></div>

              {/* Single Entry Visa */}
              <div className="text-center relative">
                <div className="w-12 h-12 mx-auto mb-4 bg-blue-100 rounded-lg flex items-center justify-center">
                  <span className="text-2xl font-bold text-blue-600">1</span>
                </div>
                <h3 className="text-xl font-bold text-red-600 mb-4">ویزای ۱ بار ورود (Single)</h3>
                <div className="h-px bg-gray-300 mb-4"></div>
                <p className="text-base font-medium text-gray-600 leading-relaxed">
                  با این نوع ویزا شما تنها ۱ بار امکان ورود به فرانسه و به طور کلی کشورهای حوزه شنگن را خواهید داشت. بعد از اینکه وارد فرانسه شدید و در مدت زمان تعیین شده ویزا، اقامت در فرانسه را تجربه کردید، با پایان اعتبار ویزا و خروج از کشور فرانسه ویزای شما باطل می‌شود و برای ورود مجدد به فرانسه باید دوباره درخواست ویزا بدهید.
                </p>
              </div>

              {/* Double Entry Visa */}
              <div className="text-center relative">
                <div className="w-12 h-12 mx-auto mb-4 bg-blue-100 rounded-lg flex items-center justify-center">
                  <span className="text-2xl font-bold text-blue-600">2</span>
                </div>
                <h3 className="text-xl font-bold text-red-600 mb-4">ویزای ۲ بار ورود (Double)</h3>
                <div className="h-px bg-gray-300 mb-4"></div>
                <p className="text-base font-medium text-gray-600 leading-relaxed">
                  با ویزای ۲ بار ورود، شما حداکثر ۲ بار اجازه ورود به کشورهای حوزه شنگن را خواهید داشت. برای مثال شما بعد از دریافت ویزای شنگن کوتاه مدت وارد فرانسه می‌شوید. سپس، فرانسه را به مقصد یک کشور دیگر ترک می‌کنید. شما بعد از این سفر ۱ بار دیگر می‌توانید وارد حوزه شنگن بشوید. با دومین خروج شما از حوزه شنگن، ویزای شما دیگر اعتبار نخواهد داشت.
                </p>
              </div>

              {/* Multiple Entry Visa */}
              <div className="text-center relative">
                <div className="w-12 h-12 mx-auto mb-4 bg-blue-100 rounded-lg flex items-center justify-center">
                  <span className="text-2xl font-bold text-blue-600">∞</span>
                </div>
                <h3 className="text-xl font-bold text-red-600 mb-4">ویزا ورود متعدد (Multiple)</h3>
                <div className="h-px bg-gray-300 mb-4"></div>
                <p className="text-base font-medium text-gray-600 leading-relaxed">
                  شما با این نوع ویزا می‌توانید در طول مدت زمان اعتبار آن بدون محدودیت در رفت و آمد، به کشورهای حوزه شنگن وارد و از آن‌ها خارج شوید. این نوع ویزا هم برای اقامت‌های کوتاه مدت و هم برای اقامت‌های بلند مدت صادر می‌شود.
                </p>
              </div>
            </div>
          </Container>
        </div>

        {/* Reasons Section */}
        <div className="w-full py-16 bg-blue-50">
          <Container>
            <div className="text-center mb-12">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">دلیل درخواست ویزای کوتاه مدت فرانسه</h2>
              <p className="text-base font-medium text-gray-600 leading-relaxed max-w-5xl mx-auto">
                "دلیل حضور در فرانسه" یکی از اصلی‌ترین موارد برای تعیین نوع ویزا است. افراد مختلف می‌توانند با توجه تمایلات و دلایل متفاوت برای صدور ویزای کوتاه مدت فرانسه اقدام نمایند که در اینجا به چند مورد اصلی آن اشاره می‌کنیم:
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 mb-12">
              <div className="text-center">
                <div className="w-12 h-12 mx-auto mb-4 bg-white rounded-lg flex items-center justify-center shadow-sm">
                  <span className="text-xl">🏃</span>
                </div>
                <p className="text-sm font-medium text-gray-700">شرکت در دوره ورزشی/هنری</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 mx-auto mb-4 bg-white rounded-lg flex items-center justify-center shadow-sm">
                  <span className="text-xl">📚</span>
                </div>
                <p className="text-sm font-medium text-gray-700">شرکت در دوره آموزشی</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 mx-auto mb-4 bg-white rounded-lg flex items-center justify-center shadow-sm">
                  <span className="text-xl">👨‍👩‍👧‍👦</span>
                </div>
                <p className="text-sm font-medium text-gray-700">دیدار خانوادگی</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 mx-auto mb-4 bg-white rounded-lg flex items-center justify-center shadow-sm">
                  <span className="text-xl">💼</span>
                </div>
                <p className="text-sm font-medium text-gray-700">سفر تجاری/بازرگانی</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 mx-auto mb-4 bg-white rounded-lg flex items-center justify-center shadow-sm">
                  <span className="text-xl">🎓</span>
                </div>
                <p className="text-sm font-medium text-gray-700">تحصیل در فرانسه / دوره زبان</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 mx-auto mb-4 bg-white rounded-lg flex items-center justify-center shadow-sm">
                  <span className="text-xl">💼</span>
                </div>
                <p className="text-sm font-medium text-gray-700">سفر کاری</p>
              </div>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 mx-auto mb-4 bg-white rounded-lg flex items-center justify-center shadow-sm">
                <span className="text-xl">🏖️</span>
              </div>
              <p className="text-sm font-medium text-gray-700">سفر توریستی</p>
            </div>
          </Container>
        </div>

        {/* Required Documents Section */}
        <div className="w-full py-16 bg-white">
          <Container>
            <div className="text-center mb-12">
              <h2 className="text-2xl font-bold text-pink-600 mb-4">مدارک موردنیاز ویزای کوتاه مدت</h2>
            </div>

            <div className="max-w-5xl mx-auto">
              <p className="text-base font-medium text-gray-600 leading-relaxed mb-6">
                متقاضیان دریافت ویزای کوتاه مدت فرانسه باید نسبت به ارائه یک سری مدارک مشخص اقدام نمایند و آن‌ها را برای بررسی درخواست ویزا به{' '}
                <a 
                  href="https://visa.vfsglobal.com/irn/fa/fra" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-blue-600 underline hover:text-blue-800"
                >
                  سازمان VFS Global
                </a>
                {' '}ارائه دهند:
              </p>

              <div className="space-y-3 mb-8">
                <div className="flex items-start gap-3">
                  <span className="text-pink-600 font-bold">–</span>
                  <span className="text-gray-600">فرم ویزا</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-pink-600 font-bold">–</span>
                  <span className="text-gray-600">پاسپورت</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-pink-600 font-bold">–</span>
                  <span className="text-gray-600">مدارک مبنی بر دلایل شما برای اقامت در حوزه شنگن</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-pink-600 font-bold">–</span>
                  <span className="text-gray-600">مدارک مبنی بر اثبات منابع مالی شما برای تامین نیازهای اقتصادی در حین اقامت در حوزه شنگن</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-pink-600 font-bold">–</span>
                  <span className="text-gray-600">قرارداد بیمه</span>
                </div>
              </div>

              <p className="text-base font-medium text-gray-600 leading-relaxed">
                سازمان VFS global پرونده شما را به{' '}
                <a 
                  href="https://ir.ambafrance.org/-%D9%81%D8%A7%D8%B1%D8%B3%DB%8C-" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-blue-600 underline hover:text-blue-800"
                >
                  سفارت فرانسه در ایران
                </a>
                {' '}ارجاع می‌دهد. پرونده درخواست ویزای شما توسط کارشناسان سفارت فرانسه در ایران بررسی می‌شود و در صورت تایید صلاحیت، ویزا شما صادر خواهد شد.
              </p>
            </div>
          </Container>
        </div>

        {/* Visa Extension Section */}
        <div className="w-full py-16 bg-gray-50">
          <Container>
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl font-bold text-red-600 mb-6">تمدید ویزای کوتاه مدت فرانسه</h2>
              
              <div className="text-base font-medium text-gray-600 leading-relaxed space-y-4">
                <p>
                  هنگامی که شما در فرانسه هستید می‌توانید مدت اعتبار ویزای خود را تمدید کنید. اما این تمدید به دو دلیل قابل انجام است:
                </p>
                <div className="space-y-2">
                  <p>– مسائل خانوادگی (فوت، بیماری، تصادف در خانواده)</p>
                  <p>– مسائل کاری</p>
                </div>
                <p>
                  این شرایط خاص است و مدت تمدید حداکثر ۹۰ روزی خواهد بود و متقاضی (غیر از موارد اضطراری و مسائل مربوط به حقوق بشر) ملزم به پرداخت ۳۰ یورو خواهد بود.
                </p>
                <p>
                  در این مقاله با ویزای کوتاه مدت فرانسه (Type C) آشنا شدیم. خواندیم که اعتبار این نوع ویزا حداکثر ۹۰ روز است و زمان صدور، انقضاء ویزا و دفعات ورود و خروج به فرانسه با توجه به دلایل ارائه شده توسط افراد متقاضی می‌تواند متفاوت باشد. ویزای کوتاه مدت فرانسه در بعضی موارد خاص قابل تمدید است.
                </p>
              </div>
            </div>
          </Container>
        </div>

        {/* Consultation Form Section */}
        <div className="w-full py-16 bg-gradient-to-br from-blue-900 to-blue-800 relative overflow-hidden">
          <div className="absolute inset-0 bg-black bg-opacity-20"></div>
          <Container className="relative z-10">
            <div className="max-w-4xl mx-auto">
              <div className="bg-white rounded-3xl p-8 shadow-2xl">
                <h2 className="text-2xl font-bold text-gray-800 text-center mb-8">ثبت درخواست مشاوره با ورسای</h2>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="block text-sm font-medium text-gray-700">
                        <span className="text-red-500">*</span> نام و نام خانوادگی
                      </label>
                      <input
                        type="text"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleInputChange}
                        placeholder="نام و نام خانوادگی خود را وارد کنید."
                        className="w-full p-3 border border-gray-300 rounded-2xl text-right focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="block text-sm font-medium text-gray-700">
                        <span className="text-red-500">*</span> شماره تماس
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="شماره تماس خود را وارد کنید."
                        className="w-full p-3 border border-gray-300 rounded-2xl text-right focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        required
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="block text-sm font-medium text-gray-700">
                        <span className="text-red-500">*</span> ایمیل
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="آدرس ایمیل خود را وارد کنید."
                        className="w-full p-3 border border-gray-300 rounded-2xl text-right focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="block text-sm font-medium text-gray-700">
                        <span className="text-red-500">*</span> موضوع مشاوره
                      </label>
                      <select
                        name="subject"
                        value={formData.subject}
                        onChange={handleInputChange}
                        className="w-full p-3 border border-gray-300 rounded-2xl text-right focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        required
                      >
                        <option value="">موضوع مشاوره را انتخاب کنید.</option>
                        <option value="visa">ویزای فرانسه</option>
                        <option value="study">تحصیل در فرانسه</option>
                        <option value="language">دوره زبان</option>
                        <option value="other">سایر موارد</option>
                      </select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="block text-sm font-medium text-gray-700">متن پیام</label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="در صورت تمایل، متن پیام خود را بنویسید."
                      rows={4}
                      className="w-full p-3 border border-gray-300 rounded-2xl text-right focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>

                  <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                    <button
                      type="submit"
                      className="w-full md:w-auto bg-red-600 text-white px-8 py-3 rounded-2xl font-bold hover:bg-red-700 transition-colors"
                    >
                      ارسال درخواست
                    </button>
                    
                    <div className="flex items-center gap-2 text-white">
                      <Phone className="w-6 h-6" />
                      <span className="font-medium">۰۲۱۲۸۴۲۱۶۹۰</span>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </Container>
        </div>

        {/* Related Articles Section */}
        <div className="w-full py-16 bg-white">
          <Container>
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">مقالات مرتبط</h2>
              <div className="flex items-center justify-center gap-2 text-blue-600 cursor-pointer hover:text-blue-800 transition-colors">
                <span>نمایش همه</span>
                <ExternalLink className="w-5 h-5" />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                <div className="h-48 bg-gray-200"></div>
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-gray-800 leading-relaxed">مزایای دوره زبان کشور فرانسه</h3>
                </div>
              </div>
              <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                <div className="h-48 bg-gray-200"></div>
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-gray-800 leading-relaxed">شرایط درخواست ویزای دیجیتال نومد اسپانیا</h3>
                </div>
              </div>
              <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                <div className="h-48 bg-gray-200"></div>
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-gray-800 leading-relaxed">معرفی دانشگاه UCLY شهر لیون فرانسه</h3>
                </div>
              </div>
            </div>
          </Container>
        </div>

        {/* FAQ Section */}
        <div className="w-full py-16 bg-gray-50">
          <Container>
            <div className="text-center mb-12">
              <h2 className="text-2xl font-bold text-gray-800">سوالات متداول</h2>
            </div>

            <div className="max-w-4xl mx-auto space-y-4">
              {faqItems.map((item, index) => (
                <div key={index} className="bg-white rounded-2xl border border-gray-200 overflow-hidden">
                  <button
                    onClick={() => toggleFaq(index)}
                    className="w-full p-6 flex items-center justify-between text-right hover:bg-gray-50 transition-colors"
                  >
                    <div className="flex items-center gap-4">
                      <span className="text-lg font-medium text-gray-800">{item.question}</span>
                    </div>
                    {expandedFaq === index ? (
                      <ChevronUp className="w-6 h-6 text-gray-500" />
                    ) : (
                      <ChevronDown className="w-6 h-6 text-gray-500" />
                    )}
                  </button>
                  {expandedFaq === index && (
                    <div className="px-6 pb-6">
                      <p className="text-gray-600 leading-relaxed">{item.answer}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </Container>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  )
}

export default FranceVisaPage
