import React from 'react'

function StockPricesList() {
  const list = [
    {en: "Gold sotck prices increased", ar: "ارتفاع سعر الذهب"},
    {en: "Oil sotck prices decreased", ar: "انخفاض سعر البترول"},
    {en: "Papper sotck prices increased", ar: "ارتفاع سعر الورق"},
    {en: "Toys sotck prices increased", ar: "انخفاض سعر اللعب"},
    {en: "Gold sotck prices increased", ar: "ارتفاع سعر القهوة"},
  ]
  return (
    <div className="block text-sm text-left leading-tight">
        <span className="inline-flex flex-col h-[calc(theme(fontSize.sm)*theme(lineHeight.tight))] md:h-[calc(theme(fontSize.base)*theme(lineHeight.tight))] overflow-hidden">
            <ul className="block animate-text-slide text-left leading-tight [&_li]:block">
              {list.map((_, i)=>{
                return <li key={i}>{_.ar}</li>
              })}
              <li aria-hidden={true}>{list[list.length-1].ar}</li>
            </ul>
        </span>
    </div>
  )
}

export default StockPricesList