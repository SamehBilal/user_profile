import {useState} from 'react'

function FloatingInput({
    id= "", className = "", type = "text", label = "", placeholder = "", required = false, value = "", 
    disabled = false, onChange = ()=>{}, multiple = false
}) {
    const isPassword = type === "password"
    // console.log('isPassword', isPassword)
    const [hashPass, setHashPass] = useState(isPassword)
    return (
        
      <div className="mt-2 w-full relative">
          <input 
          type={isPassword? (hashPass? 'password': 'text'): type} 
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
      </div>)
}

export default FloatingInput