import React from 'react'
import './Title.css'
export default function Title(props) {
  return (
    <h2 className={`${props.class} title`}>{props.heading}</h2>
  )
}
