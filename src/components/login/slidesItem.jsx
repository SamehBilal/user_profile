import React from 'react'
import Image from 'next/image'

function SlidesItem({activeInfo}) {
  return (
    <div className="relative h-full w-full rounded-l-lg">
        <Image src={activeInfo.img} alt={activeInfo.title} className='absolute w-full h-full object-cover rounded-l-lg -z-10 transition' />
        <div className="px-14 py-8 max-w-96"
          style={{color: activeInfo.color}}>
          <h3 className='text-6xl drop-shadow-lg transition'>
            {activeInfo.title}
          </h3>
          <p className='transition'>{activeInfo.desc}</p>
        </div>
      </div>
  )
}

export default SlidesItem