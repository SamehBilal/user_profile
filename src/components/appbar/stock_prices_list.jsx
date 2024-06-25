import React from 'react'

function StockPricesList() {
  return (
    <div className="block text-sm text-left leading-tight">
        <span className="inline-flex flex-col h-[calc(theme(fontSize.sm)*theme(lineHeight.tight))] md:h-[calc(theme(fontSize.base)*theme(lineHeight.tight))] overflow-hidden">
            <ul className="block animate-text-slide text-left leading-tight [&_li]:block">
                <li>Gold sotck prices increased</li>
                <li>Oil sotck prices decreased</li>
                <li>Papper sotck prices increased</li>
                <li>Chicken sotck prices decreased</li>
                <li>Toys sotck prices increased</li>
                <li aria-hidden="true">Gold sotck prices increased</li>
            </ul>
        </span>
    </div>
  )
}

export default StockPricesList