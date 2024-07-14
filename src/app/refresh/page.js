"use client"
import {useEffect, useState} from 'react'
import { setCookie, getCookie, deleteCookie } from 'cookies-next'

function Page() {
    const token = getCookie("jwt_token")
    const user = getCookie("user")

    useEffect(()=>{
    parent.postMessage({ user, token }, '*');
      // window.addEventListener('message', (event) => {
      //   if (event.origin === 'http://localhost:3000') {
      //     console.log(event.data)
      //   }
      // });
  
      return () => {}
    }, [])

    useEffect(()=>{
        console.log('getCookie("jwt_token")', getCookie("jwt_token"))
    }, [])
  return (
    <div className='w-full h-full space-y-4 p-grid max-w-grid'>
        {token && <p className=' break-all text-left' id='token'>{token}</p>}
        {user && <p className=' break-all text-left' id='user'>{user}</p>}
    </div>
  )
}

export default Page