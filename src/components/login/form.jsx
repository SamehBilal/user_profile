import {useState} from 'react'
import Button from '../ui/button'
import FloatingInput from '../ui/floating_input'
import { en, ar } from '@/public/strings_manager'
import { ApiBase, SetOpenCart } from '@/config/api';
import { useRouter } from 'next/navigation';
import axios from 'axios';
import { setCookie } from 'cookies-next';
import Image from 'next/image';
import TextLogo from '@/public/images/logo_icon.png'
import OrBy from './or_by';

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
              alert('Registration success')
              location.reload()
            // })
            // .catch(e=>{
            //   console.log('e', e)
            //   alert(e)
            // })
          }
        })
        .catch(e=>{
          console.log('e', e)
          alert(e)
        })
        setIsLoading(false)
        }
    }

  return (<div className="w-full h-full bg-white rounded-l-lg px-14 py-8 space-y-8 relative">
    <div className="w-full space-y-4">
      <div className="w-full flex justify-center items-center">
        <Image src={TextLogo} alt='arabhardware' className='w-36' />
      </div>
      <div className="w-full space-y-2">
        <h2 className='text-2xl text-center text-zinc-500'>{ar.login.title}</h2>
        <p className='text-center'>
        {ar.login.subTitle1} <span className='text-primary cursor-pointer' onClick={toRegisterPage}>{ar.login.subTitle2}</span> {ar.login.subTitle3}
        </p>
      </div>
    </div>
    <form className="w-full flex flex-col gap-4 items-center justify-center" onSubmit={(e)=>submitForm}>

      <FloatingInput id="login_email" type="email" value={form.login_email} onChange={handleChange}
      placeholder={ar.login.email} required={true} label={ar.login.email} />
      <FloatingInput id="login_password" type="password" value={form.login_password} onChange={handleChange}
      placeholder={ar.login.password} required={true} label={ar.login.password} />
      <Button text={ar.login.btn} type='submit' className="" onClick={(e)=>submitForm(e)} isBig={true} disabled={isLoading} />
    </form>

    <OrBy text={ar.login.loginFrom} />
  </div>
  )
}

export default LoginForm