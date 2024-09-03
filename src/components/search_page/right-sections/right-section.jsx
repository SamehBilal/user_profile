"use client"
import CarouselCard from "@/components/ui/carousel-card"
import ListCard from "./list-card"
import TradingCard from "./trading-card"
import WeatherCard from "./weather-card"
import CurrencyExchange from "./currency-exchange"
import StoreFilters from "./store-filters"

function RightSectoin({trendingData, tagsData, weather, dailyNews, rates, currencyValue, setCurrencyValue, isStoreTabOpen}) {

  return (
    <div className='max-w-grid p-6 h-full absolute top-32 w-1/5 space-y-10'>
      <StoreFilters isStoreTabOpen={isStoreTabOpen}/>
      <CarouselCard titles={dailyNews?.map((_)=>_.title) || []} timing={5000} 
      images={dailyNews?.map((_)=>_.thumbnail) || []} urls={dailyNews?.map((_)=>_.slug) } />
      <CurrencyExchange rates={rates} currencyValue={currencyValue} setCurrencyValue={setCurrencyValue} />
      <ListCard title="الاكثر رواجاً" subjects={trendingData} />
      <ListCard title="الأوسمة" subjects={tagsData} />
      <WeatherCard weather={weather} />
      <TradingCard />
    </div>
  )
}

export default RightSectoin