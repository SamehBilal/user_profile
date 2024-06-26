"use client"
import React from 'react'
import {useState, useEffect, useRef} from 'react'
import SlidesItem from './slidesItem'
import { Swiper, SwiperSlide } from 'swiper/react'
// Import Swiper styles
import "swiper/swiper-bundle.css";
import 'swiper/css';

function Slider({setActiveSlide, backgrounds, activeInfo}) {
    const sliderRef = useRef() 
    
    useEffect(()=>{
      const timer = setTimeout(()=>{
        sliderRef.current.swiper.slideNext(300);
        setActiveSlide(sliderRef.current.swiper.realIndex)
      }, 5000) //next slide in 10 seconds
      return () => clearTimeout(timer)
    }, [sliderRef?.current?.swiper?.realIndex])
  
    const handlePrev = () => {
      if (!sliderRef.current) return;
      sliderRef.current.swiper.slidePrev(300);
      setActiveSlide(sliderRef.current.swiper.realIndex)
    }
    const handleNext = () => {
      if (!sliderRef.current) return;
      sliderRef.current.swiper.slideNext(300);
      setActiveSlide(sliderRef.current.swiper.realIndex)
    }

  return (
    <Swiper
      id='login-slider'
      ref={sliderRef}
      parallax={true}
      speed='300'
      loop={true}
      slidesPerView={1}
      spaceBetween={0}
      className='w-full'>
        {backgrounds.map((_, i)=>{
          return  <SwiperSlide key={i} 
          className='!flex items-end justify-between flex-col !w-full rounded-l-lg' >
            <SlidesItem activeInfo={activeInfo} />
          </SwiperSlide> 
        })}
    </Swiper>)
}

export default Slider