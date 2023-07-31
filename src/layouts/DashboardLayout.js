import React from "react";
import { Outlet } from "react-router-dom";


const DashLayout = ()=>{
    return (
      <div className="app">
          <Outlet />
      </div>
    )
  }



export default DashLayout;