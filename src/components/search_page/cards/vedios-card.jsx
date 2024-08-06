import React from 'react'
import {Card, CardHeader, CardBody, CardFooter, Image, Button} from "@nextui-org/react";
import { Play } from 'lucide-react';
import Link from 'next/link';

function VediosCard({
  index, title='', subTitle='', imgUrl='https://nextui.org/images/card-example-3.jpeg', url, youtubeId
}) {
  
  return (
    <Card className={`${index==0?'col-span-6 my-4':'col-span-2'} h-[300px] group border-2 border-primary border-solid`}>
      <CardHeader className="absolute z-10 top-1 flex-col !items-start group-hover:translate-y-4 group-hover:drop-shadow-lg transition p-4">
        <p className="text-large text-white drop-shadow-2xl line-clamp-2 uppercase font-bold bg-black/50 px-2 pb-1 rounded-large">{title}</p>
      </CardHeader>
      <Image
        removeWrapper
        alt="Vedio Thumbnail"
        className="z-0 w-full h-full object-cover hover:scale-110 group-hover:brightness-50 group-hover:saturate-100 transition"
        src={imgUrl}
      />
      <Play className='absolute size-10 -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2 text-primary border border-primary border-solid bg-white/25 rounded-large cursor-pointer group-hover:scale-125 transition' />
    </Card>
  )
}

export default VediosCard