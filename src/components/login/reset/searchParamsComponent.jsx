
import { useSearchParams } from 'next/navigation'
import { useEffect } from 'react'

export default function SearchParamsComponent({setToken}) {
    const searchParams = useSearchParams()
    const token = searchParams.get('token')

    useEffect(()=>{
        if(token){
          console.log('token: ', token)
          setToken(token)
        }
    }, [])
  
  
    return (
      <></>
    )
  }