import React, { useState } from 'react'
import AuthLayout from "../../layouts/AuthLayout"
import "./forgotPw.scss"
import { CircularProgress, TextField } from '@mui/material'
import { Controller, useForm } from "react-hook-form"
import { Link, useNavigate } from 'react-router-dom'
import { enqueueSnackbar } from 'notistack'
import Checkbox from 'antd/es/checkbox/Checkbox'
import { motion } from 'framer-motion'
import { smoothComeUp } from "../../utils/framerAnimations"
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import axios from 'axios'

var demoEmail = "demo@gmail.com"
var demoPass = "password"



const ForgotPw = () => {



    const { handleSubmit, register, formState: { errors }, control } = useForm();
    const [isLoading, setIsLoading] = useState(false)
    const navigate = useNavigate()


    const handleFp = async (data) => {
        // Make API CALL
        console.log(data)

        try {

            setIsLoading(true)

            // const formDataEncoded = new URLSearchParams(formData).toString();
            const response = await axios.post('http://localhost:8000/auth/forgotPw', { "email": data.fpEmail })
            console.log('Response => ', response.data)
            sessionStorage.setItem('forgotPwEmail', data.fpEmail)
            navigate("/auth/newPw")
            setIsLoading(false)
            enqueueSnackbar("OTP sent in email", { variant: "success" })

        }
        catch (error) {
            console.log('Error Login , ', error)
            enqueueSnackbar("Failed To Send OTP", { variant: "error" })
            setIsLoading(false)

        }





    }


    return (
        <AuthLayout>


            <motion.div

                className='forgotPw'
                {...smoothComeUp}
            >
                <div className="formUtils">

                    <Link to={"/auth/login"}><p><ChevronLeftIcon />Back</p></Link>
                </div>


                <div className="fpHeader">
                    <h1>Forgot your password ?</h1>
                    <p>Please enter the email address associated with your account, and we'll email you a OTP.</p>
                </div>


                <div className="fpForm">

                    <form onSubmit={handleSubmit(handleFp)} noValidate>

                        <div className="formFields">

                            <TextField
                                {...register("fpEmail", {
                                    required: 'Enter the email.',
                                    pattern: {
                                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                        message: " Invalid email address"
                                    }
                                })}
                                type='email'
                                id='fpEmail'
                                label="Email address"
                                variant='outlined'
                                error={!!errors.fpEmail}
                                helperText={errors.fpEmail?.message}
                            />

                        </div>

                        <button type='submit'>{isLoading ? <CircularProgress color='inherit' size={25} /> : 'Reset Password'}</button>
                    </form>
                    {/* <DevTool control={control} /> */}
                </div>

            </motion.div>
        </AuthLayout>

    )
}

export default ForgotPw