
import { useSearchParams } from 'next/navigation'
import { useEffect } from 'react'
import { setCookie, deleteCookie } from 'cookies-next'
import { thisDomain } from '@/config/api'

export default function SearchParamsComponent({}) {
    const searchParams = useSearchParams()
    const token = searchParams.get('token')
    const user = searchParams.get('user')

    useEffect(()=>{
        if(token){
          setCookie(
            'token',
            'null', 
            {secure: true, sameSite: "None"}
          )
          deleteCookie(
            'token', 
            {secure: true, sameSite: "None", domain: ".user-profile-lyart.vercel.app"}
          )

        }
        if(user){
          setCookie(
            'user', 
            'null',
            {secure: true, sameSite: "None"}
          )
          deleteCookie(
            'token', 
            {secure: true, sameSite: "None", domain: ".user-profile-lyart.vercel.app"}
          )

        }
    }, [])
  
  
    return (
      <></>
    )
  }