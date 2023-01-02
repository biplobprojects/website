import React from 'react';
import { Outlet } from 'react-router-dom';
export default function Collection() {
  return (
    <div className='collections-container'>
        <Outlet/>
    </div>
  )
}
