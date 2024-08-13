import React from 'react'
import Image from 'next/image'
import Logo from '@/public/images/logo_icon.png'

function Comments({commentsList = []}) {
  return (
    <div className='w-full px-10 py-4 overflow-y-scroll h-[calc(90vh-10rem)]'>
        {commentsList.map((_, i)=>{
            return <div key={i} className="w-full h-20 border-b border-solid flex items-center justify-start gap-4">
            <Image src={_.image} alt='arabhardware logo' width={500} height={500} className='size-14 rounded-full' />
            <div className="space-y-1 w-3/4 text-small">
                <h4 className='font-bold'>{i} {_.username}</h4>
                <p>{_.comment}</p>
            </div>
        </div>
        })}
    </div>
  )
}

export default Comments