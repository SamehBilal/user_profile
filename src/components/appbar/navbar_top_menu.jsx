import React from 'react'
import { SunMoon, LayoutGrid, Bell } from 'lucide-react'
import Image from 'next/image'
// import PersonImg from '@/public/images/person.jpg'
import PersonImg from '@/public/images/demo_user.png'
import { en, ar } from '@/public/strings_manager'

function NavbarTopMenu({setTheme, setGridDropdownPopoverShow, theme, setUserDropdownPopoverShow}) {
  return (
    <div className="flex items-center justify-end gap-2 text-black dark:text-white">
        <SunMoon strokeWidth={2} onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
        className='size-8 p-2 border hover:shadow-lg rounded-lg transition cursor-pointer' />
        <LayoutGrid strokeWidth={2} onClick={()=>setGridDropdownPopoverShow(prev=>!prev)}
        className='size-8 p-2 border hover:shadow-lg rounded-lg transition cursor-pointer' />
        <Bell  strokeWidth={2} className='size-8 p-2 border hover:shadow-lg rounded-lg transition cursor-pointer' />
        <span className="w-4"></span>
        <p className="">{ar.navbar.greeting}</p>
        <Image src={PersonImg} alt='user image' className=' size-10 rounded-lg block cursor-pointer'
        onClick={()=>setUserDropdownPopoverShow(prev=>!prev)} />
    </div>
  )
}

export default NavbarTopMenu