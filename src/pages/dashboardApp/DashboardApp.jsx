import React from 'react'
import "./dashboardApp.scss"
import Banner from '../../components/banner/Banner'
import CarousalComp from '../../components/carousal/CarousalComp'
import StatCard from '../../components/statCard/StatCard'
import DoNut from '../../components/charts/donut/DoNut'
import LineCh from '../../components/charts/line/LineCh'
import Invoices from '../../components/invoices/Invoices'
import RelatedApplications from '../../components/relatedApplications/RelatedApplications'
import InstalledCountries from '../../components/installedCountries/InstalledCountries'
import TopAuthors from '../../components/topAuthors/TopAuthors'
import PercentageCards from '../../components/percentageCards/PercentageCards'
import { motion } from 'framer-motion'
import { smoothComeUp } from '../../utils/framerAnimations'

const appAnimate = {
  initial: { y: 70, opacity: 0 },
  animate: {
    y: 0,
    opacity: 1,
  },
  transition: {
    type: 'spring',
    duration: 1, // Change the duration value here (in seconds)
  },
};


const carousalItemsApp = [
  {
    id: 1,
    title: "Exploring the Hidden Gems of [Destination]",
    subText: "The old oak tree stood tall and majestic, its branches swaying gently in the breeze.",
    img: "/static/mockPhotos/carousal/cover_1.jpg"
  },
  {
    id: 2,
    title: "10 Essential Tips for Healthy Living",
    subText: "The sun slowly set over the horizon, painting the sky in vibrant hues of orange and pink.",
    img: "/static/mockPhotos/carousal/cover_2.jpg"
  },
  {
    id: 3,
    title: "The Ultimate Guide to Productivity Hacks",
    subText: "She eagerly opened the gift, her eyes sparkling with excitement.",
    img: "/static/mockPhotos/carousal/cover_3.jpg"
  }
]



const DashboardApp = () => {

  return (

    <motion.div className="dashboardApp" {...appAnimate}>

      <div className="box box1">
        <Banner
          title1={"Welcome back 👋"}
          title2={"Suman Pokhrel"}
          desc={"If you are going to use a passage of Lorem Ipsum, e going tyou need to be sure there isn't anything"}
          buttonText={"Go now"}
          imgBg={"/static/illustrations/illustrations_banner.svg"}
          img={"/static/illustrations/character_3.png"}
        />
      </div>

      <div className="box box2">
        <CarousalComp
          carousalItems={carousalItemsApp}
        />
      </div>

      <div className="box box3 statCards">
        <StatCard
          title={"Total Active Users"}
          growth={true}
          changePercentage={2.5}
          totalValue={"18,765"}
          chartName={"users"}
        />
      </div>

      <div className="box box4 statCards">
        <StatCard
          title={"Total Installed"}
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
          title={"Total Downloads"}
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

      <div className="box box7 lineBox">
        <LineCh />
      </div>

      <div className="box box8 invoiceBox">
        <Invoices />
      </div>

      <div className="box box9 relatedAppBox">
        <RelatedApplications />
      </div>

      <div className="box box10 installedCount">
        <InstalledCountries />
      </div>

      <div className="box box11 authors">
        <TopAuthors />
      </div>

      <div className="box box12 conversions percentageCards">
        <PercentageCards />
      </div>

      <div className="box box13 applications percentageCards">
        <PercentageCards
          data={[48]}
          text={55566}
          subText='Applications'
          icon='mail'
          bgColor='#006C9C'
          barColor='#1BC8E0'
          trackColor='#17749E'
        />
      </div>

    </motion.div>

  )
}

export default DashboardApp