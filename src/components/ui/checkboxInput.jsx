import React from 'react'

function CheckboxInput({
  id= "", className = "", label = "", required = false, value = "",  onChange = ()=>{}, multiple = false
}) {
  return (<div className="flex items-center">
    <input id={id} required={required} onChange={onChange} type="checkbox" value={value}
    className="w-4 h-4 text-primary bg-gray-100 border-gray-300 rounded focus:ring-primary focus:ring-2 accent-primary"/>
    <label htmlFor={id} className="ms-2 text-sm text-gray-900 dark:text-gray-300 font-light">
      {label}
    </label>
</div>)
}

export default CheckboxInput