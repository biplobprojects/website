import React from 'react'

export default function Button(props) {
    const {buttonText, type,classname,onClick} = props;
  return (
<button className={`input-button ${classname}`} type={type} onClick={onClick}>
            {buttonText}
          </button>  )
}
