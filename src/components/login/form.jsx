import {useEffect, useState, useRef} from 'react'
import { en, ar } from '@/public/strings_manager'
import { ApiBase, storeLoginDomain, callBack } from '@/config/api';
import { useRouter } from 'next/navigation';
import axios from 'axios';
import { deleteCookie, setCookie } from 'cookies-next';
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
  const tokenString = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwczovL2FyYWJoYXJkd2FyZS5jb20vYXBpL3YxL2xvZ2luIiwiaWF0IjoxNzE5ODM3NDIwLCJleHAiOjE3MTk4NDEwMjAsIm5iZiI6MTcxOTgzNzQyMCwianRpIjoiNEI3UjVNVlBSaUZTN0NJZyIsInN1YiI6IjI4NzQ2IiwicHJ2IjoiOTEwZGQ4YWQwYjRmNDQ4MjBmZWVjNDQ4MjFmM2VhZmUwNGYzM2UwNSJ9.duQcIJZ929slGAxhhSYQmoYWL1ivC3S9YTGUEbHv_Rg"
    const [form, setForm] = useState({login_email:'', login_password:''})
    const [forgetForm, setForgetForm] = useState({forget_email:''})
    const [isLoading, setIsLoading] = useState(false)
    const [token, setToken] = useState(null)
    const [isPasswordShown, setIsPasswordShown] = useState(false)
    const [isForgetPswFormShown, setIsForgetPswFormShown] = useState(false)
    
    // const recaptaSecretKey = process?.env?.RECAPTCHA_SECRET_KEY;
    const recaptaSecretKey = "6Ld1uQsqAAAAAMxfabq4tdWDCGYbEZD0ZDdusTP3";
    // console.log('recaptaSecretKey', recaptaSecretKey)

    const { executeRecaptcha } = useGoogleReCaptcha();

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
          toast.error(data.data.message)
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
                  location.href = `https://myaccount.arabhardware.com/login_callback?url_return=${returnUrl}&token=${data.data.authorisation.access_token}`
                  cookieDommains.forEach(item=>{
                    setCookie(
                      item.title, 
                      data.data.authorisation.access_token, 
                      {secure: true, sameSite: "None", domain: item.domain})
                    })
                  setToken(data.data.authorisation.access_token)
                  toast.loading("جاري تسجيل الدخول")
                    console.log('returning to url: ', returnUrl)
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
    
    {token && 
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
    </div>}
{/* https://myaccount.arabhardware.com/login_callback?url_return=https://arabhardware.net?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwczovL2FyYWJoYXJkd2FyZS5jb20vYXV0aC9nb29nbGUvY2FsbGJhY2siLCJpYXQiOjE3MjExMjM3OTgsImV4cCI6MTcyMzcxNTc5OCwibmJmIjoxNzIxMTIzNzk4LCJqdGkiOiJ5RlRMek5MUWdUeTkxRm1iIiwic3ViIjoiMjg5NzkiLCJwcnYiOiI5MTBkZDhhZDBiNGY0NDgyMGZlZWM0NDgyMWYzZWFmZTA0ZjMzZTA1In0.Wf-uaSVE_lWw7AIH9Xo-kameHow3vgUx7-6WsfgO370 */}
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
  </div>)
}