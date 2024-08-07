import React from 'react'
import {Card, CardHeader, CardBody, CardFooter, Image, Button} from "@nextui-org/react";

function ProductsCard({title='', imgUrl='https://nextui.org/images/card-example-3.jpeg', price, inStock}) {
  return (
    <Card className="lg:col-span-1 md:col-span-2 col-span-3 group">
      <div className="bg-white h-1/2 w-full p-4">
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
        <h4 className="font-medium text-small line-clamp-2">{title}</h4>
        <p className="text-tiny text-primaryLight mr-auto">تسوق الآن</p>
      </CardHeader>
    </Card>
  )
}

export default ProductsCard