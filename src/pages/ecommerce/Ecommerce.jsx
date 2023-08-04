import React from 'react'
import "./ecommerce.scss"
import Banner from '../../components/banner/Banner'
import CarousalComp from '../../components/carousal/CarousalComp'
import StatCard from '../../components/statCard/StatCard'
import LineCh from '../../components/charts/line/LineCh'
import Invoices from '../../components/invoices/Invoices'
import { motion } from 'framer-motion'
import RadialBars from '../../components/charts/radialBars/RadialBars'
import SalesOverview from '../../components/sales/SalesOverview'
import { Link, useLocation } from 'react-router-dom'
import CurrentBalance from '../../components/currBalance/CurrentBalance'
import LatestProd from '../../components/latestProd/LatestProd'




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
    img: "/auth/login/static/mockPhotos/products/product_1.jpg",
    amount: 83.74


  },
  {
    id: 2,
    title: "Nike Air Zoom",
    img: "/auth/login/static/mockPhotos/products/product_2.jpg",
    amount: 97.14
  },
  {
    id: 3,
    title: "Boston Soft Footbed Sandal",
    img: "/auth/login/static/mockPhotos/products/product_3.jpg",
    amount: 68.7
  },
  {
    id: 4,
    title: "Nike AirForce 1",
    img: "/auth/login/static/mockPhotos/products/product_4.jpg",
    amount: 52.74
  },
  {
    id: 5,
    title: "Nike Air Zoom Pegasus37",
    img: "/auth/login/static/mockPhotos/products/product_5.jpg",
    amount: 96.21
  }
]

const headers = [
  'Seller',
  'Product',
  'country',
  'Total',
  'Rank'
]

const rows = [
  {
    id: 1,
    seller: {
      img: "/auth/login/static/mockPhotos/avatars/avatar_12.jpg",
      name: "Jayvion Simon"
    },
    product: "CAP",
    countryImg: "/auth/login/static/icons/ic_flag_de.svg",
    total: "83",
    rank: 'Top 1'
  },
  {
    id: 2,
    seller: {
      img: "/auth/login/static/mockPhotos/avatars/avatar_13.jpg",
      name: "Lucian Obrien"
    },
    product: "Branded Shoes",
    countryImg: "/auth/login/static/icons/ic_flag_en.svg",
    total: "97.14",
    rank: 'Top 2'
  },
  {
    id: 1,
    seller: {
      img: "/auth/login/static/mockPhotos/avatars/avatar_14.jpg",
      name: "Deja Brady"
    },
    product: "Headphone",
    countryImg: "/auth/login/static/icons/ic_flag_fr.svg",
    total: "68.71",
    rank: 'Top 3'
  },
  {
    id: 1,
    seller: {
      img: "/auth/login/static/mockPhotos/avatars/avatar_15.jpg",
      name: "Harrison Stein"
    },
    product: "Cell Phone",
    countryImg: "/auth/login/static/icons/ic_flag_kr.svg",
    total: "85.21",
    rank: 'Top 4'
  },
  {
    id: 1,
    seller: {
      img: "/auth/login/static/mockPhotos/avatars/avatar_16.jpg",
      name: "Reece Chung"
    },
    product: "Earings",
    countryImg: "/auth/login/static/icons/ic_flag_us.svg",
    total: "52.17",
    rank: 'Top 5'
  },

]




const Ecommerce = () => {
  let { pathname } = useLocation()
  pathname = pathname.substring(pathname.lastIndexOf('/') + 1)

  return (

    <motion.div className="ecommerce" {...appAnimate}>

      <div className="box box1">
        <Banner
          title1={"Congratulations!"}
          title2={"Suman Pokhrel"}
          desc={"Best seller of the month You have done 57.6% more sales today."}
          buttonText={"Go now"}
          img={"/auth/login/static/illustrations/illustration_newPw.svg"}
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
        <LineCh type="area" title={"Yearly Sales"} labels={["Total Income", "Total Expenses"]} />
      </div>

      <div className="box box8 sales">
        <SalesOverview />
      </div>

      <div className="box box9 currBalanceBox">
        <CurrentBalance />
      </div>

      <div className="box box10 bestSalesman" style={{ height: pathname === 'ecommerce' ? '520px' : '' }}>
        <Invoices
          title="Best Salesman"
          tableHeaders={headers}
          tableRows={rows}

        />
      </div>

      <div className="box box11 latProducts">
        <LatestProd data={carousalItemsEcom} />
      </div>


    </motion.div>

  )
}

export default Ecommerce