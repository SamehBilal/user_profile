import React from 'react'
import Button from '../ui/button'
import FloatingInput from '../ui/floating_input'
import { Eye, EyeOff } from 'lucide-react';

function ForgetForm({
    setIsForgetPswFormShown, isForgetPswFormShown,
    form, submitForm, handleChange, isLoading, ar}) {
  return (<form className={`w-full flex-col gap-4 items-center justify-center transition-all 
    ${isForgetPswFormShown? 'flex animate-fade ': 'hidden'}` }
    onSubmit={(e)=>submitForm}>
        <p className="text-zinc-500 cursor-pointer self-start mb-1">
        {ar.login.lost}
        </p>

      <FloatingInput id="forget_email" type="email" value={form.forget_email} onChange={handleChange} autoFocus={true}
      placeholder={ar.login.email} required={true} label={ar.login.email} autoComplete='off webauthn' />

      <p className="text-primary cursor-pointer self-start mb-1" 
      onClick={()=>{isLoading? ()=>{}:setIsForgetPswFormShown(prev=>!prev)}}
      >
        {ar.login.back}
      </p>

      <Button text={ar.login.forgetBtn} type='submit' className="" onClick={(e)=>submitForm(e)} isBig={true} disabled={isLoading} />
    </form>)
}

export default ForgetForm