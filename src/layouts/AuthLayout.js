import React from 'react'
import { Outlet } from 'react-router-dom'

const AuthLayout = () => {
  return (
    <div>
        Auth Layout
        <Outlet />
        
    </div>
  )
}

export default AuthLayout