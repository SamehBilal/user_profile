"use client"
import React from 'react'
import {useState, useEffect, useRef} from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { EffectFade, Pagination, Autoplay } from 'swiper/modules'
// Import Swiper styles
import "swiper/swiper-bundle.css";
import 'swiper/css/effect-fade';
import 'swiper/css/pagination';
import 'swiper/css';
import { ChevronLeft, MoonIcon, SunIcon } from 'lucide-react'

function WeatherDaysSlider({weather}) {
    const sliderRef = useRef()

    const handlePrev = () => {
        if (!sliderRef.current) return;
        sliderRef.current.swiper.slidePrev(300);
        // setActiveSlide(sliderRef.current.swiper.realIndex)
    }
    const handleNext = () => {
    if (!sliderRef.current) return;
    sliderRef.current.swiper.slideNext(300);
    // setActiveSlide(sliderRef.current.swiper.realIndex)
    }

  return (
    <>
    <Swiper
      id='weather-slider'
      ref={sliderRef}
      parallax={true}
      slidesPerView='auto'
      loop={false}
      className='w-full px-6 text-tiny relative'>
        {weather?.day?.map((_, i)=>{
            return <SwiperSlide key={i}
            className='!flex flex-col items-center !w-fit px-4' >
                <span className='font-semibold text-small'>
                    {_.temp}°
                </span>
                {_.time>5 && _.time<19
                ?<SunIcon className='text-gray-300 size-8' />
                :<MoonIcon className='text-gray-300 size-8' />}
                
                <span className="font-semibold mt-1 text-sm">
                    {_.time}:00
                </span>
                <span className="font-semibold text-gray-400">
                {_.time>12?'PM':'AM'}
                </span>
            </SwiperSlide> 
        })}
        <ChevronLeft className='absolute top-1/2 -translate-y-1/2 -left-2 size-8 z-10 text-gray-400'
        onClick={handleNext} />
        <ChevronLeft className='absolute top-1/2 -translate-y-1/2 -right-2 size-8 z-10 text-gray-400 rotate-180'
        onClick={handlePrev} />
    </Swiper>
    </>
  )
}

export default WeatherDaysSlider