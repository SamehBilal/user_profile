"use client"
import { trendingData } from "./data"

function RightSectoin({data, setBgImg}) {

  return (
    <div className='max-w-grid p-grid h-full absolute top-32 w-1/5 '>
      <div className="bg-white/15 dark:bg-black/15 shadow-medium hover:bg-white/90 dark:hover:bg-black/90 transition w-fit rounded-large p-2 space-y-2">
        <h4 className="text-primary font-bold flex gap-4 items-center">
          <span className="rounded-large bg-primary text-transparent select-none">cc</span>
          <span>{trendingData.title}</span>
        </h4>
        <ol className="grid grid-cols-2 gap-y-1 gap-x-2 w-fit mr-2 text-tiny">
          {trendingData.subjects.map((_, i)=>{
            return <li key={i} className="flex items-center">
              <span className="text-primary">{`${i+1}. `}</span>
              <span className="line-clamp-1 ">{_}</span>
            </li>
          })}
        </ol>
      </div>
    </div>
  )
}

export default RightSectoin