"use client"
import React from 'react'
import { Search, SunMoon, LayoutGrid, Bell, ThermometerSun, globe } from 'lucide-react'
import PersonImg from '@/public/images/person.jpg'
import Image from 'next/image'
import Logo from '@/public/images/logo.png'
import { useTheme } from 'next-themes';

function Appbar() {
  const [dropdownPopoverShow, setDropdownPopoverShow] = React.useState(false);
  const { theme, setTheme } = useTheme();
  const btnDropdownRef = React.createRef();

  console.log('theme', theme)

  return (
    <nav className="text-black dark:text-white shadow-md dark:shadow-gray-300/20 w-screen flex justify-between items-center mx-auto px-8 py-2 absolute top-0 right-0 left-0 ">
      <Image src={Logo} alt='ArabHardware' className=' size-12 lg:mr-8' />
      <div className="flex gap-2 items-center justify-center flex-grow">
        <Search strokeWidth={1} />
        <input className="border-l flex-grow p-2 border-gray-300 bg-transparent text-sm pl-4 placeholder:text-black dark:text-white dark:placeholder:text-white placeholder:font-light focus-visible:border-primary focus-visible:!ring-primary focus:border-primary focus:!ring-primary" 
        type="text"
        placeholder="What do you need today"/>
      </div>
      <div className="flex flex-col justify-center items-between">
        <div className="flex items-center justify-end gap-2 text-black dark:text-white">
          <SunMoon strokeWidth={2} onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
          className='size-8 p-2 hover:bg-primaryLight  dark:hover:bg-primaryLighter hover:text-white rounded-lg transition cursor-pointer' />
          <LayoutGrid  ref={btnDropdownRef} strokeWidth={2} onClick={()=>setDropdownPopoverShow(prev=>!prev)}
          className='size-8 p-2 hover:bg-primaryLight  dark:hover:bg-primaryLighter hover:text-white rounded-lg transition cursor-pointer' />
          <Bell  strokeWidth={2} className='size-8 p-2 hover:bg-primaryLight  dark:hover:bg-primaryLighter hover:text-white rounded-lg transition cursor-pointer' />
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
          <div className="block text-sm text-left leading-tight">
            <span className="inline-flex flex-col h-[calc(theme(fontSize.sm)*theme(lineHeight.tight))] md:h-[calc(theme(fontSize.base)*theme(lineHeight.tight))] overflow-hidden">
              <ul className="block animate-text-slide text-left leading-tight [&_li]:block">
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

        <div className={`max-h-44 flex justify-center items-center gap-0 absolute right-48 top-12 bg-gray-200 rounded-lg ${dropdownPopoverShow?'':'hidden'}`}>
          <div className="flex items-center justify-center cursor-pointer hover:bg-gray-400 rounded-l-lg p-4">
            <Image src={Logo} alt='ArabHardware' className=' size-12' />
          </div>
          <div className="h-12 w-0.5 bg-black"></div>
          <div className="flex items-center justify-center cursor-pointer hover:bg-gray-400 rounded-r-lg p-4">
            <Image src={Logo} alt='ArabHardware store' className=' size-12 saturate-0' />
          </div>
        </div>
      </div>
</nav>
  )
}

export default Appbar