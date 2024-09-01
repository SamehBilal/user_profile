"use client"
import { useEffect, useState, useRef } from 'react'
import BoxesBg from '@/components/ui/boxes-bg'
import Image from 'next/image'
import Logo from '@/public/images/logo_icon.png'
import { ChevronDown, ChevronUp, EllipsisIcon, SendHorizonal } from 'lucide-react'
import Comments from '@/components/search_page/status-popup/comments'
import RelatedVid from '@/components/search_page/status-popup/related-vid'
import StatusCard from '@/components/search_page/status-popup/status-card'
import AhwHeader from '@/components/search_page/status-popup/ahw-header'
import { moreVid, videoId, shortVideoId, actoins, commentsList } from '@/components/search_page/status-popup/data'
import { PauseIcon, PlayIcon, Volume2Icon, VolumeXIcon } from 'lucide-react'

function MediaPlayer({isPopupOpen, setIsPopupOpen, isExpanded, setIsExpanded, actionDropdownValue, setActionDropdownValue, vidDis, currentVid, 
    setCurrentVid ,statusData, activeVidIndex, setActiveVidIndex}) {
    const [nextVid, setNextVid] = useState(null)
    const [prevVid, setPrevVid] = useState(null)
    // const playerRef = useRef(null);
    // const [player, setPlayer] = useState(null);
    // const [isMuted, setIsMuted] = useState(false);
    // const [isPlaying, setIsPlaying] = useState(true);
    // const [likes, setLikes] = useState(651);
    // const [dislikes, setDislikes] = useState(0);

//     useEffect(() => {
//         const onYouTubeIframeAPIReady = () => {
//             if(currentVid?.youtubeId){
//                 const newPlayer = new YT.Player(playerRef.current, {
//                     videoId: currentVid?.youtubeId,
//                     playerVars: { autoplay: 1, controls: 0 },
//                     events: {
//                       onReady: (event) => {
//                         setPlayer(event.target);
//                         const iframe = event.target.getIframe();
//                         iframe.setAttribute('allow', 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture');
//                         iframe.setAttribute('allowFullScreen', 'true');
//                         iframe.setAttribute('autoplay', 'true');
//                       },
//                       onStateChange: (event) => {
//                         if (event.data === YT.PlayerState.PLAYING) { setIsPlaying(true); } 
//                         else { setIsPlaying(false); }
//                         if (event.target && event.target.isMuted()) { setIsMuted(true); } 
//                         else { setIsMuted(false); }
//                       },
//                     }
//                 });
//             }
//         };
    
//         if (!window.YT) {
//           const tag = document.createElement('script');
//           tag.src = 'https://www.youtube.com/iframe_api';
//           window.onYouTubeIframeAPIReady = onYouTubeIframeAPIReady;
//           const firstScriptTag = document.getElementsByTagName('script')[0];
//           firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
//         } else {
//           onYouTubeIframeAPIReady();
//         }
//       }, [currentVid?.youtubeId]);
      
//   const handleMute = () => {
//     if (player) {
//       if (isMuted) {
//         player.unMute();
//       } else {
//         player.mute();
//       }
//       setIsMuted(!isMuted);
//     }
//   };

//   const handlePlayPause = () => {
//     if (player) {
//       if (isPlaying) {
//         player.pauseVideo();
//       } else {
//         player.playVideo();
//       }
//       setIsPlaying(!isPlaying);
//     }
//   };


    // console.log('videoId, shortVideoId', videoId, shortVideoId)

    useEffect(()=>{
        
    const updatePrevNext = () => {
        if(statusData[activeVidIndex+1]) setNextVid({youtubeId: statusData[activeVidIndex+1].youtubeId, title: statusData[activeVidIndex+1].title})
        else setNextVid(null)
        if(statusData[activeVidIndex-1]) setPrevVid({youtubeId: statusData[activeVidIndex-1].youtubeId, title: statusData[activeVidIndex-1].title})
        else setPrevVid(null)
    }
    updatePrevNext()
    }, [])

    const handlePrevVid = () => {
        if(statusData[activeVidIndex-1]){ 
            setCurrentVid({youtubeId: statusData[activeVidIndex-1].youtubeId, title: statusData[activeVidIndex-1].title})
            setActiveVidIndex(activeVidIndex-1)
            if(statusData[activeVidIndex-2]) setPrevVid({youtubeId: statusData[activeVidIndex-1].youtubeId, title: statusData[activeVidIndex-1].title})
            else setPrevVid(null)
        }
        else setPrevVid(null)
    }
    const handleNextVid = () => {
        if(statusData[activeVidIndex+1]){ 
            setCurrentVid({youtubeId: statusData[activeVidIndex+1].youtubeId, title: statusData[activeVidIndex+1].title})
            setActiveVidIndex(activeVidIndex+1)
            if(statusData[activeVidIndex+2]) setNextVid({youtubeId: statusData[activeVidIndex+1].youtubeId, title: statusData[activeVidIndex+1].title})
            else setNextVid(null)
        }
        else setNextVid(null)
    }
    // console.log('prevVid', prevVid)
    // console.log('nextVid', nextVid)

  return (
    <>
        
    {isPopupOpen && currentVid && <div className="fixed z-[200] -top-[5%] left-0 w-screen h-[110vh] flex items-center justify-center text-white">
        <BoxesBg setIsPopupOpen={setIsPopupOpen} >
            {vidDis=='full' && <div className="absolute z-40 xl:w-[70%] max-w-grid w-[96%] h-[90vh] left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 grid grid-cols-2 rounded-[30px] overflow-hidden">
                <div className="h-[90vh] relative">
                    <iframe  src={`https://www.youtube.com/embed/${currentVid.youtubeId}?rel=0&autoplay=1&mute=0`} 
                    width={1000} height={1500}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen autoPlay
                    className='size-full'
                    frameBorder="0"></iframe>
                </div>
                <div className="h-[90vh] relative flex flex-col justify-between">
                    <div className="absolute inset-0 backdrop-blur-[150px]"></div>
                    {/* arabhardware header */}
                    <AhwHeader title='عرب هاردوير' desc={currentVid.title ?? 'محتوى اصلي'} Icon={EllipsisIcon} Logo={Logo}
                    isExpanded={isExpanded} setIsExpanded={setIsExpanded} setValue={setActionDropdownValue} items={actoins} />
                    <RelatedVid moreVid={currentVid.moreVideos ?? moreVid} />
                    
                    
                    <Comments commentsList={currentVid.comments ?? commentsList} />
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
            {vidDis=='small' && 
            <div className="absolute bottom-1/2 right-[5%] translate-y-1/2 flex flex-col items-center justify-center gap-4">
            <button className="bg-white/10 hover:bg-white/20 rounded-full p-4 text-gray-100 size-fit disabled:hover:bg-white/10"
            onClick={handlePrevVid} disabled={activeVidIndex<=0}>
                <ChevronUp className='size-8' />
            </button>
            <button className="bg-white/10 hover:bg-white/20 rounded-full p-4 text-gray-100 size-fit disabled:hover:bg-white/10"
            onClick={handleNextVid} disabled={activeVidIndex>=statusData?.length-1}>
                <ChevronDown className='size-8' />
            </button>
        </div>}
            {vidDis=='small' && <div className="absolute z-40 max-w-grid h-[90vh] aspect-shorts group left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 grid grid-cols-1 rounded-[30px] overflow-hidden">
                <div className="h-[90vh] relative flex flex-col justify-between shadow-2xl">
                    <div className="absolute inset-0 backdrop-blur-[150px]"></div>
                    {/* arabhardware header */}
                    {/* <AhwHeader title='عرب هاردوير' desc={currentVid.title ?? 'محتوى اصلي'} Icon={EllipsisIcon} Logo={Logo}
                    isExpanded={isExpanded} setIsExpanded={setIsExpanded} setValue={setActionDropdownValue} items={actoins} /> */}
                    <div className="h-full relative">
                        <iframe  src={`https://www.youtube.com/embed/${currentVid.youtubeId}?rel=0&autoplay=1&mute=0`} 
                        width={1000} height={1500}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen autoPlay
                        className='size-full rounded-large'
                        frameBorder="0"></iframe>

                        {/* 
                        <div ref={playerRef} className="size-full rounded-large" />
                        <div className={`absolute top-12 right-3 w-full flex-col item-center justify-end gap-4 group-hover:flex hidden`}>
                            <button className=" size-fit" onClick={handlePlayPause}>
                                {isPlaying? 
                                <PauseIcon fill='white' className='size-6 text-gray-100' />:
                                <PlayIcon fill='white' className='size-6 text-gray-100' />}
                            </button>
                            <button className=' size-fit' onClick={handleMute}>
                                {isMuted? 
                                <VolumeXIcon className='size-6 text-gray-100' />:
                                <Volume2Icon className='size-6 text-gray-100' />}
                            </button>
                        </div> */}

                        </div>
                </div>
            </div>}
        </BoxesBg>
    </div>}
    </>
  )
}

export default MediaPlayer