import {useRef, useEffect} from 'react'
import { en, ar } from '@/public/strings_manager'
import Link from 'next/link'

import {Divider} from "@nextui-org/react";

function CurrencyDropdown({isExpanded=false, setIsExpanded, setValue, list=[], value }) {
  console.log('isExpanded', isExpanded)
  const dropdownRef = useRef(null)

  const handleOutsideClick = (e) => {
    const currencyDropdownBtn = document.getElementById('currency_dropdown_btn')
    const isInsideButton = currencyDropdownBtn.contains(e.target);
    // console.log('currencyDropdownBtn', currencyDropdownBtn)
    // console.log('e.target', e.target)
    // console.log('isInsideButton', isInsideButton)
    if (dropdownRef.current && !dropdownRef.current.contains(e.target) && e.target!=currencyDropdownBtn && !isInsideButton) {
      setIsExpanded(false);
    }
  };
  
  useEffect(() => {
    document.addEventListener('mousedown', handleOutsideClick);
    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, []);

  return (
    <div className={`absolute right-1/2 translate-x-1/2 p-0.5 w-max top-12 bg-zinc-200 text-zinc-900 rounded-lg space-y-0.5 z-20 
      ${isExpanded?'animate-dropdwon-appearance-in':'hidden'}`}
      ref={dropdownRef}>
      {list.map((item, i)=>{
        return <div key={i} className=''>
          <p className={`p-2 text-sm w-full cursor-pointer ${value==item?'bg-primary/30':' hover:bg-primary/20'}`}
          onClick={()=>{setValue(item); setIsExpanded(false)}}>
              {item}
          </p>
          <Divider />
        </div>
      })}
    </div>
  )
}

export default CurrencyDropdown