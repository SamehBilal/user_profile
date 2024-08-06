import React from 'react'
import {Card, CardHeader, CardBody, CardFooter, Image, Button} from "@nextui-org/react";

function ProductsCard({title='', subTitle='', imgUrl='https://nextui.org/images/card-example-3.jpeg'}) {
  return (
    <Card className=" col-span-1 h-[300px] group">
      <CardHeader className="absolute z-10 top-1 flex-col !items-start group-hover:translate-y-4 group-hover:drop-shadow-lg transition">
        <p className="text-tiny text-black dark:text-white drop-shadow-lg bg-white/50 dark:bg-black/50 px-2 rounded-large uppercase font-bold line-clamp-5">{title}</p>
        <h4 className="font-medium text-large">{subTitle}</h4>
      </CardHeader>
      <Image
        removeWrapper
        alt="Card background"
        className="z-0 w-full h-full object-cover hover:scale-110 hover:brightness-50 saturate-50 transition"
        src={imgUrl}
      />
    </Card>
  )
}

export default ProductsCard