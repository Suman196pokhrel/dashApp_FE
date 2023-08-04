import React from 'react';
import "./percentageCard.scss"
import ReactApexChart from 'react-apexcharts';
import PersonIcon from '@mui/icons-material/Person';
import LocalPostOfficeIcon from '@mui/icons-material/LocalPostOffice';


const PercentageCards = ({ data = [75], text = 38566, subText = "Conversions", bgColor = "#007867", barColor = "#5BE49B", trackColor = "#177E71", icon = "person" }) => {


    const options = {
        chart: {
            // height: 350,
            type: 'radialBar',
            toolbar: {
                show: false
            }
        },
        plotOptions: {
            radialBar: {
                // startAngle: -135,
                // endAngle: 225,
                hollow: {
                    margin: 0,
                    size: '75%',
                    background: bgColor,
                    position: 'back',
                    dropShadow: {
                        enabled: false,

                    }
                },
                track: {
                    background: trackColor,
                    strokeWidth: '67%',
                    margin: 0,
                    dropShadow: {
                        enabled: false,
                        top: -3,
                        left: 0,
                        blur: 4,
                        opacity: 0.35
                    }
                },
                dataLabels: {
                    show: true,
                    name: {
                        offsetY: -10,
                        show: false,
                        color: '#ffffff',
                        fontSize: '17px'
                    },
                    value: {
                        formatter: function (val) {
                            return `${parseInt(val)} %`;
                        },
                        color: '#FFF',
                        fontSize: '16px',
                        fontWeight: 600,
                        show: true,
                        offsetY: 10

                    }
                }
            }
        },
        fill: {

            colors: [barColor],
            opacity: 0.9,
            type: 'gradient',
            gradient: {
                shade: 'dark',
                type: "horizontal",
                shadeIntensity: 0.3,
                // gradientToColors: undefined,
                inverseColors: true,
                opacityFrom: 1,
                opacityTo: 1,
                stops: [0, 50, 80, 100],
                colorStops: []
            }

        },
        stroke: {
            lineCap: 'round'

        },
        labels: ['Percent'],
    };



    return (
        <div className='percentageCard' style={{ backgroundColor: bgColor }}>
            <div className="chart">
                <ReactApexChart
                    options={options}
                    series={data}
                    type="radialBar"
                    height={125}
                />
            </div>

            <div className="info">
                <h1>{text.toLocaleString('en-US')}</h1>
                <p>{subText}</p>
                {icon === 'person' ? (
                    <PersonIcon sx={{ opacity: 0.07, fontSize: "180px", position: "absolute", top: -55, right: -300 }} />
                ) : (
                    <LocalPostOfficeIcon sx={{ opacity: 0.07, fontSize: "180px", position: "absolute", top: -55, right: -300 }} />
                )}
            </div>
        </div >
    )
}

export default PercentageCards;


