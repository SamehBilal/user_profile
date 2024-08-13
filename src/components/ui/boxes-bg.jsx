"use client"
import {useEffect} from 'react'

function BoxesBg({ setIsPopupOpen, children }) {

    useEffect(()=>{
        const container = document.querySelector("#boxes-bg-container"),  
        tile = document.querySelector(".tile");

        for(let i = 0; i < 1599; i++) { container.appendChild(tile.cloneNode()); }
    }, [])
    
  return (
    <div className='w-screen h-screen flex items-center justify-center overflow-hidden perspective absolute bg-black'>
        <button onClick={()=>setIsPopupOpen(false)}
        className='absolute z-50 top-10 right-10 size-16 flex items-center justify-center text-xl border border-solid border-white text-white rounded-full'>
            <span>X</span>
        </button>
        <div id="boxes-bg-container" className='w-[140rem] aspect-square grid-rows-[repeat(40,1fr)] grid-cols-[repeat(40,1fr)] xl:grid hidden'>
            <div className="tile border border-solid border-white/25 transition duration-[1500ms] hover:duration-0"></div>
        </div>
        {children}
    </div>
  )
}

export default BoxesBg