import React from 'react'
import Banner from '../../components/banner/Banner'
import Footer from '../../components/footer/Footer';
import Navbar from '../../components/navbar/Navbar'
import "./Layout.css";
import { useLocation } from "react-router-dom";

export default function Layout(props) {
  const { pathname } = useLocation();
  if (pathname == "/checkout") return <main>{props.children}</main>;
  else{
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


  
}
