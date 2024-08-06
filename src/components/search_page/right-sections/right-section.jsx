"use client"
import { trendingData, tagsData } from "../data"
import ListCard from "./list-card"

function RightSectoin({data, setBgImg}) {

  return (
    <div className='max-w-grid p-6 h-full absolute top-32 w-1/5 space-y-10'>
      <ListCard title={trendingData.title} subjects={trendingData.subjects} />
      <ListCard title={tagsData.title} subjects={tagsData.subjects} />
    </div>
  )
}

export default RightSectoin