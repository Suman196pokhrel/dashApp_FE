import React from 'react'
import "./topAuthors.scss"
import FavoriteIcon from '@mui/icons-material/Favorite';
import First from "../../assets/ic_trophy_1"
import Second from "../../assets/ic_trophy_2"
import Third from "../../assets/ic_trophy_3"
import { Divider } from '@mui/material';



const topAuthors = [
    {
        id: 1,
        img: "/static/mockPhotos/avatars/avatar_1.jpg",
        title: "Jayvion Simon",
        likes: "9.19",
    },
    {
        id: 2,
        img: "/static/mockPhotos/avatars/avatar_2.jpg",
        title: "Deja Brady",
        likes: "9.12"
    },
    {
        id: 3,
        img: "/static/mockPhotos/avatars/avatar_3.jpg",
        title: "Lucian Obrien",
        likes: "1.5"
    },

]


function getRankClass(rank) {
    switch (rank) {
        case 1:
            return { comp: <First sx={{ color: "#00AB55" }} />, class: "first" };
        case 2:
            return { comp: <Second sx={{ color: "#1890FF" }} />, class: "second" };
        case 3:
            return { comp: <Third sx={{ color: "#FF4842" }} />, class: "third" };
        default:
            return '';
    }
}


const TopAuthors = () => {
    return (
        <div className='topAuthors'>
            <h1>Top Authors</h1>
            <Divider sx={{ marginBottom: 3 }} />
            <div className="items">
                {topAuthors.map((item) => (
                    <div className="item" key={item.id}>
                        <div className="left">
                            <img src={item.img} alt={item.title} />
                            <div className="itemInfo">
                                <p className='itemTitle'>{item.title}</p>
                                <p className="itemLikes">
                                    <FavoriteIcon sx={{ fontSize: "14px", color: "#637381" }} />
                                    <div className="likes" style={{ color: "#637381", fontSize: "12px" }}>
                                        {item.likes} k
                                    </div>
                                </p>
                            </div>
                        </div>
                        <div className={`right ${getRankClass(item.id).class}`}>
                            {getRankClass(item.id).comp}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default TopAuthors