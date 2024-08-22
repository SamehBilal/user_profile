import React from 'react'
import { Loader2Icon, SunIcon } from 'lucide-react'

function WeatherCard({weather}) {
    // console.log('weather', weather)
  
  return (
    // linear-gradient(135deg, #72EDF2 10%, #5151E5 100%);
    <div className="bg-white/35 dark:bg-black/15 shadow-medium hover:bg-white/90 dark:hover:bg-black/90 transition w-full rounded-large p-2 space-y-2">
        {/* <h4 className="text-darkGray dark:text-primaryLight drop-shadow-xl dark:drop-shadow-none font-bold flex gap-4 items-center mr-2">
          <span className="rounded-large bg-prime text-transparent select-none">cc</span>
          <span>{title}</span>
        </h4> */}
        {weather && <div className='space-y-6'>
            <div className="flex justify-between items-center">
                <p className="flex flex-col">
                    <span className='text-3xl font-bold'>
                        {weather.current.temp}°C
                    </span>
                    <span className="font-semibold text-gray-500">
                        Cairo, Egypt
                    </span>
                </p>
                <SunIcon className='text-yellow-400 size-16' />
            </div>
            <div className="flex justify-between text-tiny">
                {weather?.day?.slice(0, 5)?.map((_, i)=>{
                    return <div key={i} className="flex flex-col items-center">
                    <span className='font-semibold text-small'>
                        {_.temp}°C
                    </span>
                    <SunIcon className='text-gray-500 size-8' />
                    <span className="font-semibold mt-1 text-sm">
                        {_.time}:00
                    </span>
                    <span className="font-semibold text-gray-400">AM</span>
                </div>
                })}
                
            </div>
            
            {/* {weather.current.wind} */}
        </div>}
      </div>
  )
}

export default WeatherCard