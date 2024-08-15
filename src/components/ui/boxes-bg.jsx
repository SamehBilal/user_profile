"use client"
import {useEffect} from 'react'
import CloseBackBtn from './close-back-btn';

function BoxesBg({ setIsPopupOpen, children }) {
    useEffect(()=>{
        const container = document.querySelector("#boxes-bg-container"),  
        tile = document.querySelector(".tile");

        for(let i = 0; i < 1599; i++) { container.appendChild(tile.cloneNode()); }
    }, [])
    
  return (
    <div className='w-screen h-screen flex items-center justify-center overflow-hidden perspective absolute bg-black'>
      <div className="absolute inset-0 bg-gradient-to-bl from-violet-950 to-transparent rounded-full scale-125"></div>
      {/* <div className="absolute inset-0 bg-gradient-to-b from-violet-900 via-indigo-950 via-10% to-black blur-[20px]"></div> */}
        <CloseBackBtn setIsPopupOpen={setIsPopupOpen} />
        <div id="boxes-bg-container" className='w-[140rem] aspect-square grid-rows-[repeat(40,1fr)] grid-cols-[repeat(40,1fr)] xl:grid hidden'>
            <div className="tile transition duration-[1500ms] hover:duration-0"></div>
        </div>
        {children}
    </div>
  )
}

export default BoxesBg