import React from 'react'

const LyonCitySection: React.FC = () => {
  return (
    <div className="w-full py-12 lg:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left side - Lyon Description */}
          <div className="order-2 lg:order-1">
            <div className="text-center lg:text-right">
              <h2 className="text-[#316086] text-xl sm:text-2xl font-extrabold font-['IRANYekanX'] leading-loose mb-4 lg:mb-6">
                شهر لیون
              </h2>
              <div className="text-[#6d6e70] text-base sm:text-lg font-medium font-['IRANYekanX'] leading-7 space-y-3 lg:space-y-4">
                <p>
                  لیون، شهری با تاریخ غنی و فرهنگ پویا در قلب فرانسه، پلی میان سنت و مدرنیته را به زیبایی می‌سازد. با بافت تاریخی در محله‌های Vieux Lyon و Fourvière، جاذبه‌های معماری رنسانس و خیابان‌های سنگ‌فرش‌شده، این شهر فضایی الهام‌بخش برای آشنایی با زبان و فرهنگ فرانسوی فراهم می‌کند.
                </p>
                <p>
                  بازارهای محلی، کافه‌های دنج و فرصت‌های پیوستن به جامعه محلی از طریق مکالمه روزمره، یادگیری زبان را به تجربه‌ای زنده و بی‌وقفه تبدیل می‌کند. لیون با رستوران‌های معتبر، سنت‌های آشپزی معتبر و رویدادهای فرهنگی متنوع مانند فستیوال‌ها و نمایشگاه‌ها، محیطی امن و حمایتی برای تمرین زبان در موقعیت‌های واقعی ایجاد می‌کند.
                </p>
                <p>
                  با حضور در این شهر، زبان‌آموزان نه تنها در مهارت‌های گفتاری و شنیداری پیشرفت می‌کنند، بلکه آگاهی فرهنگی و درک عمیق‌تری از سبک زندگی فرانسوی به دست می‌آورند.
                </p>
              </div>
            </div>
          </div>

          {/* Right side - Lyon Image */}
          <div className="order-1 lg:order-2">
            <div className="w-full h-64 sm:h-72 lg:h-80 bg-cover bg-center rounded-2xl" style={{
              backgroundImage: 'url(https://s3-alpha-sig.figma.com/img/b840/96f8/3a7ae4e6f74b420aa99f3fe533f0e66f?Expires=1760313600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=K3BZim7TlXitQOMaGSfmj0hDB~IcoVnHl3-wmBZQNXenqgQoZCyBTYzY6ijDCfEtXFgg5ZinVGVpfXEQoGxNQT0CNHLS5-fhaj4qiv8PLrO~q9Cr~8~71OKG18w6T2aVJI2r5g8MSeNjaGzDTZIBakRMJEGvwVyw35gus0YdY0DzeJPLYiNbhXgOX7krzUFZuxdJc8ZmxsCsrgteKV8d35fEj57cchr8T5RYrHsnuEBXmDbk~zc~eDFyUNHQz01Kfq01hlE-GlItUTEHPQdlHDhvHJh~WAYv4J~p62xIoHYapG4RTf1oNCazNzhs8NkabTT6GJePqjzTR4R9ThAS5A__)'
            }} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default LyonCitySection
