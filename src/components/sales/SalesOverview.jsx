import React, { useState } from 'react'
import "./sales.scss"
import Divider from '@mui/material/Divider'
import { styled } from '@mui/material/styles';
import LinearProgress, { linearProgressClasses } from '@mui/material/LinearProgress';


const data = [
    {
        id: 1,
        title: "Total Profit",
        amount: 8374,
        percent: 10.1,
        line: {
            bgColor: "#C8FACD",
            fgColor: "#00AB55"
        }
    },
    {
        id: 2,
        title: "Total Income",
        amount: 9714,
        percent: 13.6,
        line: {
            bgColor: "#D0F2FF",
            fgColor: "#1890FF"
        }
    },
    {
        id: 3,
        title: "Total Expenses",
        amount: 6871,
        percent: 28.2,
        line: {
            bgColor: "#FFF7CD",
            fgColor: "#FFC107"
        }
    }
]
const BorderLinearProgress = styled(LinearProgress)(({ theme, fgColor, bgColor }) => ({
    // height: 10,
    borderRadius: 5,
    backgroundColor: bgColor,
    [`& .${linearProgressClasses.barColorPrimary}`]: {
        backgroundColor: fgColor, // Change this to the desired background color of the progress bar
    },
}));


const SalesOverview = () => {


    return (
        <div className='sales'>
            <h1>Sales Overview</h1>
            <Divider sx={{ my: 2 }} />
            <div className="items">

                {data.map(({ title, amount, percent, id, line }) => (
                    <div className="item" key={id}>
                        <div className="topTexts">
                            <p>{title}</p>
                            <p>$ {amount.toLocaleString('en-US')} <span>{`(`}{percent}%{`)`}</span></p>
                        </div>
                        <div className="bottomProgress">
                            <BorderLinearProgress variant="determinate" value={percent} fgColor={line.fgColor} bgColor={line.bgColor} />
                            {/* sx={{ backgroundColor: `${line.bgColor}` }} */}
                        </div>
                    </div>
                ))}




            </div>
        </div>
    )
}

export default SalesOverview