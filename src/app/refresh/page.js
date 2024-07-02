"use client"
import {useEffect, useState} from 'react'
import { setCookie, getCookie, deleteCookie } from 'cookies-next'

function Page() {
    const [token, setToken] = useState(getCookie("token"))

    useEffect(()=>{
        console.log('getCookie("token")', getCookie("token"))
    }, [])
  return (
    <div>
    {token}
    </div>
  )
}

export default Page