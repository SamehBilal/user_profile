"use client"
import {useEffect, useState, useRef} from 'react'
import { setCookie, getCookie, deleteCookie } from 'cookies-next'

function Page() {
    const [token, setToken] = useState(getCookie('jwt_token'))
    const [isFirstTime, setISFirstTime] = useState(true)

    var checkCookie = function() {
      const jwtToken = getCookie('jwt_token')

      const postMessage = function(){
        // const iframe = document.getElementById('iframe4')
        // iframe.contentWindow.postMessage(`jwt_token:${jwtToken}`, "*");
        parent.postMessage(`jwt_token:${jwtToken}`, "*");
      }

      if (jwtToken != token) {
        console.log('prev: ', token)
        console.log( 'current: ', jwtToken)
        setToken(jwtToken)
        postMessage()
        setISFirstTime(true)
      } else {
        console.log('JWT token not updated');
        if(isFirstTime) {postMessage()}
        setISFirstTime(false)
      }
    };
  
    useEffect(()=>{
      if(window){
        checkCookie()
        window.setInterval(checkCookie, 12000); // run every 12s
        }
        window.addEventListener('message', event => {
          if (event.origin === 'https://myaccount.arabhardware.com') {
              console.log('event:' ,event.data);
          } else {
              return;
          }
       });
    }, [])

  return (
    <div className='w-full h-full space-y-4 p-grid max-w-grid'>
        {token && <p className=' break-all text-left' id='token'>{token}</p>}
        {/* <iframe id="iframe4" name="iframe4" src={`https://myaccount.arabhardware.com/refresh/cookie`}
        sandbox="allow-same-origin allow-scripts"
        className=""></iframe> */}
    </div>
  )
}

export default Page