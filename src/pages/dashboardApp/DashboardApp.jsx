import React from 'react'
import "./dashboardApp.scss"
import DashLayout from '../../layouts/DashboardLayout'

const DashboardApp = () => {
  return (

    <div className="dashboardApp">
      <div className="box box1">box1</div>
      <div className="box box2">box2</div>
      <div className="box box3 statCards">Stat 1</div>
      <div className="box box4 statCards">Stat 2</div>
      <div className="box box5 statCards">Stat 3</div>
      <div className="box box6 pieBox">box6</div>
      <div className="box box7 lineBox">box7</div>
      <div className="box box8 invoiceBox">box8</div>
      <div className="box box9 relatedAppBox">box9</div>
      <div className="box box10 installedCount">box10</div>
      <div className="box box11 authors">box11</div>
      <div className="box box12 conversions percentageCards">box12</div>
      <div className="box box13 applications percentageCards">box13</div>
    </div>

  )
}

export default DashboardApp