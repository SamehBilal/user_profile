import React from 'react'
import Image from 'next/image'
import StatusCard from './status-card'

function RelatedVid({moreVid = []}) {
  return (
    <div className='w-full text-white relative'>
      <p className="text-large font-bold mx-10 absolute z-10 -top-1 bg-gradient-to-r from-[#2c1061] to-[#20133a] w-[calc(100%-5rem)] py-2">
        شاهد ايضاً: 
      </p>
      <div className='pt-10 h-[calc(50vh-5rem)] overflow-y-scroll'>
        {moreVid.map((_, i)=>{
          return <div className="w-full h-20 flex items-center justify-start pr-10 gap-4 relative">
            <StatusCard key={i} image={_.image} i={i} title={_.title} link={_.href} />
          </div>
        })}
      </div>
    </div>
  )
}

export default RelatedVid