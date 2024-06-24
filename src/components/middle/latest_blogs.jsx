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
      sliderRef.current.swiper.slideNext(2000);
      // setActive(sliderRef.current.swiper.realIndex)
    }, 10000) //next slide in 10 seconds
    return () => clearTimeout(timer)
  }, [sliderRef?.current?.swiper?.realIndex])

  const handlePrev = () => {
    if (!sliderRef.current) return;
    sliderRef.current.swiper.slidePrev(2000);
    // setActive(sliderRef.current.swiper.realIndex)
  }

  const handleNext = () => {
    if (!sliderRef.current) return;
    sliderRef.current.swiper.slideNext(2000);
    // setActive(sliderRef.current.swiper.realIndex)
  }
  
  return (
    <Swiper
      id='latest-swiper'
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
          className='!flex items-end justify-between flex-col gap-[-15px] !w-fit bg-lightGray rounded-lg py-2 px-4 shadow-lg' 
          onClick={()=>{setActive(i)}}>
            <p className="w-44 mb-8" style={{color: _.color}}>{_.title}</p>
            <Image src={_.img} alt={_.title} className='w-32 h-22 -mt-4 object-contain' />
          </SwiperSlide> 
        })}
    </Swiper>
  )
}

export default LatestBlogs