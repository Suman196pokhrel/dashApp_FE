import React from 'react'
import router from './routes'
import { RouterProvider } from 'react-router-dom'
import { LocalizationProvider } from '@mui/x-date-pickers'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { SnackbarProvider } from 'notistack';
import Grow from "./components/snackbars/Grow"




const App = () => {

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <SnackbarProvider maxSnack={3} autoHideDuration={2000} preventDuplicate>
        <RouterProvider router={router} />
      </SnackbarProvider>

    </LocalizationProvider>
  )
}

export default App