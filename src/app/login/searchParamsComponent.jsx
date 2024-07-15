
import { useSearchParams } from 'next/navigation'
import { useEffect, useState } from 'react'

export default function SearchParamsComponent({setReturnUrl}) {
  const [isMounted, setIsMounted] = useState(false)
    const searchParams = useSearchParams()
    let returnUrl = searchParams.get('url_return')??''
    let sessionId = searchParams.get('session_id')??''
    //  example: https://arabhardware.com/home?session_id=hello
    useEffect(()=>{
      setIsMounted(true)
      if(isMounted){
        if(!returnUrl || 
          (!returnUrl?.includes('arabhardware.com') && !returnUrl?.includes('arabhardware.net') && !returnUrl?.includes('ahw.store'))) {
          returnUrl = "https://arabhardware.net"}
        returnUrl = `${returnUrl}?session_id=${sessionId}`
        console.log('returnUrl', returnUrl)

        setReturnUrl(returnUrl)
      }
    }, [isMounted])
  
  
    return (
      <></>
    )
  }