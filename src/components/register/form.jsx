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
import Dropdown from '../ui/dropdown';
import { countries } from '../../utils/countries';
import PhoneInput from '../ui/phone_input';

function RegisterForm({toLoginPage, returnUrl, sessionId}) {
  const router = useRouter()
  const tokenString = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwczovL2FyYWJoYXJkd2FyZS5jb20vYXBpL3YxL2xvZ2luIiwiaWF0IjoxNzE5ODM3NDIwLCJleHAiOjE3MTk4NDEwMjAsIm5iZiI6MTcxOTgzNzQyMCwianRpIjoiNEI3UjVNVlBSaUZTN0NJZyIsInN1YiI6IjI4NzQ2IiwicHJ2IjoiOTEwZGQ4YWQwYjRmNDQ4MjBmZWVjNDQ4MjFmM2VhZmUwNGYzM2UwNSJ9.duQcIJZ929slGAxhhSYQmoYWL1ivC3S9YTGUEbHv_Rg"
    const [form, setForm] = useState({email:'', password:'', firstname: '', lastname: '', agreeToTerms: false, phone: '', country: ''})
    const [isLoading, setIsLoading] = useState(false)
    const [token, setToken] = useState(null)
    const [isPasswordShown, setIsPasswordShown] = useState(false)
    const [selectedIndex, setSelectedIndex] = useState(51);

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
        const {email, password, firstname, lastname, agreeToTerms, phone, country} = form
        if(email == '' || password == '' || firstname == '' || lastname == '' || phone == '' || !agreeToTerms){
          toast.error('كل المعلومات مطلوبة')
          setIsLoading(false)
        }else{
          setIsLoading(true)
          
          await axios.post('/api/register', 
            {email, phone, password, firstname, lastname, country} //check if valid
          ).then(async res=>{
            // console.log('res0', res.data)
            if(res.data?.message) {
              toast.error(res.data.message)
              setIsLoading(false)
            }
            else{
              // console.log('res1', res.data)
              await axios.post(`${ApiBase}/register`, 
                {email, phone, password, firstname, lastname, country} //add user to db
              ).then(async data=> {
                // console.log('res3', res.data)
                if(data.data.message){
                  console.log('data.data.message', data.data.message)
                  throw new Error(data.data.message)
                  setIsLoading(false)
                }else{
                  // console.log('res4', res.data)
                  location.href = `https://myaccount.arabhardware.com/login_callback?url_return=${returnUrl}&token=${data.data.authorisation.access_token}`
                  localStorage?.setItem("jwt_token", data.data.authorisation.access_token)  
                  cookieDommains.forEach(item=>{
                      setCookie(
                        item.title, 
                        data.data.authorisation.access_token, 
                        {secure: true, sameSite: "None", domain: item.domain})
                    })
                    setToken(data.data.authorisation.access_token)
                    toast.loading('جاري تسجيل دخولك')
                      setIsLoading(false)
                }
              })
              .catch(e=>{
                setIsLoading(false)
                console.log('res5', res.data)
                console.log('error', e?.response?.data?.error)
                console.log('message', e?.response?.data?.message)
                console.log('e.message', e?.message)
                toast.error(e?.response?.data?.error||e?.response?.data?.message||e?.message||"حدث خطأ")
              })
            }
          }).catch(e=>{
            console.error(e)
            setIsLoading(false)
          })

        // setIsLoading(false)
        }
    }
    
    const DontHaveAnAccount = ({}) => {
      return <p className='text-center'>
      {ar.register.subTitle1} <span className='text-primary cursor-pointer' onClick={toLoginPage}>{ar.register.subTitle2}</span>
      </p>
    }

    useEffect(()=>{
      setForm(prev=>({
        ...prev,
        country: countries[selectedIndex??51].alpha2
      }))
    }, [selectedIndex])

  return (<div className="w-full h-full bg-white lg:rounded-l-lg rounded-b-lg lg:px-14 px-4 py-8 space-y-8 relative mb-32">
    <ToasterComponent />
    
    {token &&
    <div className='flex justify-between items-center max-h-[50vh]'> {/* iframes */}
      {callBack.map((endPoint, i)=>{
      return <iframe key={i} 
      src={`${endPoint}?token=${token}`} 
      // src='https://arabhardware.com/auth/arabhardware/callback?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwczovL2FyYWJoYXJkd2FyZS5jb20vYXBpL3YxL2xvZ2luIiwiaWF0IjoxNzE5OTA5NjQxLCJleHAiOjE3MTk5MTMyNDEsIm5iZiI6MTcxOTkwOTY0MSwianRpIjoiOHgyTGYyWDE4a0FNUm94SiIsInN1YiI6IjkzOSIsInBydiI6IjkxMGRkOGFkMGI0ZjQ0ODIwZmVlYzQ0ODIxZjNlYWZlMDRmMzNlMDUifQ.-lRHIWGTXWpuA2edz2Dul4NrhHxY1XZPuL6dVi5mYMM'
      frameBorder="0" className='hidden' ></iframe>
      })}
      <iframe id={`iframe-cart-register`}
      src={`${storeLoginDomain}&token=${token}&session_id=${sessionId}`} 
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
        placeholder={ar.register.firstName} required={true} label={ar.register.firstName} autoFocus={true} />
        <FloatingInput id="lastname" type="text" value={form.lastname} onChange={handleChange} autoComplete='off webauthn'
        placeholder={ar.register.lastName} required={true} label={ar.register.lastName} />
      </div>
      <FloatingInput id="email" type="email" value={form.email} onChange={handleChange} autoComplete='off webauthn'
      placeholder={ar.register.email} required={true} label={ar.register.email} />
      <PhoneInput id="phone" value={form.phone} onChange={handleChange} autoComplete='off webauthn'
      placeholder={ar.register.phone} required={true} label={ar.register.phone}
      selectedIndex={selectedIndex} setSelectedIndex={setSelectedIndex} />
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