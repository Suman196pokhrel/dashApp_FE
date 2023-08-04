import React from 'react'
import "./latestProd.scss"
import { Divider } from '@mui/material'

const LatestProd = ({ data }) => {
    return (
        <div className='latestProd'>
            <h2>Latest Products</h2>
            <Divider sx={{ my: 1 }} />

            <div className="items">
                {data.map((item) => (
                    <div className="item" key={item.id}>
                        <img src={item.img} alt={item.title} />
                        <div className="textInfo">
                            <p>{item.title}</p>
                            <span>${item.amount}</span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default LatestProd