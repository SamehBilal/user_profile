"use client"
import {useState, useEffect, useRef} from 'react'
import { callBack, storeLoginDomain, cookieDommains, storeSession } from '@/config/api'
import { setCookie } from 'cookies-next'
import SearchParamsComponent from './searchParamsComponent'
import Image from 'next/image'
import LoadingImg from '@/public/images/loading_login.png'
import WhiteLogo from '@/public/images/logos/white_logo.png'
import SmileEmoji from '@/public/images/smile_emoji.png'
import SentencesAnimation from './sentences_animation'
import { senteces } from './sentences'
import axios from 'axios'

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
    }, [token])

    useEffect(()=>{
      const timer = setTimeout(() => {
        // console.log('to', `${returnUrl}${(sessionId && returnUrl.includes('?')) ?`&`:'?'}session_id=${sessionId}`)
        location.href = `${returnUrl}${(sessionId && returnUrl.includes('?')) ?`&`:'?'}session_id=${localStorage.getItem('session_id')}`
      }, 12000);
      return ()=>{
          clearTimeout(timer)
      }
    }, [returnUrl])

    // if(sessionId){console.log('sessionId', sessionId)}
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
          {sessionId && <iframe id={`iframe-cart`}
          src={`${storeLoginDomain}&token=${token}&session_id=${sessionId}`} 
          frameBorder="0" className='hidden' ></iframe>}
        </div>}

        <Image src={LoadingImg} alt='Loading Arabhardware pixilized smile' className='size-full object-cover object-top absolute -z-10'  />

        <div className="absolute left-1/2 -translate-x-1/2 max-w-grid p-grid py-8 flex flex-col justify-center items-center w-full gap-8">
        <Image src={WhiteLogo} alt='arabhardware' className='w-24 '/>
          <Image src={SmileEmoji} alt='smile emoji' className='mt-10 size-64 animate-bounce-little'/>
          <SentencesAnimation sentences={senteces} />
        </div>
    </div>
  )
}

export default Page