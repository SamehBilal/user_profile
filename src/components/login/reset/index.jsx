import React from 'react'
import Slider from '../slider'
import ResetForm from './form'
import { Home } from 'lucide-react'
import Link from 'next/link'

function ResetPage({setActiveSlide, activeInfo, backgrounds }) {
  
  return (
    <div className='w-full relative min-w-fit rounded-lg ring-1 ring-black/5 grid lg:grid-cols-2 lg:grid-rows-1 grid-rows-2 grid-cols-1 text-black'>
      <Link href={'/'} className='absolute lg:top-8 lg:left-8 top-4 left-4 z-10 cursor-pointer'>
        <Home className=' text-zinc-700 fill-none ' />
      </Link>
      <Slider backgrounds={backgrounds} setActiveSlide={setActiveSlide} activeInfo={activeInfo} />
      <ResetForm />
    </div>
  )
}

export default ResetPage