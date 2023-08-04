import React from 'react';
import "./installedCountries.scss"
import AndroidIcon from '@mui/icons-material/Android';
import WindowIcon from '@mui/icons-material/Window';
import AppleIcon from '@mui/icons-material/Apple';
import { Divider } from '@mui/material';

const topCountries = [
    {
        id: 1,
        img: "/auth/login/static/icons/ic_flag_de.svg",
        title: "Denmark",
        platformValues: {
            android: "9.9",
            windows: "9.2",
            apple: "1.9"
        }

    },
    {
        id: 2,
        img: "/auth/login/static/icons/ic_flag_en.svg",
        title: "England",
        platformValues: {
            android: "1.9",
            windows: "9.1",
            apple: "9.1"
        }
    },
    {
        id: 3,
        img: "/auth/login/static/icons/ic_flag_fr.svg",
        title: "France",
        platformValues: {
            android: "9.12",
            windows: "6.98",
            apple: "6.98"
        }
    },
    {
        id: 4,
        img: "/auth/login/static/icons/ic_flag_kr.svg",
        title: "Korea",
        platformValues: {
            android: "6.8",
            windows: "8.49",
            apple: "8.49"
        }
    },
    {
        id: 5,
        img: "/auth/login/static/icons/ic_flag_us.svg",
        title: "USA",
        platformValues: {
            android: "8.4",
            windows: "2.03",
            apple: "2.03"
        }
    }
]


const InstalledCountries = () => {
    return (
        <div className='installedCountries'>
            <div className="countriesHeader">Top Installed Countries</div>
            <Divider sx={{ marginBottom: 3 }} />
            <div className="items">
                {topCountries.map((item) => (
                    <div className="item" key={item.id}>

                        <div className="flag">
                            <img src={item.img} alt={item.title} />
                            <p>{item.title}</p>
                        </div>

                        <div className="right">
                            <div className="android iconValue">
                                <AndroidIcon sx={{ color: "#919EAB", fontSize: "14px" }} />
                                {item.platformValues.android}k
                            </div>
                            <div className="windows iconValue">
                                <WindowIcon sx={{ color: "#919EAB", fontSize: "14px" }} />
                                {item.platformValues.windows}k
                            </div>
                            <div className="apple iconValue">
                                <AppleIcon sx={{ color: "#919EAB", fontSize: "14px" }} />
                                {item.platformValues.apple}k
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default InstalledCountries