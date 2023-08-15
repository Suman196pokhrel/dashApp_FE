import React from 'react'
import { Breadcrumbs } from '@mui/material'
import AddIcon from '@mui/icons-material/Add';
import "./products.scss"

const Products = () => {
  return (
    <div className="products">

      <div className="header">
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
      </div>

      <div className="prodTable">

      </div>

    </div>
  )
}

export default Products