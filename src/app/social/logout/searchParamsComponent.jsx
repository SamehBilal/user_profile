
import { useSearchParams } from 'next/navigation'
import { useEffect } from 'react'
import { useCookies } from 'next-client-cookies';
import { deleteCookie, getCookie } from 'cookies-next';
import { thisDomain } from '@/config/api'

export default function SearchParamsComponent({}) {
    const searchParams = useSearchParams()
    const cookies = useCookies();

    useEffect(()=>{
      const token = getCookie('token')
      const user = getCookie('user')
      console.log('token, user', token, user)
        if(token){
          deleteCookie('token', {secure: true, sameSite: "None"})
        }
        if(user){
          deleteCookie('user', {secure: true, sameSite: "None"})
        }
    }, [])
  
  
    return (
      <></>
    )
  }