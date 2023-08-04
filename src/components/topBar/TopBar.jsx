import React, { useState } from 'react'
import "./topbar.scss"
import { CircularProgress, IconButton, TextField } from '@mui/material'
import { SearchOutlined } from '@mui/icons-material'
import Badge from '@mui/material/Badge'
import NotificationsIcon from '@mui/icons-material/Notifications';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import Avatar from '@mui/material/Avatar'
import SettingsIcon from '@mui/icons-material/Settings';
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import { styled, alpha } from "@mui/material/styles"
import Divider from '@mui/material/Divider';
import { Link, useNavigate } from 'react-router-dom'
import { enqueueSnackbar } from 'notistack'
import { Modal } from 'antd'
import SearchIcon from '@mui/icons-material/Search';
import InputBase from '@mui/material/InputBase';



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

const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
        backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(1),
        width: 'auto',
    },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            width: '12ch',
            '&:focus': {
                width: '20ch',
            },
        },
    },
}));



const TopBar = () => {
    const [isSearchModalOpen, setIsSearchModalOpen] = useState(false)
    const [isLoading, setIsLoading] = useState(false)
    const [anchorEl, setAnchorEl] = useState(null)
    const navigate = useNavigate()
    const open = Boolean(anchorEl)
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    const showModal = () => {
        setIsSearchModalOpen(true);
    };
    const handleOk = () => {
        setIsSearchModalOpen(false);
    };
    const handleCancel = () => {
        setIsSearchModalOpen(false);
    };

    const handleLogout = () => {
        setIsLoading(true)
        setTimeout(() => {
            enqueueSnackbar("Logged out", { variant: "success" })
            navigate("/auth/login")
            setIsLoading(false)
        }, 1300)
    }


    return (
        <div className='topbar'>
            <div className="search">
                <IconButton onClick={showModal}>
                    <SearchOutlined />
                </IconButton>
            </div>

            <div className="topRight">
                <IconButton>
                    <img className='flag' src="/auth/login/static/icons/navbar/nepal.png" alt="" />
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
                    <Avatar src='/auth/login/static/mockPhotos/suman.jpeg' sx={{ width: 48, height: 48, border: "3px solid #32e089" }} />
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


                <MenuItem onClick={handleLogout}>
                    <p style={{ color: "#FF5D39", fontSize: "16px", fontWeight: '600' }}>
                        {isLoading ? <CircularProgress sx={{ color: 'inherit' }} size={25} /> : 'Logout'}
                    </p>
                </MenuItem>




            </StyledMenuComp>

            <Modal open={isSearchModalOpen} onCancel={handleCancel} footer={[<></>]}>
                <Search>
                    <SearchIconWrapper>
                        <SearchIcon />
                    </SearchIconWrapper>
                    <StyledInputBase
                        placeholder="Search…"
                        inputProps={{ 'aria-label': 'search' }}
                    />
                </Search>
                <Divider sx={{ my: 2 }} />
                <div className="searchResults">
                    <p>Some contents...</p>
                    <p>Some contents...</p>
                    <p>Some contents...</p>
                </div>
            </Modal>


        </div >
    )
}

export default TopBar