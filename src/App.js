import React from 'react'
import router from './routes'
import { RouterProvider } from 'react-router-dom'
import { LocalizationProvider } from '@mui/x-date-pickers'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';





const App = () => {

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <RouterProvider router={router} />

    </LocalizationProvider>
  )
}

export default App