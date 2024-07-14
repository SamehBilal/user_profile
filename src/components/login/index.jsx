import React from 'react'
import Slider from './slider'
import LoginForm from './form'
import { Home } from 'lucide-react'
import Link from 'next/link'

function LoginPage({toRegisterPage, setActiveSlide, activeInfo, backgrounds, returnUrl }) {
  
  return (
    <div className='w-full relative min-w-fit rounded-lg ring-1 ring-black/5 grid lg:grid-cols-2 lg:grid-rows-1 grid-rows-2 grid-cols-1 text-black'>
      <Link href={'/'} className='absolute top-8 left-8 z-10 cursor-pointer'>
        <Home className=' text-zinc-700 fill-none ' />
      </Link>
      <Slider backgrounds={backgrounds} setActiveSlide={setActiveSlide} activeInfo={activeInfo} />
      <LoginForm toRegisterPage={toRegisterPage} returnUrl={returnUrl} />
    </div>
  )
}

export default LoginPage