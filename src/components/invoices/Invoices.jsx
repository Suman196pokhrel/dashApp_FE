import React, { useState } from 'react'
import "./invoices.scss"
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { Divider, IconButton } from '@mui/material';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { styled, alpha } from '@mui/material/styles';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import EditIcon from '@mui/icons-material/Edit';
import ArchiveIcon from '@mui/icons-material/Archive';
import FileCopyIcon from '@mui/icons-material/FileCopy';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import CloudDownloadIcon from '@mui/icons-material/CloudDownload';
import LocalPrintshopIcon from '@mui/icons-material/LocalPrintshop';
import ShareIcon from '@mui/icons-material/Share';
import DeleteIcon from '@mui/icons-material/Delete';

function createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein };
}


const rows = [
    { invoice: 'INV-1990', platform: 'Android', amount: '$83.74', status: 'Paid' },
    { invoice: 'INV-1991', platform: 'Mac', amount: '$97.14', status: 'Out Of Date' },
    { invoice: 'INV-1992', platform: 'Windows', amount: '$68.71', status: 'Progress' },
    { invoice: 'INV-1993', platform: 'Android', amount: '$85.21', status: 'Paid' },
    { invoice: 'INV-1994', platform: 'Mac', amount: '$52.17', status: 'Paid' },
]

const headers = [
    'Invoice ID',
    'Category',
    'Price',
    'Status',
    ''
]

function getStatusClass(status) {
    switch (status) {
        case 'Paid':
            return 'paid';
        case 'Out Of Date':
            return 'outOfDate';
        case 'Progress':
            return 'progress';
        default:
            return '';
    }
}


const StyledMenu = styled((props) => (
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
        marginTop: theme.spacing(1),
        minWidth: 180,
        color:
            theme.palette.mode === 'light' ? '#212B36' : theme.palette.grey[300],
        boxShadow:
            ' 0px 20px 40px -4px rgba(145, 158, 171, 0.24), 0px 0px 2px 0px rgba(145, 158, 171, 0.24)',
        '& .MuiMenu-list': {
            padding: '4px 0',
        },
        '& .MuiMenuItem-root': {
            '& .MuiSvgIcon-root': {
                fontSize: 22,
                // color: "#212B36",
                marginRight: theme.spacing(1.5),
            },
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



const Invoices = ({ title = "Top Invoices", tableHeaders = headers, tableRows = rows }) => {
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };



    return (
        <div className='invoices'>
            <div className="invoiceHeader">{title}</div>
            <Divider />
            <div className="invoiceTable">
                <TableContainer>
                    <Table sx={{ minWidth: 650 }} aria-label="simple table">
                        <TableHead sx={{ backgroundColor: "#F4F6F8" }}>
                            <TableRow

                            >
                                {headers.map((item) => (
                                    <TableCell className='tableHeaderCells' align='left' key={item}>{item}</TableCell>
                                ))}

                            </TableRow>
                        </TableHead>
                        <TableBody sx={{ backgroundColor: "white" }}>
                            {rows.map((row) => (
                                <TableRow
                                    key={row.name}
                                    sx={{ border: 0, '&:last-child td, &:last-child th': { border: 0 } }}
                                >
                                    <TableCell className='tableRowCells' component="th" scope="row" align='left'>
                                        {row.invoice}
                                    </TableCell>
                                    <TableCell className='tableRowCells' align='left'>{row.platform}</TableCell>
                                    <TableCell className='tableRowCells' align='left'>{row.amount}</TableCell>
                                    <TableCell className='tableRowCells' align='left'>
                                        <div className={`statusData ${getStatusClass(row.status)}`} >
                                            {row.status}
                                        </div>
                                    </TableCell>
                                    <TableCell className='tableRowCells' align='right'><IconButton onClick={handleClick}><MoreVertIcon /></IconButton></TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </div>

            <Divider />

            <div className="invoiceFooter">
                <div className="viewBtn">
                    <p>View All </p>
                </div>
            </div>


            <StyledMenu

                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
            >
                <MenuItem onClick={handleClose} disableRipple>
                    <CloudDownloadIcon />
                    Download
                </MenuItem>
                <MenuItem onClick={handleClose} disableRipple>
                    <LocalPrintshopIcon />
                    Print
                </MenuItem>
                <MenuItem onClick={handleClose} disableRipple>
                    <ShareIcon />
                    Share
                </MenuItem>
                <Divider sx={{ my: 0.5 }} />
                <MenuItem onClick={handleClose} disableRipple sx={{ color: "#FF5630" }}>
                    <DeleteIcon color="error" />
                    Delete
                </MenuItem>
            </StyledMenu>


        </div >
    )
}

export default Invoices