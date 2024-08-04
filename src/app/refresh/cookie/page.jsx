"use client"
import {useEffect, useState, useRef} from 'react'
import { setCookie, getCookie, deleteCookie } from 'cookies-next'

function Page() {
    const [token, setToken] = useState(getCookie('jwt_token') ?? '')

    var checkCookie = function(isFirstLoad=false) {
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
      } else {
        if(isFirstLoad) {
          console.log('JWT token not updated');
          postMessage()
        }
        console.log('already sent')
      }
    };
  
    useEffect(()=>{
      if(window){
         // TODO: uncomment on production
         checkCookie(true)
        window.setInterval(checkCookie, 12000); // run every 12s
        // end of uncomment on production
        }
      //   window.addEventListener('message', event => {
      //     if (event.origin === 'https://myaccount.arabhardware.com') {
      //         console.log('event:' ,event.data);
      //     } else {
      //         return;
      //     }
      //  });
    }, [])

  return (
    <div className='w-full h-full space-y-4 p-grid max-w-grid'>
        {token && <p className=' break-all text-left' id='token'>{token}</p>}
        {/* TODO: comment on production */}
        {/* <iframe id="iframe4" name="iframe4" src={`https://myaccount.arabhardware.com/refresh/cookie`}
        sandbox="allow-same-origin allow-scripts"
        className=""></iframe> */}
    </div>
  )
}

export default Page