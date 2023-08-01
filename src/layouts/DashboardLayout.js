import React from "react";
import "../styles/dashboardLayout.scss"
import { Outlet } from "react-router-dom";
import Sidebar from "../components/sidebar/Sidebar";


const DashLayout = () => {
  return (
    <div className="dashboardLayout">
      <Sidebar />

      <div className="children">
        <Outlet />

      </div>
    </div>
  )
}



export default DashLayout;