import {useState} from 'react'
import DropdownMenuItems from './dropdown'
import { countries } from '@/utils/countries'

function PhoneInput({
    id= "", className = "", label = "", placeholder = "", required = false, value = "", 
    isSuccess=false, isError=false, autoComplete = 'off webauthn', autoFocus = false, onChange = ()=>{},
    selectedIndex=51, setSelectedIndex=51
}) {
    return (<div className="mt-2 w-full relative border border-solid border-zinc-300 hover:bg-zinc-200 transition focus-within:border-black focus-within:ring ring-black">
          <input 
          type='text'
          id={id}
          name={id}
          value={value}
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
          <div className="absolute left-0 h-full top-1/2 -translate-y-1/2 flex items-center justify-center">
            <DropdownMenuItems items={countries} theItems={countries.map(item=>item.alpha2.toUpperCase())}
            selectedIndex={selectedIndex} setSelectedIndex={setSelectedIndex} selectedValue={countries[selectedIndex].code} />
          </div>
      </div>)
}

export default PhoneInput