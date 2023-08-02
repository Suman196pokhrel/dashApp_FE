import React from "react";
import "../styles/dashboardLayout.scss"
import { Outlet } from "react-router-dom";
import Sidebar from "../components/sidebar/Sidebar";
import TopBar from "../components/topBar/TopBar";


const DashLayout = () => {
  return (
    <div className="dashboardLayout">
      <Sidebar />

      <div className="children">
        <TopBar />
        <Outlet />

      </div>
    </div>
  )
}



export default DashLayout;