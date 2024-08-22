"use client"
import React from 'react'
import { useRouter } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import Logo from '@/public/images/logo_icon.png'
import { useTheme } from 'next-themes';
import GridDropdown from './dropdown_lists/grid_dropdown'
import UserDropdown from './dropdown_lists/user_dropdown';
import MoreDropdown from './dropdown_lists/more_dropdown'
import SearchSection from './search_section'
import NavbarTopMenu from './navbar_top_menu'
import PagesLinks from './pages_links'

import { Navbar, NavbarBrand, NavbarContent, NavbarItem, NavbarMenuToggle, NavbarMenu, NavbarMenuItem } from '@nextui-org/navbar';

function Appbar({shadow = null, bgTransparent=true, searchValue='', setSearchValue=()=>{}, searchTypeDropdownValue=0, setSearchTypeDropdownValue=()=>{}}) {
  const router = useRouter()
  const [gridDropdownPopoverShow, setGridDropdownPopoverShow] = React.useState(false);
  const [userDropdownPopoverShow, setUserDropdownPopoverShow] = React.useState(false);
  const [moreDropdownPopoverShow, setMoreDropdownPopoverShow] = React.useState(false)
  const [searchTypeDropdownPopoverShow, setSearchTypeDropdownPopoverShow] = React.useState(false)
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const { theme, setTheme } = useTheme();
  const pagesLinksList = [
      {title: "اخبار"},
      {title: "المتجر"},
      {title: "مقالات"},
      {title: "رياضات إلكترونية"}
  ]

  return (
    <>
    <Navbar onMenuOpenChange={setIsMenuOpen} className={`text-black dark:text-white appbar-bg-blurry
    ${shadow? '':' shadow-md dark:shadow-zinc-300/20'} 
    ${bgTransparent?'':'bg-white/50 dark:bg-black/50'}
    w-screen fixed top-0 right-0 left-0 z-50`}>
      <NavbarContent>
        <NavbarBrand>
          <Image src={Logo} alt="ArabHardware" className="size-12 lg:ml-8 ml-2" />
            <SearchSection isExpanded={searchTypeDropdownPopoverShow} setIsExpanded={setSearchTypeDropdownPopoverShow}
            typeValue={searchTypeDropdownValue} setTypeValue={setSearchTypeDropdownValue} searchValue={searchValue} 
            setSearchValue={setSearchValue} />
        </NavbarBrand>
      </NavbarContent>
      <NavbarContent className="hidden lg:flex gap-4" justify="center">
        <NavbarItem>
          <PagesLinks pagesLinksList={pagesLinksList} />
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem>
          <div className="flex flex-col justify-center items-between max-lg:hidden">
            <NavbarTopMenu setTheme={setTheme} theme={theme} 
            setMoreDropdownPopoverShow={setMoreDropdownPopoverShow} 
            setUserDropdownPopoverShow={setUserDropdownPopoverShow} />

            <MoreDropdown isExpanded={moreDropdownPopoverShow} setIsExpanded={setMoreDropdownPopoverShow} />
            <GridDropdown isExpanded={gridDropdownPopoverShow} setIsExpanded={setGridDropdownPopoverShow} />
            <UserDropdown isExpanded={userDropdownPopoverShow} setIsExpanded={setUserDropdownPopoverShow} />
          </div>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify='end' className="lg:hidden">
        <NavbarMenuToggle aria-label={isMenuOpen ? "Close menu" : "Open menu"} />
      </NavbarContent>
      <NavbarMenu>
        <NavbarMenuItem>
          <div className="flex flex-col justify-center items-between lg:hidden w-full">
            <NavbarTopMenu setTheme={setTheme} theme={theme} forMobile={true}
            setMoreDropdownPopoverShow={setMoreDropdownPopoverShow} 
            setUserDropdownPopoverShow={setUserDropdownPopoverShow} />

            <MoreDropdown isExpanded={moreDropdownPopoverShow} setIsExpanded={setMoreDropdownPopoverShow} />
            <GridDropdown isExpanded={gridDropdownPopoverShow} setIsExpanded={setGridDropdownPopoverShow} />
            <UserDropdown isExpanded={userDropdownPopoverShow} setIsExpanded={setUserDropdownPopoverShow} />
          </div>
        </NavbarMenuItem>
        {pagesLinksList.map((item, index) => (
          <NavbarMenuItem key={`${item.title}-${index}`}>
            <Link
              color={
                index === 2 ? "primary" : index === pagesLinksList.length - 1 ? "danger" : "foreground"
              }
              className="w-full"
              href="#"
              size="lg"
            >
              {item.title}
            </Link>
          </NavbarMenuItem>
        ))}

      </NavbarMenu>
    </Navbar>
    {/*
    <nav className={`text-black dark:text-white appbar-bg-blurry
    ${shadow? '':' shadow-md dark:shadow-zinc-300/20'} 
    ${bgTransparent?'':'bg-white/50 dark:bg-black/50'}
    w-screen fixed top-0 right-0 left-0 z-50`}>
      <div className="p-grid max-w-grid flex justify-between items-center mx-auto px-8 py-2 ">
        <div className="flex items-center justify-center gap-4">
          <Image src={Logo} alt='ArabHardware' className='size-12 lg:mr-8' />
          <SearchSection isExpanded={searchTypeDropdownPopoverShow} setIsExpanded={setSearchTypeDropdownPopoverShow}
          typeValue={searchTypeDropdownValue} setTypeValue={setSearchTypeDropdownValue} searchValue={searchValue} setSearchValue={setSearchValue} />
        </div>
        
        <PagesLinks setIsExpanded={setMoreDropdownPopoverShow} isExpanded={moreDropdownPopoverShow} />
        <div className="flex flex-col justify-center items-between max-lg:hidden">
          <NavbarTopMenu setTheme={setTheme} theme={theme} 
          setMoreDropdownPopoverShow={setMoreDropdownPopoverShow} 
          setUserDropdownPopoverShow={setUserDropdownPopoverShow} />

          <MoreDropdown isExpanded={moreDropdownPopoverShow} setIsExpanded={setMoreDropdownPopoverShow} />
          <GridDropdown isExpanded={gridDropdownPopoverShow} setIsExpanded={setGridDropdownPopoverShow} />
          <UserDropdown isExpanded={userDropdownPopoverShow} setIsExpanded={setUserDropdownPopoverShow} />
        </div>

        
      </div>
</nav>
        */}
    </>
  )
}

export default Appbar