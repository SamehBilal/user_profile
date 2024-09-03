import React from 'react'
import {Card, CardHeader} from "@nextui-org/react";
import Image from 'next/image';
import PurpleSquares from '@/public/images/shapes/purple-squares.png'
import BlackSquares from '@/public/images/shapes/black-squares.png'
import GraySquares from '@/public/images/shapes/gray-squares.png'

function ProductsCard({index=0, title='', imgUrl='https://nextui.org/images/card-example-3.jpeg', price, inStock, url}) {
  return (
    <Card className={`lg:col-span-1 md:col-span-2 col-span-3 group relative overflow-visible 
      ${index==0?'hover:animate-glowPink':(index==1?'hover:animate-glowYellow':'hover:animate-glowGray dark:hover:animate-glowGrayDark')}`}>
      <div className="bg-white h-44 w-full p-4 relative rounded-t-md">
      <div className={`absolute top-4 -right-3 ${inStock?'bg-green-800':'bg-primary'}  text-white pb-1 px-4 z-20 rounded-l-md`}>
        {!inStock? "نفذت الكمية":"متوفر"}
      </div>
        <Image
          width={1000} height={1000}
          alt="Card background"
          className="rounded-b-none rounded-t-md object-contain size-full group-hover:scale-105 transition"
          src={imgUrl}
        />
      </div>
      <div className="absolute -top-8 -left-2 w-[calc(100%+1rem)] h-10 hidden">
        <Image src={PurpleSquares.src} alt='purple squares' width={1000} height={1000}
        className='absolute top-0 right-0 h-full w-2/3 object-fill -scale-100' />
        <Image src={PurpleSquares.src} alt='purple squares' width={1000} height={1000}
        className='absolute top-2 left-0 h-full w-2/3 object-fill' />
      </div>
      <CardHeader className="px-4 flex-col items-start">
      <p className="text-large text-transparent rounded-large uppercase font-bold flex items-center gap-1 p-2">
      <span className={`line-clamp-1 bg-gradient-conic bg-clip-text 
        ${index==0?'from-primary to-goldDark':(index==1?'from-goldLight to-goldDark':'text-black dark:text-white')} `}>{`${price}`}</span>
      <span className={`bg-gradient-conic bg-clip-text 
        ${index==0?'from-primary to-goldDark':(index==1?'from-goldLight to-goldDark':'text-black dark:text-white')} `}>EGP</span>
    </p>
        <h4 className="font-medium text-small line-clamp-2 h-10">{title}</h4>
            <a href={url || `#`} target="_blank" rel="noopener noreferrer"
            className='text-tiny text-primary dark:text-primaryLight mr-auto'>
            تسوق الآن
            </a>
      </CardHeader>
    </Card>
  )
}

export default ProductsCard