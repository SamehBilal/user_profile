"use client"
import { useEffect, useRef, useState } from "react"
import Link from "next/link"
import { en, ar } from "@/public/strings_manager"
import { getCookie } from "cookies-next"
import ToasterComponent from "@/components/toaster_top"
// import { ApiBase } from "@/config/api"

function UserDropdown({isExpanded=false, setIsExpanded, user }) {
  const dropdownRef = useRef(null)
  const [token, setToken] = useState(getCookie('jwt_token')?? (localStorage?.getItem("jwt_token") ?? ''))

  const handleOutsideClick = (e) => {
    setToken(getCookie('jwt_token')?? (localStorage?.getItem("jwt_token") ?? ''))
    if (dropdownRef?.current && !dropdownRef?.current?.contains(e?.target)) {
      setIsExpanded(false);
    }
  };

  useEffect(() => {
    handleOutsideClick()
    document.addEventListener('mousedown', handleOutsideClick);
    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, []);

  return (
    <div ref={dropdownRef}
    className={`max-h-44 flex flex-col justify-center items-center gap-0 absolute rtl:left-10 ltr:right-10 top-12 bg-zinc-200 rounded-l-lg rounded-br-lg text-black 
    ${isExpanded?'':'hidden'}`}>
      <ToasterComponent />
      {!token || token.length<5
      ?<Link href={`/login`} 
      className="flex items-center justify-center cursor-pointer hover:bg-zinc-400 rounded-l-lg rounded-br-lg p-4">
        {ar.navbar.login}
      </Link>
      :<Link href={`/logout`}
      className="flex items-center justify-center gap-2 cursor-pointer hover:bg-zinc-400 rounded-l-lg rounded-br-lg p-4">
        {ar.navbar.logout}
      </Link>}
        
    </div>
  )
}

export default UserDropdown