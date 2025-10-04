import React from 'react'

const UCLYUniversitySection: React.FC = () => {
  return (
    <div className="w-full py-20 ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#fdf7f7] rounded-2xl outline outline-1 outline-offset-[-0.50px] outline-[#f2c3be] overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 p-4 sm:p-6 lg:p-8">
            {/* Left side - UCLY Logo and Info */}
            <div className="order-2 lg:order-1">
              <div className="flex flex-col items-center lg:items-start text-center lg:text-right">
                {/* UCLY Logo */}
                <div className="mb-4 lg:mb-6">
                  <div className="w-20 h-20 sm:w-24 sm:h-24 mb-3 sm:mb-4 mx-auto lg:mx-0">
                    <img alt="" className="w-full h-full object-cover" src="https://s3-alpha-sig.figma.com/img/f4d9/4a6b/1c3974e3b1b08fec6d47e0ae9983143f?Expires=1760313600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=NwtgfiM-DRNLMPzcXLTYrQTpEVM4jQVZ6P4QSrEAiyj-gVQOFH~ozzCxrt5fiLLma7DzLS~ual25k2M0GSkHsqsZulnizuK6f~W3zIqYRqxLBonNvcL60Jj4ldiuG1Mi7dfZyYon2RwUQOpZNKwviBW0c68MCcXMCQkCoS8667TNa8lv07Sl0hNRsN2z-rtY5n5qMuipws~DGKkBW-AaFM5ThhC8MLqGbIf5B29CQ1irDlNByoq3T0c2PeMjk34PclUOAn6JOL-rcrgz9SfcD1MzaE7HIuD-Gfhm6MdC4Q-Uns6iJ7CSK4sup7zxYNdNGBqcPz72jabUi60Z4rGkWw__" />
                  </div>
                </div>

                {/* University Description */}
                <div className="text-[#6d6e70] text-sm sm:text-base font-medium font-['IRANYekanX'] leading-relaxed mb-4 lg:mb-6">
                  دانشگاه UCLY با تاریخچه‌ای غنی و شهرت جهانی، در قلب شهر لیون واقع شده است. این دانشگاه به عنوان یکی از بهترین مراکز آموزشی فرانسه، بر آموزش بر پایه نوآوری، کیفیت و بین‌المللی‌سازی تمرکز دارد. اساتید مجرب و برنامه‌های متنوع در حوزه‌های مختلف، فرصت‌های بی‌نظیری برای دانشجویان فراهم می‌کند تا در محیطی پویا و چندفرهنگی تحصیل کنند.
                </div>

                {/* Article Link */}
                <div className="text-center lg:text-right">
                  <span className="text-[#505254] text-sm sm:text-base font-semibold font-['IRANYekanX'] leading-normal">
                    برای خواندن مقاله معرفی دانشگاه UCLY شهر لیون فرانسه،{' '}
                  </span>
                  <a href="#" className="text-[#b23124] text-sm sm:text-base font-semibold font-['IRANYekanX'] leading-normal hover:underline">
                    اینجا
                  </a>
                  <span className="text-[#505254] text-sm sm:text-base font-semibold font-['IRANYekanX'] leading-normal">
                    {' '}کلیک کنید.
                  </span>
                </div>
              </div>
            </div>

            {/* Right side - University Image */}
            <div className="order-1 lg:order-2">
              <div className="w-full h-48 sm:h-56 lg:h-64 bg-cover bg-center rounded-2xl" style={{
                backgroundImage: 'url(https://s3-alpha-sig.figma.com/img/b840/96f8/3a7ae4e6f74b420aa99f3fe533f0e66f?Expires=1760313600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=K3BZim7TlXitQOMaGSfmj0hDB~IcoVnHl3-wmBZQNXenqgQoZCyBTYzY6ijDCfEtXFgg5ZinVGVpfXEQoGxNQT0CNHLS5-fhaj4qiv8PLrO~q9Cr~8~71OKG18w6T2aVJI2r5g8MSeNjaGzDTZIBakRMJEGvwVyw35gus0YdY0DzeJPLYiNbhXgOX7krzUFZuxdJc8ZmxsCsrgteKV8d35fEj57cchr8T5RYrHsnuEBXmDbk~zc~eDFyUNHQz01Kfq01hlE-GlItUTEHPQdlHDhvHJh~WAYv4J~p62xIoHYapG4RTf1oNCazNzhs8NkabTT6GJePqjzTR4R9ThAS5A__)'
              }} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default UCLYUniversitySection
