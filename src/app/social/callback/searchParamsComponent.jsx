
import { useSearchParams } from 'next/navigation'
import { useEffect } from 'react'
import { setCookie, deleteCookie } from 'cookies-next'
import { thisDomain } from '@/config/api'

export default function SearchParamsComponent({setToken, setUser}) {
    const searchParams = useSearchParams()
    const token = searchParams.get('token')
    const user = searchParams.get('user')
const demoToken = `eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwczovL2FyYWJoYXJkd2FyZS5jb20vYXBpL3YxL2xvZ2luIiwiaWF0IjoxNzIwNzE1MDY2LCJleHAiOjE3MjA3MTg2NjYsIm5iZiI6MTcyMDcxNTA2NiwianRpIjoiRER4Z3d2RGVtMU40anlaSiIsInN1YiI6IjI4NzQ2IiwicHJ2IjoiOTEwZGQ4YWQwYjRmNDQ4MjBmZWVjNDQ4MjFmM2VhZmUwNGYzM2UwNSJ9.9luoQZ0id0Z76MN3KQK88GfCZ-fl4mRosUbGykHcpLE`
const demoUser = `{"id":28746,"fname":"nihan","lname":"kemal","display_name":"nihan_kemal","slug":"nihan_kemal","email":"nihan.kemal@world.com","avatar":null,"email_verified_at":null,"active":true,"created_at":"2024-07-01T06:30:37.000000Z","updated_at":"2024-07-11T13:39:25.000000Z","deleted_at":null,"facebook_id":null,"google_id":"109037788427029951429","last_login_at":"2024-07-11T13:39:25.000000Z","twitter_id":null,"linkedin_id":null,"phone":null,"old_store":false}`
    
    useEffect(()=>{
        if(token){
          deleteCookie(
            'token', 
            {secure: true, sameSite: "None"}
          )
          deleteCookie(
            'token', 
            {secure: true, sameSite: "None", domain: ".user-profile-lyart.vercel.app"}
          )
          setToken(token)
          setCookie(
            'token', 
            `Bearer ${token}`,
            {secure: true, sameSite: "None"}
          )
        }
        if(user){
          deleteCookie(
            'user', 
            {secure: true, sameSite: "None"}
          )
          deleteCookie(
            'token', 
            {secure: true, sameSite: "None", domain: ".user-profile-lyart.vercel.app"}
          )
          setUser(user)
          setCookie(
            'user', 
            `${user}`,
            {secure: true, sameSite: "None"}
          )
        }
    }, [])
  
  
    return (
      <></>
    )
  }