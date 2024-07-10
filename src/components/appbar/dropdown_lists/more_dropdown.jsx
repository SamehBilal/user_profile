// components/MoreDropdown.js

import { useRef, useEffect } from 'react';
import { moreData } from './data';

const MoreDropdown = ({isExpanded, setIsExpanded}) => {
  const dropdownRef = useRef(null)

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
    <div className={`absolute top-20 w-[calc(1000px+10%)] max-w-grid bg-white text-black z-20 left-1/2 -translate-x-1/2 origin-top rounded-lg p-4 shadow-lg
    ${isExpanded?'animate-scale-up':'hidden'}`} ref={dropdownRef}>
      <div className="w-full flex items-start justify-around">
        {moreData.map((head, index)=>{
          return <div className="space-y-8" key={index}>
            <h4 className='font-bold'>{head.title}</h4>
            <ul className='space-y-2'>
              {head.list.map((el, i)=>{
                return <p key={i} className="">
                  {el.title}
                </p>
              })}
            </ul>
          </div>
        })}
      </div>
    </div>
  );
};

export default MoreDropdown;
