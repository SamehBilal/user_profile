"use client"
import React from 'react'
import { Search, SunMoon, LayoutGrid, Bell, ThermometerSun, globe } from 'lucide-react'
import PersonImg from '@/public/images/person.jpg'
import Image from 'next/image'
import Logo from '@/public/images/logo.png'
import { createPopper } from '@popperjs/core';

function Appbar() {
  const [dropdownPopoverShow, setDropdownPopoverShow] = React.useState(false);
  const btnDropdownRef = React.createRef();
  const popoverDropdownRef = React.createRef();

  return (
    <nav className="text-black shadow-md w-screen flex justify-between items-center mx-auto px-8 py-2 absolute top-0 right-0 left-0 ">
      <Image src={Logo} alt='ArabHardware' className=' size-12 lg:mr-8' />
      <div className="flex gap-2 items-center justify-center flex-grow">
        <Search strokeWidth={1} />
        <input className="border-l flex-grow p-2 border-gray-300 bg-transparent text-sm pl-4 placeholder:text-black placeholder:font-light focus-visible:border-primary focus-visible:!ring-primary focus:border-primary focus:!ring-primary" 
        type="text"
        placeholder="What do you need today"/>
      </div>
      <div className="flex flex-col justify-center items-between">
        <div className="flex items-center justify-end gap-2 text-black">
          <SunMoon  strokeWidth={2} className='size-8 p-2 hover:bg-primaryLight hover:text-white rounded-lg transition cursor-pointer' />
          <div className="relative">
            <button className='border-none' type="button" ref={btnDropdownRef}>
              <span class="sr-only">Open grid menu</span>
              <LayoutGrid  strokeWidth={2} className='size-8 p-2 hover:bg-primaryLight hover:text-white rounded-lg transition cursor-pointer' />
            </button>
          </div>
          <Bell  strokeWidth={2} className='size-8 p-2 hover:bg-primaryLight hover:text-white rounded-lg transition cursor-pointer' />
          <span className="w-4"></span>
          <p className="">Good Morning</p>
          <Image src={PersonImg} alt='user image' className=' size-10 rounded-lg' />
        </div>
        <div className="flex items-center justify-center gap-4">
          <div className='flex items-center justify-center'>
            <div className="flex items-center justify-center text-sm">
              <span><ThermometerSun className='size-6 p-1 inline fill-primaryLight' /></span>
              <span>44&deg;</span>
            </div>
          </div>
          <div class="block text-sm text-left leading-tight">
            <span class="inline-flex flex-col h-[calc(theme(fontSize.sm)*theme(lineHeight.tight))] md:h-[calc(theme(fontSize.base)*theme(lineHeight.tight))] overflow-hidden">
              <ul class="block animate-text-slide text-left leading-tight [&_li]:block">
                  <li>Gold sotck prices increased</li>
                  <li>Oil sotck prices decreased</li>
                  <li>Papper sotck prices increased</li>
                  <li>Chicken sotck prices decreased</li>
                  <li>Toys sotck prices increased</li>
                  <li aria-hidden="true">Gold sotck prices increased</li>
              </ul>
            </span>
          </div>
        </div>
      </div>
</nav>
  )
}

export default Appbar