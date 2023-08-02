import React, { useState } from 'react';
import "./doNut.scss";
import ReactApexChart from 'react-apexcharts';
import { Divider } from '@mui/material';



const DoNut = ({ colors = ['#FF5630', '#00A76F', '#FFAB00', '#00B8D9'], labels = ['Apple', 'Orange', 'Banana', 'Mango'], type = 'donut' }) => {
    const [hoveredValue, setHoveredValue] = useState(false)
    const mockDoDate = [42412, 51225, 12323, 31233]
    const sumArr = mockDoDate.reduce((acc, num) => acc + num, 0);



    const chartData = {
        series: mockDoDate,
        options: {
            chart: {
                type: type,
                events: {
                    dataPointMouseEnter: (event, chartContext, config) => {
                        const { seriesIndex, dataPointIndex, w } = config;
                        const value = w.globals.series[dataPointIndex]
                        const labels = chartContext.opts.labels;
                        const label = labels[dataPointIndex];
                        const color = chartContext.opts.colors[dataPointIndex]

                        // console.log({ label, value, color })
                        setHoveredValue({ label, value, color })
                    },
                    dataPointMouseLeave: (event, chartContext, config) => {
                        setHoveredValue(false)
                    }
                }
            },
            plotOptions: {
                pie: {
                    donut: {
                        size: '90%', // Set the thickness of the donut chart (in percentage)
                    },
                },

            },
            labels: labels,
            colors: colors,
            legend: {
                position: 'bottom',
                horizontalAlign: 'center',
                offsetY: 8
            },
            responsive: [
                {
                    breakpoint: 480,
                    options: {
                        chart: {
                            width: '100%',
                        },
                        legend: {
                            position: 'bottom',
                        },
                    },
                },
            ],
            dataLabels: {
                enabled: false
            }
        },
    };



    return (
        <div className="donutChart">
            <div className="chartHeader">
                <p>Current Download</p>

            </div>
            <Divider sx={{ marginBottom: 4 }} />

            <div className="doChart">
                <ReactApexChart
                    options={chartData.options}
                    series={chartData.series}
                    type="donut"
                    height={400}
                />
                <div className="hoveredValue">
                    <div className="hoverTitle" style={{ color: hoveredValue.color ? hoveredValue.color : '' }}>{hoveredValue.label ? `${hoveredValue.label}` : "Total"}</div>
                    {hoveredValue.value ? (<p className=''>{hoveredValue.value.toLocaleString('en-US')}</p>) : (<p className=''>{sumArr.toLocaleString('en-US')}</p>)}

                </div>
            </div>

        </div>
    )
}

export default DoNut