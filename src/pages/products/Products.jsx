import React from 'react'
import { Breadcrumbs } from '@mui/material'
import AddIcon from '@mui/icons-material/Add';
import "./products.scss"
import DataGridComp from '../../components/dataGrid/DataGridComp';
import { Progress } from 'antd';
import { Badge, } from 'antd';
import { motion } from "framer-motion"
import { smoothComeDown, smoothComeUp } from "../../utils/framerAnimations"





const prodColumns = [
  {
    field: "product",
    headerName: "Product",
    width: 340, // This will make the column expand to fill remaining space
    renderCell: (params) => (
      <div style={{ padding: "10px", display: "flex", alignItems: "center", gap: "15px" }}>
        <img src={params.value.img} alt={params.value.title} width="64" height="64" style={{ borderRadius: "8px" }} />
        <div className="prodTitle">
          <div className="title" style={{ fontSize: "14px", fontWeight: "600" }}>{params.value.title}</div>
          <div className="type" style={{ fontSize: "12px", fontWeight: "400", color: "#919EAB" }}>{params.value.type}</div>
        </div>
      </div>
    )
  },
  {
    field: "created_at",
    headerName: "Created at",
    width: 200, // This will make the column expand to fill remaining space
    renderCell: (params) => (
      <div style={{ padding: "10px", display: "flex", flexDirection: "column", alignItems: "center", gap: "5px" }}>
        <span className="date">{params.value.date}</span>
        <span className="time" style={{ fontSize: "12px", fontWeight: "400", color: "#919EAB" }}>{params.value.time}</span>
      </div>
    )

  },
  {
    field: "stock",
    headerName: "Stock",
    width: 200, // This will make the column expand to fill remaining space
    renderCell: (params) => (
      <div style={{ padding: "10px", width: "100%", display: "flex", flexDirection: "column" }}>
        {params.value > 40 ?
          <Progress
            percent={params.value}
            showInfo={false}
            strokeColor="#22C55E"
            trailColor="#22C55E3D"

          /> :
          <Progress
            percent={params.value}
            showInfo={false}
            strokeColor="#FFAB00"
            trailColor="#FFAB003D"

          />
        }

        <span style={{ fontSize: "12px", fontWeight: "400", color: "#919EAB" }}>{params.value > 40 ? `${params.value} in stock` : `${params.value} low in stock`}</span>
      </div>
    )
  },
  {
    field: "price",
    headerName: "Price",
    flex: 1, // This will make the column expand to fill remaining space
    renderCell: (params) => (
      <p>
        ${params.value}
      </p>
    )
  },
  {
    field: "status",
    headerName: "Status",
    width: 250, // This will make the column expand to fill remaining space
    renderCell: (params) => (<>
      {
        params.value === 'Published' ?
          <Badge
            count={params.value}
            style={{
              color: '#006C9C',
              backgroundColor: "#00B8D929",
              fontWeight: 700
            }}
          /> :
          <Badge
            count={params.value}
            style={{
              color: '#637381',
              backgroundColor: "#919EAB29",
              fontWeight: 700
            }}
          />
      }
    </>

    )
  },
];


const prodRows = [
  {
    id: 1, product: {
      img: "/static/mockPhotos/products/product_10.jpg",
      title: "Cotu Classic Sneaker",
      type: "shoes"
    },
    created_at:
    {
      date: "01 Aug 2023",
      time: "2:55 AM"
    }, stock: 62, price: "93.68", status: "Published"
  },
  {
    id: 2, product: {
      img: "/static/mockPhotos/products/product_11.jpg",
      title: "Cotu Classic Sneaker",
      type: "shoes"
    }, created_at:
    {
      date: "01 Aug 2023",
      time: "2:55 AM"
    }, stock: 32, price: "93.68", status: "Published"
  },
  {
    id: 3, product: {
      img: "/static/mockPhotos/products/product_12.jpg",
      title: "Cotu Classic Sneaker",
      type: "shoes"
    }, created_at:
    {
      date: "01 Aug 2023",
      time: "2:55 AM"
    }, stock: 42, price: "93.68", status: "Draft"
  },
  {
    id: 4, product: {
      img: "/static/mockPhotos/products/product_13.jpg",
      title: "Cotu Classic Sneaker",
      type: "shoes"
    }, created_at:
    {
      date: "01 Aug 2023",
      time: "2:55 AM"
    }, stock: 12, price: "93.68", status: "Published"
  },


]



const Products = () => {
  return (
    <div className="products">

      <motion.div {...smoothComeDown} className="header">
        <div className="left">
          <h1>Products List</h1>
          <Breadcrumbs >
            <p>DashApp</p>
            <p>dashboard</p>
            <p>products</p>
          </Breadcrumbs>
        </div>

        <div className="right">
          <button>
            <AddIcon />
            <p>New Product</p>
          </button>
        </div>
      </motion.div>

      <motion.div {...smoothComeUp} className="prodTable">
        <DataGridComp columns={prodColumns} rows={prodRows} />
      </motion.div>

    </div>
  )
}

export default Products