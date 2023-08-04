import React from 'react'
import "./ecommerce.scss"
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
import RadialBars from '../../components/charts/radialBars/RadialBars'


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


const carousalItemsEcom = [
  {
    id: 1,
    title: "Arizona Soft Footwalk Sandal",
    img: "/static/mockPhotos/products/product_1.jpg"
  },
  {
    id: 2,
    title: "Nike Air Zoom",
    img: "/static/mockPhotos/products/product_2.jpg"
  },
  {
    id: 3,
    title: "Boston Soft Footbed Sandal",
    img: "/static/mockPhotos/products/product_3.jpg"
  },
  {
    id: 4,
    title: "Nike AirForce 1",
    img: "/static/mockPhotos/products/product_4.jpg"
  },
  {
    id: 5,
    title: "Nike Air Zoom Pegasus37",
    img: "/static/mockPhotos/products/product_5.jpg"
  }
]





const Ecommerce = () => {

  return (

    <motion.div className="ecommerce" {...appAnimate}>

      <div className="box box1">
        <Banner
          title1={"Congratulations!"}
          title2={"Suman Pokhrel"}
          desc={"Best seller of the month You have done 57.6% more sales today."}
          buttonText={"Go now"}
          img={"/static/illustrations/illustration_newPw.svg"}
        />
      </div>

      <div className="box box2">
        <CarousalComp carousalItems={carousalItemsEcom} />
      </div>

      <div className="box box3 statCards">
        <StatCard
          title={"Product Sold"}
          growth={true}
          changePercentage={2.5}
          totalValue={"18,765"}
          chartName={"users"}

        />
      </div>

      <div className="box box4 statCards">
        <StatCard
          title={"Total Balance"}
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
          title={"Sales Profit"}
          growth={false}
          changePercentage={1.25}
          totalValue={"678"}
          chartName={"downloads"}
          chartColor={"#FF6C40"}
          chartData={[70, 60, 90, 40, 20, 10, 40, 10, 10, 5]}
        />
      </div>

      <div className="box box6 pieBox">
        <RadialBars />
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

export default Ecommerce