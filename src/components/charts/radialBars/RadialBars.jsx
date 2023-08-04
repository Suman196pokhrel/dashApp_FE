import React from 'react'
import "./radialBars.scss"
import ReactApexChart from 'react-apexcharts';
import { Divider } from '@mui/material';



const RadialBars = () => {

    const series = [1342, 1576]
    const totalSum = series.reduce((acc, val) => acc + val, 0);
    const normalizedSeries = series.map((value) => (value / totalSum) * 100);

    const chartOptions = {
        chart: {
            type: 'radialBar',
            // height: 350,
            toolbar: {
                show: false
            }
        },
        plotOptions: {
            radialBar: {
                dataLabels: {
                    show: true,
                    name: {
                        fontSize: '16px',
                        color: '#637381',
                    },
                    value: {
                        fontSize: '32px',
                        color: "#212B36",
                        offsetY: 20,
                        formatter: function (val) {

                            return Number.parseFloat(val).toFixed(2) + '%';
                        },
                    },
                    total: {
                        show: true,
                        label: 'Total',
                        formatter: function (w) {
                            // Calculate the total sum of all data points

                            return totalSum;
                        },

                    }
                }
            }
        },
        labels: ['Mens', 'Womens'],
        stroke: {
            curve: 'smooth',
            width: 1,
            lineCap: 'round',
        },
        legend: {
            show: true,
            position: "bottom"
        },

        colors: ['#FFAD04', '#03A971'],
    };



    return (
        <div className='radialBars'>
            <h1 style={{ fontSize: "26px", margin: "15px 0px 10px 30px" }}>Sales By Gender</h1>
            <Divider />
            <ReactApexChart
                options={chartOptions}
                series={normalizedSeries}
                type="radialBar"
                height={415}
            />
        </div>
    )
}

export default RadialBars