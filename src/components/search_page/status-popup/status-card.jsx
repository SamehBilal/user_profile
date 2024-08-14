import React from 'react'
import Image from 'next/image'

function StatusCard({i=0, image, title='', link='#'}) {
  return (
    <a href={link} target="_blank" rel="noopener noreferrer"
    className='size-14 group flex items-center justify-center rounded-full overflow-hidden bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 cursor-pointer'>
        <div className="size-12 flex items-center justify-center">
            <Image src={image} alt="new status" width={500} height={500} className="size-full object-cover rounded-full" />
        </div>
        <div className="hidden group-hover:block absolute top-1/2 left-8 -translate-y-1/2 ">
            <span className='max-w-56 line-clamp-1 bg-gray-200 drop-shadow-xl rounded-lg py-2 px-4'>{title}</span>
            {/* <span className="clip-triangle"></span> */}
        </div>
    </a>
  )
}

export default StatusCard