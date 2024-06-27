import React from 'react'
import Slider from './slider'
import RegisterForm from './form'

function RegisterPage({toLoginPage, setActiveSlide, activeInfo, backgrounds }) {
  return (
    <div className='w-full lg:h-full min-w-fit rounded-lg ring-1 ring-black/5 grid lg:grid-cols-2 lg:grid-rows-1 grid-rows-2 grid-cols-1 text-black'>
      <Slider backgrounds={backgrounds} setActiveSlide={setActiveSlide} activeInfo={activeInfo} />
      <RegisterForm toLoginPage={toLoginPage} />
    </div>
  )
}

export default RegisterPage