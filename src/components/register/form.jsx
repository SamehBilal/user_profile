import {useState, useEffect} from 'react'
import Button from '../ui/button'
import FloatingInput from '../ui/floating_input'
import CheckboxInput from '../ui/checkboxInput'
import  parse from 'html-react-parser';
import { siGoogle, siFacebook, siTwitch, siDiscord } from 'simple-icons'
import { setCookie, getCookie } from 'cookies-next';
import Image from 'next/image'
import { en, ar } from '@/public/strings_manager';
import { ApiBase, SetOpenCart } from '@/config/api';
import { useRouter } from 'next/navigation';
import axios from 'axios';
import TextLogo from '@/public/images/logo_icon.png'
import OrBy from '../login/or_by';

function RegisterForm({toLoginPage}) {
  const router = useRouter()
    const [form, setForm] = useState({email:'', password:'', firstname: '', lastname: ''})
    const [isLoading, setIsLoading] = useState(false)

    const mediaIcons = [siGoogle, siFacebook, siTwitch, siDiscord]

    const handleChange = (e) => {
      setForm(prev=>({
        ...prev,
        [e.target.name]: e.target.value
      }))
    }
    const submitForm = async(e) => {
        e.preventDefault()
        const {email, password, firstname, lastname} = form
        if(email == '' || password == '' || firstname == '' || lastname == ''){
          alert('all information are required')
        }else{
          setIsLoading(true)
          
        await axios.post(`${ApiBase}/register`, 
          {email, password, firstname, lastname}
        ).then(async data=> {
          if(data.data.message){
            console.log('data.data.message', data.data.message)
            throw new Error(data.data.message)
          }else{
            // await axios.post(SetOpenCart, {
            //   "email": "569582528", "password": "12345678"
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
    
    const DontHaveAnAccount = ({}) => {
      return <p className='text-center'>
      {ar.register.subTitle1} <span className='text-primary cursor-pointer' onClick={toLoginPage}>{ar.register.subTitle2}</span>
      </p>
    }

    useEffect(()=>{
      if(getCookie("token") && getCookie("token").startsWith("Bearer:") &&
      getCookie("user") && JSON.parse(getCookie("user"))){
        console.log('user', JSON.parse(getCookie("user")))
        // console.log('token', getCookie("token"))
        router.push('/')
      }
    }, [])

  return (<div className="w-full h-full bg-white rounded-l-lg px-14 py-8 space-y-8 relative mb-28">
    <div className="space-y-4">
      <div className="w-full flex justify-center items-center">
        <Image src={TextLogo} alt='arabhardware' className='w-36' />
      </div>
      <div className="space-y-2">
        <h2 className='text-2xl text-center text-zinc-500'>{ar.login.title}</h2>
        <p className='text-center'>
        {ar.register.subTitle1} <span className='text-primary cursor-pointer' onClick={toLoginPage}>{ar.register.subTitle2}</span>
        </p>
      </div>
    </div>
    <div className="flex flex-col gap-4 items-center justify-center">
      <FloatingInput id="firstname" type="text" value={form.firstname} onChange={handleChange}
      placeholder={ar.register.firstName} required={true} label={ar.register.firstName} />
      <FloatingInput id="lastname" type="text" value={form.lastname} onChange={handleChange}
      placeholder={ar.register.lastName} required={true} label={ar.register.lastName} />
      <FloatingInput id="email" type="email" value={form.email} onChange={handleChange}
      placeholder={ar.register.email} required={true} label={ar.register.email} />
      <FloatingInput id="password" type="password" value={form.password} onChange={handleChange}
      placeholder={ar.register.password} required={true} label={ar.register.password} />
      <CheckboxInput id="agreeToTerms" value={form.agreeToTerms} onChange={handleChange}required={true} label={ar.register.terms}/>
      <Button text={ar.register.btn} className="" onClick={(e)=>submitForm(e)} isBig={true} disabled={isLoading} />
    </div>
    <OrBy text={ar.register.registerFrom} DontHaveAnAccount={DontHaveAnAccount} />
  </div>
  )
}

export default RegisterForm