import React, { useEffect, useState } from 'react'
import "./sidebar.scss"
import { CssBaseline, Drawer } from '@mui/material'
import IconButton from '@mui/material/IconButton'
import Button from '@mui/material/Button'
import MenuIcon from '@mui/icons-material/Menu'
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft'
import sidebarItems from '../../utils/sidebarConfig'
import { Link, useLocation, useNavigate, useNavigation } from 'react-router-dom'
import SvgIcon from '@mui/material/SvgIcon'


const Sidebar = () => {

    const [isDrawerOpen, setIsDrawerOpen] = useState(true)
    const { pathname } = useLocation()
    const [currentPath, setCurrentPath] = useState(pathname.substring(pathname.lastIndexOf('/') + 1))
    const sidebarWidth = isDrawerOpen ? `320px` : '80px'; // Change 80 to your desired width for each nav item


    const handleDrawerOpen = () => {
        console.log("Open clicked")
        setIsDrawerOpen(true)
    }

    const handleDrawerClose = () => {
        console.log("Close clicked")
        setIsDrawerOpen(false)
    }



    return (
        <div className='sidebar' style={{ width: sidebarWidth }}>

            <div className="drawerControl">
                {isDrawerOpen ? (
                    <IconButton onClick={handleDrawerClose}>
                        <KeyboardArrowLeftIcon />
                    </IconButton>
                ) : (
                    <IconButton onClick={handleDrawerOpen}>
                        <KeyboardArrowRightIcon />
                    </IconButton>
                )}

            </div>

            <div className="logoContainer">
                <img src="/favicon/android-chrome-192x192.png" alt="brang logo" />
            </div>

            <div className="adminTab">
                <img src="/static/mockPhotos/suman.jpeg" alt="AdminPic" />
                {isDrawerOpen ? (<div className="adminInfo">
                    <p>Suman Pokhrel</p>
                    <span>Admin</span>
                </div>) : (<></>)}
            </div>

            {sidebarItems.map((topic) => (
                <div className="topic" key={topic.id} style={isDrawerOpen ? {} : { paddingLeft: "0px" }}>
                    {isDrawerOpen ? (<h1>{topic.title}</h1>) : (<></>)}
                    {topic.listItems.map((item) => (
                        <Link key={item.id} to={item.url} onClick={() => {
                            setCurrentPath(item.url);
                            // console.log(currentPath)
                        }}>
                            <div className={`item ${currentPath === item.url ? "selectedLink" : ""}`} style={isDrawerOpen ? { flexDirection: "row" } : { flexDirection: "column", height: "70px", backgroundColor: "", alignItems: "center", justifyContent: "center", }}>
                                {<>{item.icon}</>}
                                {/* <img src={item.icon} alt={item.title} /> */}
                                {isDrawerOpen ? (<p>{item.title}</p>) : (<p style={{ fontSize: "12px", margin: "0px" }}>{item.title}</p>)}
                            </div>
                        </Link>

                    ))}
                </div>
            ))}



        </div>

    )
}

export default Sidebar;





