import React from 'react'
import Image from 'next/image'
import {useState, useEffect, useRef} from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
// Import Swiper styles
import "swiper/swiper-bundle.css";
import "swiper/css/pagination";

function StatusBar({statusData, openStatus, setVidDis, setCurrentVid, youtubeId, title}) {
  const sliderRef = useRef() 
  
  // useEffect(()=>{
  //   const timer = setTimeout(()=>{
  //     sliderRef.current.swiper.slideNext(500);
  //   }, 10000) //next slide in 10 seconds
  //   return () => clearTimeout(timer)
  // }, [sliderRef?.current?.swiper?.realIndex])

  const handlePrev = () => {
    if (!sliderRef.current) return;
    sliderRef.current.swiper.slidePrev(500);
  }
  const handleNext = () => {
    if (!sliderRef.current) return;
    sliderRef.current.swiper.slideNext(500);
  }

  const handleOpenStatus = (i=0) => {
    openStatus(prev=>!prev)
    setVidDis('small')
    console.log({youtubeId: statusData[i].youtubeId, title: statusData[i].title})
    setCurrentVid({youtubeId: statusData[i].youtubeId, title: statusData[i].title})
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
      spaceBetween={40}
      className='absolute inset-0 w-full z-10'>
            {statusData.map((_, i)=>{
        return <SwiperSlide key={i} 
        onClick={()=>handleOpenStatus(i)}
        className="!size-14 !flex items-center justify-center rounded-full overflow-hidden bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 cursor-pointer">
            <div className="size-12 flex items-center justify-center">
                <Image src={_.imgUrl} alt={_.title} width={100} height={100} className="size-full object-cover rounded-full" />
            </div>
        </SwiperSlide>
        })}
    </Swiper>
  )
}

export default StatusBar