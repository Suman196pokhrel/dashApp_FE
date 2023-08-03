import React, { useState } from 'react'
import AuthLayout from "../../layouts/AuthLayout"
import "./login.scss"
import { CircularProgress, TextField } from '@mui/material'
import { Controller, useForm } from "react-hook-form"
import { Link, useNavigate } from 'react-router-dom'
import { enqueueSnackbar } from 'notistack'
import Checkbox from 'antd/es/checkbox/Checkbox'
import { motion } from 'framer-motion'
import { smoothComeUp } from "../../utils/framerAnimations"


var demoEmail = "demo@gmail.com"
var demoPass = "password"



const Login = () => {



  const { handleSubmit, register, formState: { errors }, control } = useForm();
  const [isLoading, setIsLoading] = useState(false)
  const navigate = useNavigate()


  const handleLogin = (data) => {
    // Make API CALL
    if (data.loginEmail === demoEmail && data.loginPassword === demoPass) {


      setIsLoading(true)

      setTimeout(() => {
        // Navigate to DashAPP

        enqueueSnackbar("Successfully Logged in", { variant: 'success' })
        navigate("/dashboard/app")
        setIsLoading(false)
      }, 1300)



    } else {
      enqueueSnackbar("Sorry, You email or password was wrong", { variant: 'error' })
    }
  }


  return (
    <AuthLayout>

      <motion.div

        className='login'
        {...smoothComeUp}
      >


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

              <Link to={"/auth/forgotPw"}><p>Forgot password?</p></Link>
            </div>

            <button type='submit'>{isLoading ? <CircularProgress color='inherit' size={25} /> : 'Login'}</button>
          </form>
          {/* <DevTool control={control} /> */}
        </div>

      </motion.div>
    </AuthLayout>

  )
}

export default Login