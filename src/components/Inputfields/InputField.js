import React from 'react'
import "./InputField.css"
export default function InputField(props) {
  return (
 
<div className="input-container">
                <label className={props.value && 'filled'} htmlFor={props.htmlFor}>
                  {props.label}
                </label>
                <input
                  type={props.type}
                  autoComplete="off"
                  name={props.htmlFor}
                  id={props.id}
                  value={props.value}
                  onChange={props.onChange}
                  onBlur={props.Blur}
                />
              </div>
         
               )
}
