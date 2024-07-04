import React from 'react'
import StockPricesList from './stock_prices_list'
import { ThermometerSun } from 'lucide-react'

function NavbarBottomMenu() {
  return (
    <div className="flex items-center justify-between gap-4 text-black w-full bg-zinc-200 rounded-lg px-4">
      <div className="flex items-center justify-start">
        {/* <div className="h-3/5 w-2 bg-primary py-4 rounded-lg"></div> */}
        <div className="flex items-center justify-center text-sm my-3">
          <span><ThermometerSun className='size-6 p-1 inline fill-primaryLight' /></span>
          <span>44&deg;</span>
        </div>
      </div>
      <div className="flex items-center justify-start">
        {/* <div className="h-3/5 w-2 bg-primary py-4 rounded-lg"></div> */}
        <StockPricesList />
      </div>
    </div>
  )
}

export default NavbarBottomMenu