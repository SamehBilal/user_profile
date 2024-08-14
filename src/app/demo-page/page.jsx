"use client"
import BoxesBg from '@/components/ui/boxes-bg'
import { useState } from 'react'
import Logo from '@/public/images/logo_icon.png'
import { EllipsisIcon } from 'lucide-react'
import Comments from './comments'
import StatusCard from './status-card'
import AhwHeader from './ahw-header'
import { moreVid, videoId, actoins, commentsList } from './data'


function DemoPage() {
    const [isPopupOpen, setIsPopupOpen] = useState(false)
    const [isExpanded, setIsExpanded] = useState(false)
    const [actionDropdownValue, setActionDropdownValue] = useState(0)
    
  return (
    <div className='w-screen h-screen flex items-center justify-center text-black'>
        <button className='p-10 w-1/2 text-white bg-red-700 font-bold text-4xl uppercase'
        onClick={()=>setIsPopupOpen(prev=>!prev)}>open</button>
        
        {isPopupOpen && <BoxesBg setIsPopupOpen={setIsPopupOpen} >
            <div className="absolute z-40 xl:w-[70%] max-w-grid w-[96%] h-[90vh] left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 grid grid-cols-2">
                <div className="h-[90vh] relative">
                    <iframe  src={`https://www.youtube.com/embed/${videoId}?rel=0&autoplay=1&mute=0`} 
                    width={1000} height={1500}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen autoPlay
                    className='size-full'
                    frameBorder="0"></iframe>
                </div>
                <div className="h-[90vh] relative">
                  {/* arabhardware header */}
                  <AhwHeader title='عرب هاردوير' desc='محتوى اصلي' Icon={EllipsisIcon} Logo={Logo}
                  isExpanded={isExpanded} setIsExpanded={setIsExpanded} setValue={setActionDropdownValue} items={actoins} />
                  <Comments commentsList={commentsList} />
                  <div className="w-full h-20  flex items-center justify-start pr-10 gap-4 bg-white relative">
                    {moreVid.map((_, i)=>{
                      return <StatusCard key={i} image={_.image} i={i} title={_.title} link={_.href} />
                    })}
                  </div>
                </div>
            </div>
        </BoxesBg>}
    </div>
  )
}

export default DemoPage