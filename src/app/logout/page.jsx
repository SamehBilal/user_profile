"use client"
import { useState, useEffect, useRef } from 'react'
import { callBack, storeLogoutDomain, logoutDomains } from '@/config/api'
import { deleteCookie, getCookie, setCookie } from "cookies-next"
import SearchParamsComponent from './searchParamsComponent'
import Image from 'next/image'
import LoadingImg from '@/public/images/loading_login.png'
import WhiteLogo from '@/public/images/logos/white_logo.png'
import SadEmoji from '@/public/images/sad_emoji.png'
import SentencesAnimation from './sentences_animation'
import { senteces } from './sentences'
import axios from 'axios'

export default function Home() {
  const [isMounted, setIsMounted] = useState(false)
  const [sessionId, setSessionId] = useState(null)
  const [returnUrl, setReturnUrl] = useState('https://arabhardware.net')
  const [token, setToken] = useState(null)

  
  const logoutFunction = async () => {
    setIsLoggingOut(true)
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

  useEffect(()=>{
    localStorage.removeItem(returnUrl)
    setIsMounted(true)
    console.log('token', token)
    if(isMounted && token && token.length>5){
      logoutFunction()
    }
    const timer = setTimeout(() => {
      // console.log('to', `${returnUrl}${(sessionId && returnUrl.includes('?')) ?`&`:'?'}session_id=${localStorage.getItem('session_id')}`)
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
        logoutDomains.map((endPoint, i)=>{
        return <iframe id={`iframe-${i}`} key={i}
        src={`${endPoint}`} 
        frameBorder="0" className='hidden' ></iframe>
        })
        }
        {sessionId && <iframe id={`iframe-cart`}
        src={`${storeLogoutDomain}&token=${token}&session_id=${localStorage?.getItem('session_id')??''}`} 
        frameBorder="0" className='hidden' ></iframe>}
      </div>}

      <Image src={LoadingImg} alt='Loading Arabhardware pixilized sad' className='size-full object-cover object-top absolute'  />

      <div className="absolute left-1/2 -translate-x-1/2 max-w-grid p-grid py-8 flex flex-col justify-center items-center w-full gap-8">
      <Image src={WhiteLogo} alt='arabhardware' className='w-24 '/>
        <Image src={SadEmoji} alt='sad emoji' className='mt-10 size-64 animate-bounce-little'/>
        <SentencesAnimation sentences={senteces} />
      </div>
  </div>
)
}