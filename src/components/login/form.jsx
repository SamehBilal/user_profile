import {useState} from 'react'
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
    const [form, setForm] = useState({login_email:'', login_password:''})
    const [isLoading, setIsLoading] = useState(false)
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

                    callBack.map(async (endPoint, i)=>{
                      // console.log(i, ": ", endPoint)
                      await axios.get(endPoint, {
                        params: {
                          token: data.data.authorisation.access_token
                        }
                      })
                      .then((respo)=>{
                        // console.log('respo', respo?.data?.success, respo?.data?.message)
                        if(!respo?.data?.success) {
                          // console.log('callback failed')
                          throw new Error('callback failed')
                        }else if(respo?.data?.success && i==1){
                          alert('Login successful')
                          location.reload()
                        }
                      }).catch(e=>console.log('e', e))
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
    
  const DontHaveAnAccount = ({}) => {
    return <p className='text-center'>
      {ar.login.subTitle1} <span className='text-primary cursor-pointer' onClick={toRegisterPage}>{ar.login.subTitle2}</span> {ar.login.subTitle3}
    </p>
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