import React from "react";
import "../styles/dashboardLayout.scss"
import { Outlet } from "react-router-dom";
import Sidebar from "../components/sidebar/Sidebar";
import TopBar from "../components/topBar/TopBar";
import { Link, useLocation } from 'react-router-dom'
import { motion } from "framer-motion"
import { smoothComeUp, smoothComeDown, smoothFromRight } from '../utils/framerAnimations'
import Oops from "../components/Opps/Opps"

const DashLayout = () => {

  let { pathname } = useLocation()
  const pathname1 = pathname.substring(pathname.indexOf('/'))
  pathname = pathname.substring(pathname.lastIndexOf('/') + 1)
  console.log(pathname)
  console.log(pathname1)





  return (
    <div className="dashboardLayout"  >
      <Sidebar />

      <div className="children">
        <TopBar />
        <div className="dashApps" >
          {pathname1 === '/dashboard' ? (
            <Oops />
          ) : (
            <Outlet />
          )}

        </div>


      </div>
    </div>
  )
}



export default DashLayout;