import React from 'react'
import "./banner.scss"

const Banner = ({ title1, title2, desc, buttonText, imgBg, img }) => {
    return (
        <div className='banner'>
            <div className="bannerLeft">
                <div className="title">
                    <h1>{title1}</h1>
                    <h1>{title2}</h1>
                </div>
                <p>{desc}</p>
                <button>{buttonText}</button>
            </div>
            <div className="bannerRight">

                {imgBg ? <img className="imgBg" src={imgBg} alt='banner bg' /> : <></>}
                <img className="imgFront" src={img} alt='banner fg' />
            </div>
        </div>
    )
}

export default Banner