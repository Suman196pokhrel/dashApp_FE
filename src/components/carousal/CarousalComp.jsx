import React from 'react';
import "./carousal.scss"
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useLocation } from 'react-router-dom';



const CarousalComp = ({ carousalItems }) => {
    let { pathname } = useLocation()
    pathname = pathname.substring(pathname.lastIndexOf('/') + 1)

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        autoplay: true,
        autoplaySpeed: 4000,
        slidesToShow: 1,
        slidesToScroll: 1
    };



    return (

        <div className='carousalComp'>
            <Slider {...settings}>
                {carousalItems.map((item) => (
                    <div className="carItem" key={item.id}>
                        <img src={item.img} alt={item.id} />
                        {pathname === 'app' ? (
                            <div className='textInfo'>
                                <h1>Featured App</h1>
                                <p className="title">{item.title}</p>
                                <p className="subText">{item.subText.length > 70 ? item.subText.substring(0, 70) + '...' : item.subText}</p>
                            </div>
                        ) : (
                            <div className='textInfo'>
                                <h1>New</h1>
                                <p className="title">{item.title}</p>
                                <button>Buy Now</button>
                                {/* <p className="subText">{item.subText.length > 70 ? item.subText.substring(0, 70) + '...' : item.subText}</p> */}
                            </div>
                        )}
                    </div>
                ))}
            </Slider>
        </div>
    )
}

export default CarousalComp