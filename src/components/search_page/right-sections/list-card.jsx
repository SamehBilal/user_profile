import React from 'react'

function ListCard({title='', subjects=[]}) {
  return (
    <div className="bg-white/35 dark:bg-black/15 shadow-medium hover:bg-white/90 dark:hover:bg-black/90 transition w-fit rounded-large p-2 space-y-2">
        <h4 className="text-darkGray dark:text-primaryLight drop-shadow-xl dark:drop-shadow-none font-bold flex gap-4 items-center mr-2">
          <span className="rounded-large bg-prime text-transparent select-none">cc</span>
          <span>{title}</span>
        </h4>
        <ol className="grid grid-cols-2 gap-y-1 gap-x-2 w-fit mr-2 text-tiny">
          {subjects.map((_, i)=>{
            return <li key={i} className="flex items-center">
              <span className="text-darkGray dark:text-primaryLight drop-shadow-xl dark:drop-shadow-none">{`${i+1}. `}</span>
              <span className="line-clamp-1 ">{_}</span>
            </li>
          })}
        </ol>
      </div>
  )
}

export default ListCard