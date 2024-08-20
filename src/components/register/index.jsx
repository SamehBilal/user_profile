import React from 'react'
import Slider from '../login/slider'
import RegisterForm from './form'
import { Home } from 'lucide-react'
import Link from 'next/link'

function RegisterPage({toLoginPage, setActiveSlide, activeInfo, backgrounds, returnUrl, sessionId }) {
  return (
    <div className='w-full lg:h-full min-w-fit rounded-lg ring-1 ring-black/5 grid lg:grid-cols-2 grid-cols-1 max-lg:h-fit text-black'>
      <Link href={'/'} className='absolute lg:top-8 lg:left-8 top-4 left-4 z-10 cursor-pointer'>
        <Home className=' text-zinc-700 fill-none ' />
      </Link>
      <Slider backgrounds={backgrounds} activeInfo={activeInfo} />
      <RegisterForm toLoginPage={toLoginPage} returnUrl={returnUrl} sessionId={sessionId} />
    </div>
  )
}

export default RegisterPage