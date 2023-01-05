import React, { useState } from 'react'
import ProductDetails from "../../components/ProductDetails/ProductDetails"
export default function AccaciaHoney() {
  const images=[
    {id:0,value:"https://wallpaperaccess.com/full/2637581.jpg"},
    {id:1,value:"https://source.unsplash.com/user/c_v_r/1900x800"},
    {id:2,value:"https://source.unsplash.com/user/c_v_r/100x100"},
  ]
  const [img, setImg] = useState([images])
  return (
    <div><ProductDetails imgs={img}/></div>
  )
}
