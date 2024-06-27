import React from 'react'
import Image from 'next/image'
import Logo from '@/public/images/logo.svg'

function Page() {
  return (
    <div className='w-screen h-screen'>
        <Image src={Logo} alt='logo' className='w-full h-full object-contain' />
    </div>
  )
}

export default Page