import React, { useState } from 'react'
import AuthLayout from "../../layouts/AuthLayout"
import "./newPw.scss"
import { CircularProgress, TextField } from '@mui/material'
import { Controller, useForm } from "react-hook-form"
import { Link, useNavigate } from 'react-router-dom'
import { enqueueSnackbar } from 'notistack'
import { motion } from 'framer-motion'
import { smoothComeUp } from "../../utils/framerAnimations"
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import OTPInput from 'react-otp-input';
import axios from 'axios'
import { Progress } from 'antd'






const NewPw = () => {
    var forgotPwData = JSON.parse(sessionStorage.getItem('forgotPwData'))



    const { handleSubmit, register, formState: { errors }, control } = useForm();
    const [isLoading, setIsLoading] = useState(false)
    // const [otp, setOtp] = useState('');
    const navigate = useNavigate()


    const [isResending, setIsResending] = useState(false)
    const [remainingTime, setRemainingTime] = useState(0)


    const handleNp = async (data) => {
        // Make API CALL
        try {

            setIsLoading(true)

            // const formDataEncoded = new URLSearchParams(formData).toString();
            const response = await axios.post(`http://127.0.0.1:8000/auth/validateNewPw`, { "value": data.otp, "password": data.confirmPassword, "mode": forgotPwData.mode, "identifier": forgotPwData.mode === "email" ? forgotPwData.email : forgotPwData.mobileNum })
            console.log('Response => ', response.data)
            navigate("/auth/login")
            setIsLoading(false)
            enqueueSnackbar("Password Changed Sucessfully", { variant: "success" })

        }
        catch (error) {
            console.log('Error Changing password , ', error.response.data.detail)
            enqueueSnackbar(`${error.response.data.detail} `, { variant: "error" })
            setIsLoading(false)

        }

        // console.log(control)

    }

    const handleResendCode = async () => {

        if (!isResending) {
            setIsResending(true)
            setRemainingTime(30)

            const timer = setInterval(() => {
                setRemainingTime((prev) => prev - 1)
            }, 1000)


            setTimeout(() => {
                clearInterval(timer)
                setIsResending(false)
            }, 30000)


            const newPwData = { "mode": forgotPwData.mode, "email": forgotPwData.email, "mobileNum": forgotPwData.mobileNum }
            // // // API CALL 
            try {
                const response = await axios.post(`http://127.0.0.1:8000/auth/forgotPw`, newPwData)
                console.log(response)
                enqueueSnackbar("OTP sent In email", { variant: "success" })

            }
            catch (error) {
                enqueueSnackbar("Failed To Send OTP", { variant: "error" })

            }




        }




    }

    // JUST TO ENSURE THAT THE TIMER IS SYNC 


    return (



        <motion.div

            className='forgotPw'
            {...smoothComeUp}
        >
            <div className="formUtils">

                <Link to={"/auth/login"}><p><ChevronLeftIcon />Return to Login</p></Link>
            </div>


            <div className="fpHeader">
                <h1>Please check your email!</h1>
                <p>We've emailed a 6-digit confirmation code to acb@domain, please enter the code in below box to verify your email.</p>
            </div>


            <div className="fpForm">

                <form onSubmit={handleSubmit(handleNp)} noValidate>

                    <div className="formFields">


                        <Controller
                            name='otp'
                            control={control}
                            rules={{ required: 'OTP cannot be empty', minLength: { value: 6, message: "OTP incorrect" } }}
                            defaultValue=""
                            render={({ field }) => (
                                <OTPInput
                                    // placeholder='------'
                                    value={field.value}
                                    onChange={field.onChange}
                                    numInputs={6} // Change this to 5 if you want 5 consecutive input boxes
                                    isInputNum={true}
                                    containerStyle={false}
                                    shouldAutoFocus={true}
                                    renderInput={(props) => <input id='otpInputI' {...props} style={{ height: "50px", width: "50px", borderRadius: "8px", marginBottom: "10px", textAlign: "center", fontSize: "20px", color: "#212B36", border: "1px solid rgba(145, 158, 171, 0.52)" }} />}
                                />
                            )}
                        />
                        {errors.otp && <p style={{ color: "red", fontSize: "12px", fontWeight: 400 }}>{errors.otp.message}</p>}

                        <TextField
                            {...register("newPassword", {
                                required: 'Password cannot be empty.',
                                minLength: {
                                    value: 6,
                                    message: "password should be atleast 6 digits"
                                }
                            })}
                            sx={{ margin: "24px 0px" }}
                            type='password'
                            label="Password"
                            variant='outlined'
                            error={!!errors.newPassword}
                            helperText={errors.newPassword?.message}

                        />

                        <TextField
                            {...register("confirmPassword", {
                                // required: 'Confirm password cannot be empty.',
                                validate: (value) => value === control._formValues.newPassword || 'Passwords do not match'
                            })}
                            sx={{ margin: "0 0 24px 0px" }}
                            type='password'
                            label="Confirm password"
                            variant='outlined'
                            error={!!errors.confirmPassword}
                            helperText={errors.confirmPassword?.message}

                        />

                    </div>

                    <button type='submit'>{isLoading ? <CircularProgress color='inherit' size={25} /> : 'Verify'}</button>

                    <div className="formUtils">

                        {isResending ? (

                            <div style={{ display: "flex", alignItems: "center", width: "100%", justifyContent: "center", gap: "5px", marginTop: "25px" }}>
                                <div className="loaderResend">
                                    <p className='disabled'>{`Resend available after ${remainingTime} seconds`}</p>
                                    <Progress percent={((30 - remainingTime) / 30) * 100} status='active' showInfo={false} strokeColor={{ from: "#01A870", to: "#5BE49B" }} />

                                </div>


                            </div>
                        ) : (

                            <div style={{ display: "flex", alignItems: "center", width: "100%", justifyContent: "center", gap: "5px", marginTop: "25px" }}>
                                Don't have a code?
                                <p onClick={handleResendCode} style={{ cursor: "pointer" }}>
                                    Resend code
                                </p>
                            </div>
                        )}



                    </div>
                </form>
            </div>

        </motion.div>




    )
}

export default NewPw