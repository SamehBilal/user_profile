
import { useSearchParams } from 'next/navigation'
import { useEffect, useState } from 'react'

export default function SearchParamsComponent({setReturnUrl, toRegisterPage}) {
  const [isMounted, setIsMounted] = useState(false)
    const searchParams = useSearchParams()
    let returnUrl = searchParams.get('url_return')??''
    let sessionId = searchParams.get('session_id')
    let user = searchParams.get('user')
    //  example: https://arabhardware.com/home?session_id=hello
    useEffect(()=>{
      if(user && user == 'new') {
        toRegisterPage({speed:0})
      }
      setIsMounted(true)
      if(isMounted){
        if(!returnUrl || 
          (!returnUrl?.includes('arabhardware.com') && !returnUrl?.includes('arabhardware.net') && !returnUrl?.includes('ahw.store'))) {
          returnUrl = "https://arabhardware.net"}
        returnUrl = `${returnUrl}${sessionId ?`?session_id=${sessionId}`:''}`
        // console.log('returnUrl', returnUrl)


        setReturnUrl(returnUrl)
      }
    }, [isMounted])
  
  
    return (
      <></>
    )
  }