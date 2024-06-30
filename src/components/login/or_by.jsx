import React from 'react'
import { siGoogle, siFacebook, siTwitch, siDiscord } from 'simple-icons'
import  parse from 'html-react-parser';

function OrBy({text, DontHaveAnAccount}) {
    const mediaIcons = [siGoogle, siFacebook, siTwitch, siDiscord]

  return (
    <div className="space-y-4 absolute bottom-8 max-w-[calc(100%-7rem)] left-1/2 -translate-x-1/2 w-2/4">
      <div className="flex gap-4 items-center justify-center mx-auto">
        <div className="h-[1px] bg-zinc-300 flex-grow"></div>
        <p className="text-zinc-500">{text}</p>
        <div className="h-[1px] bg-zinc-300 flex-grow"></div>
      </div>
      <div className="flex w-full justify-between items-center simple_icons">
        {mediaIcons.map((_, i)=>{ 
          return <div key={i} className="w-8 h-8 bg-lightGray rounded-lg p-2 text-zinc-700 cursor-pointer hover:bg-zinc-700 hover:text-white transition-all duration-500 hover:scale-110">
        {parse(_.svg)}
        </div>
        })}
      </div>
      <DontHaveAnAccount />
    </div>
  )
}

export default OrBy