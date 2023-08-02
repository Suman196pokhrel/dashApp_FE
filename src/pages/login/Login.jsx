import React from 'react'
import AuthLayout from "../../layouts/AuthLayout"
import "./login.scss"
import { TextField } from '@mui/material'
import { Controller, useForm } from "react-hook-form"
import { useNavigate } from 'react-router-dom'
import { enqueueSnackbar } from 'notistack'
import Checkbox from 'antd/es/checkbox/Checkbox'
var demoEmail = "demo@gmail.com"
var demoPass = "password"



const Login = () => {



  const { handleSubmit, register, formState: { errors }, control } = useForm();
  const navigate = useNavigate()


  const handleLogin = (data) => {
    console.log("Login Form Data => ", data)

    // Make API CALL
    if (data.loginEmail === demoEmail && data.loginPassword === demoPass) {
      //

      // Change Auth State

      // Navigate to DashAPP
      enqueueSnackbar("Successfully Logged in", { variant: 'success' })
      navigate("/dashboard/app")

    } else {
      enqueueSnackbar("Sorry, You email or password was wrong", { variant: 'error' })
    }
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

          <form onSubmit={handleSubmit(handleLogin)} noValidate>

            <div className="formFields">

              <TextField
                {...register("loginEmail", {
                  required: 'Enter the email.',
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: " Invalid email address"
                  }
                })}
                type='email'
                id='loginEmail'
                label="Email address"
                variant='outlined'
                error={!!errors.loginEmail}
                helperText={errors.loginEmail?.message}
              />


              <TextField
                {...register("loginPassword", {
                  required: "Enter the password",
                  minLength: {
                    value: 6,
                    message: "Password must be at least 6 characters"
                  }
                })}
                type="password"
                id="loginPassword"
                label="Password"
                variant="outlined"
                error={!!errors.loginPassword}
                helperText={errors.loginPassword?.message}
              />
            </div>

            <div className="formUtils">
              <Controller
                name="rememberMe"
                control={control}
                defaultValue={true}
                render={({ field }) => (
                  <Checkbox {...field} checked={field.value} style={{}}>
                    Remember Me
                  </Checkbox>
                )}
              />

              <p>Forgot password?</p>
            </div>

            <button type='submit'>Login</button>
          </form>
          {/* <DevTool control={control} /> */}
        </div>

      </div>
    </AuthLayout>

  )
}

export default Login