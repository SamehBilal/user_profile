"use client"
import {useEffect, useState} from 'react'
import { setCookie, getCookie, deleteCookie } from 'cookies-next'

function Page() {
    const token = getCookie('jwt_token', { secure: true, sameSite: 'None', domain: "arabhardware.com"})

  return (
    <div className='w-full h-full space-y-4 p-grid max-w-grid'>
        {token && <p className=' break-all text-left' id='token'>{token}</p>}
    </div>
  )
}

export default Page