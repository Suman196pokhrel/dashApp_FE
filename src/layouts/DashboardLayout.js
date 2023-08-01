import React from "react";
import "../styles/dashboardLayout.scss"
import { Outlet } from "react-router-dom";
import Sidebar from "../components/sidebar/Sidebar";


const DashLayout = ({ children }) => {
  return (
    <div className="dashboardLayout">
      <Sidebar />

      <div className="children">
        {children}

      </div>
    </div>
  )
}



export default DashLayout;