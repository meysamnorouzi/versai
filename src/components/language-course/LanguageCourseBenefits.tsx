import React from 'react'

const LanguageCourseBenefits: React.FC = () => {
  const benefits = [
    {
      text: "فرآیند مهاجرت با این روش بسیار کوتاه انجام می شود. با موسسه ورسای بدون استرس و عجله در بهترین زمان می توانید این فرایند را طی کنید.",
      highlighted: "ورسای"
    },
    {
      text: "ورسای به عنوان نماینده دانشگاه UCLY می تواند خوابگاه دولتی با هزینه به صرفه برایتان رزرو کند. این مزیت شما را از استرس پیدا شدن یا نشدن خوابگاه نجات میدهد.",
      highlighted: "خوابگاه دولتی"
    },
    {
      text: "شهریه این دوره ها در دانشگاه ها و شهر های مختلف متفاوت است ولی در کل نسبت به روش های دیگر مهاجرت به این کشور، معقول است."
    },
    {
      text: "این روش بدون نیاز به مدرک رسمی زبان است. کلاس ها با دو زبان انگلیسی و فرانسوی پیش می رود ولی نیازی به داشتن مدرک زبان نیست.",
      highlighted: ["انگلیسی", "فرانسوی"]
    },
    {
      text: "شهر لیون، شهری دانشجویی است و دانشجویان می توانند ۲۰ ساعت در هفته در کنار تحصیل، به کار دانشجویی بپردازند و درآمدی کسب کنند.",
      highlighted: "۲۰ ساعت"
    },
    {
      text: "در این روش، شما تمامی مزایای دانشجویی این کشور شامل بیمه پزشکی رایگان، امکان کار و ... را دارید."
    },
    {
      text: "تعداد ورودی های این دوره ها در طی سال باعث می شود به راحتی بتوانید برنامه ریزی کنید و در سریعترین فرصت ممکن به فرانسه بروید."
    }
  ]

  const featureCards = [
    {
      icon: (
        <div className="w-12 h-12 relative">
          <img alt="" className="w-12 h-12" src="https://figma-alpha-api.s3.us-west-2.amazonaws.com/mcp/get_code/assets/67e36a2d-24d2-4c78-9596-081cd64948a6/figma%3Aasset/ac03a529c85035fd6ae07ec3975788705f08591f.svg?AWSAccessKeyId=ASIAQ4GOSFWCYAHDX4VS&Expires=1759327009&Signature=Gq9vlOh3kmFtl0eem5Cg82aW9Rw%3D&response-expires=Wed%2C%2015%20Oct%202025%2013%3A41%3A49%20GMT&x-amz-security-token=IQoJb3JpZ2luX2VjEH0aCXVzLXdlc3QtMiJHMEUCIQD7VmzyRWmVxA6sgFPNwehvIaIohRLE2jv%2FaGMEYyq9igIgdQObiOZzlcqOEc48SxiF3%2Fp7yKMquALXfO6Yz%2BAVSKoqhwUIFhAAGgwwNjA1NjI3NDY3NTciDO8rkJunrwE3i%2B5U7SrkBBBVC9jN6MClu9T6z%2FdTo19mwUDByHeflQUaTl2MUjTPnOrrwF33wLIaf58VR5Da7U94F%2F5%2F6sdEW%2F6abkmh1923Mk8bg3c3mQS68gQ5cPdDz3aDdGDnyIW33q9kvLVkEhd69TgZqocJHb3FIyAV2Avo%2F5c%2Fv4MQ43dHBxG14Z40fBymqDENXXmgU2Gur%2F6Uz6HskI5TMxMxa3syxxGVZZaGwnXhcdpjfxaFUrqeL1POC5bHCkz53dsumr1CiVTWSZgs9UjnnzggQGEh%2F94gFhPyF9ZLepYUDf66F0R7d6VPhIyjc6m5nI5zV10D62D%2FslJ7nDpV2xrgRP64OOq9ZhoKgqhLAL%2FYb3GnXB2UYkziHMIH%2FRcxgNGpSFI%2BSlIBFN9yPJsd9Lh7Bvo%2BKlzZFTDmBdjv830FxH3vm%2B9a8hVBLAXWIucyg0Lw8PjstjvKd33a7pW4wNyFTcvlS1nWuvmcjBADJH%2BJl3J9h49SDrX9DNwMDQQjyTNTPmH1v5XoKrZQKTyGTfFxqjbp7Orrdi8a%2BA4uPgiYuFe1jVtUqrVSLUedQ0FHtm62%2Bk9Oy1skng7Vp0QdZRi5glvsFSY9SFd41B1%2BNzB3Rjzft1MQmKMuWj7e0aaHFtg6oSRWUKAj6M7UF5bijgwXYtqkAXFnghWU1B%2FOjY6mDq%2Frv%2F7cfp73oXT%2Bvb4XwhZP5NU3RYw7cnkZXemdQWfZNA78P03z3IdnvBomnK6r7dN4hFGj4MUYGuEhq4bCQ0JH5xbljNAPQkp1CeO10coij307jYktEDhrik17uucIAkTe0AdUMYpmGHN09jD20PTGBjqbAdS9cy8dd5W4R1ut8yb91Wfa8tQAJW0cByzqkNnZQe50fx9CB2AWO6b93I3%2B8kYicMAxuPzsu10A00yPqzc9PakYb7t%2FmG0RDKa6OX2IBVDGXpBnjDYKf3ITjJ4AlyoAqdkGTWikQeqRDv9TLCaHaDAMzDmOubmjcTRjzv16lbkgTXFxChPfVu57ITLX0%2BpNM09%2BQKBweaksrdgz" />
        </div>
      ),
      title: "بیمه پزشکی رایگان"
    },
    {
      icon: (
        <div className="w-12 h-12 relative">
          <img alt="" className="w-12 h-12" src="https://figma-alpha-api.s3.us-west-2.amazonaws.com/mcp/get_code/assets/67e36a2d-24d2-4c78-9596-081cd64948a6/figma%3Aasset/4f87a23b156f09dcd57c009286a754c70922dc07.svg?AWSAccessKeyId=ASIAQ4GOSFWCYAHDX4VS&Expires=1759327009&Signature=BHrTZU%2FZc39EjKERrTVHTKTDdYk%3D&response-expires=Wed%2C%2015%20Oct%202025%2013%3A41%3A49%20GMT&x-amz-security-token=IQoJb3JpZ2luX2VjEH0aCXVzLXdlc3QtMiJHMEUCIQD7VmzyRWmVxA6sgFPNwehvIaIohRLE2jv%2FaGMEYyq9igIgdQObiOZzlcqOEc48SxiF3%2Fp7yKMquALXfO6Yz%2BAVSKoqhwUIFhAAGgwwNjA1NjI3NDY3NTciDO8rkJunrwE3i%2B5U7SrkBBBVC9jN6MClu9T6z%2FdTo19mwUDByHeflQUaTl2MUjTPnOrrwF33wLIaf58VR5Da7U94F%2F5%2F6sdEW%2F6abkmh1923Mk8bg3c3mQS68gQ5cPdDz3aDdGDnyIW33q9kvLVkEhd69TgZqocJHb3FIyAV2Avo%2F5c%2Fv4MQ43dHBxG14Z40fBymqDENXXmgU2Gur%2F6Uz6HskI5TMxMxa3syxxGVZZaGwnXhcdpjfxaFUrqeL1POC5bHCkz53dsumr1CiVTWSZgs9UjnnzggQGEh%2F94gFhPyF9ZLepYUDf66F0R7d6VPhIyjc6m5nI5zV10D62D%2FslJ7nDpV2xrgRP64OOq9ZhoKgqhLAL%2FYb3GnXB2UYkziHMIH%2FRcxgNGpSFI%2BSlIBFN9yPJsd9Lh7Bvo%2BKlzZFTDmBdjv830FxH3vm%2B9a8hVBLAXWIucyg0Lw8PjstjvKd33a7pW4wNyFTcvlS1nWuvmcjBADJH%2BJl3J9h49SDrX9DNwMDQQjyTNTPmH1v5XoKrZQKTyGTfFxqjbp7Orrdi8a%2BA4uPgiYuFe1jVtUqrVSLUedQ0FHtm62%2Bk9Oy1skng7Vp0QdZRi5glvsFSY9SFd41B1%2BNzB3Rjzft1MQmKMuWj7e0aaHFtg6oSRWUKAj6M7UF5bijgwXYtqkAXFnghWU1B%2FOjY6mDq%2Frv%2F7cfp73oXT%2Bvb4XwhZP5NU3RYw7cnkZXemdQWfZNA78P03z3IdnvBomnK6r7dN4hFGj4MUYGuEhq4bCQ0JH5xbljNAPQkp1CeO10coij307jYktEDhrik17uucIAkTe0AdUMYpmGHN09jD20PTGBjqbAdS9cy8dd5W4R1ut8yb91Wfa8tQAJW0cByzqkNnZQe50fx9CB2AWO6b93I3%2B8kYicMAxuPzsu10A00yPqzc9PakYb7t%2FmG0RDKa6OX2IBVDGXpBnjDYKf3ITjJ4AlyoAqdkGTWikQeqRDv9TLCaHaDAMzDmOubmjcTRjzv16lbkgTXFxChPfVu57ITLX0%2BpNM09%2BQKBweaksrdgz" />
        </div>
      ),
      title: "امکان کار دانشجویی"
    },
    {
      icon: (
        <div className="w-12 h-12 relative">
          <img alt="" className="w-12 h-12" src="https://figma-alpha-api.s3.us-west-2.amazonaws.com/mcp/get_code/assets/67e36a2d-24d2-4c78-9596-081cd64948a6/figma%3Aasset/292a1857d307287fd310dafeadcbc6d6d30b7069.svg?AWSAccessKeyId=ASIAQ4GOSFWCYAHDX4VS&Expires=1759327009&Signature=aEewi7C3TiRWnc0votjANUyq5wg%3D&response-expires=Wed%2C%2015%20Oct%202025%2013%3A41%3A49%20GMT&x-amz-security-token=IQoJb3JpZ2luX2VjEH0aCXVzLXdlc3QtMiJHMEUCIQD7VmzyRWmVxA6sgFPNwehvIaIohRLE2jv%2FaGMEYyq9igIgdQObiOZzlcqOEc48SxiF3%2Fp7yKMquALXfO6Yz%2BAVSKoqhwUIFhAAGgwwNjA1NjI3NDY3NTciDO8rkJunrwE3i%2B5U7SrkBBBVC9jN6MClu9T6z%2FdTo19mwUDByHeflQUaTl2MUjTPnOrrwF33wLIaf58VR5Da7U94F%2F5%2F6sdEW%2F6abkmh1923Mk8bg3c3mQS68gQ5cPdDz3aDdGDnyIW33q9kvLVkEhd69TgZqocJHb3FIyAV2Avo%2F5c%2Fv4MQ43dHBxG14Z40fBymqDENXXmgU2Gur%2F6Uz6HskI5TMxMxa3syxxGVZZaGwnXhcdpjfxaFUrqeL1POC5bHCkz53dsumr1CiVTWSZgs9UjnnzggQGEh%2F94gFhPyF9ZLepYUDf66F0R7d6VPhIyjc6m5nI5zV10D62D%2FslJ7nDpV2xrgRP64OOq9ZhoKgqhLAL%2FYb3GnXB2UYkziHMIH%2FRcxgNGpSFI%2BSlIBFN9yPJsd9Lh7Bvo%2BKlzZFTDmBdjv830FxH3vm%2B9a8hVBLAXWIucyg0Lw8PjstjvKd33a7pW4wNyFTcvlS1nWuvmcjBADJH%2BJl3J9h49SDrX9DNwMDQQjyTNTPmH1v5XoKrZQKTyGTfFxqjbp7Orrdi8a%2BA4uPgiYuFe1jVtUqrVSLUedQ0FHtm62%2Bk9Oy1skng7Vp0QdZRi5glvsFSY9SFd41B1%2BNzB3Rjzft1MQmKMuWj7e0aaHFtg6oSRWUKAj6M7UF5bijgwXYtqkAXFnghWU1B%2FOjY6mDq%2Frv%2F7cfp73oXT%2Bvb4XwhZP5NU3RYw7cnkZXemdQWfZNA78P03z3IdnvBomnK6r7dN4hFGj4MUYGuEhq4bCQ0JH5xbljNAPQkp1CeO10coij307jYktEDhrik17uucIAkTe0AdUMYpmGHN09jD20PTGBjqbAdS9cy8dd5W4R1ut8yb91Wfa8tQAJW0cByzqkNnZQe50fx9CB2AWO6b93I3%2B8kYicMAxuPzsu10A00yPqzc9PakYb7t%2FmG0RDKa6OX2IBVDGXpBnjDYKf3ITjJ4AlyoAqdkGTWikQeqRDv9TLCaHaDAMzDmOubmjcTRjzv16lbkgTXFxChPfVu57ITLX0%2BpNM09%2BQKBweaksrdgz" />
        </div>
      ),
      title: "بدون نیاز به مدرک زبان"
    },
    {
      icon: (
        <div className="w-12 h-12 relative">
          <img alt="" className="w-12 h-12" src="https://figma-alpha-api.s3.us-west-2.amazonaws.com/mcp/get_code/assets/67e36a2d-24d2-4c78-9596-081cd64948a6/figma%3Aasset/f52464d0036cbcbb5d5deab914453024cdd7f6f7.svg?AWSAccessKeyId=ASIAQ4GOSFWCYAHDX4VS&Expires=1759327009&Signature=a3cebrl0VOsPa1mSewkOUcREn%2Fk%3D&response-expires=Wed%2C%2015%20Oct%202025%2013%3A41%3A49%20GMT&x-amz-security-token=IQoJb3JpZ2luX2VjEH0aCXVzLXdlc3QtMiJHMEUCIQD7VmzyRWmVxA6sgFPNwehvIaIohRLE2jv%2FaGMEYyq9igIgdQObiOZzlcqOEc48SxiF3%2Fp7yKMquALXfO6Yz%2BAVSKoqhwUIFhAAGgwwNjA1NjI3NDY3NTciDO8rkJunrwE3i%2B5U7SrkBBBVC9jN6MClu9T6z%2FdTo19mwUDByHeflQUaTl2MUjTPnOrrwF33wLIaf58VR5Da7U94F%2F5%2F6sdEW%2F6abkmh1923Mk8bg3c3mQS68gQ5cPdDz3aDdGDnyIW33q9kvLVkEhd69TgZqocJHb3FIyAV2Avo%2F5c%2Fv4MQ43dHBxG14Z40fBymqDENXXmgU2Gur%2F6Uz6HskI5TMxMxa3syxxGVZZaGwnXhcdpjfxaFUrqeL1POC5bHCkz53dsumr1CiVTWSZgs9UjnnzggQGEh%2F94gFhPyF9ZLepYUDf66F0R7d6VPhIyjc6m5nI5zV10D62D%2FslJ7nDpV2xrgRP64OOq9ZhoKgqhLAL%2FYb3GnXB2UYkziHMIH%2FRcxgNGpSFI%2BSlIBFN9yPJsd9Lh7Bvo%2BKlzZFTDmBdjv830FxH3vm%2B9a8hVBLAXWIucyg0Lw8PjstjvKd33a7pW4wNyFTcvlS1nWuvmcjBADJH%2BJl3J9h49SDrX9DNwMDQQjyTNTPmH1v5XoKrZQKTyGTfFxqjbp7Orrdi8a%2BA4uPgiYuFe1jVtUqrVSLUedQ0FHtm62%2Bk9Oy1skng7Vp0QdZRi5glvsFSY9SFd41B1%2BNzB3Rjzft1MQmKMuWj7e0aaHFtg6oSRWUKAj6M7UF5bijgwXYtqkAXFnghWU1B%2FOjY6mDq%2Frv%2F7cfp73oXT%2Bvb4XwhZP5NU3RYw7cnkZXemdQWfZNA78P03z3IdnvBomnK6r7dN4hFGj4MUYGuEhq4bCQ0JH5xbljNAPQkp1CeO10coij307jYktEDhrik17uucIAkTe0AdUMYpmGHN09jD20PTGBjqbAdS9cy8dd5W4R1ut8yb91Wfa8tQAJW0cByzqkNnZQe50fx9CB2AWO6b93I3%2B8kYicMAxuPzsu10A00yPqzc9PakYb7t%2FmG0RDKa6OX2IBVDGXpBnjDYKf3ITjJ4AlyoAqdkGTWikQeqRDv9TLCaHaDAMzDmOubmjcTRjzv16lbkgTXFxChPfVu57ITLX0%2BpNM09%2BQKBweaksrdgz" />
        </div>
      ),
      title: "شهریه مقرون‌به‌صرفه"
    },
    {
      icon: (
        <div className="w-12 h-12 relative">
          <img alt="" className="w-12 h-12" src="https://figma-alpha-api.s3.us-west-2.amazonaws.com/mcp/get_code/assets/67e36a2d-24d2-4c78-9596-081cd64948a6/figma%3Aasset/a49d46ea90307111ec5d4c211f25c5809277aca2.svg?AWSAccessKeyId=ASIAQ4GOSFWCYAHDX4VS&Expires=1759327009&Signature=UvJYs8xFYPZ%2Fe8YEn138iKx%2FNJA%3D&response-expires=Wed%2C%2015%20Oct%202025%2013%3A41%3A49%20GMT&x-amz-security-token=IQoJb3JpZ2luX2VjEH0aCXVzLXdlc3QtMiJHMEUCIQD7VmzyRWmVxA6sgFPNwehvIaIohRLE2jv%2FaGMEYyq9igIgdQObiOZzlcqOEc48SxiF3%2Fp7yKMquALXfO6Yz%2BAVSKoqhwUIFhAAGgwwNjA1NjI3NDY3NTciDO8rkJunrwE3i%2B5U7SrkBBBVC9jN6MClu9T6z%2FdTo19mwUDByHeflQUaTl2MUjTPnOrrwF33wLIaf58VR5Da7U94F%2F5%2F6sdEW%2F6abkmh1923Mk8bg3c3mQS68gQ5cPdDz3aDdGDnyIW33q9kvLVkEhd69TgZqocJHb3FIyAV2Avo%2F5c%2Fv4MQ43dHBxG14Z40fBymqDENXXmgU2Gur%2F6Uz6HskI5TMxMxa3syxxGVZZaGwnXhcdpjfxaFUrqeL1POC5bHCkz53dsumr1CiVTWSZgs9UjnnzggQGEh%2F94gFhPyF9ZLepYUDf66F0R7d6VPhIyjc6m5nI5zV10D62D%2FslJ7nDpV2xrgRP64OOq9ZhoKgqhLAL%2FYb3GnXB2UYkziHMIH%2FRcxgNGpSFI%2BSlIBFN9yPJsd9Lh7Bvo%2BKlzZFTDmBdjv830FxH3vm%2B9a8hVBLAXWIucyg0Lw8PjstjvKd33a7pW4wNyFTcvlS1nWuvmcjBADJH%2BJl3J9h49SDrX9DNwMDQQjyTNTPmH1v5XoKrZQKTyGTfFxqjbp7Orrdi8a%2BA4uPgiYuFe1jVtUqrVSLUedQ0FHtm62%2Bk9Oy1skng7Vp0QdZRi5glvsFSY9SFd41B1%2BNzB3Rjzft1MQmKMuWj7e0aaHFtg6oSRWUKAj6M7UF5bijgwXYtqkAXFnghWU1B%2FOjY6mDq%2Frv%2F7cfp73oXT%2Bvb4XwhZP5NU3RYw7cnkZXemdQWfZNA78P03z3IdnvBomnK6r7dN4hFGj4MUYGuEhq4bCQ0JH5xbljNAPQkp1CeO10coij307jYktEDhrik17uucIAkTe0AdUMYpmGHN09jD20PTGBjqbAdS9cy8dd5W4R1ut8yb91Wfa8tQAJW0cByzqkNnZQe50fx9CB2AWO6b93I3%2B8kYicMAxuPzsu10A00yPqzc9PakYb7t%2FmG0RDKa6OX2IBVDGXpBnjDYKf3ITjJ4AlyoAqdkGTWikQeqRDv9TLCaHaDAMzDmOubmjcTRjzv16lbkgTXFxChPfVu57ITLX0%2BpNM09%2BQKBweaksrdgz" />
        </div>
      ),
      title: "امکان رزرو خوابگاه دولتی"
    },
    {
      icon: (
        <div className="w-12 h-12 relative">
          <img alt="" className="w-12 h-12" src="https://figma-alpha-api.s3.us-west-2.amazonaws.com/mcp/get_code/assets/67e36a2d-24d2-4c78-9596-081cd64948a6/figma%3Aasset/287576c8b116b40b7eb843b819624526af797a78.svg?AWSAccessKeyId=ASIAQ4GOSFWCYAHDX4VS&Expires=1759327009&Signature=oTSM%2F33p4VpUmhjBfO3gXrbRs4w%3D&response-expires=Wed%2C%2015%20Oct%202025%2013%3A41%3A49%20GMT&x-amz-security-token=IQoJb3JpZ2luX2VjEH0aCXVzLXdlc3QtMiJHMEUCIQD7VmzyRWmVxA6sgFPNwehvIaIohRLE2jv%2FaGMEYyq9igIgdQObiOZzlcqOEc48SxiF3%2Fp7yKMquALXfO6Yz%2BAVSKoqhwUIFhAAGgwwNjA1NjI3NDY3NTciDO8rkJunrwE3i%2B5U7SrkBBBVC9jN6MClu9T6z%2FdTo19mwUDByHeflQUaTl2MUjTPnOrrwF33wLIaf58VR5Da7U94F%2F5%2F6sdEW%2F6abkmh1923Mk8bg3c3mQS68gQ5cPdDz3aDdGDnyIW33q9kvLVkEhd69TgZqocJHb3FIyAV2Avo%2F5c%2Fv4MQ43dHBxG14Z40fBymqDENXXmgU2Gur%2F6Uz6HskI5TMxMxa3syxxGVZZaGwnXhcdpjfxaFUrqeL1POC5bHCkz53dsumr1CiVTWSZgs9UjnnzggQGEh%2F94gFhPyF9ZLepYUDf66F0R7d6VPhIyjc6m5nI5zV10D62D%2FslJ7nDpV2xrgRP64OOq9ZhoKgqhLAL%2FYb3GnXB2UYkziHMIH%2FRcxgNGpSFI%2BSlIBFN9yPJsd9Lh7Bvo%2BKlzZFTDmBdjv830FxH3vm%2B9a8hVBLAXWIucyg0Lw8PjstjvKd33a7pW4wNyFTcvlS1nWuvmcjBADJH%2BJl3J9h49SDrX9DNwMDQQjyTNTPmH1v5XoKrZQKTyGTfFxqjbp7Orrdi8a%2BA4uPgiYuFe1jVtUqrVSLUedQ0FHtm62%2Bk9Oy1skng7Vp0QdZRi5glvsFSY9SFd41B1%2BNzB3Rjzft1MQmKMuWj7e0aaHFtg6oSRWUKAj6M7UF5bijgwXYtqkAXFnghWU1B%2FOjY6mDq%2Frv%2F7cfp73oXT%2Bvb4XwhZP5NU3RYw7cnkZXemdQWfZNA78P03z3IdnvBomnK6r7dN4hFGj4MUYGuEhq4bCQ0JH5xbljNAPQkp1CeO10coij307jYktEDhrik17uucIAkTe0AdUMYpmGHN09jD20PTGBjqbAdS9cy8dd5W4R1ut8yb91Wfa8tQAJW0cByzqkNnZQe50fx9CB2AWO6b93I3%2B8kYicMAxuPzsu10A00yPqzc9PakYb7t%2FmG0RDKa6OX2IBVDGXpBnjDYKf3ITjJ4AlyoAqdkGTWikQeqRDv9TLCaHaDAMzDmOubmjcTRjzv16lbkgTXFxChPfVu57ITLX0%2BpNM09%2BQKBweaksrdgz" />
        </div>
      ),
      title: "پروسه کوتاه"
    }
  ]

  const renderTextWithHighlight = (text: string, highlighted?: string | string[]) => {
    if (!highlighted) return text

    if (Array.isArray(highlighted)) {
      let result = text
      highlighted.forEach(highlight => {
        result = result.replace(highlight, `<span class="text-red-700">${highlight}</span>`)
      })
      return <span dangerouslySetInnerHTML={{ __html: result }} />
    }

    return text.replace(highlighted, `<span class="text-red-700">${highlighted}</span>`)
  }

  return (
    <div className="w-full py-20 bg-[#f2f1f1]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="text-right mb-12">
          <h2 className="text-[#b23124] text-2xl font-semibold font-['IRANYekanX'] leading-relaxed mb-8">
            مزایای دوره زبان
          </h2>
        </div>

        {/* Benefits List */}
        <div className="space-y-4 mb-12 lg:mb-16">
          {benefits.map((benefit, index) => (
            <div key={index} className="flex justify-end items-start gap-2 sm:gap-3">
              <div className="flex-1 text-right">
                <span className="text-[#316086] text-base sm:text-lg font-medium font-['IRANYekanX'] leading-7">
                  {renderTextWithHighlight(benefit.text, benefit.highlighted)}
                </span>
              </div>
              <div className="w-5 h-5 sm:w-6 sm:h-6 relative flex-shrink-0 mt-1">
                <img alt="" className="w-5 h-5 sm:w-6 sm:h-6" src="https://figma-alpha-api.s3.us-west-2.amazonaws.com/mcp/get_code/assets/67e36a2d-24d2-4c78-9596-081cd64948a6/figma%3Aasset/356ca047cb0ec5ff535fdefd053ae703a252a500.svg?AWSAccessKeyId=ASIAQ4GOSFWCYAHDX4VS&Expires=1759327009&Signature=lXO0a79xCKdOeG10TpG6k0dUlLY%3D&response-expires=Wed%2C%2015%20Oct%202025%2013%3A41%3A49%20GMT&x-amz-security-token=IQoJb3JpZ2luX2VjEH0aCXVzLXdlc3QtMiJHMEUCIQD7VmzyRWmVxA6sgFPNwehvIaIohRLE2jv%2FaGMEYyq9igIgdQObiOZzlcqOEc48SxiF3%2Fp7yKMquALXfO6Yz%2BAVSKoqhwUIFhAAGgwwNjA1NjI3NDY3NTciDO8rkJunrwE3i%2B5U7SrkBBBVC9jN6MClu9T6z%2FdTo19mwUDByHeflQUaTl2MUjTPnOrrwF33wLIaf58VR5Da7U94F%2F5%2F6sdEW%2F6abkmh1923Mk8bg3c3mQS68gQ5cPdDz3aDdGDnyIW33q9kvLVkEhd69TgZqocJHb3FIyAV2Avo%2F5c%2Fv4MQ43dHBxG14Z40fBymqDENXXmgU2Gur%2F6Uz6HskI5TMxMxa3syxxGVZZaGwnXhcdpjfxaFUrqeL1POC5bHCkz53dsumr1CiVTWSZgs9UjnnzggQGEh%2F94gFhPyF9ZLepYUDf66F0R7d6VPhIyjc6m5nI5zV10D62D%2FslJ7nDpV2xrgRP64OOq9ZhoKgqhLAL%2FYb3GnXB2UYkziHMIH%2FRcxgNGpSFI%2BSlIBFN9yPJsd9Lh7Bvo%2BKlzZFTDmBdjv830FxH3vm%2B9a8hVBLAXWIucyg0Lw8PjstjvKd33a7pW4wNyFTcvlS1nWuvmcjBADJH%2BJl3J9h49SDrX9DNwMDQQjyTNTPmH1v5XoKrZQKTyGTfFxqjbp7Orrdi8a%2BA4uPgiYuFe1jVtUqrVSLUedQ0FHtm62%2Bk9Oy1skng7Vp0QdZRi5glvsFSY9SFd41B1%2BNzB3Rjzft1MQmKMuWj7e0aaHFtg6oSRWUKAj6M7UF5bijgwXYtqkAXFnghWU1B%2FOjY6mDq%2Frv%2F7cfp73oXT%2Bvb4XwhZP5NU3RYw7cnkZXemdQWfZNA78P03z3IdnvBomnK6r7dN4hFGj4MUYGuEhq4bCQ0JH5xbljNAPQkp1CeO10coij307jYktEDhrik17uucIAkTe0AdUMYpmGHN09jD20PTGBjqbAdS9cy8dd5W4R1ut8yb91Wfa8tQAJW0cByzqkNnZQe50fx9CB2AWO6b93I3%2B8kYicMAxuPzsu10A00yPqzc9PakYb7t%2FmG0RDKa6OX2IBVDGXpBnjDYKf3ITjJ4AlyoAqdkGTWikQeqRDv9TLCaHaDAMzDmOubmjcTRjzv16lbkgTXFxChPfVu57ITLX0%2BpNM09%2BQKBweaksrdgz" />
              </div>
            </div>
          ))}
        </div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 lg:gap-8">
          {featureCards.map((card, index) => (
            <div key={index} className="flex flex-col justify-start items-center gap-3">
              {card.icon}
              <div className="text-center text-[#316086] text-base font-semibold font-['IRANYekanX'] leading-normal">
                {card.title}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default LanguageCourseBenefits
