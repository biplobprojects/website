import React from 'react'

export default function Button(props) {
    const {buttonText, type} = props;
  return (
<button className="input-button" type={type}>
            {buttonText}
          </button>  )
}
