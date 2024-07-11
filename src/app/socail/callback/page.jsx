"use client"
import {useState, useEffect} from 'react'
import SearchParamsComponent from './searchParamsComponent'

function Page() {
    const [token, setToken] = useState(null)
    const [user, setUser] = useState(null)

  return (
    <SearchParamsComponent setToken={setToken} setUser={setUser} />
  )
}

export default Page