import React from 'react';
import "./carousal.scss"
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";



const CarousalComp = () => {


    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        autoplay: true,
        autoplaySpeed: 4000,
        slidesToShow: 1,
        slidesToScroll: 1
    };

    const carousalItems = [
        {
            id: 1,
            title: "Exploring the Hidden Gems of [Destination]",
            subText: "The old oak tree stood tall and majestic, its branches swaying gently in the breeze.",
            img: "/static/mockPhotos/carousal/cover_1.jpg"
        },
        {
            id: 2,
            title: "10 Essential Tips for Healthy Living",
            subText: "The sun slowly set over the horizon, painting the sky in vibrant hues of orange and pink.",
            img: "/static/mockPhotos/carousal/cover_2.jpg"
        },
        {
            id: 3,
            title: "The Ultimate Guide to Productivity Hacks",
            subText: "She eagerly opened the gift, her eyes sparkling with excitement.",
            img: "/static/mockPhotos/carousal/cover_3.jpg"
        }
    ]



    return (

        <div className='carousalComp'>
            <Slider {...settings}>
                {carousalItems.map((item) => (
                    <div className="carItem" key={item.id}>
                        <img src={item.img} alt={item.id} />
                        <div className="textInfo">
                            <h1>Featured App</h1>
                            <p className="title">{item.title}</p>
                            <p className="subText">{item.subText.length > 70 ? item.subText.substring(0, 70) + '...' : item.subText}</p>
                        </div>
                    </div>
                ))}
            </Slider>
        </div>
    )
}

export default CarousalComp