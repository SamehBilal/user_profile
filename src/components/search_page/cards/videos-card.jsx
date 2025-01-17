import React from 'react'
import {Card, CardHeader, CardBody, CardFooter, Image, Button} from "@nextui-org/react";
import { YoutubeIcon } from 'lucide-react';
import Link from 'next/link';
import Youtube from '@/components/ui/icons/youtube';

function VideosCard({
  index, title='', youtubeId, moreVideos=[], comments=[], imgUrl='https://nextui.org/images/card-example-3.jpeg', 
  openStatus, setVidDis, setCurrentVid
}) {
  // console.log('video card', index, title, moreVideos)
  
  const handleOpenStatus = () => {
    openStatus(true)
    setVidDis('full')
    setCurrentVid({youtubeId, title, moreVideos, comments})
  }
  
  return (
    <Card className={`${index==0?'col-span-6':'md:col-span-2 col-span-6'} 
    md:h-[300px] h-64 group rounded-md`} isPressable 
    onPress={handleOpenStatus}>
      <CardHeader className="absolute z-10 top-1 flex-col !items-start group-hover:translate-y-4 group-hover:drop-shadow-lg transition p-4">
        <p className="text-large text-white drop-shadow-2xl line-clamp-2 uppercase font-bold bg-black/50 px-2 pb-1 rounded-md">{title}</p>
      </CardHeader>
      <Image
        removeWrapper
        alt={title || 'youtube video thumbnail'}
        className="z-0 w-full h-full object-cover hover:scale-110 group-hover:brightness-50 group-hover:saturate-100 transition rounded-md"
        src={imgUrl}
      />
      <Youtube size={30} 
      className='absolute size-10 -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2 text-primary/70 group-hover:text-primary/90 fill-primary stroke-[1px] cursor-pointer group-hover:scale-125 transition' />
    </Card>
  )
}

export default VideosCard