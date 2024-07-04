"use client"
import Image from 'next/image'
import { backgrounds } from '../login/backgrounds'
import LoginPage from '@/components/login'
import {useState, useEffect, useRef} from 'react'

import { Swiper, SwiperSlide } from 'swiper/react'
import { EffectFlip } from 'swiper/modules';
import ResetPage from '@/components/login/reset'

function Page() {
  const sliderRef = useRef() 
  const [activeSlide, setActiveSlide] = useState(0)


  return (
    <div className='w-screen min-h-screen overflow-hidden flex justify-center items-center'>
      {/* <Appbar /> */}
      <Image src={backgrounds[activeSlide].img} alt={backgrounds[activeSlide].title}
      className='w-screen lg:h-full h-[250%] blur-lg object-cover absolute -z-10 brightness-150' />
      <div className="w-4/5 max-w-grid !p-grid flex items-center justify-center">
        <div className="flex items-center justify-center flex-col gap-[-15px] !w-full !h-auto  rounded-lg">
            <ResetPage setActiveSlide={setActiveSlide} activeInfo={backgrounds[activeSlide]} backgrounds={backgrounds}/>
        </div>
      </div>
    </div>
  )
}

export default Page