import React, { useState } from 'react'
import "./sidebar.scss"
import { CssBaseline, Drawer } from '@mui/material'
import IconButton from '@mui/material/IconButton'
import Button from '@mui/material/Button'
import MenuIcon from '@mui/icons-material/Menu'
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft'
import sidebarItems from '../../utils/sidebarConfig'
import { Link } from 'react-router-dom'
import SvgIcon from '@mui/material/SvgIcon'


const Sidebar = () => {

    const [isDrawerOpen, setIsDrawerOpen] = useState(false)


    const handleDrawerOpen = () => {
        console.log("Open clicked")
        setIsDrawerOpen(true)
    }

    const handleDrawerClose = () => {
        console.log("Close clicked")
        setIsDrawerOpen(false)
    }

    return (
        <div className='sidebar'>
            <div className="logoContainer">
                <img src="/favicon/android-chrome-192x192.png" alt="brang logo" />
            </div>

            <div className="adminTab">
                <img src="\static\mockPhotos\suman.jpeg" alt="AdminPic" />
                <div className="adminInfo">
                    <p>Suman Pokhrel</p>
                    <span>Admin</span>
                </div>
            </div>

            {sidebarItems.map((topic) => (
                <div className="topic" key={topic.id}>
                    <h1>{topic.title}</h1>
                    {topic.listItems.map((item) => (
                        <Link key={item} to={item.url}>
                            <div className="item">
                                {<>{item.icon}</>}
                                {/* <img src={item.icon} alt={item.title} /> */}
                                <p>{item.title}</p>
                            </div>
                        </Link>

                    ))}
                </div>
            ))}



        </div>

    )
}

export default Sidebar;





