import React from 'react'
import "./statCard.scss"
import Growth from "../../assets/ic_grow"
import MiniBar from '../charts/miniBar/MiniBar'
import Decline from '../../assets/ic_decline'


const StatCard = ({ title, growth, changePercentage, totalValue, chartName, chartColor, chartData }) => {
    return (
        <div className='statCard'>

            <div className="cardLeft">
                <p className="cardTitle">Total {title}</p>
                <div className="stat">
                    {growth ? (<Growth sx={{ width: "20px", height: "20px" }} />) : (<Decline sx={{ width: "20px", height: "20px", color: "#FF4842" }} />)}
                    <p className="changePercentage">{growth ? ("+") : ("-")}{changePercentage}%</p>
                </div>
                <p className="totalValue">{totalValue}</p>
            </div>

            <div className="cardRight">
                <div className="miniChart">
                    <MiniBar chartName={chartName} color={chartColor} data={chartData} />
                </div>
            </div>
        </div>
    )
}

export default StatCard