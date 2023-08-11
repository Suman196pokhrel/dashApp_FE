import React from 'react'
import "../styles/authLayout.scss"
import { Link, Outlet, useLocation } from 'react-router-dom'
import { motion } from "framer-motion"
import { smoothComeUp, smoothComeDown, smoothFromRight } from '../utils/framerAnimations'
import Oops from "../components/Opps/Opps"



const AuthLayout = () => {
  let { pathname } = useLocation()
  const pathname1 = pathname.substring(pathname.indexOf('/'))
  pathname = pathname.substring(pathname.lastIndexOf('/') + 1)
  console.log(pathname)
  console.log(pathname1)

  const getPageTitle = (pathName) => {
    switch (pathName) {
      case 'login':
        return 'Hi, Welcome to DashApp';
      case 'register':
        return 'Manage Your Application using Advance Dashboards';
      case 'newPw':
        return 'Fast & Easy , Generate New Passwords';
      case 'forgotPw':
        return 'No worries, all you need is your email or phone number';
      default:
        return '404 Not Found - The page you are looking for does not exist.';
    }
  }



  return (

    <div className='authLayout' style={{ justifyContent: pathname1 === '/auth' ? 'center' : 'space-between' }}>

      {pathname1 === '/auth' ? (
        <>
          <Oops />
        </>
      ) : (
        <>

          <div className="leftContainer">
            <div className="appLogo">
              <img src="/favicon/android-chrome-192x192.png" alt="App Icon" />
            </div>
            <motion.h1 {...smoothComeDown}>{getPageTitle(pathname)}</motion.h1>
            <motion.img src={`/static/illustrations/illustration_${pathname}.png`} alt="Login Illustrations" {...smoothComeUp} />
          </div >

          <div className="rightContainer">
            {pathname === "login" || pathname === 'register' ? (
              <motion.div className="topInfo">
                {pathname === "login" ? (<p>Don't have an account ? <span><Link to={"/auth/register"}>Get started</Link></span></p>) : (<p>Already have an account ? <span><Link to={"/auth/login"}>Login</Link></span></p>)}
              </motion.div>
            ) : (<></>)}

            <Outlet />

          </div>

        </>
      )}



    </div >

  )
}

export default AuthLayout