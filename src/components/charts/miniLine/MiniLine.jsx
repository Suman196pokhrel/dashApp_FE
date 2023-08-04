import React from 'react'
import ReactApexChart from 'react-apexcharts';

const MiniLine = ({ lineColor = "#00AB55" }) => {
    const chartData = Array.from({ length: 10 }, () => Math.floor(Math.random() * 50) + 10);

    const chartOptions = {
        chart: {
            id: 'sparkline-chart',
            animations: {
                enabled: true,
            },
            sparkline: {
                enabled: true,
            },
        },
        stroke: {
            curve: 'smooth',
            width: 3, // Use whole numbers for line width
            // dashArray: 2, 
            lineCap: 'rounded',
            colors: [lineColor],
        },

        fill: {

            opacity: 1,
            type: 'solid',

        },
        markers: {
            size: 0,
        },
        tooltip: {
            custom: function ({ series, seriesIndex, dataPointIndex, w }) {
                // Customize the tooltip content here
                return (
                    `<div
                        style={{
                            height: "40px",
                            width: "40px",
                            fontSize: 20,
                            padding:30
                        }}
                    >` + series[seriesIndex][dataPointIndex] + `</div>`

                );
            },
        },
        xaxis: {
            type: 'numeric',
            labels: {
                show: false,
            },
        },
        yaxis: {
            show: false,
        },
        grid: {
            show: false,
        },
    };

    const series = [
        {
            data: chartData,
        },
    ];


    return (
        <ReactApexChart options={chartOptions} series={series} type="line" height={70} width={110} />
    )
}

export default MiniLine