import React from 'react'
import {Accordion, AccordionItem} from "@nextui-org/react";
import { CheckSquareIcon, TruckIcon, ShieldCheckIcon, ChevronLeft } from 'lucide-react';

function FastFilter({}) {

    const filters = [
        {icon: CheckSquareIcon, title: "متوفر", onClick:()=>{}},
        {icon: TruckIcon, title: "شحن مجاني", onClick:()=>{}},
        {icon: ShieldCheckIcon, title: "الضمان", onClick:()=>{}},
    ]
  return (
    <div className={`bg-gray-200/70 dark:bg-black/70
    shadow-md dark:shadow-gray-700 transition w-full rounded-large p-2 space-y-2`}>
    <Accordion isCompact>
      <AccordionItem key="1" aria-label="fast filter" title="فلاتر سريعة" indicator={<ChevronLeft />}>
        <div className="flex justify-between items-center w-full gap-2">
            {filters.map((_, i)=>{
                return <div key={i} className="flex flex-col items-center justify-center w-24 group cursor-pointer"
                onClick={()=>_.onClick()}>
                <_.icon className='group-hover:bg-primaryLight bg-white dark:bg-black w-full p-2 size-10 rounded-sm' />
                <p>{_.title}</p>
                </div>
            })}
        </div>
      </AccordionItem>
    </Accordion>
    </div>
  )
}

export default FastFilter