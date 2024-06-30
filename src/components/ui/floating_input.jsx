import {useState} from 'react'

function FloatingInput({
    id= "", className = "", type = "text", label = "", placeholder = "", required = false, value = "", 
    disabled = false, onChange = ()=>{}, multiple = false, Icon=null, setIsPasswordShown, isPasswordShown
}) {
    const isPassword = type === "password"

    return (<div className="mt-2 w-full relative">
          <input 
          type={isPassword? (isPasswordShown? 'text': 'password'): type} 
          multiple={multiple}
          id={id}
          name={id}
          value={value}
          disabled={disabled}
          onChange={onChange}
          className={`block py-2.5 px-0 w-full text-sm text-zinc-900 bg-transparent border-0 border-b-2 border-zinc-300 appearance-none focus:outline-none focus:ring-0 focus:border-primary peer placeholder:text-transparent
            ${className}`}
          placeholder={placeholder}
          required={required} />
          <label 
          htmlFor={id} 
          className={`absolute text-sm text-zinc-500 duration-300 transform -translate-y-6 top-3 origin-[0] start-0 peer-focus:text-primary peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:-translate-y-6`}>
              {label}
          </label>
          {Icon && <div className="absolute left-4 top-0 flex items-center justify-center p-2" onClick={()=>setIsPasswordShown((prev)=>!prev)}>
            <Icon className={`size-6 transition  ${value==''?'text-zinc-500':'text-zinc-900'}`} />
          </div>
          }
      </div>)
}

export default FloatingInput