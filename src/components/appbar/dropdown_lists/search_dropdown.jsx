import {useRef, useEffect} from 'react'
import Logo from '@/public/images/logo.png'
import Image from 'next/image'
import { en, ar } from '@/public/strings_manager'

function SearchDropdown({isExpanded=false, setIsExpanded, setValue }) {
  // console.log('isExpanded', isExpanded)
  const dropdownRef = useRef(null)

  const handleOutsideClick = (e) => {
    const SearchDropdownBtn = document.getElementById('search_dropdown_btn')
    // console.log('SearchDropdownBtn', SearchDropdownBtn)
    // console.log('e.target', e.target)
    if (dropdownRef.current && !dropdownRef.current.contains(e.target) && e.target!=SearchDropdownBtn) {
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
    <div className={`flex flex-col justify-center items-center gap-2 absolute right-1/2 translate-x-1/2 py-2 w-max top-12 bg-zinc-200 text-zinc-900 rounded-lg z-20 
      ${isExpanded?'':'hidden'}`}
    ref={dropdownRef}>
      {ar.navbar.searchAbout.items.map((item, i)=>{
        return <div key={i} className='flex items-start justify-center gap-4 p-2 hover:bg-zinc-300 text-sm w-full cursor-pointer'
        onClick={()=>{setValue(item.title); setIsExpanded(false)}}>
          <item.icon />
          <div className="space-y-2 w-full">
            <p className="font-bold">{item.title}</p>
            <p className="text-zinc-700 w-full">{item.desc}</p>
          </div>
        </div>
      })}
    </div>
  )
}

export default SearchDropdown