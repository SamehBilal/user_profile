"use client"
import React from 'react'
import {useState, useEffect, useRef} from 'react'
import SlidesItem from './slidesItem'
import { Swiper, SwiperSlide } from 'swiper/react'
import { EffectFade, Pagination, Autoplay } from 'swiper/modules'
// Import Swiper styles
import "swiper/swiper-bundle.css";
import 'swiper/css/effect-fade';
import 'swiper/css/pagination';
import 'swiper/css';

function Slider({setActiveSlide, backgrounds, activeInfo}) {
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

    // if(sliderRef?.current && sliderRef?.current?.swiper?.realIndex)
    // console.log('sliderRef?.current?.swiper?.realIndex', sliderRef?.current?.swiper?.realIndex)

  return (
    <Swiper
      id='login-slider'
      ref={sliderRef}
      parallax={true}
      effect='fade'
      modules={[EffectFade, Pagination, Autoplay]}
      pagination={{
        clickable: true,
        renderBullet: function (index, className) {
          return '<span className="' + className + '">' + '</span>';
        },
      }}
      onSlideChange={(swiper) => {
        if(setActiveSlide) {
          // console.log("slide change to", swiper.realIndex)
          setActiveSlide(swiper.realIndex)
        }
      }}
      autoplay={{ 
        delay: 8000,
        disableOnInteraction: false,
      }}
      speed='300'
      loop={true}
      slidesPerView={1}
      spaceBetween={0}
      allowTouchMove= {false}
      className='w-full lg:rounded-r-lg rounded-t-lg max-xl:h-96'>
        {backgrounds.map((_, i)=>{
          return  <SwiperSlide key={i}
          className='!flex items-end justify-between flex-col !w-full lg:rounded-r-lg rounded-t-lg' >
            <SlidesItem activeInfo={backgrounds[i]} />
          </SwiperSlide> 
        })}
    </Swiper>)
}

export default Slider