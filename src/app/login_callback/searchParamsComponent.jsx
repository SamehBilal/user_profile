
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
          await axios.get(`${storeSession}`, {})
          .then(res=>{
            const sessionId = res?.data?.data?.session_id ?? null
            console.log('res.data.data', sessionId)
            setSessionId(sessionId)

            // if it wans't there, or it wasn't apart of the .com, .net or .store then set it to .net
            if(!returnUrl || 
              !(returnUrl?.includes('arabhardware.com') || returnUrl?.includes('arabhardware.net') || returnUrl?.includes('ahw.store'))) {
              returnUrl = "https://arabhardware.net"
            }
            returnUrl = `${returnUrl}`
            localStorage.setItem("returnUrl", returnUrl)
            localStorage.setItem("sessionId", sessionId)

            setReturnUrl(returnUrl)
          }).catch(e=>{
            console.log('e', e)
            
            // // if it wans't there, or it wasn't apart of the .com, .net or .store then set it to .net
            // const sessionId = '5e1c84c809bf4cbc5c841418a3'
            // setSessionId(sessionId)
            // if(!returnUrl || 
            //   !(returnUrl?.includes('arabhardware.com') || returnUrl?.includes('arabhardware.net') || returnUrl?.includes('ahw.store'))) {
            //   returnUrl = "https://arabhardware.net"
            // }
            // returnUrl = `${returnUrl}`
            // localStorage.setItem("returnUrl", returnUrl)
            // localStorage.setItem("sessionId", sessionId)

            // setReturnUrl(returnUrl)
          })
      }

      setIsMounted(true)
      if(isMounted){
        getSessionId()
      }

      if(token) setToken(token)
    }, [isMounted])
  
  
    return (
      <></>
    )
  }