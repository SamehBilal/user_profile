import {useState} from 'react'
import Button from '../ui/button'
import FloatingInput from '../ui/floating_input'
import CheckboxInput from '../ui/checkboxInput'
import  parse from 'html-react-parser';
import { siGoogle, siFacebook, siInstagram, siTwitch, siDiscord } from 'simple-icons'
import Image from 'next/image'

function RegisterForm({toLoginPage}) {
    const [form, setForm] = useState({email:'', password:''})
    const [isLoading, setIsLoading] = useState(false)

    const mediaIcons = [siFacebook, siGoogle, siInstagram, siTwitch, siDiscord]

    const handleChange = (e) => {
      setForm(prev=>({
        ...prev,
        [e.target.name]: e.target.value
      }))
    }
    const submitForm = async(e) => {
        e.preventDefault()
    }

  return (<div className="w-full h-full bg-white rounded-r-lg px-14 py-8 space-y-8">
    <div className="space-y-4">
      <h2 className='text-2xl'>Register</h2>
      <p className=''>
        Already have an account? <span className='text-primary cursor-pointer' onClick={toLoginPage}>Login to your account</span>
      </p>
    </div>
    <div className="flex flex-col gap-4 items-start justify-center">
      <FloatingInput id="firstName" type="text" value={form.firstName} onChange={handleChange}
      placeholder="First Name" required={true} label="First Name" />
      <FloatingInput id="lastName" type="text" value={form.lastName} onChange={handleChange}
      placeholder="Last Name" required={true} label="Last Name" />
      <FloatingInput id="email" type="email" value={form.email} onChange={handleChange}
      placeholder="Email" required={true} label="Email" />
      <FloatingInput id="password" type="password" value={form.password} onChange={handleChange}
      placeholder="Password" required={true} label="Password" />
      <CheckboxInput id="agreeToTerms" value={form.agreeToTerms} onChange={handleChange}required={true} label="I Accept terms and conditions"/>
      <Button text={"Register"} className=" self-end" onClick={(e)=>submitForm(e)} isBig={true} disabled={isLoading} />
    </div>
    <div className="space-y-4">
      <p className="">Register with your accout on</p>
      <div className="flex w-full justify-between items-center">
        {mediaIcons.map((_, i)=>{
          return <div key={i} className="w-8 h-8 bg-primaryLight rounded-lg p-2 text-white cursor-pointer hover:bg-lightGray hover:text-primary transition-all duration-500 hover:scale-110">
        {parse(_.svg)}
        </div>
        })}
      </div>
    </div>
  </div>
  )
}

export default RegisterForm