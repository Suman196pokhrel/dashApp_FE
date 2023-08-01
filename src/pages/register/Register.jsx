import React from 'react'
import AuthLayout from '../../layouts/AuthLayout'
import "./register.scss"
import { TextField } from '@mui/material'
import { Controller, useForm } from 'react-hook-form'
import { DatePicker } from "antd"
import { DevTool } from '@hookform/devtools'
import { enqueueSnackbar } from 'notistack'
import { useNavigate } from 'react-router-dom'





const Register = () => {
  const navigate = useNavigate()

  const { register, handleSubmit, control, formState: { errors } } = useForm()
  const maxDate = new Date();
  maxDate.setFullYear(maxDate.getFullYear() - 5);

  const onSubmit = (data) => {
    // Make API CALL

    // Change Auth State

    // Navigate to DashAPP
    enqueueSnackbar("Successfully registered", { variant: 'success' })
    navigate("/auth/login")


  }



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
                  name="dateOfBirth"
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


                        status={errors.dateOfBirth?.message ? "error" : ""}
                      />

                      {errors.dateOfBirth && (
                        <p className='errorText'>{errors.dateOfBirth.message}</p>
                      )}
                    </>
                  )}

                />


                <TextField
                  {...register("tel", {
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
                  error={!!errors.tel}
                  helperText={errors.tel?.message}
                />
              </div>

              <TextField
                {...register("regEmail", {
                  required: 'enter your email.',
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: " Invalid email address"
                  }
                })}
                type='email'
                id='regEmail'
                label="Email address"
                variant='outlined'
                error={!!errors.regEmail}
                helperText={errors.regEmail?.message}
              />


              <TextField
                {...register("regPassword", {
                  required: "Enter the password",
                  minLength: {
                    value: 6,
                    message: "Password must be at least 6 characters"
                  }
                })}
                type="password"
                id="regPassword"
                label="Password"
                variant="outlined"
                error={!!errors.regPassword}
                helperText={errors.regPassword?.message}
              />
            </div>


            <button className='sumbit' type='submit'>Register</button>
          </form>
          {/* <DevTool control={control} /> */}
        </div>

      </div>
    </AuthLayout>
  )
}

export default Register