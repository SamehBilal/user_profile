import React from 'react'

function CheckboxInput({
  id= "", className = "", label = "", required = false, value = "",  onChange = ()=>{}, multiple = false
}) {
  return (<div className="flex items-center self-start">
    <input id={id} required={required} onChange={onChange} type="checkbox" checked={value}
    className="w-4 h-4 text-primary bg-zinc-100 border-zinc-300 rounded focus:ring-primary focus:ring-2 accent-primary"/>
    <label htmlFor={id} className="ms-2 text-sm text-zinc-900 font-light tracking-wider">
      {label}
    </label>
</div>)
}

export default CheckboxInput