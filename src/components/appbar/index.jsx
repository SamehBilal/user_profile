"use client"
import React from 'react'
import { useRouter } from 'next/navigation'
import Image from 'next/image'
import Logo from '@/public/images/logo.png'
import { useTheme } from 'next-themes';
import GridDropdown from './dropdown_lists/grid_dropdown'
import UserDropdown from './dropdown_lists/user_dropdown';
import MoreDropdown from './dropdown_lists/more_dropdown'
import SearchSection from './search_section'
import NavbarTopMenu from './navbar_top_menu'
import NavbarBottomMenu from './navbar_bottom_menu'
import PagesLinks from './pages_links'
import { getCookie } from 'cookies-next';

function Appbar({shadow = null}) {
  const router = useRouter()
  const [gridDropdownPopoverShow, setGridDropdownPopoverShow] = React.useState(false);
  const [userDropdownPopoverShow, setUserDropdownPopoverShow] = React.useState(false);
  const [moreDropdownPopoverShow, setMoreDropdownPopoverShow] = React.useState(false)
  const [searchTypeDropdownPopoverShow, setSearchTypeDropdownPopoverShow] = React.useState(false)

  const [searchTypeDropdownValue, setSearchTypeDropdownValue] = React.useState(0)
  const [user, setUser] = React.useState(null)
  const { theme, setTheme } = useTheme();
  
  React.useEffect(()=>{
    if(!getCookie("jwt_token") || getCookie("jwt_token")=="null"){
      // router.push('/login')
    }else{
      // setUser(getCookie("user"))
    }
  }, [])

  return (
    <nav className={`text-black dark:text-white ${shadow? '':' shadow-md dark:shadow-zinc-300/20'} w-screen absolute top-0 right-0 left-0`}>
      <div className="p-grid max-w-grid flex justify-between items-center mx-auto px-8 py-2 ">
        <div className="flex items-center justify-center gap-4">
          <Image src={Logo} alt='ArabHardware' className='size-12 lg:mr-8' />
          <SearchSection isExpanded={searchTypeDropdownPopoverShow} setIsExpanded={setSearchTypeDropdownPopoverShow}
          typeValue={searchTypeDropdownValue} setTypeValue={setSearchTypeDropdownValue} />
        </div>
        <PagesLinks setIsExpanded={setMoreDropdownPopoverShow} isExpanded={moreDropdownPopoverShow} />
        <div className="flex flex-col justify-center items-between">
          <NavbarTopMenu setTheme={setTheme} theme={theme} 
          setMoreDropdownPopoverShow={setMoreDropdownPopoverShow} 
          setUserDropdownPopoverShow={setUserDropdownPopoverShow} />
          {/* <NavbarBottomMenu /> */}

          <MoreDropdown isExpanded={moreDropdownPopoverShow} setIsExpanded={setMoreDropdownPopoverShow} />
          <GridDropdown isExpanded={gridDropdownPopoverShow} setIsExpanded={setGridDropdownPopoverShow} />
          <UserDropdown isExpanded={userDropdownPopoverShow} setIsExpanded={setUserDropdownPopoverShow} />
        </div>
      </div>
</nav>
  )
}

export default Appbar