import React from 'react'
import { siGoogle, siFacebook, siTwitch, siDiscord } from 'simple-icons'
import  parse from 'html-react-parser';

function OrBy({text, DontHaveAnAccount, isForgetPswFormShown}) {
    const mediaIcons = [
      {icon: siGoogle, href:"https://arabhardware.com/auth/google"}, 
      {icon: siFacebook, href:"https://arabhardware.com/auth/facebook"}, 
      // {icon: siTwitch}, 
      // {icon: siDiscord}
    ]

  return (
    <>
    {!isForgetPswFormShown &&
      <div className="space-y-4 absolute bottom-6 max-w-[calc(100%-7rem)] left-1/2 -translate-x-1/2 w-full">
      <DontHaveAnAccount />
      <div className="flex gap-4 items-center justify-center mx-auto">
        <div className="h-[1px] bg-zinc-300 flex-grow"></div>
        <p className="text-zinc-500">{text}</p>
        <div className="h-[1px] bg-zinc-300 flex-grow"></div>
      </div>
      {/* <iframe src="https://arabhardware.com/auth/google" frameborder="0"></iframe> */}
      <div className="flex w-2/4 justify-between items-center simple_icons mx-auto">
        {mediaIcons.map((_, i)=>{ 
          return _.href
          ?<a key={i} href={_.href} rel="noopener noreferrer"
          className='w-8 h-8 bg-lightGray rounded-lg p-2 text-zinc-700 cursor-pointer hover:bg-zinc-700 hover:text-white transition-all duration-500 hover:scale-110'>
            {parse(_.icon.svg)}
          </a>
          :<div 
          className="w-8 h-8 bg-lightGray rounded-lg p-2 text-zinc-700 cursor-pointer hover:bg-zinc-700 hover:text-white transition-all duration-500 hover:scale-110">
            {parse(_.icon.svg)}
        </div>
        })}
      </div>
    </div>
    }
    </>
  )
}

export default OrBy