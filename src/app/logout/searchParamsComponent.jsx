
import { useSearchParams } from 'next/navigation'
import { useEffect, useState } from 'react'
import axios from "axios";
import { storeSession } from "@/config/api";
import { getCookie } from 'cookies-next';

export default function SearchParamsComponent({setReturnUrl,setToken, setSessionId}) {
  const [isMounted, setIsMounted] = useState(false)
    const searchParams = useSearchParams()
    let returnUrl = searchParams.get('url_return')
    let token = searchParams.get('token') || getCookie('jwt_token') || localStorage?.getItem("jwt_token")
    setToken(token)
    
    useEffect(()=>{
      async function getSessionId () {
          await axios.get(`${storeSession}`, {})
          .then(res=>{
            const sessionId = res?.data?.data?.session_id ?? null
            console.log('res.data.data', sessionId)
            setSessionId(sessionId) //<=TODO: remove the comment
            localStorage.setItem("session_id", sessionId)
            // console.log('returnUrl0', returnUrl)

            // if it wans't there, or it wasn't apart of the .com, .net or .store then set it to .net
            if(!returnUrl || 
              !(returnUrl?.includes('arabhardware.com') || returnUrl?.includes('arabhardware.net') || returnUrl?.includes('ahw.store'))) {
              returnUrl = "https://arabhardware.net"
            }
            returnUrl = `${returnUrl}`
            // console.log('returnUrl1', returnUrl)
            localStorage.setItem("returnUrl", returnUrl)

            setReturnUrl(returnUrl)
            // console.log('returnUrl2', returnUrl)
          }).catch(e=>{
            console.log('e', e)
            
            // // for testing only
            // if(!returnUrl || 
            //   !(returnUrl?.includes('arabhardware.com') || returnUrl?.includes('arabhardware.net') || returnUrl?.includes('ahw.store'))) {
            //   returnUrl = "https://arabhardware.net"
            // }
            // returnUrl = `${returnUrl}`
            // const sessionId = 'blahblahblah'
            // // console.log('returnUrl1', returnUrl)
            // localStorage.setItem("returnUrl", returnUrl)
            // localStorage.setItem("session_id", sessionId)

            // setSessionId(sessionId)
            // setReturnUrl(returnUrl)
            // console.log('returnUrl2', returnUrl)
          })
      }

      setIsMounted(true)
      if(isMounted){
        getSessionId()
      }
    }, [isMounted])
  
  // OCSESSID
    return (
      <>
      </>
    )
  }