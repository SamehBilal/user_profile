import {useState} from 'react'
import Button from '../ui/button'
import FloatingInput from '../ui/floating_input'
import { en, ar } from '@/public/strings_manager'
import { ApiBase } from '@/config/api';
import { useRouter } from 'next/navigation';
import axios from 'axios';
import { setCookie } from 'cookies-next';

function LoginForm({toRegisterPage}) {
  const router = useRouter()
    const [form, setForm] = useState({login_email:'', login_password:''})
    const [isLoading, setIsLoading] = useState(false)

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
        ).then(data=> {
          if(data.data.message){
            console.log('data.data.message', data.data.message)
            throw new Error(data.data.message)
          }else{
            setCookie("user", JSON.stringify(data.data.user))
            setCookie("token", `Bearer:${data.data.authorisation.access_token}`)
            alert('Registration success')
            location.reload()
          }
        })
        .catch(e=>{
          console.log('e', e)
          alert(e)
        })
        setIsLoading(false)
        }
    }

  return (<div className="w-full h-full bg-white rounded-r-lg px-14 py-8 space-y-8">
    <div className="space-y-4">
      <h2 className='text-2xl'>{ar.login.title}</h2>
      <p className=''>
      {ar.login.subTitle1} <span className='text-primary cursor-pointer' onClick={toRegisterPage}>{ar.login.subTitle2}</span> {ar.login.subTitle3}
      </p>
    </div>
    <form className="flex flex-col gap-4 items-start justify-center" onSubmit={(e)=>submitForm}>
      <FloatingInput id="login_email" type="email" value={form.login_email} onChange={handleChange}
      placeholder={ar.login.email} required={true} label={ar.login.email} />
      <FloatingInput id="login_password" type="password" value={form.login_password} onChange={handleChange}
      placeholder={ar.login.password} required={true} label={ar.login.password} />
      <Button text={ar.login.btn} type='submit' className=" self-end" onClick={(e)=>submitForm(e)} isBig={true} disabled={isLoading} />
    </form>
  </div>
  )
}

export default LoginForm