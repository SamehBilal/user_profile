import React from 'react'
import Image from 'next/image'
import ActionDropdown from './dropdown'

function AhwHeader({Logo, title, desc, Icon, isExpanded, setIsExpanded, setValue, items}) {
  return (
    <div className="w-full h-20 flex items-center justify-start px-10 gap-4 bg-white relative">
        <Image src={Logo} alt='arabhardware logo' className='size-14 rounded-full' />
        <div className="space-y-1 w-3/4 text-small">
            <h4 className='font-bold'>{title}</h4>
            <p>{desc}</p>
        </div>
        <div id='action-dropdown-btn' className="cursor-pointer p-2 relative" onClick={()=>setIsExpanded(prev=>!prev)}>
            <Icon className="" />
        </div>
            <ActionDropdown isExpanded={isExpanded} setIsExpanded={setIsExpanded} setValue={setValue} items={items} />
        </div>
  )
}

export default AhwHeader