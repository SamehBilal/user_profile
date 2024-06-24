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
          ${i==selectedIndex?'bg-primary text-white font-bold':'hover:bg-primaryLight hover:text-white'}`}>
            <_.icon className=' size-8'/>
            <p>{_.title}</p>
          </li>)
        }
    </ul>
  )
}

export default MenuList
