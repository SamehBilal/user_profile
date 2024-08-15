import React from 'react'
import Image from 'next/image'

function StatusCard({i=0, image, title='', link='#'}) {
  return (
    <a href={link} target="_blank" rel="noopener noreferrer" className='group cursor-pointer w-full relative flex items-center justify-between'>
      <div className="size-16 group-hover:w-full transition-all ease-soft-spring flex items-center justify-center group-hover:justify-start rounded-full overflow-hidden bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500">
        <div className="size-14 flex items-center justify-center group-hover:mr-2">
            <Image src={image} alt="new status" width={500} height={500} className="size-full object-cover rounded-full" />
        </div>
      </div>
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[calc(100%-5rem)]">
          <span className=' line-clamp-1 rounded-lg py-2'>
            {title}
          </span>
      </div>
    </a>
  )
}

export default StatusCard