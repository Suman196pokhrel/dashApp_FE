import React, { useState } from 'react'
import AuthLayout from "../../layouts/AuthLayout"
import "./newPw.scss"
import { CircularProgress, TextField } from '@mui/material'
import { Controller, useForm } from "react-hook-form"
import { Link, useNavigate } from 'react-router-dom'
import { enqueueSnackbar } from 'notistack'
import Checkbox from 'antd/es/checkbox/Checkbox'
import { motion } from 'framer-motion'
import { smoothComeUp } from "../../utils/framerAnimations"
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';

var demoEmail = "demo@gmail.com"
var demoPass = "password"



const NewPw = () => {



    const { handleSubmit, register, formState: { errors }, control } = useForm();
    const [isLoading, setIsLoading] = useState(false)
    const navigate = useNavigate()


    const handleFp = (data) => {
        // Make API CALL

        setIsLoading(true)

        setTimeout(() => {
            // Navigate to DashAPP

            enqueueSnackbar("Password reset successful", { variant: 'success' })
            navigate("/auth/login")
            setIsLoading(false)
        }, 1200)




    }

    const handleResendCode = () => {
        enqueueSnackbar("Code sent sucessfully", { variant: "success" })
    }


    return (
        <AuthLayout>


            <motion.div

                className='forgotPw'
                {...smoothComeUp}
            >
                <div className="formUtils">

                    <Link to={"/auth/forgotPw"}><p><ChevronLeftIcon />Back</p></Link>
                </div>


                <div className="fpHeader">
                    <h1>Please check your email!</h1>
                    <p>We've emailed a 6-digit confirmation code to acb@domain, please enter the code in below box to verify your email.</p>
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
                                error={!!errors.loginEmail}
                                helperText={errors.loginEmail?.message}
                            />

                        </div>

                        <button type='submit'>{isLoading ? <CircularProgress color='inherit' size={25} /> : 'Verify'}</button>

                        <div className="formUtils">

                            <div style={{ display: "flex", alignItems: "center", width: "100%", justifyContent: "center", gap: "5px", marginTop: "25px" }}>Don't have a code?<p onClick={handleResendCode} style={{ cursor: "pointer" }}>Resend code</p></div>
                        </div>
                    </form>
                    {/* <DevTool control={control} /> */}
                </div>

            </motion.div>
        </AuthLayout>

    )
}

export default NewPw