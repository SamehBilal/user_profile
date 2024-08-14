import {useRef, useEffect} from 'react'
import Logo from '@/public/images/logo.png'
import Image from 'next/image'
import { en, ar } from '@/public/strings_manager'
import Link from 'next/link'

function ActionDropdown({isExpanded=false, setIsExpanded, setValue, items }) {
  const dropdownRef = useRef(null)

  const handleOutsideClick = (e) => {
    const SearchDropdownBtn = document.getElementById('action-dropdown-btn')
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
    <div className={`flex flex-col justify-center items-center gap-2 absolute left-0 translate-x-1/2 py-2 w-max top-12 bg-zinc-200 text-zinc-900 rounded-lg z-20 
      ${isExpanded?'':'hidden'}`}
    ref={dropdownRef}>
      {items.map((item, i)=>{
        return <Link key={i} href={item.link}
        className='flex items-start justify-center gap-4 p-2 hover:bg-zinc-300 text-sm w-full cursor-pointer'
        onClick={()=>{setValue(item.title); setIsExpanded(false)}}>
          <item.icon />
          <div className="space-y-2 w-full">
            <p className="font-bold">{item.title}</p>
            <p className="text-zinc-700 w-full">{item.desc}</p>
          </div>
        </Link>
      })}
    </div>
  )
}

export default ActionDropdown