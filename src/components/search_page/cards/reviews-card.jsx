import React from 'react'
import {Card, CardHeader, CardBody, CardFooter, Image, Button} from "@nextui-org/react";
import Link from 'next/link';

function ReviewsCard({
  index, title='', imgUrl='https://nextui.org/images/card-example-3.jpeg', desc='', url=null, setCurrentBlog, 
  setIsBlogPopupOpen, author, likes, views, publishAt
}) {
  
  const handleOpenStatus = () => { 
    setIsBlogPopupOpen(true) 
    setCurrentBlog({index, title, imgUrl, desc, url, author, likes, views, publishAt,
      body: "الألعاب الأولمبية، ذلك الحدث العالمي الذي يترقبه المليارات كل أربع سنوات، يعود مجددًا ليبهر العالم. ومنذ آخر دورة أولمبية في عام 2020، شهد العالم تحولًا جذريًا مع ظهور الجيل الجديد من الذكاء الاصطناعي، الذي بدأ في إحداث...الألعاب الأولمبية، ذلك الحدث العالمي الذي يترقبه المليارات كل أربع سنوات، \nالألعاب الأولمبية، ذلك الحدث العالمي الذي يترقبه المليارات كل أربع سنوات، يعود مجددًا ليبهر العالم. ومنذ آخر دورة أولمبية في عام 2020، شهد العالم تحولًا جذريًا مع ظهور الجيل الجديد من الذكاء الاصطناعي، الذي بدأ في إحداث...الألعاب الأولمبية، ذلك الحدث العالمي الذي يترقبه المليارات كل أربع سنوات، \nالألعاب الأولمبية، ذلك الحدث العالمي الذي يترقبه المليارات كل أربع سنوات، يعود مجددًا ليبهر العالم. ومنذ آخر دورة أولمبية في عام 2020، شهد العالم تحولًا جذريًا مع ظهور الجيل الجديد من الذكاء الاصطناعي، الذي بدأ في إحداث...الألعاب الأولمبية، ذلك الحدث العالمي الذي يترقبه المليارات كل أربع سنوات، \nالألعاب الأولمبية، ذلك الحدث العالمي الذي يترقبه المليارات كل أربع سنوات، يعود مجددًا ليبهر العالم. ومنذ آخر دورة أولمبية في عام 2020، شهد العالم تحولًا جذريًا مع ظهور الجيل الجديد من الذكاء الاصطناعي، الذي بدأ في إحداث...الألعاب الأولمبية، ذلك الحدث العالمي الذي يترقبه المليارات كل أربع سنوات، \nالألعاب الأولمبية، ذلك الحدث العالمي الذي يترقبه المليارات كل أربع سنوات، يعود مجددًا ليبهر العالم. ومنذ آخر دورة أولمبية في عام 2020، شهد العالم تحولًا جذريًا مع ظهور الجيل الجديد من الذكاء الاصطناعي، الذي بدأ في إحداث...الألعاب الأولمبية، ذلك الحدث العالمي الذي يترقبه المليارات كل أربع سنوات، "})
  }
  return (
    <Card className={`${index==0?'col-span-6 md:h-[200px] h-[100px]':'md:col-span-3 col-span-6 h-[100px]'} bg-black/15 
     group flex-row items-center justify-between gap-4 hover:bg-white/90 dark:hover:bg-black/90 transition rounded-md`}>
      <Image
        removeWrapper
        alt="Card background"
        className={`z-0 w-1/5 ${index==0?'md:w-2/5 w-1/5':'w-1/5'} 
        h-full object-cover group-hover:brightness-125 dark:group-hover:brightness-75 group-hover:scale-105 transition rounded-md rounded-l-none`}
        src={imgUrl}
      />
      <CardHeader className='flex-1 flex-col items-start justify-between h-full'>
          <h4  className="uppercase font-bold line-clamp-1">
              {title}
          </h4>
          <p className="font-medium text-small line-clamp-2">
              {desc}
          </p>
          <button onClick={handleOpenStatus}
            className='text-primary dark:text-primaryLight text-tiny mr-auto'>
              اقرأ المزيد
          </button>
      </CardHeader>
    </Card>
  )
}

export default ReviewsCard