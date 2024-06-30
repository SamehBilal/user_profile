"use client"
import Image from 'next/image'
import { backgrounds } from './backgrounds'
import LoginPage from '@/components/login'
import RegisterPage from '@/components/register'
import Logo from '@/public/images/logo.png'
import {useState, useEffect, useRef} from 'react'

import { Swiper, SwiperSlide } from 'swiper/react'
import { EffectFlip } from 'swiper/modules';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-flip';

// TODO:remove before publish
import Appbar from '@/components/appbar'

function Page() {
  const sliderRef = useRef() 
  const [activeSlide, setActiveSlide] = useState(0)

  const toLoginPage = () => {
    if (!sliderRef.current) return;
    sliderRef.current.swiper.slideTo(0, 2000);
  }
  const toRegisterPage = () => {
    if (!sliderRef.current) return;
    sliderRef.current.swiper.slideTo(1, 2000);
  }

  return (
    <div className='w-screen min-h-screen overflow-hidden flex justify-center items-center'>
      {/* <Appbar /> */}
      <Image src={backgrounds[activeSlide].img} alt={backgrounds[activeSlide].title}
      className='w-screen lg:h-full h-[200%] blur-lg object-cover absolute -z-10 brightness-150' />

      <Swiper
        id='login-swiper'
        ref={sliderRef}
        parallax={true}
        speed='500'
        effect='flip'
        pagination={false}
        modules={[EffectFlip]}
        className='w-4/5 lg:h-3/4 h-4/5 max-w-7xl !flex'>
          <SwiperSlide 
            className='swiper-no-swiping !flex items-end justify-between flex-col gap-[-15px] !w-full !h-auto bg-lightGray rounded-lg shadow-md dark:shadow-zinc-300/20'>
              <LoginPage toRegisterPage={toRegisterPage} setActiveSlide={setActiveSlide} activeInfo={backgrounds[activeSlide]} backgrounds={backgrounds} />
          </SwiperSlide>
          <SwiperSlide 
            className='swiper-no-swiping !flex items-end justify-between flex-col gap-[-15px] !w-full !h-auto bg-lightGray rounded-lg shadow-md dark:shadow-zinc-300/20'>
              <RegisterPage toLoginPage={toLoginPage} setActiveSlide={setActiveSlide} activeInfo={backgrounds[activeSlide]} backgrounds={backgrounds} />
          </SwiperSlide>
      </Swiper>
    </div>
  )
}

export default Page