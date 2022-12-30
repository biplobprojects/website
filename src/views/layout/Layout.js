import React from 'react'
import Banner from '../../components/banner/Banner'
import Footer from '../../components/footer/Footer';
import Navbar from '../../components/navbar/Navbar'
import "./Layout.css";
export default function Layout(props) {
  return (
<>
<Navbar/>
<div className='wrapper-container'>
    <main>{props.children}</main>
</div>
<Footer/>
</>
  )
}
