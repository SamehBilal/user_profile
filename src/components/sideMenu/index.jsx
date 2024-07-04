import React from 'react'
import Image from 'next/image'
import ShoppingImg from '@/public/images/shopping.png'
import arrowImg from '@/public/images/shapes/arrow1.png'
import MenuList from './menu_list'
import { en, ar } from '@/public/strings_manager'
import NavbarBottomMenu from '../appbar/navbar_bottom_menu'

function SideMenu() {

  return (
    <div className='max-xl:hidden fixed lrt:left-10 rtl:right-10 top-20 bottom-12 w-1/5 flex flex-col items-start justify-between text-primary dark:text-primaryLight z-10 bg-white dark:bg-darkGray'>
      <div className="space-y-4 w-full">
        <NavbarBottomMenu />
        <MenuList />
      </div>
      <div className="flex justify-end items-center w-full relative">
        <p className='font-extrabold w-1/2'>{ar.middle.imageMessage}</p>
        <Image src={ShoppingImg} alt='ArabHardware' className='w-1/2 mt-16' />
      </div>
      {/* <Image src={arrowImg} alt='ArabHardware' className='w-1/2 absolute bottom-10 left-0' /> */}
    </div>
  )
}

export default SideMenu