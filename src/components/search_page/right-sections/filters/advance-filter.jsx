import React from 'react'
import {Accordion, AccordionItem} from "@nextui-org/react";
import { CheckSquareIcon, TruckIcon, ShieldCheckIcon, ChevronLeft } from 'lucide-react';

function AdvanceFilter({}) {

    // const filters = [
    //     {icon: CheckSquareIcon, title: "متوفر", onClick:()=>{}},
    //     {icon: TruckIcon, title: "شحن مجاني", onClick:()=>{}},
    //     {icon: ShieldCheckIcon, title: "الضمان", onClick:()=>{}},
    // ]
  return (
    <div className={`bg-gray-200/70 dark:bg-black/70
    shadow-medium transition w-full rounded-large p-2 space-y-2`}>
    <Accordion isCompact>
      <AccordionItem key="1" aria-label="advance filter" title="فلاتر متقدمة" indicator={<ChevronLeft />}>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusamus nam commodi ab ea iure mollitia minus 
        voluptatum perferendis. Commodi, obcaecati! Voluptates distinctio sequi modi corrupti natus! Cumque et quod aliquam.
      </AccordionItem>
    </Accordion>
    </div>
  )
}

export default AdvanceFilter