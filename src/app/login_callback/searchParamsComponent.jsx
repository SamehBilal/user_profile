
import { useSearchParams } from 'next/navigation'
import { useEffect, useState } from 'react'

export default function SearchParamsComponent({setReturnUrl,setToken}) {
  const [isMounted, setIsMounted] = useState(false)
    const searchParams = useSearchParams()
    let returnUrl = searchParams.get('url_return')??''
    let sessionId = searchParams.get('session_id')
    let token = searchParams.get('token')
    
    useEffect(()=>{
      setIsMounted(true)
      if(isMounted){
        // if it wans't there, or it wasn't apart of the .com, .net or .store then set it to .net
        if(!returnUrl || 
          !(returnUrl?.includes('arabhardware.com') || returnUrl?.includes('arabhardware.net') || returnUrl?.includes('ahw.store'))) {
          returnUrl = "https://arabhardware.net"
        }
        returnUrl = `${returnUrl}${sessionId ?`?session_id=${sessionId}`:''}`
        localStorage.setItem("returnUrl", returnUrl)

        setReturnUrl(returnUrl)
      }

      if(token) setToken(token)
    }, [isMounted])
  
  
    return (
      <></>
    )
  }