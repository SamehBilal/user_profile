import {useEffect, useState, useRef} from 'react'
import Button from '@/components/ui/button';
import FloatingInput from '@/components/ui/floating_input';
import { en, ar } from '@/public/strings_manager'
import { ApiBase, SetOpenCart, callBack } from '@/config/api';
import { useRouter } from 'next/navigation';
import axios from 'axios';
import { setCookie } from 'cookies-next';
import Image from 'next/image';
import TextLogo from '@/public/images/logo_icon.png'
import { Eye, EyeOff } from 'lucide-react';

function ResetForm({}) {
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
            alert('password was changed sucessfully')
            router.push('/login')
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

  return (<div className="w-full h-full bg-white rounded-l-lg px-14 py-8 space-y-8 relative mb-32">
    <div className="w-full space-y-4">
      <div className="w-full flex justify-center items-center">
        <Image src={TextLogo} alt='arabhardware' className='w-20' />
      </div>
      <div className="w-full space-y-2">
        <h2 className='text-2xl text-center text-zinc-500'>{ar.login.title}</h2>
      </div>
    </div>

    <form className={`w-full flex-col gap-4 items-center justify-center transition-all flex` }
    onSubmit={(e)=>submitForm}>
      <p className="text-zinc-500 cursor-pointer self-start mb-1">
      {ar.login.lost}
      </p>
      <FloatingInput id="reset_password1" type="password" value={form.reset_password1} onChange={handleChange}
      placeholder={ar.login.password1} required={true} label={ar.login.password1} 
      Icon={isPasswordShown? Eye: EyeOff} setIsPasswordShown={setIsPasswordShown} isPasswordShown={isPasswordShown} />
      <p className="text-primary text-sm w-full mb-2 hidden">{ar.login.password1Error}</p>
      <FloatingInput id="reset_password2" type="password" value={form.reset_password2} onChange={handleChange}
      placeholder={ar.login.password2} required={true} label={ar.login.password2} 
      Icon={isPasswordShown? Eye: EyeOff} setIsPasswordShown={setIsPasswordShown} isPasswordShown={isPasswordShown} />
      <p className="text-primary text-sm w-full mb-2 hidden">{ar.login.password2Error}</p>

      <Button text={ar.login.forgetBtn} type='submit' className="" onClick={(e)=>submitForm(e)} isBig={true} disabled={isLoading} />
    </form>
  </div>
  )
}

export default ResetForm