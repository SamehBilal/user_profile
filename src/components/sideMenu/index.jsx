import React from 'react'
import Image from 'next/image'
import ShoppingImg from '@/public/images/shopping.png'
import arrowImg from '@/public/images/shapes/arrow1.png'
import MenuList from './menu_list'

function SideMenu() {

  return (
    <div className='max-xl:hidden fixed left-10 top-40 bottom-12 w-1/5 flex flex-col items-start justify-between text-primary z-10 bg-white'>
      <MenuList />
      <div className="flex justify-end items-center w-full relative">
        <p className='font-extrabold w-1/2'>There is more to discover</p>
        <Image src={ShoppingImg} alt='ArabHardware' className='w-1/2 mt-16' />
      </div>
      <Image src={arrowImg} alt='ArabHardware' className='w-1/2 absolute bottom-10 left-0' />
    </div>
  )
}

export default SideMenu