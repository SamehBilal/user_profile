import React from 'react'
import Slider from './slider'
import LoginForm from './form'
import { Home } from 'lucide-react'
import Link from 'next/link'

function LoginPage({toRegisterPage, setActiveSlide, activeInfo, backgrounds, returnUrl, sessionId }) {
  
  return (
    <div className='w-full relative min-w-fit rounded-lg ring-1 ring-black/5 grid lg:grid-cols-2 grid-cols-1 max-lg:h-fit text-black'>
      <a href="https://arabhardware.net/" className='absolute lg:top-8 lg:left-8 top-4 left-4 z-10 cursor-pointer'>
        <Home className='text-zinc-700 fill-none' />
      </a>
      <Slider backgrounds={backgrounds} setActiveSlide={setActiveSlide} activeInfo={activeInfo} />
      <LoginForm toRegisterPage={toRegisterPage} returnUrl={returnUrl} sessionId={sessionId} />
    </div>
  )
}

export default LoginPage