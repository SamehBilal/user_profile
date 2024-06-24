"use client"
import {useEffect, useState} from 'react'
import { Search, SunMoon, LayoutGrid, Bell, ThermometerSun } from 'lucide-react'
import PersonImg from '@/public/images/person.jpg'
import Image from 'next/image'

function Appbar() {
  const [currentNews, setCurrentNews] = useState('Gold sotck prices increased')

  return (
    <nav className="text-primary bg-lightGray w-[calc(100%-(2.5rem+20%))] flex justify-between items-center mx-auto px-8 pt-12 absolute top-0 right-0 left-[calc(2.5rem+20%)] ">
      <div className="flex gap-2 items-center justify-center">
        <Search />
        <input className="border-l border-gray-300 bg-transparent font-semibold text-sm pl-4 focus-visible:border-primary focus-visible:!ring-primary focus:border-primary focus:!ring-primary" 
        type="text"
        placeholder="What do you need today"/>
      </div>
      <div className="flex flex-col justify-center items-between">
        <div className="flex items-center justify-end gap-2 text-black">
          <SunMoon className='size-8 p-2 hover:bg-primaryLight hover:text-white rounded-full transition cursor-pointer' />
          <LayoutGrid className='size-8 p-2 hover:bg-primaryLight hover:text-white rounded-full transition cursor-pointer' />
          <Bell className='size-8 p-2 hover:bg-primaryLight hover:text-white rounded-full transition cursor-pointer' />
          <span className="w-4"></span>
          <p className="">Good Morning</p>
          <Image src={PersonImg} alt='user image' className=' size-10 rounded-full' />
        </div>
        <div className="flex items-center justify-center gap-4 text-black">
          <div className='flex items-center justify-center text-primary'>
            <SunMoon className='size-8 p-2' />
            <p className="">44&deg;C</p>
          </div>
          {/* <ul class="block text-sm text-left leading-tight [&_li]:block animate-text-slide h-[calc(theme(fontSize.base)*theme(lineHeight.tight))]"> */}
            <p>Gold sotck prices increased</p>
            {/* <li>Oil sotck prices decreased</li>
            <li>Papper sotck prices increased</li>
            <li>Chicken sotck prices decreased</li>
            <li>Toys sotck prices increased</li>
            <li aria-hidden="true">Gold sotck prices increased</li> */}
          {/* </ul> */}
        </div>
      </div>
    
    {/* logo */} 
    {/* <div className="inline-flex"></div> */}
    {/* search */} 
    {/* <div className="w-full max-w-xs xl:max-w-lg 2xl:max-w-2xl rounded-md hidden xl:flex items-center">
      <select className="bg-transparent uppercase font-bold text-sm p-4 mr-4" name="" id="">
        <option>all categories</option>
      </select>
      <input className="border-l border-gray-300 bg-transparent font-semibold text-sm pl-4" type="text" placeholder="What do you need today"/>
      <Search />
    </div> */}
    {/* login */} 
    {/* <div className="flex-initial">
      <div className="flex justify-end items-center relative">
        <div className="flex mr-4 items-center">
          <a className="inline-block py-2 px-3 hover:bg-gray-200 rounded-full" href="#">
            <div className="flex items-center relative cursor-pointer whitespace-nowrap">Become a host</div>
          </a>
          <div className="block relative">
            <button type="button" className="inline-block py-2 px-3 hover:bg-gray-200 rounded-full relative ">
              <div className="flex items-center h-5">
                <div className="_xpkakx">
                  <svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="presentation" focusable="false" 
                  style={{display: "block", height: "16px", width: "16px", fill: "currentcolor"}}>
                    <path d="m8.002.25a7.77 7.77 0 0 1 7.748 7.776 7.75 7.75 0 0 1 -7.521 7.72l-.246.004a7.75 7.75 0 0 1 -7.73-7.513l-.003-.245a7.75 7.75 0 0 1 7.752-7.742zm1.949 8.5h-3.903c.155 2.897 1.176 5.343 1.886 5.493l.068.007c.68-.002 1.72-2.365 1.932-5.23zm4.255 0h-2.752c-.091 1.96-.53 3.783-1.188 5.076a6.257 6.257 0 0 0 3.905-4.829zm-9.661 0h-2.75a6.257 6.257 0 0 0 3.934 5.075c-.615-1.208-1.036-2.875-1.162-4.686l-.022-.39zm1.188-6.576-.115.046a6.257 6.257 0 0 0 -3.823 5.03h2.75c.085-1.83.471-3.54 1.059-4.81zm2.262-.424c-.702.002-1.784 2.512-1.947 5.5h3.904c-.156-2.903-1.178-5.343-1.892-5.494l-.065-.007zm2.28.432.023.05c.643 1.288 1.069 3.084 1.157 5.018h2.748a6.275 6.275 0 0 0 -3.929-5.068z"></path></svg>
                </div>
              </div>
            </button> 
          </div>
        </div>

        <div className="block">
            <div className="inline relative">
                <button type="button" className="inline-flex items-center relative px-2 border rounded-full hover:shadow-lg">
                    <div className="pl-1">
                        <svg
                            viewBox="0 0 32 32"
                            xmlns="http://www.w3.org/2000/svg"
                            aria-hidden="true"
                            role="presentation"
                            focusable="false"
                            
                            style= {{display: "block", height: '16px', width: "16px", fill: "none", strokeWidth: 3, overflow: "visible"}}
                        >
                            <g fill="none" fill-rule="nonzero">
                                <path d="m2 16h28"></path>
                                <path d="m2 24h28"></path>
                                <path d="m2 8h28"></path>
                            </g>
                        </svg>
                    </div>

                    <div className="block flex-grow-0 flex-shrink-0 h-10 w-12 pl-5">
                        <svg
                            viewBox="0 0 32 32"
                            xmlns="http://www.w3.org/2000/svg"
                            aria-hidden="true"
                            role="presentation"
                            focusable="false"
                            style= {{display: "block", height: '100%', width: "100%", fill: "currentcolor"}}
                        >
                            <path d="m16 .7c-8.437 0-15.3 6.863-15.3 15.3s6.863 15.3 15.3 15.3 15.3-6.863 15.3-15.3-6.863-15.3-15.3-15.3zm0 28c-4.021 0-7.605-1.884-9.933-4.81a12.425 12.425 0 0 1 6.451-4.4 6.507 6.507 0 0 1 -3.018-5.49c0-3.584 2.916-6.5 6.5-6.5s6.5 2.916 6.5 6.5a6.513 6.513 0 0 1 -3.019 5.491 12.42 12.42 0 0 1 6.452 4.4c-2.328 2.925-5.912 4.809-9.933 4.809z"></path>
                        </svg>
                    </div>
                </button>
            </div>
        </div>
      </div>
    </div> */}
</nav>
  )
}

export default Appbar