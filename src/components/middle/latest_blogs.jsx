"use client"
import { blogList } from './blog_list';
import Image from 'next/image';
import {useState, useEffect, useRef} from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { EffectCards, EffectCoverflow, EffectFlip } from 'swiper/modules';
// Import Swiper styles
import "swiper/swiper-bundle.css";
import "swiper/css/pagination";

function LatestBlogs() {
  const sliderRef = useRef() 
  
  useEffect(()=>{
    const timer = setTimeout(()=>{
      sliderRef.current.swiper.slideNext(500);
    }, 10000) //next slide in 10 seconds
    return () => clearTimeout(timer)
  }, [sliderRef?.current?.swiper?.realIndex])

  const handlePrev = () => {
    if (!sliderRef.current) return;
    sliderRef.current.swiper.slidePrev(500);
  }
  const handleNext = () => {
    if (!sliderRef.current) return;
    sliderRef.current.swiper.slideNext(500);
  }
  
  return (
    <Swiper
      id='latest-blogs-swiper'
      ref={sliderRef}
      parallax={true}
      speed='500'
      // effect='coverflow'
      pagination={false}
      grabCursor={true}
      loop={true}
      slidesPerView={'auto'}
      centeredSlides= {false}
      spaceBetween={20}
      // modules={[EffectCoverflow]}
      className='w-auto'>
        {blogList.map((_, i)=>{
          return  <SwiperSlide key={i} 
          className='!flex flex-col items-end justify-between !w-fit bg-zinc-200 rounded-lg p-4 shadow-md dark:shadow-zinc-300/20 gap-4'>
            <div className="flex items-center justify-between w-fit">
              <Image src={_.img} alt={_.title} className='size-20 -mt-4 object-contain object-right' />
              <p className="w-44 mb-1" style={{color: _.color}}>{_.arTitle}</p>
            </div>
            <p className="text-zinc-700 text-xs cursor-pointer">Read more</p>
          </SwiperSlide> 
        })}
    </Swiper>
  )
}

export default LatestBlogs