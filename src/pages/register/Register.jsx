import React from 'react'
import AuthLayout from '../../layouts/AuthLayout'
import "./register.scss"
import { TextField } from '@mui/material'
import { DatePicker } from '@mui/x-date-pickers'

const Register = () => {
  return (
    <AuthLayout>
      <div className="register">


        <div className="registerHeader">
          <h1>Get started absoluetly free</h1>
          <p>Free forever, no card needed</p>
        </div>

        <div className="thirdPartyLogin">
          <div className="logoContainer">
            <img src="" alt="" />
          </div>
        </div>

        <div className="registerForm">
          <form autoComplete='off'>

            <div className="formFields">
              <div className="name">
                <TextField
                  type='text'
                  id='fName'
                  label="First name"
                  variant='outlined'

                />
                <TextField
                  type='text'
                  id='lName'
                  label="Last name"
                  variant='outlined'

                />
              </div>

              <div className="dobPhone">
                <DatePicker label="Date of birth" />
                <TextField
                  type='tel' // Change the type to 'tel' for phone numbers
                  id='phoneNumber'
                  label='contact number' // Update the label to indicate it's for phone numbers
                  variant='outlined'
                  autoComplete='off'
                  inputMode='tel' // Set the inputMode to 'tel' to hint mobile devices that it's a phone number input
                />
              </div>

              <TextField
                type='email'
                id='loginEmail'
                label="Email address"
                variant='outlined'
                autoComplete='off'

              />
              <TextField
                type='password'
                id='loginPassword'
                label="Password"
                variant='outlined'
                autoComplete='off'

              />
            </div>


            <button type='submit'>Register</button>
          </form>
        </div>

      </div>
    </AuthLayout>
  )
}

export default Register