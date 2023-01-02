import React from 'react'

export default function Button(props) {
    const {buttonText, type,classname} = props;
  return (
<button className={`input-button ${classname}`} type={type}>
            {buttonText}
          </button>  )
}
