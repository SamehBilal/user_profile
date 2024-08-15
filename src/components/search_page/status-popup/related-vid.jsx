import React from 'react'
import Image from 'next/image'
import StatusCard from './status-card'

function RelatedVid({moreVid = []}) {
  return (
    <div className='mx-10 w-[calc(100%-5rem)] h-[calc(45vh-5rem)] text-white relative'>
      <div className="absolute inset-0 bg-gray-900/70 drop-shadow-[90px] rounded-large outline outline-white/40"></div>
      <div className="absolute inset-0 flex flex-col justify-between rounded-large">
        <p className="text-large font-bold ml-2 pr-10 w-[calc(100%-1rem)] h-12 pt-2 bg-gradient-to-r rounded-tr-large">
          شاهد ايضاً: 
        </p>
        <div className='h-[calc(45vh-5rem)] overflow-y-scroll'>
          {moreVid.map((_, i)=>{
            return <div key={i} className="w-full h-20 flex items-center justify-start pr-10 gap-4 relative">
              <StatusCard image={_.image} i={i} title={_.title} link={_.href} />
            </div>
          })}
        </div>
      </div>
    </div>
  )
}

export default RelatedVid