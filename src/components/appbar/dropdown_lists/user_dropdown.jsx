"use client"
import { useEffect, useRef, useState } from "react"
import Link from "next/link"
import { en, ar } from "@/public/strings_manager"
import { deleteCookie, getCookie, setCookie } from "cookies-next"
import { storeLogoutDomain, thisDomain } from "@/config/api"
import { cookieDommains, logoutDomains, ApiBase } from "@/config/api"
import { LoaderCircle } from 'lucide-react'
import axios from "axios"
import toast from 'react-hot-toast';
import ToasterComponent from "@/components/toaster"
// import { ApiBase } from "@/config/api"

function UserDropdown({isExpanded=false, setIsExpanded, user }) {
  const dropdownRef = useRef(null)
  const [isLoggingOut, setIsLoggingOut] = useState(false)
  const token = (getCookie('token')&&getCookie('token').length>1)? getCookie('token')?.split(' ')[1]: ''

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

  const logoutFunction = async () => {
    setIsLoggingOut(true)
    const token = getCookie('token')
      deleteCookie(
        "user",
        {secure: true, sameSite: "None"})
      deleteCookie(
        "token",
        {secure: true, sameSite: "None"})
      deleteCookie(
        "jwt_token",
        {secure: true, sameSite: "None", domain: ".arabhardware.com"})
      deleteCookie(
        "jwt_token",
        {secure: true, sameSite: "None", domain: ".arabhardware.net"})

      await axios.post(`${ApiBase}/logout`,
        {}, {
          headers: { "Authorization": `Bearer ${token}`, "Accept": "application/json" }
        }).then(res=>{
          console.log('res', res?.data?.message)
          toast.success('logout successfull')
          toast.loading('جار تسجيل الخروج')
          setTimeout(() => {
            setIsLoggingOut(false)
            setIsExpanded(prev=>!prev)
            location.reload()
          }, 7000);
        }).catch(e=>{
          console.log('e', e)
          toast.error(e.message)
          setTimeout(() => {
            setIsLoggingOut(false)
            setIsExpanded(prev=>!prev)
            // location.reload()
          }, 7000);
        })
        
  }
  // any comment
  return (
    <div ref={dropdownRef}
    className={`max-h-44 flex flex-col justify-center items-center gap-0 absolute rtl:left-10 ltr:right-10 top-12 bg-zinc-200 rounded-l-lg rounded-br-lg text-black 
    ${isExpanded?'':'hidden'}`}>
      <ToasterComponent />
      {isLoggingOut && 
      <>
      {logoutDomains.map((endPoint, i)=>{
        return <iframe key={i} src={`${endPoint}`} frameBorder="0" className='hidden' ></iframe>
      })}
      <iframe id={`iframe-cart`}
      src={`${storeLogoutDomain}&token=${token}`} 
      frameBorder="0" className='hidden' ></iframe>
      </>
      }
      {!user
      ?<Link href={`/login`} 
      className="flex items-center justify-center cursor-pointer hover:bg-zinc-400 rounded-l-lg rounded-br-lg p-4">
        {ar.navbar.login}
      </Link>
      :<div onClick={logoutFunction}
      className="flex items-center justify-center gap-2 cursor-pointer hover:bg-zinc-400 rounded-l-lg rounded-br-lg p-4">
      {ar.navbar.logout}
      {isLoggingOut && <LoaderCircle className='animate-spin' />}
      </div>}
      {/* <div onClick={logoutFunction}
      className="flex items-center justify-center gap-2 cursor-pointer hover:bg-zinc-400 rounded-l-lg rounded-br-lg p-4">
      {ar.navbar.logout}
      {isLoggingOut && <LoaderCircle className='animate-spin' />}
      </div> */}
        
    </div>
  )
}

export default UserDropdown