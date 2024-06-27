import {useState} from 'react'

function FloatingInput({
    id= "", className = "", type = "text", label = "", placeholder = "", required = false, value = "", 
    disabled = false, onChange = ()=>{}, multiple = false
}) {
    const isPassword = type === "password"
    // console.log('isPassword', isPassword)
    const [hashPass, setHashPass] = useState(isPassword)
    return (
      <div className="mb-5 relative flex group group-focus-within:border-primary border-black border-b-2 text-lg gap-2 w-full">
          <label 
          htmlFor={id} 
          className={`group min-w-32`}>
              {label}
          </label>
          <input 
          type={isPassword? (hashPass? 'password': 'text'): type} 
          multiple={multiple}
          id={id}
          name={id}
          value={value}
          disabled={disabled}
          onChange={onChange}
          className={`group placeholder:text-transparent block pb-2 px-0 w-full font-light text-gray-900 bg-transparent appearance-none focus:outline-none focus:ring-0 focus:border-primary peer
            ${className}`}
          placeholder={placeholder}
          required={required} />
      </div>)
}

export default FloatingInput