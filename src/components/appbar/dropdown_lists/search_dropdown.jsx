import {useRef, useEffect} from 'react'
import { en, ar } from '@/public/strings_manager'
import Link from 'next/link'

import {Divider} from "@nextui-org/react";

function SearchDropdown({isExpanded=false, setIsExpanded, setValue, flexRow=false, noRedirect=false }) {
  // console.log('isExpanded', isExpanded)
  const dropdownRef = useRef(null)

  const handleOutsideClick = (e) => {
    const SearchDropdownBtn = document.getElementById('search_dropdown_btn')
    const isInsideButton = SearchDropdownBtn.contains(e.target);
    // console.log('SearchDropdownBtn', SearchDropdownBtn)
    // console.log('e.target', e.target)
    // console.log('isInsideButton', isInsideButton)
    if (dropdownRef.current && !dropdownRef.current.contains(e.target) && e.target!=SearchDropdownBtn && !isInsideButton) {
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
    <div className={`flex ${flexRow?'':'flex-col'} justify-center items-center gap-2 absolute right-1/2 translate-x-1/2 py-2 w-max top-12 bg-zinc-200 text-zinc-900 rounded-lg z-20 
      ${isExpanded?'animate-dropdwon-appearance-in':'hidden'}`}
    ref={dropdownRef}>
      {ar.navbar.searchAbout.items.map((item, i)=>{
        return <div key={i} className={`flex items-start justify-center gap-4 p-2 text-sm w-full cursor-pointer`}>
          <Link href={noRedirect? '#':item.link}
            className={`flex ${flexRow?'flex-col':''} items-start justify-center gap-4 p-2 hover:bg-zinc-300`}
            onClick={()=>{setValue(item.title); setIsExpanded(false)}}>
              {!flexRow && <item.icon />}
              <div className="space-y-2 w-full">
                <p className="font-bold flex items-center justify-between">
                  {item.title}
                  {flexRow && <item.icon />}
                </p>
                <p className={`text-zinc-700 w-full ${flexRow?'text-tiny line-clamp-1':''}`}>{item.desc}</p>
              </div>
            </Link>
            {flexRow && i!=ar.navbar.searchAbout.items.length-1 && <Divider orientation="vertical" className='h-16 w-0.5 bg-gray-400' />}
        </div>
      })}
    </div>
  )
}

export default SearchDropdown