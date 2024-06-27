import React from 'react'
import Image from 'next/image'

function SlidesItem({activeInfo}) {
  return (
    <div className="relative h-full w-full rounded-l-lg flex items-start justify-center">
      <Image src={activeInfo.img} alt={activeInfo.title} className='absolute w-full h-full object-cover rounded-l-lg -z-10 transition' />
      <div className="absolute w-full h-full bg-[radial-gradient(circle_at_top,_var(--tw-gradient-stops))] from-black  to-transparent -z-10"></div>
      <div className="px-14 py-8 w-full text-white max-w-lg space-y-4">
        <h3 className='text-5xl transition text-center'>
          {activeInfo.title}
        </h3>
        <p className='transition text-center'>{activeInfo.desc}</p>
      </div>
    </div>
  )
}

export default SlidesItem