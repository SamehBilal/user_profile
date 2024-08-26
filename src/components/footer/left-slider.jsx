"use client"
import {useState, useEffect, useRef} from 'react'
import Image from 'next/image';

// import { footerData } from './data';
import { ArrowUpLeft } from 'lucide-react';

function LeftSlider({data=[]}) {
    const [current, setCurrent] = useState(0)
    
    useEffect(()=>{
        const timer = setInterval(()=>{
        setCurrent(prev=>{
            if(prev+1<data.length-1) return prev+1
            else return 0
        })
        }, 6000) 
        return () => clearInterval(timer)
    }, [])

  return (
    <div className='w-full h-full grid grid-cols-3 items-end'>
        <div className="h-full w-full flex flex-col items-start justify-end text-tiny">
            {data.map((_, i)=>{
            return  <div key={i} 
            className={`!h-10 w-full text-white relative`}>
                <span className={`absolute h-full top-0 right-0 transition-all duration-[3s] ease-in bg-gradient-to-l to-white dark:to-black from-[#F95560] 
                    ${i==current||0? 'w-full': 'w-0.5'}`}></span>
                <span className='absolute inset-0 flex items-center justify-start px-4'>{_.title}</span>
            </div> 
            })}
        </div>
        <div className="rounded-large footer-card overflow-hidden h-72 bg-white/50 backdrop:blur-lg col-span-2 text-black">
            <Image src={data[current].img} alt={data[current].title} className='w-full h-2/3' />
            <div className="flex items-center justify-center h-1/3">
                <div className="relatve w-fit h-fit overflow-visible relative">
                    {data[current].desc}
                    <ArrowUpLeft className='absolute size-4 -left-2 -top-2 text-white' />
                </div>
            </div>
        </div>
    </div>)
}

export default LeftSlider