import React from 'react'
import './FormControl.css'

export function FormControl({
  placeholder,
  label,
  type,
  onChange,
  autoComplete,
  name,
  id,
  required,
  value,
  labelColor,
  style,
}) {
  return (
    <div style={style} className='form-control'>
      {label && <label style={{ color: labelColor }}>{label}</label>}
      <input
        type={type}
        onChange={onChange}
        autoComplete={autoComplete}
        name={name}
        id={id}
        required={required}
        placeholder={placeholder}
        value={value}
      />
    </div>
  )
}
