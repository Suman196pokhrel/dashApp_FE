import React from 'react'
import AuthLayout from "../../layouts/AuthLayout"
import "./login.scss"
import { TextField } from '@mui/material'
import { Controller, useForm } from "react-hook-form"

var demoEmail = "demo@gmail.com"
var demoPass = "password"




const Login = () => {

  const { handleSubmit, control, formState: { errors } } = useForm();




  const handleLogin = (data) => {

    console.log(data)
  }




  return (
    <AuthLayout>
      <div className='login'>



        <div className="loginHeader">
          <h1>Sign in to Dashapp</h1>
          <p>Enter your details below</p>
        </div>

        <div className="thirdPartyLogin">
          <div className="logoContainer">
            <img src="" alt="" />
          </div>
        </div>

        <div className="loginForm">
          <form onSubmit={handleSubmit(handleLogin)}>

            <div className="formFields">
              <Controller
                name="email"
                control={control}
                defaultValue=""
                rules={{
                  required: 'Email address is required',
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: 'Invalid email address',
                  },
                }}
                render={({ field }) => (
                  <TextField
                    {...field}
                    type='email'
                    id='loginEmail'
                    label="Email address"
                    variant='outlined'
                    error={!!errors.email}
                    helperText={errors.email?.message}


                  />
                )}
              />

              <Controller
                name="password"
                control={control}
                defaultValue=""
                rules={{
                  required: 'Password is required',
                  minLength: {
                    value: 6,
                    message: 'Password must be at least 6 characters',
                  },
                }}
                render={({ field }) => (
                  <TextField
                    {...field}
                    type="password"
                    id="loginPassword"
                    label="Password"
                    variant="outlined"
                    error={!!errors.password}
                    helperText={errors.password?.message}
                  />
                )}
              />
            </div>

            <div className="formUtils">
              <div className="rememberMe">
                <input type="checkbox" id='rememberMe' />
                <label htmlFor="rememberMe">Remember me</label>
              </div>
              <p>Forgot Password?</p>
            </div>

            <button type='submit'>Login</button>
          </form>
        </div>


      </div>
    </AuthLayout>

  )
}

export default Login