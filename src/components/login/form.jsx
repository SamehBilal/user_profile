import {useState} from 'react'
import Button from '../ui/button'
import FloatingInput from '../ui/floating_input'

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
      <h2 className='text-2xl'>Login</h2>
      <p className=''>
        Don`t have an account? <span className='text-primary cursor-pointer' onClick={toRegisterPage}>Create your account</span> it takes less than one minutes
      </p>
    </div>
    <div className="flex flex-col gap-4 items-start justify-center">
      <FloatingInput id="email" type="email" value={form.email} onChange={handleChange}
      placeholder="Email" required={true} label="Email" />
      <FloatingInput id="password" type="password" value={form.password} onChange={handleChange}
      placeholder="Password" required={true} label="Password" />
      <Button text={"Login"} className=" self-end" onClick={(e)=>submitForm(e)} isBig={true} disabled={isLoading} />
    </div>
  </div>
  )
}

export default LoginForm