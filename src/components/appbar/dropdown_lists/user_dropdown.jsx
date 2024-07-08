"use client"
import { useEffect, useRef } from "react"
import Link from "next/link"
import { en, ar } from "@/public/strings_manager"
import { deleteCookie, setCookie } from "cookies-next"
import { thisDomain } from "@/config/api"
import { cookieDommains } from "@/config/api"
// import axios from "axios"
// import { ApiBase } from "@/config/api"

function UserDropdown({isExpanded=false, setIsExpanded, user }) {
  const dropdownRef = useRef(null)
  const handleOutsideClick = (e) => {
    if (dropdownRef?.current && !dropdownRef?.current?.contains(e.target)) {
      setIsExpanded(false);
    }
  };
  useEffect(() => {
    document.addEventListener('mousedown', handleOutsideClick);
    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, []);

  const logoutFunction = () => {
    deleteCookie("user", {domain: thisDomain})
    deleteCookie("token", {domain: thisDomain})
    setCookie("user", "%%%", {secure: true, sameSite: "None", domain})
    cookieDommains.forEach(item=>{
      setCookie(
        item.title, 
        "%%%", 
        {secure: true, sameSite: "None", domain: item.domain})
    })
    console.log('loggin out')
    setIsExpanded(prev=>!prev)
    location.reload()
  }
  return (
    <div ref={dropdownRef}
    className={`max-h-44 flex flex-col justify-center items-center gap-0 absolute rtl:left-10 ltr:right-10 top-12 bg-zinc-200 rounded-l-lg rounded-br-lg text-black 
    ${isExpanded?'':'hidden'}`}>
      {!user
      ?<Link href={`/login`} 
      className="flex items-center justify-center cursor-pointer hover:bg-zinc-400 rounded-l-lg rounded-br-lg p-4">
        {ar.navbar.login}
      </Link>
      :<div onClick={logoutFunction}
      className="flex items-center justify-center cursor-pointer hover:bg-zinc-400 rounded-l-lg rounded-br-lg p-4">
      {ar.navbar.logout}
      </div>}
        
        
    </div>
  )
}

export default UserDropdown