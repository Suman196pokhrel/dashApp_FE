import React from 'react'
import "./radialBars.scss"
import ReactApexChart from 'react-apexcharts';
import { Divider } from '@mui/material';



const RadialBars = () => {

    const series = [2142, 2976]
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
        fille: {
            type: 'gradient',
            gradient: {
                colorStops: [
                    [
                        {
                            offset: 0,
                            color: "#FFE16A"
                        },
                        {
                            offset: 100,
                            color: "#B78103"
                        }
                    ],
                    [
                        {
                            offset: 0,
                            color: "#5BE584"
                        },
                        {
                            offset: 100,
                            color: "#007B55"
                        }
                    ]
                ]
            }
        },
        plotOptions: {
            radialBar: {

                hollow: {
                    show: true,
                    size: '75%',
                    // background: '#f2f2f2'
                    // strokeWidth: '47%',
                },
                track: {
                    show: true,
                    strokeWidth: '47%',
                },


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

                            return totalSum.toLocaleString('en-US');
                        },

                    }
                },
            },
        },
        labels: ['Mens', 'Womens'],
        stroke: {
            lineCap: 'round',
            width: 1,
            // dashArray: 2,
        },
        legend: {
            show: true,
            position: "bottom"

        },
        tooltip: {
            enabled: false
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
                height={405}
            />
        </div>
    )
}

export default RadialBars