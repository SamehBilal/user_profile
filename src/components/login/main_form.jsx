import React from 'react'
import Button from '../ui/button'
import FloatingInput from '../ui/floating_input'
import { Eye, EyeOff } from 'lucide-react';

function MainForm({
    setIsForgetPswFormShown, isForgetPswFormShown, setIsPasswordShown, isPasswordShown, 
    form, submitForm, handleChange, isLoading, ar}) {

  return (<form className={`w-full flex-col gap-4 items-center justify-center 
    ${isForgetPswFormShown? 'hidden ': 'flex animate-fade'}` }
    onSubmit={(e)=>submitForm}>

      <FloatingInput id="login_email" type="email" value={form.login_email} onChange={handleChange} autoFocus={true}
      placeholder={ar.login.email} required={true} label={ar.login.email} autoComplete='off webauthn' />
      <FloatingInput id="login_password" type="password" value={form.login_password} onChange={handleChange}
      placeholder={ar.login.password} required={true} label={ar.login.password} 
      Icon={isPasswordShown? Eye: EyeOff} setIsPasswordShown={setIsPasswordShown} isPasswordShown={isPasswordShown} autoComplete='off webauthn' />

      <p className="text-primary cursor-pointer self-start mb-1" 
      onClick={()=>{isLoading? ()=>{}:setIsForgetPswFormShown(prev=>!prev)}}>
        {ar.login.forget}
      </p>

      <Button text={ar.login.btn} type='submit' className="" onClick={(e)=>submitForm(e)} isBig={true} disabled={isLoading} />
    </form>)
}

export default MainForm