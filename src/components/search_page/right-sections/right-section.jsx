"use client"
import ListCard from "./list-card"

function RightSectoin({trendingData, tagsData}) {

  return (
    <div className='max-w-grid p-6 h-full absolute top-32 w-1/5 space-y-10'>
      <ListCard title="الاكثر رواجاً" subjects={trendingData} />
      <ListCard title="الأوسمة" subjects={tagsData} />
    </div>
  )
}

export default RightSectoin