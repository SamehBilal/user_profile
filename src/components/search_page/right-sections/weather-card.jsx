import React from 'react'
import WeatherDaysSlider from './weather-days-slider'

function WeatherCard({weather}) {
    // console.log('weather', weather)
  
  return (
    // linear-gradient(135deg, #72EDF2 10%, #5151E5 100%);
    <div className="shadow-medium transition w-full h-52 rounded-large p-2 space-y-2 relative overflow-hidden group text-white">
        <div className="absolute -top-48 left-1/2 -translate-x-1/2 rounded-full w-72 h-72 blur-3xl mix-blend bg-sky-700"></div>
        <div className="absolute top-52 -left-24 -translate-y-1/2 rounded-full w-52 h-52 blur-3xl mix-blend bg-sky-500"></div>
        <div className="absolute inset-0 bg-gradient-to-tl from-[#4fa5a8]/70 to-[#343490]/70 from-10% scale-110 transition-[background-image] duration-1000 ease-in-out group-hover:from-[#5151E5]/50 group-hover:to-[#72EDF2]/50"></div>
        {weather && <div className='space-y-6 absolute inset-0 p-2'>
            <div className="flex justify-between px-4 items-center">
                <p className="flex flex-col">
                    <span className='text-3xl font-bold'>
                        {weather.current.temp}°C
                    </span>
                    <span className="font-semibold text-gray-300">
                        Cairo, Egypt
                    </span>
                </p>
                <div className="bg-gradient-to-br from-yellow-500 to-orange-500 size-12 rounded-full"></div>
            </div>
            <WeatherDaysSlider weather={weather} />
            
            {/* {weather.current.wind} */}
        </div>}
      </div>
  )
}

export default WeatherCard