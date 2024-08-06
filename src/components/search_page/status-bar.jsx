import React from 'react'
import Image from 'next/image'

function StatusBar({statusData}) {
  return (
    <ul className="absolute inset-0 flex justify-start items-center gap-4">
        {statusData.map((_, i)=>{
        return <li class="mx-auto size-14 flex items-center justify-center rounded-full overflow-hidden bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 cursor-pointer">
            <div className="size-12 flex items-center justify-center">
                <Image src={_.img} alt="new status" className="size-full object-cover rounded-full" />
            </div>
        </li>
        // return <li className="size-14 border-2 border-solid border-black dark:border-white rounded-full overflow-hidden">
        //     <Image src={_.img} alt="new status" className="size-full object-cover" />
        // </li>
        })}
    </ul>
  )
}

export default StatusBar