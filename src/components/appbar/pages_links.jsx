import React from 'react'
import MoreDropdown from './dropdown_lists/more_dropdown'

function PagesLinks({setIsExpanded={setMoreDropdownPopoverShow}, isExpanded={moreDropdownPopoverShow}}) {
    const pagesLinksList = [
        {title: "اخبار"},
        {title: "المتجر"},
        {title: "مقالات"},
        {title: "رياضات إلكترونية"},
        {title: "المزيد"}
    ]
  return (
    <ul className='flex items-center justify-center gap-4 text-black'>
        {pagesLinksList.map((_, i)=>{
            const isMoreEl = i==pagesLinksList.length-1
            return <li key={i} className={`cursor-pointer transition 
            ${i==0?'font-bold':'hover:text-primary'}
            ${isMoreEl?'relative':''}`}
            onClick={isMoreEl?()=>setIsExpanded(prev=>!prev):()=>{}}>
                <span id={`more_dropdown_${i}`}>{_.title}</span>
            </li>
        })}
        <MoreDropdown isExpanded={isExpanded} setIsExpanded={setIsExpanded} moreBtnId={`more_dropdown_${pagesLinksList.length-1}`} />
    </ul>
  )
}

export default PagesLinks