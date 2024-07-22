"use client"
import {useEffect, useState, useRef} from 'react'
import { setCookie, getCookie, deleteCookie } from 'cookies-next'

function Page() {
    const token = localStorage?.getItem("jwt_token")

  return (
    <div className='w-full h-full space-y-4 p-grid max-w-grid'>
        {token && <p className=' break-all text-left' id='token'>{token}</p>}
    </div>
  )
}

export default Page