"use client"
import { useEffect, useRef, useState } from "react"
import { deleteCookie, getCookie, setCookie } from "cookies-next"
import Cookies from 'js-cookie';
import { storeLogoutDomain, cookieDommains, storeLoginDomain, logoutDomains, ApiBase } from "@/config/api"
import axios from "axios"

function LogoutPage() {
    const [isLoggingOut, setIsLoggingOut] = useState(false)
    const [token, setToken] = useState('')
    
    const getCookie = (name) => {
      const value = `; ${document.cookie}`;
      const parts = value.split(`; ${name}=`);
      if (parts.length === 2) return parts.pop().split(';').shift();
    };

    const myCookie = getCookie('test2');
    console.log('test2:', myCookie);

    // Delete the cookie
    const deleteCookie = (name) => {
      console.log('delete name', name)
      document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
    };

    deleteCookie('test2');
    
    const logoutFunction = async () => {
        setIsLoggingOut(true)
        const token = getCookie('jwt_token') || localStorage?.getItem("jwt_token")
          deleteCookie(
            "user",
            {secure: true, sameSite: "None"})
          deleteCookie(
            "jwt_token",
            {secure: true, sameSite: "None"})
          Cookies.remove('jwt_token');
          deleteCookie( "test")
          Cookies.remove('test1');
          deleteCookie(
            "jwt_token",
            {secure: true, sameSite: "None", domain: "arabhardware.com"})
          deleteCookie(
            "jwt_token",
            {secure: true, sameSite: "None", domain: ".arabhardware.com"})
          // deleteCookie(
          //   "jwt_token",
          //   {secure: true, sameSite: "None", domain: ".arabhardware.net"})
          localStorage.removeItem("jwt_token")
    
          await axios.post(`${ApiBase}/logout`,
            {}, {
              headers: { "Authorization": `Bearer ${token}`, "Accept": "application/json" }
            }).then(res=>{
              console.log('res', res?.data?.message)
            }).catch(e=>{
              console.log('e', e)
            })
    }

  useEffect(() => {
    setToken(getCookie('jwt_token'))
    logoutFunction()
  }, [token]);

  return (
    <>
      {isLoggingOut && 
        <div className="flex items-center justify-between flex-wrap p-grid max-w-grid">
            {logoutDomains.map((endPoint, i)=>{
                return <iframe key={i} src={`${endPoint}`} frameBorder="0" className='w-96' ></iframe>
            })}
            <iframe id={`iframe-cart`}
            src={`${storeLogoutDomain}&token=${token}`} 
            frameBorder="0" className='w-96' ></iframe>
        </div>
      }
    </>
  )
}

export default LogoutPage