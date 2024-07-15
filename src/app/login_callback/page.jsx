"use client"
import {useState, useEffect, useRef} from 'react'
import { callBack, storeLoginDomain, cookieDommains } from '@/config/api'
import { setCookie } from 'cookies-next'
import SearchParamsComponent from './searchParamsComponent'

function Page() {
    const [isMounted, setIsMounted] = useState(false)
    const [returnUrl, setReturnUrl] = useState('https://arabhardware.net')
    const [token, setToken] = useState(null)

    useEffect(()=>{
        setIsMounted(true)
        if(isMounted && token && token.length>5){
            cookieDommains.forEach(item=>{
              setCookie(
                item.title,
                token,
                {secure: true, sameSite: "None", domain: item.domain}
              )}
            )
        }
        const timer = setTimeout(() => {
            location.href = localStorage.getItem("returnUrl") ?? returnUrl
        }, 7000);
        return ()=>{
            clearTimeout(timer)
        }
    }, [token])
  return (
    <>
      <SearchParamsComponent setReturnUrl={setReturnUrl} setToken={setToken} />
        {token && 
        <div className='flex items-center justify-between p-grid max-w-grid'>
        {
        callBack.map((endPoint, i)=>{
        return <iframe id={`iframe-${i}`} key={i}
        src={`${endPoint}?token=${token}`} 
        frameBorder="0" className='hidden' ></iframe>
        })
        }
        <iframe id={`iframe-cart`}
        src={`${storeLoginDomain}&token=${token}`} 
        frameBorder="0" className='hidden' ></iframe>
        </div>}
    </>
  )
}

export default Page