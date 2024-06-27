import React from 'react'
import Slider from './slider'
import LoginForm from './form'

function LoginPage({toRegisterPage, setActiveSlide, activeInfo, backgrounds }) {
  
  return (
    <div className='w-full lg:h-full min-w-fit rounded-lg ring-1 ring-black/5 grid lg:grid-cols-2 lg:grid-rows-1 grid-rows-2 grid-cols-1 text-black'>
      <Slider backgrounds={backgrounds} setActiveSlide={setActiveSlide} activeInfo={activeInfo} />
      <LoginForm toRegisterPage={toRegisterPage} />
    </div>
  )
}

export default LoginPage