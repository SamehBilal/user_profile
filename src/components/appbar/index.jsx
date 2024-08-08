"use client"
import React from 'react'
import { useRouter } from 'next/navigation'
import Image from 'next/image'
import Logo from '@/public/images/logo_icon.png'
import { useTheme } from 'next-themes';
import GridDropdown from './dropdown_lists/grid_dropdown'
import UserDropdown from './dropdown_lists/user_dropdown';
import MoreDropdown from './dropdown_lists/more_dropdown'
import SearchSection from './search_section'
import NavbarTopMenu from './navbar_top_menu'
import NavbarBottomMenu from './navbar_bottom_menu'
import PagesLinks from './pages_links'
import { getCookie } from 'cookies-next';

function Appbar({shadow = null, bgTransparent=true}) {
  const router = useRouter()
  const [gridDropdownPopoverShow, setGridDropdownPopoverShow] = React.useState(false);
  const [userDropdownPopoverShow, setUserDropdownPopoverShow] = React.useState(false);
  const [moreDropdownPopoverShow, setMoreDropdownPopoverShow] = React.useState(false)
  const [searchTypeDropdownPopoverShow, setSearchTypeDropdownPopoverShow] = React.useState(false)
  const [bgOpacity, setBgOpacity] = React.useState('rgb(255 255 255 / 0.5)')

  const [searchTypeDropdownValue, setSearchTypeDropdownValue] = React.useState(0)
  const [user, setUser] = React.useState(null)
  const { theme, setTheme } = useTheme();

  function darken({scrollAmount=300}) {
    if(theme=='dark'){
      if(window.pageYOffset  > scrollAmount && !bgTransparent) setBgOpacity("rgba(0, 0, 0, .8)")
      else if(window.pageYOffset  > scrollAmount && bgTransparent) setBgOpacity("rgba(0, 0, 0, 0)")
      else setBgOpacity("rgb(0 0 0 / 0.5)")
    }else{
      if(window.pageYOffset  > scrollAmount && !bgTransparent) setBgOpacity("rgba(255, 255, 255, .8)")
      else if(window.pageYOffset  > scrollAmount && bgTransparent) setBgOpacity("rgba(255, 255, 255, 0)")
      else setBgOpacity("rgb(255 255 255 / 0.5)")
    }
  }
  
  React.useEffect(()=>{
    let scrollAmount = 100
    if(window && window.innerHeight<window.innerWidth) {
      window.addEventListener("scroll", darken)
    }else if(window){
      scrollAmount=50
    }
    darken({scrollAmount})
    window.addEventListener("scroll", ()=>darken({scrollAmount}))

    return()=>{window.removeEventListener("scroll", ()=>darken({scrollAmount}))}
  }, [theme])

  return (
    <nav className={`text-black dark:text-white 
    ${shadow? '':' shadow-md dark:shadow-zinc-300/20'} 
    w-screen fixed top-0 right-0 left-0 z-50`}
    style={{backgroundColor: bgOpacity}}>
      <div className="p-grid max-w-grid flex justify-between items-center mx-auto px-8 py-2 ">
        <div className="flex items-center justify-center gap-4">
          <Image src={Logo} alt='ArabHardware' className='size-12 lg:mr-8' />
          <SearchSection isExpanded={searchTypeDropdownPopoverShow} setIsExpanded={setSearchTypeDropdownPopoverShow}
          typeValue={searchTypeDropdownValue} setTypeValue={setSearchTypeDropdownValue} />
        </div>
        
        <PagesLinks setIsExpanded={setMoreDropdownPopoverShow} isExpanded={moreDropdownPopoverShow} />{/* max-lg:hidden */}
        <div className="flex flex-col justify-center items-between max-lg:hidden">
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