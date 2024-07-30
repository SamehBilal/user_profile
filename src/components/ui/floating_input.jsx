import {useState} from 'react'

function FloatingInput({
    id= "", className = "", type = "text", label = "", placeholder = "", required = false, value = "", 
    isSuccess=false, isError=false, autoComplete = 'off webauthn', autoFocus = false,
    disabled = false, onChange = ()=>{}, multiple = false, Icon=null, setIsPasswordShown, isPasswordShown
}) {
    const isPassword = type === "password"

    return (<div className="mt-2 w-full relative border border-solid border-zinc-300 hover:bg-zinc-200 transition focus-within:border-black focus-within:ring ring-black">
          <input 
          type={isPassword? (isPasswordShown? 'text': 'password'): type} 
          multiple={multiple}
          id={id}
          name={id}
          value={value}
          disabled={disabled}
          onChange={onChange}
          autoFocus={autoFocus}
          autoComplete={autoComplete}
          className={`block pt-5 pb-1 px-4 w-full text-sm text-zinc-900 bg-transparent appearance-none focus:outline-none focus:ring-0 peer placeholder:text-transparent 
            ${isSuccess?'ring ring-green-700': ''}
            ${isError?'ring ring-red-700': ''}
            ${className}`}
          placeholder={placeholder}
          required={required} />
          <label 
          htmlFor={id} 
          className={`absolute text-sm text-zinc-700 duration-300 transform -translate-y-3 -translate-x-4 top-3 origin-[0] start-0 peer-focus:text-black peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:-translate-y-3`}>
              {label}
          </label>
          {Icon && <div className="absolute left-4 top-1/2 -translate-y-1/2 flex items-center justify-center p-2" onClick={()=>setIsPasswordShown((prev)=>!prev)}>
            <Icon className={`size-6 transition  ${value==''?'text-zinc-700':'text-zinc-900'}`} />
          </div>
          }
      </div>)
}

export default FloatingInput