"use client"
import { useEffect, useState, useRef } from 'react'
import BoxesBg from '@/components/ui/boxes-bg'
import { Image } from '@nextui-org/react'
import Logo from '@/public/images/logo_icon.png'
import { ArrowUpLeft, Eye, EyeIcon, HeartIcon, PencilLineIcon } from 'lucide-react'
// {
//   "index": 0,
//   "title": "مراجعة ماوس Deathadder V3 Hyperspeed من Razer",
//   "imgUrl": "http://arabhardware.net/storage/uploads/2024-07/66966fd1b3fe7.maos-deathadder-v3-hyperspeed-5.jpgmain66966fd1c0409.webp",
//   "desc": "النسخة الموفّرة من ماوس الألعاب الأفضل في العالم!",
//   "url": "http://arabhardware.net/reviews/razer-deathadder-v3-hyperspeed-review",
//   "author": "أحمد عبد الوهاب",
//   "likes": 0,
//   "views": 2629,
//   "body": "الألعاب الأولمبية، ذلك الحدث العالمي الذي يترقبه المليارات كل أربع سنوات، يعود مجددًا ليبهر العالم. ومنذ آخر دورة أولمبية في عام 2020، شهد العالم تحولًا جذريًا مع ظهور الجيل الجديد من الذكاء الاصطناعي، الذي بدأ في إحداث...الألعاب الأولمبية، ذلك الحدث العالمي الذي يترقبه المليارات كل أربع سنوات، \nالألعاب الأولمبية، ذلك الحدث العالمي الذي يترقبه المليارات كل أربع سنوات، يعود مجددًا ليبهر العالم. ومنذ آخر دورة أولمبية في عام 2020، شهد العالم تحولًا جذريًا مع ظهور الجيل الجديد من الذكاء الاصطناعي، الذي بدأ في إحداث...الألعاب الأولمبية، ذلك الحدث العالمي الذي يترقبه المليارات كل أربع سنوات، \nالألعاب الأولمبية، ذلك الحدث العالمي الذي يترقبه المليارات كل أربع سنوات، يعود مجددًا ليبهر العالم. ومنذ آخر دورة أولمبية في عام 2020، شهد العالم تحولًا جذريًا مع ظهور الجيل الجديد من الذكاء الاصطناعي، الذي بدأ في إحداث...الألعاب الأولمبية، ذلك الحدث العالمي الذي يترقبه المليارات كل أربع سنوات، \nالألعاب الأولمبية، ذلك الحدث العالمي الذي يترقبه المليارات كل أربع سنوات، يعود مجددًا ليبهر العالم. ومنذ آخر دورة أولمبية في عام 2020، شهد العالم تحولًا جذريًا مع ظهور الجيل الجديد من الذكاء الاصطناعي، الذي بدأ في إحداث...الألعاب الأولمبية، ذلك الحدث العالمي الذي يترقبه المليارات كل أربع سنوات، \nالألعاب الأولمبية، ذلك الحدث العالمي الذي يترقبه المليارات كل أربع سنوات، يعود مجددًا ليبهر العالم. ومنذ آخر دورة أولمبية في عام 2020، شهد العالم تحولًا جذريًا مع ظهور الجيل الجديد من الذكاء الاصطناعي، الذي بدأ في إحداث...الألعاب الأولمبية، ذلك الحدث العالمي الذي يترقبه المليارات كل أربع سنوات، "
// }

function BlogsPlayer({isPopupOpen, setIsPopupOpen, currentBlog, 
    setcurrentBlog}) {
    // console.log('currentBlog', currentBlog)

    const toReadableData = (dateStr) => {
        const date = new Date(dateStr);

        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        const arabicDate = new Intl.DateTimeFormat('ar-EG', options).format(date);
        return arabicDate
    }

    const goToUrl = () => {
        location.href=currentBlog.url??'#'
    }

  return (
    <>
        
    {isPopupOpen && currentBlog && <div className="fixed z-[200] -top-[5%] left-0 w-screen h-[110dvh] flex items-center justify-center text-white">
        <BoxesBg setIsPopupOpen={setIsPopupOpen} >
        <div className="absolute z-40 xl:w-[70%] space-y-0 max-w-grid w-[96%] h-[80dvh] left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-black/25 px-8 pt-8 flex items-center justify-between flex-col">
            <div className="flex items-center justify-between gap-8 h-[calc(100%-6rem)]">
                <div className="w-1/3 h-full flex">
                    <Image src={currentBlog.imgUrl} alt={currentBlog.title}
                    className='w-full rounded-r-md object-cover h-full' />
                </div>
                <div className="flex-1 space-y-8 h-full">
                    <p className="text-primaryLight text-large">
                        {currentBlog.title}
                    </p>
                    <div className="space-y-2 overflow-y-scroll h-[calc(100%-3.65rem)]">
                        {currentBlog.body.split('\n').map((_, i)=>(
                            <p key={i}>{_}</p>
                        ))}
                    </div>
                </div>
            </div>
            <div className="text-gray-400 text-tiny flex items-start justify-between w-full gap-[25%]">
                <p className=''>{toReadableData(currentBlog.publishAt)}</p>
                <div className="flex items-center justify-start flex-1 gap-8">
                    <div className="flex gap-2 items-center">
                        <EyeIcon size={20} className='' />
                        <p className=''>{currentBlog.views}</p>
                    </div>
                    <div className="flex gap-2 items-center">
                        <HeartIcon size={20} className='' />
                        <p className=''>{currentBlog.likes}</p>
                    </div>
                    <div className="flex gap-2 items-center">
                        <PencilLineIcon size={20} className='' />
                        <p className=''>{currentBlog.author}</p>
                    </div>
                </div>

            </div>
            <button className="py-4 w-full text-white bg-black/75 flex items-center justify-center group"
            onClick={goToUrl}>
                <p className='text-transparent scale-x-0 group-hover:scale-x-100 group-hover:text-white transition-all duration-300'>
                    اقرأ باستفاضة على موقعنا
                </p>
                <ArrowUpLeft className='size-8 group-hover:size-4 translate-x-16 group-hover:translate-x-0 group-hover:-translate-y-2 transition-all duration-300' />
            </button>
        </div>
        </BoxesBg>
    </div>}
    </>
  )
}

export default BlogsPlayer