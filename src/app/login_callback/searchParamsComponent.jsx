
import { useSearchParams } from 'next/navigation'
import { useEffect, useState } from 'react'
import axios from "axios";
import { storeSession } from "@/config/api";

export default function SearchParamsComponent({setReturnUrl,setToken}) {
  const [isMounted, setIsMounted] = useState(false)
    const searchParams = useSearchParams()
    let returnUrl = searchParams.get('url_return')??''
    let token = searchParams.get('token')

    // const getSessionId = async () => {
    //   await axios.get(`${storeSession}`,
    //   ).then(res=>{
    //     console.log('res.data?.data?.session_id', res.data?.data?.session_id)
    //     return res.data?.data?.session_id
    //   }).catch(e=>{
    //     console.log('e', e)
    //   })
    // }
    
    useEffect(()=>{
      async function getSessionId () {
          await axios.get(`${storeSession}`, {})
          .then(res=>{
            console.log('res.data.data', res.data.data, res.data.data?.session_id)
            const sessionId = res?.data?.data?.session_id ?? null
            

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

      if(token) setToken(token)
    }, [isMounted])
  
  
    return (
      <></>
    )
  }