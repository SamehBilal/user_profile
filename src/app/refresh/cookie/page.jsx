"use client"
import {useEffect, useState, useRef} from 'react'
import { setCookie, getCookie, deleteCookie } from 'cookies-next'

function Page() {
    const token = getCookie('jwt_token')

    useEffect(()=>{
      if(window){
        const iframe = document.getElementById('iframe4')
        iframe.contentWindow.postMessage(`jwt_token:${token}`, "*");
        parent.postMessage(`jwt_token:${token}`, "*");
      }
      window.addEventListener('message', event => {
        console.log('event.origin', event.origin)
        if (event.origin === 'https://myaccount.arabhardware.com') {
            console.log(event.data);
        } else {
            return;
        }
    });
    }, [token])

  return (
    <div className='w-full h-full space-y-4 p-grid max-w-grid'>
        {token && <p className=' break-all text-left' id='token'>{token}</p>}
        <iframe id="iframe4" name="iframe4" src={`https://myaccount.arabhardware.com/refresh/cookie`}
        sandbox="allow-same-origin allow-scripts"
        className="hidden"></iframe>
    </div>
  )
}

export default Page