import React from 'react'
import Image from 'next/image'

function Comments({commentsList = []}) {
  /*
  
    <div className='mx-10 w-[calc(100%-5rem)] text-white relative'>
      <div className="absolute inset-0 bg-gray-900/70 drop-shadow-[90px] rounded-large"></div>
      <p className="text-large font-bold ml-2 pr-10 w-[calc(100%-1rem)] h-10 pt-2 bg-gradient-to-r rounded-tr-large">
        شاهد ايضاً: 
      </p>
      <div className='h-[calc(50vh-5rem)] overflow-y-scroll'>
        {moreVid.map((_, i)=>{
          return <div key={i} className="w-full h-20 flex items-center justify-start pr-10 gap-4 relative">
            <StatusCard image={_.image} i={i} title={_.title} link={_.href} />
          </div>
        })}
      </div>
    </div>
  */
  return (
    <div className='mx-10 w-[calc(100%-5rem)] h-[calc(40vh-7rem)] text-white relative'>
      <div className="absolute inset-0 bg-gray-900/70 drop-shadow-[90px]  rounded-large outline outline-white/40"></div>
      <div className="absolute inset-0 rounded-large flex flex-col justify-between">
        <p className="text-large font-bold ml-2 pr-10 w-[calc(100%-1rem)] h-12 pt-2 bg-gradient-to-r rounded-tr-large">
          التعليقات: 
        </p>
        <div className="h-[calc(40vh-10rem)] overflow-y-scroll">
            {commentsList.map((_, i)=>{
                return <div key={i} className="w-full h-20 flex items-center justify-start gap-4 px-10">
                <Image src={_.image} alt='arabhardware logo' width={500} height={500} className='size-14 rounded-full' />
                <div className="space-y-1 w-3/4 text-small">
                    <h4 className='font-bold'>{i} {_.username}</h4>
                    <p>{_.comment}</p>
                </div>
            </div>
            })}
        </div>
      </div>
    </div>
  )
}

export default Comments