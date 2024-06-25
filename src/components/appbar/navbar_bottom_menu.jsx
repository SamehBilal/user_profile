import React from 'react'
import StockPricesList from './stock_prices_list'
import { ThermometerSun } from 'lucide-react'

function NavbarBottomMenu() {
  return (
    <div className="flex items-center justify-center gap-4">
        <div className="flex items-center justify-center text-sm">
        <span><ThermometerSun className='size-6 p-1 inline fill-primaryLight' /></span>
        <span>44&deg;</span>
        </div>
        <StockPricesList />
    </div>
  )
}

export default NavbarBottomMenu