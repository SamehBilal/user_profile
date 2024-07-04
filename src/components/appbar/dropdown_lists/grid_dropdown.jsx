import {useRef, useEffect} from 'react'
import Logo from '@/public/images/logo.png'
import Image from 'next/image'

function GridDropdown({isExpanded=false, setIsExpanded }) {
  const dropdownRef = useRef(null)
  const handleOutsideClick = (e) => {
    if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
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
    <div className={`max-h-44 flex justify-center items-center gap-0 absolute ltr:right-48 rtl:left-48 top-12 bg-zinc-200 rounded-lg ${isExpanded?'':'hidden'}`}
    ref={dropdownRef}>
        <div className="flex items-center justify-center cursor-pointer hover:bg-zinc-400 rounded-l-lg p-4">
        <Image src={Logo} alt='ArabHardware' className=' size-12' />
        </div>
        <div className="h-12 w-0.5 bg-black"></div>
        <div className="flex items-center justify-center cursor-pointer hover:bg-zinc-400 rounded-r-lg p-4">
        <Image src={Logo} alt='ArabHardware store' className=' size-12 saturate-0' />
        </div>
    </div>
  )
}

export default GridDropdown