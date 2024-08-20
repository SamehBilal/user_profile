import {useEffect, useState, useRef, Suspense} from 'react'
import Button from '@/components/ui/button';
import FloatingInput from '@/components/ui/floating_input';
import { en, ar } from '@/public/strings_manager'
import { ApiBase, storeLoginDomain, callBack, cookieDommains } from '@/config/api';
import { useRouter } from 'next/navigation';
import axios from 'axios';
import { setCookie } from 'cookies-next';
import Image from 'next/image';
import TextLogo from '@/public/images/logo_icon.png'
import { Eye, EyeOff } from 'lucide-react';
import SearchParamsComponent from './searchParamsComponent';
import toast from 'react-hot-toast';
import ToasterComponent from '@/components/toaster_bottom';

function ResetForm({}) {
  const router = useRouter()
  const [form, setForm] = useState({password1:'', password2: '', token: null})
  const [formError, setFormError] = useState({password1: false, password2: false})
  const [formSuccess, setFormSuccess] = useState({password1: false, password2: false})
  const [isLoading, setIsLoading] = useState(false)
  const [token, setToken] = useState(null)
  const [isPasswordShown, setIsPasswordShown] = useState(false)

    const handleChange = async (e) => {
      // update form
      setForm(prev=>({
        ...prev,
        [e.target.name]: e.target.value
      }))
      // check for errors or success
      if(e.target.name == 'password1'){
        await axios.post('/api/reset', {password1: e.target.value})
        .then(res=>{
          if(e.target.value == ''){ //if empty make the error and success false
            setFormSuccess(prev=>({...prev, password1: false}))
            setFormError(prev=>({...prev, password1: false}))
          }else{ //else check for errors and success
            if(res.data?.message){ 
              setFormError(prev=>({...prev, password1: true}))
              setFormSuccess(prev=>({...prev, password1: false}))
            }else{
              setFormError(prev=>({...prev, password1: false}))
              setFormSuccess(prev=>({...prev, password1: true}))
            }
          }
        }).catch(e=>console.log('e', e))
      }else if(e.target.name == 'password2'){
        if(e.target.value == ''){ //if empty make the error and success false
          setFormSuccess(prev=>({...prev, password2: false}))
          setFormError(prev=>({...prev, password2: false}))
        }else{ //else check for errors and success
          if(form.password1 != e.target.value){
            setFormError(prev=>({...prev, password2: true}))
            setFormSuccess(prev=>({...prev, password2: false}))
          }else{
            setFormError(prev=>({...prev, password2: false}))
            setFormSuccess(prev=>({...prev, password2: true}))
          }
        }
      }
    }

    const submitForm = async(e) => {
        e.preventDefault()
        const password1 = form.password1, password2 = form.password2, token = form.token
        if(password1 == '' || password2 == '' || !token){
          toast.error('كل المعلومات مطلوبة')
          console.log('password1, password2, token', password1, password2, token)
        }else if(formError.password1 || formError.password2){
          toast.error('برجاء ادخال معلومات صالحة')
        }else{
          setIsLoading(true)
          const finalForm = {password: password1, token: token}
          console.log('finalForm', finalForm)
          await axios.post(`${ApiBase}/reset-password`, 
                finalForm,
          ).then(async data=> {
            if(data.data.status){
              localStorage?.setItem("jwt_token", data.data.authorisation.access_token)
              cookieDommains.forEach(item=>{
                setCookie(
                  item.title, 
                  data.data.authorisation.access_token, 
                  {secure: true, sameSite: "None", domain: item.domain})
              })
              setToken(data.data.authorisation.access_token)
              toast.success('تم تغيير كلمة المرور')
            }else{
              toast.error('اللينك غير صالح')
            }
          })
          .catch(e=>{
            console.log('e', e?.response?.data?.error)
            console.log('e', e?.response?.data?.message)
            console.log('e', e?.message)
            toast.error(e?.response?.data?.error||e?.response?.data?.message||e?.message||"حدث خطأ")
          })
        }
        
        setIsLoading(false)
    }

    useEffect(()=>{
      if(token){
        // setTimeout(()=>{
          router.push('/login')
        // }, 5000)
      }
    }, [token])
    // console.log('form', form)

  return (<div className="w-full h-full bg-white lg:rounded-l-lg rounded-b-lg lg:px-14 px-4 py-8 space-y-8 relative mb-32">
    <ToasterComponent />
    <Suspense fallback={<div>Loading...</div>}>
      <SearchParamsComponent setToken={(token)=>setForm(prev=>({...prev, token }))} />
    </Suspense>
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
      {token && 
      <div className='flex justify-between items-center max-h-[50vh]'>
        {callBack.map((endPoint, i)=>{
        return <iframe id={`iframe-${i}`} key={i}
        src={`${endPoint}?token=${token}`} 
        // src='https://arabhardware.com/auth/arabhardware/callback?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwczovL2FyYWJoYXJkd2FyZS5jb20vYXBpL3YxL2xvZ2luIiwiaWF0IjoxNzE5OTA5NjQxLCJleHAiOjE3MTk5MTMyNDEsIm5iZiI6MTcxOTkwOTY0MSwianRpIjoiOHgyTGYyWDE4a0FNUm94SiIsInN1YiI6IjkzOSIsInBydiI6IjkxMGRkOGFkMGI0ZjQ0ODIwZmVlYzQ0ODIxZjNlYWZlMDRmMzNlMDUifQ.-lRHIWGTXWpuA2edz2Dul4NrhHxY1XZPuL6dVi5mYMM'
        frameBorder="0" className='hidden' ></iframe>
        })}
        <iframe id={`iframe-cart`}
        src={`${storeLoginDomain}${token}`} 
        // src='https://arabhardware.com/auth/arabhardware/callback?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwczovL2FyYWJoYXJkd2FyZS5jb20vYXBpL3YxL2xvZ2luIiwiaWF0IjoxNzE5OTA5NjQxLCJleHAiOjE3MTk5MTMyNDEsIm5iZiI6MTcxOTkwOTY0MSwianRpIjoiOHgyTGYyWDE4a0FNUm94SiIsInN1YiI6IjkzOSIsInBydiI6IjkxMGRkOGFkMGI0ZjQ0ODIwZmVlYzQ0ODIxZjNlYWZlMDRmMzNlMDUifQ.-lRHIWGTXWpuA2edz2Dul4NrhHxY1XZPuL6dVi5mYMM'
        frameBorder="0" className='hidden' ></iframe>
      </div>}
      <p className="text-zinc-500 cursor-pointer self-start mb-1">
      {ar.login.lost}
      </p>
      <FloatingInput id="password1" type="password" value={form.password1} onChange={handleChange} autoComplete='new-password'
      placeholder={ar.login.password1} required={true} label={ar.login.password1} autoFocus={true}
      isSuccess={formSuccess.password1} isError={formError.password1}
      Icon={isPasswordShown? Eye: EyeOff} setIsPasswordShown={setIsPasswordShown} isPasswordShown={isPasswordShown} />
      <p className={`text-primary text-sm w-full mb-2 ${formError.password1?'':'hidden'}`}>
        {ar.login.password1Error}
      </p>
      <FloatingInput id="password2" type="password" value={form.password2} onChange={handleChange} autoComplete='new-password'
      placeholder={ar.login.password2} required={true} label={ar.login.password2} 
      isSuccess={formSuccess.password2} isError={formError.password2}
      Icon={isPasswordShown? Eye: EyeOff} setIsPasswordShown={setIsPasswordShown} isPasswordShown={isPasswordShown} />
      <p className={`text-primary text-sm w-full mb-2 ${formError.password2?'':'hidden'}`}>
        {ar.login.password2Error}
      </p>

      <Button text={ar.login.forgetBtn} type='submit' className="" onClick={(e)=>submitForm(e)} isBig={true} disabled={isLoading} />
    </form>
  </div>
  )
}

export default ResetForm