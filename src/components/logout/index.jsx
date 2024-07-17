"use client"
import { useEffect, useRef, useState } from "react"
import { deleteCookie, getCookie, setCookie } from "cookies-next"
import { storeLogoutDomain, cookieDommains, storeLoginDomain, logoutDomains, ApiBase } from "@/config/api"
import axios from "axios"

function LogoutPage() {
    const [isLoggingOut, setIsLoggingOut] = useState(false)
    const [token, setToken] = useState('')
    
    const logoutFunction = async () => {
        setIsLoggingOut(true)
        const token = getCookie('jwt_token')
          deleteCookie(
            "user",
            {secure: true, sameSite: "None"})
          deleteCookie(
            "jwt_token",
            {secure: true, sameSite: "None"})
          deleteCookie(
            "jwt_token",
            {secure: true, sameSite: "None", domain: "arabhardware.com"})
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