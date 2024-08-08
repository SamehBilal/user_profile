import {useEffect, useState, useRef} from 'react'
import { en, ar } from '@/public/strings_manager'
import { ApiBase, storeLoginDomain, callBack, mainDomains } from '@/config/api';
import { useRouter } from 'next/navigation';
import axios from 'axios';
import { getCookie, deleteCookie, setCookie } from 'cookies-next';
import Image from 'next/image';
import TextLogo from '@/public/images/logo_icon.png'
import OrBy from './or_by';
import MainForm from './main_form';
import ForgetForm from './forget_form';
import { cookieDommains } from '@/config/api';
import { useGoogleReCaptcha } from "react-google-recaptcha-v3";
import GoogleCaptchaWrapper from '@/app/google-captcha-wrapper';
import toast from 'react-hot-toast';
import ToasterComponent from '@/components/toaster_bottom';

export default function Home({toRegisterPage, returnUrl, sessionId}) {
  return (
    <GoogleCaptchaWrapper>
      <LoginForm toRegisterPage={toRegisterPage} returnUrl={returnUrl} session={sessionId} />
    </GoogleCaptchaWrapper>
  );
}

function LoginForm({toRegisterPage, returnUrl, sessionId}) {
  const router = useRouter()
    const [form, setForm] = useState({login_email:'', login_password:''})
    const [forgetForm, setForgetForm] = useState({forget_email:''})
    const [isLoading, setIsLoading] = useState(false)
    const [token, setToken] = useState(null)
    const [isPasswordShown, setIsPasswordShown] = useState(false)
    const [isForgetPswFormShown, setIsForgetPswFormShown] = useState(false)

    // delete the cookies of logout
    setCookie("jwt_logout", "deleted", {secure: true, sameSite: "None", domain: ".arabhardware.com", maxAge: 0})
    deleteCookie("jwt_logout", {secure: true, sameSite: "None", domain: ".arabhardware.com"})
    setCookie("jwt_logout", "deleted", {secure: true, sameSite: "None", domain: ".arabhardware.net", maxAge: 0})
    deleteCookie("jwt_logout", {secure: true, sameSite: "None", domain: ".arabhardware.net"})
    
    // const recaptaSecretKey = process?.env?.RECAPTCHA_SECRET_KEY;
    const recaptaSecretKey = "6Ld1uQsqAAAAAMxfabq4tdWDCGYbEZD0ZDdusTP3";
    // console.log('recaptaSecretKey', recaptaSecretKey)

    const { executeRecaptcha } = useGoogleReCaptcha();

    
    // // Delete the cookie
    // const deleteThisCookie = (name, domain) => {
    //   console.log('delete name', name, domain??'')
    //   document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/; ${domain? `domain=${domain};`: ''}`;
    // };

    useEffect(()=>{
      if(getCookie('jwt_token') && getCookie('jwt_token').length>10){
        alert('تم تسجيل الدخول بالفعل')
        setToken(getCookie('jwt_token'))
      }
      // const deleteCookies = () => {
      //   setCookie("jwt_token", "deleted", {secure: true, sameSite: "None", domain: ".arabhardware.com", maxAge: 0})
      //   // setCookie("jwt_token", "deleted", {secure: true, sameSite: "None", domain: ".arabhardware.net", maxAge: 0})
      //   setCookie("jwt_token", "deleted", {secure: true, sameSite: "None", domain: "arabhardware.com", maxAge: 0})
      //   axios.post('/api/logout', {})
      //   .then(res=>console.log('success'))
      //   .catch(e=>console.log('e', e))
      // }
      // const timer = setTimeout(()=>deleteCookies(), 4000)

      return ()=>{
        // clearTimeout(timer)
      }
    }, [])

    useEffect(()=>{
      if(isForgetPswFormShown){
        setForm({login_email:'', login_password:''})
      }else{
        setForgetForm({forget_email:''})
      }
    }, [isForgetPswFormShown])

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
        toast.error('البريد الالكتروني فارغ')
      }else{
        setIsLoading(true)
        
      await axios.post(`${ApiBase}/forget-password`, 
        {email},
      ).then(async data=> {
        if(data.data.success){
          toast.success(data.data.message)
        }else{
          toast.error(data.data.message)
        }
        setIsLoading(false)
      })
      }
    }

    const handleSubmitForm = (e) => {
      e.preventDefault();
    // if (!executeRecaptcha) {
    //   toast.error('Execute recaptcha not available yet')
    //   toast.error('likely meaning key not recaptcha key not set')
    //   return;
    // }
    // executeRecaptcha("userFormSubmit").then((gReCaptchaToken) => {
      // submitForm(gReCaptchaToken);
    // });
      submitForm();
    }
    const submitForm = async() => {
        const email = form.login_email, password = form.login_password
        if(email == '' || password == ''){
          toast.error('كل المعلومات مطلوبة')
        }else{
          console.log('start laoding')
          setIsLoading(true)

          // const recaptchaData = `secret=${recaptaSecretKey}&response=${gReCaptchaToken}`;
          // console.log('recaptchaData', recaptchaData)
          //   let res = await axios.post(
          //     `https://www.google.com/recaptcha/api/siteverify`,
          //     recaptchaData,
          //     {
          //       headers: {
          //         "Content-Type": "application/x-www-form-urlencoded",
          //       },
          //     }
          //   ).then(async res=>{
              
            // if (res && res.data?.success && res.data?.score > 0.5) {
            //   console.log("res.data?.score:", res.data?.score);

        // sending login request

        await axios.post('/api/login', 
          {email, password} //check if valid
        ).then(async res=>{
          console.log(res.data.message)
          if(res.data?.message) {
            toast.error(res.data.message)
            setIsLoading(false)
          }else{
            await axios.post(`${ApiBase}/login`, 
              {email, password,},
            ).then(async data=> {
                if(data.data.message){
                  console.log('data.data.message', data.data.message)
                  throw new Error(data.data.message)
                }else{
                  
        setCookie('jwt_token', token)
        setCookie('jwt_token', token, {secure: true, sameSite: "none", domain: "user-profile-lyart.vercel.app"})
        setCookie('jwt_token', token, {secure: true, sameSite: "none", domain: ".user-profile-lyart.vercel.app"})
        setCookie('jwt_token', token, {secure: true, sameSite: "none", domain: ".user-profile-lyart.vercel.app"})
        console.log('user profile', getCookie('jwt_token', {secure: true, sameSite: "none", domain: ".user-profile-lyart.vercel.app"}))
        setTimeout(()=>{
          location.href = `https://myaccount.arabhardware.com/login_callback?url_return=${returnUrl}&token=${data.data.authorisation.access_token}`
          localStorage?.setItem("jwt_token", data.data.authorisation.access_token)
          setToken(data.data.authorisation.access_token)
          toast.loading("جاري تسجيل الدخول")
            console.log('returning to url: ', returnUrl)
        }, 1000)
                  // setTimeout(() => {
                  //   location.href = returnUrl
                  //   setIsLoading(false)
                  // }, 7000);
                }
            })
            .catch(e=>{
              toast.error(e?.response?.data?.error||e?.response?.data?.message||e?.message||"حدث خطأ")
              setIsLoading(false)
            })
          }
        }).catch(e=>{
          console.error(e)
          setIsLoading(false)
        })
              // } else {
              //   console.log("fail: res.data?.score:", res.data?.score);
              //   alert('fail recaptcha: you are a robot')
              // }
            // }).catch(e=>{
            //   console.log("recaptcha error:", e);
            //   alert("recaptcha error:")
            // })
          
        }
    }
    
  const DontHaveAnAccount = ({}) => {
    return <p className='text-center'>
      {ar.login.subTitle1} <span className='text-primary cursor-pointer' onClick={toRegisterPage}>{ar.login.subTitle2}</span> {ar.login.subTitle3}
    </p>
  }

  return (<div className="w-full h-full bg-white rounded-l-lg px-14 py-8 space-y-8 relative mb-32">
    <ToasterComponent />
    {/* {mainDomains.map((endPoint, i)=>{
      return <iframe id={`iframe-main-${i}`} key={i}
      src={`${endPoint}?token=${token}`} 
      frameBorder="0" className='hidden' ></iframe>
      })} */}
    {/* {token && 
    <div className='flex justify-between items-center max-h-[50vh]'>
      {
      callBack.map((endPoint, i)=>{
      return <iframe id={`iframe-${i}`} key={i}
      src={`${endPoint}?token=${token}`} 
      frameBorder="0" className='hidden' ></iframe>
      })
      }
      {sessionId && <iframe id={`iframe-cart`}
      src={`${storeLoginDomain}&token=${token}&sessionId=${sessionId}`} 
      frameBorder="0" className='' ></iframe>}
    </div>} */}
{/* https://myaccount.arabhardware.com/login_callback?url_return=https://arabhardware.net?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwczovL2FyYWJoYXJkd2FyZS5jb20vYXV0aC9nb29nbGUvY2FsbGJhY2siLCJpYXQiOjE3MjExMjM3OTgsImV4cCI6MTcyMzcxNTc5OCwibmJmIjoxNzIxMTIzNzk4LCJqdGkiOiJ5RlRMek5MUWdUeTkxRm1iIiwic3ViIjoiMjg5NzkiLCJwcnYiOiI5MTBkZDhhZDBiNGY0NDgyMGZlZWM0NDgyMWYzZWFmZTA0ZjMzZTA1In0.Wf-uaSVE_lWw7AIH9Xo-kameHow3vgUx7-6WsfgO370 */}
    {token
    ?<div className='w-full flex items-center justify-center'>
      <p className='text-3xl text-primary font-bold mt-20'>تم تسجيل دخولك بالفعل</p>
    </div>
    :<>
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
        submitForm={handleSubmitForm}
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
    </>}
  </div>)
}