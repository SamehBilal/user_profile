"use client"
import Image from 'next/image'
import { backgrounds } from './backgrounds'
import LoginPage from '@/components/login'
import RegisterPage from '@/components/register'
import {useState, useEffect, useRef} from 'react'
import SearchParamsComponent from './searchParamsComponent'

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
  const [returnUrl, setReturnUrl] = useState('https://arabhardware.net')
  const [sessionId, setSessionId] = useState(null)

  const toLoginPage = () => {
    if (!sliderRef.current) return;
    sliderRef.current.swiper.slideTo(0, 2000);
  }
  const toRegisterPage = ({speed=2000}) => {
    if (!sliderRef.current) return;
    sliderRef.current.swiper.slideTo(1, speed);
  }

  return (
    <div className='w-screen min-h-screen overflow-hidden flex justify-center items-center'>
      {/* <Appbar /> */}
      <SearchParamsComponent setReturnUrl={setReturnUrl} toRegisterPage={toRegisterPage} setSessionId={setSessionId} />
      <Image src={backgrounds[activeSlide].img} alt={backgrounds[activeSlide].title}
      className='w-screen lg:h-full h-[250%] blur-lg object-cover absolute brightness-150' />

      <Swiper
        id='login-swiper'
        ref={sliderRef}
        parallax={true}
        speed='500'
        effect='flip'
        pagination={false}
        allowTouchMove= {false}
        modules={[EffectFlip]}
        className='w-4/5 max-w-grid !flex items-center justify-center max-lg:my-6'>
          <SwiperSlide 
            className={`swiper-no-swiping !flex items-center justify-center flex-col gap-[-15px] !w-full !h-auto rounded-lg`}>
              <LoginPage toRegisterPage={toRegisterPage} setActiveSlide={setActiveSlide} activeInfo={backgrounds[activeSlide]} 
              backgrounds={backgrounds} returnUrl={returnUrl} sessionId={sessionId} />
          </SwiperSlide>
          <SwiperSlide 
            className={`swiper-no-swiping !flex items-center justify-center flex-col gap-[-15px] !w-full !h-auto rounded-lg`}>
              <RegisterPage toLoginPage={toLoginPage} setActiveSlide={setActiveSlide} activeInfo={backgrounds[activeSlide]} 
              backgrounds={backgrounds} returnUrl={returnUrl} sessionId={sessionId} />
          </SwiperSlide>
      </Swiper>
    </div>
  )
}

export default Page