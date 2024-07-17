
import { useSearchParams } from 'next/navigation'
import { useEffect, useState } from 'react'

export default function SearchParamsComponent({setReturnUrl, toRegisterPage}) {
  const [isMounted, setIsMounted] = useState(false)
    const searchParams = useSearchParams()
    let returnUrl = searchParams.get('url_return')??''
    let user = searchParams.get('user')
    //  example: https://arabhardware.com/home?session_id=hello
    useEffect(()=>{
      if(user && user == 'new') {
        toRegisterPage({speed:0})
      }
      const getUrl = () => {
        // if it wans't there, or it wasn't apart of the .com, .net or .store then set it to .net
        if(!returnUrl || 
          !(returnUrl?.includes('arabhardware.com') || returnUrl?.includes('arabhardware.net') || returnUrl?.includes('ahw.store'))) {
          returnUrl = "https://arabhardware.net"
        }
        returnUrl = `${returnUrl}`
        localStorage.setItem("returnUrl", returnUrl)

        setReturnUrl(returnUrl)
      }

      setIsMounted(true)
      if(isMounted){
        getUrl()
      }
    }, [isMounted])
  
  
    return (
      <></>
    )
  }