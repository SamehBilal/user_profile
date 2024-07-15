import {useState, useEffect, useRef} from 'react'
import Button from '../ui/button'
import FloatingInput from '../ui/floating_input'
import CheckboxInput from '../ui/checkboxInput'
import { setCookie, getCookie } from 'cookies-next';
import Image from 'next/image'
import { en, ar } from '@/public/strings_manager';
import { ApiBase, storeLoginDomain, callBack, cookieDommains } from '@/config/api';
import { useRouter } from 'next/navigation';
import axios from 'axios';
import TextLogo from '@/public/images/logo_icon.png'
import OrBy from '../login/or_by';
import { Eye, EyeOff } from 'lucide-react';
import toast from 'react-hot-toast';
import ToasterComponent from '@/components/toaster_bottom';

function RegisterForm({toLoginPage, returnUrl}) {
  const router = useRouter()
  const tokenString = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwczovL2FyYWJoYXJkd2FyZS5jb20vYXBpL3YxL2xvZ2luIiwiaWF0IjoxNzE5ODM3NDIwLCJleHAiOjE3MTk4NDEwMjAsIm5iZiI6MTcxOTgzNzQyMCwianRpIjoiNEI3UjVNVlBSaUZTN0NJZyIsInN1YiI6IjI4NzQ2IiwicHJ2IjoiOTEwZGQ4YWQwYjRmNDQ4MjBmZWVjNDQ4MjFmM2VhZmUwNGYzM2UwNSJ9.duQcIJZ929slGAxhhSYQmoYWL1ivC3S9YTGUEbHv_Rg"
    const [form, setForm] = useState({email:'', password:'', firstname: '', lastname: '', agreeToTerms: false})
    const [isLoading, setIsLoading] = useState(false)
    const [token, setToken] = useState(null)
    const [errorMsg, setErrorMsg] = useState("")
    const [isPasswordShown, setIsPasswordShown] = useState(false)

    const handleChange = (e) => {
      setForm(prev=>({
        ...prev,
        [e.target.name]: e.target.value
      }))
    }

    const handleCheckboxChange = (e) => {
      setForm(prev=>({
        ...prev,
        agreeToTerms: e.target.checked
      }))
    };

    const submitForm = async(e) => {
        e.preventDefault()
        const {email, password, firstname, lastname, agreeToTerms} = form
        if(email == '' || password == '' || firstname == '' || lastname == '' || !agreeToTerms){
          toast.error('كل المعلومات مطلوبة')
        }else{
          setIsLoading(true)
          
          await axios.post('/api/register', 
            {email, password, firstname, lastname} //check if valid
          ).then(async res=>{
            if(res.data?.message) toast.error(res.data.message)
            else{
              await axios.post(`${ApiBase}/register`, 
                {email, password, firstname, lastname} //add user to db
              ).then(async data=> {
                if(data.data.message){
                  console.log('data.data.message', data.data.message)
                  throw new Error(data.data.message)
                }else{
                    setCookie("user", JSON.stringify(data.data.user), {secure: true, sameSite: "None"})
                    cookieDommains.forEach(item=>{
                      setCookie(
                        item.title, 
                        data.data.authorisation.access_token, 
                        {secure: true, sameSite: "None", domain: item.domain})
                    })
                    setToken(data.data.authorisation.access_token)
                    toast.success('تم تسجيل الدخول بنجاح')
                    setTimeout(() => {
                      location.href = returnUrl
                      setIsLoading(false)
                    }, 7000);
                }
              })
              .catch(e=>{
                console.log('error', e?.response?.data?.error)
                console.log('message', e?.response?.data?.message)
                console.log('e.message', e?.message)
                toast.error(e?.response?.data?.error||e?.response?.data?.message||e?.message||"حدث خطأ")
                setIsLoading(false)
              })
            }
          }).catch(e=>console.error(e))

        // setIsLoading(false)
        }
    }
    
    const DontHaveAnAccount = ({}) => {
      return <p className='text-center'>
      {ar.register.subTitle1} <span className='text-primary cursor-pointer' onClick={toLoginPage}>{ar.register.subTitle2}</span>
      </p>
    }

    useEffect(()=>{
      if(getCookie("jwt_token") ){
        // && getCookie("user") && JSON.parse(getCookie("user"))
        // console.log('user', JSON.parse(getCookie("user")))
        // console.log('jwt_token', getCookie("jwt_token"))
        router.push('/')
      }
    }, [])

  return (<div className="w-full h-full bg-white rounded-l-lg px-14 py-8 space-y-8 relative mb-32">
    <ToasterComponent />
    
    {token && 
    <div className='flex justify-between items-center max-h-[50vh]'>
      {callBack.map((endPoint, i)=>{
      return <iframe key={i} 
      src={`${endPoint}?token=${token}`} 
      // src='https://arabhardware.com/auth/arabhardware/callback?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwczovL2FyYWJoYXJkd2FyZS5jb20vYXBpL3YxL2xvZ2luIiwiaWF0IjoxNzE5OTA5NjQxLCJleHAiOjE3MTk5MTMyNDEsIm5iZiI6MTcxOTkwOTY0MSwianRpIjoiOHgyTGYyWDE4a0FNUm94SiIsInN1YiI6IjkzOSIsInBydiI6IjkxMGRkOGFkMGI0ZjQ0ODIwZmVlYzQ0ODIxZjNlYWZlMDRmMzNlMDUifQ.-lRHIWGTXWpuA2edz2Dul4NrhHxY1XZPuL6dVi5mYMM'
      frameBorder="0" className='hidden' ></iframe>
      })}
      <iframe id={`iframe-cart-register`}
      src={`${storeLoginDomain}&token=${token}`} 
      // src='https://arabhardware.com/auth/arabhardware/callback?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwczovL2FyYWJoYXJkd2FyZS5jb20vYXBpL3YxL2xvZ2luIiwiaWF0IjoxNzE5OTA5NjQxLCJleHAiOjE3MTk5MTMyNDEsIm5iZiI6MTcxOTkwOTY0MSwianRpIjoiOHgyTGYyWDE4a0FNUm94SiIsInN1YiI6IjkzOSIsInBydiI6IjkxMGRkOGFkMGI0ZjQ0ODIwZmVlYzQ0ODIxZjNlYWZlMDRmMzNlMDUifQ.-lRHIWGTXWpuA2edz2Dul4NrhHxY1XZPuL6dVi5mYMM'
      frameBorder="0" className='hidden' ></iframe>
    </div>}
    
    <div className="space-y-4">
      <div className="w-full flex justify-center items-center">
        <Image src={TextLogo} alt='arabhardware' className='w-20' />
      </div>
      <div className="space-y-2">
        <h2 className='text-2xl text-center text-zinc-500'>{ar.login.title}</h2>
      </div>
    </div>
    <div className="flex flex-col gap-4 items-center justify-center">
      <div className="flex items-center justify-between w-full gap-8">
        <FloatingInput id="firstname" type="text" value={form.firstname} onChange={handleChange} autoComplete='off webauthn'
        placeholder={ar.register.firstName} required={true} label={ar.register.firstName} />
        <FloatingInput id="lastname" type="text" value={form.lastname} onChange={handleChange} autoComplete='off webauthn'
        placeholder={ar.register.lastName} required={true} label={ar.register.lastName} />
      </div>
      <FloatingInput id="email" type="email" value={form.email} onChange={handleChange} autoComplete='off webauthn'
      placeholder={ar.register.email} required={true} label={ar.register.email} />
      <FloatingInput id="password" type="password" value={form.password} onChange={handleChange} autocomplete="off webauthn"
      placeholder={ar.register.password} required={true} label={ar.register.password} 
      Icon={isPasswordShown? Eye: EyeOff} setIsPasswordShown={setIsPasswordShown} isPasswordShown={isPasswordShown} />
      <CheckboxInput id="agreeToTerms" value={form.agreeToTerms} onChange={handleCheckboxChange}required={true} label={ar.register.terms}/>
      <Button text={ar.register.btn} className="" onClick={(e)=>submitForm(e)} isBig={true} disabled={isLoading} />
    </div>
    <OrBy text={ar.register.registerFrom} DontHaveAnAccount={DontHaveAnAccount} />
  </div>
  )
}

export default RegisterForm