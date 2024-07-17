
import { useSearchParams } from 'next/navigation'
import { useEffect, useState } from 'react'
import axios from "axios";
import { storeSession } from "@/config/api";

export default function SearchParamsComponent({setReturnUrl,setToken, setSessionId}) {
  const [isMounted, setIsMounted] = useState(false)
    const searchParams = useSearchParams()
    let returnUrl = searchParams.get('url_return')
    let token = searchParams.get('token')
    // console.log('token', token)
    
    useEffect(()=>{
      async function getSessionId () {
          // await axios.get(`${storeSession}`, {})
          // .then(res=>{
          //   const sessionId = res?.data?.data?.session_id ?? null
          //   // console.log('res.data.data', sessionId)
          //   setSessionId(sessionId)
            // console.log('returnUrl0', returnUrl)

            // if it wans't there, or it wasn't apart of the .com, .net or .store then set it to .net
            if(!returnUrl || 
              !(returnUrl?.includes('arabhardware.com') || returnUrl?.includes('arabhardware.net') || returnUrl?.includes('ahw.store'))) {
              returnUrl = "https://arabhardware.net"
            }
            returnUrl = `${returnUrl}`
            // console.log('returnUrl1', returnUrl)
            localStorage.setItem("returnUrl", returnUrl)
            // localStorage.setItem("sessionId", sessionId)

            setReturnUrl(returnUrl)
            // console.log('returnUrl2', returnUrl)
          // }).catch(e=>{
          //   console.log('e', e)
            
          //   // // for testing only
          //   // if(!returnUrl || 
          //   //   !(returnUrl?.includes('arabhardware.com') || returnUrl?.includes('arabhardware.net') || returnUrl?.includes('ahw.store'))) {
          //   //   returnUrl = "https://arabhardware.net"
          //   // }
          //   // returnUrl = `${returnUrl}`
          //   // // console.log('returnUrl1', returnUrl)
          //   // localStorage.setItem("returnUrl", returnUrl)

          //   // setSessionId('blahblahblah')
          //   // setReturnUrl(returnUrl)
          //   // console.log('returnUrl2', returnUrl)
          // })
      }

      setIsMounted(true)
      if(isMounted){
        // const iframe = document.getElementById('ahw_store_iframe')
        // const cookie = iframe.contentDocument.cookie;
        // console.log('cookie', cookie)
        getSessionId()
      }

      if(token) setToken(token)
    }, [isMounted])
  
  // OCSESSID
    return (
      <>
      {/* <iframe src='https://ahw.store/' id='ahw_store_iframe'
          frameBorder="0" className='' /> */}
      </>
    )
  }