import React from 'react'
import Logo from '@/public/images/logo.png'
import Image from 'next/image'

function GridDropdown({gridDropdownPopoverShow=false, }) {
  return (
    <div className={`max-h-44 flex justify-center items-center gap-0 absolute ltr:right-48 rtl:left-48 top-12 bg-gray-200 rounded-lg ${gridDropdownPopoverShow?'':'hidden'}`}>
        <div className="flex items-center justify-center cursor-pointer hover:bg-gray-400 rounded-l-lg p-4">
        <Image src={Logo} alt='ArabHardware' className=' size-12' />
        </div>
        <div className="h-12 w-0.5 bg-black"></div>
        <div className="flex items-center justify-center cursor-pointer hover:bg-gray-400 rounded-r-lg p-4">
        <Image src={Logo} alt='ArabHardware store' className=' size-12 saturate-0' />
        </div>
    </div>
  )
}

export default GridDropdown