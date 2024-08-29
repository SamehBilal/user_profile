import {useState, createElement} from 'react'
import {Accordion, AccordionItem, Divider} from "@nextui-org/react";
import { MonitorIcon, BadgeSwissFrancIcon, RotateCwIcon, PaletteIcon, ChevronLeft, ShapesIcon } from 'lucide-react';
import Image from 'next/image';
import ShapesImg from '@/public/images/icons/shapes.svg'
import BoardImg from '@/public/images/icons/board.svg'
import MonitorImg from '@/public/images/icons/monitor.svg'
import MarkImg from '@/public/images/icons/mark.svg'

function AdvanceFilter({}) {
  const [isOpen, setIsOpen] = useState(false)
  const [indexOpen, setIndexIsOpen] = useState(null)

    const filters = [
      [
        {img: MonitorImg, title: "العلامة", onClick:()=>{setIsOpen(true); setIndexIsOpen()}},
        {img: MarkImg , title: "دقة الشاشة", onClick:()=>{setIsOpen(true); setIndexIsOpen()}},
      ],
      [
        {Icon: RotateCwIcon, title: "معدل التحديث", onClick:()=>{setIsOpen(true); setIndexIsOpen()}},
        {img: ShapesImg, title: "فئات فرعية", onClick:()=>{setIsOpen(true); setIndexIsOpen()}},
      ],
      [
        {Icon: PaletteIcon, title: "الألوان", onClick:()=>{setIsOpen(true); setIndexIsOpen()}},
        {img: BoardImg, title: "نوع اللوحة", onClick:()=>{setIsOpen(true); setIndexIsOpen()}},
      ],
    ]
    
    const setTheIcon = ({item}) => {
      const {Icon, img, title} = item

      return <div className='bg-white dark:bg-black flex items-center justify-center rounded-md w-[45%] border border-solid border-gray-200 dark:border-gray-700 hover:shadow-md dark:shadow-gray-700'>
        {Icon
        ?<Icon className='h-8 w-[1/2] my-3 mx-auto' />
        :<Image src={img} alt={title} className='dark:brightness-100 brightness-0 h-8 w-[1/2] my-3 mx-auto' />}
        <Divider orientation='vertical' className='h-12' />
        <ChevronLeft className='h-8 w-[1/2] my-3 mx-auto' />
      </div>
    }

  return (
    <div className={`bg-gray-200/70 dark:bg-black/70
    shadow-md dark:shadow-gray-700 transition w-full rounded-large p-2 space-y-2`}>
    <Accordion isCompact>
      <AccordionItem key="1" aria-label="advance filter" title="فلاتر متقدمة" indicator={<ChevronLeft />}>
        <div className="flex flex-col items-center justify-center gap-4">
          {filters.map((_, i)=>{
            return <div key={i} className="flex items-center justify-between gap-4 w-full">
                {setTheIcon({item: _[0]})}
                {setTheIcon({item: _[1]})}
            </div>
          })}
        </div>
      </AccordionItem>
    </Accordion>
    </div>
  )
}

export default AdvanceFilter