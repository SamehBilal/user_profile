"use client"
import { useEffect } from 'react'
import BoxesBg from '@/components/ui/boxes-bg'
import Image from 'next/image'
import Logo from '@/public/images/logo_icon.png'
import { EllipsisIcon, SendHorizonal } from 'lucide-react'
import Comments from '@/components/search_page/status-popup/comments'
import RelatedVid from '@/components/search_page/status-popup/related-vid'
import StatusCard from '@/components/search_page/status-popup/status-card'
import AhwHeader from '@/components/search_page/status-popup/ahw-header'
import { moreVid, videoId, shortVideoId, actoins, commentsList } from '@/components/search_page/status-popup/data'

function MediaPlayer({isPopupOpen, setIsPopupOpen, isExpanded, setIsExpanded, actionDropdownValue, setActionDropdownValue, vidDis, setVidDis}) {

    console.log('videoId, shortVideoId', videoId, shortVideoId)
  return (
    <>
        
    {isPopupOpen && <div className="fixed z-[200] -top-[5%] left-0 w-screen h-[110vh] flex items-center justify-center text-white">
        <BoxesBg setIsPopupOpen={setIsPopupOpen} >
            {vidDis=='short' && <div className="absolute z-40 xl:w-[70%] max-w-grid w-[96%] h-[90vh] left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 grid grid-cols-2 rounded-[30px] overflow-hidden">
                <div className="h-[90vh] relative">
                    <iframe  src={`https://www.youtube.com/embed/${shortVideoId}?rel=0&autoplay=1&mute=0`} 
                    width={1000} height={1500}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen autoPlay
                    className='size-full'
                    frameBorder="0"></iframe>
                </div>
                <div className="h-[90vh] relative flex flex-col justify-between">
                    <div className="absolute inset-0 backdrop-blur-[150px]"></div>
                    {/* arabhardware header */}
                    <AhwHeader title='عرب هاردوير' desc='محتوى اصلي' Icon={EllipsisIcon} Logo={Logo}
                    isExpanded={isExpanded} setIsExpanded={setIsExpanded} setValue={setActionDropdownValue} items={actoins} />
                    <RelatedVid moreVid={moreVid} />
                    
                    
                    <Comments commentsList={commentsList} />
                    <div className="w-full h-14 rounded-full bg-white text-black overflow-hidden flex items-center justify-between gap-2 relative">
                        <Image src={Logo} alt='user profile image' className='size-14 rounded-full border border-solid border-white' />
                        <input type="text" 
                        className=' flex-1 text-xl h-14 p-4 border-none outline-none focus:border-none bg-transparent' />
                        <button type="submit" className='border border-solid border-white text-white bg-black font-bold h-14 px-4 rounded-full'>
                            <SendHorizonal className='rotate-180' />
                        </button>
                        
                    </div>
                    
                </div>
            </div>}
            {vidDis=='full' && <div className="absolute z-40 xl:w-[70%] max-w-grid w-[96%] h-[90vh] left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 grid grid-cols-1 rounded-[30px] overflow-hidden">
                
                <div className="h-[90vh] relative flex flex-col justify-between">
                    <div className="absolute inset-0 backdrop-blur-[150px]"></div>
                    {/* arabhardware header */}
                    <AhwHeader title='عرب هاردوير' desc='محتوى اصلي' Icon={EllipsisIcon} Logo={Logo}
                    isExpanded={isExpanded} setIsExpanded={setIsExpanded} setValue={setActionDropdownValue} items={actoins} />
                    <div className="h-[calc(90vh-8.5rem)] relative">
                        <iframe  src={`https://www.youtube.com/embed/${videoId}?rel=0&autoplay=1&mute=0`} 
                        width={1000} height={1500}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen autoPlay
                        className='size-full'
                        frameBorder="0"></iframe>
                    </div>
                    <div className="w-full h-14 rounded-full bg-white text-black overflow-hidden flex items-center justify-between gap-2 relative">
                        <Image src={Logo} alt='user profile image' className='size-14 rounded-full border border-solid border-white' />
                        <input type="text" 
                        className=' flex-1 text-xl h-14 p-4 border-none outline-none focus:border-none bg-transparent' />
                        <button type="submit" className='border border-solid border-white text-white bg-black font-bold h-14 px-4 rounded-full'>
                            <SendHorizonal className='rotate-180' />
                        </button>
                        
                    </div>
                    
                </div>
            </div>}
        </BoxesBg>
    </div>}
    </>
  )
}

export default MediaPlayer