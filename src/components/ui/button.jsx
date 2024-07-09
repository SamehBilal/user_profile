import React from 'react'
import { LoaderCircle } from 'lucide-react'

function Button({type="button", className="", text="", isBig = true, withIcon = true, Icon = null, disabled = false, onClick=()=>{} }) {
  return (
    <button
    type={type} 
    onClick={onClick}
    disabled={disabled}
    className={`text-white bg-zinc-500 ring-2 hover:animate-pulse hover:bg-primary ring-zinc-300 rounded-lg focus:outline-none text-sm px-8 py-2.5 max-3xl:p-1 text-center rounded-djm font-bold flex items-center justify-center gap-2
    ${isBig? " w-full": " w-fit px-2"} 
    ${className}`}
    >
    {!disabled && <span>{text}</span>}
    {!disabled && Icon && <Icon />}
    {disabled &&
    <LoaderCircle className='animate-spin' />
    }</button>
  )
}

export default Button