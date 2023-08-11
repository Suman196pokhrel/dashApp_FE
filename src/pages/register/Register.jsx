import React, { useState } from 'react'
import AuthLayout from '../../layouts/AuthLayout'
import "./register.scss"
import { CircularProgress, TextField } from '@mui/material'
import { Controller, useForm } from 'react-hook-form'
import { DatePicker } from "antd"
import { enqueueSnackbar } from 'notistack'
import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { smoothComeUp } from '../../utils/framerAnimations'
import axios from 'axios'
import moment from 'moment/moment'






const Register = () => {
  const navigate = useNavigate()
  const [isLoading, setIsLoading] = useState(false)
  const { register, handleSubmit, control, formState: { errors } } = useForm()
  const maxDate = new Date();
  maxDate.setFullYear(maxDate.getFullYear() - 5);

  const onSubmit = async ({ fName, lName, email, dob, password, mobileNum }) => {
    const formData = {
      fName,
      lName,
      email,
      password,
      mobileNum,
      dob: moment(dob).format('YYYY-MM-DD')
    }
    try {

      setIsLoading(true)

      // const formDataEncoded = new URLSearchParams(formData).toString();
      const response = await axios.post(`http://localhost:8000/auth/newUser`, formData)
      console.log('Response => ', response.data)
      navigate("/auth/login")
      setIsLoading(false)
      enqueueSnackbar("Sucessfully Registered", { variant: "success" })

    }
    catch (error) {
      console.log('Error Login , ', error)
      enqueueSnackbar("Registration failed", { variant: "error" })
      setIsLoading(false)

    }


  }



  return (
    <motion.div className="register" {...smoothComeUp}>


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
        <form onSubmit={handleSubmit(onSubmit)} noValidate>

          <div className="formFields">
            <div className="name">
              <TextField
                {...register("fName", {
                  required: "first name cannot be empty",
                  minLength: {
                    value: 3,
                    message: "minimum 3 characters required"
                  },
                  pattern: {
                    value: /^[A-Za-z]+$/,
                    message: "alphabets only"

                  }
                })}
                type='text'
                id='fName'
                label="First name"
                variant='outlined'
                error={!!errors.fName}
                helperText={errors.fName?.message}

              />
              <TextField
                {...register("lName", {
                  required: "last name cannot be empty",
                  minLength: {
                    value: 3,
                    message: "minimum 3 characters required"
                  },
                  pattern: {
                    value: /^[A-Za-z]+$/,
                    message: "alphabets only"

                  }
                })}
                type='text'
                id='lName'
                label="Last name"
                variant='outlined'
                error={!!errors.lName}
                helperText={errors.lName?.message}

              />
            </div>

            <div className="dobPhone">
              <Controller
                name="dob"
                control={control}
                defaultValue={null}
                rules={{ required: 'date of birth required' }}
                render={({ field }) => (
                  <>
                    <DatePicker
                      {...field}
                      placeholder='Date of birth'
                      onChange={(date) => field.onChange(date)}
                      value={field.value}
                      disabledDate={(current) => current && current > maxDate} // Set the max date limit


                      status={errors.dob?.message ? "error" : ""}
                    />

                    {errors.dob && (
                      <p className='errorText'>{errors.dob.message}</p>
                    )}
                  </>
                )}

              />


              <TextField
                {...register("mobileNum", {
                  required: "contact cannot be empty",
                  pattern: {
                    value: /^[+]?[0-9]{8,15}$/,
                    message: 'Invalid contact number',
                  },
                })}
                type='tel' // Change the type to 'tel' for phone numbers
                id='phoneNumber'
                label='contact number' // Update the label to indicate it's for phone numbers
                variant='outlined'
                autoComplete='off'
                inputMode='tel' // Set the inputMode to 'tel' to hint mobile devices that it's a phone number input
                error={!!errors.mobileNum}
                helperText={errors.mobileNum?.message}
              />
            </div>

            <TextField
              {...register("email", {
                required: 'enter your email.',
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: " Invalid email address"
                }
              })}
              type='email'
              id='email'
              label="Email address"
              variant='outlined'
              error={!!errors.email}
              helperText={errors.email?.message}
            />


            <TextField
              {...register("password", {
                required: "Enter the password",
                minLength: {
                  value: 6,
                  message: "Password must be at least 6 characters"
                }
              })}
              type="password"
              id="password"
              label="Password"
              variant="outlined"
              error={!!errors.password}
              helperText={errors.password?.message}
            />
          </div>


          <button className='sumbit' type='submit'>{isLoading ? <CircularProgress color='inherit' size={25} /> : 'Register'}</button>
        </form>
        {/* <DevTool control={control} /> */}
      </div>

    </motion.div>
  )
}

export default Register