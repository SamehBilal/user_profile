import React from 'react'
import {Card, CardHeader, Image} from "@nextui-org/react";

function ProductsCard({index=0, title='', imgUrl='https://nextui.org/images/card-example-3.jpeg', price, inStock, url}) {
  return (
    <Card className={`lg:col-span-1 md:col-span-2 col-span-3 group 
      ${index==0?'hover:animate-glowPink':(index==1?'hover:animate-glowYellow':'hover:animate-glowGray dark:hover:animate-glowGrayDark')}`}>
      <div className="bg-white h-44 w-full p-4 relative">
      {!inStock &&
      <div className="absolute top-4 -right-3 bg-primary text-white pb-1 px-4 z-20 rounded-l-lg">غير متوفر</div>}
      {inStock &&
      <div className="absolute top-4 -right-3 bg-green-800 text-white pb-1 px-4 z-20 rounded-l-lg">متوفر</div>}
        <Image
          removeWrapper
          alt="Card background"
          className="rounded-b-none object-contain size-full group-hover:scale-105 transition"
          src={imgUrl}
        />
      </div>
      <CardHeader className="px-4 flex-col items-start">
        <p className="text-large rounded-large uppercase font-bold flex items-center gap-1">
          <span className='line-clamp-1'>{`${price}`}</span>
          <span>EGP</span>
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