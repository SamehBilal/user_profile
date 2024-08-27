"use client"
import CarouselCard from "@/components/ui/carousel-card"
import ListCard from "./list-card"
import TradingCard from "./trading-card"
import WeatherCard from "./weather-card"
import CurrencyExchange from "./currency-exchange"

function RightSectoin({trendingData, tagsData, weather, dailyNews, rates, currencyValue, setCurrencyValue,}) {

  return (
    <div className='max-w-grid p-6 h-full absolute top-32 w-1/5 space-y-10'>
      <CarouselCard titles={dailyNews?.news || []} timing={5000} images={dailyNews?.images || []} />
      <CurrencyExchange rates={rates} currencyValue={currencyValue} setCurrencyValue={setCurrencyValue} />
      <ListCard title="الاكثر رواجاً" subjects={trendingData} />
      <ListCard title="الأوسمة" subjects={tagsData} />
      <WeatherCard weather={weather} />
      <TradingCard />
    </div>
  )
}

export default RightSectoin