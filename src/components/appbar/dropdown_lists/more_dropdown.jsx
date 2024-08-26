// components/MoreDropdown.js

import { useRef, useEffect } from 'react';
import Image from 'next/image';
import AhwNet from '@/public/images/logos/ahw_logo.svg'
import AhwBusiness from '@/public/images/logos/ahw_business.png'
import AhwStore from '@/public/images/logos/ahw_store.png'
import AhwGaming from '@/public/images/logos/ahw_gaming.png'

const MoreDropdown = ({isExpanded, setIsExpanded}) => {
  const dropdownRef = useRef(null)

  const moreData = [AhwNet, AhwGaming, AhwBusiness, AhwStore]

  const handleOutsideClick = (e) => {
    const moreBtn = document.getElementById('more_dropdown_trigger')
    // console.log('dropdownRef.current', dropdownRef.current)
    // console.log('e.target', e.target)
    if (dropdownRef.current && !dropdownRef.current.contains(e.target) && e.target != moreBtn) {
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
    <div className={`absolute top-20 w-fit bg-white text-black z-20 left-1/4 origin-top rounded-lg shadow-lg
    ${isExpanded?'animate-appearance-in':'hidden'}`} ref={dropdownRef}>
      <div className="grid grid-cols-2 grid-rows-2">
        {moreData.map((logo, index)=>{
          return <div key={index} className="flex items-center justify-center cursor-pointer hover:bg-zinc-400 rounded-lg p-2">
          <Image src={logo} alt='ArabHardware' className='size-12 object-contain' />
          </div>
        })}
      </div>
    </div>
  );
};

export default MoreDropdown;
