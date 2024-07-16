"use client"
import {useState, useEffect, useRef} from 'react'
import { callBack, storeLoginDomain, cookieDommains } from '@/config/api'
import { setCookie } from 'cookies-next'
import SearchParamsComponent from './searchParamsComponent'
import Image from 'next/image'
import LoadingImg from '@/public/images/loading_login.jpg'

function Page() {
    const [isMounted, setIsMounted] = useState(false)
    const [sessionId, setSessionId] = useState(null)
    const [returnUrl, setReturnUrl] = useState('https://arabhardware.net')
    const [token, setToken] = useState(null)

    // console.log('returnUrl', returnUrl)
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
          // console.log('returnUrl', returnUrl)
          // ${sessionId ?`?session_id=${sessionId}`:''}
            location.href = `${returnUrl}${(sessionId && returnUrl.includes('ahw.store')) ?`&session_id=${sessionId}`:''}`
        }, 3000);
        return ()=>{
            clearTimeout(timer)
        }
    }, [token])
  return (
    <div className='w-screen h-screen'>
      <SearchParamsComponent setReturnUrl={setReturnUrl} setToken={setToken} setSessionId={setSessionId} />
        {token && 
      <div className='justify-between items-center max-h-[50vh] hidden'>
        {
        callBack.map((endPoint, i)=>{
        return <iframe id={`iframe-${i}`} key={i}
        src={`${endPoint}?token=${token}`} 
        frameBorder="0" className='hidden' ></iframe>
        })
        }
        {<iframe id={`iframe-cart`}
        src={`${storeLoginDomain}&token=${token}&sessionId=${sessionId}`} 
        frameBorder="0" className='hidden' ></iframe>}
      </div>}

        <Image src={LoadingImg} alt='Loading Arabhardware pixilized smile' className='size-full object-cover object-top'  />
    </div>
  )
}

export default Page