import React from 'react'
import "./relatedApplications.scss"
import AppleIcon from '@mui/icons-material/Apple';
import WindowIcon from '@mui/icons-material/Window';
import Rating from '@mui/material/Rating';
import { Divider } from 'antd';



const applications = [
    {
        id: 1,
        img: "/static/icons/ic_chrome.svg",
        title: "Chrom",
        platform: {
            icon: "apple",
            title: "Mac",
            amount: "Free"
        },
        ratings: "4",
        reviews: "9.9"
    },
    {
        id: 2,
        img: "/static/icons/ic_drive.svg",
        title: "Drive",
        platform: {
            icon: "apple",
            title: "Mac",
            amount: "Free"
        },
        ratings: "3",
        reviews: "1.9"
    },
    {
        id: 3,
        img: "/static/icons/ic_dropbox.svg",
        title: "Dropbox",
        platform: {
            icon: "windows",
            title: "Windows",
            amount: "$68.71"
        },
        ratings: "4",
        reviews: "9.12"
    },
    {
        id: 4,
        img: "/static/icons/ic_evernote.svg",
        title: "Evernote",
        platform: {
            icon: "apple",
            title: "Mac",
            amount: "Free"
        },
        ratings: "2",
        reviews: "6.8"
    },
    {
        id: 5,
        img: "/static/icons/ic_github.svg",
        title: "Github",
        platform: {
            icon: "windows",
            title: "Windows",
            amount: "$52.17"
        },
        ratings: "4",
        reviews: "8.49"
    }
]



const RelatedApplications = () => {
    return (
        <div className='relatedApps'>
            <div className="title">Top Related Applications</div>
            <Divider />
            <div className="items">
                {applications.map((item) => (
                    <div key={item.id} className="item">
                        <div className="left">
                            <div className="leftLeft">
                                <img src={item.img} alt="item icons" />
                            </div>

                            <div className="leftRight">
                                <div className="top">{item.title}</div>
                                <div className="bottom">
                                    {item.platform.icon === 'apple' ? (
                                        <AppleIcon fontSize='small' />
                                    ) : (<WindowIcon fontSize='small' />)}
                                    <p>{item.platform.title}</p>
                                    <p>{item.platform.amount}</p>
                                </div>
                            </div>
                        </div>
                        <div className="right">
                            <div className="ratings">
                                <Rating name="read-only" value={item.ratings} readOnly />
                            </div>
                            <div className="reviews">{item.reviews}K reviews</div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default RelatedApplications