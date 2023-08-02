import React from 'react'
import ReactApexChart from 'react-apexcharts';

const MiniBar = ({ chartName = "Users", color = '#00AB55', data = [30, 60, 40, 10, 100, 90, 20, 10, 40, 50] }) => {

    const chartData = {
        series: [
            {
                name: chartName,
                data: data,
            },
        ],
        options: {
            chart: {
                type: 'bar',
                height: 100,
                sparkline: {
                    enabled: true,
                },
                foreColor: '#00AB55',
                // toolbar: {
                //     show: false, // Hide the toolbar (includes the download and other buttons)
                // },
            },
            fill: {
                colors: [color],
            },

            plotOptions: {
                bar: {
                    horizontal: false, // Set to 'true' for horizontal bars
                    borderRadius: 2,
                    barHeight: 1,


                },
            }
            // },
            // xaxis: {
            //     categories: ['A', 'B', 'C', 'D', 'E', 'F', 'G'],
            //     labels: {
            //         show: false, // Hide X-axis labels
            //     },
            //     axisBorder: {
            //         show: false, // Hide X-axis line
            //     },
            // },
            // yaxis: {
            //     labels: {
            //         show: false, // Hide Y-axis labels
            //     },
            // },
            // grid: {
            //     show: false, // Hide grid lines
            // },
            // legend: {
            //     show: false, // Hide legends
            // },
        },
    };



    return (
        <ReactApexChart
            options={chartData.options}
            series={chartData.series}
            type="bar"

        />
    )
}

export default MiniBar