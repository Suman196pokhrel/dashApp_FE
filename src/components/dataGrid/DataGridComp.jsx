import React, { useState } from 'react'
import "./dataGrid.scss"
import { Box } from '@mui/material'
import { styled } from "@mui/material/styles"
import { DataGrid } from '@mui/x-data-grid';




const CustomDataGrid = styled(DataGrid)(({ theme }) => ({
    width: "100%",
    color: "#212B36",
    '& .MuiDataGrid-columnHeaderTitleContainer': {
        backgroundColor: "#F4F6F8",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",

        textAlign: "center",
    },
    '& .MuiDataGrid-columnHeaderTitle': {
    },
    '& .MuiDataGrid-filterIcon, .MuiDataGrid-sortIcon, .MuiDataGrid-menuIcon': {
        backgroundColor: "#F4F6F8", // Set your desired background color here
    },
    '& .MuiDataGrid-columnHeader': {
        padding: "0px 10px",
        backgroundColor: "#F4F6F8"
    },
    '& .MuiDataGrid-checkboxInput': {
        color: "#00A76F",

    },
    '& .MuiDataGrid-checkboxInput.Mui-checked': {
        color: '#00A76F',
    },
    '& .MuiDataGrid-cell': {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "2px"

    },
    '& .MuiDataGrid-row': {
        border: "none"

    },
    '& .MuiDataGrid-withBorderColor': {
        border: "2px dotted rgba(145, 158, 171, 0.20))",

    },
    '& .MuiDataGrid-cell:focus': {
        outline: 'none', // Remove the focus outline
    },



}))






const DataGridComp = ({ columns, rows }) => {

    const [density, setDensity] = useState('comfortable'); // Initial density setting

    return (
        <Box className='dataGrid' style={{ width: '100%' }}>
            <CustomDataGrid
                rowHeight={75}

                rows={rows}
                columns={columns}
                density='comfortable'
                pageSizeOptions={[5]}
                checkboxSelection
                pagination
                disableRowSelectionOnClick
                initialState={{
                    pagination: {
                        paginationModel: {
                            pageSize: 5,
                        },
                    },
                }}
                editMode={false}

            />
        </Box>
    )
}

export default DataGridComp