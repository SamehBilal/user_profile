"use client"
import {useState} from 'react'
import { menuItems } from './menu_items'

function MenuList
() {
  const [selectedIndex, setSelectedIndex] = useState(0)

  return (
    <ul className='flex flex-col items-start justify-center w-full text-black dark:text-white'>
        {
          menuItems.map((_, i)=> 
          <li key={i} className={`flex items-center justify-start py-2 px-8 rounded-lg w-full gap-8 transition cursor-pointer 
          ${i==selectedIndex?'font-bold':'hover:bg-hover:bg-zinc-200'}`}
          onClick={()=>setSelectedIndex(i)}>
            <div className="flex items-center justify-center">
              {i==selectedIndex && <span className={`h-8 -mr-4 ml-2 rounded-lg w-2 bg-primary dark:bg-primaryLight`}></span>}
              <_.icon  strokeWidth={i==selectedIndex?2:1} className=' size-8'/>
            </div>
            <p>{_.arTitle}</p>
          </li>)
        }
    </ul>
  )
}

export default MenuList
