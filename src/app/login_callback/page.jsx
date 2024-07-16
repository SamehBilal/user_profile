"use client"
import {useState, useEffect, useRef} from 'react'
import { callBack, storeLoginDomain, cookieDommains } from '@/config/api'
import { setCookie } from 'cookies-next'
import SearchParamsComponent from './searchParamsComponent'
import Image from 'next/image'
import LoadingImg from '@/public/images/loading_login.jpeg'

function Page() {
    const [isMounted, setIsMounted] = useState(false)
    const [sessionId, setSessionId] = useState(null)
    const [returnUrl, setReturnUrl] = useState('https://arabhardware.net')
    const [token, setToken] = useState(null)

    useEffect(()=>{
      localStorage.removeItem(returnUrl)
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
          console.log('local', localStorage.getItem("returnUrl"))
          console.log('returnUrl', returnUrl)
            location.href = localStorage.getItem("returnUrl") ?? returnUrl
        }, 12000);
        return ()=>{
            clearTimeout(timer)
        }
    }, [token])
  return (
    <div className='w-screen h-screen'>
      <SearchParamsComponent setReturnUrl={setReturnUrl} setToken={setToken} setSessionId={setSessionId} />
        {token && 
      <div className='flex justify-between items-center max-h-[50vh]'>
        {
        callBack.map((endPoint, i)=>{
        return <iframe id={`iframe-${i}`} key={i}
        src={`${endPoint}?token=${token}`} 
        frameBorder="0" className='' ></iframe>
        })
        }
        {sessionId && <iframe id={`iframe-cart`}
        src={`${storeLoginDomain}&token=${token}&sessionId=${sessionId}`} 
        frameBorder="0" className='' ></iframe>}
      </div>}

        <Image src={LoadingImg} alt='Loading Arabhardware pixilized smile' className='size-full object-cover'  />
    </div>
  )
}

export default Page