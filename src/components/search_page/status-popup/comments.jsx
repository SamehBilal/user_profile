import React from 'react'
import Image from 'next/image'

function Comments({commentsList = []}) {
  return (
    <div className='w-full text-white relative'>
      <p className="text-large font-bold mx-10 absolute -top-1 bg-gradient-to-r from-[#271152] to-[#1c142d] w-[calc(100%-5rem)] py-2">
        التعليقات: 
      </p>
      <div className="pt-10 h-[calc(40vh-5rem)] overflow-y-scroll">
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
  )
}

export default Comments