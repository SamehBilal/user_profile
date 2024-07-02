import {useEffect, useState} from 'react'
import Button from '../ui/button'
import FloatingInput from '../ui/floating_input'
import { en, ar } from '@/public/strings_manager'
import { ApiBase, SetOpenCart, callBack } from '@/config/api';
import { useRouter } from 'next/navigation';
import axios from 'axios';
import { setCookie } from 'cookies-next';
import Image from 'next/image';
import TextLogo from '@/public/images/logo_icon.png'
import OrBy from './or_by';
import { Eye, EyeOff } from 'lucide-react';

function LoginForm({toRegisterPage}) {
  
  const router = useRouter()
  const tokenString = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwczovL2FyYWJoYXJkd2FyZS5jb20vYXBpL3YxL2xvZ2luIiwiaWF0IjoxNzE5ODM3NDIwLCJleHAiOjE3MTk4NDEwMjAsIm5iZiI6MTcxOTgzNzQyMCwianRpIjoiNEI3UjVNVlBSaUZTN0NJZyIsInN1YiI6IjI4NzQ2IiwicHJ2IjoiOTEwZGQ4YWQwYjRmNDQ4MjBmZWVjNDQ4MjFmM2VhZmUwNGYzM2UwNSJ9.duQcIJZ929slGAxhhSYQmoYWL1ivC3S9YTGUEbHv_Rg"
    const [form, setForm] = useState({login_email:'', login_password:''})
    const [isLoading, setIsLoading] = useState(false)
    const [token, setToken] = useState(null)
    const [isPasswordShown, setIsPasswordShown] = useState(false)

    const handleChange = (e) => {
      setForm(prev=>({
        ...prev,
        [e.target.name]: e.target.value
      }))
    }
    const submitForm = async(e) => {
        e.preventDefault()
        const email = form.login_email, password = form.login_password
        if(email == '' || password == ''){
          alert('all information are required')
        }else{
          setIsLoading(true)
          
        await axios.post(`${ApiBase}/login`, 
          {email, password},
        ).then(async data=> {
          if(data.data.message){
            console.log('data.data.message', data.data.message)
            throw new Error(data.data.message)
          }else{
            // await axios.post(SetOpenCart, {
            //   "email": "569582528", "password": "12345678"
            // }, {
            // }).then((openData)=>{
            //   console.log('openData', openData)
            //   console.log('openData', openData.data)
            setCookie("user", JSON.stringify(data.data.user))
            setCookie("token", `Bearer:${data.data.authorisation.access_token}`)
            setToken(data.data.authorisation.access_token)

            callBack.forEach((endPoint, i)=>{
              const newTab = window.open(`${endPoint}?token=${data.data.authorisation.access_token}`, '_blank');
              // if(newTab?.window) newTab?.window?.blur();
              newTab?.blur();
              console.log('newTab', newTab)
                setTimeout(() => {
                  newTab.close();
                  if(i==1) {
                    alert('successfully loged in')
                    location.reload()
                  }
                }, 10000);
            })
            // })
            // .catch(e=>{
            //   console.log('e', e)
            //   alert(e)
            // })
          }
        })
        .catch(e=>{
          console.log('e', e?.response?.data?.error)
          console.log('e', e?.response?.data?.message)
          console.log('e', e?.message)
          alert(e?.response?.data?.error||e?.response?.data?.message||e?.message||"an error occured")
        })
        setIsLoading(false)
        }
    }

    // useEffect(()=>{
    //   if(document){
    //     const iframe1 = document.getElementById('iframe-1')
    //     const iframe0 = document.getElementById('iframe-0')
    //     console.log(iframe0, iframe1)
    //     iframe0.contentWindow.postMessage({ token }, 'https://arabhardware.com/auth/arabhardware/callback');
    //     iframe1.contentWindow.postMessage({ token }, 'https://arabhardware.net/auth/arabhardware/callback');
    //   }
    // }, [])

    
  const DontHaveAnAccount = ({}) => {
    return <p className='text-center'>
      {ar.login.subTitle1} <span className='text-primary cursor-pointer' onClick={toRegisterPage}>{ar.login.subTitle2}</span> {ar.login.subTitle3}
    </p>
  }

  return (<div className="w-full h-full bg-white rounded-l-lg px-14 py-8 space-y-8 relative mb-32">
    
    {token && 
    <div className='flex justify-between items-center'>
      {callBack.map((endPoint, i)=>{
      return <iframe id={`iframe-${i}`} key={i} 
      // src={`${endPoint}?token=${token}`} 
      src='https://arabhardware.com/auth/arabhardware/callback?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwczovL2FyYWJoYXJkd2FyZS5jb20vYXBpL3YxL2xvZ2luIiwiaWF0IjoxNzE5OTA5NjQxLCJleHAiOjE3MTk5MTMyNDEsIm5iZiI6MTcxOTkwOTY0MSwianRpIjoiOHgyTGYyWDE4a0FNUm94SiIsInN1YiI6IjkzOSIsInBydiI6IjkxMGRkOGFkMGI0ZjQ0ODIwZmVlYzQ0ODIxZjNlYWZlMDRmMzNlMDUifQ.-lRHIWGTXWpuA2edz2Dul4NrhHxY1XZPuL6dVi5mYMM'
      frameBorder="0" className='' ></iframe>
      })}
    </div>}

    <div className="w-full space-y-4">
      <div className="w-full flex justify-center items-center">
        <Image src={TextLogo} alt='arabhardware' className='w-20' />
      </div>
      <div className="w-full space-y-2">
        <h2 className='text-2xl text-center text-zinc-500'>{ar.login.title}</h2>
      </div>
    </div>
    <form className="w-full flex flex-col gap-4 items-center justify-center" onSubmit={(e)=>submitForm}>

      <FloatingInput id="login_email" type="email" value={form.login_email} onChange={handleChange}
      placeholder={ar.login.email} required={true} label={ar.login.email} />
      <FloatingInput id="login_password" type="password" value={form.login_password} onChange={handleChange}
      placeholder={ar.login.password} required={true} label={ar.login.password} 
      Icon={isPasswordShown? Eye: EyeOff} setIsPasswordShown={setIsPasswordShown} isPasswordShown={isPasswordShown} />
      <p className="text-zinc-500 cursor-pointer self-start mb-1">{ar.login.forget}</p>
      <Button text={ar.login.btn} type='submit' className="" onClick={(e)=>submitForm(e)} isBig={true} disabled={isLoading} />
    </form>

    <OrBy text={ar.login.loginFrom} DontHaveAnAccount={DontHaveAnAccount} />
  </div>
  )
}

export default LoginForm