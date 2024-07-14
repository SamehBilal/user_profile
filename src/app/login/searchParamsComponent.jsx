
import { useSearchParams } from 'next/navigation'
import { useEffect } from 'react'
import { setCookie, deleteCookie } from 'cookies-next'
import { thisDomain } from '@/config/api'

export default function SearchParamsComponent({setReturnUrl}) {
    const searchParams = useSearchParams()
    let returnUrl = searchParams.get('url_return')

    useEffect(()=>{
        if(!returnUrl || 
            (!returnUrl?.includes('arabhardware.com') && !returnUrl?.includes('arabhardware.net') && !returnUrl?.includes('ahw.store'))) {
        returnUrl = "https://arabhardware.net"}
    
        console.log('returnUrl', returnUrl)

        setReturnUrl(returnUrl)
    }, [])
  
  
    return (
      <></>
    )
  }