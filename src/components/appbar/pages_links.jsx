import React from 'react'
import MoreDropdown from './dropdown_lists/more_dropdown'

function PagesLinks({
    pagesLinksList=[], forMobile=false
}) {

  return (
    <ul className={`flex ${forMobile?'flex-col text-white':''} items-center justify-center gap-4 text-black dark:text-white max-lg:hidden`}>
        {pagesLinksList.map((_, i)=>{
            return <li key={i} className={`cursor-pointer transition 
            ${i==0?'font-bold':'hover:text-primary dark:hover:text-primaryLight'}`}>
                <span id={`more_dropdown_${i}`}>{_.title}</span>
            </li>
        })}
    </ul>
  )
}

export default PagesLinks