'use client'
import React, { useState, useEffect } from 'react'
import { Loader2Icon, EllipsisVertical } from 'lucide-react'
import { US, EU, GB, AE, SA, EG } from 'country-flag-icons/react/3x2'
import { Divider } from '@nextui-org/react'
import CurrencyDropdown from './dropdown/currency-dropdown'

function CurrencyExchange({
  sameOnDark=false, maxWidth,
  currencyValue='EGP', setCurrencyValue,
  rates={
    "USD": 48.75,
    "EUR": 54.41550000000000153477230924181640148162841796875,
    "GBP": 64.3936000000000063892002799548208713531494140625,
    "AED": 13.2718072500000001667785909376107156276702880859375,
    "SAR": 13.0013861250000015701289157732389867305755615234375,
    "base_currency": "EGP"
  }
}) {
  const [inputValue, setInputValue] = useState(100)
  const [isExpanded, setIsExpanded] = useState(false)

  const flags = {
    USD: US, EUR: EU, GBP: GB, AED: AE, SAR: SA, EGP: EG, 
    list:  ['USD', 'EUR', 'GBP', 'AED', 'SAR', 'EGP'],
    available: ['EGP', 'SAR', 'AED']
  }
  
  const getFlag = (unit) => {
    return flags[unit] || flags.USD
  }

  useEffect(()=>{
    setInputValue(0)
  }, [currencyValue])
  
  return (
    <>
    {rates && <div className={`${sameOnDark?'backdrop-blur-lg bg-black/30 dark:bg-black/20':'bg-white/35 hover:bg-white/90 dark:bg-black/15 dark:hover:bg-black/90'} 
    shadow-medium transition w-full rounded-large pb-2 space-y-2 overflow-hidden`}
    style={maxWidth?{maxWidth}:{}}>
        <div className="px-4 pt-2 pb-4 bg-gradient-to-tr from-transparent to-white/30 dark:to-black/30 backdrop-blur-md">
            <p className="font-bold">محول العملات</p>
            <p className="text-tiny">القيمة الافتراضية 0 جنيه مصري</p>
        </div>
      <div className="flex items-center justify-between">
        <div className="flex items-center justify-start gap-4 relative overflow-visible">
          <EllipsisVertical id='currency_dropdown_btn' className='size-8 cursor-pointer' onClick={()=>setIsExpanded(true)} />
          {React.createElement(getFlag(currencyValue), { title: `${rates[currencyValue]} flag`, className: "w-6 h-6" })}
          <CurrencyDropdown isExpanded={isExpanded} setIsExpanded={setIsExpanded} setValue={setCurrencyValue} value={currencyValue} list={flags.available} />
        </div>
        <input type="number" value={inputValue} onChange={(e)=>setInputValue(e.target.value)} placeholder=''
        className="border-0 outline-0 focus:border-0 focus:outline-0 bg-transparent text-left" />
      </div>
      <Divider />
      <div className="space-y-2">
        {flags.list.map((_, i)=>{
          const FlagComponent = getFlag(_)
            if(rates.base_currency != _){
              return <div key={i} className="flex items-center justify-between px-2">
                <div className="flex items-center justify-start gap-4">
                    <p className="">{_}</p>
                    {React.createElement(FlagComponent, { title: `${rates[_]} flag`, className: "w-6 h-6" })}
                </div>
                <p className="">{ (inputValue/rates[_]).toFixed(2)}</p>
            </div>
            }else{
              return <span key={i}></span>
            }
        })}
      </div>
    </div>}
    </>
  )
}

export default CurrencyExchange