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

            },
            fill: {
                colors: [color],
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

            plotOptions: {
                bar: {
                    horizontal: false,
                    borderRadius: 2,
                    barHeight: 1,


                },
            }
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