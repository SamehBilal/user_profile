import React from 'react'
import Image from 'next/image'
import {useState, useEffect, useRef} from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
// Import Swiper styles
import "swiper/swiper-bundle.css";
import "swiper/css/pagination";

function StatusBar({statusData, openStatus, setVidDis, setCurrentVid, setActiveVidIndex ,youtubeId, title}) {
  const sliderRef = useRef() 
  
  // useEffect(()=>{
  //   const timer = setTimeout(()=>{
  //     sliderRef.current.swiper.slideNext(500);
  //   }, 10000) //next slide in 10 seconds
  //   return () => clearTimeout(timer)
  // }, [sliderRef?.current?.swiper?.realIndex])

  // const handlePrev = () => {
  //   if (!sliderRef.current) return;
  //   sliderRef.current.swiper.slidePrev(500);
  // }
  // const handleNext = () => {
  //   if (!sliderRef.current) return;
  //   sliderRef.current.swiper.slideNext(500);
  // }

  const handleOpenStatus = (i=0) => {
    openStatus(prev=>!prev)
    setVidDis('small')
    setCurrentVid({youtubeId: statusData[i].youtubeId, title: statusData[i].title})
    setActiveVidIndex(i)
  }

  return (
    
    <Swiper
      id='status-swiper'
      ref={sliderRef}
      parallax={true}
      speed='500'
      pagination={false}
      grabCursor={true}
      slidesPerView={'auto'}
      spaceBetween={10}
      className='absolute inset-0 w-full z-10'>
        {statusData.map((_, i)=>{
        return <SwiperSlide key={i} 
        onClick={()=>handleOpenStatus(i)}
        className="!aspect-[9/13] !w-36 !flex items-center justify-center cursor-pointer relative">
            <div className="size-full flex items-center justify-center relative">
                <Image src={_.imgUrl} alt={_.title} width={1000} height={1000} className="w-full aspect-shorts object-cover" />
                <div className="absolute inset-0  bg-gradient-to-t from-black/90 to-transparent" />
                <div className="absolute w-[calc(100%-1rem)] bottom-0 left-0 text-white text-tiny line-clamp-3 mt-1 mb-2 mx-2">
                  {_.title}
                </div>
            </div>
        </SwiperSlide>
        })}
    </Swiper>
  )
}

export default StatusBar