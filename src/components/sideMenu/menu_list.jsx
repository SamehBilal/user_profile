"use client"
import {useState} from 'react'
import { menuItems } from './menu_items'

function MenuList
() {
  const [selectedIndex, setSelectedIndex] = useState(0)

  return (
    <ul className='flex flex-col items-start justify-center w-full'>
        {
          menuItems.map((_, i)=> 
          <li key={i} className={`flex items-center justify-start py-2 px-8 rounded-lg w-full gap-8 transition 
          ${i==selectedIndex?'bg-primary  dark:bg-primaryLight text-white dark:text-black font-bold':'hover:bg-primaryLight  dark:hover:bg-primaryLighter hover:text-white'}`}>
            <_.icon  strokeWidth={1} className=' size-8'/>
            <p>{_.arTitle}</p>
          </li>)
        }
    </ul>
  )
}

export default MenuList
