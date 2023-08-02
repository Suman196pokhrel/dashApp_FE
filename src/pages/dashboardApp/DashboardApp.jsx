import React from 'react'
import "./dashboardApp.scss"
import Banner from '../../components/banner/Banner'
import CarousalComp from '../../components/carousal/CarousalComp'
import StatCard from '../../components/statCard/StatCard'
import DoNut from '../../components/charts/donut/DoNut'
// import DashLayout from '../../layouts/DashboardLayout'

const DashboardApp = () => {
  return (

    <div className="dashboardApp">

      <div className="box box1">
        <Banner
          title={"Suman Pokhrel"}
          desc={"If you are going to use a passage of Lorem Ipsum, e going tyou need to be sure there isn't anything"}
          buttonText={"Go now"}
        />
      </div>

      <div className="box box2">
        <CarousalComp />
      </div>

      <div className="box box3 statCards">
        <StatCard
          title={"Active Users"}
          growth={true}
          changePercentage={2.5}
          totalValue={"18,765"}
          chartName={"users"}
        // chartColor={}
        // chartData={}
        />
      </div>

      <div className="box box4 statCards">
        <StatCard
          title={"Installed"}
          growth={true}
          changePercentage={5.5}
          totalValue={"4,876"}
          chartName={"installed"}
          chartColor={"#2D99FF"}
          chartData={[10, 20, 30, 40, 5, 10, 70, 80, 20, 50]}
        />
      </div>

      <div className="box box5 statCards">
        <StatCard
          title={"Downloads"}
          growth={false}
          changePercentage={1.25}
          totalValue={"678"}
          chartName={"downloads"}
          chartColor={"#FF6C40"}
          chartData={[70, 60, 90, 40, 20, 10, 40, 10, 10, 5]}
        />
      </div>

      <div className="box box6 pieBox">
        <DoNut
        // type=''
        // labels={}
        // colors={}
        />
      </div>

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