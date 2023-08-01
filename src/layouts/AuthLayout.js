import React from 'react'
import "../styles/authLayout.scss"
import { Link, useLocation } from 'react-router-dom'



const AuthLayout = ({ children }) => {
  let { pathname } = useLocation()
  pathname = pathname.substring(pathname.lastIndexOf('/') + 1)

  return (
    <div className='authLayout'>

      <div className="leftContainer">
        <div className="appLogo">
          <img src="/favicon/android-chrome-192x192.png" alt="App Icon" />
        </div>
        <h1>{pathname === "login" ? "Hi, Welcome to DashApp" : "Manage Your Application using Advance Dashboards"}</h1>
        <img src={`/static/illustrations/illustration_${pathname}.png`} alt="Login Illustrations" />
      </div>

      <div className="rightContainer">
        <div className="topInfo">
          {pathname === "login" ? (<p>Don't have an account ? <span><Link to={"/auth/register"}>Get started</Link></span></p>) : (<p>Already have an account ? <span><Link to={"/auth/login"}>Login</Link></span></p>)}
        </div>
        {children}
      </div>


    </div>
  )
}

export default AuthLayout