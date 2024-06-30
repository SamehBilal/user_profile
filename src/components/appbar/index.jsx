"use client"
import React from 'react'
import { useRouter } from 'next/navigation'
import Image from 'next/image'
import Logo from '@/public/images/logo.png'
import { useTheme } from 'next-themes';
import GridDropdown from './dropdown_lists/grid_dropdown'
import UserDropdown from './dropdown_lists/user_dropdown';
import SearchSection from './search_section'
import NavbarTopMenu from './navbar_top_menu'
import NavbarBottomMenu from './navbar_bottom_menu'
import { getCookie } from 'cookies-next';

function Appbar() {
  const router = useRouter()
  const [gridDropdownPopoverShow, setGridDropdownPopoverShow] = React.useState(false);
  const [userDropdownPopoverShow, setUserDropdownPopoverShow] = React.useState(false);
  const [user, setUser] = React.useState(null)
  const { theme, setTheme } = useTheme();
  
  React.useEffect(()=>{
    if(!getCookie("token") || !getCookie("user")){
      // router.push('/login')
    }else{
      setUser(getCookie("user"))
    }
  }, [])

  return (
    <nav className="text-black dark:text-white shadow-md dark:shadow-zinc-300/20 w-screen flex justify-between items-center mx-auto px-8 py-2 absolute top-0 right-0 left-0 ">
      <Image src={Logo} alt='ArabHardware' className=' size-12 lg:mr-8' />
      <SearchSection />
      <div className="flex flex-col justify-center items-between">
        <NavbarTopMenu setTheme={setTheme} setGridDropdownPopoverShow={setGridDropdownPopoverShow} 
        setUserDropdownPopoverShow={setUserDropdownPopoverShow} theme={theme} />
        <NavbarBottomMenu />

        <GridDropdown gridDropdownPopoverShow={gridDropdownPopoverShow} />
        <UserDropdown userDropdownPopoverShow={userDropdownPopoverShow} setUserDropdownPopoverShow={setUserDropdownPopoverShow} user={user} />
      </div>
</nav>
  )
}

export default Appbar