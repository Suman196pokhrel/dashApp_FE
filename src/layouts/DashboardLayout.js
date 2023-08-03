import React from "react";
import "../styles/dashboardLayout.scss"
import { Outlet } from "react-router-dom";
import Sidebar from "../components/sidebar/Sidebar";
import TopBar from "../components/topBar/TopBar";
import { motion } from 'framer-motion'
import { smoothComeUp } from "../utils/framerAnimations";

const DashLayout = () => {
  return (
    <div className="dashboardLayout"  >
      <Sidebar />

      <div className="children">
        <TopBar />
        <div className="dashApps" >
          <Outlet />
        </div>


      </div>
    </div>
  )
}



export default DashLayout;