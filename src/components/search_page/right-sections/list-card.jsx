import React from 'react'
import { Loader2Icon } from 'lucide-react'

function ListCard({title='', subjects=[], maxWidth, sameOnDark=false}) {
  
  return (
    <div className={`${sameOnDark?'backdrop-blur-lg bg-black/30 dark:bgblack/20':'bg-white/35 hover:bg-white/90 dark:bg-black/15 dark:hover:bg-black/90'} 
    shadow-medium transition w-full rounded-large p-2 space-y-2`}
    style={maxWidth?{maxWidth}:{}}>
        <h4 className={`${sameOnDark?'text-primaryLight':'text-darkGray dark:text-primaryLight '} 
        drop-shadow-xl dark:drop-shadow-none font-bold flex gap-4 items-center mr-2`}>
          <span className={`rounded-large ${sameOnDark?'bg-primaryLight':'bg-prime'} text-transparent select-none`}>cc</span>
          <span>{title}</span>
        </h4>
        <ol className="grid grid-cols-2 gap-y-1 gap-x-2 w-fit mr-2 text-tiny">
          {!Array.isArray(subjects) && <li className={`${sameOnDark?'text-primaryLight':'text-darkGray dark:text-primaryLight'} 
          flex items-center `}>
              <Loader2Icon className='animate-spin' />
            </li>}
          {Array.isArray(subjects) && subjects.length > 0 && subjects.map((_, i)=>{
            return <li key={i}>
              <a href={_?.slug || _?.url} target="_blank" rel="noopener noreferrer" 
              className="flex gap-1 cursor-pointer">
                <span className={`${sameOnDark?'text-primaryLight':'text-darkGray dark:text-primaryLight '} 
                drop-shadow-xl dark:drop-shadow-none`}>
                  {`${i+1}. `}
                </span>
                <span className="line-clamp-2 ">
                  {_?.name || _?.title}
                </span>
              </a>
            </li>
          })}
        </ol>
      </div>
  )
}

export default ListCard