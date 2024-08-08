"use client"
import {useEffect, useState, useRef} from 'react'
import { setCookie, getCookie, deleteCookie } from 'cookies-next'

function Page() {
    const [token, setToken] = useState(localStorage?.getItem('jwt_token') ?? 'undefined')

    var checkCookie = function(isFirstLoad=false) {
      const jwtToken = localStorage?.getItem('jwt_token') ?? 'undefined'

      const postMessage = function(){
        parent.postMessage(`jwt_token:${jwtToken}`, "*");
      }

      if (jwtToken != token) {
        console.log('prev: ', token)
        console.log( 'current: ', jwtToken)
        setToken(jwtToken)
        postMessage()
      } else {
        postMessage()
        if(isFirstLoad) {
          console.log('JWT token not updated');
        }else{
          console.log('already sent')
        }
      }
    };
  
    useEffect(()=>{
      if(window){
        checkCookie(true)
        window.addEventListener('storage', checkCookie);
      }
      return () => {
        window.removeEventListener('storage', checkCookie);
      };
    }, [])

  return (
    <div className='w-full h-full space-y-4 p-grid max-w-grid'>
        {token && <p className=' break-all text-left' id='token'>{token}</p>}
    </div>
  )
}

export default Page