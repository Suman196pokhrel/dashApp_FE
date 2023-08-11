import React, { useState } from 'react'
import AuthLayout from "../../layouts/AuthLayout"
import "./forgotPw.scss"
import { CircularProgress, TextField } from '@mui/material'
import { useForm } from "react-hook-form"
import { Link, useNavigate } from 'react-router-dom'
import { enqueueSnackbar } from 'notistack'
import { motion } from 'framer-motion'
import { smoothComeUp, smoothFromRight } from "../../utils/framerAnimations"
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import axios from 'axios'





const ForgotPw = () => {



    const { handleSubmit, register, formState: { errors }, reset } = useForm();
    const [otpMode, setotpMode] = useState("email")
    const [isLoading, setIsLoading] = useState(false)
    const navigate = useNavigate()


    const handleOtpMode = () => {
        reset()
        if (otpMode === "email") {
            setotpMode("mobile")
        } else {
            setotpMode("email")
        }
    }


    const handleFp = async (data) => {
        // Make API CALL

        const forgotPwData = { "mode": otpMode === "email" ? "email" : "mobile", "email": data.fpEmail ? data.fpEmail : "", "mobileNum": data.mobileNum ? data.countryCode + data.mobileNum : "" }
        try {

            setIsLoading(true)

            // const formDataEncoded = new URLSearchParams(formData).toString();
            const response = await axios.post(`http://64.227.166.179: 8000 / auth / forgotPw`, forgotPwData)
            console.log('Response => ', response.data)
            sessionStorage.setItem('forgotPwData', JSON.stringify(forgotPwData))
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



        <motion.div

            className='forgotPw'
            {...smoothComeUp}
        >
            <div className="formUtils">

                <Link to={"/auth/login"}><p><ChevronLeftIcon />Back</p></Link>
            </div>


            <div className="fpHeader">
                <h1>Forgot your password ?</h1>
                <p>Please enter the {otpMode === "email" ? "email address" : "mobile number"} associated with your account, and we'll send you an OTP.</p>
            </div>


            <div className="fpForm">

                <form onSubmit={handleSubmit(handleFp)} noValidate>

                    {otpMode === "email" ? (

                        <div className="formFields">

                            <motion.div {...smoothFromRight} >
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
                                    sx={{ width: "100%" }}
                                    label="Email address"
                                    variant='outlined'
                                    error={!!errors.fpEmail}
                                    helperText={errors.fpEmail?.message}
                                />
                            </motion.div>

                        </div>
                    ) : (
                        <>
                            <motion.div {...smoothFromRight} style={{ display: "flex", gap: "2px" }}>
                                <TextField
                                    {...register("countryCode", {
                                        required: 'Enter the country code',
                                        pattern: {
                                            value: /^\+?[0-9]+$/,
                                            message: "Invalid country code"
                                        }
                                    })}
                                    sx={{ width: "40%" }}
                                    type='tel'
                                    id='countryCode'
                                    label="Country Code"
                                    variant='outlined'
                                    autoComplete='off'
                                    error={!!errors.countryCode}
                                    helperText={errors.countryCode?.message}
                                />
                                <TextField
                                    {...register("mobileNum", {
                                        required: 'Enter the mobile number.',
                                        pattern: {
                                            value: /^\+?[0-9]{10,}$/,
                                            message: "Invalid mobile number"
                                        }
                                    })}
                                    sx={{ width: "100%" }}
                                    type='tel'
                                    id='mobileNum'
                                    label="Phone Number"
                                    variant='outlined'
                                    error={!!errors.mobileNum}
                                    helperText={errors.mobileNum?.message}
                                />
                            </motion.div>
                        </>
                    )}

                    <button type='submit'>{isLoading ? <CircularProgress color='inherit' size={25} /> : 'Reset Password'}</button>
                    <div className="formUtils" style={{ display: "flex", alignItems: "center", width: "100%", justifyContent: "center", gap: "5px", marginTop: "25px" }}>
                        <span>Having Problems ? </span><p style={{ cursor: "pointer" }} onClick={handleOtpMode}>{otpMode === "email" ? "Use Phone Number Instead" : "Use Email Instead"}</p>
                    </div>

                </form>

                {/* <DevTool control={control} /> */}
            </div>

        </motion.div>


    )
}

export default ForgotPw