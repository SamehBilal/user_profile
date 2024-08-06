import React from 'react'
import {Card, CardHeader, CardBody, CardFooter, Image, Button} from "@nextui-org/react";
import Link from 'next/link';

function ReviewsCard({
  index, title='', imgUrl='https://nextui.org/images/card-example-3.jpeg', desc='',
}) {
  return (
    <Card className={`${index==0?'col-span-6 h-[150px] my-4':'col-span-3 h-[125px]'} bg-black/15 
     group flex-row items-center justify-between gap-4 hover:bg-white/90 dark:hover:bg-black/90 transition`}>
      <Image
        removeWrapper
        alt="Card background"
        className={`z-0 w-1/5 ${index==0?'w-2/5':'w-1/5'} 
        h-full object-cover group-hover:brightness-125 dark:group-hover:brightness-75 group-hover:scale-105 transition rounded-l-none`}
        src={imgUrl}
      />
      <CardHeader className='flex-1 flex-col items-start justify-between h-full'>
          <h4  className="text-primary uppercase font-bold line-clamp-1">
              {title}
          </h4>
          <p className="font-medium text-small line-clamp-2">
              {desc}
          </p>
          <Link href={`#`} className='text-primaryLight text-tiny mr-auto'>اقرأ المزيد</Link>
      </CardHeader>
    </Card>
  )
}

export default ReviewsCard