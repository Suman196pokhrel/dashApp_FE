import React from "react";
import "../styles/dashboardLayout.scss"
import { Outlet } from "react-router-dom";


const DashLayout = ({ children }) => {
  return (
    <div className="dashboardLayout">
      <div className="sidebar">
        Sidebar
      </div>

      <div className="children">
        {children}

      </div>
    </div>
  )
}



export default DashLayout;