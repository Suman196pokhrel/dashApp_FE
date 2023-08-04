import React from 'react'
import "./statCard.scss"
import Growth from "../../assets/ic_grow"
import MiniBar from '../charts/miniBar/MiniBar'
import Decline from '../../assets/ic_decline'
import { useLocation } from 'react-router-dom'
import MiniLine from '../charts/miniLine/MiniLine'


const StatCard = ({ title, growth, changePercentage, totalValue, chartName, chartColor, chartData }) => {
    let { pathname } = useLocation()
    pathname = pathname.substring(pathname.lastIndexOf('/') + 1)
    return (
        <div className='statCard'>

            <div className="cardLeft">
                <p className="cardTitle">{title}</p>

                {pathname === 'app' ? (
                    <>
                        <div className="stat">
                            {growth ? (<Growth sx={{ width: "20px", height: "20px" }} />) : (<Decline sx={{ width: "20px", height: "20px", color: "#FF4842" }} />)}
                            <p className="changePercentage">{growth ? ("+") : ("-")}{changePercentage}%</p>
                        </div>
                        <p className="totalValue">{totalValue}</p>
                    </>
                ) : (
                    <>
                        <p className="totalValue">{totalValue}</p>

                        <div className="stat">
                            {growth ? (<Growth sx={{ width: "20px", height: "20px" }} />) : (<Decline sx={{ width: "20px", height: "20px", color: "#FF4842" }} />)}
                            <p className="changePercentage">{growth ? ("+") : ("-")}{changePercentage}%</p>
                        </div>

                    </>
                )}

            </div>

            <div className="cardRight">
                <div className="miniChart">
                    {pathname === 'app' ? (
                        <MiniBar chartName={chartName} color={chartColor} data={chartData} />
                    ) : (
                        <MiniLine lineColor={chartColor} />
                    )}
                </div>
            </div>
        </div>
    )
}

export default StatCard