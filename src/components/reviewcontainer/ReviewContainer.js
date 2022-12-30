import React from 'react';
import "./ReviewContainer.css"
export default function ReviewContainer(props) {
  return (
    <div className='review-container'>
     <img className='mx-auto d-block mb-4' src={props.src}/>
     <div className='review-sub-container text-center'>
    <span className='mb-3 d-block'>{props.ratings}</span> 
    <p className='mb-2'> {props.reviews}</p>
  <p className='font-weight-bold'>  {props.description}</p> 
  </div>
    </div>
  )
}
