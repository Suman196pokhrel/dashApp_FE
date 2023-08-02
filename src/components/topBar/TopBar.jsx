import React, { useState } from 'react'
import "./topbar.scss"
import { IconButton } from '@mui/material'
import { SearchOutlined } from '@mui/icons-material'
import Badge from '@mui/material/Badge'
import NotificationsIcon from '@mui/icons-material/Notifications';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import Avatar from '@mui/material/Avatar'
import SettingsIcon from '@mui/icons-material/Settings';
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import { styled, alpha } from "@mui/material/styles"
import EditIcon from '@mui/icons-material/Edit';
import Divider from '@mui/material/Divider';
import ArchiveIcon from '@mui/icons-material/Archive';
import FileCopyIcon from '@mui/icons-material/FileCopy';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { Link } from 'react-router-dom'
import { enqueueSnackbar } from 'notistack'


const StyledMenuComp = styled((props) => (
    <Menu
        elevation={0}
        anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'right',
        }}
        transformOrigin={{
            vertical: 'top',
            horizontal: 'right',
        }}
        {...props}

    />
))(({ theme }) => ({
    '& .MuiPaper-root': {
        borderRadius: 6,
        marginTop: theme.spacing(0),
        minWidth: 220,
        color:
            theme.palette.mode === 'light' ? '#212B36' : theme.palette.grey[300],
        boxShadow:
            ' 0px 20px 40px -4px rgba(145, 158, 171, 0.24), 0px 0px 2px 0px rgba(145, 158, 171, 0.24)',
        '& .MuiMenu-list': {
            padding: '4px 5px',
        },
        '& .MuiMenuItem-root': {
            fontSize: "14px",
            fontWeight: 400,
            // padding: "5px 10px",
            borderRadius: "4px",
            // backgroundColor: "red",

            '&:active': {
                backgroundColor: alpha(
                    theme.palette.primary.main,
                    theme.palette.action.selectedOpacity,
                ),
            },
        },
    },
}));



const TopBar = () => {

    const [anchorEl, setAnchorEl] = useState(null)
    const open = Boolean(anchorEl)
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };



    return (
        <div className='topbar'>
            <div className="search">
                <IconButton>
                    <SearchOutlined />
                </IconButton>
            </div>

            <div className="topRight">
                <IconButton>
                    <img className='flag' src="/static/icons/navbar/nepal.png" alt="" />
                </IconButton>
                <IconButton>
                    <Badge badgeContent={4} color="error">
                        <NotificationsIcon />
                    </Badge>
                </IconButton>
                <IconButton>
                    <PeopleAltIcon />
                </IconButton>
                <IconButton >
                    <SettingsIcon className='rotateSetting' />
                </IconButton>
                <IconButton
                    onClick={handleClick}
                >
                    <Avatar src='/static/mockPhotos/suman.jpeg' sx={{ width: 48, height: 48, border: "3px solid #32e089" }} />
                </IconButton>
            </div>


            <StyledMenuComp
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
            >
                <MenuItem onClick={handleClose} disableRipple sx={{ display: "flex", flexDirection: "column", alignItems: "start" }}>
                    <p style={{ color: "#212B36", fontSize: "14px", fontWeight: '600' }}>Suman Pokhrel</p>
                    <span style={{ color: "#637381", fontSize: "12px", fontWeight: '400' }}>demo@suman.cc</span>
                </MenuItem>
                <Divider sx={{ my: 0.5 }} />
                <MenuItem onClick={handleClose} disableRipple>
                    Home
                </MenuItem>
                <MenuItem onClick={handleClose} disableRipple>
                    Profile
                </MenuItem>
                <MenuItem onClick={handleClose} disableRipple>
                    Settings
                </MenuItem>
                <Divider sx={{ my: 0.5 }} />

                <Link to={"/auth/login"} onClick={() => enqueueSnackbar("Logged out", { variant: "success" })}>
                    <MenuItem>
                        <p style={{ color: "#FF5D39", fontSize: "16px", fontWeight: '600' }}>Logout</p>
                    </MenuItem>
                </Link>



            </StyledMenuComp>


        </div >
    )
}

export default TopBar