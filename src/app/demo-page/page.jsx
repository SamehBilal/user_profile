"use client"
import BoxesBg from '@/components/ui/boxes-bg'
import {useState} from 'react'
import Image from 'next/image'
import Logo from '@/public/images/logo_icon.png'
import Person from '@/public/images/person.jpg'
import { EllipsisIcon, Share2Icon } from 'lucide-react'
import ActionDropdown from './dropdown'
import Comments from './comments'


function DemoPage() {
    const [isPopupOpen, setIsPopupOpen] = useState(false)
    const [isExpanded, setIsExpanded] = useState(false)
    const [actionDropdownValue, setActionDropdownValue] = useState(0)

    const demoVid = {
        "href": "https://www.youtube.com/shorts/cEFMdyhsIWg",
        "title": "ميني بي سي جواه RTX 4070!! 😲😲أصغر من الـ Mini-ITX 🔴"
      }
    const videoId = demoVid.href?.split('/').pop() || "qlQR3E0Da6E";

    const actoins = [
      {link: '#', title: 'Share', icon: Share2Icon},
      {link: '#', title: 'Share', icon: Share2Icon},
      {link: '#', title: 'Share', icon: Share2Icon},
      {link: '#', title: 'Share', icon: Share2Icon},
    ]

    const commentsList = [
      {username: "أحمد", image: "https://picsum.photos/200?random=1", comment: "عمل رائع!"},
      {username: "فاطمة", image: "https://picsum.photos/200?random=2", comment: "أداء ممتاز!"},
      {username: "محمد", image: "https://picsum.photos/200?random=3", comment: "مذهل!"},
      {username: "علي", image: "https://picsum.photos/200?random=4", comment: "استمر في العمل الجيد!"},
      {username: "سارة", image: "https://picsum.photos/200?random=5", comment: "رائع!"},
      {username: "يوسف", image: "https://picsum.photos/200?random=6", comment: "مبهر!"},
      {username: "مريم", image: "https://picsum.photos/200?random=7", comment: "ممتاز!"},
      {username: "عمر", image: "https://picsum.photos/200?random=8", comment: "مذهل!"},
      {username: "ليلى", image: "https://picsum.photos/200?random=9", comment: "رائع!"},
      {username: "خالد", image: "https://picsum.photos/200?random=10", comment: "عمل رائع!"},
      {username: "نور", image: "https://picsum.photos/200?random=11", comment: "جهد رائع!"},
      {username: "ريم", image: "https://picsum.photos/200?random=12", comment: "عمل جيد!"},
      {username: "زياد", image: "https://picsum.photos/200?random=13", comment: "جيد جدا!"},
      {username: "هند", image: "https://picsum.photos/200?random=14", comment: "رائع!"},
      {username: "ماجد", image: "https://picsum.photos/200?random=15", comment: "رائع!"},
      {username: "نادية", image: "https://picsum.photos/200?random=16", comment: "رائع!"},
      {username: "سامي", image: "https://picsum.photos/200?random=17", comment: "رائع!"},
      {username: "منى", image: "https://picsum.photos/200?random=18", comment: "رائع!"},
      {username: "طارق", image: "https://picsum.photos/200?random=19", comment: "رائع!"},
      {username: "هدى", image: "https://picsum.photos/200?random=20", comment: "رائع!"}
    ];
    
  return (
    <div className='w-screen h-screen flex items-center justify-center'>
        <button className='p-10 w-1/2 text-white bg-red-700 font-bold text-4xl uppercase'
        onClick={()=>setIsPopupOpen(prev=>!prev)}>open</button>
        
        {isPopupOpen && <BoxesBg setIsPopupOpen={setIsPopupOpen} >
            <div className="absolute z-40 xl:w-[70%] max-w-grid w-[96%] h-[90vh] left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 grid grid-cols-2">
                <div className="h-[90vh]">
                    <iframe src={`https://www.youtube.com/embed/${videoId}`} 
                    width={1000} height={1500}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen autoPlay
                    className='size-full'
                    frameborder="0"></iframe>
                </div>
                <div className="h-[90vh] bg-white dark:bg-black relative">
                  {/* arabhardware header */}
                  <div className="w-full h-20 border-b border-solid dark:border-white border-black shadow-lg flex items-center justify-start pr-10 gap-4">
                    <Image src={Logo} alt='arabhardware logo' className='size-14 rounded-full' />
                    <div className="space-y-1 w-3/4 text-small">
                      <h4 className='font-bold'>عرب هاردوير</h4>
                      <p>محتوى اصلي</p>
                    </div>
                    <div id='action-dropdown-btn' className="cursor-pointer p-2 relative" onClick={()=>{}}>
                      <EllipsisIcon className='' onClick={()=>setIsExpanded(prev=>!prev)}/>
                    </div>
                      <ActionDropdown isExpanded={isExpanded} setIsExpanded={setIsExpanded} setValue={setActionDropdownValue} items={actoins} />
                  </div>
                  <Comments commentsList={commentsList} />
                  <div className="w-full h-20 border-t border-solid dark:border-white border-black shadow-lg flex items-center justify-start pr-10 gap-4">
                  </div>
                </div>
            </div>
        </BoxesBg>}
    </div>
  )
}

export default DemoPage