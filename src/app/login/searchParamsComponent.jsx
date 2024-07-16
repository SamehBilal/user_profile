
import { useSearchParams } from 'next/navigation'
import { useEffect, useState } from 'react'
import axios from "axios";
import { storeSession } from "@/config/api";

export default function SearchParamsComponent({setReturnUrl, toRegisterPage, setSessionId}) {
  const [isMounted, setIsMounted] = useState(false)
    const searchParams = useSearchParams()
    let returnUrl = searchParams.get('url_return')??''
    let user = searchParams.get('user')
    //  example: https://arabhardware.com/home?session_id=hello
    useEffect(()=>{
      if(user && user == 'new') {
        toRegisterPage({speed:0})
      }
      async function getSessionId () {
        await axios.get(`${storeSession}`, {})
        .then(res=>{
          console.log('res.data.data', res.data.data, res.data.data?.session_id)
          const sessionId = res?.data?.data?.session_id ?? null
          setSessionId(sessionId)
          

          // if it wans't there, or it wasn't apart of the .com, .net or .store then set it to .net
          if(!returnUrl || 
            !(returnUrl?.includes('arabhardware.com') || returnUrl?.includes('arabhardware.net') || returnUrl?.includes('ahw.store'))) {
            returnUrl = "https://arabhardware.net"
          }
          returnUrl = `${returnUrl}${sessionId ?`?session_id=${sessionId}`:''}`
          localStorage.setItem("returnUrl", returnUrl)

          setReturnUrl(returnUrl)
        }).catch(e=>console.log('e', e))
      }

      setIsMounted(true)
      if(isMounted){
        getSessionId()
      }
    }, [isMounted])
  
  
    return (
      <></>
    )
  }