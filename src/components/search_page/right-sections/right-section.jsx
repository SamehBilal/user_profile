"use client"
import CarouselCard from "@/components/ui/carousel-card"
import ListCard from "./list-card"
import TradingCard from "./trading-card"
import WeatherCard from "./weather-card"

function RightSectoin({trendingData, tagsData, weather, dailyNews}) {

  return (
    <div className='max-w-grid p-6 h-full absolute top-32 w-1/5 space-y-10'>
      <CarouselCard titles={dailyNews} />
      <ListCard title="الاكثر رواجاً" subjects={trendingData} />
      <ListCard title="الأوسمة" subjects={tagsData} />
      <WeatherCard weather={weather} />
      <TradingCard />
    </div>
  )
}

export default RightSectoin