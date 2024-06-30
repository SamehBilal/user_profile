"use client"
import Image from 'next/image'
import { backgrounds } from './backgrounds'
import LoginPage from '@/components/login'
import RegisterPage from '@/components/register'
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
      className='w-screen lg:h-full h-[250%] blur-lg object-cover absolute -z-10 brightness-150' />

      <Swiper
        id='login-swiper'
        ref={sliderRef}
        parallax={true}
        speed='500'
        effect='flip'
        pagination={false}
        modules={[EffectFlip]}
        className='w-4/5 max-w-7xl !flex items-center justify-center'>
          <SwiperSlide 
            className='swiper-no-swiping !flex items-center justify-center flex-col gap-[-15px] !w-full !h-auto  rounded-lg'>
              <LoginPage toRegisterPage={toRegisterPage} setActiveSlide={setActiveSlide} activeInfo={backgrounds[activeSlide]} backgrounds={backgrounds} />
          </SwiperSlide>
          <SwiperSlide 
            className='swiper-no-swiping !flex items-center justify-center flex-col gap-[-15px] !w-full !h-auto  rounded-lg'>
              <RegisterPage toLoginPage={toLoginPage} setActiveSlide={setActiveSlide} activeInfo={backgrounds[activeSlide]} backgrounds={backgrounds} />
          </SwiperSlide>
      </Swiper>
    </div>
  )
}

export default Page