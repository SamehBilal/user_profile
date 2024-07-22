"use client"
import { useState, useEffect, useRef } from 'react'
import { callBack, storeLogoutDomain, logoutDomains } from '@/config/api'
import { deleteCookie, getCookie, setCookie } from "cookies-next"
import Cookies from 'js-cookie';
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
    axios.post('/api/logout', {})
    .then(res=>console.log('success'))
    .catch(e=>console.log('e', e))
    setIsLoggingOut(true)
    localStorage.removeItem("jwt_token")
    await axios.post(`${ApiBase}/logout`,
      {}, {
        headers: { "Authorization": `Bearer ${token??''}`, "Accept": "application/json" }
      }).then(res=>{
        console.log('res', res?.data?.message)
      }).catch(e=>{
        console.log('e', e)
      })
        
    }

  useEffect(()=>{
    deleteCookie( "user", {secure: true, sameSite: "None"})
    deleteCookie( "jwt_token", {secure: true, sameSite: "None"})
    setCookie("jwt_token", "deleted", {secure: true, sameSite: "None", domain: ".arabhardware.com", maxAge: 0})
    setCookie("jwt_token", "deleted", {secure: true, sameSite: "None", domain: ".arabhardware.net", maxAge: 0})
    setCookie("jwt_token", "deleted", {secure: true, sameSite: "None", domain: "arabhardware.com", maxAge: 0})
    localStorage.removeItem(returnUrl)
    setIsMounted(true)
    console.log('token', token)
    // if(isMounted && token && token.length>5){
      logoutFunction()
    // }
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