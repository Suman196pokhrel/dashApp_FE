import React from 'react'
import "./linech.scss";
import ReactApexChart from 'react-apexcharts';
import { Divider } from '@mui/material';

const LineCh = () => {

    const chartData = {
        series: [
            {
                name: 'Nepal',
                data: [30, 40, 35, 50, 49, 60, 70, 91, 125, 90,],
                color: '#FFB820',
            },
            {
                name: 'India',
                data: [12, 43, 28, 56, 78, 64, 43, 32, 76, 85],
                color: '#15B47A',
            },
        ],
        options: {
            chart: {
                type: 'line',
                toolbar: {
                    show: false, // Disable the chart toolbar
                },
            },
            xaxis: {
                categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct'],
            },
            yaxis: {
                title: {
                    text: 'Value',
                },
            },
            legend: {
                position: 'top', // Position the legend on top
                horizontalAlign: 'right', // Align the legend to the right
            },
            stroke: {
                curve: 'smooth',
                width: 3,
            },
            grid: {
                show: true,
                borderColor: '#e0e0e0', // Set the color of the grid lines
                strokeDashArray: 2, // Set the dash length (use higher values for more spaced dots/dashes)
                position: 'back', // Place the grid lines behind the data points
                xaxis: {
                    lines: {
                        show: true, // Show grid lines on the x-axis
                    },
                },
                yaxis: {
                    lines: {
                        show: true, // Show grid lines on the y-axis
                    },
                },
                row: {
                    colors: undefined, // Remove the row colors
                    opacity: 0.5, // Set the opacity of the grid lines
                },
                column: {
                    colors: undefined, // Remove the column colors
                    opacity: 0.5, // Set the opacity of the grid lines
                },
            },
            markers: {
                size: 3,
                colors: '#fff',
                strokeColors: ['#FFB820', '#15B47A'],
                strokeWidth: 2,
            },
            // dataLabels: {
            //     enabled: true, // Enable data labels for markers
            //     style: {
            //         fontSize: '12px',
            //         fontWeight: 'bold',
            //         colors: ['#FFB820', '#15B47A'], // Colors for data labels
            //     },
            // }
        },
    };


    return (
        <div className='lineCh' >
            <h2>Total installed</h2>
            <Divider sx={{ marginBottom: 2 }} />
            <ReactApexChart options={chartData.options} series={chartData.series} type="line" height={400} />

        </div >

    )
}

export default LineCh


