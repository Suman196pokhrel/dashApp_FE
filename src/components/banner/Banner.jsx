import React from 'react'
import "./banner.scss"

const Banner = ({ title, desc, buttonText }) => {
    return (
        <div className='banner'>
            <div className="bannerLeft">
                <div className="title">
                    <h1>Welcome back 👋</h1>
                    <h1>{title}</h1>
                </div>
                <p>{desc}</p>
                <button>{buttonText}</button>
            </div>
            <div className="bannerRight">
                <img className="imgBg" src='/static/illustrations/illustrations_banner.svg' alt='banner bg' />
                <img className="imgFront" src='\static\illustrations\character_3.png' alt='banner fg' />
            </div>
        </div>
    )
}

export default Banner