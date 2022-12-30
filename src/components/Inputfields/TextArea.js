import React from 'react'
import './InputField.css'

export default function TextArea(props) {
  return (
<div className="input-container mb-4">
                <label className={props.value && 'filled'} htmlFor={props.htmlFor}>
                  {props.label}
                </label>
                <textarea
                  name={props.htmlFor}
                  id={props.id}
                  value={props.value}
                  onChange={props.onChange}
                />
              </div>  )
}
