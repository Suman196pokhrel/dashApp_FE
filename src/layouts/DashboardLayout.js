import React from "react";
import "../styles/dashboardLayout.scss"
import { Outlet } from "react-router-dom";
import Sidebar from "../components/sidebar/Sidebar";
import TopBar from "../components/topBar/TopBar";
import { useLocation } from 'react-router-dom'
import Oops from "../components/Opps/Opps"
import { useState } from "react";
import { Drawer } from "@mui/material";



const DashLayout = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false)
  let { pathname } = useLocation()
  const pathname1 = pathname.substring(pathname.indexOf('/'))
  pathname = pathname.substring(pathname.lastIndexOf('/') + 1)
  console.log(pathname)
  console.log(pathname1)


  const handleDrawer = () => {
    // console.log("Clicked")
    setIsDrawerOpen(!isDrawerOpen)
    // const sidebar = document.getElementById("sidebarOpen");
    // sidebar.style.display = sidebar.style.display === 'block' ? 'none' : 'block'
  }



  return (
    <div className="dashboardLayout"  >
      <Sidebar />

      <Drawer anchor="left" open={isDrawerOpen} onClose={handleDrawer}>
        <Sidebar />
      </Drawer>

      <div className="children">
        <TopBar handleDrawer={handleDrawer} />
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