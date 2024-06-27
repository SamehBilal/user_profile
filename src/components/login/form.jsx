import {useState} from 'react'
import Button from '../ui/button'
import FloatingInput from '../ui/floating_input'
import { en, ar } from '@/public/strings_manager'

function LoginForm({toRegisterPage}) {
    const [form, setForm] = useState({email:'', password:''})
    const [isLoading, setIsLoading] = useState(false)

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
      <h2 className='text-2xl'>{ar.login.title}</h2>
      <p className=''>
      {ar.login.subTitle1} <span className='text-primary cursor-pointer' onClick={toRegisterPage}>{ar.login.subTitle2}</span> {ar.login.subTitle3}
      </p>
    </div>
    <form className="flex flex-col gap-4 items-start justify-center" onSubmit={(e)=>submitForm}>
      <FloatingInput id="email" type="email" value={form.email} onChange={handleChange}
      placeholder={ar.login.email} required={true} label={ar.login.email} />
      <FloatingInput id="password" type="password" value={form.password} onChange={handleChange}
      placeholder={ar.login.password} required={true} label={ar.login.password} />
      <Button text={ar.login.btn} type='submit' className=" self-end" onClick={(e)=>submitForm(e)} isBig={true} disabled={isLoading} />
    </form>
  </div>
  )
}

export default LoginForm