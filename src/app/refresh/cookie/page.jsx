"use client"
import {useEffect, useState, useRef} from 'react'
import { setCookie, getCookie, deleteCookie } from 'cookies-next'

function Page() {
    const token = getCookie('jwt_token')
    const [token1, setToken1] = useState('')

    useEffect(()=>{
      const iframe= document.getElementById('iframe4')
      if(iframe){
        console.log('iframe', iframe)
        setTimeout(()=>{
          const content = iframe.contentWindow
          console.log('content', content)
        }, [1000])
      }
    }, [token1])

  return (
    <div className='w-full h-full space-y-4 p-grid max-w-grid'>
        {token && <p className=' break-all text-left' id='token'>{token}</p>}
        {token && <p className=' break-all text-left' id='token1'>{token1}</p>}
        <iframe id="iframe4" name="iframe4" src={`https://myaccount.arabhardware.com/refresh/cookie`}
        sandbox="allow-same-origin allow-scripts"
        className=""></iframe>
    </div>
  )
}

export default Page