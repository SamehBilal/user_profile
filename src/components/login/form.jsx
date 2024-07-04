import {useEffect, useState, useRef} from 'react'
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
import MainForm from './main_form';
import ForgetForm from './forget_form';

function LoginForm({toRegisterPage}) {
  const router = useRouter()
  const tokenString = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwczovL2FyYWJoYXJkd2FyZS5jb20vYXBpL3YxL2xvZ2luIiwiaWF0IjoxNzE5ODM3NDIwLCJleHAiOjE3MTk4NDEwMjAsIm5iZiI6MTcxOTgzNzQyMCwianRpIjoiNEI3UjVNVlBSaUZTN0NJZyIsInN1YiI6IjI4NzQ2IiwicHJ2IjoiOTEwZGQ4YWQwYjRmNDQ4MjBmZWVjNDQ4MjFmM2VhZmUwNGYzM2UwNSJ9.duQcIJZ929slGAxhhSYQmoYWL1ivC3S9YTGUEbHv_Rg"
    const [form, setForm] = useState({login_email:'', login_password:''})
    const [forgetForm, setForgetForm] = useState({forget_email:''})
    const [isLoading, setIsLoading] = useState(false)
    const [token, setToken] = useState(null)
    const [isPasswordShown, setIsPasswordShown] = useState(false)
    const [isForgetPswFormShown, setIsForgetPswFormShown] = useState(false)

    const handleChange = (e) => {
      setForm(prev=>({
        ...prev,
        [e.target.name]: e.target.value
      }))
    }
    const handleForgetFormChange = (e) => {
      setForgetForm(prev=>({
        ...prev,
        [e.target.name]: e.target.value
      }))
    }
    const submitForgetForm = async (e) => {
      e.preventDefault()
      const email = forgetForm.forget_email
      if(email == ''){
        alert('all information are required')
      }else{
        setIsLoading(true)
        
      await axios.post(`${ApiBase}/forget-password`, 
        {email},
      ).then(async data=> {
        if(data.data.success){
          alert(data.data.message)
        }else{
          alert(data.data.message)
        }
        setIsLoading(false)
      })
      }
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
            setCookie("user", JSON.stringify(data.data.user), {secure: true, sameSite: "None"})
            setCookie("token", `Bearer:${data.data.authorisation.access_token}`, {secure: true, sameSite: "None"})
            setToken(data.data.authorisation.access_token)

            callBack.forEach((endPoint, i)=>{
              // TODO: uncomment
              // const newTab = window.open(`${endPoint}?token=${data.data.authorisation.access_token}`, '_blank');
              // // if(newTab?.window) newTab?.window?.blur();
              // newTab?.blur();
              // console.log('newTab', newTab)
              //   setTimeout(() => {
              //     newTab.close();
              //     if(i==1) {
              //       alert('successfully loged in')
              //       location.reload()
              //     }
              //   }, 10000);
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
    
    {token && 
    <div className='flex justify-between items-center max-h-[50vh]'>
      {callBack.map((endPoint, i)=>{
      return <iframe id={`iframe-${i}`} key={i}
      src={`${endPoint}?token=${token}`} 
      // src='https://arabhardware.com/auth/arabhardware/callback?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwczovL2FyYWJoYXJkd2FyZS5jb20vYXBpL3YxL2xvZ2luIiwiaWF0IjoxNzE5OTA5NjQxLCJleHAiOjE3MTk5MTMyNDEsIm5iZiI6MTcxOTkwOTY0MSwianRpIjoiOHgyTGYyWDE4a0FNUm94SiIsInN1YiI6IjkzOSIsInBydiI6IjkxMGRkOGFkMGI0ZjQ0ODIwZmVlYzQ0ODIxZjNlYWZlMDRmMzNlMDUifQ.-lRHIWGTXWpuA2edz2Dul4NrhHxY1XZPuL6dVi5mYMM'
      frameBorder="0" className='hidden' ></iframe>
      })}
      <iframe id={`iframe-cart`}
      src={SetOpenCart} 
      // src='https://arabhardware.com/auth/arabhardware/callback?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwczovL2FyYWJoYXJkd2FyZS5jb20vYXBpL3YxL2xvZ2luIiwiaWF0IjoxNzE5OTA5NjQxLCJleHAiOjE3MTk5MTMyNDEsIm5iZiI6MTcxOTkwOTY0MSwianRpIjoiOHgyTGYyWDE4a0FNUm94SiIsInN1YiI6IjkzOSIsInBydiI6IjkxMGRkOGFkMGI0ZjQ0ODIwZmVlYzQ0ODIxZjNlYWZlMDRmMzNlMDUifQ.-lRHIWGTXWpuA2edz2Dul4NrhHxY1XZPuL6dVi5mYMM'
      frameBorder="0" className='hidden' ></iframe>
    </div>}
    

    <div className="w-full space-y-4">
      <div className="w-full flex justify-center items-center">
        <Image src={TextLogo} alt='arabhardware' className='w-20' />
      </div>
      <div className="w-full space-y-2">
        <h2 className='text-2xl text-center text-zinc-500'>{ar.login.title}</h2>
      </div>
    </div>
    <MainForm 
      setIsForgetPswFormShown={setIsForgetPswFormShown}
      isForgetPswFormShown={isForgetPswFormShown}
      setIsPasswordShown={setIsPasswordShown}
      isPasswordShown={isPasswordShown}
      form={form}
      submitForm={submitForm}
      handleChange={handleChange}
      isLoading={isLoading}
      ar={ar}
    />
    <ForgetForm
      setIsForgetPswFormShown={setIsForgetPswFormShown}
      isForgetPswFormShown={isForgetPswFormShown}
      form={forgetForm}
      submitForm={submitForgetForm}
      handleChange={handleForgetFormChange}
      isLoading={isLoading}
      ar={ar}
    />

    <OrBy 
      text={ar.login.loginFrom} 
      DontHaveAnAccount={DontHaveAnAccount}
      isForgetPswFormShown={isForgetPswFormShown}
    />
  </div>
  )
}

export default LoginForm