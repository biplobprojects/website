import React from 'react'
import { Outlet } from 'react-router-dom'

export default function Collection() {
  return (
    <div>Collection
        <Outlet/>
    </div>
  )
}
